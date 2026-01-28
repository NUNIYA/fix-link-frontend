import api from "./auth.api";
import type { Job } from "../types/auth.types";

/**
 * Create a new job
 */
export const createJob = async (jobData: Partial<Job>) => {
    try {
        const response = await api.post("/jobs/jobs/", jobData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.detail || "Failed to create job");
    }
};

/**
 * Get job details
 */
export const getJobDetails = async (id: string) => {
    const response = await api.get(`/jobs/jobs/${id}/`);
    return response.data;
};

/**
 * List jobs
 */
export const listJobs = async () => {
    const response = await api.get("/jobs/jobs/");
    return response.data;
};
