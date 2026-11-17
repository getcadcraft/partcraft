---
title: Piese din fizică: generatoare
summary: Spațiul de lucru Engineer și operația Corp generat: alegeți un generator, setați intrările lui (debit, presiune, temperaturi, material, imprimantă) și obțineți o piesă dimensionată din formule din manuale, cu fișa ei de date, verificările de fabricație și fișiere pentru instrumentele de analiză. Aceleași intrări dau întotdeauna aceeași piesă.
keywords: engineer, generator, corp generat, fizică, reguli, schimbător de căldură, distribuitor, ajutaj, rețea, giroid, fișă de date, intrări, determinist, aceleași intrări aceeași piesă, verificări de fabricație, imprimare 3D, pat de pulbere
from: 5a387dc0
---

Un **generator** este un script care dimensionează o piesă din cerințe și o construiește. Un generator de schimbător de căldură ia căldura de transferat, cele două debite și temperaturile lor, presiunea și materialul; calculează cât de mare trebuie să fie miezul și cât de groasă peretele lui, îl construiește și spune numerele folosite și de unde provine fiecare. Modificați o intrare și piesa urmează.

Rezultatul este un corp normal al piesei: apare în lista de operații, se imprimă, se exportă. Generatorul în sine este păstrat și el în piesă, astfel încât un fișier se deschide pe orice computer fără ca generatorul să fie instalat, iar **deschiderea unei piese nu rulează niciodată un script**.

## Creați un corp

1. Alegeți spațiul de lucru {{ui:Engineer}} din comutator.
2. Alegeți un generator din listă (cele livrate cu PartCraft, apoi cele deschise dintr-un fișier) și apăsați {{ui:Nou}}.
3. Scriptul rulează. Când termină, corpul apare în vedere, iar panoul afișează intrările, **fișa de date** și **verificările**.

Puteți adăuga unul și din Design: {{ui:Operații}} › {{ui:Mai multe}} › {{ui:Corp generat}}.

## Modificați-l

Modificați orice intrare, iar corpul se face din nou la scurt timp după ce încetați să scrieți. Panoul spune care dintre trei stări este adevărată:

- **Actualizat**: corpul corespunde scriptului și intrărilor sale.
- **Intrările s-au schimbat**: corpul din piesă provine din intrările anterioare; este refăcut acum, sau apăsați {{ui:Rulare}}.
- **Neexecutat încă** sau **Ultima rulare a eșuat**: se afișează o eroare de script, cu linia ei.

{{ui:Oprire}} oprește o rulare care durează prea mult. Anularea merge înapoi pas cu pas: o rulare este un pas, o intrare este un pas.

## Fișa de date

Fiecare număr calculat de generator este listat cu **unitatea** lui și **de unde provine** (o ecuație din manual, un standard, o fișă de date). Nimic nu este o constantă ascunsă. Fișa face parte din fișier, deci este aceeași pe următorul computer. [Date de ieșire](topic:data-out) explică cum o salvați ca JSON sau PDF.

## Verificările

Un generator își poate verifica propria piesă față de un proces de imprimare: pereți și goluri mai subțiri decât poate tolera procesul, piese libere, cavități care captează pulbere sau rășină, găuri prea înguste ca să fie curățate și porțiuni în consolă care necesită suport. Constatările sunt în panou și în lista {{ui:Probleme}} (butonul ⚠), iar sunt salvate împreună cu piesa.

Cifrele procesului sunt valori rotunde pe care ghidurile publice de proiectare le dau pentru proces în general (FDM, SLA, SLS, pat de pulbere metalică). Ele **nu sunt specificația mașinii**: înlocuiți-le cu cifrele atelierului înainte de a vă baza pe o verificare. Verificarea lucrează pe o rețea de voxeli, deci este exactă cu aproximativ un voxel: un perete este raportat doar când este mai subțire decât limita cu mai mult de un voxel.

## Ce este livrat

| Generator | Ce creează |
|---|---|
| Bloc giroid | Un bloc umplut cu un giroid, Schwarz P sau foaie de diamant: cea mai simplă rețea |
| Schimbător de căldură giroid | Miezul unui schimbător cu două fluide, dimensionat după sarcină prin metoda eficienței-NTU, iar peretele după presiune; poate verifica pierderea de presiune cu un studiu de curgere pe o celulă |
| Distribuitor | Un colector și ramificații, fiecare țeavă dimensionată după debitul pe care îl transportă |
| Grindă de rețea gradată | O rețea al cărei perete se îngroașă acolo unde o optimizare topologică arată că este nevoie de material |

Toate sunt estimări inițiale pe baza formulelor din manuale. [Biblioteca de inginerie](topic:engineering-library) listează formulele și limitele lor. Rulați Simulare, Termic sau Curgere pe rezultat înainte de a vă baza pe el.

## Controlul exportului

Generatoarele și fișele de date ale Engineer poartă o notificare despre controlul exportului și sancțiuni. Citiți-o în [Engineer și controlul exportului](topic:engineer-export-notice); este și la baza fiecărei fișe de date.

## Încă nerealizat

- Antete, porturi și racorduri pe miezul schimbătorului de căldură: este doar miezul.
- Curbe de temperatură pentru rezistența materialelor: materialele sunt la temperatura camerei.
- Pierderile pe teu și împărțirea debitului între ieșiri în distribuitor.
- Adăugarea generatoarelor din directorul de suplimente dintr-un clic; deschiderea unui fișier adaugă unul în acest browser.
- Generatoare pentru celelalte aplicații.
