---
title: Scrierea și rularea scripturilor (spațiul de lucru Script)
summary: Spațiul de lucru Script pas cu pas: scrieți un script CraftScript sau Lua, rulați-l cu F5, citiți consola, păstrați rezultatele în variabile pentru scriptul următor, afișați plase, câmpuri și grafice, opriți o rulare și salvați scripturile împreună cu piesa.
keywords: script, scriptare, script în timp ce modelați, detașare, al doilea ecran, al doilea monitor, param, params, parametri în scripturi, CraftScript, Lua, cod, program, editor, consolă, REPL, linie de comandă, rulare, F5, rulează selecția, oprire, variabile, spațiu de lucru, grafic, câmp, plasă, legendă, subafișaj, analiză, automatizare, matrice, numeric
from: d0003e89
---

**Previzualizare.** Scriptarea este nouă în PartCraft 0.3 și este o previzualizare: limbajul, biblioteca și modul în care sunt salvate scripturile pot încă să se schimbe, iar scripturile scrise acum pot avea nevoie de mici modificări mai târziu. Spuneți-ne ce nu funcționează.

Spațiul de lucru Script rulează calcule proprii lângă piesă: sume mici, analize întregi sau scripturile din [biblioteca de analiză](topic:craftscript-library). Scripturile se scriu în **CraftScript** (un limbaj matriceal foarte asemănător cu MATLAB, vezi [Limbajul CraftScript](topic:craftscript-language)) sau în **Lua** (vezi [Scripturi în Lua](topic:craftscript-lua)) sau în **Python** (vezi [Scripturi în Python](topic:craftscript-python)).

Alegeți **Script** în caseta **Spațiu de lucru** din stânga barei de instrumente. Piesa nu se modifică. Panoul din dreapta devine panoul de script (mai lat decât de obicei; trageți de marginea lui ca să-l schimbați sau mutați-l pe un al doilea ecran din meniul său {{ui:⋯}}, vezi [Aranjarea panourilor](common:arrange-panels)).

## Scriptul în timp ce modelați

Nu trebuie să părăsiți spațiul de lucru Proiectare ca să scrieți un script. În Proiectare, fila {{ui:Script}} din panoul din dreapta conține același editor, aceeași consolă, aceleași variabile și bibliotecă, cu aceleași scripturi. Arborele de operații și vizualizarea continuă să funcționeze: faceți clic pe o operație ca s-o selectați, faceți dublu clic pe o schiță ca s-o editați, rotiți vizualizarea, apoi reveniți la fila {{ui:Script}} și apăsați {{key:F5}}.

Ceea ce **afișează** un script (plase, câmpuri, grafice, tabele) nu este desenat peste model în Proiectare: consola o spune, iar spațiul de lucru Script le are pe toate când comutați la el.

{{ui:Detașare}}, lângă {{ui:Rulare}}, mută întregul panou într-o fereastră proprie, de exemplu pe un al doilea ecran, astfel încât editorul și vizualizarea completă stau alături. {{ui:Reancorare}} îl ancorează din nou. Vezi [Aranjarea panourilor](common:arrange-panels).

## Rulați primul script

