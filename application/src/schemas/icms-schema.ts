import { z } from "zod";

export const icmsSchema = z.object({
  value: z
    .number({
      error: (issue) =>
        issue.input === undefined ? "O valor do produto é obrigatório" : "Valor inválido",
    })
    .positive("O valor deve ser maior que zero"),
  originState: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "O estado de origem é obrigatório" : "Estado inválido",
    })
    .length(2, "Use a sigla de 2 letras do estado (UF)"),
  destinationState: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "O estado de destino é obrigatório" : "Estado inválido",
    })
    .length(2, "Use a sigla de 2 letras do estado (UF)"),
});

export type IcmsFormData = z.infer<typeof icmsSchema>;
