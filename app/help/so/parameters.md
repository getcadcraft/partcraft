---
title: Qaabee qayb halbeegyada
summary: Magacyo u bixi cabbirrada muhiimka ah (ballac, dhumuc, cabbirka boolt), ku xidh lambar kasta oo astaamo ama cabbir sawir-gacmeed = ah, oo qaybta oo dhan ka beddel miis keliya.
keywords: halbeegyo, meesha la isticmaalo, ku isticmaala, doorsoomayaal, isla'egta, niyada naqshadda, cabbirrada wadaad, xidhid, qaacido, magac u bixi cabbir, qiimayaal xidhan
from: 58c646ea
---

Halbeeg waa lambar magac leh, sida `width = 120` ama `margin = bolt * 1.5`. Ku xidh dherer, dhexroor god, tirada qaab ama cabbir sawir-gacmeed, oo halbeegga beddelka mid kasta ayuu midkiiba beddelaa hal tallaabo. Tani waa habka aad u hayso ujeedada naqshadda qaybta, halkii aad madaxaaga ku haysan lahayd.

## Ku dar halbeegyo

1. Panel-ka midig, riix tab-ka {{ui:Halbeegyada}}.
2. Hoosta **Doorsoomayaasha**, qor magac sanduuqa "name", tusaale ahaan `width`.
3. Qor qiimihiisa sanduuqa xiga, tusaale ahaan `120`, oo riix {{key:Enter}} (ama riix {{ui:Ku dar}}).

Qiimuhu wuxuu noqon karaa lambar ama isla'eg halbeegyo kale: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Tiirka **Value** wuxuu muujinayaa waxa uu xisaabiyo. Magacu wuxuu ku bilaabmaa xaraf ama `_` wuxuuna leeyahay oo keliya xarfo, lambarro iyo `_`; magacyada shaqooyinka iyo unitiyada (`sin`, `mm`, `pi`) waa la diidaa, sidoo kale wareeg sida `a = b` iyo `b = a`.

## Halbeeg ku xidh lambar

1. Riix astaamaha taariikhda, tusaale ahaan "Extrude1". Dejinteeda waxay ka muuqdaan tab-ka {{ui:Sifooyinka}}.
2. Sanduuq lambar, sida **Dhererka (mm)**, qor `=` iyo isla'eg: `=thick` ama `=width / 4`.
3. Riix {{key:Enter}}.

Sanduuqa hadda wuxuu muujinayaa natiijada, badhanka **ƒ** ayaa ka soo muuqda calaamaddiisa dhinaceeda. Ku sii mouse-ka si aad isla'egta u aragto. Cabbirrada sawir-gacmeedka sidoo kale way shaqeeyaan, labadaba liiska **Cabbirrada sawir-gacmeedka** ee astaamaha iyo sanduuqa cabbirka sawirka furan (laba jeer ku dhufo cabbir, qor `=width`, riix {{key:Enter}}).

Lambarrada aad xidhi karto: dherer extrude, xagasha revolve, dhexroorka godka, cabbirrada godka iyo counterbore, tirada qaabka, masaafada iyo xagasha, radius fillet, masaafada chamfer, dhumucda darbiga shell, cabbir sawir-gacmeed kasta, iyo cabbirrada astaamaha cusub (dherer labaad, taper, countersink, masaafada diyaarka tixraaca, xagasha draft iyo kuwo kale).

## Beddel halbeeg

Tab-ka {{ui:Halbeegyada}}, qor qiime cusub ama isla'eg tiirka **Expression** oo riix {{key:Enter}}. Wixii ku xidhan wuu beddelmaa qaybtuna mar kale way dhisaa, hal tallaabo ahaan: {{key:Mod+Z}} ayaa ka noqda.

Si aad lambar uga beddesho dhinaca kale, eeg [Isla'egyada labada jiho](topic:equations-two-way).

## Eeg halbeegga meesha laga isticmaalo

Halbeeg kasta hoosteeda tab-ka {{ui:Halbeegyada}}, safka ayaa sheegaya waxa isticmaala:

- lambarrada uu wado, sida **Extrude1 depth** ama **Sketch1 D2 (distance)**. Riix mid si aad astaamihiisa u doorato oo sifooyinkiisa u muujiso;
- lambarrada uu wado **dhex mara** halbeegyo kale, sida **Hole1 diameter (through h, d)** marka `d = h + 2` iyo `h = w / 2`;
- **halbeegyada** isla'egtooda ku isticmaala, **qaabeynta** dejisa, iyo **scripts-ka** akhrisa (eeg [Qor oo socodsii scripts](topic:craftscript)).

"Weli lama isticmaalin." waxay micnaheedu tahay ma jiro wax isticmaala: waad tirtiri kartaa adigoo aan la weydiinin.

## Ka fur, magac u beddel, tirtir

- **Ka fur lambarka:** riix badhankiisa **ƒ**, ama {{ui:Ka furo}} liiska **Isla'egyada**. Wuxuu hayaa qiimihiisa hadda, halbeeg midna ma beddelo tan.
- **Magac u beddel halbeeg:** qor magac cusub sanduuqa **Name**. Isla'eg kasta oo isticmaasha waa la qoraa mar kale.
- **Halbeeg tirtir:** riix × safkiisa. Haddii wax isticmaalo, PartCraft wuxuu weydiinayaa in marka hore qiimihiisa hadda loo qoro isla'egyadaas.
- **Astaamo tirtirista** wuxuu tirtiraa isla'egyada lambarradiisa; xariiqda xaaladdu wuxuu sheegaa kuwa.

:::note
Halbeegyada waxa lagu kaydiyaa faylka `.partcraft.json` (nooca faylka 3). Qayb aan halbeeg lahayn waxaa loo kaydiyaa sidii hore.
:::

## Isla'egyada

| Qor | Micnaha |
|---|---|
| `120`, `12.5`, `1e3` | lambar (millimitir, ama degree haddii xagal) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | dherer unit kale, oo loo beddelo millimitir |
| `30deg`, `0.5rad` | xagal, loo beddelo degree |
| `+ - * / %` iyo `^` | xisaab; `^` waa awood, `-2^2` waa −4 |
| `sin cos tan asin acos atan atan2` | trigonometry degree ahaan |
| `sqrt pow exp ln log abs sign` | shaqooyin kale |
| `ceil floor int round(x, digits) min max` | goynta iyo xadka |
| `if(test, a, b)` iyo `< <= > >= == !=` | dooro: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Magacyada xarafka waa kala saaran yihiin: `Width` iyo `width` waa laba halbeeg.

Eeg sidoo kale [Qaabeynta iyo miisaska naqshadda](topic:design-tables) iyo [Scripts iyo command line](topic:scripts-and-cli).
