---
title: Menținerea unui model .3dm actualizat
summary: Modificați un model în programul în care a fost creat și urmăriți cum corpul din PartCraft îl urmează, din Rhino 8 sau dintr-o definiție Grasshopper, cu operațiile dvs. reconstruite pe noua formă.
keywords: rhino, grasshopper, legătură live, conexiune live, 3dm, nurbs, parametric, legătură, sincronizare, script, trimitere, corp importat
from: cf4dc9b2
---

Continuați să modelați în locul în care modelați, iar aici faceți mașinării, verificarea și documentarea. Fiecare modificare făcută în celălalt program înlocuiește un corp importat în PartCraft, iar operațiile de după el se reconstruiesc pe noua formă.

:::note
Legătura are nevoie de **CadCraft Studio** pe același calculator. O filă de browser nu poate prelua conexiunea. Nimic nu trece prin internet: scriptul vorbește cu Studio la adresa acestui calculator, cu un token.
:::

:::warning
Această legătură a fost testată cu scriptul de scriere a fișierelor și cu un înlocuitor al celuilalt program, nu încă în interiorul Rhino sau Grasshopper. Dacă apare o eroare acolo, spuneți-ne ce a afișat.
:::

## Configurare

1. În Studio, deschideți PartCraft. În {{ui:Setări}} › {{ui:PartCraft}} › {{ui:Asistenți}}, bifați **Permiteți asistenților AI și scripturilor să folosească PartCraft**, apoi **Editare**.
2. În Studio, alegeți {{ui:Conectare asistent}}. Acolo sunt afișate adresa și tokenul pe care le veți lipi mai jos.
3. Descărcați scriptul: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Din Rhino

1. Rulați `cadcraft_link.py` în editorul de scripturi al Rhino (Python 3 în Rhino 8).
2. Prima dată, lipiți adresa și tokenul. Ele se păstrează în `.cadcraft-link.json` din dosarul dvs. de pornire, niciodată în model. Studio creează un token nou de fiecare dată când pornește, așa că scriptul cere din nou atunci.

Rulați din nou scriptul ca să-l opriți.

## Din Grasshopper

Rulați mai întâi scriptul o dată în Rhino, ca adresa și tokenul să fie salvate.

1. Adăugați o componentă Script (Python 3) și lipiți în ea întregul `cadcraft_link.py`.
2. Dați-i aceste intrări: `G` (geometria, cu acces la listă), `N` (un nume, opțional), `On` (un comutator logic) și `Target` (opțional: `model` sau `part`, dacă ambele aplicații sunt deschise).
3. Setați `On` pe adevărat.

La fiecare rezolvare, `G` este trimis și înlocuiește ce a trimis componenta data trecută.

## Cum funcționează aici

- **Un singur corp.** Tot ce este vizibil în model devine o singură operație importată, la fel ca atunci când [deschideți un fișier .3dm](topic:open-3dm-files).
- **Trebuie să se închidă.** PartCraft umple găurile mici și deschiderile plane, iar celălalt program este informat câte au fost. Dacă modelul tot nu se închide, PartCraft păstrează corpul pe care îl avea, iar bara de stare o spune. Următoarea modificare care se închide îl actualizează.
- **Terminați ce faceți.** Într-o schiță sau un desen, actualizările sunt refuzate și reîncercate; ajung odată ce reveniți în model.
- **Anulare.** Actualizările făcute la mai puțin de două secunde unele de altele împart un singur pas de anulare.
- **Salvare.** Fișierul piesei păstrează legătura. Rulați din nou scriptul după ce redeschideți fișierul, iar aceeași operație se actualizează.

**Doar într-un sens.** Modificările de aici nu se întorc în celălalt program.

## Dacă apare o problemă

- **„No ModelCraft or PartCraft window allows it”:** faceți pasul 1 din configurare.
- **„Studio refused the token”:** Studio a fost repornit. Copiați noul token și rulați din nou scriptul. Pentru Grasshopper, rulați-l mai întâi în Rhino.
- **„Cannot reach CadCraft Studio”:** Studio nu rulează sau adresa s-a schimbat.
