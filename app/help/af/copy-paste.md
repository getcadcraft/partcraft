---
title: Kopieer, plak en dupliseer
summary: Kopieer skets-geometrie, kenmerke en samestellingsonderdele; plak waar jy klik of op dieselfde plek; dupliseer in een stap; en wat saam met 'n kopie kom en wat nie.
keywords: kopieer, plak, knip, dupliseer, knipbord, plak op dieselfde plek, kies alles, kies niks, skrap, ctrl c, ctrl v, ctrl d, instansie, komponent, kopieer skets, kopieer kenmerk, kopieer onderdeel
from: 611307d7
---

Die {{ui:Wysig}}-groep in die werkbalk hou {{ui:Ontdoen}}, {{ui:Herdoen}}, {{ui:Kopieer}}, {{ui:Plak}} en 'n {{ui:Meer}}-kieslys met {{ui:Knip}}, {{ui:Kopieer}}, {{ui:Plak}}, {{ui:Plak op dieselfde plek}}, {{ui:Dupliseer}}, {{ui:Skrap}}, {{ui:Kies alles}} en {{ui:Kies niks}}, elk met sy sleutel. Wat hulle kopieer, hang af van waar jy is: geometrie in 'n oop skets, 'n kenmerk in die geskiedenis, of 'n onderdeel in 'n samestelling.

'n Grys item kan nou nie optree nie. Hou die muis daarop: die gereedskaptip sê waarom, byvoorbeeld "Kies eers skets-geometrie" of "Die knipbord hou Sketch2 en Extrude2: kenmerke plak in die geskiedenis, so verlaat eers die skets".

| Aksie | Sleutel | In 'n skets | In die geskiedenis | In 'n samestelling |
|---|---|---|---|---|
| Kopieer | {{key:Mod+C}} | Die gekose punte en krommes | Die gekose skets, ekstrusie, omwenteling of gat (met sy skets) | Die gekose onderdeel |
| Knip | {{key:Mod+X}} | Kopieer, dan skrap hulle | Kopieer, dan skrap die kenmerk | Kopieer, dan verwyder die onderdeel |
| Plak | {{key:Mod+V}} | Die kopie volg die wyser; klik waar dit gaan | Voeg die kopie by die einde van die geskiedenis | 'n Nuwe kopie langs die ander onderdele |
| Plak op dieselfde plek | {{key:Mod+Shift+V}} | By dieselfde koördinate | Dieselfde as Plak | Op dieselfde plek as die gekopieerde onderdeel |
| Dupliseer | {{key:Mod+D}} | Kopieer en skuif in een slag; die knipbord word met rus gelaat | 'n Tweede kopie net ná jou | 'n Tweede kopie langs die ander onderdele |
| Skrap | {{key:Delete}} | Die keuse | Die kenmerk (vra as ander dit gebruik) | Die onderdeel of verbinding |
| Kies alles | {{key:Mod+A}} | Alles in die skets | Nie beskikbaar nie | Nie beskikbaar nie |
| Kies niks | {{key:Esc}} | Maak die keuse skoon | Maak die keuse en kiese skoon | Maak die keuse skoon |

Elke plak, dupliseer en knip is een stap in die ontdoenlys: {{key:Mod+Z}} neem dit terug, {{key:Mod+Y}} plaas dit terug.

## In 'n skets

1. Kies wat om te kopieer: klik dit, {{key:Shift}}+klik vir meer, sleep 'n venster, of druk {{key:Mod+A}} vir alles.
2. Druk {{key:Mod+C}} of kies {{ui:Kopieer}}. Die statusbalk sê wat gekopieer is.
3. Druk {{key:Mod+V}} of kies {{ui:Plak}}. 'n Gestreepte kopie volg die wyser, by die middel vasgehou. Dit snap na punte: plaas 'n gekopieerde sirkel se middelpunt op 'n punt deur op daardie punt te klik.
4. Klik waar dit gaan. Die geplakte geometrie bly gekies, so jy kan dit dadelik sleep of verhoudings daarby voeg. {{key:Esc}} kanselleer die plak.

Wat saam kom:

- 'n Gekopieerde lyn, sirkel of boog bring sy eie eindpunte en middelpunt saam.
- Verhoudings en maate **tussen gekopieerde items** kom saam: 'n gekopieerde reghoek is steeds 'n reghoek, met sy groottes.
- Verhoudings **na geometrie wat jy nie gekopieer het nie**, en na die oorsprong, word laat val. Die statusbalk tel hulle: "2 verhoudings na geometrie buite die kopie sal nie saamkom nie". So 'n geplakte kopie is vry om te beweeg totdat jy dit met verhoudings of maate vasmaak.
- 'n Vaste punt bly vas, by sy nuwe posisie.

