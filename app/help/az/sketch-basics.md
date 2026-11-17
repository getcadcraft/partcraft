---
title: İlk eskizinizi çəkin
summary: Müstəvidə və ya düz üzdə eskiz açın, xətt, düzbucaqlı, çevrə, qövs, nöqtə və mərkəz xətləri çəkin, künci yuvarlaqlaşdırın, seçin, sürükləyin və silin.
keywords: eskiz, çəkmək, xətt, düzbucaqlı, çevrə, qövs, nöqtə, mərkəz xətti, köməkçi, yuvarlaqlaşdırma, eskiz yuvarlaqlaşdırması, künci yuvarlaqlaşdırmaq, tutma, seç, seçim pəncərəsi, sürüklə, profil
from: 28be7436
---

Hər bərk cisim eskiz kimi başlayır: müstəvidə düz çertyoj. Bu təlimat çəkmə alətlərini əhatə edir. Eskizi əlaqələr və ölçülərlə möhkəmləndirmək [Eskizi tam təyin edin](topic:relations-dimensions) bölməsindədir.

## Eskizi başlatmaq

Eskizi əsas müstəvidə və ya detalın istənilən düz üzündə çəkə bilərsiniz.

1. Eskizin yerini seçin:
   - əsas müstəvi: tarixçədə **Ön müstəvi**, **Üst müstəvi** və ya **Sağ müstəvi** üzərinə klikləyin, ya da görünüşdə müstəviyə klikləyin;
   - düz üz: görünüşdə üzə klikləyin. Bütün üz işıqlanır.
2. Alətlər panelində {{ui:Eskiz}} seçin və ya {{key:S}} basın. (Üz seçilibsə, sağ paneldə {{ui:Bu üzdə eskiz}} də seçə bilərsiniz; müstəvi seçilibsə, {{ui:Üzərində eskiz}}.)

Görünüş müstəviyə perpendikulyar olaraq dönür, eskiz alətləri alətlər panelində görünür və Xətt aləti hazır olur. Heç nə seçilmədən {{ui:Eskiz}} bassanız, əsas müstəvilər görünür və status paneli bildirir: "Eskiz çəkmək üçün müstəvi və ya düz üzə klikləyin. Esc dayandırır."

:::note
Əyri üz eskizi saxlaya bilməz: "Bu üz əyridir. Eskiz çəkmək üçün düz üz və ya müstəvi seçin."
:::

**Üz üzərindəki eskiz həmin üzü izləyir.** Üz eskiz kənarı və ya ekstruziyanın sonu ilə yaradılıbsa, element dəyişdikdə yeni eskiz də yerini dəyişir (daha dərin oyuq onun döşəməsindəki eskizi özü ilə aparır). Panel üzün "Seçildiyi yerdə sabitdir" olduğunu göstərirsə, eskiz üzün indiki yerində qalır.

## Çəkmə alətləri

Hər alətin alətlər panelində düyməsi və qısa yolu var. Eyni düyməni yenidən seçin, {{key:S}} basın və ya Seç rejiminə qayıtmaq üçün {{key:Esc}} basın.

| Alət | Açar | Necə çəkilir |
|---|---|---|
| {{ui:Xətt}} | {{key:L}} | Başlanğıc nöqtəyə, sonra hər növbəti nöqtəyə klikləyin. Xətlər ucdan-uca zəncirlənir. Zənciri {{key:Esc}}, {{key:Enter}}, sağ klik və ya ikiqat klik ilə bitirin. Mövcud nöqtəyə klik də onu bitirir |
| {{ui:Düzbucaqlı}} | {{key:R}} | Bir künc nöqtəsinə, sonra əks künc nöqtəsinə klikləyin. Künclərində birləşmiş dörd xətt alırsınız: ikisi üfüqi, ikisi şaquli |
| {{ui:Çevrə}} | {{key:C}} | Mərkəzə, sonra çevrə üzərindəki nöqtəyə klikləyin |
| {{ui:Qövs}} | {{key:A}} | Mərkəzə, sonra başlanğıca, sonra sona klikləyin. Qövs göstəricini mərkəz ətrafında hərəkət etdirdiyiniz istiqamətdə gedir |
| {{ui:Nöqtə}} | {{key:P}} | Klikləyin. Təkbaşına duran nöqtə {{ui:Deşik}} üçün deşik mərkəzini işarələyir |
| {{ui:Mərkəz xətti}} | {{key:N}} | Xətt kimi, bir seqment-bir seqment. Qırıq xətlə çəkilir; köməkçi həndəsədir, fırlatma oxu və ya istinad kimi istifadə olunur |
| {{ui:Yuvarlaqlaşdırma}} | {{key:F}} | İki xəttin birləşdiyi künc nöqtəsinə klikləyin, radiusu yazın, {{key:Enter}} basın |
| {{ui:Spline}} | {{key:B}} | Əyrinin keçdiyi nöqtələrə klikləyin; {{key:Enter}} bitirir, birinci nöqtəyə klik onu bağlayır. Bax: [Splaynlar, kəsmə, ofset və digər eskiz alətləri](topic:sketch-tools) |
| {{ui:Kəsmə}} | {{key:T}} | Silinəcək əyri parçasına, ən yaxın kəsişmələrə qədər klikləyin |
| {{ui:Ölçü}} | {{key:D}} | Bax: [Eskizi tam təyin edin](topic:relations-dimensions) |

