---
title: Tekniset kuvitukset: viivapiirrokset, kuvat ja arkit
summary: Vie mikä tahansa näkymä vektorimuotoisena viivapiirroksena (SVG tai PDF) kolmella viivanpaksuudella, piilolinjat katkoviivana tai pois jätettynä, leikkauspinnat viivoitettuina ja valinnaisina täyttöinä, tai PNG-kuvana; useampi näkymä voidaan sijoittaa yhdelle arkille.
keywords: havainnollista, viivapiirros, tekninen kuvitus, svg, pdf, png, piilolinjat, siluetti, viivoitus, arkki, vienti
from: 0e9bea63
---

{{ui:Vie}} ryhmässä {{ui:Ulos}} avaa vientidialogin:

- {{ui:Mitä}}: kohtaus sellaisena kuin se on nyt, yksi näkymä tai kaikki näkymät.
- {{ui:Muodossa}}: **PDF** tai **SVG** (vektorimuotoinen viivapiirros; molemmat kirjoitetaan samasta piirroksesta), **PNG viivapiirroksena** tai **PNG-kuva 3D-näkymästä** (enintään 4096 pikseliä leveä) sekä [interaktiivinen 3D-tiedosto](topic:illustrate-interactive).
- {{ui:Sivut}}: yksi näkymä per sivu tai kaikki näkymät yhdellä arkilla, nimi sen alla. {{ui:Paperi}}: A4, A3, Letter tai Tabloid.
- {{ui:Piilolinjat}}: katkoviivana tai pois jätettynä. {{ui:Täytöt}}: näkymän ulkoasun mukaan, ei mitään, tasaväri tai varjostettu. {{ui:Piirrä myös pehmeät reunat}} lisää yksityiskohtaviivoja.

Viivapiirroksessa on kolme paksuutta: ääriviivat (siluetit, avoimet reunat ja leikkausviivat), terävät reunat ja yksityiskohtaviivat. Leikkaustason tai laatikkoleikkauksen leikkauspinnat on viivoitettu. Räjäytysnäkymissä jokaisesta osasta piirtyy ketjuviivajälki sen paikasta; myös numerointipallot, merkinnät, osaluettelo ja suurennuslasi piirretään.

Viivapiirros lasketaan osien muodoista verkkomenetelmällä (sama, jota PartCraftin piirustusarkki käyttää ilman tarkkaa ydintä), joten kaarevat pinnat piirretään fasettien avulla, niin kuin malli ne pitää sisällään.

## Ei vielä toteutettu

- Polunjäljityksen laatuisia kuvia (ModelCraftin renderöijä) ei tarjota tässä; PNG-kuvat ovat 3D-näkymän oma ulkoasu.
