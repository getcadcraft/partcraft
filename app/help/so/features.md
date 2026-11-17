---
title: Feature-yada iyo doorashooyinkooda
summary: Feature kasta oo ku jira toolbar-ka oo leh dejinteeda, caadiyaadkeeda iyo xaddidaadyadiisa, laga bilaabo extrude ilaa fillet, shell iyo jidhadka STEP ee la soo dhoofiyay, falalka ay wada leeyihiin dhammaan feature-yada, iyo dejinta qaybta.
keywords: features, lama dhisin, extrude, cut, revolve, revolved cut, hole, counterbore, linear pattern, circular pattern, mirror, fillet, chamfer, shell, import, options, defaults, settings, resolution, curves, facets, suppress, rollback
from: ab3a598e
---

Features-ka waxay ku liisan yihiin taariikhda by sida loo sameeyay, waxayna u dhismaan sare ilaa hoos. Mid kasta waxaa loo magacaabaa nooceeda iyo lambar: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft wuxuu feature kasta ku dhisaa mesh kernel-ka. Fillet iyo Chamfer waxay ku shaqeeyaan geesaha toosan ee u dhexeeya laba wejood oo toosan, Shell wuxuu furaa wejiyada toosan. Jidhadka la soo dhoofiyay waxay u baahan yihiin kernel saxda ah, kaas oo nooca hadda aanu lahayn: lama dhisin weli, qaybtooda hoose waxay tilmaamaan qayb ka dhisan nooc hore oo ka sii hadhay. Eeg [Mesh kernel-ka](topic:solid-kernels) iyo [Waxa weli aan la dhisin](topic:not-built-yet).

## Sawir-gacmeed

| Dejinta | Qoraal |
|---|---|
| Plane | Front, Top ama Right plane, ama wejig toosan. Waa la muujiyaa, lama beddelo: si aad u dhaqaajiso sawir-gacmeed, samee mid cusub |
| State | Fully defined, Under defined (oo leh degrees of freedom), Over defined, ama Empty |
| Geometry, Relations | Immisa qallooc, barta iyo xiriirka ayaa jira |
| Driving dimensions | Cabbir kasta oo sawir-gacmeedka ah, oo la tafatiri karo |

Badhamada: {{ui:Wax ka beddel sawir-gacmeedka}}, {{ui:U dhoofi DXF}}.

## Extrude iyo Cut

{{ui:Soo saar}} iyo {{ui:Goo}} waxay sameeyaan isla feature-ka, oo ka bilaabma dejin kala duwan.

