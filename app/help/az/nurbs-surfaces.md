---
title: Sərbəst səthlər (NURBS)
summary: Detalın yanında hamar əyrilər və səthlər — loft, süpürmə, əyri şəbəkələri, dörd kənarlı yamalar, qarışdırmalar, kəsiklər; G0, G1 və G2 davamlılığı dəqiq səthlərdə ölçülür; bərk cisimlərdə birləşdirmə, çıxarma və kəsişmə, zebra və əyrilik görünüşləri, skana uyğunlaşdırılmış üzlər xəta ölçülməklə, STEP və ya IGES faylları. Detal faylında saxlanılır.
keywords: nurbs, skan, tərs mühəndislik, uyğunlaşdırma, mesh-dən səthə, nöqtə buludu, stl, kəsik, kəsilmiş, deşik, kəsmə, bərk cisim, bərk cisimlər, boolean, birləşdirmə, çıxarma, kəsişmə, fərq, tikmə, bağlı, bişirmə, sərbəst forma, səth, səthlər, b-spline, bspline, əyri, spline, loft, süpürmə, rels, şəbəkə, coons, yama, qarışdırma, uyğunlaşdırma, davamlılıq, g0, g1, g2, tangens, əyrilik, zebra, nəzarət nöqtələri, düyünlər, dərəcə, step, iges, A sinfi, gövdə, hamarlama
from: 64ed5196
---

**Səthlər** iş sahəsi məhsul qabıqlarında, avtomobil gövdələrində və qayıq korpuslarında istifadə olunan kimi hamar əyrilər və səthlər yaradır: NURBS, digər səth modelləşdiricilərinin istifadə etdiyi eyni riyaziyyat. Hər şey dəqiq səthlərdə ölçülür, gördüyünüz üçbucaqlarda yox. Ölçülər PartCraft-ın qalan hissəsində olduğu kimi millimetrlədir.

**İş sahəsi** qutusunda **Səthlər** seçin. Alətlər panelində {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} və {{ui:Zebra}} var; bütün əmrlər sağdakı paneldədir. Əmr hələ nə lazım olduğunu deyir: görünüşdə əyrilərə və ya səthlərə klik edin (biri lazım olanda kənarın və ya ucun yaxınlığında) və ya siyahıdan seçin; nöqtələri yazın və ya detalın üzlərində kliklə göstərin (detaldan kənarda onlar zemin müstəvisinə düşür), sonra Enter basın.

Əyrilər və səthlər detal faylında bərk cisimlə yanaşı saxlanılır. Onlar detalın xüsusiyyətlərini dəyişmir: panelin öz **Geri qaytar** və **Təkrarla** düymələri var, hər əmr üçün bir addım.

## Əyrilər

- **Nöqtələrdən keçən əyri** klik etdiyiniz hər nöqtədən keçir. **Nəzarət nöqtələri ilə əyri** bunun əvəzinə nöqtələr qəfəsini izləyir.
- **Düyün əlavə et**, **Dərəcəni artır** və **Dərəcəni azalt** əyrini yerindən tərpətmədən onun təsvirini dəyişir (dərəcəni azaltmaq, əyri tolerantlıqdan çox hərəkət edəcəksə, rədd olunur). **Əyrini yenidən qur** ona yeni sayda nəzarət nöqtəsi verir və nə qədər hərəkət etdiyini deyir.
- **Əyrini uyğunlaşdır** bir əyrinin ucunu başqasının ucu ilə G0 (toxunma), G1 (eyni istiqamət) və ya G2 (eyni əyrilik də) ilə üst-üstə gətirir. **Əyri qarışdır** iki uc arasında G1 və ya G2 ilə yeni əyri əlavə edir.

## Səthlər

- **Loft** iki və ya daha çox əyri ilə, **Düz səth** ikisi arasında, **Əyrini ekstrüziya et**, **Əyrini fırlat**.
- **Bir rels boyunca süpürmə** profili burulmadan yol boyunca aparır; **İki rels boyunca süpürmə** profilin uclarını hər iki relsdə saxlayır. Süpürmələr uyğunlaşdırılır: nəticə həqiqi süpürməyə nə qədər yaxın qaldığını deyir.
- **Əyri şəbəkəsindən səth** hər biri digərlərini bir dəfə kəsən əyri şəbəkəsindən keçir. **Dörd kənardan yama** künclərində birləşən dörd əyrini doldurur.
- **Səthi uyğunlaşdır** səth kənarını qonşusu ilə G0, G1 və ya G2 ilə birləşdirir; **Səthi qarışdır** iki kənar arasında səth əlavə edir.
- **Ofset səth**, **Səthi uzat** (səth əvvəlki kimi davam edir), **Səthi yenidən qur**.

