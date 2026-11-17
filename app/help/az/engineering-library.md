---
title: Mühəndislik kitabxanası
summary: Dərslik düsturları oxunaqlı skriptlər kimi, SI vahidlərində, hər nəticə öz mənbəyi ilə - boru və kanal axını, istilik ötürülməsi və istilik dəyişdiriciləri, təzyiq hissələri, qaz dinamikası, su və hava xassələri, materiallar və yoxlanılan vahidlər. Hər birinin nə üçün yaxşı olduğu və harada dayandığı.
keywords: mühəndislik, kitabxana, vahidlər, Darcy-Weisbach, Colebrook, Reynolds, sürtünmə əmsalı, Dittus-Boelter, Gnielinski, NTU, effektivlik, LMTD, qanad, Barlow, Lamé, nozzle, izentropik, Mach, boğulmuş axın, su, hava, xassələr, material, mənbələr
from: 786ef967
---

Mühəndislik kitabxanası Skript iş sahəsinin kitabxanasında (`craftlib/eng`) skriptlər toplusudur. Hər biri yuxarıdan aşağıya oxuna bilən funksiyadır, başlığı **metod**, **vahidləri**, **məhdudiyyətləri**, **istinadları** və işlənmiş ədədlə **yoxlamanı** verir. Hər yerdə SI vahidləri istifadə olunur və **vahid** və **mənbə** ilə qiymətlər qaytarırlar, buna görə məlumat vərəqi hər rəqəmin haradan gəldiyini çap edə bilir.

## Yoxlanılan vahidlər

`to_si(10, 'bar', 'Pa')` dəyəri çevirir və başqa bir kəmiyyəti ölçən vahidi rədd edir (təzyiq gözlənilən yerdə uzunluq). `from_si`, `unit_convert(1, 'bar', 'psi')` və `unit_kind('W/(m K)')` ("istilik keçiriciliyi") eyni qaydada işləyir. `temp_k(25, 'C')` və `temp_from_k` temperaturları çevirir, çünki onların sürüşməsi var.

## Xassələr

- `fluid('water', T)` və `fluid('air', T, p)`: sıxlıq, özlülük, keçiricilik, xüsusi istilik, Prandtl ədədi. Su 0-dan 100 °C-yə, hava 250-dən 600 K-ə qədər; bu hüdudlardan kənarda ekstrapolyasiya etmək əvəzinə dayanır.
- `material('ss304')`: Yanq modulu, Puasson əmsalı, sıxlıq, axıcılıq həddi, keçiricilik, xüsusi istilik, genişlənmə: Simulyasiya ilə eyni məlumat vərəqlərindən otaq temperaturu qiymətləri. Real dizayn təchizatçının sertifikatlı rəqəmlərindən istifadə edir. Temperatur əyriləri hələ qurulmayıb.

## Borularda və kanallarda axın

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, sonra turbulent axın üçün Colebrook tənliyi; 2300-dən 4000-ə qədər diapazonda etibarlı düstur yoxdur və bunu deyir), `darcy_weisbach`, `minor_loss`, `pipe_flow` (dairəvi boru, hamısı birdən) və `rect_channel` (Shah və London uyğunluğu ilə laminar düzbucaqlı kanallar).

## İstilik ötürülməsi

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (laminar və ya turbulent seçir və korrelyasiyanı adlandırır), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` və `ntu_for` (qarşı axın, paralel, qabıq-və-boru, çarpaz axın və tək dəyişən axın üçün effektivlik-NTU əlaqələri) və `hx_size` (istilik yükünün tələb etdiyi UA ölçüsü; yük qarşılana bilmədikdə nə qədər mümkün olduğunu deyir).

## Təzyiq hissələri

`allowable_stress` (axıcılıq həddi təhlükəsizlik əmsalına bölünür), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, hoop və ya sürüşmə meyarında) və `wall_sphere`. Bunlar dərslik həddləridir, **təzyiq-qab kodu hesablaması deyil**: korroziya payı, birləşmə səmərəliliyi və ya kod əmsalları yoxdur.

## Qaz dinamikası

`isentropic` (Mach ədədində nisbətlər), `mach_from_area`, `choked_flow`, `throat_area` və `exit_mach`, sürtünməsiz, istiliksiz və zərbəsiz mükəmməl qaz üçün.

## Nəticəni yoxlayın

`check_stress`, `check_thermal` və `check_flow` PartCraft-ın öz gərginlik, keçiricilik və axın həlledicilərini skriptdən yaradılmış detal üzərində işlədir və maksimum gərginlik və yerdəyişməni, temperaturları və istilik axınını, kanal şəbəkəsinin keçiriciliyini geri oxuyur. Həlledicilərə heç nə dəyişmirlər. Gərginlik və temperatur yoxlamaları voksel istifadə edir, buna görə əyri üz pilləkən kimi olur və iti daxili künc və ya nöqtəvi yükdə gərginlik voksel ölçüsündən asılıdır.
