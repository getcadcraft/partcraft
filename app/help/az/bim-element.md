---
title: BimCraft elementini layihələndirin və geri saxlayın
summary: BimCraft-dan göndərilən detal binanın içində, boz və yalnız oxunan olaraq açılır. Onu dəyişin, sonra BimCraft-ın yeni formanı qəbul edə bilməsi üçün geri saxlayın.
keywords: bimcraft, bim, element, göndər, geri saxla, keçid, bina, kontekst, qonşular, dayaq, kronşteyn, ifc, qəbul et
from: 0978fe53
---

## Nə edəcəksiniz

BimCraft modelindən gələn detal üzərində, binadakı yerində işləyin və yeni formanı geri göndərin.

## Addımlar

1. BimCraft-da elementi seçin və {{ui:Detal keçidləri}} › {{ui:PartCraft-a göndər}} seçin. PartCraft onu yeni detal kimi açır. Status çubuğu onun BIM elementi olduğunu bildirir.
2. Ətrafdakı elementlər (3 m daxilində) boz çəkilir. Onlar layihələndirmək üçün orada yerləşirlər. Onları seçə və ya dəyişə bilməzsiniz, və detal faylında saxlanılmırlar.
3. Detalı digər detal kimi dəyişin: kəsin, əlavə edin, deşin, güzgüləyin. Onun başlanğıcı və oxları elementin öz oxlarıdır, ona görə detal öz yerinə qayıdır.
4. {{ui:Fayl}} › {{ui:İxrac}} › {{ui:BimCraft-a geri saxla}} seçin. Status çubuğu göndərdiyiniz revizyanı bildirir.
5. BimCraft-da element, orada olan şəxs onu qəbul edənə qədər dəyişmiş kimi görünür.

## Nə görməlisiniz

- Detal faylda öz keçidini saxlayır. Sonra açsanız, status çubuğu hələ də onun BIM elementi olduğunu bildirir. Brauzer göndərilmiş paketi saxladığı müddətcə boz bina yenidən görünür.
- Yenidən geri saxlasanız, revizyon 2, 3 və s. göndərilir. BimCraft ən yenisini saxlayır.

## Bilmək yaxşıdır

- Forma mesh kimi, millimetrlərlə, elementin öz oxlarında geri göndərilir. Xüsusiyyətlər PartCraft-da qalır.
- {{ui:BimCraft-a geri saxla}} BimCraft-dan gəlməyən detal üçün heç nə etmir.
- Hələ bərk cismi olmayan detalın göndəriləcək heç nəsi yoxdur.
- Hər iki tətbiq eyni brauzerdə açıq olmalıdır: heç nə yüklənmir, iki səhifə elementi aralarında ötürür.
