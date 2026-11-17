---
title: PartCraft ekranı
summary: Hər çubuq və panelin turu: alət paneli və onun necə dəyişdiyi, tarixçə, hissə məlumatları, 3D görünüş, xüsusiyyətlər paneli və status sətri.
keywords: ekran, tərtibat, alət paneli, tarixçə, element ağacı, xüsusiyyətlər, panel, status sətri, interfeys, ui, tur, tam ekran
from: 5b5bb843
---

Ekranda beş hissə var: yuxarıda alət paneli, solda tarixçə, ortada 3D görünüş, sağda xüsusiyyətlər paneli və aşağıda status sətri. Hamısının üstündə CadCraft tətbiq çubuğu yerləşir.

## Tətbiq çubuğu

Ən yuxarıdakı nazik çubuq PartCraft-ın özünə deyil, CadCraft saytına aiddir. Tətbiqin adını və harada işlədiyini, versiya menyusunu, **PartCraft haqqında**-nı, ekran rejimi düyməsini və Kağız / Model mövzu keçidini göstərir.

- **Kağız** açıq vərəqdə tünd xətlərdir. **Model** tünd fonda açıq xətlərdir. Eskiz rəngləri mövzuya uyğunlaşır.
- {{ui:Parametrlər}} (dişli və ya {{key:Mod+,}}) {{ui:PartCraft}} sekməsinə malikdir: hansı siçan düyməsi görünüşü fırladır, siçan çarxı və ya touchpad, və eskiz çəkərkən əlaqələr. Bax: [PartCraft parametrləri](topic:settings).
- Ekran rejimi düyməsi və ya {{key:Ctrl+Shift+F}} normal, tam ekran və çubuqları gizlədilmiş tam ekran arasında dəyişir. Çubuqlar gizli olanda göstəricini yuxarı kənara aparın (və ya ora toxunun) ki, geri gəlsin. {{key:Esc}} normal rejimə qaytarır. Bu düymə Mac-də də {{key:Ctrl+Shift+F}}-dir, ⌘ deyil.

## Alət paneli

Alət paneli qruplaşdırılıb. Nə etdiyinizə görə dəyişir, ona görə də bir sətirdə sığır:

| Qrup | Düymələr | Göstərilir |
|---|---|---|
| Fayl | {{ui:Yeni}}, {{ui:Aç}}, {{ui:Saxla}}, {{ui:İxrac}} (menyu) | Həmişə |
| Eskiz | {{ui:Eskiz}} | Eskiz açıq olmayanda |
| Eskiz | {{ui:Çıxış}}, {{ui:Xətt}}, {{ui:Düzbucaqlı}}, {{ui:Çevrə}}, {{ui:Qövs}}, {{ui:Nöqtə}}, {{ui:Mərkəz xətti}}, {{ui:Yumrultma}}, {{ui:Ölçü}}, {{ui:Köməkçi}} | Yalnız eskiz açıq olanda |
| Elementlər | {{ui:Ekstruziya}}, {{ui:Kəs}}, {{ui:Fırlatma}}, {{ui:Deşik}}, {{ui:Xətti}}, {{ui:Dairəvi}}, {{ui:Güzgü}}, {{ui:Yumrultma}}, {{ui:Faska}}, {{ui:Qabıq}}, {{ui:Daha çox}} (menyu: Fırlanan kəsik, Müstəvi, Ox, Nöqtə, Süpürmə, Loft, Draft) | Hissədə, eskiz və ya çertyoj açıq olmayanda. Yumrultma və Faska düz üzlər arasında düz kənarlarda işləyir; Qabıq və Draft düz üzlərdə. Süpürmə və Loft bu versiyada hələ qurulmayıb (dəqiq kernel tələb edirlər); onlardan birinə klikləsəniz bunu deyir |
| Elementlər | {{ui:Hazırdır}} | Yalnız yumrultma, faska, qabıq və ya draft üçün kənar və ya üz seçərkən |
| Çertyoj | {{ui:Çertyoj}} | Hissədə (hissənin bərk cismi olduqdan sonra istifadə oluna bilər) |
| Çertyoj | {{ui:Baza}}, {{ui:Çərçivə}}, {{ui:Səth emalı}}, {{ui:Ətraflı}}, {{ui:PDF}}, {{ui:Geri}} | Yalnız çertyoj vərəqində |
| Yığım | {{ui:Yığım}} | Hissədə (hissənin bərk cismi olduqdan sonra istifadə oluna bilər) |
| Yığım | {{ui:Surət əlavə et}}, {{ui:Daxil et}}, {{ui:Birləşmə}}, {{ui:Toqquşma}}, {{ui:Detalı redaktə et}}, {{ui:Bağla}} | Yalnız yığımda |
| Yığım | {{ui:Geri}} | Yığımdan hissəni redaktə edərkən |
| Redaktə | {{ui:Geri qaytar}}, {{ui:Təkrarla}}, {{ui:Kopyala}}, {{ui:Yapışdır}}, {{ui:Daha çox}} (menyu: Kəs, Kopyala, Yapışdır, Yerində yapışdır, Surət çıxar, Sil, Hamısını seç, Heç birini seçmə) | Həmişə; hər element sizin içində olduğunuz eskiz, tarixçə və ya yığım üzərində işləyir |
| Görünüş | {{ui:Sığdır}}, {{ui:Normal to}}, {{ui:Görünüşlər}} (menyu: Ölç, Kütlə xassələri, Kəsik, Draft, Zebra, Əyrilik, {{ui:Baza müstəviləri}}, sonra İzometrik, Ön, Arxa, Üst, Alt, Sağ, Sol) | Həmişə |

