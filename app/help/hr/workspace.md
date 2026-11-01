---
title: Zaslon PartCrafta
summary: Obilazak svake trake i ploče: alatna traka i kako se mijenja, povijest, podaci o dijelu, 3D prikaz, ploča svojstava i statusna traka.
keywords: zaslon, raspored, alatna traka, povijest, stablo značajki, svojstva, ploča, statusna traka, sučelje, ui, obilazak, cijeli zaslon
from: 7394fc49
---

Zaslon ima pet dijelova: alatna traka preko vrha, povijest lijevo, 3D prikaz u sredini, ploča svojstava desno i statusna traka uz dno. Iznad svega nalazi se traka aplikacije CadCraft.

## Traka aplikacije

Tanka traka na samom vrhu pripada web-mjestu CadCraft, a ne samom PartCraftu. Prikazuje ime aplikacije i gdje radi, izbornik verzije, **O aplikaciji PartCraft**, gumb načina zaslona i prekidač teme Papir / Model.

- **Papir** su tamne linije na svijetlom listu. **Model** su svijetle linije na tamnoj pozadini. Boje skice prate temu.
- {{ui:Postavke}} (zupčanik ili {{key:Mod+,}}) imaju karticu {{ui:PartCraft}}: koja tipka miša okreće prikaz, kotačić miša ili touchpad te odnosi tijekom skiciranja. Pogledajte [Postavke PartCrafta](topic:settings).
- Gumb načina zaslona ili {{key:Ctrl+Shift+F}} prolazi kroz uobičajeni način, cijeli zaslon i cijeli zaslon sa skrivenim trakama. Sa skrivenim trakama pomaknite pokazivač na gornji rub (ili ondje dodirnite) da se vrate. {{key:Esc}} vraća na uobičajeno. Ta tipka je {{key:Ctrl+Shift+F}} i na Macu, a ne ⌘.

## Alatna traka

Alatna traka je grupirana. Mijenja se prema onome što radite, pa stane u jedan red:

| Grupa | Gumbi | Prikazano |
|---|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Spremi}}, {{ui:Izvezi}} (izbornik) | Uvijek |
| Skica | {{ui:Skica}} | Kad nije otvorena skica |
| Skica | {{ui:Izlaz}}, {{ui:Linija}}, {{ui:Pravokutnik}}, {{ui:Kružnica}}, {{ui:Luk}}, {{ui:Točka}}, {{ui:Os}}, {{ui:Zaobli}}, {{ui:Kota}}, {{ui:Konstrukcija}} | Samo dok je skica otvorena |
| Značajke | {{ui:Izvuci}}, {{ui:Izreži}}, {{ui:Rotiraj}}, {{ui:Provrt}}, {{ui:Linearno}}, {{ui:Kružno}}, {{ui:Zrcali}}, {{ui:Zaobljenje}}, {{ui:Skosi}}, {{ui:Ljuska}}, {{ui:Više}} (izbornik: rotirani izrez, ravnina, os, točka, provlačenje, loft, nagib) | Na dijelu, ne dok je otvorena skica ili crtež. Zaobljenje i skošenje rade na ravnim bridovima između dviju ravnih ploha; ljuska i nagib na ravnim plohama. Provlačenje i loft u ovoj verziji još nisu izrađeni (trebaju egzaktnu jezgru); klik na jedan to kaže |
| Značajke | {{ui:Gotovo}} | Samo dok birate bridove ili plohe za zaobljenje, skošenje, ljusku ili nagib |
| Crtež | {{ui:Crtež}} | Na dijelu (upotrebljivo kad dio ima puno tijelo) |
| Crtež | {{ui:Datum}}, {{ui:Okvir}}, {{ui:Obrada}}, {{ui:Detalj}}, {{ui:PDF}}, {{ui:Natrag}} | Samo na listu crteža |
| Sklop | {{ui:Sklop}} | Na dijelu (upotrebljivo kad dio ima puno tijelo) |
| Sklop | {{ui:Dodaj kopiju}}, {{ui:Umetni}}, {{ui:Spoj}}, {{ui:Sudar}}, {{ui:Uredi dio}}, {{ui:Zatvori}} | Samo u sklopu |
| Sklop | {{ui:Natrag}} | Dok uređujete dio iz sklopa |
| Uređivanje | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Više}} (izbornik: izreži, kopiraj, zalijepi, zalijepi na isto mjesto, dupliciraj, izbriši, odaberi sve, poništi odabir) | Uvijek; svaka stavka djeluje na skicu, povijest ili sklop u kojem ste |
| Pogled | {{ui:Prilagodi}}, {{ui:Okomito na}}, {{ui:Pogledi}} (izbornik: mjerenje, svojstva mase, presjek, nagib, zebra, zakrivljenost, {{ui:Osnovne ravnine}}, zatim izometrija, prednji, stražnji, gornji, donji, desni, lijevi) | Uvijek |

