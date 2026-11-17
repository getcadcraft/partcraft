---
title: Pladeemne: flanger og det flade mønster
summary: Start en pladeemnedel fra en skitse (en flad plade eller en bøjet profil), sæt dens tykkelse, bøjeradius og K-faktor én gang, bøj flanger op fra dens kanter med bøjeudskæringer, og læg den flad som en DXF til skæring.
keywords: flad mønster, udfold, udvikling, udviklet længde, bøjetillæg, bøjelinje, dxf til laser, lasersskæring, pladeemne, basisflange, kantflange, flange, bøjning, bøjeradius, k-faktor, k faktor, tykkelse, plademål, udskæring, bøjeudskæring, kanal, beslag, kabinet, bøjet plade
from: 144bd0f6
---

:::note
**Endnu ikke bygget i denne version.** Pladeemne kræver en præcis geometrikerne, som denne version af PartCraft ikke har: den bygger alle dele med mesh-kernen. [Hvad der endnu ikke er bygget](topic:not-built-yet) siger, hvad du gør i stedet. Resten af siden beskriver, hvordan det virker med en præcis kerne.
:::

Pladeemnedele starter med en **basisflange**. Den sætter pladen for hele delen: dens **tykkelse**, den **indvendige bøjeradius** og **K-faktoren**. Hver **kantflange** efter den bøjer med præcis de samme tal, så delen forbliver én plade, der kan udfoldes. Begge kræver **den præcise kerne** (se [mesh-kernen](topic:solid-kernels)).

## Start med en basisflange

1. Tegn en skitse. Brug en **lukket profil** til en flad plade (et rektangel eller en lukket kontur med huller). Brug **én åben kæde af linjer** til en bøjet plade, for eksempel et L, et U eller et Z tegnet som pladens sidevisning.
2. Vælg skitsen i feature-historikken.
3. Åbn {{ui:Mere}} i gruppen Features og vælg {{ui:Basisflange}}.

I panelet til højre:

- **Tykkelse (mm)** er pladens plademål.
- **Bøjeradius (mm)** er den indvendige radius på hver bøjning. 0 giver et skarpt indvendigt hjørne; ydersiden drejer stadig med en radius på én tykkelse.
- **K-faktor** siger, hvor det neutrale lag ligger i pladen, fra 0 (indvendig flade) til 0.5 (midten). Den afgør, hvor lang pladen er, når den er lagt flad. 0.44 er standard; dit værksted eller din materialeleverandør kan give dig deres.
- **Dybde (mm)** er, hvor langt en bøjet profil går ud af skitseplanet. En plade ignorerer den.
- **Tykkelse uden for bøjningerne**: en åben profil er én flade af pladen. Som standard går tykkelsen på indersiden af den første bøjning, så de linjer, du tegnede, er ydersiden af kanalen. Sæt flueben for at lægge linjerne på indersiden i stedet. Svaret er det samme, uanset hvilken ende du tegnede fra.

Hvert hjørne i en åben kæde bliver en bøjning. En linje, der er for kort til at rumme sine bøjninger, siger det med den længde, den kræver.

## Bøj en kantflange

1. Klik på en lige kant på pladens øvre eller nedre flade (de lange kanter, ikke de tynde).
2. Vælg {{ui:Mere}} › {{ui:Kantflange}}. Uden valgt kant venter PartCraft, til du klikker på en. Esc annullerer.

Flangen bøjer op fra kantens flade omkring pladens indvendige radius og løber derefter lige ud. I panelet:

- **Vinkel (°)** er, hvor meget den bøjer, fra 1 til 180. 90 er en kvadratisk flange.
- **Længde (mm)** er det lige ben efter bøjningen.
- **Bøj den anden vej** bøjer den fra den anden flade (ned i stedet for op).
- **Forskydning i starten** og **Forskydning i slutningen** forkorter flangen fra hver ende af kanten.
- **Bøjeudskæring**: når en ende er forskudt, skæres en slids ind i pladen ved siden af, så bøjningen ikke river metallet der. **Udskæringsbredde** sætter slidsens bredde. Dens dybde er bøjeradius plus tykkelsen. Vælg **Ingen** for at lade hjørnet være uskåret.

For at ændre kanten senere trykkes {{ui:Vælg}} i panelet, og du klikker på en anden.

:::tip
Brug parametre til tykkelse og radius (se [Parametre og ligninger](topic:parameters)), så en ændring af plademålet opdaterer alle flanger på én gang.
:::

## Læg den flad

Begge paneler slutter med **Fladt mønster**. Tryk {{ui:Fold ud}}:

- En forhåndsvisning viser pladen udfoldet, med hver bøjnings midterlinje stiplet.
- **Størrelse** og **Areal** er de for det flade emne.
- Hver bøjning vises med sin retning (**op** eller **ned**, set fra basisflangens skitseside), vinkel og indvendige radius.

Hver bøjning tager længden af pladens neutrale lag gennem den, **bøjetillægget**: vinkel (i radianer) × (indvendig radius + K-faktor × tykkelse). En 90° bøjning af en 2 mm plade med 2 mm radius og K-faktor 0.44 lægger altså 4.52 mm til den flade plade.

På en flad plade vises huller, udskæringer og bøjeudskæringer i det flade, hvor de virkelig er, også huller gennem en flange.

For at skære mange dele trykkes {{ui:Nest på plader…}} under det flade mønster: se [Nest flade dele på plader](topic:nest-flat-parts). En bøjet basisflange lægges ud som ét rektangel: dens udviklede længde × dens dybde, med en bøjelinje pr. hjørne.

{{ui:Gem DXF}} gemmer det flade mønster til en laser, stanse eller vandskærer, i millimeter:

- konturen på laget **OUTLINE**, som linjer, buer og cirkler;
- bøjelinjerne på laget **BEND**, stiplet;
- en note på hver bøjning på laget **BEND_NOTES**, for eksempel "UP 90° R2".

Ændrer du noget, forsvinder det flade mønster. Tryk {{ui:Fold ud}} igen for det nye.

:::note
Kontrollér K-faktoren med dit værksted, før du skærer: det flades længde afhænger af den, og den varierer med materiale, tykkelse og værktøj.
:::

## Meddelelser

- **Pladeemne kræver en basisflange før sig** — en kantflange blev tilføjet, før nogen basisflange fandtes. Flyt den under en, eller tilføj først en basisflange.
- **En kantflange kræver en lige kant** — flanger bøjer kun langs linjer; buede kanter kan endnu ikke tage en.
- **Den kant er ikke på en flade af pladens tykkelse** — kanten hører til en flade, der ikke er pladens øvre eller nedre (for eksempel et huls væg). Vælg en kant på den øvre eller nedre flade.
- **Forskydningerne efterlader intet af kanten** — de to forskydninger lægger sig sammen til hele kanten eller mere.
- **Kantflanger på en bøjet basisflange kan endnu ikke lægges flade** — start fra en flad plade, og bøj alt op med kantflanger, som kan udfoldes.
- **Udskæringer og huller lavet efter en bøjet basisflange vises endnu ikke i dens flade** — det flade mønster af en bøjet profil er kun dets udviklede rektangel.