Düyməni göstərici ilə üzərinə gətirin ki, nə etdiyini və qısayolunu görəsiniz. Boz düymə indi işlədilə bilməz: məsələn eskiz açıq olanda element düymələri, və ya yığımda iki hissə olmayanda {{ui:Birləşmə}}.

Redaktə qrupundakı {{ui:Daha çox}} menyusu hər redaktə əməliyyatını qısayolu ilə siyahıya salır. Kopyalama və yapışdırma nəyə təsir edəcəyi hansı yerdə olduğunuza görə müəyyən olunur; bax: [Kopyalama, yapışdırma və surət çıxarma](topic:copy-paste). Boz element üzərindəki məsləhət məlumatı indi niyə işləmədiyini deyir.

{{ui:İxrac}} menyusunda {{ui:STL, 3D çap üçün}}, {{ui:3MF, 3D çap üçün}}, {{ui:STEP AP242 (dəqiq bərk cisim)}}, {{ui:STEP AP214 (dəqiq bərk cisim)}}, {{ui:STEP (fasetli, mesh nüvəsi)}}, {{ui:STEP AP214 (fasetli, mesh nüvəsi)}}, {{ui:Eskizin və ya düz üzün DXF-i}} və {{ui:Çertyoj (PDF): görünüşlər, kəsik, detal, GD&T}} var. Dəqiq STEP elementləri dairəvi üzləri öz həqiqi səthlərində yazır; fasetli olanlar onları düz fasetlər kimi yazır.

## Tarixçə (solda)

Soldakı panel hissənin element tarixçəsidir: PartCraft-ın yuxarıdan aşağı yenidən qurduğu siyahı.

- Başlıq hissənin adıdır ("Part1", siz adını dəyişənə qədər).
- **Ön müstəvi**, **Üst müstəvi** və **Sağ müstəvi** birinci gəlir. Birinə klikləyin ki, seçin; görünüşdə işıqlanır.
- Onların altında elementləriniz yaradıldığı sıra ilə var. Elementin istifadə etdiyi eskiz həmin elementin altında girintilidir.
- Sıranın sağ ucundakı bayraq onun vəziyyətini göstərir:

| Bayraq | Mənası |
|---|---|
| (yoxdur) | Qurulub, eskiz tam təyin olunub |
| − | Qismən təyin olunmuş eskiz (hələ hərəkət edə bilər) |
| + | Həddindən artıq təyin olunmuş eskiz |
| ⚠ | Qurulub, xəbərdarlıqla (oxumaq üçün üzərinə gətirin) |
| ⚠ xəta | Element uğursuz oldu. Səbəbini oxumaq üçün üzərinə gətirin və ya klikləyin |
| ⚠ qurulmayıb | Element uğursuz olan və ya söndürülmüş başqa elementə ehtiyac duyur |
| söndürülüb | Dayandırılıb |

- Hər element adından sonra əsas ədədini göstərir, məsələn Ekstruziya üçün "25 mm" və ya deşik üçün "Ø6.6 keçən". Ədədə iki dəfə klikləyin və ya sətirdə {{key:F2}} basın ki, orada dəyişəsiniz. Bax: [Ölçüləri dəyişin](topic:change-sizes).
- Sağda redaktə etmək üçün elementə klikləyin. Eskizi açmaq üçün iki dəfə klikləyin.
- Geri yuvarlananda siyahıda **Geri yuvarlanma çubuğu · irəli yuvarla** sətri görünür. Onun altındakı elementlər boz olur və qurulmur.
- Sətir fokuslanıb ikən {{key:Up}} və {{key:Down}} sətirlər arasında hərəkət edir, {{key:Alt+Up}} / {{key:Alt+Down}} isə tarixçənin icazə verdiyi yerdə elementin özünü hərəkət etdirir.

