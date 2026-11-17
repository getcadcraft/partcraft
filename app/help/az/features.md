---
title: Xüsusiyyətlər və onların seçimləri
summary: Alətlər panelindəki hər xüsusiyyət öz parametrləri, defoltları və limitləri ilə, ekstruziyadan filetə, qabığa və idxal edilmiş STEP bərk cisimlərinə qədər; bütün xüsusiyyətlərin ortaq əməliyyatları və hissə parametrləri.
keywords: xüsusiyyətlər, hələ qurulmayıb, ekstruziya, kəs, fırlatma, fırladılmış kəsik, deşik, genişləndirilmiş deşik, xətti naxış, dairəvi naxış, güzgü, fillet, faska, qabıq, idxal, seçimlər, defoltlar, parametrlər, həll, əyrilər, fasetlər, söndürmək, geri qaytarma
from: ab3a598e
---

Xüsusiyyətlər tarixçədə yaradıldıqları sıra ilə göstərilir və yuxarıdan aşağıya doğru yenidən qurulur. Hər biri növünə görə nömrə ilə adlanır: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft hər xüsusiyyəti mesh nüvəsi ilə qurur. Fillet və Chamfer düz üzlər arasındakı düz kənarlarda işləyir, Shell isə düz üzləri açır. İdxal edilmiş bərk cisimlər dəqiq nüvə tələb edir, bu versiya isə onu təmin etmir: onlar hələ qurulmayıb və aşağıdakı bölmə onları əvvəlki versiyada yaradılmış detal kimi təsvir edir. Bax [Mesh nüvəsi](topic:solid-kernels) və [Hələ qurulmamış olanlar](topic:not-built-yet).

## Eskiz

| Parametr | Qeyd |
|---|---|
| Müstəvi | Ön, Üst və ya Sağ müstəvi, və ya düz üz. Göstərilir, dəyişdirilmir: eskizi köçürmək üçün yenisini yaradın |
| Vəziyyət | Tam təyin olunmuş, Qismən təyin olunmuş (sərbəstlik dərəcələri ilə), Həddən artıq təyin olunmuş və ya Boş |
| Həndəsə, Əlaqələr | Neçə əyri, nöqtə və əlaqə olduğu |
| İdarə edən ölçülər | Eskizin hər ölçüsü, redaktə edilə bilən |

Düymələr: {{ui:Eskizi redaktə et}}, {{ui:DXF kimi ixrac et}}.

## Ekstruziya və Kəs

{{ui:Ekstruziya}} və {{ui:Kəs}} eyni xüsusiyyəti yaradır, fərqli başlanğıc parametrləri ilə.

| Parametr | Seçimlər | Ekstruziya başlayır | Kəs başlayır |
|---|---|---|---|
| Əməliyyat | Gövdə (material əlavə et), Kəs (material çıxar), Kəsişmə (üst-üstə düşəni saxla), Yeni gövdə (bu versiyada hələ qurulmayıb) | Gövdə | Kəs |
| Son | Kor (bir dərinlik), Orta müstəvi (hər iki tərəfə), Hamısından keçir | Kor | Hamısından keçir |
| Dərinlik (mm) | 0-dan böyük, 1,000,000-a qədər | 10 | 10 |
| Əks istiqamət | Söndürülüb / Açıq | Söndürülüb | Söndürülüb |

- Profil: eskizdəki bərk xətlərin, dairələrin və qövslərin hər bağlı döngəsi. Döngələrin içindəki döngələr deşiklərdir.
- Hamısından keçir yalnız kəsmələr üçün işləyir. Seçilmiş tərəfdə hissənin içindən tam keçir.
- Kəsmə materialın içinə, eskiz müstəvisinin xarici tərəfinin əksinə gedir; Əks istiqaməti çevirir.

## Fırlatma və fırladılmış kəsik

