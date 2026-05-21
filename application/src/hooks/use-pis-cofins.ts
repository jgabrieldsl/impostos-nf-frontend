import { useMutation } from "@tanstack/react-query";
import { pisCofinsService } from "../services/pis-cofins-service";
import { PisCofinsFormData } from "../schemas/pis-cofins-schema";

export function usePisCofins() {
  const mutation = useMutation({
    mutationFn: (data: PisCofinsFormData) => pisCofinsService.calculate(data),
  });

  return {
    loading: mutation.isPending,
    result: mutation.data,
    error: mutation.error ? (mutation.error as Error).message || "Erro ao calcular o PIS/COFINS" : null,
    calculatePisCofins: mutation.mutateAsync,
  };
}

