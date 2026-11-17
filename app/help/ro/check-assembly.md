---
title: Verificarea unui ansamblu pentru conflicte și mișcare
summary: Găsiți piesele care se suprapun cu Conflict, trageți orice valoare a unei articulații pentru a urmări mișcarea și parcurgeți o articulație pe întregul ei interval pentru a găsi unde se ciocnesc piesele.
keywords: interferență, detectarea interferențelor, conflict, coliziune, suprapunere, potrivire filet, nepotrivire adâncime filet, fețe în contact, ascundere, filtru, mișcare, studiu de mișcare, parcurgere, interval de mișcare, verificare
from: 9c98db46
---

Două verificări rulează asupra pieselor așa cum sunt plasate: **Conflict** caută materialul care se suprapune chiar acum, iar **verificarea mișcării** mută o articulație pe întregul ei interval și caută suprapuneri pe parcurs.

## Verificarea interferențelor

1. Deschideți sau construiți un ansamblu (vezi [Construirea unui ansamblu](topic:build-assembly)).
2. Alegeți {{ui:Conflict}}.

Bara de stare raportează rezultatul:

- „Nicio interferență între 3 piese (… ms).” Nimic nu se suprapune.
- „Interferență: Flange1 și Flange2: Suprapunere, 2.5 mm³.” Fiecare pereche, ce fel de rezultat este și volumul pe care îl au în comun.

Caseta **Ansamblu** din stânga afișează **Interferență**: „Niciuna”, „2 rezultate” (cele afișate) sau „Neverificat”. Fără nimic selectat, panoul din dreapta listează fiecare rezultat sub **Interferență**.

Rezultatul este șters ori de câte ori se modifică ansamblul. Rulați din nou {{ui:Conflict}} după ce mutați o articulație. Fiecare pereche de piese este verificată față de fiecare alta, deci ansamblurile mari durează mai mult.

### Tipurile de rezultate

| Tip | Înseamnă |
|---|---|
| **Suprapunere** | Piesele au volum comun: un conflict real. |
| **Nepotrivire a adâncimii filetului** | Volumul comun se află în filetul unei piese, dar dincolo de cel al celeilalte: un șurub filetat mai adânc decât gaura sa, sau o tijă netedă într-o gaură filetată. |
| **Potrivire filet (filete cosmetice)** | Volumul comun se află în filetele ambelor piese: un șurub într-o gaură filetată. Filetele cosmetice sunt desenate la mărimea completă a filetului, deci se suprapun întotdeauna puțin. |
| **Fețe în contact** | Niciun volum comun, dar fețe în contact (în limita a 0.001 mm). |

Filetele modelate (vezi [Filete pe arbori și alezaje, desenate sau modelate](topic:threads)) sunt geometrie reală: ceea ce au în comun este o **Suprapunere**.

### Ascunderea a ceea ce nu trebuie să vedeți

Sub **Interferență**, **Afișare** are câte o casetă pentru fiecare tip: debifați **Potrivire filet** și **Fețe în contact** pentru a vedea doar conflictele care contează. **Ascundere pereche** de lângă un rezultat ascunde acea pereche de piese, indiferent de tip. Rezultatele ascunse sunt numărate („2 rezultate ascunse de aceste filtre”), iar **Afișare din nou a perechilor ascunse** readuce perechile. Bara de stare numără și rezultatele ascunse.

Filtrele sunt salvate împreună cu ansamblul, iar fiecare modificare este un pas {{key:Mod+Z}}. **Parcurgerea unei articulații pentru conflicte** (mai jos) le folosește și ea. Un ansamblu cu filtre este salvat ca versiunea 4, pe care versiunile anterioare PartCraft refuză să o deschidă, în loc să piardă filtrele.

## Urmărirea mișcării

1. Selectați o articulație care se mișcă (oricare în afară de rigidă) din lista din stânga.
2. Trageți cursorul de sub una dintre valorile sale, cum ar fi **Unghi (°)** sau **Decalaj (mm)**. Piesa se mișcă pe măsură ce trageți.
3. Eliberați. Noua poziție este păstrată și poate fi anulată cu {{key:Mod+Z}}.

Puteți tasta și un unghi sau un decalaj în câmp și apăsa {{key:Enter}}.

