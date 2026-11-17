---
title: Potegni po poti, prehod in nagib
summary: Potegnite zaprt profil vzdolž poti skic ali robov modela, zlijte prehod skozi prereze na različnih ravninah in dodajte nagib ploskvam; z možnostmi, točnimi rezultati in sporočili.
keywords: potegni, potegnjen čep, potegnjen izrez, cev, pot, prehod, prehodni čep, mešani prerezi, ravni, nagib, kot nagiba, zožene ploskve, nevtralna ravnina, smer vleka, oblikovanje, litje
from: 9d637981
---

:::note
**V tej različici** potegovanje po poti in prehod še nista izdelana: potrebujeta točno jedro geometrije, ki ga ta različica PartCraft nima. [Kaj še ni izdelano](topic:not-built-yet) pove, kaj storiti namesto tega; odseka Potegni po poti in Prehod opisujeta, kako delujeta s točnim jedrom. **Nagib deluje** na ravnih ploskvah: izdela ga mrežno jedro, z enakim rezultatom kot točno jedro.
:::

Vse tri so v skupini Značilke, v meniju {{ui:Več}} (glejte [Mrežno jedro](topic:solid-kernels)). Vsaka lahko doda material, ga izreže, ohrani samo presek (**Presek**) ali ustvari **Novo telo** (pri potegovanju in prehodu: **Operacija** v podoknu).

## Potegni po poti

Potegovanje premakne zaprt profil vzdolž poti: cevi, ročaje, žične vzmeti, tirnice.

1. Narišite **pot** v eni skici: črte in loki, povezani od konca do konca (ali uporabite robove modela, spodaj).
2. Narišite **profil** v drugi skici, katere ravnina poteka skozi en konec poti, na primer krog na zgornji ravnini na začetku poti, narisane na sprednji ravnini.
3. Izberite skico profila in izberite {{ui:Več}}, nato {{ui:Potegni po poti}}. Najnovejša druga skica postane pot.

V podoknu:

| Nastavitev | Kaj naredi |
|---|---|
| **Pot** | Označite skice, ki tvorijo pot (več skic se poveže od konca do konca v eno 3D-pot); **Izberi robove modela** doda robove dela |
| **Usmerjenost** | Sledi poti (privzeto), Frenet, Fiksno (prerezi ostanejo vzporedni s profilom), Ohrani smer, Vzdolž vodilne krivulje |
| **Končno merilo** | Profil se linearno poveča ali zmanjša na to velikost na koncu (1 = stalno) |

Ostri vogali na poti so pokošeni. Krog s polmerom 5, potegnjen vzdolž 100 mm črte, je valj z natanko 2500π mm³; vzdolž četrtine loka s polmerom 50 je četrtina torusa 625π² mm³.

## Prehod

Prehod se zlije skozi dva ali več prerezov na različnih ravninah.

1. Narišite vsak prerez v svoji skici (vsaka ena zaprta zanka), na osnovnih ravninah, referenčnih ravninah (glejte [Referenčne ravnine, osi in točke](topic:reference-geometry)) ali ploskvah.
2. Izberite {{ui:Več}}, nato {{ui:Prehod}}. Vsaka neuporabljena skica z eno zanko postane prerez, po zgodovinskem vrstnem redu.

Podokno našteva prereze po vrsti (**Gor** spremeni vrstni red, **Odstrani** izbriše enega); **Dodaj skico** doda še enega, **Izberi ploskev** doda ravno ploskev dela. **Premočrtno** ustvari ravne ploskve med prerezi namesto gladkega prehoda. Med dvema kvadratoma je oboje isti krnjenec (kvadrat 40 mm do kvadrata 20 mm na višini 30 mm: natanko 28000 mm³).

Prerezi z različnim številom stranic (kvadrat in trikotnik) jih OpenCascade uskladi, kar lahko zvije stranske ploskve; značilka vas opozori. Za najčistejši rezultat narišite prereze z enakim številom stranic, začenši pri ustreznih vogalih.

