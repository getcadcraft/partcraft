---
title: Značilke in njihove možnosti
summary: Vsaka značilka v orodni vrstici z nastavitvami, privzetimi vrednostmi in omejitvami, od iztiskanja do zaokrožitve, lupine in uvoženih teles STEP, dejanja, ki jih ima skupna vsaka značilka, ter nastavitve dela.
keywords: značilke, še ni izdelano, iztisni, izreži, zavrti, zavrteni izrez, izvrtina, razširjena izvrtina, linearni vzorec, krožni vzorec, zrcali, zaokrožitev, posnetje, lupina, uvoz, možnosti, privzeto, nastavitve, ločljivost, krivulje, fasete, zatiranje, povrnitev nazaj
from: ab3a598e
---

Značilke so v zgodovini navedene v vrstnem redu, v katerem so bile narejene, in se obnovijo od zgoraj navzdol. Vsaka je poimenovana po svoji vrsti s številko: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft vsako značilko zgradi z mrežnim jedrom. Zaokrožitev in posnetje delujeta na ravnih robovih med dvema ravnima ploskvama, lupina pa odpira ravne ploskve. Uvožena telesa potrebujejo točno jedro, ki ga ta različica nima: še niso izdelana, njihov razdelek spodaj pa opisuje del, izdelan v prejšnji različici, ki ga ohrani. Glejte [Mrežno jedro](topic:solid-kernels) in [Kaj še ni izdelano](topic:not-built-yet).

## Skica

| Nastavitev | Opombe |
|---|---|
| Ravnina | Spredaj, Tloris ali Desno ali ravna ploskev. Prikazano, ne spremeni se: za premik skice ustvarite novo |
| Stanje | Popolnoma določena, Premalo določena (s prostostnimi stopnjami), Preveč določena ali Prazna |
| Geometrija, Relacije | Koliko krivulj, točk in relacij |
| Gonilne mere | Vsaka mera skice, ki jo je mogoče urejati |

Gumbi: {{ui:Uredi skico}}, {{ui:Izvozi kot DXF}}.

## Iztisni in izreži

{{ui:Iztisni}} in {{ui:Izreži}} ustvarita isto značilko z različnimi začetnimi nastavitvami.

| Nastavitev | Izbire | Iztisni začne pri | Izreži začne pri |
|---|---|---|---|
| Operacija | Izboklina (doda material), Izrez (odstrani material), Presek (ohrani prekrivanje), Novo telo (v tej različici še ni izdelano) | Izboklina | Izrez |
| Konec | Slepo (globina), Sredinska ravnina (na obe strani), Skozi vse | Slepo | Skozi vse |
| Globina (mm) | Nad 0, do 1,000,000 | 10 | 10 |
| Obrni smer | Izključeno / vključeno | Izključeno | Izključeno |

- Profil: vsaka zaprta zanka polnih črt, krogov in lokov v skici. Zanke znotraj zank so luknje.
- Skozi vse deluje samo za reze. Seže čisto skozi del na izbrani strani.
- Izrez gre v material, stran od zunanje strani ravnine skice; Obrni jo obrne.

## Zavrtenje in zavrteni izrez

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| Operacija | Izboklina, Izrez | Izboklina ({{ui:Zavrti}}), Izrez ({{ui:Več}} › {{ui:Zavrteni izrez}}) |
| Kot (°) | Nad 0, do 360 | 360 |
| Os | Prva središčnica, katera koli črta ali središčnica skice ali značilka osi, ki leži v ravnini skice | Prva središčnica |

- Profil mora ostati na eni strani osi. Lahko se je dotika.
- Os zavrtitve lahko uporabijo krožni vzorci in spoji sestava.

## Izvrtina

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| Vrsta | Enostavna, Razširjena izvrtina | Enostavna |
| Premer (mm) | Nad 0 | 6 |
| Skozi vse | Vklop / izklop | Vklop |
| Globina (mm) | Ko je Skozi vse izklopljeno | 10 |
| Premer razširitve ⌀ | Širše od izvrtine | 11 |
| Globina razširitve | Plitvejše od slepe izvrtine | 6 |
| Obrni smer | Izključeno / vključeno | Izključeno |

