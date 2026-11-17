---
title: Dokumenty a revízie (trezor)
summary: Krok za krokom prejdite jednu skutočnú úlohu: dajte priečinok projektu so súčiastkami a zostavami pod kontrolu, vyzdvihnite súčiastku, zmeňte ju, vráťte ju s poznámkou, uvoľnite ju, zistite, čo ju používa, a kusovník, čo druhá osoba vidí, kým je súbor zamknutý, a ako to funguje s cloudovými priečinkami.
keywords: trezor, dokumenty, návod, výukový postup, vyzdvihnutie, vrátenie, revízia, uvoľnenie, schválenie, zámok, história, kde sa používa, kusovník, bom, zostava, cloudový priečinok, priečinok projektu, dvaja ľudia, zdieľaný priečinok
from: 0a5e6983
---

## Čo urobíte

Ste Ana a pracujete na projekte Riverside Clinic spolu s kolegom Benom. Súbory súčiastok a zostáv projektu sú v jednom priečinku, ku ktorému máte prístup oba (zdieľaný disk, synchronizovaný priečinok alebo cloudový priečinok). Na konci má jeden súbor cestu od prvej kópie k uvoľnenej revízii **A**, bol znovu zmenený ako **B.1**, uvidíte, kto čo urobil, a uvidíte, čo vidí Ben, keď máte súbor vyzdvihnutý.

Všetko sa uchováva v skrytom priečinku `.ccvault` vedľa vašich súborov: žiadny server, nič sa nenahráva (výnimkou je cloudový priečinok, pozri posledný krok). Všetky tlačidlá a pravidlá na jednom mieste nájdete v téme *Dokumenty: vyzdvihnutie, revízie a uvoľnenie*, ak ju vaša aplikácia obsahuje.

## 1. Nastavte priečinok projektu

1. V skupine **Súbor** na paneli nástrojov vyberte {{ui:Dokumenty…}}.
2. Vyberte {{ui:Vyberte projektový priečinok}} a zvoľte priečinok, ktorý obsahuje súčiastky a zostavy projektu. (Priečinky projektu fungujú v Studiu a v prehliadačoch, ktoré dokážu otvoriť priečinok, napríklad Chrome a Edge. V iných prehliadačoch to panel uvedie.)
3. Vedľa **Vy:** vyberte {{ui:Zmeniť}} a zadajte svoje meno, `Ana` (ak sa opýta, aj názov tohto počítača). Panel teraz zobrazuje *Vy: Ana na* a váš počítač. Vaše meno sa pripíše ku všetkému, čo urobíte.
4. Vyberte {{ui:Založiť trezor v tomto priečinku}} a zadajte názov projektu `Riverside clinic`. Panel zobrazí *Trezor bol založený pre Riverside clinic.*

## 2. Dajte súbor pod kontrolu

1. Otvorte **Súbory mimo trezora** a vedľa `plates/Bracket.partcraft.json` vyberte {{ui:Pridať}}.
2. Objaví sa pod **Súbory v trezore** s revíziou **A.1** a stavom **Rozpracované**. A.1 je jeho prvá kópia; trezor uchováva kópiu každej revízie.

## 3. Vyzdvihnite, zmeňte, vráťte

1. Vedľa `plates/Bracket.partcraft.json` vyberte {{ui:Otvoriť}}. Súčiastka sa otvorí v PartCraft a panel sa zavrie, aby ste ju videli. Panel znovu otvorte cez {{ui:Dokumenty…}}.
2. Znovu otvorte panel a vyberte {{ui:Vyzdvihnúť}}. Riadok teraz hovorí **Vyzdvihnuté vami**. Zámkový súbor sa vytvoril v `.ccvault/locks`; nikto iný tento súbor nevyzdvihne, kým ho nevrátite.
3. Zmeňte súčiastku: upravte rozmer, pridajte otvor. Uloženie je odmietnuté, ak súbor nie je vyzdvihnutý vami, a panel uvedie dôvod; Uložiť ako vždy funguje pre kópiu vášho vlastného súboru.
4. Otvorte panel, vyberte {{ui:Vrátiť}} a napíšte, čo sa zmenilo (`Presunutý dvere`). Panel zobrazí *vrátené ako A.2*. Súbor v priečinku projektu je teraz súčiastka, ktorú ste mali otvorenú, a zámok zmizol. Vrátenie bez zmeny ponechá revíziu.

Ak si to rozmyslíte, {{ui:Zrušiť vyzdvihnutie}} vráti súbor bez novej revízie.

## 4. Kontrola a uvoľnenie

1. Vyberte {{ui:Poslať na revíziu}}. Stav sa zmení na **Na revíziu** a súbor sa stane len na čítanie.
2. Pred schválením vyberte {{ui:Nastavenia projektu}} a uveďte, kto môže schvaľovať (jedno meno na riadok), napríklad `Ben` a `Carla`, a zaškrtnite pravidlo, že schvaľovateľ musí byť iný ako autor. Vyberte {{ui:Uložiť nastavenia}}. Odteraz trezor sám odmietne každého iného.
3. Ben (alebo Carla) vyberie {{ui:Schváliť}} a napíše meno schvaľovateľa. Stav sa zmení na **Uvoľnené** a revízia na **A**, s údajom *schválil* a menom. Uvoľnený súbor je len na čítanie. {{ui:Vrátiť späť}} by ho vrátilo do stavu Rozpracované s uvedením dôvodu.

