---
title: Eskizin maqnit tədqiqi
summary: Eskizlərinizin qapalı profillərini düz maqnit modelinə çevirin (dəmir, maqnitlər, bobinlər), sahəni görün və seçdiyiniz cismin üzərindəki qüvvəni və momenti oxuyun.
keywords: maqnit, maqnitik, maqnitostatik, sahə, maqnit induksiyası, qüvvə, moment, bobin, boyunduruq, dəmir, B-H əyrisi, daimi maqnit, aktuator, motor, solenoid, maxwell
from: 604efc3b
---

Eskizləri olan detalda Elementlər alətlər panelində {{ui:Daha çox}} › {{ui:Eskizlərin maqnit tədqiqi…}} istifadə edin. Seçdiyiniz eskizlərdə hər qapalı forma düz modelin bir bölgəsidir; tədqiqat maqnit sahəsi B-ni, seçdiyiniz cisim üzərində qüvvəni və momenti hesablayır.

## Addımlar

1. Cisimləri eskizlərdə qapalı formalar kimi çəkin: dəmir boyunduruq, maqnit, bobin. Bir-birinə toxunan cisimlər kənar paylaşır, buna görə onları fərqli eskizlərə qoyun; bir-birindən ayrı və ya bir-birinin içində olan cisimlər (boyunduruqdakı pəncərə) eyni eskizdə ola bilər. Eskizləri eyni müstəvidə saxlayın.
2. Tədqiqatı açın və istifadə ediləcək eskizləri işarələyin. Hər qapalı profil nömrələnmiş sətir alır. Nə olduğunu deyin: {{ui:Hava}}, {{ui:Dəmir}} (keçiricilik, və ya tesla ilə B və A/m ilə H cütləri kimi yazılmış B–H əyrisi), {{ui:Daimi maqnit}} (tesla ilə Br, istiqaməti eskizin x oxundan bucaq kimi və onun geri qayıdış keçiriciliyi) və ya {{ui:Bobin}} (profilindən keçən ümumi cərəyan, dönə sayı × amper; işarə hansı istiqamətdə axdığını göstərir).
3. Qüvvəni və momenti istədiyiniz cisimlər üçün {{ui:Bu cisim üzərində qüvvə və moment}} işarələyin. Detalın eskizdən kənar dərinliyini verin.
4. Modelin ətrafında tor və hava qutusunu seçin, sonra {{ui:İşə sal}}.

## Nəyi görəcəksiniz

- Modelin üzərində maqnit induksiya sıxlığı |B|, aşağı qiymətlər tünd mavi, yüksək qiymətlər qırmızı, profillər nömrələnmiş.
- Ən güclü sahə və harada olduğu, üçbucaqların sayı və işarələdiyiniz hər cisim üçün x və y boyunca qüvvə, ortası ətrafında moment, verdiyiniz dərinlik üçün.
- {{ui:Nəticələri saxla (CSV)}} rəqəmləri yazır.

## Bilmək yaxşıdır

- Bu düz, stasionar bir modeldir: hər şey metr dərinlik üzrə verilir, burulğan cərəyanları və histerezis yoxdur, maqnit isə düz geri qayıdış xəttidir (söndürülə bilməz).
- Model divarı olan bir hava qutusunda yerləşir. Hava qutusunun iki ölçüsünü, həmçinin Normal və Incə torları müqayisə edin: cismin ətrafındakı sahədən götürülən qüvvə yalnız orada olan torun dəqiqliyi qədərdir.
- Yalnız keçiricilik olan dəmir heç vaxt doyma nöqtəsinə çatmır. Sahə 2 T-ni keçəndə tədqiqat **Problemlər** siyahısında ⚠ qaldırır: dəmirə B–H əyrisi verin. Yeni sətirdəki rəqəmlər nümunədir (dəmir μr 2000, 1,2 T maqnit), material məlumat vərəqinin rəqəmləri deyil.
- Cisim qüvvəni almaq üçün ətrafında yer tələb edir: başqa cisim çox yaxındırsa, tədqiqat bunu deyir.
- Mühəndislik təsdiqi yox, layihələndirmə köməkçisidir.

## Növbəti

- [2-ölçülü maqnit sahələri (dərslik)](topic:magnetic-fields-2d)
