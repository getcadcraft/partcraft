---
title: Byrjaðu handbók í Myndskreytingu
summary: Myndskreytingarvinnusvæðið býr til handbækur úr hönnuninni þinni: sýnir, sundurteknar línuteikningar með blöðrum og hlutalista, skref-fyrir-skref leiðbeiningar, hreyfimyndir og gagnvirka þrívíddarskrá sem viðskiptavinur getur opnað án CAD. Handbók er skrá út af fyrir sig.
keywords: myndskreyting, handbók, tæknimynd, skjölun, sundurtekin sýn, hlutalisti, leiðbeiningar, partcraft-manual
from: e447e0ab
---

**Myndskreyting** er vinnusvæðið fyrir skjölin sem fólk þarf í kringum hönnun: sundurteknar sýnir með blöðrum og hlutalista, línuteikningar fyrir handbækur, skref-fyrir-skref leiðbeiningar, hreyfimyndir og þrívíddarskrá sem viðskiptavinur getur opnað án CAD. Veldu {{ui:Myndskreyting}} í vali {{ui:Vinnusvæði}} efst á tækjastikunni.

**Handbók** er skrá út af fyrir sig (`<name>.partcraft-manual.json`). Hún geymir afrit af lögun hvers hlutar, vörutréð og eiginleika hlutanna, og tengil til baka þangað sem þeir komu, svo þú getir unnið í handbókinni meðan hönnunin heldur áfram. Þegar hönnunin breytist færir [Uppfæra úr hönnuninni](topic:illustrate-update) breytingarnar inn.

## Byrja handbók

Smelltu á {{ui:Nýtt}} í hópnum {{ui:Handbók}}, og síðan:

- {{ui:Frá opna hlutnum}}: hluturinn sem er opinn í Hönnun.
- {{ui:Frá opnu samsetningunni}}: birtist í staðinn þegar samsetning er opin; hlutar hennar, staðsetningar þeirra, hlutanúmer, efni og sundurteknar sýnir fylgja með.
- {{ui:Úr samsetningarskrá…}}: vistuð `.partcraft-asm.json`; PartCraft smíðar hlutina hennar fyrst.
- {{ui:Úr annarri skrá…}}: glTF (.glb, .gltf), OBJ, STL eða 3MF. Tré skrárinnar og heiti haldast, og eintök af einum hluta (sama lögun sett tvisvar) verða að einum hluta með magni. Í STL- og OBJ-skrám kemur mælieining ekki fram, svo þú ert spurður. STL-skrár eru lesnar með Z upp; glTF og 3MF segja sína eigin.

Meðan handbók er opin sýnir Myndskreyting eigið afrit handbókarinnar af hlutunum; hluturinn eða samsetningin sem er opin í Hönnun er falin þar til þú ferð aftur í Hönnun.

## Vista og opna

{{ui:Vista}} í hópnum {{ui:Handbók}} (eða {{key:Mod+S}}) vistar handbókina; {{ui:Opna}} opnar eina. Sérhver breyting í Myndskreytingu er eitt skref í eigin sögu handbókarinnar: {{ui:Afturkalla}} og {{ui:Endurgera}} verka á handbókina meðan Myndskreyting er opin.

## Ekki smíðað enn

- STEP-skrár opnast ekki í {{ui:Úr annarri skrá…}} enn. Opnaðu STEP-skrána í Hönnun í staðinn (hún kemur inn sem fastur efnishluti: sjá [Opna STEP-skrá og byggja á henni](topic:import-step)) og byrjaðu handbókina með {{ui:Frá opna hlutnum}}, eða vistaðu hana sem glTF, 3MF, OBJ eða STL.
- ModelCraft og BimCraft geta ekki enn sent líkan beint í Myndskreytingu: vistaðu það sem glTF (.glb) og notaðu {{ui:Úr annarri skrá…}}.

Næst: [Sýnir og útlit](topic:illustrate-views).
