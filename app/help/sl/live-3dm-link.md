---
title: Model .3dm v živo
summary: Spremenite model v programu, ki ga je ustvaril, in si oglejte, kako telo v PartCraftu sledi, iz Rhino 8 ali definicije Grasshopper, z značilkami, obnovljenimi na novi obliki.
keywords: rhino, grasshopper, povezava v živo, živa povezava, 3dm, nurbs, parametrično, povezava, sinhronizacija, skripta, potisni, uvoženo telo
from: cf4dc9b2
---

Model oblikujte tam, kjer ga modelirate, obdelavo, preverjanje in dokumentiranje pa opravite tukaj. Vsaka sprememba v drugem programu nadomesti eno uvoženo telo v PartCraftu, značilke za njim pa se obnovijo na novi obliki.

:::note
Povezava potrebuje **CadCraft Studio** na istem računalniku. Zavihek brskalnika ne more vzpostaviti povezave. Nič ne gre prek interneta: skripta se pogovarja s Studiom na naslovu tega računalnika, z žetonom.
:::

:::warning
Ta povezava je bila preizkušena z zapisovalnikom datotek skripte in z nadomestkom drugega programa, še ne znotraj samega Rhina ali Grasshopperja. Če tam kaj ne uspe, nam povejte, kaj je pisalo v sporočilu.
:::

## Nastavitev

1. V Studiu odprite PartCraft. V {{ui:Nastavitve}} › {{ui:PartCraft}} › {{ui:Pomočniki}} označite **Dovoli pomočnikom z umetno inteligenco in skriptam uporabo PartCraft**, nato **Uredi**.
2. V Studiu izberite {{ui:Poveži pomočnika}}. Prikaže se naslov in žeton, ki ju boste prilepili spodaj.
3. Prenesite skripto: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Iz Rhina

1. Zaženite `cadcraft_link.py` v urejevalniku skript Rhina (Python 3 v Rhino 8).
2. Prvič prilepite naslov in žeton. Shranjena sta v `.cadcraft-link.json` v vaši domači mapi, nikoli v modelu. Studio ob vsakem zagonu ustvari nov žeton, zato skripta takrat znova vpraša.

Za ustavitev skripto znova zaženite.

## Iz Grasshopperja

Skripto najprej enkrat zaženite v Rhinu, da se naslov in žeton shranita.

1. Dodajte komponento Script (Python 3) in vanjo prilepite celotno `cadcraft_link.py`.
2. Nastavite te vhode: `G` (geometrija, z dostopom do seznamov), `N` (ime, neobvezno), `On` (logično stikalo) in `Target` (neobvezno: `model` ali `part`, če sta odprta oba programa).
3. Nastavite `On` na true.

Vsak izračun pošlje `G` in nadomesti tisto, kar je komponenta poslala nazadnje.

## Kako deluje tukaj

- **Eno telo.** Vse vidno v modelu postane ena uvožena značilka, kot pri [odpiranju datoteke .3dm](topic:open-3dm-files).
- **Mora se zapreti.** PartCraft zapolni majhne izvrtine in ravne odprtine, drugi program pa je obveščen, koliko jih je. Če se model še vedno ne zapre, PartCraft obdrži telo, ki ga je imel, in vrstica stanja to pove. Naslednja sprememba, ki se zapre, ga posodobi.
- **Dokončajte, kar delate.** V skici ali na risbi so posodobitve zavrnjene in poskušane znova; prispejo, ko se vrnete v model.
- **Razveljavitev.** Posodobitve, ki so med seboj oddaljene manj kot dve sekundi, delijo en korak razveljavitve.
- **Shranjevanje.** Datoteka dela ohrani povezavo. Po ponovnem odprtju znova zaženite skripto, in ista značilka se posodobi.

**Samo v eno smer.** Spremembe tukaj se ne vrnejo v drugi program.

## Če kaj ne uspe

- „Nobeno okno ModelCraft ali PartCraft tega ne dovoli“: naredite 1. korak nastavitve.
- „Studio je zavrnil žeton“: Studio se je znova zagnal. Kopirajte novi žeton in znova zaženite skripto. Za Grasshopper jo najprej zaženite v Rhinu.
- „Do CadCraft Studia ni mogoče priti“: Studio ne teče ali se je naslov spremenil.
