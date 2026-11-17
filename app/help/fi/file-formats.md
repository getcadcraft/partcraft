---
title: Tiedostomuodot
summary: Jokainen tiedosto, jonka PartCraft lukee ja kirjoittaa, pääte, yksiköt ja akselit sekä mitä kukin säilyttää tai menettää.
keywords: muodot, tiedostotyypit, päätteet, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, verkko, step, stp, ap242, dxf, r12, pdf, gltf, iges, yksiköt, Z ylös
from: 4d0ecbee
---

| Muoto | Pääte | Avaa | Tallenna tai vie | Yksiköt | Ylösakseli | Säilyttää |
|---|---|---|---|---|---|---|
| PartCraft-osa | `.partcraft.json` | Kyllä | {{ui:Tallenna}} | mm | Y | Koko historia: luonnokset, relaatiot, mitat, muotoelementit, poistamiset käytöstä, kelaus, kaarevuusasetus, piirustuksen asetukset ja GD&T, aiemmalla versiolla tuotu STEP-teksti |
| PartCraft-kokoonpano | `.partcraft-asm.json` | Kyllä | {{ui:Tallenna}} kokoonpanossa | mm | Y | Jokainen osa (upotettuna), kopiot ja niiden sijainnit, liitokset |
| STL (binääri tai teksti) | `.stl` | Kyllä, kiintokappaleena: [Avaa STL, OBJ tai 3MF](topic:open-meshes) | {{ui:STL 3D-tulostukseen}} | mm (kysytään avattaessa) | Z | Vain kiintokappaleen kolmiot |
| 3MF | `.3mf` | Kyllä, kiintokappaleena | {{ui:3MF 3D-tulostukseen}} | mm (ilmoitettu tiedostossa) | Z | Kiintokappale yhtenä verkkokohteena |
| OBJ | `.obj` | Kyllä, kiintokappaleena (vain pinnat) | Ei | kysytään avattaessa | Z tai Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Kyllä, kiintokappaleena luettuna kolmioina (kaarevat pinnat piirretään facetteina; tiedoston tasaiset pinnat, sylinterit, kartiot, pallot ja toruksit säilytetään tarkkaa vientiä varten): [Avaa STEP-tiedosto](topic:import-step) | | mm (tiedoston yksiköstä) | Z, tai Y jos niin ilmoitat | Kiintokappaleet ja pintakappaleet, kokoonpanot kaikkine osineen paikoillaan; ei värejä, nimiä, kokoonpanopuuta tai PMI-tietoja |
| `.3dm` | `.3dm` | Kyllä, yhtenä kiintokappaleena sen verkoista ja pinnoista (tallennetut renderoinnin verkot, muuten tesselloitu): [Avaa .3dm-malli](topic:open-3dm-files) | | Tiedoston yksiköstä | Z, tai Y jos niin ilmoitat | Verkot, monipinnat, pursotukset ja lohkojen sijoitukset yhtenä kappaleena; ei käyriä, värejä, tasoja tai nimiä |
| STEP AP242, tarkka | `.step` | | {{ui:STEP AP242 (tarkka kiintokappale)}} | mm | Z | Yksi tarkka kiintokappale: tasaiset pinnat, sylinterit, kartiot, pallot ja toruksit todellisilla pinnoillaan, todelliset ympyrät ja viivat reunoina; splinen sivut, mallinnetut kierteet, verkkotiedostoista tehdyt kappaleet ja STEP-tiedoston splinepinnat pysyvät facetteina. STEP, jota käytetään muissa CAD- ja CAM-ohjelmissa |
| STEP AP214, tarkka | `.step` | | {{ui:STEP AP214 (tarkka kiintokappale)}} | mm | Z | Sama tarkka kiintokappale vanhemmassa AP214-skeemassa, ohjelmille jotka lukevat vain sitä |
| STEP AP242, facetoitu | `.step` | | {{ui:STEP (tahkoitettu, verkkoydin)}} | mm | Y | Suljettu kiintokappale tasaisista pinnoista: pyöreät pinnat facetteina. Ohjelmalle, joka hylkää tarkan tiedoston |
| STEP AP214, facetoitu | `.step` | | {{ui:STEP AP214 (tahkoitettu, verkkoydin)}} | mm | Y | Sama kiintokappale vanhemmassa AP214-skeemassa, ohjelmille jotka lukevat vain sitä |
| USD-paketti | `.usdz` | Ei | {{ui:USD-paketti (.usdz)}} | m | Z | Kiintokappale materiaalinsa, tilavuutensa ja massansa kanssa; kokoonpano, jossa jokainen osa kerran ja jokainen kopio sijoitettuna: [Vie USD-muodossa](topic:usd) |
| IFC 4 | `.ifc` | Ei | {{ui:IFC 4 (kaikilla ominaisuuksilla)}} | mm | Z | Muoto kolmioina, materiaali, jokainen parametri, piirustusotsikko, määrät; kokoonpanon osat tyyppeinä ja kopiot sijoitettuina |
| DXF R12, luonnos | `.dxf` | Ei | {{ui:DXF luonnoksesta tai tasaisesta pinnasta}} kun luonnos on valittuna | mm | Luonnoksen oma x, y | Viivat, todelliset kaaret ja ympyrät, pisteet; tasot PROFILE, CONSTRUCTION, POINTS |
| DXF R12, pinta | `.dxf` | Ei | {{ui:DXF luonnoksesta tai tasaisesta pinnasta}} kun tasainen pinta on valittu | mm | Pinnan oma x, y | Pinnan ääriviivat: pyöreät reiät todellisina ympyröinä, muu suljettuina polyviivoina (pyöreät reunat facetteina) |
| PDF-piirustus | `.pdf` | Ei | {{ui:Piirustus (PDF): näkymät, leikkaus, yksityiskohta, GD&T}} | mm A3-arkilla | | Edestä, päältä, oikealta, isometrinen, leikkaus- ja yksityiskohtanäkymät piirrettyinä facetteista, piiloviivat, kokonaismitat, GD&T-merkit, piirustusotsikko |

