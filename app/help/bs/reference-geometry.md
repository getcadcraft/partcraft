---
title: Referentne ravnine, ose i tačke
summary: Pravite ravnine pomaknute od površi, pod uglom, kroz tri tačke, na sredini, tangentno na cilindar, okomito na ivicu ili kroz ivicu i tačku; ose; tačke na sredinama ivica, presjecima i uglovima ravnina; skicirajte na njima i koristite ih kao ose rotacije, pravce uzorka i ravnine ogledala.
keywords: baza, između objekata, središnja tačka, tačka presjeka, ravnina kroz ivicu i tačku, referentna ravnina, radna ravnina, konstrukciona ravnina, ravnina baze, ravnina pomaka, ravnina pod uglom, srednja ravnina, tangentna ravnina, referentna osa, konstrukciona osa, osa baze, referentna tačka, radna tačka, skica na ravnini
from: e7eb6fc1
---

Referentna geometrija je skela na kojoj gradite značajke: **ravnina** na kojoj skicirate tamo gdje nema površi, **osa** oko koje rotirate ili uzorkujete, **tačka** na kojoj zaustavljate izvlačenje. Nema sopstveni materijal. Ravnine se u prikazu vide kao bljedi kvadrati, ose kao isprekidane linije, tačke kao mali krstići; sve tri ulaze u historiju i prate ono od čega su napravljene kada promijenite veličinu ranije.

U grupi Značajke, u meniju {{ui:More}}: {{ui:Plane}}, {{ui:Axis}}, {{ui:Point}}.

## Napravi ravninu

1. Kliknite ravnu površ ili osnovnu ravninu u historiji da počnete od nje (opciono).
2. Izaberite {{ui:More}}, zatim {{ui:Plane}}. Počinje kao ravnina pomaknuta za 20 % veličine dijela od onoga što ste odabrali (ili od gornje ravnine).
3. U desnom panelu izaberite **Tip** i njegove reference:

| Tip | Reference | Brojevi |
|---|---|---|
| Pomaknuto od ravnine ili površi | **Iz ravnine** | **Udaljenost (mm)**, negativno za drugu stranu |
| Pod uglom, kroz ivicu ili osu | **Iz ravnine**, **Okreni oko** (svjetska osa, značajka ose ili odabrana prava ivica) | **Ugao (°)** |
| Kroz tri tačke | **Tačka 1**, **Tačka 2**, **Tačka 3** | — |
| Srednja ravnina između dvije | **Prva ravnina**, **Druga ravnina** (paralelne: na pola puta; koje se sijeku: ravnina koja polovi ugao) | — |
| Tangentno na cilindar | **Cilindar** (cilindrična površ), **Blizu tačke** (koja strana) | — |
| Okomito na ivicu, u tački | **Ivica**, **U tački** (ravnina prolazi kroz tačku ivice najbližu njoj i kroz tu tačku) | — |
| Kroz ivicu i tačku | **Prava ivica** (ili osa), **Kroz tačku** | — |
| Okomito na ivicu na njenoj sredini | **Ivica** (na pola njene dužine, okomito na nju tu), ili bez ivice **Tačka 1** i **Tačka 2** (ravnina na pola puta između njih) | — |

Svaka referenca ima dugme **Odaberi**: izaberite ga, zatim kliknite u prikazu. Mjesto za ravninu prima osnovnu ravninu, referentnu ravninu ili ravnu površ; mjesto za tačku prima kraj ivice (kliknite blizu tog kraja), značajku tačke ili mjesto na površi; mjesto za ivicu prima ivicu. {{key:Esc}} otkazuje odabir. **Okreni normalu** preokreće ravninu (u kojem smjeru je okrenuta skica na njoj).

U ovoj verziji mjesto koje traži ivicu ili cilindričnu površ (Tangentno na cilindar i mjesta za ivicu) odgovara „još nije izgrađeno“: koristite tačke ili osu.

## Skicirajte na ravnini

Odaberite ravninu (u historiji ili klikom na njen kvadrat u prikazu) i izaberite {{ui:Sketch}}, ili **Skiciraj na njoj** u njenom panelu. Skica prati ravninu: promijenite udaljenost ravnine, a skica i svaka značajka na njoj se također pomjeraju.

## Ose i tačke

- {{ui:Axis}}: kroz dvije tačke, osa cilindra ili konusa, mjesto gdje se dvije ravnine sastaju, duž prave ivice (ili ose kružne ivice), ili okomito na površ kroz tačku.
- {{ui:Point}}: na koordinatama, na vrhu ili tački skice, ili u središtu kružne ivice, plus tačke „između objekata“:

| Tip tačke | Reference |
|---|---|
| Sredina ivice (ili između dvije tačke) | **Ivica** (na pola njene dužine, važi i za lukove i krive), ili bez ivice **Tačka 1** i **Tačka 2** |
| Gdje se ivica ili osa sastaje sa površi ili ravninom | **Ivica** (prava ili kriva) ili osa, i **Siječe ravninu** (ravnina ili ravna površ) ili **Ili površ** (ravna površ ili cilindar). Kružnica siječe ravninu dvaput, a prava linija prolazi kroz cilindar dvaput: **Drugi presjek** uzima drugi |
| Gdje se sijeku tri ravnine | **Prva**, **Druga** i **Treća ravnina** (ravnine ili ravne površi) |

Svaka od njih ne uspijeva uz običnu poruku kada reference ne odgovaraju: prava paralelna ravnini, prava koja promašuje cilindar, ivica koja ne dopire do ravnine, tri ravnine koje se ne sijeku u jednoj tački, ili tačka na pravoj koju bi trebalo da fiksira ravninu.

Koristite ih u drugim značajkama:

| Gdje | Kako |
|---|---|
| Rotacija | **Osa**: odaberite značajku ose sa spiska (mora ležati u ravnini skice) |
| Kružni uzorak | **Osa**: značajka ose |
| Linearni uzorak | **Pravac**: značajka ose, ili ravnina (njena normala) |
| Ogledalo | **Ravnina ogledala**: referentna ravnina |
| Izvlačenje | **Kraj**: Do površi ili ravnine, Do vrha (značajka tačke). Još nije izgrađeno u ovoj verziji (potreban je tačan kernel) |
| Nagib | **Neutralna ravnina** |

## Kada referenca nestane

Ravnina napravljena od površi koja više ne postoji ne uspijeva uz poruku koja to imenuje, na primjer: „Površ na kojoj leži više nije u Extrude1.“ Nikada se ne premješta na drugu površ. Skice i značajke na njoj označene su „nije izgrađeno“ dok ne odaberete novu referencu; ostatak dijela ostaje kakav je bio.

:::note
U ovoj verziji svaki dio se gradi mrežnim kernelom, koji pravi ravnine, ose i tačke od osnovnih ravnina, ravnih površi nastalih izvlačenjem ili rotacijom, tačaka skice, koordinata i drugih referentnih značajki. Sve što zahtijeva ivicu, kraj ivice ili zakrivljenu površ zahtijeva tačan kernel: još nije izgrađeno u ovoj verziji. Poruka glasi: „Koristi površ ili ivicu tijela, koju može pronaći samo tačan kernel: još nije izgrađeno u ovoj verziji.“
:::
