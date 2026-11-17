---
title: Mesafeleri, açıları ve kütleyi ölçün
summary: Minimum mesafe ve ΔX ΔY ΔZ için görünümde iki şeye tıklayın; bir kenarın uzunluğunu, bir deliğin çapını, bir yüzeyin alanını veya bir noktanın koordinatlarını okuyun; bir parçanın veya montajın hacmini, kütlesini, kütle merkezini ve eylemsizliğini alın.
keywords: ölç, mesafe, minimum mesafe, açı, uzunluk, yarıçap, çap, alan, koordinatlar, delta, inceleme, kütle özellikleri, kütle, ağırlık, kütle merkezi, ağırlık merkezi, eylemsizlik, eylemsizlik momenti, yoğunluk, malzeme
from: 20bda0b7
---

**Ölç** modeli her çalışma alanında (Tasarım, Form, Simülasyon, Üretken, İmalat) ve montajda çalışır. **Görünüm** grubundaki {{ui:Görünümler}} menüsündedir ya da {{key:M}} tuşuna basın. Görünümün sol üstünde bir kart açılır.

## Tek bir şeyi ölçün

Bir köşeye, kenara veya yüzeye tıklayın. Kart şunları gösterir:

- **Bir nokta** (köşe, kenar orta noktası veya daire merkezi): X, Y, Z.
- **Bir kenar**: düz, daire veya eğri ve uzunluğu; daire için ayrıca yarıçap, çap ve merkez.
- **Bir yüzey**: düz, silindir, koni vb. ve alanı; düz bir yüzeyin normali; bir silindirin yarıçapı ve çapı (bir deliğin boyutu). Alanlar, ağ çekirdeğinin oluşturduğu yüzeylerin alanlarıdır.
- **Bütün gövde**: {{key:Shift}} tuşunu basılı tutup parçaya tıklayın. Hacmini, alanını, kütlesini ve eylemsizliğini alırsınız (aşağıya bakın).

İmleç, 10 piksel içindeki köşelere, kenar orta noktalarına ve daire merkezlerine yapışır; küçük mavi bir nokta, tıklamadan önce yapışmayı gösterir. Bir deliğin merkezini seçmek için deliğin ortasına, çevresini (daireyi) seçmek için çevreye işaret edin.

## İki şey arasında ölçün

İkinci bir öğeye tıklayın. Kart şunları ekler:

- **Minimum mesafe** ve iki en yakın nokta; görünümde aralarında bir çizgiyle çizilir.
- **ΔX, ΔY, ΔZ** ilk en yakın noktadan ikinciye.
- İki düz yüzey arasındaki **açı** (normalleri arasında, 0–180°), iki düz kenar veya eksen arasında (0–90°) ya da bir kenar ile bir yüzey arasında.
- İki paralel düz yüzey için **Düzlemler arası boşluk**, iki daire veya delik için **Merkezden merkeze**, iki paralel delik veya silindir için **Eksenden eksene**.

Üçüncü bir tıklama yeni bir çift başlatır. {{key:Esc}} seçimleri temizler; bir kez daha {{key:Esc}} (veya {{ui:Kapat}}) Ölç'ü kapatır. {{ui:Kopyala}} sonuçları sekmeyle ayrılmış metin olarak panoya koyar; bir elektronik tabloya yapıştırmaya hazırdır.

### Ne kadar doğru

PartCraft parçayı ağ çekirdeğiyle oluşturur; bu yüzden mesafeler ağın yüzeylerinde hesaplanır ve kart **yaklaşık: ağ yüzeylerine göre** yazar. Bu, düz yüzeyler ve köşeler arasında doğrudur, eğriler için biraz kaymıştır. Daha ince bir **Eğriler** ayarı bunları yaklaştırır. Gerçek yüzeylerde kesin ölçüm için kesin bir çekirdek gerekir: bu sürümde henüz yapılmadı.

## Kütle özellikleri

Kartta ya da {{ui:Görünümler}} menüsünde {{ui:Kütle özellikleri}} seçin. Bir parçada kartta bir **Malzeme** seçin (çelik, alüminyum, plastikler ve kendi olağan yoğunluklarıyla diğerleri). Bir montajda her parça kendi özelliklerinde ayarlanan malzemeyi kullanır (parçayı seçin, sonra **Malzeme**); sonuç tüm parçalar içindir.

Kart kütleyi, hacmi, alanı, kütle merkezini, eylemsizlik tensörünü (Ixx, Iyy, Izz ve çarpımlar Ixy, Iyz, Ixz, kg·mm² cinsinden, kütle merkezi etrafında dünya eksenlerinde) ve asal momentleri gösterir. Malzeme yoksa birim yoğunluk başına aynı değerleri (mm⁵) gösterir ve kütle göstermez.

Sayılar, ağ çekirdeğinin oluşturduğu üçgenlenmiş katı için kesindir (eğri yüzeyler yüzeyçik olarak), bu yüzden yuvarlak bir parça biraz düşük çıkar ve kart bunu söyler. Malzeme yoğunlukları tipik el kitabı değerleridir; gerçek bir alaşım veya sınıf birkaç yüzde farklı olabilir.

## Sınırlar

- Yakalama, başka geometrinin arkasında gizli bir noktayı bulabilir; kartın istediğinizi söylediğini kontrol edin.
- Ölç, bir eskiz veya çizim sayfası açtığınızda ya da çalışma alanı değiştirdiğinizde kapanır.
