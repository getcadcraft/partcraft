---
title: Kopiranje, lijepljenje i dupliciranje
summary: Kopirajte geometriju skice, značajke i dijelove sklopa; lijepite gdje kliknete ili na istom mjestu; dupliciranje u jednom koraku; i šta ide sa kopijom, a šta ne.
keywords: kopiraj, zalijepi, izreži, dupliciraj, međuspremnik, zalijepi na mjestu, odaberi sve, poništi odabir, izbriši, ctrl c, ctrl v, ctrl d, instanca, komponenta, kopiraj skicu, kopiraj značajku, kopiraj dio
from: 611307d7
---

Grupa {{ui:Uredi}} na alatnoj traci sadrži {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}} i meni {{ui:Više}} sa {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na mjestu}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}, svaki sa svojim tasterom. Šta kopiraju zavisi od toga gdje ste: geometriju u otvorenoj skici, značajku u historiji, ili dio u sklopu.

Stavka u sivoj boji ne može djelovati u tom trenutku. Prijeđite preko nje: njen tooltip kaže zašto, npr. "Prvo izaberite geometriju skice" ili "Međuspremnik sadrži Sketch2 i Extrude2: značajke se lijepe u historiju, pa prvo izađite iz skice".

| Radnja | Taster | U skici | U historiji | U sklopu |
|---|---|---|---|---|
| Kopiraj | {{key:Mod+C}} | Izabrane tačke i krive | Izabrana skica, izvlačenje, rotiranje ili rupa (sa svojom skicom) | Izabrani dio |
| Izreži | {{key:Mod+X}} | Kopiraj, zatim izbriši | Kopiraj, zatim izbriši značajku | Kopiraj, zatim ukloni dio |
| Zalijepi | {{key:Mod+V}} | Kopija prati pokazivač; kliknite gdje ide | Dodaje kopiju na kraj historije | Nova kopija pored ostalih dijelova |
| Zalijepi na mjestu | {{key:Mod+Shift+V}} | Na istim koordinatama | Isto kao Zalijepi | Na istom mjestu kao kopirani dio |
| Dupliciraj | {{key:Mod+D}} | Kopira i pomjera u jednom potezu; međuspremnik ostaje netaknut | Druga kopija odmah nakon vas | Druga kopija pored ostalih dijelova |
| Izbriši | {{key:Delete}} | Izbor | Značajku (pita ako je druge koriste) | Dio ili spoj |
| Odaberi sve | {{key:Mod+A}} | Sve u skici | Nije dostupno | Nije dostupno |
| Poništi odabir | {{key:Esc}} | Briše izbor | Briše izbor i odabire | Briše izbor |

Svako lijepljenje, dupliciranje i izrezivanje je jedan korak u listi poništavanja: {{key:Mod+Z}} ga vraća, {{key:Mod+Y}} ga ponovo postavlja.

## U skici

1. Izaberite šta kopirati: kliknite na to, {{key:Shift}}+klik za još, povucite prozor, ili pritisnite {{key:Mod+A}} za sve.
2. Pritisnite {{key:Mod+C}} ili izaberite {{ui:Kopiraj}}. Statusna traka kaže šta je kopirano.
3. Pritisnite {{key:Mod+V}} ili izaberite {{ui:Zalijepi}}. Isprekidana kopija prati pokazivač, držana za svoju sredinu. Hvata se za tačke: stavite centar kopiranog kruga na tačku tako što kliknete tu tačku.
4. Kliknite gdje ide. Zalijepljena geometrija ostaje izabrana, pa je možete povući ili odmah dodati relacije. {{key:Esc}} otkazuje lijepljenje.

Što dolazi sa kopijom:

- Kopirana linija, krug ili luk donose svoje krajnje tačke i centar.
- Relacije i kote **između kopiranih stavki** dolaze: kopirani pravougaonik je i dalje pravougaonik, sa svojim dimenzijama.
- Relacije **na geometriju koju niste kopirali**, i na ishodište, se odbacuju. Statusna traka ih broji: "2 relacije na geometriju van kopije neće doći". Zalijepljena kopija je tako slobodna za pomjeranje dok je ne vežete relacijama ili kotama.
- Fiksna tačka ostaje fiksna, na novoj poziciji.

