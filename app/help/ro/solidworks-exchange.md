---
title: Mutarea pieselor către și de la alți modelatori de piese
summary: Trimiteți o piesă către alt modelator de piese ca macro care o reconstruiește cu un arbore de operații activ. STEP-ul denumit și deschiderea listei de operații scrise de alt modelator nu sunt încă realizate în această versiune.
keywords: macro, nerealizat, swb, vba, arbore de operații, dus-întors, exportare macro, cadcraft-sw.json, STEP denumit, ap214, variabile globale, ecuații, piesă nativă
from: 97ca61da
---

PartCraft schimbă piese cu SolidWorks în ambele sensuri, fără un format de fișier pe care nimeni altcineva nu îl poate citi:

- **Trimitere:** o macro (`.swb`, text simplu) pe care SolidWorks o rulează pentru a construi piesa singură, operație cu operație, cu schițele, relațiile, cotele, variabilele globale și ecuațiile sale. Obțineți o piesă nativă cu un arbore de operații activ, nu un solid mort.
- **Întoarcere:** o macro pe care o rulați în SolidWorks scrie operațiile și ecuațiile piesei într-un fișier `.cadcraft-sw.json`. Deschiderea acelui fișier în PartCraft nu este încă realizată în această versiune (necesită un nucleu exact).

:::warning
Nimic din acestea nu a fost încă testat în SolidWorks. SolidWorks rulează doar pe Windows și cu licență, iar PartCraft nu a rulat niciodată aceste macro în el. Macro-urile au fost scrise din documentația API SolidWorks și verificate structural aici. Așteptați-vă să raportați probleme; jurnalul scris de macro arată ce pas a eșuat.
:::

PartCraft nu poate scrie un fișier `.sldprt`: acest format este închis. Macro-ul este modalitatea de a obține o piesă nativă.

## Trimiterea unei piese ca macro

1. Deschideți piesa.
2. Alegeți {{ui:Export}}, apoi {{ui:Macro pentru SolidWorks (.swb)}}. PartCraft descarcă `<part>.swb`; bara de stare spune că a fost „scrisă fără nucleul exact”.
3. O casetă de dialog spune câte operații, variabile globale și ecuații construiește macro-ul și enumeră tot ce lasă deoparte. Niciun STEP nu merge alături în această versiune: folosiți {{ui:Export}}, apoi {{ui:STEP (cu fațete, nucleu de plasă)}} dacă aveți nevoie de unul.
4. În SolidWorks, alegeți **Tools > Macro > Run**, selectați fișierul `.swb` și așteptați. Creează o piesă nouă din șablonul implicit de piesă, setează milimetrii și construiește fiecare operație.
5. La final, un mesaj spune câți pași au fost executați, câți au eșuat și câți au corespuns corpului din PartCraft. Jurnalul complet, `<part> macro log.txt`, este scris lângă macro.

Ce construiește macro-ul:

| PartCraft | În piesa nouă |
|---|---|
| Schiță pe planul Front, Top sau Right | O schiță pe acel plan, cu liniile, arcele, cercurile, punctele, relațiile și cotele sale (denumite ca în PartCraft, de exemplu `k7`) |
| Schiță pe o față | O schiță pe aceeași față, identificată printr-un punct de pe ea |
| Schiță pe un plan fix | Un plan de referință prin trei puncte, și schița pe el |
| Extrudare, tăiere (oarbă, prin tot, în planul median, două direcții, conicitate) | Extrudare de adaos sau extrudare de tăiere |
| Revoluție, tăiere prin revoluție | Revoluție în jurul aceleiași linii de axă |
| Gaură (simplă, cu umăr, cu teșitură, filetată) | Una sau două tăieri cu propriile schițe (o gaură filetată este cea pentru burghiul de filetat; fără filet) |
| Repetiție liniară și circulară, oglindire | Repetiție liniară, repetiție circulară, oglindire (operații sau corpul) |
| Racordare, șanfren, scobire în coajă | Racordare, șanfren și scobire în coajă pe aceleași muchii și fețe, identificate prin puncte |
| Parametri și ecuații | Variabile globale și ecuații pe cotele redenumite |
| Operații suprimate, bara de revenire | Suprimate în același mod; bara de revenire în același loc |

