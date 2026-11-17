---
title: Dokumente en hersienings (die kluis)
summary: Stap-vir-stap deurloop van een werklike werk. Plaas 'n projekvouer met onderdele en samestellings onder beheer, neem 'n onderdeel uit, verander dit, lewer dit in met 'n nota, stel dit vry, sien wat dit gebruik en die materiaallys, wat 'n tweede persoon sien terwyl dit gesluit is, en hoe dit met wolkvouers werk.
keywords: kluis, dokumente, deurloop, handleiding, uitneem, inlewer, hersiening, vrystelling, goedkeur, slot, geskiedenis, waar gebruik, materiaallys, bom, samestelling, wolkvouer, projekvouer, twee mense, gedeelde vouer
from: 0a5e6983
---

## Wat jy gaan doen

Jy is Ana, en jy werk aan die Riverside Clinic saam met 'n kollega, Ben. Die projek se onderdele en samestellings lê in een vouer waarby julle albei kan (' n gedeelde skyf, 'n gesinkroniseerde vouer of 'n wolkvouer). Aan die einde sal een lêer van sy eerste kopie na 'n vrygestelde hersiening **A** gegaan het, weer as **B.1** verander wees, jy sal gesien het wie wat gedoen het, en jy sal sien wat Ben sien wanneer jy die lêer hou.

Alles word in 'n versteekte `.ccvault`-vouer langs jou lêers gehou: geen bediener nie en niks word opgelaai nie (' n wolkvouer is die uitsondering, sien die laaste stap). Vir elke knoppie en reël op een plek, sien die onderwerp *Dokumente: uitneem, hersienings en vrystelling* waar jou program dit het.

## 1. Stel die projekvouer op

