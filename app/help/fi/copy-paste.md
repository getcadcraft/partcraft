---
title: Kopioi, liitä ja monista
summary: Kopioi luonnosgeometriaa, muotoelementtejä ja kokoonpanon osia; liitä siihen, mihin napsautat, tai samaan paikkaan; monista yhdellä vaiheella; ja mitä kopion mukana tulee ja mitä ei.
keywords: kopioi, liitä, leikkaa, monista, leikepöytä, liitä samaan paikkaan, valitse kaikki, poista valinta, poista, ctrl c, ctrl v, ctrl d, instanssi, komponentti, kopioi luonnos, kopioi muotoelementti, kopioi osa
from: 611307d7
---

{{ui:Muokkaa}}-ryhmä työkalurivillä sisältää {{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}}, {{ui:Liitä}} ja {{ui:Lisää}}-valikon, jossa ovat {{ui:Leikkaa}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Liitä samaan paikkaan}}, {{ui:Monista}}, {{ui:Poista}}, {{ui:Valitse kaikki}} ja {{ui:Poista valinta}}, kukin näppäimineen. Se, mitä ne kopioivat, riippuu siitä, missä olet: geometria avoimessa luonnoksessa, muotoelementti historiassa tai osa kokoonpanossa.

Harmaana oleva kohta ei voi toimia juuri nyt. Vie osoitin sen päälle: ohjeteksti kertoo syyn, esimerkiksi ”Valitse ensin luonnosgeometria” tai ”Leikepöydällä on Sketch2 ja Extrude2: muotoelementit liitetään historiaan, joten poistu ensin luonnoksesta”.

| Toiminto | Näppäin | Luonnoksessa | Historiassa | Kokoonpanossa |
|---|---|---|---|---|
| Kopioi | {{key:Mod+C}} | Valitut pisteet ja käyrät | Valittu luonnos, pursotus, kierto tai reikä (luonnoksensa kanssa) | Valittu osa |
| Leikkaa | {{key:Mod+X}} | Kopioi, sitten poista ne | Kopioi, sitten poista muotoelementti | Kopioi, sitten poista osa |
| Liitä | {{key:Mod+V}} | Kopio seuraa osoitinta; napsauta, mihin se menee | Lisää kopion historian loppuun | Uusi kopio muiden osien viereen |
| Liitä samaan paikkaan | {{key:Mod+Shift+V}} | Samoihin koordinaatteihin | Sama kuin Liitä | Samaan paikkaan kuin kopioitu osa |
| Monista | {{key:Mod+D}} | Kopioi ja siirrä yhdellä kertaa; leikepöytä jää koskematta | Toinen kopio heti sen jälkeen | Toinen kopio muiden osien viereen |
| Poista | {{key:Delete}} | Valinta | Muotoelementti (kysyy, jos muut käyttävät sitä) | Osa tai nivel |
| Valitse kaikki | {{key:Mod+A}} | Kaikki luonnoksessa | Ei saatavilla | Ei saatavilla |
| Poista valinta | {{key:Esc}} | Tyhjentää valinnan | Tyhjentää valinnan ja poiminnat | Tyhjentää valinnan |

Jokainen liittäminen, monistaminen ja leikkaus on yksi vaihe kumoamisluettelossa: {{key:Mod+Z}} kumoaa sen, {{key:Mod+Y}} tekee sen uudelleen.

## Luonnoksessa

1. Valitse, mitä kopioit: klikkaa sitä, {{key:Shift}}+klikkaus lisää, vedä ikkuna tai paina {{key:Mod+A}} kaikelle.
2. Paina {{key:Mod+C}} tai valitse {{ui:Kopioi}}. Tilarivi kertoo, mitä kopioitiin.
3. Paina {{key:Mod+V}} tai valitse {{ui:Liitä}}. Katkoviivainen kopio seuraa osoitinta, pidettynä keskeltään. Se tarttuu pisteisiin: aseta kopioidun ympyrän keskipiste pisteen päälle klikkaamalla sitä pistettä.
4. Klikkaa, mihin se menee. Liitetty geometria pysyy valittuna, joten voit vetää sitä tai lisätä siihen relaatioita heti. {{key:Esc}} peruuttaa liittämisen.

Mukana tulee:

- Kopioitu viiva, ympyrä tai kaari tuo mukanaan omat päätepisteensä ja keskipisteensä.
- Relaatiot ja mitat **kopioitujen kohteiden välillä** tulevat mukaan: kopioitu suorakulmio on yhä suorakulmio, samoilla mitoilla.
- Relaatiot **kopioimattomaan geometriaan** ja origoon jätetään pois. Tilarivi laskee ne: ”2 relaatiota kopion ulkopuoliseen geometriaan ei tule mukaan”. Liitetty kopio on siis vapaa liikkumaan, kunnes kiinnität sen relaatioilla tai mitoilla.
- Kiinteä piste pysyy kiinteänä uudessa paikassaan.

