---
title: Mrežna jezgra
summary: Ova verzija programa PartCraft gradi svaki dio mrežnom jezgrom koja radi u vašem pregledniku. Što to znači za okrugle plohe, volumene i datoteke, kako prepoznati da radi i koje značajke čekaju egzaktnu jezgru.
keywords: jezgra, mreža, manifold, egzaktna, b-rep, stranična, krivulje, opencascade, occt, zaobljenje zahtijeva egzaktnu, nije izrađeno, izvan mreže, webassembly
from: f931645c
---

Jezgra geometrije je mehanizam koji vašu povijest pretvara u čvrsto tijelo. Ova verzija programa PartCraft ima jednu: **mrežnu jezgru** (manifold-3d). Radi na vašem računalu kao mali WebAssembly program i spremna je čim se aplikacija otvori. Ništa o vašem dijelu se ne šalje nikamo.

| | Mrežna jezgra |
|---|---|
| Okrugli oblici | Ravne fasete. **Krivulje** u ploči dijela određuju koliko su fine |
| Volumeni i površine | Od tijela od faceta, malo niže na okruglim dijelovima |
| Skice, izvlačenje, rezanje, rotacija, rupe, uzorci, zrcaljenje, referentne ravnine | Da |
| Zaobljenje i skošenje | Na ravnim bridovima između ravnih ploha; zaobljenja koja se susreću su zakošena |
| Ljuska i nagib | Ljuska otvara ravne plohe (točna debljina stijenke); nagib naginje ravne plohe |
| Izvozi | STL, 3MF, STEP (egzaktno: okrugle plohe zapisane na njihovim pravim površinama; ili stranično), PDF crteža i DXF |
| Prikazi crteža | Crtaju se iz faceta, uključujući presjeke |
| Plohe i bridovi | Imenovani i prepoznati po vrsti (ravna, cilindar, stožac, sfera, torus; ravan, kružnica), uzeti iz skica: radni prostori Simulacija, Generativno i Proizvodnja, Mjeri, odabir i tablica rupa ih koriste |

Pločica pri desnom kraju statusne trake piše **Mrežna jezgra** dok gradi vaš dio.

## Što čeka egzaktnu jezgru

Egzaktna (B-rep) jezgra čuva prave kružnice, cilindre i stošce te glatka zaobljenja na bilo kojem bridu; na njoj se grade provlačenja (sweep), lofti, površine, lim, rebra, više tijela i uvoz STEP-a sa zadržanim zakrivljenim plohama. (Egzaktni izvoz STEP-a ne čeka na nju: mrežna jezgra zna pravu površinu svake plohe iz skice, a izvoz je zapisuje.) Ranije laboratorijske verzije programa PartCraft koristile su za to OpenCascade. Njegova licenca (LGPL) ne odgovara ovom izdanju, u kojem je svaka aplikacija Apache-2.0 i koristi samo biblioteke s permisivnom licencom, pa nije uključen. Za to nema datuma.

Dok to ne bude, te značajke pri odabiru pišu **Još nije izrađeno**: statusna traka kaže razlog, a opisi njihovih gumba završavaju s „još nije izrađeno (treba egzaktnu jezgru)“. [Što još nije izrađeno](topic:not-built-yet) navodi svaku od njih i što učiniti umjesto toga.

Dio napravljen njima u ranijoj verziji i dalje se otvara. Te značajke ostaju u povijesti označene kao neizrađene (zadržite pokazivač na jednu za razlog), ostatak dijela se izrađuje, a spremanje ih ostavlja nepromijenjenima.

## Okrugle plohe i Krivulje

Mrežna jezgra kružnicu crta kao mnogokut. **Krivulje** u ploči dijela određuju koliko stranica dobiva puna kružnica; više stranica izgleda glađe i bliže je pravoj vrijednosti, ali se duže izrađuje. Volumeni, površine i udaljenosti iz {{ui:Mjeri}} su tijela od faceta: za rupu ili izbočinu malo su manji nego kod okruglog oblika.

## Na mreži i izvan nje

Mrežna jezgra dio je vlastitog preuzimanja aplikacije. Za rad bez veze spremite PartCraft za rad izvan mreže dok ste na vezi: u traci aplikacije odaberite {{ui:Spremi za offline}} i pričekajte da piše **Spremno za offline rad**. Pojedinosti: [Rad izvan mreže](common:offline).
