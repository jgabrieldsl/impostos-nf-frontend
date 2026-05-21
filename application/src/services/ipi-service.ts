import { IpiFormData } from "../schemas/ipi-schema";

export const ipiService = {
  async calculate(data: IpiFormData): Promise<unknown> {
    return Promise.resolve({ placeholder: "IPI calculado", data });
  }
};

