---
title: Yuvarlaqlaşdırma, əyma və boşaltma: Fillet, Chamfer və Shell ilə
summary: Kənarları seçin və sabit və ya dəyişən radiuslu filetlər və bərabər, iki məsafəli və ya məsafə-bucaqlı fasqalar əlavə edin; Shell ilə açılacaq üzləri seçərək hissəni boşaldın, xüsusiyyətin istifadə etdiyi kənarları və ya üzləri dəyişdirin və adi xətaları düzəldin.
keywords: fillet, yuvarlaqlaşdırma, qarışdırma, faska, əyma, qabıq, boşaltma, divar qalınlığı, kənarlar, üzlər, kənarları seçin, shift klik, açıq üz, dəqiq nüvə, mesh nüvəsi, qurulmayıb
from: e41c1c12
---

:::note
**Bu versiyada** PartCraft filetləri və fasqaları mesh nüvəsi ilə yalnız **iki düz üz arasındakı düz kənarlarda** qurur: qutu kənarları və ekstruziyaların və kəsmələrin düz kənarları, xarici və ya daxili künclər (daxili künc material əlavə edir). Deşik kənarları kimi yuvarlaq kənarlar və kənar boyunca dəyişən radius hələ qurulmayıb. İki yuvarlaq kənar künclə birləşdikdə yuvarlaqlar kəsilir (kəskin bir qırışda görüşürlər), qarışdırılmır. **Shell** də mesh nüvəsi ilə qurulur: yalnız düz üzləri açır, müxtəlif divar qalınlıqları hələ qurulmayıb və çoxlu dəyirmi üzü olan hissələrdə yavaşdır. Bax [Hələ qurulmamış olanlar](topic:not-built-yet).
:::

{{ui:Fillet}} kənarları yuvarlaqlaşdırır, {{ui:Chamfer}} onları əyir və {{ui:Shell}} hissəni boşaldır. Üçü də bərk cismin kənarları və üzləri üzərində işləyir və mesh nüvəsi ilə qurulur. Yuvarlaqlar hər dəyirmi üz kimi fasetlidir (**Curves** (Əyrilər) nə qədər incə olduğunu təyin edir); dəyirmi üzlər seçilə və ölçülə bilən silindrlərdir (bax [Mesh nüvəsi](topic:solid-kernels)).

## Kənarları fillet və ya faska edin

### Əvvəl kənarları seçin

1. Hissənin kənarına klikləyin. Bütün kənar işıqlanır, sağ panel **Kənar** yazır: növü (Düz, Dairə və ya qövs, Əyri), uzunluğu və arasında olduğu üzlər.
2. Daha çox kənar əlavə etmək üçün {{key:Shift}}+klik edin. Hər biri işarələnir; işarələnmiş kənara {{key:Shift}}+klik edib onu çıxarın. Panel başlığı onları sayır ("4 kənar") və status paneli deyir: "4 kənar seçildi. Fillet və ya Chamfer onları yuvarlaqlaşdırır; Shift+klik daha çox seçir, Esc təmizləyir."
3. Alətlər panelində {{ui:Fillet}} və ya {{ui:Chamfer}} seçin, və ya sağ paneldə eyni düymələr.

Xüsusiyyət bütün seçilmiş kənarlarla əlavə olunur: 2 mm yuvarlaq və ya 1 mm faska. Status paneli məsələn deyir: "Fillet1 əlavə edildi (4 kənar). Ölçüsünü sağda dəyişin; Kənarları seçin hansıların olduğunu dəyişir."

### Və ya əvvəl xüsusiyyəti əlavə edin

1. Heç nə seçilmədən {{ui:Fillet}} və ya {{ui:Chamfer}} seçin.
2. PartCraft seçim rejiminə keçir: sağ panel başlığı "Fillet1: seçilir" yazır, hissə filetdən əvvəlki kimi göstərilir (panel bunu deyir) və alətlər paneli {{ui:Hazırdır}} göstərir.
3. Əlavə etmək üçün hər kənara klikləyin; çıxarmaq üçün yenidən klikləyin. Status paneli onları sayır.
4. {{ui:Hazırdır}} seçin (və ya paneldə {{ui:Seçimi bitir}}), və ya {{key:Esc}} və ya {{key:Enter}} basın.

