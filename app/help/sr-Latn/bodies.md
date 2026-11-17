---
title: Spajanje, pomeranje i skaliranje tela; obrasci duž putanje
summary: Pravi odvojena tela, pa ih posle spoj, seci ili preseci, pomeraj, okreći, poravnaj ili kopiraj, skaliraj ravnomerno ili po X, Y i Z, i kopiraj elemente ili tela duž krive.
keywords: telo, tela, više tela, novo telo, spajanje, bulova operacija, spoj, sečenje, presek, oduzimanje, unija, zadrži alate, pomeri telo, kopiraj telo, rotiraj telo, poravnaj, translacija, skaliranje, neravnomerno skaliranje, istezanje, afino, obrazac po putanji, obrazac duž krive, niz duž putanje, obrazac vođen krivom
from: 6b1ea820
---

:::note
**Još nije napravljeno u ovoj verziji.** Rad sa više tela zahteva tačan geometrijski kernel, koga ova verzija PartCraft-a nema: svaki deo gradi mrežnim kernelom. [Šta još nije napravljeno](topic:not-built-yet) govori šta da radiš umesto toga. Ostatak ove stranice opisuje kako to radi sa tačnim kernelom.
:::

Deo može da sadrži više čvrstih tela. Svako odvojeno čvrsto telo je **telo**. Većina elemenata dodaje ili seče iz svakog tela koje dotakne; alati na ovoj stranici rade sa celim telima koja izabereš. Nalaze se u meniju {{ui:Više}} grupe Elementi: {{ui:Spajanje}}, {{ui:Pomeri telo}}, {{ui:Skaliraj telo}} i {{ui:Niz po putanji}}. Svi im trebaju tačan kernel (OpenCascade).

## Pravi odvojeno telo

Postavi **Operaciju** izvlačenja ili rotiranja na **Novo telo** u njegovom desnom panelu (provlačenja i prelazi takođe imaju). Novo telo ostaje odvojeno čak i tamo gde se preklapa sa drugima. **Presek** zadržava samo preklapanje novog oblika sa onim što je tu.

Telima se daju imena po elementu koji ih je započeo: „Extrude2“. Kopija dobija ime po originalu i elementu koji ju je kopirao: „Extrude2, kopija 1 od Move1“. Imena ostaju ista kad promeniš mere iznad, pa elementi koji koriste telo i dalje ga nalaze. Kad ima dva ili više tela, panel dela (klikni prazan prostor) ih navodi sa zapreminama.

## Preimenuj ili sakrij telo

Klikni prazan prostor u prikazu da vidiš panel dela. Njegova lista tela (prikazuje se kad deo ima dva ili više tela) ima polje za ime i dugme {{ui:Sakrij}} u svakom redu.

- **Preimenovanje:** upiši novo ime u polje i pritisni {{key:Enter}} ili klikni van. Svi paneli ga tada koriste: Spajanje, Pomeri telo, obrasci. Obriši polje da se vratiš na ime iz elementa koji je napravio telo.
- **Sakrivanje:** klikni {{ui:Sakrij}} u njegovom redu. Telo izlazi iz prikaza i klikovi prolaze kroz njega, pa možeš da biraš površi iza njega. {{ui:Prikaži}} ga vraća; {{ui:Prikaži sve}} vraća svako sakriveno telo.

Sakrivanje menja samo prikaz. Sakriveno telo se i dalje gradi, broji se u zapremini i merenjima, i čuva se u STL, 3MF i STEP izvozima. Imena i sakrivena tela čuvaju se u fajlu dela, a svaka promena je jedan korak za {{ui:Opozovi}}.

## Spoj tela

1. Shift+klik na površ **ciljnog** tela, pa na površ svakog **alatnog** tela.
2. Izaberi {{ui:Više}}, pa {{ui:Spajanje}}.
3. U desnom panelu izaberi **Operaciju**:

| Operacija | Rezultat |
|---|---|
| Spoji | Cilj i alati postaju jedno telo |
| Seci | Alati se oduzimaju od cilja |
| Presek | Zadržava se samo ono što cilj i svi alati dele |

**Ciljno telo** je ono koje zadržava svoje ime. Štikliraj ili odštikliraj **Alatna tela**, ili koristi **Izaberi u prikazu** i klikni njihove površi. **Zadrži alatna tela** ostavlja alate na mestu takođe (zgodno za kalup i njegovo jezgro). Ako je alatno telo već potrošeno ranijim Spajanjem, panel to kaže umesto da bira drugo telo.

