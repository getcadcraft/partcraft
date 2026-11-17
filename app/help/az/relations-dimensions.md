---
title: Eskizi əlaqə və ölçülərlə tam təyin edin
summary: Sağ paneldən əlaqələr və Ölçü aləti ilə ölçülər əlavə edin, az təyin olunmuş, tam təyin olunmuş və artıq təyin olunmuş rənglərini oxuyun və artıq təyin olunmuş eskizi düzəldin.
keywords: əlaqələr, məhdudiyyətlər, ölçülər, ağıllı ölçü, tam təyin olunmuş, az təyin olunmuş, artıq təyin olunmuş, azadlıq dərəcəsi, üst-üstə düşmə, şaquli, üfüqi, paralel, perpendikulyar, toxunan, bərabər, eyni mərkəzli, orta nöqtə, sabitlə, ziddiyyət, artıqlıq
from: e76d047a
---

Eskiz nöqtələrinin və ölçülərin hər biri əlaqə və ölçülərlə sabitləşdirildikdə eskiz **tam təyin olunmuş** hesab olunur. Tam təyin olunmuş eskiz yalnız bir rəqəm dəyişdikdə dəyişir, beləliklə detalı sonradan redaktə edəndə davranışı proqnozlaşdırıla bilər. PartCraft eskizi tam təyin etməyə məcbur etmir, amma nə qədər yaxın olduğunuzu həmişə göstərir.

## Eskizin vəziyyətini oxuyun

Vəziyyət üç yerdə göstərilir: görünüşün sol yuxarısındakı çip, sağ panelin yuxarısındakı mesaj və tarixçədəki bayraq.

| Vəziyyət | Çip | Həndəsənin rəngi | Nə deməkdir |
|---|---|---|---|
| Az təyin olunmuş | "Az təyin olunub · 3 azadlıq dərəcəsi" | Mavi | Bəzi həndəsə hələ hərəkət edə bilər. Hansı istiqamətdə getdiyini görmək üçün mavi həndəsəni sürüşdürün |
| Tam təyin olunmuş | "Tam təyin olunub" | Qara (Paper-də qara, Model-də açıq) | Hər nöqtə və ölçü sabitdir |
| Artıq təyin olunmuş | "Artıq təyin olunub" | İştirak edən əlaqələrdə qırmızı | Bəzi əlaqələr bir-biri ilə ziddiyyət təşkil edir, və ya biri digərlərindən artıq nəticə çıxır |

Konstruksiya həndəsəsi vəziyyətindən asılı olmayaraq boz və qırıq olur. Seçilmiş elementlər narıncı olur. "Azadlıq dərəcəsi" nəyinsə hələ hərəkət edə biləcəyi bir yoldur: azad nöqtənin iki (sağa-sola və yuxarıya-aşağıya), azad çevrənin üç (mərkəzi və radiusu) var.

Sağ paneldəki mesajın altındakı izah rənglərini təkrarlayır.

## Ölçü əlavə edin

1. {{key:D}} basın və ya {{ui:Ölçü}} seçin.
2. Ölçmək istədiyinizə klikləyin:
   - **bir xətt**: onun uzunluğu;
   - **bir çevrə**: diametri; **bir qövs**: radiusu;
   - **iki nöqtə** (uc nöqtə, mərkəz, sərbəst nöqtə və ya başlanğıc): aralarındakı məsafə;
   - **nöqtə və xətt**: nöqtədən xəttə məsafə;
   - **iki paralel xətt**: aralarındakı məsafə; **bucaq altında iki xətt**: aralarındakı bucaq.
3. Bir elementdən sonra status çubuğu deyir: "İkinci elementə klikləyin, və ya ölçünün yerləşəcəyi yerə klikləyin." İkinci elementə klikləyin, və ya rəqəmin istədiyiniz yerinə boş sahədə klikləyin.
4. Cari dəyəri olan rəqəm qutusu açılır. Ölçünü yazın və {{key:Enter}} basın. {{key:Esc}} ölçülmüş dəyəri saxlayır.

