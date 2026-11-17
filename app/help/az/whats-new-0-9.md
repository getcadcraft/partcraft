---
title: 0.9-da yeniliklər
summary: PartCraft 0.9 səthlər arasında yumrultma və bərk cisimlərə qalınlıq verməyi, minlərlə hissədən ibarət yığımları, revizyonlu Sənədlər anbarını, Solid FEM gərginlik əlavəsini, on qövs üsulunu, Britaniya polad ölçülərini, Çap mərhələsini və qatran çapı əlavələrini əlavə edir.
keywords: yeniliklər, nədir yeni, buraxılış qeydləri, dəyişiklik jurnalı, 0.9, səthlər arasında yumrultma, yuvarlanan top, bir neçə kənarı yumrultmaq, qalınlaşdırma, səthdən bərk cisim, step qabığı, iges bərk cismi, skan yumrultmaları, böyük yığım, yüngül göstəriş, 20000 hissə, sənədlər, anbar, check out, revizyon, buraxılış, harada istifadə olunur, rhino bağlantısı, grasshopper, 3dm, kursorlar, fabrika sahəsi, iş növbəsi, solid fem, sonlu elementlər, von mises, təbii tezlik, qövs üsulları, 3 nöqtəli qövs, britaniya polad kəsikləri, blue book, çap mərhələsi, qatran, goo, ctb, yatağ, düzləşdir, səthlər, nurbs, düzəlt, hull, zebra, mühəndis, generator, yaradılmış gövdə, fotodan eskiz, çap üçün miqyas, çap üçün bölmə, büzülmə, yerləşdirilmiş təbəqələr, g-code, çertyoj, deşikləri ölçüləndir, köməkçi, mcp, dillər, alət paneli sətirləri
from: 96d9fbfa
---

Bu, PartCraft 0.8.1-ə nisbətən 0.9-da nəyin dəyişdiyidir. Azad səthlər indi bərk cisimlərə bağlanır, minlərlə hissəli yığımlar istifadə oluna bilən qalır, Sənədlər anbarı revizyonları saxlayır və Solid FEM əlavəsi hissədə gərginliyi yoxlayır. Hər maddə onun harada olduğunu deyir.

## 0.9.1-də yeni

