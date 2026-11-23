---
title: Ustvarjanje poti orodja in G-kode (Izdelava)
summary: Nastavite surovec in ničelno točko obdelovanca, izberite orodja, dodajte operacije ploskve, žepa, konture, vrtanja in posnetja z izbiro ploskev, dokončajte celoten model v 3D (vzporedno, grebenasto), simulirajte surovec proti modelu za vdore in čas cikla ter prenesite G-kodo iz enega od treh vgrajenih postprocesorjev ali iz tistega, ki ga uredite sami.
keywords: natančen STEP, STEP za delavnico, koordinate obdelovanca, predaja CAM, vzporedno, grebenasto, 3d dokončevanje, dokončevanje, kroglično rezkalo, knjižnica orodij, uredi post, post po meri, urejevalnik postprocesorjev, prilagodljivo, prilagodljivo čiščenje, konstantno zaseganje, trohoidno, hsm, visokohitrostna obdelava, izdelava, CAM, pot orodja, G-koda, NC, CNC, rezkalnik, rezkanje, žep, kontura, profil, planiranje, vrtanje, peck, G83, G81, G73, posnetje, surovec, ničelna točka obdelovanca, G54, postprocesor, GRBL, LinuxCNC, posmik in hitrosti, simulacija, vdor, čas cikla
from: f8a03be8
---

Delovno okolje Izdelava spremeni del v poti orodja in jih zapiše kot G-kodo. Večina operacij je **2.5-osno** rezkanje: orodje ostane navpično, stene se režejo navpično navzdol, dna pa so ravna. **3D grobo** in **Ostanki** obdelata ukrivljene dele v 3D ([3D grobo rezkanje in obdelava ostankov](topic:rough-3d)); **Vzporedno** in **Grebenasto** jih dokončata ([3D dokončevanje](topic:finish-3d)). Na stroju z rotacijskimi osmi ima lahko katera koli operacija nagnjeno orodje, dve operaciji pa med rezanjem premikata rotacijske osi ([4- in 5-osna obdelava](topic:multi-axis)). Za struge sta na voljo operaciji struženja ([Struženje](topic:turning)) in za tipalo za dotik ([Tipanje](topic:probing)). Deluje na imenovanih ploskvah, ki jih jedro mreže poda za del (glejte [Jedro mreže](topic:solid-kernels)).

Laboratorijska različica: preverite vsak program v simulatorju svojega krmilnika in ga najprej zaženite v zraku nad surovcem.

## Nastavitev

1. V preklopniku delovnih okolij izberite **Izdelava**, nato {{ui:Nova postavitev}}.
2. Na zavihku **Nastavitev** izberite:
   - **Os orodja (+Z)**: v katero smer kaže orodje v del. Privzeto je svetovni +Y (navzgor v PartCraft); X stroja je tedaj svetovni X, Y stroja pa svetovni −Z.
   - **Ničelna točka obdelovanca (G54)**: vogal ali sredina surovca, zgoraj ali spodaj, zgornja sredina modela ali izhodišče modela.
   - **Surovec**: kvader ali valj, bodisi model plus odmiki (strani, zgoraj, spodaj) bodisi fiksna velikost.
   - **Material** (nastavi začetna posmika in hitrosti), **postprocesor** (krmilnik), največjo hitrost vretena stroja, hitro hitrost in čas menjave orodja, hladilno tekočino ter številko programa.

## Orodja

Zavihek **Orodja** vsebuje knjižnico: ravna, kroglična in čelna rezkala z zaobljenim robom, svedre, rezkala za posnetje in čelna rezkala, vsako s številko T, premerom, številom žlebov in dolžino žlebov (ter polmerom vogala, kotom konice ali posnetja, kjer velja).

Moja orodja lahko shranite v brskalnik in jih kot datoteko prenesete med računalniki: glejte [Knjižnica orodij](topic:tool-library).

Hitrost vretena in posmik izhajata iz materiala: n = 1000 × rezalna hitrost / (π × premer), posmik = n × žlebovi × debelina odrezka (svedri: n × posmik na vrtljaj). Števila so previdne začetne vrednosti iz objavljenih razponov, niso uglašena za vaš stroj; za preglasitev vpišite rezalno hitrost, debelino odrezka, vrt/min ali posmik proizvajalca orodja. Ko hitrost preseže največjo vrednost stroja, ostane na njej, posmik pa sledi in ohranja debelino odrezka.

## Dodajanje operacij

Vsak gumb orodne vrstice doda operacijo in, kjer potrebuje geometrijo, začne z izbiranjem: kliknite ploskve ali robove v pogledu (ponovni klik izbiro odstrani), nato {{ui:Izbiranje končano}} ali {{key:Esc}}.

