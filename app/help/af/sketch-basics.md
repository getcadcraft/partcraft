---
title: Teken jou eerste skets
summary: Maak 'n skets op 'n vlak of 'n plat vlak oop, teken lyne, reghoeke, sirkels, boë, punte en middellyne, rond 'n hoek af, kies, sleep en skrap.
keywords: skets, teken, lyn, reghoek, sirkel, boog, punt, middellyn, konstruksie, fillet, skets-fillet, ronde hoek, vasmaak, kies, venster, sleep, profiel
from: 28be7436
---

Elke soliede liggaam begin as 'n skets: 'n plat tekening op 'n vlak. Hierdie gids dek die teken-gereedskap. Om die skets met verhoudings en maatte vas te pen, sien [Heeltemal definieer 'n skets](topic:relations-dimensions).

## Begin 'n skets

Jy kan op 'n basisvlak of op enige plat vlak van die onderdeel skets.

1. Kies waar om te skets:
   - 'n basisvlak: klik **Voorvlak**, **Bovlak** of **Regsvlak** in die geskiedenis, of klik die vlak in die aansig;
   - 'n plat vlak: klik die vlak in die aansig. Die hele vlak word uitgelig.
2. Kies {{ui:Skets}} op die gereedskapsbalk of druk {{key:S}}. (Met 'n vlak gekies kan jy ook {{ui:Skets op hierdie vlak}} in die regterpaneel kies; met 'n basisvlak, {{ui:Skets daarop}}.)

Die aansig draai reg op die vlak, die skets-gereedskap verskyn op die gereedskapsbalk, en die {{ui:Lyn}}-gereedskap is gereed. As jy {{ui:Skets}} druk sonder dat iets gekies is, verskyn die basisvlakke en die statusbalk sê: "Klik 'n vlak of 'n plat vlak om op te skets. Esc stop."

:::note
'n Geboë vlak kan nie 'n skets hou nie: "Daardie vlak is geboë. Kies 'n plat vlak of 'n vlak om op te skets."
:::

