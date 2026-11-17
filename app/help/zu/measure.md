---
title: Linganisa amakhaza, ama-engeli nobuningi
summary: Chofoza izinto ezimbili ku-view ukuze uthole ibanga elincane, i-engeli ne-ΔX ΔY ΔZ; funda ubude bomphetho, ububanzi besimbobo, indawo yobuso noma izixhumanisi zephoyinti; thola ivolumu, ubuningi, isikhungo sobuningi nokungabi nasizinda kwengxenye noma kuhlanganiso.
keywords: measure, distance, minimum distance, angle, length, radius, diameter, area, coordinates, delta, inspect, mass properties, mass, weight, center of mass, centre of mass, inertia, moment of inertia, density, material
from: 20bda0b7
---

**Linganisa** lisebenza kumodeli kuzo zonke izindawo zokusebenza (Design, Form, Simulation, Generative, Manufacture) nakuhlanganiso. Itholakala kumenyu ye-**View** kwiqembu {{ui:Imibono}}, noma cindezela {{key:M}}. Ikhadi livulekela phezulu ngakwesobunxele kwe-view.

## Linganisa into eyodwa

Chofoza i-vertex, umphetho noma ubuso. Ikhadi libonisa:

- **Iphoyinti** (i-vertex, inkabazwe yomphetho noma isikhungo sendilinga): i-X, Y, Z yalo.
- **Umphetho**: oqondile, indilinga noma ijika, nobude balo; kwendilinga futhi iradiyasi, ububanzi nesikhungo.
- **Ubuso**: obuthe batshe, isilinda, ikhoni njalo njalo, nendawo yalo; i-normal yobuso obuthe batshe; iradiyasi nobubanzi besilinda (usayizi wesimbobo). Izindawo zezinhlangothi ezibalwa yi-mesh kernel.
- **Umzimba wonke**: bamba {{key:Shift}} uchofoze ingxenye. Uthola ivolumu yawo, indawo, ubuningi nokungabi nasizinda.

Ipoyinta ibamba ama-vertex, izinkabazwe zemiphetho nezikhungo zendilinga ngaphakathi kwamapikseli angu-10; ichashaza eliluhlaza elincane libonisa ukubanjwa ngaphambi kokuchofoza. Ukuze ukhethe isikhungo sesimbobo, bheka phakathi kwaso; ukuze ukhethe umphetho wayo (indilinga), bheka emphethweni.

## Linganisa phakathi kwezinto ezimbili

Chofoza into yesibili. Ikhadi lengeza:

- **Ibanga elincane** kanye nezindawo ezimbili ezisondele kakhulu, ezidwetshwe ku-view ngomugqa phakathi kwazo.
- **ΔX, ΔY, ΔZ** kusuka kwiphoyinti lokuqala eliseduze kuya kwesesibili.
- **Engeli** phakathi kwezindawo ezimbili ezibhodlwe (phakathi kwama-normal azo, 0–180°), phakathi kwemigqa emibili eqondile noma ama-eksisi (0–90°), noma phakathi komphetho nobuso.
- **Igebe phakathi kwamapuleni** kubuso obubili obuthe batshe obuhambisanayo, **Centre to centre** kwezindilinga noma izimbobo ezimbili, **Axis to axis** kwezimbobo noma izilinda ezimbili ezihambisanayo.

Ukuchofoza okwesithathu kuqala ukukhetha okusha. {{key:Esc}} isula ukukhetha; {{key:Esc}} futhi (noma {{ui:Vala}}) iyavala Ukulinganisa. {{ui:Kopisha}} ifaka imiphumela ku-clipboard njengombhalo onamathebhu, ulungele ukunamathisela ku-spreadsheet.

### Ukunemba kwalo

I-PartCraft yakha ingxenye nge-mesh kernel, ngakho amabanga athathwa ezindaweni ezincane zemesh, nekhadi lithi **approximate: of the facets**: kulungile kubuso obuthe batshe nasezinhlanganweni phakathi kwama-vertex, kancane kancane kukhubazeka ezindaweni ezigobile. Isethingi elinemininingwane **Curves** elicinisiwe lisondeza. Ukulinganisa okunembile ezindaweni zangempela kudinga i-exact kernel: akwakhiwa kulolu hlobo lwalolu hlelo.

## Izinkomba zobuningi

Khetha {{ui:Izakhiwo zobuningi}} ekhadini noma kumenyu ye-{{ui:Imibono}}. Kungxenye, khetha **Material** ekhadini (insimbi, i-aluminium, amapulasitiki nezinye ezinobuningi bazo obuvamile). Kuhlanganiso ingxenye ngayinye isebenzisa impahla esethwe ezakhiweni zayo (khetha ingxenye, bese **Material**), nomphumela uyawo wonke amaxhathi ndawonye.

Ikhadi libonisa ubuningi, ivolumu, indawo, isikhungo sobuningi, i-inertia tensor (Ixx, Iyy, Izz nemikhiqizo Ixy, Iyz, Ixz, ku-kg·mm², mayelana nesikhungo sobuningi ngama-eksisi womhlaba) nezinkathi eziyinhloko. Ngaphandle kwempahla ibonisa okufanayo ngoku-density yeyunithi (mm⁵) akukho buningi.

Izinombolo ziyinembile kusolidi we-tessellated owakhiwa yi-mesh kernel (amabanga egobile njengezinhlamvu), ngakho ingxenye egobile iphuma incane kancane, nekhadi liyasho lokho. Ubuningi bezinto buyizinhlamvu zesimo esivamile sencwadi; impahla noma i-grade yangempela ingahluka ngamaphesenti ambalwa.

## Imikhawulo

- Izinhlamvu zokubamba zingathola iphoyinti elifihliwe ngemuva kwezinye izinto; hlola ukuthi ikhadi libonisa okubhekisele kuwo.
- Linganisa liyavalwa uma uvula isketch noma ishidi lokudweba, noma ushintsha indawo yokusebenza.
