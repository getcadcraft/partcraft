---
title: 2 boyutta manyetik alanlar (eğitim)
summary: Analiz kütüphanesiyle bir elektromıknatısın veya kalıcı mıknatısın manyetik alanını hesaplayın: örnekleri çalıştırın, akı yoğunluğunu, aralık alanını, endüktansı ve çekmeyi okuyun, tasarımı değiştirin ve kendi bobin, mıknatıs ve demir modelinizi kurun.
keywords: manyetik, manyetostatik, manyetik alan, akı yoğunluğu, tesla, elektromıknatıs, solenoid, bobin, amper sarım, demir çekirdek, hava aralığı, geçirgenlik, endüktans, manyetik kuvvet, relüktans, manyetik devre, vektör potansiyeli, elektromanyetik, sonlu eleman, fem, motor, aktüatör, transformatör, magnetostatic2d, kalıcı mıknatıs, neodimyum, ndfeb, ferrit, kalıntı, çalışma noktası, geri dönüş, kaçak, tutucu mıknatıs
from: 215f6601
---

PartCraft'ın analiz kütüphanesi, uzun ve boyunca aynı kesitte olan şeylerin 2 boyutta manyetik alanını hesaplayabilir: bir elektromıknatısın, bir transformatör çekirdeğinin, bir baranın veya bir motor kesitinin kesiti gibi. Bu eğitim, kütüphanenin elektromıknatıs örneğini çalıştırır, ne dediğini okur, değiştirir, kendi şeklinizi nasıl modelleyeceğinizi gösterir ve sonra bir kalıcı mıknatıs ekler.

Betik çalışma alanını ve [analiz kütüphanesini](topic:craftscript-library) kullanır. Takip etmek için CraftScript dilini bilmeniz gerekmez; örnek her satırın ne yaptığını söyler.

## Modellenen şey

Dış boyutu 100 × 80 mm, kalınlığı 20 mm olan C şeklinde bir demir çekirdek; sağ bacağında 2 mm bir hava aralığı var. Sol bacağına 100 sarım, 10 A akım taşıyan (1000 amper-sarım) bir bobin sarılıdır. Her şey ekrandan dışarı doğru uzundur, bu yüzden yanıtlar **metre derinlik başınadır**: gerçek bir mıknatıs için gerçek derinlikle çarpın.

Kütüphanenin `magnetostatic2d` işlevi, mıknatısın çevresindeki bir hava kutusunda 1 mm karelik bir ızgarada manyetik vektör potansiyelini çözer, ardından bundan akı yoğunluğu **B**'yi (tesla cinsinden) hesaplar.

## Örneği çalıştırın

1. Araç çubuğunun solundaki **Çalışma alanı** kutusunda **Betik** seçin.
2. Betik panelinin **Kütüphane** sekmesini, sonra **Örnekler** › **Elektromıknatıs: alan, aralık, endüktans** öğesini açın.
3. {{ui:Aç (salt okunur)}} düğmesine tıklayın, sonra {{key:F5}} tuşuna basın.

Bir iki saniye içinde tuval akı yoğunluğunu gösterir ve konsol şunu yazar:

```
aralıktaki B 0.5427 T; manyetik devre 0.5516 T (-1.6 %: saçılma ve kaçak)
endüktans derinlik metresi başına 0.1539 H; devre 0.1103 H/m verir, aralığın yanından kaçan akıyı kaçırır
depolanan enerji 7.694 J/m; |B| 1.97 T ile pencerenin iç köşelerinde zirve yapar (gerçek çelik orada doyuma ulaşır)
aralıktaki çekme derinlik metresi başına yaklaşık 2343 N (50 mm derinlik için 117.2 N)
```

Tuvalin altındaki grafik, çekirdeğin orta çizgisi boyunca soldan sağa dikey akı yoğunluğu B_y'yi gösterir: sol bacakta yaklaşık −0.55 T (akı aşağı doğru akar), pencerede neredeyse hiç yok ve sağ bacakta ve aralıkta +0.55 T (akı yukarı döner). Aynı akı hem demirden hem de aralıktan geçer; bu yüzden iki bacak ve aralık neredeyse aynı değeri gösterir.

## Sonuçları okuyun

