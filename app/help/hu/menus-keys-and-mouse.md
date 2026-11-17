---
title: Menük, billentyűk és egér
summary: Válasszon olyan menüstílust, amely illeszkedik ahhoz, ahogyan már dolgozik, adjon bármely parancsnak saját billentyűt, mozgassa a parancsokat szalagfülek között, és állítsa be, mit csinál a görgő és az egyes egérgombok a 3D nézetben.
keywords: menüstílus, menük, szalag, eszköztár, jellemzőfa, billentyűparancsok, gyorsbillentyűk, billentyűk, testreszabás, újrakiosztás, egér, görgő, megfordítás, nagyítás iránya, középső gomb, forgatás, pásztázás, exportálás, importálás, váltás, megszokott
from: 8445b06c
---

A PartCraft parancsai ugyanazok, bárhogyan érjük el őket. A **menüstílus** csak azt határozza meg, hol helyezkednek el a képernyőn, milyen néven szerepelnek ott, és melyik billentyű futtatja őket. Válasszon egyet a {{ui:Beállítások}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menük, billentyűk és egér}} részben; a változás azonnal érvényes, és ezt a böngésző megjegyzi.

## A két stílus

| Stílus | Mit kap |
|---|---|
| {{ui:PartCraft}} | A PartCraft saját eszköztára: a munkaterület-váltó, {{ui:Fájl}}, {{ui:Vázlat}}, {{ui:Jellemzők}}, {{ui:Rajz}}, {{ui:Összeállítás}}, {{ui:Szerkesztés}} és {{ui:Nézet}}. Billentyűk: {{key:S}} vázlat, {{key:F}} illesztés, {{key:M}} mérés, {{key:X}} metszeti nézet. Ez az indulás. |
| {{ui:Jellemzőfa}} | Szalag, úgy elrendezve, ahogyan a jellemzőalapú gépészeti CAD programok: egy {{ui:Fájl}} menü (minden exporttal), gyorsgombok, és a lapok: {{ui:Jellemzők}}, {{ui:Vázlat}}, {{ui:Felületek}}, {{ui:Kiértékelés}}, {{ui:Rajz}}, {{ui:Összeállítás}}, {{ui:Vizsgálatok}} (a munkaterületek és eszközeik), {{ui:Illusztrálás}} (az Illusztrálás munkaterület kézi eszközei; az eszközei előbb erre váltanak) és {{ui:Nézet}}. A {{ui:Jellemzők}} a {{ui:Vázlattal}} indul, mert egy alkatrész vázlattal kezdődik. Extra billentyűk: {{key:E}} kihúzás, {{key:H}} furat, és a {{key:V}}, majd egy betű a nézethez: {{key:V}} {{key:F}} elölnézet, {{key:V}} {{key:B}} hátulnézet, {{key:V}} {{key:T}} felülnézet, {{key:V}} {{key:O}} alulnézet, {{key:V}} {{key:R}} jobbnézet, {{key:V}} {{key:L}} balnézet, {{key:V}} {{key:I}} izometrikus, {{key:V}} {{key:N}} merőleges. A 3D nézetben a középső gomb forgat, a {{key:Shift}} és a középső gomb pásztáz, a jobb gomb pásztáz, a bal gomb csak kijelöl. |

Minden stílus megtartja a {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} és {{key:Mod+A}} billentyűt.

Egy másik munkaterület eszköze előbb arra vált; a Tervezés eszköze, ha másik munkaterületen választják ki, előbb visszavált a Tervezésre. A vázlat-eszközök vázlatra várnak, a rajzeszközök a rajzlapra, az összeállítás-eszközök összeállításra: az állapotsor mondja meg, mit kell előbb tenni.

:::tip
Vázlaton belül, a rajzlapon, összeállításban és a többi munkaterületen a betűk ott megtartják saját jelentésüket ({{key:L}} vonal, {{key:R}} téglalap, {{key:J}} kapcsolat …) minden stílusban. A {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} és a nyilak mindig megtartják a sajátjukat. A PartCraft saját elrendezésének az a billentyűje, amelyet az Ön stílusa más parancshoz rendelt, nem csinál semmit, és az állapotsor megmondja, hová került a parancsa.
:::

## Alakítsa a sajátjára

1. Válassza ki a kívánt stílushoz legközelebb álló stílust, majd kattintson a {{ui:Testreszabás…}} gombra.
2. A {{ui:Billentyűk és menük}} lapon keressen meg egy parancsot (a keresőmező segít). Kattintson a {{ui:Billentyű hozzáadása}} gombra, és nyomja meg a billentyűt, vagy két billentyűt egymás után. Egy billentyűre kattintva eltávolíthatja.
3. A szalaggal a {{ui:Hol van}} áthelyezi a parancsot másik lapra és panelre, a {{ui:Fájl}} menübe, vagy a {{ui:Csak billentyűk}} beállításra.
4. Az {{ui:Egér}} lapon állítsa be a görgőt, a vázlatot pásztázó gombokat, és azt, hogy az egyes gombok mit csinálnak a 3D nézetben.
5. Adjon neki nevet, és kattintson a {{ui:Mentés}} gombra.

Beépített stílus mentése saját másolatot készít („Saját jellemzőfa”); a beépített sosem változik. Ha egy billentyű két parancshoz van rendelve, vagy olyan, amely lefutna, mielőtt egy kétbetűs billentyű begépelhető lenne, pirossal jelölődik, és mentés előtt ki kell javítani.

## Egér

- **Egérgörgő**: {{ui:A felfelé görgetés nagyít}} (az alapértelmezés) vagy {{ui:A felfelé görgetés kicsinyít}}, és hogy milyen gyorsan. Az érintőpados csippentés mindig az ujjai mozgásának irányába nagyít.
- **Vázlat pásztázása**: a középső gombbal, a jobb gombbal, vagy mindkettővel. A jobb kattintás vázlatban továbbra is befejezi az eszköz lépését.
- **Húzás a 3D nézetben**: a {{ui:Nézetenként saját}} megtartja a PartCraft beállítását ({{ui:Beállítások}} › {{ui:PartCraft}}: a bal gomb forgat, vagy a középső gomb forgat). Vagy állítsa be minden gombot forgatásra, pásztázásra, nagyításra vagy semmire; a {{key:Shift}} a forgató gombbal pásztáz. A húzás nélküli kattintás továbbra is kijelöl.

## Vigye magával

Az {{ui:Exportálás}} a használt stílust kis `.ccinput.json` fájlba menti; az {{ui:Importálás…}} hozzáad egyet, másik számítógépről vagy egy kollégától. Egy importált fájl csak a PartCraft saját parancsaira mutathat: minden más, benne lévő elem kimarad, és az állapotsorban megszámlálódik. A {{ui:Ennek a stílusnak a törlése}} eltávolít egyet a sajátjai közül.

:::note
Ezek a beállítások ebben a böngészőben maradnak. A stílus-kártyák alatti {{ui:Ennek a stílusnak a használata minden alkalmazásban}} azt eredményezi, hogy minden alkalmazás a neki megfelelő stílusban nyílik meg (saját eszköztárral, vagy szalaggal), azzal a módosításokkal, amelyeket az egyes alkalmazásokban tett. Ha egy alkalmazásban másik stílust választ, az csak azt az alkalmazást módosítja.
:::

Kapcsolódó: [Billentyűk és egér](topic:keyboard) · [PartCraft beállításai](topic:settings) · [Áttérés másik paraméteres modellezőből](topic:coming-from)
