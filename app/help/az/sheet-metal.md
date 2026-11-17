---
title: Təbəqə metal: flanşlar və düz şablon
summary: Təbəqə metal detalını eskizdən başladın (düz lövhə və ya əyilmiş profil), qalınlığını, əyilmə radiusunu və K-faktorunu bir dəfə təyin edin, kənarlarından flanşları əyilmə boşluqları ilə yuxarı əyin və kəsmək üçün DXF kimi düz açın.
keywords: düz şablon, açmaq, açılış, açılmış uzunluq, əyilmə payı, əyilmə xətti, lazer üçün DXF, lazerlə kəsmə, təbəqə metal, baza flanşı, kənar flanşı, flanş, əyilmə, əyilmə radiusu, k-faktor, k faktor, qalınlıq, ölçü, əyilmə boşluğu, əyilmiş təbəqə
from: 144bd0f6
---

:::note
**Bu versiyada hələ qurulmayıb.** Təbəqə metal dəqiq həndəsə nüvəsi tələb edir, bu PartCraft versiyasında yoxdur: o hər detalı tor nüvəsi ilə qurur. [Hələ qurulmayanlar](topic:not-built-yet) nə etmək lazım olduğunu deyir. Bu səhifənin qalanı onu dəqiq nüvə ilə işlədiyi kimi təsvir edir.
:::

Təbəqə metal detalları **Baza flanşı** ilə başlayır. O bütün detal üçün təbəqəni təyin edir: onun **qalınlığı**, **daxili əyilmə radiusu** və **K-faktoru**. Ondan sonrakı hər **Kənar flanşı** həmin ədədlərlə əyilir, ona görə detal açıla bilən bir təbəqə olaraq qalır. Hər ikisi **dəqiq nüvə** tələb edir (bax [Tor nüvəsi](topic:solid-kernels)).

## Baza flanşı ilə başlayın

1. Eskiz çəkin. Düz lövhə üçün **bağlı kontur** istifadə edin (düzbucaqlı və ya deşiklərlə istənilən bağlı kontur). Təbəqənin kənar görünüşü kimi çəkilmiş L, U və ya Z üçün **bir açıq xətt zənciri** istifadə edin.
2. Xüsusiyyət tarixçəsində eskizi seçin.
3. Xüsusiyyətlər qrupunda {{ui:Daha çox}} açın və {{ui:Baza flanşı}} seçin.

Sağ paneldə:

- **Qalınlıq (mm)** təbəqənin ölçüsüdür.
- **Əyilmə radiusu (mm)** hər əyilmənin daxili radiusudur. 0 kəskin daxili künc verir; xarici hissə yenə bir qalınlıq radiusu ilə döner.
- **K-faktor** neytral qatın təbəqənin daxilində harada yerləşdiyini bildirir: 0 (daxili üz) ilə 0.5 (orta) arasında. Düz açıldıqda təbəqənin nə qədər uzun olduğunu təyin edir. Standart 0.44-dür; emalatxananız və ya material təchizatçınız öz dəyərini verə bilər.
- **Dərinlik (mm)** əyilmiş profilin eskiz müstəvisindən nə qədər getdiyidir. Lövhə üçün nəzərə alınmır.
- **Əyilmələrdən kənar qalınlıq**: açıq profil təbəqənin bir üzüdür. Standart olaraq qalınlıq birinci əyilmənin daxili tərəfinə düşür, buna görə çəkdiyiniz xətlər kanalın xarici tərəfidir. Onu işarələsəniz xətlər daxili tərəfə düşür. Cavab hansı ucdan çəkdiyinizdən asılı olmayaraq eynidir.

Açıq zəncirin hər küncü əyilməyə çevrilir. Əyilmələri saxlaya bilməyəcək qədər qısa xətt bunu deyir və lazım olan uzunluğu göstərir.

## Kənar flanşı əyin

1. Təbəqənin yuxarı və ya aşağı üzündə düz kənara klikləyin (uzun kənarlar, nazik olanlar yox).
2. {{ui:Daha çox}} › {{ui:Kənar flanşı}} seçin. Heç bir kənar seçilmədikdə PartCraft sizin birini klikləməyinizi gözləyir; Esc ləğv edir.

Flanş bu kənarın üzündən təbəqənin daxili radiusu ətrafında yuxarı əyilir, sonra düz gedir. Paneldə:

