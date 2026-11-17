---
title: Závity na hřídelích a dírách, nakreslené nebo namodelované
summary: Vytvořte metrický ISO nebo lichoběžníkový závit na libovolné kulaté ploše, hřídeli nebo díře. Ponechte ho kosmetický pro výkresy, nebo namodelujte skutečný šroubovicový závit pro 3D tisk s vůlí, aby vytištěné díly pasovaly.
keywords: závit, závity, namodelovaný závit, šroubovice, šroub, šroubovitý, matice, hřídel, díra, vnější závit, vnitřní závit, kosmetický závit, metrický závit, lichoběžníkový, acme, vodicí šroub, Tr16x4, M10, 3D tisk, tisk, vůle, uložení, levotočivý, řezaný
from: 4f6401cc
---

{{ui:Závit}} vytvoří závit na kulatých plochách: na vnějšku hřídele (vnější závit) nebo uvnitř díry (vnitřní závit). PartCraft pozná, který je který, podle plochy.

Závit je zpočátku **kosmetický**: plocha zůstane hladká, pohled závit vykreslí jako čárkované kružnice a výkresový list ho poznamená, například „M10×1.5 - 6g, závit délky 20“. Zaškrtněte **Namodelovaný**, abyste do dílu vyřízli skutečný šroubovicový závit, pro 3D tisk nebo pro model, který musí vypadat správně.

## Závit na hřídeli nebo díře

1. Vytvořte hřídel nebo díru ve velikosti závitu: hřídel Ø10 pro šroub M10, nebo díru Ø8.5 (vrtákový průměr) pro matici M10.
2. Klikněte na kulatou plochu, pak zvolte {{ui:Více}} › {{ui:Závit}}. Pokud není vybrána žádná kulatá plocha, PartCraft vás požádá, abyste klikli na plochy, a pak na {{ui:Hotovo}}.
3. V pravém panelu zkontrolujte **Velikost**. **Přizpůsobit ploše** vybere velikost sama: u hřídele tu, jejíž vnější průměr odpovídá hřídeli; u díry tu, jejíž vnitřní průměr jí odpovídá.

Závit začíná na otevřeném konci plochy, kde díl dál nepokračuje podél osy: na volném konci hřídele, v ústí díry. **Začít na druhém konci** to obrátí.

## Nastavení

| Nastavení | Volby | Výchozí |
|---|---|---|
| **Tvar** | ISO metrický (60°), M1.6 až M64 hrubý; lichoběžníkový (Tr, 30°), Tr8×1.5 až Tr60×9 | ISO metrický |
| **Velikost** | Přizpůsobit ploše, nebo jedna velikost ze seznamu | Přizpůsobit ploše |
| **Celá plocha** | Zrušte ji pro zadání **Délky (mm)**, měřené od začátku | Zaškrtnuto |
| **Začít na druhém konci** | Závit vede od druhého konce plochy | Vypnuto |
| **Směr** | Pravotočivý, nebo levotočivý | Pravotočivý |
| **Namodelovaný** | Vyřízne skutečný šroubovicový závit | Vypnuto |
| **Vůle (mm)** | Zobrazí se, když je zaškrtnut Namodelovaný: o kolik je závit hřídele menší a závit díry větší, všude dokola | 0.1 |

Velikost, která na plochu nesedí, se přesto vytvoří, ořízne se na plochu a panel to uvede, například „Hřídel Ø12 mm neodpovídá M10 s Ø10 mm“. Více ploch může sdílet jeden prvek Závit; s **Přizpůsobit ploše** dostane každá vlastní velikost.

## Namodelované závity pro 3D tisk

Namodelovaný závit sleduje standardní základní profil: ISO 68-1 pro metrické závity (ploché vrcholy a paty, boky 60°), ISO 2901 pro lichoběžníkové (boky 30°). **Vůle** posune celý profil dovnitř (u hřídele) nebo ven (u díry), aby se vytištěné díly daly spojit:

- **0.1 až 0.2 mm** vyhovuje většině tiskáren. Nejprve vytiskněte zkušební šroub a matici.
- **0** je standardní profil pro obráběné díly nebo pro kontrolu uložení.

Šroub a matice se stejnou vůlí se po bocích nikdy nedotýkají: mezera mezi nimi je dvojnásobek vůle, všude dokola.

:::tip
Jemná stoupání tisknou špatně: M3 a menší, nebo stoupání pod 0.5 mm, je blízko tomu, co dokáže tryska 0.4 mm vykreslit. Modelujte větší závity a u malých použijte vložku zalisovanou teplem, nebo řezanou díru.
:::

Namodelovaný závit je součástí tělesa: exporty STL, 3MF a STEP jej nesou a nástroj Měřit ho měří. Zpomaluje přepočet dílu: závit M10 délky 20 má asi 150 000 trojúhelníků.

## Řezané díry

Díra **Řezaná (ISO metrická)** má také přepínač **Namodelovaný** se stejnou **Vůlí**. Viz [Vrtání děr a zahloubení v bodech skicy](topic:holes).

## Když se závit nevytvoří

- „Závit patří na kulatou plochu (válec): hřídel nebo díru.“ Vybraná plocha je rovná nebo zakřivená jinak.
- „Žádná standardní velikost nesedí na kulatou plochu Ø0.6 mm: zvolte velikost.“ Přizpůsobit ploše nenašlo nic v rozmezí 12 % plochy. Zvolte **Velikost**, nebo změňte plochu.
- „Plocha, na které tento závit byl, je pryč (…). Vyberte ji znovu.“ Dřívější změna plochu odstranila. Klikněte na {{ui:Vybrat plochy}} a klikněte na plochu znovu.

:::note
Palcové závity (UNC, UNF), trubkové závity, kuželové závity, úběhy závitů a sražené začátky závitů ještě nejsou hotové. Přesné jádro zobrazí namodelovaný závit jako kosmetický.
:::
