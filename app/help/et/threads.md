---
title: Keered võllidel ja aukudel, joonistatud või modelleeritud
summary: Pane ISO meetriline või trapetskeere mis tahes ümmargusele tahule, võllile või august. Hoia see jooniste jaoks kosmeetilisena või modelleeri päris spiraalkeere 3D-printimiseks, koos vahega, et prinditud detailid sobiksid kokku.
keywords: keere, keered, modelleeritud keere, spiraal, spiraalne, kruvi, polt, mutter, võll, auk, väline keere, sisekeere, kosmeetiline keere, meetriline keere, trapetskeere, acme, juhtkruvi, Tr16x4, M10, 3D-printimine, printimine, vahe, sobivus, vasakukeerdeline, keermestatud
from: 4f6401cc
---

{{ui:Keere}} paneb keere ümarate tahkude peale: võlli välispinnale (väline keere) või augu sisepinnale (sisekeere). PartCraft ütleb tahu järgi, kumb see on.

Keere on algul **kosmeetiline**: tahk jääb sileks, vaade joonistab keere katkendjoontena ringidena ja joonistuslehel on märge, nagu „M10×1.5 - 6g, keere pikkus 20“. Märgi **Modelleeritud**, et lõigata päris spiraalne keere detaili sisse, 3D-printimiseks või mudeliks, mis peab välja nägema õige.

## Keeratakse võlli või auku

1. Tee võll või auk keere suuruses: Ø10 võll M10 poldi jaoks või Ø8.5 auk (puurimisotsak) M10 mutri jaoks.
2. Klõpsa ümmargusele tahule ja vali {{ui:Veel}} › {{ui:Keere}}. Kui ümmargust tahku ei ole valitud, küsib PartCraft, et klõpsa tahkudele ja siis {{ui:Valmis}}.
3. Paremas paneelis kontrolli **Suurust**. **Sobita tahule** valib suuruse ise: võlli puhul selle, mille välisläbimõõt on võlli oma; augu puhul selle, mille siseläbimõõt sobib augule.

Keere algab tahu avatud otsast, kus detail ei jätka piki telge: võlli vabast otsast, augu suust. **Alusta teisest otsast** pöörab selle ümber.

## Seaded

| Seade | Valikud | Vaikimisi |
|---|---|---|
| **Kuju** | ISO meetriline (60°), M1.6 kuni M64 jäme; trapetskujuline (Tr, 30°), Tr8×1.5 kuni Tr60×9 | ISO meetriline |
| **Suurus** | Sobita tahule või üks suurus loendist | Sobita tahule |
| **Terve tahk** | Eemalda linnuke, et anda **Pikkus (mm)**, mõõdetuna algusest | Märgitud |
| **Alusta teisest otsast** | Keere kulgeb tahu teisest otsast | Väljas |
| **Suund** | Paremakeerdeline või vasakukeerdeline | Paremakeerdeline |
| **Modelleeritud** | Lõika päris spiraalkeere | Väljas |
| **Vahe (mm)** | Näidatakse, kui Modelleeritud on märgitud: kui palju väiksem on võlli keere ja kui palju suurem augu keere, igalt poolt | 0.1 |

Suurus, mis ei sobi tahule, luuakse siiski, lõigatakse tahule ja paneel ütleb seda, näiteks „Ø12 mm võll ei ole M10 Ø10 mm“. Mitu tahku võivad jagada ühte Keere-elementi; **Sobita tahule** korral saab igaüks oma suuruse.

## Modelleeritud keered 3D-printimiseks

Modelleeritud keere järgib standardset põhiprofiili: ISO 68-1 meetrilistele keertele (lamedad harjad ja juured, 60° küljed), ISO 2901 trapetsikujulistele (30° küljed). **Vahe** nihutab kogu profiili sisse (võllil) või välja (augul), et prinditud detailid kruvituksid kokku:

- **0.1 kuni 0.2 mm** sobib enamikule printeritele. Prindi esmalt katsepolt ja mutter.
- **0** on standardprofiil detailidele, mida töödeldakse, või sobivuse kontrollimiseks.

Sama vahega polt ja mutter ei puuduta kunagi küljeltki: vahe nende vahel on kaks korda vahe suurus, igalt poolt.

:::tip
Peened sammud printivad halvasti: M3 ja väiksemad või samm alla 0.5 mm on lähedal sellele, mida 0.4 mm düüs suudab joonistada. Modelleeri suuremaid keeri ja väikeste jaoks kasuta kuumsulatatavat sisesisestust või keermestatud auku.
:::

Modelleeritud keere on osa tahkest: STL-, 3MF- ja STEP-eksportid kannavad seda ning Mõõda mõõdab seda. See muudab detaili ümberehitamise raskemaks: 20 mm pikkune M10 keere on umbes 150,000 kolmnurka.

## Keermestatud augud

**Keermestatud (ISO meetriline)** augul on samuti lüliti **Modelleeritud**, sama **Vahega**. Vt [Puuri augud ja vastuauk visandi punktides](topic:holes).

## Kui keere ei ehitu

- „Keere läheb ümmargusele tahule (silinder): võllile või augule.“ Valitud tahk on lame või kumer muul viisil.
- „Ümmargusele tahule Ø0.6 mm ei sobi ükski standardsuurus: vali suurus.“ Sobita tahule ei leidnud midagi 12 % piires tahust. Vali **Suurus** või muuda tahku.
- „Tahk, millel see keere oli, on kadunud (…). Vali see uuesti.“ Eelmine muudatus eemaldas tahu. Klõpsa {{ui:Vali pinnad}} ja klõpsa tahku uuesti.

:::note
Tollised keered (UNC, UNF), torukeered, koonilised keered, keerme väljajooks ja nurgatud keerme algus ei ole veel valmis. Täpne tuum näitab modelleeritud keere kosmeetilisena.
:::