{{ui:Zalijepi na mjestu}} stavlja kopiju tačno na koordinate originala, u ovoj skici ili drugoj: zgodno za prenos profila iz jedne skice u drugu. U istoj skici kopija leži preko originala; povucite je u stranu.

{{ui:Dupliciraj}} ({{key:Mod+D}}) kopira izbor i odmah počinje da ga postavlja, bez diranja onoga što je na međuspremniku.

:::tip
Da ponovite centar rupe ili utor nekoliko puta, kopirajte ga jednom i zalijepite nekoliko puta: svaki {{key:Mod+V}} počinje novu kopiju koja prati pokazivač.
:::

## U historiji

1. Kliknite skicu, izvlačenje, rotiranje ili rupu u historiji.
2. {{key:Mod+C}} kopira. Značajka zasnovana na skici kopira se zajedno sa svojom skicom.
3. {{key:Mod+V}} dodaje kopiju na kraj historije (na traci za vraćanje kad ste se vratili), sa novim imenima kao Sketch3 i Extrude2.

Kopija stoji na istoj ravnini ili površini kao original, pa se gradi na njemu i dio izgleda isto. Izaberite novu skicu i promijenite joj ravninu u desnom panelu, ili je otvorite i povucite ili ponovo kotirajte profil, da pomjerite kopiju.

- Lijepljenje u **drugi dio**: otvorite taj dio i pritisnite {{key:Mod+V}}. Kad je skica kopije bila na površini koju taj dio nema, ide na prednju ravninu, a statusna traka to kaže.
- {{ui:Dupliciraj}} radi kopiranje i lijepljenje u jednom koraku, unutar istog dijela.
- {{ui:Izreži}} kopira značajku, zatim je briše (pita prvo ako je druge značajke koriste).

Uzorci, ogledala, zaobljenja, skošenja, ljuske i uvezena tijela ne mogu se kopirati: zavise od ivica, površina ili značajki izabranih u ovom dijelu. Kopirajte skicu ili značajku na kojoj su zasnovani, ili napravite uzorak sa {{ui:Linear}} ili {{ui:Circular}}.

## U sklopu

1. Kliknite dio u prikazu ili na listi lijevo.
2. Izaberite {{ui:Dupliciraj}} ({{key:Mod+D}}), ili {{key:Mod+C}} pa {{key:Mod+V}}.

Nova kopija je **isti dio**: uredite jedan i svaka kopija se mijenja. Pojavljuje se 20 mm desno od svega što je već u sklopu, okrenuta isto kao kopija, i ostaje tu dok je spoj ne postavi. {{ui:Zalijepi na mjestu}} ({{key:Mod+Shift+V}}) stavlja je tačno gdje je kopirani dio; spojite je da je pomjerite (pomak kliznog spoja je gura duž njega).

Lijepljenje dijela kopiranog iz drugog sklopa donosi dio sa sobom, isto kao {{ui:Umetni}} iz njegove datoteke. {{ui:Dodaj kopiju}} u grupi Sklop radi isto kao {{ui:Dupliciraj}}, i radi kad ništa nije izabrano (kopira zadnji dio).

## Međuspremnik

- To je međuspremnik PartCraft-a, a ne računara: ne možete lijepiti PartCraft geometriju u drugi program, ili tekst u prikaze PartCraft-a.
- Čuva se u ovom pregledaču, pa drugi PartCraft tab može zalijepiti ono što ste kopirali. Čita se nazad i provjerava kao otvorena datoteka; oštećeno ili iz druge verzije se odbija.
- Dio sa velikom uvezenom STEP datotekom može biti prevelik za pregledač da ga čuva: tada se lijepi samo u ovom tabu.
- U polju za broj ili pretrazi pomoći, {{key:Mod+C}} i {{key:Mod+V}} kopiraju i lijepe tekst kao obično.

Na listu crteža, kopiranje i lijepljenje još nisu dostupni; {{ui:Izbriši}} i {{ui:Poništi odabir}} rade na izabranom simbolu. Vidi [Još nije izrađeno](topic:not-built-yet).
