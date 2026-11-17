---
title: Məlumatın ixracı: məlumat vərəqi, sahələr və torlar
summary: Yaradılmış cismin məlumat vərəqini JSON və ya PDF kimi, sahəsini VTK şəkil faylı (.vti) və ya OpenVDB səviyyə çoxluğu (.vdb) kimi, səthini ParaView və digər təhlil alətləri üçün VTK tor (.vtu) kimi, torunu isə generatorun məlumatını daşıyan 3MF kimi saxlayın. Eyni hissə həmişə eyni faylları yazır.
keywords: ixrac, məlumat vərəqi, json, pdf, vti, vtu, vtk, paraview, 3mf, sahə, işarəli məsafə, fea, cfd, metaməlumat, openvdb
from: 817b4579
---

**Mühəndis** iş sahəsində, ya da Yaradılmış cismin xüsusiyyətlərində **Məlumat ixracı** açın:

| Düymə | Fayl | Üçün |
|---|---|---|
| Məlumat vərəqi (JSON) | `.json` | Hər daxiletmə, hər ədəd vahidi və mənbəyi ilə, yoxlamalar, torun barmaq izi. Sıralanmış, vaxt yoxdur: eyni hissə eyni faylı verir. |
| Məlumat vərəqi (PDF) | `.pdf` | Eyni, kağızda, lazım olan qədər səhifədə. |
| Sahə (.vti) | `.vti` | Hissə işarəli məsafə kimi (içəridə mənfi) və nöqtələr şəbəkəsində içəri maska kimi: ParaView və VTK əsaslı alətlər üçün VTK şəkil faylı. O, cismin səthindən generatorun girişlərinin voksel ölçüsündə qurulur, ona görə bir az vaxt aparır; 400 000 üçbucaqdan böyük cisim səhifə üçün çox böyükdür: sahəni bu halda skriptdən saxlayın (`field_bake`). |
| Səviyyə çoxluğu (.vdb) | `.vdb` | Eyni sahə OpenVDB səviyyə çoxluğu kimi: yalnız səth ətrafındakı nazik zolağı saxlayan seyrək ağac, OpenVDB oxuyan alətlər üçün (renderlər, simulyasiya və 3D proqramlar). Voksel ölçüsü və vahidlər generatorundur (millimetr), dar zolaq aktiv hissədir, içəri mənfidir. `.vti` kimi səthdən qurulur, eyni 400 000 üçbucaq limiti ilə; 1,5 GB-dan böyük fayl rədd edilir (daha böyük voksel ölçüsü istifadə edin). Fayl OpenVDB formatı 224-dür, OpenVDB-nin öz aktiv-dəyər paketləməsindən başqa sıxılmayıb, ona görə hər OpenVDB oxuyucusu onu açır. |
| Səth (.vtu) | `.vtu` | Üçbucaqlar, hər birinin sahəsi və normalı ilə. |
| 3MF generator məlumatı ilə | `.3mf` | Kəsici üçün millimetrlərdə tor, faylda metaməlumat kimi generator, onun girişləri və (dərəcəli qəfəs üçün) divar diapazonu ilə. |

Bu fayllardakı heç nə saatdan və ya maşından gəlmir, ona görə iki faylı bayt-bayt müqayisə edə bilərsiniz: dəyişmiş bayt dəyişmiş hissə deməkdir.

## Hələ qurulmayıb

- Generatorunkindən fərqli voksel ölçüsündə sahənin `.vti` və ya `.vdb`-si.
- `.vdb` fayllarını oxumaq (yalnız yazmaq qurulub).
