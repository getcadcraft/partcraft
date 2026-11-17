---
title: Odprite model .3dm kot telo
summary: Prinesite mreže, poliploskve in bloke datoteke .3dm v PartCraft kot eno telo, ki ga lahko režete, dodajate in na katerem skicirate; od kod prihajajo trikotniki in kaj je izpuščeno.
keywords: 3dm, nurbs, poliploskev, brep, ploskve, mreža za upodabljanje, izvlečenje, bloki, uvoz, mreža v telo, enote, uvoženo telo
from: 8ae9571b
---

PartCraft odpira datoteke `.3dm` kot **telesa**, na enak način kot [mrežo STL, OBJ ali 3MF](topic:open-meshes). Telo deluje kot vsako drugo telo: režete ga, dodajate mu, vrtate, vzorčite in skicirate na njegovih ravnih ploskvah. Nima lastne zgodovine.

## Odprite datoteko

1. Izberite {{ui:Odpri}} ali pritisnite {{key:Mod+O}} in izberite datoteko `.3dm`. Ali jo spustite v 3D pogled.
2. PartCraft jo prebere in pokaže, kaj je našel: koliko predmetov s ploskvami prihaja, koliko ploskev je prišlo iz mrež, shranjenih v datoteki, in koliko jih je PartCraft sam razdelil na trikotnike, vsako popravilo in ali se rezultat **zapre**.
3. Preverite **Enote v datoteki** (datoteka pove svoje; enota, ki je PartCraft ne navaja, na primer jardi, se pretvori v milimetre) in **Smer navzgor v datoteki**.
4. Izberite {{ui:Odpri kot telo}} ali **Uporabi za** in {{ui:Dodaj temu delu}}, kadar ima del že značilke.

## Od kod prihajajo trikotniki

PartCraft v tej različici gradi telesa iz trikotnikov, zato se vsaka površina v datoteki spremeni v majhne ravne ploskve. Za vsako ploskev poliploskve (in vsak izvlek) vzame **mrežo za upodabljanje, shranjeno v datoteki**, kadar obstaja, sicer jo **sam razdeli na trikotnike** (ravnine, površine NURBS, površine vrtenja, izvlečene krivulje in izvlečki, obrezani z robovi). Ploskve ene poliploskve delijo svoje robne točke, zato zaprta poliploskev pride zaprta. Ploskev vrste površine, ki je PartCraft še ne bere, je izpuščena, pogovorno okno pa pove, koliko in katere vrste; rezultat zato običajno ni zaprt.

## Vse v datoteki postane eno telo

Vsaka vidna mreža, poliploskev in izvlek ter vsaka postavitev bloka gre v **eno** telo tam, kjer jo datoteka postavi. Skriti predmeti ali predmeti na izklopljenem sloju so izpuščeni. Kadar datoteka vsebuje več ločenih teles, ima telo več kosov: če jih želite kot ločena telesa, jih odprite vsakega iz njegove datoteke.

## Kaj je izpuščeno (in povedano)

Krivulje, točke, oblaki točk, besedilo, mere, šrafure in luči so izpuščeni: telo vzame samo ploskve. Izpuščeni so tudi predmeti SubD (pred tem jih v programu, ki je ustvaril datoteko, spremenite v mreže ali poliploskve), bloki, povezani iz drugih datotek, ter barve, sloji in imena (telesa PartCraft tukaj nimajo lastnih).

## Ko se ne zapre

Odprte poliploskve in površine (ena obrezana površina, oblika z manjkajočo ploskvijo) nimajo notranjosti, zato ne morejo biti telo. Pogovorno okno pove, koliko odprtin je ostalo, in ničesar ne doda. Spojite ali zaprite obliko v programu, ki jo je naredil, shranite in jo znova odprite. Glejte [Ko se mreža ne zapre](topic:open-meshes#when-a-mesh-does-not-close).
