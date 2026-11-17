---
title: Zaslon PartCraft-a
summary: Obilazak svake trake i ploče: alatna traka i kako se mijenja, povijest, činjenice o dijelu, 3D prikaz, ploča svojstava i statusna traka.
keywords: zaslon, raspored, alatna traka, povijest, stablo značajki, svojstva, ploča, statusna traka, sučelje, ui, obilazak, cijeli zaslon
from: 5b5bb843
---

Zaslon ima pet dijelova: alatnu traku pri vrhu, povijest lijevo, 3D prikaz u sredini, ploču svojstava desno i statusnu traku pri dnu. Iznad svega je traka aplikacije CadCraft.

## Traka aplikacije

Tanka traka pri samom vrhu pripada stranici CadCraft, a ne samom PartCraft-u. Prikazuje naziv aplikacije i gdje se pokreće, izbornik verzije, **O programu PartCraft**, gumb načina zaslona i prekidač teme Papir / Model.

- **Papir** su tamne linije na svijetlom listu. **Model** su svijetle linije na tamnoj pozadini. Boje skica slijede temu.
- {{ui:Postavke}} (zupčanik ili {{key:Mod+,}}) ima karticu {{ui:PartCraft}}: koji gumb miša okreće prikaz, kotačić miša ili touchpad i ograničenja pri skiciranju. Vidi [Postavke PartCraft-a](topic:settings).
- Gumb načina zaslona ili {{key:Ctrl+Shift+F}} prelazi kroz normalno, cijeli zaslon i cijeli zaslon sa skrivenim trakama. Kad su trake skrivene, pomaknite pokazivač na gornji rub (ili dodirnite tamo) da ih vratite. {{key:Esc}} vraća na normalno. Ova tipka je {{key:Ctrl+Shift+F}} i na Macu, a ne ⌘.

## Alatna traka

Alatna traka je grupirana. Mijenja se ovisno o tome što radite, pa stane u jedan redak:

| Grupa | Gumbi | Prikazano |
|---|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Spremi}}, {{ui:Izvoz}} (izbornik) | Uvijek |
| Skica | {{ui:Skica}} | Kad nijedna skica nije otvorena |
| Skica | {{ui:Izlaz}}, {{ui:Linija}}, {{ui:Pravokutnik}}, {{ui:Kružnica}}, {{ui:Luk}}, {{ui:Točka}}, {{ui:Os}}, {{ui:Zaobljenje}}, {{ui:Kota}}, {{ui:Konstrukcija}} | Samo dok je skica otvorena |
| Značajke | {{ui:Izvuci}}, {{ui:Izreži}}, {{ui:Rotiraj}}, {{ui:Provrt}}, {{ui:Linearno}}, {{ui:Kružno}}, {{ui:Zrcali}}, {{ui:Zaobljenje}}, {{ui:Skošenje}}, {{ui:Ljuska}}, {{ui:Više}} (izbornik: Rotirani izrez, Ravnina, Os, Točka, Provlačenje, Loft, Nagib izvlačenja) | Na dijelu, ne dok je otvorena skica ili crtež. Zaobljenje i Skošenje rade na ravnim bridovima između dviju ravnih ploha; Ljuska i Nagib izvlačenja na ravnim plohama. Provlačenje i Loft još nisu izrađeni u ovoj verziji (trebaju točnu jezgru); klik na jedno to kaže |
| Značajke | {{ui:Gotovo}} | Samo dok birate bridove ili plohe za zaobljenje, skošenje, ljusku ili nagib |
| Crtež | {{ui:Crtež}} | Na dijelu (upotrebljivo kad dio ima tijelo) |
| Crtež | {{ui:Datum}}, {{ui:Okvir}}, {{ui:Završna obrada}}, {{ui:Detalj}}, {{ui:PDF}}, {{ui:Natrag}} | Samo na listu crteža |
| Sklop | {{ui:Sklop}} | Na dijelu (upotrebljivo kad dio ima tijelo) |
| Sklop | {{ui:Dodaj kopiju}}, {{ui:Umetni}}, {{ui:Spoj}}, {{ui:Sudar}}, {{ui:Uredi dio}}, {{ui:Zatvori}} | Samo u sklopu |
| Sklop | {{ui:Natrag}} | Dok uređujete dio iz sklopa |
| Uređivanje | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Više}} (izbornik: Izreži, Kopiraj, Zalijepi, Zalijepi na isto mjesto, Dupliciraj, Izbriši, Odaberi sve, Poništi odabir) | Uvijek; svaka stavka djeluje na skici, povijesti ili sklopu u kojem ste |
| Prikaz | {{ui:Prilagodi}}, {{ui:Okomito na}}, {{ui:Pogledi}} (izbornik: Mjeri, Svojstva mase, Presjek, Nagib, Zebra, Zakrivljenost, {{ui:Osnovne ravnine}}, zatim Izometrijski, {{ui:Prednji}}, {{ui:Natrag}}, {{ui:Gornji}}, {{ui:Donji}}, {{ui:Desni}}, {{ui:Lijevi}}) | Uvijek |

