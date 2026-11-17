---
title: Hő, hőfeszültség és kihajlás
summary: Határozza meg egy alkatrész hőmérsékletét rögzített hőmérsékletekből, hőáramsűrűségből, hőteljesítményből, konvekcióból és sugárzásból (állandósult vagy időben változó állapotban), terhelje a szilárdsági vizsgálatot hőmérséklet-emelkedéssel, és keresse meg azt a terhelést, amelynél egy karcsú alkatrész kihajlik, azzal együtt, hogy mit tudnak és mit nem tudnak az egyes módszerek.
keywords: termikus, hőátadás, hő, hőmérséklet, hővezetés, konvekció, filmtényező, sugárzás, emisszió, hőáramsűrűség, hőteljesítmény, hőtermelés, hűtőborda, tranziens, idő, hűtés, melegítés, Crank-Nicolson, implicit Euler, hőmérleg, hőfeszültség, időben változó hőfeszültség, tranziens hőfeszültség, gyors hűtés, hősokk, feszültségtörténet, legrosszabb idő, hőtágulás, tágulási együttható, kihajlás, Euler-kihajlás, terhelési tényező, kritikus terhelés, oszlop, karcsú, sajátérték
from: 1a1b7545
---

Ezek a vizsgálatok a Simulation munkaterületen találhatók, a statikus feszültség és a sajátfrekvenciák mellett (lásd [Feszültség és lehajlás ellenőrzése](topic:simulation)). A panel **Típus** mezőjében válassza ki őket. Ugyanazt a kis kockákból álló hálót és ugyanazt az anyaglistát használják; minden könyvtári anyagnak van hővezetési tényezője, fajhője és tágulási együtthatója (jellemző kézikönyvi értékek, a **Tulajdonságok** alatt láthatók).

## Hőátadás: hová megy a hő?

1. Válassza a **Hőátadás (hővezetés)** lehetőséget a **Típus**nál.
2. Adjon hozzá hőfeltételeket a panel **Hozzáadás** listájából, majd kattintson a lapjaikra (ahogy a támaszoknál és terheléseknél):
   - **Rögzített hőmérséklet**: a lap adott hőmérsékleten van tartva, °C-ban.
   - **Hőáramsűrűség**: a lapba áramló W/m² (a negatív érték kiáramlást jelent). A lap valódi területére hat, még akkor is, ha a kockák lépcsőzetes felületet adnak.
   - **Hőteljesítmény**: összes watt, a kijelölt lapokra területük arányában osztva. Fűtőtestnél vagy ismert teljesítményű chipnél használja.
   - **Konvekció**: levegő vagy folyadék adott hőmérsékleten h W/(m²·K) értékkel viszi el a hőt. Jellemző h: nyugvó levegő 5–10, ventilátor 25–100, víz 500–10 000. A PartCraft nem számítja ki a h-t: ebben a vizsgálatban nincs folyadékáramlás.
   - **Sugárzás**: a lap egy adott hőmérsékletű környezetbe sugároz, 0 és 1 közötti emisszióval. **Linearizált** (a sugárzás a hőmérséklettől függő együtthatóként van felírva, és addig újraszámolva, amíg meg nem áll), és csak a környezetbe sugároz: a lapok nem cserélnek hőt egymással.
3. A **Hőtermelés** (W/m³) az egész alkatrészt belülről melegíti, például egy ellenállásos alkatrészt.
4. Nyomja meg a **Megoldás** gombot. Az alkatrész hőmérséklet szerint színeződik; a **Megjelenítés** mezőben a **Hőáramsűrűség** választásával láthatja, hol áramlik a hő. Mutasson az alkatrészre, hogy mindkettőt leolvassa.

Az állandósult hőáramláshoz kell hova távozni a hőnek: legalább egy rögzített hőmérséklet, konvekció vagy sugárzás. Az az alkatrész, amely csak hőt vesz fel, nem jut állandósult állapotba; ilyenkor használjon időben változó vizsgálatot.

