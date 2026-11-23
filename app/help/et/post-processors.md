---
title: Muudetavad postprotsessorid
summary: Postprotsessor on lühike tekstifail, mis muudab tööraja sinu juhtseadme G-koodiks. Kopeeri üks sisseehitatud postprotsessoritest, muuda vajalikke ridu (reanumbrid, tööriista vahetus, lähtepunkti liikumised, lõppkood), vaata, millist G-koodi see kirjutab, kui tippid, ja hoia seda koos detailiga.
keywords: postprotsessor, G-kood, NC, GRBL, LinuxCNC, muuda postprotsessorit, kohandatud postprotsessor, cpost, tööriista vahetus, M6, G43, fikseeritud tsükkel, reanumbrid, modaalne, sündmus, muutuja
from: c78d0cae
---

Samu tööradu tuleb kirjutada eri juhtseadmete jaoks erinevalt: reanumbrid või mitte, `M6` või peatus, `G28` või `G53`, `M30` või `M2`. **Postprotsessor** on lühike tekst, mis ütleb, kuidas. PartCraft'i kolm sisseehitatud postprotsessorit (Fanuc-tüüpi, GRBL ja LinuxCNC) on kirjutatud selles vormingus, nii et sinu enda postprotsessor võib alata nende koopiast.

Kontrolli väljundit oma masina simulaatoris enne lõikamist ja käivita see esmalt õhus toorikust kõrgemal. Sisseehitatud postprotsessorid kirjutavad täpselt seda, mida nad kirjutasid enne selle vormingu olemasolu (testid võrdlevad nende väljundit baitide kaupa sadade programmide peal), kuid siin ei ole midagi tõestatud sinu masinal ning postprotsessor, mida muudad, on sinu enda tõestada.

## Tee üks

Valmistamises, jaotises **Järeltöötlus**:

- {{ui:Muuda postprotsessorit…}} sisseehitatud juhtseadmel avab **sinu enda koopia** sellest. Sinu enda postprotsessoril avab see selle postprotsessori.
- {{ui:Uus postprotsessor…}} alustab väikesest tühjast postprotsessorist, kus on iga sündmus.
- {{ui:Impordi postprotsessori fail…}} loeb `.cpost` tekstifaili (faili, mille saad redaktorist käsuga **Salvesta failina…**).

Redaktor näitab teksti, rida, mis ütleb, kas see loeb (ja milline rida on vale), ning G-koodi, mille postprotsessor kirjutab, kui tippid. **Eelvaade koos** valib väikese näidisprogrammi, mis käivitab iga sündmuse, või selle detaili enda programmi. {{ui:Salvesta}} hoiab postprotsessori detaili failis (kuni 20 postprotsessorit) ja valib selle juhtseadmeks. Postprotsessorid liiguvad koos detailiga; et seda teises detailis kasutada, salvesta see failina ja impordi seal.

## Kuidas postprotsessor välja näeb

```
post mymill
name Minu freesmasin (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Programm {program}: {name}
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

Read, mis algavad `//`, ja tühjad read on ignoreeritud. Üleval on seaded; seejärel üks `on <sündmus>` plokk iga sündmuse kohta, mis lõpeb `end`-ga. Sündmus, mille jätad välja, ei kirjuta midagi.

| Seade | Tähendus |
|---|---|
| `post <id>` | Postprotsessori id: tähed, numbrid, `-` ja `_` |
| `name <tekst>` | Mida juhtseadme loend näitab |
| `extension <ext>` | Faililaiend: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … igal `emit`-real või mitte ühelgi |
| `decimal-point yes` / `no` | `10.` `10` asemel (kommentaarides punkti ei ole kunagi) |
| `canned-cycles yes` / `no` | `no`: augud kirjutatakse G0/G1 liikumistena, mida need esindavad |
| `modal <rühm> <sõnad>` | Rühma sõnad (`modal motion G0 G1 G2 G3`), mida kirjutatakse ainult siis, kui need muutuvad |

## Sündmused

Need käivitatakse programmi jaoks selles järjekorras: `start`; siis iga toimingu kohta `operation`, `tool-change` (kui tööriist muutub), `spindle` (kui kiirus muutub), `approach` (liikumine esimese punktini enne esimest kiirliikumist), `coolant-on`, seejärel selle liikumised kui `rapid`, `feed` ja `arc`, ning iga fikseeritud tsükkel kui `cycle-start`, üks `cycle-hole` augu kohta ja `cycle-end`; lõpuks `end`.

Lisaks sündmused selle jaoks, mis läheb kolmest teljest kaugemale (postprotsessor, millel sündmust ei ole, keeldub sellisest programmist ja nimetab puuduva sündmuse):

