---
title: Salvare, redeschidere și continuarea lucrului
summary: Salvați piese și ansambluri pe calculatorul dumneavoastră, dați-le nume, redeschideți-le din buton, din tastă sau prin tragere, păstrați versiuni și evitați pierderea lucrului într-un tab de browser.
keywords: salvare, deschidere, redeschidere, încărcare, descărcare, versiuni, copie de rezervă, redenumire, nume de fișier, lucru pierdut, părăsire site, partcraft.json, partcraft-asm.json, piesă nouă
from: c18a5abc
---

PartCraft nu păstrează nimic între vizite. Piesa ta trăiește în tabul browserului până o salvezi ca fișier și revine când deschizi acel fișier.

## Salvarea unei piese

1. Dați piesei un nume: faceți clic pe spațiul gol din vizualizare, astfel încât să nu fie selectat nimic, apoi scrieți **Nume** în panoul din dreapta și apăsați {{key:Enter}}. Titlul istoricului se schimbă ca să corespundă.
2. Apăsați {{key:Mod+S}} sau alegeți {{ui:Salvare}}.
3. Browserul descarcă `<nume>.partcraft.json`. Bara de stare afișează „Saved Bracket.partcraft.json (the full history; reopen it here to keep editing).”

Dacă este deschisă o schiță, salvarea o închide mai întâi.

Fișierul conține fiecare schiță, relație, cotă și operație, plus operațiile suprimate, poziția barei de revenire, setările foii de desen și notele GD&T, precum și textul complet al oricărui corp solid STEP importat. Lista de anulare nu este salvată.

## Salvarea unui ansamblu

Într-un ansamblu, același {{ui:Salvare}} sau {{key:Mod+S}} descarcă `<nume ansamblu>.partcraft-asm.json`. Fiecare piesă este stocată în interiorul lui: nu aveți nevoie de fișierele separate ale pieselor ca să-l redeschideți.

Când editați o piesă din interiorul unui ansamblu, {{key:Mod+S}} salvează doar acea piesă, ca `.partcraft.json`. Alegeți mai întâi {{ui:Înapoi}}, apoi salvați, ca să salvați întregul ansamblu.

## Redeschiderea

Oricare dintre acestea:

- alegeți {{ui:Deschidere}} sau apăsați {{key:Mod+O}}, apoi selectați fișierul;
- trageți fișierul din {{pick:mac=Finder|windows=File Explorer|linux=managerul dumneavoastră de fișiere}} pe vizualizarea 3D („Trageți o piesă PartCraft ca s-o deschideți” apare).

PartCraft deosebește piesele de ansambluri după ce conțin, așa că ambele se deschid la fel. Un fișier `.step` sau `.stp` se deschide ca un corp solid importat: vezi [Deschiderea unui fișier STEP și construirea pe el](topic:import-step). Bara de stare confirmă: „Opened Bracket.partcraft.json: 7 features.” sau „Opened Hinge.partcraft-asm.json: 3 parts, 2 joints.”

Dacă piesa de pe ecran are modificări nesalvate, PartCraft întreabă mai întâi: {{ui:Anulare}}, {{ui:Renunțare la modificări}} sau {{ui:Salvare mai întâi}}.

:::warning
Închideți un ansamblu ({{ui:Închidere}}) înainte de a deschide un fișier de piesă. Dacă deschideți o piesă cât timp un ansamblu este pe ecran, piesa se încarcă în spatele ansamblului și o vedeți abia după ce închideți ansamblul. Deschiderea unui fișier de ansamblu înlocuiește fără să întrebe un ansamblu nesalvat, așa că salvați-l mai întâi.
:::

## Începerea de la capăt

{{ui:Nou}} începe o „Part1” goală. Întreabă mai întâi dacă există modificări nesalvate și închide un ansamblu deschis (întrebând dacă este nesalvat).

## Păstrarea versiunilor

Fiecare salvare este o nouă descărcare, așa că puteți păstra versiuni simplu, păstrând fișierele:

- Puneți o versiune sau o dată în nume înainte de salvare: „Bracket rev B”.
- Browserul poate adăuga „ (1)”, „ (2)” când există deja în dosarul de descărcări un fișier cu același nume. Cel mai nou este cel cu numărul cel mai mare sau verificați data din {{pick:mac=Finder|windows=File Explorer|linux=managerul dumneavoastră de fișiere}}.
- Mutați fișierele terminate din dosarul de descărcări în dosarul proiectului.

Vezi [Unde ajung fișierele tale](common:your-files) pentru unde ajung descărcările pe fiecare sistem.

## Nu pierdeți lucrul

- Salvați înainte de a închide tabul, de a reîncărca pagina sau de a lăsa calculatorul să intre lung în repaus. Browserul întreabă „Leave site?” dacă încercați să închideți cu modificări nesalvate, dar o prăbușire sau un laptop închis nu dau niciun avertisment.
- Ferestrele private sau incognito funcționează, dar nimic altceva nu diferă: fișierul rămâne singura copie.
- Salvarea în cloud și istoricul versiunilor nu sunt disponibile încă.
