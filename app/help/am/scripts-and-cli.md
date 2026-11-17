---
title: ስክሪፕቶች እና የትእዛዝ መስመር
summary: የPartCraft ስክሪፕት ቅርጸት (.pcscript) ክፍልን ሙሉ በሙሉ እንደ ሊነበብ ጽሑፍ የሚጽፍ፣ እና partcraft የትእዛዝ መስመር መሳሪያ ክፍሎችን ያለ ስክሪን የሚገነባ፣ የሚቀይር፣ ወደ ኋላ የሚመልስ እና የሚፈትሽ።
keywords: ስክሪፕት, pcscript, ጽሑፍ, የትእዛዝ መስመር, cli, ተርሚናል, ባች, አውቶማቲክ, ፍተሻ, lint, መገንባት, ወደ ውጭ መላክ, የስሪት ቁጥጥር, ልዩነት, ፓራሜትሪክ ስክሪፕት
from: c56df222
---

ጥንቃቄ የተሞላበት ሞዴል ከአዝራሮች ይልቅ በዲስፕሊን ላይ የተመሰረተ ነው። እንደ ጽሑፍ የተጻፈ ክፍል ሊነበብ፣ ሊገመገም፣ መስመር በመስመር ሊነጻጸር እና በስክሪፕት ዳግም ሊገነባ ይችላል። PartCraft ወደ ሁለቱም አቅጣጫ ይሄዳል፦ ማንኛውም ክፍል እንደ ስክሪፕት ሊጻፍ ይችላል፣ ስክሪፕትም ክፍሉን ይገነባል።

## በመተግበሪያው ውስጥ

በ{{ui:Parameters}} ትር ላይ፣ በ**ስክሪፕት** ስር፦

- {{ui:Save as script}} ክፍት ክፍሉን እንደ `<name>.pcscript` ያወርዳል።
- {{ui:Open script}} ከ`.pcscript` ፋይል ክፍል ይገነባል። ስህተት ከመስመሩ ቁጥር ጋር ይነገራል እና ምንም አይተካም።

## የስክሪፕት ቅርጸት

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

ደንቦቹ፦

- በግራ ጠርዝ ላይ ያለ መስመር መግለጫ ይጀምራል፦ `pcscript`፣ `part`፣ `param`፣ የባህሪ ዓይነት (`sketch`፣ `extrude`፣ `revolve`፣ `hole`፣ `lpattern`፣ `cpattern`፣ `mirror`፣ `fillet`፣ `chamfer`፣ `shell`፣ `import` እና አዲሶቹ ዓይነቶች) ከስሙ ጋር፣ ወይም `rollback <feature>`።
- የገቡ መስመሮች ከላይ ላለው መግለጫ ቅንብሮች ናቸው። ብቻውን የቆመ ቅንብር (`through`፣ `reverse`፣ `suppressed`) አዎ ማለት ነው።
- የቁጥር ቅንብር ቁጥር ነው፣ ወይም `=` እና አገላለጽ ሲሆን እኩልታ ይሆናል፦ `depth = thick`።
- በስኬች ውስጥ፦ `on` ፕላኑን ይሰይማል (`front`፣ `top`፣ `right`፣ `face Base end`፣ `face Revolve1 side l3`)፤ ጂኦሜትሪ `point <name> x, y`፣ `line <name> <point> <point>`፣ `circle <name> <centre> <radius>`፣ `arc <name> <centre> <start> <end>` (በሰዓት አቅጣጫ ተቃራኒ) ወይም `spline <name> fit|control <points>` ነው፤ ግንኙነቶች የዓይነታቸው እና የሚያገናኙዋቸው ስሞች ናቸው (`O` መነሻ ነጥቡ ነው)፤ ልኬት በእሴቱ ወይም በ`= expression` ይጠናቀቃል።
- ለጂኦሜትሪ ወይም ለግንኙነት መስመር ተጨማሪ ቅንብሮች በመጨረሻ በካሬ ቅንፍ ውስጥ በ`;` ተለያይተው ይገባሉ፦ `[construction]`፣ `[side -1; label 5, 3]`።
- `#` አስተያየት ይጀምራል (በመስመር መጀመሪያ ወይም ከክፍተት በኋላ)። ክፍተት ያላቸው ስሞች በ"ድርብ ጥቅስ" ውስጥ ይገባሉ።
- የባህሪ መታወቂያዎች ከ f1 የሚቆጠሩት በተጻፉበት ቅደም ተከተል ነው። የጠርዝ እና የፊት ማጣቀሻዎች ይጠቀሙባቸዋል፣ ለምሳሌ `edge f2.side:l3 f2.end [at 50, 0, 10]`።
- ቅርጸቱ ቃል የሌላቸው ቅንብሮች `json` ተብለው ይጻፋሉ እና ከዚያ እሴት ይከተላል፤ እንደዛው ይነበባሉ።

ከመተግበሪያው የተቀመጠ ስክሪፕት ሁሉንም ቅንብሮች ይይዛል፣ ስለዚህ ተመሳሳዩ ክፍል ሆኖ ይከፈታል። ከመተግበሪያው የተገባ STEP ጠጣር በስክሪፕቱ ውስጥ ይጻፋል፣ እና ከትእዛዝ መስመሩ ደግሞ በ`step-file` የተሰየመ የተለየ `.step` ፋይል ሆኖ ይጻፋል።

