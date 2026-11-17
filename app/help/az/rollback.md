---
title: Tarixçədə geri və irəli qaytarma
summary: Geri qaytarma zolağını element-element yuxarı və aşağı hərəkət etdirin ki, hissənin qurulmasına baxın, ortaya elementlər əlavə edin və sona qayıdın.
keywords: geri qaytarma, geri qaytar, irəli qaytarma, geri qaytarma zolağı, tarixçədə addım, element əlavə et, dondur, tarixçə
from: 9a366cae
---

Geri qaytarma zolağı tarixçənin nə qədərinin qurulacağını təyin edir. Zolağın altındakı elementlər boz olur və qurulmur; yeni elementlər zolaqda əlavə olunur.

## Hər dəfə bir element ilə addım atın

Hissə ekranda olduqda (açıq eskiz və ya çertyoj olmadan):

| Hərəkət | Nəticə |
|---|---|
| {{key:[}} və ya hissə adının yanındakı yuxarı ox düyməsi | Zolaq bir element yuxarı qalxır |
| {{key:]}} və ya aşağı ox düyməsi | Zolaq bir element aşağı enir |
| {{key:End}} və ya zolağı sona çəkən düymə | Hər element yenidən qurulur |

Status sətri zolağın harada olduğunu deyir, məsələn "Geri qaytarma zolağı Sketch1 elementindən sonra: 2 elementdən 1 qurulub". Düymələr həmin istiqamətdə zolaq daha hərəkət edə bilmədikdə sönür.

Istənilən elementdə {{ui:Roll back to here}} seçə bilərsiniz, və ya tarixçədə **Geri qaytarma zolağı · irəli** klikləyə bilərsiniz.

## Ortada element əlavə edin

1. Zolağı yeni elementin yerləşməli olduğu yerə çatana qədər geri çəkin.
2. Elementi əlavə edin: o, zolağa əlavə olunur.
3. Tarixçənin qalanını onun üzərində qurmaq üçün {{key:End}} basın.

Zolağın hər hərəkəti {{key:Mod+Z}} ilə geri qaytarıla bilən addımdır. Zolağın yeri faylda saxlanılır, buna görə hissə geri qaytarılmış halda göndərilə bilər. Komanda xətti aləti də onu hərəkət etdirir: `partcraft rollback part.json` və `partcraft forward part.json --end`.
