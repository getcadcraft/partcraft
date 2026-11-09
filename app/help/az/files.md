---
title: Fayllar: açmaq, saxlamaq və ixrac
summary: PartCraft-ın açıb saxladığı detal və yığım faylları, hər ixrac formatı və onun saxladıqları, faylların haraya getdiyi və oflayn rejimdə və brauzerlər arasında nəyin dəyişdiyi.
keywords: aç, saxla, ixrac, yüklə, fayl, partcraft.json, yığım faylı, stl, 3mf, step, dxf, pdf, fayllarım haradadır, oflayn, fərqli saxla
from: c15c2c48
---

PartCraft kompüterinizdəki fayllarla işləyir. O heç vaxt detal yükləmir və hesab ya bulud yaddaşı iştirak etmir. Bulud saxlaması hələ mövcud deyil.

## PartCraft nəyi açır

| Fayl | Genişlənmə | Necə |
|---|---|---|
| PartCraft detalı | `.partcraft.json` | {{ui:Aç}}, {{key:Mod+O}} ya da faylı 3D görünüşün üzərinə buraxın |
| PartCraft yığımı | `.partcraft-asm.json` | Eyni: PartCraft hansı növ olduğunu özü tanıyır |
| STEP bərk cismi | `.step`, `.stp` | Üçbucaqlar kimi oxunan bərk cisim: [STEP faylını açın və üzərində qurun](topic:import-step) |

STL, OBJ və 3MF mesh faylları da bərk cisim kimi açılır ([STL, OBJ və ya 3MF açın](topic:open-meshes)), `.3dm` faylları da belədir ([.3dm modelini açın](topic:open-3dm-files)). DXF, IGES və digər proqramların öz detal faylları açıla bilmir (bax: [Hələ qurulmayanlar](topic:not-built-yet)).

Açarkən qaydalar:

- Detal və ya yığım faylının adı `.json` ilə bitməlidir və fayl 50 MB-dan kiçik olmalıdır.
- Fayllar göstərilməzdən əvvəl yoxlanılır. Zədələnmiş və ya dəyişdirilmiş fayl sadə səbəblə rədd edilir, məsələn: "Bu PartCraft faylı deyil."
- Daha yeni PartCraft ilə saxlanmış fayl rədd edilir: "Bu fayl daha yeni PartCraft ilə saxlanılıb (fayl versiyası 3); bu versiya 2-ni oxuyur." Köhnə fayllar açılır.
- Ekranda olan detalda saxlanılmamış dəyişikliklər varsa, PartCraft əvvəlcə soruşur: {{ui:Ləğv et}}, {{ui:Dəyişiklikləri sil}} ya da {{ui:Əvvəl saxla}}.

## Saxlama

{{ui:Saxla}} ya da {{key:Mod+S}} ekrandakını saxlayır:

- Detalda: `<detalın adı>.partcraft.json`, tam tarixçə (eskizlər, əlaqələr, ölçülər, elementlər, geri qaytarma mövqeyi), çertyoj vərəqinin kəsik, detal və GD&T qeydləri və əvvəlki versiyada idxal edilmiş STEP bərk cisminin tam mətni. Bu versiyanın qura bilmədiyi elementlər dəyişməz qalaraq saxlanılır. Bərk cismin özü saxlanılmır; PartCraft fayl açılanda onu tarixçədən yenidən qurur.
- Yığımda: `<yığımın adı>.partcraft-asm.json`, **içindəki bütün detallarla birlikdə**. Bütün yığım bir faylda olur, ona görə onu tək göndərə bilərsiniz.

Saxlama **yükləmədir**. Brauzeriniz faylı yükləmələr qovluğuna qoyur, ya da yer soruşmağı seçmisinizsə, harada saxlamağı soruşur. Yenidən saxlamaq yeni yükləmə yaradır; brauzer köhnəsini əvəz etmək əvəzinə `Part1 (1).partcraft.json` kimi ad verə bilər. Faylları {{pick:mac=Finder|windows=File Explorer|linux=fayl menecerinizdə}} istədiyiniz kimi adlandırın və ya köçürün.

