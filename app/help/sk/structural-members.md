---
title: Rámy z oceľových profilov
summary: Umiestnite oceľové profily pozdĺž čiar jedného alebo viacerých náčrtov a vytvorte zváraný rám: skosené alebo tupé rohy, kusy zrezané na mieru v miestach stretu, koncové krytky, výstuhy a zoznam rezov s dĺžkami a uhlami koncov.
keywords: zvarenec, konštrukčný prvok, rám, oceľový rám, rúrka, štvorcová rúrka, hss, rhs, shs, rúra, chs, širokoprírubový, i-profil, w profil, ipe, hea, heb, u-profil, upn, uhlovník, skosenie, tupý spoj, vyrezanie, koncová krytka, výstuha, zoznam rezov
from: 59071e5a
---

**Konštrukčný prvok** umiestni oceľový profil pozdĺž každej čiary vybraných náčrtov. Rám nakreslite ako čiary (každá čiara je jeden prvok), potom zvoľte profil: prvky sa vytvoria, ich rohy sa orežú a predĺžia a zoznam rezov uvedie, ako dlho má byť každý kus narezaný a pod akým uhlom.

## Vytvorenie rámu

1. Nakreslite rám ako úsečky v náčrte, napríklad obdĺžnik na hornej rovine. Úsečky označené ako konštrukčné sa vynechajú.
2. Keď je náčrt vybratý, zvoľte {{ui:Viac}} › {{ui:Konštrukčný prvok}}. Každá úsečka náčrtu dostane prvok.
3. Na paneli vyberte **Rodinu** a **Formát** profilu. Rodiny sú tabuľky AISC (W, S, C, L, rúrky HSS, rúra) a EN 10365 (IPE, HEA, HEB, UPN).

### Rám v 3D

Čiary z viacerých náčrtov vytvoria jeden rám: horný obdĺžnik nakreslený na rovine nad ním a nohy nakreslené na kolmo stojacich rovinách sa v 3D stretnú na svojich koncoch. Pod **Pozdĺž čiar** na paneli označte každý náčrt, ktorého čiary prvky nasledujú. Konce, ktoré sa stretnú do jedného mikrometra, sa spoja.

## Nastavenie profilu na jeho čiare

- **Otočiť (°)** otáča profil okolo jeho čiary. Nosník stojí výškou nahor (na zvislom prvku ukazuje jeho výška smerom dopredu).
- **Na čiare** určuje, ktorý bod profilu leží na čiare: stred, alebo roh či stred strany obrysu profilu. "Dolný stred" umiestni rám na náčrtovú rovinu namiesto toho, aby cez ňu prechádzal.

## Rohy a spoje

| Kde sa prvky stretávajú | Čo sa stane |
|---|---|
| Dva prvky koniec na koniec, **Rohy: Na skos** | Oba sa zrežú v rovine uprostred medzi nimi, ako rám obrazu |
| Dva prvky koniec na koniec, **Rohy: Tupé** | Prvý prvok pokračuje až k vzdialenej ploche druhého; druhý je zrezaný kolmo na bližšej ploche prvého |
| Prvok končí v strede iného (T) | Je zrezaný tak, aby priliehal na vonkajšiu stranu druhého prvku |
| Tri alebo viac končí v jednom bode | Prvý pokračuje kolmo za ostatné; ostatné sú zrezané tak, aby priliehali k nemu |

Prvý prvok je ten, ktorého čiara je prvá: čiary si zachovávajú poradie, v akom boli nakreslené, náčrt po náčrte v poradí, v akom boli označené.

## Koncové krytky a výstuhy

- **Koncové krytky** uzavrú každý voľný koniec plátom s obrysom profilu, s hrúbkou, ktorú nastavíte, mimo konca.
- **Výstuhy** umiestnia trojuholníkový plát do každého rohu, kde sa dva prvky stretávajú pod uhlom: **Veľkosť výstuhy** pozdĺž každého prvku od rohu, **Hrúbka výstuhy** naprieč, vycentrovaná na rovinu rohu.

## Zoznam rezov

Panel uvádza každý kus, identické kusy sú zoskupené: profil, dĺžku (od dlhého bodu k dlhému bodu, tak, ako by ste ju označili pre pílu), ako je narezaný každý koniec (kolmo, uhol od kolmice alebo na mieru) a ktoré prvky to sú. Koncové krytky a výstuhy sú uvedené s ich veľkosťami. {{ui:Uložiť zoznam rezov (CSV)}} ho uloží pre tabuľkový procesor.

Prvok zrezaný na mieru pri rúrke so zaoblenými rohmi zasahuje trochu do polomeru rohu tej rúrky, takže jeho dĺžka od dlhého bodu k dlhému bodu je o niekoľko milimetrov väčšia ako medzera medzi plochami.

## Obmedzenia

- Prvky nasledujú iba priame čiary; oblúky a splajny v náčrte sa vynechajú.
- Spoje sú zrezané, nie zvarené: nekreslia sa zvarové húsenice a rám je jedno teleso.
- Profily sa kreslia podľa rozmerov tabuľky: profily W s ich koreňovým zaoblením, S a U-profily s rovnobežnými prírubami, rúrky s polomermi rohov; otvory, úpravy koncov a zvarové medzery sa za vás nevytvárajú.
- Konštrukčné prvky sa vytvárajú sieťovým jadrom. Pri zapnutom presnom jadre (iba pre vývojárov) to hlásia a nevytvoria sa.
