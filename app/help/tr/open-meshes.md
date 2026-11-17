---
title: STL, OBJ ya da 3MF'yi katı gövde olarak açın
summary: Bir tarayıcıdan, bir 3B yazdırma sitesinden ya da başka bir programdan gelen bir örgüyü, kesip ekleyebileceğiniz ve üzerine eskiz çizebileceğiniz bir katıya çevirin; yolda PartCraft neyi onarır ve neyi onaramaz.
keywords: stl, obj, 3mf, örgü, örgüden katıya, örgüyü dönüştür, tarama, su geçirmez, onarım, delikler, boşluklar, birimler, yukarı ekseni, içe aktarılmış gövde, düz yüzler
from: 7b948471
---

PartCraft STL, OBJ ve 3MF örgülerini **katı gövdeler** olarak açar. Gövde herhangi bir katı gibi çalışır: kesin, ekleyin, delin, örüntüleyin, bir montajda ya da işleme için kullanın ve düz yüzlerine eskiz çizin. Kendi geçmişi yoktur: örgü yalnızca üçgenlerdir, bu yüzden boyutları değiştirilemez, yalnızca eklenebilir ya da kesilebilir.

## Bir örgü açın

1. {{ui:Aç}} seçin ya da {{key:Mod+O}} tuşlayın ve `.stl`, `.obj` ya da `.3mf` dosyasını seçin. Ya da 3B görünümün üzerine bırakın.
2. PartCraft onu okur, güvenle yapabildiği onarımları yapar ve ne bulduğunu gösterir: kaç üçgen ve nokta olduğu, her onarım ve örgünün şimdi **kapanıp kapanmadığı**.
3. **Dosyadaki birimler** ve **Dosyadaki yukarı** kontrol edin. STL ve OBJ birimlerini söylemez, bu yüzden milimetre tahmindir; 3MF dosyası kendi birimini söyler. **Buradaki boyut** satırı, sizin seçiminizle gövdenin boyutunu gösterir; bu yüzden 25.4 kat küçük gelen bir parça (inç cinsindeydi) kolayca fark edilir.
4. Ekranda görünen parça boşsa {{ui:Gövde olarak aç}} seçin. Parçanın zaten özellikleri varsa **Şunun için kullan** (parçaya ekle, ondan kes ya da yalnızca örtüşmeyi tut) ve ardından {{ui:Bu parçaya ekle}} ya da örgüyle yeniden başlamak için {{ui:Yeni parça}} seçin.

Geçmişte bir **Imported1** özelliği belirir. Durum çubuğu, örneğin, "bracket.stl bir katı gövdedir: 15200.512 mm³, eskiz çizilecek 14 düz yüzey." der.

## PartCraft neyi onarır

| Onarım | Ne anlama gelir |
|---|---|
| Çift köşeler birleştirildi | STL her köşeyi her üçgeni için tekrarlar; bunlar tek bir noktada birleştirilir |
| Alanı olmayan üçgenler kaldırıldı | Köşeleri aynı doğru üzerinde olan ince şeritler |
| Çift üçgenler kaldırıldı | İki kez yazılan bir üçgen bir kez tutulur; ters yönlü iki üçgen (bir iç duvar) ikisi de kaldırılır |
| Küçük boşluklar kapatıldı | Neredeyse buluşan kenarlar (parça boyutunun binde biri içinde) birleştirilir |
| Delikler dolduruldu | Kenarı düz duran bir açıklık, boyutu ne olursa olsun doldurulur; eğri olanı yalnızca küçükse |
| Üçgenler dışarı bakacak şekilde çevrildi | Yanlış yöne bakan üçgenler komşularıyla uyumlu olacak şekilde çevrilir ve tüm yüzey dışarı bakacak şekilde |

## Örgü kapanmadığında

Bir katının açıklığı olmayan bir yüzeye ihtiyacı vardır. PartCraft birini kapatamadığında, iletişim kutusu kaç açıklık ve açık kenar kaldığını gösterir ve eklenecek bir gövde yoktur. Açıklıkları örgüyü yaptığınız programda kapatın ya da örgüyü kapalı (su geçirmez) bir örgü olarak yeniden dışa aktarın, sonra yeniden açın.

PartCraft bir açıklığı, doldurmanın yanlış tahmin edebileceği durumda bırakır: büyük eğri bir delik ya da aynı düzlemde iki açıklık (eksik bir halka biçimli yüz; her kenarı doldurmak ortadaki deliği kapatacağı için). Üçten fazla üçgen tarafından paylaşılan bir kenar da bildirilir: böyle bir yüzeyin net bir içi yoktur.

## Düz yüzlere eskiz çizin

Çok sayıda üçgenden oluşan düz alanlar, her biri bir **düz yüz** olacak şekilde birleştirilir, böylece eskiz üzerlerine oturabilir: yüze tıklayın ve {{ui:Bu yüzeyde eskiz}} seçin. Sonradan kesilen ya da eklenen bir yüz, yüz olarak kalır. Yuvarlak alanlar (bir delik, bir yuvarlatma) üçgen olarak kalır: seçebileceğiniz yüzler değildirler ve görünüm, üçgenler arasındaki açıdan onların dış hattını çizer.

## Sonra değiştirin

**Imported1**'i seçerek dosyasını, kaç üçgeni olduğunu ve neyin onarıldığını görün. **Dosyadaki birimler**, **Dosyadaki yukarı** ve **Şunun için kullan** orada değiştirilebilir; her değişiklik bir geri al adımıdır.

## Nerede saklanır

Onarılmış örgü `.partcraft.json` dosyasının **içinde** saklanır, bu yüzden örgü dosyasına tekrar ihtiyacınız yoktur. Örgü gövdesi olan bir parça dosyası sürüm 5'tir: eski bir PartCraft onu sürümüne bakarak reddeder. 200.000 üçgenli bir örgü yaklaşık 1,2 MB ekler.

## Sınırlar

- Bir dosyada en fazla 3 milyon üçgen ve 200 MB.
- Bir örgüden yapılan gövde örgü çekirdeğiyle oluşturulur. Kesin çekirdek açıksa (yalnızca geliştiriciler), bunu söyler ve oluşturulmaz.
- OBJ malzemeleri, doku koordinatları ve serbest biçimli eğriler dışarıda bırakılır; 3MF renkleri, malzemeleri ve destek nesneleri dışarıda bırakılır (iletişim kutusu kaç nesnenin atlandığını söyler).
- Gövde örgü kadar incedir: kaba bir STL, kaba yuvarlak yüzler verir. İçine deldiğiniz delikler, kendi özelliklerinizle olduğu kadar yuvarlaktır.
