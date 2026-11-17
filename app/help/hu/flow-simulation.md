---
title: Folyadék áramlásának szimulálása (áramlási vizsgálat)
summary: Áramlás az alkatrészen belüli csatornákban vagy egy dobozban körülötte: bemenetek, kimenetek, levegő, víz vagy saját folyadék, majd sebesség és nyomás egy mozgatható metszősíkon, áramvonalak, felületi nyomás, nyomásesés, tömegmérleg, ellenállás és emelőerő, valamint az, hogy a lamináris módszer mit tud és mit nem tud megmondani.
keywords: áramlás, CFD, folyadék, számítási folyadékdinamika, áramlásszimuláció, levegő, víz, viszkozitás, sűrűség, Reynolds-szám, lamináris, turbulens, nyomásesés, fejveszteség, bemenet, kimenet, fedél, sapka, sebesség, térfogatáram, liter per perc, statikus nyomás, áramvonalak, metszősík, szelvénysík, ellenállás, emelőerő, ellenállási tényező, emelőerő-tényező, homlokfelület, külső áramlás, belső áramlás, cső, csatorna, elosztócső, fúvóka, lattice Boltzmann, maradék, konvergencia
from: 7dc75f29
---

Az **Áramlás (CFD)** vizsgálat azt számítja ki, hogyan mozog a folyadék az alkatrészen belüli csatornákban (**belső**), vagy körülötte (**külső**). Alapértelmezés szerint **lamináris**, **összenyomhatatlan**, **izotermikus** és **newtoni**: sima áramlás olyan folyadéknál, amelynek sűrűsége és viszkozitása állandó, hőátadás, turbulencia és gravitáció nélkül. Egy **kísérleti** turbulens modell is rendelkezésre áll, csak minőségi mintázatokhoz (lásd lent). A vizsgálat a hálómag (mesh kernel) által az alkatrészhez rendelt, elnevezett felületeken dolgozik (lásd [A háló-kernel](topic:solid-kernels)).

Válassza a **Szimuláció** elemet a **Munkaterület** mezőben, ha nincs vizsgálat, nyomja meg az **Új vizsgálat** gombot, és a **Típus** értékét állítsa **Áramlás (CFD)** értékre. Az **Áramlási modell** értéke **Lamináris** (alapértelmezés) vagy **Turbulens (Spalart–Allmaras, kísérleti)**: lásd lent a **Turbulens áramlás (kísérleti)** részt. A vizsgálat szerkezeti beállításai megmaradnak, így vissza lehet váltani. Az áramlási beállítások az alkatrészfájlba mentődnek, és minden módosítás visszavonható.

## A folyadék és a cellák kiválasztása

- **Folyadék**: levegő vagy víz 20 °C-on, vagy **Egyéni** saját sűrűséggel (kg/m³) és dinamikai viszkozitással (Pa·s). A levegőre az ideális gáz törvényt és a Sutherland-törvényt használja (1,204 kg/m³, 1,813 × 10⁻⁵ Pa·s); a vízre az IAPWS-értékeket (998,21 kg/m³, 1,0016 mPa·s).
- **Cellaméret**: a folyadéktér egyenlő kockákkal van kitöltve. Hagyja üresen az automatikus mérethez; a panel mutatja a rácsot. Minden nyílásnak és csatornának legalább 8–10 cella szélesnek kell lennie a használható számokhoz. A kisebb cellák pontosabbak, de lassabbak: kétszer finomabb cellánál kb. 16-szoros a munka.
- **Falak**: az **Interpolált** a görbe falakat a cellák között követi (alapértelmezés); a **Visszapattanás** a falakat kocka-lépcsőnek tekinti.

## Áramlás az alkatrészen belül

A folyadéktérnek zártnak kell lennie. Adja hozzá a panelen a **Bemenet** és a **Kimenet** elemet, majd kattintson a nézetben ezek felületére:

