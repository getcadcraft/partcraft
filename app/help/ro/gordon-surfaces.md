---
title: Suprafețe printr-o rețea de curbe (suprafață Gordon)
summary: Creați o singură suprafață netedă printr-o rețea de profile și ghidaje desenate în schițe sau luate din muchiile modelului, închideți-o într-un solid când profilele sunt închise și aflați ce este exact, ce este ajustat și mesajele când o rețea nu se potrivește.
keywords: tangentă, g1, tangență, continuitate tangentă, plan de oglindire, suprafață Gordon, rețea de curbe, suprafață de frontieră, suprafață de rețea, profile, ghidaje, curbe ghid, loft cu ghidaje, șine de ghidaj, înveliș, transfinit, coons, suprafață B-spline, suprafață liberă
from: ada3cb8b
---

:::note
**Încă nerealizat în această versiune.** Suprafața Gordon are nevoie de un nucleu geometric exact, pe care această versiune a PartCraft nu îl are: construiește fiecare piesă cu nucleul de plasă. [Ce este încă nerealizat](topic:not-built-yet) spune ce să faceți în loc. Restul paginii o descrie așa cum funcționează cu un nucleu exact.
:::

O **suprafață Gordon** este o singură suprafață care trece prin fiecare curbă a unei rețele: un set de **profile** care merg într-o direcție și un set de **ghidaje** care merg în cealaltă, încrucișându-se ca firele unei plase. Așa modelați o carenă, un aripior sau un mâner dintr-un număr mic de curbe de secțiune pe care le controlați direct. Are nevoie de **nucleul exact** (vezi [Nucleul de plasă](topic:solid-kernels)).

## Desenarea rețelei

1. Desenați **profilele**: două sau mai multe curbe una lângă alta, de exemplu secțiuni pe plane paralele. Liniile, arcele, cercurile și splinele funcționează toate, iar un lanț de curbe unite cap la cap contează ca o singură curbă.
2. Desenați **ghidajele**: două sau mai multe curbe care trec peste profile. Fiecare ghidaj trebuie să traverseze fiecare profil o dată, iar fiecare profil fiecare ghidaj o dată.
3. Faceți ca curbele să se întâlnească cu adevărat. Desenați schița unui ghidaj astfel încât curba lui să treacă prin punctele profilelor (agățați de punctele proiectate sau scrieți coordonatele). Rețeaua acceptă goluri de până la **Toleranța** (0.01 mm la început).

O schiță poate conține mai multe curbe: fiecare lanț separat din ea este propria lui curbă. Astfel puteți desena toate ghidajele într-o singură schiță, de exemplu pe planul de sus.

## Realizarea suprafeței

1. Alegeți {{ui:Mai multe}} din grupul Operații, apoi {{ui:Suprafață Gordon}}.
2. PartCraft ia schițele pe care nu le folosește nimeni încă: cele din plane paralele cu primul devin **profile**, celelalte **ghidaje**. Verificați lista din dreapta și setați fiecare schiță la **Profile**, **Ghidaje** sau **Nefolosită**.
3. Ca să folosiți muchiile piesei, faceți clic pe **Alegeți muchii ca profile** (sau **ca ghidaje**), faceți clic pe muchii în vedere, apoi apăsați {{key:Esc}}.

Rezultatul este un **corp de suprafață**. {{ui:Îngroșare}} îl transformă într-un solid, {{ui:Cusătură}} îl coase de alte suprafețe, iar {{ui:Tăiere suprafață}} îl taie.

### Închiderea într-un solid

Când profilele sunt curbe închise (cercuri, spline închise, lanțuri închise) și primul și ultimul profil se află fiecare plat într-un plan, bifați **Închidere într-un solid**. Capetele se acoperă cu fețe plane, iar forma închisă se unește, taie, intersectează sau devine un corp nou, ca orice altă operație. Așa faceți un loft care urmează curbe ghid. Același lucru funcționează și cu ghidaje închise.

## Tangentă la un plan de-a lungul unei muchii

O suprafață Gordon trece prin curbele sale, dar singură nu se potrivește cu panta a ceea ce întâlnește. Ca să o faceți să plece dintr-o muchie **tangentă** la un plan (G1), cum ar fi un plan de oglindire, ca exemplarul oglindit să se unească fără îndoitură, sau o față plană din care crește:

