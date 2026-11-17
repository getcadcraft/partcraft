---
title: Datoteke: otvaranje, čuvanje i izvoz
summary: Datoteke delova i sklopova koje PartCraft otvara i čuva, svaki format izvoza i šta čuva, gde idu datoteke i šta se menja van mreže ili između pregledača.
keywords: otvori, sačuvaj, izvezi, preuzimanje, datoteka, partcraft.json, datoteka sklopa, stl, 3mf, step, dxf, pdf, gde su moje datoteke, van mreže, sačuvaj kao
from: e5fbc7e3
---

PartCraft radi sa datotekama na tvom računaru. Nikada ne otprema deo, i nema naloga ni skladišta u oblaku. Čuvanje u oblaku još nije dostupno.

## Šta PartCraft otvara

| Datoteka | Ekstenzija | Kako |
|---|---|---|
| PartCraft deo | `.partcraft.json` | {{ui:Otvori}}, {{key:Mod+O}}, ili prevuci na 3D prikaz |
| PartCraft sklop | `.partcraft-asm.json` | Isto: PartCraft prepoznaje koja je vrsta |
| STEP telo | `.step`, `.stp` | Čvrsto telo pročitano kao trouglovi: [Otvori STEP datoteku i gradi na njoj](topic:import-step) |

STL, OBJ i 3MF mreže se takođe otvaraju kao čvrsta tela ([Otvori STL, OBJ ili 3MF](topic:open-meshes)), kao i `.3dm` datoteke ([Otvori .3dm model](topic:open-3dm-files)). DXF, IGES i sopstvene datoteke delova drugih programa ne mogu da se otvore (pogledaj [Šta još nije izgrađeno](topic:not-built-yet)).

Pravila pri otvaranju:

- Ime datoteke dela ili sklopa mora da se završava na `.json`, a datoteka mora biti manja od 50 MB.
- Datoteke se proveravaju pre prikaza. Oštećena ili izmenjena datoteka se odbija uz jednostavan razlog, na primer: „Ovo nije PartCraft datoteka.“
- Datoteka sačuvana u novijem PartCraft-u se odbija: „Ova datoteka je sačuvana u novijem PartCraft-u (verzija datoteke 3); ova čita verziju 2.“ Starije datoteke se otvaraju.
- Ako deo na ekranu ima nesačuvane izmene, PartCraft prvo pita: {{ui:Otkaži}}, {{ui:Odbaci izmene}} ili {{ui:Prvo sačuvaj}}.

## Čuvanje

{{ui:Sačuvaj}} ili {{key:Mod+S}} čuva ono što je na ekranu:

- Za deo: `<ime dela>.partcraft.json`, kompletnu istoriju (skice, relacije, kote, elemente, položaj vraćanja), beleške preseka, detalja i GD&T lista crteža i ceo tekst svakog STEP tela uvezenog u ranijoj verziji. Elementi koje ova verzija ne može da izgradi čuvaju se nepromenjeni. Samo čvrsto telo se ne čuva; PartCraft ga ponovo gradi iz istorije kada se datoteka otvori.
- U sklopu: `<ime sklopa>.partcraft-asm.json`, sa **svakim delom unutra**. Jedna datoteka nosi ceo sklop, pa je možeš poslati samostalno.

Čuvanje je **preuzimanje**. Pregledač stavlja datoteku u svoju fasciklu za preuzimanja, ili pita gde da je stavi ako si tako podesio. Ponovno čuvanje pravi novo preuzimanje; pregledač može da je nazove `Part1 (1).partcraft.json` umesto da zameni staru. Preimenuj ili premesti datoteke u {{pick:mac=Finder|windows=Istraživač datoteka|linux=vašem upravljaču datotekama}} kako želiš.

Znakovi osim slova, cifara, razmaka, `_`, `.` i `-` u imenu dela postaju `_` u imenu datoteke.

:::tip
Većina pregledača ima podešavanje koje pita gde da se čuva svako preuzimanje. Uključi ga ako želiš izbor „Sačuvaj kao“ svaki put: u Chrome i Edge je pod Preuzimanja u podešavanjima; u Firefox pod Opšte, Datoteke i aplikacije; u Safari pod Opšte, Lokacija za preuzimanje datoteka.
:::

Više o tome gde idu preuzimanja i kako čuvati datoteke: [Gde idu tvoje datoteke](common:your-files).

## Izvoz

Meni {{ui:Izvezi}} piše druge formate. Svaki je preuzimanje, nazvano po delu.

| Stavka menija | Datoteka | Šta je u njoj |
|---|---|---|
| {{ui:STL, za 3D štampu}} | `<ime>.stl` | Binarni STL trouglova čvrstog tela, milimetri, **Z gore** |
| {{ui:3MF, za 3D štampu}} | `<ime>.3mf` | 3MF sa čvrstim telom kao jednim objektom, milimetri, **Z gore** |
| {{ui:STEP AP242 (tačno čvrsto telo)}} | `<ime>.step` | Jedno tačno čvrsto telo, milimetri, Z gore: okrugle površi kao pravi cilindri, konusi, sfere i torusi. STEP za druge CAD i CAM programe |
| {{ui:STEP AP214 (tačno čvrsto telo)}} | `<ime>.step` | Isto tačno čvrsto telo u starijoj šemi AP214 |
| {{ui:STEP (fasetirano, mrežno jezgro)}} | `<ime>.step` | Čvrsto telo od ravnih površi iz mreže: **okrugle površi su mnogo malih ravnih fareta**. Milimetri, u sopstvenim osama PartCraft-a (Y gore). Za program koji odbija tačnu datoteku |
| {{ui:DXF skice ili ravne površi}} | `<ime> - <skica>.dxf` ili `<ime> - face.dxf` | DXF R12. Skica: linije, lukovi, krugovi i tačke u sopstvenim koordinatama skice, na slojevima PROFILE, CONSTRUCTION i POINTS. Izabrana ravna površ: njeni obrisi kao zatvorene polilinije (okrugle ivice kao svoje fasete) |
| {{ui:Crtež (PDF): pogledi, presek, detalj, GD&T}} | `<ime> - drawing.pdf` | List crteža A3: tri pogleda, izometrija, presek i detalj ako su postavljeni, ukupne dimenzije, GD&T simboli, naslovni blok |

