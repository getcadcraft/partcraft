---
title: Təhlil kitabxanası
summary: Skript iş sahəsindəki oxunaqlı təhlil skriptlərinin kitabxanası: hər qrupda nə var, funksiyanı yalnız oxumaq üçün açmaq, onun başlığı (üsul, istinadlar və yoxlama), öz nüsxəniz və nüsxənin kitabxana funksiyasını necə əvəz etdiyi.
keywords: kitabxana, craftlib, təhlil, elektromaqnit, statik, modal, istilik, topologiya optimallaşdırması, top88, SIMP, elektromaqnetika, elektrostatika, maqnitostatika, maye, qəfəs Boltzmann, LBM, tor, voksel, tetraedrlər, istinadlar, yoxlama, doğrulama, nüsxə, kölgə
from: bf993859
---

Təhlil kitabxanası hər biri yuxarıdan aşağı oxuna bilən funksiya olan skriptlər toplusudur: sərtlik matrisinin necə yığıldığı, sərhəd şərtlərinin harada yerləşdiyi, hansı həllədicinin işlədiyi, nəticələrin necə hesablandığı. Onun heç nəsi qara qutuda gizlədilməyib; yalnız sürətli daxili dövrələr (element matrisləri, seyrək həllədicilər, torlama) daxili olaraq yazılıb.

## Nümunə ilə başlayın

**Nümunələr** qrupunda kitabxananı başdan sona istifadə edən beş qısa skript var. Birinə klik edin, {{ui:Aç (yalnız oxumaq üçün)}} basın, sonra {{key:F5}}: hər biri görünüşü təmizləyir, tuvalda nəticə və alt ekranlarda qrafik göstərir.

