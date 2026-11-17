---
title: Studiu magnetic al unei schițe
summary: Transformați profilele închise ale schițelor în cadrul unui model magnetic plan (fier, magneți, bobine), vedeți câmpul și citiți forța și cuplul asupra unui corp.
keywords: magnet, magnetic, magnetostatic, câmp, densitate de flux, forță, cuplu, bobină, jug, fier, curbă B–H, magnet permanent, actuator, motor, solenoid, maxwell
from: 604efc3b
---

Folosiți {{ui:Mai multe}} din bara de instrumente Operații › {{ui:Studiu magnetic al schițelor…}} pe o piesă care are schițe. Fiecare formă închisă din schițele bifate este o regiune a unui model plan; studiul calculează câmpul magnetic B, forța și cuplul asupra unui corp ales de dvs.

## Pași

1. Desenați corpurile ca forme închise în schițe: un jug de fier, un magnet, o bobină. Corpurile care se ating au o muchie comună, deci puneți-le în schițe diferite; corpurile separate sau cele una în alta (o fereastră într-un jug) pot fi în aceeași schiță. Păstrați schițele pe același plan.
2. Deschideți studiul și bifați schițele de folosit. Fiecare profil închis primește un rând, numerotat. Spuneți ce este: {{ui:Aer}}, {{ui:Fier}} (o permeabilitate sau o curbă B–H introdusă ca perechi de B în tesla și H în A/m), un {{ui:Magnet permanent}} (Br în tesla, direcția lui ca unghi față de axa x a schiței și permeabilitatea lui de revenire) sau o {{ui:Bobină}} (curentul total prin profilul ei, spire înmulțite cu amperi; semnul arată sensul de curgere).
3. Bifați {{ui:Forța și cuplul asupra acestui corp}} pentru corpurile la care le doriți. Dați adâncimea piesei în afara schiței.
4. Alegeți plasa și aerul din jurul modelului, apoi {{ui:Rulare}}.

## Ce ar trebui să vedeți

- Densitatea de flux |B| peste model, de la albastru închis (mic) la roșu (mare), cu profilele numerotate.
- Cel mai puternic câmp și locul lui, numărul de triunghiuri și, pentru fiecare corp bifat, forța pe x și pe y și cuplul în jurul centrului lui, pentru adâncimea dată.
- {{ui:Salvare rezultate (CSV)}} scrie numerele.

## De reținut

- Este un model plan, staționar: totul este pe metru de adâncime, fără curenți turbionari și fără histerezis, iar un magnet este o linie dreaptă de revenire (nu poate fi demagnetizat).
- Modelul se află într-o cutie de aer al cărei margine este un perete. Comparați două dimensiuni ale cutiei de aer și plasele Normală și Fină: o forță calculată din câmpul din jurul unui corp este la fel de bună ca plasa de acolo.
- Fierul cu doar o permeabilitate nu se saturează niciodată. Când câmpul trece de 2 T, studiul ridică un ⚠ în lista Probleme: dați fierului o curbă B–H. Numerele dintr-un rând nou sunt exemple (fier μr 2000, un magnet de 1,2 T), nu date de catalog ale unui material.
- Un corp are nevoie de spațiu în jur ca să preia forța: dacă alt corp este prea aproape, studiul o spune.
- Un ajutor pentru desen, nu o aprobare de inginerie.

## Urmează

- [Câmpul magnetic în 2D (tutorial)](topic:magnetic-fields-2d)
