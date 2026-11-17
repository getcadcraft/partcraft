---
title: Başqa parametrik modelləşdiricidən gələnlər
summary: Masaüstü parametrik detal modelləşdiricilərinin vərdişlərinin PartCraft-a necə uyğunlaşdığı və ilk saatda təcrübəli istifadəçiləri çaşdıran fərqlər.
keywords: keçid, köçürmə, tanış, xüsusiyyət meneceri, dizayn ağacı, ağıllı ölçü, boss ekstruziya, kəsik ekstruziya, deşik sihirbazı, birləşmələr, müdaxilənin aşkarlanması, geri qaytarma çubuğu, xassə paneli, siçan, fərqlər
from: fbacaee1
---

Əgər detalları SolidWorks-də layihələndirirsinizsə, PartCraft-ın ideyalarının çoxu tanış olacaq: Ön, Üst və Sağ müstəvilərdə eskizlər, əlaqələr və ağıllı ölçülər, geri qaytarma çubuğu olan xüsusiyyət tarixçəsi və birləşmələrlə yerləşdirilmiş yığımlar. Onlara çatma üsulu bəzi yerlərdə fərqlidir və bu ilk versiya daha az edir. Bu səhifə vərdişlərinizi uyğunlaşdırır və sürprizləri sadalayır.

## Vərdişlər, uyğunlaşdırılmış

