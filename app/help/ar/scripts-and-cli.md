---
title: السكربتات وسطر الأوامر
summary: صيغة سكربت PartCraft (‎.pcscript) التي تكتب جزءًا كاملًا كنص مقروء، وأداة سطر الأوامر partcraft التي تبني الأجزاء وتغيّرها وتعيدها إلى الوراء وتفحصها دون الشاشة.
keywords: سكربت, pcscript, نص, سطر الأوامر, cli, طرفية, دفعة, أتمتة, فحص, lint, بناء, تصدير, التحكم بالإصدارات, فرق, سكربت معاملي
from: c56df222
---

النمذجة الدقيقة تعتمد على الانضباط أكثر من اعتمادها على الأزرار. فالجزء المكتوب كنص يمكن قراءته ومراجعته ومقارنته سطرًا بسطر وإعادة بنائه بسكربت. ويعمل PartCraft في الاتجاهين: يمكن كتابة أي جزء كسكربت، ويبني السكربت الجزء.

## داخل التطبيق

في تبويب {{ui:Parameters}}، ضمن **Script**:

- {{ui:Save as script}} ينزّل الجزء المفتوح كملف `<name>.pcscript`.
- {{ui:Open script}} يبني جزءًا من ملف `.pcscript`. ويُبلَّغ عن الخطأ مع رقم سطره، ولا يُستبدل شيء.

## صيغة السكربت

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

القواعد:

- السطر الذي يبدأ من الحافة اليسرى يبدأ عبارة: `pcscript`، أو `part`، أو `param`، أو نوع ميزة (`sketch`، `extrude`، `revolve`، `hole`، `lpattern`، `cpattern`، `mirror`، `fillet`، `chamfer`، `shell`، `import` والأنواع الأحدث) يتبعه اسمها، أو `rollback <feature>`.
- الأسطر المزاحة هي إعدادات العبارة التي فوقها. والإعداد الذي يقف وحده (`through`، `reverse`، `suppressed`) يعني نعم.
- الإعداد الرقمي هو رقم، أو `=` ثم تعبير، فيصبح معادلة: `depth = thick`.
- داخل المخطط: تسمّي `on` المستوى (`front`، `top`، `right`، `face Base end`، `face Revolve1 side l3`). والهندسة هي `point <name> x, y`، و`line <name> <point> <point>`، و`circle <name> <centre> <radius>`، و`arc <name> <centre> <start> <end>` (عكس اتجاه عقارب الساعة)، أو `spline <name> fit|control <points>`. والعلاقات هي نوعها والأسماء التي تربطها (`O` هي نقطة الأصل). ويَنتهي البُعد بقيمته، أو بـ `= expression`.
- توضع الإعدادات الاختيارية لسطر الهندسة أو العلاقة بين أقواس مربعة في النهاية، مفصولة بـ `;`: `[construction]`، و`[side -1; label 5, 3]`.
- `#` يبدأ تعليقًا (في بداية السطر أو بعد مسافة). وتوضع الأسماء التي فيها مسافات بين علامتي اقتباس مزدوجتين: "اسم بمسافات".
- تُعدّ معرّفات الميزات من f1 بحسب ترتيب كتابتها. وتستخدم مراجع الحواف والأوجه هذه المعرّفات، مثل `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- الإعدادات التي لا توجد لها كلمات في الصيغة تُكتب `json` ثم قيمة، وتُقرأ لاحقًا كما هي.

عند الحفظ من التطبيق، يتضمن السكربت كل الإعدادات، فيُفتح كالجزء نفسه. ويُكتب مجسم STEP المستورد داخل السكربت عند الحفظ من التطبيق، وكملف `.step` منفصل يسمّيه `step-file` من سطر الأوامر.

## أداة سطر الأوامر

تعمل الأداة على حاسوب يعمل بـ Node.js 24، من نسخة من مصدر CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. وهي أداة للمطوّرين، وتستخدم الوحدات نفسها التي يستخدمها التطبيق. والأجزاء ملفات `.partcraft.json` أو سكربتات `.pcscript`.

| الأمر | ما يفعله |
|---|---|
| `info <part>` | الميزات والمعاملات وشريط الرجوع، وحجم المجسم المبني ومقاسه |
| `params <part>` | كل معامل ومعادلة مع قيمته |
| `set <part> width=150 Base.depth==thick` | تغيير مباشر: تغيير المعاملات، وربط الأرقام (`==` أو تعبير)، وضبط الأرقام البسيطة |
| `drive <part> Base.depth=12` | عكسيًا: يحلّ المعامل الذي يقف خلف الرقم المُقاد (`--prefer width` يختار أحدهما) |
| `build <part> --out x.step` | يكتب `.step` و`.stl` و`.3mf` و`.json` و`.pcscript` أو ماكرو (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | ملف واحد لكل صف في جدول التصميم |
| `variants <part> --out-dir d` أو `--zip f.zip` | كل تكوين بصيغة STEP وIFC وDWG ومعاينة، وجدول المتغيّرات وعنصر مكتبة (`--only "A,B"`، `--formats step,ifc,dwg,preview`، `--no-item`)؛ انظر [إنشاء حزمة متغيّرات](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | من السكربت إلى جزء |
| `to-script <part> -o part.pcscript` | من الجزء إلى سكربت |
| `rollback <part> [<feature>]`، `forward <part> [--end]` | تحريك شريط الرجوع في الملف |
| `check <part> [--strict]` | فحص الانضباط (أدناه) |

يقبل `build` أيضًا `--set name=value` (لهذا البناء وحده) و`--upto <feature>`. ويقبل كل أمر `--json`. رموز الخروج: 0 تمام، و1 وُجدت مشكلة، و2 كُتب الأمر بشكل خاطئ. لا يُعاد كتابة السكربت في مكانه أبدًا: استخدم `-o` لحفظ نسخة معدّلة.

## الفحص

يعرض `check` ما يجعل الجزء صعب التغيير لاحقًا:

| الملاحظة | تُحسب كـ |
|---|---|
| مخطط مُعرَّف بزيادة (علاقات متعارضة أو مكررة) | خطأ |
| ميزة لا تُبنى | خطأ |
| معامل أو معادلة بها خطأ، أو معاملات تعتمد على بعضها | خطأ |
| مخطط غير مُعرَّف بالكامل، مع درجات حريته | تحذير |
| أرقام مكتوبة مباشرة في الميزات والأبعاد لا يقودها أي معامل | تحذير |
| معامل لا يستخدمه شيء | تحذير |
| ميزة مكبوتة؛ شريط الرجوع ليس في النهاية | تحذير |

يجعل `--strict` كل تحذير خطأً، فيستطيع سكربت البناء رفض جزء ليس مقادًا بالكامل.

:::note
مخرج الماكرو `.swb` مخصص لبرنامج نمذجة الأجزاء الذي تستخدمه معظم الورش: عند تشغيله داخل ذلك البرنامج يبني الجزء هناك. ولم يُشغَّل داخل ذلك البرنامج هنا (فهو غير متاح على خوادمنا)، لذا اعتبره غير مختبَر.
:::
