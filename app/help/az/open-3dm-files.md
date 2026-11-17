---
title: .3dm modelini bərk cisim kimi açın
summary: `.3dm` faylındakı meshləri, polisəthləri və blokları PartCraft-a bir bərk cisim kimi gətirin ki, onu kəsə, əlavə edə və üzərinə eskiz çəkə biləsiniz; üçbucaqlar haradan gəlir və nə çıxarılır.
keywords: 3dm, nurbs, polisəth, brep, səthlər, render meshi, ekstrüziya, bloklar, idxal, mesh-dən bərk cismə, vahidlər, idxal olunmuş cisim
from: 8ae9571b
---

PartCraft `.3dm` fayllarını **bərk cisimlər** kimi açır, eyni [STL, OBJ və ya 3MF meshi](topic:open-meshes) kimi. Cisim hər bərk cisim kimi işləyir: kəsin, əlavə edin, deşin, naxışlayın və düz üzlərinə eskiz çəkin. Öz tarixçəsi yoxdur.

## Faylı açın

1. {{ui:Open}} seçin və ya {{key:Mod+O}} basın və `.3dm` faylı seçin. Və ya onu 3D görünüşün üzərinə buraxın.
2. PartCraft onu oxuyur və nə tapdığını göstərir: düzgün gələn üzlü obyektlərin sayı, üzlərin neçəsinin fayldakı meshlərdən, neçəsinin isə PartCraft tərəfindən üçbucaqlandığı, hər düzəliş və nəticənin **bağlanıb-bağlanmadığı**.
3. **Fayldakı vahidlər** və **Fayldakı yuxarı** yoxlayın (fayl öz vahidini özü deyir; PartCraft-ın siyahıya almadığı vahid, məsələn yard, millimetrə çevrilir).
4. {{ui:Open as a body}} seçin, və ya detalda artıq xüsusiyyətlər varsa **Bunu istifadə et** və sonra {{ui:Add to this part}} seçin.

## Üçbucaqlar haradan gəlir

PartCraft bu versiyada cisimləri üçbucaqlardan qurur, buna görə fayldakı hər səth kiçik düz üzlərə çevrilir. Polisəthin (və hər ekstrüziyanın) hər üzü üçün, faylda **render meshi saxlanıbsa** onu götürür, yoxsa **özü üçbucaqlaşdırır** (müstəvilər, NURBS səthlər, fırlanma səthləri, əyri ekstrüziyalar və ekstrüziyalar, kənarlarına görə kəsilmiş). Polisəthin üzləri kənar nöqtələrini paylaşır, buna görə bağlı polisəth bağlı gəlir. PartCraft hələ oxumadığı növ səthdəki üz çıxarılır və dialoq neçə və hansı növ olduğunu deyir; nəticə adətən bağlanmır.

## Fayldakı hər şey bir cismə çevrilir

Hər görünən mesh, polisəth və ekstrüziya, və hər blokun yerləşdirilməsi, faylın qoyduğu yerdə **bir** cismə daxil olur. Gizli və ya söndürülmüş layerdəki obyektlər çıxarılır. Fayl bir neçə ayrı bərk cisim saxlayırsa, cismin bir neçə hissəsi olur: ayrı cisimlər istəyirsinizsə, hər birini öz faylından açın.

## Nə çıxarılır (və deyilir)

Əyrilər, nöqtələr, nöqtə buludları, mətn, ölçülər, ştrixlamalar və işıqlar çıxarılır: cisim yalnız üzləri götürür. SubD obyektləri də çıxarılır (əvvəl onları faylı yaradan proqramda meshlərə və ya polisəthlərə çevirin), eləcə də digər fayllardan bağlanmış bloklar, rənglər, layerlər və adlar (PartCraft cisimlərinin burada öz adları yoxdur).

## Bağlanmadıqda

Açıq polisəthlər və səthlər (tək kəsilmiş səth, çatışmayan üzü olan forma) daxilə malik deyil, buna görə bərk cisim ola bilməz. Dialoq neçə açılış qaldığını deyir və heç nə əlavə etmir. Onu yaradan proqramda birləşdirin və ya qapayın, yadda saxlayın və yenidən açın. Bax: [Mesh bağlanmadıqda](topic:open-meshes#when-a-mesh-does-not-close).
