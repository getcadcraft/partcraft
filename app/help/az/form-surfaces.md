---
title: Form ilə sərbəst formalar və səth xüsusiyyətləri
summary: Form iş sahəsində hamar idarəetmə qəfəsini itələyib çəkin, kənarları qıvrım edin, simmetriyadan istifadə edin, yoxlayın və dəqiq bərk cisim və ya səthə çevirin, sonra Dizaynda səthləri yamaq, loft, tikmə, qalınlaşdırma, ofset, uzatma və kəsmə ilə işləyin. Nə dəqiq, nə təqribi olduğu.
keywords: forma, sərbəst forma, T-spline, subdivision, Catmull-Clark, qəfəs, Quadball, qırış, simmetriya, zebra, əyrilik, səth, yama, doldurma, loft səthi, tikmə, qalınlaşdırma, ofset səthi, uzatma, kəsmə
from: 0d326ef4
---

:::note
**Bu versiyada hələ qurulmayıb.** Formanın detala tamamlanması və səth xüsusiyyətləri dəqiq həndəsə nüvəsi tələb edir; bu PartCraft versiyasında belə nüvə yoxdur: o, hər detalı şəbəkə nüvəsi ilə qurur. [Hələ qurulmayanlar](topic:not-built-yet) nə etmək lazım olduğunu izah edir. Səhifənin qalan hissəsi bu xüsusiyyətləri dəqiq nüvə ilə işlədikləri kimi təsvir edir.
:::

**Form** iş sahəsi üzvi formalar yaradır. Siz **qəfəsi** redaktə edirsiniz: künclər, kənarlar və üzlərdən ibarət kobud şəbəkə. Forma qəfəsin idarə etdiyi hamar səthdir (onun Catmull–Clark limit səthi), ona görə bir küncü hərəkət etdirmək səthi onun ətrafında yumşaq əyir. Düzgün göründükdə **Səth emalı** onu detalın tarixçəsinə *Forma* xüsusiyyəti kimi əlavə edir və dəqiq nüvə onu əsl B-spline səthlərinə çevirir. Bundan sonra onu yumru edə, kəsə, digər xüsusiyyətlərlə birləşdirə və STEP kimi ixrac edə bilərsiniz.

Alət panelinin solundakı **İş sahəsi** siyahısından **Form** seçin.

## Qəfəsə başlayın

1. Sağ paneldə **Ölçü** və **Bölmələr** təyin edin. Bölmələr hər tərəfə neçə üz düşdüyünü göstərir.
2. Alət panelində {{ui:Kub}}, {{ui:Quadball}} və ya {{ui:Müstəvi}} düyməsinə klikləyin. Paneldə həmçinin **Silindr**, **Torus** və **Kliklərlə üzlər** var.

- **Quadball** elə quraşdırılmış kub qəfəsdir ki, künc nöqtələri sferanın üzərində yerləşir. Həmin nöqtələr arasında səth sferanın bir az içərisində olur: 2 bölmə ilə təxminən 0.4 % az həcm.
- **Müstəvi** açıqdır, ona görə səth cisminə çevrilir (aşağıdakı "Dizaynda səth xüsusiyyətləri"ə baxın).
- **Kliklərlə üzlər**: bir üz yaratmaq üçün yuxarı (zəmin) müstəvidə və ya qəfəsin künclərində 4 nöqtəyə klikləyin. Künclərini paylaşan üzlər birləşir. Üçbucaq üçün 3 nöqtədən sonra {{key:Enter}} basın, ya da dayandırmaq üçün {{key:Esc}}.

Tamamlanmamış qəfəsiniz detal faylı ilə birlikdə saxlanılır, ona görə faylı bağlayıb sonra davam edə bilərsiniz.

## Seçin və hərəkət etdirin

