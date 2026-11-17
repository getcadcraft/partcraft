---
title: Gərginliyi və əyilməni yoxlayın (Simulyasiya)
summary: Material seçin, üzləri dayaqlayın, qüvvələr, təzyiqlər və ya detalın öz çəkisini əlavə edin, həll edin və von Mises gərginliyini, yerdəyişməni, təhlükəsizlik əmsalını, reaksiyaları və təbii tezlikləri modeldə oxuyun; metodun nəyi deyə bildiyi və deyə bilmədiyi ilə birlikdə.
keywords: simulyasiya, FEA, canlı analiz, redaktə edərkən yenilə, sındır, əvvəl nə qırılır, yük əmsalı, qeyri-xətti, plastiklik, axma, plastik gərilmə, bilineyr, kontakt, kontakt cütü, cərimə, bağlı, sürtünməsiz kontakt, CalculiX, .inp, .frd, sonlu elementlər, gərginlik, deformasiya, von Mises, yerdəyişmə, əyilmə, təhlükəsizlik əmsalı, təhlükəsizlik faktoru, axma həddi, reaksiya, yük, qüvvə, təzyiq, cazibə, öz çəkisi, sabit, sürtünməsiz, dayaq, məhdudiyyət, material, polad, alüminium, titan, ABS, PLA, naylon, təbii tezlik, modal, titrəmə, tor, element ölçüsü, tetraedr, tetraedrlər, tetraedr tor, voksel, tor keyfiyyəti, əsas gərginlik, ekvivalent deformasiya, xəta qiymətləndirməsi, əyri üzlər, deşiklər, yumrulaşdırmalar, adaptiv, adaptiv dəqiqləşdirmə, avtomatik dəqiqləşdirmə, h-adaptiv, yaxınlaşma, tor yaxınlaşması, dəqiq səth, kürə, konus, torus, spline, sərbəst forma
from: 6f2fdec1
---

Simulyasiya iş sahəsi "bu yük altında əyiləcəkmi, yoxsa sınacaqmı?" sualına cavab verir, modelləşdirdiyiniz detal üçün. Bu **xətti statik** tədqiqatdır (kiçik yerdəyişmələr, material elastik qalır) və ya **təbii tezlik** tədqiqatı, detalın üzlərini izləyən kvadratik tetraedrlərdən ibarət torda həll olunur (və ya istəsəniz, bərabər kiçik kublardan). Detalın adlandırılmış üzlərində işləyir, tor nüvəsinin verdiyi kimi (bax [Tor nüvəsi](topic:solid-kernels)).

Alətlər panelinin sol tərəfindəki **İş sahəsi** qutusundan **Simulyasiya** seçin. Detalınız dəyişmir; tədqiqat detal faylının içində saxlanılır və ona edilən hər dəyişiklik geri qaytarıla bilər.

## Tədqiqatı qurun

1. Sağ paneldə **Yeni tədqiqat** düyməsinə basın.
2. **Material** seçin. Panel onun sərtliyini (E), Puasson əmsalını, sıxlığını və axma gərginliyini göstərir. Dəyərlər tipik cədvəl rəqəmləridir; təchizatçınızın sertifikatlaşdırılmış dəyərləri fərqli ola bilər.
3. **Tor** seçin:
   - **Tetraedral (dəqiq)**, standart: xarici üzləri detalın üzləri üzərində olan 10 düyünlü tetraedrlər, deşiklərdə, yumrulaşdırmalarda və digər dairəvi üzlərdə əyri kənarlarla. Düz, silindrik, konik, kürəvi və torvari üzlərdə, fırlanmış və ekstrüziya olunmuş üzlərdə və sərbəst forma (B-spline) üzlərində düyünlər dəqiq səthin üzərində oturur; hər hansı digər növ üz öz göstərmə torunu izləyir, nəticə cədvəli neçə üzün bu cür olduğunu göstərir. Tor əyri üzlər, nazik divarlar və kəskin kənarların yaxınlığında özü-özlüyündə daha sıx olur.
   - **Voksel kublar (sürətli)**: detal bərabər kublarla doldurulur. Tez olur, lakin əyri üzlər pilləkən olur. Tetraedral tor olmadan əvvəl saxlanmış tədqiqatlar bu növdə qalır.
