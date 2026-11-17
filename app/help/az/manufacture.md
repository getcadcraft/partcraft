---
title: Alət yollarını və G-kodunu hazırla (İstehsal)
summary: Xammalı və iş başlanğıcını təyin edin, alətləri seçin, üz, yuva, kontur, deşmə və faska əməliyyatlarını üzləri seçməklə əlavə edin, bütün modeli 3D-də bitirin (paralel, scallop), xammalı modelə qarşı simulyasiya edin və üç hazır post-dan və ya öz redaktə etdiyiniz postdan G-kodu yükləyin.
keywords: dəqiq STEP, sex üçün step, iş koordinatları, cam ötürmə, paralel, scallop, 3D bitirmə, bitirmə, kürə burun, alət kitabxanası, postu redaktə et, xüsusi post, post redaktoru, adaptiv, adaptiv təmizləmə, sabit tutum, trochoidal, hsm, yüksək sürətli emal, istehsal, CAM, alət yolu, G-kod, NC, CNC, freza, frezeləmə, yuva, kontur, profil, üzləmə, deşmə, peck, G83, G81, G73, faska, xammal, iş ofseti, G54, post prosessor, GRBL, LinuxCNC, irəliləmə və fırlanma sürəti, simulyasiya, həddən artıq kəsim, dövr müddəti
from: beeb29aa
---

İstehsal iş sahəsi detalı 3-oxlu freza maşını üçün alət yollarına çevirir və onları G-kod kimi yazır. Əksər əməliyyatlar **2.5-oxludur**: alət şaquli qalır, divarlar düz aşağı, döşəmələr düz kəsilir. **Paralel** və **Scallop** əyri səthləri 3D-də bitirir (bax: [3D bitirmə](topic:finish-3d)); alət yenə şaquli qalır (üç ox, əyilmə yoxdur). Detal üzərində mesh nüvəsinin verdiyi adlandırılmış üzlərlə işləyir (bax: [Mesh nüvəsi](topic:solid-kernels)).

Laboratoriya versiyası: hər proqramı öz idarəetmənizin simulyatorunda yoxlayın və əvvəlcə xammalın üstündə havada işə salın.

## Quraşdırma

1. İş sahəsi dəyişdiricisində **İstehsal** seçin, sonra {{ui:Yeni quraşdırma}}.
2. **Quraşdırma** bölməsində təyin edin:
   - **Alət oxu (+Z)**: alət detalın içinə hansı istiqamətdə baxır. Dünya +Y (PartCraft-ın yuxarısı) standartdır; onda maşın X dünya X-dir, maşın Y isə dünya −Z.
   - **İş başlanğıcı (G54)**: xammalın küncü və ya mərkəzi, üst və ya alt, modelin yuxarı mərkəzi və ya model başlanğıcı.
   - **Xammal**: qutu və ya silindr, ya model artı ofsetlər (yan, üst, alt) və ya sabit ölçü.
   - **Material** (başlanğıc irəliləmə və fırlanma sürətini təyin edir), **Post-prosessor** (idarəetmə), maşının maksimum şpindel sürəti, sürətli hərəkət və alət dəyişmə vaxtı, soyuducu maye və proqram nömrəsi.

## Alətlər

**Alətlər** bölməsi kitabxananı saxlayır: düz, kürə və yarımkürə burunlu frezlər, deşicilər, faska frezləri və üz frezləri, hər birinin T nömrəsi, diametri, dişləri və diş uzunluğu (tətbiq olunduğu yerdə üstəlik künc radiusu, uc və ya faska bucağı ilə).

Öz alətlərim brauzerdə saxlanıla və fayl kimi kompüterlər arasında köçürülə bilər: bax: [Alət kitabxanası](topic:tool-library).

Şpindel sürəti və irəliləmə materialdan gəlir: n = 1000 × kəsmə sürəti / (π × diametr), irəliləmə = n × diş sayı × çip yükü (deşicilər üçün: n × dövrə görə irəliləmə). Rəqəmlər nəşr olunmuş diapazonlardan götürülmüş mühafizəkar başlanğıc dəyərləridir, maşınınıza görə tənzimlənməyib; onları üstələmək üçün alət istehsalçınızın kəsmə sürətini, çip yükünü, dövr/dəqiqəni və ya irəliləməni yazın. Sürət maşının maksimumunu keçəndə ora sabitlənir və irəliləmə çip yükünü saxlayaraq ona uyğunlaşır.

## Əməliyyat əlavə edin

Hər alət paneli düyməsi bir əməliyyat əlavə edir və həndəsə lazım olan yerdə seçməyə başlayır: görünüşdə üzləri və ya kənarları klikləyin (bir dənəni çıxarmaq üçün yenidən klikləyin), sonra {{ui:Seçimi bitir}} və ya {{key:Esc}}.

