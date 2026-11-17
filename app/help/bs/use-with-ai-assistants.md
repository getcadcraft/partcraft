---
title: Koristi PartCraft s AI asistentom
summary: Neka tvoj vlastiti AI asistent ili skripta radi s otvorenim dijelom: čita njegove elemente, parametre i masu, mijenja parametar i ponovo gradi, pokreće skriptu, izvozi i sprema. Isključeno dok ga ne uključiš.
keywords: ai, asistent, agent, mcp, protokol za kontekst modela, skripta, automatizacija, parametri, svojstva mase, stl, step, 3mf, dozvole, prekid veze, aktivnost, folderi
from: e66d3470
---

## Šta ćeš naučiti

Kako AI asistent (ili skripta koju si napisao) može pogledati dio koji imaš otvoren, promijeniti njegove parametre, pokrenuti skriptu i izvesti ga, i kako odlučuješ šta smije dirati.

PartCraft **nema vlastiti AI** i ništa ne šalje nigdje. Ti dovodiš asistenta: bilo koji program koji govori Model Context Protocol (MCP). PartCraft mu samo daje alate, a ti biraš koje.

## Uključivanje

1. Otvori {{ui:Postavke}} (zupčanik u traci aplikacije, ili {{key:Mod+,}}) i idi na karticu {{ui:PartCraft}}.
2. Pod {{ui:Asistenti}} označi **Dozvoli AI asistentima i skriptama da koriste PartCraft**. Isključeno je dok to ne učiniš.
3. Odaberi šta smije raditi. **Čitanje** je označeno na početku; ostalo označi samo kad ti zatreba.
4. Da bi mogao izvoziti i spremati u folder, odaberi {{ui:Dodaj folder…}} pod **Folderi koje smije koristiti** i izaberi folder u Studiovom dijalogu.

Asistenti se povezuju preko **CadCraft Studia** na tvom računaru: Studio pokazuje adresu i token koje nalijepiš u asistenta. Pregledač ne može otvoriti vezu za asistenta.

## Šta asistent može tražiti

| Alat | Dozvola | Šta radi |
|---|---|---|
| `part_describe`, `features_list` | Čitanje | Elementi redom, s onim što je izgrađeno i što nije, materijal, zapremina i veličina čvrstog tijela |
| `params_list` | Čitanje | Parametri i svaki broj koji jednačina može upravljati, s vrijednostima |
| `mass_properties` | Čitanje | Zapremina, površina, težište, inercija oko njega; masa kad dio ima materijal |
| `param_set` | Uređivanje | Postavlja parametar ili broj elementa i ponovo gradi. Jedan korak koji možeš poništiti |
| `script_run` | Uređivanje | Pokreće CraftScript, Lua ili Python skriptu kao što to radi radni prostor {{ui:Skripta}}: izolovano, bez datoteka i mreže. Dio se ne mijenja |
| `part_export` | Izvoz | STL, 3MF, STEP ili OpenUSD (.usdz, .usda, .usdc), kako ih piše {{ui:Datoteka}} › {{ui:Izvoz}} |
| `link_push` | Uređivanje | Ažurira model povezan iz drugog programa (vidi [Održavaj .3dm model živim](topic:live-3dm-link)) |
| `link_status` | Čitanje | Kaže je li povezani model još tu i kada je zadnji put ažuriran |
| `part_save` | Spasi | PartCraftovo vlastito {{ui:Spasi}} |
| `illustrate_export` | Izvoz | Priručnik iz radnog prostora {{ui:Ilustracija}} kao PDF ili SVG linijski crtež njegovih pogleda, kao interaktivna 3D datoteka, ili njegova uputstva kao PDF ili web stranica, kako ih pišu izbornici {{ui:Izvoz}} i {{ui:Uputstva}} radnog prostora ([Priručnici](topic:illustrate)) |

:::note
Ova verzija koristi mrežni kernel: zapremine dolaze iz trouglova (malo ispod prave zakrivljene čvrste površine), a STEP se piše poligonalno, s trouglovima umjesto tačnih površina.
:::

## Ti ostaješ na čelu

- **Svaka promjena je jedan korak poništavanja**, označen za asistenta, na primjer "Asistent: postavi l = 45". Pritisni {{key:Mod+Z}} da je vratiš.
- **Znaš kad je jedan povezan.** Dugme u traci aplikacije imenuje asistenta dok je povezan. Klikni na njega da vidiš šta smije, ili da ga **prekineš**.
- **Aktivnost.** {{ui:Postavke}} › {{ui:PartCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv; {{ui:Sačuvaj dnevnik}} čuva kopiju.
- **Folderi.** Čita i piše datoteke samo u folderima koje si dodao; {{ui:Ukloni}} odmah vraća folder.

## Bez otvaranja PartCrafta

Server datoteka CadCraft za asistente (`npx @getcadcraft/mcp`) i komandna linija `cadcraft` otvaraju `.partcraft.json` dijelove PartCraftovim vlastitim kodom i mrežnim kernelom, bez prozora: isti alati za čitanje, postavljanje parametara, CraftScript skripte, izvozi (uključujući OpenUSD) i spremanje. `cadcraft convert bracket.partcraft.json bracket.stl` gradi dio i zapisuje ga iz komandne linije. Priručnici (`.partcraft-manual.json`) izvoze se i tamo: `illustrate_export`, ili `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (dodaj `--instructions` za uputstva).

## Ako nešto ne radi

- **"needs the edit permission":** označi **Uređivanje** pod {{ui:Asistenti}}, pa pitaj ponovo.
- **"driven by the equation":** taj broj prati parametar; zamoli asistenta da postavi parametar.
- **Njegova promjena je bila pogrešna:** pritisni {{key:Mod+Z}}.

## Vidi također

- [Recepti za AI asistente](common:assistants-recipes): radni primjeri, svaki s alatima koje poziva.
