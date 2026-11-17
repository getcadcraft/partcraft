---
title: Volné tvary v pracovním prostoru Tvar a prvky povrchů
summary: Tlačte a táhněte hladkou řídicí klec v pracovním prostoru Tvar, ostré hrany, symetrie, kontrola a dokončení na přesné těleso nebo plochu, pak záplaty, lofty, sešívání, ztloustnutí, odsazení, prodloužení a oříznutí ploch v Návrhu. Co je přesné a co je aproximované.
keywords: tvar, volný tvar, T-spline, subdivision, Catmull-Clark, klec, quadball, ostrá hrana, symetrie, zebra, zakřivení, plocha, záplata, výplň, lofting plochy, sešít, sešívání, ztloustnutí, odsazení plochy, prodloužení, oříznutí
from: 0d326ef4
---

:::note
**Ještě není hotovo v této verzi.** Dokončení tvaru do dílu a prvky povrchů vyžadují přesné geometrické jádro, které tato verze PartCraftu nemá: každý díl staví se síťovým jádrem. [Co ještě není hotovo](topic:not-built-yet) vysvětluje, co dělat místo toho. Zbytek této stránky popisuje, jak tyto funkce fungují s přesným jádrem.
:::

Pracovní prostor **Tvar** vytváří organické tvary. Upravujete **klec**, hrubou síť rohů, hran a stěn. Tvarem je hladká plocha, kterou klec řídí (její limitní plocha Catmull–Clark), takže posun jednoho rohu plochu jemně ohne kolem něj. Když to vypadá správně, **Povrch** přidá tvar do historie dílu jako prvek *Tvar* a přesné jádro z něj udělá skutečné B-spline plochy. Pak jej můžete zaoblit, rozříznout, spojit s jinými prvky a exportovat jako STEP.

Vyberte **Tvar** v seznamu **Pracovní prostor** vlevo na panelu nástrojů.

## Začátek klece

1. V pravém panelu nastavte **Velikost** a **Dělení**. Dělení je počet stěn na každé straně.
2. Klikněte na {{ui:Box}}, {{ui:Quadball}} nebo {{ui:Plane}} na panelu nástrojů. Panel má také **Válec**, **Torus** a **Stěny kliknutím**.

- **Čtyřkulová** je krabicová klec, která je tak přizpůsobená, že její rohové body leží na kouli. Mezi těmito body plocha leží o něco uvnitř koule: při 2 dělení je objem asi o 0.4 % menší.
- **Rovina** je otevřená, takže se stane tělesem plochy (viz „Prvky povrchů v Návrhu“ níže).
- **Stěny kliknutím**: kliknutím na 4 body na horní (podložní) rovinu nebo na rohy klece vytvoříte jednu stěnu. Stěny, které sdílejí rohy, se spojí. Po 3 bodech stiskněte {{key:Enter}} pro trojúhelník, nebo {{key:Esc}} pro ukončení.

Nedokončená klec se ukládá se souborem dílu, takže můžete soubor zavřít a pokračovat později.

## Výběr a posun

- Klikněte na roh, hranu nebo stěnu klece. {{key:Shift}}+klik položky přidá nebo odebere. {{key:Esc}} zruší výběr.
- Uprostřed výběru se objeví ovladač. Přetažením šipky posunete podél ní, přetažením čtverce v její rovině. Stiskněte {{key:W}} pro posun, {{key:E}} pro otáčení a {{key:R}} pro měřítko, nebo použijte tlačítka na panelu. {{ui:Gizmo}} na panelu nástrojů přepíná mezi nimi.
- **Měkký přechod** (mm) také táhne rohy v dané vzdálenosti a plynule klesá k nule na okraji této vzdálenosti.
- Každé přetažení je jeden krok zpět: {{key:Ctrl+Z}} a {{key:Ctrl+Y}} fungují obvyklým způsobem.

## Změna klece

Tlačítka **Úpravy** na panelu pracují s výběrem:

| Tlačítko | Co dělá |
|---|---|
| {{ui:Extrude}} | Vybrané stěny se posunou o **Vzdálenost vytažení** podél svých normál, s novými bočními stěnami. Vybrané otevřené hrany vytvoří nové stěny směrem ven. |
| {{ui:Edge loop}} / Vložit hranovou smyčku | Rozdělí pás čtyřúhelníkových stěn, který protíná vybranou hranu, v polovině. Více smyček dává těsnější křivky. |
| Vložit bod | Přidá roh uprostřed vybrané hrany. |
| Rozdělit | Rozdělí každou vybranou stěnu na čtyřúhelníkové stěny kolem jejího středu. |
| Most | Spojí dvě vybrané stěny nebo dva otvory (vyberte jednu otevřenou hranu na každé) trubicí ze stěn. Obě musí mít stejný počet hran. |
| Vyplnit díru | Uzavře otvor přes vybranou otevřenou hranu jednou stěnou. |
| Svařit | Sloučí vybrané rohy v jeden, uprostřed mezi nimi. |
| Zploštit | Přesune vybrané rohy na rovinu, která je nejlépe vystihuje. |
| Smazat | Odstraní vybrané stěny, hrany (dvě stěny se sloučí) nebo rohy. |