| Siz bunlara öyrəşmisiniz | PartCraft-da |
|---|---|
| Soldakı dizayn ağacı | Soldakı tarixçə: əvvəl müstəvilər, sonra xüsusiyyətlər, eskizlər onları istifadə edən xüsusiyyətin altında girintili |
| Ön, Üst və Sağ müstəvilər | Eyni üç, başlanğıc nöqtədən keçir. Ön XY müstəvisidir, Üst XZ, Sağ YZ; Y yuxarı istiqamətdədir |
| Müstəvi və ya üzdə eskiz, sonra təsdiq küncü ilə çıxış | Seçilmiş müstəvi və ya düz üzdə {{ui:Eskiz}} ({{key:S}}); bağlanana qədər {{ui:Çıxış}} və ya {{key:Esc}} |
| Ağıllı ölçü | {{ui:Ölçü}} ({{key:D}}). Bir və ya iki element seçin, sonra rəqəmin yerini. Onu harada yerləşdirdiyiniz üfüqi, şaquli və ya düzləşdirilmiş ölçünü seçir |
| Xassə panelində əlaqə əlavə et | Elementləri seçin, sonra sağ paneldəki əlaqə düymələri ilə (Üst-üstə düşmə, Üfüqi, Paralel, Toxunan, Bərabər və s.) |
| Eskiz zamanı avtomatik əlaqələr | Yapışdırmalar üst-üstə düşmə, nöqtə-əyri üzərində, üfüqi və şaquli əlaqələr əlavə edir |
| Mavi / qara / qırmızı eskiz rəngləri | Eyni fikir: mavi natamam təyin olunub, qara tam təyin olunub, qırmızı artıq təyin olunub. Çip qalan sərbəstlik dərəcələrini göstərir |
| Fırlatma üçün mərkəz xətti | {{ui:Mərkəz xətti}} ({{key:N}}); {{ui:Fırlatma}} başqa ox seçməsəniz birinci mərkəz xəttindən istifadə edir |
| Eskiz yuvarlaqlaşdırması | Eskizdə {{ui:Yuvarlaqlaşdırma}} ({{key:F}}): küncə klik edin, radiusu yazın |
| Köməkçi həndəsə açarı | {{ui:Köməkçi}} ({{key:Q}}) |
| Ekstruziya ilə çıxıntı | {{ui:Ekstruziya}}: Kor, Orta müstəvi, Üzə qədər / növbəti / təpəyə qədər, üzdən ofset, ikinci istiqamət, konusluq, bir kontur (Bölgələri seç) |
| Ekstruziya ilə kəsik | {{ui:Kəs}}: Hamısını keçən kimi başlayır; cib üçün Kor-a keçin |
| Fırladılmış çıxıntı / kəsik | {{ui:Fırlatma}} / {{ui:Daha çox}} › {{ui:Fırladılmış kəsik}} |
| İstinad müstəvisi / ox / nöqtə | {{ui:Daha çox}} › {{ui:Müstəvi}}, {{ui:Ox}}, {{ui:Nöqtə}} (bax: [İstinad müstəviləri, oxları və nöqtələri](topic:reference-geometry)) |
| Süpürülmüş / loftlu çıxıntı və ya kəsik, qaralama | Düz üzlərdə {{ui:Daha çox}} › {{ui:Qaralama}} (bax: [Süpürmə, loft və qaralama](topic:sweep-loft-draft)). {{ui:Süpürmə}} və {{ui:Loft}} bu versiyada hələ qurulmayıb (dəqiq nüvə tələb edirlər) |
| Deşik sihirbazı | {{ui:Deşik}} hər sərbəst eskiz nöqtəsində: sadə, genişləndirilmiş, konusvari (90° / 82°) və ya dişlənmiş ISO metrik M2–M24, keçən və ya kor |
| Xətti / dairəvi massiv, güzgü | {{ui:Xətti}}, {{ui:Dairəvi}}, {{ui:Güzgü}} (xüsusiyyətlər və ya bütün cisim) |
| Kənarlarda yuvarlaqlaşdırma və faska | {{ui:Yuvarlaqlaşdırma}} / {{ui:Faska}}: kənara klik edin, daha çoxu üçün {{key:Shift}}+klik, sonra düymə. Bir radius; bərabər, iki məsafəli və ya məsafə-bucaqlı faska. Bu versiyada yalnız iki düz üz arasındakı düz kənarlar, və küncdə birləşən yuvarlaqlar bucaqla kəsilir. Əyri kənarları eskizdə yuvarlatın və ya skosla ({{ui:Yuvarlaqlaşdırma}} eskizdə, {{key:F}}) |
| Qabıq | {{ui:Qabıq}}: açmaq üçün düz üzlərə klik edin, sonra düymə. Bir divar qalınlığı |
| STEP faylı açın | {{ui:Aç}}: üçbucaqlar kimi oxunur, üzərində qurulacaq bərk cisim ([STEP faylını açın](topic:import-step)) |
| Xüsusiyyəti redaktə et, sonra OK | Xüsusiyyətə klik edin; sağda rəqəmləri dəyişin; yazdıqca yenidən qurulur. OK də yoxdur, Ləğv et də yoxdur: {{key:Mod+Z}} istifadə edin |
| Eskizi redaktə et | Tarixçədə eskizə iki dəfə klik edin |
| Yenidən qurma | Hər dəyişiklikdən sonra avtomatik. Yenidən qurma düyməsi yoxdur |
| Söndürmə / yenidən qurma | Sağ paneldə {{ui:Söndür}} / {{ui:Yenidən qur}} |
| Geri qaytarma çubuğunu sürükləyin | Xüsusiyyətdə {{ui:Burada geri qaytar}}; qayıtmaq üçün "Geri qaytarma çubuğu · irəli" üzərinə klik edin |
| Ağacda xüsusiyyəti sürükləyib yenidən sıralayın | {{ui:Yuxarı köçür}} / {{ui:Aşağı köçür}} və ya {{key:Alt+Up}} / {{key:Alt+Down}}; asılılığı pozacaqsa, səbəbi ilə rədd edilir |
| Modeldə iki dəfə klik edərək ölçüləri redaktə et | Xüsusiyyəti seçin: onun eskizinin ölçüləri sağ paneldə siyahıya salınır |
| Birləşmələr: üst-üstə düşmə, konsentrik, məsafə, bucaq | {{ui:Birləşmə}} ({{key:J}}): hər detalda düz üz seçin; birləşmə onları üz-üzə qoyur. Oxda **Mərkəzləşdir** konsentrik kimi işləyir; **Ofset** məsafə kimi; **Bucaq** bucaq kimi |
| Sabit komponent | Birinci detal bərkidilmişdir; {{ui:Bərkidilmiş detal et}} onu dəyişir |
| Komponent daxil et | {{ui:Surət əlavə et}} və ya {{ui:Surət}} (başqa surət) və ya {{ui:Daxil et}} (detal faylından) |
| Yığımda detalı redaktə et | {{ui:Detalı redaktə et}}, sonra {{ui:Geri}} |
| Müdaxilənin aşkarlanması | {{ui:Toqquşma}} |
| Hərəkəti görmək üçün komponenti köçürmək | Fırlanan və ya sürüşən birləşmənin bucaq və ya ofset sürgüsünü sürükləyin; {{ui:Hərəkət zamanı toqquşmaları yoxla}} onu keçirir. Birləşməsi olmayan detal: **Əl ilə köçür** (sürükləmək üçün oxlar və ya yazılmış qiymətlər) |
| Ölçmə / yoxlama | {{ui:Görünüşlər}}, sonra {{ui:Ölçmə}} ({{key:M}}): məsafələr, bucaqlar, radiuslar, sahələr; {{ui:Kütlə xassələri}} |
| Açılmış görünüş, BOM | Heç nə seçilmədikdə yığımda: sağ paneldə **Açılmış görünüşlər** və **Material siyahısı** |
| Kütlə xassələri | **Detal** qutusu: üzlü cismin həcmi, səth sahəsi, ölçüsü (dairəvi detallarda bir az aşağı). Kütlə yoxdur: hələ materiallar yoxdur |
| Saxla, STEP kimi saxla | {{ui:Saxla}} `.partcraft.json` yükləyir; {{ui:İxrac}} STL, 3MF, dəqiq STEP (AP242 və ya AP214), üzlü STEP, DXF və PDF çertyoju var |
| Detaldan çertyoj yaradın | {{ui:Çertyoj}}: üç görünüş, izometrik, bir kəsik, bir detal, bazalar, xüsusiyyət nəzarət çərçivələri və səth işarələri ilə avtomatik A3 vərəqi. Yalnız ümumi ölçülər verilir |
| Fırlatmaq üçün orta düymə ilə sürükləmə | Burada **sol sürükləmə** fırladır. Orta və ya sağ sürükləmə sürüşdürür. Təkər göstəricidə yaxınlaşdırır |
| Görünüş istiqaməti, Normal to | {{ui:Görünüşlər}} menyusu; seçilmiş üz, müstəvi və ya eskiz üçün {{ui:Üzə normal}} |
| Ekrana sığdır (F) | {{key:F}}, və ya {{ui:Sığdır}} (eskizdə {{key:F}} Yuvarlaqlaşdırma alətidir) |
| Sağ klik menyuları | Yoxdur. Sağ sürükləmə sürüşdürür; eskizdə sağ klik xətt zəncirini bitirir |

