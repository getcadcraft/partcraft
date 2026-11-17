---
title: Eklemlerle bir montaj oluşturun
summary: Bir parçadan montaj başlatın; kopyaları ve başka parça dosyalarını ekleyin; rijit, döner, kaydırıcı, silindirik, düzlemsel, küresel ve pim-yuva eklemleriyle düz yüzeylerde birleştirin, eksenlerde merkez eklemler kurun, parçayı yerinde düzenleyin ve montajı kaydedin.
keywords: montaj, eşleştirme, eşleştirmeler, birleşim, döngü, kapalı döngü, bağlantı, dört çubuk, mekanizma, rijit, döner, kaydırıcı, silindirik, düzlemsel, küresel, küre birleşim, pim yuva, yuvaya pim, bileşen ekle, sabitlenmiş, sabit, eşmerkezli, çakışık, parçayı düzenle, bağlamda, partcraft-asm
from: a53bbfef
---

Bir montaj parçaları bir araya getirir. PartCraft'ta **birleşimler** parçaları yerleştirir: her birleşim, iki parçanın her birinin düz bir yüzeyine oturur ve onları yüz yüze getirir. Döner bir birleşim parçanın dönmesine, kaydırıcı kaymasına, rijit bir birleşim ise onu tutmasına izin verir.

## Bir montaj başlatma

1. Katı içeren bir parça oluşturun (boş bir parça montaja giremez: "Önce bir katı oluşturun, sonra bir montaja ekleyin.").
2. Araç çubuğunda {{ui:Montaj}} seçeneğini belirleyin.

Durum çubuğu şunu söyler: "Montaj, sabitlenmiş parça olarak Part1 ile başlatıldı. Daha fazla parça ekleyin (Kopya ekle, Ekle ya da Düzenle › Çoğalt), sonra bunları Birleşim ile birleştirin." Sol panel artık **Parçalar** ve **Birleşimler** listeler; araç çubuğu montaj araçlarını gösterir. Eskiz ve özellik araçları gizlenir.

İlk parça **sabitlenmiştir**: asla hareket etmez ve diğer her şey ona göre yerleştirilir.

## Parça ekleme

- {{ui:Kopya ekle}} seçili parçanın (ya da son parçanın) başka bir kopyasını ekler. Kopyalar bir parçayı paylaşır: birini düzenleyin, her kopya değişir.
- Düzenle grubundaki {{ui:Çoğalt}} ({{key:Mod+D}}) seçili parça için aynısını yapar. {{key:Mod+C}} ve {{key:Mod+V}} bir parçayı kopyalar ve diğerlerinin yanına yapıştırır; bu montajda ya da başka birinde. {{key:Mod+Shift+V}} aynı yere yapıştırır. Bkz. [Kopyalama, yapıştırma ve çoğaltma](topic:copy-paste).
- {{ui:Ekle}} bilgisayarınızdaki bir `.partcraft.json` dosyasından parça ekler. Parça montaja kopyalanır.

Yeni parçalar, şu an oradaki her şeyin 20 mm sağına yerleşir ve bir birleşim onları yerleştirene kadar orada kalır. Birleşimi olmayan bir parça da elle taşınabilir: yazılan değerler ya da sürüklediğiniz oklarla (bkz. [Parça listesi, patlatılmış görünümler ve hareketli parçalar](topic:assembly-bom-explode)).

## İki parçayı birleştirme

1. {{ui:Birleşim}} seçeneğini belirleyin ya da {{key:J}}'ye basın. Sağ panel **Yeni birleşim** yazar.
2. İlk parçanın düz bir yüzeyine tıklayın. Vurgulanır.
3. İkinci parçanın düz bir yüzeyine tıklayın.

İkinci parça, yüzeyi ilk parçanın yüzeyine karşı gelecek ve ona bakacak şekilde kayar. Birleşim **Birleşimler** altında görünür, örneğin "Revolute1", ve sağ panel ayarlarını gösterir.

- Her iki yüzey de döndürmelerle yapıldıysa birleşim **döner** olarak başlar; değilse **rijit**. Sonra değiştirebilirsiniz.
- Eğri yüzeyler seçilemez: "Bu yüzey eğri. Düz bir yüzey seçin (bir delik ya da bir döndürmenin ekseni etrafında döndürmek için, bunu sonradan birleşimde seçin)."
- {{key:Esc}} başladığınız bir birleşimi iptal eder (ya da soldaki listeden bir parçaya tıklayın).

### Birleşim ayarları

