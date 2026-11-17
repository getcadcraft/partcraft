---
title: Noduri: construirea unui model prin conectare
summary: Conectați numere în puncte, puncte în curbe, curbe în suprafețe. Schimbați un număr și tot ce urmează se reconstruiește. Fiecare nod este și o linie de CraftScript, iar graful este salvat în fișier.
keywords: noduri, editor de noduri, programare vizuală, parametric, graf, fire, porturi, formă liberă, freeform, nurbs, loft, extrudare, revoluție, cerc, curbă, suprafață, serie, interval, aleatoriu, listă, script, craftscript, grasshopper
from: 3a4625de
---

**Editorul de noduri** construiește geometria prin conectarea unor casete. Fiecare casetă (un nod) face o treabă mică: creează un număr, un punct, un cerc, un loft. Conectați rezultatul unuia la intrarea următorului, iar modelul urmează când schimbați un număr de la început.

Deschideți-l din lista spațiilor de lucru: {{ui:Noduri}}. Se deschide fereastra editorului. O piesă care are deja un graf îl arată la deschiderea spațiului de lucru. Este o fereastră peste vederea 3D: trageți de bara de titlu ca s-o mutați, trageți de colț ca s-o redimensionați.

## Conectarea

1. Alegeți un nod din lista din stânga (scrieți în caseta de căutare ca să restrângeți lista; <kbd>Enter</kbd> adaugă primul rezultat). Apare în mijlocul pânzei.
2. Trageți de la punctul rotund de **ieșire** din dreapta unui nod până la punctul rotund de **intrare** din stânga altuia. Punctul devine verde când se potrivește și roșu când nu; treceți cu cursorul peste el ca să aflați motivul.
3. O intrare fără conexiune arată o casetă pentru o valoare scrisă. Scrieți un număr și apăsați <kbd>Tab</kbd>: rezultatul se reconstruiește.
4. Cercul mic din bara de titlu a unui nod este **ochiul** lui. Un nod cu ochiul activat este desenat în vederea 3D: linii pentru curbe, umbrit pentru suprafețe, puncte pentru puncte.

Trageți un nod de bara lui de titlu. Trageți fundalul ca să deplasați vederea; rotiți roata pentru zoom. <kbd>Delete</kbd> șterge nodul selectat. {{ui:Aranjare}} aranjează nodurile pe coloane, {{ui:Potrivire}} le aduce pe toate în vedere, {{ui:Anulare}} și {{ui:Refacere}} parcurg modificările.

## Tipuri și unități

Porturile au un tip: număr, da/nu, punct, vector, curbă, suprafață, plasă (mesh), solid sau „geometrie” pentru oricare dintre acestea. Un punct poate alimenta o intrare de vector și invers. Numerele au o unitate: o **lungime** este în milimetri, iar un **unghi** este în grade. O lungime nu poate alimenta un unghi, iar o lungime înmulțită cu o lungime (o arie) este refuzată, deci o conexiune greșită este oprită în momentul în care o faceți.

Un punct pătrat este o **listă**. Când o listă ajunge la o intrare cu o singură valoare, nodul rulează câte o dată pentru fiecare element, iar rezultatul devine listă. Lista mai scurtă își repetă ultimul element. De exemplu, o **Serie** de înălțimi conectată la **Mutare** face o stivă de copii.

## Solide și booleene ca noduri

Grupul **Solide** creează corpuri închise din aceleași suprafețe exacte ca panoul Suprafețe: **Solid cutie**, **Solid cilindru** și **Solid sferă** (dimensiuni în mm), **Reuniune**, **Scădere** și **Intersecție** (al doilea solid se ia din primul; toleranța este cât de departe pot fi triunghiurile motorului de solide de suprafețele exacte), **Racordare între fețe** (fețele după numărul lor în solid, 1 pentru prima; o rază și, peste 0, o rază la capăt), **Volum solid** (mm³) și **Solid în plasă** (ca să-l vedeți sau să-l fixați). Un solid are propriul tip de port: un punct sau un număr nu pot fi conectate la o intrare de solid, iar punctul rămâne roșu. Nodurile Booleană și Racordare folosesc motorul de solide al programului, încărcat la prima deschidere a editorului.

## Erori

Un nod care nu își poate face treaba spune de ce sub nume, cu roșu („Raza trebuie să fie mai mare decât zero.”), iar nodurile de după el așteaptă. Același mesaj este o problemă în panoul Probleme, de unde îl puteți găsi.

## Fiecare nod este o linie de script

Apăsați {{ui:Script}} ca să vedeți graful ca CraftScript: câte o linie pe nod, de exemplu `n3 = nd_circle(n2, n1, [0 0 1]);`. Editați textul și apăsați {{ui:Creați graficul din acest script}} ca să-l aduceți înapoi ca graf. Aceleași funcții `nd_` funcționează într-un CraftScript din PartCraft, deci un graf poate fi rulat, repetat în buclă sau testat acolo. Numerele aleatoare primesc întotdeauna un **seed** (sămânță), astfel încât același graf dă același rezultat pe orice calculator.

## Salvat cu fișierul

Graful este salvat în fișierul piesei (nu în istoric, deci anularea din editor are propriul istoric). Nodurile creează curbe, suprafețe și plase lângă solid: nu schimbă operațiile piesei.
