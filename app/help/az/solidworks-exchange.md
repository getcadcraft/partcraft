---
title: Detalları digər detal modelləşdiriciləri ilə köçürün
summary: Detalı canlı element ağacı ilə yenidən quran makro kimi başqa detal modelləşdiricisinə göndərin. Adlı STEP və digər modelləşdiricinin yazdığı element siyahısını açmaq bu versiyada hələ qurulmayıb.
keywords: makro, hələ qurulmayıb, swb, vba, element ağacı, dövrə, makronu ixrac et, cadcraft-sw.json, adlı step, ap214, qlobal dəyişənlər, tənliklər, doğma detal
from: 97ca61da
---

PartCraft SolidWorks ilə hər iki istiqamətdə detal mübadiləsi edir, heç kimin oxuya bilmədiyi fayl formatı olmadan:

- **Göndərmə:** SolidWorks-ün işlətdiyi makro (`.swb`, sadə mətn) detalı özü element-element qurur: eskizləri, əlaqələri, ölçüləri, qlobal dəyişənləri və tənlikləri ilə. Ölü bərk cisim deyil, canlı element ağacı olan doğma detal alırsınız.
- **Geri qaytarma:** SolidWorks-də işlətdiyiniz makro detalın elementlərini və tənliklərini `.cadcraft-sw.json` faylına yazır. Həmin faylı PartCraft-da açmaq bu versiyada hələ qurulmayıb (dəqiq nüvə tələb edir).

:::warning
Bunların heç biri hələ SolidWorks-də sınanmayıb. SolidWorks yalnız Windows-da və lisenziya ilə işləyir, PartCraft bu makroları onda heç işlətməyib. Makrolar SolidWorks API sənədlərinə əsasən yazılıb və burada struktur baxımından yoxlanılıb. Problemlər ola bilər; makronun yazdığı jurnal hansı addımın uğursuz olduğunu göstərir.
:::

PartCraft `.sldprt` faylını yaza bilmir: bu format qapalıdır. Doğma detal almağın yolu makrodur.

## Detalı makro kimi göndərmək

1. Detalı açın.
2. {{ui:İxrac}} seçin, sonra {{ui:SolidWorks üçün makro (.swb)}}. PartCraft `<part>.swb` faylını yükləyir; status paneli onun "dəqiq nüvə olmadan yazıldığını" bildirir.
3. Dialoq makronun neçə element, qlobal dəyişən və tənlik qurduğunu deyir və kənarda qalanların siyahısını göstərir. Bu versiyada yanında STEP yazılmır: lazım olsa {{ui:İxrac}}, sonra {{ui:STEP (fasetli, mesh nüvəsi)}} istifadə edin.
4. SolidWorks-də **Tools > Macro > Run** seçin, `.swb` faylını seçin və gözləyin. O, standart detal şablonunuzdan yeni detal yaradır, vahidləri millimetr təyin edir və hər elementi qurur.
5. Sonda mesaj neçə addımın tamamlandığını, neçəsinin uğursuz olduğunu və neçəsinin PartCraft detalının gövdəsi ilə uyğun gəldiyini deyir. Tam jurnal, `<part> macro log.txt`, makronun yanında yazılır.

Makronun qurduqları:

| PartCraft | Yeni detalda |
|---|---|
| Ön, Üst və ya Sağ müstəviyə eskiz | Həmin müstəvidə eskiz, onun xətləri, qövsləri, çevrələri, nöqtələri, əlaqələri və ölçüləri (PartCraft-dakı kimi adlandırılmış, məsələn `k7`) |
| Üz üzərində eskiz | Eyni üzdə eskiz; ona bitişən nöqtə ilə seçilir |
| Sabit müstəvidə eskiz | Üç nöqtədən keçən istinad müstəvisi və onun üzərində eskiz |
| Ekstruziya, kəsmə (kor, hamısı boyunca, orta müstəvi, iki istiqamət, konus) | Boss-extrude və ya cut-extrude |
| Fırlatma, fırlanan kəsmə | Eyni mərkəz xətti ətrafında fırlatma |
| Deşik (sadə, zenkerli, konik, dişli) | Öz eskizləri ilə bir və ya iki kəsmə (dişli deşik onun burğu deşiyidir; diş yoxdur) |
| Xətti və dairəvi massiv, güzgü | Xətti massiv, dairəvi massiv, güzgü (elementlər və ya gövdə) |
| Yuvarlaqlaşdırma, faska, qabıq | Eyni kənarlar və üzlər üzrə yuvarlaqlaşdırma, faska və qabıq; nöqtələrlə seçilir |
| Parametrlər və tənliklər | Adı dəyişdirilmiş ölçülər üzrə qlobal dəyişənlər və tənliklər |
| Bastırılmış elementlər, geri qaytarma çubuğu | Eyni şəkildə bastırılır; geri qaytarma çubuğu eyni yerdə |

