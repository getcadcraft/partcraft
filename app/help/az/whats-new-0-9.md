---
title: 0.9-da nə yeni var (əvvəlki)
summary: PartCraft 0.9 üzlər arasında filletlər və bərk cisimlərə qalınlaşdırma, minlərlə detaldan ibarət yığımlar, revizyalı Sənədlər anbarı, Solid FEM gərginlik əlavəsi, on qövs üsulu, Britaniya polad ölçüləri, Çap mərhələsi və rezin çap əlavələri əlavə edir.
keywords: 0.9-da nə yeni var, əvvəlki buraxılış, nə yeni var, what's new, buraxılış qeydləri, dəyişikliklər jurnalı, 0.9, üzlər arasında fillet, rolling ball, bir neçə kənarın filleti, qalınlaşdırma, səthlərdən bərk cisim, step qabığı, iges bərk cisim, skan filletləri, böyük yığım, yüngül göstəriş, 20000 detal, sənədlər, anbar, check out, revizya, buraxılış, harada istifadə olunur, rhino əlaqəsi, grasshopper, 3dm, kursorlar, zavod döşəməsi, iş növbəsi, solid fem, sonlu elementlər, von mises, təbii tezlik, qövs üsulları, 3 nöqtə qövsü, britaniya polad kəsikləri, mavi kitab, çap mərhələsi, rezin, goo, ctb, stol, yatır, nəyin ilk sınığı, əvvəl nə qırılır, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, canlı analiz, redaktə edərkən yenilə, sındır, nəyin ilk sınığı, yük əmsalı, qeyri-xətti, təslim, plastik deformasiya, təmas, calculix, hərəkət tədqiqi, təmizlik, səthlər, nurbs, hamarla, hull, zebra, engineer, generator, yaradılmış cisim, fotodan eskiz, çap üçün miqyas, çap üçün bölün, büzülmə, yerləşdirilmiş vərəqlər, g-kod, çertyoj, deşikləri ölçün, köməkçi, mcp, dillər, alət paneli sətirləri
from: 1dafd7c8
---

Bu, PartCraft 0.8.1 ilə müqayisədə 0.9-da nəyin dəyişdiyidir. Freeform səthlər indi bərk cisimlərə bağlanır, minlərlə detaldan ibarət yığımlar istifadə oluna bilən qalır, Sənədlər anbarı revizyaları saxlayır və Solid FEM əlavəsi detalda gərginliyi yoxlayır. Hər bənd onun harada tapılacağını göstərir.

## 0.9.1-də yeni