Pređite mišem preko gumba da vidite što radi i njegovu tipku. Zasivljeni gumb se trenutno ne može koristiti: na primjer gumbi značajki dok je skica otvorena ili {{ui:Spoj}} prije nego sklop ima dva dijela.

Izbornik {{ui:Više}} u grupi Uređivanje navodi svaku radnju uređivanja s njezinom tipkom. Na što djeluju kopiranje i zalijepi ovisi o tome gdje se nalazite; vidi [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste). Savjet zasivljene stavke kaže zašto sada ne može djelovati.

Izbornik {{ui:Izvoz}} sadrži {{ui:STL, za 3D ispis}}, {{ui:3MF, za 3D ispis}}, {{ui:STEP AP242 (egzaktno tijelo)}}, {{ui:STEP AP214 (egzaktno tijelo)}}, {{ui:STEP (stranični, mrežna jezgra)}}, {{ui:STEP AP214 (stranični, mrežna jezgra)}}, {{ui:DXF skice ili ravne plohe}} i {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}}. Točne STEP stavke zapisuju okrugle plohe na njihovim pravim plohama; stranične ih zapisuju kao ravne facete.

## Povijest (lijevo)

Ploča lijevo je povijest značajki dijela, popis koji PartCraft gradi odozgo prema dolje.

- Naslov je naziv dijela ("Part1" dok ga ne preimenujete).
- **Prednja ravnina**, **Gornja ravnina** i **Desna ravnina** dolaze prve. Kliknite jednu da je odaberete; u prikazu se istakne.
- Ispod njih su vaše značajke redom kojim su izrađene. Skica koju značajka koristi uvučena je ispod te značajke.
- Zastavica na desnom kraju retka kaže vam njegovo stanje:

| Zastavica | Značenje |
|---|---|
| (nema) | Izgrađeno, a skica je potpuno definirana |
| − | Skica koja je nedovoljno definirana (još se može pomicati) |
| + | Skica koja je prekomjerno definirana |
| ⚠ | Izgrađeno, s upozorenjem (pređite mišem da pročitate) |
| ⚠ pogreška | Značajka nije uspjela. Pređite mišem da pročitate zašto ili kliknite |
| ⚠ nije izgrađeno | Značajka treba drugu koja nije uspjela ili je isključena |
| isključeno | Potisnuto |

- Svaka značajka prikazuje svoj glavni broj iza naziva, na primjer "25 mm" za izvlačenje ili "Ø6.6 thru" za rupu. Dvaput kliknite broj ili pritisnite {{key:F2}} na retku da ga promijenite na licu mjesta. Vidi [Promjena veličina](topic:change-sizes).
- Kliknite značajku da je uredite desno. Dvaput kliknite skicu da je otvorite.
- Kad vratite unatrag, u popisu stoji redak **Traka vraćanja · naprijed**. Značajke ispod njega su zasivljene i nisu izgrađene.
- Kad je redak u fokusu, {{key:Up}} i {{key:Down}} pomiču se između redaka, a {{key:Alt+Up}} / {{key:Alt+Down}} pomiču samu značajku, gdje to povijest dopušta.

