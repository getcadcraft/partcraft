---
title: Detalların siyahısı, açılmış görünüşlər və hərəkət edən detallar
summary: Yığım detallarına nömrə, təsvir və material verin, material siyahısını oxuyun və yükləyin, addımlarla və ya avtomatik açılmış görünüşlər yaradın, birləşməsi olmayan detalları əl ilə köçürün, birləşmə limitləri təyin edin və bütün yığımı STL, 3MF və ya material siyahısı kimi ixrac edin.
keywords: bom, material siyahısı, detalların siyahısı, detal nömrəsi, material, sıxlıq, csv, açılmış görünüş, açma, yığcamlaşdırma, iz xətləri, detalı köçür, sürüklə, manipulyator, köçürmə, fırlat, birləşmə limitləri, yığımın ixracı, yığım addımı, yığım çertyoju, balonlar
from: ebc9f6f3
---

Bu alətlər yığımın sağ panelindədir (bax: [Birləşmələrlə yığım qurun](topic:build-assembly)).

## Detalın xassələri

Soldakı siyahıdan detal seçin. **Detalın xassələri** altında təyin edin:

- **Detal nömrəsi** (40 simvola qədər) və **Təsvir** (200 simvola qədər).
- **Material**: sıxlığı ilə birlikdə ümumi material, ya da g/cm³ ilə yazmaq üçün **Fərdi sıxlıq…**. Panel bundan sonra detalın kütləsini göstərir.

Xassələr detala aiddir, ona görə də onun hər surəti onları paylaşır. Onlar yığım faylında saxlanılır.

## Material siyahısı

Heç nə seçilmədikdə ({{key:Esc}}), panel **Material siyahısını** göstərir: hər detal üçün ayrı sətir — sıra nömrəsi, miqdar (neçə surət olduğu), detal nömrəsi, ad, material və kütlə. Sıra nömrələri detalların siyahıda ilk dəfə göründüyü ardıcıllığı izləyir. Kütlələr hər detalın həcminə (mesh nüvəsinin qurduğu üzlü cismin həcminə, dairəvi detallarda bir az aşağı) və onun materialına əsaslanır. Materialı olmayan detalın kütləsi yoxdur və bu halda ümumi cəm də yoxdur.

{{ui:CSV yüklə}} siyahını CSV faylı kimi saxlayır (həmçinin **İxrac › Material siyahısı (CSV)**). İstənilən cədvəl proqramında açılır; = və ya + ilə başlayan mətnin qabağına aparıcı apostrof əlavə olunur ki, cədvəl proqramı onu düstur kimi işə salmasın.

## Açılmış görünüşlər

Açılmış görünüş şəkillər üçün detalları bir-birindən ayırır. O, birləşmələri və detalların real yerini heç vaxt dəyişmir: saxlama, toqquşma yoxlaması və ixrac real vəziyyətləri istifadə edir.

1. Heç nə seçilmədikdə, **Açılmış görünüşlər** altında {{ui:Yeni görünüş}} seçin.
2. **Addım əlavə et** altında addımın hərəkət etdirdiyi detalları qeyd edin, **İstiqamət** seçin (+X … −Z, klik etdiyiniz üzün normalı və ya **Görünüşdə oxu sürüklə**) və **Məsafə**, sonra {{ui:Addım əlavə et}}. **Sürüklə** seçimi ilə oxu sürükləyin və buraxın: addım sürüklədiyiniz istiqaməti və məsafəni götürür.
3. Daha çox addım əlavə edin. Onlar bir-birinin ardınca oynayır.
4. Görünüşü canlandırmaq üçün **Yığılmış** və **Açılmış** arasındakı sürgünü sürükləyin. Kəsik-kəsik iz xətləri hər detalın dayanma yerindən indiki yerinə qədər uzanır.

{{ui:Avtomatik (radial)}} bərkidilmiş detaldan başqa bütün detalları yığımın mərkəzindən uzaqlaşdırır. {{ui:Avtomatik (birləşmələr)}} hər birləşdirilmiş detalı (altında birləşdirilmiş hər şeylə birlikdə) birləşmənin üz normalı boyunca çıxarır. Bir neçə adlı görünüş saxlaya bilərsiniz; **Görünüş** bölməsində birini seçin və ya detalları geri qaytarmaq üçün **Yığılmış** seçin. Görünüşlər yığım faylında saxlanılır.

## Detalı əl ilə köçürün

Əl ilə yalnız bərkidilmiş detala birləşməsi olmayan detal köçürülə bilər (bərkidilmiş detal sabitdir; qalanlarını birləşmələr yerləşdirir). Onu seçin və **Əl ilə köçür** altında:

- **ΔX, ΔY, ΔZ** yazın və {{ui:Hərəkət}} seçin, ya da ox və **Bucaq** seçib {{ui:Döndür}} seçin (detalın ortası ətrafında).
- {{ui:Köçürmək üçün sürükləyin}} detalda oxları göstərir: həmin ox boyunca köçürmək üçün oxu, müstəvidə köçürmək üçün kvadratı sürükləyin. {{ui:Döndürmək üçün sürükləyin}} onu fırlatmaq üçün halqaları göstərir. Hər sürükləmə bir geri qaytarma addımıdır. {{key:Esc}} oxları gizlədir.

## Birləşmə limitləri

Hərəkət edən birləşmə seçin və **Limitlər** altında onun istənilən dəyəri üçün **… limitləri arasında saxla** qutusunu işarələyin, sonra **Minimum** və **Maksimum** təyin edin. Hər dəyər öz limitləri daxilində saxlanılır, onun sürgüsü yalnız həmin diapazonu əhatə edir və {{ui:Hərəkət zamanı toqquşmaları yoxla}} yalnız onların arasında yoxlayır. Silindrik birləşmə bucağını, ofsetini və ya hər ikisini məhdudlaşdıra bilər. Birləşmənin tipini dəyişdikdə, yeni tipdə olmayan dəyərlərin limitləri silinir.

## Bütün yığımı ixrac edin

Yığımda **İxrac** menyusu bütün yığımı hər detalı yerləşdiyi yerdə yazır:

- **STEP AP242 / AP214** və **Çertyoj (PDF)** bu versiyada hələ qurulmayıb: onlar dəqiq nüvə tələb edir, ona görə boz rənglidir. Əvəzində hər detalın STEP-ni (dəqiq cisim) detaldan ixrac edin.
- **STL**: bütün detalların bir mesh-i. **3MF**: hər detal bir dəfə, hər surəti öz yerində yerləşdirilmiş halda.
- **Material siyahısı (CSV)**.

## Məhdudiyyətlər

- Yığım çertyoju və yığım STEP bu versiyada hələ qurulmayıb (dəqiq nüvə tələb edirlər). Açılmış görünüşlər ekranda şəkillər üçündür.
