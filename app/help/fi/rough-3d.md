---
title: 3D-karkeistus ja jäännöstyöstö
summary: Raivaa raaka-aihio koko mallin ympäriltä korkotasoittain tasapäisellä, nuppi- tai pallopäisellä päätejyrsimellä jättäen ylimäärän viimeistelyä varten, ja anna pienemmän työkalun leikata vain siellä, missä ensimmäinen jätti materiaalia. Mitä radat takaavat ja mitä eivät.
keywords: 3D-karkeistus, karkeistus, karkea, jäännöstyöstö, jäännöskarkeistus, jäljelle jäävä raaka-aihio, jätettävä ylimäärä, syvyysaskel, tasot, z-taso, vesiraja, rampi, upotus, ylileikkaus, pienempi työkalu
from: 29ddc266
---

Kaksi toimenpidettä Manufacturessa, joita löytyy työkalurivin {{ui:More}}-painikkeen alta, raivaavat raaka-aihiosta koko **mallin** 3D:ssä, työkalun pysyessä pystyssä (tai toimenpiteen oman [työkalun suunnan](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) mukaan). Ne eivät vaadi valintoja.

## 3D-karkeistus

{{ui:3D rough}} etenee alas raaka-aihion yläpinnasta yksi **syvyysaskel** kerrallaan. Jokaisella tasolla se raivaa kaiken, mihin työkalu yltää koskematta mallia: suoria rivejä **askelvälin** päässä toisistaan (osa työkalun halkaisijasta) ja sitten kerran sen alueen reunan ympäri, johon se saa ulottua, jolloin seinät seurataan eikä niihin jää porrasta pohjakuvaan.

- **Jätettävä ylimäärä**: kuinka kaukana työkalu pysyy mallista kaikkialla viimeistelyajoa varten (oletus 0,5 mm).
- **Taso jokaisella tasaisella pinnalla**: ylimääräinen taso jokaisen mallin tasaisen pinnan korkeudella (plus jätettävä ylimäärä), jotta pohjaa ei jää lähes kokonaisen syvyysaskeleen korkeudelle.
- **Jätä huomiotta raaka-aihio, joka on ohuempaa kuin**: materiaali, joka on tätä ohuempaa ylös tai sivulle, ei ole ajon arvoinen (0,05 mm karkeistukselle, 0,5 mm jäännöstyöstölle, jotta seinää pitkin jäänyt karvanohut kerros ei lähetä pienempää työkalua jokaisen seinän ympäri).
- **Pohja**: mitään ei leikata tämän korkeuden alapuolelle. Tyhjä tarkoittaa mallin pohjaa.

Se alkaa raaka-aihiosta **sellaisena kuin edelliset toimenpiteet jättivät sen**: pinnanjyrsinnän jälkeen se ei leikkaa ilmaa siinä, missä pinnanjyrsin on jo käynyt.

Alas pääsy: missä työkalu osuisi raaka-aihioon matkalla alas, se rampaa omaa ajoratansa pitkin **sisäänajokulmassa**, edestakaisin enintään kahden työkalun halkaisijan verran. Liian lyhyt ajo sukelletaan suoraan alas upotussyötöllä; toimenpide laskee nämä ja varoittaa, koska työkalun ei pitäisi tehdä niin, jos se ei leikkaa keskeltään.

## Jäännöstyöstö

{{ui:Rest}} on sama strategia **pienemmälle työkalulle suuremman jälkeen**. Se lukee raaka-aihion simuloinnin ja leikkaa vain siellä, missä materiaalia vielä seisoo: sisänurkissa, joihin suurempi työkalu ei mahtunut kääntyä, urissa, joihin se ei sopinut, ja rinteiden portaissa, jotka se jätti. Muualla se ei tee mitään, joten sen rata on pieni osa siitä, mitä sama työkalu ottaisi tuoreella raaka-aihiolla.

Aseta se karkeistustoimenpiteen jälkeen ja valitse pienempi työkalu. Se tarvitsee edellisten toimenpiteiden raaka-aihiosimuloinnin, jonka työtila ajaa aina.

## Kuinka hyviä radat ovat

- **Ei ylileikkauksia.** Työkalun pisteet lasketaan ruudukolla, ja leikkuria kasvatetaan hieman (1,4 ruudukkosolua sivusuunnassa ja jätettävä ylimäärä), jotta se pysyy kaikkialla puhtaana mallista. Testit tarkistavat jokaisen leikkauspisteen tarkan työkalun ja tarkan verkon suhteen, ja raaka-aihion simulointi jokaisen ajon jälkeen: ei ylileikkauksia, ei pikaliikettä raaka-aihion läpi.
- **Hinta siitä**: seinät jättävät hieman enemmän kuin jätettävä ylimäärä, enintään toimenpiteessä "Ylimääräinen raaka-aihio seinillä" näytetyn määrän verran (noin 0,5 mm Ø6-työkalulle, vähemmän pienemmälle). Viimeistelyajo ottaa sen pois.

Mitä nämä radat eivät ole:

- Rivit ovat suoria viivoja, eivät osan muodon siirtymiä tai vakiokosketuskäyriä. Ne tekevät enemmän nostoja ja ilmaliikkeitä kuin siirtymä- tai mukautuva strategia, ja kunkin tason ensimmäinen rivi leikkaa työkalun koko leveyden. Tasapohjaisille taskuille [Mukautuva](topic:manufacture) on parempi karkeistus.
- Työkalun varsi ja pidike eivät ole tarkistettuja. Varoitus kertoo, kun leikkaus on syvempi kuin uran pituus.
- Alileikkauksia ei näe: malli on se, minkä työkalu kohtaa tullessaan alas omaa akseliaan pitkin. Sivun karkeistamiseksi anna toiselle toimenpiteelle [kallistettu työkalun suunta](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Jäännöstyöstö tuntee raaka-aihion vain niin hyvin kuin simuloinnin ruudukko (0,1–2 mm solut osan koon mukaan).
- Suuressa osassa ohjelma on pitkä (yli 100 000 liikettä 200 mm:n laipalle Ø6-työkalulla) ja sen laskeminen vie noin minuutin, ja jokainen muutos työtilassa laskee koko ohjelman uudelleen. Käytä karkeistukseen suurinta mahtuvaa työkalua.
- Tarkista tulos koneesi omasta simulaattorista ennen leikkaamista.
