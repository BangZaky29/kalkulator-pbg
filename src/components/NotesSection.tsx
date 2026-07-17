import React from 'react';

export const NotesSection: React.FC = () => {
  return (
    <div className="notes-section">
      <h3>Informasi Penting & Catatan</h3>
      <div className="notes-content">
        <div className="note-column">
          <h4>Persyaratan Umum PBG</h4>
          <ul>
            <li>Dokumen Legalitas Tanah (Sertifikat, AJB, dll)</li>
            <li>KTP & NPWP Pemohon / Penanggung Jawab</li>
            <li>Gambar Arsitektur, Struktur, dan MEP</li>
            <li>Bukti Pembayaran PBB Tahun Terakhir</li>
          </ul>
        </div>
        <div className="note-column">
          <h4>Ketentuan Khusus</h4>
          <ul>
            <li>Bangunan komersial <b>wajib</b> memiliki Sertifikat Laik Fungsi (SLF) dan Dokumen Lingkungan (UKL/UPL atau SPPL).</li>
            <li>Bangunan dengan luas &gt; 500 m² atau lantai &gt; 2 <b>wajib</b> melampirkan kajian struktur dari perencana bersertifikat (SKA).</li>
            <li>Biaya di atas adalah <b>estimasi kasar</b> dan dapat berubah sesuai dengan kebijakan peraturan daerah setempat.</li>
          </ul>
        </div>
      </div>
      
      <div className="disclaimer">
        <h4>⚠️ Disclaimer</h4>
        <p>Perhitungan kalkulator ini bersifat estimasi berdasarkan variabel umum dan tidak dapat dijadikan sebagai acuan tarif resmi retribusi pemerintah.</p>
        <p>Nilai retribusi PBG yang pasti akan dikeluarkan secara resmi oleh <b>Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP)</b> atau Dinas Teknis terkait di daerah Anda setelah dokumen disidangkan.</p>
      </div>
    </div>
  );
};
