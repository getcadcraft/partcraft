---
title: Što je novo u verzijama 0.8 i 0.8.1
summary: PartCraft 0.8 donosi analizu uživo dok uređujete, provjeru Što popušta prvo, studije popuštanja i kontakta s ulaznim datotekama za vanjski rješavač, studije gibanja za sklopove, radni prostor Površine za slobodne površine, dijelove dimenzionirane prema fizici u radnom prostoru Inženjer, skicu iz fotografije, izvoze za ispis, složene ploče u G-kod i crteže koji kotiraju svoje provrte. 0.8.1 ispravlja zamrzavanje kursora u punom zaslonu.
keywords: što je novo, što je novo, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove značajke, analiza uživo, ažuriranje tijekom uređivanja, slomi ga, što popušta prvo, faktor opterećenja, nelinearno, popuštanje, plastična deformacija, kontakt, calculix, studija gibanja, zazor, površine, nurbs, izgladi, trup, zebra, inženjer, generator, generirano tijelo, skica iz fotografije, skaliraj za ispis, podijeli za ispis, skupljanje, složene ploče, g-code, crtež, kotiraj provrte, pomoćnik, mcp, jezici, redci alatne trake
from: 62e4dce2
---

Ovo su promjene u PartCraft 0.8 i 0.8.1 u odnosu na 0.7. Simulacija daje odgovore dok uređujete i govori vam što popušta prvo, sklopovi dobivaju studije gibanja, a novi radni prostori izrađuju slobodne površine i dijelove dimenzionirane prema fizici. 0.8.1 je manje izdanje s ispravcima.

## Novo

### Simulacija

