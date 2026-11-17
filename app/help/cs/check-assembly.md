---
title: Kontrola sestavy na kolize a pohyb
summary: Najděte díly, které se překrývají, pomocí Kolize, přetažením libovolné hodnoty vazby sledujte pohyb a projeďte vazbu celým rozsahem, abyste našli místa, kde se díly srazí.
keywords: průnik, detekce průniku, kolize, střet, překryv, shoda závitu, nesoulad hloubky závitu, dotýkající se plochy, skrýt, filtr, pohyb, studie pohybu, projetí, rozsah pohybu, kontrola
from: 9c98db46
---

Dvě kontroly běží na dílech, jak jsou umístěny: **Kolize** hledá překrývající se materiál právě teď a **kontrola pohybu** posune jednu vazbu celým rozsahem a hledá překryvy během pohybu.

## Kontrola průniků

1. Otevřete nebo vytvořte sestavu (viz [Sestavení sestavy pomocí vazeb](topic:build-assembly)).
2. Zvolte {{ui:Kolize}}.

Stavový řádek hlásí výsledek:

- „Žádný průnik mezi 3 díly (… ms)." Nic se nepřekrývá.
- „Průnik: Flange1 a Flange2: Překrytí, 2.5 mm³." Každá dvojice, o jaký druh výsledku jde, a objem, který sdílejí.

Pole **Sestava** vlevo zobrazuje **Průnik**: „Žádný", „2 výsledky" (zobrazené), nebo „Nezkontrolováno". Když nic není vybráno, pravý panel vypíše každý výsledek pod **Průnik**.

Výsledek se vymaže vždy, když se sestava změní. Po přesunu vazby spusťte {{ui:Kolize}} znovu. Každá dvojice dílů se kontroluje proti každé jiné, takže velké sestavy trvají déle.

### Druhy výsledků

| Druh | Znamená |
|---|---|
| **Překrytí** | Díly sdílejí objem: skutečná kolize. |
| **Nesoulad hloubky závitu** | Sdílený objem je uvnitř závitu jednoho dílu, ale za závitem druhého: šroub zašroubovaný hlouběji, než je jeho díra, nebo hladký dřík v řezané díře. |
| **Shoda závitu (kosmetické závity)** | Sdílený objem je uvnitř závitů obou dílů: šroub v řezané díře. Kosmetické závity se kreslí v plné velikosti závitu, takže se vždy trochu překrývají. |
| **Dotýkající se plochy** | Žádný sdílený objem, ale plochy jsou v kontaktu (do 0.001 mm). |

Modelované závity (viz [Závity na hřídelích a vrtáních, nakreslené nebo modelované](topic:threads)) jsou skutečná geometrie: to, co sdílejí, je **Překrytí**.

### Skryjte, co nepotřebujete vidět

