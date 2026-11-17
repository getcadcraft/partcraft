---
title: Mrežno jezgro
summary: Ova verzija PartCraft-a gradi svaki deo mrežnim jezgrom koje radi u pregledaču. Šta to znači za zaobljene površi, zapremine i datoteke, kako prepoznati da radi i koje funkcije čekaju tačno jezgro.
keywords: jezgro, mreža, manifold, tačno, b-rep, fasetirano, krive, opencascade, occt, zaobljenje traži tačno, nije izgrađeno, van mreže, webassembly
from: f931645c
---

Jezgro geometrije je mehanizam koji pretvara tvoju istoriju u čvrsto telo. Ova verzija PartCraft-a ima jedno: **mrežno jezgro** (manifold-3d). Radi na tvom računaru kao mali WebAssembly program i spremno je čim se aplikacija otvori. Ništa o tvom delu se ne šalje nigde.

| | Mrežno jezgro |
|---|---|
| Zaobljeni oblici | Ravne facete. **Krive** u panelu dela određuju koliko su fine |
| Zapremine i površine | Od fasetiranog tela, malo niže kod zaobljenih delova |
| Skice, izvlačenje, sečenje, rotiranje, rupe, nizovi, simetrija, referentne ravni | Da |
| Zaobljenje i skošenje | Na pravim ivicama između ravnih površi; zaobljenja koja se sastaju su pokošena |
| Ljuska i nagib | Ljuska otvara ravne površi (tačna debljina zida); Nagib naginje ravne površi |
| Izvoz | STL, 3MF, STEP (tačan: zaobljene površi zapisane na njihovim pravim površima; ili fasetiran), PDF crteža i DXF |
| Prikazi crteža | Crtaju se iz faceta, uključujući preseke |
| Površi i ivice | Imenovane i prepoznate po vrsti (ravna, cilindar, konus, sfera, torus; prava, krug), uzete iz skica: radni prostori Simulacija, Generativni i Proizvodnja, Mere, izbor i tabela rupa ih koriste |

Čip pri desnom kraju statusne trake kaže **Mrežno jezgro** dok gradi tvoj deo.

## Šta čeka tačno jezgro

Tačno (B-rep) jezgro čuva prave krugove, cilindre i konuse, i glatka zaobljenja na bilo kojoj ivici; na njemu su izgrađeni provlačenja, lofting, površi, lim, rebra, više tela i uvoz STEP-a sa zakrivljenim površima koje ostaju tačne. (Tačan izvoz STEP-a ne čeka njega: mrežno jezgro zna pravu površ svake strane iz skice, i izvoz je zapisuje.) Ranije laboratorijske verzije PartCraft-a su za to koristile OpenCascade. Njegova licenca (LGPL) ne odgovara ovom izdanju, gde je svaka aplikacija Apache-2.0 i koristi samo biblioteke sa dozvolnim licencama, pa nije uključen. Ništa ovde nema datum.

Dok se to ne desi, te funkcije pri izboru kažu **Još nije izgrađeno**: statusna traka navodi razlog, a opis dugmeta se završava sa „još nije izgrađeno (traži tačno jezgro)“. [Šta još nije izgrađeno](topic:not-built-yet) navodi svaku od njih sa onim što treba uraditi umesto nje.

Deo napravljen tim funkcijama u ranijoj verziji i dalje se otvara. Te funkcije ostaju u istoriji označene kao neizgrađene (zadrži pokazivač na jednoj za razlog), ostatak dela se gradi, a čuvanje ih ostavlja nepromenjene.

## Zaobljene površi i krive

Mrežno jezgro crta krug kao poligon. **Krive** u panelu dela određuju koliko stranica dobija pun krug; više stranica izgleda glatkije i bliže je pravoj vrednosti, ali se duže gradi. Zapremine, površine i rastojanja iz {{ui:Mere}} su od ovog fasetiranog tela: kod rupe ili izbočine su malo manji nego kod zaobljenog oblika.

## Na mreži i van mreže

Mrežno jezgro je deo preuzimanja same aplikacije. Da radiš bez veze, sačuvaj PartCraft za rad van mreže dok si na mreži: izaberi {{ui:Sačuvaj za rad van mreže}} na traci aplikacije i sačekaj da piše **Spremno za rad van mreže**. Detalji: [Rad van mreže](common:offline).
