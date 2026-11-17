---
title: Parça listesi, patlatılmış görünümler ve hareketli parçalar
summary: Montaj parçalarına numara, açıklama ve malzeme verin; malzeme listesini okuyun ve indirin; adımlarla ya da otomatik olarak patlatılmış görünümler oluşturun; birleşmemiş parçaları elle taşıyın, birleşim sınırları koyun ve tüm montajı STL, 3MF ya da malzeme listesi olarak dışa aktarın.
keywords: bom, malzeme listesi, parça listesi, parça numarası, malzeme, yoğunluk, csv, patlatılmış görünüm, patlat, topla, iz çizgileri, parçayı taşı, sürükle, tutamaç, taşı, döndür, birleşim sınırları, montaj dışa aktarma, montaj adımı, montaj çizimi, balonlar
from: ebc9f6f3
---

Bu araçlar bir montajın sağ panelindedir (bkz. [Montaj oluşturun](topic:build-assembly)).

## Parça özellikleri

Soldaki listeden bir parça seçin. **Parça özellikleri** altında şunları ayarlayın:

- **Parça numarası** (en fazla 40 karakter) ve **Açıklama** (en fazla 200 karakter).
- **Malzeme**: yoğunluğu bilinen ortak bir malzeme ya da g/cm³ cinsinden yazmak için **Özel yoğunluk…**. Panel bunun ardından parçanın kütlesini gösterir.

Özellikler parçaya aittir; dolayısıyla her kopya bunları paylaşır. Montaj dosyasına kaydedilirler.

## Malzeme listesi

Hiçbir şey seçili değilken ({{key:Esc}}), panel **Malzeme listesi**ni gösterir: her parça için bir satır; kalem numarası, adet (kaç kopya olduğu), parça numarası, ad, malzeme ve kütle. Kalem numaraları, parçaların listede ilk göründükleri sıraya göre verilir. Kütleler her parçanın hacmini (ağ çekirdeğinin oluşturduğu çokgen katının hacmi; yuvarlak parçalarda biraz düşük) ve malzemesini kullanır. Malzemesi olmayan bir parçanın kütlesi yoktur ve o zaman toplam da olmaz.

{{ui:CSV indir}} listeyi bir CSV dosyası olarak kaydeder (ayrıca **Dışa aktar › Malzeme listesi (CSV)**). Her elektronik tabloda açılır; = ya da + ile başlayan metnin elektronik tablo tarafından formül olarak çalıştırılmaması için başına bir kesme işareti eklenir.

## Patlatılmış görünümler

Patlatılmış görünüm, resimler için parçaları birbirinden ayırır. Birleşimleri ya da parçaların gerçekte nerede olduğunu asla değiştirmez: kaydetme, çakışma denetimleri ve dışa aktarmalar gerçek konumları kullanır.

1. Hiçbir şey seçili değilken **Patlatılmış görünümler** altında {{ui:Yeni görünüm}} seçeneğini belirleyin.
2. **Adım ekle** altında, adımın hareket ettirdiği parçaları işaretleyin, bir **Yön** seçin (+X … −Z, tıkladığınız bir yüzeyin normali ya da **Görünümde bir oku sürükle**) ve bir **Mesafe** girin, ardından {{ui:Adım ekle}}. **Sürükle** seçildiğinde oku sürükleyip bırakın: adım, sürüklediğiniz yönü ve mesafeyi alır.
3. Daha fazla adım ekleyin. Adımlar birbiri ardına oynatılır.
4. Görünümü canlandırmak için **Birleştirilmiş** ile **Patlatılmış** arasındaki kaydırıcıyı sürükleyin. Kesikli iz çizgileri, her parçanın dinlenme konumundan şu anki konumuna uzanır.

{{ui:Otomatik (radyal)}} sabitlenmiş parça dışındaki her parçayı montajın ortasından uzağa taşır. {{ui:Otomatik (birleşimler)}} birleşik her parçayı (altına bağlı olan her şeyle birlikte) birleşiminin yüzey normali boyunca dışarı taşır. Adlandırılmış birden fazla görünümü saklayabilirsiniz; **Görünüm** içinden birini seçin ya da parçaları geri yerleştirmek için **Birleştirilmiş**'i seçin. Görünümler montaj dosyasına kaydedilir.

## Parçayı elle taşıma

Yalnızca sabitlenmiş parçaya birleşimi olmayan bir parça elle taşınabilir (sabitlenmiş parça yerinde durur; birleşimler diğerlerini yerleştirir). Parçayı seçin ve **Elle taşı** altında:

- **ΔX, ΔY, ΔZ** değerlerini yazın ve {{ui:Taşı}} seçeneğini belirleyin ya da bir eksen ve bir **Açı** seçip {{ui:Döndür}} seçeneğini belirleyin (parçanın ortası etrafında döner).
- {{ui:Taşımak için sürükle}} parça üzerinde oklar gösterir: o eksen boyunca taşımak için bir oku, bir düzlemde taşımak için bir kareyi sürükleyin. {{ui:Döndürmek için sürükle}} parçayı döndürmek için halkalar gösterir. Her sürükleme tek bir geri alma adımıdır. {{key:Esc}} okları gizler.

## Birleşim sınırları

Hareket eden bir birleşim seçin ve **Sınırlar** altında, değerlerinden herhangi biri için **… sınırlar arasında tut** kutusunu işaretleyin; ardından **En küçük** ve **En büyük** değerlerini ayarlayın. Her değer kendi sınırları içinde tutulur, kaydırıcısı yalnızca bu aralığı kapsar ve {{ui:Hareketi çakışmalar için kontrol et}} yalnızca bu sınırlar arasında tarar. Silindirik bir birleşim açısını, ofsetini ya da ikisini birden sınırlayabilir. Birleşimin türünü değiştirdiğinizde, yeni türün sahip olmadığı değerlerdeki sınırlar kaldırılır.

## Tüm montajı dışa aktarma

Bir montajda **Dışa aktar** menüsü, her parçayı yerleştirildiği yerde içeren tüm montajı yazar:

- **STEP AP242 / AP214** ve **Çizim (PDF)** bu sürümde henüz yapılmadı: tam bir çekirdek gerektirdikleri için soluk görünürler. Bunun yerine her parçanın STEP dosyasını (tam katı) parçanın içinden dışa aktarın.
- **STL**: tüm parçalardan tek bir ağ. **3MF**: her parça bir kez, her kopyası için ayrı yerleştirilmiş olarak.
- **Malzeme listesi (CSV)**.

## Sınırlar

- Montaj çizimi ve montaj STEP dosyası bu sürümde henüz yapılmadı (tam çekirdek gerektirirler). Patlatılmış görünümler ekranda resim içindir.
