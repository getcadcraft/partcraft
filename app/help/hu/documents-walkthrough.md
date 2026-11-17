---
title: Dokumentumok és revíziók (a tár)
summary: Lépésről lépésre végigvezetés egy valódi munkán: egy projektmappa alkatrészeinek és összeállításainak felügyelet alá vétele, egy alkatrész kivétele, módosítása és visszaadása megjegyzéssel, kiadása, annak megtekintése, mi használja és mi a darabjegyzék, mit lát egy második személy, amíg a fájl zárolva van, és hogyan működik felhőmappákkal.
keywords: tár, dokumentumok, végigvezetés, oktatóanyag, kivétel, visszaadás, revízió, kiadás, jóváhagyás, zárolás, előzmények, hol használják, darabjegyzék, bom, összeállítás, felhőmappa, projektmappa, két személy, megosztott mappa
from: 0a5e6983
---

## Amit csinálni fog

Ön Ana, a Riverside Klinikán dolgozik egy kollégájával, Bennel. A projekt alkatrészei és összeállításai egy mappában vannak, amelyet mindketten elérnek (megosztott meghajtó, szinkronizált mappa vagy felhőmappa). A végére egy fájl az első másolattól a kiadott **A** revízióig jut, később **B.1** revízióként módosítják, látja, ki mit csinált, és látja, mit lát Ben, amíg Ön tartja a fájlt.

Minden a fájlok mellett lévő rejtett `.ccvault` mappában tárolódik: nincs szerver, semmi sem kerül feltöltésre (a felhőmappa a kivétel, lásd az utolsó lépést). Az összes gombot és szabályt egy helyen a *Dokumentumok: kivétel, revíziók és kiadás* témakörben találja, ha az alkalmazásában megtalálható.

## 1. Állítsa be a projektmappát

1. Válassza a {{ui:Dokumentumok…}} lehetőséget az eszköztár **Fájl** csoportjában.
2. Válassza a {{ui:Projektmappa kiválasztása}} lehetőséget, majd jelölje ki azt a mappát, amely a projekt alkatrészeit és összeállításait tartalmazza. (A projektmappák a Studióban és azokban a böngészőkben működnek, amelyek meg tudnak nyitni mappát, például a Chrome-ban és az Edge-ben. Más böngészőkben a panel ezt jelzi.)
3. Válassza a {{ui:Módosítás}} lehetőséget a **Ön:** mellett, és írja be a nevét: `Ana` (ha kéri, adja meg a számítógép nevét is). A panelen ezután ez látható: *Ön: Ana, ezen:* és a számítógépe. A neve minden tevékenységén szerepel.
4. Válassza a {{ui:Tár indítása ebben a mappában}} lehetőséget, és írja be a projekt nevét: `Riverside klinika`. A panelen ez jelenik meg: *A tár elindítva: Riverside klinika.*

## 2. Vegye felügyelet alá a fájlt

1. Nyissa meg a **Nem a tárban lévő fájlok** részt, és válassza a {{ui:Hozzáadás}} gombot a `plates/Bracket.partcraft.json` fájl mellett.
2. A fájl a **Tárban lévő fájlok** alatt jelenik meg, **A.1** revízióval, állapota **Munka folyamatban**. Az A.1 az első másolat; a tár minden revízióról megőriz egy másolatot.

## 3. Kivétel, módosítás, visszaadás

1. Válassza a {{ui:Megnyitás}} gombot a `plates/Bracket.partcraft.json` fájl mellett. Az alkatrész megnyílik a PartCraftban, a panel pedig bezárul, hogy lássa. A panelt a {{ui:Dokumentumok…}} gombbal nyissa meg újra.
2. Nyissa meg újra a panelt, és válassza a {{ui:Kivétel}} lehetőséget. A sor állapota most **Önnél kivéve**. A `.ccvault/locks` mappában létrejött egy zárfájl; senki más nem vehet ki ezt a fájlt, amíg Ön vissza nem adja.
3. Módosítsa az alkatrészt: szerkesszen egy méretet, adjon hozzá egy furatot. A mentés csak akkor engedélyezett, ha a fájl Önnél van kivéve, és megmondja, miért nem; a Mentés másként mindig működik, saját másolat készítéséhez.
4. Nyissa meg a panelt, válassza a {{ui:Visszaadás}} lehetőséget, és írja be, mi változott (`Az ajtó áthelyezve`). A panel ezt jelzi: *visszaadva mint A.2*. A projektmappában lévő fájl most a megnyitott alkatrész, a zár pedig megszűnt. Változtatás nélküli visszaadás esetén a revízió megmarad.

Ha meggondolja magát, a {{ui:Kivétel visszavonása}} visszaadja a fájlt új revízió létrehozása nélkül.

## 4. Felülvizsgálat és kiadás

1. Válassza a {{ui:Küldés felülvizsgálatra}} lehetőséget. Az állapot **Felülvizsgálatra vár** lesz, a fájl pedig csak olvasható.
2. A jóváhagyás előtt válassza a {{ui:Projektbeállítások}} lehetőséget, és sorolja fel, kik hagyhatják jóvá (soronként egy név), például `Ben` és `Carla`, és jelölje be azt a szabályt, hogy a jóváhagyónak a szerzőtől eltérő személynek kell lennie. Válassza a {{ui:Beállítások mentése}} gombot. Ettől kezdve maga a tár is elutasítja, ha más próbálkozik.
3. Ben (vagy Carla) válassza a {{ui:Jóváhagyás}} lehetőséget, és írja be a jóváhagyó nevét. Az állapot **Kiadva** lesz, a revízió pedig **A**, a *jóváhagyta* sorral és a névvel. A kiadott fájl csak olvasható. A {{ui:Visszaküldés}} visszaküldte volna **Munka folyamatban** állapotba, indokkal.

