---
title: Məsafələri, bucaqları və kütləni ölç
summary: Minimum məsafəni, bucağı və ΔX ΔY ΔZ-ni almaq üçün görünüşdə iki şeyə klikləyin; kənarın uzunluğunu, deşiyin diametrini, üzün sahəsini və ya nöqtənin koordinatlarını oxuyun; detal və ya yığımın həcmini, kütləsini, kütlə mərkəzini və ətalətini alın.
keywords: ölçmə, məsafə, minimum məsafə, bucaq, uzunluq, radius, diametr, sahə, koordinatlar, delta, yoxlama, kütlə xassələri, kütlə, çəki, kütlə mərkəzi, mərkəz, ətalət, ətalət momenti, sıxlıq, material
from: 20bda0b7
---

**Ölç** modeldə hər iş sahəsində (Dizayn, Forma, Simulyasiya, Generativ, İstehsal) və yığımda işləyir. {{ui:Görünüşlər}} menyusunda **Görünüş** qrupundadır və ya {{key:M}} basın. Görünüşün yuxarı solunda kart açılır.

## Bir şeyi ölçün

Təpəyə, kənara və ya üzə klikləyin. Kart göstərir:

- **Nöqtə** (təpə, kənar ortası və ya dairənin mərkəzi): onun X, Y, Z-i.
- **Kənar**: düz, dairəvi və ya əyri və onun uzunluğu; dairə üçün həm də radius, diametr və mərkəz.
- **Üz**: düz, silindr, konus və s., həmçinin sahəsi; düz üzün normalı; silindrin radiusu və diametri (deşiyin ölçüsü). Sahələr mesh nüvəsinin yaratdığı faset üzrədir.
- **Bütün cisim**: **Shift** basılı saxlayın və detalı klikləyin. Həcmi, sahəsini, kütləsini və ətalətini alırsınız (aşağıya bax).

Göstərici 10 piksel daxilində təpələrə, kənar ortalarına və dairə mərkəzlərinə yapışır; kiçik mavi nöqtə klikləməzdən əvvəl yapışmanı göstərir. Deşiyin mərkəzini seçmək üçün deşiyin ortasına baxın, kənarını (dairəni) seçmək üçün kənara baxın.

## İki şey arasında ölçün

İkinci elementi klikləyin. Kart əlavə edir:

- **Minimum məsafə** və iki ən yaxın nöqtə, görünüşdə aralarında xətt ilə.
- **ΔX, ΔY, ΔZ** birinci ən yaxın nöqtədən ikinciyə.
- İki düz üz arasında **bucaq** (normalları arasında, 0–180°), iki düz kənar və ya ox arasında (0–90°), ya da kənar ilə üz arasında.
- İki paralel düz üz üçün **müstəvilər arasında boşluq**, iki dairə və ya deşik üçün **mərkəzdən mərkəzə**, iki paralel deşik və ya silindr üçün **oxdan oxa**.

Üçüncü klik yeni cüt başladır. {{key:Esc}} seçimləri təmizləyir; yenidən {{key:Esc}} (və ya {{ui:Bağla}}) Ölçünü bağlayır. {{ui:Kopyala}} nəticələri tab ilə ayrılmış mətn kimi buferə qoyur, cədvəl proqramına yapışdırmaq üçün hazır.

### Nə qədər dəqiqdir

PartCraft detalı mesh nüvəsi ilə qurur, ona görə məsafələr mesh-in faset-ləri üzərində hesablanır və kart **təxmini: faset üzrə** deyir: düz üzlər və təpələr arası üçün düzgündür, əyri üzlər üçün bir qədər yanlışdır. Daha incə **Əyrilər** parametri onları yaxınlaşdırır. Həqiqi səthlərdə dəqiq ölçmə dəqiq nüvə tələb edir: bu versiyada hələ yoxdur.

## Kütlə xassələri

Kartda və ya {{ui:Görünüşlər}} menyusunda {{ui:Kütlə xassələri}} seçin. Detalda kartda **Material** seçin (polad, alüminium, plastiklər və digərləri öz adi sıxlıqları ilə). Yığımda hər detal öz xassələrində təyin olunmuş materialı istifadə edir (detalı seçin, sonra **Material**), nəticə isə bütün detallar üçündür.

Kart kütləni, həcmi, sahəni, kütlə mərkəzini, ətalət tenzorunu (Ixx, Iyy, Izz və hasillər Ixy, Iyz, Ixz, kq·mm² ilə, kütlə mərkəzi ətrafında dünya oxları üzrə) və əsas momentləri göstərir. Material olmadan eyni vahid sıxlığa görə (mm⁵) göstərir, kütlə göstərilmir.

Rəqəmlər mesh nüvəsinin qurduğu üçbucaqlanmış cisim üçün dəqiqdir (əyri üzlər faset kimi), ona görə yuvarlaq detal bir qədər az çıxır və kart bunu deyir. Material sıxlıqları tipik kitab dəyərləridir; real ərinti və ya marka bir neçə faiz fərqlənə bilər.

## Hədlər

- Keçidlər digər həndəsənin arxasında gizlənmiş nöqtəni tapa bilər; kartın nəyi dediyini yoxlayın.
- Eskiz və ya çertyoj vərəqini açdıqda, ya da iş sahəsini dəyişdikdə Ölçmə bağlanır.
