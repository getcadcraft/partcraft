---
title: Vyer, utseende, snitt och förstoringsglaset
summary: En manual håller en ordnad lista med vyer. Varje vy sparar kameran, sprängläget och för varje del om den visas, spökas, dess opacitet och färg, samt en stil, ett snitt eller en lådgenomskärning och ett förstoringsglas.
keywords: illustrera, vy, kamera, dölj, spöke, isolera, opacitet, färg, snitt, genomskärning, förstoringsglas, röntgen, stil för linjeteckning
from: 8bb640f0
---

## Scenen och dess vyer

Det du ser är **scenen**. Vrid modellen som i Design, och ändra sedan hur delarna ser ut:

- Klicka på en del för att markera den; {{key:Shift}}+klick lägger till eller tar bort en. Rader i trädet {{ui:Parts}} markerar också (en grupprad markerar allt i gruppen). {{ui:Select same part}} lägger till alla kopior av delen.
- {{ui:Hide}} ({{key:H}}), {{ui:Ghost}} ({{key:G}}: genomskinlig och grå) och {{ui:Isolate}} ({{key:I}}: endast dessa) verkar på markeringen; {{ui:Show all}} visar allt igen. Panelen anger en delens opacitet och färg.
- {{ui:Exploded view}} i panelen väljer en av konstruktionens sprängvyer och hur långt den spelas upp.

{{ui:Add view}} sparar scenen som en ny vy med en liten bild. Klicka på en vy i listan {{ui:Views}} för att gå tillbaka till den; {{ui:Update view}} lagrar scenen i vyn du gått till. Vyer kan döpas om (dubbelklicka), flyttas upp och ner, dupliceras och tas bort.

## Utseende

Avsnittet {{ui:Look}} anger, för scenen och därmed för varje vy du sparar:

- {{ui:Style}}: skuggad, skuggad med konturer, platta färger, endast linjeteckning eller röntgen.
- {{ui:Section plane}}: skär bort ena sidan längs X, Y eller Z; snittytorna fylls. {{ui:Keep the other side}} vänder på snittet.
- {{ui:Box cut-away}}: skär bort ett hörn av modellen för att visa insidan. I 3D-vyn lämnas dess snittytor öppna; i linjeteckning (Exportera) skrafferas de.
- {{ui:Magnifier}}: en rund lins som visar en förstorad detalj, eller insidan med alla kanter. Dra linsen för att flytta den; {{ui:Aim the lens}} och klicka på punkten den ska titta på.

Den levande vyn visar alltid kameran rakt framifrån (ortografisk). En vy kan ändå sparas som perspektiv; dess bilder och linjeteckningar använder det.