| Əməliyyat | Seçim | Nə edir |
|---|---|---|
| {{ui:Üz}} | heç nə | Xammalın bütün üzərində, kənarlarından kənara, modelin yuxarısına qədər zig-zag keçidlər |
| {{ui:Yuva}} | düz döşəmə üzü, dəlik və ya qapalı kənar zənciri | Bölgəni daxildən xaricə ofset keçidlərlə, hər dərinlik addımında təmizləyir; adalar (döşəmədə yuxarı qalxan üzlər) qalır; hər tərəfi açıq döşəmə (kənarında yuxarı heç nə yoxdur) xammal kənarına qədər təmizlənir |
| {{ui:Adaptiv}} | Yuva ilə eyni | Eyni bölgəni, hər biri təyin olunmuş eni kəsən keçidlərlə təmizləyir (**Əhatə**, diametrin bir hissəsi), belə ki kəsici heç vaxt tam eni olan yuvanı almır, hətta künclərdə; spiralla girir və hər səviyyədə divarları bitirir. Dar kəsimlər daha dərin addım və daha yüksək irəliləmə verir |
| {{ui:Kontur}} | düz üz (onun konturu), dairəvi üz və ya kənarlar | Alət radiusu ilə ofset olunmuş konturu izləyir, xaricə və ya daxilə, giriş və çıxış qövsləri və istəyə görə tabs ilə |
| {{ui:Qazma}} | deşiklər (deşiyin divarına və ya kənarına klik) | Hər deşiyi hazır dövrə ilə deşir: peck (G83), deşmə (G81) və ya çip qırma (G73); ya da hər eyni ölçülü deşiyi deşmək üçün diametr verin |
| {{ui:Faska}} | üzün konturu və ya kənarları | Kənar boyunca faska frezi işlədir ki, təyin etdiyiniz eni kəssin |
| {{ui:Paralel}} | heç nə (bütün model) | İstənilən bucaqda paralel xətlərlə 3D bitirmə, kürə, yarımkürə və ya düz frezlə səthi izləyərək. Bax: [3D bitirmə](topic:finish-3d) |
| {{ui:Scallop}} | heç nə (bütün model) | Səth üzərində bir-birindən təyin olunmuş məsafədə keçidlərlə 3D bitirmə, belə ki aralarındakı silsilənin hündürlüyü istədiyiniz qədər olsun |

Siyahıda əməliyyat seçin ki, alətini, hündürlüklərini (təmizlənmə, geri çəkilmə, irəliləmə hündürlüyü, üst, alt), addım dərinliyini, addım enini, qalan xammalı, bitirmə keçidini, giriş üsulunu (spiral, enmə və ya dalma), dırmanma (climb) frezələməni, tabs və ya dövrəni dəyişəsiniz. {{ui:Yuxarı}} və {{ui:Aşağı}} sıranı dəyişir, {{ui:Söndür}} əməliyyatı çıxarır, {{ui:Sil}} onu silir. Hər şey geri qaytarma tarixçəsindədir və detal faylında saxlanılır.

Yuvanın addım eni diametrin ən çox yarısıdır, belə ki döşəməsinin hər nöqtəsi bir keçidin bir alət radiusu daxilindədir. Daxili künclər alətin radiusunu saxlayır.

**Adaptiv təmizləmə** kəsicinin tutumunu bir dəyərə yaxın saxlayır. Diametrin 0,15-i olan tutum təxminən 46°-lik tutum bucağıdır: materialdakı kəsici kənarının qövsü. Ofset yuva isə əksinə, ilk keçiddə tam eni kəsir və hər daxili küncdə daha çox dolanır. Keçidlər arasında alət kəsilməmiş havada hərəkət edərkən aşağıda qalır, digər yerlərdə kəsilməmiş havada qalxır və enir. Keçidlər bölgənin üzərində incə şəbəkədə (xanalar alət radiusunun təxminən on ikidə biri) hesablanır, ona görə tutum təyin olunandan xanaya qədər bir qədər geniş ola bilər; divarlar dəqiq bitirilir. Böyük açıq bölgə çoxlu qısa hərəkətli uzun proqram verir.

## Simulyasiya

Alət yolları hər dəyişiklikdən sonra yenidən yaradılır (detalın da). {{ui:Simulyasiya}} həmçinin bütün proqramdan sonra qalan xammalı göstərir. Panel bunları göstərir:

- **Dövr müddəti**: irəliləmə hərəkətləri öz irəliləməsi ilə, sürətli hərəkətlər quraşdırmanın sürətli hərəkət sürəti ilə düz xətlər kimi, üstəlik alət dəyişmə vaxtı. Real maşınlar təcillənir, ona görə daha uzun çəkirlər.
- **Həddən artıq kəsim**: alətin detalın səthindən 0,02 mm-dən çox aşağı getdiyi yerlər. Qırmızı işarələr onları görünüşdə göstərir.
- **Detalda qalan xammal**.