### Parametrlər

| Parametr | Fillet | Faska |
|---|---|---|
| Ölçü | **Radius (mm)**, defolt 2 | **Məsafə (mm)** kənardan hər iki üzdə geriyə, defolt 1 |
| **Kənarlar** | Neçə olduğu | Neçə olduğu |

Aşağıdakı siyahı hər kənarı birləşdirdiyi iki üzlə adlandırır, məsələn "Kənar 1: Extrude1 son üzü × Extrude1 yan tərəfi". **Sil** birini çıxarır. {{ui:Kənarları seçin}} yenidən seçməyə qaytarır. Tarixçədə xüsusiyyətə iki dəfə klikləmək eyni işi görür.

Kənarlar birləşdirdikləri iki üzlə yadda saxlanılır, buna görə tarixçədə əvvəldəki ölçünü dəyişdikdə düz kənarda qalırlar.

### Dəyişən filetlər və faska növləri

- **Dəyişən radius** (fillet): bu versiyada hələ qurulmayıb ("Kənar boyunca dəyişən radiuslu fillet: hələ qurulmayıb (dəqiq nüvə tələb edir). Ona bir radius verin."). Dəqiq nüvə ilə: qutunu işarələyin və **Son radius (mm)** təyin edin. Radius hər kənarın bir ucunda **Radius**-dan digər ucunda **Son radius**-a xətti dəyişir; **Ucları dəyiş** onu çevirir.
- **Növ** (faska): **Bərabər məsafə**, **İki məsafə** (digər üzdə **İkinci məsafə**) və ya **Məsafə və bucaq** (bir üzdəki məsafə, o üzə **Bucaq (°)** ilə əyinti). **Tərəfləri çevir** birinci məsafəni digər üzə qoyur.

## Hissəni boşaldın (Shell)

1. Açıq buraxmaq istədiyiniz düz üzə klikləyin, məsələn qutunun üstü. Və ya bir neçə üz üçün {{key:Shift}}+klik.
2. Alətlər panelində {{ui:Shell}} seçin, və ya üzün panelində {{ui:Qabıq, bu üzü açır}}.

Hissə seçilmiş üzlər açıq olaraq 2 mm divara çevrilir. Parametrlər:

| Parametr | Nə edir | Defolt |
|---|---|---|
| **Divar (mm)** | Divar qalınlığı | 2 |
| **Divarlar xaricə böyüyür (üzlər içəridə qalır)** | İşarəlidirsə: divarlar xaricə əlavə olunur, buna görə içəri hissənin ölçüsünü saxlayır | Söndürülüb: divarlar içəriyə gedir və xarici ölçü qalır |
| **Açıq üzlər** | Neçə üz çıxarılır | |

İçəriyə doğru divarlar dəqiq divar qalınlığıdır: xarici künclər kəskin qalır, daxili künclər yuvarlaq çıxır (radius = divar), və hissədən keçən deşik ətrafında boru divarı alır. Xaricə doğru divarlar orijinal səthin xaricinə əlavə olunur, o orijinal səth boşluq olur, və xarici kənarlar yuvarlaq çıxır. Daxili üzlər offset etdikləri üzlərin adı ilə adlanır, buna görə onları seçə bilərsiniz.

Yalnız düz üzlər açıla bilər: əyri birini seçsəniz "Qabıq: bu versiyada yalnız düz üzləri açır (mesh nüvəsi onu qurur)." deyir. Çoxlu dəyirmi üzü olan hissələrdə qabıq yavaşdır (hər min üçbucaq üçün bir neçə saniyə): dizayn edərkən daha kobud **Curves** (Əyrilər) parametrindən istifadə edin.

{{ui:Üzləri seçin}} hansı üzlərin açıq olduğunu kənarların seçilməsi kimi dəyişir. Siyahı hər birini adlandırır, məsələn "Üz 1: Extrude1 son üzü". Heç bir açıq üzü olmayan qabıq icazə verilmir: "Çıxarılacaq (açıq) üzləri seçin, sonra qabıq edin."

## Sıra vacibdir

