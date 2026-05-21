import apiClient from "./api-client";
import { PisCofinsFormData } from "../schemas/pis-cofins-schema";

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
    const response = await apiClient.post<PisCofinsResponse>("/pis-cofins", data);
    return response.data;
  },
};
