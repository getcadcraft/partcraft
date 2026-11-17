---
title: Konfiqurasiyalarınızdan variant paketi yaradın
summary: Hissənin hər konfiqurasiyasını və ya seçilmiş bir neçəsini bir dəfəyə STEP, IFC, DWG və hər biri üçün önizləmə kimi qurun, parametrlərinin cədvəli və variantları ilə birlikdə hissəni bir kitabxana elementi kimi.
keywords: variant paketi, variantlar, konfiqurasiyalar, detal ailəsi, toplu ixrac, hər ölçü, step, ifc, dwg, önizləmə, cədvəl, csv, json, kitabxana, konfiqurator, məhsul konfiquratoru, katalog, element json
from: 9a6db99f
---

## Nə edəcəksiniz

Hissənin **hər ölçüsünü bir dəfəyə** təhvil verin: hər konfiqurasiya üçün bir STEP, IFC və DWG faylı və şəkil, hər birinin nə olduğunu göstərən cədvəl və hamısını bir səhifədə toplayan kitabxana elementi.

Əvvəlcə **konfiqurasiyaları** olan hissəyə ehtiyacınız var (bax: [Konfiqurasiyalar və dizayn cədvəlləri](topic:design-tables)). Elementi söndürən konfiqurasiya, məsələn deşikli və deşiksiz lövhə, öz variantına çevrilir.

## Addımlar

1. Hissəni açın. {{ui:Parametrlər}} sekməsində **Konfiqurasiyalar** tapın.
2. {{ui:Variant paketi…}} düyməsinə klikləyin.
3. Qurulacaq konfiqurasiyaları (hamısı işarəlidir) və yazılacaq faylları işarələyin: STEP, IFC, DWG, önizləmə və kitabxana elementi.
4. {{ui:Paketi yarat}} düyməsinə klikləyin. Status sətri variantlar qurulduqca onları sayır; hissəniz dəyişmir.
5. Bir zip yüklənir: `<part> variants.zip`.

## Zip-də nə var

| Fayl | Nədir |
|---|---|
| `<name>.step` | Konfiqurasiya STEP bərk cismi kimi. |
| `<name>.ifc` | IFC4, qurulmuş gövdəsi olan bir element və hissənin parametrləri xassə kimi; dəyər həmin konfiqurasiyanın öz dəyəridir. |
| `<name>.dwg` | Ön, üst, sağ və izometrik görünüşlər tam ölçüdə çertyoj vərəqi kimi. |
| `<name>.svg` | Onun izometrik xətt şəkli. |
| `variants.csv`, `variants.json` | Parametr cədvəli: hər variantın id-si, adı və hər parametrin dəyəri, söndürdüyü elementlər, faylları, həcmi və ölçüsü. |
| `<part>.item.json` | Hissə, variantları ilə birlikdə bir kitabxana elementi kimi (aşağıya bax). |
| `README.txt` | Nə yaradıldığı, aşağıdakı qeydlər və qurulmayan hər şey. |

Fayllar konfiqurasiyaya görə adlanır. Qurula bilməyən konfiqurasiya (bu dəyərlərlə yaradıla bilməyən element) fayllardan və cədvəldən çıxarılır, README-də və zip saxlanıldıqdan sonra gələn mesajda sadalanır; qalanları yenə də yazılır.

## Bilmək yaxşıdır

- **STEP** dəqiq kernel quruluşda aktiv olduqda dəqiqdir. Onsuz STEP fasetlidir (düz üçbucaqlar) və README bunu deyir.
- **DWG** 3D model yox, çertyoj vərəqidir. Xətləri meshdən gəlir, buna görə əyri kənar bir çox qısa xətt olur.
- **Kitabxana elementi** hər variant üçün bir gövdə və bir oturacaq saxlayır, kitabxananın öz oxlarında: Z yuxarı, ön −Y tərəfə, daxiletmə nöqtəsi isə aşağıda arxanın ortasında. Plan hər variantın əhatə edən düzbucağıdır. Element 8 MB ilə məhdudlaşdırılıb, buna görə çox ağır variant öz ölçüsündə qutuya çevrilir və README neçə belə olduğunu deyir.
- Hissənin aktiv konfiqurasiyası elementin standart variantıdır.
- Portlar (boru və kanallar üçün birləşmə nöqtələri) PartCraft-dan təyin olunmur.

## Variantları kitabxana səhifəsinə qoyun

Saytda **Kitabxana › Yüklə** bölməsində `<part>.item.json` faylını yükləyin. Kateqoriyanı, lisenziyanı və kredit sətrinizi seçin; element variantları ilə birlikdə Kitabxana elementinə çevrilir. BimCraft-da onu yerləşdirəndə hansı variant olduğu soruşulur və **Dəyişdir** digərlərini təklif edir. Ziyarətçilərin variant seçdiyi, 3D-ni gördüyü və yüklədiyi konfiqurator səhifəsi hələlik **işçi önizləməsidir**: hələ ictimaiyyətə açıq deyil.

## Komanda sətrindən

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` konfiqurasiyaları adlandırır, `--formats` `step`, `ifc`, `dwg`, `preview` formatlarından istənilən birini qəbul edir, `--no-item` kitabxana elementini çıxarır. Komanda qovluq, zip və ya ikisini birlikdə yazır və variant qurula bilmədikdə 1 ilə çıxır. Bax: [Skriptlər və komanda sətri](topic:scripts-and-cli).
