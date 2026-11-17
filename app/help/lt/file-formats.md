---
title: Failų formatai
summary: Visi failai, kuriuos PartCraft skaito ir įrašo, su plėtiniais, vienetais, ašimis ir tuo, ką kiekvienas išsaugo ar praranda.
keywords: formatai, failų tipai, plėtiniai, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, tinklas, step, stp, ap242, dxf, r12, pdf, gltf, iges, vienetai, Z aukštyn
from: 4d0ecbee
---

| Formatas | Plėtinys | Atidaryti | Įrašyti arba eksportuoti | Vienetai | Ašis aukštyn | Išlaiko |
|---|---|---|---|---|---|---|
| PartCraft detalė | `.partcraft.json` | Taip | {{ui:Įrašyti}} | mm | Y | Visą istoriją: eskizus, ryšius, matmenis, elementus, blokavimą, grąžinimo padėtį, kreivių nustatymą, brėžinio nustatymus ir GD&T, STEP tekstą, importuotą ankstesne versija |
| PartCraft surinkimas | `.partcraft-asm.json` | Taip | {{ui:Įrašyti}} surinkime | mm | Y | Kiekvieną detalę (įterptą), kopijas ir jų padėtis, jungtis |
| STL (dvejetainis arba tekstinis) | `.stl` | Taip, kaip kietasis kūnas: [Atidarykite STL, OBJ ar 3MF](topic:open-meshes) | {{ui:STL, spausdinimui 3D}} | mm (klausiama atidarant) | Z | Tik kietojo kūno trikampius |
| 3MF | `.3mf` | Taip, kaip kietasis kūnas | {{ui:3MF, spausdinimui 3D}} | mm (nurodyta faile) | Z | Kietąjį kūną kaip vieną tinklo objektą |
| OBJ | `.obj` | Taip, kaip kietasis kūnas (tik paviršiai) | Ne | klausiama atidarant | Z arba Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Taip, kaip kietasis kūnas, nuskaitytas kaip trikampiai (lenkti paviršiai nubraižomi kaip facetos; failo plokšti paviršiai, cilindrai, kūgiai, sferos ir toroidai išsaugomi tiksliam eksportui): [Atidarykite STEP failą](topic:import-step) | | mm (pagal failo vienetą) | Z, arba Y, jei taip nurodote | Kietuosius ir paviršinius kūnus, surinkimus su visomis detalėmis jų vietose; be spalvų, pavadinimų, surinkimo medžio ar PMI |
| `.3dm` | `.3dm` | Taip, kaip vienas kietasis kūnas iš jo tinklų ir paviršių (išsaugoti atvaizdavimo tinklai, kitaip trianguluoti): [Atidarykite .3dm modelį](topic:open-3dm-files) | | Pagal failo vienetą | Z, arba Y, jei taip nurodote | Tinklus, daugiapaviršius, ištraukas ir blokų padėtis kaip vieną kūną; be kreivių, spalvų, sluoksnių ar pavadinimų |
| STEP AP242, tikslus | `.step` | | {{ui:STEP AP242 (tikslus kietasis kūnas)}} | mm | Z | Vienas tikslus kietasis kūnas: plokšti paviršiai, cilindrai, kūgiai, sferos ir toroidai jų tikrais paviršiais, tikri apskritimai ir tiesės kaip briaunos; splaino šonai, modeliuoti sriegiai, kūnai iš tinklo failų ir STEP failo splaino paviršiai lieka facetomis. STEP, kurį naudoti kitoms CAD ir CAM programoms |
| STEP AP214, tikslus | `.step` | | {{ui:STEP AP214 (tikslus kietasis kūnas)}} | mm | Z | Tas pats tikslus kietasis kūnas senesnėje AP214 schemoje, programoms, kurios skaito tik ją |
| STEP AP242, facetinis | `.step` | | {{ui:STEP (paviršiais, tinklo branduolys)}} | mm | Y | Uždaras kietasis kūnas iš plokščių paviršių: apvalūs paviršiai kaip facetos. Programai, kuri atsisako tikslaus failo |
| STEP AP214, facetinis | `.step` | | {{ui:STEP AP214 (facetuotas, tinklelio branduolys)}} | mm | Y | Tas pats kietasis kūnas senesnėje AP214 schemoje, programoms, kurios skaito tik ją |
| USD paketas | `.usdz` | Ne | {{ui:USD paketas (.usdz)}} | m | Z | Kietasis kūnas su medžiaga, tūriu ir mase; surinkimas su kiekviena detale vieną kartą ir visomis kopijomis: [Eksportuokite kaip USD](topic:usd) |
| IFC 4 | `.ifc` | Ne | {{ui:IFC 4 (su visomis savybėmis)}} | mm | Z | Forma kaip trikampiai, medžiaga, kiekvienas parametras, antraštės blokas, kiekiai; surinkimo detalės kaip tipai, o kopijos įdėtos į vietas |
| DXF R12, eskizas | `.dxf` | Ne | {{ui:DXF eskizo arba plokščio paviršiaus}} su pasirinktu eskizu | mm | Eskizo savo x, y | Linijos, tikri lankai ir apskritimai, taškai; sluoksniai PROFILE, CONSTRUCTION, POINTS |
| DXF R12, paviršius | `.dxf` | Ne | {{ui:DXF eskizo arba plokščio paviršiaus}} su pasirinktu plokščiu paviršiumi | mm | Paviršiaus savo x, y | Paviršiaus kontūrai: apvalios skylės kaip tikri apskritimai, likusieji kaip uždarytos polilinijos (apvalios briaunos kaip facetos) |
| PDF brėžinys | `.pdf` | Ne | {{ui:Brėžinys (PDF): vaizdai, pjūvis, detalė, GD&T}} | mm A3 lape | | Priekinis, viršutinis, dešinysis, izometrinis, pjūvio ir detalės vaizdai, nubraižyti iš facetų, paslėptos linijos, bendri matmenys, GD&T simboliai, antraštės blokas |

