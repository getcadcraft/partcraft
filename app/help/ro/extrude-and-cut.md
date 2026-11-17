---
title: Extrudarea unei proeminențe și tăierea prin ea
summary: Transformați o schiță într-un solid cu Extrudare, setați adâncimi oarbe, de la planul median, până la o față sau pe două direcții, o înclinare sau un singur contur al schiței, apoi schițați pe o față și folosiți Decupare pentru o buzunărire sau o fantă străpunsă.
keywords: extrudare, proeminență, proeminență extrudată, decupare, decupare extrudată, buzunar, prin tot, oarbă, plan median, inversare, adâncime, decupare-extrudare, proeminență-extrudare, placă, până la față, până la următoarea față, până la vârf, decalare de la suprafață, direcția 2, două direcții, înclinare la extrudare, conicitate, contur, regiune, contururi selectate
from: 3b13ff10
---

{{ui:Extrude}} împinge conturul închis al unei schițe drept în afara planului ei, pentru a crea material. {{ui:Cut}} face același lucru, dar elimină material. Ambele sunt aceeași operație pe dedesubt; puteți trece una în cealaltă mai târziu.

## Extrudarea unei proeminențe

1. Desenați un contur închis și închideți schița (vezi [Desenarea primei schițe](topic:sketch-basics)). Ea rămâne selectată.
2. Alegeți {{ui:Extrude}}.

Apare un solid de 10 mm, "Extrude1" se adaugă în istoric cu schița lui indentată sub el, iar bara de stare afișează "Extrude1 adăugat. Modificați-i valorile în dreapta."

**Ce schiță se folosește:** schița pe care tocmai ați închis-o sau schița selectată în istoric. Fără nimic selectat, PartCraft ia cea mai recentă schiță pe care nicio operație nu o folosește încă. Dacă nu există niciuna: "Mai întâi creați o schiță: alegeți un plan, Schiță, desenați un contur închis, Ieșire."

### Setați adâncimea și direcția

În panoul din dreapta:

| Setare | Alegeri | Implicit |
|---|---|---|
| **Operație** | Proeminență (adaugă material), Decupare (elimină material), Intersecție (păstrează suprapunerea), Corp nou (încă nerealizat în această versiune: are nevoie de un nucleu exact) | Proeminență |
| **Capăt** | Oarbă (o adâncime), Plan median (în ambele sensuri), Prin tot, Până la față sau plan, Până la următoarea față, Până la vârf, Decalare de la față | Oarbă |
| **Adâncime (mm)** | Orice dimensiune peste zero (afișată pentru Oarbă și Plan median) | 10 |
| **Inversare direcție** | Crește pe cealaltă parte a planului schiței (nu se afișează pentru Plan median) | Oprit |

Tastați un număr și apăsați {{key:Enter}} sau {{key:Tab}}: piesa se reconstruiește imediat. **Plan median** pune jumătate din adâncime de fiecare parte a schiței.

### Până la o față, la următoarea față sau la un vârf

Încă nerealizat în această versiune: fiecare capăt "până la" are nevoie de un nucleu exact, iar operația spune "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." Folosiți o adâncime Oarbă pe care o măsurați. Cu un nucleu exact, capetele funcționează astfel:

- **Până la față sau plan**: **Până la** ia o față plană (Alegere, apoi faceți clic pe ea) sau un plan de referință. O față paralelă cu schița dă o adâncime exactă; una înclinată taie capătul pe pantă. Dacă fața este în spatele schiței: "… Încercați Inversare direcție."
- **Până la următoarea față**: se oprește la prima față plană a corpului pe care îl întâlnește extrudarea (fețele curbe nu sunt acceptate aici: aplicația o spune).
- **Până la vârf**: se oprește la nivelul unui vârf (faceți clic lângă capătul unei muchii) sau al unei operații de punct.
- **Decalare de la față**: ca Până la față, oprindu-se cu **Decalare (mm)** înainte de ea (măsurată perpendicular pe față).

### Două direcții, înclinare, un singur contur

- **A doua direcție** (Oarbă): extrudează și **A doua adâncime (mm)** pe cealaltă parte a schiței.
- **Conicitate (°)**: laturile se înclină pe măsură ce merg (negativ: spre exterior), ca o înclinare; doar o direcție. Încă nerealizat în această versiune (are nevoie de un nucleu exact): lăsați-o la 0.
- **Regiuni**: **Alegere regiuni**, apoi faceți clic în interiorul buclelor de extrudat; sunt folosite doar acele regiuni (un cerc în interiorul unui pătrat: faceți clic în cerc pentru un cilindru, între ele pentru o placă cu gaură). **Toate** revine la fiecare buclă.

