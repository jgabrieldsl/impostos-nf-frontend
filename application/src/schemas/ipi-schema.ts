import { z } from "zod";

export const ipiSchema = z.object({
  value: z
    .number({
      error: (issue) =>
        issue.input === undefined ? "O valor do produto é obrigatório" : "Valor inválido",
    })
    .positive("O valor deve ser maior que zero"),
  rate: z
    .number({
      error: (issue) =>
        issue.input === undefined ? "A alíquota de IPI é obrigatória" : "Alíquota inválida",
    })
    .nonnegative("A alíquota não pode ser negativa"),
});

export type IpiFormData = z.infer<typeof ipiSchema>;
