---
title: Avaa .3dm-malli kiinteänä kappaleena
summary: Tuo .3dm-tiedoston verkot, polypinnat ja lohkot PartCraftiin yhtenä kiinteänä kappaleena, jota voi leikata, johon voi lisätä ja jolle voi luonnostella. Kerrotaan, mistä kolmiot tulevat ja mitä jää pois.
keywords: 3dm, nurbs, polypinta, brep, pinnat, renderöintiverkko, pursotus, lohkot, tuonti, verkko kiintokappaleeksi, yksiköt, tuotu kappale
from: 8ae9571b
---

PartCraft avaa `.3dm`-tiedostot **kiinteinä kappaleina** samalla tavalla kuin se avaa [STL-, OBJ- tai 3MF-verkon](topic:open-meshes). Kappale toimii kuten mikä tahansa kiintokappale: sitä voi leikata, siihen voi lisätä, siihen voi porata, sitä voi toistaa ja sen litteille pinnoille voi luonnostella. Sillä ei ole omaa historiaa.

## Avaa tiedosto

1. Valitse {{ui:Avaa}} tai paina {{key:Mod+O}} ja valitse `.3dm`-tiedosto. Tai pudota se 3D-näkymään.
2. PartCraft lukee sen ja näyttää, mitä löysi: kuinka monta pinnoitettua kohdetta tulee, kuinka monta pintaa tuli tiedostoon tallennetuista verkoista ja kuinka monta PartCraft kolmioi itse, jokaisen korjauksen ja sen, **sulkeutuuko** tulos.
3. Tarkista **Yksiköt tiedostossa** (tiedosto kertoo omansa; yksikkö, jota PartCraft ei listaa, kuten jaardi, muunnetaan millimetreiksi) ja **Ylös tiedostossa**.
4. Valitse {{ui:Avaa kappaleena}} tai **Käytä sitä** ja {{ui:Lisää tähän osaan}}, kun osassa on jo piirteitä.

## Mistä kolmiot tulevat

PartCraft rakentaa kappaleet tässä versiossa kolmioista, joten jokainen tiedoston pinta muuttuu pieniksi litteiksi pinnoiksi. Jokaiselle polypinnan pinnalle (ja jokaiselle pursotukselle) se ottaa **tiedostoon tallennetun renderöintiverkon**, kun sellainen on. Muuten se **kolmioi pinnan itse**: tasot, NURBS-pinnat, pyörähdyspinnat, pursotetut käyrät ja pursotukset, rajattuna reunoillaan. Saman polypinnan pinnat jakavat reunapisteensä, joten suljettu polypinta tulee suljettuna. Pinta tyypillä, jota PartCraft ei vielä lue, jätetään pois, ja dialogi kertoo, kuinka monta ja minkälaista. Tulos ei yleensä silloin sulkeudu.

## Kaikki tiedostossa muuttuu yhdeksi kappaleeksi

Jokainen näkyvä verkko, polypinta ja pursotus sekä jokainen lohkon sijoitus menee **yhteen** kappaleeseen siihen kohtaan, johon tiedosto sen asettaa. Piilotetut kohteet tai kerroksilla, jotka ovat pois päältä, jätetään pois. Kun tiedostossa on useita erillisiä kiintokappaleita, kappaleessa on useita osia. Avaa jokainen omasta tiedostostaan, jos haluat ne erillisinä kappaleina.

## Mitä jää pois (ja kerrotaan)

Käyrät, pisteet, pistepilvet, teksti, mitoitukset, viivoitukset ja valonlähteet jätetään pois, sillä kappale ottaa vain pintoja. Samoin jätetään pois SubD-kohteet (muuta ne verkoiksi tai polypinnoiksi sitä ohjelmaa, jolla tiedosto tehtiin, ensin), muista tiedostoista linkitetyt lohkot sekä värit, kerrokset ja nimet. PartCraft-kappaleilla ei ole tässä omia.

## Kun se ei sulkeudu

Avoimet polypinnat ja pinnat (yksi rajattu pinta, muoto, josta puuttuu pinta) eivät ole sisäpuolellisia, joten niistä ei voi tehdä kiintokappaletta. Dialogi kertoo, kuinka monta aukkoa on jäljellä, eikä lisää mitään. Yhdistä tai sulje muoto ohjelmassa, jolla se tehtiin, tallenna ja avaa uudelleen. Katso [Kun verkko ei sulkeudu](topic:open-meshes#when-a-mesh-does-not-close).
