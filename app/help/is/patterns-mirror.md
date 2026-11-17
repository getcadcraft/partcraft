---
title: Mynstur og speglun eiginleika
summary: Endurtaktu eiginleika í röð með {{ui:Línulegt}}, snúðu þeim um ás með {{ui:Hringlaga}} og afritaðu eiginleika eða allan hlutinn yfir plan með {{ui:Spegling}}.
keywords: mynstur, línulegt mynstur, hringlaga mynstur, skautafylki, fylki, spegling, samhverfa, afrita eiginleika, boltahringur, upphaf, spegla hlut
from: 702e9edb
---

Mynstur og speglanir afrita eiginleika sem þú hefur þegar búið til. Afritin eru hluti af sögunni: breytir þú upprunalega eiginleikanum, fylgja afritin á eftir.

Það sem er afritað er það sem eiginleikinn gerir: upphækkunarmynstur bætir við efni, en úrtaks- eða gatamynstur fjarlægir það. Mynstur má mynstra og spegla aftur. Innflutt STEP-rúmtak má líka afrita; ávalar brúnir, skábrúnir og skeljar ekki.

## Línulegt mynstur

1. Veldu eiginleikann sem á að afrita í sögunni (til dæmis Gat eða Úrtak). Ef ekkert er valið er síðasti fasti eiginleikinn notaður.
2. Veldu {{ui:Línulegt}}. Þrjú afrit birtast í 20 mm fjarlægð hvert frá öðru eftir X.
3. Í hægra spjaldinu stillir þú:

| Stilling | Hvað hún gerir | Sjálfgefið |
|---|---|---|
| **Eiginleikar til að afrita** | Hakaðu við alla eiginleika sem á að afrita. Aðeins eiginleikar fyrir ofan mynstrið eru taldir upp | Valinn eiginleiki |
| **Stefna** | X-ás, Y-ás, Z-ás, lína eða {{ui:Miðlína}} úr einhverri fyrri skissu, ás snúnings eða valin brún | X-ás |
| **Bil (mm)** | Fjarlægð milli nágranna | 20 |
| **Fjöldi** | Heildarfjöldi, **þar með talið upprunalega** (1 til 1000) | 3 |
| **Snúa stefnu** | Afritin fara hina leiðina | Slökkt |

### Nota brún sem stefnu

1. Smelltu á beina brún hlutarins í myndinni. Hægra spjaldið segir **Brún** og sýnir lengd hennar.
2. Veldu {{ui:Línulegt}}: mynstrið liggur þá eftir þeirri brún.

Eða veldu mynstrið, veldu brún og veldu „Valin brún (notar þá brún sem var valin núna)“ í **Stefna**. Valin brún er föst í rúminu og fylgir ekki síðari breytingum. Skissulína fylgir skissu sinni.

## Hringlaga mynstur

1. Veldu eiginleikann sem á að afrita (til dæmis eitt gat nálægt brún disks).
2. Veldu {{ui:Hringlaga}}. Sex afrit birtast jafnt dreifð allan hringinn.
3. Stilltu:

| Stilling | Hvað hún gerir | Sjálfgefið |
|---|---|---|
| **Eiginleikar til að afrita** | Eins og fyrir línulegt mynstur | Valinn eiginleiki |
| **Ás** | X-, Y- eða Z-ás, skissulína, ás snúnings eða valin brún | Ás síðasta snúnings ef hann er til, annars Y-ás |
| **Horn (°)** | 360 dreifir afritunum jafnt allan hringinn. Minna dreifir þeim yfir það horn, það fyrsta og síðasta við endana | 360 |
| **Fjöldi** | Heildarfjöldi, þar með talið upprunalega | 6 |
| **Snúa stefnu** | Snýr hina leiðina | Slökkt |

Heimsásarnir fara í gegnum uppruna hnitakerfisins. Fyrir disk sem er ekki miðjaður á upprunanum notar þú miðlínu úr skissu eða ás úr snúningi.

### Dæmi: átta boltagöt á flans

1. Snúðu flansinum (sjá [Snúningur á rennds hluta](topic:revolve)) um Y-ásinn.
2. Skissaðu á flata efri flöt flansins, settu einn punkt á boltahringinn og búðu til Gat.
3. Með Gatinu valið, veldu {{ui:Hringlaga}}. Ásinn er þegar „Axis of Revolve1“.
4. Stilltu **Fjöldi** á `8`.

## Spegling

1. Veldu eiginleikann sem á að spegla í sögunni, eða veldu ekkert til að spegla **allan hlutinn eins og hann er búinn til hingað til**.
2. Veldu {{ui:Spegling}}. Speglunin fer yfir **Hægra plan**.

Til að spegla allan hlutinn yfir flöt á hlutanum smellir þú fyrst á þann flata flöt og velur síðan {{ui:Spegling}}. (Að smella á flöt hreinsar valið í sögunni, þannig að þetta speglar alltaf allan hlutinn.)

Stillingar í hægra spjaldinu:

- **Spegling**: hakaðu við **Allur hluturinn (eins og hann er búinn til hingað til)**, eða afhakaðu og hakaðu við þá eiginleika sem á að afrita.
- **Speglunarplan**: Framplan, Efriplan, Hægra plan, flöturinn sem það notar núna („Flötur á Extrude1“ eða „Fast plan“), eða „Flöturinn sem var valinn núna“. Til að spegla valda eiginleika yfir flöt: veldu Spegling í sögunni, smelltu á flötinn í myndinni og veldu „Flöturinn sem var valinn núna“.

Að spegla allan hlutinn yfir flöt tvöfaldar hlutinn, til dæmis fer hálf festing í heila.

## Skilaboð

- „Byggðu eiginleika til að afrita fyrst.“ eða „Byggðu fast rúmtak fyrst.“ Ekkert fast rúmtak er enn til að afrita.
- „Veldu eiginleikana sem á að afrita.“ Allir reitir **Eiginleikar til að afrita** eru hreinsaðir.
- „Extrude2 hefur ekkert fast rúmtak til að afrita.“ Sá eiginleiki mistókst eða er bældur.
- „Fillet1 breytir brúnum eða veggjum hlutarins; ekki er hægt að afrita hann. Afritaðu eiginleikana sem búa til föst rúmtök (útdrætti, snúninga, göt, innflutning).“ Ávalar brúnir, skábrúnir og skeljar er ekki hægt að mynstra eða spegla; mynstraðu fyrst og settu ávöl brún síðan.
- „Það er enginn hlutur til að spegla ennþá.“

:::note
Ekki er hægt að sleppa afritum í mynstri eitt og eitt, og mynstur getur ekki fylgt skissuferli. Mynstur og speglanir í skissum eru ekki byggð enn: teiknaðu endurtekna skissurúmfræði með hendi eða með **Bæta við eftir hnitum**.
:::