- **Ažuriraj dok uređujem.** Označite {{ui:Ažuriraj dok uređujem}} u bloku Rješavanje i odgovori prate vaše promjene. Promijenite dimenziju, opterećenje ili materijal i brzi odgovor, dobiven s elementima četiri puta većima, odmah se pojavi; kada stanete na otprilike sekundu, rafinirani odgovor same studije zamjenjuje ga. Rezultati navode koji odgovor gledate. Na čeličnoj konzoli brzi odgovor bio je unutar 1 % za progib i oko 4 % za naprezanje u odnosu na rafinirani. Pogledajte [Provjera naprezanja i progiba](topic:simulation#update-while-you-edit-live).
- **Što popušta prvo.** Za statičku studiju ili studiju izvijanja, {{ui:Što popušta prvo?}} u bloku **Slomi ga** skalira opterećenja dok dio ne popusti. Navodi, od najlošijeg, faktor opterećenja do prvog popuštanja (s crvenom oznakom tamo gdje naprezanje dosegne vrh) i faktor opterećenja do izvijanja. Faktor manji od 1 znači da dio pod zadanim opterećenjem već popušta, a na ploči problemi prikazuje se pogreška. Faktori dolaze iz linearne studije, pa su dobri koliko i ona. Pogledajte [Provjera naprezanja i progiba](topic:simulation#find-out-what-breaks-first-break-it).
- **Popuštanje i kontakt.** Dvije nove vrste studija: nelinearna, u kojoj materijal prati svoju ravnu liniju do granice popuštanja, a zatim blaži nagib, s ucrtanom plastičnom deformacijom; i kontaktna, u kojoj zasebni dijelovi pritišću jedan drugog (bez trenja) ili ostaju zalijepljeni (vezani). Korak opterećenja koji se ne može ustaliti ili dijelovi koji predubok prodiru jedan u drugi prikazuju se na ploči problemi. Trenje, veliko klizanje, velike rotacije, veliki progibi i zamor nisu riješeni. Pogledajte [Provjera naprezanja i progiba](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ulazne datoteke za CalculiX.** {{ui:Izvoz}} › {{ui:CalculiX ulazna datoteka (.inp)}} sprema studiju za CalculiX, zaseban program koji sami instalirate i pokrećete; {{ui:Izvoz}} › {{ui:CalculiX rezultati (.frd)}} učitava njegovu datoteku rezultata natrag na istu mrežu. PartCraft nikad ne pokreće taj program i kaže vam to ako se dio promijenio otkad je ulazna datoteka spremljena.

### Sklopovi

- **Studije gibanja.** {{ui:Sklop}} › {{ui:Gibanje}} pogoni vrijednost jednog spoja tijekom vremena koje zadate (stalna brzina, ublažena, sinusna ili naprijed pa natrag), postavlja sklop u svakom koraku sa spojevima i zatvorenim petljama te izvješćuje koji se dijelovi sudaraju i koliko se približavaju. {{ui:Dodaj točku}} ucrtava položaj, brzinu i ubrzanje točke, vrijednost spoja i zazor u odnosu na vrijeme; {{ui:Spremi CSV}} i {{ui:Spremi grafikon}} ih zapisuju. Nakon {{ui:Pokreni}}, traka Korak kroz pokretanje pomiče sklop na bilo koji korak. Postavke studije spremaju se u datoteku sklopa. Brzina i ubrzanje dolaze iz zabilježenih položaja, pa koristite više koraka ako oštar vrh izgleda nizak. Pogledajte [Provjera sklopa za sudare i gibanje](topic:check-assembly#a-motion-study).

### Površine i dijelovi iz fizike

- **Radni prostor Površine.** Odaberite {{ui:Površine}} u okviru {{ui:Radni prostor}} za NURBS krivulje i površine uz dio: {{ui:Krivulja}}, {{ui:Loft}}, {{ui:Provlačenje}}, {{ui:Uskladi}} i {{ui:Zebra}}, s kontinuitetom (G0, G1 ili G2) mjerenim na točnim površinama, a rub koji je lošiji od tražene razine navodi se na ploči problemi uz ispravak Uskladi. {{ui:Izgladi}} mjeri linije trupa za točke infleksije i skokove zakrivljenosti te ponovno gradi neizglađene unutar vaše tolerancije. Površine se spremaju u datoteku dijela i ne mijenjaju značajke dijela. Pogledajte [Slobodne površine (NURBS)](topic:nurbs-surfaces).
- **Radni prostor Inženjer.** Odaberite {{ui:Inženjer}} u preklopniku radnog prostora, odaberite generator i kliknite {{ui:Novo}}: skripta dimenzionira dio prema tome što mora raditi (zagrijavanje za pomicanje, protoci, tlak, materijal, postupak ispisa) pomoću udžbeničkih formula i izrađuje ga, zatim vraća brojke koje je upotrijebila s izvorima, svoje provjere izrade i datoteke za alate analize. Isti ulazi daju isti dio na bilo kojem računalu. Generator se čuva u dijelu, a otvaranje dijela nikad ne pokreće skriptu. Pogledajte [Dijelovi iz fizike: generatori](topic:engineer-generators) i [Pisanje generatora](topic:write-a-generator).

### Skice, crteži i izrada

- **Skica iz fotografije.** {{ui:Značajke}} › {{ui:Više}} › {{ui:Skica iz fotografije…}} pretvara sliku ravnog dijela na običnoj podlozi (obris i provrti) ili crtež perom u linije, lukove i kružnice. Zadajete jednu duljinu, provjerite pregled i izradite skicu. Pogledajte [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Skaliranje i podjela za ispis.** {{ui:Izvoz}} › {{ui:Skaliraj za ispis (STL ili 3MF)…}} skalira po osima bez mijenjanja dijela, na primjer za dopuštenje skupljanja. {{ui:Izvoz}} › {{ui:Podijeli za ispis (zip komada)…}} reže dio prevelik za podlogu vašeg pisača na numerirane komade spojene klinovima, ključevima, lastinim repovima, rupama za svornjake ili džepovima za magnete. Pogledajte [3D ispis](topic:print-3d).
- **Složene ploče u G-kod.** {{ui:Izvoz}} › {{ui:Složene ploče u G-kod}} čita složeni DXF i pravi jedan program po listu kroz postprocesor koji odaberete: prvo rupe i izreske, zatim obrise. Ne planira ulazne linije, redoslijed rezanja ni zajedničke rubove. Pogledajte [Slaganje ravnih dijelova na listove](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Crteži koji više rade sami.** {{ui:List}} › {{ui:Automatski}} bira najmanji list formata A u koji stanu pogledi, pri najvećem standardnom mjerilu do 1:1. {{ui:Kotiraj provrte}} stavlja središnju oznaku na svaki provrt, jedan oblačić po veličini i položaje od donjeg lijevog kuta pogleda. Pogledajte [Izrada crteža](topic:drawing-pdf).

### U svakoj aplikaciji

- **Jezici.** Aplikacije su dostupne na 54 jezika. Jezici osim engleskog su strojni prijevodi u radnoj verziji dok ih ne pročita izvorni govornik.
- **Redci alatne trake.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Redci alatne trake}} bira Prelamanje (kao i prije), 2 retka ili 1 redak; traka koja ne stane pomiče se bočno. Vrpca značajki aplikacije PartCraft prikazuje najčešće korišteni alat velik, a varijante skriva iza podijeljenog gumba.
- **Povežite svoj AI.** Studio je središte za povezivanje vlastitog pomoćnika sa svih osam aplikacija, s dopuštenjem samo za čitanje, prijedloge ili uređivanje po aplikaciji. Povezani pomoćnik može dimenzionirati dio iz jedne rečenice, npr. nosač za opterećenje, pokazati svoj rad i sve provjere te ga izraditi; javlja što nije provjerio (koncentracija naprezanja, zamor, puzanje u plastici). Pogledajte [Korištenje aplikacije PartCraft s AI pomoćnikom](topic:use-with-ai-assistants).

## Ispravljeno u 0.8.1

- **Zamrzavanje kursora u punom zaslonu.** Odabir pri lebdenju sada je ograničen po učestalosti. Uzrok je naša najbolja pretpostavka i nije potvrđen s osobom koja je to prijavila.
- **Jezik u vrijeme izvođenja.** Studio i pakirana izdanja mogu promijeniti jezik dok rade; prije su bila samo na engleskom. Još nije testirano na svim platformama: javite nam ako se jezik ne promijeni.

## Još nije u ovoj verziji

- Povezivanje AI-ja nije gotovo: povezivanje jednim klikom unutar aplikacije Studio, hostani konektor za AI u pregledniku, vlastiti API ključ unutar aplikacije Studio i objavljeni MCP paket nisu obećani. Studio nema vlastiti AI.
- Studio nije digitalno potpisan: Windows može upozoriti, a macOS traži desni klik pa Otvori. Pogledajte [Rješavanje problema](topic:troubleshooting).
- Tolerancijski lanci i dalje su jednosmjerni: pogledajte [Tolerancijski lanci](topic:tolerance-stackup).
- Ostalo je navedeno u [Što još nije izrađeno](topic:not-built-yet).

Ranije promjene su u [Što je novo u 0.7](topic:whats-new-0-7).
