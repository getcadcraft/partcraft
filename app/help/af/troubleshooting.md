---
title: Probleemoplossing
summary: Probleme wat jy in PartCraft kan teëkom, van die app wat nie begin nie tot kenmerke wat misluk, skette wat nie oplos nie, lêers wat nie oopmaak nie en gewrigte wat verkeerd optree, met die boodskap wat jy sien en die oplossing.
keywords: probleem, fout, hulp, werk nie, misluk, misluk, ineenstorting, leeg, webgl, webassembly, kern, nie gebou nie, oor gedefinieer, oop profiel, kan nie oopmaak nie, gebeur niks, verkeerde rigting, stadig
from: 7728542c
---

Wanneer iets nie werk nie, lees eers die **statusbalk** onderaan: PartCraft sê daar waarom dit geweier het of wat dit volgende verwag. 'n Kenmerk wat misluk, wys ook sy boodskap bo-aan sy regterpaneel en wanneer jy sy ry in die geskiedenis aanwys.

## Die app begin nie

### "Hierdie blaaier kan nie 3D wys nie (WebGL is af of ontbreek), so PartCraft kan nie hier loop nie."

**Oorsaak:** die blaaier het 3D-grafika (WebGL) af, geblokkeer, of nie ondersteun deur die grafiekbestuurder nie.

**Oplossing:**

:::chromium
Maak `chrome://settings/system` oop (of `edge://settings/system` in Edge) en skakel "Gebruik grafikaversnelling wanneer beskikbaar" aan, herbegin dan die blaaier. As dit reeds aan is, kyk na `chrome://gpu` vir die WebGL-status, en werk jou grafiekbestuurder by.
:::

:::firefox
Maak `about:support` oop en kyk na Graphics, WebGL. As dit geblokkeer is, werk die grafiekbestuurder by. In `about:config` moet `webgl.disabled` `false` wees.
:::

:::safari
WebGL is altyd aan in huidige Safari. Werk macOS by (Safari werk saam daarmee by). As dit steeds misluk, probeer Chrome of Firefox op dieselfde Mac om die grafiekhardeware uit te sluit.
:::

Afstandswerkskerms en sommige virtuele masjiene het geen WebGL nie. Probeer op die rekenaar self.

### "Die solide kern het nie gelaai nie: …"

**Oorsaak:** die meetkundekern (a WebAssembly-program) kon nie afgelaai of begin word nie. Gewoonlik het die verbinding tydens laai gebreek, WebAssembly is deur 'n maatskappybeleid of 'n blaaier se sekuriteitsinstelling af, of die blaaier is baie oud.

**Oplossing:** herlaai die bladsy terwyl jy aanlyn is. As dit steeds misluk, probeer 'n ander huidige blaaier. In Firefox moet `javascript.options.wasm` in `about:config` `true` wees. Vanlyn laai die app en sy kern slegs as die appbalk **Vanlyn gereed** gesê het voordat jy die verbinding verloor het ({{ui:Stoor vir vanlyn}} terwyl aanlyn; sien [Werk vanlyn](common:offline)).

### Die vanlynknoppie sê "Kon nie stoor nie" of "Vanlyn nie beskikbaar nie"

**Kon nie stoor nie**: sommige lêers is nie afgelaai nie. Klik dit om weer aanlyn te probeer; 'n stadige of gemeterde verbinding benodig dalk 'n tweede poging. **Vanlyn nie beskikbaar nie**: hierdie blaaiervenster kan nie 'n vanlynkopie hou nie (privaatvensters en sommige bestuurde rekenaars blokkeer dit). Gebruik 'n normale venster, of hou die oortjie oop.

### PartCraft is vanlyn maar verouderd

Klik **Vanlyn gereed** terwyl jy aanlyn is en kies {{ui:Stoor weer (kry die nuutste weergawe)}}.

### "Sweep: nog nie gebou nie. Dit benodig 'n presiese kern, …"

