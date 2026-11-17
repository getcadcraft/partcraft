---
title: Repetiții și oglindiri de elemente
summary: Repetați elemente în șir cu Liniară, în jurul unei axe cu Circulară și copiați elemente sau întregul corp peste un plan cu Oglindire.
keywords: repetiție, repetiție liniară, repetiție circulară, matrice polară, matrice, oglindire, simetric, copiere elemente, cerc de șuruburi, element sursă, oglindire corp
from: 702e9edb
---

Repetițiile și oglindirile copiază elemente pe care le-ați construit deja. Copiile fac parte din istoric: dacă modificați originalul, copiile îl urmează.

Ce se copiază este ceea ce face elementul: o repetiție de proeminență adaugă material, o repetiție de tăiere sau de gaură îl elimină. Repetițiile pot fi repetate și oglindite din nou. Un solid STEP importat poate fi copiat; racordările, teșiturile și scobirile în coajă nu pot.

## Repetiție liniară

1. Selectați în istoric elementul de copiat (de exemplu o **Gaură** sau o **Tăiere**). Dacă nu este selectat nimic, se folosește ultimul element solid.
2. Alegeți {{ui:Liniară}}. Apar trei copii la 20 mm una de alta, de-a lungul axei X.
3. În panoul din dreapta, setați:

| Setare | Ce face | Implicit |
|---|---|---|
| **Elemente de copiat** | Bifați fiecare element de copiat. Sunt listate doar elementele de deasupra repetiției | Elementul selectat |
| **Direcție** | Axa X, axa Y, axa Z, o linie sau o linie de axă dintr-o schiță anterioară, axa unei revoluții sau o muchie aleasă | Axa X |
| **Spațiere (mm)** | Distanța dintre vecini | 20 |
| **Număr** | Numărul total, **inclusiv originalul** (de la 1 la 1000) | 3 |
| **Inversare direcție** | Copiile merg în sens opus | Inactiv |

### Folosiți o muchie ca direcție

1. Faceți clic pe o muchie dreaptă a piesei în vizualizare. Panoul din dreapta indică **Muchie** și afișează lungimea ei.
2. Alegeți {{ui:Liniară}}: repetiția merge de-a lungul acelei muchii.

Sau selectați repetiția, alegeți o muchie și alegeți „Muchie aleasă (folosește cea aleasă acum)” la **Direcție**. O muchie aleasă este fixată în spațiu: nu urmează modificările ulterioare. O linie de schiță urmează schița ei.

## Repetiție circulară

1. Selectați elementul de copiat (de exemplu o gaură lângă marginea unui disc).
2. Alegeți {{ui:Circulară}}. Șase copii apar distribuite egal pe tot cercul.
3. Setați:

| Setare | Ce face | Implicit |
|---|---|---|
| **Elemente de copiat** | Ca la repetiția liniară | Elementul selectat |
| **Axă** | Axa X, Y sau Z, o linie de schiță, axa unei revoluții sau o muchie aleasă | Axa ultimei revoluții dacă există, altfel axa Y |
| **Unghi (°)** | 360 distribuie copiile egal pe tot cercul. Un unghi mai mic le răspândește pe acel unghi, prima și ultima fiind la capete | 360 |
| **Număr** | Numărul total, inclusiv originalul | 6 |
| **Inversare direcție** | Se rotește în sens invers | Inactiv |

Axele lumii trec prin origine. Pentru un disc necentrat în origine, folosiți o linie de axă a schiței sau axa unei revoluții.

### Exemplu: cele opt găuri pentru șuruburi ale unei flanșe

1. Revolați flanșa (vedeți [Revoluția unei piese strunjite](topic:revolve)) în jurul axei Y.
2. Schițați pe fața plană de sus a flanșei, plasați un punct pe cercul găurilor și faceți o **Gaură**.
3. Cu Gaura selectată, alegeți {{ui:Circulară}}. Axa este deja „Axa de la Revolve1”.
4. Setați **Număr** la `8`.

## Oglindire

1. Selectați în istoric elementul de oglindit sau nu selectați nimic, pentru a oglindi **întregul corp construit până acum**.
2. Alegeți {{ui:Oglindire}}. Oglindește peste **Planul Right**.

Pentru a oglindi întregul corp peste o față a piesei, faceți mai întâi clic pe acea față plană, apoi alegeți {{ui:Oglindire}}. (Clicul pe o față șterge selecția din istoric, deci se oglindește mereu întregul corp.)

Setările din panoul din dreapta:

- **Oglindire**: bifați **Întregul corp (până acum construit)** sau debifați-l și bifați elementele de copiat.
- **Plan de oglindire**: Planul Front, Planul Top, Planul Right, fața folosită acum („O față a Extrudare1” sau „Un plan fix”) sau „Fața aleasă acum”. Pentru a oglindi elementele alese peste o față: selectați Oglindirea în istoric, faceți clic pe față în vizualizare și alegeți „Fața aleasă acum”.

Oglindirea întregului corp peste o față dublează piesa, de exemplu transformă o jumătate de consolă într-una completă.

## Mesaje

- „Construiți mai întâi un element de copiat.” sau „Construiți mai întâi un solid.” Nu există încă nimic solid de copiat.
- „Alegeți elementele de copiat.” Toate casetele **Elemente de copiat** sunt golite.
- „Extrude2 nu are solid de copiat.” Acel element a eșuat sau este suprimat.
- „Fillet1 modifică muchiile sau pereții corpului; nu poate fi copiat. Copiați elementele care creează solide (extrudări, revoluții, găuri, importuri).” Racordările, teșiturile și scobirile în coajă nu pot fi repetate sau oglindite; repetați mai întâi, apoi racordați.
- „Nu există încă un corp de oglindit.”

:::note
Copiile unei repetiții nu pot fi sărite una câte una, iar o repetiție nu poate urma o curbă de schiță. Repetițiile și oglindirile de schiță sunt încă nerealizate: desenați geometria repetată de mână sau cu **Adăugare prin coordonate**.
:::
