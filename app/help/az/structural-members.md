---
title: Polad profillərdən çərçivələr
summary: Bir və ya bir neçə eskizin xətləri boyunca polad profillər qoyun və qaynaqlı çərçivə qurun: bucaqlı və ya uc-uca künclər, birləşdiyi yerdə uyğun kəsilmiş elementlər, son qapaqlar, künc lövhələri və uzunluq və son bucaqları olan kəsim siyahısı.
keywords: qaynaqlı element, konstruktiv element, çərçivə, polad çərçivə, boru, kvadrat boru, HSS, RHS, SHS, CHS, geniş flanşlı, i-beam, w profil, IPE, HEA, HEB, kanal, UPN, bucaq, miter, bucaqlı kəsim, uc-uca birləşmə, kəsmə, son qapaq, künc lövhəsi, kəsim siyahısı
from: 59071e5a
---

**Konstruktiv element** seçdiyiniz eskizlərin hər xətti boyunca polad profil qoyur. Çərçivəni xətt kimi çəkin (hər xətt bir elementdir), sonra profili seçin: elementlər qurulur, künclər kəsilib uzadılır və kəsim siyahısı hər parçanı nə qədər və hansı bucaqla kəsmək lazım olduğunu göstərir.

## Çərçivə yaratmaq

1. Eskizdə çərçivəni xətt kimi çəkin, məsələn üst müstəvidə düzbucaqlı. Köməkçi kimi işarələnmiş xətlər buraxılır.
2. Eskiz seçilmiş halda {{ui:Daha çox}} › {{ui:Konstruktiv element}} seçin. Eskizin hər xətti bir element alır.
3. Paneldə profilin **Ailə** və **Ölçü**sünü seçin. Ailələr AISC cədvəlləridir (W, S, C, L, HSS borular, Boru) və EN 10365 (IPE, HEA, HEB, UPN).

### 3D-də çərçivə

Bir neçə eskizin xətləri bir çərçivə yaradır: yuxarıdakı müstəvidə çəkilmiş üst düzbucaqlı və şaquli dayanan müstəvilərdə çəkilmiş ayaqlar uclarında 3D-də birləşir. Paneldə **Xətlər boyunca** altında elementlərin izlədiyi hər eskizi işarələyin. Bir mikrometr daxilində birləşən uclar qoşulur.

## Profili onun xəttində təyin edin

- **Fırlat (°)** profili öz xətti ətrafında fırladır. Şüa dərinliyi şaquli dayanır (şaquli elementdə dərinliyi önə doğru yönəlir).
- **Xətt üzərində** profilin xəttə hansı nöqtəsinin oturacağını seçir: mərkəz, ya da profil konturunun künci və ya tərəfinin ortası. "Aşağı orta" çərçivəni eskiz müstəvisinin üzərində qoyur, içindən keçirmir.

## Künclər və birləşmələr

| Elementlər harada birləşir | Nə baş verir |
|---|---|
| İki element uc-uca, **Künclər: Bucaqlı** | Hər ikisi onların arasındakı müstəvidə kəsilir, şəkil çərçivəsi kimi |
| İki element uc-uca, **Künclər: Uc-uca** | Birinci element ikincinin arxa üzünə qədər gedir; ikinci birinci elementin ön üzünə görə düz kəsilir |
| Element başqa elementin ortasında bitir (T) | Digər elementin xarici tərəfinə uyğun kəsilir |
| Üç və ya daha çox bir nöqtədə bitir | Birinci element digərlərini keçərək düz uzanır; digərləri ona uyğun kəsilir |

Birinci element xətti əvvəl gələn elementdir: xətlər çəkildiyi sırasını saxlayır, eskizlər isə işarələndikləri sıra ilə.

## Son qapaqlar və künc lövhələri

- **Son qapaqlar** hər azad ucu profilin konturu ilə lövhə ilə bağlayır; təyin etdiyiniz qalınlıqda, ucun xaricində.
- **Künc lövhələri** iki elementin bucaq altında birləşdiyi hər künc nöqtəsinə üçbucaq lövhə qoyur: künclərdən hər elementdə **Künc lövhəsinin ölçüsü**, eninə **Künc lövhəsinin qalınlığı**, künc müstəvisi üzərində mərkəzləşdirilmiş.

## Kəsim siyahısı

Panel hər parçanı siyahıya salır, eyni parçalar qruplaşdırılır: profil, uzunluq (uzun nöqtədən uzun nöqtəyə, mişarla necə işarələdiyiniz kimi), hər ucun necə kəsildiyi (düz, düzdən bucaq və ya yerinə uyğun kəsilmiş) və hansı elementlərə aid olduqları. Son qapaqlar və künc lövhələri ölçüləri ilə siyahıya salınır. {{ui:Kəsim siyahısını saxla (CSV)}} onu cədvəl proqramı üçün saxlayır.

Yuvarlaq künclü boruya uyğun kəsilmiş element o borunun künc radiusuna bir az daxil olur, buna görə onun uzun nöqtə üzrə uzunluğu üz arasındakı boşluqdan bir neçə mm çox olur.

## Məhdudiyyətlər

- Elementlər yalnız düz xətləri izləyir; eskizdəki qövslər və splaynlar buraxılır.
- Birləşmələr kəsilir, qaynaqlanmır: qaynaq xətti çəkilmir və çərçivə bir cisimdir.
- Profillər cədvəlin ölçülərindən çəkilir: W profilləri kök yuvarlaqlaşdırması ilə, S və kanallar paralel flanşlarla, borular künc radiusu ilə. Deşiklər, uc hazırlıqları və qaynaq boşluqları sizin üçün edilmir.
- Konstruktiv elementlər mesh nüvəsi ilə qurulur. Dəqiq nüvə açıq olduqda (yalnız tərtibatçılar üçün) bunu bildirir və qurulmur.
