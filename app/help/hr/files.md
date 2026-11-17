---
title: Datoteke: otvaranje, spremanje i izvoz
summary: Dijelovi i sklopovi koje PartCraft otvara i sprema, svaki izvozni format i što zadržava, gdje datoteke završavaju te što se mijenja izvan mreže ili između preglednika.
keywords: otvori, spremi, izvezi, preuzmi, datoteka, partcraft.json, datoteka sklopa, stl, 3mf, step, dxf, pdf, gdje su moje datoteke, izvan mreže, spremi kao
from: e5fbc7e3
---

PartCraft radi s datotekama na vašem računalu. Nikada ne učitava dio, a nema računa ni pohrane u oblaku. Spremanje u oblak još nije dostupno.

## Što PartCraft otvara

| Datoteka | Ekstenzija | Kako |
|---|---|---|
| PartCraft dio | `.partcraft.json` | {{ui:Otvori}}, {{key:Mod+O}} ili ispustite je na 3D prikaz |
| PartCraft sklop | `.partcraft-asm.json` | Isto: PartCraft vidi koje je vrste |
| STEP tijelo | `.step`, `.stp` | Čvrsto tijelo čitano kao trokuti: [Otvorite STEP datoteku i gradite na njoj](topic:import-step) |

STL, OBJ i 3MF mreže također se otvaraju kao čvrsta tijela ([Otvorite STL, OBJ ili 3MF](topic:open-meshes)), kao i datoteke `.3dm` ([Otvorite .3dm model](topic:open-3dm-files)). DXF, IGES i vlastite datoteke dijelova drugih programa ne mogu se otvoriti (vidi [Što još nije izrađeno](topic:not-built-yet)).

Pravila pri otvaranju:

- Naziv datoteke dijela ili sklopa mora završavati s `.json`, a datoteka mora biti manja od 50 MB.
- Datoteke se provjeravaju prije prikaza. Oštećena ili uređena datoteka odbija se uz jednostavan razlog, npr. „Ovo nije PartCraft datoteka.“
- Datoteka spremljena novijim PartCraftom se odbija: „Ova datoteka je spremljena novijim PartCraftom (verzija datoteke 3); ova čita verziju 2.“ Starije datoteke se otvaraju.
- Ako dio na zaslonu ima nespremljene promjene, PartCraft prvo pita: {{ui:Odustani}}, {{ui:Odbaci promjene}} ili {{ui:Prvo spremi}}.

## Spremanje

{{ui:Spremi}} ili {{key:Mod+S}} sprema ono što je na zaslonu:

- Za dio: `<part name>.partcraft.json`, cijela povijest (skice, odnosi, kote, značajke, položaj vraćanja), odjeljak, detalj i GD&T bilješke lista crteža, te cijeli tekst svakog STEP tijela uvezenog u ranijoj verziji. Značajke koje ova verzija ne može izgraditi spremaju se nepromijenjene. Samo tijelo se ne sprema; PartCraft ga ponovno gradi iz povijesti kad se datoteka otvori.
- U sklopu: `<assembly name>.partcraft-asm.json`, s **svakim dijelom unutra**. Jedna datoteka nosi cijeli sklop, pa je možete poslati samostalno.

Spremanje je **preuzimanje**. Vaš preglednik stavlja datoteku u mapu za preuzimanja ili pita gdje da je stavi, ako ste to tako postavili. Ponovno spremanje stvara novo preuzimanje; preglednik može nazvati datoteku `Part1 (1).partcraft.json` umjesto da zamijeni staru. Preimenujte ili premjestite datoteke pomoću {{pick:mac=Findera|windows=Istraživača datoteka|linux=upravitelja datoteka}}, kako želite.

Znakovi u nazivu dijela osim slova, brojeva, razmaka, `_`, `.` i `-` pretvaraju se u `_` u nazivu datoteke.

:::tip
Većina preglednika ima postavku koja pita gdje spremiti svako preuzimanje. Uključite je ako želite izbor „Spremi kao“ svaki put: u Chromeu i Edgeu je pod Preuzimanja u postavkama; u Firefoxu pod Općenito, Datoteke i aplikacije; u Safariju pod Općenito, Lokacija za preuzimanje datoteka.
:::

Više o tome kamo idu preuzimanja i kako čuvati datoteke: [Gdje su vaše datoteke](common:your-files).

## Izvoz

Izbornik {{ui:Izvoz}} zapisuje ostale formate. Svaki je preuzimanje, nazvano prema dijelu.

| Stavka izbornika | Datoteka | Što je u njoj |
|---|---|---|
| {{ui:STL, za 3D ispis}} | `<name>.stl` | Binarni STL trokuta tijela, milimetri, **Z gore** |
| {{ui:3MF, za 3D ispis}} | `<name>.3mf` | 3MF s tijelom kao jednim objektom, milimetri, **Z gore** |
| {{ui:STEP AP242 (egzaktno tijelo)}} | `<name>.step` | Jedno egzaktno tijelo, milimetri, Z gore: okrugle plohe kao pravi cilindri, stošci, kugle i torusi. STEP za druge CAD i CAM programe |
| {{ui:STEP AP214 (egzaktno tijelo)}} | `<name>.step` | Isto egzaktno tijelo u starijoj shemi AP214 |
| {{ui:STEP (stranični, mrežna jezgra)}} | `<name>.step` | Tijelo od ravnih ploha iz mreže: **okrugle površine su mnogo malih ravnih faceta**. Milimetri, u vlastitim osima PartCrafta (Y gore). Za program koji odbija egzaktnu datoteku |
| {{ui:DXF skice ili ravne plohe}} | `<name> - <sketch>.dxf` ili `<name> - face.dxf` | DXF R12. Skica: linije, lukovi, kružnice i točke u vlastitim koordinatama skice, na slojevima PROFILE, CONSTRUCTION i POINTS. Odabrana ravna ploha: njezini obrisi kao zatvorene polilinije (okrugli bridovi kao facete) |
| {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}} | `<name> - drawing.pdf` | A3 list crteža: tri pogleda, izometrija, presjek i detalj ako su postavljeni, ukupne dimenzije, GD&T simboli, zaglavlje crteža |

