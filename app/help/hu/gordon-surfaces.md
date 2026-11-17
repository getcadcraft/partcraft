---
title: Felületek görbehálózaton keresztül (Gordon-felület)
summary: Sima felület készítése profil- és vezetőgörbék rácsán át, amelyek vázlatokban rajzolhatók vagy modellélekből vehetők. Zárás tömör testté, ha a profilok zártak. Mi pontos, mi illesztett, és az üzenetek, ha egy hálózat nem illeszkedik.
keywords: érintő, g1, érintőfolytonosság, tükörsík, gordon-felület, görbehálózat, határfelület, hálófelület, hálózati felület, profilok, vezetők, vezetőgörbék, vezetősínek, burkolat, transfinite, coons, b-spline-felület, szabad felület
from: ada3cb8b
---

:::note
**Ebben a verzióban még nincs elkészítve.** A Gordon-felülethez pontos geometriai kernel kell, amely ebben a PartCraft-verzióban nincs meg: minden alkatrészt a hálómaggal épít. [Mi még nincs elkészítve](topic:not-built-yet) leírja, mit tegyen helyette. A többi rész azt írja le, hogyan működik pontos kernellel.
:::

A **Gordon-felület** egy olyan felület, amely átmegy a hálózat minden görbéjén: egy **profilok** sorából, amelyek az egyik irányban futnak, és **vezetők** sorából, amelyek a másikban, mint egy háló szálai keresztezve. Így formázhat hajótestet, sárvédőt vagy fogantyút néhány közvetlenül irányított keresztmetszeti görbéből. Pontos kernel kell hozzá (lásd [A háló-kernel](topic:solid-kernels)).

## A hálózat megrajzolása

1. Rajzolja meg a **profilokat**: két vagy több egymás mellett futó görbét, például párhuzamos síkokon lévő metszeteket. Vonalak, ívek, körök és splinek egyaránt jók, és a végükön összekapcsolt görbelánc egy görbének számít.
2. Rajzolja meg a **vezetőket**: két vagy több, a profilokat keresztező görbét. Minden vezetőnek minden profilt egyszer kell keresztezni, és minden profilnak minden vezetőt egyszer.
3. Tegye úgy, hogy a görbék valóban találkozzanak. Úgy rajzolja a vezető vázlatát, hogy a görbéje átmenjen a profilok pontjain (illeszkedjen a vetített pontokra, vagy adja meg a koordinátákat). A hálózat a **Tűrés** értékig elfogadja a réseket (kezdetben 0,01 mm).

Egy vázlat több görbét is tartalmazhat: minden különálló lánc saját görbe. Így például az összes vezető egyetlen vázlatban is lehet, a felső síkon.

## A felület elkészítése

1. Válassza a {{ui:Továbbiak}} gombot a Jellemzők csoportban, majd a {{ui:Gordon-felület}} gombot.
2. A PartCraft azokat a vázlatokat veszi, amelyeket még senki nem használ: az első síkjával párhuzamos síkban lévők **profilok** lesznek, a többiek **vezetők**. Ellenőrizze a jobb oldali listát, és állítsa be minden vázlatot: **Profilok**, **Vezetők** vagy **Nem használt**.
3. Az alkatrész éleit is használhatja: kattintson a **Élek kijelölése profilként** (vagy **vezetőként**) gombra, kattintson az éleken a nézetben, majd nyomja meg az {{key:Esc}} billentyűt.

Az eredmény egy **felületi test**. A {{ui:Vastagítás}} tömör testté alakítja, az {{ui:Összevarrás}} más felületekhez varrja, a {{ui:Felület vágása}} pedig levágja.

### Zárás tömör testté

Ha a profilok zárt görbék (körök, zárt splinek, zárt láncok), és az első és az utolsó profil egy-egy síkba lapul, jelölje be a **Zárás tömör testté** opciót. A végeket lapos lapok zárják le, és a zárt alak egyesül, levágja, metszi, vagy új testet alkot, mint bármely más jellemző. Így készíthet olyan áthúzást, amely vezetőgörbéket követ. Ugyanez működik zárt vezetőkkel is.

## Érintőleges síkhoz egy él mentén

A Gordon-felület áthalad a görbéin, de önmagában nem illeszkedik ahhoz a meredekséghez, amit érint. Ha azt szeretné, hogy az él mentén **érintőleges** legyen egy síkhoz (G1), például egy tükörsíkhoz, hogy a tükrözött másolat törés nélkül csatlakozzon, vagy egy lapos lapokhoz, amelyből nő:

