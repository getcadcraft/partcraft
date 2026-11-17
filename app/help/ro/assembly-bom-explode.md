---
title: Lista de piese, vederile explodate și piesele mobile
summary: Dați piesele unui ansamblu un număr, o descriere și un material, citiți și descărcați lista de materiale, creați vederi explodate cu pași sau automat, mutați manual piesele care nu sunt îmbinate, setați limitele articulațiilor și exportați întregul ansamblu ca STL, 3MF sau listă de materiale.
keywords: lista de materiale, bom, lista de piese, număr de piesă, material, densitate, csv, vedere explodată, explodare, restrângere, linii de traseu, mutare piesă, tragere, gizmo, translație, rotire, limite articulație, export ansamblu, pas de ansamblu, desen de ansamblu, bule de numerotare
from: ebc9f6f3
---

Aceste instrumente se află în panoul din dreapta al unui ansamblu (vezi [Construirea unui ansamblu](topic:build-assembly)).

## Proprietățile piesei

Selectați o piesă din lista din stânga. Sub **Proprietățile piesei** setați:

- **Număr piesă** (până la 40 de caractere) și **Descriere** (până la 200).
- **Material**: un material uzual cu densitatea sa sau **Densitate personalizată…** pentru a introduce una în g/cm³. Panoul afișează apoi masa piesei.

Proprietățile aparțin piesei, deci toate copiile ei le au în comun. Acestea sunt salvate în fișierul ansamblului.

## Lista de materiale

Fără nimic selectat ({{key:Esc}}), panoul afișează **Lista de materiale**: câte un rând pentru fiecare piesă, cu numărul de element, cantitatea (câte copii există), numărul piesei, numele, materialul și masa. Numerele de element urmează ordinea în care piesele apar prima dată în listă. Masele folosesc volumul fiecărei piese (al corpului facetat construit de nucleul de plasă, puțin mai mic la piesele rotunde) și materialul acesteia; o piesă fără material nu are masă, iar atunci nu există total.

{{ui:Descărcare CSV}} salvează lista ca fișier CSV (la fel ca **Export › Lista de materiale (CSV)**). Se deschide în orice foaie de calcul; textul care începe cu = sau + primește un apostrof în față, ca foaia de calcul să nu-l execute ca formulă.

## Vederi explodate

O vedere explodată separă piesele pentru imagini. Nu modifică niciodată articulațiile sau poziția reală a pieselor: salvarea, verificările de conflicte și exporturile folosesc pozițiile reale.

1. Fără nimic selectat, alegeți {{ui:Vizualizare nouă}} sub **Vederi explodate**.
2. Sub **Adăugare pas**, bifați piesele pe care le mută pasul, alegeți o **Direcție** (+X … −Z, normala unei fețe pe care dați clic sau **Trageți o săgeată în vedere**) și o **Distanță**, apoi {{ui:Adăugare pas}}. Cu **Trageți**, trageți săgeata și eliberați: pasul preia direcția și distanța pe care le-ați tras.
3. Adăugați mai mulți pași. Ei se redau unul după altul.
4. Trageți cursorul dintre **Asamblat** și **Explodat** pentru a anima vederea. Liniile punctate de traseu merg de la poziția de repaus a fiecărei piese până la poziția ei actuală.

{{ui:Automat (radial)}} mută fiecare piesă, în afara celei fixate, departe de mijlocul ansamblului. {{ui:Automat (articulații)}} mută fiecare piesă îmbinată (împreună cu tot ce este îmbinat sub ea) în lungul normalei fețelor articulației sale. Puteți păstra mai multe vederi denumite; alegeți una la **Vizualizare** sau **Asamblat** pentru a readuce piesele în poziție. Vederile sunt salvate în fișierul ansamblului.

## Mutarea unei piese manual

Doar o piesă fără articulație cu piesa fixată se mută manual (piesa fixată rămâne pe loc; articulațiile plasează restul). Selectați-o și, sub **Mutare manuală**:

- Tastați **ΔX, ΔY, ΔZ** și alegeți {{ui:Mutare}}, sau alegeți o axă și un **Unghi** și {{ui:Rotire}} (în jurul mijlocului piesei).
- {{ui:Trageți pentru a muta}} afișează săgeți pe piesă: trageți o săgeată pentru a deplasa de-a lungul acelei axe, sau un pătrat pentru a deplasa în plan. {{ui:Trageți pentru a roti}} afișează inele pentru a o roti. Fiecare tragere este un singur pas de anulare. {{key:Esc}} ascunde săgețile.

## Limitele articulațiilor

Selectați o articulație care se mișcă și, sub **Limite**, bifați **Menține … între limite** pentru oricare dintre valorile sale, apoi setați **Minim** și **Maxim**. Fiecare valoare este menținută în propriile limite, cursorul ei acoperă doar acel interval, iar {{ui:Verifică mișcarea pentru conflicte}} parcurge doar între ele. O articulație cilindrică își poate limita unghiul, decalajul sau pe amândouă. Schimbarea tipului articulației elimină limitele pentru valorile pe care noul tip nu le are.

## Exportul întregului ansamblu

Într-un ansamblu, meniul **Export** scrie întregul ansamblu, cu fiecare piesă unde este plasată:

- **STEP AP242 / AP214** și **Desen (PDF)** nu sunt realizate încă în această versiune: au nevoie de un nucleu exact, de aceea sunt estompate. Exportați în schimb STEP-ul fiecărei piese (corp exact), din piesă.
- **STL**: o singură plasă pentru toate piesele. **3MF**: fiecare piesă o singură dată, cu câte o plasare pentru fiecare copie.
- **Lista de materiale (CSV)**.

## Limitări

- Desenul de ansamblu și STEP-ul ansamblului nu sunt realizate încă în această versiune (au nevoie de un nucleu exact). Vederile explodate sunt pentru imagini pe ecran.
