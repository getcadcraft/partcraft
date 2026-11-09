---
title: PartCraft ekranı
summary: Hər çubuq və panelin turu: alət paneli və onun necə dəyişdiyi, tarixçə, detal faktları, 3D görünüş, xüsusiyyətlər paneli və status paneli.
keywords: ekran, tərtibat, alət paneli, tarixçə, element ağacı, xüsusiyyətlər, panel, status paneli, interfeys, ui, tur, tam ekran
from: 7394fc49
---

Ekranın beş hissəsi var: yuxarıda alət paneli, solda tarixçə, ortada 3D görünüş, sağda xüsusiyyətlər paneli və aşağıda status paneli. Hamısının üstündə CadCraft tətbiq paneli durur.

## Tətbiq paneli

Ən yuxarıdakı nazik panel PartCraft-ın özünə deyil, CadCraft saytına aiddir. Tətbiqin adını və harada işlədiyini, versiya menyusunu, **PartCraft haqqında** düyməsini, ekran rejimi düyməsini və Paper / Model mövzu keçidini göstərir.

- **Paper** açıq vərəqdə tünd xətlərdir. **Model** tünd fonda açıq xətlərdir. Eskiz rəngləri mövzuya uyğun olur.
- {{ui:Parametrlər}} (dişli, ya da {{key:Mod+,}}) {{ui:PartCraft}} sekməsinə malikdir: görünüşü hansı siçan düyməsinin çevirdiyi, siçan təkərçiyi ya da trackpad və eskiz zamanı əlaqələr. Bax: [PartCraft parametrləri](topic:settings).
- Ekran rejimi düyməsi ya da {{key:Ctrl+Shift+F}} normal, tam ekran və panelləri gizli tam ekran arasında dövr edir. Panellər gizli olanda göstəricini yuxarı kənara aparın (ya da oraya toxunun) ki, geri qayıtsın. {{key:Esc}} normala qaytarır. Mac-də də bu klavişdir {{key:Ctrl+Shift+F}}, ⌘ deyil.

## Alət paneli

Alət paneli qruplaşdırılıb. Nə ilə məşğul olduğunuza görə dəyişir, beləliklə bir sətirdə sığır:

| Qrup | Düymələr | Göstərilir |
|---|---|---|
| Fayl | {{ui:Yeni}}, {{ui:Aç}}, {{ui:Saxla}}, {{ui:İxrac}} (menyu) | Həmişə |
| Eskiz | {{ui:Eskiz}} | Eskiz açıq olmadıqda |
| Eskiz | {{ui:Çıxış}}, {{ui:Xətt}}, {{ui:Düzbucaqlı}}, {{ui:Çevrə}}, {{ui:Qövs}}, {{ui:Nöqtə}}, {{ui:Mərkəz xətti}}, {{ui:Yuvarlaqlaşdırma}}, {{ui:Ölçü}}, {{ui:Köməkçi}} | Yalnız eskiz açıq olanda |
| Elementlər | {{ui:Ekstruziya}}, {{ui:Kəs}}, {{ui:Fırlatma}}, {{ui:Deşik}}, {{ui:Xətti}}, {{ui:Dairəvi}}, {{ui:Güzgü}}, {{ui:Yuvarlaqlaşdırma}}, {{ui:Faska}}, {{ui:Qabıq}}, {{ui:Daha çox}} (menyu: Fırlatma ilə kəsmə, Müstəvi, Ox, Nöqtə, Süpürmə, Loft, Qaralama) | Detalda, eskiz və ya çertyoj açıq olmadıqda. Yuvarlaqlaşdırma və Faska iki düz üz arasındakı düz kənarlarda işləyir; Qabıq və Qaralama düz üzlərdə. Süpürmə və Loft bu versiyada hələ qurulmayıb (dəqiq nüvə tələb edirlər); birinə klik etsəniz bunu deyir |
| Elementlər | {{ui:Hazırdır}} | Yalnız yuvarlaqlaşdırma, faska, qabıq və ya qaralama üçün kənar və ya üz seçərkən |
| Çertyoj | {{ui:Çertyoj}} | Detalda (detalda bərk cisim olduqda işləyir) |
| Çertyoj | {{ui:Baza}}, {{ui:Çərçivə}}, {{ui:Səth emalı}}, {{ui:Ətraflı}}, {{ui:PDF}}, {{ui:Geri}} | Yalnız çertyoj vərəqində |
| Yığım | {{ui:Yığım}} | Detalda (detalda bərk cisim olduqda işləyir) |
| Yığım | {{ui:Surət əlavə et}}, {{ui:Daxil et}}, {{ui:Birləşmə}}, {{ui:Toqquşma}}, {{ui:Detalı redaktə et}}, {{ui:Bağla}} | Yalnız yığımda |
| Yığım | {{ui:Geri}} | Yığımdan detalı redaktə edərkən |
| Redaktə | {{ui:Geri qaytar}}, {{ui:Təkrarla}}, {{ui:Kopyala}}, {{ui:Yapışdır}}, {{ui:Daha çox}} (menyu: Kəs, Kopyala, Yapışdır, Yerində yapışdır, Surət çıxar, Sil, Hamısını seç, Heç birini seçmə) | Həmişə; hər element içində olduğunuz eskiz, tarixçə və ya yığımda işləyir |
| Görünüş | {{ui:Sığdır}}, {{ui:Üzə normal}}, {{ui:Görünüşlər}} (menyu: Ölçmə, Kütlə xüsusiyyətləri, Kəsik, Qaralama, Zebra, Əyrilik, {{ui:Baza müstəviləri}}, sonra İzometrik, Ön, Arxa, Üst, Alt, Sağ, Sol) | Həmişə |

