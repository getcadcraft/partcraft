---
title: Síklemez-alkatrészek elhelyezése táblákon
summary: Az alkatrészek elhelyezése lemezeken vagy tekercsen a PartCraft által talált legkevesebb hulladékkal, mindig a megadott távolságnál nem közelebb, az elrendezés mentése DXF-ként a lézeres, plazmás, vízsugaras vagy marógépes vágáshoz.
keywords: elhelyezés, elhelyezés táblán, tábla, lemez, tekercs, lézer, plazma, vízsugaras, marógép, vágás, kihasználtság, anyagfelhasználás, hulladék, selejt, távolság, vágórés, szálirány, hengerlési irány, dxf, síkminta, körvonalak
from: 8dcce1a6
---

**Az elhelyezés** sok síkalkatrészt helyez el egy táblán úgy, hogy a lehető legkevesebb anyag maradjon fel. A PartCraft egyenként helyezi el az alkatrészeket, mindegyiket oda, ahol a tábla felhasznált hossza a legrövidebb marad, több sorrendet is kipróbál néhány másodperc alatt, és a legjobbat tartja meg. Az alkatrészek egymás lyukaiba és az L vagy U alakú alkatrészek belsejébe is kerülhetnek.

## Megnyitás

- A {{ui:Exportálás}} › {{ui:Elhelyezés táblákon…}} menüpont az alkatrész síkmintájával nyitja meg, vagy – összeállításban – minden lemezalkatrész síkmintájával, annyi példányban, ahány van.
- Lemezalkatrésznél használja a {{ui:Kiterítés}} gombot, majd a síkminta alatt a {{ui:Elhelyezés táblákon…}} gombot.
- A {{ui:Körvonalak hozzáadása DXF-ből…}} minden zárt körvonalat hozzáad alkatrészként egy DXF-fájlból: a CadCraftból DXF-ként mentett rajzot vagy a vágógép saját szoftverének fájlját. Egy másik körvonalon belüli körvonal ott lyuk. A végükön egymáshoz csatlakozó vonalak és ívek egy körvonalnak számítanak. A hüvelykben, centiméterben vagy méterben megadott fájlok milliméterre változnak.

:::note
Lemezalkatrész kiterítéséhez pontos geometriai mag kell (lásd: [Lemez](topic:sheet-metal)). A DXF-fájlból származó körvonalak mindig működnek.
:::

## Beállítás

Minden alkatrészhez adja meg, **hány darab** kell belőle, és a **szálirányát**: {{ui:Bármilyen irány}}, {{ui:A tábla mentén (ahogy rajzolva van)}} csiszolt vagy hengerelt lemezhez, amelynek egy irányban kell futnia, vagy {{ui:A táblára keresztben}}.

A **Táblák** csoportban:

- **Készlet**: {{ui:Táblák}} adott hosszúságban és szélességben (és hogy hány van belőle; 0 = annyi, amennyi szükséges), vagy {{ui:Tekercs}} adott szélességben, a szükséges hosszúságban.
- **Szélső margó**: a tábla minden szélén szabadon marad (szorítókhoz vagy egyenetlen szélhez).
- **Alkatrészek közötti távolság** a két vágóvonal közötti legkisebb távolság: legalább a vágógép vágórése, plusz amennyi az anyag igényli.
- **Forgatások**: azok a szögek, amelyekre egy alkatrész elforgatható, alapértelmezésben 90°-onként. Kevesebb forgatás gyorsabb; több jobban kihasználhatja a táblát.
- **Alkatrészek megfordíthatók**: engedi, hogy az alkatrész fejjel lefelé kerüljön. Lemezhez kapcsolja ki: a megfordítva elhelyezett síkminta a másik irányba hajlik.

Nyomja meg a {{ui:Elhelyezés}} gombot. Az előnézet minden táblát mutat; az adatok megmondják, hány táblát használt el (vagy a tekercs mekkora részét), és hogy az alkatrészek mekkora anyagot foglalnak el. Ami nem fért el, az meg van nevezve.

## Mentés

A {{ui:DXF mentése}} parancs az elrendezést DXF-ként írja ki (R12, milliméter), a táblákat egymás alá téve: a táblák körvonalai a SHEET rétegen, az alkatrészek a PARTS rétegen (az ívek ívek maradnak), minden alkatrész neve a LABELS rétegen.

:::tip
Több különböző alkatrész keverése általában jobban helyezhető el, mint sok példány egyetlen alkatrészből: a kis alkatrészek kitöltik a nagyok közötti réseket.
:::

## A táblák vágása (G-kód)

Az **Exportálás › Elhelyezett táblák G-kódba** egy elhelyezett DXF-et olvas be (ezt, vagy a Cabinets bővítmény tábláit a CadCraftban), és tábláként egy-egy programot készít a kiválasztott utófeldolgozón keresztül: előbb a furatokat és a kivágásokat, majd a körvonalakat; minden vágás a szerszám sugarával az alkatrészen kívül, átvágva a táblán és még 1 mm-rel tovább, ha kéri, a fülekkel. Az utófeldolgozók listája a beépített utófeldolgozókból és a saját gyártási tanulmányából áll. Minden programot szimulátorban ellenőrizzen futtatás előtt: a fúrás és a zsebek nem készülnek el.

## Mit érdemes ellenőrizni

A PartCraft minden elrendezést újra ellenőriz a valódi alakzatokon (nem azon a rácson, amelyen keresett): két alkatrész sincs a távolságnál közelebb, és semmi nincs a margókon belül. A vágást nem tervezi meg: a bevezető vonalak, a vágási sorrend, a közös élek egyszeri vágása és a maradéktábla megtartása a vágógép saját szoftverének a feladata. Vágás előtt ellenőrizze ott a DXF-et.