U sklopu ista ploča umjesto toga navodi **Dijelove** (prvi je označen kao učvršćen) i **Zglobove**.

### Činjenice o dijelu

Ispod povijesti, okvir **Dio** navodi **Volumen**, **Površinu**, **Veličinu (X × Y × Z)**, **Prolazne rupe**, **Tijela**, **Trokute**, broj **Značajki** i koliko ih nije uspjelo. Volumeni i površine su od staničnog tijela izrađenog mrežnom jezgrom, malo ispod prave vrijednosti za okrugle oblike (vidi [Značajke i njihove opcije](topic:features#curves-resolution)).

U sklopu okvir ima naslov **Sklop**: Dijelovi, Instance, Zglobovi, Nespojeno i Interferencija.

## 3D prikaz (sredina)

Prikaz pokazuje tijelo, osnovne ravnine i svaku skicu koju značajka još nije iskoristila.

Osnovne ravnine se crtaju u punom obliku dok je dio prazan. Kad dobije tijelo, povlače se u pozadinu: crtaju se blijedo da ne pokrivaju dio, a klikovi prolaze kroz njih do dijela. Vraćaju se u punom obliku dok birate gdje ćete skicirati ({{ui:Skica}} bez odabira) i kad ih odaberete u povijesti. {{ui:Pogledi}} › {{ui:Osnovne ravnine}} ih sakriva potpuno; i dalje se prikazuju dok birate gdje ćete skicirati. PartCraft pamti taj izbor.

- Povucite za okretanje dijela, desnim ili srednjim povlačenjem za pomicanje prikaza, a kotačićem za zumiranje na pokazivaču. Pojedinosti u [Tipke i miš](topic:keyboard).
- Pređite mišem preko plohe, brida ili ravnine da se osvijetli. Kliknite da je odaberete. Plohe se istaknu cijele, a bridovi se crtaju i biraju cijeli. {{key:Shift}}+klik skuplja više bridova ili ploha. Ostaju označeni.
- ViewCube u gornjem desnom kutu se okreće s dijelom: kliknite plohu, brid ili kut da gledate odatle, povucite ga da okrenete, a gumb kućice vraća na početak. Vidi [ViewCube](topic:view-cube).
- Odabrano izvlačenje pokazuje narančastu strelicu na krajnjoj plohi, a rotiranje zakrivljenu strelicu na kraju okreta: povucite je da promijenite dubinu ili kut, ili upišite u polje pored nje. Vidi [Promjena veličina](topic:change-sizes#drag-it-in-the-view).
- Kad je dio prazan, okvir s naslovom **Započnite dio** navodi prve korake.
- Ispustite datoteku `.partcraft.json` ili `.partcraft-asm.json` bilo gdje na prikaz da je otvorite. Datoteka `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ili `.3dm` ispuštena tamo otvara se kao puno tijelo.

### Dok birate bridove ili plohe

Nakon {{ui:Zaobljenje}}, {{ui:Skošenje}} ili {{ui:Ljuska}} bez odabira (ili {{ui:Odaberi bridove}} na takvoj značajki), dio se prikazuje kao prije te značajke. Kliknite bridove ili plohe da ih dodate ili maknete; njihove oznake pokazuju što je uključeno. {{ui:Gotovo}} ili {{key:Esc}} završava. Vidi [Zaobljenje, skošenje i šupljina](topic:fillet-chamfer-shell).

### Na listu crteža

{{ui:Crtež}} zamjenjuje 3D prikaz listom crteža A3. Kotačić zumira, desno ili srednje povlačenje pomiče, {{key:F}} prilagođava. Vidi [Izradite crtež](topic:drawing-pdf).

### Dok je skica otvorena

Prikaz se okreće da gleda ravno u ravninu skice, a 2D sloj skice pojavljuje se na vrhu. Dio prikazuje samo značajke izgrađene prije ove skice. Traka u gornjem lijevom kutu pokazuje oznaku stanja skice ("Potpuno definirano", "Nedovoljno definirano · 3 stupnja slobode" i tako dalje) i njezin naziv, na primjer "Sketch2 on a face of Extrude1".

## Ploča svojstava (desno)

Ploča desno prikazuje što god je odabrano, a njezin naslov to imenuje:

- **Dio** (ništa nije odabrano): **Naziv** dijela i postavka **Krivulje**.
- Ravnina: gumb {{ui:Skiciraj na njoj}}.
- **Ploha**: kakva je (ravna ploha, valjak s polumjerom i osi, stožac, kugla ili torus), njezina površina, koja ju je značajka izradila, a za ravnu plohu {{ui:Skiciraj na ovoj plohi}}, {{ui:Okomito na}}, {{ui:Izvezi plohu kao DXF}}, {{ui:Izvuci iz nje}}, {{ui:Urezi u nju}} i {{ui:Provrt ovdje}} (vidi [Povucite ili gurnite cijelu plohu](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Brid**: njegova vrsta (ravan, kružnica sa središtem i polumjerom, ili krivulja), njegova duljina i dvije plohe između kojih leži (na primjer "Extrude1 end face and Extrude1 side"), s gumbima {{ui:Zaobljenje}} i {{ui:Skošenje}}.
- Više bridova ili ploha odabranih s {{key:Shift}}: koliko ih je, s {{ui:Zaobljenje}} i {{ui:Skošenje}} za bridove, i {{ui:Očisti}}.
- Značajka: njezini brojevi i opcije, dimenzije njezine skice, zatim {{ui:Potisni}}, {{ui:Vrati unatrag do ovdje}}, {{ui:Pomakni gore}}, {{ui:Pomakni dolje}}, {{ui:Izbriši}} i njezin **Naziv**.
- Otvorena skica: njezino stanje, ograničenja koja možete dodati odabiru, popis ograničenja i dimenzija, **Dodaj po koordinatama**, i {{ui:Izađi iz skice}}, {{ui:Prilagodi}} i {{ui:Izvezi kao DXF}}.
- Na listu crteža: postavke presjeka i detalja ili odabrani GD&T simbol.
- U sklopu: sklop, odabrani dio ili odabrani zglob.

Svako polje s brojem djeluje kad pritisnete {{key:Enter}} ili {{key:Tab}}, ili kliknete izvan njega. Dio se odmah ponovno gradi; nema gumba {{ui:U redu}}. Za vraćanje koristite {{key:Mod+Z}}.

## Statusna traka (dolje)

- Lijevo, koordinate pokazivača u skici (samo dok je skica otvorena).
- U sredini su poruke: što učiniti dalje i zašto je nešto odbijeno. Pročitajte je kad se čini da se ništa ne događa.
- Blizu desnog ruba, oznaka jezgre: u ovoj verziji uvijek „mrežna jezgra“. Pređite mišem da vidite što to znači. Vidi [Mrežna jezgra](topic:solid-kernels).
- Desno, oznaka: „Ponovno se gradi…“ dok se dio ponovno gradi, zatim „Izgrađeno za … ms“ kad je sve u redu, ili „1 značajka ne uspijeva“. U sklopu piše „Postavljeno za … ms“ ili broji probleme zglobova.

Vidi također [Započnite priručnik u Illustrate](topic:illustrate): radni prostor koji izrađuje priručnike sklopova od vaših dijelova i sklopova.

## Na uskom zaslonu

Do 760 piksela širine, na primjer na telefonu, prikaz zadržava zaslon: alatna traka je jedan redak koji se pomiče u stranu, a ploče se otvaraju kao listovi s trake pri dnu. {{ui:Alati}} sakriva alatnu traku, a {{ui:Pomakni}} je stavlja pri dnu. Vidi [Touchpad, dodir i mali zasloni](topic:trackpad-and-touch).
