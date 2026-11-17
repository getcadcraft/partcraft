---
title: Construirea unui ansamblu cu articulații
summary: Porniți un ansamblu dintr-o piesă, inserați copii și alte fișiere de piesă, uniți-le cu articulații rigide, de rotație, glisante, cilindrice, plane, sferice și de tip știft în canal, centrați articulațiile pe axe, editați o piesă pe loc și salvați ansamblul.
keywords: ansamblu, asociere, articulație, buclă, buclă închisă, înlănțuire, patru bare, mecanism, rigidă, de rotație, glisantă, cilindrică, plană, sferică, articulație sferică, știft în canal, inserare componentă, fixată, fixă, concentrică, coincidentă, editare piesă, în context, partcraft-asm
from: a53bbfef
---

Un ansamblu asamblează piesele. În PartCraft, **articulațiile** plasează piesele: fiecare articulație se sprijină pe o față plană a fiecăreia dintre două piese și le așază față în față. O articulație de rotație lasă o piesă să se rotească, una glisantă o lasă să alunece, iar una rigidă o ține pe loc.

## Pornirea unui ansamblu

1. Construiți o piesă cu un solid (o piesă goală nu poate intra într-un ansamblu: „Construiți mai întâi un solid, apoi introduceți-l într-un ansamblu.”).
2. Alegeți {{ui:Ansamblu}} din bara de instrumente.

Bara de stare afișează: „Ansamblu pornit cu Part1 ca piesă fixată. Inserați mai multe piese ({{ui:Adăugare copie}}, Inserare sau Editare › Duplicare), apoi uniți-le cu articulații.” Panoul din stânga listează acum **Piese** și **Articulații**, iar bara de instrumente afișează uneltele de ansamblu. Uneltele de schiță și de operații se ascund.

Prima piesă este **fixată**: nu se mișcă niciodată, iar toate celelalte sunt plasate față de ea.

## Inserarea pieselor

- {{ui:Adăugare copie}} inserează o altă copie a piesei selectate (sau a ultimei). Copiile împart o singură piesă: editați-o și se modifică fiecare copie.
- {{ui:Duplicare}} ({{key:Mod+D}}) din grupul Editare face același lucru pentru piesa selectată. {{key:Mod+C}} și {{key:Mod+V}} copiază o piesă și o lipesc lângă celelalte, în acest ansamblu sau în altul; {{key:Mod+Shift+V}} o lipește în aceeași poziție. Vezi [Copiere, lipire și duplicare](topic:copy-paste).
- {{ui:Inserare}} inserează o piesă dintr-un fișier `.partcraft.json` de pe calculatorul dumneavoastră. Piesa este copiată în ansamblu.

Piesele noi apar cu 20 mm în dreapta tuturor celor de acolo și rămân acolo până când o articulație le plasează. O piesă fără articulație poate fi mutată și manual: valori tastate sau săgeți pe care le trageți (vezi [Lista de piese, vederile explodate și piesele mobile](topic:assembly-bom-explode)).

## Unirea a două piese

1. Alegeți {{ui:Articulație}} sau apăsați {{key:J}}. Panoul din dreapta afișează **Articulație nouă**.
2. Dați clic pe o față plană a primei piese. Aceasta se evidențiază.
3. Dați clic pe o față plană a celei de-a doua piese.

A doua piesă sare astfel încât fața ei să stea lipită de fața primei piese, orientată spre ea. Articulația apare sub **Articulații**, de exemplu „Revolute1”, iar panoul din dreapta îi afișează setările.

- Dacă ambele fețe au fost făcute prin revoluții, articulația începe ca **de rotație**; altfel, ca **rigidă**. Schimbați-o ulterior.
- Fețele curbe nu pot fi alese: „Fața este curbă. Alegeți o față plană (pentru a vă roti în jurul unei găuri sau al axei unei revoluții, alegeți-o ulterior în articulație).”
- {{key:Esc}} anulează o articulație începută (sau dați clic pe o piesă din lista din stânga).

### Setările articulației

