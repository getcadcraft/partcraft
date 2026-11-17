---
title: STL, OBJ və ya 3MF-i bərk cisim kimi açın
summary: Skanerdən, 3D çap saytından və ya başqa proqramdan gələn meshi kəsə, əlavə edə və üzərinə eskiz çəkə biləcəyiniz bərk cismə çevirin; PartCraft yolda nəyi düzəldir və nəyi edə bilmir.
keywords: stl, obj, 3mf, mesh, mesh-dən bərk cismə, meshi çevir, convert mesh, skan, suya davamlı, düzəliş, deşiklər, boşluqlar, vahidlər, yuxarı ox, idxal olunmuş cisim, düz üzlər
from: 7b948471
---

PartCraft STL, OBJ və 3MF meshlərini **bərk cisimlər** kimi açır. Cisim hər bərk cisim kimi işləyir: kəsin, əlavə edin, deşin, naxışlayın, yığımda istifadə edin və ya emal üçün istifadə edin, və onun düz üzlərinə eskiz çəkin. Öz tarixçəsi yoxdur: mesh yalnız üçbucaqlardır, buna görə ölçüləri dəyişdirilə bilməz, yalnız əlavə və ya kəsmə mümkündür.

## Mesh açın

1. {{ui:Open}} seçin və ya {{key:Mod+O}} basın, `.stl`, `.obj` və ya `.3mf` faylı seçin. Və ya onu 3D görünüşün üzərinə buraxın.
2. PartCraft onu oxuyur, təhlükəsiz şəkildə düzəldə biləcəyini düzəldir və nə tapdığını göstərir: neçə üçbucaq və nöqtə, hər düzəliş və meshin indi **bağlanıb-bağlanmadığı**.
3. **Fayldakı vahidlər** və **Fayldakı yuxarı**-nı yoxlayın. STL və OBJ öz vahidlərini demir, buna görə millimetr təxmindir; 3MF öz vahidini özü deyir. **Burada ölçü** sətri cismin seçiminizlə ölçüsünü göstərir, beləliklə 25.4 dəfə kiçik gələn detal (düymlə idi) asanlıqla görünür.
4. Ekrandakı detal boşdursa, {{ui:Open as a body}} seçin. Detalda artıq xüsusiyyətlər varsa, **Bunu istifadə et** seçin (detala əlavə et, ondan kəs, və ya yalnız üst-üstə düşən hissəni saxla), sonra {{ui:Add to this part}}, və ya meshlə yenidən başlamaq üçün {{ui:New part}}.

Tarixçədə **Imported1** xüsusiyyəti görünür. Status paneli, məsələn, belə deyir: "bracket.stl bərk cisimdir: 15200.512 mm³, eskiz çəkmək üçün 14 düz üz."

## PartCraft nəyi düzəldir

| Düzəliş | Nə deməkdir |
|---|---|
| İkiqat künclər birləşdirilir | STL hər üçbucağı üçün hər künci təkrarlayır; onlar bir nöqtədə birləşdirilir |
| Sahəsi olmayan üçbucaqlar silinir | Küncləri bir düz xətt üzərində olan zolaqlar |
| İkiqat üçbucaqlar silinir | İki dəfə yazılmış üçbucaq bir dəfə saxlanılır; əks istiqamətə baxan iki (daxili divar) isə ikisi də silinir |
| Kiçik boşluqlar bağlanır | Demək olar ki, görüşən kənarlar (detalın ölçüsünün mində biri daxilində) birləşdirilir |
| Deşiklər doldurulur | Sərhədi düz yatan açılış ölçüsündən asılı olmayaraq doldurulur; əyilmiş olan yalnız kiçik olduqda |
| Üçbucaqlar xaricə üz tutur | Səhv istiqamətə baxan üçbucaqlar qonşuları ilə uyğunlaşdırılır və bütün səth xaricə baxacaq şəkildə çevrilir |

## Mesh bağlanmadıqda

Bərk cisim açılışları olmayan səth tələb edir. PartCraft bağlaya bilmədikdə dialoq neçə açılış və açıq kənar qaldığını deyir və əlavə ediləcək cisim olmur. Açılışları meshi yaradan proqramda bağlayın, və ya meshi yenidən qapalı (suya davamlı) kimi ixrac edin və yenidən açın.

PartCraft açılışı doldurmaq yanlış təxmin edə biləcəyi zaman onu buraxır: böyük əyilmiş deşik, və ya eyni müstəvidə iki açılış (çatışmayan halqavari üz, hər sərhədi doldurmaq ortadakı deşiyi örtəcəyi yerdə). Üçdən çox üçbucaq tərəfindən paylaşılan kənar da bildirilir: belə səthin aydın daxili yoxdur.

## Düz üzlərdə eskiz çəkin

Çoxlu üçbucaqdan ibarət düz sahələr hər biri bir **düz üz** olaraq birləşdirilir ki, üzərində eskiz dayana bilsin: üzü klik edin və {{ui:Sketch on this face}} seçin. Sonra kəsilən və ya əlavə edilən üz üz olaraq qalır. Yuvarlaq sahələr (deşik, yuvarlaqlaşdırma) üçbucaq olaraq qalır: onlar seçilə bilən üzlər deyil, və görünüş konturlarını üçbucaqlar arasındakı bucaqdan çəkir.

## Sonra dəyişdirin

**Imported1**-i seçin ki, onun hansı fayldan gəldiyini, neçə üçbucağı olduğunu və nəyin düzəldildiyini görəsiniz. **Fayldakı vahidlər**, **Fayldakı yuxarı** və **Bunu istifadə et** orada dəyişdirilə bilər; hər dəyişiklik bir geri qaytarma addımıdır.

## Harada saxlanılır

Düzəldilmiş mesh `.partcraft.json` faylının **içində** saxlanılır, buna görə mesh faylına bir daha ehtiyac yoxdur. Mesh cismi olan detal faylı 5-ci versiyadadır: köhnə PartCraft onu versiyasına görə rədd edir. 200,000 üçbucaqlı mesh təxminən 1.2 MB əlavə edir.

## Limitlər

- Bir faylda ən çox 3 milyon üçbucaq və 200 MB.
- Meshdən qurulmuş cisim mesh nüvəsi ilə qurulur. Dəqiq nüvə açıqdırsa (yalnız developerlər üçün), bunu deyir və cisim qurulmur.
- OBJ materialları, tekstur koordinatları və sərbəst formalı əyrilər çıxarılır; 3MF rəngləri, materialları və dəstək obyektləri çıxarılır (dialoq neçə obyektin atlandığını deyir).
- Cisim mesh qədər incədir: kobud STL yumru üzləri kobud verir. Ona qazdığınız deşiklər öz xüsusiyyətləriniz kimi yumrudur.
