---
title: Val və deşiklərdə dişlər, çertyojda və ya modelləşdirilmiş
summary: İSO metrik və ya trapesiya dişini istənilən dairəvi üzə, val və ya deşiyə qoyun. Çertyoj üçün onu kosmetik saxlayın və ya 3D printer üçün real spiral dişi modelləşdirin, çap olunmuş detallar uyğun gəlsin deyə boşluqla.
keywords: diş, dişlər, modelləşdirilmiş diş, spiral, spiral xətt, vint, boltu, qayka, val, deşik, xarici diş, daxili diş, kosmetik diş, metrik diş, trapesiya, acme, qurğuşun vinti, Tr16x4, M10, 3D çap, çap, boşluq, uyğunluq, sol əl, dişlənmiş
from: 4f6401cc
---

{{ui:Diş}} dişləri dairəvi üzlərə qoyur: valın xarici tərəfinə (xarici diş) və ya deşiyin daxili tərəfinə (daxili diş). PartCraft üzdən hansının olduğunu müəyyən edir.

Diş əvvəlcə **kosmetik**dir: üz sadə qalır, görünüş dişi kəsikli dairələrlə çəkir və çertyoj vərəqində "M10×1.5 - 6g, diş 20 uzunluqda" kimi qeyd olunur. Həqiqi spiral dişi detala kəsmək üçün, 3D çap və ya düzgün görünməli model üçün **Modelləşdirilmiş** qutusunu işarələyin.

## Valı və ya deşiyi dişləyin

1. Valı və ya deşiyi dişin ölçüsündə qurun: M10 bolt üçün Ø10 val, M10 qayka üçün Ø8.5 deşik (cır deşik).
2. Dairəvi üzə klik edin, sonra {{ui:Daha çox}} › {{ui:Diş}} seçin. Heç bir dairəvi üz seçilməyibsə, PartCraft üzlərə klik etməyinizi, sonra {{ui:Hazırdır}} düyməsini istəyir.
3. Sağ paneldə **Ölçü**nü yoxlayın. **Üzə uyğunlaşdır** ölçünü özü seçir: val üçün xarici diametri valın diametrinə bərabər olan ölçü; deşik üçün daxili diametri ona uyğun gələn ölçü.

Diş üzün açıq ucundan başlayır, yəni hissənin oxu boyunca davam etmədiyi yerdən: valın sərbəst ucu, deşiyin ağzı. **Digər ucdan başla** bunu əksinə çevirir.

## Parametrlər

| Parametr | Seçimlər | Defolt |
|---|---|---|
| **Forma** | ISO metrik (60°), M1.6-dan M64-ə qədər kobud; trapesiya (Tr, 30°), Tr8×1.5-dən Tr60×9-a qədər | ISO metrik |
| **Ölçü** | Üzə uyğunlaşdır, və ya siyahıdan bir ölçü | Üzə uyğunlaşdır |
| **Bütün üz** | **Uzunluq (mm)** vermək üçün təmizləyin, başlanğıcdan ölçülür | İşarəli |
| **Digər ucdan başla** | Diş üzün digər ucundan başlayır | Söndürülmüş |
| **Əl** | Sağ əl və ya sol əl | Sağ əl |
| **Modelləşdirilmiş** | Həqiqi spiral dişi kəsin | Söndürülmüş |
| **Boşluq (mm)** | Modelləşdirilmiş işarələndikdə göstərilir: valın dişi nə qədər kiçik, deşiyin dişi nə qədər böyükdür, hər tərəfdən | 0.1 |

Üzə uyğun gəlməyən ölçü yenə də qurulur, üzə görə kəsilir və panel bunu bildirir, məsələn "Ø12 mm val M10-un Ø10 mm-i deyil". Bir neçə üz eyni Diş xüsusiyyətini paylaşa bilər; **Üzə uyğunlaşdır** ilə hər birinin öz ölçüsü olur.

## 3D çap üçün modelləşdirilmiş dişlər

Modelləşdirilmiş diş standart əsas profilə uyğun gəlir: metrik dişlər üçün ISO 68-1 (düz təpələr və köklər, 60° yanaqlar), trapesiya dişlər üçün ISO 2901 (30° yanaqlar). **Boşluq** bütün profili içəri (val) və ya çölə (deşik) köçürür ki, çap olunmuş detallar bir-birinə burula bilsin:

- **0.1-dən 0.2 mm-ə qədər** əksər printerlərə uyğundur. Əvvəlcə test bolt və qayka çap edin.
- **0** standart profildir, yonulmuş detallar və ya uyğunluğu yoxlamaq üçündür.

Eyni boşluqla bolt və qayka yanaqları boyunca heç vaxt toxunmur: aralarındakı boşluq hər tərəfdən boşluğun iki qatıdır.

:::tip
İncə addımlar pis çap olunur: M3 və daha kiçik, ya da 0.5 mm-dən az addım 0.4 mm nozzle-ın çəkə biləcəyi həddə yaxındır. Daha böyük dişləri modelləşdirin, kiçiklər üçün isə istilik ilə yerləşdirilən insert və ya dişlənmiş deşikdən istifadə edin.
:::

Modelləşdirilmiş diş bərk cismin bir hissəsidir: STL, 3MF və STEP ixracları onu daşıyır və Ölçmə onu ölçür. Onu yenidən qurmaq detalı ağırlaşdırır: 20 uzunluqda M10 diş təxminən 150 000 üçbucaqdır.

## Dişlənmiş deşiklər

**Dişlənmiş (ISO metrik)** deşiyində də **Modelləşdirilmiş** açarı var, eyni **Boşluq** ilə. Bax [Eskiz nöqtələrində deşiklər və qarşılıqlı deşiklər açın](topic:holes).

## Diş qurulmadıqda

- "Diş dairəvi üzə (silindrə) düşür: val və ya deşik." Seçilmiş üz düz və ya başqa cür əyridir.
- "Ø0.6 mm dairəvi üz üçün standart ölçü yoxdur: ölçü seçin." Üzə uyğunlaşdır üzün 12 % daxilində heç nə tapmadı. **Ölçü** seçin və ya üzü dəyişin.
- "Bu dişin üzü itib (…). Yenidən seçin." Əvvəlki dəyişiklik üzü silib. {{ui:Üzləri seçin}} düyməsinə basın və üzə yenidən klik edin.

:::note
Düym dişləri (UNC, UNF), boru dişləri, konik dişlər, diş çıxışları və zənglənmiş diş başlanğıcları hələ qurulmayıb. Dəqiq nüvə modelləşdirilmiş dişi kosmetik kimi göstərir.
:::
