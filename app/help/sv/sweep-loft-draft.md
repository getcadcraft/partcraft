---
title: Svep, loft och släpp
summary: Svep en sluten profil längs en bana av skisskurvor eller modellkanter, loft genom snitt på olika plan och lägg till släpp på ytor; med alternativen, de exakta resultaten och meddelandena.
keywords: svep, svepad pålägg, svepat urtag, rör, bana, loft, loftat pålägg, blanda snitt, linjerad, släpp, släppvinkel, avsmalande ytor, neutralplan, dragriktning, formsprutning
from: 9d637981
---

:::note
**I den här versionen** finns inte svep och loft ännu: de behöver en exakt geometrikärna, som den här versionen av PartCraft inte har. [Vad som inte finns ännu](topic:not-built-yet) beskriver vad du gör i stället; avsnitten Svep och Loft beskriver dem så som de fungerar med en exakt kärna. **Släpp fungerar** på plana ytor: nätkärnan bygger det, med samma resultat som en exakt kärna ger.
:::

Alla tre finns i funktionsgruppens meny {{ui:Mer}} (se [Nätkärnan](topic:solid-kernels)). Var och en kan lägga till material, skära bort det, behålla bara överlappet (**Skärning**) eller skapa en **Ny kropp** (svep och loft: **Åtgärd** i panelen).

## Svep

Ett svep flyttar en sluten profil längs en bana: rör, handtag, fjädrar av tråd, skenor.

1. Rita **banan** i en skiss: linjer och bågar som sitter ihop ände mot ände (eller använd modellkanter, nedan).
2. Rita **profilen** i en annan skiss vars plan går genom ena änden av banan, till exempel en cirkel på översta planet vid början av en bana som ritats på framplanet.
3. Markera profilskissen och välj {{ui:Mer}}, sedan {{ui:Svep}}. Den senaste andra skissen blir banan.

I panelen:

| Inställning | Vad den gör |
|---|---|
| **Bana** | Bocka för skisserna som utgör banan (flera skisser sitter ihop ände mot ände till en 3D-bana); **Välj modellkanter** lägger till kanter från delen |
| **Orientering** | Följ banan (standard), Frenet, Fast (snitten förblir parallella med profilen), Behåll en riktning, Längs en styrkurva |
| **Slutskala** | Profilen växer eller krymper linjärt till den här storleken vid slutet (1 = konstant) |

Skarpa hörn i banan blir geringsskurna. En cirkel med radie 5 som sveps längs en 100 mm linje blir en cylinder på exakt 2500π mm³; längs en kvartsbåge med radie 50 blir det en kvarts torus på 625π² mm³.

## Loft

En loft övergår mellan två eller fler snitt på olika plan.

1. Rita varje snitt i en egen skiss (en sluten slinga var), på basplan, referensplan (se [Referensplan, axlar och punkter](topic:reference-geometry)) eller ytor.
2. Välj {{ui:Mer}}, sedan {{ui:Loft}}. Varje oanvänd skiss med en slinga blir ett snitt, i historikordning.

Panelen listar snitten i ordning (**Upp** ordnar om, **Ta bort** tar bort ett); **Lägg till en skiss** lägger till ett till och **Välj en yta** lägger till en plan yta från delen. **Linjerad** gör plana ytor mellan snitten i stället för en jämn övergång. Mellan två kvadrater är båda samma stympade pyramid (en 40 mm kvadrat till en 20 mm kvadrat över 30 mm: exakt 28000 mm³).

Snitt med olika antal sidor (en kvadrat till en triangel) matchas av OpenCascade, som kan vrida sidoytorna; funktionen varnar dig. Rita snitt med lika många sidor, med början från motsvarande hörn, för det renaste resultatet.

### Styrskenor

Styrskenor är kurvor som loftens sidor måste följa från första snittet till sista, för en utbuktning, en midja eller en utsvängning som du ritar själv.

1. Rita två eller fler skenor: öppna kurvor (linjer, bågar, splines) som går från första snittet till sista och korsar varje snitt en gång. En skiss kan innehålla flera skenor: varje separat kedja i den är en egen skena. Rita skenan så att den verkligen möter varje snitt: fäst dess ändar i snittens punkter.
2. I loft-panelen, under **Styrskenor**, bocka för skisserna som innehåller dem, eller klicka på {{ui:Välj modellkanter som skenor}} och klicka på delens kanter (Esc avslutar).

Med skenor är loften en Gordon-yta genom snitten och skenorna (se [Ytor genom ett kurvnät](topic:gordon-surfaces)), täckt med plana ändar till en solid. Panelen anger hur nära den följer dem. Varje snitt måste då vara en skiss (en punkt eller en yta kan inte ta en skena), och **Linjerad** gäller inte. En skena som missar ett snitt med mer än 0.01 mm avvisas, med glappet angivet.

Kontrollerat: två cirklar (20 mm och 10 mm i diameter över 40 mm) med fyra raka skenor ger volymen för den stympade koniska kroppen inom 0.000002 %; bågar som bucklar ut 5 mm ger ett fat som följer varje skena inom 0.00001 mm.

## Släpp

Släpp lutar ytor så att en del kan tas ut ur en form.

1. Välj {{ui:Mer}}, sedan {{ui:Släpp}} (eller {{key:Shift}}+klicka på ytor först). Utan något markerat är du i markeringsläge: klicka på varje yta som ska luta, sedan {{ui:Klar}}.
2. Ange **Vinkel (°)**, **Neutralplan** (där ytorna behåller sin storlek) och **Dragriktning** (neutralplanets normal som standard).

En positiv vinkel lutar ytan inåt längs dragningen och tar bort material; en negativ lägger till det. Neutralplanet börjar som Ovanplanet. I den här versionen kan bara plana ytor släppas: en cylinder-, kon- eller friformsyta säger "Släpp: i den här versionen endast plana ytor (nätkärnan bygger den)." Fyra sidor av ett 100 × 100 × 50-block som släpps 5° runt sin botten blir en stympad pyramid på exakt h/3·(a² + b² + ab), med b = a − 2h·tan 5°.

## Meddelanden

| Meddelande | Vad du gör |
|---|---|
| "Profilens plan måste gå genom ena änden av banan …" | Flytta profilskissen till banans början (eller slut) |
| "Banan har ett glapp: dess kurvor sitter inte ihop ände mot ände …" | Sammanfoga banans kurvor; i separata skisser måste ändarna mötas exakt |
| "Ett loft-snitt behöver exakt en sluten slinga" | Dela skissen, eller ta bort den extra slingan |
| "… kan inte släppas kring det här neutralplanet …" | Ytan är parallell med neutralplanet eller möter det inte |
| "Släpp: i den här versionen endast plana ytor (nätkärnan bygger den)." | En vald yta är krökt. Ta bort den; släpp bara plana ytor |

:::note
Finns inte ännu: vridna svep, tunnväggs- och ytsvep, loft-styrskenor och ändtangens, släpp på cylindrar, koner och friformsytor.
:::
