---
title: Mrežna jezgra
summary: Ova verzija PartCrafta gradi svaki dio mrežnom jezgrom koja radi u vašem pregledniku. Što to znači za okrugle plohe, obujme i datoteke, kako prepoznati da radi i koje značajke čekaju egzaktnu jezgru.
keywords: jezgra, mreža, manifold, egzaktno, b-rep, stranično, krivulje, opencascade, occt, zaobljenje treba egzaktnu, nije izrađeno, offline, webassembly
from: 68d32d16
---

Geometrijska jezgra je pogon koji vašu povijest pretvara u puno tijelo. Ova verzija PartCrafta ima jednu: **mrežnu jezgru** (manifold-3d). Radi na vašem računalu kao mali WebAssembly program i spremna je trenutak nakon otvaranja aplikacije. Ništa o vašem dijelu ne šalje se nikamo.

| | Mrežna jezgra |
|---|---|
| Okrugli oblici | Ravne stranice. **Krivulje** u ploči dijela određuju koliko su fine |
| Obujmi i površine | Stranično izvedenog tijela, malo preniski na okruglim dijelovima |
| Skice, izvlačenje, izrez, rotacija, provrti, uzorci, zrcaljenje, referentne ravnine | Da |
| Zaobljenje i skošenje | Na ravnim bridovima među ravnim plohama; zaobljenja koja se sastaju spajaju se na gerung |
| Ljuska i nagib izvlačenja | Ljuska otvara ravne plohe (točna debljina stijenke); nagib naginje ravne plohe |
| Izvozi | STL, 3MF, STEP (stranični), PDF crteža i DXF |
| Pogledi crteža | Crtaju se iz stranica, uključujući presjeke |
| Plohe i bridovi | Imenovani i poznati po vrsti (ravna, valjak, stožac, kugla, torus; ravan, kružnica), preuzeti iz skica: koriste ih radni prostori Simulacija, Generativni i Proizvodnja, Mjerenje, odabir i tablica provrta |

Oznaka pri desnom kraju statusne trake kaže **Mrežna jezgra** dok gradi vaš dio.

## Što čeka egzaktnu jezgru

Egzaktna (B-rep) jezgra čuva prave kružnice, valjke i stošce, a na njoj su izgrađena glatka zaobljenja na bilo kojem bridu, provlačenja, loftovi, površine, lim, rebra, više tijela, STEP uvoz i egzaktni STEP izvoz. Ranije laboratorijske verzije PartCrafta za to su koristile OpenCascade. Njegova licenca (LGPL) ne odgovara ovom izdanju, u kojem je svaka aplikacija pod licencom Apache-2.0 i koristi samo biblioteke s dopuštajućim licencama, pa nije uključen. Za ništa od ovoga nema datuma.

Do tada te značajke kažu **Još nije izrađeno** kad ih odaberete: statusna traka daje razlog, a opisi njihovih gumba završavaju s „još nije izrađeno (treba egzaktnu jezgru)“. [Što još nije izrađeno](topic:not-built-yet) navodi svaku s onim što umjesto toga učiniti.

Dio izrađen s njima u ranijoj verziji i dalje se otvara. Te značajke ostaju u povijesti označene kao neizrađene (zadržite pokazivač iznad jedne za razlog), ostatak dijela se gradi, a spremanje ih zadržava nepromijenjene.

## Okrugle plohe i Krivulje

Mrežna jezgra crta kružnicu kao poligon. **Krivulje** u ploči dijela određuju koliko stranica dobiva puna kružnica; više stranica izgleda glađe i mjeri bliže pravoj vrijednosti, a duže se gradi. Obujmi, površine i udaljenosti iz alata {{ui:Mjeri}} odnose se na ovo stranično tijelo: za provrt ili bos malo su manji od onih okruglog oblika.

## Online i offline

Mrežna jezgra dio je preuzimanja same aplikacije. Za rad bez veze spremite PartCraft za offline uporabu dok ste online: odaberite {{ui:Spremi za offline}} u traci aplikacije i pričekajte da piše **Spremno za offline**. Pojedinosti: [Rad offline](common:offline).
