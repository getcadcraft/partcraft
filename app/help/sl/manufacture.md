---
title: Izdelajte poti orodja in G-kodo (Izdelava)
summary: Nastavite surovec in izhodišče obdelave, izberite orodja, dodajte operacije ploskve, žepa, konture, vrtanja in posnetja z izbiranjem ploskev, dokončajte celoten model v 3D (vzporedno, grebenasto), simulirajte surovec proti modelu zaradi zarez in časa cikla ter prenesite G-kodo iz enega od treh vgrajenih postprocesorjev ali iz enega, ki ga uredite sami.
keywords: točni STEP, STEP za delavnico, delovne koordinate, predaja CAM, vzporedno, grebenasto, 3D dokončanje, dokončanje, kroglasto glodalo, knjižnica orodij, uredi post, po meri, urejevalnik postprocesorja, prilagodljivo, prilagodljivo odrezovanje, konstantna obremenitev, trohoidalno, hsm, obdelava pri visoki hitrosti, izdelava, CAM, pot orodja, G-koda, NC, CNC, glodalo, glodanje, žep, kontura, profil, planiranje, vrtanje, peck, G83, G81, G73, posnetje, surovec, delni odmik, G54, postprocesor, GRBL, LinuxCNC, hitrosti in posmiki, simulacija, zareza, čas cikla
from: beeb29aa
---

Delovno okolje Izdelava spremeni del v poti orodja za tritrosni glodalni stroj in jih zapiše kot G-kodo. Večina operacij je **2.5-osnih**: orodje ostane navpično, stene se režejo naravnost navzdol, dna pa ravno. **Vzporedno** in **Grebenasto** dokončata ukrivljene ploskve v 3D (glejte [3D dokončanje](topic:finish-3d)); orodje še vedno ostane navpično (tri osi, brez nagibanja). Deluje na imenovanih ploskvah, ki jih jedro mreže da delu (glejte [Jedro mreže](topic:solid-kernels)).

Laboratorijska različica: vsak program preverite v simulatorju svojega krmilnika in ga najprej zaženite v zraku nad surovcem.

## Nastavitev

1. V preklopniku delovnih okolij izberite **Izdelava**, nato {{ui:Nova postavitev}}.
2. Na zavihku **Nastavitev** izberite:
   - **Os orodja (+Z)**: v katero smer kaže orodje v del. Svetovni +Y (navzgor v PartCraftu) je privzet; stroj X je nato svetovni X, stroj Y pa svetovni −Z.
   - **Izhodišče obdelave (G54)**: vogal ali središče surovca, zgoraj ali spodaj, zgornje središče modela ali izhodišče modela.
   - **Surovec**: škatla ali valj, bodisi model plus odmiki (stranice, zgoraj, spodaj) bodisi fiksna velikost.
   - **Material** (nastavi začetne hitrosti in posmike), **postprocesor** (krmilnik), največjo hitrost vretena stroja, hitrost hitrega premika in čas menjave orodja, hladilo ter številko programa.

## Orodja

Zavihek **Orodja** hrani knjižnico: ravna, kroglasta in zaobljena končna glodala, svedre, posnemalna glodala in planirna glodala, vsako s številko T, premerom, številom zob in dolžino rezalnega dela (ter polmerom vogala, kotom konice ali posnetja, kjer veljajo).

Moja orodja lahko shranite v brskalnik in jih prenesete med računalniki kot datoteko: glejte [Knjižnica orodij](topic:tool-library).

Hitrost vretena in posmik prideta iz materiala: n = 1000 × rezalna hitrost / (π × premer), posmik = n × število zob × obremenitev zoba (svedri: n × posmik na obrat). Števila so previdne začetne vrednosti iz objavljenih razponov, niso uglašena za vaš stroj; vpišite rezalno hitrost, obremenitev zoba, vrt/min ali posmik svojega proizvajalca orodij, da jih prepišete. Ko hitrost preseže največjo hitrost stroja, se zadrži pri njej, posmik pa ji sledi in ohranja obremenitev zoba.

## Dodajte operacije

Vsak gumb v orodni vrstici doda operacijo, kjer pa je potrebna geometrija, se začne izbiranje: kliknite ploskve ali robove v pogledu (ponovni klik jih odstrani), nato {{ui:Izbiranje končano}} ali {{key:Esc}}.