| Ayar | Ne yapar |
|---|---|
| **Tür** | Aşağıdaki tablodaki birleşimlerden biri |
| **Açı (°)** | İkinci parçayı birleşimin ekseni etrafında döndürür (yüzeylere dik) |
| **Ofset (mm)** | İkinci parçayı eksen boyunca yüzeyden uzağa taşır (negatif değerler içeri iter) |
| **X boyunca**, **Y boyunca**, **X etrafında eğ**, **Y etrafında eğ**, **Yuva boyunca**, **Yuva yönü** | Diğer değerler; bunları kullanan birleşimler için gösterilir |
| **Merkez** (her iki taraf için) | Birleşimin ekseninin yüzeyi kestiği yer: "Yüzeyin kendi başlangıcı", bir döndürmenin ekseni ("Revolve1 ekseni") ya da bir deliğin ekseni ("Hole1, delik 2") |

Hareket ettirebildiği her değerin kutusunun altında bir sürükleme kaydırıcısı vardır; diğerleri bir kez ayarlanır.

| Birleşim | Ne hareket eder | Bir kez ayarlanır |
|---|---|---|
| **Rijit** | hiçbiri | Açı, Ofset |
| **Döner** | Açı (bir menteşe) | Ofset |
| **Kaydırıcı** | Ofset (bir çekmece) | Açı |
| **Silindirik** | Açı ve Ofset (düz bir yatakta bir mil) | |
| **Düzlemsel** | Yüzey boyunca X ve Y boyunca ile Açı (bir masada kayan bir parça) | |
| **Küresel** | Açı (dönme) ve birleşimin merkezi etrafında X ile Y'de eğme (bir küre eklem) | |
| **Pim yuvada** | Yuva boyunca ve Açı (düz bir yuvada bir pim) | **Yuva yönü**: yuvanın, yüzeyin X'ine göre açısı |

Bir yüzeyin X ve Y'si ilk parçanın yüzeyininkiyle aynıdır; birleşimin merkezi **Merkez** ile ayarlanır.

"Yüzeyin kendi başlangıcı", parçanın başlangıç noktasının yüzeye izdüşümüdür; bu çoğu zaman parçaları hizalamak istediğiniz yer değildir. Yuvarlak parçalar ve pimler için, her iki tarafta da **Merkez**'i döndürmenin ya da deliğin eksenine ayarlayın: eksenler böylece hizalanır, tıpkı bir eşmerkezli eşleştirme gibi.

### Örnek: iki flanşın yüz yüze cıvatalanması

1. Flanş parçasını açın (bir döndürme ve dairesel örüntüyle açılmış delikler) ve {{ui:Montaj}} seçeneğini belirleyin.
2. {{ui:Kopya ekle}} seçeneğini belirleyin.
3. {{key:J}}'ye basın, ilk flanşın disk yüzeyine (cıvata deliklerinin başladığı yüzey) tıklayın, sonra ikinci flanştaki aynı yüzeye. Yüzeyler döndürmeyle yapıldığı için birleşim döner olur.
4. Her iki taraf için **Merkez**'i "Revolve1 ekseni" olarak ayarlayın. Flanşlar artık bir eksen paylaşır.
5. Cıvata deliklerini hizalamak için **Açı (°)** kutusuna `22.5` yazın ya da kaydırıcıyı sürükleyin.

## Kapalı döngüler: bağlantılar

Bir halka halinde birleşen parçalar (dört çubuklu bir bağlantı, bir krank ve kaydırıcı, iki yandan desteklenen bir çerçeve) bir **döngü** oluşturur. PartCraft her döngüyü kapanacak şekilde çözer: döngüdeki birleşimler halkayı birleştiren değerleri alır ve bulundukları yerden mümkün olduğunca az hareket ederler.

- Döngüdeki bir birleşimin bir değerini **ayarlayın ya da sürükleyin**; döngünün geri kalanı onu izler. Dört çubuklu bir bağlantıda krankın **Açı** değerini sürükleyin; bağlayıcı ve sallanan kol onunla birlikte hareket eder. Ayarladığınız değer korunur; diğerleri ondan hesaplanır.
- Listede, hâlâ hareket edebilen bir döngü üzerindeki birleşim **mavi**dir: başka bir değer hâlâ ayarlanabilir. Hareket edemeyen bir döngü (desteklenmiş bir çerçeve) siyah kalır. Kapanamayan bir döngü **kırmızı**dır.
- **Parça** kutusu **Döngüler**i gösterir: kaç tanesinin kapalı olduğu ve kaç değerin hâlâ hareket edebildiği, örneğin "1 kapalı; 1 değer hâlâ hareket edebilir".
- {{ui:Hareketi çakışmalar için kontrol et}} bir döngüdeki birleşimi, döngü onu izlerken adım adım tarar (bkz. [Montajı çakışmalar ve hareket için kontrol edin](topic:check-assembly)).

