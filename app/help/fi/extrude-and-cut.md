---
title: Pursota kohouma ja leikkaa sen läpi
summary: Muuta luonnos kiintokappaleeksi Pursotuksella, aseta sokea, keskitaso-, pintaan asti tai kaksisuuntainen syvyys, vetokulma tai yksi luonnoksen ääriviiva, luonnostele sitten pinnalle ja Leikkaa tasku tai läpiura.
keywords: pursota, kohouma, leikkaus, pursotettu leikkaus, tasku, läpi kokonaan, sokea, keskitaso, käänteinen, syvyys, leikkaus-pursotus, kohouma-pursotus, pad, pintaan asti, seuraavaan pintaan, kärkipisteeseen asti, pinnan siirtymä, suunta 2, kaksi suuntaa, vetokulma pursotuksessa, kaltevuus, ääriviiva, alue, valitut ääriviivat
from: 3b13ff10
---

{{ui:Pursota}} työntää luonnoksen suljetun profiilin suoraan ulos sen tasosta luodakseen materiaalia. {{ui:Leikkaa}} tekee saman, mutta poistaa materiaalia. Molemmat ovat pohjimmiltaan sama muotoelementti; voit vaihtaa niiden välillä myöhemmin.

## Pursota kohouma

1. Piirrä suljettu profiili ja sulje luonnos (katso [Piirrä ensimmäinen luonnos](topic:sketch-basics)). Se pysyy valittuna.
2. Valitse {{ui:Pursota}}.

Näkyviin tulee 10 mm:n kiintokappale, ”Extrude1” liittyy historiaan, ja sen luonnos on sisennettynä sen alla. Tilarivi sanoo: ”Extrude1 lisätty. Muuta sen luvut oikealla.”

**Mitä luonnosta käytetään:** juuri sulkemasi luonnos tai historiassa valittu luonnos. Kun mitään ei ole valittuna, PartCraft ottaa viimeisimmän luonnoksen, jota mikään muotoelementti ei vielä käytä. Jos sellaista ei ole: ”Tee ensin luonnos: valitse taso, {{ui:Luonnos}}, piirrä suljettu profiili, {{ui:Poistu}}.”

### Aseta syvyys ja suunta

Oikealla paneelilla:

| Asetus | Vaihtoehdot | Oletus |
|---|---|---|
| **Toiminto** | Kohouma (lisää materiaalia), Leikkaus (poistaa materiaalia), Risteys (säilyttää päällekkäisen osan), Uusi kappale (ei vielä toteutettu tässä versiossa: se vaatii tarkan ytimen) | Kohouma |
| **Loppu** | Sokea (syvyys), Keskitaso (molempiin suuntiin), Läpi kokonaan, Pintaan tai tasoon asti, Seuraavaan pintaan, Kärkipisteeseen asti, Siirtymä pinnasta | Sokea |
| **Syvyys (mm)** | Mikä tahansa koko nollan yläpuolella (näkyy Sokealle ja Keskitasolle) | 10 |
| **Käännä suunta** | Kasvaa luonnostason toiselle puolelle (ei näy Keskitasolle) | Pois |

Kirjoita luku ja paina {{key:Enter}} tai {{key:Tab}}: osa rakentuu heti uudelleen. **Keskitaso** jakaa syvyyden puoliksi luonnoksen kummallekin puolelle.

### Pintaan, seuraavaan pintaan tai kärkipisteeseen asti

Ei vielä toteutettu tässä versiossa: jokainen ”asti”-loppu vaatii tarkan ytimen, ja muotoelementti sanoo: ”Pursotus pintaan, seuraavaan pintaan tai kärkipisteeseen asti: ei vielä toteutettu (se vaatii tarkan ytimen).” Käytä mitattua sokeaa syvyyttä. Tarkan ytimen kanssa loput toimivat näin:

- **Pintaan tai tasoon asti**: **Asti** ottaa tasaisen pinnan (valitse Valitse ja napsauta sitä) tai viitetason. Luonnoksen suuntainen pinta antaa tarkan syvyyden; vino pinta leikkaa lopun rinteeseen. Jos pinta on luonnoksen takana: ”… Kokeile Käännä suuntaa.”
- **Seuraavaan pintaan asti**: pysähtyy kappaleen ensimmäiseen tasaiseen pintaan, jonka pursotus kohtaa (kaarevia pintoja ei tueta tässä, ja se kertoo siitä).
- **Kärkipisteeseen asti**: pysähtyy kärkipisteen tasalle (napsauta lähellä särmän päätä) tai pistemuotoiluun.
- **Siirtymä pinnasta**: kuten Pintaan asti, mutta pysähtyy **Siirtymä (mm)** -etäisyyden päähän pinnasta (mitattuna suorassa kulmassa pintaan).

### Kaksi suuntaa, vetokulma, yksi ääriviiva

- **Toinen suunta** (Sokea): pursottaa myös **Toinen syvyys (mm)** luonnoksen toiselle puolelle.
- **Vetokulma (°)**: sivut kallistuvat sisäänpäin sitä mukaa kuin ne etenevät (negatiivinen: ulospäin), kuten vetokulma; vain yksi suunta. Ei vielä toteutettu tässä versiossa (se vaatii tarkan ytimen): jätä arvoon 0.
- **Alueet**: **Valitse alueet**, napsauta sitten silmukoiden sisälle niitä, jotka haluat pursottaa; vain nämä alueet käytetään (ympyrä neliön sisällä: napsauta ympyrän sisältä sylinteriä varten, niiden välistä levyä varten, jossa on reikä). **Kaikki** palauttaa jokaisen silmukan.

