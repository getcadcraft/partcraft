---
title: Măsurarea distanțelor, unghiurilor și masei
summary: Faceți clic pe două elemente din vedere pentru distanța minimă, unghiul și ΔX ΔY ΔZ; citiți lungimea unei muchii, diametrul unei găuri, aria unei fețe sau coordonatele unui punct; obțineți volumul, masa, centrul de masă și inerția unei piese sau ale unui ansamblu.
keywords: măsurare, distanță, distanță minimă, unghi, lungime, rază, diametru, arie, coordonate, delta, inspecție, proprietăți de masă, masă, greutate, centru de masă, inerție, moment de inerție, densitate, material
from: 20bda0b7
---

**Măsurare** lucrează pe model în fiecare spațiu de lucru (Design, Form, Simulation, Generative, Manufacture) și într-un ansamblu. Se află în meniul {{ui:Vederi}} din grupul {{ui:Vizualizare}}, sau apăsați {{key:M}}. Un card se deschide peste colțul din stânga sus al vederii.

## Măsurarea unui singur element

Faceți clic pe un vârf, o muchie sau o față. Cardul arată:

- **Un punct** (un vârf, mijlocul unei muchii sau centrul unui cerc): X, Y, Z ale lui.
- **O muchie**: dreaptă, cerc sau curbă, și lungimea ei; pentru un cerc, și raza, diametrul și centrul.
- **O față**: plană, cilindru, con etc., și aria ei; normala unei fețe plane; raza și diametrul unui cilindru (dimensiunea unei găuri). Ariile sunt ale fațetelor pe care le construiește nucleul de plase.
- **Tot corpul**: țineți apăsat {{key:Shift}} și faceți clic pe piesă. Obțineți volumul, aria, masa și inerția (vezi mai jos).

Indicatorul se fixează de vârfuri, mijloacele muchiilor și centrele cercurilor în limita a 10 pixeli; un mic punct albastru arată fixarea înainte de clic. Ca să alegeți centrul unei găuri, îndreptați cursorul spre mijlocul găurii; ca să alegeți marginea ei (cercul), îndreptați-l spre margine.

## Măsurarea între două elemente

Faceți clic pe un al doilea element. Cardul adaugă:

- **Distanța minimă** și cele două puncte cele mai apropiate, desenate în vedere cu o linie între ele.
- **ΔX, ΔY, ΔZ** de la primul punct cel mai apropiat la al doilea.
- **Unghi** între două fețe plane (între normalele lor, 0–180°), între două muchii drepte sau două axe (0–90°) sau între o muchie și o față.
- **Distanța dintre plane** pentru două fețe plane paralele, **Centru la centru** pentru două cercuri sau două găuri, **Axă la axă** pentru două găuri sau cilindri paraleli.

Un al treilea clic începe o pereche nouă. {{key:Esc}} șterge alegerile; încă un {{key:Esc}} (sau {{ui:Închidere}}) închide Măsurarea. {{ui:Copiere}} pune rezultatele pe clipboard ca text cu tabulatori, gata de lipit într-o foaie de calcul.

### Cât de exactă este

PartCraft construiește piesa cu nucleul de plase, deci distanțele se calculează pe fațetele plasei, iar cardul spune **aproximativ: pe fațete**: este corect pentru fețele plane și între vârfuri, puțin inexact pentru cele curbe. O setare mai fină, **Curbe**, le apropie. Măsurarea exactă pe suprafețele reale are nevoie de un nucleu exact: nu este încă realizată în această versiune.

## {{ui:Proprietăți de masă}}

Alegeți {{ui:Proprietăți de masă}} în card sau în meniul {{ui:Vederi}}. La o piesă, alegeți un **Material** în card (oțel, aluminiu, materiale plastice și altele, cu densitățile lor obișnuite). Într-un ansamblu, fiecare piesă folosește materialul stabilit în proprietățile ei (selectați piesa, apoi **Material**), iar rezultatul este pentru toate piesele împreună.

Cardul arată masa, volumul, aria, centrul de masă, tensorul de inerție (Ixx, Iyy, Izz și produsele Ixy, Iyz, Ixz, în kg·mm², față de centrul de masă pe axele lumii) și momentele principale. Fără material arată aceleași valori pe unitate de densitate (mm⁵) și fără masă.

Cifrele sunt exacte pentru corpul tesselat pe care îl construiește nucleul de plase (suprafețele curbe ca fațete), deci o piesă rotundă iese puțin mai mică, iar cardul o spune. Densitățile materialelor sunt valori tipice din manuale; un aliaj sau o clasă reală poate diferi cu câteva procente.

## Limite

- Atracțiile pot găsi un punct ascuns în spatele altei geometrii; verificați că {{ui:Copiere}} și cardul arată ce ați vrut.
- Măsurarea se închide când deschideți o schiță sau foaia de desen sau când schimbați spațiul de lucru.
