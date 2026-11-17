---
title: Toleransiestapels
summary: Kies 'n ketting van vlakke deur die onderdele van 'n samestelling en sien hoeveel die gaping aan sy einde kan wissel, slegste geval en RSS, met die afmetings wat die meeste saak maak eerste gerangskik.
keywords: toleransiestapel, stapel, toleransie-analise, toleransieketting, afmetingsketting, lus, gaping, speling, slegste geval, rss, wortel van die somkwadrate, statistiese toleransie, bydraers, sensitiwiteit, gd&t, algemene toleransie, iso 2768
from: cbdb3159
---

'n **Toleransiestapel** tel die afmetings langs 'n ketting deur verskeie onderdele op om te sien hoeveel 'n resultaat — gewoonlik 'n gaping — kan wissel wanneer elke onderdeel binne sy toleransies gemaak word.

## Kies die ketting

1. Open 'n samestelling en kies {{ui:Toleransiestapel}} in die Samestelling-groep. 'n Kaart open oor die aansig.
2. Kies waarlangs die ketting gemeet word: X, Y of Z van die samestelling, of {{ui:Die eerste vlak se normaal}}.
3. Druk {{ui:Kies die ketting}} en klik die vlakke waardeur die ketting loop, **in volgorde**: begin aan een kant van die gaping, gaan deur die onderdele, en eindig aan die ander kant van die gaping.
4. Druk {{ui:Klaar}} of Enter. Backspace neem die laaste klik terug; Esc kanselleer.

Twee klikke op dieselfde onderdeel maak daardie onderdeel se afmeting (sy afstand langs die ketting). 'n Klik op 'n ander onderdeel maak 'n **koppelvlak** tussen hulle, waar die onderdele ontmoet; dit het geen toleransie tensy jy een tik nie. Die skakels tel op of trek af volgens die rigting van die ketting, en hulle sluit die lus: die nominale gaping is wat die model wys.

Jy kan ook met die hand {{ui:Voeg 'n skakel by}} en sy nominale, sy toleransie en of dit optel (+) of aftrek (−) intik.

## Gee elke skakel sy toleransie

Elke skakel het 'n **boonste** en 'n **onderste** afwyking (byvoorbeeld +0.1 en −0.05). **Toleransie uit** vul hulle vanaf die onderdeel in:

- **Algemene toleransie**: die onderdeel se titelblok-veld Toleransie (sien [Tekening na PDF](topic:drawing-pdf)), wanneer dit ±0.1, +0.2/-0.1 of ISO 2768-f, -m, -c of -v lees (ISO 2768-1 lineêre toleransies, volgens die skakel se grootte). 'n Onderdeel se algemene toleransie word dadelik gebruik wanneer die ketting gekies word.
- **GD&T**: enige kenmerkbeheerraam op die onderdeel se tekening. Posisie-, profiel- en uitloopsones gee ± die helfte van die toleransie. 'n Oriëntasie- of vormtoleransie lê gewoonlik binne die grootte-toleransie wat reeds bestaan: voeg dit net by waar die ketting die beheerde oppervlak ontmoet. Met Ⓜ of Ⓛ word die sone geneem by sy gestelde grootte; die bonustoleransie tel nie.
- **Getik**: enige getalle wat jy intik.

## Lees die resultate

- **Gaping, nominaal** en, wanneer die toleransies ongelyk is, **Gaping, gemiddeld** — +0.2/−0 en +0/−0.1 skuif die middel van die reeks.
- **Slegste geval**: elke toleransie op sy limiet terselfdertyd. Die gaping kan nooit buite dit wees nie.
- **RSS** (wortel van die somkwadrate): elke toleransie geneem as drie standaardafwykings van 'n normale spreiding, bygetel as die vierkantswortel van die som van hul kwadrate. Die meeste samestellings val ruim binne die slegste geval; dit is die gewone skatting vir onderdele wat in hoeveelhede gemaak word.
- Gee **Gaping ten minste** en **Gaping ten meeste** om te sien of die slegste geval altyd binne bly, en hoeveel samestellings in 'n miljoen RSS buite verwag.
- Die **#**-kolom rangskik die skakels volgens hul **aandeel** van die RSS: verhard die eerste een om die grootste verskil te maak.

{{ui:Stoor CSV}} skryf die skakels, hul aandele en die resultate. Die stapels word in die samestellingslêer gestoor, en elke verandering is een stap vir {{key:Mod+Z}}.

:::note
'n Toleransiestapel is een rigting. Dit volg nie hoeke of draaie langs die ketting nie, en dit lees nie grootte-toleransies uit die skets nie: gee dié as getikte toleransies of deur die titelblok.
:::
