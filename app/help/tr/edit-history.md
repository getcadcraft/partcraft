---
title: Bir parçayı geçmişi üzerinden değiştirme
summary: Özellikleri ve eskizleri sonradan düzenleyin, bastırın, geri sarın, özellikleri daha önceki bir yere ekleyin, yeniden sıralayın, adlandırın ve silin; bunların hepsini geri alın.
keywords: geçmiş, özellik ağacı, tasarım ağacı, özelliği düzenle, eskizi düzenle, bastır, bastırmayı kaldır, geri sarma, geri sar, ileri sar, yeniden sırala, özelliği taşı, sil, yeniden adlandır, geri al, yinele, yeniden oluştur, yeniden üret, üst öğe, alt öğe, büyük parça, çok özellik, yavaş yeniden oluşturma, 750 özellik
from: 6f75aef4
---

Bir PartCraft parçası, geçmişidir: soldaki düzlemlerin, eskizlerin ve özelliklerin listesi. PartCraft, bir şey her değiştiğinde katıyı bu listenin en üstünden yeniden oluşturur. Listede erken bir sayıyı değiştirmek, onun üzerine kurulu her şeyi değiştirir.

## Bir özelliği düzenleme

1. Geçmişte özelliğe tıklayın (ya da altında girintili duran eskize).
2. Ayarlarını sağdaki panelde değiştirin. Her değişiklik hemen parçayı yeniden oluşturur.

Tamam ya da İptal yoktur: her değişiklik uygulanır. Beğenmediyseniz {{key:Mod+Z}} tuşuna basın.

## Köşe yuvarlatmanın, pah kırmanın veya kabuğun kullandığı kenarları ya da yüzeyleri değiştirme

Geçmişte özelliğe çift tıklayın ya da özelliği seçip {{ui:Kenarları seç}} (ya da {{ui:Yüzeyleri seç}}) seçeneğini belirleyin. Kenarlara ya da yüzeylere tıklayarak ekleyin ya da çıkarın, ardından {{ui:Bitti}} ya da {{key:Esc}} tuşuna basın. Bkz. [Köşe yuvarlat, pah kır ve kabuk oluştur](topic:fillet-chamfer-shell).

## Eskizi düzenleme

1. Geçmişte eskize çift tıklayın ya da eskizi seçip sağ paneldeki {{ui:Eskizi düzenle}} seçeneğini (ya da araç çubuğundaki {{ui:Eskiz}} seçeneğini) belirleyin.
2. Parça, eskiz yapıldığındaki haline döner: eskizden sonraki özellikler, siz düzenlerken gizlenir.
3. Geometriyi, ilişkileri ya da ölçülendirmeleri değiştirin.
4. Eskizi kapatın. Tüm parça değişiklikle birlikte yeniden oluşturulur.

Yalnızca bir ölçüyü değiştirmek için eskizi açmanız gerekmez. Özelliği ya da eskizi seçin ve sağ paneldeki **Eskiz ölçülendirmeleri** (ya da **Yönlendiren ölçülendirmeler**) altındaki sayıyı değiştirin. Bkz. [Eskizi açmadan ölçüleri değiştirme](topic:change-sizes).

## Bir özellik başarısız olduğunda

Bir değişiklik bir özelliği olanaksız kılarsa PartCraft diğer her şeyi oluşturur ve sorunu işaretler:

- özellik geçmişte **⚠ hata** gösterir ve iletisi sağ panelinin en üstünde yer alır (okumak için satırın üzerine de gelebilirsiniz);
- buna ihtiyaç duyan özellikler **⚠ henüz yapılmadı** gösterir ve "Extrude2'ye ihtiyaç var, bu da hatalı." iletisini verir;
- durum çubuğundaki çip "1 özellik hatalı" yazar.

Nedeni düzeltin (ya da geri alın); parça yeniden oluşturulur. Sık görülen iletiler ve yapılması gerekenler [Sorun giderme](topic:troubleshooting) konusunda yer alır.

## Bir özelliği bastırma

Bastırmak, bir özelliği silmeden kapatır: bir parçayı bir delik ya da örüntü olmadan denemek için kullanışlıdır.

1. Özelliği seçin.
2. {{ui:Bastır}} seçeneğini belirleyin. Satırında **kapalı** yazar. Buna ihtiyaç duyan özellikler de oluşturulmaz.
3. Yeniden açmak için {{ui:Bastırmayı kaldır}} seçeneğini belirleyin.

## Geri sarma

Geri sarmak parçayı yalnızca belli bir noktaya kadar oluşturur; böylece parçayı o andaki haliyle görebilir ya da geçmişte daha önce bir özellik ekleyebilirsiniz.

