---
title: Prenos delova ka drugim modelatorima delova i iz njih
summary: Pošalji deo drugom modelatoru delova kao makro koji ga ponovo gradi sa živim stablom funkcija. Imenovani STEP i otvaranje liste funkcija koju je drugi modelator upisao još nisu izgrađeni u ovoj verziji.
keywords: makro, nije izgrađeno, swb, vba, stablo funkcija, povratni prenos, izvoz makroa, cadcraft-sw.json, imenovani step, ap214, globalne promenljive, jednačine, izvorni deo
from: 97ca61da
---

PartCraft razmenjuje delove sa SolidWorks-om u oba smera, bez formata datoteke koji niko drugi ne može da čita:

- **Ka van:** makro (`.swb`, običan tekst) koji SolidWorks pokreće da sam izgradi deo, funkciju po funkciju, sa njegovim skicama, relacijama, kotama, globalnim promenljivama i jednačinama. Dobijaš izvorni deo sa živim stablom funkcija, a ne mrtvo telo.
- **Nazad:** makro koji pokrećeš unutar SolidWorks-a upisuje funkcije i jednačine dela u datoteku `.cadcraft-sw.json`. Otvaranje te datoteke u PartCraft-u još nije izgrađeno u ovoj verziji (treba mu tačno jezgro).

:::warning
Ništa od ovoga još nije testirano u SolidWorks-u. SolidWorks radi samo na Windows-u i uz licencu, a PartCraft nikad nije pokrenuo ove makroe u njemu. Makroi su napisani prema dokumentaciji SolidWorks API-ja, a njihova struktura je proverena ovde. Očekuj da prijaviš probleme; dnevnik koji makro upisuje kaže koji korak nije uspeo.
:::

PartCraft ne može da upiše datoteku `.sldprt`: taj format je zatvoren. Makro je način da dobiješ izvorni deo.

## Pošalji deo kao makro

1. Otvori deo.
2. Izaberi {{ui:Izvezi}}, pa {{ui:Makro za SolidWorks (.swb)}}. PartCraft preuzima `<part>.swb`; statusna traka kaže da je napisan „bez tačnog jezgra“.
3. Dijalog kaže koliko funkcija, globalnih promenljivih i jednačina makro gradi i navodi šta izostavlja. Uz njega u ovoj verziji ne ide STEP: ako ti treba, koristi {{ui:Izvezi}}, pa {{ui:STEP (fasetirano, mrežno jezgro)}}.
4. U SolidWorks-u izaberi **Tools > Macro > Run**, izaberi `.swb` datoteku i sačekaj. Pravi novi deo iz tvog podrazumevanog šablona, postavlja milimetre i gradi svaku funkciju.
5. Na kraju poruka kaže koliko koraka je urađeno, koliko ih nije uspelo i koliko se poklopilo sa PartCraft-ovim telom. Ceo dnevnik, `<part> macro log.txt`, upisuje se pored makroa.

Šta makro gradi:

| PartCraft | U novom delu |
|---|---|
| Skica na prednjoj, gornjoj ili desnoj ravni | Skica na toj ravni, sa linijama, lukovima, krugovima, tačkama, relacijama i kotama (imenovana kao u PartCraft-u, na primer `k7`) |
| Skica na površi | Skica na istoj površi, izabranoj tačkom na njoj |
| Skica na fiksiranoj ravni | Referentna ravan kroz tri tačke i skica na njoj |
| Izvlačenje, sečenje (slepo, kroz sve, srednja ravan, dva smera, suženje) | Boss-extrude ili cut-extrude |
| Rotiranje, rotirano sečenje | Rotiranje oko iste osne linije |
| Rupa (prosta, proširena, upuštena, sa navojem) | Jedno ili dva sečenja sa sopstvenim skicama (rupa sa navojem je njen izvrtak za navoj; bez navoja) |
| Linearni i kružni niz, simetrija | Linearni niz, kružni niz, simetrija (funkcije ili telo) |
| Zaobljenje, skošenje, ljuska | Zaobljenje, skošenje i ljuska na istim ivicama i površima, izabranim tačkama |
| Parametri i jednačine | Globalne promenljive i jednačine na preimenovanim kotama |
| Potisnute funkcije, traka za vraćanje | Potisnute na isti način; traka za vraćanje na istom mestu |

