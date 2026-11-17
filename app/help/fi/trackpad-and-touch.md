---
title: Kosketuslevy, kosketusnäyttö ja pienet näytöt
summary: Kuinka kierrät, panoroit ja zoomaat Mac- tai kannettavan kosketuslevyllä, mikä toimii kosketusnäytöllä ja mikä vaatii yhä näppäimistön, sekä kuinka näyttö järjestyy puhelimella tai kapealla ikkunalla.
keywords: kosketuslevy, kosketuspinta, magic mouse, mac, kosketus, tabletti, ipad, puhelin, nipistys, kaksi sormea, oikea napsautus, toissijainen napsautus, eleet, pieni näyttö, mobiili
from: 0e764fd8
---

PartCraft on tehty hiirelle, jossa on rulla ja keskipainike, mutta kosketuslevy toimii hyvin, kun tunnet eleet, ja kosketusnäyttö soveltuu osien katseluun ja yksinkertaiseen luonnosteluun.

## Kosketuslevy

:::mac
| Tehtävä | Miten |
|---|---|
| Kierrä osaa (3D) | Napsauta ja vedä yhdellä sormella (tai vedä kolmella sormella, jos olet ottanut käyttöön kolmen sormen vedon) |
| Panoroi (3D) | Pidä {{key:Shift}} (tai ⌘) painettuna ja napsauta-vedä, tai napsauta-vedä kahden sormen painalluksella (toissijaisen napsautuksen veto) |
| Kierrä osaa pyyhkäisemällä | Pyyhkäise kahdella sormella; {{key:Shift}}-näppäimen kanssa pyyhkäisy panoroi. Vaatii **Vieritys**-asetukseksi "Päättele itse" (oletus) tai "Kosketuslevy" |
| Zoomaa (3D ja luonnos) | Nipistä. Zoomaus kohdistuu osoittimeen. Kun **Vieritys** on "Hiiren rulla", myös kahden sormen vieritys zoomaa |
| Oikea napsautus | Napsauta kahdella sormella tai {{key:Ctrl}}+napsautus |
| Panoroi luonnoksessa | Pyyhkäise kahdella sormella ("Päättele itse" tai "Kosketuslevy"), tai napsauta-vedä kahden sormen painalluksella. {{key:Shift}}+veto ei panoroi luonnoksessa (se piirtää valintaruudun) |
| Lisää valintaan luonnoksessa | {{key:Shift}}+napsautus tai ⌘+napsautus |

Ota toissijainen napsautus käyttöön kohdassa **Järjestelmäasetukset, Kosketuslevy, Osoitin ja napsautus**, jos kahden sormen napsautus ei tee mitään.
:::

:::windows linux
| Tehtävä | Miten |
|---|---|
| Kierrä osaa (3D) | Paina kosketuslevyä (tai napauta ja pidä) ja vedä |
| Panoroi (3D) | Pidä {{key:Shift}} tai {{key:Ctrl}} painettuna ja vedä, tai vedä oikean painikkeen alue painettuna |
| Kierrä osaa pyyhkäisemällä | Pyyhkäise kahdella sormella; {{key:Shift}}-näppäimen kanssa pyyhkäisy panoroi. Vaatii **Vieritys**-asetukseksi "Päättele itse" (oletus) tai "Kosketuslevy" |
| Zoomaa (3D ja luonnos) | Nipistä, kun kosketuslevy tukee sitä. Zoomaus kohdistuu osoittimeen. Kun **Vieritys** on "Hiiren rulla", kahden sormen vieritys zoomaa |
| Oikea napsautus | Kahden sormen napautus tai kosketuslevyn oikea alakulma |
| Panoroi luonnoksessa | Pyyhkäise kahdella sormella ("Päättele itse" tai "Kosketuslevy"), tai vedä oikean painikkeen alue painettuna. {{key:Shift}}+veto ei panoroi luonnoksessa |
| Lisää valintaan luonnoksessa | {{key:Shift}}+napsautus tai {{key:Ctrl}}+napsautus |
:::

**Vieritys** on [PartCraftin asetuksissa](topic:settings): "Päättele itse" (oletus) käsittelee sivuttaisen tai hienojakoisen vierityksen kosketuslevynä, "Kosketuslevy" tekee sen aina, "Hiiren rulla" ei koskaan. Nipistys zoomaa kaikissa kolmessa.

Nuolinäppäimet kiertävät 3D-näkymää ja {{key:Shift}} nuolten kanssa panoroi, kun olet napsauttanut näkymää: kätevää kosketuslevyllä. {{key:Plus}} ja {{key:Minus}} zoomaavat.

## Kosketusnäytöt

PartCraft lukee kosketussyötteen, joten tabletit, kosketusnäyttökannettavat ja puhelimet toimivat, joskin rajoituksin.

