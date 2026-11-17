---
title: Datoteke: otvaranje, spašavanje i izvoz
summary: Datoteke dijelova i sklopova koje PartCraft otvara i sprema, svaki format izvoza i šta zadržava, gdje idu datoteke i šta se mijenja van mreže ili između pregledača.
keywords: otvori, spasi, izvezi, preuzmi, datoteka, partcraft.json, datoteka sklopa, stl, 3mf, step, dxf, pdf, gdje su moje datoteke, van mreže, spasi kao
from: e5fbc7e3
---

PartCraft radi s datotekama na tvom računaru. Nikad ne šalje dio, a nema naloga ni oblačnog skladišta. Spremanje u oblak još nije dostupno.

## Šta PartCraft otvara

| Datoteka | Ekstenzija | Kako |
|---|---|---|
| Dio PartCraft-a | `.partcraft.json` | {{ui:Otvori}}, {{key:Mod+O}}, ili je prevuci na 3D prikaz |
| Sklop PartCraft-a | `.partcraft-asm.json` | Isto: PartCraft vidi koje je vrste |
| STEP čvrsto tijelo | `.step`, `.stp` | Čvrsto tijelo pročitano kao trouglovi: [Otvori STEP datoteku i nastavi graditi](topic:import-step) |

STL, OBJ i 3MF mreže se također otvaraju kao čvrsta tijela ([Otvori STL, OBJ ili 3MF](topic:open-meshes)), kao i `.3dm` datoteke ([Otvori .3dm model](topic:open-3dm-files)). DXF, IGES i izvorne datoteke dijelova drugih programa ne mogu se otvoriti (vidi [Šta još nije izrađeno](topic:not-built-yet)).

Pravila pri otvaranju:

- Naziv datoteke dijela ili sklopa mora završavati na `.json`, a datoteka mora biti manja od 50 MB.
- Datoteke se provjeravaju prije prikaza. Oštećena ili izmijenjena datoteka se odbija uz jasan razlog, na primjer "Ovo nije PartCraft datoteka."
- Datoteka spašena novijim PartCraft-om se odbija: "Ova datoteka je spašena novijim PartCraft-om (verzija datoteke 3); ovaj čita verziju 2." Starije datoteke se otvaraju.
- Ako dio na ekranu ima nespašene promjene, PartCraft prvo pita: {{ui:Otkaži}}, {{ui:Odbaci izmjene}} ili {{ui:Prvo spasi}}.

## Spašavanje

{{ui:Spasi}} ili {{key:Mod+S}} sprema ono što je na ekranu:

- Za dio: `<naziv dijela>.partcraft.json`, potpunu historiju (skice, relacije, kote, elemente, pozicija vraćanja), dio lista crteža, napomene o presjeku, detalju i GD&T, i potpuni tekst svakog STEP čvrstog tijela uvezenog u ranijoj verziji. Elementi koje ova verzija ne može izgraditi se spašavaju nepromijenjeni. Samo čvrsto tijelo se ne čuva; PartCraft ga ponovo gradi iz historije kad se datoteka otvori.
- U sklopu: `<naziv sklopa>.partcraft-asm.json`, sa **svakim dijelom unutra**. Jedna datoteka nosi cijeli sklop, pa je možeš poslati samostalno.

Spašavanje je **preuzimanje**. Pregledač stavlja datoteku u svoju mapu za preuzimanja ili pita gdje da je stavi, ako si tako podesio. Ponovno spašavanje pravi novo preuzimanje; pregledač može nazvati datoteku `Part1 (1).partcraft.json` umjesto da zamijeni staru. Preimenuj ili premjesti datoteke u {{pick:mac=Finder|windows=File Explorer|linux=tvom upravitelju datoteka}} kako želiš.

Znakovi osim slova, cifara, razmaka, `_`, `.` i `-` u nazivu dijela pretvaraju se u `_` u nazivu datoteke.

:::tip
Većina pregledača ima postavku da pita gdje spasiti svako preuzimanje. Uključi je ako želiš izbor "Spasi kao" svaki put: u Chrome i Edge je pod Preuzimanja u postavkama; u Firefox pod Općenito, Datoteke i aplikacije; u Safari pod Općenito, Lokacija preuzimanja datoteka.
:::

Više o tome gdje idu preuzimanja i kako čuvati datoteke: [Gdje idu tvoje datoteke](common:your-files).

## Izvoz

Meni {{ui:Izvoz}} piše druge formate. Svaki je preuzimanje, nazvano po dijelu.

| Stavka menija | Datoteka | Šta je u njoj |
|---|---|---|
| {{ui:STL, za 3D štampu}} | `<naziv>.stl` | Binarni STL trouglova čvrstog tijela, milimetri, **Z gore** |
| {{ui:3MF, za 3D štampu}} | `<naziv>.3mf` | 3MF s čvrstim tijelom kao jednim objektom, milimetri, **Z gore** |
| {{ui:STEP AP242 (tačno čvrsto tijelo)}} | `<naziv>.step` | Jedno tačno čvrsto tijelo, milimetri, Z gore: okrugle površine kao prave cilindre, konuse, sfere i torusi. STEP za druge CAD i CAM programe |
| {{ui:STEP AP214 (tačno čvrsto tijelo)}} | `<naziv>.step` | Isto tačno čvrsto tijelo u starijoj AP214 shemi |
| {{ui:STEP (poligonalni, mrežni kernel)}} | `<naziv>.step` | Čvrsto tijelo od ravnih površina iz mreže: **okrugle površine su mnoge male ravne fasete**. Milimetri, u vlastitim osama PartCraft-a (Y gore). Za program koji odbija tačnu datoteku |
| {{ui:DXF skice ili ravne površine}} | `<naziv> - <skica>.dxf` ili `<naziv> - face.dxf` | DXF R12. Skica: linije, lukovi, krugovi i tačke u vlastitim koordinatama skice, na slojevima PROFILE, CONSTRUCTION i POINTS. Odabrana ravna površina: njeni obrisi kao zatvorene polilinije (okrugle ivice kao fasete) |
| {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}} | `<naziv> - drawing.pdf` | A3 list crteža: tri pogleda, izometrija, presjek i detalj ako su postavljeni, ukupne dimenzije, GD&T simboli, natpisna tabla |

