---
title: Yığımı toqquşmalar və hərəkət üçün yoxlayın
summary: Toqquşma ilə yerləşdirilmiş detalların üst-üstə düşdüyünü tapın, hər birləşmənin dəyərlərini sürükləyərək hərəkəti izləyin və detalların toqquşduğu yeri tapmaq üçün birləşməni diapazonu boyunca keçirin.
keywords: müdaxilə, müdaxilənin aşkarlanması, toqquşma, kollizya, üst-üstə düşmə, dişli uyğunluğu, dişli dərinliyinin uyğunsuzluğu, toxunan üzlər, gizlət, filtr, hərəkət, hərəkət tədqiqi, keçid, hərəkət diapazonu, yoxla
from: 9c98db46
---

Detallar yerləşdirildiyi kimi iki yoxlama aparılır: **Toqquşma** indi üst-üstə düşən materialı axtarır, **hərəkət yoxlaması** isə bir birləşməni onun diapazonu boyunca hərəkət etdirir və bu zaman üst-üstə düşmələri axtarır.

## Müdaxilələri yoxlayın

1. Yığım açın və ya qurun (bax: [Birləşmələrlə yığım qurun](topic:build-assembly)).
2. {{ui:Toqquşma}} seçin.

Status paneli nəticəni bildirir:

- "3 detal arasında müdaxilə yoxdur (… ms)." Heç nə üst-üstə düşmür.
- "Müdaxilə: Flange1 və Flange2: Kəsişmə, 2.5 mm³." Hər cüt, nəticənin növü və onların paylaşdığı həcm.

Soldakı **Yığım** qutusu **Müdaxilə**ni göstərir: "Yox", "2 nəticə" (göstərilənlər) və ya "Yoxlanılmayıb". Heç nə seçilməyəndə sağ panel hər nəticəni **Müdaxilə** altında siyahıya salır.

Yığım dəyişdikdə nəticə silinir. Birləşməni köçürdükdən sonra {{ui:Toqquşma}} yenidən işə salın. Detalların hər cütü digər hər biri ilə yoxlanılır, ona görə böyük yığımlar daha uzun çəkir.

### Nəticə növləri

| Növ | Nə deməkdir |
|---|---|
| **Kəsişmə** | Detallar həcmi paylaşır: real toqquşma. |
| **Dişli dərinliyinin uyğunsuzluğu** | Paylaşılan həcm bir detalın dişinin içindədir, lakin digərinin dişindən kənardadır: deşikdən daha dərin dişlənmiş bolt, ya da dişli deşikdə sadə gövdə. |
| **Dişli uyğunluğu (görünüş dişləri)** | Paylaşılan həcm hər iki detalın dişinin içindədir: dişli deşikdə bolt. Görünüş dişləri dişin tam ölçüsündə çəkilir, ona görə həmişə bir az üst-üstə düşür. |
| **Toxunan üzlər** | Paylaşılan həcm yoxdur, lakin üzlər təmasdadır (0.001 mm daxilində). |

Modelləşdirilmiş dişlər (bax: [Millərdə və deşiklərdə dişlər, çəkilmiş və ya modelləşdirilmiş](topic:threads)) real həndəsədir: onların paylaşdığı həcm **Kəsişmə**dir.

### Görmək istəmədiyiniz şeyləri gizlədin

**Müdaxilə** altında **Göstər** hər növ üçün qutuya malikdir: yalnız vacib toqquşmaları görmək üçün **Dişli uyğunluğu** və **Toxunan üzlər** qutularını təmizləyin. Nəticənin yanındakı **Bu cütü gizlət** həmin növdən asılı olmayaraq detalların o cütünü gizlədir. Gizlədilmiş nəticələr sayılır ("Bu filtrlərlə 2 nəticə gizlədilib"), **Gizlədilmiş cütləri yenidən göstər** cütləri geri qaytarır. Status paneli gizlədilmiş nəticələri də sayır.

Filtrlər yığımla birlikdə saxlanılır və hər dəyişiklik bir {{key:Mod+Z}} addımıdır. **Birləşməni toqquşmalar üçün keçirin** (aşağıda) də onlardan istifadə edir. Filtrli yığım versiya 4 kimi saxlanılır; əvvəlki PartCraft versiyaları onu filtrləri itirmək əvəzinə açmaqdan imtina edir.

## Hərəkəti izləyin

1. Soldakı siyahıda hərəkət edən birləşmə seçin (sərtdən başqa hər hansı).
2. Dəyərlərindən birinin altındakı sürgünü sürükləyin, məsələn **Bucaq (°)** və ya **Ofset (mm)**. Sürüklədikcə detal hərəkət edir.
3. Buraxın. Yeni vəziyyət saxlanılır və {{key:Mod+Z}} ilə geri qaytarıla bilər.

Qutuya bucaq və ya ofset yazıb {{key:Enter}} basaraq da edə bilərsiniz.

