export type FungsiBangunan = 'hunian' | 'usaha' | 'industri' | 'publik';
export type Lokasi = 'jakarta' | 'bekasi' | 'bandung' | 'kabupaten';
export type Kompleksitas = 'normal' | 'sedang' | 'tinggi';

export interface CalculatorInputs {
  luasBangunan: number;
  jumlahLantai: number;
  lokasi: Lokasi;
  fungsiBangunan: FungsiBangunan;
  kompleksitas: Kompleksitas;
  adaBasement: boolean;
}

export interface CalculationResult {
  biayaDasar: number;
  survey: number;
  drone: number;
  slf: number;
  kkpr: number;
  lingkungan: number;
  struktur: number;
  total: number;
}
