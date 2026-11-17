---
title: Plåt: flänsar och plattmönstret
summary: Starta en plåtdel från en skiss (en plan platta eller en böjd profil), ställ in tjockleken, böjradien och K-faktorn en gång, böj flänsar upp från dess kanter med böjavlastningar, och lägg ut den platt som DXF för skärning.
keywords: plattmönster, veckla ut, utveckling, utvecklad längd, böjtillägg, böjlinje, dxf för laser, lasersskärning, plåt, basfläns, kantfläns, fläns, böj, böjradie, k-faktor, k faktor, tjocklek, plåttjocklek, avlastning, böjavlastning, kanalprofil, fäste, hölje, böjd plåt
from: 144bd0f6
---

:::note
**Finns inte ännu i den här versionen.** Plåt kräver en exakt geometrikärna, vilket den här versionen av PartCraft inte har: den bygger alla delar med nätkärnan. [Vad som inte finns ännu](topic:not-built-yet) beskriver vad du gör i stället. Resten av sidan beskriver hur det fungerar med en exakt kärna.
:::

Plåtdelar börjar med en **Basfläns**. Den anger plåten för hela delen: dess **tjocklek**, den **inre böjradien** och **K-faktorn**. Varje **Kantfläns** efter den böjs med exakt samma tal, så delen förblir en plåt som kan vecklas ut. Båda kräver den **exakta kärnan** (se [Nätkärnan](topic:solid-kernels)).

## Börja med en basfläns

1. Rita en skiss. Använd en **sluten profil** för en plan platta (en rektangel, eller valfri sluten kontur med hål). Använd **en öppen kedja av linjer** för en böjd plåt, till exempel ett L, ett U eller ett Z ritat som plåtens kantvy.
2. Markera skissen i funktionshistoriken.
3. Öppna {{ui:Mer}} i gruppen Funktioner och välj {{ui:Basfläns}}.

I panelen till höger:

- **Tjocklek (mm)** är plåtens tjocklek.
- **Böjradie (mm)** är den inre radien för varje böj. 0 ger ett skarpt inre hörn; utsidan vänds ändå med en radie på en tjocklek.
- **K-faktor** anger var det neutrala lagret sitter inne i plåten, från 0 (insidan) till 0.5 (mitten). Den avgör hur lång plåten är när den läggs platt. 0.44 är standard; din verkstad eller materialleverantör kan ge dig din egen.
- **Djup (mm)** är hur långt en böjd profil går ut ur skissens plan. En platta ignorerar det.
- **Tjocklek utanför böjarna**: en öppen profil är en yta av plåten. Som standard läggs tjockleken på insidan av första böjen, så de linjer du ritade är kanalens utsida. Markera den för att lägga linjerna på insidan i stället. Svaret blir detsamma oavsett från vilken ände du ritade.

Varje hörn i en öppen kedja blir en böj. En linje som är för kort för att bära sina böjar säger det, med längden den behöver.

## Böj en kantfläns

1. Klicka på en rak kant på plåtens övre eller undre yta (de långa kanterna, inte de tunna).
2. Välj {{ui:Mer}} › {{ui:Kantfläns}}. Utan vald kant väntar PartCraft tills du klickar på en; Esc avbryter.

Flänsen böjs upp från den kantens yta runt plåtens inre radie, och går sedan rakt. I panelen:

- **Vinkel (°)** är hur mycket den böjs, från 1 till 180. 90 är en rät fläns.
- **Längd (mm)** är det raka benet efter böjen.
- **Böj åt andra hållet** böjer den från den andra ytan (ner i stället för upp).
- **Förskjutning vid början** och **Förskjutning vid slutet** förkortar flänsen från varje ände av kanten.
- **Böjavlastning**: när en ände är förskjuten skärs ett spår in i plåten bredvid den, så att böjen inte river metallen där. **Avlastningens bredd** anger spårets bredd; dess djup är böjradien plus tjockleken. Välj **Ingen** för att lämna hörnet oskuret.

För att ändra kanten senare, tryck på {{ui:Välj}} i panelen och klicka på en annan.

:::tip
Använd parametrar för tjockleken och radien (se [Parametrar och ekvationer](topic:parameters)) så att en ändring av plåttjockleken uppdaterar alla flänsar på en gång.
:::

## Lägg ut den platt

Båda panelerna slutar med **Plattmönster**. Tryck på {{ui:Lägg ut}}:

- En förhandsvisning visar plåten utvikt, med varje böjs mittlinje streckad.
- **Storlek** och **Area** är de för den platta emnet.
- Varje böj listas med sin riktning (**upp** eller **ner**, sett från basflänsens skisssida), vinkel och inre radie.

Varje böj tar längden av plåtens neutrala lager genom den, **böjtillägget**: vinkel (i radianer) × (inre radie + K-faktor × tjocklek). En 90°-böj av en 2 mm plåt med 2 mm radie och K-faktor 0.44 lägger alltså till 4.52 mm platt plåt.

På en plan platta visas hål, skär och böjavlastningar i plattmönstret där de faktiskt sitter, inklusive hål genom en fläns.

För att skära många, tryck på {{ui:Nesta på plåtar…}} under plattmönstret: se [Nesta platta delar på plåtar](topic:nest-flat-parts). En böjd basfläns läggs ut som en rektangel: dess utvecklade längd × dess djup, med en böjlinje per hörn.

{{ui:Spara DXF}} sparar plattmönstret för en laser, stans eller vattenskärare, i millimeter:

- konturen på lagret **OUTLINE**, som linjer, bågar och cirklar;
- böjlinjerna på lagret **BEND**, streckade;
- en anteckning vid varje böj på lagret **BEND_NOTES**, till exempel "UP 90° R2".

Ändrar du något försvinner plattmönstret; tryck på {{ui:Lägg ut}} igen för ett nytt.

:::note
Kontrollera K-faktorn med din verkstad innan du skär: plattans längd beror på den, och den varierar med material, tjocklek och verktyg.
:::

## Meddelanden

- **Plåt behöver en basfläns före den** — en kantfläns lades till före någon basfläns. Flytta den under en, eller lägg till en basfläns först.
- **En kantfläns behöver en rak kant** — flänsar böjs bara längs linjer; böjda kanter kan inte ta en ännu.
- **Den kanten finns inte på en yta med plåtens tjocklek** — kanten tillhör en yta som inte är plåtens över- eller undersida (till exempel ett håls vägg). Välj en kant på över- eller undersidan.
- **Förskjutningarna lämnar ingenting av kanten** — de två förskjutningarna är tillsammans hela kanten eller mer.
- **Kantflänsar på en böjd basfläns kan inte läggas platt ännu** — börja från en plan platta och böj allt upp med kantflänsar, som vecklas ut.
- **Skär och hål som gjorts efter en böjd basfläns visas inte i dess platta ännu** — plattan för en böjd profil är bara dess utvecklade rektangel.
