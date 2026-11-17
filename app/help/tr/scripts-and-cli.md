---
title: Betikler ve komut satırı
summary: Bir parçanın tamamını okunabilir metin olarak yazan PartCraft betik biçimi (.pcscript) ve parçaları ekran olmadan oluşturan, değiştiren, geri alan ve denetleyen partcraft komut satırı aracı.
keywords: betik, pcscript, metin, komut satırı, cli, terminal, toplu işlem, otomatikleştir, denetim, lint, derle, dışa aktar, sürüm kontrolü, fark, parametrik betik
from: c56df222
---

Dikkatli modelleme, düğmelerden çok disiplinle ilgilidir. Metin olarak yazılmış bir parça okunabilir, gözden geçirilebilir, satır satır karşılaştırılabilir ve bir betikle yeniden oluşturulabilir. PartCraft her iki yöne de gider: her parça bir betik olarak yazılabilir ve bir betik parçayı oluşturur.

## Uygulamada

{{ui:Parametreler}} sekmesinde, **Betik** altında:

- {{ui:Betik olarak kaydet}} açık parçayı `<ad>.pcscript` olarak indirir.
- {{ui:Betiği aç}} bir `.pcscript` dosyasından parça oluşturur. Bir hata satır numarasıyla bildirilir ve hiçbir şey değiştirilmez.

## Betik biçimi

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Kurallar:

- Sol kenarda başlayan bir satır bir deyimi başlatır: `pcscript`, `part`, `param`, bir özellik türü (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` ve daha yeni türler), ardından adı, ya da `rollback <feature>`.
- Girintili satırlar, üstteki deyimin ayarlarıdır. Tek başına bir ayar (`through`, `reverse`, `suppressed`) evet anlamına gelir.
- Sayısal bir ayar bir sayıdır ya da `=` ve bir ifadedir; bu da bir denklem oluşturur: `depth = thick`.
- Bir eskizde: `on` düzlemi adlandırır (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometri `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (saat yönünün tersine) ya da `spline <name> fit|control <points>` biçimindedir; ilişkiler, türleri ve birleştirdikleri adlardır (`O` orijindir); bir ölçü, değeri ya da `= ifade` ile biter.
- Bir geometri ya da ilişki satırının isteğe bağlı ayarları, `;` ile ayrılmış olarak sonda köşeli parantez içine yazılır: `[construction]`, `[side -1; label 5, 3]`.
- `#` bir yorum başlatır (satır başında ya da bir boşluktan sonra). Boşluk içeren adlar "çift tırnak" içine yazılır.
- Özellik kimlikleri yazıldıkları sıradan f1'den sayılır. Kenar ve yüzey başvuruları bunları kullanır, örneğin `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Biçimin sözcüğü olmayan ayarlar `json` ve bir değer olarak yazılır; olduğu gibi geri okunur.

Uygulamadan kaydedildiğinde betik her ayarı içerir, bu yüzden aynı parça olarak açılır. İçe aktarılmış bir STEP katısı uygulamadan betiğin içine yazılır; komut satırından ise `step-file` ile adlandırılmış ayrı bir `.step` dosyası olarak yazılır.

## Komut satırı aracı

Araç, Node.js 24 yüklü bir bilgisayarda, CadCraft kaynağının bir kopyasından çalışır: `node tools/partcraft-cli/partcraft.mjs <command>`. Bu bir geliştirici aracıdır ve uygulamayla aynı modülleri kullanır. Parçalar `.partcraft.json` dosyaları ya da `.pcscript` betikleridir.

| Komut | Ne yapar |
|---|---|
| `info <part>` | Özellikler, parametreler, geri alma çubuğu, oluşturulmuş katının hacmi ve boyutu |
| `params <part>` | Her parametre ve denklem, değeriyle birlikte |
| `set <part> width=150 Base.depth==thick` | İleri yönde: parametreleri değiştirir, sayıları bağlar (`==` ya da bir ifade) ve düz sayıları ayarlar |
| `drive <part> Base.depth=12` | Geri yönde: sürülen bir sayının arkasındaki parametreyi çözer (`--prefer width` birini seçer) |
| `build <part> --out x.step` | `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ya da bir makro (`.swb`) yazar |
| `build <part> --table sizes.csv --out-dir sizes` | Tasarım tablosunun her satırı için bir dosya |
| `variants <part> --out-dir d` ya da `--zip f.zip` | Her yapılandırmayı STEP, IFC, DWG ve bir önizleme, bir varyant tablosu ve bir kütüphane öğesi olarak (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); bkz. [Bir varyant paketi yapın](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Betikten parçaya |
| `to-script <part> -o part.pcscript` | Parçadan betiğe |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Geri alma çubuğunu dosyada taşır |
| `check <part> [--strict]` | Disiplin denetimi (aşağıda) |

`build` ayrıca `--set name=value` (yalnızca bu derleme için) ve `--upto <feature>` alır. Her komut `--json` alır. Çıkış kodları: 0 sorun yok, 1 bir sorun bulundu, 2 komut yanlış yazıldı. Bir betik asla yerinde yeniden yazılmaz: değiştirilmiş bir kopyayı kaydetmek için `-o` verin.

## Denetim

`check`, bir parçayı daha sonra değiştirmeyi zorlaştıranları bildirir:

| Bulgu | Sayılır |
|---|---|
| Aşırı tanımlı bir eskiz (çelişen ya da tekrarlanan ilişkiler) | hata |
| Oluşturulamayan bir özellik | hata |
| Hatalı bir parametre ya da denklem, ya da birbirini kullanan parametreler | hata |
| Serbestlik dereceleriyle birlikte eksik tanımlı bir eskiz | uyarı |
| Hiçbir parametrenin sürmediği, özelliklere ve ölçülere doğrudan yazılmış sayılar | uyarı |
| Hiçbir şeyin kullanmadığı bir parametre | uyarı |
| Bastırılmış bir özellik; geri alma çubuğunun sonda olmaması | uyarı |

`--strict` her uyarıyı hataya çevirir; böylece bir derleme betiği tamamen sürülmemiş bir parçayı reddedebilir.

:::note
`.swb` makro çıktısı, çoğu atölyenin kullandığı parça modelleyici içindir: o program içinde çalıştırıldığında parçayı orada oluşturur. Burada o programda çalıştırılmadı (sunucularımızda kullanılamıyor), bu yüzden denenmemiş kabul edin.
:::
