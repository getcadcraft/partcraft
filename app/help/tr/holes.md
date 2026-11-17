---
title: Eskiz noktalarında delikler ve karşı delikler
summary: Bir yüzeyde eskiz noktaları koyun, her noktada basit, karşı delikli, konik delikli ya da dişli (ISO metrik) delikler yapın, çap ve derinliği ayarlayın ve ters yönde delinen delikleri düzeltin.
keywords: delik, delik sihirbazı, delme, modellenmiş dişli, 3B baskı, karşı delik, konik delik, dişli delik, dişli, kılavuz matkap, baştan sona, kör delik, cıvata deliği, noktalar, delik merkezleri, metrik dişli, M6
from: 8e1eef83
---

{{ui:Delik}}, bir eskizin her serbest noktasında bir delik açar. Serbest nokta, Nokta aracıyla yapılmış bir noktadır; bir çizginin ucu ya da bir dairenin merkezi değildir.

## Bir yüzeyde delik açın

1. Delinecek düz yüzeye tıklayın, sonra {{ui:Bu yüzeyde eskiz}} seçin.
2. {{key:P}} tuşuna basın ve her deliğin nereye gideceğine tıklayın. Konumları önemliyse noktaları kenarlardan ya da başlangıç noktasından ölçülendirin (bkz. [Bir eskizi tam tanımlayın](topic:relations-dimensions)).
3. {{ui:Çık}} seçin.
4. {{ui:Delik}} seçin.

Delikler parçanın içinden geçer, 6 mm çapında. Sağ panel **Delikler** bölümünü gösterir: kaç tane yapıldığını, "eskiz noktası başına bir" olarak.

**Tek delik, hızlı:** deliğin gideceği düz yüzeye tıklayın ve sağ panelde {{ui:Burada delik}} seçin. PartCraft, yüzeye tıkladığınız yerde tek bir noktalı bir eskiz ve parça boyunca bir Delik ekler, tek adımda. Hemen bir sayı yazın ve çapı için {{key:Enter}} tuşuna basın. Tam yerleştirmek için yeni eskizi açın ve noktayı ölçülendirin.

**Hangi eskizin kullanıldığı:** az önce kapattığınız ya da seçili eskiz; yoksa serbest noktaları olan en son kullanılmamış eskiz. Hiçbiri yoksa: "Önce deliklerin gideceği yerlerde noktalı bir eskiz yapın (Bir yüzeyde eskiz, sonra Nokta)."

## Ayarlar

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| **Tür** | Basit, Karşı delik, Konik delik, Dişli (ISO metrik) | Basit |
| **Çap (mm)** | Deliğin çapı | 6 |
| **Baştan sona** | İşaretliyse: parçanın tamamından geçer. Kör delik için temizleyin | İşaretli |
| **Derinlik (mm)** | **Baştan sona** temizken gösterilir | 10 |
| **Karşı delik ⌀** | Karşı delik için gösterilir: daha geniş oyuğun çapı | 11 |
| **Karşı delik derinliği** | Karşı delik için gösterilir | 6 |
| **Yönü ters çevir** | Eskiz düzleminin diğer tarafına delinir | Kapalı |

Delikler malzemeye, eskiz düzlemine dik olarak girer. Kör bir deliğin derinliği eskiz düzleminden ölçülür; dibi düzdür.

## Karşı delikli cıvata deliği

1. Delikleri yukarıdaki gibi yapın.
2. **Tür**'ü **Karşı delik** olarak ayarlayın.
3. **Çap (mm)** değerini `6.6` (bir M6 cıvata için boşluk), **Karşı delik ⌀** değerini `11` ve **Karşı delik derinliği** değerini `6.5` olarak ayarlayın.

Karşı delik, delikten geniş olmalıdır ("Karşı delik, delikten geniş olmalıdır.") ve kör bir delik için, ondan sığ olmalıdır ("Karşı delik, delikten sığ olmalıdır.").

## Cıvata dairesi

Bir merkez etrafında eşit aralıklı delikler için **bir** delik yapın ve örüntüsünü oluşturun: Delik özelliğini seçin, sonra {{ui:Dairesel}} seçin (bkz. [Örüntü ve ayna özellikleri](topic:patterns-mirror)). Deliğin boyutunu değiştirdiğinizde örüntü de izler.

## Delikler ters yöne gittiğinde

- "Eskizin bu tarafında delinecek bir şey yok. Yönü ters çevirmeyi deneyin." Eskiz malzemenin uzak tarafında duruyor. **Yönü ters çevir**'i işaretleyin.
- "Deliklerin gideceği yerlere eskiz noktaları koyun (Nokta aracı), sonra deliği yapın." Eskizin serbest noktası yok. Çizgi uçları ve daire merkezleri sayılmaz.
- "Henüz delinecek bir şey yok." Bir delik bir katı gerektirir. Önce bir çıkıntı yapın.

## Montajlardaki delikler

Her deliğin bir ekseni vardır. Bir montajda **Merkeze al** bir birleşimi bir deliğin eksenine koyabilir; "Delik1, delik 2" olarak listelenir, böylece bir pim ya da cıvata parçası onunla hizalanır. Bkz. [Montaj oluşturun](topic:build-assembly).

## Konik delikler

**Tür**'ü **Konik delik** olarak ayarlayın, sonra **Konik delik ⌀** (yüzeyde) ve **Konik delik açısı**: 90° (ISO metrik düz başlı vidalar) ya da 82° (inç vidalar). Konik delik çapını vida üreticisinin verisinden alın (vida başının çapından biraz büyük). Koninin yüzeyi panellerde "konik delik" olarak adlandırılır.

## Dişli delikler

**Tür**'ü **Dişli (ISO metrik)** olarak ayarlayın ve **Diş**'i seçin: M2'den M24'e kaba. Delik, aşağıdaki tablodaki kılavuz matkap boyutunda delinir (nominal çap eksi adım, ISO 2306'nın 6H dişi için listelediği matkap serisine göre); **Çap (mm)** kutusu kullanılmaz. Kör bir delik için **Diş derinliği (mm)** dişin ne kadar derine gideceğini ayarlar.

| Diş | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Adım | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Kılavuz matkap ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Diş başlangıçta **görsel**dir: model delinmiş deliğe sahiptir, görünüm dişin büyük çapını kesik çizgili daireler olarak çizer ve çizim sayfası çağrıyı "4× M8×1.25 - 6H, diş baştan sona" gibi bir not olarak taşır. STEP yalnızca delinmiş deliği dışa aktarır.

3B baskı için gerçek helis dişini deliğe kesmek üzere **Modellenmiş** seçeneğini işaretleyin. **Boşluk (mm)** her yönde o kadar büyütür, böylece basılmış bir cıvata uyar: 0.1 ile 0.2 mm çoğu yazıcıya uygundur. Çağrı o zaman "(modellenmiş)" ile biter. Ayrıca millere de diş koyan [Miller ve deliklerdeki dişler, çizilmiş ya da modellenmiş](topic:threads) bölümüne bakın.

:::note
Karşıdan delinmiş delikler, inç dişler ve boru dişleri bu sürümde henüz yapılmadı.
:::
