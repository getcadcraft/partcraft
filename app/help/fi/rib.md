---
title: Ripat ja vahvikkeet
summary: Jäykistä osa ripalla, joka piirretään yhtenä viivana. Se täyttää viivan ja seinien välin määritellyn paksuuden verran luonnostason poikki valitsemallasi puolella.
keywords: ripa, vahvike, väliseinä, tuki, jäykiste, kiinnike, kulmatuki, ohut seinä, vahvistaa
from: 5c218881
---

:::note
**Ei vielä toteutettu tässä versiossa.** Ripa tarvitsee tarkan geometriaytimen, jota tässä PartCraftin versiossa ei ole: se rakentaa jokaisen osan verkkoytimellä. [Mitä ei vielä ole toteutettu](topic:not-built-yet) kertoo, mitä tehdä sen sijaan. Loppu tästä sivusta kuvaa, miten se toimii tarkan ytimen kanssa.
:::

**Ripa** (tai vahvike) on ohut seinä, joka jäykistää osaa, kuten kolmio L-kiinnikkeen nurkan sisällä. Piirrät vain sen vapaan reunan: PartCraft täyttää välin tuon viivan ja seinien välillä. Se tarvitsee **tarkan ytimen** (katso [Verkkoydin](topic:solid-kernels)).

## Lisää ripa

1. Tee taso keskelle kohtaa, johon ripa tulee (L-kiinnikkeelle, jonka syvyys on 40, taso 20 luonnoksen edessä: katso [Viitetasot, akselit ja pisteet](topic:reference-geometry)).
2. Luonnostele sille **yksi viiva** seinältä seinälle, tai muutama viiva päästä päähän taivutettua ripaa varten. Viiva saa päättyä lyhyeksi seinistä: sen päitä jatketaan, kunnes ne kohtaavat seinät.
3. Valitse luonnos ja valitse {{ui:Lisää}} › {{ui:Ripa}}.

Ripa täyttää viivasta seiniin sillä puolella, joka on kohti osan keskustaa, joten vahvike asettuu sisänurkkaan. Jos se puoli on auki ja toinen suljettu, PartCraft kääntää sen puolestasi ja kertoo siitä.

## Asetukset

- **Paksuus (mm)** on ripan paksuus luonnostason poikki. Sitä voi ohjata parametrilla.
- **Paksuus** (sen alla oleva valinta): **Keskitetty luonnostasoon**, **Tason edessä** (normaalia pitkin) tai **Tason takana**.
- **Käännä** täyttää viivan toisen puolen.

## Viestit

- **Tällä puolella ripan reuna ei koskaan kohtaa kappaletta**: tällä puolella ei sulkeudu mikään. Valitse tai poista valinta kohdasta **Käännä**, tai siirrä viivaa niin, että seinät rajaavat sen.
- **Ripa tarvitsee yhden avoimen viivaketjun luonnokseensa**: luonnoksessa on suljettu muoto, kaari tai spline, tai viivat, jotka eivät liity päästä päähän.
- **Ripan reuna kulkee kappaleen sisällä siinä kohdassa**: viiva on kiinteän kappaleen sisällä. Piirrä se seinien väliseen avoimeen tilaan.
