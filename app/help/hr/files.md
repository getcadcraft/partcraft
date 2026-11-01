---
title: Datoteke: otvaranje, spremanje i izvoz
summary: Datoteke dijelova i sklopova koje PartCraft otvara i sprema, svaki izvozni format i što čuva, kamo idu datoteke te što se mijenja offline ili među preglednicima.
keywords: otvaranje, spremanje, izvoz, preuzimanje, datoteka, partcraft.json, datoteka sklopa, stl, 3mf, step, dxf, pdf, gdje su moje datoteke, offline, spremi kao
from: c15c2c48
---

PartCraft radi s datotekama na vašem računalu. Nikada ne šalje dio na poslužitelj, a nema ni računa ni pohrane u oblaku. Spremanje u oblak još nije dostupno.

## Što PartCraft otvara

| Datoteka | Nastavak | Kako |
|---|---|---|
| PartCraft dio | `.partcraft.json` | {{ui:Otvori}}, {{key:Mod+O}} ili ispuštanje na 3D prikaz |
| PartCraft sklop | `.partcraft-asm.json` | Isto: PartCraft prepoznaje o kojoj je vrsti riječ |
| STEP tijelo | `.step`, `.stp` | Puno tijelo pročitano kao trokuti: [Otvorite STEP datoteku i gradite na njoj](topic:import-step) |

STL, OBJ i 3MF mreže također se otvaraju kao puna tijela ([Otvorite STL, OBJ ili 3MF](topic:open-meshes)), kao i `.3dm` datoteke ([Otvorite .3dm model](topic:open-3dm-files)). DXF, IGES i vlastite datoteke dijelova drugih programa ne mogu se otvoriti (pogledajte [Što još nije izrađeno](topic:not-built-yet)).

Pravila pri otvaranju:

- Ime datoteke dijela ili sklopa mora završavati na `.json`, a datoteka mora biti manja od 50 MB.
- Datoteke se provjeravaju prije nego što se išta prikaže. Oštećena ili ručno mijenjana datoteka odbija se s običnim razlogom, na primjer „Ovo nije PartCraft datoteka.“
- Datoteka koju je spremio noviji PartCraft odbija se: „Ovu datoteku spremio je noviji PartCraft (verzija datoteke 3); ovaj čita verziju 2.“ Starije datoteke se otvaraju.
- Ako dio na zaslonu ima nespremljene promjene, PartCraft prvo pita: {{ui:Odustani}}, {{ui:Odbaci promjene}} ili {{ui:Prvo spremi}}.

## Spremanje

{{ui:Spremi}} ili {{key:Mod+S}} sprema ono što je na zaslonu:

- Za dio: `<naziv dijela>.partcraft.json`, cijela povijest (skice, odnosi, kote, značajke, položaj vraćanja unatrag), bilješke presjeka, detalja i GD&T-a lista crteža te puni tekst svakog STEP tijela uvezenog u ranijoj verziji. Značajke koje ova verzija ne može izgraditi spremaju se natrag nepromijenjene. Samo tijelo se ne pohranjuje; PartCraft ga ponovno gradi iz povijesti kad se datoteka otvori.
- U sklopu: `<naziv sklopa>.partcraft-asm.json`, sa **svakim dijelom unutar njega**. Jedna datoteka nosi cijeli sklop, pa je možete poslati samu.

Spremanje je **preuzimanje**. Vaš preglednik stavlja datoteku u svoju mapu preuzimanja ili pita gdje je staviti ako je tako postavljen. Ponovno spremanje stvara novo preuzimanje; preglednik ga može nazvati `Part1 (1).partcraft.json` umjesto da zamijeni staru. Preimenujte ili premještajte datoteke u {{pick:mac=Finderu|windows=Istraživaču datoteka|linux=upravitelju datoteka}} kako želite.

Znakovi koji nisu slova, znamenke, razmaci, `_`, `.` i `-` u nazivu dijela postaju `_` u imenu datoteke.

:::tip
Većina preglednika ima postavku za pitanje gdje spremiti svako preuzimanje. Uključite je ako želite izbor „Spremi kao“ svaki put: u Chromeu i Edgeu je pod Preuzimanja u postavkama; u Firefoxu pod Općenito, Datoteke i aplikacije; u Safariju pod Općenito, Lokacija za preuzimanje datoteka.
:::

Više o tome kamo idu preuzimanja i kako sigurno čuvati datoteke: [Kamo idu vaše datoteke](common:your-files).

## Izvoz

Izbornik {{ui:Izvezi}} zapisuje druge formate. Svaki je preuzimanje, imenovano prema dijelu.

| Stavka izbornika | Datoteka | Što sadrži |
|---|---|---|
| {{ui:STL, za 3D ispis}} | `<naziv>.stl` | Binarni STL trokuta tijela, milimetri, **Z prema gore** |
| {{ui:3MF, za 3D ispis}} | `<naziv>.3mf` | 3MF s tijelom kao jednim objektom, milimetri, **Z prema gore** |
| {{ui:STEP AP242 (egzaktno tijelo)}} | `<naziv>.step` | U ovoj verziji još nije izrađeno (zasivljeno): treba egzaktnu jezgru |
| {{ui:STEP AP214 (egzaktno tijelo)}} | `<naziv>.step` | U ovoj verziji još nije izrađeno (zasivljeno) |
| {{ui:STEP (stranični, mrežna jezgra)}} | `<naziv>.step` | Tijelo od ravnih ploha iz mreže: **okrugle površine su mnogo malih ravnih stranica**. Milimetri, u PartCraftovim vlastitim osima (Y prema gore). STEP koji u ovoj verziji treba koristiti za druge CAD programe |
| {{ui:DXF skice ili ravne plohe}} | `<naziv> - <skica>.dxf` ili `<naziv> - face.dxf` | DXF R12. Skica: linije, lukovi, kružnice i točke u koordinatama same skice, na slojevima PROFILE, CONSTRUCTION i POINTS. Odabrana ravna ploha: njezini obrisi kao zatvorene polilinije (okrugli bridovi kao njihove stranice) |
| {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}} | `<naziv> - drawing.pdf` | List crteža A3: tri pogleda, izometrija, presjek i detalj ako su zadani, ukupne mjere, GD&T simboli, zaglavlje |

