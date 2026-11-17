---
title: Skriptet dhe linja e komandës
summary: Formati i skriptit PartCraft (.pcscript) që shkruan një pjesë të tërë si tekst të lexueshëm, dhe mjeti i linjës së komandës partcraft që ndërton, ndryshon, kthen mbrapsht dhe kontrollon pjesët pa ekran.
keywords: skript, pcscript, tekst, linja e komandës, cli, terminal, grumbull, automatizo, kontroll, lint, ndërto, eksporto, kontroll versioni, diff, skript parametrik
from: c56df222
---

Modelimi i kujdesshëm është më shumë çështje disipline sesa butonash. Një pjesë e shkruar si tekst mund të lexohet, shqyrtohet, krahasohet rresht pas rreshti dhe rindërtohet nga një skript. PartCraft funksionon në të dy drejtimet: çdo pjesë mund të shkruhet si skript, dhe një skript ndërton pjesën.

## Në aplikacion

Te skeda {{ui:Parameters}}, nën **Script**:

- {{ui:Save as script}} shkarkon pjesën e hapur si `<emri>.pcscript`.
- {{ui:Open script}} ndërton një pjesë nga një skedar `.pcscript`. Një gabim raportohet me numrin e rreshtit të tij dhe asgjë nuk zëvendësohet.

## Formati i skriptit

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

Rregullat:

- Një rresht në skajin e majtë fillon një deklaratë: `pcscript`, `part`, `param`, një lloj veçorie (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` dhe llojet e reja) i ndjekur nga emri i tij, ose `rollback <feature>`.
- Rreshtat e thelluar janë cilësimet e deklaratës mbi to. Një cilësim i vetëm (`through`, `reverse`, `suppressed`) do të thotë po.
- Një cilësim numëror është një numër, ose `=` dhe një shprehje, që bën një ekuacion: `depth = thick`.
- Në një skicë: `on` emëron planin (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); gjeometria është `point <emri> x, y`, `line <emri> <pikë> <pikë>`, `circle <emri> <qendra> <rreze>`, `arc <emri> <qendra> <fillimi> <fundi>` (në drejtim të kundërt të akrepave të orës) ose `spline <emri> fit|control <pikat>`; lidhjet janë lloji i tyre dhe emrat që bashkojnë (`O` është origjina); një dimension përfundon me vlerën e tij ose me `= shprehje`.
- Cilësimet opsionale të një rreshti gjeometrie ose lidhjeje vendosen në kllapa katrore në fund, të ndara me `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` fillon një koment (në fillim të rreshtit ose pas një hapësire). Emrat me hapësira shkruhen në "thonjëza të dyfishta".
- ID-të e veçorive numërohen nga f1 sipas radhës së shkruar. Referencat e skajeve dhe sipërfaqeve i përdorin, për shembull `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Cilësimet për të cilat formati nuk ka fjalë shkruhen `json` dhe një vlerë; lexohen ashtu siç janë.

Të ruajtura nga aplikacioni, skripti përfshin çdo cilësim, kështu që hapet si e njëjta pjesë. Një trup STEP i importuar shkruhet brenda skriptit nga aplikacioni, dhe si skedar i veçantë `.step` i emëruar nga `step-file` kur përdoret linja e komandës.

## Mjeti i linjës së komandës

Mjeti punon në një kompjuter me Node.js 24, nga një kopje e burimit të CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. Është një mjet zhvilluesi dhe përdor të njëjtat module si aplikacioni. Pjesët janë skedarë `.partcraft.json` ose skripte `.pcscript`.

| Komanda | Çfarë bën |
|---|---|
| `info <part>` | Veçoritë, parametrat, shiriti rollback, vëllimi dhe madhësia e trupit të ndërtuar |
| `params <part>` | Çdo parametër dhe ekuacion me vlerën e tij |
| `set <part> width=150 Base.depth==thick` | Përpara: ndryshon parametrat, lidh numra (`==` ose një shprehje), cakton numra të thjeshtë |
| `drive <part> Base.depth=12` | Mbrapsht: zgjidh parametrin pas një numri të drejtuar (`--prefer width` zgjedh një) |
| `build <part> --out x.step` | Shkruan `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ose një makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Një skedar për çdo rresht të tabelës së projektimit |
| `variants <part> --out-dir d` ose `--zip f.zip` | Çdo konfigurim si STEP, IFC, DWG dhe një pamje paraprake, një tabelë variantesh dhe një artikull biblioteke (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); shih [Bëj një paketë variantesh](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skript në pjesë |
| `to-script <part> -o part.pcscript` | Pjesë në skript |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Lëviz shiritin rollback në skedar |
| `check <part> [--strict]` | Kontrolli i disiplinës (më poshtë) |

`build` pranon gjithashtu `--set name=value` (vetëm për këtë ndërtim) dhe `--upto <feature>`. Çdo komandë pranon `--json`. Kodet e daljes: 0 në rregull, 1 u gjet një problem, 2 komanda u shkrua gabim. Një skript nuk rishkruhet kurrë në vend: jepni `-o` për të ruajtur një kopje të ndryshuar.

## Kontrolli

`check` raporton çfarë e bën një pjesë të vështirë për t'u ndryshuar më vonë:

| Gjetja | Llogaritet si |
|---|---|
| Një skicë që është mbi-përcaktuar (lidhje në konflikt ose të përsëritura) | gabim |
| Një veçori që nuk ndërtohet | gabim |
| Një parametër ose ekuacion me gabim, ose parametra që përdorin njëri-tjetrin | gabim |
| Një skicë që është nën-përcaktuar, me shkallët e saj të lirisë | paralajmërim |
| Numra të shtypur drejt e në veçori dhe dimensione që asnjë parametër nuk i drejton | paralajmërim |
| Një parametër që askush nuk e përdor | paralajmërim |
| Një veçori e pezulluar; shiriti rollback jo në fund | paralajmërim |

`--strict` e bën çdo paralajmërim gabim, kështu që një skript ndërtimi mund të refuzojë një pjesë që nuk është drejtuar plotësisht.

:::note
Dalja makro `.swb` është për modeluesin e pjesëve që përdor shumica e punishteve: e ekzekutuar brenda atij programi, ndërton pjesën atje. Nuk është ekzekutuar atje nga ana jonë (nuk është e disponueshme në serverat tanë), kështu që trajtojeni si të pa testuar.
:::
