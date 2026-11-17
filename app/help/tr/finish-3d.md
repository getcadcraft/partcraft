---
title: 3B yüzey bitirme: paralel ve pürüz (scallop)
summary: Modelin tüm eğri yüzeyini bir top, burun yuvarlak ya da düz uçlu freze ile; istediğiniz açıda paralel çizgilerle ya da aralarındaki sırtların istediğiniz yüksekliği koruyacak şekilde belirli bir mesafede aralıklı geçişlerle bitirin. Yolların neyi garanti ettiği ve neyi etmediği.
keywords: 3B bitirme, bitirme, paralel, raster, pürüz, sabit pürüz, sivri uç, küresel uç, burun yuvarlak, yüzey, tolerans, adım aralığı, eğim, bırakılacak stok, düşen kesici, aşırı kesme, gouge
from: e1587d0a
---

Üretim'de iki işlem, takımı dik (üç eksen) tutarak **modelin tüm yüzeyini** keser. Seçim almazlar: yukarıdan görülebilen modelin tamamı üzerinde çalışırlar. Önce parçayı kabaca işleyin (uyarlanabilir ya da cep); kesilmemiş stok üzerinde bir bitirme geçişi, derin keseceğini uyarır.

## Paralel

Modelin üzerinde, ayarladığınız **açıda**, birbirinden **adım aralığı** (takım çapının bir kesri) kadar uzakta düz çizgiler. Her çizgi yüzeyi izler: takım ucu, kesicinin hiçbir parçası modelin altına inmeyecek kadar yüksektedir ve yüzey büküldüğü her yerde çizgi daha ince kesilir. **Zikzak** açıkken, takım çizgiler arasında güvenli olabildiği yerde indirilmiş kalır (hareket boyunca denetlenir); aksi halde kalkar.

- **Tolerans**: bir çizginin düz bir parçasının gerçek uç yüksekliğinden ne kadar uzak olabileceği (yarısı, her parçanın ortasındaki sınır olarak kullanılır). Varsayılan 0.01 mm.
- **Yalnızca yüzey en az … ve en fazla … (°) olduğu yerde**: yalnızca sığ alanları ya da yalnızca dik alanları bitirin. Yüzey aralığın dışında olduğu yerde çizgi atlanır ve takım kalkar.
- **Bırakılacak stok**: model bu mesafe kadar ofset edilir (kesici bu kadar büyütülmüş olur: küresel ve burun yuvarlak takımlarda kesindir; düz bir takım en az bu kadar bırakır).
- **Taban**: bu z'nin altında hiçbir şey kesilmez.

## Pürüz (scallop)

Yüzey boyunca birbirinden sabit bir mesafede tutulan geçişler; böylece iki komşu geçiş arasında kalan sırt (pürüz), istediğiniz **yüksekliğe** sahip olur. Mesafe yükseklikten ve topun yarıçapından türetilir: s = 2·√(2·R·h − h²); örneğin Ø6 bir top ve 0.02 mm'lik bir sırt için geçişler arasında yaklaşık 0.69 mm. Burun yuvarlak bir takım köşe yarıçapını kullanır. Düz uçlu bir freze reddedilir: boyutlandırılacak bir sırtı yoktur.

Geçişler **modelin kenarından, içe doğru** ya da **üstünden, aşağı doğru** başlar. Yüzey üzerindeki mesafenin (yüksekliğin değil) konturlarıdırlar; bu yüzden eğimde planda birbirine yakındırlar, düzlükte ise geniş aralıklıdırlar. Mesafe, yüzey üzerindeki bir ızgarada ölçülür ve yaklaşık %1 doğrudur; sırt yüksekliği, yüzeyin düz ya da yavaş eğildiği yerlerde kesin, hızlı büküldüğü yerlerde yaklaşıktır. **Tırmanma** (climb), yüzeyin yüksek tarafını kesicinin sağında tutar.

## Yolların ne kadar iyi olduğu

Testlerin kapalı formüllerle ya da kesicinin izi üzerinde bağımsız bir kaba kuvvet aramasıyla denetlediği şeyler:

- Takımın altındaki uç yüksekliği, örgünün yüzeylerinde, kenarlarında ve köşelerinde top, burun yuvarlak ve düz takımlar için kesindir ve hiçbir zaman gerçek yüksekliğin üstüne çıkmaz; paralel çizgiler için yol bu tolerans içinde kalır ve bundan daha derin bir aşırı kesme (gouge) olmaz.
- Eğik bir düzlemdeki yol uzunlukları kapalı formülle uyuşur; bir düzlemde pürüz geçişleri istenen mesafede aralıklıdır ve aralarındaki sırt istenen yükseklikte çıkar.
- Stok simülasyonu, bir geçişten sonra aşırı kesme olmadığını ve kalan sırtları gösterir.

Bu yollar neyi değildir: bunlar temel bitirme geçişleridir, bir üretim sisteminin sunduğu her şeyin tamamı değildir.

- Henüz yapılmadı: su hattı (sabit z), kalem ve köşe temizliği, radyal ve spiral geçişler, bir eğriyi yüzeye yansıtma, düz alan algılama, kalan işleme, tutucu ve sap çarpışma denetimleri ve takımın herhangi bir eğimi.
- Takım merkezi modelin üzerinde kalır: yollar, modelin dışına taşmak yerine kenarında durur; bu yüzden kenarda tam duran dik bir duvar, dibine kadar bitirilmez.
- Alt kesikler görülmez (yüzey, takımın yukarıdan karşılaştığı şeydir).
- Model, çekirdekten gelen örgüdür; bu yüzden yollar kesin yüzeyi değil örgüyü izler (kiriş toleransı parçanın köşegeninin yaklaşık 0.0002'sidir).
- İnce bir tolerans ile büyük bir modeli bitirmek, çok sayıda kısa hareketli uzun bir program üretir. Kesmeden önce çıktıyı makinenizin kendi simülatöründe denetleyin.
