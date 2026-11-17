---
title: Fayllar: açmaq, saxlamaq və ixrac
summary: PartCraft-ın açdığı və saxladığı hissə və yığım faylları, hər ixrac formatı və nəyi saxladığı, fayllar haradadır və oflayn işləmədə və ya brauzerlər arasında nə dəyişir.
keywords: aç, saxla, ixrac, yükləmə, fayl, partcraft.json, yığım faylı, stl, 3mf, step, dxf, pdf, fayllarım haradadır, oflayn, fərqli saxla
from: e5fbc7e3
---

PartCraft kompüterinizdəki fayllarla işləyir. Heç vaxt hissəni yükləmir və heç bir hesab və ya bulud saxlaması iştirak etmir. Bulud saxlaması hələ mövcud deyil.

## PartCraft nəyi açır

| Fayl | Uzantı | Necə |
|---|---|---|
| PartCraft hissəsi | `.partcraft.json` | {{ui:Aç}}, {{key:Mod+O}}, və ya onu 3D görünüşə atın |
| PartCraft yığımı | `.partcraft-asm.json` | Eyni: PartCraft hansı növ olduğunu görür |
| STEP bərk cismi | `.step`, `.stp` | Üçbucaqlar kimi oxunan bərk gövdə: [STEP faylını açın və üzərində qurun](topic:import-step) |

STL, OBJ və 3MF meshləri də bərk gövdə kimi açılır ([STL, OBJ və ya 3MF açın](topic:open-meshes)), `.3dm` faylları da belə ([.3dm modelini açın](topic:open-3dm-files)). DXF, IGES və başqa proqramların öz hissə faylları açıla bilməz (bax [Hələ qurulmamış olanlar](topic:not-built-yet)).

Açarkən qaydalar:

- Hissə və ya yığım faylının adı `.json` ilə bitməlidir və fayl 50 MB-dan kiçik olmalıdır.
- Heç nə göstərilməzdən əvvəl fayllar yoxlanılır. Zədələnmiş və ya redaktə edilmiş fayl sadə səbəblə rədd edilir, məsələn "Bu PartCraft faylı deyil."
- Daha yeni PartCraft ilə saxlanılmış fayl rədd edilir: "Bu fayl daha yeni PartCraft ilə saxlanılıb (fayl versiyası 3); bu isə versiya 2-ni oxuyur." Köhnə fayllar açılır.
- Ekranda olan hissənin saxlanılmamış dəyişiklikləri varsa, PartCraft əvvəl soruşur: {{ui:Ləğv et}}, {{ui:Dəyişiklikləri sil}} və ya {{ui:Əvvəl saxla}}.

## Saxlama

{{ui:Saxla}} və ya {{key:Mod+S}} ekranda olanı saxlayır:

- Hissədə: `<hissə adı>.partcraft.json`, tam tarixçə (eskizlər, əlaqələr, ölçülər, xüsusiyyətlər, geri qaytarma mövqeyi), çertyoj vərəqinin kəsik, detal və GD&T qeydləri və əvvəlki versiyada idxal edilmiş STEP bərk cisminin tam mətni. Bu versiyanın qura bilmədiyi xüsusiyyətlər dəyişdirilmədən geri saxlanılır. Bərk cismin özü saxlanılmır; PartCraft faylı açanda onu tarixçədən yenidən qurur.
- Yığımda: `<yığım adı>.partcraft-asm.json`, **içində hər detal** ilə. Bir fayl bütün yığımı daşıyır, buna görə onu təkbaşına göndərə bilərsiniz.

Saxlamaq **yükləmədir**. Brauzeriniz faylı yükləmələr qovluğuna qoyur, və ya siz soruşmağı seçmisinizsə, harada saxlanacağını soruşur. Yenidən saxlamaq yeni yükləmə yaradır; brauzer köhnəni əvəz etmək əvəzinə `Part1 (1).partcraft.json` kimi ad verə bilər. Faylların adını dəyişin və ya {{pick:mac=Finder|windows=Fayl Explorer|linux=fayl menecerinizdə}} istədiyiniz kimi köçürün.

Hissə adındakı hərflər, rəqəmlər, boşluqlar, `_`, `.` və `-` xaricində olan simvollar fayl adında `_` olur.

