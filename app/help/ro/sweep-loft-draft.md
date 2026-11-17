---
title: Baleiere, loft și înclinare
summary: Baleiați un profil închis de-a lungul unui traseu de curbe de schiță sau de muchii ale modelului, faceți loft prin secțiuni pe plane diferite și adăugați înclinare la fețe; cu opțiunile, rezultatele exacte și mesajele.
keywords: baleiere, corp baleiat, tăiere baleiată, țeavă, traseu, loft, corp prin loft, amestecare secțiuni, reglat, înclinare, unghi de înclinare, fețe conice, plan neutru, direcție de tragere, turnare în tipar
from: 9d637981
---

:::note
**În această versiune** baleierea și loftul sunt încă nerealizate: au nevoie de un nucleu geometric exact, pe care această versiune a PartCraft nu îl are. [Ce nu este încă realizat](topic:not-built-yet) spune ce să faceți în loc; secțiunile Baleiere și Loft descriu cum funcționează cu un nucleu exact. **Înclinarea funcționează** pe fețe plane: nucleul de plasă o construiește, cu același rezultat ca un nucleu exact.
:::

Toate trei se află în meniul {{ui:Mai multe}} din grupul Operații (vezi [Nucleul de plasă](topic:solid-kernels)). Fiecare poate adăuga material, îl poate tăia, poate păstra doar suprapunerea (**Intersectare**) sau poate crea un **Corp nou** (baleiere și loft: **Operație** în panou).

## Baleiere

Baleierea deplasează un profil închis de-a lungul unui traseu: țevi, mânere, arcuri din sârmă, șine.

1. Desenați **traseul** într-o schiță: linii și arce unite cap la cap (sau folosiți muchii ale modelului, mai jos).
2. Desenați **profilul** într-o altă schiță al cărei plan trece printr-un capăt al traseului, de exemplu un cerc pe planul de sus, la începutul unui traseu desenat pe planul din față.
3. Selectați schița profilului și alegeți {{ui:Mai multe}}, apoi {{ui:Baleiere}}. Cea mai recentă altă schiță devine traseul.

În panou:

| Setare | Ce face |
|---|---|
| **Traseu** | Bifați schițele care formează traseul (mai multe schițe se unesc cap la cap într-un traseu 3D); **Alegere muchii ale modelului** adaugă muchii ale piesei |
| **Orientare** | Urmează traseul (implicit), Frenet, Fixă (secțiunile rămân paralele cu profilul), Păstrează o direcție, De-a lungul unei curbe de ghidare |
| **Scară la capăt** | Profilul crește sau scade liniar până la această dimensiune la capăt (1 = constantă) |

Colțurile ascuțite din traseu sunt îmbinate în inglet. Un cerc de rază 5 baleiat de-a lungul unei linii de 100 mm este un cilindru de exact 2500π mm³; de-a lungul unui arc de sfert de rază 50, un tor de sfert de 625π² mm³.

## Loft

Loftul face o trecere lină prin două sau mai multe secțiuni pe plane diferite.

1. Desenați fiecare secțiune în propria schiță (câte o buclă închisă), pe planuri de bază, pe [planuri de referință, axe și puncte](topic:reference-geometry) sau pe fețe.
2. Alegeți {{ui:Mai multe}}, apoi {{ui:Loft}}. Fiecare schiță cu o singură buclă, nefolosită, devine secțiune, în ordinea istoricului.

Panoul listează secțiunile în ordine (**Sus** reordonează, **Eliminare** scoate una); **Adăugare schiță** adaugă alta, iar **Alegere față** adaugă o față plană a piesei. **Reglat** face fețe plane între secțiuni în loc de o trecere netedă. Între două pătrate, ambele sunt același trunchi de piramidă (un pătrat de 40 mm la unul de 20 mm pe 30 mm: exact 28000 mm³).

Secțiunile cu număr diferit de laturi (un pătrat la un triunghi) sunt potrivite de OpenCascade, care poate răsuci fețele laterale; operația avertizează. Desenați secțiuni cu același număr de laturi, pornind din colțuri corespondente, pentru cel mai curat rezultat.

