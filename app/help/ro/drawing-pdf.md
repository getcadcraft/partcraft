---
title: Desen cu vederi, secțiune și GD&T
summary: Deschideți foaia de desen, adăugați o secțiune și o vedere de detaliu, plasați datum-uri, cadre de control al toleranței și simboluri de rugozitate, alegeți formatul foii, completați cartușul și reviziile, apoi exportați foaia ca PDF.
keywords: tabel de găuri, diagramă de găuri, poziții găuri, etichete, desen, desen 2D, foaie, format foaie, a4, a3, a2, a1, a0, ansi, cartuș, revizie, bloc de revizii, număr desen, material, pdf, vederi, ortogonal, diedrul III, izometrică, vedere în secțiune, vedere de detaliu, gd&t, datum, cadru de control al toleranței, toleranță, poziție, planeitate, finisaj al suprafeței, rugozitate, imprimare
from: 39e944c0
---

PartCraft creează o foaie de desen din piesă: vederile din față, de sus și din dreapta în proiecție în diedrul III, o vedere izometrică, dimensiuni de gabarit și un cartuș pe o foaie de la A4 la A0 sau de la ANSI A la E. Peste acestea puteți adăuga o secțiune, o vedere de detaliu și simboluri GD&T. Foaia se actualizează când se modifică piesa, iar setările ei sunt salvate în fișierul piesei.

## Deschideți foaia de desen

1. Construiți piesa. (Dacă nu este construită nimic: „Construiți mai întâi un solid, apoi desenul acestuia.”)
2. Apăsați {{ui:Desen}} în bara de instrumente.

Vederea 3D este înlocuită cu foaia. Bara de instrumente afișează {{ui:Datum}}, {{ui:Cadru}}, {{ui:Finisaj}}, {{ui:Detaliu}}, {{ui:PDF}} și {{ui:Înapoi}}, iar panoul din dreapta are titlul **Desen**. Bara de stare spune cum au fost făcute vederile: „Desen (curbele sunt desenate ca fațete). Datum, Cadru și Finisaj plasează GD&T pe o vedere; panoul stabilește o secțiune și o vedere de detaliu.” Vederile sunt desenate din fațetele kernelului de mesh, deci muchiile rotunde sunt segmente drepte scurte; arcele adevărate necesită un kernel exact, pe care această versiune nu îl are.

Deplasați-vă pe foaie: rotiți rotița pentru zoom, trageți cu butonul din dreapta sau din mijloc pentru panoramare, apăsați {{key:F}} ca să încadrați foaia. Cu foaia activă, {{key:Plus}} și {{key:Minus}} fac zoom, iar {{key:Shift}} împreună cu tastele săgeți panoramează.

Alegeți {{ui:Înapoi}} sau {{ui:Înapoi la model}}, ori apăsați {{key:Esc}} (fără nimic selectat și fără unealtă activă), pentru a reveni la modelul 3D.

## Ce este pe foaie

- **Foaia aleasă**, pe orizontală (A3, dacă nu alegeți altceva), cu un cadru și un **cartuș**: titlu, firmă, număr de desen, revizie, material, desenat / verificat / aprobat de, dată, scară, format al foii, „Unități: milimetri · Proiecție în diedrul III” și dacă vederile sunt exacte sau din fațete.
- Un **bloc de revizii** în colțul din dreapta sus, după ce adăugați o revizie.
- **Vederi din față, de sus și din dreapta**: vederea de sus deasupra vederii din față, iar vederea din dreapta în dreapta ei. Muchiile ascunse sunt punctate.
- O **vedere izometrică**, acolo unde este loc.
- **Dimensiuni de gabarit**: lățimea și înălțimea pe vederea din față, adâncimea pe vederea de sus.
- O **scară** comună pentru vederile principale, din seria ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), aleasă astfel încât să încapă.

## Alegeți formatul foii

Pe foaia de desen, fără nimic selectat, alegeți {{ui:Foaie}} în panoul din dreapta: **A4, A3, A2, A1, A0** (ISO 216) sau **ANSI A, B, C, D, E** (11 × 8.5 până la 44 × 34 in). Vederile sunt aranjate din nou la cea mai mare scară ISO care încape, astfel încât o foaie mai mare poate arăta piesa mai mare.

## Completați cartușul

