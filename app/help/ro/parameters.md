---
title: Acționarea unei piese cu parametri
summary: Denumiți dimensiunile care contează (lățime, grosime, dimensiune șurub), legați orice număr de operație sau cotă de schiță de ele cu =, și schimbați toată piesa dintr-un singur tabel.
keywords: parametri, unde este folosit, folosit de, variabile globale, variabile, ecuații, intenție de proiectare, cote de acționare, legătură, expresie, formulă, denumire a unei cote, valori legate
from: 58c646ea
---

Un parametru este un număr cu nume, cum ar fi `width = 120` sau `margin = bolt * 1.5`. Legați o adâncime, un diametru de gaură, un număr de repetări sau o cotă de schiță de el, iar schimbarea parametrului schimbă toate într-un singur pas. Așa păstrați intenția de proiectare în piesă, nu în minte.

## Adăugarea parametrilor

1. În panoul din dreapta, faceți clic pe fila {{ui:Parametri}}.
2. Sub **Variabile**, scrieți un nume în caseta „nume”, de exemplu `width`.
3. Scrieți valoarea în caseta următoare, de exemplu `120`, și apăsați {{key:Enter}} (sau faceți clic pe {{ui:Adăugare}}).

O valoare poate fi un număr sau o expresie din alți parametri: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Coloana **Valoare** arată la ce se calculează. Un nume începe cu o literă sau `_` și are doar litere, cifre și `_`; numele de funcții și unități (`sin`, `mm`, `pi`) sunt refuzate, la fel și o buclă ca `a = b` cu `b = a`.

## Legarea unui număr de un parametru

1. Faceți clic pe o operație din istoric, de exemplu „Extrude1”. Setările ei apar pe fila {{ui:Proprietăți}}.
2. Într-o casetă de număr, cum ar fi **Depth (mm)**, scrieți `=` și o expresie: `=thick` sau `=width / 4`.
3. Apăsați {{key:Enter}}.

Caseta arată acum rezultatul, iar lângă etichetă apare un buton **ƒ**. Treceți cu cursorul peste el ca să vedeți ecuația. Cotele de schiță funcționează la fel, atât în lista **Cote de schiță** a unei operații, cât și în caseta de cotă a unei schițe deschise (faceți dublu clic pe o cotă, scrieți `=width`, apăsați {{key:Enter}}).

Numere ce pot fi legate: adâncimea extrudării, unghiul rotirii, diametrul găurii, adâncimea și dimensiunile lamării, numărul de repetări, distanța și unghiul repetării, raza racordării, distanța șanfrenului, grosimea peretelui la scobire, fiecare cotă de schiță și dimensiunile operațiilor mai noi (a doua adâncime, conicitatea, contrasablarea, distanța planului de referință, unghiul de înclinare și altele).

## Schimbarea unui parametru

În fila {{ui:Parametri}}, scrieți o valoare sau o expresie nouă în coloana **Expresie** și apăsați {{key:Enter}}. Tot ce este legat de el se schimbă, iar piesa se reconstruiește, ca un singur pas: {{key:Mod+Z}} anulează.

Ca să schimbați un număr din celălalt capăt, vezi [Ecuații în ambele sensuri](topic:equations-two-way).

## Vedeți unde este folosit un parametru

Sub fiecare parametru de pe fila {{ui:Parametri}}, o linie spune ce îl folosește:

- numerele pe care le acționează, cum ar fi **Adâncime Extrude1** sau **Sketch1 D2 (distanță)**. Faceți clic pe unul ca să selectați operația și să arătați proprietățile ei;
- numerele pe care le acționează **prin** alți parametri, cum ar fi **Hole1 diametru (prin h, d)** când `d = h + 2` și `h = w / 2`;
- **parametrii** ale căror expresii îl folosesc, **configurațiile** care îl setează și **scripturile** care îl citesc (vezi [Scrierea și rularea scripturilor](topic:craftscript)).

„Nefolosit încă.” înseamnă că nimic nu îl folosește: poate fi șters fără confirmare.

## Dezlegare, redenumire, ștergere

- **Dezlegarea unui număr:** faceți clic pe butonul său **ƒ** sau pe {{ui:Dezlegare}} din lista **Ecuații**. Își păstrează valoarea curentă și niciun parametru nu îl mai schimbă.
- **Redenumirea unui parametru:** scrieți un nume nou în caseta **Nume**. Fiecare expresie care îl folosește este rescrisă.
- **Ștergerea unui parametru:** faceți clic pe × de pe rândul lui. Dacă ceva îl folosește, PartCraft întreabă dacă să scrie întâi valoarea curentă în acele expresii.
- **Ștergerea unei operații** scoate ecuațiile numerelor ei; bara de stare spune care.

:::note
Parametrii sunt salvați în fișierul `.partcraft.json` (ca versiune de fișier 3). O piesă fără parametri se salvează exact ca înainte.
:::

## Expresii

| Scrieți | Înseamnă |
|---|---|
| `120`, `12.5`, `1e3` | un număr (milimetri sau grade pentru un unghi) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | o lungime în alte unități, transformată în milimetri |
| `30deg`, `0.5rad` | un unghi, transformat în grade |
| `+ - * / %` și `^` | aritmetică; `^` este putere, `-2^2` este −4 |
| `sin cos tan asin acos atan atan2` | trigonometrie în grade |
| `sqrt pow exp ln log abs sign` | alte funcții |
| `ceil floor int round(x, digits) min max` | rotunjiri și limite |
| `if(test, a, b)` cu `< <= > >= == !=` | o alegere: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Numele fac diferența între majuscule și minuscule: `Width` și `width` sunt doi parametri.

Vezi și [Configurații și tabele de proiectare](topic:design-tables) și [Scripturi și linia de comandă](topic:scripts-and-cli).
