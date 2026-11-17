---
title: Folosirea PartCraft cu un asistent AI
summary: Lăsați asistentul AI sau scriptul propriu să lucreze cu piesa deschisă: să citească funcțiile, parametrii și masa ei, să schimbe un parametru și să reconstruiască, să ruleze un script, să exporte și să salveze. Dezactivat până îl porniți.
keywords: ai, asistent, agent, mcp, model context protocol, script, automatizare, parametri, proprietăți de masă, stl, step, 3mf, permisiuni, deconectare, activitate, dosare
from: e66d3470
---

## Ce veți învăța

Cum lăsați un asistent AI (sau un script propriu) să privească piesa deschisă, să îi schimbe parametrii, să ruleze un script și să o exporte, și cum hotărâți ce are voie să atingă.

PartCraft **nu are AI propriu** și nu trimite nimic nicăieri. Asistentul se aduce separat: orice program care vorbește Model Context Protocol (MCP). PartCraft îi oferă doar unelte, iar alegerea lor se face din setări.

## Pornirea

1. Deschideți {{ui:Setări}} (roata din bara aplicației sau {{key:Mod+,}}) și mergeți la fila {{ui:PartCraft}}.
2. Sub {{ui:Asistenți}}, bifați **Permiteți asistenților AI și scripturilor să folosească PartCraft**. Este dezactivată până o bifați.
3. Alegeți ce are voie să facă. **Citire** este bifată implicit; bifați celelalte doar când sunt necesare.
4. Ca să permiteți exportul și salvarea într-un dosar, alegeți {{ui:Adăugare dosar…}} sub **Dosare pe care le poate folosi** și selectați dosarul în caseta de dialog din Studio.

Asistenții se conectează prin **CadCraft Studio** de pe calculator: Studio afișează adresa și jetonul (token) de lipit în asistent. O filă de browser nu poate deschide o conexiune pentru un asistent.

## Ce poate cere un asistent

| Unealtă | Permisiune | Ce face |
|---|---|---|
| `part_describe`, `features_list` | Citire | Funcțiile în ordine, cu ce s-a construit și ce a eșuat, materialul, volumul și dimensiunea solidului |
| `params_list` | Citire | Parametrii și fiecare număr pe care o ecuație îl poate comanda, cu valorile lor |
| `mass_properties` | Citire | Volum, arie, centrul de masă, inerția față de el; masa, când piesa are un material |
| `param_set` | Editare | Setează un parametru sau numărul unei funcții și reconstruiește. Un pas pe care îl puteți anula |
| `script_run` | Editare | Rulează un script CraftScript, Lua sau Python, ca în spațiul de lucru {{ui:Script}}: izolat, fără fișiere și fără rețea. Piesa nu se schimbă |
| `part_export` | Export | STL, 3MF, STEP sau OpenUSD (.usdz, .usda, .usdc), așa cum le scriu {{ui:File}} › {{ui:Export}} |
| `link_push` | Editare | Actualizează un model legat dintr-un alt program (vezi [Păstrarea unui model .3dm activ](topic:live-3dm-link)) |
| `link_status` | Citire | Spune dacă un model legat mai există și când s-a actualizat ultima dată |
| `part_save` | Salvare | {{ui:Salvare}} propriu al PartCraft |
| `illustrate_export` | Export | Un manual din spațiul de lucru {{ui:Illustrate}} ca PDF sau SVG (desene de linii ale vederilor), ca fișier 3D interactiv, sau instrucțiunile lui ca PDF ori pagină web, așa cum le scriu meniurile {{ui:Export}} și {{ui:Instrucțiuni}} ale spațiului de lucru ([Manuale](topic:illustrate)) |

:::note
Această versiune folosește nucleul mesh: volumele vin din triunghiuri (cu puțin sub un solid curb real), iar STEP este scris cu fațete, cu triunghiuri în loc de suprafețe exacte.
:::

## Rămâneți în control

- **Fiecare modificare este un singur pas de anulare**, etichetat pentru asistent, de exemplu „Asistent: setează l = 45”. Apăsați {{key:Mod+Z}} ca să o anulați.
- **Știți când este conectat unul.** Un buton din bara aplicației numește asistentul cât timp este conectat. Faceți clic pe el ca să vedeți ce poate face sau ca să apăsați **Deconectare**.
- **Activitate.** {{ui:Setări}} › {{ui:PartCraft}} › {{ui:Asistenți}} › {{ui:Activitate}} listează fiecare apel; {{ui:Salvarea jurnalului}} păstrează o copie.
- **Dosare.** Citește și scrie fișiere doar în dosarele adăugate; {{ui:Eliminare}} scoate un dosar imediat.

## Fără deschiderea PartCraft

Serverul de fișiere CadCraft pentru asistenți (`npx @getcadcraft/mcp`) și linia de comandă `cadcraft` deschid fișiere `.partcraft.json` cu codul propriu al PartCraft și cu nucleul mesh, fără fereastră: aceleași unelte de citire, setarea parametrilor, scripturi CraftScript, exporturi (și OpenUSD) și salvare. `cadcraft convert bracket.partcraft.json bracket.stl` construiește o piesă și o scrie din linia de comandă. Manualele (`.partcraft-manual.json`) se exportă și ele acolo: `illustrate_export` sau `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (adăugați `--instructions` pentru instrucțiuni).

## Dacă ceva nu funcționează

- **„necesită permisiunea de editare”:** bifați **Editare** sub {{ui:Asistenți}}, apoi cereți din nou.
- **„controlat de ecuație”:** acel număr urmează un parametru; cereți asistentului să seteze parametrul.
- **Modificarea a fost greșită:** apăsați {{key:Mod+Z}}.

## Vezi și

- [Rețete pentru asistenții AI](common:assistants-recipes): exemple lucrate, fiecare cu uneltele pe care le apelează.
