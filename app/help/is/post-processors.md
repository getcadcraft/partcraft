---
title: Eftirvinnslur sem þú getur breytt
summary: Eftirvinnsla er stuttur textaskrá sem breytir verkferlinum í G-kóða fyrir stýringuna þína. Afritaðu eina af innbyggðu eftirvinnslunum, breyttu þeim línum sem þú þarft (línunúmer, verkfærabreyting, heimahreyfingar, lokakóði), sjáðu G-kóðann sem hún skrifar meðan þú skrifar, og geymdu hana með hlutnum.
keywords: eftirvinnsla, eftirvinnsluforrit, G-kóði, NC, GRBL, LinuxCNC, breyta eftirvinnslu, sérsniðin eftirvinnsla, cpost, verkfærabreyting, M6, G43, fastur ferill, línunúmer, modal, atburður, breyta
from: 36ab8a38
---

Sama verkferilinn þarf að skrifa á mismunandi hátt fyrir mismunandi stýringar: með línunúmerum eða án, `M6` eða bið, `G28` eða `G53`, `M30` eða `M2`. **Eftirvinnsla** er stuttur texti sem segir hvernig. Innbyggðu eftirvinnslurnar þrjár í PartCraft (Fanuc-stíll, GRBL og LinuxCNC) eru skrifaðar á þessu sniði, þannig að þín eigin eftirvinnsla getur byrjað sem afrit af einni þeirra.

Athugaðu úttakið í hermi vélarinnar áður en þú sker, og keyrðu það fyrst í lausu lofti yfir efnisstykkinu. Innbyggðu eftirvinnslurnar skrifa nákvæmlega það sem þær skrifuðu áður en þetta snið varð til (prófanirnar bera úttakið saman bæti fyrir bæti á hundruðum forrita), en ekkert hér hefur verið sannað á þinni vél, og eftirvinnsla sem þú breytir er þín til að sanna.

## Búa til eina

Undir **Eftirvinnsla** í Framleiðslu:

- {{ui:Breyta eftirvinnslu…}} á innbyggðri stýringu opnar **þitt eigið afrit** af henni. Ef þú velur eina af þínum eigin eftirvinnslum opnast hún.
- {{ui:Ný eftirvinnsla…}} byrjar frá lítilli auðri eftirvinnslu með öllum atburðum í.
- {{ui:Flytja inn eftirvinnsluskrá…}} les `.cpost`-textaskrá (skrána sem þú færð með **Vista sem skrá…** í ritlinum).

Ritillinn sýnir textann, línu sem segir hvort hann lesist (og hvaða lína er röng), og G-kóðann sem eftirvinnslan skrifar, um leið og þú skrifar. **Forskoða með** velur lítið sýnishornsforrit sem keyrir alla atburði, eða forrit þessa hlutar. {{ui:Vista}} geymir eftirvinnsluna í skrá hlutarins (allt að 20 eftirvinnslur) og velur hana sem stýringu. Eftirvinnslur fylgja hlutnum; til að nota eina í öðrum hlut vistar þú hana sem skrá og flytur hana þar inn.

## Hvernig eftirvinnsla lítur út

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

Línur sem byrja á `//` og auðar línur eru hunsaðar. Efst koma stillingarnar; síðan einn `on <event>`-kafli fyrir hvern atburð, lokaður með `end`. Atburður sem þú sleppir skrifar ekkert.

| Stilling | Merking |
|---|---|
| `post <id>` | Auðkenni eftirvinnslunnar: stafir, tölustafir, `-` og `_` |
| `name <text>` | Það sem Stýringalistinn sýnir |
| `extension <ext>` | Skráarendingin: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … á hverri `emit`-línu, eða engin |
| `decimal-point yes` / `no` | `10.` í stað `10` (athugasemdir fá aldrei punktinn) |
| `canned-cycles yes` / `no` | `no`: göt eru skrifuð sem G0/G1-hreyfingarnar sem þau tákna |
| `modal <group> <words>` | Orð í flokki (`modal motion G0 G1 G2 G3`) sem eru aðeins skrifuð þegar þau breytast |

## Atburðir

Þeir keyra í þessari röð fyrir forrit: `start`; síðan fyrir hverja aðgerð `operation`, `tool-change` (þegar verkfærið breytist), `spindle` (þegar hraðinn breytist), `approach` (hreyfingin upp að fyrsta punkti, á undan fyrstu hraðhreyfingu), `coolant-on`, og síðan hreyfingar hennar sem `rapid`, `feed` og `arc`, og hver fastur ferill sem `cycle-start`, einn `cycle-hole` fyrir hvert gat og `cycle-end`; loks `end`.

Hver atburður getur notað breyturnar af sinni tegund hreyfingar, skrifaðar `{name}`: forritið (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), efnisstykkið (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), verkfærið (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), aðgerðin (`op.name`, `op.type`), `rpm`, punktur hreyfingar (`x`, `y`, `z`, `f`, og `moved`: satt þegar ás breyttist), bogar (`arc.g` 2 eða 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) og göt (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Listinn **Atburðir og breytur** í ritlinum sýnir hvaða atburður sér hvað. Stöðu sem þú getur lesið og sett: `cool`, `offset`, og `at.x`, `at.y`, `at.z`, `at.f` (síðustu gildi sem voru skrifuð).

## Setningar

| Setning | Hvað hún gerir |
|---|---|
| `raw TEXT` | Lína nákvæmlega eins og hún er slegin inn (ekkert línunúmer) |
| `comment TEXT` | `(TEXT)` með ASCII-óviðkomandi stöfum og svigum fjarlægðum |
| `emit WORD WORD …` | Lína af orðum; orð sem verða tóm detta út; engin orð, engin lína |
| `word WORD …` | Bætir orðum við línuna sem er í smíðum; tómt `emit` lýkur henni |
| `if EXPR` … `else` … `end` | Skilyrði: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, annars b) |
| `for tool in tools` … `end` | Einu sinni fyrir hvert verkfæri sem forritið notar |
| `set NAME EXPR` | Man gildi (`set offset tool.number`) |
| `reset NAME …` | Gleymir modal-orðum (flokki, stafabókstaf eins og `Z`, eða `at.z`) |
| `do rapid X Y Z` | Keyrir `rapid`-atburðinn fyrir punkt |

Orð er texti sem þú slærð inn með `{variable|filter}`-götum. Síurnar eru `upper`, `lower`, `pad:N` (núllfylling), `cut:N` (fyrstu N stafirnir), `safe` (ASCII sem er óhætt í athugasemdum) og `int`. Orð sem endar á `~` er **modal**: það er aðeins skrifað þegar það er ólíkt því sem var síðast skrifað (`G1~`, `X{x}~`). Orð sem endar á `~!` er skrifað í hvert skipti og er samt munað. Nafn sem er ekki breyta er venjulegur texti (`G81`, `mist`). Tölur eru námundaðar í 0,001 mm og skrifaðar án aftari núlla.

## Það sem eftirvinnsla getur ekki

Hún ákveður aðeins hvernig hreyfingarnar eru skrifaðar, ekkert meira. Hún getur ekki breytt verkferli, raðað aðgerðum, skipt boga, bætt við ás, vitað um hreyfisvið eða hreyfifræði vélarinnar þinnar, eða reiknað með hnitum (það er enginn `+`). Snið fyrir þreifingu, endingu verkfæra og undirforrit, úttak fyrir 4. og 5. ás og rennibekkskóðar eru ekki byggð. `.cps`-skrá úr öðru forriti er ekki hægt að hlaða: þetta er annað, einfaldara snið.