## PartCraft failai

Abu yra paprastas tekstas (JSON). Kietasis kūnas niekada neįrašomas: PartCraft jį perkuria iš istorijos, todėl failai lieka maži ir visada atitinka istoriją.

- Kiekvienas failas turi versijos numerį. Ši versija įrašo kiekvieną detalės failą žemiausia versija, kuri talpina tai, ką jis naudoja (nuo 2 iki 5; kūnas, padarytas iš tinklo, reikalauja 5), ir atidaro visas senesnes versijas. Failas iš naujesnio PartCraft atmetamas su pranešimu, nurodančiu abi versijas.
- Kiekviena reikšmė patikrinama atidarant failą. Pavadinimai praranda valdančiuosius simbolius; skaičiai už ribų, nuorodos į nebeesančius elementus ir nežinomos elementų rūšys atmetami su paprastu paaiškinimu.
- Nekeiskite šių failų ranka, nebent žinote formatą. Failas, kuris neįveikia patikrinimų, neatsidarys.
- Detalė su dideliu STEP kietuoju kūnu, importuotu ankstesne versija, gali viršyti 50 MB – didžiausią detalės failą, kurį PartCraft atidaro (žr. [Trikčių šalinimas](topic:troubleshooting#file-problems)).

## Facetos ir tikslumas

STL ir 3MF visada sudaryti iš facetų pagal nustatymą **Kreivės**, taip pat ir paviršiaus DXF, išskyrus apvalias skyles, kurios yra tikri apskritimai. Eskizo DXF turi tikrus lankus ir apskritimus, nes jis imamas tiesiai iš eskizo. Ši versija kiekvieną detalę kuria su tinklo branduoliu, todėl ir brėžinio vaizdai (įskaitant pjūvius) yra facetiniai. Tikslus STEP eksportas yra išimtis: branduolys žino kiekvieno paviršiaus tikrą formą iš eskizo (arba iš STEP failo, iš kurio atidarytas kūnas), todėl apvalūs paviršiai įrašomi kaip tikri cilindrai, kūgiai, sferos ir toroidai, nepriklausomai nuo nustatyto **Kreivės** (žr. [Eksportas spausdinimui, STEP ir DXF](topic:export-files#for-other-cad-programs-step)).

## Nepalaikoma šioje versijoje

| Formatas | Būsena |
|---|---|
| glTF, IGES, Parasolid, ACIS (įvedimui ar išvedimui); OBJ eksportas | Nesukurta |
| DWG | Įrašomas tik per [variantų paketą](topic:variant-pack), kaip kiekvienos konfigūracijos brėžinio lapas. Neskaitomas ir jokio kito eksporto nėra. Eksportuokite DXF; kiekviena CAD programa atidaro R12 DXF |
| Surinkimo STEP ir surinkimo brėžinys | Dar nesukurta. Eksportuokite kiekvieną detalę kaip tikslų STEP; STL, 3MF ir komplektacijos sąrašas eksportuojami iš surinkimo |
| Kitų programų savi detalių ir surinkimų failai (išskyrus `.3dm`, kuris atidaromas kaip vienas kūnas) | Nesukurta |

Žr. [Kas dar nesukurta](topic:not-built-yet).
