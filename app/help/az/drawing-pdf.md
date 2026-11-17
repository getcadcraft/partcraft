---
title: Görünüşlər, kəsik və GD&T ilə çertyoj hazırlayın
summary: Çertyoj vərəqini açın, kəsik və ətraflı görünüş əlavə edin, baza, həndəsi tolerantlıq çərçivələri və səth emalı simvolları yerləşdirin, vərəq ölçüsünü seçin, ştampı və düzəlişləri doldurun və vərəqi PDF kimi ixrac edin.
keywords: deşik cədvəli, deşik xəritəsi, deşik mövqeləri, etiketlər, çertyoj, 2D çertyoj, vərəq, vərəq ölçüsü, a4, a3, a2, a1, a0, ansi, ştamp, düzəliş, düzəliş bloku, çertyoj nömrəsi, material, pdf, görünüşlər, ortoqrafik, üçüncü bucaq, izometrik, kəsik görünüşü, ətraflı görünüş, gd&t, baza, çərçivə, tolerantlıq, mövqe, düzlük, səth emalı, pürüzlülük, çap
from: 39e944c0
---

PartCraft detaldan çertyoj vərəqi yaradır: üçüncü bucaq proyeksiyasında ön, üst və sağ görünüşlər, izometrik görünüş, ümumi ölçülər və A4-dən A0-a və ya ANSI A-dan E-yə qədər vərəqdə ştamp. Bunun üzərinə kəsik, ətraflı görünüş və GD&T simvolları əlavə edə bilərsiniz. Detal dəyişdikcə vərəq yenilənir və onun parametrləri detal faylında saxlanılır.

## Çertyoj vərəqini açın

1. Detalı qurun. (Heç nə qurulmayıbsa: "Əvvəlcə bərk cisim qurun, sonra onun çertyojunu hazırlayın.")
2. Alətlər panelində {{ui:Çertyoj}} seçin.

3D görünüş vərəqlə əvəz olunur. Alətlər panelində {{ui:Baza}}, {{ui:Çərçivə}}, {{ui:Səth emalı}}, {{ui:Ətraflı}}, {{ui:PDF}} və {{ui:Geri}} göstərilir, sağ panelin başlığı **Çertyoj**-dur. Status sətri görünüşlərin necə qurulduğunu bildirir: "Çertyoj (əyrilər fasetlər kimi çəkilir). Baza, Çərçivə və Səth emalı GD&T-ni görünüşə yerləşdirir; panel kəsik və ətraflı görünüşü təyin edir." Görünüşlər mesh nüvəsinin fasetlərindən çəkildiyi üçün yuvarlaq kənarlar qısa düz parçalardır; həqiqi qövslər dəqiq nüvə tələb edir, bu versiyada isə belə nüvə yoxdur.

Vərəqdə hərəkət: təkəri fırladaraq yaxınlaşdırın, sağ və ya orta düymə ilə sürükləyərək sürüşdürün, vərəqi sığdırmaq üçün {{key:F}} basın. Vərəq fokusda olanda {{key:Plus}} və {{key:Minus}} yaxınlaşdırır, {{key:Shift}} və ox düymələri ilə sürüşdürülür.

{{ui:Geri}}, {{ui:Modelə qayıt}} seçin və ya heç nə seçilməyib, aktiv alət yoxdursa {{key:Esc}} basın ki, 3D modelə qayıdasınız.

## Vərəqdə nə var

- **Seçdiyiniz vərəq**, landşaft (başqa seçməsəniz A3), sərhəd və **ştamp** ilə: başlıq, şirkət, çertyoj nömrəsi, düzəliş, material, çəkən / yoxlayan / təsdiq edən, tarix, miqyas, vərəq ölçüsü, "Vahidlər: millimetr · Üçüncü bucaq proyeksiyası" və görünüşlərin dəqiq və ya fasetli olması.
- Düzəliş əlavə etdikdən sonra yuxarı sağ küncdə **düzəliş bloku**.
- **Ön, üst və sağ görünüşlər**: üst görünüş ön görünüşün üstündə, sağ görünüş onun sağında. Gizli kənarlar qırıq xətlə.
- Yer olduqda **izometrik görünüş**.
- **Ümumi ölçülər**: ön görünüşdə en və hündürlük, üst görünüşdə dərinlik.
- Əsas görünüşlər üçün ISO seriyasından bir **miqyas** (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), yerə sığması üçün seçilir.

## Vərəq ölçüsünü seçin

Çertyoj vərəqində, heç nə seçilmədikdə, sağ paneldə {{ui:Vərəq}} seçin: **A4, A3, A2, A1, A0** (ISO 216) və ya **ANSI A, B, C, D, E** (11 × 8.5 ilə 44 × 34 düym). Görünüşlər ən böyük sığan ISO miqyasında yenidən yerləşdirilir, buna görə böyük vərəq detalı daha böyük göstərə bilər.

## Ştampı doldurun

