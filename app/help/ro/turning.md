---
title: Strunjire la strung
summary: Fațarea, degroșarea, finisarea, canelarea, retezarea, filetarea și găurirea unei piese strunjite, din profilul pe care îl face piesa când se rotește. Scule de strung, avansuri pe rotație, posturi de strung și ce nu a fost verificat.
keywords: strunjire, strung, strunjit, fațare, degroșare, finisare, canelare, canelură, retezare, tăiere, filet, filetare, g32, g33, g96, viteză constantă a suprafeței, css, rază de vârf, plăcuță, bară, mandrină, diametru, avans pe rotație, g71, g76
from: d8cc53b0
---

Fabricație are șapte operații pentru strung. Ele lucrează pe orice piesă: ce se taie este **profilul pe care îl face piesa când se rotește** în jurul centrului semifabricatului, astfel încât o piesă care nu este rotundă este strunjită până la forma rotundă care o ține.

**Nimic de aici nu a fost rulat pe un strung.** Traseele sunt verificate față de geometrie prin teste; cele două posturi pentru strung urmează codurile documentate ale comenzilor. Verificați programul întâi în simulatorul propriu al comenzii și în aer.

## Configurare

Pe fila **Configurare**:

- **Axa sculei** este axa arborelui, Z al strungului. Fața piesei este la +Z; mandrina ține celălalt capăt.
- **Semifabricat**: alegeți {{ui:Cilindru}}, bara. Deplasarea sa de sus este ce îndepărtează tăierea de fațare.
- **Originea de lucru**: un centru pe partea de sus a semifabricatului sau a modelului pune Z0 pe fața frontală, locul obișnuit.
- **Comanda**: {{ui:Strung în stil Fanuc (.nc)}} sau {{ui:Strung LinuxCNC (.ngc)}}. Un post de frezare refuză un program de strunjire și spune asta.
- **Turația maximă a arborelui**: limita sub care este menținută viteza suprafeței.

{{ui:Mai multe}} din bara Fabricație listează cele șapte operații de strunjire în partea de sus a filei **Operații**. Prima pe care o adăugați aduce propria sa sculă: o **plăcuță de strunjire** (rază de vârf, unghi al plăcuței, unghi al muchiei tăietoare) sau o **lamă de canelare** (lățime, rază de colț, cât de adânc ajunge). Schimbați-le pe fila **Scule**. Avansurile sunt pe rotație, iar viteza este o viteză a suprafeței, în m/min, pe care comanda o menține pe măsură ce diametrul se schimbă; dați unei scule o turație proprie pentru a fixa viteza în schimb.

## Operațiile

| Operație | Ce face |
|---|---|
| {{ui:Față}} | Fațează capătul barei până la piesă, câte un pas pe adâncime, de la exterior până chiar după centru. |
| {{ui:Degroșare}} | Treceri de-a lungul lui Z la o **adâncime de așchiere** distanță, până la contur plus **adaosul de lăsat**; apoi o trecere de-a lungul conturului pentru a îndepărta treptele. O vale între doi umeri este intrată printr-o scufundare de o adâncime de așchiere. |
| {{ui:Finisaj}} | O trecere de-a lungul conturului, la o fracțiune din avansul sculei. |
| {{ui:Canelură}} | Scufundă lama alăturat oriunde poate lua mai mult decât limita de adaos care mai este acolo: canelurile la care plăcuța de strunjire nu putea ajunge. **De la / Până la Z** o îngustează. |
| {{ui:Retezare}} | Taie piesa chiar în spatele feței din spate, până puțin după centru, cu pași dacă setați unul. |
| {{ui:Filet}} | Un filet exterior: diametrul major, pasul, lungimea, numărul de treceri. Adâncimea 0 înseamnă 0.6134 × pas (un filet de 60°). Fiecare trecere ia aceeași arie de așchie; treceri de netezire repetă ultima. |
| {{ui:Găurire}} | Un burghiu pe linia centrală până la o adâncime, cu pași. |

## Cum este ținută scula departe de piesă

Plăcuța este tratată așa cum este: cercul vârfului ei și, în spatele lui, muchia din spate, o linie dreaptă al cărei unghi este 180° minus unghiul muchiei tăietoare și unghiul plăcuței. Această formă este coborâtă pe contur în fiecare punct de-a lungul lui Z, iar traseul este locul unde ajunge să stea. Deci:

- **Raza vârfului este deja în traseu.** Posturile nu scriu `G41` sau `G42`; coordonatele sunt punctul programat al sculei (colțul pătratului rotunjit la vârf).
- Plăcuța **nu poate urmări un perete mai abrupt decât muchia ei din spate**. O canelură în spatele unui umăr este lăsată în pace, iar operația de finisare spune cât din contur nu a putut ajunge. O operație {{ui:Canelură}} o ia.
- Semifabricatul este urmărit de-a lungul lui Z după fiecare tăietură, astfel încât degroșarea nu taie aerul, canelarea găsește ce a rămas, iar fiecare operație arată volumul pe care l-a îndepărtat și dacă a tăiat în piesă.

## Limite

- **Doar strunjire exterioară**: nu există bară de alezare, caneluri sau filete interioare, nici canelări pe față.
- Un singur arbore, piesa ținută la −Z. Nu există subarbore, scule active, axă C sau Y, nici lunetă fixă sau mișcări ale contrapunctului.
- Traseele sunt deplasări drepte: curbele sunt linii scurte în limita toleranței (fără `G2`/`G3`), iar degroșarea și filetarea sunt scrise trecere cu trecere (fără cicluri `G71` sau `G76`).
- Filetarea este treceri drepte cu o ieșire dreaptă la capăt; dați filetului o canelură de degajare. Filetul nu este arătat în semifabricat.
- Găurirea pe centru nu schimbă modelul semifabricatului.
- Mandrina, turela și fălcile mandrinei nu sunt verificate. Setați **Oprire la Z** ca să țineți scula departe de fălci.
- Avansurile și turațiile sunt valori de pornire, ca la frezare.
