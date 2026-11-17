---
title: Eskiz əlaqələri və ölçüləri
summary: PartCraft eskizinin hər əlaqəsi və ölçüsü, hər biri üçün nə seçmək, onun simvolu və həll zamanı davranışı.
keywords: əlaqələr, məhdudiyyətlər, üst-üstə düşmə, üfüqi, şaquli, paralel, perpendikulyar, toxunan, bərabər, konsentrik, orta nöqtə, sabitləmə, məsafə, üfüqi məsafə, şaquli məsafə, radius, diametr, bucaq, simvollar, qliflər
from: 9831e7be
---

Əlaqələr həndəsənin digər həndəsəyə nisbətdə necə yerləşdiyini sabitləyir. Ölçülər ölçüləri sabitləyir. Əlaqə əlavə etmək üçün Seç aləti ({{key:S}}) ilə elementləri seçin və sağ paneldə onun düyməsini seçin; ölçü əlavə etmək üçün Ölçü aləti ({{key:D}}) və ya sağ paneldəki ölçü düymələrindən istifadə edin. Onlarla necə işləmək: [Eskizi tam təyin edin](topic:relations-dimensions).

Aşağıda "əyri" çevrə və ya qövs deməkdir. Başlanğıc nöqtə də nöqtə sayılır.

## Əlaqələr

| Düymə | Simvol | Seç | Təsir |
|---|---|---|---|
| {{ui:• Üst-üstə düşmə}} | • (yalnız seçildikdə və ya problem olduqda görünür) | İki nöqtə | Nöqtələr üst-üstə düşür |
| {{ui:• Üst-üstə düşmə}} | • | Nöqtə və xətt | Nöqtə xətt üzərində (və ya onun davamında) olur |
| {{ui:• Üst-üstə düşmə}} | • | Nöqtə və əyri | Nöqtə çevrə və ya qövs üzərində olur |
| {{ui:H Üfüqi}} | H | Xətt, və ya iki nöqtə | Xətt üfüqi olur, ya da iki nöqtə eyni hündürlükdə olur |
| {{ui:V Şaquli}} | V | Xətt, və ya iki nöqtə | Xətt şaquli olur, ya da nöqtələr biri digərinin üzərində olur |
| {{ui:∥ Paralel}} | ∥ | İki xətt | Xətlər eyni istiqamətdə gedir |
| {{ui:⊥ Perpendikulyar}} | ⊥ | İki xətt | Xətlər düz bucaq altında kəsişir |
| {{ui:T Toxunan}} | T | Xətt və əyri | Xətt əyrini kəsmədən toxunur |
| {{ui:T Toxunan}} | T | İki əyri | Xarici və ya daxili olaraq, çəkildiyi kimi toxunurlar |
| {{ui:T Toxunan}} | T | Splayn və ucu ona bitişən xətt, qövs və ya splayn | Splayn həmin ucdan digər əyrinin istiqamətində çıxır |
| {{ui:= Bərabər}} | = | İki xətt | Eyni uzunluq |
| {{ui:= Bərabər}} | = | İki əyri | Eyni radius |
| {{ui:◎ Konsentrik}} | ◎ | İki əyri | Eyni mərkəz |
| {{ui:◎ Konsentrik}} | ◎ | Nöqtə və əyri | Nöqtə əyrinin mərkəzində olur |
| {{ui:M Orta nöqtə}} | M | Nöqtə və xətt | Nöqtə xəttin ortasında olur |
| {{ui:↔ Simmetrik}} | ↔ | İki nöqtə və xətt | Nöqtələr xəttə görə güzgü təsvirləridir (Güzgü bunları əlavə edir) |
| {{ui:⚓ Sabitlə}} | ⚓ | Nöqtə, xətt, əyri və ya splayn | İndiki yerində dəqiq saxlayır (splayn üçün: onun nöqtələri) |

Bu cədvəldə xətlərə mərkəz xətləri də daxildir. Çəkmək bəzi əlaqələri sizin üçün əlavə edir: nöqtəni tutmaq onu üst-üstə düşən edir, əyriyə tutmaq nöqtəni onun üzərinə qoyur, az qala üfüqi və ya şaquli xətlər H və ya V alır, düzbucaqlı isə künclərində birləşmiş dörd xətt ilə gəlir: ikisi H, ikisi V.

**Sabitlə** elementin hərəkətini tez dayandırmağın sürətli yoludur, lakin sonra detal başqa yerdə ölçü dəyişikliyini izləyə bilmir. Başlanğıc nöqtəyə olan ölçüləri üstün tutun.

## Ölçülər

