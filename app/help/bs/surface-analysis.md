---
title: Zebra pruge i zakrivljenost
summary: Provjerite koliko se glatko spajaju površi bilo kojeg dijela, sa zebra prugama koje prate pogled ili mapom boja srednje zakrivljenosti, iz menija Prikazi.
keywords: zebra, zebra pruge, linije odraza, zakrivljenost, mapa zakrivljenosti, srednja zakrivljenost, kvalitet površi, kontinuitet, tangenta, g1, g2, glatko, oštra ivica, linije isticanja
from: 78fed4c3
---

Dva brza pogleda na to koliko su glatke površi dijela, na bilo kojem dijelu u radnom prostoru Projektovanje (radni prostor Oblik ima svoj, za oblik koji uređujete: vidi [Slobodni oblici pomoću Oblika](topic:form-surfaces)).

## Zebra pruge

Otvorite {{ui:Prikazi}} i izaberite {{ui:Zebra pruge}}. Dio prikazuje odraz pruga svjetla, kako bi ga pokazala polirana površ:

- Gdje se dvije površi spajaju **tangencijalno** (zaobljenje na ravnoj, glatka Gordonova površ), pruge se nastavljaju preko spoja uz savijanje.
- Gdje se sastaju pod **oštrom ivicom**, pruge se prekidaju i skaču.
- Gdje se zakrivljenost također poklapa (G2), pruge teku dalje bez i najmanjeg prijeloma.

Okrenite pogled (prevucite, ili strana kocke pogleda): pruge se ponovo crtaju iz novog smjera. Opcija **Pruge** određuje koliko ih ima.

## Zakrivljenost

Izaberite {{ui:Zakrivljenost}} u istom meniju. Dio se boji prema svojoj **srednjoj zakrivljenosti**: plavo tamo gdje je udubljen (konkavno), blijedo tamo gdje je ravan, crveno tamo gdje je ispupčen (konveksno). Kartica kaže pri kojoj zakrivljenosti boje dostižu punu jačinu, u 1/mm i kao radijus. Oštre ivice se računaju kao vrlo zakrivljene, pa jako svijetle; gledajte površi između njih.

## Kartica

Oba otvaraju karticu analize u donjem lijevom uglu prikaza, koja sadrži i [analizu nagiba](topic:draft-analysis). Prebacujte se između njih pomoću **Prikaži**. Ponovni izbor otvorenog u {{ui:Prikazi}}, {{ui:Zatvori}} ili {{key:Esc}} ga isključuje. Boje prate dio dok ga mijenjate; ništa se ne sprema u dio.
