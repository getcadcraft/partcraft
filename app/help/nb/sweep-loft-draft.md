---
title: Sveip, loft og trekkvinkel
summary: Sveip en lukket profil langs en bane av skisselinjer eller modellkanter, lag loft gjennom snitt på ulike plan, og legg trekkvinkel på flater; med alternativene, de nøyaktige resultatene og meldingene.
keywords: sveip, sveipet utstikker, sveipet utskjæring, rør, bane, loft, loftet utstikker, mellomsnitt, rett, trekkvinkel, trekkvinkel flater, nøytralplan, trekkretning, støping
from: 9d637981
---

:::note
**I denne versjonen** er ikke sveip og loft bygget ennå: de krever en nøyaktig geometrikjerne, som denne versjonen av PartCraft ikke har. [Hva som ikke er bygget ennå](topic:not-built-yet) forteller hva du kan gjøre i stedet; seksjonene Sveip og Loft beskriver dem slik de virker med en nøyaktig kjerne. **Trekkvinkel fungerer** på plane flater: nettkjernen bygger den, med samme resultat som en nøyaktig kjerne gir.
:::

Alle tre finnes i funksjonsgruppens {{ui:Mer}}-meny (se [Nettkjernen](topic:solid-kernels)). Hver kan legge til materiale, kutte det, beholde bare overlappen (**Skjæring**) eller lage en **Ny kropp** (sveip og loft: **Operasjon** i panelet).

## Sveip

Et sveip flytter en lukket profil langs en bane: rør, håndtak, fjærer av tråd, skinner.

1. Tegn **banen** i én skisse: linjer og buer satt sammen ende mot ende (eller bruk modellkanter, under).
2. Tegn **profilen** i en annen skisse der planet går gjennom den ene enden av banen, for eksempel en sirkel på toppplanet ved starten av en bane tegnet på forsiden.
3. Velg profilskissen og velg {{ui:Mer}}, deretter {{ui:Sveip}}. Den nyeste av de andre skissene blir banen.

I panelet:

| Innstilling | Hva den gjør |
|---|---|
| **Bane** | Kryss av skissene som utgjør banen (flere skisser settes sammen ende mot ende til én 3D-bane); **Velg modellkanter** legger til kanter fra delen |
| **Retning** | Følg banen (standard), Frenet, Fast (snittene holder seg parallelle med profilen), Behold en retning, Langs en styrekurve |
| **Sluttskala** | Profilen vokser eller krymper lineært til denne størrelsen ved enden (1 = konstant) |

Skarpe hjørner i banen gjæres. En sirkel med radius 5 sveipet langs en 100 mm linje er en sylinder på nøyaktig 2500π mm³; langs en kvartbue med radius 50, en kvart torus på 625π² mm³.

## Loft

Et loft går jevnt mellom to eller flere snitt på ulike plan.

1. Tegn hvert snitt i sin egen skisse (én lukket sløyfe hver), på grunnplan, referanseplan (se [Referanseplan, akser og punkter](topic:reference-geometry)) eller flater.
2. Velg {{ui:Mer}}, deretter {{ui:Loft}}. Hver ubrukte skisse med én sløyfe blir et snitt, i historikkrekkefølge.

Panelet viser snittene i rekkefølge (**Opp** endrer rekkefølgen, **Fjern** tar bort ett); **Legg til en skisse** legger til en ny, **Velg en flate** legger til en plan flate på delen. **Rett** lager rette flater mellom snittene i stedet for en glatt overgang. Mellom to kvadrater er begge det samme avkappede pyramiden (et 40 mm kvadrat til et 20 mm kvadrat over 30 mm: nøyaktig 28000 mm³).

Snitt med ulikt antall sider (et kvadrat til en trekant) blir matchet av OpenCascade, som kan vri sidene; funksjonen gir en advarsel. Tegn snittene med samme antall sider, og start fra tilsvarende hjørner, for det reneste resultatet.

### Styreskinner

Styreskinner er kurver som loftets sider må følge fra første til siste snitt, for en utbuing, en midje eller en utvidelse du tegner selv.

1. Tegn to eller flere skinner: åpne kurver (linjer, buer, splines) som går fra første til siste snitt og krysser hvert snitt én gang. Én skisse kan inneholde flere skinner: hver separate kjede i den er sin egen skinne. Tegn en skinne slik at den virkelig møter hvert snitt: fest endene til snittenes punkter.
2. I Loft-panelet, under **Styreskinner**, kryss av skissene som inneholder dem, eller klikk {{ui:Velg modellkanter som skinner}} og klikk kanter på delen (Esc avslutter).

Med skinner er loftet en Gordon-flate gjennom snittene og skinnene (se [Overflater gjennom et kurvenett](topic:gordon-surfaces)), lukket flatt i begge ender til et volumlegeme. Panelet sier hvor nøye den følger dem. Hvert snitt må da være en skisse (et punkt eller en flate kan ikke ta en skinne), og **Rett** gjelder ikke. En skinne som bommer på et snitt med mer enn 0.01 mm avvises, med avstanden.

Kontrollert: to sirkler (20 mm og 10 mm i diameter over 40 mm) med fire rette skinner gir volumet til kjeglestumpen innenfor 0.000002 %; buer som bøyer seg ut 5 mm gir en tønne som følger hver skinne innenfor 0.00001 mm.

## Trekkvinkel

Trekkvinkel vipper flater slik at en del kan tas ut av en form.

1. Velg {{ui:Mer}}, deretter {{ui:Trekkvinkel}} (eller hold {{key:Shift}} og klikk flater først). Uten noe valgt er du i valgmodus: klikk hver flate som skal vippes, og velg deretter {{ui:Ferdig}}.
2. Angi **Vinkel (°)**, **Nøytralplan** (der flatene beholder størrelsen) og **Trekkretning** (som standard normalen til nøytralplanet).

En positiv vinkel vipper flaten innover langs trekket og fjerner materiale; en negativ legger det til. Nøytralplanet starter som toppplanet. I denne versjonen kan bare plane flater få trekkvinkel: en sylinder, kjegle eller frihåndsflate sier «Trekkvinkel: i denne versjonen kun plane flater (nettkjernen bygger den).» De fire sidene på en blokk på 100 × 100 × 50 med trekkvinkel 5° om bunnen blir en avkappet pyramide på nøyaktig h/3·(a² + b² + ab), med b = a − 2h·tan 5°.

## Meldinger

| Melding | Hva du gjør |
|---|---|
| «Profilens plan må gå gjennom den ene enden av banen …» | Flytt profilskissen til starten (eller slutten) av banen |
| «Banen har et hull: kurvene går ikke sammen ende mot ende …» | Sett sammen kurvene i banen; i separate skisser må endene møtes nøyaktig |
| «Et loftsnitt trenger nøyaktig én lukket sløyfe» | Del skissen, eller fjern den ekstra sløyfen |
| «… kan ikke få trekkvinkel om dette nøytralplanet …» | Flaten er parallell med nøytralplanet, eller møter det ikke |
| «Trekkvinkel: i denne versjonen kun plane flater (nettkjernen bygger den).» | En valgt flate er buet. Fjern den; gi bare plane flater trekkvinkel |

:::note
Ikke bygget ennå: vridende sveip, tynnvegg- og flatesveip, styreskinner i loft og tangentkontinuitet ved enden, trekkvinkel på sylindre, kjegler og frihåndsflater.
:::