:::note
{{ui:STEP AP242 (egzaktno tijelo)}} i {{ui:STEP AP214 (egzaktno tijelo)}} u ovoj verziji još nisu izrađeni: koristite {{ui:STEP (stranični, mrežna jezgra)}}. Ima ispravan oblik i obujam, ali je svaka okrugla ploha mnogo ravnih stranica, pa drugi programi ne mogu odabrati provrt kao valjak. Prvo postavite **Krivulje** finije ako je to važno.
:::

- Izvozi se odnose na dio na zaslonu. Izvoz je isključen u sklopu; izvoza sklopa još nema.
- STL, 3MF, stranični STEP i DXF plohe uvijek se sastoje od stranica. Postavka **Krivulje** (u desnoj ploči kad ništa nije odabrano) određuje koliko su fine, od 32 do 256 stranica po okretaju. Prije izvoza STL-a ili 3MF-a za gladak ispis odaberite Fino ili Vrlo fino.
- PDF crtež koristi ugrađeni font Helvetica čitača. Znakovi koje ne može prikazati ispisuju se kao „?“.

Korak po korak: [Izvoz za ispis, STEP i DXF](topic:export-files) i [Izradite list crteža](topic:drawing-pdf).

## Nespremljen rad

- PartCraft trenutak nakon svake promjene čuva kopiju za oporavak otvorenog dijela ili sklopa u ovom pregledniku, pa ga rušenje ili zatvorena kartica ne gubi: sljedeći put kad otvorite PartCraft pita „Oporaviti svoj rad?“. To nije spremanje: spremite u datoteku da zadržite svoj rad. Pogledajte [Oporavite nespremljeni rad](common:recover).
- Ako pokušate zatvoriti karticu ili osvježiti stranicu s nespremljenim promjenama, preglednik pita „Napustiti web-mjesto?“. To je okvir samog preglednika; PartCraft ne može promijeniti njegov tekst.
- {{ui:Novo}}, {{ui:Otvori}} i zatvaranje sklopa pitaju prije odbacivanja nespremljenih promjena.

## Online i offline

Sve se događa na vašem računalu: mrežna jezgra (WebAssembly program) preuzima se s aplikacijom i gradi geometriju lokalno, a datoteke se čitaju s vašeg diska i zapisuju na njega. Podaci o dijelu ne putuju mrežom. Pogledajte [Mrežna jezgra](topic:solid-kernels).

Za rad bez ikakve veze spremite PartCraft za offline uporabu dok ste online: odaberite {{ui:Spremi za offline}} u traci aplikacije i pričekajte dok broji („Spremanje 40 od 212“) dok ne napiše **Spremno za offline**. Spremljena kopija uključuje 3D knjižnicu i mrežnu jezgru, pa nakon toga modeliranje, spremanje, svaki izvoz i crteži rade offline. Ako piše **Spremanje nije uspjelo**, kliknite ga da pokušate ponovno dok ste online; **Offline nije dostupan** znači da ovaj prozor preglednika ne može čuvati kopiju (privatni prozori i neka upravljana računala). Kad je kopija spremljena, klik na **Spremno za offline** nudi {{ui:Spremi ponovno (preuzmi najnoviju verziju)}} i {{ui:Ukloni offline kopiju}}. Pojedinosti: [Rad offline](common:offline).

:::online
Online ste. Čak i bez spremanja za offline uporabu, kad se PartCraft učita i oznaka u statusnoj traci kaže „Mrežna jezgra“, možete nastaviti raditi ako veza ispadne. Samo ne osvježavajte stranicu dok se ponovno ne spojite.
:::

:::offline
Offline ste. Ako je PartCraft već otvoren, nastavite raditi; spremanje i izvoz i dalje rade. Ako traka aplikacije piše **Spremno za offline**, PartCraft se otvara od nule i bez veze; inače ne osvježavajte ovu karticu.
:::

## Razlike među preglednicima

- **Preuzimanja.** Svaki preglednik ima vlastitu mapu preuzimanja i vlastiti način pitanja. Ako preglednik pita smije li ova stranica preuzimati datoteke, dopustite, inače spremanje i izvoz ne mogu raditi.
- **Povuci i ispusti** datoteke na prikaz radi u Chromeu, Edgeu, Firefoxu i Safariju.
- **Datoteke s telefona ili tableta.** Na iPhoneu i iPadu Otvori prikazuje aplikaciju Datoteke; spremljene datoteke idu u Datoteke, Preuzimanja. Na Androidu idu u mapu Preuzimanja.

Nema razlike u tome što datoteke sadrže među preglednicima ili operacijskim sustavima.
