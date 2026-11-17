---
title: كتابة مولّد
summary: المولّد سكربت CraftScript أو Lua أو Python مع أسطر تعليق تُعلن مدخلاته. كيف تتحول المدخلات إلى نموذج، وما يجب أن يتركه السكربت (الجسم، الورقة، المشكلات)، ومثال صغير كامل، وكيف تفتح سكربتك كمولّد.
keywords: مولّد, كتابة, سكربت, CraftScript, ترويسة, إدخال, @input, @generator, جسم, ورقة, مشكلات, to_body, mfg_check, ورقة البيانات, مثال, هيكل شبكي, حقل
from: ed8a5ed8
---

المولّد سكربت عادي ([CraftScript](topic:craftscript) أو Lua أو Python) يحتوي على بضعة أسطر تعليق في أعلاه. يقرأ PartCraft التعليقات وينشئ النموذج، ويقرأ سكربتك المدخلات كمتغيرات مُعيَّنة مسبقًا.

## الترويسة

ضع هذه في أسطر التعليق (`%` في CraftScript، و`--` في Lua، و`#` في Python):

```
% @generator Heat exchanger
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Mass flow"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Surface"
% @input solid: = true
% @input note: = "text"
```

المُدخَل هو `name: unit = default`، ويمكن بعده اختيارياً إضافة نطاق `[min .. max]` (تبقى الأرقام داخله)، وقائمة خيارات `{a, b, c}`، وتسمية بين علامتي تنصيص. الوحدة مجرّد تسمية للنموذج: **تصل القيمة بتلك الوحدة**، لذا على السكربت الذي يريد SI أن يحوّلها. كما أن `to_si(value, 'kg/s', 'kg/s')` يتحقق أيضاً من أن الوحدة تعني ما تظنه. يتألف الاسم من أحرف وأرقام وشرطة سفلية، والأسماء `body` و`sheet` و`problems` محجوزة.

## ما يتركه السكربت

| المتغير | الوصف |
|---|---|
| `body` | **مطلوب.** شبكة سطحية، عادةً من `[body, info] = to_body(field, h)`. تُصلح وتُفحص عند انتهاء التشغيل. |
| `sheet` | اختياري. بنية (struct): كل حقل رقم أو نص، أو بنية تحوي `value` و`unit` و`ref` و`note`. تصبح ورقة البيانات. |
| `problems` | اختياري. خلية `problems` الناتجة عن `mfg_check(field, 'sls', struct(), h)`، أو إدخالاتك الخاصة. تُرسل إلى الفحوص وإلى قائمة المشكلات. |

## مثال كامل وصغير

```
% مكعب مجوّف بجدار.
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

يُنشئ صندوقاً مغلقاً، ويُبلغ الفحص عن داخله المختوم كخطأ لعملية المسحوق. اجعل حجم الفوكسل `h` لا يتجاوز ثلث أنحف جدار تريده، إذ إن الجدار الأقل من نحو ثلاثة فوكسلات لا يكون موثوقاً.

## الحقول

`field_sphere` و`field_box` و`field_capsule` و`field_cylinder` و`field_torus` و`field_revolve` (مجسم دوراني من مقطع)، و`tpms` (أسطح gyroid وSchwarz P وdiamond، مع حجم خلية وسماكة جدار يمكن أن تتغير عبر القطعة)، و`lattice` و`lattice_beams`، و`along` (قناة دائرية على طول مسار)، والعمليات المنطقية `field_union` و`field_intersect` و`field_subtract`، و`field_blend` الناعمة، و`field_offset` و`field_shell` و`field_move` و`field_rotate` و`field_scale`. تعطي `sample(f, points)` المسافة الموقّعة عند النقاط (السالبة داخل المجسم)، وتعطي `field_voxel` الفوكسلات للحلّالات. يشرح [الحقول](topic:fields) ماهيتها.

حدود تستحق المعرفة: الجدار الرقيق الذي يزيد سمكه على نحو ربع الخلية يُغلق القنوات، والميزة الأرقّ من نحو ثلاثة فوكسلات قد تنحشر. و`along` يصل بين مخاريط دائرية، لذا فنصف قطر يتغير بسرعة يترك انتفاخاً (استخدم `field_revolve` لمقطع).

## افتح سكربتك كمولّد

في مساحة العمل {{ui:المهندس}} انقر {{ui:فتح}} واختر الملف. يُرفض السكربت الذي لا يحوي سطر `@generator` أو `@input`، إذ لن يكون هناك ما يُعيَّن. يُحفظ المولّد في هذا المتصفح (حتى 20 مولّداً)، و{{ui:إزالة}} تحذفه. يحمل المجسم الذي يُنشأ منه نسخة من السكربت، فلا تعتمد القطعة عليه.

يمكن أيضاً أن يحتوي ملف على عدة مولّدات: حزمة JSON بالشكل `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
