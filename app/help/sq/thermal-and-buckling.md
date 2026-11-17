---
title: Nxehtësia, stresi termik dhe humbja e stabilitetit
summary: Gjeni temperaturat në një pjesë nga temperatura fikse, fluksi i nxehtësisë, fuqia e nxehtësisë, konvekcioni dhe rrezatimi (në gjendje të qëndrueshme ose me kohën), ngarkoni një studim stresi me një rritje temperature dhe gjeni ngarkesën me të cilën një pjesë e hollë humb stabilitetin, me atë që secila metodë mund dhe nuk mund t'ju tregojë.
keywords: termik, transferim nxehtësie, nxehtësi, temperaturë, përcjellje, konvekcion, koeficient filmi, rrezatim, emisiviteti, fluks nxehtësie, fuqi nxehtësie, gjenerim nxehtësie, lavaman nxehtësie, kalimtar, kohë, ftohje, ngrohje, Crank-Nicolson, Euler implicit, bilanci i nxehtësisë, stres termik, stres termik me kohën, stres termik kalimtar, shuarje, goditje termike, histori stresi, koha më e keqe, zgjerim termik, koeficient zgjerimi, humbje stabiliteti, Euler buckling, faktor ngarkese, ngarkesë kritike, kolonë, e hollë, vlerë vetjake
from: 1a1b7545
---

Këto studime jetojnë në hapësirën e punës Simulation, pranë stresit statik dhe frekuencave natyrore (shih [Kontrolloni stresin dhe deformimin](topic:simulation)). Zgjidhni ato te kutia **Lloji** e panelit. Ato përdorin të njëjtin rrjet kubikësh të vegjël dhe të njëjtën listë materialesh; çdo material i bibliotekës ka përçueshmëri termike, nxehtësi specifike dhe koeficient zgjerimi (vlera tipike nga manualet, të shfaqura te **Vetitë**).

## Termik: ku shkon nxehtësia?

1. Zgjidhni **Termike (transferim nxehtësie)** si **Lloji**.
2. Shtoni kushte termike nga lista **Shto** e panelit, pastaj klikoni faqet e tyre (si për mbështetëse dhe ngarkesa):
   - **Temperaturë fikse**: faqja mbahet në një temperaturë, në °C.
   - **Fluks nxehtësie**: W/m² që hyjnë në faqe (negativ del jashtë). Vepron në sipërfaqen reale të faqes, edhe aty ku kubikët formojnë shkallë.
   - **Fuqi nxehtësie**: një total në vat, i ndarë mbi faqet e zgjedhura sipas sipërfaqes. Përdoreni për një ngrohës ose një çip me fuqi të njohur.
   - **Konvekcion**: ajri ose lëngu me një temperaturë largon nxehtësinë me h W/(m²·K). Tipike h: ajër i qetë 5–10, ventilator 25–100, ujë 500–10,000. PartCraft nuk e llogarit h: nuk ka rrjedhje lëngu në këtë studim.
   - **Rrezatim**: faqja rrezaton drejt mjedisit në një temperaturë, me një emisivitet nga 0 deri 1. Është **i linearizuar** (rrezatimi shkruhet si një koeficient që varet nga temperatura dhe rillogaritet deri sa stabilizohet) dhe shkon vetëm drejt mjedisit: faqet nuk shkëmbejnë nxehtësi me njëra-tjetrën.
3. **Gjenerimi i nxehtësisë** (W/m³) e ngroh të gjithë pjesën nga brenda, për shembull një pjesë rezistive.
4. Shtypni **Llogarit**. Pjesa ngjyroset sipas temperaturës; zgjidhni **Fluks nxehtësie** te **Shfaq** për të parë nga ku rrjedh nxehtësia. Tregoni me kursor pjesën për të lexuar të dyja.

Rrjedha e qëndrueshme e nxehtësisë ka nevojë për një vend ku të shkojë nxehtësia: të paktën një temperaturë fikse, konvekcion ose rrezatim. Një pjesë që vetëm merr nxehtësi nuk ka gjendje të qëndrueshme; bëjeni atë kalimtare.