- Qəfəsin küncünə, kənarına və ya üzünə klikləyin. {{key:Shift}}+klik elementləri əlavə edir və ya çıxarır. {{key:Esc}} seçimi təmizləyir.
- Seçimin ortasında gizmo görünür. Oxu çəkib onun boyunca, ya da kvadratı çəkib həmin müstəvidə hərəkət etdirin. Hərəkət üçün {{key:W}}, fırlatmaq üçün {{key:E}} və miqyas üçün {{key:R}} basın və ya paneldəki düymələrdən istifadə edin. Alət panelindəki {{ui:Gizmo}} onlar arasında keçid edir.
- **Yumşaq zəifləmə** (mm) həmin məsafədəki künclərə də təsir edir və bu məsafənin kənarında hamar şəkildə sıfıra enir.
- Hər çəkmə bir geri alma addımıdır: {{key:Ctrl+Z}} və {{key:Ctrl+Y}} adi kimi işləyir.

## Qəfəsi dəyişin

Paneldəki **Dəyişdir** düymələri seçimlə işləyir:

| Düymə | Nə edir |
|---|---|
| {{ui:Ekstruziya}} | Seçilmiş üzlər normalları boyunca **Ekstruziya məsafəsi** qədər çıxır və yeni yan üzlər yaranır. Seçilmiş açıq kənarlar kənara doğru yeni üzlər əmələ gətirir. |
| {{ui:Kənar dövrəsi}} / Kənar dövrəsi əlavə et | Seçilmiş kənardan keçən dördtərəfli üzlər halqasını yarıya qədər bölür. Daha çox dövrə daha sıx əyrilər verir. |
| Nöqtə əlavə et | Seçilmiş kənarın ortasına künc əlavə edir. |
| Bölün | Seçilmiş hər üzü ortasının ətrafında dördtərəfli üzlərə bölür. |
| Körpü | İki seçilmiş üzü və ya iki açılışı (hər birində bir açıq kənar seçin) üzlər borusu ilə birləşdirir. Hər ikisində kənarların sayı eyni olmalıdır. |
| Deşiyi doldur | Seçilmiş açıq kənar vasitəsilə açılışı bir üzlə bağlayır. |
| Qaynaq | Seçilmiş künclər ortalarında birləşdirilir. |
| Düzləşdir | Seçilmiş künclərə ən uyğun gələn müstəviyə köçürür. |
| Sil | Seçilmiş üzləri, kənarları (iki üz birləşir) və ya künclər silir. |

## İti kənarlar, simmetriya və göstəriş

- {{ui:Qırış}} seçilmiş kənarları iti edir. **Qırış çəkisi** 10 tam itidir. Kiçik çəki o qədər incələmə addımı boyunca iti qalır, sonra yumşalır və bu, sərt qatlama əvəzinə sıx yumru verir. **Qırışı sil** onları yenidən hamar edir. **İti təpə** küncü bərkidir ki, səth ona nöqtə ilə keçsin.
- **Simmetriya** qəfəsi X, Y və ya Z = 0 boyunca əks etdirir. Müsbət tərəfi saxlayır, onu əks etdirir və iki yarını birləşdirir. Bundan sonra hər iki tərəfdə redaktə hər ikisində baş verir. Güzgü müstəvisindəki künclər orada qalır.
- {{ui:Göstəriş}} **Hamar** (xüsusiyyətin olacağı səth) və **Kub** (qəfəsin öz üzləri) arasında keçir.
- **Analiz**: **Zebra zolaqları** cari baxışdan zolaqlı işığı əks etdirir. Onlar hamar səthdə hamar əyilir və qırışda qırılır. **Orta əyrilik** qabarıq sahələri qırmızı, çökük sahələri göy, düz sahələri ağ rənglə göstərir. O, göstərilən şəbəkə üzərində kotangens düsturu ilə ölçülür, ona görə o, bələdçidir, ölçü deyil.

## Yoxlayın və bitirin

- **Dəqiq yoxla** detalınızı dəyişmədən qəfəsi dəqiq nüvədə çevirir. O, qəfəsin neçə B-spline yamağı yaratdığını, neçəsinin dəqiq olduğunu və nəticənin qapalı, etibarlı bərk cisim olub-olmadığını və onun həcmini bildirir.
- {{ui:Səth emalı}} tarixçəyə *Forma* xüsusiyyəti əlavə edir və ya redaktə etdiyiniz formanı yeniləyir və sizi Dizayna qaytarır. Qapalı qəfəs bərk cismə çevrilir. Dizayn panelində onun **Əməliyyatı** Yeni cisim, Birləşdir, Kəs və ya Kəsişdir ola bilər. Açıq qəfəs səth cisminə çevrilir.
- Formanı sonradan dəyişmək üçün onu tarixçədə seçin və **Formada redaktə et** düyməsinə klikləyin. Siz qəfəsi redaktə edərkən qurulmuş cisim gizlədilir.
- **Ləğv et** qəfəsi tarixçəyə toxunmadan atır.

