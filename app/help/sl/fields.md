---
title: Polja: oblike kot razdalje
summary: Kaj je polje (oblika, shranjena kot razdalja do njene površine), kako ga zgraditi iz primitivov, booleovih operacij, mrež in minimalnih površin v skripti, kako postane telo in zakaj isti skript vedno da iste bajte.
keywords: polje, predznačena razdalja, sdf, voksel, giroid, tpms, mreža, boolean, odmik, lupina, zlitje, dvojno konturiranje, deterministično, vodotesno, manifold, opeka
from: faab7480
---

**Polje** opisuje obliko z razdaljo od poljubne točke do njene površine: negativno znotraj, nič na površini, pozitivno zunaj. Krogla s polmerom 5 je „razdalja do središča minus 5“. Združevanje oblik je računanje z razdaljami: unija je manjša od obeh, presek večja, odštevanje ene oblike od druge pa je večja od prve minus druga. Povečanje oblike za 1 mm odšteje 1 od razdalje; votla stena je razdalja, prepognjena čez.

Zato so polja dobra za mreže, kanale in stopnjevane stene: površina giroida je „vsota sinusov je nič“, stena, ki se od 1 do 3 mm zadebeli čez del, pa je število, ki se spreminja po delu.

## Od polja do telesa

`to_body(field, h)` vzorči polje na mreži točk, oddaljenih `h` milimetrov, pri čemer ohrani samo točke blizu površine (redka mreža 8 × 8 × 8 opek), in zgradi površino z **dvojnim konturiranjem**: eno oglišče na celico površine, postavljeno tam, kjer se ravnine površine srečajo, tako da je ostri rob ohranjen do natančnosti enega vokslja. Površina je zaprta, vsak rob pa si delita natanko dva trikotnika; poročilo to pove. Značilka, tanjša od približno treh vokslov, se lahko stisne, in tedaj poročilo pove, da telo ni zaprto telo, namesto da bi to skrilo.

Velikost vokslja je natančnost: prostornina krogle, široke 25 vokslov, je znotraj nekaj stotink odstotka; stena je toliko natančna, kolikor so njeni vokslji. Redkejša mreža gre hitreje.

## Vedno isti bajti

Polje nima ure in nima naključnih števil. Sinus in kosinus giroida ter vsak eksponent, logaritem in potenca v knjižnici sta izračunana iz navadne aritmetike, da Node, Chrome, Firefox in Safari dajo iste bite; mreža se prehaja v stalnem vrstnem redu, zato isti skript z istimi vhodi da bajt-natančno enake mreže in podatkovne liste, na katerem koli računalniku in pri katerem koli številu niti delavcev. To je preizkušeno, tudi brskalnik proti Node.

## Kam naprej

[Napišite generator](topic:write-a-generator) zgradi del s polji; [Inženirska knjižnica](topic:engineering-library) ga dimenzionira.
