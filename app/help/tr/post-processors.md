---
title: "Düzenleyebileceğiniz post işlemciler"
summary: "Post, takım yolunu kontrolcünüz için G koduna çeviren kısa bir metin dosyasıdır. Yerleşik postlardan birini kopyalayın, ihtiyacınız olan satırları (satır numaraları, takım değişimi, eve dönüş hareketleri, bitiş kodu) değiştirin, yazarken yazdığı G kodunu görün ve parçayla birlikte saklayın."
keywords: "post, post işlemci, postprocessor, G kodu, NC, GRBL, LinuxCNC, postu düzenle, özel post, cpost, takım değişimi, M6, G43, sabit çevrim, satır numaraları, modal, olay, değişken"
from: c78d0cae
---

Aynı takım yolu farklı kontrolcüler için farklı yazılmalıdır: satır numaralarıyla ya da onlarsız, `M6` ya da bir durdurma, `G28` ya da `G53`, `M30` ya da `M2`. Bir **post**, bunun nasıl yapılacağını söyleyen kısa metindir. PartCraft'ın üç yerleşik postu (Fanuc tipi, GRBL ve LinuxCNC) bu biçimde yazılmıştır, bu yüzden kendi postunuz yerleşik birinin kopyası olarak başlayabilir.

Çıktıyı kesmeden önce makinenizin kendi simülatöründe kontrol edin ve önce ham malzemenin üzerinde havada çalıştırın. Yerleşik postlar, bu biçim var olmadan önce yazdıklarını tam olarak yazar (testler çıktılarını yüzlerce programda bayt bayt karşılaştırır), ama burada hiçbir şey makinenizde kanıtlanmadı ve değiştirdiğiniz bir post sizindir, kanıtlaması da size aittir.

## Bir tane yapın

İmalat'ta, **Post** altında:

- {{ui:Postu düzenle…}} yerleşik bir kontrolcüde **kendi kopyanızı** açar. Kendi postlarınızdan birinde onu açar.
- {{ui:Yeni post…}} her olayın bulunduğu küçük boş bir postla başlar.
- {{ui:Post dosyasını içe aktar…}} bir `.cpost` metin dosyasını okur (düzenleyicideki **Dosya olarak farklı kaydet…** ile aldığınız dosya).

Düzenleyici metni, okunup okunmadığını ve hangi satırın yanlış olduğunu söyleyen bir satırı ve yazdıkça post'un yazdığı G kodunu gösterir. **Şununla önizle** bütün olayları çalıştıran küçük bir örnek programı ya da bu parçanın kendi programını seçer. {{ui:Kaydet}} postu parçanın dosyasında tutar (en çok 20 post) ve onu kontrolcü olarak seçer. Postlar parçayla birlikte gider; bir postu başka bir parçada kullanmak için onu dosya olarak kaydedin ve orada içe aktarın.

## Post nasıl görünür

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

`//` ile başlayan satırlar ve boş satırlar yok sayılır. En üstte ayarlar gelir; sonra her olay için bir `on <olay>` bloğu, `end` ile kapatılır. Bıraktığınız bir olay hiçbir şey yazmaz.

| Ayar | Anlamı |
|---|---|
| `post <id>` | Postun kimliği: harfler, rakamlar, `-` ve `_` |
| `name <text>` | Kontrolcü listesinde ne görüneceği |
| `extension <ext>` | Dosya uzantısı: nc, ngc, tap … |
| `line-numbers 10` / `off` | Her `emit` satırında `N10`, `N20` … ya da hiç |
| `decimal-point yes` / `no` | `10` yerine `10.` (yorumlar asla nokta taşımaz) |
| `canned-cycles yes` / `no` | `no`: delikler, temsil ettikleri G0/G1 hareketleri olarak yazılır |
| `modal <group> <words>` | Bir grubun kelimeleri (`modal motion G0 G1 G2 G3`), yalnızca değiştiklerinde yazılır |

## Olaylar

Bir program için şu sırayla çalışırlar: `start`; sonra her işlem için `operation`, `tool-change` (takım değiştiğinde), `spindle` (devir değiştiğinde), `approach` (ilk noktaya kadar olan hareket, ilk hızlı hareketten önce), `coolant-on`, sonra hareketleri `rapid`, `feed` ve `arc` olarak, her sabit çevrim `cycle-start` olarak, her delik için bir `cycle-hole` ve `cycle-end`; en son `end`.

Üç eksenin ötesine geçen şeyler için daha fazla olay (bu tür bir programı reddeden ve eksik olayı adlandıran bir post):

