---
title: Adatkimenet: adatlap, mezők és hálók
summary: Egy generált test adatlapjának mentése JSON vagy PDF formátumban, a mezőjének mentése VTK-képként (.vti) vagy OpenVDB-szintkészletként (.vdb), a felülete VTK-hálóként (.vtu) a ParaView-hoz és más elemzőeszközökhöz, a háló pedig generátoradatokat hordozó 3MF-ként. Ugyanaz az alkatrész mindig ugyanazokat a fájlokat írja.
keywords: exportálás, adatlap, json, pdf, vti, vtu, vtk, paraview, 3mf, mező, előjeles távolság, fea, cfd, metaadat, openvdb
from: 817b4579
---

A {{ui:Mérnöki}} munkaterületen, vagy egy Generált test tulajdonságai között nyissa meg az **Adatkimenet** részt:

| Gomb | Fájl | Mire való |
|---|---|---|
| Adatlap (JSON) | `.json` | Minden bemenet, minden szám a mértékegységével és forrásával, az ellenőrzések, a háló ujjlenyomata. Rendezett, időpont nélkül: ugyanaz az alkatrész ugyanazt a fájlt adja. |
| Adatlap (PDF) | `.pdf` | Ugyanaz papíron, annyi oldalon, amennyi kell. |
| Mező (.vti) | `.vti` | Az alkatrész előjeles távolságként (negatív belül) és belső maszkként egy pontrácson; VTK-képfájl a ParaView-hoz és a VTK-ra épülő eszközökhöz. A test felületéből készül a generátor bemeneteinek voxelméretén, ezért egy ideig tart, és a 400 000 háromszögnél nagyobb test túl nagy az oldalhoz: ilyenkor mentse a mezőt szkriptből (`field_bake`). |
| Szintkészlet (.vdb) | `.vdb` | Ugyanez a mező OpenVDB-szintkészletként: ritka fa, amely csak a felület körüli vékony voxelsávot tartja meg, olyan eszközökhöz, amelyek az OpenVDB-t olvassák (renderelő, szimulációs és 3D-s programok). A voxelméret és a mértékegység a generátoré (milliméter), a keskeny sáv az aktív rész, a belső negatív. A felületből készül, mint a `.vti`, ugyanazzal a 400 000 háromszögös korláttal; az 1,5 GB-nál nagyobb fájlt az írás elutasítja (használjon nagyobb voxelméretet). A fájl OpenVDB 224-es formátumú, tömörítetlen, az OpenVDB saját aktívérték-csomagolását leszámítva, így bármely OpenVDB-olvasó megnyitja. |
| Felület (.vtu) | `.vtu` | A háromszögek, mindegyik területével és normálisával. |
| 3MF generátoradatokkal | `.3mf` | A háló milliméterben egy szeletelőnek, a generátor, a bemenetei és (rácsos szerkezetnél) a falvastagság tartománya metaadatként a fájlban. |

Ezekbe a fájlokba semmi nem kerül az órából vagy a gépből, így két fájl bájtonként összehasonlítható: egy megváltozott bájt megváltozott alkatrészt jelent.

## Még nincs elkészítve

- A `.vti` vagy a `.vdb` a mezőről a generátorétól eltérő voxelméretben.
- `.vdb` fájlok beolvasása (csak az írás készült el).
