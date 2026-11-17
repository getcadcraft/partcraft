---
title: Kopier, lim inn og dupliser
summary: Kopier skissegeometri, funksjoner og sammenstillingsdeler. Lim inn der du klikker, eller på samme sted. Dupliser i ett steg. Og hva som følger med en kopi, og hva som ikke gjør det.
keywords: kopier, lim inn, klipp ut, dupliser, utklippstavle, lim inn på samme sted, velg alle, fjern utvalg, slett, ctrl c, ctrl v, ctrl d, forekomst, komponent, kopier skisse, kopier funksjon, kopier del
from: 611307d7
---

Gruppen {{ui:Rediger}} i verktøylinjen har {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}} og {{ui:Lim inn}}, og en {{ui:Mer}}-meny med {{ui:Klipp ut}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Lim inn på samme sted}}, {{ui:Dupliser}}, {{ui:Slett}}, {{ui:Velg alle}} og {{ui:Fjern utvalg}}, hver med sin tast. Hva de kopierer, avhenger av hvor du er: geometri i en åpen skisse, en funksjon i historikken, eller en del i en sammenstilling.

En nedtonet post kan ikke virke akkurat nå. Hold musepekeren over den. Verktøytipsen sier hvorfor, for eksempel «Velg skissegeometri først» eller «Utklippstavlen holder Skisse2 og Ekstruder2: funksjoner limes inn i historikken, så avslutt skissen først».

| Handling | Tast | I en skisse | I historikken | I en sammenstilling |
|---|---|---|---|---|
| Kopier | {{key:Mod+C}} | De valgte punktene og kurvene | Den valgte skissen, ekstruderingen, rotasjonen eller hullet (med sin skisse) | Den valgte delen |
| Klipp ut | {{key:Mod+X}} | Kopier, og slett dem | Kopier, og slett funksjonen | Kopier, og fjern delen |
| Lim inn | {{key:Mod+V}} | Kopien følger pekeren. Klikk der den skal | Legger kopien til på slutten av historikken | En ny kopi ved siden av de andre delene |
| Lim inn på samme sted | {{key:Mod+Shift+V}} | Med de samme koordinatene | Samme som Lim inn | På samme sted som den kopierte delen |
| Dupliser | {{key:Mod+D}} | Kopier og flytt i ett strøk. Utklippstavlen blir ikke berørt | En ny kopi rett etter at du velger den | En ny kopi ved siden av de andre delene |
| Slett | {{key:Delete}} | Utvalget | Funksjonen (spør hvis andre bruker den) | Delen eller leddet |
| Velg alle | {{key:Mod+A}} | Alt i skissen | Ikke tilgjengelig | Ikke tilgjengelig |
| Fjern utvalg | {{key:Esc}} | Fjerner utvalget | Fjerner utvalget og valgene | Fjerner utvalget |

Hver innliming, duplisering og utklipping er ett steg i angrehistorikken: {{key:Mod+Z}} tar det tilbake, og {{key:Mod+Y}} legger det tilbake.

## I en skisse

1. Velg det som skal kopieres: klikk på det, {{key:Shift}}+klikk for flere, dra et vindu, eller trykk {{key:Mod+A}} for alt.
2. Trykk {{key:Mod+C}}, eller velg {{ui:Kopier}}. Statuslinjen sier hva som ble kopiert.
3. Trykk {{key:Mod+V}}, eller velg {{ui:Lim inn}}. En stiplet kopi følger pekeren, holdt i midten. Den fester seg til punkter: plasser en kopiert sirkels sentrum på et punkt ved å klikke på det punktet.
4. Klikk der den skal. Den innlimte geometrien forblir valgt, så du kan dra den eller legge til relasjoner med en gang. {{key:Esc}} avbryter innlimingen.

Hva som følger med:

- En kopiert linje, sirkel eller bue tar med seg sine egne endepunkter og sentrum.
- Relasjoner og mål **mellom kopierte elementer** følger med: et kopiert rektangel er fortsatt et rektangel, med sine størrelser.
- Relasjoner **til geometri du ikke kopierte**, og til origo, faller bort. Statuslinjen teller dem: «2 relasjoner til geometri utenfor kopien følger ikke med». En innlimt kopi kan dermed flyttes fritt til du knytter den fast med relasjoner eller mål.
- Et fast punkt forblir fast, på sin nye posisjon.

