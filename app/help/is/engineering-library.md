---
title: Verkfræðisafnið
summary: Kennslubókarformúlur sem læsileg handrit, í SI-einingum, með hverri niðurstöðu og uppruna hennar: rörflæði og rásaflæði, varmaflutningur og varmaskiptar, þrýstihlutar, gasaflfræði, eiginleikar vatns og lofts, efni og einingar sem eru athugaðar. Til hvers hver þeirra nýtist og hvar hún hættir.
keywords: verkfræði, safn, einingar, Darcy-Weisbach, Colebrook, Reynolds, núningsstuðull, Dittus-Boelter, Gnielinski, NTU, verkunarstuðull, LMTD, ugga, Barlow, Lamé, stútur, ísentrópískt, Mach, stíflað flæði, vatn, loft, eiginleikar, efni, heimildir
from: 786ef967
---

Verkfræðisafnið er safn handrita í Script-vinnusvæðinu (`craftlib/eng`). Hvert þeirra er fall sem þú getur lesið ofan frá og niður, með haus sem gefur **aðferð** þess, **einingar**, **takmörk**, **tilvísanir** og **athugun** með útreiknaðri tölu. Þau nota SI-einingar alls staðar og skila stærðum sem bera **einingu** og **uppruna**, þannig að gagnablað getur prentað hvaðan hver tala kom.

## Einingar sem eru athugaðar

`to_si(10, 'bar', 'Pa')` breytir gildi og hafnar einingu sem mælir eitthvað annað (lengd þar sem þrýstingur er búist við). `from_si`, `unit_convert(1, 'bar', 'psi')` og `unit_kind('W/(m K)')` („varmaleiðni“) virka á sama hátt. `temp_k(25, 'C')` og `temp_from_k` breyta hitastigum, sem hafa núllpunktsfrávik.

## Eiginleikar

- `fluid('water', T)` og `fluid('air', T, p)`: eðlismassi, seigja, varmaleiðni, eðlisvarmi, Prandtl-tala. Vatn 0 til 100 °C, loft 250 til 600 K; utan þess hættir það í stað þess að framreikna.
- `material('ss304')`: teygjustuðull, Poisson-stuðull, eðlismassi, flæðimörk, varmaleiðni, eðlisvarmi, þensla: gildi við stofuhita úr sömu gagnablöðum og Simulation. Raunveruleg hönnun notar vottuð gildi birgjans. Hitaferlar eru ekki smíðaðir enn.

## Flæði í rörum og rásum

`reynolds`, `hydraulic_diameter`, `friction_factor` (lagskipt, síðan Colebrook-jafnan fyrir ókyrrt flæði; 2300 til 4000 bilið hefur enga áreiðanlega formúlu og segir það), `darcy_weisbach`, `minor_loss`, `pipe_flow` (kringlótt rör, allt í einu) og `rect_channel` (lagskipt rétthyrnd rásir eftir Shah og London-aðlögun).

## Varmaflutningur

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (velur lagskipt eða ókyrrt og nefnir tengslin), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` og `ntu_for` (verkunarstuðull-NTU-tengslin fyrir mótflæði, samsíða flæði, skel og rör, þverflæði og einn breytilegan straum) og `hx_size` (stærð UA sem álag þarf; segir hversu mikið er mögulegt þegar álagið næst ekki).

## Þrýstihlutir

`allowable_stress` (flæðimörk deilt með öryggisstuðli), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, eftir hringspennu- eða skerspennuviðmiði) og `wall_sphere`. Þetta eru kennslubókarmörk, **ekki útreikningur samkvæmt þrýstihylkisstaðli**: engin tæringarheimild, samskeytanýting eða staðalstuðlar.

## Gasaflfræði

`isentropic` (hlutföllin við Mach-tölu), `mach_from_area`, `choked_flow`, `throat_area` og `exit_mach`, fyrir fullkomið gas án núnings, varma eða höggbylgja.

## Athugaðu niðurstöðuna

`check_stress`, `check_thermal` og `check_flow` keyra eigin spennu-, leiðni- og flæðileysa PartCraft á smíðuðum hluta úr handritinu og lesa til baka hámarksspennu og færslu, hitastig og varmaflæði, og gegndræpi rásarnets. Þeir breyta engu í leysunum. Spennu- og hitaathuganirnar nota voxla, þannig að bogadreginn flötur er þrepaður, og spennan í skörpu innra horni eða undir punktálagi fer eftir stærð voxlsins.