:::tip
Əksər brauzerlərdə hər yükləmə üçün harada saxlanacağını soruşan parametr var. Hər dəfə "Fərqli saxla" seçimi istəyirsinizsə onu aktivləşdirin: Chrome və Edge-də parametrlərdə Yükləmələr altında; Firefox-da Ümumi, Fayllar və Tətbiqlər altında; Safari-də Ümumi, Fayl yükləmə yeri altında.
:::

Yükləmələrin haradan getdiyi və faylları necə təhlükəsiz saxlamaq barədə: [Fayllarınız haradadır](common:your-files).

## İxrac

{{ui:İxrac}} menyusu digər formatları yazır. Hər biri yükləmədir və hissənin adı ilə adlanır.

| Menyu elementi | Fayl | İçində nə var |
|---|---|---|
| {{ui:STL, 3D çap üçün}} | `<ad>.stl` | Bərk cismin üçbucaqlarının binary STL-i, millimetr, **Z yuxarı** |
| {{ui:3MF, 3D çap üçün}} | `<ad>.3mf` | Bərk cisim bir obyekt kimi 3MF, millimetr, **Z yuxarı** |
| {{ui:STEP AP242 (dəqiq bərk cisim)}} | `<ad>.step` | Bir dəqiq bərk cisim, millimetr, Z yuxarı: dəyirmi üzlər həqiqi silindrlər, konuslar, sferalar və torlar kimi. Digər CAD və CAM proqramları üçün istifadə olunan STEP |
| {{ui:STEP AP214 (dəqiq bərk cisim)}} | `<ad>.step` | Eyni dəqiq bərk cisim köhnə AP214 sxemində |
| {{ui:STEP (fasetli, mesh nüvəsi)}} | `<ad>.step` | Meshdən düz üzlərdən ibarət bərk cisim: **dəyirmi səthlər çoxlu kiçik düz fasetlərdir**. Millimetr, PartCraft-ın öz oxlarında (Y yuxarı). Dəqiq faylı qəbul etməyən proqram üçün |
| {{ui:Eskizin və ya düz üzün DXF-i}} | `<ad> - <eskiz>.dxf` və ya `<ad> - face.dxf` | DXF R12. Eskiz: eskizin öz koordinatlarında xətlər, qövslər, dairələr və nöqtələr, PROFILE, CONSTRUCTION və POINTS qatlarında. Seçilmiş düz üz: onun konturları bağlı polixətlər kimi (dəyirmi kənarlar fasetlər kimi) |
| {{ui:Çertyoj (PDF): görünüşlər, kəsik, detal, GD&T}} | `<ad> - drawing.pdf` | A3 çertyoj vərəqi: üç görünüş, izometrik, təyin olunubsa kəsik və detal, ümumi ölçülər, GD&T simvolları, çertyoj ştampı |

:::note
{{ui:STEP AP242 (dəqiq bərk cisim)}} deşikləri, çıxıntıları, filetləri, konusları, sferaları və torları öz həqiqi səthlərində yazır, buna görə digər proqram deşiyi silindr kimi seçə bilər; **Curves** (Əyrilər) bunu dəyişmir. Splayn yanları, modelləşdirilmiş vintlər və idxal edilmiş meshlər dəqiq səthə malik deyil və eyni bərk cismin içində düz fasetlər olaraq qalır; status paneli neçə olduğunu deyir. {{ui:STEP (fasetli, mesh nüvəsi)}} hər dəyirmi üzü fasetlər kimi yazır.
:::

- İxraclar ekranda olan hissənin ixracıdır. Yığımda ixrac söndürülüb; hələ yığım ixracı yoxdur.
- STL, 3MF, fasetli STEP və üz DXF həmişə fasetlərdən ibarətdir. **Curves** (Əyrilər) parametri (sağ paneldə heç nə seçilmədikdə) nə qədər incə olduğunu təyin edir: dövrədə 32-dən 256-ya qədər faset. STL və ya 3MF ixrac etməzdən əvvəl hamar çap üçün İncə və ya Çox incə seçin.
- PDF çertyoju oxucunun daxili Helvetica şriftindən istifadə edir. Göstərə bilmədiyi simvollar "?" kimi çap olunur.