| Nümunə | Nəyi göstərir |
|---|---|
| Konsol gərginliyi | 100 × 10 × 10 mm ölçülü polad çubuq 100 N uc yükü altında: deformasiya olunmuş çubuqda von Mises gərginliyi və uc sapması dörd element ölçüsündə tir nəzəriyyəsi ilə müqayisədə (qrafikdə) |
| MBB tir topologiyası | Klassik 60 × 20 topologiya optimallaşdırması: layihənin formalaşması, uyğunluq əmsalının (compliance) düşməsi, son quruluş (94 iterasiya, compliance 203.19) |
| Kondensator sahəsi | 4 mm enində, 1 mm məsafədə iki boşqab: potensial və sahə, kənar effektli tutum ideal qiymət və Palmer düsturu ilə müqayisədə |
| Kanal axını | Kanalda dirəyin ətrafında qəfəs Boltzmann axını: sürət sahəsi və yığılma tarixçəsi |
| Elektromaqnit | Hava boşluqlu və sarğılı C-formalı dəmir nüvə: maqnit induksiyası, boşluqdakı sahə maqnit dövrəsi düsturu ilə müqayisədə, induktivlik və boşluq üzrə çəkilmə. [2-ölçülü maqnit sahələri](topic:magnetic-fields-2d) səhifəsində izah olunur |
| Daimi maqnit | Eyni nüvə, sarğı əvəzinə daimi maqnitlə: maqnitin iş nöqtəsi, boşluqdakı sahə maqnit dövrəsi ilə müqayisədə, nə qədər axının sızdığı, çəkilmə. [2-ölçülü maqnit sahələri](topic:magnetic-fields-2d#permanent-magnets) səhifəsində |

## Qruplar

| Qrup | Funksiyalar | Nə edirlər |
|---|---|---|
| Torlama | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Qutular və silindrlər heksaedr kimi; kublar və ya tetraedrlər istənilən modelin (hissənin, cismin, yüklənmiş STL-in) üzərində; element həcmləri və keyfiyyət; müstəvidə və ya üzdə düyünlərin seçimi |
| Statik gərginlik | `static_voxel`, `static_tet` | Kublar üzrə və ya 10 düyünlü tetraedrlər üzrə xətti statik gərginlik: yerdəyişmələr, gərginliklər, von Mises, reaksiyalar |
| Çərçivələr | `frame3d` | Düz sərtlik üsulu ilə tirlərin, sütunların və bağlayıcıların 3D çərçivələri: üzv ucu azad buraxılmaları, dayaqlar və yaylar, üzvlər boyu yüklər; yerdəyişmələr, reaksiyalar, üzv ucu qüvvələri. DetailCraft və BimCraft-ın {{ui:CraftScript kimi ixrac et}} funksiyası bütöv modeli bunun üçün yazır. Təhlil köməkçisidir, norma yoxlaması deyil |
| Rəqs | `modal_tet` | Təbii tezliklər və rejim formaları |
| İstilik | `heat_steady`, `heat_transient`, `heat_system` | Sabit temperaturlu, istilik daxiletməli, generasiyalı, axınlı və konveksiyalı sabit və keçici istilikötürmə |
| Topologiya optimallaşdırması | `top88`, `top99`, `topopt3d` | Nəşr olunmuş 88 və 99 sətirlik 2-ölçülü kodlar və eyni üsul 3-ölçülü kublar üzərində |
| Elektromaqnetika | `poisson2d`, `magnetostatic2d` | 2-ölçülü elektrostatika (potensial, sahə, tutum, yük) və maqnitostatika (vektor potensialı, maqnit induksiyası, daimi maqnitlər) |
| Maye axını | `lbm2d`, `lbm3d` | Qəfəs Boltzmann axını: 2-ölçülü skriptin içində yazılıb, 3-ölçülü PartCraft-ın öz axın nüvəsi üzərində |

Hər funksiyanın başlığı dəqiq arqumentlərini verir. Vahidlər başlıqda başqa cür göstərilmədikcə PartCraft tədqiqatlarının vahidləridir: millimetr, nyuton, meqapaskal, sıxlıq üçün tonna kubmillimetr başına, istilik üçün vatt və kelvin. Elektromaqnit və qəfəs Boltzmann funksiyaları istənilən ardıcıl vahidlərlə işləyir; onların başlıqları necə olduğunu göstərir.

## Kitabxana necə yoxlanılır

Hər funksiyanın başlığı **yoxlama** ilə bitir: məlum cavabı olan kiçik hal. PartCraft-ın testləri onların hamısını işlədir və PartCraft-ın eyni iş üçün öz tədqiqatı olduqda, skriptin cavabı həmin tədqiqatla eyni torda müqayisə olunur:

- konsolun uc sapması tir nəzəriyyəsi ilə (kublarla 0,2 %-dən, tetraedrlərlə 0,05 %-dən yaxşı) və eyni torda **Simulyasiya** iş sahəsinin həllediciləri ilə (çoxlu rəqəmə qədər eyni);
- konsolun birinci tezliyi tir nəzəriyyəsi ilə (qısa tir üçün gözlənildiyi kimi 0,24 % aşağı) və **Simulyasiya**-nın modal həlledicisi ilə;
- istilik: qızdırılan müstəvi divar dəqiq, kiçik cisim kütləvi-tutum düsturunun dediyi kimi soyuyur, lövhənin temperaturu nəzəriyyənin dediyi kimi sönür;
- topologiya optimallaşdırması: `top88` məqalənin 94 iterasiyasını və uyğunluq əmsalı 203.1925-i təkrar edir (sıxlıq filtri ilə 218.8032); `topopt3d` eyni parametrlərlə **Generativ** iş sahəsi ilə eyni uyğunluqda bitir;
- kondensatorun tutumu və uzun solenoidin sahəsi dərslik qiymətləri ilə, elektromaqnitin boşluq sahəsi maqnit dövrəsi düsturu ilə, daimi maqnitlər isə havadakı dəyirmi maqnit və dəmir tutacaqla bağlanmış maqnit ilə müqayisədə;
- kanal axını dəqiq parabolik profillə müqayisədə.

## Funksiyanı oxuyun

1. Skript panelində **Kitabxana** sekmesini açın.
2. Funksiyaya klik edin. Onun başlığı göstərir: nəyi hesablayır, üsulu, vahidləri, fərziyyələri və məhdudiyyətləri, **istinadları** (kitab və ya məqalə, tənlik nömrələri) və **yoxlamanı** — PartCraft-ın öz testlərinin işlətdiyi məlum cavabı olan kiçik hal.
3. {{ui:Aç (yalnız oxumaq üçün)}} bütün skripti kənarı xətli sekmədə açır. Onu işə sala, hissələrini seçib işə sala bilərsiniz, amma dəyişdirə bilməzsiniz.

## Dəyişdirin

{{ui:Surətini çıxar}} basın (ya da yalnız oxunan sekmənin üstündə **Düzəliş üçün surət çıxar**). Surət hissənizdə eyni adlı skriptdir, ona görə hissə ilə birlikdə saxlanılır və **həmin funksiyaya hər çağırış indi sizin surətinizi istifadə edir** — redaktor bunu skriptin üstündə bildirir. Hər ikisini saxlamaq üçün surəti yenidən adlandırın.

## İstifadə edin

Kitabxana funksiyasını istənilən skriptdən adı ilə çağırın, daxili funksiya kimi:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Nəticələr işçi sahədə dəyərlər kimi qayıdır; göstərdikləri çəkilişlər və sahələr görünüşdə və alt ekranlarda görünür.

Açıq hissənin statik təhlili, məsələn, bir neçə sətir tutur:

```
v = voxel_mesh(part(), 2);                   % 2 mm kublar
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % altı bərkidin
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % yuxarıda 500 N aşağı
r = static_voxel(v, 210000, 0.3, bc);       % polad
```

`r` yerdəyişmələri, gərginlikləri və reaksiyaları saxlayır; von Mises gərginliyi deformasiya olunmuş hissədə çəkilir. Əyri hissələr üçün `tet_mesh` və `static_tet` istifadə edin: onlar bütöv üzləri də yükləyə və tuta bilər (`face_nodes`).

:::note
Kitabxananın funksiyaları CraftScript-də yazılıb, Lua skripti onları daxili funksiyalar kimi `cs` vasitəsilə çağırır: `cs.static_tet(t, 200000, 0.3, bc)` (bax [Lua ilə skriptlər](topic:craftscript-lua)). Hər funksiya bir material və bir yük halını həll edir; başlıqlar nəyin əhatə olunmadığını sadalayır.
:::
