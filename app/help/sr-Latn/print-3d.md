---
title: Priprema dela za 3D štampu
summary: Proveri da li je deo ili sklop zatvoren, da li staje na tvoj štampač i stoji na osnovi, pa ga preuzmi kao STL ili 3MF za svoj slajser.
keywords: 3d štampa, 3d štampač, štampa, slajser, stl, 3mf, zatvoreno telo, nepropusno, mnogostruko, radna ploča, veličina ploče, previs, potpore, osnova, milimetri, izvoz, navoji, zazor
from: 90d81dff
---

Slajseru treba zatvoren oblik: bez rupa, svaka strana okrenuta ka spolja, ništa ne prolazi kroz samog sebe. Delovi koje PartCraft pravi su zatvoreni po konstrukciji, pa provera uglavnom pokazuje veličinu, da li deo staje na radnu ploču tvog štampača, da li stoji na ravnoj strani i koliko je previsa.

## Provera i preuzimanje

1. Opciono, jednom: podesi radnu ploču štampača u {{ui:Podešavanja}} › PartCraft › **3D štampač**: širinu, dubinu i visinu u milimetrima. Ostavi prazno da preskočiš tu proveru.
2. Izaberi {{ui:Izvezi}}, pa {{ui:Proveri za 3D štampu (STL ili 3MF)…}}.

   Dijalog kaže „Spremno za štampu“ ili „Nije spremno za štampu“, navodi sve što nije u redu i daje veličinu na ploči (X × Y × Z, u milimetrima), zapreminu i broj trouglova.

3. Klikni {{ui:Preuzmi 3MF}} ili {{ui:Preuzmi STL}}. Datoteka je ista kao {{ui:Izvezi}} › {{ui:3MF, za 3D štampu}} ili {{ui:STL, za 3D štampu}}.

U sklopu provera i datoteke obuhvataju ceo sklop, svaku kopiju tamo gde je postavljena.

Deo se proverava stojeći kako ga izvoz piše: ono što u PartCraft-u gleda naviše (upravno na gornju ravan) gleda naviše na ploči. Deo skiciran na gornjoj ravni leži ravno.

## Šta dijalog može da kaže

**Nije spremno za štampu** (slajser ga može odbiti ili otisnuti pogrešno): rupe (ivice sa stranom samo na jednoj strani), ivice koje dele tri ili više strana, strane okrenute u suprotnim smerovima, telo naopako ili telo koje prolazi kroz samo sebe. Deo napravljen u PartCraft-u ovo nikad ne bi trebalo da pokaže; ako pokaže, vidi [Rešavanje problema](topic:troubleshooting).

**Upozorenja** (štampa se, ali prvo pogledaj):

- **Veće od radne ploče štampača**, čak i okrenuto za 90° na njoj.
- **Ništa ne leži ravno na dnu**: okreni deo u slajseru tako da strana nalegne na ploču, inače će trebati potpore ili podloga.
- **Nagnuto više od 45° od uspravnog**: te strane trebaju potporu u obliku u kom stoje. Drugi položaj možda treba manje.
- **Zasebna tela se preklapaju** ili **dodiruju strana uz stranu**: slajseri ih obično spajaju. {{ui:Spajanje}} u grupi Elementi › {{ui:Više}} ih spaja u jedno telo. Vidi [Tela](topic:bodies).
- **Manje od 1 mm u nekom pravcu**: proveri veličine dela.

## Navoji koji se štampaju

Modelovan navoj štampa se kao pravi navoj. Daj mu malo **Zazora** da se odštampan zavrtanj uvuče u odštampanu maticu: vidi [Navoji](topic:threads).

## Zaobljene površine

STL i 3MF su napravljeni od trouglova. Za glatkije zaobljene površine klikni prazan prostor da ništa nije izabrano, pa u desnom panelu podesi **Krive** na **Fino (128 po obrtu)** ili **Veoma fino (256 po obrtu)** pre izvoza. Više trouglova znači veće datoteke.

## Veće, manje ili u delovima

- **Izvezi › Razmera za štampu (STL ili 3MF)…** čuva deo skaliran po osama bez menjanja: **dodatak za skupljanje** u procentima (veličina × (1 + s), ili tačna veličina ÷ (1 − s)) za model za livenje, ili obični faktori, oko sredine, najnižeg ugla, sredine dna ili koordinatnog početka.
- **Izvezi › Podeli za štampu (ZIP sa delovima)…** seče deo prevelik za tvoj štampač na delove koji staju na zadatu ploču, spojene klinovima, ključevima, lastinim repovima, rupama za moždanike ili džepovima za magnete (sa zazorom koji podesiš). Svaki deo i spoj su numerisani, a delovi se čuvaju kao STL ili 3MF u ZIP-u sa listom sklopa. Sam deo se ne menja.

## Nije provereno

Debljina zida, detalji manji od tvoje mlaznice i kako će slajser postaviti potpore. Slajser to prikazuje.
