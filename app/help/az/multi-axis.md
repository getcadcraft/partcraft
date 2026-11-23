---
title: 4 və 5 oxlu emal
summary: PartCraft-a dəzgahın hansı fırlanan oxlara malik olduğunu deyin, istənilən adi əməliyyat üçün alət əyin, kəsərkən meyil edən kürəvi freza ilə səthi emal edin və ya 4-cü ox üzərində detalı alətin altında fırladın. G-koda nə yazılır və nə sübut olunmayıb.
keywords: 5 ox, beş ox, 4 ox, dördüncü ox, çoxoxlu, multiaxis, 3+2, indekslənmiş, mövqeli, meyl, meyilli alət, fırlanan, trunnion, masa, başlıq, a oxu, b oxu, c oxu, tcp, rtcp, alət mərkəz nöqtəsi, g43.4, tərs vaxt, g93, kinematika, pivot, swarf, aparıcı bucaq
from: c4f1c491
---

İstehsal aləti bucaq altında tuta bilər və kəsərkən fırlanan oxları hərəkət etdirə bilər. Bunu üç şey edir, ən sadədən başlayaraq.

**Burada heç nə dəzgahda işlədilməyib.** Trayektoriyalar testlərlə həndəsəyə qarşı yoxlanılıb və G-kod geri oxunub, lakin daxili postlar kontrollerlərin sənədləşdirilmiş kodlarını izləyir, qarşımızdakı heç bir dəzgahı yox. Proqramı öz kontrollerinizin simulyatorunda və havada metaldan əvvəl sübut edin.

## Dəzgahın fırlanan oxları

**Quraşdırma** sekmesində {{ui:Rotary axes}} dəzgahda nə olduğunu deyir:

| Seçim | Dəzgah |
|---|---|
| Yox (3 ox) | Adi freza. Alətin əyilməsini tələb edən hər əməliyyat xəbərdarlıq edir və post onu yazmaqdan imtina edir. |
| A (X ətrafında fırlanır) | X boyunca bir fırlanan ox: 4-cü ox masası və ya indeksləyici. Alət yalnız Y–Z müstəvisində əyilə bilər. |
| B (Y ətrafında fırlanır) | Y boyunca bir fırlanan ox. Alət yalnız X–Z müstəvisində əyilə bilər. |
| A və C | X ətrafında əyilən ox, Z ətrafında fırlanmanı daşıyan və ya daşınan: trunnion masası və ya başlıq. |
| B və C | Eynisi, əyilmə Y ətrafında. |

Sonra:

- **Daşıyan**: {{ui:The table (the part turns)}} və ya {{ui:The head (the tool turns)}}. Masa eyni üzü alətin altına gətirmək üçün əks istiqamətdə fırlanır, ona görə hər bucağın işarəsi bundan asılıdır.
- **Kontroller alət ucunu trayektoriyada saxlayır (TCP)**: açıq olduqda, proqramdakı X Y Z detalın öz koordinatlarında alət ucudur və qalanını kontroller edir (daxili Fanuc tipli və LinuxCNC postları alət uzunluğu üçün `G43.4` yazır). Bağlı olduqda, masa dəzgahında PartCraft X Y Z-ni fırlanan masanın detalı apardığı kimi yazır, verdiyiniz **fırlanma mərkəzi** ətrafında (iş koordinatlarında; iş başlanğıcı mərkəzdə olduqda 0, 0, 0). Başlıq dəzgahına TCP lazımdır: onsuz proqram dəzgahın pivot uzunluğunu tələb edərdi, PartCraft isə onu bilmir.
- **Əyilmə həddi**: əyilən ox nə qədər gedir.

Dəzgahlar hansının müsbət sayılacağına görə fərqlənir. Oxunuz sizin dəzgahınızda yanlış istiqamətdə fırlanırsa, postun nüsxəsində işarəni dəyişin ([Redaktə edilə bilən post-prosessorlar](topic:post-processors)).

## Adi əməliyyat üçün meyilli alət

Hər frezə əməliyyatının (üz, cib, uyğunlaşan, kontur, deşmə, faska, paralel, scallop, 3D kobud, qalan) **Alətin əyilməsi** və **Bu istiqamətə əyilmə** var: yalnız həmin əməliyyat üçün alətin istiqaməti, quraşdırmanın alət oxundan ölçülür. Bu 3+2 emaldır: fırlanan oxlar bir mövqeyə gedir və orada qalır, üç ox isə kəsir.

- İki bucağı yazın və ya {{ui:Tool square to a face}} düyməsinə basın və düz üzə klik edin: alət birbaşa ona işarə edəcək.
- Əməliyyatın üzlərini və kənarlarını adi kimi seçin. Döşəmə və ya deşik nə olduğu meyilli alət boyunca qiymətləndirilir.
- Həmin istiqamət üçün xam material fırlanmış xammalı tutan qutudur, ona görə hündürlüklər və təmizləmələr o tərəfdən təhlükəsizdir.

