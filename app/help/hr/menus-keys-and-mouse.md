---
title: Izbornici, tipke i miš
summary: Odaberite stil izbornika koji odgovara načinu na koji već radite, dodijelite bilo kojoj naredbi vlastitu tipku, premjestite naredbe između kartica vrpce te postavite što kotačić i svaka tipka miša rade u 3D prikazu.
keywords: stil izbornika, izbornici, vrpca, alatna traka, stablo značajki, tipkovni prečaci, prečaci, tipke, prilagodi, ponovno dodijeli, miš, kotačić, obrni, smjer zumiranja, srednja tipka, orbita, pomicanje, izvoz, uvoz, prebacivanje, poznato
from: 8445b06c
---

Naredbe PartCrafta jednake su bez obzira kojim putem do njih dođete. **Stil izbornika** samo odlučuje gdje su na zaslonu, kako se zovu tamo i kojim tipkama se pokreću. Odaberite ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Izbornici, tipke i miš}}; promjena je odmah vidljiva, a ovaj preglednik je pamti.

## Dva stila

| Stil | Što dobijete |
|---|---|
| {{ui:PartCraft}} | Vlastita alatna traka PartCrafta: preklopnik radnog prostora, {{ui:File}}, Sketch, Features, Drawing, Assembly, Edit i View. Tipke {{key:S}} skica, {{key:F}} prilagodi, {{key:M}} mjeri, {{key:X}} pogled u presjeku. Početni stil. |
| {{ui:Stablo značajki}} | Vrpca složena onako kako je slažu programi mehaničkog CAD-a temeljenog na značajkama: izbornik {{ui:File}} (sa svim izvozima), brzi gumbi i kartice {{ui:Features}}, {{ui:Sketch}}, {{ui:Surfaces}}, {{ui:Evaluate}}, {{ui:Drawing}}, {{ui:Assembly}}, {{ui:Studies}} (radni prostori i njihovi alati), {{ui:Illustrate}} (ručni alati radnog prostora Illustrate; njegovi alati prvo prelaze na Illustrate) i {{ui:View}}. {{ui:Features}} počinje s {{ui:Sketch}}, jer dio počinje skicom. Dodatne tipke: {{key:E}} izvuci, {{key:H}} provrt, a {{key:V}} zatim slovo za prikaz: {{key:V}} {{key:F}} sprijeda, {{key:V}} {{key:B}} straga, {{key:V}} {{key:T}} odozgo, {{key:V}} {{key:O}} odozdo, {{key:V}} {{key:R}} desno, {{key:V}} {{key:L}} lijevo, {{key:V}} {{key:I}} izometrija, {{key:V}} {{key:N}} okomito na. U 3D prikazu srednja tipka orbitira, {{key:Shift}} i srednja tipka pomiču, desna tipka pomiče, a lijeva tipka samo odabire. |

Svaki stil zadržava {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} i {{key:Mod+A}}.

Alat drugog radnog prostora prvo prelazi u njega; alat Design odabran u drugom radnom prostoru vraća se prvo na Design. Alati skice čekaju skicu, alati za crtež čekaju list crteža, alati sklopa čekaju sklop: statusna traka kaže što treba prvo učiniti.

:::tip
U skici, na listu crteža, u sklopu i u ostalim radnim prostorima slova zadržavaju svoje značenje ovdje ({{key:L}} linija, {{key:R}} pravokutnik, {{key:J}} spoj …) u svakom stilu. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje. Tipka iz rasporeda PartCrafta koju je vaš stil dodijelio drugoj naredbi ne radi ništa, a statusna traka kaže gdje je ta naredba.
:::

## Prilagodite ga

1. Odaberite stil koji je najbliži onome što želite, zatim kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i izbornici}} pronađite naredbu (pomaže okvir za pretragu). {{ui:Dodaj tipku}}, pritisnite tipku ili dvije tipke zaredom. Kliknite tipku da je uklonite.
3. Uz vrpcu, {{ui:Gdje se nalazi}} premješta naredbu na drugu karticu i grupu, u izbornik {{ui:File}}, ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} postavite kotačić, tipke koje pomiču skicu i što svaka tipka radi u 3D prikazu.
5. Dajte mu ime i kliknite {{ui:Spremi}}.

Spremanje ugrađenog stila stvara vašu vlastitu kopiju („Moje stablo značajki”); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvjema naredbama, ili ona koja bi se izvršila prije nego što se može upisati tipka od dva slova, prikazana je crveno i mora se popraviti prije spremanja.

## Miš

- **Kotačić miša**: {{ui:Pomicanje prema gore približava}} (početno) ili {{ui:Pomicanje prema gore udaljava}}, i koliko brzo. Stezanje na touchpadu uvijek zumira u smjeru kojim se pomiču prsti.
- **Pomicanje skice**: srednjom tipkom, desnom tipkom ili obje. Klik desnom tipkom u skici i dalje završava korak alata.
- **Povlačenje u 3D prikazu**: {{ui:Svaki prikaz zasebno}} zadržava postavku PartCrafta ({{ui:Postavke}} › {{ui:PartCraft}}: lijeva orbitira ili srednja orbitira). Ili postavite svaku tipku na orbitu, pomicanje, zumiranje ili ništa; {{key:Shift}} s tipkom za orbitu pomiče. Klik bez povlačenja i dalje odabire.

## Ponesite ih sa sobom

{{ui:Izvoz}} sprema stil u uporabi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, s drugog računala ili od kolege. Uvezena datoteka može pokazivati samo na vlastite naredbe PartCrafta: sve ostalo u njoj se izostavlja i broji u statusnoj traci. {{ui:Obriši ovaj stil}} uklanja jedan od vaših.

:::note
Ove postavke ostaju u ovom pregledniku. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stila čini da se svaka aplikacija otvara u odgovarajućem stilu (vlastita alatna traka ili vrpca), s promjenama koje ste napravili u svakoj. Odabir drugog stila u jednoj aplikaciji mijenja samo nju.
:::

Srodno: [Tipke i miš](topic:keyboard) · [Postavke za PartCraft](topic:settings) · [Dolazak iz drugog parametarskog modelara](topic:coming-from)
