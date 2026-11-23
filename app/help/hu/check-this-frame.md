---
title: Keret ellenőrzése
summary: Vegye a hegesztett szerkezet acél tagjait (talpkeret, állvány, csövekből és profilokból álló keret), helyezze a berendezést a lábaira, a támaszokat pedig a padlóra, és nézze meg, mennyi az egyes tagok és minden hegesztés kihasználtsága AISC 360-16 vagy EN 1993 szerint. Segéd, amíg egy mérnök át nem nézte.
keywords: keret, hegesztett szerkezet, talpkeret, szivattyús talpkeret, szerkezeti elem, hegesztés, hegesztések, ellenőrzés, AISC 360, EN 1993, kihasználtság, támasz, berendezés, teher, zárt szelvény, HSS, RHS, CHS, mérnök
from: 032e34ee
---

{{ui:Keret ellenőrzése}} veszi a hegesztett szerkezet egyenes acél tagjait, ezekből keretet épít, megoldja a saját súlya és a rá helyezett berendezés súlya alatt, és minden tagot és minden tagok találkozásánál lévő hegesztést ellenőriz. Egy futtatás, egy táblázat.

:::warning
Ez **segéd, amíg egy mérnök át nem nézte**. Nem jóváhagyás, és az átmenetes eredmény sem tervezés. Ez a tagok középvonalait használja úgy, ahogy rajzolták, minden csatlakozást a szelvény teljes kerülete mentén hegesztettnek tekint, a varrat lábát a szelvény falából veszi (legfeljebb 8 mm), hacsak nem állította be, és nem ellenőrzi a csavarokat, a lemezeket, a talplemezeket, a horgonyokat, a felfekvést, a nyíró blokkot, a fáradást vagy az emelést.
:::

## Futtatás

1. Rajzolja meg a tagokat a {{ui:Szerkezeti elem}} gombbal (a szelvények a szelvénytáblázatból jönnek).
2. Nyissa meg a {{ui:Nézetek}} › {{ui:Keret ellenőrzése}} menüt. Adja meg, hol áll a keret (egy **támasz** minden lábnál: csuklós, befogott vagy görgős; a {{ui:Csuklós támaszok a lábaknál}} minden legalsó tagvégre egyet tesz), és mi van rajta (**berendezés**: tömeg, súlypont, azok a pontok, ahol le van csavarozva, és egy opcionális vízszintes nyomóerő).
3. Válassza ki a szabványt: **ASCE 7 + AISC 360-16** vagy **EN 1990 + EN 1993**. Állítsa be az acél minőségét, és AISC esetén a varratfém szilárdságát (482,6 MPa az E70).
4. Nyomja meg a {{ui:Ellenőrzés}} gombot. A {{ui:A jelentés mentése CSV-ként}} minden táblázatot kiír, az „nincs átnézve” sorral az elején.

A keretet milliméterben olvassa, a munkadarab függőleges tengelyével felfelé. A támaszokat és a berendezés-pontokat x y z alakban adja meg ugyanabban a rendszerben, a z a magasság.

Ha egy tag vége egy másik tag közepére esik, ott kettéosztja azt; ugyanígy a láb vagy a lecsavarozási pont is, ha egy tag vonalán van. A súly a lecsavarozási pontok között mint merev test oszlik meg. A súlypont a lábakon kívül, vagy egy emelőerő egy lábnál mindig jelezve van, sosem rejtve.

## Mit kap

- A legtöbbet használt elem és az, hogy van-e bármi, ami megbukik. Az ellenőrzés által meg nem ítélhető elemek (olyan szelvény, amely nincs a táblázatban; olyan acél, amelyhez a szabvány nem ad tényezőt) számolva és megnevezve vannak, és sosem számítanak megfelelőnek.
- Soronként egy tag vagy egy hegesztéscsoport: mennyire van kihasználva, a döntő ellenőrzés és záradék, valamint a döntő teherkombináció.
- Ugyanezek a táblázatok a jelentésben.

## Mit ellenőriz

Üreges szelvények (RHS, SHS, CHS, cső) és I-szelvények húzásra, nyomásra, hajlításra, nyírásra és ezek kölcsönhatására; sarokvarratok és teljes átolvadású varratok a rugalmas vektoros módszerrel. Kompakt falak csak üreges szelvények hajlításánál; karcsú falak nincsenek ellenőrizve, és ezt kimondja. Néhány állandó a szabványokból lett felírva, és még nincs összevetve nyomtatott példánnyal; a jelentés minden forrást felsorol.

Tagok rajzolásához és vágólistájukhoz lásd: [Keretek acélszelvényekből](topic:structural-members).
