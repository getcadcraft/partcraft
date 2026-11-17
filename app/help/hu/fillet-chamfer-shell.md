---
title: Lekerekítés, letörés és üregesítés a Lekerekítéssel, Letöréssel és Héjazással
summary: Jelöljön ki éleket, és adjon hozzá állandó vagy változó sugarú lekerekítést, valamint azonos, két távolságú vagy távolság-szög letöréseket; a Héjazással üregesítse ki az alkatrészt a nyitandó lapok kijelölésével; módosítsa, mely éleket vagy lapokat használja egy jellemző, és javítsa a szokásos hibákat.
keywords: lekerekítés, kerekítés, átmenet, letörés, ferdítés, héjazás, üreges, falvastagság, élek, lapok, élek kijelölése, shift kattintás, nyitott lap, pontos kernel, hálókernel, nincs még elkészítve
from: e41c1c12
---

:::note
**Ebben a verzióban** a PartCraft a lekerekítéseket és letöréseket a hálókernellel készíti el, és csak **két sík lap közötti egyenes élekre**: doboz élei és a kihúzások és kivágások egyenes élei, külső vagy belső sarkoknál (a belső sarok anyagot ad hozzá). A kerek élek, például a furatperemek, és az élen változó sugár még nincsenek elkészítve. Ahol két lekerekített él sarokban találkozik, a lekerekítések gérvágással csatlakoznak (éles bordában találkoznak), nem keverednek össze. A **Héjazás** is működik, a hálókernel készíti: csak sík lapokat nyit meg, a különböző falvastagságú héjak még nincsenek elkészítve, és sok kerek felületet tartalmazó alkatrészen lassú. Lásd: [Ami még nincs elkészítve](topic:not-built-yet).
:::

Az {{ui:Lekerekítés}} élek lekerekítésére szolgál, a {{ui:Letörés}} letöri őket, a {{ui:Héjazás}} pedig üregesíti az alkatrészt. Mindhárom az alkatrész éleire és lapjaira vonatkozik, és a hálókernel építi fel. A lekerekítéseket facettákként írja ki, mint minden kerek felületet (a **Görbék** állítja, milyen finoman); a kerek felületek hengerek, amelyeket ki lehet jelölni és meg lehet mérni (lásd: [A hálókernel](topic:solid-kernels)).

## Élek lekerekítése vagy letörése

### Először jelölje ki az éleket

1. Kattintson az alkatrész egyik élére. Az egész él kiemelkedik, a jobb oldali panel pedig **Él** feliratot mutat: a fajtáját (Egyenes, Kör vagy ív, Görbe), a hosszát és azt, hogy a két lap között fekszik.
2. További élek hozzáadásához {{key:Shift}}+kattintással jelölje ki őket. Mindegyik megjelölődik; egy megjelölt élről a {{key:Shift}}+kattintással veheti le a jelölést. A panel fejléce számolja őket („4 él”), az állapotsor pedig ezt írja: „4 él kijelölve. A Lekerekítés vagy Letörés kerekíti őket; a Shift+kattintás többet jelöl ki, az Esc törli.”
3. Válassza a {{ui:Lekerekítés}} vagy {{ui:Letörés}} gombot az eszköztárban, vagy ugyanezeket a gombokat a jobb oldali panelen.

A jellemző az összes kijelölt éllel jön létre: 2 mm-es lekerekítés vagy 1 mm-es letörés. Az állapotsor például ezt írja: „Fillet1 hozzáadva (4 él). A méretét a jobb oldalon módosíthatja; a Pick edges határozza meg, melyek.”

### Vagy előbb adja hozzá a jellemzőt

1. Ha nincs semmi kijelölve, válassza a {{ui:Lekerekítés}} vagy {{ui:Letörés}} gombot.
2. A PartCraft kijelölő módba lép: a jobb oldali panel fejléce „Fillet1: kijelölés” lesz, az alkatrész a lekerekítés előtti állapotában látszik (a panel ezt jelzi), az eszköztárban pedig a {{ui:Kész}} gomb jelenik meg.
3. Kattintson minden élre a hozzáadáshoz; újabb kattintással veheti le. Az állapotsor számolja őket.
4. Válassza a {{ui:Kész}} gombot (vagy a panelen a {{ui:Kijelölés kész}} gombot), vagy nyomja meg az {{key:Esc}} vagy az {{key:Enter}} billentyűt.

