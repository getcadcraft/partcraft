---
title: Čuvanje, ponovno otvaranje i nastavak rada
summary: Čuvajte delove i sklopove na računar, imenujte ih, ponovo ih otvarajte dugmetom, prečicom ili prevlačenjem, čuvajte verzije i izbegnite gubitak rada u kartici pregledača.
keywords: sačuvaj, otvori, ponovo otvori, učitaj, preuzmi, verzije, rezerva, preimenuj, ime datoteke, izgubljen rad, napusti sajt, partcraft.json, partcraft-asm.json, novi deo
from: c18a5abc
---

PartCraft ne čuva ništa između poseta. Vaš deo živi u kartici pregledača dok ga ne sačuvate kao datoteku, i vraća se kada otvorite tu datoteku.

## Čuvanje dela

1. Imenujte deo: kliknite prazan prostor u prikazu da ništa ne bude izabrano, zatim u desnom panelu ukucajte **Ime** i pritisnite {{key:Enter}}. Naslov istorije se menja da odgovara.
2. Pritisnite {{key:Mod+S}} ili izaberite {{ui:Sačuvaj}}.
3. Pregledač preuzima `<ime>.partcraft.json`. Traka stanja kaže: „Sačuvano: Bracket.partcraft.json (cela istorija; otvorite ga ovde ponovo da nastavite izmene).“

Ako je skica otvorena, čuvanje je prvo zatvara.

Datoteka sadrži svaku skicu, relaciju, kotu i element, plus potisnute elemente, položaj vraćanja unazad, podešavanja lista crteža i GD&T napomene, i ceo tekst svakog uvezenog STEP tela. Lista opozivanja se ne čuva.

## Čuvanje sklopa

U sklopu, isto {{ui:Sačuvaj}} ili {{key:Mod+S}} preuzima `<ime sklopa>.partcraft-asm.json`. Svaki deo je upisan unutar njega: ne treba vam zasebna datoteka dela da biste ga ponovo otvorili.

Dok menjate deo iz unutrašnjosti sklopa, {{key:Mod+S}} čuva taj deo samostalno kao `.partcraft.json`. Izaberite prvo {{ui:Nazad}}, pa čuvajte, da sačuvate ceo sklop.

## Ponovno otvaranje

Bilo koje od ovoga:

- izaberite {{ui:Otvori}} ili pritisnite {{key:Mod+O}}, pa izaberite datoteku;
- prevucite datoteku iz {{pick:mac=Finder|windows=Istraživač datoteka|linux=vaš upravljač datotekama}} na 3D prikaz (pojavljuje se „Ispustite PartCraft deo da ga otvorite“).

PartCraft razlikuje delove od sklopova po sadržaju, pa se oba otvaraju na isti način. Datoteka `.step` ili `.stp` otvara se kao uvezeno telo: pogledajte [Otvorite STEP datoteku i nastavite na njoj](topic:import-step). Traka stanja potvrđuje: „Otvoreno: Bracket.partcraft.json: 7 elemenata.“ ili „Otvoreno: Hinge.partcraft-asm.json: 3 dela, 2 spoja.“

Ako deo na ekranu ima nesačuvane izmene, PartCraft prvo pita: {{ui:Otkaži}}, {{ui:Odbaci izmene}} ili {{ui:Prvo sačuvaj}}.

:::warning
Zatvorite sklop ({{ui:Zatvori}}) pre nego što otvorite datoteku dela. Ako otvorite deo dok je sklop na ekranu, deo se učitava iza sklopa i vidite ga tek kada zatvorite sklop. Otvaranje datoteke sklopa takođe zamenjuje nesačuvani sklop bez pitanja, pa ga prvo sačuvajte.
:::

## Počnite ispočetka

{{ui:Nova}} pravi prazan „Part1“. Prvo pita ako postoje nesačuvane izmene, i zatvara otvoreni sklop (pita ako je nesačuvan).

## Čuvanje verzija

Svako čuvanje je novo preuzimanje, pa verzije možete zadržati jednostavno čuvanjem datoteka:

- Stavite verziju ili datum u ime pre čuvanja: „Bracket rev B“.
- Pregledač može dodati „ (1)“, „ (2)“ kada datoteka istog imena već postoji u fascikli za preuzimanja. Najnovija je ona sa najvećim brojem, ili proverite datum u {{pick:mac=Finder|windows=Istraživač datoteka|linux=vaš upravljač datotekama}}.
- Premestite gotove datoteke iz fascikle za preuzimanja u fasciklu projekta.

Pogledajte [Gde idu vaše datoteke](common:your-files) za to gde idu preuzimanja na svakom sistemu.

## Ne gubite rad

- Sačuvajte pre zatvaranja kartice, ponovnog učitavanja ili dužeg ostavljanja računara da spava. Pregledač pita „Napusti sajt?“ ako pokušate da zatvorite sa nesačuvanim izmenama, ali rušenje ili zatvoren laptop ne daju nikakvo upozorenje.
- Privatni ili anonimni prozori rade, ali ništa drugo nije drugačije: datoteka je i dalje jedina kopija.
- Čuvanje u oblaku i istorija verzija još nisu dostupni.
