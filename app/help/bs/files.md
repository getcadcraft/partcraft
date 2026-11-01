---
title: Datoteke: otvaranje, spašavanje i izvoz
summary: Datoteke dijelova i sklopova koje PartCraft otvara i spašava, svaki format izvoza i šta zadržava, gdje idu datoteke, te šta se mijenja van mreže ili između preglednika.
keywords: otvori, spasi, izvezi, preuzmi, datoteka, partcraft.json, datoteka sklopa, stl, 3mf, step, dxf, pdf, gdje su moje datoteke, van mreže, spasi kao
from: c15c2c48
---

PartCraft radi s datotekama na vašem računaru. Nikada ne šalje dio, a nema ni naloga ni skladišta u oblaku. Spašavanje u oblak još nije dostupno.

## Šta PartCraft otvara

| Datoteka | Ekstenzija | Kako |
|---|---|---|
| PartCraft dio | `.partcraft.json` | {{ui:Open}}, {{key:Mod+O}} ili prevucite na 3D prikaz |
| PartCraft sklop | `.partcraft-asm.json` | Isto: PartCraft prepoznaje koja je vrsta |
| STEP čvrsto tijelo | `.step`, `.stp` | Čvrsto tijelo učitano kao trouglovi: [Otvorite STEP datoteku i nastavite rad](topic:import-step) |

STL, OBJ i 3MF mreže također se otvaraju kao čvrsta tijela ([Otvorite STL, OBJ ili 3MF](topic:open-meshes)), kao i `.3dm` datoteke ([Otvorite .3dm model](topic:open-3dm-files)). DXF, IGES i datoteke dijelova drugih programa ne mogu se otvoriti (vidi [Šta još nije izgrađeno](topic:not-built-yet)).

Pravila pri otvaranju:

- Naziv datoteke dijela ili sklopa mora završavati s `.json`, a datoteka mora biti manja od 50 MB.
- Datoteke se provjeravaju prije prikaza. Oštećena ili izmijenjena datoteka se odbija uz jasan razlog, na primjer: "Ovo nije PartCraft datoteka."
- Datoteka spašena novijim PartCraftom se odbija: "Ovu datoteku je spasio noviji PartCraft (verzija datoteke 3); ova čita verziju 2." Starije datoteke se otvaraju.
- Ako dio na ekranu ima nespašene izmjene, PartCraft prvo pita: {{ui:Cancel}}, {{ui:Discard changes}} ili {{ui:Save first}}.

## Spašavanje

{{ui:Save}} ili {{key:Mod+S}} spašava ono što je na ekranu:

- Za dio: `<naziv dijela>.partcraft.json`, cijela historija (skice, relacije, kote, elementi, pozicija povrata), list crteža s presjekom, detaljima i GD&T napomenama, te puni tekst svakog STEP čvrstog tijela uvezenog u ranijoj verziji. Elementi koje ova verzija ne može izgraditi spašavaju se nepromijenjeni. Samo čvrsto tijelo se ne čuva; PartCraft ga ponovo gradi iz historije kad se datoteka otvori.
- U sklopu: `<naziv sklopa>.partcraft-asm.json`, sa **svakim dijelom unutra**. Jedna datoteka nosi cijeli sklop, pa je možete poslati samostalno.

Spašavanje je **preuzimanje**. Vaš preglednik stavlja datoteku u folder za preuzimanja, ili pita gdje da je spasi ako ste to tako podesili. Ponovno spašavanje pravi novo preuzimanje; preglednik može nazvati datoteku `Part1 (1).partcraft.json` umjesto da zamijeni staru. Datoteke preimenujte ili premjestite kako želite pomoću {{pick:mac=Finder|windows=File Explorer|linux=upravitelja datoteka}}.

Znakovi osim slova, brojeva, razmaka, `_`, `.` i `-` u nazivu dijela pretvaraju se u `_` u nazivu datoteke.

:::tip
Većina preglednika ima postavku da pita gdje spašava svako preuzimanje. Uključite je ako želite izbor "Spasi kao" svaki put: u Chrome i Edge je pod Preuzimanja u postavkama; u Firefoxu pod Općenito, Datoteke i aplikacije; u Safariju pod Općenito, Lokacija preuzimanja datoteka.
:::

Više o tome gdje idu preuzimanja i kako čuvati datoteke: [Gdje idu vaše datoteke](common:your-files).

## Izvoz

Meni {{ui:Export}} piše druge formate. Svaki izvoz je preuzimanje, nazvano po dijelu.

