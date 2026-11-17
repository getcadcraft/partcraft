---
title: Pločevina: prirobnice in razvita oblika
summary: Začnite del iz pločevine iz skice (ravna plošča ali upognjen profil), enkrat nastavite njegovo debelino, polmer pregiba in K-faktor, izvlecite prirobnice iz njegovih robov z razbremenitvami pregibov in ga razvijte kot DXF za rezanje.
keywords: razvita oblika, razvijanje, dolžina razvoja, dodatek za pregib, črta pregiba, DXF za laser, lasersko rezanje, pločevina, osnovna prirobnica, robna prirobnica, prirobnica, pregib, polmer pregiba, k-faktor, k faktor, debelina, merilo pločevine, razbremenitev, razbremenitev pregiba, kanal, nosilec, ohišje, upognjena pločevina
from: 144bd0f6
---

:::note
**Še ni izdelano v tej različici.** Pločevina potrebuje natančno geometrijsko jedro, ki ga ta različica PartCraft nima: vsak del gradi z mrežnim jedrom. [Kaj še ni izdelano](topic:not-built-yet) pove, kaj storiti namesto tega. Preostanek strani opisuje, kako deluje z natančnim jedrom.
:::

Deli iz pločevine se začnejo z **osnovno prirobnico**. Ta nastavi list za ves del: njegovo **debelino**, **notranji polmer pregiba** in **K-faktor**. Vsaka **robna prirobnica** za njo se upogne s temi istimi številkami, zato del ostane en list, ki ga je mogoče razviti. Oboje zahteva **natančno jedro** (glejte [Mrežno jedro](topic:solid-kernels)).

## Začnite z osnovno prirobnico

1. Narišite skico. Uporabite **zaprt profil** za ravno ploščo (pravokotnik ali poljuben zaprt obris z izvrtinami). Uporabite **eno odprto verigo črt** za upognjeno pločevino, na primer L, U ali Z, narisan kot pogled roba lista.
2. Izberite skico v zgodovini značilk.
3. Odprite {{ui:Več}} v skupini Značilke in izberite {{ui:Osnovna prirobnica}}.

V desnem podoknu:

- **Debelina (mm)** je merilo pločevine.
- **Polmer pregiba (mm)** je notranji polmer vsakega pregiba. 0 da oster notranji kot; zunanjost se še vedno obrne s polmerom ene debeline.
- **K-faktor** pove, kje je nevtralna plast znotraj pločevine, od 0 (notranja ploskev) do 0.5 (sredina). Določa, kako dolga je pločevina, ko je razvita. 0.44 je privzeto; vaša delavnica ali dobavitelj materiala vam lahko da svojega.
- **Globina (mm)** je, kako daleč upognjeni profil teče iz ravnine skice. Plošča je ne upošteva.
- **Debelina zunaj pregibov**: odprt profil je ena ploskev pločevine. Privzeto debelina gre na notranjo stran prvega pregiba, tako da so črte, ki ste jih narisali, zunanjost kanala. Označite, da postavite črte na notranjo stran. Odgovor je enak, ne glede na to, s katerega konca ste risali.

Vsak kot odprte verige postane pregib. Črta, ki je prekratka, da bi nosila svoje pregibe, to pove, skupaj z dolžino, ki jo potrebuje.

## Upognite robno prirobnico

1. Kliknite ravni rob zgornje ali spodnje ploskve lista (dolgi robovi, ne tanki).
2. Izberite {{ui:Več}} › {{ui:Robna prirobnica}}. Če ni izbran noben rob, PartCraft počaka, da kliknete enega; Esc prekliče.

Prirobnica se upogne navzgor od ploskve tega roba okoli notranjega polmera lista, nato teče ravno. V podoknu:

- **Kot (°)** je, kako daleč se upogne, od 1 do 180. 90 je kvadratna prirobnica.
- **Dolžina (mm)** je ravni krak za pregibom.
- **Upogni na drugo stran** jo upogne z druge ploskve (navzdol namesto navzgor).
- **Odmik na začetku** in **Odmik na koncu** skrajšata prirobnico z vsakega konca roba.
- **Razbremenitev pregiba**: ko je konec odmaknjen, se ob njem v list zareže utor, da se pregib tam ne strga. **Širina razbremenitve** nastavi širino utora; njegova globina je polmer pregiba plus debelina. Izberite **Brez**, da pustite kot neizrezan.

Če rob pozneje spremenite, pritisnite {{ui:Izberi}} v podoknu in kliknite drug rob.

:::tip
Za debelino in polmer uporabite parametre (glejte [Parametri in enačbe](topic:parameters)), da sprememba debeline posodobi vse prirobnice hkrati.
:::

## Razvijte

Oba podokna se končata z **Razvita oblika**. Pritisnite {{ui:Razvij}}:

- Predogled pokaže list razvit, s črtkano srednjo črto vsakega pregiba.
- **Velikost** in **Površina** sta tisti od ravnega polizdelka.
- Vsak pregib je naveden s svojo smerjo (**gor** ali **dol**, gledano z strani skice osnovne prirobnice), kotom in notranjim polmerom.

Vsak pregib zavzame dolžino nevtralne plasti lista skozi sebe, **dodatek za pregib**: kot (v radianih) × (notranji polmer + K-faktor × debelina). Tako 90° pregib 2 mm lista s 2 mm polmerom in K-faktorjem 0.44 doda 4.52 mm ravnega lista.

Na ravni plošči so izvrtine, izrezi in razbremenitve pregibov prikazani v razvoju tam, kjer dejansko so, vključno z izvrtinami skozi prirobnico.

Za rezanje več delov pritisnite {{ui:Razporedi na liste…}} pod razvito obliko: glejte [Razporedite ravne dele na liste](topic:nest-flat-parts). Upognjena osnovna prirobnica se razvije kot en pravokotnik: njegova razvita dolžina × njegova globina, z črto pregiba na vsakem kotu.

{{ui:Shrani DXF}} shrani razvito obliko za laser, stiskalnico ali vodni rezalnik, v milimetrih:

- obris na sloju **OUTLINE**, kot črte, loki in krožnice;
- črte pregibov na sloju **BEND**, črtkane;
- opomba za vsak pregib na sloju **BEND_NOTES**, na primer "UP 90° R2".

Spremenite karkoli in razvoj izgine; ponovno pritisnite {{ui:Razvij}} za novega.

:::note
Pred rezanjem preverite K-faktor pri vaši delavnici: dolžina razvoja je odvisna od njega in se spreminja z materialom, debelino in orodjem.
:::

## Sporočila

- **Pločevina potrebuje osnovno prirobnico pred seboj** — robna prirobnica je bila dodana pred katero koli osnovno prirobnico. Premaknite jo pod eno ali najprej dodajte osnovno prirobnico.
- **Robna prirobnica potrebuje ravni rob** — prirobnice se upogibajo samo vzdolž črt; krivih robov zaenkrat ne morejo sprejeti.
- **Ta rob ni na ploskvi debeline lista** — rob pripada ploskvi, ki ni zgornja ali spodnja ploskev lista (na primer stena izvrtine). Izberite rob zgornje ali spodnje ploskve.
- **Odmiki ne pustijo ničesar od roba** — oba odmika skupaj sta enaka celotnemu robu ali več.
- **Robnih prirobnic na upognjeni osnovni prirobnici zaenkrat ni mogoče razviti** — začnite z ravno ploščo in vse upognite navzgor z robnimi prirobnicami, ki se razvijejo.
- **Izrezi in izvrtine, narejeni po upognjeni osnovni prirobnici, zaenkrat niso prikazani v njeni razviti obliki** — razvita oblika upognjenega profila je samo njen razviti pravokotnik.
