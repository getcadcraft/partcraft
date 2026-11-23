---
title: "3D kaba işleme ve artık işleme"
summary: "Bütün modelin çevresindeki malzemeyi seviye seviye düz, yuvarlak uçlu ya da bilyalı bir parmak frezeyle temizleyin, bitirme için pay bırakarak; sonra daha küçük bir takımın yalnızca ilk takımın bıraktığı malzemeyi kesmesine izin verin. Yolların neyi garanti ettiği ve neyi etmediği."
keywords: "3d kaba işleme, kaba işleme, kaba, artık işleme, kalan malzeme işleme, kalan kaba işleme, bırakılacak malzeme, adım derinliği, seviyeler, z seviyesi, su hattı, rampa, dalış, yanlış kesim, daha küçük takım"
from: 29ddc266
---

İmalat'ta, araç çubuğundaki {{ui:Daha fazla}} altında iki işlem, **bütün modelden** 3D olarak malzeme temizler; takım dik tutulur (ya da işlemin kendi [takım yönü](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) boyunca). Hiç seçim istemezler.

## 3D kaba işleme

{{ui:3D kaba}} ham malzemenin üstünden bir **adım derinliği** seferinde aşağı çalışır. Her seviyede, takımın modele dokunmadan ulaşabildiği her şeyi temizler: birbirinden **adım aralığı** (takım çapının bir kesri) kadar düz sıralar, sonra ulaşabildiği alanın kenarı boyunca bir kez; böylece duvarlar takip edilir ve planda bir basamak sırası olarak bırakılmaz.

- **Bırakılacak malzeme**: takımın modelden her yerde ne kadar uzakta kaldığı, bitirme geçişi için (varsayılan 0.5 mm).
- **Her düz yüzde bir seviye**: modelin her düz yüzünün yüksekliğinde (artı bırakılacak malzeme) fazladan bir seviye; böylece bir taban neredeyse tam bir adım derinliği yükseklikte bırakılmaz.
- **Şundan ince malzemeyi yok say**: bundan ince malzeme, yukarıda ya da yanda, bir geçişe değmez (kaba işleme için 0.05 mm, artık işleme için 0.5 mm; böylece bir duvar boyunca kalan bir kıl, küçük takımı her duvarın etrafına göndermez).
- **Taban**: bu yüksekliğin altında hiçbir şey kesilmez. Boş bırakılırsa modelin tabanı.

Önceki işlemlerin bıraktığı gibi ham malzemeden başlar: bir yüz geçişinden sonra yüz frezenin açtığı havayı kesmez.

Aşağı inmek: takımın aşağı inerken malzemeyle karşılaşacağı yerde, kendi geçişi boyunca **rampa açısında** rampa çizer, en fazla iki takım çapı üzerinden ileri geri. Bu kadar kısa bir geçiş düz aşağı, dalış beslemesinde dalar; işlem bunları sayar ve uyarır, çünkü merkezinde kesmeyen bir takım bunu yapmamalıdır.

## Artık işleme

{{ui:Kalan}}, **önce büyük, sonra küçük takım** için aynı stratejidir. Malzeme simülasyonunu okur ve yalnızca hâlâ malzemenin durduğu yerlerde keser: büyük takımın dönemediği iç köşeler, sığmadığı oluklar, eğimlerde bıraktığı basamaklar. Başka her yerde hiçbir şey yapmaz; bu yüzden yolu, aynı takımın taze ham malzemede alacağının küçük bir parçasıdır.

Kaba işlemeden sonra koyun ve daha küçük takımı seçin. Öncesindeki işlemlerin malzeme simülasyonuna ihtiyaç duyar; çalışma alanı bunu her zaman çalıştırır.

## Yolların ne kadar iyi olduğu

- **Yanlış kesim yok.** Takım konumları bir ızgarada hesaplanır; kesici biraz daha büyük alınır (yanlara 1.4 ızgara hücresi ve bırakılacak malzeme kadar), böylece nerede durursa modelin dışında kalır. Testler her kesim noktasını, tam ağda tam takıma karşı denetler ve her çalıştırmadan sonra malzeme simülasyonu: yanlış kesim yok, hızlı hareket malzemeden geçmez.
- **Bunun bedeli**: duvarlar bırakılacak malzemeden biraz fazlasını tutar; işlemde "Duvarlarda fazla malzeme" olarak gösterilen miktara kadar (Ø6 takım için yaklaşık 0.5 mm, daha küçükler için daha az). Bitirme geçişi bunu alır.

Bunlar ne değildir:

- Sıralar düz çizgilerdir, parçanın şeklinin ofsetleri ya da sabit katılım eğrileri değildir. Ofset ya da uyarlanabilir bir stratejiden daha fazla kaldırma ve hava hareketi yapar ve her seviyedeki ilk sıra takımın tam genişliğinde keser. Tabanları düz cepler için [Uyarlanabilir](topic:manufacture) daha iyi bir kabadır.
- Takımın sapı ve tutucusu denetlenmez. Kesim, diş boyundan daha derinse bir uyarı çıkar.
- Alt kesimler görülmez: model, takımın eksenine aşağı inerken karşılaştığı şeydir. Bir yanı kaba işlemek için ikinci bir işleme [eğik bir takım yönü](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) verin.
- Artık işleme, malzemeyi simülasyonun ızgarası kadar iyi bilir (parça boyutuna göre 0.1 ila 2 mm hücreler).
- Büyük bir parçada program uzundur (Ø6 takımla 200 mm'lik bir flanş için 100.000'den fazla hareket) ve hesaplanması yaklaşık bir dakika sürer; çalışma alanındaki her değişiklik bütün programı yeniden hesaplar. Kaba işleme için sığan en büyük takımı kullanın.
- Çıktıyı kesmeden önce makinenizin kendi simülatöründe kontrol edin.
