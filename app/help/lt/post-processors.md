---
title: Redaguojami postprocesoriai
summary: Postprocesorius yra trumpas tekstinis failas, kuris paverčia įrankio trajektoriją į G-kodą jūsų valdikliui. Nukopijuokite vieną iš įmontuotų postprocesorių, pakeiskite reikiamas eilutes (eilučių numeriai, įrankio keitimas, namų judesiai, pabaigos kodas), matykite, kokį G-kodą jis rašo, kai rašote, ir laikykite jį kartu su detale.
keywords: postprocesorius, G-kodas, NC, GRBL, LinuxCNC, redaguoti postprocesorių, pasirinktinis postprocesorius, cpost, įrankio keitimas, M6, G43, pastovus ciklas, eilučių numeriai, modalinis, įvykis, kintamasis
from: c78d0cae
---

Tai pačiai įrankio trajektorijai reikia skirtingai parašyti skirtingiems valdikliams: eilučių numeriai arba jų nebūna, `M6` arba pauzė, `G28` arba `G53`, `M30` arba `M2`. **Postprocesorius** yra trumpas tekstas, kuris nurodo, kaip. Trys PartCraft įmontuoti postprocesoriai (Fanuc tipo, GRBL ir LinuxCNC) parašyti šiuo formatu, todėl savas postprocesorius gali prasidėti kaip vieno iš jų kopija.

Prieš pjaudami patikrinkite išvestį savo staklių imitatoriuje ir pirmiausia paleiskite ją ore virš ruošinio. Įmontuoti postprocesoriai rašo tiksliai tai, ką rašė prieš atsirandant šiam formatui (testai palygina jų išvestį baitas po baito šimtuose programų), tačiau nieko čia nėra įrodyta jūsų staklėse, o postprocesorius, kurį pakeitėte, yra jūsų ir jį turite įrodyti.

## Sukurkite vieną

Gamyboje, skiltyje **Postprocesorius**:

- {{ui:Redaguoti postprocesorių…}} įmontuotam valdikliui atveria **jūsų savo kopiją**. Jūsų savo postprocesoriuje ji atveria tą postprocesorių.
- {{ui:Naujas postprocesorius…}} pradeda nuo mažo tuščio postprocesoriaus su kiekvienu įvykiu.
- {{ui:Importuoti postprocesoriaus failą…}} nuskaito `.cpost` tekstinį failą (failą, kurį gaunate iš **Įrašyti kaip failą…** redaktoriuje).

Redaktorius rodo tekstą, eilutę, kuri nurodo, ar postprocesorius skaitomas (ir kuri eilutė neteisinga), bei G-kodą, kurį postprocesorius rašo, kol rašote. **Peržiūrėti su** pasirenka mažą pavyzdinę programą, kuri paleidžia kiekvieną įvykį, arba šios detalės programą. {{ui:Įrašyti}} laiko postprocesorių detalės faile (iki 20 postprocesorių) ir jį pasirenka kaip valdiklį. Postprocesoriai keliauja kartu su detale; norėdami naudoti vieną kitoje detalėje, įrašykite jį kaip failą ir ten importuokite.

## Koks atrodo postprocesorius

```
post mymill
name Mano frezas (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Programa {program}: {name}
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

Eilutės, prasidedančios `//`, ir tuščios eilutės ignoruojamos. Viršuje ateina nustatymai; tada po vieną `on <įvykis>` bloką kiekvienam įvykiui, uždarytą su `end`. Įvykis, kurio neįtraukiate, nieko neįrašo.

| Nustatymas | Reikšmė |
|---|---|
| `post <id>` | Postprocesoriaus id: raidės, skaitmenys, `-` ir `_` |
| `name <text>` | Ką rodo valdiklių sąrašas |
| `extension <ext>` | Failo plėtinys: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … kiekvienoje `emit` eilutėje, arba jokių |
| `decimal-point yes` / `no` | `10.` vietoj `10` (komentarai niekada neturi taško) |
| `canned-cycles yes` / `no` | `no`: skylės rašomos kaip G0/G1 judesiai, kuriuos jos reiškia |
| `modal <group> <words>` | Grupės žodžiai (`modal motion G0 G1 G2 G3`), rašomi tik tada, kai pasikeičia |

## Įvykiai

Programai jie vykdomi tokia tvarka: `start`; tada kiekvienai operacijai `operation`, `tool-change` (kai keičiasi įrankis), `spindle` (kai keičiasi apsukos), `approach` (judesys iki pirmo taško, prieš pirmąjį greitąjį judesį), `coolant-on`, tada jos judesiai kaip `rapid`, `feed` ir `arc`, o kiekvienas pastovus ciklas kaip `cycle-start`, po vieną `cycle-hole` kiekvienai skylei ir `cycle-end`; galiausiai `end`.

Daugiau įvykių – tam, kas viršija tris ašis (postprocesorius be jų atsisako tokios programos ir nurodo įvykį, kurio jam trūksta):

