---
title: Uwanja: maumbo kama umbali
summary: Uwanja ni nini (umbo lililohifadhiwa kama umbali hadi uso wake), jinsi ya kuujenga kutoka primitives, boolean, lattice na nyuso za TPMS kwenye hati, jinsi unavyogeuka kuwa mwili, na kwa nini hati hiyo hiyo hutoa baiti zilezile kila wakati.
keywords: uwanja, umbali uliotiwa saini, sdf, voxel, gyroid, tpms, lattice, boolean, offset, shell, blend, dual contouring, deterministic, watertight, manifold, brick
from: faab7480
---

A **uwanja** unaelezea umbo kwa umbali kutoka kila nukta hadi uso wake: hasi ndani, sifuri kwenye uso, na chanya nje. Duara la radius 5 ni "umbali hadi katikati minus 5". Kuchanganya maumbo ni hesabu kwenye umbali: muungano ni dogo kati ya mawili, makutano ni kubwa, na kutoa umbo moja kutoka jingine ni kubwa kati ya la kwanza na hasi ya la pili. Kukuza umbo kwa 1 mm hutoa 1 kutoka kwenye umbali; ukuta tupu ni umbali uliokunjwa.

Hiyo ndiyo sababu uwanja ni mzuri kwa lattice, mifereji na kuta zilizopangwa: uso wa gyroid ni "jumla ya sine ni sifuri", na ukuta unaonenepa kutoka 1 hadi 3 mm kwenye sehemu ni namba inayobadilika kwenye sehemu nzima.

## Kutoka uwanja hadi mwili

`to_body(field, h)` huchukua sampuli ya uwanja kwenye gridi ya nukta zilizo umbali wa `h` milimita, ikihifadhi nukta zilizo karibu na uso pekee (gridi nyembamba ya bricks 8 × 8 × 8), kisha hujenga uso kwa **dual contouring**: kipeo kimoja kwa kila seli ya uso, kimewekwa pale ndege za uso zinapokutana, kwa hiyo ukingo mkali unabaki mkali ndani ya voxel moja. Uso umefungwa, na kila ukingo unashirikiwa na pembetatu mbili hasa; ripoti inasema hivyo. Kipengele chembamba kuliko takriban voxel tatu kinaweza kubanwa, na hapo ripoti inasema mwili si kigumu kilichofungwa badala ya kuficha hilo.

Ukubwa wa voxel ndio usahihi: ujazo wa duara la voxel 25 kwa upana uko ndani ya sehemu chache za mia ya asilimia; ukuta ni sahihi kama voxels zake. Gridi pana zaidi ina kasi zaidi.

## Baiti zilezile kila wakati

Uwanja hauna saa wala namba ya nasibu. Sine na cosine ya gyroid, na kila exponential, logarithm na power katika maktaba, huhesabiwa kutoka hesabu rahisi ili Node, Chrome, Firefox na Safari zitoe biti zilezile; gridi inapitiwa kwa mpangilio uliowekwa, kwa hiyo hati ile ile yenye ingizo lilelile hutoa mesh na karatasi za data zinazofanana baiti kwa baiti, kwenye kompyuta yoyote na kwenye idadi yoyote ya nyuzi za kazi. Hilo limejaribiwa, pamoja na kivinjari dhidi ya Node.

## Unakoenda baadaye

[Andika jenereta](topic:write-a-generator) hujenga sehemu kwa uwanja; [Maktaba ya uhandisi](topic:engineering-library) hupima ukubwa wake.
