---
title: Pripremi dio za 3D štampu
summary: Provjeri da su dio ili sklop zatvoreni, da stanu na tvoj štampač i stoje na podlozi, pa ih preuzmi kao STL ili 3MF za tvoj slicer.
keywords: 3d štampa, 3d štampanje, štampač, štampanje, slicer, stl, 3mf, vodonepropusno, zatvoreno, mnogostruko, podloga, veličina podloge, ploča za štampu, previs, potpore, baza, milimetri, izvoz, navoji, zazor
from: 90d81dff
---

Slicer treba zatvoren oblik: bez rupa, sa svakom površinom okrenutom prema van, ništa što prolazi kroz samo sebe. Dijelovi koje PartCraft pravi su zatvoreni po konstrukciji, pa provjera uglavnom govori o veličini, da li dio staje na podlogu štampača, da li stoji na ravnoj površini, i koliko je dio u previsu.

## Provjeri i preuzmi

1. Opcionalno, jednom: postavi podlogu štampača u {{ui:Postavke}} › PartCraft › **3D štampač**: širinu, dubinu i visinu u milimetrima. Ostavi ih prazne da preskočiš tu provjeru.
2. Odaberi {{ui:Izvoz}}, pa {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}}.

   Dijalog kaže "Spremno za štampu" ili "Nije spremno za štampu", navodi šta nije u redu, i daje veličinu na podlozi (X × Y × Z, u milimetrima), zapreminu i broj trouglova.

3. Klikni {{ui:Preuzmi 3MF}} ili {{ui:Preuzmi STL}}. Datoteka je ista kao {{ui:Izvoz}} › {{ui:3MF, za 3D štampu}} ili {{ui:STL, za 3D štampu}}.

U sklopu, provjera i datoteke obuhvataju cijeli sklop, svaku kopiju tamo gdje je postavljena.

Dio se provjerava onako kako ga izvoz piše: ono što u PartCraft-u gleda gore (okomito na Gornju ravninu) gleda gore na podlozi. Dio skiciran na Gornjoj ravnini leži ravno.

## Šta dijalog može reći

**Nije spremno za štampu** (slicer ga može odbiti ili štampati pogrešno): rupe (ivice sa površinom samo sa jedne strane), ivice zajedničke za tri ili više površina, površine okrenute u suprotnim smjerovima, tijelo naopako, ili tijelo koje prolazi kroz samo sebe. Dio napravljen u PartCraft-u nikad ne bi trebao pokazati ovo; ako pokaže, vidi [Rješavanje problema](topic:troubleshooting).

**Upozorenja** (štampa se, ali prvo pogledaj):

- **Veće od podloge tvog štampača**, čak i okrenuto za 90° na njoj.
- **Ništa ne leži ravno na dnu**: okreni dio u slicer-u tako da površina naliježe na podlogu, inače će trebati potpore ili podloga.
- **Nagnuto više od 45° od uspravnog položaja**: te površine trebaju potporu u trenutnom položaju. Drugi način postavljanja može trebati manje.
- **Odvojena tijela se preklapaju** ili **dodiruju površina na površinu**: slicer ih obično spaja. {{ui:Kombinuj}} u Elementi › Više spaja ih u jedno tijelo. Vidi [Tijela](topic:bodies).
- **Manje od 1 mm u presjeku**: provjeri veličine dijela.

## Navoji koji se štampaju

Modelirani navoj se štampa kao pravi navoj. Daj mu malo **Zazora** da se odštampani zavrtanj uvuče u odštampanu maticu: vidi [Navoji](topic:threads).

## Zaglađene okrugle površine

STL i 3MF se sastoje od trouglova. Za glađe okrugle površine klikni prazan prostor da ništa nije odabrano, pa u desnom panelu postavi **Krivine** na **Fino (128 po obrtu)** ili **Vrlo fino (256 po obrtu)** prije izvoza. Više trouglova znači veće datoteke.

## Veće, manje ili u dijelovima

- **Izvoz › Skaliraj za štampu (STL ili 3MF)…** čuva dio skaliran po osi bez mijenjanja samog dijela: **dozvolu za skupljanje** u procentima (veličina × (1 + s), ili tačna veličina ÷ (1 − s)) za model za livenje, ili obične faktore, u odnosu na sredinu, najnižu tačku, sredinu dna ili ishodište.
- **Izvoz › Podijeli za štampu (zip sa dijelovima)…** reže dio prevelik za tvoj štampač na dijelove, od kojih svaki stane na podlogu koju zadaš, spojene klinovima, ključevima, lastinim repom, rupama za klinove ili džepovima za magnete (sa zazorom koji postaviš). Svaki dio i spoj je numerisan, a dijelovi se čuvaju kao STL ili 3MF u zip datoteci sa listom sklopa. Sam dio se ne mijenja.

## Nije provjereno

Debljina zida, detalji manji od tvoje mlaznice, i kako će slicer postaviti potpore. Tvoj slicer to prikazuje.
