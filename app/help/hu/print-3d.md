---
title: Alkatrész előkészítése 3D-nyomtatáshoz
summary: Ellenőrizze, hogy egy alkatrész vagy összeállítás zárt-e, ráfér-e a nyomtatójára, és áll-e egy alapon, majd töltse le STL vagy 3MF formátumban a szeletelőjéhez.
keywords: 3D-nyomtatás, 3d print, nyomtató, nyomtatás, szeletelő, stl, 3mf, zárt, vízzáró, többszörösen összefüggő, nyomtatóasztal, asztalméret, építőlap, túlnyúlás, támasz, talp, milliméter, exportálás, menetek, hézag
from: 90d81dff
---

A szeletelőnek zárt alakzat kell: nincs benne lyuk, minden lap kifelé néz, és semmi sem megy át önmagán. A PartCraftban épített alkatrészek szerkezetüknél fogva zártak, így az ellenőrzés főleg a méretet mutatja meg, azt, hogy ráfér-e a nyomtató asztalára, hogy áll-e egy lapos lapján, és mennyi túlnyúlik.

## Ellenőrzés és letöltés

1. Opcionálisan, egyszer: állítsa be a nyomtatója asztalát a {{ui:Beállítások}} › PartCraft › **3D-nyomtató** menüpontban: szélesség, mélység és magasság milliméterben. Ha üresen hagyja, ez az ellenőrzés kimarad.
2. Válassza az {{ui:Exportálás}} gombot, majd az {{ui:3D-nyomtatási ellenőrzés (STL vagy 3MF)…}} gombot.

   A párbeszédpanel azt írja ki, hogy „Készen áll a nyomtatásra” vagy „Nem áll készen a nyomtatásra”, felsorolja a hibákat, és megadja a méretet az asztalon (X × Y × Z, milliméterben), a térfogatot és a háromszögek számát.

3. Kattintson a {{ui:3MF letöltése}} vagy a {{ui:STL letöltése}} gombra. A fájl ugyanaz, mint az {{ui:Exportálás}} › {{ui:3MF, 3D-nyomtatáshoz}} vagy az {{ui:Exportálás}} › {{ui:STL, 3D-nyomtatáshoz}} parancsé.

Összeállításban az ellenőrzés és a fájlok a teljes összeállítást veszik figyelembe, minden példányt a helyén.

Az alkatrészt úgy ellenőrzi, ahogy az export írja: ami a PartCraftban felfelé mutat (merőlegesen a Felső síkra), az az asztalon is felfelé mutat. A Felső síkon vázolt alkatrész laposan fekszik.

## Mit mondhat a párbeszédpanel

**Nem áll készen a nyomtatásra** (a szeletelő elutasíthatja, vagy hibásan nyomtatja): lyukak (olyan élek, amelyeknek csak az egyik oldalán van lap), három vagy több lap által közös élek, ellentétesen néző lapok, kifordított test vagy önmagán átmenő test. A PartCraftban épített alkatrésznek soha nem szabad ezeket mutatnia; ha mégis, lásd a [Hibaelhárítás](topic:troubleshooting) részt.

**Figyelmeztetések** (kinyomtatható, de előbb nézze meg):

- **Nagyobb a nyomtatója asztalánál**, még 90°-os elforgatással is.
- **Nincs sík alja**: forgassa az alkatrészt a szeletelőben úgy, hogy egy lap az asztalra feküdjön, különben támaszok vagy alap (raft) kell hozzá.
- **45°-nál jobban dől ki a függőlegesből**: ezeknek a lapoknak támasz kell, ha így állnak. Más állásban kevesebb is elég lehet.
- **Különálló testek fedik egymást** vagy **lap lapnak érnek**: a szeletelők általában egyesítik őket. A {{ui:Egyesítés}} a Jellemzők › Továbbiak menüben egy testté köti össze őket. Lásd [Testek](topic:bodies).
- **1 mm-nél kisebb**: ellenőrizze az alkatrész méreteit.

## Menetek, amelyek kinyomtathatók

A modellezett menet valódi menetként nyomtatódik. Adjon neki **Hézagot**, hogy a nyomtatott csavar bemenjen a nyomtatott anyába: lásd [Menetek](topic:threads).

## Sima kerek felületek

Az STL és a 3MF háromszögekből áll. Simább kerek felületekhez kattintson az üres térre, hogy semmi ne legyen kijelölve, és a jobb oldali panelen állítsa a **Görbék** értékét **Finom (128 fordulatonként)** vagy **Nagyon finom (256 fordulatonként)** értékre, mielőtt exportál. Több háromszög nagyobb fájlt jelent.

## Nagyobb, kisebb vagy darabokban

- **Exportálás › Léptékezés nyomtatáshoz (STL vagy 3MF)…** tengelyenként méretezve menti az alkatrészt, anélkül hogy magát az alkatrészt megváltoztatná: egy **zsugorodási ráhagyást** százalékban (méret × (1 + s), vagy a pontos méret ÷ (1 − s)) öntési mintához, vagy egyszerű szorzókat, a közép, az alsó sarok, az alsó oldal közepe vagy az origó körül.
- **Exportálás › Darabolás nyomtatáshoz (zip a darabokkal)…** a nyomtatóhoz túl nagy alkatrészt olyan darabokra vágja, amelyek mindegyike ráfér az Ön által megadott asztalra, és csapokkal, ékekkel, galambfarkakkal, csapfuratokkal vagy mágneszsebekkel (az Ön által megadott hézaggal) illeszthetők össze. Minden darab és csatlakozás számozott, a darabok STL vagy 3MF formátumban egy zip-fájlba kerülnek, összeállítási lappal. Maga az alkatrész nem változik.

## Nincs ellenőrizve

A falvastagság, a fúvókánál kisebb részletek és az, hogy a szeletelő hogyan helyezi el a támaszokat. Ezeket a szeletelő mutatja meg.