Sağ panelin **Ştamp** sahələri birbaşa vərəqə gedir: {{ui:Başlıq}}, {{ui:Çertyoj nömrəsi}}, {{ui:Düzəliş}}, {{ui:Şirkət}}, {{ui:Çəkən}}, {{ui:Yoxlayan}}, {{ui:Təsdiq edən}}, {{ui:Tarix}} (il-ay-gün), {{ui:Ümumi tolerantlıq}} və {{ui:Səth emalı}} (son ikisi ştampın üstündə çap olunur). Qutuya yazın və {{key:Enter}} basın və ya kənara klikləyin. Boş qutu xananı boş buraxır, bu istisnalar istisna olmaqla:

- **Başlıq** siz yazana qədər detalın adını göstərir.
- **Tarix** siz yazana qədər bu günü göstərir.
- **Düzəliş** siz yazana qədər siyahıdakı ən son düzəlişi göstərir.

**Material** detaldan gəlir: modeldə boş yerə klikləyin, sonra Detal panelində {{ui:Material}} seçin. Eyni material Ölçmə alətinin kütlə xassələri üçün sıxlıq verir.

## Düzəliş əlavə edin

**Düzəlişlər** altında {{ui:Düzəliş əlavə et}} klikləyin. Hər yeni sətir növbəti hərfi alır (A, B, C … Z-dən sonra AA) və bu günün tarixini. Nəyin dəyişdiyini və dəyişikliyi kimin etdiyini yazın. {{ui:Sil}} sətri silir. Vərəqin yuxarı sağ küncündəki düzəliş bloku onları ən köhnədən başlayaraq, 20-yə qədər siyahılayır.

Vərəq ölçüsü, ştamp, düzəlişlər və material detal faylında saxlanılır və hər dəyişiklik {{ui:Geri qaytar}}-ın bir addımıdır.

## Kəsik görünüşü əlavə edin

Detal müstəvi ilə kəsilir və kəsik ştrixlənir. Digər görünüşlər kimi, kəsik də fasetlərdən çəkilir, buna görə yuvarlaq kənarlar qısa düz parçalardır.

1. Sağ paneldə **Kəsik A-A** dəyərini **Ön görünüşdən**, **Üst görünüşdən** və ya **Sağ görünüşdən** təyin edin.
2. Kəsik vərəqdə görünür: detal materialından keçdiyi yerdə ştrixlənmiş, kəsmə xətti və "A" oxları isə götürüldüyü görünüşdə.
3. Kəsmə müstəvisini hərəkət etdirmək üçün **Kəsmə yeri (mm)** təyin edin. Başlanğıcda detalın ortasından keçir.

**Kəsik A-A**-nı **Yoxdur**-a qaytarsanız kəsik silinir.

## Ətraflı görünüş əlavə edin

1. **Ətraflı B** üçün böyüdüləcək görünüşü təyin edin (və ya alətlər panelində {{ui:Ətraflı}} seçin).
2. Həmin görünüşdə böyüdüləcək sahənin mərkəzinə klikləyin. "B" ilə işarələnmiş dairə görünür və böyüdülmüş "Ətraflı B" öz miqyasında vərəqdə görünür, məsələn "Ətraflı B (2:1)".
3. Dairənin ölçüsü üçün **Ətraflı radius (mm)** və böyütmə üçün **Ətraflı miqyas** təyin edin: vərəqin 2, 4, 5 və ya 10 qatı.

Ətraflı görünüş ön, üst, sağ və ya kəsik görünüşündən götürülə bilər, izometrikdən yox. Bütün görünüşlər üçün yer yoxdursa, panel "Vərəqdə yer yoxdur: ətraflı üçün. Ətraflını kiçiltmək və ya bir görünüşü çıxarmaq." yazır.

## Deşik cədvəli əlavə edin

Deşik cədvəli detalın deşiklərini mövqeləri ilə siyahılayır, qazma və ya CNC üçün: paneldə **Deşik cədvəli** › **Üst görünüşdən** (və ya ön, və ya sağdan) seçin.

- Həmin görünüşdə başdan görünən hər deşik yanında etiket alır: birinci ölçü üçün **A1**, **A2** … sonrakı üçün **B1** …
- Cədvəl hər etiketi, onun **X** və **Y** qiymətini millimetrlə və ölçüsünü siyahılayır: "Ø14 THRU", "Ø6.6 × 10 DEEP", genişlənmiş yuva (counterbore) və ya zenkov, ya da dişli deşiyin ip çağırışı.
- X və Y görünüşün konturunun sol-aşağı küncündən ölçülür, vərəqdə **X0 Y0** ilə işarələnib.
- Nümunələrlə yaradılan deşiklər daxildir. Görünüşə perpendikulyar olmayan deşiklər panelin sayında hesablanır və cədvəldən çıxarılır.

Cədvəl vərəqin boş sahəsinə və PDF-ə gedir.

## GD&T və səth emalı simvolları yerləşdirin

1. {{ui:Baza}}, {{ui:Çərçivə}} (həndəsi tolerantlıq çərçivəsi) və ya {{ui:Səth emalı}} (səth emalı simvolu) seçin.
2. Görünüşdə onun bağlanacağı nöqtəyə klikləyin. 2,5 mm daxilində ən yaxın çəkilmiş xəttə yapışır.
3. Simvol qılafla, seçilmiş vəziyyətdə görünür və sağ panel onun parametrlərini göstərir.