A táblázat megadja a legalacsonyabb és a legmagasabb hőmérsékletet és helyüket, a legnagyobb hőáramsűrűséget, valamint a **hőmérleget**: minden feltételbe be- vagy kiáramló hőt (a rögzített hőmérséklet azt számítja, amit szolgáltatnia vagy elnyelnie kell), a termelt hőt, a be- és kiáramlás összegeit, és az **egyensúlytalanságot**. Az egyensúlytalanságnak a bemenő hő kis töredékének kell lennie; a nagy érték azt jelenti, hogy az eredmény nem megbízható.

### Időben (tranziens)

Jelölje be a **Tranziens** lehetőséget, és adjon meg egy **Kezdeti hőmérsékletet** (az egész alkatrész ezen indul), egy **Időtartamot** és az **Időlépések** számát. Az **Implicit Euler** robusztus; a **Crank–Nicolson** ugyanannyi lépésből pontosabb, de hirtelen változás után rezeghet. A megoldás után húzza az **Idő** csúszkát, hogy minden pillanatban lássa a hőmérsékleteket (a színskála minden pillanatra ugyanaz marad). A hőmérleg ilyenkor a tárolt hőt is tartalmazza.

## Hőfeszültség: mit tesz a hőmérséklet-változás az alkatrésszel?

Statikus feszültség (vagy **Kihajlás**) vizsgálatban állítsa be a **Hőterhelés**t:

- **Egységes hőmérséklet-változás**: az egész alkatrész annyi kelvinnel melegszik (vagy hűl, negatív számmal).
- **Hőmérsékletek hőfeltételekből**: adjon hőfeltételeket ugyanehhez a vizsgálathoz; az állandósult hőmérsékleteket először ugyanazon a hálón oldják meg, majd az alkatrész α·(T − a **feszültségmentes hőmérséklet**) mértékben tágul.
- **Időben változó hőmérsékletek (tranziens futtatás)**: adjon hőfeltételeket, majd adja meg a **Kezdeti hőmérsékletet**, az **Időtartamot**, az **Időlépések** számát és az **Időléptetést**, ahogy a tranziens hővizsgálatnál. A hőmérsékleteket időben, ugyanazon a hálón (kockák vagy tetraéderek) oldják meg, és minden pillanat hőmérsékletéhez egy statikus megoldás adja az adott pillanat feszültségét. A **Feszültség ideje**:
  - **A legrosszabb idő** (a kezdet): a **Feszültségszámítások** a futás során egyenletesen elosztott pillanatokban számolnak, a kezdetet is beleértve (alapesetben 21, legfeljebb 51). Az eredmény a legnagyobb von Mises-feszültségű pillanatban nyílik meg; a táblázat megnevezi, egy kis diagram mutatja a csúcsfeszültséget az idő függvényében, az **Idő** csúszka pedig minden megoldott pillanatban megmutatja a feszültséget (a színskála a legrosszabb pillanaté marad).
  - **Egy kiválasztott idő**: egyetlen pillanat, az a időlépés, amely a megadott **Idő (s)**-hez a legközelebb van. A kihajlási vizsgálat mindig egy kiválasztott időt használ (alapesetben a futás végét, ha nem állít be mást).

Az alkatrész, amelyet gyorsan hűtenek (forró állapotból hidegbe mártva) vagy hirtelen melegítenek, akkor a legnagyobb feszültség alatt áll, amikor a belső és a felület hőmérséklete a legjobban eltér: gyakran rögtön az elején. A tartósan megadott hőmérséklet az első pillanattól érvényes, mint hirtelen változás, ezért az elején a feszültség az elemmérettől függ (csak néhány elem érzékeli a változást). Úgy olvassa, hogy „nagyon magas”, és nézze a csúszka következő pillanatait, ahol a háló már feloldja az értékeket. A feszültség kvázisztatikus: nincs tehetetlenség, nincs rezgés a hirtelen változástól.

