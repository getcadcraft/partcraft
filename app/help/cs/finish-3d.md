---
title: 3D dokončování: rovnoběžně a konstantní převýšení
summary: Dokončete zakřivenou plochu celého modelu kulovou, zaoblenou nebo plochou koncovou frézou, po rovnoběžných drahách pod libovolným úhlem nebo v průchodech ve vzdálenosti, kterou nastavíte, aby hřbety mezi nimi měly výšku, kterou požadujete. Co dráhy zaručují a co ne.
keywords: 3D dokončování, dokončování, rovnoběžně, rastr, převýšení, konstantní převýšení, hřbet, kulová fréza, zaoblená fréza, plocha, tolerance, posun mezi drahami, sklon, ponechaný přídavek, drop cutter, vryp
from: 942d2341
---

Dvě operace ve Výrobě řežou **celou zakřivenou plochu modelu** s nástrojem drženým svisle (tři osy). Nevyžadují žádný výběr: pracují na celém modelu, který je vidět shora. Nejprve díl zhrubněte (adaptivně nebo kapsou); dokončovací průchod přes neobrobený polotovar upozorní, že by řezal hluboko.

## Rovnoběžně

Přímé čáry přes model pod **úhlem**, který nastavíte, s **posunem mezi drahami** (zlomek průměru nástroje). Každá čára sleduje plochu: hrot nástroje je tak vysoko, jak musí být, aby žádná část frézy nešla pod model, a čára je řezána jemněji tam, kde se plocha ohýbá. Při zapnutém **Cik-cak** zůstává nástroj v záběru mezi čárami tam, kde to lze bezpečně (kontrolováno podél pohybu); jinak se zvedne.

- **Tolerance**: jak daleko smí přímý úsek čáry být od skutečné výšky hrotu (jako limit se v polovině každého úseku používá její polovina). Výchozí 0,01 mm.
- **Pouze tam, kde je plocha alespoň … a nejvýše … (°)**: dokončí jen mělké oblasti nebo jen strmé. Kde je plocha mimo rozsah, čára se vynechá a nástroj se zvedne.
- **Ponechaný přídavek**: model odsazený o tuto vzdálenost (nástroj zvětšený o ni: přesné pro kulové a zaoblené nástroje; plochý nástroj zanechá alespoň tolik).
- **Dno**: nic se neřeže pod touto hodnotou z.

## Konstantní převýšení

Průchody, které od sebe mají po ploše stálou vzdálenost, takže hřbet (konstantní převýšení) zůstávající mezi dvěma sousedními průchody má **výšku**, kterou požadujete. Vzdálenost vyplývá z výšky a poloměru kuličky: s = 2·√(2·R·h − h²), například asi 0,69 mm mezi průchody pro kuličku Ø6 a hřbet 0,02 mm. Zaoblený nástroj používá poloměr svého rohu. Plochá koncová fréza je odmítnuta: nemá hřbet, podle kterého by se dala velikost určit.

Průchody začínají **od hrany modelu směrem dovnitř** nebo **od jeho horní části směrem dolů**. Jsou to vrstevnice vzdálenosti po ploše (ne výšky), takže na svahu jsou v půdorysu blízko u sebe a na rovině daleko od sebe. Vzdálenost se měří na mřížce přes plochu a je přesná asi na 1 %; výška hřbetu je přesná tam, kde je plocha rovná nebo mírně zakřivená, a přibližná tam, kde se rychle zakřivuje. **Sousledně** ponechá vyšší stranu plochy vpravo od řezné hrany.

## Jak dobré dráhy jsou

Co testy ověřují, uzavřenými vzorci nebo nezávislým hrubým hledáním stopy řezné části nástroje:

- Výška hrotu pod nástrojem je přesná pro kulový, zaoblený i plochý nástroj na plochách, hranách a rozích sítě a nikdy není nad skutečnou výškou; u rovnoběžných čar zůstává dráha v toleranci vůči ní, bez vrypu hlubšího než ta.
- Délky drah na nakloněné rovině souhlasí s uzavřeným vzorcem; průchody konstantního převýšení na rovině jsou ve vyžádané vzdálenosti a hřbet mezi nimi vychází ve vyžádané výšce.
- Simulace polotovaru po průchodu neukazuje žádný vryp a ukazuje hřbety, které zůstanou.

Tyto dráhy nejsou: jsou to základní dokončovací průchody, ne celá nabídka velkého výrobního systému.

- Ještě není hotovo: dokončování po vodorovné vrstvě (konstantní z), čištění rohů a hran tužkou, radiální a spirálové průchody, promítání křivky na plochu, detekce rovných oblastí, kontroly kolize držáku a stopky. Hrubování a obrábění zbytků jsou samostatné operace ([3D hrubování a obrábění zbytků](topic:rough-3d)); nástroj, který se naklání, je [5osé dokončování](topic:multi-axis#5-axis-finishing).
- Střed nástroje zůstává nad modelem: dráhy se zastaví na hraně modelu místo toho, aby z ní vyjely, takže svislá stěna přímo u hrany není dokončena až k patě.
- Podříznutí nejsou vidět (plocha je to, co nástroj potká shora).
- Model je síť z jádra, takže dráhy sledují síť (její tětivová tolerance je asi 0,0002 úhlopříčky dílu), ne přesnou plochu.
- Dokončení velkého modelu při jemné toleranci dává dlouhý program s mnoha krátkými pohyby. Před řezáním zkontrolujte výstup v simulátoru vašeho stroje.