1. Scrieți în editor, de exemplu:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Un sinus')
   disp(max(y))
   ```

2. Apăsați {{key:F5}} (sau {{ui:Rulare}}). Consola de sub editor arată ce a afișat scriptul și „Gata în … s”. Graficul apare în **subafișajele** de-a lungul părții de jos a vizualizării 3D.
3. O linie fără punct și virgulă își afișează valoarea, ca în MATLAB: `a = 3` afișează `a = 3`; `a = 3;` nu afișează nimic.
4. Ca să rulați doar o parte dintr-un script, selectați rândurile și apăsați {{key:Mod+Enter}} ({{ui:Selecție}}). Fără nimic selectat, rulează rândul unde se află cursorul.
5. Rândul din partea de jos a consolei (după `>>`) rulează o instrucțiune când apăsați {{key:Enter}}. {{key:Up}} și {{key:Down}} aduc înapoi rândurile anterioare.

## Căutare, pliere și completare

- **Căutare și înlocuire.** Apăsați {{key:Mod+F}} (sau {{key:Mod+H}} ca să înlocuiți și). Deasupra codului se deschide o bară: tastați ce căutați; potrivirile se aprind, iar numărătorul arată unde vă aflați. Butoanele de lângă casetă potrivesc majuscule și minuscule (**Aa**), caută doar cuvinte întregi (**W**) și folosesc o expresie regulată (**.\***; în înlocuire, `$1` pune înapoi ce a prins primul grup). {{ui:Înlocuire}} înlocuiește potrivirea curentă, iar {{ui:Toate}} înlocuiește fiecare potrivire ca un singur pas al {{key:Mod+Z}}.
- **Pliere.** Faceți clic pe ▾ de lângă un număr de rând sau apăsați {{key:Mod+Shift+[}} cu cursorul pe un rând `function`, `if`, `for`, `while`, `switch` sau `try` (Lua: `function`, `do`, `if`, `repeat`), ca să ascundeți rândurile interioare; rândul spune câte sunt. ▸ sau {{key:Mod+Shift+]}} le deschide din nou. Plierea doar ascunde rânduri: Rulare, Salvare, copierea și numerele de rând numără în continuare fiecare rând, iar scrierea pe un rând pliat îl deschide întâi.
- **Completări.** Tastați două litere dintr-un nume sau apăsați {{key:Mod+Space}}: o listă arată variabilele existente, funcțiile limbajului (cu argumentele lor), cuvintele cheie și numele deja folosite în script. Alegeți cu săgețile și apăsați {{key:Enter}} sau {{key:Tab}}.

## Când ceva nu merge

- O eroare numește problema și rândul ei: rândul este marcat cu roșu în editor, iar **Rândul n** din consolă duce acolo.
- O buclă care nu se termină: apăsați {{ui:Oprire}} (din bara de instrumente sau din panou). Scriptul se oprește imediat; variabilele păstrează valorile pe care le aveau înainte de rularea respectivă.
- Fiecare rulare are și un buget de pași (2 miliarde de pași implicit; schimbați-l la **Opțiuni de rulare** din panou). O rulare care îl depășește se oprește cu un mesaj.

## Variabilele trec de la un script la altul

Fiecare variabilă de nivel superior făcută de un script ajunge în fila **Variabile** (nume, tip, dimensiune, cea mai mică și cea mai mare valoare) și rămâne acolo pentru scriptul următor, în oricare limbaj. Așa un script generează plasa, următorul rezolvă, iar al treilea trasează graficul.

- Faceți clic pe o variabilă ca s-o afișați: plasele, câmpurile și modelele în vizualizarea 3D, tablourile ca tabel (plus un grafic de linie pentru un vector sau o hartă de culori pentru o matrice) în subafișaje.
- {{ui:Salvare ca JSON}}, {{ui:Salvare ca CSV}} (un tabel de numere) și {{ui:Salvare ca HDF5}} o descarcă; {{ui:Ștergere}} o elimină; {{ui:Golire totală}} golește spațiul de lucru.
- Bifați **Salvare variabile cu piesa** ca să le păstrați în fișierul piesei (până la 32 MB; cele mai mari rămân doar pentru această vizită). Când deschideți o astfel de piesă, panoul oferă să le încarce.

## Plase, câmpuri și grafice

- `show(m)` desenează o plasă; `show(f)` colorează un câmp pe plasa sa, cu o legendă. Lista **Afișate** din stânga sus a vizualizării ascunde ({{ui:ochi}}) sau elimină fiecare element și ascunde sau arată piesa în sine. Sub legendă, tastați un interval (**De la**, **până la**) sau apăsați {{ui:Auto}}; un câmp vectorial sau de tensiuni oferă și alegerea componentei afișate.
- `show(f, 'deform', u, 'scale', 50)` desenează plasa deplasată de câmpul de deplasări `u`, mărită de 50 de ori (fără `scale`, cam 8 % din dimensiunea modelului).
- Faceți clic pe o plasă afișată: nodul cel mai apropiat, elementul și valorile câmpului de acolo apar în subafișaje (**Selectat**).
- `plot`, `imagesc` și `table` pun în subafișaje un grafic de linie, o hartă de culori a unui tablou 2-D sau un tabel. Un grafic cu același `'id'` (sau titlu) ca unul anterior îl înlocuiește, deci o buclă poate actualiza un singur grafic de convergență; `'append', true` adaugă o curbă la el. {{ui:Golire}} golește subafișajele; săgeata le pliază.
- Cu două sau mai multe grafice, {{ui:Alăturat}} le arată pe toate deodată (cele mai noi șase); dacă faceți clic pe fila unui tabel sau a unei imagini, se arată din nou doar aceea.
- Fiecare grafic are sub el {{ui:PNG}}, {{ui:SVG}} și {{ui:CSV}}. PNG și SVG îl redau pe alb, în culorile de hârtie, indiferent de temă (PNG 1600 × 1000 pixeli; SVG se scalează fără să se estompeze); CSV păstrează numerele cu toate cifrele: o coloană pentru x și o coloană pentru fiecare curbă când curbele au același x, altfel un rând pentru fiecare punct, cu numele curbei.
- {{key:F}} sau {{ui:Potrivire}} potrivește vizualizarea cu ce este afișat.

## Fișiere

- {{ui:Deschidere}} din grupul Script (sau trageți fișiere pe vizualizare sau pe panou): fișierele `.craft`, `.lua` și `.py` se deschid ca scripturi noi (nu se rulează); fișierele de date (STL, OBJ, CSV, JSON, NPY, HDF5) se încarcă în variabile sub numele fișierului.
- {{ui:Salvare}} din grupul Script descarcă scriptul curent ca fișier.
- {{ui:Nou}} din grupul Script (sau {{ui:+}} lângă file) pornește un alt script. Faceți dublu clic pe o filă ca s-o redenumiți; {{ui:×}} o elimină (acest lucru se poate anula).

## Citirea parametrilor piesei

Un script citește parametrii piesei (vezi [Conducerea unei piese cu parametri](topic:parameters)) după nume:

```
w = param('width');     % o valoare a unui parametru, în mm (sau grade, sau un număr simplu)
p = params();           % toți, ca structură: p.width, p.height
```

În Lua și Python sunt `cs.param('width')` și `cs.params()`. Scripturile doar citesc parametri: modificați-i în fila {{ui:Parametri}}. Sub fila scriptului, un rând listează parametrii pe care îi citește cu `param('…')` și marchează pe cei pe care piesa nu îi are; fila {{ui:Parametri}} listează scriptul sub fiecare. Un nume construit în timpul rulării, cum este `param(name)`, nu este listat.

## Scripturile se salvează în piesă

Fiecare script din file este păstrat în piesă, deci {{ui:Salvare}} din grupul Fișier le salvează odată cu ea, iar modificările lor pot fi anulate. Deschiderea unei piese **nu rulează niciodată scripturile sale**: consola spune câte are, iar acestea rulează doar când apăsați {{ui:Rulare}}. O piesă de la altcineva poate conține orice script: citiți-l înainte de a-l rula. Scripturile rulează în fundal, pe acest calculator, fără acces la rețea, și nu pot atinge pagina.

## Vezi și

- [Limbajul CraftScript](topic:craftscript-language)
- [Scripturi în Lua](topic:craftscript-lua)
- [Scripturi în Python](topic:craftscript-python)
- [Biblioteca de analiză](topic:craftscript-library)
- [Scrierea propriei analize](topic:craftscript-own-analysis)
