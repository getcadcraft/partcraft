---
title: Šta je novo u 0.8 i 0.8.1
summary: PartCraft 0.8 donosi analizu uživo dok menjate, proveru „Šta se prvo lomi?“, studije popuštanja i kontakta sa fajlovima za spoljni rešavač, studije kretanja za sklopove, radni prostor Površi za slobodne površi, delove dimenzionisane prema fizici u radnom prostoru Inženjer, skicu iz fotografije, izvoze za štampanje, ugnježdene listove u G-kod i crteže koji kotiraju svoje rupe. 0.8.1 ispravlja zamrzavanje kursora u režimu celog ekrana.
keywords: šta je novo, nove funkcije, napomene o izdanju, dnevnik promena, promene, 0.8, 0.8.1, verzija, nove funkcije, analiza uživo, ažuriranje dok menjate, slomi ga, šta se prvo lomi, faktor opterećenja, nelinearno, popuštanje, plastična deformacija, kontakt, calculix, studija kretanja, zazor, površi, nurbs, poravnaj, trup, zebra, inženjer, generator, generisano telo, skica iz fotografije, razmera za štampanje, podela za štampanje, skupljanje, ugnježdeni listovi, g-kod, crtež, kotiranje rupa, asistent, mcp, jezici, redovi alatki
from: 62e4dce2
---

Ovo je šta se promenilo u PartCraft 0.8 i 0.8.1, u poređenju sa 0.7. Simulacija odgovara dok menjate i kaže šta se prvo lomi, sklopovi dobijaju studije kretanja, a novi radni prostori prave slobodne površi i delove dimenzionisane prema fizici. 0.8.1 je mala ispravka.

## Novo

### Simulacija

