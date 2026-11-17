---
title: Veri dışa aktarma: veri sayfası, alanlar ve örgüler
summary: Üretilmiş bir gövdenin veri sayfasını JSON ya da PDF olarak, alanını bir VTK görüntüsü (.vti) ya da bir OpenVDB seviye kümesi (.vdb) olarak ve yüzeyini ParaView ile diğer analiz araçları için bir VTK örgüsü (.vtu) olarak, örgüyü de üreticinin verilerini taşıyan bir 3MF olarak kaydedin. Aynı parça her zaman aynı dosyaları yazar.
keywords: dışa aktarma, veri sayfası, json, pdf, vti, vtu, vtk, paraview, 3mf, alan, işaretli uzaklık, FEA, CFD, üst veri, openvdb
from: 817b4579
---

{{ui:Mühendislik}} çalışma alanında ya da Üretilmiş bir gövdenin özelliklerinde **Veri dışa aktarma** bölümünü açın:

| Düğme | Dosya | Amaç |
|---|---|---|
| Veri sayfası (JSON) | `.json` | Her girdi, her sayı birimi ve kaynağıyla birlikte; denetimler; örgü parmak izi. Sıralı, zaman bilgisi yok: aynı parça aynı dosyayı verir. |
| Veri sayfası (PDF) | `.pdf` | Aynısı kâğıt üzerinde, gerektiği kadar sayfaya yayılmış. |
| Alan (.vti) | `.vti` | Parça, bir ızgara üzerinde işaretli uzaklık (içeride negatif) ve bir iç maske olarak; ParaView ve VTK üzerine kurulu araçlar için bir VTK görüntü dosyası. Gövdenin yüzeyinden, üretici girdilerinin voksel boyutunda kurulur, bu yüzden bir an alır; 400 000 üçgeni aşan bir gövde sayfa için çok büyüktür: alanı bunun yerine bir betikten (`field_bake`) kaydedin. |
| Seviye kümesi (.vdb) | `.vdb` | Aynı alan bir OpenVDB seviye kümesi olarak: yalnızca yüzey çevresindeki ince bandı tutan seyrek bir ağaç; OpenVDB okuyan araçlar için (işleyiciler, simülasyon ve 3B programlar). Voksel boyutu ve birimler üreticinin (milimetre); dar bant etkin kısımdır, içeride negatiftir. `.vti` gibi yüzeyden kurulur, aynı 400 000 üçgen sınırıyla; 1,5 GB'tan büyük olacak bir dosya reddedilir (daha büyük bir voksel boyutu kullanın). Dosya OpenVDB biçim 224'tür, OpenVDB'nin kendi etkin değer paketlemesi dışında sıkıştırılmamıştır; bu yüzden her OpenVDB okuyucusu onu açar. |
| Yüzey (.vtu) | `.vtu` | Üçgenler, her birinin alanı ve normaliyle. |
| Üretici verileriyle 3MF | `.3mf` | Dilimleyici için milimetre cinsinden örgü; üretici, girdileri ve (derecelendirilmiş bir kafes için) duvar aralığı dosyada üst veri olarak. |

Bu dosyalardaki hiçbir şey saatten ya da makineden gelmez; bu yüzden iki dosyayı bayt bayt karşılaştırabilirsiniz: değişen bir bayt, değişen bir parça demektir.

## Henüz yapılmadı

- Üretici ile aynı olmayan bir voksel boyutunda alanın bir `.vti` ya da `.vdb`'si.
- `.vdb` dosyalarını okumak (yalnızca yazma yapılmıştır).
