---
title: 3D-grovbearbeiding og restbearbeiding
summary: Rydd råemnet rundt hele modellen nivå for nivå med en flat, radius- eller kulefres, og la materiale stå igjen til finish; la deretter en mindre fres skjære bare der den første etterlot materiale. Hva banene garanterer, og hva de ikke gjør.
keywords: 3d-grovbearbeiding, grovbearbeiding, grov, restbearbeiding, restgrovbearbeiding, gjenværende råemne, materiale å la stå igjen, nedstikk, nivåer, z-nivå, vannlinje, rampe, stikking, overskjæring, mindre verktøy

from: 29ddc266
---

To operasjoner i Produksjon, under {{ui:More}} i verktøylinjen, rydder råemne fra **hele modellen** i 3D, med verktøyet holdt vertikalt (eller langs operasjonens egen [verktøyretning](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). De krever ingen valg.

## 3D-grovbearbeiding

{{ui:3D rough}} arbeider seg ned fra toppen av råemnet ett **nedstikk** om gangen. På hvert nivå rydder den alt verktøyet kan nå uten å berøre modellen: rette rader med en **stegavstand** mellom seg (en brøkdel av verktøydiameteren), og deretter én gang rundt kanten av det området den kan nå, slik at vegger følges og ikke står igjen som en rekke trinn i planen.

- **Materiale å la stå igjen**: hvor langt verktøyet holder seg fra modellen overalt, for finishgangen (standard 0.5 mm).
- **Et nivå ved hver flat flate**: et ekstra nivå i høyden av hver flat flate på modellen (pluss materialet å la stå igjen), slik at et gulv ikke står igjen nesten ett helt nedstikk høyt.
- **Ignorer materiale tynnere enn**: materiale som er tynnere enn dette, oppover eller sidelengs, er ikke verdt en gang (0.05 mm for grovbearbeiding, 0.5 mm for restbearbeiding, slik at et hårstrå igjen langs en vegg ikke sender det mindre verktøyet rundt hver vegg).
- **Bunn**: ingenting skjæres under denne høyden. Tomt betyr bunnen av modellen.

Den starter fra råemnet **slik operasjonene før den lot det stå**: etter en flatefres skjærer den ikke luft der planfresen har vært.

Nedstikk: der verktøyet ville møte råemne på vei ned, kjører det en rampe langs sin egen gang i **rampevinkelen**, frem og tilbake over høyst to verktøydiametre. En gang som er for kort til det, stikkes rett ned med stikkingstilmatingen; operasjonen teller dem og advarer, fordi et verktøy som ikke skjærer på sitt senter, ikke bør gjøre det.

## Restbearbeiding

{{ui:Rest}} er den samme strategien for **et mindre verktøy etter et større**. Den leser simuleringen av råemnet og skjærer bare der materiale fortsatt står: i innvendige hjørner det større verktøyet ikke kunne dreie i, i spor det ikke passet i, og i trinnene det etterlot på helninger. Ellers gjør den ingenting, så banen er en liten del av det samme verktøyet ville tatt på friskt råemne.

Plasser den etter grovbearbeidingsoperasjonen og velg det mindre verktøyet. Den trenger simuleringen av råemnet fra operasjonene før den, som arbeidsområdet alltid kjører.

## Hvor gode banene er

- **Ingen overskjæring.** Verktøyets posisjoner regnes ut på et rutenett, med fresen tatt litt større enn den er (med 1.4 rutenettceller til sidene, og med materialet å la stå igjen), slik at den overalt den står, er klar av modellen. Testene sjekker hvert skjærepunkt mot det eksakte verktøyet på det eksakte nettet, og simuleringen av råemnet etter hver kjøring: ingen overskjæring, ingen eilgang gjennom råemne.
- **Prisen for det**: vegger beholder litt mer enn materialet å la stå igjen, opptil beløpet vist som «Ekstra materiale på vegger» på operasjonen (om lag 0.5 mm for et Ø6-verktøy, mindre for et mindre). Finishgangen tar det.

Dette er ikke:

- Rader er rette linjer, ikke forskyvninger av delens form eller kurver med konstant inngrep. De gir flere løft og luftbevegelser enn en forskjøvet eller adaptiv strategi, og den første raden på hvert nivå skjærer verktøyets fulle bredde. For flatbunnede lommer er [Adaptiv](topic:manufacture) den bedre grovbearbeidingen.
- Verktøyets skaft og holder kontrolleres ikke. En advarsel sier når kuttet er dypere enn sporlengden.
- Undersnitt sees ikke: modellen er det verktøyet møter når det kommer ned langs sin akse. For å grovbearbeide en side, gi en annen operasjon en [vippet verktøyretning](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Restbearbeiding kjenner råemnet bare så godt som rutenettet i simuleringen (celler på 0.1 til 2 mm, etter delens størrelse).
- På en stor del er programmet langt (over 100 000 bevegelser for en 200 mm flens med et Ø6-verktøy) og tar om lag et minutt å regne ut, og hver endring i arbeidsområdet regner hele programmet ut på nytt. Bruk det største verktøyet som passer til grovbearbeidingen.
- Sjekk utdataene i maskinens egen simulator før skjæring.