## PartCraft-tiedostot

Molemmat ovat tavallista tekstiä (JSON). Kiintokappaletta ei koskaan tallenneta: PartCraft rakentaa sen uudelleen historiasta, joten tiedostot pysyvät pieninä ja vastaavat aina historiaa.

- Jokaisella tiedostolla on versionumero. Tämä versio kirjoittaa osatiedoston pienimmällä versiolla, joka pitää sisällään sen, mitä se käyttää (2–5; verkosta tehty kappale vaatii 5), ja avaa jokaisen vanhemman version. Uudemman PartCraftin tiedosto hylätään viestillä, joka nimeää molemmat versiot.
- Jokainen arvo tarkistetaan, kun tiedosto avataan. Nimistä poistetaan ohjausmerkit; lukuja, jotka ovat alueen ulkopuolella, puuttuvia muotoelementtiviittauksia ja tuntemattomia muotoelementtityyppejä ei hyväksytä, ja ne kerrotaan selkeällä syyllä.
- Älä muokkaa näitä tiedostoja käsin, ellet tunne muotoa. Tiedosto, joka ei läpäise tarkistuksia, ei avaudu.
- Osa, jossa on suuri STEP-kiintokappale, joka on tuotu aiemmalla versiolla, voi ylittää 50 MB:n, joka on suurin osatiedosto, jonka PartCraft avaa (katso [Vianmääritys](topic:troubleshooting#file-problems)).

## Facetit ja tarkkuus

STL ja 3MF koostuvat aina facetteista **Kaarevuus**-asetuksen mukaan, ja samoin pinnan DXF lukuun ottamatta pyöreitä reikiä, jotka ovat todellisia ympyröitä. Luonnoksen DXF sisältää todelliset kaaret ja ympyrät, koska se tulee suoraan luonnoksesta. Tämä versio rakentaa jokaisen osan verkkoytimellä, joten piirustuksen näkymät (leikkaukset mukaan lukien) ovat myös facetoituja. Tarkka STEP-vienti on poikkeus: ydin tuntee jokaisen pinnan todellisen muodon luonnoksesta (tai STEP-tiedostosta, josta kappale avattiin), joten pyöreät pinnat kirjoitetaan todellisina sylintereinä, kartioina, palloina ja toruksina riippumatta **Kaarevuus**-asetuksesta (katso [Vienti tulostukseen, STEP ja DXF](topic:export-files#muihin-cad-ohjelmiin-step)).

## Ei tuettu tässä versiossa

| Muoto | Tila |
|---|---|
| glTF, IGES, Parasolid, ACIS (sisään tai ulos); OBJ-vienti | Ei vielä toteutettu |
| DWG | Kirjoittaa vain [muunnospaketti](topic:variant-pack), piirustusarkkina kustakin konfiguraatiosta. Ei lueta, eikä muuta vientiä. Vie DXF; jokainen CAD-ohjelma avaa R12 DXF:n |
| Kokoonpanon STEP ja kokoonpanon piirustus | Ei vielä toteutettu. Vie jokainen osa tarkkana STEP-tiedostona; STL, 3MF ja osaluettelo viedään kokoonpanosta |
| Muiden ohjelmien omat osa- ja kokoonpanotiedostot (paitsi `.3dm`, joka avautuu yhtenä kappaleena) | Ei vielä toteutettu |

Katso [Ei vielä toteutettu](topic:not-built-yet).