A jóváhagyó neve a panelen beírt név; ez annak nyilvántartása, ki írta alá, nem személyazonosság igazolása.

## 5. Új revízió

1. A kiadott fájlon válassza az {{ui:Új revízió}} lehetőséget. A következő betűre foglalja le.
2. Módosítsa, majd válassza a {{ui:Visszaadás}} lehetőséget. A revízió **B.1**, munka folyamatban. Ugyanúgy adja ki, és **B** lesz. Az első visszaadás előtt a {{ui:Kivétel visszavonása}} az **A** revízión hagyja.

A revízióbetűk A, B … Z, AA, AB sorrendben követik egymást. Ha az Ön szabványa kihagy betűket, az *Az ASME Y14.35 sorrend használata* projektbeállítás a következő revízióknál kihagyja az I, O, Q, S, X és Z betűket.

## 6. Nézze meg, mi történt

Válassza a fájl nevét a részletek megnyitásához:

- **{{ui:Előzmények}}**: minden esemény, a legújabbtól a legrégebbiig, a személy, a számítógép és az időpont megjelölésével: *Visszaadva A.2* Anától, *Kiadva* Bentől, és így tovább.
- **{{ui:Revíziók}}**: a revíziótábla: minden megőrzött revízió a dátumával, azzal, aki visszaadta, a megjegyzéssel és azzal, aki jóváhagyta. A tár minden revízióról másolatot tart a `.ccvault/revs` mappában.
- **{{ui:Használja}}**: egy összeállítás alkatrészei.
- **{{ui:Használja:}}**: A **Használja** listában minden olyan összeállítás szerepel a tárban, amely ezt az alkatrészt tartalmazza: ha módosít egy konzolt, tudni fogja, mely összeállításokat kell ellenőrizni.

## Összeállítások: mit használnak és a darabjegyzék

Helyezzen egy összeállítást (`.partcraft.json`, az Összeállítás módból mentve) a mappába, és adja hozzá. Válassza a nevét: a **Használja** felsorolja a benne lévő alkatrészeket, mindegyikhez a revízióval és az állapottal; egy alkatrész **Használja**-jánál pedig minden összeállítás szerepel, amely tartalmazza. A {{ui:Anyagjegyzék (CSV)}} lementi a teljes alkatrészlistát szintenként, mennyiségekkel, revíziókkal és állapotokkal, táblázatkezelőhöz. Ha módosít egy konzolt, a **Használja** megmondja, mely összeállításokat kell megnézni.

## 7. Mit lát Ben, amíg Ön tartja a fájlt

Most vegye ki újra a fájlt, és kérje meg Bent, hogy nyissa meg ugyanezt a projektmappát a saját számítógépén, és nyissa meg a panelt. A fájl sorában ez látszik: **Kivette: Ana, ezen:** Ön számítógépe, **óta:** az időpont, és nincs {{ui:Kivétel}} gomb. Ha mégis próbálkozik, a tár elutasítja: a zár olyan fájl, amelyet a rendszer nem hozhat létre kétszer, így két személy sem tarthatja egyszerre a fájlt, még ugyanabban a törtrészben sem, ha a mappa lemezen van a Studióban. (Böngészőben a mappa csak legjobb igyekezetű működést tesz lehetővé, és a panel ezt jelzi a **Mappa** alatt.)

Ha Ana távol van, és Bennek szüksége van a fájlra, a {{ui:Kivétel feloldása}} felszabadítja. Meg kell adnia egy indokot; ez bekerül a naplóba, azzal együtt, kié volt a kivétel. Ha a projekt adminisztrátorokat sorol fel, csak ők végezhetik el. A régebbi kivétel, mint az elavultsági határ (alapértelmezés szerint 14 nap), *hosszú ideje* jelölést kap. A feloldás után Ana későn érkező visszaadását elutasítja a rendszer, így ti ketten nem írhatjátok felül egymás munkáját.

## 8. Felhőmappák

A felhőmappa olyan projektmappa, amelyet csapata felhőtárhelyén tárol, így a csapatnak nincs szüksége megosztott meghajtóra. A Studióban, a CadCraft-fiókjába bejelentkezve, a panelen a {{ui:Felhőmappa megnyitása}} látható a {{ui:Projektmappa kiválasztása}} mellett. Válassza ki, és jelölje ki a mappát, amely munkaterület / mappa formában jelenik meg. A munkaterület tulajdonosa hozza létre a mappát először, és a csapat felhőtárhelyének érvényesnek kell lennie. Minden fent leírt működik ugyanúgy; a kiszolgáló készíti a zárat, amely személyek között szigorú. Ha nincs bejelentkezve, a panel bejelentkezést kér. Egy hagyományos böngészőlapon a felhőgomb nem érhető el; használja a Studiót.

## Próbálja ki

Végezze el a fent leírt nyolc lépést egy valódi fájl másolatával. A két személyes lépésekhez másik személy kell, vagy két ablak két névvel. Ha valódi megosztott mappával próbálja, a Közösségi tesztoldal tartalmaz egy ellenőrzést, amely pontosan ezt kérdezi, és fogadja az eredményeket.
