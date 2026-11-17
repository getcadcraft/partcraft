---
title: Dolazak s drugog parametarskog modelara
summary: Kako navike stolnih parametarskih modelara za dijelove odgovaraju programu PartCraft i razlike koje u prvom satu zbunjuju iskusne korisnike.
keywords: prebacivanje, migracija, poznato, upravitelj značajki, stablo dizajna, pametna kota, izvlačenje ispupa, izvlačenje izreza, čarobnjak za provrte, spojevi, provjera smetnji, traka povrata, upravitelj svojstava, miš, razlike
from: fbacaee1
---

Ako dijelove crtate u SolidWorksu, većina ideja u programu PartCraft bit će vam poznata: skice na ravninama Prednja, Gornja i Desna, ograničenja i pametne kote, povijest značajki s trakom povrata te sklopovi složeni spojevima. Način na koji do njih dolazite na nekim je mjestima drugačiji, a ova prva verzija radi manje. Ova stranica povezuje vaše navike i navodi iznenađenja.

## Navike, prevedene

| Navikli ste na | U programu PartCraft |
|---|---|
| Stablo dizajna lijevo | Povijest lijevo: ravnine, zatim značajke, skice uvučene ispod značajke koja ih koristi |
| Ravnine Prednja, Gornja i Desna | Iste tri, kroz ishodište. Prednja je XY ravnina, Gornja je XZ, Desna je YZ; Y pokazuje prema gore |
| Skica na ravnini ili plohi, zatim potvrdni kut za izlaz | {{ui:Skica}} ({{key:S}}) na odabranoj ravnini ili ravnoj plohi; {{ui:Izlaz}} ili {{key:Esc}} dok se ne zatvori |
| Pametna kota | {{ui:Kota}} ({{key:D}}). Kliknite jednu ili dvije stavke, zatim mjesto gdje ide broj. Mjesto na koje ga postavite određuje vodoravnu, okomitu ili poravnatu kotu |
| Dodavanje ograničenja na ploči svojstava | Odaberite stavke, zatim gumbe ograničenja u desnoj ploči (Podudarno, Vodoravno, Paralelno, Tangentno, Jednako i tako dalje) |
| Automatska ograničenja pri skiciranju | Hvatanja dodaju podudarna, točka-na-krivulji, vodoravna i okomita ograničenja |
| Plave / crne / crvene boje skice | Ista ideja: plava je nedovoljno definirana, crna potpuno definirana, crvena preodređena. Oznaka prikazuje preostale stupnjeve slobode |
| Središnja linija za rotacije | {{ui:Os}} ({{key:N}}); {{ui:Rotiraj}} koristi prvu os osim ako ne odaberete drugu os |
| Zaobljenje skice | {{ui:Zaobljenje}} ({{key:F}}) u skici: kliknite kut, upišite radijus |
| Prekidač konstrukcijske geometrije | {{ui:Konstrukcija}} ({{key:Q}}) |
| Izvučeni ispup | {{ui:Izvuci}}: Slijepo, Srednja ravnina, Do plohe / sljedeće / vrha, Odmak od plohe, drugi smjer, suženje, jedan obris (Odaberi područja) |
| Izvučeni izrez | {{ui:Izreži}}: počinje kao Kroz sve; za džep prijeđite na Slijepo |
| Rotirani ispup / izrez | {{ui:Rotiraj}} / {{ui:Više}} › {{ui:Rotirani izrez}} |
| Referentna ravnina / os / točka | {{ui:Više}} › {{ui:Ravnina}}, {{ui:Os}}, {{ui:Točka}} (vidi [Referentne ravnine, osi i točke](topic:reference-geometry)) |
| Ispup ili izrez provlačenjem / loftom, nagib | {{ui:Više}} › {{ui:Nagib}} na ravnim plohama (vidi [Provlačenje, loft i nagib](topic:sweep-loft-draft)). {{ui:Provlačenje}} i {{ui:Loft}} još nisu izrađeni u ovoj verziji (trebaju točno jezgro) |
| Čarobnjak za provrte | {{ui:Provrt}} na svakoj slobodnoj točki skice: jednostavni, upušteni, stožasti upust (90° / 82°) ili s navojem ISO metrički M2–M24, kroz ili slijepo |
| Linearni / kružni uzorak, zrcaljenje | {{ui:Linearno}}, {{ui:Kružno}}, {{ui:Zrcali}} (značajke ili cijelo tijelo) |
| Zaobljenje i skošenje bridova | {{ui:Zaobljenje}} / {{ui:Skošenje}}: kliknite brid, {{key:Shift}}+klik za još, zatim gumb. Jedan radijus; jednaka, dvije udaljenosti ili udaljenost i kut skošenja. U ovoj verziji samo ravni bridovi između dviju ravnih ploha, a zaobljenja koja se susreću u kutu spajaju se u pokos. Zaobljite ili pokosite zakrivljene bridove u skici ({{ui:Zaobljenje}} u skici, {{key:F}}) |
| Ljuska | {{ui:Ljuska}}: kliknite ravne plohe za otvaranje, zatim gumb. Jedna debljina stijenke |
| Otvaranje STEP datoteke | {{ui:Otvori}}: čita se kao trokuti, kao puno tijelo na koje se gradi ([Otvaranje STEP datoteke](topic:import-step)) |
| Uređivanje značajke, zatim U redu | Kliknite značajku; promijenite brojeve desno; ponovno se gradi dok tipkate. Nema U redu ni Odustani: koristite {{key:Mod+Z}} |
| Uređivanje skice | Dvaput kliknite skicu u povijesti |
| Ponovna izrada | Automatska nakon svake promjene. Ne postoji tipka za ponovnu izradu |
| Potisni / ukini potiskivanje | {{ui:Potisni}} / {{ui:Ukloni potiskivanje}} u desnoj ploči |
| Povlačenje trake povrata | {{ui:Vrati unatrag do ovdje}} na značajki; kliknite „Traka povrata · idi naprijed“ za povratak |
| Povlačenje značajke u stablu radi preslagivanja | {{ui:Pomakni gore}} / {{ui:Pomakni dolje}} ili {{key:Alt+Up}} / {{key:Alt+Down}}; odbija se uz razlog kad bi prekinulo ovisnost |
| Uređivanje kota dvostrukim klikom na model | Odaberite značajku: kote njezine skice navedene su u desnoj ploči |
| Spojevi: podudarno, koncentrično, udaljenost, kut | {{ui:Spoj}} ({{key:J}}): odaberite ravnu plohu na svakom dijelu; zglob ih stavlja lice uz lice. **Središte na** osi djeluje kao koncentrično; **Odmak** kao udaljenost; **Kut** kao kut |
| Fiksna komponenta | Prvi dio je uzemljen; {{ui:Učini ga uzemljenim dijelom}} ga mijenja |
| Umetanje komponente | {{ui:Dodaj kopiju}} ili {{ui:Dupliciraj}} (još jedna kopija) ili {{ui:Umetni}} (iz datoteke dijela) |
| Uređivanje dijela u sklopu | {{ui:Uredi dio}}, zatim {{ui:Natrag}} |
| Otkrivanje smetnji | {{ui:Sudar}} |
| Pomicanje komponente radi gibanja | Povucite klizač kuta ili odmaka rotacijskog ili kliznog zgloba; {{ui:Provjerite sudaraju li se dijelovi tijekom gibanja}} ga pomiče. Dio bez zgloba: **Pomakni rukom** (strelice za povlačenje ili upisane vrijednosti) |
| Mjerenje / pregled | {{ui:Pogledi}}, zatim {{ui:Mjeri}} ({{key:M}}): udaljenosti, kutovi, radijusi, površine; {{ui:Svojstva mase}} |
| Rastavljeni prikaz, sastavnica | U sklopu bez odabira: **Rastavljeni prikazi** i **Sastavnica** u desnoj ploči |
| Svojstva mase | Okvir **Dio**: volumen, površina, veličina fasetiranog tijela (na okruglim dijelovima malo niže). Nema mase: materijali još ne postoje |
| Spremi, spremi kao STEP | {{ui:Spremi}} preuzima `.partcraft.json`; {{ui:Izvoz}} ima STL, 3MF, točan STEP (AP242 ili AP214), fasetirani STEP, DXF i PDF crtež |
| Izrada crteža iz dijela | {{ui:Crtež}}: automatski list A3 s tri pogleda, izometrijom, jednim presjekom, jednim detaljem, referentnim bazama, okvirima kontrole značajki i oznakama obrade. Kotiraju se samo ukupne veličine |
| Povlačenje srednjom tipkom za okretanje | Ovdje se **povlačenjem lijevom** tipkom okreće. Povlačenje srednjom ili desnom tipkom pomiče prikaz. Kotačić zumira na mjestu pokazivača |
| Orijentacija pogleda, Okomito na | Izbornik {{ui:Pogledi}}; {{ui:Okomito na}} za odabranu plohu, ravninu ili skicu |
| Zumiranje na cijeli prikaz (F) | {{key:F}}, ili {{ui:Prilagodi}} (u skici je {{key:F}} alat za zaobljenje) |
| Kontekstni izbornici | Nema. Povlačenje desnom tipkom pomiče prikaz; u skici desni klik završava lanac linija |

