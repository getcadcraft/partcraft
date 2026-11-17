---
title: Alət kitabxanası
summary: İstifadə etdiyiniz alətləri brauzerdə saxlayın ki, hər detal onlara malik ola bilsin və alət kitabxanalarını JSON faylı kimi kompüterlər arasında köçürün.
keywords: alət kitabxanası, alətlər, ixrac, idxal, JSON, alətləri saxla, T nömrəsi, barmaqlı freza, emalatxana alətləri
from: 8b9f2483
---

İstehsalatın **Alətlər** sekmesi detalın alətlərini siyahılayır. **Alət kitabxanası** altında öz alətlərinizi bir detalla məhdudlaşmadan saxlaya bilərsiniz:

- {{ui:Bu aləti saxla}} seçilmiş aləti **Mənim saxladığım alətlər**ə əlavə edir; {{ui:Bu detalın bütün alətlərini saxla}} onların hamısını əlavə edir. Saxladığım alətlər bu brauzerdə saxlanılır və hər detal üçün mövcuddur. Artıq saxladığınız alət (eyni növ, ölçü, fleytlər və üstünlüklər) ikinci dəfə saxlanılmır.
- {{ui:Bu detala əlavə et}} seçilmiş saxlanmış aləti detala gətirir. Onun T nömrəsi detalda başqa alət tərəfindən istifadə olunursa, o, növbəti boş nömrəni alır və panel bunu bildirir. {{ui:Kitabxanamdan çıxar}} onu saxlanılmış siyahıdan silir (artıq ona malik olan detallardan yox).
- {{ui:Alətləri ixrac et…}} detalın alətlərini `.json` faylı kimi yazır; {{ui:Alətləri idxal et…}} həmin faylın alətlərini eyni qaydalarla detala əlavə edir (orada olan alət atlanır, tutulmuş T nömrəsi köçürülür). Fayl ölçüləri, fleytləri, materialları və yazdığınız verilən və sürət üstünlüklərini saxlayır; identifikatorları yoxdur. Emalatxananın alətlərini başqa kompüterə köçürmək və ya həmkarınıza vermək üçün istifadə edin.

Brauzer kitabxananı saxlaya bilmirsə (yaddaş söndürülüb və ya doludur), saxlama bunu bildirir və faylı saxlamaq üçün **Alətləri ixrac et** yolu var. Fayl bu versiyanın və ya daha köhnə PartCraft alət kitabxanası olmalıdır, düzgün ölçülü ən çox 500 alətlə; başqa hər şey səbəbi ilə rədd olunur.

Alətlə gələn kəsmə sürətləri və çip yüklənmələri başlanğıc dəyərlərdir; bax [Yol və G-kod hazırlayın](topic:manufacture).
