---
title: Combinarea, mutarea și scalarea corpurilor; repetiții pe traseu
summary: Creați corpuri separate, apoi uniți-le, tăiați-le sau intersectați-le ulterior, mutați, rotiți, aliniați sau copiați-le, scalați-le uniform sau pe X, Y și Z, și copiați operații sau corpuri de-a lungul unei curbe.
keywords: corp, corpuri, multi-corp, corp nou, combinare, booleană, unire, tăiere, intersectare, scădere, reuniune, păstrare unelte, mutare corp, copiere corp, rotire corp, aliniere, translație, scalare, scalare neuniformă, întindere, afină, repetiție pe traseu, repetiție pe curbă, matrice pe traseu, repetiție ghidată de curbă
from: 6b1ea820
---

:::note
**Nu este realizat încă în această versiune.** Lucrul cu mai multe corpuri necesită un nucleu geometric exact, pe care această versiune a PartCraft nu îl are: construiește fiecare piesă cu nucleul de plasă. [Ce nu este realizat încă](topic:not-built-yet) explică ce să faceți în loc. Restul acestei pagini descrie funcționarea cu un nucleu exact.
:::

O piesă poate conține mai multe solide. Fiecare solid separat este un **corp**. Majoritatea operațiilor adaugă sau taie din fiecare corp atins; uneltele din această pagină lucrează pe corpuri întregi, alese de dumneavoastră. Ele se află în meniul {{ui:Mai multe}} din grupul Operații: {{ui:Combinare}}, {{ui:Mutare corp}}, {{ui:Scalare corp}} și {{ui:Repetiție pe traseu}}. Toate necesită nucleul exact (OpenCascade).

## Crearea unui corp separat

În panoul din dreapta, setați **Operația** unei extrudări sau a unei revoluții la **Corp nou** (baleierile și loft-urile o au și ele). Solidul nou rămâne separat chiar și acolo unde se suprapune cu celelalte. **Intersectare** păstrează doar suprapunerea formei noi cu ce există deja.

Corpurile primesc numele operației care le-a creat: „Extrude2”. O copie primește numele originalului și al operației care a copiat-o: „Extrude2, copia 1 din Move1”. Numele rămân aceleași când modificați dimensiunile în amonte, astfel încât operațiile care folosesc un corp îl găsesc în continuare. Cu două sau mai multe corpuri, panoul piesei (dați clic pe spațiul gol) le listează cu volumele lor.

## Redenumirea sau ascunderea unui corp

Dați clic pe spațiul gol din vedere pentru a vedea panoul piesei. Lista ei de corpuri (afișată când piesa are două sau mai multe corpuri) are un câmp de nume și un buton {{ui:Ascundere}} pe fiecare rând.

- **Redenumire:** tastați un nume nou în câmp și apăsați {{key:Enter}} sau dați clic în afară. Toate panourile îl folosesc apoi: Combinare, Mutare corp, repetițiile. Goliți câmpul pentru a reveni la numele dat de operația care a creat corpul.
- **Ascundere:** dați clic pe {{ui:Ascundere}} de pe rândul său. Corpul dispare din vedere, iar clicurile trec prin el, astfel încât puteți alege fețele din spatele lui. {{ui:Afișare}} îl readuce; {{ui:Afișare toate}} readuce toate corpurile ascunse.

Ascunderea modifică doar vederea. Un corp ascuns este tot construit, este numărat în volum și în măsurători și este salvat în exporturile STL, 3MF și STEP. Numele și corpurile ascunse sunt salvate în fișierul piesei, iar fiecare modificare este un pas al {{ui:Anulare}}.

## Combinarea corpurilor

1. Shift+clic pe o față a corpului **țintă**, apoi pe o față a fiecărui corp-unealtă.
2. Alegeți {{ui:Mai multe}}, apoi {{ui:Combinare}}.
3. În panoul din dreapta alegeți **Operația**:

| Operație | Rezultat |
|---|---|
| Unire | Ținta și uneltele devin un singur corp |
| Decupare | Uneltele sunt scoase din țintă |
| Intersectare | Se păstrează doar ce au în comun ținta și fiecare unealtă |

**Corpul țintă** este cel care își păstrează numele. Bifați sau debifați **Corpuri-unealtă** sau folosiți **Alegere în vedere** și dați clic pe fețele lor. **Păstrare corpuri-unealtă** lasă și uneltele pe loc (util pentru o matriță și miezul ei). Dacă un corp-unealtă a fost deja consumat de o Combinare anterioară, panoul o spune în loc să aleagă alt corp.

