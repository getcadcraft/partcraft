---
title: Šta je novo u 0.8 i 0.8.1
summary: PartCraft 0.8 donosi analizu uživo dok uređujete, provjeru Šta prvo popušta, studije popuštanja i kontakta s datotekama paketa za vanjski rješavač, studije kretanja za sklopove, radni prostor Površine za slobodne površine, dijelove dimenzionisane prema fizici u radnom prostoru Inženjer, skicu iz fotografije, izvoze za štampanje, rasporedene listove u G-kod i crteže koji kotiraju svoje rupe. 0.8.1 ispravlja zamrzavanje kursora u režimu punog ekrana.
keywords: šta je novo, what's new, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, analiza uživo, ažuriranje dok uređujete, šta prvo popušta, faktor opterećenja, nelinearno, popuštanje, plastična deformacija, kontakt, calculix, studija kretanja, zazor, površine, nurbs, glađenje, trup, zebra, inženjer, generator, generisani dio, skica iz fotografije, razmjera za štampanje, podjela za štampanje, skupljanje, rasporedeni listovi, g-kod, crtež, kotiranje rupa, asistent, mcp, jezici, redovi alatne trake
from: 62e4dce2
---

Ovo je šta se promijenilo u PartCraft 0.8 i 0.8.1 u odnosu na 0.7. Simulacija odgovara dok uređujete i govori vam šta prvo popušta, sklopovi dobijaju studije kretanja, a novi radni prostori prave slobodne površine i dijelove dimenzionisane prema fizici. 0.8.1 je mala ispravka.

## Novo

### Simulacija

