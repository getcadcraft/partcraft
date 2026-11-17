---
title: Splinek, vágás, párhuzamos eltolás és további vázlateszközök
summary: Illesztőpontos és kontrollpontos splinek rajzolása, görbék vágása és nyújtása, lánc párhuzamos eltolása, tükrözés segédvonal körül, sokszögek és horonyk hozzáadása, vázlatgeometria mintázása és modell élek vetítése.
keywords: spline, illesztőpont, kontrollpont, b-spline, nurbs, görbe, vágás, nyújtás, párhuzamos eltolás, tükrözés, szimmetrikus, sokszög, hatszög, horony, minta, lineáris minta, körminta, vetítés, élvetítés, belefoglalás, elemek átalakítása
from: 3ecb166a
---

Ezek az eszközök nyitott vázlatban működnek. A {{ui:Spline}} és a {{ui:Vágás}} az eszköztáron található. A többi a vázlateszközök végén lévő {{ui:Továbbiak}} alatt van. Minden eszköz egy visszavonási lépés, az {{key:Esc}} megállítja. Az alapvető rajzoló eszközökről lásd: [Az első vázlat megrajzolása](topic:sketch-basics).

## Splinek

A spline sima görbe. Kétféle van.

| Eszköz | Billentyű | Rajzolás |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Kattintson azokra a pontokra, amelyeken a görbe átmegy. Az {{key:Enter}}, az {{key:Esc}}, a jobb kattintás vagy a dupla kattintás zárja le. Az első pontra újra kattintva zárja le a splinet |
| {{ui:Kontrollpontos spline}} ({{ui:Továbbiak}} alatt) | | Kattintson a kontrollpontokra. A görbe ezek felé húzódik, de csak az elsőt és az utolsót érinti. A szaggatott kontrollsokszög rajzolás közben és utána is látszik |

- **A pontok vázlatpontok.** Húzhatja őket, vagy adhat nekik kényszereket és méreteket, mint bármely más pontnak. A spline első pontja egy vonal végéhez illeszthető, ami egybeeső kényszerrel köti össze őket.
- **Érintő a végén.** Jelöljön ki egy vonalat, ívet vagy splinet, amely a spline egyik végéhez csatlakozik, majd a spline-t, és válassza a {{ui:T Érintő}} elemet. A spline végi iránya ekkor követi a vonalat. A spline végein kívüli érintőt a rendszer elutasítja: „Spline-hoz érintő csak olyan vonal, ív vagy spline lehet, amely a spline egyik végéhez csatlakozik.”
- **Végek.** Érintő kényszer nélkül az illesztőpontos spline végei természetesek (a legvégén nincs görbület). A görbe köbös, és átmegy minden ponton; a pontok közötti távolságok határozzák meg a ritmusát.
- **A zárt splinek** önmagukban alkotnak profilt. A nyitott splinek ugyanúgy, mint bármely más görbe, zárt hurokba kapcsolják a vonalakat és íveket.
- Egy spline belsejében lévő pont törlése eltávolítja azt a pontot, és megtartja a splinet, amíg legalább két pontja van (zártnál három).

A kihúzás és a forgatás a splinet a hálókernellel, rövid egyenes szakaszokból építi fel (a valódi görbékhez pontos kernel kell: ebben a verzióban még nincs elkészítve). A DXF-export a splinet olyan polivonalként írja ki, amely a görbétől 0,01 mm-en belül marad, mert a DXF R12 nem ismer spline elemet.

## Vágás és nyújtás

| Eszköz | Billentyű | Működés |
|---|---|---|
| {{ui:Vágás}} | {{key:T}} | Mutasson egy görbére: a szakasz, amely eltűnne, pirosan látszik, a legközelebbi metszéspontokig. Kattintással törölje. Metszés nélküli görbe egészben törlődik |
| {{ui:Nyújtás}} ({{ui:Továbbiak}} alatt) | {{key:E}} | Kattintson a végéhez közeli vonalra vagy ívre a nyújtáshoz. Addig nő, amíg a következő görbéig ér. „Ennek a végnek nincs mit elérnie.”, ha semmi nem áll az útjában |

A Vágás és a Nyújtás vonalakon, íveken, köröket és splineken működik (a Nyújtás: vonalakon és íveken).

- A levágott **kör** ívvé válik. Sugár- vagy átmérőmérete az ívre kerül.
- Vonal közepének levágása után két vonal marad, amelyek ugyanazon az egyenesen maradnak. Ív közepének levágása után két ív marad, azonos középponttal és egyenlő kényszerrel.
- A levágott **spline** kontrollpontos splinné válik, amely pontosan követi a régi görbét. A megmaradt végén lévő érintő kényszer megmarad.
- Az új végpont arra a görbére kerül, amely elvágta (a vonalra, ívre vagy körre, vagy egybeesik annak végpontjával). A splinek nem tudnak pontot tartani, így a vágó spline nem ad hozzá kényszert.

