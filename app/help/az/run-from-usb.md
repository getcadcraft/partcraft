---
title: USB diskdən işlədin
summary: Mühəndislik alətlərinin nəyi haradan yazdığı, beləliklə CadCraft Studio-nun quraşdırıcı və administrator hüququ olmadan USB diskdən və ya istənilən qovluqdan işləməsi: parametrlər, generatorlar, keşlər və detal faylları və diskdə nə qaldığı.
keywords: usb, portativ, quraşdırıcı yoxdur, administrator, admin, parametrlər, məlumat qovluğu, generatorlar, fayllar harada yazılır, oflayn, məxfilik, host girişi
from: 263efc79
---

Mühəndislik alətləri (generatorlar, mühəndislik kitabxanası, yoxlamalar və məlumat faylları) **administrator hüquqları** və **quraşdırıcı** tələb etmir. Onlar yalnız burada sadalanan şeyləri yazır, başqa heç nə yazmır.

| Nə | Harada saxlanılır |
|---|---|
| Detallarınız, onların yaradılmış gövdələri, məlumat vərəqləri və yoxlamalar | Saxladığınız detal faylı (`.partcraft.json`), onu harada saxlasanız orada. |
| Fayllardan açdığınız generatorlar | Tətbiqin öz yaddaşında: veb səhifədə brauzerin lokal yaddaşında, portativ Studio-da isə proqramın yanındakı `data` qovluğunda. Ən çoxu 20. |
| Parametrlər (qurduğunuz voksel ölçüləri, həll edici axınları, tərtibat) | Eyni tətbiq yaddaşı. |
| Məlumat vərəqləri, sahələr, torlar | Yalnız onları saxladığınız yerdə: yükləmə seçdiyiniz yerə gedir. |

Alətlər **öz şəbəkə çağırışlarını etmir**: göndərilən generatorlar tətbiqin öz qovluğunda olan fayllardır, kitabxana və yoxlamalar kompüterinizdə, şəbəkəyə çıxa bilməyən işçi prosesdə işləyir, mühəndislik məlumatları (su və hava xassələri, materiallar) isə tətbiqin içindədir. Faylından açdığınız generator kompüterinizdə oxunur və heç yerə getmir.

## Portativ Windows zip və Linux

Windows üçün portativ Studio parametrlərini, keşlərini və əlavələrini proqramın yanındakı `data` qovluğunda saxlayır. Linux AppImage yanında `portable` adlı fayl olduqda onları özünün yanında saxlayır; həmin fayl olmadan ana qovluğunuzu istifadə edir. Portativ Mac forması yoxdur: sistem yüklənmiş tətbiqin özünün yanına yazmasına icazə vermir. Studio yardımındakı portativ qeydlər proqramın nə yazdığını sadalayır.

## Host girişi

Burada heç nə host girişi tələb etmir. Printerlər, serial maşınlar və USB cihazlar ayrıdır: onlar iş lazım olduqda, hər cihaz üçün bir dəfə soruşur, generatorlar və yoxlamalar isə onlara heç toxunmur.
