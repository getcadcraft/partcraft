---
title: Spremenite mere brez odpiranja skice
summary: Upravljajte del s števili v desnem podoknu: kote skice, globine, števila in kote, kako načrtovati del, da ga pravilna števila upravljajo, in kje prevzamejo parametri in enačbe.
keywords: parametri, vodilne kote, namen zasnove, spremeni velikost, enačbe, globalne spremenljivke, tabela oblik, konfiguracije, spremeni velikost, spremeni koto
from: c2ae1a32
---

Vsaka mera v delu PartCraft je število, ki ga lahko spremenite pozneje: kote v njegovih skicah in nastavitve njegovih značilk. Za spremembo kot skice ni treba odpreti.

## Spreminjanje kote skice iz podokna

1. V zgodovini kliknite značilko, na primer „Extrude1“.
2. Pod lastnimi nastavitvami iztisnitve **Kote skice (Sketch1)** našteje vse kote njene skice: „Razdalja“, „Premer“, „Kot (°)“ in tako naprej.
3. V enem polju vnesite novo vrednost in pritisnite {{key:Enter}} ali {{key:Tab}}.

Skica se reši z novo vrednostjo in celoten del se obnovi. Če izberete samo skico, prikaže enak seznam kot **Vodilne kote**.

Polmer ali premer mora biti večji od nič, kot pa je med 0 in 180 stopinjami; če ni, to pove vrstica stanja.

:::tip
Kateri je kateri? Polja so navedena v vrstnem redu, v katerem so bile kote ustvarjene. Če niste prepričani, odprite skico (dvokliknite jo), dvokliknite koto na platnu in jo spremenite tam.
:::

## Vnesite glavno število takoj

V zgodovini izberite značilko (ali jo preprosto dodajte) in vnesite število: gre v glavno polje značilke, tisto, ki ga najpogosteje spreminjate (**Globina** iztisnitve, **Kot** zavrtitve, **Premer** izvrtine, **Število** vzorca, **Polmer** zaobljenja, debelina stene lupine). Pritisnite {{key:Enter}}, da ga nastavite, ali {{key:Esc}}, da ohranite starega. Ko dodate iztisnitev, to pove vrstica stanja: „Extrude1 dodan. Spremenite njene številke na desni ali vnesite število zdaj za njeno globino.“

## Spremenite število v zgodovini

Vrstica vsake značilke v zgodovini poleg imena prikaže njeno glavno število: „Extrude1 25 mm“, „Hole1 Ø6.6 thru“, „Fillet1 R2“, „LPattern1 4 × 20 mm“. Dvokliknite število (ali izberite vrstico in pritisnite {{key:F2}}) in tam se odpre polje. Vnesite novo vrednost in pritisnite {{key:Enter}}; {{key:Esc}} ohrani staro. Deluje natančno kot polje značilke na desni: enake omejitve, `=` za vnos enačbe, kot je `=width/2`, in en korak razveljavitve.

Pri iztisnitvi, izvrtini ali vzorcu dvoklik kjerkoli v vrstici odpre polje. Pri Zaobli, Posnemi, Lupina, Nagib ali Navoj dvoklik na ime še vedno izbere robove ali ploskve, zato dvokliknite samo število. Skice nimajo števila v vrstici: dvoklik odpre skico.

## Povlecite v pogledu

V zgodovini izberite iztisnitev (ali jo kliknite v pogledu, nato pa njeno vrstico), in oranžna puščica stoji na njeni končni ploskvi, z globino v polju ob njej. Povlecite puščico: del sledi vlečenju, ob spustu pa nastavi novo globino kot en korak ({{key:Mod+Z}} jo povrne). Med vlečenjem pritisnite {{key:Esc}}, da se vrnete na začetek. Globina se premika v korakih po desetini svoje velikosti: 1 mm pri iztisnitvi 25 mm, 0.1 mm pri iztisnitvi 3 mm.

Zavrtitev dobi ukrivljeno puščico na koncu obrata: povlecite jo okoli osi, da spremenite kot, v celih stopinjah od 1° do 360°.

Ali kliknite v polje ob puščici, vnesite vrednost (ali `=` in enačbo) in pritisnite {{key:Enter}}. Pri iztisnitvi, ki gre **Skozi vse** ali do ploskve, ali pri vrednosti, ki jo določa enačba, ni puščice: te spremenite na desni.

## Števila, ki upravljajo del

| Kje | Kaj lahko spremenite |
|---|---|
| Skica | Vsako koto: dolžine, razdalje, polmere, premere, kote |
| Iztisni in Izreži | Globino, končni pogoj, smer, dodajanje ali rezanje |
| Zavrti in Zavrteni izrez | Kot, os, dodajanje ali rezanje |
| Izvrtina | Premer, globino, skozi vse, premer in globino pogreznjene izvrtine |
| Zaobli, Posnemi, Lupina | Polmer, razdaljo, debelino stene in smer ter katere robove ali ploskve |
| Linearno in Krožno | Število, razmik ali kot, smer ali os |
| Del | Krivulje (kako fino so okrogle oblike razdeljene na ploskve) |
| Risba | Kje poteka prerez, velikost in merilo detajla, vrednosti GD&T |

## Načrtujte del tako, da ga upravljajo pravilna števila

Števila, ki jih vnesete, so tista, ki jih lahko spremenite. Nekaj navad poskrbi, da se pozneje spremembe obnašajo pravilno:

- **Kotirajte, kar je za nalogo pomembno.** Če mora izvrtina ostati 15 mm od roba, jo kotirajte od tega roba, ne od izhodišča.
- **Popolnoma določite skice.** Tedaj sprememba premakne samo tisto, kar naj se (glejte [Popolnoma določite skico](topic:relations-dimensions)).
- **Za namen uporabite relacije.** Enako pri dveh izvrtinah pomeni, da en premer določa oba. Simetrične oblike: postavite izhodišče na središčno črto ali uporabite razpolovišče.
- **Skicirajte na ploskvah, ki jih ustvarijo značilke.** Skica na končni ploskvi iztisnitve se premakne, ko se spremeni globina.
- **Vzorec namesto kopiranja.** Ena izvrtina, razporejena osemkrat, ima en premer za spremembo.

## Onkraj posameznih števil

- **Eno število upravlja več:** uporabite parametre in enačbe: [Upravljajte del s parametri](topic:parameters).
- **Več velikosti enega dela:** shranite vsako kot [konfiguracijo](topic:design-tables); shranjene so v datoteki dela.
- **Računanje v polju števila:** vnesite `=40/2` ali `=width / 2`. To ustvari enačbo; glejte [Enačbe v obe smeri](topic:equations-two-way).
- **Palčne enote:** del prikazuje milimetre. V polju števila z `=` ali v parametru se `2in` pretvori v 50.8.

Glejte [Kaj še ni izdelano](topic:not-built-yet).
