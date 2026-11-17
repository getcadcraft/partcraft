---
title: כתיבת מחולל
summary: מחולל הוא סקריפט CraftScript, Lua או Python עם שורות הערה שמגדירות את הקלטים שלו. איך הקלטים הופכים לטופס, מה הסקריפט חייב להשאיר (body, sheet, problems), דוגמה קטנה ושלמה, ואיך לפתוח את הסקריפט כמחולל.
keywords: מחולל, כתיבה, סקריפט, craftscript, כותרת, קלט, @input, @generator, גוף, גיליון, בעיות, to_body, mfg_check, גיליון נתונים, דוגמה, lattice, שדה
from: ed8a5ed8
---

מחולל הוא סקריפט רגיל ([CraftScript](topic:craftscript), Lua או Python) עם כמה שורות הערה בראשו. PartCraft קורא את ההערות ויוצר את הטופס; הסקריפט שלכם קורא את הקלטים כמשתנים שכבר מוגדרים.

## כותרת המחולל

כתבו אותם בשורות הערה (`%` ב-CraftScript, `--` ב-Lua, `#` ב-Python):

```
% @generator מחליף חום
% @input mdot: kg/s = 0.2 [0.01 .. 10] "ספיקת מסה"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "משטח"
% @input solid: = true
% @input note: = "טקסט"
```

קלט הוא `name: unit = default`, ואחריו, לפי הצורך, טווח `[min .. max]` (המספרים נשמרים בתוכו), רשימת בחירות `{a, b, c}` ותווית במירכאות. היחידה היא רק תווית לטופס: **הערך מגיע ביחידה הזו**, ולכן סקריפט שרוצה SI ימיר אותו. גם `to_si(value, 'kg/s', 'kg/s')` בודקת שהיחידה אכן מתאימה למה שחשבתם. שם מורכב מאותיות, ספרות וקו תחתון; השמות `body`, `sheet` ו-`problems` שמורים.

## מה הסקריפט משאיר

| משתנה | תפקיד |
|---|---|
| `body` | **חובה.** משטח רשת, בדרך כלל מ-`[body, info] = to_body(field, h)`. הוא מתוקן ונבדק כשההרצה מסתיימת. |
| `sheet` | אופציונלי. מבנה (struct) שבו כל שדה הוא מספר או טקסט, או מבנה עם `value`, `unit`, `ref` ו-`note`. הוא הופך לגיליון הנתונים. |
| `problems` | אופציונלי. תא ה-`problems` מ-`mfg_check(field, 'sls', struct(), h)`, או רשומות משלכם. הן מועברות לבדיקות ולרשימת הבעיות. |

## דוגמה קטנה ושלמה

```
% קובייה חלולה עם דופן.
% @generator קובייה חלולה
% @input side: mm = 12 [4 .. 40] "צלע"
% @input wall: mm = 1.5 [0.5 .. 5] "דופן"
% @input h: mm = 0.5 [0.25 .. 2] "גודל ווקסל"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'של הרשת');
```

היא יוצרת קובייה סגורה, והבדיקה מדווחת על חלל סגור בפנים כשגיאה לתהליך אבקה. גודל הוקסל `h` צריך להיות לכל היותר שליש מהדופן הדקה ביותר שאתם רוצים: מתחת לכשלושה ווקסלים דופן אינה אמינה.

## שדות

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (גוף סיבוב מפרופיל), `tpms` (משטחי gyroid, Schwarz P ו-diamond, עם גודל תא ודופן שיכולים להשתנות לאורך החלק), `lattice` ו-`lattice_beams`, `along` (תעלה עגולה לאורך מסלול), הפעולות הבוליאניות `field_union`, `field_intersect`, `field_subtract`, ההחלקה `field_blend`, וגם `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` מחזירה את המרחק המסומן בנקודות (שלילי בפנים), ו-`field_voxel` מחזירה ווקסלים עבור הפותרים. [שדות](topic:fields) מסביר מה הם.

מגבלות ששווה להכיר: דופן פח עבה מכרבע מגודל התא סוגרת את הערוצים; תכונה דקה משלושה ווקסלים בערך עלולה להצטמצם; `along` מחבר חרוטים עגולים, ולכן רדיוס שמשתנה במהירות משאיר תפיחה (השתמשו ב-`field_revolve` לפרופיל).

## פתיחת הסקריפט כמחולל

בסביבת העבודה {{ui:Engineer}} לחצו על {{ui:Open}} ובחרו את הקובץ. סקריפט שאין בו שורת `@generator` או `@input` נדחה: לא היה מה להגדיר. המחולל נשמר בדפדפן הזה (עד 20), ו-{{ui:Remove}} מוחק אותו. גוף שמתחיל ממנו נושא עותק של הסקריפט, כך שהחלק אינו תלוי בו.

קובץ יכול להכיל גם כמה מחוללים: חבילת JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