- **Dəqiq STEP ixracı.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} və {{ui:STEP AP214 (exact solid)}} indi işləyir. Deşiklər, çıxıntılar, filletlər, konuslar, kürələr və torlar həqiqi səthlərində, kənarlar üçün həqiqi dairələrlə yazılır, beləliklə başqa CAD və ya CAM proqramı deşiyi deşik kimi seçə bilər. Spline tərəflər, modelləşdirilmiş dişlər və idxal olunmuş meshlər eyni bərk cisimdə düz fasetlər olaraq qalır. Bax [Çap üçün ixrac, STEP və DXF](topic:export-files#for-other-cad-programs-step).
- **STEP daxil, dəqiq STEP xaric.** Açdığınız STEP faylı öz düz üzlərini, silindrlərini, konuslarını, kürələrini və torlarını saxlayır, ona görə {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} onları fasetlər əvəzinə həqiqi səthlər kimi geri yazır: bolt deşikləri olan təchizatçı şüası ilə gələn eyni üzlərlə çıxır, üstəlik onun içinə kəsdiyiniz hər şey. Faylın spline, süpürülmüş və fırlanmış üzləri fasetlər olaraq qalır, STL, OBJ və 3MF cisimləri də belədir. Əvvəl saxlanmış detal üçün STEP faylını yenidən açın. Bax [STEP faylını açın və üzərində qurun](topic:import-step).
- **Dəqiq STEP dükan üçün.** {{ui:Manufacture}}-da {{ui:Exact STEP (work coordinates)}} detalı quraşdırmanın iş başlanğıcında başlanğıcla və Z-i alət oxu boyunca yazır, G-kodun istifadə etdiyi koordinatlarla. Bax [Alət trayektoriyaları və G-kodu yaradın](topic:manufacture#exact-step-for-the-shop).

## Yeni

### Səthlər və bərk cisimlər

- **Üzlər arasında fillet.** {{ui:Workspace}} qutusunda {{ui:Surfaces}} seçin, sonra {{ui:Fillet between faces}}. Bir bərk cismin iki üzünü seçin, radiusu yazın ({{ui:Radius at the end (mm, 0 = the same)}} kənar boyunca dəyişən radius üçün). Nəticə sətri filletin ideal yuvarlanan kürədən nə qədər uzaq olduğunu göstərir, uyğun gəlməyən radius üz adı çəkilməklə rədd edilir. {{ui:Fillet several edges}} bir addımda bir çox kənarı yumrultur; üç yumrultmuş kənar düz üzlərin birləşdiyi yerdə kürə küncü üçün {{ui:Corners (sphere patch where three meet)}} qeyd edin. Bax [Freeform səthlər (NURBS)](topic:nurbs-surfaces).
- **Bərk cismə qalınlaşdırma.** Eyni iş sahəsində {{ui:Thicken into a solid}} səthə qalınlıq verir; {{ui:Other side}} onu digər istiqamətə böyüdür. Qatlanma və ya özünü kəsmə, səth və yer adı çəkilməklə rədd edilir.
- **Səthlərdən bərk cisimlər.** Kəsilmiş səthlər birləşmə, çıxma və kəsişmə ilə birləşdirilə bilər və bir geri alma addımı kimi detala yazılır. STEP bərk cismi bir qapalı qabıq kimi, IGES isə bir bərk cisim kimi yazır; hər ikisi bərk cisim kimi geri oxunur. Əgər üzlər kənar-kənar uyğunlaşmırsa, fayl ayrı üzlər alır və status sətri bunu deyir. Bərk cisimlər düyün redaktorunda da yaradıla bilər; bax [Düyün redaktoru](topic:nodes).
- **Skanlarda kənar və dəyişən filletlər.** Skanlara səthlər uyğunlaşdırdıqda, kənar filletləri (torlar) və təxminən düz kənar boyunca dəyişən radiuslu filletlər də axtarılır və radiusu ilə siyahıya alınır. Yalnız uydurma skanlarda sınaqdan keçirilib.

### Yığımlar, sənədlər və əlaqələr

- **Böyük yığımlar.** Surəti olan detallar bir meshi paylaşır, və {{ui:Views}} › {{ui:Lightweight display}} görünüşün hərəkət etməsi üçün qutular çəkir (çox böyük yığımlarda özü açılır; seçmə və birləşmələr hələ də real detalları istifadə edir). Detal ağacı ilk sətirlərini və qalanı üçün {{ui:Show 700 more}} düyməsini göstərir. Yığım faylları 50.000-ə qədər nüsxə və 100.000-ə qədər birləşmə saxlaya bilər. Bax [Yığım qurun](topic:build-assembly).
- **Sənədlər.** **Fayl** qrupunda {{ui:Documents…}} layihə qovluğu üzərində dialoq açır: check out və check in, revizya hərfləri, vəziyyətlər (işdə, baxış üçün, buraxılmış, köhnəlmiş), tarixçə, harada istifadə olunduğu və hissə siyahısı. Bax [Sənədlər və revizyalar (anbar)](topic:documents-walkthrough).
- **Canlı Rhino əlaqəsi.** Bir skript, `cadcraft_link.py`, Rhino və ya Grasshopper sənədini izləyir və yalnız dəyişmiş şeyi PartCraft-a göndərir, orada idxal olunmuş xüsusiyyət yeni formaya görə yenidən qurulur. Bu tək istiqamətlidir və Studio tələb edir. Bax [Canlı .3dm əlaqəsi](topic:live-3dm-link).
- **Bir-birinin kursorlarını görün.** Paylaşılan sessiyada hər iştirakçının kursoru adı və seçdiyi xüsusiyyəti ilə göstərilir. Bax [Digərləri ilə canlı işləyin](topic:work-live).
- **Zavod döşəməsi.** {{ui:Settings}} › {{ui:Add-ons}}-da Factory floor əlavəsini açın. {{ui:Manufacture}}-da proqramı göndərdikdən sonra onun sekmesi {{ui:Add to the factory job queue}} və ya {{ui:Save as a job file}} edə bilər. Heç vaxt dəzgahı göndərmir və işə salmır.

### Analiz və detallar

- **Solid FEM əlavəsi.** {{ui:Settings}} › {{ui:Add-ons}}-da {{ui:Solid FEM}}-i açın (siz açana qədər söndürülüdür) və sağ paneldə {{ui:Solid FEM}} sekmesi görünür. {{ui:Mesh the part}}, 3D görünüşdə sabit üzləri və yükləri seçin, {{ui:Solve}} edin və {{ui:Show on the model}} ilə yerdəyişmə, von Mises gərginliyi və ya təbii forma çəkin. Bax [Solid FEM: gərginlik yoxlaması](topic:solid-fem-check).
- **Eskizdə qövs, on üsulla.** Eskiz alət panelində {{ui:Arc}} yanındakı ox 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length və Continue siyahısını verir. Bax [Qövsü on üsulla çəkin](topic:sketch-arc-methods).
- **Britaniya polad ölçüləri.** Konstruksiyalar 976 Britaniya kəsiyi (UB, UC, PFC, EA, UEA, CHS, SHS, RHS) istifadə edə bilər; `305x165x40 UB` kimi ölçü yazın. Bax [Konstruktiv elementlər](topic:structural-members).

### Çap

- **Çap mərhələsi.** Alət panelində {{ui:Print stage}} düyməsi (3D Print əlavəsi, defolt olaraq açıq) detalın cisimlərini kəsikli stolun üzərinə qoyur: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, sonra USB üzərindən, Klipper (Moonraker), OctoPrint və ya PrusaLink ilə {{ui:Send to 3D printer}}. Təsdiqləməyincə heç nə göndərilmir və detalınız heç vaxt dəyişmir. STL və ya 3MF faylı üçün isə bax [Detalı 3D çapa hazırlayın](topic:print-3d).
- **Rezin çapı.** {{ui:Settings}} › {{ui:Add-ons}}-da əlavələr, hamısı siz açana qədər söndürülüdür: rezin slayseri, ekspozisiya testi və Elegoo GOO, SL1, Chitubox CBDDLP/CTB və Anycubic fayl formatları. Slayslama işçi axında işləyir, ona görə səhifə cavabdeh qalır.

## Bütün tətbiqlərdə

- Hər üzərinə gətirmə göstərişi Bootstrap alətlər ipucudur.
- Başlanğıc məsləhətinin bağlama düyməsi var; bağlandıqdan sonra bağlı qalır.
- Panelin sekmə sırası sığmadıqda kənarda kəsilmək əvəzinə yana sürüşür.
- Brauzer sekmesi PartCraft | CadCraft-dan əvvəl açıq sənədin adını göstərir.
- {{ui:Settings}} iş sahəsi {{ui:Layout}} seçimini seçimlərin açılan siyahısı kimi göstərir, dil qutusu isə quruluşun bütün dillərini sadalayır.
- Çəki və Temperatur Vahidlər parametrlərində vahid növləridir.

## Düzəldilib

- Eskiz Qövs menyusu indi hər üsulu sadalayır.
- Əlavə alət paneli və brauzer sekmesi başlığı 2026-11-09-da düzəldilib.

## Açıq məhdudiyyətlər

- Dəqiq STEP OpenCascade-də geri oxunub (düzgün bərk cisimlər, həcmlər əl ilə hesablanmış dəyərlərə bərabərdir). Hələ hər CAD və ya CAM proqramında açılmayıb və yığım dəqiq STEP kimi yazılmır.
- Heç bir detal real printerdə çap olunmayıb. Slayslama, G-kod və rezin faylları öz proqramlarımız və ya əvəzedici printer tərəfindən geri oxunub; heç bir rezin formatı printerdə yüklənməyib, printer ölçüləri və ekspozisiyalar başlanğıc nöqtəsidir.
- Solid FEM xətti, izotrop və elastikdir, hər detal üçün bir material, təmassız, axma və ya burulma olmadan. Sabit üzlərdə və kəskin künclərdə gərginlik meşdən asılıdır. Bu yoxlama üçün köməkçi vasitədir, mühəndis tərəfindən nəzərdən keçirilməyib.
- Böyük yığım vaxtları GPU olmayan serverdən gəlir; 20.000 detalın tam detallı kadrı orada hələ saniyələr çəkir.
- Filletlər üz cütləri üzərində işləyir; ümumi təpə qarışığı yoxdur və bir-birinə toxunmayan üzlər arasında fillet yoxdur.
- Rhino əlaqəsi heç vaxt real Rhino və ya Grasshopper içində işləməyib. Sənədlər eyni qovluqda iki proqramla sınaqdan keçirilib, şəbəkə paylaşımında iki insan tərəfindən yox.
- Real skanın səthlərinə uyğunlaşdırılması əl ilə yoxlanılmayıb. İngilis dilindən başqa dillər maşın qaralamalarıdır.
- Windows quraşdırıcıları kodla imzalanmayıb, macOS disk şəkli notarizasiya olunmayıb. Bax [Problemlərin həlli](topic:troubleshooting).

Daha əvvəlki dəyişikliklər [0.7-də nə yeni var](topic:whats-new-0-7) bölməsindədir.

## Əvvəlki: 0.8 və 0.8.1

Bu, PartCraft 0.7 ilə müqayisədə 0.8 və 0.8.1-də nəyin dəyişdiyidir. Simulyasiya redaktə edərkən cavab verir və nəyin ilk sınığını deyir, yığımlar hərəkət tədqiqatları alır, yeni iş sahələri freeform səthləri və fizikaya görə ölçülmüş detalları yaradır. 0.8.1 kiçik düzəliş buraxılışıdır.

### Yeni

**Simulyasiya**

- **Redaktə edərkən yenilə.** Həll blokunda {{ui:Update while I edit}} işarələyin və cavablar redaktələrinizi izləyir. Ölçünü, yükü və ya materialı dəyişin, dörd dəfə böyük elementlərlə hazırlanmış sürətli cavab dərhal görünür; təxminən bir saniyə dayandıqda, tədqiqatın öz təkmilləşdirilmiş cavabı onu əvəz edir. Nəticələr hansını gördüyünüzü deyir. Polad konsolda sürətli cavab təkmilləşdirilmişdən yerdəyişmədə 1 % daxilində, gərginlikdə isə təxminən 4 % fərqlənirdi. Bax [Gərginliyi və əyilməni yoxlayın](topic:simulation#update-while-you-edit-live).
- **Nəyin ilk sınığı.** Statik və ya burulma tədqiqatı üçün, **Break it** blokunda {{ui:What breaks first?}} yükləri detal təslim olana qədər miqyaslayır. Ən pisdən başlayaraq siyahıya alır: ilk təslimə yük əmsalı (gərginlik zirvəsinin olduğu yerdə qırmızı işarə ilə) və burulmaya yük əmsalı. 1-dən aşağı əmsal detalın yüklənmiş halda artıq təslim olduğu deməkdir və Problems xəta göstərir. Əmsallar xətti tədqiqatdan gəlir, ona görə də onlar onun qədər dəqiqdir. Bax [Gərginliyi və əyilməni yoxlayın](topic:simulation#find-out-what-breaks-first-break-it).
- **Axma və təmas.** İki əlavə tədqiqat növü: materialin düz xəttini təslim gərginliyinə qədər izlədiyi, sonra daha yastı əyrini izlədiyi qeyri-xətti tədqiqat (plastik deformasiya ilə) və ayrı parçaların bir-birini itələdiyi (sürtünməsiz) və ya yapışdığı (bağlı) təmas tədqiqatı. Həll edilə bilməyən yük addımı və ya bir-birinə çox dərin batan parçalar Problems panelində göstərilir. Sürtünmə, böyük sürüşmə, böyük fırlanmalar, böyük deformasiyalar və yorğunluq həll olunmur. Bax [Gərginliyi və əyilməni yoxlayın](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX üçün dekklər.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} tədqiqatı quraşdırıb işlətdiyiniz ayrı proqram olan CalculiX üçün saxlayır; {{ui:Export}} › {{ui:CalculiX results (.frd)}} onun nəticə faylını eyni meşə geri oxuyur. PartCraft o proqramı heç vaxt işə salmır və dekk saxlanıldıqdan sonra detal dəyişibsə bunu deyir.

**Yığımlar**

- **Hərəkət tədqiqatları.** {{ui:Assembly}} › {{ui:Motion}} vaxt üzrə (sabit sürət, yumşaldılmış, sinus və ya irəli-geri) bir birləşmənin dəyərini idarə edir, yığımı hər addımda birləşmələri və qapalı döngələri ilə yerləşdirir və nələrin toqquşduğunu və detalların necə yaxın gəldiyini bildirir. {{ui:Add a point}} nöqtənin mövqeyini, sürətini və təcilini, birləşmənin dəyərini və vaxta görə boşluğu çəkir; {{ui:Save CSV}} və {{ui:Save plot}} onları yazır. {{ui:Run}}-dan sonra işləmə zolağındakı Step through hər addıma yığımı aparır. Tədqiqatın parametrləri yığım faylında saxlanılır. Sürət və təcil qeydə alınmış mövqelərdən gəlir, ona görə itiləşmiş zirvə aşağı görünürsə daha çox addım götürün. Bax [Yığımı toqquşmalara və hərəkətə görə yoxlayın](topic:check-assembly#a-motion-study).

**Səthlər və fizikaya görə detallar**

- **Səthlər iş sahəsi.** Detalın yanında NURBS əyriləri və səthləri üçün **Workspace** qutusunda {{ui:Surfaces}} seçin: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} və {{ui:Zebra}}, davamlılıq (G0, G1 və ya G2) dəqiq səthlərdə ölçülür və istədiyinizdən pis kənar Problems-də Match düzəlişi ilə siyahıya alınır. {{ui:Fair}} hamar xətləri inflexiya və əyrilik sıçrayışları üçün ölçür və qeyri-hamar olanları tolerantlığınız daxilində yenidən qurur. Səthlər detal faylında saxlanılır və detalın xüsusiyyətlərini dəyişmir. Bax [Freeform səthlər (NURBS)](topic:nurbs-surfaces).
- **Engineer iş sahəsi.** İş sahəsi dəyişdiricisində {{ui:Engineer}} seçin, generator seçin və {{ui:New}} düyməsinə basın: skript detalı nə etməli olduğundan ölçür (istiliyi daşımaq, axınlar, təzyiq, material, çap prosesi) klassik düsturlarla və onu qurur, sonra istifadə etdiyi rəqəmləri mənbələri ilə, istehsal yoxlamaları və analiz alətləri üçün fayllar verir. Eyni giriş hər kompüterdə eyni detalı verir. Generator detalda saxlanılır və detalın açılması heç vaxt skript işlətmir. Bax [Fizikadan detallar: generatorlar](topic:engineer-generators) və [Generator yazın](topic:write-a-generator).

**Eskiz, çertyojlar və istehsal**

- **Fotodan eskiz.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} sadə zəmin üzərində düz detalın şəklini (kontur və deşiklər) və ya qələm çertyojunu xətlərə, qövslərə və dairələrə çevirir. Bir uzunluq verirsiniz, önizləməni yoxlayır və eskizi yaradırsınız. Bax [Eskiz əsasları](topic:sketch-basics#a-sketch-from-a-photo).
- **Çap üçün miqyas və bölmə.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} detalı dəyişmədən oxlar üzrə miqyaslayır, məsələn büzülmə payına görə. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} çox böyük detalı stolunuza sığmayan nömrəli parçalara kəsir, bu parçalar ştiftlər, açarlar, quyruqlu birləşmə, dübel deşikləri və ya maqnit cibləri ilə birləşdirilir. Bax [3D çap](topic:print-3d).
- **Yerləşdirilmiş vərəqlər G-koda.** {{ui:Export}} › {{ui:Nested sheets to G-code}} yerləşdirilmiş DXF-i oxuyur və seçdiyiniz post ilə hər vərəq üçün bir proqram yaradır: əvvəl deşiklər və kəsiklər, sonra konturlar. Giriş xətlərini, kəsmə ardıcıllığını və ya paylaşılan kənarları planlamır. Bax [Düz detalları vərəqlərdə yerləşdirin](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Çertyojların öz-özünə etdikləri.** {{ui:Sheet}} › {{ui:Automatic}} 1:1-ə qədər ən böyük standart miqyasda görünüşləri tutan ən kiçik A ölçülü vərəqi seçir. {{ui:Dimension the holes}} hər deşiyə mərkəz işarəsi, hər ölçü üçün bir çağırış və görünüşün sol-aşağı küncündən mövqelər qoyur. Bax [Çertyoj hazırlayın](topic:drawing-pdf).

**Bütün tətbiqlərdə**

- **Dillər.** Tətbiqlər 54 dildə gəlir. İngilis dilindən başqa olanlar, ana dili danışan biri onları oxuyana qədər maşın qaralamalarıdır.
- **Alət paneli sətirləri.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} Wrap (əvvəlki kimi), 2 sətir və ya 1 sətir seçir; sığmayan panel yana sürüşür. PartCraft-ın Feature lentində ən çox istifadə olunan alət böyük göstərilir və variantlar bölünmüş düymənin arxasında gizlədilir.
- **AI köməkçinizi qoşun.** Studio bütün səkkiz tətbiqə öz köməkçinizi qoşmaq üçün mərkəzdir; hər tətbiq üçün yalnız oxumaq, təklif etmək və ya redaktə icazəsi ilə. Qoşulmuş köməkçi bir cümlədən, məsələn yük üçün kronşteyn, detalın ölçüsünü verə, işini və hər yoxlamanı göstərə və onu qura bilər; nəyi yoxlamadığını bildirir (gərginlik konsentrasiyası, yorğunluq, plastiklərdə sürünmə). Bax [AI köməkçi ilə PartCraft istifadə edin](topic:use-with-ai-assistants).

### 0.8.1-də düzəldilib

- **Tam ekran kursor donması.** Üzərinə gətirmə seçimi indi məhdudlaşdırılıb. Səbəb ən yaxşı oxumamızdır və onu xəbər verən şəxslə təsdiqlənməyib.
- **İş vaxtı dili.** Studio və paketlənmiş nəşrlər işləyərkən dil dəyişə bilər; əvvəllər yalnız ingilis dili idi. Bu, hələ hər platformada sınaqdan keçməyib: dil dəyişmirsə bizə deyin.

### Bu versiyada hələ yoxdur

- AI qoşulması tamamlanmayıb: Studio daxilində bir kliklə qoşulma, brauzer AI üçün hostinq olunan konnektor, Studio daxilində öz API açarınız və dərc olunmuş MCP paketi vəd edilmir. Studio-nun öz AI-si yoxdur.
- Studio kodla imzalanmayıb: Windows xəbərdarlıq edə bilər, macOS sağ düymə və sonra Açmağı istəyir. Bax [Problemlərin həlli](topic:troubleshooting).
- Tolerans yığınları hələ də bir istiqamətlidir: bax [Tolerans yığınları](topic:tolerance-stackup).
- Qalanı [Hələ hazırlanmayanlar](topic:not-built-yet) səhifəsində sadalanır.

Daha əvvəlki dəyişikliklər [0.7-də nə yeni var](topic:whats-new-0-7) bölməsindədir.