4. **Element ölçüsü** boş qoyun, avtomatik ölçü üçün (təxminən 12 000 tetraedr və ya 20 000 kub), ya da millimetrlə yazın. Panel incə nöqtələr əlavə olunmazdan əvvəl təxminən neçə element alınacağını göstərir. Tetraedrlərlə **Əyri üzlərdə kiçik elementlər** (standart olaraq açıq) deşikləri və yumrulaşdırmaları dəqiqləşdirir, gərginliyin adətən pik nöqtəsi də orada olur.

### Avtomatik dəqiqləşdirin

Tetraedrlərlə statik və ya burkulma tədqiqatı (istilik yükü olmadan), təbii tezlik tədqiqatı və stasionar istilik tədqiqatı **Avtomatik dəqiqləşdir (adaptiv)** təklif edir. Onu işarələyin və təyin edin:

- **Hədəf xəta (%)**: təxmini xəta bundan aşağı olduqda həll dayanır (başlanğıc üçün 1 %).
- **Ən çox keçid**: edə biləcəyi ən çox həll (başlanğıc üçün 5, ən çoxu 10).

Hər keçid həll edir, ən böyük təxmini xətaya malik elementləri tapır, onları bölür (və tor bütöv qalsın deyə lazım olan qədər qonşunu) və yenidən həll edir. Əyri üzlərdəki yeni düyünlər dəqiq səthin üzərinə düşür. Nəticələrdə, hər keçid üçün elementləri, naməlumları, təxmini xətanı və pik gərginliyi (və ya temperaturu) və yerdəyişməni (və ya istilik axınını) göstərən cədvəl və qrafik, və dayanma səbəbini deyən bir sətir görünür: hədəf çatdı, keçidlər qurtardı, növbəti tor çox böyük olardı, ya da keçid uğursuz oldu (bu halda son yaxşı keçid göstərilir).

Qiymətləndirməni təxmin kimi oxuyun. O (Zienkiewicz–Zhu, dəqiq cavablarla müqayisədə həqiqi xətanın 0.6-dan 0.95-ə qədərini göstərir) xətanı **bütün detal** üzrə ölçür, ona görə deşikdə və ya yumrulaşdırmada pik gərginlik qiymətləndirmə kiçik göründükdə adətən bir az səhv qalır: gərginlik konsentrasiyası üçün hədəfi 1 %-dən aşağı təyin edin və pikin keçiddən-keçidə necə sabitləşdiyinə baxın. Kəskin daxili küncdə və ya dayanıqlı üzün kənarında həqiqi gərginlik sonsuzdur, ona görə qiymətləndirmə heç vaxt ora çatmır: keçidlər qurtarır.

**Təbii tezliklər və burkulma.** Təbii tezlik tədqiqatı üçün qiymətləndirmə istədiyiniz bütün rejimləri, hər biri eyni sayılaraq əhatə edir; cədvəl və qrafik ilk iki tezliyi izləyir. Yalnız düz üzlü detalda tezlik keçiddən-keçidə yalnız azala bilər (hər tor əvvəlkini saxlayır); əyri üzlər də öz həqiqi formasına yaxınlaşır, bu da tezliyi az da olsa hər iki istiqamətə yerindən tərpədə bilər. Burkulma üçün qiymətləndirmə ön gərginliyi və burkulma rejimlərini əhatə edir, cədvəl isə yük əmsallarını izləyir. 100 × 10 × 10 mm polad çubuqda yoxlanılıb: ilk tezlik dörd keçid ərzində 812.4-dən 811.9 Hz-ə sabitləşir, Eyler–Bernulli-dən (ki, kəsilməni nəzərə almır) 0.4 % aşağı, sütunun yük əmsalı Eylerə 0.5 % daxilində.

## Dayaqlayın və yükləyin

