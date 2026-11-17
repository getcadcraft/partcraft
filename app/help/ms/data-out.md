---
title: Data keluar: lembaran data, medan dan jejaring
summary: Simpan lembaran data badan yang dijana sebagai JSON atau PDF, medannya sebagai imej VTK (.vti) atau set aras OpenVDB (.vdb), dan permukaannya sebagai jejaring VTK (.vtu) untuk ParaView dan alat analisis lain, serta jejaring sebagai 3MF yang membawa data penjana. Bahagian yang sama sentiasa menulis fail yang sama.
keywords: eksport, lembaran data, json, pdf, vti, vtu, vtk, paraview, 3mf, medan, jarak bertanda, fea, cfd, metadata, openvdb
from: 817b4579
---

Dalam ruang kerja {{ui:Jurutera}}, atau dalam sifat badan dijana, buka **Data keluar**:

| Butang | Fail | Untuk |
|---|---|---|
| Lembaran data (JSON) | `.json` | Setiap input, setiap nombor dengan unit dan sumbernya, semakan, cap jari jejaring. Diisih, tanpa masa: bahagian yang sama memberikan fail yang sama. |
| Lembaran data (PDF) | `.pdf` | Perkara yang sama di atas kertas, merentasi seberapa banyak halaman yang diperlukan. |
| Medan (.vti) | `.vti` | Bahagian sebagai jarak bertanda (negatif di dalam) dan topeng dalaman pada grid titik: fail imej VTK untuk ParaView dan alat yang dibina atas VTK. Ia dibina daripada permukaan badan pada saiz voksel input penjana, jadi ia mengambil sedikit masa, dan badan yang melebihi 400 000 segi tiga terlalu besar untuk halaman: simpan medan daripada skrip (`field_bake`) sebagai gantinya. |
| Set aras (.vdb) | `.vdb` | Medan yang sama sebagai set aras OpenVDB: pepohon jarang yang hanya menyimpan jalur nipis voksel di sekeliling permukaan, untuk alat yang membaca OpenVDB (perender, simulasi dan program 3D). Saiz voksel dan unit ialah milik penjana (milimeter), jalur sempit ialah bahagian aktif, dan bahagian dalam adalah negatif. Dibina daripada permukaan seperti `.vti`, dengan had 400 000 segi tiga yang sama; fail yang melebihi 1.5 GB ditolak (gunakan saiz voksel yang lebih besar). Fail ialah format OpenVDB 224, tidak dimampatkan selain pembungkusan nilai aktif OpenVDB sendiri, jadi mana-mana pembaca OpenVDB boleh membukanya. |
| Permukaan (.vtu) | `.vtu` | Segi tiga, dengan luas dan normal bagi setiap satu. |
| 3MF dengan data penjana | `.3mf` | Jejaring dalam milimeter untuk slicer, dengan penjana, input dan (bagi kekisi bergred) julat dindingnya sebagai metadata dalam fail. |

Tiada apa-apa dalam fail ini datang daripada jam atau mesin, jadi anda boleh membandingkan dua fail bait demi bait: bait yang berubah bermakna bahagian yang berubah.

## Belum dibina

- `.vti` atau `.vdb` bagi medan pada saiz voksel selain daripada saiz penjana itu sendiri.
- Membaca fail `.vdb` masuk (hanya penulisan yang dibina).
