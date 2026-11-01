---
title: Ekran PartCrafta
summary: Obilazak svake trake i panela: traka alata i kako se mijenja, historija, činjenice o dijelu, 3D prikaz, panel svojstava i statusna traka.
keywords: ekran, raspored, traka alata, historija, stablo elemenata, svojstva, panel, statusna traka, sučelje, ui, obilazak, puni ekran
from: 7394fc49
---

Ekran ima pet dijelova: traku alata preko vrha, historiju lijevo, 3D prikaz u sredini, panel svojstava desno i statusnu traku pri dnu. Iznad svih stoji traka aplikacije CadCraft.

## Traka aplikacije

Tanka traka na samom vrhu pripada sajtu CadCraft, a ne samom PartCraftu. Prikazuje naziv aplikacije i gdje radi, meni verzije, **About PartCraft**, dugme režima ekrana i prekidač teme Paper / Model.

- **Paper** su tamne linije na svijetlom listu. **Model** su svijetle linije na tamnoj pozadini. Boje skica prate temu.
- {{ui:Settings}} (zupčanik, ili {{key:Mod+,}}) ima karticu {{ui:PartCraft}}: koje dugme miša okreće prikaz, točkić miša ili trackpad, i relacije pri skiciranju. Vidi [Postavke PartCrafta](topic:settings).
- Dugme režima ekrana, ili {{key:Ctrl+Shift+F}}, prelazi kroz normalni, puni ekran i puni ekran sa sakrivenim trakama. Sa sakrivenim trakama, pomjerite pokazivač na gornju ivicu (ili dodirnite tamo) da se vrate. {{key:Esc}} vraća na normalno. Ovaj taster je {{key:Ctrl+Shift+F}} i na Macu, ne ⌘.

## Traka alata

Traka alata je grupisana. Mijenja se sa onim što radite, pa stane u jedan red:

| Grupa | Dugmad | Prikazano |
|---|---|---|
| Datoteka | {{ui:New}}, {{ui:Open}}, {{ui:Save}}, {{ui:Export}} (meni) | Uvijek |
| Skica | {{ui:Sketch}} | Kad nijedna skica nije otvorena |
| Skica | {{ui:Exit}}, {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Arc}}, {{ui:Point}}, {{ui:Centerline}}, {{ui:Fillet}}, {{ui:Dimension}}, {{ui:Construction}} | Samo dok je skica otvorena |
| Elementi | {{ui:Extrude}}, {{ui:Cut}}, {{ui:Revolve}}, {{ui:Hole}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:More}} (meni: Rotirani usjek, Ravan, Osa, Tačka, Provlačenje, Spajanje profila, Nagib) | Na dijelu, ne dok je skica ili crtež otvoren. Zaobljenje i skošenje rade na pravim ivicama između dvije ravne površine; ljuska i nagib na ravnim površinama. Provlačenje i spajanje profila još nisu izgrađeni u ovoj verziji (traže tačan kernel); klik na njih to kaže |
| Elementi | {{ui:Done}} | Samo dok birate ivice ili površine za zaobljenje, skošenje, ljusku ili nagib |
| Crtež | {{ui:Drawing}} | Na dijelu (upotrebljivo kad dio ima čvrsto tijelo) |
| Crtež | {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Back}} | Samo na listu crteža |
| Sklop | {{ui:Assembly}} | Na dijelu (upotrebljivo kad dio ima čvrsto tijelo) |
| Sklop | {{ui:Add copy}}, {{ui:Insert}}, {{ui:Joint}}, {{ui:Clash}}, {{ui:Edit part}}, {{ui:Close}} | Samo u sklopu |
| Sklop | {{ui:Back}} | Dok uređujete dio iz sklopa |
| Uređivanje | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} (meni: Izreži, Kopiraj, Zalijepi, Zalijepi na mjesto, Dupliraj, Izbriši, Odaberi sve, Poništi odabir) | Uvijek; svaka stavka radi na skici, historiji ili sklopu u kojem ste |
| Prikaz | {{ui:Fit}}, {{ui:Normal to}}, {{ui:Views}} (meni: Mjeri, Svojstva mase, Presjek, Nagib, Zebra, Zakrivljenost, {{ui:Base planes}}, zatim Izometrija, Prednji, Stražnji, Gornji, Donji, Desni, Lijevi) | Uvijek |

Zadržite pokazivač na dugmetu da vidite šta radi i njegovu tipku. Dugme koje je zasivljeno ne može se koristiti trenutno: na primjer dugmad elemenata dok je skica otvorena, ili {{ui:Joint}} prije nego što sklop ima dva dijela.

Meni {{ui:More}} u grupi Uređivanje navodi svaku radnju uređivanja s tipkom. Šta kopiranje i lijepljenje rade zavisi od toga gdje ste; vidi [Kopiranje, lijepljenje i dupliranje](topic:copy-paste). Opis zasivljene stavke kaže zašto ne može sada djelovati.