| Parametr | Seçimlər | Defolt |
|---|---|---|
| Əməliyyat | Gövdə, Kəs | Gövdə ({{ui:Fırlatma}}), Kəs ({{ui:Daha çox}} › {{ui:Fırladılmış kəsik}}) |
| Bucaq (°) | 0-dan böyük, 360-a qədər | 360 |
| Ox | Eskizin birinci mərkəz xətti, eskizin istənilən xətti və ya mərkəz xətti, və ya eskizin müstəvisində yatan ox xüsusiyyəti | Birinci mərkəz xətti |

- Profil oxun bir tərəfində qalmalıdır. Oxa toxuna bilər.
- Fırlatmanın oxu Dairəvi naxışlar və yığım birləşmələri tərəfindən istifadə edilə bilər.

## Deşik

| Parametr | Seçimlər | Defolt |
|---|---|---|
| Növ | Sadə, Genişləndirilmiş | Sadə |
| Diametr (mm) | 0-dan böyük | 6 |
| Hamısından keçir | Açıq / söndürülmüş | Açıq |
| Dərinlik (mm) | Hamısından keçir söndürülmüş olduqda | 10 |
| Genişləndirilmiş ⌀ | Deşikdən geniş | 11 |
| Genişləndirilmiş dərinlik | Kor deşikdən dayaz | 6 |
| Əks istiqamət | Söndürülüb / Açıq | Söndürülüb |

- Eskizin hər sərbəst nöqtəsində bir deşik (Nöqtə aləti ilə edilən nöqtələr). Panel neçə olduğunu göstərir.
- Deşiklər eskiz müstəvisinə perpendikulyar, materialın içinə qazılır.
- Hər deşiyin oxu yığım birləşmələri üçün istifadə oluna bilər ("Hole1, deşik 2").

## Xətti naxış

| Parametr | Seçimlər | Defolt |
|---|---|---|
| Kopyalanacaq xüsusiyyətlər | Yuxarıdakı istənilən bərk xüsusiyyət | Seçilmiş xüsusiyyət, yoxsa son bərk xüsusiyyət |
| İstiqamət | X oxu, Y oxu, Z oxu; əvvəlki eskizin xətti; fırlatmanın oxu; seçilmiş kənar | X oxu (və ya əlavə edərkən seçilmiş kənar) |
| Məsafə (mm) | İstənilən ədəd | 20 |
| Say | 1-dən 1000-ə qədər, orijinal daxil olmaqla | 3 |
| Əks istiqamət | Söndürülüb / Açıq | Söndürülüb |

## Dairəvi naxış

| Parametr | Seçimlər | Defolt |
|---|---|---|
| Kopyalanacaq xüsusiyyətlər | Xətti naxışdakı kimi | Xətti naxışdakı kimi |
| Ox | Yuxarıdakı İstiqamət kimi | Son fırlatmanın oxu, yoxsa Y oxu (və ya seçilmiş kənar) |
| Bucaq (°) | 0-dan böyük, 360-a qədər. 360 surətləri bərabər şəkildə ətrafa yayır; daha az isə onları bu bucaq üzrə yayır | 360 |
| Say | 1-dən 1000-ə qədər, orijinal daxil olmaqla | 6 |
| Əks istiqamət | Söndürülüb / Açıq | Söndürülüb |

## Güzgü

| Parametr | Seçimlər | Defolt |
|---|---|---|
| Güzgü | Bütün gövdə (indiyə qədər qurulduğu kimi) və ya seçilmiş xüsusiyyətlər | Seçilmiş xüsusiyyət, yoxsa bütün gövdə |
| Güzgü müstəvisi | Ön, Üst və ya Sağ müstəvi; düz üz | Sağ müstəvi, və ya əlavə edərkən seçilmiş düz üz |

## Fillet və Faska

