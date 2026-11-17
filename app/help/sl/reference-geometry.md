---
title: Referenčne ravnine, osi in točke
summary: Naredite ravnine, zamaknjene od ploskve, pod kotom, skozi tri točke, na sredini, tangentne na valj, pravokotne na rob ali skozi rob in točko; osi; točke na sredinah robov, presečiščih in vogalih ravnin; skicirajte nanje in jih uporabite kot osi zavrtitve, smeri razpostavitve in zrcalne ravnine.
keywords: podatek, med objekti, sredina, presečna točka, ravnina skozi rob in točko, referenčna ravnina, delovna ravnina, konstrukcijska ravnina, referenčni podatek, zamaknjena ravnina, ravnina pod kotom, srednja ravnina, tangentna ravnina, referenčna os, konstrukcijska os, os podatka, referenčna točka, delovna točka, skica na ravnini
from: e7eb6fc1
---

Referenčna geometrija je oder, na katerem gradite značilke: **ravnina**, na katero skicirate, kjer ni ploskve, **os**, okoli katere zavrtite ali razpostavite, **točka**, na kateri ustavite iztisnitev. Nima lastnega materiala. Ravnine so v pogledu prikazane kot bledi kvadrati, osi kot črtkane črte, točke kot majhni križci; vse tri se pridružijo zgodovini in ob spremembi velikosti zgoraj sledijo temu, iz česar so nastale.

Nahajajo se v meniju {{ui:Več}} skupine Značilke: {{ui:Ravnina}}, {{ui:Os}}, {{ui:Točka}}.

## Ustvarjanje ravnine

1. Kliknite ravno ploskev ali osnovno ravnino v zgodovini, da začnete iz nje (neobvezno).
2. Izberite {{ui:Več}}, nato {{ui:Ravnina}}. Začne se kot zamaknjena ravnina za 20 % velikosti dela od tega, kar ste izbrali (ali od zgornje ravnine).
3. V desnem podoknu izberite **Vrsta** in njene reference:

| Vrsta | Reference | Številke |
|---|---|---|
| Zamik od ravnine ali ploskve | **Iz ravnine** | **Razdalja (mm)**, negativno za drugo stran |
| Pod kotom, skozi rob ali os | **Iz ravnine**, **Zasukaj okoli** (svetovna os, značilka osi ali izbran ravni rob) | **Kot (°)** |
| Skozi tri točke | **Točka 1**, **Točka 2**, **Točka 3** | — |
| Srednja ravnina med dvema | **Prva ravnina**, **Druga ravnina** (vzporedni: na pol poti; sekajoči: ravnina, ki razpolovi kot) | — |
| Tangentna na valj | **Valj** (valjasta ploskev), **Bližnja točka** (katera stran) | — |
| Pravokotna na rob, v točki | **Rob**, **V točki** (ravnina gre skozi točko roba, ki je najbližje, in tudi skozi točko) | — |
| Skozi rob in točko | **Ravni rob** (ali os), **Skozi točko** | — |
| Pravokotna na rob na sredini | **Rob** (na pol poti vzdolž njega, pravokotno nanj), ali brez roba **Točka 1** in **Točka 2** (ravnina na pol poti med njima) | — |

Vsaka referenca ima gumb **Izberi**: izberite ga, nato kliknite v pogled. Polje za ravnino sprejme osnovno ravnino, referenčno ravnino ali ravno ploskev; polje za točko sprejme konec roba (kliknite blizu tistega konca), značilko točke ali mesto na ploskvi; polje za rob sprejme rob. {{key:Esc}} prekine izbiro. **Obrni normalo** obrne ravnino (v katero smer je obrnjena skica nanjo).

V tej različici polje, ki potrebuje rob ali valjasto ploskev (Tangentna na valj in polja Rob), odgovori „še ni izdelano“: namesto tega uporabite točke ali os.

## Skiciranje na ravnino

Izberite ravnino (v zgodovini ali s klikom na njen kvadrat v pogledu) in izberite {{ui:Skica}} ali **Skiciraj nanjo** v njenem podoknu. Skica sledi ravnini: če spremenite razdaljo ravnine, se premakneta tudi skica in vse značilke nanjo.

## Osi in točke

- {{ui:Os}}: skozi dve točki, os valja ali stožca, kjer se sekata dve ravnini, vzdolž ravnega roba (ali osi krožnega roba), ali pravokotno na ploskev skozi točko.
- {{ui:Točka}}: pri koordinatah, na oglišču ali točki skice, v središču krožnega roba, ter točke „med objekti“:

| Vrsta točke | Reference |
|---|---|
| Sredina roba (ali med dvema točkama) | **Rob** (na pol poti vzdolž dolžine, tudi za loke in krivulje), ali brez roba **Točka 1** in **Točka 2** |
| Kjer rob ali os seka ploskev ali ravnino | **Rob** (ravni ali krivi) ali os, in **Seka ravnino** (ravnina ali ravna ploskev) ali **Ali ploskev** (ravna ploskev ali valj). Krog seka ravnino dvakrat, premica pa valj dvakrat: **Drugo presečišče** izbere drugo |
| Kjer se stikajo tri ravnine | **Prva**, **Druga** in **Tretja ravnina** (ravnine ali ravne ploskve) |

Vsaka odpove s preprostim sporočilom, če reference ne ustrezajo: črta je vzporedna z ravnino, črta zgreši valj, rob ne seže do ravnine, tri ravnine se ne stikajo v eni točki, točka leži na premici, s katero naj bi določila ravnino.

Uporabite jih v drugih značilkah:

| Kje | Kako |
|---|---|
| Zavrti | **Os**: izberite značilko osi s seznama (mora ležati v ravnini skice) |
| Krožna razpostavitev | **Os**: značilka osi |
| Linearna razpostavitev | **Smer**: značilka osi ali ravnina (njena normala) |
| Zrcali | **Zrcalna ravnina**: referenčna ravnina |
| Iztisni | **Konec**: Do ploskve ali ravnine, Do oglišča (značilka točke). V tej različici še ni izdelano (potrebuje natančno jedro) |
| Nagib izvleka | **Nevtralna ravnina** |

## Ko referenca izgine

Ravnina, narejena iz ploskve, ki ne obstaja več, odpove s sporočilom, ki jo poimenuje, na primer „Ploskev, na kateri stoji, ni več v Extrude1.“ Nikoli se ne premakne na drugo ploskev. Skice in značilke nanjo so označene kot „ni izdelano“, dokler ne izberete nove reference; preostali del ostane, kakršen je bil.

:::note
Ta različica vsak del izdeluje z jedrom mrež, ki iz osnovnih ravnin, ravnih ploskev, ustvarjenih z Iztisni ali Zavrti, točk skice, koordinat in drugih referenčnih značilk naredi ravnine, osi in točke. Vse, kar potrebuje rob, konec roba ali ukrivljeno ploskev, potrebuje natančno jedro: v tej različici še ni izdelano („Uporablja ploskev ali rob telesa, ki ga lahko najde samo natančno jedro: v tej različici še ni izdelano.“).
:::
