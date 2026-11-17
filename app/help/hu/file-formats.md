---
title: Fájlformátumok
summary: A PartCraft által olvasott és írt összes fájl, a kiterjesztésekkel, mértékegységekkel, tengelyekkel, és azzal, hogy mit tartanak meg vagy veszítenek el.
keywords: formátumok, fájltípusok, kiterjesztések, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, háló, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, mértékegységek, z felfelé
from: 4d0ecbee
---

| Formátum | Kiterjesztés | Megnyitás | Mentés vagy exportálás | Mértékegység | Felfelé mutató tengely | Megtartja |
|---|---|---|---|---|---|---|
| PartCraft-alkatrész | `.partcraft.json` | Igen | {{ui:Mentés}} | mm | Y | A teljes előzményt: vázlatokat, kapcsolatokat, méreteket, jellemzőket, letiltást, visszagörgetést, a görbék beállítását, a rajz beállításait és a GD&T-t, valamint a korábbi verzióban importált STEP-szöveget |
| PartCraft-összeállítás | `.partcraft-asm.json` | Igen | {{ui:Mentés}} összeállításban | mm | Y | Minden alkatrészt (beágyazva), a példányokat és helyzetüket, a kapcsolatokat |
| STL (bináris vagy szöveges) | `.stl` | Igen, mint testet: [STL, OBJ vagy 3MF megnyitása](topic:open-meshes) | {{ui:STL, 3D-nyomtatáshoz}} | mm (megnyitáskor kérdezi) | Z | Csak a test háromszögeit |
| 3MF | `.3mf` | Igen, mint test | {{ui:3MF, 3D-nyomtatáshoz}} | mm (a fájlban megadva) | Z | A testet egyetlen hálóobjektumként |
| OBJ | `.obj` | Igen, mint test (csak lapok) | Nem | megnyitáskor kérdezi | Z vagy Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Igen, mint test, háromszögként olvasva (a görbe lapok facettákként jelennek meg; a fájl sík lapjai, hengerei, kúpjai, gömbjei és toruszai megmaradnak a pontos exporthoz): [STEP-fájl megnyitása](topic:import-step) | | mm (a fájl mértékegységéből) | Z, vagy Y ha így jelöli | A testek és a felületi testek, az összeállítások minden alkatrésszel a helyén; nincs szín, név, összeállítási fa vagy PMI |
| `.3dm` | `.3dm` | Igen, egyetlen testként a hálóiból és felületeiből (a mentett renderelési hálók, különben tesszelve): [.3dm modell megnyitása](topic:open-3dm-files) | | A fájl mértékegységéből | Z, vagy Y ha így jelöli | Hálók, poliazonfelületek, kihúzások és blokkelhelyezések egy testként; nincs görbe, szín, réteg vagy név |
| STEP AP242, pontos | `.step` | | {{ui:STEP AP242 (pontos test)}} | mm | Z | Egyetlen pontos test: sík lapok, hengerek, kúpok, gömbök és toruszok valódi felületükön, valódi körök és egyenesek élekként; a spline-oldalak, a modellezett menetek, a hálófájlokból származó testek és a STEP-fájl spline-lapjai facettákként maradnak. Más CAD- és CAM-programokhoz használandó STEP |
| STEP AP214, pontos | `.step` | | {{ui:STEP AP214 (pontos test)}} | mm | Z | Ugyanez a pontos test a régebbi AP214 sémában, azoknak a programoknak, amelyek csak azt olvassák |
| STEP AP242, lapokra bontott | `.step` | | {{ui:STEP (lapokra bontott, hálókernel)}} | mm | Y | Sík lapokból álló zárt test: a kerek felületek facettákként. Ahhoz a programhoz, amely nem fogadja el a pontos fájlt |
| STEP AP214, lapokra bontott | `.step` | | {{ui:STEP AP214 (lapokra bontott, hálókernel)}} | mm | Y | Ugyanez a test a régebbi AP214 sémában, azoknak a programoknak, amelyek csak azt olvassák |
| USD-csomag | `.usdz` | Nem | {{ui:USD csomag (.usdz)}} | m | Z | A test az anyagával, térfogatával és tömegével; összeállítás minden alkatrésszel egyszer és minden példány elhelyezve: [Exportálás USD-ként](topic:usd) |
| IFC 4 | `.ifc` | Nem | {{ui:IFC 4 (minden tulajdonsággal)}} | mm | Z | Az alak háromszögekként, az anyag, minden paraméter, a rajzfej, a mennyiségek; egy összeállítás alkatrészei típusokként, a példányok elhelyezve |
| DXF R12, vázlat | `.dxf` | Nem | {{ui:DXF a vázlatról vagy sík lapról}} kijelölt vázlattal | mm | A vázlat saját x, y tengelye | Vonalak, valódi ívek és körök, pontok; a PROFILE, CONSTRUCTION, POINTS rétegeken |
| DXF R12, lap | `.dxf` | Nem | {{ui:DXF a vázlatról vagy sík lapról}} kijelölt sík lappal | mm | A lap saját x, y tengelye | A lap körvonalai: a kerek furatok valódi körként, a többi zárt polivonalként (a kerek élek facettákként) |
| PDF-rajz | `.pdf` | Nem | {{ui:Rajz (PDF): nézetek, metszet, részlet, GD&T}} | mm A3 lapon | | Elölnézet, felülnézet, jobb oldali nézet, axonometrikus, metszet és részlet nézetek, facettákból rajzolva, takart vonalak, összes méret, GD&T-jelek, rajzfej |

