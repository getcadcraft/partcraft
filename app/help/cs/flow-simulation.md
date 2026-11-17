---
title: Simulace proudění tekutin (studie proudění)
summary: Proudění kanály uvnitř dílu nebo kolem něj v kvádru: vstupy, výstupy, vzduch, voda nebo vaše vlastní tekutina, pak rychlost a tlak na posuvné řezné rovině, proudnice, tlak na povrchu, tlakový spád, bilance hmotnosti, odpor a vztlak a to, co vám laminární metoda řekne a co nikoli.
keywords: proudění, CFD, tekutina, výpočetní dynamika tekutin, simulace proudění, vzduch, voda, viskozita, hustota, Reynoldsovo číslo, laminární, turbulentní, tlakový spád, ztráta výšky, vstup, výstup, víko, zátka, rychlost, průtok, objemový průtok, litry za minutu, statický tlak, proudnice, řezná rovina, rovina řezu, odpor, vztlak, součinitel odporu, součinitel vztlaku, čelní plocha, vnější proudění, vnitřní proudění, potrubí, kanál, rozdělovač, tryska, lattice Boltzmann, reziduum, konvergence
from: 7dc75f29
---

**Studie proudění** (Flow) určuje, jak se tekutina pohybuje kanály uvnitř vašeho dílu (**vnitřní**) nebo kolem něj (**vnější**). Ve výchozím nastavení je **laminární, nestlačitelné, izotermické a newtonovské**: hladké proudění tekutiny, jejíž hustota a viskozita zůstávají neměnné, bez tepla, bez turbulence a bez gravitace. K dispozici je také **experimentální** turbulentní model, vhodný jen pro kvalitativní vzorce (viz níže). Pracuje nad pojmenovanými plochami, které dílu přiřazuje síťové jádro (viz [Síťové jádro (mesh kernel)](topic:solid-kernels)).

Vyberte **Simulace** v poli **Pracovní prostor**, stiskněte **Nová studie**, pokud žádná není, a nastavte **Typ** na **Proudění (CFD)**. **Model proudění** je **Laminární** (výchozí) nebo **Turbulentní (Spalart–Allmaras, experimentální)**: viz **Turbulentní proudění (experimentální)** níže. Konstrukční nastavení studie se zachovají, takže se můžete vrátit. Nastavení proudění se ukládá do souboru dílu a každou změnu lze vrátit zpět.

## Výběr tekutiny a buněk

- **Tekutina**: vzduch nebo voda při 20 °C, nebo **Vlastní** s vlastní hustotou (kg/m³) a dynamickou viskozitou (Pa·s). Vzduch používá zákon ideálního plynu a Sutherlandův zákon (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); voda používá hodnoty IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Velikost buňky**: prostor tekutiny se vyplní stejně velkými krychlemi. Pokud pole necháte prázdné, velikost se určí automaticky a panel zobrazí mřížku. Každý otvor a kanál by měl mít **alespoň 8 až 10 buněk napříč**, aby výsledky byly použitelné; menší buňky jsou přesnější, ale pomalejší (dvakrát jemnější znamená zhruba šestnáctinásobek práce).
- **Stěny**: **Interpolované** sledují zakřivené stěny mezi buňkami (výchozí); **Odraz zpět** bere stěny jako schodovitý tvar krychlí.

## Proudění uvnitř dílu

Prostor tekutiny musí být uzavřený. V panelu přidejte **Vstup** a **Výstup** a pak klikněte na jejich plochy v pohledu:

1. **Rovná plocha kolem otvoru** — okraj na konci trubky, plocha přípojky. PartCraft tam otvor uzavře víkem. Každý otvor v dané ploše patří tomuto vstupu nebo výstupu, takže pokud se vstup a výstup otevírají na téže ploše, namodelujte místo toho tenkou zátku přes jeden z nich.
2. **Vnitřní plocha zátky** — jako v jiných CAD nástrojích: namodelujte tenkou desku (vytažení) přes otvor a vyberte její plochu, která se dotýká tekutiny.

U vstupu nastavte **rychlost** (m/s, rovnoměrnou přes celý otvor, směrem do dílu) nebo **objemový průtok** (L/min). U výstupu nastavte **statický tlak** (Pa, relativní). Pokud je některý otvor ponechán otevřený nebo je stěna tenčí než buňka, vnitřek se spojí s vnějškem a výpočet se zastaví s hlášením „Uzavřený prostor tekutiny nenalezen“.

## Proudění kolem dílu

Nastavte **Proudění** na **Vnější**, **Rychlost**, směr, kam proudí, a jak daleko kvádr sahá proti proudu, po proudu a do stran (prázdné: 1, 3 a 1násobek největšího rozměru dílu). Plocha kvádru, kterou proudění vstupuje, je vtok, plocha, kterou opouští, je výtok s 0 Pa, a plochy podél proudu jsou skluzové. Příliš malý kvádr protlačí proudění kolem dílu a zvýší odpor. **Referenční plocha** je plocha, kterou používají součinitele odporu a vztlaku (prázdné: čelní plocha dílu při pohledu ve směru proudění); vztlak se měří ve směru +Y, pokud nezvolíte jiný směr.

## Výpočet a čtení výsledků

