---
title: Käytä PartCraft-sovellusta tekoälyavustajan kanssa
summary: Anna oman tekoälyavustajasi tai skriptisi työskennellä avoimen osan kanssa: lukea sen muotoelementit, parametrit ja massan, muuttaa parametria ja rakentaa osa uudelleen, ajaa skripti, viedä ja tallentaa. Pois päältä, kunnes käynnistät sen.
keywords: tekoäly, avustaja, agentti, mcp, model context protocol, skripti, automaatio, parametrit, massaominaisuudet, stl, step, 3mf, oikeudet, katkaise yhteys, toiminta, kansiot
from: e66d3470
---

## Mitä opit

Miten annat tekoälyavustajan (tai itse kirjoittamasi skriptin) tarkastella avoinna olevaa osaa, muuttaa sen parametreja, ajaa skriptin ja viedä osan, sekä miten päätät, mihin se saa koskea.

PartCraftissa ei ole omaa tekoälyä, eikä se lähetä mitään minnekään. Avustajan tuot itse: mikä tahansa ohjelma, joka osaa Model Context Protocol (MCP) -protokollaa. PartCraft antaa sille vain työkaluja, ja se, mitkä työkalut annetaan, valitaan asetuksissa.

## Ota käyttöön

1. Avaa {{ui:Asetukset}} (sovelluspalkin hammasratas tai {{key:Mod+,}}) ja siirry {{ui:PartCraft}}-välilehdelle.
2. Kohdassa {{ui:Avustajat}} rastita **Anna tekoälyavustajien ja skriptien käyttää PartCraft-sovellusta**. Se on pois päältä, kunnes teet niin.
3. Valitse, mitä se saa tehdä. **Lukeminen** on valittuna alussa; rastita muut vain silloin, kun tarvitset niitä.
4. Jos haluat antaa sen viedä ja tallentaa kansioon, valitse **Kansiot, joita se saa käyttää** -kohdasta {{ui:Lisää kansio…}} ja valitse kansio Studio-valintaikkunasta.

Avustajat yhdistyvät **CadCraft Studio** -sovelluksen kautta tietokoneellasi: Studio näyttää osoitteen ja tunnuksen, jotka liitetään avustajaan. Selainvälilehti ei voi avata yhteyttä avustajalle.

## Mitä avustaja voi pyytää

| Työkalu | Oikeus | Mitä se tekee |
|---|---|---|
| `part_describe`, `features_list` | Lukeminen | Muotoelementit järjestyksessä sekä se, mikä rakentui ja mikä epäonnistui, materiaali, kiintokappaleen tilavuus ja koko |
| `params_list` | Lukeminen | Parametrit ja jokainen luku, jota yhtälö voi ohjata, arvoineen |
| `mass_properties` | Lukeminen | Tilavuus, pinta-ala, painopiste ja sen ympäri oleva hitausmomentti; massa, kun osalla on materiaali |
| `param_set` | Muokkaus | Asettaa parametrin tai muotoelementin luvun ja rakentaa osan uudelleen. Yksi askel, jonka voi kumota |
| `script_run` | Muokkaus | Ajaa CraftScript-, Lua- tai Python-skriptin samoin kuin {{ui:Skripti}}-työtila: eristettynä, ilman tiedostoja ja verkkoa. Osa ei muutu |
| `part_export` | Vienti | STL, 3MF, STEP tai OpenUSD (.usdz, .usda, .usdc), samoin kuin {{ui:Tiedosto}} › {{ui:Vie}} ne kirjoittaa |
| `link_push` | Muokkaus | Päivittää toisesta ohjelmasta linkitetyn mallin (ks. [Pidä .3dm-malli elävänä](topic:live-3dm-link)) |
| `link_status` | Lukeminen | Kertoo, onko linkitetty malli yhä paikallaan ja milloin se päivittyi viimeksi |
| `part_save` | Tallennus | PartCraftin oma {{ui:Tallenna}} |
| `illustrate_export` | Vienti | Käsikirja työtilasta {{ui:Illustrate}} PDF- tai SVG-viivapiirroksina sen näkymistä, interaktiivisena 3D-tiedostona tai ohjeina PDF:nä tai verkkosivuna, samoin kuin työtilan {{ui:Vie}}- ja {{ui:Ohjeet}}-valikot ne kirjoittavat ([Käsikirjat](topic:illustrate)) |

:::note
Tämä versio käyttää verkkoydintä: tilavuudet lasketaan kolmioista (hieman alle todellisen kaarevan kiintokappaleen), ja STEP kirjoitetaan tahkoitettuna, kolmioilla eikä tarkoilla pinnoilla.
:::

## Hallinta pysyy sinulla

- **Jokainen muutos on yksi kumoamisaskel**, merkitty avustajalle, esimerkiksi "Avustaja: aseta l = 45". Paina {{key:Mod+Z}} kumotaksesi sen.
- **Tiedät, kun yhteys on muodostettu.** Sovelluspalkin painike nimeää avustajan, kun se on yhdistettynä. Napsauta sitä nähdäksesi, mitä se saa tehdä, tai katkaistaksesi yhteyden: **Katkaise yhteys**.
- **Toiminta.** {{ui:Asetukset}} › {{ui:PartCraft}} › {{ui:Avustajat}} › {{ui:Toiminta}} listaa jokaisen kutsun; {{ui:Tallenna loki}} tallentaa kopion.
- **Kansiot.** Se lukee ja kirjoittaa tiedostoja vain lisäämiisi kansioihin; {{ui:Poista}} palauttaa kansion heti.

## Ilman PartCraft-sovelluksen avaamista

CadCraft-tiedostopalvelin avustajille (`npx @getcadcraft/mcp`) ja `cadcraft`-komentorivi avaavat `.partcraft.json`-osat PartCraftin omalla koodilla ja verkkoydin, ilman ikkunaa: samat lukutyökalut, parametrien asettaminen, CraftScript-skriptit, viennit (myös OpenUSD) ja tallentaminen. `cadcraft convert bracket.partcraft.json bracket.stl` rakentaa osan ja kirjoittaa sen komentoriviltä. Käsikirjat (`.partcraft-manual.json`) viedään myös siellä: `illustrate_export`, tai `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (lisää `--instructions` ohjeille).

## Jos jokin ei toimi

- **"vaatii muokkausoikeuden":** rastita **Muokkaus** kohdassa {{ui:Avustajat}} ja pyydä uudelleen.
- **"ohjautuu yhtälöllä":** tämä luku seuraa yhtälöä; pyydä avustajaa asettamaan parametri sen sijaan.
- **Muutos oli väärä:** paina {{key:Mod+Z}}.

## Katso myös

- [Reseptit tekoälyavustajille](common:assistants-recipes): työesimerkkejä, joista kukin näyttää käytetyt työkalut.