| Operacija | Izberite | Kaj naredi |
|---|---|---|
| {{ui:Ploskev}} | nič | Cikcak prehodi čez celoten surovec, mimo njegovih robov, do zgornje strani modela |
| {{ui:Žep}} | ravno dno, okrogla izvrtina ali zaprta veriga robov | Odstrani območje s prehodi odmika od znotraj navzven, na vsakem koraku globine; otoki (ploskve, ki stojijo navzgor znotraj dna) ostanejo; dno, odprto na vse strani (nič višjega zunaj), se očisti do roba surovca |
| {{ui:Prilagodljivo}} | enako kot Žep | Odstrani isto območje v prehodih, od katerih vsak reže nastavljeno širino (**Angažma**, delež premera), tako da rezilo nikoli ne reže polne širine utora, tudi v kotih; vstopi s spiralo in dokonča stene na vsaki ravni. Ozki rezi dovolijo globlji korak in višji posmik |
| {{ui:Kontura}} | ravna ploskev (njen obris), okrogla ploskev ali robovi | Sledi obrisu, odmaknjenemu za polmer orodja, zunaj ali znotraj, z loki vstopa in izstopa ter izbirnimi jezički |
| {{ui:Vrtanje}} | izvrtine (kliknite steno izvrtine ali njen rob) | Zvrta vsako izvrtino z vgrajenim ciklom: zobljenje (G83), vrtanje (G81) ali lomljenje odrezka (G73); ali podajte premer, da zvrta vse izvrtine te velikosti |
| {{ui:Posnetje}} | obris ali robovi ploskve | Požene posnemalno glodalo vzdolž roba, da reže širino, ki jo nastavite |
| {{ui:Vzporedno}} | nič (ves model) | 3D dokončanje z vzporednimi črtami pod poljubnim kotom, ki sledijo površini s kroglastim, zaobljenim ali ravnim končnim glodalom. Glejte [3D dokončanje](topic:finish-3d) |
| {{ui:Grebenasto}} | nič (ves model) | 3D dokončanje v prehodih, oddaljenih za nastavljeno razdaljo po površini, tako da ima greben med njimi višino, ki jo zahtevate |

Izberite operacijo v seznamu, da spremenite njeno orodje, višine (varnostna, umik, višina posmika, vrh, dno), korak globine, korak širine, surovec, ki naj ostane, končni prehod, vstop (spirala, rampa ali potopitev), sopotno glodanje, jezičke ali cikel. {{ui:Gor}} in {{ui:Dol}} spremenita vrstni red, {{ui:Zaduši}} jo izpusti, {{ui:Izbriši}} jo odstrani. Vse je v zgodovini razveljavitve in shranjeno v datoteki dela.

Korak širine žepa je največ polovica premera orodja, zato vsaka točka njegovega dna leži znotraj enega polmera orodja od kakšnega prehoda. Notranji koti ohranijo polmer orodja.

**Prilagodljivo odrezovanje** ohranja angažma rezila blizu ene vrednosti. Angažma 0.15 premera je kot angažmana približno 46°: lok roba rezila v materialu. Odmični žep nasprotno reže polno širino pri prvem prehodu in se v vsakem notranjem kotu ovije bolj. Med prehodi orodje ostane spuščeno, kjer se premika skozi že odrezan zrak, drugod pa se dvigne in spusti v že odrezanem zraku. Prehodi se izračunajo na fini mreži čez območje (celice približno dvanajstina polmera orodja), zato lahko angažma preseže nastavljeno za približno eno celico; stene so dokončane natančno. Veliko odprto območje naredi dolg program z mnogo kratkimi premiki.

## Simulirajte

Poti orodja se izdelajo znova po vsaki spremembi (tudi dela). {{ui:Simuliraj}} prikaže tudi surovec, ki ostane po celotnem programu. Podokno prikazuje:

- **Čas cikla**: posmični premiki z njihovim posmikom, hitri premiki kot ravne črte pri hitrosti hitrega premika nastavitve, plus čas menjave orodja. Pravi stroji pospešujejo, zato trajajo dlje.
- **Zareze**: mesta, kjer je orodje šlo več kot 0.02 mm pod površino dela. Rdeče oznake jih prikažejo v pogledu.
- **Surovec, ki ostane na delu**.

Surovec je višinska karta zgornje strani (Z-karta), zato ne more prikazati podrezov. Povlecite **Predvajanje**, da premaknete orodje vzdolž programa. V pogledu so posmični premiki polni, hitri pa črtkani, ena barva na operacijo.

