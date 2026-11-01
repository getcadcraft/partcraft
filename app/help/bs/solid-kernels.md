---
title: Mrežni kernel
summary: Ova verzija PartCrafta gradi svaki dio mrežnim kernelom koji radi u vašem pregledniku. Šta to znači za okrugle površine, zapremine i datoteke, kako prepoznati da radi i koji elementi čekaju tačan kernel.
keywords: kernel, mreža, manifold, tačan, b-rep, fasetirano, krivulje, opencascade, occt, zaobljenje traži tačan, nije izgrađeno, van mreže, webassembly
from: 68d32d16
---

Geometrijski kernel je mašina koja pretvara vašu historiju u čvrsto tijelo. Ova verzija PartCrafta ima jedan: **mrežni kernel** (manifold-3d). Radi na vašem računaru kao mali WebAssembly program i spreman je odmah nakon što se aplikacija otvori. Ništa o vašem dijelu se ne šalje nigdje.

| | Mrežni kernel |
|---|---|
| Okrugli oblici | Ravne fasete. **Krivulje** u panelu dijela određuju koliko su fine |
| Zapremine i površine | Fasetiranog čvrstog tijela, malo niže za okrugle dijelove |
| Skice, istiskivanje, usijecanje, rotacija, rupe, obrasci, zrcaljenje, referentne ravni | Da |
| Zaobljenje i skošenje | Na pravim ivicama između ravnih površina; zaobljenja koja se sastaju su pod uglom |
| Ljuska i nagib | Ljuska otvara ravne površine (tačna debljina zida); nagib naginje ravne površine |
| Izvozi | STL, 3MF, STEP (fasetirano), PDF crtež i DXF |
| Pogledi crteža | Crtaju se iz faseta, uključujući presjeke |
| Površine i ivice | Imenovane i poznate po vrsti (ravna, cilindar, konus, sfera, torus; prava, kružnica), uzete iz skica: radni prostori Simulation, Generative i Manufacture, Measure, odabir i tabela rupa ih koriste |

Čip pri desnom kraju statusne trake kaže **Mrežni kernel** dok gradi vaš dio.

## Šta čeka tačan kernel

Tačan (B-rep) kernel čuva prave kružnice, cilindre i konuse, te glatka zaobljenja na bilo kojoj ivici, provlačenja, spajanja profila, površi, limeni lim, rebra, više tijela, uvoz STEP-a i tačan izvoz STEP-a: sve se gradi na njemu. Ranije laboratorijske verzije PartCrafta koristile su OpenCascade za to. Njegova licenca (LGPL) ne odgovara ovom izdanju, gdje je svaka aplikacija Apache-2.0 i koristi samo biblioteke s permisivnim licencama, pa nije uključen. Ništa ovdje nema datum.

Dok to ne bude, ti elementi kad ih odaberete kažu **Još nije izgrađeno**: statusna traka navodi razlog, a tekst dugmadi završava s "još nije izgrađeno (treba tačan kernel)". [Šta još nije izgrađeno](topic:not-built-yet) navodi svaki od njih i šta raditi umjesto toga.

Dio napravljen njima u ranijoj verziji se i dalje otvara. Ti elementi ostaju u historiji označeni kao neizgrađeni (zadržite miš na njima za razlog), ostatak dijela se gradi, a spašavanje ih čuva nepromijenjene.

## Okrugle površine i Krivulje

Mrežni kernel crta kružnicu kao poligon. **Krivulje** u panelu dijela određuju koliko stranica dobije puni krug; više stranica izgleda glatkije i bliže je pravoj vrijednosti, ali se duže gradi. Zapremine, površine i udaljenosti iz {{ui:Measure}} su fasetiranog čvrstog tijela: za rupu ili izbočinu su malo manje od okrugle forme.

## Na mreži i van mreže

Mrežni kernel je dio samog preuzimanja aplikacije. Za rad bez veze, spasite PartCraft za rad van mreže dok ste na mreži: odaberite {{ui:Save for offline}} u traci aplikacije i sačekajte dok ne piše **Spremno za rad van mreže**. Detalji: [Rad van mreže](common:offline).
