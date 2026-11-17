---
title: Skráasnið
summary: Sérhver skrá sem PartCraft les og skrifar, með endingum, einingum, ásum og því sem hvert þeirra geymir eða tapar.
keywords: snið, skráartegundir, endingar, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, möskvi, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, einingar, z upp
from: 4d0ecbee
---

| Snið | Ending | Opna | Vista eða flytja út | Einingar | Upp-ás | Geymir |
|---|---|---|---|---|---|---|
| PartCraft hlutur | `.partcraft.json` | Já | {{ui:Vista}} | mm | Y | Alla söguna: skissur, tengsl, málsetningar, eiginleika, bælingu, afturrúllun, stillingu bogar, stillingar teikningar og GD&T, STEP-texta sem var fluttur inn í eldri útgáfu |
| PartCraft samsetning | `.partcraft-asm.json` | Já | {{ui:Vista}} í samsetningu | mm | Y | Sérhvern hluta (innbyggðan), afritin og staðsetningar þeirra, tengin |
| STL (tvíundar eða texti) | `.stl` | Já, sem fast líkami: [Opnaðu STL, OBJ eða 3MF](topic:open-meshes) | {{ui:STL, fyrir þrívíddarprentun}} | mm (spurt þegar opnað) | Z | Aðeins þríhyrningar efnisins |
| 3MF | `.3mf` | Já, sem fast líkami | {{ui:3MF, fyrir þrívíddarprentun}} | mm (tilgreint í skránni) | Z | Efnið sem einn möskvahlutur |
| OBJ | `.obj` | Já, sem fast líkami (aðeins fletir) | Nei | spurt þegar opnað | Z eða Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Já, sem fast líkami lesið sem þríhyrningar (bogadregnir fletir teiknaðir sem fasetur; sléttir fletir, sívalningar, keilur, kúlur og tórusar skráarinnar eru geymdir fyrir nákvæman útflutning): [Opnaðu STEP-skrá](topic:import-step) | | mm (úr einingu skráarinnar) | Z, eða Y ef þú segir það | Föstu efnin og yfirborðslíkamarnir, samsetningar með öllum hlutum á sínum stað; engir litir, nöfn, samsetningartré eða PMI |
| `.3dm` | `.3dm` | Já, sem einn fast líkami úr möskvum og yfirborðum (vistaðir myndgerðarmöskvar, annars þríhyrnt): [Opnaðu .3dm-líkan](topic:open-3dm-files) | | Úr einingu skráarinnar | Z, eða Y ef þú segir það | Möskvar, fjölyfirborð, útdrættir og staðsetningar blokka sem einn líkami; engar ferlar, litir, lög eða nöfn |
| STEP AP242, nákvæmt | `.step` | | {{ui:STEP AP242 (nákvæmt fast efni)}} | mm | Z | Eitt nákvæmt fast efni: sléttir fletir, sívalningar, keilur, kúlur og tórusar á sönnu yfirborði sínu, sannir hringir og línur sem brúnir; hliðar úr splæsum, líkanaðir þræðir, líkamar úr möskvaskrám og splæsfletir STEP-skráar haldast fasetur. STEP-ið til að nota fyrir önnur CAD- og CAM-forrit |
| STEP AP214, nákvæmt | `.step` | | {{ui:STEP AP214 (nákvæmt fast efni)}} | mm | Z | Sama nákvæma fasta efnið í eldra AP214-skema, fyrir forrit sem lesa aðeins það |
| STEP AP242, facetað | `.step` | | {{ui:STEP (facetað, möskvakjarni)}} | mm | Y | Lokað fast efni úr sléttum flötum: ávalir fletir sem fasetur. Fyrir forrit sem hafnar nákvæmu skránni |
| STEP AP214, facetað | `.step` | | {{ui:STEP AP214 (facetað, möskvakjarni)}} | mm | Y | Sama fasta efnið í eldra AP214-skema, fyrir forrit sem lesa aðeins það |
| USD-pakki | `.usdz` | Nei | {{ui:USD pakki (.usdz)}} | m | Z | Fasta efnið með efni, rúmmáli og massa; samsetning með hverjum hluta einu sinni og sérhverju afriti staðsettu: [Flyttu út sem USD](topic:usd) |
| IFC 4 | `.ifc` | Nei | {{ui:IFC 4 (með öllum eiginleikum)}} | mm | Z | Lögunin sem þríhyrningar, efnið, sérhver breyta, titilreiturinn, magn; hlutar samsetningar sem gerðir og afrit hennar staðsett |
| DXF R12, skissa | `.dxf` | Nei | {{ui:DXF af skissunni eða sléttum fleti}} með valinni skissu | mm | Eigin x, y skissunnar | Línur, sannir bogar og hringir, punktar; lögin PROFILE, CONSTRUCTION, POINTS |
| DXF R12, flötur | `.dxf` | Nei | {{ui:DXF af skissunni eða sléttum fleti}} með völdum sléttum fleti | mm | Eigin x, y flatarins | Útlínur flatarins: ávöl göt sem sannir hringir, hitt sem lokaðar fjöllínur (ávalar brúnir sem fasetur) |
| PDF-teikning | `.pdf` | Nei | {{ui:Teikning (PDF): útlit, snið, smáatriði, GD&T}} | mm á A3 blaði | | Fram-, efri-, hægri-, samskeytis-, snið- og smáatriðamyndir teiknaðar úr fasetum, faldar línur, heildarstærðir, GD&T-tákn, titilreitur |

