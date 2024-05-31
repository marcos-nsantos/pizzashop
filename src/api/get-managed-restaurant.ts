import { api } from "@/lib/axios.ts";

interface GetManagedResponse {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  role: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedResponse>("/managed-restaurant");
  return response.data;
}
