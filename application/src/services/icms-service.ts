import apiClient from "./api-client";

export const icmsService = {
  
  async calculate(data: any): Promise<any> {

    return Promise.resolve({ placeholder: "ICMS calculado", data });
  }
};
