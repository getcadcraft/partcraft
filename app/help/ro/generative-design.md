---
title: Crearea unei forme din sarcini (Generativ)
summary: Alegeți fețele ținute și încărcate, regiunile de păstrat și de lăsat libere, volumele țintă și materialele, apoi generați rezultate: cele mai rigide forme găsite pentru fiecare volum, verificate din nou ca solide, comparate într-un tabel și descărcate ca STL, STEP sau ca piesă nouă.
keywords: proiectare generativă, optimizare topologică, SIMP, ușurare, zăbrele, formă organică, rezultate, comparare, masă, fracție de volum, păstrare, menținere, obstacol, zonă liberă, spațiu de proiectare, dimensiune minimă a barei, STL, imprimare 3D
from: 5b91fa8e
---

Spațiul de lucru **Generativ** îndepărtează materialul pe care sarcinile nu-l necesită. Spuneți unde este ținută și încărcată piesa, ce trebuie să rămână și ce trebuie să rămână liber; PartCraft găsește cea mai rigidă formă pentru fiecare volum țintă (**optimizare topologică**), verifică din nou fiecare formă ca solid cu materialul real și arată rezultatele unul lângă altul. Lucrează pe fețele numite pe care nucleul de plasă le oferă piesei (vezi [Nucleul de plasă](topic:solid-kernels)).

Alegeți **Generativ** din caseta **Spațiu de lucru**. Piesa nu se modifică; studiul se salvează în fișierul piesei.

## Configurarea unui studiu

1. Apăsați **Studiu nou** în panoul din dreapta.
2. **Spațiu**: *Piesa așa cum este* îndepărtează material din piesă; *O cutie în jurul piesei* construiește o formă într-o cutie mai mare decât piesa, cu **Marginea cutiei**.
3. **Dimensiunea elementului**: lăsați gol pentru o dimensiune automată (circa 8,000 de cuburi) sau scrieți una. Dimensiunile mai fine dau forme mai fine și durează mai mult.
4. **Bara minimă**: barele mai subțiri decât circa de două ori această valoare nu se formează. Gol înseamnă un cub și jumătate.
5. Bifați unul până la șase **Volume țintă** (partea din spațiul de proiectare pe care forma o poate umple) și unul până la patru **Materiale**. Fiecare volum se generează o dată; fiecare material se verifică pe forma respectivă (cea mai rigidă formă nu depinde de material, dar masa, tensiunea și coeficientul de siguranță da).

## Obiective

- {{ui:Fixare}}: faceți clic pe fețele ținute. O **Față fără frecare** din lista **Adăugare** a panoului ține o față doar în planul ei (folosiți-o pentru planurile de simetrie).
- {{ui:Forță}}: faceți clic pe fețele încărcate, apoi scrieți forța totală și alegeți direcția ei în panou. **Presiunea** este în lista **Adăugare**.
- {{ui:Păstrare}}: faceți clic pe fețele ale căror vecinătăți trebuie să rămână pline și setați cât de adânc (**Menținut plin în limita de**), de exemplu în jurul găurilor de șurub. Fețele fixate sau încărcate se păstrează mereu.
- {{ui:Obstacol}}: faceți clic pe fețele ale căror vecinătăți trebuie să rămână goale și setați cât de departe (**Menținut gol în limita de**), de exemplu loc pentru un ax sau o sculă.

Apăsați **Terminare alegere** sau {{key:Esc}} după ce faceți clic pe fețe. Nuanțele verde și roșu arată regiunile.

## Generare și comparare

Apăsați {{ui:Generare}}. Panoul arată progresul și timpul rămas; **Oprire** anulează. Fiecare rezultat apare în tabelul **Rezultate**: volumul țintă, materialul, **masa**, **tensiunea maximă**, **deplasarea maximă** și **coeficientul de siguranță** (limită de curgere ÷ tensiune), toate din recalcularea formei finale ca solid, cu cuburi și materialul real.

Alegeți un rezultat ca să-l vedeți în vedere (piesa se ascunde; bifați **Afișare piesă prin el** ca să le vedeți pe amândouă). Sub tabel: câte iterații a durat și dacă s-a stabilizat, rigiditatea ei ca solid față de cifra optimizatorului și suprafața ei.

## Folosirea unui rezultat

- **STL**: o plasă triunghiulară închisă, gata pentru imprimare 3D.
- **STEP (facetat)**: aceeași suprafață ca solid STEP, formată din fețe plane.
- **Fișier piesă nouă**: o piesă PartCraft a cărei singură operație este rezultatul ca solid importat. Deschideți-o ca să schițați pe ea, să tăiați găuri sau să o verificați în Simulare. Este facetată (mii de fețe plane), nu o formă editabilă.
- **Adăugare la această piesă** unește rezultatul cu piesa; este activă doar pentru un spațiu de proiectare cu cutie (cu piesa însăși ca spațiu, rezultatul se află în interiorul piesei).

**Fișier piesă nouă** și **Adăugare la această piesă** nu sunt încă realizate în această versiune: rezultatul devine un solid importat, ceea ce necesită un nucleu exact. Descărcările STL și STEP (facetat) funcționează.

## Cât de mult să aveți încredere

- Optimizează **rigiditatea** pentru volumul dat. Nu există încă limite de tensiune și nici reguli de fabricație (suprapuneri, direcții de frezare, dimensiuni minime ale găurilor): verificați un rezultat ales în [Simulare](topic:simulation) și ajustați.
- Barele subțiri de unul sau două cuburi lățime sunt aproximări: folosiți o dimensiune de element mai mică pentru piesele zvelte.
- Metoda este SIMP cu un filtru de densitate, o proiecție de prag și actualizări ale criteriilor de optimalitate; tensiunea și deformația raportate sunt ale rezultatului ca cuburi, ceea ce este onest, dar grosier la colțurile ascuțite.

## Subiecte înrudite

- [Verificarea tensiunii și a deformației (Simulare)](topic:simulation)
- [Export pentru imprimare, STEP și DXF](topic:export-files)
- [Ce este încă nerealizat](topic:not-built-yet)
