---
title: Tarkista vetokulma muottia ja valua varten
summary: Väritä osa sen vetokulman mukaan suhteessa muotin irrotussuuntaan, katso mitkä pinnat irtoavat, mitkä tarvitsevat lisää vetoa ja mitkä irtoavat muottipuolikkaasta, ja jokaisen osuus pinta-alasta.
keywords: vetokulma-analyysi, vetokulma, kartiomaisuus, muotti, valumuotti, painevalu, ruiskuvalu, vetosuunta, jakolinja, alileikkaus, irrotus, tarkista vetokulma
from: 6a106f83
---

Muotissa, valukappaleessa tai hiekkavalussa valmistetut osat tarvitsevat **vetokulman**: seinät on kallistettu hieman, jotta osa liukuu ulos. **Vetokulma-analyysi** värittää jokaisen pinnan sen mukaan, kuinka paljon se kallistuu pois suunnasta, johon muotti aukeaa (**vetosuunta**).

## Käynnistä

1. Avaa Suunnittelutyötilassa {{ui:Näkymät}} ja valitse {{ui:Vetokulma-analyysi}}.
2. Aseta **Vetosuunta**: suunta, johon muotti aukeaa, X-, Y- tai Z-akselilla kumpaan tahansa suuntaan, tai **Kohtisuoraan valittua pintaa vastaan**: paina {{ui:Valitse pinta}} ja napsauta osan tasaista pintaa.
3. Aseta **Vähimmäisvetokulma** asteina: pienin kallistus, jota prosessisi tarvitsee (usein 1° – 3°).

Osa värjätään seuraavasti:

| Väri | Merkitsee |
|---|---|
| Vihreä: **Positiivinen vetokulma** | Kallistettu vetosuuntaan vähintään vähimmäisarvon verran: irtoaa tästä muottipuolikkaasta |
| Okra: **Tarvitsee vetokulmaa** | Vähimmäisarvon sisällä kumpaan suuntaan tahansa, kuten pystysuora seinä: lisää vetokulmaa tähän |
| Punainen: **Negatiivinen vetokulma** | Kallistettu vetosuunnasta poispäin vähintään vähimmäisarvon verran: irtoaa toisesta muottipuolikkaasta, tai on alileikkaus, jos osan pitää irrota yhdestä puolikkaasta |

Jokaisen luokan osuus osan pinta-alasta näkyy sen vieressä. **Käännä vetosuunta** katsoo muotin toiselta puolelta: vihreä ja punainen vaihtavat paikkaa.

Kaarevat pinnat arvioidaan pisteittäin, joten vetosuunnan poikki asettuva sylinteri näyttää vyöhykkeen, joka tarvitsee vetokulmaa sen sivuilla.

Värit seuraavat osaa, kun muutat sitä. {{key:Esc}} tai {{ui:Sulje}} kytkee analyysin pois; mitään ei tallenneta osaan.

:::tip
Lisätäksesi vetokulmaa käytä okran värisiin pintoihin ominaisuutta {{ui:Vetokulma}} (katso [Pyyhkäisy, loft ja vetokulma](topic:sweep-loft-draft)), ja tarkista sitten uudelleen.
:::