- Ena izvrtina na vsaki prosti točki skice (točke, narejene z orodjem Točka). Plošča prikaže, koliko jih je.
- Izvrtine se vrtajo pravokotno na ravnino skice, v material.
- Os vsake izvrtine lahko uporabijo spoji sestava ("Hole1, luknja 2").

## Linearni vzorec

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| Značilke za kopiranje | Katere koli polne značilke nad njim | Izbrana značilka, sicer zadnja polna značilka |
| Smer | Os X, os Y, os Z; črta prejšnje skice; os zavrtitve; izbran rob | Os X (ali rob, izbran ob dodajanju) |
| Razmik (mm) | Katero koli število | 20 |
| Število | 1 do 1000, vključno z izvirnikom | 3 |
| Obrni smer | Izključeno / vključeno | Izključeno |

## Krožni vzorec

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| Značilke za kopiranje | Enako kot pri linearnem | Enako kot pri linearnem |
| Os | Enako kot za Smer zgoraj | Os zadnje zavrtitve, sicer os Y (ali izbran rob) |
| Kot (°) | Nad 0, do 360. 360 razporedi kopije enakomerno po krogu; manj jih razporedi po kotu | 360 |
| Število | 1 do 1000, vključno z izvirnikom | 6 |
| Obrni smer | Izključeno / vključeno | Izključeno |

## Zrcali

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| Zrcali | Celotno telo (kot je zdaj zgrajeno) ali izbrane značilke | Izbrana značilka, sicer celotno telo |
| Zrcalna ravnina | Ravnina Spredaj, Tloris ali Desno; ravna ploskev | Ravnina Desno ali ravna ploskev, izbrana ob dodajanju |

## Zaokrožitev in posnetje

V tej različici mrežno jedro izdela zaokrožitve in posnetja na ravnih robovih med dvema ravnima ploskvama (zunanji ali notranji koti), z enim polmerom. Okrogel rob pravi: "Zaokrožitev: v tej različici samo ravni robovi med dvema ravnima ploskvama (izdela mrežno jedro). Zaokrožite ali posnemite ukrivljene robove v skici."; kjer se zaokroženi robovi srečajo v kotu, so pokošeni, opozorilo značilke pa pravi "Zaokrožitev z mrežnim jedrom: kjer se zaokroženi robovi srečajo, so pokošeni, ne zlitih." Vse vrste posnetja (enaka razdalja, dve razdalji, razdalja in kot, z **Obrni strani**) delujejo. Glejte [Zaokrožitev, posnetje in votlina](topic:fillet-chamfer-shell).

| Nastavitev | Zaokrožitev | Posnetje |
|---|---|---|
| Velikost | **Polmer (mm)**, privzeto 2 | **Razdalja (mm)** nazaj od roba na obeh ploskvah, privzeto 1 |
| **Robovi** | Koliko | Koliko |

- Robove izberite, preden kliknete gumb ({{key:Shift}}+klik za več), ali izberite ukaz brez izbora in nato kliknite robove.
- {{ui:Izberi robove}} (ali dvakrat kliknite značilko) spremeni robove.
- Robovi se ohranijo po dveh ploskvah, ki ju povezujeta, zato preživijo spremembe velikosti višje v zgodovini.

## Lupina

Mrežno jedro jo izdela. Odprte so lahko samo ravne ploskve ("Lupina: v tej različici odpira samo ravne ploskve (izdela mrežno jedro)."); stene različnih debelin še niso izdelane. Glejte [Zaokrožitev, posnetje in votlina](topic:fillet-chamfer-shell).

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| Stena (mm) | Nad 0 | 2 |
| Stene rastejo navzven (ploskve ostanejo znotraj) | Izključeno: stene gredo navznoter. Vključeno: stene gredo navzven | Izključeno |
| Odprte ploskve | Odstranjene ploskve, vsaj ena, z **Odstrani** | Ploskve, izbrane ob dodajanju |

{{ui:Izberi ploskve}} spremeni odprte ploskve.

## Uvoženo telo

