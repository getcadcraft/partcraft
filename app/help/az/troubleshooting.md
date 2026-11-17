---
title: Problemlərin həlli
summary: PartCraft-da qarşılaşa biləcəyiniz problemlər: tətbiqin açılmaması, xüsusiyyətlərin işləməməsi, həll olunmayan eskizlər, açılmayan fayllar və səhv davranan birləşmələr; gördüyünüz mesaj və düzəliş ilə.
keywords: problem, xəta, kömək, işləmir, uğursuz, uğursuzluq, çökmə, boş, webgl, webassembly, nüvə, qurulmayıb, həddindən artıq təyin olunmuş, açıq profil, açılmır, heç nə olmur, yanlış istiqamət, yavaş
from: 7728542c
---

Bir şey işləmədikdə, əvvəlcə ekranın aşağısındakı **status sətrini** oxuyun: PartCraft orada nə üçün rədd etdiyini və ya növbəti nə gözlədiyini deyir. Uğursuz xüsusiyyət də mesajını sağ panelinin yuxarısında və tarixçədə sətirin üzərinə gəldikdə göstərir.

## Tətbiq açılmır

### "Bu brauzer 3D göstərə bilmir (WebGL söndürülüb və ya yoxdur), buna görə PartCraft burada işləyə bilməz."

**Səbəb:** brauzerdə 3D qrafika (WebGL) söndürülüb, bloklanıb və ya qrafik sürücü tərəfindən dəstəklənmir.

**Düzəliş:**

:::chromium
`chrome://settings/system` (və ya Edge-də `edge://settings/system`) açın və "Mövcud olduqda qrafika sürətləndirməsindən istifadə et"i yandırın, sonra brauzeri yenidən başladın. Artıq yanıbsa, WebGL vəziyyətini `chrome://gpu`-da yoxlayın və qrafik sürücünü yeniləyin.
:::

:::firefox
`about:support` açın və Qrafika, WebGL-ə baxın. Bloklanıbsa, qrafik sürücünü yeniləyin. `about:config`-də `webgl.disabled` `false` olmalıdır.
:::

:::safari
Hazırkı Safari-də WebGL həmişə yanıb. macOS-u yeniləyin (Safari onunla birlikdə yenilənir). Hələ də işləmirsə, qrafik avadanlığı istisna etmək üçün eyni Mac-da Chrome və ya Firefox sınayın.
:::

Uzaq masaüstləri və bəzi virtual maşınlarda WebGL yoxdur. Kompüterin özündə sınayın.

### "Həndəsə nüvəsi yüklənmədi: …"

**Səbəb:** həndəsə nüvəsi (WebAssembly proqramı) gətirilə və ya başladıla bilmədi. Adətən tətbiq yüklənərkən əlaqə kəsilib, WebAssembly şirkət siyasəti və ya brauzerin qoruma parametri ilə söndürülüb, ya da brauzer çox köhnədir.

**Düzəliş:** əlaqə olduqda səhifəni yenidən yükləyin. Hələ də uğursuz olarsa, başqa hazırkı brauzer sınayın. Firefox-da `about:config`-də `javascript.options.wasm` `true` olmalıdır. Oflayn olduqda tətbiq və onun nüvəsi yalnız əlaqə kəsilməzdən əvvəl tətbiq paneli **Oflayn hazırdır** deyirsə yüklənir ({{ui:Oflayn üçün saxla}} əlaqə olarkən; bax [Oflayn işləmək](common:offline)).

### Oflayn düymə "Saxlana bilmədi" və ya "Oflayn mövcud deyil" deyir

**Saxlana bilmədi**: bəzi fayllar yüklənmədi. Əlaqə olarkən yenidən cəhd etmək üçün klik edin; yavaş və ya ölçülü əlaqə ikinci cəhd tələb edə bilər. **Oflayn mövcud deyil**: bu brauzer pəncərəsi oflayn nüsxə saxlaya bilmir (məxfi pəncərələr və bəzi idarə olunan kompüterlər bunu bloklayır). Normal pəncərə istifadə edin və ya sekmə açıq saxlayın.

