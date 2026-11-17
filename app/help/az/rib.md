---
title: Qabırğalar və köşə qabırğaları
summary: Hissəni bir xətt kimi çəkilən qabırğa ilə möhkəmləndirin: o, xətdən divarlara qədər, eskiz müstəvisi boyunca təyin olunmuş qalınlıqda, seçdiyiniz tərəfə doldurulur.
keywords: qabırğa, köşə qabırğası, şəbəkə, möhkəmləndirici, bağlayıcı, kronşteyn, künc dəstəyi, nazik divar, möhkəmləndirmək
from: 5c218881
---

:::note
**Bu versiyada hələ qurulmayıb.** Qabırğa dəqiq həndəsə nüvəsi tələb edir, bu PartCraft versiyasında isə yoxdur: o hər hissəni mesh nüvəsi ilə qurur. [Hələ qurulmayanlar](topic:not-built-yet) nə etmək lazım olduğunu deyir. Bu səhifənin qalan hissəsi qabırğanın dəqiq nüvə ilə necə işlədiyini təsvir edir.
:::

**Qabırğa** (və ya köşə qabırğası) hissəni möhkəmləndirən nazik divardır, məsələn L-kronşteynin küncündəki üçbucaq kimi. Yalnız onun sərbəst kənarını çəkirsiniz: PartCraft həmin xətt ilə divarlar arasındakı boşluğu doldurur. Dəqiq nüvə tələb edir (bax: [Mesh nüvəsi](topic:solid-kernels)).

## Qabırğa əlavə edin

1. Qabırğanın yerləşdiyi yerin ortasından müstəvi yaradın (40 dərinlikli L-kronşteyn üçün eskizinin 20 qabağında müstəvi: bax [İstinad müstəvilər, oxlar və nöqtələr](topic:reference-geometry)).
2. Onun üzərində divardan divara **bir xətt** çəkin — və ya əyilmiş qabırğa kənarı üçün bir neçə xətti uc-uca. Xətt divarlara çatmaya bilər: onun uclarını divarlara çatana qədər uzadırlar.
3. Eskizi seçin və {{ui:More}} › {{ui:Rib}} seçin.

Qabırğa xətdən divarlara, hissənin ortasına doğru olan tərəfə doldurulur, buna görə köşə qabırğası içəri künc üzərinə düşür. Həmin tərəf açıq, digəri isə bağlıdırsa, PartCraft onu çevirir və bunu deyir.

## Parametrlər

- **Qalınlıq (mm)** qabırğanın eskiz müstəvisi boyunca qalınlığıdır. Parametrlə idarə oluna bilər.
- **Qalınlıq** (altındakı seçim): **Eskiz müstəvisi üzərində mərkəzləşdirilmiş**, **Müstəvinin qarşısında** (onun normalı boyunca) və ya **Müstəvinin arxasında**.
- **Çevir** xəttin digər tərəfini doldurur.

## Mesajlar

- **Bu tərəfdə qabırğanın kənarı heç vaxt cismə çatmır** — həmin tərəfdə heç nə bağlanmır: **Çevir**i işarələyin və ya təmizləyin, və ya xətti elə yerləşdirin ki, divarlar onu məhdudlasın.
- **Qabırğanın eskizində bir açıq xətt zənciri lazımdır** — eskizdə qapalı forma, qövs və ya spline var, ya da xətlər uc-uca birləşmir.
- **Qabırğanın kənarı orada cismin içindən keçir** — xətt bərk cismin içindədir; onu divarlar arasındakı açıq yerdə çəkin.