## Keyfiyyətin yoxlanılması

**Ortaq kənarlar** cədvəli iki səthin paylaşdığı hər kənarı, aralarındakı boşluğu (mm), bucağı (°) və əyrilik sıçrayışını (1/mm) və bunun G0, G1 və ya G2 olub-olmadığını göstərir. İstədiyinizdən pis olan kənar **Problemlər**-də **Uyğunlaşdır** düzəlişi ilə görünür.

**Zebra** zolaqları və **əyrilik** rəngləri dəqiq səthdən gəlir: kənar boyunca fasiləsiz keçən zolaqlar G1 deməkdir; eni də saxlayan zolaqlar G2 deməkdir.

G0–G2 hər kənarda 33 nöqtədə ölçülür. **G3 və "A sinfi" keyfiyyəti ölçülmür** və iddia edilmir.

## Səthi kəsin

**Kəsik** qrupu səthi formasını dəyişmədən kəsir: səth bütün nəzarət nöqtələrini saxlayır, yalnız konturun içindəki hissə göstərilir, sayılır və yazılır. **Düzbucaqlıya kəs** və **Dairə ilə kəs** səthin hər istiqamətdəki payı (0-dan 1-ə) ilə işləyir, buna görə görünüşdə seçim tələb etmir. **Əyri ilə kəs** səthin üzərində yerləşən qapalı əyri götürür (səthə proyeksiya olunur və açıq olduqda və ya tolerantlıqdan çox uzaq olduqda sözlərlə rədd edilir). **Deşik kəs** işarəsini qeyd edin ki, konturun içini silin; onu buraxın ki, yalnız içini saxlayın. Səthin bir saxlanılan konturu və istənilən sayda deşiyi ola bilər; başqa konturu kəsən kontur rədd olunur. **Kəsiyi sil** bütün səthi yenidən göstərir. Panelin Geri qaytarması kəsiyi digər addım kimi geri qaytarır.

STEP kəsiyi üzün sərhədləri kimi, IGES isə kəsilmiş səth (entity 144) kimi daşıyır; hər ikisi onu geri oxuyur.

## Bərk cisimlər və Boolean-lar

**Bərk cisimlər** qrupu səthləri qapalı cisimlərə çevirir və birləşdirir. Burada bərk cisim, birlikdə həcmi bağlayan panelin öz səthləri çoxluğudur; onun üzləri kəsikləri ilə birlikdə dəqiq NURBS səthləri olaraq qalır.

- **Qutu bərk cismi**, **Silindr bərk cismi** və **Kürə bərk cismi** yazılmış ölçülərdən (mm) cisim yaradır: altı düz üzlü qutu, yumru yanı və dairəyə kəsilmiş iki düz ucu olan silindr, bir fırladılmış səthli kürə.
- **Səthlərdən bərk cisim** özünüzün yaratdığı səthləri qruplaşdırır. Onları seçin, və ya heç birini seçməyin ki, hələ bərk cisimdə olmayan göstərilən bütün səthlər istifadə olunsun. Tolerantlıq daxilində bir-birinə tikilirlər: bağlanmasalar heç nə dəyişmir və panel neçə kənarın açıq qaldığını və onların nə qədər yaxın birləşməli olduğunu deyir.
- **Birləşdir**, **Çıxart** (ikinci bərk cisim birincidən çıxarılır) və **Kəsişdir** (yalnız ikisinin ortaq hissəsi) iki bərk cisim götürür: hər birinin üzünü görünüşdə kliklə göstərin, və ya **Bərk cisimlər** siyahısında **Seç** basın. Nəticənin yanında iki bərk cismi saxlamaq üçün **İki bərk cismi saxla** seçin.

