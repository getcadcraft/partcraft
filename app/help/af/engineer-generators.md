---
title: Onderdele uit fisika: generators
summary: Die Ingenieurwerkruimte en die Gegenereerde liggaam-kenmerk. Kies 'n generator, stel sy insette (vloei, druk, temperature, materiaal, drukker) en kry 'n onderdeel wat uit handboekformules gemeet is, met sy datablad, sy vervaardigingskontroles en lêers vir analise-gereedskap. Dieselfde insette gee altyd dieselfde onderdeel.
keywords: ingenieur, generator, gegenereerde liggaam, fisika, reëls, warmtewisselaar, verdeler, mondstuk, rooster, gyroid, datablad, insette, deterministies, dieselfde insette dieselfde onderdeel, vervaardigingskontroles, 3D-druk, poeierbed
from: 5a387dc0
---

'n **Generator** is 'n skrip wat 'n onderdeel uit jou vereistes meet en dit bou. 'n Warmtewisselaar-generator neem die hitte wat verskuif moet word, die twee vloeie en hul temperature, die druk en die materiaal. Dit werk uit hoe groot die kern moet wees en hoe dik sy wand, bou dit, en vertel jou die getalle wat dit gebruik het en waar elkeen vandaan kom. Verander 'n inset en die onderdeel volg.

Die resultaat is 'n gewone liggaam in die onderdeel: dit is in die kenmerklys, dit druk en dit voer uit. Die generator self word ook in die onderdeel gehou, so 'n lêer open op enige rekenaar sonder dat die generator geïnstalleer is. **Die oopmaak van 'n onderdeel laat nooit 'n skrip loop nie.**

## Maak 'n liggaam

1. Kies die {{ui:Ingenieur}}-werkruimte in die wisselaar.
2. Kies 'n generator in die lys (die wat saam met PartCraft kom, en dan enige wat jy uit 'n lêer oopgemaak het) en klik {{ui:Nuut}}.
3. Die skrip loop. Wanneer dit klaar is, is die liggaam in die aansig, en die paneel wys sy insette, sy **datablad** en sy **kontroles**.

Jy kan ook een van Ontwerp af byvoeg: {{ui:Kenmerke}} › {{ui:Meer}} › {{ui:Gegenereerde liggaam}}.

## Verander dit

Verander enige inset en die liggaam word weer gemaak 'n oomblik nadat jy ophou tik. Die paneel sê watter van drie dinge waar is:

- **Op datum**: die liggaam pas by die skrip en sy insette.
- **Die insette het verander**: die liggaam in die onderdeel is van die vroeëre insette. Dit word weer gemaak, of druk {{ui:Voer uit}}.
- **Nog nie uitgevoer nie** of **Die laaste lopie het misluk**: 'n skripfout word gewys met sy reël.

{{ui:Stop}} beëindig 'n lopie wat te lank neem. Ontdoen gaan een stap terug op 'n slag: 'n lopie is een stap, 'n inset is een stap.

## Die datablad

Elke getal wat die generator uitgewerk het, word gelys met sy **eenheid** en **waar dit vandaan kom** ('n handboekvergelyking, 'n standaard, 'n datablad). Niks is 'n verborge konstante nie. Die blad is deel van die lêer, so dit is dieselfde op die volgende rekenaar. [Datauitvoer](topic:data-out) sê hoe om dit as JSON of PDF te stoor.

## Die kontroles

'n Generator kan sy eie onderdeel teen 'n drukproses kontroleer: mure en gapings dunner as wat die proses hou, los stukke, holtes wat poeier of hars vasvang, gate te nou om hulle skoon te maak, en oorhange wat ondersteuning nodig het. Die bevindinge is in die paneel en in die lys {{ui:Probleme}} (die ⚠-knoppie), en hulle word saam met die onderdeel gestoor.

Die proseswaardes is die ronde getalle wat openbare ontwerpgidse vir die proses in die algemeen gee (FDM, SLA, SLS, metaalpoeierbed). Hulle is **nie jou masjien se spesifikasie nie**. Vervang hulle met jou werkswinkel se waardes voordat jy op 'n kontrole staatmaak. Die kontrole werk op 'n rooster van voksels, so dit is akkuraat tot ongeveer een voksel. 'n Muur word slegs gerapporteer wanneer dit dunner as die limiet is, met meer as een voksel.

## Wat saam kom

| Generator | Wat dit maak |
|---|---|
| Gyroid-blok | 'n Blok gevul met 'n gyroid, Schwarz P- of diamantplaat: die eenvoudigste rooster |
| Gyroid-warmtewisselaar | Die kern van 'n twee-vloeistof-wisselaar, gemeet uit die lading volgens die effektiwiteit-NTU-metode, en sy wand uit die druk. Kan die drukverlies kontroleer met 'n vloeistudie op een sel |
| Verdelingsverdeler | 'n Kop en takke, elke buis gemeet uit die vloei wat dit dra |
| Gegradeerde roosterbalk | 'n Rooster waarvan die wand verdik waar 'n topologie-optimering sê materiaal nodig is |

Alles is eerste skattings wat op handboekformules gebou is. [Die ingenieursbiblioteek](topic:engineering-library) lys die formules en hul perke. Voer Simulasie, Termies of Vloei uit op die resultaat voordat jy daarop staatmaak.

## Uitvoerbeheer

Ingenieur se generators en datablaaie dra 'n kennisgewing oor uitvoerbeheer en sanksies. Lees dit in [Ingenieur en uitvoerbeheer](topic:engineer-export-notice). Dit is ook onderaan elke datablad.

## Nog nie gebou nie

- Koppe, poorte en koppelstukke op die warmtewisselaarkern: dit is net die kern.
- Temperatuurkurwes vir materiaalsterkte: die materiale is by kamertemperatuur.
- Tee-verliese en die verdeling van vloei tussen uitlate in die verdeler.
- Generators byvoeg uit die byvoegingsgids met een klik. 'n Lêer oopmaak voeg een by hierdie blaaier.
- Generators vir die ander programme.