Zadržite pokazivač iznad gumba da vidite što radi i njegovu tipku. Zasivljen gumb trenutačno se ne može koristiti: na primjer gumbi značajki dok je skica otvorena ili {{ui:Spoj}} prije nego što sklop ima dva dijela.

Izbornik {{ui:Više}} u grupi Uređivanje navodi svaku radnju uređivanja s njezinom tipkom. Na što kopiranje i lijepljenje djeluju ovisi o tome gdje ste; pogledajte [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste). Opis zasivljene stavke kaže zašto sada ne može djelovati.

Izbornik {{ui:Izvezi}} sadrži {{ui:STL, za 3D ispis}}, {{ui:3MF, za 3D ispis}}, {{ui:STEP AP242 (egzaktno tijelo)}}, {{ui:STEP AP214 (egzaktno tijelo)}}, {{ui:STEP (stranični, mrežna jezgra)}}, {{ui:STEP AP214 (stranični, mrežna jezgra)}}, {{ui:DXF skice ili ravne plohe}} i {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}}. Dvije stavke egzaktnog STEP-a su zasivljene: u ovoj verziji još nisu izrađene, pa koristite {{ui:STEP (stranični, mrežna jezgra)}}.

## Povijest (lijevo)

Ploča lijevo je povijest značajki dijela, popis iz kojeg PartCraft ponovno gradi dio od vrha do dna.

- Naslov je naziv dijela („Dio1“ dok ga ne preimenujete).
- **Prednja ravnina**, **Gornja ravnina** i **Desna ravnina** dolaze prve. Kliknite jednu da je odaberete; istakne se u prikazu.
- Ispod njih su vaše značajke redoslijedom kojim su napravljene. Skica koju značajka koristi uvučena je ispod te značajke.
- Oznaka na desnom kraju retka kaže njegovo stanje:

| Oznaka | Značenje |
|---|---|
| (nema) | Izgrađeno, a skica je potpuno definirana |
| − | Skica koja je nedovoljno definirana (još se može pomicati) |
| + | Skica koja je previše definirana |
| ⚠ | Izgrađeno, s upozorenjem (zadržite pokazivač da ga pročitate) |
| ⚠ pogreška | Značajka nije uspjela. Zadržite pokazivač da pročitate zašto ili je kliknite |
| ⚠ nije izgrađeno | Značajka treba drugu koja nije uspjela ili je isključena |
| isključeno | Potisnuto |

- Svaka značajka prikazuje svoj glavni broj iza imena, poput „25 mm“ za izvlačenje ili „Ø6.6 thru“ za provrt. Dvaput kliknite broj ili pritisnite {{key:F2}} na retku da ga promijenite ondje. Pogledajte [Mijenjanje veličina](topic:change-sizes).
- Kliknite značajku da je uredite desno. Dvaput kliknite skicu da je otvorite.
- Kad vraćate unatrag, u popisu se nalazi redak **Traka povrata · pomakni naprijed**. Značajke ispod njega su zasivljene i nisu izgrađene.
- Kad je redak fokusiran, {{key:Up}} i {{key:Down}} kreću se među recima, a {{key:Alt+Up}} / {{key:Alt+Down}} pomiču samu značajku, ako povijest to dopušta.