### PartCraft oflayndır, lakin köhnədir

Əlaqə olarkən **Oflayn hazırdır** düyməsinə klik edin və {{ui:Yenidən saxla (ən yeni versiyanı al)}} seçin.

### "Süpürmə: hələ qurulmayıb. Dəqiq nüvə tələb edir, …"

Tam mesaj belədir: "<Ad>: hələ qurulmayıb. Dəqiq nüvə tələb edir, PartCraft-ın bu versiyasında isə belə nüvə yoxdur. Kömək › Hələ qurulmayanlar nə etmək lazım olduğunu göstərir." Bunu Süpürmə, Loft, Qabırğa, təbəqə metal flanşı, səth xüsusiyyəti, Birləşdirmə, Gövdəni köçürmə, Gövdəni miqyaslamaq və ya Yol naxışı seçəndə görürsünüz, və yalnız dəqiq nüvənin qura biləcəyi digər işlərdə. Brauzerinizdə və ya detalınızda səhv yoxdur: PartCraft-ın bu versiyası hər detalı mesh nüvəsi ilə qurur. Nə etmək lazım olduğunu görmək üçün bax [Hələ qurulmayanlar](topic:not-built-yet) və [Mesh nüvəsi](topic:solid-kernels).

### "Həndəsə nüvəsi yüklənir…" heç vaxt getmir

Yavaş əlaqədə bir az gözləyin: nüvə və 3D kitabxana ilk dəfə yüklənir. Sonra səhifəni yenidən yükləyin. Səhifənin özü xəta göstərirsə, yuxarıya baxın.

## Düymə basdıqda heç nə olmur

- Mətn qutusu panelin içindəki kursorla açıqdırsa, klavişlər işləmir. 3D görünüşə klik edin və ya yazdıqdan sonra {{key:Esc}} basın (və ya {{key:Tab}} ilə çıxın).
- Ox düymələri və {{key:Plus}}/{{key:Minus}} görünüşü yalnız görünüşə klik etdikdən sonra fırladır və yaxınlaşdırır.
- Dialoq açıqdır: əvvəlcə ona cavab verin.
- Eskizdə {{key:F}} Fillet alətidir, Sığdır deyil. {{ui:Sığdır}} düyməsini istifadə edin.

## Alət düyməsi boz rəngdədir

- Eskiz açıq olduqda xüsusiyyət düymələri boz olur. Əvvəlcə eskizi bağlayın.
- Eskiz alətləri yalnız eskizin içində işləyir.
- Geri qaytarılacaq və ya yenidən ediləcək heç nə olmadıqda {{ui:Geri qaytar}} və {{ui:Təkrarla}} boz olur.
- {{ui:Yığım}} həndəsəsi olan detal tələb edir. {{ui:Birləşmə}} yığımda iki detal tələb edir. {{ui:Detalı redaktə et}} seçilmiş detal tələb edir.
- Yığımda {{ui:STEP AP242 (dəqiq bərk cisim)}} və {{ui:STEP AP214 (dəqiq bərk cisim)}} boz olur: hər detalı ayrıca ixrac edin. Başqa proqram dəqiq faylı rədd edir: {{ui:STEP AP214 (dəqiq bərk cisim)}} sınayın, sonra {{ui:STEP (fasetli, mesh nüvəsi)}}, və {{ui:Kömək}} › {{ui:Problem barədə məlumat verin}} vasitəsilə bizə bildirin.
- {{ui:Süpürmə}}, {{ui:Loft}} və dəqiq nüvə tələb edən digər xüsusiyyətlər boz deyil: onlar klikləndikdə qalır, alət ipucları "hələ qurulmayıb (dəqiq nüvə tələb edir)" ilə bitir və klik edildikdə bunu status sətrində deyir. Bax [Hələ qurulmayanlar](topic:not-built-yet).
- {{ui:Qaralama}} boz olur: detal yalnız sahəsi olan şəkildə, eskiz açıq ikən deyil.
- {{ui:İxrac}} elementləri yığımda boz olur: yığımlar hələ ixrac olunmur. Bağlayın və ya ixrac etmək üçün detalı redaktə edin.

