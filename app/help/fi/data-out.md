---
title: Tietojen vienti: tietolomake, kentät ja verkot
summary: Tallenna generoidun kappaleen tietolomake JSON- tai PDF-muodossa, sen kenttä VTK-kuvana (.vti) tai OpenVDB-tasojoukkona (.vdb) ja sen pinta VTK-verkkona (.vtu) ParaViewille ja muille analyysityökaluille sekä verkko 3MF-tiedostona, joka sisältää generaattorin tiedot. Sama osa kirjoittaa aina samat tiedostot.
keywords: vienti, tietolomake, json, pdf, vti, vtu, vtk, paraview, 3mf, kenttä, etäisyysfunktio, fea, cfd, metatiedot, openvdb
from: 817b4579
---

{{ui:Mitoitus}}-työtilassa tai generoidun kappaleen ominaisuuksissa avaa **Tietojen vienti**:

| Painike | Tiedosto | Käyttötarkoitus |
|---|---|---|
| Tietolomake (JSON) | `.json` | Jokainen syöte, jokainen luku yksikköineen ja lähteineen, tarkistukset, verkon sormenjälki. Lajiteltu, ei aikoja: sama osa antaa saman tiedoston. |
| Tietolomake (PDF) | `.pdf` | Sama paperilla, niin monelle sivulle kuin tarvitaan. |
| Kenttä (.vti) | `.vti` | Osa etäisyysfunktiona (negatiivinen sisällä) ja sisäpuolen maskina pistehilassa: VTK-kuvatiedosto ParaViewille ja VTK:hon perustuville työkaluille. Se rakennetaan kappaleen pinnasta generaattorin syötteiden vokselikoossa, joten se vie hetken, ja yli 400 000 kolmion kappale on liian suuri sivulle: tallenna kenttä sen sijaan skriptistä (`field_bake`). |
| Tasojoukko (.vdb) | `.vdb` | Sama kenttä OpenVDB-tasojoukkona: harva puu, joka säilyttää vain pinnan ympärillä olevan ohuen vokselikaistan, OpenVDB:tä lukeville työkaluille (renderöijät, simulointi- ja 3D-ohjelmat). Vokselikoko ja yksiköt ovat generaattorin (millimetrit), kapea kaista on aktiivinen osa, sisäpuoli on negatiivinen. Rakennetaan pinnasta kuten `.vti`, samalla 400 000 kolmion rajalla; tiedosto, joka olisi yli 1.5 GB, hylätään (käytä suurempaa vokselikokoa). Tiedosto on OpenVDB-muoto 224, pakkaamaton lukuun ottamatta OpenVDB:n omaa aktiivisten arvojen pakkausta, joten mikä tahansa OpenVDB-lukija avaa sen. |
| Pinta (.vtu) | `.vtu` | Kolmiot, kunkin pinta-alan ja normaalin kanssa. |
| 3MF generaattoritiedoilla | `.3mf` | Verkko millimetreinä viipalointiohjelmalle, ja tiedostossa metatietoina generaattori, sen syötteet sekä (liukuvalle hilalle) sen seinämäalue. |

Mikään näissä tiedostoissa ei tule kellosta tai koneesta, joten kaksi tiedostoa voi verrata tavu tavulta: muuttunut tavu tarkoittaa muuttunutta osaa.

## Ei vielä toteutettu

- `.vti`- tai `.vdb`-tiedosto kentästä muulla vokselikoolla kuin generaattorin omalla.
- `.vdb`-tiedostojen lukeminen sisään (toteutettu vain kirjoitus).