## Nə dəqiqdir və nə təqribidir

Qəfəsin hər dördtərəfli üzü, lazım olduqda incəldilərək, bir bikubik B-spline yamağa çevrilir.

- Üzün hər küncü *müntəzəm* olan yerdə (səthin içərisində dörd kənar birləşir, ya da açıq kənarda və ya qırış boyunca üç), yama **dəqiq** subdivision səthidir. Testlər bunu 1e-9 mm dəqiqliyinə qədər yoxlayır.
- **Qeyri-adi nöqtənin** ətrafında (üç, beş və ya daha çox kənar birləşir, üç və ya beş tərəfli üzün küncü, ya da qırışın sonu) dəqiq polinom yama yoxdur. Orada yama həmin künc üzrə dəqiq nöqtəni və tangens müstəvini və qonşuların kənar əyrilərini götürür, ona görə yamalar hələ də boşluq olmadan birləşir. Nöqtədə birləşən kənarlar boyunca tangens davamlılıq təqribidir. Forma paneli və xüsusiyyətin paneli ən böyük bucağı verir, adətən 2°-dən azdır. Xüsusiyyətin panelində yüksək **Səviyyə** bu yamaları daha kiçik və daha yaxın edir.
- İti qırışlar bərk cismin əsl kənarlarıdır, ona görə onları yumru edə bilərsiniz.
- Hər yama öz üzüdür, ona görə forma çox üzə malikdir və onların arasında xətlər çəkilir.

## Dizaynda səth xüsusiyyətləri

Səth əmrləri Dizaynın {{ui:Daha çox}} menyusunda, xüsusiyyətlərin altındadır. Onlar dəqiq nüvə tələb edir. Səth cisimləri mavi rənglə şəffaf çəkilir. Onları qalınlaşdırana və ya tikənə qədər onlar bərk cismin hissəsi deyil.

| Əmr | Nə edir |
|---|---|
| Yamaq | Kənarların qapalı halqasını doldurur. Əvvəlcə bərk cismin kənarlarına {{key:Shift}}+klik edin, ya da açılışı doldurmaq üçün səth cismini seçin. **Toxunan (G1)** yamağı həmin səthə hamar birləşdirir. |
| Loft səthi | Hər eskizdə bir əyri zəncirindən (açıq və ya qapalı) keçən səth, tarixçə sırası ilə. |
| Tikmə | Səth cisimlərini ümumi kənarları boyunca tikir. Bağlanarsa, nəticə bərk cisim olur və digər xüsusiyyətlər kimi Əməliyyatı olur. |
| Qalınlaşdır | Səth cisminə qalınlıq verir: normalı boyunca, əksinə və ya hər iki tərəfə yarım. Nəticə bərk cisimdir. |
| Ofset səthi | Səth cisminin normalları boyunca köçürülmüş surəti. Orijinal qalır. |
| Səthi uzat | Bir üzlü səthi seçdiyiniz kənarlardan kənara uzadır. |
| Səthi kəs | Səth cismini başqa səth cisminin və ya bərk cismin onu kəsdiyi yerdə kəsir. Hansı parçanı saxlamaq seçmək üçün **Parçada nöqtə seçin** düyməsinə klikləyin, ya da qalan hər şeyi saxlayın. |

Tikmə, Qalınlaşdır, Səthi uzat və Səthi kəs başladıqları səth cisminə sərf olunur. Sonrakı xüsusiyyətlər yenisindən istifadə edir.

Hazırkı məhdudiyyətlər: bir neçə ayrı qapalı parçası olan formalar bir bərk cismə çevrilmir; müntəzəm sahələr böyük səthlərə birləşdirilmir; və bax: [Hələ qurulmayanlar](topic:not-built-yet).
