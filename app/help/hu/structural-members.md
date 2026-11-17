---
title: Keretek acél szelvényekből
summary: Acélszelvények helyezése egy vagy több vázlat vonalai mentén hegesztett keretet alkotva: gérelt vagy tompa sarkok, a találkozáshoz illesztett tagok, véglapok, bordalemezek és vágólista hosszakkal és végszögekkel.
keywords: szerkezeti elem, keret, acélváz, cső, négyzetes cső, hss, rhs, shs, csőszelvény, chs, széles öv, i-gerenda, w gerenda, ipe, hea, heb, upn, szögacél, gérvágás, tompa illesztés, kiváltás, véglap, bordalemez, vágólista
from: 59071e5a
---

A **Szerkezeti elem** acélszelvényt helyez minden vonal mentén a kiválasztott vázlatokban. Rajzolja meg a keretet vonalakként (minden vonal egy tag), majd válassza ki a szelvényt: a tagok elkészülnek, sarkaik levágódnak és meghosszabbodnak, a vágólista pedig megmondja, milyen hosszúra és milyen szögben kell vágni az egyes darabokat.

## Keret készítése

1. Rajzolja meg a keretet vonalakként egy vázlatban, például egy téglalapot a felülnézeti síkon. A segédgeometriaként megjelölt vonalak kimaradnak.
2. A vázlat kijelölésével válassza a {{ui:Továbbiak}} › {{ui:Szerkezeti elem}} lehetőséget. A vázlat minden vonala kap egy tagot.
3. A panelen válassza ki a szelvény **családját** és **méretét**. A családok az AISC-táblázatok (W, S, C, L, HSS csövek, Cső) és az EN 10365 (IPE, HEA, HEB, UPN).

### Keret 3D-ben

Több vázlat vonalai egy keretet alkotnak: egy felső téglalap, amelyet a fölötte lévő síkon rajzoltak, és a lábak, amelyeket függőlegesen álló síkokon rajzoltak, a végeiknél 3D-ben találkoznak. A panelen a **Vonalai mentén** alatt jelölje be azokat a vázlatokat, amelyek vonalait a tagok követik. Az egy mikrométeren belül találkozó végek összekapcsolódnak.

## A szelvény beállítása a vonalon

- A **Forgatás (°)** a szelvényt a vonala körül forgatja. A gerenda magasságával felfelé áll (függőleges tagon a magassága elöl felé mutat).
- A **Vonalon** azt választja ki, hogy a szelvény melyik pontja essen a vonalra: a középpont, vagy a szelvény körvonalának egy sarka vagy egy oldalának közepe. Az „Alul középen” a keretet a vázlatsík fölé helyezi, nem pedig áthaladva rajta.

## Sarkok és illesztések

| Ahol a tagok találkoznak | Mi történik |
|---|---|
| Két tag végétől végéig, **Sarkok: Gérelt** | Mindkettőt a közöttük lévő félúton fekvő síkon vágja, mint egy képkeretet |
| Két tag végétől végéig, **Sarkok: Tompa** | Az első tag a második távoli lapjáig fut; a második az első közeli lapjánál derékszögben vágódik |
| Egy tag egy másik közepén végződik (T) | Úgy vágódik, hogy illeszkedjen a másik tag külső oldalához |
| Három vagy több tag végződik egy pontban | Az első derékszögben túlnyúlik a többin; a többi úgy vágódik, hogy illeszkedjen hozzá |

Az első tag az, amelynek vonala előbb jön: a vonalak megtartják a rajzolási sorrendjüket, vázlatonként, a vázlatok bejelölési sorrendjében.

## Véglapok és bordalemezek

- A **Véglapok** minden szabad véget lezárnak a szelvény körvonalával megegyező lemezzel, a beállított vastagságban, a vég külső oldalán.
- A **Bordalemezek** háromszög alakú lemezt helyeznek minden olyan sarokba, ahol két tag szögben találkozik: **Bordalemez mérete** minden tag mentén a sarkától, **Bordalemez vastagsága** keresztben, a sarok síkjára központosítva.

## A vágólista

A panel minden darabot felsorol, az azonos darabokat csoportosítva: a szelvényt, a hosszt (hosszú ponttól hosszú pontig, ahogyan a fűrészeléshez jelölné), az egyes végek vágását (derékszögű, derékszögtől eltérő szög, vagy illesztett vágás), valamint azt, hogy melyik tagokhoz tartoznak. A véglapok és bordalemezek a méretükkel együtt szerepelnek. A {{ui:A vágólista mentése (CSV)}} táblázatkezelőhöz menti.

A lekerekített sarkú csőhöz illesztve vágott tag kissé belenyúlik a cső sarokrádiuszába, így hosszú pontja néhány milliméterrel hosszabb, mint a lapok közötti hézag.

## Korlátok

- A tagok csak egyenes vonalakat követnek; a vázlat íveit és splinejeit kihagyjuk.
- Az illesztések vágottak, nem hegesztettek: hegesztési varrat nem rajzolódik, és a keret egyetlen test.
- A szelvények a táblázat méreteiből rajzolódnak: W-szelvények gyökkel-lekerekítéssel, S- és U-profilok párhuzamos övekkel, csövek sarokrádiuszokkal; furatokat, véglap-előkészítést és hegesztési rést nem készít helyette.
- A szerkezeti elemeket a hálókernel építi. Ha a pontos kernel be van kapcsolva (csak fejlesztőknek), ezt jelzik, és nem épülnek meg.
