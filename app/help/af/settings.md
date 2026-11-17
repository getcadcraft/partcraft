---
title: PartCraft-instellings
summary: Kies watter muisknoppie die aansig draai, laat 'n raakpaneelswiep die onderdeel draai en pan, skakel outomatiese verhoudings tydens skets aan of af, en stel hoeveel drade die simulasie-oplossers gebruik.
keywords: instellings, voorkeure, opsies, muis, middelknoppie, wielknoppie, wentel, draai, raakpaneel, touchpad, rol, swiep, knyp, verhoudings, beperkings, outomatiese verhoudings, saamval, vaslê, drade, oplosserdrade, kerne, verwerkers, multidraad, vinniger oplos, parallel
from: 759edcaf
---

Maak {{ui:Instellings}} oop met die rat in die programbalk of {{key:Mod+,}}. Die eerste oortjie, {{ui:PartCraft}}, hou die instellings wat by hierdie program hoort; {{ui:Algemeen}} hou die instellings wat elke CadCraft-program deel (tema, nutsbalk, paneele). PartCraft se instellings bestaan net in die program: jy verander dit hier, en hierdie blaaier onthou hulle. {{ui:Stel PartCraft-instellings terug}} stel alles terug na die begin.

## Die aansig draai

- **Linkerknoppie** (verstek): sleep met die linkerknoppie om die onderdeel te draai; sleep met die regter- of middelknoppie om te pan.
- **Middelknoppie**: druk die wiel in en sleep om die onderdeel te draai; hou {{key:Shift}} (of {{key:Ctrl}}, of ⌘) met die middelknoppie, of sleep met die regterknoppie, om te pan. Die linkerknoppie kies net vlakke, rande en referensievlakke, so 'n klik wat effens beweeg, draai nooit die onderdeel nie. Baie CAD-programme werk so.

Die wiel zoem altyd by die wyser, in albei gevalle. In 'n skets pan die regter- en middelknoppies soos voorheen.

## Rol: muiswiel of raakpaneel

- **Bepaal self** (verstek): PartCraft hou die rol dop. Sywaartse of fyn rol, soos 'n raakpaneel stuur, draai die onderdeel; hele wielkerwe zoem.
- **Muiswiel**: rol zoem altyd na die wyser toe.
- **Raakpaneel**: swiep met twee vingers om die onderdeel te draai, hou {{key:Shift}} en swiep om te pan, knyp om te zoem. In 'n skets pan 'n swiep met twee vingers die skets.

'n Knyp zoem in elke keuse. As "Bepaal self" verkeerd raai vir jou muis of raakpaneel, kies die een wat jy het. Meer in [Raakpaneel, aanraking en klein skerms](topic:trackpad-and-touch).

## Skets: voeg verhoudings by terwyl jy teken

**Voeg verhoudings by terwyl jy teken** (aan by die verstek): 'n klik wat by 'n punt vasklik, maak die nuwe punt saamvallend daarmee, 'n klik op 'n kromme plaas die punt op daardie kromme, en 'n lyn wat amper gelyk of regop getrek word, word horisontaal of vertikaal. Sien [Verhoudings en maate](topic:relations-dimensions).

Skakel dit af wanneer jy meetkunde naby ander meetkunde wil plaas sonder om dit daaraan vas te knoop. Die wyser klik steeds vas op punte en krommes, maar niks word verbind nie: lyne wat in 'n ketting geteken word, deel nie hul punte nie, so 'n sleep kan hulle uitmekaar trek. Voeg self die verhoudings by wat jy wil hê, vanuit die regterpaneel. 'n Geslote profiel word steeds uitgetrek wanneer sy punte mekaar raak.

:::note
Die instelling verander net wat nuwe tekening byvoeg. Verhoudings wat reeds in 'n skets is, bly, en die verrondingshulpmiddel maak steeds sy raakboog en radius.
:::

## Skets: meet terwyl jy teken

**Meet soos jy teken** (aan by die verstek): terwyl 'n lyn, reghoek, sirkel of boog geteken word, vul 'n getal in die grootteblokkie langs die wyser ({{key:Tab}} gaan na die volgende blokkie) en {{key:Enter}} teken die vorm op daardie grootte, met 'n aandrywende maat vir elke grootte wat jy ingetik het. Af: 'n getal intik terwyl jy teken doen niks nie, en vorms word net met klikke geteken. Sien [Tik die grootte terwyl jy teken](topic:sketch-basics#type-the-size-as-you-draw).

## Hoekaanwyser

Wat in die hoek van die 3D-aansig verskyn: **Aansigkubus** (verstek; regs bo — klik 'n vlak, rand of hoek om van daar af te kyk, sleep dit om te wentel, sleep sy kompasring om die model te draai), **Asikoon** ('n klein X-, Y-, Z-merker links onder wat met die aansig draai: X rooi, Y groen, Z blou) of **Geen**. Geeneen verskyn terwyl jy skets of op die tekenblad nie. Sien [Die aansigkubus](topic:view-cube).

## Oplosserdrade

Hoeveel drade die simulasie-oplossers mag gebruik. **Outomaties** (verstek) neem een minder as die rekenaar se logiese verwerkers (hoogstens 16), sodat die bladsy reageer terwyl 'n studie oplos; of kies 'n getal. Groot voksel-studies, knik, spanning oor tyd en vloei los vinniger op met verskeie drade (ongeveer 2× op 4 drade vir 80 000 kubusse in ons tydmetings, meer op 'n onbesette rekenaar); modelle onder ongeveer 20 000 onbekendes bly op een draad, omdat om drade te begin meer kos as wat hulle spaar. 'n Gedraadde oplossing gee dieselfde antwoord as een draad (tot afronding: die somme word in 'n ander volgorde bygetel). Elke studie se resultate lys **N drade** of **1 draad** met die rede onder **Oplosser**.

Drade vereis dat die bladsy **kruisoorsprong-geïsoleer** is (die blaaier laat werkers slegs dan geheue deel). Die laboratoriumbladsy is so; waar dit nie is nie, sê die instelling dit ("Hierdie bladsy is nie kruisoorsprong-geïsoleer nie, so oplossers loop op een draad, wat hier ook gekies is.") en elke oplossing gebruik een draad. Alles anders werk dieselfde, en die antwoorde is dieselfde.

Laminêre vloeistudies gebruik die drade ook (ongeveer 2.5× op 4 drade vir 54 000 vloeistofselle, dieselfde antwoord tot die laaste syfer). Die kwadratiese-tetraëder-oplosser en hitte-oordrag loop op een draad: drade daarvoor is op ons toetsrekenaar stadiger gemeet (hulle oplossers word beperk deur geheuespoed en deur 'n stap wat nie verdeel kan word nie).

### Op jou eie webbediener

As jy PartCraft vanaf jou eie bediener laat loop, werk dit soos bedien. Vir die oplosserdrade, laat die bediener twee kopskrifte met PartCraft se bladsy stuur:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Op Apache, in die vouer se `.htaccess` (benodig mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Op nginx, in die `location` wat PartCraft bedien:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Herlaai die bladsy: Instellings › Oplosserdrade bied dan **Outomaties** met jou rekenaar se getal aan. Die tweede kopskrif laat die blaaier alles weier wat die bladsy van 'n ander webwerf laai wat dit nie toelaat nie, wat goed is vir PartCraft op sy eie (dit laai alles uit sy eie vouer).
