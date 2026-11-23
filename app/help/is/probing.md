---
title: Snertiskynjun: finna hlutann og stilla vinnufærsluna
summary: Snertu efri flöt, hlið, gat eða upphækkun með snertirannsaka og láttu stjórnbúnaðinn færa vinnufærsluna þangað sem hlutinn er í raun, eða mæla aðeins. Hvað hver stjórnbúnaður getur, og hvað hefur ekki verið sannað.
keywords: snertiskynjun, snertirannsakari, snertiskynjari, snerta, vinnufærsla, g54, g31, g38.2, sleppa, viðmiðun, finna miðju, gat, upphækkun, brún, núllstilla, mæla, skoðun, g10
from: 1f718b82
---

{{ui:Snertiskynjun}} í Manufacture skrifar snertilotu inn í forritið: rannsakinn snertir hlutann, og stjórnbúnaðurinn færir vinnufærsluna (G54) um mismuninn á milli þess þar sem yfirborðið fannst og þess þar sem líkanið segir að það sé. Síðari aðgerðir skera þá þar sem hluturinn er í raun.

**Ekkert hér hefur verið keyrt á vél.** Hreyfingarnar fyrir snertingu eru venjulegar hreyfingar: rannsakinn er ekki vaktaður fyrr en sjálf snertihreyfingin. Keyrðu hana hægt, í lausu lofti fyrst, með höndina á fóðurstöðvuninni.

## Notkun

1. Á flipanum **Verkfæri** bætir fyrsta snertiaðgerðin við **snertirannsaka**: þvermáli kúlunnar og snertifóðruninni (100 mm/mín nema þú stillir annað).
2. Ýttu á {{ui:Meira}} á Manufacture-tækjastikunni, síðan {{ui:Snertiskynjun}}, og smelltu á það sem á að snerta. Hvert val er ein lota, í þeirri röð sem þú smellir:

| Val | Lotan | Hvað er stillt |
|---|---|---|
| Flatur flötur sem snýr upp eftir verkfærisásnum | Ein snerting niður | Z |
| Flöt hlið hornrétt á X eða Y | Ein snerting í átt að fletinum, aðeins neðan efri brúnar hans | X eða Y |
| Gat eða upphækkun eftir verkfærisásnum | Fjórar snertingar (+X, −X, +Y, −Y) | X og Y á miðju þess |

3. **Með niðurstöðunni**: {{ui:Stilla vinnufærsluna}} eða {{ui:Mæla aðeins}}.
4. **Byrja svo langt í burtu** og **Leita svo langt handan**: hversu langt frá væntanlegu yfirborði snertihreyfingin byrjar, og hversu langt handan þess rannsakinn má fara áður en stjórnbúnaðurinn gefst upp. **Dýpt** er hversu langt undir efri brún gats, upphækkunar eða hliðarflatar kúlan fer.

Settu snertiaðgerðina fyrst, áður en nokkuð sker.

## Hvað hver stjórnbúnaður skrifar

| Stjórnbúnaður | Snerting | Niðurstaða |
|---|---|---|
| Fanuc-stíll | `G31`, staðan geymd í `#101` til `#104` | Vinnufærslubreyturnar (`#5221` til `#5223`) færðar um fundið − væntanlegt. Aðeins mæla: mismunurinn er geymdur í `#110` (og `#111`). |
| LinuxCNC | `G38.2`, staðan geymd í nefndum breytum | `G10 L2 P1` með nýju vinnufærslunni. Aðeins mæla: skilaboð `(DEBUG, …)`. |
| GRBL | `G38.2` | Ein snerting stillir ásinn með `G10 L20 P1`. GRBL hefur engar breytur, þannig að það **getur ekki reiknað út miðju**: skráin segir það í athugasemd og stillir ekkert. |

Reikningurinn er úttaksins, þannig að þú getur breytt honum: atburðirnir eru `probe-move` og `probe-set` ([Úttök sem þú getur breytt](topic:post-processors)).

## Takmarkanir

- Ein vinnufærsla (G54). Fletir hornréttir á ásana eingöngu: ekkert horn, engin hornlota, enginn snúningur á vinnunni.
- Enginn verkfærastillir, engin athugun á brotnu verkfæri, engin mæling á stærð gegn vikmörkum, engin skýrsla.
- Spindillinn er ekki ræstur fyrir snertingu og kæling helst slökkt; ekkert athugar hvort verkfærið í spindlinum sé snertirannsaki.
- Hermun hráefnisins keyrir ekki snertislóð.
- Eigin kvörðun rannsakans (kúluútfærsla, beygja nálar, kveikjustefna) er í höndum stjórnbúnaðarins.
