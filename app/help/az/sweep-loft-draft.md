---
title: Süpürmə, loft və qaralama
summary: Qapalı profili səciyyə əyrilərindən və ya model kənarlarından ibarət yol boyunca süpürün, müxtəlif müstəvilərdəki kəsiklər arasında loft edin və üzlərə qaralama əlavə edin; seçimlər, dəqiq nəticələr və mesajlarla birlikdə.
keywords: süpürmə, süpürülmüş bürünc, süpürülmüş kəsik, boru, yol, loft, loft edilmiş bürünc, kəsikləri qarışdırmaq, xətti, qaralama, qaralama bucağı, konus üzləri, neytral müstəvi, çəkmə istiqaməti, qəlib
from: 9d637981
---

:::note
**Bu versiyada** süpürmə və loft hələ qurulmayıb: onlar dəqiq həndəsə nüvəsi tələb edir, PartCraft-ın bu versiyasında isə belə nüvə yoxdur. [Hələ qurulmayanlar](topic:not-built-yet) nə etmək lazım olduğunu göstərir; Süpürmə və Loft bölmələri onları dəqiq nüvə ilə necə işlədiyini təsvir edir. **Qaralama işləyir** düz üzlərdə: mesh nüvəsi onu qurur, dəqiq nüvənin verdiyi nəticənin eyni olduğu ilə.
:::

Üçü də Xüsusiyyətlər qrupunun {{ui:Daha çox}} menyusundadır (bax [Mesh nüvəsi](topic:solid-kernels)). Hər biri materialı birləşdirə, kəsə, yalnız üst-üstə düşən hissəni saxlaya (**Kəsişmə**) və ya **Yeni gövdə** yarada bilər (süpürmə və loft üçün: paneldə **Əməliyyat**).

## Süpürmə

Süpürmə qapalı profili yol boyunca hərəkət etdirir: borular, dəstəklər, məftil yaylar, relslər.

1. **Yolu** bir eskizdə çəkin: uc-uca birləşmiş xətt və qövslər (və ya aşağıda göstərildiyi kimi model kənarları).
2. **Profili** başqa eskizdə çəkin, onun müstəvisi yolun bir ucundan keçsin, məsələn ön müstəvidə çəkilmiş yolun başlanğıcında üst müstəvidə dairə.
3. Profil eskizini seçin və {{ui:Daha çox}} menyusundan {{ui:Süpürmə}} seçin. Ən son digər eskiz yola çevrilir.

Paneldə:

| Parametr | Nə edir |
|---|---|
| **Yol** | Yolu təşkil edən eskizləri işarələyin (bir neçə eskiz uc-uca birləşərək bir 3D yol yaradır); **Model kənarlarını seçin** detalın kənarlarını əlavə edir |
| **Oriyentasiya** | Yolu izləmək (standart), Frenet, Sabit (kəsiklər profilə paralel qalır), İstiqaməti saxlamaq, Yönləndirici əyri boyunca |
| **Son miqyas** | Profil sondakı ölçüyə xətti böyüyür və ya kiçilir (1 = sabit) |

Yoldakı kəskin künclər bucaqlı birləşmə ilə kəsilir. Radiusu 5 olan dairə 100 mm xətt boyunca süpürülərsə, dəqiq 2500π mm³ həcmli silindr alınır; radiusu 50 olan dörddəbir qövs boyunca isə 625π² mm³ həcmli dörddəbir torus.

## Loft

Loft müxtəlif müstəvilərdəki iki və ya daha çox kəsik arasında hamar keçid yaradır.

1. Hər kəsiyi öz eskizində çəkin (hər birində bir qapalı kontur), əsas müstəvilərdə, köməkçi müstəvilərdə (bax [Köməkçi müstəvilər, oxlar və nöqtələr](topic:reference-geometry)) və ya üzlərdə.
2. {{ui:Daha çox}}, sonra {{ui:Loft}} seçin. İstifadə olunmayan hər bir bir konturlu eskiz tarixçə sırası ilə kəsiyə çevrilir.

Panel kəsikləri sıra ilə göstərir (**Yuxarı** sırasını dəyişir, **Sil** birini çıxarır); **Eskiz əlavə et** başqa eskiz əlavə edir, **Üz seç** detalın düz üzünü əlavə edir. **Xətti** kəsiklər arasında hamar qarışıq əvəzinə düz üzlər yaradır. İki kvadrat arasında hər ikisi eyni kəsik konusdur (30 mm yüksəklikdə 40 mm kvadratdan 20 mm kvadrata: dəqiq 28000 mm³).