Az alkatrésznek, amely szabadon tágulhat, nincs hőfeszültsége: csak annyit rögzítsen, hogy ne mozogjon (például három súrlódásmentes lap derékszögben). Két fal közé szorítva összenyomódik: 50 K-nel melegített acélrúd merev falak között kb. 117 MPa-t hord. A hőterhelések kiegyenlítik egymást, így a reakcióerők továbbra is csak a mechanikai terheléseket egyensúlyozzák ki.

## Kihajlás: mikor enged egy karcsú alkatrész?

1. Válassza a **Kihajlás (lineáris)** lehetőséget a **Típus**nál, és adjon hozzá támaszokat és terheléseket, ahogy egy statikus vizsgálatnál.
2. Állítsa be a **Keresendő terhelési tényezők** számát (hány kihajlási módus).
3. Nyomja meg a **Megoldás** gombot. Minden módusnak van **terhelési tényezője**: az a szorzó, amelynél az ideális alkatrész kihajlik a megadott terhelésekhez képest. A 3-as tényező háromszoros terhelést jelent; **az 1 alatti terhelési tényező azt jelenti, hogy a megadott terhelés alatt kihajlik**. A táblázat minden tényezőhöz megadja a teljes terhelést is. A módusalak azt mutatja, hogyan hajlik ki (mérete nem jelent semmit).

**A lineáris kihajlás túlbecsüli a valódi kihajlási terhelést.** Tökéletes alkatrészt feltételez: tökéletesen egyenest, maradófeszültség nélkül és rugalmasan. A valódi alkatrészeknek kis hibáik vannak, és előbb folyhatnak meg, a vékonyfalú héjak pedig a lineáris érték töredékénél is kihajolhatnak. Használjon bőséges tartalékot, és vékony héjnál a 3 közelében vagy alatta lévő terhelési tényezőt tekintse figyelmeztetésnek.

## Mennyire bízzon benne

A PartCraft ezeket a megoldókat kézi képletekkel méri: két hőmérséklet között feszülő rúd (pontos), egy hűtőborda (0,3 K-en belül), önmelegítő lemez (pontos), időben hűlő kocka (Crank–Nicolson esetén 0,1%-on belül), egyik végén hirtelen melegített rúd, szabadon melegített rúd (nincs feszültség, ΔL = αLΔT), két fal közé szorított rúd (σ = −EαΔT), időben gyorsan hűtött lemez a klasszikus sorfejtési megoldással szemben (1%-on belül kockáknál, 2,1%-on belül tetraédereknél a lemez közepén; 0,5%-on a felületén), egy hosszú futtatás utolsó pillanata az állandósult hőfeszültséggel szemben (milliomodrészig egyezik), és Euler-oszlopok (1%-on belül befogott–szabad, 1,5%-on belül csuklós–csuklós). Tartsa szem előtt:

- **Állandó anyagértékek.** A vezetőképesség, a fajhő és a tágulás itt nem változik a hőmérséklettel; néhány száz fokon 10–30%-ot változhatnak. A merevség sem változik.
- **Az időben mért feszültség kvázisztatikus és rugalmas**: minden pillanat statikus megoldás (nincs tehetetlenség), és nincs folyás, így a felületet folyásra késztető gyors hűtés a folyáshatár feletti feszültséget mutat.
- **A konvekciós együtthatók az Ön bemenetei**, nem levegő- vagy vízáramlásból számolt értékek.
- **Nincs érintkezési ellenállás**: az alkatrész egy test.
- **Csak lineáris kihajlás**: nincs kezdeti hiba, nincs folyás, nincs kihajlás utáni viselkedés.
- A kockás lépcsőzetesség és az éles belső sarkok ugyanúgy hatnak a hőfeszültségre, mint a többi feszültségre (lásd [Feszültség és lehajlás ellenőrzése](topic:simulation)).
- Ez egy laboratóriumi verzió: a fontos alkatrészeket más módon is ellenőrizze.

## Kapcsolódó

- [Feszültség és lehajlás ellenőrzése (Simulation)](topic:simulation)
- [Mi még nincs elkészítve](topic:not-built-yet)