### Ghidaje

Ghidajele sunt curbe pe care trebuie să le urmeze laturile loftului de la prima secțiune la ultima, pentru o bombare, o talie sau o evazare pe care le desenați singuri.

1. Desenați două sau mai multe ghidaje: curbe deschise (linii, arce, spline) care merg de la prima secțiune la ultima și intersectează fiecare secțiune o dată. O singură schiță poate conține mai multe ghidaje: fiecare lanț separat din ea este un ghidaj propriu. Desenați un ghidaj astfel încât să întâlnească efectiv fiecare secțiune: fixați capetele lui de punctele secțiunilor.
2. În panoul Loft, sub **Ghidaje**, bifați schițele care le conțin sau faceți clic pe {{ui:Alegeți muchii ale modelului ca șine}} și faceți clic pe muchiile piesei ({{key:Esc}} încheie).

Cu ghidaje, loftul este o suprafață Gordon prin secțiuni și ghidaje (vezi [Suprafețe printr-o rețea de curbe](topic:gordon-surfaces)), închisă plat la ambele capete într-un solid. Panoul arată cât de strâns le urmează. Atunci fiecare secțiune trebuie să fie o schiță (un punct sau o față nu pot primi un ghidaj), iar **Reglat** nu se aplică. Un ghidaj care ratează o secțiune cu mai mult de 0.01 mm este refuzat, cu distanța indicată.

Verificat: două cercuri (20 mm și 10 mm în diametru, la 40 mm distanță) cu patru ghidaje drepte dau volumul trunchiului de con cu o eroare sub 0.000002 %; arce care se bombează cu 5 mm dau un butoi care urmează fiecare ghidaj în limita a 0.00001 mm.

## Înclinare

Înclinarea înclină fețele astfel încât o piesă să poată fi scoasă dintr-un tipar.

1. Alegeți {{ui:Mai multe}}, apoi {{ui:Înclinare}} (sau mai întâi {{key:Shift}}+clic pe fețe). Fără nimic ales, sunteți în modul de alegere: faceți clic pe fiecare față de înclinat, apoi pe {{ui:Gata}}.
2. Setați **Unghi (°)**, **Planul neutru** (unde fețele își păstrează dimensiunea) și **Direcția de tragere** (implicit normala planului neutru).

Un unghi pozitiv înclină fața spre interior de-a lungul tragerii și elimină material; unul negativ adaugă. Planul neutru începe ca planul de sus. În această versiune doar fețele plane pot fi înclinate: un cilindru, un con sau o față liberă afișează „Înclinare: în această versiune doar fețe plane (nucleul de plasă le construiește).” Cele patru laturi ale unui bloc de 100 × 100 × 50 înclinat cu 5° în jurul bazei sale devin un trunchi de piramidă de exact h/3·(a² + b² + ab), cu b = a − 2h·tan 5°.

## Mesaje

| Mesaj | Ce de făcut |
|---|---|
| „Planul profilului trebuie să treacă printr-un capăt al traseului …” | Mutați schița profilului la începutul (sau sfârșitul) traseului |
| „Traseul are un gol: curbele sale nu se unesc cap la cap …” | Uniți curbele traseului; în schițe separate, capetele lor trebuie să se întâlnească exact |
| „O secțiune de loft are nevoie de exact o buclă închisă” | Împărțiți schița sau eliminați bucla în plus |
| „… nu poate fi înclinată față de acest plan neutru …” | Fața este paralelă cu planul neutru sau nu îl intersectează |
| „Înclinare: în această versiune doar fețe plane (nucleul de plasă le construiește).” | O față aleasă este curbă. Eliminați-o; înclinați doar fețe plane |

:::note
Încă nerealizate: baleierile cu răsucire, baleierile cu pereți subțiri și de suprafață, ghidajele de loft și tangența la capăt, înclinarea pe cilindri, conuri și fețe libere.
:::
