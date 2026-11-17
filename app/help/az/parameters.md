---
title: Parametrlərlə detalı idarə edin
summary: Vacib ölçüləri adlandırın (en, qalınlıq, bolt ölçüsü), istənilən xüsusiyyət nömrəsini və ya eskiz ölçüsünü = ilə onlara bağlayın və bütün detalı bir cədvəldən dəyişin.
keywords: parametrlər, harada istifadə olunur, istifadə edən, qlobal dəyişənlər, dəyişənlər, tənliklər, dizayn niyyəti, idarə edən ölçülər, bağlantı, ifadə, düstur, ölçünü adlandırma, bağlı dəyərlər
from: 58c646ea
---

Parametr adlandırılmış ədəddir, məsələn `width = 120` və ya `margin = bolt * 1.5`. Dərinliyi, deşik diametrini, naxış sayını və ya eskiz ölçüsünü ona bağlayın, parametri dəyişdikdə bunların hamısı bir addımda dəyişir. Dizayn niyyətini başınızda yox, detalın içində saxlamağın yolu budur.

## Parametrlər əlavə edin

1. Sağ paneldə {{ui:Parameters}} sekmesinə klik edin.
2. **Dəyişənlər** altında "name" qutusuna ad yazın, məsələn `width`.
3. Növbəti qutuya dəyər yazın, məsələn `120`, və {{key:Enter}} basın (və ya {{ui:Add}} klik edin).

Dəyər ədəd və ya parametrlərin ifadəsi ola bilər: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. **Dəyər** sütunu nəyə bərabər olduğunu göstərir. Ad hərflə və ya `_` ilə başlayır və yalnız hərflər, rəqəmlər və `_` ehtiva edir; funksiya və vahid adları (`sin`, `mm`, `pi`) rədd olunur, eləcə də `a = b` və `b = a` kimi dövrə rədd olunur.

## Ədədi parametrə bağlayın

1. Tarixçədə xüsusiyyətə klik edin, məsələn "Extrude1". Onun parametrləri {{ui:Properties}} sekmesində göstərilir.
2. **Dərinlik (mm)** kimi ədəd qutusunda `=` və ifadə yazın: `=thick` və ya `=width / 4`.
3. {{key:Enter}} basın.

Qutu indi nəticəni göstərir və etiketinin yanında **ƒ** düyməsi görünür. Tənliyi görmək üçün üzərinə gəlin. Eskiz ölçüləri də eyni şəkildə işləyir: xüsusiyyətin **Eskiz ölçüləri** siyahısında və açıq eskizin ölçü qutusunda (ölçüyə iki dəfə klik edin, `=width` yazın, {{key:Enter}} basın).

Bağlaya biləcəyiniz ədədlər: ekstrüziya dərinliyi, fırlatma bucağı, deşik diametri, dərinlik və zenkləmə ölçüləri, naxış sayı, məsafə və bucaq, yuvarlaqlaşdırma radiusu, faska məsafəsi, qabıq divar qalınlığı, hər eskiz ölçüsü və ən yeni xüsusiyyətlərin ölçüləri (ikinci dərinlik, konuslama, konik zenkləmə, istinad müstəvisinin məsafəsi, qaralama bucağı və digərləri).

## Parametri dəyişin

**Parametrlər** sekmesində **İfadə** sütununda yeni dəyər və ya ifadə yazın və {{key:Enter}} basın. Ona bağlı hər şey dəyişir və detal bir addımda yenidən qurulur: {{key:Mod+Z}} onu geri qaytarır.

Ədədi tərəfdən dəyişmək üçün bax: [İki tərəfli tənliklər](topic:equations-two-way).

## Parametrin istifadə yerini görün

{{ui:Parameters}} sekmesində hər parametrin altında bir sətir onu nəyin istifadə etdiyini deyir:

- ona idarə etdiyi ədədlər, məsələn **Extrude1 depth** və ya **Sketch1 D2 (distance)**. Birinə klik etsəniz, onun xüsusiyyəti seçilir və xassələri göstərilir;
- başqa parametrlər **vasitəsilə** idarə etdiyi ədədlər, məsələn `d = h + 2` və `h = w / 2` olduqda **Hole1 diameter (through h, d)**;
- ifadələri onu istifadə edən **parametrlər**, onu quraşdıran **konfiqurasiyalar** və onu oxuyan **skriptlər** (bax [Skriptlər yazın və işə salın](topic:craftscript)).

"Hələ istifadə edilməyib." sətri heç nəyin onu istifadə etmədiyini bildirir: onu soruşmadan silə bilərsiniz.

## Bağlayın, adını dəyişin, silin

- **Ədədi açın:** onun **ƒ** düyməsinə klik edin, və ya **Tənliklər** siyahısında {{ui:Unlink}}. Cari dəyərini saxlayır və artıq heç bir parametr onu dəyişmir.
- **Parametrin adını dəyişin:** **Ad** qutusuna yeni ad yazın. Onu istifadə edən hər ifadə yenidən yazılır.
- **Parametri silin:** sətrindəki × klik edin. Nəsə ondan istifadə edirsə, PartCraft əvvəl cari dəyərini həmin ifadələrə yazmağı soruşur.
- **Xüsusiyyəti silmək** onun ədədlərinin tənliklərini atır; status paneli hansı tənliklərin getdiyini deyir.

:::note
Parametrlər `.partcraft.json` faylında saxlanılır (fayl versiyası 3). Parametrsiz detal əvvəlki kimi saxlanılır.
:::

## İfadələr

| Yazın | Nə deməkdir |
|---|---|
| `120`, `12.5`, `1e3` | ədəd (millimetr, və ya bucaq üçün dərəcə) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | digər vahidlərdə uzunluq, millimetrə çevrilir |
| `30deg`, `0.5rad` | bucaq, dərəcəyə çevrilir |
| `+ - * / %` və `^` | ədədi əməliyyatlar; `^` qüvvətdir, `-2^2` −4-dür |
| `sin cos tan asin acos atan atan2` | dərəcədə trigonometriya |
| `sqrt pow exp ln log abs sign` | digər funksiyalar |
| `ceil floor int round(x, digits) min max` | yuvarlaqlaşdırma və hədlər |
| `if(test, a, b)` ilə `< <= > >= == !=` | seçim: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Adlar böyük-kiçik hərflərə həssasdır: `Width` və `width` iki ayrı parametrdir.

Həmçinin bax: [Konfiqurasiyalar və dizayn cədvəlləri](topic:design-tables) və [Skriptlər və komanda sətri](topic:scripts-and-cli).
