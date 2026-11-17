---
title: Útflutningur til prentunar, STEP og DXF
summary: Fluttu hlutinn út sem STL eða 3MF til þrívíddarprentunar, sem nákvæmt STEP-fast efni fyrir önnur CAD- og CAM-forrit, og skissu eða slétt flöt sem DXF fyrir leysi- og vatnsskurð.
keywords: flytja út, vista sem, ifc, bim, eiginleikasöfn, stl, 3mf, þrívíddarprentun, skurðarforrit, step, stp, nákvæmt step, b-rep, ap242, ap214, cam, vélsmiðja, fræsing, dxf, leysir, vatnsskurður, cnc, flatt snið, prófíll, möskvi, með fasetum
from: e1de71d5
---

Útflutningar eru afrit í öðrum sniðum. Geymdu `.partcraft.json` skrána líka: hún er eina skráin sem PartCraft getur opnað aftur og breytt.

Allir útflutningar vinna með hlutinn sem er á skjánum, í millimetrum. Í samsetningu flytja STL, 3MF, STEP og Teikning (PDF) út alla samsetninguna í staðinn: sjá [Hlutalisti, sprengdar myndir og hreyfanlegir hlutar](topic:assembly-bom-explode). Ef ekkert fast efni er til enn: "Ekkert fast efni er til til útflutnings enn."

## Fyrir þrívíddarprentun: STL eða 3MF

1. Valfrjálst: fyrir slétt, ávöl yfirborð, smelltu á autt svæði svo ekkert sé valið og stilltu **Bogar** á **Fínt (128 á hring)** eða **Mjög fínt (256 á hring)** í hægra spjaldinu. STL og 3MF eru alltaf gerð úr þríhyrningum.
2. Veldu {{ui:Flytja út}}, síðan {{ui:STL, fyrir þrívíddarprentun}} eða {{ui:3MF, fyrir þrívíddarprentun}}.
3. Skráin sækist niður. Stöðustikan segir til dæmis: "Flutt út Part1.stl (tvíundar, mm, Z upp, 1536 þríhyrningar)."

Bæði sniðin eru **Z upp**, eins og prentarar og skurðarforrit gera ráð fyrir. Heimur PartCraft er Y upp, svo útflutningurinn snýr hlutnum: það sem vísar upp í PartCraft (hornrétt á Efra plan) vísar upp í skurðarforritinu, og hlutur sem er skissaður á Efra plani liggur flatur á prentbeðinu. Stilltu endanlega stefnu í skurðarforritinu ef þörf krefur.

3MF er nýrra og minna snið sem skurðarforrit lesa með einingum. Notaðu STL ef forrit tekur ekki við 3MF.

Til að athuga fyrst að hluturinn sé lokaður, passi á prentbeð prentarans og standi á sléttum fleti, notaðu {{ui:Flytja út}} › {{ui:Athuga fyrir þrívíddarprentun (STL eða 3MF)…}}: sjá [Gerðu hlut tilbúinn fyrir þrívíddarprentun](topic:print-3d).

## Fyrir önnur CAD-forrit: STEP

Veldu {{ui:Flytja út}}, síðan {{ui:STEP AP242 (nákvæmt fast efni)}}. Það skrifar hlutinn sem eitt nákvæmt fast efni, í millimetrum, snúið í Z upp. Ávalir fletir eru skrifaðir sem sannir sívalningar, keilur, kúlur og tórusar, með sönnum hringjum fyrir brúnir sínar, svo hitt forritið getur valið gat sem gat. Líkami sem var opnaður úr STEP-skrá heldur sléttu flötunum, sívalningunum, keilunum, kúlunum og tórusunum úr þeirri skrá, svo þeir fara líka út nákvæmir. Fletir án slíks yfirborðs (hlið splæsu, líkanaður þráður, líkami úr STL-, OBJ- eða 3MF-möskva, splæsa úr STEP-skrá, sópaðir og snúnir fletir) haldast slétt fasetur í sama fasta efninu, og stöðustikan segir hversu margir. Stöðustikan segir til dæmis: "Flutt út Flange.step (AP242, nákvæmt fast efni, mm, Z upp): 14 fletir á sönnu yfirborði sínu (10 sívalningslaga, 1 keilulaga, 0 kúlulaga, 0 tórusalaga), 0 passandi brúnarferlar." Hún geymir aðeins fasta efnið: enga sögu, engar skissur, enga teikningu. Ef hitt forritið les aðeins AP214, veldu {{ui:STEP AP214 (nákvæmt fast efni)}}: sama fasta efnið í eldra skemanu.

Hvað er nákvæmt og hvað ekki:

- Sléttir fletir, sívalningar (göt, upphækkanir, ávalar á beinum brúnum), keilur (skálgöt, skástig), kúlur og tórusar eru nákvæm, og það sama gildir um beinar, hringlaga og sporöskjulaga brúnir þeirra. Stillingin **Bogar** breytir þeim ekki.
- Þar sem tveir ávalir fletir mætast (gat boraðt þvert í gegnum ás), er brúnin slétt ferill sem passar við báða fleti innan 0,00001 mm; "passandi brúnarferlar" telur þá.
- Lokað hol inni í hlutnum er skrifað sem tóm í föstu efninu. Nokkrir aðskildir líkamar eru skrifaðir sem nokkur föst efni.
- Samsetning er ekki skrifuð sem nákvæmt STEP enn: fluttu út hvern hluta fyrir sig.

