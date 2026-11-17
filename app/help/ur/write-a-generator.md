---
title: جنریٹر لکھیں
summary: جنریٹر ایک CraftScript، Lua یا Python اسکرپٹ ہے جس میں ان پٹ کا اعلان کرنے والی تبصرے کی سطریں ہوں۔ ان پٹ فارم میں کیسے بدلتے ہیں، اسکرپٹ کیا (body، sheet، problems) چھوڑنی ہوگی، ایک چھوٹی مکمل مثال، اور اپنی اسکرپٹ کو جنریٹر کے طور پر کیسے کھولیں۔
keywords: جنریٹر، لکھیں، اسکرپٹ، CraftScript، ہیڈر، ان پٹ، @input، @generator، جسم، شیٹ، مسائل، to_body، mfg_check، ڈیٹا شیٹ، مثال، لیٹس، فیلڈ
from: ed8a5ed8
---

جنریٹر ایک عام اسکرپٹ ہے ([CraftScript](topic:craftscript)، Lua یا Python) جس کے اوپر چند تبصرے کی سطریں ہوتی ہیں۔ PartCraft تبصرے پڑھ کر فارم بناتا ہے؛ آپ کی اسکرپٹ ان ان پٹس کو ایسے متغیرات کے طور پر پڑھتی ہے جو پہلے سے سیٹ ہوتے ہیں۔

## ہیڈر

یہ سطریں تبصرے کی لائنوں میں رکھیں (CraftScript میں `%`، Lua میں `--`، Python میں `#`):

```
% @generator Heat exchanger
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Mass flow"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Surface"
% @input solid: = true
% @input note: = "text"
```

ایک ان پٹ `name: unit = default` کی شکل میں ہوتا ہے، پھر اختیاری طور پر ایک حد `[min .. max]` (اعداد اس کے اندر رکھے جاتے ہیں)، انتخاب کی فہرست `{a, b, c}` اور اقتباس میں ایک لیبل۔ یونٹ صرف فارم کے لیے ایک لیبل ہے: **قدر اسی یونٹ میں آتی ہے**، اس لیے جو اسکرپٹ SI چاہتی ہو وہ اسے تبدیل کرتی ہے، اور `to_si(value, 'kg/s', 'kg/s')` یہ بھی جانچتا ہے کہ یونٹ وہی مطلب رکھتا ہے جو آپ سمجھتے ہیں۔ نام حروف، ہندسوں اور انڈرسکور پر مشتمل ہو سکتا ہے؛ `body`، `sheet` اور `problems` پہلے سے محفوظ ہیں۔

## اسکرپٹ کیا چھوڑتی ہے

| متغیر | تفصیل |
|---|---|
| `body` | **لازمی۔** ایک سطحی میش، عام طور پر `[body, info] = to_body(field, h)` سے۔ رن ختم ہونے پر اس کی مرمت اور جانچ ہوتی ہے۔ |
| `sheet` | اختیاری۔ ایک struct ہے: ہر فیلڈ ایک عدد یا متن ہوتا ہے، یا `value`، `unit`، `ref` اور `note` والا ایک struct ہو سکتا ہے۔ یہ ڈیٹا شیٹ بن جاتی ہے۔ |
| `problems` | اختیاری۔ `mfg_check(field, 'sls', struct(), h)` کا `problems` سیل، یا آپ کے اپنے اندراجات۔ یہ جانچ اور مسائل کی فہرست میں جاتے ہیں۔ |

## ایک مکمل چھوٹی مثال

```
% دیوار والا ایک کھوکھلا کیوب۔
% @generator Hollow cube
% @input side: mm = 12 [4 .. 40] "Side"
% @input wall: mm = 1.5 [0.5 .. 5] "Wall"
% @input h: mm = 0.5 [0.25 .. 2] "Voxel size"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

یہ ایک بند ڈبہ بناتی ہے، اور جانچ پاؤڈر پروسیس کے لیے اس کے بند اندرونی حصے کو خرابی کے طور پر رپورٹ کرتی ہے۔ وکسل سائز `h` کو اس پتلی ترین دیوار کے زیادہ سے زیادہ ایک تہائی کے برابر رکھیں جو آپ چاہتے ہیں: تقریباً تین وکسل سے کم پر دیوار قابلِ اعتماد نہیں ہوتی۔

## فیلڈز

`field_sphere`، `field_box`، `field_capsule`، `field_cylinder`، `field_torus`، `field_revolve` (پروفائل سے ٹھوس گردش)، `tpms` (gyroid، Schwarz P اور diamond سطحیں، سیل سائز اور دیوار کے ساتھ جو پورے حصے میں بدل سکتی ہیں)، `lattice` اور `lattice_beams`، `along` (ایک راستے کے ساتھ گول چینل)، بولین `field_union`، `field_intersect`، `field_subtract`، ہموار `field_blend`، اور `field_offset`، `field_shell`، `field_move`، `field_rotate`، `field_scale`۔ `sample(f, points)` نقاط پر دستخط شدہ فاصلہ دیتا ہے (اندر منفی)، `field_voxel` سالورز کے لیے وکسل دیتا ہے۔ [Fields](topic:fields) بتاتا ہے کہ یہ کیا ہیں۔

جاننے کے قابل حدود: شیٹ کی دیوار سیل کے تقریباً چوتھائی سے موٹی ہو تو چینلز بند ہو جاتے ہیں؛ تین وکسل سے تقریباً پتلا فیچر دب سکتا ہے؛ `along` گول کونز کو جوڑتا ہے، اس لیے تیزی سے بدلتا ہوا رداس ابھار چھوڑ دیتا ہے (پروفائل کے لیے `field_revolve` استعمال کریں)۔

## اپنی اسکرپٹ کو جنریٹر کے طور پر کھولیں

{{ui:انجینئر}} ورک اسپیس میں {{ui:کھولیں}} پر کلک کریں اور فائل منتخب کریں۔ جس اسکرپٹ میں `@generator` یا `@input` کی لائن نہ ہو وہ قبول نہیں کی جاتی: سیٹ کرنے کے لیے کچھ ہوتا ہی نہیں۔ جنریٹر اس براؤزر میں محفوظ رہتا ہے (زیادہ سے زیادہ 20) اور {{ui:ہٹائیں}} اسے حذف کرتا ہے۔ اس سے شروع کیا گیا جسم اسکرپٹ کی ایک نقل ساتھ رکھتا ہے، اس لیے پرزہ اس پر انحصار نہیں کرتا۔

ایک فائل میں کئی جنریٹر بھی رکھے جا سکتے ہیں، جیسے JSON بنڈل `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}` کی شکل میں۔
