---
title: Operații și opțiunile lor
summary: Fiecare operație din bara de instrumente, cu setările, valorile implicite și limitele ei, de la extrudare până la racordare, scobire în coajă și solide STEP importate; acțiunile comune tuturor operațiilor și setările piesei.
keywords: operații, încă nerealizat, extrudare, decupare, revoluție, revoluție decupată, gaură, contrasunare, repetiție liniară, repetiție circulară, oglindire, racordare, șanfren, scobire în coajă, import, opțiuni, valori implicite, setări, rezoluție, curbe, fațete, suprimare, derulare înapoi
from: ab3a598e
---

Operațiile sunt listate în istoric în ordinea în care au fost create și sunt reconstruite de sus în jos. Fiecare primește numele tipului său, cu un număr: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft construiește fiecare operație cu nucleul de plasă. Racordarea și șanfrenul funcționează pe muchii drepte între două fețe plane, iar scobirea deschide fețe plane. Solidele importate au nevoie de un nucleu exact, pe care această versiune nu îl are: ele sunt încă nerealizate, iar secțiunea de mai jos le descrie ca fiind păstrate de o piesă făcută într-o versiune anterioară. Vezi [Nucleul de plasă](topic:solid-kernels) și [Ce nu este încă realizat](topic:not-built-yet).

## Schiță

| Setare | Note |
|---|---|
| Plan | Planul Front, Top sau Right, sau o față plană. Afișat, dar nemodificabil: pentru a muta o schiță, creați una nouă |
| Stare | Complet definită, Subdefinită (cu gradele de libertate), Supradefinită sau Goală |
| Geometrie, Relații | Câte curbe, puncte și relații |
| Cote de control | Fiecare cotă a schiței, editabilă |

Butoane: {{ui:Edit sketch}}, {{ui:Export as DXF}}.

## Extrudare și decupare

{{ui:Extrude}} și {{ui:Cut}} creează aceeași operație, pornind cu setări diferite.

| Setare | Alegeri | Extrudarea pornește la | Decuparea pornește la |
|---|---|---|---|
| Operație | Proeminență (adaugă material), Decupare (elimină material), Intersecție (păstrează suprapunerea), Corp nou (încă nerealizat în această versiune) | Proeminență | Decupare |
| Capăt | Oarbă (o adâncime), Plan median (în ambele sensuri), Prin tot | Oarbă | Prin tot |
| Adâncime (mm) | Peste 0, până la 1,000,000 | 10 | 10 |
| Inversare direcție | Oprit / pornit | Oprit | Oprit |

- Profil: fiecare buclă închisă de linii pline, cercuri și arce din schiță. Buclele din interiorul altor bucle sunt găuri.
- Prin tot funcționează doar pentru decupări. Ajunge până la capătul piesei, pe partea aleasă.
- O decupare intră în material, dinspre partea exterioară a planului schiței; Inversare direcție o întoarce.

## Revoluție și decupare prin revoluție

| Setare | Alegeri | Implicit |
|---|---|---|
| Operație | Proeminență, Decupare | Proeminență ({{ui:Revolve}}), Decupare ({{ui:More}} › {{ui:Revolved cut}}) |
| Unghi (°) | Peste 0, până la 360 | 360 |
| Axă | Prima linie de axă, orice linie sau linie de axă a schiței, sau o operație de axă aflată în planul schiței | Prima linie de axă |

- Conturul trebuie să rămână pe o parte a axei. Poate să o atingă.
- Axa unei revoluții poate fi folosită de repetițiile circulare și de articulațiile ansamblului.

## Gaură

| Setare | Alegeri | Implicit |
|---|---|---|
| Tip | Simplă, Contrasunată | Simplă |
| Diametru (mm) | Peste 0 | 6 |
| Prin tot | Pornit / oprit | Pornit |
| Adâncime (mm) | Când Prin tot este oprit | 10 |
| Diametru contrasunare ⌀ | Mai larg decât gaura | 11 |
| Adâncime contrasunare | Mai puțin adânc decât o gaură oarbă | 6 |
| Inversare direcție | Oprit / pornit | Oprit |

- O gaură în fiecare punct liber al schiței (puncte create cu unealta Punct). Panoul arată câte sunt.
- Găurile se forează perpendicular pe planul schiței, în material.
- Axa fiecărei găuri poate fi folosită de articulațiile ansamblului ("Hole1, hole 2").

