---
title: STEP faylını açın və onun üzərində qurun
summary: Təchizatçının və ya başqa CAD proqramının STEP modelini PartCraft-a bərk cisim kimi idxal edin, yeni detal kimi və ya cari detala əlavə edərək; hansı istiqamətin yuxarı olduğunu təyin edin və ona eskizlər və xüsusiyyətlər əlavə edin.
keywords: step, stp, idxal, step aç, ap203, ap214, ap242, təchizatçı modeli, sadə bərk cisim, idxal olunmuş bərk cisim, yuxarı ox, z yuxarı, y yuxarı, üçbucaqlar, fasetli, yığım step
from: ca0eca5f
---

PartCraft STEP fayllarını (`.step` və ya `.stp`, AP203, AP214 və AP242) üzərində eskiz çəkə, kəsə, deşə və öz xüsusiyyətlərinizlə birləşdirə biləcəyiniz **bərk cisimlər** kimi açır. Cismin öz tarixçəsi yoxdur: onu yaradan ölçüləri dəyişə bilməzsiniz, yalnız ona əlavə edə və ya ondan kəsə bilərsiniz.

Bu versiya hər detalı tor nüvəsi ilə qurur, buna görə STEP faylı **üçbucaqlar kimi oxunur**: düz səthlər düz qalır, əyri səthlər (silindrlər, konuslar, sferalar, torlar, B-spline səthləri) çoxlu kiçik düz səthlərə çevrilir. Həcmi dəqiq həcmdən faizin kəsri qədər fərqlənir. Əyri səthləri dəqiq saxlamaq üçün dəqiq nüvə lazımdır, bu versiyada isə yoxdur.

## STEP faylını açın

1. {{ui:Aç}} seçin və ya {{key:Mod+O}} basın və `.step` və ya `.stp` faylını seçin. Və ya onu 3D görünüşə buraxın.
2. PartCraft faylı oxuyur və tapdıqlarını göstərir, məsələn: "AP214 faylı: 1 bərk cisim, 10 səth, üçbucaqlar kimi oxunub." Aşağıda üçbucaqların sayı, onun buraxdığı və ya birləşdirdiyi hər hansı şey və nəticənin bağlanıb-bağlanmadığı göstərilir.
3. **Faylda yuxarı** yoxlayın. STEP faylı öz vahidini bildirir (millimetr, düym, metr…); PartCraft onu millimetrə çevirir, buna görə **Faylda vahidlər** millimetrləri göstərir: "fayl belə deyir". **Burada ölçü** bunun burada necə böyük olacağını göstərir.
4. Boş detal üçün {{ui:Cisim kimi aç}} seçin, ya da detalda xüsusiyyətlər olduqda {{ui:Bu detala əlavə et}} və ya {{ui:Yeni detal}} seçin. Əlavə edərkən PartCraft **Bununla nə etmək** soruşur: əlavə et, kəs və ya yalnız üst-üstə düşən hissəni saxla.

Tarixçədə **Imported1** xüsusiyyəti görünür və status paneli məsələn belə deyir: "plate.step bərk cisimdir: 57995.937 mm³, eskiz çəkmək üçün 6 düz səth."

## Yığım STEP faylı

Yığım **bir cisim** kimi gəlir, hər detal faylda yerləşdiyi yerdə ("faylda yerləşdirilmiş 3 detal olduğu yerdə gəlir"). İki dəfə istifadə olunan detal iki dəfə gəlir. Detalların adları və yığım ağacı saxlanılmır.

## Hansı istiqamətin yuxarı olduğunu təyin edin

Əksər CAD proqramları Z yuxarı istifadə edir; PartCraft isə Y yuxarı istifadə edir. Standart olaraq PartCraft faylı elə fırladır ki, onun Z istiqaməti burada yuxarı baxsın. Əgər detal yan tərəfində gəlirsə, **Imported1** seçin və **Faylda yuxarı** ni **Y yuxarı** təyin edin. **Faylda vahidlər** və **Bununla nə etmək** də orada dəyişdirilə bilər; hər dəyişiklik bir geri alma addımıdır.

## Onun üzərində qurun

