---
title: Zaokrožitev, posnetje in votlina z Zaobli, Posnemi in Lupina
summary: Izberite robove in dodajte zaokrožitve s konstantnim ali spremenljivim polmerom ter enakomerna, dvorazdalčna ali razdalja-kot posnetja, izdolbite del z Lupina tako, da izberete ploskve za odprtje, spremenite, kateri robovi ali ploskve značilka uporablja, in popravite pogoste napake.
keywords: zaokrožitev, mešanje, posnetje, lupina, votlo, debelina stene, robovi, ploskve, izberi robove, shift klik, odprta ploskev, točno jedro, mrežno jedro, še ni izdelano
from: e41c1c12
---

:::note
**V tej različici** PartCraft gradi zaokrožitve in posnetja z mrežnim jedrom, samo na **ravnih robovih med dvema ravnima ploskvama**: robovi škatle in ravni robovi iztiskanj in izrezov, zunanji ali notranji koti (notranji kot dobi dodan material). Okrogli robovi, kot so robovi izvrtin, in polmer, ki se spreminja vzdolž roba, še niso izdelani. Kjer se srečata dva zaokrožena robova v kotu, sta zaokrožitvi pokošeni (srečata se v ostrem prelomu), ne zlitih. **Lupina** prav tako deluje, izdela jo mrežno jedro: odpira samo ravne ploskve, lupine z različnimi debelinami sten še niso izdelane, in je počasna na delih z veliko okroglimi ploskvami. Glejte [Kaj še ni izdelano](topic:not-built-yet).
:::

{{ui:Zaobli}} zaokroži robove, {{ui:Posnemi}} jih posname in {{ui:Lupina}} izdolbe del. Vse tri delujejo na robovih in ploskvah telesa ter jih izdela mrežno jedro. Njihove zaokrožitve so fasetirane kot vsaka okrogla ploskev (**Krivulje** določa, kako fino); okrogle ploskve so valji, ki jih lahko izberete in izmerite (glejte [Mrežno jedro](topic:solid-kernels)).

## Zaokrožitev ali posnetje robov

### Najprej izberite robove

1. Kliknite rob dela. Celoten rob se označi, desni panel pa pokaže **Rob**: njegovo vrsto (Ravno, Krog ali lok, Krivulja), dolžino in ploskve, med katerimi leži.
2. Za dodajanje več robov {{key:Shift}}+klik nanje. Vsak je označen; {{key:Shift}}+klik na označen rob ga odstrani. Glava plošče jih šteje ("4 robovi"), vrstica stanja pa pravi "Izbrani robovi: 4. Zaobli ali Posnemi jih zaokroži; Shift+klik izbere več, Esc počisti."
3. Izberite {{ui:Zaobli}} ali {{ui:Posnemi}} v orodni vrstici ali iste gumbe v desnem podoknu.

Značilka se doda z vsemi izbranimi robovi: zaokrožitev 2 mm ali posnetje 1 mm. Vrstica stanja pravi na primer: "Fillet1 dodan (4 robovi). Spremenite njegovo velikost na desni; Izberi robove spremeni, kateri."

### Ali najprej dodajte značilko

1. Ko nič ni izbrano, izberite {{ui:Zaobli}} ali {{ui:Posnemi}}.
2. PartCraft preklopi v izbiranje: glava desnega podokna pravi "Fillet1: izbiranje", del se prikaže, kot je bil pred zaokrožitvijo (podokno to pove), orodna vrstica pa prikaže {{ui:Končano}}.
3. Kliknite vsak rob, da ga dodate; kliknite ga znova, da ga odstranite. Vrstica stanja šteje.
4. Izberite {{ui:Končano}} (ali {{ui:Izbiranje končano}} v podoknu) ali pritisnite {{key:Esc}} ali {{key:Enter}}.

### Nastavitve

| Nastavitev | Zaokrožitev | Posnetje |
|---|---|---|
| Velikost | **Polmer (mm)**, privzeto 2 | **Razdalja (mm)** nazaj od roba na obeh ploskvah, privzeto 1 |
| **Robovi** | Koliko | Koliko |

Seznam spodaj poimenuje vsak rob po dveh ploskvah, ki ju povezuje, na primer "Rob 1: Extrude1 čelna ploskev × Extrude1 stranska ploskev". **Odstrani** izbriše enega. {{ui:Izberi robove}} se vrne na izbiranje. Dvojni klik na značilko v zgodovini naredi isto.

Robovi se zapomnijo po dveh ploskvah, ki ju povezujeta, zato ostanejo na pravem robu, ko spremenite mero višje v zgodovini.

### Spremenljive zaokrožitve in vrste posnetij

- **Spremenljiv polmer** (zaokrožitev): v tej različici še ni izdelano ("Zaokrožitev, katere polmer se spreminja vzdolž roba: še ni izdelano (potrebuje točno jedro). Dajte mu en polmer."). Z točnim jedrom označite in nastavite **Končni polmer (mm)**. Polmer se linearno spreminja od **Polmer** na enem koncu vsakega roba do **Končni polmer** na drugem; **Zamenjaj konca** ga obrne.
- **Vrsta** (posnetje): **Enaka razdalja**, **Dve razdalji** (**Druga razdalja** na drugi ploskvi) ali **Razdalja in kot** (razdalja na eni ploskvi, posnetje pod **Kot (°)** do te ploskve). **Obrni strani** da prvo razdaljo na drugo ploskev.

## Lupina dela

