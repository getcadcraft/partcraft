---
title: Fayl formatları
summary: PartCraft-ın oxuduğu və yazdığı hər fayl, uzantıları, vahidləri, oxları və hər birinin nəyi saxlayıb nəyi itirdiyi.
keywords: formatlar, fayl növləri, uzantılar, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, vahidlər, z yuxarı
from: 4d0ecbee
---

| Format | Uzantı | Açmaq | Saxlamaq və ya ixrac | Vahidlər | Yuxarı ox | Saxlayır |
|---|---|---|---|---|---|---|
| PartCraft hissəsi | `.partcraft.json` | Bəli | {{ui:Saxla}} | mm | Y | Tam tarixçə: eskizlər, əlaqələr, ölçülər, xüsusiyyətlər, söndürmə, geri qaytarma, əyrilər parametri, çertyoj parametrləri və GD&T, əvvəlki versiyada idxal edilmiş STEP mətni |
| PartCraft yığımı | `.partcraft-asm.json` | Bəli | Yığımda {{ui:Saxla}} | mm | Y | Hər detal (daxil edilmiş), surətlər və onların mövqeləri, birləşmələr |
| STL (binary və ya mətn) | `.stl` | Bəli, bərk gövdə kimi: [STL, OBJ və ya 3MF açın](topic:open-meshes) | {{ui:STL, 3D çap üçün}} | mm (açılanda soruşulur) | Z | Yalnız bərk cismin üçbucaqları |
| 3MF | `.3mf` | Bəli, bərk gövdə kimi | {{ui:3MF, 3D çap üçün}} | mm (faylda göstərilir) | Z | Bərk cisim bir mesh obyekti kimi |
| OBJ | `.obj` | Bəli, bərk gövdə kimi (yalnız üzlər) | Yox | açılanda soruşulur | Z və ya Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Bəli, üçbucaqlar kimi oxunan bərk gövdə kimi (əyri üzlər fasetlər kimi çəkilir; faylın düz üzləri, silindrləri, konusları, sferaları və torları dəqiq ixrac üçün saxlanılır): [STEP faylını açın](topic:import-step) | | mm (faylın vahidindən) | Z, və ya deyirsinizsə Y | Bərk cisimlər və səth gövdələri, hər detalı yerində olan yığımlar; rənglər, adlar, yığım ağacı və ya PMI yoxdur |
| `.3dm` | `.3dm` | Bəli, meshlərindən və səthlərindən bir bərk gövdə kimi (saxlanılmış render meshləri, yoxsa tessellyasiya): [.3dm modelini açın](topic:open-3dm-files) | | Faylın vahidindən | Z, və ya deyirsinizsə Y | Meshlər, polisəthlər, ekstruziyalar və blok yerləşdirmələri bir gövdə kimi; əyrilər, rənglər, qatlar və ya adlar yoxdur |
| STEP AP242, dəqiq | `.step` | | {{ui:STEP AP242 (dəqiq bərk cisim)}} | mm | Z | Bir dəqiq bərk cisim: düz üzlər, silindrlər, konuslar, sferalar və torlar öz həqiqi səthlərində, həqiqi dairələr və xətlər kənar kimi; splayn yanları, modelləşdirilmiş vintlər, mesh fayllarından gövdələr və STEP faylının splayn üzləri fasetlər olaraq qalır. Digər CAD və CAM proqramları üçün istifadə olunan STEP |
| STEP AP214, dəqiq | `.step` | | {{ui:STEP AP214 (dəqiq bərk cisim)}} | mm | Z | Eyni dəqiq bərk cisim köhnə AP214 sxemində, yalnız onu oxuyan proqramlar üçün |
| STEP AP242, fasetli | `.step` | | {{ui:STEP (fasetli, mesh nüvəsi)}} | mm | Y | Düz üzlərdən ibarət qapalı bərk cisim: dairəvi səthlər fasetlər kimi. Dəqiq faylı qəbul etməyən proqram üçün |
| STEP AP214, fasetli | `.step` | | {{ui:STEP AP214 (fasetli, mesh nüvə)}} | mm | Y | Eyni bərk cisim köhnə AP214 sxemində, yalnız onu oxuyan proqramlar üçün |
| USD paketi | `.usdz` | Yox | {{ui:USD paketi (.usdz)}} | m | Z | Materialı, həcmi və kütləsi ilə bərk cisim; hər detal bir dəfə və hər surəti yerləşdirilmiş yığım: [USD kimi ixrac edin](topic:usd) |
| IFC 4 | `.ifc` | Yox | {{ui:IFC 4 (bütün xassələrlə)}} | mm | Z | Üçbucaqlar kimi forma, material, hər parametr, çertyoj ştampı, kəmiyyətlər; yığımın detalları tip kimi, surətləri yerləşdirilmiş |
| DXF R12, eskiz | `.dxf` | Yox | {{ui:Eskizin və ya düz üzün DXF-i}} eskiz seçilmiş halda | mm | Eskizin öz x, y | Xətlər, həqiqi qövslər və dairələr, nöqtələr; PROFILE, CONSTRUCTION, POINTS qatları |
| DXF R12, üz | `.dxf` | Yox | {{ui:Eskizin və ya düz üzün DXF-i}} düz üz seçilmiş halda | mm | Üzün öz x, y | Üzün konturları: dəyirmi deşiklər həqiqi dairələr kimi, qalanı bağlı polixətlər kimi (dəyirmi kənarlar fasetlər kimi) |
| PDF çertyoj | `.pdf` | Yox | {{ui:Çertyoj (PDF): görünüşlər, kəsik, detal, GD&T}} | A3 vərəqində mm | | Ön, üst, sağ, izometrik, kəsik və detal görünüşləri fasetlərdən çəkilmiş; gizli xətlər, ümumi ölçülər, GD&T simvolları, çertyoj ştampı |

