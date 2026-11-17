---
title: 3D yekun emal: paralel və skallop
summary: Bütün modelin əyri səthini kürə, burun-yumru və ya düz son frez ilə emal edin: istənilən bucaqda paralel xətlərlə və ya aralarında təyin olunmuş məsafədə keçidlərlə, beləliklə aralarındakı silsilələr istədiyiniz hündürlükdə qalır. Yolların nəyi təmin etdiyi və nəyi etmədiyi.
keywords: 3d yekun emal, yekun emal, paralel, rastr, skallop, sabit skallop, silsilə, kürə burun, burun-yumru, səth, tolerans, addım, yamac, saxlanılacaq material, drop cutter, oyulma
from: e1587d0a
---

Manufacture-də iki əməliyyat alətin şaquli (üç ox) saxlanılması ilə **bütün modelin səthini** kəsir. Onlar seçim tələb etmir: yuxarıdan görünən bütün modeli işləyirlər. Əvvəl hissəni kobudlaşdırın (adaptiv və ya cib); yuxarıdan kəsilməmiş material üzərində yekun emal keçidi çox dərin kəsəcəyi barədə xəbərdarlıq edir.

## Paralel

Modeldən keçən düz xətlər, təyin etdiyiniz **bucaqda**, **addım** aralı (alət diametrinin bir hissəsi). Hər xətt səthi izləyir: alətin ucu lazım olduğu qədər yüksəkdə olur ki, kəsicinin heç bir hissəsi modelin altına düşməsin, və xətt səth əyildiyi yerdə daha incə kəsilir. **Zig-zag** açıq olduqda alət xətlər arasında təhlükəsiz yerlərdə aşağıda qalır (hərəkət boyunca yoxlanılır); əks halda qalxır.

- **Tolerans**: xəttin düz hissəsi həqiqi ucu hündürlüyündən nə qədər uzaqda ola bilər (onun yarısı hər hissənin ortasında hədd kimi istifadə olunur). Defolt 0.01 mm.
- **Yalnız səth … -dan və … -a qədər olan yerdə (°)**: yalnız dayaz və ya yalnız dik sahələri emal edin. Səth diapazondan kənarda olduqda xətt buraxılır və alət qalxır.
- **Saxlanılacaq material**: modelin həmin məsafə ilə ofseti (kəsici o qədər böyüdülür: kürə və burun-yumru alətlər üçün dəqiq; düz alət ən azı o qədər saxlayır).
- **Dib**: bu z-dən aşağı heç nə kəsilmir.

## Skallop

Səth üzərində bir-birindən sabit məsafədə olan keçidlər, beləliklə iki qonşu keçid arasında qalan silsilənin (skallop) istədiyiniz **hündürlüyü** olur. Məsafə hündürlükdən və kürənin radiusundan çıxır: s = 2·√(2·R·h − h²); məsələn Ø6 kürə və 0.02 mm silsilə üçün keçidlər arasında təxminən 0.69 mm. Burun-yumru alət öz künc radiusunu istifadə edir. Düz son frez rədd edilir: ölçüsü təyin ediləcək silsiləsi yoxdur.

Keçidlər **modelin kənarından, içəriyə** və ya **yuxarısından, aşağıya** başlayır. Onlar səth üzərindəki məsafənin konturlarıdır (hündürlüyün yox), buna görə yamacda planda yaxındırlar, düzlükdə isə geniş aralıdırlar. Məsafə səth üzərindəki şəbəkədə ölçülür və təxminən 1 % dəqiqdir; silsilə hündürlüyü səth düz və ya yavaş əyildikdə dəqiqdir, sürətlə əyildiyi yerdə isə təxminidir. **Climb** (yuxarı frezələmə) səthin yüksək tərəfini kəsicinin sağında saxlayır.

## Yolların nə qədər yaxşı olduğu

Testlər nəyi yoxlayır: qapalı düsturlarla və ya kəsicinin ayağının müstəqil kobud-qüvvə axtarışı ilə:

- Alətin altındakı ucun hündürlüyü kürə, burun-yumru və düz alət üçün mesh-in üzlərində, kənarlarında və künclərində dəqiqdir və heç vaxt həqiqi hündürlükdən yuxarı deyil; paralel xətlər üçün yol ona tolerans daxilində qalır, o tolerans-dan dərin oyulma yoxdur.
- Əyilmiş müstəvidə yol uzunluqları qapalı düsturla uyğundur; müstəvidə skallop keçidləri istənilən məsafədə və aralarındakı silsilə istənilən hündürlükdə çıxır.
- Stok simulyasiyası keçiddən sonra heç bir oyulma göstərmir və qalan silsilələri göstərir.

Bu yollar nə deyil: onlar əsas yekun emal keçidləridir, istehsal sisteminin təklif etdiyi hər şey deyil.

- Hələ qurulmayıb: sabit z-də xətt (waterline), qələm və künc təmizlənməsi, radial və spiral keçidlər, əyrinin səthə proyeksiyası, düz sahənin aşkarlanması, qalıq emal, tutacaq və şaft toqquşma yoxlamaları və alətin hər hansı əyilməsi.
- Alətin mərkəzi modelin üzərində qalır: yollar modelin kənarında dayanır, ondan kənara çıxmır, buna görə kənarda olan şaquli divar öz altına qədər emal olunmur.
- Undercut-lar görünmür (səth yuxarıdan alətin gördüyü şeydir).
- Model nüvədən gələn meshdir, buna görə yollar meshi izləyir (onun akor toleransı hissənin diaqonalının təxminən 0.0002-sidir), dəqiq səthi yox.
- Böyük modeli incə tolerans ilə emal etmək çoxlu qısa hərəkətli uzun proqram yaradır. Kəsməzdən əvvəl çıxışı öz maşınınızın simulyatorunda yoxlayın.
