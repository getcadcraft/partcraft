---
title: İsitmə, istilik gərginliyi və burkulma
summary: Sabit temperaturlardan, istilik axınından, istilik gücündən, konveksiyadan və radiasiyadan (sabit və ya zamanla) detaldakı temperaturları tapın, temperatur artımı ilə gərginlik analizini yükləyin və nazik detalın hansı yükdə burkulduğunu tapın, hər üsulun nəyi göstərib-göstərməyəcəyi ilə birlikdə.
keywords: istilik, istilik ötürməsi, temperatur, keçiricilik, konveksiya, film əmsalı, radiasiya, emissivlik, istilik axını, istilik gücü, istilik generasiyası, istilik həzmi, keçici, zaman, soyutma, qızdırma, Crank-Nicolson, implisit Eyler, istilik balansı, istilik gərginliyi, zamanla istilik gərginliyi, keçici istilik gərginliyi, sönmə, istilik şoku, gərginlik tarixçəsi, ən pis zaman, istilik genişlənməsi, genişlənmə əmsalı, burkulma, Eyler burkulması, yük əmsalı, kritik yük, sütun, nazik, məxsusi qiymət
from: 1a1b7545
---

Bu tədqiqatlar statik gərginlik və məxsusi tezliklərin yanında Simulyasiya iş sahəsində yerləşir (bax [Gərginlik və əyilməni yoxlayın](topic:simulation)). Onları panelin **Növ** qutusundan seçin. Hamısı eyni kiçik kublardan ibarət şəbəkədən və eyni material siyahısından istifadə edir; hər kitabxana materialının istilik keçiriciliyi, xüsusi istilik tutumu və genişlənmə əmsalı var (defolt dəyərlər **Xüsusiyyətlər** altında göstərilir).

## İstilik: istilik hara gedir?

1. **Növ** kimi **Termal (istilik ötürməsi)** seçin.
2. Panelin **Əlavə et** siyahısından istilik şərtləri əlavə edin, sonra onların üzlərinə klik edin (dayaqlar və yüklərdə olduğu kimi):
   - **Sabit temperatur**: üz °C ilə müəyyən temperaturda saxlanılır.
   - **İstilik axını**: üzə daxil olan W/m² (mənfi qiymət çıxan axın deməkdir). Kublar pilləli görünsə belə, üzün həqiqi sahəsinə təsir edir.
   - **İstilik gücü**: vatt ilə ümumi güc, seçilmiş üzlər arasında sahəyə görə bölünür. İstilik generatoru və ya məlum gücə malik çip üçün istifadə edin.
   - **Konveksiya**: müəyyən temperaturda olan hava və ya maye istiliyi h W/(m²·K) əmsalı ilə aparır. Tipik h: durğun hava 5–10, ventilyator 25–100, su 500–10 000. PartCraft h-ı hesablamır: bu tədqiqatda maye axını yoxdur.
   - **Radiasiya**: üz müəyyən temperaturda ətraf mühitə şüalanır, emissivlik 0 ilə 1 arasında. O, **xətti** hesablanır (radiasiya temperaturdan asılı əmsal kimi yazılır və sabitləşənə qədər yenidən həll olunur) və yalnız ətraf mühitə gedir: üzlər bir-biri ilə istilik mübadiləsi etmir.
3. **İstilik generasiyası** (W/m³) bütün detalı daxildən qızdırır, məsələn, müqavimətli detal.
4. **Həll et** düyməsinə basın. Detal temperatura görə rənglənir; istilik axınının haradan keçdiyini görmək üçün **Göstər** bölməsindən **İstilik axını** seçin. Hər ikisini oxumaq üçün detalın üzərinə gəlin.

Sabit istilik axını istiliyin getməli olduğu yer tələb edir: ən azı bir sabit temperatur, konveksiya və ya radiasiya. Yalnız istilik qəbul edən detalın sabit halı yoxdur; onu zamanlı edin.

