---
title: Ekran PartCraft-a
summary: Obilazak svake trake i panela: traka alata i kako se menja, istorija, podaci o delu, 3D prikaz, panel svojstava i statusna traka.
keywords: ekran, raspored, traka alata, istorija, stablo elemenata, svojstva, panel, statusna traka, interfejs, ui, obilazak, ceo ekran
from: 7394fc49
---

Ekran ima pet delova: traku alata na vrhu, istoriju levo, 3D prikaz u sredini, panel svojstava desno i statusnu traku duž dna. Iznad svih je traka aplikacije CadCraft.

## Traka aplikacije

Tanka traka na samom vrhu pripada sajtu CadCraft, a ne samom PartCraft-u. Prikazuje ime aplikacije i gde radi, meni verzije, **O PartCraft-u**, dugme režima ekrana i prekidač teme Papir / Model.

- **Papir** su tamne linije na svetlom listu. **Model** su svetle linije na tamnoj pozadini. Boje skice prate temu.
- {{ui:Podešavanja}} (zupčanik, ili {{key:Mod+,}}) ima karticu {{ui:PartCraft}}: koje dugme miša okreće prikaz, točkić miša ili touchpad, i relacije dok skicirate. Vidi [Podešavanja PartCraft-a](topic:settings).
- Dugme režima ekrana, ili {{key:Ctrl+Shift+F}}, prolazi kroz normalan prikaz, ceo ekran i ceo ekran sa sakrivenim trakama. Kad su trake sakrivene, pomerite pokazivač do gornje ivice (ili dodirnite tamo) da ih vratite. {{key:Esc}} vraća na normalno. Ovaj taster je {{key:Ctrl+Shift+F}} i na Mac-u, a ne ⌘.

## Traka alata

Traka alata je grupisana. Menja se sa onim što radite, pa stane u jedan red:

| Grupa | Dugmad | Prikazano |
|---|---|---|
| Datoteka | {{ui:Nova}}, {{ui:Otvori}}, {{ui:Sačuvaj}}, {{ui:Izvezi}} (meni) | Uvek |
| Skica | {{ui:Skica}} | Kad nije otvorena skica |
| Skica | {{ui:Izađi}}, {{ui:Linija}}, {{ui:Pravougaonik}}, {{ui:Krug}}, {{ui:Luk}}, {{ui:Tačka}}, {{ui:Osna linija}}, {{ui:Zaobljenje}}, {{ui:Kota}}, {{ui:Konstrukcija}} | Samo dok je skica otvorena |
| Elementi | {{ui:Izvlačenje}}, {{ui:Iseci}}, {{ui:Rotiranje}}, {{ui:Rupa}}, {{ui:Linearno}}, {{ui:Kružno}}, {{ui:Simetrija}}, {{ui:Zaobljenje}}, {{ui:Obaranje ivice}}, {{ui:Ljuska}}, {{ui:Više}} (meni: Rotirano sečenje, Ravan, Osa, Tačka, Provlačenje, Prelivanje, Nacrt) | Na delu, ne dok je otvorena skica ili crtež. Zaobljenje i obaranje ivica rade na pravim ivicama između dve ravne površi; Ljuska i Nacrt na ravnim površima. Provlačenje i Prelivanje još nisu izgrađeni u ovoj verziji (zahtevaju tačno jezgro); klik na njih to kaže |
| Elementi | {{ui:Gotovo}} | Samo dok birate ivice ili površi za zaobljenje, obaranje ivice, ljusku ili nacrt |
| Crtež | {{ui:Crtež}} | Na delu (upotrebljivo kad deo ima čvrsto telo) |
| Crtež | {{ui:Datum}}, {{ui:Okvir}}, {{ui:Obrada}}, {{ui:Detalj}}, {{ui:PDF}}, {{ui:Nazad}} | Samo na listu crteža |
| Sklop | {{ui:Sklop}} | Na delu (upotrebljivo kad deo ima čvrsto telo) |
| Sklop | {{ui:Dodaj kopiju}}, {{ui:Umetni}}, {{ui:Spoj}}, {{ui:Sudar}}, {{ui:Uredi deo}}, {{ui:Zatvori}} | Samo u sklopu |
| Sklop | {{ui:Nazad}} | Dok uređujete deo iz sklopa |
| Uređivanje | {{ui:Opozovi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Više}} (meni: Iseci, Kopiraj, Nalepi, Nalepi na mestu, Dupliraj, Izbriši, Izaberi sve, Izaberi ništa) | Uvek; svaka stavka radi nad skicom, istorijom ili sklopom u kome ste |
| Prikaz | {{ui:Uklopi}}, {{ui:Normalno na}}, {{ui:Pogledi}} (meni: Mere, Svojstva mase, Presek, Nacrt, Zebra, Krivina, {{ui:Osnovne ravni}}, zatim Izometrija, Ispred, Iza, Odozgo, Odozdo, Desno, Levo) | Uvek |

