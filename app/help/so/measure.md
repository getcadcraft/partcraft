---
title: Qiyaas masaafooyinka, xagalada iyo miisaanka
summary: Riix laba shay muuqaalka si aad u hesho masaafada ugu yar, xagalka iyo ΔX ΔY ΔZ; akhri dherer geesta, dhexroorka god, aagga wejiga ama kala-xidhiidhka dhibcaha; hel mugga, miisaanka, bartamaha miisaanka iyo inertia-ta qayb ama assembly.
keywords: qiyaas, masaafo, masaafada ugu yar, xagal, dherer, radius, dhexroor, aag, kala-xidhiidh, delta, hubin, sifooyinka miisaanka, miisaan, culeys, bartamaha miisaanka, centre of mass, inertia, moment of inertia, cufnaan, alaab
from: 20bda0b7
---

**Qiyaas** wuxuu ka shaqeeyaa moodeelka workspace kasta (Design, Form, Simulation, Generative, Manufacture) iyo assembly. Waa ku jirtaa kooxda **View** ee menu-ga {{ui:Views}}, ama riix {{key:M}}. Kaar ayaa ka furmaa dhinaca bidix ee sare ee muuqaalka.

## Mid mid qiyaas

Riix vertex, geeso ama wejig. Kaartu wuxuu muujinayaa:

- **Dhibic** (vertex, dhexe geeso, ama bartamaha goobo): X, Y, Z.
- **Geeso**: toos, goobo ama curve, iyo dherkeeda; goobo ahaan sidoo kale radius, dhexroor iyo bartamaha.
- **Wejig**: siman, silinder, cone iwm, iyo aagga; normal-ka wejigga siman; radius iyo dhexroorka silinderka (cabbirka god). Aagyada waa kuwa facets-ka mesh kernel-ku dhisay.
- **Jidhka oo dhan**: hay {{key:Shift}} oo riix qaybta. Waxaad heleysaa mugga, aagga, miisaanka iyo inertia-ta (eeg hoose).

Pointer-ku wuxuu ku qabsadaa vertices, dhexe geeso iyo bartamaha goobo 10 pixels gudahood; dhibic buluug yar ayaa muujinaysa qabsashada ka hor intaadan riixin. Si aad u doorato bartamaha god, u tilmaam bartamaha godka; si aad u doorato geesta (goobada), u tilmaam geesta.

## Qiyaas ka dhexeeya laba shay

Riix shay labaad. Kaartu wuxuu ku daraa:

- **Masaafada ugu yar** iyo laba dhibic oo ugu dhow, oo lagu sawiro khad u dhexeeya muuqaalka.
- **ΔX, ΔY, ΔZ** laga bilaabo dhibcaha ugu dhow ee koowaad ilaa kan labaad.
- **Xagal** u dhexeeya laba wejig siman (u dhexeeya normals-ka, 0–180°), u dhexeeya laba geeso toosan ama axes (0–90°), ama u dhexeeya geeso iyo wejig.
- **Masaafada u dhexeysa diyaarado** laba wejig siman oo isbarbar ah, **Bartamaha ilaa bartamaha** laba goobo ama god, **Axis ilaa axis** laba god ama silinder oo isbarbar ah.

Riix saddexaad wuxuu bilaabaa lammaan cusub. {{key:Esc}} wuxuu nadiifiyaa doorashooyinka; {{key:Esc}} mar kale (ama {{ui:Close}}) wuxuu xiraa Qiyaas. {{ui:Copy}} wuxuu natiijooyinka ku dhejiyaa clipboard-ka qoraal tab-ku kala saaran yahay, oo diyaar u ah in lagu dhejiyo spreadsheet.

### Sida ay u sax tahay

PartCraft wuxuu qaybta ka dhisaa mesh kernel-ka, sidaas darteed masaafooyinka waxaa lagu xisaabiyaa facets-ka mesh-ka, kaarduna wuxuu leeyahay **qiyaas: facets**: waa sax wejiyada siman iyo u dhexeeya vertices, si yar u khaldan wejiyada curved-ka. Dejin **Curves** oo fiican ayaa dhow geynaysa. Qiyaas sax ah oo ku saabsan wejiyada dhabta ah wuxuu u baahan yahay kernel sax ah: weli lama dhisin nooca hadda.

## Sifooyinka miisaanka

Dooro {{ui:Mass properties}} kaarta ama menu-ga {{ui:Views}}. Qayb kasta, dooro **Material** kaarta (birta, aluminum, plastics iyo kuwa kale oo leh cufnaanta caadiga ah). Assembly-ga qayb kastaa wuxuu isticmaalaa material-ka ku dejisan sifooyinkeeda (dooro qaybta, kadibna **Material**), natiijadana waa dhammaan qaybaha wada.

Kaarta wuxuu muujinayaa miisaanka, mugga, aagga, bartamaha miisaanka, tensor-ka inertia-ta (Ixx, Iyy, Izz iyo badeecadaha Ixy, Iyz, Ixz, kg·mm² ahaan, bartamaha miisaanka ee axes-ka adduunka) iyo principal moments. Material la'aan wuxuu muujinayaa isla cufnaan kasta (mm⁵) iyo miisaan la'aan.

Tirooyinku waa sax jidhka tessellated ee mesh kernel-ku dhiso (wejiyada curved-ka sida facets), sidaas darteed qayb wareegsan waxay u muuqataa mid yar, kaarduna sidaas buu sheegaa. Cufnaanta alaabta waa qiimaha caadiga ah ee buugga; alloy ama grade dhab ah wuu ka duwan karaa dhowr boqolkiiba.

## Xadka

- Qabsashadu waxay heli kartaa dhibic ku qarsan geometry kale; hubi in kaarduna sheegayo waxa aad ula jeedday.
- Qiyaas waa la xiraa marka aad furto sawir ama xaashada naqshadda, ama aad beddesho workspace.
