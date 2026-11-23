---
title: Torna dəzgahında emal
summary: Detalı üz, kobud, səth emalı, yiv, kəsilmə, diş və qazma ilə emal edin: detal fırlananda əmələ gələn konturdan. Torna alətləri, dövrə görə irəliləmə, torna postları və nəyin sübut olunmadığı.
keywords: torna emalı, torna, torna etmək, üzləmə, kobud emal, səth emalı, yiv, yiv açma, detalın kəsilməsi, kəsmə, diş, diş açma, g32, g33, g96, sabit səth sürəti, css, burun radiusu, uc, kəsici, çubuq, patron, diametr, dövrə görə irəliləmə, g71, g76
from: d8cc53b0
---

Manufacture-da torna dəzgahı üçün yeddi əməliyyat var. Onlar hər detalda işləyir: kəsilən şey detalın mərkəz ətrafında fırlandığında əmələ gətirdiyi **konturdur**, ona görə yuvarlaq olmayan detal onu tutan yuvarlaq formaya qədər torna edilir.

**Burada heç nə torna dəzgahında işlədilməyib.** Trayektoriyalar testlərlə həndəsəyə qarşı yoxlanılıb; iki torna postu kontrollerlərin sənədləşdirilmiş kodlarını izləyir. Əvvəl proqramı öz kontrollerinizin simulyatorunda və havada sübut edin.

## Quraşdırma

**Quraşdırma** sekmesində:

- **Alət oxu** şpindelin oxudur, torna dəzgahının Z-i. Detalın ön tərəfi +Z-dədir; patron digər ucu tutur.
- **Xam material**: {{ui:Cylinder}} seçin, çubuq. Onun üst ofseti üz kəsiyinin çıxardığıdır.
- **İş başlanğıcı**: xam materialın üst və ya modelin üst mərkəzi Z0-ı ön üzə qoyur, adi yerdir.
- **Kontroller**: {{ui:Fanuc-style lathe (.nc)}} və ya {{ui:LinuxCNC lathe (.ngc)}}. Frezə postu torna proqramını rədd edir və bunu deyir.
- **Maksimum şpindel sürəti**: səth sürətinin saxlandığı həd.

Alət panelində {{ui:More}} yeddi torna əməliyyatını **Operations** sekmesinin başında sadalayır. Birinci əlavə etdiyiniz öz alətini gətirir: **torna kəsicisi** (burun radiusu, kəsici bucağı, kəsən kənarın bucağı) və ya **yiv bıçağı** (en, künc radiusu, nə qədər dərinə çatması). Onları **Alətlər** sekmesində dəyişin. İrəliləmə dövrə görə verilir, sürət isə diametr dəyişdikcə kontrollerin saxladığı m/dəq səth sürətidir; sürəti sabitləmək üçün alətə öz dəqiqədəki dövrü verin.

## Əməliyyatlar

| Əməliyyat | Nə edir |
|---|---|
| {{ui:Face}} | Barın önünü detala qədər, bir addımda bir dəfə, kənardan mərkəzdən bir az kənara qədər üzləyir. |
| {{ui:Rough}} | Z boyunca **kəsmə dərinliyi** ilə ayrılmış keçidlər, konturdan **saxlanılacaq material** qədər aşağı; sonra pilləri götürmək üçün konturu bir dəfə izləyir. İki çıxıntı arasındakı dərə bir kəsmə dərinliyi qədər dalma ilə girilir. |
| {{ui:Finish}} | Alətin irəliləməsinin bir hissəsi sürətində konturu bir keçidlə izləyir. |
| {{ui:Groove}} | Bıçağı yanaşı batırır, qalan material limitindən çox ala biləcəyi yerdə: torna kəsicisinin çata bilmədiyi yivlər. **Z-dən / Z-yə** onu daraldır. |
| {{ui:Part off}} | Detalı arxa üzünün bir az arxasından, mərkəzdən bir az kənara qədər kəsir, təyin etsəniz döngələrlə. |
| {{ui:Thread}} | Xarici diş: əsas diametr, addım, uzunluq, keçidlərin sayı. Dərinlik 0 deməkdir 0,6134 × addım (60° diş). Hər keçid eyni tor sahəsini götürür; keçidlər son keçidi təkrarlayır. |
| {{ui:Drill}} | Mərkəz xəttində dərinliyə qədər qazma, döngələrlə. |

## Alət detaldan necə uzaq tutulur

Kəsici həqiqi olduğu kimi qəbul olunur: onun burun dairəsi və arxasında arxa kənar, kəsən kənarın bucağı və kəsicinin bucağının 180°-dən çıxılması ilə düz xətt. Bu forma Z boyunca hər nöqtədə konturun üzərinə endirilir və trayektoriya onun dayandığı yerdir. Beləliklə:

- **Burun radiusu artıq trayektoriyadadır.** Post `G41` və ya `G42` yazmır; koordinatlar alətin proqramlaşdırılmış nöqtəsidir (burunu əhatə edən kvadratın küncü).
- Kəsici arxa kənarından daha dik divarı **izləyə bilmir**. Çıxıntının arxasındakı yiv buraxılır və səth emalı əməliyyatı onun çata bilmədiyi konturun nə qədərini deyir. {{ui:Groove}} əməliyyatı onu götürür.
- Xam material hər kəsmədən sonra Z boyunca izlənilir, belə ki kobud emal hava kəsmir, yivləmə nə qaldığını tapır və hər əməliyyat götürdüyü həcmi və detalı kəsib-kəsmədiyini göstərir.

## Məhdudiyyətlər

- **Yalnız xarici torna**: daxili qazma çubuğu yoxdur, daxili yivlər və ya dişlər yoxdur, üz yivləri yoxdur.
- Bir şpindel, detal −Z-də tutulur. Alt-şpindel yoxdur, canlı alətlər yoxdur, C və ya Y oxu yoxdur, sabit dayaq və ya quyruq dəstəyi hərəkətləri yoxdur.
- Trayektoriyalar düz hərəkətlərdir: əyrilər tolerantlıq daxilində qısa xətlərdir (`G2`/`G3` yoxdur), kobud emal və diş açma keçid-keçid yazılır (`G71` və ya `G76` dövrləri yoxdur).
- Diş açma sonunda düz çıxarma ilə düz keçidlərdir; diş üçün yüngülləşdirici yiv verin. Diş xam materialda göstərilmir.
- Mərkəzdə qazma xam material modelini dəyişmir.
- Tutacaq, torret və patron yoxlanılmır. Çənələrdən alətin uzaq qalması üçün **Z-də dayandır** təyin edin.
- İrəliləmə və sürətlər frezə kimi başlanğıc qiymətlərdir.
