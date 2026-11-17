---
title: Çap, STEP və DXF üçün ixrac
summary: Hissəni 3D çap üçün STL və ya 3MF kimi, digər CAD və CAM proqramları üçün dəqiq STEP bərk cismi kimi, eskizi və ya düz üzü isə lazer və su-jet kəsimi üçün DXF kimi ixrac edin.
keywords: ixrac, fərqli saxla, ifc, bim, xassə dəstləri, stl, 3mf, 3d çap, dilimləyici, step, stp, dəqiq step, b-rep, ap242, ap214, cam, emal sexi, frezələmə, dxf, lazer, su-jet, cnc, düz şablon, profil, mesh, fasetli
from: e1de71d5
---

İxraclar başqa formatlarda surətlərdir. `.partcraft.json` faylını da saxlayın: PartCraft-ın yenidən aça və redaktə edə biləcəyi yeganə fayl budur.

Bütün ixraclar ekranda olan hissə üzərində, millimetrlərlə işləyir. Yığımda STL, 3MF, STEP və Çertyoj (PDF) bütün yığımı ixrac edir: bax [Detallar siyahısı, açılmış görünüşlər və hərəkət edən hissələr](topic:assembly-bom-explode). Hələ ixrac ediləcək bərk cisim yoxdursa: "Hələ ixrac ediləcək bərk cisim yoxdur."

## 3D çap üçün: STL və ya 3MF

1. İstəyə görə: hamar dairəvi səthlər üçün boş yerə klikləyin ki, heç nə seçilməsin, və sağ paneldə **Curves** (Əyrilər) parametrini **İncə (dövrədə 128)** və ya **Çox incə (dövrədə 256)** təyin edin. STL və 3MF həmişə üçbucaqlardan ibarətdir.
2. {{ui:İxrac}} seçin, sonra {{ui:STL, 3D çap üçün}} və ya {{ui:3MF, 3D çap üçün}}.
3. Fayl yüklənir. Status paneli məsələn bunu deyir: "Part1.stl ixrac edildi (binary, mm, Z yuxarı, 1536 üçbucaq)."

Hər iki format **Z yuxarı** istiqamətlidir, çünki printerlər və dilimləyicilər belə gözləyir. PartCraft-ın öz dünyası Y yuxarıdır, ona görə ixrac hissəni çevirir: PartCraft-da yuxarı göstərən şey (Üst müstəviyə perpendikulyar) dilimləyicidə də yuxarı göstərir, və Üst müstəvidə çəkilmiş hissə platformada düz yatır. Lazım olarsa son istiqaməti dilimləyicidə təyin edin.

3MF daha yeni, daha kiçik formatdır və dilimləyicilər onu vahidləri daxil olmaqla oxuyur. Əgər proqram 3MF qəbul etmirsə, STL istifadə edin.

Hissənin qapalı olduğunu, printerinizin platformasına sığdığını və düz üzdə durduğunu əvvəlcədən yoxlamaq üçün {{ui:İxrac}} › {{ui:3D çap üçün yoxlayın (STL və ya 3MF)…}} seçin: bax [Hissəni 3D çap üçün hazırlayın](topic:print-3d).

## Digər CAD proqramları üçün: STEP

{{ui:İxrac}} seçin, sonra {{ui:STEP AP242 (dəqiq bərk cisim)}}. Hissəni millimetrlərdə, Z yuxarı istiqamətdə bir dəqiq bərk cisim kimi yazır. Dairəvi üzlər həqiqi silindrlər, konuslar, sferalar və torlar kimi, kənarları isə həqiqi dairələr kimi yazılır, beləliklə digər proqram deşiyi deşik kimi seçə bilir. STEP faylından açılmış gövdə həmin faylın düz üzlərini, silindrlərini, konuslarını, sferalarını və torlarını saxlayır, ona görə onlar da dəqiq çıxır. Belə səthi olmayan üzlər (splaynın yan tərəfi, modelləşdirilmiş vint, STL, OBJ və ya 3MF meshindən gövdə, STEP faylının splayn üzləri, süpürülmüş və fırladılmış üzlər) eyni bərk cismin içində düz fasetlər olaraq qalır və status paneli neçə olduğunu deyir. Məsələn: "Flange.step ixrac edildi (AP242, dəqiq bərk cisim, mm, Z yuxarı): 14 üz öz həqiqi səthlərində (10 silindrik, 1 konusvari, 0 sferik, 0 torvari), 0 uyğunlaşdırılmış kənar əyrisi." Yalnız bərk cismi saxlayır: tarixçə, eskizlər və çertyoj yoxdur. Əgər digər proqram yalnız AP214 oxuyursa, {{ui:STEP AP214 (dəqiq bərk cisim)}} seçin: eyni bərk cisim həmin köhnə sxemdə.

Nə dəqiqdir və nə deyil:

- Düz üzlər, silindrlər (deşiklər, çıxıntılar, düz kənarlarda filetlər), konuslar (kontrsinklər, konuslar), sferalar və torlar dəqiqdir, və onların düz, dairəvi və elliptik kənarları da. **Curves** (Əyrilər) parametri bunları dəyişmir.
- İki dairəvi üzün kəsişdiyi yerdə (valdan keçən deşik), kənar hər iki səthə 0.00001 mm dəqiqliklə uyğunlaşdırılmış hamar əyridir; "uyğunlaşdırılmış kənar əyriləri" bunları sayır.
- Hissənin içindəki qapalı boşluq bərk cismin boşluğu kimi yazılır. Bir neçə ayrı gövdə bir neçə bərk cisim kimi yazılır.
- Yığım hələ dəqiq STEP kimi yazılmır: hər hissəni ayrı-ayrılıqda ixrac edin.

