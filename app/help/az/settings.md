---
title: PartCraft parametrləri
summary: Hansı siçan düyməsinin görünüşü fırlatdığını seçin, trackpad sürüşdürməsinin detalı fırladıb sürüşdürməsini təyin edin, eskiz zamanı avtomatik münasibətləri açıb-bağlayın və simulyasiya həll edicilərinin neçə axın istifadə edəcəyini təyin edin.
keywords: parametrlər, siçan, orta düymə, təkər düyməsi, orbit, fırlat, çevir, trackpad, touchpad, sürüşdür, sürüşmə, sıxma, münasibətlər, məhdudiyyətlər, avtomatik münasibət, tutma, birləşmə, axınlar, həll edici axınlar, nüvələr, prosessorlar, çoxaxınlı, sürətli həll, paralel
from: 759edcaf
---

{{ui:Parametrlər}} düyməsini tətbiq panelindəki dişli ilə və ya {{key:Mod+,}} ilə açın. Birinci sekme, {{ui:PartCraft}}, yalnız bu tətbiqə aid parametrləri saxlayır; {{ui:Ümumi}} hər CadCraft tətbiqinin paylaşdığı parametrləri saxlayır (mövzu, alətlər paneli, panellər). PartCraft parametrləri yalnız tətbiqdə mövcuddur: onları burada dəyişirsiniz və bu brauzer onları yadda saxlayır. {{ui:PartCraft parametrlərini sıfırla}} hər şeyi başlanğıc vəziyyətinə qaytarır.

## Görünüşü fırlatmaq

- **Sol düymə** (başlanğıc): detalı fırlatmaq üçün sol düyməni sürükləyin; sürüşdürmək üçün sağ və ya orta düyməni sürükləyin.
- **Orta düymə**: təkəri basıb sürükləyin ki, detalı fırlatsın; {{key:Shift}} (və ya {{key:Ctrl}}, və ya ⌘) basılı tutaraq orta düymə ilə, ya da sağ düymə ilə sürükləyin ki, sürüşdürsün. Sol düymə yalnız üzləri, kənarları və müstəviləri seçir, ona görə az hərəkət edən klik detalı heç vaxt fırlatmır. Bir çox CAD proqramı bu cür işləyir.

Təkər hər iki halda göstərici üzərində yaxınlaşdırır. Eskizdə sağ və orta düymələr əvvəlki kimi sürüşdürür.

## Sürüşdürmə: siçan təkəri və ya trackpad

- **Özü müəyyən etsin** (başlanğıc): PartCraft sürüşdürməyə baxır. Trackpadın göndərdiyi yan və incə sürüşdürmə detalı fırladır; tam təkər çentikləri yaxınlaşdırır.
- **Siçan təkəri**: sürüşdürmə həmişə göstərici tərəfə yaxınlaşdırır.
- **Trackpad**: detalı fırlatmaq üçün iki barmaqla sürüşdürün, sürüşdürmək üçün {{key:Shift}} basıb sürüşdürün, yaxınlaşdırmaq üçün sıxın. Eskizdə iki barmaqla sürüşdürmə eskizi sürüşdürür.

Sıxma hər seçimdə yaxınlaşdırır. Əgər "Özü müəyyən etsin" siçanınız və ya trackpadiniz üçün səhv təxmin edirsə, sahib olduğunuzu seçin. Daha çox məlumat: [Trackpad, toxunma və kiçik ekranlar](topic:trackpad-and-touch).

## Eskiz: çəkərkən münasibətlər

**Çəkərkən münasibətlər əlavə et** (başlanğıcda açıq): tutulan nöqtəyə klik yeni nöqtəni onunla üst-üstə qoyur, əyri üzərinə klik nöqtəni həmin əyrinin üzərinə qoyur, demək olar üfüqi və ya şaquli çəkilən xətt isə üfüqi və ya şaquli olur. Bax [Münasibətlər və ölçülər](topic:relations-dimensions).

Bunu söndürün, başqa həndəsələrin yanında onlara bağlamadan həndəsə yerləşdirmək istədikdə. Göstərici yenə nöqtələrə və əyrilərə tutulur, lakin heç nə birləşdirilmir: zəncir şəklində çəkilmiş xətlər uclarını paylaşmır, buna görə sürükləmə onları ayıra bilər. Münasibətləri sağ paneldən özünüz əlavə edin. Bağlı kontur uclarının birləşdiyi yerdə yenə ekstrüziya olunur.

