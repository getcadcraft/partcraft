---
title: Cisimləri birləşdirmə, köçürmə və miqyaslama; yol massivləri
summary: Ayrı cisimlər yaradın, sonradan onları birləşdirin, kəsin və ya kəsişdirin, köçürün, döndürün, düzləşdirin və ya surətini çıxarın, bərabər və ya X, Y və Z üzrə miqyaslayın, xüsusiyyətləri və ya cisimləri əyri boyunca surətini çıxarın.
keywords: cisim, cisimlər, çoxcisimli, yeni cisim, birləşdirmə, bul, birləşdirmək, kəsmək, kəsişmə, çıxmaq, cisimləri saxla, cismi köçür, cismin surətini çıxar, cismi döndür, düzləşdirmə, köçürmə, miqyas, qeyri-bərabər miqyas, uzatma, affin, yol massivi, əyri boyunca massiv, əyri ilə idarə olunan massiv
from: 6b1ea820
---

:::note
**Bu versiyada hələ qurulmayıb.** Bir neçə cisimlə işləmək dəqiq həndəsə nüvəsi tələb edir, PartCraft-ın bu versiyasında isə yoxdur: o, hər detalı mesh nüvəsi ilə qurur. [Hələ qurulmayanlar](topic:not-built-yet) bunun əvəzinə nə etməli olduğunuzu izah edir. Bu səhifənin qalan hissəsi dəqiq nüvə ilə necə işlədiyini təsvir edir.
:::

Detal bir neçə bərk cisim tuta bilər. Hər ayrı bərk cisim **cisim**dir. Əksər xüsusiyyətlər toxunduqları hər cismə əlavə edir və ya onlardan kəsir; bu səhifədəki alətlər seçdiyiniz tam cisimlər üzərində işləyir. Onlar Xüsusiyyətlər qrupunun {{ui:Daha çox}} menyusundadır: {{ui:Birləşdir}}, {{ui:Cismi köçür}}, {{ui:Cismi miqyaslandır}} və {{ui:Yol massivi}}. Bunların hamısı dəqiq nüvə (OpenCascade) tələb edir.

## Ayrı cisim yaradın

Ekstruziyanın və ya fırlatmanın sağ panelində **Əməliyyat** sahəsini **Yeni cisim** təyin edin (süpürmə və Loft-larda da var). Yeni bərk cisim digərləri ilə üst-üstə düşdüyü yerlərdə də ayrı qalır. **Kəsişmə** yalnız yeni formanın mövcud olanla üst-üstə düşən hissəsini saxlayır.

Cisimlər onları başladan xüsusiyyətin adını alır: "Extrude2". Surət onun orijinalının və onu surətini çıxaran xüsusiyyətin adını alır: "Extrude2, copy 1 of Move1". Əvvəldəki xüsusiyyətlərdə ölçüləri dəyişdikdə adlar eyni qalır, beləliklə cismi istifadə edən xüsusiyyətlər onu tapmağa davam edir. İki və ya daha çox cisim olduqda detal paneli (boş yerə klik edin) onları həcmləri ilə birlikdə siyahıya salır.

## Cismin adını dəyişin və ya gizlədin

Detal panelini görmək üçün görünüşdə boş yerə klik edin. Onun cisim siyahısında (detalın iki və ya daha çox cismi olduqda göstərilir) hər sətirdə ad qutusu və {{ui:Gizlət}} düyməsi var.

- **Adını dəyişin:** qutuya yeni ad yazın və {{key:Enter}} basın və ya kənara klik edin. Bundan sonra bütün panellər onu istifadə edir: Birləşdir, Cismi köçür, massivlər. Cismi yaradan xüsusiyyətin adına qayıtmaq üçün qutunu boşaldın.
- **Gizlədin:** sətirdəki {{ui:Gizlət}} düyməsinə klik edin. Cisim görünüşdən çıxır və kliklər ondan keçir, beləliklə onun arxasındakı üzləri seçə bilərsiniz. {{ui:Göstər}} onu geri qaytarır; {{ui:Hamısını göstər}} bütün gizlədilmiş cisimləri geri qaytarır.

Gizlətmə yalnız görünüşü dəyişir. Gizlədilmiş cisim hələ də qurulur, həcmə və ölçmələrə daxil edilir və STL, 3MF və STEP ixracında saxlanılır. Adlar və gizlədilmiş cisimlər detal faylında saxlanılır, hər dəyişiklik {{ui:Geri qaytar}} ilə bir addımdır.

## Cisimləri birləşdirin

1. **Hədəf** cismin üzünə Shift+klik edin, sonra hər **alət** cisminin üzünə.
2. {{ui:Daha çox}} seçin, sonra {{ui:Birləşdir}}.
3. Sağ paneldə **Əməliyyat** seçin:

| Əməliyyat | Nəticə |
|---|---|
| Birləşdirmə | Hədəf və alətlər bir cismə çevrilir |
| Kəsmə | Alətlər hədəfdən çıxarılır |
| Kəsişmə | Yalnız hədəf və bütün alətlərin paylaşdığı hissə saxlanılır |