Die volle boodskap is "<Naam>: nog nie gebou nie. Dit benodig 'n presiese kern, wat hierdie weergawe van PartCraft nie het nie. Hulp › Wat nog nie gebou is nie sê wat om eerder te doen." Jy sien dit wanneer jy Sweep, Loft, Rib, 'n plaatmetaalflens, 'n oppervlakkenmerk, Kombineer, Skuif liggaam, Skaal liggaam of Padpatroon kies, en vir die ander dinge wat slegs 'n presiese kern doen. Niks is verkeerd met jou blaaier of jou onderdeel nie: hierdie weergawe van PartCraft bou elke onderdeel met die maaskern. Sien [Wat nog nie gebou is nie](topic:not-built-yet) vir wat om eerder te doen, en [Die maaskern](topic:solid-kernels).

### "Laai die solide kern…" bly nie weg nie

Wag 'n bietjie op 'n stadige verbinding: die kern en die 3D-biblioteek word die eerste keer afgelaai. Herlaai dan. As die bladsy self 'n fout wys, sien hierbo.

## Niks gebeur wanneer ek 'n sleutel druk nie

- Sleutels werk nie terwyl die wyser in 'n boks in 'n paneel is nie. Klik in die 3D-aansig of druk {{key:Esc}} na die intik (of {{key:Tab}} uit).
- Pyltjiesleutels en {{key:Plus}}/{{key:Minus}} draai en zoem die aansig slegs nadat jy in die aansig geklik het.
- 'n Dialoog is oop: beantwoord dit eerste.
- In 'n skets is {{key:F}} die Afrondings-gereedskap, nie Pas nie. Gebruik die {{ui:Pas pas}}-knoppie.

## 'n Nutsbalkknoppie is gegrys

