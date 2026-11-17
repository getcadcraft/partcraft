---
title: Yüklərdən forma yaradın (Generativ)
summary: Tutulan və yüklənən üzləri, saxlanılacaq və boş saxlanılacaq bölgələri, hədəf həcmləri və materialları seçin, sonra nəticələr yaradın: hər həcm üçün tapılan ən sərt formalar, bərk cisim kimi yenidən yoxlanılmış, cədvəldə müqayisə edilmiş və STL, STEP və ya yeni detal kimi yüklənmiş.
keywords: generativ dizayn, topologiya optimallaşdırması, SIMP, yüngül, qəfəs, üzvi forma, nəticələr, müqayisə, kütlə, həcm payı, saxla, daxilində saxla, maneə, boş saxla, dizayn məkanı, minimum element ölçüsü, STL, 3D çap
from: 5b91fa8e
---

Generativ iş sahəsi detala lazım olmayan materialı çıxarır. Detalın harada tutulduğunu və yükləndiyini, nəyin qalmalı və nəyin boş qalmalı olduğunu deyirsiniz; PartCraft hər hədəf həcm üçün ən sərt forma tapır (**topologiya optimallaşdırması**), hər birini real materialla bərk cisim kimi yenidən yoxlayır və nəticələri yan-yana göstərir. O, detal üçün şəbəkə nüvəsinin verdiyi adlandırılmış üzlər üzərində işləyir (bax: [Şəbəkə nüvəsi](topic:solid-kernels)).

**İş sahəsi** qutusunda **Generativ** seçin. Detalınız dəyişmir; tədqiqat detal faylının içində saxlanılır.

## Tədqiqatı qurun

1. Sağ paneldə **Yeni tədqiqat** düyməsinə basın.
2. **Məkan**: *Detalın özü* detalınızdan material çıxarır; *Detalın ətrafında qutu* detaldan **Qutu həşiyəsi** qədər böyük qutunun içində forma yetişdirir.
3. **Element ölçüsü**: avtomatik ölçü üçün (təxminən 8,000 kub) boş buraxın və ya bir ölçü yazın. İncə ölçülər daha incə formalar verir və daha çox vaxt aparır.
4. **Minimum element**: bundan təxminən iki dəfə incə elementlər əmələ gəlmir. Boş isə bir yarım kub deməkdir.
5. Bir-altı **Hədəf həcm** (formanın dizayn məkanının nə qədərini doldura biləcəyi payı) və bir-dörd **Material** işarələyin. Hər həcm bir dəfə yaradılır; hər material həmin forma üzərində yoxlanılır (ən sərt forma materialdan asılı deyil, lakin onun kütləsi, gərginliyi və təhlükəsizlik əmsalı asılıdır).

## Məqsədlər

- {{ui:Sabit}}: tutulan üzlərə klikləyin. Panelin **Əlavə et** siyahısından **Sürtünməsiz üz** üzü yalnız öz boyu üzrə tutur (simmetriya müstəviləri üçün istifadə edin).
- {{ui:Qüvvə}}: yüklənmiş üzlərə klikləyin, sonra ümumi qüvvəni yazın və panelində onun istiqamətini seçin. **Təzyiq** **Əlavə et** siyahısındadır.
- {{ui:Saxla}}: ətrafı bərk qalmalı olan üzlərə klikləyin və nə qədər dərin olduğunu təyin edin (**Daxilində bərk saxla**) — məsələn bolt deşikləri ətrafında. Sabitlədiyiniz və ya yüklədiyiniz üzlər həmişə saxlanılır.
- {{ui:Maneə}}: ətrafı boş qalmalı olan üzlərə klikləyin və nə qədər uzaq olduğunu təyin edin (**Daxilində boş saxla**) — val və ya alət üçün yer.

Üzlərə kliklədikdən sonra **Seçimi bitir** və ya {{key:Esc}} basın. Yaşıl və qırmızı çalarlar bölgələri göstərir.

## Yaradın və müqayisə edin

{{ui:Yarat}} düyməsinə basın. Panel gedişatı və qalan vaxtı göstərir; **Dayandır** ləğv edir. Hər nəticə **Nəticələr** cədvəlində görünür: hədəf həcm, material, **kütlə**, **ən böyük gərginlik**, **ən böyük yerdəyişmə** və **təhlükəsizlik əmsalı** (axıcılıq ÷ gərginlik). Hamısı bitmiş formanın real materialla bərk kublar kimi yenidən həll edilməsindən alınır.

Baxışda görmək üçün nəticə seçin (detal gizlədilir; hər ikisini görmək üçün **Detalı onun vasitəsilə göstər** işarələyin). Cədvəlin altında: neçə iterasiya çəkdiyi və sabitləşib-sabitləşmədiyi, bərk cisim kimi sərtliyi optimallaşdırıcının öz rəqəmi ilə müqayisədə və onun səthi.

## Nəticəni istifadə edin

- **STL**: 3D çap üçün hazır qapalı üçbucaq şəbəkəsi.
- **STEP (fasetli)**: düz üzlərdən ibarət STEP bərk cismi kimi eyni səth.
- **Yeni detal faylı**: bir xüsusiyyəti nəticənin idxal olunmuş bərk cismi kimi olan PartCraft detalı. Onun üzərində eskiz çəkmək, deşik kəsmək və ya Simulyasiyada yoxlamaq üçün açın. O, fasetlidir (minlərlə düz üz), redaktə oluna bilən forma deyil.
- **Bu detala əlavə et** nəticəni detala birləşdirir; yalnız qutu dizayn məkanı üçün aktivdir (detalın özü məkan olduqda nəticə detalın içində yerləşir).

**Yeni detal faylı** və **Bu detala əlavə et** bu versiyada hələ qurulmayıb: nəticə dəqiq nüvə tələb edən idxal olunmuş bərk cismə çevrilir. STL və STEP (fasetli) yükləmələri işləyir.

## Nəyə qədər etibar etmək olar

- O, verilmiş həcm üçün **sərtliyi** optimallaşdırır. Hələlik gərginlik həddləri və istehsal qaydaları (çıxıntılar, frezləmə istiqamətləri, minimum deşik ölçüləri) yoxdur: seçdiyiniz nəticəni [Simulyasiyada](topic:simulation) yoxlayın və tənzimləyin.
- Bir və ya iki kub enində incə elementlər təqribidir: nazik detallar üçün daha kiçik element ölçüsü istifadə edin.
- Üsul sıxlıq filtrli SIMP, hədd proyeksiyası və optimallıq meyarı yeniləmələridir; bildirilən gərginlik və əyilmə nəticənin kublar kimi qiymətidir, bu, dürüstdür, lakin iti künclərdə kobuddur.

## Əlaqəli

- [Gərginliyi və əyilməni yoxlayın (Simulyasiya)](topic:simulation)
- [Çap, STEP və DXF üçün ixrac](topic:export-files)
- [Hələ qurulmayanlar](topic:not-built-yet)
