---
title: Tarkista tämä runko
summary: Ota hitsatun rakenteen teräsosat (kelkka, jalusta, putki- ja profiilikehikko), aseta laitteet jalkoihinsa ja tuet lattialle ja katso, kuinka suuri osa kustakin sauvasta ja hitsistä on käytössä standardin AISC 360-16 tai EN 1993 mukaan. Apuväline, kunnes insinööri on tarkastanut sen.
keywords: runko, hitsattu rakenne, kelkka, pumppukelkka, rakennesauva, hitsi, hitsit, tarkistus, AISC 360, EN 1993, käyttöaste, tuki, laite, kuorma, onttoprofiili, HSS, RHS, CHS, insinööri
from: 032e34ee
---

{{ui:Check this frame}} ottaa hitsatun rakenteen suorat terässauvat, rakentaa niistä kehikon, ratkaisee sen teräksen ja sille asetettujen laitteiden painon alla ja tarkistaa jokaisen sauvan ja jokaisen hitsin, jossa sauvat kohtaavat. Yksi ajo, yksi taulukko.

:::warning
Se on **apuväline, kunnes insinööri on tarkastanut sen**. Se ei ole hyväksyntä, eikä läpäisy ole suunnittelu. Se käyttää sauvojen keskiviivoja piirrettyinä, käsittelee jokaisen liitoksen hitsattuna koko poikkileikkauksen ympäriltä, ottaa kulmahitsin koon profiilin seinämästä (enintään 8 mm), ellei sitä aseteta, eikä tarkista pultteja, levyjä, pohjalevyjä, ankkureita, pinnepainetta, lohkoleikkausta, väsymystä eikä nostoa.
:::

## Aja se

1. Piirrä sauvat {{ui:Structural member}}-työkalulla (poikkileikkaukset tulevat profiilitaulukosta).
2. Avaa {{ui:Views}} › {{ui:Check this frame}}. Kerro, missä runko seisoo (**tuki** kussakin jalassa: nivelellinen, jäykkä tai rulla; {{ui:Pinned supports at the feet}} asettaa yhden jokaiseen alimman sauvan päähän) ja mitä sen päällä on (**laite**: massa, painopiste, pisteet, joihin se pultataan kiinni, ja valinnainen vaakasuuntainen työntövoima).
3. Valitse normi: **ASCE 7 + AISC 360-16** tai **EN 1990 + EN 1993**. Aseta teräslaatu ja AISCille hitsiaineen lujuus (482,6 MPa on E70).
4. Paina {{ui:Check}}. {{ui:Save the report as CSV}} kirjoittaa kaikki taulukot; niiden ensimmäisellä rivillä kerrotaan, ettei tarkistusta ole vielä katsottu läpi.

Kehikko luetaan millimetreinä, osan pystyakseli ylöspäin. Tuki- ja laitepisteet kirjoitetaan muodossa x y z samassa koordinaatistossa, jossa z on korkeus.

Sauvan pää, joka osuu toisen sauvan keskikohtaan, jakaa sen siinä, samoin kuin jalka tai pultituspiste sauvan linjalla. Paino jaetaan pultituspisteiden kesken jäykkänä kappaleena; painopiste jalkojen ulkopuolella tai nostovoima jalassa mainitaan, eikä sitä piiloteta.

## Mitä saat

- Eniten käytetty kohde ja se, onko jokin pettämässä. Kohteet, joita tarkistus ei pysty arvioimaan (poikkileikkaus, jota ei ole taulukossa, tai teräs, jolle normissa ei ole kerrointa), lasketaan ja nimetään, eivät läpäisseiksi.
- Yksi rivi per sauva ja hitsiryhmä: kuinka paljon kukin on käytössä, hallitseva tarkistus ja lauseke sekä kuormitusyhdistelmä, joka hallitsi.
- Samat taulukot raportissa.

## Mitä tarkistetaan

Onttoprofiilit (RHS, SHS, CHS, putki) ja I-profiilit vedolle, puristukselle, taivutukselle, leikkaukselle ja niiden yhteisvaikutukselle; kulmahitsit ja täysin läpihitsatut hitsit elastisella vektorimenetelmällä. Kompaktit seinämät vain taivutukselle ja vain onttoprofiileille; ohuet seinämät mainitaan tarkistamattomina. Osa vakioista on kirjoitettu standardeista eikä niitä ole vielä verrattu painettuun kopioon; raportti luettelee jokaisen lähteen.

Katso [Kehikot teräsprofiileista](topic:structural-members) sauvojen piirtämisestä ja leikkuulistasta.
