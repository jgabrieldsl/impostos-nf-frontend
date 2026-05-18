import { z } from "zod";

export const pisCofinsSchema = z.object({
  revenue: z
    .number({
      error: (issue) =>
        issue.input === undefined ? "O faturamento bruto/valor é obrigatório" : "Faturamento inválido",
    })
    .positive("O faturamento deve ser maior que zero"),
  regime: z.enum(["cumulativo", "nao-cumulativo"], {
    error: (issue) =>
      issue.input === undefined ? "Selecione o regime tributário (Cumulativo ou Não-Cumulativo)" : "Regime inválido",
  }),
});

export type PisCofinsFormData = z.infer<typeof pisCofinsSchema>;
