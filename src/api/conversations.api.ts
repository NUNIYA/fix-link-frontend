import api, { parseError } from "./auth.api";

export interface Conversation {
  id: string;
  job?: string;
  job_id?: string;
  customer?: string;
  professional?: string;
  created_at?: string;
  updated_at?: string;
  last_message?: string;
  unread_count?: number;
}

export interface Message {
  id: string;
  sender: string;
  text?: string;
  body?: string;
  content?: string;
  // Attachment support (requires backend to add 'attachment' field to Message model)
  attachment?: string;
  attachment_url?: string;
  // Timestamp fields — backend may use any of these
  created_at?: string;
  createdAt?: string;
  sent_at?: string;
  timestamp?: string;
  updated_at?: string;
  updatedAt?: string;
  is_read: boolean;
  isRead?: boolean;
  is_me?: boolean;
}

/**
 * Get conversation by ID
 */
export const getConversationById = async (id: string): Promise<Conversation> => {
  try {
    const response = await api.get(`/conversations/${id}/`);
    return response.data;
  } catch (error: any) {
    console.error(`getConversationById: failed for ${id}`, error?.response?.data || error?.message || error);
    throw new Error(parseError(error));
  }
};

/**
 * Get or Create a conversation for a specific job/participant.
 * POST /api/conversations/
 */
export const getOrCreateConversation = async (participantId: string, jobId?: string): Promise<Conversation> => {
  try {
    const response = await api.post("/conversations/", { 
      participant_id: participantId, 
      job_id: jobId 
    });
    return response.data;
  } catch (error: any) {
    console.error("getOrCreateConversation: failed", error?.response?.data || error?.message || error);
    throw new Error(parseError(error));
  }
};

/**
 * List messages for a conversation
 * GET /api/conversations/{id}/messages/
 */
export const getMessages = async (conversationId: string): Promise<Message[]> => {
  try {
    const response = await api.get(`/conversations/${conversationId}/messages/`);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error: any) {
    console.error(`getMessages: failed for ${conversationId}`, error?.response?.data || error?.message || error);
    throw new Error(parseError(error));
  }
};

/**
 * Send a message to a conversation.
 * POST /api/conversations/{id}/messages/
 *
 * When an image attachment is provided it is sent as multipart/form-data so
 * the backend can save it.  A plain text message is sent as JSON.
 *
 * NOTE: Image sending requires the backend to add an `attachment` FileField to
 * the Message model and accept MultiPartParser. Until then the attachment is
 * sent but silently ignored — text messages always work.
 */
export const sendMessage = async (
  conversationId: string,
  text: string,
  attachment?: File | null,
): Promise<Message> => {
  try {
    let response;
    if (attachment) {
      const fd = new FormData();
      if (text.trim()) fd.append("body", text.trim());
      fd.append("attachment", attachment);
      response = await api.post(`/conversations/${conversationId}/messages/`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      response = await api.post(`/conversations/${conversationId}/messages/`, { body: text });
    }
    return response.data;
  } catch (error: any) {
    console.error(`sendMessage: failed for ${conversationId}`, error?.response?.data || error?.message || error);
    const err = new Error(parseError(error)) as any;
    err.status = error?.response?.status;
    err.response = error?.response;
    throw err;
  }
};

/**
 * Mark all messages in a conversation as read
 * POST /api/conversations/{id}/mark-read/
 */
export const markAsRead = async (conversationId: string): Promise<void> => {
  try {
    await api.post(`/conversations/${conversationId}/mark-read/`);
  } catch (error: any) {
    console.error(`markAsRead: failed for ${conversationId}`, error?.response?.data || error?.message || error);
  }
};

/**
 * Get total unread message count
 * GET /api/conversations/unread-count/
 */
export const getUnreadCount = async (): Promise<number> => {
  try {
    const response = await api.get("/conversations/unread-count/");
    return response.data.unread_messages || response.data.count || 0;
  } catch (error: any) {
    console.error("getUnreadCount: failed", error?.response?.data || error?.message || error);
    return 0;
  }
};
