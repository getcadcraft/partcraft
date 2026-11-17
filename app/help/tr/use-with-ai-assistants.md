---
title: PartCraft'ı bir yapay zekâ asistanıyla kullanma
summary: Kendi yapay zekâ asistanınızın ya da betiğinizin açık parçayla çalışmasına izin verin: özelliklerini, parametrelerini ve kütlesini okuyun, bir parametreyi değiştirip yeniden oluşturun, bir betik çalıştırın, dışa aktarın ve kaydedin. Siz açana kadar kapalıdır.
keywords: yapay zekâ, asistan, ajan, mcp, model context protocol, betik, otomasyon, parametreler, kütle özellikleri, stl, step, 3mf, izinler, bağlantıyı kes, etkinlik, klasörler
from: e66d3470
---

## Öğrenecekleriniz

Bir yapay zekâ asistanının (ya da kendi yazdığınız bir betiğin) açık olan parçaya bakmasını, parametrelerini değiştirmesini, bir betik çalıştırmasını ve parçayı dışa aktarmasını nasıl sağlayacağınızı ve neye dokunabileceğine nasıl karar vereceğinizi.

PartCraft'ın **kendi yapay zekâsı yoktur** ve hiçbir yere bir şey göndermez. Asistanı siz getirirsiniz: Model Context Protocol (MCP) konuşan herhangi bir program. PartCraft ona yalnızca araçlar verir ve hangilerinin verileceğini siz seçersiniz.

## Açma

1. {{ui:Ayarlar}}'ı açın (uygulama çubuğundaki dişli ya da {{key:Mod+,}}) ve {{ui:PartCraft}} sekmesine gidin.
2. **{{ui:Asistanlar}}** altında, **Yapay zekâ asistanlarının ve betiklerin PartCraft'ı kullanmasına izin ver** kutusunu işaretleyin. Siz açana kadar kapalıdır.
3. Neler yapabileceğini seçin. **Oku** başlangıçta işaretli gelir; diğerlerini yalnızca ihtiyacınız olduğunda işaretleyin.
4. Bir klasöre aktarmasına ve kaydetmesine izin vermek için, **Kullanabileceği klasörler** altında {{ui:Bir klasör ekle…}} seçeneğini seçin ve Studio'nun iletişim kutusunda klasörü seçin.

Asistanlar bilgisayarınızdaki **CadCraft Studio** üzerinden bağlanır: Studio, asistana yapıştırmanız gereken adresi ve belirteci (token) gösterir. Bir tarayıcı sekmesi asistan için bağlantı açamaz.

## Bir asistanın isteyebilecekleri

| Araç | İzin | Ne yapar |
|---|---|---|
| `part_describe`, `features_list` | Oku | Özellikler sırayla, neyin oluşturulduğu ve neyin başarısız olduğu ile birlikte; malzeme, katının hacmi ve boyutu |
| `params_list` | Oku | Parametreler ve bir denklemin sürebileceği her sayı, değerleriyle birlikte |
| `mass_properties` | Oku | Hacim, alan, kütle merkezi, bunun etrafındaki atalet; parçanın bir malzemesi varsa kütle |
| `param_set` | Düzenle | Bir parametreyi ya da bir özelliğin sayısını ayarlar ve yeniden oluşturur. Geri alınabilen tek adım |
| `script_run` | Düzenle | {{ui:Betik}} çalışma alanının yaptığı gibi bir CraftScript, Lua ya da Python betiği çalıştırır: kapalı, dosya yok ve ağ yok. Parça değişmez |
| `part_export` | Dışa aktar | STL, 3MF, STEP ya da OpenUSD (.usdz, .usda, .usdc) olarak; {{ui:Dosya}} › {{ui:Dışa aktar}} komutunun yazdığı gibi |
| `link_push` | Düzenle | Başka bir programdan bağlanmış bir modeli günceller (bkz. [.3dm modelini canlı tutma](topic:live-3dm-link)) |
| `link_status` | Oku | Bağlı bir modelin hâlâ orada olup olmadığını ve en son ne zaman güncellendiğini söyler |
| `part_save` | Kaydet | PartCraft'ın kendi {{ui:Kaydet}} işlemi |
| `illustrate_export` | Dışa aktar | {{ui:Illustrate}} çalışma alanındaki bir kılavuzun görünümlerini PDF ya da SVG çizgi resmi olarak, etkileşimli 3B dosya olarak ya da talimatlarını PDF veya web sayfası olarak; çalışma alanının {{ui:Dışa aktar}} ve {{ui:Talimatlar}} menülerinin yazdığı gibi ([Kılavuzlar](topic:illustrate)) |

:::note
Bu sürüm örgü (mesh) çekirdeğini kullanır: hacimler üçgenlerden gelir (gerçek eğrisel bir katıdan biraz az) ve STEP, yüzeyler yerine üçgenlerle, köşeli (faceted) olarak yazılır.
:::

## Kontrol sizde kalır

- **Her değişiklik tek bir geri alma adımıdır**, asistan için etiketlenir; örneğin "Assistant: set l = 45". Geri almak için {{key:Mod+Z}} tuşlarına basın.
- **Bağlı olduğunu bilirsiniz.** Bağlıyken uygulama çubuğundaki bir düğme asistanın adını gösterir. Neler yapabileceğini görmek ya da bağlantıyı kesmek (**Bağlantıyı kes**) için tıklayın.
- **Etkinlik.** {{ui:Ayarlar}} › {{ui:PartCraft}} › {{ui:Asistanlar}} › {{ui:Etkinlik}} her çağrıyı listeler; {{ui:Günlüğü kaydet}} bir kopyasını tutar.
- **Klasörler.** Dosyaları yalnızca eklediğiniz klasörlerde okur ve yazar; {{ui:Kaldır}} bir klasörü hemen geri alır.

## PartCraft'ı açmadan

Asistanlar için CadCraft dosya sunucusu (`npx @getcadcraft/mcp`) ve `cadcraft` komut satırı, `.partcraft.json` parçalarını PartCraft'ın kendi kodu ve örgü (mesh) çekirdeğiyle, pencere açmadan açar: aynı okuma araçları, parametre ayarlama, CraftScript betikleri, dışa aktarmalar (OpenUSD dahil) ve kaydetme. `cadcraft convert bracket.partcraft.json bracket.stl` bir parçayı oluşturur ve komut satırından yazar. Kılavuzlar (`.partcraft-manual.json`) da orada dışa aktarılır: `illustrate_export` ya da `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (talimatlar için `--instructions` ekleyin).

## Bir şey çalışmazsa

- **"needs the edit permission":** {{ui:Asistanlar}} altında **Düzenle** seçeneğini işaretleyin, sonra yeniden isteyin.
- **"driven by the equation":** bu sayı bir parametreyi izler; bunun yerine asistandan parametreyi ayarlamasını isteyin.
- **Yaptığı değişiklik yanlışsa:** {{key:Mod+Z}} tuşlarına basın.

## Ayrıca bakın

- [Yapay zekâ asistanları için tarifler](common:assistants-recipes): her biri çağırdığı araçlarla birlikte çalışılmış örnekler.
