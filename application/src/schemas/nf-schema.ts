import { z } from "zod";
import { icmsSchema } from "./icms-schema";
import { ipiSchema } from "./ipi-schema";
import { pisCofinsSchema } from "./pis-cofins-schema";

export const nfSchema = z.object({
  productValue: z
    .number({
      error: (issue) =>
        issue.input === undefined ? "O valor dos produtos é obrigatório" : "Valor inválido",
    })
    .positive("O valor deve ser maior que zero"),
  icmsParams: icmsSchema.omit({ value: true }),
  ipiParams: ipiSchema.omit({ value: true }),
  pisCofinsParams: pisCofinsSchema.omit({ revenue: true }),
});

export type NfFormData = z.infer<typeof nfSchema>;
