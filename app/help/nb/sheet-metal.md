---
title: Plateverk: flenser og det flate mønsteret
summary: Start en platedel fra en skisse (en flat plate eller en bøyd profil), sett tykkelse, bøyeradius og K-faktor én gang, bøy flenser opp fra kantene med bøyeavlastninger, og legg den flatt som DXF for kutting.
keywords: flatt mønster, folde ut, utvikling, utviklet lengde, bøyetillegg, bøylinje, dxf for laser, laserkutting, plateverk, grunnflens, kantflens, flens, bøy, bøyeradius, k-faktor, k factor, tykkelse, platetykkelse, avlastning, bøyeavlastning, kanal, konsoll, kabinett, bøyd plate
from: 144bd0f6
---

:::note
**Ikke bygget ennå i denne versjonen.** Plateverk trenger en eksakt geometrikjerne, som denne versjonen av PartCraft ikke har: den bygger hver del med nettkjernen. [Hva som ikke er bygget ennå](topic:not-built-yet) forteller hva du skal gjøre i stedet. Resten av denne siden beskriver det slik det fungerer med en eksakt kjerne.
:::

Platedeler starter med en **Grunnflens**. Den setter platen for hele delen: dens **tykkelse**, den **innvendige bøyeradiusen** og **K-faktoren**. Hver **Kantflens** etter den bøyes med de samme tallene, slik at delen forblir én plate som kan foldes ut. Begge krever den **eksakte kjernen** (se [Nettkjernen](topic:solid-kernels)).

## Start med en grunnflens

1. Tegn en skisse. Bruk en **lukket profil** for en flat plate (et rektangel, eller en hvilken som helst lukket kontur med hull). Bruk **én åpen kjede av linjer** for en bøyd plate, som en L, en U eller en Z tegnet som platens kantriss.
2. Velg skissen i funksjonshistorikken.
3. Åpne {{ui:Mer}} i gruppen Funksjoner og velg {{ui:Grunnflens}}.

I panelet til høyre:

- **Tykkelse (mm)** er platens platetykkelse.
- **Bøyeradius (mm)** er den innvendige radiusen for hver bøy. 0 gir et skarpt innvendig hjørne; utsiden bøyer seg likevel med en radius lik én tykkelse.
- **K-faktor** sier hvor det nøytrale laget ligger inne i platen, fra 0 (innsiden) til 0,5 (midten). Den avgjør hvor lang platen er når den er lagt flatt. 0,44 er standard; verkstedet ditt eller materialleverandøren kan gi deg din egen.
- **Dybde (mm)** er hvor langt en bøyd profil går ut fra skisseplanet. En plate ignorerer den.
- **Tykkelse utenfor bøyene**: en åpen profil er én flate av platen. Som standard går tykkelsen på innsiden av den første bøyen, slik at linjene du tegnet, er utsiden av kanalen. Kryss av for å legge linjene på innsiden i stedet. Svaret er det samme uansett hvilken ende du tegnet fra.

Hvert hjørne i en åpen kjede blir en bøy. En linje som er for kort til å holde bøyene sine, sier det, med lengden den trenger.

## Bøy en kantflens

1. Klikk på en rett kant på platens øvre eller nedre flate (de lange kantene, ikke de tynne).
2. Velg {{ui:Mer}} › {{ui:Kantflens}}. Uten valgt kant venter PartCraft på at du klikker en; Esc avbryter.

Flensen bøyes opp fra kantens flate rundt platens innvendige radius, og løper så rett. I panelet:

- **Vinkel (°)** er hvor langt den bøyes, fra 1 til 180. 90 er en kvadratisk flens.
- **Lengde (mm)** er det rette benet etter bøyen.
- **Bøy den andre veien** bøyer den fra den andre flaten (ned i stedet for opp).
- **Forskyvning ved start** og **Forskyvning ved slutt** forkorter flensen fra hver ende av kanten.
- **Bøyeavlastning**: når en ende er forskjøvet, skjæres et spor inn i platen ved siden av den, slik at bøyen ikke river metallet der. **Avlastningsbredde** setter sporets bredde; dybden er bøyeradiusen pluss tykkelsen. Velg **Ingen** for å la hjørnet være uskåret.

For å endre kanten senere, trykk {{ui:Velg}} i panelet og klikk på en annen.

:::tip
Bruk parametere for tykkelsen og radiusen (se [Parametere og ligninger](topic:parameters)), slik at en endring av platetykkelse oppdaterer alle flenser samtidig.
:::

## Legg den flatt

Begge panelene slutter med **Flatt mønster**. Trykk {{ui:Legg flatt}}:

- En forhåndsvisning viser platen utfoldet, med hver bøyes midtlinje stiplet.
- **Størrelse** og **Areal** er for det flate emnet.
- Hver bøy er oppført med retningen sin (**opp** eller **ned**, sett fra grunnflensens skisseside), vinkel og innvendig radius.

Hver bøy tar lengden av platens nøytrale lag gjennom seg, **bøyetillegget**: vinkel (i radianer) × (innvendig radius + K-faktor × tykkelse). En 90° bøy av en 2 mm plate med 2 mm radius og K-faktor 0,44 legger altså til 4,52 mm flat plate.

På en flat plate vises hull, kutt og bøyeavlastninger i det flate der de virkelig er, også hull gjennom en flens.

For å kutte mange, trykk {{ui:Nest på plater…}} under det flate mønsteret: se [Nest flate deler på plater](topic:nest-flat-parts). En bøyd grunnflens legges ut som ett rektangel: dens utviklede lengde × dybden, med en bøylinje per hjørne.

{{ui:Lagre DXF}} lagrer det flate mønsteret for en laser, stanse eller vannskjærer, i millimeter:

- konturen på laget **OUTLINE**, som linjer, buer og sirkler;
- bøylinjene på laget **BEND**, stiplet;
- en merknad for hver bøy på laget **BEND_NOTES**, for eksempel «UP 90° R2».

Endrer du noe, forsvinner det flate; trykk {{ui:Legg flatt}} igjen for et nytt.

:::note
Kontroller K-faktoren med verkstedet ditt før du kutter: lengden på det flate avhenger av den, og den varierer med materiale, tykkelse og verktøy.
:::

## Meldinger

- **Plateverk trenger en grunnflens før denne** — en kantflens ble lagt til før noen grunnflens. Flytt den under en, eller legg til en grunnflens først.
- **En kantflens trenger en rett kant** — flenser bøyes bare langs linjer; buede kanter kan ikke ta én ennå.
- **Den kanten er ikke på en flate av platens tykkelse** — kanten tilhører en flate som ikke er platens øvre eller nedre flate (for eksempel veggen i et hull). Velg en kant på den øvre eller nedre flaten.
- **Forskyvningene etterlater ingenting av kanten** — de to forskyvningene legges sammen til hele kanten eller mer.
- **Kantflenser på en bøyd grunnflens kan ikke legges flatt ennå** — start fra en flat plate og bøy alt opp med kantflenser, som folder ut.
- **Kutt og hull laget etter en bøyd grunnflens vises ikke i det flate ennå** — det flate av en bøyd profil er bare dets utviklede rektangel.