- **Bucaq (°)** nə qədər əyildiyidir, 1-dən 180-ə qədər. 90 kvadrat flanşdır.
- **Uzunluq (mm)** əyilmədən sonrakı düz qoldur.
- **Başqa tərəfə əy** onu digər üzdən əyir (yuxarı deyil, aşağı).
- **Başlanğıcda ofset** və **Sonda ofset** flanşı kənarın hər ucundan qısaldır.
- **Əyilmə boşluğu**: ofset olunan ucda, əyilmənin metalı orada cırmaması üçün təbəqəyə yanında yuva kəsilir. **Boşluq eni** yuvanın enini təyin edir; dərinliyi əyilmə radiusu və qalınlıqdır. Küncü kəsilməmiş saxlamaq üçün **Yox** seçin.

Kənarı sonra dəyişmək üçün paneldə {{ui:Seç}} basın və başqa birini klikləyin.

:::tip
Qalınlıq və radius üçün parametrlərdən istifadə edin (bax [Parametrlər və tənliklər](topic:parameters)) ki, ölçü dəyişdikdə bütün flanşlar eyni anda yenilənsin.
:::

## Düz açın

Hər iki panel **Düz şablon** ilə bitir. {{ui:Düzləşdir}} basın:

- Önizləmə təbəqənin açılmış halını göstərir, hər əyilmənin mərkəz xətti kəsikli.
- **Ölçü** və **Sahə** düz boşluğun ölçüləridir.
- Hər əyilmə öz istiqaməti ilə (**yuxarı** və ya **aşağı**, baza flanşının eskiz tərəfindən baxılmış), bucağı və daxili radiusu ilə siyahıda göstərilir.

Hər əyilmə onun içindən keçən təbəqənin neytral qatının uzunluğunu alır, **əyilmə payı**: bucaq (radianla) × (daxili radius + K-faktor × qalınlıq). Beləliklə, 2 mm təbəqənin 90° əyilməsi, 2 mm radius və K-faktor 0.44 ilə 4.52 mm düz təbəqə əlavə edir.

Düz lövhədə deşiklər, kəsiklər və əyilmə boşluqları düzdə olduqları yerdə göstərilir, flanşdakı deşiklər də daxil olmaqla.

Çoxunu kəsmək üçün düz şablonun altında {{ui:Vərəqlərdə yerləşdir…}} basın: bax [Düz hissələri vərəqlərdə yerləşdirin](topic:nest-flat-parts). Əyilmiş baza flanşı bir düzbucaqlı kimi açılır: açılmış uzunluğu × dərinliyi, hər künc üçün bir əyilmə xətti ilə.

{{ui:DXF saxla}} lazer, pres və ya su şlanqı üçün düz şablonu millimetrlərlə saxlayır:

- kontur **OUTLINE** qatında, xətt, qövs və çevrə kimi;
- əyilmə xətləri **BEND** qatında, kəsikli;
- hər əyilmə üzrə qeyd **BEND_NOTES** qatında, məsələn "UP 90° R2".

Hər hansı şeyi dəyişsəniz düz şablon yox olur; yenisi üçün {{ui:Düzləşdir}} yenidən basın.

:::note
Kəsməzdən əvvəl K-faktorunu emalatxananızla yoxlayın: düz hissənin uzunluğu ondan asılıdır və material, qalınlıq və alətə görə dəyişir.
:::

## Mesajlar

- **Təbəqə metal əvvəlində baza flanşı tələb edir** — heç bir baza flanşından əvvəl kənar flanşı əlavə edilib. Onu birinin altına keçirin və ya əvvəl baza flanşı əlavə edin.
- **Kənar flanşı düz kənar tələb edir** — flanşlar yalnız xətlər boyunca əyilir; əyri kənarlar hələ belə qəbul etmir.
- **Bu kənar təbəqənin qalınlığının üzündə deyil** — kənar təbəqənin yuxarı və ya aşağı üzündən başqa üzə aiddir (məsələn deşiyin divarı). Yuxarı və ya aşağı üzün kənarını seçin.
- **Ofsetlər kənardan heç nə qoymur** — iki ofset cəmi bütün kənardan və ya daha çox edir.
- **Əyilmiş baza flanşındakı kənar flanşları hələ düz açıla bilməz** — düz lövhədən başlayın və hər şeyi kənar flanşları ilə yuxarı əyin; onlar açılır.
- **Əyilmiş baza flanşından sonra edilən kəsiklər və deşiklər hələ onun düzündə göstərilmir** — əyilmiş profilin düz şablonu yalnız açılmış düzbucaqlıdır.