Düymənin üzərinə gəlin ki, nə etdiyini və klavişini görəsiniz. Boz düymə indi istifadə oluna bilməz: məsələn, eskiz açıq olanda element düymələri, ya da yığımda iki detal olana qədər {{ui:Birləşmə}}.

{{ui:Daha çox}} menyusu Redaktə qrupunda hər redaktə əməliyyatını klavişi ilə sadalayır. Kopyalama və yapışdırmanın nəyə təsir edəcəyi harada olduğunuza görə müəyyən olunur; bax: [Kopyalama, yapışdırma və surət çıxarma](topic:copy-paste). Boz elementin tooltip-i niyə işləmədiyini deyir.

{{ui:İxrac}} menyusunda {{ui:STL, 3D çap üçün}}, {{ui:3MF, 3D çap üçün}}, {{ui:STEP AP242 (dəqiq bərk cisim)}}, {{ui:STEP AP214 (dəqiq bərk cisim)}}, {{ui:STEP (fasetli, mesh nüvəsi)}}, {{ui:STEP AP214 (fasetli, mesh nüvə)}}, {{ui:Eskizin və ya düz üzün DXF-i}} və {{ui:Çertyoj (PDF): görünüşlər, kəsik, detal, GD&T}} var. İki dəqiq STEP elementi bozdur: bu versiyada hələ qurulmayıb, ona görə {{ui:STEP (fasetli, mesh nüvəsi)}} istifadə edin.

## Tarixçə (solda)

Sol panel detalın element tarixçəsidir: PartCraft-ın yuxarıdan aşağıya yenidən qurduğu siyahı.

- Başlıq detalın adıdır ("Part1", adını dəyişənə qədər).
- **Ön müstəvi**, **Üst müstəvi** və **Sağ müstəvi** birinci gəlir. Birinə klik edin ki, seçilsin; görünüşdə vurğulanır.
- Onların altında elementləriniz yaradıldıqları sırayla gəlir. Elementin istifadə etdiyi eskiz həmin elementin altında girintili görünür.
- Sıranın sağ ucundakı bayraq vəziyyəti göstərir:

| Bayraq | Mənası |
|---|---|
| (heç nə) | Qurulub, eskiz tam təyin olunub |
| − | Təyin olunmayan eskiz (hələ də hərəkət edə bilər) |
| + | Artıq təyin olunmuş eskiz |
| ⚠ | Qurulub, xəbərdarlıqla (oxumaq üçün üzərinə gəlin) |
| ⚠ xəta | Element uğursuz oldu. Səbəbini oxumaq üçün üzərinə gəlin və ya klikləyin |
| ⚠ qurulmayıb | Element uğursuz olan və ya söndürülmüş başqa elementə ehtiyac duyur |
| off | Söndürülüb |

- Hər element adından sonra əsas ədədini göstərir, məsələn Ekstruziya üçün "25 mm" və ya deşik üçün "Ø6.6 thru". Onu sətirdə dəyişmək üçün ədədə iki dəfə klikləyin ya da sətirdə {{key:F2}} basın. Bax: [Ölçüləri dəyişin](topic:change-sizes).
- Elementi sağda redaktə etmək üçün ona klikləyin. Eskizi açmaq üçün iki dəfə klikləyin.
- Geri qaytardıqda siyahıda **Geri qaytarma çubuğu · irəli qaytar** sətri olur. Bunun altındakı elementlər boz və qurulmayıb.
- Sətir fokuslananda {{key:Up}} və {{key:Down}} sətirlər arasında hərəkət edir; {{key:Alt+Up}} / {{key:Alt+Down}} tarixçə icazə verdikdə elementin özünü yerdəyişdirir.