## Mutarea sau copierea unui corp

1. Alegeți {{ui:Mai multe}}, apoi {{ui:Mutare corp}}. Cel mai nou corp este bifat; bifați-le pe cele de mutat.
2. Alegeți tipul de **Mutare**:

| Mutare | Ce setați |
|---|---|
| Translație | **ΔX**, **ΔY**, **ΔZ** în milimetri |
| De la punct la punct | **De la** și **Până la**: dați clic lângă capătul unei muchii, pe o operație de tip punct sau pe un loc de pe o față |
| Rotire în jurul unei axe | **Axă** (X, Y, Z, o operație de tip axă sau **Alegere**: o muchie dreaptă, un cerc sau un cilindru) și **Unghi (°)** |
| Aliniere a unei fețe pe o față sau un plan | **Fața de mutat** (o față plană a corpului), **Pe** (o față plană sau un plan) |

**Aliniere** rotește corpul astfel încât fața sa să stea pe cealaltă față, față în față, apoi îl alunecă doar de-a lungul normalei acelei fețe. **Același sens** îl rotește în sens invers. **Copiere** păstrează originalul și adaugă copia mutată ca un corp nou.

## Scalarea unui corp

1. Alegeți {{ui:Mai multe}}, apoi {{ui:Scalare corp}}, și bifați corpurile.
2. Tastați o **Scalare**, sau debifați **Uniform** și tastați **Scalare X**, **Scalare Y** și **Scalare Z** (pe axele globale).
3. **Față de** este punctul care rămâne pe loc: centrul cutiei corpurilor sau un punct ales de dumneavoastră.

O scalare uniformă este exactă. O scalare neuniformă transformă cercurile în elipse: un cilindru devine cilindru eliptic, pe care nicio suprafață analitică nu îl poate păstra, astfel încât fețele curbe devin suprafețe B-spline care rămân în 0.0000004 mm față de forma exactă; fețele plane și muchiile drepte rămân exacte. Panoul spune ce s-a întâmplat. Factorii de scalare trebuie să fie mai mari decât zero (pentru oglindire folosiți în schimb {{ui:Oglindire}}).

## Copierea de-a lungul unui traseu

1. Selectați operația de copiat în istoric sau lăsați totul neselectat pentru a copia cel mai nou corp.
2. Alegeți {{ui:Mai multe}}, apoi {{ui:Repetiție pe traseu}}. Cea mai nouă schiță nefolosită este luată ca traseu.
3. În panoul din dreapta setați:

| Setare | Ce face |
|---|---|
| **Copiere** | Corpuri (fiecare copie devine un corp nou) sau Operații (unite sau tăiate ca originalul) |
| **Traseu** | Bifați schițe sau **Alegere muchii ale modelului**; piesele trebuie să se unească cap la cap |
| **Număr** | Numărul total, inclusiv originalul |
| **Distanță** | Egală (întinsă până la capătul unui traseu deschis, sau pe tot conturul unui traseu închis) sau o distanță fixată |
| **Orientare** | Urmărește traseul (fiecare copie se rotește odată cu el) sau Fixă (copiile rămân paralele) |
| **Inversare sens** | Parcurge traseul în sens invers |

Copiile încep acolo unde traseul trece cel mai aproape de original și sunt distanțate pe lungimea curbei.

Repetițiile liniare și circulare pot copia și ele corpuri: bifați **Copiere corpuri** în panoul lor și alegeți corpurile; fiecare copie este un corp nou.

## Limitări

- Corpurile au nevoie de nucleul exact; nucleul de plasă păstrează un singur solid și o spune.
- O scalare neuniformă transformă fețele curbe în aproximări B-spline apropiate (vezi mai sus), nu în cilindri sau conuri exacte; suprafețele decalate nu pot fi scalate astfel încă.
- Urmărirea traseului pe o curbă 3D răsucită duce copia fără să o răsucească; pe traseele plane, rotirea este exactă.
- Combinarea funcționează doar pe solide. Corpurile de suprafață se unesc cu {{ui:Cusătură}}.

Vezi și [Planuri, axe și puncte de referință](topic:reference-geometry) pentru puncte și plane „între obiecte”, și [Operații de repetiție și oglindire](topic:patterns-mirror).