Detalın adındakı hərflərdən, rəqəmlərdən, boşluqlardan, `_`, `.` və `-` işarələrindən başqa simvollar fayl adında `_` olur.

:::tip
Əksər brauzerlərdə hər yükləmə üçün yer soruşma parametri var. Hər dəfə "Fərqli saxla" seçimi istəyirsinizsə, onu aktivləşdirin: Chrome və Edge-də parametrlərdə Yükləmələr altında; Firefox-da Ümumi, Files and Applications altında; Safari-də Ümumi, Fayl yükləmə yeri altında.
:::

Yükləmələrin haraya getdiyi və faylların necə təhlükəsiz saxlanıldığı barədə daha çox: [Fayllarınız haraya gedir](common:your-files).

## İxrac

{{ui:İxrac}} menyusu digər formatları yazır. Hər biri yükləmədir və detalın adı ilə adlanır.

| Menyu elementi | Fayl | Onun içində nə var |
|---|---|---|
| {{ui:STL, 3D çap üçün}} | `<name>.stl` | Bərk cismin üçbucaqlarından ibarət ikili STL, millimetrlə, **Z yuxarı** |
| {{ui:3MF, 3D çap üçün}} | `<name>.3mf` | Bərk cisim bir obyekt kimi, millimetrlə, **Z yuxarı** olan 3MF |
| {{ui:STEP AP242 (dəqiq bərk cisim)}} | `<name>.step` | Bu versiyada hələ qurulmayıb (boz): dəqiq nüvə tələb edir |
| {{ui:STEP AP214 (dəqiq bərk cisim)}} | `<name>.step` | Bu versiyada hələ qurulmayıb (boz) |
| {{ui:STEP (fasetli, mesh nüvəsi)}} | `<name>.step` | Mesh-dən düz üzlərdən ibarət bərk cisim: **dairəvi səthlər çoxlu kiçik düz faset-lərdir**. Millimetrlə, PartCraft-ın öz oxlarında (Y yuxarı). Bu versiyada digər CAD proqramları üçün istifadə ediləcək STEP |
| {{ui:Eskizin və ya düz üzün DXF-i}} | `<name> - <sketch>.dxf` və ya `<name> - face.dxf` | DXF R12. Eskiz: xətlər, qövslər, çevrələr və nöqtələr eskizin öz koordinatlarında, PROFILE, CONSTRUCTION və POINTS qatlarında. Seçilmiş düz üz: onun konturları bağlı polixətlər kimi (dairəvi kənarlar faset kimi) |
| {{ui:Çertyoj (PDF): görünüşlər, kəsik, detal, GD&T}} | `<name> - drawing.pdf` | A3 çertyoj vərəqi: üç görünüş, izometrik, təyin olunubsa kəsik və detal, ümumi ölçülər, GD&T simvolları, əsas yazı |

:::note
{{ui:STEP AP242 (dəqiq bərk cisim)}} və {{ui:STEP AP214 (dəqiq bərk cisim)}} bu versiyada hələ qurulmayıb: {{ui:STEP (fasetli, mesh nüvəsi)}} istifadə edin. Forması və həcmi düzgündür, lakin hər dairəvi üz çoxlu düz faset olduğu üçün digər proqramlar deşiyi silindr kimi seçə bilmir. Bu vacibdirsə, əvvəlcə **Əyrilər** ayarını daha incə təyin edin.
:::

- İxrac olunanlar ekranda olan detalın nüsxəsidir. Yığımda ixrac söndürülüb; hələ yığım ixracı yoxdur.
- STL, 3MF, faset STEP və üz DXF həmişə fasetlərdən ibarətdir. **Əyrilər** ayarı (heç nə seçilməyəndə sağ paneldə) onların nə qədər incə olacağını təyin edir: tam dövrədə 32-dən 256-a qədər faset. STL və ya 3MF ixrac etməzdən əvvəl hamar çap üçün İncə və ya Çox incə seçin.
- PDF çertyoj oxucunun daxili Helvetica şriftindən istifadə edir. Göstərə bilmədiyi simvollar "?" kimi çap olunur.

Addım-addım: [İxrac: çap, STEP və DXF](topic:export-files) və [Çertyoj vərəqi hazırlayın](topic:drawing-pdf).