| Olay | Ne zaman | Değişkenleri |
|---|---|---|
| `index` | Takım yönü önceki işlemden farklı olan bir işlemden önce ve döner eksenli bir makinede ilk işlemden önce | `rot.a`, `rot.b`, `rot.c` (gidilecek konumlar; makinenin sahip olmadığı bir eksen için boş), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Kesim sırasında döner eksenleri hareket eden bir işlemin hareketleri | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (beslemenin ters zaman olması gerektiğinde evet), `invf` (1/dakika) |
| `rotary-end` | Böyle bir işlemden sonra | |
| `probe-move` | Prob tetiklendiğinde duran bir hareket | `x`, `y`, `z`, `f`, `probe.n` (1 ile 4), `probe.axis` (x, y ya da z), `probe.k` (1, 2 ya da 3) |
| `probe-set` | Tek bir prob çevriminin dokunuşlarından sonra | `probe.kind` (`"z"`, `"x"`, `"y"` ya da `centre`), `probe.action` (`set` ya da `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Bir tornada diş açma hareketi | `x`, `z`, `thread.lead` |

Her olay için ayrıca: `kin` (none, a, b, ac, bc), `rotary` ve `tcp` (yes ya da no, Bağlama'daki makineden), `pivot.x`, `pivot.y`, `pivot.z`, işlemin `op.tilt` ve `op.turn` değerleri ve bir tornada `spin.mode` (css ya da rpm), `spin.css`, `spin.max` ve `tool.nose`. Değeri boş olan harf sözcüğü, örneğin A ekseni olmayan bir makinede `A{rot.a}`, satırdan çıkarılır. x, y ve z'yi metin olarak, tırnak içinde karşılaştırın (`if probe.kind == "z"`): tırnaksız olarak onlar hareketin koordinatlarıdır.

Postun başındaki iki satır onu bir torna postu yapar: `machine lathe` (o zaman yalnızca X ve Z yazar ve frezeleme yollarını bir frezeleme postunun reddettiği gibi reddeder) ve `lathe-x diameter` ya da `lathe-x radius`.

Her olay, kendi hareket türünün değişkenlerini `{ad}` biçiminde kullanabilir: programın (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), ham malzemenin (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), takımın (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), işlemin (`op.name`, `op.type`), `rpm`, bir hareketin noktası (`x`, `y`, `z`, `f` ve `moved`: bir eksen değiştiğinde doğru), yaylar (`arc.g` 2 ya da 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) ve delikler (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Düzenleyicideki **Olaylar ve değişkenler** listesi hangi olayın neyi gördüğünü gösterir. Okuyabilen ve ayarlayabileceğiniz durum: `cool`, `offset` ve `at.x`, `at.y`, `at.z`, `at.f` (en son yazılan değerler).

## Deyimler

| Deyim | Ne yapar |
|---|---|
| `raw TEXT` | Yazıldığı gibi bir satır (satır numarası yok) |
| `comment TEXT` | `(TEXT)`, ASCII dışı karakterler ve parantezler çıkarılarak |
| `emit WORD WORD …` | Kelimelerden oluşan bir satır; boş çıkan kelimeler atlanır; kelime yoksa satır da yok |
| `word WORD …` | Oluşturulmakta olan satıra kelime ekler; çıplak bir `emit` satırı bitirir |
| `if EXPR` … `else` … `end` | Koşullar: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, yoksa b) |
| `for tool in tools` … `end` | Programın kullandığı her takım için bir kez |
| `set NAME EXPR` | Bir değeri hatırlar (`set offset tool.number`) |
| `reset NAME …` | Modal kelimeleri unutur (bir grup, `Z` gibi bir adres harfi ya da `at.z`) |
| `do rapid X Y Z` | Bir nokta için `rapid` olayını çalıştırır |

Bir kelime, `{değişken|filtre}` delikleri olan yazılmış metindir. Filtreler `upper`, `lower`, `pad:N` (sıfırla doldurma), `cut:N` (ilk N karakter), `safe` (yorum için güvenli ASCII) ve `int`'tir. `~` ile biten bir kelime **modal**dir: yalnızca en son yazılandan farklıysa yazılır (`G1~`, `X{x}~`). `~!` ile biten bir kelime her seferinde yazılır ve yine hatırlanır. Değişken olmayan bir ad düz metindir (`G81`, `mist`). Sayılar 0.001 mm'ye yuvarlanır ve sondaki sıfırlar olmadan yazılır.

## Bir post yapamadıkları

Yalnızca hareketlerin nasıl yazılacağına karar verir, başka bir şey değil. Takım yolunu değiştiremez, işlemleri sıralayamaz, bir yayı bölemez, bir eksen ekleyemez, makinenizin hareket alanını ya da kinematiğini bilemez ve koordinatlar üzerinde aritmetik yapamaz (`+` yoktur). Döner konumların kendileri Bağlama'da tarif edilen makineden gelir, posttan değil: bir post işaretlerini ya da harflerini değiştirebilir, kinematiği değiştiremez. Takım ömrü ve alt program çevrimleri yapılmadı. Başka bir programdan gelen `.cps` tarzı bir post dosyası yüklenemez: bu farklı ve daha basit bir biçimdir.