Câmpurile **Cartuș** din panoul din dreapta merg direct pe foaie: {{ui:Titlu}}, {{ui:Desen nr.}}, {{ui:Revizie}}, {{ui:Firma}}, {{ui:Desenat de}}, {{ui:Verificat de}}, {{ui:Aprobat de}}, {{ui:Data}} (an-lună-zi), {{ui:Toleranță generală}} și {{ui:Finisaj}} (ultimele două se imprimă chiar deasupra cartușului). Scrieți într-o casetă și apăsați {{key:Enter}} sau faceți clic în altă parte. O casetă goală lasă celula necompletată, cu excepțiile:

- **Titlu** afișează numele piesei până când scrieți unul.
- **Data** afișează ziua de azi până când scrieți una.
- **Revizie** afișează cea mai nouă revizie din listă până când scrieți una.

**Material** vine din piesă: faceți clic pe spațiul gol din model, apoi alegeți {{ui:Material}} în panoul Piesă. Același material dă densitatea proprietăților de masă ale funcției Măsurare.

## Adăugați revizii

Sub **Revizii**, faceți clic pe {{ui:Adăugare revizie}}. Fiecare rând nou primește următoarea literă (A, B, C …; după Z urmează AA) și data de azi. Scrieți ce s-a schimbat și cine a făcut modificarea. {{ui:Ștergere}} elimină un rând. Blocul de revizii din colțul din dreapta sus al foii le listează, cele mai vechi primele, până la 20.

Formatul foii, cartușul, reviziile și materialul sunt salvate în fișierul piesei, iar fiecare modificare este un pas al {{ui:Anulare}}.

## Adăugați o vedere în secțiune

Piesa este tăiată de un plan, iar tăietura este hașurată. Ca și celelalte vederi, secțiunea este desenată din fațete, deci muchiile rotunde sunt segmente drepte scurte.

1. În panoul din dreapta, setați **Secțiune A-A** la **Din vederea din față**, **Din vederea de sus** sau **Din vederea din dreapta**.
2. Secțiunea apare pe foaie, hașurată acolo unde planul de tăiere trece prin material, cu linia de tăiere și săgețile „A” pe vederea din care este luată.
3. Setați **Tăiere la (mm)** pentru a muta planul de tăiere. Acesta pornește prin mijlocul piesei.

Setați **Secțiune A-A** înapoi la **Niciuna** pentru a o elimina.

## Adăugați o vedere de detaliu

1. Setați **Detaliu B** la vederea de mărit (sau alegeți {{ui:Detaliu}} în bara de instrumente).
2. Faceți clic pe centrul zonei de mărit, pe acea vedere. Un cerc etichetat „B” o marchează, iar „Detaliu B” mărit apare pe foaie, cu scara lui, de exemplu „Detaliu B (2:1)”.
3. Setați **Raza detaliului (mm)** pentru dimensiunea cercului și **Scara detaliului** pentru mărire: 2, 4, 5 sau 10 × față de foaie.

Un detaliu poate fi luat din vederea din față, de sus, din dreapta sau din secțiune, nu din cea izometrică. Dacă nu există loc pentru toate vederile, panoul afișează „Nu există loc pe foaie pentru: detaliu. Micșorați detaliul sau eliminați o vedere.”

## Adăugați un tabel de găuri

Un tabel de găuri listează găurile piesei cu pozițiile lor, pentru găurire sau CNC: alegeți **Tabel de găuri** › **Din vederea de sus** (sau din față, sau din dreapta) în panou.

- Fiecare gaură văzută din capăt în acea vedere primește o etichetă alăturată: **A1**, **A2** … pentru prima dimensiune, **B1** … pentru următoarea.
- Tabelul listează fiecare etichetă, **X** și **Y** în milimetri, și dimensiunea ei: „Ø14 THRU”, „Ø6.6 × 10 DEEP”, un lamaj sau o teșire conică, ori notația de filet pentru o gaură filetată.
- X și Y sunt măsurate din colțul din stânga jos al conturului vederii, marcat **X0 Y0** pe foaie.
- Găurile făcute de repetiții sunt incluse. Găurile care nu sunt perpendiculare pe vedere sunt numărate în panou și lăsate din tabel.

Tabelul merge într-o zonă liberă a foii și în PDF.

## Plasați simboluri GD&T și de rugozitate

1. Alegeți {{ui:Datum}}, {{ui:Cadru}} (un cadru de control al toleranței) sau {{ui:Finisaj}} (un simbol de finisaj al suprafeței).
2. Faceți clic pe punctul de pe o vedere unde se atașează. Se fixează de cea mai apropiată linie desenată, în limita de 2.5 mm.
3. Simbolul apare cu o linie de indicație, selectat, iar panoul din dreapta arată setările lui.