## Eskiz problemləri

### Eskiz əlaqə əlavə etməyə imkan vermir

"Bu seçim üçün əlaqə yoxdur. Bir və ya iki element seçin (Shift+klik əlavə edir)." Əlaqə fərqli seçim tələb edir. Hər birinin nə tələb etdiyini görmək üçün bax [Eskiz əlaqələri və ölçüləri](topic:sketch-relations).

### "Həddindən artıq təyin olunmuş: … hamısı ödənilə bilməz. Geri qaytarın və ya birini silin."

**Səbəb:** yeni əlaqə və ya ölçü mövcud olanlarla ziddiyyət təşkil edir. Eskiz hərəkət etməyib.

**Düzəliş:** {{key:Mod+Z}}, və ya sağ panelin siyahısında qırmızı elementlərdən birini silin (yanındakı **Sil** seçin).

### "Həddindən artıq təyin olunmuş: … artıq nəzərdə tutulub. Silin."

**Səbəb:** əlaqə heç nə əlavə etmir: digərləri onu artıq məcbur edir (məsələn, düzbucaqlının iki tərəfində Paralel, və ya artıq sabit olan ölçü). Bu versiyada idarə olunan ölçülər yoxdur.

**Düzəliş:** onu silin. Xüsusiyyət xəbərdarlıqla yenə də qurulur.

### "Bu elementləri birlikdə ölçmək olmaz."

Məsələn, nöqtə və dairə klik etdiniz. Bunun əvəzinə dairənin mərkəz nöqtəsinə ölçün.

### "Fillet üçün dəqiq iki xəttin birləşdiyi künc lazımdır." / "Bu radius bu xətlər üçün çox böyükdür."

Iki bərk xəttin künc nöqtəsinə dəqiq klik edin. Qısa xəttin icazə verdiyindən kiçik radius istifadə edin.

### Sürüklədikdə həndəsə geri qayıdır

Sürükləmə əlaqəni və ya ölçünü pozardı, buna görə PartCraft onu geri qoyur. Yalnız mavi (həll olunmamış) həndəsə hərəkət edə bilər.

### "Bu eskiz açıla bilmir: Extrude2 lazımdır, o isə uğursuzdur."

Eskiz qurulmamış xüsusiyyətin üzündədir. Əvvəlcə həmin xüsusiyyəti düzəldin, ya da onu aktivləşdirin, ya da irəli gedin.

## Xüsusiyyət problemləri