### Beállítások

| Beállítás | Lekerekítés | Letörés |
|---|---|---|
| Méret | **Sugár (mm)**, alapértéke 2 | **Távolság (mm)** az éltől mindkét lapon, alapértéke 1 |
| **Élek** | Hány darab | Hány darab |

A lista alatt minden él neve szerepel a két összekötött lap alapján, például „Él 1: Extrude1 végső lapja × Extrude1 oldala”. Az **Eltávolítás** egyet vesz ki. A {{ui:Élek kijelölése}} visszaviszi a kijelölésbe. Az előzményekben a jellemzőre duplán kattintva ugyanez történik.

Az éleket a két lap alapján jegyzi meg a rendszer, így akkor is a jó élen maradnak, ha az előzményekben korábban módosít egy méretet.

### Változó sugarú lekerekítések és letörés-típusok

- **Változó sugár** (lekerekítés): ebben a verzióban még nincs elkészítve („Olyan lekerekítés, amelynek sugara változik az él mentén: még nincs elkészítve (pontos kernelt igényel). Adjon meg egy sugarat.”). Pontos kernellel: jelölje be, és állítsa be a **Végsugár (mm)** értéket. A sugár az élek egyik végén a **Sugár** értékről lineárisan változik a másik végén a **Végsugár** értékre; a **Végek felcserélése** megfordítja.
- **Típus** (letörés): **Azonos távolság**, **Két távolság** (egy **Második távolság** a másik lapon) vagy **Távolság és szög** (a távolság az egyik lapon, a ferdítés a **Szög (°)** értékkel a lapra). Az **Oldalak felcserélése** az első távolságot a másik lapra teszi.

## Alkatrész héjazása

1. Kattintson arra a sík lapra, amelyet nyitva hagy, például egy doboz tetejére. Vagy {{key:Shift}}+kattintással több lapot is jelöljön ki.
2. Válassza az eszköztár {{ui:Héjazás}} gombját, vagy a lap panelén az {{ui:Héj, ez a lap nyitja}} gombot.

Az alkatrész 2 mm vastag fallá válik a kijelölt lapokkal nyitva. Beállítások:

| Beállítás | Mit csinál | Alapérték |
|---|---|---|
| **Fal (mm)** | A falvastagság | 2 |
| **A falak kifelé nőnek (a lapok belül maradnak)** | Bejelölve: a falak kívülről kerülnek hozzá, így a belső méret megmarad | Ki: a falak befelé mennek, és a külső méret marad meg |
| **Nyitott lapok** | Hány lap kerül eltávolításra | |

Befelé haladva a falak pontosan a falvastagságúak: a külső sarkok élesek maradnak, a belső sarkok lekerekítve jönnek ki (sugaruk a fal vastagsága), az alkatrészen átmenő furat pedig köré csövet kap. Kifelé haladva a falak az eredeti felület kívül adódnak hozzá, ez lesz az üreg, a külső élek pedig lekerekítve jönnek ki. A belső lapok azokról a lapokról kapják a nevüket, amelyeket eltolnak, így ki lehet őket jelölni.

Csak sík lapokat lehet megnyitni: ha görbe lapot jelöl ki, ez jelenik meg: „Héjazás: ebben a verzióban csak sík lapokat nyit meg (a hálókernel készíti el).” Sok kerek felületet tartalmazó alkatrészen a héjazás lassú (ezredkétszáz háromszögenként több másodperc): tervezés közben használjon durvább **Görbék** beállítást.

A {{ui:Nyitott lapok kijelölése}} ugyanúgy módosítja, mely lapok nyitottak, mint az élek kijelölése. A lista mindegyiket megnevezi, például „1. lap: Extrude1 végső lapja”. Nyitott lapok nélküli héjazás nem engedélyezett: „Jelölje ki az eltávolítandó (nyitott) lapokat, majd héjazza.”

