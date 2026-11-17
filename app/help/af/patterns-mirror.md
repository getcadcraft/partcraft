---
title: Patroon- en spieëlkenmerke
summary: Herhaal kenmerke in 'n ry met Lineêr, draai om 'n as met Sirkulêr, en kopieer kenmerke of die hele liggaam oor 'n vlak met Spieël.
keywords: patroon, lineêre patroon, sirkulêre patroon, polêre skikking, skikking, spieël, simmetries, kopieer kenmerke, boutsirkel, saad, spieël liggaam
from: 702e9edb
---

Patrone en spieëls kopieer kenmerke wat jy reeds gebou het. Die kopieë is deel van die geskiedenis: verander die oorspronklike en die kopieë volg.

Wat gekopieer word, is wat die kenmerk doen: 'n boss-patroon voeg materiaal by, 'n snit- of gatpatroon verwyder dit. Patrone kan weer gepatroon en gespieël word. 'n Ingevoerde STEP-soliede liggaam kan ook gekopieer word; afrondings, skuinskante en doppe kan nie.

## Lineêre patroon

1. Kies die kenmerk om te kopieer in die geskiedenis (byvoorbeeld 'n Gat of 'n Snit). Met niks gekies nie, word die laaste soliede kenmerk gebruik.
2. Kies {{ui:Lineêr}}. Drie kopieë verskyn 20 mm uitmekaar langs X.
3. Stel in die regterpaneel:

| Instelling | Wat dit doen | Verstek |
|---|---|---|
| **Kenmerke om te kopieer** | Merk elke kenmerk om te kopieer. Slegs kenmerke bo die patroon word gelys | Die gekose kenmerk |
| **Rigting** | X-as, Y-as, Z-as, 'n lyn of middellyn uit enige vorige skets, die as van 'n draai, of 'n gekose reguit kant | X-as |
| **Spasiëring (mm)** | Afstand tussen bure | 20 |
| **Telling** | Totale getal, **insluitend die oorspronklike** (1 tot 1000) | 3 |
| **Keer rigting om** | Kopieë gaan die ander kant toe | Af |

### Gebruik 'n kant as rigting

1. Klik op 'n reguit kant van die onderdeel in die aansig. Die regterpaneel sê **Kant** en wys die lengte daarvan.
2. Kies {{ui:Lineêr}}: die patroon loop langs daardie kant.

Of kies die patroon, kies 'n kant, en kies "Gekose kant (gebruik die een wat nou gekies is)" in **Rigting**. 'n Gekose kant is vas in die ruimte: dit volg nie latere veranderinge nie. 'n Skets-lyn volg sy skets.

## Sirkulêre patroon

1. Kies die kenmerk om te kopieer (byvoorbeeld een gat naby die rand van 'n skyf).
2. Kies {{ui:Sirkulêr}}. Ses kopieë verskyn gelyk verdeel heel rondom.
3. Stel:

| Instelling | Wat dit doen | Verstek |
|---|---|---|
| **Kenmerke om te kopieer** | Soos vir Lineêr | Die gekose kenmerk |
| **As** | X-, Y- of Z-as, 'n skets-lyn, die as van 'n draai, of 'n gekose kant | Die as van die laaste draai as daar een is, anders die Y-as |
| **Hoek (°)** | 360 versprei die kopieë gelyk rondom. Minder versprei hulle oor daardie hoek, eerste en laaste aan die eindes | 360 |
| **Telling** | Totale getal, insluitend die oorspronklike | 6 |
| **Keer rigting om** | Draai die ander kant toe | Af |

Die wêreldasse gaan deur die oorsprong. Vir 'n skyf wat nie op die oorsprong gesentreer is nie, gebruik 'n skets-middellyn of die as van 'n draai.

### Voorbeeld: die agt boutgate van 'n flens

1. Draai die flens (sien [Draai 'n gedraaide onderdeel](topic:revolve)) om die Y-as.
2. Skets op die flens se plat bokant, plaas een punt op die boutsirkel, en maak 'n Gat.
3. Met die Gat gekies, kies {{ui:Sirkulêr}}. Die as is reeds "Axis of Revolve1".
4. Stel **Telling** op `8`.

## Spieël

1. Kies die kenmerk om te spieël in die geskiedenis, of kies niks om **die hele liggaam soos tot nou gebou** te spieël.
2. Kies {{ui:Spieël}}. Dit spieël oor die **Regtervlak**.

Om die hele liggaam oor 'n oppervlak van die onderdeel te spieël, klik eers op daardie plat oppervlak, en kies dan {{ui:Spieël}}. (Klik op 'n oppervlak maak die geskiedenis-keuse skoon, so dit spieël altyd die hele liggaam.)

Instellings in die regterpaneel:

- **Spieël**: merk **Die hele liggaam (soos tot nou gebou)**, of ontmerk dit en merk die kenmerke om te kopieer.
- **Spieelvlak**: Voorvlak, Bovlak, Regtervlak, die oppervlak wat dit nou gebruik ("'n Oppervlak van Extrude1" of "'n Vaste vlak"), of "Die oppervlak wat nou gekies is". Om gekose kenmerke oor 'n oppervlak te spieël: kies die Spieël in die geskiedenis, klik die oppervlak in die aansig, en kies "Die oppervlak wat nou gekies is".

Om die hele liggaam oor 'n oppervlak te spieël verdubbel die onderdeel, byvoorbeeld 'n halwe beugel word 'n volle een.

## Boodskappe

- "Bou eers 'n kenmerk om te kopieer." of "Bou eers 'n soliede liggaam." Daar is nog niks soliede om te kopieer nie.
- "Kies die kenmerke om te kopieer." Elke **Kenmerke om te kopieer**-blokkie is leeggemaak.
- "Extrude2 het geen soliede om te kopieer nie." Daardie kenmerk het misluk of is onderdruk.
- "Fillet1 verander die kante of wande van die liggaam; dit kan nie gekopieer word nie. Kopieer die kenmerke wat soliede maak (uittrekkings, draaiings, gate, invoere)." Afrondings, skuinskante en doppe kan nie gepatroon of gespieël word nie; patroon eers, rond dan af.
- "Daar is nog geen liggaam om te spieël nie."

:::note
Patroonkopieë kan nie een vir een oorgeslaan word nie, en 'n patroon kan nie 'n skets-kromme volg nie. Skets-patrone en -spieëls is ook nog nie gebou nie: teken herhaalde skets-meetkunde met die hand of met **Voeg by volgens koördinate**.
:::
