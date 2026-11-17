---
title: Öppna en STL, OBJ eller 3MF som solidkropp
summary: Gör ett nät från en skanner, en 3D-utskriftssajt eller ett annat program till ett solid du kan skära i, lägga till till och skissa på; vad PartCraft reparerar på vägen, och vad det inte kan.
keywords: stl, obj, 3mf, nät, nät till solid, konvertera nät, skanning, vattentätt, reparera, hål, luckor, enheter, uppåtaxel, importerad kropp, plana ytor
from: 7b948471
---

PartCraft öppnar STL-, OBJ- och 3MF-nät som **solidkroppar**. Kroppen fungerar som vilket solid som helst: skär i den, lägg till till den, borra i den, gör mönster av den, använd den i en sammanställning eller för bearbetning, och skissa på dess plana ytor. Den har ingen egen historik: ett nät är bara trianglar, så dess storlekar kan inte ändras, bara läggas till eller skäras bort från.

## Öppna ett nät

1. Välj {{ui:Open}} eller tryck på {{key:Mod+O}}, och välj filen `.stl`, `.obj` eller `.3mf`. Eller släpp den i 3D-vyn.
2. PartCraft läser den, reparerar det den säkert kan och visar vad den hittade: hur många trianglar och punkter, varje reparation, och om nätet nu **sluter sig**.
3. Kontrollera **Enheter i filen** och **Upp i filen**. STL och OBJ anger inte sina enheter, så millimeter är en gissning; en 3MF-fil anger sina egna. Raden **Storlek här** visar kroppens storlek med ditt val, så en del som kommer in 25.4 gånger för liten är lätt att upptäcka (den var i tum).
4. Om delen på skärmen är tom, välj {{ui:Open as a body}}. Om den redan har funktioner, välj **Använd den till** (lägg till till delen, skär bort från den, eller behåll bara överlappet), och sedan {{ui:Add to this part}}, eller {{ui:New part}} för att börja om med nätet.

En funktion **Imported1** visas i historiken. Statusraden säger till exempel: ”bracket.stl är en solidkropp: 15200.512 mm³, 14 plana ytor att skissa på.”

## Vad PartCraft reparerar

| Reparation | Vad det betyder |
|---|---|
| Dubbla hörn sammanfogade | En STL upprepar varje hörn för var och en av sina trianglar; de sammanfogas till en punkt |
| Trianglar utan area borttagna | Splitter vars hörn ligger på en linje |
| Dubbla trianglar borttagna | En triangel skriven två gånger behålls en gång; två som vetter åt motsatt håll (en innervägg) tas båda bort |
| Små luckor stängda | Kanter som nästan möts (inom en tusendel av delens storlek) sammanfogas |
| Hål fyllda | En öppning vars kant ligger plant fylls oavsett storlek; en skev sådan bara när den är liten |
| Trianglar vända utåt | Trianglar som vetter fel håll vänds för att stämma med sina grannar, och hela ytan vetter utåt |

## När ett nät inte sluter sig

Ett solid behöver en yta utan öppningar. När PartCraft inte kan sluta en, anger dialogen hur många öppningar och öppna kanter som finns kvar, och det finns ingen kropp att lägga till. Stäng öppningarna i programmet som skapade nätet, eller exportera det igen som ett slutet (vattentätt) nät, och öppna det igen.

PartCraft lämnar en öppning ifred när en fyllning kan gissa fel: ett stort skevt hål, eller två öppningar i samma plan (en ringformad yta som saknas, där fyllning av varje kant skulle täcka hålet i mitten). En kant som delas av fler än två trianglar rapporteras också: en sådan yta har ingen tydlig insida.

## Skissa på dess plana ytor

Plana områden av många trianglar slås ihop till en **plan yta** var, så att en skiss kan ligga på dem: klicka på ytan och välj {{ui:Sketch on this face}}. En yta som skärs i eller läggs till senare förblir en yta. Runda områden (ett hål, en rundning) förblir trianglar: de är inte ytor du kan välja, och vyn ritar deras kontur utifrån vinkeln mellan trianglarna.

## Ändra senare

Välj **Imported1** för att se filen den kom från, hur många trianglar den har och vad som reparerades. **Enheter i filen**, **Upp i filen** och **Använd den till** kan ändras där; varje ändring är ett steg i Ångra.

## Var det sparas

Det reparerade nätet lagras **inuti** filen `.partcraft.json`, så du behöver inte nätfilen igen. En delfil med en nätkropp är version 5: en äldre PartCraft vägrar den på grund av versionen. Ett nät med 200 000 trianglar lägger till cirka 1.2 MB.

## Gränser

- Högst 3 miljoner trianglar och 200 MB i en fil.
- En kropp gjord av ett nät byggs av nätkärnan. Med den exakta kärnan påslagen (endast för utvecklare) anger den det och byggs inte.
- OBJ-material, texturkoordinater och friformskurvor lämnas ut; 3MF-färger, material och stödobjekt lämnas ut (dialogen anger hur många objekt som hoppades över).
- Kroppen är lika fin som nätet: ett grovt STL ger grova runda ytor. Hål du borrar i den blir lika runda som dina egna funktioner.
