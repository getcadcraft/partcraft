---
title: Fizikten parçalar: üreticiler
summary: Mühendis çalışma alanı ve Üretilmiş gövde özelliği: bir üretici seçin, girdilerini (akış, basınç, sıcaklıklar, malzeme, yazıcı) ayarlayın ve ders kitabı formüllerinden boyutlandırılmış bir parça alın; veri sayfası, üretim denetimleri ve analiz araçları için dosyalarla birlikte. Aynı girdiler her zaman aynı parçayı verir.
keywords: engineer, üretici, üretilmiş gövde, fizik, kurallar, ısı eşanjörü, manifold, meme, kafes, gyroid, veri sayfası, girdiler, belirleyici, aynı girdi aynı parça, üretim denetimleri, 3B baskı, toz yatağı
from: 5a387dc0
---

Bir **üretici**, gereksinimlerinizden bir parçayı boyutlandıran ve oluşturan bir betiktir. Bir ısı eşanjörü üreticisi, taşınacak ısıyı, iki akışı ve sıcaklıklarını, basıncı ve malzemeyi alır; çekirdeğin ne kadar büyük olması gerektiğini ve duvarının ne kadar kalın olduğunu hesaplar, onu oluşturur ve kullandığı sayıları ve her birinin nereden geldiğini söyler. Bir girdiyi değiştirin, parça onu izler.

Sonuç parçadaki normal bir gövdedir: özellik listesindedir, yazdırılır, dışa aktarılır. Üretici de parçanın içinde tutulur; böylece dosya, üretici kurulu olmayan herhangi bir bilgisayarda açılır ve **bir parçayı açmak asla bir betik çalıştırmaz**.

## Bir gövde yapın

1. Çalışma alanı değiştiricisinde {{ui:Mühendis}} çalışma alanını seçin.
2. Listede bir üretici seçin (PartCraft ile gelenler, sonra bir dosyadan açtıklarınız) ve {{ui:New}} seçeneğine tıklayın.
3. Betik çalışır. Bittiğinde gövde görünümdedir ve panel girdilerini, **veri sayfasını** ve **denetimlerini** gösterir.

Tasarım'dan da ekleyebilirsiniz: {{ui:Features}} › {{ui:More}} › {{ui:Generated body}}.

## Değiştirin

Bir girdiyi değiştirin; yazmayı bıraktığınızda gövde bir an sonra yeniden yapılır. Panel üç durumdan hangisinin doğru olduğunu söyler:

- **Güncel**: gövde betiğe ve girdilerine uyar.
- **Girdiler değişti**: parçadaki gövde önceki girdilerden; yeniden yapılıyor ya da {{ui:Run}} seçeneğine basın.
- **Henüz çalıştırılmadı** ya da **Son çalıştırma başarısız**: bir betik hatası satır numarasıyla gösterilir.

{{ui:Stop}}, çok uzun süren bir çalıştırmayı sonlandırır. Geri al, her seferinde bir adım geri gider: bir çalıştırma bir adımdır, bir girdi bir adımdır.

## Veri sayfası

Üretecin hesapladığı her sayı, **birimi** ve **nereden geldiği** (bir ders kitabı denklemi, bir standart, bir veri sayfası) ile listelenir. Gizli bir sabit yoktur. Sayfa dosyanın bir parçasıdır, bu yüzden bir sonraki bilgisayarda da aynıdır. [Veri dışa aktarma](topic:data-out) sayfasının JSON ya da PDF olarak nasıl kaydedileceğini anlatır.

## Denetimler

Bir üretici, kendi parçasını bir baskı işlemine karşı denetleyebilir: işlemin tutabildiğinden daha ince duvarlar ve boşluklar, gevşek parçalar, tozu ya da reçineyi tutan boşluklar, temizlenemeyecek kadar dar delikler ve destek gerektiren çıkıntılar. Bulgular panelde ve {{ui:Problems}} listesinde (⚠ düğmesi) yer alır ve parçayla birlikte kaydedilir.

İşlem değerleri, genel tasarım kılavuzlarının işlem için verdiği yuvarlak sayılardır (FDM, SLA, SLS, metal toz yatağı). Bunlar **makinenizin özellikleri değildir**: bir denetime güvenmeden önce atölyenizin değerleriyle değiştirin. Denetim bir voksel ızgarası üzerinde çalışır, bu yüzden yaklaşık bir voksel doğrudur: bir duvar yalnızca sınırdan bir vokselden fazla ince olduğunda bildirilir.

## Hazır üreticiler

| Üretici | Ne yapar |
|---|---|
| Gyroid bloğu | Gyroid, Schwarz P ya da elmas sacla doldurulmuş bir blok: en basit kafes |
| Gyroid ısı eşanjörü | İki akışkanlı bir eşanjörün çekirdeği; yük, etkinlik-NTU yöntemiyle boyutlandırılır, duvarı basınçtan; tek bir hücrede akış çalışmasıyla basınç düşüşünü denetleyebilir |
| Dağıtım manifoldu | Bir başlık ve dallar; her boru, taşıdığı akıştan boyutlandırılır |
| Derecelendirilmiş kafes kiriş | Topoloji optimizasyonunun malzeme gerektiğini söylediği yerlerde duvarı kalınlaşan bir kafes |

Hepsi ders kitabı formüllerine dayanan ilk tahminlerdir. [Mühendislik kütüphanesi](topic:engineering-library) formülleri ve sınırlarını listeler. Sonuca güvenmeden önce Simülasyon, Isıl ya da Akış çalıştırın.

## Dışa aktarma denetimleri

Engineer'ın üreticileri ve veri sayfaları, ihracat denetimleri ve yaptırımlar hakkında bir bildirim taşır. [Engineer ve ihracat denetimleri](topic:engineer-export-notice) bölümünde okuyun; ayrıca her veri sayfasının altındadır.

## Henüz yapılmadı

- Isı eşanjörü çekirdeğindeki başlıklar, portlar ve bağlantı parçaları: yalnızca çekirdek vardır.
- Malzeme dayanımı için sıcaklık eğrileri: malzemeler oda sıcaklığındadır.
- Manifolddaki T bağlantı kayıpları ve çıkışlar arasında akış paylaşımı.
- Eklenti dizininden tek tıkla üretici eklemek; bir dosyayı açmak, bu tarayıcıya bir tane ekler.
- Diğer uygulamalar için üreticiler.
