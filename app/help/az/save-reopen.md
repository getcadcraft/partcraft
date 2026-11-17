---
title: Saxlayın, yenidən açın və işləməyə davam edin
summary: Detalları və yığımları kompüterinizə saxlayın, adlandırın, düymə, qısa yol və ya sürüklə yenidən açın, versiyaları saxlayın və brauzer səkməsində işinizi itirməyin.
keywords: saxla, aç, yenidən aç, yüklə, yükləmə, versiyalar, ehtiyat nüsxə, adını dəyiş, fayl adı, itmiş iş, saytdan ayrıl, partcraft.json, partcraft-asm.json, yeni detal
from: c18a5abc
---

PartCraft ziyarətlər arasında heç nə saxlamır. Detalınız onu fayl kimi saxlayana qədər brauzer səkməsində qalır və həmin faylı açdıqda geri qayıdır.

## Detalı saxlayın

1. Detalı adlandırın: görünüşdə boş yerə klikləyin ki, heç nə seçilməsin, sonra sağ paneldə **Ad** yazın və {{key:Enter}} basın. Tarixçə başlığı buna uyğun dəyişir.
2. {{key:Mod+S}} basın və ya {{ui:Saxla}} seçin.
3. Brauzer `<ad>.partcraft.json` faylını yükləyir. Status sətri deyir: "Saxlanıldı: Bracket.partcraft.json (tam tarixçə; redaktəni davam etdirmək üçün burada yenidən açın)."

Əgər eskiz açıqdırsa, saxlama əvvəl onu bağlayır.

Fayl hər eskizi, münasibəti, ölçünü və xüsusiyyəti, həmçinin söndürülmüş xüsusiyyətləri, geri qaytarma çubuğunun mövqeyini, çertyoj vərəqinin parametrlərini və GD&T qeydlərini, və idxal edilmiş STEP gövdənin tam mətnini saxlayır. Geri qaytar siyahınız saxlanmır.

## Yığımı saxlayın

Yığımda eyni {{ui:Saxla}} və ya {{key:Mod+S}} `<yığım adı>.partcraft-asm.json` faylını yükləyir. Hər detal onun içində saxlanılır: yığımı yenidən açmaq üçün ayrı detal fayllarına ehtiyacınız yoxdur.

Yığımın içində detalı redaktə edərkən {{key:Mod+S}} həmin detalı ayrıca `.partcraft.json` kimi saxlayır. Bütün yığımı saxlamaq üçün əvvəl {{ui:Geri}} seçin, sonra saxlayın.

## Yenidən açın

Bunlardan biri:

- {{ui:Aç}} seçin və ya {{key:Mod+O}} basın, sonra faylı seçin;
- faylı {{pick:mac=Finder|windows=File Explorer|linux=fayl menecerinizdə}} 3D görünüşünə sürükləyin ("PartCraft detalını açmaq üçün onu buraya buraxın" görünür).

PartCraft detalları yığımlardan içindəki elementlərə görə ayırır, ona görə ikisi eyni cür açılır. `.step` və ya `.stp` faylı idxal edilmiş gövdə kimi açılır: bax [STEP faylını açın və onun üzərində qurun](topic:import-step). Status sətri təsdiqləyir: "Açıldı: Bracket.partcraft.json: 7 xüsusiyyət." və ya "Açıldı: Hinge.partcraft-asm.json: 3 detal, 2 birləşmə."

Ekranda olan detalın saxlanmamış dəyişiklikləri varsa, PartCraft əvvəl soruşur: {{ui:Ləğv et}}, {{ui:Dəyişiklikləri sil}} və ya {{ui:Əvvəl saxla}}.

:::warning
Detal faylını açmazdan əvvəl yığımı ({{ui:Bağla}}) bağlayın. Yığım ekranda olduqda detal açsanız, detal yığımın arxasında yüklənir və yığımı bağlayana qədər görünməz. Yığım faylını açmaq saxlanmamış yığımı soruşmadan əvəz edir, ona görə əvvəl onu saxlayın.
:::

## Yenidən başlayın

{{ui:Yeni}} boş "Part1" açır. Saxlanmamış dəyişiklik varsa əvvəl soruşur, açıq yığım varsa onu da bağlayır (saxlanmayıbsa soruşaraq).

## Versiyaları saxlayın

Hər saxlama yeni yükləmədir, ona görə versiyaları fayllarımı saxlamaqla asanlıqla saxlaya bilərsiniz:

- Saxlamadan əvvəl adda versiya və ya tarix yazın: "Bracket rev B".
- Eyni adlı fayl yükləmələr qovluğunda artıq varsa, brauzeriniz " (1)", " (2)" əlavə edə bilər. Ən yenisi ən böyük nömrəli olandır, ya da tarixi {{pick:mac=Finder|windows=File Explorer|linux=fayl menecerinizdə}} yoxlayın.
- Bitmiş faylları yükləmələr qovluğundan layihə qovluğunuza köçürün.

Hər sistemdə yükləmələrin hara getdiyi üçün bax: [Fayllarınız harada olur](common:your-files).

## İşinizi itirməyin

- Səkməni bağlamadan, səhifəni yenidən yükləmədən və ya kompüter uzun müddət yuxuya gedərkən əvvəl saxlayın. Saxlanmamış dəyişikliklərlə bağlamağa cəhd etsəniz brauzer "Saytdan ayrılırsınız?" soruşur, lakin çökmə və ya bağlı noutbuk heç bir xəbərdarlıq vermir.
- Məxfi və ya inkoqnito pəncərələr işləyir, lakin başqa heç nə fərqli deyil: fayl yenə yeganə nüsxədir.
- Bulud saxlanması və versiya tarixçəsi hələ mövcud deyil.