{{ui:Liitä samaan paikkaan}} asettaa kopion täsmälleen alkuperäisen koordinaatteihin, tässä luonnoksessa tai toisessa: hyödyllinen profiilin tuomiseen yhdestä luonnoksesta toiseen. Samassa luonnoksessa kopio on alkuperäisen päällä; vedä se pois.

{{ui:Monista}} ({{key:Mod+D}}) kopioi valinnan ja aloittaa sen sijoittamisen heti, koskematta leikepöydällä olevaan.

:::tip
Toistaaksesi reikäkeskipisteen tai uran useita kertoja, kopioi se kerran ja liitä useita kertoja: jokainen {{key:Mod+V}} aloittaa uuden kopion, joka seuraa osoitinta.
:::

## Historiassa

1. Klikkaa luonnosta, pursotusta, kiertoa tai reikää historiassa.
2. {{key:Mod+C}} kopioi sen. Luonnospohjainen muotoelementti kopioidaan yhdessä luonnoksensa kanssa.
3. {{key:Mod+V}} lisää kopion historian loppuun (kelauspalkin kohdalle, kun olet kelannut taaksepäin), uusilla nimillä kuten Sketch3 ja Extrude2.

Kopio on samalla tasolla tai pinnalla kuin alkuperäinen, joten se rakentuu sen päälle ja osa näyttää samalta. Valitse uusi luonnos ja muuta sen tasoa oikeasta paneelista, tai avaa se ja vedä tai mitoita profiili uudelleen, siirtääksesi kopion.

- Liitä **toiseen osaan**: avaa se osa ja paina {{key:Mod+V}}. Jos kopion luonnos oli pinnalla, jota tuo osa ei ole, se menee etutasolle, ja tilarivi kertoo siitä.
- {{ui:Monista}} tekee kopioinnin ja liittämisen yhdessä vaiheessa saman osan sisällä.
- {{ui:Leikkaa}} kopioi muotoelementin ja poistaa sen sitten (kysyen ensin, jos muut muotoelementit käyttävät sitä).

Toistot, peilaukset, pyöristykset, viisteet, kuoret ja tuodut kiintokappaleet eivät ole kopioitavissa: ne roikkuvat reunoilla, pinnoilla tai muotoelementeillä, jotka on valittu tässä osassa. Kopioi sen sijaan luonnos tai muotoelementti, jonka päälle ne on rakennettu, tai toista se {{ui:Lineaarinen}}- tai {{ui:Pyöreä}}-työkalulla.

## Kokoonpanossa

1. Klikkaa osaa näkymässä tai vasemmalla olevassa luettelossa.
2. Valitse {{ui:Monista}} ({{key:Mod+D}}), tai {{key:Mod+C}} ja sitten {{key:Mod+V}}.

Uusi kopio on **sama osa**: muokkaa yhtä, ja jokainen kopio muuttuu. Se ilmestyy 20 mm oikealle kaikesta kokoonpanossa jo olevasta, kääntyneenä kuten kopioitu, ja pysyy siinä, kunnes nivel sijoittaa sen. {{ui:Liitä samaan paikkaan}} ({{key:Mod+Shift+V}}) asettaa sen täsmälleen sinne, missä kopioitu osa on. Liitä nivel siirtääksesi sitä (liukunivelen siirtymä työntää sitä pitkin).

Toisesta kokoonpanosta kopioidun osan liittäminen tuo osan mukanaan, samoin kuin {{ui:Lisää}} sen tiedostosta. {{ui:Lisää kopio}} Kokoonpano-ryhmässä tekee saman kuin {{ui:Monista}}, ja toimii myös, kun mitään ei ole valittu (se kopioi viimeisen osan).

## Leikepöytä

- Se on PartCraftin oma leikepöytä, ei tietokoneen: et voi liittää PartCraft-geometriaa toiseen ohjelmaan tai tekstiä PartCraftin näkymiin.
- Se säilyy tässä selaimessa, joten toinen PartCraft-välilehti voi liittää kopioimasi. Se luetaan takaisin ja tarkistetaan kuten avattu tiedosto; vioittunut tai toisesta versiosta peräisin oleva kieltäydytään.
- Suuri tuotu STEP-tiedosto sisältävä osa voi olla liian suuri selaimen säilytettäväksi: se liitetään silloin vain tähän välilehteen.
- Numerokentässä tai ohjehaussa {{key:Mod+C}} ja {{key:Mod+V}} kopioivat ja liittävät tekstiä kuten tavallisesti.

Piirustusarkilla kopiointi ja liittäminen eivät ole vielä käytettävissä; {{ui:Poista}} ja {{ui:Poista valinta}} toimivat valitulle symbolille. Katso [Ei vielä toteutettu](topic:not-built-yet).
