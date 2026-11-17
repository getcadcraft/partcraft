---
title: Əyri şəbəkəsi ilə səthlər (Qordon səthi)
summary: Eskizlərdə çəkilmiş və ya model kənarlarından götürülmüş profil və bələdçi əyriləri şəbəkəsi boyunca bir hamar səth yaradın, profillər bağlı olduqda onu bərk cismə bağlayın və nəyin dəqiq, nəyin uyğunlaşdırılmış olduğu və şəbəkə uyğun gəlmədikdə mesajlar.
keywords: tangens, g1, tangens davamlılığı, güzgü müstəvisi, qordon səthi, əyri şəbəkəsi, sərhəd səthi, şəbəkə səthi, profillər, bələdçilər, bələdçi əyriləri, bələdçi relsləri, qabıq, transfinite, coons, b-spline səthi, sərbəst forma
from: ada3cb8b
---

:::note
**Bu versiyada hələ qurulmayıb.** Qordon səthi dəqiq həndəsə nüvəsi tələb edir; bu PartCraft versiyasında belə nüvə yoxdur: o, hər detalı şəbəkə nüvəsi ilə qurur. [Hələ qurulmayanlar](topic:not-built-yet) nə etmək lazım olduğunu izah edir. Səhifənin qalan hissəsi onu dəqiq nüvə ilə işlədiyi kimi təsvir edir.
:::

**Qordon səthi** şəbəkənin hər əyrisindən keçən bir səthdir: bir istiqamətdə uzanan **profillər** çoxluğu və digər istiqamətdə uzanan **bələdçilər** çoxluğu, torun sapları kimi kəsişir. Gəmi gövdəsini, qanadı və ya dəstəyi birbaşa idarə etdiyiniz bir neçə kəsik əyrisindən belə formalaşdırırsınız. Ona **dəqiq nüvə** lazımdır (bax: [Şəbəkə nüvəsi](topic:solid-kernels)).

## Şəbəkəni çəkin

1. **Profilləri** çəkin: yan-yana uzanan iki və ya daha çox əyri, məsələn, paralel müstəvilərdəki kəsiklər. Xətlər, qövslər, dairələr və splaynlar hamısı işləyir, uc-uca birləşmiş əyri zənciri bir əyri sayılır.
2. **Bələdçiləri** çəkin: profilləri kəsən iki və ya daha çox əyri. Hər bələdçi hər profili bir dəfə, hər profil isə hər bələdçini bir dəfə kəsməlidir.
3. Əyrilərin həqiqətən görüşməsini təmin edin. Bələdçinin eskizini elə çəkin ki, əyrisi profillərin nöqtələrindən keçsin (proyeksiya nöqtələrinə yapışdırın və ya koordinatları yazın). Şəbəkə **Tolerantlıq** dəyərinə qədər boşluqları qəbul edir (əvvəlcə 0.01 mm).

Bir eskiz bir neçə əyri saxlaya bilər: onun içindəki hər ayrı zəncir öz əyrisidir. Məsələn, bütün bələdçiləri üst müstəvidə bir eskizdə çəkə bilərsiniz.

## Səthi yaradın

1. Xüsusiyyətlər qrupunda {{ui:Daha çox}} seçin, sonra {{ui:Qordon səthi}}.
2. PartCraft hələ heç kəs tərəfindən istifadə olunmayan eskizləri götürür: birincinin müstəvisinə paralel müstəvidəkilər **profillər** olur, qalanları **bələdçilər**. Sağdakı siyahını yoxlayın və hər eskizi **Profillər**, **Bələdçilər** və ya **İstifadə olunmur** olaraq təyin edin.
3. Detalın kənarlarını istifadə etmək üçün **Kənarları profil kimi seç** (və ya **bələdçi kimi**) düyməsinə klikləyin, baxışda kənarlara klikləyin, sonra Esc basın.

Nəticə **səth cismi** olur. {{ui:Qalınlaşdır}} onu bərk cismə çevirir, {{ui:Tikmə}} onu digər səthlərə tikir və {{ui:Səthi kəs}} onu kəsir.

### Bərk cismə bağlayın

Profillər qapalı əyrilər olduqda (dairələr, qapalı splaynlar, qapalı zəncirlər) və birinci və sonuncu profil hər biri müstəvidə düz yatdıqda **Bərk cismə bağla** qutusunu işarələyin. Uclar düz üzlərlə örtülür və qapalı forma digər xüsusiyyətlər kimi birləşir, kəsilir, kəsişir və ya yeni cisim olur. Bələdçi əyrilərini izləyən loft belə yaradılır. Qapalı bələdçilərlə də eyni işləyir.

## Kənar boyunca müstəviyə toxunan

Qordon səthi öz əyrilərindən keçir, lakin tək başına qarşılaşdığı şeyin meyli ilə uyğun gəlmir. Onu güzgü müstəvisi kimi müstəviyə kənardan **toxunan** (G1) çıxarmaq üçün, beləliklə əks olunmuş surət qırışsız birləşsin, ya da böyüdüyü düz üz üçün:

1. Qordon xüsusiyyətini seçin. **Toxunan** altında {{ui:Müstəvi əlavə et…}} siyahısından müstəvi seçin (Ön, Üst, Sağ və ya istinad müstəvisi), ya da baxışda düz üz seçin və {{ui:Seçilmiş düz üzü əlavə et}} düyməsinə basın.
2. PartCraft şəbəkənin həmin müstəvidə yerləşən sərhəd əyrisini tapır və səth onu müstəviyə toxunan şəkildə tərk edir.

Əgər müstəvi iki sərhəd əyrisini saxlayırsa (hər iki ucun altındakı döşəmə), onu iki dəfə əlavə edin: hər surət növbəti əyrini götürür. Dörd müstəviyə qədər, hər kənar üçün bir.

Hesabat hər müstəvinin səthi hansı əyri boyunca toxunan etdiyini və səthin bundan əvvəl həmin müstəviylə qarşılaşdığı ən dik bucağı bildirir. Həmin əyridən artıq müstəviyə toxunan çıxan bələdçilər dəqiq izlənir. Ondan uzaqlaşan bələdçilər kənara yaxın dar zolaqda əyilir və hesabatdakı "hər əyrini bu qədər izləyir" rəqəmi nə qədər olduğunu göstərir: dəqiq uyğunluq üçün bələdçiləri kənardan düz çıxarın.

## Nə dəqiqdir və nə uyğunlaşdırılıb

Panel bunlardan hansının tətbiq olunduğunu və səthin əyrilərinizdən nə qədər kənarlaşdığını bildirir.

- **Dəqiq**: hər əyri polinom olduqda (xətlər, splaynlar və onların zəncirləri) və bələdçilər bütün profilləri eyni parametrlərdə kəsdikdə, səth həmin əyrilərin dəqiq Qordon səthidir. Bikubik səthdən kəsilmiş izo əyrilər şəbəkəsi həmin səthi geri qaytarır, dörd düz xətt isə düz və ya burulmuş (bilineyn) yama verir.
- **Uyğunlaşdırılmış**: qövslər, dairələr və detalın kənarları polinom deyil və fərqli parametrlərdə kəsişən əyrilər kəsişmələr üst-üstə düşsün deyə yenidən vaxtlandırılmalıdır. Həmin əyrilər şəbəkənin ölçüsünün on milyonda birinə qədər kub B-spline ilə uyğunlaşdırılır (100 mm detal üçün təqribən 0.00001 mm). Qövslərdən və xətlərdən düzəldilmiş silindr yaması əsl silindrdən 0.00001 mm daxilində qalır.

Əyrilər arasında səth üsulun verdiyi nədirsə odur: profillər boyunca qarışdırılmış, üstəlik bələdçilər boyunca qarışdırılmış, çıxılmaqla onların kəsişmə nöqtələrinin qarışığı. Əyrinin iti küncü olan yerlər istisna olmaqla hər yerdə hamardır. İki Qordon səthi sərhəd əyrisini paylaşdıqda kənar-kənara birləşirlər (G0), toxunan deyil.

## Şəbəkə uyğun gəlmədikdə

| Mesaj | Nə etmək lazımdır |
|---|---|
| "… kəsişmir: onlar 0.4 mm aralı keçir" | Həmin profil və bələdçini kəsişdirin, ya da Tolerantlığı artırın |
| "… 2 dəfə kəsişir" | Bələdçi hər profili yalnız bir dəfə kəsə bilər: dövrə edən əyrini bölün, ya da az profil istifadə edin |
| "… fərqli sırada" və ya "özü üzərinə qatlanır" | İki bələdçi bir-birini kəsir (ya da iki profil). Qruplar yan-yana uzanmalıdır |
| "ən azı iki profil və iki bələdçi" | Əyri əlavə edin, ya da daha çox eskizi Profillər və ya Bələdçilər olaraq təyin edin |
| "açıq və qapalı əyriləri qarışdırır" | Bütün profilləri açıq və ya hamısını qapalı edin (bələdçilər üçün də eyni) |
| "Uc … düz deyil, ona görə örtülə bilməz" | Birinci və sonuncu qapalı profili hər biri bir müstəvidə çəkin, ya da Bərk cismə bağla-nı söndürün |

## Məhdudiyyətlər

- Hər şəbəkə üçün bir B-spline üzü: qonşu səthlərə G1 və ya G2 toxunma yoxdur.
- Qapalı şəbəkənin tikişi birinci bələdçidə kənar-kənara birləşir, lakin toxunan deyil.
- Loft xüsusiyyətinin özündə bələdçi relsləri yoxdur; onun yerinə bərk cismə bağlanmış Qordon səthindən istifadə edin.
- Çox dalğavari əyrilər, ya da bir əyri boyunca kəsişmələrin digərinə nisbətən çox qeyri-bərabər aralanması uyğunlaşdırmaq üçün çox nöqtə tələb edə bilər; xüsusiyyət bunu bildirir.