Stiskněte **Vyřešit**. Výpočet běží na pozadí s počtem kroků, reziduem a grafem rezidua; **Zastavit** jej ukončí. Zastaví se, když je reziduum (o kolik se pole rychlostí mění za krok) pod cílovou hodnotou a tlakový spád nebo odpor se ustálí. Pokud dosáhne limitu kroků dříve, panel červeně zobrazí **Nekonvergováno**: čísla jsou poslední stav, ne ustálená odpověď.

- **Řezná rovina**: rychlost nebo statický tlak na rovině procházející modelem; zvolte její normálu (X, Y nebo Z) a posuvníkem rovinu posouvejte. Najetím na ni zobrazíte hodnoty.
- **Proudnice**: od vstupů (vnitřní) nebo z hřebenu přes vtokový konec kvádru v řezné rovině (vnější).
- **Díl**: plný, průhledný (aby byla vidět rovina uvnitř), s tlakem na povrchu, nebo skrytý.
- **Tabulka**: Reynoldsovo číslo, tlakový spád (střední statický tlak na vstupech minus střední tlak na výstupech), průtok a střední tlak každého otvoru, síla na díl, odpor a vztlak s jejich součiniteli a referenční plochou (vnější), bilance hmotnosti (přítok proti odtoku), síť a řešič.

## Turbulentní proudění (experimentální)

**Model proudění › Turbulentní (Spalart–Allmaras, experimentální)** řeší časově zprůměrované turbulentní proudění (ustálené RANS): model Spalart–Allmaras dává vířivou viskozitu v každé buňce a buňky u stěn používají Spaldingův zákon stěny místo rozlišení tenké vrstvy. Je všude plně turbulentní (bez laminárních oblastí a bez přechodu).

**Nesplnil kontrolní testy přesnosti.** Panel, výsledky i tabulka to u každé turbulentní studie uvádějí a varování nelze zavřít. Používejte jej pro **kvalitativní vzorce proudění** — kde se proudění odtrhává, víří nebo zrychluje — **ne pro konstrukční čísla**.

| Kontrola | Reference | Výsledek |
|---|---|---|
| Tření v rovném kanálu, první buňka při y⁺ 49 / 98 | Deanova korelace | +3.3 % / +4.7 % |
| Kanál s rozlišenou stěnou (y⁺ ≈ 3), Re_τ 180: objemová rychlost | Moser, Kim & Mansour DNS | −1 % |
| Rovný kanál, y⁺ 7–15 nebo 190–380 | Deanova korelace | +9 až +22 % |
| Tření v potrubí přes buňky krychlí, plně vyvinuté, 10–30 buněk napříč | Colebrook | o 30 až 34 % příliš vysoké |
| Znovu připojení za zpětným schodem, 6–14 buněk na výšku schodu | Driver & Seegmiller, 6.26 výšky schodu | o 21 až 39 % příliš krátké |

Výsledky se se jemnějšími buňkami zlepšují jen pomalu. Po výpočtu tabulka zobrazí **y⁺ první buňky** (min, průměr a max přes buňky u stěn) a upozorní, pokud je mimo kontrolovaný rozsah 1 až 400; cílte na zhruba 30 až 300. **Doba výpočtu:** automatické buňky jsou dimenzovány tak, aby trvaly nanejvýš několik minut na jednom jádru notebooku (panel zobrazí nejhorší případ pro mřížku a limit kroků; malé potrubí se ustálí za méně než 20 sekund). Zmenšení velikosti buňky na polovinu stojí zhruba šestnáctinásobek času. Síly na díl plynou z bilance hybnosti přes otvory nebo kvádr.

**Zatím hotová práce:** buňky u stěn nyní odpovídají svému smykovému napětí podle zákona stěny, což snížilo chyby potrubí a schodu na výše uvedené hodnoty, aniž by se změnily výsledky rovného kanálu. Nebylo to dost pro konstrukční čísla. Dalším krokem jsou jemnější buňky u stěn.

## Co vám řekne a co ne

- **Laminární model** je pouze laminární. V potrubích proudění přechází do turbulence nad Reynoldsovým číslem zhruba 2 000 až 4 000; za tupými tělesy se úplav začne odlučovat do vírů nad zhruba 50. Panel na tyto body upozorní. Laminární výsledek pro turbulentní proudění podhodnotí tlakový spád a špatně určí odpor. Experimentální turbulentní model (výše) pokrývá turbulentní proudění kvalitativně; jeho čísla zatím nejsou spolehlivá.
- **Metoda:** lattice Boltzmann (D3Q19, kolize se dvěma relaxačními časy), spuštěná do ustáleného stavu. Uvnitř je mírně stlačitelná; PartCraft udržuje změny hustoty na několika procentech. Pokud je proudění pro buňky příliš rychlé, nespustí se a řekne, o kolik musí být buňky menší.
- **Ověřeno proti:** Hagen–Poiseuilleovu proudění v potrubí procházejícím dílem (gradient tlaku do 1 % při 20 buňkách napříč), dutině řízené víkem podle Ghia et al. (do 0.75 % rychlosti víka) a válcovému benchmarku Schäfer–Turek (odpor do 1 % při 10 buňkách na průměr).
- Nemodelováno: přenos tepla, turbulence s konstrukční přesností (turbulentní model je experimentální), volné hladiny, kavitace, gravitace, pohyblivé díly, nenewtonovské tekutiny, drsné stěny. Laboratorní sestavení: důležité výsledky ověřte jiným způsobem.
