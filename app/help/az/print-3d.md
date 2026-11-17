---
title: Hissəni 3D çapa hazırlayın
summary: Hissənin və ya yığımın qapalı olduğunu, printerinizə sığdığını və bazada düz durduğunu yoxlayın, sonra dilimləyiciniz üçün STL və ya 3MF kimi yükləyin.
keywords: 3d çap, 3d çapı, printer, çap, dilimləyici, stl, 3mf, su keçirməz, qapalı, manifold, platforma, platformanın ölçüsü, çıxıntı, dəstək, baza, millimetr, ixrac, dişlər, boşluq
from: 90d81dff
---

Dilimləyici qapalı formaya ehtiyac duyur: deşik olmamalı, hər üz xaricə baxmalı, heç nə özündən keçməməlidir. PartCraft-ın qurduğu hissələr qurulma üzrə qapalıdır, ona görə yoxlama əsasən ölçünü, hissənin printerin platformasına sığıb-sığmadığını, düz bir üzdə durub-durmadığını və onun nə qədərinin çıxdığını göstərir.

## Yoxlayın və yükləyin

1. İstəyə görə, bir dəfəlik: {{ui:Settings}} › PartCraft › **3D printer** bölməsində printerinizin platformasını millimetrlə en, dərinlik və hündürlük kimi təyin edin. Həmin yoxlamanı keçmək üçün boş buraxın.
2. {{ui:Export}} seçin, sonra {{ui:Check for 3D printing (STL or 3MF)…}}.

   Dialoq "Çapa hazırdır" və ya "Çapa hazır deyil" yazır, nə səhv olduğunu sadalayır və platformada ölçünü (X × Y × Z, millimetrlə), həcmi və üçbucaqların sayını verir.

3. {{ui:Download 3MF}} və ya {{ui:Download STL}} klikləyin. Fayl {{ui:Export}} › {{ui:3MF, for 3D printing}} və ya {{ui:STL, for 3D printing}} ilə eynidir.

Yığımda yoxlama və fayllar bütün yığımı, yerləşdirildiyi hər surəti ilə birlikdə götürür.

Hissə ixracın yazdığı kimi durmuş halda yoxlanılır: PartCraft-da yuxarı göstərən (Üst müstəvinə perpendikulyar) hissə çapda da yuxarı baxır. Üst müstəvidə eskiz çəkilmiş hissə düz yatır.

## Dialoqun nə deyə biləcəyi

**Çapa hazır deyil** (dilimləyici onu rədd edə və ya səhv çap edə bilər): deşiklər (yalnız bir tərəfində üzü olan kənarlar), üç və ya daha çox üzün birləşdiyi kənarlar, əks istiqamətə baxan üzlər, içəriyə çevrilmiş cisim və ya özündən keçən cisim. PartCraft-da qurulmuş hissə bunları heç vaxt göstərməməlidir; göstərirsə, [Problemlərin həlli](topic:troubleshooting) bölməsinə baxın.

**Xəbərdarlıqlar** (çap olunur, amma əvvəl baxın):

- **Printerin platformasından böyükdür**, hətta 90° fırladılsa belə.
- **Aşağıda heç bir düz üz yoxdur**: dilimləyicidə hissəni elə çevirin ki, bir üz platformaya dayansın, əks halda dəstək və ya raft lazım olacaq.
- **Şaquli vəziyyətdən 45°-dən çox əyilir**: həmin üzlər hazırkı vəziyyətdə dəstək tələb edir. Başqa vəziyyət az dəstək tələb edə bilər.
- **Ayrı cisimlər üst-üstə düşür** və ya **üzlə-üzə gəlir**: dilimləyicilər adətən onları birləşdirir. Elementlər › Daha çox menyusunda {{ui:Combine}} onları bir cismə birləşdirir. Bax: [Cisimlər](topic:bodies).
- **Eni 1 mm-dən az**: hissənin ölçülərini yoxlayın.

## Çap olunan dişlər

Modelləşdirilmiş diş real diş kimi çap olunur. Çap olunmuş bolt çap olunmuş qaykaya girsin deyə ona bir qədər **Boşluq** verin: bax [Dişlər](topic:threads).

## Dəyirmi üzləri hamarlayın

STL və 3MF üçbucaqlardan ibarətdir. Daha hamar dəyirmi üzlər üçün heç nə seçilmədən boş yerə klikləyin və ixracdan əvvəl sağ paneldə **Əyrilər**i **İncə (dövrədə 128)** və ya **Çox incə (dövrədə 256)** təyin edin. Daha çox üçbucaq daha böyük fayllar yaradır.

## Böyük, kiçik və ya hissələrlə

- **İxrac › Çap üçün miqyaslama (STL və ya 3MF)…** hissəni dəyişdirmədən hər ox üzrə miqyaslayıb saxlayır: tökmə şablonu üçün faizlə **büzülmə payı** (ölçü × (1 + s) və ya dəqiq ölçü ÷ (1 − s)), və ya sadə əmsallar; mərkəz, ən aşağı künc, alt tərəfin ortası və ya başlanğıc nöqtə ətrafında.
- **İxrac › Çap üçün parçalara bölmə (parçaların zip-i)…** printerinizə sığmayan böyük hissəni, verdiyiniz platformaya hər biri sığan parçalara kəsir; parçalar pinlərlə, açarlarla, quyruqlu birləşmələrlə (dovetail), dowel deşikləri və ya maqnit yuvaları ilə birləşir (təyin etdiyiniz boşluqla). Hər parça və birləşmə nömrələnir, parçalar STL və ya 3MF kimi, yığım vərəqi ilə zip-də saxlanılır. Hissənin özü dəyişmir.

## Yoxlanılmayanlar

Divar qalınlığı, nozzle-nizin çəkə bilmədiyi daha kiçik detallar və dilimləyicinin dəstəkləri necə yerləşdirəcəyi. Bunları dilimləyiciniz göstərir.