| Setare | Ce face |
|---|---|
| **Tip** | Una dintre articulațiile din tabelul de mai jos |
| **Unghi (°)** | Rotește a doua piesă în jurul axei articulației (perpendicular pe fețe) |
| **Decalaj (mm)** | Mută a doua piesă de-a lungul axei, departe de față (valorile negative o împing în ea) |
| **Pe X**, **Pe Y**, **Înclinare în jurul lui X**, **Înclinare în jurul lui Y**, **Pe canal**, **Direcția canalului** | Celelalte valori, afișate pentru articulațiile care le folosesc |
| **Centrat pe** (pentru fiecare parte) | Locul în care axa articulației traversează fața: „The face's own origin” („Originea proprie a feței”), axa unei revoluții („Axis of Revolve1”) sau axa unei găuri („Hole1, hole 2”) |

Fiecare valoare pe care o articulație o lasă să se miște are sub câmp un cursor de tragere; celelalte se setează o singură dată.

| Articulație | Ce se mișcă | Se setează o dată |
|---|---|---|
| **Rigidă** | nimic | Unghi, Decalaj |
| **De rotație** | Unghi (o balama) | Decalaj |
| **Glisantă** | Decalaj (un sertar) | Unghi |
| **Cilindrică** | Unghi și Decalaj (un arbore într-un lagăr simplu) | |
| **Plană** | Pe X, Pe Y peste față și Unghi (o piesă care alunecă pe o masă) | |
| **Sferică** | Unghi (rotire) și Înclinare în jurul lui X și Y, în jurul centrului articulației (o articulație sferică) | |
| **Știft în canal** | Pe canal și Unghi (un știft într-un canal drept) | Direcția canalului: unghiul canalului față de X-ul feței |

X și Y ale unei fețe sunt cele ale feței primei piese; centrul articulației este setat prin **Centrat pe**.

„The face's own origin” este originea piesei proiectată pe față, ceea ce adesea nu este locul în care doriți să se alinieze piesele. Pentru piesele rotunde și știfturi, setați **Centrat pe** la axa revoluției sau a găurii pe ambele părți: axele se aliniază atunci, ca o asociere concentrică.

### Exemplu: două flanșe înșurubate față în față

1. Deschideți piesa flanșă (o revoluție cu o repetiție circulară de găuri) și alegeți {{ui:Ansamblu}}.
2. Alegeți {{ui:Adăugare copie}}.
3. Apăsați {{key:J}}, dați clic pe fața plană a discului primei flanșe (fața din care pornesc găurile șuruburilor), apoi pe aceeași față de pe a doua flanșă. Fețele au fost făcute prin revoluție, deci articulația este de rotație.
4. Setați **Centrat pe** la „Axis of Revolve1” pentru ambele părți. Flanșele au acum o axă comună.
5. Tastați `22.5` în **Unghi (°)** pentru a alinia găurile șuruburilor, sau trageți cursorul.

## Bucle închise: înlănțuiri

Piesele unite într-un inel (o înlănțuire cu patru bare, o manivelă și un glisor, un cadru contravântuit pe ambele laturi) formează o **buclă**. PartCraft rezolvă fiecare buclă astfel încât să se închidă: articulațiile din ea iau valorile care unesc inelul, mișcându-se cât mai puțin posibil față de poziția inițială.

- **Setați sau trageți** o valoare a unei articulații dintr-o buclă, iar restul buclei urmează. Pentru o înlănțuire cu patru bare, trageți **Unghiul** manivelei, iar biela și balansierul se mișcă odată cu ea. Valoarea pe care o setați este păstrată; celelalte se calculează din ea.
- În listă, o articulație dintr-o buclă care se poate mișca încă este **albastră**: încă s-ar putea seta o altă valoare. O buclă care nu se poate mișca (un cadru contravântuit) rămâne neagră. O buclă care nu se poate închide este **roșie**.
- Caseta **Piesă** afișează **Bucle**: câte sunt închise și câte valori se mai pot mișca, de exemplu „1 închisă; 1 valoare se mai poate mișca”.
- {{ui:Verifică mișcarea pentru conflicte}} parcurge o articulație dintr-o buclă, cu bucla urmând-o, pas cu pas (vezi [Verificarea unui ansamblu pentru conflicte și mișcare](topic:check-assembly)).

O înlănțuire plană din bare plate suprapuse trebuie să fie de acord în adâncime: două piese unite față în față pe ambele laturi ale unui inel au nevoie de aceeași înălțime a stivei în ambele sensuri. Folosiți **Decalajul** unei articulații pentru a ridica o piesă acolo unde stiva nu se adună, altfel bucla nu se poate închide.

