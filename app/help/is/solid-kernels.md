---
title: Möskvakjarninn
summary: Þessi útgáfa PartCraft smíðar alla hluta með möskvakjarna sem keyrir í vafranum þínum. Hvað það þýðir fyrir kringlótta fleti, rúmmál og skrár, hvernig þú sérð að hann virkar, og hvaða eiginleikar bíða eftir nákvæmum kjarna.
keywords: kjarni, möskvi, manifold, nákvæmur, b-rep, fasetaður, ferlar, opencascade, occt, ávala þarf nákvæman, ekki tilbúið, án nettengingar, webassembly
from: 68d32d16
---

Rúmfræðikjarni er vélin sem breytir sögunni þinni í fast efni. Þessi útgáfa PartCraft hefur einn: **möskvakjarnann** (manifold-3d). Hann keyrir á tölvunni þinni sem lítið WebAssembly-forrit og er tilbúinn augnabliki eftir að forritið opnast. Ekkert um hlutinn þinn er sent neitt.

| | Möskvakjarni |
|---|---|
| Kringlótt form | Flatar fasetur. **Ferlar** í hlutaspjaldinu stillir hversu fín þau eru |
| Rúmmál og flatarmál | Af föstu efni úr fasetum, örlítið lágt á kringlóttum hlutum |
| Skissur, útdráttur, klipping, snúningur, göt, mynstur, spegling, viðmiðunarfletir | Já |
| Ávala og skábrún | Á beinum brúnum milli flatra fleta; ávalar sem mætast eru skáskornar |
| Skel og halli | Skel opnar flata fleti (nákvæm veggþykkt); halli hallar flötum fleti |
| Útflutningur | STL, 3MF, STEP (fasetað), PDF-teikning og DXF |
| Teikningarútlit | Teiknuð út frá fasetunum, þar á meðal snið |
| Fletir og brúnir | Nefnd og þekkt eftir tegund (flatur, sívalningur, keila, kúla, tóróíð; bein, hringur), tekin úr skissunum: vinnusvæðin Hermun, Myndun og Framleiðsla, Mæla, val og götutaflan nota þau |

Merkið nálægt hægri enda stöðustikunnar segir **Möskvakjarni** meðan hann smíðar hlutinn þinn.

## Það sem bíður eftir nákvæmum kjarna

Nákvæmur (B-rep) kjarni geymir sannar hringi, sívalninga og keilur og mjúkar ávalar á hvaða brún sem er. Ferilsdrættir, brýr, yfirborð, plötumálmur, rif, margir búkar, STEP-innflutningur og nákvæmur STEP-útflutningur eru smíðuð á honum. Eldri tilraunasmíðar PartCraft notuðu OpenCascade í því skyni. Leyfi þess (LGPL) passar ekki við þessa útgáfu, þar sem sérhvert forrit er Apache-2.0 og notar eingöngu bókasöfn með frjálsum leyfum, svo það er ekki með. Ekkert hér hefur dagsetningu.

Þangað til þá segja þessir eiginleikar **Ekki tilbúið enn** þegar þú velur þá: stöðustikan gefur ástæðuna, og tooltip hnappanna enda á „ekki tilbúið enn (þarf nákvæman kjarna)“. [Það sem er ekki tilbúið enn](topic:not-built-yet) listar hvern þeirra með því sem á að gera í staðinn.

Hlutur sem var smíðaður með þeim í eldri útgáfu opnast enn. Þessir eiginleikar haldast í sögunni merktir sem ekki tilbúnir (færðu bendilinn yfir þá til að sjá ástæðuna), restin af hlutnum smíðast, og vistun heldur þeim óbreyttum.

## Kringlóttir fletir og ferlar

Möskvakjarninn teiknar hring sem marghyrning. **Ferlar** í hlutaspjaldinu ákvarða hversu margar hliðar heill hringur fær; fleiri hliðar líta sléttari út og mælast nær réttu gildi, en taka lengri tíma að smíða. Rúmmál, flatarmál og fjarlægðir úr {{ui:Mæla}} eru af þessu fasetaða föstu efni: fyrir gat eða upphleypingu eru þau örlítið minni en fyrir kringlótta formið.

## Á netinu og án nettengingar

Möskvakjarninn er hluti af niðurhali forritsins sjálfs. Til að vinna án nokkurrar tengingar skaltu vista PartCraft til notkunar án nettengingar meðan þú ert á netinu: veldu {{ui:Vista til notkunar án nettengingar}} í forritastikunni og bíddu þar til það segir **Tilbúið án nettengingar**. Nánar: [Vinna án nettengingar](common:offline).
