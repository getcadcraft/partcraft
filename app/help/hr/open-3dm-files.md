---
title: Otvaranje .3dm modela kao punog tijela
summary: Uvedite mreže, poligonske plohe i blokove datoteke .3dm u PartCraft kao jedno puno tijelo koje možete rezati, dodavati i na koje možete skicirati; odakle dolaze trokuti i što je izostavljeno.
keywords: 3dm, nurbs, poligonska ploha, brep, površine, mreža za prikaz, izvlačenje, blokovi, uvoz, mreža u puno tijelo, jedinice, uvezeno tijelo
from: 8ae9571b
---

PartCraft otvara datoteke `.3dm` kao **puna tijela**, na isti način kao [STL, OBJ ili 3MF mrežu](topic:open-meshes). Tijelo radi kao i svako drugo puno tijelo: možete ga rezati, dodavati mu, bušiti, ponavljati uzorak i skicirati na njegove ravne plohe. Nema vlastitu povijest.

## Otvaranje datoteke

1. Odaberite {{ui:Open}} ili pritisnite {{key:Mod+O}} i odaberite datoteku `.3dm`. Ili je ispustite u 3D prikaz.
2. PartCraft je čita i pokazuje što je našao: koliko objekata s plohama ulazi, koliko je ploha došlo iz mreža spremljenih u datoteci a koliko ih je PartCraft sam trokutirao, svaku popravku i zatvara li se rezultat **zatvoren**.
3. Provjerite **Jedinice u datoteci** (datoteka ih sama kaže; jedinica koju PartCraft ne navodi, na primjer jard, pretvara se u milimetre) i **Gore u datoteci**.
4. Odaberite {{ui:Open as a body}}, ili **Upotrijebi za** i {{ui:Add to this part}} kad dio već ima značajke.

## Odakle dolaze trokuti

PartCraft u ovoj verziji gradi tijela od trokuta, pa se svaka površina u datoteci pretvara u male ravne plohe. Za svaku plohu poligonske plohe (i svakog izvlačenja) uzima **mrežu za prikaz spremljenu u datoteci** kad postoji, inače je **sam trokutira** (ravnine, NURBS površine, površine rotacije, izvučene krivulje i izvlačenja, obrezane svojim bridovima). Plohe jedne poligonske plohe dijele svoje točke bridova, pa se zatvorena poligonska ploha uvozi zatvorena. Ploha na vrsti površine koju PartCraft još ne čita se izostavlja, a dijalog kaže koliko ih je i koje vrste; rezultat tada obično nije zatvoren.

## Sve u datoteci postaje jedno tijelo

Svaka vidljiva mreža, poligonska ploha i izvlačenje te svaki položaj bloka ulazi u **jedno** tijelo, gdje ga datoteka stavlja. Objekti koji su skriveni ili su na sloju koji je isključen se izostavljaju. Kad datoteka sadrži nekoliko zasebnih tijela, tijelo ima nekoliko dijelova: otvorite svaki iz njegove datoteke ako ih želite kao zasebna tijela.

## Što je izostavljeno (i rečeno)

Krivulje, točke, oblaci točaka, tekst, kote, šrafure i svjetla se izostavljaju: tijelo uzima samo plohe. Isto vrijedi za SubD objekte (prvo ih pretvorite u mreže ili poligonske plohe u programu koji je napravio datoteku), blokove povezane iz drugih datoteka te boje, slojeve i nazive (PartCraft tijela ovdje nemaju vlastite).

## Kad se ne zatvara

Otvorene poligonske plohe i površine (jedna obrezana površina, oblik s nedostajućom plohom) nemaju unutrašnjost, pa ne mogu biti puno tijelo. Dijalog kaže koliko je otvora ostalo i ništa ne dodaje. Spojite ili zatvorite oblik u programu koji ga je napravio, spremite ga i otvorite ponovno. Vidi [Kad se mreža ne zatvara](topic:open-meshes#when-a-mesh-does-not-close).
