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
  const raw =
    record.sourceUpvote ??
    record.upvote ??
    nestedUser.upvote ??
    record.verified; // legacy fallback only when explicitly boolean true
  if (raw === true) return 1;
  if (raw === false) return 0;
  return parseUpvoteValue(raw);
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
