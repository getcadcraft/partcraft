---
title: PartCraft podešavanja
summary: Izaberite koje dugme miša okreće prikaz, učinite da pomeranje prsta na touchpadu okreće i pomera deo, uključite ili isključite automatske relacije pri skiciranju i podesite koliko niti koriste rešavači simulacije.
keywords: podešavanja, postavke, opcije, miš, srednje dugme, dugme točkića, orbita, rotacija, okretanje, touchpad, trackpad, skrolovanje, prevlačenje, štipanje, relacije, ograničenja, automatska ograničenja, automatske relacije, privlačenje, koincidencija, niti, niti rešavača, jezgra, procesori, više niti, brže rešavanje, paralelno
from: 759edcaf
---

Otvorite {{ui:Podešavanja}} preko zupčanika u traci aplikacije ili pomoću {{key:Mod+,}}. Prva kartica, {{ui:PartCraft}}, sadrži podešavanja koja pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži ona koja dele sve CadCraft aplikacije (tema, traka alata, paneli). Podešavanja PartCraft-a postoje samo u aplikaciji: menjate ih ovde, a ovaj pregledač ih pamti. {{ui:Vrati PartCraft podešavanja na početno}} vraća sve na početak.

## Okretanje prikaza

- **Levo dugme** (početna vrednost): prevucite levim dugmetom da okrenete deo; prevucite desnim ili srednjim dugmetom da pomerate pogled.
- **Srednje dugme**: pritisnite točkić i prevucite da okrenete deo; držite {{key:Shift}} (ili {{key:Ctrl}}, ili ⌘) sa srednjim dugmetom, ili prevucite desnim dugmetom, da pomerate pogled. Levo dugme samo bira strane, ivice i ravni, pa klik koji se malo pomeri nikada ne okreće deo. Mnogi CAD programi rade na ovaj način.

Točkić zumira na mestu pokazivača u oba slučaja. U skici, desno i srednje dugme i dalje pomeraju pogled.

## Skrolovanje: točkić miša ili touchpad

- **Sam odredi** (početna vrednost): PartCraft prati skrolovanje. Bočno ili fino skrolovanje, kakvo šalje touchpad, okreće deo; celi zupci točkića zumiraju.
- **Točkić miša**: skrolovanje uvek zumira ka pokazivaču.
- **Touchpad**: prevucite dvema prstima da okrenete deo, držite {{key:Shift}} i prevucite da pomerate pogled, a štipnite za zum. U skici dvoprsti prevlak pomera skicu.

Štipanje zumira u svakom izboru. Ako „Sam odredi“ pogreši za vaš miš ili touchpad, izaberite onaj koji imate. Više u [Touchpad, dodir i mali ekrani](topic:trackpad-and-touch).

## Skiciranje: dodavanje relacija dok crtate

**Dodaj relacije dok crtaš** (uključeno na početku): klik koji se privlači tački čini novu tačku koincidentnom sa njom, klik na krivu stavlja tačku na tu krivu, a linija nacrtana gotovo vodoravno ili uspravno postaje vodoravna ili uspravna. Pogledajte [Relacije i kote](topic:relations-dimensions).

Isključite ga kada želite da postavite geometriju blizu druge geometrije bez vezivanja za nju. Pokazivač se i dalje privlači tačkama i krivama, ali ništa se ne spaja: linije nacrtane u lancu ne dele krajeve, pa ih prevlačenje može razdvojiti. Relacije koje želite sami dodajte iz desnog panela. Zatvoren profil se i dalje izvlači kada se krajevi sastanu.

:::note
Podešavanje menja samo ono što novo crtanje dodaje. Relacije koje su već u skici ostaju, a alat Zaobljenje i dalje pravi svoj tangentni luk i poluprečnik.
:::

## Skiciranje: kotiranje dok crtate

**Kotiraj dok crtaš** (uključeno na početku): dok se crta linija, pravougaonik, krug ili luk, ukucavanje broja popunjava kutiju za veličinu pored pokazivača ({{key:Tab}} prelazi na sledeću kutiju), a {{key:Enter}} crta oblik u toj veličini, sa upravljajućom kotom za svaku veličinu koju ste ukucali. Isključeno: ukucavanje broja dok crtate ne radi ništa, a oblici se crtaju samo klikovima. Pogledajte [Ukucajte veličinu dok crtate](topic:sketch-basics#type-the-size-as-you-draw).

## Indikator ugla

Šta se prikazuje u uglu 3D prikaza: **Kocka pogleda** (početna vrednost; gore desno — kliknite stranu, ivicu ili ugao da gledate odatle, prevucite je da orbitirate, prevucite njen prsten kompasa da okrenete model), **Ikona osa** (mali marker X, Y, Z u donjem levom uglu koji se okreće sa pogledom: X crveno, Y zeleno, Z plavo) ili **Nijedna**. Nijedno se ne prikazuje dok skicirate ili na listu crteža. Pogledajte [Kocka pogleda](topic:view-cube).

## Niti rešavača

Koliko niti simulacioni rešavači smeju da koriste. **Automatski** (početna vrednost) uzima jednu manje od logičkih procesora računara (najviše 16), da stranica ostane odzivna dok se studija rešava; ili izaberite broj. Velike voksel studije, izvijanje, napon kroz vreme i tok rešavaju se brže na više niti (oko 2× na 4 niti za 80.000 kocki po našim merenjima, više na praznom računaru); modeli sa manje od oko 20.000 nepoznatih ostaju na jednoj niti, jer pokretanje niti košta više nego što uštedi. Rešenje na više niti daje isti odgovor kao na jednoj niti (do zaokruživanja: zbirovi se sabiraju drugim redosledom). Rezultati svake studije navode **N niti** ili **1 nit** sa razlogom pod **Rešavač**.

Niti zahtevaju da stranica bude **unakrsno izolovana** (pregledač dozvoljava radnicima da dele memoriju samo tada). Laboratorijska stranica jeste; tamo gde nije, podešavanje kaže („Ova stranica nije unakrsno izolovana, pa rešavači rade na jednoj niti bez obzira na izbor ovde.“) i svako rešavanje koristi jednu nit. Sve ostalo radi isto, a odgovori su isti.

Tokovi laminarnog strujanja takođe koriste niti (oko 2.5× na 4 niti za 54.000 ćelija fluida, isti odgovor do poslednje cifre). Rešavač kvadratnog tetraedra i prenos toplote rade na jednoj niti: na našem test računaru, niti su se pokazale sporijim (ograničeni su brzinom memorije i korakom koji se ne može podeliti).

### Na sopstvenom veb serveru

Ako pokrećete PartCraft sa sopstvenog servera, radi onako kako je poslužen. Za niti rešavača, neka server šalje dva zaglavlja uz PartCraft stranicu:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Na Apache-u, u `.htaccess` fascikle (treba mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Na nginx-u, u `location` bloku koji poslužuje PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Ponovo učitajte stranicu: Podešavanja › Niti rešavača tada nudi **Automatski** sa brojem procesora vašeg računara. Drugo zaglavlje tera pregledač da odbije sve što stranica učita sa drugog sajta koji to ne dozvoljava, što je u redu za PartCraft sam za sebe (učitava sve iz svoje fascikle).
