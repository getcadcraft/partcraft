---
title: Ama-post ongawahlela
summary: I-post iwumbhalo omfushane owenza umzila wamathuluzi ube yi-G-code yolawulo lwakho. Kopisha enye yama-post akhelwe ngaphakathi, shintsha imigqa odinga (izinombolo zemigqa, ukushintsha ithuluzi, ukunyakazisa ekhaya, ikhodi yokuphela), bona i-G-code ebhalwa njengoba uthayipha, bese uyigcina nengxenye.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, hlela i-post, post yezifiso, cpost, ukushintsha ithuluzi, M6, G43, umjikelezo ohlelwe, izinombolo zemigqa, modal, umcimbi, okuguquguqukayo
from: 36ab8a38
---

Umzila wamathuluzi ofanayo kumele ubhalwe ngokwehlukile ezilawuli ezahlukene: izinombolo zemigqa noma azikho, `M6` noma ukumisa, `G28` noma `G53`, `M30` noma `M2`. I-**post** iwumbhalo omfushane otshela ukuthi kwenziwa kanjani. Ama-post amathathu akhelwe e-PartCraft (ahambisana ne-Fanuc, GRBL ne-LinuxCNC) abhalwe kule fomethi, ngakho i-post yakho ingaqala njengekhophi yenye yazo.

Hlola okuphumayo kusimulator somshini wakho ngaphambi kokusika, futhi uyisebenzise kuqala endaweni ephezu kwesitoko. Ama-post akhelwe abhala ngqo lokho ayekubhala ngaphambi kwale fomethi (izivivinyo ziqhathanisa okuphumayo bayte ngebayte kumaphrogramu amakhulu), kodwa akukho lapha okuqinisekisiwe emshinini wakho, futhi i-post oyishintshile iyeyakho ukuyiqinisekisa.

## Yenza eyakho

Ku-Manufacture, ngaphansi kwe-**Post**:

- {{ui:Hlela iposi…}} kulawulo olakhelwe ngaphakathi uvula **ikhophi yakho** yalo. Kwenye yama-post akho uvula leyo post.
- {{ui:Iposi elisha…}} iqala ngepost encane engenalutho equkethe zonke izenzakalo.
- {{ui:Ngenisa ifayela le-post…}} ifunda ifayela lombhalo `.cpost` (ifayela oliwuthola ku-**Londoloza njengefayela…** kwi-editor).

I-editor ibonisa umbhalo, umugqa otshela ukuthi uyafundeka yini (nomugqa ongalungile uma kukhona), kanye ne-G-code i-post eyibhalayo njengoba uthayipha. **Bonisa nge** ikhetha uhlelo oluncane lwesampula olusebenzisa zonke izenzakalo, noma uhlelo lwalengxenye. {{ui:Londoloza}} igcina i-post kufayela lengxenye (kuze kube ngama-post angu-20) bese iyikhetha njengolawulo. Ama-post ahamba nengxenye; ukuze usebenzise enye engxenyeni enye, yigcine njengefayela bese uyingenisa lapho.

## Ukuthi i-post ibukeka kanjani

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

Imigqa eqala nge-`//` nemigqa engenalutho iyanganakwa. Phezulu kuvela izilungiselelo; bese kuba ibhulokhi eyodwa `on <event>` ngenzakalo ngayinye, evalwa ngo-`end`. Inzakalo oyishiyile ayibhali lutho.

| Isilungiselelo | Okusho |
|---|---|
| `post <id>` | Ukuhlonzwa kwe-post: izinhlamvu, amadijithi, `-` no `_` |
| `name <text>` | Okubonwa ohlwini lwe-Control |
| `extension <ext>` | Isandiso sefayela: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … kuwo wonke umugqa we-`emit`, noma akukho |
| `decimal-point yes` / `no` | `10.` esikhundleni se-`10` (amazwana awasoze agcine ichashaza) |
| `canned-cycles yes` / `no` | `no`: izimbobo zibhalwa njengokunyakaza kwe-G0/G1 okuzimele |
| `modal <group> <words>` | Amagama eqembu (`modal motion G0 G1 G2 G3`) abhalwa kuphela uma eshintsha |

## Izenzakalo

