---
title: Redaguojami postprocesoriai
summary: Postprocesorius yra trumpas tekstinis failas, kuris įrankio kelią paverčia G kodu jūsų valdikliui. Nukopijuokite vieną iš įdiegtųjų postprocesorių, pakeiskite reikalingas eilutes (eilučių numerius, įrankio keitimą, grįžimo judesius, pabaigos kodą), matykite, kokį G kodą jis rašo, kol rašote, ir laikykite jį kartu su detale.
keywords: postprocesorius, G kodas, NC, GRBL, LinuxCNC, redaguoti postprocesorių, pasirinktinis postprocesorius, cpost, įrankio keitimas, M6, G43, fiksuotas ciklas, eilučių numeriai, modalinis, įvykis, kintamasis
from: 36ab8a38
---

Tam pačiam įrankio keliui reikia skirtingai rašyti skirtingiems valdikliams: eilučių numeriai ar jų nėra, `M6` ar pauzė, `G28` ar `G53`, `M30` ar `M2`. **Postprocesorius** yra trumpas tekstas, kuris nusako, kaip tai daryti. Trys PartCraft įdiegtieji postprocesoriai (Fanuc tipo, GRBL ir LinuxCNC) parašyti šiuo formatu, todėl savo postprocesorių galite pradėti kaip vieno iš jų kopiją.

Prieš pjaudami patikrinkite išvestį savo staklių simuliatoriuje ir pirmiausia paleiskite ją ore virš ruošinio. Įdiegtieji postprocesoriai rašo tiksliai tai, ką rašė prieš atsirandant šiam formatui (testai palygina jų išvestį bit po bito šimtuose programų), tačiau čia nieko nepatikrinta jūsų staklėse, o postprocesorių, kurį pakeitėte, turite įrodyti patys.

## Sukurkite savo

Skiltyje **Postprocesorius**, Gamyboje:

- {{ui:Redaguoti postprocesorių…}} ties įdiegtuoju valdikliu atidaro **jūsų pačių kopiją**. Ties vienu iš jūsų postprocesorių — atidaro tą postprocesorių.
- {{ui:Naujas postprocesorius…}} pradeda nuo mažo tuščio postprocesoriaus su visais įvykiais.
- {{ui:Importuoti postprocesoriaus failą…}} nuskaito `.cpost` tekstinį failą (failą, gautą iš **Įrašyti kaip failą…** redaktoriuje).

Redaktorius rodo tekstą, eilutę, nurodančią, ar jis nuskaitomas (ir kuri eilutė klaidinga), bei G kodą, kurį postprocesorius rašo, kol rašote. **Peržiūrėti su** pasirenka mažą pavyzdinę programą, kurioje paleidžiami visi įvykiai, arba šios detalės programą. {{ui:Įrašyti}} išsaugo postprocesorių detalės faile (iki 20 postprocesorių) ir pasirenka jį kaip valdiklį. Postprocesoriai keliauja kartu su detale; norėdami naudoti jį kitoje detalėje, įrašykite jį kaip failą ir ten importuokite.

## Kaip atrodo postprocesorius

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Eilutės, prasidedančios `//`, ir tuščios eilutės ignoruojamos. Viršuje nurodomi nustatymai; po jų — po vieną `on <event>` bloką kiekvienam įvykiui, uždarytą `end`. Įvykis, kurio nepaminėjote, nieko neįrašo.

| Nustatymas | Reikšmė |
|---|---|
| `post <id>` | Postprocesoriaus identifikatorius: raidės, skaitmenys, `-` ir `_` |
| `name <text>` | Ką rodo valdiklių sąrašas |
| `extension <ext>` | Failo plėtinys: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … kiekvienoje `emit` eilutėje arba jokių |
| `decimal-point yes` / `no` | `10.` vietoj `10` (komentarai niekada neturi taško) |
| `canned-cycles yes` / `no` | `no`: skylės rašomos kaip G0/G1 judesiai, kuriuos jos reiškia |
| `modal <group> <words>` | Grupės žodžiai (`modal motion G0 G1 G2 G3`), rašomi tik tada, kai jie pasikeičia |

