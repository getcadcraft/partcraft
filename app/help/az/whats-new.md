---
title: 0.8 və 0.8.1 versiyasında yeniliklər
summary: PartCraft 0.8 redaktə zamanı canlı analiz, "Əvvəl nə qırılır?" yoxlaması, xarici həlledici üçün deck faylları ilə təslim və kontakt tədqiqatları, yığımlar üçün hərəkət tədqiqatları, sərbəst səthlər üçün Səthlər iş sahəsi, Mühəndis iş sahəsində fizikadan ölçülmüş detallar, fotodan eskiz, çap ixracları, G-code-a yerləşdirilmiş vərəqlər və deşikləri ölçüləndirən çertyojlar əlavə edir. 0.8.1 tam ekran kursor donmasını düzəldir.
keywords: yeniliklər, nə yenidir, buraxılış qeydləri, dəyişikliklər, 0.8, 0.8.1, versiya, yeni elementlər, canlı analiz, redaktə edərkən yenilə, qırılır, yük əmsalı, qeyri-xətti, təslim, plastik deformasiya, kontakt, calculix, hərəkət tədqiqatı, klirens, səthlər, nurbs, hamarla, hull, zebra, mühəndis, generator, yaradılmış detal, fotodan eskiz, çap üçün miqyas, çap üçün bölmə, büzülmə, yerləşdirilmiş vərəqlər, g-code, çertyoj, deşikləri ölçüləndirmə, assistent, mcp, dillər, alət paneli sətirləri
from: 62e4dce2
---

Bu, PartCraft 0.8 və 0.8.1 versiyalarında 0.7-yə nisbətən nəyin dəyişdiyidir. Simulyasiya redaktə zamanı cavab verir və nə qırılacağını deyir, yığımlar hərəkət tədqiqatları alır, yeni iş sahələri sərbəst səthlər və fizikadan ölçülmüş detallar yaradır. 0.8.1 kiçik düzəliş buraxılışıdır.

## Yeni

### Simulyasiya

