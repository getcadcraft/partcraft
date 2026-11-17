---
title: Görünümler, kesit ve GD&T ile çizim yapın
summary: Çizim sayfasını açın, bir kesit ve bir detay görünümü ekleyin, datum, şekil kontrol çerçevesi ve yüzey işlemi sembollerini yerleştirin, sayfa boyutunu seçin, künyeyi ve revizyonları doldurun ve sayfayı PDF olarak dışa aktarın.
keywords: delik tablosu, delik çizelgesi, delik konumları, etiketler, çizim, 2B çizim, sayfa, sayfa boyutu, a4, a3, a2, a1, a0, ansi, künye, revizyon, revizyon bloğu, çizim numarası, malzeme, pdf, görünümler, ortografik, üçüncü açı, izometrik, kesit görünümü, detay görünümü, gd&t, datum, şekil kontrol çerçevesi, tolerans, konum, düzlük, yüzey işlemi, pürüzlülük, yazdır
from: 39e944c0
---

PartCraft parçadan bir çizim sayfası üretir: üçüncü açı izdüşümünde ön, üst ve sağ görünümler, bir izometrik görünüm, genel ölçüler ve A4'ten A0'a ya da ANSI A'dan E'ye bir sayfada künye. Bunun üzerine bir kesit, bir detay görünümü ve GD&T sembolleri ekleyebilirsiniz. Sayfa parça değiştikçe güncellenir ve ayarları parça dosyasına kaydedilir.

## Çizim sayfasını açın

1. Parçayı oluşturun. (Hiçbir şey oluşturulmamışsa: "Önce bir katı oluşturun, sonra çizimini yapın.")
2. Araç çubuğunda {{ui:Drawing}} seçeneğini seçin.

3B görünüm sayfayla değiştirilir. Araç çubuğunda {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}} ve {{ui:Back}} görünür; sağ panelin başlığı **Çizim**'dir. Durum çubuğu görünümlerin nasıl üretildiğini söyler: "Çizim (eğriler fasetler olarak çizilir). Datum, Frame ve Finish bir görünüme GD&T yerleştirir; panel bir kesit ve bir detay görünümü ayarlar." Görünümler, örgü çekirdeğinin fasetlerinden çizilir; bu yüzden yuvarlak kenarlar kısa düz parçalardır. Gerçek yaylar için bu sürümde bulunmayan kesin bir çekirdek gerekir.

Sayfada gezinin: tekerleği çevirerek yakınlaştırın, sağ ya da orta düğmeyle sürükleyerek kaydırın, sayfayı sığdırmak için {{key:F}} tuşuna basın. Sayfa odaktayken {{key:Plus}} ve {{key:Minus}} yakınlaştırır; {{key:Shift}} ile ok tuşları kaydırır.

Geri dönmek için {{ui:Back}}, {{ui:Back to the model}} seçeneğini seçin ya da (hiçbir şey seçili değilken ve hiçbir araç etkin değilken) {{key:Esc}} tuşuna basın.

## Sayfada neler var

- **Seçtiğiniz sayfa**, yatay (aksi seçilmedikçe A3), kenarlıklı ve bir **künye** ile: başlık, şirket, çizim numarası, revizyon, malzeme, çizen / kontrol eden / onaylayan, tarih, ölçek, sayfa boyutu, "Birimler: milimetre · Üçüncü açı izdüşümü" ve görünümlerin kesin mi yoksa fasetli mi olduğu.
- Bir revizyon eklediğinizde sağ üst köşede bir **revizyon bloğu**.
- **Ön, üst ve sağ görünümler**: üst görünüm ön görünümün üstünde, sağ görünüm sağında. Gizli kenarlar kesik çizgiyle gösterilir.
- Yer varsa bir **izometrik görünüm**.
- **Genel ölçüler**: ön görünümde genişlik ve yükseklik, üst görünümde derinlik.
- Ana görünümler için ISO serisinden tek bir **ölçek** (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), sığacak şekilde seçilir.

## Sayfa boyutunu seçin

Çizim sayfasında, hiçbir şey seçili değilken, sağ paneldeki {{ui:Sheet}} seçeneğini seçin: **A4, A3, A2, A1, A0** (ISO 216) ya da **ANSI A, B, C, D, E** (11 × 8.5 ila 44 × 34 in). Görünümler, sığan en büyük ISO ölçeğinde yeniden yerleştirilir; bu yüzden daha büyük bir sayfa parçayı daha büyük gösterebilir.

## Künyeyi doldurun