## Ostré hrany, symetrie a zobrazení

- {{ui:Crease}} zostří vybrané hrany. **Váha ostré hrany** 10 je plně ostrá. Menší váha zůstane ostrá pro tolik kroků zjemnění a pak změkne, což dá těsné zaoblení místo tvrdého přehybu. **Zrušit ostrost** je opět vyhladí. **Ostrý vrchol** připne roh tak, aby plocha jím prošla bodem.
- **Symetrie** zrcadlí klec přes X, Y nebo Z = 0. Ponechá kladnou stranu, zrcadlí ji a spojí obě poloviny. Poté se úprava na jedné straně provede na obou. Rohy na zrcadlové rovině na ní zůstávají.
- {{ui:Display}} přepíná mezi **Hladké** (plocha, kterou se prvek stane) a **Kvádr** (samotné stěny klece).
- **Analýza**: **Zebrové pruhy** odrážejí pruhované světlo z aktuálního pohledu. Na hladké ploše se plynule ohýbají a na ostré hraně se přetrhnou. **Střední zakřivení** vybarví konvexní oblasti červeně, konkávní modře a rovné bíle. Měří se na zobrazené síti podle kotangensového vzorce, takže je to vodítko, ne měření.

## Kontrola a dokončení

- **Přesná kontrola** převede klec v přesném jádru, aniž by změnila váš díl. Ohlásí, kolik B-spline záplat klec tvoří, kolik jich je přesných a zda je výsledek uzavřené a platné těleso, a jeho objem.
- {{ui:Finish}} přidá prvek *Tvar* do historie nebo aktualizuje tvar, který jste upravovali, a vrátí vás do Návrhu. Uzavřená klec se stane tělesem. Její **Operace** v panelu Návrhu může být Nové těleso, Spojit, Vyříznout nebo Průnik. Otevřená klec se stane tělesem plochy.
- Tvar můžete změnit později: vyberte jej v historii a klikněte na **Upravit v Tvaru**. Vytvořené těleso je při úpravě klece skryto.
- **Zahodit** klec zruší, aniž by se dotklo historie.

## Co je přesné a co je aproximované

Každá čtyřúhelníková stěna klece, zjemněná tam, kde je potřeba, se stane jednou bikubickou B-spline záplatou.

- Kde jsou všechny rohy stěny *pravidelné* (ve plošce se sejdou čtyři hrany, nebo tři na otevřené hraně či podél ostré hrany), je záplata **přesně** totožná s plochou subdivision. Testy to ověřují na 1e-9 mm.
- Kolem **výjimečného bodu** (sejde se tři, pět nebo více hran, roh trojúhelníkové nebo pětiúhelníkové stěny, nebo konec ostré hrany) neexistuje přesná polynomiální záplata. Tam záplata převezme přesný bod a tečnou rovinu v daném rohu a křivky hran sousedů, takže záplaty na sebe navazují bez mezery. Tečná spojitost přes hrany, které se v bodě setkávají, je přibližná. Panel Tvaru a panel prvku udávají největší úhel, obvykle pod 2°. Vyšší **Úroveň** v panelu prvku tyto záplaty zmenší a přiblíží.
- Ostré hrany jsou skutečné hrany tělesa, takže je můžete zaoblit.
- Každá záplata je vlastní plochou, takže tvar má mnoho ploch a mezi nimi se kreslí čáry.

## Prvky povrchů v Návrhu

Příkazy pro plochy jsou v nabídce {{ui:More}} v Návrhu, mezi prvky. Potřebují přesné jádro. Tělesa ploch se kreslí průhledně modře. Nejsou součástí tělesa, dokud je neztloustnete nebo nesešijete.

| Příkaz | Co dělá |
|---|---|
| Záplata | Vyplní uzavřenou smyčku hran. Nejprve **Shift**+klik na hrany tělesa, nebo vyberte těleso plochy a vyplňte jeho otvor. **Tečna (G1)** napojí záplatu na tuto plochu hladce. |
| Lofting plochy | Plocha procházející jedním řetězcem křivek na skicu (otevřený nebo uzavřený) v pořadí historie. |
| Sešít | Sešije tělesa ploch podél jejich společných hran. Pokud se uzavřou, výsledkem je těleso s Operací jako u jiných prvků. |
| Ztloustnout | Dá tělesu plochy tloušťku: podél jeho normály, proti ní, nebo polovinu na každou stranu. Výsledkem je těleso. |
| Odsazení plochy | Kopie tělesa plochy posunutá podél jeho normál. Originál zůstane. |
| Prodloužit plochu | Zvětší jednoplošnou plochu za hrany, které vyberete. |
| Oříznout plochu | Rozřízne těleso plochy tam, kde je protíná jiné těleso plochy nebo těleso. Klikněte na **Vyberte bod na části**, abyste zvolili, která část se zachová, nebo zachovejte všechno ostatní. |

Sešít, Ztloustnout, Prodloužit a Oříznout spotřebují těleso plochy, ze kterého začínají. Další prvky používají nové.

Současná omezení: tvary s několika oddělenými uzavřenými částmi se nepřevedou na jedno těleso; pravidelné oblasti se nesloučí do větších ploch; a viz [Co ještě není hotovo](topic:not-built-yet).
