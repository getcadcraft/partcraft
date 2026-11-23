---
title: 3D səth emalı: paralel və scallop
summary: Modelin bütün əyri səthini kürəvi, künclü və ya düz freza ilə, istənilən bucaqda paralel xətlərlə və ya bir-birindən müəyyən məsafədə olan keçidlərlə emal edin, beləliklə aralarındakı silsilələr sizin istədiyiniz hündürlükdə qalsın. Trayektoriyaların nəyə zəmanət verdiyi və nəyə vermədiyi.
keywords: 3d səth emalı, səth emalı, paralel, raster, scallop, sabit scallop, silsilə, kürəvi freza, künclü freza, səth, tolerans, addım, meyl, saxlanılacaq material, drop cutter, həddən artıq kəsmə
from: 942d2341
---

İstehsal bölməsində iki əməliyyat alət şaquli saxlanılmaqla (üç ox) **modelin bütün səthini** kəsir. Onlar seçim tələb etmir: yuxarıdan görünən modelin hamısı ilə işləyirlər. Əvvəlcə detalı kobud emal edin (uyğunlaşan və ya cib); kəsilməmiş material üzərində səth emalı keçidi dərin kəsəcəyi barədə xəbərdarlıq edəcək.

## Paralel

Modelin üzərindən qurduğunuz **bucaq** ilə düz xətlər, bir-birindən **yan addım** (alət diametrinin bir hissəsi) məsafəsində çəkilir. Hər xətt səthi izləyir: alətin ucu elə yüksəklikdə olur ki, freza heç bir hissəsi ilə modelin altına düşməsin; xətt səthin əyildiyi yerdə daha incə kəsilir. **Zig-zag** açıq olduqda, alət xətlər arasında təhlükəsiz olduğu yerdə (hərəkət boyunca yoxlanılır) materialda qalır; əks halda qalxır.

- **Tolerans**: xəttin düz hissəsi həqiqi uc yüksəkliyindən nə qədər uzaq ola bilər (onun yarısı hər hissənin ortasında hədd kimi istifadə olunur). Standart 0,01 mm.
- **Yalnız səth … və … (°) arasında olduqda**: yalnız dayaz və ya yalnız dik sahələri emal edin. Səth diapazondan kənarda olan yerdə xətt buraxılır və alət qalxır.
- **Saxlanılacaq material**: model bu məsafə qədər ofset olunur (freza bu qədər böyüdülmüş sayılır: kürəvi və künclü alətlər üçün dəqiqdir; düz alət ən azı bu qədər material saxlayır).
- **Dib**: bu z-dən aşağı heç nə kəsilmir.

## Scallop

Keçidlər səth üzərində bir-birindən sabit məsafədə olur, beləliklə iki qonşu keçid arasında qalan silsilə (scallop) sizin istədiyiniz **hündürlükdə** olur. Məsafə hündürlükdən və kürənin radiusundan alınır: s = 2·√(2·R·h − h²); məsələn, Ø6 kürə və 0,02 mm silsilə üçün keçidlər arası təxminən 0,69 mm-dir. Künclü alət öz künc radiusundan istifadə edir. Düz freza qəbul edilmir: onun ölçüləndiriləcək silsiləsi yoxdur.

Keçidlər **modelin kənarından, içəriyə doğru** və ya **yuxarısından, aşağıya doğru** başlayır. Onlar səth üzərində məsafənin konturlarıdır (hündürlüyün yox), ona görə meyl üzərində planda bir-birinə yaxın, düzlükdə isə geniş aralıdırlar. Məsafə səth üzərindəki şəbəkədə ölçülür və təxminən 1 % dəqiqliyə malikdir; silsilə hündürlüyü səth düz və ya yavaş əyri olan yerdə dəqiqdir, sürətlə əyildiyi yerdə isə təxminidir. **Climb** səthin yüksək tərəfini freza üçün sağda saxlayır.

## Trayektoriyaların keyfiyyəti

Testlər bunları yoxlayır: qapalı düsturlarla və ya freza izinin müstəqil kobud axtarışı ilə:

- Alətin altındakı uc yüksəkliyi kürə, künclü və düz alət üçün mesh-in üzlərində, kənarlarında və künclərində dəqiqdir və heç vaxt həqiqi hündürlükdən yuxarı deyil; paralel xətlər üçün trayektoriya tolerans daxilində qalır, ondan dərin həddən artıq kəsmə olmur.
- Əyilmiş müstəvidə trayektoriya uzunluqları qapalı düsturla üst-üstə düşür; müstəvidə scallop keçidləri istənilən məsafədə aralı olur və aralarındakı silsilə istənilən hündürlükdə alınır.
- Material simulyasiyası keçiddən sonra heç bir həddən artıq kəsmə göstərmir və qalan silsilələri göstərir.

Bu trayektoriyalar nə deyil: onlar əsas səth emalı keçidləridir, istehsal sisteminin təklif etdiyi hər şey deyil.

- Hələ qurulmayıb: su xətti (sabit z) ilə emal, qələm və künc təmizlənməsi, radial və spiral keçidlər, əyrinin səthə proyeksiyası, düz sahələrin aşkarlanması, tutacaq və ştanqın toqquşma yoxlanışı. Kobud emal və qalan material emalı öz əməliyyatlarıdır ([3D kobud emal və qalan material emalı](topic:rough-3d)); əyilən alət isə [5 oxlu səth emalıdır](topic:multi-axis#5-axis-finishing).
- Alətin mərkəzi modelin üzərində qalır: trayektoriyalar modelin kənarında dayanır, kənardan kənara çıxmır, ona görə kənardakı şaquli divarın dibi emal olunmur.
- Altdan kəsiklər görünmür (səth alətin yuxarıdan qarşılaşdığı şeydir).
- Model kernel-dən gələn mesh-dir, ona görə trayektoriyalar mesh-i izləyir (akor tolerantlığı detalın diaqonalının təxminən 0,0002-si qədərdir), dəqiq səthi yox.
- Böyük modeli incə tolerantlıqla emal etmək çoxlu qısa hərəkətlərdən ibarət uzun proqram yaradır. Kəsmədən əvvəl çıxışı öz dəzgahınızın simulyatorunda yoxlayın.