1. Selectați operația Suprafață Gordon. Sub **Tangentă la**, alegeți un plan din {{ui:Adăugare plan…}} (Frontal, Sus, Dreapta sau un plan de referință) sau alegeți o față plană în vedere și apăsați {{ui:Adăugare față plană aleasă}}.
2. PartCraft găsește curba de frontieră a rețelei care se află în acel plan, iar suprafața pleacă tangentă la plan.

Dacă un plan conține două curbe de frontieră (o podea sub ambele capete), adăugați-l de două ori: fiecare exemplar ia următoarea curbă. Până la patru planuri, câte unul pe muchie.

Raportul spune de-a lungul cărei curbe a făcut fiecare plan tangent și cel mai abrupt unghi pe care suprafața îl întâlnea cu acel plan înainte. Ghidajele care deja pleacă tangent de la curbă față de plan sunt urmate exact. Ghidajele care se înalță departe de ea sunt încovoiate într-o bandă îngustă lângă muchie, iar cifra „urmează fiecare curbă în” din raport spune cu cât: desenați ghidajele care pleacă plat din muchie pentru o potrivire exactă.

## Ce este exact și ce este ajustat

Panoul spune care dintre acestea se aplică și cât de mult se abate suprafața de la curbe.

- **Exact**: când fiecare curbă este polinomială (linii, spline și lanțuri de ele) și ghidajele traversează toate profilele la aceiași parametri, suprafața este exact suprafața Gordon a acelor curbe. O rețea de curbe izoparametrice tăiată dintr-o suprafață bicubică redă acea suprafață, iar patru linii drepte dau un petec plan sau răsucit (bilinear).
- **Ajustat**: arcele, cercurile și muchiile piesei nu sunt polinomiale, iar curbele care se intersectează la parametri diferiți trebuie resincronizate ca intersecțiile să se alinieze. Aceste curbe sunt ajustate cu B-spline cubice în limita unei zece-milionimi din dimensiunea rețelei (circa 0.00001 mm pentru o piesă de 100 mm). Un petec cilindric făcut din arce și linii rămâne în 0.00001 mm față de cilindrul real.

Între curbe, suprafața este ce dă metoda: profilele îmbinate pe direcție, plus ghidajele îmbinate, minus îmbinarea punctelor lor de intersecție. Este netedă peste tot, cu excepția locurilor în care o curbă are un colț ascuțit. Acolo unde două suprafețe Gordon împart o curbă de frontieră, se întâlnesc muchie la muchie (G0), nu tangent.

## Când o rețea nu se potrivește

| Mesaj | Ce faceți |
|---|---|
| „… nu se întâlnesc: trec la 0.4 mm distanță” | Faceți acel profil și ghidaj să se intersecteze, sau măriți **Toleranța** |
| „… se întâlnește … de 2 ori” | Un ghidaj poate traversa fiecare profil o singură dată: împărțiți o curbă care face buclă sau folosiți mai puține profile |
| „… în altă ordine” sau „se îndoaie peste ea însăși” | Două ghidaje se intersectează (sau două profile). Familiile trebuie să meargă una lângă alta |
| „cel puțin două profile și două ghidaje” | Adăugați curbe sau setați mai multe schițe la Profile sau Ghidaje |
| „amestecă curbe deschise și închise” | Faceți toate profilele deschise sau pe toate închise (la fel pentru ghidaje) |
| „Un capăt … nu este plat, deci nu poate fi acoperit” | Desenați primul și ultimul profil închis, fiecare într-un plan, sau lăsați **Închidere într-un solid** dezactivată |

## Limite

- O față B-spline pe rețea: fără tangență G1 sau G2 cu suprafețele vecine.
- Cusătura unei rețele închise, la primul ghidaj, este unită muchie la muchie, dar nu tangent.
- Operația Loft în sine nu are șine de ghidaj; folosiți în schimb o suprafață Gordon închisă într-un solid.
- Curbele foarte sinuoase sau intersecțiile foarte neuniform distanțate pe o curbă în raport cu alta pot cere prea multe puncte ca să se ajusteze; operația o spune atunci.
