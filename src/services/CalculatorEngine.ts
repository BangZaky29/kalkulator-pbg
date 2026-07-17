import { CalculatorInputs, CalculationResult } from '../types/calculator.types';

/**
 * Service class untuk memisahkan logic perhitungan PBG/IMB.
 * Class ini hanya menangani proses kalkulasi murni tanpa bergantung pada UI (React).
 */
export class CalculatorEngine {
  
  /**
   * Mengambil tarif dasar dan koefisien fungsi berdasarkan fungsi bangunan.
   */
  private getFungsiRule(fungsi: CalculatorInputs['fungsiBangunan']) {
    switch (fungsi) {
      case 'hunian':   return { tarifDasar: 75000, koefFungsi: 1.0 };
      case 'usaha':    return { tarifDasar: 110000, koefFungsi: 1.2 };
      case 'industri': return { tarifDasar: 130000, koefFungsi: 1.4 };
      case 'publik':   return { tarifDasar: 150000, koefFungsi: 1.6 };
      default:         return { tarifDasar: 75000, koefFungsi: 1.0 };
    }
  }

  /**
   * Mengambil koefisien berdasarkan lokasi.
   */
  private getLokasiRule(lokasi: CalculatorInputs['lokasi']) {
    switch (lokasi) {
      case 'jakarta':   return 1.25;
      case 'bekasi':    return 1.10;
      case 'bandung':   return 1.05;
      case 'kabupaten': return 0.95;
      default:          return 1.0;
    }
  }

  /**
   * Mengambil koefisien berdasarkan jumlah lantai.
   */
  private getLantaiRule(lantai: number) {
    if (lantai === 2) return 1.15;
    if (lantai === 3) return 1.30;
    if (lantai > 3) return 1.50;
    return 1.0;
  }

  /**
   * Mengambil koefisien berdasarkan tingkat kompleksitas.
   */
  private getKompleksitasRule(kompleksitas: CalculatorInputs['kompleksitas']) {
    if (kompleksitas === 'sedang') return 1.15;
    if (kompleksitas === 'tinggi') return 1.35;
    return 1.0;
  }

  /**
   * Hitung biaya total berdasarkan input yang diberikan.
   */
  public calculate(inputs: CalculatorInputs): CalculationResult {
    const { 
      luasBangunan, 
      jumlahLantai, 
      lokasi, 
      fungsiBangunan, 
      kompleksitas, 
      adaBasement 
    } = inputs;

    // Hitung Koefisien & Tarif Dasar
    const { tarifDasar, koefFungsi } = this.getFungsiRule(fungsiBangunan);
    const koefLokasi = this.getLokasiRule(lokasi);
    const koefLantai = this.getLantaiRule(jumlahLantai);
    const koefKompleksitas = this.getKompleksitasRule(kompleksitas);
    const koefBasement = adaBasement ? 1.2 : 1.0;

    // Perhitungan Biaya Dasar Retribusi PBG
    const biayaDasar = 
      tarifDasar * 
      luasBangunan * 
      koefLantai * 
      koefLokasi * 
      koefFungsi * 
      koefKompleksitas * 
      koefBasement;

    // Biaya Tambahan Baku
    const survey = 500000;
    const drone = 300000;
    const kkpr = 1500000;
    const lingkungan = 800000;
    
    // Business Rules: SLF Required for Usaha/Industri/Publik
    const slf = ['usaha', 'industri', 'publik'].includes(fungsiBangunan) ? 2500000 : 0;
    
    // Business Rules: Struktur Required if Luas > 500 OR Lantai > 2
    const struktur = (luasBangunan > 500 || jumlahLantai > 2) ? 2000000 : 0;

    const total = biayaDasar + survey + drone + kkpr + lingkungan + slf + struktur;

    return {
      biayaDasar,
      survey,
      drone,
      slf,
      kkpr,
      lingkungan,
      struktur,
      total
    };
  }
}
