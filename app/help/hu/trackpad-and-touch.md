---
title: Érintőpad, érintés és kis képernyők
summary: Hogyan forgasson, mozgasson és nagyíthat Mac- vagy laptop-érintőpaddal, mi működik érintőképernyőn és mihez kell még billentyűzet, valamint hogyan rendeződik át a képernyő telefonon vagy keskeny ablakban.
keywords: érintőpad, touchpad, Magic Mouse, mac, érintés, tablet, ipad, telefon, csippentés, két ujj, jobb kattintás, másodlagos kattintás, gesztusok, kis képernyő, mobil
from: 0e764fd8
---

A PartCraft egérhez készült, görgővel és középső gombbal, de az érintőpad jól működik, ha ismeri a gesztusokat, az érintőképernyő pedig alkatrészek nézegetésére és egyszerű vázlatozásra jó.

## Érintőpad

:::mac
| Cél | Teendő |
|---|---|
| Az alkatrész forgatása (3D) | Kattintson és húzzon egy ujjal (vagy húzzon három ujjal, ha bekapcsolta a három ujjas húzást) |
| Mozgatás (3D) | Tartsa lenyomva a {{key:Shift}}-et (vagy a ⌘-t), és kattintson-húzzon, vagy kattintson-húzzon két ujjal lenyomva (másodlagos kattintás-húzás) |
| Forgatás görgetéssel | Húzzon végig két ujjal; a {{key:Shift}}-tel a húzás mozgat. Ehhez a **Görgetés** beállítása „Automatikus felismerés” (az alapérték) vagy „Érintőpad” legyen |
| Nagyítás (3D és vázlat) | Csippentés. A nagyítás a mutató felé történik. Ha a **Görgetés** „Egérgörgő”-re van állítva, a két ujjas görgetés is nagyít |
| Jobb kattintás | Kattintson két ujjal, vagy kattintson a {{key:Ctrl}}+kattintással |
| Mozgatás vázlatban | Húzzon végig két ujjal („Automatikus felismerés” vagy „Érintőpad”), vagy kattintson-húzzon két ujjal lenyomva. A {{key:Shift}}+húzás vázlatban nem mozgat (kijelölő ablakot rajzol) |
| Hozzáadás a kijelöléshez vázlatban | {{key:Shift}}+kattintás vagy ⌘+kattintás |

Kapcsolja be a másodlagos kattintást a **Rendszerbeállítások, Érintőpad, Mutató és kattintás** menüpontban, ha a két ujjas kattintás nem tesz semmit.
:::

:::windows linux
| Cél | Teendő |
|---|---|
| Az alkatrész forgatása (3D) | Nyomja le az érintőpadot (vagy koppintson és tartsa), és húzzon |
| Mozgatás (3D) | Tartsa lenyomva a {{key:Shift}}-et vagy a {{key:Ctrl}}-t, és húzzon, vagy húzzon a jobb gombterület lenyomva tartásával |
| Forgatás görgetéssel | Húzzon végig két ujjal; a {{key:Shift}}-tel a húzás mozgat. A **Görgetés** legyen „Automatikus felismerés” (az alapérték) vagy „Érintőpad” |
| Nagyítás (3D és vázlat) | Csippentés, ahol az érintőpad támogatja. A nagyítás a mutató felé történik. Ha a **Görgetés** „Egérgörgő”-re van állítva, a két ujjas görgetés nagyít |
| Jobb kattintás | Koppintás két ujjal, vagy az érintőpad jobb alsó sarka |
| Mozgatás vázlatban | Húzzon két ujjal („Automatikus felismerés” vagy „Érintőpad”), vagy húzzon a jobb gombterület lenyomva tartásával. A {{key:Shift}}+húzás vázlatban nem mozgat |
| Hozzáadás a kijelöléshez vázlatban | {{key:Shift}}+kattintás vagy {{key:Ctrl}}+kattintás |
:::

A **Görgetés** a [PartCraft beállításai](topic:settings) között van: az „Automatikus felismerés” (az alapérték) az oldalirányú vagy finom görgetést érintőpadként kezeli, az „Érintőpad” mindig annak tekinti, az „Egérgörgő” soha. A csippentés mindhárom esetben nagyít.

A nyílbillentyűk forgatják a 3D nézetet, és a {{key:Shift}} a nyilakkal együtt mozgatja, miután a nézetbe kattintott: érintőpadon ez kényelmes. A {{key:Plus}} és a {{key:Minus}} nagyít.

## Érintőképernyők

A PartCraft érintésre is reagál, így tabletek, érintős laptopok és telefonok működnek, korlátokkal.

