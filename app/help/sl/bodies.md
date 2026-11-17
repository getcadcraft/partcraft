---
title: Združite, premaknite in spremenite merilo teles; vzorci po poti
summary: Ustvarite ločena telesa, nato jih naknadno združite, odrežite ali presečite, premaknite, zasukajte, poravnajte ali kopirajte, merilo spremenite enakomerno ali po X, Y in Z ter kopirajte značilke ali telesa vzdolž krivulje.
keywords: telo, telesa, več teles, novo telo, združi, bulova operacija, spoj, izreži, presek, odštej, unija, ohrani orodna telesa, premakni telo, kopiraj telo, zasukaj telo, poravnaj, premik, merilo, neenakomerno merilo, raztegni, afino, vzorec po poti, vzorec vzdolž krivulje, matrika vzdolž poti, krivulja
from: 6b1ea820
---

:::note
**Še ni izdelano v tej različici.** Delo z več telesi potrebuje natančno geometrijsko jedro, ki ga ta različica PartCraft nima: vsak del zgradi z mrežnim jedrom. [Kaj še ni izdelano](topic:not-built-yet) pove, kaj storiti namesto tega. Preostali del strani opisuje delovanje z natančnim jedrom.
:::

Del lahko vsebuje več teles. Vsako ločeno telo je **telo**. Večina značilk doda k vsem telesom, ki jih dotaknejo, ali iz njih odreže. Orodja na tej strani delujejo na celih telesih, ki jih izberete. Nahajajo se v meniju {{ui:Več}} skupine Značilke: {{ui:Združi}}, {{ui:Premakni telo}}, {{ui:Merilo telesa}} in {{ui:Vzorec po poti}}. Vsa potrebujejo natančno jedro (OpenCascade).

## Ustvarite ločeno telo

V desnem podoknu nastavite **Operacijo** iztisnitve ali zavrtitve na **Novo telo** (tudi potegnjene po poti in prehodi jo imajo). Novo telo ostane ločeno, tudi kjer se prekriva z drugimi. **Presek** ohrani samo prekrivanje nove oblike s tem, kar je že tam.

Telesa dobijo ime po značilki, ki jih je ustvarila: „Extrude2“. Kopija dobi ime po izvirniku in značilki, ki jo je kopirala: „Extrude2, copy 1 of Move1“. Imena ostanejo ista, ko spremenite mere pred njimi, zato značilke, ki uporabljajo telo, ga še vedno najdejo. Če je telesov dva ali več, podokno dela (kliknite prazen prostor) jih našteje skupaj s prostorninami.

## Preimenovanje ali skrivanje telesa

Kliknite prazen prostor v pogledu, da vidite podokno dela. Seznam teles (prikazan, ko ima del dve ali več teles) ima v vsaki vrstici polje za ime in gumb {{ui:Skrij}}.

- **Preimenuj:** vnesite novo ime v polje in pritisnite {{key:Enter}} ali kliknite drugam. Vsako podokno ga nato uporablja: Združi, Premakni telo, vzorci. Izpraznite polje, da se vrnete na ime iz značilke, ki je telo ustvarila.
- **Skrij:** kliknite {{ui:Skrij}} v njegovi vrstici. Telo izgine iz pogleda in kliki gredo skozenj, tako da lahko izberete ploskve za njim. {{ui:Pokaži}} ga vrne; {{ui:Pokaži vse}} vrne vsa skrita telesa.

Skrivanje spremeni samo pogled. Skrito telo je še vedno zgrajeno, šteje se v prostornino in meritve ter se shrani v izvozih STL, 3MF in STEP. Imena in skrita telesa se shranijo v datoteki dela, vsaka sprememba pa je en korak {{ui:Razveljavi}}.

## Združevanje teles

1. {{key:Shift}}+klik na ploskev **ciljnega** telesa, nato na ploskev vsakega **orodnega** telesa.
2. Izberite {{ui:Več}}, nato {{ui:Združi}}.
3. V desnem podoknu izberite **Operacijo**:

| Operacija | Rezultat |
|---|---|
| Združi | Ciljno in orodna telesa postanejo eno telo |
| Izreži | Orodna telesa se odvzamejo od cilja |
| Presek | Ohrani se samo tisto, kar si delijo cilj in vsa orodna telesa |

**Ciljno telo** je tisto, ki obdrži svoje ime. Označite ali odznačite **Orodna telesa** ali uporabite **Izberi v pogledu** in kliknite njihove ploskve. **Ohrani orodna telesa** pusti orodna telesa na mestu (uporabno za kalup in njegovo jedro). Če je bilo orodno telo že porabljeno pri prejšnjem Združevanju, podokno to pove, namesto da bi izbralo drugo telo.