- **Ažuriraj dok menjam.** Označi {{ui:Ažuriraj dok menjam}} u bloku Rešavanje i odgovori prate vaše izmene. Promenite kotu, opterećenje ili materijal i brz odgovor, dobijen elementima četiri puta većim, pojavljuje se odmah; kada stanete na oko sekund, sopstveni precizniji odgovor studije zamenjuje ga. Rezultati kažu koji od ta dva gledate. Na čeličnoj konzoli brz odgovor je bio unutar 1 % za progib i oko 4 % za napon u odnosu na precizniji. Videti [Proveri napon i progib](topic:simulation#update-while-you-edit-live).
- **Šta se prvo lomi.** Za statičku ili izvijajuću studiju, {{ui:Šta se prvo lomi?}} u bloku **Slomi ga** skalira opterećenja dok deo ne popusti. Navodi, od najgoreg, faktor opterećenja do prvog tečenja (sa crvenom oznakom tamo gde napon dostiže vrhunac) i faktor opterećenja do izvijanja. Faktor manji od 1 znači da deo već popušta pod zadatim opterećenjem, a panel Problemi prikazuje grešku. Faktori dolaze iz linearne studije, pa su onoliko dobri koliko i ona. Videti [Proveri napon i progib](topic:simulation#find-out-what-breaks-first-break-it).
- **Popuštanje i kontakt.** Dve nove vrste studija: nelinearna, u kojoj materijal prati svoju pravu liniju do napona tečenja, a zatim blaži nagib, sa iscrtanom plastičnom deformacijom; i kontaktna, u kojoj odvojeni delovi pritiskaju jedan drugi (bez trenja) ili ostaju zalepljeni (vezani). Korak opterećenja koji se ne može smiriti ili delovi koji previše utonu jedan u drugi prikazuju se u panelu Problemi. Trenje, veliko klizanje, velike rotacije, veliki progibi i zamor nisu rešeni. Videti [Proveri napon i progib](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Fajlovi za CalculiX.** {{ui:Izvezi}} › {{ui:CalculiX ulazni fajl (.inp)}} čuva studiju za CalculiX, zaseban program koji sami instalirate i pokrećete; {{ui:Izvezi}} › {{ui:CalculiX rezultati (.frd)}} učitava njegov fajl rezultata nazad na istu mrežu. PartCraft nikada ne pokreće taj program i kaže to ako se deo promenio posle čuvanja ulaznog fajla.

### Sklopovi

- **Studije kretanja.** {{ui:Sklop}} › {{ui:Kretanje}} pokreće vrednost jednog spoja tokom vremena koje zadate (stalna brzina, ublažena, sinusna ili napred pa nazad), postavlja sklop u svaki korak sa njegovim spojevima i zatvorenim petljama i izveštava šta se sudara i koliko se delovi približavaju. {{ui:Dodaj tačku}} iscrtava položaj tačke, brzinu i ubrzanje, vrednost spoja i zazor u odnosu na vreme; {{ui:Sačuvaj CSV}} i {{ui:Sačuvaj grafikon}} ih izvoze. Posle {{ui:Pokreni}}, traka Korak kroz pokretanje pomera sklop na bilo koji korak. Podešavanja studije se čuvaju u fajlu sklopa. Brzina i ubrzanje se računaju iz zabeleženih položaja, pa koristite više koraka ako oštar vrh izgleda niže. Videti [Proveri sklop za sudare i kretanje](topic:check-assembly#a-motion-study).

### Površi i delovi iz fizike

- **Radni prostor Površi.** Izaberi {{ui:Površi}} u polju {{ui:Radni prostor}} za NURBS krive i površi uz deo: {{ui:Kriva}}, {{ui:Prelaz}}, {{ui:Provlačenje}}, {{ui:Poklapanje}} i {{ui:Zebra}}, sa kontinuitetom (G0, G1 ili G2) izmerenim na tačnim površima i ivicom koja je lošija nego što ste tražili, navedenom u panelu Problemi sa popravkom Poklapanja. {{ui:Poravnaj}} meri linije trupa za pregibe i skokove zakrivljenosti i ponovo gradi nepravilne u okviru vaše tolerancije. Površi se čuvaju u fajlu dela i ne menjaju osobine dela. Videti [Slobodne površi (NURBS)](topic:nurbs-surfaces).
- **Radni prostor Inženjer.** Izaberi {{ui:Inženjer}} u prekidaču radnih prostora, izaberi generator i kliknite {{ui:Nova}}: skripta dimenzioniše deo prema onome što mora da radi (zagrevanje za pomeranje, protoci, pritisak, materijal, proces štampe) uz udžbeničke formule i gradi ga, zatim vraća brojeve koje je koristila sa njihovim izvorima, svoje provere proizvodnje i fajlove za alate za analizu. Isti ulazi daju isti deo na bilo kom računaru. Generator se čuva u delu, a otvaranje dela nikada ne pokreće skriptu. Videti [Delovi iz fizike: generatori](topic:engineer-generators) i [Napiši generator](topic:write-a-generator).

### Skice, crteži i izrada

- **Skica iz fotografije.** {{ui:Osobine}} › {{ui:Više}} › {{ui:Skica iz fotografije…}} prati sliku ravnog dela na običnoj podlozi (obris i rupe) ili crtež olovkom u linije, lukove i krugove. Unosite jednu dužinu, proverite pregled i napravite skicu. Videti [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Razmera i podela za štampanje.** {{ui:Izvezi}} › {{ui:Razmera za štampanje (STL ili 3MF)…}} skalira po osama bez menjanja dela, na primer za dozvolu za skupljanje. {{ui:Izvezi}} › {{ui:Podeli za štampanje (zip sa delovima)…}} seče deo prevelik za vašu podlogu na numerisane delove spojene klinovima, ključevima, lastinim repovima, rupama za klinove ili džepovima za magnete. Videti [3D štampa](topic:print-3d).
- **Ugnježdeni listovi u G-kod.** {{ui:Izvezi}} › {{ui:Ugnježdeni listovi u G-kod}} čita ugnježdeni DXF i pravi jedan program po listu kroz postprocesor koji izaberete: prvo rupe i isečke, zatim konture. Ne planira ulazne linije, redosled sečenja ni zajedničke ivice. Videti [Raspoređivanje ravnih delova na listovima](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Crteži koji više rade sami.** {{ui:List}} › {{ui:Automatski}} bira najmanji list formata A koji drži poglede u najvećoj standardnoj razmeri do 1:1. {{ui:Kotiraj rupe}} stavlja centralnu oznaku na svaku rupu, jednu oznaku po veličini i položaje od donjeg levog ugla pogleda. Videti [Pravljenje crteža](topic:drawing-pdf).

### U svim aplikacijama

- **Jezici.** Aplikacije dolaze na 54 jezika. Oni osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Redovi alatki.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatki}} bira Prelom (kao ranije), 2 reda ili 1 red; traka koja ne staje se pomera u stranu. Traka Osobine u PartCraft-u prikazuje najkorišćeniji alat veliko, a varijante skriva iza razdeljenog dugmeta.
- **Povežite svoj AI.** Studio je središte za povezivanje sopstvenog asistenta sa svih osam aplikacija, sa dozvolom samo za čitanje, za predloge ili za izmene po aplikaciji. Povezani asistent može da dimenzioniše deo iz rečenice, na primer nosač za opterećenje, prikaže svoj rad i sve provere, i da ga napravi; izveštava šta nije proverio (koncentracija napona, zamor, puzanje u plastici). Videti [Koristi PartCraft sa AI asistentom](topic:use-with-ai-assistants).

## Ispravljeno u 0.8.1

- **Zamrzavanje kursora u celom ekranu.** Hvatanje pri prelasku mišem sada je ograničeno po učestalosti. Uzrok je naša najbolja procena i nije potvrđen sa osobom koja je prijavila problem.
- **Jezik u vreme rada.** Studio i spakovana izdanja mogu da promene jezik dok rade; ranije su bili samo na engleskom. Ovo još nije testirano na svakoj platformi: javite nam ako se jezik ne menja.

## Još nije u ovoj verziji

- Povezivanje AI-ja nije završeno: povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledaču, sopstveni API ključ unutar Studija i objavljeni MCP paket nisu obećani. Studio nema sopstveni AI.
- Studio nije potpisan kodom: Windows može upozoriti, a macOS traži desni klik, pa Otvori. Videti [Rešavanje problema](topic:troubleshooting).
- Slaganje tolerancija je još jednosmerno: videti [Slaganje tolerancija](topic:tolerance-stackup).
- Ostalo je navedeno u [Šta još nije izgrađeno](topic:not-built-yet).

Ranije promene su u [Šta je novo u 0.7](topic:whats-new-0-7).