Cədvəldə ən aşağı və ən yüksək temperatur və onların yeri, ən böyük istilik axını və **istilik balansı** göstərilir: hər şərtə daxil olan və ya çıxan istilik (sabit temperatur özünün təmin etməli və ya udmalı olduğu miqdarı sayır), generasiya olunan istilik, daxil və çıxan ümumi məbləğlər və **balanssızlıq**. Balanssızlıq daxil olan istiliyin kiçik bir hissəsi olmalıdır; böyük olarsa, nəticəyə etibar etmək olmaz.

### Zamanla (keçici)

**Keçici** qutusunu işarələyin və **Başlanğıc temperaturu** (bütün detal orada başlayır), **Zaman müddəti** və **Zaman addımlarının sayı**nı verin. **Implisit Eyler** möhkəmdir; **Crank–Nicolson** eyni addımlarda daha dəqiqdir, lakin qəfil dəyişiklikdən sonra dalğalana bilər. Həlldən sonra **Zaman** sürgüsünü sürüşdürərək hər an üçün temperaturları görün (rəng şkalası hər an üçün eyni qalır). Bu halda istilik balansına saxlanılan istilik də daxil olur.

## İstilik gərginliyi: temperatur dəyişikliyi detala nə edir?

**Statik gərginlik** (və ya **Burkulma**) tədqiqatında **Termal yük** təyin edin:

- **Vahid temperatur dəyişikliyi**: bütün detal həmin kelvin qədər qızır (və ya soyuyur, mənfi ədədlə).
- **Termal şərtlərdən temperaturlar**: eyni tədqiqata istilik şərtləri əlavə edin; əvvəlcə eyni şəbəkədə sabit temperaturlar həll olunur, sonra detal α·(T − **gərginlikdən azad temperatur**) qədər genişlənir.
- **Zamanla temperaturlar (keçici işləmə)**: istilik şərtləri əlavə edin, sonra keçici istilik tədqiqatında olduğu kimi **Başlanğıc temperaturu**, **Zaman müddəti**, **Zaman addımları** və **Zaman addımlaması** təyin edin. Temperaturlar eyni şəbəkədə (kublar və ya tetraedrlər) zamanla həll olunur və hər an üçün statik həll o anın temperaturlarında həmin anın gərginliyini verir. **Gərginlik vaxtı**:
  - **Ən pis zaman** (başlanğıc): **Gərginlik həlləri** işləmə boyunca bərabər yayılmış anları (başlanğıc daxil olmaqla) həll edir (dəyişməsəniz 21, ən çoxu 51). Nəticələr von Mises gərginliyinin ən böyük olduğu anda açılır; cədvəl onu adlandırır, kiçik diaqram pik gərginliyi zamana görə göstərir və **Zaman** sürgüsü həll olunmuş hər an üçün gərginliyi göstərir (rəng şkalası ən pis anın şkalası olaraq qalır).
  - **Seçilmiş vaxt**: bir an, verdiyiniz **Zaman (s)**-ə ən yaxın zaman addımı. Burkulma tədqiqatı həmişə seçilmiş vaxt götürür (dəyişməsəniz işləmənin sonu).

Söndürülən (isti yerdən soyuq suya salınan) və ya qəfil qızdırılan detal ən çox gərginlik altında olur, içi ilə səthi ən çox fərqləndikdə: çox vaxt elə başlanğıcda. Sabit temperatur ilk andan qəfil dəyişiklik kimi tətbiq olunur, ona görə başlanğıcdakı gərginlik element ölçüsündən asılıdır (yalnız bir neçə element dəyişikliyi görür). Bunu "çox yüksək" kimi oxuyun və şkalanın sonrakı anlarına baxın, şəbəkənin həll etdiyi qiymətlər üçün. Gərginlik kvazistatikdir: ətalət yoxdur, qəfil dəyişiklikdən titrəmə yoxdur.