Näiden alla **Luonnoksen mitat** listaa luonnoksen ohjaavat mitat, joten voit muuttaa profiilin kokoja avaamatta luonnosta.

:::note
**Läpi kokonaan on vain leikkauksille.** Kohoumalle, joka on asetettu Läpi kokonaan -tilaan, tulee virhe: ”Läpi kokonaan on leikkauksille. Käytä kohoumalle syvyyttä.” Kun vaihdat muotoelementin Leikkauksesta takaisin Kohoumaksi, Läpi kokonaan muuttuu puolestasi Sokeaksi.
:::

## Leikkaa tasku

1. Napsauta tasaista pintaa, johon haluat leikata. Se korostuu, ja oikea paneeli sanoo **Pinta**.
2. Valitse {{ui:Luonnostele tälle pinnalle}} (tai työkalurivin {{ui:Luonnos}}).
3. Piirrä taskun ääriviiva, esimerkiksi suorakulmio, ja mittaa se.
4. Valitse {{ui:Poistu}}.
5. Valitse {{ui:Leikkaa}}. Se alkaa **Läpi kokonaan** -tilasta: se poistaa materiaalia läpi koko osan.
6. Taskulle aseta **Loppu** arvoon **Sokea (syvyys)** ja kirjoita **Syvyys (mm)**.

Leikkaus menee materiaaliin, poispäin pinnasta, jolle piirsit. Jos tilarivi sanoo ”Luonnoksen tällä puolella ei ole mitään leikattavaa. Kokeile toista suuntaa.”, rastita **Käännä suunta**.

Luonnos taskun pohjalla seuraa pohjaa: kun muutat taskun syvyyttä, luonnos liikkuu sen mukana.

## Työnnä tai vedä koko pintaa

Jos haluat pinnan ulommas tai painaa sen sisään, sinun ei tarvitse piirtää sen ääriviivaa. Napsauta tasaista pintaa ja sitten oikealla paneelilla:

- {{ui:Pursota siitä}} vetää pinnan ulos: PartCraft lisää pinnalle luonnoksen, jossa on sen ääriviiva (pinnan reiät pysyvät reikinä), ja 10 mm:n Pursotuksen.
- {{ui:Leikkaa siihen}} painaa pinnan sisään: sama luonnos ja Leikkaus puoliväliin osaan.

Molemmat ovat yksi vaihe: {{key:Mod+Z}} poistaa luonnoksen ja muotoelementin yhdessä. Uusi muotoelementti on valittuna, joten kirjoita luku heti ja paina {{key:Enter}} sen syvyydeksi. Ääriviiva kopioidaan kiinteinä viivoina ja kaarina: se ei seuraa myöhempiä muutoksia pinnassa. Jos osaa ääriviivasta ei voi kopioida (vapaamuotoinen käyrä), luonnos avautuu sen sijaan sillä, mikä voitiin kopioida; viimeistele se, valitse sitten {{ui:Poistu}} ja {{ui:Pursota}} tai {{ui:Leikkaa}}.

## Profiilit saarekkeilla

Luonnos voi sisältää useita suljettuja silmukoita. Vierekkäiset silmukat tulevat erillisiksi kohoumiksi (tai leikkauksiksi); toisen sisällä oleva silmukka tulee reiäksi kohouman läpi. Esimerkiksi suorakulmio, jonka sisällä on kaksi ympyrää, pursottuu levynä, jossa on kaksi reikää.

Jos haluat käyttää vain osaa silmukoista, valitse ne **Alueet**-toiminnolla (yllä); toinen muotoelementti voi käyttää saman luonnoksen muita silmukoita.

## Muokkaa myöhemmin

- Napsauta historiassa ”Extrude1”, niin sen asetukset tulevat takaisin näkyviin.
- Kaksoisnapsauta sen luonnosta (sisennettynä sen alla) avataksesi luonnoksen; sulje se rakentaaksesi uudelleen.
- Katso [Muuta osaa sen historian kautta](topic:edit-history) poistamista käytöstä, kelausta, järjestelyä ja poistamista varten.

## Yleisimmät viestit

| Viesti | Mitä tehdä |
|---|---|
| ”Luonnoksessa ei ole suljettua profiilia pursotettavaksi.” | Luonnoksessa ei ole suljettua silmukkaa kiinteitä viivoja. Sulje aukot tai palauta rakennusviivat takaisin {{key:Q}}-näppäimellä |
| ”Profiili on auki: pää kohdassa (x, y) ei ole liitetty mihinkään.” | Avaa luonnos ja liitä tuo pää seuraavaan viivaan |
| ”Leikattavaa ei ole vielä.” | Leikkaus tarvitsee kiintokappaleen, jonka leikata. Tee ensin kohouma |
| ”Osasta ei jää mitään tämän jälkeen.” | Leikkaus poisti kaiken. Tarkista sen koko ja suunta |

Lisää: [Vianmääritys](topic:troubleshooting).