Pod **Průnik** má **Zobrazit** pole pro každý druh: odškrtněte **Shoda závitu** a **Dotýkající se plochy**, abyste viděli jen kolize, na kterých záleží. **Skrýt tuto dvojici** vedle výsledku skryje tu dvojici dílů bez ohledu na druh. Skryté výsledky se počítají („2 výsledky skryty těmito filtry"), a **Znovu zobrazit skryté dvojice** je vrátí. Stavový řádek počítá i skryté výsledky.

Filtry se ukládají se sestavou a každá změna je jeden krok {{key:Mod+Z}}. **Projet vazbu na kolize** (níže) je také používá. Sestava s filtry se uloží jako verze 4, kterou starší verze PartCraftu odmítnou otevřít, místo aby filtry ztratily.

## Sledování pohybu

1. Vyberte vazbu, která se pohybuje (jakoukoli kromě pevné), v seznamu vlevo.
2. Přetáhněte posuvník pod jednu její hodnotu, například **Úhel (°)** nebo **Odsazení (mm)**. Díl se pohybuje, jak táhnete.
3. Pusťte. Nová poloha se zachová a lze ji vrátit pomocí {{key:Mod+Z}}.

Můžete také napsat úhel nebo odsazení do pole a stisknout {{key:Enter}}.

Vazba na uzavřené smyčce (mechanismu) pohybuje celou smyčkou: hodnota, kterou přetáhnete, se zachová a ostatní vazby smyčky ji sledují (viz [Uzavřené smyčky](topic:build-assembly#closed-loops-linkages)).

## Projetí vazby na kolize

1. Vyberte vazbu, která se pohybuje.
2. U vazby s několika hodnotami (válcová, rovinná, kulová, čep v drážce) zvolte, kterou projet, v **Kontrolovat pohyby**.
3. Zvolte {{ui:Zkontrolovat pohyb na kolize}}.

PartCraft posune tu hodnotu přes 25 poloh v 24 stejných krocích, ostatní zůstanou beze změny: úhel od −180° do 180° (náklon od −90° do 90°), délka od minus do plus velikosti největšího dílu. Hlásí:

- „Žádná kolize nikde pro Úhel (°) od -180 do 180 (zkontrolováno 25 poloh)."
- „6 z 25 poloh koliduje, první u Úhel (°) 45 (12.4 mm³)." První poloha, která koliduje, a překrytí tam.

Tlačítko je šedé u pevných vazeb, které se nehýbou. Projetí kontroluje jen polohy, ne cestu mezi nimi: tenký díl může projít jiným mezi dvěma kroky.

:::note
Kontakt a gravitace ještě nejsou hotové. Bez mezí projetí pokrývá celý rozsah. Zadejte hodnotě **Meze** (viz [Seznam dílů, rozložené pohledy a pohyb dílů](topic:assembly-bom-explode)) a projetí pokryje jen ně, takže závěs, který se otevře o 90°, se kontroluje na 90°.
:::

## Studie pohybu

**Sestava › Pohyb** řídí hodnotu jedné vazby od začátku ke konci během času, který zadáte (konstantní rychlost, zpomalení, sinus nebo tam a zpět). Umístí sestavu v každém kroku s jejími vazbami a uzavřenými smyčkami a hlásí, co koliduje a jak blízko se díly dostanou. **Přidat bod** sleduje střed dílu nebo bod, na který kliknete. Karta vykresluje jeho polohu, rychlost, zrychlení, hodnotu vazby a vůli proti času. **Uložit CSV** a **Uložit graf** je zapíší. Rychlost a zrychlení se počítají ze zaznamenaných poloh, takže ostrý vrchol mezi kroky vyjde nízko: použijte více kroků.

Po **Spustit** pás **Projít běh** přesune sestavu do libovolného kroku (vedle něj se zobrazí čas, hodnota a zda tam díly kolidují). Vazba si ponechá vlastní hodnotu a **Zpět na model** vrátí sestavu na místo. Nastavení studie se ukládají do souboru sestavy; její výsledky vytvoří znovu **Spustit**.

## Studie kontaktu

**Sestava › Kontakt** ukazuje, jak sestava nese zatížení tam, kde se díly tlačí na sebe. Každý díl přináší vlastní podpory, zatížení a materiál ze své vlastní studie **Simulace** (pevná plocha na jednom dílu, síla na jiném). Zde vybíráte dvojice. **Přidat dvojici**, pak **Vybrat stranu A** a klikněte na plochy jednoho dílu, **Vybrat stranu B** a klikněte na plochy jiného dílu (klik na vybranou plochu ji odebere; Esc nebo **Hotovo** výběr ukončí). Dvojice je **Bez tření** (díly se tlačí, ale klouzají), nebo **Spojená** (zůstanou pohromadě). Součinitel tuhosti určuje, jak silně kontakt odolává zanoření (20 je rozumný začátek, 1000 pro tuhý ocelový svazek).

**Řešit** spustí zatížení v krocích a ukáže kontaktní sílu, největší zanoření, největší posun a největší napětí. Díl bez dvojice je vynechán a karta to řekne. Kontakt bez tření nedrží díl do strany: dejte každému dílu podporu ve vlastní studii Simulace, nebo jej spojte, jinak se kroky nemusí ustálit. Dvojice a nastavení se ukládají do souboru sestavy.

**Exportovat CalculiX deck** zapíše stejný model jako vstupní soubor CalculiX (.inp). CalculiX je samostatný program, který si nainstalujete a spustíte sami. **Číst výsledky CalculiX (.frd)** pak načte posuny zpět na síť této sestavy a odmítne soubor vytvořený pro jinou síť. Solver zde umí plastickou deformaci, ale není to explicitní dynamika. Nic zde není certifikovaná analýza: ať zkontroluje inženýr vše, na čem záleží.