Z vključenim **Prikaži simulirani surovec** je surovec obarvan glede na model, celico po celico: **zelena**, kjer je na modelu (znotraj 0.02 mm), **rdeča**, kjer je orodje zarezalo v model, in kjer surovec ostane na modelu, **rumena** za tanko kožo, **oranžna** za več, z prehodom v **sivo** neobdelanega surovca pri 1 mm ali več. Barve se naredijo znova ob vsaki spremembi iz iste višinske karte kot številke v podoknu, zato se zelena in rdeča ujemata z vrstico Zareze. Posnetje namerno reže v model in je ob robu prikazano rdeče.

## Postprocesiranje G-kode

Izberite krmilnik pod **Postprocesor** in pritisnite {{ui:Prenesi G-kodo}} (ali {{ui:Postprocesor}} na orodni vrstici):

| Krmilnik | Datoteka | Opombe |
|---|---|---|
| ISO v slogu Fanuc | .nc | %, številka O, številke vrstic, T M6 z G43 H, vgrajeni cikli |
| GRBL | .nc | Brez menjalnika orodij in vgrajenih ciklov: menjava orodja se ustavi z M0, vrtanje je zapisano kot navadni premiki |
| LinuxCNC | .ngc | T M6 z G43 H, vgrajeni cikli, M2 |
| Po meri | poljubna | Postprocesor, ki ste ga napisali ali spremenili: {{ui:Uredi post…}}, {{ui:Nov post…}}, {{ui:Uvozi datoteko posta…}} |

Vsaka datoteka se začne s komentarji za program, surovec, delni odmik in orodja. Koordinate so v milimetrih s tremi decimalkami. {{ui:Pot orodja CSV}} in {{ui:Pot orodja JSON}} izvozita same premike.

**Pred rezanjem izhod preverite v simulatorju svojega stroja in ga najprej zaženite v zraku nad surovcem.** Trije vgrajeni postprocesorji so izhodišča, ki sledijo dokumentiranemu obnašanju krmilnikov; niso preizkušeni na nobenem določenem stroju. Postprocesor, ki ga spremenite, morate dokazati sami. Kako ga napisati: [Postprocesorji](topic:post-processors).

## Točni STEP za delavnico

Pod gumbi G-kode na zavihku **Operacije** {{ui:Točni STEP (delovne koordinate)}} prenese `<del>-work.step`: del kot točno telo (prave valje za izvrtine in čepe, prave krožnice za njihove robove) z izhodiščem v izhodišču obdelave te postavitve in Z vzdolž osi orodja. To so koordinate, ki jih uporablja G-koda, zato delavniški lastni CAM program ali preverjevalnik poravna model s programom, ne da bi ga premaknil. Datoteka vsebuje samo del, ne surovca ali poti orodja.

{{ui:Izvoz}} › {{ui:STEP AP242 (točno telo)}} zapiše isto telo v položaju dela samem (Z navzgor): glejte [Izvoz za tiskanje, STEP in DXF](topic:export-files#for-other-cad-programs-step).

## Omejitve

- Žepi, konture, vrtanje in posnetja so 2.5-osni. Ukrivljene ploskve se lahko dokončajo v 3D ([vzporedno in grebenasto](topic:finish-3d)), ne pa grobo v 3D (stožec ostane kot stopnice, dokler ga ne dokončate), in ni obdelave preostankov. Prilagodljivo odrezovanje je 2D (ravna dna).
- Samo tri osi: brez nagibanja, brez struženja, brez pregleda.
- Držala in držalni nastavki se ne preverjajo za trke; opozorilo se pojavi, ko je rez globlji od dolžine rezalnega dela.
- Hitrosti in posmiki so začetne vrednosti. Postprocesor je urejljivo besedilo, vendar le določa, kako se premiki zapišejo; ne more spremeniti poti orodja, dodati osi ali poznati vašega stroja ([Postprocesorji](topic:post-processors) navaja, česa ne zmore).

## Pošljite program na stroj

V CadCraft Studiu na namizju, z nastavljenim strojem v Studiu, se **Pošlji na stroj…** prikaže ob **Prenesi G-kodo** in naloži isti program na stroj v vašem omrežju. Nikoli se ne zažene iz PartCraft: zaženite ga na stroju, ko je jasno. V brskalniku gumb ni prikazan (spletna stran ne doseže stroja v vašem omrežju): namesto tega prenesite program.
