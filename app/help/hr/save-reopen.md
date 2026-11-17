---
title: Spremanje, ponovno otvaranje i nastavak rada
summary: Spremite dijelove i sklopove na računalo, imenujte ih, ponovno ih otvorite gumbom, tipkom ili povlačenjem, čuvajte verzije i izbjegnite gubitak rada u kartici preglednika.
keywords: spremi, otvori, ponovno otvori, učitaj, preuzmi, verzije, sigurnosna kopija, preimenuj, naziv datoteke, izgubljen rad, napusti stranicu, partcraft.json, partcraft-asm.json, novi dio
from: c18a5abc
---

PartCraft ne pohranjuje ništa između posjeta. Vaš dio postoji u kartici preglednika dok ga ne spremite kao datoteku, a vraća se kada otvorite tu datoteku.

## Spremanje dijela

1. Imenujte dio: kliknite prazno mjesto u prikazu da ništa nije odabrano, zatim upišite **Naziv** u desnoj ploči i pritisnite {{key:Enter}}. Naslov povijesti se mijenja u skladu s tim.
2. Pritisnite {{key:Mod+S}} ili odaberite {{ui:Spremi}}.
3. Preglednik preuzima `<naziv>.partcraft.json`. Statusna traka kaže: „Spremljeno: Bracket.partcraft.json (cijela povijest; ponovno ga otvorite ovdje za nastavak uređivanja).”

Ako je skica otvorena, spremanje je prvo zatvara.

Datoteka sadrži svaku skicu, ograničenje, kotu i značajku, uz potisnute značajke, položaj trake vraćanja, postavke lista crteža i GD&T napomene te cijeli tekst svakog uvezenog STEP punog tijela. Vaš popis poništavanja se ne sprema.

## Spremanje sklopa

U sklopu isti {{ui:Spremi}} ili {{key:Mod+S}} preuzima `<naziv sklopa>.partcraft-asm.json`. Svaki dio je pohranjen unutar njega: za ponovno otvaranje ne trebaju vam zasebne datoteke dijelova.

Dok uređujete dio unutar sklopa, {{key:Mod+S}} sprema taj dio zasebno kao `.partcraft.json`. Za spremanje cijelog sklopa prvo odaberite {{ui:Natrag}}, zatim spremite.

## Ponovno otvaranje

Bilo koji od ovih načina:

- odaberite {{ui:Otvori}} ili pritisnite {{key:Mod+O}}, zatim odaberite datoteku;
- povucite datoteku iz {{pick:mac=Finder|windows=File Explorer|linux=vašeg upravitelja datoteka}} na 3D prikaz („Ispustite PartCraft dio da ga otvorite” se pojavi).

PartCraft razlikuje dijelove od sklopova prema sadržaju, pa se oba otvaraju na isti način. Datoteka `.step` ili `.stp` otvara se kao uvezeno tijelo: pogledajte [Otvorite STEP datoteku i nastavite na njoj](topic:import-step). Statusna traka potvrđuje: „Otvoreno: Bracket.partcraft.json: 7 značajki.” ili „Otvoreno: Hinge.partcraft-asm.json: 3 dijela, 2 spoja.”

Ako dio na zaslonu ima nespremljene promjene, PartCraft prvo pita: {{ui:Odustani}}, {{ui:Odbaci promjene}} ili {{ui:Prvo spremi}}.

:::warning
Zatvorite sklop ({{ui:Zatvori}}) prije otvaranja datoteke dijela. Ako otvorite dio dok je sklop na zaslonu, dio se učitava iza sklopa i vidite ga tek nakon zatvaranja sklopa. Otvaranje datoteke sklopa također zamjenjuje nespremljeni sklop bez pitanja, pa ga prvo spremite.
:::

## Početak ispočetka

{{ui:Novo}} pokreće prazan „Part1”. Prvo pita ima li nespremljenih promjena i zatvara otvoreni sklop (pita ako nije spremljen).

## Čuvanje verzija

Svako spremanje je novo preuzimanje, pa verzije možete čuvati jednostavno tako da čuvate datoteke:

- Prije spremanja stavite verziju ili datum u naziv: „Nosač rev B”.
- Preglednik može dodati „ (1)”, „ (2)” kada datoteka istog naziva već postoji u mapi preuzimanja. Najnovija je ona s najvećim brojem, ili provjerite datum u {{pick:mac=Finder|windows=File Explorer|linux=upravitelju datoteka}}.
- Premjestite gotove datoteke iz mape preuzimanja u mapu vašeg projekta.

Pogledajte [Gdje idu vaše datoteke](common:your-files) za to gdje preuzimanja završavaju na svakom sustavu.

## Ne gubite rad

- Spremite prije zatvaranja kartice, ponovnog učitavanja ili dugog ostavljanja računala u stanju mirovanja. Preglednik pita „Napustiti stranicu?” ako pokušate zatvoriti s nespremljenim promjenama, ali pad programa ili zatvoreni prijenosnik ne daju upozorenje.
- Privatni ili anonimni prozori rade, ali ništa drugo se ne mijenja: datoteka je i dalje jedina kopija.
- Spremanje u oblak i povijest verzija još nisu dostupni.