Bu versiyada mesh nüvəsi onları iki düz üz arasındakı düz kənarlarda qurur (xarici və ya daxili künclər), bir radiusla. Dairəvi kənar üçün "Fillet: bu versiyada yalnız iki düz üz arasındakı düz kənarlar (mesh nüvəsi onları qurur). Eskizdə əyri kənarları yuvarlaqlaşdırın və ya əyin." mesajı çıxır; yuvarlaq kənarlar künclərdə birləşdikdə onlar kəsilir və xüsusiyyət xəbərdarlıq edir: "Mesh nüvəsi ilə fillet: yuvarlaq kənarlar birləşdikdə onlar kəsilir, qarışdırılmır." Faska növləri (bərabər məsafə, iki məsafə, məsafə və bucaq, **Tərəfləri çevir** ilə) hamısı işləyir. Bax [Yuvarlaqlaşdırma, əyma və boşaltma](topic:fillet-chamfer-shell).

| Parametr | Seçimlər | Defolt |
|---|---|---|
| Radius (mm) (Fillet) | 0-dan böyük | 2 |
| Məsafə (mm) (Faska) | 0-dan böyük, hər iki üzdə eyni | 1 |
| Kənarlar | Seçilmiş kənarlar, hər biri birləşdirdiyi iki üzlə siyahıda ("Extrude1 son üzü × Extrude1 yan tərəfi"), **Sil** ilə | Əlavə edərkən seçilmiş kənarlar |

- Düyməni seçməzdən əvvəl kənarları seçin ({{key:Shift}}+klik bir neçəsi üçün), və ya heç nə seçilmədən düyməni seçin və sonra kənarlara klikləyin.
- {{ui:Kənarları seçin}} (və ya xüsusiyyətə iki dəfə klikləyin) kənarları dəyişir.
- Kənarlar birləşdirdikləri iki üzlə yadda saxlanılır, buna görə yuxarıdakı ölçü dəyişiklikləri onları pozmur.

## Qabıq

Mesh nüvəsi onu qurur. Yalnız düz üzlər açıla bilər ("Qabıq: bu versiyada yalnız düz üzləri açır (mesh nüvəsi onu qurur)."); müxtəlif qalınlıqlı divarlar hələ qurulmayıb. Bax [Yuvarlaqlaşdırma, əyma və boşaltma](topic:fillet-chamfer-shell).

| Parametr | Seçimlər | Defolt |
|---|---|---|
| Divar (mm) | 0-dan böyük | 2 |
| Divarlar xaricə böyüyür (üzlər içəridə qalır) | Söndürülüb: divarlar içəriyə gedir. Açıq: divarlar xaricə gedir | Söndürülüb |
| Açıq üzlər | Çıxarılan üzlər, ən azı bir, **Sil** ilə | Əlavə edərkən seçilmiş üzlər |

{{ui:Üzləri seçin}} açıq üzləri dəyişir.

## İdxal edilmiş bərk cisim

STEP, STL, OBJ və ya 3MF faylı açmaqla yaradılır: öz tarixçəsi olmayan üçbucaqlardan ibarət bərk gövdə ([STEP faylını açın](topic:import-step), [STL, OBJ və ya 3MF açın](topic:open-meshes)). O, hansı fayldan gəldiyini və idxalın nəyi düzəltdiyini göstərir; **Fayldakı vahidlər**, **Faylda yuxarı** və **İstifadə məqsədi** redaktə oluna bilir. Dəqiq nüvəsi olan köhnə versiyanın idxal etdiyi STEP bərk cismi tarixçədə qurulmamış kimi qalır; onu üçbucaqlar kimi gətirmək üçün STEP faylını yenidən açın.

| Parametr | Seçimlər | Defolt |
|---|---|---|
| Faylda yuxarı | Z yuxarı (əksər CAD), Y yuxarı | Z yuxarı |

Naxışlar və güzgülər idxal edilmiş bərk cismi kopyalaya bilər, lakin fillet, faska və ya qabığı kopyalaya bilməz.

## Hər xüsusiyyətdə olanlar

Hər xüsusiyyətin panelinin altında:

| Düymə | Nə edir |
|---|---|
| {{ui:Söndür}} / {{ui:Yenidən qur}} | Onu söndürür və ya açır. Bunu tələb edən xüsusiyyətlər söndürülü olduqda qurulmur |
| {{ui:Burada geri qaytar}} | Yalnız bu xüsusiyyətin üstündəki xüsusiyyətləri qurur. Yeni xüsusiyyətlər geri qaytarma zolağına daxil olur |
| {{ui:Yuxarı köçür}} / {{ui:Aşağı köçür}} | Yenidən sıralayır, yalnız onun istifadə etdiyi heç nə aşağıda qalmayacaqsa. Əks halda səbəbi ilə boz olur |
| {{ui:Sil}} | Onu silir və (soruşduqdan sonra) ondan istifadə edən hər xüsusiyyəti |
| Ad | Adını dəyişir (60 simvola qədər) |

Eskizi olan xüsusiyyətlər həm də **Eskiz ölçülərini** siyahılayır, yerində redaktə edilə bilər.

## Tarixçədə vəziyyətlər

| Vəziyyət | Göstərilir | Mənası |
|---|---|---|
| Qurulub | Normal | Hər şey yaxşıdır |
| Xəbərdarlıq | ⚠ | Qurulub, amma yoxlanacaq bir şey var: "Həddən artıq təyin olunub: 1 əlaqə lazım deyil." və ya "Bundan sonra hissədən heç nə qalmır." |
| Xəta | ⚠ xəta, qırmızı | Qurula bilmədi; mesaj səbəbini deyir |
| Qurulmayıb | ⚠ qurulmayıb | Uğursuz olmuş, söndürülmüş və ya geri qaytarılmış xüsusiyyət tələb edir, və ya bu versiyada olmayan dəqiq nüvə tələb edir ("Süpürmə: hələ qurulmayıb. …") |
| Söndürülüb | söndürülüb | Söndürülüb |
| Geri qaytarılıb | boz, geri qaytarma zolağının altında | Siz irəli qaytarana qədər qurulmur |

## Hissə parametrləri

Heç nə seçilməyənə qədər boş yerə klikləyin. Sağ panel **Hissə**ni göstərir:

- **Ad**: hissənin adı, fayl adları və çertyoj ştampı üçün istifadə olunur (120 simvola qədər).
- **Curves** (Əyrilər): aşağıya bax.

### Əyrilərin həlli

Mesh nüvəsi bərk cismi özü düz fasetlərdən qurur, ona görə görünüş, STL, 3MF, fasetli STEP, həcm və çertyoj görünüşləri hamısı **Əyrilər** parametrinə tabedir: tam dövrədə neçə faset.

| Parametr | Dövrədə fasetlər | Dairəvi formanın həcmi |
|---|---|---|
| Kobud (dövrədə 32) | 32 | Həqiqi qiymətdən təxminən 0.64 % aşağı |
| Normal (dövrədə 64) | 64 | Təxminən 0.16 % aşağı (defolt) |
| İncə (dövrədə 128) | 128 | Təxminən 0.04 % aşağı |
| Çox incə (dövrədə 256) | 256 | Təxminən 0.01 % aşağı |

Daha incə əyrilər daha hamar ixraclar və görünüşlər, lakin daha yavaş yenidən qurma verir. Parametr hissə faylında saxlanılır.

## Hələ qurulmayıb

Dəyişən radiuslu filetlər, dairəvi kənarlarda filetlər və fasqalar, əyri üzləri açan qabıqlar, əyri üzlərdə draft, süpürmə, loft, qabırğa, dəqiq əyri üzləri olan STEP bərk cisimləri, yeni gövdələr, konusluqlar, üz və ya təpəyə "qədər" ekstruziya, və bərk cismin üzlərində və kənarlarında istinadlar dəqiq nüvə tələb edir, bu versiyada isə yoxdur. Həmçinin hələ qurulmayıb: dişli və konusvari genişləndirilmiş deşiklər. Bax [Hələ qurulmamış olanlar](topic:not-built-yet).