Xammal yuxarının hündürlük xəritəsidir (Z-xəritə), ona görə daxilə doğru kəsikləri göstərə bilməz. Alətin proqram boyunca hərəkət etməsi üçün **İjra**-nı sürüşdürün. Görünüşdə irəliləmə hərəkətləri davamlı, sürətli hərəkətlər kəsikli, hər əməliyyat üçün bir rəng.

**Simulyasiya olunmuş xammalı göstər** açıq olanda, xammal modelə qarşı xana-xana rənglənir: model üzərində olduğu yerdə (0,02 mm daxilində) **yaşıl**, alətin modelə kəsdiyi yerdə **qırmızı**, modeldə xammal qalan yerdə nazik qat üçün **sarı**, daha çoxu üçün **narıncı**, 1 mm və ya daha çox olduqda kəsilməmiş xammalın **boz** rənginə keçir. Rənglər hər dəyişiklikdə eyni hündürlük xəritəsindən yenidən yaradılır, panelin rəqəmləri ilə eynidir, belə ki yaşıl və qırmızı Həddən artıq kəsim sətri ilə uyğun gəlir. Faska modelə qəsdən kəsir və kənarı boyunca qırmızı göstərir.

## G-kodu post et

**Post-prosessor** altında idarəetməni seçin və {{ui:G-kodu yüklə}} basın (və ya alət panelində {{ui:Post-prosessor}}):

| İdarəetmə | Fayl | Qeydlər |
|---|---|---|
| Fanuc tipli ISO | .nc | %, O nömrəsi, sətir nömrələri, G43 H ilə T M6, hazır dövrələr |
| GRBL | .nc | Alət dəyişdiricisi və hazır dövrələr yoxdur: alət dəyişməsi M0 ilə dayanır, deşmə sadə hərəkətlər kimi yazılır |
| LinuxCNC | .ngc | G43 H ilə T M6, hazır dövrələr, M2 |
| Öz postunuz | istənilən | Yazdığınız və ya dəyişdirdiyiniz post: {{ui:Postu redaktə et…}}, {{ui:Yeni post…}}, {{ui:Post faylını idxal et…}} |

Hər fayl proqram, xammal, iş ofseti və alətlər üçün şərhlərlə başlayır. Koordinatlar millimetrlə, 3 onluq rəqəmlə yazılır. {{ui:Alət yolu CSV}} və {{ui:Alət yolu JSON}} hərəkətlərin özlərini ixrac edir.

**Kəsməzdən əvvəl çıxışı maşınınızın öz simulyatorunda yoxlayın və əvvəlcə xammalın üstündə havada işə salın.** Üç daxili post idarəetmənin sənədləşdirilmiş davranışını izləyən başlanğıc nöqtələridir; onlar heç bir konkret maşında sınaqdan keçməyib. Dəyişdirdiyiniz post sizindir, sübut da sizindir. Necə yazılacağı: [Post prosessorları](topic:post-processors).

## Maşına proqram göndərin

Masaüstündə CadCraft Studio-da, Studio-da qurulmuş maşınla, **Maşına göndər…** {{ui:G-kodu yüklə}} yanında görünür və eyni proqramı şəbəkənizdəki maşına yükləyir. PartCraft-dan heç vaxt başlanmır: maşında hər şey aydın olanda özünüz başladın. Brauzerdə düymə göstərilmir (veb səhifə şəbəkənizdəki maşına çata bilməz): onun əvəzinə proqramı yükləyin.

## Hədlər

- Yuvalar, konturlar, deşmə və faskalar 2.5-oxludur. Əyri üzlər 3D-də bitirilə bilər ([paralel və scallop](topic:finish-3d)), lakin 3D-də kobud emal olunmur (konus sən bitirənə qədər pillələr kimi qalır) və qalıq emalı yoxdur. Adaptiv təmizləmə 2D-dir (düz döşəmələr).
- Yalnız üç ox: əyilmə yox, dönmə yox, yoxlama yox.
- Tutacaqlar və gövdələr toqquşma üçün yoxlanmır; kəsim diş uzunluğundan dərin olduqda xəbərdarlıq çıxır.
- İrəliləmə və fırlanma sürətləri başlanğıc dəyərləridir. Post redaktə oluna bilən mətndir, lakin yalnız hərəkətlərin necə yazılacağını müəyyənləşdirir; alət yolunu dəyişə, ox əlavə edə və ya maşınınızı tanıya bilməz ([Post prosessorları](topic:post-processors) edə bilmədiklərini sadalayır).