## A sorrend számít

A jellemzők felülről lefelé épülnek. A héjazás előtt elkészített lekerekítés a héjjal együtt épül, így a belső sarkok is lekerekítve lesznek. A héjazás utáni lekerekítés csak az Ön által kijelölt éleket kerekíti. A jellemzőket a {{ui:Mozgatás felfelé}} és a {{ui:Mozgatás lefelé}} gombokkal mozgathatja (lásd: [Az alkatrész módosítása az előzményeken keresztül](topic:edit-history)).

A minták és tükrözések nem másolhatnak lekerekítést, letörést vagy héjazást: „A Fillet1 a test éleit vagy falait változtatja, nem másolható. Másolja azokat a jellemzőket, amelyek testeket készítenek (kihúzások, forgatások, furatok, importok).” Előbb mintázza a furatokat vagy kivágásokat, majd egyetlen lekerekítéssel kerekítse az összes másolat éleit.

## Ha nem sikerül

| Üzenet | Teendő |
|---|---|
| „Az 5 mm-es lekerekítés nem fér el itt (túl nagy egy, az egyik éllel szomszédos lapnak, vagy az élek olyan sarokban találkoznak, amelyet a kernel nem tud átmenetté simítani).” | Használjon kisebb sugarat, vagy kevesebb élt kerekítsen egyszerre (több lekerekítő jellemző, a legkisebb utoljára) |
| „Az egyik kerekített él megszűnt: az Extrude1 és a Cut2 közötti él.” | Egy korábbi módosítás eltávolította az élt. Válassza a {{ui:Élek kijelölése}} lehetőséget, távolítsa el a piros élt, és jelölje ki az újat |
| „A héj nem készíthető el ezzel a vastagsággal (…).” | A fal vastagabb, mint a modell egy keskeny része, vagy mint a lekerekítés sugara. Készítsen vékonyabb falat, vagy a lekerekítést nagyobbra, mint a fal |
| „Ennek a lapnak nincs olyan neve, amelyet az előzmények követni tudnának; válasszon másikat.” | Válasszon egy jellemző által készített lapot (a legtöbb lap ilyen) |
| „Lekerekítés: ebben a verzióban csak két sík lap közötti egyenes élek működnek (a hálókernel ezeket készíti el). Kerekítse vagy ferdítse le a görbe éleket a vázlatban.” (Letörésnél is) | A kijelölt él kerek, például egy furatperem, vagy egy görbe lapon van. Távolítsa el a {{ui:Élek kijelölése}} lehetőséggel, és a vázlatban kerekítse vagy ferdítse le azt a sarkot |
| „Olyan lekerekítés, amelynek sugara változik az él mentén: még nincs elkészítve (pontos kernelt igényel). Adjon meg egy sugarat.” | Vegye ki a **Változó sugár** jelölését |
| „Lekerekítés a hálókernellel: ahol a lekerekített élek találkoznak, gérvágással csatlakoznak, nem keverednek.” (⚠ az előzményekben) | Figyelmeztetés, nem hiba: az alkatrész elkészült. A kijelölt élek sarokban találkoznak, és a lekerekítések éles bordában illeszkednek. Kevesebb élt kerekítsen, vagy fogadja el a bordát |
| „Héjazás: ebben a verzióban csak sík lapokat nyit meg (a hálókernel készíti el).” | Egy nyitott lap görbe. Használja a {{ui:Lapok kijelölése}} lehetőséget és vegye ki; csak sík lapokat nyisson meg |

## Korlátok

Ebben a verzióban a lekerekítések és letörések csak két sík lap közötti egyenes éleken működnek, egyetlen sugárral, a sarkoknál találkozó lekerekítések pedig gérvágással csatlakoznak. A héjak csak sík lapokat nyitnak meg. Pontos kernellel a változó lekerekítés minden él mentén lineárisan változik (jellemzőnként egy törvény; nincs sugár megadva az él menti pontokban). A lapokon végzett lekerekítés, a teljes félkör-lekerekítés és a különböző falvastagságú héjak még nincsenek elkészítve.
