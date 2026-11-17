---
title: Muudetavad postprotsessorid
summary: Post on lühike tekstifail, mis muudab tööraja sinu juhtimisseadme G-koodiks. Kopeeri üks sisseehitatud postidest, muuda vajalikke ridu (rea numbrid, tööriista vahetus, lähtepositsioonid, lõpukood), vaata kirjutatavat G-koodi tippides ja hoia see detailiga koos.
keywords: post, postprotsessor, G-kood, NC, GRBL, LinuxCNC, muuda posti, kohandatud post, cpost, tööriista vahetus, M6, G43, kordustsükkel, rea numbrid, modaalne, sündmus, muutuja
from: 36ab8a38
---

Sama tööraja tuleb eri juhtimisseadmetele kirjutada erinevalt: rea numbritega või ilma, `M6` või paus, `G28` või `G53`, `M30` või `M2`. **Post** (postprotsessor) on lühike tekst, mis kirjeldab, kuidas. PartCraft'i kolm sisseehitatud posti (Fanuc-stiilis, GRBL ja LinuxCNC) on kirjutatud selles vormingus, nii et oma post võib alata ühe neist koopiana.

Kontrolli väljundit enne lõikamist oma masina enda simulaatoris ja käivita see esmalt tooriku kohal õhus. Sisseehitatud postid kirjutavad täpselt sama, mida nad kirjutasid enne selle vormingu olemasolu (testid võrdlevad nende väljundit bait-baidi haaval sadade programmide peal), kuid siin ei ole midagi sinu masinal tõestatud ja muudetud post tuleb sul ise tõestada.

## Tee oma

Jaotises **Post** rakenduses Manufacture:

- {{ui:Edit post…}} sisseehitatud juhtimisseadme puhul avab **sinu enda koopia** sellest. Sinu enda posti puhul avab see selle posti.
- {{ui:New post…}} alustab väikesest tühjast postist, milles on iga sündmus.
- {{ui:Import post file…}} loeb `.cpost` tekstifaili (faili, mille saad redaktori käsuga **Salvesta failina…**).

Redaktor näitab teksti, rida, mis ütleb, kas see loeb (ja milline rida on vale), ning G-koodi, mida post kirjutab sinu tippimise ajal. **Eelvaata koos** valib väikese proovi-programmi, mis käivitab iga sündmuse, või selle detaili enda programmi. {{ui:Save}} hoiab posti detaili failis (kuni 20 posti) ja valib selle juhtimisseadmeks. Postid liiguvad detailiga kaasas; et kasutada posti teises detailis, salvesta see failina ja impordi see seal.

## Milline post välja näeb

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

Read, mis algavad `//`-ga, ja tühjad read jäetakse vahele. Ülaosas on sätted; seejärel iga sündmuse kohta üks `on <event>` plokk, mis lõpeb `end`-iga. Sündmus, mille jätad välja, ei kirjuta midagi.

| Säte | Tähendus |
|---|---|
| `post <id>` | Posti id: tähed, numbrid, `-` ja `_` |
| `name <text>` | Mida juhtimisseadmete loend näitab |
| `extension <ext>` | Faililaiend: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … igal `emit`-real või ühelgi |
| `decimal-point yes` / `no` | `10.` `10` asemel (kommentaarides punkti ei ole kunagi) |
| `canned-cycles yes` / `no` | `no`: augud kirjutatakse G0/G1 liikumistena, mida nad tähistavad |
| `modal <group> <words>` | Rühma sõnad (`modal motion G0 G1 G2 G3`), mis kirjutatakse ainult siis, kui need muutuvad |

## Sündmused

Need käivad programmi jaoks selles järjekorras: `start`; seejärel iga toimingu kohta `operation`, `tool-change` (kui tööriist muutub), `spindle` (kui kiirus muutub), `approach` (liikumine esimese punktini enne esimest kiirliikumist), `coolant-on`, seejärel selle liikumised kui `rapid`, `feed` ja `arc`, ning iga kordustsükkel kui `cycle-start`, üks `cycle-hole` iga augu kohta ja `cycle-end`; lõpuks `end`.

Iga sündmus võib kasutada oma liikumisliigi muutujaid, kirjutatuna `{name}`: programmi (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), tooriku (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), tööriista (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), toimingu (`op.name`, `op.type`), `rpm`, liikumispunkti (`x`, `y`, `z`, `f` ja `moved`: tõene, kui mõni telg muutus), kaari (`arc.g` 2 või 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) ja auke (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Redaktori loend **Sündmused ja muutujad** näitab, milline sündmus mida näeb. Olek, mida saab lugeda ja seada: `cool`, `offset` ning `at.x`, `at.y`, `at.z`, `at.f` (viimased kirjutatud väärtused).

## Laused

| Lause | Mida see teeb |
|---|---|
| `raw TEXT` | Rida täpselt nii, nagu kirjutatud (ilma rea numbrita) |
| `comment TEXT` | `(TEXT)`, millest on eemaldatud mitte-ASCII märgid ja sulud |
| `emit WORD WORD …` | Sõnade rida; tühjaks jäävad sõnad jäetakse välja; sõnu pole, rida pole |
| `word WORD …` | Lisa sõnu koostatavale reale; tühi `emit` lõpetab selle |
| `if EXPR` … `else` … `end` | Tingimused: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, muidu b) |
| `for tool in tools` … `end` | Üks kord iga programmi kasutatava tööriista kohta |
| `set NAME EXPR` | Jäta väärtus meelde (`set offset tool.number`) |
| `reset NAME …` | Unusta modaalsed sõnad (rühm, aadressitäht nagu `Z`, või `at.z`) |
| `do rapid X Y Z` | Käivita punktile `rapid`-sündmus |

Sõna on tipitud tekst, millel on `{variable|filter}` augud. Filtrid on `upper`, `lower`, `pad:N` (nullidega täitmine), `cut:N` (esimesed N märki), `safe` (kommentaarile ohutu ASCII) ja `int`. Sõna, mille lõpus on `~`, on **modaalne**: seda kirjutatakse ainult siis, kui see erineb viimati kirjutatust (`G1~`, `X{x}~`). Sõna, mille lõpus on `~!`, kirjutatakse alati ja jääb ka meelde. Nimi, mis ei ole muutuja, on tavatekst (`G81`, `mist`). Arvud ümardatakse 0.001 mm täpsusega ja kirjutatakse ilma lõppevate nullideta.

## Mida post ei saa teha

Post otsustab ainult selle, kuidas liikumised kirjutatakse, mitte midagi enamat. Ta ei saa muuta tööraja, järjestada toiminguid, jagada kaart, lisada telge, teada sinu masina käiguulatust ega kinemaatikat ega teha arvutusi koordinaatidega (`+` puudub). Puuduvad sondeerimine, tööriista eluea ja alamprogrammi tsüklid, 4. ja 5. telje väljund ning treipingi koodid. Teise programmi `.cps`-stiilis postifaili ei saa laadida: see on teine, lihtsam vorming.