- **Aralıktaki alan** 0.543 T'dir. El hesabı çekirdeği tek bir manyetik devre sayar, B = μ0 N I / (g + l / μr); burada g aralık, l demirdeki yolun uzunluğu ve μr demirin bağıl geçirgenliğidir; bu 0.552 T verir. Alan el hesabından biraz düşüktür, çünkü akı aralığın etrafında genişler (saçılma) ve bir kısmı pencerede kısa yol alır (kaçak). Daha küçük bir aralık veya daha ince bir ızgarayla iki değer birbirine yaklaşır.
- 100 sarımlı bobinin **endüktansı** derinlik metresi başına 0.154 H'dir; alandaki depolanan enerjiden hesaplanır. Devre formülü daha az verir (0.110 H/m), çünkü yalnızca aralıktan geçen akıyı sayar, yanından kaçanı saymaz.
- Aralığı kapatan **çekme**, bir aralık yüzü w genişliği için B² w / (2 μ0)'dır: metre başına yaklaşık 2300 N, ya da 50 mm derin bir mıknatıs için 117 N.
- 1.97 T'lik **zirve**, akının keskin döndüğü pencerenin iç köşelerinde yer alır. Model demiri doğrusal kabul eder; gerçek elektrik çeliği yaklaşık 1.5 ile 2 T'de doyuma ulaşır, bu yüzden bunun üstündeki değerleri yanıt değil uyarı olarak değerlendirin.

:::note
Kütüphanenin kendi testleri bu örneği çalıştırır ve PartCraft'ta her değişiklikte aralık alanını manyetik devre formülüyle karşılaştırır. Yöntem, referansları ve diğer kontroller (uzun bir solenoid, demir çekirdekli bir solenoid) `magnetostatic2d` başlığında bulunur: kütüphanede tıklayın.
:::

## Tasarımı değiştirin

1. Salt okunur betiğin üstündeki {{ui:Kopya oluştur}} düğmesine tıklayın. Kopya parçanızla birlikte kaydedilir.
2. Üstteki bir değeri değiştirin ve yeniden {{key:F5}} tuşuna basın. Deneyin:
   - `g = 0.001;` — aralık yarıya iner: aralık alanı neredeyse ikiye katlanır, çekme de öyle (B² ile gider).
   - `mur = 200;` — daha zayıf bir çekirdek: amper-sarımların daha çoğu demirde harcanır.
   - `N = 200;` — iki katı sarım: iki kat alan, dört kat endüktans.
   - `h = 0.0005;` — daha ince bir ızgara: daha yakın yanıtlar, yaklaşık dört kat süre.

Her çalıştırma tuvali değiştirir. Betiğin oluşturduğu değişkenler (`Bgap`, `L`, `F` gibi) kendi hesaplarınız için **Değişkenler** listesinde kalır.

## Kendi şeklinizi modelleyin

Örnek her şeyi üç listeden kurar, her ızgara karesi için bir değer; bunları düz çizgilerle ızgara boyunca çizilen herhangi bir şekil için oluşturabilirsiniz:

- **Demirin nerede olduğu:** `iron` çekirdeğin içindeki kareler için doğrudur. Örnek bunu dikdörtgenlerden kurar: `frame & ~window & ~gap` "çerçevede, pencerede değil, aralıkta değil" anlamına gelir.
- **Geçirgenlik:** `1 + (mur - 1) * iron` havada 1, demirde `mur` değeridir. Birden çok malzemeye aynı şekilde kendi değerlerini verin.
- **Akım:** `J`, metrekare başına amper cinsinden akım yoğunluğudur; ekrandan dışarı doğru pozitif, içeri doğru negatif. Bir bobinin iki yanı zıt işaretlidir; örnek `J0` değerini, bir yanın N I taşıması için hesaplar.

Sonra `r = magnetostatic2d(m, permeability, J)` çözer. `r.B` her karedeki akı yoğunluğudur (iki sütun, x ve y), `r.Bmag` büyüklüğü, `r.energy` metre başına depolanan enerjidir. `plot(x, y)` bir çizgi çizer.

Kütüphane metre ile, görünüm milimetre ile çalışır; bu yüzden alan olduğu gibi gösterilirse bin kat küçük çizilir. Örnek bunu, ızgaranın milimetre cinsinden bir kopyası üzerinde gösterir (`mm = quadGrid(…)`, sonra `show(field(mm, …))`): bu iki satırı kopyalayın.

Varsayılan olarak kutunun kenarı alanı içeride tutar: akı hiç çıkmaz. Alanı sıkıştırmamak için kutuyu mıknatısın en az iki ya da üç katı yapın. Simetrik bir mıknatıs için yarısını modelleyebilirsiniz: `magnetostatic2d` başlığı, simetri çizgisinde hangi kenar koşulunun kullanılacağını söyler.

