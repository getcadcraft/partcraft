---
title: Ekran PartCrafta
summary: Obilazak svake trake i panela: alatna traka i kako se mijenja, historija, podaci o dijelu, 3D prikaz, panel svojstava i statusna traka.
keywords: ekran, raspored, alatna traka, historija, stablo elemenata, svojstva, panel, statusna traka, sučelje, ui, obilazak, cijeli ekran
from: 5b5bb843
---

Ekran ima pet dijelova: alatnu traku na vrhu, historiju lijevo, 3D prikaz u sredini, panel svojstava desno i statusnu traku duž dna. Iznad svih stoji traka aplikacije CadCraft.

## Traka aplikacije

Tanka traka na samom vrhu pripada sajtu CadCraft, a ne samom PartCrafta. Pokazuje naziv aplikacije i gdje radi, meni verzije, **O PartCraftu**, dugme za način prikaza ekrana i prekidač teme Papir / Model.

- **Papir** su tamne linije na svijetlom listu. **Model** su svijetle linije na tamnoj pozadini. Boje skica prate temu.
- {{ui:Postavke}} (zupčanik, ili {{key:Mod+,}}) ima karticu {{ui:PartCraft}}: koje dugme miša okreće pogled, točkić miša ili touchpad, i odnose pri skiciranju. Vidi [Postavke PartCrafta](topic:settings).
- Dugme za način prikaza ekrana, ili {{key:Ctrl+Shift+F}}, prelazi kroz normalan, cijeli ekran i cijeli ekran sa skrivenim trakama. Kad su trake skrivene, pomjeri pokazivač do gornje ivice (ili dodirni tamo) da se vrate. {{key:Esc}} vraća na normalno. Taj taster je {{key:Ctrl+Shift+F}} i na Macu, a ne ⌘.

## Alatna traka

Alatna traka je grupisana. Mijenja se s onim što radiš, tako da stane u jedan red:

| Grupa | Dugmad | Prikazano |
|---|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Spasi}}, {{ui:Izvoz}} (meni) | Uvijek |
| Skica | {{ui:Skica}} | Kad nijedna skica nije otvorena |
| Skica | {{ui:Izađi}}, {{ui:Linija}}, {{ui:Pravougaonik}}, {{ui:Krug}}, {{ui:Luk}}, {{ui:Tačka}}, {{ui:Osna linija}}, {{ui:Zaobljenje}}, {{ui:Kota}}, {{ui:Konstrukcija}} | Samo dok je skica otvorena |
| Elementi | {{ui:Istisni}}, {{ui:Izreži}}, {{ui:Rotiraj}}, {{ui:Rupa}}, {{ui:Linearno}}, {{ui:Kružno}}, {{ui:Zrcaljenje}}, {{ui:Zaobljenje}}, {{ui:Skošenje}}, {{ui:Ljuska}}, {{ui:Više}} (meni: Rotirani rez, Ravan, Osa, Tačka, Provlačenje, Prelaz, Nacrt) | Na dijelu, ne dok je skica ili crtež otvoren. Zaobljenje i skošenje rade na pravim ivicama između dvije ravne površine; Ljuska i Nacrt na ravnim površinama. Provlačenje i Prelaz još nisu izgrađeni u ovoj verziji (trebaju tačan kernel); klik na jedno to kaže |
| Elementi | {{ui:Gotovo}} | Samo dok birate ivice ili površine za zaobljenje, skošenje, ljusku ili nagib |
| Crtež | {{ui:Crtež}} | Na dijelu (upotrebljivo kad dio ima tijelo) |
| Crtež | {{ui:Baza}}, {{ui:Okvir}}, {{ui:Obrada}}, {{ui:Detalj}}, {{ui:PDF}}, {{ui:Nazad}} | Samo na listu crteža |
| Sklop | {{ui:Sklop}} | Na dijelu (upotrebljivo kad dio ima tijelo) |
| Sklop | {{ui:Dodaj kopiju}}, {{ui:Umetni}}, {{ui:Spoj}}, {{ui:Sudar}}, {{ui:Uredi dio}}, {{ui:Zatvori}} | Samo u sklopu |
| Sklop | {{ui:Nazad}} | Dok uređuješ dio iz sklopa |
| Uređivanje | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Više}} (meni: Izreži, Kopiraj, Zalijepi, Zalijepi na mjestu, Dupliraj, Izbriši, Odaberi sve, Poništi odabir) | Uvijek; svaka stavka radi nad skicom, historijom ili sklopom u kojem si |
| Prikaz | {{ui:Uklopi}}, {{ui:Normalno na}}, {{ui:Prikazi}} (meni: Mjerenje, Svojstva mase, Presjek, Nacrt, Zebra, Zakrivljenost, {{ui:Osnovne ravni}}, zatim Izometrija, Ispred, Pozadi, Odozgo, Odozdo, Desno, Lijevo) | Uvijek |

