---
title: Bygg en sammenstilling med ledd
summary: Start en sammenstilling fra en del, sett inn kopier og andre delfiler, koble dem sammen med stive, roterende, glidende, sylindriske, plane, kule- og tapp-i-spor-ledd på flate flater, sentrer ledd på akser, rediger en del på stedet og lagre sammenstillingen.
keywords: sammenstilling, kobling, ledd, sløyfe, lukket sløyfe, mekanisme, firestang, stiv, roterende, glidende, sylindrisk, plan, kule, kuleledd, sfærisk, tapp i spor, sett inn komponent, forankret, fast, konsentrisk, sammenfallende, rediger del, i kontekst, partcraft-asm
from: a53bbfef
---

En sammenstilling setter deler sammen. I PartCraft plasserer **ledd** delene: hvert ledd sitter på en plan flate på hver av to deler og legger dem flate mot flate. Et roterende ledd lar én del dreie seg, et glidende ledd lar den skli, og et stivt ledd holder den fast.

## Start en sammenstilling

1. Bygg en del med et volumlegeme. En tom del kan ikke settes inn i en sammenstilling: «Bygg et volumlegeme først, og sett det deretter inn i en sammenstilling.»
2. Velg {{ui:Sammenstilling}} i verktøylinjen.

Statuslinjen sier «Sammenstilling startet med Del1 som forankret del. Sett inn flere deler (Legg til kopi, Sett inn eller Rediger › Dupliser), og koble dem sammen med Ledd.» Venstre panel viser nå **Deler** og **Ledd**, og verktøylinjen viser sammenstillingsverktøyene. Skisse- og funksjonsverktøyene skjules.

Den første delen er **forankret**: den flytter seg aldri, og alt annet plasseres i forhold til den.

## Sett inn deler

- {{ui:Legg til kopi}} setter inn en ny kopi av den valgte delen (eller av den siste). Kopier deler én del: redigerer du den, endrer hver kopi seg.
- {{ui:Dupliser}} ({{key:Mod+D}}) i gruppen {{ui:Rediger}} gjør det samme for den valgte delen. {{key:Mod+C}} og {{key:Mod+V}} kopierer en del og limer den inn ved siden av de andre, i denne sammenstillingen eller en annen. {{key:Mod+Shift+V}} limer den inn på samme sted. Se [Kopier, lim inn og dupliser](topic:copy-paste).
- {{ui:Sett inn}} setter inn en del fra en `.partcraft.json`-fil på datamaskinen din. Delen kopieres inn i sammenstillingen.

Nye deler vises 20 mm til høyre for alt som allerede er der, og blir stående der til et ledd plasserer dem. En del uten ledd kan også flyttes for hånd, med skrevne verdier eller piler du drar (se [Delliste, eksploderte visninger og flytting av deler](topic:assembly-bom-explode)).

## Koble sammen to deler

1. Velg {{ui:Ledd}} eller trykk {{key:J}}. Høyre panel sier **Nytt ledd**.
2. Klikk en plan flate på den første delen. Den markeres.
3. Klikk en plan flate på den andre delen.

Den andre delen hopper slik at flaten ligger mot den første delens flate, vendt mot den. Leddet vises under **Ledd**, for eksempel «Roterende1», og høyre panel viser innstillingene.

- Hvis begge flatene er laget av rotasjoner, starter leddet som **roterende**. Ellers blir det **stivt**. Endre det etterpå.
- Buede flater kan ikke velges: «Denne flaten er buet. Velg en plan flate (for å dreie om et hull eller en rotasjons akse, velg den i leddet etterpå).»
- {{key:Esc}} avbryter et ledd du har startet (eller klikk en del i listen til venstre).

### Leddinnstillinger