Það var prófað með því að lesa skrárnar aftur í OpenCascade, sem staðfestir gild föst efni með rúmmálum sem reiknuð voru í höndunum. Það hefur ekki enn verið opnað í öllum CAD- eða CAM-forritum; ef eitt þeirra hafnar skrá, skrifar {{ui:STEP (facetað, möskvakjarni)}} sömu lögun sem slétta fleti (á eigin ásum PartCraft, Y upp), og vinsamlegast láttu okkur vita í gegnum {{ui:Hjálp}} › {{ui:Tilkynna vandamál}}.

Fyrir spónlyftingu skrifar vinnusvæðið Framleiðsla einnig nákvæma fasta efnið í eigin vinnuhnitum uppsetningarinnar: sjá [Gerðu verkferla og G-kóða](topic:manufacture#exact-step-for-the-shop).

## Fyrir BIM-forrit: IFC með öllum eiginleikum

Veldu {{ui:Flytja út}}, síðan {{ui:IFC 4 (með öllum eiginleikum)}}. Hluturinn er skrifaður sem IFC 4 eining fyrir byggingar- og verksmiðjulíkön, lögun hans sem þríhyrningar (Z upp, millimetrar), ásamt því sem PartCraft veit um hann sem eiginleikasöfn:

| Eiginleikasafn | Inniheldur |
|---|---|
| **PartCraft_Part** | Heiti, efni og eðlisþyngd þess, virka stillingin, fjöldi líkama; í samsetningu einnig hlutanúmer og lýsing |
| **PartCraft_Parameters** | Sérhver breyta hlutarins með gildi sínu; formúla og athugasemd eru í lýsingu eiginleikans |
| **PartCraft_TitleBlock** | Reitirnir í titilreit teikningarinnar sem þú fylltir út (heiti, teikningarnúmer, útgáfa, fyrirtæki, teiknað, yfirfarið og samþykkt af, dagsetning, yfirborðsáferð, almennt vikmark) og stærð blaðsins |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Rúmmál, yfirborðsflatarmál, massi (með efni) og heildarstærð |

Efnið er tengt sem IFC-efni og teikningarnúmerið er merki einingarinnar. Í samsetningu er hver hluti skrifaður einu sinni sem gerð sem geymir eiginleika sína, og hvert afrit er staðsett þar sem samsetningin setur það með eigin gildum í **PartCraft_Instance**: heiti þess, liðsnúmer þess í efnisyfirlitinu og hvort það sé jarðtengdi hlutinn.

## Fyrir leysi-, vatnsskurðar- eða CNC-snið: DXF

Tvær gerðir af DXF, báðar útgáfa R12, sem öll CAD- og CAM-forrit opna:

### Skissa

1. Veldu skissuna í sögunni (eða hafðu hana opna).
2. Veldu {{ui:Flytja út}}, síðan {{ui:DXF af skissunni eða sléttum fleti}}. (Hægra spjald skissunnar hefur einnig {{ui:Flytja út sem DXF}}.)

Þú færð `<part> - <sketch>.dxf` í eigin hnitum skissunnar: línur, sanna boga og hringi á lagi **PROFILE**, hjálparrúmfræði á **CONSTRUCTION**, lausa punkta á **POINTS**.

### Slétur flötur á föstu efninu

1. Smelltu á sléttan flöt í myndinni (til dæmis efri hlið plötu með götum).
2. Veldu {{ui:Flytja flöt út sem DXF}} í hægra spjaldinu, eða {{ui:Flytja út}}, síðan {{ui:DXF af skissunni eða sléttum fleti}}.

Þú færð `<part> - face.dxf`: útlínu flatarins og öll göt í honum. Ávalt gat (heill hringur þar sem sívalningur mætir fletinum: borað gat, eða gat í opnaðri STEP-skrá) er skrifað sem sannur hringur með eigin miðju og radíus gatsins. Allar aðrar útlínur eru lokaðar fjöllínur, og ávalar brúnir þeirra (hornin á ávölunum, raufar, bogar) eru fasetur þeirra, svo stilltu fyrst **Bogar** á Fínt ef skurðarinn fylgir þeim nákvæmlega. Stöðustikan segir hversu margar útlínur eru, hversu margar þeirra eru sannir hringir og flatarmál flatarins.

Ef hvorki er valin skissa né sléttur flötur: "Opnaðu eða veldu skissu, eða veldu sléttan flöt, til að flytja út DXF."

## Teikning

PDF-teikningin hefur sína eigin leiðbeiningu: [Gerðu teikningarblað](topic:drawing-pdf).

## Snið sem eru ekki í boði

glTF, OBJ, IGES og Parasolid eru ekki flutt út í þessari útgáfu. DWG er aðeins skrifað af afbrigðapakkanum, sem teikningarblað: sjá [Gerðu afbrigðapakka úr stillingunum þínum](topic:variant-pack). Sjá [Skráasnið](topic:file-formats).
