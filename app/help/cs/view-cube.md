---
title: Kostka pohledu
summary: Klikněte na stěnu, hranu nebo roh kostky v rohu pohledu, abyste se podívali odtud; potáhněte ji pro oběh, otočte kruh kompasu, obejděte pohled kolmo na stěnu a vraťte se domů.
keywords: kostka pohledu, viewcube, kostka, kompas, sever, domovský pohled, standardní pohledy, shora, zepředu, zprava, iso, roh, hrana, oběh, otočení pohledu, ikona os, indikátor rohu, navigace
from: afc33dc7
---

Kostka pohledu sedí vpravo nahoře v 3D pohledu (ne při skicování ani na listu výkresu). Otáčí se s pohledem, takže vždy ukazuje, kterým směrem se díváte: {{ui:Shora}} je strana +Y dílu (rovina Shora), {{ui:Čelní}} strana +Z (rovina Čelní je obrácená k vám, když se na ni díváte), {{ui:Zprava}} strana +X. Zůstává průhledná, dokud na ni nemíříte.

## Pohled ze strany, z hrany nebo z rohu

1. Namiřte na kostku. Část dílu pod kurzorem se rozsvítí: střed stěny, hrana (rozsvítí se obě stěny, které sdílí), nebo roh (všechny tři stěny).
2. Klikněte. Pohled se otočí, aby se díval odtud, se zachovaným středem a přiblížením.

Je 26 míst ke kliknutí: 6 stěn ({{ui:Shora}}, {{ui:Zdola}}, {{ui:Čelní}}, {{ui:Zpět}}, {{ui:Zleva}}, {{ui:Zprava}}), 12 hran a 8 rohů. Roh dá klasický třičtvrteční pohled; hrana vypadá na půl cesty mezi dvěma stěnami.

Kliknutí na {{ui:Čelní}}, {{ui:Shora}} nebo {{ui:Zprava}} dá stejné pohledy jako {{ui:Pohledy}} na panelu nástrojů, bez přizpůsobení přiblížení.

## Oběh tažením kostky

Potáhněte kostkou, abyste pohled otočili, stejně jako oběh v samotném pohledu. Tažení se nikdy nebere jako kliknutí, takže kostku můžete uchopit kdekoli.

## Kruh kompasu

Kruh pod kostkou nese N, E, S a W.

- **Potáhněte kruhem**, aby se model otočil kolem svislé osy, jako na otočném stole. Kruh sleduje kurzor.
- **Klikněte na písmeno**, abyste se dívali z té strany, se zachovaným sklonem pohledu dolů. V pohledu přímo shora jde písmeno, na které kliknete, na spodek obrazovky.

## Pohledy kolmo na stěnu: šipky

Když se díváte přímo na stěnu, kolem kostky se objeví malé šipky:

- Čtyři **trojúhelníky** přivedou stěnu na dané straně dopředu: trojúhelník nad kostkou ukazuje stěnu, která byla nahoře, a tak dále.
- Dvě **zakřivené šipky** vpravo nahoře otočí obrázek o čtvrt otáčky po směru nebo proti směru hodinových ručiček, aniž by se změnilo, na kterou stěnu se díváte. Použijte je, aby se půdorys otočil tak, aby dlouhá stěna vedla napříč obrazovkou.

## Domů

Tlačítko domečku vlevo nahoře u kostky vrátí třičtvrteční pohled a přizpůsobí díl. {{key:Home}} dělá totéž, když má kostka klávesový focus.

## Klávesnicí

{{key:Tab}} na kostku, pak:

| Klávesa | Dělá |
|---|---|
| {{key:left}} / {{key:right}} | vybere stranu, hranu nebo roh kolem kostky, po krocích osminové otočky (čtečky obrazovky řeknou, který) |
| {{key:up}} / {{key:down}} | vybere vyšší, nebo nižší, až k {{ui:Shora}}, nebo dolů k {{ui:Zdola}} |
| {{key:Enter}} nebo {{key:Space}} | podívá se z vybrané |
| {{key:Shift+left}} / {{key:Shift+right}} | otočí pohled o čtvrt otáčky kolem svislé osy |
| {{key:Home}} | domovský pohled |
| {{key:Esc}} | opustí kostku |

Klávesy stisknuté na kostce zůstávají u kostky: nespouštějí nástroje PartCraftu.

## Ikona os, nebo nic

Otevřete {{ui:Nastavení}} ({{key:Mod+,}}), kartu {{ui:PartCraft}} a nastavte **Indikátor rohu** na {{ui:Kostka pohledu}} (výchozí), {{ui:Ikona os}} (malá značka X, Y, Z vlevo dole: X červená, Y zelená, Z modrá), nebo {{ui:Žádný}}. Tento prohlížeč si volbu pamatuje. Viz [Nastavení PartCraftu](topic:settings#corner-indicator).

:::note
Kostka zobrazuje díl tak, jak jej PartCraft sestavuje: Y nahoru, takže {{ui:Shora}} na kostce je rovina Shora. Písmena kompasu slouží jen k otáčení; díl nemá sever.
:::
