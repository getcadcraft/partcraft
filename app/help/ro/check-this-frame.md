---
title: Verificare cadru
summary: Luați membrele de oțel ale unui ansamblu sudat (o platformă, un suport, un cadru de tuburi și profile), puneți echipamentul pe picioare și reazemele pe podea și vedeți cât din fiecare membru și din fiecare sudură este folosit conform AISC 360-16 sau EN 1993. Un ajutor până când un inginer îl verifică.
keywords: cadru, ansamblu sudat, platformă, platformă de pompă, bară structurală, sudură, sudură, verificare, AISC 360, EN 1993, utilizare, reazem, echipament, sarcină, profil gol, HSS, RHS, CHS, inginer
from: 032e34ee
---

{{ui:Verificare cadru}} ia membrii de oțel drepți ai unui ansamblu sudat, construiește un cadru din ei, îl rezolvă sub greutatea oțelului și a echipamentului pus pe el și verifică fiecare membru și fiecare sudură unde se întâlnesc membrii. O rulare, un tabel.

:::warning
Este un **ajutor până când un inginer îl verifică**. Nu este o ștampilă, iar o trecere nu este un proiect. Folosește liniile de centru ale membrilor așa cum sunt desenate, consideră fiecare îmbinare sudată pe tot secțiunea, ia catetul cordonului din peretele secțiunii (până la 8 mm) dacă nu îl setați și nu verifică buloanele, plăcile, plăcile de bază, ancorele, presarea pe reazem, forfecarea de bloc, oboseala sau ridicarea.
:::

## Rulare

1. Desenați membrii cu {{ui:Bară structurală}} (secțiunile vin din tabelul de secțiuni).
2. Deschideți {{ui:Vederi}} › {{ui:Verificare cadru}}. Spuneți unde stă cadrul (un **reazem** la fiecare picior: articulat, fixat sau rulou; {{ui:Reazeme articulate la picioare}} pune unul la fiecare capăt inferior de membru) și ce stă pe el (**echipament**: masă, centrul de greutate, punctele unde este fixat cu șuruburi și, opțional, o împingere orizontală).
3. Alegeți codul: **ASCE 7 + AISC 360-16** sau **EN 1990 + EN 1993**. Setați clasa oțelului și, pentru AISC, rezistența metalului de sudură (482.6 MPa este E70).
4. Apăsați {{ui:Verificare}}. {{ui:Salvare raport ca CSV}} scrie fiecare tabel, cu rândul de neverificat primul.

Cadrul se citește în milimetri, cu axa verticală a piesei în sus. Punctele reazemelor și ale echipamentului se scriu ca x y z în același sistem, cu z înălțimea.

Un capăt de membru care ajunge pe mijlocul altui membru îl împarte acolo, la fel ca un picior sau un punct de fixare cu șurub pe linia unui membru. O greutate este împărțită pe punctele de fixare cu șuruburi ca un corp rigid; un centru de greutate în afara picioarelor sau o forță de ridicare la un picior sunt spuse, niciodată ascunse.

## Ce obțineți

- Elementul cel mai folosit și dacă ceva cedează. Elementele pe care verificarea nu le poate judeca (o secțiune care nu este în tabel, un oțel fără factor în cod) sunt numărate și numite, niciodată socotite ca trecute.
- Un rând pentru fiecare membru și pentru fiecare grup de sudură: cât este folosit, verificarea care guvernează și clauza, și combinația de sarcini care a guvernat.
- Aceleași tabele în raport.

## Ce se verifică

Secțiuni goale (RHS, SHS, CHS, țeavă) și secțiuni I la întindere, compresiune, încovoiere, forfecare și interacțiunea lor; cordoane de colț și cu penetrare totală prin metoda vectorială elastică. Pereții compacți la încovoiere doar pentru secțiunile goale; pereții zvelți sunt spuși ca neverificați. Unele constante au fost scrise din standarde și nu au fost comparate încă cu un exemplar tipărit; raportul listează fiecare sursă.

Vezi [Cadre din secțiuni de oțel](topic:structural-members) pentru desenarea membrilor și lista lor de tăiere.