| Mesaj | Səbəb | Düzəliş |
|---|---|---|
| "Əvvəlcə eskiz yaradın: müstəvi seçin, Eskiz, qapalı profil çəkin, Çıxış." | Konturu olan istifadə olunmamış eskiz yoxdur və heç biri seçilməyib | Eskiz çəkin və ya tarixçədə istifadə ediləcək eskizi seçin |
| "Eskizdə qapalı profil yoxdur ki, ekstrüzyon edilsin." (və ya "fırlanmaq üçün") | Bərk xətlərin qapalı döngəsi yoxdur | Boşluqları bağlayın; konstruksiya xətlərini {{key:Q}} ilə geri çevirin |
| "Profil açıqdır: (x, y) nöqtəsindəki uc heç nəyə birləşmir." | Həmin nöqtədə boşluq | Eskizi açın, ucu qonşusunun üzərinə sürükləyin ki, yapışsın |
| "Profil (x, y)-də budaqlanır: ikidən çox uc orada görüşür." | Bir nöqtədə üç və ya daha çox xətt görüşür | Artıq xətti silin və ya konstruksiyaya çevirin |
| "Qapalı döngə ən azı üç tərəf və ya əyri tələb edir." | İki xətt irəli-geri | Döngəni yenidən çəkin |
| "Hamısını keç yalnız kəsiklər üçündür. Bürünc üçün dərinlik istifadə edin." | Bürünc "Hamısını keç" ilə təyin olunub | Sonu Kor və ya Orta müstəvi edin |
| "Eskizin bu tərəfində kəsiləcək heç nə yoxdur. Digər istiqaməti sınayın." | Kəsik materialdan kənara yönəlib | İstiqaməti tərsinə çevir qutusunu işarələyin |
| "Hələ kəsiləcək heç nə yoxdur." / "Hələ deşiləcək heç nə yoxdur." | Bu xüsusiyyətdən əvvəl bərk cism yoxdur | Əvvəlcə bürünc yaradın, ya da xüsusiyyəti aşağı köçürün |
| "Fırlanmaq üçün eskizdə mərkəz xətti (konstruksiya xətti) çəkin." | Oxsuz fırlanma | Mərkəz xətti əlavə edin, ya da Ox-da xətt seçin |
| "Profil oxu keçir. Onu mərkəz xəttinin bir tərəfində saxlayın." | Profil oxun hər iki tərəfindədir | Profilin yarısını yenidən çəkin |
| "Deşiklərin olacağı yerlərə eskiz nöqtələri qoyun (Nöqtə aləti), sonra deşiyi yaradın." | Eskizdə sərbəst nöqtə yoxdur | Nöqtələr əlavə edin {{key:P}} ilə |
| "Qarşılıqlı deşik deşikdən geniş olmalıdır." | Qarşılıqlı deşiyin ⌀ diametrdən böyük deyil | Qarşılıqlı deşiyi genişləndirin |
| "Qarşılıqlı deşik kor deşikdən dayaz olmalıdır." | Qarşılıqlı deşik kor deşikdən dərindir | Onu dayazlaşdırın, ya da deşiyi dərinləşdirin |
| "Kopyalamaq üçün xüsusiyyətləri seçin." | Naxış və ya güzgü heç nə işarələnmədən | Xüsusiyyətlər altında kopyalanacaq xüsusiyyəti işarələyin |
| "Extrude2-də kopyalanacaq bərk cism yoxdur." | Kopyalanan xüsusiyyət uğursuz olub və ya söndürülüb | Düzəldin və ya aktivləşdirin |
| "Sketch3 lazımdır, o isə uğursuzdur." | Ondan asılı olan xüsusiyyət qurulmayıb | Adını çəkdiyi xüsusiyyəti düzəldin |
| "Üzərində olduğu üz itib (Extrude1 qurulmayıb)." | Eskizin üzü artıq yoxdur | Həmin xüsusiyyəti düzəldin, ya da eskizi silib yenidən çəkin |
| "Bundan sonra detaldan heç nə qalmayıb." | Kəsik bütün materialı çıxarıb | Kəsiyin ölçüsünü və istiqamətini yoxlayın |
| "Bərk cisim bunu qura bilmədi (…)." və ya "Bərk cisim bunu gövdə ilə birləşdirə bilmədi." | Nüvə həndəsəni rədd etdi | Geri qaytarın, ya da ölçüləri bir az dəyişin; dəqiq toxunan üzlər buna səbəb ola bilər |
| "Süpürmə: hələ qurulmayıb. Dəqiq nüvə tələb edir, PartCraft-ın bu versiyasında isə belə nüvə yoxdur." (həmçinin Loft, Qabırğa və digərləri) | Əvvəlki versiyada yaradılmış, yalnız dəqiq nüvənin qura biləcəyi xüsusiyyət. Tarixçədə qalır və dəyişmədən geri saxlanılır | Söndürün və ya silin; nə etmək lazım olduğunu görmək üçün bax [Hələ qurulmayanlar](topic:not-built-yet) |
| "5 mm yumru burada yerləşmir (…)." / "2 mm faska …" | Ölçü kənara yaxın üz üçün çox böyükdür, ya da künc qarışdırıla bilməz | Kiçik ölçü, ya da hər xüsusiyyətdə az kənar |
| "Fillet: bu versiyada yalnız iki düz üz arasında düz kənarlar (mesh nüvəsi qurur). Əyri kənarları eskizdə yumrulaşdırın və ya faskalayın." (həmçinin Faska) | Seçilmiş kənar yumrudur, məsələn deşik kənarı, ya da əyri üzdədir | {{ui:Kənarları seçin}} və onu silin; həmin küncü əvəzinə eskizdə yumrulaşdırın və ya faskalayın |
| "Radiusu kənar boyu dəyişən fillet: hələ qurulmayıb (dəqiq nüvə tələb edir). Ona bir radius verin." | **Dəyişən radius** işarələnib | Işarəni çıxarın və bir radius verin |
| "Mesh nüvəsi ilə fillet: yumru kənarlar birləşən yerdə bucaqlanır, yumrulanmır." (⚠, xəbərdarlıq) | Seçilmiş kənarlar künc yaradır; yumrular orada kəskin qırışıqda görüşür | Düzəltmək lazım deyil: detal qurulub. Qırışıq vacibdirsə, daha az kənarı fillet edin |
| "Yumrulaşdırdığı kənar itib: Extrude1 və Cut2 arasındakı kənar." | Əvvəlki dəyişiklik kənarı silib | {{ui:Kənarları seçin}}, qırmızı kənarı çıxarın, yenisini seçin |
| "Kənarları görünüşdə seçin, sonra onları əlavə edin." | Fillet və ya faskanın kənarı yoxdur | {{ui:Kənarları seçin}} |
| "Silinəcək üzləri seçin (açıq), sonra qabıq edin." | Qabığın açıq üzü yoxdur | {{ui:Üzləri seçin}} |
| "Qabıq bu qalınlıqla düzəldilə bilməz (…)." | Divar detalın nazik hissəsindən və ya fillet radiusundan qalındır | Daha nazik divar, ya da böyük filletlər |
| "Qabıq: bu versiyada yalnız düz üzləri açır (mesh nüvəsi qurur)." | Açılan üz əyridir | {{ui:Üzləri seçin}} və onu silin; yalnız düz üzləri açın |
| "Qaralama: bu versiyada yalnız düz üzlər (mesh nüvəsi onu qurur)." | Qaralanan üz silindr, konus və ya sərbəst forma üzüdür | Onu silin; yalnız düz üzləri qaralayın |
| "Açdığı üz itib (…)." | Əvvəlki dəyişiklik üzü silib | {{ui:Üzləri seçin}} yenidən |
| "Fillet1 gövdənin kənarlarını və ya divarlarını dəyişir; kopyalana bilməz. …" | Naxış və ya güzgü fillet, faska və ya qabığı kopyalayır | İşarəni çıxarın; əvvəlcə kəsikləri naxışlayın, sonra fillet edin |
| "Bu, yalnız dəqiq nüvənin tapa biləcəyi üzdə oturur: bu versiyada hələ qurulmayıb." | Mesh nüvəsinin tapa bilmədiyi üzdə eskiz, məsələn əvvəlki versiyada yaradılan | Əsas müstəvidə və ya ekstrüziyanın düz üzündə eskiz çəkin və ölçülərlə yerləşdirin |
| "Bu, bərk cismin yalnız dəqiq nüvənin tapa biləcəyi üzündən və ya kənarından istifadə edir: bu versiyada hələ qurulmayıb." | Bərk cismin üzündə və ya kənarında köməkçi müstəvi, ox və ya nöqtə | Əsas müstəvilərdən, eskiz nöqtələrindən və ya koordinatlardan yaradın |
| "Ekstrüziya üzə, növbəti üzə və ya təpəyə qədər: hələ qurulmayıb (dəqiq nüvə tələb edir)." / "Konusluq: hələ qurulmayıb (dəqiq nüvə tələb edir)." | Yalnız dəqiq nüvənin qura biləcəyi son şərt və ya konusluq | Kor və ya Orta müstəvi dərinliyi istifadə edin, ölçün; Konusluğu 0-da saxlayın |

