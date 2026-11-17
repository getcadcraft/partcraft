---
title: Odprite STL, OBJ ali 3MF kot telo
summary: Spremenite mrežo iz skenerja, spletnega mesta za 3D tiskanje ali drugega programa v telo, ki ga lahko režete, dodajate in na katerem skicirate; kaj PartCraft popravi med tem in česa ne more.
keywords: stl, obj, 3mf, mreža, mreža v telo, pretvori mrežo, skeniranje, vodotesno, popravilo, luknje, vrzeli, enote, smer navzgor, uvoženo telo, ravne ploskve
from: 7b948471
---

PartCraft odpira mreže STL, OBJ in 3MF kot **telesa**. Telo deluje kot vsako drugo telo: režete ga, dodajate mu, vrtate, vzorčite, uporabite ga v sestavu ali za obdelavo in skicirate na njegovih ravnih ploskvah. Nima lastne zgodovine: mreža so samo trikotniki, zato njenih velikosti ni mogoče spremeniti, mogoče jo je samo dodati ali odrezati.

## Odprite mrežo

1. Izberite {{ui:Odpri}} ali pritisnite {{key:Mod+O}} in izberite datoteko `.stl`, `.obj` ali `.3mf`. Ali jo spustite v 3D pogled.
2. PartCraft jo prebere, popravi, kar varno lahko, in pokaže, kaj je našel: koliko trikotnikov in točk, vsako popravilo in ali se mreža zdaj **zapre**.
3. Preverite **Enote v datoteki** in **Smer navzgor v datoteki**. STL in OBJ ne navajata svojih enot, zato so milimetri domneva; datoteka 3MF pove svoje. Vrstica **Velikost tukaj** pokaže velikost telesa z vašo izbiro, zato je del, ki pride 25.4-krat premajhen, lahko opaziti (bil je v palcih).
4. Če je del na zaslonu prazen, izberite {{ui:Odpri kot telo}}. Če ima že značilke, izberite **Uporabi za** (dodaj delu, odreži od njega ali obdrži samo presek), nato {{ui:Dodaj temu delu}}, ali {{ui:Nov del}}, da začnete znova z mrežo.

V zgodovini se pojavi značilka **Imported1**. Vrstica stanja pove npr.: „bracket.stl je telo: 15200.512 mm³, 14 ravnih ploskev za skiciranje.“

## Kaj PartCraft popravi

| Popravilo | Kaj pomeni |
|---|---|
| Podvojeni vogali združeni | STL ponovi vsak vogal za vsak svoj trikotnik; združijo se v eno točko |
| Trikotniki brez površine odstranjeni | Zrezki, katerih vogali ležijo na eni črti |
| Podvojeni trikotniki odstranjeni | Trikotnik, zapisan dvakrat, ostane enkrat; dva, obrnjena v nasprotni smeri (notranja stena), sta oba odstranjena |
| Majhne vrzeli zaprte | Robovi, ki se skoraj stikajo (znotraj tisočinke velikosti dela), so spojeni |
| Luknje zapolnjene | Odprtina, katere rob leži ravno, je zapolnjena ne glede na velikost; zvita samo, kadar je majhna |
| Trikotniki obrnjeni navzven | Trikotniki, ki gledajo narobe, so obrnjeni, da se ujemajo s sosedi, in celotna površina je obrnjena navzven |

## Kadar se mreža ne zapre

Telo potrebuje površino brez odprtin. Kadar PartCraft ne more zapreti ene, pogovorno okno pove, koliko odprtin in odprtih robov je ostalo, telesa pa ni, ki bi ga dodal. Zaprite odprtine v programu, ki je naredil mrežo, ali jo znova izvozite kot zaprto (vodotesno) mrežo in jo odprite znova.

PartCraft pusti odprtino pri miru, kadar bi jo zapolnitev lahko napačno uganila: velika zvita luknja ali dve odprtini v isti ravnini (manjkajoča obročasta ploskev, kjer bi zapolnitev vsakega roba prekrila luknjo v sredini). Rob, ki ga deli več kot dva trikotnika, je prav tako prijavljen: taka površina nima ene jasne notranjosti.

## Skicirajte na ravnih ploskvah

Ravna območja iz mnogih trikotnikov so združena v eno **ravno ploskev** vsako, da lahko nanje postavite skico: kliknite ploskev in izberite {{ui:Skica na tej ploskvi}}. Ploskev, ki jo kasneje režete ali ji dodate, ostane ploskev. Okrogla območja (luknja, zaobljenje) ostanejo trikotniki: niso ploskve, ki bi jih lahko izbrali, pogled pa njihov obris nariše iz kota med trikotniki.

## Spremenite pozneje

Izberite **Imported1**, da vidite datoteko, iz katere izvira, koliko trikotnikov ima in kaj je bilo popravljeno. **Enote v datoteki**, **Smer navzgor v datoteki** in **Uporabi za** se lahko spremenijo tam; vsaka sprememba je en korak razveljavitve.

## Kje je shranjeno

Popravljena mreža je shranjena **znotraj** datoteke `.partcraft.json`, zato datoteke mreže ne potrebujete znova. Datoteka dela z mrežnim telesom je različica 5: starejši PartCraft jo zavrne po njeni različici. Mreža s 200,000 trikotniki doda približno 1.2 MB.

## Omejitve

- Največ 3 milijone trikotnikov in 200 MB v eni datoteki.
- Telo, narejeno iz mreže, zgradi mrežno jedro. Z vklopljenim natančnim jedrom (samo za razvijalce) to pove in ga ne zgradi.
- Materiali OBJ, teksturne koordinate in prostoročne krivulje so izpuščeni; barve, materiali in podporni predmeti 3MF so izpuščeni (pogovorno okno pove, koliko predmetov je bilo preskočenih).
- Telo je tako fino kot mreža: grob STL da grobe okrogle ploskve. Izvrtine, ki jih vanj izvrtate, so tako okrogle kot vaše lastne značilke.
