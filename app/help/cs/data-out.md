---
title: Export dat: datový list, pole a sítě
summary: Uložení datového listu vygenerovaného tělesa jako JSON nebo PDF, jeho pole jako obrazu VTK (.vti) nebo level setu OpenVDB (.vdb) a jeho povrchu jako sítě VTK (.vtu) pro ParaView a jiné analytické nástroje, a sítě jako 3MF s daty generátoru. Stejný díl vždy zapíše stejné soubory.
keywords: export, datový list, json, pdf, vti, vtu, vtk, paraview, 3mf, pole, znaménková vzdálenost, fea, cfd, metadata, openvdb
from: 817b4579
---

V pracovním prostoru {{ui:Inženýr}}, nebo v vlastnostech vygenerovaného tělesa, otevřete **Export dat**:

| Tlačítko | Soubor | Pro |
|---|---|---|
| Datový list (JSON) | `.json` | Každý vstup, každé číslo s jednotkou a zdrojem, kontroly, otisk sítě. Seřazeno, bez časů: stejný díl dá stejný soubor. |
| Datový list (PDF) | `.pdf` | Totéž na papíře, přes tolik stran, kolik potřebuje. |
| Pole (.vti) | `.vti` | Díl jako znaménková vzdálenost (záporná uvnitř) a maska vnitřku na mřížce bodů: obrazový soubor VTK pro ParaView a nástroje postavené na VTK. Vytváří se z povrchu tělesa ve velikosti voxelu vstupů generátoru, takže to chvíli trvá; těleso nad 400 000 trojúhelníků je na stránku příliš velké, pole proto uložte ze skriptu (`field_bake`). |
| Level set (.vdb) | `.vdb` | Stejné pole jako level set OpenVDB: řídký strom, který drží jen úzké pásmo voxelů kolem povrchu, pro nástroje čtoucí OpenVDB (renderery, simulace a 3D programy). Velikost voxelu a jednotky jsou generátorové (milimetry), úzké pásmo je aktivní část, uvnitř je záporné. Vytváří se z povrchu jako `.vti`, se stejným limitem 400 000 trojúhelníků; soubor přesahující 1.5 GB se odmítne (použijte větší velikost voxelu). Soubor je ve formátu OpenVDB 224, nekomprimovaný kromě vlastního balení aktivních hodnot OpenVDB, takže jej otevře jakákoli čtečka OpenVDB. |
| Povrch (.vtu) | `.vtu` | Trojúhelníky, každý s jeho plochou a normálou. |
| 3MF s daty generátoru | `.3mf` | Síť v milimetrech pro slicer, s generátorem, jeho vstupy a (u gradované mřížky) jejím rozsahem stěn jako metadata v souboru. |

Nic v těchto souborech nepochází z hodin ani stroje, takže můžete dva soubory porovnat bajt po bajtu: změněný bajt znamená změněný díl.

## Ještě není hotovo

- `.vti` nebo `.vdb` pole při jiné velikosti voxelu, než je vlastní velikost generátoru.
- Načítání souborů `.vdb` (zatím je postaveno jen zápis).