Yoxlanılıb: fayllar OpenCascade-də geri oxunub, etibarlı bərk cisimlər və əl ilə hesablanmış həcmlər. Hələ hər CAD və ya CAM proqramında açılmayıb; əgər biri faylı rədd edərsə, {{ui:STEP (fasetli, mesh nüvəsi)}} eyni formanı düz üzlər kimi yazır (PartCraft-ın öz oxlarında, Y yuxarı) və xahiş edirik {{ui:Kömək}} › {{ui:Problem barədə məlumat verin}} vasitəsilə bizə bildirin.

Frezələmə üçün Manufacture iş sahəsi də dəqiq bərk cismi quraşdırmanın öz iş koordinatlarında yazır: bax [Alət yollarını və G-kodu hazırlayın](topic:manufacture#exact-step-for-the-shop).

## BIM proqramları üçün: bütün xassələrlə IFC

{{ui:İxrac}} seçin, sonra {{ui:IFC 4 (bütün xassələrlə)}}. Hissəni bina və zavod modelləri üçün IFC 4 elementi kimi yazır, forması üçbucaqlar kimi (Z yuxarı, millimetr), PartCraft-ın onun haqqında bildiyi məlumatlar isə xassə dəstləri kimi:

| Xassə dəsti | Saxlayır |
|---|---|
| **PartCraft_Part** | Ad, material və onun sıxlığı, aktiv konfiqurasiya, gövdələrin sayı; yığımda həm də detal nömrəsi və təsvir |
| **PartCraft_Parameters** | Hissənin hər parametri öz dəyəri ilə; düsturun ifadəsi və qeyd xassənin təsvirindədir |
| **PartCraft_TitleBlock** | Doldurduğunuz çertyoj ştampı sahələri (ad, çertyoj nömrəsi, revizya, şirkət, çəkən, yoxlayan və təsdiq edən, tarix, səthin emalı, ümumi tolerans) və vərəq ölçüsü |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Həcm, səth sahəsi, kütlə (material ilə) və ümumi ölçü |

Material IFC materialı kimi əlavə olunur, çertyoj nömrəsi isə elementin etiketidir. Yığımda hər detal bir dəfə xassələri olan tip kimi yazılır, hər surət isə yığımın yerləşdirdiyi yerdə **PartCraft_Instance** içində öz dəyərləri ilə yazılır: adı, detallar siyahısındakı sıra nömrəsi və yerə bərkidilmiş detal olub-olmaması.

## Lazer, su-jet və ya CNC profilləri üçün: DXF

İki növ DXF var, hər ikisi R12 versiyasındadır və hər CAD və CAM proqramı onları açır:

### Eskiz

1. Eskizi tarixçədə seçin (və ya açıq olsun).
2. {{ui:İxrac}} seçin, sonra {{ui:Eskizin və ya düz üzün DXF-i}}. (Eskizin sağ panelində də {{ui:DXF kimi ixrac et}} var.)

Siz eskizin öz koordinatlarında `<hissə> - <eskiz>.dxf` alırsınız: **PROFILE** qatında xətlər, həqiqi qövslər və dairələr, **CONSTRUCTION** qatında konstruktiv həndəsə, **POINTS** qatında sərbəst nöqtələr.

### Bərk cismin düz üzü

1. Görünüşdə düz üzə klikləyin (məsələn, deşikli lövhənin üstü).
2. Sağ paneldə {{ui:Üzü DXF kimi ixrac et}} seçin, və ya {{ui:İxrac}}, sonra {{ui:Eskizin və ya düz üzün DXF-i}}.

Siz `<hissə> - face.dxf` alırsınız: üzün konturu və onun içindəki hər deşik. Dairəvi deşik (silindrin üzlə kəsişdiyi tam dairə: qazılmış deşik və ya açılmış STEP faylının deşiyi) öz mərkəzi və radiusu ilə həqiqi dairə kimi yazılır. Hər digər kontur bağlı polixəttdir, onun dəyirmi kənarları (filet künclər, yuvalar, qövslər) isə öz fasetləridir, ona görə kəsici onları yaxından izləyirsə əvvəlcə **Curves** (Əyrilər) parametrini İncə təyin edin. Status paneli neçə kontur olduğunu, onlardan neçəsinin həqiqi dairə olduğunu və üzün sahəsini deyir.

Nə eskiz, nə də düz üz seçilməyibsə: "DXF ixrac etmək üçün eskizi açın və ya seçin, ya da düz üz seçin."

## Çertyoj

PDF çertyojunun öz təlimatı var: [Çertyoj vərəqi hazırlayın](topic:drawing-pdf).

## Dəstəklənməyən formatlar

glTF, OBJ, IGES və Parasolid bu versiyada ixrac edilmir. DWG yalnız variant paketi tərəfindən, hər konfiqurasiyanın çertyoj vərəqi kimi yazılır: bax [Konfiqurasiyalarınızdan variant paketi hazırlayın](topic:variant-pack). Bax [Fayl formatları](topic:file-formats).