:::note
Bu parametr yalnız yeni çəkilən əlavəyə təsir edir. Eskizdəki mövcud münasibətlər qalır, Fillet alətü isə yenə toxunan qövsünü və radiusunu yaradır.
:::

## Eskiz: çəkərkən ölçülər

**Çəkərkən ölçü ver** (başlanğıcda açıq): xətt, düzbucaqlı, çevrə və ya qövs çəkilərkən rəqəm yazmaq göstərici yanındakı ölçü qutusunu doldurur ({{key:Tab}} növbəti qutuya keçir), {{key:Enter}} isə fiquru həmin ölçüdə çəkir və yazdığınız hər ölçü üçün idarəedici ölçü əlavə edir. Söndürülüdə çəkərkən rəqəm yazmaq heç nə etmir, fiqurlar yalnız kliklərlə çəkilir. Bax [Çəkərkən ölçünü yazın](topic:sketch-basics#type-the-size-as-you-draw).

## Künc göstəricisi

Görünüşün küncündə nə göstərilir: **Görünüş kubu** (başlanğıc; yuxarı sağda — hər hansı üzə, kənara və ya künca klikləyin ki, oradan baxasınız, orbit üçün sürükləyin, kompas halqasını sürükləyin ki, modeli fırladasınız), **Ox işarəsi** (aşağı solda, görünüşlə birlikdə fırlanan kiçik X, Y, Z işarəsi: X qırmızı, Y yaşıl, Z mavi) və ya **Heç nə**. Eskiz çəkərkən və ya çertyoj vərəqində heç biri göstərilmir. Bax [Görünüş kubu](topic:view-cube).

## Həll edici axınlar

Simulyasiya həll edicilərinin neçə axın istifadə edə biləcəyi. **Avtomatik** (başlanğıc) kompüterin məntiqi prosessorlarının sayından bir az az götürür (ən çoxu 16), beləliklə tədqiqat həll olunarkən səhifə cavab verir; və ya rəqəm seçin. Böyük voksel tədqiqatları, burkulma, zamanla gərginlik və axın bir neçə axında daha sürətli həll olunur (bizim ölçülərimizdə 80 000 kub üçün 4 axında təqribən 2×, boş kompüterdə daha çox); təxminən 20 000 naməlumdan az olan modellər bir axında qalır, çünki axınları başlatmaq qazandırdığından çox xərcləyir. Axınlı həll bir axınla eyni cavabı verir (yuvarlaqlaşdırmaya qədər: cəmlər fərqli sırayla toplanır). Hər tədqiqatın nəticələri **Həll edici** altında səbəbi ilə birlikdə **N axın** və ya **1 axın** göstərir.

Axınlar üçün səhifənin **çarpaz mənbə üzrə təcrid olunmuş** olması lazımdır (brauzer işçilərə yaddaşı yalnız belə paylaşmağa icazə verir). Laboratoriya səhifəsi belədir; belə olmayan yerdə parametr bunu deyir ("Bu səhifə çarpaz mənbə üzrə təcrid olunmayıb, ona görə həll ediciləri seçilən nə olursa-olsun bir axında işləyir.") və hər həll bir axından istifadə edir. Qalan hər şey eyni işləyir, cavablar eynidir.

Laminar axın tədqiqatları da axınlardan istifadə edir (54 000 maye hüceyrəsi üçün 4 axında təqribən 2.5×, son rəqəmədək eyni cavab). Kvadratik-tetraedr həll edicisi və istilik ötürülməsi bir axında işləyir: onların axınlara bölünməsi ölçülmüş test kompüterimizdə daha yavaş oldu (bu həll ediciləri yaddaş sürəti və bölünə bilməyən bir addım məhdudlaşdırır).

### Öz veb serveriniz üzərində

PartCraft-ı öz serverinizdən işlədirsinizsə, o necə xidmət olunursa elə işləyir. Həll edici axınları üçün serverin PartCraft səhifəsi ilə iki başlıq göndərməsini təmin edin:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Apache-də, qovluğun `.htaccess` faylında (mod_headers tələb edir):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

nginx-də PartCraft-ı xidmət edən `location` blokunda:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Səhifəni yenidən yükləyin: Parametrlər › Həll edici axınları sonra kompüterinizin sayı ilə **Avtomatik** təklif edəcək. İkinci başlıq brauzerin səhifənin başqa saytdan yüklədiyi və buna icazə verməyən hər şeyi rədd etməsinə səbəb olur; PartCraft üçün bu yaxşıdır, çünki o hər şeyi öz qovluğundan yükləyir.
