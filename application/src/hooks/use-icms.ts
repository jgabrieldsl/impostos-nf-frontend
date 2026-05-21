import { useMutation } from "@tanstack/react-query";
import { icmsService } from "../services/icms-service";
import { IcmsFormData } from "../schemas/icms-schema";

export function useIcms() {
  const mutation = useMutation({
    mutationFn: (data: IcmsFormData) => icmsService.calculate(data),
  });

  return {
    loading: mutation.isPending,
    result: mutation.data,
    error: mutation.error ? (mutation.error as Error).message || "Erro ao calcular o ICMS" : null,
    calculateIcms: mutation.mutateAsync,
  };
}