Qapalı döngədəki birləşmə (bağlantı mexanizmi) bütün döngünü hərəkət etdirir: sürüklədiyiniz dəyər saxlanılır və döngünün digər birləşmələri ardınca gedir (bax: [Qapalı döngülər](topic:build-assembly#closed-loops-linkages)).

## Birləşməni toqquşmalar üçün keçirin

1. Hərəkət edən birləşmə seçin.
2. Bir neçə dəyəri olan birləşmə üçün (silindrik, müstəvi, kürə, yuvada pin) **Hərəkətləri yoxla** bölməsində hansının keçiriləcəyini seçin.
3. {{ui:Hərəkət zamanı toqquşmaları yoxla}} seçin.

PartCraft həmin dəyəri 24 bərabər addımla 25 vəziyyət boyunca hərəkət etdirir, qalanları olduğu kimi qalır: bucaq −180°-dən 180°-ə (əyilmə −90°-dən 90°-ə), uzunluq mənfidən müsbətə ən böyük detalın ölçüsü qədər. Məlumat verir:

- "Bucaq (°) üçün -180-dən 180-ə qədər heç bir yerdə toqquşma yoxdur (25 vəziyyət yoxlanıldı)."
- "25 vəziyyətdən 6-sı toqquşur, ilk toqquşma Bucaq (°) 45-də (12.4 mm³)." Toqquşduğu ilk vəziyyət və orada üst-üstə düşmə.

Düymə sərt birləşmələr üçün boz olur, çünki onlar hərəkət etmir. Keçid yalnız vəziyyətləri yoxlayır, onların arasındakı yolu yox: nazik detal iki addım arasında digərindən keçə bilər.

:::note
Kontakt və cazibə qurulmayıb. Limitlər olmadan keçid bütün diapazonu əhatə edir; dəyərə **Limitlər** verin (bax: [Detalların siyahısı, açılmış görünüşlər və hərəkət edən detallar](topic:assembly-bom-explode)) və keçid yalnız onları əhatə edir, beləliklə 90° açılan menteşə 90° üzərində yoxlanılır.
:::

## Hərəkət tədqiqi

**Yığım › Hərəkət** birləşmənin dəyərini verdiyiniz vaxt ərzində başlanğıcdan sona qədər idarə edir (sabit sürət, yumşaldılmış, sinus və ya irəli və geri), yığımı hər addımda birləşmələri və qapalı döngələri ilə yerləşdirir və hansı toqquşmaların olduğunu və detalların nə qədər yaxınlaşdığını bildirir. **Nöqtə əlavə et** detalın ortasını və ya onun üzərində klik etdiyiniz nöqtəni izləyir, kart isə onun vəziyyətini, sürətini və təcilini, birləşmənin dəyərini və vaxta görə boşluğu qrafikləşdirir; **CSV-ni saxla** və **Qrafiki saxla** onları yazır. Sürət və təcil qeydə alınmış vəziyyətlərdən hesablanır, buna görə addımlar arasında kəskin zirvə aşağı görünür: daha çox addım istifadə edin.

**İşə sal** düyməsindən sonra **Gedişat addımları** paneli yığımı istənilən addıma keçirir (vaxt, dəyər və orada detalların toqquşub-toqquşmadığı yanında göstərilir); birləşmə öz dəyərini saxlayır, **Modelə qayıt** yığımı geri qaytarır. Tədqiqatın parametrləri yığım faylında saxlanılır; nəticələri **İşə sal** yenidən yaradır.

## Kontakt tədqiqi

**Yığım › Kontakt** yığımın detallar bir-birinə basdıqda yüklərini necə daşıdığını göstərir. Hər detal öz **Simulyasiya** tədqiqatından öz dayaqlarını, yüklərini və materialını gətirir (bir detalda sabit üz, digərində qüvvə); burada cütləri seçirsiniz. **Cüt əlavə et**, sonra **A tərəfini seç** və bir detalın üzlərinə, **B tərəfini seç** və fərqli detalın üzlərinə klik edin (seçilmiş üzə klik onu çıxarır; Esc və ya **Hazırdır** seçimi bitirir). Cüt **Sürtünməsiz** (detallar basır, lakin sürüşür) və ya **Yapışdırılmış** (birlikdə qalırlar) ola bilər; sərtlik əmsalı kontaktın batmağa nə dərəcədə müqavimət göstərdiyini təyin edir (20 yaxşı başlanğıcdır, bərk polad yığın üçün 1000).

**Həll et** yükü addım-addım işə salır və kontakt qüvvəsini, ən dərin batmanı, ən böyük yerdəyişməni və ən böyük gərginliyi göstərir. Cütü olmayan detal kənarda qalır və kart bunu deyir. Sürtünməsiz kontakt detalı yanlara görə saxlamır: hər detala öz Simulyasiya tədqiqatında dayaq verin, ya da onu yapışdırın, əks halda addımlar sabitləşməyə bilər. Cütlər və parametrlər yığım faylında saxlanılır.

**CalculiX faylını ixrac edin** eyni modeli CalculiX giriş faylı (.inp) kimi yazır. CalculiX özünüz quraşdırıb işə saldığınız ayrıca proqramdır; **CalculiX nəticələrini oxu (.frd)** sonra yerdəyişmələri bu yığımın mesh-i üzərində geri oxuyur və başqa mesh üçün yaradılmış faylı qəbul etmir. Buradakı həlledici plastik deformasiyanı dəstəkləyir, lakin açıq dinamika deyil və burada heç nə sertifikatlaşdırılmış təhlil deyil: vacib olan hər şeyi mühəndislə yoxlatdırın.
