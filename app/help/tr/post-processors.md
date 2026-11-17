---
title: Düzenleyebileceğiniz postlar
summary: Bir post, takım yolunu kontrolünüz için G-koda dönüştüren kısa bir metin dosyasıdır. Yerleşik postlardan birini kopyalayın, gerekli satırları değiştirin (satır numaraları, takım değişimi, başlangıç hareketleri, bitiş kodu), yazarken yazdığı G-kodunu görün ve parçayla birlikte saklayın.
keywords: post, post işlemcisi, postprocessor, G-kod, NC, GRBL, LinuxCNC, postu düzenle, özel post, cpost, takım değişimi, M6, G43, sabit döngü, satır numaraları, modal, olay, değişken
from: 36ab8a38
---

Aynı takım yolu farklı kontroller için farklı yazılmalıdır: satır numaralı ya da numarasız, `M6` ya da bir duraklatma, `G28` ya da `G53`, `M30` ya da `M2`. Bir **post**, bunun nasıl yapılacağını söyleyen kısa metindir. PartCraft'ın üç yerleşik postu (Fanuc tarzı, GRBL ve LinuxCNC) bu biçimde yazılmıştır; kendi postunuz da bunlardan birinin kopyası olarak başlayabilir.

Kesmeden önce çıktıyı kendi makinenizin simülatöründe kontrol edin ve önce malzemenin üstünde havada çalıştırın. Yerleşik postlar, bu biçim var olmadan önce yazdıkları çıktıyı aynen yazar (testler çıktılarını yüzlerce programda bayt bayt karşılaştırır). Ancak burada hiçbir şey makinenizde kanıtlanmış değildir; değiştirdiğiniz bir post ise onu kanıtlamak size aittir.

## Bir tane oluşturun

İmalat içinde, **Post** altında:

- Yerleşik bir kontrolde {{ui:Postu düzenle…}} ona ait **kendi kopyanızı** açar. Kendi postlarınızdan birinde ise o postu açar.
- {{ui:Yeni post…}} her olayın yer aldığı küçük, boş bir post başlatır.
- {{ui:Post dosyasını içe aktar…}} bir `.cpost` metin dosyasını okur (düzenleyicideki **Dosya olarak farklı kaydet…** ile aldığınız dosya).

Düzenleyici metni gösterir; postun okunup okunmadığını (ve hangi satırın hatalı olduğunu) belirten bir satır gösterir; yazarken postun yazdığı G-kodunu da gösterir. **Şununla önizle** her olayı çalıştıran küçük bir örnek programı ya da bu parçanın kendi programını seçer. {{ui:Kaydet}} postu parçanın dosyasında tutar (en fazla 20 post) ve onu kontrol olarak seçer. Postlar parçayla birlikte gider; başka bir parçada kullanmak için dosya olarak kaydedin ve orada içe aktarın.

## Bir postun görünümü

```
post mymill
name Freze tezgahım (.nc)
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

Boş satırlar ve `//` ile başlayan satırlar yok sayılır. En üstte ayarlar gelir; ardından her olay için bir `on <olay>` bloğu gelir ve `end` ile kapatılır. Yazmadığınız bir olay hiçbir şey yazmaz.

| Ayar | Anlamı |
|---|---|
| `post <id>` | Postun kimliği: harfler, rakamlar, `-` ve `_` |
| `name <text>` | Kontrol listesinde görünen ad |
| `extension <ext>` | Dosya uzantısı: nc, ngc, tap … |
| `line-numbers 10` / `off` | Her `emit` satırında `N10`, `N20` … ya da hiçbiri |
| `decimal-point yes` / `no` | `10` yerine `10.` (açıklamalarda nokta bulunmaz) |
| `canned-cycles yes` / `no` | `no`: delikler, temsil ettikleri G0/G1 hareketleri olarak yazılır |
| `modal <group> <words>` | Bir grubun kelimeleri (`modal motion G0 G1 G2 G3`) yalnızca değiştiklerinde yazılır |

## Olaylar

Bir program için şu sırayla çalışırlar: `start`; ardından her işlem için `operation`, `tool-change` (takım değiştiğinde), `spindle` (mil hızı değiştiğinde), `approach` (ilk noktaya kadar olan hareket, ilk hızlı hareketten önce), `coolant-on`, sonra hareketleri `rapid`, `feed` ve `arc` olarak, her sabit döngü ise `cycle-start` olarak, her delik için bir `cycle-hole` ve `cycle-end` olarak çalışır; en son `end`.

Her olay, kendi hareket türünün değişkenlerini kullanabilir; bunlar `{name}` biçiminde yazılır: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), stok (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), takım (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), işlem (`op.name`, `op.type`), `rpm`, bir hareketin noktası (`x`, `y`, `z`, `f` ve bir eksen değiştiğinde doğru olan `moved`), yaylar (`arc.g` 2 ya da 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) ve delikler (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Düzenleyicideki **Olaylar ve değişkenler** listesi hangi olayın neyi gördüğünü gösterir. Okuyabileceğiniz ve ayarlayabileceğiniz durum: `cool`, `offset` ile `at.x`, `at.y`, `at.z`, `at.f` (en son yazılan değerler).

## İfadeler

| İfade | Ne yapar |
|---|---|
| `raw TEXT` | Yazıldığı gibi bir satır (satır numarası yok) |
| `comment TEXT` | `(TEXT)`, ASCII dışı karakterler ve parantezler çıkarılmış olarak |
| `emit WORD WORD …` | Kelimelerden oluşan bir satır; boş çıkan kelimeler atlanır; kelime yoksa satır da yoktur |
| `word WORD …` | Oluşturulmakta olan satıra kelime ekler; çıplak bir `emit` satırı bitirir |
| `if EXPR` … `else` … `end` | Koşullar: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, yoksa b) |
| `for tool in tools` … `end` | Programın kullandığı her takım için bir kez |
| `set NAME EXPR` | Bir değer hatırlar (`set offset tool.number`) |
| `reset NAME …` | Modal kelimeleri unutur (bir grup, `Z` gibi bir adres harfi ya da `at.z`) |
| `do rapid X Y Z` | Bir nokta için `rapid` olayını çalıştırır |

Bir kelime, `{variable|filter}` boşluklarıyla yazılmış metindir. Süzgeçler: `upper`, `lower`, `pad:N` (sıfırla doldurma), `cut:N` (ilk N karakter), `safe` (açıklama için güvenli ASCII) ve `int`. `~` ile biten bir kelime **modaldir**: yalnızca en son yazılandan farklıysa yazılır (`G1~`, `X{x}~`). `~!` ile biten bir kelime her seferinde yazılır ve yine de hatırlanır. Değişken olmayan bir ad düz metin olarak kalır (`G81`, `mist`). Sayılar 0.001 mm'ye yuvarlanır ve sondaki sıfırlar olmadan yazılır.

## Bir postun yapamadıkları

Bir post yalnızca hareketlerin nasıl yazılacağını belirler, başka bir şey değil. Takım yolunu değiştiremez, işlemleri sıralayamaz, bir yayı bölemez, bir eksen ekleyemez, makinenizin hareket alanını ya da kinematiğini bilemez ve koordinatlar üzerinde aritmetik yapamaz (`+` yoktur). Probe ile ölçüm, takım ömrü ve alt program döngüleri, 4. ve 5. eksen çıktıları ile torna kodları yapılmadı. Başka bir programdan gelen `.cps` tarzı bir post dosyası yüklenemez: bu farklı, daha basit bir biçimdir.