| Düymə | Seç | Ölçür | Göstərilir |
|---|---|---|---|
| {{ui:Məsafə}} | Xətt | Onun uzunluğu | Məsafə 40 |
| {{ui:Məsafə}} | İki nöqtə | İkisi arasındakı düz məsafə | Məsafə 40 |
| {{ui:Məsafə}} | Nöqtə və xətt | Nöqtədən xəttə, ona perpendikulyar olaraq məsafə | Məsafə 40 |
| {{ui:Məsafə}} | İki paralel xətt | Aralarındakı boşluq | Məsafə 40 |
| {{ui:Üfüqi məsafə}} | İki nöqtə, ya da xətt | Yalnız sol-sağ məsafə | Üfüqi məsafə 40 |
| {{ui:Şaquli məsafə}} | İki nöqtə, ya da xətt | Yalnız yuxarı-aşağı məsafə | Şaquli məsafə 40 |
| {{ui:Radius}} | Çevrə və ya qövs | Onun radiusu | Radius R10 |
| {{ui:Diametr}} | Çevrə və ya qövs | Onun diametri | Diametr ⌀20 |
| {{ui:Bucaq}} | Paralel olmayan iki xətt | İki xətt arasındakı bucaq, 0-dan 180 dərəcəyə qədər | Bucaq 30° |

Ölçü aləti ilə PartCraft nəyə klik etdiyinizdən və rəqəmi harada yerləşdirdiyinizdən növü seçir:

| Klik edirsiniz | Alırsınız |
|---|---|
| Bir xətt | Onun uzunluğu; maillli xətt üçün rəqəm xəttin üstündə və ya altındadırsa üfüqi, yanındadırsa şaquli |
| Bir çevrə | Diametr |
| Bir qövs | Radius |
| İki nöqtə | Məsafə; maillli xətt kimi üfüqi və ya şaquli |
| Nöqtə və xətt | Nöqtədən xəttə məsafə |
| İki xətt | Bucaq, ya da paraleldirsə məsafə |
| Nöqtə və çevrə | Heç nə: "Bu elementləri birlikdə ölçmək olmaz." Bunun əvəzinə çevrənin mərkəz nöqtəsinə ölçü verin |

**Ofset** (məsafə kimi göstərilir) Ofset aləti ilə yaradılır: kopyalanmış xətti həmin məsafədə paralel saxlayır, ya da kopyalanmış qövs və ya çevrəni həmin qədər böyük və ya kiçik radiusla konsentrik saxlayır. Eyni ofsetin digər hissələri **O** əlaqəsi daşıyır və bir Ofset ölçüsünü izləyir. Bax: [Splaynlar, kəsmə, ofset və digər eskiz alətləri](topic:sketch-tools).

Ölçü qiymətləri mm (və ya dərəcə) ilə verilir və heç vaxt mənfi olmur. Radius və diametr sıfırdan böyük olmalıdır. Məsafələr üçün 0 qəbul olunur: 0 məsafədəki iki nöqtə üst-üstə düşür.

## Həll necə davranır

- **Ən az hərəkət.** Dəyər dəyişəndə həlledici həndəsəni mümkün qədər az hərəkət etdirir. Uzunluğu dəyişən xəttin heç bir ucu sabitlənmiyibsə, hər iki ucundan bərabər uzanır.
- **Dönmə yoxdur.** Nöqtədən xəttə məsafələr, üfüqi və şaquli məsafələr, bucaqlar və toxunma yarandıqları tərəfi yadda saxlayır. Dəyəri dəyişmək həndəsəni digər tərəfə çevirmir.
- **Ziddiyyətlər hər şeyi olduğu kimi saxlayır.** Əlaqələr bir-birinə zidd olarsa, eskiz dəyişmədən qalır və ziddiyyət yaradan əlaqələr qırmızı olur.
- **Artıq əlaqələr** (başqalarından alınan) status panelində adlandırılır ("artıq nəzərdə tutulub. Onu silin.") və element yenə qurulur, lakin xəbərdarlıqla.
- **Toxunan birləşmələr.** Yuvarlaqlaşdırma qövsü ortaq ucda xətlərə birləşdikdə toxunma həmin nöqtədə yaxşı müəyyən olunmuş formada həll olunur, buna görə eskiz yuvarlaqlaşdırmaları həddən artıq təyin olunmuş kimi görünmür.

## Hələ mövcud deyil

Kollinear, koradial və deşmə əlaqələri; splayn üzərində nöqtə; idarə olunan (istinad) ölçülər; ordinat və qövs uzunluğu ölçüləri; ölçülər arasında tənliklər. Kollinear xətlər üçün Paralel və 0 məsafəsindən istifadə edin.