## Seçim problemləri

- "Bu üz əyridir. Eskiz üçün düz üz və ya müstəvi seçin." Eskizlər düz üz tələb edir. Əsas müstəvidə eskiz çəkin və onu ölçülərlə yerləşdirin.
- Üzdə "Seçildiyi yerdə sabit" yazılıb: o, eskiz kənarı ilə yaradılmayıb (məsələn, naxış nüsxəsinin üzü), buna görə onun üzərindəki eskiz detal dəyişdikdə yerində qalır.
- Kənarlara çətin toxunulur: yaxınlaşdırın. Göstərici tam üzərində olduqda kənar yanındakı üzdən üstündür.

## Fayl problemləri

| Mesaj | Düzəliş |
|---|---|
| 'PartCraft öz .partcraft.json fayllarını, SolidWorks üçün CadCraft makrosundan ixrac olunan faylları (.cadcraft-sw.json) və STEP fayllarını açır. "bracket.igs" bunlardan heç biri deyil.' | Yalnız bu fayllar tanınır (və STL, OBJ və 3MF meshləri və `.3dm` faylları) |
| '"part.stp" STEP faylı deyil (ISO-10303-21 ilə başlamır).' | Fayl STEP mətni deyil |
| "Bu STEP faylı burada idxal üçün çox böyükdür (60 MB-dən çox)." | Mənbədə sadələşdirin |
| "Bu fayl PartCraft detalı üçün çox böyükdür." öz saxladığınız detalda | Əvvəlki versiyada idxal edilmiş böyük STEP bərk cismi detal faylını 50 MB-dan çox etdi. Onsuz köhnə nüsxədən istifadə edin |
| "Bu fayl PartCraft detalı üçün çox böyükdür." | Fayl 50 MB-dan böyükdür; PartCraft faylı deyil |
| "Bu PartCraft faylı deyil (JSON deyil)." / "Bu PartCraft faylı deyil." | Fayl zədəlidir və ya başqa proqramındır |
| "Bu fayl daha yeni PartCraft tərəfindən saxlanılıb (fayl versiyası …); bu versiya … oxunur" | Daha yeni PartCraft-da açın |
| "Extrude2: dərinlik səhvdir." (və ya başqa dəyər) | Fayl əl ilə dəyişdirilib və ya zədələnib. Köhnə nüsxədən istifadə edin |
| Yığımda Daxil et deyir "Part1.partcraft.json-un bərk cismi yoxdur." | Detal faylında bərk cisim yoxdur. Açın, bərk cisim qurun, saxlayın və yenidən daxil edin |

