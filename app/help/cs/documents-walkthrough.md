---
title: Dokumenty a revize (úložiště)
summary: Krok za krokem jednou skutečnou zakázkou: dejte složku projektu s díly a sestavami pod kontrolu, vyjměte díl, změňte jej, vraťte jej s poznámkou, uvolněte jej, zjistěte, co jej používá, a kusovník, co vidí druhá osoba, zatímco je soubor zamčený, a jak to funguje se složkami v cloudu.
keywords: úložiště, dokumenty, postup, výukový návod, vyjmout, vrátit, revize, uvolnit, schválit, zámek, historie, kde se používá, kusovník, bom, sestava, složka v cloudu, složka projektu, dva lidé, sdílená složka
from: 0a5e6983
---

## Co uděláte

Jste Ana a pracujete na projektu Riverside Clinic s kolegou Benem. Díly a sestavy projektu jsou v jedné složce, ke které se dostanete oba (sdílený disk, synchronizovaná složka nebo složka v cloudu). Na konci jeden soubor přejde od své první kopie k uvolněné revizi **A**, bude znovu změněn jako **B.1**, uvidíte, kdo co udělal, a uvidíte, co vidí Ben, když soubor držíte.

Vše je uloženo ve skryté složce `.ccvault` vedle vašich souborů: žádný server, nic se nenahrává (výjimkou je složka v cloudu, viz poslední krok). Každé tlačítko a každé pravidlo na jednom místě najdete v tématu *Dokumenty: vyjmutí, revize a uvolnění*, pokud je ve vaší aplikaci k dispozici.

## 1. Nastavte složku projektu

1. Vyberte {{ui:Dokumenty…}} ve skupině **Soubor** na panelu nástrojů.
2. Vyberte {{ui:Vyberte projektovou složku}} a zvolte složku, která obsahuje díly a sestavy projektu. (Složky projektu fungují ve Studiu a v prohlížečích, které umějí otevřít složku, například Chrome a Edge. V ostatních prohlížečích to panel řekne.)
3. Vyberte {{ui:Změnit}} vedle **Vy:** a zadejte své jméno, `Ana` (pokud se zeptá, také jméno tohoto počítače). Panel nyní říká *Vy: Ana na* a váš počítač. Vaše jméno se připojí ke všemu, co uděláte.
4. Vyberte {{ui:Založit úložiště v této složce}} a zadejte název projektu `Riverside clinic`. Panel říká *Úložiště pro Riverside clinic bylo založeno.*

## 2. Dejte soubor pod kontrolu

1. Otevřete **Soubory mimo úložiště** a vyberte {{ui:Přidat}} vedle `plates/Bracket.partcraft.json`.
2. Objeví se pod **Soubory v úložišti** v revizi **A.1**, ve stavu **Rozpracováno**. A.1 je jeho první kopie; úložiště uchovává kopii každé revize.

## 3. Vyjměte, změňte, vraťte

1. Vyberte {{ui:Otevřít}} vedle `plates/Bracket.partcraft.json`. Díl se otevře v PartCraftu a panel se zavře, abyste jej viděli. Panel znovu otevřete přes {{ui:Dokumenty…}}.
2. Znovu otevřete panel a vyberte {{ui:Vyjmout}}. Řádek nyní říká **Vyjmuto vám**. V `.ccvault/locks` vznikl zamykací soubor; nikdo jiný tento soubor nemůže vyjmout, dokud jej nevrátíte.
3. Změňte díl: upravte kótu, přidejte otvor. Uložení je odmítnuto, pokud soubor není vyjmut vám, a řekne proč; {{ui:Uložit jako}} vždy funguje pro kopii vlastní.
4. Otevřete panel, vyberte {{ui:Vrátit}} a napište, co se změnilo (`Přesunutí dveří`). Panel říká *vráceno jako A.2*. Soubor ve složce projektu je nyní díl, který jste měli otevřený, a zámek zmizel. Vrácení bez změny ponechá revizi.

Pokud si to rozmyslíte, {{ui:Zrušit vyjmutí}} vrátí soubor zpět bez nové revize.

## 4. Kontrola a uvolnění

1. Vyberte {{ui:Poslat k revizi}}. Stav se změní na **K revizi** a soubor je jen pro čtení.
2. Před schválením vyberte {{ui:Nastavení projektu}} a vypište, kdo smí schvalovat (jedno jméno na řádek), například `Ben` a `Carla`, a zaškrtněte pravidlo, že schvalovatel musí být někdo jiný než autor. Vyberte {{ui:Uložit nastavení}}. Úložiště nyní odmítne kohokoli jiného.
3. Ben (nebo Carla) vybere {{ui:Schválit}} a napíše jméno schvalovatele. Stav se změní na **Uvolněno** a revize na **A**, s *schválil* a jménem. Uvolněný soubor je jen pro čtení. {{ui:Vrátit zpět}} by jej vrátilo do stavu Rozpracováno s uvedením důvodu.

