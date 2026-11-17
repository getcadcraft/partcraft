---
title: Taste și mouse
summary: Fiecare scurtătură de tastatură și fiecare acțiune de mouse din PartCraft, grupate după locul unde funcționează: peste tot, copiere și lipire, pe piesă, în vederea 3D, într-o schiță, în istoric și într-un ansamblu.
keywords: tastatură, scurtături, taste rapide, taste, mouse, orbitare, rotire, pan, zoom, roată, clic dreapta, anulare, refacere, salvare, deschidere, esc, ștergere, alt săgeată, copiere, lipire, decupare, duplicare, selectare totală, buton din mijloc
from: 3a59c3a3
---

Tastele nu fac nimic cât timp scrieți într-o casetă dintr-un panou, cu excepția {{key:Mod+S}} și {{key:Mod+O}}, care funcționează mereu. Tastele cu litere funcționează fără modificator.

Note generale despre taste în browser și pe tastaturile fără taste de funcție: [Taste, mouse-uri și trackpad-uri](common:keys).

## Peste tot

| Tastă | Acțiune |
|---|---|
| {{key:Mod+S}} | Salvează piesa (într-un ansamblu: ansamblul). Închide mai întâi o schiță deschisă |
| {{key:Mod+O}} | Deschide un fișier de piesă sau de ansamblu (întreabă mai întâi dacă există modificări nesalvate) |
| {{key:Mod+Z}} | {{ui:Anulare}} |
| {{key:Mod+Y}} sau {{key:Mod+Shift+Z}} | {{ui:Refacere}} |
| {{key:F1}} | Deschide sau închide acest ajutor (la fel ca {{ui:Ajutor}} din bara aplicației). {{key:Esc}} îl închide și el. Pe multe laptopuri și tastaturi Mac, țineți apăsat Fn |
| {{key:Ctrl+Shift+F}} | Mod ecran: normal, ecran complet, ecran complet cu barele ascunse. Ctrl și pe Mac, nu ⌘ |
| {{key:Esc}} | Ieșire din ecranul complet (când este activ) |
| {{key:Mod+,}} | {{ui:Setări}}, inclusiv fila PartCraft (vezi [Setările PartCraft](topic:settings)) |

Într-o casetă numerică dintr-un panou, {{key:Mod+Z}} este anularea de text a browserului. În caseta numerică de deasupra unei cote dintr-o schiță, anulează în PartCraft.

## Copiere, lipire și duplicare

Acționează asupra a ceea ce lucrați: geometria selectată dintr-o schiță deschisă, operația selectată din istoric sau piesa selectată într-un ansamblu. Detalii în [Copiere, lipire și duplicare](topic:copy-paste).

| Tastă | Acțiune |
|---|---|
| {{key:Mod+C}} | {{ui:Copiere}} selecția |
| {{key:Mod+X}} | {{ui:Decupare}}: copiere, apoi ștergere |
| {{key:Mod+V}} | {{ui:Lipire}}. Într-o schiță, copia urmează cursorul: faceți clic acolo unde trebuie să ajungă |
| {{key:Mod+Shift+V}} | {{ui:Lipire în aceeași poziție}}: aceleași coordonate (într-un ansamblu, același loc) |
| {{key:Mod+D}} | {{ui:Duplicare}}: copiere și lipire într-un singur pas, fără a modifica clipboardul |
| {{key:Mod+A}} | {{ui:Selectare totală}} (într-o schiță) |
| {{key:Esc}} | Anularea selecției (și anularea unei lipiri care urmează cursorul) |

În caseta numerică, aceste taste copiază și lipesc text ca de obicei. Textul selectat dintr-un panou este copiat de browser.

## Pe piesă (fără schiță deschisă)

| Tastă | Acțiune |
|---|---|
| {{key:S}} | Schiță pe planul selectat sau pe fața plană selectată; dacă nu este ales nimic, alegeți locul făcând clic |
| {{key:F}} | Încadrează piesa în vedere |
| {{key:M}} | Măsurare, în fiecare spațiu de lucru și într-un ansamblu; {{key:Esc}} șterge alegerile, încă un {{key:Esc}} închide măsurarea (vezi [Măsurarea distanțelor, unghiurilor și masei](topic:measure)) |
| {{key:X}} | Vizualizare în secțiune activată sau dezactivată, în fiecare spațiu de lucru și într-un ansamblu; {{key:Esc}} o închide (vezi [Privire în interior cu o vizualizare în secțiune](topic:section-view)) |
| {{key:Delete}} | Șterge operația selectată (întreabă dacă o folosesc și alte operații) |
| {{key:0}} … {{key:9}}, {{key:.}} | Cu o operație selectată: tastați numărul ei principal (adâncimea unei extrudări, diametrul unei găuri, numărul de repetări al unui model, raza unei racordări …), apoi {{key:Enter}}. {{key:Esc}} păstrează valoarea veche |
| {{key:Backspace}} | Șterge operația selectată, dacă este selectată una |
| {{key:Esc}} | Oprește alegerea planului de schiță sau șterge selecția (inclusiv muchiile sau fețele alese cu {{key:Shift}}) |

