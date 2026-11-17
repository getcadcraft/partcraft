---
title: Priprava dela za 3D-tiskanje
summary: Preverite, ali je del ali sestav zaprt, ustreza vašemu tiskalniku in stoji na podlagi, nato ga prenesite kot STL ali 3MF za svoj slicer.
keywords: 3d tisk, 3d-tiskanje, tiskalnik, tiskanje, slicer, stl, 3mf, vodotesno, zaprto, mnogoterost, podloga, velikost podloge, tiskalna plošča, previs, podpore, osnova, milimetri, izvoz, navoji, zračnost
from: 90d81dff
---

Slicer potrebuje zaprto obliko: brez lukenj, z vsako ploskvijo, obrnjeno navzven, in brez prebadanja same sebe. Deli, ki jih izdela PartCraft, so zaprti že po zasnovi, zato preverjanje večinoma pove velikost, ali del ustreza podlagi tiskalnika, ali stoji na ravni ploskvi in koliko sega čez.

## Preverjanje in prenos

1. Neobvezno, enkrat: v {{ui:Nastavitve}} › PartCraft › **3D-tiskalnik** nastavite podlago tiskalnika: širino, globino in višino v milimetrih. Če jih pustite prazne, se ta preverba preskoči.
2. Izberite {{ui:Izvoz}}, nato {{ui:Preveri za 3D-tiskanje (STL ali 3MF) …}}.

   Pogovorno okno pove „Pripravljeno za tiskanje“ ali „Ni pripravljeno za tiskanje“, našteje vse napake ter navede velikost na podlagi (X × Y × Z, v milimetrih), prostornino in število trikotnikov.

3. Kliknite {{ui:Prenesi 3MF}} ali {{ui:Prenesi STL}}. Datoteka je enaka kot pri {{ui:Izvoz}} › {{ui:3MF, za 3D-tiskanje}} oziroma {{ui:STL, za 3D-tiskanje}}.

Pri sestavu preverba in datoteke zajamejo celoten sestav, vsako kopijo tam, kjer je postavljena.

Del se preverja tako, kot stoji, ko ga izvoz zapiše: kar v PartCraftu kaže navzgor (pravokotno na zgornjo ravnino), kaže na podlagi navzgor. Del, skicirani na zgornji ravnini, leži ravno.

## Kaj lahko pove pogovorno okno

**Ni pripravljeno za tiskanje** (slicer ga lahko zavrne ali natisne narobe): luknje (robovi, na katerih je ploskev samo na eni strani), robovi, ki jih delijo tri ali več ploskev, ploskve, obrnjene v nasprotni smeri, telo, obrnjeno narobe, ali telo, ki prebada samo sebe. Del, zgrajen v PartCraftu, teh ne bi smel nikoli kazati; če jih, glejte [Odpravljanje težav](topic:troubleshooting).

**Opozorila** (natisne se, a si ga najprej oglejte):

- **Večje od podlage tiskalnika**, tudi če ga zavrtite za 90° na podlagi.
- **Nič ne leži ravno spodaj**: v slicerju zavrtite del tako, da ploskev počiva na podlagi, sicer bo potreboval podpore ali podlago.
- **Nagnjen za več kot 45° od navpičnega**: te ploskve potrebujejo podporo, če stojijo tako, kot so. Drugačna lega jih morda potrebuje manj.
- **Ločena telesa se prekrivajo** ali **stikajo se s ploskvijo na ploskev**: slicerji jih ponavadi združijo. {{ui:Združi}} v Značilke › Več jih združi v eno telo. Glejte [Telesa](topic:bodies).
- **Manj kot 1 mm na kateri koli strani**: preverite velikosti dela.

## Navoji, ki se natisnejo

Modeliran navoj se natisne kot pravi navoj. Dajte mu nekaj **Zračnosti**, da se natisnjen vijak zavrti v natisnjeno matico: glejte [Navoji](topic:threads).

## Gladke okrogle ploskve

STL in 3MF sta sestavljena iz trikotnikov. Za gladkejše okrogle ploskve kliknite prazen prostor, da nič ni izbrano, v desnem podoknu pa nastavite **Krivulje** na **Fino (128 na obrat)** ali **Zelo fino (256 na obrat)**, preden izvozite. Več trikotnikov pomeni večje datoteke.

## Večje, manjše ali v kosih

- **Izvoz › Merilo za tiskanje (STL ali 3MF)…** shrani del, skaliran po osi, brez spremembe: **dodatek za krčenje** v odstotkih (velikost × (1 + s) ali točna velikost ÷ (1 − s)) za model za litje ali preproste faktorje glede na središče, najnižji kot, sredino dna ali izhodišče.
- **Izvoz › Razdeli za tiskanje (zip s kosi)…** razreže del, ki je prevelik za vaš tiskalnik, na kose, od katerih vsak ustreza podlagi, ki ju določite. Kose spoji sčepi, zatiči, lastovičjimi repi, luknjami za zatiče ali žepi za magnete (z zračnostjo, ki ste jo nastavili). Vsak kos in spoj je oštevilčen, kosi pa se shranijo kot STL ali 3MF v zip z listom sestave. Sam del se ne spremeni.

## Ni preverjeno

Debelina sten, podrobnosti, manjše od vaše šobe, in to, kako bo slicer postavil podpore. To prikaže vaš slicer.
