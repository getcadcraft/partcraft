---
title: Otvaranje .3dm modela kao čvrstog tela
summary: Uvedite mreže, polipovrši i blokove .3dm datoteke u PartCraft kao jedno čvrsto telo koje možete seći, dodavati i skicirati na njemu; odakle dolaze trouglovi i šta je izostavljeno.
keywords: 3dm, nurbs, polipovrš, brep, površi, mreža za prikaz, izvlačenje, blokovi, uvoz, mreža u telo, jedinice, uvezeno telo
from: 8ae9571b
---

PartCraft otvara `.3dm` datoteke kao **čvrsta tela**, na isti način kao [STL, OBJ ili 3MF mrežu](topic:open-meshes). Telo radi kao svako drugo čvrsto telo: seče se, dodaje mu se, buši se, pravi niz od njega i skicira se na njegovim ravnim površima. Nema sopstvenu istoriju.

## Otvaranje datoteke

1. Izaberite {{ui:Otvori}} ili pritisnite {{key:Mod+O}}, pa izaberite `.3dm` datoteku. Ili je prevucite u 3D prikaz.
2. PartCraft je čita i prikazuje šta je našao: koliko objekata sa površima dolazi, koliko površi je nastalo iz mreža sačuvanih u datoteci, a koliko ih je PartCraft sam pretvorio u trouglove, svaku popravku i da li rezultat **zatvara** telo.
3. Proverite **Jedinice u datoteci** (datoteka kaže svoje; jedinica koju PartCraft ne navodi, kao jardi, pretvara se u milimetre) i **Gore u datoteci**.
4. Izaberite {{ui:Otvori kao telo}}, ili **Koristi za** i {{ui:Dodaj u ovaj deo}} kad deo već ima elemente.

## Odakle dolaze trouglovi

PartCraft u ovoj verziji pravi tela od trouglova, pa se svaka površ u datoteci pretvara u male ravne površi. Za svaku površ polipovrši (i svako izvlačenje) uzima **mrežu za prikaz sačuvanu u datoteci** kad postoji, a inače **sam je pretvara u trouglove** (ravni, NURBS površi, površi obrtanja, izvučene krive i izvlačenja, skraćene svojim ivicama). Površi jedne polipovrši dele tačke svojih ivica, pa zatvorena polipovrš dolazi zatvorena. Površ vrste koju PartCraft još ne čita se izostavlja, a dijalog kaže koliko ih je i koje vrste; rezultat tada obično ne zatvara telo.

## Sve u datoteci postaje jedno telo

Svaka vidljiva mreža, polipovrš i izvlačenje, kao i svaki položaj bloka, ide u **jedno** telo tamo gde ga datoteka postavlja. Objekti koji su sakriveni, ili na sloju koji je isključen, se izostavljaju. Kad datoteka sadrži nekoliko odvojenih čvrstih tela, telo ima više delova: ako ih želite kao zasebna tela, otvorite svako iz sopstvene datoteke.

## Šta se izostavlja (i kaže)

Krive, tačke, oblaci tačaka, tekst, kote, šrafure i svetla se izostavljaju: telo uzima samo površi. Tako je i sa SubD objektima (pretvorite ih u mreže ili polipovrši u programu koji je napravio datoteku pre toga), blokovima povezanim iz drugih datoteka, i bojama, slojevima i imenima (tela PartCraft-a ovde nemaju sopstvena).

## Kad ne zatvara telo

Otvorene polipovrši i površi (jedna skraćena površ, oblik sa nedostajućom površi) nemaju unutrašnjost, pa ne mogu biti čvrsto telo. Dijalog kaže koliko otvora ostaje i ništa ne dodaje. Spojite ili zatvorite oblik u programu koji ga je napravio, sačuvajte i ponovo otvorite. Vidi [Kad mreža ne zatvara telo](topic:open-meshes#when-a-mesh-does-not-close).
