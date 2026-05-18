export type BrazilianState =
  | "AC" | "AL" | "AP" | "AM" | "BA" | "CE" | "DF" | "ES" | "GO"
  | "MA" | "MT" | "MS" | "MG" | "PA" | "PB" | "PR" | "PE" | "PI"
  | "RJ" | "RN" | "RS" | "RO" | "RR" | "SC" | "SP" | "SE" | "TO";

export type TaxRegime = "cumulativo" | "nao-cumulativo";

export interface IcmsCalculationResult {
  value: number;
  originState: BrazilianState;
  destinationState: BrazilianState;
  aliqOrigin: number;
  aliqDest: number;
  icmsAmount: number;
}

export interface IpiCalculationResult {
  value: number;
  rate: number;
  ipiAmount: number;
}

export interface PisCofinsCalculationResult {
  revenue: number;
  regime: TaxRegime;
  pisRate: number;
  cofinsRate: number;
  pisAmount: number;
  cofinsAmount: number;
  totalAmount: number;
}

export interface NfCalculationResult {
  productValue: number;
  icms: IcmsCalculationResult;
  ipi: IpiCalculationResult;
  pisCofins: PisCofinsCalculationResult;
  totalTaxes: number;
  netAmount: number;
}