:::tip
Ako su vam ruke navikle na SolidWorks, odaberite stil izbornika {{ui:Stablo značajki}} u {{ui:Postavke}} › {{ui:PartCraft}} › {{ui:Izbornici, tipke i miš}}: vrpca kartica Značajke, Skica, Plohe, Procjena, Crtež, Sklop i Pogled, srednja tipka kruži, {{key:Shift}} i srednja tipka pomiču, a lijeva tipka samo odabire. Vidi [Izbornici, tipke i miš](topic:menus-keys-and-mouse).
:::

## Razlike koje zbunjuju ljude

**Cijela skica je profil.** Izvlačenje i rotacija koriste svaku zatvorenu petlju u skici. Za značajku ne možete odabrati jedno područje ili jedan obris skice. Koristite jednu skicu po značajki.

**Koju skicu značajka uzima.** Značajka koristi skicu koju ste upravo zatvorili ili onu odabranu u povijesti. Ako ništa nije odabrano, uzima najnoviju skicu koju nijedna značajka još ne koristi. Ako dobijete krivu, odaberite pravu skicu i ponovno odaberite značajku.

**Promjene se primjenjuju dok tipkate.** Nema dijaloškog okvira značajke s U redu i Odustani. Svaki broj odmah ponovno gradi dio, a {{key:Mod+Z}} je put natrag. Popis poništavanja obuhvaća jednako uređivanje skica, značajke i postavke.