Siz çəkərkən göstəricinin yanındakı kiçik qutuda xəttin uzunluğu, ölçüsü, diametri və ya radiusu görünür.

### Ölçünü çəkərkən yazın

Xəttin, düzbucaqlının, çevrənin və ya qövsün ilk klikindən sonra klikləmək əvəzinə ölçünü yaza bilərsiniz. Rəqəm yazdıqda göstəricinin yanında həmin rəqəmlə qutu açılır:

| Alət | Qutular ({{key:Tab}} növbətiyə keçir) | {{key:Enter}} basanda nə olur |
|---|---|---|
| {{ui:Xətt}}, {{ui:Mərkəz xətti}} | Uzunluq, sonra eskizin X oxundan Bucaq (°) | Xətt həmin uzunluqda, göstəriciyə doğru və ya yazılmış bucaqla çəkilir; zəncir onun ucundan davam edir |
| {{ui:Düzbucaqlı}} | En, sonra Hündürlük | Düzbucaqlı birinci küncdən göstəriciyə doğru çəkilir; yazmadığınız ölçü göstəricidən alınır |
| {{ui:Çevrə}} | Diametr | Çevrə həmin diametrdə çəkilir |
| {{ui:Qövs}} | Mərkəzdən sonra Radius, sonra başlanğıcdan sonra Qövs bucağı (°) | Başlanğıc mərkəzdən həmin məsafədə olur; sonra qövs göstəricini hərəkət etdirdiyiniz istiqamətdə həmin bucaq qədər gedir |

Yazdığınız hər ölçü eyni addımda **idarəedici ölçü** olur, buna görə eskiz ölçülü çıxır: {{key:Mod+Z}} forma ilə ölçülərini birlikdə geri alır. Klikləyib {{key:Enter}} basmaq əvəzinə klikləsəniz, yazdığınızı saxlayır və qalanını klikdən alır. {{key:Esc}} qutunu bağlayır və göstəriciyə qayıdır.

Yalnız kliklərlə çəkmək istəyirsinizsə, bunu {{ui:Parametrlər}} › {{ui:PartCraft}} › **Çəkərkən ölçü ver** bölməsində söndürün. Bax: [PartCraft parametrləri](topic:settings).

{{ui:Daha çox}}, eskiz alətlərinin sonunda, nəzarət nöqtəli splaynı, Uzat, Ofset, Güzgü, Çoxbucaqlı, Yuva, eskiz massivlərini və Kənarı proyeksiya et-i ehtiva edir: bax [Splaynlar, kəsmə, ofset və digər eskiz alətləri](topic:sketch-tools).

### Tutma

Tutma eskizin hərəkət edəndə birləşmiş qalması üçün əlaqələri sizin üçün əlavə edir:

- **Son nöqtədə və ya başlanğıc nöqtədə** kiçik kvadrat görünür. Yeni nöqtə onunla üst-üstə düşür.
- **Xətt, çevrə və ya qövs üzərində** kiçik xaç görünür. Yeni nöqtə həmin əyrinin üzərinə qoyulur.
- Üfüqidən və ya şaquli istiqamətdən 3 dərəcədən az fərqlənən xətt həmin istiqamətə tutulur və üfüqi və ya şaquli əlaqə alır. Etiketdə "H" və ya "V" görünür.

Tutmadan qaçmaq üçün nöqtədən və ya əyridən daha uzaqda klikləyin: bunun üçün yaxınlaşdırın.

## Künci yuvarlaqlaşdırın

1. {{key:F}} basın və ya {{ui:Yuvarlaqlaşdırma}} seçin.
2. İki xəttin birləşdiyi künc nöqtəsinə klikləyin.
3. Təklif olunan radiusla qutu açılır. Radiusu yazın və {{key:Enter}} basın.

Hər iki xətt kəsilir və radius ölçüsü olan toxunan qövslə birləşdirilir. Görə biləcəyiniz mesajlar: "Yuvarlaqlaşdırma üçün məhz iki xəttin birləşdiyi künc lazımdır." və "Bu radius bu xətlər üçün çox böyükdür."

