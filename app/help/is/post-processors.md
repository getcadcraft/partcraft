---
title: Úttök sem þú getur breytt
summary: Úttak er stutt textaskrá sem breytir slóðinni í G-kóða fyrir stjórnbúnaðinn þinn. Afritaðu eitt af innbyggðu úttökunum, breyttu þeim línum sem þú þarft (línunúmer, verkfærisskipti, heimkeyrslur, lokakóða), sjáðu G-kóðann sem það skrifar meðan þú skrifar, og geymdu það með hlutanum.
keywords: úttak, eftirvinnsla, postprocessor, G-kóði, NC, GRBL, LinuxCNC, breyta eftirvinnslu, sérsniðið úttak, cpost, verkfærisskipti, M6, G43, föst lota, línunúmer, mátað, atburður, breyta
from: c78d0cae
---

Sama slóðin þarf að vera skrifuð á ólíkan hátt fyrir ólíka stjórnbúnaði: línunúmer eða ekki, `M6` eða stöðvun, `G28` eða `G53`, `M30` eða `M2`. **Úttak** er stutti textinn sem segir hvernig. Þrjú innbyggð úttök PartCraft (Fanuc-stíll, GRBL og LinuxCNC) eru skrifuð á þessu sniði, þannig að úttak sem þú átt sjálfur getur byrjað sem afrit af einu þeirra.

Athugaðu úttakið í hermi vélarinnar áður en skorið er, og keyrðu það í lausu lofti yfir hráefninu fyrst. Innbyggðu úttökin skrifa nákvæmlega það sem þau skrifuðu áður en þetta snið var til (prófin bera saman úttakið bæti fyrir bæti á hundruðum forrita), en ekkert hér hefur verið sannað á vélinni þinni, og úttak sem þú breytir er þitt að sanna.

## Smíðaðu eitt

Í Framleiðslu, undir **Úttak**:

- {{ui:Breyta eftirvinnslu…}} á innbyggðum stjórnbúnaði opnar **þitt eigið afrit** af honum. Á einu af þínum eigin úttökum opnast það úttak.
- {{ui:Ný eftirvinnsla…}} byrjar frá litlu auðu úttaki með öllum atburðum í því.
- {{ui:Flytja inn eftirvinnsluskrá…}} les `.cpost`-textaskrá (skrána sem þú færð úr **Vista sem skrá…** í ritlinum).

Ritillinn sýnir textann, línu sem segir hvort hann lesist (og hvaða lína er röng), og G-kóðann sem úttakið skrifar, meðan þú skrifar. **Forskoðaðu með** velur lítið sýnisforrit sem keyrir alla atburði, eða forrit þessa hlutar. {{ui:Vista}} geymir úttakið í skrá hlutans (allt að 20 úttök) og velur það sem stjórnbúnað. Úttök fylgja hlutanum; til að nota eitt í öðrum hlut, vistaðu það sem skrá og fluttu það inn þar.

## Hvernig úttak lítur út

```
post mymill
name Fræsivélin mín (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Forrit {program}: {name}
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

Línur sem byrja á `//` og auðar línur eru hunsaðar. Efst koma stillingarnar; síðan einn `on <atburður>`-kafli fyrir hvern atburð, lokaður með `end`. Atburður sem þú sleppir skrifar ekkert.

| Stilling | Merking |
|---|---|
| `post <id>` | Auðkenni úttaksins: bókstafir, tölustafir, `-` og `_` |
| `name <texti>` | Það sem Stjórnbúnaðarlistinn sýnir |
| `extension <ext>` | Skráarendingin: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … á hverri `emit`-línu, eða engin |
| `decimal-point yes` / `no` | `10.` í stað `10` (athugasemdir fá aldrei punktinn) |
| `canned-cycles yes` / `no` | `no`: göt eru skrifuð sem G0/G1-hreyfingarnar sem þau standa fyrir |
| `modal <hópur> <orð>` | Orð úr hópi (`modal motion G0 G1 G2 G3`) sem eru aðeins skrifuð þegar þau breytast |

## Atburðir

Þeir keyra í þessari röð fyrir forrit: `start`; síðan fyrir hverja aðgerð `operation`, `tool-change` (þegar verkfærið skiptir um), `spindle` (þegar hraðinn breytist), `approach` (hreyfingin upp að fyrsta punkti, áður en fyrsta hraðhreyfingin), `coolant-on`, og síðan hreyfingarnar sem `rapid`, `feed` og `arc`, og hver föst lota sem `cycle-start`, eitt `cycle-hole` fyrir hvert gat og `cycle-end`; loks `end`.

Fleiri atburðir, fyrir það sem fer út fyrir þrjá ása (úttak án atburðarins hafnar slíku forriti og nefnir atburðinn sem það vantar):

