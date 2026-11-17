---
title: Konfiqurasiyalar və dizayn cədvəlləri
summary: Hissənin bir neçə ölçü və versiyasını adlandırılmış konfiqurasiyalar kimi saxlayın — hər birində xüsusiyyətlər açıq və ya söndürülmüş — hissə faylında saxlanılır; bir kliklə aralarında keçin, CSV dizayn cədvəli kimi içəri və ya xaricə çıxarın, ya da hamısını əmr sətrindən qurun.
keywords: dizayn cədvəli, konfiqurasiyalar, konfiqurasiya, ölçülər, hissə ailəsi, csv, cədvəl, variantlar, cədvəl idarəli, söndür, söndürülmüş, xüsusiyyəti söndür, seçimlər, ilə və ya olmadan, konfiqurator
from: 17249afb
---

**Konfiqurasiya** hissənin bir ölçüsüdür: onun parametrləri üçün adlandırılmış dəyərlər çoxluğu. Hissə konfiqurasiyalarını öz faylında saxlayır, ona görə onlar hissə ilə birlikdə gedir. **Dizayn cədvəli** eyni şeydir, yalnız hər konfiqurasiya üçün bir sətir olan CSV faylı kimi.

Konfiqurasiyalar **parametrləri** təyin edir, ona görə əvvəlcə onları əlavə edin (bax [Hissəni parametrlərlə idarə edin](topic:parameters)). Konfiqurasiya sadə ədəd olan parametrləri saxlayır; başqalarından hesablanan parametrlər (məsələn `area = w * d`) öz-özünə izləyir.

## Konfiqurasiya saxlayın

1. **Parametrlər** sekmesində hissənin bir ölçüsü üçün parametrləri təyin edin.
2. **Konfiqurasiyalar** altında ad yazın (məsələn `Böyük`) və {{ui:Cari dəyərləri saxla}} ya da {{key:Enter}} basın.

Yeni konfiqurasiya **aktiv** olaraq işarələnir. Sonradan bir parametri dəyişsəniz, **aktiv, sonradan dəyişdirilib** yazır, beləliklə hissənin artıq ona uyğun olmadığını bilirsiniz.

## Keçin, yeniləyin, adını dəyişin, silin

- {{ui:Tətbiq et}} parametrləri həmin konfiqurasiyanın dəyərlərinə təyin edir və hissəni yenidən qurur.
- {{ui:Yenilə}} cari dəyərləri həmin konfiqurasiyaya saxlayır.
- Adını dəyişmək üçün yeni adı onun qutusuna yazın və {{key:Enter}} basın.
- {{ui:Sil}} konfiqurasiyanı silir. Parametrlər öz dəyərlərini saxlayır.

Bunların hər biri bir addımdır: {{key:Mod+Z}} geri qaytarır. Parametrin adını dəyişsəniz, hər konfiqurasiya yeni adı izləyir; birini silsəniz, o onlardan çıxır.

## Konfiqurasiyada xüsusiyyətləri açıb söndürün

Konfiqurasiya həmçinin hansı xüsusiyyətlərin söndürüldüyünü saxlayır, ona görə bir hissənin nəyinsə **ilə** və **olmadan** versiyaları ola bilər: montaj dəlikləri, faska, çıxıntı.

1. Xüsusiyyəti söndürün: tarixçədə ona klik edin, sonra **Xüsusiyyətlər** altında {{ui:Söndür}}.
2. Konfiqurasiyanı adi kimi saxlayın, məsələn `Dəliksiz`. Onun sətri söndürdüyü şeyləri sadalayır.
3. Xüsusiyyəti geri açın ({{ui:Yenidən qur}}) və başqa konfiqurasiya saxlayın, məsələn `Dəliklə`.

Hər hansı konfiqurasiya bir xüsusiyyəti söndürdükdən sonra, konfiqurasiyanı tətbiq etmək onun xüsusiyyətlərini söndürür və **qalan hər xüsusiyyəti yandırır**, parametr dəyərləri ilə birlikdə, bir addımda. Xüsusiyyətlərdən heç biri söndürülməzdən əvvəl saxlanılmış konfiqurasiya «hər şey açıq» sayılır. {{ui:Yenilə}} xüsusiyyətləri indiki vəziyyətləri ilə, dəyərlərlə birlikdə saxlayır.

Konfiqurasiyaları xüsusiyyət söndürən hissə daha yeni fayl versiyası kimi saxlanılır: köhnə PartCraft onları olmadan açmaq əvəzinə faylın daha yeni versiyadan olduğunu deyir.

:::note
CSV dizayn cədvəli yalnız parametr dəyərlərini daşıyır. Cədvəli konfiqurasiyanın üzərinə idxal etmək onun dəyərlərini dəyişir və söndürdüyü xüsusiyyətləri saxlayır; əmr sətrinin `--table` seçimi yalnız dəyərləri qurur.
:::

Hissə faylı konfiqurasiyaları və hansının aktiv olduğunu ilə birlikdə saxlanılır. Hissə saxlanıldığı dəyərlərlə açılır.

## Dizayn cədvəlini içəri və ya xaricə çıxarın

Dizayn cədvəli hər parametr üçün sütunu və hər konfiqurasiya üçün sətri olan CSV faylıdır:

```
name,width,thick,bolt
kiçik,100,6,6.6
orta,140,8,8.5
böyük,200,12,13
```

Birinci sütun `name`, `config` və ya `configuration` adlana bilər; hər digər sütun hissənin parametrinin adı olmalıdır. Xanalar ədədlərdir, istəsəniz vahidlərlə (`8in`). Boş xana həmin parametri sətirdən çıxarır.

- {{ui:CSV idxal et}} hər sətri konfiqurasiya kimi əlavə edir. Mövcud konfiqurasiyanın adı olan sətir onu əvəz edir. İdxal bir addımdır.
- {{ui:CSV ixrac et}} konfiqurasiyaları xaricə yazır. Hələ heç biri yoxdursa, cari dəyərlərin bir sətrini yazır — cədvəl üçün başlanğıc nöqtə.

Spreadsheet-in düstur kimi oxuyacağı konfiqurasiya adı (`=`, `+`, `-` və ya `@` ilə başlayan) başında `'` ilə yazılır.

## Hamısı bir anda

{{ui:Variant paketi…}} **Konfiqurasiyalar** altında hər konfiqurasiyanı, ya da seçilmiş bir neçəsini, bir zip-də STEP, IFC, DWG və önizləmə kimi, parametrlərinin cədvəli ilə qurur: bax [Konfiqurasiyalarınızdan variant paketi düzəldin](topic:variant-pack).

Əmr sətri aləti dizayn cədvəlinin hər sətri üçün bir fayl qurur:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Konfiqurasiyaları əvvəlcə CSV kimi ixrac edin, sonra həmin faylı `--table` ilə verin. Bax [Skriptlər və əmr sətri](topic:scripts-and-cli). Skript kimi saxlanılmış hissə konfiqurasiyalarını `configs json …` sətrində saxlayır.
