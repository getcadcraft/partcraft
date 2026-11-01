---
title: Datoteke: otvaranje, čuvanje i izvoz
summary: Datoteke delova i sklopova koje PartCraft otvara i čuva, svi formati izvoza i šta zadržavaju, gde idu datoteke i šta se menja van mreže ili između pregledača.
keywords: otvori, sačuvaj, izvezi, preuzmi, datoteka, partcraft.json, datoteka sklopa, stl, 3mf, step, dxf, pdf, gde su moje datoteke, van mreže, sačuvaj kao
from: c15c2c48
---

PartCraft radi sa datotekama na vašem računaru. Nikad ne otprema deo, a nema naloga ni skladišta u oblaku. Čuvanje u oblaku još nije dostupno.

## Šta PartCraft otvara

| Datoteka | Ekstenzija | Kako |
|---|---|---|
| Deo PartCraft-a | `.partcraft.json` | {{ui:Otvori}}, {{key:Mod+O}} ili prevucite na 3D prikaz |
| Sklop PartCraft-a | `.partcraft-asm.json` | Isto: PartCraft sam prepoznaje vrstu |
| Čvrsto telo STEP | `.step`, `.stp` | Čvrsto telo pročitano kao trouglovi: [Otvorite STEP datoteku i nastavite rad na njoj](topic:import-step) |

STL, OBJ i 3MF mreže se takođe otvaraju kao čvrsta tela ([Otvorite STL, OBJ ili 3MF](topic:open-meshes)), a isto važi i za datoteke `.3dm` ([Otvorite model .3dm](topic:open-3dm-files)). DXF, IGES i datoteke delova drugih programa ne mogu da se otvore (vidi [Šta još nije izgrađeno](topic:not-built-yet)).

Pravila pri otvaranju:

- Ime datoteke dela ili sklopa mora da se završava na `.json`, a datoteka mora biti manja od 50 MB.
- Datoteke se proveravaju pre prikaza. Oštećena ili izmenjena datoteka se odbija uz jasan razlog, na primer: „Ovo nije datoteka PartCraft-a.“
- Datoteka sačuvana novijim PartCraft-om se odbija: „Ova datoteka je sačuvana novijim PartCraft-om (verzija datoteke 3); ova čita verziju 2.“ Starije datoteke se otvaraju.
- Ako deo na ekranu ima nesačuvane izmene, PartCraft prvo pita: {{ui:Otkaži}}, {{ui:Odbaci izmene}} ili {{ui:Prvo sačuvaj}}.

## Čuvanje

{{ui:Sačuvaj}} ili {{key:Mod+S}} čuva ono što je na ekranu:

- Za deo: `<ime dela>.partcraft.json`, kompletna istorija (skice, relacije, kote, elementi, položaj vraćanja), beleške preseka, detalja i GD&T na listu crteža, i ceo tekst svakog STEP čvrstog tela uvezenog u ranijoj verziji. Elementi koje ova verzija ne može da izgradi čuvaju se nepromenjeni. Samo telo se ne čuva; PartCraft ga ponovo gradi iz istorije kad se datoteka otvori.
- Za sklop: `<ime sklopa>.partcraft-asm.json`, sa **svakim delom unutra**. Jedna datoteka nosi ceo sklop, pa je možete poslati samu.

Čuvanje je **preuzimanje**. Vaš pregledač stavlja datoteku u fasciklu Preuzimanja, ili pita gde da je sačuva ako ste tako podesili. Ponovno čuvanje pravi novo preuzimanje; pregledač može da je nazove `Part1 (1).partcraft.json` umesto da zameni staru. Preimenujte ili premestite datoteke u {{pick:mac=Finder|windows=File Explorer|linux=vašem upravljaču datotekama}} kako želite.

Znakovi osim slova, cifara, razmaka, `_`, `.` i `-` u imenu dela postaju `_` u imenu datoteke.

:::tip
Većina pregledača ima podešavanje koje pita gde da sačuva svako preuzimanje. Uključite ga ako želite izbor „Sačuvaj kao“ svaki put: u Chrome i Edge je pod Preuzimanja u podešavanjima; u Firefox pod Opšte, Datoteke i aplikacije; u Safari pod Opšte, Lokacija za preuzimanje datoteka.
:::

Više o tome kuda idu preuzimanja i kako da čuvate datoteke bezbedno: [Gde idu vaše datoteke](common:your-files).

## Izvoz

Meni {{ui:Izvezi}} piše druge formate. Svaki je preuzimanje, a ime mu je po delu.

| Stavka menija | Datoteka | Šta je u njoj |
|---|---|---|
| {{ui:STL, za 3D štampu}} | `<name>.stl` | Binarni STL trouglova čvrstog tela, milimetri, **Z gore** |
| {{ui:3MF, za 3D štampu}} | `<name>.3mf` | 3MF sa čvrstim telom kao jednim objektom, milimetri, **Z gore** |
| {{ui:STEP AP242 (tačno čvrsto telo)}} | `<name>.step` | Još nije izgrađeno u ovoj verziji (sivo): potrebno mu je tačno jezgro |
| {{ui:STEP AP214 (tačno čvrsto telo)}} | `<name>.step` | Još nije izgrađeno u ovoj verziji (sivo) |
| {{ui:STEP (fasetirano, mrežno jezgro)}} | `<name>.step` | Čvrsto telo od ravnih površi iz mreže: **okrugle površine su mnogo malih ravnih faseta**. Milimetri, u sopstvenim osama PartCraft-a (Y gore). STEP za druge CAD programe u ovoj verziji |
| {{ui:DXF skice ili ravne površi}} | `<name> - <skica>.dxf` ili `<name> - face.dxf` | DXF R12. Skica: linije, lukovi, krugovi i tačke u koordinatama same skice, na slojevima PROFILE, CONSTRUCTION i POINTS. Izabrana ravna površ: njeni obrisi kao zatvorene polilinije (okrugle ivice kao svoje fasete) |
| {{ui:Crtež (PDF): pogledi, presek, detalj, GD&T}} | `<name> - drawing.pdf` | List crteža formata A3: tri pogleda, izometrija, presek i detalj ako su podešeni, ukupne mere, GD&T simboli, naslovni blok |