:::touch
**Érintőbillentyűk**

Amint megérinti a képernyőt, egy kis sáv jelenik meg a nézet jobb alsó sarkában azokkal a billentyűkkel, amelyek az ujjból hiányoznak. Egérhasználatkor eltűnik.

- {{ui:Esc}}: az Esc billentyű. Megszakítja, amit elkezdett, vagy visszalép, pontosan úgy, ahogy a billentyű.
- {{ui:Hozzáadás}} (vázlatban, a Kijelöléssel): amíg be van kapcsolva, minden koppintás hozzáad egy elemet a kijelöléshez vagy kiveszi onnan, mint a {{key:Shift}}+kattintás. Újra koppintva visszaáll az egyszerre egy elemes módra.
- {{ui:Kész}} (vonallánc, spline vagy sokszög rajzolása közben): befejezi, mint a jobb kattintás.

Ha egy ujjat körülbelül fél másodpercig nyugton tart, az egy koppintásnak felel meg: rajzolóeszköznél befejezi, amit rajzol, a Kijelöléssel pedig hozzáadja az ujja alatti elemet a kijelöléshez vagy kiveszi onnan. Pontokat és vonalakat könnyebb ujjal eltalálni: a PartCraft kétszer akkora területet néz egy koppintás körül, mint egy kattintás körül.

**A 3D nézetben**

- Egy ujj: forgatja az alkatrészt.
- Két ujj: csippentéssel nagyít, együtt mozgatva mozgat.
- Koppintás: lapot, élt vagy síkot jelöl ki. Koppintás előtt nincs kiemelés az egér fölött.

**Vázlatban**

- Rajzolóeszközzel koppintson minden pont elhelyezéséhez: koppintson a kezdőpontra, majd a végpontra. A fogás ott történik, ahol felemeli az ujját.
- Két ujjal csippentés és mozgatás. Ha egy második ujjat tesz le, az megszakítja az első ujj által kezdett húzást.
- Vonallánc befejezéséhez koppintson a {{ui:Kész}} gombra, tartsa nyugton az ujját, vagy koppintson újra a {{ui:Vonal}} gombra (vagy egy másik eszközre) az eszköztárban.
- Kijelöléssel: koppintással jelöljön ki; húzzon egy pontot vagy vonalat a mozgatáshoz; üres helyen húzva kijelölő ablak. Második koppintás lecseréli a kijelölést, kivéve ha a {{ui:Hozzáadás}} be van kapcsolva (vagy a második elemen nyugton tartja az ujját).
- Méret módosításához használja a jobb panelen mellette lévő **Szerkesztés** gombot.

**A rajzlapon**

Koppintson a szimbólumok elhelyezéséhez és kijelöléséhez, húzzon egy szimbólumot a mozgatáshoz. Csippentéssel nagyít, két ujjal mozgat, vagy egy ujjal üres papíron húz. Egy második ujj megállítja a húzott szimbólumot, és az visszaáll.

**Ami még billentyűzetet igényel**

- Számok gépelése: a képernyős billentyűzet a számmezőkben és a méretmezőkben jelenik meg.
- Eszközök billentyűparancsai: használja az eszköztárat.
:::

## Kis képernyők és telefonok

- 1280 pixeltől szélesebben az eszköztár egy sorban fér el.
- Körülbelül 760 és 1100 pixel között az oldalpanelek keskenyebbek lesznek.
- 760 pixel alatt (telefon vagy keskeny ablak) a képernyő egymás alá rendeződik: eszköztár (oldalra húzva több gomb érhető el), a 3D nézet, az állapotsor, majd a tulajdonságpanel és az előzmények. Görgessen az oldalon a panelekhez.
- A menük ({{ui:Exportálás}}, {{ui:Nézetek}}) a képernyő teljes szélességében nyílnak.

:::note
iPhone-on nincs teljes képernyős mód a böngészőben; a {{key:Ctrl+Shift+F}} és a képernyőmód gomb csak a normál és a sávok elrejtett mód között vált.
:::

A telefon alkalmas arra, hogy egy alkatrészt megnyisson, megforgasson és adatait ellenőrizze. A valódi modellezéshez nagyobb képernyő és egér vagy érintőpad kell.

## Böngészők

A jelenlegi Chrome, Edge, Firefox és Safari futtatja a PartCraftot Windowson, macOS-en és Linuxon, valamint tableteken és telefonokon, feltéve, hogy a WebGL és a WebAssembly elérhető. Lásd [Böngészők és számítógépek](common:browsers).