U sklopu isti panel umjesto toga navodi **Dijelove** (prvi je označen kao „učvršćen“) i **Spojeve**.

### Podaci o dijelu

Ispod povijesti okvir **Dio** navodi **Volumen**, **Površinu plohe**, **Veličinu (X × Y × Z)**, **Prolazne provrte**, **Tijela**, **Trokute** tijela, broj **Značajki** i koliko ih je **Neuspjelih**. Obujmi i površine odnose se na stranično tijelo koje gradi mrežna jezgra, malo ispod prave vrijednosti za okrugle oblike (pogledajte [Značajke i njihove mogućnosti](topic:features#curves-resolution)).

U sklopu je okvir naslovljen **Sklop**: Dijelovi, Instance, Spojevi, Nespojeno i Preklapanje.

## 3D prikaz (sredina)

Prikaz pokazuje tijelo, osnovne ravnine i svaku skicu koju još nije upotrijebila nijedna značajka.

Osnovne ravnine crtaju se u cijelosti dok je dio prazan. Kad dio ima tijelo, povlače se: crtaju se blijedo da ne prekrivaju dio, a klikovi prolaze kroz njih do dijela. Vraćaju se u cijelosti dok birate gdje ćete skicirati ({{ui:Skica}} bez ičeg odabranog) i kad jednu odaberete u povijesti. {{ui:Pogledi}} › {{ui:Osnovne ravnine}} skriva ih posve; i dalje se prikazuju dok birate gdje ćete skicirati. PartCraft pamti taj izbor.

- Povucite da okrenete dio, povucite desnom ili srednjom tipkom za pomicanje, okrenite kotačić za zumiranje na pokazivaču. Pojedinosti u temi [Tipke i miš](topic:keyboard).
- Zadržite pokazivač iznad plohe, brida ili ravnine da vidite kako svijetli. Kliknite da je odaberete. Plohe se ističu cijele, a bridovi se crtaju i biraju cijeli. {{key:Shift}}+klik skuplja nekoliko bridova ili ploha. Ostaju označeni.
- Kocka prikaza gore desno okreće se s dijelom: kliknite plohu, brid ili kut da gledate odande, povucite je za okretanje, gumb kućice vraća na početak. Pogledajte [Kocka prikaza](topic:view-cube).
- Odabrano izvlačenje prikazuje narančastu strelicu na svojoj završnoj plohi, rotacija zakrivljenu strelicu na kraju svog okreta: povucite je da promijenite dubinu ili kut ili upišite u okvir pored nje. Pogledajte [Mijenjanje veličina](topic:change-sizes#drag-it-in-the-view).
- Kad je dio prazan, okvir naslovljen **Započnite dio** navodi prve korake.
- Ispustite datoteku `.partcraft.json` ili `.partcraft-asm.json` bilo gdje na prikaz da je otvorite. Datoteka `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ili `.3dm` ispuštena ondje otvara se kao puno tijelo.

### Dok birate bridove ili plohe

Nakon {{ui:Zaobljenje}}, {{ui:Skosi}} ili {{ui:Ljuska}} bez ičeg odabranog (ili {{ui:Odaberi bridove}} na takvoj značajki), dio se prikazuje kakav je bio prije te značajke. Kliknite bridove ili plohe da ih dodate ili uklonite; njihove oznake pokazuju što je uključeno. {{ui:Gotovo}} ili {{key:Esc}} završava. Pogledajte [Zaobljenje, skošenje i izdubljivanje](topic:fillet-chamfer-shell).

### Na listu crteža

{{ui:Crtež}} zamjenjuje 3D prikaz listom crteža A3. Kotačić zumira, povlačenje desnom ili srednjom tipkom pomiče, {{key:F}} prilagođava. Pogledajte [Izradite crtež](topic:drawing-pdf).

### Dok je skica otvorena

Prikaz se okreće da gleda ravno u ravninu skice, a 2D sloj skice pojavljuje se povrh. Dio prikazuje samo značajke izrađene prije ove skice. Traka gore lijevo prikazuje oznaku stanja skice („Potpuno definirano“, „Nedovoljno definirano · 3 stupnja slobode“ i tako dalje) i njezin naziv, poput „Skica2 na plohi Izvlačenja1“.

## Ploča svojstava (desno)

Ploča desno prikazuje ono što je odabrano, a njezin naslov to imenuje:

- **Dio** (ništa nije odabrano): **Naziv** dijela i postavka **Krivulje**.
- Ravnina: gumb {{ui:Skiciraj na njoj}}.
- **Ploha**: koje je vrste (ravna ploha, valjak s radijusom i osi, stožac, kugla ili torus), njezina površina, koja ju je značajka izradila te za ravnu plohu {{ui:Skiciraj na ovoj plohi}}, {{ui:Okomito na}}, {{ui:Izvezi plohu kao DXF}}, {{ui:Izvuci iz nje}}, {{ui:Urezi u nju}} i {{ui:Provrt ovdje}} (pogledajte [Povucite ili potisnite cijelu plohu](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Brid**: njegova vrsta (ravan, kružnica sa središtem i radijusom ili krivulja), duljina i dvije plohe među kojima leži (poput „završna ploha Izvlačenja1 i bočna ploha Izvlačenja1“), s gumbima {{ui:Zaobljenje}} i {{ui:Skosi}}.
- Nekoliko bridova ili ploha odabranih sa {{key:Shift}}: koliko ih je, sa {{ui:Zaobljenje}} i {{ui:Skosi}} za bridove te {{ui:Očisti}}.
- Značajka: njezini brojevi i mogućnosti, kote njezine skice, zatim {{ui:Potisni}}, {{ui:Vrati unatrag do ovdje}}, {{ui:Pomakni gore}}, {{ui:Pomakni dolje}}, {{ui:Izbriši}} i njezin **Naziv**.
- Otvorena skica: njezino stanje, odnosi koje možete dodati odabiru, popis odnosa i kota, **Dodaj prema koordinatama** te {{ui:Izađi iz skice}}, {{ui:Prilagodi}} i {{ui:Izvezi kao DXF}}.
- Na listu crteža: postavke presjeka i detalja ili odabrani GD&T simbol.
- U sklopu: sklop, odabrani dio ili odabrani spoj.

Svaki okvir za broj djeluje kad pritisnete {{key:Enter}} ili {{key:Tab}} ili kliknete drugdje. Dio se odmah ponovno gradi; nema gumba U redu. Koristite {{key:Mod+Z}} za povratak.

## Statusna traka (dolje)

- Lijevo, koordinate pokazivača u skici (samo dok je skica otvorena).
- U sredini, poruke: što učiniti dalje i zašto je nešto odbijeno. Pročitajte je kad se čini da se ništa ne događa.
- Blizu desnog kraja, oznaka jezgre: u ovoj verziji uvijek „Mrežna jezgra“. Zadržite pokazivač za objašnjenje. Pogledajte [Mrežna jezgra](topic:solid-kernels).
- Desno, oznaka: „Ponovna izgradnja…“ dok se dio ponovno gradi, zatim „Ponovno izgrađeno za … ms“ kad je sve u redu ili „1 značajka neuspješna“. U sklopu piše „Postavljeno za … ms“ ili broji probleme spojeva.

Pogledajte i [Započnite priručnik u Ilustraciji](topic:illustrate): radni prostor koji izrađuje priručnike za sklapanje iz vaših dijelova i sklopova.

## Na uskom zaslonu

Do 760 piksela širine, na primjer na telefonu, prikaz zadržava zaslon: alatna traka je jedan red koji se pomiče vodoravno, a ploče se otvaraju kao listovi iz trake pri dnu. {{ui:Alati}} sakriva alatnu traku, a {{ui:Pomakni}} je stavlja na dno. Pogledajte [Touchpad, dodir i mali zasloni](topic:trackpad-and-touch).
