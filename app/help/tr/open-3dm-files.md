---
title: Bir .3dm modelini katı gövde olarak açın
summary: Bir .3dm dosyasındaki örgüleri, çoklu yüzeyleri ve blokları, kesip ekleyebileceğiniz ve üzerine eskiz çizebileceğiniz tek bir katı gövde olarak PartCraft'a alın; üçgenlerin nereden geldiğini ve neyin dışarıda bırakıldığını.
keywords: 3dm, nurbs, çoklu yüzey, brep, yüzeyler, render örgüsü, ekstrüzyon, bloklar, içe aktarma, örgüden katıya, birimler, içe aktarılmış gövde
from: 8ae9571b
---

PartCraft `.3dm` dosyalarını **katı gövdeler** olarak açar; [bir STL, OBJ ya da 3MF örgüsü](topic:open-meshes) ile aynı şekilde. Gövde herhangi bir katı gibi çalışır: kesin, ekleyin, delin, örüntüleyin ve düz yüzlerine eskiz çizin. Kendi geçmişi yoktur.

## Dosyayı açın

1. {{ui:Aç}} seçin ya da {{key:Mod+O}} tuşlayın ve `.3dm` dosyasını seçin. Ya da 3B görünümün üzerine bırakın.
2. PartCraft onu okur ve ne bulduğunu gösterir: yüzleri olan kaç nesne geldiği, yüzlerin dosyada kayıtlı örgülerden kaçı geldiği ve PartCraft'ın kaçını üçgenlere böldüğü, her onarım ve sonucun **kapanıp kapanmadığı**.
3. **Dosyadaki birimler** (dosya kendi birimini söyler; yarda gibi PartCraft'ın listelemediği bir birim milimetreye çevrilir) ve **Dosyadaki yukarı** kontrol edin.
4. {{ui:Gövde olarak aç}} seçin ya da parçanın zaten özellikleri varsa **Şunun için kullan**'ı ve {{ui:Bu parçaya ekle}} seçin.

## Üçgenler nereden gelir

Bu sürümde PartCraft gövdeleri üçgenlerden oluşturur, bu yüzden dosyadaki her yüzey küçük düz yüzlere dönüşür. Bir çoklu yüzeyin (ve her ekstrüzyonun) her yüzü için, dosyada kayıtlı bir **render örgüsü** varsa onu alır, yoksa kendisi üçgenlendirir (düzlemler, NURBS yüzeyler, döndürme yüzeyleri, ekstrüde edilmiş eğriler ve ekstrüzyonlar, kenarlarıyla kırpılmış). Bir çoklu yüzeyin yüzleri kenar noktalarını paylaşır, bu yüzden kapalı bir çoklu yüzey kapalı gelir. PartCraft'ın henüz okumadığı bir tür yüzey dışarıda bırakılır ve iletişim kutusu kaç tane ve ne türden olduğunu söyler; sonuç genellikle kapanmaz.

## Dosyadaki her şey tek bir gövde olur

Görünen her örgü, çoklu yüzey ve ekstrüzyon ve bir bloğun her yerleşimi, dosyanın onları koyduğu yerde **tek** bir gövdeye girer. Gizli ya da kapalı bir katmandaki nesneler dışarıda bırakılır. Dosya birbirinden ayrı birden çok katı tutuyorsa gövdenin birden çok parçası olur: ayrı gövdeler istiyorsanız her birini kendi dosyasından açın.

## Dışarıda bırakılanlar (ve söylenenler)

Eğriler, noktalar, nokta bulutları, metin, ölçülendirmeler, taramalar ve ışıklar dışarıda bırakılır: bir gövde yalnızca yüzleri alır. SubD nesneleri de öyledir (önce onları yaptıkları programda örgüye ya da çoklu yüzeye çevirin), dış dosyalara bağlı bloklar ve katmanlar, renkler ve adlar da (PartCraft gövdelerinin burada kendilerine ait olanı yoktur).

## Kapanmadığında

Açık çoklu yüzeyler ve yüzeyler (tek kırpılmış bir yüzey, eksik yüzü olan bir şekil) bir içe sahip değildir, bu yüzden katı olamazlar. İletişim kutusu kaç açıklık kaldığını söyler ve hiçbir şey eklemez. Şekli yaptığı programda birleştirin ya da kapatın, kaydedin ve yeniden açın. Bkz. [Bir örgü kapanmadığında](topic:open-meshes#when-a-mesh-does-not-close).
