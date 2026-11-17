---
title: Bæta rúmfræði skissu við með því að slá inn hnit
summary: Notaðu Bæta við eftir hnitum í skissuglugganum til að setja línur, miðlínur, rétthyrninga, hringi og punkta á nákvæmar staðsetningar, eingöngu með lyklaborðinu.
keywords: hnit, slegin innsetning, lyklaborðsinnsláttur, tölugildi, nákvæm staða, x y, algild hnit, aðgengi, án músar
from: 5e6c1656
---

Þegar þú þekkir tölurnar er fljótlegra að slá þær inn en að smella og setja mál. **Bæta við eftir hnitum** er í hægra spjaldinu þegar skissa er opin. Það gerir þér líka kleift að byggja skissu án bendils.

Hnit eru í millimetrum, á ása skissunnar sjálfrar: x til hægri og y upp þegar horft er á skissuna, með (0, 0) í upphafspunktinum (rauði hringurinn með krossi).

## Bæta við formi

1. Opnaðu skissu (sjá [Teiknaðu fyrstu skissuna þína](topic:sketch-basics)).
2. Í hægra spjaldinu, skrunaðu að **Bæta við eftir hnitum**.
3. Veldu formið í **Bæta við**: Lína, Miðlína, Rétthyrningur, Hringur eða Punktur.
4. Fylltu út reitina:

| Form | Reitir |
|---|---|
| Lína | **Frá x, y** og **Til x, y** |
| Miðlína | **Frá x, y** og **Til x, y** |
| Rétthyrningur | **Horn x, y** og **Gagnstætt horn x, y** |
| Hringur | **Miðja x, y** og **Radíus** |
| Punktur | **Við x, y** |

5. Veldu {{ui:Bæta við}}, eða ýttu á {{key:Enter}} í hvaða reit sem er.

Formið birtist og stöðustikan segir til dæmis: „Bætti við rétthyrningi.“ Reitirnir tæmast, tilbúnir fyrir það næsta. Hver viðbót er eitt skref í afturköllun.

Sláðu inn par sem tvær tölur aðskildar með kommu eða bili: `0, 0`, `25 -10` eða `12.5,40`. Neikvæðar tölur og aukastafir eru í lagi. Radíus verður að vera meiri en núll. Ef eitthvað er ekki tala segir stöðustikan: „Sláðu inn hnit sem „x, y“ og radíus yfir núlli.“

## Dæmi: útlína plötu með rauf, slegin inn

1. Opnaðu skissu á **Framplan**.
2. **Bæta við**: Rétthyrningur. **Horn x, y**: `-50, -30`. **Gagnstætt horn x, y**: `50, 30`. {{key:Enter}}.
3. **Bæta við**: Hringur. **Miðja x, y**: `-30, 0`. **Radíus**: `5`. {{key:Enter}}.
4. **Miðja x, y**: `30, 0`. **Radíus**: `5`. {{key:Enter}}.
5. Veldu {{ui:Hætta í skissu}}, síðan {{ui:Útdráttur}}: 100 × 60 mm plata með tvö 10 mm göt.

## Slegin rúmfræði er staðsett, ekki bundin

Slegin hnit setja rúmfræðina á réttan stað, en þau eru **ekki tengsl**. Formin haldast blá (vanskilgreind) og gætu hreyfst ef þú dregur þau eða breytir annarri vídd:

- slegið rétthyrningur fær sín eigin hornatengsl, lárétt og lóðrétt tengsl, eins og teiknaður rétthyrningur; en ekkert festir hann við upphafspunktinn;
- slegin lína hefur ekki lárétt eða lóðrétt tengsl, jafnvel þótt þú hafir slegið inn lárétta línu;
- miðja slegins hrings er laus.

Til að gera skissuna fullskilgreinda bætirðu við víddum og tengslum á eftir (sjá [Skilgreindu skissu að fullu](topic:relations-dimensions)). Til dæmis: veldu horn rétthyrningsins og upphafspunktinn og veldu {{ui:• Samfall}}, eða mældu miðjur hringjanna frá upphafspunktinum.

:::note
Án bendils kemstu svona langt: færðu þig á plan í sögunni með {{key:Tab}} og örvatökkunum, ýttu á {{key:Enter}} til að velja það, ýttu á {{key:S}} til að skissa, bættu við formum hér og farðu í **Breyta** við hliðina á hverri vídd og {{ui:Hætta í skissu}} með {{key:Tab}}. Að velja rúmfræði, og þar með bæta við tengslum eða nýjum víddum, krefst enn smells eða snertingar í þessari útgáfu.
:::

## Takmarkanir

- Boga er ekki hægt að slá inn enn. Teiknaðu þá með Boga-verkfærinu, eða sláðu inn hring og notaðu tengsl.
- Engin hlutfallsleg hnit (frá síðasta punkti) eða pólhnit (lengd og horn) eru í þessum reit.
- Slegin rúmfræði smellur ekki á punkta sem fyrir eru. Sláðu inn sömu hnit og á fyrirliggjandi punkti, og bættu síðan við tengslinu {{ui:• Samfall}} á milli þeirra ef þeir eiga að haldast tengdir.
