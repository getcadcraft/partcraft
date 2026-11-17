---
title: Kəsik qalıqlarını saxlayın və təkrar istifadə edin
summary: Yerləşdirmədən sonra hər lövhədə qalanlar nömrəli qalığa çevrilib ehtiyat siyahısına düşür; növbəti yerləşdirmə əvvəl qalıqlardan, sonra tam lövhələrdən istifadə edir.
keywords: yerləşdirmə, kəsik qalığı, qalıq, ehtiyat, tullantı, lövhə, vərəq, təkrar istifadə, material, qalınlıq, CSV
from: 7a68d4b8
---

Detalları lövhələrə yerləşdirdikdə hər lövhənin istifadə oluna bilən qalığı (zolaqlar deyil) **qalıq** kimi saxlanıla bilər: nömrəli kontur (R-0001, R-0002 …), materialı, qalınlığı, ölçüsü və gəldiyi işlə birlikdə. Siyahı faylla birlikdə saxlanılır və CSV kimi yazıla bilər.

## Yenidən istifadə edin

**Material** və **qalınlığı** daxil edin, {{ui:Use remnants first}} açıq qalsın və yerləşdirin. Eyni material və qalınlıqdakı qalıqlar ən kiçikdən başlayaraq sınanır; yerə sığan detallar qalığın öz konturunun içinə, onun kənarından uzaqda qoyulur; sığmayanlar yeni lövhələrə gedir. İş hesabatı hansı qalıqların istifadə olunduğunu və nə qaldığını göstərir. {{ui:Save the leftovers as remnants}} açıq olduqda {{ui:Add this job to the stock}} onu ehtiyat siyahısına yazır: istifadə olunan qalıq **İstifadə olunub** (iş ilə birlikdə) kimi işarələnir və bir daha təklif olunmur; onun qalan hissəsi isə öz valideynini yadda saxlayan yeni qalıq olur.

## Qalıq nəyi sayılır

Qalan hissə təyin etdiyiniz məsafə ilə ölçülür (heç bir detal kəsikdən bu məsafədən yaxın deyil). Lövhənin iyirmidə birindən dar zolaqlar və onun 2 %-dən kiçik parçalar tullantıdır; kiçik parçaları saxlayırsınızsa hər iki həddi dəyişin. Detalların içindəki deşiklər detalların öz deşikləridir və saxlanılmır. Rulonda qalıq yoxdur.

## Çertyojda

Yerləşdirmənin DXF-i hər qalığın konturunu REMNANTS qatında çəkir, ortasında onun nömrəsi olur ki, kəsiləndə parçalar işarələnə bilsin.

Hələ hazır deyil: qalığın lif istiqaməti, barkod və ya etiket vərəqi, rulonların qalıqları, layihələr arasında paylaşılan ehtiyat.