**'n Skets op 'n vlak volg daardie vlak.** As die vlak deur 'n sketsrand of die einde van 'n ekstrusie gemaak is, beweeg die nuwe skets wanneer die kenmerk verander ('n dieper holte neem die skets op sy vloer saam). As die paneel sê die vlak is "Vas waar gekies", bly die skets waar die vlak nou is.

## Die teken-gereedskap

Elke gereedskap het 'n gereedskapsbalkknoppie en 'n sleutel. Kies dieselfde knoppie weer, druk {{key:S}}, of druk {{key:Esc}} om terug te keer na {{ui:Kies}}.

| Gereedskap | Sleutel | Hoe om te teken |
|---|---|---|
| {{ui:Lyn}} | {{key:L}} | Klik die begin, klik dan elke volgende punt. Lyne sluit end tot end aaneen. Beëindig die ketting met {{key:Esc}}, {{key:Enter}}, 'n regsklik of 'n dubbelklik. Klik op 'n bestaande punt beëindig dit ook |
| {{ui:Reghoek}} | {{key:R}} | Klik een hoek, dan die teenoorstaande hoek. Jy kry vier lyne wat by die hoeke verbind is, twee horisontaal en twee vertikaal |
| {{ui:Sirkel}} | {{key:C}} | Klik die middelpunt, dan 'n punt op die sirkel |
| {{ui:Boog}} | {{key:A}} | Klik die middelpunt, dan die begin, dan die einde. Die boog loop in die rigting waarin jy die aanwyser om die middelpunt beweeg |
| {{ui:Punt}} | {{key:P}} | Klik. 'n Punt op sy eie merk 'n gatmiddelpunt vir {{ui:Gat}} |
| {{ui:Middellyn}} | {{key:N}} | Soos 'n lyn, een segment op 'n slag. Word gestreep geteken; dit is konstruksiemeetkunde, gebruik as 'n draaias of verwysing |
| {{ui:Fillet}} | {{key:F}} | Klik 'n hoek waar twee lyne ontmoet, tik die {{ui:Radius}} in, druk {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Klik die punte waardeur die kurwe loop; {{key:Enter}} beëindig, 'n klik op die eerste punt sluit dit. Sien [Splines, trim, verskuiwing en ander skets-gereedskap](topic:sketch-tools) |
| {{ui:Trim}} | {{key:T}} | Klik die stuk van 'n kurwe om te verwyder, tot by die naaste kruisings |
| {{ui:Maat}} | {{key:D}} | Sien [Heeltemal definieer 'n skets](topic:relations-dimensions) |

Terwyl jy teken, wys 'n klein kassie langs die aanwyser die lengte, die grootte, die deursnee of die radius.

### Tik die grootte terwyl jy teken

Na die eerste klik van 'n lyn, reghoek, sirkel of boog, kan jy die grootte intik in plaas van om dit te klik. Die intik van 'n getal open die kassie langs die aanwyser met daardie getal daarin:

| Gereedskap | Kassies ({{key:Tab}} beweeg na die volgende) | Wat gebeur op {{key:Enter}} |
|---|---|---|
| {{ui:Lyn}}, {{ui:Middellyn}} | Lengte, dan Hoek (°) vanaf die skets se X-as | Die lyn word so lank geteken, na die aanwyser toe of teen die ingetikte hoek; die ketting gaan voort vanaf sy einde |
| {{ui:Reghoek}} | Breedte, dan Hoogte | Die reghoek word vanaf die eerste hoek na die aanwyser toe geteken; 'n grootte wat jy nie ingetik het nie, kom van die aanwyser |
| {{ui:Sirkel}} | Deursnee | Die sirkel word teen daardie deursnee geteken |
| {{ui:Boog}} | Radius na die middelpunt, dan Boghoek (°) na die begin | Die begin is so ver van die middelpunt; dan loop die boog so ver rond, in die rigting waarin jy die aanwyser beweeg het |

Elke grootte wat jy intik word 'n **aandrywende maat** in dieselfde stap, sodat die skets met grootte uitkom: {{key:Mod+Z}} verwyder die vorm en sy maatte saam. Klik in plaas van {{key:Enter}} te druk, hou wat jy ingetik het en neem die res van die klik. {{key:Esc}} maak die kassie toe en keer terug na die aanwyser.

Skakel dit af in {{ui:Instellings}} › {{ui:PartCraft}} › **Maat terwyl jy teken** as jy net met klikke wil teken. Sien [PartCraft-instellings](topic:settings).

{{ui:Meer}}, aan die einde van die skets-gereedskap, bevat die {{ui:Beheerpunt-spline}}, {{ui:Verleng}}, {{ui:Verskuif}}, {{ui:Spieël}}, {{ui:Veelhoek}}, {{ui:Gleuf}}, die skets-patrone en {{ui:Projekteer rand}}: sien [Splines, trim, verskuiwing en ander skets-gereedskap](topic:sketch-tools).

### Vasmaak

Vasmaak voeg verhoudings vir jou by, sodat die skets verbind bly wanneer dit beweeg:

- Op 'n **eindpunt of die oorsprong** verskyn 'n klein vierkant. Die nuwe punt word saamvallend daarmee gemaak.
- Op 'n **lyn, sirkel of boog** verskyn 'n klein kruis. Die nuwe punt word op daardie kurwe geplaas.
- 'n Lyn binne 3 grade van horisontaal of vertikaal vasmaak daarby en kry 'n horisontale of vertikale verhouding. Die etiket wys "H" of "V".

Om 'n vasmaak te vermy, zoem in sodat jy verder van die punt of kurwe klik.

## Rond 'n hoek af

1. Druk {{key:F}} of kies {{ui:Fillet}}.
2. Klik die hoekpunt waar twee lyne ontmoet.
3. 'n Kassie open met 'n voorgestelde {{ui:Radius}}. Tik die radius in en druk {{key:Enter}}.

Albei lyne word getrim en verbind deur 'n raaklynboog met 'n radiusmaat. Boodskappe wat jy mag sien: "'n Fillet benodig 'n hoek waar presies twee lyne ontmoet." en "Daardie radius is te groot vir hierdie lyne."

:::tip
Die skets-fillet rond 'n hoek van die profiel af, sodat die ekstrusie afgeronde vertikale rande kry. Om die rande van die soliede self af te rond (byvoorbeeld die boonste rande van 'n plaat), gebruik eerder die {{ui:Fillet}}-kenmerk op die onderdeel: sien [Rond af, skuins en hol maak](topic:fillet-chamfer-shell). In 'n skets is die gereedskapsbalk se Fillet die skets-gereedskap; op die onderdeel is dit die kenmerk.
:::

## Konstruksiemeetkunde

Konstruksielyne, sirkels en boë is gestreep en grys. Hulle lei die skets, maar is nie deel van die profiel wat geëkstrudeer of gedraai word nie.

1. Kies die lyne, sirkels of boë.
2. Druk {{key:Q}} of kies {{ui:Konstruksie}}. Druk dit weer om hulle terug te skakel.

## Kies, sleep en skrap

Druk {{key:S}} (of {{key:Esc}} totdat geen gereedskap aktief is) vir {{ui:Kies}}.

- Klik 'n punt, lyn, sirkel, boog, verhoudingsimbool of maat om dit te kies. {{key:Shift}}+klik voeg by die keuse of haal weg. Op Windows en Linux doen {{key:Ctrl}}+klik dieselfde; op 'n Mac, ⌘+klik.
- Sleep op leë ruimte om 'n venster te trek: alles wat heeltemal daarin is, word gekies.
- Sleep 'n punt of 'n lyn om dit te skuif. Die oplosser hou elke verhouding en maat as dit beweeg, so slegs vrye meetkunde skuif. Sleep 'n sirkel se rand om sy radius te verander.
- Sleep 'n maat se getal om die etiket te skuif.
- Druk {{key:Delete}} of {{key:Backspace}}, of kies {{ui:Skrap}} in die regterpaneel, om die keuse te skrap. As meetkunde geskrap word, word die verhoudings daarop ook geskrap.

## Zoem en pan in die skets

- Rol die wiel om by die aanwyser te zoem.
- Sleep met die middel- of regterknoppie om te pan.
- {{ui:Pas pas}} op die gereedskapsbalk of in die regterpaneel pas die skets in die aansig. In 'n skets is die {{key:F}}-sleutel die Fillet-gereedskap, nie Pas pas nie.

## Maak die skets toe

Kies {{ui:Verlaat}} op die gereedskapsbalk of {{ui:Verlaat skets}} in die regterpaneel, of druk {{key:Esc}} totdat die skets toemaak. Elke {{key:Esc}} kanselleer eers wat aan die gang is, keer dan terug na {{ui:Kies}}, maak dan die keuse skoon, en die volgende een maak die skets toe.

Die skets bly gekies, so die volgende {{ui:Ekstrudeer}} of {{ui:Draai om}} gebruik dit.

## Wat 'n goeie profiel maak

{{ui:Ekstrudeer}} en {{ui:Draai om}} gebruik **elke geslote lus** van die skets se soliede (nie-konstruksie) lyne, sirkels, boë en splines. Lusse binne lusse word gate.

- Elke einde moet presies een ander einde ontmoet. "Die profiel is oop: 'n einde by (12.5, 40) is aan niks verbind nie." noem die plek.
- Geen drie einde mag by een punt ontmoet nie: "Die profiel vertak by (0, 20): meer as twee einde ontmoet daar."
- Punte en konstruksiemeetkunde word deur die profiel geïgnoreer.

Volgende: [Heeltemal definieer 'n skets met verhoudings en maatte](topic:relations-dimensions).

## 'n Skets uit 'n foto

**Kenmerke › Meer › Skets uit 'n foto…** (of die Skets-groep in die kenmerkboom-lint) trek 'n omtrek van 'n foto van 'n plat onderdeel op 'n gewone grond — sy buitelyn en sy gate — of 'n pentekening in 'n skets van lyne, boë en sirkels. Gee een lengte (die breedte, die hoogte of die langste sy) sodat die skets die regte grootte het, kontroleer wat dit in die voorskou gevind het, en kies **Maak die skets**; dit kan dit ook in dieselfde ontdoen-stap ekstrudeer. Dit word op hierdie rekenaar getrek. Hoekradiusse kom binne ongeveer 5 % terug, besonderhede van een of twee pixels gaan verlore, en 'n foto wat skuins geneem is of met skaduwees oor die onderdeel word nie reggetrek nie: neem die foto reg van voor, met gelyke lig.