| Stavka menija | Datoteka | Šta sadrži |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<naziv>.stl` | Binarni STL trouglova čvrstog tijela, milimetri, **Z gore** |
| {{ui:3MF, for 3D printing}} | `<naziv>.3mf` | 3MF sa čvrstim tijelom kao jednim objektom, milimetri, **Z gore** |
| {{ui:STEP AP242 (exact solid)}} | `<naziv>.step` | Još nije izgrađeno u ovoj verziji (zasivljeno): treba mu tačan kernel |
| {{ui:STEP AP214 (exact solid)}} | `<naziv>.step` | Još nije izgrađeno u ovoj verziji (zasivljeno) |
| {{ui:STEP (faceted, mesh kernel)}} | `<naziv>.step` | Čvrsto tijelo od ravnih površina iz mreže: **zaobljene površine su mnogo malih ravnih faseta**. Milimetri, u PartCraftovim osama (Y gore). STEP za druge CAD programe u ovoj verziji |
| {{ui:DXF of the sketch or flat face}} | `<naziv> - <skica>.dxf` ili `<naziv> - face.dxf` | DXF R12. Skica: linije, lukovi, krugovi i tačke u koordinatama skice, na slojevima PROFILE, CONSTRUCTION i POINTS. Odabrana ravna površina: njeni obrisi kao zatvorene polilinije (zaobljene ivice kao svoje fasete) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<naziv> - drawing.pdf` | A3 list crteža: tri pogleda, izometrija, presjek i detalj ako su postavljeni, ukupne dimenzije, GD&T simboli, naslovni blok |

:::note
{{ui:STEP AP242 (exact solid)}} i {{ui:STEP AP214 (exact solid)}} još nisu izgrađeni u ovoj verziji: koristite {{ui:STEP (faceted, mesh kernel)}}. Ima pravi oblik i zapreminu, ali je svaka okrugla površina mnogo malih ravnih faseta, pa drugi programi ne mogu odabrati rupu kao cilindar. Prvo postavite **Krivulje** finije ako je to bitno.
:::

- Izvozi su dijela koji je na ekranu. Izvoz je isključen u sklopu; izvoz sklopa još ne postoji.
- STL, 3MF, STEP s fasetama i DXF površine su uvijek od faseta. Postavka **Krivulje** (u desnom panelu kad ništa nije odabrano) određuje koliko su fine, od 32 do 256 faseta po obrtaju. Prije izvoza STL ili 3MF za glatku štampu odaberite Fino ili Vrlo fino.
- PDF crtež koristi ugrađeni font Helvetica iz čitača. Znakove koje ne može prikazati ispisuje kao "?".

Korak po korak: [Izvoz za štampu, STEP i DXF](topic:export-files) i [Napravite list crteža](topic:drawing-pdf).

## Nespašeni rad

- PartCraft čuva kopiju za oporavak otvorenog dijela ili sklopa u ovom pregledniku ubrzo nakon svake promjene, pa pad ili zatvoreni tab ne gube rad: sljedeći put kad otvorite PartCraft pita "Oporaviti rad?". To nije spašavanje: spasite u datoteku da sačuvate rad. Vidi [Oporavak nespašenog rada](common:recover).
- Ako pokušate zatvoriti tab ili osvježiti stranicu s nespašenim izmjenama, preglednik pita "Napustiti stranicu?". To je okvir samog preglednika; PartCraft ne može promijeniti njegov tekst.
- {{ui:New}}, {{ui:Open}} i zatvaranje sklopa pitaju prije odbacivanja nespašenih izmjena.

## Na mreži i van mreže

Sve se odvija na vašem računaru: mrežni kernel (WebAssembly program) se preuzima sa aplikacijom i gradi geometriju lokalno, a datoteke se čitaju i upisuju na vaš disk. Nikakvi podaci o dijelu ne idu mrežom. Vidi [Mrežni kernel](topic:solid-kernels).

Za rad bez ikakve veze, spasite PartCraft za rad van mreže dok ste na mreži: odaberite {{ui:Save for offline}} u traci aplikacije i sačekajte dok broji ("Spašavanje 40 od 212") dok ne piše **Spremno za rad van mreže**. Spašena kopija uključuje 3D biblioteku i mrežni kernel, pa su poslije rad, spašavanje, svi izvozi i crteži dostupni van mreže. Ako piše **Nije moguće spasiti**, kliknite da pokušate ponovo na mreži. **Rad van mreže nije dostupan** znači da ovaj prozor preglednika ne može čuvati kopiju (privatni prozori i neki upravljani računari). Kad je kopija spašena, klik na **Spremno za rad van mreže** nudi {{ui:Save again (get the newest version)}} i {{ui:Remove the offline copy}}. Detalji: [Rad van mreže](common:offline).

:::online
Na mreži ste. Čak i bez spašavanja za rad van mreže, kad se PartCraft učita i čip u statusnoj traci kaže "Mrežni kernel", možete nastaviti s radom ako veza padne. Samo ne osvježavajte stranicu dok ne budete ponovo na mreži.
:::

:::offline
Van mreže ste. Ako je PartCraft već otvoren, nastavite s radom; spašavanje i izvoz i dalje rade. Ako traka aplikacije piše **Spremno za rad van mreže**, PartCraft se otvara od nule i bez veze; inače ne osvježavajte ovaj tab.
:::

## Razlike između preglednika

- **Preuzimanja.** Svaki preglednik ima svoj folder za preuzimanja i svoj način pitanja. Ako preglednik pita smije li ovaj sajt preuzimati datoteke, dozvolite; inače spašavanje i izvoz ne mogu raditi.
- **Prevlačenje** datoteke na prikaz radi u Chrome, Edge, Firefox i Safari.
- **Datoteke s telefona ili tableta.** Na iPhone i iPad, Otvori prikazuje aplikaciju Files; spašene datoteke idu u Files, Downloads. Na Androidu idu u folder Preuzimanja.

Nema razlike u sadržaju datoteka između preglednika ili operativnih sistema.
