---
title: Esztergált alkatrész forgatása
summary: Vázoljon egy profil felét egy tengelyvonal mellé, forgassa kerek alkatrésszé, válassza ki a tengelyt és a szöget, és használjon forgatott kivágást horonyhoz.
keywords: forgatás, forgatott kiemelés, forgatott kivágás, esztergált alkatrész, eszterga, tengely, tengelyvonal, horony, szög, forgatásos kivágás
from: 593b6929
---

A {{ui:Forgatás}} egy profilt forgat egy tengely körül, mint az esztergán készült alkatrészeknél: tengelyek, tárcsák, karimák, gombok. A {{ui:Forgatott kivágás}} (a Jellemzők csoport {{ui:Továbbiak}} menüjében) egy profilt forgat anyag eltávolításához, horonyhoz és mélyedéshez.

## Lépcsős tengely forgatása

1. Vázoljon az **Elülső síkon**.
2. Nyomja meg az {{key:N}} gombot a {{ui:Tengelyvonal}} parancshoz. Kezdjen az origón, és kattintson egy pontra egyenesen jobbra, például 100 mm-re. Ez lesz a tengely. Szaggatott: a konstrukciós geometria nem része a profilnak.
3. Nyomja meg az {{key:L}} gombot a Vonal parancshoz. Rajzolja meg a **fél** profilt a tengelyvonal fölött egy zárt hurokként: kezdjen a tengelyvonalon, menjen felfelé, lépjen egyet, majd térjen vissza a tengelyvonalra, és azon haladva jusson vissza a kezdőpontig. A végeknek találkozniuk kell: a hurok legyen zárt.
4. Méretezze a sugarakat (a tengelyvonal feletti magasságokat) és a hosszakat. A tengelyvonal feletti 10-es magasság 20-as átmérőt ad.
5. Válassza a {{ui:Kilépés}} gombot.
6. Válassza a {{ui:Forgatás}} gombot. Megjelenik a tengely, egy teljes fordulattal.

A profilnak a tengely egyik oldalán kell maradnia. Ha átmetszi: „A profil átmetszi a tengelyt. Tartsa a tengelyvonal egyik oldalán.” Egy profilél a tengelyen is lehet.

## Beállítások

| Beállítás | Mit csinál | Alapérték |
|---|---|---|
| **Művelet** | Hozzáadás (anyag hozzáadása), Kivágás (anyag eltávolítása), Metszet (az átfedés megtartása) vagy Új test | Hozzáadás a {{ui:Forgatás}} parancsnál, Kivágás a {{ui:Továbbiak}} › {{ui:Forgatott kivágás}} parancsnál |
| **Szög (°)** | Milyen messzire forgat, egy kicsivel 0 fölött 360-ig | 360 |
| **Tengely** | Első tengelyvonal, vagy a vázlat bármely egyenese vagy tengelyvonala, „Tengelyvonal 1 (l1)” vagy „Vonal 3 (l3)” néven | Első tengelyvonal |

Részleges szög éket készít, a vázlat síkjától egy irányba forgatva.

Ha a vázlatban nincs tengelyvonal, és a **Tengely** az Első tengelyvonalon marad: „Rajzoljon tengelyvonalat (konstrukciós vonalat) a vázlatba, amely körül forgatni lehet.” A profil egyik tömör vonalát is kiválaszthatja tengelynek.

## Horony vágása

1. Miután a tengely elkészült, nyisson új vázlatot az **Elülső síkon** (ugyanazon a síkon, mint a tengely vázlata).
2. Rajzoljon tengelyvonalat ugyanazon a tengelyen: kezdje az origón, és tartsa vízszintesen, hogy H kapcsolatot kapjon, vagy írja be a **Hozzáadás koordinátákkal** paranccsal (például a `0, 0`-tól a `100, 0`-ig). Egy új vázlat nem tud másik vázlat vonalaihoz illeszkedni.
3. Rajzoljon egy kis zárt téglalapot, amely átfedi a tengely szélét ott, ahol a horony lesz.
4. Válassza a {{ui:Kilépés}} gombot, majd a {{ui:Továbbiak}} › {{ui:Forgatott kivágás}} gombot.

## Forgatott felületek összeállításokban

A forgatásnak van tengelye, amelyet más jellemzők és összeállítások is használhatnak:

- a **Körkörös** minta alapértelmezésben az utolsó forgatás tengelyét használja (lásd [Minta- és tükrözési jellemzők](topic:patterns-mirror));
- egy összeállításban a forgatással készült lapok közötti csatlakozás **forgó** csatlakozásként indul, a **Középre igazítás** pedig felkínálja a „A Revolve1 tengelye” lehetőséget (lásd [Összeállítás készítése](topic:build-assembly)).

## Valódi görbék és lapok

A PartCraft a forgatást a hálós kernellel építi (az állapotsor címkéje: „Hálós kernel”): a kerek formák lapos lapok, alapértelmezés szerint fordulatonként 64, és a térfogatok valamivel kisebbek a valódinál (64-nél kb. 0,16%-kal). A nézet, az STL, a 3MF és a STEP exportok ezekből a lapokból készülnek: a simábbakért állítsa a **Görbék** értékét (kattintson az üres térre, majd a jobb oldali panelen) Finom (128) vagy Nagyon finom (256) értékre. A valódi hengerek, kúpok és tórusz pontos kernelt igényelnek: ebben a verzióban még nincs elkészítve. Lásd [A hálós kernel](topic:solid-kernels).