**Saxladığım fayl gözlədiyim yerdə deyil.** Saxlama yükləmədir: brauzerin yükləmələr qovluğuna baxın, ya da brauzerin alətlər panelindən yükləmələr siyahısını açın. Bax [Fayllarım haradadır](common:your-files).

**Detalı açdım, lakin yığım hələ ekrandadır.** Detal yığımın arxasında yüklənib. Yığımı bağlamaq və detalı görmək üçün {{ui:Bağla}} seçin. Detal fayllarını açmadan əvvəl yığımları bağlayın.

## Çertyoj problemləri

| Mesaj | Düzəliş |
|---|---|
| "Əvvəlcə bərk cismi qurun, sonra onun çertyojunu yaradın." | Əvvəlcə detalı qurun |
| "Vərəqdə yer yoxdur: detal üçün. Detalı kiçildin və ya görünüşü buraxın." | Kiçik **Detal radiusu** və ya **Detal miqyası**, ya da kəsiyi silin |
| "Detal ön, üst, sağ və ya kəsik görünüşündən götürülür." | Həmin görünüşlərdən birinə klik edin |
| "Görünüşlərdən birinə klik edin." | Klik boş vərəqə olub |
| "Mövqe üçün ən azı bir baza istinadı lazımdır." və digər çərçivə mesajları | Panelin istədiyi baza istinadlarını təyin edin və ya başqa xüsusiyyət seçin |
| "Çertyoj görünüşləri yaradıla bilmədi: …" | Son dəyişikliyi geri qaytarın. Təkrarlanırsa, saxlayın, səhifəni yenidən yükləyin və detalı yenidən açın |

