---
title: Izikripthi nomugqa wokuyala
summary: Ifomethi yesikripthi se-PartCraft (.pcscript) ebhala ingxenye yonke njengombhalo ofundekayo, nethuluzi lomugqa wokuyala le-partcraft elakha, liguqule, lihlehlise futhi lihlole izingxenye ngaphandle kwesikrini.
keywords: isikripthi, pcscript, umbhalo, umugqa wokuyala, cli, terminal, iqoqo, zenzakalela, hlola, lint, akha, thumela, ulawulo lwenguquko, diff, isikripthi esiparamethrikhi
from: c56df222
---

Ukumodela okucophelelayo kuncike kakhulu ekuzilawuleni kunasezinkinobhweni. Ingxenye ebhalwe njengombhalo ingafundwa, ibuyekezwe, iqhathaniswe umugqa ngomugqa futhi yakhiwe kabusha yisikripthi. I-PartCraft isebenza ngezindlela zombili: noma iyiphi ingxenye ingabhalwa njengesikripthi, futhi isikripthi sakha ingxenye.

## Ohlelweni

Kwithebhu ethi {{ui:Parameters}}, ngaphansi kwe-**Isikripthi**:

- {{ui:Save as script}} ilanda ingxenye evulekile njenge `<name>.pcscript`.
- {{ui:Open script}} yakha ingxenye kusuka kufayela le-`.pcscript`. Iphutha libikwa ngenombolo yomugqa walo, futhi akukho okufakwayo esikhundleni.

## Ifomethi yesikripthi

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Imithetho:

- Umugqa osendaweni yokunxele uqala isitatimende: `pcscript`, `part`, `param`, uhlobo lwesici (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` nezinhlobo ezintsha) elilandelwa igama lalo, noma `rollback <feature>`.
- Imigqa egxilile yizilungiselelo zesitatimende esingaphezulu. Ilungiselelo elimi lodwa (`through`, `reverse`, `suppressed`) lisho yebo.
- Ilungiselelo lenombolo liyinombolo, noma `=` nesisho, okwenza isibalo: `depth = thick`.
- Esikethini: `on` ibiza indiza (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); ijometri ingu `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (ngokuphambene nowashi) noma `spline <name> fit|control <points>`; izixhumanisi zingohlobo lwazo namagama abahlanganisayo (`O` ingumsuka); isilinganiso siphela ngenani laso noma nge-`= expression`.
- Izilungiselelo ezingakhethwa zejometri noma zokuxhumana zibekwa ekugcineni emabhulaketini aphakathi, zihlukaniswe ngu-`;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` iqala ukuphawula (ekuqaleni komugqa noma emva kwesikhala). Amagama anezikhala abekwa phakathi kwezinikezo ezimbili (`"`).
- Izikhombisi zezici ziqala ku-f1 ngokulandelana okubhalwe ngakho. Izinkomba zemiphetho nobuso zisebenzisa zona, isibonelo `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Izilungiselelo ifomethi engenawo amagama azo zibhalwa `json` nenani; zifundwa kabusha njengoba zinjalo.

Uma silondolozwe kusuka kuhlelo, isikripthi sifaka zonke izilungiselelo, ngakho sivula njengengxenye efanayo. Isolidi se-STEP esingenisiwe sibhalwa ngaphakathi kwesikripthi kusuka kuhlelo, nanjengefayela le-`.step` elihlukile elibizwa nge-`step-file` emugqeni wokuyala.

## Ithuluzi lomugqa wokuyala

Ithuluzi lisebenza kukhompyutha enoNode.js 24, kusuka kukhophi yomthombo we-CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. Lithuluzi lomthuthukisi futhi lisebenzisa amamojuli afanayo nohlelo. Izingxenye ziyizifayela ze-`.partcraft.json` noma izikripthi ze-`.pcscript`.

| Umyalo | Okwenzayo |
|---|---|
| `info <part>` | Izici, amapharamitha, ibha ye-rollback, ivolumu nosayizi wesolidi esakhiwe |
| `params <part>` | Yonke iparamitha nesibalo ngenani layo |
| `set <part> width=150 Base.depth==thick` | Ngokuqhubeka: shintsha amapharamitha, xhuma izinombolo (`==` noma isisho), usethe izinombolo ezilula |
| `drive <part> Base.depth=12` | Ngokubuyela emuva: xazulula ipharamitha elawula inombolo eshayelwayo (`--prefer width` ikhetha enye) |
| `build <part> --out x.step` | Ibhala `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` noma i-macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Ifayela elilodwa ngomugqa ngamunye wethebula lomklamo |
| `variants <part> --out-dir d` noma `--zip f.zip` | Yonke ukucushwa njenge-STEP, IFC, DWG nesibukeli, ithebula lezinguqulo nento yomtapo wolwazi (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); bheka [Yenza iphakethe lezinguqulo](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Isikripthi sibe yingxenye |
| `to-script <part> -o part.pcscript` | Ingxenye ibe isikripthi |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Shintsha ibha ye-rollback kufayela |
| `check <part> [--strict]` | Ukuhlolwa kokuzilawula (ngezansi) |

`build` futhi amukela `--set name=value` (ngalokhu kwakhiwa kuphela) no `--upto <feature>`. Yonke imiyalo amukela `--json`. Amakhodi okuphuma: 0 kuhle, 1 kutholakale inkinga, 2 umyalo ubhalwe kabi. Isikripthi asibhalwa kabusha endaweni yaso: nikeza `-o` ukuze ulondoloze ikhophi eshintshiwe.

## Ukuhlolwa

`check` ibika lokho okwenza ingxenye ibe nzima ukuyishintsha kamuva:

| Okutholiwe | Kubalwa njenge |
|---|---|
| Isikethi esichazwe ngokweqile (izixhumanisi eziphikisanayo noma eziphindiwe) | iphutha |
| Isici esingakhi | iphutha |
| Ipharamitha noma isibalo esinephutha, noma amapharamitha asebenzisana | iphutha |
| Isikethi esingachazwanga ngokwanele, namandla ayo okunyakaza | isexwayiso |
| Izinombolo ezibhalwe ngqo ezicini nasezilinganisweni ezingalawulwa yipharamitha | isexwayiso |
| Ipharamitha engasetshenziswa | isexwayiso |
| Isici esivinjiwe; ibha ye-rollback ingekho ekugcineni | isexwayiso |

`--strict` yenza wonke amasexwayiso abe amaphutha, ngakho isikripthi sokwakha singenqaba ingxenye engalawulwa ngokugcwele.

:::note
Okukhiphayo kwe-macro ye-`.swb` kuhloselwe umklami wengxenye umaningi wezitolo asebenzisayo: uma kusebenza ngaphakathi kwaleyo nhlelo, yakha ingxenye khona. Ayikaqhutshwa kuleyo nhlelo lapha (ayitholakali ezinsizeni zethu), ngakho yiphathe njengengahlolwanga.
:::
