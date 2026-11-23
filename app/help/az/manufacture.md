---
title: Alət trayektoriyaları və G-kodu yaradın (İstehsal)
summary: Xam materialı və iş başlanğıcını təyin edin, alətləri seçin, səthləri seçməklə üz, cib, kontur, deşmə və faska əməliyyatları əlavə edin, detalı 3D-də bütövlükdə emal edin (paralel, scallop), xam materialı modelə qarşı qırılmalar və dövr müddəti üçün simulyasiya edin və üç daxili postdan birindən və ya özünüz redaktə etdiyiniz postdan G-kodu yükləyin.
keywords: dəqiq step, dükan üçün step, iş koordinatları, cam ötürməsi, paralel, scallop, 3d səth emalı, səth emalı, kürəvi freza, alət kitabxanası, postu redaktə et, fərdi post, post redaktoru, uyğunlaşan, uyğunlaşan təmizləmə, sabit təmas, trokoidal, hsm, yüksək sürətli emal, istehsal, CAM, trayektoriya, G-kod, NC, CNC, freza, frezeleme, cib, kontur, profil, üzləmə, deşmə, peck, G83, G81, G73, faska, xam material, iş sürüşməsi, G54, post-prosessor, GRBL, LinuxCNC, irəliləmə və sürətlər, simulyasiya, həddən artıq kəsmə, dövr müddəti
from: f8a03be8
---

İstehsal iş sahəsi detalı alət trayektoriyalarına çevirir və onları G-koduna yazır. Əməliyyatların çoxu **2,5 oxlu** frezelənmədir: alət şaquli qalır, divarlar düz aşağıya kəsilir, döşəmələr isə düzdür. **3D kobud** və **Qalan** əyri detalları 3D-də təmizləyir ([3D kobud emal və qalan material emalı](topic:rough-3d)); **Paralel** və **Scallop** isə onları bitirir ([3D səth emalı](topic:finish-3d)). Fırlanan oxları olan dəzgahda istənilən əməliyyat meyilli alətlə işləyə bilər və iki əməliyyat kəsərkən fırlanan oxları hərəkət etdirir ([4 və 5 oxlu emal](topic:multi-axis)). Torna dəzgahı üçün əməliyyatlar var ([Torna emalı](topic:turning)) və zond üçün də ([Zondlama](topic:probing)). Detalın mesh kernel-in verdiyi adlandırılmış üzlər üzərində işləyir (bax: [Mesh kernel](topic:solid-kernels)).

Laboratoriya versiyası: hər proqramı dəzgahınızın öz simulyatorunda yoxlayın və əvvəlcə xam materialın üstündə havada işə salın.

## Quraşdırma

1. İş sahəsi dəyişdiricisindən **İstehsal** seçin, sonra {{ui:New setup}} düyməsinə basın.
2. **Quraşdırma** sekmesində seçin:
   - **Alət oxu (+Z)**: alət detala hansı istiqamətdə yönəlir. Dünya +Y (PartCraft-ın yuxarısı) standartdır; bu halda dəzgah X-i dünya X-dir, dəzgah Y-i isə dünya −Z-dir.
   - **İş başlanğıcı (G54)**: xam materialın küncü və ya mərkəzi, üst və ya alt, modelin üst mərkəzi və ya modelin başlanğıcı.
   - **Xam material**: qutu və ya silindr; ya model artı ofsetlər (yanlar, üst, alt), ya da sabit ölçü.
   - **Material** (başlanğıc irəliləmə və sürətləri təyin edir), **post** (kontroller), dəzgahın maksimum şpindel sürəti, sürətli hərəkət sürəti və alət dəyişmə müddəti, soyuducu və proqram nömrəsi.

## Alətlər

**Alətlər** sekmesində kitabxana var: düz, kürəvi və künclü frezalar, qazmalar, faska frezaları və üz frezaları; hər biri T nömrəsi, diametr, yivlər və yiv uzunluğu ilə (tətbiq olunduğu yerdə həmçinin künc radiusu, uc və ya faska bucağı ilə).