:::note
{{ui:STEP AP242 (tačno čvrsto telo)}} zapisuje rupe, izbočine, zaobljenja, konuse, sfere i torusi na njihovim pravim površima, pa drugi program može rupu da izabere kao cilindar; **Krivine** to ne menja. Splajn strane, modelovani navoji i uvezene mreže nemaju tačnu površ i ostaju ravne fasete u istom čvrstom telu; statusna traka kaže koliko ih ima. {{ui:STEP (fasetirano, mrežno jezgro)}} zapisuje svaku okruglu površ kao fasete.
:::

- Izvozi su dela na ekranu. Izvoz je isključen u sklopu; izvoz sklopa još ne postoji.
- STL, 3MF, fasetirani STEP i DXF površi su uvek sastavljeni od fasete. Podešavanje **Krivine** (u desnom panelu kada ništa nije izabrano) određuje koliko su fine, od 32 do 256 fasete po obrtaju. Izaberi Fino ili Vrlo fino pre izvoza STL ili 3MF za glatku štampu.
- PDF crtež koristi ugrađeni font Helvetica čitača. Znakovi koje ne može da prikaže štampaju se kao „?“.

Korak po korak: [Izvoz za štampu, STEP i DXF](topic:export-files) i [Napravi list crteža](topic:drawing-pdf).

## Nesačuvani rad

- PartCraft čuva kopiju za oporavak otvorenog dela ili sklopa u ovom pregledaču ubrzo posle svake izmene, pa pad ili zatvoren jezičak ne gube rad: sledeći put kad otvoriš PartCraft pita: „Oporaviti tvoj rad?“. To nije čuvanje: sačuvaj u datoteku da zadržiš rad. Pogledaj [Oporavak nesačuvanog rada](common:recover).
- Ako pokušaš da zatvoriš jezičak ili osvežiš stranicu sa nesačuvanim izmenama, pregledač pita: „Napustiti sajt?“. To je pregledačev sopstveni okvir; PartCraft ne može da promeni njegov tekst.
- {{ui:Nova}}, {{ui:Otvori}} i zatvaranje sklopa pitaju pre odbacivanja nesačuvanih izmena.

## Na mreži i van nje

Sve se dešava na tvom računaru: mrežno jezgro (WebAssembly program) se preuzima sa aplikacijom i gradi geometriju lokalno, a datoteke se čitaju i pišu sa diska. Nijedan podatak o delu ne ide preko mreže. Pogledaj [Mrežno jezgro](topic:solid-kernels).

Da radiš bez ikakve veze, sačuvaj PartCraft za rad van mreže dok si na mreži: izaberi {{ui:Sačuvaj za rad van mreže}} u traci aplikacije i sačekaj dok broji („Čuvanje 40 od 212“) dok ne kaže **Spremno za rad van mreže**. Sačuvana kopija uključuje 3D biblioteku i mrežno jezgro, pa posle rade modelovanje, čuvanje, svaki izvoz i crteži sve van mreže. Ako piše **Nije moguće sačuvati**, klikni da pokušaš ponovo dok si na mreži; **Rad van mreže nije dostupan** znači da ovaj prozor pregledača ne može da zadrži kopiju (privatni prozori i neki upravljani računari). Sa sačuvanom kopijom, klik na **Spremno za rad van mreže** nudi {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}} i {{ui:Ukloni kopiju za rad van mreže}}. Detalji: [Rad van mreže](common:offline).

:::online
Na mreži si. Čak i bez čuvanja za rad van mreže, kad se PartCraft učita i čip u statusnoj traci kaže „Mrežno jezgro“, možeš nastaviti da radiš ako veza pukne. Samo nemoj osvežiti stranicu dok se ne vratiš na mrežu.
:::

:::offline
Van mreže si. Ako je PartCraft već otvoren, nastavi da radiš; čuvanje i izvoz i dalje rade. Ako traka aplikacije piše **Spremno za rad van mreže**, PartCraft se otvara i od početka bez veze; inače ne osvežavaj ovaj jezičak.
:::

## Razlike između pregledača

- **Preuzimanja.** Svaki pregledač ima svoju fasciklu za preuzimanja i svoj način pitanja. Ako pregledač pita da li ovaj sajt sme da preuzima datoteke, dozvoli, inače čuvanje i izvoz ne mogu da rade.
- **Prevlačenje** datoteke na prikaz radi u Chrome, Edge, Firefox i Safari.
- **Datoteke sa telefona ili tableta.** Na iPhone i iPad, Otvori prikazuje aplikaciju Datoteke; sačuvane datoteke idu u Datoteke, Preuzimanja. Na Android idu u fasciklu Preuzimanja.

Datoteke ne sadrže drugačije podatke između pregledača ili operativnih sistema.