## Yığım problemləri

| Mesaj | Düzəliş |
|---|---|
| "Əvvəlcə bərk cismi qurun, sonra onu yığıma qoyun." | Detalın hələ bərk cismi yoxdur |
| "Birləşmə üçün əvvəlcə ikinci detal əlavə edin (Nüsxə əlavə et, Daxil et, və ya Redaktə › Ikiləşdir)." | Birləşmə iki detal tələb edir |
| "Fərqli detalda üz seçin." | Birləşmənin hər iki üzü fərqli detallarda olmalıdır |
| "Bu üz əyridir. Düz üz seçin …" | Birləşmələr düz üzlərdən başlayır. Deşik və ya fırlanma oxu üçün sonra **Mərkəzləşdir** istifadə edin |
| "Bracket2 zəmində duran detala birləşmir, buna görə yerində qalır." | Ondan yerləşdirilmiş detala birləşmə əlavə edin |
| "Revolute3 bağlana bilməyən döngə bağlayır: 2.000 mm səhvdir. Döngənin birləşmələrinin üzlərini, ofsetlərini və hədlərini yoxlayın." | Detallar hamısı birləşə bilmir: uzunluqları, hər birləşmənin istifadə etdiyi üzləri, ofsetləri (üz-üzə yığılan detallar dərinlikdə uyğun olmalıdır) və hədləri yoxlayın; ya da döngənin bir birləşməsini silin |
| "Bu birləşmənin istifadə etdiyi üz Bracket-dən itib." / "Bu birləşmənin istifadə etdiyi ox Bracket-dən itib." | Detal dəyişdirilib. Birləşməni silin və yenidən yaradın |
| "Ox üz boyunca gedir, buna görə birləşmənin mərkəzini təyin edə bilmir." | Üzü kəsən ox seçin, ya da "Üzün öz başlanğıcı" |
| "Yığımda ən azı bir detal qalır. Əvəzində onu bağlayın." | {{ui:Bağla}} istifadə edin |

**Detallar birləşib, lakin səhv yerdədir.** Birləşmənin hər iki tərəfi üçün **Mərkəzləşdir** təyin edin: düzlənməli olan deşiklərə və ya fırlanma oxlarına, sonra **Bucaq (°)** və **Ofset (mm)** tənzimləyin.

## Yavaşdır

- Modelləşdirərkən **Əyrilər** parametrini Normal və ya Kobud edin; ixrac etməzdən əvvəl Incə-yə keçin.
- Böyük naxış sayları (yüzlərlə nüsxə) hər dəyişiklikdə yenidən qurulmağa vaxt aparır. Digər xüsusiyyətlər üzərində işləyərkən naxışı söndürün.
- Toqquşma və hərəkət yoxlaması hər detal cütünü müqayisə edir; böyük yığımlar daha uzun çəkir.
- Digər ağır sekmələri bağlayın. PartCraft öz kompüterinizin prosessorunda və qrafikasında işləyir.

## Hələ də ilişib qalmısınız

Əvvəlcə faylınızı saxlayın ({{key:Mod+S}}), sonra səhifəni yenidən yükləyin və faylı yenidən açın. Xüsusiyyət hələ də uğursuzdursa, onu seçin, mesajını oxuyun və son yaxşı vəziyyətə qayıtmaq üçün {{key:Mod+Z}} sınayın.
