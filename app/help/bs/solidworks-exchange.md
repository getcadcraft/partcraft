---
title: Prenos dijelova u druge modelere dijelova i iz njih
summary: Pošaljite dio drugom modeleru dijelova kao makro koji ga ponovo gradi sa živim stablom elemenata. Imenovani STEP i otvaranje liste elemenata koju je drugi modeler zapisao još nisu izgrađeni u ovoj verziji.
keywords: makro, nije izgrađeno, swb, vba, stablo elemenata, povratak, izvezi makro, cadcraft-sw.json, imenovani step, ap214, globalne varijable, jednačine, izvorni dio
from: 97ca61da
---

PartCraft razmjenjuje dijelove sa SolidWorks-om u oba smjera, bez formata datoteke koji niko drugi ne može čitati:

- **Van:** makro (`.swb`, običan tekst) koji SolidWorks pokreće da sam izgradi dio, element po element, sa svojim skicama, relacijama, kotama, globalnim varijablama i jednačinama. Dobijate izvorni dio sa živim stablom elemenata, a ne mrtvo tijelo.
- **Nazad:** makro koji pokrećete unutar SolidWorks-a zapisuje elemente i jednačine dijela u datoteku `.cadcraft-sw.json`. Otvaranje te datoteke u PartCraft-u još nije izgrađeno u ovoj verziji (zahtijeva tačno jezgro).

:::warning
Ovo još nije provjereno u SolidWorks-u. SolidWorks radi samo na Windows-u uz licencu, a PartCraft nikad nije pokretao ove makroe u njemu. Makroi su napisani prema dokumentaciji SolidWorks API-ja i ovdje provjereni samo po strukturi. Očekujte da ćete prijavljivati probleme; zapisnik koji makro piše kaže koji korak nije uspio.
:::

PartCraft ne može zapisati datoteku `.sldprt`: taj format je zatvoren. Makro je način da dobijete izvorni dio.

## Pošaljite dio kao makro

1. Otvorite dio.
2. Odaberite {{ui:Izvoz}}, zatim {{ui:Makro za SolidWorks (.swb)}}. PartCraft preuzima `<part>.swb`; statusna traka kaže da je "zapisano bez tačnog jezgra".
3. Dijalog kaže koliko elemenata, globalnih varijabli i jednačina makro gradi i navodi šta izostavlja. Uz njega u ovoj verziji ne ide STEP: koristite {{ui:Izvoz}}, zatim {{ui:STEP (poligonalni, mrežni kernel)}} ako vam treba.
4. U SolidWorks-u odaberite **Tools > Macro > Run**, izaberite datoteku `.swb` i sačekajte. Pravi se novi dio iz vašeg zadanog šablona, postavlja milimetre i gradi svaki element.
5. Na kraju poruka kaže koliko je koraka urađeno, koliko ih je nije uspjelo i koliko se poklapa s tijelom PartCraft-a. Potpuni zapisnik, `<part> macro log.txt`, zapisuje se pored makroa.

Šta makro gradi:

| PartCraft | U novom dijelu |
|---|---|
| Skica na ravni Front, Top ili Right | Skica na toj ravni, sa svojim linijama, lukovima, krugovima, tačkama, relacijama i kotama (imenovana kao u PartCraft-u, na primjer `k7`) |
| Skica na površini | Skica na istoj površini, odabranoj tačkom na njoj |
| Skica na fiksnoj ravni | Referentna ravan kroz tri tačke, i skica na njoj |
| Istiskivanje, rezanje (slijepo, kroz sve, srednja ravan, dva smjera, zakošeno) | Boss-extrude ili cut-extrude |
| Rotacija, rotirani rez | Rotacija oko iste osne linije |
| Rupa (jednostavna, upuštena, upuštena pod uglom, s navojem) | Jedan ili dva reza sa svojim skicama (rupa s navojem je njen izbušeni prečnik; bez navoja) |
| Linearni i kružni uzorak, zrcaljenje | Linearni uzorak, kružni uzorak, zrcaljenje (elementi ili tijelo) |
| Zaobljenje, skošenje, ljuska | Zaobljenje, skošenje i ljuska na istim ivicama i površinama, odabranim tačkama |
| Parametri i jednačine | Globalne varijable i jednačine na preimenovanim kotama |
| Potisnuti elementi, traka povratka | Potisnuti na isti način; traka povratka na istom mjestu |