| Įvykis | Kada | Kintamieji |
|---|---|---|
| `index` | Prieš operaciją, kurios įrankio kryptis skiriasi nuo paskutinės, ir prieš pirmąją operaciją staklėse su sukamosiomis ašimis | `rot.a`, `rot.b`, `rot.c` (padėtys, į kurias eiti; tuščia ašiai, kurios staklėse nėra), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Operacijos judesiai, kai jos pjovimo metu juda sukamosios ašys | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (yes, kai padavimas turi būti atvirkštinis laikas), `invf` (1/minutes) |
| `rotary-end` | Po tokios operacijos | |
| `probe-move` | Judesys, kuris sustoja, kai suveikia zondas | `x`, `y`, `z`, `f`, `probe.n` (1–4), `probe.axis` (x, y arba z), `probe.k` (1, 2 arba 3) |
| `probe-set` | Po vieno zondavimo ciklo lietimų | `probe.kind` (`"z"`, `"x"`, `"y"` arba `centre`), `probe.action` (`set` arba `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Sriegimo judesys tekinimo staklėse | `x`, `z`, `thread.lead` |

Visiems įvykiams taip pat: `kin` (none, a, b, ac, bc), `rotary` ir `tcp` (yes arba no, iš staklių Paruošoje), `pivot.x`, `pivot.y`, `pivot.z`, operacijos `op.tilt` ir `op.turn`, o tekinimo staklėse `spin.mode` (css arba rpm), `spin.css`, `spin.max` ir `tool.nose`. Raidinis žodis, kurio reikšmė tuščia, pavyzdžiui `A{rot.a}` staklėse be A ašies, išbraukiamas iš eilutės. Lyginkite x, y ir z kaip tekstą kabutėse (`if probe.kind == "z"`): be kabučių jie yra judesio koordinatės.

Dvi papildomos eilutės viršuje paverčia postprocesorių tekinimo postprocesoriumi: `machine lathe` (tada rašo tik X ir Z ir atsisako frezavimo takų, kaip frezavimo postprocesorius atsisako tekinimo takų) ir `lathe-x diameter` arba `lathe-x radius`.

Kiekvienas įvykis gali naudoti savo judesio rūšies kintamuosius, rašomus `{name}`: programa (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), ruošinys (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), įrankis (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacija (`op.name`, `op.type`), `rpm`, judesio taškas (`x`, `y`, `z`, `f` ir `moved`: true, kai pasikeitė ašis), lankai (`arc.g` 2 arba 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) ir skylės (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Redaktoriaus sąrašas **Įvykiai ir kintamieji** rodo, kuris įvykis ką mato. Būsena, kurią galite skaityti ir nustatyti: `cool`, `offset` ir `at.x`, `at.y`, `at.z`, `at.f` (paskutinės įrašytos reikšmės).

## Teiginiai

| Teiginys | Ką daro |
|---|---|
| `raw TEXT` | Eilutė tiksliai taip, kaip įrašyta (be eilutės numerio) |
| `comment TEXT` | `(TEXT)` su ne ASCII simboliais ir skliaustais, išimtais |
| `emit WORD WORD …` | Žodžių eilutė; žodžiai, kurie išeina tušti, praleidžiami; jokių žodžių – jokios eilutės |
| `word WORD …` | Prideda žodžius prie kuriamos eilutės; plikas `emit` ją baigia |
| `if EXPR` … `else` … `end` | Sąlygos: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, kitaip b) |
| `for tool in tools` … `end` | Kartą kiekvienam įrankiui, kurį programa naudoja |
| `set NAME EXPR` | Įsimena reikšmę (`set offset tool.number`) |
| `reset NAME …` | Pamiršta modalinius žodžius (grupę, adreso raidę kaip `Z`, arba `at.z`) |
| `do rapid X Y Z` | Paleidžia `rapid` įvykį tam taškui |

Žodis yra įvestas tekstas su `{variable|filter}` skylėmis. Filtrai: `upper`, `lower`, `pad:N` (nulių užpildymas), `cut:N` (pirmieji N simbolių), `safe` (komentarams saugus ASCII) ir `int`. Žodis, besibaigiantis `~`, yra **modalinis**: jis rašomas tik tada, kai skiriasi nuo to, kas paskutinį kartą buvo parašyta (`G1~`, `X{x}~`). Žodis, besibaigiantis `~!`, rašomas kiekvieną kartą ir vis tiek įsimenamas. Vardas, kuris nėra kintamasis, yra paprastas tekstas (`G81`, `mist`). Skaičiai apvalinami iki 0.001 mm ir rašomi be galinių nulių.

## Ko postprocesorius negali

Jis nusprendžia tik, kaip rašomi judesiai, nieko daugiau. Jis negali pakeisti įrankio trajektorijos, perrikiuoti operacijų, perpjauti lanko, pridėti ašies, žinoti jūsų staklių eigos ar kinematikos, ar atlikti aritmetikos su koordinatėmis (nėra `+`). Sukamųjų padėčių pačios ateina iš staklių, aprašytų Paruošoje, o ne iš postprocesoriaus: postprocesorius gali pakeisti jų ženklą ar raides, bet ne kinematiką. Įrankio tarnavimo laiko ir subprogramų ciklai neįgyvendinti. `.cps` tipo postprocesoriaus failas iš kitos programos negali būti įkeltas: tai kitas, paprastesnis formatas.
