---
title: Vytvoření tvaru z zatížení (generativní)
summary: Vyberte plochy, které jsou podepřené a zatížené, oblasti, které mají zůstat, a oblasti, které mají zůstat volné, cílové objemy a materiály, a vygenerujte výsledky: nejtužší tvary nalezené pro každý objem, znovu ověřené jako tělesa, porovnané v tabulce a stažené jako STL, STEP nebo jako nový díl.
keywords: generativní návrh, optimalizace topologie, SIMP, odlehčení, mřížka, organický tvar, výsledky, porovnání, hmotnost, objemový podíl, zachovat, ponechat plný, překážka, ponechat volné, návrhový prostor, minimální tloušťka prvku, STL, 3D tisk
from: 5b91fa8e
---

Pracovní prostor Generativní odstraní materiál, který zatížení nepotřebují. Určíte, kde je díl podepřen a zatížen, co musí zůstat a co musí zůstat volné; PartCraft najde nejtužší tvar pro každý cílový objem (**optimalizace topologie**), každý znovu ověří jako těleso se skutečným materiálem a výsledky zobrazí vedle sebe. Pracuje nad pojmenovanými plochami, které dílu přiřazuje síťové jádro (viz [Síťové jádro (mesh kernel)](topic:solid-kernels)).

Vyberte **Generativní** v poli **Pracovní prostor**. Váš díl se nemění; studie se ukládá do souboru dílu.

## Nastavení studie

1. Stiskněte **Nová studie** v pravém panelu.
2. **Prostor**: *Díl tak, jak je* odebírá materiál z vašeho dílu; *Kvádr kolem dílu* vytvoří tvar uvnitř kvádru většího než díl o **Okraj kvádru**.
3. **Velikost prvku**: nechte prázdné pro automatickou velikost (asi 8 000 krychlí), nebo zadejte vlastní. Jemnější velikosti dají jemnější tvary a déle trvají.
4. **Minimální prvek**: prvky tenčí než zhruba dvojnásobek této hodnoty se nevytvoří. Prázdné znamená jeden a půl krychle.
5. Zaškrtněte jeden až šest **Cílových objemů** (podíl návrhového prostoru, který tvar smí vyplnit) a jeden až čtyři **Materiály**. Každý objem se vygeneruje jednou; každý materiál se ověří na tomto tvaru (nejtužší tvar na materiálu nezávisí, ale jeho hmotnost, napětí a bezpečnostní součinitel ano).

## Cíle

- {{ui:Fixed}}: klikněte na plochy, které jsou podepřené. **Plocha bez tření** z nabídky **Přidat** v panelu podepře plochu jen napříč sebou (použijte ji pro roviny symetrie).
- {{ui:Force}}: klikněte na zatížené plochy a pak zadejte celkovou sílu a zvolte její směr v panelu. **Tlak** je v nabídce **Přidat**.
- {{ui:Preserve}}: klikněte na plochy, jejichž okolí musí zůstat plné, a nastavte, jak hluboko (**Zachovat plné do**) — například kolem děr pro šrouby. Plochy, které podepíráte nebo zatěžujete, se vždy zachovají.
- {{ui:Obstacle}}: klikněte na plochy, jejichž okolí musí zůstat prázdné, a nastavte, jak daleko (**Zachovat prázdné do**) — místo pro hřídel nebo nástroj.

Po kliknutí na plochy stiskněte **Hotovo s výběrem** nebo {{key:Esc}}. Zelené a červené odstíny ukazují oblasti.

## Generování a porovnání

Stiskněte {{ui:Generate}}. Panel ukazuje průběh a zbývající čas; **Zastavit** zruší výpočet. Každý výsledek se objeví v tabulce **Výsledky**: cílový objem, materiál, **hmotnost**, **největší napětí**, **největší posunutí** a **bezpečnostní součinitel** (mez kluzu ÷ napětí), vše z nového výpočtu dokončeného tvaru jako plné krychle se skutečným materiálem.

Vyberte výsledek a zobrazí se v pohledu (díl je skrytý; zaškrtněte **Zobrazit díl skrz něj**, abyste viděli obojí). Pod tabulkou: kolik iterací trvalo a zda se ustálily, jeho tuhost jako tělesa oproti vlastnímu údaji optimalizátoru a jeho plocha.

## Použití výsledku

- **STL**: uzavřená trojúhelníková síť, připravená pro 3D tisk.
- **STEP (z plošek)**: stejný povrch jako těleso STEP tvořené rovinnými plochami.
- **Nový soubor dílu**: díl PartCraftu, jehož jediným prvkem je výsledek jako importované těleso. Otevřete jej, abyste na něm kreslili skicu, vyřízli díry nebo jej zkontrolovali v Simulaci. Je z plošek (tisíce rovinných ploch), ne upravitelný tvar.
- **Přidat k tomuto dílu** připojí výsledek k dílu; je zapnuté jen pro návrhový prostor kvádru (když je prostorem samotný díl, výsledek leží uvnitř dílu).

**Nový soubor dílu** a **Přidat k tomuto dílu** zatím nejsou v této verzi hotové: výsledek se stane importovaným tělesem, což vyžaduje přesné jádro. Stažení STL a STEP (z plošek) funguje.

## Jak tomu důvěřovat

- Optimalizuje **tuhost** pro daný objem. Zatím neexistují limity napětí ani výrobní pravidla (převisy, směry frézování, minimální velikosti děr): zkontrolujte zvolený výsledek v [Simulaci](topic:simulation) a upravte jej.
- Tenké prvky široké jeden nebo dva krychle jsou aproximace: u štíhlých dílů použijte menší velikost prvku.
- Metoda je SIMP s filtrem hustoty, prahovou projekcí a aktualizacemi podle kritérií optimality; uváděné napětí a průhyb jsou výsledku jako krychlí, což je poctivé, ale hrubé u ostrých rohů.

## Související

- [Kontrola napětí a průhybu (Simulace)](topic:simulation)
- [Export pro tisk, STEP a DXF](topic:export-files)
- [Co ještě není hotovo](topic:not-built-yet)
