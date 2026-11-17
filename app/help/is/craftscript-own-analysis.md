---
title: Skrifaðu þína eigin greiningu
summary: Byggðu greiningu sem skriftur í Skriftvinnusvæðinu: möskvaðu hlutann, settu saman og leystu, sýndu reitinn og samleitnilínurit, athugaðu niðurstöðuna gegn handreikningi, og geymdu skrefin sem aðskildar skriftur sem deila breytum.
keywords: eigin greining, sérsniðin greining, FEA-skrift, endanlegur frumureitur, samsetning, stífleiki, jaðarskilyrði, leysa, pcg, strjált, reitur, eftirvinnsla, samleitni, sannprófun, handreikningur, athugun, vinnuflæði
from: 0f471a8e
---

Greining í Skriftvinnusvæðinu er nokkrar stuttar skriftur sem gefa hver annarri breytur. Byrjaðu á [safnfalli](topic:craftscript-library) sem er nálægt því sem þú þarft, gerðu afrit og breyttu því; eða byggðu eina upp eins og hér fyrir neðan.

## 1. Möskvi

```
model = part();                  % hluturinn sem þú ert að móta, sem líkan
m = tetmesh(model, 4);           % fjórflötungar um 4 mm á breidd
show(m)
```

Athugaðu möskvann í sýninni áður en þú heldur áfram: {{key:F}} passar hann, {{ui:eye}} í **Sýnt** felur hlutinn.

## 2. Settu saman og leystu

Skrifaðu lykkjuna yfir frumurnar í skriftuna (hún lítur út eins og í kennslubókinni) og láttu þungu hlutana eftir innbyggðu föllunum: frumufylki, strjála samsetningu úr þrenndum, og samtengdan gradient-leysi með forskilyrðingu. Safnfall eins og `static_tet` (þegar safnið hefur það) er heilt dæmi til að afrita.

## 3. Sýndu niðurstöðuna

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % eitt gildi á hvern hnút
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Bil skýringarinnar má skrifa inn eða setja aftur á {{ui:Sjálfvirkt}}.
- Smelltu á netið til að lesa gildin í hnút.
- Línurit sem heldur sama `'id'` er uppfært á sínum stað, þannig að prentaðu og teiknaðu inni í lykkjunni þinni til að sjá það samleitast.

## 4. Athugaðu það

Berðu saman við eitthvað sem þú veist: endabeygju einsendabita gegn PL³/3EI, plötu með gati gegn spennuþéttistuðli hennar, viðbrögðin gegn álögunum. Skrifaðu athugunina sem eigin skriftu, þannig að hún keyri aftur eftir hverja breytingu:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Geymdu það

- Hvert skref getur verið sinn eigin skriftuflipi: þau deila breytunum, þannig að keyrðu þau hvert á eftir öðru.
- Skriftur eru vistaðar í hlutanum. Hakaðu við **Vista forritsbreyturnar með hlutanum** á flipanum Forritsbreytur til að geyma niðurstöðurnar líka (allt að 32 MB).
- {{ui:Vista}} í Skrift-hópnum sækir skriftu til að deila henni; {{ui:Opna}} sækir eina inn.
