---
title: Paruoškite detalę 3D spausdinimui
summary: Patikrinkite, ar detalė ar surinkimas uždaras, telpa į jūsų spausdintuvą ir stovi ant pagrindo, tada atsisiųskite ją kaip STL arba 3MF savo pjaustymo programai.
keywords: 3D spausdinimas, spausdintuvas, spausdinti, pjaustymo programa, stl, 3mf, sandarus, uždaras, daugialypis, stalas, spausdinimo stalas, stalo dydis, nuolydis, atramos, pagrindas, milimetrai, eksportas, sriegiai, tarpas
from: 90d81dff
---

Pjaustymo programai reikia uždaros formos: be skylių, kiekvienas paviršius nukreiptas į išorę, nieko nekerta pats savęs. PartCraft sukurtos detalės yra uždaros savo konstrukcija, todėl patikrinimas daugiausia parodo dydį, ar detalė telpa į jūsų spausdintuvo stalą, ar ji stovi ant plokščio paviršiaus ir kiek jos išsikiša.

## Patikrinkite ir atsisiųskite

1. Pasirinktinai, vieną kartą: nustatykite spausdintuvo stalą skiltyje {{ui:Parametrai}} › PartCraft › **3D spausdintuvas**: plotį, gylį ir aukštį milimetrais. Palikite tuščius, jei norite praleisti tą patikrinimą.
2. Pasirinkite {{ui:Eksportuoti}}, tada {{ui:Tikrinti, ar tinka 3D spausdinimui (STL arba 3MF)…}}.

   Dialogo languose rodoma „Paruošta spausdinti“ arba „Neparuošta spausdinti“, išvardijamos visos problemos ir pateikiamas dydis ant stalo (X × Y × Z, milimetrais), tūris ir trikampių skaičius.

3. Spustelėkite {{ui:Atsisiųsti 3MF}} arba {{ui:Atsisiųsti STL}}. Failas toks pats kaip {{ui:Eksportuoti}} › {{ui:3MF, spausdinimui 3D}} arba {{ui:STL, spausdinimui 3D}}.

Surinkime patikrinimas ir failai apima visą surinkimą, kiekvieną kopiją ten, kur ji įdėta.

Detalė tikrinama stovinti taip, kaip ją rašo eksportas: kas PartCraft rodo į viršų (statmena Viršaus plokštumai), tas ant stalo rodo į viršų. Detalė, nubraižyta Viršaus plokštumoje, guli plokščiai.

## Ką gali pasakyti dialogas

**Neparuošta spausdinti** (pjaustymo programa gali atsisakyti ar atspausdinti neteisingai): skylės (kraštai, kurių paviršius yra tik vienoje pusėje), kraštai, bendri trims ar daugiau paviršių, paviršiai, nukreipti priešingomis kryptimis, kūnas, išvirkštas iš vidaus į išorę, arba kūnas, kertantis pats save. PartCraft sukurta detalė neturėtų rodyti šių dalykų; jei rodo, žr. [Trikčių šalinimas](topic:troubleshooting).

**Įspėjimai** (spausdins, bet pirmiausia pažvelkite):

- **Didesnė už spausdintuvo stalą**, net pasukus 90° ant jo.
- **Apačioje nieko nelieka plokščio**: pasukite detalę pjaustymo programoje, kad paviršius gulėtų ant stalo, kitaip reikės atramų ar pagrindo plokštės.
- **Nukrypsta daugiau nei 45° nuo vertikalės**: tiems paviršiams reikia atramų, stovint taip, kaip yra. Kita padėtis gali reikalauti mažiau.
- **Atskiri kūnai persidengia** arba **liečiasi paviršiais**: pjaustymo programos paprastai juos sujungia. {{ui:Sujungti}} skiltyje Elementai › {{ui:Daugiau}} sujungia juos į vieną kūną. Žr. [Kūnai](topic:bodies).
- **Mažesnė nei 1 mm per plotį**: patikrinkite detalės dydžius.

## Sriegiai, kurie spausdinami

Modeliuotas sriegis spausdinamas kaip tikras sriegis. Suteikite jam šiek tiek **Tarpo**, kad atspausdintas varžtas tilptų į atspausdintą veržlę: žr. [Sriegiai](topic:threads).

## Lygūs apvalūs paviršiai

STL ir 3MF sudaryti iš trikampių. Norėdami lygesnių apvalių paviršių, spustelėkite tuščią erdvę, kad nieko nebūtų pažymėta, ir dešiniajame skydelyje nustatykite **Kreivės** į **Smulkus (128 vienam apsisukimui)** arba **Labai smulkus (256 vienam apsisukimui)** prieš eksportuodami. Daugiau trikampių reiškia didesnius failus.

## Didesnė, mažesnė arba dalimis

- **Eksportuoti › Mastelis spausdinimui (STL arba 3MF)…** išsaugo detalę, pakeistą mastelį pagal ašis, nekeisdama jos: **susitraukimo atsarga** procentais (dydis × (1 + s) arba tikslus dydis ÷ (1 − s)) liejimo šablonui, arba paprasti koeficientai, apie vidurį, mažiausią kampą, apatinio paviršiaus vidurį ar pradžios tašką.
- **Eksportuoti › Padalyti spausdinimui (dalių zip archyvas)…** perpjauna detalę, per didelę jūsų spausdintuvui, į dalis, kurių kiekviena telpa į nurodytą stalą. Dalys sujungiamos kaiščiais, raktais, uodegomis, įleidimo skylutėmis ar magnetų lizdais (su nustatytu tarpu); kiekviena dalis ir jungtis sunumeruota. Dalys išsaugomos kaip STL arba 3MF zip archyve su surinkimo lapu. Pati detalė nekinta.

## Nepatikrinta

Sienelių storis, detalės, mažesnės už jūsų purkštuką, ir tai, kaip pjaustymo programa išdėstys atramas. Tai parodo jūsų pjaustymo programa.
