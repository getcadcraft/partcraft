---
title: Formati datotek
summary: Vsaka datoteka, ki jo PartCraft bere in zapisuje, s končnicami, enotami, osmi in tem, kaj ohrani ali izgubi vsak format.
keywords: formati, vrste datotek, končnice, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mreža, step, stp, ap242, dxf, r12, pdf, gltf, iges, enote, z navzgor
from: 4d0ecbee
---

| Format | Končnica | Odpri | Shrani ali izvozi | Enote | Os navzgor | Ohrani |
|---|---|---|---|---|---|---|
| PartCraft del | `.partcraft.json` | Da | {{ui:Shrani}} | mm | Y | Celotno zgodovino: skice, relacije, mere, značilke, zatiranje, položaj povrnitve, nastavitev krivulj, nastavitve risbe in GD&T, besedilo STEP, uvoženo v prejšnji različici |
| PartCraft sestav | `.partcraft-asm.json` | Da | {{ui:Shrani}} v sestavu | mm | Y | Vsak del (vdelan), izvode in njihove položaje, spoje |
| STL (binarno ali besedilno) | `.stl` | Da, kot telo: [Odprite STL, OBJ ali 3MF](topic:open-meshes) | {{ui:STL, za 3D-tiskanje}} | mm (vpraša se ob odpiranju) | Z | Samo trikotnike telesa |
| 3MF | `.3mf` | Da, kot telo | {{ui:3MF, za 3D-tiskanje}} | mm (navedeno v datoteki) | Z | Telo kot en mrežni predmet |
| OBJ | `.obj` | Da, kot telo (samo ploskve) | Ne | vpraša se ob odpiranju | Z ali Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Da, kot telo, prebrano kot trikotniki (ukrivljene ploskve narisane kot fasete; ravne ploskve, valji, stožci, krogle in tori datoteke se ohranijo za točni izvoz): [Odprite datoteko STEP](topic:import-step) | | mm (iz enote datoteke) | Z ali Y, če tako določite | Telesa in površinska telesa, sestavi z vsemi deli na mestu; brez barv, imen, drevesa sestava ali PMI |
| `.3dm` | `.3dm` | Da, kot eno telo iz njegovih mrež in ploskev (shranjene mreže za upodabljanje, sicer tesselirano): [Odprite model .3dm](topic:open-3dm-files) | | Iz enote datoteke | Z ali Y, če tako določite | Mreže, polploskve, izvlečki in postavitve blokov kot eno telo; brez krivulj, barv, plasti ali imen |
| STEP AP242, točen | `.step` | | {{ui:STEP AP242 (točno telo)}} | mm | Z | Eno točno telo: ravne ploskve, valji, stožci, krogle in tori na pravih površinah, pravi krogi in črte kot robovi; stranice zlepkov, modelirani navoji, telesa iz mrežnih datotek in zlepkove ploskve datoteke STEP ostanejo fasete. STEP za druge programe CAD in CAM |
| STEP AP214, točen | `.step` | | {{ui:STEP AP214 (točno telo)}} | mm | Z | Isto točno telo v starejši shemi AP214, za programe, ki berejo samo to |
| STEP AP242, fasetiran | `.step` | | {{ui:STEP (fasetiran, mrežno jedro)}} | mm | Y | Zaprto telo iz ravnih ploskev: okrogle ploskve kot fasete. Za program, ki zavrne točno datoteko |
| STEP AP214, fasetiran | `.step` | | {{ui:STEP AP214 (fasetiran, mrežno jedro)}} | mm | Y | Isto telo v starejši shemi AP214, za programe, ki berejo samo to |
| Paket USD | `.usdz` | Ne | {{ui:Paket USD (.usdz)}} | m | Z | Telo z materialom, prostornino in maso; sestav z vsakim delom enkrat in postavljenimi izvodi: [Izvoz v USD](topic:usd) |
| IFC 4 | `.ifc` | Ne | {{ui:IFC 4 (z vsemi lastnostmi)}} | mm | Z | Oblika kot trikotniki, material, vsak parameter, glava risbe, količine; deli sestava kot tipi in postavljeni izvodi |
| DXF R12, skica | `.dxf` | Ne | {{ui:DXF skice ali ravne ploskve}} z izbrano skico | mm | Lastni x, y skice | Črte, pravi loki in krožnice, točke; sloji PROFILE, CONSTRUCTION, POINTS |
| DXF R12, ploskev | `.dxf` | Ne | {{ui:DXF skice ali ravne ploskve}} z izbrano ravno ploskvijo | mm | Lastna x, y ploskve | Obrisi ploskve: okrogle izvrtine kot pravi krogi, ostalo kot zaprte polilinije (okrogli robovi kot fasete) |
| PDF risba | `.pdf` | Ne | {{ui:Risba (PDF): pogledi, prerez, detajl, GD&T}} | mm na listu A3 | | Pogledi spredaj, zgoraj, desno, izometrija, prerez in detajl, narisani iz fasetov, skriti robovi, skupne mere, simboli GD&T, glava risbe |

