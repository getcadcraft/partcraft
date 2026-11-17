---
title: Kocka pohľadu
summary: Kliknite na stranu, hranu alebo roh kocky v rohu pohľadu, aby ste sa pozreli odtiaľ; potiahnite ju na otáčanie, otočte kruh kompasu, prejdite okolo pohľadu kolmo na plochu a vráťte sa domov.
keywords: kocka pohľadu, viewcube, kocka, kompas, sever, domovský pohľad, štandardné pohľady, zhora, spredu, sprava, iso, roh, hrana, obiehanie, otočenie pohľadu, ikona osí, indikátor rohu, navigácia
from: afc33dc7
---

Kocka pohľadu je v pravom hornom rohu 3D pohľadu (nie počas kreslenia náčrtu ani na výkresovom liste). Otáča sa spolu s pohľadom, takže vždy ukazuje, kam sa pozeráte: {{ui:Zhora}} je strana +Y súčiastky (rovina Zhora), {{ui:Spredu}} strana +Z (rovina Spredu smeruje k vám, keď sa na ňu pozeráte), {{ui:Sprava}} strana +X. Zostáva priesvitná, kým na ňu neukážete.

## Pohľad zo strany, z hrany alebo z rohu

1. Ukážte na kocku. Časť súčiastky pod ukazovateľom sa rozsvieti: stred strany, hrana (rozsvieti sa na oboch stranách, ktoré ju zdieľajú) alebo roh (na všetkých troch stranách).
2. Kliknite na ňu. Pohľad sa otočí, aby sa pozeral odtiaľ, pričom zachová rovnaký stred a priblíženie.

Je 26 miest na kliknutie: 6 strán ({{ui:Zhora}}, {{ui:Zdola}}, {{ui:Spredu}}, {{ui:Späť}}, {{ui:Zľava}}, {{ui:Sprava}}), 12 hrán a 8 rohov. Roh dá klasický trojštvrťový pohľad; hrana vyzerá na polovici cesty medzi dvoma stranami.

Kliknutie na {{ui:Spredu}}, {{ui:Zhora}} alebo {{ui:Sprava}} dá rovnaké pohľady ako {{ui:Pohľady}} na paneli nástrojov, bez prispôsobenia priblíženia.

## Otáčanie potiahnutím kocky

Potiahnutím kocky otočíte pohľad, rovnako ako obiehaním v samotnom pohľade. Ťah sa nikdy nepovažuje za kliknutie, takže kocku môžete uchopiť kdekoľvek.

## Kruh kompasu

Kruh pod kockou nesie písmená S, V, J a Z.

- **Potiahnite kruh**, aby sa model otočil okolo zvislej osi, ako keby stál na otočnom stole. Kruh sleduje ukazovateľ.
- **Kliknite na písmeno**, aby ste sa pozreli z tejto strany, pričom zachováte, ako strmo sa pozeráte nadol. Pri pohľade priamo zhora sa písmeno, na ktoré kliknete, dostane na spodok obrazovky.

## Pohľady kolmo na plochu: šípky

Keď sa pozeráte priamo na plochu, okolo kocky sa objavia malé šípky:

- Štyri **trojuholníky** privedú plochu na tejto strane dopredu: trojuholník nad kockou ukazuje plochu, ktorá bola hore, a tak ďalej.
- Dve **zakrivené šípky** vpravo hore otočia obrázok o štvrť otáčky v smere alebo proti smeru hodinových ručičiek, bez zmeny plochy, na ktorú sa pozeráte. Použite ich na otočenie pôdorysu, aby dlhý múr išiel naprieč obrazovkou.

## Domov

Tlačidlo domu v ľavom hornom rohu kocky sa vráti k trojštvrťovému pohľadu a prispôsobí súčiastku zobrazeniu. {{key:Home}} robí to isté, keď má kocka zaostrenie klávesnice.

## Klávesnicou

{{key:Tab}} na kocku, potom:

| Klávesa | Robí |
|---|---|
| {{key:left}} / {{key:right}} | vyberie stranu, hranu alebo roh okolo kocky, po osminách otáčky (čítačky obrazovky hovoria, ktorú) |
| {{key:up}} / {{key:down}} | vyberie vyššiu alebo nižšiu, až po {{ui:Zhora}} alebo dole po {{ui:Zdola}} |
| {{key:Enter}} alebo {{key:Space}} | pozrie sa z vybranej |
| {{key:Shift+left}} / {{key:Shift+right}} | otočí pohľad o štvrť otáčky okolo zvislej osi |
| {{key:Home}} | domovský pohľad |
| {{key:Esc}} | opustí kocku |

Klávesy stlačené na kocke zostanú pri kocke: nespúšťajú nástroje PartCraft.

## Ikona osí alebo nič

Otvorte {{ui:Nastavenia}} ({{key:Mod+,}}), kartu {{ui:PartCraft}} a nastavte **Indikátor rohu** na {{ui:Kocka pohľadu}} (začiatočné), {{ui:Ikona osí}} (malá značka X, Y, Z v ľavom dolnom rohu: X červená, Y zelená, Z modrá) alebo {{ui:Žiadny}}. Tento prehliadač si voľbu pamätá. Pozri [Nastavenia PartCraft](topic:settings#corner-indicator).

:::note
Kocka zobrazuje súčiastku tak, ako ju PartCraft zostavuje: Y smerom nahor, takže {{ui:Zhora}} kocky je rovina Zhora. Písmená kompasu slúžia iba na otáčanie; súčiastka nemá sever.
:::