Sərbəst böyüyə bilən detalda istilik gərginliyi yoxdur: onu yalnız hərəkət etməməsi üçün çox az tutun (məsələn, düz bucaq altında üç sürtünməsiz üz). İki divar arasında sıxılan polad lent 50 K qızdırılsa, sərt divarlar arasında təxminən 117 MPa gərginlik daşıyır. Termal yüklər özünü tarazlaşdırır, ona görə reaksiyalar yalnız mexaniki yükləri tarazlaşdırır.

## Burkulma: nazik detal nə vaxt təslim olur?

1. **Növ** kimi **Burkulma (xətti)** seçin və statik tədqiqatda olduğu kimi dayaqlar və yüklər əlavə edin.
2. **Tapılacaq yük əmsalları** təyin edin (neçə burkulma forması).
3. **Həll et** düyməsinə basın. Hər formanın **yük əmsalı** var: ideal detalın burkulduğu yüklərinizin mərtəbəsi. Yük əmsalı 3 o deməkdir ki, yükünüzün üç qatında; **yük əmsalı 1-dən aşağıdırsa, detal tətbiq etdiyiniz yüklər altında burkulur**. Cədvəl hər əmsalda ümumi yükü də verir. Forma burkulmanın necə baş verdiyini göstərir (onun ölçüsünün mənası yoxdur).

**Xətti burkulma həqiqi burkulma yükünü yuxarı qiymətləndirir.** O, mükəmməl detalı fərz edir: tamamilə düz, qalıq gərginlik yoxdur və elastikdir. Real detallarda kiçik qüsurlar var və əvvəl təslim ola bilər, nazik divarlı qabıqlar isə xətti qiymətin bir hissəsində burkula bilər. Geniş ehtiyat qoyun və nazik qabıq üçün yük əmsalını 3-ə yaxın və ya ondan aşağı xəbərdarlıq kimi qəbul edin.

## Ona nə dərəcədə etibar etmək olar

PartCraft bu həlledicilləri əl düsturları ilə yoxlayır: iki temperatur arasında çubuq (dəqiq), soyuducu qanad (0.3 K daxilində), özü-özünü qızdıran lövhə (dəqiq), zamanla soyuyan kub (Crank–Nicolson ilə 0.1 % daxilində), bir ucundan qəfil qızdırılan çubuq, sərbəst qızdırılan çubuq (gərginlik yoxdur, ΔL = αLΔT), divarlar arasında sıxılan çubuq (σ = −EαΔT), zamanla söndürülən lövhə klassik sıra həllinə qarşı (kublarda 1 %, tetraedrlərdə lövhənin mərkəzində 2.1 %; səthində 0.5 % daxilində), uzun işləmənin son anı sabit termal gərginliyə qarşı (milyonda birə qədər eyni) və Eyler sütunları (sabit–sərbəst 1 %, sərbəst–sərbəst 1.5 % daxilində). Bunları yadda saxlayın:

- **Sabit material dəyərləri.** Keçiricilik, xüsusi istilik və genişlənmə burada temperaturla dəyişmir; bir neçə yüz dərəcədə 10–30 % dəyişə bilər. Sərtlik də dəyişmir.
- **Zamanla gərginlik kvazistatik və elastikdir**: hər an statik həlldir (ətalət yoxdur) və təslim olma yoxdur, ona görə səthi təslim edəcək söndürmə təslim qiymətdən yuxarı gərginlik göstərir.
- **Konveksiya əmsalları sizin daxil etdiyinizdir**, hava və ya su axınından hesablanmır.
- **Kontakt müqaviməti yoxdur**: detal bir bərk cisimdir.
- **Yalnız xətti burkulma**: qüsur yoxdur, təslim olma yoxdur, burkulmadan sonrakı davranış yoxdur.
- Kub pilləli görünüşü və kəskin daxili künclər istilik gərginliyinə digər gərginliklərlə eyni təsir edir (bax [Gərginlik və əyilməni yoxlayın](topic:simulation)).
- Bu laboratoriya versiyasıdır: vacib detalları başqa üsulla yoxlayın.

## Əlaqəli

- [Gərginlik və əyilməni yoxlayın (Simulyasiya)](topic:simulation)
- [Hələ qurulmayanlar](topic:not-built-yet)
