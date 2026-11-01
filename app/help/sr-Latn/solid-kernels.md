---
title: Mrežno jezgro
summary: Ova verzija PartCraft-a gradi svaki deo mrežnim jezgrom koje radi u vašem pregledaču. Šta to znači za okrugle površine, zapremine i datoteke, kako prepoznati da radi, i koji elementi čekaju tačno jezgro.
keywords: jezgro, mreža, manifold, tačno, b-rep, fasetirano, krivine, opencascade, occt, zaobljenje traži tačno, nije izgrađeno, van mreže, webassembly
from: 68d32d16
---

Geometrijsko jezgro je mehanizam koji pretvara vašu istoriju u čvrsto telo. Ova verzija PartCraft-a ima jedno: **mrežno jezgro** (manifold-3d). Radi na vašem računaru kao mali WebAssembly program i spremno je malo nakon otvaranja aplikacije. Ništa o vašem delu se ne šalje nigde.

| | Mrežno jezgro |
|---|---|
| Okrugli oblici | Ravne fasete. **Krivine** u panelu dela određuju koliko su fine |
| Zapremine i površine | Fasetiranog tela, malo niže kod okruglih delova |
| Skice, izvlačenje, sečenje, rotiranje, rupe, nizovi, simetrija, referentne ravni | Da |
| Zaobljenje i obaranje ivica | Na pravim ivicama između ravnih površi; zaobljenja koja se sastaju spajaju se pod uglom |
| Ljuska i nacrt | Ljuska otvara ravne površi (tačna debljina zida); nacrt naginje ravne površi |
| Izvozi | STL, 3MF, STEP (fasetirani), PDF crteža i DXF |
| Pogledi crteža | Crtaju se iz faseta, uključujući preseke |
| Površi i ivice | Imenovane i poznate po vrsti (ravna, cilindar, konus, sfera, torus; prava, kružnica), uzete iz skica: radni prostori Simulacija, Generativni i Proizvodnja, Mere, izbor i tabela rupa ih koriste |

Čip blizu desnog kraja statusne trake piše **Mrežno jezgro** dok gradi vaš deo.

## Šta čeka tačno jezgro

Tačno (B-rep) jezgro čuva prave krugove, cilindre i konuse, i glatka zaobljenja na bilo kojoj ivici. Na njemu su izgrađeni provlačenja, prelivanja, površine, limeni delovi, rebra, više tela, uvoz STEP i tačan izvoz STEP. Ranije laboratorijske verzije PartCraft-a koristile su OpenCascade za to. Njegova licenca (LGPL) ne odgovara ovom izdanju, u kome je svaka aplikacija Apache-2.0 i koristi samo biblioteke sa dozvolom, pa nije uključen. Ništa ovde nema datum.

Do tada te funkcije pišu **Još nije izgrađeno** kad ih izaberete: statusna traka kaže zašto, a opisi njihovih dugmadi se završavaju sa „još nije izgrađeno (potrebno je tačno jezgro)“. [Šta još nije izgrađeno](topic:not-built-yet) navodi svaku od njih sa tim šta da radite umesto toga.

Deo napravljen njima u ranijoj verziji i dalje se otvara. Ti elementi ostaju u istoriji označeni kao neizgrađeni (zadržite pokazivač na jedan da vidite razlog), ostatak dela se gradi, a čuvanje ih ostavlja nepromenjene.

## Okrugle površine i Krivine

Mrežno jezgro crta krug kao mnogougao. **Krivine** u panelu dela određuju koliko stranica dobija pun krug; više stranica izgleda glatkije i bliže je pravoj vrednosti, ali se duže gradi. Zapremine, površine i rastojanja iz {{ui:Mere}} su fasetiranog tela: za rupu ili izbočinu su malo manji od okruglog oblika.

## Na mreži i van mreže

Mrežno jezgro je deo preuzimanja same aplikacije. Da radite bez veze, sačuvajte PartCraft za rad van mreže dok ste na mreži: izaberite {{ui:Sačuvaj za rad van mreže}} u traci aplikacije i sačekajte dok ne piše **Spremno za rad van mreže**. Detalji: [Rad van mreže](common:offline).