**Preodređenje se nikad ne prihvaća tiho.** Nema upravljanih (referentnih) kota. Kota koju već određuju druga ograničenja prijavljuje se kao preodređena („već je implicirana. Izbrišite je.“). Proturječna kota ostavlja geometriju netaknutom i postaje crvena. Obrišite jednu ili poništite.

**Provlačenja i lofti još nisu izrađeni; zaobljenja, skošenja, ljuske i nagibi imaju ograničenja.** Ova verzija programa PartCraft gradi svaki dio mrežnim jezgrom; oznaka u statusnoj traci uvijek kaže „Mesh kernel“. Zaobljenja i skošenja rade na ravnim bridovima između dviju ravnih ploha, a gdje se zaobljenja susreću u kutu, spajaju se u pokos, a ne stapaju. Ljuske se otvaraju, a nagibi naginju samo ravne plohe. Značajke koje trebaju točno jezgro ostaju klikabilne, ali kad se odaberu, kažu „još nije izrađeno“. Vidi [Mrežno jezgro](topic:solid-kernels) i [Što još nije izrađeno](topic:not-built-yet).

**Dva gumba pod nazivom Zaobljenje.** U skici {{ui:Zaobljenje}} ({{key:F}}) zaobljuje kut skice. Na dijelu {{ui:Zaobljenje}} u grupi Značajke zaobljuje bridove tijela (u ovoj verziji ravne bridove između ravnih ploha). Provlačenja i lofta nema u ovoj verziji: vidi [Što još nije izrađeno](topic:not-built-yet).

**Provrti trebaju slobodne točke.** {{ui:Provrt}} buši na točkama izrađenima alatom {{ui:Točka}}. Središta kružnica i krajevi linija se ne računaju.

**Kroz sve vrijedi samo za izreze.** Ispup treba dubinu. Uvjeti završetka „do vrha / plohe / sljedeće“ zasad ne postoje.

**Tijelo je fasetirano.** Mrežno jezgro gradi okrugle plohe od ravnih faseta, pa su prikaz, volumeni te izvozi STL i 3MF sastavljeni od njih: **Krivulje** na ploči dijela ih čine finijima. Točni STEP izvoz nije takav: zapisuje okrugle plohe na njihovim stvarnim površinama.

**Samo milimetri.** Postavka za palce još ne postoji. Kad upisujete mjere u palcima, pomnožite ih s 25.4.

**Y je gore.** Prednja ravnina gleda prema vama, a Gornja gleda dolje na dio, kao što očekujete, ali gornja os svijeta je Y. Izvozi STL, 3MF i točan STEP okreću se tako da Z bude gore; fasetirani STEP zadržava Y gore.

**Spojevi su plohe, a ne parovi geometrije.** Zglob uvijek kreće od dviju ravnih ploha postavljenih lice uz lice. Za klin u provrtu odaberite ravnu plohu oko provrta i rame klina, zatim postavite **Središte na** na os provrta i os rotacije klina. Dijelovi do kojih zglobovi ne dolaze ostaju tamo gdje su umetnuti; ne možete ih povlačiti. Zglobovi u petlji se ne rješavaju.

**Spremanje je preuzimanje.** Nema datoteke koju stalno prepisujete. Svako spremanje je nova datoteka u mapi za preuzimanja. Prvo dajte dijelu naziv i držite datoteke u mapi projekta.

**Nema kontekstnih izbornika, nema kartica upravitelja naredbi.** Sve je na alatnoj traci i u desnoj ploči, a alatna traka mijenja se ovisno o tome što radite: alati za skicu pojavljuju se samo u skici, a alati sklopa samo u sklopu.

**Tipke su pojedinačna slova u skici.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} i {{key:S}} biraju alate bez modifikatora. Vidi [Tipke i miš](topic:keyboard).