- **Redaktə edərkən yenilə.** Solve blokunda {{ui:Redaktə edərkən yenilə}} qutusunu işarələyin, cavablar redaktələrinizi izləyir. Ölçünü, yükü və ya materialı dəyişin, dərhal dörd dəfə böyük elementlərlə hazırlanmış sürətli cavab görünür; təxminən bir saniyə dayandıqda tədqiqatın öz təkmilləşdirilmiş cavabı onu əvəz edir. Nəticələr hansına baxdığınızı deyir. Polad konsolda sürətli cavab, təkmilləşdirilmişdən əyilmədə 1 % daxilində, gərginlikdə təqribən 4 % fərqlənirdi. Bax: [Gərginliyi və əyilməni yoxlayın](topic:simulation#update-while-you-edit-live).
- **Əvvəl nə qırılır.** Statik və ya burulma tədqiqatı üçün **Qırmağa çalış** blokundakı {{ui:Əvvəl nə qırılır?}} detal təslim olana qədər yükləri miqyaslayır. O, ən pisdən başlayaraq siyahı verir: birinci təslimə yük əmsalı (gərginliyin pik olduğu yerdə qırmızı işarə ilə) və burulmaya yük əmsalı. 1-dən kiçik əmsal o deməkdir ki, detal yüklənmiş halda artıq təslim olur və Problemlər panelində xəta göstərilir. Əmsallar xətti tədqiqatdan gəlir, ona görə onlar həmin tədqiqat qədər dəqiqdir. Bax: [Gərginliyi və əyilməni yoxlayın](topic:simulation#find-out-what-breaks-first-break-it).
- **Təslim və kontakt.** İki əlavə tədqiqat növü: materialın düz xəttini təslim gərginliyinə qədər izlədiyi və sonra daha yastı bucaq aldığı, plastik deformasiyanın qrafiklə göstərildiyi qeyri-xətti tədqiqat; və ayrı parçaların bir-birinə təzyiq etdiyi (sürtünməsiz) ya da yapışdığı (bərkidilmiş) kontakt tədqiqatı. Yerləşə bilməyən yük addımı və ya həddindən artıq bir-birinə batan parçalar Problemlər panelində görünür. Sürtünmə, böyük sürüşmə, böyük fırlanmalar, böyük əyilmələr və yorğunluq həll olunmur. Bax: [Gərginliyi və əyilməni yoxlayın](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX üçün deck faylları.** {{ui:İxrac}} › {{ui:CalculiX deck (.inp)}} tədqiqatı CalculiX üçün saxlayır; bu, sizin quraşdırıb işə saldığınız ayrıca proqramdır. {{ui:İxrac}} › {{ui:CalculiX nəticələri (.frd)}} onun nəticə faylını eyni mesh-ə geri oxuyur. PartCraft bu proqramı heç vaxt başlatmır və deck saxlandıqdan sonra detal dəyişibsə bunu deyir.

### Yığımlar

- **Hərəkət tədqiqatları.** {{ui:Yığım}} › {{ui:Hərəkət}} bir birləşmənin dəyərini verdiyiniz vaxt üzrə idarə edir (sabit sürət, yumşaq, sinus və ya get-qayıt), yığımı hər addımda birləşmələri və qapalı döngələri ilə yerləşdirir və hansı toqquşmaların olduğunu və detalların nə qədər yaxınlaşdığını bildirir. {{ui:Nöqtə əlavə et}} nöqtənin mövqeyini, sürətini və təcilini, birləşmənin dəyərini və klirensi vaxta görə qrafikləşdirir; {{ui:CSV saxla}} və {{ui:Qrafiki saxla}} onları yazır. {{ui:İşə sal}}dan sonra işləmə panelindəki Addım seçimi yığımı istənilən addıma gətirir. Tədqiqatın parametrləri yığım faylında saxlanılır. Sürət və təcil qeydə alınmış mövqelərdən gəlir, ona görə iti pik aşağı görünürsə, daha çox addım istifadə edin. Bax: [Yığımı toqquşmalar və hərəkət üçün yoxlayın](topic:check-assembly#a-motion-study).

### Səthlər və fizikadan detallar

- **Səthlər iş sahəsi.** {{ui:İş sahəsi}} qutusunda {{ui:Səthlər}} seçin: detalın yanında NURBS əyriləri və səthləri üçün {{ui:Əyri}}, {{ui:Loft}}, {{ui:Süpürmə}}, {{ui:Uyğunlaşdır}} və {{ui:Zebra}} alətləri. Davamlılıq (G0, G1 və ya G2) dəqiq səthlər üzrə ölçülür və istədiyinizdən pis olan kənar Problemlər-də Uyğunlaşdırma düzəlişi ilə göstərilir. {{ui:Hamarla}} hamar xətləri qeyri-hamarlıq və əyrilik sıçrayışları üçün ölçür və hamar olmayanları tolerantlığınız daxilində yenidən qurur. Səthlər detal faylında saxlanılır və detalın elementlərini dəyişmir. Bax: [Sərbəst səthlər (NURBS)](topic:nurbs-surfaces).
- **Mühəndis iş sahəsi.** {{ui:İş sahəsi}} keçiricisində {{ui:Mühəndis}} seçin, generator seçin və {{ui:Yeni}} basın: skript detalın nə etməli olduğundan (istilik ötürmə, axınlar, təzyiq, material, çap prosesi) ölçür və standart düsturlarla qurur, sonra istifadə etdiyi ədədləri mənbələri ilə, istehsal yoxlamalarını və analiz alətləri üçün faylları qaytarır. Eyni girişlər hər kompüterdə eyni detalı verir. Generator detalda saxlanılır və detalın açılması heç vaxt skript işlətmir. Bax: [Fizikadan detallar: generatorlar](topic:engineer-generators) və [Generator yazın](topic:write-a-generator).

### Eskiz, çertyoj və istehsal

- **Fotodan eskiz.** {{ui:Elementlər}} › {{ui:Daha çox}} › {{ui:Fotodan eskiz…}} sadə zəmin üzərində düz detalın şəklini (kontur və deşiklər) və ya qələm çəkilişini xətlərə, qövslərə və çevrələrə çevirir. Bir uzunluq verirsiniz, önizləməni yoxlayırsınız və eskizi yaradırsınız. Bax: [Eskiz əsasları](topic:sketch-basics#a-sketch-from-a-photo).
- **Çap üçün miqyas və bölmə.** {{ui:İxrac}} › {{ui:Çap üçün miqyas (STL və ya 3MF)…}} detalı dəyişmədən oxlar üzrə miqyaslayır, məsələn büzülmə payı üçün. {{ui:İxrac}} › {{ui:Çap üçün bölün (hissələrin zip-i)…}} yatağınız üçün çox böyük detalı nömrələnmiş, pimlər, açarlar, quyruqvari birləşmələr, dübel deşikləri və ya maqnit yuvaları ilə birləşən hissələrə kəsir. Bax: [3D çap](topic:print-3d).
- **Yerləşdirilmiş vərəqlərdən G-code.** {{ui:İxrac}} › {{ui:Yerləşdirilmiş vərəqlərdən G-code}} yerləşdirilmiş DXF-i oxuyur və seçdiyiniz post vasitəsilə hər vərəq üçün bir proqram yaradır: əvvəl deşiklər və kəsiklər, sonra konturlar. Giriş xətlərini, kəsmə sırasını və ya ortaq kənarları planlaşdırmır. Bax: [Düz detalları vərəqlərdə yerləşdirin](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Özü daha çox edən çertyojlar.** {{ui:Vərəq}} › {{ui:Avtomatik}} görünüşləri 1:1-ə qədər ən böyük standart miqyasda saxlayan ən kiçik A ölçülü vərəqi seçir. {{ui:Deşikləri ölçüləndirin}} hər deşiyə mərkəz işarəsi, hər ölçü üçün bir çağırış və görünüşün aşağı-sol küncündən mövqelər qoyur. Bax: [Çertyoj hazırlayın](topic:drawing-pdf).

### Bütün tətbiqlərdə

- **Dillər.** Tətbiqlər 54 dildə mövcuddur. İngilis dilindən başqa olanlar ana dili danışan biri oxuyana qədər maşın qaralamalarıdır.
- **Alət paneli sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət paneli sətirləri}} Sarmal (əvvəlki kimi), 2 sətir ya da 1 sətir seçir; sığmayan panel yanlara sürüşür. PartCraft-ın Elementlər lentində ən çox istifadə olunan alət böyük göstərilir, variantlar isə bölünmüş düymənin arxasında gizlənir.
- **AI assistentinizi qoşun.** Studio səkkiz tətbiqin hamısına öz assistentinizi qoşmaq üçün mərkəzdir, hər tətbiq üçün yalnız oxumaq, təklif etmək və ya redaktə icazəsi ilə. Qoşulmuş assistent detalı bir cümlədən ölçü verə bilər (məsələn, yük üçün kronşteyn), işini və bütün yoxlamaları göstərir və onu qurur; nəyi yoxlamadığını da bildirir (gərginlik konsentrasiyası, yorğunluq, plastiklərdə sürünmə). Bax: [PartCraft-ı AI assistentlə istifadə edin](topic:use-with-ai-assistants).

## 0.8.1-də düzəldilib

- **Tam ekran kursor donması.** Üzərinə gəlməklə seçmə indi azaldılıb. Səbəb ən yaxşı oxumamızdır və bildirən şəxslə təsdiqlənməyib.
- **İşləyərkən dil.** Studio və paketlənmiş nəşrlər işləyərkən dili dəyişə bilir; əvvəl yalnız ingilis dilində idi. Bu hələ hər platformada sınaqdan keçməyib: dil dəyişmirsə bizə bildirin.

## Bu versiyada hələ yoxdur

- AI-nizi qoşmaq hələ bitməyib: Studio daxilində bir kliklə qoşulma, brauzer AI üçün hostinq olunan konnektor, Studio daxilində öz API açarınız və dərc olunmuş MCP paketi vəd olunmur. Studio-nun öz AI-si yoxdur.
- Studio kod imzalı deyil: Windows xəbərdarlıq edə bilər, macOS isə sağ klikdən sonra Aç tələb edir. Bax: [Problemlərin həlli](topic:troubleshooting).
- Yığınlar hələ tək istiqamətlidir: bax [Tolerantlıq yığınları](topic:tolerance-stackup).
- Qalanı [Hələ qurulmayanlar](topic:not-built-yet) siyahısındadır.

Əvvəlki dəyişikliklər: [0.7-də yeniliklər](topic:whats-new-0-7).
