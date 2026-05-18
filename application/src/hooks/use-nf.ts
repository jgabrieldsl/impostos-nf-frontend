import { useMutation } from "@tanstack/react-query";
import { nfService } from "../services/nf-service";
import { NfFormData } from "../schemas/nf-schema";

export function useNf() {
  const mutation = useMutation({
    mutationFn: (data: NfFormData) => nfService.calculate(data),
  });

  return {
    loading: mutation.isPending,
    result: mutation.data,
    error: mutation.error ? (mutation.error as any).message || "Erro ao calcular a NF Completa" : null,
    calculateNf: mutation.mutateAsync,
  };
}
