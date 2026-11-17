---
title: Vrtání děr a zapuštění v bodech skici
summary: Umístěte body skici na plochu a vytvořte jednoduché, zapuštěné, záhlubené nebo závitové (ISO metrické) díry v každém bodě, nastavte průměr a hloubku a opravte díry, které vrtají špatným směrem.
keywords: díra, průvodce dírou, vrtání, modelovaný závit, 3D tisk, zapuštění, válcové zahloubení, záhlubení, závitová díra, závit, vrták na závit, metrický závit, M6, skrz vše, slepá díra, šroubová díra, body, středy děr
from: 8e1eef83
---

{{ui:Hole}} vyvrtá jednu díru v každém volném bodě skici. Volný bod je ten, který vytvořil nástroj Bod, ne konec úsečky ani střed kružnice.

## Vrtání děr v ploše

1. Klikněte na rovnou plochu, do které chcete vrtat, a pak vyberte {{ui:Sketch on this face}}.
2. Stiskněte {{key:P}} a klikněte, kam má každá díra přijít. Pokud záleží na jejich poloze, okótujte body od hran nebo počátku (viz [Plné určení skici](topic:relations-dimensions)).
3. Vyberte {{ui:Exit}}.
4. Vyberte {{ui:Hole}}.

Díry procházejí dílem, 6 mm v průměru. Pravý panel ukazuje **Díry**: kolik jich vzniklo, „jedna na bod skici“.

**Jedna díra, rychle:** klikněte na rovnou plochu, kam má díra přijít, a vyberte {{ui:Hole here}} v pravém panelu. PartCraft přidá skicu na plochu s jedním bodem v místě kliknutí a průchozí díru v dílu, v jednom kroku. Hned napište číslo a stiskněte {{key:Enter}} pro její průměr. Chcete-li ji umístit přesně, otevřete novou skicu a okótujte bod.

**Která skica se použije:** skica, kterou jste právě zavřeli, nebo vybraná; jinak nejnovější nepoužitá skica s volnými body. Pokud žádná není: „Nejprve vytvořte skicu s body tam, kde mají díry být (Skica na ploše, pak Bod).“

## Nastavení

| Nastavení | Volby | Výchozí |
|---|---|---|
| **Typ** | Jednoduchá, Zahloubení, Záhlubení, Závit (ISO metrický) | Jednoduchá |
| **Průměr (mm)** | Průměr díry | 6 |
| **Skrz vše** | Zaškrtnuto: úplně skrz díl. Zrušte pro slepou díru | Zaškrtnuto |
| **Hloubka (mm)** | Zobrazí se, když není zaškrtnuto Skrz vše | 10 |
| **Průměr zahloubení ⌀** | Zobrazí se u Zahloubení: průměr širšího vybrání | 11 |
| **Hloubka zahloubení** | Zobrazí se u Zahloubení | 6 |
| **Obrátit směr** | Vrtá na druhou stranu roviny skici | Vypnuto |

Díry se vrtají do materiálu, kolmo k rovině skici. Hloubka slepé díry se měří od roviny skici; její dno je rovné.

## Zapuštěná šroubová díra

1. Vytvořte díry, jak je uvedeno výše.
2. Nastavte **Typ** na **Zahloubení**.
3. Nastavte **Průměr (mm)** na `6.6` (vůle pro šroub M6), **Průměr zahloubení ⌀** na `11` a **Hloubku zahloubení** na `6.5`.

Zahloubení musí být širší než díra („Zahloubení musí být širší než díra.“) a u slepé díry mělčí než díra („Zahloubení musí být mělčí než díra.“).

## Roztečná kružnice

U děr rovnoměrně rozmístěných kolem středu vytvořte **jednu** díru a naplňte ji vzorem: vyberte prvek Díra a pak zvolte {{ui:Circular}} (viz [Prvky vzoru a zrcadlení](topic:patterns-mirror)). Vzor se přizpůsobí, když změníte velikost díry.

## Když díry jdou špatným směrem

- „Na této straně skici není nic, co by se dalo vrtat. Zkuste obrátit směr.“ Skica leží na vzdálené straně materiálu. Zaškrtněte **Obrátit směr**.
- „Umístěte body skici tam, kde mají být díry (nástroj Bod), a pak vytvořte díru.“ Skica nemá volné body. Konce úseček ani středy kružnic se nepočítají.
- „Zatím není co vrtat.“ Díra potřebuje těleso. Nejprve vytvořte výstupek.

## Díry v sestavách

Každá díra má osu. V sestavě může **Vystředit na** umístit kloub na osu díry, uvedenou jako „Díra1, díra 2“, takže kolík nebo šroub se s ní zarovná. Viz [Sestavení sestavy](topic:build-assembly).

## Zapuštěné díry

Nastavte **Typ** na **Záhlubení**, pak **Průměr záhlubení ⌀** (u povrchu) a **Úhel záhlubení**: 90° (ISO metrické šrouby se zapuštěnou hlavou) nebo 82° (palcové šrouby). Průměr záhlubení čerpejte z dat výrobce šroubů (o trochu víc než průměr hlavy šroubu). Plocha kužele se v panelech jmenuje „záhlubení“.

## Závitové díry

Nastavte **Typ** na **Závit (ISO metrický)** a zvolte **Závit**, M2 až M24 hrubý. Díra se vyvrtá na velikost vrtáku pro závit z tabulky níže (jmenovitý průměr minus stoupání, na řadu vrtáků, jak ISO 2306 uvádí pro závit 6H); pole **Průměr (mm)** se nepoužije. U slepé díry **Hloubka závitu (mm)** nastaví, jak hluboko závit sahá.

| Závit | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Stoupání | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Průměr vrtáku pro závit ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Závit je zpočátku **kosmetický**: model má vyvrtanou díru, pohled kreslí hlavní průměr závitu čárkovanými kružnicemi a výkresový list nese popisku jako poznámku, například „4× M8×1.25 - 6H, závit skrz“. STEP exportuje jen vyvrtanou díru.

Zaškrtněte **Modelovaný**, chcete-li do díry vyříznout skutečný šroubovicový závit pro 3D tisk. **Vůle (mm)** jej zvětší všude kolem, aby tištěný šroub pasoval: 0.1 až 0.2 mm vyhovuje většině tiskáren. Popisek pak končí „(modelovaný)“. Viz [Závity na hřídelích a otvorech, kreslené nebo modelované](topic:threads), které také umisťuje závity na hřídele.

:::note
Protivrtané díry, palcové závity a trubkové závity zatím nejsou hotové.
:::