## Saxlanılmamış iş

- PartCraft bu brauzerdə açıq detalın və ya yığımın bərpa nüsxəsini hər dəyişikliyin ardınca qısa müddət sonra saxlayır, beləcə çökmə və ya bağlanmış vərəq işi itirmir: PartCraft-ı növbəti dəfə açanda "İşinizi bərpa edək?" soruşur. Bu saxlama deyil: işinizi saxlamaq üçün fayla yazın. Bax: [Saxlanılmamış işi bərpa edin](common:recover).
- Saxlanılmamış dəyişikliklərlə vərəqi bağlamağa və ya yenidən yükləməyə çalışsanız, brauzer "Saytdan çıxılsın?" soruşur. Bu brauzerin öz pəncərəsidir; PartCraft onun mətnini dəyişə bilməz.
- {{ui:Yeni}}, {{ui:Aç}} və yığımı bağlamaq saxlanılmamış dəyişiklikləri silməzdən əvvəl soruşur.

## Onlayn və oflayn

Hər şey kompüterinizdə baş verir: mesh nüvəsi (WebAssembly proqramı) tətbiqlə birlikdə yüklənir və həndəsəni yerli olaraq qurur, fayllar diskinizdən oxunur və ora yazılır. Heç bir detal məlumatı şəbəkə üzərindən getmir. Bax: [Mesh nüvəsi](topic:solid-kernels).

Heç bir bağlantı olmadan işləmək üçün onlayn ikən PartCraft-ı oflayn istifadə üçün saxlayın: tətbiq panelində {{ui:Oflayn üçün saxla}} seçin və **Oflayn hazırdır** yazana qədər gözləyin; bu müddətdə "Saxlanılır 40 / 212" kimi sayır. Saxlanılmış nüsxəyə 3D kitabxana və mesh nüvəsi daxildir, ona görə sonradan modelləşdirmə, saxlama, bütün ixraclar və çertyojlar oflayn işləyir. Əgər **Saxlamaq alınmadı** yazırsa, onlayn ikən yenidən cəhd etmək üçün üzərinə klikləyin; **Oflayn əlçatan deyil** o deməkdir ki, bu brauzer pəncərəsi nüsxə saxlaya bilmir (şəxsi pəncərələr və bəzi idarə olunan kompüterlər). Nüsxə saxlanılandan sonra **Oflayn hazırdır** üzərinə klik etmək {{ui:Yenidən saxla (ən yeni versiyanı al)}} və {{ui:Oflayn nüsxəni sil}} təklif edir. Ətraflı: [Oflayn işləmək](common:offline).

:::online
Siz onlayndasınız. Oflayn üçün saxlamasanız belə, PartCraft yükləndikdən və status panelindəki çip "Mesh kernel" dediyi zaman, bağlantı kəsilsə də işləməyə davam edə bilərsiniz. Yalnız bağlantı bərpa olunana qədər səhifəni yenidən yükləməyin.
:::

:::offline
Siz oflayndasınız. PartCraft artıq açıqdırsa, işləməyə davam edin; saxlama və ixrac hələ də işləyir. Tətbiq panelində **Oflayn hazırdır** yazırsa, PartCraft bağlantısız da sıfırdan açılır; əks halda bu sekmədə səhifəni yenidən yükləməyin.
:::

## Brauzerlər arasında fərqlər

- **Yükləmələr.** Hər brauzerin öz yükləmələr qovluğu və soruşma üsulu var. Brauzer bu saytın fayl yükləməsinə icazə verib-vermədiyini soruşursa, icazə verin; əks halda saxlama və ixrac işləməz.
- **Faylı görünüşün üzərinə sürükləyib buraxmaq** Chrome, Edge, Firefox və Safari-də işləyir.
- **Telefon və ya planşetdən fayllar.** iPhone və iPad-də Aç əməliyyatı Files tətbiqini göstərir; saxlanılan fayllar Files, Downloads-a gedir. Android-də onlar Downloads qovluğuna gedir.

Faylların məzmunu brauzerlər və ya əməliyyat sistemləri arasında heç bir fərq yaratmır.