Ustvarjeno z odpiranjem datoteke STEP, STL, OBJ ali 3MF: telo iz trikotnikov brez lastne zgodovine ([Odprite datoteko STEP in gradite nanjo](topic:import-step), [Odprite STL, OBJ ali 3MF](topic:open-meshes)). Prikaže datoteko, iz katere izvira, in kaj je uvoz popravil; **Enote v datoteki**, **Navzgor v datoteki** in **Uporabi za** ostanejo urejljivi. Telo STEP, ki ga je uvozila starejša različica s točnim jedrom, ostane v zgodovini označeno kot ni izdelano; ponovno odprite datoteko STEP, da jo uvozite kot trikotnike.

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| Navzgor v datoteki | Z navzgor (večina CAD), Y navzgor | Z navzgor |

Vzorci in zrcaljenja lahko kopirajo uvoženo telo, ne pa zaokrožitve, posnetja ali lupine.

## Kaj ima vsaka značilka

Na dnu plošče vsake značilke:

| Gumb | Naredi |
|---|---|
| {{ui:Zaduši}} / {{ui:Ukini dušenje}} | Izklopi ali vklopi. Značilke, ki to potrebujejo, se ne obnovijo, dokler je izklopljeno |
| {{ui:Povrni nazaj do sem}} | Obnovi samo značilke nad to. Nove značilke se vstavijo na vrstico povrnitve |
| {{ui:Premakni više}} / {{ui:Premakni niže}} | Preuredi, ko ni ničesar, kar uporablja, da bi končalo pod njo. Sicer je sivo, z razlogom |
| {{ui:Izbriši}} | Izbriše jo in (po vprašanju) vsako značilko, ki jo uporablja |
| Ime | Preimenuje jo (do 60 znakov) |

Značilke s skico imajo tudi **Dimenzije skice**, ki jih lahko urejate na mestu.

## Stanja v zgodovini

| Stanje | Prikazano kot | Pomen |
|---|---|---|
| Zgrajeno | Običajno | Vse v redu |
| Opozorilo | ⚠ | Zgrajeno, vendar je nekaj za preveriti: "Preveč določena: 1 relacija ni potrebna." ali "Po tem na delu ni ničesar več." |
| Napaka | ⚠ napaka, rdeče | Ni mogoče zgraditi; sporočilo pove zakaj |
| Ni izdelano | ⚠ ni izdelano | Potrebuje značilko, ki je odpovedala, je zatrta ali povrnjena nazaj, ali potrebuje točno jedro, ki ga ta različica nima ("Potegni po poti: še ni izdelano. …") |
| Zatrto | izklopljeno | Izklopljeno |
| Povrnjeno nazaj | sivo, pod vrstico povrnitve | Ni zgrajeno, dokler ne povrnete naprej |

## Nastavitve dela

Kliknite prazen prostor, da nič ni izbrano. Desni panel prikaže **Del**:

- **Ime**: ime dela, uporabljeno za imena datotek in glavo risbe (do 120 znakov).
- **Krivulje**: glejte spodaj.

### Ločljivost krivulj

Mrežno jedro telo zgradi samo iz ravnih fasetov, zato so pogled, STL, 3MF, fasetirani STEP, prostornina in pogledi risbe vsi odvisni od **Krivulje**: koliko fasetov na celi obrat.

| Nastavitev | Fasetov na obrat | Prostornina okrogle oblike |
|---|---|---|
| Groba (32 na obrat) | 32 | Približno 0.64 % pod pravo vrednostjo |
| Običajna (64 na obrat) | 64 | Približno 0.16 % pod (privzeto) |
| Fina (128 na obrat) | 128 | Približno 0.04 % pod |
| Zelo fina (256 na obrat) | 256 | Približno 0.01 % pod |

Finejše krivulje dajo gladšo izvoze in poglede, a počasnejše obnove. Nastavitev je shranjena v datoteki dela.

## Še ni izdelano

Spremenljivi polmer zaokrožitev, zaokrožitve in posnetja na okroglih robovih, lupine, ki odpirajo ukrivljene ploskve, osnutek na ukrivljenih ploskvah, potegni po poti, prehod, rebro, telesa STEP s točnimi ukrivljenimi ploskvami, nova telesa, nagibi, "do" ploskve ali oglišča ter sklici na ploskve in robove telesa potrebujejo točno jedro, ki ga ta različica nima. Prav tako še niso izdelane: navojne in ponorne izvrtine. Glejte [Kaj še ni izdelano](topic:not-built-yet).
