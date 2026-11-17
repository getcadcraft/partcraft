---
title: Rull tilbake og fremover i historikken
summary: Flytt tilbakerullingslinjen opp og ned én funksjon om gangen for å se emnet bygges, sett inn funksjoner midt i, og gå tilbake til slutten.
keywords: tilbakerulling, rull tilbake, rull fremover, tilbakerullingslinje, gå gjennom historikk, sett inn funksjon, frys, historikk
from: 9a366cae
---

Tilbakerullingslinjen bestemmer hvor mye av historikken som er bygget. Funksjoner under den er nedtonet og ikke bygget. Nye funksjoner settes inn ved linjen.

## Gå ett trinn om gangen

Med emnet på skjermen (ingen skisse eller tegning åpen):

| Gjør | Resultat |
|---|---|
| {{key:[}} eller pil-opp-knappen ved siden av emnets navn | Linjen flytter seg opp én funksjon |
| {{key:]}} eller pil-ned-knappen | Linjen flytter seg ned én funksjon |
| {{key:End}} eller knappen for å flytte linjen til slutten | Alle funksjoner bygges igjen |

Statuslinjen sier hvor linjen er, for eksempel «Tilbakerullingslinje etter Sketch1: 1 av 2 funksjoner bygget». Knappene er av når linjen ikke kan flyttes lenger den veien.

Du kan også velge {{ui:Rull tilbake til hit}} på en hvilken som helst funksjon, eller klikke på **Tilbakerullingslinje · rull fremover** i historikken.

## Sett inn en funksjon midt i

1. Flytt linjen tilbake til stedet der den nye funksjonen hører hjemme.
2. Legg til funksjonen: den settes inn ved linjen.
3. Trykk {{key:End}} for å bygge resten av historikken på toppen av den.

Hver flytting av linjen er et steg du kan angre med {{key:Mod+Z}}. Linjens plass lagres i filen, så et emne kan sendes tilbakerullet. Kommandolinjeverktøyet flytter den også: `partcraft rollback part.json` og `partcraft forward part.json --end`.