:::touch
**Kosketusnäppäimet**

Kun kosketat näyttöä, näkymän oikeaan alakulmaan ilmestyy pieni palkki näppäimillä, joita sormelta puuttuu. Se katoaa, kun käytät hiirtä.

- {{ui:Esc}}: Esc-näppäin. Se peruu aloittamasi toiminnon tai palaa askeleen taaksepäin, täsmälleen kuten näppäin.
- {{ui:Lisää}} (luonnoksessa Valitse-työkalulla): kun se on päällä, jokainen napautus lisää kohteen valintaan tai poistaa sen, kuten {{key:Shift}}+napsautus. Napauta sitä uudelleen palataksesi yksi kohde kerrallaan -tilaan.
- {{ui:Valmis}} (kun piirrät viivaketjua, splinejä tai monikulmiota): viimeistelee sen, kuten oikea napsautus.

Sormen pitäminen paikallaan noin puoli sekuntia tekee saman kuin yksi napautus: piirtotyökalulla se viimeistelee piirtämäsi, ja Valitse-työkalulla se lisää sormen alla olevan kohteen valintaan tai poistaa sen. Pisteitä ja viivoja on helpompi osua sormella: PartCraft etsii noin kaksi kertaa kauempaa napautuksen ympäriltä kuin napsautuksen ympäriltä.

**3D-näkymässä**

- Yksi sormi: kierrä osaa.
- Kaksi sormea: nipistä zoomaukseen, liikuta yhdessä panorointiin.
- Napautus: valitse pinta, särmä tai taso. Ennen napautusta ei ole kohdistuskorostusta.

**Luonnoksessa**

- Napauta piirtotyökalulla asettaaksesi jokaisen pisteen: napauta alkua ja sitten loppua. Tartunta tapahtuu siinä kohdassa, josta nostat sormen.
- Kaksi sormea nipistää ja panoroi. Toisen sormen painaminen alas peruu ensimmäisen sormen aloittaman vedon.
- Viivaketjun lopettamiseksi napauta {{ui:Valmis}}, pidä sormi paikallaan tai napauta työkalurivin {{ui:Viiva}}-painiketta uudelleen (tai toista työkalua).
- Valitse-työkalulla napauta valitaksesi; vedä pistettä tai viivaa siirtääksesi sitä; vedä tyhjään tilaan valintaruutua varten. Toinen napautus korvaa valinnan, ellei {{ui:Lisää}} ole päällä (tai pidä sormi paikallaan toisessa kohteessa).
- Mitan muuttamiseksi käytä sen vieressä oikeassa paneelissa olevaa **Muokkaa**-painiketta.

**Piirustusarkki**

Napauta asettaaksesi ja valitaksesi symboleja, ja vedä symbolia siirtääksesi sitä. Nipistä zoomataksesi, liikuta kahta sormea panoroidaksesi tai vedä yhdellä sormella tyhjän paperin yli. Toinen sormi pysäyttää vedettävän symbolin, ja se palaa takaisin.

**Mikä vaatii yhä näppäimistön**

- Lukujen kirjoittaminen: näytön näppäimistö aukeaa lukuruuduissa ja mittakentissä.
- Työkalujen pikanäppäimet: käytä työkalupalkkia.
:::

## Pienet näytöt ja puhelimet

- 1280 pikselin tai leveämmällä näytöllä työkalupalkki mahtuu yhdelle riville.
- Noin 760–1100 pikselin välillä sivupaneelit kapenevat.
- Alle noin 760 pikselin (puhelin tai kapea ikkuna) näyttö pinoutuu: työkalupalkki (pyyhkäise sivusuunnassa saadaksesi lisää painikkeita), 3D-näkymä, tilarivi, sitten ominaisuuspaneeli ja historia. Vieritä sivua päästäksesi paneeleihin.
- Valikot ({{ui:Vie}}, {{ui:Näkymät}}) avautuvat koko näytön leveydelle.

:::note
iPhonessa selaimessa ei ole koko näytön tilaa; {{key:Ctrl+Shift+F}} ja näyttötilapainike vaihtavat vain normaalin ja piilotettujen palkkien tilan välillä.
:::

Puhelin sopii osan avaamiseen, kiertämiseen ja tietojen tarkistamiseen. Varsinainen mallintaminen vaatii suuremman näytön sekä hiiren tai kosketuslevyn.

## Selaimet

Nykyiset Chrome-, Edge-, Firefox- ja Safari-selaimet toimivat PartCraftin kanssa Windowsissa, macOS:ssä ja Linuxissa sekä tableteilla ja puhelimilla, kunhan WebGL ja WebAssembly ovat käytettävissä. Katso [Selaimet ja tietokoneet](common:browsers).