Trageți un simbol ca să-l mutați; linia lui rămâne pe punct. Cu un simbol selectat, tastele săgeți îl deplasează cu 1 mm. {{key:Delete}} sau {{key:Backspace}} (sau {{ui:Ștergere}} din panou) îl elimină; {{ui:Gata}} sau {{key:Esc}} îl deselectează. Fiecare modificare este în lista de anulare.

### Datum

**Literă**: de la A la Z, fără I, O și Q (se citesc ca 1, 0 și O). Fiecare datum nou primește următoarea literă liberă.

### Cadru de control al toleranței

| Setare | Opțiuni |
|---|---|
| **Toleranță** | Rectilinitate, Planeitate, Circularitate, Cilindricitate, Profil al unei linii, Profil al unei suprafețe, Perpendicularitate, Unghiularitate, Paralelism, Poziție, Concentricitate și Simetrie (ultimele două eliminate în Y14.5-2018 și marcate ca atare), Bătaie radială, Bătaie totală |
| **Zonă (mm)** | Valoarea toleranței, implicit 0.1 |
| **Zonă de diametru (⌀)** | Pentru caracteristici cu zonă cilindrică; activată implicit pentru Poziție |
| **Material** | RFS (nimic), MMC (Ⓜ), LMC (Ⓛ), acolo unde caracteristica o permite |
| **Datum primar / secundar / terțiar** | Până la trei litere de datum, fiecare cu un **modificator …** (MMB, LMB) acolo unde este permis |

PartCraft verifică cadrul după regulile ASME Y14.5 și spune ce nu este corect în partea de sus a panoului, de exemplu „Planeitatea este o toleranță de formă: nu primește referințe de datum.” sau „Poziția necesită cel puțin o referință de datum.” Linia **Se citește** explică în cuvinte cadrul.

### Rugozitatea suprafeței

| Setare | Opțiuni | Implicit |
|---|---|---|
| **Ra (µm)** | Media rugozității | 1.6 |
| **Proces** | orice proces, prelucrat, fără îndepărtare de material | prelucrat |
| **Notă** | Până la 40 de caractere, cum ar fi o direcție sau un proces | |

Cu nimic selectat, panoul listează **Note pe foaie**, fiecare cu **Selectare**.

## Exportați PDF-ul

Alegeți {{ui:PDF}} în bara de instrumente, {{ui:Export PDF}} în panou sau {{ui:Export}}, apoi {{ui:Desen (PDF): vederi, secțiune, detaliu, GD&T}} din model. PDF-ul se descarcă ca `<part name> - drawing.pdf`, iar bara de stare listează ce conține.

Imprimați-l la „Actual size” (Dimensiune reală), pe hârtie de formatul foii, pentru a păstra scara corectă.

## Limite

| Încă nerealizat | Ce faceți astăzi |
|---|---|
| Cote în afara celor trei dimensiuni de gabarit | Adăugați-le pe PDF cu o aplicație de adnotare, sau exportați o schiță ori o față ca DXF și cotați-o într-un program CAD 2D |
| Mai mult de o secțiune sau un detaliu; vederi rupte, auxiliare și proiectate | Nu sunt disponibile |
| Proiecție în diedrul I, vederi mobile, foi pe verticală | Diedrul III, aranjare automată, orizontal |
| Note libere și tabele pe foaie (în afara cartușului și a blocurilor de revizii) | Folosiți nota de finisaj sau adăugați text pe PDF |
| Desene de ansambluri | Nu sunt disponibile |

Caracterele din afara setului vest-european se imprimă ca „?” (PDF-ul folosește Helvetica încorporată a cititorului). Simbolurile GD&T sunt desenate ca linii, deci se imprimă în orice cititor.

## Lăsați foaia să facă treaba

- **Foaie › Automat** alege hârtia pentru dvs.: cea mai mare scară standard până la 1:1, pe cea mai mică foaie de format A care încape vederile la acea scară (lista arată care a fost aleasă).
- **Cotați găurile** cotează găurile de pe vederea care le vede cel mai mult din capăt: un semn de centru pe fiecare, o notație per dimensiune („2× Ø6 THRU” cu o linie de indicație) și pozițiile lor, măsurate din colțul din stânga jos al vederii. Cotele de gabarit pentru lățime, înălțime și adâncime sunt mereu prezente.
