---
title: Kopiranje, lijepljenje i dupliciranje
summary: Kopirajte geometriju skice, značajke i dijelove sklopa; lijepite tamo gdje kliknete ili na isto mjesto; dupliciranje u jednom koraku; što ide s kopijom, a što ne.
keywords: kopiraj, zalijepi, izreži, dupliciraj, međuspremnik, zalijepi na isto mjesto, odaberi sve, poništi odabir, izbriši, ctrl c, ctrl v, ctrl d, instanca, komponenta, kopiraj skicu, kopiraj značajku, kopiraj dio
from: 611307d7
---

Grupa {{ui:Uredi}} na alatnoj traci sadrži {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}} i izbornik {{ui:Više}} s {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}, svaki s pripadajućom tipkom. Što kopiraju ovisi o tome gdje ste: geometriju u otvorenoj skici, značajku u povijesti ili dio u sklopu.

Zasivljena stavka trenutačno ne može djelovati. Zadržite pokazivač iznad nje: opis alata kaže zašto, na primjer „Prvo odaberite geometriju skice“ ili „Međuspremnik sadrži Sketch2 i Extrude2: značajke se lijepe u povijest, pa prvo izađite iz skice“.

| Radnja | Tipka | U skici | U povijesti | U sklopu |
|---|---|---|---|---|
| Kopiraj | {{key:Mod+C}} | Odabrane točke i krivulje | Odabrana skica, izvlačenje, rotacija ili provrt (sa svojom skicom) | Odabrani dio |
| Izreži | {{key:Mod+X}} | Kopiraj, zatim ih izbriši | Kopiraj, zatim izbriši značajku | Kopiraj, zatim ukloni dio |
| Zalijepi | {{key:Mod+V}} | Kopija prati pokazivač; kliknite gdje ide | Dodaje kopiju na kraj povijesti | Nova kopija pokraj ostalih dijelova |
| Zalijepi na isto mjesto | {{key:Mod+Shift+V}} | Na istim koordinatama | Isto kao Zalijepi | Na istom mjestu kao kopirani dio |
| Dupliciraj | {{key:Mod+D}} | Kopira i pomiče u jednom potezu; međuspremnik ostaje netaknut | Druga kopija odmah nakon odabranog | Druga kopija pokraj ostalih dijelova |
| Izbriši | {{key:Delete}} | Odabir | Značajka (pita ako je druge koriste) | Dio ili zglob |
| Odaberi sve | {{key:Mod+A}} | Sve u skici | Nije dostupno | Nije dostupno |
| Poništi odabir | {{key:Esc}} | Briše odabir | Briše odabir i odabire | Briše odabir |

Svako lijepljenje, dupliciranje i izrezivanje jedan je korak na popisu poništavanja: {{key:Mod+Z}} ga vraća, {{key:Mod+Y}} ga ponovno postavlja.

## U skici

1. Odaberite što kopirate: kliknite to, {{key:Shift}}+klik za više, povucite prozor ili pritisnite {{key:Mod+A}} za sve.
2. Pritisnite {{key:Mod+C}} ili odaberite {{ui:Kopiraj}}. Statusna traka kaže što je kopirano.
3. Pritisnite {{key:Mod+V}} ili odaberite {{ui:Zalijepi}}. Isprekidana kopija prati pokazivač i drži se za svoju sredinu. Hvata se na točke: postavite središte kopirane kružnice na točku tako da kliknete tu točku.
4. Kliknite gdje ide. Zalijepljena geometrija ostaje odabrana, pa je odmah možete povući ili joj dodati ograničenja. {{key:Esc}} otkazuje lijepljenje.

Što ide sa sobom:

- Kopirana linija, kružnica ili luk nosi svoje krajnje točke i središte.
- Ograničenja i kote **između kopiranih stavki** idu sa sobom: kopirani pravokutnik i dalje je pravokutnik, sa svojim veličinama.
- Ograničenja **prema geometriji koju niste kopirali** i prema ishodištu se odbacuju. Statusna traka ih broji: „2 ograničenja prema geometriji izvan kopije neće ići sa sobom“. Zalijepljena kopija zato se može slobodno pomicati dok je ne povežete ograničenjima ili kotama.
- Fiksna točka ostaje fiksna, na svom novom položaju.