Öz alətlərim brauzerdə saxlana və fayl kimi kompüterlər arasında daşına bilər: bax [Alət kitabxanası](topic:tool-library).

Şpindel sürəti və irəliləmə materialdan gəlir: n = 1000 × kəsmə sürəti / (π × diametr), irəliləmə = n × yiv sayı × çip yükü (qazmalar: n × dövrə görə irəliləmə). Rəqəmlər nəşr olunmuş diapazonlardan götürülmüş mühafizəkar başlanğıc qiymətlərdir, sizin dəzgahınız üçün tənzimlənməyib; onları əvəz etmək üçün alət istehsalçınızın kəsmə sürətini, çip yükünü, dövr/dəqiqəni və ya irəliləməni yazın. Sürət dəzgahın maksimumunu keçdikdə o, orada saxlanılır və irəliləmə çip yükünü qorumaq üçün ona uyğunlaşır.

## Əməliyyat əlavə edin

Hər alət paneli düyməsi bir əməliyyat əlavə edir və həndəsə lazım olduqda seçim başlayır: görünüşdə üzləri və ya kənarları klikləyin (birini atmaq üçün yenidən klikləyin), sonra {{ui:Done picking}} və ya {{key:Esc}}.

| Əməliyyat | Seçim | Nə edir |
|---|---|---|
| {{ui:Face}} | heç nə | Xam materialın bütün üzərindən, kənarlarından kənara, modelin yuxarısına qədər zig-zag keçidlər |
| {{ui:Pocket}} | düz döşəmə üzü, dəyirmi deşik və ya bağlı kənar zənciri | Bölgəni hər dərinlik addımında içəridən-xaricə ofset keçidləri ilə təmizləyir; adalar (döşəmədə yuxarı qalxan üzlər) buraxılır; hər tərəfdən açıq döşəmə (ondan kənarda yüksək heç nə yoxdur) xam material kənarına qədər təmizlənir |
| {{ui:Adaptive}} | Pocket ilə eynidir | Eyni bölgəni hər biri təyin olunmuş eni kəsən keçidlərlə təmizləyir (**Engagement**, diametrin bir hissəsi), beləliklə freza künclərdə belə heç vaxt tam enli yiv kəsmir; spiral ilə girir və hər səviyyədə divarları bitirir. Dar kəsiklər daha dərin dərinlik addımına və daha yüksək irəliləməyə imkan verir |
| {{ui:Contour}} | düz üz (onun konturu), dəyirmi üz və ya kənarlar | Konturu alət radiusu qədər ofset edərək izləyir, xaricdə və ya içəridə, giriş və çıxış qövsləri və istəyə görə tabbar ilə |
| {{ui:Drill}} | deşiklər (deşiyin divarını və ya kənarını klikləyin) | Hər deşiyi sabit dövrlə (peck G83, qazma G81 və ya çip qırılması G73) deşir; ya da həmin ölçüdə hər deşiyi deşmək üçün diametr verin |
| {{ui:Chamfer}} | üzün konturu və ya kənarları | Faska frezasını kənar boyunca gəzdirir ki, təyin etdiyiniz eni kəssin |
| {{ui:Parallel}} | heç nə (bütün model) | İstənilən bucaqda paralel xətlərlə 3D səth emalı, kürəvi, künclü və ya düz freza ilə səthi izləyir. Bax: [3D səth emalı](topic:finish-3d) |
| {{ui:Scallop}} | heç nə (bütün model) | Səth üzərində bir-birindən təyin olunmuş məsafədə keçidlərlə 3D səth emalı, beləliklə aralarındakı silsilə istədiyiniz hündürlükdə olur |

Siyahıda əməliyyatı seçin ki, onun alətini, hündürlüklərini (təmizlənmə, geri çəkilmə, irəliləmə hündürlüyü, üst, alt), dərinlik addımını, yan addımı, saxlanılacaq materialı, bitirmə keçidini, girişi (spiral, meyl və ya dalma), uzun frezelənməni (climb), tabları və ya dövrü dəyişəsiniz. {{ui:Up}} və {{ui:Down}} sıranı dəyişir, {{ui:Suppress}} əməliyyatı kənarda qoyur, {{ui:Delete}} onu silir. Hər şey geri alma tarixçəsindədir və hissə faylında saxlanılır.