## Repetiție liniară

| Setare | Alegeri | Implicit |
|---|---|---|
| Operații de copiat | Orice operații de solid de deasupra ei | Operația selectată, altfel ultima operație de solid |
| Direcție | Axa X, Y, Z; o linie dintr-o schiță anterioară; axa unei revoluții; o muchie aleasă | Axa X (sau muchia aleasă când ați adăugat operația) |
| Distanță (mm) | Orice număr | 20 |
| Număr | De la 1 la 1000, inclusiv originalul | 3 |
| Inversare direcție | Oprit / pornit | Oprit |

## Repetiție circulară

| Setare | Alegeri | Implicit |
|---|---|---|
| Operații de copiat | Ca la liniară | Ca la liniară |
| Axă | Ca la Direcție de mai sus | Axa ultimei revoluții, altfel axa Y (sau muchia aleasă) |
| Unghi (°) | Peste 0, până la 360. 360 distanțează copiile egal pe tot cercul; mai puțin le întinde pe unghiul dat | 360 |
| Număr | De la 1 la 1000, inclusiv originalul | 6 |
| Inversare direcție | Oprit / pornit | Oprit |

## Oglindire

| Setare | Alegeri | Implicit |
|---|---|---|
| Oglindire | Întregul corp (așa cum este construit până acum) sau operațiile alese | Operația selectată, altfel întregul corp |
| Plan de oglindire | Planul Front, Top sau Right; o față plană | Planul Right, sau fața plană aleasă când ați adăugat operația |

## Racordare și șanfren

În această versiune, nucleul de plasă le construiește pe muchii drepte între două fețe plane (colțuri exterioare sau interioare), cu o singură rază. O muchie rotundă afișează: "Racordare: în această versiune doar muchii drepte între două fețe plane (le construiește nucleul de plasă). Rotunjiți sau teșiți muchiile curbe din schiță." Acolo unde muchiile rotunjite se întâlnesc într-un colț, sunt îmbinate la unghi, iar operația avertizează: "Racordare prin nucleul de plasă: acolo unde se întâlnesc muchiile rotunjite, sunt îmbinate la unghi, nu fuzionate lin." Toate tipurile de șanfren (distanță egală, două distanțe, distanță și unghi, cu **Inversare laturi**) funcționează. Vezi [Rotunjire, teșire și golire](topic:fillet-chamfer-shell).

| Setare | Alegeri | Implicit |
|---|---|---|
| Rază (mm) (Racordare) | Peste 0 | 2 |
| Distanță (mm) (Șanfren) | Peste 0, aceeași pe ambele fețe | 1 |
| Muchii | Muchiile alese, fiecare listată după cele două fețe pe care le unește ("Extrude1 end face × Extrude1 side"), cu **Eliminare** | Muchiile alese când ați adăugat operația |

- Alegeți muchiile înainte de a alege butonul ({{key:Shift}}+clic pentru mai multe), sau alegeți-l fără nimic ales și faceți clic pe muchii după aceea.
- {{ui:Pick edges}} (sau dublu clic pe operație) modifică muchiile.
- Muchiile sunt păstrate după cele două fețe pe care le unesc, deci supraviețuiesc modificărilor de dimensiune din amonte.

## Scobire în coajă

Nucleul de plasă o construiește. Pot fi deschise doar fețe plane ("Scobire în coajă: în această versiune deschide doar fețe plane (o construiește nucleul de plasă)."); pereții de grosimi diferite nu sunt încă realizați. Vezi [Rotunjire, teșire și golire](topic:fillet-chamfer-shell).

| Setare | Alegeri | Implicit |
|---|---|---|
| Perete (mm) | Peste 0 | 2 |
| Pereții cresc spre exterior (fețele rămân înăuntru) | Oprit: pereții merg spre interior. Pornit: pereții merg spre exterior | Oprit |
| Fețe deschise | Fețele eliminate, cel puțin una, cu **Eliminare** | Fețele alese când ați adăugat operația |

{{ui:Pick faces}} schimbă fețele deschise.

## Solid importat