Pređi mišem preko dugmeta da vidiš šta radi i njegov taster. Dugme koje je sivo se ne može sada koristiti: na primjer dugmad elemenata dok je skica otvorena, ili {{ui:Spoj}} prije nego sklop ima dva dijela.

Meni {{ui:Više}} u grupi Uređivanje navodi svaku radnju uređivanja s njezinim tasterom. Šta kopiranje i lijepljenje rade zavisi od toga gdje si; vidi [Kopiraj, zalijepi i dupliraj](topic:copy-paste). Savjet na sivoj stavci kaže zašto sada ne može raditi.

Meni {{ui:Izvoz}} sadrži {{ui:STL, za 3D štampu}}, {{ui:3MF, za 3D štampu}}, {{ui:STEP AP242 (tačno čvrsto tijelo)}}, {{ui:STEP AP214 (tačno čvrsto tijelo)}}, {{ui:STEP (poligonalni, mrežni kernel)}}, {{ui:STEP AP214 (facetirano, mesh kernel)}}, {{ui:DXF skice ili ravne površine}} i {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}}. Stavke tačnog STEP-a zapisuju zaobljene površine na njihovim pravim površinama; poligonalne ih zapisuju kao ravne fasete.

## Historija (lijevo)

Panel lijevo je historija elemenata dijela, lista koju PartCraft ponovo gradi odozgo prema dolje.

- Naslov je naziv dijela ("Part1" dok ga ne preimenuješ).
- **Ravan Ispred**, **ravan Odozgo** i **ravan Desno** dolaze prve. Klikni jednu da je odabereš; ona se osvijetli u prikazu.
- Ispod njih su tvoji elementi, redom kojim su napravljeni. Skica koju element koristi uvučena je ispod tog elementa.
- Zastavica na desnom kraju reda kaže njegovo stanje:

| Zastavica | Značenje |
|---|---|
| (nema) | Izgrađeno, a skica je potpuno definisana |
| − | Skica koja je nedovoljno definisana (još se može pomjerati) |
| + | Skica koja je previše definisana |
| ⚠ | Izgrađeno, s upozorenjem (pređi mišem da pročitaš) |
| ⚠ greška | Element nije uspio. Pređi mišem da vidiš zašto, ili klikni na njega |
| ⚠ nije izgrađeno | Element treba drugi koji nije uspio ili je isključen |
| isključeno | Potisnuto |

- Svaki element pokazuje svoj glavni broj iza naziva, kao "25 mm" za Istisni ili "Ø6.6 kroz" za rupu. Dvaput klikni broj ili pritisni {{key:F2}} na redu da ga promijeniš upravo tu. Vidi [Promjena veličina](topic:change-sizes).
- Klikni element da ga uređuješ desno. Dvaput klikni skicu da je otvoriš.
- Kad se vratiš unazad, u listi se pojavi red **Traka povratka · vrati naprijed**. Elementi ispod njega su sivi i nisu izgrađeni.
- Kad je red fokusiran, {{key:Up}} i {{key:Down}} se kreću između redova, a {{key:Alt+Up}} / {{key:Alt+Down}} pomjeraju sam element, gdje historija to dopušta.