Hər tədqiqatın ən azı bir dayağı və gərginlik üçün bir yükü olmalıdır.

1. Alətlər panelində {{ui:Sabit}} basın. Yeni dayaq seçilir və üzləri gözləyir: sabit tutulan üzlərə klikləyin (üzə yenidən klikləsəniz çıxarılır). Bitirdikdə **Seçimi bitirin** və ya {{key:Esc}} basın. Göy konuslar tutulmuş üzləri göstərir.
2. {{ui:Qüvvə}} basın və qüvvənin təsir etdiyi üzlərə klikləyin. Paneldə **Ümumi qüvvə** qiymətini nyutonla yazın və **İstiqamət** seçin: üzün içinə, ya da oxa görə. Qüvvə seçilmiş üzlər arasında sahəsinə görə bölünür. Narıncı oxlar onu göstərir.
3. Seçilmiş üzlərə itələyən MPa (N/mm²) təzyiq üçün {{ui:Təzyiq}} basın; mənfi təzyiq çəkir.

Daha çox növ paneldəki **Əlavə et** siyahısındadır: **Sürtünməsiz üz** (üz öz üzərində sürüşə bilər, lakin ondan uzaqlaşa bilməz — simmetriya müstəviləri və hamar dayaqlar üçün istifadə edin) və **Cazibə** (detalın öz çəkisi, 9.81 m/s², seçdiyiniz istiqamətdə).

Detalı sürüşməyə və ya fırlanmağa buraxan dayaq rədd olunur, hansı hərəkətin sərbəst qaldığını deyir.

## Həll edin və nəticələri oxuyun

{{ui:Həll et}} basın. İş fonda işləyir; **Dayandır** onu ləğv edir. Sonra:

- Detal **von Mises gərginliyi** ilə rənglənir; **Göstər**də **Yerdəyişmə** və ya **Təhlükəsizlik əmsalı** seçin. Legenda miqyası verir.
- Dəyərləri oxumaq üçün göstəricini detalın üzərinə aparın.
- Detalın əyilmiş halını görmək üçün **Deformasiya olunmuş forma** işarələyin (hərəkət **Miqyas** ilə böyüdülür; həqiqi olanı cədvəldədir).
- Cədvəldə ən böyük gərginlik və onun yeri, ən böyük yerdəyişmə, ən kiçik **təhlükəsizlik əmsalı** (axma gərginliyi ÷ von Mises gərginliyi; 1-dən aşağıdırsa material axır), tətbiq olunmuş yük və dayaqlardakı **reaksiyalar** (onlar yükü tarazlaşdırır) və istifadə olunmuş tor göstərilir.

**Təbii tezliklər** üçün həmin **Növ**ü seçin, **Rejimlər** sayını təyin edin və həll edin. Hər rejim öz tezliyini və formasını göstərir (formalar ən böyük hərəkətə görə 1-ə miqyaslanır).

Detalı dəyişsəniz nəticələr köhnəlmiş kimi işarələnir: yenidən həll edin.

## Axma və kontakt (qeyri-xətti tədqiqatlar)

"Material elastik qalır" ifadəsindən keçən iki tədqiqat növü daha var:

- **Qeyri-xətti (material axır)** materialın düz xəttini axma gərginliyinə qədər izləyir, sonra daha yastı meyl (**Axmadan sonra meyl**, boş buraxıldıqda E-nin 1 %-i) ilə davam edir. Yük **Yük addımlarında** artır; sabitləşməyən addım öz-özünə yarıya bölünür. Nəticələr qrafiklərə **Plastik gərilmə** əlavə edir və yükün nə qədərinin daşındığını deyir. Əgər addım hələ də sabitləşmirsə, tədqiqat son yaxşı addımda dayanır və ⚠ Problemlər paneli yerini göstərir: orada detalın gücü tükənib (uğursuzluq), ya da addımlar çox böyükdür.
- **Detal parçaları arasında kontakt** detalın ayrı parçalarının bir-birini itələməsinə imkan verir. **Kontakt cütü** əlavə edin, **Üzləri seçin** ilə A tərəfinin üzlərini (itələyən üzləri) seçin, sonra **B tərəfinin üzlərini seç** ilə B tərəfinin üzlərini. **Sürtünməsiz** parçalar itələyir, sürüşür və ayrılır; **bağlı** parçalar yapışıb qalır. Hər parça ayrıca tor olunur, ona görə aralarında kiçik boşluq normaldır. Kontakt cərimə üsuludur: parçalar bir-birinə bir az batır (**cərimə əmsalı** × E ÷ element ölçüsü kontaktın nə qədər sərt olduğunu təyin edir). Cədvəl ən dərin batmanı göstərir, Problemlər paneli isə bu, element ölçüsünün 1 %-indən çox olduqda xəbərdarlıq edir: əmsalı artırın və ya kiçik elementlər istifadə edin.

Hər ikisi tetraedral tor istifadə edir. Burada sürtünmə, böyük sürüşmə və böyük fırlanmalar həll olunmur.

## CalculiX-də işlədin

**İxrac › CalculiX faylı (.inp)** (və ya paneldə {{ui:CalculiX faylını saxla (.inp)}}) tədqiqatı CalculiX üçün giriş faylı kimi saxlayır; CalculiX sizin quraşdırıb özünüz işlətdiyiniz ayrı proqramdır: eyni tor, material, dayaqlar, yüklər və kontakt cütləri, mm, N və MPa ilə. Onu işlədin, sonra **İxrac › CalculiX nəticələri (.frd)** nəticə faylını eyni tora geri oxuyur və yerdəyişməni (və fayl gərginlikləri saxlayırsa von Mises gərginliyini) göstərir. Bu arada detalı və ya element ölçüsünü dəyişdiyinizsə, tor eyni deyil və PartCraft bunu deyir: yeni fayl saxlayın.

## Ona nə dərəcədə etibar etmək olar

PartCraft həll edicisini əl düsturları ilə yoxlayır (konsolun uc əyilməsi PL³/3EI daxilində 1 %, çubuğun uzanması PL/AE dəqiq, konsolun ilk tezliyi 3 % daxilində, lövhədəki deşiyin ətrafındakı gərginlik). Buna baxmayaraq, bu məhdudiyyətləri yadda saxlayın:

- **Tor.** Tetraedrlərlə PartCraft konsolun əyilməsini və əyilmə gərginliyini (0.3 % daxilində), deşikli lövhədəki gərginliyi (Kt, təxminən 1 % daxilində), təzyiq altında qalın borunu (Lamé, 0.3 % daxilində) və ilk tezliyi (0.4 % daxilində) yoxlayır. Cədvəl **tor keyfiyyətini** (element üzləri arasındakı ən kiçik və ən böyük bucaqlar; təxminən 10°-dən aşağı element zəifdir) və **təxmini gərginlik xətasını** göstərir: bir neçə faizdən çoxdursa, daha kiçik element ölçüsü ilə yenidən həll edin, ya da işi **Avtomatik dəqiqləşdir** görsün. Deşikli lövhədə və iki kənar çentikli çubuqda avtomatik dəqiqləşdirmə mətnə görə Kt-yə 1 % daxilində çatdı, bütün torun daha incə edilməsinin tələb etdiyi naməlumların təxminən altıda biri ilə. Voksel kublarla deşik və ya yumrulaşdırma kub ölçüsündə pilləkəndir, ona görə orada gərginlik qabadır.
- **Kəskin daxili künclərin və dayanıqlı üzlərin kənarlarının həqiqi pik gərginliyi yoxdur.** Orada dəyər elementlər kiçildikcə artmağa davam edir. Belə yerlərdən bir az aralıda gərginliyi oxuyun, ya da modeldə küncü yumrulaşdırın.
- **Oxunacaq nəticələr.** Von Mises gərginliyi, yerdəyişmə və təhlükəsizlik əmsalından başqa, tetraedral tədqiqat **ən böyük və ən kiçik əsas gərginliyi** (dartılma və sıxılma) və **ekvivalent deformasiyanı** göstərir. Elementləri görmək üçün **Torı göstər** işarələyin.
- **Statik tədqiqatlar xətti və elastikdir.** Axma və kontakt üçün yuxarıdakı qeyri-xətti tədqiqat növlərindən istifadə edin; böyük əyilmələr və yorğunluq həll olunmur. İstilik, istilik gərginliyi və xətti burkulma öz tədqiqat növləridir: bax [İstilik, istilik gərginliyi və burkulma](topic:thermal-and-buckling).
- **Hər material bütün istiqamətlərdə eynidir.** 3D çap plastikləri təbəqələri boyunca daha zəifdir, çox vaxt üçdə bir və ya daha çox.
- Bu laboratoriya versiyasıdır: vacib detalları başqa üsulla yoxlayın.