Meni {{ui:Export}} sadrži {{ui:STL, for 3D printing}}, {{ui:3MF, for 3D printing}}, {{ui:STEP AP242 (exact solid)}}, {{ui:STEP AP214 (exact solid)}}, {{ui:STEP (faceted, mesh kernel)}}, {{ui:STEP AP214 (faceted, mesh kernel)}}, {{ui:DXF of the sketch or flat face}} i {{ui:Drawing (PDF): views, section, detail, GD&T}}. Dvije tačne STEP stavke su zasivljene: još nisu izgrađene u ovoj verziji, pa koristite {{ui:STEP (faceted, mesh kernel)}}.

## Historija (lijevo)

Panel lijevo je historija elemenata dijela, spisak koji PartCraft ponovo gradi od vrha prema dnu.

- Naslov je naziv dijela ("Part1" dok ga ne preimenujete).
- **Prednja ravan**, **Gornja ravan** i **Desna ravan** dolaze prve. Kliknite jednu da je odaberete; označi se u prikazu.
- Ispod njih su vaši elementi, redom kojim su napravljeni. Skica koju element koristi uvučena je ispod tog elementa.
- Zastavica na desnom kraju reda kaže njegovo stanje:

| Zastavica | Značenje |
|---|---|
| (nema) | Izgrađeno, a skica je potpuno definisana |
| − | Skica koja je nedovoljno definisana (još se može pomjerati) |
| + | Skica koja je previše definisana |
| ⚠ | Izgrađeno, s upozorenjem (zadržite pokazivač da pročitate) |
| ⚠ error | Element nije uspio. Zadržite pokazivač da vidite zašto, ili kliknite na njega |
| ⚠ not built | Element treba drugi koji nije uspio ili je isključen |
| off | Isključeno |

- Svaki element pokazuje svoj glavni broj poslije naziva, na primjer "25 mm" za istiskivanje ili "Ø6.6 thru" za rupu. Dvoklik na broj, ili pritisak na {{key:F2}} u redu, mijenja ga tu. Vidi [Promjena veličina](topic:change-sizes).
- Kliknite element da ga uredite desno. Dvoklik na skicu je otvara.
- Kad se vraćate, red **Traka povrata · naprijed** se pojavljuje u spisku. Elementi ispod njega su zasivljeni i neizgrađeni.
- Kad je red fokusiran, {{key:Up}} i {{key:Down}} se kreću između redova, a {{key:Alt+Up}} / {{key:Alt+Down}} pomjeraju sam element, gdje historija to dopušta.

U sklopu isti panel navodi **Dijelovi** (prvi je označen kao "fiksiran") i **Spojevi**.

### Činjenice o dijelu

