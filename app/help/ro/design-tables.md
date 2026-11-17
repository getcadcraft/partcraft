---
title: Configurații și tabele de proiectare
summary: Păstrați mai multe dimensiuni și versiuni ale unei piese ca configurații numite, salvate în fișierul piesei, cu operațiile pornite sau oprite în fiecare; comutați între ele dintr-un clic, aduceți-le sau scoateți-le ca tabel de proiectare CSV sau construiți-le pe toate din linia de comandă.
keywords: tabel de proiectare, configurații, configurație, dimensiuni, familie de piese, csv, foaie de calcul, variante, acționat de tabel, suprimare, suprimat, oprire operație, opțiuni, cu sau fără, configurator
from: 17249afb
---

O **configurație** este o dimensiune a piesei: un set numit de valori pentru parametrii săi. Piesa își păstrează configurațiile în propriul fișier, deci ele călătoresc odată cu ea. Un **tabel de proiectare** este același lucru, ca fișier CSV, cu un rând pentru fiecare configurație.

Configurațiile setează **parametri**, deci adăugați-i mai întâi (vezi [Conducerea unei piese cu parametri](topic:parameters)). O configurație stochează parametrii care sunt numere simple; parametrii calculați din alții (precum `area = w * d`) urmează de la sine.

## Salvarea unei configurații

1. În fila {{ui:Parametri}}, setați parametrii pentru o dimensiune a piesei.
2. Sub **Configurații**, tastați un nume (de exemplu `Mare`) și apăsați {{ui:Salvare valori curente}} sau {{key:Enter}}.

Configurația nouă este marcată **activă**. Dacă un parametru se modifică după aceea, ea scrie **activă, modificată de atunci**, ca să se vadă că piesa nu mai corespunde ei.

## Comutarea, actualizarea, redenumirea, ștergerea

- {{ui:Aplicare}} setează parametrii la valorile acelei configurații și reconstruiește piesa.
- {{ui:Actualizare}} salvează valorile curente în acea configurație.
- Ca să redenumiți una, tastați noul nume în caseta ei și apăsați {{key:Enter}}.
- {{ui:Ștergere}} elimină configurația. Parametrii își păstrează valorile.

Fiecare dintre acestea este un singur pas: {{key:Mod+Z}} revine. Dacă se redenumește un parametru, fiecare configurație urmează noul nume; dacă se șterge un parametru, acesta dispare din configurații.

## Pornirea și oprirea operațiilor într-o configurație

O configurație păstrează și operațiile oprite, astfel încât o piesă poate avea versiuni **cu** și **fără** ceva: găuri de montaj, o șanfrenare, o proeminență.

1. Opriți operația: faceți clic pe ea în istoric, apoi pe {{ui:Suprimare}} din {{ui:Proprietăți}}.
2. Salvați configurația ca de obicei, de exemplu `Fără găuri`. Rândul ei listează ce oprește.
3. Porniți din nou operația ({{ui:Anulare suprimare}}) și salvați altă configurație, de exemplu `Cu găuri`.

Odată ce o configurație oprește o operație, aplicarea unei configurații oprește operațiile ei și **pornește toate celelalte operații**, împreună cu valorile parametrilor, într-un singur pas. O configurație salvată înainte ca operațiile să fie oprite în vreuna dintre ele se consideră „totul pornit”. {{ui:Actualizare}} salvează operațiile așa cum sunt acum, cu valorile.

O piesă ale cărei configurații opresc operații este salvată ca o versiune mai nouă de fișier: un PartCraft mai vechi spune că fișierul este dintr-o versiune mai nouă, în loc să-l deschidă fără ele.

:::note
Tabelul de proiectare CSV transportă doar valorile parametrilor. Importul unui tabel peste o configurație îi schimbă valorile și păstrează operațiile pe care le oprește; `--table` din linia de comandă construiește doar valorile.
:::

Fișierul piesei se salvează cu configurațiile și cu cea care era activă. Piesa se deschide cu valorile cu care a fost salvată.

## Aducerea sau scoaterea unui tabel de proiectare

Un tabel de proiectare este un fișier CSV cu o coloană pentru fiecare parametru și un rând pentru fiecare configurație:

```
name,width,thick,bolt
mic,100,6,6.6
mediu,140,8,8.5
mare,200,12,13
```

Prima coloană se poate numi `name`, `config` sau `configuration`; fiecare altă coloană trebuie să fie numele unui parametru al piesei. Celulele sunt numere, cu unități dacă doriți (`8in`). O celulă goală lasă acel parametru afară din rând.

- {{ui:Import CSV}} adaugă fiecare rând ca o configurație. Un rând cu numele unei configurații existente o înlocuiește. Importul este un singur pas.
- {{ui:Export CSV}} scrie configurațiile afară. Dacă nu există încă niciuna, scrie un rând cu valorile curente, ca punct de plecare pentru o foaie de calcul.

Un nume de configurație pe care o foaie de calcul l-ar citi ca formulă (care începe cu `=`, `+`, `-` sau `@`) se scrie cu un `'` în față.

## Toate dimensiunile odată

{{ui:Pachet de variante…}} de sub **Configurații** construiește fiecare configurație, sau câteva alese, ca STEP, IFC, DWG și o previzualizare, într-un singur zip, cu un tabel al parametrilor lor: vezi [Crearea unui pachet de variante din configurații](topic:variant-pack).

Instrumentul din linia de comandă construiește câte un fișier pentru fiecare rând dintr-un tabel de proiectare CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exportați întâi configurațiile ca CSV, apoi transmiteți fișierul cu `--table`. Vezi [Scripturi și linia de comandă](topic:scripts-and-cli). O piesă salvată ca script își păstrează configurațiile pe un rând `configs json …`.
