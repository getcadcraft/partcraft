---
title: Începeți un manual în Ilustrare
summary: Spațiul de lucru Ilustrare face manuale din proiect: vizualizări, desene explodate în linii cu baloane și o listă de piese, instrucțiuni pas cu pas, animații și un fișier 3D interactiv. Un manual este un fișier propriu.
keywords: ilustrare, manual, ilustrație tehnică, documentație, vedere explodată, listă de piese, instrucțiuni, partcraft-manual
from: e447e0ab
---

**Ilustrare** este spațiul de lucru pentru documentele de care au nevoie oamenii în jurul unui proiect: vederi explodate cu baloane și listă de piese, ilustrații în desen în linii pentru manuale, instrucțiuni pas cu pas, animații și un fișier 3D pe care un client îl poate deschide fără CAD. Alegeți {{ui:Ilustrare}} din comutatorul {{ui:Spațiu de lucru}} de la începutul barei de instrumente.

Un **manual** este un fișier propriu (`<name>.partcraft-manual.json`). Acesta păstrează o copie a formei fiecărei piese, arborele de produs și proprietățile pieselor, plus o legătură către locul de unde provin, astfel încât manualul poate fi lucrat în timp ce proiectul continuă. Când proiectul se schimbă, [Actualizarea unui manual din proiect](topic:illustrate-update) aduce modificările.

## Creați unul

Faceți clic pe {{ui:Nou}} din grupul {{ui:Manual}}, apoi:

- {{ui:Din piesa deschisă}}: piesa deschisă în Proiectare.
- {{ui:Din ansamblul deschis}}: apare în locul celei de mai sus când este deschis un ansamblu; piesele sale, pozițiile lor, numerele de piesă, materialele și vederile explodate vin odată cu el.
- {{ui:Dintr-un fișier de ansamblu…}}: un `.partcraft-asm.json` salvat; PartCraft construiește mai întâi piesele sale.
- {{ui:Dintr-un alt fișier…}}: glTF (.glb, .gltf), OBJ, STL sau 3MF. Arborele și numele din fișier sunt păstrate, iar copiile unei piese (aceeași formă plasată de două ori) devin o singură piesă cu o cantitate. Fișierele STL și OBJ nu spun ce unitate folosesc, deci vi se cere. Fișierele STL sunt citite cu Z în sus; glTF și 3MF își indică singure axa.

Cât timp un manual este deschis, Ilustrare arată propria copie a pieselor manualului; piesa sau ansamblul deschis în Proiectare este ascuns până când reveniți la Proiectare.

## Salvare și deschidere

{{ui:Salvare}} din grupul {{ui:Manual}} (sau {{key:Mod+S}}) salvează manualul; {{ui:Deschidere}} deschide unul. Fiecare modificare din Ilustrare este un pas în istoricul propriu al manualului: {{ui:Anulare}} și {{ui:Refacere}} acționează asupra manualului cât timp Ilustrare este deschisă.

## Încă nerealizat

- Fișierele STEP nu se deschid încă în {{ui:Dintr-un alt fișier…}}. Deschideți STEP-ul în Proiectare (intră ca un corp solid: vezi [Deschiderea unui fișier STEP și lucrul pe el](topic:import-step)) și începeți manualul {{ui:Din piesa deschisă}}, sau salvați-l ca glTF, 3MF, OBJ sau STL.
- ModelCraft și BimCraft nu pot trimite încă direct un model către Ilustrare: salvați-l ca glTF (.glb) și folosiți {{ui:Dintr-un alt fișier…}}.

Continuare: [Vizualizări și aspecte](topic:illustrate-views).