Ispod historije, okvir **Dio** navodi **Zapreminu**, **Površinu**, **Dimenzije (X × Y × Z)**, **Prolazne rupe**, **Tijela**, **Trouglove**, broj **Elemenata** i koliko ih **Ne uspijeva**. Zapremine i površine su fasetiranog čvrstog tijela koje gradi mrežni kernel, malo ispod prave vrijednosti za okrugle oblike (vidi [Elementi i njihove opcije](topic:features#curves-resolution)).

U sklopu okvir ima naslov **Sklop**: Dijelovi, Instance, Spojevi, Nespojeno i Preklapanje.

## 3D prikaz (sredina)

Prikaz pokazuje čvrsto tijelo, osnovne ravni i svaku skicu koju element još nije upotrijebio.

Osnovne ravni se crtaju punim linijama dok je dio prazan. Kad ima čvrsto tijelo, one se povlače: crtaju se blijedo, da ne prekrivaju dio, a klikovi prolaze kroz njih do dijela. Vraćaju se punim crtanjem dok birate gdje ćete skicirati ({{ui:Sketch}} bez odabira) i kad odaberete jednu u historiji. {{ui:Views}} › {{ui:Base planes}} ih sakriva potpuno; i dalje se prikazuju dok birate gdje skicirati. PartCraft pamti taj izbor.

- Prevucite da okrenete dio, desni ili srednji klik i prevlačenje da pomjerate, a točkić miša za zumiranje na pokazivaču. Detalji u [Tipke i miš](topic:keyboard).
- Zadržite pokazivač na površini, ivici ili ravni da je vidite osvijetljenu. Kliknite da odaberete. Površine se označavaju cijele, a ivice se crtaju i biraju cijele. {{key:Shift}}+klik skuplja više ivica ili površina. Ostaju označene.
- Kocka pogleda pri gornjem desnom uglu okreće se s dijelom: kliknite površinu, ivicu ili ugao da pogledate odatle, prevucite da okrećete, dugme kuće vraća na početak. Vidi [Kocka pogleda](topic:view-cube).
- Kad je odabrano istiskivanje, narandžasta strelica se pojavljuje na njegovoj krajnjoj površini, a rotacija ima zakrivljenu strelicu na kraju okreta: prevucite je da promijenite dubinu ili ugao, ili upišite u polje pored nje. Vidi [Promjena veličina](topic:change-sizes#drag-it-in-the-view).
- Kad je dio prazan, okvir s naslovom **Započni dio** navodi prve korake.
- Prevucite datoteku `.partcraft.json` ili `.partcraft-asm.json` bilo gdje na prikaz da je otvorite. Datoteka `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ili `.3dm` prevučena tamo otvara se kao čvrsto tijelo.

### Dok birate ivice ili površine

Nakon {{ui:Fillet}}, {{ui:Chamfer}} ili {{ui:Shell}} bez odabira (ili {{ui:Pick edges}} na takvom elementu), dio se prikazuje kao prije tog elementa. Kliknite ivice ili površine da dodate ili izbacite; njihove oznake pokazuju šta je unutra. {{ui:Done}} ili {{key:Esc}} završava. Vidi [Zaobljavanje, skošavanje i šupljina](topic:fillet-chamfer-shell).

### Na listu crteža

{{ui:Drawing}} zamjenjuje 3D prikaz A3 listom crteža. Točkić zumira, desni ili srednji prevlak pomjera, {{key:F}} uklapa. Vidi [Napravite crtež](topic:drawing-pdf).

### Dok je skica otvorena

Prikaz se okreće da gleda ravno u ravan skice, a 2D sloj skice se pojavljuje preko njega. Dio prikazuje samo elemente napravljene prije ove skice. Traka u gornjem lijevom uglu prikazuje čip stanja skice ("Potpuno definisano", "Nedovoljno definisano · 3 stepena slobode" i tako dalje) i njen naziv, kao što je "Sketch2 na površini Extrude1".

## Panel svojstava (desno)

Panel desno prikazuje šta je odabrano, a njegov naslov to imenuje:

- **Dio** (ništa nije odabrano): **Naziv** dijela i postavka **Krivulje**.
- Ravan: dugme {{ui:Sketch on it}}.
- **Površina**: koje je vrste (ravna površina, cilindar sa svojim radijusom i osom, konus, sfera ili torus), njena površina, koji ju je element napravio, a za ravnu površinu {{ui:Sketch on this face}}, {{ui:Normal to}}, {{ui:Export face as DXF}}, {{ui:Extrude from it}}, {{ui:Cut into it}} i {{ui:Hole here}} (vidi [Povucite ili gurnite cijelu površinu](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Ivica**: njena vrsta (prava, kružnica sa središtem i radijusom, ili kriva), njena dužina i dvije površine između kojih leži (kao "Extrude1 krajnja površina i Extrude1 strana"), s dugmadima {{ui:Fillet}} i {{ui:Chamfer}}.
- Više ivica ili površina odabranih s {{key:Shift}}: koliko ih je, s {{ui:Fillet}} i {{ui:Chamfer}} za ivice, i {{ui:Clear}}.
- Element: njegovi brojevi i opcije, dimenzije njegove skice, zatim {{ui:Suppress}}, {{ui:Roll back to here}}, {{ui:Move up}}, {{ui:Move down}}, {{ui:Delete}} i njegov **Naziv**.
- Otvorena skica: njeno stanje, relacije koje možete dodati odabiru, spisak relacija i dimenzija, **Dodaj po koordinatama**, te {{ui:Exit sketch}}, {{ui:Fit}} i {{ui:Export as DXF}}.
- Na listu crteža: postavke presjeka i detalja, ili odabrani GD&T simbol.
- U sklopu: sklop, odabrani dio ili odabrani spoj.

Svako polje za broj stupa na snagu kad pritisnete {{key:Enter}} ili {{key:Tab}}, ili kliknete van njega. Dio se odmah ponovo gradi; nema dugmeta U redu. Koristite {{key:Mod+Z}} da se vratite.

## Statusna traka (dolje)

- Lijevo, koordinate pokazivača u skici (samo dok je skica otvorena).
- U sredini, poruke: šta raditi dalje i zašto je nešto odbijeno. Pročitajte je kad se ništa ne čini.
- Pri desnom kraju, čip kernela: u ovoj verziji uvijek "Mrežni kernel". Zadržite pokazivač da vidite šta to znači. Vidi [Mrežni kernel](topic:solid-kernels).
- Desno, čip: "Obnavlja se…" dok se dio ponovo gradi, zatim "Obnovljeno za … ms" kad je sve u redu, ili "1 element ne uspijeva". U sklopu piše "Postavljeno za … ms" ili broji probleme sa spojevima.

Vidi i [Započnite priručnik u Ilustraciji](topic:illustrate): radni prostor koji pravi priručnike za sklopove od vaših dijelova i sklopova.

## Na uskom ekranu

Do 760 piksela širine, kao na telefonu, prikaz zadržava ekran: traka alata je jedan red koji se pomjera u stranu, a paneli se otvaraju kao listovi s trake pri dnu. {{ui:Tools}} sakriva traku alata, a {{ui:Move}} je premješta pri dnu. Vidi [Trackpad, dodir i mali ekrani](topic:trackpad-and-touch).
