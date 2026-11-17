---
title: ጄነሬተር መጻፍ
summary: ጄነሬተር ግቤቶቹን የሚያውጁ የአስተያየት መስመሮች ያሉት CraftScript፣ Lua ወይም Python ስክሪፕት ነው። ግቤቶቹ እንዴት ወደ ቅጽ እንደሚቀየሩ፣ ስክሪፕቱ ምን መተው እንዳለበት (አካል፣ ሉህ፣ ችግሮች)፣ አነስተኛ የተሟላ ምሳሌ፣ እና ስክሪፕትዎን እንደ ጄነሬተር እንዴት እንደሚከፍቱ።
keywords: ጄነሬተር, ጻፍ, ስክሪፕት, craftscript, ራስጌ, ግቤት, @input, @generator, body, sheet, problems, to_body, mfg_check, የመረጃ ሉህ, ምሳሌ, lattice, ፊልድ
from: ed8a5ed8
---

ጄነሬተር ተራ ስክሪፕት ([CraftScript](topic:craftscript)፣ Lua ወይም Python) ሲሆን ከላይ ጥቂት የአስተያየት መስመሮች አሉት። PartCraft አስተያየቶቹን ያነብና ቅጹን ይሰራል፤ ስክሪፕትዎ ግቤቶቹን አስቀድመው የተዘጋጁ ተለዋዋጮች ሆነው ያነባል።

## ራስጌው

እነዚህን በአስተያየት መስመሮች ያስቀምጡ (`%` በ CraftScript፣ `--` በ Lua፣ `#` በ Python):

```
% @generator ሙቀት መለዋወጫ
% @input mdot: kg/s = 0.2 [0.01 .. 10] "የጅምላ ፍሰት"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "ገጽ"
% @input solid: = true
% @input note: = "text"
```

ግቤት `name: unit = default` ነው፤ ከዚያ በአማራጭ ክልል `[min .. max]` (ቁጥሮች በውስጡ ይያዛሉ)፣ የምርጫዎች ዝርዝር `{a, b, c}` እና በጥቅስ የተጻፈ መለያ ይከተላል። ዩኒቱ ለቅጹ መለያ ብቻ ነው፦ **እሴቱ በዚያው ዩኒት ይመጣል**። ስለዚህ SI የሚፈልግ ስክሪፕት ይቀይረዋል፤ `to_si(value, 'kg/s', 'kg/s')` ደግሞ ዩኒቱ የሚፈልጉትን ማለቱን ያረጋግጣል። ስም ፊደላትን፣ ቁጥሮችን እና ከስር መስመርን (_) ብቻ ያካትታል፤ `body`፣ `sheet` እና `problems` ተይዘዋል።

## ስክሪፕቱ የሚተወው

| ተለዋዋጭ | ምን |
|---|---|
| `body` | **ግዴታ ነው።** የገጽ ሜሽ፣ አብዛኛውን ጊዜ ከ`[body, info] = to_body(field, h)`። ሩጫው ሲያልቅ ይጠገናል እና ይመረመራል። |
| `sheet` | አማራጭ። መዋቅር ነው፤ እያንዳንዱ መስክ ቁጥር ወይም ጽሑፍ፣ ወይም `value`፣ `unit`፣ `ref` እና `note` ያለው መዋቅር። የመረጃ ሉህ ይሆናል። |
| `problems` | አማራጭ። ከ`mfg_check(field, 'sls', struct(), h)` የመጣው `problems` ሴል፣ ወይም የእርስዎ ግቤቶች። ወደ ፍተሻዎቹ እና ወደ የችግሮች ዝርዝር ይሄዳሉ። |

## አነስተኛ የተሟላ ምሳሌ

```
% ግድግዳ ያለው ባዶ ኪዩብ።
% @generator ባዶ ኪዩብ
% @input side: mm = 12 [4 .. 40] "ጎን"
% @input wall: mm = 1.5 [0.5 .. 5] "ግድግዳ"
% @input h: mm = 0.5 [0.25 .. 2] "የቮክስል መጠን"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

ይህ ዝግ ሳጥን ይሰራል፤ ፍተሻው ውስጡ የታሸገ መሆኑን ለዱቄት ሂደት እንደ ስህተት ይዘግባል። የቮክስል መጠን `h` ከሚፈልጉት በጣም ቀጭን ግድግዳ ከአንድ ሶስተኛ አይበልጥ። ከሶስት ቮክስል በታች ግድግዳ አስተማማኝ አይደለም።

## ፊልዶች

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (ከፕሮፋይል የተገኘ የማዞሪያ ጠጣር), `tpms` (ጋይሮይድ፣ ሽዋርዝ P እና አልማዝ ገጾች፣ በክፍሉ ላይ ሊለወጡ የሚችሉ የሕዋስ መጠንና ግድግዳ ያሉት), `lattice` እና `lattice_beams`, `along` (በመንገድ ላይ ክብ ቦይ), ቡሊያን ኦፕሬሽኖቹ `field_union`, `field_intersect`, `field_subtract`, ለስላሳው `field_blend`, እና `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`። `sample(f, points)` በነጥቦቹ ላይ የተፈረመ ርቀት ይሰጣል (ውስጥ ሲሆን አሉታዊ)፣ `field_voxel` ለፈቺዎቹ ቮክስሎችን ይሰጣል። [ፊልዶች](topic:fields) ምን እንደሆኑ ያብራራል።

ማወቅ ተገቢ የሆኑ ገደቦች፦ ከሕዋሱ ሩብ ያህል ከሚበልጥ የሉህ ግድግዳ ቦዮቹን ይዘጋል፤ ከሦስት ቮክስል ቀጭን ባህሪ ሊጨመቅ ይችላል፤ `along` ክብ ኮኖችን ያገናኛል፣ ስለዚህ ራዲየሱ በፍጥነት ከተቀየረ እብጠት ይቀራል (ለፕሮፋይል `field_revolve` ይጠቀሙ)።

## ስክሪፕትዎን እንደ ጄነሬተር ይክፈቱ

በ{{ui:Engineer}} የስራ ቦታ {{ui:Open}} ጠቅ ያድርጉና ፋይሉን ይምረጡ። `@generator` ወይም `@input` መስመር የሌለው ስክሪፕት ውድቅ ይደረጋል፤ ምክንያቱም የሚዘጋጅ ነገር የለም። ጄነሬተሩ በዚህ አሳሽ ውስጥ ይቀመጣል (እስከ 20)፤ {{ui:Remove}} ደግሞ ይሰርዘዋል። ከእሱ የተጀመረ አካል የስክሪፕቱን ቅጂ ይይዛል፣ ስለዚህ ክፍሉ በእሱ ላይ አይመረኮዝም።

ፋይል ብዙ ጄነሬተሮችንም ሊይዝ ይችላል፦ የJSON ጥቅል `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`።
