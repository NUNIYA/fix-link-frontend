/**
 * Trusted professionals are flagged on the backend via User.upvote (1 = trusted, 0 = not).
 * Values may arrive as number, boolean, or string depending on API/version.
 */
export function parseUpvoteValue(raw: unknown): number {
  if (raw === true) return 1;
  if (raw === false || raw == null) return 0;

  if (typeof raw === "string") {
    const trimmed = raw.trim().toLowerCase();
    if (trimmed === "true") return 1;
    if (trimmed === "false" || trimmed === "") return 0;
    const parsed = Number(trimmed);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function getProfessionalUpvote(record: any): number {
  if (!record) return 0;
  const nestedUser = record.user || {};
  // Use the highest non-zero signal — sourceUpvote may be 0 while profile.user.upvote is 1.
  const candidates: unknown[] = [
    record.sourceUpvote,
    record.upvote,
    nestedUser.upvote,
    record.is_verified_professional === true ? 1 : 0,
    record.verified === true ? 1 : 0,
  ];
  let maxUpvote = 0;
  for (const raw of candidates) {
    if (raw === true) {
      maxUpvote = Math.max(maxUpvote, 1);
      continue;
    }
    if (raw === false) continue;
    maxUpvote = Math.max(maxUpvote, parseUpvoteValue(raw));
  }
  return maxUpvote;
}

/** Merge list + profile payloads and return the trusted upvote value to store on cards. */
export function resolveTrustedUpvote(
  listRecord: any,
  profileRecord: any,
  upvoteByUserId?: Map<string, number>,
): number {
  const userId = resolveUserId(listRecord);
  const fromMap = userId && upvoteByUserId ? upvoteByUserId.get(userId) : undefined;
  const merged = profileRecord ? { ...listRecord, ...profileRecord } : listRecord;
  return Math.max(
    parseUpvoteValue(fromMap),
    getProfessionalUpvote(listRecord),
    getProfessionalUpvote(merged),
  );
}

export function isTrustedProfessional(record: any): boolean {
  return getProfessionalUpvote(record) !== 0;
}

export function buildUpvoteByUserId(professionals: any[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const prof of professionals) {
    const userId = String(prof.id || prof.user?.id || "").trim();
    if (!userId) continue;
    map.set(userId, getProfessionalUpvote(prof));
  }
  return map;
}

export function resolveUserId(record: any): string {
  const nested = record?.user || {};
  return String(
    nested.id ||
      record?.user_id ||
      (typeof record?.user === "string" ? record.user : "") ||
      record?.id ||
      ""
  ).trim();
}