| Atburður | Hvenær | Breytur hans |
|---|---|---|
| `index` | Áður en aðgerð þar sem stefna verkfærisins er önnur en síðast, og áður en fyrsta aðgerð á vél með snúningsásum | `rot.a`, `rot.b`, `rot.c` (stöðurnar sem á að fara í; tómar fyrir ás sem vélin hefur ekki), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Hreyfingar aðgerðar þar sem snúningsásarnir hreyfast meðan hún sker | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (já þegar fóðrunin verður að vera andhverfur tími), `invf` (1/mínútur) |
| `rotary-end` | Eftir slíka aðgerð | |
| `probe-move` | Hreyfing sem stöðvast þegar rannsakinn kveikir | `x`, `y`, `z`, `f`, `probe.n` (1 til 4), `probe.axis` (x, y eða z), `probe.k` (1, 2 eða 3) |
| `probe-set` | Eftir snertingarnar í einni snertilotu | `probe.kind` (`"z"`, `"x"`, `"y"` eða `centre`), `probe.action` (`set` eða `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Skrúfgangshreyfing á rennibekk | `x`, `z`, `thread.lead` |

Einnig fyrir alla atburði: `kin` (none, a, b, ac, bc), `rotary` og `tcp` (yes eða no, frá vélinni í Uppsetningu), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` og `op.turn` aðgerðarinnar, og á rennibekk `spin.mode` (css eða rpm), `spin.css`, `spin.max` og `tool.nose`. Stafaorð sem hefur tómt gildi, eins og `A{rot.a}` á vél án A-áss, er sleppt úr línunni. Berðu saman x, y og z sem texta í gæsalöppum (`if probe.kind == "z"`): ber, eru þau hnit hreyfingarinnar.

Tvær línur í viðbót efst í úttaki gera það að úttaki fyrir rennibekk: `machine lathe` (það skrifar þá aðeins X og Z, og hafnar fræsingarslóðum eins og fræsiúttak hafnar rennslisslóðum) og `lathe-x diameter` eða `lathe-x radius`.

Sérhver atburður getur notað breytur af sinni eigin gerð hreyfingar, skrifaðar `{nafn}`: forritið (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), hráefnið (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), verkfærið (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), aðgerðina (`op.name`, `op.type`), `rpm`, punktur hreyfingarinnar (`x`, `y`, `z`, `f`, og `moved`: sant þegar ás breyttist), bogar (`arc.g` 2 eða 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) og göt (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Listinn **Atburðir og breytur** í ritlinum sýnir hvaða atburður sér hvað. Ástand sem þú getur lesið og stillt: `cool`, `offset`, og `at.x`, `at.y`, `at.z`, `at.f` (síðustu gildin sem voru skrifuð).

## Setningar

| Setning | Hvað hún gerir |
|---|---|
| `raw TEXTI` | Lína nákvæmlega eins og slegin inn (ekkert línunúmer) |
| `comment TEXTI` | `(TEXTI)` þar sem ASCII-stafir sem ekki eru og svigar eru teknir út |
| `emit ORÐ ORÐ …` | Lína af orðum; orð sem verða tóm eru sleppt; engin orð, engin lína |
| `word ORÐ …` | Bætir orðum við línuna sem er í smíðum; einfalt `emit` lýkur henni |
| `if SEGÐ` … `else` … `end` | Skilyrði: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, annars b) |
| `for tool in tools` … `end` | Einu sinni fyrir hvert verkfæri sem forritið notar |
| `set NAFN SEGÐ` | Man gildi (`set offset tool.number`) |
| `reset NAFN …` | Gleymir mátuðum orðum (hópur, stafur ássins eins og `Z`, eða `at.z`) |
| `do rapid X Y Z` | Keyrir `rapid`-atburðinn fyrir einn punkt |

Orð er skrifaður texti með `{breyta|sía}`-götum. Síurnar eru `upper`, `lower`, `pad:N` (núllfylling), `cut:N` (fyrstu N stafirnir), `safe` (ASCII sem er óhætt í athugasemd) og `int`. Orð sem endar á `~` er **mátað**: það er aðeins skrifað þegar það er frábrugðið því sem var skrifað síðast (`G1~`, `X{x}~`). Orð sem endar á `~!` er skrifað í hvert skipti og er samt munað. Nafn sem er ekki breyta er venjulegur texti (`G81`, `mist`). Tölur eru námundaðar í 0,001 mm og skrifaðar án aftari núlla.

## Það sem úttak getur ekki gert

Það ræður því hvernig hreyfingarnar eru skrifaðar, ekkert annað. Það getur ekki breytt slóð, raðað aðgerðum, skipt boga, bætt við ás, vitað um ferðasvið vélarinnar þinnar né reiknað með hnitum (það er engin `+`-aðgerð). Snúningsstöðurnar sjálfar koma frá vélinni sem lýst er í Uppsetningu, ekki úttakinu: úttak getur breytt formerki þeirra eða stöfum, ekki hreyfifræðinni. Lotur fyrir líftíma verkfæra og undirforrit eru ekki smíðaðar. Skrá með `.cps`-sniði frá öðru forriti er ekki hægt að hlaða inn: þetta er annað, einfaldara snið.