### Vodilne tirnice

Vodilne tirnice so krivulje, ki jim morajo stranice prehoda slediti od prvega do zadnjega prereza, za izboklino, pas ali razširitev, ki jo narišete sami.

1. Narišite dve ali več tirnic: odprte krivulje (črte, loki, zlepki), ki potekajo od prvega do zadnjega prereza in vsak prerez sekajo enkrat. Ena skica lahko vsebuje več tirnic: vsaka ločena veriga v njej je svoja tirnica. Narišite tirnico tako, da se res stika z vsakim prerezom: njene konce privzemite na točke prerezov.
2. V podoknu Prehod pod **Vodilne tirnice** označite skice, ki jih vsebujejo, ali kliknite {{ui:Izberite robove modela kot vodilne krivulje}} in kliknite robove dela (Esc konča).

Z tirnicami je prehod Gordonova ploskev skozi prereze in tirnice (glejte [Ploskve skozi mrežo krivulj](topic:gordon-surfaces)), na obeh koncih zaprta z ravnima pokrovoma v telo. Podokno pove, kako natančno jim sledi. Vsak prerez mora nato biti skica (točka ali ploskev ne moreta sprejeti tirnice), **Premočrtno** pa se ne uporablja. Tirnica, ki zgreši prerez za več kot 0.01 mm, je zavrnjena, z navedbo reže.

Preverjeno: dva kroga (premer 20 mm in 10 mm na razdalji 40 mm) s štirimi ravnimi tirnicami dasta prostornino stožčastega krnjenca z odstopanjem do 0.000002 %; loki, ki se izbočijo za 5 mm, dasta sodček, ki sledi vsaki tirnici do 0.00001 mm.

## Nagib

Nagib nagne ploskve, da del lahko izstopi iz kalupa.

1. Izberite {{ui:Več}}, nato {{ui:Nagib}} (ali najprej {{key:Shift}}+klik na ploskve). Brez izbire ste v načinu izbiranja: kliknite vsako ploskev, ki jo nagnete, nato {{ui:Končano}}.
2. Nastavite **Kot (°)**, **Nevtralno ravnino** (kjer ploskve ohranijo svojo velikost) in **Smer vleka** (privzeto normala nevtralne ravnine).

Pozitiven kot nagne ploskev navznoter vzdolž vleka in odstrani material; negativen ga doda. Nevtralna ravnina se na začetku postavi na zgornjo ravnino. V tej različici je mogoče nagniti samo ravne ploskve: valj, stožec ali prosto oblikovana ploskev sporoči „Nagib: v tej različici samo ravne ploskve (izdela ga mrežno jedro).“ Štiri stranice bloka 100 × 100 × 50, nagnjenega za 5° okoli spodnjega roba, postanejo krnjenec z natanko h/3·(a² + b² + ab), pri čemer je b = a − 2h·tan 5°.

## Sporočila

| Sporočilo | Kaj storiti |
|---|---|
| „Ravnina profila mora potekati skozi en konec poti …“ | Premaknite skico profila na začetek (ali konec) poti |
| „Pot ima vrzel: njene krivulje se ne stikajo od konca do konca …“ | Povežite krivulje poti; v ločenih skicah se morajo konci natančno stikati |
| „Prerez prehoda potrebuje natanko eno zaprto zanko“ | Razdelite skico ali odstranite odvečno zanko |
| „… ni mogoče nagniti okoli te nevtralne ravnine …“ | Ploskev je vzporedna z nevtralno ravnino ali je ne seka |
| „Nagib: v tej različici samo ravne ploskve (izdela ga mrežno jedro).“ | Izbrana ploskev je ukrivljena. Odstranite jo; nagibajte samo ravne ploskve |

:::note
Še ni izdelano: uvijajoča se potegovanja, potegovanja tankih sten in ploskev, vodilne tirnice prehoda in tangentnost na koncih, nagib na valjih, stožcih in prosto oblikovanih ploskvah.
:::