Ziqhuba ngale oda kuhlelo: `start`; bese kuba ngokwesinyathelo ngasinye `operation`, `tool-change` (uma ithuluzi lishintsha), `spindle` (uma isivinini sishintsha), `approach` (ukunyakaza kuya ephoyinteni lokuqala, ngaphambi kwe-rapid yokuqala), `coolant-on`, bese kuba ukunyakaza kwayo njenge `rapid`, `feed` ne `arc`, kanti umjikelezo ngamunye ohlelwe njenge `cycle-start`, i-`cycle-hole` eyodwa ngayinye yesimbobo kanye ne-`cycle-end`; ekugcineni `end`.

Inzakalo ngayinye ingasebenzisa okuguquguqukayo kohlobo lwayo lokunyakaza, kubhalwe `{name}`: uhlelo (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), isitoko (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), ithuluzi (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), umsebenzi (`op.name`, `op.type`), `rpm`, iphoyinti lokunyakaza (`x`, `y`, `z`, `f`, kanye ne-`moved`: iqiniso uma i-axis ishintsha), ama-arc (`arc.g` 2 noma 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) nezimbobo (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Uhlu lwe-**Events and variables** ku-editor lukhombisa ukuthi yiphi inzakalo ebona yiphi. Isimo ongasifunda futhi ongasisetha: `cool`, `offset`, kanye ne-`at.x`, `at.y`, `at.z`, `at.f` (amanani okugcina abhalwe).

## Izitatimende

| Isitatimende | Okwenzayo |
|---|---|
| `raw TEXT` | Umugqa ubhalwa njengoba uthayipha (akukho nombolo yomugqa) |
| `comment TEXT` | `(TEXT)` ngaphandle kwezinhlamvu ezingesona ze-ASCII nezibambi |
| `emit WORD WORD …` | Umugqa wamagama; amagama aphuma ephelile ayakhishwa; akukho magama, akukho mugqa |
| `word WORD …` | Engeza amagama emugqeni okwakhiwayo; i-`emit` eyodwa iwuvala |
| `if EXPR` … `else` … `end` | Izimo: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, kuthi uma kungenjalo b) |
| `for tool in tools` … `end` | Kanye ngalowo nalowo ithuluzi uhlelo olisebenzisayo |
| `set NAME EXPR` | Gcina inani (`set offset tool.number`) |
| `reset NAME …` | Khohlwa amagama e-modal (iqembu, uhlamvu lwe-address njenge `Z`, noma `at.z`) |
| `do rapid X Y Z` | Yenza inzakalo `rapid` ephoyinteni |

Igama liwumbhalo oyithayiphile enezikhala `{variable|filter}`. Izihlungi ngu `upper`, `lower`, `pad:N` (ukugcwalisa ngo-zero), `cut:N` (izinhlamvu ezingu-N zokuqala), `safe` (ASCII ephephile emazwaneni) kanye ne-`int`. Igama elibhekwe ngu-`~` liyimodal: libhalwa kuphela uma lihlukile kulokho okubhalwe ngaphambilini (`G1~`, `X{x}~`). Igama elibhekwe ngu-`~!` libhalwa njalo futhi liyakhunjulwa. Igama elingesona okuguquguqukayo liyisimbhalo esijwayelekile (`G81`, `mist`). Izinombolo ziyazungezwa zibe ngu-0.001 mm futhi zibhalwe ngaphandle kwezero ezisalayo.

## Okungenzeki ngepost

Inquma ukuthi izinyakazo zibhalwa kanjani, akukho okunye. Ayikwazi ukushintsha umzila wamathuluzi, ukuhlela imisebenzi, ukuhlukanisa i-arc, ukwengeza i-axis, ukwazi ukuhamba nezakhiwo zomshini wakho, noma ukwenza izibalo ngokuhlangana (akukho `+`). Ukuhlola, imijikelezo yokuphila kwethuluzi nezinhlelo ezingaphansi, okuphumayo kwe-4th- ne-5th-axis, nezikhodi zelathe akukakwakhiwa. Ifayela le-post elinesitayela se-`.cps` ohlelweni olunye alikwazi ukulayishwa: lolu luhlobo oluhlukile, olulula.
