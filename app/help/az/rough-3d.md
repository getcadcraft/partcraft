---
title: 3D kobud emal və qalan material emalı
summary: Bütün modelin ətrafındakı xam materialı səviyyə-səviyyə düz, künclü və ya kürəvi freza ilə təmizləyin, bitirmə üçün material saxlayın, sonra daha kiçik alət yalnız birinci alətin qoyduğu materialın olduğu yerdə kəssin. Trayektoriyaların nəyə zəmanət verdiyi və nəyə vermədiyi.
keywords: 3d kobud emal, kobud emal, kobud, qalan material emalı, qalan kobud emal, qalan material, saxlanılacaq material, addım dərinliyi, səviyyələr, z səviyyəsi, su xətti, meyl, dalma, həddən artıq kəsmə, kiçik alət
from: 29ddc266
---

Manufacture-da, alət panelində {{ui:More}} altında iki əməliyyat **bütöv modeldən** 3D-də xam materialı təmizləyir, alət şaquli saxlanılmaqla (və ya əməliyyatın öz [alət istiqaməti](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) boyunca). Onlar seçim tələb etmir.

## 3D kobud emal

{{ui:3D rough}} xam materialın üstündən bir dəfəyə bir **dərinlik addımı** aşağı işləyir. Hər səviyyədə alətin modələ toxunmadan çata biləcəyi hər şeyi təmizləyir: bir **yan addım** aralı düz sıralar (alət diametrinin bir hissəsi), sonra çata biləcəyi sahənin kənarı ətrafında bir dəfə, beləliklə divarlar izlənir və planda pilləli sıra kimi qalmır.

- **Saxlanılacaq material**: alətin modeldən hər yerdə nə qədər uzaq qaldığı, bitirmə keçidi üçün (defolt 0,5 mm).
- **Hər düz üzdə səviyyə**: modelin hər düz üzünün hündürlüyündə əlavə səviyyə (üstəlik saxlanılacaq material), beləliklə döşəmə bir dərinlik addımı qədər yüksəkdə qalmır.
- **Bundan incə materialı nəzərə alma**: bundan incə material, yuxarı və ya yanlara, keçidə dəyməz (kobud emal üçün 0,05 mm, qalan material emalı üçün 0,5 mm, belə ki divar boyunca bir tel kiçik aləti hər divar ətrafında göndərməsin).
- **Dib**: bu hündürlükdən aşağı heç nə kəsilmir. Boş olduqda modelin dibi.

Əvvəlki əməliyyatların qoyduğu xam materialdan **başlayır**: üz keçidindən sonra üz frezasının keçdiyi havanı kəsmir.

Aşağı enmək: alət aşağı enərkən material ilə qarşılaşdığı yerdə öz keçidi boyunca **meyl bucağı** ilə yan-yana gedir, ən çox iki alət diametri üzərində geri-irəli. Bu üçün çox qısa olan keçid daha yavaş dalma irəliləməsi ilə düz aşağı dalınır; əməliyyat bunları sayır və xəbərdarlıq edir, çünki mərkəzində kəsməyən alət bunu etməməlidir.

## Qalan material emalı

{{ui:Rest}} **böyük aletdən sonra kiçik alət** üçün eyni strategiyadır. Xam material simulyasiyasını oxuyur və yalnız materialın hələ dayandığı yerdə kəsir: böyük alətin dönə bilmədiyi daxili künclər, sığmadığı yuvalar, yamaclarda qoyduğu pilləklər. Qalan yerlərdə heç nə etmir, ona görə onun trayektoriyası eyni alətin təzə xam material üzərində alacağı işin kiçik bir hissəsidir.

Kobud emaldan sonra qoyun və kiçik aləti seçin. Əvvəldəki əməliyyatların xam material simulyasiyasına ehtiyacı var, iş sahəsi onu həmişə işə salır.

## Trayektoriyaların keyfiyyəti

- **Həddən artıq kəsmə yoxdur.** Alətin mövqeləri şəbəkədə hesablanır, kəsici yanlara doğru 1,4 şəbəkə xanası və saxlanılacaq material qədər böyüdülmüş (belə ki harada dursa modeldən təmizdir). Testlər hər kəsmə nöqtəsini mesh üzərində dəqiq alətlə yoxlayır və hər işləmədən sonra xam material simulyasiyası: həddən artıq kəsmə yoxdur, xammal boyunca sürətli hərəkət yoxdur.
- **Bunun qiyməti**: divarlar, əməliyyatda "Divarlarda əlavə material" kimi göstərilən məbləğə qədər, saxlanılacaq materialdan bir az çox saxlayır (Ø6 alət üçün təxminən 0,5 mm, kiçik alət üçün daha az). Bitirmə keçidi onu götürür.

Bunlar nə deyil:

- Sıralar düz xətlərdir, hissənin formasının ofsetləri və ya sabit-qarışıqlıq əyriləri deyil. Ofset və ya uyğunlaşan strategiyadan daha çox qaldırma və hava hərəkəti edirlər, və hər səviyyədə birinci sıra alətin tam enini kəsir. Düz döşəmə cibləri üçün [Uyğunlaşan](topic:manufacture) daha yaxşı kobud emaldır.
- Alətin gövdəsi və tutacağı yoxlanılmır. Kəsik yiv uzunluğundan dərin olduqda xəbərdarlıq görünür.
- Altdan kəsiklər görünmür: model alətin öz oxu boyunca aşağı enərkən qarşılaşdığı şeydir. Yanı kobudlaşdırmaq üçün ikinci əməliyyata [meyilli alət istiqaməti](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) verin.
- Qalan material emalı xam materialı yalnız simulyasiya şəbəkəsinin (hissənin ölçüsünə görə 0,1 ilə 2 mm xana) imkan verdiyi qədər bilir.
- Böyük detalda proqram uzundur (Ø6 alətlə 200 mm flanş üçün 100.000-dən çox hərəkət) və hesablanması təxminən bir dəqiqə çəkir; iş sahəsindəki hər dəyişiklik bütün proqramı yenidən hesablayır. Kobud emal üçün sığan ən böyük aləti istifadə edin.
- Kəsməzdən əvvəl çıxışı öz dəzgahınızın simulyatorunda yoxlayın.