- Kenmerkknoppies is gegrys terwyl 'n skets oop is. Maak eers die skets toe.
- Skets-gereedskap werk slegs binne 'n skets.
- {{ui:Ontdoen}} en {{ui:Herdoen}} is gegrys wanneer daar niks is om te ontdoen of te herdoen nie.
- {{ui:Samestelling}} benodig 'n onderdeel met 'n solied. {{ui:Verbinding}} benodig twee onderdele in die samestelling. {{ui:Wysig onderdeel}} benodig 'n onderdeel wat gekies is.
- {{ui:STEP AP242 (presiese soliede)}} en {{ui:STEP AP214 (presiese soliede)}} is gegrys in 'n samestelling: voer elke onderdeel afsonderlik uit. 'n Ander program weier die presiese lêer: probeer {{ui:STEP AP214 (presiese soliede)}}, dan {{ui:STEP (gefasseteer, maaskern)}}, en laat ons weet deur {{ui:Hulp}} › {{ui:Rapporteer 'n probleem}}.
- {{ui:Sweep}}, {{ui:Loft}} en die ander kenmerke wat 'n presiese kern benodig, is nie gegrys nie: hulle bly klikbaar, hul tooltips eindig met "nog nie gebou nie (benodig 'n presiese kern)", en as jy een klik, sê die statusbalk dit. Sien [Wat nog nie gebou is nie](topic:not-built-yet).
- {{ui:Tekening}} benodig 'n onderdeel met 'n solied, en is gegrys terwyl 'n skets oop is.
- {{ui:Uitvoer}}-items is gegrys in 'n samestelling: samestellings kan nog nie uitgevoer word nie. Maak dit toe, of wysig 'n onderdeel, om uit te voer.

## Skets-probleme

### Die skets laat my nie 'n verhouding byvoeg nie

"Geen verhouding pas by hierdie keuse nie. Kies een of twee items (Shift+klik voeg by)." Die verhouding benodig 'n ander keuse. Sien [Skets-verhoudings en afmetings](topic:sketch-relations) vir wat elkeen benodig.

### "Oor gedefinieer: … kan nie almal voldoen word nie. Ontdoen, of skrap een daarvan."

**Oorsaak:** die nuwe verhouding of afmeting bots met die wat reeds daar is. Die skets het nie geskuif nie.

**Oplossing:** {{key:Mod+Z}}, of skrap een van die rooi items in die regterpaneel se lys (kies **Skrap** langs dit).

### "Oor gedefinieer: … is reeds geïmpliseer. Skrap dit."

**Oorsaak:** die verhouding voeg niks by nie: ander dwing dit reeds af (byvoorbeeld Parallel op twee sye van 'n reghoek, of 'n afmeting wat reeds vas is). Daar is geen aangedrewe afmetings in hierdie bou nie.

**Oplossing:** skrap dit. Die kenmerk word tog gebou, met 'n waarskuwing.

### "Daardie items kan nie saam gedimensioneer word nie."

Jy het byvoorbeeld 'n punt en 'n sirkel geklik. Dimensioneer eerder na die sirkel se middelpunt.

### "'n Afronding benodig 'n hoek waar presies twee lyne ontmoet." / "Daardie radius is te groot vir hierdie lyne."

Klik presies op die hoekpunt van twee soliede lyne. Gebruik 'n kleiner radius as die korter lyn toelaat.

### Die meetkunde spring terug wanneer ek dit sleep

Die sleep sou 'n verhouding of 'n afmeting breek, so PartCraft sit dit terug. Slegs blou (onderdefinieerde) meetkunde kan skuif.

### "Hierdie skets kan nie oopmaak nie: Benodig Extrude2, wat misluk."

Die skets sit op 'n vlak van 'n kenmerk wat nie gebou is nie. Maak daardie kenmerk eers reg, of ontonderdruk dit, of rol vorentoe.

## Kenmerkprobleme

| Boodskap | Oorsaak | Oplossing |
|---|---|---|
| "Maak eers 'n skets: kies 'n vlak, Skets, teken 'n geslote profiel, Verlaat." | Geen ongebruikte skets met krommes nie, en geen gekies nie | Teken 'n skets, of kies die skets om te gebruik in die geskiedenis |
| "Die skets het geen geslote profiel om uit te trek nie." (of "om te draai") | Geen geslote lus van soliede lyne nie | Sluit die gapings; skakel konstruksielyne terug met {{key:Q}} |
| "Die profiel is oop: 'n einde by (x, y) is aan niks gekoppel nie." | 'n Gaping by daardie punt | Maak die skets oop, sleep die einde op sy buurman sodat dit vasklou |
| "Die profiel vertak by (x, y): meer as twee einde ontmoet daar." | Drie of meer lyne ontmoet by een punt | Skrap die ekstra lyn, of skakel dit na konstruksie |
| "'n Geslote lus benodig ten minste drie sye of 'n kromme." | Twee lyne heen en weer | Teken die lus weer |
| "Deur alles is vir snitte. Gebruik 'n diepte vir 'n uitstulping." | 'n Uitstulping op Deur alles gestel | Stel Einde op Blind of Middelvlak |
| "Daar is niks om aan daardie kant van die skets uit te sny nie. Probeer die ander rigting." | Die snit wys weg van die materiaal | Merk Omgekeerde rigting |
| "Daar is nog niks om uit te sny nie." / "Daar is nog niks om te boor nie." | Geen soliede voor hierdie kenmerk nie | Maak eers 'n uitstulping, of skuif die kenmerk af |
| "Teken 'n middellyn ('n konstruksielyn) in die skets om om te draai." | Draai sonder 'n as | Voeg 'n middellyn by, of kies 'n lyn in As |
| "Die profiel kruis die as. Hou dit aan een kant van die middellyn." | Profiel aan albei kante van die as | Teken die helfte van die profiel weer |
| "Plaas skets-punte waar die gate moet wees (Punt-gereedskap), maak dan die gat." | Geen los punte in die skets nie | Voeg punte by met {{key:P}} |
| "Die teltergat moet wyer as die gat wees." | Teltergat ⌀ nie groter as Deursnee nie | Maak die teltergat wyer |
| "Die teltergat moet vlakker as die gat wees." | Teltergat dieper as 'n blinde gat | Maak dit vlakker, of die gat dieper |
| "Kies die kenmerke om te kopieer." | 'n Patroon of spieël met niks gemerk nie | Merk 'n kenmerk onder Kenmerke om te kopieer |
| "Extrude2 het geen soliede om te kopieer nie." | Die gekopieerde kenmerk het misluk of is af | Herstel of ontonderdruk dit |
| "Benodig Sketch3, wat misluk." | 'n Kenmerk waarvan dit afhang, is nie gebou nie | Herstel die kenmerk wat dit noem |
| "Die vlak waarop dit sit, is weg (Extrude1 is nie gebou nie)." | Die skets se vlak bestaan nie meer nie | Herstel daardie kenmerk, of skrap die skets en skets weer |
| "Niks van die onderdeel bly oor hierna nie." | 'n Snit het alle materiaal verwyder | Kontroleer die snit se grootte en rigting |
| "Die soliede kern kon dit nie bou nie (…)." of "Die soliede kern kon dit nie met die liggaam kombineer nie." | Die kern het die meetkunde geweier | Ontdoen, of verander die groottes effens; vlakke wat presies raak, kan dit veroorsaak |
| "Sweep: nog nie gebou nie. Dit benodig 'n presiese kern, wat hierdie weergawe van PartCraft nie het nie." (ook Loft, Rib en die ander) | 'n Kenmerk wat in 'n vroeëre bou gemaak is en slegs 'n presiese kern kan bou. Dit bly in die geskiedenis en word onveranderd teruggestoor | Onderdruk of skrap dit; sien [Wat nog nie gebou is nie](topic:not-built-yet) vir wat om eerder te doen |
| "'n 5 mm-ronding pas nie hier nie (…)." / "'n 2 mm-skuinssnit …" | Die grootte is te groot vir 'n vlak langs die rand, of die hoek kan nie versag word nie | Kleiner grootte, of minder rande per kenmerk |
| "Afronding: in hierdie weergawe slegs reguit rande tussen twee plat vlakke (die maaskern bou hulle). Rond geboë rande in die skets af, of skuins hulle." (ook Skuinssnit) | 'n Gekose rand is rond, soos 'n gatrand, of lê op 'n geboë vlak | {{ui:Kies rande}} en verwyder dit; rond daardie hoek eerder in die skets af, of skuins dit |
| "'n Afronding waarvan die radius langs die rand verander: nog nie gebou nie (dit benodig 'n presiese kern). Gee dit een radius." | **Veranderlike radius** is gemerk | Ontmerk dit en gee een radius |
| "Afronding deur die maaskern: waar afgeronde rande ontmoet, ontmoet hulle in 'n skerp vou, nie gemeng nie." (⚠, 'n waarskuwing) | Gekose rande ontmoet by 'n hoek; die afrondings ontmoet daar in 'n skerp vou | Niks om reg te maak nie: die onderdeel is gebou. Ronde minder rande af as die vou saak maak |
| "'n Rand wat dit rond, is weg: die rand tussen Extrude1 en Cut2." | 'n Vroeëre verandering het die rand verwyder | {{ui:Kies rande}}, verwyder die rooi rand, kies die nuwe een |
| "Kies die rande in die aansig, voeg dit dan by." | Die afronding of skuinssnit het geen rande nie | {{ui:Kies rande}} |
| "Kies die vlakke om te verwyder (oop), dop dan." | Die dop het geen oop vlakke nie | {{ui:Kies vlakke}} |
| "Die dop kon nie met hierdie dikte gemaak word nie (…)." | Die wand is dikker as 'n dun deel van die model of 'n afronding se radius | 'n Dunner wand, of groter afrondings |
| "Dop: in hierdie weergawe maak dit slegs plat vlakke oop (die maaskern bou dit)." | 'n Oop vlak is geboë | {{ui:Kies vlakke}} en verwyder dit; maak slegs plat vlakke oop |
| "Konsep: in hierdie weergawe slegs plat vlakke (die maaskern bou dit)." | 'n Gekonsepte vlak is 'n silinder, keël of vrye vorm-vlak | Verwyder dit; konsep slegs plat vlakke |
| "'n Vlak wat dit oopmaak, is weg (…)." | 'n Vroeëre verandering het die vlak verwyder | {{ui:Kies vlakke}} weer |
| "Afronding1 verander die liggaam se rande of wande; dit kan nie gekopieer word nie. …" | 'n Patroon of spieël kopieer 'n afronding, skuinssnit of dop | Ontmerk dit; patroon eers die snitte, dan afrond |
| "Dit sit op 'n vlak wat slegs 'n presiese kern kan vind: nog nie gebou in hierdie weergawe nie." | 'n Skets op 'n vlak wat die maaskern nie kan vind nie, soos een wat in 'n vroeëre bou gemaak is | Skets op 'n basisvlak of 'n plat vlak van 'n uittrek, en plaas dit met afmetings |
| "Dit gebruik 'n vlak of rand van die soliede stuk, wat slegs 'n presiese kern kan vind: nog nie gebou in hierdie weergawe nie." | 'n Verwysingsvlak, as of punt op 'n vlak of rand van die soliede stuk | Maak dit uit basisvlakke, skets-punte of koördinate |
| "Uittrek tot by 'n vlak, die volgende vlak of 'n hoekpunt: nog nie gebou nie (dit benodig 'n presiese kern)." / "'n Taps lopende: nog nie gebou nie (dit benodig 'n presiese kern)." | 'n Eindvoorwaarde of tapsheid wat slegs 'n presiese kern bou | Gebruik 'n Blinde of Middelvlak-diepte wat jy meet; laat Taps lopende op 0 |

## Kies-probleme

- "Daardie vlak is gebuig. Kies 'n plat vlak of 'n vlak om op te skets." Skets benodig 'n plat vlak. Skets op 'n basisvlak en plaas die skets met afmetings.
- 'n Vlak sê "Vas waar gekies": dit is nie deur 'n skets se rand gemaak nie (byvoorbeeld 'n vlak van 'n patroonkopie), so 'n skets daarop bly staan wanneer die onderdeel verander.
- Rande is moeilik om te tref: zoem in. 'n Rand wen oor die vlak daarnaas wanneer die wyser reg daarop is.

## Lêerprobleme

| Boodskap | Oplossing |
|---|---|
| 'PartCraft open sy eie .partcraft.json-lêers, voer uit vanaf die CadCraft-makro vir SolidWorks (.cadcraft-sw.json) en STEP-lêers. "bracket.igs" is geen van hierdie nie.' | Slegs daardie lêers word herken (en STL-, OBJ- en 3MF-maas, en `.3dm`-lêers) |
| '"part.stp" is nie 'n STEP-lêer nie (dit begin nie met ISO-10303-21).' | Die lêer is nie STEP-teks nie |
| "Daardie STEP-lêer is te groot (oor 60 MB) om hier in te voer." | Vereenvoudig dit by die bron |
| "Daardie lêer is te groot om 'n PartCraft-onderdeel te wees." op jou eie gestoorde onderdeel | 'n Groot STEP-soliede stuk wat in 'n vroeëre bou ingevoer is, het die onderdeel se lêer oor 50 MB gemaak. Gebruik 'n vroeëre kopie daarsonder |
| "Daardie lêer is te groot om 'n PartCraft-onderdeel te wees." | Die lêer is oor 50 MB; dit is nie 'n PartCraft-lêer nie |
| "Dit is nie 'n PartCraft-lêer nie (dit is nie JSON nie)." / "Dit is nie 'n PartCraft-lêer nie." | Die lêer is beskadig of van 'n ander program |
| "Hierdie lêer is gestoor deur 'n nuwer PartCraft (lêerweergawe …); hierdie een lees weergawe …" | Maak dit oop in die nuwer PartCraft |
| "Extrude2: die diepte is sleg." (of 'n ander waarde) | Die lêer is met die hand verander of beskadig. Gebruik 'n vroeëre kopie |
| Voeg in 'n samestelling sê "Part1.partcraft.json het geen soliede stuk om in te voeg nie." | Die onderdeellêer het geen soliede stuk nie. Maak dit oop, bou 'n soliede stuk, stoor, en voeg weer in |

**My gestoorde lêer is nie waar ek verwag het nie.** Stoor is 'n aflaai: kyk in jou blaaier se aflaaie-gids, of maak die aflaaielys oop vanaf die blaaier se nutsbalk. Sien [Waar jou lêers heen gaan](common:your-files).

**Ek het 'n onderdeel oopgemaak, maar die samestelling is steeds op die skerm.** Die onderdeel het agter die samestelling gelaai. Kies {{ui:Maak toe}} om die samestelling toe te maak en die onderdeel te sien. Maak samestellings toe voordat jy onderdeellêers oopmaak.

## Tekeningprobleme

| Boodskap | Oplossing |
|---|---|
| "Bou eers 'n soliede stuk, maak dan sy tekening." | Bou eers die onderdeel |
| "Geen plek op die blad vir: detail. Maak die detail kleiner of laat 'n aansig val." | Kleiner **Detailradius** of **Detailskaal**, of verwyder die snit |
| "'n Detail word uit die voor-, bo-, regter- of snitaansig geneem." | Klik op een van daardie aansigte |
| "Klik op een van die aansigte." | Die klik was op leë papier |
| "Posisie benodig ten minste een datumverwysing." en ander raamboodskappe | Stel die datums wat die paneel vra, of kies 'n ander kenmerk |
| "Die tekeningaansigte kon nie gemaak word nie: …" | Ontdoen die laaste verandering. As dit aanhou gebeur, stoor, herlaai en heropen die onderdeel |

## Samestellingsprobleme

| Boodskap | Oplossing |
|---|---|
| "Bou eers 'n soliede stuk, plaas dit dan in 'n samestelling." | Die onderdeel het nog geen soliede stuk nie |
| "Voeg eers 'n tweede onderdeel by (Voeg kopie by, Voeg in, of Wysig › Dupliseer)." | 'n Verbinding benodig twee onderdele |
| "Kies 'n vlak op 'n ander onderdeel." | Albei vlakke van 'n verbinding moet op verskillende onderdele wees |
| "Daardie vlak is gebuig. Kies 'n plat vlak …" | Verbindings begin by plat vlakke. Gebruik dan **Sentreer op** vir 'n gat of draai-as |
| "Bracket2 is nie aan die gegronde onderdeel gekoppel nie, so dit bly waar dit geplaas is." | Voeg 'n verbinding vanaf dit by 'n onderdeel wat geplaas is |
| "Revolute3 sluit 'n lus wat nie kan sluit nie: dit is 2.000 mm af. Kontroleer die vlakke, afsettings en perke van die lus se verbindings." | Die onderdele kan nie almal ontmoet nie: kontroleer die lengtes, die vlakke wat elke verbinding gebruik, afsettings (onderdele wat vlak-op-vlak gestapel is, moet in diepte ooreenstem) en perke; of verwyder een verbinding van die lus |
| "Die vlak wat hierdie verbinding gebruik, is weg van Bracket." / "Die as wat hierdie verbinding gebruik, is weg van Bracket." | Die onderdeel is gewysig. Verwyder die verbinding en maak dit weer |
| "Die as loop langs die vlak, so dit kan nie die verbinding se middelpunt stel nie." | Kies 'n as wat die vlak kruis, of "Die vlak se eie oorsprong" |
| "'n Samestelling hou ten minste een onderdeel. Maak dit eerder toe." | Gebruik {{ui:Maak toe}} |

**Die onderdele is verbind maar op die verkeerde plek.** Stel **Sentreer op** vir albei kante van die verbinding na die gate of draai-asse wat moet ooreenstem, pas dan **Hoek (°)** en **Afset (mm)** aan.

## Dit is stadig

- Stel **Krommes** op Normaal of Growwe terwyl jy modelleer; skakel na Fyn voor uitvoer.
- Groot patroontellings (honderde kopieë) neem tyd om op elke verandering te herbou. Onderdruk die patroon terwyl jy aan ander kenmerke werk.
- Botsing en die bewegingstoets vergelyk elke paar onderdele; groot samestellings neem langer.
- Maak ander swaar oortjies toe. PartCraft loop op jou eie rekenaar se verwerker en grafika.

## Nog steeds vas

Stoor jou lêer eers ({{key:Mod+S}}), herlaai dan die bladsy en maak dit weer oop. As 'n kenmerk steeds misluk, kies dit, lees die boodskap, en probeer {{key:Mod+Z}} terug na die laaste goeie toestand.
