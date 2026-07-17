import React from 'react';
import { FungsiBangunan, Lokasi, Kompleksitas } from '../types/calculator.types';

interface Props {
  inputs: {
    luasBangunan: string; setLuasBangunan: (v: string) => void;
    jumlahLantai: string; setJumlahLantai: (v: string) => void;
    lokasi: Lokasi; setLokasi: (v: Lokasi) => void;
    fungsiBangunan: FungsiBangunan; setFungsiBangunan: (v: FungsiBangunan) => void;
    kompleksitas: Kompleksitas; setKompleksitas: (v: Kompleksitas) => void;
    adaBasement: boolean; setAdaBasement: (v: boolean) => void;
  };
  onCalculate: () => void;
}

export const CalculatorForm: React.FC<Props> = ({ inputs, onCalculate }) => {
  return (
    <div className="calculator-card">
      <h2 className="calculator-title">Detail Bangunan</h2>
      
      <div className="input-section">
        <div className="input-group">
          <label>Luas Bangunan (m²) <span className="info-icon" title="Total luas seluruh lantai bangunan">ⓘ</span></label>
          <div className="input-wrapper">
            <input
              type="number"
              value={inputs.luasBangunan}
              onChange={(e) => inputs.setLuasBangunan(e.target.value)}
              placeholder="Contoh: 120"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Fungsi Bangunan <span className="info-icon" title="Peruntukan bangunan">ⓘ</span></label>
          <select value={inputs.fungsiBangunan} onChange={(e) => inputs.setFungsiBangunan(e.target.value as FungsiBangunan)}>
            <option value="hunian">Rumah Tinggal / Hunian</option>
            <option value="usaha">Komersial / Usaha (Ruko, Kantor)</option>
            <option value="industri">Industri / Gudang / Pabrik</option>
            <option value="publik">Fasilitas Publik / Sosial</option>
          </select>
        </div>

        <div className="input-group">
          <label>Jumlah Lantai</label>
          <select value={inputs.jumlahLantai} onChange={(e) => inputs.setJumlahLantai(e.target.value)}>
            <option value="1">1 Lantai</option>
            <option value="2">2 Lantai</option>
            <option value="3">3 Lantai</option>
            <option value="4">Lebih dari 3 Lantai</option>
          </select>
        </div>

        <div className="input-group">
          <label>Lokasi Bangunan</label>
          <select value={inputs.lokasi} onChange={(e) => inputs.setLokasi(e.target.value as Lokasi)}>
            <option value="jakarta">DKI Jakarta</option>
            <option value="bekasi">Kota Bekasi / Depok / Tangerang</option>
            <option value="bandung">Kota Bandung</option>
            <option value="kabupaten">Wilayah Kabupaten</option>
          </select>
        </div>

        <div className="input-group">
          <label>Tingkat Kompleksitas</label>
          <select value={inputs.kompleksitas} onChange={(e) => inputs.setKompleksitas(e.target.value as Kompleksitas)}>
            <option value="normal">Sederhana / Normal</option>
            <option value="sedang">Sedang (Ada desain khusus)</option>
            <option value="tinggi">Tinggi (Struktur rumit/bentang lebar)</option>
          </select>
        </div>

        <div className="input-group" style={{ justifyContent: 'center' }}>
          <label style={{ marginBottom: '10px' }}>Ada Basement?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                checked={inputs.adaBasement === true}
                onChange={() => inputs.setAdaBasement(true)}
              />
              Ya
            </label>
            <label>
              <input
                type="radio"
                checked={inputs.adaBasement === false}
                onChange={() => inputs.setAdaBasement(false)}
              />
              Tidak
            </label>
          </div>
        </div>

        <div className="button-container">
          <button className="hitung-btn" onClick={onCalculate}>HITUNG ESTIMASI BIAYA</button>
        </div>
      </div>
    </div>
  );
};
