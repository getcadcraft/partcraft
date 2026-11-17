---
title: Okvirji iz jeklenih profilov
summary: Postavite jeklene profile vzdolž črt ene ali več skic, da naredite zvarjen okvir: pokošene ali čelne vogale, deli, prirezani za prileganje, končni pokrovi, rebra in seznam krojenja z dolžinami in koti koncev.
keywords: varjenec, konstrukcijski element, okvir, jeklen okvir, cev, kvadratna cev, hss, rhs, shs, cev, chs, široka prirobnica, i-nosilec, w nosilec, ipe, hea, heb, U-profil, upn, kotnik, pokos, izrez, čelni stik, končni pokrov, rebro, seznam krojenja, iso
from: 59071e5a
---

**Konstrukcijski element** postavi jeklen profil vzdolž vsake črte skic, ki jih izberete. Okvir narišite kot črte (vsaka črta je en element), nato izberite profil: elementi so zgrajeni, njihovi vogali prirezani in podaljšani, seznam krojenja pa pove, kako dolgo rezati vsak kos in pod kakšnim kotom.

## Naredite okvir

1. Narišite okvir kot črte v skici, na primer pravokotnik na zgornji ravnini. Črte, označene kot pomožne, so izpuščene.
2. Ko je skica izbrana, izberite {{ui:Več}} › {{ui:Konstrukcijski element}}. Vsaka črta skice dobi element.
3. V podoknu izberite **Družino** in **Velikost** profila. Družine so tabele AISC (W, S, C, L, cevi HSS, cev) in EN 10365 (IPE, HEA, HEB, UPN).

### Okvir v 3D

Črte iz več skic naredijo en okvir: vodoravni zgornji pravokotnik, skiciran na ravnini nad njim, in noge, skicirane na ravninah, ki stojijo pokonci, se stikajo na svojih koncih v 3D. Pod **Vzdolž črt** v podoknu označite vsako skico, katere črte elementi sledijo. Konci, ki se stikajo znotraj enega mikrometra, so povezani.

## Nastavite profil na njegovo črto

- **Zasuk (°)** zavrti profil okoli njegove črte. Nosilec stoji s svojo globino navpično (pri navpičnem elementu njegova globina kaže proti sprednji strani).
- **Na črti** izbere, katera točka profila sedi na črti: središče, oglišče ali sredina stranice obrisa profila. „Spodnja sredina“ postavi okvir na zgornjo stran ravnine skice namesto skozi njo.

## Vogali in stiki

| Kjer se elementi stikajo | Kaj se zgodi |
|---|---|
| Dva elementa konec na konec, **Vogali: Pokošeno** | Oba sta prirezana na ravnini na pol poti med njima, kot okvir slike |
| Dva elementa konec na konec, **Vogali: Čelno** | Prvi se nadaljuje do zadnje ploskve drugega; drugi je prirezan ravno ob bližnji ploskvi prvega |
| Element se konča na sredini drugega (T) | Prirezan je, da se prilega zunanji strani drugega elementa |
| Trije ali več se končajo v eni točki | Prvi se nadaljuje ravno mimo drugih; drugi so prirezani, da se prilegajo njemu |

Prvi element je tisti, čigar črta je prva: črte ohranijo vrstni red, v katerem so bile narisane, skica za skico v vrstnem redu, v katerem so bile skice označene.

## Končni pokrovi in rebra

- **Končni pokrovi** zaprejo vsak prosti konec s ploščo iz obrisa profila debeline, ki jo nastavite, zunaj konca.
- **Rebra** postavijo trikotno ploščo v vsak vogal, kjer se dva elementa stikata pod kotom: **Velikost rebra** vzdolž vsakega elementa od vogala, **Debelina rebra** čez, centrirano na ravnini vogala.

## Seznam krojenja

Podokno prikaže vsak kos, enaki kosi so združeni: profil, dolžina (od dolge točke do dolge točke, kot bi jo označili za žago), kako je vsak konec rezan (ravno, pod kotom od pravokotnega ali prirezan za prileganje) in kateri elementi so. Končni pokrovi in rebra so navedeni z njihovimi velikostmi. {{ui:Shrani seznam krojenja (CSV)}} ga shrani za preglednico.

Element, prirezan za prileganje okrogli cevi z zaobljenimi vogali, sega malo v zaobljenje njenega vogala, zato je njegova dolžina od dolge točke do dolge točke nekaj milimetrov več kot razmik med ploskvama.

## Omejitve

- Elementi sledijo samo ravnim črtam; loki in zlepki v skici so izpuščeni.
- Stiki so rezani, ne zvarjeni: zvarnih kroglic ni narisanih, okvir pa je eno telo.
- Profili so narisani iz mer tabele: oblike W z korenskim zaobljenjem, S in U-profili z vzporednimi prirobnicami, cevi z zaobljenimi vogali; luknje, priprave koncev in zvarne reže niso narejene samodejno.
- Konstrukcijski elementi se gradijo z mrežnim jedrom. Ko je natančno jedro vključeno (samo razvijalci), to sporočijo in niso zgrajeni.