Boolean hər üzü öz dəqiq səthində saxlayır və onu kəsişmə boyunca yeni kəsik konturları ilə kəsir. Nəticə sətri ölçülmüş rəqəmləri verir: bərk cisim mühərrikinin nöqtələrinin dəqiq səthlərə oturmaq üçün nə qədər hərəkət etməli olduğu (heç vaxt tolerantlıqdan çox deyil), kəsişmə nöqtələrinin hər iki səthə nə qədər yaxın olduğu (adətən milyonda bir neçə millimetr), həcm və yeni üzlərin dəqiq səthlərindən yenidən tikildikdə yenidən bağlanıb-bağlanmadığı. Həcmlər tolerantlıq daxilində üçbucaqlar üzrə ölçülür (başqa təyin etməsəniz 0.05 mm), buna görə kürənin və ya silindrin həcmi dəqiq həcmdən bir az aşağı oxunur: kiçik tolerantlıq daha yaxın nəticə verir. Təmiz görülə bilməyən Boolean (bərk cisimlərin heç bir ortaq tərəfi yoxdur, kontur özünü kəsir) sözlərlə rədd olunur və heç nəyi dəyişmir. Bir Boolean panelin {{ui:Undo}}-sunun bir addımıdır.

**Bərk cisimlər** siyahısında **Qrupdan çıxar** üzləri sadə səth kimi saxlayır; zibil qutusu bərk cismi və onun üzlərini silir.

## Yuvarlaqlaşdırma və qalınlaşdırma

**Üzlər arası yuvarlaqlaşdırma** bir bərk cismin iki üzünün birləşdiyi kənarı yuvarlaqlaşdırır: iki üzü seçin (görünüşdə, və ya siyahıda **Seç** ilə), **radiusu** və radiusun kənar boyunca dəyişdiyi hallarda **sondakı radiusu** yazın (0 bir radius saxlayır). Həmin radiusda top kənar boyunca hər iki üzə toxunaraq yuvarlanır; yuvarlaqlaşdırma hər nöqtədə onun qoyduğu dəqiq dairəvi qövsdür, bir səthə birləşdirilir və iki üz top onlara toxunduğu yerdə kəsilir. Xarici kənar material itirir, daxili künc qazanır. Nəticə sətri nə ölçüldüyünü göstərir: yuvarlaqlaşdırma səthinin nöqtələr arasında yuvarlanan topdan nə qədər fərqləndiyi (nöqtələr, tolerantlığın dörddə birinə çatana qədər əlavə olunur), yuvarlaqlaşdırma ilə hər üz arasında toxunma xətləri boyunca ən böyük bucaq və Birləşdir ilə eyni rəqəmlər. Yazılan radius sığmadıqda (top üzdən çıxacaq və ya üz radiusdan sıx əyilir) üz adlandırılaraq rədd olunur və heç nə dəyişmir.

**Bir neçə kənarı yuvarlaqlaşdır** bir addımda çoxlu kənarı yuvarlaqlaşdırır: birinci kənarın iki üzünü, sonra növbəti kənarın iki üzünü seçin və s. (üz bir neçə cütdə ola bilər, məsələn qutunun üst üzü dördündə); bütün kənarlar yazdığınız radiusu alır. Hər yuvarlaqlaşdırma bərk cismin əvvəlki vəziyyətində hesablanır, sonra bir-birinin ardınca kəsilir, buna görə sıra fərq etmir. İki yuvarlaqlaşdırılmış kənar, digər kənarları kəskin qalan künclə görüşdükdə, iki yuvarlaqlaşdırma kəsişmə əyrisi boyunca bir-birinə girir (qırışıq). Üç yuvarlaq xarici kənar üç düz üzün bir-birinə perpendikulyar olaraq bir radiusla görüşdüyü künc, üç yuvarlaqlaşdırmaya toxunan bir **kürə yamağı** olur (**Künclər** işarəsini çıxarsanız qırışıq künc alırsınız); kənar iki ucunda belə künclər olduqda ən azı radiusun iki qat uzunluqda olmalıdır. Nəticə sətri neçə kənarın yuvarlaqlaşdırıldığını və künclərin necə çıxdığını deyir. Daxili kənarlar da birlikdə yuvarlaqlaşdırıla bilər, lakin yenidən bağlanmayan nəticə yalnız bildirilir (sətir bunu deyir), buna görə yoxlayın.

**Bərk cismə qalınlaşdır** səthə qalınlıq verir: onu seçin, **qalınlığı** yazın və öz tərəfinə böyütmək üçün **Digər tərəf** seçin. Ofset üz səthə uyğunlaşdırılır və ona qarşı ölçülür (nəticə sətri qalınlıqdan ən böyük fərqi verir); divarlar hər kənarı və hər kontur xəttini izləyir. Səth həmin tərəfdə qalınlıqdan sıx əyilirsə və ya səthin başqa bir hissəsi qalınlıqdan yaxındırsa, səth və yer adlandırılaraq rədd olunur və heç nə dəyişmir.

