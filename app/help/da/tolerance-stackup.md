---
title: Tolerancekæder
summary: Vælg en kæde af flader gennem delene i en samling og se, hvor meget spalten i kædens ende kan variere, værste tilfælde og RSS, med de mål, der betyder mest, rangeret først.
keywords: tolerancekæde, tolerancekæde, tolerance-analyse, tolerancekæde, målekæde, sløjfe, spalte, luft, værste tilfælde, rss, root sum square, statistisk tolerancesætning, bidragydere, følsomhed, gd&t, generel tolerance, iso 2768
from: cbdb3159
---

En **tolerancekæde** lægger målene langs en kæde gennem flere dele sammen for at se, hvor meget et resultat, typisk en spalte, kan variere, når hver del fremstilles et sted inden for sine tolerancer.

## Vælg kæden

1. Åbn en samling og vælg {{ui:Tolerancekæde}} i gruppen Assembly. Et kort åbner sig over visningen.
2. Vælg, hvad kæden måles **langs**: X, Y eller Z for samlingen, eller {{ui:Den første flades normal}}.
3. Tryk på {{ui:Vælg kæden}} og klik på de flader, kæden løber gennem, **i rækkefølge**: start på den ene side af spalten, gå gennem delene, og slut på spaltens anden side.
4. Tryk på {{ui:Færdig}} eller Enter. Backspace fjerner det sidste klik; Esc annullerer.

To klik på samme del giver den delens mål (dens afstand langs kæden). Et klik på en anden del laver en **grænseflade** mellem dem, der hvor delene mødes; den har ingen tolerance, medmindre du skriver en. Leddene lægges til eller trækkes fra efter, hvordan kæden løber, og de lukker sløjfen: den nominelle spalte er det, modellen viser.

Du kan også {{ui:Tilføj et led}} i hånden og skrive dets nominelle mål, dets tolerance og om det lægges til (+) eller trækkes fra (−).

## Giv hvert led sin tolerance

Hvert led har en **øvre** og en **nedre** afvigelse (fx +0.1 og −0.05). **Tolerance fra** udfylder dem fra delen:

- **Generel tolerance**: feltet Tolerance i delens tegningshoved (se [Tegning til PDF](topic:drawing-pdf)), når det angiver ±0.1, +0.2/-0.1 eller ISO 2768-f, -m, -c eller -v (ISO 2768-1 lineære tolerancer, efter ledets størrelse). Delens generelle tolerance bruges med det samme, når kæden vælges.
- **GD&T**: enhver rammekontrol på delens tegning. Zoner for position, profil og rundløb giver ± halvdelen af tolerancen. En retnings- eller formtolerance ligger normalt inden for måltolerancen allerede: tilføj den kun, hvor kæden møder den kontrollerede flade. Med Ⓜ eller Ⓛ tages zonen ved dens angivne størrelse; bonustolerancen tælles ikke med.
- **Skrevet**: alle tal, du skriver.

## Læs resultaterne

- **Spalte, nominel** og, når tolerancerne er ulige, **Spalte, middel** — +0.2/−0 og +0/−0.1 flytter midten af intervallet.
- **Værste tilfælde**: alle tolerancer på deres grænse på én gang. Spalten kan aldrig komme uden for dette.
- **RSS** (root sum square): hver tolerance tages som tre standardafvigelser i en normalfordeling og lægges sammen som kvadratroden af summen af deres kvadrater. De fleste samlinger ligger langt inden for værste tilfælde; dette er det sædvanlige skøn for dele, der fremstilles i serie.
- Angiv **Spalte mindst** og **Spalte højst** for at se, om værste tilfælde altid holder sig inden for, og hvor mange samlinger ud af en million RSS forventer uden for.
- Kolonnen **#** rangerer leddene efter deres **andel** af RSS: stram de første for at gøre den største forskel.

{{ui:Gem CSV}} skriver leddene, deres andele og resultaterne. Tolerancekæderne gemmes i samlingsfilen, og hver ændring er ét trin for {{key:Mod+Z}}.

:::note
En tolerancekæde går i én retning. Den følger ikke vinkler eller drejninger langs kæden, og den læser ikke størrelsestolerancer fra skitserne: giv dem som skrevne tolerancer eller gennem tegningshovedet.
:::
