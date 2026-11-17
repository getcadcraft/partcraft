---
title: Postavke PartCraft
summary: Odaberite koja tipka miša okreće prikaz, neka pomicanje prstom na touchpadu okreće i pomiče dio, uključite ili isključite automatska ograničenja pri skiciranju i postavite koliko niti koriste rješavači simulacije.
keywords: postavke, preferencije, opcije, miš, srednja tipka, tipka kotačića, orbita, zakretanje, okretanje, touchpad, trackpad, pomicanje, prevlačenje, štipanje, ograničenja, automatska ograničenja, hvatanje, podudarnost, niti, niti rješavača, jezgre, procesori, višenitno, brže rješavanje, paralelno
from: 759edcaf
---

Otvorite {{ui:Postavke}} ikonom zupčanika u traci aplikacije ili pomoću {{key:Mod+,}}. Prva kartica, {{ui:PartCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Općenito}} sadrži one koje dijele sve CadCraft aplikacije (tema, alatna traka, ploče). Postavke PartCrafta postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj preglednik ih pamti. {{ui:Vrati PartCraft postavke na zadano}} vraća sve na početne vrijednosti.

## Okretanje prikaza

- **Lijeva tipka** (početna): povlačenjem lijevom tipkom okrećete dio; povlačenjem desnom ili srednjom tipkom pomičete prikaz.
- **Srednja tipka**: pritisnite kotačić i povucite da okrenete dio; držite {{key:Shift}} (ili {{key:Ctrl}}, ili ⌘) uz srednju tipku ili povucite desnom tipkom da pomaknete prikaz. Lijeva tipka samo odabire plohe, bridove i ravnine, pa klik koji se malo pomakne nikad ne okreće dio. Mnogi CAD programi rade na ovaj način.

Kotačić u oba slučaja zumira prema pokazivaču. U skici desna i srednja tipka pomiču prikaz kao i prije.

## Pomicanje: kotačić miša ili touchpad

- **Neka sam odredi** (početna): PartCraft prati pomicanje. Bočno ili sitno pomicanje, kakvo šalje touchpad, okreće dio; cijeli zarezi kotačića zumiraju.
- **Kotačić miša**: pomicanje uvijek zumira prema pokazivaču.
- **Touchpad**: prevucite dvama prstima da okrenete dio, držite {{key:Shift}} i prevucite da pomaknete prikaz, a štipanjem zumirajte. U skici prevlačenje dvama prstima pomiče skicu.

Štipanje zumira u svakom izboru. Ako „Neka sam odredi” pogodi krivo za vaš miš ili touchpad, odaberite onaj koji imate. Više u [Touchpad, dodir i mali zasloni](topic:trackpad-and-touch).

## Skiciranje: dodajte ograničenja dok crtate

**Dodajte ograničenja dok crtate** (uključeno na početku): klik koji se hvata za točku čini novu točku podudarnom s njom, klik na krivulju stavlja točku na tu krivulju, a linija nacrtana gotovo vodoravno ili okomito postaje vodoravna ili okomita. Pogledajte [Ograničenja i kote](topic:relations-dimensions).

Isključite ga kada želite postaviti geometriju blizu druge geometrije bez povezivanja. Pokazivač se i dalje hvata za točke i krivulje, ali se ništa ne spaja: linije nacrtane u nizu ne dijele krajeve, pa ih povlačenje može razdvojiti. Ograničenja koja želite dodajte sami iz desne ploče. Zatvoreni profil se i dalje izvlači kada se krajevi spoje.

:::note
Postavka mijenja samo ono što novo crtanje dodaje. Ograničenja koja već postoje u skici ostaju, a alat Zaobli i dalje stvara svoj tangentni luk i radijus.
:::

## Skiciranje: kotiranje dok crtate

**Kotiranje dok crtate** (uključeno na početku): dok se crta linija, pravokutnik, kružnica ili luk, upisivanje broja ispunjava okvir veličine uz pokazivač ({{key:Tab}} prelazi na sljedeći okvir), a {{key:Enter}} crta oblik u toj veličini, s pogonskom kotom za svaku upisanu veličinu. Isključeno: upisivanje broja dok crtate ne čini ništa, a oblici se crtaju samo klikovima. Pogledajte [Upišite veličinu dok crtate](topic:sketch-basics#type-the-size-as-you-draw).

## Pokazivač u kutu

Što se prikazuje u kutu 3D prikaza: **ViewCube** (početna; gore desno — kliknite plohu, brid ili vrh da pogledate odozgo, povucite ga da zakrećete prikaz, povucite njegov prsten kompasa da okrenete model), **Ikona osi** (mali marker X, Y, Z u donjem lijevom kutu koji se okreće s prikazom: X crvena, Y zelena, Z plava) ili **Nema**. Ništa od toga se ne prikazuje dok skicirate ili na listu crteža. Pogledajte [ViewCube](topic:view-cube).

## Niti rješavača

Koliko niti mogu koristiti rješavači simulacije. **Automatski** (početna) uzima jednu manje od logičkih procesora računala (najviše 16), tako da stranica ostaje odzivna dok se studija rješava; ili odaberite broj. Velike studije s vokselima, izvijanje, naprezanje tijekom vremena i strujanje brže se rješavaju na više niti (oko 2× na 4 niti za 80,000 kocaka prema našim mjerenjima, više na praznom računalu); modeli s manje od oko 20,000 nepoznanica ostaju na jednoj niti, jer pokretanje niti košta više nego što uštede. Rješenje s više niti daje isti odgovor kao i s jednom niti (do zaokruživanja: zbrojevi se zbrajaju drugim redoslijedom). Rezultati svake studije navode **N niti** ili **1 nit** s razlogom pod **Rješavač**.

Niti zahtijevaju da stranica bude **izolirana između izvora** (preglednik dopušta radnim procesima dijeljenje memorije samo tada). Laboratorijska stranica jest; gdje nije, postavka to kaže („Ova stranica nije izolirana između izvora, pa rješavači rade na jednoj niti bez obzira na ovdje odabrano.”) i svako rješavanje koristi jednu nit. Sve ostalo radi jednako, a odgovori su isti.

Studije laminarnog strujanja također koriste niti (oko 2.5× na 4 niti za 54,000 ćelija fluida, isti odgovor do zadnje znamenke). Rješavač kvadratnih tetraedara i prijenos topline rade na jednoj niti: na našem probnom računalu niti su bile sporije (ograničeni su brzinom memorije i jednim korakom koji se ne može podijeliti).

### Na vašem web poslužitelju

Ako pokrećete PartCraft s vlastitog poslužitelja, radi kako je poslužen. Za niti rješavača neka poslužitelj uz stranicu PartCrafta šalje dva zaglavlja:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Na Apacheju, u `.htaccess` datoteci mape (potreban je mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Na nginxu, u bloku `location` koji poslužuje PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Ponovno učitajte stranicu: Postavke › Niti rješavača tada nude **Automatski** s brojem procesora vašeg računala. Drugo zaglavlje tjera preglednik da odbije sve što stranica učitava s drugog mjesta koje to ne dopušta, što je u redu za PartCraft samostalno (sve učitava iz vlastite mape).
