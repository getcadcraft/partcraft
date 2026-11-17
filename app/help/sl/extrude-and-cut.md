---
title: Iztisnite izboklino in izrežite skozi njo
summary: Spremenite skico v telo z Iztisni, nastavite globino slepo, sredinsko, do ploskve ali dvosmerno, nagib ali en obris skice; nato skicirajte na ploskev in z Izreži izrežite žep ali režo skozi.
keywords: iztisni, izboklina, iztisnjena izboklina, izreži, iztisnjen izrez, žep, skozi vse, slepo, sredinska ravnina, obrni, globina, izrez-iztisni, izboklina-iztisni, podloga, do ploskve, do naslednje ploskve, do oglišča, odmik od ploskve, smer 2, dve smeri, nagib med iztiskanjem, nagib, obris, območje, izbrani obrisi
from: 3b13ff10
---

{{ui:Iztisni}} potisne zaprt profil skice naravnost iz njene ravnine in ustvari material. {{ui:Izreži}} stori isto, vendar material odstrani. Obe sta pod površjem ista značilka; kasneje lahko eno zamenjate z drugo.

## Iztisnite izboklino

1. Narišite zaprt profil in zaprite skico (glejte [Narišite prvo skico](topic:sketch-basics)). Ostane izbrana.
2. Izberite {{ui:Iztisni}}.

Pojavi se telo 10 mm, „Extrude1“ se doda zgodovini z njegovo skico, uvlečeno pod njim, vrstica stanja pa pravi: "Extrude1 dodan. Spremenite njegove številke na desni."

**Katera skica se uporabi:** skica, ki ste jo pravkar zaprli, ali skica, izbrana v zgodovini. Če nič ni izbrano, PartCraft vzame najnovejšo skico, ki je še ne uporablja nobena značilka. Če je ni, sporočilo: "Najprej ustvarite skico: izberite ravnino, Skica, narišite zaprt profil, Izhod."

### Nastavite globino in smer

V desnem podoknu:

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| **Operacija** | Izboklina (doda material), Izrez (odstrani material), Presek (ohrani prekrivanje), Novo telo (v tej različici še ni izdelano: potrebuje točno jedro) | Izboklina |
| **Konec** | Slepo (globina), Sredinska ravnina (na obe strani), Skozi vse, Do ploskve ali ravnine, Do naslednje ploskve, Do oglišča, Odmik od ploskve | Slepo |
| **Globina (mm)** | Katera koli velikost nad nič (prikazano za Slepo in Sredinska ravnina) | 10 |
| **Obrni smer** | Raste na drugo stran ravnine skice (ni prikazano za Sredinska ravnina) | Izključeno |

Vnesite število in pritisnite {{key:Enter}} ali {{key:Tab}}: del se takoj obnovi. **Sredinska ravnina** da polovico globine na vsako stran skice.

### Do ploskve, naslednje ploskve ali oglišča

Še ni izdelano v tej različici: vsak konec "do" potrebuje točno jedro, značilka pa pravi: "Iztiskanje do ploskve, naslednje ploskve ali oglišča: še ni izdelano (potrebuje točno jedro)." Uporabite slepo globino, ki jo izmerite. Z točnim jedrom koncih delujejo takole:

- **Do ploskve ali ravnine**: **Do** vzame ravno ploskev (Izberi, nato kliknite nanjo) ali referenčno ravnino. Ploskev, vzporedna skici, da točno globino; poševna ploskev prireže konec na naklonu. Če je ploskev za skico: "… Poskusite Obrni smer."
- **Do naslednje ploskve**: se ustavi na prvi ravni ploskvi telesa, ki ga iztiskanje sreča (ukrivljene ploskve tu niso podprte: to sporoča).
- **Do oglišča**: se ustavi v višini oglišča (kliknite blizu konca roba) ali točke.
- **Odmik od ploskve**: kot Do ploskve, le da se ustavi **Odmik (mm)** pred njo (merjeno pravokotno na ploskev).

### Dve smeri, nagib, en obris

- **Druga smer** (Slepo): iztisne tudi **Globino druge smeri (mm)** na drugo stran skice.
- **Nagib (°)**: stranice se nagnejo, ko gredo (negativno: ven), kot osnutek; samo ena smer. V tej različici še ni izdelano (potrebuje točno jedro): pustite na 0.
- **Območja**: **Izberi območja**, nato kliknite znotraj zank, ki jih želite iztisniti; uporabljena so samo ta območja (krog znotraj kvadrata: kliknite znotraj kroga za valj, med njima za ploščo z luknjo). **Vse** se vrne na vsako zanko.