G-kodda əməliyyatdan əvvəl alət qalxır, fırlanan oxlar dönür və alət ilk nöqtəsinin üzərinə enir. TCP olmadan masa dəzgahında qövslər qövs olaraq qalır və sabit deşmə dövrləri dövr olaraq qalır (yazılmış çərçivə yalnız Z ətrafında fırlanır). TCP ilə meyilli müstəvidə qövslər qısa xətlərə, dövrlər isə təmsil etdikləri hərəkətlərə çevrilir.

Xam material simulyasiyası meyilli istiqaməti **təkbaşına** işlədir: həmin əməliyyatın onun tərəfindən gördüyü xam materialdan nəyi kəsdiyini göstərir və orada həddən artıq kəsmələri tapır, lakin başqa istiqamətlərdən edilən kəsiklər daşınmır.

## 5 oxlu səth emalı

İstehsal alət panelində {{ui:More}} bu əməliyyatı və növbətini **Operations** sekmesinin başında sadalayır.

{{ui:5-axis}} [paralel səth emalı keçididir](topic:finish-3d) ilə **kürəvi freza, gedərkən meyl edir**. Kürə sferi ilə kəsir və sfer onun mərkəzi ətrafında alətin hansı istiqamətə meyl etməsindən asılı olmayaraq eynidir, buna görə kürə 3 oxlu keçidin verdiyi yolu dəqiq izləyir və yalnız alətin istiqaməti dəyişir:

- **Səthə doğru**: 1 = səthə perpendikulyar, 0 = dik, aralarında istənilən.
- **Irəli meyl**: kəsmə istiqamətində dərəcə, belə ki kürənin hərəkətsiz mərkəzi kəsən şey olmasın.
- **Maksimum əyilmə**: alət quraşdırmanın oxundan bundan artıq meyl etmir.

Gövdənin modelə toxunacağı yerdə meyl təmizlənənə qədər geri çəkilir və əməliyyat neçə nöqtədə bunu etdiyini deyir. Hər keçid düz qalxma ilə girir və çıxır.

## Fırlanan səth emalı (4-cü ox)

{{ui:Rotary}} detal fırlanan oxda **iş X** boyunca tutulduqda üçündür. Detal fırlanır və kürəvi freza həmişə oxa işarə edərək onun səthini izləyir:

- **Keçidlər**: {{ui:Along the axis}} (X boyunca xətlər, bir yan addım fırlanmadan aralı) və ya {{ui:Round the part}} (halqalar, bir yan addım X-dən aralı).
- **Ox Y / Z-də**: oxun yeri. Boş olduqda xam materialın ortası. Masa dəzgahında TCP olmadan bu, Quraşdırmadakı fırlanma mərkəzi olmalıdır; əməliyyat bu olmadıqda xəbərdarlıq edir.
- **Başlanğıc / Son X** və **Başlanğıc / Son bucaq**: kəsiləcək uzunluq və fırlanma hissəsi.

Hər nöqtədə kürənin oxun üstündəki hündürlüyü, həmin tərəfdən detalın meshi üzərində sferin dəqiq düşməsidir.

## Məhdudiyyətlər

- 5 oxlu və fırlanan səth emalı yalnız **kürəvi freza** qəbul edir. Swarf kəsmə yoxdur (alətin tərəfi kəsilmiş divarda), səthin öz istiqamətləri boyunca axın xətləri yoxdur, çoxoxlu kobud emal yoxdur və toqquşmadan qaçmaq üçün meylin avtomatik seçimi yoxdur.
- 5 oxlu və fırlanan trayektoriyalar **xam material simulyasiyasından keçmir**, bu hündürlük xəritəsidir və əyilmiş kəsiyi saxlaya bilməz.
- Gövdə 5 oxlu səth emalında yuxarıdan görünən model ilə yoxlanılır; tutacaq, şpindel və dəzgahın özü heç yerdə yoxlanılmır.
- Fırlanan səth emalı yalnız alətin oxa baxaraq gördüyü şeyi kəsir.
- 5 oxlu səth emalı böyük detalda bir dəqiqədən çox hesablanır: gövdə hər keçidin hər nöqtəsində yoxlanılır.
- Fırlanan oxlar xətti oxlarla hərəkət etdikdə və TCP bağlı olduqda, daxili postlar irəliləməni tərs vaxt (`G93`) kimi yazır, sonra `G94`-ə qayıdır.
- Heç bir meyilli iş müstəvisi kodu (`G68.2` və s.) yazılmır və heç bir dəzgaha xas limitlər, açılma və ya toqquşma zonaları məlum deyil.