Pređite mišem preko dugmeta da vidite šta radi i njegov taster. Sivo dugme sada ne može da se koristi: na primer dugmad elemenata dok je skica otvorena, ili {{ui:Spoj}} pre nego što sklop ima dva dela.

Meni {{ui:Više}} u grupi Uređivanje navodi svaku radnju uređivanja sa njenim tasterom. Šta kopiranje i lepljenje rade zavisi od toga gde ste; vidi [Kopiranje, lepljenje i dupliranje](topic:copy-paste). Opis sive stavke kaže zašto sada ne može da radi.

Meni {{ui:Izvezi}} sadrži {{ui:STL, za 3D štampu}}, {{ui:3MF, za 3D štampu}}, {{ui:STEP AP242 (tačno čvrsto telo)}}, {{ui:STEP AP214 (tačno čvrsto telo)}}, {{ui:STEP (fasetirano, mrežno jezgro)}}, {{ui:STEP AP214 (fasetirano, mrežno jezgro)}}, {{ui:DXF skice ili ravne površi}} i {{ui:Crtež (PDF): pogledi, presek, detalj, GD&T}}. Dva tačna STEP stavka su siva: još nisu izgrađena u ovoj verziji, pa koristite {{ui:STEP (fasetirano, mrežno jezgro)}}.

## Istorija (levo)

Panel levo je istorija elemenata dela, lista koju PartCraft ponovo gradi od vrha ka dnu.

- Naslov je ime dela („Part1“ dok ga ne preimenujete).
- **Prednja ravan**, **Gornja ravan** i **Desna ravan** dolaze prve. Kliknite jednu da je izaberete; osvetli se u prikazu.
- Ispod njih su vaši elementi redom kojim su napravljeni. Skica koju element koristi uvučena je ispod tog elementa.
- Zastavica na desnom kraju reda kaže stanje:

| Zastavica | Značenje |
|---|---|
| (nema) | Izgrađeno, a skica je potpuno definisana |
| − | Skica koja je nedovoljno definisana (još može da se pomeri) |
| + | Skica koja je previše definisana |
| ⚠ | Izgrađeno, sa upozorenjem (zadržite pokazivač da pročitate) |
| ⚠ greška | Element nije uspeo. Zadržite pokazivač da pročitate zašto, ili kliknite |
| ⚠ nije izgrađeno | Element zavisi od drugog koji nije uspeo ili je isključen |
| isključeno | Potisnut element |

- Svaki element pokazuje svoj glavni broj posle imena, kao „25 mm“ za izvlačenje ili „Ø6.6 thru“ za rupu. Dvaput kliknite broj, ili pritisnite {{key:F2}} na redu, da ga promenite tu. Vidi [Promena dimenzija](topic:change-sizes).
- Kliknite element da ga uredite desno. Dvaput kliknite skicu da je otvorite.
- Kad vratite na raniju tačku, u listi se pojavi red **Traka vraćanja · napred**. Elementi ispod njega su sivi i nisu izgrađeni.
- Kad je red fokusiran, {{key:Up}} i {{key:Down}} prelaze između redova, a {{key:Alt+Up}} / {{key:Alt+Down}} pomeraju sam element, gde istorija to dozvoljava.

