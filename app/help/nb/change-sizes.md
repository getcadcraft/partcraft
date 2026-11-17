---
title: Endre størrelser uten å åpne skissen
summary: Styr en del fra tallene i høyre panel: skissemål, dybder, antall og vinkler, hvordan du planlegger en del slik at de riktige tallene styrer den, og hvor parametere og ligninger tar over.
keywords: parametere, styrende mål, designhensikt, endre størrelse, ligninger, globale variabler, designtabell, konfigurasjoner, endre størrelse, endre mål
from: c2ae1a32
---

Hver størrelse i en PartCraft-del er et tall du kan endre senere: målene i skissene og innstillingene til funksjonene. Du trenger ikke åpne en skisse for å endre målene.

## Endre et skissemål fra panelet

1. Klikk en funksjon i historikken, for eksempel «Ekstruder1».
2. Under ekstruderingens egne innstillinger lister **Skissemål (Skisse1)** hvert mål i skissen: «Avstand», «Diameter», «Vinkel (°)» og så videre.
3. Skriv en ny verdi i én boks, og trykk {{key:Enter}} eller {{key:Tab}}.

Skissen løses med den nye verdien, og hele delen bygges om. Hvis du velger selve skissen, vises den samme listen som **Styrende mål**.

En radius eller diameter må være større enn null, og en vinkel ligger mellom 0 og 180 grader. Statuslinjen sier fra hvis ikke.

:::tip
Hvilken boks er hvilken? Boksene listes i den rekkefølgen målene ble laget. Hvis du er usikker, åpne skissen (dobbeltklikk den), dobbeltklikk målet på tegneflaten, og endre det der.
:::

## Skriv inn hovedtallet med én gang

Velg en funksjon i historikken (eller legg den til), og skriv et tall. Det går inn i funksjonens hovedboks, den du endrer mest: en ekstrudering sin **Dybde**, en rotasjons **Vinkel**, et hulls **Diameter**, et mønsters **Antall**, en avrundings **Radius**, eller et skalls vegg. Trykk {{key:Enter}} for å sette det, eller {{key:Esc}} for å beholde det gamle. Når du legger til en ekstrudering, sier statuslinjen det: «Ekstruder1 er lagt til. Endre tallene til høyre, eller skriv inn et tall nå for dybden.»

## Endre tallet i historikken

Hver funksjons rad i historikken viser hovedtallet ved siden av navnet: «Ekstruder1 25 mm», «Hull1 Ø6.6 gjennom», «Avrunding1 R2», «Lineært1 4 × 20 mm». Dobbeltklikk tallet (eller velg raden og trykk {{key:F2}}), så åpnes en boks der. Skriv inn ny verdi og trykk {{key:Enter}}. {{key:Esc}} beholder den gamle. Den virker akkurat som funksjonens boks til høyre: de samme grensene, `=` for å skrive inn en ligning som `=width/2`, og ett steg å angre.

For en ekstrudering, et hull eller et mønster åpner et dobbeltklikk hvor som helst på raden boksen. For en avrunding, fasing, skall, trekkvinkel eller gjenge må du dobbeltklikke selve tallet, for et dobbeltklikk på navnet fører fortsatt til valg av kanter eller flater. Skisser har ikke noe tall på raden: et dobbeltklikk åpner skissen.

## Dra i visningen

Velg en ekstrudering i historikken (eller klikk den i visningen, og så raden), så står en oransje pil på endeflaten med dybden i en boks ved siden av. Dra pilen: delen følger med mens du drar, og når du slipper, settes den nye dybden som ett steg ({{key:Mod+Z}} setter den tilbake). Trykk {{key:Esc}} mens du drar for å gå tilbake til der du startet. Dybden flytter seg i trinn på en tidel av størrelsen: 1 mm på en 25 mm ekstrudering, 0.1 mm på en 3 mm.

En rotasjon får en buet pil ved enden av svingen. Dra den rundt aksen for å endre vinkelen, i hele grader fra 1° til 360°.

Eller klikk i boksen ved siden av pilen, skriv en verdi (eller `=` og en ligning), og trykk {{key:Enter}}. Det finnes ingen pil på en ekstrudering som går **Gjennom alt** eller opp til en flate, eller på en verdi en ligning styrer. Endre disse til høyre.

## Tallene som styrer en del

| Hvor | Hva du kan endre |
|---|---|
| Skisse | Alle mål: lengder, avstander, radier, diametre, vinkler |
| Ekstruder og kutt | Dybde, sluttbetingelse, retning, legeme eller kutt |
| Roter og rotert utskjæring | Vinkel, akse, legeme eller kutt |
| Hull | Diameter, dybde, gjennom alt, senkeboringens diameter og dybde |
| Avrunding, fasing, skall | Radius, avstand, veggtykkelse og retning, og hvilke kanter eller flater |
| Lineært og sirkulært | Antall, avstand eller vinkel, retning eller akse |
| Del | Kurver (hvor fint runde former fasetteres) |
| Tegning | Hvor snittet går, detaljens størrelse og målestokk, GD&T-verdier |

## Planlegg delen slik at de riktige tallene styrer den

Tallene du gir er de du kan endre. Noen vaner gjør at senere endringer oppfører seg:

- **Mål det som betyr noe for jobben.** Hvis et hull må ligge 15 mm fra en kant, mål det fra den kanten, ikke fra origo.
- **Definer skissene fullt.** Da flytter en endring bare det den skal (se [Fullt definer en skisse](topic:relations-dimensions)).
- **Bruk relasjoner for hensikt.** Lik på to hull betyr at én diameter styrer begge. For symmetriske former: legg origo på midtlinjen, eller bruk Midtpunkt.
- **Skisser på flater laget av funksjoner.** En skisse på en ekstruderings endeflate flytter seg når dybden endres.
- **Mønster i stedet for å kopiere.** Ett hull mønstret åtte ganger har én diameter å endre.

## Utover enkle tall

- **Ett tall som styrer flere:** bruk parametere og ligninger: [Styr en del med parametere](topic:parameters).
- **Flere størrelser av én del:** lagre hver som en [konfigurasjon](topic:design-tables). De lagres i delfilen.
- **Regning i en tallboks:** skriv `=40/2` eller `=width / 2`. Det blir en ligning. Se [Ligninger begge veier](topic:equations-two-way).
- **Tommer:** delen viser millimeter. I en tallboks med `=`, eller i en parameter, blir `2in` til 50.8.

Se [Hva som ikke er bygget ennå](topic:not-built-yet).
