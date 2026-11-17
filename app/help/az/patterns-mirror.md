---
title: Naxış və güzgü elementləri
summary: Elementləri Xətti ilə sıra şəklində təkrarlayın, Dairəvi ilə ox ətrafında dairəvi yerləşdirin və Güzgü ilə elementləri və ya bütün cismi müstəvi üzrə surətini çıxarın.
keywords: naxış, xətti naxış, dairəvi naxış, polyar massiv, massiv, güzgü, simmetrik, elementlərin surəti, bolt dairəsi, toxum, cismin güzgüsü
from: 702e9edb
---

Naxışlar və güzgülər artıq qurduğunuz elementlərin surətini çıxarır. Surətlər tarixçənin bir hissəsidir: orijinalı dəyişdirsəniz, surətlər də onu izləyir.

Surətlənən şey elementin nə etdiyidir: çıxıntı naxışı material əlavə edir, kəsik və ya deşik naxışı isə onu çıxarır. Naxışlar yenidən naxışlana və yenidən güzgülənə bilər. İdxal edilmiş STEP cismi də surətlənə bilər; yuvarlaqlaşdırmalar, faskalar və qabıqlar isə yox.

## Xətti naxış

1. Tarixçədə surətlənəcək elementi seçin (məsələn Deşik və ya Kəsik). Heç nə seçilməyibsə, son bərk element istifadə olunur.
2. {{ui:Linear}} seçin. X boyunca 20 mm aralı üç surət görünür.
3. Sağ paneldə təyin edin:

| Parametr | Nə edir | Standart |
|---|---|---|
| **Surətlənəcək elementlər** | Surətlənəcək hər elementi işarələyin. Yalnız naxışdan yuxarıdakı elementlər siyahıdadır | Seçilmiş element |
| **İstiqamət** | X oxu, Y oxu, Z oxu, əvvəlki hər hansı eskizdən xətt və ya mərkəz xətti, fırlatmanın oxu və ya seçilmiş kənar | X oxu |
| **Aralıq (mm)** | Qonşular arasındakı məsafə | 20 |
| **Say** | **Orijinal daxil olmaqla** ümumi say (1-dən 1000-ə qədər) | 3 |
| **İstiqaməti tərsinə çevir** | Surətlər əks istiqamətə gedir | Söndürülüb |

### Kənarı istiqamət kimi istifadə edin

1. Görünüşdə elementin düz kənarına klikləyin. Sağ panel **Kənar** yazır və onun uzunluğunu göstərir.
2. {{ui:Linear}} seçin: naxış həmin kənar boyunca gedir.

Və ya naxışı seçin, kənar seçin və **İstiqamət**də "Seçilmiş kənar (indi seçilmiş olanı istifadə et)" variantını seçin. Seçilmiş kənar fəzada sabitdir: sonrakı dəyişikliklərə əməl etmir. Eskiz xətti isə öz eskizini izləyir.

## Dairəvi naxış

1. Surətlənəcək elementi seçin (məsələn, disk kənarına yaxın bir deşik).
2. {{ui:Circular}} seçin. Altı surət bütün dairə boyunca bərabər aralı görünür.
3. Təyin edin:

| Parametr | Nə edir | Standart |
|---|---|---|
| **Surətlənəcək elementlər** | Xətti ilə eynidir | Seçilmiş element |
| **Ox** | X, Y və ya Z oxu, eskiz xətti, fırlatmanın oxu və ya seçilmiş kənar | Varsa son fırlatmanın oxu, yoxsa Y oxu |
| **Bucaq (°)** | 360 surətləri bütün dairə boyunca bərabər yayır. Daha kiçik dəyər onları həmin bucağa yayır, ilk və son surət uclarda olur | 360 |
| **Say** | Orijinal daxil olmaqla ümumi say | 6 |
| **İstiqaməti tərsinə çevir** | Əks istiqamətə dönür | Söndürülüb |

Dünya oxları başlanğıc nöqtədən keçir. Başlanğıcda mərkəzləşməyən disk üçün eskizin mərkəz xəttindən və ya fırlatmanın oxundan istifadə edin.

### Nümunə: flansın səkkiz bolt deşiyi

1. Flansı Y oxu ətrafında fırladın (bax: [Fırlanan hissəni fırlatma](topic:revolve)).
2. Flansın düz üst üzündə eskiz çəkin, bolt dairəsinə bir nöqtə qoyun və Deşik yaradın.
3. Deşik seçili olduqda {{ui:Circular}} seçin. Ox artıq "Revolve1 oxu"dur.
4. **Say** sahəsinə `8` yazın.

## Güzgü

1. Tarixçədə güzgüləniləcək elementi seçin, və ya **indiyə qədər qurulmuş bütün cismi** güzgüləmək üçün heç nə seçməyin.
2. {{ui:Mirror}} seçin. Güzgü **Sağ müstəvi** üzrə aparılır.

Bütün cismi hissənin üzü üzrə güzgüləmək üçün əvvəlcə həmin düz üzə klikləyin, sonra {{ui:Mirror}} seçin. (Üzə klikləmək tarixçədəki seçimi təmizləyir, buna görə bu, həmişə bütün cismi güzgüləyir.)

Sağ paneldə parametrlər:

- **Güzgü**: **Bütün cisim (indiyə qədər qurulmuş)** qutusunu işarələyin, və ya onu təmizləyib surətlənəcək elementləri işarələyin.
- **Güzgü müstəvisi**: Ön müstəvi, Üst müstəvi, Sağ müstəvi, indi istifadə etdiyi üz ("Extrude1 elementinin üzü" və ya "Sabit müstəvi") və ya "İndi seçilmiş üz". Seçilmiş elementləri üzə görə güzgüləmək üçün: tarixçədə Güzgü elementini seçin, görünüşdə üzə klikləyin və "İndi seçilmiş üz" variantını seçin.

Bütün cismi üzə görə güzgüləmək hissəni ikiqat artırır, məsələn yarım kronşteyni tam kronşteynə çevirir.

## Mesajlar

- "Əvvəlcə surətlənəcək element qurun." və ya "Əvvəlcə bərk cisim qurun." Hələ surətlənəcək bərk cisim yoxdur.
- "Surətlənəcək elementləri seçin." Bütün **Surətlənəcək elementlər** qutuları təmizlənib.
- "Extrude2: surətlənəcək bərk cisim yoxdur." Həmin element uğursuz olub və ya gizlədilib.
- "Fillet1 cismin kənarlarını və ya divarlarını dəyişir; surətlənə bilməz. Bərk cisim yaradan elementləri surətləyin (ekstruziyalar, fırlatmalar, deşiklər, idxallar)." Yuvarlaqlaşdırmalar, faskalar və qabıqlar naxışlana və ya güzgülənə bilməz; əvvəlcə naxışlayın, sonra yuvarlaqlaşdırın.
- "Hələ güzgüləniləcək cisim yoxdur."

:::note
Naxış surətləri təkbətək ötürülə bilməz, naxış eskiz əyrisini izləyə bilməz. Eskiz naxışları və güzgüləri hələ qurulmayıb: təkrarlanan eskiz həndəsəsini əl ilə və ya **Koordinatlarla əlavə et** ilə çəkin.
:::