:::note
{{ui:STEP AP242 (egzaktno tijelo)}} zapisuje rupe, izbočine, zaobljenja, stošce, kugle i toruse na njihovim pravim površinama, pa drugi program može odabrati rupu kao cilindar; **Krivulje** to ne mijenja. Bokovi splajnova, modelirani navoji i uvezene mreže nemaju egzaktnu površinu i ostaju ravni facete u istom tijelu; statusna traka kaže koliko ih je. {{ui:STEP (stranični, mrežna jezgra)}} zapisuje svaku okruglu plohu kao facete.
:::

- Izvozi su dijela na zaslonu. Izvoz je isključen u sklopu; izvoz sklopa još ne postoji.
- STL, 3MF, facetirani STEP i DXF ploha uvijek su od faceta. Postavka **Krivulje** (u desnom oknu kad ništa nije odabrano) određuje koliko su fini, od 32 do 256 faceta po krugu. Prije izvoza STL-a ili 3MF-a za glatki ispis odaberite Fino ili Vrlo fino.
- PDF crtež koristi ugrađeni font Helvetica čitača. Znakovi koje ne može prikazati ispisuju se kao „?“.

Korak po korak: [Izvoz za ispis, STEP i DXF](topic:export-files) i [Izrada lista crteža](topic:drawing-pdf).

## Nespremljeni rad

- PartCraft čuva kopiju za oporavak otvorenog dijela ili sklopa u ovom pregledniku nedugo nakon svake promjene, pa rušenje ili zatvorena kartica ne gube rad: sljedeći put kad otvorite PartCraft pita „Oporaviti vaš rad?“. To nije spremanje: spremite u datoteku da zadržite rad. Vidi [Oporavak nespremljenog rada](common:recover).
- Ako pokušate zatvoriti karticu ili ponovno učitati stranicu s nespremljenim promjenama, preglednik pita „Napustiti stranicu?“. To je okvir samog preglednika; PartCraft ne može promijeniti njegov tekst.
- {{ui:Novo}}, {{ui:Otvori}} i zatvaranje sklopa pitaju prije odbacivanja nespremljenih promjena.

## Na mreži i izvan mreže

Sve se odvija na vašem računalu: mrežna jezgra (WebAssembly program) preuzima se s aplikacijom i lokalno gradi geometriju, a datoteke se čitaju s diska i zapisuju na njega. Nikakvi podaci o dijelu ne idu mrežom. Vidi [Mrežna jezgra](topic:solid-kernels).

Za rad bez veze spremite PartCraft za rad izvan mreže dok ste na vezi: odaberite {{ui:Spremi za offline}} u traci aplikacije i pričekajte dok broji („Spremanje 40 od 212“) dok ne piše **Offline spreman**. Spremljena kopija uključuje 3D knjižnicu i mrežnu jezgru, pa poslije svo modeliranje, spremanje, svi izvozi i crteži rade izvan mreže. Ako piše **Nije moguće spremiti**, kliknite da pokušate ponovno dok ste na mreži; **Offline nije dostupno** znači da ovaj prozor preglednika ne može zadržati kopiju (privatni prozori i neka upravljana računala). Kad je kopija spremljena, klik na **Offline spreman** nudi {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} i {{ui:Ukloni offline kopiju}}. Detalji: [Rad izvan mreže](common:offline).

:::online
Na mreži ste. Čak i bez spremanja za rad izvan mreže, kad se PartCraft učita i čip u statusnoj traci kaže „Mrežna jezgra“, možete nastaviti raditi ako veza prekine. Samo ne ponovno učitavajte stranicu dok ne budete ponovno na mreži.
:::

:::offline
Niste na mreži. Ako je PartCraft već otvoren, nastavite raditi; spremanje i izvoz i dalje rade. Ako traka aplikacije piše **Offline spreman**, PartCraft se otvara i od početka bez veze; inače ne ponovno učitavajte ovu karticu.
:::

## Razlike između preglednika

- **Preuzimanja.** Svaki preglednik ima vlastitu mapu za preuzimanja i vlastiti način pitanja. Ako preglednik pita smije li ova stranica preuzimati datoteke, dopustite, inače spremanje i izvoz neće raditi.
- **Povlačenje i ispuštanje** datoteke na prikaz radi u Chromeu, Edgeu, Firefoxu i Safariju.
- **Datoteke s telefona ili tableta.** Na iPhoneu i iPadu Otvori prikazuje aplikaciju Datoteke; spremljene datoteke idu u Datoteke, Preuzimanja. Na Androidu idu u mapu Preuzimanja.

Nema razlike u sadržaju datoteka između preglednika ili operativnih sustava.