1. **A nyílás körüli sík felület** — a cső végének pereme, egy csatlakozófelület. A PartCraft ott egy fedéllel zárja le a nyílás lyukát. A felület minden lyuka ahhoz a nyíláshoz tartozik, ezért ha bemenet és kimenet ugyanazon a felületen nyílik, ehelyett modellezzen egy vékony sapkát az egyiken.
2. **A sapka belső felülete** — mint más CAD eszközökben: modellezzen egy vékony lemezt (kihúzással) a nyílás fölé, és válassza ki azt a felületét, amely a folyadékhoz ér.

A bemenetnél állítsa be a **sebességet** (m/s, egyenletes a nyíláson, az alkatrész felé) vagy a **térfogatáramot** (L/min). A kimenetnél a **statikus nyomást** (Pa, túlnyomás). Ha egy nyílás nyitva marad, vagy egy fal vékonyabb egy cellánál, a belső tér összeolvad a külsővel, és a számítás leáll ezzel az üzenettel: „Nincs zárt folyadéktér”.

## Áramlás az alkatrész körül

Állítsa az **Áramlás** beállítást **Külső** értékre, majd adja meg a **Sebesség** értékét, azt az irányt, amerre az áramlás tart, és azt, hogy a doboz mennyire nyúljon a főáram felé, lefelé és oldalirányban (üresen: 1, 3 és 1-szeres az alkatrész legnagyobb mérete). A doboz azon oldala, amelyen az áramlás belép, bemenő áramlás; az oldal, amelyen kilép, 0 Pa-os kimenő áramlás; az áramlással párhuzamos oldalak csúszó falként viselkednek. Ha a doboz túl kicsi, az áramlás az alkatrész mellett összeszorul, és nő az ellenállás. A **Referenciafelület** az a terület, amelyet az ellenállási és emelőerő-tényezők használnak (üresen: az alkatrész homlokfelülete az áramlás irányából nézve). Az emelőerő a +Y irányban mérődik, hacsak nem választ másik irányt.

## Megoldás és az eredmények olvasása

Nyomja meg a **Megoldás** gombot. A számítás a háttérben fut, a lépésszámmal, a maradékkal és a maradék-grafikonnal; a **Leállítás** megszakítja. Akkor áll le, ha a maradék (mennyit változik még a sebességmező lépésenként) a céltartomány alá csökken, és a nyomásesés vagy az ellenállás már stabilizálódott. Ha előbb eléri a lépésszám-korlátot, a panel piros színnel **Nem konvergált** feliratot mutat: a számok az utolsó állapotot tükrözik, nem állandósult eredményt.

- **Metszősík**: sebesség vagy statikus nyomás a modellen átmenő síkon; válassza ki a normálisát (X, Y vagy Z), és húzza a csúszkát a sík mozgatásához. Vigye rá az egeret az értékek olvasásához.
- **Áramvonalak**: a bemenetektől (belső), vagy a doboz bemenő végén egy rácsról a metszősíkban (külső).
- **Alkatrész**: tömör, áttetsző (hogy a sík belül látszódjon), felületi nyomás, vagy elrejtve.
- **Táblázat**: Reynolds-szám, nyomásesés (a bemenetek átlagos statikus nyomása mínusz a kimeneteké), minden nyílás áramlása és átlagos nyomása, az alkatrészre ható erő, az ellenállás és az emelőerő az együtthatóival és a referenciafelülettel (külső), a tömegmérleg (bemenő szemben a kimenő áramlással), a háló és a megoldó.

## Turbulens áramlás (kísérleti)

Az **Áramlási modell › Turbulens (Spalart–Allmaras, kísérleti)** az időátlagolt turbulens áramlást oldja meg (állandósult RANS): a Spalart–Allmaras-modell minden cellában örvényes viszkozitást ad, a falakhoz legközelebbi cellák pedig a vékony réteg felbontása helyett Spalding falitörvényét használják. Mindenütt teljesen turbulens: nincs lamináris tartomány és nincs átmenet.

