---
title: Uporaba PartCraft z AI pomočnikom
summary: Naj vaš lastni AI pomočnik ali skript dela z odprtim delom: bere njegove značilke, parametre in maso, spremeni parameter in ponovno izdela, zažene skript, izvozi in shrani. Izklopljeno, dokler ga ne vklopite.
keywords: ai, pomočnik, agent, mcp, model context protocol, skript, avtomatizacija, parametri, lastnosti mase, stl, step, 3mf, dovoljenja, prekini povezavo, dejavnost, mape
from: e66d3470
---

## Kaj se boste naučili

Kako lahko AI pomočnik (ali skript, ki ste ga napisali) pogleda del, ki ga imate odprtega, spremeni njegove parametre, zažene skript in ga izvozi, ter kako odločate, česa se sme dotakniti.

PartCraft **nima lastne umetne inteligence (AI)** in nikamor ne pošilja ničesar. Pomočnika prinesete sami: kateri koli program, ki podpira Model Context Protocol (MCP). PartCraft mu da le orodja, izbirate pa vi, katera.

## Vklop

1. Odprite {{ui:Nastavitve}} (zobnik v vrstici aplikacije ali {{key:Mod+,}}) in pojdite na zavihek {{ui:PartCraft}}.
2. Pod {{ui:Pomočniki}} označite **Dovoli AI pomočnikom in skriptom uporabo PartCraft**. Dokler tega ne storite, je izklopljeno.
3. Izberite, kaj sme početi. **Branje** je na začetku označeno; druge označite le, ko jih potrebujete.
4. Če želite, da lahko izvozi in shrani v mapo, izberite {{ui:Dodaj mapo…}} pod **Mape, ki jih sme uporabljati**, in izberite mapo v pogovornem oknu Studia.

Pomočniki se povežejo prek **CadCraft Studio** na vašem računalniku: Studio prikaže naslov in žeton, ki ga prilepite v pomočnika. Zavihek brskalnika ne more odpreti povezave za pomočnika.

## Kaj lahko pomočnik zahteva

| Orodje | Dovoljenje | Kaj počne |
|---|---|---|
| `part_describe`, `features_list` | Branje | Značilke po vrsti s tem, kaj je bilo izdelano in kaj ne, material, prostornina in velikost telesa |
| `params_list` | Branje | Parametri in vsako število, ki ga lahko poganja enačba, z njihovimi vrednostmi |
| `mass_properties` | Branje | Prostornina, površina, težišče, vztrajnostni moment okrog njega; masa, če ima del material |
| `param_set` | Urejanje | Nastavi parameter ali število značilke in ponovno izdela. En korak, ki ga lahko razveljavite |
| `script_run` | Urejanje | Zažene skript CraftScript, Lua ali Python tako, kot ga zažene delovno okolje {{ui:Skript}}: zaprto, brez datotek in brez omrežja. Del se ne spremeni |
| `part_export` | Izvoz | STL, 3MF, STEP ali OpenUSD (.usdz, .usda, .usdc), kot jih zapiše {{ui:Datoteka}} › {{ui:Izvoz}} |
| `link_push` | Urejanje | Posodobi model, povezan iz drugega programa (glejte [Ohranjanje modela .3dm v živo](topic:live-3dm-link)) |
| `link_status` | Branje | Pove, ali je povezani model še tu in kdaj je bil nazadnje posodobljen |
| `part_save` | Shranjevanje | PartCraftov lastni {{ui:Shrani}} |
| `illustrate_export` | Izvoz | Priročnik iz delovnega okolja {{ui:Illustrate}} kot PDF ali SVG risbe črt njegovih pogledov, kot interaktivna 3D datoteka ali njegova navodila kot PDF ali spletna stran, kot jih zapišeta menija {{ui:Izvoz}} in {{ui:Navodila}} delovnega okolja ([Priročniki](topic:illustrate)) |

:::note
Ta različica uporablja mrežno jedro: prostornine so izračunane iz trikotnikov (nekoliko manjše od pravega ukrivljenega telesa), STEP pa je zapisan fasetirano, s trikotniki namesto natančnih površin.
:::

## Nadzor ostane pri vas

- **Vsaka sprememba je en korak razveljavitve**, označen za pomočnika, na primer "Pomočnik: nastavi l = 45". Pritisnite {{key:Mod+Z}}, da jo razveljavite.
- **Vedno veste, kdaj je povezan.** Gumb v vrstici aplikacije med povezavo navaja pomočnika. Kliknite ga, če želite videti, kaj sme, ali da ga **prekinete** (**Prekini povezavo**).
- **Dejavnost.** {{ui:Nastavitve}} › {{ui:PartCraft}} › {{ui:Pomočniki}} › {{ui:Dejavnost}} našteje vsak klic; {{ui:Shrani dnevnik}} shrani kopijo.
- **Mape.** Datoteke bere in piše samo v mape, ki ste jih dodali; {{ui:Odstrani}} mapo takoj vzame nazaj.

## Brez odpiranja PartCraft

Strežnik datotek CadCraft za pomočnike (`npx @getcadcraft/mcp`) in ukazna vrstica `cadcraft` odpreta dele `.partcraft.json` s kodo PartCraft in jedrom mreže, brez okna: ista orodja za branje, nastavljanje parametrov, skripte CraftScript, izvoze (tudi OpenUSD) in shranjevanje. `cadcraft convert bracket.partcraft.json bracket.stl` izdela del in ga zapiše iz ukazne vrstice. Priročniki (`.partcraft-manual.json`) se tam izvozijo prav tako: `illustrate_export` ali `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (dodajte `--instructions` za navodila).

## Če kaj ne deluje

- **"needs the edit permission":** označite **Urejanje** pod {{ui:Pomočniki}} in pomočnika nato znova vprašajte.
- **"driven by the equation":** to število sledi parametru; namesto tega prosite pomočnika, naj nastavi parameter.
- **Njegova sprememba je bila napačna:** pritisnite {{key:Mod+Z}}.

## Glejte tudi

- [Recepti za AI pomočnike](common:assistants-recipes): obdelani primeri, vsak s orodji, ki jih kliče.