**Az már nem illő kényszerek törlődnek**, az állapotsor pedig megmondja, hány. Például a levágott vonal hosszmérete törlődik, de a vízszintes vagy párhuzamos kényszerek megmaradnak.

## Párhuzamos eltolás

1. Válassza a {{ui:Párhuzamos}} elemet a {{ui:Továbbiak}} alatt, vagy nyomja meg az {{key:O}} billentyűt.
2. Kattintson egy vonalra, ívre, körre vagy splinere. Az egész lánca kiemelődik: az összes végükkel összekapcsolt görbe, egészen addig a pontig, ahol három vagy több találkozik. Ha a lánc csak egy részét szeretné eltolni, előbb jelölje ki azokat a görbéket, majd válassza a Párhuzamos elemet, és kattintson az egyikükre.
3. Vigye a mutatót arra az oldalra, ahová a másolat kerül. Szaggatott előnézet követi. Mindkét oldalhoz nyomja meg a {{key:B}} billentyűt.
4. Kattintson, írja be a távolságot, és nyomja meg az {{key:Enter}} billentyűt.

A vonalak és ívek pontosan kerülnek eltolásra. A sarkok addig nyúlnak vagy vágódnak, amíg össze nem érnek. A másolatnak egy **Párhuzamos** mérete van, a többi darab ezt követi: a teljes másolat megváltoztatásához kattintson duplán a méretre. A láncnál túl nagy távolságot a rendszer elutasítja, például: „Ez a távolság túl nagy ehhez a lánchoz: egy oldal befelé fordulna.”

Egy **spline** eltolását egy új illesztőpontos spline végzi, a valódi eltolástól 0,001 mm-en belül. Ez a másolat rögzített: nem követi a későbbi változásokat, és nincs Párhuzamos mérete. A láncban lévő spline-nak sima (érintő) csatlakozás kell a végein.

## Tükrözés

1. A Kijelöléssel válassza ki, mit tükrözzön.
2. Válassza a {{ui:Tükrözés}} elemet a {{ui:Továbbiak}} alatt, vagy nyomja meg az {{key:M}} billentyűt.
3. Kattintson arra a vonalra vagy tengelyvonalra, amely körül tükrözni szeretne.

Minden tükrözött pont egy **Szimmetrikus** kényszert kap az eredetijével, így a másolat követi az eredeti változásait. A tükörvonalon fekvő pontok közösek, a tükrözött körök pedig egyenlő kényszert kapnak. Ha nem volt kijelölés, kattintson a tükrözendő elemekre, nyomja meg az {{key:Enter}} billentyűt, majd kattintson a tükörvonalra.

## Sokszögek és horonyk

| Eszköz | Működés |
|---|---|
| {{ui:Sokszög}} | Kattintson a középpontra, majd egy sarokra, végül adja meg az oldalak számát (3 és 64 között). Az oldalak egyenlők, a sarkok egy segédkörön ülnek. A sokszög méretéhez a kört méretezze |
| {{ui:Horony}} | Kattintson az egyik vég középpontjára, majd a másik vég középpontjára, végül kattintással állítsa be a szélességet. Két vonal, amelyek két egyenlő félkörhöz érintők |

## Vázlatmintázatok

Előbb jelölje ki a geometriát, majd:

- {{ui:Lineáris minta}}: kattintson egy kezdőpontra, majd arra, hová kerül az első másolat, végül adja meg a másolatok számát (az eredetit is beleértve).
- {{ui:Körminta}}: kattintson a középpontra, majd adja meg a másolatok számát, amelyek egyenletesen oszlanak el egy teljes körben.

A másolatok magukkal viszik a kijelölt geometria közötti kényszereket (a körmintából a vízszintes és függőleges kényszerek kimaradnak). A másolatok nincsenek összekötve az eredetivel: ha egyet módosít, a többi változatlan marad.

## Az alkatrész éleinek vetítése

1. Válassza az {{ui:Él vetítése}} elemet a {{ui:Továbbiak}} alatt.
2. Kattintson az alkatrész egy egyenes vagy körív élére a vázlat mögött.

Az élt pontosan a vázlatsíkra másolja, és rögzíti (Rögzítés kényszer). Az alkatrész későbbi módosításait nem követi. A {{key:Q}} megnyomásával segédgeometriává teszi. A vázlatsíkhoz döntött kört ellipszisre vetítené, ezért elutasítja. Ugyanígy elutasítja a szabad formájú éleket és a vázlatból egyenesen kiálló éleket. A vetítéshez pontos kernel kell: ebben a verzióban még nincs elkészítve.
