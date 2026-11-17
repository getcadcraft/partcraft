---
title: Meniji, tipke i miš
summary: Odaberi stil menija koji odgovara načinu na koji već radiš, dodijeli bilo kojoj naredbi svoju tipku, premjesti naredbe između kartica trake, i postavi šta točkić i svako dugme miša rade u 3D pogledu.
keywords: stil menija, meniji, traka, alatna traka, stablo značajki, prečice na tastaturi, vruće tipke, tipke, prilagodi, preslikaj, ponovno dodijeli, miš, točkić, invertuj, smjer zumiranja, srednje dugme, orbita, pomjeri pogled, izvoz, uvoz, prebacivanje, poznato
from: 8445b06c
---

PartCraft-ove naredbe su iste, bez obzira kojim putem im pristupiš. **Stil menija** samo odlučuje gdje su na ekranu, kako se tamo zovu i koje ih tipke pokreću. Odaberi jedan u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Meniji, tipke i miš}}; promjena je odmah, a ovaj pretraživač je pamti.

## Dva stila

| Stil | Šta dobijaš |
|---|---|
| {{ui:PartCraft}} | PartCraft-ova sopstvena alatna traka: prebacivač radnog prostora, Datoteka, Skica, Elementi, Crtež, Sklop, Uređivanje i Pogled. Tipke {{key:S}} skica, {{key:F}} uklopi, {{key:M}} izmjeri, {{key:X}} pogled presjeka. Početni stil. |
| {{ui:Stablo značajki}} | Traka raspoređena onako kako mehanički CAD programi zasnovani na elementima raspoređuju svoje: meni {{ui:Datoteka}} (sa svim izvozima), brza dugmad i kartice {{ui:Elementi}}, {{ui:Skica}}, {{ui:Površine}}, {{ui:Procjena}}, {{ui:Crtež}}, {{ui:Sklop}}, {{ui:Analize}} (radni prostori i njihovi alati), {{ui:Ilustracija}} (ručni alati radnog prostora Illustrate; njegovi alati prvo prebacuju na Illustrate) i {{ui:Pogled}}. {{ui:Elementi}} počinje sa {{ui:Skica}}, jer dio počinje od skice. Dodatne tipke: {{key:E}} izvlačenje, {{key:H}} rupa, a {{key:V}} zatim slovo za pogled: {{key:V}} {{key:F}} sprijeda, {{key:V}} {{key:B}} straga, {{key:V}} {{key:T}} gore, {{key:V}} {{key:O}} dolje, {{key:V}} {{key:R}} desno, {{key:V}} {{key:L}} lijevo, {{key:V}} {{key:I}} izometrija, {{key:V}} {{key:N}} normalno na. U 3D pogledu srednje dugme okreće (orbita), {{key:Shift}} i srednje dugme pomjeraju, desno dugme pomjera, a lijevo dugme samo odabire. |

Svaki stil zadržava {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} i {{key:Mod+A}}.

Alat drugog radnog prostora prvo prebacuje na njega; alat Design odabran u drugom radnom prostoru vraća prvo na Design. Alati skice čekaju skicu, alati crteža list crteža, alati sklopa sklop: statusna traka kaže šta prvo uraditi.

:::tip
U skici, na listi crteža, u sklopu i u drugim radnim prostorima, slova tamo zadržavaju svoje značenje ({{key:L}} linija, {{key:R}} pravougaonik, {{key:J}} spoj …) u svakom stilu. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje. Tipka PartCraft-ovog vlastitog rasporeda koju je tvoj stil dodijelio drugoj naredbi ne radi ništa, a statusna traka kaže gdje je otišla njena naredba.
:::

## Prilagodi po svom

1. Odaberi stil koji je najbliži onome što želiš, zatim klikni {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i meniji}} nađi naredbu (pomaže polje za pretragu). {{ui:Dodaj tipku}} i pritisni tipku, ili dvije tipke zaredom. Klikni tipku da je skineš.
3. Sa trakom, {{ui:Gdje stoji}} premješta naredbu na drugu karticu i panel, u meni {{ui:Datoteka}}, ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} postavi točkić, dugmad koja pomjeraju skicu i šta svako dugme radi u 3D pogledu.
5. Daj mu ime i klikni {{ui:Spasi}}.

Spašavanje ugrađenog stila pravi tvoju kopiju ("Moje stablo značajki"); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvjema naredbama, ili ona koja bi se pokrenula prije nego što se može upisati dvoslovna tipka, prikazuje se crveno i mora se ispraviti prije snimanja.

## Miš

- **Točkić miša**: {{ui:Skrolanje prema gore zumira unutra}} (početni) ili {{ui:Skrolanje prema gore zumira van}}, i koliko brzo. Štipanje na touchpadu uvijek zumira onako kako se pomjeraju prsti.
- **Pomjeri skicu sa**: srednjim dugmetom, desnim dugmetom, ili oboje. Desni klik u skici i dalje završava korak alata.
- **Prevlačenje u 3D pogledu**: {{ui:Zasebno za svaki pogled}} zadržava postavku PartCraft-a ({{ui:Postavke}} › {{ui:PartCraft}}: lijevo okreće, ili srednje okreće). Ili postavi svako dugme na okretanje, pomjeranje, zumiranje ili ništa; {{key:Shift}} sa dugmetom za okretanje pomjera. Klik bez prevlačenja i dalje odabire.

## Ponesi sa sobom

{{ui:Izvoz}} čuva stil u upotrebi kao mali `.ccinput.json` datoteku; {{ui:Uvezi…}} dodaje jednu, sa drugog računara ili od kolege. Uvezena datoteka može pokazivati samo na PartCraft-ove vlastite naredbe: sve drugo se izostavlja i broji u statusnoj traci. {{ui:Izbriši ovaj stil}} uklanja jedan tvoj.

:::note
Ove postavke ostaju u ovom pretraživaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stila čini da se svaka aplikacija otvara u odgovarajućem stilu (njena vlastita alatna traka, ili traka), sa promjenama koje si napravio u svakoj aplikaciji. Odabir drugog stila u jednoj aplikaciji mijenja samo tu aplikaciju.
:::

Povezano: [Tipke i miš](topic:keyboard) · [PartCraft postavke](topic:settings) · [Dolazak iz drugog parametarskog modelera](topic:coming-from)