- **Ažuriraj dok uređujem.** Označi {{ui:Ažuriraj dok uređujem}} u bloku Riješi, pa odgovori prate vaše izmjene. Promijenite kotu, opterećenje ili materijal, i brzi odgovor, dobijen elementima četiri puta većim, odmah se pojavi; kada stanete na oko sekundu, pročišćeni odgovor studije zamjenjuje ga. Rezultati kažu koji od ta dva gledate. Na čeličnoj konzoli brzi odgovor je bio unutar 1 % za progib i oko 4 % za naprezanje u odnosu na pročišćeni. Vidi [Provjeri naprezanje i progib](topic:simulation#update-while-you-edit-live).
- **Šta prvo popušta?** Za statičku ili izvijajuću studiju, {{ui:Šta prvo popušta?}} u bloku **Lomi ga** skalira opterećenja dok dio ne popusti. Navodi, od najgoreg, faktor opterećenja do prvog tečenja (crvenom oznakom gdje naprezanje dostiže vrhunac) i faktor opterećenja do izvijanja. Faktor manji od 1 znači da dio već popušta pod zadanim opterećenjem, a Problemi prikazuju grešku. Faktori dolaze iz linearne studije, pa su onoliko dobri koliko i ona. Vidi [Provjeri naprezanje i progib](topic:simulation#find-out-what-breaks-first-break-it).
- **Tečenje i kontakt.** Dva nova tipa studija: nelinearna, u kojoj materijal prati svoju pravu liniju do napona tečenja, a zatim blaži nagib, uz iscrtanu plastičnu deformaciju; i kontaktna, u kojoj odvojeni dijelovi pritiskaju jedan na drugi (bez trenja) ili ostaju zalijepljeni (vezani). Korak opterećenja koji se ne može smiriti, ili dijelovi koji previše utonu jedan u drugi, prikazuju se u panelu Problemi. Trenje, veliko klizanje, velike rotacije, veliki progibi i zamor nisu riješeni. Vidi [Provjeri naprezanje i progib](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Paketi za CalculiX.** {{ui:Izvoz}} › {{ui:CalculiX paket (.inp)}} spašava studiju za CalculiX, zaseban program koji sami instalirate i pokrećete; {{ui:Izvoz}} › {{ui:CalculiX rezultati (.frd)}} učitava njegovu datoteku s rezultatima nazad na istu mrežu. PartCraft nikada ne pokreće taj program i upozorava ako je dio promijenjen otkako je paket sačuvan.

### Sklopovi

- **Studije kretanja.** {{ui:Sklop}} › {{ui:Kretanje}} pomjera vrijednost jednog zgloba tokom vremena koje zadate (stalna brzina, ublažena, sinusna ili naprijed pa nazad), postavlja sklop u svakom koraku sa zglobovima i zatvorenim petljama, i izvještava koji se dijelovi sudaraju i koliko se približavaju. {{ui:Dodaj tačku}} iscrtava položaj tačke, brzinu i ubrzanje, vrijednost zgloba i zazor u odnosu na vrijeme; {{ui:Spasi CSV}} i {{ui:Spasi grafikon}} ih izvoze. Nakon {{ui:Pokreni}}, Korak kroz traku pokretanja pomjera sklop na bilo koji korak. Postavke studije se čuvaju u datoteci sklopa. Brzina i ubrzanje dolaze iz zabilježenih položaja, pa ako oštar vrh izgleda nizak, koristite više koraka. Vidi [Provjeri sklop na sudare i kretanje](topic:check-assembly#a-motion-study).

### Površine i dijelovi iz fizike

- **Radni prostor Površine.** Izaberite {{ui:Površine}} u polju {{ui:Radni prostor}} za NURBS krive i površine pored dijela: {{ui:Kriva}}, {{ui:Prelaz}}, {{ui:Provlačenje}}, {{ui:Poklapanje}} i {{ui:Zebra}}, uz kontinuitet (G0, G1 ili G2) mjeren na tačnim površinama, a ivica lošija od tražene navodi se u Problemima s popravkom Poklapanje. {{ui:Glađenje}} mjeri linije trupa za infleksije i skokove krivine i ponovo gradi nepravilne u okviru vaše tolerancije. Površine se čuvaju u datoteci dijela i ne mijenjaju elemente dijela. Vidi [Slobodne površine (NURBS)](topic:nurbs-surfaces).
- **Radni prostor Inženjer.** Izaberite {{ui:Inženjer}} u biraču radnih prostora, odaberite generator i kliknite {{ui:Novo}}: skripta dimenzioniše dio prema onome što mora da radi (zagrijavanje za pomjeranje, protoci, pritisak, materijal, postupak štampanja) uz standardne udžbeničke formule i gradi ga, zatim vraća brojeve koje je koristila s njihovim izvorima, provjere za proizvodnju i datoteke za alate za analizu. Isti ulazni podaci daju isti dio na bilo kojem računaru. Generator se čuva u dijelu, a otvaranje dijela nikada ne pokreće skriptu. Vidi [Dijelovi iz fizike: generatori](topic:engineer-generators) i [Napiši generator](topic:write-a-generator).

### Skiciranje, crteži i izrada

- **Skica iz fotografije.** {{ui:Elementi}} › {{ui:Više}} › {{ui:Skica iz fotografije…}} prati sliku ravnog dijela na običnoj podlozi (obris i rupe) ili crtež olovkom u linije, lukove i krugove. Zadate jednu dužinu, provjerite pregled i napravite skicu. Vidi [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Razmjera i podjela za štampanje.** {{ui:Izvoz}} › {{ui:Razmjera za štampanje (STL ili 3MF)…}} skalira po osi bez mijenjanja dijela, na primjer za dozvolu za skupljanje. {{ui:Izvoz}} › {{ui:Podjela za štampanje (zip s dijelovima)…}} reže dio prevelik za vašu podlogu na numerisane dijelove spojene klinovima, perima, lastinim repovima, rupama za moždanike ili udubljenjima za magnete. Vidi [Štampanje 3D](topic:print-3d).
- **Rasporedeni listovi u G-kod.** {{ui:Izvoz}} › {{ui:Rasporedeni listovi u G-kod}} čita rasporedeni DXF i pravi jedan program po listu kroz postprocesor koji izaberete: prvo rupe i izrezi, zatim obrisi. Ne planira ulazne linije, redoslijed rezanja niti zajedničke ivice. Vidi [Rasporedi ravne dijelove na listovima](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Crteži koji više rade sami.** {{ui:List}} › {{ui:Automatski}} bira najmanji list formata A koji stane poglede u najveću standardnu razmjeru do 1:1. {{ui:Kotiraj rupe}} stavlja oznaku centra na svaku rupu, jednu oznaku po veličini i položaje od donjeg lijevog ugla pogleda. Vidi [Napravi crtež](topic:drawing-pdf).

### U svim aplikacijama

- **Jezici.** Aplikacije dolaze na 54 jezika. Oni osim engleskog su mašinski nacrti dok ih izvorni govornik ne pročita.
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} bira Prelom (kao ranije), 2 reda ili 1 red; traka koja ne stane skroluje se bočno. Traka Elementi u PartCraftu prikazuje najkorišćeniji alat velikim, a varijante skriva iza dugmeta s padajućim izborom.
- **Povežite svoj AI.** Studio je središte za povezivanje vlastitog asistenta sa svih osam aplikacija, uz dozvolu samo za čitanje, prijedlog ili izmjenu po aplikaciji. Povezani asistent može dimenzionisati dio iz rečenice, npr. nosač za opterećenje, pokazati svoj postupak i svaku provjeru, i napraviti ga; izvještava šta nije provjerio (koncentracija naprezanja, zamor, puzanje u plastici). Vidi [Koristi PartCraft s AI asistentom](topic:use-with-ai-assistants).

## Ispravljeno u 0.8.1

- **Zamrzavanje kursora u punom ekranu.** Odabir pri prelasku mišem sada je usporen. Uzrok je naša najbolja procjena i nije potvrđen s osobom koja ju je prijavila.
- **Jezik u toku rada.** Studio i spakovana izdanja mogu mijenjati jezik dok rade; ranije su bili samo na engleskom. Ovo još nije testirano na svim platformama: javite nam ako se jezik ne mijenja.

## Još nije u ovoj verziji

- Povezivanje AI-ja nije završeno: povezivanje jednim klikom unutar Studija, hostovani konektor za AI u pregledniku, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani. Studio nema vlastiti AI.
- Studio nije potpisan kodom: Windows može upozoriti, a macOS traži desni klik pa Otvori. Vidi [Rješavanje problema](topic:troubleshooting).
- Lanci tolerancija su i dalje jednosmjerni: vidi [Lanci tolerancija](topic:tolerance-stackup).
- Ostalo je navedeno u [Šta još nije izgrađeno](topic:not-built-yet).

Ranije promjene su u [Šta je novo u 0.7](topic:whats-new-0-7).
