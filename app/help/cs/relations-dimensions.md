---
title: Plné určení skici vazbami a kótami
summary: Přidání vazeb z pravého panelu a kót nástrojem Kóta, čtení barev stavů nedostatečně určeno, plně určeno a přeurčeno a oprava přeurčené skici.
keywords: vazby, omezení, kóty, inteligentní kóta, plně určeno, nedostatečně určeno, přeurčeno, stupně volnosti, splývání, vodorovnost, svislost, rovnoběžnost, kolmost, tečnost, rovnost, soustřednost, střed, pevný, konflikt, nadbytečné
from: e76d047a
---

Skica je **plně určena**, když je každý bod a každý rozměr pevně daný vazbami a kótami. Plně určená skica se mění jen tehdy, když změníte číslo, takže se díl při pozdější úpravě chová předvídatelně. PartCraft vás k plnému určení nenutí, ale vždy ukazuje, jak blízko jste.

## Čtení stavu skici

Stav se ukazuje na třech místech: štítek vlevo nahoře v zobrazení, zpráva nahoře v pravém panelu a příznak v historii.

| Stav | Štítek | Barva geometrie | Co to znamená |
|---|---|---|---|
| Nedostatečně určeno | „Nedostatečně určeno · 3 stupně volnosti“ | Modrá | Některá geometrie se ještě může pohnout. Přetáhněte modrou geometrii a uvidíte, kterým směrem |
| Plně určeno | „Plně určeno“ | Černá (na Papír), světlá (na Model) | Každý bod a rozměr je pevně daný |
| Přeurčeno | „Přeurčeno“ | Červená u dotčených vazeb | Některé vazby si odporují, nebo je některá už implikována ostatními |

Konstrukční geometrie je šedá a čárkovaná bez ohledu na stav. Vybrané položky jsou oranžové. „Stupeň volnosti“ je jeden způsob, jak se něco ještě může pohnout: volný bod má dva (vlevo–vpravo a nahoru–dolů), volná kružnice má tři (střed a poloměr).

Legenda pod zprávou v pravém panelu opakuje barvy.

## Přidání kóty

1. Stiskněte {{key:D}} nebo zvolte {{ui:Kóta}}.
2. Klikněte na to, co chcete změřit:
   - **jedna úsečka**: její délku;
   - **jedna kružnice**: její průměr; **jeden oblouk**: jeho poloměr;
   - **dva body** (koncový bod, střed, volný bod nebo počátek): vzdálenost mezi nimi;
   - **bod a přímka**: vzdálenost od bodu k přímce;
   - **dvě rovnoběžné přímky**: vzdálenost mezi nimi; **dvě přímky pod úhlem**: úhel mezi nimi.
3. Po první položce stavový řádek říká „Klikněte na druhou položku, nebo klikněte, kam má kóta jít.“ Klikněte na druhou položku, nebo klikněte do prázdného prostoru, kde chcete číslo.
4. Otevře se pole pro číslo s aktuální hodnotou. Napište velikost a stiskněte {{key:Enter}}. {{key:Esc}} ponechá změřenou hodnotu.

**Místo, kam číslo umístíte, určí druh** u šikmé přímky nebo dvou bodů: umístěte je nad nebo pod, abyste získali vodorovnou vzdálenost, vlevo nebo vpravo pro svislou vzdálenost, jinde pro skutečnou (zarovnanou) vzdálenost.

Pole přijímá obyčejná čísla v milimetrech nebo stupních, například `25`, `12.5` nebo `1e3`. Úvodní `⌀`, `Ø` nebo `R` a koncové `mm` nebo `°` se ignorují. Úhly jsou 0 až 180 stupňů. Výpočty jako `20+5` nejsou přijímány. Chcete-li kótu navázat na proměnnou nebo vzorec, začněte ji znakem `=`.

Kótu změníte později dvojklikem na její číslo ve skice, nebo zvolte **Upravit** vedle ní v seznamu v pravém panelu.

:::tip
Můžete také nejprve vybrat geometrii (nástroj Výběr) a v pravém panelu zvolit tlačítko kóty: {{ui:Vzdálenost}}, {{ui:Vodorovná vzdálenost}}, {{ui:Svislá vzdálenost}}, {{ui:Poloměr}}, {{ui:Průměr}} nebo {{ui:Úhel}}. Zobrazí se jen ty, které se k výběru hodí. Tak dostanete kružnici poloměr místo průměru.
:::

## Přidání vazby

Vazby se přidávají z pravého panelu, ne nástrojem.

1. Stiskněte {{key:S}} pro Výběr.
2. Klikněte na jednu položku, pak {{key:Shift}}+klik na druhou, pokud vazba potřebuje dvě. Počátek lze také vybrat.
3. Pravý panel říká „Vybráno: úsečka l3, bod p1“ a ukazuje tlačítko pro každou vhodnou vazbu, například {{ui:∥ Rovnoběžnost}} nebo {{ui:• Splývání}}.
4. Zvolte tlačítko. Skica se ihned vyřeší.