Tabela jep temperaturën më të ulët dhe më të lartë dhe ku ndodhen, fluksin më të madh të nxehtësisë, dhe **bilancin e nxehtësisë**: nxehtësinë që hyn ose del në çdo kusht (një temperaturë fikse llogarit atë që duhet të furnizojë ose thithë), nxehtësinë e gjeneruar, totalet hyrëse dhe daljëse, dhe **mospërputhjen**. Mospërputhja duhet të jetë një pjesë shumë e vogël e nxehtësisë hyrëse; një mospërputhje e madhe do të thotë se rezultati nuk është i besueshëm.

### Me kohën (kalimtare)

Shenjoni **Kalimtare** dhe jepni një **Temperaturë fillestare** (e gjithë pjesa fillon aty), një **Intervalin kohor** dhe një numër **Hapash kohorë**. **Euler implicit** është i qëndrueshëm; **Crank–Nicolson** është më i saktë për të njëjtët hapa, por mund të valëzohet pas një ndryshimi të papritur. Pas llogaritjes, zvarritni rrëshqitësin **Koha** për të parë temperaturat në çdo moment (shkalla e ngjyrave mbetet e njëjtë për çdo moment). Bilanci i nxehtësisë përfshin atëherë edhe nxehtësinë që ruhet.

## Stresi termik: çfarë bën një ndryshim temperature me pjesën?

Në një studim **Stres statik** (ose **Humbje stabiliteti**), vendosni **Ngarkesën termike**:

- **Ndryshim uniform i temperaturës**: e gjithë pjesa ngrohet (ose ftohet, me një numër negativ) me aq kelvin.
- **Temperaturat nga kushtet termike**: shtoni kushte termike në të njëjtin studim; temperaturat e qëndrueshme llogariten së pari në të njëjtin rrjet, pastaj pjesa zgjerohet me α·(T − **temperaturën pa stres**).
- **Temperaturat me kohën (llogaritje kalimtare)**: shtoni kushte termike, pastaj jepni një **Temperaturë fillestare**, **Intervalin kohor**, **Hapat kohorë** dhe **Hapin e kohës**, si për një studim termik kalimtar. Temperaturat llogariten me kohën në të njëjtin rrjet (kubikë ose tetraedra), dhe një llogaritje statike mbi temperaturat e çdo momenti jep stresin e atij momenti. **Stresi në**:
  - **Koha më e keqe** (fillimi): **Llogaritjet e stresit** merr momente të shpërndara në mënyrë të barabartë gjatë llogaritjes, duke përfshirë fillimin (21 përveç nëse e ndryshoni, më së shumti 51). Rezultatet hapen në momentin me stresin më të madh von Mises; tabela e emëron, një grafik i vogël tregon stresin maksimal kundrejt kohës, dhe rrëshqitësi **Koha** tregon stresin në çdo moment të llogaritur (shkalla e ngjyrave mbetet ajo e momentit më të keq).
  - **Një kohë e zgjedhur**: një moment, hapi kohor më i afërt me **Koha (s)** që jepni. Një studim humbje stabiliteti merr gjithmonë një kohë të zgjedhur (fundi i llogaritjes përveç nëse vendosni një tjetër).

Një pjesë e shuar (e zhytur nga e nxehtë në të ftohtë) ose e nxehur papritur është më e stresuar kur brendësia dhe sipërfaqja ndryshojnë më shumë: shpesh menjëherë në fillim. Një temperaturë e mbajtur zbatohet nga çasti i parë, si ndryshim i papritur, kështu që stresi në fillim varet nga madhësia e elementit (vetëm disa elementë e shohin ndryshimin). Lexojeni si "shumë i lartë", dhe shikoni momentet e mëvonshme në rrëshqitës për vlera që rrjeti i zgjidh. Stresi është kuasi-statik: pa inerci, pa dridhje nga ndryshimi i papritur.

Një pjesë që është e lirë të zgjerohet nuk ka stres termik: mbajeni vetëm sa për të ndaluar lëvizjen (për shembull tri faqe pa fërkim në kënde të drejta). E mbajtur mes dy mureve shtypet: një shufër çeliku e ngrohur 50 K mes mureve të ngurtë mban rreth 117 MPa. Ngarkesat termike balancohen vetë, kështu që reaksionet ende balancohen vetëm me ngarkesat mekanike.

