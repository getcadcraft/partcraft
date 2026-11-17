---
title: Düğümler: bağlantı kurarak model oluşturma
summary: Sayıları noktalara, noktaları eğrilere, eğrileri yüzeylere bağlayın. Bir sayıyı değiştirin, sonrasında her şey yeniden oluşur. Her düğüm aynı zamanda bir CraftScript satırıdır ve grafik dosyada saklanır.
keywords: düğümler, düğüm düzenleyici, görsel betikleme, parametrik, grafik, bağlantılar, uçlar, serbest biçim, nurbs, loft, ekstrüzyon, döndürme, daire, eğri, yüzey, seri, aralık, rastgele, liste, betik, craftscript, grasshopper
from: 3a4625de
---

**Düğüm düzenleyicisi** geometriyi, kutuları birbirine bağlayarak oluşturur. Her kutu (bir düğüm) küçük bir iş yapar: bir sayı, bir nokta, bir daire, bir loft üretir. Bir düğümün sonucunu bir sonrakinin girişine bağlarsınız ve başta bir sayıyı değiştirdiğinizde model onu izler.

Çalışma alanı listesinden açın: {{ui:Düğümler}}. Düzenleyici penceresini açar. Zaten bir grafiği olan bir parça, çalışma alanını açtığınızda onu gösterir. Bu, 3B görünümün üzerindeki bir penceredir: taşımak için başlık çubuğunu sürükleyin, boyutunu değiştirmek için köşesini sürükleyin.

## Bağlantı kurma

1. Soldaki listeden bir düğüm seçin (aramak için arama kutusuna yazın; <kbd>Enter</kbd> ilk eşleşmeyi ekler). Düğüm tuvalin ortasında belirir.
2. Bir düğümün sağındaki yuvarlak **çıkış** noktasından, başka bir düğümün solundaki yuvarlak **giriş** noktasına sürükleyin. Nokta uyduğunda yeşile, uymadığında kırmızıya döner; nedeni için imleci üzerine getirin.
3. Hiçbir şeye bağlı olmayan bir giriş, yazılı bir değer için bir kutu gösterir. Bir sayı yazıp <kbd>Tab</kbd> tuşuna basın: sonuç yeniden oluşur.
4. Bir düğümün başlık çubuğundaki küçük daire onun **gözü**dür. Gözü açık bir düğüm 3B görünümde çizilir: eğriler çizgi olarak, yüzeyler gölgeli, noktalar nokta olarak.

Bir düğümü başlık çubuğundan sürükleyin. Tuvalin boş alanını sürükleyerek kaydırın, fare tekerleğiyle yakınlaştırın. <kbd>Delete</kbd> seçili düğümü siler. {{ui:Toparla}} düğümleri sütunlar halinde düzenler, {{ui:Sığdır}} hepsini görünüme getirir, {{ui:Geri al}} ve {{ui:Yinele}} düzenlemelerinizde ileri geri gider.

## Türler ve birimler

Uçların bir türü vardır: sayı, evet/hayır, nokta, vektör, eğri, yüzey, örgü, katı ya da bunların herhangi biri için "geometri". Bir nokta vektör girişini besleyebilir ve tersi de. Sayılar bir birim taşır: bir **uzunluk** milimetredir ve bir **açı** derecedir. Bir uzunluk bir açıyı besleyemez, uzunluk çarpı uzunluk (bir alan) reddedilir; böylece yanlış bir bağlantı kurduğunuzda o anda durdurulur.

Kare uç bir **listedir**. Bir liste tek değerli bir girişe ulaştığında düğüm her öğe için bir kez çalışır ve sonucu bir liste olur. Kısa liste son öğesini tekrarlar. Örneğin, bir **Seri** yükseklik listesini **Taşı**'ya bağlarsanız bir kopya yığını oluşur.

## Katılar ve Boolean'lar düğüm olarak

**Katılar** grubu, Yüzeyler panelindekiyle aynı kesin yüzeylerden kapalı gövdeler oluşturur: **Kutu katısı**, **Silindir katısı** ve **Küre katısı** (boyutlar mm cinsinden), **Birleşim**, **Çıkar** ve **Kesişim** (ikinci katı birincisinden alınır; tolerans, katı motorunun üçgenlerinin kesin yüzeylerden ne kadar uzak olabileceğidir), **Yüzeyler arası köşe yuvarlat** (yüzeyler katıdaki numaralarıyla, ilki için 1; bir yarıçap ve 0'dan büyükse uçtaki bir yarıçap), **Katı hacmi** (mm³) ve **Katıdan örgüye** (görmek ya da dönüştürmek için). Katının kendi uç türü vardır: nokta ya da sayı bir katı girişine bağlanamaz; nokta kırmızı kalır. Boolean ve köşe yuvarlatma düğümleri, düzenleyici ilk açıldığında yüklenen programın kendi katı motorunu kullanır.

## Hatalar

Görevini yapamayan bir düğüm, adının altında kırmızıyla nedenini söyler ("Yarıçap sıfırdan büyük olmalıdır."), ve sonraki düğümler bekler. Aynı ileti, Sorunlar panelinde bir sorun olarak da görünür; oradan bulabilirsiniz.

## Her düğüm bir betik satırıdır

{{ui:Betik}} düğmesine basarak grafiği CraftScript olarak görün: düğüm başına bir satır, örneğin `n3 = nd_circle(n2, n1, [0 0 1]);`. Metni düzenleyip {{ui:Grafiği bu betikten oluştur}} düğmesine basarak grafiği geri getirin. Aynı `nd_` fonksiyonları PartCraft'taki bir CraftScript'te de çalışır; böylece bir grafik orada çalıştırılabilir, döngüye alınabilir ya da test edilebilir. Rastgele sayılar her zaman bir **tohum** (seed) alır; böylece aynı grafik her bilgisayarda aynı sonucu verir.

## Dosyayla birlikte kaydedilir

Grafik parça dosyasında saklanır (geçmişte değil; bu yüzden düzenleyicideki Geri al ayrıdır). Düğümler katının yanında eğriler, yüzeyler ve örgüler üretir: parçanın özelliklerini değiştirmezler.
