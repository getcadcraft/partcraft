---
title: Izvoz podataka: tabela podataka, polja i mreže
summary: Čuvanje tabele podataka generisanog tijela kao JSON ili PDF, njegovog polja kao VTK slike (.vti) ili OpenVDB nivo-skupa (.vdb) i njegove površine kao VTK mreže (.vtu) za ParaView i druge alate za analizu, te mreže kao 3MF s podacima generatora. Isti dio uvijek zapisuje iste datoteke.
keywords: izvoz, tabela podataka, json, pdf, vti, vtu, vtk, paraview, 3mf, polje, predznačna udaljenost, fea, cfd, metapodaci, openvdb
from: 817b4579
---

U radnom prostoru {{ui:Inženjering}}, ili u svojstvima generisanog tijela, otvori **Izvoz podataka**:

| Dugme | Datoteka | Za |
|---|---|---|
| Tabela podataka (JSON) | `.json` | Svaki ulaz, svaki broj s jedinicom i izvorom, provjere, otisak mreže. Sortirano, bez vremena: isti dio daje istu datoteku. |
| Tabela podataka (PDF) | `.pdf` | Isto na papiru, na onoliko stranica koliko treba. |
| Polje (.vti) | `.vti` | Dio kao predznačna udaljenost (negativna unutra) i maska unutrašnjosti na mreži tačaka: VTK slikovna datoteka za ParaView i alate zasnovane na VTK. Gradi se iz površine tijela na veličini voksela ulaza generatora, pa traje malo; tijelo preko 400 000 trouglova je preveliko za stranicu, pa umjesto toga polje sačuvaj iz skripte (`field_bake`). |
| Nivo-skup (.vdb) | `.vdb` | Isto polje kao OpenVDB nivo-skup: rijetko stablo koje čuva samo tanki pojas vokselova oko površine, za alate koji čitaju OpenVDB (renderi, simulacija i 3D programi). Veličina voksela i jedinice su generatorove (milimetri), uski pojas je aktivan dio, unutrašnjost je negativna. Gradi se iz površine kao `.vti`, s istim limitom od 400 000 trouglova; datoteka veća od 1.5 GB se odbija (koristi veću veličinu voksela). Datoteka je OpenVDB format 224, nekompresovana osim OpenVDB-ovog vlastitog pakovanja aktivnih vrijednosti, pa je svaki OpenVDB čitač otvara. |
| Površinska mreža (.vtu) | `.vtu` | Trouglovi, sa površinom i normalom svakog. |
| 3MF s podacima generatora | `.3mf` | Mreža u milimetrima za slajsera, s generatorom, njegovim ulazima i (za gradiranu rešetku) njenim rasponom zida kao metapodaci u datoteci. |

Ništa u ovim datotekama ne dolazi iz sata ili računara, pa možeš uporediti dvije datoteke bajt po bajt: promijenjen bajt znači promijenjen dio.

## Još nije izgrađeno

- `.vti` ili `.vdb` polja na veličini voksela različitoj od one generatora.
- Čitanje `.vdb` datoteka (izgrađeno je samo pisanje).
