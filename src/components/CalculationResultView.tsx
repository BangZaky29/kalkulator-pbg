import React from 'react';
import { CalculationResult } from '../types/calculator.types';
import { formatRupiah } from '../utils/currency';

interface Props {
  hasil: CalculationResult;
}

export const CalculationResultView: React.FC<Props> = ({ hasil }) => {
  return (
    <div className="result-section">
      <h2 className="result-title">Estimasi Biaya PBG/IMB</h2>
      
      <div className="result-grid">
        <div className="form-field">
          <label>Biaya Dasar Retribusi PBG</label>
          <input type="text" readOnly value={formatRupiah(hasil.biayaDasar)} />
        </div>
        <div className="form-field">
          <label>Biaya Survey & Pengukuran</label>
          <input type="text" readOnly value={formatRupiah(hasil.survey)} />
        </div>
        <div className="form-field">
          <label>Pemetaan Drone / Topografi</label>
          <input type="text" readOnly value={formatRupiah(hasil.drone)} />
        </div>
        <div className="form-field">
          <label>Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR)</label>
          <input type="text" readOnly value={formatRupiah(hasil.kkpr)} />
        </div>
        <div className="form-field">
          <label>Persetujuan Lingkungan</label>
          <input type="text" readOnly value={formatRupiah(hasil.lingkungan)} />
        </div>
        
        {hasil.slf > 0 && (
          <div className="form-field" style={{ backgroundColor: '#fff3cd', padding: '10px', borderRadius: '8px' }}>
            <label style={{ color: '#856404' }}>Sertifikat Laik Fungsi (SLF) - Required</label>
            <input type="text" readOnly value={formatRupiah(hasil.slf)} style={{ borderColor: '#ffeeba' }} />
          </div>
        )}
        
        {hasil.struktur > 0 && (
          <div className="form-field" style={{ backgroundColor: '#fff3cd', padding: '10px', borderRadius: '8px' }}>
            <label style={{ color: '#856404' }}>Kajian Struktur / Konsultan - Required</label>
            <input type="text" readOnly value={formatRupiah(hasil.struktur)} style={{ borderColor: '#ffeeba' }} />
          </div>
        )}

        <div className="total-field">
          <label>TOTAL ESTIMASI PENGURUSAN</label>
          <input type="text" readOnly value={formatRupiah(hasil.total)} />
        </div>
      </div>
    </div>
  );
};