| Operacija | Izbira | Kaj naredi |
|---|---|---|
| {{ui:Ploskev}} | nič | Cikcak prehodi čez ves surovec, čez njegove robove, navzdol do vrha modela |
| {{ui:Žep}} | ravna ploskev dna, okrogla luknja ali zaprta veriga robov | Očisti območje z zamaknjenimi prehodi od znotraj navzven, pri vsakem koraku v globino; otoki (ploskve, ki štrlijo navzgor znotraj dna) ostanejo; dno, odprto na vse strani (nič višjega zunaj njega), se očisti do roba surovca |
| {{ui:Prilagodljivo}} | enako kot pri Žepu | Očisti isto območje v prehodih, pri katerih vsak reže nastavljeno širino (**Zaseg**, delež premera), tako da rezkalo nikoli ne reže polne širine utora, tudi ne v vogalih; vstopi po vijačnici in pri vsaki ravni dokonča stene. Ozki rezi dovolijo globlji korak v globino in višji posmik |
| {{ui:Kontura}} | ravna ploskev (njen obris), okrogla ploskev ali robovi | Sledi obrisu, zamaknjenemu za polmer orodja, zunaj ali znotraj, z lokoma za vstop in izstop ter po želji z jezički |
| {{ui:Vrtanje}} | luknje (kliknite steno luknje ali njen rob) | Izvrta vsako luknjo s fiksnim ciklom: peck (G83), vrtanje (G81) ali lomljenje odrezka (G73); ali podajte premer, da izvrtate vsako luknjo te velikosti |
| {{ui:Posnemi}} | obris ali robovi ploskve | Vodi rezkalo za posnetje ob robu tako, da reže širino, ki jo nastavite |
| {{ui:Vzporedno}} | nič (celoten model) | 3D dokončevanje z vzporednimi črtami pod poljubnim kotom, ki sledijo površini s krogličnim, z zaobljenim robom ali ravnim čelnim rezkalom. Glejte [3D dokončevanje](topic:finish-3d) |
| {{ui:Grebenasto}} | nič (celoten model) | 3D dokončevanje v prehodih na nastavljeni razdalji po površini, tako da ima greben med njimi zahtevano višino |

Izberite operacijo na seznamu, da spremenite njeno orodje, višine (varnostna, dvig, višina posmika, zgoraj, spodaj), korak v globino, korak prehoda, surovec za pustiti, dokončevalni prehod, vstop (vijačnica, rampa ali navpični vbod), sovpadajoče rezkanje, jezičke ali cikel. {{ui:Gor}} in {{ui:Dol}} spremenita vrstni red, {{ui:Zaduši}} operacijo izpusti, {{ui:Izbriši}} jo odstrani. Vse je v zgodovini razveljavitev in shranjeno v datoteki dela.

Korak prehoda žepa je največ polovica premera orodja, zato je vsaka točka njegovega dna znotraj enega polmera orodja od prehoda. Notranji vogali ohranijo polmer orodja.

**Prilagodljivo čiščenje** ohranja zaseg rezkala blizu ene vrednosti. Zaseg 0.15 premera pomeni kot zaseganja približno 46°: lok roba rezkala v materialu. Zamaknjen žep nasprotno reže polno širino na prvem prehodu in se v vsakem notranjem vogalu ovije dlje. Med prehodi orodje ostane spuščeno, kjer se premika skozi že odrezan prostor, drugod pa se dvigne in spusti v zraku. Prehodi se izračunajo na fini mreži nad območjem (celice približno ene dvanajstine polmera orodja), zato lahko zaseg preseže nastavljeno vrednost za približno eno celico; stene so dokončane natančno. Veliko odprto območje naredi dolg program z mnogo kratkimi premiki.

## Simulacija

Poti orodja se po vsaki spremembi ponovno izračunajo (tudi poti dela). {{ui:Simuliraj}} prikaže tudi surovec, ki ostane po celotnem programu. Plošča prikazuje:

- **Čas cikla**: posmični premiki po svojem posmiku, hitri premiki kot ravne črte pri hitrosti hitrega premika iz nastavitve, plus čas menjave orodja. Pravi stroji pospešujejo, zato trajajo dlje.
- **Vdori**: mesta, kjer je orodje šlo več kot 0.02 mm pod površino dela. Rdeče oznake jih prikažejo v pogledu.
- **Surovec, ki ostane na delu**.

Surovec je višinska karta zgornjega dela (Z-karta), zato ne more prikazati podrezov. Povlecite **Predvajanje**, da premaknete orodje vzdolž programa. V pogledu so posmični premiki polni, hitri pa črtkani, ena barva na operacijo.