Maili xətt və ya iki nöqtə üçün **rəqəmi harada yerləşdirdiyiniz növü müəyyən edir**: üfüqi məsafə üçün yuxarıya və ya aşağıya, şaquli məsafə üçün sola və ya sağa, həqiqi (düzülmüş) məsafə üçün isə başqa yerə yerləşdirin.

Qutu millimetr və ya dərəcə ilə sadə ədədləri qəbul edir, məsələn `25`, `12.5` və ya `1e3`. Əvvəldəki `⌀`, `Ø` və ya `R`, və ya sondakı `mm` və ya `°` nəzərə alınmır. Bucaqlar 0-dan 180 dərəcəyə qədərdir. `20+5` kimi hesab-əməllər qəbul olunmur; ölçünü dəyişənə və ya düsturla əlaqələndirmək üçün onu `=` ilə başlayın.

Ölçünü sonradan dəyişmək üçün eskizdə onun rəqəminə iki dəfə klikləyin, və ya sağ paneldəki siyahıda onun yanında **Redaktə et** seçin.

:::tip
Həndəsəni əvvəlcədən də seçə bilərsiniz (Seç aləti) və sağ paneldə ölçü düymələrindən birini seçin: {{ui:Məsafə}}, {{ui:Üfüqi məsafə}}, {{ui:Şaquli məsafə}}, {{ui:Radius}}, {{ui:Diametr}} və ya {{ui:Bucaq}}. Yalnız seçimə uyğun gələnlər göstərilir. Çevrəyə diametr əvəzinə radius vermək üçün bu yoldur.
:::

## Əlaqə əlavə edin

Əlaqələr alətlə yox, sağ paneldən əlavə olunur.

1. Seç üçün {{key:S}} basın.
2. Bir elementə klikləyin, əlaqə iki element tələb edirsə, ikinci elementə {{key:Shift}}+klik edin. Başlanğıc nöqtəsi də seçilə bilər.
3. Sağ paneldə "Seçildi: xətt l3, nöqtə p1" yazılır və uyğun gələn hər əlaqə üçün düymə göstərilir, məsələn {{ui:∥ Paralel}} və ya {{ui:• Üst-üstə düşmə}}.
4. Düyməni seçin. Eskiz dərhal həll olunur.

Heç bir əlaqə uyğun gəlmirsə, panel deyir: "Bu seçimə uyğun əlaqə yoxdur. Bir və ya iki element seçin (Shift+klik əlavə edir)."

Bütün əlaqələrin siyahısı, hər birinin nəyə ehtiyacı olduğu və nə etdiyi [Eskiz əlaqələri və ölçüləri](topic:sketch-relations) bölməsindədir.