Yığımda eyni panel **Detallar** (birincisi "yerə bərkidilmiş" kimi işarələnir) və **Birləşmələr** siyahılayır.

### Detal faktları

Tarixçənin altında **Detal** qutusu bərk cismin **Həcmini**, **Səth sahəsini**, **Ölçüsünü (X × Y × Z)**, **Keçən deşiklərini**, **Cisimlərini**, **Üçbucaqlarını**, **Elementlərin** sayını və neçəsinin **Uğursuz** olduğunu göstərir. Həcmlər və sahələr mesh nüvəsi tərəfindən qurulmuş faset bərk cisimdir, dairəvi formalar üçün həqiqi dəyərdən bir az aşağıdır (bax: [Elementlər və onların seçimləri](topic:features#curves-resolution)).

Yığımda qutu **Yığım** başlığı ilə gəlir: Detallar, Nüsxələr, Birləşmələr, Birləşməmiş və Kəsişmə.

## 3D görünüş (ortada)

Görünüş bərk cismi, baza müstəviləri və hələ heç bir element tərəfindən istifadə olunmayan eskizləri göstərir.

Baza müstəviləri detal boş olanda tam çəkilir. Bərk cismi olanda onlar geri çəkilir: solğun çəkilir ki, detalı örtməsin və kliklər onların arasından detala keçir. Eskiz üçün yer seçərkən ({{ui:Eskiz}} heç nə seçilmədən) və tarixçədən birini seçəndə yenidən tam görünürlər. {{ui:Görünüşlər}} › {{ui:Baza müstəviləri}} onları tamamilə gizlədir; yenə də eskiz üçün yer seçərkən görünürlər. PartCraft bu seçimi yadda saxlayır.

- Detalı fırlatmaq üçün sürükləyin, panoramalamaq üçün sağ və ya orta düyməni sürükləyin, təkər çevirmək göstəricidə yaxınlaşdırır. Ətraflı: [Klavişlər və siçan](topic:keyboard).
- Üz, kənar və ya müstəvinin üzərinə gəlin ki, işıqlansın. Seçmək üçün klikləyin. Üzlər bütöv vurğulanır, kənarlar bütöv çəkilir və seçilir. {{key:Shift}}+klik bir neçə kənar və ya üz toplayır. Onlar işarəli qalır.
- Yuxarı sağdakı görünüş kubu detalla birlikdə dönür: oradan baxmaq üçün üz, kənar və ya künc klikləyin, fırlatmaq üçün sürükləyin, ev düyməsi başlanğıca qaytarır. Bax: [Görünüş kubu](topic:view-cube).
- Seçilmiş Ekstruziya son üzündə narıncı ox göstərir, Fırlatma isə dönməsinin sonunda əyri ox: dərinliyi və ya bucağı dəyişmək üçün onu sürükləyin və ya yanındakı qutuya yazın. Bax: [Ölçüləri dəyişin](topic:change-sizes#drag-it-in-the-view).
- Detal boş olanda **Detal başlat** başlıqlı qutu ilk addımları sadalayır.
- Görünüşə `.partcraft.json` və ya `.partcraft-asm.json` faylı buraxın ki, açılsın. Oraya buraxılan `.step`, `.stp`, `.stl`, `.obj`, `.3mf` və ya `.3dm` faylı bərk cisim kimi açılır.

### Kənar və ya üz seçərkən

{{ui:Yuvarlaqlaşdırma}}, {{ui:Faska}} və ya {{ui:Qabıq}} heç nə seçilmədən (və ya belə elementdə {{ui:Kənarları seçin}}) detal həmin elementdən əvvəlki kimi görünür. Kənar və ya üz klikləyin ki, əlavə olunsun və ya çıxarılsın; işarələr nəyin daxil olduğunu göstərir. {{ui:Hazırdır}} və ya {{key:Esc}} bitirir. Bax: [Yuvarlaqlaşdırın, faskalayın və qabıq yaradın](topic:fillet-chamfer-shell).

### Çertyoj vərəqində

{{ui:Çertyoj}} 3D görünüşü A3 çertyoj vərəqi ilə əvəz edir. Təkər yaxınlaşdırır, sağ və ya orta sürükləmə panoramalayır, {{key:F}} sığdırır. Bax: [Çertyoj hazırlayın](topic:drawing-pdf).

### Eskiz açıq olanda

Görünüş eskiz müstəvisinə düz baxır və üstündə 2D eskiz qatı görünür. Detal yalnız bu eskizdən əvvəl yaradılmış elementləri göstərir. Yuxarı soldakı zolaq eskizin vəziyyət çipini ("Tam təyin olunub", "Təyin olunmayıb · 3 sərbəstlik dərəcəsi" və s.) və adını göstərir, məsələn "Extrude1-in üzündə Sketch2".

## Xüsusiyyətlər paneli (sağda)

Sağdakı panel seçilmiş olanı göstərir, başlıq onu adlandırır:

- **Detal** (heç nə seçilməyib): detalın **Adı** və **Əyrilər** ayarı.
- Müstəvi: {{ui:Üzərində eskiz}} düyməsi.
- **Üz**: növü (Düz üz, radiusu və oxu olan Silindr, Konus, Sfera və ya Torus), sahəsi, onu hansı element yaradıb və düz üz üçün {{ui:Bu üzdə eskiz}}, {{ui:Üzə normal}}, {{ui:Üzü DXF kimi ixrac et}}, {{ui:Ondan ekstruziya}}, {{ui:İçəri kəs}} və {{ui:Burada deşik}} (bax: [Bütöv üzü çəkin və ya itələyin](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Kənar**: növü (düz, mərkəzi və radiusu olan dairə və ya əyri), uzunluğu və arasında olduğu iki üz (məsələn "Extrude1 son üzü və Extrude1 yan tərəfi"), {{ui:Yuvarlaqlaşdırma}} və {{ui:Faska}} düymələri ilə.
- {{key:Shift}} ilə seçilmiş bir neçə kənar və ya üz: neçə olduğu, kənarlar üçün {{ui:Yuvarlaqlaşdırma}} və {{ui:Faska}}, və {{ui:Təmizlə}}.
- Element: onun ədədləri və seçimləri, eskizinin ölçüləri, sonra {{ui:Söndür}}, {{ui:Burada geri qaytar}}, {{ui:Yuxarı köçür}}, {{ui:Aşağı köçür}}, {{ui:Sil}} və onun **Adı**.
- Açıq eskiz: vəziyyəti, seçimə əlavə edə biləcəyiniz əlaqələr, əlaqə və ölçülərin siyahısı, **Koordinatlarla əlavə et** və {{ui:Eskizdən çıx}}, {{ui:Sığdır}} və {{ui:DXF kimi ixrac et}}.
- Çertyoj vərəqində: kəsik və detal parametrləri ya da seçilmiş GD&T simvolu.
- Yığımda: yığım, seçilmiş detal və ya seçilmiş birləşmə.

Hər ədəd qutusu {{key:Enter}} ya da {{key:Tab}} basdıqda, ya da kənara klikləyəndə təsir edir. Detal dərhal yenidən qurulur; OK düyməsi yoxdur. Geri qayıtmaq üçün {{key:Mod+Z}} istifadə edin.

## Status paneli (aşağıda)

- Solda, göstəricinin eskizdəki koordinatları (yalnız eskiz açıq olanda).
- Ortada mesajlar: növbəti addım nədir və nə üçün nəsə rədd edildi. Heç nə olmur kimi göründükdə oxuyun.
- Sağa yaxın, nüvə çipi: bu versiyada həmişə "Mesh kernel". Nə demək olduğunu öyrənmək üçün üzərinə gəlin. Bax: [Mesh nüvəsi](topic:solid-kernels).
- Sağda, çip: detal yenidən qurulanda "Yenidən qurulur…", hər şey yaxşı olanda "… ms-də qurulub", ya da "1 element uğursuzdur". Yığımda "… ms-də yerləşdirildi" yazır və ya birləşmə problemlərini sayır.

Həmçinin bax: [Illustrate-də manual başlayın](topic:illustrate) — detallarınız və yığımlarınızdan yığım təlimatları hazırlayan iş sahəsi.

## Dar ekranda

760 piksel enə qədər, məsələn telefonda, görünüş ekranı qoruyur: alət paneli yanlara sürüşən bir sətirdir və panellər aşağıdakı paneldən vərəq kimi açılır. {{ui:Alətlər}} alət panelini gizlədir, {{ui:Hərəkət}} onu aşağıya qoyur. Bax: [Trackpad, toxunuş və kiçik ekranlar](topic:trackpad-and-touch).