Hər bərk element addımından sonra makro gövdənin həcmini və ölçüsünü PartCraft-dakı ilə müqayisə edir. Fərqli olduqda o elementin istiqamətini bir dəfə çevirir və yenidən yoxlayır; daha yaxşı olmasa, geri çevirir və jurnala "Check" yazır.

### Kənarda qalanlar

Dialoq və makronun başı bərpa olunmayan hər şeyi səbəbi ilə sadalayır. Bu gün bunlardır: idxal olunmuş bərk cisimlər (onun əvəzinə STEP daxil edin), süpürmələr, lofting-lər, eğimlər, istinad oxları və nöqtələr, "qədər" tipli son şərtləri, konturların yalnız bir hissəsinin ekstruziyası və onlardan asılı olan hər şey. Splaynlar nöqtələrindən keçən əyrilərə çevrilir. Bu versiyada dəqiq nüvə yoxdur, buna görə üzlər üzərindəki eskizlər və kənar və ya üz seçən elementlər də kənarda qalır.

## Doğma STEP göndərmək

Bu versiyada hələ qurulmayıb: {{ui:SolidWorks üçün STEP (adlı, AP214)}} dəqiq nüvə tələb edir və onu seçəndə "SolidWorks üçün STEP: hələ qurulmayıb. …" yazılır. Dəqiq nüvə ilə fayl detalın adını, millimetrləri və detal rəngini saxlayır və Y oxunu yuxarı qaldırır, SolidWorks-ün detalları göstərdiyi kimi ({{ui:STEP AP214 (dəqiq bərk cism)}} sadə ixracı isə Z oxunu yuxarı qaldırır). Adda aksentli hərflər aksentini itirir, ASCII-dən kənar digər simvollar `_` olur.

## Detalı geri gətirmək

Faylı PartCraft-da açmaq (3-cü addım) bu versiyada hələ qurulmayıb: "SolidWorks ixracını açmaq: hələ qurulmayıb. …" yazır. CadCraft çertyoj tətbiqi faylı yenə açır və onun eskizlərini götürür.

1. {{ui:Fayl}} > {{ui:İxrac}} > {{ui:Detalları geri gətirmək üçün ixrac makrosu (.swb)}} seçin, `CadCraftExport.swb` faylını yükləyin və detallarınızın yanına qoyun.
2. SolidWorks-də detalı açın, **Tools > Macro > Run** seçin və `CadCraftExport.swb` faylını seçin. O, detalın yanında `<part>.cadcraft-sw.json` yazır və detalın heç nəyini dəyişmir.
3. PartCraft-da {{ui:Aç}} seçin və həmin faylı seçin, ya da onu 3D görünüşə atın.
4. Dəqiq nüvə ilə PartCraft detalı element-element yenidən qurur və nə etdiyini göstərir: məsələn "SolidWorks-dən 5 elementdən 5-i keçirildi (Flange.SLDPRT)", keçirilə bilməyən hər element ("Keçirilmədi: Sweep1 (Sweep)."), və həcmin SolidWorks-ün yazdığı ilə uyğun gəlib-gəlmədiyi.
5. {{ui:Saxla}} ilə PartCraft detalı kimi saxlayın.

Eskizlər bir əsas müstəvidə olduqda həmin müstəvidə, uyğun düz üz varsa detalın həmin düz üzündə (buna görə sonrakı redaktələri izləyir), əks halda sabit müstəvidə yerləşir. Yuvarlaqlaşdırma, faska və qabıq kənarlarının və üzlərinin tapılması nöqtələrdən aparılır və adlandırılmış istinadlar kimi saxlanılır. Qlobal dəyişənlər parametrlərə çevrilir (boşluqlu adlar alt xətt alır: "Bolt count" `Bolt_count` olur) və tənliklər eyni ölçülər üzərində tənliklərə çevrilir. Heç nə təxmin olunmur: qarşılığı olmayan hər şey siyahıya salınır.

CadCraft çertyoj tətbiqi eyni faylı açır və onun eskizlərini götürür.

:::note
Format `cadcraft-sw-export` versiya 1-dir: millimetr və dərəcələrdə sadə JSON. Daha yeni makrodan olan və ya düzgün olmayan fayl səbəbi ilə rədd olunur.
:::
