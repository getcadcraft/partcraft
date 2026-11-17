---
title: Afrund, affas og hulning med Afrund, Affas og Skal
summary: Vælg kanter og tilføj konstante eller variabel-radius-afrundinger og lige-, to-afstands- eller afstand-og-vinkel-affasninger, gør en del hul med Skal ved at vælge de flader, der skal åbnes, ændr hvilke kanter eller flader en feature bruger, og ret de sædvanlige fejl.
keywords: afrunding, afrund, blending, affasning, affas, skal, hulning, vægtykkelse, kanter, flader, vælg kanter, shift-klik, åben flade, eksakt kerne, mesh-kerne, ikke lavet
from: e41c1c12
---

:::note
**I denne version** bygger PartCraft afrundinger og affasninger med mesh-kernen, kun på **rette kanter mellem to plane flader**: kanterne på en kasse og de rette kanter på ekstruderinger og udskæringer, ydre eller indre hjørner (et indre hjørne får tilføjet materiale). Runde kanter, som hulkanter, og en radius, der ændrer sig langs kanten, er endnu ikke lavet. Hvor to afrundede kanter mødes i et hjørne, bliver afrundingerne til en gering (de mødes i en skarp fold) og ikke en blød overgang. **Skal** virker også, bygget af mesh-kernen: den åbner kun plane flader, skaller med forskellige vægtykkelser er endnu ikke lavet, og den er langsom på dele med mange runde flader. Se [Hvad der endnu ikke er lavet](topic:not-built-yet).
:::

{{ui:Afrund}} runder kanter, {{ui:Affas}} skråkanter dem, og {{ui:Skal}} hulner delen. Alle tre virker på legemets kanter og flader og bygges af mesh-kernen. Deres runde flader er facetteret, ligesom alle runde flader (**Kurver** styrer, hvor fint); de runde flader er cylindre, du kan vælge og måle (se [Mesh-kernen](topic:solid-kernels)).

## Afrund eller affas kanter

### Vælg kanterne først

1. Klik på en kant på delen. Hele kanten fremhæves, og højre panel siger **Kant**: dens type (Ret, Cirkel eller bue, Kurve), længde og de flader, den ligger mellem.
2. For at tilføje flere kanter: {{key:Shift}}+klik på dem. Hver markeres; {{key:Shift}}+klik på en markeret kant for at fjerne den. Panelets overskrift tæller dem ("4 kanter"), og statuslinjen siger »4 kanter valgt. Afrund eller Affas afrunder/affaser dem; Shift+klik vælger flere, Esc rydder.«
3. Vælg {{ui:Afrund}} eller {{ui:Affas}} i værktøjslinjen, eller de samme knapper i højre panel.

Featuren tilføjes med alle de valgte kanter: en 2 mm afrunding eller en 1 mm affasning. Statuslinjen siger for eksempel »Fillet1 tilføjet (4 kanter). Ændr dens størrelse til højre; Vælg kanter ændrer hvilke.«

### Eller tilføj featuren først

1. Med intet valgt, vælg {{ui:Afrund}} eller {{ui:Affas}}.
2. PartCraft går i valgtilstand: panelets overskrift siger "Fillet1: vælger", delen vises, som den var før afrundingen (panelet siger det), og værktøjslinjen viser {{ui:Færdig}}.
3. Klik på hver kant for at tilføje den; klik igen for at fjerne den. Statuslinjen tæller dem.
4. Vælg {{ui:Færdig}} (eller {{ui:Færdig med at vælge}} i panelet), eller tryk {{key:Esc}} eller {{key:Enter}}.

### Indstillinger

| Indstilling | Afrund | Affas |
|---|---|---|
| Størrelse | **Radius (mm)**, standard 2 | **Afstand (mm)** tilbage fra kanten på begge flader, standard 1 |
| **Kanter** | Hvor mange | Hvor mange |

Listen nedenfor navngiver hver kant med de to flader, den forbinder, for eksempel »Kant 1: Extrude1 endeflade × Extrude1 side«. **Fjern** fjerner en. {{ui:Vælg kanter}} går tilbage til valg. Dobbeltklik på featuren i historikken gør det samme.

Kanter huskes af de to flader, de forbinder, så de bliver på den rigtige kant, når du ændrer et mål tidligere i historikken.

### Variable afrundinger og affasningstyper

- **Variabel radius** (afrunding): endnu ikke lavet i denne version (»En afrunding, hvis radius ændrer sig langs kanten: endnu ikke lavet (den kræver en eksakt kerne). Giv den én radius.«). Med en eksakt kerne: sæt flueben og angiv **Slutradius (mm)**. Radius ændrer sig lineært fra **Radius** i den ene ende af hver kant til **Slutradius** i den anden; **Byt enderne** vender den om.
- **Type** (affasning): **Lige afstand**, **To afstande** (en **Anden afstand** på den anden flade) eller **Afstand og vinkel** (afstanden på den ene flade, skråningen i **Vinkel (°)** til den flade). **Vend siderne** sætter den første afstand på den anden flade.