## Kalıcı mıknatıslar

İkinci örnek, **Örnekler** › **Demir çekirdekte kalıcı mıknatıs: çalışma noktası, kaçak, çekme**, aynı çekirdektir; bobin çıkarılmış ve sol bacağın 10 mm'lik bir dilimi yukarı doğru mıknatıslanmış bir mıknatısla değiştirilmiştir. {{key:F5}} ile çalıştırın. Şunu yazar:

```
mıknatıs şu noktada çalışır: B = 1.036 T, H = -124 kA/m (geri dönüş doğrusu üzerinde B = Br + μ0 μr H)
aralıktaki B 0.6778 T; kaçaksız manyetik devre 0.9692 T (-30.1 %)
kaçak faktörü 1.53: mıknatıstan çıkan akının %65'i kutup yüzleri arasındaki aralığı geçer
aralıktaki çekme derinlik metresi başına yaklaşık 3656 N (50 mm derinlik için 182.8 N)
```

- **Çalışma noktası.** Bir mıknatıs, **kalıntı** Br (demir tarafından kısa devre edildiğinde tuttuğu alan: sinterlenmiş NdFeB mıknatıs için yaklaşık 1.2 T, ferrit için 0.4 T) ve geri dönüş geçirgenliği (yaklaşık 1.05 ve 1.1) ile tanımlanır. Bir aralık açmak onu geri dönüş doğrusu boyunca aşağı iter: burada 1.04 T'ye iner, içindeki H, B'ye karşı yöndedir.
- **Kaçak.** Kaçaksız el hesabı aralıkta 0.97 T verir; model 0.68 T verir. Bir mıknatıs akısını kısa bir uzunlukta güçlü bir itişle sürer, bu yüzden akının çoğu aralıktan geçmek yerine pencerede doğrudan geri döner. Kaçak faktörü ne kadarını söyler: burada 1.53. Kapalı bir tutucu için `g = 0;` yazın: mıknatıs o zaman el hesabına yüzde yarım içinde çalışır.
- **Kendi modelinizdeki mıknatıslar.** `magnetostatic2d`'ye mıknatısları `struct('Br', Br)` olarak verin; burada `Br` her ızgara karesi için bir satırdır: x ve y yönündeki kalıntı tesla cinsinden (mıknatıslar dışında sıfır). Mıknatıs karelerine de geçirgenlik listesinde geri dönüş geçirgenliklerini verin:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % mag'ın doğru olduğu karelerde 1.2 T yukarı
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Bir açıyla mıknatıslanmış bir mıknatıs için iki sütuna `Br·cos(açı)` ve `Br·sin(açı)` yazın; dışa doğru mıknatıslanmış bir halka için her karenin yönünü konumundan hesaplayın. `r.H` her karedeki H alan şiddetini verir.

Model, mıknatıs ne kadar zorlanırsa zorlansın onu düz geri dönüş doğrusunda tutar. Gerçek bir mıknatıs dizinin ötesine zorlanırsa (büyük bir aralık, güçlü bir bobin veya ısı nedeniyle) gücünün bir kısmını kalıcı olarak kaybeder; çalışma noktasını derecesi ve sıcaklığı için üreticinin eğrisiyle karşılaştırın.

Kütüphanenin testleri mıknatısları iki el sonucuyla karşılaştırır: açık havada yuvarlak bir mıknatıs (içinde B = Br / (1 + μr)) ve bir demir tutucuyla kapatılmış bir mıknatıs (manyetik devre). İkisi de %1 içinde.

## Henüz yapmadıkları

- **Doyum.** Demir doğrusaldır: akımı iki katına çıkarın, alan iki katına çıkar, sınırsız.
- **Demanyetizasyon.** Mıknatıslar düz geri dönüş doğrusunda kalır (yukarıya bakın).
- **Girdap akımları** ve **kayıplar** (demir kaybı, bakır kaybı).
- **Hareketli parçalar ve tork.** Bir statorda dönen rotor yok, açıya karşı tork yok.
- **Yuvarlak şekiller.** Izgara eşit karelerden oluşur, bu yüzden eğri dış hatlar basamaklı çıkar.
- **3B.** Her şey uzun bir şeyin kesitidir.

Motor tasarımı (2 boyutta dönen bir rotor, tork ve kayıplar) sonraki bir sürüm için düşünülüyor. Bkz. [Henüz yapılmadı](topic:not-built-yet).