## Bərk cismi detala bişirin

**Bişir** (Səthlər alətlər panelində) və ya **Bərk cisimlər** siyahısında **Detala bişir** bərk cismi detalın cisminə çevirir, açılmış STL-in cismə çevrildiyi kimi: bərk cismi seçin, detala **əlavə olunmasını**, ondan **kəsilməsini** və ya onunla **kəsişdirilməsini** seçin və tolerantlığı (üçbucaqların dəqiq səthlərdən nə qədər uzaq ola biləcəyi). Bu, detalın Geri qaytarma-sının bir addımıdır və xüsusiyyət siyahısında bərk cismin adını daşıyan idxal kimi görünür. Detal üçbucaqları saxlayır, buna görə səthlər olmadan açılır və yenidən qurulur; dəqiq bərk cisim Səthlərdə qalır, buna görə dəyişiklikdən sonra onu yenidən bişirə bilərsiniz.

## Fayllar

Əyriləri və səthləri olduğu kimi **STEP** (AP242) və ya **IGES** kimi ixrac edin (B-spline əyriləri və səthləri, heç nə üçbucaqlara çevrilmir). Hər səth öz kəsiyi ilə öz üzüdür; bərk cisim bir qapalı qabıq kimi yazılır, hər kənar iki üzü ilə paylaşılır, digər CAD proqramlarının gözlədiyi kimi (status sətri neçə bərk cismin bu şəkildə getdiyini göstərir). IGES-də eyni bərk cisim bir manifold bərk B-rep-dir (entity 186, bağlı qabıq 514 üzərində, üzlər 510, döngələr 508, bir kənar siyahısı 504 və bir təpə siyahısı 502); üzləri kənar-kənar cütləşməyən bərk cisim ayrı üzlər kimi yazılır və sətir bunu deyir. **İdxal…** belə bərk cismi STEP və IGES-dən bərk cisim kimi geri oxuyur.

## Gəmi korpusu xətləri

**Hamarla** (Səthlər alətlər panelində) hər əyrini dəqiq formasında ölçür — dönmələr (bir istiqamətdən digərinə əyilmənin dəyişdiyi yer), ən böyük əyrilik, düyünlərində əyrilik sıçrayışları və kobudluğu — və dönməsi və ya sıçrayışı olanları ən az nəzarət nöqtəsi ilə, verdiyiniz tolerantlıq daxilində qalaraq və dönmə əlavə etmədən yenidən qurur. Stansiyaları, su xətlərini və butok xətlərini əyri kimi çəkin, onları hamarlayın, sonra stansiyalar üzərindən korpusu **Loft** edin və **Zebra** ilə yoxlayın. Hamar olmayan əyrilər də **Problemlər**-də **Bu əyrini hamarla** düzəlişi ilə görünür. İstiqaməti dəyişməli olan xətt (S-formalı kəsik) bir dönməni saxlayır. Korpusun yerdəyişməsi, mərkəzləri və düzləşdirici qolları bərk detaldan gəlir: hidrostatika alətinə baxın.

## Skandan səthlər (tərs mühəndislik)

Skanlanmış meshi olan detalı açın (açılmış STL və ya bişirilmiş cisim), **İş sahəsi** qutusunda **Səthlər** seçin və **Skan** qrupunda **Səthləri skana uyğunlaşdır** seçin; detalın qurulmuş meshi skandır. Alət **müstəvilər**, **silindrlər**, **kürələr** və **konuslar** axtarır (işlənmiş detalın təşkil olunduğu dəqiq səthlər; hər sətir tapdığı radiusu və ya yarım bucağı göstərir), **yuvarlaqlaşdırmaları** tapır (yumru kənarlar və künclər: bir-birinə tangens olan iki və ya daha çox digər üzə toxunan kiçik silindr və ya kürə, radiusu və birləşdirdiyi üzlərlə göstərilir), **kənar yuvarlaqlaşdırmalarını** (tor: düz üzün silindr və ya konusla görüşdüyü yumru kənar, radiusu və halqa radiusu ilə göstərilir) və **dəyişən yuvarlaqlaşdırmaları** (kənar boyunca radiusu dəyişən yumru kənar, hər ucdakı radius ilə göstərilir), hamar, az əyilmiş parçaya **bir sərbəst formalı yama** uyğunlaşdırır və hər üzü ondan gəldiyi skan hissəsinin konturuna kəsir, buna görə deşiklər və künclər qalır. Seçimlər: **tolerantlıq** (skan nöqtəsinin müstəvi və ya silindrdən nə qədər (mm) uzaq ola bilməsi və hələ də ona aid olması, və sərbəst formalı yama üçün hədəf), **ən kiçik parça** (səth sahəsinin payı) və **ən çox üz**. Eyni skan və seçimlər həmişə eyni üzləri verir.

