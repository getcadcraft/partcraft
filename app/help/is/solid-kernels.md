---
title: Möskvakjarninn
summary: Þessi útgáfa af PartCraft smíðar alla hluti með möskvakjarna sem keyrir í vafranum þínum. Hvað það þýðir fyrir kringlótta fleti, rúmmál og skrár, hvernig þú sérð að hann virki, og hvaða eiginleikar bíða eftir nákvæmum kjarna.
keywords: kjarni, möskvi, marghyrnt, nákvæmur, b-rep, facetað, ferlar, opencascade, occt, ávala þarf nákvæman, ekki smíðað, án nettengingar, webassembly
from: f931645c
---

Rúmfræðikjarni er vélin sem breytir sögunni þinni í fastan hlut. Þessi útgáfa af PartCraft hefur einn: **möskvakjarnann** (manifold-3d). Hann keyrir á tölvunni þinni sem lítið WebAssembly-forrit og er tilbúinn augnabliki eftir að forritið opnast. Ekkert um hlutinn þinn er sent neitt.

| | Möskvakjarni |
|---|---|
| Kringlótt form | Flatar facetur. **Ferlar** í hlutaspjaldinu stillir hversu fínt |
| Rúmmál og flatarmál | Af facetaða fasta hlutnum, örlítið lægra á kringlóttum hlutum |
| Skissur, útdráttur, skurður, snúningur, göt, mynstur, spegling, viðmiðsfletir | Já |
| Ávala og skáskurður | Á beinum brúnum milli flatra flata; ávalar sem mætast eru skáskornar |
| Skel og halli | Skel opnar flata fleti (nákvæm veggþykkt); halli hallar flötum |
| Útflutningur | STL, 3MF, STEP (nákvæmt: kringlóttir fletir skrifaðir á réttum yfirborðum; eða facetað), teikning PDF og DXF |
| Teikningarsýnir | Teiknaðar út frá facetunum, þar með talið sniðsýnir |
| Fletir og brúnir | Nefndir og þekktir eftir gerð (flatur, sívalningur, keila, kúla, hringur; bein, hringlaga), teknir úr skissunum: vinnusvæðin Simulation, Generative og Manufacture, Mæla, val og gatatafla nota þá |

Merkið nálægt hægri enda stöðustikunnar segir **Möskvakjarni** meðan það smíðar hlutinn þinn.

## Það sem bíður eftir nákvæmum kjarna

Nákvæmur (B-rep) kjarni geymir raunverulega hringi, sívalninga og keilur, og slétta ávala á hvaða brún sem er. Sweep, loft, yfirborð, plötusmíði, rif, marga búka og STEP-innflutning með bognum flötum geymdum nákvæmlega eru smíðuð á honum. (Nákvæmur STEP-útflutningur bíður ekki eftir honum: möskvakjarninn þekkir raunverulegt yfirborð hvers flatar út frá skissunni, og útflutningurinn skrifar þau.) Fyrri tilraunasmíðar PartCraft notuðu OpenCascade í þessu skyni. Leyfi þess (LGPL) passar ekki við þessa útgáfu, þar sem sérhvert forrit er Apache-2.0 og notar eingöngu bókasöfn með rýmkandi leyfi, þannig að það er ekki með. Ekkert hér hefur dagsetningu.

Þangað til segja þessir eiginleikar **Ekki smíðað enn** þegar þú velur þá: stöðustikan gefur ástæðuna, og skýringartextar hnappanna enda á „not built yet (needs an exact kernel)“. [Það sem er ekki smíðað enn](topic:not-built-yet) telur upp hvern þeirra og hvað á að gera í staðinn.

Hlutur sem var gerður með þeim í fyrri smíð opnast enn. Þessir eiginleikar haldast í sögunni merktir sem ekki smíðaðir (færðu bendilinn yfir einn til að sjá ástæðuna), restin af hlutnum smíðast, og vistun heldur þeim óbreyttum.

## Kringlóttir fletir og ferlar

Möskvakjarninn teiknar hring sem marghyrning. **Ferlar** í hlutaspjaldinu stillir hversu margar hliðar heilur hringur fær; fleiri hliðar líta sléttari út og mælast nær réttu gildi, og taka lengri tíma að smíða. Rúmmál, flatarmál og fjarlægðir frá {{ui:Mæla}} eru af þessum facetaða fasta hlut: fyrir gat eða upphækkun eru þau örlítið minni en fyrir kringlótta formið.

## Á netinu og án nettengingar

Möskvakjarninn er hluti af niðurhali forritsins sjálfs. Til að vinna án tengingar skaltu vista PartCraft til notkunar án nettengingar á meðan þú ert á netinu: veldu {{ui:Vista til notkunar án nettengingar}} í forritastikunni og bíddu þar til stendur **Tilbúið án nettengingar**. Nánar: [Vinna án nettengingar](common:offline).