Pokud se žádná vazba nehodí, panel říká „Žádná vazba se k tomuto výběru nehodí. Vyberte jednu nebo dvě položky (Shift+klik přidá).“

Úplný seznam vazeb, co každá potřebuje a co dělá, je v [Vazby a kóty skic](topic:sketch-relations).

Vazby se ve skice ukazují jako malé symboly vedle geometrie (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Tečky splývání jsou skryté, pokud není geometrie vybrána nebo vazba není v potížích. Klikněte na symbol pro výběr vazby.

## Pracovní příklad: profil držáku tvaru L

1. Skicujte na **Přední rovině**. Nástrojem Úsečka začněte v počátku a klikněte na šest rohů písmene L, nakonec znovu na počátek. Řetěz se ukončí sám, když kliknete na první bod.
2. Čáry nakreslené blízko vodorovně nebo svisle už mají vazby H a V, kromě poslední: čára, která končí na existujícím bodu, žádnou automatickou vazbu nedostane. Stiskněte {{key:S}}, klikněte na tu poslední čáru a zvolte {{ui:V Svislost}} v pravém panelu. Štítek říká „Nedostatečně určeno · 4 stupně volnosti“.
3. Stiskněte {{key:D}}. Klikněte na spodní čáru, klikněte pod ni, napište `80` a stiskněte {{key:Enter}}.
4. Klikněte na levou čáru, klikněte vlevo od ní, napište `60` a stiskněte {{key:Enter}}.
5. Stejným způsobem okótujte horní krátkou čáru `20` a vnitřní svislou čáru `45`.
6. Štítek nyní říká **Plně určeno** a celý L se změní na černou.

## Oprava přeurčené skici

Když nová vazba nebo kóta odporuje ostatním, PartCraft nic nepřesune. Geometrie zůstane přesně tak, jak byla, dotčené vazby zčervenají a stavový řádek je pojmenuje:

- „Přeurčeno: Vodorovnost, Vzdálenost 40 nelze splnit najednou. Vraťte zpět, nebo smažte jednu z nich.“ Vazby si odporují.
- „Přeurčeno: Rovnoběžnost je již implikována. Smažte ji.“ Vazba nic nepřidává, protože ostatní ji už vynucují. (Například strany obdélníku jsou už rovnoběžné.)

Oprava:

1. Stiskněte {{key:Mod+Z}} pro vrácení poslední změny, nebo
2. Najděte červenou položku v seznamu **Vazby a kóty** v pravém panelu (skupina, která ji obsahuje, je otevřená a červená) a vedle ní zvolte **Smazat**. Můžete také kliknout na její symbol nebo číslo ve skice a stisknout {{key:Delete}}.

:::note
V této verzi nejsou žádné „řízené“ (referenční) kóty. Kóta, která by jen hlásila velikost, kterou už určují ostatní vazby, je považována za přeurčenou. Velikosti čtěte raději v panelu: vyberte čáru a podívejte se na tlačítka kót, nebo zkontrolujte údaje o dílu po vytažení.
:::

Přeurčená skica se skutečným konfliktem způsobí, že prvek, který ji používá, selže („Přeurčeno: 1 vazbu nelze splnit najednou.“), a historie ho označí **⚠ chyba**. Skica, která je jen nadbytečná, se sestaví s varováním ⚠.

## Přetažením zjistěte, co je volné

Ve Výběru přetáhněte libovolný modrý bod nebo čáru. Řešitel ji posune co nejméně a zachová každou vazbu. Pokud by přetažení porušilo vazbu, geometrie zase cvakne zpět. Je to nejrychlejší způsob, jak zjistit, která kóta ještě chybí.

## Seznam vazeb

Když nic není vybráno, pravý panel vypisuje **Vazby a kóty**. Každý řádek má:

- **Upravit** (jen u kót): otevře pole pro číslo;
- **Vybrat**: vybere ji ve skice;
- **Smazat**: odstraní ji.

Vazby jednoho druhu, které se objevují víckrát, sdílejí jeden řádek, například „Splývání × 5“ u obdélníku připojeného k počátku. Klikněte na řádek a otevře se: každá vazba je uvedena podle toho, co spojuje („bod p2, bod p4“), s vlastním **Vybrat** a **Smazat**. Samotný řádek má:

- **Vybrat**: vybere je všechny ve skice;
- **Smazat vše**: odstraní je všechny jedním krokem ({{key:Mod+Z}} je vrátí).

Skupina, která obsahuje přeurčenou vazbu, se otevře sama, s názvem červeně. Kóty jsou vždy uvedeny po jedné na řádku, s hodnotami.

Když je vybrána geometrie, seznam ukazuje jen **Vazby na výběru**.