:::note
{{ui:STEP AP242 (tačno čvrsto telo)}} i {{ui:STEP AP214 (tačno čvrsto telo)}} još nisu izgrađeni u ovoj verziji: koristite {{ui:STEP (fasetirano, mrežno jezgro)}}. Ima pravi oblik i zapreminu, ali je svaka okrugla površina mnogo malih ravnih faseta, pa drugi programi ne mogu da izaberu rupu kao cilindar. Ako je to važno, prvo podesite **Krivine** na finije.
:::

- Izvozi su dela koje je na ekranu. Izvoz je isključen u sklopu; izvoz sklopa još ne postoji.
- STL, 3MF, fasetirani STEP i DXF ravne površi su uvek od faseta. Podešavanje **Krivine** (u desnom panelu kad ništa nije izabrano) određuje koliko su fini, od 32 do 256 faseta po obrtaju. Izaberite Fino ili Vrlo fino pre izvoza STL ili 3MF za glatku štampu.
- PDF crtež koristi ugrađeni font čitača, Helvetica. Znakovi koje ne može da prikaže štampaju se kao „?“.

Korak po korak: [Izvoz za štampu, STEP i DXF](topic:export-files) i [Pravljenje lista crteža](topic:drawing-pdf).

## Nesačuvani rad

- PartCraft čuva kopiju za oporavak otvorenog dela ili sklopa u ovom pregledaču nedugo posle svake promene, pa pad ili zatvoren tab ne gube rad: sledeći put kad otvorite PartCraft pita „Oporaviti rad?“. To nije čuvanje: sačuvajte u datoteku da zadržite rad. Vidi [Oporavak nesačuvanog rada](common:recover).
- Ako pokušate da zatvorite tab ili osvežite stranicu sa nesačuvanim izmenama, pregledač pita „Napustiti sajt?“. To je okvir samog pregledača; PartCraft ne može da menja njegov tekst.
- {{ui:Nova}}, {{ui:Otvori}} i zatvaranje sklopa pitaju pre nego što odbace nesačuvane izmene.

## Na mreži i van mreže

Sve se dešava na vašem računaru: mrežno jezgro (WebAssembly program) se preuzima sa aplikacijom i gradi geometriju lokalno, a datoteke se čitaju i upisuju na vaš disk. Nijedan podatak o delu ne ide mrežom. Vidi [Mrežno jezgro](topic:solid-kernels).

Da radite bez ikakve veze, sačuvajte PartCraft za rad van mreže dok ste na mreži: izaberite {{ui:Sačuvaj za rad van mreže}} u traci aplikacije i sačekajte dok broji („Čuvanje 40 od 212“), dok ne piše **Spremno za rad van mreže**. Sačuvana kopija uključuje 3D biblioteku i mrežno jezgro, pa posle rade van mreže modelovanje, čuvanje, svi izvozi i crteži. Ako piše **Nije moguće sačuvati**, kliknite da pokušate ponovo na mreži; **Rad van mreže nije dostupan** znači da ovaj prozor pregledača ne može da zadrži kopiju (privatni prozori i neki upravljani računari). Kad je kopija sačuvana, klik na **Spremno za rad van mreže** nudi {{ui:Sačuvaj ponovo (preuzmi najnoviju verziju)}} i {{ui:Ukloni kopiju za rad van mreže}}. Detalji: [Rad van mreže](common:offline).

:::online
Na mreži ste. Čak i bez čuvanja za rad van mreže, kad se PartCraft učita i čip u statusnoj traci kaže „Mrežno jezgro“, možete nastaviti rad ako veza padne. Samo nemojte osvežavati stranicu dok ponovo ne budete na mreži.
:::

:::offline
Van mreže ste. Ako je PartCraft već otvoren, nastavite rad; čuvanje i izvoz i dalje rade. Ako traka aplikacije piše **Spremno za rad van mreže**, PartCraft se otvara i od početka bez veze; inače ne osvežavajte ovaj tab.
:::

## Razlike između pregledača

- **Preuzimanja.** Svaki pregledač ima svoju fasciklu za preuzimanja i svoj način pitanja. Ako pregledač pita sme li ovaj sajt da preuzima datoteke, dozvolite, inače čuvanje i izvoz ne mogu da rade.
- **Prevlačenje** datoteke na prikaz radi u Chrome, Edge, Firefox i Safari.
- **Datoteke sa telefona ili tableta.** Na iPhone i iPad, Otvori prikazuje aplikaciju Files; sačuvane datoteke idu u Files, u fasciklu Downloads. Na Android idu u fasciklu Preuzimanja.

Sadržaj datoteka nije drugačiji među pregledačima ili operativnim sistemima.
