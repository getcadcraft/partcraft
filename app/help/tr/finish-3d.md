---
title: "3D yüzey işlemi: paralel ve scallop"
summary: "Bütün modelin eğri yüzeyini bir bilyalı, yuvarlak uçlu ya da düz uçlu freze ile bitirin; istediğiniz açıda paralel çizgiler halinde ya da aralarındaki sırtların istediğiniz yüksekliği koruyacak şekilde belirli bir mesafe aralıklı geçişlerle. Yolların neyi garanti ettiği ve neyi etmediği."
keywords: "3d yüzey işlemi, bitirme, paralel, raster, scallop, sabit scallop, sırt, bilyalı uçlu, yuvarlak uç, yüzey, tolerans, adım aralığı, eğim, bırakılacak malzeme, düşen freze, yanlış kesim"
from: 942d2341
---

İmalat'taki iki işlem, **modelin bütün yüzeyini** takımı dik tutarak (üç eksen) keser. Hiç seçim istemezler; yukarıdan görülebilen modelin tamamıyla çalışırlar. Önce parçayı kabaca işleyin (uyarlanabilir ya da cep); üzerinde kesilmemiş malzeme bulunan bir bitirme geçişi derin keseceği konusunda uyarır.

## Paralel

Modelin üzerinden, ayarladığınız **açıda** düz çizgiler, her biri **adım aralığı** (takım çapının bir kesri) kadar aralıklı. Her çizgi yüzeyi izler: takım ucu, kesicinin hiçbir parçası modelin altına inmeyecek kadar yüksektedir ve çizgi yüzey büküldüğü her yerde daha ince kesilir. **Zig-zag** açıkken takım, güvenli olduğu yerde çizgiler arasında indirili kalır (hareket boyunca denetlenir); aksi halde kalkar.

- **Tolerans**: bir çizginin düz bir parçası gerçek uç yüksekliğinden ne kadar uzakta olabilir (her parçanın ortasında sınır olarak yarısı kullanılır). Varsayılan 0.01 mm.
- **Yalnızca yüzeyin en az … ve en çok … (°) olduğu yerde**: yalnızca sığ alanları ya da yalnızca dik alanları bitirin. Yüzey aralığın dışındaysa çizgi atlanır ve takım kalkar.
- **Bırakılacak malzeme**: model o mesafe kadar ofsetlenir (kesici o kadar büyütülür: bilyalı ve yuvarlak uçlu takımlar için tam; düz takım en azından o kadar bırakır).
- **Taban**: bu z'nin altında hiçbir şey kesilmez.

## Scallop

Yüzey üzerinde birbirinden sabit bir uzaklıkta geçişler; böylece iki komşu geçiş arasında kalan sırt (scallop), istediğiniz **yükseklikte** olur. Uzaklık yükseklikten ve bilyanın yarıçapından çıkar: s = 2·√(2·R·h − h²); örneğin Ø6 bilya ve 0.02 mm sırt için geçişler arası yaklaşık 0.69 mm. Yuvarlak uçlu takım kendi köşe yarıçapını kullanır. Düz uçlu freze reddedilir: boyutlandıracak bir sırtı yoktur.

Geçişler **modelin kenarından içeri doğru** ya da **üstünden aşağı doğru** başlar. Bunlar yüzey üzerindeki uzaklığın eş eğrileridir (yüksekliğin değil), bu nedenle eğimde planda birbirine yakın, düzlükte geniş aralıklıdır. Uzaklık, yüzey üzerinde bir ızgarada ölçülür ve yaklaşık %1 doğrudur; sırt yüksekliği yüzeyin düz ya da yavaşça eğri olduğu yerlerde tam, hızlıca büküldüğü yerlerde yaklaşıktır. **Climb** yüzeyin daha yüksek tarafını kesicinin sağında tutar.

## Yolların ne kadar iyi olduğu

Testlerin denetlediği, kapalı formüllerle ya da kesicinin ayak izinin bağımsız kaba kuvvet aramasıyla:

- Takımın altındaki uç yüksekliği bilyalı, yuvarlak uçlu ve düz takım için ağın yüzlerinde, kenarlarında ve köşelerinde tam olarak hesaplanır ve gerçek yükseklikten asla yüksek değildir; paralel çizgilerde yol toleransı içinde kalır ve bundan daha derin bir yanlış kesim (gouge) olmaz.
- Eğik bir düzlemdeki yol uzunlukları kapalı formülle uyuşur; bir düzlem üzerindeki scallop geçişleri istenen uzaklıkta aralıklıdır ve aralarındaki sırt istenen yükseklikte çıkar.
- Malzeme simülasyonu bir geçişten sonra hiçbir yanlış kesim göstermez ve kalan sırtları gösterir.

Bunlar ne değildir: temel bitirme geçişleridir, bir üretim sisteminin sunduğu her şeyin tamamı değildir.

- Yapılmadı: su hattı (sabit z) bitirme, kalem ve köşe temizliği, radyal ve spiral geçişler, bir eğriyi yüzeye yansıtma, düz alan algılama, tutucu ve sap çarpışma denetimleri. Kaba işleme ve artık işleme kendi işlemleridir ([3D kaba işleme ve artık işleme](topic:rough-3d)); eğilen bir takım [5 eksen bitirme](topic:multi-axis#5-axis-finishing)dir.
- Takımın merkezi modelin üzerinde kalır: yollar modelin kenarında durur, dışarıya taşmaz; bu yüzden kenardaki dik bir duvar tabanına kadar bitirilmez.
- Alt kesimler görülmez (yüzey, takımın yukarıdan karşılaştığı şeydir).
- Model, çekirdekten gelen ağdır; yollar ağı izler (kiriş toleransı parçanın köşegeninin yaklaşık 0.0002'si), tam yüzeyi değil.
- Büyük bir modeli ince bir toleransla bitirmek, çok sayıda kısa hareketli uzun bir program yapar. Üretmeden önce çıktıyı makinenizin kendi simülatöründe kontrol edin.