| Innstilling | Hva den gjør |
|---|---|
| **Type** | Ett av leddene i tabellen under |
| **Vinkel (°)** | Dreier den andre delen om leddets akse (vinkelrett på flatene) |
| **Forskyvning (mm)** | Flytter den andre delen langs aksen, bort fra flaten. Negative verdier presser den inn i flaten |
| **Langs X**, **Langs Y**, **Vipp om X**, **Vipp om Y**, **Langs sporet**, **Sporretning** | De andre verdiene, vist for leddene som bruker dem |
| **Sentrer på** (for hver side) | Der leddets akse krysser flaten: «Flatens egen origo», aksen til en rotasjon («Akse for Roter1») eller aksen til ett hull («Hull1, hull 2») |

Hver verdi et ledd lar bevege seg har en glider under boksen. De andre settes én gang.

| Ledd | Hva beveger seg | Settes én gang |
|---|---|---|
| **Stiv** | ingenting | Vinkel, Forskyvning |
| **Roterende** | Vinkel (et hengsel) | Forskyvning |
| **Glider** | Forskyvning (en skuff) | Vinkel |
| **Sylindrisk** | Vinkel og Forskyvning (en aksel i et glidelager) | |
| **Plan** | Langs X, Langs Y tvers over flaten, og Vinkel (en del som skli på et bord) | |
| **Kule** | Vinkel (rotasjon), og Vipp om X og Y om leddets senter (et kuleledd) | |
| **Tapp i spor** | Langs sporet og Vinkel (en tapp i et rett spor) | Sporretning: sporets vinkel fra flatens X |

Flatens X og Y er de til den første delens flate. Leddets senter settes av **Sentrer på**.

«Flatens egen origo» er delens origo projisert på flaten, og den er ofte ikke der du vil at delene skal flukte. For runde deler og tapper setter du **Sentrer på** til rotasjonens eller hullets akse på begge sider. Aksene flukter da, slik som en konsentrisk kobling.

### Eksempel: to flenser boltet flate mot flate

1. Åpne flensdelen (en rotasjon med et sirkulært mønster av hull) og velg {{ui:Sammenstilling}}.
2. Velg {{ui:Legg til kopi}}.
3. Trykk {{key:J}}, klikk på den plane flaten på den første flensens skive (flaten boltehullene starter fra), og deretter samme flate på den andre flensen. Flatene ble laget av rotasjonen, så leddet er roterende.
4. Sett **Sentrer på** til «Akse for Roter1» for begge sider. Flensene deler nå en akse.
5. Skriv `22.5` i **Vinkel (°)** for å rette inn boltehullene, eller dra glideren.

## Lukkede sløyfer: mekanismer

Deler som er koblet i en ring (en firestangsmekanisme, en sveiv og glider, en ramme avstivet på begge sider) danner en **sløyfe**. PartCraft løser hver sløyfe slik at den lukkes. Leddene på den får verdiene som binder ringen sammen, og de beveger seg så lite de kan fra der de var.

- **Sett eller dra** en verdi på et ledd i en sløyfe, så følger resten av sløyfen. For en firestangsmekanisme drar du sveivens **Vinkel**, og koblingsstangen og vippearmen beveger seg med den. Verdien du satte beholdes. De andre beregnes ut fra den.
- I listen er et ledd i en sløyfe som fortsatt kan bevege seg **blått**: en annen verdi kan fortsatt settes. En sløyfe som ikke kan bevege seg (en avstivet ramme) forblir svart. En sløyfe som ikke kan lukkes, er **rød**.
- **Del**-boksen viser **Sløyfer**: hvor mange som er lukket, og hvor mange verdier som fortsatt kan bevege seg, for eksempel «1 lukket; 1 verdi kan fortsatt bevege seg».
- {{ui:Kontroller bevegelsen for kollisjoner}} sveiper et ledd i en sløyfe med sløyfen som følger med, steg for steg (se [Kontroller en sammenstilling for kollisjoner og bevegelse](topic:check-assembly)).

