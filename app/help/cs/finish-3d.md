---
title: 3D dokončování: rovnoběžné a podle hřebenů
summary: Dokončete celou křivou plochu modelu kulovou, nosovou nebo plochou frézou s vertikální osou, v rovnoběžných čarách pod libovolným úhlem nebo v průchodech v nastavené vzdálenosti, aby hřebeny mezi nimi měly výšku, kterou požadujete. Co dráhy zaručují a co ne.
keywords: 3D dokončování, dokončování, rovnoběžně, raster, hřebeny, scallop, konstantní hřeben, hrot, kulová fréza, nosová fréza, povrch, tolerance, krok, sklon, zásoba k ponechání, drop cutter, zařezání
from: e1587d0a
---

Dvě operace v Manufacture řežou **celou plochu modelu** s nástrojem drženým svisle (tři osy). Nevyžadují žádný výběr: pracují se vším z modelu, co je vidět shora. Díl nejdřív zhrubněte (adaptivně nebo kapsou); dokončovací průchod přes neobrobený materiál varuje, že by řezal hluboko.

## Rovnoběžně

Rovné čáry přes model pod **úhlem**, který nastavíte, každá o **krok** od sebe (zlomek průměru nástroje). Každá čára sleduje povrch: hrot nástroje je tak vysoko, jak musí být, aby žádná část frézy nešla pod model, a čára se řeže jemněji všude, kde se povrch ohýbá. S **Cik-cak** zapnutým zůstane nástroj mezi čarami zapuštěný, kde to lze bezpečně (kontrolováno podél pohybu); jinak zvedne.

- **Tolerance**: jak daleko od skutečné výšky hrotu smí být přímý kus čáry (polovina se použije jako limit uprostřed každého kusu). Výchozí 0.01 mm.
- **Jen kde je povrch alespoň … a nejvýše … (°)**: dokončete jen mělké nebo jen strmé oblasti. Kde je povrch mimo rozsah, čára se vynechá a nástroj se zvedne.
- **Zásoba k ponechání**: model odsazený o tuto vzdálenost (fréza zvětšená o ni: přesné pro kulové a nosové nástroje; plochý nástroj zanechá nejméně tolik).
- **Dno**: nic se neřeže pod touto hodnotou z.

## Hřebeny (scallop)

Průchody, které si udržují konstantní vzdálenost přes povrch od sebe, takže hřeben (scallop) zbylý mezi dvěma sousedními průchody má **výšku**, kterou požadujete. Vzdálenost plyne z výšky a poloměru kuličky: s = 2·√(2·R·h − h²), například asi 0.69 mm mezi průchody pro kuličku Ø6 a hřeben 0.02 mm. Nosový nástroj použije poloměr rohu. Plochá fréza je odmítnuta: nemá hřeben, jehož velikost by se dala určit.

Průchody začínají **od hrany modelu, dovnitř**, nebo **od jeho horní části, dolů**. Jsou to vrstevnice vzdálenosti přes povrch (ne výšky), takže na svahu jsou v půdorysu blízko u sebe a na rovině daleko od sebe. Vzdálenost se měří na mřížce přes povrch a je přesná na asi 1 %; výška hřebenu je přesná tam, kde je povrch rovný nebo mírně zakřivený, a přibližná tam, kde se rychle zakřivuje. **Sousledné** obrábění ponechá vyšší stranu povrchu na pravé straně frézy.

## Jak dobré jsou dráhy

Co testy ověřují, pomocí uzavřených tvarů nebo nezávislého hrubého prohledání půdorysu frézy:

- Výška hrotu pod nástrojem je přesná pro kulový, nosový a plochý nástroj na plochách, hranách a rozích sítě a nikdy není nad skutečnou výškou; u rovnoběžných čar zůstává dráha v toleranci a žádné zařezání není hlubší než ta.
- Délky drah na nakloněné rovině souhlasí s uzavřeným tvarem; průchody hřebenu na rovině jsou ve vyžádané vzdálenosti a hřeben mezi nimi vyjde ve výšce, kterou jste požadovali.
- Simulace zásoby po průchodu neukáže žádné zařezání a ukáže hřebeny, které zůstanou.

Tyto dráhy nejsou: jsou to základní dokončovací průchody, ne celé spektrum toho, co nabízí výrobní systém.

- Zatím není hotové: vodní čára (konstantní z), dokončení tužkou a rohů, radiální a spirálové průchody, promítání křivky na povrch, detekce plochých oblastí, obrábění zbytků, kontroly kolize držáku a stopky a jakékoli naklápění nástroje.
- Střed nástroje zůstává nad modelem: dráhy se zastaví na hraně modelu místo toho, aby přejely přes ni, takže svislá stěna přesně na hraně není dokončena až u paty.
- Podřezání se nevidí (vidí se jen povrch, který nástroj potkává shora).
- Model je síť z jádra, takže dráhy sledují síť (její tětivová tolerance je asi 0.0002 úhlopříčky dílu), ne přesný povrch.
- Dokončování velkého modelu s jemnou tolerancí dá dlouhý program s mnoha krátkými pohyby. Před řezáním zkontrolujte výstup v simulátoru vašeho stroje.
