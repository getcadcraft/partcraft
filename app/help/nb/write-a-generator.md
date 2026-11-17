---
title: Skriv en generator
summary: En generator er et CraftScript-, Lua- eller Python-skript med kommentarlinjer som angir inndataene. Hvordan inndataene blir til et skjema, hva skriptet må etterlate seg (body, sheet, problems), et lite komplett eksempel, og hvordan du åpner skriptet ditt som generator.
keywords: generator, skriv, skript, craftscript, hode, inndata, @input, @generator, legeme, ark, problemer, to_body, mfg_check, dataark, eksempel, gitter, felt
from: ed8a5ed8
---

En generator er et vanlig skript ([CraftScript](topic:craftscript), Lua eller Python) med noen få kommentarlinjer øverst. PartCraft leser kommentarene og lager skjemaet; skriptet ditt leser inndataene som variabler som allerede er satt.

## Hodet

Legg disse i kommentarlinjer (`%` i CraftScript, `--` i Lua, `#` i Python):

```
% @generator Varmeveksler
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Massestrøm"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Overflate"
% @input solid: = true
% @input note: = "tekst"
```

Et inndata er `navn: enhet = standardverdi`, deretter eventuelt et område `[min .. max]` (tall holdes innenfor det), en liste med valg `{a, b, c}` og en etikett i anførselstegn. Enheten er bare en merkelapp for skjemaet: **verdien kommer i den enheten**, så et skript som vil ha SI, må konvertere den. `to_si(value, 'kg/s', 'kg/s')` sjekker også at enheten betyr det du tror. Et navn består av bokstaver, siffer og understrek; `body`, `sheet` og `problems` er reservert.

## Hva skriptet etterlater seg

| Variabel | Hva |
|---|---|
| `body` | **Påkrevd.** Et overflatenett, vanligvis fra `[body, info] = to_body(field, h)`. Det blir reparert og kontrollert når kjøringen er ferdig. |
| `sheet` | Valgfri. En struct: hvert felt er et tall eller tekst, eller en struct med `value`, `unit`, `ref` og `note`. Den blir dataarket. |
| `problems` | Valgfri. `problems`-cellen fra `mfg_check(field, 'sls', struct(), h)`, eller dine egne oppføringer. De går til kontrollene og til problemlisten. |

## Et komplett lite eksempel

```
% En hul kube med en vegg.
% @generator Hul kube
% @input side: mm = 12 [4 .. 40] "Side"
% @input wall: mm = 1.5 [0.5 .. 5] "Vegg"
% @input h: mm = 0.5 [0.25 .. 2] "Voksel-størrelse"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'av nettet');
```

Den lager en lukket boks, og kontrollen melder at den forseglede innsiden er en feil for en pulverprosess. Gjør vokselstørrelsen `h` høyst en tredjedel av den tynneste veggen du vil ha: under omtrent tre voksler er ikke en vegg pålitelig.

## Felt

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (et rotasjonslegeme fra en profil), `tpms` (gyroid-, Schwarz P- og diamantflater, med en cellestørrelse og vegg som kan endre seg over delen), `lattice` og `lattice_beams`, `along` (en rund kanal langs en bane), de boolske operasjonene `field_union`, `field_intersect`, `field_subtract`, den glatte `field_blend`, og `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` gir den signerte avstanden i punktene (negativ inni), og `field_voxel` gir voksler til løserne. [Felt](topic:fields) forklarer hva de er.

Grenser verdt å kjenne til: en platevegg tykkere enn omtrent en fjerdedel av cellen lukker kanalene; et trekk tynnere enn omtrent tre voksler kan klemme seg sammen; `along` kobler runde kjegler sammen, så en radius som endrer seg raskt, gir en utbuling (bruk `field_revolve` for en profil).

## Åpne skriptet ditt som generator

I arbeidsområdet {{ui:Ingeniør}} klikker du på {{ui:Åpne}} og velger filen. Et skript uten `@generator`- eller `@input`-linje blir avvist: da er det ingenting å sette. Generatoren lagres i denne nettleseren (inntil 20), og {{ui:Fjern}} sletter den. Et legeme som startes fra den, får en kopi av skriptet, slik at delen ikke er avhengig av det.

En fil kan også inneholde flere generatorer: en JSON-pakke `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
