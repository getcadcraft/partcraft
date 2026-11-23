---
title: Probing: finn delen og sett arbeidsforskyvningen
summary: Berør en toppflate, en side, et hull eller en tapp med en tastehode, og la styringen flytte arbeidsforskyvningen til der delen faktisk er, eller bare mål. Hva hver styring kan gjøre, og hva som ikke er bevist.
keywords: probe, probing, tastehode, berøringsnullstilling, arbeidsforskyvning, G54, G31, G38.2, hopp, referanse, finn senter, boring, tapp, kant, sett null, mål, kontroll, G10

from: 1f718b82
---

{{ui:Probe}} i Produksjon skriver en probing-syklus inn i programmet: tasten berører delen, og styringen flytter arbeidsforskyvningen (G54) med differansen mellom der flaten ble funnet og der modellen sier den er. Senere operasjoner skjærer da der delen faktisk er.

**Ingenting her er kjørt på en maskin.** Bevegelsene før en berøring er vanlige bevegelser: tasten overvåkes ikke før selve probe-bevegelsen. Kjør den sakte, i luften først, med hånden på mating-stopp.

## Bruk den

1. På fanen **Verktøy** legger den første probe-operasjonen til et **tastehode**: dets kuleddiameter, og proben-tilmatingen (100 mm/min med mindre du setter en).
2. Trykk {{ui:More}} i verktøylinjen for Produksjon, deretter {{ui:Probe}}, og klikk det som skal berøres. Hvert valg er én syklus, i den rekkefølgen du klikker:

| Valg | Syklusen | Hva som settes |
|---|---|---|
| En flat flate som vender opp langs verktøyaksen | Ett trykk nedover | Z |
| En flat sideflate vinkelrett på X eller på Y | Ett trykk inn mot flaten, litt under toppen | X eller Y |
| Et hull eller en tapp langs verktøyaksen | Fire trykk (+X, −X, +Y, −Y) | X og Y for senteret |

3. **Med resultatet**: {{ui:Set the work offset}} eller {{ui:Measure only}}.
4. **Start så langt unna** og **Søk så langt forbi** er hvor langt fra den forventede flaten probe-bevegelsen starter, og hvor langt forbi den tasten kan gå før styringen gir opp. **Dybde** er hvor langt under toppen av et hull, en tapp eller en sideflate kulen går.

Legg probe-operasjonen først, før noe skjærer.

## Hva hver styring skriver

| Styring | Berøring | Resultat |
|---|---|---|
| Fanuc-lignende | `G31`, posisjonen lagret i `#101` til `#104` | Forskyvningsvariablene (`#5221` til `#5223`) flyttes med funnet − forventet. Bare måling: differansen legges i `#110` (og `#111`). |
| LinuxCNC | `G38.2`, posisjonen lagret i navngitte parametere | `G10 L2 P1` med den nye forskyvningen. Bare måling: en `(DEBUG, …)`-melding. |
| GRBL | `G38.2` | En berøring setter aksen med `G10 L20 P1`. GRBL har ingen variabler, så den **kan ikke regne ut et senter**: filen sier det i en kommentar og setter ingenting. |

Regnestykket er postens, så du kan endre det: hendelsene er `probe-move` og `probe-set` ([Postprosessorer som kan redigeres](topic:post-processors)).

## Begrensninger

- Én arbeidsforskyvning (G54). Flater vinkelrett på aksene bare: ingen vinkel, ingen hjørnesyklus, ingen rotasjon av arbeidet.
- Ingen verktøymåler, ingen sjekk for brukt verktøy, ingen måling av en størrelse mot en toleranse, ingen rapport.
- Spindelen startes ikke for en probe, og kjølevæsken står av; ingenting sjekker at verktøyet i spindelen faktisk er en probe.
- Simuleringen av råemnet kjører ikke en probing-bane.
- Probens egen kalibrering (kuleforskyvning, nåleutbøyning, utløsningsretning) er styringens.
