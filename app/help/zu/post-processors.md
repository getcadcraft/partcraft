---
title: Ama-post processor ongawahlela
summary: I-post iyifayela lombhalo elifushane elishintsha indlela yethuluzi ibe yi-G-code yomlawuli wakho. Kopisha enye yama-post akhelwe ngaphakathi, shintsha imigqa oyidingayo (izinombolo zemigqa, ukushintsha kwethuluzi, izinyathelo zokubuyela ekhaya, ikhodi yokuphetha), bona i-G-code ebhalwayo njengoba uthayipha, bese uyigcina ngengxenye.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, hlela i-post, post engokwezifiso, cpost, ukushintsha kwethuluzi, M6, G43, umjikelezo oqinile, izinombolo zemigqa, modal, umcimbi, okuguquguqukayo
from: c78d0cae
---

Indlela efanayo yethuluzi kumele ibhalwe ngokwehlukile kubalawuli abehlukene: izinombolo zemigqa noma ezingekho, `M6` noma ukuma, `G28` noma `G53`, `M30` noma `M2`. I-**post** ngumbhalo omfushane otshela ukuthi kanjani. Ama-post amathathu akhelwe ngaphakathi e-PartCraft (i-Fanuc-style, i-GRBL ne-LinuxCNC) abhalwe kule fomethi, ngakho i-post yakho ingaqala njengekhophi yenye yazo.

Hlola okuphumayo ngesimulator somshini wakho ngaphambi kokusika, futhi uyiqhube emoyeni ngaphezu kwesitoko kuqala. Ama-post akhelwe ngaphakathi abhala kanye lokho abekubhala ngaphambi kwalesi fomethi (izivivinyo zifanisa okuphumayo kwazo ngokuthi biti ngebhithi ezinhlelweni eziningi), kodwa lutho lapha lufakazelwe emshinini wakho, futhi i-post oyishintshile iyeyakho ukuyifakazela.

## Yenza eyakho

Ku-Manufacture, ngaphansi kwe-**Post**:

- {{ui:Edit post…}} ku-control akhelwe ngaphakathi ivula **ikhophi yakho** yayo. Kwepost yakho ivula leyo post.
- {{ui:New post…}} iqala kusuka ku-post emhlophe esincane enazo zonke izehlakalo.
- {{ui:Import post file…}} ifunda ifayela lombhalo le-`.cpost` (ifayela oliphuthayo ku-**Save as a file…** kumhleli).

Umhleli ubonisa umbhalo, umugqa otshela ukuthi uyafundeka yini (nokuthi yiluphi umugqa ongalungile), kanye ne-G-code ebhalwa yi-post njengoba uthayipha. **Preview with** ikhetha uhlelo oluncane lwesampula elisebenzisa zonke izehlakalo, noma uhlelo lwalesi ngxenye. {{ui:Save}} igcina i-post efayelini lengxenye (ama-post angu-20 kuwo) futhi iyikhethe njengomlawuli. Ama-post ahamba nengxenye; ukuze uyisebenzise kwenye ingxenye, yigcine njengefayela bese uyingenisa lapho.

## Ibukeka kanjani i-post

```
post mymill
name Umshini wami (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Uhlelo {program}: {name}
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

Imigqa eqala nge-`//` nemigqa ethe xaxa iyashaywa. Ekuqaleni kuza izilungiselelo; bese kukhona ibhoku elilodwa le-`on <event>` ngalinye, eliphethwe nge-`end`. Isehlakalo ososuke ukusishiyile ayibhali lutho.

| Ukusetha | Incazelo |
|---|---|
| `post <id>` | I-id ye-post: izinhlamvu, izinombolo, `-` no-`_` |
| `name <text>` | Lokho uhlu lwe-Control olukhombisayo |
| `extension <ext>` | Isandiso sefayela: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … kulo lonke umugqa we-`emit`, noma akukho |
| `decimal-point yes` / `no` | `10.` esikhundleni se-`10` (amakhomenti kawakaze agcine ichashazi) |
| `canned-cycles yes` / `no` | `no`: izimbobo zibhalwa njengezinyathelo ze-G0/G1 ezimelelwe |
| `modal <group> <words>` | Amagama eqembu (`modal motion G0 G1 G2 G3`) abhalwa kuphela lapho eshintsha |

## Izehlakalo

Zisebenza ngalolu hlelo lohlelo: `start`; bese ngomsebenzi ngamunye `operation`, `tool-change` (lapho ithuluzi lishintsha), `spindle` (lapho isivinini sishintsha), `approach` (ukunyuka kuya ekuqaleni kokuqala, ngaphambi kwe-rapid yokuqala), `coolant-on`, bese izinyathelo zawo njenge-`rapid`, `feed` ne-`arc`, nomjikelezo ngamunye oqinile njenge-`cycle-start`, i-`cycle-hole` ngembobo ngayinye kanye ne-`cycle-end`; ekugcineni `end`.

Izehlakalo eziningi, zamaeksisi angaphezu kwamathathu (i-post engenayo lezi yenqaba uhlelo oluthile futhi ibhale igama lesehlakalo elingelo):