| Dejinta | Doorashooyinka | Extrude wuxuu ka bilaabmaa | Cut wuxuu ka bilaabmaa |
|---|---|---|---|
| Hawlgal | Boss (ku dar agab), Cut (ka saar agab), Intersect (hay'ad isku dhafan), New body (weli lama dhisin nooca hadda) | Boss | Cut |
| Dhamaad | Heer ah (qoto), Dhexda naqshadda (labada dhinac), Dhammaan oo dhan | Heer ah | Dhammaan oo dhan |
| Qoto (mm) | Ka weyn 0, ilaa 1,000,000 | 10 | 10 |
| Rogi jihada | Off / on | Off | Off |

- Profile: loop kasta oo xidhan oo xariiqyo adag, goobo iyo qaansooyin ku jira sawir-gacmeedka. Loop-yada gudaha loop-yada kale waa godad.
- Through all wuxuu shaqeeyaa kaliya goynta. Wuxuu gaadhaa qaybta oo dhan dhinaca la doortay.
- Goynta waxay gashaa agabka, ka fogaato dhinaca dibadda ee qorshaha sawir-gacmeedka; Reverse wuu rogaa.

## Revolve iyo revolved cut

| Dejinta | Doorashooyinka | Caadi |
|---|---|---|
| Hawlgal | Boss, Cut | Boss ({{ui:Wareeg}}), Cut ({{ui:Wax dheeraad ah}} › {{ui:Jar wareeg}}) |
| Xagal (°) | Ka weyn 0, ilaa 360 | 360 |
| Tiir | Xariiqa dhexe ee ugu horreysa, xariiq ama xariiqa dhexe ee sawir-gacmeedka, ama feature tiir ah oo ku jirta qorshaha sawir-gacmeedka | Xariiqa dhexe ee ugu horreysa |

- Profile-ku wuxuu ku sii jiraa hal dhinac oo tiirka ah. Wuu taaban karaa.
- Tiirka revolve-ka waxaa isticmaali kara Circular patterns iyo xidhka isku-dhisnaha.

## Hole

| Dejinta | Doorashooyinka | Caadi |
|---|---|---|
| Nooca | Simple, Counterbore | Simple |
| Dhexroor (mm) | Ka weyn 0 | 6 |
| Through all | On / off | On |
| Qoto (mm) | Markii Through all uu off yahay | 10 |
| Counterbore ⌀ | Ka ballaadhan godka | 11 |
| Qotada counterbore-ka | Ka hooseeya godka heer ah | 6 |
| Rogi jihada | Off / on | Off |

- God kasta barta barar kala go' ah ee sawir-gacmeedka (barta lagu sameeyay qalabka Point). Panelku wuxuu tusaa tirada.
- Godadku waxay dhex galaan agabka, toosan sawir-gacmeedka.
- Tiirka god kasta waxaa isticmaali kara xidhka isku-dhisnaha ("Hole1, hole 2").

## Linear pattern

| Dejinta | Doorashooyinka | Caadi |
|---|---|---|
| Features to copy | Feature-yada jidhka ah ee ka sarreeya | Feature-ka la doortay, haddii kale feature-ka jidhka ah ee ugu dambeeya |
| Jihada | X axis, Y axis, Z axis; xariiq sawir-gacmeed hore; tiirka revolve; geesta la doortay | X axis (ama geesta la doortay markii lagu daray) |
| Masaafada (mm) | Lambar kasta | 20 |
| Tirada | 1 ilaa 1000, oo ku jira kii asalka ahaa | 3 |
| Rogi jihada | Off / on | Off |

## Circular pattern

| Dejinta | Doorashooyinka | Caadi |
|---|---|---|
| Features to copy | Sida Linear | Sida Linear |
| Tiir | Sida Jihada kor ku taxan | Tiirka revolve-ka ugu dambeeya, haddii kale tiirka Y (ama geesta la doortay) |
| Xagal (°) | Ka weyn 0, ilaa 360. 360 wuxuu nuqullada u kala fogeeyaa si siman meel walba; ka yar wuxuu ku kala firdhiyaa xagalkaas | 360 |
| Tirada | 1 ilaa 1000, oo ku jira kii asalka ahaa | 6 |
| Rogi jihada | Off / on | Off |

## Mirror

| Dejinta | Doorashooyinka | Caadi |
|---|---|---|
| Mirror | Jidhka oo dhan (sida hadda loo dhisay), ama feature la doortay | Feature-ka la doortay, haddii kale jidhka oo dhan |
| Qorshaha muraayadda | Front, Top ama Right plane; wejig toosan | Right plane, ama wejigii toosan ee la doortay markii lagu daray |

## Fillet iyo Chamfer

Nooca hadda, mesh kernel-ka wuxuu ku dhisaa geesaha toosan ee u dhexeeya laba wejood oo toosan (geesaha dibadda ama gudaha), oo leh hal radius. Geesta wareegsan waxay tidhi "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch."; halka geesaha wareegsan ay kulmaan geesta, waa la gees-jarayaa, feature-kuna waa digaa "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." Noocyada chamfer-ka oo dhan (masaafo siman, laba masaafo, masaafo iyo xagal, iyo **Flip sides**) way shaqeeyaan. Eeg [Wareeg, bevel iyo god](topic:fillet-chamfer-shell).

| Dejinta | Fillet | Chamfer |
|---|---|---|
| Cabbirka | **Radius (mm)** (Fillet), caadi 2 | **Masaafada (mm)** (Chamfer), caadi 1 |
| **Geesaha** | Immisa | Immisa |

- Dooro geesaha ka hor intaadan doorannin badhanka ({{key:Shift}}+guji geesaha dhowr), ama dooro isagoo aan wax la doorannin, kadibna guji geesaha ka dib.
- {{ui:Dooro geesaha}} (ama laba-jeer guji feature-ka) wuxuu beddelaa geesaha.
- Geesaha waxaa lagu xusaa laba wejiga ay isku xirayaan, sidaas darteed waxay ku sii jiraan marka cabbirrada hore loo beddelo.

## Shell

Mesh kernel-ka ayaa dhisa. Kaliya wejiyada toosan ayaa la furi karaa ("Shell: in this version it opens flat faces only (the mesh kernel builds it)."); qaro kala duwan oo darbiyada ah weli lama dhisin. Eeg [Wareeg, bevel iyo god](topic:fillet-chamfer-shell).

| Dejinta | Doorashooyinka | Caadi |
|---|---|---|
| Darbiga (mm) | Ka weyn 0 | 2 |
| Darbiyadu dibadda ayay ka korayaan (wejiyadu gudaha ayay ku sii jiraan) | Off: darbiyadu gudaha ayay u galaan. On: dibadda ayay u baxaan | Off |
| Wejiyada furan | Wejiyada la saaray, ugu yaraan hal, oo leh **Ka saar** | Wejiyada la doortay markii lagu daray |

{{ui:Dooro wejiyada}} wuxuu beddelaa wejiyada furan.

## Jidh la soo dhoofiyay

Waxaa la sameeyay isagoo furaya faylka STEP, STL, OBJ ama 3MF: jidh adag oo ka kooban saddex-geesood aan taariikh u lahayn ([Fur faylka STEP](topic:import-step), [Fur STL, OBJ ama 3MF](topic:open-meshes)). Wuxuu tusaa faylka uu ka yimid iyo waxa ay import-ku hagaajiyay; **Units in the file**, **Up in the file** iyo **Use it to** waxay ku sii jiraan tafatir. Jidh STEP ah oo lagu soo dhoofiyay dhisme hore oo leh kernel saxda ah wuxuu ku sii jiraa taariikhda oo lagu calaamadiyay inaan la dhisin; fur faylka STEP mar kale si aad ugu soo dhoofiso saddex-geesood.

| Dejinta | Doorashooyinka | Caadi |
|---|---|---|
| Up in the file | Z sare (CAD badan), Y sare | Z sare |

Patterns iyo mirror waxay koobiyeyn karaan jidh la soo dhoofiyay, laakiin ma koobiyeyn karaan fillet, chamfer ama shell.

## Falalka ay leedahay feature kasta

Hoosta panelka feature kasta:

| Badhanka | Waxa uu sameeyaa |
|---|---|
| {{ui:Joojiso}} / {{ui:Dib u dhis}} | Demi ama fur. Features-ka u baahan ayaa lama dhisin marka uu demay |
| {{ui:Ku celi halkan}} | Ku dhis kaliya features-ka ka sarreeya kan; features cusub waxay galaan rollback bar-ka |
| {{ui:Kor u dhaqaaq}} / {{ui:Hoos u dhaqaaq}} | Dib u habee, marka wax ay isticmaalayo aanay hoos ugu dhicin. Haddii kale waa madow sababta lagu sheegay |
| {{ui:Tirtir}} | Tirtir, iyo (kadib su'aal) feature kasta oo isticmaala |
| Magac | Magaca beddel (ilaa 60 xaraf) |

Features-ka leh sawir-gacmeed sidoo kale waxay liistaan **Cabbirrada naqshadda**, oo lagu tafatiri karo meesha.

## Xaaladaha taariikhda

| Xaaladda | Lagu muujiyo | Macnaha |
|---|---|---|
| Built | Caadi | Wax walba waa fiican |
| Warning | ⚠ | La dhisay, laakiin wax la hubiyo: "Over defined: 1 relation is not needed." ama "Nothing is left of the part after this." |
| Error | ⚠ error, casaan | Lama dhisi karo; fariintu waxay sheegaysaa sababta |
| Not built | ⚠ not built | Wuxuu u baahan yahay feature fashilmay, la demay ama dib loo celiyay, ama kernel saxda ah oo nooca hadda aanu lahayn ("Sweep: not built yet. …") |
| Suppressed | off | La demay |
| Rolled back | madow, ka hooseeya rollback bar-ka | Lama dhisin ilaa aad dib u socon |

## Dejinta qaybta

Guji meel bannaan si waxba aan loo dooran. Panelka midig wuxuu tusaa **Part**:

- **Name**: magaca qaybta, oo loo isticmaalo magacyada faylalka iyo blokka cinwaanka naqshadda (ilaa 120 xaraf).
- **Curves**: eeg hoos.

### Go'aaminta qalloocyada

Mesh kernel-ka wuxuu dhisaa jidhka isagu wejiyo toosan oo yar, sidaas darteed muuqaalka, STL, 3MF, STEP-ka wejiyo, mugga iyo muuqaalada naqshadda oo dhan waxay raacaan **Qalloocyada**: immisa facet ayaa wareeg buuxa ku jira.

| Dejinta | Facets wareeg kasta | Mugga qaab wareegsan |
|---|---|---|
| Qaro weyn (32 wareeg kasta) | 32 | Qiyaastii 0.64 % ka hooseeya qiimaha run ah |
| Caadi (64 wareeg kasta) | 64 | Qiyaastii 0.16 % ka hooseeya (caadi) |
| Fiican (128 wareeg kasta) | 128 | Qiyaastii 0.04 % ka hooseeya |
| Aad u fiican (256 wareeg kasta) | 256 | Qiyaastii 0.01 % ka hooseeya |

Qalloocyada fiican waxay bixiyaan dhoofin iyo muuqaal siman, laakiin dib u dhisku wuu gaabinayaa. Dejintu waxay ku kaydsan tahay faylka qaybta.

## Weli lama dhisin

Fillet-yada radius-ka kala duwan, fillet-yada iyo chamfer-yada geesaha wareegsan, shell-yada ee furaya wejiyada wareegsan, draft-ka wejiyada wareegsan, sweep, loft, rib, jidhadka STEP ee leh wejiyo wareegsan oo saxda ah, jidhad cusub, taper-yada, "ilaa" wejig ama geesta, iyo tixraacyada wejiyada iyo geesaha jidhka oo dhan waxay u baahan yihiin kernel saxda ah, oo nooca hadda ma leh. Sidoo kale weli lama dhisin: godadka la xaqiijiyay iyo kuwa countersink-ka. Eeg [Waxa weli aan la dhisin](topic:not-built-yet).