## A PartCraft-fájlok

Mindkettő egyszerű szöveg (JSON). A test sosem tárolódik: a PartCraft az előzményekből építi újra, így a fájlok kicsik maradnak és mindig megfelelnek az előzményeknek.

- Minden fájlnak van verziószáma. Ez az építés az általa használt tartalomhoz legalacsonyabb verziószámot írja minden alkatrészfájlba (2-től 5-ig; a hálóból készült test az 5-öt igényli), és minden régebbi verziót megnyit. Az újabb PartCraftból származó fájlt a rendszer visszautasítja, és megnevezi mindkét verziót.
- Minden értéket a fájl megnyitásakor ellenőriz a rendszer. A neveknek a vezérlőkarakterek lekerülnek; a tartományon kívüli számok, a hiányzó jellemzőkre mutató hivatkozások és az ismeretlen jellemzőfajták egyszerű indokkal visszautasításra kerülnek.
- Ne szerkessze ezeket a fájlokat kézzel, hacsak nem ismeri a formátumot. Az az ellenőrzésen át nem menő fájl nem nyílik meg.
- Egy korábbi verzióban importált, nagy STEP-testet tartalmazó alkatrész elérheti az 50 MB-ot, ami a legnagyobb PartCraft-alkatrészfájl, amelyet a PartCraft megnyit (lásd [Hibaelhárítás](topic:troubleshooting#file-problems)).

## Facetták és pontosság

Az STL és a 3MF mindig facettákból áll, a **Görbék** beállítás szerint, ugyanígy a lap DXF is, kivéve a kerek furatokat, amelyek valódi körök. A vázlat DXF-ben valódi ívek és körök vannak, mert közvetlenül a vázlatból származnak. Ez a verzió minden alkatrészt a hálókernellel épít, így a rajz nézetei (a metszetekkel együtt) is facettásak. A pontos STEP-export a kivétel: a kernel minden lap valódi felületét ismeri a vázlatból (vagy abból a STEP-fájlból, amelyből a test megnyílt), így a kerek felületek valódi hengerekként, kúpokként, gömbökként és toruszokként íródnak ki, bármire is van állítva a **Görbék** (lásd [Exportálás nyomtatáshoz, STEP és DXF formátumban](topic:export-files#for-other-cad-programs-step)).

## Ebben a verzióban nem támogatott

| Formátum | Állapot |
|---|---|
| glTF, IGES, Parasolid, ACIS (be és ki); OBJ exportálás | Nincs elkészítve |
| DWG | Csak a [változatcsomaggal](topic:variant-pack) íródik, minden konfiguráció rajzlapjaként. Nem olvasható, és más export sincs. A DXF-et exportálja; minden CAD-program megnyitja az R12 DXF-et |
| Összeállítási STEP és összeállítás rajza | Még nincs elkészítve. Az egyes alkatrészeket exportálja pontos STEP-ként; az STL-t, 3MF-et és a darabjegyzéket az összeállításból exportálhatja |
| Más programok saját alkatrész- és összeállítási fájljai (kivéve a `.3dm`-et, amely egy testként nyílik meg) | Nincs elkészítve |

Lásd: [Ami még nincs elkészítve](topic:not-built-yet).