Jméno schvalovatele je jméno zadané v panelu; je to záznam o tom, kdo podepsal, a nikoli důkaz totožnosti.

## 5. Nová revize

1. U uvolněného souboru vyberte {{ui:Nová revize}}. Držíte ji pro další písmeno.
2. Změňte ji a pak {{ui:Vrátit}}. Revize je **B.1**, rozpracováno. Uvolněte ji stejným způsobem a bude z ní **B**. {{ui:Zrušit vyjmutí}} před prvním vrácením ji ponechá na **A**.

Písmena revizí jdou A, B … Z, AA, AB. Pokud vaše norma některá písmena vynechává, projektové nastavení *Použít posloupnost ASME Y14.35* přeskočí I, O, Q, S, X a Z u dalších revizí.

## 6. Podívejte se, co se stalo

Vyberte název souboru a otevřete jeho podrobnosti:

- **{{ui:Historie}}**: každá událost, nejnovější nahoře, s tím, kdo, na kterém počítači a kdy: *Vráceno jako A.2* od Any, *Uvolněno* od Bena a tak dále.
- **{{ui:Revize}}**: tabulka revizí: každá uchovaná revize, s datem, kdo ji vrátil, poznámkou a kdo ji schválil. Úložiště uchovává kopii každé v `.ccvault/revs`.
- **{{ui:Používá}}**: díly sestavy.
- **{{ui:Používá ho}}**: seznam každé sestavy v úložišti, která tento díl obsahuje: změníte držák a víte, které sestavy zkontrolovat.

## Sestavy: co používají a kusovník

Vložte sestavu (`.partcraft.json`, uloženou v režimu Sestava) do složky a přidejte ji. Vyberte její název: **Používá** vypíše díly, které obsahuje, s revizí a stavem každého dílu; **Používá ho** u dílu vypíše každou sestavu, která jej obsahuje. {{ui:Kusovník (CSV)}} uloží celý seznam dílů, úroveň po úrovni, s množstvími, revizemi a stavy, pro tabulkový procesor. Změníte držák a **Používá ho** vám řekne, které sestavy prohlédnout.

## 7. Co Ben vidí, když soubor držíte

Nyní soubor znovu vyjměte a požádejte Bena, aby na svém počítači otevřel stejnou složku projektu a otevřel panel. U řádku souboru uvidí **Vyjmul Ana** na vašem počítači **od** času a žádné tlačítko {{ui:Vyjmout}}. Pokud to i tak zkusí, úložiště odmítne: zámek je soubor, který systém nevytvoří dvakrát, takže dva lidé nemohou soubor držet ani ve stejné zlomku sekundy, když je složka na disku ve Studiu. (V prohlížeči složka poskytuje jen nejlepší úsilí a panel to uvede pod **Složka**.)

Pokud je Ana pryč a Ben soubor potřebuje, {{ui:Zrušit vyjmutí násilím}} jej uvolní. Musí napsat důvod; zapíše se do protokolu spolu s tím, čí vyjmutí to bylo. Pokud projekt uvádí správce, může to udělat jen oni. Vyjmutí starší než limit zastarání (ve výchozím nastavení 14 dní) je označeno *dlouho*. Po přerušení je pozdější vrácení od Any odmítnuto, takže se nemůžete navzájem přepsat.

## 8. Složky v cloudu

Složka v cloudu je složka projektu uložená v cloudovém úložišti vašeho týmu, takže tým nepotřebuje sdílený disk. Ve Studiu, přihlášeni k vašemu účtu CadCraft, panel zobrazuje {{ui:Otevřít cloudovou složku}} vedle {{ui:Vyberte projektovou složku}}. Vyberte jej a zvolte složku, uvedenou jako pracovní prostor / složka. Vlastník pracovního prostoru složku nejprve vytvoří a cloudové úložiště týmu musí být aktivní. Vše výše funguje stejně; zámek vytvoří server, který je přísný napříč lidmi. Pokud nejste přihlášeni, panel vás vyzve k přihlášení. V běžné záložce prohlížeče tlačítko cloudu nabízeno není; použijte Studio.

## Zkuste to

Proveďte osm kroků výše s kopií skutečného souboru. Pro kroky dvou osob potřebujete další osobu nebo dvě okna se dvěma jmény. Pokud to zkoušíte se skutečnou sdílenou složkou, stránka pro testování komunitou obsahuje kontrolu, která se ptá přesně na tohle, a přijímá výsledky.
