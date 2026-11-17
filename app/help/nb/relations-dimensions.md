---
title: Gjør en skisse fullt definert med relasjoner og mål
summary: Legg til relasjoner fra høyre panel og mål med målverktøyet. Les fargene for underdefinert, fullt definert og overdefinert, og rett en skisse som er overdefinert.
keywords: relasjoner, betingelser, mål, smart mål, fullt definert, underdefinert, overdefinert, frihetsgrader, sammenfallende, horisontal, vertikal, parallell, vinkelrett, tangent, lik, konsentrisk, midtpunkt, fiksér, konflikt, overflødig
from: e76d047a
---

En skisse er **fullt definert** når hvert punkt og hver størrelse er låst av relasjoner og mål. En fullt definert skisse endrer seg bare når du endrer et tall, så delen oppfører seg forutsigbart når du redigerer den senere. PartCraft tvinger deg ikke til å definere en skisse fullt, men viser alltid hvor nær du er.

## Les skissens tilstand

Tilstanden vises på tre steder: brikken øverst til venstre i visningen, meldingen øverst i høyre panel og flagget i historikken.

| Tilstand | Brikke | Geometrifarge | Hva det betyr |
|---|---|---|---|
| Underdefinert | «Underdefinert · 3 frihetsgrader» | Blå | Noe geometri kan fortsatt flyttes. Dra blå geometri for å se hvilken vei |
| Fullt definert | «Fullt definert» | Blekk (svart på Papir, lys på Modell) | Hvert punkt og hver størrelse er låst |
| Overdefinert | «Overdefinert» | Rød på relasjonene det gjelder | Noen relasjoner motsier hverandre, eller en er allerede gitt av de andre |

Konstruksjonsgeometri er grå og stiplet uansett tilstand. Valgte elementer er oransje. En «frihetsgrad» er en måte noe kan bevege seg på: et fritt punkt har to (venstre-høyre og opp-ned), og en fri sirkel har tre (sentrum og radius).

Legenden under meldingen i høyre panel gjentar fargene.

## Legg til et mål

1. Trykk {{key:D}} eller velg {{ui:Mål}}.
2. Klikk på det som skal måles:
   - **én linje**: lengden;
   - **én sirkel**: diameteren; **én bue**: radiusen;
   - **to punkter** (et endepunkt, et sentrum, et løst punkt eller origo): avstanden mellom dem;
   - **et punkt og en linje**: avstanden fra punktet til linjen;
   - **to parallelle linjer**: avstanden mellom dem; **to linjer i en vinkel**: vinkelen mellom dem.
3. Etter ett element sier statuslinjen «Klikk på et andre element, eller klikk der målet skal stå.» Klikk på et andre element, eller klikk i tomt rom der du vil ha tallet.
4. En tallboks åpnes med gjeldende verdi. Skriv størrelsen og trykk {{key:Enter}}. {{key:Esc}} beholder den målte verdien.

**Hvor du plasserer tallet, bestemmer typen** for en skrå linje eller to punkter. Plasser det over eller under for å få en horisontal avstand, til venstre eller høyre for en vertikal avstand, og andre steder for den virkelige (innrettede) avstanden.

Boksen godtar vanlige tall i millimeter eller grader, for eksempel `25`, `12.5` eller `1e3`. En innledende `⌀`, `Ø` eller `R`, eller en etterfølgende `mm` eller `°`, ignoreres. Vinkler er 0 til 180 grader. Regneoperasjoner som `20+5` godtas ikke. For å koble en størrelse til en variabel eller formel, start den med `=`.

For å endre et mål senere dobbeltklikker du tallet i skissen, eller velger **Rediger** ved siden av det i listen i høyre panel.

:::tip
Du kan også velge geometri først (Velg-verktøyet) og velge en målknapp i høyre panel: {{ui:Avstand}}, {{ui:Horisontal avstand}}, {{ui:Vertikal avstand}}, {{ui:Radius}}, {{ui:Diameter}} eller {{ui:Vinkel}}. Bare de som passer utvalget, vises. Dette er måten å gi en sirkel en radius i stedet for en diameter.
:::

## Legg til en relasjon

Relasjoner legges til fra høyre panel, ikke med et verktøy.

1. Trykk {{key:S}} for Velg.
2. Klikk ett element, og deretter {{key:Shift}}+klikk et andre hvis relasjonen trenger to. Origo kan også velges.
3. Høyre panel sier «Valgt: linje l3, punkt p1» og viser en knapp for hver relasjon som passer, for eksempel {{ui:∥ Parallell}} eller {{ui:• Sammenfallende}}.
4. Velg knappen. Skissen løses med én gang.