Se creează prin deschiderea unui fișier STEP, STL, OBJ sau 3MF: un corp solid format din triunghiuri, fără istoric propriu ([Deschiderea unui fișier STEP](topic:import-step), [Deschiderea unui STL, OBJ sau 3MF](topic:open-meshes)). Arată fișierul din care provine și ce a reparat importul; **Unități în fișier**, **Sus în fișier** și **Folosiți-l pentru** rămân editabile. Un solid STEP importat de o versiune mai veche, care avea nucleul exact, rămâne în istoric marcat ca nerealizat; deschideți din nou fișierul STEP ca să-l aduceți ca triunghiuri.

| Setare | Alegeri | Implicit |
|---|---|---|
| Sus în fișier | Z în sus (majoritatea CAD), Y în sus | Z în sus |

Repetițiile și oglindirile pot copia un solid importat, dar nu o racordare, un șanfren sau o scobire în coajă.

## Ce are fiecare operație

În partea de jos a panoului fiecărei operații:

| Buton | Face |
|---|---|
| {{ui:Suppress}} / {{ui:Unsuppress}} | O oprește sau o pornește. Operațiile care au nevoie de ea nu sunt construite cât timp este oprită |
| {{ui:Roll back to here}} | Construiește doar operațiile de deasupra acesteia. Operațiile noi intră la bara de derulare înapoi |
| {{ui:Move up}} / {{ui:Move down}} | Reordonează, când nimic din ce folosește nu ajunge sub ea. Altfel este estompat, cu motivul afișat |
| {{ui:Delete}} | Șterge operația și, după confirmare, toate operațiile care o folosesc |
| Nume | O redenumește (până la 60 de caractere) |

Operațiile cu o schiță listează și **Cotele schiței**, care se pot edita pe loc.

## Stări în istoric

| Stare | Afișată ca | Înseamnă |
|---|---|---|
| Construită | Normal | Totul este în regulă |
| Avertisment | ⚠ | Construită, cu ceva de verificat: "Supradefinită: 1 relație nu este necesară." sau "După aceasta nu mai rămâne nimic din piesă." |
| Eroare | ⚠ eroare, roșu | Nu a putut fi construită; mesajul spune de ce |
| Nerealizată | ⚠ nerealizată | Are nevoie de o operație care a eșuat, este suprimată sau derulată înapoi, ori are nevoie de un nucleu exact, pe care această versiune nu îl are ("Baleiere: încă nerealizată. …") |
| Suprimată | oprită | Oprită |
| Derulată înapoi | estompată, sub bara de derulare înapoi | Nu este construită până nu derulați înainte |

## Setările piesei

Faceți clic pe spațiul gol, ca să nu fie nimic selectat. Panoul din dreapta afișează **Piesă**:

- **Nume**: numele piesei, folosit pentru numele fișierelor și pentru cartușul desenului (până la 120 de caractere).
- **Curbe**: vezi mai jos.

### Rezoluția curbelor

Nucleul de plasă construiește singur solidul din fațete plane, deci vederea, STL, 3MF, STEP-ul cu fațete, volumul și vederile desenului urmează toate **Curbe**: câte fațete sunt pe o rotație completă.

| Setare | Fațete pe rotație | Volumul unei forme rotunde |
|---|---|---|
| Grosieră (32 pe rotație) | 32 | Cu aproximativ 0.64 % sub valoarea reală |
| Normală (64 pe rotație) | 64 | Cu aproximativ 0.16 % sub (implicit) |
| Fină (128 pe rotație) | 128 | Cu aproximativ 0.04 % sub |
| Foarte fină (256 pe rotație) | 256 | Cu aproximativ 0.01 % sub |

Curbele mai fine dau exporturi și vederi mai netede, dar reconstruiri mai lente. Setarea se salvează în fișierul piesei.

## Ce nu este încă realizat

Racordările cu rază variabilă, racordările și șanfrenele pe muchii rotunde, scobirile care deschid fețe curbe, înclinarea pe fețe curbe, baleierea, loft-ul, nervura, solidele STEP cu fețe curbe exacte, corpurile noi, conicitățile, "până la" o față sau un vârf, precum și referințele de pe fețele și muchiile solidului au nevoie de un nucleu exact, pe care această versiune nu îl are. De asemenea, nerealizate: găurile filetate și găurile conice pentru cap înfundat. Vezi [Ce nu este încă realizat](topic:not-built-yet).
