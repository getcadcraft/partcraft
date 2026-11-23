---
title: Hələ hazırlanmayanlar
summary: Bu PartCraft versiyasının hələ etmədiyi hər şey, burulan süpürmədən düym göstərişinə, çertyoj ölçülərinə və alt-yığımlara qədər, və bunun əvəzinə bu gün nə etmək lazım olduğu.
keywords: çatışmayan, hələ deyil, məhdudiyyətlər, məhdudiyyətlər, yol xəritəsi, dəqiq kernel, fillet, faska, qabıq, süpürmə, loft, step idxalı, simulyasiya, istehsal, burulan süpürmə, loft son toxunma, üz fillet, tənliklər, düymlər, çertyoj ölçüləri, alt-yığımlar, bulud, planşet, telefon
from: 97b10a29
---

PartCraft hələ erkən versiyadır. Bu səhifə onun hələ etmədiklərini sadalayır, ona görə də onları axtarmırsınız, və bu gün bunun əvəzinə nə etmək lazım olduğunu göstərir. Heç nəyin tarixi yoxdur.

## Dəqiq kernel tələb edir

Bu versiya hər detalı mesh kernel ilə qurur (bax: [Mesh kernel](topic:solid-kernels)). Aşağıdakıların hamısı dəqiq həndəsə kerneli tələb edir ki, bu versiyada hələ yoxdur. Bu xüsusiyyətlərlə yadda saxlanmış hissələr yenə açılır: xüsusiyyətlər tarixçədə qalır, hələ qurulmadığı kimi işarələnir və saxlanarkən qorunur.

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Dəyirmi kənarlarda {{ui:Fillet}} və {{ui:Chamfer}}; kənar boyunca radiusu dəyişən filletlər; birləşdiyi yerdə hamarca qarışan yumrultmalar (mesh kernel onları kəsir) | Fillet və Chamfer düz üzlər arasındakı düz kənarlarda işləyir; digər küncləri ekstruziyadan əvvəl eskizdə yumrultun ({{ui:Fillet}} eskizdə, {{key:F}}) |
| Əyri üzləri açan {{ui:Shell}}; müxtəlif qalınlıqlı divarlar | Düz üzləri açın; divarın qalın olmalı olduğu yerdə ekstruziya ilə material əlavə edin |
| Əyri üzlərdə {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}}; bir üzə, növbəti üzə və ya təpəyə qədər ekstruziya; konusvari ekstruziyalar | Ekstruziya və ya fırlatma, lazım olduqda addım-addım; ölçdüyünüz dərinliyə qədər ekstruziya |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} və düz şablonlar | Lövhəni və ya qabırğanın profilini ekstruziya edin |
| Səthlər: {{ui:Form}}-un detala tamamlanması, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Mövcud deyil |
| Bir neçə cisim: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, yeni cisim yaradan xüsusiyyətlər | Bir bərk cisim; massivlər və güzgü surəti xüsusiyyətləri |
| Yalnız dəqiq kernelin tapa biləcəyi üzlərdə eskizlər, müstəvilər, oxlar və nöqtələr (fillet ilə yaradılmış üz, deşik divarı, idxal olunmuş bərk cismin üzü) | Əsas müstəvilərdə, istinad müstəvilərində və ekstruziya və fırlatmaların düz üzlərində eskiz edin |
| Yalnız dəqiq kernel ilə açılan və ya ona əlavə olunan generativ dizayn nəticəsi (idxal olunmuş bərk cisim olur) | Nəticəni STL və ya STEP kimi yükləyin |
| Açılmış STEP faylının əyri üzlərini dəqiq səth kimi redaktə etmək; STEP faylından spline, süpürülmüş və fırlanmış üzlərin dəqiq STEP-i, spline tərəflər, modelləşdirilmiş dişlər, STL / OBJ / 3MF cisimləri və yığımlar; digər detal modelləşdiriciləri üçün STEP | {{ui:Open}} STEP-i üçbucaqlar kimi oxuyur və faylın düz üzlərini, silindrlərini, konuslarını, kürələrini və torlarını ixrac üçün saxlayır ([STEP faylını açın](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} hər analitik üzü dəqiq yazır və onları fasetlər kimi saxlayır ([İxrac](topic:export-files#for-other-cad-programs-step)); başqa detal modelləşdiricisi üçün makro hələ də yazır |
| Çertyojda əyri həqiqi qövslər | Görünüşlər və kəsik görünüşləri fasetlərdən çəkilir |
| Dəqiq həcmlər, sahələr və məsafələr | {{ui:Measure}} faset bərk cismin rəqəmlərini verir, dəyirmi detallarda bir az aşağı; daha incə **Əyrilər** parametri onları yaxınlaşdırır |

Aşağıdakı cədvəllərin bəzi sətirləri bu xüsusiyyətlərdən birini digər bir şeyin həlli kimi təklif edir. Bu təkliflər dəqiq kernel geri qayıtdıqdan sonra keçərlidir.

## Xüsusiyyətlər

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Üz filletləri, tam yumru filletlər, kənar boyunca nöqtələrdə təyin olunmuş radiuslu filletlər | Sabit və ya xətti dəyişən {{ui:Fillet}}; bir neçə fillet xüsusiyyəti |
| Müxtəlif divar qalınlıqlı qabıqlar | Bir {{ui:Shell}} qalınlığı; divarın qalın olmalı olduğu yerdə ekstruziya ilə material əlavə edin |
| Sərbəst formalı (spline) üzlərdə draft | {{ui:Draft}} düz, silindrik və konusvari üzlərdə işləyir |
| Burulan süpürmələr, nazik divarlı və səth süpürmələri; Loft xüsusiyyətində son toxunma; bir istiqamətləndirici relsli loft; spline yollar | Sabit oriyentasiyalı və ya son miqyaslı {{ui:Sweep}}; iki və ya daha çox istiqamətləndirici relsli loft: bax [Sweep, loft və draft](topic:sweep-loft-draft) |
| Qövslərdən və ya spline-lardan qabırğalar; eskizə kvadrat böyüdülmüş qabırğalar (yuxarı görünüşdən); qabırğalarda draft; bir eskizdən bir neçə qabırğa | Qabırğanın öz müstəvisində bir zəncir xətdən {{ui:Rib}}: bax [Qabırğalar və gussetlər](topic:rib) |
| Əyri səthə "qədər", əyri üzdə dayanan "növbətiyə qədər" | Düz üzə və ya istinad müstəvisinə qədər |
| Əks deşilmiş deşiklər, düym və boru dişləri, konusvari dişlər, diş qaçışları və faskalı diş başlanğıcları | Kiçik dərinlikli əks deşmə; ISO metrik və trapesiya dişləri, ya cosmetic, ya modelləşdirilmiş: bax [Val və yuvalarda dişlər, çəkilmiş və ya modelləşdirilmiş](topic:threads) |
| Nazik xüsusiyyət ekstruziyası | Profilin hər iki divarını çəkin |
| Eyni anda bir-bir atlanan massiv surətləri, doldurma massivləri | Ayrı xüsusiyyətlər istifadə edin; qövs boyunca massivlər: {{ui:Path pattern}} |
| Surətləşdirilən massivlər, güzgülər, filletlər, faskalar, qabıqlar və idxal olunmuş bərk cisimlər | Onların üzərində quraşdırıldığı eskizi və ya xüsusiyyəti kopyalayın və ya massivləşdirin |
| Formanın ekstremal nöqtələrində dəqiq (G1) toxunma; formanın yamaqlarını daha böyük üzlərə birləşdirmək | Formanın Səviyyəsini artırın: yaxınlaşdırılmış yamaqlar kiçilir; bax [Form ilə sərbəst formalar](topic:form-surfaces) |
| Bir xüsusiyyətdə bir neçə ayrı qapalı parçadan ibarət forma; formalar arasında körpülər | Hər Form xüsusiyyətində bir qapalı parça; onları Join ilə birləşdirin |
| Görünüşdə səth cisimlərinin seçilməsi (trim və yama nöqtələri istisna olmaqla); səth filletləri; untrim; G2 yamaqlar; əyri qonşularla toxunan Gordon səthləri (düzlər və düz üzlərlə toxunma qurulub) | Onları xüsusiyyət panelində adı ilə seçin; əvvəlcə qalınlaşdırın, sonra bərk cismi fillet edin |
| Tarixçədə cisimlər siyahısı; gizli cisimləri ixrac-dan kənarda qoymaq | Detal panelinin cisim siyahısında cisimlərin adını dəyişin və gizlədin; cisim yaradan xüsusiyyəti silin və ya dayandırın ki, onu kənarda qoysun |
| Silindrləri və konusları analitik saxlamayan qeyri-bərabər miqyas; ofset səthlərin qeyri-bərabər miqyası | {{ui:Scale body}} əyri üzləri yaxın B-spline-lara çevirir (0,0000004 mm daxilində); bərabər miqyas dəqiq qalır |
| Səth cisimlərinin birləşdirilməsi; Minkowski cəmləri | Əvvəlcə {{ui:Stitch}} və ya {{ui:Thicken}}, sonra {{ui:Combine}} |
| Tolerans analizi: künclərdə dönən yığınlar (2D və 3D vektor dövrləri), həndəsədən hesablanan həssaslıqlar, başqa paylanmalarla Monte Carlo, eskiz ölçüləri üzrə ölçü tolerantlıqları, material vəziyyətindən bonus tolerans | Yığımda {{ui:Stack-up}}: bir istiqamət, ən pis hal və RSS, tolerantlıqlar yazılır, başlıq blokunun ümumi tolerantlığından və ya GD&T çərçivələrindən: bax [Tolerans yığınları](topic:tolerance-stackup) |
| Yerləşdirmə: kəsmə ardıcıllığı və giriş xətləri, paylaşılan kənarları bir dəfə kəsmək, birlikdə saxlanmalı detallar; rulonların artıqları, layihələr arasında paylaşılan material | Aralıq, kənarlar, dönmələr və lif ilə {{ui:Nest flat parts on sheets…}}: bax [Düz detalları vərəqlərdə yerləşdirin](topic:nest-flat-parts); qalan lövhələr saxlanılır və əvvəl istifadə olunur: bax [Artıqları saxlayın və təkrar istifadə edin](topic:nest-offcuts); kəsiyi kəsici proqramınızda planlayın |
| Sac metal: tikmələr, çıxıntılar, miter və kontur flanşları; əyri kənarlarda və ya əyilmiş baza flanşının üzlərində flanşlar; eskizlə əyilmələr; künc bağlamaları; formalaşdırıcı alətlər; bərk cismin sac metala çevrilməsi; kəsikləri olan əyilmiş baza flanşının düzü; əyilmə cədvəlləri | {{ui:Base flange}} (lövhə və ya əyilmiş profil), düz kənarlarda əyilmə azaldıcıları ilə {{ui:Edge flange}} və K-faktorlu düz şablon: bax [Sac metal](topic:sheet-metal) |
| Yığımlarda draft analizi; ayırma xəttinin tapılması; divar qalınlığı analizi | Dizayn-da detal üzərində {{ui:Draft analysis}}: bax [Qəlibləmə və tökmə üçün draftı yoxlayın](topic:draft-analysis); yığımın hər detalını ayrıca açıb yoxlayın |

## Eskizlər

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Ellipslər, toxunan qövslər, konikalar, təyin olunmuş dərəcəli və ya çəkili (NURBS) spline-lar | Spline-lar (kubik), qövslər və dairələr Toxunan əlaqələrlə |
| Spline üzərində nöqtə (əlaqə), əyrilik (G2) əlaqələri | Spline-ın öz nöqtəsini keçməli olduğu yerə qoyun |
| Sonradan dəyişikliklərə uyğunlaşan spline-ların ofset surətləri; kəskin spline küncləri olan zəncirlərin ofsetləri | Dəyişiklikdən sonra yenidən ofset edin; əvvəl küncü yumrultun |
| Orijinala bağlı qalan massiv surətləri; qövs boyunca massivlər | Dəyişiklikdən sonra yenidən massivləşdirin |
| Sərbəst formalı və ya əyilmiş dairəvi kənarların proyeksiyası, detalı izləyən proyeksiyalı həndəsə | Düz və paralel dairəvi kənarları proyeksiya edin, sonra ölçün |
| Sürücülü (istinad) ölçülər | Ölçüləri paneldən və ya detal faktlarından oxuyun |
| Kollinear əlaqələr | 0 məsafəli paralel |
| Başqa proqrama yapışdırma (sistem buferi) | DXF, STEP, STL və ya 3MF ixrac edin |
| Qövs yazmaq, nisbi və ya polyar koordinatlar | Xətləri və dairələri yazın; qövsləri Qövs aləti ilə çəkin |
| Göstərici olmadan həndəsənin seçilməsi | Klik və ya toxunuş lazımdır |

## Parametrlər və vahidlər

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Materialları dəyişən konfiqurasiyalar; xüsusiyyətləri söndürən CSV dizayn cədvəli | Konfiqurasiyalar parametrləri təyin edir və xüsusiyyətləri açıb söndürür: bax [Konfiqurasiyalar və dizayn cədvəlləri](topic:design-tables); `partcraft variants` saxlanmış konfiqurasiyaları ad üzrə qurur, xüsusiyyətlər söndürülmüş halda da: bax [Konfiqurasiyalarınızdan variant paketi yaradın](topic:variant-pack) |
| Ən yeni xüsusiyyətlərin öz panellərindəki rəqəmlər üzrə tənliklər (müstəvi, süpürmə, draft və oxşarları) | Onları skriptdə və ya `partcraft set` ilə yazın ([Skriptlər və komanda sətri](topic:scripts-and-cli)) |
| Detalın düymlərlə göstərilməsi | Ölçülər millimetrlərlə göstərilir; rəqəm qutusuna və ya ifadəyə `2in` yazın, 50,8 olur |

## Fayllar

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| İdxal olunmuş STEP bərk cisminin öz xüsusiyyətlərini redaktə etmək (tarixçəsiz gəlir) | Öz xüsusiyyətlərinizlə material əlavə edin və ya kəsin |
| STEP-dən rəng, ad, yığım strukturu və PMI oxumaq | Mövcud deyil |
| glTF, OBJ, IGES, Parasolid ixracı; 3D detalın DWG-si (yalnız variant paketi DWG yazır: çertyoj vərəqi) | Meşlər üçün STL və ya 3MF; bərk cisimlər üçün STEP; 2D üçün DXF |
| IGES, DXF və ya digər proqramların öz fayllarını açmaq (`.3dm` faylları bir cisim kimi açılır: [.3dm modelini bərk cisim kimi açın](topic:open-3dm-files)) | STEP və ya bağlı STL, OBJ və ya 3MF mesh istəyin: [STL, OBJ və ya 3MF açın](topic:open-meshes) |
| İxrac olunan STEP-də yığım strukturu (detal adları ilə ağac) | Yığım STEP-i yerləşdirilmiş bərk cisimlərin bir birləşmiş hissəsidir |
| Brauzerin yükləməsi olmadan seçdiyiniz qovluğa saxlamaq | Brauzerin yükləmə parametrlərində "yerini soruşmaq" seçimini açın |

## Çertyojlar

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Üç ümumi ölçüdən artıq ölçülər (deşik ölçüləri, yerləri, ölçülərdə tolerantlıqlar) | PDF-də qeyd edin və ya DXF ixrac edib 2D CAD proqramında ölçün |
| Birdən çox kəsik və ya detal; düzləşdirilmiş, qırılmış və köməkçi görünüşlər | Hər çertyojda bir kəsik və bir detal |
| Vərəqdə sərbəst mətn, qeydlər və cədvəllər (başlıq və reviziya bloklarından başqa) | Bitirmə qeydi və ya PDF-ə əlavə olunmuş mətn |
| Birinci bucaq proyeksiyası, hərəkət edən görünüşlər, portret vərəqlər | Üçüncü bucaq, avtomatik yerləşdirmə, A4–A0 və ANSI A–E landşaft vərəqləri |
| Canlı kəsik görünüşü: eyni anda bir neçə müstəvi və ya kəsik qutusu, kəsik ətrafında kontur, kəsiyin faylda saxlanması | {{ui:Views}} › {{ui:Section view}}-dən bir dəfəyə bir müstəvi; bax [Kəsik görünüşü ilə içəri baxın](topic:section-view) |
| Yığım çertyojları: daha çox görünüş, ölçü və hərəkət edə bilən balonlar | Avtomatik balonlar və detal siyahısı ilə bir izometrik (və ya açılmış) görünüş |
| GD&T və səth emalı simvollarının surəti və yapışdırılması | Hər birini Datum, Frame və ya Finish ilə yerləşdirin |
| Təlimatlar: Illustrate-də {{ui:From another file…}} üçün STEP faylları, ModelCraft və ya BimCraft-dan birbaşa model, path tracer keyfiyyətində şəkillər, PDF daxilində interaktiv 3D | STEP-i Dizaynda açın və təlimatı {{ui:From the open part}} ilə başladın; modeli glTF (.glb) kimi saxlayın; 3D görünüşün PNG şəkilləri; interaktiv 3D fayl: bax [Illustrate-də təlimat başladın](topic:illustrate) |

## Yığımlar

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Dişli, rack, kulaçka və vint birləşmələri; konusla məhdudlaşan top birləşmə; əyri üzlərdə və ya nöqtələr arasında birləşmələr | Düz üzlərdə sərt, fırlanan, sürüşən, silindrik, müstəvi, top və pin-slot birləşmələri, hər dəyər öz hədləri ilə: bax [Yığım qurun](topic:build-assembly) |
| Detalları fırladan açılma addımları və birləşmələrin yerləşdirdiyi detalları sürükləmək | Düz açılma addımları; detalı əl ilə hərəkət etdirmək üçün birləşməni silin |
| Alt-yığımlar | Yalnız bir səviyyə detal |
| Dişlilər, kulaçkalar, təmas | Mövcud deyil |

## Manufacture

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| 3D uyğunlaşan təmizləmə və 3D-də ofset kobudlaşdırma; su xətti, qələm, radial və spiral təmizləmə; qövslər kimi yazılmış uyğunlaşan keçidlər | 3D kobud emal düz sıralarla və qalan material emalı: bax [3D kobud emal və qalan material emalı](topic:rough-3d); Paralel və Scallop emalı: bax [3D səth emalı](topic:finish-3d); 2,5 oxlu üz, cib, 2D uyğunlaşan, kontur, deşmə və faska: bax [Alət trayektoriyaları və G-kodu yaradın](topic:manufacture) |
| Swarf kəsmə, axın xətti və çoxoxlu kobud emal trayektoriyaları, meyilli iş müstəvisi kodları (G68.2), tutacağın və dəzgahın toqquşma yoxlanışı; 5 oxlu və fırlanan kəsiklərin simulyasiyası | İstənilən əməliyyat üçün meyilli alət, kürəvi frezalı 5 oxlu səth emalı və 4-cü ox fırlanan səth emalı: bax [4 və 5 oxlu emal](topic:multi-axis) |
| Torna dəzgahında daxili deşmə və daxili dişlər, G71/G76 dövrləri, torna trayektoriyalarında qövslər, canlı alətlər, alt-şpindel | Xarici torna: üz, kobud, səth emalı, yiv, detalın kəsilməsi, diş, mərkəzdə qazma: bax [Torna dəzgahında emal](topic:turning) |
| Bucaq və ya künc zondlanması, zond quraşdırıcısı, ölçünün tolerantlıqla müqayisəsi | İş sürüşməsini təyin etmək üçün üz, yan, deşik və ya çıxıntının zondlanması: bax [Zondlama](topic:probing) |
| Tutacaq və ştanq toqquşma yoxlanışları | Yiv uzunluğu xəbərdarlıqlarına baxın və dəzgahınızın simulyatorunda yoxlayın |
| Postda alət ömrü və alt-proqram dövrləri; başqa proqramların post fayllarını yükləmək | Postu PartCraft-ın öz formatında yazın və ya dəyişdirin: bax [Redaktə edilə bilən post-prosessorlar](topic:post-processors) |
| Düym G-kodu (G20) | Yalnız millimetr (G21) |

## Simulyasiya və generativ dizayn

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Qeyri-xətti tədqiqatlar: axma, böyük deformasiyalar, detallar arasında təmas, yorğunluq | Xətti statik və təbii tezliklər: bax [Gərginliyi və əyilməni yoxlayın](topic:simulation); təhlükəsizlik əmsalını 1-dən xeyli yuxarı saxlayın |
| Qeyri-xətti burulma (qüsurlar, post-burulma, snap-through) | Kifayət qədər ehtiyatla xətti burulma yükü əmsalları: bax [İstilik, istilik gərginliyi və burulma](topic:thermal-and-buckling) |
| Üzlər arasında radiasiya (görünüş əmsalları), təmas müqaviməti, temperaturdan asılı materiallar, istilik gərginliyində ətalət (istilik şoku dalğaları) | Ətraf mühitə radiasiya, zaman üzrə sabit və ya kvazi-statik istilik gərginliyi, sabit xassələr: bax [İstilik, istilik gərginliyi və burulma](topic:thermal-and-buckling) |
| Keçici istilik və istilik yükü olan tədqiqatlar üçün avtomatik təkmilləşdirmə; xətanın kiçik olduğu yerdə meşi kobudlaşdırmaq; lokal kəmiyyətə hədəf (bir nöqtədə pik gərginlik) | **Avtomatik təkmilləşdirin** statik, burulma, təbii tezlik və sabit istilik tədqiqatları üçün, bütün detal üzrə xəta əsasında: bax [Gərginliyi və əyilməni yoxlayın](topic:simulation); əks halda element ölçüsünü azaldın |
| Yataq və bolt yükləri, uzaq qüvvələr, momentlər, yaylar, təyin olunmuş yerdəyişmələr | Üzlərdə qüvvələr və təzyiqlər, cazibə; sabit və sürtünməsiz üzlər |
| Yığımların simulyasiyası; istiqamətə görə fərqli materiallar (çap təbəqələri, kompozitlər) | Bir detal, bir izotrop material |
| Tetraedral tədqiqatlar, istilik ötürülməsi və generativ dizayn üçün bir neçə solver axını; çapa qarşı izolyasiya olunmamış səhifədə istənilən axınlar | Voksel tədqiqatları, burulma, zaman üzrə gərginlik və laminar axın səhifə icazə verdikdə axınlardan istifadə edir: bax [PartCraft parametrləri](topic:settings) |
| Turbulent axın, dizayn dəqiqliyi ilə (Spalart–Allmaras modeli təcrübəvi olaraq var: boru sürtünməsi 30–34 % yüksək, arxa addımda yenidən birləşmə 21–39 % qısa; planlaşdırılıb: divarlara yaxın daha incə xanalar), axında istilik, qeyri-stasionar (vaxta dəqiq) axın, sərbəst səthlər, qeyri-Nyuton mayelər, fırlanan detallar | Laminar, stasionar, izotermik Nyuton mayesi axını, və ya kəmiyyət xarakteristikaları üçün təcrübəvi turbulent model: bax [Maye axınını simulyasiya edin](topic:flow-simulation); panel Reynolds ədədi laminardan keçdikdə xəbərdarlıq edir |
| Generativ dizaynda gərginlik limitləri və istehsal qaydaları (yuxarı çıxıntılar, frezələmə istiqamətləri); bir formada bir neçə material | Həcm üçün ən sərt forma; nəticəni Simulyasiyada yoxlayın: bax [Yüklərdən forma böyüdün](topic:generative-design) |
| Redaktə edilə bilən (hamar, parametrik) bərk cisim kimi nəticə | STL, faset STEP və ya nəticəsi idxal olunmuş faset bərk cisim kimi detal |
| Elektrik maşını dizaynı: statorda fırlanan rotor, bucaqdan asılı fırlanma momenti, doyma olan polad, əyilmə nöqtəsindən sonra gücünü itirən maqnitlər, burulğan cərəyanları və dəmir və mis itkiləri; 3-D və ya əyri meshlərdə maqnit sahələri | Analiz kitabxanasında şəbəkədə xətti 2-D maqnitstatika: sarğılar, dəmir, geri qayıtma xəttində daimi maqnitlər, boşluqlar, induktivlik və çəkmə: bax [2-D maqnit sahələri](topic:magnetic-fields-2d) |

## Skriptlər

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Skript redaktorunda üzərinə gətirmə yardımı, breakpoint-lər və addım-addım keçid | Tapma, qatlama və tamamlama mövcuddur (bax [Skriptlər yazın və işə salın](topic:craftscript)); qalanı üçün öz redaktorunuz: skript qrupunda {{ui:Save}} və {{ui:Open}} skriptləri içəri və xaricə köçürür; daxili funksiyalar [CraftScript dili](topic:craftscript-language) səhifəsində sadalanır |
| Skriptdə breakpoint-lər və addım-addım keçid | Yolda `disp` və `fprintf`; {{key:Mod+Enter}} bir dəfəyə bir neçə seçilmiş sətri işə salır |
| Skriptin göstərdiyi sahələr və qrafiklər Dizayn iş sahəsində çəkilir; skriptlər detalın parametrlərini dəyişir | Skript iş sahəsində göstərilir; skriptlər parametrləri `param` ilə oxuyur (bax [Skriptlər yazın və işə salın](topic:craftscript)), onları {{ui:Parameters}} sekmesində dəyişin |
| Qrafiklərlə yanaşı şəkillər və cədvəllər; qrafiki saxlamazdan əvvəl redaktə etmək (zoom, ox limitləri) | Yanaşı göstərilir; qrafiki PNG, SVG və ya CSV kimi saxlayın və başqa yerdə bitirin |
| numpy və digər Python paketləri; Python offline; redaktorda Python qatlanması; Pascal Script | Python-un standart kitabxanası, CraftScript və Lua: bax [Python-da skriptlər](topic:craftscript-python) |
| Lua funksiyalarını daxili funksiyalara ötürmək; skript işləyərkən qurulan ad ilə Lua-dan kitabxana funksiyasını çağırmaq | Kitabxana funksiyasının adını skriptdə yazın (`cs.static_tet(…)`) və ya CraftScript skriptindən çağırın |

## Tətbiq

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Buludda saxlama, paylaşma və versiya tarixçəsi | Hələ mövcud deyil. Faylları kompüterinizə saxlayın və versiyaları adla qeyd edin |
| PartCraft iPad və iPhone-da quraşdırılmış tətbiq kimi | Cihazın brauzerində PartCraft istifadə edin; Android və masaüstündə o, həmçinin CadCraft Studio-da işləyir (getcadcraft.com/download) |
| Kontekst (sağ düymə) menyuları | Alət paneli və sağ panel |
| Təzə başlanğıcdan tam oflayn iş | Yalnız tətbiq oflayn istifadə üçün saxlanıldıqda: bax [Oflayn iş](common:offline) |

Ən çox nəyi itirdiyinizi saytın dəstək səhifəsi vasitəsilə bildirin: bu, növbəti addımları formalaşdırır.

## Mühəndis (generatorlar və sahələr)

| Hələ qurulmayıb | Bunun əvəzinə, indi |
|---|---|
| Yaradılmış istilik dəyişdiricisində başlıqlar, portlar və birləşdiricilər; material möhkəmliyinin temperatur əyriləri; kollektorda tee itkiləri | Generatorlar nüvəni və boruları qurur; Dizaynda birləşdiriciləri əlavə edin; materialın otaq temperaturu göstəricilərindən təhlükəsizlik əmsalı ilə istifadə edin |
| Əlavə kataloqdan bir kliklə generator əlavə etmək | Mühəndis iş sahəsində {{ui:Open}} faylından generator əlavə edir |
| Generatorun öz voksel ölçüsündən incə sahə faylı; içəri `.vdb` faylları oxumaq | Skriptdən daha incə sahə saxlayın; `.vdb` yazılır, oxunmur |
| Təzyiq qabı kodu hesablamaları | Seçdiyiniz təhlükəsizlik əmsalı ilə klassik nazik divar və qalın divar düsturları; kod marjası deyil |
| Digər tətbiqlər üçün generatorlar | Bu versiyada yalnız PartCraft |