## În vederea 3D

Faceți mai întâi clic în vedere, ca ea să aibă focalizarea tastaturii.

| Tastă | Acțiune |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Rotește vederea cu 15 grade |
| {{key:Shift+Left}} și celelalte săgeți | Pan |
| {{key:Plus}} sau {{key:=}} | Mărire (zoom) |
| {{key:Minus}} | Micșorare (zoom) |

| Mouse | Acțiune |
|---|---|
| Trageți cu butonul stâng | Rotește vederea (orbitare) |
| Trageți cu butonul drept sau cu cel din mijloc | Pan |
| {{key:Shift}}, {{key:Ctrl}} sau ⌘ ținut apăsat în timp ce trageți cu butonul stâng | Pan |
| Rotiți roata | Zoom la cursor (derularea în afară mărește) |
| Derulare cu două degete pe trackpad | Rotește vederea; cu {{key:Shift}}, pan. Ciupirea mărește. Se setează prin **Derulare** în [Setările PartCraft](topic:settings) |

Cu **Rotirea vederii: butonul din mijloc** în [Setările PartCraft](topic:settings), butonul din mijloc rotește vederea, {{key:Shift}} cu butonul din mijloc sau cu cel drept face pan, iar butonul stâng doar alege.
| Click | Alege o față (se evidențiază întreagă), o muchie sau un plan |
| {{key:Shift}}+clic pe o muchie sau pe o față | Adună mai multe muchii sau fețe |
| Clic pe spațiu gol | Anulează alegerea |

## Când alegeți muchii sau fețe pentru o racordare, un șanfren sau o scobire în coajă

| Tastă sau mouse | Acțiune |
|---|---|
| Clic pe o muchie sau pe o față | O adaugă sau, dacă este deja în listă, o scoate |
| {{key:Esc}} sau {{key:Enter}} | Încheie alegerea (la fel ca {{ui:Gata}}) |
| {{key:F}} | Încadrare |
| Săgeți, cu vederea focalizată | Rotire; cu {{key:Shift}}, pan |

## Pe foaia de desen

| Tastă | Acțiune |
|---|---|
| {{key:F}} | Încadrează foaia |
| {{key:Plus}} / {{key:Minus}} | Zoom (cu foaia focalizată) |
| {{key:Shift+Left}} și celelalte săgeți | Pan (cu foaia focalizată) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Deplasează simbolul GD&T selectat cu 1 mm |
| {{key:Delete}} sau {{key:Backspace}} | Șterge simbolul selectat |
| {{key:Esc}} | Oprește plasarea unui simbol; altfel, deselectează; altfel, revine la model |

| Mouse | Acțiune |
|---|---|
| Clic pe o vedere, cu Datum, Frame, Finish sau Detail alese | O plasează acolo (se fixează de cea mai apropiată linie) |
| Clic pe un simbol | Îl selectează |
| Trageți un simbol | Îl mută (indicația rămâne pe punctul ei) |
| Rotiți roata | Zoom la cursor |
| Trageți cu butonul drept sau cu cel din mijloc | Pan |

## Într-o schiță

| Tastă | Acțiune |
|---|---|
| {{key:L}} | Linie |
| {{key:R}} | Dreptunghi |
| {{key:C}} | Cerc |
| {{key:A}} | Arc (centru, început, sfârșit) |
| {{key:P}} | Punct |
| {{key:N}} | Linie de axă |
| {{key:F}} | Racordează un colț |
| {{key:D}} | Cotare |
| {{key:B}} | Spline (prin puncte) |
| {{key:T}} | {{ui:Tăiere}} |
| {{key:E}} | {{ui:Prelungire}} |
| {{key:O}} | Decalare ({{key:B}} în timpul decalării: ambele părți) |
| {{key:M}} | {{ui:Oglindire}} |
| {{key:S}} | Selectare |
| {{key:Q}} | Comută curbele selectate în construcție și înapoi |
| {{key:Enter}} | Încheie un lanț de linii sau un spline |
| {{key:Delete}} sau {{key:Backspace}} | Șterge selecția |
| {{key:Mod+A}} | Selectează tot ce este în schiță |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Copiază, decupează, lipește geometrie (lipirea urmează cursorul) |
| {{key:Mod+Shift+V}} | Lipește la aceleași coordonate |
| {{key:Mod+D}} | Duplică selecția și o plasează printr-un clic |
| {{key:Esc}} | Un pas înapoi: anulează caseta numerică sau o lipire, încheie lanțul de linii, revine la Selectare, șterge selecția, apoi închide schița |

| Mouse | Acțiune |
|---|---|
| Clic | Plasează puncte cu o unealtă de desen; selectează cu Selectare |
| {{key:Shift}}+clic | Adaugă la selecție sau scoate din ea ({{key:Ctrl}}+clic pe Windows și Linux, ⌘+clic pe Mac, fac același lucru) |
| Trageți pe spațiu gol (Selectare) | Fereastră: selectează tot ce este complet în interior |
| Trageți un punct, o linie sau muchia unui cerc (Selectare) | O mută; relațiile se păstrează |
| Trageți numărul unei cote (Selectare) | Mută eticheta |
| Dublu clic pe o cotă | Schimbă valoarea |
| Dublu clic sau clic dreapta în timp ce desenați linii | Încheie lanțul |
| Trageți cu butonul drept sau cu cel din mijloc | Pan |
| Rotiți roata | Zoom la cursor |