Hvis ingen relasjon passer, sier panelet «Ingen relasjon passer til dette utvalget. Velg ett eller to elementer (Shift+klikk legger til).»

Hele listen over relasjoner, hva hver enkelt krever og hva den gjør, står i [Skisserelasjoner og mål](topic:sketch-relations).

Relasjoner vises i skissen som små symboler ved siden av geometrien (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Sammenfallende prikker er skjult med mindre geometrien er valgt eller relasjonen har problemer. Klikk et symbol for å velge relasjonen.

## Et arbeidseksempel: en L-formet konsollprofil

1. Skisser på **Forfra-plan**. Med Linje-verktøyet starter du i origo og klikker seks hjørner på en L, og avslutter i origo igjen. Kjeden avsluttes av seg selv når du klikker det første punktet.
2. Linjer tegnet nær horisontale eller vertikale har allerede H- og V-relasjoner, bortsett fra den siste. En linje som ender på et eksisterende punkt, får ingen automatisk relasjon. Trykk {{key:S}}, klikk den siste linjen og velg {{ui:V Vertikal}} i høyre panel. Brikken sier «Underdefinert · 4 frihetsgrader».
3. Trykk {{key:D}}. Klikk bunnlinjen, klikk under den, skriv `80` og trykk {{key:Enter}}.
4. Klikk venstrelinjen, klikk til venstre for den, skriv `60` og trykk {{key:Enter}}.
5. Mål den korte øvre linjen `20` og den indre vertikale linjen `45` på samme måte.
6. Brikken sier nå **Fullt definert**, og hele L-en blir svart.

## Rett en overdefinert skisse

Når en ny relasjon eller et nytt mål motsier de andre, flytter PartCraft ingenting. Geometrien står akkurat som den var, de berørte relasjonene blir røde, og statuslinjen nevner dem:

- «Overdefinert: Horisontal, Avstand 40 kan ikke alle oppfylles. Angre, eller slett en av dem.» Relasjonene er i konflikt.
- «Overdefinert: Parallell er allerede gitt. Slett den.» Relasjonen tilfører ingenting: de andre tvinger den allerede. (Sidene i et rektangel er for eksempel allerede parallelle.)

For å rette det:

1. Trykk {{key:Mod+Z}} for å angre siste endring, eller
2. Finn det røde elementet i listen **Relasjoner og mål** i høyre panel (en gruppe som holder det, er åpen og rød), og velg **Slett** ved siden av. Du kan også klikke symbolet eller tallet i skissen og trykke {{key:Delete}}.

:::note
Det finnes ingen drevne (referanse-)mål i denne versjonen. Et mål som bare ville rapportere en størrelse de andre relasjonene allerede låser, behandles som overdefinert. Les størrelser i panelet i stedet: velg en linje og se på målknappene, eller sjekk delens fakta etter at du har ekstrudert.
:::

En overdefinert skisse med en reell konflikt får funksjonen som bruker den, til å feile («Overdefinert: 1 relasjon kan ikke alle oppfylles.»), og historikken markerer den **⚠ feil**. En skisse som bare er overflødig, bygges fortsatt, med en ⚠-advarsel.

## Dra for å finne det som er fritt

I Velg kan du dra et hvilket som helst blått punkt eller en blå linje. Løseren flytter det så lite som mulig mens hver relasjon beholdes. Hvis et drag ville bryte en relasjon, spretter geometrien tilbake. Dette er den raskeste måten å se hvilket mål som fortsatt mangler.

## Relasjonslisten

Når ingenting er valgt, lister høyre panel **Relasjoner og mål**. Hver rad har:

- **Rediger** (bare mål): åpner tallboksen;
- **Velg**: velger den i skissen;
- **Slett**: fjerner den.

Relasjoner av samme slag som forekommer mer enn én gang, deler én rad, for eksempel «Sammenfallende × 5» for et rektangel knyttet til origo. Klikk raden for å åpne den. Hver relasjon listes etter hva den knytter («punkt p2, punkt p4»), med sin egen **Velg** og **Slett**. Selve raden har:

- **Velg**: velger alle i skissen;
- **Slett alle**: fjerner alle i ett trinn ({{key:Mod+Z}} henter dem tilbake).

En gruppe som holder en overdefinert relasjon, åpnes av seg selv, med navnet i rødt. Mål listes alltid ett per rad, med verdiene sine.

Med geometri valgt viser listen bare **Relasjoner på utvalget**.