## Humbja e stabilitetit: kur një pjesë e hollë dorëzohet?

1. Zgjidhni **Humbje stabiliteti (lineare)** si **Lloji**, dhe shtoni mbështetëse dhe ngarkesa si për një studim statik.
2. Vendosni **Faktorët e ngarkesës për t'u gjetur** (sa mënyra humbjeje).
3. Shtypni **Llogarit**. Çdo mënyrë ka një **faktor ngarkese**: shumëfishin e ngarkesave tuaja me të cilin pjesa ideale humb stabilitetin. Një faktor ngarkese 3 do të thotë tre herë ngarkesat tuaja; **një faktor ngarkese nën 1 do të thotë se humb stabilitetin nën ngarkesat që keni aplikuar**. Tabela jep edhe ngarkesën totale në çdo faktor. Forma e mënyrës tregon si humb stabilitetin (madhësia e saj nuk do të thotë asgjë).

**Humbja lineare e stabilitetit e mbivlerëson ngarkesën reale të humbjes.** Ajo supozon një pjesë të përsosur: plotësisht të drejtë, pa stres të mbetur, dhe elastike. Pjesët reale kanë papërsosmëri të vogla dhe mund të dorëzohen më parë, ndërsa guaskat me mure të holla mund të humbin stabilitetin me një pjesë të vlerës lineare. Përdorni një margjinë të gjerë, dhe e konsideroni një faktor ngarkese afër ose nën 3 për një guaskë të hollë si paralajmërim.

## Sa t'i besoni

PartCraft i kontrollon këta zgjidhës kundrejt formulave me dorë: një shufër midis dy temperaturave (saktësisht), një finë ftohjeje (brenda 0.3 K), një pllakë që ngrohet vetë (saktësisht), një kub që ftohet me kohën (brenda 0.1 % me Crank–Nicolson), një shufër e nxehur papritur në njërin skaj, një shufër e lirë e ngrohur (pa stres, ΔL = αLΔT), një shufër e mbajtur mes mureve (σ = −EαΔT), një pllakë e shuar me kohën kundrejt zgjidhjes klasike me seri (brenda 1 % në kube, 2.1 % në tetraedra në qendrën e pllakës; 0.5 % në sipërfaqen e saj), momenti i fundit i një llogaritjeje të gjatë kundrejt stresit termik të qëndrueshëm (i njëjtë deri në një milionë), dhe kolona të Euler-it (brenda 1 % fiksuar–të lirë, 1.5 % të mbështetura–të mbështetura). Mbajeni parasysh:

- **Vlera konstante të materialit.** Përçueshmëria, nxehtësia specifike dhe zgjerimi nuk ndryshojnë me temperaturën këtu; në disa qindra gradë mund të ndryshojnë me 10–30 %. Ngurtësia gjithashtu nuk ndryshon.
- **Stresi me kohën është kuasi-statik dhe elastik**: çdo moment është një llogaritje statike (pa inerci), pa dorëzim, kështu që një shuarje që do të dorëzonte sipërfaqen shfaq në vend të kësaj një stres mbi kufirin e rrjedhjes.
- **Koeficientët e konvekcionit janë hyrja juaj**, jo të llogaritur nga një rrjedhje ajri ose uji.
- **Pa rezistencë kontakti**: pjesa është një trup i vetëm i ngurtë.
- **Vetëm humbje lineare stabiliteti**: pa papërsosmëri, pa dorëzim, pa sjellje pas humbjes së stabilitetit.
- Efekti i shkallës së kubit dhe këndet e brendshme të mprehta ndikojnë në stresin termik njësoj si në stresët e tjerë (shih [Kontrolloni stresin dhe deformimin](topic:simulation)).
- Kjo është një version laboratorik: kontrolloni pjesët që kanë rëndësi në një mënyrë tjetër.

## Lidhur me

- [Kontrolloni stresin dhe deformimin (Simulation)](topic:simulation)
- [Çfarë nuk është ndërtuar ende](topic:not-built-yet)
