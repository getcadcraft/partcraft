---
title: PartCraft-ı AI köməkçisi ilə istifadə edin
summary: Öz AI köməkçinizin və ya skriptinizin açıq hissə ilə işləməsinə icazə verin: elementlərini, parametrlərini və kütləsini oxusun, parametri dəyişib yenidən qursun, skript işlətsin, ixrac etsin və saxlasın. Siz açana qədər söndürülüdür.
keywords: ai, köməkçi, agent, mcp, model context protocol, skript, avtomatlaşdırma, parametrlər, kütlə xassələri, stl, step, 3mf, icazələr, bağlantını kəs, fəaliyyət, qovluqlar
from: e66d3470
---

## Nəyi öyrənəcəksiniz

AI köməkçisinə (və ya yazdığınız skriptə) açıq hissəyə baxmaq, onun parametrlərini dəyişmək, skript işlətmək və ixrac etmək üçün necə icazə verəcəyinizi və nəyə toxuna biləcəyinə necə qərar verəcəyinizi öyrənin.

PartCraft **öz AI-yə malik deyil** və heç nə heç yerə göndərmir. Köməkçini siz gətirirsiniz: Model Context Protocol (MCP) dilini danışan istənilən proqram. PartCraft ona yalnız alətlər verir, hansını seçdiyinizi isə siz müəyyən edirsiniz.

## Açın

1. {{ui:Parametrlər}} (tətbiq panelindəki dişli və ya {{key:Mod+,}}) açın və {{ui:PartCraft}} sekməsinə keçin.
2. **{{ui:Köməkçilər}}** altında **AI köməkçilərinin və skriptlərin PartCraft-dan istifadə etməsinə icazə verin** qutusunu işarələyin. Siz bunu etməyincə söndürülüdür.
3. Nə edə biləcəyini seçin. **Oxu** başlanğıcda işarələnib; digərlərini yalnız lazım olduqda işarələyin.
4. Köməkçinin qovluğa ixrac edib yaza bilməsi üçün **İstifadə edə biləcəyi qovluqlar** altında {{ui:Qovluq əlavə et…}} seçin və Studio dialoqunda qovluğu seçin.

Köməkçilər kompüterinizdəki **CadCraft Studio** vasitəsilə qoşulur: Studio ünvanı və köməkçiyə yapışdırmalı olduğunuz tokeni göstərir. Brauzer sekməsi köməkçi üçün bağlantı aça bilməz.

## Köməkçi nə tələb edə bilər

| Alət | İcazə | Nə edir |
|---|---|---|
| `part_describe`, `features_list` | Oxu | Elementlər sıra ilə, nə qurulduğu və nəyin uğursuz olduğu ilə, materialı, bərk cismin həcmi və ölçüsü |
| `params_list` | Oxu | Parametrlər və tənlik idarə edə bilən hər ədəd, dəyərləri ilə |
| `mass_properties` | Oxu | Həcm, sahə, kütlə mərkəzi, onun ətrafında ətalət; hissənin materialı olanda kütlə |
| `param_set` | Redaktə | Parametri və ya elementin ədədini təyin edir və yenidən qurur. Geri qaytarıla bilən bir addım |
| `script_run` | Redaktə | CraftScript, Lua və ya Python skriptini {{ui:Skript}} iş sahəsinin işlətdiyi kimi işlədir: təcrid olunmuş, fayl və şəbəkəsiz. Hissə dəyişmir |
| `part_export` | İxrac | STL, 3MF, STEP və ya OpenUSD (.usdz, .usda, .usdc), {{ui:Fayl}} › {{ui:İxrac}} yazdığı kimi |
| `link_push` | Redaktə | Başqa proqramdan bağlanmış modeli yeniləyir (bax: [.3dm modelini canlı saxlamaq](topic:live-3dm-link)) |
| `link_status` | Oxu | Bağlı modelin hələ də olub-olmadığını və ən son nə vaxt yeniləndiyini bildirir |
| `part_save` | Saxla | PartCraft-ın öz {{ui:Saxla}} əməliyyatı |
| `illustrate_export` | İxrac | {{ui:İllüstrasiya}} iş sahəsindən təlimat: görünüşləri PDF və ya SVG xətt şəkli kimi, interaktiv 3D fayl kimi, ya da təlimatları PDF və ya veb səhifə kimi — iş sahəsinin {{ui:İxrac}} və {{ui:Təlimatlar}} menyularının yazdığı kimi ([Təlimatlar](topic:illustrate)) |

:::note
Bu versiya mesh nüvəsindən istifadə edir: həcmlər üçbucaqlardan alınır (əyri bərk cisimdən bir qədər az) və STEP dəqiq səthlər əvəzinə üçbucaqlarla, fasetli yazılır.
:::

## Nəzarət sizdədir

- **Hər dəyişiklik bir geri qaytarma addımıdır**, köməkçi üçün etiketlənib, məsələn "Köməkçi: l = 45 təyin etdi". Geri almaq üçün {{key:Mod+Z}} basın.
- **Qoşulu olduğunu bilirsiniz.** Tətbiq panelindəki düymə qoşulu olduğu müddətdə köməkçinin adını göstərir. Onun nə edə biləcəyinə baxmaq və ya **Bağlantını kəs** üçün klikləyin.
- **Fəaliyyət.** {{ui:Parametrlər}} › {{ui:PartCraft}} › {{ui:Köməkçilər}} › {{ui:Fəaliyyət}} hər çağırışı siyahılayır; {{ui:Jurnalı saxla}} onun surətini saxlayır.
- **Qovluqlar.** Köməkçi faylları yalnız əlavə etdiyiniz qovluqlarda oxuyur və yazır; {{ui:Çıxar}} qovluğu dərhal geri alır.

## PartCraft-ı açmadan

AI köməkçiləri üçün CadCraft fayl serveri (`npx @getcadcraft/mcp`) və `cadcraft` komanda sətri `.partcraft.json` hissələrini PartCraft-ın öz kodu və mesh nüvəsi ilə, pəncərə açmadan açır: eyni oxuma alətləri, parametrlərin təyini, CraftScript skriptləri, ixraclar (OpenUSD daxil) və saxlama. `cadcraft convert bracket.partcraft.json bracket.stl` hissəni qurur və komanda sətrindən yazır. Təlimatlar (`.partcraft-manual.json`) da burada ixrac olunur: `illustrate_export`, ya da `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (təlimatlar üçün `--instructions` əlavə edin).

## Nəsə işləmirsə

- **"needs the edit permission":** {{ui:Köməkçilər}} altında **Redaktə** işarələyin, sonra yenidən soruşun.
- **"driven by the equation":** bu ədəd bir parametri izləyir; köməkçidən bunun əvəzinə parametri təyin etməsini xahiş edin.
- **Onun dəyişikliyi səhv idi:** {{key:Mod+Z}} basın.

## Həmçinin bax

- [AI köməkçiləri üçün reseptlər](common:assistants-recipes): alətlərini çağıran işlənmiş nümunələr.
