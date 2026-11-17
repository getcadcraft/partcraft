---
title: Konfiguracije in tabele zasnov
summary: Hranite več velikosti in različic enega dela kot poimenovane konfiguracije, shranjene v datoteki dela, z vklopljenimi ali izklopljenimi značilkami v vsaki; med njimi preklapljate z enim klikom, jih uvažate ali izvažate kot tabelo zasnov CSV ali jih vse zgradite iz ukazne vrstice.
keywords: tabela zasnov, konfiguracije, konfiguracija, velikosti, družina delov, csv, preglednica, različice, tabelarno vodeno, zaduši, dušeno, izklop značilke, možnosti, z ali brez, konfigurator
from: 17249afb
---

**Konfiguracija** je ena velikost dela: poimenovan nabor vrednosti za njegove parametre. Del hrani svoje konfiguracije v lastni datoteki, zato potujejo z njim. **Tabela zasnov** je isto kot datoteka CSV, ena vrstica na konfiguracijo.

Konfiguracije nastavljajo **parametre**, zato jih najprej dodajte (glejte [Vodenje dela s parametri](topic:parameters)). Konfiguracija shrani parametre, ki so navadna števila; parametri, izračunani iz drugih (kot `area = w * d`), sledijo sami.

## Shranite konfiguracijo

1. Na zavihku {{ui:Parametri}} nastavite parametre za eno velikost dela.
2. Pod **Konfiguracije** vpišite ime (na primer `Velika`) in pritisnite {{ui:Shrani trenutne vrednosti}} ali {{key:Enter}}.

Nova konfiguracija je označena kot **aktivna**. Če kasneje spremenite parameter, piše **aktivna, spremenjena od takrat**, da veste, da se del ne ujema več z njo.

## Preklapljanje, posodabljanje, preimenovanje, brisanje

- {{ui:Uporabi}} nastavi parametre na vrednosti te konfiguracije in obnovi del.
- {{ui:Posodobi}} shrani trenutne vrednosti v to konfiguracijo.
- Za preimenovanje vpišite novo ime v njeno polje in pritisnite {{key:Enter}}.
- {{ui:Izbriši}} odstrani konfiguracijo. Parametri ohranijo svoje vrednosti.

Vsako od tega je en korak: {{key:Mod+Z}} vrne nazaj. Če preimenujete parameter, vsaka konfiguracija sledi novemu imenu; če izbrišete konfiguracijo, izpade iz njih.

## Vklopite in izklopite značilke v konfiguraciji

Konfiguracija hrani tudi, katere značilke so izklopljene, zato lahko en del obstaja v različicah **z** in **brez** nečesa: montažne luknje, posnetje, izboklina.

1. Izklopite značilko: kliknite jo v zgodovini, nato {{ui:Zaduši}} v {{ui:Lastnosti}}.
2. Konfiguracijo shranite kot običajno, na primer `Brez lukenj`. Njena vrstica našteje, kaj izklaplja.
3. Značilko znova vklopite ({{ui:Ukini dušenje}}) in shranite drugo konfiguracijo, na primer `Z luknjami`.

Ko katera koli konfiguracija izklopi značilko, uporaba konfiguracije izklopi njene značilke in **vklopi vse druge značilke**, skupaj z njihovimi vrednostmi parametrov, v enem koraku. Konfiguracija, shranjena, preden so bile značilke kjerkoli izklopljene, šteje kot „vse vklopljeno“. {{ui:Posodobi}} shrani značilke takšne, kot so zdaj, z vrednostmi.

Del, katerega konfiguracije izklapljajo značilke, se shrani kot novejša različica datoteke: starejši PartCraft pove, da je datoteka iz novejše različice, namesto da bi jo odprl brez teh značilk.

:::note
Tabela zasnov CSV nosi samo vrednosti parametrov. Uvoz tabele čez konfiguracijo spremeni njene vrednosti in ohrani značilke, ki jih izklaplja; ukaz `--table` v ukazni vrstici zgradi samo vrednosti.
:::

Datoteka dela se shrani s konfiguracijami in s tisto, ki je bila aktivna. Del se odpre z vrednostmi, s katerimi je bil shranjen.

## Uvozite ali izvozite tabelo zasnov

Tabela zasnov je datoteka CSV s stolpcem za vsak parameter in vrstico za vsako konfiguracijo:

```
name,width,thick,bolt
majhna,100,6,6.6
srednja,140,8,8.5
velika,200,12,13
```

Prvi stolpec se lahko imenuje `name`, `config` ali `configuration`; vsak drug stolpec mora biti ime parametra dela. Celice so števila, po želji z enotami (`8in`). Prazna celica pusti ta parameter izven vrstice.

- {{ui:Uvozi CSV}} doda vsako vrstico kot konfiguracijo. Vrstica z imenom obstoječe konfiguracije jo nadomesti. Uvoz je en korak.
- {{ui:Izvozi CSV}} zapiše konfiguracije. Če jih še ni, zapiše eno vrstico trenutnih vrednosti kot izhodišče za preglednico.

Ime konfiguracije, ki bi ga preglednica prebrala kot formulo (začne se z `=`, `+`, `-` ali `@`), se zapiše z vodilnim `'`.

## Vse velikosti hkrati

{{ui:Paket različic…}} pod **Konfiguracije** zgradi vse konfiguracije ali izbrane nekatere kot STEP, IFC, DWG in predogled v enem zip-u, s tabelo njihovih parametrov: glejte [Naredite paket različic iz konfiguracij](topic:variant-pack).

Orodje ukazne vrstice zgradi eno datoteko na vrstico tabele zasnov CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Izvozite najprej konfiguracije kot CSV, nato to datoteko podajte z `--table`. Glejte [Skripti in ukazna vrstica](topic:scripts-and-cli). Del, shranjen kot skript, hrani svoje konfiguracije v vrstici `configs json …`.