En flat mekanisme laget av flate stenger må stemme i dybde: to deler koblet flate mot flate på begge sider av en ring trenger samme stakkehøyde begge veier. Bruk et leds **Forskyvning** for å løfte en del der stabelen ikke går opp, ellers kan ikke sløyfen lukkes.

## Arbeid med delene

Klikk på en del i visningen eller i listen for å velge den. Høyre panel viser delens navn, hvor mange kopier det finnes, volumet, leddene, og om den er forankret, satt av leddene, eller «Ikke koblet: blir stående der den ble plassert.» Knapper:

- {{ui:Rediger denne delen}} (eller {{ui:Rediger del}} i verktøylinjen, eller dobbeltklikk delen i listen): åpner delen for redigering;
- {{ui:Sett inn en kopi}};
- {{ui:Gjør den til den forankrede delen}};
- {{ui:Fjern}}: fjerner også leddene, etter spørsmål.

En sammenstilling beholder minst én del: «En sammenstilling beholder minst én del. Lukk den i stedet.»

### Rediger en del på stedet

1. Velg en del og velg {{ui:Rediger del}}. Delen åpnes med sin historikk. Overskriften sier «Brakett (i sammenstillingen Brakett)».
2. Endre den som vanlig.
3. Velg {{ui:Tilbake}} i verktøylinjen. Sammenstillingen oppdateres: hver kopi av den delen endrer seg, og ledd på flater laget av skissekanter følger med.

Overføringen av endringen er ett steg i sammenstillingens angrehistorikk.

## Angre, lagre og lukk

- Sammenstillingen har sin egen angrehistorikk: {{key:Mod+Z}} og {{key:Mod+Y}} virker på ledd, innsettinger og innstillinger.
- {{ui:Lagre}} eller {{key:Mod+S}} laster ned `<sammenstillingens navn>.partcraft-asm.json`, med alle delene inni. Åpne den senere med {{ui:Åpne}}.
- {{ui:Lukk}} lukker sammenstillingen og går tilbake til delen du startet fra. Hvis sammenstillingen ikke er lagret, spør den: {{ui:Avbryt}}, {{ui:Forkast sammenstillingen}} eller {{ui:Lagre først}}.
- For å gi sammenstillingen nytt navn, klikk et tomt område slik at ingenting er valgt, og endre **Navn** i høyre panel.

## Store sammenstillinger

En sammenstilling kan inneholde tusenvis av kopier av noen få deler. Kopier av én del tegnes sammen. Et ledd du dreier, flytter bare delene bak det. Delelisten viser de første radene med en «Vis mer»-knapp under dem. Den valgte delen står alltid med.

- Mens du dreier eller zoomer visningen, tegnes en sammenstilling med mer enn omtrent 300 000 trekanter som en boks per del. Deretter tegnes den fullt ut et øyeblikk etter at du stopper.
- {{ui:Visninger}} › {{ui:Lettvektsvisning}} holder boksene på hele tiden. Valg av en del og ledd bruker fortsatt de virkelige delene.
- Hvor raskt den dreier, avhenger også av grafikkortet ditt. Tallene PartCraft har målt, står i versjonsnotatene, med maskinen de kom fra.

## Ledd-problemer

- En del ingen ledd når, vises som **fri**, og panelet sier «Brakett2 er ikke koblet til den forankrede delen, så den blir stående der den ble plassert.»
- En sløyfe som ikke kan lukkes (lengdene rekker ikke, en grense stopper et ledd, eller flatene stemmer ikke i dybde): «Roterende3 lukker en sløyfe som ikke kan lukkes: den er 2.000 mm unna. Sjekk flatene, forskyvningene og grensene for leddene i sløyfen.» Leddene blir røde.
- Hvis en flate eller akse et ledd bruker er borte etter redigering av en del: «Flaten dette leddet bruker, er borte fra Brakett.» Fjern leddet og lag det på nytt.

Neste: [Kontroller en sammenstilling for kollisjoner og bevegelse](topic:check-assembly).