1. Bir özellik seçip {{ui:Buraya geri sar}} seçeneğini belirleyin. Bu özellik ve altındaki her özellik soluk gösterilir ve oluşturulmaz. **Geri sarma çubuğu · ileri sar** satırı yeri işaretler.
2. Şimdi eklediğiniz her özellik, soluk olanlardan önce, **çubuğun olduğu yere** eklenir.
3. Her şeyi yeniden oluşturmak için **Geri sarma çubuğu · ileri sar** satırına tıklayın.

Geri sarma konumu dosyaya kaydedilir.

## Özellikleri yeniden sıralama

1. Özelliği seçin.
2. {{ui:Yukarı taşı}} ya da {{ui:Aşağı taşı}} seçeneğini belirleyin ya da geçmiş satırına odaklanmışken {{key:Alt+Up}} ya da {{key:Alt+Down}} tuşuna basın.

Bir özellik, kullandığı bir şeyin üstüne asla taşınamaz. Düğme soluk gösterilir; üzerine geldiğinizde (ya da tuşu denediğinizde) nedeni görürsünüz, örneğin "Extrude2, Sketch2'yi kullanır; bu yüzden Sketch2 önce gelmelidir."

Bir özelliğin kullandıkları: eskizi; eskizinin oturduğu yüzey; bir örüntünün ya da aynanın kopyaladığı özellikler; yön ya da eksen olarak kullanılan bir eskiz çizgisi ya da döndürme.

## Bir özelliği silme

1. Özelliği seçip sağ paneldeki ya da araç çubuğundaki {{ui:Sil}} seçeneğini belirleyin ya da {{key:Delete}} tuşuna basın.
2. Başka özellikler bunu kullanıyorsa PartCraft sorar: "Extrude3, Hole1, Extrude1'i kullanır ve onlar da silinecek." {{ui:Tümünü sil}} ya da {{ui:İptal}} seçeneğini belirleyin.

Bir özelliği silmek, eskizini silmez: eskiz, başka bir özellik için hazır, kullanılmayan bir eskiz olarak görünümde yeniden belirir. Eskize ihtiyacınız yoksa onu ayrıca silin.

## Yeniden adlandırma

Özelliği seçin ve sağ panelin altındaki **Ad** alanına yeni bir ad yazın (en fazla 60 karakter). Hiçbir şey seçili değilken parçanın kendi adı sağ panelde yer alır.

## Yüzlerce özellikli parçalar

Yüzlerce özellikli bir parça 750 özellik ile test edilmiştir. PartCraft, geçmişin ortasında elde ettiği katıyı saklar; böylece geçmişin sonundaki bir değişiklik yalnızca ondan sonraki özellikleri yeniden oluşturur. En üstteki bir değişiklik ise üzerine kurulu her şeyi yeniden oluşturur ve bu en uzun sürendir. Geri al ve yinele, yalnızca iki durumun farklı olduğu yerden yeniden oluşturur. Büyük bir parçada daha hızlı çalışmak için çalıştığınız yere kadar geri sarın (yukarıdaki Geri sarma bölümüne bakın) ya da şimdilik ihtiyacınız olmayanları bastırın. Birbirine dokunmayan birkaç kesme ve çıkıntı birlikte uygulanır; bu yüzden birbirinden ayrı çok sayıda delikten ve çıkıntıdan oluşan bir parça, özellik sayısının gösterdiğinden daha hızlı oluşturulur.

Büyük bir parça arka planda yeniden oluşturulur: alttaki oluşturma çipi **Yeniden oluşturuluyor…** yazar ve ne kadar ilerlediğini gösterir; bu sırada görünüm, paneller ve menüler çalışmaya devam eder. Yeni hali hazır olana kadar ekranda son oluşturulan parça kalır. Yeniden oluşturulurken yine bir şey değiştirirseniz PartCraft en yeni sürümü oluşturur ve devam eden işi bırakır. Küçük bir parça ise hemen yeniden oluşturulur.

## Geri alma ve yineleme

- {{key:Mod+Z}} ya da {{ui:Geri al}} son değişikliği geri alır: bir özelliği, bir ayarı, bir eskiz düzenlemesini ya da bir sürüklemeyi. Durum çubuğu neyin geri alındığını söyler, örneğin "Geri alındı: ölçülendirme değişikliği."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ya da {{ui:Yinele}} yineler.
- PartCraft son 200 adımı tutar (çok büyük bir parça için 200 kopya çok fazla bellek kullanacağından daha az adım tutulur; ama en az en yeni 20 adım tutulur). Çizim sayfasındaki değişiklikler (bir kesit, taşınmış bir GD&T sembolü) aynı listededir. Bir dosya açmak ya da yeni bir parça başlatmak listeyi temizler.

:::mac
Mac'te yinelemek için ⇧⌘Z kullanın. Safari'de ⌘Y, tarayıcı geçmişini açabilir.
:::
