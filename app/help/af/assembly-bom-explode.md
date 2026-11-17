---
title: Onderdeellys, ontplooide aansigte en onderdele met die hand beweeg
summary: Gee samestellingsonderdele 'n nommer, beskrywing en materiaal, lees en laai die materiaallys af, maak ontplooide aansigte met stappe of outomaties, beweeg onderdele wat nie verbind is nie met die hand, stel verbindingsperke, en voer die hele samestelling uit as STL, 3MF of 'n materiaallys.
keywords: bom, materiaallys, onderdeellys, onderdeelnommer, materiaal, digtheid, csv, ontplooide aansig, ontplooi, invou, spoorlyne, beweeg onderdeel, sleep, manipuleerder, skuif, draai, verbindingsperke, samestellinguitvoer, samestellingstap, samestellingstekening, ballonne
from: ebc9f6f3
---

Hierdie gereedskap is in die regterpaneel van 'n samestelling (sien [Bou 'n samestelling](topic:build-assembly)).

## Onderdeeleienskappe

Kies 'n onderdeel in die lys aan die linkerkant. Onder **Onderdeeleienskappe** stel:

- **Onderdeelnommer** (tot 40 karakters) en **Beskrywing** (tot 200).
- **Materiaal**: 'n algemene materiaal met sy digtheid, of **Pasgemaakte digtheid…** om een in g/cm³ te tik. Die paneel wys dan die onderdeel se massa.

Eienskappe behoort aan die onderdeel, so elke kopie daarvan deel hulle. Hulle word in die samestellinglêer gestoor.

## Materiaallys

Met niks gekies nie ({{key:Esc}}), wys die paneel die **Materiaallys**: een ry per onderdeel met sy itemnommer, hoeveelheid (hoeveel kopieë), onderdeelnommer, naam, materiaal en massa elk. Itemnommers volg die volgorde waarin die onderdele eers in die lys verskyn. Massas gebruik elke onderdeel se volume (van die gefasette soliede liggaam wat die maaskern bou, 'n bietjie laag op ronde onderdele) en sy materiaal. 'n Onderdeel sonder materiaal het geen massa nie, en dan is daar geen totaal nie.

{{ui:Laai CSV af}} stoor die lys as 'n CSV-lêer (ook **Uitvoer › Materiaallys (CSV)**). Dit maak oop in enige sigbladprogram. Teks wat met = of + begin, kry 'n voorste apostrof sodat 'n sigbladprogram dit nie as 'n formule uitvoer nie.

## Ontplooide aansigte

'n Ontplooide aansig trek die onderdele uitmekaar vir prente. Dit verander nooit die verbindings of waar die onderdele werklik is nie: stoor, botsingskontroles en uitvoere gebruik die werklike posisies.

1. Met niks gekies nie, kies {{ui:Nuwe aansig}} onder **Ontplooide aansigte**.
2. Onder **Voeg 'n stap by**, merk die onderdele wat die stap beweeg, kies 'n **Rigting** (+X … −Z, die normaal van 'n vlak wat jy klik, of **Sleep 'n pyl in die aansig**) en 'n **Afstand**, dan {{ui:Voeg stap by}}. Met **Sleep**, sleep die pyl en laat los: die stap neem die rigting en afstand wat jy gesleep het.
3. Voeg meer stappe by. Hulle speel een na die ander.
4. Sleep die skuifbalk tussen **Gemonteer** en **Ontplooi** om die aansig te animeer. Gestreepte spoorlyne loop van elke onderdeel se rusposisie na waar dit nou is.

{{ui:Outo (radiaal)}} beweeg elke onderdeel behalwe die vasgemaakte een weg van die samestelling se middelpunt. {{ui:Outo (verbindings)}} beweeg elke verbinde onderdeel (met alles wat onder dit verbind is) uit langs sy verbinding se vlaknormaal. Jy kan verskeie benoemde aansigte hou; kies een in **Aansig**, of **Gemonteer** om die onderdele terug te sit. Aansigte word in die samestellinglêer gestoor.

## Beweeg 'n onderdeel met die hand

Net 'n onderdeel sonder 'n verbinding met die vasgemaakte onderdeel beweeg met die hand (die vasgemaakte onderdeel is vas; verbindings plaas die res). Kies dit en onder **Beweeg met die hand**:

- Tik **ΔX, ΔY, ΔZ** en kies {{ui:Beweging}}, of kies 'n as en 'n **Hoek** en {{ui:Draai}} (om die onderdeel se middelpunt).
- {{ui:Sleep om te skuif}} wys pyltjies op die onderdeel: sleep 'n pyl om langs daardie as te beweeg, of 'n vierkant om in 'n vlak te beweeg. {{ui:Sleep om te draai}} wys ringe om dit te draai. Elke sleep is een ontdoen-stap. {{key:Esc}} versteek die pyltjies.

## Verbindingsperke

Kies 'n verbinding wat beweeg en onder **Perke**, merk **Hou … tussen perke** vir enige van sy waardes, stel dan sy **Minimum** en **Maksimum**. Elke waarde word binne sy eie perke gehou, sy skuifbalk dek net daardie reeks, en {{ui:Toets die beweging vir botsings}} vee net tussen hulle. 'n Silindriese verbinding kan sy hoek, sy verskuiwing of albei beperk. As jy die verbinding se tipe verander, val perke op waardes wat die nuwe tipe nie het nie weg.

## Voer die hele samestelling uit

In 'n samestelling skryf die **Uitvoer**-kieslys die hele samestelling met elke onderdeel waar dit geplaas is:

- **STEP AP242 / AP214** en **Tekening (PDF)** is nog nie in hierdie weergawe gebou nie: hulle benodig 'n presiese kern, so hulle is grys. Voer eerder elke onderdeel se STEP (presiese soliede liggaam) vanaf die onderdeel uit.
- **STL**: een maas van al die onderdele. **3MF**: elke onderdeel een keer, een keer per kopie geplaas.
- **Materiaallys (CSV)**.

## Beperkings

- Die samestellingstekening en die samestelling-STEP is nog nie in hierdie weergawe gebou nie (hulle benodig 'n presiese kern). Ontplooide aansigte is vir prente op die skerm.
