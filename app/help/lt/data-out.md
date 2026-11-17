---
title: Duomenų eksportas: duomenų lapas, laukai ir tinkleliai
summary: Išsaugokite generuoto kūno duomenų lapą kaip JSON ar PDF, jo lauką kaip VTK vaizdą (.vti) ar OpenVDB lygio rinkinį (.vdb) ir paviršių kaip VTK tinklelį (.vtu) ParaView ir kitiems analizės įrankiams, o tinklelį – kaip 3MF su generatoriaus duomenimis. Ta pati detalė visada įrašo tuos pačius failus.
keywords: eksportas, duomenų lapas, json, pdf, vti, vtu, vtk, paraview, 3mf, laukas, pasirašytas atstumas, fea, cfd, metaduomenys, openvdb
from: 817b4579
---

{{ui:Inžinerija}} darbo srityje arba Generuoto kūno savybėse atidarykite **Duomenų eksportas**:

| Mygtukas | Failas | Skirta |
|---|---|---|
| Duomenų lapas (JSON) | `.json` | Kiekviena įvestis, kiekvienas skaičius su vienetu ir šaltiniu, patikros, tinklelio piršto atspaudas. Surikiuota, be laiko: ta pati detalė duoda tą patį failą. |
| Duomenų lapas (PDF) | `.pdf` | Tas pats popieriuje, per tiek puslapių, kiek reikia. |
| Laukas (.vti) | `.vti` | Detalė kaip pasirašytas atstumas (neigiamas viduje) ir vidaus kaukė taškų tinklelyje: VTK vaizdo failas ParaView ir įrankiams, sukurtiems su VTK. Jis sudaromas iš kūno paviršiaus generatoriaus įvesčių vokselio dydžiu, todėl užtrunka akimirką, o kūnas, didesnis nei 400 000 trikampių, per didelis puslapiui: tokiu atveju lauką įrašykite iš scenarijaus (`field_bake`). |
| Lygio rinkinys (.vdb) | `.vdb` | Tas pats laukas kaip OpenVDB lygio rinkinys: retas medis, kuriame saugoma tik siaura vokselių juosta aplink paviršių, skirtas įrankiams, kurie skaito OpenVDB (atvaizdavimo, simuliacijos ir 3D programoms). Vokselio dydis ir vienetai yra generatoriaus (milimetrai), siaura juosta yra aktyvioji dalis, vidus – neigiamas. Sudaromas iš paviršiaus kaip `.vti`, su ta pačia 400 000 trikampių riba; failas, didesnis nei 1.5 GB, atmetamas (naudokite didesnį vokselio dydį). Failas yra OpenVDB formato 224, nesuspaustas, išskyrus paties OpenVDB aktyviųjų reikšmių pakavimą, todėl jį atidaro bet kuris OpenVDB skaitytuvas. |
| Paviršius (.vtu) | `.vtu` | Trikampiai su kiekvieno plotu ir normale. |
| 3MF su generatoriaus duomenimis | `.3mf` | Tinklelis milimetrais pjaustymo programai, su generatoriumi, jo įvestimis ir (grafiniam gardeliui) jo sienelių intervalu kaip metaduomenimis faile. |

Niekas šiuose failuose nėra paimta iš laikrodžio ar kompiuterio, todėl du failus galima palyginti baitas po baito: pakeistas baitas reiškia pakeistą detalę.

## Dar neįgyvendinta

- `.vti` ar `.vdb` lauko, kurio vokselio dydis nesutampa su generatoriaus, sudarymas.
- `.vdb` failų skaitymas (įgyvendintas tik rašymas).