## Lucrul cu piesele

Dați clic pe o piesă din vedere sau din listă pentru a o selecta. Panoul din dreapta afișează numele piesei, câte copii există, volumul, articulațiile și dacă este fixată, fixată de articulațiile sale sau „Not joined: stays where it was put” („Neîmbinată: rămâne unde a fost pusă”). Butoane:

- {{ui:Editare piesă}} (sau {{ui:Editare piesă}} din bara de instrumente, ori dublu clic pe piesa din listă): deschide piesa pentru editare;
- {{ui:Inserare copie}};
- {{ui:Fă-o piesa fixă}};
- {{ui:Eliminare}}: elimină și articulațiile sale, după confirmare.

Un ansamblu păstrează cel puțin o piesă: „Un ansamblu păstrează cel puțin o piesă. Închideți-l în schimb.”

### Editarea unei piese pe loc

1. Selectați o piesă și alegeți {{ui:Editare piesă}}. Piesa se deschide cu istoricul ei; titlul spune „Bracket (in Bracket assembly)”.
2. Modificați-o ca orice piesă.
3. Alegeți {{ui:Înapoi}} din bara de instrumente. Ansamblul se actualizează: fiecare copie a acelei piese se modifică, iar articulațiile de pe fețele create prin muchii de schiță urmează modificarea.

Aducerea modificării înapoi este un pas în lista de anulare a ansamblului.

## Anularea, salvarea și închiderea

- Ansamblul are propria listă de anulare: {{key:Mod+Z}} și {{key:Mod+Y}} funcționează pentru articulații, inserări și setări.
- {{ui:Salvare}} sau {{key:Mod+S}} descarcă `<assembly name>.partcraft-asm.json`, cu fiecare piesă în interior. Deschideți-l ulterior cu {{ui:Deschidere}}.
- {{ui:Închidere}} închide ansamblul și revine la piesa de la care ați pornit. Dacă ansamblul nu este salvat, întreabă: {{ui:Anulare}}, {{ui:Renunțare la ansamblu}} sau {{ui:Salvare mai întâi}}.
- Pentru a redenumi ansamblul, dați clic pe spațiul gol, astfel încât să nu fie nimic selectat, și modificați **Nume** în panoul din dreapta.

## Ansambluri mari

Un ansamblu poate conține mii de copii ale câtorva piese. Copiile unei piese sunt desenate împreună, o articulație pe care o rotiți plasează doar piesele din spatele ei, iar lista de piese afișează primele rânduri cu un buton „Afișează mai multe” sub ele (piesa selectată este întotdeauna listată).

- Cât timp rotiți sau măriți vederea, un ansamblu cu peste aproximativ 300,000 de triunghiuri este desenat ca o cutie pentru fiecare piesă, apoi complet, puțin după ce vă opriți.
- {{ui:Vederi}} › {{ui:Afișare ușoară}} păstrează cutiile tot timpul. Alegerea unei piese și a articulațiilor folosește în continuare piesele reale.
- Viteza de rotire depinde și de placa dumneavoastră grafică. Cifrele măsurate de PartCraft sunt în notele de lansare, împreună cu calculatorul de la care provin.

## Probleme ale articulațiilor

- O piesă la care nu ajunge nicio articulație este listată ca **liberă**, iar panoul spune „Bracket2 is not joined to the grounded part, so it stays where it was put.” („Bracket2 nu este îmbinată cu piesa fixată, deci rămâne unde a fost pusă.”)
- O buclă care nu poate fi închisă (lungimile nu ajung, o limită oprește o articulație, fețele nu se potrivesc în adâncime): „Revolute3 closes a loop that cannot close: it is off by 2.000 mm. Check the faces, offsets and limits of the loop's joints.” („Revolute3 încearcă să închidă o buclă care nu poate fi închisă: este decalată cu 2.000 mm. Verificați fețele, decalajele și limitele articulațiilor buclei.”) Articulațiile ei devin roșii.
- Dacă o față sau o axă folosită de o articulație dispare după editarea unei piese: „The face this joint uses is gone from Bracket.” („Fața folosită de această articulație lipsește din Bracket.”) Eliminați articulația și creați-o din nou.

Urmează: [Verificarea unui ansamblu pentru conflicte și mișcare](topic:check-assembly).