U sklopu isti panel navodi **Delove** (prvi je označen kao „uzemljen“) i **Spojeve** umesto toga.

### Podaci o delu

Ispod istorije, okvir **Deo** navodi **Zapreminu**, **Površinu**, **Veličinu (X × Y × Z)**, **Prolazne rupe**, **Tela**, **Trouglove**, broj **Elemenata** i koliko ih je **Neuspelih**. Zapremine i površine su fasetiranog tela koje gradi mrežno jezgro, malo ispod prave vrednosti za okrugle oblike (vidi [Elementi i njihove opcije](topic:features#curves-resolution)).

U sklopu se okvir zove **Sklop**: Delovi, Instance, Spojevi, Nepovezano i Preklapanje.

## 3D prikaz (u sredini)

Prikaz pokazuje čvrsto telo, osnovne ravni i svaku skicu koju elementi još nisu upotrebili.

Osnovne ravni su nacrtane u punom obliku dok je deo prazan. Kad ima čvrsto telo, one se povuku: nacrtane su bledo, da ne pokrivaju deo, a klikovi prolaze kroz njih do dela. Vraćaju se punoj vidljivosti dok birate gde da skicirate ({{ui:Skica}} bez izabranog) i kad izaberete jednu u istoriji. {{ui:Pogledi}} › {{ui:Osnovne ravni}} ih potpuno sakriva; i dalje se prikazuju dok birate gde da skicirate. PartCraft pamti taj izbor.

- Prevucite da okrenete deo, desni ili srednji klik i prevlačenje za pomeranje, točkić za zumiranje na pokazivaču. Detalji u [Tasteri i miš](topic:keyboard).
- Zadržite pokazivač na površi, ivici ili ravni da je vidite osvetljenu. Kliknite da izaberete. Površi se osvetljavaju cele, a ivice se crtaju i biraju cele. {{key:Shift}}+klik skuplja više ivica ili površi. One ostaju obeležene.
- Kocka pogleda u gornjem desnom uglu se okreće sa delom: kliknite površ, ivicu ili ugao da gledate odatle, prevucite da okrenete, a dugme kuće vraća na početak. Vidi [Kocka pogleda](topic:view-cube).
- Izabrani Izvlačenje pokazuje narandžastu strelicu na krajnjoj površi, a Rotiranje zakrivljenu strelicu na kraju okreta: prevucite je da promenite dubinu ili ugao, ili ukucajte u polje pored nje. Vidi [Promena dimenzija](topic:change-sizes#drag-it-in-the-view).
- Kad je deo prazan, okvir sa naslovom **Započni deo** navodi prve korake.
- Prevucite datoteku `.partcraft.json` ili `.partcraft-asm.json` bilo gde na prikaz da je otvorite. Datoteka `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ili `.3dm` prevučena tamo se otvara kao čvrsto telo.

### Dok birate ivice ili površi

Posle {{ui:Zaobljenje}}, {{ui:Obaranje ivice}} ili {{ui:Ljuska}} bez izabranog (ili {{ui:Izaberi ivice}} na takvom elementu), deo se prikazuje kao pre tog elementa. Kliknite ivice ili površi da dodate ili ispustite; njihove oznake pokazuju šta je unutra. {{ui:Gotovo}} ili {{key:Esc}} završava. Vidi [Zaobljenje, obaranje ivica i šupljina](topic:fillet-chamfer-shell).

### Na listu crteža

{{ui:Crtež}} zamenjuje 3D prikaz listom crteža formata A3. Točkić zumira, desni ili srednji klik i prevlačenje pomeraju, {{key:F}} uklapa. Vidi [Pravljenje crteža](topic:drawing-pdf).

### Dok je skica otvorena

Prikaz se okreće da gleda pravo u ravan skice, a 2D sloj skice se pojavi preko njega. Deo prikazuje samo elemente napravljene pre ove skice. Traka u gornjem levom uglu pokazuje čip stanja skice („Potpuno definisano“, „Nedovoljno definisano · 3 stepena slobode“ i tako dalje) i njeno ime, kao „Sketch2 na površi elementa Extrude1“.

## Panel svojstava (desno)

Panel desno prikazuje šta je izabrano, a njegov naslov to imenuje:

- **Deo** (ništa nije izabrano): **Ime** dela i podešavanje **Krivine**.
- Ravan: dugme {{ui:Skica na njoj}}.
- **Površ**: kakva je (Ravna površ, Cilindar sa svojim poluprečnikom i osom, Konus, Sfera ili Torus), njena površina, koji ju je element napravio, i za ravnu površ {{ui:Skica na ovoj površi}}, {{ui:Normalno na}}, {{ui:Izvezi površ kao DXF}}, {{ui:Izvuci iz nje}}, {{ui:Useci u nju}} i {{ui:Rupa ovde}} (vidi [Povucite ili gurnite celu površ](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Ivica**: njena vrsta (prava, krug sa svojim centrom i poluprečnikom, ili kriva), njena dužina i dve površi između kojih leži (kao „Extrude1 kraj i Extrude1 bočna“), sa dugmadima {{ui:Zaobljenje}} i {{ui:Obaranje ivice}}.
- Više ivica ili površi izabranih sa {{key:Shift}}: koliko ih je, sa {{ui:Zaobljenje}} i {{ui:Obaranje ivice}} za ivice, i {{ui:Očisti}}.
- Element: njegove brojke i opcije, dimenzije njegove skice, zatim {{ui:Isključi}}, {{ui:Vrati istoriju do ovde}}, {{ui:Pomeri gore}}, {{ui:Pomeri dole}}, {{ui:Izbriši}} i njegovo **Ime**.
- Otvorena skica: njeno stanje, relacije koje možete dodati izboru, spisak relacija i kota, **Dodaj po koordinatama**, i {{ui:Izađi iz skice}}, {{ui:Uklopi}} i {{ui:Izvezi kao DXF}}.
- Na listu crteža: podešavanja preseka i detalja, ili izabrani GD&T simbol.
- U sklopu: sklop, izabrani deo ili izabrani spoj.

Svako polje za broj stupa na snagu kad pritisnete {{key:Enter}} ili {{key:Tab}}, ili kliknete van njega. Deo se odmah ponovo gradi; nema dugmeta U redu. Koristite {{key:Mod+Z}} da se vratite.

## Statusna traka (dole)

- Levo, koordinate pokazivača u skici (samo dok je skica otvorena).
- U sredini, poruke: šta da radite sledeće i zašto je nešto odbijeno. Pročitajte je kad izgleda da se ništa ne dešava.
- Blizu desne strane, čip jezgra: uvek „Mrežno jezgro“ u ovoj verziji. Zadržite pokazivač da vidite šta to znači. Vidi [Mrežno jezgro](topic:solid-kernels).
- Desno, čip: „Ponovo se gradi…“ dok se deo ponovo gradi, zatim „Ponovo izgrađeno za … ms“ kad je sve u redu, ili „1 element ne uspeva“. U sklopu piše „Postavljeno za … ms“ ili broji probleme sa spojevima.

Vidi i [Počnite uputstvo u Ilustraciji](topic:illustrate): radni prostor koji pravi uputstva za sklop od vaših delova i sklopova.

## Na uskom ekranu

Do 760 piksela širine, kao na telefonu, prikaz zadržava ekran: traka alata je jedan red koji se pomera bočno, a paneli se otvaraju kao listovi iz trake na dnu. {{ui:Alatke}} sakriva traku alata, a {{ui:Pomeranje}} je stavlja dole. Vidi [Touchpad, dodir i mali ekrani](topic:trackpad-and-touch).