**Hədəf cismi** adını saxlayan cisimdir. **Alət cisimləri** qutularını işarələyin və ya işarəni silin, ya da **Görünüşdə seç** istifadə edib onların üzlərinə klik edin. **Alət cisimlərini saxla** alətləri də öz yerində saxlayır (qəlib və onun özəyi üçün əlverişlidir). Əgər alət cismi əvvəlki Birləşdir əməliyyatında artıq istifadə olunubsa, panel başqa cisim seçmək əvəzinə bunu bildirir.

## Cismi köçürün və ya surətini çıxarın

1. {{ui:Daha çox}}, sonra {{ui:Cismi köçür}} seçin. Ən yeni cisim işarələnib; köçürüləcəkləri işarələyin.
2. **Köçürmə** növünü seçin:

| Köçürmə | Nə təyin edirsiniz |
|---|---|
| Yerdəyişmə | **ΔX**, **ΔY**, **ΔZ** millimetrlə |
| Nöqtədən nöqtəyə | **Başlanğıc** və **Son**: kənarın ucuna, nöqtə xüsusiyyətinə və ya üzdəki yerə yaxın klik edin |
| Ox ətrafında fırlatma | **Ox** (X, Y, Z, ox xüsusiyyəti və ya **Seç**: düz kənar, çevrə və ya silindr) və **Bucaq (°)** |
| Üzü üzə və ya müstəviyə düzləşdirmə | **Köçürüləcək üz** (cismin düz üzü), **Üzərinə** (düz üz və ya müstəvi) |

Düzləşdirmə cismi elə döndərir ki, onun üzü digər üzün üstündə üz-üzə gəlsin, sonra yalnız həmin üzün normalı boyunca sürüşdürür. **Eyni istiqamət** onu əks tərəfə döndərir. **Kopyala** orijinalı saxlayır və köçürülmüş surəti yeni cisim kimi əlavə edir.

## Cismi miqyaslandırın

1. {{ui:Daha çox}}, sonra {{ui:Cismi miqyaslandır}} seçin və cisimləri işarələyin.
2. **Miqyas** yazın, ya da **Bərabər** qutusunun işarəsini çıxarın və **Miqyas X**, **Miqyas Y** və **Miqyas Z** yazın (dünya oxları boyunca).
3. **Ətrafında** sabit qalan nöqtədir: cisimlərin qutusunun mərkəzi və ya seçdiyiniz nöqtə.

Bərabər miqyas dəqiqdir. Qeyri-bərabər miqyas çevrələri ellipslərə çevirir: silindr elliptik silindrə çevrilir, bunu heç bir analitik səth saxlaya bilməz, ona görə əyri üzlər dəqiq formadan 0.0000004 mm-dən çox kənara çıxmayan B-spline səthlərinə çevrilir; düz üzlər və düz kənarlar dəqiq qalır. Panel nəyin baş verdiyini bildirir. Miqyas əmsalları sıfırdan böyük olmalıdır (əvəzində {{ui:Güzgü}} ilə əks etdirin).

## Yol boyunca surət çıxarın

1. Tarixçədə surətini çıxarılacaq xüsusiyyəti seçin, ya da ən yeni cismin surətini çıxarmaq üçün heç nə seçməyin.
2. {{ui:Daha çox}}, sonra {{ui:Yol massivi}} seçin. Ən yeni istifadə olunmamış eskiz yol kimi götürülür.
3. Sağ paneldə təyin edin:

| Parametr | Nə edir |
|---|---|
| **Kopyala** | Cisimlər (hər surət yeni cisim) və ya Xüsusiyyətlər (orijinal kimi birləşdirilmiş və ya kəsilmiş) |
| **Yol** | Eskizləri işarələyin və ya **Modelin kənarlarını seçin**; parçalar başdan-sonra birləşməlidir |
| **Say** | Ümumi say, orijinal daxil olmaqla |
| **Aralıq** | Bərabər (açıq yolun sonuna qədər və ya qapalı yol boyunca yayılır) və ya təyin olunmuş məsafə |
| **İstiqamət** | Yolu izləmək (hər surət onunla birlikdə dönür) və ya Sabit (surətlər paralel qalır) |
| **Əks istiqamət** | Yolun digər tərəfi ilə gedin |

Surətlər yolun orijinala ən yaxın keçdiyi yerdən başlayır və əyri boyunca uzunluğa görə aralanır.

Xətti və dairəvi massivlər də cisimlərin surətini çıxara bilər: onların panelində **Cisimlərin surətini çıxar** qutusunu işarələyin və cisimləri seçin; hər surət yeni cisimdir.

## Məhdudiyyətlər

- Cisimlər dəqiq nüvə tələb edir; mesh nüvəsi bir bərk cisim saxlayır və bunu bildirir.
- Qeyri-bərabər miqyas əyri üzləri (yuxarıda göstərildiyi kimi) yaxın B-spline yaxınlaşmalarına çevirir, dəqiq silindr və ya konusa yox; ofset səthləri hələ belə miqyaslana bilməz.
- Burulan 3D əyri üzərində yolu izləmək surəti burmadan daşıyır; düz yollarda dönmə dəqiqdir.
- Birləşdir yalnız bərk cisimlərlə işləyir. Səth cisimləri {{ui:Tikmə}} ilə birləşdirilir.

Həmçinin bax: nöqtələr və müstəvilər üçün "obyektlər arasında" [İstinad müstəviləri, oxları və nöqtələri](topic:reference-geometry) və [Massiv və güzgü xüsusiyyətləri](topic:patterns-mirror).