## Skal en del

1. Klik på den plane flade, der skal stå åben, for eksempel toppen af en kasse. Eller {{key:Shift}}+klik flere flader.
2. Vælg {{ui:Skal}} i værktøjslinjen, eller {{ui:Skal, åbner denne flade}} i fladens panel.

Delen bliver en 2 mm væg med de valgte flader åbne. Indstillinger:

| Indstilling | Hvad den gør | Standard |
|---|---|---|
| **Væg (mm)** | Vægtykkelsen | 2 |
| **Vægge vokser udad (fladerne forbliver inde)** | Sat flueben: væggene tilføjes udenfor, så indersiden beholder delens størrelse | Fra: væggene går indad, og ydersiden beholder sin størrelse |
| **Åbne flader** | Hvor mange flader der fjernes | |

Indad er væggene præcis vægtykkelsen: ydre hjørner forbliver skarpe, indre hjørner bliver afrundede (radius = væggen), og et hul gennem delen får et rør af væg omkring sig. Udad tilføjes væggene udenfor den oprindelige overflade, som bliver hulningen, og de ydre kanter bliver afrundede. De indre flader navngives efter de flader, de forskydes fra, så du kan vælge dem.

Kun plane flader kan åbnes: vælger du en buet, siger programmet »Skal: i denne version åbner den kun plane flader (mesh-kernen bygger den).« En skal er langsom på dele med mange runde flader (flere sekunder pr. tusind trekanter): brug en grovere **Kurver**-indstilling, mens du designer.

{{ui:Vælg flader}} ændrer, hvilke flader der er åbne, på samme måde som valg af kanter. Listen navngiver hver, for eksempel »Flade 1: Extrude1 endeflade«. En skal uden åbne flader er ikke tilladt: »Vælg de flader, der skal fjernes (åbnes), og skal derefter.«

## Rækkefølgen betyder noget

Features bygges oppefra og ned. En afrunding før en skal bliver hulet med delen, så indersiden får afrundede hjørner også. En afrunding efter en skal runder kun de kanter, du vælger. Flyt features med {{ui:Flyt op}} og {{ui:Flyt ned}} (se [Ændr en del via dens historik](topic:edit-history)).

Mønstre og spejlinger kan ikke kopiere en afrunding, affasning eller skal: »Fillet1 ændrer legemets kanter eller vægge; den kan ikke kopieres. Kopiér de features, der laver massive legemer (ekstruderinger, drejninger, huller, importer).« Lav først et mønster af hullerne eller udskæringerne, og afrund derefter kanterne på alle kopierne i én afrunding.

## Når det fejler

| Meddelelse | Hvad du gør |
|---|---|
| »En 5 mm afrunding passer ikke her (den er for stor til en flade ved siden af en af kanterne, eller kanterne mødes i et hjørne, kernen ikke kan blende).« | Brug en mindre radius, eller afrund færre kanter ad gangen (flere afrundings-features, den mindste sidst) |
| »En kant den runder er væk: kanten mellem Extrude1 og Cut2.« | En tidligere ændring fjernede kanten. Vælg {{ui:Vælg kanter}}, fjern den røde kant, og vælg den nye |
| »Skallen kunne ikke laves med denne tykkelse (…).« | Væggen er tykkere end en smal del af modellen, eller end en afrundings radius. Gør væggen tyndere, eller afrundingerne større end væggen |
| »Den flade har intet navn, historikken kan følge; vælg en anden.« | Vælg en flade lavet af en feature (de fleste flader er det) |
| »Afrunding: i denne version kun rette kanter mellem to plane flader (mesh-kernen bygger dem). Afrund eller affas buede kanter i skitsen.« (også Affas) | En valgt kant er rund, som en hulkant, eller ligger på en buet flade. Fjern den med {{ui:Vælg kanter}}, og afrund eller affas hjørnet i skitsen i stedet |
| »En afrunding, hvis radius ændrer sig langs kanten: endnu ikke lavet (den kræver en eksakt kerne). Giv den én radius.« | Fjern markeringen i **Variabel radius** |
| »Afrunding af mesh-kernen: hvor afrundede kanter mødes, får de en gering, ikke en blød overgang.« (⚠ i historikken) | En advarsel, ikke en fejl: delen er bygget. Valgte kanter mødes i et hjørne, og afrundingerne mødes der i en skarp fold. Afrund færre kanter, eller accepter folden |
| »Skal: i denne version åbner den kun plane flader (mesh-kernen bygger den).« | En åben flade er buet. Brug {{ui:Vælg flader}} og fjern den; åbn kun plane flader |

## Grænser

I denne version virker afrundinger og affasninger kun på rette kanter mellem to plane flader, med én radius, og afrundinger, der mødes i et hjørne, får en gering. Skaller åbner kun plane flader. Med en eksakt kerne ændrer en variabel afrunding sig lineært langs hver kant (én lov pr. feature; ingen radiusværdier i punkter langs den). Flade-afrundinger, fulde runde afrundinger og skaller med forskellige vægtykkelser er endnu ikke lavet.