Sağ paneldeki **Künye** alanları doğrudan sayfaya gider: {{ui:Title}}, {{ui:Drawing no.}}, {{ui:Revision}}, {{ui:Company}}, {{ui:Drawn by}}, {{ui:Checked by}}, {{ui:Approved by}}, {{ui:Date}} (yıl-ay-gün), {{ui:General tolerance}} ve {{ui:Finish}} (son ikisi künyenin hemen üstünde yazdırılır). Bir kutuya yazın ve {{key:Enter}} tuşuna basın ya da başka yere tıklayın. Boş bir kutu, hücresini boş bırakır; ancak şunlar hariç:

- **Başlık**, siz bir tane yazana kadar parçanın adını gösterir.
- **Tarih**, siz bir tane yazana kadar bugünü gösterir.
- **Revizyon**, siz bir tane yazana kadar listedeki en yeni revizyonu gösterir.

**Malzeme** parçadan gelir: modelde boş bir alana tıklayın, sonra Parça panelinde {{ui:Material}} seçeneğini seçin. Aynı malzeme, ölçme aracının kütle özelliklerine yoğunluk değeri verir.

## Revizyon ekleyin

**Revizyonlar** altında {{ui:Add revision}} seçeneğine tıklayın. Her yeni satır sıradaki harfi alır (A, B, C … ve Z'den sonra AA) ve bugünün tarihini. Neyin değiştiğini ve değişikliği kimin yaptığını yazın. {{ui:Delete}} bir satırı kaldırır. Sayfanın sağ üst köşesindeki revizyon bloğu, en eskiden başlayarak, en fazla 20 tane olmak üzere bunları listeler.

Sayfa boyutu, künye, revizyonlar ve malzeme parça dosyasına kaydedilir ve her değişiklik {{ui:Undo}} ile geri alınabilen bir adımdır.

## Kesit görünümü ekleyin

Parça bir düzlemle kesilir ve kesit taranır. Diğer görünümler gibi kesit de fasetlerden çizilir; bu yüzden yuvarlak kenarlar kısa düz parçalardır.

1. Sağ panelde **Kesit A-A** değerini **Ön görünümden**, **Üst görünümden** ya da **Sağ görünümden** olarak ayarlayın.
2. Kesit sayfada görünür: kesme düzlemi malzemeden geçtiği yerlerde taranır; kesme çizgisi ve "A" okları, alındığı görünümde yer alır.
3. Kesme düzlemini taşımak için **Kesim konumu (mm)** ayarlayın. Başlangıçta parçanın ortasından geçer.

Kaldırmak için **Kesit A-A** değerini yeniden **Yok** olarak ayarlayın.

## Detay görünümü ekleyin

1. **Detay B** değerini büyütülecek görünüme ayarlayın (ya da araç çubuğunda {{ui:Detail}} seçeneğini seçin).
2. O görünümde, büyütülecek alanın merkezine tıklayın. "B" etiketli bir daire işaretlenir ve büyütülmüş **Detay B**, kendi ölçeğiyle sayfada görünür; örneğin "Detail B (2:1)".
3. Daire boyutu için **Detay yarıçapı (mm)** ve büyütme için **Detay ölçeği** ayarlayın: sayfanın 2, 4, 5 ya da 10 katı.

Bir detay ön, üst, sağ ya da kesit görünümünden alınabilir; izometrikten alınamaz. Her görünüm için yer yoksa panel "Sayfada yer yok: detay. Detayı küçültün ya da bir görünümü çıkarın." der.

## Delik tablosu ekleyin

Delik tablosu, parçanın deliklerini konumlarıyla listeler; delme ya da CNC için kullanılır: panelde **Delik tablosu** › **Üst görünümden** (ya da ön, ya da sağ) seçeneğini seçin.

- O görünümde uçtan görülen her delik yanında bir etiket alır: ilk boyut için **A1**, **A2** …, sonraki boyut için **B1** …
- Tablo her etiketi, milimetre cinsinden **X** ve **Y** değerlerini ve boyutunu listeler: "Ø14 THRU", "Ø6.6 × 10 DEEP", bir karşı delik ya da havşa, ya da dişli bir deliğin dişi tanımı.
- X ve Y, görünüm çevresinin sol alt köşesinden ölçülür; sayfada **X0 Y0** olarak işaretlenir.
- Desenlerle oluşturulan delikler dahil edilir. Görünüme dik olmayan delikler panelde sayılır ve tablonun dışında bırakılır.

Tablo, sayfanın boş bir alanına ve PDF'ye yerleştirilir.

## GD&T ve yüzey işlemi sembolleri yerleştirin

1. {{ui:Datum}}, {{ui:Frame}} (bir şekil kontrol çerçevesi) ya da {{ui:Finish}} (bir yüzey işlemi sembolü) seçeneğini seçin.
2. Bağlanacağı görünümdeki noktaya tıklayın. 2.5 mm içindeki en yakın çizilmiş çizgiye yapışır.
3. Sembol, bir belirtme çizgisiyle ve seçili olarak görünür; sağ panel ayarlarını gösterir.

Bir sembolü sürükleyerek taşıyın; belirtme çizgisi noktada kalır. Bir sembol seçiliyken ok tuşları onu 1 mm iter. {{key:Delete}} ya da {{key:Backspace}} (ya da paneldeki {{ui:Delete}}) onu kaldırır; {{ui:Done}} ya da {{key:Esc}} seçimi kaldırır. Her değişiklik geri alma listesindedir.

### Datum

**Harf**: A'dan Z'ye, I, O ve Q hariç (bunlar 1, 0 ve O gibi okunur). Her yeni datum, bir sonraki boş harfi alır.

### Şekil kontrol çerçevesi

| Ayar | Seçenekler |
|---|---|
| **Tolerans** | Doğrusallık, Düzlük, Dairesellik, Silindiricilik, Çizgi profili, Yüzey profili, Diklik, Açısallık, Paralellik, Konum, Eşmerkezlilik ve Simetri (ikisi de Y14.5-2018'de kaldırıldı ve öyle işaretlenir), Dairesel salgı, Toplam salgı |
| **Bölge (mm)** | Tolerans değeri, varsayılan 0.1 |
| **Çap bölgesi (⌀)** | Silindirik bölgesi olan özellikler için; Konum için varsayılan olarak açık |
| **Malzeme** | RFS (yok), MMC (Ⓜ), LMC (Ⓛ), özellik izin verdiği yerlerde |
| **Birincil / İkincil / Üçüncül datum** | En fazla üç datum harfi, izin verilen yerlerde her biri bir **… değiştirici** (MMB, LMB) ile |

PartCraft çerçeveyi ASME Y14.5 kurallarına göre denetler ve neyin yanlış olduğunu panelin üstünde söyler; örneğin "Düzlük bir şekil toleransıdır: datum referansı almaz." ya da "Konum en az bir datum referansı gerektirir." **Okunuşu** satırı çerçeveyi açıkça yazar.

### Yüzey işlemi

| Ayar | Seçenekler | Varsayılan |
|---|---|---|
| **Ra (µm)** | Ortalama pürüzlülük | 1.6 |
| **İşlem** | herhangi bir işlem, işlenmiş, malzeme kaldırılmadan | işlenmiş |
| **Not** | En fazla 40 karakter, örneğin bir yön ya da bir işlem | |

Hiçbir şey seçili değilken panel, her biri **Seç** ile birlikte **Sayfadaki notlar** listeler.

## PDF'yi dışa aktarın

Araç çubuğunda {{ui:PDF}}, panelde {{ui:Export PDF}} ya da modelden {{ui:Export}} ve ardından {{ui:Drawing (PDF): views, section, detail, GD&T}} seçeneğini seçin. PDF `<part name> - drawing.pdf` olarak indirilir ve durum çubuğu PDF'de neyin bulunduğunu listeler.

Ölçeği doğru tutmak için, sayfa boyutundaki kağıda "Gerçek boyut" ile yazdırın.

## Sınırlar

| Henüz yapılmadı | Bugün bunu yapın |
|---|---|
| Üç genel ölçü dışındaki ölçüler | PDF üzerine bir işaretleme uygulamasıyla ekleyin ya da bir eskizi ya da yüzeyi DXF olarak dışa aktarıp bir 2B CAD programında ölçülendirin |
| Birden fazla kesit ya da detay; kırık, yardımcı ve yansıtılmış görünümler | Kullanılamaz |
| Birinci açı izdüşümü, hareketli görünümler, dikey sayfalar | Üçüncü açı, otomatik yerleşim, yatay |
| Sayfada serbest metin notları ve tablolar (başlık ve revizyon blokları dışında) | Yüzey işlemi notunu kullanın ya da PDF'ye metin ekleyin |
| Montajların çizimleri | Kullanılamaz |

Batı Avrupa kümesinin dışındaki karakterler "?" olarak yazdırılır (PDF, okuyucunun yerleşik Helvetica yazı tipini kullanır). GD&T sembolleri çizgi olarak çizilir; bu yüzden her okuyucuda yazdırılır.

## Sayfanın işini yaptırın

- **Sayfa › Otomatik** kağıdı sizin için seçer: 1:1'e kadar en büyük standart ölçek, o ölçekte görünümleri tutan en küçük A boyutlu sayfada (listede hangisinin seçildiği görünür).
- **Delikleri ölçülendirin** en çoğunu uçtan gören görünümdeki delikleri ölçülendirir: her birinde bir merkez işareti, boyut başına bir açıklama ("2× Ø6 THRU", bir belirtme çizgisiyle) ve konumları görünümün sol alt köşesinden ölçülür. Genel genişlik, yükseklik ve derinlik her zaman bulunur.