U sklopu isti panel nabraja **Dijelove** (prvi je označen kao "uzemljen") i **Spojeve**.

### Podaci o dijelu

Ispod historije, okvir **Dio** nabraja **Zapreminu**, **Površinu**, **Veličinu (X × Y × Z)**, **Kroz rupe**, **Tijela**, **Trouglove**, broj **Elemenata** i koliko ih **Ne uspijeva**. Zapremine i površine su od poligonalnog čvrstog tijela koje je izgradio mrežni kernel, malo ispod prave vrijednosti za okrugle oblike (vidi [Elementi i njihove opcije](topic:features#curves-resolution)).

U sklopu okvir je naslovljen **Sklop**: Dijelovi, Instance, Spojevi, Nisu spojeni i Smetnja.

## 3D prikaz (sredina)

Prikaz pokazuje čvrsto tijelo, osnovne ravni i svaku skicu koju još nijedan element ne koristi.

Osnovne ravni su u punom obliku dok je dio prazan. Kad dobije čvrsto tijelo, povuku se: nacrtane su blijedo, da ne pokrivaju dio, a klikovi prolaze kroz njih do dijela. Vraćaju se u punom obliku dok biraš gdje ćeš skicirati ({{ui:Skica}} bez odabira) i kad odabereš jednu u historiji. {{ui:Prikazi}} › {{ui:Osnovne ravni}} ih sakriva sasvim; i dalje se prikazuju dok biraš mjesto za skicu. PartCraft pamti taj izbor.

- Prevuci da okreneš dio, desnim ili srednjim dugmetom prevuci za pomjeranje, točkićem zumiraj na pokazivaču. Detalji u [Tasteri i miš](topic:keyboard).
- Pređi mišem preko površine, ivice ili ravni da vidiš kako se osvijetli. Klikni da odabereš. Površine se osvjetljavaju cijele, a ivice se crtaju i biraju cijele. {{key:Shift}}+klik skuplja više ivica ili površina. Ostaju označene.
- Kocka pogleda u gornjem desnom uglu okreće se s dijelom: klikni na površinu, ivicu ili ugao da gledaš odatle, prevuci da okreneš, a dugme kućice vraća na početak. Vidi [Kocka pogleda](topic:view-cube).
- Odabrani Istisni pokazuje narandžastu strelicu na svojoj krajnjoj površini, a Rotiraj zakrivljenu strelicu na kraju okretanja: prevuci je da promijeniš dubinu ili ugao, ili upiši u okvir pored nje. Vidi [Promjena veličina](topic:change-sizes#drag-it-in-the-view).
- Kad je dio prazan, okvir naslovljen **Počni dio** nabraja prve korake.
- Prevuci datoteku `.partcraft.json` ili `.partcraft-asm.json` bilo gdje na prikaz da je otvoriš. Datoteka `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ili `.3dm` prevučena tamo otvara se kao čvrsto tijelo.

### Dok birate ivice ili površine

Nakon {{ui:Zaobljenje}}, {{ui:Skošenje}} ili {{ui:Ljuska}} bez odabira (ili {{ui:Odaberi ivice}} na takvom elementu), dio se prikazuje kakav je bio prije tog elementa. Klikni ivice ili površine da ih dodaš ili izbaciš; njihove oznake pokazuju šta je unutra. {{ui:Gotovo}} ili {{key:Esc}} završava. Vidi [Zaobli, skosi i izdubi](topic:fillet-chamfer-shell).

### Na listu crteža

{{ui:Crtež}} zamjenjuje 3D prikaz listom A3. Točkić zumira, desni ili srednji prevlak pomjera, {{key:F}} uklapa. Vidi [Napravi crtež](topic:drawing-pdf).

### Dok je skica otvorena

Prikaz se okreće da gleda pravo u ravan skice, i pojavi se sloj 2D skice preko svega. Dio prikazuje samo elemente napravljene prije ove skice. Traka u gornjem lijevom uglu pokazuje čip stanja skice ("Potpuno definisano", "Nedovoljno definisano · 3 stepena slobode" i tako dalje) i njen naziv, kao "Sketch2 na površini Extrude1".

## Panel svojstava (desno)

Panel desno prikazuje šta je odabrano, a naslov ga imenuje:

- **Dio** (ništa nije odabrano): **Naziv** dijela i postavka **Krive**.
- Ravan: dugme {{ui:Skica na njoj}}.
- **Površina**: koje je vrste (Ravna površina, Cilindar s radijusom i osom, Konus, Sfera ili Torus), njena površina, koji ju je element napravio, a za ravnu površinu {{ui:Skica na ovoj površini}}, {{ui:Normalno na}}, {{ui:Izvezi površinu kao DXF}}, {{ui:Izvuci iz nje}}, {{ui:Usijeci u nju}} i {{ui:Rupa ovdje}} (vidi [Povuci ili gurni cijelu površinu](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Ivica**: njena vrsta (prava, krug sa središtem i radijusom, ili kriva), njena dužina i dvije površine između kojih leži (kao "Extrude1 krajnja površina i Extrude1 bočna"), s dugmadima {{ui:Zaobljenje}} i {{ui:Skošenje}}.
- Više ivica ili površina odabranih s {{key:Shift}}: koliko ih ima, s {{ui:Zaobljenje}} i {{ui:Skošenje}} za ivice, i {{ui:Očisti}}.
- Element: njegove brojeve i opcije, dimenzije njegove skice, pa {{ui:Isključi}}, {{ui:Vrati do ovdje}}, {{ui:Pomjeri gore}}, {{ui:Pomjeri dolje}}, {{ui:Izbriši}} i njegov **Naziv**.
- Otvorena skica: njeno stanje, odnosi koje možeš dodati odabiru, spisak odnosa i dimenzija, **Dodaj po koordinatama**, i {{ui:Izađi iz skice}}, {{ui:Uklopi}} i {{ui:Izvezi kao DXF}}.
- Na listu crteža: postavke presjeka i detalja, ili odabrani GD&T simbol.
- U sklopu: sklop, odabrani dio ili odabrani spoj.

Svako polje za broj stupa na snagu kad pritisneš {{key:Enter}} ili {{key:Tab}}, ili klikneš van njega. Dio se odmah ponovo gradi; nema dugmeta U redu. Koristi {{key:Mod+Z}} da se vratiš.

## Statusna traka (dole)

- Lijevo, koordinate pokazivača u skici (samo dok je skica otvorena).
- U sredini, poruke: šta slijedi, i zašto je nešto odbijeno. Pročitaj je kad se čini da se ništa ne dešava.
- Blizu desne strane, čip kernela: u ovoj verziji uvijek "Mesh kernel". Pređi mišem da vidiš šta to znači. Vidi [Mrežni kernel](topic:solid-kernels).
- Desno, čip: "Ponovna izgradnja…" dok se dio ponovo gradi, pa "Izgrađeno za … ms" kad je sve u redu, ili "1 element ne uspijeva". U sklopu piše "Postavljeno za … ms" ili broji probleme sa spojevima.

Vidi i [Počni priručnik u Ilustraciji](topic:illustrate): radni prostor koji pravi priručnike sklopova iz tvojih dijelova i sklopova.

## Na uskom ekranu

Do 760 piksela širine, kao na telefonu, prikaz čuva ekran: alatna traka je jedan red koji se pomjera u stranu, a paneli se otvaraju kao listovi s trake pri dnu. {{ui:Alati}} sakriva alatnu traku, a {{ui:Pomjeri}} je stavlja dolje. Vidi [Touchpad, dodir i mali ekrani](topic:trackpad-and-touch).
