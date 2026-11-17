---
title: Suprojektuoti BimCraft elementą ir įrašyti atgal
summary: Detalė, atsiųsta iš BimCraft, atsidaro su aplinkiniu pastatu, pilka ir tik skaitoma. Pakeiskite ją, tada įrašykite atgal, kad BimCraft galėtų priimti naują formą.
keywords: bimcraft, bim, elementas, siųsti, įrašyti atgal, ryšys, pastatas, kontekstas, kaimynai, atrama, laikiklis, ifc, priimti
from: 0978fe53
---

## Ką darysite

Dirbsite su detale, atsiųsta iš BimCraft modelio, jos vietoje pastate, ir grąžinsite naują formą atgal.

## Žingsniai

1. BimCraft pasirinkite elementą ir pasirinkite {{ui:Detalės ryšiai}} › {{ui:Siųsti į PartCraft}}. PartCraft atidaro jį kaip naują detalę. Būsenos juostoje rašoma, kad tai BIM elementas.
2. Elementai aplink jį (iki 3 m atstumu) nupiešti pilkai. Jie čia tam, kad projektuotumėte pagal juos. Jų negalite pasirinkti ar keisti, ir jie neįrašomi į detalės failą.
3. Keiskite detalę kaip įprastai: pjaukite, pridėkite, gręžkite, veidrodžiškai atspindėkite. Jos pradžia ir ašys yra paties elemento, todėl detalė grįš į tą vietą, kur buvo.
4. Pasirinkite {{ui:Failas}} › {{ui:Eksportuoti}} › {{ui:Įrašyti atgal į BimCraft}}. Būsenos juostoje rašoma, kokią revizijos versiją išsiuntėte.
5. BimCraft elementas rodomas kaip pakeistas, kol ten esantis asmuo jo nepriims.

## Ko turėtumėte matyti

- Detalė failo viduje išsaugo savo ryšį. Atidarę ją vėliau, rasite būsenos juostoje, kad tai vis dar BIM elementas. Pilkas pastatas grįžta tol, kol naršyklė dar saugo paketą, su kuriuo jis buvo atsiųstas.
- Įrašius atgal dar kartą, siunčiama revizija 2, 3 ir t. t. BimCraft išsaugo naujausią.

## Verta žinoti

- Forma grąžinama kaip tinklas milimetrais, elemento paties ašyse. Elementai lieka PartCraft.
- {{ui:Įrašyti atgal į BimCraft}} nieko nedaro detalei, kuri nėra atėjusi iš BimCraft.
- Detalė be kieto kūno neturi ką siųsti.
- Abi programos turi būti atidarytos toje pačioje naršyklėje: nieko neįkeliama, du puslapiai tiesiog perduoda elementą vienas kitam.