Addım-addım: [Çap, STEP və DXF üçün ixrac](topic:export-files) və [Çertyoj vərəqi hazırlayın](topic:drawing-pdf).

## Saxlanılmamış iş

- PartCraft açıq hissə və ya yığımın bərpa nüsxəsini hər dəyişikliyin bir az sonra bu brauzerdə saxlayır, buna görə nasazlıq və ya bağlanmış tab işi itirmir: PartCraft-ı növbəti dəfə açanda "İşinizi bərpa edək?" soruşur. Bu saxlama deyil: işinizi saxlamaq üçün fayla yazın. Bax [Saxlanılmamış işi bərpa edin](common:recover).
- Saxlanılmamış dəyişikliklərlə tab-ı bağlamağa və ya yenidən yükləməyə çalışsanız, brauzer "Saytdan çıxılsın?" soruşur. Bu brauzerin öz qutusudur; PartCraft onun mətnini dəyişə bilməz.
- {{ui:Yeni}}, {{ui:Aç}} və yığımı bağlamaq saxlanılmamış dəyişiklikləri atmazdan əvvəl soruşur.

## Onlayn və oflayn

Hər şey kompüterinizdə baş verir: mesh nüvəsi (WebAssembly proqramı) tətbiqlə birlikdə yüklənir və həndəsəni yerli qurur, fayllar isə diskinizdən oxunur və ora yazılır. Heç bir hissə məlumatı şəbəkə üzərindən getmir. Bax [Mesh nüvəsi](topic:solid-kernels).

Heç bir bağlantı olmadan işləmək üçün, onlayn olarkən PartCraft-ı oflayn istifadə üçün saxlayın: tətbiq panelində {{ui:Oflayn üçün saxla}} seçin və "Saxlanılır: 40 / 212" kimi sayılana qədər gözləyin, **Oflayn hazırdır** yazana qədər. Saxlanılmış nüsxəyə 3D kitabxana və mesh nüvəsi daxildir, sonradan modelləşdirmə, saxlama, bütün ixraclar və çertyojlar oflayn işləyir. Əgər **Saxlamaq alınmadı** yazırsa, onlayn olarkən yenidən cəhd etmək üçün klikləyin; **Oflayn mövcud deyil** o deməkdir ki, bu brauzer pəncərəsi nüsxə saxlaya bilmir (şəxsi pəncərələr və bəzi idarə olunan kompüterlər). Nüsxə saxlanılmış halda **Oflayn hazırdır** klikləmək {{ui:Yenidən saxla (ən yeni versiyanı al)}} və {{ui:Oflayn nüsxəni sil}} təklif edir. Təfərrüat: [Oflayn işləmək](common:offline).

:::online
Siz onlaynsınız. Oflayn istifadə üçün saxlamasanız da, PartCraft yüklənəndən və status paneli "Mesh nüvəsi" çipi göstərəndən sonra bağlantı kəsilsə də işləməyə davam edə bilərsiniz. Yalnız səhifəni yenidən yükləməyin, bağlantı bərpa olunana qədər.
:::

:::offline
Siz oflaynsınız. PartCraft artıq açıqdırsa, işləməyə davam edin; saxlamaq və ixrac etmək işləyir. Tətbiq panelində **Oflayn hazırdır** yazırsa, PartCraft bağlantı olmadan da sıfırdan açılır; əks halda bu tab-ı yenidən yükləməyin.
:::

## Brauzerlər arasındakı fərqlər

- **Yükləmələr.** Hər brauzerin öz yükləmələr qovluğu və soruşma üsulu var. Əgər brauzer saytın fayl yükləməsinə icazə verib-vermədiyini soruşursa, icazə verin, əks halda saxlamaq və ixrac etmək işləməyəcək.
- **Faylı görünüşün üstünə sürükləyib buraxmaq** Chrome, Edge, Firefox və Safari-də işləyir.
- **Telefon və ya planşetdən fayllar.** iPhone və iPad-də Aç Fayllar tətbiqini göstərir; saxlanılmış fayllar Fayllara, Yükləmələrə gedir. Android-də Yükləmələr qovluğuna gedir.

Brauzerlər və ya əməliyyat sistemləri arasında faylların məzmunu fərqlənmir.
