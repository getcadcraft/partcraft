---
title: Izvoz podataka: tabela podataka, polja i mreže
summary: Sačuvajte tabelu podataka generisanog tela kao JSON ili PDF, njegovo polje kao VTK sliku (.vti) ili OpenVDB skup nivoa (.vdb) i njegovu površ kao VTK mrežu (.vtu) za ParaView i druge alate za analizu, a mrežu kao 3MF koji nosi podatke generatora. Isti deo uvek upisuje iste fajlove.
keywords: izvoz, tabela podataka, json, pdf, vti, vtu, vtk, paraview, 3mf, polje, označeno rastojanje, fea, cfd, metapodaci, openvdb
from: 817b4579
---

U radnom prostoru {{ui:Inženjering}} ili u svojstvima generisanog tela otvorite **Izvoz podataka**:

| Dugme | Fajl | Za |
|---|---|---|
| Tabela podataka (JSON) | `.json` | Svaki ulaz, svaki broj sa jedinicom i izvorom, provere, otisak mreže. Sortirano, bez vremena: isti deo daje isti fajl. |
| Tabela podataka (PDF) | `.pdf` | Isto na papiru, na onoliko strana koliko treba. |
| Polje (.vti) | `.vti` | Deo kao označeno rastojanje (negativno unutra) i maska unutrašnjosti na mreži tačaka: VTK fajl slike za ParaView i alate zasnovane na VTK-u. Pravi se iz površi tela pri veličini voksela ulaza generatora, pa traje malo, a telo sa više od 400 000 trouglova je preveliko za stranicu: umesto toga sačuvajte polje iz skripte (`field_bake`). |
| Skup nivoa (.vdb) | `.vdb` | Isto polje kao OpenVDB skup nivoa: retko stablo koje čuva samo tanak pojas voksela oko površi, za alate koji čitaju OpenVDB (renderere, simulacije i 3D programe). Veličina voksela i jedinice su generatorove (milimetri), uski pojas je aktivni deo, unutrašnjost je negativna. Pravi se iz površi kao `.vti`, sa istim ograničenjem od 400 000 trouglova; fajl koji bi bio veći od 1.5 GB se odbija (koristite veću veličinu voksela). Fajl je OpenVDB format 224, nekompresovan osim sopstvenog pakovanja aktivnih vrednosti u OpenVDB-u, pa ga svaki OpenVDB čitač otvara. |
| Površ (.vtu) | `.vtu` | Trouglovi, sa površinom i normalom svakog. |
| 3MF sa podacima generatora | `.3mf` | Mreža u milimetrima za slajsera, sa generatorom, njegovim ulazima i (za gradiranu rešetku) opsegom zidova kao metapodacima u fajlu. |

Ni u jednom od ovih fajlova ništa ne dolazi iz sata ili mašine, pa možete da uporedite dva fajla bajt po bajt: promenjen bajt znači promenjen deo.

## Još nije napravljeno

- `.vti` ili `.vdb` polja na veličini voksela koja nije ona generatorova.
- Čitanje `.vdb` fajlova (izrada je gotova, samo upis).
