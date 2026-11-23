---
title: Snímanie sondou: nájdenie súčiastky a nastavenie posunu nulového bodu
summary: Dotknite sa hornej plochy, strany, otvoru alebo výstupku sondou a nechajte riadiaci systém posunúť posun nulového bodu tam, kde je súčiastka skutočne, alebo len merajte. Čo každý riadiaci systém dokáže a čo nebolo overené.
keywords: sonda, snímanie sondou, dotyková sonda, dotykové nulovanie, posun nulového bodu, g54, g31, g38.2, preskočenie, referencia, nájdenie stredu, vŕtanie, výstupok, hrana, nastavenie nuly, meranie, kontrola, g10
from: 1f718b82
---

{{ui:Snímanie sondou}} vo Výrobe zapíše do programu cyklus snímania: sonda sa dotkne súčiastky a riadiaci systém posunie posun nulového bodu (G54) o rozdiel medzi tým, kde bol povrch nájdený, a kde ho model uvádza. Neskoršie operácie potom režú tam, kde je súčiastka skutočne.

**Nič tu nebolo spustené na stroji.** Pohyby pred dotykom sú bežné pohyby: sonda sa nesleduje až do samotného pohybu snímania. Spustite ho pomaly, najprv vo vzduchu, s rukou na pozastavení posuvu.

## Použitie

1. Na karte **Nástroje** prvá operácia snímania pridá **dotykovú sondu**: jej priemer guličky a posuv snímania (predvolene 100 mm/min, pokiaľ nenastavíte inak).
2. Stlačte {{ui:Viac}} na paneli nástrojov Výroba, potom {{ui:Snímanie sondou}}, a kliknite na to, čoho sa dotknúť. Každý výber je jeden cyklus, v poradí kliknutia:

| Výber | Cyklus | Čo sa nastaví |
|---|---|---|
| Rovná plocha, ktorá smeruje hore pozdĺž osi nástroja | Jeden dotyk smerom dole | Z |
| Rovná bočná plocha kolmá na X alebo na Y | Jeden dotyk smerom k ploche, mierne pod jej vrchom | X alebo Y |
| Otvor alebo výstupok pozdĺž osi nástroja | Štyri dotyky (+X, −X, +Y, −Y) | X a Y jeho stredu |

3. **S výsledkom**: {{ui:Nastaviť posun nulového bodu}} alebo {{ui:Len merať}}.
4. **Začať takto ďaleko** a **Hľadať takto ďaleko za** sú vzdialenosti, odkiaľ sa pohyb snímania začína od očakávaného povrchu a ako ďaleko za ním sa sonda smie pohybovať, kým to riadiaci systém vzdá. **Hĺbka** je, ako hlboko pod vrch otvoru, výstupku alebo bočnej plochy ide guľôčka.

Dajte operáciu snímania ako prvú, pred všetko rezanie.

## Čo zapisuje každý riadiaci systém

| Riadenie | Dotyk | Výsledok |
|---|---|---|
| ISO v štýle Fanuc | `G31`, poloha uložená v `#101` až `#104` | Premenné posunu (`#5221` až `#5223`) sa posunú o nájdené − očakávané. Len meranie: rozdiel zostane v `#110` (a `#111`). |
| LinuxCNC | `G38.2`, poloha uložená v pomenovaných parametroch | `G10 L2 P1` s novým posunom. Len meranie: správa `(DEBUG, …)`. |
| GRBL | `G38.2` | Jeden dotyk nastaví os pomocou `G10 L20 P1`. GRBL nemá premenné, takže **nedokáže vypočítať stred**: súbor to uvedie v komentári a nič nenastaví. |

Výpočty patria postprocesoru, takže ich môžete zmeniť: udalosti sú `probe-move` a `probe-set` ([Postprocesory, ktoré môžete upraviť](topic:post-processors)).

## Obmedzenia

- Jeden posun nulového bodu (G54). Plochy kolmé len na osi: žiadny uhol, žiadny cyklus rohu, žiadne otáčanie obrobku.
- Žiadny nastavovač nástroja, žiadna kontrola zlomeného nástroja, žiadne meranie rozmeru voči tolerancii, žiadny protokol.
- Vreteno sa pre sondu nespúšťa a chladiaca kvapalina zostáva vypnutá; nič neoveruje, že nástroj vo vretene je sonda.
- Simulácia polotovaru nespúšťa dráhu snímania.
- Vlastná kalibrácia sondy (odchýlka guličky, výchylka hrotu, smer spúšťania) patrí riadiacemu systému.
