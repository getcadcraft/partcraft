---
title: Ribbor och knutplåtar
summary: Förstyv en del med en ribba som ritas som en linje: den fylls från linjen till väggarna, en fastställd tjocklek över skissplanet, på den sida du väljer.
keywords: ribba, knutplåt, liv, förstyvning, stag, konsol, hörnstöd, tunn vägg, förstärka
from: 5c218881
---

:::note
**Ännu inte byggt i den här versionen.** Ribban kräver en exakt geometrikärna, som den här versionen av PartCraft inte har: den bygger alla delar med mesh-kärnan. [Vad som ännu inte är byggt](topic:not-built-yet) säger vad du ska göra i stället. Resten av sidan beskriver den så som den fungerar med en exakt kärna.
:::

En **ribba** (eller knutplåt) är en tunn vägg som förstyvar en del, till exempel triangeln i hörnet på en L-formad konsol. Du ritar bara dess fria kant: PartCraft fyller utrymmet mellan linjen och väggarna. Den kräver den **exakta kärnan** (se [Mesh-kärnan](topic:solid-kernels)).

## Lägg till en ribba

1. Gör ett plan genom mitten av där ribban ska gå (för en L-konsol 40 djup, ett plan 20 framför dess skiss: se [Referensplan, axlar och punkter](topic:reference-geometry)).
2. Skissa på det **en linje** från vägg till vägg, eller några linjer i följd för en böjd ribbkant. Linjen får sluta en bit från väggarna: dess ändar förlängs tills de möter dem.
3. Markera skissen och välj {{ui:Mer}} › {{ui:Ribba}}.

Ribban fylls från linjen till väggarna, på den sida som vetter mot delens mitt, så att en knutplåt hamnar i innerhörnet. Om den sidan är öppen och den andra stängd vänder PartCraft den åt dig och säger till.

## Inställningar

- **Tjocklek (mm)** är ribbans tjocklek över skissplanet. Den kan styras av en parameter.
- **Tjocklek** (valet under den): **Centrerad på skissplanet**, **Framför planet** (längs dess normal) eller **Bakom planet**.
- **Vänd** fyller den andra sidan av linjen.

## Meddelanden

- **På den här sidan möter ribbans kant aldrig kroppen**: ingenting sluts i utrymmet på den sidan. Markera eller avmarkera **Vänd**, eller flytta linjen så att väggar begränsar den.
- **En ribba behöver en öppen kedja av linjer i sin skiss**: skissen har en sluten form, en båge eller en spline, eller linjer som inte sitter ihop ände mot ände.
- **Ribbans kant går inuti kroppen där**: linjen ligger inne i solidet. Rita den i det öppna utrymmet mellan väggarna.
