---
title: Zebraste pruge i zakrivljenost
summary: Proverite koliko su glatko spojene površine bilo kog dela, pomoću zebrastih pruga koje prate pogled ili mape boja srednje zakrivljenosti, iz menija Pogledi.
keywords: zebra, zebraste pruge, linije refleksije, zakrivljenost, mapa zakrivljenosti, srednja zakrivljenost, kvalitet površine, kontinuitet, tangenta, g1, g2, glatko, oštra ivica, istaknute linije
from: 78fed4c3
---

Dva brza pogleda na to koliko su glatke površine dela, na bilo kom delu u radnom okruženju Dizajn (radno okruženje Oblik ima sopstveni alat, za oblik koji uređujete: pogledajte [Slobodni oblici u radnom okruženju Oblik](topic:form-surfaces)).

## Zebraste pruge

Otvorite {{ui:Pogledi}} i izaberite {{ui:Zebraste pruge}}. Deo prikazuje refleksiju pruga svetla, kao što bi je pokazala polirana površina:

- Gde se dve površine spajaju **tangencijalno** (zaobljenje na ravnoj površini, glatka Gordonova površ), pruge se nastavljaju preko spoja uz savijanje.
- Gde se susreću pod **oštrom ivicom**, pruge se prekidaju i skaču.
- Gde se zakrivljenost takođe poklapa (G2), pruge teku dalje bez ikakvog preloma.

Okrenite pogled (prevlačenjem ili preko strane kocke pogleda): pruge se ponovo crtaju iz novog pravca. **Pruge** određuje koliko ih ima.

## Zakrivljenost

Izaberite {{ui:Zakrivljenost}} u istom meniju. Deo se boji prema svojoj **srednjoj zakrivljenosti**: plavo tamo gde je šupljina (konkavno), bledo gde je ravno, crveno gde je ispupčeno (konveksno). Kartica kaže pri kojoj zakrivljenosti boje dostižu punu jačinu, u 1/mm i kao poluprečnik. Oštre ivice se računaju kao veoma zakrivljene, pa jako svetle; pogledajte površine između njih.

## Kartica

Oba prikaza otvaraju karticu analize u donjem levom uglu prikaza, u kojoj je i [analiza nagiba](topic:draft-analysis). Prebacujte se između njih pomoću **Prikaži**. Ako ponovo izaberete onaj koji je otvoren, u {{ui:Pogledi}}, {{ui:Zatvori}} ili {{key:Esc}}, on se isključuje. Boje prate deo dok ga menjate; ništa se ne čuva u delu.
