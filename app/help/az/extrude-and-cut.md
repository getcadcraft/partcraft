---
title: Gövdə ekstruziya edin və onun içindən kəsin
summary: Eskizi Ekstruziya ilə bərk cismə çevirin, kor, orta müstəvi, təpəyə qədər və ya iki istiqamətli dərinlik, konusluq və ya eskizin bir konturunu təyin edin, sonra üzdə eskiz çəkin və Kəs ilə çuxur və ya açıq yuva kəsin.
keywords: ekstruziya, gövdə, ekstruziya gövdə, kəs, ekstruziya kəsik, çuxur, hamısından keçir, kor, orta müstəvi, əks, dərinlik, kəs-ekstruziya, gövdə-ekstruziya, təbəqə, üzə qədər, növbəti üzə qədər, təpə nöqtəsinə qədər, üzdən ofset, istiqamət 2, iki istiqamət, ekstruziya zamanı konusluq, konusluq, kontur, bölgə, seçilmiş konturlar
from: 3b13ff10
---

{{ui:Ekstruziya}} eskizin bağlı profilini öz müstəvisindən düz çıxarır və material yaradır. {{ui:Kəs}} eyni işi görür, lakin material çıxarır. İkisi altda eyni xüsusiyyətdir; birini sonradan digərinə çevirə bilərsiniz.

## Gövdə ekstruziya edin

1. Bağlı profil çəkin və eskizi bağlayın (bax [İlk eskizinizi çəkin](topic:sketch-basics)). O, seçili qalır.
2. {{ui:Ekstruziya}} seçin.

10 mm bərk cisim görünür, "Extrude1" tarixçəyə öz eskizi altında girintili daxil olur və status paneli "Extrude1 əlavə edildi. Onun rəqəmlərini sağda dəyişin." deyir.

**Hansı eskiz istifadə olunur:** indicə bağladığınız eskiz və ya tarixçədə seçilmiş eskiz. Heç nə seçilməyibsə, PartCraft hələ heç bir xüsusiyyət tərəfindən istifadə olunmayan ən son eskizi götürür. Heç biri yoxdursa: "Əvvəl eskiz yaradın: müstəvi seçin, Eskiz, bağlı profil çəkin, Çıxış."

### Dərinliyi və istiqaməti təyin edin

Sağ paneldə:

| Parametr | Seçimlər | Defolt |
|---|---|---|
| **Əməliyyat** | Gövdə (material əlavə et), Kəs (material çıxar), Kəsişmə (üst-üstə düşəni saxla), Yeni gövdə (bu versiyada hələ qurulmayıb: dəqiq nüvə tələb edir) | Gövdə |
| **Son** | Kor (bir dərinlik), Orta müstəvi (hər iki tərəfə), Hamısından keçir, Üzə və ya müstəviyə qədər, Növbəti üzə qədər, Təpə nöqtəsinə qədər, Üzdən ofset | Kor (bir dərinlik) |
| **Dərinlik (mm)** | Sıfırdan böyük istənilən ölçü (Kor və Orta müstəvi üçün göstərilir) | 10 |
| **Əks istiqamət** | Eskiz müstəvisinin digər tərəfinə böyüyür (Orta müstəvi üçün göstərilmir) | Söndürülüb |

Rəqəm yazın və {{key:Enter}} və ya {{key:Tab}} basın: hissə dərhal yenidən qurulur. **Orta müstəvi** dərinliyin yarısını eskizin hər tərəfinə qoyur.

### Üzə, növbəti üzə və ya təpə nöqtəsinə qədər

Bu versiyada hələ qurulmayıb: hər "qədər" sonu dəqiq nüvə tələb edir və xüsusiyyət "Üzə, növbəti üzə və ya təpə nöqtəsinə qədər ekstruziya: hələ qurulmayıb (dəqiq nüvə tələb edir)." deyir. Ölçdüyünüz Kor dərinlikdən istifadə edin. Dəqiq nüvə ilə sonlar belə işləyir:

- **Üzə və ya müstəviyə qədər**: **Qədər** düz üz (Seçin, sonra ona klikləyin) və ya istinad müstəvisi qəbul edir. Eskizə paralel üz dəqiq dərinlik verir; maili üz sonu yamacda kəsir. Əgər üz eskizin arxasındadırsa: "… Əks istiqaməti sınayın."
- **Növbəti üzə qədər**: ekstruziyanın qarşılaşdığı gövdənin ilk düz üzündə dayanır (əyri üzlər burada dəstəklənmir: bu barədə xəbərdarlıq verilir).
- **Təpə nöqtəsinə qədər**: təpə nöqtəsi səviyyəsində dayanır (kənarın sonuna yaxın klikləyin) və ya nöqtə xüsusiyyəti.
- **Üzdən ofset**: Üzə qədər kimi, lakin üzdən **Ofset (mm)** qədər qısa dayanır (üzə perpendikulyar ölçülür).

### İki istiqamət, konusluq, bir kontur

