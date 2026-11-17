---
title: Teplo, tepelné napětí a vzpěr
summary: Zjistěte teploty v díle z pevných teplot, tepelného toku, tepelného výkonu, konvekce a záření (ustáleně nebo v čase), zatěžte studii napětí nárůstem teploty a zjistěte zatížení, při kterém štíhlý díl vzpěrá, včetně toho, co každá metoda umí a co neumí.
keywords: tepelný, přenos tepla, teplo, teplota, vedení, konvekce, součinitel přestupu, záření, emisivita, tepelný tok, tepelný výkon, tvorba tepla, chladič, přechodový děj, čas, chlazení, ohřev, Crank-Nicolson, implicitní Euler, tepelná bilance, tepelné napětí, tepelné napětí v čase, přechodové tepelné napětí, kalení, tepelný šok, historie napětí, nejhorší čas, tepelná roztažnost, součinitel roztažnosti, vzpěr, Eulerův vzpěr, činitel zatížení, kritické zatížení, sloup, štíhlý, vlastní číslo
from: 1a1b7545
---

Tyto studie jsou v pracovním prostoru Simulation vedle statického napětí a vlastních frekvencí (viz [Kontrola napětí a průhybu](topic:simulation)). Vyberte je v poli **Typ** v panelu. Používají stejnou síť malých krychlí a stejný seznam materiálů; každý materiál z knihovny má tepelnou vodivost, měrné teplo a součinitel roztažnosti (typické tabulkové hodnoty, zobrazené pod **Vlastnosti**).

## Teplo: kam teplo odchází?

1. Zvolte **Tepelný (přenos tepla)** jako **Typ**.
2. Přidejte tepelné podmínky ze seznamu **Přidat** v panelu, pak klikněte na jejich plochy (jako u podpor a zatížení):
   - **Pevná teplota**: plocha je držena na teplotě v °C.
   - **Tepelný tok**: W/m² tekoucí do plochy (záporná hodnota vystupuje). Působí na skutečnou plochu, i tam, kde krychle tvoří schodiště.
   - **Tepelný výkon**: celkový výkon ve wattech, rozdělený na vybrané plochy podle plochy. Použijte ho pro topení nebo čip o známém výkonu.
   - **Konvekce**: vzduch nebo kapalina o dané teplotě odvádí teplo součinitelem h W/(m²·K). Typické h: klidný vzduch 5–10, ventilátor 25–100, voda 500–10000. PartCraft h nepočítá: v této studii není žádné proudění tekutiny.
   - **Záření**: plocha vyzařuje do okolí o dané teplotě, s emisivitou od 0 do 1. Je **linearizováno** (záření je zapsáno jako koeficient závislý na teplotě a přepočítáváno, dokud se neustálí) a jde jen do okolí: plochy si navzájem teplo nevyměňují.
3. **Tvorba tepla** (W/m³) ohřívá celý díl zevnitř, například odporový díl.
4. Stiskněte **Vyřešit**. Díl je obarven podle teploty; zvolte **Tepelný tok** v **Zobrazit**, abyste viděli, kudy teplo proudí. Ukažte na díl, abyste přečetli obojí.

Ustálený tok tepla potřebuje místo, kam teplo odejde: alespoň jednu pevnou teplotu, konvekci nebo záření. Díl, který jen teplo přijímá, nemá ustálený stav; nastavte pro něj přechodový děj.

Tabulka uvádí nejnižší a nejvyšší teplotu a kde jsou, největší tepelný tok a **tepelnou bilanci**: teplo vstupující do každé podmínky nebo z ní vystupující (pevná teplota počítá, kolik musí dodat nebo pohltit), vytvořené teplo, součty na vstupu a výstupu a **nerovnováhu**. Nerovnováha má být drobný zlomek tepla vstupujícího; velká hodnota znamená, že výsledku nelze věřit.

### V čase (přechodový děj)

Zaškrtněte **Přechodový** a zadejte **Počáteční teplotu** (celý díl začíná na ní), **Časový interval** a počet **Časových kroků**. **Implicitní Euler** je robustní; **Crank–Nicolson** je pro stejný počet kroků přesnější, ale po náhlé změně může kmitat. Po výpočtu přesuňte posuvník **Čas** a uvidíte teploty v každém okamžiku (barevná stupnice zůstává stejná pro všechny okamžiky). Tepelná bilance pak zahrnuje akumulované teplo.

## Tepelné napětí: co změna teploty dělá s dílem?

Ve studii **Statické napětí** (nebo **Vzpěr**) nastavte **Tepelné zatížení**:

