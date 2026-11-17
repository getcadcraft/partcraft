---
title: Referentne ravni, ose i tačke
summary: Pravi ravni pomaknute od površine, pod uglom, kroz tri tačke, na sredini, tangentne na cilindar, normalne na ivicu ili kroz ivicu i tačku; ose; tačke na sredinama ivica, presecima i uglovima ravni; skiciraj na njima i koristi ih kao ose rotacije, pravce šablona i ravni ogledala.
keywords: podatak, između objekata, središte, tačka preseka, ravan kroz ivicu i tačku, referentna ravan, radna ravan, konstrukciona ravan, ravan podatka, pomaknuta ravan, ravan pod uglom, srednja ravan, tangentna ravan, referentna osa, konstrukciona osa, osa podatka, referentna tačka, radna tačka, skiciranje na ravni
from: e7eb6fc1
---

Referentna geometrija je skela na kojoj gradiš elemente: **ravan** na kojoj skiciraš tamo gde nema površine, **osa** oko koje rotiraš ili pravis šablon, **tačka** na kojoj zaustavljaš izvlačenje. Nema sopstveni materijal. Ravni se u prikazu vide kao bledi kvadrati, ose kao isprekidane linije, tačke kao mali krstići; sve tri ulaze u istoriju i prate ono od čega su napravljene kad promeniš meru u ranijim koracima.

Nalaze se u meniju {{ui:Više}} grupe Elementi: {{ui:Ravan}}, {{ui:Osa}}, {{ui:Tačka}}.

## Napravi ravan

1. Klikni ravnu površinu ili osnovnu ravan u istoriji da kreneš od nje (opciono).
2. Odaberi {{ui:Više}}, pa {{ui:Ravan}}. Počinje kao pomaknuta ravan udaljena 20 % veličine dela od onoga što si izabrao (ili od gornje ravni).
3. U desnom panelu izaberi **Tip** i njegove reference:

| Tip | Reference | Brojevi |
|---|---|---|
| Pomaknuto od ravni ili površine | **Od ravni** | **Rastojanje (mm)**, negativno za drugu stranu |
| Pod uglom, kroz ivicu ili osu | **Od ravni**, **Okreni oko** (osa sveta, element ose ili izabrana prava ivica) | **Ugao (°)** |
| Kroz tri tačke | **Tačka 1**, **Tačka 2**, **Tačka 3** | — |
| Srednja ravan između dve | **Prva ravan**, **Druga ravan** (paralelne: na pola puta; u preseku: ravan koja deli ugao na pola) | — |
| Tangentno na cilindar | **Cilindar** (cilindrična površina), **Bliska tačka** (koja strana) | — |
| Normalno na ivicu, u tački | **Ivica**, **U tački** (ravan prolazi kroz tačku ivice najbliže njoj, i kroz tu tačku) | — |
| Kroz ivicu i tačku | **Prava ivica** (ili osa), **Kroz tačku** | — |
| Normalno na ivicu na njenoj sredini | **Ivica** (na pola njene dužine, normalno na nju), ili bez ivice **Tačka 1** i **Tačka 2** (ravan na pola puta između njih) | — |

Svaka referenca ima dugme **Izaberi**: odaberi ga, pa klikni u prikazu. Mesto za ravan prima osnovnu ravan, referentnu ravan ili ravnu površinu; mesto za tačku prima kraj ivice (klikni blizu tog kraja), element tačke ili mesto na površini; mesto za ivicu prima ivicu. {{key:Esc}} otkazuje izbor. **Okreni normalu** preokreće ravan (u kom smeru je okrenuta skica na njoj).

U ovoj verziji mesto kojem treba ivica ili cilindrična površina (Tangentno na cilindar i mesta za ivicu) odgovara „još nije izgrađeno“: umesto toga koristi tačke ili osu.

## Skiciraj na ravni

Izaberi ravan (u istoriji ili klikom na njen kvadrat u prikazu) i odaberi {{ui:Skica}}, ili **Skiciraj na njoj** u njenom panelu. Skica prati ravan: promeni rastojanje ravni, pa se pomeraju i skica i svaki element na njoj.

## Ose i tačke

- {{ui:Osa}}: kroz dve tačke, osa cilindra ili konusa, mesto gde se seku dve ravni, duž prave ivice (ili osa kružne ivice), ili normalno na površinu kroz tačku.
- {{ui:Tačka}}: na koordinatama, na temenu ili tački skice, ili u centru kružne ivice, plus tačke „između objekata“:

| Vrsta tačke | Reference |
|---|---|
| Sredina ivice (ili između dve tačke) | **Ivica** (na pola njene dužine, i za lukove i krive), ili bez ivice **Tačka 1** i **Tačka 2** |
| Gde ivica ili osa seče površinu ili ravan | **Ivica** (prava ili kriva) ili osa, i **Seče ravan** (ravan ili ravna površina) ili **Ili površina** (ravna površina ili cilindar). Krug seče ravan dva puta, a prava prolazi kroz cilindar dva puta: **Drugi presek** uzima drugi |
| Gde se seku tri ravni | **Prva**, **Druga** i **Treća ravan** (ravni ili ravne površine) |

Svaka se ne uspeva uz običnu poruku kad reference ne odgovaraju: prava paralelna sa ravni, prava koja promašuje cilindar, ivica koja ne dopire do ravni, tri ravni koje se ne seku u jednoj tački, tačka na pravoj kojom bi trebalo da se fiksira ravan.

Koristi ih u drugim elementima:

| Gde | Kako |
|---|---|
| Rotiranje | **Osa**: izaberi element ose sa spiska (mora ležati u ravni skice) |
| Kružni šablon | **Osa**: element ose |
| Linearni šablon | **Pravac**: element ose ili ravan (njena normala) |
| Ogledalo | **Ravan ogledala**: referentna ravan |
| Izvlačenje | **Kraj**: Do površine ili ravni, Do temena (element tačke). Još nije izgrađeno u ovoj verziji (treba mu tačno jezgro) |
| Nagib | **Neutralna ravan** |

## Kad referenca nestane

Ravan napravljena od površine koja više ne postoji ne uspeva uz poruku koja je imenuje, na primer „Površina na kojoj leži nestala je iz Extrude1.“ Nikad se ne pomera na drugu površinu. Skice i elementi na njoj su označeni „nije izgrađeno“ dok ne izabereš novu referencu; ostatak dela ostaje kakav je bio.

:::note
Ova verzija gradi svaki deo mrežnim jezgrom, koje pravi ravni, ose i tačke od osnovnih ravni, ravnih površina nastalih izvlačenjem ili rotiranjem, tačaka skice, koordinata i drugih referentnih elemenata. Sve što traži ivicu, kraj ivice ili zakrivljenu površinu treba tačno jezgro: još nije izgrađeno u ovoj verziji („Koristi površinu ili ivicu tela, koju može da nađe samo tačno jezgro: još nije izgrađeno u ovoj verziji.“).
:::
