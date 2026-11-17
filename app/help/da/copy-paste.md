---
title: Kopiér, sæt ind og duplikér
summary: Kopiér skitsegeometri, features og samlingsdele; sæt ind, hvor du klikker, eller på samme sted; duplikér i ét trin; og hvad der følger med en kopi, og hvad der ikke gør.
keywords: kopiér, sæt ind, klip, duplikér, udklipsholder, sæt ind på samme sted, vælg alle, fravælg alle, slet, ctrl c, ctrl v, ctrl d, instans, komponent, kopiér skitse, kopiér feature, kopiér del
from: 611307d7
---

Gruppen {{ui:Rediger}} på værktøjslinjen rummer {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}}, {{ui:Sæt ind}} og en menu {{ui:Mere}} med {{ui:Klip}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Sæt ind på samme sted}}, {{ui:Duplikér}}, {{ui:Slet}}, {{ui:Vælg alle}} og {{ui:Fravælg alle}}, hver med sin tast. Hvad de kopierer, afhænger af hvor du er: geometri i en åben skitse, en feature i historikken eller en del i en samling.

En nedtonet post kan ikke virke lige nu. Hold musen over den: tooltippen siger hvorfor, fx "Vælg skitsegeometri først" eller "Udklipsholderen indeholder Sketch2 og Extrude2: features sættes ind i historikken, så afslut skitsen først".

| Handling | Tast | I en skitse | I historikken | I en samling |
|---|---|---|---|---|
| Kopiér | {{key:Mod+C}} | De valgte punkter og kurver | Den valgte skitse, ekstrudering, drejning eller det valgte hul (med sin skitse) | Den valgte del |
| Klip | {{key:Mod+X}} | Kopiér, derefter slet dem | Kopiér, derefter slet featuren | Kopiér, derefter fjern delen |
| Sæt ind | {{key:Mod+V}} | Kopien følger markøren; klik hvor den skal | Tilføjer kopien til slutningen af historikken | En ny kopi ved siden af de andre dele |
| Sæt ind på samme sted | {{key:Mod+Shift+V}} | Ved de samme koordinater | Samme som Sæt ind | På samme sted som den kopierede del |
| Duplikér | {{key:Mod+D}} | Kopiér og flyt i ét hug; udklipsholderen lades være | En anden kopi lige efter din | En anden kopi ved siden af de andre dele |
| Slet | {{key:Delete}} | Valget | Featuren (spørger, hvis andre bruger den) | Delen eller leddet |
| Vælg alle | {{key:Mod+A}} | Alt i skitsen | Ikke tilgængelig | Ikke tilgængelig |
| Fravælg alle | {{key:Esc}} | Fjerner valget | Fjerner valget og valgene | Fjerner valget |

Hver indsætning, duplikering og klipning er ét trin i fortrydelseslisten: {{key:Mod+Z}} fortryder det, {{key:Mod+Y}} gentager det.

## I en skitse

1. Vælg det, der skal kopieres: klik på det, {{key:Shift}}+klik for flere, træk et vindue, eller tryk {{key:Mod+A}} for alt.
2. Tryk {{key:Mod+C}} eller vælg {{ui:Kopiér}}. Statuslinjen siger, hvad der blev kopieret.
3. Tryk {{key:Mod+V}} eller vælg {{ui:Sæt ind}}. En stiplet kopi følger markøren, holdt ved sin midte. Den hægter sig på punkter: placér en kopieret cirkels centrum på et punkt ved at klikke på det punkt.
4. Klik, hvor den skal. Den indsatte geometri forbliver valgt, så du straks kan trække i den eller tilføje relationer. {{key:Esc}} annullerer indsætningen.

Det, der følger med:

- En kopieret linje, cirkel eller bue medbringer sine egne endepunkter og centrum.
- Relationer og mål **mellem de kopierede elementer** følger med: et kopieret rektangel er stadig et rektangel med sine størrelser.
- Relationer **til geometri, du ikke kopierede**, og til origo, falder bort. Statuslinjen tæller dem: "2 relations to geometry outside the copy will not come along". En indsat kopi kan derfor flyttes frit, indtil du binder den fast med relationer eller mål.
- Et fast punkt forbliver fast, på sin nye position.

