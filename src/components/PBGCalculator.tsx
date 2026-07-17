import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import LogoNuansaLegal from '../assets/LOGO-NUANSA-LEGAL.jpeg';
import { CalculatorForm } from './CalculatorForm';
import { CalculationResultView } from './CalculationResultView';
import { NotesSection } from './NotesSection';

export const PBGCalculator: React.FC = () => {
  const { inputs, hasil, hitungBiaya } = useCalculator();

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={LogoNuansaLegal} alt="Nuansa Legal" style={{ width: '98px', height: '98px', objectFit: 'contain' }} />
          </div>

          <div className="header-text">
            <h1>KALKULATOR PBG & IMB</h1>

            <p className="subtitle">
              Hitung estimasi biaya pengurusan Persetujuan Bangunan Gedung (PBG)
              dan Sertifikat Laik Fungsi (SLF)
            </p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="hero-section"></div>

        <div className="container">
          <CalculatorForm
            inputs={inputs}
            onCalculate={hitungBiaya}
          />

          {hasil && (
            <CalculationResultView hasil={hasil} />
          )}

          <NotesSection />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>
              &copy; 2026 PT Nuansa Berkah Sejahtera.
              Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};