:::tip
Əgər əlləriniz SolidWorks-ü tanıyırsa, {{ui:Parametrlər}} › {{ui:PartCraft}} › {{ui:Menyular, düymələr və siçan}} bölməsində {{ui:Xüsusiyyət ağacı}} menyu üslubunu seçin: Xüsusiyyətlər, Eskiz, Səthlər, Qiymətləndirmə, Çertyoj, Yığım və Görünüş nişanlarından ibarət lent, orta düymə ətrafında fırladır, {{key:Shift}} və orta düymə sürüşdürür, sol düymə yalnız seçir. Bax: [Menyular, düymələr və siçan](topic:menus-keys-and-mouse).
:::

## İnsanları çaşdıran fərqlər

**Bütün eskiz profildir.** Ekstruziya və Fırlatma eskizdəki hər qapalı döngəni istifadə edir. Xüsusiyyət üçün eskizin bir bölgəsini və ya bir konturunu seçə bilməzsiniz. Hər xüsusiyyət üçün bir eskiz istifadə edin.

**Xüsusiyyət hansı eskizi götürür.** Xüsusiyyət indicə bağladığınız və ya tarixçədə seçilmiş eskizi istifadə edir. Heç nə seçilmədikdə, hələ heç bir xüsusiyyətin istifadə etmədiyi ən yeni eskizi götürür. Səhv götürürsə, düzgün eskizi seçin və xüsusiyyəti yenidən seçin.

**Dəyişikliklər yazdıqca tətbiq olunur.** OK və Ləğv et olan xüsusiyyət dialoqu yoxdur. Hər rəqəm dərhal yenidən qurulur və geri qaytarmaq üçün {{key:Mod+Z}} var. Geri qaytarma siyahısı eskiz redaktələrini, xüsusiyyətləri və parametrləri eyni şəkildə əhatə edir.

