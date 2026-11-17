---
title: Standart bir parça açın
summary: Standardından boyutlandırılmış bir cıvata, vida, somun, pul, pim, rulman veya kama ile başlayın; standardın tablosundaki her boyut bir yapılandırma olarak sunulur.
keywords: standart parça, standart parçalar, cıvata, vida, altıgen, somun, pul, pim, kılavuz pim, rulman, bilyalı rulman, kama, paralel kama, bağlantı elemanı, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, şablon, kütüphane
from: b9e2811f
---

PartCraft, yaygın makine parçalarını hazır olarak açar: boyutlar standartların tablolarından gelir ve tablodaki her boyut, geçiş yapabileceğiniz bir yapılandırmadır.

## Birini açın

1. Dosya grubunda {{ui:Standart parça}} öğesine tıklayın.
2. {{ui:Parça}} alanında türü seçin, örneğin {{ui:Altıgen başlı vida (ISO 4017)}}.
3. {{ui:Boyut}} alanında boyutu seçin, örneğin `M10 × 40`.
4. {{ui:Aç}} öğesine tıklayın.

Parça, kaydedilmemiş yeni bir parça olarak açılır. Tutmak için kaydedin ({{key:Mod+S}}).

| Parça | Standart | Parametreler |
|---|---|---|
| Altıgen başlı vida, altıgen cıvata | ISO 4017, ISO 4014, ASME B18.2.1 (inç) | `d` dişli çap, `s` karşılıklı yüzey, `k` baş yüksekliği, `l` uzunluk |
| Altıgen somun | ISO 4032, ASME B18.2.2 (inç) | `d`, `s`, `height` |
| Düz pul | ISO 7089 | `d1` iç, `d2` dış, `h` kalınlık |
| Paralel pim | ISO 2338 | `d`, `l` |
| Derin oluklu bilyalı rulman | ISO 15 | `d` delik, `D` dış, `B` genişlik |
| Paralel kama | DIN 6885-1, A biçimi | `b` genişlik, `h` yükseklik, `l` uzunluk |

## Boyutu değiştirin

Her boyut bir yapılandırmadır (bkz. [Yapılandırmalar ve tasarım tabloları](topic:design-tables)): {{ui:Parametreler}} öğesini açın ve başka birini seçin ya da daha uzun bir vida için `l` gibi bir parametreyi değiştirin ve kendi yapılandırmanız olarak kaydedin.

## Neler modellenir

- Vidalar ve cıvatalar: altıgen baş ve düz gövde. Somunlar: dişin nominal boyutunda bir delikli altıgen. Dişler modellenmez; gerekirse {{ui:Diş}} ile ekleyin (bkz. [Dişler](topic:threads)).
- Pimler: düz bir silindir; uç pahları dışarıda bırakılır.
- Rulmanlar: yalnızca dış zarf (delik halkası, dış çap ve genişlik); bu, yerleştirmek için gereken bilgidir.
- Kamalar: yuvarlak uçlu kama.

Parçanın malzemesi çeliktir, bu yüzden kütle panelinde ağırlığı görünür. Dişliler henüz burada değil: PartCraft'ta diş özelliği yok ve bir disk dişli değildir. CadCraft dişlileri çizim kuralıyla çizer ve kütüphanede çizim olarak bulunurlar.
