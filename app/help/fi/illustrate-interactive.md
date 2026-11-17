---
title: Interaktiivinen 3D-tiedosto
summary: Vie ohje yhtenä HTML-tiedostona, joka aukeaa offline missä tahansa selaimessa ilman asennusta, tiliä tai seurantaa: malli, näkymät, osaluettelo (linkitetty molempiin suuntiin), animaatio ja suurennuslasi.
keywords: havainnollista, interaktiivinen, 3D-tiedosto, html, offline, katselin, jakaminen, asiakas, tuotantolattia
from: 4de4e074
---

Valitse {{ui:Vie}}, sitten {{ui:Muodossa}} {{ui:Interaktiivinen 3D-tiedosto (HTML, aukeaa offline)}}: tallentuu yksi `.html`-tiedosto. Lähetä se sähköpostilla, siirrä USB-muistitikulle tai jaettuun kansioon: se aukeaa missä tahansa selaimessa, joka tukee WebGL 2:ta, tietokoneella, tabletilla tai puhelimella.

Tiedostossa:

- Vetämällä käännät mallia, oikealla painikkeella vetämällä tai {{key:Shift}}+vetämällä panoroit, rullalla tai nipistämällä zoomaat.
- Valitse näkymä luettelosta: kamera siirtyy sinne, ja osat ottavat näkymän paikat, ulkoasun, leikkauksen ja suurennuslasin.
- Valitse osaluettelon rivi, niin sen osat korostuvat; valitse osa, niin sen rivi korostuu.
- Kun ohjeessa on animaatio, mallin alla oleva palkki toistaa sen, pysäyttää sen ja selaa sitä.

Tiedosto sisältää kaiken tarvitsemansa (mallin, katselimen ja three.js:n MIT-lisenssin alaisena) ja estää kaikki pyynnöt: se ei voi yhdistää internetiin, siinä ei ole tiliä eikä seurantaa.

Interaktiivista 3D-sisältöä PDF-tiedostossa ei tarjota: selaimet ja useimmat PDF-lukijat eivät näytä sitä, ja lukija, joka näyttää, pitää sen oletuksena pois päältä. HTML-tiedosto on interaktiivinen ratkaisu.