- **İkinci istiqamət** (Kor): eskizin digər tərəfinə **İkinci dərinlik (mm)** qədər də ekstruziya edir.
- **Konusluq (°)**: yan tərəflər getdikcə içəriyə əyilir (mənfi: kənara), draft kimi; yalnız bir istiqamətdə. Bu versiyada hələ qurulmayıb (dəqiq nüvə tələb edir): 0-da qoyun.
- **Bölgələr**: **Bölgələri seçin**, sonra ekstruziya ediləcək döngələrin içinə klikləyin; yalnız həmin bölgələr istifadə olunur (kvadratın içində dairə: silindr üçün dairənin içinə, deşikli lövhə üçün aralarına klikləyin). **Hamısı** hər döngəni geri qaytarır.

Bunların altında **Eskiz ölçüləri** eskizin idarə edən ölçülərini siyahılayır, beləliklə eskizi açmadan profilin ölçülərini dəyişə bilərsiniz.

:::note
**Hamısından keçir yalnız kəsmələr üçündür.** Gövdə üçün təyin olunmuş Hamısından keçir "Hamısından keçir kəsmələr üçündür. Gövdə üçün dərinlik istifadə edin." mesajı ilə uğursuz olur. Xüsusiyyəti Kəs-dən Gövdə-yə qaytardıqda Hamısından keçir sizin üçün Kor-a dəyişir.
:::

## Çuxur kəsin

1. Kəsmək istədiyiniz düz üzə klikləyin. O işıqlanır və sağ panel **Üz** yazır.
2. {{ui:Bu üzdə eskiz}} seçin (və ya alətlər panelində {{ui:Eskiz}}).
3. Çuxurun konturunu çəkin, məsələn düzbucaqlı, və ölçülərini təyin edin.
4. {{ui:Çıxış}} seçin.
5. {{ui:Kəs}} seçin. O, **Hamısından keçir** ilə başlayır: hissənin içindən bütün yolla material çıxarır.
6. Çuxur üçün **Son**-u **Kor (bir dərinlik)** təyin edin və **Dərinlik (mm)**-i yazın.

Kəsik materialın içinə, eskizlədiyiniz üzdən uzağa doğru gedir. Status paneli "Eskizin o tərəfində kəsəcək heç nə yoxdur. Digər istiqaməti sınayın." deyirsə, **Əks istiqamət**-i işarələyin.

Çuxurun dibindəki eskiz dibi izləyir: çuxurun dərinliyini dəyişdikdə eskiz də onunla birlikdə hərəkət edir.

## Bütün üzü irəli çıxarın və ya itələyin

Üzün və ya çıxıntının konturunu çəkmək lazım deyil. Düz üzə klikləyin, sonra sağ paneldə:

- {{ui:Ondan ekstruziya}} üzü irəli çıxarır: PartCraft üzdə konturu saxlayan eskiz (üzdəki deşiklər deşik olaraq qalır) və 10 mm Ekstruziya əlavə edir.
- {{ui:İçəri kəs}} üzü içəri itələyir: eyni eskiz və hissənin yarısına qədər Kəs.

Hər ikisi bir addımdır: {{key:Mod+Z}} eskizi və xüsusiyyəti birlikdə geri götürür. Yeni xüsusiyyət seçilir, buna görə dərhal rəqəm yazın və dərinlik üçün {{key:Enter}} basın. Kontur sabit xətlər və qövslər kimi kopyalanır: üzdə sonradan edilən dəyişikliklərə əməl etmir. Konturun bir hissəsi kopyalana bilmirsə (sərbəst formalı əyri), eskiz kopyalanan hissə ilə açılır; onu bitirin, sonra {{ui:Çıxış}} və {{ui:Ekstruziya}} və ya {{ui:Kəs}} seçin.

## Adalı profillər

Eskizdə bir neçə bağlı döngə ola bilər. Yan-yana döngələr ayrıca gövdələr (və ya kəsmələr) olur; başqa döngənin içindəki döngə gövdədən keçən deşik olur. Məsələn, içində iki dairə olan düzbucaqlı iki deşikli lövhə kimi ekstruziya olunur.

Yalnız bəzi döngələri istifadə etmək üçün onları yuxarıdakı **Bölgələr** ilə seçin; başqa xüsusiyyət eyni eskizin digər döngələrindən istifadə edə bilər.

## Sonra redaktə edin

- Parametrlərini geri gətirmək üçün tarixçədə "Extrude1"-ə klikləyin.
- Onun eskizini (altında girintili) iki dəfə klikləyib açın; qurmaq üçün bağlayın.
- Söndürmək, geri qaytarmaq, sıralamaq və silmək üçün bax [Hissəni tarixçəsi vasitəsilə dəyişdirin](topic:edit-history).

## Ümumi mesajlar

| Mesaj | Nə etməli |
|---|---|
| "Eskizdə ekstruziya ediləcək bağlı profil yoxdur." | Eskizdə bərk xətlərin bağlı döngəsi yoxdur. Boşluqları bağlayın, və ya {{key:Q}} ilə konstruktiv xətləri geri çevirin |
| "Profil açıqdır: (x, y) nöqtəsindəki uc heç nəyə birləşdirilməyib." | Eskizi açın və həmin ucu növbəti xəttə birləşdirin |
| "Kəsəcək hələ heç nə yoxdur." | Kəsmək üçün kəsiləcək bərk cisim lazımdır. Əvvəl Kor gövdə yaradın |
| "Bundan sonra hissədən heç nə qalmır." | Kəsmə hər şeyi çıxardı. Ölçüsünü və istiqamətini yoxlayın |

Daha çox: [Problemlərin həlli](topic:troubleshooting).