## PartCraft-skrárnar

Báðar eru venjulegur texti (JSON). Fasta efnið er aldrei geymt: PartCraft smíðar það aftur úr sögunni, svo skrárnar haldast litlar og passa alltaf við söguna.

- Sérhver skrá hefur útgáfunúmer. Þessi útgáfa skrifar hverja hlutaskrá með lægstu útgáfu sem geymir það sem hún notar (2 til 5; líkami úr möskva þarf 5) og opnar allar eldri útgáfur. Skrá frá nýrri PartCraft er hafnað með skilaboðum sem nefna báðar útgáfurnar.
- Sérhvert gildi er athugað þegar skrá er opnuð. Heiti missa stjórnstafi; tölur utan marka, tilvísanir í vanta eiginleika og óþekktar gerðir eiginleika eru hafnaðar með einfaldri ástæðu.
- Ekki breyta þessum skrám með höndunum nema þú þekkir sniðið. Skrá sem stenst ekki athuganirnar opnast ekki.
- Hlutur með stórt STEP-fast efni sem var flutt inn í eldri útgáfu getur farið yfir 50 MB, sem er mesta stærð sem PartCraft opnar sem hlutaskrá (sjá [Úrræðaleit](topic:troubleshooting#file-problems)).

## Fasetur og nákvæmni

STL og 3MF eru alltaf gerð úr fasetum, í stillingunni **Bogar**, og það sama gildir um flatar DXF nema fyrir ávöl göt, sem eru sannir hringir. Skissu-DXF hefur sanna boga og hringi, því hún kemur beint úr skissunni. Þessi útgáfa smíðar sérhvern hluta með möskvakjarnanum, svo myndir teikningarinnar (þar með talin snið) eru líka fasetaðar. Nákvæmi STEP-útflutningurinn er undantekningin: kjarninn þekkir sanna yfirborð hvers flatar úr skissunni (eða úr STEP-skránni sem líkami var opnaður úr), svo ávalir fletir eru skrifaðir sem sannir sívalningar, keilur, kúlur og tórusar hvað sem **Bogar** er stillt á (sjá [Útflutningur til prentunar, STEP og DXF](topic:export-files#for-other-cad-programs-step)).

## Ekki studd í þessari útgáfu

| Snið | Staða |
|---|---|
| glTF, IGES, Parasolid, ACIS (inn eða út); OBJ-útflutningur | Ekki smíðað |
| DWG | Skrifað aðeins af [afbrigðapakkanum](topic:variant-pack), sem teikningarblað hverrar stillingar. Ekki lesið, og engin önnur útflutningur. Flyttu út DXF; sérhvert CAD-forrit opnar R12 DXF |
| STEP samsetningar og teikning samsetningar | Ekki smíðað enn. Fluttu út hvern hluta sem nákvæmt STEP; STL, 3MF og efnisyfirlitið flytjast út úr samsetningu |
| Innfæddar hluta- og samsetningarskrár annarra forrita (nema `.3dm`, sem opnast sem einn líkami) | Ekki smíðað |

Sjá [Hvað er ekki smíðað enn](topic:not-built-yet).
