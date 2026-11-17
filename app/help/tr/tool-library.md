---
title: Takım kütüphanesi
summary: Kullandığınız takımları tarayıcıda kaydedin, böylece her parça onları kullanabilsin; takım kütüphanelerini bir JSON dosyası olarak bilgisayarlar arasında taşıyın.
keywords: takım kütüphanesi, takımlar, dışa aktar, içe aktar, JSON, takımları kaydet, T numarası, parmak freze, atölye takımları
from: 8b9f2483
---

İmalat'ın **Takımlar** sekmesi parçanın takımlarını listeler. **Takım kütüphanesi** altında, kendi takımlarınızı tek bir parçanın ötesinde tutabilirsiniz:

- {{ui:Bu takımı kaydet}} seçili takımı **Kayıtlı takımlarım** listesine ekler; {{ui:Bu parçanın tüm takımlarını kaydet}} hepsini ekler. Kayıtlı takımlarım bu tarayıcıda tutulur ve her parça için kullanılabilir. Zaten kaydettiğiniz bir takım (aynı tür, boyut, kanal sayısı ve geçersiz kılmalar) iki kez kaydedilmez.
- {{ui:Bu parçaya ekle}} seçilen kayıtlı takımı parçaya alır. Takımın T numarası parçadaki başka bir takım tarafından zaten kullanılıyorsa, bir sonraki boş numarayı alır ve panel bunu söyler. {{ui:Kütüphanemden kaldır}} onu kayıtlı listeden çıkarır (zaten onu içeren parçalardan değil).
- {{ui:Takımları dışa aktar…}} parçanın takımlarını bir `.json` dosyası olarak yazar; {{ui:Takımları içe aktar…}} böyle bir dosyanın takımlarını aynı kurallarla parçaya ekler (zaten orada olan bir takım atlanır, alınmış bir T numarası taşınır). Dosya boyutları, kanal sayılarını, malzemeleri ve yazdığınız ilerleme ve devir hızı geçersiz kılmalarını tutar; kimlik içermez. Bir atölyenin takımlarını başka bir bilgisayara taşımak ya da bir meslektaşa vermek için kullanın.

Tarayıcı kütüphaneyi saklayamazsa (depolama kapalı ya da dolu), kaydetme bunu bildirir ve dosyayı saklamak için {{ui:Takımları dışa aktar…}} seçeneğini kullanın. Bir dosya bu sürümün ya da daha eski bir sürümün PartCraft takım kütüphanesi olmalı, geçerli boyutlarda en fazla 500 takım içermelidir; başka her şey nedeniyle, nedeni belirtilerek reddedilir.

Bir takımla gelen kesme hızları ve talaş yükleri başlangıç değerleridir; bkz. [Takım yolları ve G kodu oluşturma](topic:manufacture).