## የትእዛዝ መስመር መሳሪያ

መሳሪያው Node.js 24 ባለው ኮምፒውተር ላይ ከCadCraft ምንጭ ቅጂ ይሰራል፦ `node tools/partcraft-cli/partcraft.mjs <command>`። የገንቢ መሳሪያ ነው እና ከመተግበሪያው ተመሳሳይ ሞጁሎችን ይጠቀማል። ክፍሎች `.partcraft.json` ፋይሎች ወይም `.pcscript` ስክሪፕቶች ናቸው።

| ትእዛዝ | ምን ያደርጋል |
|---|---|
| `info <part>` | ባህሪያት፣ መለኪያዎች፣ የሮልባክ አሞሌ፣ የተገነባው ጠጣር ይዘት (volume) እና መጠን |
| `params <part>` | እያንዳንዱ መለኪያ እና እኩልታ ከእሴቱ ጋር |
| `set <part> width=150 Base.depth==thick` | ወደ ፊት፦ መለኪያዎችን ይቀይራል፣ ቁጥሮችን ያገናኛል (`==` ወይም አገላለጽ)፣ ተራ ቁጥሮችን ያስቀምጣል |
| `drive <part> Base.depth=12` | ወደ ኋላ፦ ከተነዳው ቁጥር ጀርባ ያለውን መለኪያ ይፈታል (`--prefer width` አንዱን ይመርጣል) |
| `build <part> --out x.step` | `.step`፣ `.stl`፣ `.3mf`፣ `.json`፣ `.pcscript` ወይም ማክሮ (`.swb`) ይጽፋል |
| `build <part> --table sizes.csv --out-dir sizes` | ለእያንዳንዱ የዲዛይን ሰንጠረዥ ረድፍ አንድ ፋይል |
| `variants <part> --out-dir d` ወይም `--zip f.zip` | እያንዳንዱን ውቅር እንደ STEP፣ IFC፣ DWG እና ቅድመ-እይታ፣ የልዩነቶች ሰንጠረዥ እና የቤተ-መጻሕፍት ንጥል ይሰራል (`--only "A,B"`፣ `--formats step,ifc,dwg,preview`፣ `--no-item`)፤ [የልዩነቶች ጥቅል ይስሩ](topic:variant-pack) ይመልከቱ |
| `script <in.pcscript> -o part.json` | ስክሪፕት ወደ ክፍል |
| `to-script <part> -o part.pcscript` | ክፍል ወደ ስክሪፕት |
| `rollback <part> [<feature>]`፣ `forward <part> [--end]` | የሮልባክ አሞሌውን በፋይሉ ውስጥ ያንቀሳቅሳል |
| `check <part> [--strict]` | የዲስፕሊን ፍተሻ (ከታች) |

`build` `--set name=value` (ለዚህ ግንባታ ብቻ) እና `--upto <feature>` ይወስዳል። ሁሉም ትእዛዞች `--json` ይወስዳሉ። የመውጫ ኮዶች፦ 0 ጥሩ፣ 1 ችግር ተገኝቷል፣ 2 ትእዛዙ በስህተት ተጽፏል። ስክሪፕት በቦታው በጭራሽ አይጻፍም፤ የተለወጠ ቅጂ ለማስቀመጥ `-o` ይስጡ።

## ፍተሻው

`check` ክፍሉን ለመቀየር ከባድ የሚያደርገውን ይዘግባል፦

| ግኝት | የሚቆጠርበት |
|---|---|
| ከመጠን በላይ የተገለጸ ስኬች (የሚጋጩ ወይም የተደጋገሙ ግንኙነቶች) | ስህተት |
| ያልተገነባ ባህሪ | ስህተት |
| ስህተት ያለበት መለኪያ ወይም እኩልታ፣ ወይም እርስ በርስ የሚጠቀሙ መለኪያዎች | ስህተት |
| ከበቂ በታች የተገለጸ ስኬች፣ ከነጻነት ደረጃዎቹ ጋር | ማስጠንቀቂያ |
| በባህሪዎች እና ልኬቶች ውስጥ በቀጥታ የተጻፉ እና በምንም መለኪያ ያልተነዱ ቁጥሮች | ማስጠንቀቂያ |
| ምንም የማይጠቀምበት መለኪያ | ማስጠንቀቂያ |
| የታገደ ባህሪ፤ የሮልባክ አሞሌው በመጨረሻ ያልሆነ | ማስጠንቀቂያ |

`--strict` ሁሉንም ማስጠንቀቂያ ወደ ስህተት ይለውጣል፣ ስለዚህ የግንባታ ስክሪፕት ሙሉ በሙሉ ያልተነዳ ክፍልን ሊከለክል ይችላል።

:::note
የ`.swb` ማክሮ ውጤቱ ለአብዛኞቹ ሱቆች በሚጠቀሙት የክፍል ሞዴለር ነው፦ በዚያ ፕሮግራም ውስጥ ሲሰራ ክፍሉን እዚያ ይገነባል። እዚህ በዚያ ፕሮግራም አልተፈተነም (በአገልጋዮቻችን ላይ አይገኝም)፣ ስለዚህ እንዳልተፈተነ ይቆጠር።
:::