Simvolu sürükləyərək yerini dəyişin; qılaf həmişə nöqtədə qalır. Simvol seçiliykən ox düymələri onu 1 mm yerindən tərpədir. {{key:Delete}} və ya {{key:Backspace}} (və ya paneldə {{ui:Sil}}) onu silir; {{ui:Hazırdır}} və ya {{key:Esc}} seçimi ləğv edir. Hər dəyişiklik geri qaytarma siyahısındadır.

### Baza

**Hərf**: A-dan Z-yə, I, O və Q olmadan (onlar 1, 0 və O kimi oxunur). Hər yeni baza növbəti boş hərfi alır.

### Həndəsi tolerantlıq çərçivəsi

| Parametr | Seçimlər |
|---|---|
| **Tolerantlıq** | Düzxətlilik, Düzlük, Dairəvilik, Silindrikilik, Xəttin profili, Səthin profili, Perpendikulyarlıq, Bucaqlılıq, Paralellik, Mövqe, Konsentriklik, Simmetriya (ikisi Y14.5-2018-də silinib və bu qeyd olunur), Dairəvi bitmə, Tam bitmə |
| **Zona (mm)** | Tolerantlıq qiyməti, defolt 0.1 |
| **Diametr zonası (⌀)** | Silindrik zonası olan xarakteristikalar üçün; Mövqe üçün defolt olaraq açıqdır |
| **Material** | RFS (yoxdur), MMC (Ⓜ), LMC (Ⓛ), xarakteristika icazə verdikdə |
| **Birinci / İkinci / Üçüncü baza** | Üç baza hərfinə qədər, hər biri icazə verilən yerdə **… modifikator** (MMB, LMB) ilə |

PartCraft çərçivəni ASME Y14.5 qaydalarına görə yoxlayır və panelin yuxarısında nə səhv olduğunu deyir, məsələn "Düzlük forma tolerantlığıdır: baza istinadları qəbul etmir." və ya "Mövqe üçün ən azı bir baza istinadı lazımdır." **Oxunuşu** sətri çərçivəni sözlə izah edir.

### Səth emalı

| Parametr | Seçimlər | Defolt |
|---|---|---|
| **Ra (µm)** | Orta pürüzlülük | 1.6 |
| **Proses** | istənilən proses, emal, material çıxarılmadan | emal |
| **Qeyd** | 40 simvola qədər, məsələn istiqamət və ya proses | |

Heç nə seçilmədikdə panel **Vərəqdəki qeydlər** siyahılayır, hər birinin yanında **Seç**.

## PDF ixrac edin

Alətlər panelində {{ui:PDF}}, paneldə {{ui:PDF ixrac et}} seçin və ya modeldən {{ui:İxrac}}, sonra {{ui:Çertyoj (PDF): görünüşlər, kəsik, detal, GD&T}} seçin. PDF `<part name> - drawing.pdf` kimi yüklənir və status sətri onun üzərində nə olduğunu siyahılayır.

Miqyasın düz qalması üçün onu vərəqin ölçüsündə kağıza **Faktiki ölçü** ilə çap edin.

## Məhdudiyyətlər

| Hələ qurulmayıb | Bunu indi edin |
|---|---|
| Üç ümumi ölçüdən başqa ölçülər | Onları PDF-də işarələmə proqramı ilə əlavə edin, və ya eskizi və ya üzü DXF kimi ixrac edib 2D CAD proqramında ölçüləndirin |
| Birdən çox kəsik və ya ətraflı; qırılmış, köməkçi və proyeksiyalı görünüşlər | Mövcud deyil |
| Birinci bucaq proyeksiyası, hərəkət edən görünüşlər, portret vərəqlər | Üçüncü bucaq, avtomatik yerləşmə, landşaft |
| Vərəqdə sərbəst mətn qeydləri və cədvəllər (başlıq və düzəliş blokundan başqa) | Səth emalı qeydindən istifadə edin, və ya PDF-ə mətn əlavə edin |
| Yığımların çertyojları | Mövcud deyil |

Qərbi Avropa dəstindən kənar simvollar PDF-də "?" kimi çap olunur (PDF oxucunun daxili Helvetica şriftindən istifadə edir). GD&T simvolları xətlər kimi çəkilir, buna görə istənilən oxucuda çap olunur.

## Vərəqin işini ona buraxın

- **Vərəq › Avtomatik** kağızı sizin üçün seçir: 1:1-ə qədər ən böyük standart miqyas, həmin miqyasda görünüşləri saxlayan ən kiçik A ölçülü vərəqdə (siyahıda hansının seçildiyi göstərilir).
- **Deşikləri ölçüləndirin** ölçüləri ən çox deşiyi başdan gördüyü görünüşdə verir: hər birinə mərkəz işarəsi, hər ölçü üçün bir çağırış ("2× Ø6 THRU" xətt ilə) və mövqeləri görünüşün sol-aşağı küncündən. Ümumi en, hündürlük və dərinlik həmişə var.
