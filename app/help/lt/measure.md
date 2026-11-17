---
title: Matuoti atstumus, kampus ir masę
summary: Spragtelėkite du dalykus vaizde, kad gautumėte mažiausią atstumą, kampą ir ΔX ΔY ΔZ; perskaitykite kraštinės ilgį, skylės skersmenį, paviršiaus plotą ar taško koordinates; gaukite detalės ar surinkimo tūrį, masę, masės centrą ir inerciją.
keywords: matuoti, atstumas, mažiausias atstumas, kampas, ilgis, spindulys, skersmuo, plotas, koordinatės, delta, tikrinti, masės savybės, masė, svoris, masės centras, inercija, inercijos momentas, tankis, medžiaga
from: 20bda0b7
---

**Matuoti** veikia modelyje kiekvienoje darbo srityje (Projektavimas, Forma, Modeliavimas, Generatyvinis, Gamyba) ir surinkime. Jis yra grupės **Vaizdas** meniu {{ui:Vaizdai}} arba paspauskite {{key:M}}. Kortelė atsidaro viršutiniame kairiajame vaizdo kampe.

## Matuokite vieną dalyką

Spragtelėkite viršūnę, kraštinę ar paviršių. Kortelė rodo:

- **Tašką** (viršūnę, kraštinės vidurio tašką ar apskritimo centrą): jo X, Y, Z.
- **Kraštinę**: tiesi, apskritimas ar kreivė ir jos ilgis; apskritimui – ir spindulys, skersmuo bei centras.
- **Paviršių**: plokščias, cilindras, kūgis ir pan., ir jo plotas; plokščio paviršiaus normalė; cilindro spindulys ir skersmuo (skylės dydis). Plotai – tinklelio branduolio sudarytų fasetų.
- **Visą kūną**: laikydami {{key:Shift}}, spragtelėkite detalę. Gausite jos tūrį, plotą, masę ir inerciją (žr. toliau).

Žymeklis prisitraukia prie viršūnių, kraštinių vidurio taškų ir apskritimų centrų 10 pikselių atstumu; prieš spragtelėdami mažas mėlynas taškas parodo prisitraukimą. Norėdami pasirinkti skylės centrą, nukreipkite į skylės vidurį; norėdami pasirinkti jos kraštą (apskritimą), nukreipkite į kraštą.

## Matuokite tarp dviejų dalykų

Spragtelėkite antrą elementą. Kortelė papildoma:

- **Mažiausias atstumas** ir du artimiausi taškai, vaizde nubrėžti linija tarp jų.
- **ΔX, ΔY, ΔZ** nuo pirmojo artimiausio taško iki antrojo.
- **Kampas** tarp dviejų plokščių paviršių (tarp jų normalių, 0–180°), tarp dviejų tiesių kraštinių ar ašių (0–90°) arba tarp kraštinės ir paviršiaus.
- **Tarpas tarp plokštumų** dviem lygiagretiems plokštiems paviršiams, **Centras su centru** dviem apskritimams ar skylėms, **Ašis su ašimi** dviem lygiagrečioms skylėms ar cilindrams.

Trečias spragtelėjimas pradeda naują porą. {{key:Esc}} išvalo pasirinkimus; dar kartą {{key:Esc}} (arba {{ui:Uždaryti}}) uždaro Matuoti. {{ui:Kopijuoti}} įdeda rezultatus į iškarpinę kaip tabuliacija atskirtą tekstą, paruoštą įklijuoti į skaičiuoklę.

### Kaip tiksliai

PartCraft detalę sukuria tinklelio branduoliu, todėl atstumai apskaičiuojami pagal tinklelio fasetus, o kortelė rodo **apytiksliai: pagal fasetus**: tiksliai plokštiems paviršiams ir tarp viršūnių, šiek tiek netiksliai lenkiamiems. Smulkesnis nustatymas **Kreivės** priartina rezultatus. Tikslus matavimas tikruose paviršiuose reikalauja tikslaus branduolio: šioje versijoje dar nesukurta.

## Masės savybės

Kortelėje arba meniu {{ui:Vaizdai}} pasirinkite {{ui:Masės savybės}}. Detalėje kortelėje pasirinkite **Medžiagą** (plienas, aliuminis, plastikai ir kiti su įprastiniais tankiais). Surinkime kiekviena detalė naudoja medžiagą, nustatytą jos savybėse (pasirinkite detalę, tada **Medžiaga**), o rezultatas galioja visoms detalėms kartu.

Kortelė rodo masę, tūrį, plotą, masės centrą, inercijos tenzorių (Ixx, Iyy, Izz ir sandaugas Ixy, Iyz, Ixz, kg·mm², apie masės centrą išilgai pasaulio ašių) ir pagrindinius momentus. Be medžiagos rodo tą patį, bet vienetiniam tankiui (mm⁵), ir jokios masės.

Skaičiai tikslūs tinklelio branduolio sudarytam trikampiais padengtam kietajam kūnui (lenkiami paviršiai kaip fasetai), todėl apvali detalė išeina šiek tiek mažesnė, ir kortelė tai nurodo. Medžiagų tankiai yra tipinės žinynų reikšmės; tikras lydinys ar markė gali skirtis keliais procentais.

## Apribojimai

- Prisitraukimas gali rasti tašką, paslėptą už kitos geometrijos; patikrinkite, ar kortelė rodo tai, ką turėjote omenyje.
- Matuoti uždaromas, kai atidarote eskizą ar brėžinio lapą arba perjungiate darbo sritį.