## Premikanje ali kopiranje telesa

1. Izberite {{ui:Več}}, nato {{ui:Premakni telo}}. Najnovejše telo je označeno; označite tista, ki jih želite premakniti.
2. Izberite vrsto **Premika**:

| Premik | Kaj nastavite |
|---|---|
| Translacija | **ΔX**, **ΔY**, **ΔZ** v milimetrih |
| Točka do točke | **Od** in **Do**: kliknite blizu konca robu, značilke točke ali mesta na ploskvi |
| Zasuk okoli osi | **Os** (X, Y, Z, značilka osi ali **Izberi**: ravni rob, krožnica ali valj) in **Kot (°)** |
| Poravnaj ploskev na ploskev ali ravnino | **Ploskev za premik** (ravna ploskev telesa), **Na** (ravna ploskev ali ravnina) |

Poravnava obrne telo tako, da njegova ploskev leži na drugi ploskvi, ploskev na ploskev, nato ga premakne samo vzdolž normale te ploskve. **Enaka smer** ga obrne v nasprotno smer. **Kopiraj** ohrani izvirnik in doda premaknjeno kopijo kot novo telo.

## Spreminjanje merila telesa

1. Izberite {{ui:Več}}, nato {{ui:Merilo telesa}} in označite telesa.
2. Vnesite **Merilo**, ali odznačite **Enakomerno** in vnesite **Merilo X**, **Merilo Y** in **Merilo Z** (vzdolž svetovnih osi).
3. **Okoli** je točka, ki ostane na mestu: središče okvirja teles ali točka, ki jo izberete.

Enakomerno merilo je natančno. Neenakomerno merilo spremeni krožnice v elipse: valj postane eliptični valj, ki ga nobena analitična ploskev ne drži, zato se ukrivljene ploskve spremenijo v ploskve B-zlepka, ki ostanejo znotraj 0.0000004 mm od natančne oblike. Ravne ploskve in ravni robovi ostanejo natančni. Podokno pove, kaj se je zgodilo. Faktorji merila morajo biti večji od nič (za zrcaljenje uporabite {{ui:Zrcali}}).

## Kopiranje vzdolž poti

1. V zgodovini izberite značilko za kopiranje ali pustite, da nič ni izbrano, in tedaj se kopira najnovejše telo.
2. Izberite {{ui:Več}}, nato {{ui:Vzorec po poti}}. Za pot se vzame najnovejša neuporabljena skica.
3. V desnem podoknu nastavite:

| Nastavitev | Kaj naredi |
|---|---|
| **Kopiraj** | Telesa (vsaka kopija je novo telo) ali Značilke (združene ali izrezane kot izvirnik) |
| **Pot** | Označite skice ali **Izberite robove modela**; deli se morajo stikati od konca do konca |
| **Število** | Skupno število, vključno z izvirnikom |
| **Razmik** | Enakomeren (razpršen do konca odprte poti ali po vsej zaprti) ali določena razdalja |
| **Usmerjenost** | Sledi poti (vsaka kopija se obrne z njo) ali Fiksno (kopije ostanejo vzporedne) |
| **Obrni smer** | Pojdi v nasprotno smer vzdolž poti |

Kopije se začnejo tam, kjer pot najbolj sosedi izvirnik, in so razporejene po dolžini vzdolž krivulje.

Linearni in krožni vzorci lahko kopirajo tudi telesa: v njihovem podoknu označite **Kopiraj telesa** in izberite telesa. Vsaka kopija je novo telo.

## Omejitve

- Telesa potrebujejo natančno jedro; mrežno jedro ohrani eno telo in to pove.
- Neenakomerno merilo ukrivljene ploskve pretvori v natančne približke B-zlepka (glejte zgoraj), ne v natančne valje ali stožce. Odmaknjenih ploskev na tak način še ni mogoče spremeniti v merilu.
- Sledenje poti po zvijajoči 3D krivulji prenese kopijo brez zvijanja. Na ravnih poteh je zasuk natančen.
- Združi deluje samo na telesih. Ploskovna telesa se združijo z {{ui:Zašij}}.

Glejte tudi [Referenčne ravnine, osi in točke](topic:reference-geometry) za točke in ravnine „med objekti“ ter [Vzorčne in zrcalne značilke](topic:patterns-mirror).