O articulație dintr-o buclă închisă (o înlănțuire) mișcă întreaga buclă: valoarea pe care o trageți este păstrată, iar celelalte articulații ale buclei urmează (vezi [Bucle închise](topic:build-assembly#closed-loops-linkages)).

## Parcurgerea unei articulații pentru conflicte

1. Selectați o articulație care se mișcă.
2. Pentru o articulație cu mai multe valori (cilindrică, plană, sferică, știft în canal), alegeți care să fie parcursă în **Verifică mișcările**.
3. Alegeți {{ui:Verifică mișcarea pentru conflicte}}.

PartCraft mută acea valoare prin 25 de poziții, în 24 de pași egali, celelalte rămânând neschimbate: un unghi de la −180° la 180° (o înclinare de la −90° la 90°), o lungime de la minus la plus mărimea celei mai mari piese. Raportează:

- „Niciun conflict pentru Unghi (°) de la -180 la 180 (25 de poziții verificate).”
- „6 din 25 de poziții au conflict, prima la Unghi (°) 45 (12.4 mm³).” Prima poziție în care există conflict și suprapunerea de acolo.

Butonul este estompat pentru articulațiile rigide, care nu se mișcă. Parcurgerea verifică doar pozițiile, nu traseul dintre ele: o piesă subțire ar putea trece printr-o alta între doi pași.

:::note
Contactul și gravitația nu sunt realizate. Fără limite, parcurgerea acoperă întregul interval; setați pentru valoare **Limite** (vezi [Lista de piese, vederile explodate și piesele mobile](topic:assembly-bom-explode)) și parcurgerea acoperă doar acestea, astfel încât o balama care se deschide cu 90° este verificată pe 90°.
:::

## Un studiu de mișcare

**Ansamblu › Mișcare** acționează valoarea unei articulații de la un început la un sfârșit, pe un timp pe care îl dați (viteză constantă, accelerare și decelerare, sinusoidală sau dus și întors), plasează ansamblul la fiecare pas cu articulațiile și buclele sale închise și raportează ce conflicte apar și cât de aproape ajung piesele. **Adăugare punct** urmărește mijlocul unei piese sau un punct pe care dați clic, iar cardul trasează poziția, viteza și accelerația lui, valoarea articulației și jocul dintre piese în funcție de timp; **Salvare CSV** și **Salvare grafic** le scriu într-un fișier. Viteza și accelerația provin din pozițiile înregistrate, deci un vârf ascuțit între pași apare mai mic: folosiți mai mulți pași.

După **Rulare**, bara **Pas cu pas prin rulare** mută ansamblul la orice pas (timpul, valoarea și dacă piesele se ciocnesc acolo sunt afișate alături); articulația își păstrează propria valoare, iar **Înapoi la model** readuce ansamblul. Setările studiului sunt salvate în fișierul ansamblului; rezultatele sale sunt refăcute de fiecare dată prin **Rulare**.

## Un studiu de contact

**Ansamblu › Contact** arată cum un ansamblu preia sarcinile acolo unde piesele se apasă una pe alta. Fiecare piesă aduce propriile reazeme, sarcini și material din propriul studiu **Simulare** (o față fixă pe o piesă, o forță pe alta); aici alegeți perechile. **Adăugare pereche**, apoi **Alegere latură A** și dați clic pe fețele uneia dintre piese, **Alegere latură B** și dați clic pe fețele unei alte piese (un clic pe o față aleasă o scoate din listă; Esc sau **Gata** încheie alegerea). O pereche este **Fără frecare** (piesele se apasă, dar alunecă) sau **Lipită** (rămân împreună); factorul de rigiditate stabilește cât de tare se opune contactul la afundare (20 este un început rezonabil, 1000 pentru un pachet de oțel rigid).

**Rezolvare** aplică sarcina în pași și afișează forța de contact, cea mai mare afundare, cea mai mare deplasare și cea mai mare tensiune. O piesă fără pereche este lăsată deoparte, iar cardul o spune. Contactul fără frecare nu ține o piesă lateral: dați fiecărei piese un reazem în propriul studiu Simulare sau lipiți-o, altfel pașii s-ar putea să nu se stabilizeze. Perechile și setările sunt salvate în fișierul ansamblului.

**Export fișier CalculiX** scrie același model ca fișier de intrare CalculiX (.inp). CalculiX este un program separat, pe care îl instalați și îl rulați singur; **Citire rezultate CalculiX (.frd)** citește apoi deplasările înapoi pe plasa acestui ansamblu și refuză un fișier făcut pentru o altă plasă. Solverul de aici poate trata deformarea plastică, dar nu dinamică explicită, iar nimic de aici nu este o analiză certificată: lăsați un inginer să verifice tot ce contează.
