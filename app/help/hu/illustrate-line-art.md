---
title: Műszaki illusztrációk: vonalrajzok, képek és rajzlapok
summary: Bármely nézet exportálható vektoros vonalrajzként (SVG vagy PDF) három vonalvastagsággal, a rejtett vonalak szaggatottan vagy elhagyva, a metszeti felületek sraffozva és opcionális kitöltésekkel, vagy PNG-ként; több nézet is elhelyezhető egy rajzlapon.
keywords: illusztrálás, vonalrajz, műszaki illusztráció, svg, pdf, png, rejtett vonalak, körvonal, sraffozás, rajzlap, exportálás
from: 0e9bea63
---

A {{ui:Exportálás}} parancs a {{ui:Kimenet}} csoportban nyitja meg az exportálási párbeszédpanelt:

- {{ui:Mit}}: a jelenet jelenlegi állapota, egy nézet vagy minden nézet.
- {{ui:Formátum}}: **PDF** vagy **SVG** (vektoros vonalrajz; mindkettő ugyanabból a rajzból készül), **PNG a vonalrajzról**, vagy **PNG kép a 3D-nézetről** (legfeljebb 4096 pixel szélesen), valamint az [interaktív 3D fájl](topic:illustrate-interactive).
- {{ui:Oldalak}}: nézetenként egy oldal, vagy minden nézet egy rajzlapon, a nevével alatta. {{ui:Papír}}: A4, A3, Letter vagy Tabloid.
- {{ui:Rejtett vonalak}}: szaggatottan vagy elhagyva. {{ui:Kitöltések}}: ahogy a nézet látszik, nincs, egyszínű vagy árnyalt. {{ui:Lágy élek rajzolása is}} részletvonalakat ad hozzá.

A vonalrajznak három vastagsága van: a körvonalak (sziluettek, nyílt élek és metszetvonalak), az éles élek és a részletvonalak. A metszet vagy a dobozos kivágás vágott felületei sraffozottak. A szétszedett nézetekhez vonal-pont vonalú nyomvonalak tartoznak, amelyek megmutatják, honnan került el az egyes alkatrész; a pozíciószámok, a megjegyzések, az alkatrészlista és a nagyító is megrajzolódik.

A vonalrajzot az alkatrészek alakjából a háló-módszerrel számítja ki (ugyanazzal, amelyet a PartCraft rajzlapja használ a pontos kernel nélkül), így a görbe felületeket a lapjaik rajzolják ki, ahogy a modell tárolja őket.

## Még nincs elkészítve

- Az útkövető (path tracer) minőségű képek (a ModelCraft renderelője) itt nem érhetők el; a PNG-képek a 3D-nézet saját megjelenését mutatják.
