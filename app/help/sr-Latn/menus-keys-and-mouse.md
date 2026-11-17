---
title: Meniji, tasteri i miš
summary: Izaberite stil menija koji odgovara načinu na koji već radite, dodelite svakoj komandi sopstveni taster, premestite komande između kartica trake i podesite šta točkić i svako dugme miša rade u 3D prikazu.
keywords: stil menija, meniji, traka, traka alata, stablo elemenata, tastaturne prečice, prečice, tasteri, prilagodi, ponovo dodeli, miš, točkić, obrni, smer zumiranja, srednje dugme, orbit, pomeranje, izvoz, uvoz, prebacivanje, poznato
from: 8445b06c
---

Komande PartCraft-a su iste bez obzira kako do njih dođete. **Stil menija** samo odlučuje gde se nalaze na ekranu, kako se tamo zovu i kojim tasterima se pokreću. Izaberite jedan u {{ui:Podešavanja}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Meniji, tasteri i miš}}; promena je odmah, a ovaj pregledač je pamti.

## Dva stila

| Stil | Šta dobijate |
|---|---|
| {{ui:PartCraft}} | PartCraft-ova sopstvena traka alata: prebacivač radnih prostora, {{ui:Datoteka}}, {{ui:Skica}}, {{ui:Osobine}}, {{ui:Crtež}}, {{ui:Sklop}}, Izmeni i {{ui:Pogled}}. Tasteri {{key:S}} skica, {{key:F}} uklopi, {{key:M}} izmeri, {{key:X}} prikaz preseka. Početni. |
| {{ui:Stablo elemenata}} | Traka raspoređena kako mašinski CAD programi zasnovani na elementima raspoređuju svoje: meni {{ui:Datoteka}} (sa svim izvozima), brza dugmad i kartice {{ui:Osobine}}, {{ui:Skica}}, {{ui:Površi}}, {{ui:Analiza}}, {{ui:Crtež}}, {{ui:Sklop}}, {{ui:Studije}} (radni prostori i njihovi alati), {{ui:Ilustracija}} (ručni alati radnog prostora Ilustracija; njeni alati prvo prebacuju na Ilustraciju) i {{ui:Pogled}}. {{ui:Osobine}} počinje sa {{ui:Skica}}, jer deo počinje od skice. Dodatni tasteri: {{key:E}} izvlačenje, {{key:H}} rupa, i {{key:V}} pa slovo za pogled: {{key:V}} {{key:F}} napred, {{key:V}} {{key:B}} pozadi, {{key:V}} {{key:T}} gore, {{key:V}} {{key:O}} dole, {{key:V}} {{key:R}} desno, {{key:V}} {{key:L}} levo, {{key:V}} {{key:I}} izometrija, {{key:V}} {{key:N}} normalno na. U 3D prikazu srednje dugme orbitira, {{key:Shift}} i srednje dugme pomeraju pogled, desno dugme pomera pogled, a levo dugme samo bira. |

Svaki stil zadržava {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} i {{key:Mod+A}}.

Alat drugog radnog prostora prvo se prebacuje na njega; alat Dizajn izabran u drugom radnom prostoru vraća se prvo na Dizajn. Alati skice čekaju skicu, alati crteža list crteža, alati sklopa sklop: statusna traka kaže šta prvo treba uraditi.

:::tip
U skici, na listu crteža, u sklopu i u ostalim radnim prostorima, slova tamo zadržavaju svoje značenje ({{key:L}} linija, {{key:R}} pravougaonik, {{key:J}} spoj …) u svakom stilu. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvek zadržavaju svoja. Taster iz PartCraft-ovog sopstvenog rasporeda koji je vaš stil dodelio drugoj komandi ne radi ništa, a statusna traka kaže gde je otišla njegova komanda.
:::

## Napravite sopstveno

1. Izaberite stil koji je najbliži onome što želite, pa kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tasteri i meniji}} nađite komandu (pomaže polje za pretragu). {{ui:Dodaj taster}} i pritisnite taster, ili dva tastera zaredom. Kliknite taster da ga skinete.
3. Uz traku, {{ui:Gde se nalazi}} premešta komandu na drugu karticu i panel, u meni {{ui:Datoteka}}, ili na {{ui:Samo tasteri}}.
4. Na {{ui:Miš}} podesite točkić, dugmad koja pomeraju skicu i šta svako dugme radi u 3D prikazu.
5. Dajte mu ime i kliknite {{ui:Sačuvaj}}.

Čuvanje ugrađenog stila pravi vašu kopiju („Moje stablo elemenata“); ugrađeni se nikad ne menja. Taster dodeljen dvema komandama, ili onaj koji bi se pokrenuo pre nego što može da se otkuca dvoslovni taster, prikazuje se crveno i mora se ispraviti pre čuvanja.

## Miš

- **Točkić miša**: {{ui:Skrolovanje nagore uvećava}} (početni) ili {{ui:Skrolovanje nagore smanjuje}}, i koliko brzo. Stiskanje na tačpedu uvek zumira u smeru kretanja prstiju.
- **Pomeranje skice pomoću**: srednjeg dugmeta, desnog dugmeta, ili oba. Desni klik u skici i dalje završava korak alata.
- **Prevlačenje u 3D prikazu**: {{ui:Svaki prikaz zasebno}} zadržava PartCraft-ovu postavku ({{ui:Podešavanja}} › {{ui:PartCraft}}: levo okreće, ili srednje okreće). Ili postavite svako dugme na okretanje (orbit), pomeranje, zumiranje ili ništa; {{key:Shift}} sa dugmetom za okretanje pomera. Klik bez prevlačenja i dalje bira.

## Ponesite ga sa sobom

{{ui:Izvezi}} čuva stil koji se koristi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, sa drugog računara ili od kolege. Uvezena datoteka može da upućuje samo na PartCraft-ove sopstvene komande: sve drugo u njoj se izostavlja i broji u statusnoj traci. {{ui:Izbriši ovaj stil}} uklanja jedan od vaših.

:::note
Ova podešavanja ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu (sopstvena traka alata ili traka), uz promene koje ste napravili u svakoj aplikaciji. Izbor drugog stila u jednoj aplikaciji menja samo tu aplikaciju.
:::

Povezano: [Tasteri i miš](topic:keyboard) · [PartCraft podešavanja](topic:settings) · [Dolazak iz drugog parametarskog modelara](topic:coming-from)