Spodaj **Dimenzije skice** našteva gonilne mere skice, tako da lahko spremenite velikosti profila brez odpiranja skice.

:::note
**Skozi vse je samo za reze.** Izboklina, nastavljena na Skozi vse, ne uspe: "Skozi vse je za izreze. Za izboklino uporabite globino." Preklop značilke iz Izreza nazaj v Izboklino spremeni Skozi vse v Slepo zase.
:::

## Izrežite žep

1. Kliknite ravno ploskev, v katero želite rezati. Označi se, desni panel pa pokaže **Ploskev**.
2. Izberite {{ui:Skica na tej ploskvi}} (ali {{ui:Skica}} v orodni vrstici).
3. Narišite obris žepa, na primer pravokotnik, in ga dimenzionirajte.
4. Izberite {{ui:Izhod}}.
5. Izberite {{ui:Izreži}}. Začne se kot **Skozi vse**: odstrani material skozi ves del.
6. Za žep nastavite **Konec** na **Slepo (globina)** in vnesite **Globina (mm)**.

Izrez gre v material, stran od ploskve, na kateri ste skicirali. Če vrstica stanja pravi "Na tej strani skice ni ničesar za izrezati. Poskusite drugo smer.", označite **Obrni smer**.

Skica na dnu žepa sledi dnu: spremenite globino žepa in skica se premakne z njo.

## Potegnite ali potisnite celo ploskev

Če želite, da ploskev štrli ali se vdre, ji vam ne treba risati obrisa. Kliknite ravno ploskev, nato v desnem podoknu:

- {{ui:Iztisni iz nje}} izvleče ploskev: PartCraft doda skico na ploskev z njenim obrisom (izvrtine v ploskvi ostanejo izvrtine) in Iztiskanje 10 mm.
- {{ui:Izreži vanjo}} potisne ploskev vanjo: ista skica in Izrez na pol poti v del.

Oboje je en korak: {{key:Mod+Z}} odstrani skico in značilko skupaj. Nova značilka je izbrana, zato takoj vnesite število in pritisnite {{key:Enter}} za njeno globino. Obris je kopiran kot fiksne črte in loki: ne sledi kasnejšim spremembam ploskve. Če dela obrisa ni mogoče kopirati (prosta krivulja), se namesto tega odpre skica z delom, ki ga je bilo mogoče kopirati; dokončajte jo, nato izberite {{ui:Izhod}} in {{ui:Iztisni}} ali {{ui:Izreži}}.

## Profili z otoki

Skica lahko vsebuje več zaprtih zank. Zanke drug ob drugi postanejo ločene izboklina ali izrezi; zanka znotraj druge postane luknja skozi izboklino. Na primer, pravokotnik z dvema krogoma znotraj se iztisne kot plošča z dvema luknjama.

Če želite uporabiti samo nekatere zanke, jih izberite z **Območja** (zgoraj); druga značilka lahko uporabi druge zanke iste skice.

## Kasnejše urejanje

- Kliknite „Extrude1“ v zgodovini, da prikažete njegove nastavitve.
- Dvakrat kliknite njegovo skico (uvlečeno pod njim), da jo odprete; ko jo zaprete, se del obnovi.
- Glejte [Spreminjanje dela prek zgodovine](topic:edit-history) za zatiranje, povrnitev nazaj, preurejanje in brisanje.

## Pogosta sporočila

| Sporočilo | Kaj storiti |
|---|---|
| "Skica nima zaprtega profila za iztiskanje." | Skica nima zaprte zanke iz polnih črt. Zaprite vrzeli ali vrnite konstrukcijske črte nazaj s {{key:Q}} |
| "Profil je odprt: konec pri (x, y) ni povezan z ničemer." | Odprite skico in povežite ta konec z naslednjo črto |
| "Še ni ničesar za izrezati." | Izrez potrebuje telo za rezanje. Najprej naredite izboklino |
| "Po tem na delu ni ničesar več." | Izrez je odstranil vse. Preverite njegovo velikost in smer |

Več v [Odpravljanje težav](topic:troubleshooting).
