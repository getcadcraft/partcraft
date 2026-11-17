---
title: Filete pe tije și alezaje, desenate sau modelate
summary: Puneți un filet metric ISO sau trapezoidal pe orice față rotundă, pe o tijă sau un alezaj. Păstrați-l cosmetic pentru desene sau modelați filetul elicoidal real pentru imprimare 3D, cu un joc pentru ca piesele imprimate să se potrivească.
keywords: filet, fileturi, filet modelat, filet elicoidal, elicoidal, elice, șurub, bulon, piuliță, tijă, alezaj, filet exterior, filet interior, filet cosmetic, filet metric, trapezoidal, acme, șurub conducător, Tr16x4, M10, imprimare 3D, imprimare, joc, potrivire, filet stânga, filetat
from: 4f6401cc
---

{{ui:Filet}} pune filete pe fețe rotunde: exteriorul unei tije (filet exterior) sau interiorul unui alezaj (filet interior). PartCraft stabilește care dintre ele este după față.

Filetul este **cosmetic** la început: fața rămâne netedă, vederea desenează filetul cu cercuri întrerupte, iar foaia de desen îl notează, de exemplu „M10×1.5 - 6g, filet lung de 20”. Bifați **Modelat** pentru a tăia filetul elicoidal real în piesă, pentru imprimare 3D sau un model care trebuie să arate corect.

## Filetarea unei tije sau a unui alezaj

1. Construiți tija sau alezajul la dimensiunea filetului: o tijă Ø10 pentru un bulon M10, sau un alezaj Ø8.5 (diametrul găurii de filetat) pentru o piuliță M10.
2. Faceți clic pe fața rotundă, apoi alegeți {{ui:Mai multe}} › {{ui:Filet}}. Fără nicio față rotundă selectată, PartCraft vă cere să faceți clic pe fețe, apoi pe {{ui:Gata}}.
3. În panoul din dreapta, verificați **Dimensiune**. **Potrivire la față** alege singură dimensiunea: pentru o tijă, dimensiunea al cărei diametru exterior este cel al tijei; pentru un alezaj, dimensiunea al cărei diametru interior i se potrivește.

Filetul pornește de la capătul deschis al feței, unde piesa nu continuă de-a lungul axei: capătul liber al unei tije, gura unui alezaj. **Începe de la celălalt capăt** inversează asta.

## Setări

| Setare | Opțiuni | Implicit |
|---|---|---|
| **Formă** | Metric ISO (60°), M1.6 până la M64 pas grosier; trapezoidal (Tr, 30°), Tr8×1.5 până la Tr60×9 | Metric ISO |
| **Dimensiune** | Potrivire la față, sau o dimensiune din listă | Potrivire la față |
| **Toată fața** | Debifați-o pentru a da o **Lungime (mm)**, măsurată de la început | Bifată |
| **Începe de la celălalt capăt** | Filetul merge de la celălalt capăt al feței | Dezactivat |
| **Sens** | Sens dreapta sau sens stânga | Dreapta |
| **Modelat** | Taie filetul elicoidal real | Dezactivat |
| **Joc (mm)** | Afișat când Modelat este bifat: cât de mult mai mic este filetul unei tije și cât de mult mai mare cel al unui alezaj, pe tot cercul | 0.1 |

O dimensiune care nu se potrivește feței este construită oricum, tăiată la față, iar panoul o spune, de exemplu „O tijă Ø12 mm nu este Ø10 mm al lui M10”. Mai multe fețe pot împărți o singură operație Filet; cu **Potrivire la față**, fiecare primește propria dimensiune.

## Filete modelate pentru imprimare 3D

Un filet modelat urmează profilul de bază standard: ISO 68-1 pentru filete metrice (vârfuri și fundături plate, flancuri de 60°), ISO 2901 pentru cele trapezoidale (flancuri de 30°). **Jocul** mută întregul profil spre interior (pentru o tijă) sau spre exterior (pentru un alezaj), ca piesele imprimate să se înșurubeze una în alta:

- **0.1 până la 0.2 mm** convine celor mai multe imprimante. Imprimați mai întâi un bulon și o piuliță de test.
- **0** este profilul standard, pentru piese prelucrate mecanic sau pentru verificarea unei potriviri.

Un bulon și o piuliță cu același joc nu se ating niciodată pe flancuri: spațiul dintre ele este de două ori jocul, pe tot cercul.

:::tip
Pașii fini se imprimă slab: M3 și mai mici, sau un pas sub 0.5 mm, este aproape de ce poate trasa un ajutaj de 0.4 mm. Modelați filete mai mari și folosiți un insert termofixat sau o gaură filetată pentru cele mici.
:::

Un filet modelat face parte din solid: exporturile STL, 3MF și STEP îl conțin, iar {{ui:Măsurare}} îl măsoară. Face piesa mai greu de reconstruit: un filet M10 lung de 20 are aproximativ 150000 de triunghiuri.

## Găuri filetate

O gaură **filetată (ISO metric)** are și ea un comutator **Modelat**, cu același **Joc**. Vezi [Găuri și alezaje la puncte de schiță](topic:holes).

## Când un filet nu se construiește

- „Un filet se pune pe o față rotundă (un cilindru): o tijă sau un alezaj.” Fața aleasă este plană sau curbă altfel.
- „Nicio dimensiune standard nu se potrivește unei fețe rotunde de Ø0.6 mm: alegeți o dimensiune.” Potrivirea la față nu a găsit nimic în limita a 12 % din față. Alegeți o **Dimensiune** sau schimbați fața.
- „O față pe care stătea acest filet a dispărut (…). Alegeți-o din nou.” O modificare anterioară a eliminat fața. Faceți clic pe {{ui:Alegere fețe}} și apoi pe față din nou.

:::note
Filetele în țoli (UNC, UNF), filetele de țeavă, filetele conice, terminațiile de filet și începuturile de filet teșite sunt încă nerealizate. Nucleul exact arată un filet modelat ca fiind cosmetic.
:::