{{ui:Sæt ind på samme sted}} placerer kopien præcis på originalens koordinater, i denne skitse eller i en anden: praktisk til at flytte en profil fra én skitse til en anden. I samme skitse ligger kopien oven på originalen; træk den væk.

{{ui:Duplikér}} ({{key:Mod+D}}) kopierer valget og begynder straks at placere det, uden at røre ved det, der ligger i udklipsholderen.

:::tip
For at gentage et hulcentrum eller et spor flere gange kopierer du det én gang og sætter det ind flere gange: hver {{key:Mod+V}} starter en ny kopi, der følger markøren.
:::

## I historikken

1. Klik på en skitse, en ekstrudering, en drejning eller et hul i historikken.
2. {{key:Mod+C}} kopierer den. En skitsebaseret feature kopieres sammen med sin skitse.
3. {{key:Mod+V}} tilføjer kopien til slutningen af historikken (ved rullebjælken, når du har rullet tilbage) med nye navne såsom Sketch3 og Extrude2.

Kopien sidder på samme plan eller flade som originalen, så den bygges oven på den, og delen ser ens ud. Vælg den nye skitse og skift dens plan i højre panel, eller åbn den og træk i profilen eller ændr dens mål, for at flytte kopien.

- Indsæt i **en anden del**: åbn den del og tryk {{key:Mod+V}}. Når kopiens skitse lå på en flade, som den del ikke har, lægges den på frontplanet, og statuslinjen siger det.
- {{ui:Duplikér}} kopierer og indsætter i ét trin inden for samme del.
- {{ui:Klip}} kopierer featuren og sletter den derefter (og spørger først, hvis andre features bruger den).

Mønstre, spejle, afrundinger, affasninger, skaller og importerede massive legemer kan ikke kopieres: de hænger på kanter, flader eller features valgt i denne del. Kopiér i stedet skitsen eller featuren, de er bygget på, eller lav et mønster af den med {{ui:Lineær}} eller {{ui:Cirkulær}}.

## I en samling

1. Klik på en del i visningen eller i listen til venstre.
2. Vælg {{ui:Duplikér}} ({{key:Mod+D}}), eller {{key:Mod+C}} og derefter {{key:Mod+V}}.

Den nye kopi er **den samme del**: redigerer du én, ændrer alle kopier sig. Den vises 20 mm til højre for alt, der allerede er i samlingen, vendt på samme måde som kopien, og bliver der, indtil et led placerer den. {{ui:Sæt ind på samme sted}} ({{key:Mod+Shift+V}}) placerer den præcis, hvor den kopierede del er; forbind den for at flytte den (et skydende leds forskydning skubber den langs aksen).

Indsætning af en del kopieret fra en anden samling medbringer delen, ligesom {{ui:Indsæt}} fra dens fil. {{ui:Tilføj kopi}} i gruppen Samling gør det samme som {{ui:Duplikér}} og virker, når intet er valgt (den kopierer den sidste del).

## Udklipsholderen

- Det er PartCrafts egen udklipsholder, ikke computerens: du kan ikke indsætte PartCraft-geometri i et andet program, eller tekst i PartCrafts visninger.
- Den gemmes i denne browser, så en anden PartCraft-fane kan indsætte det, du kopierede. Den læses tilbage og kontrolleres ligesom en åbnet fil; alt, der er beskadiget eller fra en anden version, afvises.
- En del med en stor importeret STEP-fil kan være for stor til, at browseren kan gemme den: den indsættes så kun i denne fane.
- I et talfelt eller hjælpesøgningen kopierer og indsætter {{key:Mod+C}} og {{key:Mod+V}} tekst som sædvanligt.

På tegningsarket er kopiering og indsætning endnu ikke tilgængelig; {{ui:Slet}} og {{ui:Fravælg alle}} virker på det valgte symbol. Se [Ikke lavet endnu](topic:not-built-yet).