Əlaqələr eskizdə həndəsənin yanında kiçik simvollar kimi göstərilir (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Üst-üstə düşmə nöqtələri həndəsə seçilməyibsə və ya əlaqə problemlidirsə gizlədilir. Əlaqəni seçmək üçün simvola klikləyin.

## Nümunə: L formalı kronşteyn profili

1. **Ön müstəvi** üzərində eskiz çəkin. Xətt aləti ilə başlanğıc nöqtədən başlayın, L-nin altı küncünə klikləyin və sonda yenidən başlanğıc nöqtədə bitirin. Zəncir ilk nöqtəyə klikləyəndə özü bitir.
2. Üfüqiyə və ya şaquliyə yaxın çəkilən xətlərin artıq H və V əlaqələri var, sonuncu xətt istisna olmaqla: mövcud nöqtədə bitən xəttə avtomatik əlaqə verilmir. {{key:S}} basın, son xəttə klikləyin və sağ paneldə {{ui:V Şaquli}} seçin. Çipdə "Az təyin olunub · 4 azadlıq dərəcəsi" yazılır.
3. {{key:D}} basın. Alt xəttə klikləyin, altına klikləyin, `80` yazın və {{key:Enter}} basın.
4. Sol xəttə klikləyin, soluna klikləyin, `60` yazın və {{key:Enter}} basın.
5. Yuxarıdakı qısa xətti `20`, daxili şaquli xətti isə `45` ilə eyni qayda ilə ölçün.
6. İndi çipdə **Tam təyin olunub** yazılır və bütün L qara olur.

## Artıq təyin olunmuş eskizi düzəldin

Yeni əlaqə və ya ölçü digərləri ilə ziddiyyət təşkil edəndə PartCraft heç nəyi hərəkət etdirmir. Həndəsə olduğu kimi qalır, iştirak edən əlaqələr qırmızı olur və status çubuğu onları adlandırır:

- "Artıq təyin olunub: Üfüqi, Məsafə 40 eyni anda ödənilə bilməz. Geri qaytarın və ya onlardan birini silin." Əlaqələr ziddiyyət təşkil edir.
- "Artıq təyin olunub: Paralel artıq nəzərdə tutulub. Onu silin." Əlaqə heç nə əlavə etmir: digərləri onu artıq təmin edir. (Məsələn, düzbucaqlının tərəfləri artıq paraleldir.)

Düzəltmək üçün:

1. {{key:Mod+Z}} basaraq son dəyişikliyi geri qaytarın, və ya
2. sağ paneldəki **Əlaqələr və ölçülər** siyahısında qırmızı elementi tapın (onu saxlayan qrup açıqdır və adı qırmızıdır) və yanındakı **Sil** seçin. Eskizdə onun simvoluna və ya rəqəminə klikləyib {{key:Delete}} basa da bilərsiniz.

:::note
Bu quruluşda "idarə olunan" (referans) ölçülər yoxdur. Yalnız digər əlaqələrin artıq sabitlədiyi ölçüsünü göstərəcək ölçü artıq təyin olunmuş sayılır. Ölçüləri əvəzinə paneldən oxuyun: xətti seçin və Ölçü düymələrinə baxın, və ya ekstrüziyadan sonra detalın faktlarını yoxlayın.
:::

Həqiqi ziddiyyəti olan artıq təyin olunmuş eskiz onu istifadə edən xüsusiyyəti uğursuz edir ("Artıq təyin olunub: 1 əlaqə eyni anda ödənilə bilməz."), tarixçə isə onu **⚠ xəta** kimi işarələyir. Yalnız artıqlığı olan eskiz hələ də qurulur, ⚠ xəbərdarlıqla.

## Azad olanı tapmaq üçün sürüşdürün

Seç rejimində istənilən mavi nöqtəni və ya xətti sürüşdürün. Həll edici hər əlaqəni saxlayaraq onu mümkün qədər az hərəkət etdirir. Sürüşdürmə əlaqəni pozarsa, həndəsə geri qayıdır. Hansı ölçünün hələ çatışmadığını görməyin ən sürətli yoludur.

## Əlaqələr siyahısı

Heç nə seçilmədikdə, sağ paneldə **Əlaqələr və ölçülər** siyahısı göstərilir. Hər sətirdə var:

- **Redaktə et** (yalnız ölçülər üçün): rəqəm qutusunu açır;
- **Seç**: eskizdə onu seçir;
- **Sil**: onu silir.

Eyni növdən bir neçə dəfə görünən əlaqələr bir sətiri paylaşır, məsələn başlanğıca bağlı düzbucaqlı üçün "Üst-üstə düşmə × 5". Açmaq üçün sətirə klikləyin: hər əlaqə bağladığı şeylə ("nöqtə p2, nöqtə p4") öz **Seç** və **Sil** düymələri ilə sadalanır. Sətirin özündə:

- **Seç**: hamısını eskizdə seçir;
- **Hamısını sil**: hamısını bir addımda silir ({{key:Mod+Z}} onları geri qaytarır).

Artıq təyin olunmuş əlaqə saxlayan qrup özü açılır və adı qırmızı olur. Ölçülər həmişə hər sətirdə bir ədəd olaraq, dəyərləri ilə sadalanır.

Həndəsə seçiləndə siyahıda yalnız **Seçimdəki əlaqələr** göstərilir.