{{ui:Zalijepi na isto mjesto}} stavlja kopiju točno na koordinate izvornika, u ovoj skici ili u drugoj: korisno za prijenos profila iz jedne skice u drugu. U istoj skici kopija leži preko izvornika; odmaknite je povlačenjem.

{{ui:Dupliciraj}} ({{key:Mod+D}}) kopira odabir i odmah počinje s postavljanjem, ne dirajući ono što je na međuspremniku.

:::tip
Da ponovite središte provrta ili utor nekoliko puta, kopirajte ga jednom i zalijepite nekoliko puta: svaki {{key:Mod+V}} počinje novu kopiju koja prati pokazivač.
:::

## U povijesti

1. Kliknite skicu, izvlačenje, rotaciju ili provrt u povijesti.
2. {{key:Mod+C}} ga kopira. Značajka utemeljena na skici kopira se zajedno sa svojom skicom.
3. {{key:Mod+V}} dodaje kopiju na kraj povijesti (na traku povrata ako ste se vratili unatrag), s novim nazivima poput Sketch3 i Extrude2.

Kopija leži na istoj ravnini ili plohi kao izvornik, pa se gradi na njemu i dio izgleda isto. Odaberite novu skicu i promijenite joj ravninu u desnoj ploči ili je otvorite i povucite ili ponovno kotirajte profil da pomaknete kopiju.

- Lijepljenje u **drugi dio**: otvorite taj dio i pritisnite {{key:Mod+V}}. Ako je skica kopije bila na plohi koju taj dio nema, ide na prednju ravninu, a statusna traka to kaže.
- {{ui:Dupliciraj}} radi kopiranje i lijepljenje u jednom koraku, unutar istog dijela.
- {{ui:Izreži}} kopira značajku, zatim je briše (prvo pita ako je druge značajke koriste).

Uzorci, zrcaljenja, zaobljenja, skošenja, ljuske i uvezena tijela ne mogu se kopirati: ovise o bridovima, plohama ili značajkama odabranima u ovom dijelu. Umjesto toga kopirajte skicu ili značajku na kojoj su izgrađeni, ili ih uzorkujte s {{ui:Linearno}} ili {{ui:Kružno}}.

## U sklopu

1. Kliknite dio u prikazu ili na popisu lijevo.
2. Odaberite {{ui:Dupliciraj}} ({{key:Mod+D}}), ili {{key:Mod+C}} pa {{key:Mod+V}}.

Nova kopija je **isti dio**: uredite jedan i svaka kopija se mijenja. Pojavljuje se 20 mm desno od svega što je već u sklopu, okrenuta na isti način kao kopija, i ostaje tamo dok je zglob ne postavi. {{ui:Zalijepi na isto mjesto}} ({{key:Mod+Shift+V}}) stavlja je točno tamo gdje je kopirani dio; spojite je da je pomaknete (pomak kliznog zgloba gura je duž osi).

Lijepljenje dijela kopiranog iz drugog sklopa donosi i dio, isto kao {{ui:Umetni}} iz njegove datoteke. {{ui:Dodaj kopiju}} u grupi Sklop radi isto što i {{ui:Dupliciraj}} i radi i bez odabira (kopira zadnji dio).

## Međuspremnik

- To je vlastiti međuspremnik programa PartCraft, a ne međuspremnik računala: geometriju programa PartCraft ne možete zalijepiti u drugi program, niti tekst u prikaze programa PartCraft.
- Čuva se u ovom pregledniku, pa druga kartica programa PartCraft može zalijepiti što ste kopirali. Čita se natrag i provjerava kao otvorena datoteka; sve što je oštećeno ili iz druge verzije se odbija.
- Dio s velikom uvezenom STEP datotekom može biti prevelik da ga preglednik čuva: tada se lijepi samo u ovoj kartici.
- U polju za broj ili u pretraživanju pomoći, {{key:Mod+C}} i {{key:Mod+V}} kopiraju i lijepe tekst kao obično.

Na listu crteža kopiranje i lijepljenje još nisu dostupni; {{ui:Izbriši}} i {{ui:Poništi odabir}} rade na odabranom simbolu. Vidi [Što još nije izrađeno](topic:not-built-yet).