1. Válassza ki a Gordon-jellemzőt. Az **Érintőleges síkhoz** alatt válasszon egy síkot a {{ui:Sík hozzáadása…}} listából (Elülső, Felső, Jobb oldali vagy egy referenciasík), vagy jelöljön ki egy lapos lapot a nézetben, és nyomja meg az {{ui:A kijelölt sík lap hozzáadása}} gombot.
2. A PartCraft megkeresi a hálózat határgörbéjét, amely abban a síkban van, és a felület érintőleges lesz a síkhoz.

Ha egy síkon két határgörbe van (például padló mindkét végén), kétszer adja hozzá: minden példány a következőt veszi. Legfeljebb négy sík adható meg, élenként egy.

A jelentés megmondja, melyik görbe mentén tette érintőlegessé minden sík, és mekkora volt az a legmeredekebb szög, amelyben a felület korábban találkozott a síkkal. Azok a vezetők, amelyek már érintőlegesen indulnak el a síktól, pontosan követve vannak. Azok, amelyek elkanyarodnak tőle, az él közelében keskeny sávban meghajlanak; a jelentés „minden görbét ezen belül követ” értéke megmondja, mennyivel. Ezért az éleket laposan induló vezetőkkel rajzolja, így az illeszkedés pontos lesz.

## Mi pontos és mi illesztett

A panel megmondja, melyik érvényes, és mennyire tér el a felület a görbéitől.

- **Pontos**: ha minden görbe polinomiális (vonalak, splinek és láncaik), és a vezetők minden profilt ugyanazon paraméterekkel keresztezik, a felület pontosan a görbék Gordon-felülete. Egy bikubikus felületből kivágott izogörbe-hálózat visszaadja azt a felületet, és négy egyenes vonal lapos vagy csavart (bilineáris) foltot ad.
- **Illesztett**: az ívek, körök és a modell élei nem polinomiálisak, a különböző paraméterekkel keresztező görbéket pedig újra kell időzíteni, hogy a keresztezések egybeessenek. Ezeket köbös B-splinekkel illesztjük, a hálózat méretének tízmilliomodán belül (kb. 0,00001 mm egy 100 mm-es alkatrésznél). Ívekből és vonalakból készült hengerfolt a valódi hengertől 0,00001 mm-en belül marad.

A görbék között a felület az, amit a módszer ad: a profilok keresztbe keverve, plusz a vezetők keresztbe keverve, mínusz a keresztezési pontjaik keveréke. Mindenhol sima, kivéve ahol egy görbének éles sarka van. Ahol két Gordon-felület határgörbét oszt meg, él-élhez csatlakoznak (G0), nem érintőlegesen.

## Ha a hálózat nem illeszkedik

| Üzenet | Teendő |
|---|---|
| „… nem találkoznak: 0,4 mm-re mennek el egymástól” | Tegye úgy, hogy az adott profil és vezető keresztezze egymást, vagy növelje a Tűrést |
| „… 2-szer találkozik …” | Egy vezető minden profilt csak egyszer keresztezhet: ossza fel a hurkolt görbét, vagy használjon kevesebb profilt |
| „… más sorrendben” vagy „önmagába hajlik” | Két vezető keresztezi egymást (vagy két profil). A családoknak egymás mellett kell futniuk |
| „legalább két profil és két vezető” | Adjon hozzá görbéket, vagy állítson be több vázlatot Profilnak vagy Vezetőnek |
| „nyitott és zárt görbéket vegyít” | Tegye az összes profilt nyitottá vagy zárttá (ugyanez a vezetőkre) |
| „Egy vég … nem lapos, ezért nem zárható” | Rajzolja az első és az utolsó zárt profilt egy-egy síkba, vagy hagyja ki a Zárás tömör testté opciót |

## Korlátok

- Egy hálózat egy B-spline-felület: nincs G1 vagy G2 érintőség a szomszédos felületekre.
- Egy zárt hálózat varrata az első vezetőnél él-élhez csatlakozik, de nem érintőleges.
- Maga az Áthúzás jellemző nem rendelkezik vezetősínekkel; ehelyett használjon tömör testté zárt Gordon-felületet.
- Nagyon hullámos görbék, vagy olyan keresztezések, amelyek egy görbén egyenetlenül oszlanak el egy másikhoz képest, túl sok pontot igényelhetnek az illesztéshez; ilyenkor a jellemző ezt jelzi.
