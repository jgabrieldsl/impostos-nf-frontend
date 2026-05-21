import axios from "axios";
import { PisCofinsFormData } from "../schemas/pis-cofins-schema";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333";

export interface PisCofinsResponse {
  productValue: string;
  pisRate: string;
  pisAmount: string;
  confinsRate: string;
  confinsAmount: string;
  totalTax: string;
  total: string;
}

export const pisCofinsService = {
  async calculate(data: PisCofinsFormData): Promise<PisCofinsResponse> {
    const response = await axios.post<PisCofinsResponse>(`${API_URL}/pis-cofins`, data);
    return response.data;
  },
};