{{ui:Lim inn på samme sted}} setter kopien nøyaktig på originalens koordinater, i denne skissen eller en annen. Det er nyttig for å hente en profil fra én skisse til en annen. I samme skisse ligger kopien oppå originalen. Dra den bort.

{{ui:Dupliser}} ({{key:Mod+D}}) kopierer utvalget og begynner å plassere det med en gang, uten å røre utklippstavlen.

:::tip
For å gjenta et hullsentrum eller et spor flere ganger, kopier det én gang og lim det inn flere ganger. Hver {{key:Mod+V}} starter en ny kopi som følger pekeren.
:::

## I historikken

1. Klikk en skisse, en ekstrudering, en rotasjon eller et hull i historikken.
2. {{key:Mod+C}} kopierer den. En skissebasert funksjon kopieres sammen med skissen sin.
3. {{key:Mod+V}} legger kopien til på slutten av historikken (ved tilbakerullingslinjen når du har rullet tilbake), med nye navn som Skisse3 og Ekstruder2.

Kopien ligger på samme plan eller flate som originalen, så den bygger oppå den, og delen ser lik ut. Velg den nye skissen og endre planet i høyre panel, eller åpne den og dra eller mål profilen på nytt, for å flytte kopien.

- Lim inn i **en annen del**: åpne den delen og trykk {{key:Mod+V}}. Når kopiens skisse lå på en flate delen ikke har, havner den på Front-planet, og statuslinjen sier det.
- {{ui:Dupliser}} kopierer og limer inn i ett steg, i samme del.
- {{ui:Klipp ut}} kopierer funksjonen og sletter den deretter (spør først hvis andre funksjoner bruker den).

Mønstre, speil, avrundinger, fasinger, skall og importerte volumlegemer kan ikke kopieres. De henger på kanter, flater eller funksjoner valgt i denne delen. Kopier skissen eller funksjonen de er bygget på i stedet, eller mønstre den med {{ui:Lineært}} eller {{ui:Sirkulært}}.

## I en sammenstilling

1. Klikk en del i visningen eller i listen til venstre.
2. Velg {{ui:Dupliser}} ({{key:Mod+D}}), eller {{key:Mod+C}} og deretter {{key:Mod+V}}.

Den nye kopien er **samme del**: rediger den ene, så endrer alle kopiene seg. Den dukker opp 20 mm til høyre for alt som allerede er i sammenstillingen, vendt på samme måte som kopien. Den blir stående der til et ledd plasserer den. {{ui:Lim inn på samme sted}} ({{key:Mod+Shift+V}}) setter den nøyaktig der den kopierte delen står. Koble den for å flytte den. Et glidende leds forskyvning skyver den langs.

Innliming av en del kopiert fra en annen sammenstilling tar delen med seg, på samme måte som {{ui:Sett inn}} fra filen. {{ui:Legg til kopi}} i Sammenstilling-gruppen gjør det samme som {{ui:Dupliser}}, og virker uten valg (den kopierer den siste delen).

## Utklippstavlen

- Det er PartCraft sin egen utklippstavle, ikke datamaskinens. Du kan ikke lime PartCraft-geometri inn i et annet program, eller tekst inn i PartCraft-visningene.
- Den lagres i denne nettleseren, så en annen PartCraft-fane kan lime inn det du kopierte. Den leses tilbake og kontrolleres som en åpnet fil. Alt som er skadet, eller fra en annen versjon, avvises.
- En del med en stor importert STEP-fil kan være for stor for nettleseren å lagre. Den limes da bare inn i denne fanen.
- I en tallboks eller i hjelpesøket kopierer og limer {{key:Mod+C}} og {{key:Mod+V}} tekst som vanlig.

På tegningsarket er kopier og lim inn ikke tilgjengelig ennå. {{ui:Slett}} og {{ui:Fjern utvalg}} virker på det valgte symbolet. Se [Ikke bygget ennå](topic:not-built-yet).
