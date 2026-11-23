---
title: Bu çərçivəni yoxlayın
summary: Qaynaqlı konstruksiyanın polad elementlərini (xizək, stend, boru və kəsiklərdən çərçivə) götürün, avadanlığı ayaqlarına, dayaqları döşəməyə qoyun və AISC 360-16 və ya EN 1993 altında hər elementin və hər qaynağın nə qədər istifadə olunduğuna baxın. Mühəndis onu yoxlayana qədər köməkçi vasitə.
keywords: çərçivə, qaynaqlı konstruksiya, xizək, pump xizəyi, konstruktiv element, qaynaq, qaynaqlar, yoxla, AISC 360, EN 1993, istifadə dərəcəsi, dayaq, avadanlıq, yük, içi boş kəsik, HSS, RHS, CHS, mühəndis
from: 032e34ee
---

{{ui:Check this frame}} qaynaqlı konstruksiyanın düz polad elementlərini götürür, onlardan çərçivə qurur, altında olan polad və avadanlığın çəkisi altında həll edir və elementlərin birləşdiyi hər elementi və hər qaynağı yoxlayır. Bir işləmə, bir cədvəl.

:::warning
Bu, **mühəndis onu yoxlayana qədər köməkçi vasitədir**. Möhür deyil və keçid dizayn deyil. Elementlərin mərkəz xətlərini çəkildiyi kimi istifadə edir, hər birləşməni kəsiyin hər tərəfindən qaynaqlanmış sayır, əksini təyin etmədiyiniz halda qaynaq ayağını kəsiyin divarından (8 mm-ə qədər) götürür və bolt, lövhə, baza lövhəsi, ankerlər, yatağa təsir, blok kəsmə, yorğunluq və ya qaldırma üçün yoxlama aparmır.
:::

## Necə işə salınır

1. {{ui:Structural member}} ilə elementləri çəkin (kəsiklər kəsik cədvəlindən gəlir).
2. {{ui:Views}} › {{ui:Check this frame}} açın. Çərçivənin harada durduğunu deyin: hər ayaqda bir **dayaq** (menteşəli, bərk və ya rolik; {{ui:Pinned supports at the feet}} hər ən aşağı element ucuna bir dayaq qoyur) və onun üzərində nə durduğunu (**avadanlıq**: kütlə, ağırlıq mərkəzi, bolt-la bağlandığı nöqtələr və istəyə görə üfüqi itələmə).
3. Kodu seçin: **ASCE 7 + AISC 360-16** və ya **EN 1990 + EN 1993**. Polad markasını və AISC üçün qaynaq metalının möhkəmliyini təyin edin (482,6 MPa E70-dir).
4. {{ui:Check}} düyməsinə basın. {{ui:Save the report as CSV}} hər cədvəli yazır, əvvəl nəzərdən keçirilməyib sətri ilə.

Çərçivə millimetrlərlə oxunur, detalın şaquli oxu yuxarıda. Dayaqlar və avadanlıq nöqtələri eyni çərçivədə x y z kimi yazılır, z hündürlükdür.

Elementin ucu başqa elementin ortasına düşdükdə onu orada bölür, ayaq və ya bolt-la bağlanma nöqtəsi də elementin xəttinə düşdükdə eyni şeyi edir. Çəki bolt-la bağlanma nöqtələri üzərində bərk cisim kimi bölünür; ayaqlardan kənardakı ağırlıq mərkəzi və ya ayaqda qaldırıcı qüvvə deyilir, heç vaxt gizlədilmir.

## Nə alırsınız

- Ən çox istifadə olunan element və bir şeyin uğursuz olub-olmaması. Yoxlamanın qiymətləndirə bilmədiyi elementlər (cədvəldə olmayan kəsik, qanunda əmsalı olmayan polad) sayılır və adı çəkilir, heç vaxt keçən kimi sayılmır.
- Hər element və qaynaq qrupu üçün bir sətir: nə qədər istifadə olunur, idarə edən yoxlama və maddə, və idarə edən yük birləşməsi.
- Eyni cədvəllər hesabatda.

## Nə yoxlanılır

Içi boş kəsiklər (RHS, SHS, CHS, boru) və I-kəsiklər üçün dartılma, sıxılma, əyilmə, kəsmə və onların qarşılıqlı təsiri; künc qaynaqları və tam nüfuzlu qaynaqlar elastik vektor metodu ilə. Divarların sıxlığı yalnız içi boş kəsiklər üçün əyilmədə yoxlanılır; nazik divarlar yoxlanılmadığı kimi deyilir. Bəzi sabitlər standartlardan yazılıb və hələ çap olunmuş nüsxə ilə müqayisə edilməyib; hesabat hər mənbəni sadalayır.

Elementləri çəkmək və onların kəsik siyahısı üçün bax [Polad kəsiklərdən çərçivələr](topic:structural-members).