:::tip
Eskiz yuvarlaqlaşdırması profilin küncünü yuvarlaqlaşdırır, buna görə ekstruziyada şaquli kənarlar yumru olur. Bərk cismin özünün kənarlarını yuvarlaqlaşdırmaq üçün (məsələn, lövhənin üst kənarları) detalda {{ui:Yuvarlaqlaşdırma}} elementindən istifadə edin: bax [Yuvarlaqlaşdırma, faska və qabıq](topic:fillet-chamfer-shell). Eskizdə alət panelindəki Yuvarlaqlaşdırma eskiz alətidir; detalda isə elementdir.
:::

## Konstruksiya həndəsəsi

Köməkçi xətlər, çevrələr və qövslər qırıq və boz rəngdədir. Onlar eskizə istiqamət verir, lakin ekstruziya və ya fırlatma ilə alınan profilin hissəsi deyil.

1. Xətləri, çevrələri və ya qövsləri seçin.
2. {{key:Q}} basın və ya {{ui:Köməkçi}} seçin. Geri dönmək üçün yenə basın.

## Seçmək, sürükləmək və silmək

Seç rejimi üçün {{key:S}} basın (və ya heç bir alət aktiv olmayana qədər {{key:Esc}} basın).

- Nöqtəni, xətti, çevrəni, qövsü, əlaqə simvolunu və ya ölçünü seçmək üçün klikləyin. {{key:Shift}}+klik seçimə əlavə edir və ya çıxarır. Windows və Linux-da {{key:Ctrl}}+klik eyni işi görür; Mac-də ⌘+klik.
- Boş yerdə sürükləyərək seçim pəncərəsi çəkin: tam içində olan hər şey seçilir.
- Nöqtəni və ya xətti hərəkət etdirmək üçün sürükləyin. Həlledici hərəkət zamanı bütün əlaqələri və ölçüləri saxlayır, buna görə yalnız sərbəst həndəsə hərəkət edir. Çevrənin kənarını sürükləyərək radiusu dəyişin.
- Ölçünün rəqəmini sürükləyərək etiketi yerdəyişdirin.
- {{key:Delete}} və ya {{key:Backspace}} basın, ya da sağ paneldə {{ui:Sil}} seçin. Həndəsəni silmək onun üzərindəki əlaqələri də silir.

## Eskizdə yaxınlaşdırma və sürüşdürmə

- Təkərçəni fırladaraq göstərici yerində yaxınlaşdırın.
- Orta və ya sağ düyməni basıb sürükləyərək sürüşdürün.
- Alətlər panelində və ya sağ paneldə {{ui:Sığdır}} eskizi görünüşə sığdırır. Eskizdə {{key:F}} açarı Yuvarlaqlaşdırma alətidir, Sığdır deyil.

## Eskizi bağlayın

Alətlər panelində {{ui:Çıxış}} və ya sağ paneldə {{ui:Eskizdən çıx}} seçin, ya da eskiz bağlanana qədər {{key:Esc}} basın. Hər {{key:Esc}} əvvəl davam edən işi ləğv edir, sonra Seç rejiminə qayıdır, sonra seçimi təmizləyir; növbəti basış eskizi bağlayır.

Eskiz seçilmiş qalır, buna görə növbəti {{ui:Ekstruziya}} və ya {{ui:Fırlatma}} onu istifadə edir.

## Yaxşı profil nədir

{{ui:Ekstruziya}} və {{ui:Fırlatma}} eskizin bərk cisim xətlərinin (köməkçi olmayan) xətt, çevrə, qövs və splaynlarının **hər qapalı konturunu** istifadə edir. Konturların içindəki konturlar deşik olur.

- Hər ucun dəqiq bir başqa uc ilə birləşməsi lazımdır. "Profil açıqdır: (12.5, 40) nöqtəsindəki uc heç nəyə birləşmir." yeri göstərir.
- Heç bir nöqtədə üç uc birləşməməlidir: "Profil (0, 20) nöqtəsində budaqlanır: orada ikidən çox uc birləşir."
- Nöqtələr və köməkçi həndəsə profil tərəfindən nəzərə alınmır.

Növbəti: [Eskizi əlaqələr və ölçülərlə tam təyin edin](topic:relations-dimensions).

## Fotoşəkildən eskiz

**Elementlər › Daha çox › Şəkildən eskiz…** (və ya Element ağacı lentasındakı Eskiz qrupu) düz detalın sadə fonda şəklini — konturunu və deşiklərini — ya da qələm rəsmini xətlərdən, qövslərdən və çevrələrdən ibarət eskizə çevirir. Eskizin düzgün ölçüsü üçün bir uzunluq (en, hündürlük və ya ən uzun tərəf) yazın, tapdıqlarını önizləmədə yoxlayın və **Eskizi yarat** seçin; eyni geri alma addımında ekstruziya da edə bilər. Bu, bu kompüterdə izlənir. Künc radiusları təxminən 5 % dəqiqliklə alınır, bir-iki piksel detallar itir, əyri çəkilmiş və ya kölgəli şəkil düzəldilmir: detalı düz qarşıdan, bərabər işıqda çəkin.