**Artıq təyin olunma heç vaxt səssiz qalmağa icazə verilmir.** İdarə olunan (istinad) ölçülər yoxdur. Digər əlaqələrin artıq sabitlədiyi ölçü artıq təyin olunmuş kimi bildirilir ("artıq nəzərdə tutulub. Onu silin."). Ziddiyyətli ölçü həndəsəyə toxunmur və qırmızı olur. Birini silin və ya geri qaytarın.

**Süpürmələr və loftlar hələ qurulmayıb; yuvarlaqlaşdırmaların, faskaların, qabıqların və qaralamaların məhdudiyyətləri var.** PartCraft-ın bu versiyası hər detalı mesh nüvəsi ilə qurur; status çipi həmişə "Mesh nüvəsi" yazır. Yuvarlaqlaşdırmalar və faskalar iki düz üz arasındakı düz kənarlarda işləyir, küncdə birləşən yuvarlaqlar yumşaldılmır, bucaqla kəsilir. Qabıq açılır, qaralamalar yalnız düz üzlərdə meyl edir. Dəqiq nüvə tələb edən xüsusiyyətlər klikləniləndir, lakin seçildikdə "hələ qurulmayıb" deyir. Bax: [Mesh nüvəsi](topic:solid-kernels) və [Hələ qurulmayanlar](topic:not-built-yet).

**Adı Yuvarlaqlaşdırma olan iki düymə.** Eskizdə {{ui:Yuvarlaqlaşdırma}} ({{key:F}}) eskiz küncünü yumşaldır. Detalda, Xüsusiyyətlər qrupunda {{ui:Yuvarlaqlaşdırma}} bərk kənarları yumşaldır (bu versiyada iki düz üz arasındakı düz kənarlar). Bu versiyada süpürmə və ya loft yoxdur: bax: [Hələ qurulmayanlar](topic:not-built-yet).

**Deşiklər sərbəst nöqtələr tələb edir.** {{ui:Deşik}} Nöqtə aləti ilə yaradılmış nöqtələrdə deşir. Çevrə mərkəzləri və xətt uclarının heç bir təsiri yoxdur.

**Hamısını keçən yalnız kəsiklər üçündür.** Çıxıntıya dərinlik lazımdır. Hələ "təpəyə / səthə / növbətiyə qədər" son şərtləri yoxdur.

**Bərk cisim üzlüdür.** Mesh nüvəsi dairəvi üzləri düz üzlərdən qurur, ona görə görünüş, həcmlər, STL və 3MF ixracları bunlardan ibarətdir: detalın panelində **Əyrilər** onları daha incə edir. Dəqiq STEP ixracı belə deyil: o, dairəvi üzləri öz həqiqi səthlərində yazır.

**Yalnız millimetrlər.** Hələ düym parametri yoxdur. Düym ölçülərini yazarkən 25.4-ə vurun.

**Y yuxarıdır.** Ön müstəvi sizə baxır və Üst detala yuxarıdan baxır, gözlədiyiniz kimi, lakin dünyanın yuxarı oxu Y-dir. STL, 3MF və dəqiq STEP ixracları Z yuxarı olacaq şəkildə çevrilir; üzlü STEP Y yuxarı saxlayır.

**Birləşmələr həndəsə cütləri deyil, üzlərdir.** Birləşmə həmişə üz-üzə qoyulmuş iki düz üzdən başlayır. Deşikdəki pin üçün deşiyin ətrafındakı düz üzü və pinin çıxıntısını seçin, sonra **Mərkəzləşdir**i deşiyin oxuna və pinin fırlatma oxuna təyin edin. Birləşmələrə çatmayan detallar daxil edildikləri yerdə qalır; onları sürükləyə bilməzsiniz. Döngədəki birləşmələr həll olunmur.

**Saxlama yükləmədir.** Üzərinə yazdığınız fayl yoxdur. Hər saxlama yükləmələr qovluğunuzda yeni fayldır. Əvvəlcə detalı adlandırın və fayllarınızı layihə qovluğunda saxlayın.

**Kontekst menyuları və komanda meneceri nişanları yoxdur.** Hər şey alətlər panelində və sağ paneldədir, alətlər paneli etdiyiniz işə görə dəyişir: eskiz alətləri yalnız eskizdə, yığım alətləri yalnız yığımda görünür.

**Eskizdə düymələr tək hərflərdir.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} və {{key:S}} heç bir modifikator olmadan alət seçir. Bax: [Düymələr və siçan](topic:keyboard).
