---
title: Lemez: peremek és a kiterített minta
summary: Lemezalkatrészt vázlatból indítson (lapos lemez vagy hajlított profil), állítsa be a vastagságát, a hajlítási sugarát és a K-tényezőjét egyszer, hajlítsa fel a peremeket az éleiről hajlítási mentesítésekkel, majd terítse ki DXF-fájllá vágáshoz.
keywords: kiterített minta, kiterítés, kibontás, kiterített hossz, hajlítási hossz, hajlítási vonal, dxf lézerhez, lézervágás, lemez, alapperem, élperem, perem, hajlítás, hajlítási sugár, k-tényező, k tényező, vastagság, mérték, mentesítés, hajlítási mentesítés, csatorna, konzol, burkolat, hajlított lemez
from: 144bd0f6
---

:::note
**Ebben a verzióban még nem készült el.** A lemezmunkához pontos geometriai mag kell, amely ebben a PartCraft-verzióban nincs: minden alkatrészt hálós maggal épít. [Mi még nincs elkészítve](topic:not-built-yet) leírja, mit tegyen helyette. Az oldal többi része úgy írja le, ahogy pontos maggal működik.
:::

A lemezalkatrészek **alapperemmel** kezdődnek. Ez adja a lemezt az egész alkatrészre: a **vastagságát**, a **belső hajlítási sugarat** és a **K-tényezőt**. Minden utána következő **élperem** ugyanezekkel a számokkal hajlik, így az alkatrész egy lemez marad, amely kiteríthető. Mindkettőhöz **pontos mag** kell (lásd: [A hálós mag](topic:solid-kernels)).

## Kezdés alapperemmel

1. Rajzoljon vázlatot. Lapos lemezhez használjon **zárt profilt** (téglalapot vagy bármilyen zárt körvonalat lyukakkal). Hajlított lemezhez használjon **egy nyitott vonalláncot**, például L, U vagy Z alakot a lemez élnézeteként.
2. Jelölje ki a vázlatot az előzmények listájában.
3. Nyissa meg a {{ui:Továbbiak}} gombot a Jellemzők csoportban, és válassza az {{ui:Alapperem}} lehetőséget.

A jobb oldali panelen:

- **Vastagság (mm)**: a lemez mértéke.
- **Hajlítási sugár (mm)**: minden hajlítás belső sugara. A 0 éles belső sarkot ad; a külső sarok így is egy vastagságnyi sugárral íveli.
- **K-tényező**: azt mondja meg, hol helyezkedik el a semleges réteg a lemezen belül, 0 (a belső lap) és 0,5 (a közép) között. Ez dönti el, mennyire hosszú a lemez kiterítve. Az alapértelmezés 0,44; a műhelye vagy az anyagszállító megadja a sajátját.
- **Mélység (mm)**: azt adja meg, mennyire fut ki a hajlított profil a vázlatsíkból. Lemeznél figyelmen kívül marad.
- **Vastagság a hajlításokon kívül**: a nyitott profil a lemez egy lapja. Alapértelmezés szerint a vastagság az első hajlítás belső oldalán van, így a rajzolt vonalak a csatorna külső oldalát jelentik. Pipálja be, hogy a vonalak a belső oldalra kerüljenek. Az eredmény ugyanaz, akárhonnan kezdődött a rajzolás.

A nyitott lánc minden sarka hajlítássá válik. Ha egy vonal túl rövid a hajlításaihoz, ezt jelzi, a szükséges hosszúsággal együtt.

## Élperem hajlítása

1. Kattintson a lemez felső vagy alsó lapjának egyenes élére (a hosszú éleket, nem a vékonyakat).
2. Válassza a {{ui:Továbbiak}} › {{ui:Élperem}} lehetőséget. Ha nincs él kijelölve, a PartCraft vár, hogy kattintson egyre; az Esc megszakítja.

Az élperem a kijelölt él lapjától hajlik fel a lemez belső sugara körül, majd egyenesen fut tovább. A panelen:

