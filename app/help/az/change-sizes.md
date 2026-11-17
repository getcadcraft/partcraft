---
title: Ölçüləri eskizi açmadan dəyişin
summary: Sağ paneldəki rəqəmlərlə detalı idarə edin — eskiz ölçüləri, dərinliklər, saylar və bucaqlar, rəqəmlərin detalı idarə etməsi üçün detalı necə planlaşdırmaq və parametrlər və tənliklərin harada başladığı.
keywords: parametrlər, idarəedici ölçülər, dizayn məqsədi, ölçünü dəyiş, tənliklər, qlobal dəyişənlər, dizayn cədvəli, konfiqurasiyalar, ölçünü yenidən təyin et, ölçünü dəyiş
from: c2ae1a32
---

PartCraft detalındakı hər ölçü sonradan dəyişdirilə bilən rəqəmdir: eskizlərindəki ölçülər və xüsusiyyətlərinin parametrləri. Ölçülərini dəyişmək üçün eskizi açmaq lazım deyil.

## Eskiz ölçüsünü paneldən dəyişin

1. Tarixçədə xüsusiyyətə klik edin, məsələn "Extrude1".
2. Ekstruziyanın öz parametrləri altında **Eskiz ölçüləri (Sketch1)** onun eskizinin hər ölçüsünü siyahıya salır: "Məsafə", "Diametr", "Bucaq (°)" və s.
3. Bir qutuya yeni qiymət yazın və {{key:Enter}} və ya {{key:Tab}} basın.

Eskiz yeni qiymətlə həll olunur və bütün detal yenidən qurulur. Eskizin özünü seçmək eyni siyahını **İdarəedici ölçülər** kimi göstərir.

Radius və ya diametr sıfırdan böyük olmalıdır, bucaq isə 0 ilə 180 dərəcə arasındadır; əks halda status paneli bunu bildirir.

:::tip
Hansı qutu hansıdır? Qutular ölçülərin yaradılma sırası ilə siyahıya salınır. Əmin deyilsinizsə, eskizi açın (ona iki dəfə klik edin), kanvasda ölçüyə iki dəfə klik edin və orada dəyişin.
:::

## Əsas rəqəmi dərhal yazın

Tarixçədə xüsusiyyət seçin (və ya sadəcə əlavə edin) və rəqəm yazın: o, xüsusiyyətin əsas qutusuna düşür — ən çox dəyişdirdiyiniz qutuya (Ekstruziyanın **Dərinliyi**, Fırlatmanın **Bucağı**, Deşiyin **Diametri**, massivin **Sayı**, Yuvarlaqlaşdırmanın **Radiusu**, Qabığın divarı). Təyin etmək üçün {{key:Enter}} basın, köhnəni saxlamaq üçün {{key:Esc}} basın. Ekstruziya əlavə etdikdə status paneli bunu bildirir: "Extrude1 əlavə edildi. Onun rəqəmlərini sağda dəyişin, ya da indi dərinlik üçün rəqəm yazın."

## Tarixçədə rəqəmi dəyişin

Tarixçədə hər xüsusiyyətin sətiri adının yanında əsas rəqəmini göstərir: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Rəqəmə iki dəfə klik edin (ya da sətri seçib {{key:F2}} basın) və orada qutu açılır. Yeni qiyməti yazın və {{key:Enter}} basın; {{key:Esc}} köhnəni saxlayır. Bu, sağdakı xüsusiyyət qutusu kimi eyni işləyir: eyni hədlər, `=width/2` kimi tənliyi yazmaq üçün `=` və bir geri qaytarma addımı.

Ekstruziya, Deşik və ya massivdə sətrin istənilən yerinə iki dəfə klik qutunu açır. Yuvarlaqlaşdırma, Faska, Qabıq, Qaralama və ya Dişlər üzərində adına iki dəfə klik hələ də kənarları və ya üzləri seçməyə gedir, ona görə rəqəmin özünə iki dəfə klik edin. Eskizlərin sətirdə rəqəmi yoxdur: iki dəfə klik eskizi açır.

## Görünüşdə sürükləyin