Yığımda eyni panel **Detallar** (birincisi yerə bağlı kimi işarələnir) və **Birləşmələr** siyahıya salır.

### Hissə məlumatı

Tarixçənin altında **Hissə** qutusu bərk cismin **Həcmini**, **Səth sahəsini**, **Ölçüsünü (X × Y × Z)**, **Keçən deşikləri**, **Gövdələri**, **Üçbucaqları**, **Elementlərin** sayını və neçəsinin **Uğursuz** olduğunu siyahıya salır. Həcmlər və sahələr mesh nüvəsinin qurduğu fasetli bərk cisimdəndir, dairəvi formalar üçün həqiqi dəyərdən bir qədər azdır (bax: [Elementlər və onların seçimləri](topic:features#curves-resolution)).

Yığımda qutu **Yığım** başlığını daşıyır: Detallar, Nümunələr, Birləşmələr, Birləşməyənlər və Müdaxilə.

## 3D görünüş (ortada)

Görünüş bərk cismi, əsas müstəviləri və hələ heç bir elementdə istifadə olunmamış hər eskizi göstərir.

Hissə boş olanda əsas müstəvilər tam çəkilir. Bərk cismi olduqdan sonra onlar geri çəkilir: solğun çəkilir ki, hissəni örtməsin, kliklər onların arasından keçib hissəyə çatır. Eskizi haradan çəkəcəyinizi seçərkən (heç nə seçilmədən {{ui:Eskiz}}) və tarixçədə birini seçəndə onlar yenidən tam görünür. {{ui:Görünüşlər}} › {{ui:Baza müstəviləri}} onları tamamilə gizlədir; yenə də haradan eskiz çəkəcəyinizi seçərkən görünürlər. PartCraft bu seçimi yadda saxlayır.

- Hissəni fırlatmaq üçün sürükləyin, sağ və ya orta düymə ilə sürükləyərək sürüşdürün, çarxı fırladıqda göstəricidə miqyaslayın. Ətraflı məlumat: [Düymələr və siçan](topic:keyboard).
- Üz, kənar və ya müstəvinin üzərinə gəlin ki, işıqlanmasını görəsiniz. Seçmək üçün klikləyin. Üzlər bütöv işıqlanır, kənarlar bütöv çəkilir və seçilir. {{key:Shift}}+klik bir neçə kənar və ya üz toplayır. Onlar işarələnmiş qalır.
- Sağ yuxarıdakı görünüş kubu hissə ilə birlikdə dönür: üz, kənar və ya künc üzərinə klikləyin ki, oradan baxasınız, onu sürükləyin ki, fırladasınız, ev düyməsi başlanğıca qaytarır. Bax: [Görünüş kubu](topic:view-cube).
- Seçilmiş Ekstruziyada son üzündə narıncı ox görünür, Fırlatmada isə dönüşünün sonunda əyri ok: onu sürükləyərək dərinliyi və ya bucağı dəyişin, ya da yanındakı qutuya yazın. Bax: [Ölçüləri dəyişin](topic:change-sizes#drag-it-in-the-view).
- Hissə boş olanda **Hissə başlat** adlı qutu ilk addımları siyahıya salır.
- `.partcraft.json` və ya `.partcraft-asm.json` faylını görünüşün istənilən yerinə atın ki, açılsın. `.step`, `.stp`, `.stl`, `.obj`, `.3mf` və ya `.3dm` faylı oraya atılanda bərk cisim kimi açılır.

### Kənarlar və ya üzlər seçərkən

{{ui:Yumrultma}}, {{ui:Faska}} və ya {{ui:Qabıq}} seçimlə açıldıqda (və ya həmin element üçün {{ui:Kənarları seçin}}) hissə həmin elementdən əvvəlki kimi görünür. Kənarlara və ya üzlərə klikləyərək onları əlavə edin və ya çıxarın; işarələr nələrin seçildiyini göstərir. {{ui:Hazırdır}} və ya {{key:Esc}} bitirir. Bax: [Yumrultmaq, faska və oyma](topic:fillet-chamfer-shell).

### Çertyoj vərəqində

{{ui:Çertyoj}} 3D görünüşü A3 çertyoj vərəqi ilə əvəz edir. Çarx zoom edir, sağ və ya orta sürüşdürmə ilə sürüşür, {{key:F}} sığdırır. Bax: [Çertyoj hazırlayın](topic:drawing-pdf).

### Eskiz açıq olanda

Görünüş birbaşa eskiz müstəvisinə baxmağa dönür və üstündə 2D eskiz qatı görünür. Hissə yalnız bu eskizdən əvvəl yaradılmış elementləri göstərir. Sol yuxarıda zolaq eskizin vəziyyət nişanını ("Tam təyin olunub", "Qismən təyin olunub · 3 sərbəstlik dərəcəsi" və s.) və adını, məsələn "Ekstruziya1-in üzündə Eskiz2", göstərir.

## Xüsusiyyətlər paneli (sağda)

Sağdakı panel seçilmiş olanı göstərir və başlığı onun adını deyir:

- **Hissə** (heç nə seçilməyib): hissənin **Adı** və **Əyrilər** parametri.
- Müstəvi: {{ui:Üzərində eskiz}} düyməsi.
- **Üz**: nə növ olduğu (Düz üz, radiusu və oxu ilə Silindr, Konus, Kürə və ya Tor), sahəsi, onu hansı element yaratdığı və düz üz üçün {{ui:Bu üzdə eskiz}}, {{ui:Üzə normal}}, {{ui:Üzü DXF kimi ixrac et}}, {{ui:Ondan ekstruziya}}, {{ui:İçəri kəs}} və {{ui:Burada deşik}} (bax: [Bütöv üzü çəkin və ya itələyin](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Kənar**: növü (düz, mərkəzi və radiusu ilə dairə, və ya əyri), uzunluğu və arasında olduğu iki üz (məsələn "Ekstruziya1 son üzü və Ekstruziya1 yan"), {{ui:Yumrultma}} və {{ui:Faska}} düymələri ilə.
- {{key:Shift}} ilə bir neçə kənar və ya üz seçilib: neçə olduğu, kənarlar üçün {{ui:Yumrultma}} və {{ui:Faska}} və {{ui:Təmizlə}}.
- Element: onun ədədləri və seçimləri, eskizinin ölçüləri, sonra {{ui:Söndür}}, {{ui:Burada geri yuvarla}}, {{ui:Yuxarı köçür}}, {{ui:Aşağı köçür}}, {{ui:Sil}} və onun **Adı**.
- Açıq eskiz: onun vəziyyəti, seçilmiş elementlərə əlavə edə biləcəyiniz əlaqələr, əlaqə və ölçülərin siyahısı, **Koordinatlarla əlavə et**, və {{ui:Eskizdən çıx}}, {{ui:Sığdır}} və {{ui:DXF kimi ixrac et}}.
- Çertyoj vərəqində: kəsik və detal parametrləri və ya seçilmiş GD&T simvolu.
- Yığımda: yığım, seçilmiş hissə və ya seçilmiş birləşmə.

Hər ədəd qutusu {{key:Enter}} və ya {{key:Tab}} basdıqda və ya kənara klikləyəndə təsir edir. Hissə dərhal yenidən qurulur; OK düyməsi yoxdur. Geri getmək üçün {{key:Mod+Z}} istifadə edin.

## Status sətri (aşağıda)

- Solda, göstəricinin eskizdəki koordinatları (yalnız eskiz açıq olanda).
- Ortada mesajlar: növbəti addım nədir və nə üçün nəyisə rədd etdi. Heç nə olmur kimi görünəndə oxuyun.
- Sağa yaxın, kernel nişanı: bu versiyada həmişə "Mesh nüvəsi". Nə demək olduğunu öyrənmək üçün üzərinə gətirin. Bax: [Mesh nüvəsi](topic:solid-kernels).
- Sağda bir nişan: hissə yenidən qurulanda "Yenidən qurulur…", hər şey yaxşı olanda "… ms-də yenidən qurulub", və ya "1 element uğursuz". Yığımda "… ms-də yerləşdirilib" yazır və ya birləşmə problemlərini sayır.

Həmçinin bax: [Illustrate-də təlimat başlatmaq](topic:illustrate): hissələrinizdən və yığımlarınızdan yığım təlimatları yaradan iş sahəsi.

## Dar ekranda

760 pikseldən dar ekranda, məsələn telefonda, görünüş ekranı qoruyur: alət paneli yan tərəfə sürüşən bir sətirdir və panellər aşağıdakı zolaqdan vərəq kimi açılır. {{ui:Alətlər}} alət panelini gizlədir, {{ui:Hərəkət}} onu aşağıya qoyur. Bax: [Touchpad, toxunma və kiçik ekranlar](topic:trackpad-and-touch).
