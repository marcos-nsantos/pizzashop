import { api } from "@/lib/axios.ts";

interface GetProfileResponse {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  role: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>("/me");
  return response.data;
}
