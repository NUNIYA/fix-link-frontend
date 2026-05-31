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

export type MessageType = "text" | "image" | "file" | "job_card";

export interface SharedJobDetail {
  id: string;
  title: string;
  description: string;
  address: string;
  budget: string | number | null;
  status: string;
  scheduled_at: string | null;
  created_at: string;
}

export interface Message {
  id: string;
  sender: string;
  sender_id?: string;
  message_type?: MessageType;
  text?: string;
  body?: string;
  // file / image
  attachment?: string | null;
  attachment_url?: string | null;
  attachment_name?: string;
  // job card
  shared_job?: string | null;
  shared_job_detail?: SharedJobDetail | null;
  // timestamps
  sent_at?: string;
  created_at?: string;
  is_read: boolean;
  content?: string;
  is_me?: boolean;
}

/** Get conversation by ID */
export const getConversationById = async (id: string): Promise<Conversation> => {
  try {
    const response = await api.get(`/conversations/${id}/`);
    return response.data;
  } catch (error: any) {
    throw new Error(parseError(error));
  }
};

/** Get or create a conversation for a specific job/participant. */
export const getOrCreateConversation = async (participantId: string, jobId?: string): Promise<Conversation> => {
  try {
    const response = await api.post("/conversations/", {
      participant_id: participantId,
      job_id: jobId,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(parseError(error));
  }
};

/** List messages for a conversation */
export const getMessages = async (conversationId: string): Promise<Message[]> => {
  try {
    const response = await api.get(`/conversations/${conversationId}/messages/`);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error: any) {
    throw new Error(parseError(error));
  }
};

/** Send a plain text message */
export const sendMessage = async (conversationId: string, text: string): Promise<Message> => {
  try {
    const response = await api.post(`/conversations/${conversationId}/messages/`, { body: text });
    return response.data;
  } catch (error: any) {
    throw new Error(parseError(error));
  }
};

/** Send an image or file attachment */
export const sendAttachment = async (
  conversationId: string,
  file: File,
  caption?: string
): Promise<Message> => {
  try {
    const fd = new FormData();
    fd.append("attachment", file);
    if (caption?.trim()) fd.append("body", caption.trim());
    const response = await api.post(`/conversations/${conversationId}/messages/`, fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(parseError(error));
  }
};

/** Share a job card into the conversation */
export const sendJobCard = async (
  conversationId: string,
  jobId: string,
  note?: string
): Promise<Message> => {
  try {
    const response = await api.post(`/conversations/${conversationId}/messages/`, {
      job_id: jobId,
      body: note || "",
    });
    return response.data;
  } catch (error: any) {
    throw new Error(parseError(error));
  }
};

/** Mark all messages in a conversation as read */
export const markAsRead = async (conversationId: string): Promise<void> => {
  try {
    await api.post(`/conversations/${conversationId}/mark-read/`);
  } catch {
    // silent — non-critical
  }
};

/** Get total unread message count */
export const getUnreadCount = async (): Promise<number> => {
  try {
    const response = await api.get("/conversations/unread-count/");
    return response.data.unread_messages ?? response.data.count ?? 0;
  } catch {
    return 0;
  }
};