Sub acestea, **Cotele schiței** listează cotele de control ale schiței, ca să puteți modifica dimensiunile profilului fără a deschide schița.

:::note
**Prin tot este doar pentru decupări.** O proeminență setată pe Prin tot eșuează cu "Prin tot este pentru decupări. Folosiți o adâncime pentru o proeminență." Trecerea unei operații de la Decupare înapoi la Proeminență schimbă Prin tot în Oarbă pentru dvs.
:::

## Decupați o buzunărire

1. Faceți clic pe fața plană în care vreți să tăiați. Ea se evidențiază, iar panoul din dreapta spune **Față**.
2. Alegeți {{ui:Sketch on this face}} (sau {{ui:Sketch}} din bara de instrumente).
3. Desenați conturul buzunarului, de exemplu un dreptunghi, și cotați-l.
4. Alegeți {{ui:Exit}}.
5. Alegeți {{ui:Cut}}. Începe ca **Prin tot**: elimină material prin toată piesa.
6. Pentru o buzunărire, setați **Capăt** pe **Oarbă (o adâncime)** și tastați **Adâncime (mm)**.

O decupare intră în material, în direcția opusă feței pe care ați schițat. Dacă bara de stare spune "Nu există nimic de tăiat pe această parte a schiței. Încercați cealaltă direcție.", bifați **Inversare direcție**.

O schiță de pe fundul buzunarului urmează fundul: modificați adâncimea buzunarului și schița se mută odată cu el.

## Trageți sau împingeți o față întreagă

Ca să faceți o față să iasă mai în afară sau să se afunde, nu trebuie să desenați conturul ei. Faceți clic pe fața plană, apoi în panoul din dreapta:

- {{ui:Extrude from it}} trage fața în afară: PartCraft adaugă o schiță pe față, cu conturul ei (găurile din față rămân găuri), și o Extrudare de 10 mm.
- {{ui:Cut into it}} împinge fața în interior: aceeași schiță și o Decupare pe jumătate în piesă.

Ambele sunt un singur pas: {{key:Mod+Z}} elimină schița și operația împreună. Noua operație este selectată, deci tastați imediat un număr și apăsați {{key:Enter}} pentru adâncime. Conturul este copiat ca linii și arce fixe: nu urmărește modificările ulterioare ale feței. Dacă o parte din contur nu poate fi copiată (o curbă liberă), se deschide schița cu ce s-a putut copia; finalizați-o, apoi alegeți {{ui:Exit}} și {{ui:Extrude}} sau {{ui:Cut}}.

## Profiluri cu insule

O schiță poate avea mai multe bucle închise. Buclele alăturate devin proeminențe separate (sau decupări); o buclă aflată în interiorul alteia devine o gaură prin proeminență. De exemplu, un dreptunghi cu două cercuri în interior se extrudează ca o placă cu două găuri.

Ca să folosiți doar unele bucle, alegeți-le cu **Regiuni** (mai sus); o altă operație poate folosi celelalte bucle ale aceleiași schițe.

## Editați mai târziu

- Faceți clic pe "Extrude1" în istoric ca să reveniți la setările lui.
- Faceți dublu clic pe schița lui (indentată sub el) ca s-o deschideți; închideți-o ca să reconstruiți.
- Vezi [Modificarea unei piese prin istoricul ei](topic:edit-history) pentru suprimare, derulare înapoi, reordonare și ștergere.

## Mesaje frecvente

| Mesaj | Ce trebuie făcut |
|---|---|
| "The sketch has no closed profile to extrude." | Schița nu are o buclă închisă de linii pline. Închideți golurile, sau treceți din nou liniile de construcție la linii obișnuite cu {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | Deschideți schița și uniți acel capăt cu următoarea linie |
| "There is nothing to cut yet." | O decupare are nevoie de un solid de tăiat. Creați mai întâi o proeminență |
| "Nothing is left of the part after this." | Decuparea a eliminat tot. Verificați dimensiunea și direcția ei |

Mai multe în [Depanare](topic:troubleshooting).
