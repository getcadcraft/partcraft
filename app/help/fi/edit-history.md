---
title: Muuta osaa sen historian kautta
summary: Muokkaa muotoelementtejä ja luonnoksia jälkikäteen, poista käytöstä, kelaa taaksepäin, lisää elementtejä aiemmin, järjestä uudelleen, nimeä uudelleen ja poista, ja kumoa mitä tahansa näistä.
keywords: historia, muotoelementtipuu, suunnittelupuu, muokkaa muotoelementtiä, muokkaa luonnosta, poista käytöstä, ota käyttöön, kelaus taaksepäin, kelaa taaksepäin, kelaa eteenpäin, järjestä uudelleen, siirrä muotoelementti, poista, nimeä uudelleen, kumoa, tee uudelleen, rakenna uudelleen, laske uudelleen, isä ja lapsi, suuri osa, monta muotoelementtiä, hidas uudelleenrakennus, 750 muotoelementtiä
from: 6f75aef4
---

PartCraft-osa on sen historia: vasemmalla oleva luettelo tasoista, luonnoksista ja muotoelementeistä. PartCraft rakentaa kiintokappaleen uudelleen tämän luettelon yläosasta aina, kun jokin muuttuu. Luvun muuttaminen luettelon alkupäässä muuttaa kaikkea sen päälle rakennettua.

## Muokkaa muotoelementtiä

1. Napsauta muotoelementtiä historiassa (tai sen alla sisennettyä luonnosta).
2. Muuta sen asetuksia oikeassa paneelissa. Jokainen muutos rakennetaan heti uudelleen.

Ei ole OK- eikä Peruuta-painiketta: jokainen muutos otetaan käyttöön. Jos et pidä muutoksesta, paina {{key:Mod+Z}}.

## Muuta, mitä särmiä tai pintoja pyöristys, viiste tai kuori käyttää

Kaksoisnapsauta muotoelementtiä historiassa, tai valitse se ja valitse {{ui:Valitse särmät}} (tai {{ui:Valitse pinnat}}). Napsauta särmiä tai pintoja lisätäksesi tai poistaaksesi niitä, ja valitse sitten {{ui:Valmis}} tai {{key:Esc}}. Katso [Pyöristys, viiste ja onttous](topic:fillet-chamfer-shell).

## Muokkaa luonnosta

1. Kaksoisnapsauta luonnosta historiassa, tai valitse se ja valitse oikeasta paneelista {{ui:Muokkaa luonnosta}} (tai työkalurivillä {{ui:Luonnos}}).
2. Osa palaa siihen tilaan, jossa se oli, kun luonnos tehtiin: sen jälkeiset muotoelementit piilotetaan muokkauksen ajaksi.
3. Muuta geometriaa, suhteita tai mittoja.
4. Sulje luonnos. Koko osa rakennetaan uudelleen muutoksen mukaisesti.

Pelkän koon muuttamiseen luonnosta ei tarvitse avata. Valitse muotoelementti tai luonnos ja muuta lukua kohdassa **Luonnoksen mitoitus** (tai **Ohjaavat mitat**) oikeassa paneelissa. Katso [Muuta kokoja avaamatta luonnosta](topic:change-sizes).

## Kun muotoelementti epäonnistuu

Jos muutos tekee muotoelementistä mahdottoman, PartCraft rakentaa kaiken muun ja merkitsee ongelman:

- muotoelementissä näkyy historiassa **⚠ virhe**, ja sen viesti on oikean paneelin yläosassa (voit myös viedä hiiren rivin päälle lukeaksesi sen);
- muotoelementit, jotka tarvitsevat sitä, näyttävät **⚠ ei rakennettu** -merkinnän ja tekstin ”Vaatii Extrude2-muotoelementin, joka epäonnistuu.”;
- tilarivin merkki sanoo ”1 muotoelementti epäonnistuu”.

Korjaa syy (tai kumoa muutos), jolloin osa rakentuu taas. Yleiset viestit ja niiden korjaustoimet ovat kohdassa [Vianmääritys](topic:troubleshooting).

## Poista muotoelementti käytöstä

Käytöstä poistaminen kytkee muotoelementin pois päältä poistamatta sitä. Se on hyödyllistä, kun haluat kokeilla osaa ilman reikää tai kuviointia.

1. Valitse muotoelementti.
2. Valitse {{ui:Poista käytöstä}}. Sen rivillä näkyy **pois**. Muotoelementit, jotka tarvitsevat sitä, eivät myöskään rakennu.
3. Ota se takaisin käyttöön valitsemalla {{ui:Ota käyttöön}}.

## Kelaa taaksepäin

Kelaus taaksepäin rakentaa osan vain tiettyyn kohtaan asti, jolloin näet sen silloisessa tilassa tai voit lisätä muotoelementin aiemmin historiassa.