**Nem ment át a pontossági ellenőrzéseken.** Az panel, az eredmények és a táblázat ezt minden turbulens vizsgálatnál kiírja, a figyelmeztetés pedig nem zárható be. Minőségi áramlási mintázatokhoz használja (hol válik szét, hol kavarog vagy gyorsul fel az áramlás), **nem tervezési számokhoz**.

| Ellenőrzés | Referencia | Eredmény |
|---|---|---|
| Sík csatorna súrlódása, első cella y⁺ 49 / 98 | Dean-összefüggés | +3,3% / +4,7% |
| Felbontott falú csatorna (y⁺ ≈ 3), Re_τ 180: térfogatátlagos sebesség | Moser, Kim & Mansour DNS | −1% |
| Sík csatorna, y⁺ 7–15 vagy 190–380 | Dean-összefüggés | +9–+22% |
| Csősúrlódás a kockacellákon át, teljesen kifejlődött, 10–30 cella szélesen | Colebrook | 30–34%-kal túl magas |
| Újracsatlakozás egy hátrafelé néző lépcső mögött, 6–14 cella lépcsőmagasságonként | Driver & Seegmiller, 6,26 lépcsőmagasság | 21–39%-kal túl rövid |

Finomabb cellákkal az eredmények csak lassan javulnak. A megoldás után a táblázat megmutatja az **első cella y⁺**-t (minimum, átlag és maximum a falcellákon), és figyelmeztet, ha az ellenőrzött 1–400-as tartományon kívül esik; célozzon 30–300 körüli értékre. **Futási idő:** az automatikus cellák úgy vannak méretezve, hogy egy laptop legfeljebb egy magján néhány percig fussanak (a panel a rács és a lépésszám-korlát legrosszabb esetét mutatja; egy kis cső 20 másodpercen belül stabilizálódik). A cellaméret felezése kb. 16-szor annyi ideig tart. Az alkatrészre ható erők a nyílásokon vagy a dobozon végzett impulzusmérlegből származnak.

**Eddigi munka:** a falcellák most a saját nyírófeszültségüket illesztik a falitörvényhez. Ez a cső- és lépcsőhibákat a fenti értékekre csökkentette, a sík csatorna eredményeit változatlanul hagyva. Ez nem volt elég tervezési számokhoz. A következő lépés a finomabb cellák a falak közelében.

## Mit tud és mit nem tud megmondani

- **A lamináris modell** csak lamináris. Csövekben az áramlás kb. 2000–4000-es Reynolds-szám felett turbulenssé válik; tompa testek mögött kb. 50 felett kezdődnek az örvényleválások. A panel ezeknél a pontoknál figyelmeztet. Turbulens áramlásra kapott lamináris eredmény alulbecsüli a nyomásesést, és rosszul adja meg az ellenállást. A fenti kísérleti turbulens modell minőségileg lefedi a turbulens áramlást; a számai még nem megbízhatók.
- **Módszer:** a rácsos Boltzmann-módszer (D3Q19, kétrelaxációs idejű ütközés) állandósult állapotig futtatva. A belsejében kissé összenyomható; a PartCraft a sűrűségváltozást néhány százalékon belül tartja. Ha az áramlás túl gyors a cellákhoz, a számítás nem indul el, és megmondja, mennyivel kisebbek kell legyenek a cellák.
- **Összevetve:** Hagen–Poiseuille-áramlás egy alkatrészen átmenő csőben (nyomásgradiens 1%-on belül 20 cellánál), a Ghia és társai fedéllel hajtott üregének megoldása (a fedélsebesség 0,75%-án belül), és a Schäfer–Turek-hengerteszt (ellenállás 1%-on belül 10 cella átmérőnként).
- Nincs modellezve: hőátadás, tervezési pontosságú turbulencia (a turbulens modell kísérleti), szabad felületek, kavitáció, gravitáció, mozgó alkatrészek, nem newtoni folyadékok és érdes falak. **Laboratóriumi verzió**: fontos eredményeket ellenőrizzen más módon.
