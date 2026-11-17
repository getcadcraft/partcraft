---
title: Eksport danych: arkusz danych, pola i siatki
summary: Zapis arkusza danych wygenerowanej bryły jako JSON lub PDF, jej pola jako obrazu VTK (.vti) lub zbioru poziomicowego OpenVDB (.vdb) oraz powierzchni jako siatki VTK (.vtu) do ParaView i innych narzędzi analizy, a siatki jako 3MF z danymi generatora. Ta sama część zawsze zapisuje te same pliki.
keywords: eksport, arkusz danych, json, pdf, vti, vtu, vtk, paraview, 3mf, pole, odległość ze znakiem, fea, cfd, metadane, openvdb
from: 817b4579
---

W obszarze roboczym {{ui:Inżynieria}} albo we właściwościach wygenerowanej bryły otwórz **Eksport danych**:

| Przycisk | Plik | Do czego |
|---|---|---|
| Arkusz danych (JSON) | `.json` | Wszystkie wejścia, każda liczba z jednostką i źródłem, sprawdzenia, odcisk siatki. Posortowane, bez czasów: ta sama część daje ten sam plik. |
| Arkusz danych (PDF) | `.pdf` | To samo na papierze, na tylu stronach, ile potrzeba. |
| Pole (.vti) | `.vti` | Część jako odległość ze znakiem (ujemna wewnątrz) i maska wnętrza na siatce punktów: plik obrazu VTK dla ParaView i narzędzi opartych na VTK. Budowany jest z powierzchni bryły z rozmiarem woksela z danych wejściowych generatora, więc zajmuje chwilę; bryła powyżej 400 000 trójkątów jest za duża dla strony: wtedy zapisz pole ze skryptu (`field_bake`). |
| Zbiór poziomicowy (.vdb) | `.vdb` | To samo pole jako zbiór poziomicowy OpenVDB: rzadkie drzewo, które przechowuje tylko cienki pas wokseli wokół powierzchni, dla narzędzi czytających OpenVDB (renderery, symulacje i programy 3D). Rozmiar woksela i jednostki są generatora (milimetry), wąski pas to część aktywna, wnętrze jest ujemne. Budowany z powierzchni jak `.vti`, z tym samym limitem 400 000 trójkątów; plik większy niż 1,5 GB jest odrzucany (użyj większego rozmiaru woksela). Plik jest w formacie OpenVDB 224, bez kompresji poza własnym pakowaniem wartości aktywnych OpenVDB, więc każdy czytnik OpenVDB go otworzy. |
| Powierzchnia (.vtu) | `.vtu` | Trójkąty z polem powierzchni i wektorem normalnym każdego z nich. |
| 3MF z danymi generatora | `.3mf` | Siatka w milimetrach dla slicera, z generatorem, jego wejściami i (dla kratownicy stopniowanej) zakresem ścianek jako metadanymi w pliku. |

Nic w tych plikach nie pochodzi z zegara ani z maszyny, więc dwa pliki można porównać bajt po bajcie: zmieniony bajt oznacza zmienioną część.

## Jeszcze nie zbudowano

- `.vti` lub `.vdb` pola o rozmiarze woksela innym niż własny rozmiar generatora.
- Odczytu plików `.vdb` (zbudowany jest tylko zapis).