Meno schvaľovateľa je meno zadané v paneli; je to záznam o tom, kto podpísal, nie dôkaz totožnosti.

## 5. Nová revízia

1. Na uvoľnenom súbore vyberte {{ui:Nová revízia}}. Držíte ju pre ďalšie písmeno.
2. Zmeňte ju a potom vyberte {{ui:Vrátiť}}. Revízia je **B.1**, rozpracovaná. Uvoľnite ju rovnakým spôsobom a stane sa **B**. {{ui:Zrušiť vyzdvihnutie}} pred prvým vrátením ju ponechá na **A**.

Písmená revízií idú A, B … Z, AA, AB. Ak váš štandard niektoré písmená vynecháva, projektové nastavenie *Použiť postupnosť ASME Y14.35* preskočí I, O, Q, S, X a Z pri ďalších revíziách.

## 6. Pozrite, čo sa stalo

Vyberte názov súboru a otvorte jeho podrobnosti:

- **{{ui:História}}**: každá udalosť, najnovšia prvá, s uvedením osoby, počítača a času: *Vrátené ako A.2* od Any, *Uvoľnené* od Bena a ďalšie.
- **{{ui:Revízie}}**: tabuľka revízií: každá uchovaná revízia s dátumom, osobou, ktorá ju vrátila, poznámkou a osobou, ktorá ju schválila. Trezor uchováva kópiu každej v `.ccvault/revs`.
- **{{ui:Používa}}**: súčiastky zostavy.
- **{{ui:Používa ho}}**: Používa ho zobrazuje každú zostavu v trezore, ktorá túto súčiastku obsahuje: zmeníte konzolu a viete, ktoré zostavy treba skontrolovať.

## Zostavy: čo používajú a kusovník

Vložte zostavu (`.partcraft.json`, uloženú v režime Zostava) do priečinka a pridajte ju. Vyberte jej názov: **Používa** zobrazí súčiastky, ktoré obsahuje, s revíziou a stavom každej; **Používa ho** pri súčiastke zobrazí každú zostavu, ktorá ju obsahuje. {{ui:Kusovník (CSV)}} uloží celý zoznam súčiastok, úroveň po úrovni, s množstvami, revíziami a stavmi, pre tabuľkový procesor. Zmeníte konzolu a **Používa ho** vám povie, ktoré zostavy si pozrieť.

## 7. Čo Ben vidí, keď máte súbor vyzdvihnutý

Teraz súbor znovu vyzdvihnite a požiadajte Bena, aby otvoril ten istý priečinok projektu na svojom počítači a otvoril panel. Na riadku súboru uvidí **Vyzdvihnuté používateľom Ana na** váš počítač **od** času a žiadne tlačidlo {{ui:Vyzdvihnúť}}. Ak to aj tak skúsi, trezor to odmietne: zámok je súbor, ktorý systém nevytvorí dvakrát, takže dvaja ľudia nemôžu mať súbor oba, ani v tej istej chvíli, keď je priečinok na disku v Studiu. (V prehliadači priečinok zabezpečuje iba podľa možností a panel to uvádza pod **Priečinok**.)

Ak je Ana preč a Ben potrebuje súbor, {{ui:Násilne zrušiť vyzdvihnutie}} ho uvoľní. Musí napísať dôvod; ten sa uloží do záznamu spolu s tým, čí bolo vyzdvihnutie. Ak projekt uvádza správcov, môžu to urobiť iba oni. Vyzdvihnutie staršie ako limit zastarania (predvolene 14 dní) je označené *dlho*. Po násilnom zrušení je neskoršie vrátenie Any odmietnuté, takže si navzájom neprepíšete zmeny.

## 8. Cloudové priečinky

Cloudový priečinok je priečinok projektu uložený v cloudovom úložisku vášho tímu, takže tím nepotrebuje zdieľaný disk. V Studiu, prihlásení do vášho účtu CadCraft, panel zobrazuje {{ui:Otvoriť cloudový priečinok}} vedľa {{ui:Vyberte projektový priečinok}}. Vyberte ho a zvoľte priečinok, uvedený ako pracovný priestor / priečinok. Vlastník pracovného priestoru najprv vytvorí priečinok a cloudové úložisko tímu musí byť aktívne. Všetko uvedené vyššie funguje rovnako; server vytvára zámok, ktorý je medzi ľuďmi prísny. Ak nie ste prihlásení, panel vás vyzve na prihlásenie. V bežnej karte prehliadača sa tlačidlo cloudu neponúka; použite Studio.

## Vyskúšajte

Vykonajte osem krokov uvedených vyššie s kópiou skutočného súboru. Kroky pre dvoch ľudí potrebujú druhú osobu alebo dve okná s dvoma menami. Ak to vyskúšate so skutočným zdieľaným priečinkom, stránka Testovanie komunitou obsahuje kontrolu, ktorá sa pýta presne na toto, a prijíma výsledky.
