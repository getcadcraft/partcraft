---
title: Găurirea și lamarea în punctele schiței
summary: Puneți puncte într-o schiță pe o față, faceți găuri simple, lamate, înecate conic sau filetate (metric ISO) în fiecare punct, setați diametrul și adâncimea și reparați găurile care sunt forate în sens greșit.
keywords: gaură, asistent de găuri, burghiu, filet modelat, imprimare 3D, lamare, înecare conică, filetată, burghiu de filetare, filet metric, M6, prin tot, gaură oarbă, gaură de șurub, puncte, centre de găuri
from: 8e1eef83
---

{{ui:Gaură}} face câte o gaură în fiecare punct liber al unei schițe. Un punct liber este unul făcut cu unealta Punct, nu capătul unei linii sau centrul unui cerc.

## Găuri într-o față

1. Faceți clic pe fața plană în care se face gaura, apoi alegeți {{ui:Schiță pe această față}}.
2. Apăsați {{key:P}} și faceți clic unde merge fiecare gaură. Cotați punctele față de muchii sau de origine dacă contează poziția (vezi [Definirea completă a unei schițe](topic:relations-dimensions)).
3. Alegeți {{ui:Ieșire}}.
4. Alegeți {{ui:Gaură}}.

Găurile trec prin piesă, cu 6 mm în diametru. Panoul din dreapta arată **Găuri**: câte s-au făcut, „una pe punct de schiță”.

**O gaură, rapid:** faceți clic pe fața plană unde merge gaura și alegeți {{ui:Gaură aici}} în panoul din dreapta. PartCraft adaugă o schiță pe față cu un punct acolo unde ați făcut clic și o gaură prin piesă, într-un singur pas. Scrieți imediat un număr și apăsați {{key:Enter}} pentru diametrul ei. Ca s-o plasați exact, deschideți schița nouă și cotați punctul.

**Ce schiță se folosește:** schița pe care tocmai ați închis-o sau cea selectată; altfel cea mai recentă schiță nefolosită care are puncte libere. Dacă nu există niciuna: „Mai întâi realizați o schiță cu puncte acolo unde merg găurile (Schiță pe o față, apoi Punct).”

## Setări

| Setare | Alegeri | Implicit |
|---|---|---|
| **Tip** | Simplă, Lamare, Înecare conică, Filetată (metric ISO) | Simplă |
| **Diametru (mm)** | Diametrul găurii | 6 |
| **Prin tot** | Bifată: prin toată piesa. Debifați pentru o gaură oarbă | Bifată |
| **Adâncime (mm)** | Afișată când Prin tot este debifată | 10 |
| **Diametru lamare ⌀** | Afișată la Lamare: diametrul adânciturii mai late | 11 |
| **Adâncime lamare** | Afișată la Lamare | 6 |
| **Inversează direcția** | Burghiază spre cealaltă parte a planului schiței | Dezactivată |

Găurile se forează în material, perpendicular pe planul schiței. Adâncimea unei găuri oarbe se măsoară din planul schiței; fundul ei este plat.

## O gaură de șurub lamată

1. Faceți găurile ca mai sus.
2. Setați **Tip** la **Lamare**.
3. Setați **Diametru (mm)** la `6.6` (joc pentru un șurub M6), **Diametru lamare ⌀** la `11` și **Adâncime lamare** la `6.5`.

Lamarea trebuie să fie mai lată decât gaura („Lamarea trebuie să fie mai lată decât gaura.”) și, pentru o gaură oarbă, mai puțin adâncă decât ea („Lamarea trebuie să fie mai puțin adâncă decât gaura.”).

## Un cerc de șuruburi

Pentru găuri distribuite uniform în jurul unui centru, faceți **o** gaură și repetați-o: selectați operația Gaură, apoi alegeți {{ui:Circulară}} (vezi [Operații de repetiție și oglindire](topic:patterns-mirror)). Repetiția urmează când modificați dimensiunea găurii.

## Când găurile merg în sens greșit

- „Nu există nimic de burghiat pe acea parte a schiței. Încercați inversarea direcției.” Schița se află pe partea îndepărtată a materialului. Bifați **Inversează direcția**.
- „Puneți puncte de schiță acolo unde merg găurile (unealta Punct), apoi faceți gaura.” Schița nu are puncte libere. Capetele liniilor și centrele cercurilor nu contează.
- „Nu există nimic de burghiat încă.” O gaură are nevoie de un solid. Realizați mai întâi un bosaj.

## Găuri în ansambluri

Fiecare gaură are o axă. În ansamblu, **Centrare pe** poate pune o îmbinare pe axa unei găuri, listată ca „Gaura1, gaura 2”, astfel încât o piesă de ax sau un șurub să se alinieze cu ea. Vezi [Construirea unui ansamblu](topic:build-assembly).

## Găuri înecate conic

Setați **Tip** la **Înecare conică**, apoi **Diametru înecare ⌀** (la suprafață) și **Unghi înecare**: 90° (șuruburi ISO cu cap plat) sau 82° (șuruburi în inci). Luați diametrul înecării din datele producătorului șurubului (puțin peste diametrul capului șurubului). Fața conului se numește „înecare” în panouri.

## Găuri filetate

Setați **Tip** la **Filetată (metric ISO)** și alegeți **Filetul**, de la M2 la M24 cu pas normal. Gaura se forează la diametrul burghiului de filetare din tabelul de mai jos (diametrul nominal minus pasul, până la seria de burghie, așa cum listează ISO 2306 pentru un filet 6H); caseta **Diametru (mm)** nu se folosește. Pentru o gaură oarbă, **Adâncime filet (mm)** stabilește cât de adânc merge filetul.

| Filet | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pas | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Diametru burghiu ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Filetul este **cosmetic** la început: modelul are gaura forată, vederea desenează diametrul major al filetului ca cercuri întrerupte, iar foaia de desen poartă indicația ca notă, de exemplu „4× M8×1.25 - 6H, filet prin”. STEP exportă doar gaura forată.

Bifați **Modelat** ca să tăiați filetul elicoidal real în gaură, pentru imprimare 3D. **Joc (mm)** îl face cu atâta mai mare pe tot conturul, astfel încât un șurub imprimat să intre: 0.1 până la 0.2 mm convine majorității imprimantelor. Indicația se termină atunci cu „(modelat)”. Vezi [Filete pe axe și alezaje, desenate sau modelate](topic:threads), care pune filete și pe axe.

:::note
Găurile contrasforate, filetele în inci și filetele de țeavă nu sunt încă realizate.
:::
