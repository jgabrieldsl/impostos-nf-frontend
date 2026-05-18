import apiClient from "./api-client";

export const pisCofinsService = {
  
  async calculate(data: any): Promise<any> {

    return Promise.resolve({ placeholder: "PIS/COFINS calculado", data });
  }
};
