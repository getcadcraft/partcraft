---
title: Výstup dát: dátový list, polia a siete
summary: Uložte dátový list vygenerovaného telesa ako JSON alebo PDF, jeho pole ako obraz VTK (.vti) alebo level set OpenVDB (.vdb) a jeho povrch ako sieť VTK (.vtu) pre ParaView a iné nástroje analýzy a sieť ako 3MF s dátami generátora. Tá istá časť vždy zapíše rovnaké súbory.
keywords: export, dátový list, json, pdf, vti, vtu, vtk, paraview, 3mf, pole, vzdialenosť so znamienkom, fea, cfd, metadáta, openvdb
from: 817b4579
---

V pracovnom priestore {{ui:Inžinierstvo}} alebo vo vlastnostiach vygenerovaného telesa otvorte **Výstup dát**:

| Tlačidlo | Súbor | Pre |
|---|---|---|
| Dátový list (JSON) | `.json` | Každý vstup, každé číslo s jednotkou a zdrojom, kontroly, odtlačok siete. Zoradené, bez časov: tá istá časť dá ten istý súbor. |
| Dátový list (PDF) | `.pdf` | To isté na papieri, na toľko strán, koľko je treba. |
| Pole (.vti) | `.vti` | Časť ako vzdialenosť so znamienkom (záporná vnútri) a maska vnútra na mriežke bodov: obrazový súbor VTK pre ParaView a nástroje postavené na VTK. Vytvára sa z povrchu telesa vo veľkosti voxelu vstupov generátora, takže to chvíľu trvá, a teleso nad 400 000 trojuholníkov je na stránku príliš veľké: uložte pole zo skriptu (`field_bake`) namiesto toho. |
| Level set (.vdb) | `.vdb` | Rovnaké pole ako level set OpenVDB: riedky strom, ktorý uchováva len tenký pás voxelov okolo povrchu, pre nástroje čítajúce OpenVDB (renderery, simulácie a 3D programy). Veľkosť voxelu a jednotky sú z generátora (milimetre), úzky pás je aktívna časť a vnútro je záporné. Vytvára sa z povrchu ako `.vti`, s rovnakým limitom 400 000 trojuholníkov; súbor nad 1.5 GB sa odmietne (použite väčšiu veľkosť voxelu). Súbor je vo formáte OpenVDB 224, nekomprimovaný okrem vlastného balenia aktívnych hodnôt OpenVDB, takže ho otvorí ktorýkoľvek čitateľ OpenVDB. |
| Povrch (.vtu) | `.vtu` | Trojuholníky, s plochou a normálou každého z nich. |
| 3MF s dátami generátora | `.3mf` | Sieť v milimetroch pre slicer, s generátorom, jeho vstupmi a (pre mriežku s gradientom) jej rozsahom stien ako metadátami v súbore. |

Nič v týchto súboroch nepochádza z hodín ani z počítača, takže dva súbory môžete porovnať bajt po bajte: zmenený bajt znamená zmenenú časť.

## Ešte nie je hotové

- `.vti` alebo `.vdb` poľa pri inej veľkosti voxelu, než je vlastná veľkosť generátora.
- Čítanie súborov `.vdb` (zatiaľ je hotový len zápis).