Posle svake čvrste funkcije makro upoređuje zapreminu i veličinu tela sa PartCraft-ovim. Kad se razlikuju, okreće smer te funkcije jednom i proverava ponovo; ako to nije bolje, vraća ga i u dnevnik upisuje „Check“.

### Šta je izostavljeno

Dijalog i vrh makroa navode sve što nije preneto, uz razlog. Danas je to: uvezena tela (umesto njih ubaci STEP), provlačenja, lofting, nagibi, referentne ose i tačke, završni uslovi „do“, izvlačenje samo nekih kontura i sve što od njih zavisi. Splajnovi postaju krive kroz svoje tačke. Ova verzija nema tačno jezgro, pa su skice na površima i funkcije koje biraju ivice ili površi takođe izostavljene.

## Pošalji imenovani STEP

Još nije izgrađeno u ovoj verziji: {{ui:STEP za SolidWorks (imenovan, AP214)}} traži tačno jezgro, a kad se izabere, poruka kaže „STEP za SolidWorks: još nije izgrađeno. …“. Uz tačno jezgro, datoteka nosi ime dela, milimetre i boju dela, i stoji Y osom gore, kako SolidWorks prikazuje delove (obični izvoz {{ui:STEP AP214 (tačno čvrsto telo)}} stoji Z osom gore). Slova sa dijakritičkim znacima gube ih u imenu, a ostali znaci van običnog ASCII-ja postaju `_`.

## Vraćanje dela

Otvaranje datoteke u PartCraft-u (korak 3) još nije izgrađeno u ovoj verziji: poruka kaže „Otvaranje izvoza iz SolidWorks-a: još nije izgrađeno. …“. Aplikacija CadCraft za nacrte i dalje otvara datoteku i preuzima njene skice.

1. Izaberi {{ui:Datoteka}} > {{ui:Izvezi}} > {{ui:Izvezi makro za vraćanje delova (.swb)}} da preuzmeš `CadCraftExport.swb`, i stavi ga pored svojih delova.
2. U SolidWorks-u otvori deo, izaberi **Tools > Macro > Run** i izaberi `CadCraftExport.swb`. Makro upisuje `<part>.cadcraft-sw.json` pored dela i ništa u njemu ne menja.
3. U PartCraft-u izaberi {{ui:Otvori}} i izaberi tu datoteku, ili je prevuci u 3D pogled.
4. Uz tačno jezgro, PartCraft ponovo gradi deo funkciju po funkciju i prikazuje šta je uradio: na primer „5 od 5 funkcija preneto iz SolidWorks-a (Flange.SLDPRT)“, svaku funkciju koju nije mogao da prenese („Nije preneto: Sweep1 (Sweep).“) i da li se zapremina poklapa sa onom koju je upisao SolidWorks.
5. Sačuvaj ga kao PartCraft deo pomoću {{ui:Sačuvaj}}.

Skice se smeštaju na osnovnu ravan kad su na jednoj, na odgovarajuću ravnu površ dela kad postoji (pa prate kasnije izmene), a inače na fiksiranu ravan. Ivice i površi zaobljenja, skošenja i ljuski pronalaze se iz tačaka i čuvaju kao imenovane reference. Globalne promenljive postaju parametri (imena sa razmacima dobijaju donje crte: „Bolt count“ postaje `Bolt_count`), a jednačine postaju jednačine na istim kotama. Ništa se ne pogađa: što nema odgovarajući par, navodi se.

Aplikacija CadCraft za nacrte otvara istu datoteku i preuzima njene skice.

:::note
Format je `cadcraft-sw-export` verzija 1, običan JSON u milimetrima i stepenima. Datoteka iz novijeg makroa ili ona koja nije ispravna se odbija, uz razlog.
:::
