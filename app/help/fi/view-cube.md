---
title: Näkymäkuutio
summary: Napsauta kuution pintaa, reunaa tai kulmaa näkymän kulmassa katsoaksesi sieltä, vedä sitä kiertääksesi, käännä kompassirengasta, siirry pintaa vastapäätä olevan näkymän ympäri ja palaa kotinäkymään.
keywords: näkymäkuutio, viewcube, kuutio, kompassi, pohjoinen, kotinäkymä, vakionäkymät, ylä, etu, oikea, iso, kulma, reuna, kiertäminen, näkymän kääntäminen, akselikuvake, kulmamerkki, navigointi
from: afc33dc7
---

Näkymäkuutio sijaitsee 3D-näkymän oikeassa yläkulmassa (ei luonnosteltaessa eikä piirustusarkilla). Se kääntyy näkymän mukana, joten se näyttää aina, mihin suuntaan katsot: {{ui:Ylä}} on osan +Y-puoli (Ylätaso), {{ui:Etu}} on +Z-puoli (Etutaso on sinua kohti, kun katsot sitä), {{ui:Oikea}} on +X-puoli. Se pysyy läpinäkyvänä, kunnes osoitat siihen.

## Katso sivulta, reunasta tai kulmasta

1. Osoita kuutioon. Osan kohta, jonka päällä osoitin on, syttyy: pinnan keskikohta, reuna (se syttyy molemmilla sitä jakavilla pinnoilla) tai kulma (kaikilla kolmella pinnalla).
2. Napsauta. Näkymä kääntyy katsomaan sieltä ja säilyttää saman keskikohdan ja zoomauksen.

Napsautuspaikkoja on 26: 6 pintaa ({{ui:Ylä}}, {{ui:Ala}}, {{ui:Etu}}, {{ui:Takaisin}}, {{ui:Vasen}}, {{ui:Oikea}}), 12 reunaa ja 8 kulmaa. Kulma antaa perinteisen kolmen neljänneksen näkymän; reuna näyttää kahden pinnan puolivälin.

Napsauttamalla {{ui:Etu}}-, {{ui:Ylä}}- tai {{ui:Oikea}}-kohtaa saat samat näkymät kuin työkalurivin {{ui:Näkymät}}, mutta ilman zoomausta sopivaan kokoon.

## Kierrä vetämällä kuutiota

Vedä kuutiota kääntääksesi näkymää, samoin kuin kiertäisit näkymää itsessään. Vetoa ei koskaan tulkita napsautukseksi, joten voit tarttua kuutioon mistä tahansa kohtaa.

## Kompassirengas

Kuution alla oleva rengas kantaa kirjaimet N, E, S ja W.

- **Vedä rengasta** kääntääksesi mallia pystyakselin ympäri, ikään kuin se seisoisi pyörivällä alustalla. Rengas seuraa osoitinta.
- **Napsauta kirjainta** katsoaksesi sen puolelta säilyttäen sen, kuinka jyrkästi katsot alas. Suoraan ylhäältä katsottaessa napsauttamasi kirjain menee ruudun alareunaan.

## Pintaa vastapäätä olevat näkymät: nuolet

Kun katsot suoraan pintaan, kuution ympärille ilmestyy pieniä nuolia:

- Neljä **kolmiota** tuovat sillä puolella olevan pinnan eteen: kuution yllä oleva kolmio näyttää pinnan, joka oli yläreunassa, ja niin edelleen.
- Kaksi **kaarinuolta** oikeassa yläkulmassa kääntävät kuvaa neljänneskierroksen myötä- tai vastapäivään, vaihtamatta sitä, mitä pintaa katsot. Käytä niitä, kun haluat kääntää pohjapiirroksen niin, että pitkä seinä kulkee poikki ruudun.

## Koti

Kuution vasemmassa yläkulmassa oleva talopainike palaa kolmen neljänneksen näkymään ja sovittaa osan näkyviin. {{key:Home}} tekee saman, kun kuutio on kohdistettuna näppäimistöllä.

## Näppäimistöllä

{{key:Tab}} kuutioon, sitten:

| Näppäin | Tekee |
|---|---|
| {{key:left}} / {{key:right}} | valitsee puolen, reunan tai kulman kuution ympäriltä kahdeksasosakierroksin (ruudunlukijat kertovat, mikä on valittuna) |
| {{key:up}} / {{key:down}} | valitsee korkeamman tai matalamman, ylös asti {{ui:Ylä}}-kohtaan tai alas asti {{ui:Ala}}-kohtaan |
| {{key:Enter}} tai {{key:Space}} | katsoo valitulta puolelta |
| {{key:Shift+left}} / {{key:Shift+right}} | kääntää näkymää neljänneskierroksen pystyakselin ympäri |
| {{key:Home}} | kotinäkymä |
| {{key:Esc}} | poistuu kuutiosta |

Kuutiossa painetut näppäimet pysyvät kuutiossa: ne eivät käynnistä PartCraftin työkaluja.

## Akselikuvake tai ei mitään

Avaa {{ui:Asetukset}} ({{key:Mod+,}}), {{ui:PartCraft}}-välilehti, ja aseta **Kulmamerkki** arvoon {{ui:Näkymäkuutio}} (alkuasetus), {{ui:Akselikuvake}} (pieni X-, Y- ja Z-merkki vasemmassa alareunassa: X punainen, Y vihreä, Z sininen) tai {{ui:Ei mitään}}. Tämä selain muistaa valinnan. Ks. [PartCraft-sovelluksen asetukset](topic:settings#corner-indicator).

:::note
Kuutio näyttää osan niin kuin PartCraft sen rakentaa: Y ylöspäin, joten kuution {{ui:Ylä}} on Ylätaso. Kompassikirjaimet ovat vain kääntämistä varten; osalla ei ole pohjoista.
:::
