---
title: Mrežno jezgro
summary: Ova verzija PartCraft-a gradi svaki dio mrežnim jezgrom koje radi u vašem pregledaču. Šta to znači za okrugle površine, zapremine i datoteke, kako prepoznati da radi i koji elementi čekaju tačno jezgro.
keywords: jezgro, mreža, manifold, tačno, b-rep, facetirano, krive, opencascade, occt, zaobljenje zahtijeva tačno, nije izgrađeno, van mreže, webassembly
from: f931645c
---

Geometrijsko jezgro je pogon koji vašu historiju pretvara u čvrsto tijelo. Ova verzija PartCraft-a ima jedno: **mrežno jezgro** (manifold-3d). Radi na vašem računaru kao mali WebAssembly program i spremno je čim se aplikacija otvori. Ništa o vašem dijelu se nigdje ne šalje.

| | Mrežno jezgro |
|---|---|
| Okrugli oblici | Ravne facete. **Krive** u panelu dijela određuju koliko su fine |
| Zapremine i površine | Facetiranog tijela, malo niže za okrugle dijelove |
| Skice, istiskivanje, rezanje, rotacija, rupe, uzorci, zrcaljenje, referentne ravni | Da |
| Zaobljenje i skošenje | Na pravim ivicama između ravnih površina; zaobljenja koja se sastaju su zakošena |
| Ljuska i nacrt | Ljuska otvara ravne površine (tačna debljina zida); Nacrt naginje ravne površine |
| Izvoz | STL, 3MF, STEP (tačan: okrugle površine zapisane na njihovim pravim površinama; ili facetirano), PDF crteža i DXF |
| Pogledi crteža | Crtaju se iz faceta, uključujući presjeke |
| Površine i ivice | Imenovane i prepoznate po vrsti (ravna, cilindar, konus, sfera, torus; prava, krug), uzete iz skica: radne površine Simulacija, Generativno i Proizvodnja, {{ui:Mjeri}}, odabir i tabela rupa ih koriste |

Oznaka pri desnom kraju statusne trake kaže **Mrežno jezgro** dok gradi vaš dio.

## Šta čeka tačno jezgro

Tačno (B-rep) jezgro čuva prave krugove, cilindre i konuse, glatka zaobljenja na bilo kojoj ivici, provlačenja, lofte, površine, lim, rebra, više tijela i uvoz STEP-a sa zakrivljenim površinama sačuvanim tačno; sve to se gradi na njemu. (Tačan izvoz STEP-a ne čeka ga: mrežno jezgro zna pravu površinu svake površine iz skice, a izvoz to zapisuje.) Ranije laboratorijske verzije PartCraft-a koristile su za to OpenCascade. Njegova licenca (LGPL) ne odgovara ovom izdanju, gdje je svaka aplikacija Apache-2.0 i koristi samo biblioteke sa dozvolom, pa nije uključena. Ovdje ništa nema datum.

Dotle ti elementi pri odabiru kažu **Još nije izgrađeno**: statusna traka navodi razlog, a opisi dugmadi završavaju se s "još nije izgrađeno (zahtijeva tačno jezgro)". [Šta još nije izgrađeno](topic:not-built-yet) navodi svaki od njih i šta raditi umjesto toga.

Dio napravljen njima u ranijoj verziji i dalje se otvara. Ti elementi ostaju u historiji označeni kao neizgrađeni (zadržite pokazivač na jednom za razlog), ostatak dijela se gradi, a spašavanje ih čuva nepromijenjenim.

## Okrugle površine i krive

Mrežno jezgro crta krug kao poligon. **Krive** u panelu dijela određuju koliko stranica dobija puni krug; više stranica izgleda glađe i mjeri se bliže pravoj vrijednosti, ali se duže gradi. Zapremine, površine i udaljenosti iz {{ui:Mjeri}} odnose se na ovo facetirano tijelo: za rupu ili izbočinu su malo manje nego kod okruglog oblika.

## Na mreži i van mreže

Mrežno jezgro je dio samog preuzimanja aplikacije. Da radite bez veze, spasite PartCraft za rad van mreže dok ste na mreži: odaberite {{ui:Spasi za rad van mreže}} u traci aplikacije i sačekajte dok ne piše **Spremno za rad van mreže**. Detalji: [Rad van mreže](common:offline).
