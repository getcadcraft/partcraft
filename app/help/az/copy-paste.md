---
title: Kopyalama, yapışdırma və surət çıxarma
summary: Eskiz həndəsəsini, xüsusiyyətləri və yığım detallarını kopyalayın; klik etdiyiniz yerdə və ya yerində yapışdırın; bir addımda surət çıxarın və surətlə nələrin gəldiyini və gəlmədiyini öyrənin.
keywords: kopyalama, yapışdırma, kəsmə, surət çıxarma, bufer, yerində yapışdır, hamısını seç, heç birini seçmə, silmə, ctrl c, ctrl v, ctrl d, nüsxə, komponent, eskizi kopyala, xüsusiyyəti kopyala, detalı kopyala
from: 611307d7
---

Alətlər panelindəki {{ui:Redaktə et}} qrupunda {{ui:Geri qaytar}}, {{ui:Təkrarla}}, {{ui:Kopyala}}, {{ui:Yapışdır}} və {{ui:Daha çox}} menyusu var: {{ui:Kəs}}, {{ui:Kopyala}}, {{ui:Yapışdır}}, {{ui:Yerində yapışdır}}, {{ui:Surət}}, {{ui:Sil}}, {{ui:Hamısını seç}} və {{ui:Heç birini seçmə}}, hər birində öz düyməsi ilə. Nəyi kopyaladıqları harada olduğunuzdan asılıdır: açıq eskizdə həndəsə, tarixçədə xüsusiyyət və ya yığımda detal.

Boz rənglənmiş element hazırda işləyə bilməz. Üzərinə gətirin: alətin ipucu səbəbi deyir, məsələn "Əvvəl eskiz həndəsəsini seçin" və ya "Buferdə Sketch2 və Extrude2 var: xüsusiyyətlər tarixçəyə yapışır, ona görə əvvəl eskizdən çıxın".

| Əməliyyat | Düymə | Eskizdə | Tarixçədə | Yığımda |
|---|---|---|---|---|
| Kopyala | {{key:Mod+C}} | Seçilmiş nöqtələr və əyrilər | Seçilmiş eskiz, ekstruziya, fırlatma və ya deşik (öz eskizi ilə) | Seçilmiş detal |
| Kəs | {{key:Mod+X}} | Kopyalayır, sonra silir | Kopyalayır, sonra xüsusiyyəti silir | Kopyalayır, sonra detalı çıxarır |
| Yapışdır | {{key:Mod+V}} | Surət göstəricini izləyir; yerini təyin etmək üçün klik edin | Surəti tarixçənin sonuna əlavə edir | Digər detalların yanında yeni surət |
| Yerində yapışdır | {{key:Mod+Shift+V}} | Eyni koordinatlarda | Yapışdır ilə eynidir | Kopyalanmış detalın eyni yerində |
| Surət | {{key:Mod+D}} | Bir addımda kopyalayır və köçürür; bufer toxunulmaz qalır | Dərhal sonra ikinci surət | Digər detalların yanında ikinci surət |
| Sil | {{key:Delete}} | Seçim | Xüsusiyyət (başqaları istifadə edirsə soruşur) | Detal və ya birləşmə |
| Hamısını seç | {{key:Mod+A}} | Eskizdə hər şey | Mövcud deyil | Mövcud deyil |
| Heç birini seçmə | {{key:Esc}} | Seçimi təmizləyir | Seçimi və seçmələri təmizləyir | Seçimi təmizləyir |

Hər yapışdırma, surət və kəsmə geri qaytarma siyahısında bir addımdır: {{key:Mod+Z}} onu geri alır, {{key:Mod+Y}} onu geri qaytarır.

## Eskizdə

1. Nəyi kopyalayacağınızı seçin: klik edin, daha çoxu üçün {{key:Shift}}+klik edin, pəncərə ilə sürükləyin və ya hamısı üçün {{key:Mod+A}} basın.
2. {{key:Mod+C}} basın və ya {{ui:Kopyala}} seçin. Status paneli nəyin kopyalandığını bildirir.
3. {{key:Mod+V}} basın və ya {{ui:Yapışdır}} seçin. Kəsik-kəsik surət göstəricini izləyir və ortasından tutulur. Nöqtələrə yapışır: kopyalanmış çevrənin mərkəzini həmin nöqtəyə klik edərək qoyun.
4. Yerini təyin etmək üçün klik edin. Yapışdırılmış həndəsə seçilmiş qalır, buna görə onu dərhal sürükləyə və ya əlaqələr əlavə edə bilərsiniz. {{key:Esc}} yapışdırmanı ləğv edir.

Nələr surətlə birlikdə gəlir:

- Kopyalanmış xətt, çevrə və ya qövs öz son nöqtələrini və mərkəzini özü ilə gətirir.
- Kopyalanmış elementlər **arasındakı** əlaqələr və ölçülər birlikdə gəlir: kopyalanmış düzbucaqlı hələ də düzbucaqlıdır, ölçüləri ilə.
- Kopyalamadığınız həndəsəyə **və** başlanğıca olan əlaqələr atılır. Status paneli onları sayır: "Surətdən kənar həndəsəyə 2 əlaqə gəlməyəcək". Beləliklə, yapışdırılmış surət əlaqələr və ya ölçülərlə bağlanana qədər hərəkət edə bilər.
- Sabit nöqtə yeni yerində sabit qalır.