- Cismin düz səthinə klikləyin və {{ui:Bu üzdə eskiz}} seçin. STEP modelinin düz səthləri cisim yenidən qurulduqda öz yerini saxlayır.
- Hər hansı detalda olduğu kimi kəsiklər, deşiklər, çıxıntılar, nümunələr və güzgülər əlavə edin.
- **Detal** qutusunda onun ölçüsünü yoxlayın: həcm, səth sahəsi, ölçü.

Yuvarlaqlaşdırmalar, faskalar və qabıqlar, bu versiyada hər hansı detalda olduğu kimi, dəqiq nüvə tələb edir ([Tor nüvəsi](topic:solid-kernels)).

## Harada saxlanılır

Üçbucaqlar `.partcraft.json` faylının **daxilində** saxlanılır, buna görə detal faylı özlüyündə tamdır: STEP faylına yenidən ehtiyac yoxdur.

## Mesajlar

| Mesaj | Nə deməkdir |
|---|---|
| '"part.stp" STEP faylı deyil (ISO-10303-21 ilə başlamır).' | Fayl sadə STEP mətni deyil. Göndərəndən AP203, AP214 və ya AP242 STEP faylı istəyin |
| "STEP faylı oxuna bilmədi: onun məlumat bölməsi yoxdur və ya zədələnib." | Fayl kəsilib və ya zədələnib. Onu yenidən kopyalayın |
| "STEP faylında heç bir bərk cisim və ya səth cismi yoxdur: gətiriləcək heç nə yoxdur." | Fayl yalnız çertyojlar, nöqtələr və ya məlumatlar saxlayır. Bərk cisim istəyin |
| "Bu STEP faylı burada idxal etmək üçün çox böyükdür (60 MB-dan çox)." və oxuyucunun digər limitləri (girişlər, səthlər, üçbucaqlar) | Modeli mənbədə sadələşdirin və ya detalları bir-bir göndərin |
| "… faylda zədələnmiş sətirlər ötürüldü." | Bəzi sətirlər oxuna bilmədi; qalanları gəldi. Cismi yoxlayın |
| "… səthləri üçbucaqlara çevrilə bilmədi və çıxarıldı." | Həmin səthlər boşluq yaradır; PartCraft onları doldurmağa çalışır. Cisim bağlanmırsa, əlavə olunmur |
| "… oxunmayan növ səthləri (…) ötürüldü." | Nadir səth növü. Sadə və ya B-spline səthli model istəyin |
| "Bağlanmır …" | Səthlər bağlı bərk cisim yaratmır (səth modeli və ya çatışmayan səthlər). PartCraft boşluqları göstərir və heç nə əlavə etmir |

## Məhdudiyyətlər

- Əyri səthlər bu versiyada qurulan hər detalda olduğu kimi fasetlər kimi çəkilir və ölçülür. PartCraft faylın öz düz səthlərini, silindrlərini, konuslarını, sferalarını və torlarını cisimlə birlikdə saxlayır, buna görə {{ui:İxrac}} › {{ui:STEP AP242 (dəqiq bərk cisim)}} onları əlavə etdiyiniz xüsusiyyətlərlə birlikdə həqiqi səthlər kimi, deşikləri isə deşik kimi yazır. Fayl üçün B-spline, süpürmə və ya fırlanma səthləri kimi verilən səthlər ixracda fasetlər olaraq qalır. 0.9.1-dən əvvəl saxlanmış detalların saxlanılmış səthləri yoxdur: onları almaq üçün STEP faylını yenidən açın.
- Düz üz seçildikdə {{ui:İxrac}} › {{ui:Eskizin və ya düz üzün DXF-i}} faylın dəyirmi deşiyini həqiqi çevrə kimi yazır.
- Rənglər, cisimlərin adları, yığım strukturu və PMI (faylda olan tolerantlıqlar) oxunmur.
- STEP ilə yanaşı PartCraft STL, OBJ və 3MF torlarını ([STL, OBJ və ya 3MF faylının açılması](topic:open-meshes)) və `.3dm` fayllarını ([.3dm modelinin açılması](topic:open-3dm-files)) bərk cisimlər kimi açır. IGES və başqa proqramların öz faylları dəstəklənmir.
- Dəqiq nüvəli versiya ilə idxal edilmiş STEP bərk cismi olan detal STEP mətnini saxlayır; bu versiya həmin xüsusiyyəti ötürür ("hazır deyil"). Onu üçbucaqlar kimi gətirmək üçün STEP faylını yenidən açın.
