---
title: Rul tilbage og frem gennem historikken
summary: Flyt rollback-bjælken op og ned én feature ad gangen for at se emnet blive bygget, indsæt features midt i, og gå tilbage til slutningen.
keywords: rollback, rul tilbage, rul frem, rollback-bjælke, gennemgå historik, indsæt feature, frys, historik
from: 9a366cae
---

Rollback-bjælken afgør, hvor meget af historikken der er bygget. Features under den er gråede og ikke bygget; nye features indsættes ved bjælken.

## Gå et trin ad gangen

Med emnet på skærmen (ingen skitse eller tegning åben):

| Gør | Resultat |
|---|---|
| {{key:[}} eller pileknappen op ved siden af emnets navn | Bjælken flytter sig én feature op |
| {{key:]}} eller pileknappen ned | Bjælken flytter sig én feature ned |
| {{key:End}} eller knappen, der flytter bjælken til enden | Alle features bygges igen |

Statuslinjen siger, hvor bjælken står, fx »Rollback-bjælke efter Sketch1: 1 af 2 features bygget«. Knapperne er slået fra, når bjælken ikke kan flyttes længere den vej.

Du kan også vælge {{ui:Rul tilbage hertil}} på en hvilken som helst feature, eller klikke på **Rollback-bjælke · rul frem** i historikken.

## Indsæt en feature midt i

1. Flyt bjælken tilbage, til den står, hvor den nye feature hører hjemme.
2. Tilføj featuren: den indsættes ved bjælken.
3. Tryk {{key:End}} for at bygge resten af historikken oven på den.

Hvert træk af bjælken er et trin, du kan fortryde med {{key:Mod+Z}}. Bjælkens placering gemmes i filen, så et emne kan sendes rullet tilbage. Kommandolinjeværktøjet flytter den også: `partcraft rollback part.json` og `partcraft forward part.json --end`.
