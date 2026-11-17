---
title: Yastı detalları vərəqlərə yerləşdirin
summary: Yastı detalları lövhələrə və ya rulona PartCraft-ın tapa biləcəyi qədər az tullantı ilə yerləşdirin, verdiyiniz məsafədən heç vaxt yaxın olmadan, və planı lazer, plazma, su-jet və ya freza üçün DXF kimi saxlayın.
keywords: yerləşdirmə, yerləşdirmək, vərəq, lövhə, rulon, lazer, plazma, su-jet, freza, kəsmə, çıxış, material istifadəsi, tullantı, qırıntı, məsafə, kerf, lif istiqaməti, yuvarlanma istiqaməti, dxf, yastı naxış, konturlar
from: 8dcce1a6
---

**Yerləşdirmə** bir vərəqə çoxlu yastı detal yerləşdirir ki, ondan mümkün qədər az material qalsın. PartCraft detalları birbəbir yerləşdirir: hər birini vərəqin istifadə olunan uzunluğunu ən qısa saxlayan yerə qoyur, bir neçə ardıcıllığı sınayır, bir neçə saniyədə hesablayır və ən yaxşısını saxlayır. Detallar bir-birinin deşiklərində və L və ya U formalı detalın boşluğunda yerləşə bilər.

## Açın

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} əmri detalın yastı naxışı ilə açır; yığımda isə hər təbəqə metal detalının yastı naxışı ilə, nüsxələrin sayı qədər, açır.
- Təbəqə metal detalında əvvəlcə {{ui:Lay flat}}, sonra yastı naxışın altında {{ui:Nest on sheets…}} seçin.
- {{ui:Add outlines from a DXF…}} DXF faylındakı hər qapalı konturu detal kimi əlavə edir: CadCraft-da DXF kimi saxlanmış çertyoj və ya kəsicinizin öz proqramından olan fayl. Konturun içindəki kontur onun deşiyidir. Ucları bir-birinə birləşən xətt və qövslər bir kontur sayılır. Düym, santimetr və ya metrlə olan fayllar millimetrə çevrilir.

:::note
Təbəqə metalı yastı vəziyyətə gətirmək dəqiq həndəsə nüvəsi tələb edir (bax: [Təbəqə metal](topic:sheet-metal)). DXF faylından olan konturlar həmişə işləyir.
:::

## Qurun

Hər detal üçün **neçə ədəd** lazım olduğunu və onun **lif istiqamətini** verin: {{ui:Any direction}}, bir istiqamətdə getməli olan fırçalanmış və ya valsovka edilmiş təbəqə üçün {{ui:Along the sheet (as drawn)}}, və ya {{ui:Across the sheet}}.

**Vərəqlər** bölməsində:

- **Ehtiyat**: verilmiş uzunluq və en ilə {{ui:Plates}} (və sizdə neçə olduğu; 0 = lazım olan qədər), və ya lazım olan uzunluqda verilmiş en ilə {{ui:A roll}}.
- **Kənar boşluğu** vərəqin hər kənarında boş saxlanılır (sıxıcılar üçün və ya qeyri-bərabər kənar üçün).
- **Detallar arası məsafə** iki kəsik xətti arasındakı ən kiçik məsafədir: ən azı kəsicinizin kerf-i (kəsik eni), üstəlik materialın tələb etdiyi əlavə.
- **Dönmələr**: detalın döndərilə biləcəyi bucaqlar, defolt olaraq hər 90°. Az dönmə daha sürətli işləyir; çox dönmə vərəqi daha yaxşı istifadə edə bilər.
- **Detallar çevrilə bilər** detalın alt-üstə yerləşdirilməsinə imkan verir. Təbəqə metal üçün söndürün: çevrilmiş yastı naxış əyilməni əks istiqamətdə edir.

{{ui:Nest}} düyməsini basın. Önizləmə hər vərəqi göstərir; faktlar neçə lövhənin (və ya rulonun nə qədərinin) istifadə olunduğunu və detalların materialın nə qədərini tutduğunu deyir. Yerə sığmayan hər şey adlandırılır.

## Saxlayın

{{ui:Save DXF}} yerləşdirməni DXF kimi (R12, millimetr) yazır, vərəqlər bir-birinin altında: vərəqlərin konturları SHEET qatında, detallar PARTS qatında (qövslər qövs kimi saxlanılır), hər detalın adı isə LABELS qatında.

:::tip
Bir detalın çoxlu nüsxəsi əvəzinə bir neçə müxtəlif detalı birlikdə yerləşdirmək adətən daha yaxşı nəticə verir: kiçik detallar böyüklər arasındakı boşluqları doldurur.
:::

## Vərəqləri kəsin (G-code)

**İxrac › Yerləşdirilmiş vərəqləri G-code-a** DXF-i oxuyur (bu və ya CadCraft-da Şkaflar əlavəsinin vərəqləri) və seçdiyiniz post ilə hər vərəq üçün bir proqram yaradır: əvvəl deşiklər və kəsiklər, sonra konturlar; hər kəsik alətin radiusu qədər detalın xaricində, vərəqi keçərək və 1 mm əlavə, istəsəniz tab-larla. Post siyahısı daxili postlar və Manufacture tədqiqatınızın öz postlarından ibarətdir. İstifadədən əvvəl hər proqramı simulyatorda yoxlayın: qazma və ciblər yaradılmır.

## Yoxlayın

PartCraft hər layouta yenidən həqiqi formalar üzrə baxır (axtardığı şəbəkə üzrə yox): heç iki detal məsafədən yaxın deyil, heç nə kənar boşluqlarda deyil. Kəsiyi planlaşdırmır: giriş xətləri (lead-in), kəsmə ardıcıllığı, ortaq kənarların bir dəfə kəsilməsi və qalan vərəqin saxlanması kəsicinizin proqramının işidir. Kəsməzdən əvvəl DXF-i orada yoxlayın.
