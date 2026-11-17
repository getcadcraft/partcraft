---
title: Otvaranje .3dm modela kao čvrstog tijela
summary: Uvedi mreže, polipovršine i blokove iz .3dm datoteke u PartCraft kao jedno čvrsto tijelo koje možeš rezati, dodavati mu i crtati na njemu; odakle dolaze trouglovi i šta se izostavlja.
keywords: 3dm, nurbs, polipovršina, brep, površine, mreža za prikaz, izvlačenje, blokovi, uvoz, mreža u tijelo, jedinice, uvezeno tijelo
from: 8ae9571b
---

PartCraft otvara `.3dm` datoteke kao **čvrsta tijela**, na isti način kao [STL, OBJ ili 3MF mrežu](topic:open-meshes). Tijelo radi kao bilo koje drugo tijelo: izrezuj ga, dodaj mu, buši, pravi uzorke i skiciraj na njegovim ravnim površinama. Nema sopstvenu istoriju.

## Otvaranje datoteke

1. Izaberi {{ui:Open}} ili pritisni {{key:Mod+O}}, i izaberi `.3dm` datoteku. Ili je prevuci na 3D prikaz.
2. PartCraft je čita i prikazuje šta je našao: koliko objekata sa površinama ulazi, koliko površina potiče iz mreža sačuvanih u datoteci, koliko ih je PartCraft pretvorio u trouglove, svaku popravku, i da li se rezultat **zatvara**.
3. Provjeri **Jedinice u datoteci** (datoteka kaže svoje; jedinica koju PartCraft ne navodi, kao što su jardi, pretvara se u milimetre) i **Gore u datoteci**.
4. Izaberi {{ui:Open as a body}}, ili **Koristi za** i {{ui:Add to this part}} kad dio već ima elemente.

## Odakle dolaze trouglovi

PartCraft u ovoj verziji pravi tijela od trouglova, pa svaka površina u datoteci postaje male ravne površine. Za svaku površinu polipovršine (i svaku ekstruziju) uzima **mrežu za prikaz sačuvanu u datoteci** kad postoji, inače sam pretvara površinu u trouglove (ravni, NURBS površine, površine rotacije, izvučene krive i ekstruzije, odsječene svojim ivicama). Površine jedne polipovršine dijele tačke svojih ivica, pa se zatvorena polipovršina uvozi zatvorena. Površina vrste koju PartCraft još ne čita se izostavlja, a dijalog kaže koliko ih je i koje vrste; rezultat se tada obično ne zatvara.

## Sve u datoteci postaje jedno tijelo

Svaka vidljiva mreža, polipovršina i ekstruzija, i svako postavljanje bloka, ulaze u **jedno** tijelo gdje ih datoteka postavi. Objekti koji su skriveni ili na sloju koji je isključen se izostavljaju. Kad datoteka sadrži nekoliko odvojenih tijela, tijelo ima više komada: otvori svako iz njegove datoteke ako ih želiš kao zasebna tijela.

## Šta se izostavlja (i kaže)

Krive, tačke, oblaci tačaka, tekst, kote, šrafure i svjetla se izostavljaju: tijelo uzima samo površine. Isto je i sa SubD objektima (prvo ih pretvori u mreže ili polipovršine u programu koji je napravio datoteku), blokovima povezanim iz drugih datoteka, i bojama, slojevima i nazivima (tijela PartCraft-a ovdje nemaju svoje).

## Kad se ne zatvara

Otvorene polipovršine i površine (pojedinačna odsječena površina, oblik s nedostajućom površinom) nemaju unutrašnjost, pa ne mogu biti tijelo. Dijalog kaže koliko je otvora ostalo i ništa ne dodaje. Spoji ili zatvori oblik u programu koji ga je napravio, sačuvaj i ponovo otvori. Vidi [Kad se mreža ne zatvara](topic:open-meshes#when-a-mesh-does-not-close).
