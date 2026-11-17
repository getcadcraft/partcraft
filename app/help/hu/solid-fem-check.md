---
title: Solid FEM: egy alkatrész szilárdsági ellenőrzése
summary: Kapcsolja be a Solid FEM bővítményt, hálózza meg az alkatrészt, jelöljön ki rögzített lapokat és terhelést a 3D-nézetben, oldja meg, majd olvassa le az elmozdulást és a von Mises-feszültséget a modellen.
keywords: solid fem, végeselem, fea, feszültség, von Mises, elmozdulás, rögzített lap, terhelés, nyomás, gravitáció, sajátfrekvencia, sajátalak, háló, bővítmény
from: 8b7e6ba2
---

## Amit elvégez

Ellenőrizzen egy testalkatrészt terhelés alatt: hol mozdul el, és hol a legnagyobb a feszültség. A vizsgálat lineáris és rugalmas, így ellenőrző segédeszköz; az eredményeket a mérnöke vizsgálja felül.

## Lépések

1. Válassza a {{ui:Beállítások}} › {{ui:Bővítmények}} elemet, és kapcsolja be a {{ui:Solid FEM}} bővítményt (addig ki van kapcsolva, amíg nem teszi). Nyissa meg a {{ui:Solid FEM}} lapot a jobb oldali panelen.
2. A {{ui:Anyag}} alatt válasszon egyet, vagy válassza az {{ui:Egyéni}} lehetőséget, és írja be a Poisson-tényezőt, a sűrűséget és a folyáshatárt.
3. Nyomja meg a {{ui:Rögzített lapok hozzáadása}} gombot, kattintson a 3D-nézetben azokra a lapokra, amelyek rögzítve vannak, majd nyomja meg a {{ui:Kijelölés kész}} gombot.
4. Terhelést a {{ui:Erő hozzáadása}}, {{ui:Nyomás hozzáadása}} vagy {{ui:Gravitáció hozzáadása}} gombbal adhat hozzá, és ugyanígy jelölje ki a lapjait.
5. Nyomja meg az {{ui:Alkatrész hálózása}} gombot, majd a {{ui:Megoldás}} gombot. Ha frekvenciákat is szeretne, előbb a {{ui:Vizsgálat}} alatt válassza a {{ui:Sajátfrekvenciák}} lehetőséget.
6. Olvassa le az {{ui:Eredmények}} és a {{ui:Figyelmeztetések}} részt, majd nyomja meg a {{ui:Megjelenítés a modellen}} gombot, hogy megrajzolja a von Mises-feszültséget, az elmozdulást vagy a sajátalakot; a {{ui:Ábra eltávolítása}} gomb törli azt.

## Megjegyzések

- Az oldal rögzített elemszámig old meg; az állapotsor jelzi, ha az elemméret túl finom.
- A feszültség a rögzített lapoknál, a terhelési pontoknál és az éles sarkoknál nő, ahogy a háló finomodik. Csúcsérték alapján való döntés előtt finomítsa és hasonlítsa össze.
- Minden módosítás egy visszavonási lépés, a beállítások pedig az alkatrészfájlban mentődnek.
- Folyási és érintkezési vizsgálatokhoz lásd: [Feszültség és lehajlás ellenőrzése](topic:simulation).
