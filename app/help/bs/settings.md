---
title: Postavke PartCrafta
summary: Izaberite koje dugme miša okreće prikaz, učinite da pomicanje prstom na sensor podlozi okreće i pomjera dio, uključite ili isključite automatske relacije pri skiciranju i odredite koliko niti koriste rješavači simulacije.
keywords: postavke, preference, opcije, miš, srednje dugme, dugme točkića, orbita, rotiraj, okreni, sensorska podloga, touchpad, skrolovanje, prevlačenje, štipanje, relacije, ograničenja, automatska ograničenja, automatske relacije, hvatanje, koincidencija, niti, niti rješavača, jezgra, procesori, višenitno, brže rješavanje, paralelno
from: 759edcaf
---

Otvorite {{ui:Postavke}} preko zupčanika u traci aplikacije ili {{key:Mod+,}}. Prva kartica, {{ui:PartCraft}}, sadrži postavke koje pripadaju ovoj aplikaciji; {{ui:Opšte}} sadrži one koje dijele sve CadCraft aplikacije (tema, traka s alatima, paneli). Postavke PartCrafta postoje samo u aplikaciji: mijenjate ih ovdje, a ovaj preglednik ih pamti. {{ui:Resetuj postavke PartCrafta}} vraća sve na početak.

## Okretanje prikaza

- **Lijevo dugme** (početno): prevucite lijevim dugmetom da okrenete dio; prevucite desnim ili srednjim dugmetom da pomjerite pogled.
- **Srednje dugme**: pritisnite točkić i prevucite da okrenete dio; držite {{key:Shift}} (ili {{key:Ctrl}}, ili ⌘) sa srednjim dugmetom, ili prevucite desnim dugmetom, da pomjerite pogled. Lijevo dugme samo bira površine, ivice i ravnine, pa klik koji se malo pomjeri nikada ne okreće dio. Mnogi CAD programi rade ovako.

Točkić zumira prema pokazivaču u oba slučaja. U skici desno i srednje dugme pomjeraju pogled kao i prije.

## Skrolovanje: točkić miša ili sensor podloga

- **Odredi sam** (početno): PartCraft prati skrolovanje. Bočno ili fino skrolovanje, kakvo šalje sensor podloga, okreće dio; cijeli koraci točkića zumiraju.
- **Točkić miša**: skrolovanje uvijek zumira prema pokazivaču.
- **Sensor podloga**: prevucite s dva prsta da okrenete dio; držite {{key:Shift}} i prevucite da pomjerite pogled; štipnite za zum. U skici dvoprsto prevlačenje pomjera skicu.

Štipanje zumira u svakom izboru. Ako "Odredi sam" pogrešno pogodi za vaš miš ili sensor podlogu, izaberite onaj koji imate. Više u [Sensor podloga, dodir i mali ekrani](topic:trackpad-and-touch).

## Skiciranje: dodajte relacije dok crtate

**Dodaj relacije dok crtaš** (uključeno na početku): klik koji se hvata za tačku čini novu tačku koincidentnom s njom, klik na krivu stavlja tačku na tu krivu, a linija nacrtana gotovo vodoravno ili uspravno postaje vodoravna ili uspravna. Vidi [Relacije i kote](topic:relations-dimensions).

Isključite kada želite postaviti geometriju blizu druge geometrije bez vezivanja za nju. Pokazivač se i dalje hvata za tačke i krive, ali ništa se ne spaja: linije nacrtane u lancu ne dijele krajeve, pa ih prevlačenje može razdvojiti. Dodajte relacije koje želite sami iz desnog panela. Zatvoreni profil se i dalje izvlači kada se njegovi krajevi spoje.

:::note
Postavka mijenja samo ono što novo crtanje dodaje. Relacije koje već postoje u skici ostaju, a alat Zaobljenje i dalje pravi svoj tangentni luk i radijus.
:::

## Skiciranje: kotirajte dok crtate

**Kotiraj dok crtaš** (uključeno na početku): dok se linija, pravougaonik, krug ili luk crta, upisivanje broja puni okvir veličine pored pokazivača ({{key:Tab}} ide na sljedeći okvir), a {{key:Enter}} crta oblik na toj veličini, s upravljajućom kotom za svaku veličinu koju ste upisali. Isključeno: upisivanje broja dok crtate ne radi ništa, a oblici se crtaju samo klikovima. Vidi [Upišite veličinu dok crtate](topic:sketch-basics#type-the-size-as-you-draw).

## Indikator u uglu

Šta se prikazuje u uglu 3D prikaza: **Kocka pogleda** (početno; gore desno — kliknite površinu, ivicu ili ugao da gledate odatle, prevucite je da orbitirate, prevucite njen prsten kompasa da okrenete model), **Ikona osa** (mali marker X, Y, Z dolje lijevo, koji se okreće s pogledom: X crveno, Y zeleno, Z plavo) ili **Ništa**. Nijedno se ne prikazuje dok skicirate ili na listu crteža. Vidi [Kocka pogleda](topic:view-cube).

## Niti rješavača

Koliko niti simulacijski rješavači smiju koristiti. **Automatski** (početno) uzima jednu manje od logičkih procesora računara (najviše 16), da stranica ostane odzivna dok studija se rješava; ili izaberite broj. Velike voksel studije, izvijanje, naprezanje kroz vrijeme i tok rješavaju se brže na više niti (oko 2× na 4 niti za 80.000 kocki prema našim mjerenjima, više na praznom računaru); modeli ispod oko 20.000 nepoznatih ostaju na jednoj niti, jer pokretanje niti košta više nego što uštedi. Rješavanje s nitima daje isti odgovor kao jedna nit (do zaokruživanja: zbiri se dodaju drugačijim redoslijedom). Rezultati svake studije navode **N niti** ili **1 nit** s razlogom pod **Rješavač**.

Niti zahtijevaju da stranica bude **izolovana po porijeklu (cross-origin isolated)**, jer preglednik tada dozvoljava radnicima da dijele memoriju. Laboratorijska stranica jeste; gdje nije, postavka to kaže ("Ova stranica nije izolovana po porijeklu, pa rješavači rade na jednoj niti bez obzira na to što je ovdje izabrano.") i svako rješavanje koristi jednu nit. Sve ostalo radi isto, a odgovori su isti.

Studije laminarnog strujanja također koriste niti (oko 2,5× na 4 niti za 54.000 ćelija fluida, isti odgovor do posljednje cifre). Rješavač kvadratnog tetraedra i prijenos toplote rade na jednoj niti: pokretanje niti na njima je izmjereno sporije na našem test računaru (ograničeni su brzinom memorije i korakom koji se ne može podijeliti).

### Na vašem web serveru

Ako pokrećete PartCraft s vlastitog servera, radi kako je poslužen. Za niti rješavača, neka server šalje dva zaglavlja uz stranicu PartCrafta:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Na Apache, u `.htaccess` mapi (treba mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Na nginx, u `location` bloku koji poslužuje PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Ponovo učitajte stranicu: Postavke › Niti rješavača tada nudi **Automatski** s brojem procesora vašeg računara. Drugo zaglavlje natjera preglednik da odbije sve što stranica učita s drugog sajta a koji to ne dozvoljava, što je u redu za PartCraft sam (učitava sve iz svoje mape).
