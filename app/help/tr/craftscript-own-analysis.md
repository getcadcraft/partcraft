---
title: Kendi analizinizi yazın
summary: Betik çalışma alanında betiklerle bir analiz kurun: parçayı örgüleyin, kurun ve çözün, alanı ve bir yakınsama grafiğini gösterin, sonucu el hesabıyla denetleyin ve adımları değişkenleri paylaşan ayrı betikler olarak tutun.
keywords: kendi analizim, özel analiz, FEA betiği, sonlu eleman, kurmak, rijitlik, sınır koşulları, çözmek, pcg, seyrek, alan, son işlem, yakınsama, doğrulama, el hesabı, denetim, iş akışı
from: 0f471a8e
---

Betik çalışma alanında bir analiz, birbirine değişken aktaran birkaç kısa betiktir. Yaptığınız işe yakın bir [kütüphane](topic:craftscript-library) fonksiyonundan başlayın, kopyasını yapın ve değiştirin; ya da aşağıdaki gibi adım adım kurun.

## 1. Bir örgü

```
model = part();                  % modellediğiniz parça, bir model olarak
m = tetmesh(model, 4);           % yaklaşık 4 mm genişlikte dört yüzlüler
show(m)
```

Devam etmeden önce örgüyü görünümde denetleyin: {{key:F}} onu sığdırır, **Gösterilen** listesindeki {{ui:eye}} parçayı gizler.

## 2. Kurun ve çözün

Öğe döngüsünü betikte yazın (ders kitabındaki gibi okunur) ve ağır kısımları yerleşik fonksiyonlara bırakın: öğe matrisleri, üçlülerden seyrek kurma ve bir ön koşullayıcılı eşlenik gradyan çözücüsü. `static_tet` gibi bir kütüphane fonksiyonu (kütüphanede varsa) kopyalanacak eksiksiz bir örnektir.

## 3. Sonucu gösterin

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % düğüm başına bir değer
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Çözücü artığı', 'id', 'conv')
```

- Göstergenin aralığı yazılabilir ya da {{ui:Otomatik}} değerine geri alınabilir.
- Bir düğümdeki değerleri okumak için örgüye tıklayın.
- Aynı `'id'` değerini koruyan bir grafik yerinde güncellenir; bu yüzden yakınsamayı izlemek için döngünüzün içinde yazdırın ve çizdirin.

## 4. Denetleyin

Bildiğiniz bir şeyle karşılaştırın: bir konsolun uç sapmasını PL³/3EI ile, deliği olan bir levhayı gerilme yığılma katsayısıyla, tepkileri yüklerle. Denetimi her değişiklikten sonra yeniden çalışsın diye kendi betiği olarak yazın:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('uç %g mm, kiriş teorisi %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Saklayın

- Her adım kendi betik sekmesi olabilir: değişkenleri paylaşırlar, bu yüzden birbiri ardına çalıştırın.
- Betikler parçanın içinde kaydedilir. Sonuçları da tutmak için Değişkenler sekmesinde **Değişkenleri parçayla birlikte kaydet** kutusunu işaretleyin (32 MB'a kadar).
- Betik grubundaki {{ui:Kaydet}} bir betiği paylaşmak için indirir; {{ui:Aç}} bir tanesini getirir.
