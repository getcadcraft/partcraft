---
title: Kelaa taaksepäin ja eteenpäin historiassa
summary: Siirrä kelauspalkkia ylös ja alas yksi muotoelementti kerrallaan, seuraa osan rakentumista, lisää muotoelementtejä keskelle ja palaa loppuun.
keywords: kelaus, kelaa taaksepäin, kelaa eteenpäin, kelauspalkki, askella historiassa, lisää muotoelementti, jäädytä, historia
from: 9a366cae
---

Kelauspalkki päättää, kuinka paljon historiasta rakennetaan. Sen alapuolella olevat muotoelementit ovat harmaita eivätkä rakennettuja. Uudet muotoelementit lisätään palkkiin.

## Askella yksi muotoelementti kerrallaan

Kun osa on näkyvissä (ei luonnosta tai piirustusta auki):

| Tee | Tulos |
|---|---|
| {{key:[}} tai nuoli ylös -painike osan nimen vieressä | Palkki siirtyy yhden muotoelementin ylös |
| {{key:]}} tai nuoli alas -painike | Palkki siirtyy yhden muotoelementin alas |
| {{key:End}} tai palkki loppuun -painike | Jokainen muotoelementti rakennetaan taas |

Tilarivi kertoo, missä palkki on, esimerkiksi ”Kelauspalkki: Sketch1 jälkeen, 1 / 2 muotoelementtiä rakennettu”. Painikkeet ovat pois päältä, kun palkki ei voi liikkua siihen suuntaan.

Voit myös valita {{ui:Kelaa taaksepäin tähän}} millä tahansa muotoelementillä, tai napsauttaa historiassa **Kelauspalkki · kelaa eteenpäin**.

## Lisää muotoelementti keskelle

1. Siirrä palkkia taaksepäin, kunnes se on kohdassa, johon uusi muotoelementti kuuluu.
2. Lisää muotoelementti: se menee palkkiin.
3. Paina {{key:End}} rakentaaksesi loput historiasta uuden päälle.

Jokainen palkin siirto on askel, jonka voi kumota {{key:Mod+Z}}-näppäimellä. Palkin paikka tallentuu tiedostoon, joten osa voidaan lähettää kelattuna taaksepäin. Komentorivityökalu siirtää sitä myös: `partcraft rollback part.json` ja `partcraft forward part.json --end`.