Nəticə cədvəldir, hər üz üçün bir sətir: növü, neçə üçbucaqdan gəldiyi və **skandan üzə ölçülmüş xəta** (rms, ən böyüyü və tolerantlıq daxilində olan nöqtələrin payı). Ölçülən nöqtələr skanın təpələri və hər üçbucağın ortasıdır. Xəta əks istiqamətdə (üzdən skana) ölçülmür, buna görə skandan kənara çıxan üz görünməz. Cədvəlin altındakı qeyd də sığmayacaq qədər kiçik olan sahənin payını deyir. Görünüşdə skan nöqtələri **kənarlaşma xəritəsi** ilə rənglənir: üzdə göy, tolerantlığın yarısında yaşıl, tolerantlıqda və ya daha çox qırmızı (**Kənarlaşma xəritəsini göstər** işarəsini çıxarsanız gizlənir). Özünə qatlanan parçalar (məsələn, sərbəst formalı yamalarla uyğunlaşdırılmış bağlı boru) uyğunlaşdırılmamış kimi siyahıya salınır, heç vaxt bir səthə məcbur edilmir.

**Səthləri bərk cismə tikin** bərk cisimdə olmayan göstərilən hər səthi bir qapalı bərk cismə tikir. Skan üzləri yalnız skanın öz xətası daxilində birləşir, buna görə bağlanan ən kiçik birləşmə məsafəsini sınayır (heç vaxt təyin etdiyiniz **tikmə məsafəsindən** çox deyil) və üzlər bağlanmadıqda sözlərlə rədd edir. Heç vaxt boşluğun üzərini örtmür. Yumru kənarlı qutu, yuvarlaqlaşdırmaları öz üzləri kimi tapıldıqda tikilir; bağlanan birləşmə məsafəsi nəticədədir. Bərk cisim sonra Birləşdir, Çıxart, Kəsişdir və **Detala bişir** ilə işləyir.

Nə etmir: **kənar yuvarlaqlaşdırması** (tor) yalnız artıq tapılmış silindr və ya konusun oxu ətrafında axtarılır, **dəyişən yuvarlaqlaşdırma** isə yalnız kifayət qədər düz kənar boyunca (kəsikləri bir istiqamətə kvadrat kəsilir); qalan yerlərdə kifayət qədər hamar olduqda sərbəst formalı yamalar kimi çıxır, əks halda kənarda qalır. Kürələr, konuslar və yuvarlaqlaşdırmalar təsadüfi seçmə ilə tapılır, buna görə çox kiçik (bir neçə üçbucaqlı) biri buraxıla bilər. Kənarlaşma xəritəsi skandan üzlərə olan məsafəni göstərir, əksinə deyil. Çox böyük skanlar (300,000 üçbucaqdan çox) burada rədd olunur. Tam dövrə silindrin üzləri deşiklərin ətrafında kəsilir, tikiş isə deşik olmayan yerə qoyulur. Ona etibar etməzdən əvvəl hər üzü skanla yoxlayın.

## Hələ hazır deyil

Əyri üzlərin künclərində və ya müxtəlif radiuslarla birləşən kənarların yuvarlaqlaşdırılması (təpə qarışdırması), birləşməyən üzlər arasında yuvarlaqlaşdırma, əyilmiş və ya əyri üzdə bitən daxili yuvarlaqlaşdırma, Boolean-lar və yuvarlaqlaşdırmalar üçbucaqsız səthlər üzərində hesablanır (burada bərk cisim mühərriki tolerantlıq daxilində üçbucaqlarla işləyir və hər nöqtə sonra dəqiq səthlərə geri qaytarılır), səthlər dəyişdikdə onları izləyən bişirilmiş cisim, Boolean xaricində bir səthin başqa səthlə kəsilməsi, dörddən çox tərəfli deşiklərin doldurulması, əyrilərin səthlərə proyeksiyası.
