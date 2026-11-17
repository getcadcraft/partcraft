---
title: Upotreba PartCraft-a s AI pomoćnikom
summary: Neka vaš vlastiti AI pomoćnik ili skripta radi s otvorenim dijelom: čita značajke, parametre i masu, mijenja parametar i ponovno gradi, pokreće skriptu, izvozi i sprema. Isključeno dok ga ne uključite.
keywords: ai, pomoćnik, agent, mcp, model context protocol, skripta, automatizacija, parametri, svojstva mase, stl, step, 3mf, dozvole, odspajanje, aktivnost, mape
from: e66d3470
---

## Što ćete naučiti

Kako pomoćnik s umjetnom inteligencijom (ili skriptu koju ste sami napisali) može pogledati dio koji imate otvoren, promijeniti njegove parametre, pokrenuti skriptu i izvesti ga, te kako odlučujete što smije dirati.

PartCraft **nema vlastiti AI** i ništa nigdje ne šalje. Vi dovodite pomoćnika: bilo koji program koji govori Model Context Protocol (MCP). PartCraft mu daje samo alate, a vi birate koje.

## Uključivanje

1. Otvorite {{ui:Postavke}} (zupčanik na traci aplikacije ili {{key:Mod+,}}) i idite na karticu {{ui:PartCraft}}.
2. Pod {{ui:Pomoćnici}} označite **Neka AI pomoćnici i skripte koriste PartCraft**. Dok to ne učinite, isključeno je.
3. Odaberite što smije raditi. **Čitanje** je na početku označeno; ostalo označite samo kad vam treba.
4. Da mu dopustite izvoz i spremanje u mapu, odaberite {{ui:Dodaj mapu…}} pod **Mape koje smije koristiti** i izaberite mapu u dijaloškom okviru Studija.

Pomoćnici se povezuju putem **CadCraft Studio** na vašem računalu: Studio prikazuje adresu i token koje zalijepite u pomoćnika. Preglednik ne može otvoriti vezu za pomoćnika.

## Što pomoćnik može tražiti

| Alat | Dozvola | Što radi |
|---|---|---|
| `part_describe`, `features_list` | Čitanje | Značajke redom, s time što je izgrađeno, a što nije, materijal, volumen i veličinu tijela |
| `params_list` | Čitanje | Parametri i svaki broj koji može pokretati jednadžbu, s njihovim vrijednostima |
| `mass_properties` | Čitanje | Volumen, površina, središte mase, moment tromosti oko njega; masa kad dio ima materijal |
| `param_set` | Uređivanje | Postavlja parametar ili broj značajke i ponovno gradi. Jedan korak koji možete poništiti |
| `script_run` | Uređivanje | Pokreće skriptu CraftScript, Lua ili Python na isti način kao radni prostor {{ui:Skripta}}: izolirano, bez datoteka i bez mreže. Dio se ne mijenja |
| `part_export` | Izvoz | STL, 3MF, STEP ili OpenUSD (.usdz, .usda, .usdc), onako kako ih zapisuju {{ui:Datoteka}} › {{ui:Izvoz}} |
| `link_push` | Uređivanje | Ažurira model povezan iz drugog programa (vidi [Držite .3dm model ažurnim](topic:live-3dm-link)) |
| `link_status` | Čitanje | Kaže je li povezani model još tu i kada je zadnji put ažuriran |
| `part_save` | Spremanje | Vlastito {{ui:Spremi}} u PartCraft-u |
| `illustrate_export` | Izvoz | Priručnik iz radnog prostora Illustrate kao PDF ili SVG linijski crtež njegovih pogleda, kao interaktivna 3D datoteka, ili njegove upute kao PDF ili web stranica, onako kako ih zapisuju izbornici radnog prostora {{ui:Izvoz}} i {{ui:Upute}} ([Priručnici](topic:illustrate)) |

:::note
Ova verzija koristi mrežnu jezgru: volumeni dolaze iz trokuta (malo manje od pravog zakrivljenog tijela), a STEP se zapisuje stranično, s trokutima umjesto točnih ploha.
:::

## Vi ostajete u kontroli

- **Svaka promjena je jedan korak poništavanja**, označen za pomoćnika, na primjer „Pomoćnik: postavi l = 45“. Pritisnite {{key:Mod+Z}} da je poništite.
- **Znate kada je povezan.** Gumb u traci aplikacije imenuje pomoćnika dok je povezan. Kliknite ga da vidite što smije raditi ili da ga **odspojite**.
- **Aktivnost.** {{ui:Postavke}} › {{ui:PartCraft}} › {{ui:Pomoćnici}} › {{ui:Aktivnost}} popisuje svaki poziv; {{ui:Spremi zapisnik}} čuva kopiju.
- **Mape.** Čita i zapisuje datoteke samo u mapama koje ste dodali; {{ui:Ukloni}} odmah oduzima mapu.

## Bez otvaranja PartCraft-a

CadCraft poslužitelj datoteka za pomoćnike (`npx @getcadcraft/mcp`) i naredbeni redak `cadcraft` otvaraju dijelove `.partcraft.json` s vlastitim kodom PartCraft-a i mrežnom jezgrom, bez prozora: isti alati za čitanje, postavljanje parametara, CraftScript skripte, izvoz (i OpenUSD) i spremanje. `cadcraft convert bracket.partcraft.json bracket.stl` izgradi dio i zapiše ga iz naredbenog retka. Priručnici (`.partcraft-manual.json`) se tu također izvoze: `illustrate_export`, ili `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (dodajte `--instructions` za upute).

## Ako nešto ne radi

- **„treba dozvolu za uređivanje“:** označite **Uređivanje** pod {{ui:Pomoćnici}}, zatim ponovno zatražite.
- **„upravlja jednadžba“:** taj broj slijedi parametar; umjesto toga zatražite od pomoćnika da postavi parametar.
- **Njegova promjena je bila pogrešna:** pritisnite {{key:Mod+Z}}.

## Vidi također

- [Recepti za AI pomoćnike](common:assistants-recipes): primjeri s postupkom, svaki s alatima koje poziva.
