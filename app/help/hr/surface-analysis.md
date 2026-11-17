---
title: Zebra pruge i zakrivljenost
summary: Provjerite koliko su glatko spojene plohe bilo kojeg dijela, pomoću zebra pruga koje prate pogled ili karte boja srednje zakrivljenosti, iz izbornika Pogledi.
keywords: zebra, zebra pruge, linije refleksije, zakrivljenost, karta zakrivljenosti, srednja zakrivljenost, kvaliteta površine, kontinuitet, tangenta, g1, g2, glatko, oštar prijelaz, istaknute linije
from: 78fed4c3
---

Dva brza pogleda na to koliko su plohe dijela glatke, na bilo kojem dijelu u radnom prostoru Design (radni prostor Form ima vlastiti pogled, za oblik koji uređujete: vidi [Slobodni oblici pomoću Forma](topic:form-surfaces)).

## Zebra pruge

Otvorite {{ui:Pogledi}} i odaberite {{ui:Zebra pruge}}. Dio prikazuje odraz pruge svjetla, kao što bi ga prikazala polirana površina:

- Gdje se dvije plohe spajaju **tangencijalno** (zaobljenje na ravnoj plohi, glatka Gordonova ploha), pruge se nastavljaju preko spoja uz savijanje.
- Gdje se susreću pod **oštrim prijelazom**, pruge se prekidaju i skaču.
- Gdje se poklapa i zakrivljenost (G2), pruge teku bez ikakvog prijeloma.

Zakrenite pogled (povlačenjem ili preko plohe ViewCubea): pruge se ponovno crtaju iz novog smjera. **Pruge** određuje koliko ih ima.

## Zakrivljenost

Odaberite {{ui:Zakrivljenost}} u istom izborniku. Dio je obojen prema svojoj **srednjoj zakrivljenosti**: plavo tamo gdje je udubljen (konkavno), blijedo gdje je ravan, crveno gdje je ispupčen (konveksno). Kartica kaže pri kojoj zakrivljenosti boje postižu punu jačinu, u 1/mm i kao polumjer. Oštri bridovi se računaju kao vrlo zakrivljeni, pa su jako istaknuti; gledajte plohe između njih.

## Kartica

Oba otvaraju karticu analize pri dnu lijevo u pogledu, koja sadrži i [analizu nagiba](topic:draft-analysis). Prebacujte se među njima pomoću **Prikaži**. Ponovni odabir već otvorenog u {{ui:Pogledi}}, {{ui:Zatvori}} ili {{key:Esc}} ga isključuje. Boje prate dio dok ga mijenjate; ništa se ne sprema u dio.
