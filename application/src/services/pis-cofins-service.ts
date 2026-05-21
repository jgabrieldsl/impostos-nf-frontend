import { PisCofinsFormData } from "../schemas/pis-cofins-schema";

export const pisCofinsService = {
  async calculate(data: PisCofinsFormData): Promise<unknown> {
    return Promise.resolve({ placeholder: "PIS/COFINS calculado", data });
  }
};

