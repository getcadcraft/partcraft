---
title: Fırlanan hissəni fırlatma
summary: Mərkəz xəttinin yanında profilin yarısını çəkin, onu fırlanan hissəyə fırladın, ox və bucağı seçin, oyuqlar üçün fırladılmış kəsikdən istifadə edin.
keywords: fırlatma, fırladılmış çıxıntı, fırladılmış kəsik, fırlanan hissə, torna, şaft, ox, mərkəz xətti, oyuq, bucaq, rev cut
from: 593b6929
---

{{ui:Revolve}} profili bir ox ətrafında fırladır, torna dəzgahında hazırlanan hissə kimi: şaftlar, kasnaqlar, flanslar, düymələr. Fırladılmış kəsik (Elementlər qrupunun {{ui:More}} menyusunda) oyuqlar və çökəkliklər üçün materialı çıxarmaq məqsədilə profili fırladır.

## Pilləli şaftı fırladın

1. **Ön müstəvi** üzərində eskiz çəkin.
2. Mərkəz xətti üçün {{key:N}} basın, {{ui:Centerline}} seçin. Başlanğıc nöqtədən başlayın və sağa doğru düz, məsələn 100 mm məsafədə klikləyin. Bu ox-dur. Kəsikli xəttdir: konstruksiya həndəsəsi profilin hissəsi deyil.
3. Xətt üçün {{key:L}} basın. Profilin **yarısını** mərkəz xəttinin üstündə bir qapalı kontur kimi çəkin: mərkəz xəttindən başlayın, yuxarı qalxın, addım atın və mərkəz xəttinə geri enin, sonra başlanğıca qədər onun boyunca gedin. Uclar birləşməlidir: kontur qapalı olmalıdır.
4. Radiusları (mərkəz xəttindən yüksəkliklər) və uzunluqları ölçün. Mərkəz xəttindən 10 yüksəklik 20 diametr verir.
5. {{ui:Exit}} seçin.
6. {{ui:Revolve}} seçin. Şaft tam dövrə ilə görünür.

Profil oxun bir tərəfində qalmalıdır. Keçərsə: "Profil oxu kəsir. Onu mərkəz xəttinin bir tərəfində saxlayın." Profil kənarı oxun üzərində ola bilər.

## Parametrlər

| Parametr | Nə edir | Standart |
|---|---|---|
| **Əməliyyat** | Çıxıntı (material əlavə edir), Kəsik (materialı çıxarır), Kəsişmə (üst-üstə düşən hissəni saxlayır) və ya Yeni cisim | {{ui:Revolve}} üçün Çıxıntı, {{ui:More}} › {{ui:Revolved cut}} üçün Kəsik |
| **Bucaq (°)** | Nə qədər fırlanacağı, 0-dan bir az yuxarıdan 360-a qədər | 360 |
| **Ox** | Birinci mərkəz xətti, və ya eskizdəki istənilən xətt və ya mərkəz xətti, "Mərkəz xətti 1 (l1)" və ya "Xətt 3 (l3)" kimi | Birinci mərkəz xətti |

Qismən bucaq, eskiz müstəvisindən bir istiqamətdə fırladılmış pazlı yaradır.

Eskizdə mərkəz xətti yoxdursa və **Ox** Birinci mərkəz xəttində qalırsa: "Fırlatmaq üçün eskizdə mərkəz xətti (konstruksiya xətti) çəkin." Profilin bərk xəttini ox kimi də seçə bilərsiniz.

## Oyuq kəsin

1. Şaft qurulduqdan sonra **Ön müstəvi** üzərində yeni eskiz açın (şaftın eskizi ilə eyni müstəvi).
2. Eyni ox boyunca mərkəz xətti çəkin: başlanğıc nöqtədən başlayın və səviyyədə saxlayın ki, H alsın, və ya **Koordinatlarla əlavə et** ilə yazın (məsələn `0, 0`-dan `100, 0`-a). Yeni eskiz başqa eskizin xətlərinə yapışa bilməz.
3. Oyuğun getdiyi şaft kənarı üzərində üst-üstə düşən kiçik qapalı düzbucaqlı çəkin.
4. {{ui:Exit}} seçin, sonra {{ui:More}} › {{ui:Revolved cut}}.

## Yığımlarda fırlanan üzlər

Fırlatmanın digər elementlərin və yığımların istifadə edə biləcəyi oxu var:

- **Dairəvi** naxış standart olaraq son fırlatmanın oxunu istifadə edir ([Naxış və güzgü elementləri](topic:patterns-mirror) bölməsinə baxın);
- yığımda fırlatmalarla yaradılmış üzlər arasında birləşmə standart olaraq **fırlanan** birləşmə kimi başlayır və **Mərkəzləşdir** üçün "Revolve1 oxu" təklif olunur (bax: [Yığım qurun](topic:build-assembly)).

## Əyri həqiqətlər və fasetlər

PartCraft fırlatmanı mesh nüvəsi ilə qurur (status sətrindəki çip "Mesh kernel" yazır): dəyirmi formalar düz fasetlərdir, standart olaraq dövrədə 64, və həcmlər həqiqi qiymətdən bir az aşağıdır (64-də təxminən 0,16 %). Görünüş, STL, 3MF və STEP ixracları həmin fasetlərdən ibarətdir: daha hamar üçün **Əyrilər**i (boş yerə klikləyin, sonra sağ panel) İncə (128) və ya Çox incə (256) təyin edin. Həqiqi silindrlər, konuslar və torlar dəqiq nüvə tələb edir: bu versiyada hələ qurulmayıb. Bax: [Mesh nüvəsi](topic:solid-kernels).
