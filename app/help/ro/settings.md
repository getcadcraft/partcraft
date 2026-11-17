---
title: Setările PartCraft
summary: Alegeți ce buton de mouse rotește vizualizarea, faceți ca un gest de trackpad să rotească și să deplaseze piesa, activați sau dezactivați relațiile automate în timpul schițării și setați câte fire de execuție folosesc solverele de simulare.
keywords: setări, preferințe, opțiuni, mouse, buton din mijloc, buton roată, orbitare, rotire, rotire, trackpad, touchpad, derulare, glisare, ciupire, relații, constrângeri, constrângere automată, relații automate, agățare, coincident, fire de execuție, fire solver, nuclee, procesoare, multi-threaded, rezolvare mai rapidă, paralel
from: 759edcaf
---

Deschideți {{ui:Setări}} cu roata dințată din bara aplicației sau cu {{key:Mod+,}}. Primul tab, {{ui:PartCraft}}, conține setările care țin de această aplicație; {{ui:General}} conține cele pe care le împart toate aplicațiile CadCraft (tema, bara de instrumente, panourile). Setările PartCraft există doar în aplicație: le schimbați aici, iar acest browser și le amintește. {{ui:Resetare setări PartCraft}} readuce totul la început.

## Rotirea vizualizării

- **Butonul stâng** (implicit): trageți cu butonul stâng ca să rotiți piesa; trageți cu butonul drept sau din mijloc ca să deplasați vizualizarea.
- **Butonul din mijloc**: apăsați roata și trageți ca să rotiți piesa; țineți {{key:Shift}} (sau {{key:Ctrl}}, sau ⌘) cu butonul din mijloc, ori trageți cu butonul drept, ca să deplasați. Butonul stâng doar alege fețe, muchii și plane, așa că un clic care se mișcă puțin nu rotește niciodată piesa. Multe programe CAD funcționează așa.

Roata mouse-ului mărește sau micșorează spre indicator în ambele cazuri. Într-o schiță, butoanele drept și din mijloc deplasează ca înainte.

## Derulare: roata mouse-ului sau trackpadul

- **Să se stabilească automat** (implicit): PartCraft urmărește derularea. Derularea laterală sau fină, ca cea trimisă de un trackpad, rotește piesa; pașii întregi ai roții măresc sau micșorează.
- **Roata mouse-ului**: derularea mărește întotdeauna spre indicator.
- **Trackpad**: glisați cu două degete ca să rotiți piesa, țineți {{key:Shift}} și glisați ca să deplasați, ciupiți ca să măriți. Într-o schiță, glisarea cu două degete deplasează schița.

Ciupirea mărește în orice variantă. Dacă „Să se stabilească automat” ghicește greșit pentru mouse-ul sau trackpadul dumneavoastră, alegeți-l pe cel pe care îl aveți. Mai multe în [Trackpad, atingere și ecrane mici](topic:trackpad-and-touch).

## Schițare: adăugarea relațiilor în timpul desenării

**Adăugare relații în timpul desenării** (activat implicit): un clic care se agață de un punct face noul punct coincident cu el, un clic pe o curbă pune punctul pe acea curbă, iar o linie trasată aproape orizontală sau verticală devine orizontală sau verticală. Vezi [Relații și cote](topic:relations-dimensions).

Dezactivați-l când vreți să plasați geometrie lângă altă geometrie fără să o legați de ea. Indicatorul se agață în continuare de puncte și de curbe, dar nimic nu este legat: liniile trasate în lanț nu-și împart capetele, așa că o tragere le poate despărți. Adăugați singur relațiile dorite din panoul din dreapta. Un profil închis se extrudează în continuare când capetele sale se întâlnesc.

:::note
Setarea schimbă doar ce adaugă desenul nou. Relațiile deja existente într-o schiță rămân, iar instrumentul Racordare creează în continuare arcul tangent și raza sa.
:::

## Schițare: cotarea în timpul desenării

**Cotare în timpul desenării** (activat implicit): cât timp se desenează o linie, un dreptunghi, un cerc sau un arc, scrierea unui număr completează caseta de dimensiune de lângă indicator ({{key:Tab}} merge la următoarea casetă), iar {{key:Enter}} desenează forma la acea dimensiune, cu o cotă conducătoare pentru fiecare dimensiune scrisă. Dezactivat: scrierea unui număr în timpul desenării nu face nimic, iar formele se desenează doar prin clicuri. Vezi [Scrierea dimensiunii în timpul desenării](topic:sketch-basics#type-the-size-as-you-draw).

## Indicatorul din colț

Ce apare în colțul vizualizării 3D: **Cubul de vizualizare** (implicit; sus, în dreapta — faceți clic pe o față, o muchie sau un colț ca să priviți de acolo, trageți-l ca să orbitați, trageți inelul busolei ca să rotiți modelul), **Pictograma axelor** (un mic marcaj X, Y, Z în stânga jos, care se rotește cu vizualizarea: X roșu, Y verde, Z albastru) sau **Niciuna**. Niciunul nu apare în timpul schițării sau pe foaia de desen. Vezi [Cubul de vizualizare](topic:view-cube).

## Fire de execuție ale solverului

Câte fire de execuție pot folosi solverele de simulare. **Automat** (implicit) ia cu unul mai puțin decât procesoarele logice ale calculatorului (cel mult 16), astfel încât pagina rămâne receptivă cât timp un studiu se rezolvă; sau alegeți un număr. Studiile mari cu voxeli, flambajul, tensiunea în timp și curgerea se rezolvă mai repede pe mai multe fire (în jur de 2× pe 4 fire pentru 80.000 de cuburi, în măsurătorile noastre, mai mult pe un calculator liber); modelele sub circa 20.000 de necunoscute rămân pe un fir, pentru că pornirea firelor costă mai mult decât economisesc. Un calcul pe mai multe fire dă același răspuns ca pe un fir (în limita rotunjirii: sumele se adună în altă ordine). Rezultatele fiecărui studiu afișează **N fire** sau **1 fir**, cu motivul, sub **Solver**.

Firele de execuție cer ca pagina să fie **izolată între origini** (browserul lasă procesele de lucru să partajeze memorie doar atunci). Pagina de laborator este; unde nu este, setarea o spune („Această pagină nu este izolată între origini, așa că solverele rulează pe un fir, orice s-ar alege aici.”), iar fiecare calcul folosește un fir. Restul funcționează la fel, iar răspunsurile sunt aceleași.

Studiile de curgere laminară folosesc și ele firele (în jur de 2,5× pe 4 fire pentru 54.000 de celule de fluid, același răspuns până la ultima cifră). Solverul tetraedrului cvadratic și transferul de căldură rulează pe un fir: paralelizarea lor a fost măsurată ca mai lentă pe calculatorul nostru de test (solverele lor sunt limitate de viteza memoriei și de un pas care nu poate fi împărțit).

### Pe propriul server web

Dacă rulați PartCraft de pe propriul server, funcționează așa cum este servit. Pentru firele solverului, faceți ca serverul să trimită două antete către pagina PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Pe Apache, în `.htaccess` din dosar (necesită mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Pe nginx, în `location` care servește PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Reîncărcați pagina: Setări › Fire de execuție ale solverului va oferi apoi **Automat** cu numărul de procesoare al calculatorului. Al doilea antet face browserul să refuze orice încarcă pagina de pe alt site care nu permite asta, ceea ce este în regulă pentru PartCraft de unul singur (încarcă totul din propriul său dosar).