| Isehlakalo | Lapho | Okuguquguqukayo kwaso |
|---|---|---|
| `index` | Ngaphambi komsebenzi okungahluki isiqondiso sawo sethuluzi kuleso sokugcina, nangaphambi komsebenzi wokuqala emshinini onama-eksisi azungezayo | `rot.a`, `rot.b`, `rot.c` (izikhundla okufanele ziye kuzo; zingenalutho ye-eksisi umshini ongenayo), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Izinyathelo zomsebenzi lapho ama-eksisi azungezayo ahamba ngenkathi isika | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (yebo lapho ukondla kufanele kube kwesikhathi esiphambene), `invf` (1/iminithi) |
| `rotary-end` | Ngemva komsebenzi onjalo | |
| `probe-move` | Inyathelo elime lapho iprobhu iqeda ukuthinta | `x`, `y`, `z`, `f`, `probe.n` (1 kuya ku-4), `probe.axis` (x, y noma z), `probe.k` (1, 2 noma 3) |
| `probe-set` | Ngemva kokuthintwa kwemijikelezo eyodwa yokuhlola | `probe.kind` (`"z"`, `"x"`, `"y"` noma `centre`), `probe.action` (`set` noma `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Inyathelo lokuthunga emshinini wokuthenda | `x`, `z`, `thread.lead` |

Futhi kuwo wonke umcimbi: `kin` (none, a, b, ac, bc), `rotary` ne-`tcp` (yebo noma cha, kumshini kuSetup), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` nomsebenzi `op.turn`, nasemshinini wokuthenda `spin.mode` (css noma rpm), `spin.css`, `spin.max` no-`tool.nose`. Igama lamagama elinenani elingenalutho, njenge-`A{rot.a}` emshinini ongenayo i-eksisi ye-A, liyashiywa emugqeni. Qhathanisa ne-x, y no-z njengombhalo phakathi kwezinkomba (`if probe.kind == "z"`): ngaphandle kwazo, ziyizinombolo zokunyakaza.

Imigqa emibili engaphezulu kwe-post eyenza ibe yi-post yomshini wokuthenda: `machine lathe` (bese ibhala u-X no-Z kuphela futhi yenqaba izindlela zokugaya njengoba i-post yokugaya yenqaba izindlela zokuthenda) ne-`lathe-x diameter` noma `lathe-x radius`.

Isehlakalo ngasinye singasebenzisa okuguquguqukayo kohlobo lwaso lokuhamba, kubhalwe `{name}`: uhlelo (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), isitoko (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), ithuluzi (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), umsebenzi (`op.name`, `op.type`), `rpm`, indawo yokuhamba (`x`, `y`, `z`, `f`, ne-`moved`: true uma i-eksisi yodwa iguqukile), ama-arc (`arc.g` 2 noma 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) nemigodi (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Uhlu lwe-**Events and variables** kumhleli lubonisa ukuthi isehlakalo ngasinye sibona ini. Isimo ongasifunda usethe: `cool`, `offset`, kanye ne-`at.x`, `at.y`, `at.z`, `at.f` (amanani okugcina abhalwe).

## Izitatimende

| Isitatimende | Esikwenzayo |
|---|---|
| `raw TEXT` | Umugqa uthayipheke ngokuqondile (ngaphandle kwenombolo yomugqa) |
| `comment TEXT` | `(TEXT)` nezinhlamvu ezingesiyo ze-ASCII nezibambeli zisuswa |
| `emit WORD WORD …` | Umugqa wamagama; amagama aphuma engenalutho ayashiywa; ngaphandle kwamagama, ngeke kubhalwe umugqa |
| `word WORD …` | Engeza amagama emugqeni okhiwayo; i-`emit` eyodwa iyawuvala |
| `if EXPR` … `else` … `end` | Izimo: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, uma kungenjalo b) |
| `for tool in tools` … `end` | Kanye kwethuluzi ngalinye elisetshenziswa ohlelweni |
| `set NAME EXPR` | Gcina inani (`set offset tool.number`) |
| `reset NAME …` | Khohlwa amagama amodal (iqembu, inhlamvu yekheli efana no-`Z`, noma `at.z`) |
| `do rapid X Y Z` | Sebenzisa isehlakalo se-`rapid` ngephoyinti |

Igama ngumbhalo othayipiwe onezimbobo ze-`{variable|filter}`. Ama-filter yi-`upper`, `lower`, `pad:N` (ukugcwalisa ngo-zero), `cut:N` (izinhlamvu ezingu-N zokuqala), `safe` (ASCII ephephile kumakhomenti) ne-`int`. Igama elisiphela nge-`~` liyi-**modal**: libhalwa kuphela uma lihlukile kulokho okubhalwe ekugcineni (`G1~`, `X{x}~`). Igama elisiphela nge-`~!` libhalwa njalo futhi liyakhunjulwa. Igama elingeyona okuguquguqukayo liyisicu esingumbhalo (`G81`, `mist`). Izinombolo ziyazungezwa kuya ku-0.001 mm futhi zibhalwa ngaphandle kwamazero asele emuva.

## Okungenziwa yi-post

Inquma indlela yokubhala izinyathelo, akukho ngaphezu. Ayikwazi ukushintsha indlela yethuluzi, ukuhlela imisebenzi, ukwahlukanisa i-arc, ukungeza i-eksisi, ukwazi ukuhamba nokuhlanganiswa komshini wakho, noma ukwenza ukubalwa kwama-coordinate (akukho `+`). Izikhundla ezijikelezayo ngokwazo zivela emshinini ochazwe ku-Setup, hhayi ku-post: i-post ingashintsha uphawu lwazo noma amagama, kodwa hhayi ukuhamba kwayo. Ukuphila kwethuluzi nemijikelezo yezinhlelo ezincane akwakhiwe. Ifayela le-post lesitayela se-`.cps` esivela kolunye uhlelo alikwazi ukulayishwa: le ifomethi ehlukile futhi elula.
