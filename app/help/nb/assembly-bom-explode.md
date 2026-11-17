---
title: Delliste, eksploderte visninger og flytting av deler
summary: Gi sammenstillingsdeler et nummer, beskrivelse og materiale, les og last ned stykklisten, lag eksploderte visninger med steg eller automatisk, flytt deler som ikke er koblet sammen for hånd, sett grenser for ledd, og eksporter hele sammenstillingen som STL, 3MF eller stykkliste.
keywords: stykkliste, bom, delnummer, materiale, tetthet, csv, eksploderet visning, eksploder, skjul, sporlinjer, flytt del, dra, gizmo, forskyv, roter, leddgrenser, eksport av sammenstilling, sammenstillingssteg, sammenstillingstegning, ballonger
from: ebc9f6f3
---

Disse verktøyene finnes i høyre panel for en sammenstilling (se [Bygg en sammenstilling](topic:build-assembly)).

## Delegenskaper

Velg en del i listen til venstre. Under **Delegenskaper** angir du:

- **Delnummer** (opptil 40 tegn) og **Beskrivelse** (opptil 200).
- **Materiale**: et vanlig materiale med sin tetthet, eller **Egendefinert tetthet…** for å skrive den inn i g/cm³. Panelet viser deretter delens masse.

Egenskapene tilhører delen, så alle kopier av den deler dem. De lagres i sammenstillingsfilen.

## Stykkliste

Uten valg ({{key:Esc}}) viser panelet **Stykkliste**: én rad per del med sitt postnummer, antall (hvor mange kopier), delnummer, navn, materiale og masse. Postnumrene følger rekkefølgen delene først dukker opp i listen. Masse beregnes fra hver dels volum (av det fasetterte volumlegemet nettkjernen bygger, litt lavt på runde deler) og materialet. En del uten materiale har ingen masse, og da finnes ingen total.

{{ui:Last ned CSV}} lagrer listen som en CSV-fil (også **Eksporter › Stykkliste (CSV)**). Den åpnes i et hvilket som helst regneark. Tekst som starter med = eller + får et innledende apostrof, slik at regnearket ikke kjører den som en formel.

## Eksploderte visninger

En eksplodert visning trekker delene fra hverandre for bilder. Den endrer aldri leddene eller hvor delene faktisk er: lagring, kollisjonskontroll og eksport bruker de virkelige posisjonene.

1. Uten valg velger du {{ui:Ny visning}} under **Eksploderte visninger**.
2. Under **Legg til et steg** krysser du av delene steget flytter, velger en **Retning** (+X … −Z, normalen til en flate du klikker, eller **Dra en pil i visningen**) og en **Avstand**, og deretter {{ui:Legg til steg}}. Med **Dra** drar du pilen og slipper: steget tar retningen og avstanden du dro.
3. Legg til flere steg. De spilles av etter hverandre.
4. Dra glideren mellom **Montert** og **Eksplodert** for å animere visningen. Stiplede sporlinjer går fra hver dels hvileposisjon til der den er nå.

{{ui:Auto (radial)}} flytter alle deler unntatt den forankrede bort fra sammenstillingens midte. {{ui:Auto (ledd)}} flytter hver tilkoblet del (med alt som er koblet under den) ut langs normalen til leddets flate. Du kan beholde flere navngitte visninger. Velg én i **Visning**, eller **Montert** for å sette delene tilbake. Visninger lagres i sammenstillingsfilen.

## Flytt en del for hånd

Bare en del uten ledd til den forankrede delen kan flyttes for hånd. Den forankrede delen er fast, og ledd plasserer resten. Velg delen og under **Flytt for hånd**:

- Skriv inn **ΔX, ΔY, ΔZ** og velg {{ui:Flytt}}, eller velg en akse og en **Vinkel**, og {{ui:Drei}} (om delens midte).
- {{ui:Dra for å flytte}} viser piler på delen: dra en pil for å flytte langs den aksen, eller en firkant for å flytte i et plan. {{ui:Dra for å dreie}} viser ringer for å dreie den. Hvert drag er ett steg å angre. {{key:Esc}} skjuler pilene.

## Leddgrenser

Velg et ledd som beveger seg, og under **Grenser** krysser du av **Hold … mellom grenser** for en hvilken som helst av verdiene, og angir deretter **Minimum** og **Maksimum**. Hver verdi holdes innenfor sine egne grenser, glideren dekker bare det området, og {{ui:Kontroller bevegelsen for kollisjoner}} sveiper bare mellom dem. Et sylindrisk ledd kan begrense vinkelen, forskyvningen eller begge. Hvis du endrer leddets type, fjernes grenser for verdier den nye typen ikke har.

## Eksporter hele sammenstillingen

I en sammenstilling skriver menyen **Eksporter** hele sammenstillingen med hver del der den er plassert:

- **STEP AP242 / AP214** og **Tegning (PDF)** er ikke bygget ennå i denne versjonen: de krever en eksakt kjerne, og er derfor nedtonet. Eksporter hver dels STEP (eksakt volumlegeme) fra delen i stedet.
- **STL**: ett nett av alle delene. **3MF**: hver del én gang, plassert én gang per kopi.
- **Stykkliste (CSV)**.

## Begrensninger

- Sammenstillingstegningen og STEP for sammenstillingen er ikke bygget ennå i denne versjonen (de krever en eksakt kjerne). Eksploderte visninger er for bilder på skjermen.
