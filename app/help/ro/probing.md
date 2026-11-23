---
title: Palpare: găsirea piesei și setarea decalajului de lucru
summary: Atingeți o față de sus, o latură, o gaură sau o proeminență cu un palpator și lăsați comanda să mute decalajul de lucru acolo unde este piesa cu adevărat, sau doar măsurați. Ce poate face fiecare comandă și ce nu a fost verificat.
keywords: palpator, palpare, palpator de atingere, atingere, decalaj de lucru, g54, g31, g38.2, sărire, reper, găsire centru, alezaj, proeminență, margine, setare zero, măsurare, inspecție, g10
from: 1f718b82
---

{{ui:Palpare}} în Fabricație scrie un ciclu de palpare în program: palpatorul atinge piesa, iar comanda mută decalajul de lucru (G54) cu diferența dintre locul unde a fost găsită suprafața și locul unde o spune modelul că este. Operațiile ulterioare taie apoi unde se află piesa cu adevărat.

**Nimic de aici nu a fost rulat pe o mașină.** Mișcările dinaintea atingerii sunt mișcări obișnuite: palpatorul nu este urmărit până la mișcarea de palpare propriu-zisă. Rulați-o încet, mai întâi în aer, cu mâna pe oprirea avansului.

## Utilizare

1. Pe fila **Scule**, prima operație de palpare adaugă un **palpator de atingere**: diametrul bilei și avansul de palpare (100 mm/min dacă nu setați altul).
2. Apăsați {{ui:Mai multe}} din bara Fabricație, apoi {{ui:Palpare}}, și faceți clic pe ce să atingeți. Fiecare selectare este un ciclu, în ordinea în care faceți clic:

| Selectare | Ciclul | Ce se setează |
|---|---|---|
| O față plană care privește în sus pe axa sculei | O atingere în jos | Z |
| O față laterală plană, perpendiculară pe X sau pe Y | O atingere spre față, puțin sub partea ei de sus | X sau Y |
| O gaură sau o proeminență pe axa sculei | Patru atingeri (+X, −X, +Y, −Y) | X și Y ale centrului ei |

3. **Cu rezultatul**: {{ui:Setare a decalajului de lucru}} sau {{ui:Doar măsurare}}.
4. **Începe de la această distanță** și **Caută până la această distanță dincolo de** sunt cât de departe de suprafața așteptată începe mișcarea de palpare și cât de departe dincolo de ea poate merge palpatorul înainte ca comanda să renunțe. **Adâncimea** este cât de jos sub partea de sus a unei găuri, proeminențe sau fețe laterale coboară bila.

Puneți operația de palpare prima, înainte ca orice să taie.

## Ce scrie fiecare comandă

| Comandă | Atingere | Rezultat |
|---|---|---|
| În stil Fanuc | `G31`, poziția păstrată în `#101` până la `#104` | Variabilele de decalaj (`#5221` până la `#5223`) sunt mutate cu găsit − așteptat. Doar măsurare: diferența rămâne în `#110` (și `#111`). |
| LinuxCNC | `G38.2`, poziția păstrată în parametri numiți | `G10 L2 P1` cu noul decalaj. Doar măsurare: un mesaj `(DEBUG, …)`. |
| GRBL | `G38.2` | O atingere setează axa cu `G10 L20 P1`. GRBL nu are variabile, deci **nu poate calcula un centru**: fișierul spune asta într-un comentariu și nu setează nimic. |

Aritmetica aparține postului, deci poate fi modificată: evenimentele sunt `probe-move` și `probe-set` ([Postprocesoare editabile](topic:post-processors)).

## Limite

- Un singur decalaj de lucru (G54). Doar fețe perpendiculare pe axe: fără unghi, fără ciclu de colț, fără rotirea lucrului.
- Fără aparat de reglare a sculei, fără verificare a sculei rupte, fără măsurarea unei dimensiuni față de o toleranță, fără raport.
- Arborele nu este pornit pentru palpare, iar lichidul de răcire rămâne oprit; nimic nu verifică dacă scula din arbore este un palpator.
- Simularea stocului nu rulează o cale de palpare.
- Calibrarea palpatorului în sine (decalajul bilei, deformarea tijei palpatorului, direcția declanșării) aparține comenzii.
