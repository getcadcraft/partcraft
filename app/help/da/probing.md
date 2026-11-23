---
title: Probing: find delen og sæt arbejdsforskydningen
summary: Berør en topflade, en side, et hul eller en udhævning med en probe, og lad styringen flytte arbejdsforskydningen til det sted, hvor delen virkelig er, eller mål kun. Hvad hver styring kan, og hvad der ikke er afprøvet.
keywords: probe, probing, berøringsprobe, berøring, arbejdsforskydning, g54, g31, g38.2, spring over, datum, find centrum, hul, udhævning, kant, sæt nul, mål, kontrol, g10
from: 1f718b82
---

{{ui:Probe}} i Fremstilling skriver en probingcyklus ind i programmet: proben berører delen, og styringen flytter arbejdsforskydningen (G54) med forskellen mellem, hvor fladen blev fundet, og hvor modellen siger, den er. Senere operationer skærer så der, hvor delen virkelig er.

**Intet her er kørt på en maskine.** Bevægelserne før en berøring er almindelige bevægelser: proben overvåges ikke, før selve probingbevægelsen. Kør den langsomt, i luften først, med hånden på fremføringsstop.

## Brug den

1. På fanen **Værktøjer** tilføjer den første probe-operation en **berøringsprobe**: dens kugle-diameter og probingfremføringen (100 mm/min, medmindre du sætter en).
2. Tryk på {{ui:Mere}} i Fremstillings-værktøjslinjen, derefter {{ui:Probe}}, og klik på det, der skal berøres. Hvert valg er én cyklus, i den rækkefølge du klikker:

| Valg | Cyklussen | Det, der sættes |
|---|---|---|
| En plan flade, der vender op ad værktøjsaksen | Én berøring nedad | Z |
| En plan sideflade vinkelret på X eller Y | Én berøring mod fladen, lidt under dens top | X eller Y |
| Et hul eller en udhævning langs værktøjsaksen | Fire berøringer (+X, −X, +Y, −Y) | X og Y for dens centrum |

3. **Med resultatet**: {{ui:Sæt arbejdsforskydningen}} eller {{ui:Mål kun}}.
4. **Start så langt væk** og **Søg så langt forbi** er, hvor langt fra den forventede flade probingbevægelsen starter, og hvor langt ud over den proben må køre, før styringen giver op. **Dybde** er, hvor langt under toppen af et hul, en udhævning eller en sideflade kuglen går.

Placér probe-operationen først, før noget skærer.

## Hvad hver styring skriver

| Styring | Berøring | Resultat |
|---|---|---|
| Fanuc-lignende | `G31`, positionen gemt i `#101` til `#104` | Forskydningsvariablerne (`#5221` til `#5223`) flyttes med fundet − forventet. Mål kun: forskellen efterlades i `#110` (og `#111`). |
| LinuxCNC | `G38.2`, positionen gemt i navngivne parametre | `G10 L2 P1` med den nye forskydning. Mål kun: en `(DEBUG, …)`-besked. |
| GRBL | `G38.2` | En berøring sætter aksen med `G10 L20 P1`. GRBL har ingen variabler, så den **kan ikke regne et centrum ud**: filen siger det i en kommentar og sætter intet. |

Regnestykket er postens, så du kan ændre det: hændelserne er `probe-move` og `probe-set` ([Postprocessorer du kan redigere](topic:post-processors)).

## Begrænsninger

- Én arbejdsforskydning (G54). Flader vinkelret på akserne alene: ingen vinkel, ingen hjørnecyklus, ingen drejning af arbejdet.
- Ingen værktøjsindstiller, ingen kontrol af knækket værktøj, ingen måling af en størrelse mod en tolerance, ingen rapport.
- Spindlen startes ikke for en probe, og kølemiddel forbliver slukket; intet kontrollerer, at værktøjet i spindlen er en probe.
- Råemne-simuleringen kører ikke en probingbane.
- Probens egen kalibrering (kugleforskydning, taster-udbøjning, udløsningsretning) er styringens.
