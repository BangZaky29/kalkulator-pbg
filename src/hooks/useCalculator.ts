import { useState, useCallback } from 'react';
import { CalculatorInputs, CalculationResult, FungsiBangunan, Lokasi, Kompleksitas } from '../types/calculator.types';
import { CalculatorEngine } from '../services/CalculatorEngine';

export const useCalculator = () => {
  // State Input
  const [luasBangunan, setLuasBangunan] = useState<string>('');
  const [jumlahLantai, setJumlahLantai] = useState<string>('1');
  const [lokasi, setLokasi] = useState<Lokasi>('jakarta');
  const [fungsiBangunan, setFungsiBangunan] = useState<FungsiBangunan>('hunian');
  const [kompleksitas, setKompleksitas] = useState<Kompleksitas>('normal');
  const [adaBasement, setAdaBasement] = useState<boolean>(false);

  // State Output
  const [hasil, setHasil] = useState<CalculationResult | null>(null);

  const hitungBiaya = useCallback(() => {
    const luas = parseFloat(luasBangunan);
    if (isNaN(luas) || luas <= 0) {
      alert('Mohon masukkan luas bangunan yang valid.');
      return;
    }

    const inputs: CalculatorInputs = {
      luasBangunan: luas,
      jumlahLantai: parseInt(jumlahLantai),
      lokasi,
      fungsiBangunan,
      kompleksitas,
      adaBasement
    };

    const engine = new CalculatorEngine();
    const result = engine.calculate(inputs);
    setHasil(result);
  }, [luasBangunan, jumlahLantai, lokasi, fungsiBangunan, kompleksitas, adaBasement]);

  return {
    inputs: {
      luasBangunan, setLuasBangunan,
      jumlahLantai, setJumlahLantai,
      lokasi, setLokasi,
      fungsiBangunan, setFungsiBangunan,
      kompleksitas, setKompleksitas,
      adaBasement, setAdaBasement
    },
    hasil,
    hitungBiaya
  };
};