Ob vklopljenem **Prikaži simulirani surovec** je surovec obarvan glede na model, celico za celico: **zeleno**, kjer je na modelu (znotraj 0.02 mm), **rdeče**, kjer je orodje zarezalo v model, in kjer surovec ostane na modelu, **rumeno** za tanko plast, **oranžno** za več, ki prehaja v **sivo** neobrezanega surovca pri 1 mm ali več. Barve se ob vsaki spremembi ponovno izračunajo iz iste višinske karte kot števila na plošči, zato se zeleno in rdeče ujemata z vrstico Vdori. Posnetje namerno reže v model in ob svojem robu prikaže rdeče.

## Objava G-kode

Izberite krmilnik pod **Postprocesor** in pritisnite {{ui:Prenesi G-kodo}} (ali {{ui:Postprocesor}} v orodni vrstici):

| Krmilnik | Datoteka | Opombe |
|---|---|---|
| Fanuc-style ISO | .nc | %, številka O, številke vrstic, T M6 z G43 H, fiksni cikli |
| GRBL | .nc | Brez menjalnika orodij in fiksnih ciklov: menjava orodja se ustavi z M0, vrtanje je zapisano kot navadni premiki |
| LinuxCNC | .ngc | T M6 z G43 H, fiksni cikli, M2 |
| {{ui:Stružni postprocesor v slogu Fanuc (.nc)}} | .nc | Za programe struženja: X kot premer, posmik na vrtljaj, G96 pod omejitvijo G50, navoj G32 |
| LinuxCNC stružni postprocesor | .ngc | Za programe struženja: premeri G7, G95, G96, navoj G33; ne zapiše premika na referenčno točko |
| Lasten | poljubna | Postprocesor, ki ste ga napisali ali spremenili: {{ui:Uredi post…}}, {{ui:Nov post…}}, {{ui:Uvozi datoteko posta…}} |

Vsaka datoteka se začne s komentarji o programu, surovcu, ničelni točki obdelovanca in orodjih. Koordinate so v milimetrih s 3 decimalnimi mesti. {{ui:Pot orodja CSV}} in {{ui:Pot orodja JSON}} izvozita same premike.

**Pred rezanjem preverite izhod v simulatorju svojega stroja in ga najprej zaženite v zraku nad surovcem.** Trije vgrajeni postprocesorji so izhodišča, ki sledijo dokumentiranemu vedenju krmilnikov; na nobenem določenem stroju niso bili preizkušeni. Postprocesor, ki ga spremenite, morate preizkusiti vi. Kako ga napisati: [Postprocesorji, ki jih lahko urejate](topic:post-processors).

## Natančen STEP za delavnico

Pod gumbi G-kode na zavihku **Operacije** {{ui:Natančni STEP (delovne koordinate)}} prenese `<part>-work.step`: del kot natančno telo (prava valja za luknje in čepe, prave krožnice za njihove robove) z izhodiščem v ničelni točki obdelovanca te nastavitve in Z vzdolž osi orodja. To so koordinate, ki jih uporablja G-koda, zato delavniški lastni CAM program ali preverjevalnik poravna model s programom brez premikanja. Datoteka vsebuje samo del, ne surovca ali poti orodja.

{{ui:Izvoz}} › {{ui:STEP AP242 (točno telo)}} zapiše enako telo v lastnem položaju dela (Z navzgor): glejte [Izvoz za tiskanje, STEP in DXF](topic:export-files#for-other-cad-programs-step).

## Omejitve

- Žepi, konture, vrtanje in posnetja so 2.5-osni. Ukrivljene dele v 3D grobo in dokončno obdelata lastni operaciji ([3D grobo rezkanje in obdelava ostankov](topic:rough-3d), [3D dokončevanje](topic:finish-3d)). Prilagodljivo čiščenje je 2D (ravna dna).
- Nagnjena orodja, 5-osno in 4-osno dokončevanje, struženje in tipanje so na voljo, vsako s svojimi omejitvami, in **nobeno še ni bilo izvedeno na stroju**: glejte [4- in 5-osna obdelava](topic:multi-axis), [Struženje](topic:turning) in [Tipanje](topic:probing).
- Držala in stebla orodij se ne preverjajo za trke; opozorilo se prikaže, kadar je rez globlji od dolžine žlebov.
- Posmiki in hitrosti so začetne vrednosti. Postprocesor je besedilo, ki ga lahko urejate, vendar odloča samo, kako so premiki zapisani; ne more spremeniti poti orodja, dodati osi ali poznati vašega stroja ([Postprocesorji, ki jih lahko urejate](topic:post-processors) navajajo, česa ne zmore).

## Pošiljanje programa na stroj

V namiznem CadCraft Studiu se, z napravo, nastavljeno v Studiu, **Pošlji na stroj…** prikaže poleg **Prenesi G-kodo** in naloži isti program na stroj v vašem omrežju. Iz PartCraft ga nikoli ne zaženete: zaženite ga na stroju, ko je to jasno. V brskalniku gumb ni prikazan (spletna stran ne more doseči stroja v vašem omrežju): namesto tega program prenesite.