Cibin yan addımı alət diametrinin ən çoxu yarısıdır, beləliklə döşəməsinin hər nöqtəsi bir alət radiusu daxilində keçidə düşür. Daxili künclər alətin radiusunu saxlayır.

**Adaptive təmizləmə** frezanın təmasını bir dəyərə yaxın saxlayır. Diametrin 0,15-i qədər təmas təxminən 46° təmas bucağına bərabərdir: materialdakı alət kənarının qövsü. Ofsetli cib isə əksinə, ilk keçiddə tam eni kəsir və hər daxili künc ətrafında daha çox dolanır. Keçidlər arasında alət kəsilməmiş havadan keçən yerdə aşağıda qalır, başqa yerdə isə havada qalxır və enir. Keçidlər bölgə üzərində incə şəbəkədə hesablanır (xanalar alət radiusunun təxminən on ikidə biri), ona görə təmas təyin edildiyindən bir xana qədər geniş ola bilər; divarlar dəqiq bitirilir. Böyük açıq bölgə qısa hərəkətlərlə uzun proqram yaradır.

## Simulyasiya

Trayektoriyalar hər dəyişiklikdən sonra yenidən hazırlanır (detalın özü də belə). {{ui:Simulate}} bütün proqramdan sonra qalan xam materialı da göstərir. Panel bunları göstərir:

- **Dövr müddəti**: irəliləmə hərəkətləri öz irəliləməsi ilə, sürətli hərəkətlər quraşdırmanın sürətli hərəkət sürəti ilə düz xətt kimi, üstəlik alət dəyişmə müddəti. Real dəzgahlar sürətlənir, ona görə daha uzun çəkirlər.
- **Həddən artıq kəsmələr**: alətin detalın səthindən 0,02 mm-dən çox aşağı getdiyi yerlər. Qırmızı işarələr onları görünüşdə göstərir.
- **Detal üzərində qalan material**.

Xam material üstün hündürlük xəritəsidir (Z-xəritəsi), ona görə altdan kəsikləri göstərə bilmir. Alətin proqram boyunca hərəkəti üçün **Oynat** sürüşdürücüsünü çəkin. Görünüşdə irəliləmə hərəkətləri dolu, sürətli hərəkətlər isə nöqtəli xətlə göstərilir, hər əməliyyat üçün bir rəng.

**Simulyasiya olunmuş xammalı göstər** aktiv olduqda, xam material modelə qarşı xanalar ilə rəngləşir: **yaşıl** modeldə olduğu yerdə (0,02 mm daxilində), **qırmızı** alətin modelə kəsdiyi yerdə, material modelin üzərində qaldığı yerdə isə nazik təbəqə üçün **sarı**, daha çox üçün **narıncı**, 1 mm və ya daha çox olduqda isə kəsilməmiş xammalın **boz** rənginə keçir. Rənglər hər dəyişiklik ilə yenidən hesablanır, paneldəki rəqəmlərlə eyni hündürlük xəritəsindən: buna görə yaşıl və qırmızı Həddən artıq kəsmə sətri ilə uyğundur. Faska modelə qəsdən kəsir və kənarı boyunca qırmızı göstərir.

## Postun G-kodu

**Post** altında kontrolleri seçin və {{ui:Download G-code}} düyməsinə basın (və ya alət panelində {{ui:Post}}):

