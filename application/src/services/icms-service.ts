import { IcmsFormData } from "../schemas/icms-schema";

export const icmsService = {
  async calculate(data: IcmsFormData): Promise<unknown> {
    return Promise.resolve({ placeholder: "ICMS calculado", data });
  }
};

