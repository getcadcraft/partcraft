---
title: İllüstrasiyada təlimata başlayın
summary: İllüstrasiya iş sahəsi dizaynınızdan təlimatlar hazırlayır: görünüşlər, balonlu və detal siyahılı partlayış xətt rəsmləri, addım-addım təlimatlar, animasiyalar və müştərinin CAD olmadan aça biləcəyi 3D fayl. Təlimat öz başına fayldır.
keywords: illüstrasiya, təlimat, texniki illüstrasiya, sənədləşmə, partlayış görünüşü, detal siyahısı, təlimatlar, partcraft-manual
from: e447e0ab
---

**İllüstrasiya** dizayn ətrafındakı sənədlər üçün iş sahəsidir: balonlu və detal siyahılı partlayış görünüşləri, təlimatlar üçün xətt rəsmi illüstrasiyalar, addım-addım təlimatlar, animasiyalar və müştərinin CAD olmadan aça biləcəyi 3D fayl. Alətlər panelinin əvvəlində {{ui:İş sahəsi}} keçiricisində {{ui:İllüstrasiya}} seçin.

**Təlimat** öz faylıdır (`<name>.partcraft-manual.json`). O, hər detalın formasının, məhsul ağacının və detalların xassələrinin surətini saxlayır və onların haradan gəldiyinə bağlantı saxlayır, belə ki, dizayn davam edərkən təlimat üzərində işləyə bilərsiniz. Dizayn dəyişdikdə, [Dizayndan yenilə](topic:illustrate-update) dəyişiklikləri gətirir.

## Yeni təlimat yaradın

{{ui:Təlimat}} qrupunda {{ui:Yeni}} düyməsinə klikləyin, sonra:

- {{ui:Açıq hissədən}}: Dizaynda açıq olan detal.
- {{ui:Açıq yığımdan}}: yığım açıq olduqda bu seçim onun yerinə göstərilir; onun detalları, yerləri, detal nömrələri, materialları və partlayış görünüşləri birlikdə gəlir.
- {{ui:Yığım faylından…}}: saxlanmış `.partcraft-asm.json`; PartCraft əvvəlcə onun detallarını qurur.
- {{ui:Başqa fayldan…}}: glTF (.glb, .gltf), OBJ, STL və ya 3MF. Faylın ağacı və adları saxlanılır, bir detalın surətləri (eyni forma iki dəfə yerləşdirilib) miqdarı olan bir detal olur. STL və OBJ faylları ölçü vahidini bildirmir, buna görə soruşulursunuz. STL faylları Z yuxarı istiqamətində oxunur; glTF və 3MF öz yuxarı istiqamətlərini bildirir.

Təlimat açıq olduqda İllüstrasiya təlimatın öz detal surətlərini göstərir; Dizaynda açıq olan detal və ya yığım siz Dizayna qayıdana qədər gizlədilir.

## Saxlama və açma

{{ui:Təlimat}} qrupundakı {{ui:Saxla}} (və ya {{key:Mod+S}}) təlimatı saxlayır; {{ui:Aç}} birini açır. İllüstrasiyadakı hər dəyişiklik təlimatın öz tarixçəsində bir addımdır: İllüstrasiya açıq olduqda {{ui:Geri qaytar}} və {{ui:Təkrarla}} təlimata təsir edir.

## Hələ hazır deyil

- STEP faylları {{ui:Başqa fayldan…}} bölməsində hələ açılmır. STEP-i Dizaynda açın (o, bərk cisim kimi gəlir; bax: [STEP faylını açın və onun üzərində qurun](topic:import-step)) və təlimatı {{ui:Açıq hissədən}} seçimi ilə yaradın, ya da onu glTF, 3MF, OBJ və ya STL kimi saxlayın.
- ModelCraft və BimCraft hələ modeli birbaşa İllüstrasiyaya ötürə bilmir: onu glTF (.glb) kimi saxlayın və {{ui:Başqa fayldan…}} seçimini istifadə edin.

Növbəti: [Görünüşlər və üslublar](topic:illustrate-views).
