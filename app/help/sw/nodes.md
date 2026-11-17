---
title: Nodi: jenga modeli kwa kuunganisha
summary: Unganisha namba kuwa pointi, pointi kuwa mikunjo, na mikunjo kuwa nyuso. Badilisha namba na kila kinachofuata kinajengwa upya. Kila nodi pia ni mstari wa CraftScript, na grafu huhifadhiwa kwenye faili.
keywords: nodi, mhariri wa nodi, script ya kuona, parametric, grafu, waya, ingizo, umbo huru, freeform, nurbs, loft, extrude, revolve, duara, mkunjo, uso, mfululizo, safu, nasibu, orodha, script, craftscript, grasshopper
from: 3a4625de
---

Mhariri wa **Nodi** hujenga jiometri kwa kuunganisha masanduku pamoja. Kila kisanduku (nodi) hufanya kazi moja ndogo: kutengeneza namba, pointi, duara, loft. Unaunganisha matokeo ya moja na ingizo la inayofuata, na modeli inafuata unapobadilisha namba mwanzoni.

Ifungue kutoka orodha ya workspace: {{ui:Nodes}}. Inafungua dirisha la mhariri. Sehemu yenye grafu tayari huionyesha unapofungua workspace. Ni dirisha juu ya mwonekano wa 3D: buruta upau wake wa kichwa kulisogeza, buruta kona yake kubadilisha ukubwa.

## Kuunganisha

1. Chagua nodi kutoka orodha upande wa kushoto (andika kwenye kisanduku cha utafutaji ili kupunguza; <kbd>Enter</kbd> huongeza ya kwanza inayolingana). Inaonekana katikati ya turubai.
2. Buruta kutoka nukta ya duara ya **output** upande wa kulia wa nodi moja hadi nukta ya duara ya **input** upande wa kushoto wa nyingine. Nukta hugeuka kijani ikitoshea na nyekundu isipotoshea; elekeza juu yake kuona sababu.
3. Ingizo lisilounganishwa huonyesha kisanduku cha thamani unayoandika. Andika namba kisha bonyeza <kbd>Tab</kbd>: matokeo hujengwa upya.
4. Duara dogo kwenye upau wa kichwa wa nodi ni **jicho** lake. Nodi yenye jicho limewashwa huchorwa kwenye mwonekano wa 3D: mistari kwa mikunjo, vivuli kwa nyuso, nukta kwa pointi.

Buruta nodi kwa upau wake wa kichwa. Buruta mandharinyuma kusogeza, zungusha gurudumu kukuza. <kbd>Delete</kbd> huondoa nodi iliyochaguliwa. {{ui:Tidy}} hupanga nodi kwenye safu, {{ui:Fit}} huzileta zote kuonekana, na {{ui:Undo}} na {{ui:Redo}} hupitia mabadiliko yako.

## Aina na vipimo

Ingizo lina aina: namba, ndiyo/hapana, pointi, vekta, mkunjo, uso, mesh, kigumu, au "geometry" kwa yoyote kati ya hizo. Pointi inaweza kulisha ingizo la vekta na kurudi. Namba hubeba kipimo: **urefu** ni milimita na **pembe** ni digrii. Urefu hauwezi kulisha pembe, na urefu mara urefu (eneo) hukataliwa, kwa hiyo waya mbaya husimamishwa unapoutengeneza.

Mraba wa nukta ni **orodha**. Orodha inapofika ingizo la thamani moja, nodi hufanya kazi mara moja kwa kila kipengee, na matokeo yake huwa orodha. Orodha fupi zaidi hurudia kipengee chake cha mwisho. Kwa mfano, **Series** ya urefu ikiingizwa kwenye **Move** hutengeneza rundo la nakala.

## Vigumu na Boolean kama nodi

Kikundi cha **Solids** hutengeneza miili iliyofungwa kutoka nyuso halisi zilezile za paneli ya Surfaces: **Box solid**, **Cylinder solid** na **Sphere solid** (ukubwa kwa mm), **Union**, **Subtract** na **Intersect** (kigumu cha pili kinachukuliwa kutoka cha kwanza; uvumilivu ni umbali ambao pembetatu za injini ya vigumu zinaweza kuwa mbali na nyuso halisi), **Fillet between faces** (nyuso kwa nambari yake katika kigumu, 1 kwa ya kwanza; radius na, juu ya 0, radius mwishoni), **Solid volume** (mm³) na **Solid to mesh** (kuiona au kuihifadhi). Kigumu kina aina yake ya ingizo: pointi au namba haziwezi kuunganishwa kwenye ingizo la kigumu, na nukta inabaki nyekundu. Nodi za Boolean na Fillet hutumia injini ya vigumu ya programu yenyewe, inayopakiwa mhariri unapofunguliwa mara ya kwanza.

## Makosa

Nodi isiyoweza kufanya kazi yake huonyesha sababu chini ya jina lake, kwa rangi nyekundu ("Radius lazima iwe kubwa kuliko sifuri."), na nodi zinazofuata zinasubiri. Ujumbe huo huo ni Tatizo kwenye paneli ya Problems, kwa hiyo unaweza kuupata kutoka hapo.

## Kila nodi ni mstari wa script

Bonyeza {{ui:Script}} kuona grafu kama CraftScript: mstari mmoja kwa kila nodi, kama `n3 = nd_circle(n2, n1, [0 0 1]);`. Hariri maandishi kisha bonyeza {{ui:Make the graph from this script}} kuirudisha kuwa grafu. Kazi zile zile za `nd_` hufanya kazi kwenye CraftScript katika PartCraft, kwa hiyo grafu inaweza kuendeshwa, kurudiwa au kujaribiwa huko. Namba za nasibu daima huchukua **seed**, ili grafu ile ile itoe matokeo yale yale kwenye kila kompyuta.

## Huhifadhiwa pamoja na faili

Grafu huhifadhiwa kwenye faili la sehemu (si kwenye historia, kwa hiyo Undo ndani ya mhariri ni yake yenyewe). Nodi hutengeneza mikunjo, nyuso na mesh pembeni ya kigumu: hazibadilishi vipengele vya sehemu.
