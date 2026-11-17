---
title: Naudoti PartCraft su DI asistentu
summary: Leiskite savo DI asistentui ar scenarijui dirbti su atidaryta detale: skaityti jos elementus, parametrus ir masę, pakeisti parametrą ir perstatyti, paleisti scenarijų, eksportuoti ir įrašyti. Išjungta, kol neįjungsite.
keywords: ai, dirbtinis intelektas, asistentas, agentas, mcp, model context protocol, scenarijus, automatizavimas, parametrai, masės savybės, stl, step, 3mf, leidimai, atjungimas, veikla, aplankai
from: e66d3470
---

## Ką sužinosite

Kaip leisti DI asistentui (ar jūsų parašytam scenarijui) pažvelgti į atidarytą detalę, pakeisti jos parametrus, paleisti scenarijų ir ją eksportuoti, bei kaip nusprendžiate, ko jis gali liesti.

PartCraft **neturi jokio savo DI** ir niekur nieko nesiunčia. Asistentą atsinešate patys: bet kurią programą, kuri kalba Model Context Protocol (MCP). PartCraft tik suteikia jam įrankius, o pasirinkti, kuriuos, galite tik jūs.

## Įjunkite

1. Atidarykite {{ui:Parametrai}} (krumpliaratis programos juostoje arba {{key:Mod+,}}) ir eikite į skirtuką {{ui:PartCraft}}.
2. Skiltyje {{ui:Asistentai}} pažymėkite **Leisti DI asistentams ir scenarijams naudoti PartCraft**. Iki tol tai išjungta.
3. Pasirinkite, ką jis gali daryti. **Skaitymas** pažymėtas pradžioje; kitus pažymėkite tik tada, kai jų reikia.
4. Kad jis galėtų eksportuoti ir įrašyti į aplanką, pasirinkite {{ui:Pridėti aplanką…}} skiltyje **Aplankai, kuriuos gali naudoti** ir pasirinkite aplanką Studio dialogo lange.

Asistentai jungiasi per **CadCraft Studio** jūsų kompiuteryje: Studio rodo adresą ir prieigos raktą, kurį įklijuoti į asistentą. Naršyklės skirtukas negali atidaryti ryšio asistentui.

## Ko asistentas gali prašyti

| Įrankis | Leidimas | Ką daro |
|---|---|---|
| `part_describe`, `features_list` | Skaitymas | Elementai eilės tvarka su tuo, kas sukurta ir kas nepavyko, medžiaga, kietojo kūno tūris ir dydis |
| `params_list` | Skaitymas | Parametrai ir visi skaičiai, kuriuos gali valdyti lygtis, su jų reikšmėmis |
| `mass_properties` | Skaitymas | Tūris, plotas, masės centras, inercija apie jį; masė, kai detalė turi medžiagą |
| `param_set` | Redagavimas | Nustato parametrą ar elemento skaičių ir perstato. Vienas žingsnis, kurį galite anuliuoti |
| `script_run` | Redagavimas | Paleidžia CraftScript, Lua ar Python scenarijų taip, kaip veikia {{ui:Scenarijus}} darbo sritis: uždarytas, be failų ir be tinklo. Detalė nesikeičia |
| `part_export` | Eksportas | STL, 3MF, STEP arba OpenUSD (.usdz, .usda, .usdc), kaip rašo {{ui:Failas}} › {{ui:Eksportuoti}} |
| `link_push` | Redagavimas | Atnaujina modelį, susietą iš kitos programos (žr. [Laikykite .3dm modelį aktualų](topic:live-3dm-link)) |
| `link_status` | Skaitymas | Nurodo, ar susietas modelis dar yra ir kada paskutinį kartą atnaujintas |
| `part_save` | Įrašymas | Paties PartCraft {{ui:Įrašyti}} |
| `illustrate_export` | Eksportas | Vadovas iš {{ui:Iliustracija}} darbo srities kaip PDF arba SVG linijinis piešinys jo vaizdų, kaip interaktyvus 3D failas arba jo instrukcijos kaip PDF ar tinklalapis, kaip rašo darbo srities {{ui:Eksportuoti}} ir {{ui:Instrukcijos}} meniu ([Vadovai](topic:illustrate)) |

:::note
Ši versija naudoja tinklelio branduolį: tūriai skaičiuojami iš trikampių (šiek tiek mažesni nei tikrojo kreivo kietojo kūno), o STEP rašomas facetuotas, su trikampiais, o ne tiksliais paviršiais.
:::

## Jūs išlaikote valdžią

- **Kiekvienas pakeitimas yra vienas anuliavimo žingsnis**, pažymėtas asistentui, pavyzdžiui, „Assistant: set l = 45“. Paspauskite {{key:Mod+Z}}, kad jį atšauktumėte.
- **Žinote, kada jis prijungtas.** Programos juostos mygtukas įvardija asistentą, kol jis prijungtas. Spustelėkite jį, kad pamatytumėte, ką jis gali daryti, arba kad jį **atjungtumėte**.
- **Veikla.** {{ui:Parametrai}} › {{ui:PartCraft}} › {{ui:Asistentai}} › {{ui:Veikla}} išvardija kiekvieną iškvietimą; {{ui:Įrašyti žurnalą}} išsaugo kopiją.
- **Aplankai.** Jis skaito ir rašo failus tik jūsų pridėtuose aplankuose; {{ui:Pašalinti}} atima aplanką iš karto.

## Be PartCraft atidarymo

CadCraft failų serveris asistentams (`npx @getcadcraft/mcp`) ir `cadcraft` komandinė eilutė atidaro `.partcraft.json` detales su PartCraft pačiu kodu ir tinklelio branduoliu, be lango: tie patys skaitymo įrankiai, parametrų nustatymas, CraftScript scenarijai, eksportai (taip pat OpenUSD) ir įrašymas. `cadcraft convert bracket.partcraft.json bracket.stl` sukuria detalę ir ją įrašo iš komandinės eilutės. Vadovai (`.partcraft-manual.json`) taip pat eksportuojami ten: `illustrate_export` arba `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (pridėkite `--instructions` instrukcijoms).

## Jei kas nors neveikia

- **„needs the edit permission“:** pažymėkite **Redagavimas** skiltyje {{ui:Asistentai}}, tada paklauskite dar kartą.
- **„driven by the equation“:** šis skaičius seka parametrą; vietoj to paprašykite asistento nustatyti patį parametrą.
- **Jo pakeitimas buvo klaidingas:** paspauskite {{key:Mod+Z}}.

## Taip pat žr.

- [Receptai DI asistentams](common:assistants-recipes): veikiantys pavyzdžiai, kiekvienas su įrankiais, kuriuos jis iškviečia.