1. Kliknite ravno ploskev, ki naj ostane odprta, na primer vrh škatle. Ali {{key:Shift}}+klik na več ploskev.
2. Izberite {{ui:Lupina}} v orodni vrstici ali {{ui:Lupina, odpira to ploskev}} v podoknu ploskve.

Del postane 2 mm stena z izbranimi ploskvami odprtimi. Nastavitve:

| Nastavitev | Kaj naredi | Privzeto |
|---|---|---|
| **Stena (mm)** | Debelina stene | 2 |
| **Stene rastejo navzven (ploskve ostanejo znotraj)** | Označeno: stene so dodane zunaj, zato notranjost ohrani velikost dela | Izključeno: stene gredo navznoter, zunanjost ohrani velikost |
| **Odprte ploskve** | Koliko ploskev je odstranjenih | |

Navznoter so stene točno debeline stene: zunanji koti ostanejo ostri, notranji koti so zaokroženi (polmer = stena), izvrtina skozi del dobi okoli sebe cev stene. Navzven so stene dodane zunaj prvotne površine, ki postane votlina, zunanji robovi pa so zaokroženi. Notranje ploskve so poimenovane po ploskvah, ki jih odmikajo, zato jih lahko izberete.

Odpreti je mogoče samo ravne ploskve: izbira ukrivljene pravi "Lupina: v tej različici odpira samo ravne ploskve (izdela mrežno jedro)." Lupina je počasna na delih z veliko okroglimi ploskvami (več sekund na tisoč trikotnikov): med načrtovanjem uporabite grobo nastavitev **Krivulje**.

{{ui:Izberi ploskve}} spremeni, katere ploskve so odprte, na enak način kot izbiranje robov. Seznam poimenuje vsako, na primer "Ploskev 1: Extrude1 čelna ploskev". Lupina brez odprtih ploskev ni dovoljena: "Izberite ploskve za odstranitev (odprte), nato naredite lupino."

## Vrstni red je pomemben

Značilke se obnovijo od zgoraj navzdol. Zaokrožitev pred lupino se lupi skupaj z delom, zato ima notranjost tudi zaokrožene kote. Zaokrožitev po lupini zaokroži samo robove, ki jih izberete. Značilke premaknite z {{ui:Premakni više}} in {{ui:Premakni niže}} (glejte [Spreminjanje dela prek zgodovine](topic:edit-history)).

Vzorci in zrcaljenja ne morejo kopirati zaokrožitve, posnetja ali lupine: "Fillet1 spreminja robove ali stene telesa; ne more se kopirati. Kopirajte značilke, ki ustvarjajo telesa (iztiskanja, zavrtitve, izvrtine, uvoz)." Najprej vzorčite izvrtine ali reze, nato zaokrožite robove vseh kopij v eni zaokrožitvi.

## Kaj storiti, če ne uspe

| Sporočilo | Kaj storiti |
|---|---|
| "Zaokrožitev 5 mm tu ne gre (je prevelika za ploskev ob enem od robov ali se robovi srečajo v kotu, ki ga jedro ne zna zliti)." | Uporabite manjši polmer ali zaokrožite manj robov naenkrat (več značilk zaokrožitve, najmanjša zadnja) |
| "Rob, ki ga zaokrožuje, je izginil: rob med Extrude1 in Cut2." | Prejšnja sprememba je odstranila ta rob. Izberite {{ui:Izberi robove}}, odstranite rdeči rob in izberite novega |
| "Lupine ni bilo mogoče narediti s to debelino (…)." | Stena je debelejša od ozkega dela modela ali od polmera zaokrožitve. Naredite steno tanjšo ali zaokrožitve večje od stene |
| "Ta ploskev nima imena, ki bi ga zgodovina lahko sledila; izberite drugo." | Izberite ploskev, ki jo je naredila značilka (večina ploskev) |
| "Zaokrožitev: v tej različici samo ravni robovi med dvema ravnima ploskvama (izdela mrežno jedro). Zaokrožite ali posnemite ukrivljene robove v skici." (tudi Posnetje) | Izbrani rob je okrogel, na primer rob izvrtine, ali leži na ukrivljeni ploskvi. Odstranite ga z {{ui:Izberi robove}} in zaokrožite ali posnemite ta kot v skici |
| "Zaokrožitev, katere polmer se spreminja vzdolž roba: še ni izdelano (potrebuje točno jedro). Dajte mu en polmer." | Odznačite **Spremenljiv polmer** |
| "Zaokrožitev z mrežnim jedrom: kjer se zaokroženi robovi srečajo, so pokošeni, ne zlitih." (⚠ v zgodovini) | Opozorilo, ne napaka: del je zgrajen. Izbrani robovi se srečajo v kotu, zaokrožitve se tam srečajo v ostrem prelomu. Zaokrožite manj robov ali sprejmite prelom |
| "Lupina: v tej različici odpira samo ravne ploskve (izdela mrežno jedro)." | Odprta ploskev je ukrivljena. Izberite {{ui:Izberi ploskve}}, jo odstranite; odprite samo ravne ploskve |

## Omejitve

V tej različici zaokrožitve in posnetja delujejo samo na ravnih robovih med dvema ravnima ploskvama, z enim polmerom, zaokrožitve, ki se srečajo v kotu, pa so pokošene. Lupine odpirajo samo ravne ploskve. S točnim jedrom spremenljiva zaokrožitev linearno spreminja vzdolž vsakega roba (en zakon na značilko; brez polmerov v točkah vzdolž njega). Zaokrožitve ploskev, polne zaokrožitve in lupine z različnimi debelinami sten še niso izdelane.