| Kontroller | Fayl | Qeydlər |
|---|---|---|
| Fanuc tipli ISO | .nc | %, O nömrəsi, sətir nömrələri, T M6 və G43 H, sabit dövrlər |
| GRBL | .nc | Alət dəyişdiricisi və sabit dövrlər yoxdur: alət dəyişməsi M0 ilə dayanır, deşmə sadə hərəkətlər kimi yazılır |
| LinuxCNC | .ngc | T M6 və G43 H, sabit dövrlər, M2 |
| Fanuc tipli torna | .nc | Torna proqramları üçün: X diametr kimi, dövrə görə irəliləmə, G50 həddi altında G96, G32 diş açma |
| LinuxCNC torna | .ngc | Torna proqramları üçün: G7 diametrlər, G95, G96, G33 diş açma; homing hərəkəti yazmır |
| Öz postunuz | istənilən | Yazdığınız və ya dəyişdirdiyiniz post: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Hər fayl proqram, xam material, iş sürüşməsi və alətlər üçün şərhlərlə başlayır. Koordinatlar millimetrlərlə, 3 onluq rəqəmlə yazılır. {{ui:Toolpath CSV}} və {{ui:Toolpath JSON}} hərəkətlərin özünü ixrac edir.

**Kəsmədən əvvəl çıxışı öz dəzgahınızın simulyatorunda yoxlayın və əvvəlcə xam materialın üstündə havada işə salın.** Üç daxili post kontrollerin sənədləşdirilmiş davranışını izləyən başlanğıc nöqtələridir; onlar heç bir konkret dəzgahda sınanmayıb. Dəyişdirdiyiniz post sizindir və onu özünüz sübut etməlisiniz. Postun necə yazılacağı: [Redaktə edilə bilən post-prosessorlar](topic:post-processors).

## Sex üçün dəqiq STEP

**Əməliyyatlar** sekmesində G-kod düymələrinin altında {{ui:Exact STEP (work coordinates)}} `<part>-work.step` faylını yükləyir: detal dəqiq bərk cisim kimi (deşiklər və çıxıntılar üçün həqiqi silindrlər, kənarları üçün həqiqi dairələr) bu quraşdırmanın iş başlanğıcında başlanğıcla və Z-i alət oxu boyunca olmaqla. Bunlar G-kodun istifadə etdiyi koordinatlardır, buna görə sexin öz CAM proqramı və ya yoxlayıcısı modeli proqrama uyğunlaşdırır, onu yerindən tərpətmədən. Fayl yalnız detalı saxlayır, xam materialı və trayektoriyaları yox.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} eyni bərk cismi detalın öz yerində (Z yuxarı) yazır: bax [Çap və STEP və DXF üçün ixrac](topic:export-files#for-other-cad-programs-step).

## Məhdudiyyətlər

- Cib, kontur, deşmə və faskalar 2,5 oxludur. Əyri detallar öz əməliyyatları ilə 3D-də kobud və bitirilir ([3D kobud emal və qalan material emalı](topic:rough-3d), [3D səth emalı](topic:finish-3d)). Uyğunlaşan təmizləmə 2D-dir (düz döşəmələr).
- Meyilli alətlər, 5 oxlu və 4-cü oxlu səth emalı, torna və zondlama mövcuddur, hər birinin öz məhdudiyyətləri var və **heç biri dəzgahda işlədilməyib**: bax [4 və 5 oxlu emal](topic:multi-axis), [Torna emalı](topic:turning) və [Zondlama](topic:probing).
- Tutacaqlar və ştanqlar toqquşma üçün yoxlanılmır; kəsik yiv uzunluğundan dərin olduqda xəbərdarlıq görünür.
- İrəliləmə və sürətlər başlanğıc qiymətlərdir. Post redaktə edilə bilən mətndir, lakin yalnız hərəkətlərin necə yazılacağını müəyyən edir; trayektoriyanı dəyişə, ox əlavə edə və ya sizin dəzgahınızı tanıya bilməz ([Post-prosessorlar](topic:post-processors) onun edə bilmədiklərini sadalayır).

## Proqramı dəzgaha göndərin

Masaüstündə CadCraft Studio-da, Studio-da qurulmuş dəzgahla, **Send to a machine…** düyməsi **Download G-code** yanında görünür və eyni proqramı şəbəkənizdəki dəzgaha yükləyir. Bu, PartCraft-dan heç vaxt başlamır: aydın olduqda onu dəzgahın yanında başladın. Brauzerdə düymə göstərilmir (veb səhifə şəbəkənizdəki dəzgaha çata bilməz): onun əvəzinə proqramı yükləyin.