Müxtəlif sayda tərəfli kəsiklər (kvadratdan üçbucağa) OpenCascade tərəfindən uyğunlaşdırılır, bu isə yan üzləri burub-əyə bilər; xüsusiyyət xəbərdarlıq edir. Ən təmiz nəticə üçün eyni sayda tərəfi olan kəsikləri uyğun künclərdən başlayaraq çəkin.

### Yönləndirici relslər

Yönləndirici relslər loftun yan tərəflərinin birinci kəsikdən sonuncuya qədər izləməli olduğu əyrilərdir; özünüz çəkdiyiniz bir qabarma, bel və ya genişlənmə üçün.

1. Birdən çox relsi çəkin: birinci kəsikdən sonuncuya qədər gedən və hər kəsiyi bir dəfə kəsən açıq əyrilər (xətt, qövs, spline). Bir eskizdə bir neçə rels ola bilər: onun hər ayrı zənciri öz relsidir. Relsi hər kəsiklə düzgün görüşdürün: uclarını kəsiklərin nöqtələrinə yapışdırın.
2. Loft panelində **Yönləndirici relslər** altında onları saxlayan eskizləri işarələyin və ya {{ui:Model kənarlarını relslər kimi seçin}} düyməsinə basıb detalın kənarlarına klik edin ({{key:Esc}} bitirir).

Relslərlə loft kəsiklər və relslər vasitəsilə keçən Gordon səthidir (bax [Əyri şəbəkəsi ilə səthlər](topic:gordon-surfaces)), hər iki ucdan düzləşdirilərək bərk cismə çevrilir. Panel onları nə qədər dəqiq izlədiyini göstərir. Bu halda hər kəsik eskiz olmalıdır (nöqtə və ya üz relsi qəbul edə bilməz) və **Xətti** tətbiq olunmur. Hər hansı rels kəsikdən 0.01 mm-dən çox kənarda qalarsa, boşluq göstərilməklə rədd edilir.

Yoxlanılıb: 40 mm məsafədə iki dairə (diametrləri 20 mm və 10 mm) dörd düz relslə konus kəsiyin həcmini 0.000002 % dəqiqliklə verir; 5 mm çıxıntılı qövslər hər relsi 0.00001 mm dəqiqliklə izləyən çəllək verir.

## Qaralama

Qaralama detalın qəlibdən çıxması üçün üzləri əyir.

1. {{ui:Daha çox}}, sonra {{ui:Qaralama}} seçin (və ya əvvəlcə {{key:Shift}}+klik ilə üzləri seçin). Heç nə seçilməyibsə, seçim rejimindəsiniz: əyiləcək hər üzə klik edin, sonra {{ui:Hazırdır}}.
2. **Bucaq (°)**, **Neytral müstəvi** (üzlərin ölçüsünü saxladığı yer) və **Çəkmə istiqaməti** (defolt olaraq neytral müstəvinin normalı) təyin edin.

Müsbət bucaq üzü çəkmə boyunca içəriyə əyir və material çıxarır; mənfi bucaq isə material əlavə edir. Neytral müstəvi defolt olaraq Üst müstəvi kimi başlayır. Bu versiyada qaralama yalnız düz üzlərdə ola bilər: silindr, konus və ya sərbəst forma üzü "Qaralama: bu versiyada yalnız düz üzlər (mesh nüvəsi onu qurur)." mesajını verir. 100 × 100 × 50 blokun dörd tərəfi altından 5° qaralandıqda dəqiq h/3·(a² + b² + ab) həcmli kəsik konusa çevrilir, burada b = a − 2h·tan 5°.

## Mesajlar

| Mesaj | Nə etmək lazımdır |
|---|---|
| "Profilin müstəvisi yolun bir ucundan keçməlidir …" | Profil eskizini yolun başlanğıcına (və ya sonuna) köçürün |
| "Yolda boşluq var: onun əyriləri uc-uca birləşmir …" | Yolun əyrilərini birləşdirin; ayrı eskizlərdə uclar dəqiq üst-üstə düşməlidir |
| "Loft kəsiyi dəqiq bir qapalı kontur tələb edir" | Eskizi bölün və ya əlavə konturu silin |
| "… bu neytral müstəvi ilə qaralana bilməz …" | Üz neytral müstəviyə paraleldir və ya onu kəsmir |
| "Qaralama: bu versiyada yalnız düz üzlər (mesh nüvəsi onu qurur)." | Seçilmiş üz əyridir. Onu silin; yalnız düz üzləri qaralayın |

:::note
Hələ qurulmayıb: burulan süpürmələr, nazik divar və səth süpürmələri, loft relsləri və uc tangensliyi, silindr, konus və sərbəst forma üzlərində qaralama.
:::
