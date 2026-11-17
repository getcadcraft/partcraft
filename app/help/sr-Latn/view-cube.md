---
title: Kocka pogleda
summary: Klikni na stranu, ivicu ili ugao kocke u uglu prikaza da gledaš odatle, prevuci je za orbitiranje, okreni prsten kompasa, pređi na pogled ravno na stranu i vrati se na početak.
keywords: kocka pogleda, viewcube, kocka, kompas, sever, početni pogled, standardni pogledi, gore, sprede, desno, izometrija, ugao, ivica, orbitiranje, okretanje pogleda, ikona osa, indikator ugla, navigacija
from: afc33dc7
---

Kocka pogleda stoji u gornjem desnom uglu 3D prikaza (ne dok skiciraš ili na listu crteža). Okreće se sa pogledom, pa uvek pokazuje u kom smeru gledaš: {{ui:Gore}} je +Y strana dela (ravan {{ui:Gore}}), {{ui:Ispred}} je +Z strana (ravan {{ui:Ispred}} okrenuta je prema tebi kad gledaš u nju), {{ui:Desno}} je +X strana. Ostaje providna dok na nju ne pokažeš.

## Gledaj sa strane, ivice ili ugla

1. Pokaži na kocku. Deo ispod pokazivača se osvetljava: sredina strane, ivica (osvetli se na obe strane koje deli) ili ugao (na sve tri strane).
2. Klikni na nju. Pogled se okreće da gleda odatle, zadržavajući isto središte i zum.

Postoji 26 mesta na koja se klikne: 6 strana ({{ui:Gore}}, {{ui:Dole}}, {{ui:Ispred}}, {{ui:Iza}}, {{ui:Levo}}, {{ui:Desno}}), 12 ivica i 8 uglova. Ugao daje klasični tročetvrtinski pogled; ivica izgleda na pola puta između dve strane.

Klik na {{ui:Ispred}}, {{ui:Gore}} ili {{ui:Desno}} daje iste poglede kao {{ui:Pogledi}} na traci sa alatima, bez zumiranja da stane.

## Orbitiranje prevlačenjem kocke

Prevuci kocku da okreneš pogled, isto kao orbitiranje u samom prikazu. Prevlačenje se nikad ne shvata kao klik, pa kocku možeš uhvatiti bilo gde.

## Prsten kompasa

Prsten ispod kocke nosi N, E, S i W.

- **Prevuci prsten** da okreneš model oko vertikalne ose, kao na okretnom stolu. Prsten prati pokazivač.
- **Klikni na slovo** da gledaš sa te strane, zadržavajući koliko strmo gledaš nadole. U pogledu ravno odozgo, slovo na koje klikneš ide na dno ekrana.

## Pogledi ravno na stranu: strelice

Kad gledaš ravno u stranu, male strelice se pojavljuju oko kocke:

- Četiri **trougla** dovode stranu sa te strane napred: trougao iznad kocke pokazuje stranu koja je bila gore, i tako dalje.
- Dve **zakrivljene strelice** gore desno okreću sliku za četvrt okreta u smeru kazaljke ili suprotno, bez promene strane na koju gledaš. Koristi ih da okreneš plan tako da dugi zid ide preko ekrana.

## Početak

Dugme sa kućicom gore levo na kocki vraća na tročetvrtinski pogled i uklapa deo. {{key:Home}} radi isto dok kocka ima fokus tastature.

## Tastaturom

{{key:Tab}} do kocke, zatim:

| Taster | Radi |
|---|---|
| {{key:left}} / {{key:right}} | bira stranu, ivicu ili ugao oko kocke, u koracima od osmine okreta (čitači ekrana kažu koji) |
| {{key:up}} / {{key:down}} | bira višu ili nižu, do {{ui:Gore}} ili do {{ui:Dole}} |
| {{key:Enter}} ili {{key:Space}} | gleda sa izabranog |
| {{key:Shift+left}} / {{key:Shift+right}} | okreće pogled za četvrt okreta oko vertikalne ose |
| {{key:Home}} | početni pogled |
| {{key:Esc}} | napušta kocku |

Tasteri pritisnuti na kocki ostaju kod kocke: ne pokreću PartCraft alate.

## Ikona osa ili ništa umesto toga

Otvori {{ui:Podešavanja}} ({{key:Mod+,}}), karticu {{ui:PartCraft}}, i postavi **Indikator ugla** na {{ui:Kocka pogleda}} (početno), {{ui:Ikona osa}} (mala oznaka X, Y, Z dole levo: X crvena, Y zelena, Z plava) ili {{ui:Ništa}}. Ovaj pregledač pamti izbor. Vidi [Podešavanja PartCraft-a](topic:settings#corner-indicator).

:::note
Kocka prikazuje deo kako ga PartCraft gradi: Y gore, pa je {{ui:Gore}} kocke ravan {{ui:Gore}}. Slova kompasa služe samo za okretanje; deo nema sever.
:::