## Datoteke PartCraft

Obe sta navadno besedilo (JSON). Telo se nikoli ne shrani: PartCraft ga obnovi iz zgodovine, zato so datoteke majhne in se vedno ujemajo z zgodovino.

- Vsaka datoteka ima številko različice. Ta različica zapiše vsako datoteko dela z najnižjo različico, ki vsebuje, kar uporablja (2 do 5; telo, narejeno iz mreže, potrebuje 5), in odpre vsako starejšo različico. Datoteka iz novejšega PartCraft je zavrnjena s sporočilom, ki navaja obe različici.
- Vsaka vrednost se preveri ob odpiranju datoteke. Imena izgubijo kontrolne znake; števila izven območja, sklici na manjkajoče značilke in neznane vrste značilk so zavrnjeni z jasnim razlogom.
- Teh datotek ne urejajte ročno, razen če poznate format. Datoteka, ki ne prestane preverjanj, se ne bo odprla.
- Del z velikim telesom STEP, uvoženim v prejšnji različici, lahko preseže 50 MB, kar je največ, kar PartCraft odpre kot datoteko dela (glejte [Odpravljanje težav](topic:troubleshooting#file-problems)).

## Fasete in točnost

STL in 3MF sta vedno sestavljena iz fasetov pri nastavitvi **Krivulje**, prav tako DXF ploskve, razen okroglih izvrtin, ki so pravi krogi. DXF skice ima prave loke in krožnice, ker prihaja naravnost iz skice. Ta različica vsak del gradi z mrežnim jedrom, zato so pogledi risbe (vključno s prerezi) tudi fasetirani. Točni izvoz STEP je izjema: jedro pozna pravo površino vsake ploskve iz skice (ali iz datoteke STEP, iz katere je telo odprto), zato so okrogle ploskve zapisane kot pravi valji, stožci, krogle in tori, ne glede na nastavitev **Krivulje** (glejte [Izvoz za tiskanje, STEP in DXF](topic:export-files#for-other-cad-programs-step)).

## Ni podprto v tej različici

| Format | Stanje |
|---|---|
| glTF, IGES, Parasolid, ACIS (uvoz ali izvoz); OBJ izvoz | Ni izdelano |
| DWG | Zapiše ga samo [paket variant](topic:variant-pack), kot list risbe vsake konfiguracije. Ni branja in nobenega drugega izvoza. Izvozite DXF; vsak program CAD odpre DXF R12 |
| Sestav STEP in risba sestava | Še ni izdelano. Izvozite vsak del kot točni STEP; STL, 3MF in kosovnica se izvozijo iz sestava |
| Lastne datoteke delov in sestavov drugih programov (razen `.3dm`, ki se odpre kot eno telo) | Ni izdelano |

Glejte [Kaj še ni izdelano](topic:not-built-yet).
