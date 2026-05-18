import { useMutation } from "@tanstack/react-query";
import { ipiService } from "../services/ipi-service";
import { IpiFormData } from "../schemas/ipi-schema";

export function useIpi() {
  const mutation = useMutation({
    mutationFn: (data: IpiFormData) => ipiService.calculate(data),
  });

  return {
    loading: mutation.isPending,
    result: mutation.data,
    error: mutation.error ? (mutation.error as any).message || "Erro ao calcular o IPI" : null,
    calculateIpi: mutation.mutateAsync,
  };
}