Düz çubuklardan yığılmış düz bir bağlantı derinlikte uyumlu olmalıdır: bir halkanın iki yanında yüz yüze birleşen iki parça, her iki yönde de aynı yığın yüksekliğine sahip olmalıdır. Yığın tutmadığında bir parçayı kaldırmak için bir birleşimin **Ofset** değerini kullanın; aksi halde döngü kapanamaz.

## Parçalarla çalışma

Seçmek için görünümde ya da listede bir parçaya tıklayın. Sağ panel parçanın adını, kaç kopyası olduğunu, hacmini, birleşimlerini ve sabitlenmiş, birleşimleriyle yerleştirilmiş ya da "Birleşik değil: olduğu yerde kalır" durumunu gösterir. Düğmeler:

- {{ui:Bu parçayı düzenle}} (ya da araç çubuğundaki {{ui:Parçayı düzenle}}, ya da listede parçaya çift tıklayın): parçayı düzenlemek için açar;
- {{ui:Kopya ekle}};
- {{ui:Sabitlenmiş parça yap}};
- {{ui:Kaldır}}: birleşimlerini de kaldırır; önce onay sorar.

Bir montaj en az bir parça tutar: "Bir montaj en az bir parça tutar. Bunun yerine onu kapatın."

### Parçayı yerinde düzenleme

1. Bir parça seçin ve {{ui:Parçayı düzenle}} seçeneğini belirleyin. Parça geçmişiyle açılır; başlık "Bracket (Bracket montajında)" yazar.
2. Herhangi bir parça gibi değiştirin.
3. Araç çubuğunda {{ui:Geri}} seçeneğini belirleyin. Montaj güncellenir: o parçanın her kopyası değişir ve eskiz kenarlarıyla yapılmış yüzeylerdeki birleşimler izler.

Bu değişikliği geri getirmek, montajın geri alma listesinde tek bir adımdır.

## Geri alma, kaydetme ve kapatma

- Montajın kendi geri alma listesi vardır: {{key:Mod+Z}} ve {{key:Mod+Y}} birleşimler, eklemeler ve ayarlar üzerinde çalışır.
- {{ui:Kaydet}} ya da {{key:Mod+S}} `<assembly name>.partcraft-asm.json` dosyasını indirir; içinde her parça bulunur. Daha sonra {{ui:Aç}} ile açabilirsiniz.
- {{ui:Kapat}} montajı kapatır ve başladığınız parçaya döner. Montaj kaydedilmemişse sorar: {{ui:İptal}}, {{ui:Montajı at}} ya da {{ui:Önce kaydet}}.
- Montajı yeniden adlandırmak için boş alana tıklayarak hiçbir şeyi seçili bırakmayın ve sağ paneldeki **Ad** alanını değiştirin.

## Büyük montajlar

Bir montaj birkaç parçanın binlerce kopyasını tutabilir. Bir parçanın kopyaları birlikte çizilir, döndürdüğünüz bir birleşim yalnızca arkasındaki parçaları yerleştirir ve parça listesi ilk satırlarını gösterir; altında bir "Daha fazla göster" düğmesi bulunur (seçili parça her zaman listelenir).

- Görünümü döndürürken ya da yakınlaştırırken, yaklaşık 300.000 üçgenden fazla olan bir montaj parça başına bir kutu olarak çizilir; durduktan kısa bir süre sonra tam olarak çizilir.
- {{ui:Görünümler}} › {{ui:Hafif görüntüleme}} kutuları sürekli açık tutar. Parça ve birleşim seçimi yine gerçek parçaları kullanır.
- Döndürme hızı grafik kartınıza da bağlıdır. PartCraft'ın ölçtüğü sayılar, geldikleri makineyle birlikte sürüm notlarındadır.

## Birleşim sorunları

- Hiçbir birleşimin ulaşamadığı parça **serbest** olarak listelenir ve panel şunu söyler: "Bracket2 sabitlenmiş parçaya birleşik değil, bu yüzden konduğu yerde kalır."
- Kapanamayan bir döngü (uzunluklar yetmez, bir sınır bir birleşimi durdurur, yüzeyler derinlikte uyuşmaz): "Revolute3 kapanamayan bir döngüyü kapatmaya çalışıyor: 2.000 mm sapma var. Döngünün birleşimlerinin yüzeylerini, ofsetlerini ve sınırlarını kontrol edin." Birleşimleri kırmızıya döner.
- Bir parçayı düzenledikten sonra bir birleşimin kullandığı bir yüzey ya da eksen kaybolursa: "Bu birleşimin kullandığı yüzey Bracket'ten kayboldu." Birleşimi kaldırın ve yeniden oluşturun.

Sonraki: [Montajı çakışmalar ve hareket için kontrol edin](topic:check-assembly).