- **Szög (°)**: mennyit hajlik, 1-től 180-ig. A 90 négyzet alakú peremet ad.
- **Hossz (mm)**: az egyenes szár a hajlítás után.
- **Hajlítás más irányba**: a másik lapról hajlít (lefelé, nem felfelé).
- **Eltolás a kezdetnél** és **Eltolás a végnél**: az él mindkét végéről rövidíti a peremet.
- **Hajlítási mentesítés**: ha egy véget eltolnak, a lemezbe nyílás vágódik mellette, hogy a hajlítás ott ne szakítsa el a fémet. A **Mentesítés szélessége** a nyílás szélességét adja meg; mélysége a hajlítási sugár plusz a vastagság. Válassza a **Nincs** lehetőséget, ha a sarkot nem kívánja kivágni.

Az élt később a panelen a {{ui:Kijelölés}} gombbal lehet megváltoztatni, majd másik élre kattintani.

:::tip
A vastagsághoz és a sugárhoz használjon paramétereket (lásd: [Paraméterek és egyenletek](topic:parameters)), hogy a lemezvastagság változása egyszerre frissítse az összes peremet.
:::

## Kiterítés

Mindkét panel a **Kiterített minta** résszel végződik. Nyomja meg a {{ui:Kiterítés}} gombot:

- Az előnézet mutatja a kiterített lemezt, minden hajlítás középvonala szaggatott vonallal.
- A **Méret** és a **Terület** a lapos lemezdarabé.
- Minden hajlítás fel van sorolva az irányával (**felfelé** vagy **lefelé**, az alaplap vázlatának oldaláról nézve), szögével és belső sugarával.

Minden hajlítás a semleges réteg hosszát veszi fel a hajlítás mentén, ez a **hajlítási hossz**: szög (radiánban) × (belső sugár + K-tényező × vastagság). Így egy 2 mm-es lemez 90°-os hajlítása 2 mm-es sugárral és 0,44-es K-tényezővel 4,52 mm lapos lemezt ad hozzá.

Lapos lemezen a lyukak, vágások és hajlítási mentesítések ott jelennek meg a laposban, ahol valóban vannak, a peremeken átmenő lyukakat is beleértve.

Sok darab vágásához nyomja meg a kiterített minta alatti {{ui:Elhelyezés táblákon…}} gombot: lásd [Lapos alkatrészek elhelyezése táblákon](topic:nest-flat-parts). A hajlított alapperem egyetlen téglalapként terül ki: kiterített hossza × mélysége, sarkonként egy hajlítási vonallal.

A {{ui:DXF mentése}} lézerhez, présgéphez vagy vízsugárhoz menti a kiterített mintát, milliméterben:

- a körvonal a **OUTLINE** rétegen, vonalakként, ívekként és körökként;
- a hajlítási vonalak a **BEND** rétegen, szaggatottan;
- minden hajlításhoz egy megjegyzés a **BEND_NOTES** rétegen, például „UP 90° R2”.

Ha bármit módosít, a kiterített minta eltűnik; az újat a {{ui:Kiterítés}} gombbal lehet újra elkészíteni.

:::note
Vágás előtt ellenőrizze a K-tényezőt a műhellyel: a lapos hossza ettől függ, és változik az anyagtól, a vastagságtól és a szerszámtól függően.
:::

## Üzenetek

- **A lemezhez előbb alapperem kell** — élperemet adtak hozzá alapperem előtt. Helyezze egy alapperem alá, vagy előbb adjon hozzá alapperemet.
- **Élperemhez egyenes él kell** — a peremek csak egyenes vonalak mentén hajlanak; a görbe élek még nem fogadhatják.
- **Ez az él nincs a lemezvastagság egyik lapján** — az él olyan lapé, amely nem a lemez felső vagy alsó lapja (például egy lyuk fala). Válasszon a felső vagy alsó lap élét.
- **Az eltolások nem hagynak semmit az élből** — a két eltolás együtt eléri vagy meghaladja a teljes élt.
- **Hajlított alapperem mellett az élperemek még nem teríthetők ki** — kezdjen lapos lemezből, és hajlítson fel mindent élperemekkel, amelyek kiterülnek.
- **A hajlított alapperem után készített vágások és lyukak még nincsenek a kiterített mintában** — a hajlított profil kiterített mintája csak a kiterített téglalap.
