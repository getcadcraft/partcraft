---
title: סקריפטים ושורת הפקודה
summary: פורמט הסקריפט של PartCraft (.pcscript) שכותב חלק שלם כטקסט קריא, וכלי שורת הפקודה של partcraft שבונה, משנה, מחזיר לאחור ובודק חלקים בלי המסך.
keywords: סקריפט, pcscript, טקסט, שורת פקודה, cli, טרמינל, אצווה, אוטומציה, בדיקה, lint, בנייה, ייצוא, בקרת גרסאות, השוואה, סקריפט פרמטרי
from: c56df222
---

זהירות במידול היא יותר עניין של משמעת מאשר של כפתורים. חלק שנכתב כטקסט אפשר לקרוא, לבדוק, להשוות שורה אחר שורה ולבנות מחדש באמצעות סקריפט. PartCraft פועל לשני הכיוונים: כל חלק אפשר לכתוב כסקריפט, וסקריפט בונה את החלק.

## באפליקציה

בלשונית {{ui:פרמטרים}}, תחת **סקריפט**:

- {{ui:שמירה כסקריפט}} מוריד את החלק הפתוח כ-`<name>.pcscript`.
- {{ui:פתיחת סקריפט}} בונה חלק מקובץ `.pcscript`. שגיאה מדווחת עם מספר השורה שלה, ושום דבר אינו מוחלף.

## פורמט הסקריפט

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

הכללים:

- שורה בקצה השמאלי פותחת משפט: `pcscript`, `part`, `param`, סוג פיצ'ר (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` וסוגים חדשים יותר) ואחריו שמו, או `rollback <feature>`.
- שורות מוזחות הן ההגדרות של המשפט שמעליהן. הגדרה לבדה (`through`, `reverse`, `suppressed`) פירושה כן.
- הגדרה מספרית היא מספר, או `=` ואחריו ביטוי, שהופך למשוואה: `depth = thick`.
- בסקיצה, `on` קובע את המישור (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); הגאומטריה היא `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (נגד כיוון השעון) או `spline <name> fit|control <points>`; האילוצים הם הסוג שלהם והשמות שהם מחברים (`O` היא הראשית); מידה מסתיימת בערך שלה או ב-`= expression`.
- הגדרות אופציונליות של שורת גאומטריה או אילוץ נכתבות בסוגריים מרובעים בסוף, מופרדות ב-`;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` פותח הערה (בתחילת שורה או אחרי רווח). שמות עם רווחים נכתבים ב"מרכאות כפולות".
- מזהי הפיצ'רים נספרים מ-f1 לפי סדר הכתיבה. הפניות לקצה ולפאה משתמשות בהם, למשל `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- הגדרות שאין לפורמט מילים עבורן נכתבות `json` וערך; הן נקראות חזרה כמו שהן.

כשהסקריפט נשמר מהיישום, הוא כולל כל הגדרה, ולכן הוא נפתח כאותו חלק. גוף STEP מיובא נכתב בתוך הסקריפט מהיישום, וכקובץ `.step` נפרד, בשם שנקבע על ידי `step-file`, משורת הפקודה.

## כלי שורת הפקודה

הכלי פועל על מחשב עם Node.js 24, מתוך עותק של קוד המקור של CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. זהו כלי למפתחים, והוא משתמש באותם מודולים של היישום. חלקים הם קובצי `.partcraft.json` או סקריפטים מסוג `.pcscript`.

| פקודה | מה היא עושה |
|---|---|
| `info <part>` | פיצ'רים, פרמטרים, סרגל החזרה לאחור, והנפח והגודל של הגוף הבנוי |
| `params <part>` | כל פרמטר ומשוואה עם הערך שלהם |
| `set <part> width=150 Base.depth==thick` | קדימה: שינוי פרמטרים, קישור מספרים (`==` או ביטוי), הגדרת מספרים רגילים |
| `drive <part> Base.depth=12` | אחורה: פתרון הפרמטר שמאחורי מספר מונע (`--prefer width` בוחר אחד) |
| `build <part> --out x.step` | כותב `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` או מאקרו (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | קובץ אחד לכל שורה בטבלת העיצוב |
| `variants <part> --out-dir d` או `--zip f.zip` | כל תצורה כ-STEP, IFC, DWG ותצוגה מקדימה, טבלת וריאנטים ופריט ספרייה (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); ראו [יצירת חבילת וריאנטים](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | מסקריפט לחלק |
| `to-script <part> -o part.pcscript` | מחלק לסקריפט |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | הזזת סרגל החזרה לאחור בקובץ |
| `check <part> [--strict]` | בדיקת המשמעת (להלן) |

`build` מקבל גם `--set name=value` (לבנייה הזו בלבד) ו-`--upto <feature>`. כל פקודה מקבלת `--json`. קודי היציאה: 0 תקין, 1 נמצאה בעיה, 2 הפקודה הוקלדה בצורה שגויה. סקריפט אינו נכתב מחדש במקומו לעולם: ציינו `-o` כדי לשמור עותק שהשתנה.

## הבדיקה

`check` מדווח מה מקשה על שינוי החלק בהמשך:

| ממצא | נחשב כ |
|---|---|
| סקיצה מוגדרת יתר על המידה (אילוצים מתנגשים או חוזרים) | שגיאה |
| פיצ'ר שלא נבנה | שגיאה |
| פרמטר או משוואה עם שגיאה, או פרמטרים שמשתמשים זה בזה | שגיאה |
| סקיצה שאינה מוגדרת דיה, עם דרגות החופש שלה | אזהרה |
| מספרים שהוקלדו ישירות לפיצ'רים ולמידות ששום פרמטר אינו מניע | אזהרה |
| פרמטר שאף דבר אינו משתמש בו | אזהרה |
| פיצ'ר מושבת; סרגל החזרה לאחור אינו בסוף | אזהרה |

`--strict` הופך כל אזהרה לשגיאה, כך שסקריפט בנייה יכול לסרב לחלק שאינו מונע במלואו.

:::note
פלט המאקרו `.swb` מיועד לתוכנת המידול של חלקים שרוב הסדנאות משתמשות בה: כשמריצים אותו בתוכנה ההיא, הוא בונה שם את החלק. הוא לא הורץ בתוכנה ההיא כאן (היא אינה זמינה בשרתים שלנו), לכן יש להתייחס אליו כלא-נבדק.
:::
