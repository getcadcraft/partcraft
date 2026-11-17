---
title: Hələ qurulmayanlar
summary: Bu PartCraft versiyasının hələ etmədikləri, burulan süpürmələrdən düym göstərişinə, çertyoj ölçülərinə və alt-yığımlara qədər; bunun əvəzinə bu gün nə etmək lazım olduğu ilə birlikdə.
keywords: çatışmayan, hələ deyil, məhdudiyyətlər, yol xəritəsi, dəqiq nüvə, yuvarlaqlaşdırma, faska, qabıq, süpürmə, loft, STEP idxalı, simulyasiya, istehsal, burulan süpürmə, loft sonu tangensi, üz yuvarlaqlaşdırması, tənliklər, düym, çertyoj ölçüləri, alt-yığımlar, bulud, planşet, telefon
from: 9b868162
---

PartCraft erkən versiyadır. Bu səhifə nə etmədiyini sadalayır ki, onu axtarmayasınız, və bu gün bunun əvəzinə nə etmək lazım olduğunu göstərir. Heç bir şeyin tarixi yoxdur.

## Dəqiq nüvə tələb edir

Bu versiya hər detalı mesh nüvəsi ilə qurur (bax: [Mesh nüvəsi](topic:solid-kernels)). Aşağıdakı hər şey hələ bu versiyada olmayan dəqiq həndəsə nüvəsi tələb edir. Bu xüsusiyyətlərlə saxlanılmış detallar yenə açılır: xüsusiyyətlər tarixçədə qalır, hələ qurulmadığı qeyd olunur və yadda saxlanılanda qorunur.

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| {{ui:Fillet}} və {{ui:Chamfer}} yumru kənarlarda; kənar boyunca radiusu dəyişən yuvarlaqlaşdırmalar; yuvarlaqların bir-birinə gəldiyi yerdə hamar birləşmə (mesh nüvəsi onları bucaq birləşməsi ilə edir) | {{ui:Fillet}} və {{ui:Chamfer}} düz üzlər arasındakı düz kənarlarda işləyir; digər künclərə ekstrüziyadan əvvəl eskizdə yuvarlaqlaşdırma verin ({{ui:Fillet}} eskizdə, {{key:F}}) |
| {{ui:Shell}} əyri üzləri açarkən; müxtəlif qalınlıqlı divarlar | Düz üzləri açın; divarın qalın olmalı olduğu yerdə ekstrüziya ilə material əlavə edin |
| Əyri üzlərdə {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}}; ekstrüziya üzə, növbəti üzə və ya təpəyə qədər; konusvari ekstrüziyalar | Ekstrüziya və ya fırlatma, lazım olan yerdə addımlarla; ölçdüyünüz dərinliyə qədər ekstrüziya edin |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} və yastı naxışlar | Plitəni və ya qabırğanın profilini ekstrüziya edin |
| Səthlər: {{ui:Form}} formasını detala tamamlamaq, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Mövcud deyil |
| Bir neçə cisim: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, yeni cisim yaradan xüsusiyyətlər | Bir bərk cisim; naxışlar və güzgü surəti xüsusiyyətləri |
| Yalnız dəqiq nüvənin tapa biləcəyi üzlərdə eskizlər, müstəvilər, oxlar və nöqtələr (yuvarlaqlaşdırmadan yaranan üz, deşik divarı, idxal olunmuş bərk cismin üzü) | Baza müstəvilərində, istinad müstəvilərində və ekstrüziya və fırlatmaların düz üzlərində eskiz |
| Generativ dizayn nəticəsi detal kimi açılmış və ya ona əlavə edilmiş (idxal olunmuş bərk cisim olur) | Nəticəni STL və ya STEP kimi yükləyin |
| Açılmış STEP faylının əyri üzlərini dəqiq səth kimi redaktə etmək; STEP faylından spline, süpürülmüş və fırladılmış üzlərin dəqiq STEP-i, spline tərəflər, modelləşdirilmiş vintlər, STL / OBJ / 3MF cisimləri və yığımlar; digər detal modelləşdiriciləri üçün STEP | {{ui:Open}} STEP-i üçbucaqlar kimi oxuyur və faylın düz üzlərini, silindrlərini, konuslarını, kürələrini və torlarını ixrac üçün saxlayır ([STEP faylını açın](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} hər analitik üzü dəqiq yazır və onları fasetlər kimi saxlayır ([İxrac](topic:export-files#for-other-cad-programs-step)); digər detal modelləşdiricisi üçün makro hələ də yazır |
| Çertyoj görünüşlərində həqiqi qövslər | Görünüşlər və kəsik görünüşləri fasetlərdən çəkilir |
| Dəqiq həcmlər, sahələr və məsafələr | {{ui:Measure}} fasetli bərk cismin rəqəmlərini verir, yumru detallarda bir az aşağı; daha incə **Əyrilər** parametri onları yaxınlaşdırır |

Aşağıdakı cədvəllərin bəzi sətirləri bu xüsusiyyətlərdən birini bir şeyin əvəzi kimi təklif edir. Bu təkliflər dəqiq nüvə qayıdandan sonra tətbiq olunur.

## Xüsusiyyətlər

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Üz yuvarlaqlaşdırmaları, tam yumru yuvarlaqlaşdırmalar, kənar boyunca nöqtələrdə radiusları təyin olunan yuvarlaqlaşdırmalar | Sabit və ya xətti dəyişən {{ui:Fillet}}; bir neçə yuvarlaqlaşdırma xüsusiyyəti |
| Müxtəlif divar qalınlıqlı qabıqlar | Bir {{ui:Shell}} qalınlığı; divarın qalın olmalı olduğu yerdə ekstrüziya ilə material əlavə edin |
| Sərbəst forma (spline) üzlərində {{ui:Draft}} | {{ui:Draft}} düz, silindrik və konus üzlərində işləyir |
| Burulan süpürmələr, nazik divarlı və səth süpürmələri; {{ui:Loft}} xüsusiyyətində son tangensi; bir bələdçi relsi ilə loft; spline yolları | Sabit oriyentasiya və ya son miqyas ilə {{ui:Sweep}}; iki və ya daha çox bələdçi relsi ilə loft: bax [Süpürmə, loft və qaralama](topic:sweep-loft-draft) |
| Qövslərdən və ya spline-lardan qabırğalar; eskizə kvadrat böyüyən qabırğalar (yuxarı görünüşdən); qabırğalarda qaralama; bir eskizdən bir neçə qabırğa | Qabırğanın öz müstəvisində bir xətt zəncirindən {{ui:Rib}}: bax [Qabırğalar və güsset](topic:rib) |
| Əyri səthə qədər "qədər", əyri üzdə dayanan "növbətiyə qədər" | Düz üzə və ya istinad müstəvisinə qədər |
| Əks-qazılmış deşiklər, düym və boru dişləri, konusvari dişlər, diş çıxışları və faskalı diş başlanğıcları | Kiçik dərinlikli zenkləmə; ISO metrik və trapesvari dişlər, kosmetik və ya modelləşdirilmiş: bax [Millərdə və deşiklərdə dişlər, çəkilmiş və ya modelləşdirilmiş](topic:threads) |
| Nazik xüsusiyyət ekstrüziyaları | Profilin hər iki divarını çəkin |
| Naxış surətləri birbəbir atlanır, doldurma naxışları | Ayrı xüsusiyyətlər istifadə edin; əyri boyunca naxışlar: {{ui:Path pattern}} |
| Naxış xüsusiyyətlərinin surətləri, güzgülər, yuvarlaqlaşdırmalar, faskalar, qabıqlar və idxal olunmuş bərk cisimlər | Onların əsasını təşkil edən eskizi və ya xüsusiyyəti kopyalayın və ya naxışlayın |
| Formanın xüsusi nöqtələrində dəqiq (G1) tangens; forma yamalarının daha böyük üzlərə birləşdirilməsi | Formanın {{ui:Level}} səviyyəsini artırın: təxmini yamalar kiçilir; bax [Form ilə sərbəst formalar](topic:form-surfaces) |
| Bir xüsusiyyətdə bir neçə ayrı qapalı hissədən ibarət forma; formalar arasında körpülər | Hər Form xüsusiyyətində bir qapalı hissə; onları Join ilə birləşdirin |
| Səth cisimlərinin görünüşdə seçilməsi (kəsik və yama nöqtələri istisna); səth yuvarlaqlaşdırmaları; kəsiyi geri qaytarmaq; G2 yamalar; əyri qonşularla tangens olan Qordon səthləri (müstəvilər və düz üzlərə tangens qurulub) | Adla seçin xüsusiyyətin panelində; əvvəl qalınlaşdırın, sonra bərk cismi yuvarlaqlaşdırın |
| Tarixçədə cisim siyahısı; gizli cisimləri ixracdan çıxarmaq | Detalın panelindəki cisim siyahısında adını dəyişin və gizlədin; cismi kənarda qoymaq üçün onu yaradan xüsusiyyəti silin və ya dayandırın |
| Silindrləri və konusları analitik saxlayan qeyri-bərabər miqyas; ofset səthlərin qeyri-bərabər miqyası | {{ui:Scale body}} əyri üzləri 0.0000004 mm daxilində yaxın B-spline-lara çevirir; bərabər miqyas dəqiq qalır |
| Səth cisimlərinin birləşdirilməsi; Minkowski cəmləri | Əvvəl {{ui:Stitch}} və ya {{ui:Thicken}}, sonra {{ui:Combine}} |
| Tolerantlıq analizi: künclərdə dönən yığınlar (2D və 3D vektor döngələri), həndəsədən hesablanmış həssaslıqlar, digər paylanmalarla Monte Karlo, eskiz ölçülərində ölçü tolerantlıqları, material vəziyyətindən bonus tolerantlığı | Yığımda {{ui:Stack-up}}: bir istiqamət, ən pis hal və RSS, tolerantlıqlar yazılır, ştamp blokunun ümumi tolerantlığından və ya GD&T çərçivələrindən: bax [Tolerantlıq yığınları](topic:tolerance-stackup) |
| Yerləşdirmə: kəsmə ardıcıllığı və giriş xətləri, ortaq kənarların bir dəfə kəsilməsi, birlikdə saxlanılmalı detallar; rulonların qalıqları, layihələr arasında paylaşılan ehtiyat | {{ui:Nest flat parts on sheets…}} məsafə, kənar boşluqları, dönmələr və lif istiqaməti ilə: bax [Yastı detalları vərəqlərə yerləşdirin](topic:nest-flat-parts); qalan lövhələr saxlanılır və əvvəl istifadə olunur: bax [Kəsik qalıqlarını saxlayın](topic:nest-offcuts); kəsiyi kəsicinizin öz proqramında planlaşdırın |
| Təbəqə metal: kənar qatlamaları, pilləli əyilmələr, bucaqlı və kontur flanşları; əyri kənarlarda flanşlar və ya əyilmiş baza flanşının üzlərində flanşlar; eskizdə əyilmələr; künc bağlanışları; formalaşdırma alətləri; bərk cismi təbəqə metala çevirmək; kəsikləri olan əyilmiş baza flanşının yastı forması; əyilmə cədvəlləri | {{ui:Base flange}} (plitə və ya əyilmiş profil), düz kənarlarda {{ui:Edge flange}} əyilmə azad buraxılışları ilə və K-faktorlu yastı naxış: bax [Təbəqə metal](topic:sheet-metal) |
| Yığımlarda {{ui:Draft analysis}}; ayırma xəttinin tapılması; divar qalınlığı analizi | Dizayn bölməsində detalda {{ui:Draft analysis}}: bax [Qəliblənmə və tökmə üçün qaralamanı yoxlayın](topic:draft-analysis); yığımın hər detalını yoxlamaq üçün onu açın |

## Eskizlər

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Ellipslər, tangens qövsləri, konik kəsiklər, dərəcəsi və ya çəkiləri təyin olunmuş spline-lar (NURBS) | Spline-lar (kubik), tangens əlaqələri ilə qövslər və dairələr |
| Spline üzərində nöqtə (əlaqə), əyrilik (G2) əlaqələri | Spline-ın öz nöqtəsini keçməli olduğu yerə qoyun |
| Sonrakı dəyişiklikləri izləyən spline-ların ofset surətləri; spline küncləri kəskin olan zəncirlərin ofsetləri | Dəyişiklikdən sonra yenidən ofset edin; əvvəl künci yuvarlaqlaşdırın |
| Orijinala bağlı qalan naxış surətləri; əyri boyunca naxışlar | Dəyişiklikdən sonra yenidən naxışlayın |
| Sərbəst formalı və ya əyilmiş dairəvi kənarların proyeksiyası, detalı izləyən proyeksiya həndəsəsi | Düz və paralel dairəvi kənarları proyeksiya edin, sonra ölçü qoyun |
| İdarə olunan (istinad) ölçülər | Ölçüləri paneldən və ya detalın faktlarından oxuyun |
| Kollinear əlaqələr | 0 məsafəsi ilə paralel |
| Başqa proqrama yapışdırma (sistemin buferi) | DXF, STEP, STL və ya 3MF ixrac edin |
| Qövsləri, nisbi və ya polyar koordinatları yazmaq | Xətləri və dairələri yazın; qövsləri Qövs aləti ilə çəkin |
| Göstəricisiz həndəsəni seçmək | Klik və ya toxunuş lazımdır |

## Parametrlər və vahidlər

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Materialları dəyişən konfiqurasiyalar; xüsusiyyətləri söndürən CSV dizayn cədvəli | Konfiqurasiyalar parametrləri təyin edir və xüsusiyyətləri açıb-söndürür: bax [Konfiqurasiyalar və dizayn cədvəlləri](topic:design-tables); `partcraft variants` saxlanılmış konfiqurasiyaları ada görə qurur, söndürülmüş xüsusiyyətlər daxil olmaqla: bax [Konfiqurasiyalarınızdan variant paketi yaradın](topic:variant-pack) |
| Ən yeni xüsusiyyətlərin öz panellərindəki ədədlər üzərində tənliklər (müstəvi, süpürmə, qaralama və s.) | Onları skriptdə və ya `partcraft set` ilə yazın ([Skriptlər və komanda sətri](topic:scripts-and-cli)) |
| Düymlə göstərilən detal | Ölçülər millimetrlə göstərilir; ədəd qutusuna və ya ifadəyə `2in` yazın, 50.8 olur |

## Fayllar

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| İdxal olunmuş STEP bərk cisminin öz xüsusiyyətlərinin redaktəsi (tarixçəsiz gəlir) | Öz xüsusiyyətlərinizlə material əlavə edin və ya kəsin |
| STEP-dən rənglərin, adların, yığım strukturunun və PMI-nin oxunması | Mövcud deyil |
| glTF, OBJ, IGES, Parasolid ixracı; 3D detalın DWG-si (yalnız variant paketi DWG yazır: çertyoj vərəqi) | Meshlər üçün STL və ya 3MF; bərk cisimlər üçün STEP; 2D üçün DXF |
| IGES, DXF və ya başqa proqramların öz fayllarının açılması (`.3dm` faylları bir cisim kimi açılır: [.3dm modelini bərk cisim kimi açın](topic:open-3dm-files)) | STEP və ya qapalı STL, OBJ və ya 3MF mesh istəyin: [STL, OBJ və ya 3MF açın](topic:open-meshes) |
| İxrac olunmuş STEP-də yığım strukturu (detal adları ilə ağac) | Yığım STEP-i yerləşdirilmiş bərk cisimlərin bir birləşməsidir |
| Brauzerin yükləməsi olmadan seçdiyiniz qovluğa saxlamaq | Brauzerin yükləmə parametrlərində "harada saxlanacağını soruşun" seçimini açın |

## Çertyojlar

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Üç ümumi ölçüdən əlavə ölçülər (deşik ölçüləri, mövqelər, ölçü tolerantlıqları) | PDF-də işarələyin, və ya DXF ixrac edib 2D CAD proqramında ölçü qoyun |
| Bir neçə kəsikdən və ya detaldan çox; düzləşdirilmiş, qırılmış və köməkçi görünüşlər | Hər çertyojda bir kəsik və bir detal |
| Vərəqdə sərbəst mətn, qeydlər və cədvəllər (başlıq və versiya blokundan başqa) | Bitirmə qeydi, və ya PDF-ə əlavə edilmiş mətn |
| Birinci bucaq proyeksiyası, hərəkət edən görünüşlər, portret vərəqlər | Üçüncü bucaq, avtomatik yerləşdirmə, A4–A0 və ANSI A–E landşaft vərəqləri |
| Canlı kəsik görünüşü: eyni anda bir neçə müstəvi və ya kəsik qutusu, kəsiyin ətrafında kontur, kəsiyin faylda saxlanılması | Hər dəfə bir müstəvi, {{ui:Views}} › {{ui:Section view}}-dən; bax [Kəsik görünüşü ilə içəriyə baxın](topic:section-view) |
| Daha çox görünüş, ölçü və ya köçürə biləcəyiniz balonlarla yığım çertyojları | Avtomatik balonlu və detal siyahılı bir izometrik (və ya parçalanmış) görünüş |
| GD&T və bitirmə simvollarının kopyalanması və yapışdırılması | Hər birini Baza, Çərçivə və ya Bitirmə ilə yerləşdirin |
| Təlimatlar: Illustrate-in {{ui:From another file…}} əmrində STEP faylları, birbaşa ModelCraft və ya BimCraft-dan gələn model, yol izləyicisinin keyfiyyətində şəkillər, PDF daxilində interaktiv 3D | Dizayn-da STEP-i açın və təlimatı {{ui:From the open part}} ilə başladın; modeli glTF (.glb) kimi saxlayın; 3D görünüşün PNG şəkilləri; interaktiv 3D fayl: bax [Illustrate-də təlimat başlatın](topic:illustrate) |

## Yığımlar

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Dişli, reyka, kulaçıq və vint birləşmələri; konusla məhdudlaşdırılmış kürə birləşmə; əyri üzlərdə və ya nöqtələr arasında birləşmələr | Düz üzlərdə sərt, fırlanan, sürüşən, silindrik, müstəvi, kürə və yuvada pin birləşmələri, hər dəyər öz hədləri ilə: bax [Yığım qurun](topic:build-assembly) |
| Detalları fırladan parçalanma addımları və birləşmələrin yerləşdirdiyi detalların sürüklənməsi | Düz parçalanma addımları; detalı əllə köçürmək üçün birləşməni silin |
| Alt-yığımlar | Yalnız bir səviyyə detal |
| Dişlilər, kulaçıqlar, təmas | Mövcud deyil |

## İstehsal

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Əyri üzlərin 3D kobud emalı, 3D adaptiv təmizləmə, qalıq emalı; waterline, pencil, radial və spiral son emal; qövs kimi yazılan adaptiv keçidlər | 2.5 oxlu üz, cib, 2D adaptiv, kontur, qazma və faska: bax [Alət yolları və G-code yaradın](topic:manufacture); bütün modelin Parallel və Scallop son emalı: bax [3D son emal](topic:finish-3d) |
| 4 və 5 oxlu alət yolları, tornalama, zondlama | Quraşdırma sekmesində alət oxu ilə hər dəfə bir tərəfi qurun |
| Tutacaq və gövdə toqquşma yoxlamaları | Fleyta uzunluğu xəbərdarlıqlarına baxın və nəzarət cihazınızın simulyatorunda yoxlayın |
| Zondlama, alətin ömrü və alt-proqram dövrləri, post prosessorlarda 4-cü və 5-ci ox və tornalama kodları; başqa proqramların post fayllarının yüklənməsi | PartCraft-ın öz formatında post yazın və ya dəyişdirin: bax [Redaktə edə biləcəyiniz post prosessorları](topic:post-processors) |
| Düym G-code (G20) | Yalnız millimetr (G21) |

## Simulyasiya və generativ dizayn

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Qeyri-xətti tədqiqatlar: axma, böyük əyilmələr, detallar arasında təmas, yorğunluq | Xətti statika və təbii tezliklər: bax [Gərginliyi və əyilməni yoxlayın](topic:simulation); təhlükəsizlik əmsalını 1-dən xeyli yüksək saxlayın |
| Qeyri-xətti burkulma (qüsurlar, post-burkulma, snap-through) | Geniş ehtiyatla xətti burkulma yük əmsalları: bax [İstilik, istilik gərginliyi və burkulma](topic:thermal-and-buckling) |
| Üzlər arasında şüalanma (baxış əmsalları), təmas müqaviməti, temperaturdan asılı materiallar, istilik gərginliyində ətalət (istilik zərbə dalğaları) | Ətraf mühitə şüalanma, vaxt üzrə sabit və ya kvazistatik istilik gərginliyi, sabit xassələr: bax [İstilik, istilik gərginliyi və burkulma](topic:thermal-and-buckling) |
| Keçici istilik və istilik yükü olan tədqiqatlar üçün avtomatik incəltmə; xəta kiçik olan yerdə meshi kobudlaşdırmaq; lokal kəmiyyətə hədəf (bir nöqtədə pik gərginlik) | Statik, burkulma, təbii tezlik və sabit istilik tədqiqatları üçün **Avtomatik incəltmə**, bütün detalda xəta üzrə: bax [Gərginliyi və əyilməni yoxlayın](topic:simulation); əks halda elementin ölçüsünü azaldın |
| Yastıq və boltların yükləri, uzaqdan qüvvələr, momentlər, yaylar, təyin olunmuş yerdəyişmələr | Üzlərdə qüvvələr və təzyiqlər, cazibə; bərkidilmiş və sürtünməsiz üzlər |
| Yığımların simulyasiyası; istiqamətə görə fərqlənən materiallar (çap təbəqələri, kompozitlər) | Bir detal, bir izotrop material |
| Tetraedrik tədqiqatlar, istilik ötürülməsi və generativ dizayn üçün bir neçə həlledici axını; çarpaz mənbə ilə təcrid olunmamış səhifədə istənilən axınlar | Voksel tədqiqatları, burkulma, vaxt üzrə gərginlik və laminar axın, səhifənin icazə verdiyi yerdə axınlardan istifadə edir: bax [PartCraft parametrləri](topic:settings) |
| Dizayn dəqiqliyi ilə turbulent axın (Spalart–Allmaras modeli eksperimental olaraq daxildir: boru sürtünməsi 30–34 % yüksək, arxa addımda yenidən birləşmə 21–39 % qısa; planlaşdırılır: divarların yaxınında daha incə hüceyrələr), axında istilik, qeyri-sabit (vaxtca dəqiq) axın, sərbəst səthlər, Nyuton olmayan mayelər, fırlanan detallar | Nyuton mayesinin laminar, sabit, izotermik axını və ya keyfiyyət naxışları üçün eksperimental turbulent model: bax [Mayenin axınını simulyasiya edin](topic:flow-simulation); Reynolds ədədi laminardan keçəndə panel xəbərdarlıq edir |
| Generativ dizaynda gərginlik hədləri və istehsal qaydaları (çıxıntılar, frezələmə istiqamətləri); bir formada bir neçə material | Həcm üçün ən sərt forma; nəticəni Simulyasiyada yoxlayın: bax [Yüklərdən forma böyüdün](topic:generative-design) |
| Redaktə olunan (hamar, parametrik) bərk cisim kimi nəticə | STL, fasetli STEP və ya nəticəni idxal olunmuş fasetli bərk cisim kimi olan detal |
| Elektrik maşını dizaynı: statorda fırlanan rotor, bucaqdan asılı fırlanma momenti, doymuş polad, dirsək nöqtəsindən sonra gücünü itirən maqnitlər, burulğan cərəyanları və dəmir və mis itkiləri; 3D-də və ya əyri meshlərdə maqnit sahələri | Analiz kitabxanasında şəbəkədə xətti 2-D maqnitstatika: sarğılar, dəmir, öz geri qayıdış xəttində daimi maqnitlər, boşluqlar, induktivlik və çəkmə qüvvəsi: bax [2-D maqnit sahələri](topic:magnetic-fields-2d) |

## Skriptlər

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Skript redaktorunda üzərinə gələndə kömək, dayanma nöqtələri və addım-addım keçid | Tapma, bükmə və tamamlama var (bax [Skriptlər yazın və işə salın](topic:craftscript)); qalanı üçün öz redaktorunuz: Skript qrupunda {{ui:Save}} və {{ui:Open}} skriptləri daxil və xaric edir; daxili funksiyalar [CraftScript dili](topic:craftscript-language) səhifəsindədir |
| Dayanma nöqtələri və skript boyunca addım-addım keçid | Yolboyu `disp` və `fprintf`; {{key:Mod+Enter}} bir neçə seçilmiş sətri bir dəfəyə işə salır |
| Skriptin Dizayn iş sahəsində çəkdiyi sahələr və qrafiklər; detalın parametrlərini dəyişən skriptlər | Onlar Skript iş sahəsində göstərilir; skriptlər parametrləri `param` ilə oxuyur (bax [Skriptlər yazın və işə salın](topic:craftscript)), onları {{ui:Parameters}} sekmesində dəyişir |
| Qrafiklərlə yanaşı şəkillər və cədvəllər; qrafiki saxlamazdan əvvəl redaktə etmək (miqyas, ox hədləri) | Yanaşı qrafiklər göstərir; qrafiki PNG, SVG və ya CSV kimi saxlayın və başqa yerdə tamamlayın |
| numpy və digər Python paketləri; oflayn Python; redaktorda Python-un bükülməsi; Pascal Script | Python-un standart kitabxanası, CraftScript və Lua: bax [Python-da skriptlər](topic:craftscript-python) |
| Lua funksiyalarını daxili funksiyalara ötürmək; skript işləyərkən qurulmuş adla Lua-dan kitabxana funksiyasını çağırmaq | Kitabxana funksiyasının adını skriptdə yazın (`cs.static_tet(…)`), və ya CraftScript skriptindən çağırın |

## Tətbiq

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Bulud saxlanması, paylaşım və versiya tarixçəsi | Hələ mövcud deyil. Faylları kompüterinizə saxlayın və versiyaları ada görə saxlayın |
| iPad və iPhone-da quraşdırılmış tətbiq kimi PartCraft | PartCraft-dan cihazın brauzerində istifadə edin; Android və masaüstündə o, həmçinin CadCraft Studio-da işləyir (getcadcraft.com/download) |
| Kontekst (sağ klik) menyuları | Alətlər paneli və sağ panel |
| Təmiz başlanğıcdan tam oflayn işləmək | Yalnız tətbiq oflayn istifadə üçün saxlanıldıqdan sonra: bax [Oflayn işləmək](common:offline) |

Ən çox nəyin çatışmadığını saytın dəstək səhifəsi vasitəsilə bildirin: bu, növbəti addımları formalaşdırır.

## Mühəndis (generatorlar və sahələr)

| Hələ hazır deyil | Bunun əvəzinə, bu gün |
|---|---|
| Yaradılmış istilik dəyişdiricisində başlıqlar, portlar və birləşdiricilər; material möhkəmliyi üçün temperatur əyriləri; kollektordakı tee itkiləri | Generatorlar nüvəni və boruları qurur; Dizaynda birləşdiriciləri əlavə edin; materialın otaq temperaturu göstəricilərini təhlükəsizlik əmsalı ilə istifadə edin |
| Əlavə kataloqundan bir kliklə generator əlavə etmək | {{ui:Open}} Mühəndis iş sahəsində fayldan generator əlavə edir |
| Generatorun öz voksel ölçüsündən incə sahə faylı; `.vdb` fayllarının oxunması | Skriptdən daha incə sahə saxlayın; `.vdb` yalnız yazılır, oxunmur |
| Təzyiq qabı kodu hesablamaları | Seçdiyiniz təhlükəsizlik əmsalı ilə klassik nazik və qalın divar düsturları; kod marjası deyil |
| Digər tətbiqlər üçün generatorlar | Bu versiyada yalnız PartCraft |
