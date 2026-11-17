---
title: Furatok és fészkes furatok fúrása vázlatpontokban
summary: Pontok elhelyezése egy vázlatban egy lapon, egyszerű, fészkes, süllyesztett vagy menetes (ISO metrikus) furatok készítése minden pontnál, átmérő és mélység beállítása, valamint a rossz irányba fúródó furatok javítása.
keywords: furat, furatvarázsló, fúrás, modellezett menet, 3D nyomtatás, fészek, cbore, süllyesztés, csink, menetes furat, menet, menetfúró, metrikus menet, M6, átmenő, vak furat, csavarfurat, pontok, furatközéppontok
from: 8e1eef83
---

A {{ui:Furat}} a vázlat minden szabad pontjánál egy furatot fúr. A szabad pont az, amelyet a Pont eszközzel készítettek, nem egy vonal vége vagy egy kör közepe.

## Furatok fúrása egy lapba

1. Kattintson arra a sík lapra, amelybe fúrni szeretne, majd válassza a {{ui:Vázlat ezen a lapon}} gombot.
2. Nyomja meg a {{key:P}} billentyűt, és kattintson minden furat helyére. Ha a helyzetük számít, méretezze a pontokat a szélektől vagy az origótól (lásd [Vázlat teljes meghatározása](topic:relations-dimensions)).
3. Válassza a {{ui:Kilépés}} gombot.
4. Válassza a {{ui:Furat}} gombot.

A furatok átmennek az alkatrészen, 6 mm átmérővel. A jobb oldali panel a **Furatok** mezőben mutatja, hány készült: „vázlatpontonként egy”.

**Egy furat, gyorsan:** kattintson arra a sík lapra, ahová a furat kerül, és a jobb oldali panelen válassza a {{ui:Furat itt}} gombot. A PartCraft egy vázlatot ad a lapra, egy ponttal ott, ahová kattintott, és egy átmenő furatot, egy lépésben. Azonnal írjon be egy számot, és nyomja meg az {{key:Enter}} billentyűt az átmérőhöz. A pontos elhelyezéshez nyissa meg az új vázlatot, és méretezze a pontot.

**Melyik vázlat kerül használatra:** az, amelyet az imént zárt be, vagy a kijelölt; egyébként a legutóbbi nem használt vázlat, amelyben szabad pontok vannak. Ha nincs ilyen: „Először készítsen vázlatot pontokkal a furatok helyén (Vázlat egy lapon, majd Pont).”

## Beállítások

| Beállítás | Választható értékek | Alapértelmezés |
|---|---|---|
| **Típus** | Egyszerű, Fészkes, Süllyesztett, Menetes (ISO metrikus) | Egyszerű |
| **Átmérő (mm)** | A furat átmérője | 6 |
| **Átmenő minden** | Bejelölve: egészen át az alkatrészen. Vak furathoz törölje | Bejelölve |
| **Mélység (mm)** | Akkor látható, ha az **Átmenő minden** nincs bejelölve | 10 |
| **Fészek ⌀** | A fészkes típusnál látható: a szélesebb fészek átmérője | 11 |
| **Fészek mélysége** | A fészkes típusnál látható | 6 |
| **Irány megfordítása** | A vázlatsík másik oldala felé fúr | Ki |

A furatok az anyagba fúródnak, merőlegesen a vázlatsíkra. A vak furat mélysége a vázlatsíktól mérődik; az alja sík.

## Fészkes csavarfurat

1. Készítse el a furatokat a fentiek szerint.
2. Állítsa a **Típus** értékét **Fészkes** értékre.
3. Állítsa az **Átmérő (mm)** értékét `6.6`-ra (hézag egy M6-os csavarhoz), a **Fészek ⌀** értékét `11`-re, a **Fészek mélysége** értékét `6.5`-re.

A fészeknek szélesebbnek kell lennie, mint a furat („A fészeknek szélesebbnek kell lennie, mint a furatnak.”), és vak furat esetén sekélyebbnek, mint a furat („A fészeknek sekélyebbnek kell lennie, mint a furatnak.”).

## Csavarkör

Körkörösen, egy középpont körül egyenlő távolságra lévő furatokhoz készítsen **egy** furatot, majd mintázza: jelölje ki a Furat jellemzőt, és válassza a {{ui:Körkörös}} gombot (lásd [Minta- és tükör-jellemzők](topic:patterns-mirror)). A minta követi, ha megváltoztatja a furat méretét.

## Ha a furatok rossz irányba mennek

- „Nincs mit fúrni a vázlat másik oldalán. Próbálja megfordítani az irányt.” A vázlat az anyag távoli oldalán van. Jelölje be az **Irány megfordítása** opciót.
- „Helyezzen vázlatpontokat oda, ahová a furatok kerülnek (Pont eszköz), majd készítse el a furatot.” A vázlatban nincsenek szabad pontok. A vonalvégek és a körközéppontok nem számítanak.
- „Még nincs mit fúrni.” A furathoz tömör test kell. Először készítsen egy kiemelkedést (boss).

## Furatok összeállításokban

Minden furatnak van tengelye. Összeállításban a **Központosítás** beállíthat egy csatlakozást a furat tengelyére, amely így szerepel: „Hole1, hole 2”, így egy csap vagy csavar alkatrész ráilleszkedik. Lásd [Összeállítás készítése](topic:build-assembly).

## Süllyesztett furatok

Állítsa a **Típus** értékét **Süllyesztett** értékre, majd a **Süllyesztés ⌀** (a felületen) és a **Süllyesztési szög** értékét: 90° (ISO metrikus süllyesztett fejű csavarokhoz) vagy 82° (collos csavarokhoz). A süllyesztés átmérőjét a csavargyártó adataiból vegye (kicsit nagyobb, mint a csavarfej átmérője). A kúp lapja a panelekben „süllyesztés” nevet kap.

## Menetes furatok

Állítsa a **Típus** értékét **Menetes (ISO metrikus)** értékre, és válassza ki a **Menet** értékét, M2-től M24-ig, durva menet. A furat az alábbi táblázat menetfúró-méretével készül (a névleges átmérő mínusz az osztásköz, a fúrósorozatra kerekítve, ahogyan az ISO 2306 felsorolja a 6H menethez); az **Átmérő (mm)** mező nem használatos. Vak furatnál a **Menetmélység (mm)** adja meg, milyen mélyre megy a menet.

| Menet | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Osztás | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Menetfúró ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

A menet kezdetben **kozmetikus**: a modell a fúrt furatot tartalmazza, a nézet a menet külső átmérőjét szaggatott körökként rajzolja, a rajzlap pedig a jelölést megjegyzésként hordozza, például „4× M8×1.25 - 6H, átmenő menet”. A STEP csak a fúrt furatot exportálja.

Jelölje be a **Modellezett** opciót, hogy a valódi csavarvonalú menet bekerüljön a furatba, 3D nyomtatáshoz. A **Hézag (mm)** ennyivel nagyobbá teszi mindenütt, így a nyomtatott csavar illeszkedik: 0,1–0,2 mm a legtöbb nyomtatónak megfelel. A jelölés ezután „(modellezett)” végződéssel záródik. Lásd: [Menetek tengelyeken és furatokon, rajzolva vagy modellezve](topic:threads), amely tengelyekre is tesz menetet.

:::note
Még nincs elkészítve: az ellenfúrt furatok, a collos menetek és a csőmenetek.
:::