## Įvykiai

Jie vykdomi programai tokia tvarka: `start`; tada kiekvienai operacijai — `operation`, `tool-change` (kai keičiasi įrankis), `spindle` (kai keičiasi greitis), `approach` (judėjimas iki pirmojo taško, prieš pirmąjį `rapid`), `coolant-on`, tada jos judesiai kaip `rapid`, `feed` ir `arc`, o kiekvienas fiksuotas ciklas — kaip `cycle-start`, po vieną `cycle-hole` kiekvienai skylei ir `cycle-end`; galiausiai `end`.

Kiekvienas įvykis gali naudoti savo judesio rūšies kintamuosius, rašomus `{name}`: programos (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), ruošinio (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), įrankio (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacijos (`op.name`, `op.type`), `rpm`, judesio taško (`x`, `y`, `z`, `f`, ir `moved`: true, kai pasikeitė ašis), lankų (`arc.g` 2 arba 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) ir skylių (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Redaktoriaus sąrašas **Įvykiai ir kintamieji** rodo, kuris įvykis ką mato. Būsena, kurią galite skaityti ir nustatyti: `cool`, `offset` ir `at.x`, `at.y`, `at.z`, `at.f` (paskutinės įrašytos reikšmės).

## Teiginiai

| Teiginys | Ką daro |
|---|---|
| `raw TEXT` | Eilutė tiksliai taip, kaip įvesta (be eilutės numerio) |
| `comment TEXT` | `(TEXT)` be ne ASCII simbolių ir skliaustų |
| `emit WORD WORD …` | Žodžių eilutė; tušti žodžiai praleidžiami; jei žodžių nėra, eilutės nėra |
| `word WORD …` | Prideda žodžių prie kuriamos eilutės; tuščias `emit` ją užbaigia |
| `if EXPR` … `else` … `end` | Sąlygos: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, kitaip b) |
| `for tool in tools` … `end` | Vieną kartą kiekvienam programos naudojamam įrankiui |
| `set NAME EXPR` | Įsimena reikšmę (`set offset tool.number`) |
| `reset NAME …` | Pamiršta modalinius žodžius (grupę, adresų raidę, kaip `Z`, arba `at.z`) |
| `do rapid X Y Z` | Vykdo `rapid` įvykį taškui |

Žodis yra įvestas tekstas su `{variable|filter}` vietomis. Filtrai: `upper`, `lower`, `pad:N` (nulių užpildymas), `cut:N` (pirmieji N simbolių), `safe` (ASCII, saugus komentarams) ir `int`. Žodis, kuris baigiasi `~`, yra **modalinis**: jis rašomas tik tada, kai skiriasi nuo paskutinio įrašyto (`G1~`, `X{x}~`). Žodis, kuris baigiasi `~!`, rašomas kiekvieną kartą ir vis tiek įsimenamas. Pavadinimas, kuris nėra kintamasis, yra paprastas tekstas (`G81`, `mist`). Skaičiai apvalinami iki 0.001 mm ir rašomi be galinių nulių.

## Ko postprocesorius negali

Jis nusprendžia tik, kaip rašomi judesiai, nieko daugiau. Jis negali pakeisti įrankio kelio, pertvarkyti operacijų, perskaldyti lanko, pridėti ašies, žinoti jūsų staklių judėjimo ribų ar kinematikos, arba atlikti aritmetikos su koordinatėmis (nėra `+`). Zondavimas, įrankio resurso ir subprogramų ciklai, 4-os ir 5-os ašies išvestis bei tekinimo staklių kodai dar nesukurti. Kito programos `.cps` tipo postprocesoriaus failo įkelti negalima: tai kitas, paprastesnis formatas.