:::note
{{ui:STEP AP242 (tačno čvrsto tijelo)}} piše rupe, izbočine, zaobljenja, konuse, sfere i torusi na njihovim pravim površinama, pa drugi program može odabrati rupu kao cilindar; **Krive** to ne mijenja. Bokovi splajna, modelovani navoji i uvezene mreže nemaju tačnu površinu i ostaju ravne fasete u istom čvrstom tijelu; statusna traka kaže koliko ih ima. {{ui:STEP (poligonalni, mrežni kernel)}} piše svaku okruglu površinu kao fasete.
:::

- Izvozi su dijela na ekranu. Izvoz je isključen u sklopu; još nema izvoza sklopa.
- STL, 3MF, fasetirani STEP i DXF površine su uvijek od faseta. Postavka **Krive** (u desnom panelu kad ništa nije odabrano) određuje koliko su fine, od 32 do 256 faseta po krugu. Odaberi Fino ili Vrlo fino prije izvoza STL ili 3MF za glatku štampu.
- PDF crtež koristi ugrađeni font Helvetica čitača. Znakovi koje ne može prikazati štampaju se kao "?".

Korak po korak: [Izvoz za štampu, STEP i DXF](topic:export-files) i [Napravi list crteža](topic:drawing-pdf).

## Nespašeni rad

- PartCraft čuva kopiju za oporavak otvorenog dijela ili sklopa u ovom pregledaču ubrzo nakon svake promjene, pa pad ili zatvoren tab ne gube rad: sljedeći put kad otvoriš PartCraft pita "Oporaviti tvoj rad?". To nije spašavanje: spasi u datoteku da sačuvaš rad. Vidi [Oporavi nespašeni rad](common:recover).
- Ako pokušaš zatvoriti tab ili osvježiti s nespašenim promjenama, pregledač pita "Napustiti stranicu?". To je okvir samog pregledača; PartCraft ne može promijeniti njegov tekst.
- {{ui:Novo}}, {{ui:Otvori}} i zatvaranje sklopa pitaju prije odbacivanja nespašenih promjena.

## Na mreži i van mreže

Sve se odvija na tvom računaru: mrežni kernel (WebAssembly program) se preuzima s aplikacijom i gradi geometriju lokalno, a datoteke se čitaju s diska i pišu na njega. Podaci o dijelu ne idu preko mreže. Vidi [Mrežni kernel](topic:solid-kernels).

Da radiš bez ikakve veze, spasi PartCraft za rad van mreže dok si na mreži: izaberi {{ui:Spasi za rad van mreže}} u traci aplikacije i sačekaj dok broji ("Spašavam 40 od 212") dok ne kaže **Spreman za rad van mreže**. Sačuvana kopija uključuje 3D biblioteku i mrežni kernel, pa poslije svi rade van mreže: modelovanje, spašavanje, svaki izvoz i crteži. Ako piše **Nije moguće spasiti**, klikni da pokušaš ponovo dok si na mreži. **Rad van mreže nije dostupan** znači da ovaj prozor pregledača ne može čuvati kopiju (privatni prozori i neki upravljani računari). Kad je kopija sačuvana, klik na **Spreman za rad van mreže** nudi {{ui:Spasi ponovo (preuzmi najnoviju verziju)}} i {{ui:Ukloni kopiju za rad van mreže}}. Detalji: [Rad van mreže](common:offline).

:::online
Na mreži si. Čak i bez spašavanja za rad van mreže, kad se PartCraft učita i statusna oznaka kaže "Mrežni kernel", možeš nastaviti raditi ako veza ispadne. Samo ne osvježavaj stranicu dok se ne vratiš na mrežu.
:::

:::offline
Van mreže si. Ako je PartCraft već otvoren, nastavi raditi; spašavanje i izvoz i dalje rade. Ako traka aplikacije piše **Spreman za rad van mreže**, PartCraft se otvara i bez veze; inače ne osvježavaj ovaj tab.
:::

## Razlike među pregledačima

- **Preuzimanja.** Svaki pregledač ima svoju mapu za preuzimanja i svoj način pitanja. Ako pregledač pita smije li ova stranica preuzimati datoteke, dozvoli, inače spašavanje i izvoz ne mogu raditi.
- **Prevlačenje** datoteke na prikaz radi u Chrome, Edge, Firefox i Safari.
- **Datoteke s telefona ili tableta.** Na iPhone i iPad, Otvori prikazuje aplikaciju Files; spašene datoteke idu u Files, Downloads. Na Androidu idu u mapu Downloads.

Nema razlike u sadržaju datoteka između pregledača ili operativnih sistema.