## Pomeri ili kopiraj telo

1. Izaberi {{ui:Više}}, pa {{ui:Pomeri telo}}. Najnovije telo je štikliran; štikliraj ona koja želiš da pomeriš.
2. Izaberi tip **Pomeranja**:

| Pomeranje | Šta podešavaš |
|---|---|
| Translacija | **ΔX**, **ΔY**, **ΔZ** u milimetrima |
| Tačka do tačke | **Od** i **Do**: klikni blizu kraja ivice, tačke elementa ili mesta na površi |
| Rotacija oko ose | **Osa** (X, Y, Z, osa iz elementa ili **Izaberi**: prava ivica, krug ili cilindar) i **Ugao (°)** |
| Poravnaj površ sa površi ili ravni | **Površ za pomeranje** (ravna površ tela), **Na** (ravna površ ili ravan) |

Poravnavanje okreće telo tako da njegova površ leži na drugoj površi, površ na površ, pa ga klizi samo duž normale te površi. **Isti smer** okreće ga na drugu stranu. **Kopiraj** zadržava original i dodaje pomerenu kopiju kao novo telo.

## Skaliraj telo

1. Izaberi {{ui:Više}}, pa {{ui:Skaliraj telo}}, i štikliraj tela.
2. Unesi **Skalu**, ili odštikliraj **Ravnomerno** i unesi **Skala X**, **Skala Y** i **Skala Z** (duž osa sveta).
3. **Oko** je tačka koja ostaje na mestu: centar kutije tela, ili tačka koju izabereš.

Ravnomerno skaliranje je tačno. Neravnomerno skaliranje pretvara krugove u elipse: cilindar postaje eliptični cilindar, koji nijedna analitička površ ne može da zadrži, pa zakrivljene površi postaju B-spline površi koje ostaju unutar 0.0000004 mm od tačnog oblika; ravne površi i prave ivice ostaju tačne. Panel kaže šta se dogodilo. Faktori skaliranja moraju biti veći od nule (za ogledalo koristi {{ui:Simetrija}} umesto toga).

## Kopiraj duž putanje

1. Izaberi element koji kopiraš u istoriji, ili ne izaberi ništa da kopiraš najnovije telo.
2. Izaberi {{ui:Više}}, pa {{ui:Niz po putanji}}. Najnovija neiskorišćena skica uzima se kao putanja.
3. U desnom panelu podesi:

| Podešavanje | Šta radi |
|---|---|
| **Kopiraj** | Tela (svaka kopija je novo telo) ili Elementi (spojeni ili secni kao original) |
| **Putanja** | Štikliraj skice, ili **Izaberi ivice modela**; delovi moraju se spajati od kraja do kraja |
| **Broj** | Ukupan broj, uključujući original |
| **Razmak** | Jednak (raširen do kraja otvorene putanje, ili oko cele zatvorene) ili zadata razdaljina |
| **Orijentacija** | Prati putanju (svaka kopija se okreće s njom) ili Fiksirano (kopije ostaju paralelne) |
| **Obrni smer** | Idi drugim smerom duž putanje |

Kopije počinju tamo gde putanja najbliže prolazi originalu i razmaknute su po dužini duž krive.

Linearni i kružni obrasci takođe mogu da kopiraju tela: štikliraj **Kopiraj tela** u njihovom panelu i izaberi tela; svaka kopija je novo telo.

## Ograničenja

- Tela trebaju tačan kernel; mrežni kernel zadržava jedno čvrsto telo i to kaže.
- Neravnomerno skaliranje pravi zakrivljene površi u bliske B-spline aproksimacije (vidi gore), a ne tačne cilindre ili konuse; ofset površi se za sada ne mogu tako skalirati.
- Praćenje putanje na uvrnutoj 3D krivoj nosi kopiju bez uvrtanja; na ravnim putanjama okret je tačan.
- Spajanje radi samo sa čvrstim telima. Tela-površi se spajaju sa {{ui:Sašij}}.

Pogledaj i [Referentne ravni, ose i tačke](topic:reference-geometry) za tačke i ravni „između objekata“, i [Elementi obrazaca i simetrije](topic:patterns-mirror).