- **Rovnoměrná změna teploty**: celý díl se ohřeje (nebo ochladí, se záporným číslem) o tolik kelvinů.
- **Teploty z tepelných podmínek**: přidejte tepelné podmínky do stejné studie; ustálené teploty se nejprve vypočítají na stejné síti, pak se díl roztáhne o α·(T − **teplotu bez napětí**).
- **Teploty v čase (běh přechodového děje)**: přidejte tepelné podmínky, pak zadejte **Počáteční teplotu**, **Časový interval**, **Časové kroky** a **Krokování času** jako u přechodové tepelné studie. Teploty se řeší v čase na stejné síti (krychle nebo čtyřstěny) a statický výpočet pro teploty každého okamžiku dá napětí v tomto okamžiku. **Napětí v:**
  - **Nejhorším čase** (začátek): **Výpočty napětí** rozloží okamžiky rovnoměrně po celém běhu, včetně začátku (výchozí 21, nejvýše 51). Výsledky se otevřou v okamžiku s největším napětím podle von Misese; tabulka jej pojmenuje, malý graf ukáže špičkové napětí v čase a posuvník **Čas** ukáže napětí v každém spočítaném okamžiku (barevná stupnice zůstává podle nejhoršího okamžiku).
  - **Jednom zvoleném čase**: jeden okamžik, krok nejblíže **Času (s)**, který zadáte. Studie vzpěru vždy bere jeden zvolený čas (konec běhu, pokud nenastavíte jiný).

Díl, který je kalen (ponořen z horka do studena) nebo náhle ohříván, je namáhán nejvíce tehdy, když se vnitřek a povrch nejvíce liší: často hned na začátku. Držená teplota platí od prvního okamžiku jako náhlá změna, takže napětí na samém začátku závisí na velikosti prvků (jen několik prvků tu změnu vidí). Čtěte to jako „velmi vysoké“ a podívejte se na další okamžiky posuvníku, kde síť hodnoty rozliší. Napětí je kvazistatické: bez setrvačnosti a bez kmitání způsobeného náhlou změnou.

Díl, který se může volně roztahovat, nemá tepelné napětí: podepřete ho jen tolik, aby se nemohl hýbat (například třemi hladkými plochami v pravých úhlech). Mezi dvěma stěnami je stlačen: ocelová tyč ohřátá o 50 K mezi tuhými stěnami nese asi 117 MPa. Tepelná zatížení se sama vyrovnávají, takže reakce se stále vyrovnávají jen s mechanickými zatíženími.

## Vzpěr: kdy štíhlý díl povolí?

1. Zvolte **Vzpěr (lineární)** jako **Typ** a přidejte podpory a zatížení jako u statické studie.
2. Nastavte **Činitele zatížení k nalezení** (kolik módů vzpěru).
3. Stiskněte **Vyřešit**. Každý mód má **činitel zatížení**: násobek vašeho zatížení, při kterém dokonalý díl vzpěrá. Činitel 3 znamená trojnásobek vašeho zatížení; **činitel pod 1 znamená, že díl vzpěrá už při zadaném zatížení**. Tabulka uvádí i celkové zatížení u každého činitele. Tvar módu ukazuje, jak vzpěrá (jeho velikost nic neznamená).

**Lineární vzpěr nadhodnocuje skutečné vzpěrné zatížení.** Předpokládá dokonalý díl: dokonale rovný, bez zbytkového napětí a pružný. Skutečné díly mají malé nedokonalosti a mohou nejprve téct a tenkostěnné skořepiny mohou vzpěrat při zlomku lineární hodnoty. Používejte velkou rezervu a u tenké skořepiny považujte činitel blízký 3 nebo nižší za varování.

## Jak moc tomu důvěřovat

PartCraft ověřuje tyto řešiče proti ručním vzorcům: tyč mezi dvěma teplotami (přesně), chladicí žebro (do 0.3 K), deska ohřívající sama sebe (přesně), krychle chladnoucí v čase (do 0.1 % s Crank–Nicolson), tyč náhle ohřátá na jednom konci, volná ohřátá tyč (bez napětí, ΔL = αLΔT), tyč držená mezi stěnami (σ = −EαΔT), kalená deska v čase proti klasickému řadovému řešení (do 1 % na krychlích, 2.1 % na čtyřstěnech ve středu desky; 0.5 % na jejím povrchu), poslední okamžik dlouhého běhu proti ustálenému tepelnému napětí (shodné na miliontinu) a Eulerovy sloupy (do 1 % pro upnutý–volný, 1.5 % pro kloubově–kloubově). Mějte na paměti:

- **Konstantní hodnoty materiálu.** Vodivost, měrné teplo a roztažnost se zde s teplotou nemění; při několika stovkách stupňů se mohou změnit o 10–30 %. Tuhost se také nemění.
- **Napětí v čase je kvazistatické a pružné**: každý okamžik je statický výpočet (bez setrvačnosti) a bez tečení, takže kalení, které by povrch uvedlo do tečení, ukáže napětí nad mezí kluzu.
- **Součinitele konvekce jsou vaším vstupem**, nejsou počítány z proudění vzduchu nebo vody.
- **Bez kontaktního odporu**: díl je jedno těleso.
- **Pouze lineární vzpěr**: bez nedokonalostí, bez tečení a bez chování po vzpěru.
- Schodiště krychlí a ostré vnitřní rohy ovlivňují tepelná napětí stejně jako ostatní napětí (viz [Kontrola napětí a průhybu](topic:simulation)).
- Toto je laboratorní verze: díly, na kterých záleží, ověřte jiným způsobem.

## Související

- [Kontrola napětí a průhybu (Simulation)](topic:simulation)
- [Co ještě není hotovo](topic:not-built-yet)