{{ui:Yerində yapışdır}} surəti bu eskizdə və ya başqasında orijinalın koordinatlarına dəqiq qoyur: profili bir eskizdən digərinə gətirmək üçün əlverişlidir. Eyni eskizdə surət orijinalın üstündə qalır; onu kənara sürükləyin.

{{ui:Surət}} ({{key:Mod+D}}) seçimi kopyalayır və dərhal yerləşdirməyə başlayır, buferdə olanlara toxunmadan.

:::tip
Deşik mərkəzini və ya yuvanı bir neçə dəfə təkrarlamaq üçün onu bir dəfə kopyalayın və bir neçə dəfə yapışdırın: hər {{key:Mod+V}} göstəricini izləyən yeni surət başladır.
:::

## Tarixçədə

1. Tarixçədə eskiz, ekstruziya, fırlatma və ya deşikə klik edin.
2. {{key:Mod+C}} onu kopyalayır. Eskiz əsaslı xüsusiyyət öz eskizi ilə birlikdə kopyalanır.
3. {{key:Mod+V}} surəti tarixçənin sonuna əlavə edir (geri qaytarmısınızsa geri qaytarma çubuğunda), Sketch3 və Extrude2 kimi yeni adlarla.

Surət orijinal ilə eyni müstəvidə və ya üzdə yerləşir, buna görə onun üstündə qurulur və detal eyni görünür. Surəti köçürmək üçün yeni eskizi seçin və sağ paneldə onun müstəvisini dəyişin, ya da onu açın və profili sürükləyin və ya yenidən ölçün.

- **Başqa detala** yapışdırın: həmin detalı açın və {{key:Mod+V}} basın. Surətin eskizi həmin detalda olmayan üzdə olduqda, o, ön müstəvidə yerləşir və status paneli bunu deyir.
- {{ui:Surət}} eyni detalın daxilində kopyalama və yapışdırmanı bir addımda edir.
- {{ui:Kəs}} xüsusiyyəti kopyalayır, sonra onu silir (başqa xüsusiyyətlər istifadə edirsə əvvəlcə soruşur).

Massivlər, güzgülər, yuvarlaqlaşdırmalar, faskalar, qabıqlar və idxal olunmuş bərk cisimlər kopyalana bilməz: onlar bu detalda seçilmiş kənarlardan, üzlərdən və ya xüsusiyyətlərdən asılıdır. Onların əsasında qurulduğu eskizi və ya xüsusiyyəti kopyalayın, ya da onu {{ui:Xətti}} və ya {{ui:Dairəvi}} ilə massivləşdirin.

## Yığımda

1. Görünüşdə və ya soldakı siyahıda detala klik edin.
2. {{ui:Surət}} ({{key:Mod+D}}) seçin və ya {{key:Mod+C}}, sonra {{key:Mod+V}} basın.

Yeni surət **eyni detaldır**: birini redaktə edin və hər surət dəyişir. Yığımda artıq olan hər şeyin 20 mm sağında görünür, surətlə eyni istiqamətdə çevrilir və birləşmə onu yerləşdirənə qədər orada qalır. {{ui:Yerində yapışdır}} ({{key:Mod+Shift+V}}) onu kopyalanmış detalın dəqiq olduğu yerə qoyur; onu köçürmək üçün birləşdirin (sürüşən birləşmənin ofseti onu boyunca itələyir).

Başqa yığımdan kopyalanmış detalın yapışdırılması detalı özü ilə gətirir, faylından {{ui:Daxil et}} kimi. Yığım qrupundakı {{ui:Surət əlavə et}} {{ui:Surət}} ilə eyni işi görür və heç nə seçilmədikdə işləyir (sonuncu detalın surətini çıxarır).

## Bufer

- Bu PartCraft-ın öz buferidir, kompüterinki yox: PartCraft həndəsəsini başqa proqrama və ya mətni PartCraft görünüşlərinə yapışdıra bilməzsiniz.
- Bu brauzerdə saxlanılır, ona görə başqa PartCraft nişanı kopyaladığınızı yapışdıra bilər. Açılmış fayl kimi yenidən oxunur və yoxlanılır; zədələnmiş və ya başqa versiyadan olan hər şey rədd edilir.
- İdxal edilmiş böyük STEP faylı olan detal brauzerin saxlaya bilməyəcəyi qədər böyük ola bilər: belə halda yalnız bu nişanda yapışdırılır.
- Rəqəm qutusunda və ya kömək axtarışında {{key:Mod+C}} və {{key:Mod+V}} adi kimi mətni kopyalayır və yapışdırır.

Çertyoj vərəqində kopyalama və yapışdırma hələ mövcud deyil; {{ui:Sil}} və {{ui:Heç birini seçmə}} seçilmiş simvolda işləyir. Bax: [Hələ qurulmayanlar](topic:not-built-yet).
