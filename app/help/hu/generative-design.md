---
title: Alak növesztése terhelésekből (Generatív)
summary: Válassza ki a befogott és terhelt lapokat, a megtartandó és az üresen tartandó tartományokat, a céltérfogatokat és az anyagokat, majd generáljon kimeneteket: minden térfogathoz a legmerevebb talált alakokat, újra ellenőrizve testként, táblázatban összehasonlítva, és STL, STEP vagy új alkatrészként letöltve.
keywords: generatív tervezés, topológiai optimalizálás, SIMP, könnyűszerkezet, rács, organikus alak, kimenetek, összehasonlítás, tömeg, térfogatarány, megtartás, akadály, tervezési tér, minimális rúdméret, STL, 3D nyomtatás
from: 5b91fa8e
---

A **Generatív** munkaterület eltávolítja azt az anyagot, amelyre a terhelések nem szorulnak. Megadja, hol van befogva és hol terhelve az alkatrész, mi maradjon meg, és mi maradjon üresen; a PartCraft minden célzott térfogathoz megkeresi a legmerevebb alakot (**topológiai optimalizálás**), újra ellenőrzi testként a valós anyaggal, és a kimeneteket egymás mellett mutatja. A hálómag (mesh kernel) által az alkatrészhez rendelt, elnevezett felületeken dolgozik (lásd [A háló-kernel](topic:solid-kernels)).

Válassza a **Generatív** elemet a **Munkaterület** mezőben. Az alkatrészt nem változtatja meg; a vizsgálat az alkatrészfájlon belül mentődik.

## Vizsgálat beállítása

1. Nyomja meg az **Új vizsgálat** gombot a jobb oldali panelen.
2. **Tér**: *Az alkatrész olyan, amilyen* anyagot távolít el az alkatrészből; *Doboz az alkatrész körül* alakot nő egy, az alkatrésznél nagyobb dobozban, a **Doboz-ráhagyással** megnövelve.
3. **Elemméret**: hagyja üresen az automatikus méretet (kb. 8000 kocka), vagy adjon meg egyet. A finomabb méretek finomabb alakokat adnak, de tovább tartanak.
4. **Minimális rúd**: ennek kb. kétszeresénél vékonyabb rudak nem képződnek. Üres mező esetén másfél kocka.
5. Jelöljön be egytől hatig a **Célzott térfogatok** közül (az a rész a tervezési térből, amelyet az alak kitölthet), és egytől négyig az **Anyagok** közül. Minden térfogat egyszer generálódik; minden anyagot az adott alakon ellenőrzünk (a legmerevebb alak nem függ az anyagtól, de a tömege, feszültsége és biztonsági tényezője igen).

## Célok

- {{ui:Rögzített}}: kattintson a befogott lapokra. A panel **Hozzáadás** listájából a **Súrlódásmentes lap** csak saját síkjában tartja a lapot (szimmetriasíkokhoz használja).
- {{ui:Erő}}: kattintson a terhelt lapokra, majd írja be a teljes erőt, és a panelen válassza ki az irányát. A **Nyomás** a **Hozzáadás** listában található.
- {{ui:Megtartás}}: kattintson azokra a lapokra, amelyek környezetének szilárdnak kell maradnia, és adja meg, milyen mélyen (**Szilárdan tartás mélysége**), például csavarlyukak körül. A befogott vagy terhelt lapok mindig megmaradnak.
- {{ui:Akadály}}: kattintson azokra a lapokra, amelyek környezetének üresnek kell maradnia, és adja meg, milyen messze (**Üresen tartás távolsága**): hely egy tengelynek vagy szerszámnak.

A lapok kijelölése után nyomja meg a **Kijelölés kész** gombot vagy az {{key:Esc}} billentyűt. A zöld és piros árnyalatok mutatják a tartományokat.

## Generálás és összehasonlítás

Nyomja meg a {{ui:Generálás}} gombot. A panel mutatja a haladást és a hátralévő időt; a **Leállítás** megszakítja. Minden kimenet megjelenik a **Kimenetek** táblázatban: céltérfogat, anyag, **tömeg**, **legnagyobb feszültség**, **legnagyobb elmozdulás** és **biztonsági tényező** (folyáshatár ÷ feszültség). Ezek mind a kész alak újraszámításából származnak, valós anyaggal, kockákból álló testként.

Válasszon egy kimenetet, hogy megjelenjen a nézetben (az alkatrész el van rejtve; jelölje be az **Az alkatrész megjelenítése átlátszóan** opciót, hogy mindkettő látszódjon). A táblázat alatt: hány iterációt vett igénybe és stabilizálódott-e, a merevsége tömör testként az optimalizáló saját értékéhez képest, és a felülete.

## Kimenet felhasználása

- **STL**: zárt háromszöghálló, 3D nyomtatásra kész.
- **STEP (faceted)**: ugyanaz a felület lapos lapokból álló STEP-testként.
- **Új alkatrészfájl**: PartCraft-alkatrész, amelynek egyetlen jellemzője a kimenet mint importált test. Megnyitva vázolhat rajta, furatot vághat, vagy ellenőrizhet a Szimulációban. Lapos lapokból áll (több ezer sík lap), nem szerkeszthető alakzat.
- **Hozzáadás ehhez az alkatrészhez** a kimenetet hozzákapcsolja az alkatrészhez; csak doboz tervezési térnél aktív (ha maga az alkatrész a tér, a kimenet az alkatrészen belül van).

Az **Új alkatrészfájl** és a **Hozzáadás ehhez az alkatrészhez** ebben a verzióban még nincs elkészítve: a kimenet importált testté válik, amelyhez pontos mag kell. Az STL és a STEP (faceted) letöltés működik.

## Mennyire bízhat benne

- A megadott térfogatra a **merevséget** optimalizálja. Feszültségi határok és gyártási szabályok (túlnyúlások, marási irányok, minimális furatméretek) még nincsenek: egy kiválasztott kimenetet a [Szimulációban](topic:simulation) ellenőrizzen, és igazítson rajta.
- Egy vagy két kocka széles vékony rudak közelítések: karcsú alkatrészeknél használjon kisebb elemméretet.
- A módszer SIMP sűrűségszűrővel, küszöbös vetítéssel és optimalitási kritérium-frissítésekkel dolgozik; a közölt feszültség és lehajlás a kimenetből, kockákként számítva készül, ami őszinte, de éles sarkoknál durva.

## Kapcsolódó

- [Feszültség és lehajlás ellenőrzése (Szimuláció)](topic:simulation)
- [Exportálás nyomtatáshoz, STEP és DXF](topic:export-files)
- [Mi még nincs elkészítve](topic:not-built-yet)
