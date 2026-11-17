---
title: Data keluar: lembar data, field, dan mesh
summary: Simpan lembar data bodi hasil generator sebagai JSON atau PDF, field-nya sebagai citra VTK (.vti) atau level set OpenVDB (.vdb), dan permukaannya sebagai mesh VTK (.vtu) untuk ParaView dan alat analisis lain, serta mesh sebagai 3MF yang memuat data generator. Bagian yang sama selalu menulis berkas yang sama.
keywords: ekspor, lembar data, json, pdf, vti, vtu, vtk, paraview, 3mf, field, jarak bertanda, fea, cfd, metadata, openvdb
from: 817b4579
---

Di ruang kerja {{ui:Engineer}}, atau di properti bodi yang dihasilkan, buka **Data keluar**:

| Tombol | Berkas | Untuk |
|---|---|---|
| Lembar data (JSON) | `.json` | Setiap masukan, setiap angka dengan satuan dan sumbernya, pemeriksaan, sidik jari mesh. Diurutkan, tanpa waktu: bagian yang sama menghasilkan berkas yang sama. |
| Lembar data (PDF) | `.pdf` | Hal yang sama di atas kertas, dalam beberapa halaman sesuai kebutuhan. |
| Field (.vti) | `.vti` | Bagian sebagai jarak bertanda (negatif di dalam) dan topeng bagian dalam pada kisi titik: berkas citra VTK untuk ParaView dan alat yang dibangun di atas VTK. Dibangun dari permukaan bodi pada ukuran voxel masukan generator, sehingga butuh waktu sejenak, dan bodi di atas 400 000 segitiga terlalu besar untuk halaman: simpan field dari skrip (`field_bake`) sebagai gantinya. |
| Level set (.vdb) | `.vdb` | Field yang sama sebagai level set OpenVDB: pohon jarang yang hanya menyimpan pita tipis voxel di sekitar permukaan, untuk alat yang membaca OpenVDB (renderer, simulasi, dan program 3D). Ukuran voxel dan satuan mengikuti generator (milimeter), pita sempit adalah bagian aktif, dan bagian dalam bernilai negatif. Dibangun dari permukaan seperti `.vti`, dengan batas 400 000 segitiga yang sama; berkas yang lebih dari 1.5 GB ditolak (gunakan ukuran voxel yang lebih besar). Berkas memakai format OpenVDB 224, tidak dikompresi selain pengemasan nilai aktif milik OpenVDB sendiri, sehingga pembaca OpenVDB mana pun dapat membukanya. |
| Permukaan (.vtu) | `.vtu` | Segitiganya, dengan luas dan normal masing-masing. |
| 3MF dengan data generator | `.3mf` | Mesh dalam milimeter untuk slicer, dengan generator, masukannya, dan (untuk kisi bertingkat) rentang dindingnya sebagai metadata dalam berkas. |

Tidak ada yang dalam berkas ini berasal dari jam atau mesin, sehingga Anda dapat membandingkan dua berkas byte demi byte: byte yang berubah berarti bagian yang berubah.

## Belum dibuat

- `.vti` atau `.vdb` dari field pada ukuran voxel selain milik generator sendiri.
- Membaca berkas `.vdb` (hanya penulisan yang sudah dibuat).
