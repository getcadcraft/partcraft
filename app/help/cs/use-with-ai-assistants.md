---
title: Použití PartCraftu s AI asistentem
summary: Nechte svého vlastního AI asistenta nebo skript pracovat s otevřeným dílem: číst jeho prvky, parametry a hmotnost, změnit parametr a přepočítat, spustit skript, exportovat a uložit. Vypnuto, dokud jej nezapnete.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizace, parametry, vlastnosti hmotnosti, stl, step, 3mf, oprávnění, odpojení, aktivita, složky
from: e66d3470
---

## Co se naučíte

Jak nechat AI asistenta (nebo skript, který jste napsali) prohlédnout díl, který máte otevřený, změnit jeho parametry, spustit skript a exportovat jej, a jak určíte, čeho se smí dotknout.

PartCraft nemá **vlastní AI** a nic nikam neodesílá. Asistenta přinesete vy: jakýkoli program, který mluví protokolem Model Context Protocol (MCP). PartCraft mu jen poskytuje nástroje a vy vybíráte, které.

## Zapnutí

1. Otevřete {{ui:Nastavení}} (ozubené kolo v liště aplikace, nebo {{key:Mod+,}}) a přejděte na kartu {{ui:PartCraft}}.
2. V části {{ui:Asistenti}} zaškrtněte **Povolit AI asistentům a skriptům používat PartCraft**. Dokud to neuděláte, je to vypnuto.
3. Vyberte, co smí dělat. **Čtení** je na začátku zaškrtnuto; ostatní zaškrtávejte jen tehdy, když je potřebujete.
4. Aby mohl exportovat a ukládat do složky, vyberte {{ui:Přidat složku…}} v části **Složky, které smí používat** a v dialogu Studia vyberte složku.

Asistenti se připojují přes **CadCraft Studio** na vašem počítači: Studio zobrazí adresu a token, které vložíte do asistenta. Prohlížečová karta nemůže pro asistenta otevřít spojení.

## Co může asistent požadovat

| Nástroj | Oprávnění | Co dělá |
|---|---|---|
| `part_describe`, `features_list` | Čtení | Prvky v pořadí, s tím, co se postavilo a co selhalo, materiál, objem a velikost tělesa |
| `params_list` | Čtení | Parametry a každé číslo, které může řídit rovnice, s jejich hodnotami |
| `mass_properties` | Čtení | Objem, plocha, těžiště, setrvačnost kolem něj; hmotnost, pokud má díl materiál |
| `param_set` | Úprava | Nastaví parametr nebo číslo prvku a přepočítá. Jeden krok, který lze vzít zpět |
| `script_run` | Úprava | Spustí skript CraftScript, Lua nebo Python tak, jak to dělá pracovní prostor {{ui:Skript}}: izolovaně, bez souborů a bez sítě. Díl se nemění |
| `part_export` | Export | STL, 3MF, STEP nebo OpenUSD (.usdz, .usda, .usdc), tak jak je zapisuje {{ui:Soubor}} › {{ui:Export}} |
| `link_push` | Úprava | Aktualizuje model propojený z jiného programu (viz [Udržet model .3dm živý](topic:live-3dm-link)) |
| `link_status` | Čtení | Sdělí, zda propojený model stále existuje a kdy se naposledy aktualizoval |
| `part_save` | Uložení | Vlastní {{ui:Uložit}} v PartCraftu |
| `illustrate_export` | Export | Návod z pracovního prostoru {{ui:Illustrate}} jako PDF nebo SVG čárová grafika jeho pohledů, jako interaktivní 3D soubor, nebo jeho pokyny jako PDF či webová stránka, tak jak je zapisují nabídky {{ui:Export}} a {{ui:Pokyny}} pracovního prostoru ([Návody](topic:illustrate)) |

:::note
Tato verze používá síťové jádro: objemy vznikají z trojúhelníků (o něco málo menší než skutečné zakřivené těleso) a STEP se zapisuje fasetovaně, s trojúhelníky místo přesných ploch.
:::

## Vy máte kontrolu

- **Každá změna je jeden krok zpět**, označený pro asistenta, například „Asistent: nastaveno l = 45“. Stiskněte {{key:Mod+Z}}, abyste ji vzali zpět.
- **Víte, kdy je asistent připojen.** Tlačítko v liště aplikace uvádí asistenta, dokud je připojen. Kliknutím zobrazíte, co smí dělat, nebo jej odpojíte: **Odpojit**.
- **Aktivita.** {{ui:Nastavení}} › {{ui:PartCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypisuje každé volání; {{ui:Uložit záznam}} uchová jeho kopii.
- **Složky.** Čte a zapisuje soubory jen ve složkách, které jste přidali; {{ui:Odebrat}} složku okamžitě odebere.

## Bez otevření PartCraftu

Souborový server CadCraft pro asistenty (`npx @getcadcraft/mcp`) a příkazový řádek `cadcraft` otevírají soubory dílů `.partcraft.json` s vlastním kódem PartCraftu a jeho síťovým jádrem, bez okna: stejné nástroje pro čtení, nastavování parametrů, skripty CraftScript, exporty (včetně OpenUSD) a ukládání. `cadcraft convert bracket.partcraft.json bracket.stl` sestaví díl a zapíše jej z příkazového řádku. Návody (`.partcraft-manual.json`) se tam exportují také: `illustrate_export`, nebo `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (pro pokyny přidejte `--instructions`).

## Když něco nefunguje

- **„vyžaduje oprávnění k úpravám“:** zaškrtněte **Úprava** v části {{ui:Asistenti}}, pak se zeptejte znovu.
- **„řízeno rovnicí“:** tato hodnota sleduje parametr; požádejte asistenta, aby místo toho nastavil parametr.
- **Jeho změna byla chybná:** stiskněte {{key:Mod+Z}}.

## Viz také

- [Recepty pro AI asistenty](common:assistants-recipes): propracované příklady, každý s nástroji, které volá.
