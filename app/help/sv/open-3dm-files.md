---
title: Öppna en .3dm-modell som solidkropp
summary: Ta in nät, polyytor och block från en .3dm-fil i PartCraft som en solidkropp du kan skära i, lägga till till och skissa på; var trianglarna kommer från, och vad som lämnas ut.
keywords: 3dm, nurbs, polyyta, brep, ytor, renderingsnät, extrudering, block, import, nät till solid, enheter, importerad kropp
from: 8ae9571b
---

PartCraft öppnar `.3dm`-filer som **solidkroppar**, på samma sätt som det öppnar ett [STL-, OBJ- eller 3MF-nät](topic:open-meshes). Kroppen fungerar som vilket solid som helst: skär i den, lägg till till den, borra i den, gör mönster av den och skissa på dess plana ytor. Den har ingen egen historik.

## Öppna filen

1. Välj {{ui:Open}} eller tryck på {{key:Mod+O}}, och välj `.3dm`-filen. Eller släpp den i 3D-vyn.
2. PartCraft läser den och visar vad den hittade: hur många objekt med ytor som kommer in, hur många ytor som kom från nät sparade i filen och hur många PartCraft trianglade, varje reparation, och om resultatet **sluter sig**.
3. Kontrollera **Enheter i filen** (filen anger sina egna; en enhet PartCraft inte listar, som yards, omvandlas till millimeter) och **Upp i filen**.
4. Välj {{ui:Open as a body}}, eller **Använd den till** och {{ui:Add to this part}} när delen redan har funktioner.

## Varifrån trianglarna kommer

PartCraft bygger kroppar av trianglar i den här versionen, så varje yta i filen blir små plana ytor. För varje yta på en polyyta (och varje extrudering) tar den **renderingsnätet som sparats i filen** när det finns, annars **triangulerar den själv** (plan, NURBS-ytor, rotationsytor, extruderade kurvor och extruderingar, trimmade av sina kanter). Ytor i en polyyta delar sina kantpunkter, så en sluten polyyta kommer in sluten. En yta av en typ PartCraft ännu inte läser lämnas ut, och dialogen anger hur många och av vilken typ; resultatet sluter sig vanligtvis inte då.

## Allt i filen blir en kropp

Varje synligt nät, polyyta och extrudering, och varje placering av ett block, läggs i **en** kropp där filen placerar den. Objekt som är dolda, eller på ett lager som är av, lämnas ut. När filen innehåller flera separata solider får kroppen flera delar: öppna var och en från sin egen fil om du vill ha dem som separata kroppar.

## Vad som lämnas ut (och sägs)

Kurvor, punkter, punktmoln, text, mått, hatchningar och ljus lämnas ut: en kropp tar bara ytor. Detsamma gäller SubD-objekt (gör om dem till nät eller polyytor i programmet som skapade filen först), block som länkar till andra filer, samt färger, lager och namn (PartCraft-kroppar har inga egna här).

## När den inte sluter sig

Öppna polyytor och ytor (en enstaka trimmad yta, en form med en saknad yta) har ingen insida, så de kan inte bli ett solid. Dialogen anger hur många öppningar som finns kvar och lägger inte till något. Gör formen hel eller sluten i programmet som skapade den, spara och öppna den igen. Se [När ett nät inte sluter sig](topic:open-meshes#when-a-mesh-does-not-close).
