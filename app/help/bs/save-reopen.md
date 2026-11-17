---
title: Spasi, ponovo otvori i nastavi raditi
summary: Spasite dijelove i sklopove na svoj računar, dajte im imena, ponovo ih otvorite dugmetom, tipkom ili prevlačenjem, čuvajte verzije i izbjegavajte gubitak posla u kartici preglednika.
keywords: spasi, otvori, ponovo otvori, učitaj, preuzmi, verzije, sigurnosna kopija, preimenuj, ime datoteke, izgubljen rad, napusti stranicu, partcraft.json, partcraft-asm.json, novi dio
from: c18a5abc
---

PartCraft ništa ne čuva između posjeta. Vaš dio živi u kartici preglednika dok ga ne spasite kao datoteku, a vraća se kada otvorite tu datoteku.

## Spasite dio

1. Dajte dijelu ime: kliknite prazan prostor u prikazu tako da ništa nije odabrano, zatim upišite **Naziv** u desnom panelu i pritisnite {{key:Enter}}. Naslov historije se mijenja da odgovara.
2. Pritisnite {{key:Mod+S}} ili odaberite {{ui:Spasi}}.
3. Preglednik preuzima `<naziv>.partcraft.json`. Statusna traka kaže: "Spašeno Bracket.partcraft.json (cijela historija; ponovo je otvorite ovdje da nastavite uređivanje)."

Ako je skica otvorena, spašavanje je prvo zatvara.

Datoteka sadrži svaku skicu, relaciju, kotu i značajku, plus potisnute značajke, položaj trake vraćanja, postavke lista crteža i GD&T napomene, te cijeli tekst svakog uvezenog STEP solida. Vaša lista poništavanja se ne čuva.

## Spasite sklop

U sklopu isti {{ui:Spasi}} ili {{key:Mod+S}} preuzima `<naziv sklopa>.partcraft-asm.json`. Svaki dio je pohranjen unutar njega: ne trebate zasebne datoteke dijelova da biste ga ponovo otvorili.

Dok uređujete dio iz sklopa, {{key:Mod+S}} spašava taj dio samostalno kao `.partcraft.json`. Prvo odaberite {{ui:Nazad}}, pa spasite, da biste spasili cijeli sklop.

## Ponovno otvaranje

Bilo koje od ovoga:

- odaberite {{ui:Otvori}} ili pritisnite {{key:Mod+O}}, pa odaberite datoteku;
- prevucite datoteku iz {{pick:mac=Finder|windows=File Explorer|linux=vaš upravitelj datoteka}} na 3D prikaz (pojavljuje se "Prevucite PartCraft dio da ga otvorite").

PartCraft razlikuje dijelove od sklopova po sadržaju, pa se oba otvaraju na isti način. Datoteka `.step` ili `.stp` otvara se kao uvezeni solid: vidi [Otvorite STEP datoteku i nastavite graditi](topic:import-step). Statusna traka potvrđuje: "Otvoreno Bracket.partcraft.json: 7 značajki." ili "Otvoreno Hinge.partcraft-asm.json: 3 dijela, 2 spoja."

Ako dio na ekranu ima nespašene izmjene, PartCraft prvo pita: {{ui:Otkaži}}, {{ui:Odbaci izmjene}} ili {{ui:Prvo spasi}}.

:::warning
Zatvorite sklop ({{ui:Zatvori}}) prije otvaranja datoteke dijela. Ako otvorite dio dok je sklop na ekranu, dio se učita iza sklopa i vidite ga tek nakon zatvaranja sklopa. Otvaranje datoteke sklopa također zamjenjuje nespašeni sklop bez pitanja, pa ga prvo spasite.
:::

## Počnite ispočetka

{{ui:Novo}} započinje prazan "Part1". Prvo pita ako postoje nespašene izmjene, i zatvara otvoreni sklop (pitajući ako je nespašen).

## Čuvanje verzija

Svako spašavanje je novo preuzimanje, pa verzije možete čuvati jednostavno čuvanjem datoteka:

- Stavite verziju ili datum u ime prije spašavanja: "Bracket rev B".
- Preglednik može dodati " (1)", " (2)" kada datoteka istog imena već postoji u mapi za preuzimanja. Najnovija je ona s najvećim brojem, ili provjerite datum u {{pick:mac=Finder|windows=File Explorer|linux=vaš upravitelj datoteka}}.
- Premjestite gotove datoteke iz mape za preuzimanja u mapu projekta.

Vidi [Gdje idu vaše datoteke](common:your-files) za to gdje preuzimanja idu na svakom sistemu.

## Ne gubite rad

- Spasite prije zatvaranja kartice, ponovnog učitavanja ili ako računar dugo ide u stanje mirovanja. Preglednik pita "Napusti stranicu?" ako pokušate zatvoriti s nespašenim izmjenama, ali rušenje ili zatvoren laptop ne daju upozorenje.
- Privatni ili inkognito prozori rade, ali ništa drugo nije drugačije: datoteka je i dalje jedina kopija.
- Spremanje u oblak i historija verzija još nisu dostupni.