- **Dəqiq STEP ixracı.** {{ui:İxrac}} › {{ui:STEP AP242 (dəqiq bərk cisim)}} və {{ui:STEP AP214 (dəqiq bərk cisim)}} indi işləyir. Deşiklər, çıxıntılar, yumrultmalar, konuslar, kürələr və torlar öz həqiqi səthlərində, dəqiq dairələr kənar kimi yazılır, buna görə başqa CAD və ya CAM proqramı deşiyi deşik kimi seçə bilir. Spline tərəflər, modelləşdirilmiş dişlər və idxal olunmuş meshlər eyni bərk cisimdə düz fasetlər olaraq qalır. Bax: [Çap, STEP və DXF üçün ixrac](topic:export-files#for-other-cad-programs-step).
- **STEP daxil, dəqiq STEP çıxır.** Açdığınız STEP faylı öz düz üzlərini, silindrlərini, konuslarını, kürələrini və torlarını saxlayır, buna görə {{ui:İxrac}} › {{ui:STEP AP242 (dəqiq bərk cisim)}} onları fasetlər əvəzinə həqiqi səthlər kimi geri yazır: təchizatçının deşikli şüası əvvəlki üzləri ilə və üzərinə kəsdiklərinizlə birlikdə çıxır. Faylın spline, süpürülmüş və fırlanmış üzləri fasetdə qalır, STL, OBJ və 3MF-dən gələn gövdələr də. Əvvəlcədən saxlanmış hissə üçün STEP faylını yenidən açın. Bax: [STEP faylını açın və onun üzərində qurun](topic:import-step).
- **Düz üzün DXF-ində həqiqi dairələr.** Düz üz seçiləndə {{ui:İxrac}} › {{ui:Eskizin və ya düz üzün DXF-i}} yuvarlaq deşikləri dairə kimi yazır, deşiyin öz mərkəzi və radiusu ilə, lazer, plazma və ya su cetli kəsici masası üçün. Digər yuvarlaq kənarlar hələ fasetdir.
- **Mağaza üçün dəqiq STEP.** {{ui:Manufacture}}-də {{ui:Dəqiq STEP (iş koordinatları)}} hissəni quraşdırmanın iş başlanğıcı ilə və Z alət oxu ilə yazır, G-kodun istifadə etdiyi koordinatlarla. Bax: [Alət yolları və G-kod yaradın](topic:manufacture#exact-step-for-the-shop).

## Yeni

### Səthlər və bərk cisimlər

- **Üzlər arasında yumrultma.** {{ui:Səthlər}} seçin {{ui:İş sahəsi}} qutusunda, sonra {{ui:Üzlər arasında yumrultma}}. Bir bərk cismin iki üzünü seçin, radiusu yazın ({{ui:Sonda radius (mm, 0 = eyni)}} isə kənar boyunca dəyişən radius üçün). Nəticə sətri yumrultmanın ideal yuvarlanan top təsvirindən nə qədər uzaq olduğunu deyir və yerə sığmayan radius üz adı ilə rədd olunur. {{ui:Bir neçə kənarı yumrultmaq}} çox kənarı bir addımda yumrulduğu üçün; üç yumrulmuş kənarın düz üzləri birləşdiyi yerdə kürə künc üçün {{ui:Künclər (üçünün birləşdiyi yerdə kürə yamağı)}} seçin. Bax: [Azad səthlər (NURBS)](topic:nurbs-surfaces).
- **Bərk cismə qalınlıq.** Eyni iş sahəsində {{ui:Bərk cismə qalınlıq ver}} səthə qalınlıq verir; {{ui:Digər tərəf}} onu başqa istiqamətə böyüdür. Qatlanma və ya özünü kəsmə üz və yer adı ilə rədd olunur.
- **Səthlərdən bərk cisimlər.** Kəsilmiş səthlər birləşmə, çıxarma və kəsişmə ilə birləşdirilə bilər və hissəyə bir geri qaytarma addımı kimi yazılır. STEP bərk cismi bir qapalı qabıq kimi, IGES isə bir bərk cisim kimi yazır; hər ikisi bərk cisim kimi geri oxunur. Üzlər kənar-kənar cüt olmasa, fayl ayrı üzlər alır və status sətri bunu deyir. Bərk cisimlər node redaktorunda da yaradıla bilər; bax: [Node redaktoru](topic:nodes).
- **Skanlarda kənar və dəyişən yumrultmalar.** Səthləri skana uyğunlaşdıranda, kifayət qədər düz kənar boyunca rim yumrultmaları (torlar) və dəyişən radiuslu yumrultmalar da axtarılır və radiusu ilə siyahıya salınır. Yalnız uydurma skanlarda sınaqdan keçirilib.

### Yığımlar, sənədlər və bağlantılar

- **Böyük yığımlar.** Surət olan hissələr bir meshi paylaşır, {{ui:Görünüşlər}} › {{ui:Yüngül göstəriş}} isə görünüşün hərəkət etməsi üçün qutular çəkir (çox böyük yığımlar üçün avtomatik açılır; seçmə və birləşmələr hələ də real hissələrlə işləyir). Hissə ağacı ilk sətirləri və qalanı üçün {{ui:700 daha çox göstər}} düyməsini göstərir. Yığım faylları 50 000-ə qədər nümunə və 100 000 birləşmə saxlaya bilər. Bax: [Yığım qurun](topic:build-assembly).
- **Sənədlər.** **Fayl** qrupunda {{ui:Sənədlər…}} layihə qovluğu üzərində dialoq açır: check out və check in, revizyon hərfləri, vəziyyətlər (işdə, baxış üçün, buraxılmış, köhnəlmiş), tarixçə, harada istifadə olunduğu və hissələr siyahısı. Bax: [Sənədlər və revizyonlar (anbar)](topic:documents-walkthrough).
- **Canlı Rhino bağlantısı.** Bir skript, `cadcraft_link.py`, Rhino və ya Grasshopper sənədini izləyir və yalnız dəyişən hissəni PartCraft-a göndərir; orada idxal olunmuş element yeni formaya görə yenidən qurulur. Yalnız bir istiqamətdədir və Studio tələb edir. Bax: [Canlı .3dm bağlantısı](topic:live-3dm-link).
- **Bir-birinin kursorlarını görün.** Paylaşılan sessiyada hər adamın kursoru adı və seçdiyi element ilə görünür. Bax: [Başqaları ilə canlı işləyin](topic:work-live).
- **Fabrika sahəsi.** {{ui:Parametrlər}} › {{ui:Əlavələr}} altında Fabrika sahəsi əlavəsini açın. {{ui:Manufacture}}-də proqram göndərdikdən sonra onun sekməsi {{ui:Fabrika iş növbəsinə əlavə et}} və ya {{ui:İş faylı kimi saxla}} edə bilər. Heç vaxt maşına göndərmir və işə salmır.

### Analiz və hissələr

- **Solid FEM əlavəsi.** {{ui:Parametrlər}} › {{ui:Əlavələr}} altında {{ui:Solid FEM}}-i açın (siz açana qədər söndürülüdür) və sağ paneldə {{ui:Solid FEM}} sekməsi görünür. {{ui:Hissəni meshlə}}, 3D görünüşdə sabit üzləri və yükləri seçin, {{ui:Həll et}} basın və {{ui:Modelin üzərində göstər}} ilə yerdəyişmə, von Mises gərginliyi və ya mod formasını çəkin. Bax: [Solid FEM: gərginlik yoxlaması](topic:solid-fem-check).
- **Eskizdə qövs, on üsulla.** Eskiz alətlər panelində {{ui:Qövs}} yanındakı ox 3 nöqtə, Başlanğıc Mərkəz Son, Başlanğıc Mərkəz Bucaq, Başlanğıc Mərkəz Uzunluq, Başlanğıc Son Bucaq, Başlanğıc Son İstiqamət, Başlanğıc Son Radius, Mərkəz Başlanğıc Son, Mərkəz Başlanğıc Bucaq, Mərkəz Başlanğıc Uzunluq və Davam etdir siyahısını verir. Bax: [Qövsü on üsulla çəkin](topic:sketch-arc-methods).
- **Britaniya polad ölçüləri.** Çərçivə elementləri 976 Britaniya kəsiyindən (UB, UC, PFC, EA, UEA, CHS, SHS, RHS) istifadə edə bilər; `305x165x40 UB` kimi ölçü yazın. Bax: [Konstruktiv elementlər](topic:structural-members).

### Çap

- **Çap mərhələsi.** Alət panelində {{ui:Çap mərhələsi}} düyməsi (3D Print əlavəsi, defolt açıqdır) hissənizin gövdələrini nöqtəli yatağa qoyur: {{ui:Düzləşdir}}, {{ui:90° döndür}}, {{ui:Yatağa yerləşdir}}, {{ui:Hamısını yatağa sığdır}}, {{ui:Qatları önizləmə}}, sonra USB, Klipper (Moonraker), OctoPrint və ya PrusaLink ilə {{ui:3D printerə göndər}}. Siz təsdiq etməyincə heç nə göndərilmir və hissəniz heç vaxt dəyişmir. STL və ya 3MF faylı üçün isə bax: [3D çap üçün hissəni hazırlayın](topic:print-3d).
- **Qatran çapı.** Əlavələr {{ui:Parametrlər}} › {{ui:Əlavələr}} altındadır, hamısı siz açana qədər söndürülüdür: qatran slaysı, ekspozisiya testi və Elegoo GOO, SL1, Chitubox CBDDLP/CTB və Anycubic fayl formatları. Dilimləmə işçi thread-də işləyir, buna görə səhifə cavab verməyə davam edir.

## Hər tətbiqdə

- Hər hover göstərişi Bootstrap tooltip-dir.
- Başlanğıc tövsiyəsinin bağlama düyməsi var; bağlanmış qalır.
- Sığmayan sekmə sırası yan tərəfə sürüşür, kəsilmir.
- Brauzer sekmesi PartCraft | CadCraft-dan əvvəl açıq sənədin adını göstərir.
- {{ui:Parametrlər}} iş sahəsinin {{ui:Tərtibat}}-ını seçimlərin açılan siyahısı kimi göstərir, dil qutusu isə quruluşun bütün dillərini siyahıya salır.
- Çəki və Temperatur Vahidlər parametrlərində vahid növləridir.

## Düzəldilib

- Eskizin Qövs menyusu indi hər üsulu siyahıya salır.
- Əlavə alət paneli və brauzer sekmə başlığı 2026-11-09-da düzəldildi.

## Dürüst məhdudiyyətlər

- Dəqiq STEP OpenCascade-də yenidən oxundu (etibarlı bərk cisimlər, əllə hesablanmış həcmlərə bərabər həcmlər). Hər CAD və ya CAM proqramında hələ açılmayıb və yığım dəqiq STEP kimi yazılmır.
- Heç nə real printerdə çap olunmayıb. Dilimləmə, G-kod və qatran faylları öz proqramlarımız və ya saxta printer tərəfindən oxunub; qatran formatlarından heç biri printerə yüklənməyib, printer ölçüləri və ekspozisiyalar başlanğıc nöqtəsidir.
- Solid FEM xətti, izotrop və elastikdir, hər hissə üçün bir material ilə, kontakt, axma və ya burkulma yoxdur. Sabit üzlərdə və iti künclərdə gərginlik meshdən asılıdır. Bu, yoxlama vasitəsidir, mühəndis tərəfindən nəzərdən keçirilməyib.
- Böyük yığımların vaxtları GPU-suz serverdən gəlir; 20 000 hissəli tam detallı kadr orada hələ də saniyələr çəkir.
- Yumrultmalar üzlərin cütləri ilə işləyir; ümumi təpə qarışığı yoxdur və bir-birinə toxunmayan üzlər arasında yumrultma yoxdur.
- Rhino bağlantısı heç vaxt real Rhino və ya Grasshopper daxilində işləməyib. Sənədlər eyni qovluqda iki proqramla sınaqdan keçirilib, şəbəkə paylaşımında iki adamla yox.
- Real skanın səthlərinə uyğunlaşdırılması əl ilə yoxlanılmayıb. İngilis dilindən başqa dillər maşın qaralamalarıdır.
- Windows quraşdırıcıları kod imzalı deyil, macOS disk təsviri notarizasiya olunmayıb. Bax: [Problemlərin həlli](topic:troubleshooting).

Əvvəlki dəyişikliklər [0.7-də yeniliklər](topic:whats-new-0-7) bölməsindədir.

## Əvvəlki: 0.8 və 0.8.1

Bu, PartCraft 0.7-yə nisbətən 0.8 və 0.8.1-də nəyin dəyişdiyidir. Simulyasiya siz redaktə edərkən cavab verir və nəyin əvvəl qırılacağını deyir, yığımlar hərəkət tədqiqatı alır, yeni iş sahələri azad səthləri və fizikadan ölçülmüş hissələri yaradır. 0.8.1 kiçik düzəliş buraxılışıdır.

### Yeni

**Simulyasiya**

- **Redaktə edərkən yenilə.** Həll blokunda {{ui:Redaktə edərkən yenilə}} işarələyin, cavablar redaktələrinizi izləyir. Ölçünü, yükü və ya materialı dəyişin, dörd dəfə böyük elementlərlə hazırlanmış sürətli cavab dərhal görünür; təxminən bir saniyə dayandıqda tədqiqatın öz təkmilləşdirilmiş cavabı onu əvəz edir. Nəticələr hansını gördüyünüzü deyir. Polad konsol üzərində sürətli cavab yerdəyişmədə təkmilləşdirilmişdən 1 % daxilində, gərginlikdə isə təqribən 4 % idi. Bax: [Gərginlik və yerdəyişməni yoxlayın](topic:simulation#update-while-you-edit-live).
- **Nə əvvəl qırılır.** Statik və ya burkulma tədqiqatı üçün **Qır** blokunda {{ui:Əvvəl nə qırılır?}} yüklər hissə təslim olana qədər miqyaslanır. Ən pisdən başlayaraq, birinci axmaya qədər yük əmsalını (gərginliyin pik olduğu yerdə qırmızı işarə ilə) və burkulmaya qədər yük əmsalını siyahıya salır. 1-dən aşağı əmsal hissənin artıq yükləndiyi halda təslim olduğunu göstərir və Problemlər xəta göstərir. Əmsallar xətti tədqiqatdan gəlir, buna görə onlar onun qədər yaxşıdır. Bax: [Gərginlik və yerdəyişməni yoxlayın](topic:simulation#find-out-what-breaks-first-break-it).
- **Axma və kontakt.** İki əlavə tədqiqat növü: qeyri-xətti olan, materialın axma gərginliyinə qədər düz xətti izlədiyi və sonra yastı bucaq aldığı, plastik gərginlik çəkildiyi; və kontakt olan, ayrı hissələrin bir-birini itələdiyi (sürtünməsiz) və ya yapışdığı (bağlı). Yerinə yetməyən yük addımı və ya bir-birinə çox dərinə batan hissələr Problemlər panelində göstərilir. Sürtünmə, böyük sürüşmə, böyük fırlanmalar, böyük deformasiyalar və yorğunluq həll olunmur. Bax: [Gərginlik və yerdəyişməni yoxlayın](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX üçün decks.** {{ui:İxrac}} › {{ui:CalculiX deck (.inp)}} tədqiqatı CalculiX üçün saxlayır, bu sizin qurduğunuz və işlətdiyiniz ayrı proqramdır; {{ui:İxrac}} › {{ui:CalculiX nəticələri (.frd)}} onun nəticə faylını eyni meshə geri oxuyur. PartCraft həmin proqramı heç vaxt işə salmır və deck saxlanıldıqdan sonra hissə dəyişibsə bunu deyir.

**Yığımlar**

- **Hərəkət tədqiqatları.** {{ui:Yığım}} › {{ui:Hərəkət}} bir birləşmənin dəyərini verdiyiniz vaxt boyunca sürür (sabit sürət, yumşaq, sinus və ya get-qayıt), yığımı hər addımda birləşmələri və qapalı dövrələri ilə yerləşdirir və hansı toqquşmaların olduğunu və hissələrin nə qədər yaxınlaşdığını bildirir. {{ui:Nöqtə əlavə et}} nöqtənin mövqeyini, sürətini və təcilini, birləşmənin dəyərini və aralığı vaxta görə çəkir; {{ui:CSV saxla}} və {{ui:Qrafiki saxla}} onları yazır. {{ui:İşə sal}}-dan sonra işə salma çubuğunda Addım ilə yığımı istənilən addıma aparın. Tədqiqatın parametrləri yığım faylında saxlanılır. Sürət və təcil qeydə alınmış mövqelərdən gəlir, buna görə kəskin pik aşağı oxunursa daha çox addım istifadə edin. Bax: [Yığımı toqquşma və hərəkət üçün yoxlayın](topic:check-assembly#a-motion-study).

**Səthlər və fizikadan hissələr**

- **Səthlər iş sahəsi.** Hissənin yanında NURBS əyriləri və səthləri üçün {{ui:İş sahəsi}} qutusunda {{ui:Səthlər}} seçin: {{ui:Əyri}}, {{ui:Loft}}, {{ui:Süpürmə}}, {{ui:Uyğunlaşdır}} və {{ui:Zebra}}, davamlılıq (G0, G1 və ya G2) dəqiq səthlər üzərində ölçülür və istədiyinizdən pis kənar Problemlərdə Uyğunlaşdırma düzəlişi ilə siyahıya salınır. {{ui:Hamarla}} qabıq xətlərində qalxmaları və əyrilik sıçrayışlarını ölçür və qeyri-hamar olanları tolerantlığınız daxilində yenidən qurur. Səthlər hissə faylında saxlanılır və hissənin elementlərini dəyişmir. Bax: [Azad səthlər (NURBS)](topic:nurbs-surfaces).
- **Mühəndis iş sahəsi.** İş sahəsi qutusunda {{ui:Mühəndis}} seçin, generator seçin və {{ui:Yeni}} basın: skript hissəni nə etməli olduğundan ölçür (istiliyi hərəkət etdirmək, axınlar, təzyiq, material, çap prosesi) dərslik düsturları ilə və onu qurur, sonra istifadə etdiyi rəqəmləri mənbələri ilə, istehsal yoxlamalarını və təhlil alətləri üçün faylları qaytarır. Eyni girişlər istənilən kompüterdə eyni hissəni verir. Generator hissədə saxlanılır və hissəni açmaq heç vaxt skript işlətmir. Bax: [Fizikadan hissələr: generatorlar](topic:engineer-generators) və [Generator yazın](topic:write-a-generator).

**Eskiz, çertyoj və istehsal**

- **Fotodan eskiz.** {{ui:Elementlər}} › {{ui:Daha çox}} › {{ui:Fotodan eskiz…}} sadə zəmində yastı hissənin şəklini (kontur və deşiklər) və ya qələm çertyojunu xətlərə, qövslərə və dairələrə köçürür. Siz bir ölçü verirsiniz, önizləməyə baxırsınız və eskizi yaradırsınız. Bax: [Eskizin əsasları](topic:sketch-basics#a-sketch-from-a-photo).
- **Çap üçün miqyas və bölmə.** {{ui:İxrac}} › {{ui:Çap üçün miqyas (STL və ya 3MF)…}} hissəni dəyişmədən oxlar üzrə miqyaslayır, məsələn büzülmə payı ilə. {{ui:İxrac}} › {{ui:Çap üçün bölün (hissələrin zip-i)…}} yatağınız üçün çox böyük hissəni nömrəli parçalara bölür, bunlar pinlər, açarlar, quyruqlu birləşmələr, dübel deşikləri və ya maqnit cibləri ilə birləşir. Bax: [3D çap](topic:print-3d).
- **Yerləşdirilmiş təbəqələrdən G-kod.** {{ui:İxrac}} › {{ui:Yerləşdirilmiş təbəqələrdən G-kod}} yerləşdirilmiş DXF-i oxuyur və seçdiyiniz post vasitəsilə hər təbəqə üçün bir proqram yaradır: əvvəl deşiklər və kəsiklər, sonra konturlar. Giriş xətləri, kəsmə sırası və ortaq kənarları planlaşdırmır. Bax: [Düz hissələri təbəqələrdə yerləşdirin](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Çertyojlar özləri daha çox edir.** {{ui:Vərəq}} › {{ui:Avtomatik}} görünüşləri 1:1-ə qədər ən böyük standart miqyasda saxlayan ən kiçik A ölçülü vərəqi seçir. {{ui:Deşikləri ölçüləndirin}} hər deşiyə mərkəz işarəsi, ölçü başına bir çağırış və görünüşün aşağı-sol küncündən mövqelər qoyur. Bax: [Çertyoj hazırlayın](topic:drawing-pdf).

**Hər tətbiqdə**

- **Dillər.** Tətbiqlər 54 dildə gəlir. İngilis dilindən başqa olanlar ana dili danışan oxuyana qədər maşın qaralamalarıdır.
- **Alət paneli sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət paneli sətirləri}} Sarmal (əvvəlki kimi), 2 sətir və ya 1 sətir seçir; sığmayan zolaq yan tərəfə sürüşür. PartCraft-ın Element lenti ən çox istifadə olunan aləti böyük göstərir və variantları bölünmüş düymənin arxasında gizlədir.
- **AI köməkçinizi qoşun.** Studio bütün səkkiz tətbiqə öz köməkçinizi qoşmaq üçün mərkəzdir, hər tətbiq üçün yalnız oxuma, təklif və ya redaktə icazəsi ilə. Qoşulmuş köməkçi bir cümlədən, məsələn yük üçün tutacaq, hissənin ölçüsünü verə, işini və hər yoxlamanı göstərə və onu qura bilər; nəyi yoxlamadığını deyir (gərginlik konsentrasiyası, yorğunluq, plastikdə sürünmə). Bax: [AI köməkçisi ilə PartCraft-ı istifadə edin](topic:use-with-ai-assistants).

### 0.8.1-də düzəldilib

- **Tam ekran kursorunun donması.** Üstündən keçmə seçimi indi məhdudlaşdırılıb. Səbəb ən yaxşı oxumamızdır və bildirən şəxslə təsdiqlənməyib.
- **İş vaxtı dili.** Studio və paketlənmiş nəşrlər işləyərkən dili dəyişə bilir; əvvəllər yalnız ingilis dili var idi. Bu, hələ hər platformada sınaqdan keçirilməyib: dil dəyişmirsə bizə bildirin.

### Bu versiyada hələ yoxdur

- AI-nı qoşmaq hələ bitməyib: Studio daxilində bir kliklə qoşulma, brauzer AI-si üçün hostinq olunan konnektor, Studio daxilində öz API açarınız və dərc olunmuş MCP paketi vəd edilmir. Studio-da heç bir AI yoxdur.
- Studio kod imzalı deyil: Windows xəbərdarlıq verə bilər, macOS sağ klik və sonra Aç soruşur. Bax: [Problemlərin həlli](topic:troubleshooting).
- Ölçü zəncirləri hələ bir istiqamətlidir: bax: [Tolerans zəncirləri](topic:tolerance-stackup).
- Qalanı [Hələ qurulmayanlar](topic:not-built-yet) siyahısındadır.

Əvvəlki dəyişikliklər [0.7-də yeniliklər](topic:whats-new-0-7) bölməsindədir.
