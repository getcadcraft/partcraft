---
title: Groei 'n vorm uit ladings (Generatief)
summary: Kies die vlakke wat vasgehou en belas word, streke om te hou en om vry te hou, teikenvolumes en materiale, en genereer uitkomste: die styfste vorms wat vir elke volume gevind word, weer as soliede nagegaan, in 'n tabel vergelyk en as STL, STEP of 'n nuwe onderdeel afgelaai.
keywords: generatiewe ontwerp, topologie-optimering, SIMP, ligte gewig, rooster, organiese vorm, uitkomste, vergelyk, massa, volumefraksie, behou, hou-in, hindernis, hou-uit, ontwerpruimte, minimum lidgrootte, STL, 3D-druk
from: 5b91fa8e
---

Die Generatief-werkruimte verwyder materiaal wat die ladings nie nodig het nie. Jy sê waar die onderdeel vasgehou en belas word, wat moet bly en wat vry moet bly; PartCraft vind die styfste vorm vir elke teikenvolume (**topologie-optimering**), gaan elkeen weer as 'n soliede na met die werklike materiaal, en wys die uitkomste langs mekaar. Dit werk op die benoemde vlakke wat die maaskern aan die onderdeel gee (sien [Die maaskern](topic:solid-kernels)).

Kies **Generatief** in die **Werkruimte**-blokkie. Jou onderdeel word nie verander nie; die studie word binne die onderdeellêer gestoor.

## Stel 'n studie op

1. Druk **Nuwe studie** in die regterpaneel.
2. **Ruimte**: *Die onderdeel soos dit is* verwyder materiaal uit jou onderdeel; *'n Boks rondom die onderdeel* laat 'n vorm groei binne 'n boks wat groter as die onderdeel is, met die **Boksmarge**.
3. **Elementgrootte**: laat dit leeg vir 'n outomatiese grootte (ongeveer 8,000 kubusse), of tik een in. Fyner groottes gee fyner vorms en neem langer.
4. **Minimum lid**: lede dunner as ongeveer twee keer hierdie waarde vorm nie. Leeg beteken een en 'n half kubusse.
5. Merk een tot ses **Teikenvolumes** (die aandeel van die ontwerpruimte wat die vorm mag vul) en een tot vier **Materiale**. Elke volume word een keer gegenereer; elke materiaal word op daardie vorm nagegaan (die styfste vorm hang nie van die materiaal af nie, maar sy massa, spanning en veiligheidsfaktor wel).

## Doelwitte

- {{ui:Vas}}: klik die vlakke wat vasgehou word. 'n **Wrywinglose vlak** uit die paneel se **Voeg by**-lys hou 'n vlak net oor homself vas (gebruik dit vir simmetrievlakke).
- {{ui:Krag}}: klik die belaaide vlakke, tik dan die totale krag in en kies sy rigting in die paneel. **Druk** is in die **Voeg by**-lys.
- {{ui:Behou}}: klik vlakke waarvan die omgewing soliede moet bly, en stel hoe diep (**Hou soliede binne**) — byvoorbeeld rondom boutgate. Die vlakke wat jy vasmaak of belas, word altyd behou.
- {{ui:Hindernis}}: klik vlakke waarvan die omgewing leeg moet bly, en stel hoe ver (**Hou leeg binne**) — ruimte vir 'n as of 'n gereedskap.

Druk **Klaar gekies** of {{key:Esc}} nadat jy vlakke geklik het. Groen en rooi tinte wys die streke.

## Genereer en vergelyk

Druk {{ui:Genereer}}. Die paneel wys vordering en die tyd wat oorbly; **Stop** kanselleer. Elke uitkoms verskyn in die **Uitkomste**-tabel: teikenvolume, materiaal, **massa**, **grootste spanning**, **grootste verplasing** en **veiligheidsfaktor** (vloeigrens ÷ spanning), almal uit die herberekening van die voltooide vorm as soliede kubusse met die werklike materiaal.

Kies 'n uitkoms om dit in die aansig te sien (die onderdeel is verberg; merk **Wys die onderdeel deur dit heen** om albei te sien). Onder die tabel: hoeveel iterasies dit geneem het en of dit gestabiliseer het, sy styfheid as 'n soliede teenoor die optimeerder se eie syfer, en sy oppervlak.

## Gebruik 'n uitkoms

- **STL**: 'n geslote driehoekmaas, gereed vir 3D-druk.
- **STEP (gefasetteer)**: dieselfde oppervlak as 'n STEP-soliede gemaak van plat vlakke.
- **Nuwe onderdeellêer**: 'n PartCraft-onderdeel waarvan die enkele kenmerk die uitkoms as 'n ingevoerde soliede is. Maak dit oop om daarop te skets, gate te sny of dit in Simulasie na te gaan. Dit is gefasetteer (duisende plat vlakke), nie 'n wysigbare vorm nie.
- **Voeg by hierdie onderdeel** voeg die uitkoms by die onderdeel; dit is net aan vir 'n boksontwerpruimte (met die onderdeel self as die ruimte lê die uitkoms binne die onderdeel).

**Nuwe onderdeellêer** en **Voeg by hierdie onderdeel** is nog nie in hierdie weergawe gebou nie: die uitkoms word 'n ingevoerde soliede, wat 'n presiese kern benodig. Die STL- en STEP (gefasetteer)-aflaaie werk.

## Hoe ver om dit te vertrou

- Dit optimeer **styfheid** vir die gegewe volume. Daar is nog geen spanningsgrense en geen vervaardigingsreëls (oorhangende dele, freesrigtings, minimum gatgroottes) nie: gaan 'n gekose uitkoms na in [Simulasie](topic:simulation) en pas aan.
- Dun lede van een of twee kubusse breed is benaderings: gebruik 'n kleiner elementgrootte vir slanke onderdele.
- Die metode is SIMP met 'n digtheidsfilter, 'n drempelprojeksie en optimaliteitskriteria-opdaterings; die gerapporteerde spanning en defleksie is van die uitkoms as kubusse, wat eerlik maar growwe is by skerp hoeke.

## Verwant

- [Kontroleer spanning en defleksie (Simulasie)](topic:simulation)
- [Uitvoer vir druk, STEP en DXF](topic:export-files)
- [Wat nog nie gebou is nie](topic:not-built-yet)