Xüsusiyyətlər yuxarıdan aşağıya qurulur. Qabıqdan əvvəl olan fillet qabıqla birlikdə qurulur, buna görə daxili hissə də yuvarlaq künclər alır. Qabıqdan sonra olan fillet yalnız seçdiyiniz kənarları yuvarlaqlaşdırır. Xüsusiyyətləri {{ui:Yuxarı köçür}} və {{ui:Aşağı köçür}} ilə köçürün (bax [Hissəni tarixçəsi vasitəsilə dəyişdirin](topic:edit-history)).

Naxışlar və güzgülər fillet, faska və ya qabığı kopyalaya bilməz: "Fillet1 gövdənin kənarlarını və ya divarlarını dəyişir; onu kopyalamaq olmaz. Bərk cisim yaradan xüsusiyyətləri kopyalayın (ekstruziyalar, fırlatmalar, deşiklər, idxallar)." Əvvəl deşikləri və ya kəsmələri naxışlayın, sonra bütün surətlərin kənarlarını bir filletlə yuvarlaqlaşdırın.

## Uğursuz olduqda

| Mesaj | Nə etməli |
|---|---|
| "5 mm yuvarlaq burada sığmır (kənarlardan birinin yanındakı üz üçün çox böyükdür və ya kənarlar mesh nüvəsinin qarışdıra bilmədiyi künc yaradır)." | Daha kiçik radius istifadə edin, və ya bir dəfəyə az kənarı filetləyin (bir neçə fillet xüsusiyyəti, ən kiçiyi sonuncu) |
| "Yuvarlaqlaşdırdığı kənar yoxdur: Extrude1 və Cut2 arasındakı kənar." | Əvvəlki dəyişiklik həmin kənarı çıxarıb. {{ui:Kənarları seçin}} seçin, qırmızı kənarı çıxarın və yenisini seçin |
| "Qabıq bu qalınlıqla qurula bilmədi (…)." | Divar modelin dar hissəsindən və ya filetin radiusundan qalındır. Divarı nazikləşdirin, və ya filetləri divardan böyük edin |
| "Bu üzün tarixçənin izləyə biləcəyi adı yoxdur; başqasını seçin." | Xüsusiyyət tərəfindən yaradılmış üz seçin (əksər üzlər belədir) |
| "Fillet: bu versiyada yalnız iki düz üz arasındakı düz kənarlar (mesh nüvəsi onları qurur). Eskizdə əyri kənarları yuvarlaqlaşdırın və ya əyin." (Chamfer üçün də) | Seçilmiş kənar yuvarlaqdır, məsələn deşik kənarı, və ya əyri üzdədir. {{ui:Kənarları seçin}} ilə onu çıxarın və həmin küncü eskizdə yuvarlaqlaşdırın və ya əyin |
| "Kənar boyunca dəyişən radiuslu fillet: hələ qurulmayıb (dəqiq nüvə tələb edir). Ona bir radius verin." | **Dəyişən radius** qutusunu silin |
| "Mesh nüvəsi ilə fillet: yuvarlaq kənarlar birləşdikdə onlar kəsilir, qarışdırılmır." (tarixçədə ⚠) | Xəbərdarlıq, xəta deyil: hissə qurulub. Seçilmiş kənarlar künclə birləşir və yuvarlaqlar orada kəskin qırışda görüşür. Daha az kənarı filetləyin, və ya qırışı qəbul edin |
| "Shell: bu versiyada yalnız düz üzləri açır (mesh nüvəsi onu qurur)." | Açıq üz əyridir. {{ui:Üzləri seçin}} edin və onu çıxarın; yalnız düz üzləri açın |

## Məhdudiyyətlər

Bu versiyada fillet və faskalar yalnız iki düz üz arasındakı düz kənarlarda, bir radiusla işləyir, künclərdə birləşən yuvarlaqlar isə kəsilir. Qabıqlar yalnız düz üzləri açır. Dəqiq nüvə ilə dəyişən fillet hər kənar boyunca xətti dəyişir (hər xüsusiyyət üçün bir qanun; kənar boyunca nöqtələrdə radius dəsti yoxdur). Üz filetləri, tam yuvarlaq filetlər və müxtəlif divar qalınlıqlı qabıqlar hələ qurulmayıb.