## Redaktə edərkən yeniləyin (Canlı)

Həll blokunda **Mən redaktə edərkən yenilə** işarələyin, simulyasiya cavabları redaktələrinizi izləyir. Ölçünü, yükü, materialı və ya mühiti dəyişin, dərhal **sürətli cavab** görünür, tədqiqatın elementlərindən dörd dəfə böyük elementlərlə hazırlanmış. Bir an dayandıqda (təxminən bir saniyə) tədqiqatın öz **dəqiqləşdirilmiş cavabı** onu əvəz edir. Nəticələr hansına baxdığınızı deyir ("Sürətli cavab" və ya "Dəqiqləşdirilmiş cavab") və element ölçüsünü göstərir. Sürətli cavab istiqamət və ölçü üçün yaxşıdır: polad konsolda yerdəyişmədə dəqiqləşdirilmişdən 1 %, gərginlikdə təxminən 4 % daxilində idi. Rəqəmləri istifadə edəcəyiniz yerdə dəqiqləşdirilmiş cavaba etibar edin. Statik, təbii tezlik, istilik və burkulma tədqiqatları belə işləyir; Canlı baxış parametridir və detal faylında saxlanmır. Özünüz basdığınız Həll növbəti redaktəyə qədər olduğu kimi qalır.

## Əvvəl nə qırılacağını tapın (Sındır)

Statik və ya burkulma tədqiqatı üçün **Sındır** blokunda **Əvvəl nə qırılır?** basın. PartCraft tədqiqatın yüklərini (qüvvələri, təzyiqləri və çəkini birlikdə) detal təslim olana qədər miqyaslayır və ən pisdən başlayaraq siyahı verir: **ilk axmaya qədər yük əmsalı** (bu bu günki yüklərdə ən böyük von Mises gərginliyinin materialın axma gərginliyinə çatdığı əmsal, orada qırmızı işarə ilə) və eyni dayaq və yüklər üçün **burkulmaya qədər yük əmsalı**. 4.3 əmsalı detalın axmadan əvvəl öz yükünün 4.3 qatını daşıdığı deməkdir; **1-dən kiçik əmsal detalın yüklü halda artıq təslim olduğu deməkdir** və bu Problemlər siyahısında xəta kimi görünür (ən zəif tapıntı heç nə uyğun olmadıqda belə qeyd kimi göstərilir). Əmsallar elementinizin ölçüsündə tetraedrlərlə xətti tədqiqatdan gəlir, ona görə onlar həmin tədqiqat qədər yaxşıdır: dayanıqlı üzdə və ya kəskin küncdə gərginliyin həqiqi piki yoxdur (bax aşağıda), axma əmsalı orada ehtiyatlı tərəfdə olacaq. Köməkçiniz eyni yoxlamanı `break_run` aləti ilə işlədə bilər.

## Əlaqəli

- [İstilik, istilik gərginliyi və burkulma](topic:thermal-and-buckling)
- [Yüklərdən forma böyüdün (Generativ)](topic:generative-design)
- [Məsafələri, bucaqları və kütləni ölçün](topic:measure)
- [Hələ qurulmayanlar](topic:not-built-yet)