{{ui:Plak op dieselfde plek}} plaas die kopie presies op die oorspronklike se koördinate, in hierdie skets of 'n ander een: handig om 'n profiel van een skets na 'n ander te bring. In dieselfde skets lê die kopie bo-op die oorspronklike; sleep dit weg.

{{ui:Dupliseer}} ({{key:Mod+D}}) kopieer die keuse en begin dit dadelik plaas, sonder om aan wat op die knipbord is te raak.

:::tip
Om 'n gathart of 'n gleuf verskeie kere te herhaal, kopieer dit een keer en plak dit verskeie kere: elke {{key:Mod+V}} begin 'n nuwe kopie wat die wyser volg.
:::

## In die geskiedenis

1. Klik 'n skets, 'n ekstrusie, 'n omwenteling of 'n gat in die geskiedenis.
2. {{key:Mod+C}} kopieer dit. 'n Skets-gebaseerde kenmerk word saam met sy skets gekopieer.
3. {{key:Mod+V}} voeg die kopie by die einde van die geskiedenis (by die terugrolbalk as jy teruggerol het), met nuwe name soos Sketch3 en Extrude2.

Die kopie sit op dieselfde vlak of vlak as die oorspronklike, so dit bou bo-op dit en die onderdeel lyk dieselfde. Kies die nuwe skets en verander sy vlak in die regterpaneel, of maak dit oop en sleep of herdimensioneer die profiel, om die kopie te skuif.

- Plak in **'n ander onderdeel**: maak daardie onderdeel oop en druk {{key:Mod+V}}. As die kopie se skets op 'n vlak was wat daardie onderdeel nie het nie, gaan dit op die voorvlak, en die statusbalk sê so.
- {{ui:Dupliseer}} doen kopieer en plak in een stap, binne dieselfde onderdeel.
- {{ui:Knip}} kopieer die kenmerk, dan skrap dit (vra eers as ander kenmerke dit gebruik).

Patrone, spieëls, afrondings, skuinssnitte, dope en ingevoerde soliede kan nie gekopieer word nie: hulle hang aan rande, vlakke of kenmerke wat in hierdie onderdeel gekies is. Kopieer eerder die skets of die kenmerk waarop hulle gebou is, of patroon dit met {{ui:Lineêr}} of {{ui:Sirkulêr}}.

## In 'n samestelling

1. Klik 'n onderdeel in die aansig of in die lys aan die linkerkant.
2. Kies {{ui:Dupliseer}} ({{key:Mod+D}}), of {{key:Mod+C}} dan {{key:Mod+V}}.

Die nuwe kopie is dieselfde onderdeel: wysig een en elke kopie verander. Dit verskyn 20 mm regs van alles wat reeds in die samestelling is, gedraai soos die kopie, en bly daar totdat 'n verbinding dit plaas. {{ui:Plak op dieselfde plek}} ({{key:Mod+Shift+V}}) plaas dit presies waar die gekopieerde onderdeel is; verbind dit om dit te skuif (' n skuifverbinding se verskuiwing stoot dit langs).

Om 'n onderdeel wat uit 'n ander samestelling gekopieer is te plak, bring die onderdeel saam, net soos {{ui:Voeg in}} uit sy lêer. {{ui:Voeg kopie by}} in die Samestelling-groep doen dieselfde as {{ui:Dupliseer}}, en werk met niks gekies nie (dit kopieer die laaste onderdeel).

## Die knipbord

- Dit is PartCraft se eie knipbord, nie die rekenaar s'n nie: jy kan nie PartCraft-geometrie in 'n ander program plak, of teks in PartCraft se aansigte nie.
- Dit word in hierdie blaaier gehou, so 'n ander PartCraft-oortjie kan plak wat jy gekopieer het. Dit word gelees en nagegaan soos 'n oopgemaakte lêer; enigiets beskadig of van 'n ander weergawe word geweier.
- 'n Onderdeel met 'n groot ingevoerde STEP-lêer is dalk te groot vir die blaaier om te hou: dit plak dan net in hierdie oortjie.
- In 'n getalblokkie of die hulpsoektog kopieer en plak {{key:Mod+C}} en {{key:Mod+V}} teks soos gewoonlik.

Op die tekeningblad is kopieer en plak nog nie beskikbaar nie; {{ui:Skrap}} en {{ui:Kies niks}} werk op die gekose simbool. Sien [Nog nie gebou nie](topic:not-built-yet).
