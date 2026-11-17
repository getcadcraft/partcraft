---
title: Koristi PartCraft sa AI asistentom
summary: Dozvoli sopstvenom AI asistentu ili skripti da radi sa otvorenim delom: da čita njegove elemente, parametre i masu, promeni parametar i ponovo izgradi, pokrene skriptu, izveze i sačuva. Isključeno dok ga ne uključiš.
keywords: ai, asistent, agent, mcp, model context protocol, skripta, automatizacija, parametri, osobine mase, stl, step, 3mf, dozvole, prekid veze, aktivnost, fascikle
from: e66d3470
---

## Šta ćeš naučiti

Kako AI asistent (ili skriptu koju si napisao) može da pogleda deo koji imaš otvoren, promeni njegove parametre, pokrene skriptu i izveze ga, i kako ti odlučuješ šta sme da dira.

PartCraft **nema sopstveni AI** i ništa ne šalje nigde. Ti dovodiš asistenta: bilo koji program koji podržava Model Context Protocol (MCP). PartCraft mu samo daje alate, a ti biraš koje.

## Uključivanje

1. Otvori {{ui:Podešavanja}} (zupčanik u traci aplikacije, ili {{key:Mod+,}}) i idi na karticu {{ui:PartCraft}}.
2. Pod {{ui:Asistenti}}, štikliraj **Dozvoli AI asistentima i skriptama da koriste PartCraft**. Isključeno je dok to ne uradiš.
3. Izaberi šta sme da radi. **Čitanje** je štiklirano na početku; štikliraj ostalo samo kad ti treba.
4. Da bi mogao da izvozi i čuva u fasciklu, izaberi {{ui:Dodaj fasciklu…}} pod **Fascikle koje sme da koristi** i izaberi fasciklu u Studijevom dijalogu.

Asistenti se povezuju preko **CadCraft Studio** na tvom računaru: Studio prikazuje adresu i token koje treba nalepiti u asistenta. Kartica pregledača ne može da otvori vezu za asistenta.

## Šta asistent može da traži

| Alat | Dozvola | Šta radi |
|---|---|---|
| `part_describe`, `features_list` | Čitanje | Elementi redom sa onim što je izgrađeno i što nije, materijal, zapremina čvrstog tela i veličina |
| `params_list` | Čitanje | Parametri i svaki broj koji može da pokreće jednačina, sa njihovim vrednostima |
| `mass_properties` | Čitanje | Zapremina, površina, težište, inercija oko njega; masa kad deo ima materijal |
| `param_set` | Izmena | Postavlja parametar ili broj elementa i ponovo gradi. Jedan korak koji možeš da opozoveš |
| `script_run` | Izmena | Pokreće CraftScript, Lua ili Python skriptu kao što to radi radni prostor {{ui:Skripta}}: zatvoreno, bez datoteka i bez mreže. Deo se ne menja |
| `part_export` | Izvoz | STL, 3MF, STEP ili OpenUSD (.usdz, .usda, .usdc), onako kako ih pišu {{ui:Datoteka}} › {{ui:Izvezi}} |
| `link_push` | Izmena | Ažurira model povezan iz drugog programa (vidi [Drži .3dm model ažurnim](topic:live-3dm-link)) |
| `link_status` | Čitanje | Kaže da li je povezani model i dalje tu i kada je poslednji put ažuriran |
| `part_save` | Čuvanje | PartCraft-ovo {{ui:Sačuvaj}} |
| `illustrate_export` | Izvoz | Uputstvo iz radnog prostora {{ui:Ilustracija}} kao PDF ili SVG linijski crtež njegovih pogleda, kao interaktivna 3D datoteka, ili njegova uputstva kao PDF ili web stranica, onako kako ih pišu meniji {{ui:Izvezi}} i {{ui:Uputstva}} radnog prostora ([Uputstva](topic:illustrate)) |

:::note
Ova verzija koristi kernel zasnovan na mreži: zapremine dolaze iz trouglova (malo manje od prave zakrivljene čvrste površine), a STEP se piše kao facetiran, sa trouglovima umesto tačnih površina.
:::

## Ti ostaješ u kontroli

- **Svaka izmena je jedan korak opozivanja**, označen za asistenta, na primer „Asistent: postavi l = 45”. Pritisni {{key:Mod+Z}} da je vratiš.
- **Znaš kad je povezan.** Dugme u traci aplikacije imenuje asistenta dok je povezan. Klikni na njega da vidiš šta sme, ili da ga **Prekineš vezu**.
- **Aktivnost.** {{ui:Podešavanja}} › {{ui:PartCraft}} › {{ui:Asistenti}} › {{ui:Aktivnost}} navodi svaki poziv; {{ui:Sačuvaj dnevnik}} čuva kopiju.
- **Fascikle.** Asistent čita i piše datoteke samo u fasciklama koje si dodao; {{ui:Ukloni}} oduzima fasciklu odmah.

## Bez otvaranja PartCraft-a

Server datoteka za asistente (`npx @getcadcraft/mcp`) i komandna linija `cadcraft` otvaraju `.partcraft.json` delove PartCraft-ovim sopstvenim kodom i kernelom zasnovanim na mreži, bez prozora: iste alate za čitanje, postavljanje parametara, CraftScript skripte, izvoze (i OpenUSD) i čuvanje. `cadcraft convert bracket.partcraft.json bracket.stl` gradi deo i upisuje ga iz komandne linije. Uputstva (`.partcraft-manual.json`) se takođe izvoze tamo: `illustrate_export`, ili `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (dodaj `--instructions` za uputstva).

## Ako nešto ne radi

- **„potrebna je dozvola za izmenu”:** štikliraj **Izmena** pod {{ui:Asistenti}}, zatim ponovo zatraži.
- **„pokreće jednačina”:** taj broj prati parametar; zatraži od asistenta da postavi parametar.
- **Njegova izmena je bila pogrešna:** pritisni {{key:Mod+Z}}.

## Vidi i

- [Recepti za AI asistente](common:assistants-recipes): radni primeri, svaki sa alatima koje poziva.