Poslije svakog čvrstog elementa makro upoređuje zapreminu i veličinu tijela s PartCraft-ovim. Kad se razlikuju, okrene smjer tog elementa jednom i provjeri ponovo; ako ni to nije bolje, vrati ga i upiše "Check" u zapisnik.

### Šta je izostavljeno

Dijalog i vrh makroa navode sve što nije preneseno, s razlogom. Danas je to: uvezena tijela (umetnite STEP umjesto toga), provlačenja, lofti, nacrti, referentne ose i tačke, završni uvjeti "do", istiskivanje samo nekih kontura, i sve što od njih zavisi. Splajnovi postaju krive kroz svoje tačke. Ova verzija nema tačno jezgro, pa su skice na površinama i elementi koji biraju ivice ili površine također izostavljeni.

## Pošaljite imenovani STEP

Još nije izgrađeno u ovoj verziji: {{ui:STEP za SolidWorks (imenovani, AP214)}} zahtijeva tačno jezgro, a odabirom se kaže "STEP for SolidWorks: not built yet. …". Uz tačno jezgro, datoteka nosi ime dijela, milimetre i boju dijela, i postavlja Y uspravno, kako SolidWorks prikazuje dijelove (obični {{ui:STEP AP214 (tačno čvrsto tijelo)}} izvoz postavlja Z uspravno). Slova sa akcentima gube ih u imenu, a ostali znakovi van običnog ASCII-ja postaju `_`.

## Vratite dio

Otvaranje datoteke u PartCraft-u (korak 3) još nije izgrađeno u ovoj verziji: kaže "Opening a SolidWorks export: not built yet. …". Aplikacija za crtanje CadCraft i dalje otvara datoteku i preuzima njene skice.

1. Odaberite {{ui:Datoteka}} > {{ui:Izvoz}} > {{ui:Izvozni makro za vraćanje dijelova (.swb)}} da preuzmete `CadCraftExport.swb`, i stavite ga pored svojih dijelova.
2. U SolidWorks-u otvorite dio, odaberite **Tools > Macro > Run** i izaberite `CadCraftExport.swb`. Zapisuje `<part>.cadcraft-sw.json` pored dijela i ništa u njemu ne mijenja.
3. U PartCraft-u odaberite {{ui:Otvori}} i izaberite tu datoteku, ili je prevucite na 3D pogled.
4. Uz tačno jezgro, PartCraft ponovo gradi dio element po element i pokazuje šta je uradio: na primjer "5 of 5 features carried over from SolidWorks (Flange.SLDPRT)", svaki element koji nije mogao da prenese ("Not carried over: Sweep1 (Sweep)."), i da li se zapremina poklapa s onom koju je SolidWorks zapisao.
5. Spasite ga kao PartCraft dio s {{ui:Spasi}}.

Skice padaju na osnovnu ravan kad leže na njoj, na odgovarajuću ravnu površinu dijela kad ona postoji (pa prate kasnije izmjene), a inače na fiksnu ravan. Ivice i površine zaobljenja, skošenja i ljuski pronalaze se iz tačaka i čuvaju kao imenovane reference. Globalne varijable postaju parametri (imena s razmacima dobijaju donje crte: "Bolt count" postaje `Bolt_count`), a jednačine postaju jednačine na istim kotama. Ništa se ne pogađa: šta nema parnjaka, navodi se.

Aplikacija za crtanje CadCraft otvara istu datoteku i preuzima njene skice.

:::note
Format je `cadcraft-sw-export` verzija 1, običan JSON u milimetrima i stepenima. Datoteka iz novijeg makroa, ili ona koja nije valjana, odbija se uz razlog.
:::