1. Kies {{ui:Documents…}} in die **Lêer**-groep van die nutsbalk.
2. Kies {{ui:Kies die projekvouer}} en kies die vouer wat die projek se onderdele en samestellings hou. (Projekvouers werk in Studio en in blaaiers wat 'n vouer kan oopmaak, soos Chrome en Edge. In ander blaaiers sê die paneel dit.)
3. Kies {{ui:Verander}} langs **Jy:** en tik jou naam, `Ana` (as dit vra, ook die naam van hierdie rekenaar). Die paneel sê nou *Jy: Ana op* en jou rekenaar. Jou naam gaan op alles wat jy doen.
4. Kies {{ui:Begin 'n kluis in hierdie vouer}} en tik die projek se naam, `Riverside clinic`. Die paneel sê *Kluis begin vir Riverside clinic.*

## 2. Plaas 'n lêer onder beheer

1. Maak **Lêers buite die kluis** oop en kies {{ui:Voeg by}} langs `plates/Bracket.partcraft.json`.
2. Dit verskyn onder **Lêers in die kluis** by hersiening **A.1**, status **Werk aan die gang**. A.1 is sy eerste kopie. Die kluis hou 'n kopie van elke hersiening.

## 3. Neem uit, verander, lewer in

1. Kies {{ui:Maak oop}} langs `plates/Bracket.partcraft.json`. Die onderdeel maak oop in PartCraft en die paneel sluit sodat jy dit kan sien. Maak die paneel weer oop vanaf {{ui:Documents…}}.
2. Maak die paneel weer oop en kies {{ui:Neem uit}}. Die ry sê nou **Uitgeneem na jou**. 'n Slotlêer is gemaak in `.ccvault/locks`. Niemand anders kan hierdie lêer uitneem voordat jy dit inlewer nie.
3. Verander die onderdeel: wysig 'n maat, voeg 'n gat by. Stoor word geweier tensy die lêer aan jou uitgeneem is, en die paneel sê waarom. Stoor as werk altyd vir 'n kopie van jou eie.
4. Maak die paneel oop, kies {{ui:Lewer in}} en tik wat verander het (`Moved the door`). Die paneel sê *ingelewer as A.2*. Die lêer in die projekvouer is nou die onderdeel wat jy oop gehad het, en die slot is weg. Inlewer sonder verandering hou die hersiening.

As jy van plan verander, gee {{ui:Ontdoen uitneem}} die lêer terug sonder 'n nuwe hersiening.

## 4. Nasien en vrystel

1. Kies {{ui:Stuur vir nasien}}. Die status word **Vir nasien** en die lêer is leesalleen.
2. Voordat jy goedkeur, kies {{ui:Projekinstellings}} en lys wie mag goedkeur (een naam per reël), byvoorbeeld `Ben` en `Carla`. Merk ook die reël dat die goedkeurder iemand anders as die outeur moet wees. Kies {{ui:Stoor instellings}}. Nou weier die kluis self enige ander persoon.
3. Ben (of Carla) kies {{ui:Keur goed}} en tik die goedkeurder se naam. Die status word **Vrygestel** en die hersiening word **A**, met *goedgekeur deur* en die naam. 'n Vrygestelde lêer is leesalleen. {{ui:Stuur terug}} sou dit na Werk aan die gang teruggestuur het, met 'n rede.

Die goedkeurder se naam is die naam wat in die paneel getik is. Dit is 'n rekord van wie goedgekeur het, nie 'n bewys van identiteit nie.

## 5. 'n Nuwe hersiening

1. Op die vrygestelde lêer, kies {{ui:Nuwe hersiening}}. Jy hou dit vir die volgende letter.
2. Verander dit en kies dan {{ui:Lewer in}}. Die hersiening is **B.1**, werk aan die gang. Stel dit op dieselfde manier vry en dit word **B**. {{ui:Ontdoen uitneem}} voor die eerste inlewering laat dit by **A**.

Hersieningsletters loop A, B … Z, AA, AB. As jou standaard sommige letters uitlaat, slaan die projekinstelling *Gebruik die ASME Y14.35-volgorde* I, O, Q, S, X en Z oor vir die volgende hersienings.

## 6. Sien wat gebeur het

Kies die lêer se naam om sy besonderhede oop te maak:

- **{{ui:Geskiedenis}}**: elke gebeurtenis, nuutste eerste, met wie, watter rekenaar en wanneer: *Ingelewer A.2* deur Ana, *Vrygestel* deur Ben, ensovoorts.
- **{{ui:Hersienings}}**: die hersieningstabel. Elke hersiening wat gehou word, met sy datum, wie dit ingelewer het, die nota en wie dit goedgekeur het. Die kluis hou 'n kopie van elk in `.ccvault/revs`.
- **{{ui:Gebruik}}**: die onderdele van 'n samestelling.
- **{{ui:Gebruik deur}}**: Gebruik deur lys elke samestelling in die kluis wat hierdie onderdeel hou. Verander 'n beugel en jy weet watter samestellings om na te gaan.

## Samestellings: wat hulle gebruik en die materiaallys

Plaas 'n samestelling (`.partcraft.json`, gestoor vanaf Samestellingmodus) in die vouer en voeg dit by. Kies sy naam: **Gebruik** lys die onderdele wat dit hou, met elke onderdeel se hersiening en status. **Gebruik deur** op 'n onderdeel lys elke samestelling wat dit hou. {{ui:Materiaallys (CSV)}} stoor die hele onderdeellys, vlak vir vlak, met hoeveelhede, hersienings en statusse, vir 'n sigblad. Verander 'n beugel, en **Gebruik deur** sê vir jou watter samestellings om na te kyk.

## 7. Wat Ben sien terwyl jy die lêer hou

Kies die lêer nou weer uit en vra Ben om dieselfde projekvouer op sy rekenaar oop te maak en die paneel oop te maak. Op die lêer se ry sien hy **Uitgeneem deur Ana op** jou rekenaar **sedert** die tyd, en geen {{ui:Neem uit}}-knoppie nie. As hy tog probeer, weier die kluis. Die slot is 'n lêer wat die stelsel nie twee keer sal maak nie, so twee mense kan nie albei die lêer hou nie, selfs nie in dieselfde splitsekonde nie, wanneer die vouer op skyf in Studio is. (In 'n blaaier laat die vouer slegs 'n beste poging toe, en die paneel sê dit onder **Vouer**.)

As Ana weg is en Ben die lêer nodig het, {{ui:Breek uitneem}} maak dit vry. Hy moet 'n rede tik. Dit gaan in die logboek saam met wie se uitneem dit was. Wanneer die projek admins lys, kan net hulle. 'n Uitneem ouer as die verouderingsgrens (standaard 14 dae) word gemerk *lank*. Na die breek word Ana se laat inlewering geweier, sodat julle mekaar nie kan oorskryf nie.

## 8. Wolkvouers

'n Wolkvouer is 'n projekvouer wat in jou span se wolkberging gehou word, so die span het geen gedeelde skyf nodig nie. In Studio, aangemeld by jou CadCraft-rekening, wys die paneel {{ui:Maak 'n wolkvouer oop}} langs {{ui:Kies die projekvouer}}. Kies dit en kies die vouer, gelys as werkruimte / vouer. 'n Werkruimte-eienaar maak die vouer eers, en die span se wolkberging moet in werking wees. Alles hierbo werk dieselfde. Die bediener maak die slot, wat streng oor mense heen is. As jy nie aangemeld is nie, sê die paneel om aan te meld. In 'n gewone blaaiertabblad word die wolkknoppie nie aangebied nie; gebruik Studio.

## Probeer dit

Doen die agt stappe hierbo met 'n kopie van 'n werklike lêer. Vir die twee-persoon-stappe het jy 'n ander persoon nodig, of twee vensters met twee name. As jy dit met 'n werklike gedeelde vouer probeer, lys die Gemeenskapstoetsbladsy 'n toets wat presies dit vra, en neem resultate.
