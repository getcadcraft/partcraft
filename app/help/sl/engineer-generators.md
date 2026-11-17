---
title: Deli iz fizike: generatorji
summary: Delovno okolje Engineer in značilka Generirano telo: izberite generator, nastavite njegove vhode (pretok, tlak, temperature, material, tiskalnik) in dobite del, dimenzioniran po učbeniških formulah, s podatkovnim listom, preverjanji izdelave in datotekami za analitična orodja. Enaki vhodi vedno dajo isti del.
keywords: engineer, generator, generirano telo, fizika, pravila, toplotni menjalnik, razdelilni kolektor, šoba, rešetka, žiroid, podatkovni list, vhodi, determinističen, isti vhodi isti del, preverjanja izdelave, 3D tiskanje, praškasta postelja
from: 5a387dc0
---

**Generator** je skripta, ki dimenzionira del iz vaših zahtev in ga zgradi. Generator toplotnega menjalnika vzame toploto, ki jo je treba prenesti, oba pretoka in njune temperature, tlak in material; izračuna, kako veliko mora biti jedro in kako debela njegova stena, ga zgradi in pove števila, ki jih je uporabil, ter od kod je vsako prišlo. Spremenite vhod in del sledi.

Rezultat je običajno telo v delu: je na seznamu značilk, natisne se, izvozi se. Generator sam je prav tako shranjen v delu, zato se datoteka odpre na katerem koli računalniku brez nameščenega generatorja, in **odpiranje dela nikoli ne zažene skripte**.

## Naredite telo

1. V preklopniku izberite delovno okolje {{ui:Engineer}}.
2. Izberite generator na seznamu (tiste, ki prihajajo s PartCraft-om, nato tiste, ki ste jih odprli iz datoteke) in kliknite {{ui:Novo}}.
3. Skripta teče. Ko konča, je telo v pogledu, podokno pa kaže njegove vhode, njegov **podatkovni list** in **preverjanja**.

Telo lahko dodate tudi iz Design: {{ui:Značilke}} › {{ui:Več}} › {{ui:Generirano telo}}.

## Spremenite ga

Spremenite kateri koli vhod in telo se znova naredi kmalu potem, ko nehate tipkati. Podokno pove, katero od treh stanj drži:

- **Posodobljeno**: telo ustreza skripti in njenim vhodom.
- **Vhodi so se spremenili**: telo v delu je iz prejšnjih vhodov; znova se naredi ali pritisnite {{ui:Zaženi}}.
- **Še ni zagnano** ali **Zadnji zagon ni uspel**: prikaže se napaka skripte z vrstico.

{{ui:Ustavi}} konča zagon, ki traja predolgo. Razveljavitev gre nazaj korak za korakom: zagon je en korak, vnos je en korak.

## Podatkovni list

Vsako število, ki ga je generator izračunal, je navedeno z **enoto** in **od kod prihaja** (učbeniška enačba, standard, podatkovni list). Nič ni skrita konstanta. List je del datoteke, zato je na naslednjem računalniku enak. [Izvoz podatkov](topic:data-out) pove, kako ga shraniti kot JSON ali PDF.

## Preverjanja

Generator lahko preveri svoj del glede na postopek tiskanja: stene in reže, tanjše od meje, ki jo postopek drži, ohlapne kose, votline, ki ujamejo prah ali smolo, luknje, preozke za čiščenje, in previse, ki potrebujejo podporo. Ugotovitve so v podoknu in na seznamu {{ui:Težave}} (gumb ⚠), in se shranijo z delom.

Številke za postopek so okrogle vrednosti, ki jih javni vodniki za načrtovanje navajajo za postopek na splošno (FDM, SLA, SLS, kovinska praškasta postelja). **Niso specifikacija vašega stroja**: pred zanašanjem na preverjanje jih zamenjajte s številkami vaše delavnice. Preverjanje deluje na mreži vokslov, zato je natančno do približno enega vokslja: stena je prijavljena samo, če je tanjša od meje za več kot en voksel.

## Kaj prihaja

| Generator | Kaj naredi |
|---|---|
| Žiroidni blok | Blok, napolnjen z žiroidno, Schwarzovo P ali diamantno ploskvijo: najpreprostejša rešetka |
| Žiroidni toplotni menjalnik | Jedro dvofluidnega menjalnika, dimenzionirano iz obremenitve po metodi učinkovitosti-NTU, njegova stena iz tlaka; lahko preveri padec tlaka s študijo pretoka na eni celici |
| Razdelilni kolektor | Glava in veje, vsaka cev dimenzionirana glede na pretok, ki ga nosi |
| Stopnjevana rešetkasta greda | Rešetka, katere stena se zadeba tam, kjer optimizacija topologije pove, da je potreben material |

Vsi so prve ocene, zgrajene na učbeniških formulah. [Inženirska knjižnica](topic:engineering-library) navaja formule in njihove meje. Pred zanašanjem na rezultat zaženite simulacijo, toplotno ali pretočno analizo nanj.

## Nadzor izvoza

Generatorji in podatkovni listi Engineer nosijo obvestilo o nadzoru izvoza in sankcijah. Preberite ga v [Engineer in nadzor izvoza](topic:engineer-export-notice); prav tako je na dnu vsakega podatkovnega lista.

## Še ni izdelano

- Glave, priključki in fitingi na jedru toplotnega menjalnika: je samo jedro.
- Temperaturne krivulje za trdnost materialov: materiali so pri sobni temperaturi.
- Izgube v T-kosih in deljenje pretoka med izhodi v razdelilnem kolektorju.
- Dodajanje generatorjev iz imenika dodatkov z enim klikom; odpiranje datoteke doda enega v ta brskalnik.
- Generatorji za druge programe.