După fiecare operație solidă, macro-ul compară volumul și dimensiunea corpului cu cele din PartCraft. Când diferă, întoarce o dată direcția operației respective și verifică din nou; dacă nu este mai bine, o întoarce înapoi și scrie „Check” în jurnal.

### Ce rămâne în afară

Caseta de dialog și partea de sus a macro-ului enumeră tot ce nu este transferat, cu motivul. Azi, acestea sunt: corpurile solide importate (inserați STEP-ul în schimb), baleierile, lofturile, înclinările, axele și punctele de referință, condițiile de capăt „până la”, extrudarea doar a unor contururi și orice depinde de ele. Spline-urile devin curbe prin punctele lor. Această versiune nu are nucleu exact, astfel că schițele pe fețe și operațiile care aleg muchii sau fețe sunt și ele lăsate afară.

## Trimiterea unui STEP denumit

Încă nerealizat în această versiune: {{ui:STEP pentru SolidWorks (denumit, AP214)}} necesită un nucleu exact, iar alegerea lui afișează „STEP pentru SolidWorks: încă nerealizat. …”. Cu un nucleu exact, fișierul poartă numele piesei, milimetrii și culoarea piesei și stă cu Y în sus, așa cum arată SolidWorks piesele (exportul simplu {{ui:STEP AP214 (solid exact)}} are Z în sus). Literele cu accente își pierd accentele în nume, iar celelalte caractere din afara ASCII simplu devin `_`.

## Aducerea unei piese înapoi

Deschiderea fișierului în PartCraft (pasul 3) este încă nerealizată în această versiune: afișează „Deschiderea unui export SolidWorks: încă nerealizat. …”. Aplicația de desen CadCraft deschide în continuare fișierul și preia schițele sale.

1. Alegeți {{ui:Fișier}} > {{ui:Export}} > {{ui:Export macro pentru a aduce piese înapoi (.swb)}} pentru a descărca `CadCraftExport.swb` și puneți-l lângă piese.
2. În SolidWorks, deschideți piesa, alegeți **Tools > Macro > Run** și selectați `CadCraftExport.swb`. Scrie `<part>.cadcraft-sw.json` lângă piesă și nu schimbă nimic în ea.
3. În PartCraft, alegeți {{ui:Deschidere}} și selectați fișierul, sau trageți-l în vizualizarea 3D.
4. Cu un nucleu exact, PartCraft reconstruiește piesa operație cu operație și arată ce a făcut: de exemplu „5 din 5 operații preluate din SolidWorks (Flange.SLDPRT)”, fiecare operație pe care nu a putut-o prelua („Nepreluat: Sweep1 (Sweep).”) și dacă volumul corespunde celui scris de SolidWorks.
5. Salvați-o ca piesă PartCraft cu {{ui:Salvare}}.

Schițele ajung pe un plan de bază când se află pe unul, pe fața plană corespunzătoare a piesei când există una (astfel urmează modificările ulterioare) și pe un plan fix în celelalte cazuri. Muchiile și fețele racordărilor, șanfrenelor și scobirilor în coajă sunt găsite după puncte și păstrate ca referințe denumite. Variabilele globale devin parametri (numele cu spații primesc liniuțe de subliniere: „Bolt count” devine `Bolt_count`), iar ecuațiile devin ecuații pe aceleași cote. Nimic nu este ghicit: ceea ce nu are corespondent este enumerat.

Aplicația de desen CadCraft deschide același fișier și preia schițele sale.

:::note
Formatul este `cadcraft-sw-export` versiunea 1, JSON simplu, în milimetri și grade. Un fișier dintr-o macro mai nouă sau unul nevalid este refuzat, cu motivul.
:::