| Sündmus | Millal | Selle muutujad |
|---|---|---|
| `index` | Enne toimingut, mille tööriista suund erineb eelmisest, ja enne esimest toimingut masinal, millel on pöörlevad teljed | `rot.a`, `rot.b`, `rot.c` (asendid, kuhu minna; tühi telje puhul, mida masinal ei ole), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Toimingu liikumised, mille pöörlevad teljed liiguvad lõikamise ajal | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (jah, kui edasiandmine peab olema pöördvõrdeline aeg), `invf` (1/minutit) |
| `rotary-end` | Pärast sellist toimingut | |
| `probe-move` | Liikumine, mis peatub, kui sond käivitub | `x`, `y`, `z`, `f`, `probe.n` (1 kuni 4), `probe.axis` (x, y või z), `probe.k` (1, 2 või 3) |
| `probe-set` | Pärast ühe sondimistsükli puudutusi | `probe.kind` (`"z"`, `"x"`, `"y"` või `centre`), `probe.action` (`set` või `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Keermestamisliikumine treipingil | `x`, `z`, `thread.lead` |

Lisaks iga sündmuse puhul: `kin` (none, a, b, ac, bc), `rotary` ja `tcp` (yes või no, masinast seadistuses), `pivot.x`, `pivot.y`, `pivot.z`, toimingu `op.tilt` ja `op.turn`, ning treipingil `spin.mode` (css või rpm), `spin.css`, `spin.max` ja `tool.nose`. Tähega algav sõna, mille väärtus on tühi, näiteks `A{rot.a}` masinal, millel ei ole A-telge, jäetakse rea seest välja. Võrdle x, y ja z tekstina jutumärkides (`if probe.kind == "z"`): paljalt on need liikumise koordinaadid.

Postituse ülaosas kaks rida muudavad selle treipingi postprotsessoriks: `machine lathe` (siis kirjutab see ainult X ja Z ning keeldub freespeedest, nagu freesi postprotsessor keeldub treiteedest) ja `lathe-x diameter` või `lathe-x radius`.

Iga sündmus võib kasutada oma liikumisliigi muutujaid, kirjutatuna `{nimi}`-na: programm (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), toorik (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), tööriist (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), toiming (`op.name`, `op.type`), `rpm`, liikumise punkt (`x`, `y`, `z`, `f` ja `moved`: tõene, kui telg muutus), kaared (`arc.g` 2 või 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) ning augud (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Redaktori loend **Sündmused ja muutujad** näitab, milline sündmus mida näeb. Olek, mida saab lugeda ja seada: `cool`, `offset` ning `at.x`, `at.y`, `at.z`, `at.f` (viimased kirjutatud väärtused).

## Laused

| Lause | Mida ta teeb |
|---|---|
| `raw TEXT` | Rida täpselt nii, nagu kirjutatud (ilma reanumbrita) |
| `comment TEXT` | `(TEXT)`, millest on välja jäetud mitte-ASCII märgid ja sulud |
| `emit WORD WORD …` | Sõnade rida; tühjaks jäänud sõnad jäetakse välja; sõnu ei ole, rida ei tule |
| `word WORD …` | Lisa sõnu rea juurde, mida ehitatakse; paljas `emit` lõpetab selle |
| `if EXPR` … `else` … `end` | Tingimused: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, muidu b) |
| `for tool in tools` … `end` | Üks kord iga tööriista kohta, mida programm kasutab |
| `set NAME EXPR` | Jäta väärtus meelde (`set offset tool.number`) |
| `reset NAME …` | Unusta modaalsed sõnad (rühm, aadressitäht nagu `Z` või `at.z`) |
| `do rapid X Y Z` | Käivita punkti jaoks `rapid`-sündmus |

Sõna on tekst, millel on `{muutuja|filter}` augud. Filtrid on `upper`, `lower`, `pad:N` (nullidega täitmine), `cut:N` (esimesed N tähemärki), `safe` (kommentaarikindel ASCII) ja `int`. Sõna, mis lõpeb `~`-ga, on **modaalne**: see kirjutatakse ainult siis, kui see erineb viimati kirjutatust (`G1~`, `X{x}~`). Sõna, mis lõpeb `~!`-ga, kirjutatakse iga kord ja jäetakse meelde. Nimi, mis ei ole muutuja, on tavaline tekst (`G81`, `udu`). Arvud ümardatakse 0.001 mm-ni ja kirjutatakse ilma lõppnullideta.

## Mida postprotsessor ei saa teha

See otsustab ainult, kuidas liikumised kirjutatakse, mitte midagi enamat. See ei saa muuta tööteed, järjestada toiminguid, jagada kaart, lisada telge, teada sinu masina liikumisulatust ega kinemaatikat ega teha koordinaatidega aritmeetikat (`+` ei ole olemas). Pöörlevad asendid tulevad endalt masinalt, mis on kirjeldatud seadistuses, mitte postprotsessorist: postprotsessor saab muuta nende märki või tähti, mitte kinemaatikat. Tööea ja alamprogrammi tsüklid ei ole loodud. Teise programmi `.cps`-stiilis postfaili ei saa laadida: see on teistsugune, lihtsam vorming.
