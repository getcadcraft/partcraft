---
title: Připravte díl na 3D tisk
summary: Zkontrolujte, zda je díl nebo sestava uzavřená, vejde se na podložku vaší tiskárny a stojí na základně; potom jej stáhněte jako STL nebo 3MF pro váš slicer.
keywords: 3D tisk, tisk, tiskárna, slicer, stl, 3mf, uzavřený, bez děr, podložka, velikost podložky, přesahy, podpěry, základna, milimetry, export, závity, vůle
from: 90d81dff
---

Slicer potřebuje uzavřený tvar: bez děr, každá plocha směřuje ven a nic neprochází samo sebou. Díly, které PartCraft vytvoří, jsou uzavřené už od konstrukce, takže kontrola hlavně ukazuje velikost, zda se díl vejde na podložku vaší tiskárny, zda stojí na rovné ploše a kolik z něj přečnívá.

## Kontrola a stažení

1. Volitelně, jednou: nastavte podložku tiskárny v {{ui:Nastavení}} › PartCraft › **3D tiskárna**: šířku, hloubku a výšku v milimetrech. Pokud je necháte prázdné, tato kontrola se přeskočí.
2. Zvolte {{ui:Export}}, potom {{ui:Kontrola pro 3D tisk (STL nebo 3MF)…}}.

   Dialog ukáže „Připraveno k tisku“ nebo „Není připraveno k tisku“, vypíše, co je v pořádku a co ne, a uvede velikost na podložce (X × Y × Z, v milimetrech), objem a počet trojúhelníků.

3. Klikněte na {{ui:Stáhnout 3MF}} nebo {{ui:Stáhnout STL}}. Soubor je stejný jako při volbě {{ui:Export}} › {{ui:3MF, pro 3D tisk}} nebo {{ui:STL, pro 3D tisk}}.

V sestavě kontrola i soubory zahrnují celou sestavu, každou kopii na místě, kde je umístěna.

Díl se kontroluje ve stejné poloze, v jaké ho export zapisuje: co v PartCraftu směřuje nahoru (kolmo k Horní rovině), směřuje nahoru i na podložce. Díl skicovaný na Horní rovině leží rovně.

## Co dialog může říct

**Není připraveno k tisku** (slicer jej může odmítnout nebo vytisknout chybně): díry (hrany, u kterých je plocha jen na jedné straně), hrany sdílené třemi nebo více plochami, plochy směřující opačnými směry, těleso vyvrácené naruby nebo těleso procházející samo sebou. Díl vytvořený v PartCraftu by tyto potíže měl mít vždy vyřešené; pokud se objeví, podívejte se na [Řešení problémů](topic:troubleshooting).

**Varování** (vytiskne se, ale nejdřív se na to podívejte):

- **Větší než podložka tiskárny**, i když ji otočíte o 90°.
- **Dole nic neleží rovně**: v slicer otočte díl tak, aby na podložce spočívala plocha, jinak bude potřebovat podpěry nebo raft.
- **Sklání se víc než 45° od svislé polohy**: tyto plochy potřebují podporu, pokud zůstane v dané poloze. Jiná poloha může potřebovat méně.
- **Oddělená tělesa se překrývají** nebo se **dotýkají plochou**: slicery je obvykle sloučí. {{ui:Sloučit}} v Prvky › Více je spojí do jednoho tělesa. Viz [Tělesa](topic:bodies).
- **Menší než 1 mm napříč**: zkontrolujte rozměry dílu.

## Závity, které se vytisknou

Namodelovaný závit se vytiskne jako skutečný závit. Dejte mu nějakou **Vůli**, aby se vytištěný šroub dal zašroubovat do vytištěné matice: viz [Závity](topic:threads).

## Vyhlazení kulatých ploch

STL a 3MF se skládají z trojúhelníků. Pro hladší kulaté plochy klikněte do prázdného prostoru, aby nic nebylo vybráno, a v pravém panelu nastavte **Křivky** na **Jemné (128 na otáčku)** nebo **Velmi jemné (256 na otáčku)** dříve, než exportujete. Více trojúhelníků znamená větší soubory.

## Větší, menší nebo po částech

- **Export › Měřítko pro tisk (STL nebo 3MF)…** uloží díl zvětšený nebo zmenšený podle os bez změny tvaru: **přídavek na smrštění** v procentech (velikost × (1 + s), nebo přesná velikost ÷ (1 − s)) pro modelu odlitku, nebo prosté koeficienty, vzhledem ke středu, nejnižšímu rohu, středu spodní strany nebo počátku.
- **Export › Rozdělit pro tisk (zip s díly)…** rozřeže díl, který je pro vaši tiskárnu příliš velký, na kusy, z nichž každý se vejde na zadanou podložku. Kusy spojí kolíky, pera, vlaštovčí ocasy, kolíkové díry nebo kapsy na magnety (s vůlí, kterou nastavíte). Každý kus a spoj je očíslován a kusy se uloží jako STL nebo 3MF do zip souboru s přehledem sestavení. Samotný díl se nemění.

## Nekontrolováno

Tloušťka stěn, detaily menší než vaše tryska dokáže vykreslit, a způsob, jakým slicer umístí podpěry. Ty ukazuje váš slicer.
