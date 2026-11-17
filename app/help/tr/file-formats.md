---
title: Dosya biçimleri
summary: PartCraft'ın okuduğu ve yazdığı her dosya; uzantıları, birimleri, eksenleri ve neyi koruyup neyi kaybettirdikleri.
keywords: biçimler, dosya türleri, uzantılar, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, örgü, step, stp, ap242, dxf, r12, pdf, gltf, iges, birimler, z yukarı
from: 4d0ecbee
---

| Biçim | Uzantı | Aç | Kaydet ya da dışa aktar | Birimler | Yukarı eksen | Korur |
|---|---|---|---|---|---|---|
| PartCraft parçası | `.partcraft.json` | Evet | {{ui:Kaydet}} | mm | Y | Tüm geçmiş: eskizler, ilişkiler, ölçüler, özellikler, bastırma, geri sarma, eğriler ayarı, çizim ayarları ve GD&T, önceki bir sürümde içe aktarılmış STEP metni |
| PartCraft montajı | `.partcraft-asm.json` | Evet | Bir montajda {{ui:Kaydet}} | mm | Y | Her parça (gömülü), kopyalar ve konumları, birleşimler |
| STL (ikili ya da metin) | `.stl` | Evet, katı gövde olarak: [Bir STL, OBJ ya da 3MF açma](topic:open-meshes) | {{ui:STL, 3B baskı için}} | mm (açılırken sorulur) | Z | Yalnızca katının üçgenleri |
| 3MF | `.3mf` | Evet, katı gövde olarak | {{ui:3MF, 3B baskı için}} | mm (dosyada belirtilir) | Z | Katı, tek bir örgü nesnesi olarak |
| OBJ | `.obj` | Evet, katı gövde olarak (yalnızca yüzeyler) | Hayır | açılırken sorulur | Z ya da Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Evet, üçgenler olarak okunan bir katı gövde olarak (eğri yüzeyler facet olarak çizilir; dosyanın düz yüzeyleri, silindirleri, konileri, küreleri ve toruslar kesin dışa aktarma için korunur): [Bir STEP dosyasını açma](topic:import-step) | | mm (dosyanın biriminden) | Z, ya da belirtirseniz Y | Katılar ve yüzey gövdeleri, her parçası yerinde olan montajlar; renk, ad, montaj ağacı ya da PMI yok |
| `.3dm` | `.3dm` | Evet, meshlerinden ve yüzeylerinden tek bir katı gövde olarak (kaydedilmiş render örgüleri, yoksa üçgenlere bölünmüş): [Bir .3dm modelini açma](topic:open-3dm-files) | | Dosyanın biriminden | Z, ya da belirtirseniz Y | Örgüler, çoklu yüzeyler, ekstrüzyonlar ve blok yerleşimleri tek bir gövde olarak; eğri, renk, katman ya da ad yok |
| STEP AP242, kesin | `.step` | | {{ui:STEP AP242 (kesin katı)}} | mm | Z | Tek bir kesin katı: düz yüzeyler, silindirler, koniler, küreler ve toruslar gerçek yüzeylerinde, kenar olarak gerçek daireler ve çizgiler; spline yanları, modellenmiş dişler, örgü dosyalarından gelen gövdeler ve bir STEP dosyasının spline yüzeyleri facet olarak kalır. Diğer CAD ve CAM programları için kullanılacak STEP |
| STEP AP214, kesin | `.step` | | {{ui:STEP AP214 (kesin katı)}} | mm | Z | Aynı kesin katı, eski AP214 şemasında; yalnızca bunu okuyan programlar için |
| STEP AP242, yüzeyli | `.step` | | {{ui:STEP (yüzeyli, örgü çekirdeği)}} | mm | Y | Düz yüzeylerden oluşan kapalı bir katı: yuvarlak yüzeyler facet olarak. Kesin dosyayı reddeden bir program için |
| STEP AP214, yüzeyli | `.step` | | {{ui:STEP AP214 (parçalı, örgü çekirdeği)}} | mm | Y | Aynı katı, eski AP214 şemasında; yalnızca bunu okuyan programlar için |
| USD paketi | `.usdz` | Hayır | {{ui:USD paketi (.usdz)}} | m | Z | Katı, malzemesi, hacmi ve kütlesiyle; her parçası bir kez ve her kopyası yerleştirilmiş bir montaj: [USD olarak dışa aktarma](topic:usd) |
| IFC 4 | `.ifc` | Hayır | {{ui:IFC 4 (tüm özelliklerle)}} | mm | Z | Şekil üçgenler olarak, malzeme, her parametre, künye, miktarlar; bir montajın parçaları tip olarak ve kopyaları yerleştirilmiş |
| DXF R12, eskiz | `.dxf` | Hayır | Bir eskiz seçiliyken {{ui:Eskizin ya da düz yüzeyin DXF'i}} | mm | Eskizin kendi x, y | Çizgiler, gerçek yaylar ve daireler, noktalar; katmanlar PROFILE, CONSTRUCTION, POINTS |
| DXF R12, yüzey | `.dxf` | Hayır | Düz bir yüzey seçiliyken {{ui:Eskizin ya da düz yüzeyin DXF'i}} | mm | Yüzeyin kendi x, y | Yüzeyin dış hatları: yuvarlak delikler gerçek daireler olarak, gerisi kapalı polyline'lar olarak (yuvarlak kenarlar facet olarak) |
| PDF çizimi | `.pdf` | Hayır | {{ui:Çizim (PDF): görünümler, kesit, detay, GD&T}} | A3 sayfada mm | | Facet'lerden çizilmiş ön, üst, sağ, izometrik, kesit ve detay görünümleri, gizli çizgiler, genel boyutlar, GD&T sembolleri, künye |

## PartCraft dosyaları

İkisi de düz metindir (JSON). Katı hiçbir zaman saklanmaz: PartCraft onu geçmişten yeniden oluşturur; böylece dosyalar küçük kalır ve her zaman geçmişle eşleşir.

- Her dosyanın bir sürüm numarası vardır. Bu sürüm, her parça dosyasını kullandığı şeyi tutan en düşük sürümle yazar (2 ila 5; bir örgüden yapılmış bir gövde 5 gerektirir) ve daha eski her sürümü açar. Daha yeni bir PartCraft'tan gelen bir dosya, iki sürümü de adlandıran bir iletiyle reddedilir.
- Her değer bir dosya açıldığında denetlenir. Adlardan denetim karakterleri çıkarılır; aralık dışındaki sayılar, eksik özelliklere yapılan başvurular ve bilinmeyen özellik türleri açık bir nedenle reddedilir.
- Biçimi bilmiyorsanız bu dosyaları elle düzenlemeyin. Denetimlerden geçemeyen bir dosya açılmaz.
- Önceki bir sürümde içe aktarılmış büyük bir STEP katısı içeren bir parça 50 MB'ı geçebilir; PartCraft'ın bir parça dosyası olarak açabildiği en fazla boyut budur (bkz. [Sorun giderme](topic:troubleshooting#file-problems)).

## Facet'ler ve kesinlik

STL ve 3MF her zaman **Eğriler** ayarında facet'lerden oluşur; yüzey DXF'i de öyledir, yalnızca gerçek daireler olan yuvarlak delikler hariç. Eskiz DXF'inde gerçek yaylar ve daireler vardır, çünkü doğrudan eskizden gelir. Bu sürüm her parçayı örgü çekirdeğiyle oluşturur; bu yüzden çizimin görünümleri (kesitler dahil) de facet'lidir. Kesin STEP dışa aktarımı istisnadır: çekirdek her yüzeyin gerçek yüzeyini eskizden (ya da gövdenin açıldığı STEP dosyasından) bilir; bu nedenle yuvarlak yüzeyler, **Eğriler** ne olursa olsun gerçek silindir, koni, küre ve toruslar olarak yazılır (bkz. [Baskı, STEP ve DXF için dışa aktarma](topic:export-files#for-other-cad-programs-step)).

## Bu sürümde desteklenmeyen biçimler

| Biçim | Durum |
|---|---|
| glTF, IGES, Parasolid, ACIS (giriş ya da çıkış); OBJ dışa aktarma | Henüz yapılmadı |
| DWG | Yalnızca [varyant paketi](topic:variant-pack) tarafından, her yapılandırmanın çizim sayfası olarak yazılır. Okunmaz ve başka dışa aktarma yoktur. DXF dışa aktarın; her CAD programı R12 DXF açar |
| Montaj STEP'i ve bir montajın çizimi | Henüz yapılmadı. Her parçayı kesin STEP olarak dışa aktarın; STL, 3MF ve malzeme listesi bir montajdan dışa aktarılır |
| Öteki programların kendi parça ve montaj dosyaları (tek gövde olarak açılan `.3dm` hariç) | Henüz yapılmadı |

Bkz. [Henüz yapılmayanlar](topic:not-built-yet).