Tarixçədə Ekstruziya seçin (ya da görünüşdə ona klik edin, sonra onun sətrinə) və onun son üzündə narıncı ox görünür, yanında qutuda dərinlik. Oxu sürükləyin: sürüklədikcə detal izləyir və buraxdıqda yeni dərinlik bir addım kimi təyin olunur ({{key:Mod+Z}} onu geri qaytarır). Sürükləyərkən başladığınız yerə qayıtmaq üçün {{key:Esc}} basın. Dərinlik ölçüsünün onda biri addımlarla dəyişir: 25 mm ekstruziyada 1 mm, 3 mm-də 0.1 mm.

Fırlatmada dönmənin sonunda əyri ox görünür: bucağı dəyişmək üçün onu ox ətrafında sürükləyin, 1°-dən 360°-ə qədər tam dərəcələrlə.

Ya da oxun yanındakı qutuya klik edin, qiymət yazın (ya da `=` və tənlik) və {{key:Enter}} basın. **Hamısını keçən** və ya üzə qədər gedən Ekstruziyada, ya da tənliklə idarə olunan dəyərdə ox yoxdur: onları sağdan dəyişin.

## Detalı idarə edən rəqəmlər

| Harada | Nəyi dəyişə bilərsiniz |
|---|---|
| Eskiz | Hər ölçü: uzunluqlar, məsafələr, radiuslar, diametrlər, bucaqlar |
| Ekstruziya və Kəs | Dərinlik, son şərt, istiqamət, çıxıntı və ya kəsik |
| Fırlatma və fırladılmış kəsik | Bucaq, ox, çıxıntı və ya kəsik |
| Deşik | Diametr, dərinlik, hamısını keçən, genişləndirilmiş deşik üçün diametr və dərinlik |
| Yuvarlaqlaşdırma, Faska, Qabıq | Radius, məsafə, divar qalınlığı və istiqaməti, həmçinin hansı kənar və ya üzlər |
| Xətti və Dairəvi | Say, aralıq və ya bucaq, istiqamət və ya ox |
| Detal | Əyrilər (dairəvi formalar nə qədər incə üzlərə bölünür) |
| Çertyoj | Kəsiyin harada kəsdiyi, detalın ölçüsü və miqyası, GD&T dəyərləri |

## Detalı düzgün rəqəmlər idarə etsin deyə planlaşdırın

Verdiyiniz rəqəmlər sonradan dəyişə biləcəyiniz rəqəmlərdir. Bir neçə vərdiş sonrakı dəyişikliklərin düzgün davranmasını təmin edir:

- **İş üçün vacib olanı ölçün.** Əgər deşik kənardan 15 mm məsafədə qalmalıdırsa, onu başlanğıcdan yox, həmin kənardan ölçün.
- **Eskizləri tam təyin edin.** Onda dəyişiklik yalnız olmalı olanı hərəkət etdirir (bax: [Eskizi tam təyin edin](topic:relations-dimensions)).
- **Məqsəd üçün əlaqələrdən istifadə edin.** İki deşikdə Bərabər əlaqəsi o deməkdir ki, bir diametr hər ikisini idarə edir. Simmetrik formalar: başlanğıcı mərkəz xəttinə qoyun, ya da Orta nöqtə istifadə edin.
- **Xüsusiyyətlərlə yaradılmış üzlərdə eskiz çəkin.** Ekstruziyanın son üzündəki eskiz dərinlik dəyişəndə yerini dəyişir.
- **Surət çıxarmaq əvəzinə massiv qurun.** Səkkiz dəfə massivləşdirilmiş bir deşiyin dəyişdiriləcək yalnız bir diametri var.

## Tək rəqəmlərdən kənar

- **Bir rəqəm bir neçəsini idarə edir:** parametrlər və tənlikdən istifadə edin: [Detalı parametrlərlə idarə edin](topic:parameters).
- **Bir detalın bir neçə ölçüsü:** hər birini [konfiqurasiya](topic:design-tables) kimi saxlayın; onlar detal faylında saxlanılır.
- **Rəqəm qutusunda hesablama:** `=40/2` və ya `=width / 2` yazın. Bu tənlik yaradır; bax: [İki istiqamətli tənliklər](topic:equations-two-way).
- **Düym vahidləri:** detal millimetrləri göstərir. `=` olan rəqəm qutusunda və ya parametrdə `2in` 50.8-ə çevrilir.

Bax: [Hələ qurulmayanlar](topic:not-built-yet).
