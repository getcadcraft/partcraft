---
title: Priprema dijela za 3D ispis
summary: Provjerite je li dio ili sklop zatvoren, stane li u vaš pisač i stoji li na podlozi, zatim ga preuzmite kao STL ili 3MF za vaš slicer.
keywords: 3D ispis, 3D printanje, pisač, ispis, slicer, stl, 3mf, zatvoreno, vodonepropusno, mnogostrukost, podloga, veličina podloge, radna ploča, previs, potpore, baza, milimetri, izvoz, navoji, zračnost
from: 90d81dff
---

Slicer treba zatvoren oblik: bez rupa, sa svakom plohom okrenutom prema van i bez prolaska kroz samog sebe. Dijelovi koje gradi PartCraft zatvoreni su po konstrukciji, pa provjera uglavnom pokazuje veličinu, staje li dio na radnu ploču vašeg pisača, stoji li na ravnoj plohi i koliko viri (previs).

## Provjera i preuzimanje

1. Opcionalno, jednom: postavite radnu ploču pisača u {{ui:Postavke}} › PartCraft › **3D pisač**: širinu, dubinu i visinu u milimetrima. Ostavite ih praznima da preskočite tu provjeru.
2. Odaberite {{ui:Izvoz}}, zatim {{ui:Provjera za 3D ispis (STL ili 3MF)…}}.

   Dijaloški okvir kaže „Spremno za ispis“ ili „Nije spremno za ispis“, navodi sve što nije u redu, i daje veličinu na radnoj ploči (X × Y × Z, u milimetrima), volumen i broj trokuta.

3. Kliknite {{ui:Preuzmi 3MF}} ili {{ui:Preuzmi STL}}. Datoteka je ista kao {{ui:Izvoz}} › {{ui:3MF, za 3D ispis}} ili {{ui:STL, za 3D ispis}}.

U sklopu se provjera i datoteke odnose na cijeli sklop, svaku kopiju tamo gdje je postavljena.

Dio se provjerava onako kako stoji dok ga izvoz piše: ono što u PartCraftu pokazuje prema gore (okomito na Gornju ravninu) pokazuje prema gore na radnoj ploči. Dio skiciran na Gornjoj ravnini leži ravno.

## Što dijaloški okvir može reći

**Nije spremno za ispis** (slicer ga može odbiti ili ispisati pogrešno): rupe (bridovi s plohom samo s jedne strane), bridovi zajednički za tri ili više ploha, plohe okrenute u suprotnim smjerovima, tijelo naopako ili tijelo koje prolazi kroz samo sebe. Dio izrađen u PartCraftu nikad ne bi smio prikazati ovo; ako ipak prikaže, pogledajte [Rješavanje problema](topic:troubleshooting).

**Upozorenja** (ispisuje se, ali prvo pogledajte):

- **Veće od radne ploče vašeg pisača**, čak i ako se okrene za 90° na njoj.
- **Ništa ne leži ravno na dnu**: okrenite dio u slicer-u tako da ploha naliježe na podlogu, inače će trebati potpore ili raft.
- **Naginje se više od 45° od uspravnog**: te plohe trebaju potporu u trenutnom položaju. Drugi položaj možda treba manje.
- **Odvojena tijela se preklapaju** ili **dodiruju plohu na plohu**: slicer ih obično spaja. {{ui:Kombiniraj}} u Značajke › {{ui:Više}} spaja ih u jedno tijelo. Pogledajte [Tijela](topic:bodies).
- **Manje od 1 mm** u bilo kojem smjeru: provjerite veličine dijela.

## Navoji koji se ispisuju

Modelirani navoj ispisuje se kao pravi navoj. Dajte mu malo **Zračnosti** da se ispisani vijak uveže u ispisanu maticu: pogledajte [Navoji](topic:threads).

## Zaglađene okrugle plohe

STL i 3MF se sastoje od trokuta. Za glađe okrugle plohe kliknite prazan prostor da ništa nije odabrano i postavite **Krivulje** na **Fino (128 po okretu)** ili **Vrlo fino (256 po okretu)** u desnoj ploči prije izvoza. Više trokuta znači veće datoteke.

## Veće, manje ili u dijelovima

- **Izvoz › Skaliraj za ispis (STL ili 3MF)…** sprema dio skaliran po osima bez promjene: **dopuštenje za skupljanje** u postocima (veličina × (1 + s), ili točna veličina ÷ (1 − s)) za model za odljevak, ili jednostavni faktori, oko sredine, najniže točke, sredine dna ili ishodišta.
- **Izvoz › Razdijeli za ispis (zip s dijelovima)…** reže dio prevelik za vaš pisač na dijelove koji svaki staju u radnu ploču koju zadate, spojene klinovima, perima, lastinim repovima, rupama za moždanike ili džepovima za magnete (uz zračnost koju postavite). Svaki dio i spoj je numeriran, a dijelovi se spremaju kao STL ili 3MF u zip s listom sklopa. Sam dio se ne mijenja.

## Nije provjereno

Debljina stijenke, detalji manji od vaše sapnice koje ona može nacrtati i kako će slicer postaviti potpore. Vaš slicer to prikazuje.
