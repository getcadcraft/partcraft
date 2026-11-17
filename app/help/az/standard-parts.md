---
title: Standart hissə açın
summary: Bolt, vint, qayka, şayba, pin, rulman və ya açarı standartından ölçüsü ilə başlayın; standartın cədvəlindəki hər ölçü bir konfiqurasiya kimi.
keywords: standart hissə, standart hissələr, bolt, vint, altıbucaqlı, qayka, şayba, pin, dübel, rulman, kürəcikli rulman, açar, paralel açar, bağlayıcı, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, şablon, kitabxana
from: b9e2811f
---

PartCraft ümumi mexaniki detalları hazır açır: ölçülər standartların cədvəllərindən gəlir və cədvəldəki hər ölçü keçə biləcəyiniz konfiqurasiyadır.

## Birini açın

1. Fayl qrupunda {{ui:Standart hissə}} klikləyin.
2. {{ui:Detal}} bölməsində növü seçin, məsələn {{ui:Altıbucaqlı başlıqlı vint (ISO 4017)}}.
3. {{ui:Format}} bölməsində ölçünü seçin, məsələn `M10 × 40`.
4. {{ui:Aç}} klikləyin.

Detal yeni, saxlanmamış detal kimi açılır. Onu saxlamaq üçün {{key:Mod+S}} basın.

| Detal | Standart | Parametrlər |
|---|---|---|
| Altıbucaqlı başlıqlı vint, altıbucaqlı bolt | ISO 4017, ISO 4014, ASME B18.2.1 (düym) | `d` diş ölçüsü, `s` yastı üzlər arası, `k` başlıq hündürlüyü, `l` uzunluq |
| Altıbucaqlı qayka | ISO 4032, ASME B18.2.2 (düym) | `d`, `s`, `height` |
| Sadə şayba | ISO 7089 | `d1` daxili, `d2` xarici, `h` qalınlıq |
| Paralel pin | ISO 2338 | `d`, `l` |
| Dərin oyuqlu kürəcikli rulman | ISO 15 | `d` deşik, `D` xarici, `B` en |
| Paralel şponka | DIN 6885-1, A forması | `b` en, `h` hündürlük, `l` uzunluq |

## Ölçünü dəyişin

Hər ölçü konfiqurasiyadır (bax: [Konfiqurasiyalar və dizayn cədvəlləri](topic:design-tables)): {{ui:Parametrlər}} açın və başqasını seçin, ya da parametri dəyişin, məsələn daha uzun vint üçün `l`-i, və onu öz konfiqurasiyanız kimi saxlayın.

## Nə modelləşdirilib

- Vintlər və boltlar: altıbucaqlı başlıq və sadə gövdə. Qaykalar: nominal diş ölçüsündə deşiyi olan altıbucaqlı. Dişlər modelləşdirilmir; lazım olsa {{ui:Diş}} ilə əlavə edin (bax: [Dişlər](topic:threads)).
- Pinlər: sadə silindr; kənar faskaları buraxılır.
- Rulmanlar: yalnız xarici zərf (daxili deşik, xarici diametr və en), yerləşdirmək üçün lazım olan.
- Şponkalar: dairəvi uclu şponka.

Detalın materialı poladdır, buna görə kütlə paneli çəkisini göstərir. Dişli çarxlar bu versiyada hələ yoxdur: PartCraft-da diş elementi yoxdur və disk dişli deyil. CadCraft dişli çarxları çertyoj qaydası ilə çəkir və kitabxanada onlar çertyoj kimi var.
