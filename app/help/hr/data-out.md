---
title: Izvoz podataka: tablica podataka, polja i mreže
summary: Spremite tablicu podataka generiranog tijela kao JSON ili PDF, njegovo polje kao VTK sliku (.vti) ili OpenVDB razinski skup (.vdb) i njegovu površinu kao VTK mrežu (.vtu) za ParaView i druge alate za analizu, te mrežu kao 3MF koji nosi podatke generatora. Isti dio uvijek zapisuje iste datoteke.
keywords: izvoz, tablica podataka, json, pdf, vti, vtu, vtk, paraview, 3mf, polje, predznačna udaljenost, fea, cfd, metapodaci, openvdb
from: 817b4579
---

U radnom prostoru {{ui:Inženjer}}, ili u svojstvima generiranog tijela, otvorite **Izvoz podataka**:

| Gumb | Datoteka | Za |
|---|---|---|
| Tablica podataka (JSON) | `.json` | Svaki ulaz, svaki broj s jedinicom i izvorom, provjere, otisak mreže. Sortirano, bez vremena: isti dio daje istu datoteku. |
| Tablica podataka (PDF) | `.pdf` | Isto na papiru, na onoliko stranica koliko treba. |
| Polje (.vti) | `.vti` | Dio kao predznačna udaljenost (negativno unutra) i maska unutrašnjosti na rešetki točaka: VTK slikovna datoteka za ParaView i alate izgrađene na VTK-u. Gradi se iz površine tijela pri veličini voksela ulaza generatora, pa traje malo, a tijelo preko 400 000 trokuta je preveliko za stranicu: umjesto toga spremite polje iz skripte (`field_bake`). |
| Razinski skup (.vdb) | `.vdb` | Isto polje kao OpenVDB razinski skup: rijetko stablo koje čuva samo tanki pojas voksela oko površine, za alate koji čitaju OpenVDB (renderere, simulacije i 3D programe). Veličina voksela i jedinice su generatorove (milimetri), uski pojas je aktivni dio, unutrašnjost je negativna. Gradi se iz površine kao `.vti`, s istim ograničenjem od 400 000 trokuta; datoteka veća od 1.5 GB se odbija (koristite veću veličinu voksela). Datoteka je OpenVDB format 224, nekomprimirana osim vlastitog OpenVDB pakiranja aktivnih vrijednosti, pa je svaki OpenVDB čitač otvara. |
| Površina (.vtu) | `.vtu` | Trokuti, sa svojom površinom i normalom. |
| 3MF s podacima generatora | `.3mf` | Mreža u milimetrima za slicer, s generatorom, njegovim ulazima i (za rešetkasti model s gradijentom) rasponom stijenki kao metapodaci u datoteci. |

Ništa u ovim datotekama ne dolazi iz sata ni stroja, pa dvije datoteke možete usporediti bajt po bajt: promijenjeni bajt znači promijenjeni dio.

## Još nije izrađeno

- `.vti` ili `.vdb` polja pri veličini voksela različitoj od one generatora.
- Čitanje `.vdb` datoteka (izrađeno je samo pisanje).