### În caseta numerică

| Tastă | Acțiune |
|---|---|
| {{key:Enter}} | Aplică valoarea |
| {{key:Esc}} | Închide fără modificare |

Un clic în altă parte aplică și valoarea.

## În lista istoricului

| Tastă | Acțiune |
|---|---|
| {{key:Tab}} | Ajunge la listă |
| {{key:Up}} / {{key:Down}} | Trece între rânduri |
| {{key:Enter}} sau {{key:Space}} | Selectează rândul |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Mută operația selectată în sus sau în jos, unde istoricul permite |
| {{key:F2}} | Schimbă numărul principal al operației din rândul ei; {{key:Enter}} îl fixează, {{key:Esc}} păstrează valoarea veche |

| Mouse | Acțiune |
|---|---|
| Clic | Selectează un plan sau o operație |
| Dublu clic pe o schiță | O deschide |
| Dublu clic pe numărul unei operații | Îl schimbă în rând |

## Într-un ansamblu

| Tastă | Acțiune |
|---|---|
| {{key:J}} | Începe o articulație: apoi faceți clic pe o față plană din fiecare din cele două piese |
| {{key:F}} | Încadrare |
| {{key:Esc}} | Anulează articulația începută sau șterge selecția |
| {{key:Delete}} | Elimină piesa sau articulația selectată |
| {{key:Backspace}} | Elimină piesa sau articulația selectată |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Anulare și refacere în lista proprie a ansamblului |
| {{key:Mod+D}} | Duplică piesa selectată (aceeași piesă, lângă celelalte) |
| {{key:Mod+C}}, apoi {{key:Mod+V}} sau {{key:Mod+Shift+V}} | Copiază o piesă și o lipește lângă celelalte sau în același loc |

Mouse în vedere: ca în vederea 3D de mai sus. Faceți clic pe o piesă ca s-o selectați. Faceți dublu clic pe o piesă din listă ca s-o editați.

## În spațiul de lucru Script

| Tastă | Acțiune |
|---|---|
| {{key:F5}} | Rulează scriptul (în editor, în panou sau în vedere) |
| {{key:Mod+Enter}} | Rulează liniile selectate, sau linia unde se află cursorul |
| {{key:Tab}} / {{key:Shift+Tab}} | Indentează / dezindentează liniile selectate. Pentru a ieși din editor cu tastatura, apăsați {{key:Esc}}, apoi {{key:Tab}} |
| {{key:Mod+/}} | Comentează liniile selectate sau le decomentează |
| {{key:Mod+F}} / {{key:Mod+H}} | Căutare / căutare și înlocuire în script; {{key:Enter}} sau {{key:F3}} trece la următoarea potrivire, {{key:Shift+Enter}} sau {{key:Shift+F3}} la cea anterioară, {{key:Esc}} închide |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Restrânge / desfășoară blocul în care se află cursorul (o funcție, if, for, while … end) |
| {{key:Mod+Space}} | Listează completările pentru numele pe care îl tastați (se deschide și după două litere); {{key:Up}} / {{key:Down}} aleg, {{key:Enter}} sau {{key:Tab}} preiau una, {{key:Esc}} închide |
| {{key:Enter}} în linia de sub consolă | Rulează doar acea instrucțiune; {{key:Up}} și {{key:Down}} aduc înapoi pe cele anterioare |
| {{key:F}} | Încadrează vederea la ce afișează scripturile |

Vezi [Scrierea și rularea scripturilor](topic:craftscript).

## Scurtături pe care le poate prelua browserul

- {{key:Mod+Y}} în Safari poate deschide istoricul: folosiți {{key:Mod+Shift+Z}} pentru refacere.
- {{key:Mod+D}} este tasta de marcaje a browserului: PartCraft o preia cât timp aplicația are focalizarea și o lasă în pace cât tastați într-o casetă.
- {{key:F11}} și {{key:Mod+Plus}} / {{key:Mod+Minus}} sunt ecranul complet și zoomul paginii din browser, nu cele ale PartCraft. Folosiți {{key:Ctrl+Shift+F}} pentru ecran complet și roata pentru model.
- Tastele de funcție de pe multe laptopuri și Mac-uri cer tasta Fn: apăsați Fn+{{key:F1}} pentru ajutor sau folosiți butonul {{ui:Ajutor}}.

Gesturi tactile și de trackpad: [Trackpad, atingere și ecrane mici](topic:trackpad-and-touch).

## Unde se află Mutare

{{ui:Mutare}} se află în meniul {{ui:Mai multe}} al grupului Operații, ca {{ui:Mutare corp}}, în caseta {{ui:Mutare}} în care tastați ΔX, ΔY și ΔZ, și ca săgeți {{ui:Trageți pentru a muta}} pe piesă.