## PartCraft faylları

Hər ikisi düz mətndir (JSON). Bərk cisim heç vaxt saxlanılmır: PartCraft onu tarixçədən yenidən qurur, buna görə fayllar kiçik qalır və həmişə tarixçə ilə uyğun olur.

- Hər faylın versiya nömrəsi var. Bu versiya hər hissə faylını, onun istifadə etdiyi hər şeyi saxlayan ən aşağı versiya ilə yazır (2-dən 5-ə qədər; meshdən hazırlanmış gövdə 5 tələb edir) və hər köhnə versiyanı açır. Daha yeni PartCraft-ın faylı hər iki versiyanı göstərən mesajla rədd edilir.
- Hər dəyər fayl açılanda yoxlanılır. Adlar idarə simvollarını itirir; həddən kənar ədədlər, olmayan xüsusiyyətlərə istinadlar və naməlum xüsusiyyət növləri sadə səbəblə rədd edilir.
- Formatı bilmirsinizsə, faylı əl ilə redaktə etməyin. Yoxlamadan keçməyən fayl açılmayacaq.
- Əvvəlki versiyada idxal edilmiş böyük STEP bərk cismi olan hissə 50 MB-ı keçə bilər; bu, PartCraft-ın açdığı ən böyük hissə faylıdır (bax [Problemlərin həlli](topic:troubleshooting#file-problems)).

## Fasetlər və dəqiqlik

STL və 3MF həmişə **Curves** (Əyrilər) parametrində fasetlərdən ibarətdir, və fasetli DXF də belədir, yalnız dəyirmi deşiklər həqiqi dairələr olmaqla istisna olur. Eskiz DXF-də həqiqi qövslər və dairələr var, çünki birbaşa eskizdən gəlir. Bu versiya hər hissəni mesh nüvəsi ilə qurur, buna görə çertyojun görünüşləri (kəsiklər daxil) də fasetlidir. Dəqiq STEP ixracı istisnadır: nüvə hər üzün həqiqi səthini eskizdən (və ya gövdə açılmış STEP faylından) bilir, buna görə dairəvi üzlər **Curves** nə olursa olsun həqiqi silindrlər, konuslar, sferalar və torlar kimi yazılır (bax [Çap, STEP və DXF üçün ixrac](topic:export-files#for-other-cad-programs-step)).

## Bu versiyada dəstəklənməyənlər

| Format | Vəziyyət |
|---|---|
| glTF, IGES, Parasolid, ACIS (daxil və ya xaric); OBJ ixracı | Qurulmayıb |
| DWG | Yalnız [variant paketi](topic:variant-pack) tərəfindən, hər konfiqurasiyanın çertyoj vərəqi kimi yazılır. Oxunmur və başqa ixrac yoxdur. DXF ixrac edin; hər CAD proqramı R12 DXF açır |
| Yığım STEP və yığımın çertyoju | Hələ qurulmayıb. Hər hissəni dəqiq STEP kimi ixrac edin; STL, 3MF və detallar siyahısı yığımdan ixrac olunur |
| Başqa proqramların öz hissə və yığım faylları (yalnız `.3dm` istisna olmaqla, o bir gövdə kimi açılır) | Qurulmayıb |

Bax [Hələ qurulmamış olanlar](topic:not-built-yet).