1. Valitse muotoelementti ja valitse {{ui:Kelaa taaksepäin tähän}}. Tämä muotoelementti ja kaikki sen alapuolella olevat harmaannetaan, eikä niitä rakenneta. Kohdan merkkinä on rivi **Kelauspalkki · kelaa eteenpäin**.
2. Kaikki nyt lisäämäsi muotoelementit sijoittuvat **palkkiin**, harmaiden muotoelementtien eteen.
3. Napsauta **Kelauspalkki · kelaa eteenpäin** -riviä rakentaaksesi kaiken uudelleen.

Kelauskohta tallentuu tiedostoon.

## Järjestä muotoelementit uudelleen

1. Valitse muotoelementti.
2. Valitse {{ui:Siirrä ylös}} tai {{ui:Siirrä alas}}, tai paina historiarivin ollessa kohdistettuna {{key:Alt+Up}} tai {{key:Alt+Down}}.

Muotoelementtiä ei voi koskaan siirtää sen käyttämän kohteen yläpuolelle. Painike harmaantuu, ja painikkeen päälle viemällä (tai yrittämällä näppäintä) näkyy syy, esimerkiksi ”Extrude2 käyttää kohdetta Sketch2, joten Sketch2 on oltava ensin.”

Muotoelementin käyttämiä kohteita ovat sen luonnos; pinta, jolla sen luonnos on; muotoelementit, joita kuviointi tai peilaus kopioi; ja luonnoksen viiva tai kierto, jota käytetään suuntana tai akselina.

## Poista muotoelementti

1. Valitse muotoelementti ja valitse {{ui:Poista}} oikeasta paneelista tai työkalurivistä, tai paina {{key:Delete}}.
2. Jos muut muotoelementit käyttävät sitä, PartCraft kysyy: ”Extrude3, Hole1 käyttävät kohdetta Extrude1 ja ne poistetaan myös.” Valitse {{ui:Poista kaikki}} tai {{ui:Peruuta}}.

Muotoelementin poistaminen ei poista sen luonnosta: luonnos ilmestyy näkymään käyttämättömänä luonnoksena, valmiina toista muotoelementtiä varten. Poista luonnos erikseen, jos et tarvitse sitä.

## Nimeä uudelleen

Valitse muotoelementti ja kirjoita uusi **Nimi** oikean paneelin alareunaan (enintään 60 merkkiä). Osan oma nimi on oikeassa paneelissa, kun mitään ei ole valittu.

## Osat, joissa on satoja muotoelementtejä

Satoja muotoelementtejä sisältävää osaa on testattu 750 muotoelementillä. PartCraft säilyttää kiintokappaleen, joka sillä oli historian puolivälissä, joten historian loppupään muutos rakentaa uudelleen vain sen jälkeiset muotoelementit. Muutos historian yläpäässä rakentaa uudelleen kaiken sen päälle rakennetun, ja se vie kauimmin. Kumoaminen ja uudelleen tekeminen rakentavat uudelleen vain siitä kohdasta, josta kaksi tilaa eroavat. Jotta suuren osan kanssa työskentely nopeutuu, kelaa taaksepäin kohtaan, johon työskentelet (katso yllä Kelaa taaksepäin), tai poista käytöstä ne, joita et tarvitse juuri nyt. Useat leikkaukset ja kohokappaleet, jotka eivät kosketa toisiaan, sovelletaan yhdessä, joten osa, joka koostuu monista erillisistä rei'istä ja kohokappaleista, rakentuu nopeammin kuin muotoelementtien määrä antaisi olettaa.

Suuri osa rakentuu uudelleen taustalla: alareunan rakennusmerkki näyttää **Rakennetaan uudelleen…** ja kuinka pitkälle on päästy. Näkymä, paneelit ja valikot toimivat sillä aikaa. Näytöllä oleva osa on viimeksi rakennettu, kunnes uusi on valmis. Jos muutat jotakin uudelleen rakentamisen aikana, PartCraft rakentaa uusimman version ja hylkää kesken olevan. Pieni osa rakentuu yhä heti.

## Kumoa ja tee uudelleen

- {{key:Mod+Z}} tai {{ui:Kumoa}} kumoaa viimeisen muutoksen: muotoelementin, asetuksen, luonnosmuokkauksen tai vetämisen. Tilarivi kertoo, mikä: esimerkiksi ”Kumottu: muuta mitoitus.”
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} tai {{ui:Tee uudelleen}} tekee sen uudelleen.
- PartCraft säilyttää viimeiset 200 vaihetta. Osa, joka on niin suuri, että 200 kopiota veisi paljon muistia, säilyttää vähemmän, mutta ei koskaan alle viimeisimmän 20:n. Muutokset piirustusarkilla (leikkaus, siirretty GD&T-merkki) ovat samassa luettelossa. Tiedoston avaaminen tai uuden osan aloittaminen tyhjentää luettelon.

:::mac
Macissa käytä ⇧⌘Z tekemään uudelleen. Safarissa ⌘Y voi avata selaimen historian sen sijaan.
:::
