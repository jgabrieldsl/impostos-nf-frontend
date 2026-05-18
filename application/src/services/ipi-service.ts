import apiClient from "./api-client";

export const ipiService = {
  
  async calculate(data: any): Promise<any> {

    return Promise.resolve({ placeholder: "IPI calculado", data });
  }
};
