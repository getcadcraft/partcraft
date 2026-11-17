---
title: Sestavite sestav s spoji
summary: Začnite sestav iz dela, vstavite kopije in druge datoteke delov, jih povežite s togimi, vrtljivimi, drsnimi, valjastimi, ravninskimi, krogličnimi in zatičnimi spoji v utoru na ravnih ploskvah, središčite spoje na osi, urejajte del na mestu in shranite sestav.
keywords: sestav, spoj, spoji, zanka, zaprta zanka, členkasti mehanizem, štiri-členkasti, mehanizem, tog, vrtljiv, drsni, valjasti, ravninski, kroglični, sferični, zatič v utoru, vstavi sestavni del, pritrjen, fiksen, koncentrično, sovpadajoče, uredi del, v kontekstu, partcraft-asm
from: a53bbfef
---

Sestav združi dele. V PartCraftu **spoji** postavijo dele: vsak spoj leži na ravni ploskvi vsakega od dveh delov in ju postavi ploskev ob ploskvi. Vrtljivi spoj omogoča, da se del vrti, drsni spoj, da drsi, togi spoj ga drži na mestu.

## Začetek sestava

1. Zgradite del s telesom (prazen del ne more v sestav: „Najprej zgradite telo, nato ga vstavite v sestav.“).
2. V orodni vrstici izberite {{ui:Sestav}}.

Vrstica stanja pove: „Sestav je začet s Part1 kot pritrjenim delom. Vstavite več delov ({{ui:Dodaj kopijo}}, {{ui:Vstavi}} ali {{ui:Uredi}} › {{ui:Podvoji}}), nato jih povežite s spoji.“ Levo podokno zdaj našteje **Dele** in **Spoje**, orodna vrstica pa prikaže orodja za sestav. Orodja za skico in značilke se skrijejo.

Prvi del je **pritrjen**: nikoli se ne premakne, vse drugo pa je postavljeno glede nanj.

## Vstavljanje delov

- {{ui:Dodaj kopijo}} vstavi še eno kopijo izbranega dela (ali zadnjega). Kopije delijo en del: če ga uredite, se spremeni vsaka kopija.
- {{ui:Podvoji}} ({{key:Mod+D}}) v skupini Uredi stori isto za izbrani del. {{key:Mod+C}} in {{key:Mod+V}} kopirata del in ga prilepita poleg drugih, v tem ali drugem sestavu; {{key:Mod+Shift+V}} ga prilepi na isto mesto. Glejte [Kopiraj, prilepi in podvoji](topic:copy-paste).
- {{ui:Vstavi}} vstavi del iz datoteke `.partcraft.json` v vašem računalniku. Del se kopira v sestav.

Novi deli se prikažejo 20 mm desno od vsega, kar je že tam, in ostanejo tam, dokler jih spoj ne postavi. Del brez spoja lahko premaknete tudi z roko: z vnesenimi vrednostmi ali s puščicami, ki jih povlečete (glejte [Seznam delov, razstavljeni pogledi in premikanje delov](topic:assembly-bom-explode)).

## Povezovanje dveh delov

1. Izberite {{ui:Spoj}} ali pritisnite {{key:J}}. Desno podokno pokaže **Nov spoj**.
2. Kliknite ravno ploskev na prvem delu. Ta se označi.
3. Kliknite ravno ploskev na drugem delu.

Drugi del skoči tako, da njegova ploskev leži ob ploskvi prvega dela in je obrnjena k njej. Spoj se prikaže pod **Spoji**, na primer „Revolute1“, desno podokno pa prikaže njegove nastavitve.

- Če sta obe ploskvi nastali z zavrtitvijo, je spoj na začetku **vrtljiv**; sicer **tog**. Spremenite ga pozneje.
- Ukrivljenih ploskev ni mogoče izbrati: „Ta ploskev je ukrivljena. Izberite ravno ploskev (za vrtenje okoli izvrtine ali osi zavrtitve jo izberite pozneje v spoju).“
- {{key:Esc}} prekliče spoj, ki ste ga začeli (ali kliknite del v levem seznamu).

### Nastavitve spoja

| Nastavitev | Kaj naredi |
|---|---|
| **Vrsta** | Eden od spojev v spodnji tabeli |
| **Kot (°)** | Zavrti drugi del okoli osi spoja (pravokotno na ploskve) |
| **Odmik (mm)** | Premakne drugi del vzdolž osi, stran od ploskve (negativne vrednosti ga potisnejo vanjo) |
| **Vzdolž X**, **Vzdolž Y**, **Nagib okoli X**, **Nagib okoli Y**, **Vzdolž utora**, **Smer utora** | Druge vrednosti, prikazane pri spojih, ki jih uporabljajo |
| **Središče na** (za vsako stran) | Kje os spoja seka ploskev: „Lastno izhodišče ploskve“, os zavrtitve („Axis of Revolve1“) ali os ene izvrtine („Hole1, hole 2“) |

Vsaka vrednost, ki jo spoj dovoli premikati, ima pod poljem drsnik za vlečenje; druge se nastavijo enkrat.

| Spoj | Kaj se premika | Nastavi se enkrat |
|---|---|---|
| **Tog** | ničesar | Kot, Odmik |
| **Vrtljiv** | Kot (tečaj) | Odmik |
| **Drsni** | Odmik (predal) | Kot |
| **Valjasti** | Kot in Odmik (gred v drsnem ležaju) | |
| **Ravninski** | Vzdolž X, Vzdolž Y čez ploskev in Kot (del, ki drsi po mizi) | |
| **Kroglični** | Kot (vrtenje) in Nagib okoli X in Y, okoli središča spoja (kroglični spoj) | |
| **Zatič v utoru** | Vzdolž utora in Kot (zatič v ravnem utoru) | Smer utora: kot utora od X ploskve |

X in Y ploskve sta tista prvega dela; središče spoja nastavite z **Središče na**.

„Lastno izhodišče ploskve“ je izhodišče dela, projicirano na ploskev. Pogosto ni tam, kjer bi želeli poravnati dele. Pri okroglih delih in zatičih nastavite **Središče na** na os zavrtitve ali izvrtine na obeh straneh: osi se tedaj poravnata, kot pri koncentričnem spoju.

### Primer: dve prirobnici, privijačeni ploskev ob ploskvi

1. Odprite del prirobnice (zavrtitev s krožnim vzorcem izvrtin) in izberite {{ui:Sestav}}.
2. Izberite {{ui:Dodaj kopijo}}.
3. Pritisnite {{key:J}}, kliknite ravno ploskev diska prve prirobnice (ploskev, od koder se začnejo izvrtine za vijake), nato isto ploskev na drugi prirobnici. Ploskve so nastale z zavrtitvijo, zato je spoj vrtljiv.
4. Nastavite **Središče na** na „Axis of Revolve1“ za obe strani. Prirobnici zdaj delita os.
5. Vnesite `22.5` v **Kot (°)**, da poravnate izvrtine za vijake, ali povlecite drsnik.

## Zaprte zanke: členkasti mehanizmi

Deli, povezani v obroč (štiri-členkasti členkasti mehanizem, ročica z drsnikom, okvir, podprt na obeh straneh), tvorijo **zanko**. PartCraft reši vsako zanko tako, da se zaključi: spoji na njej dobijo vrednosti, ki sklenejo obroč, in se premaknejo kar najmanj od začetnega položaja.

- **Nastavite ali povlecite** vrednost spoja na zanki in preostali del zanke sledi. Pri štiri-členkastem mehanizmu povlecite **Kot** ročice, sklepnik in nihalna palica se premaknejo z njo. Vrednost, ki jo nastavite, ostane; druge se izračunajo iz nje.
- V seznamu je spoj na zanki, ki se še lahko premika, **moder**: še lahko nastavite drugo vrednost. Zanka, ki se ne more premikati (podprt okvir), ostane črna. Zanka, ki se ne more skleniti, je **rdeča**.
- Polje **Del** prikazuje **Zanke**: koliko jih je zaprtih in koliko vrednosti se še lahko premakne, npr. „1 zaprta; 1 vrednost se še lahko premakne“.
- {{ui:Preveri gibanje glede kolizij}} premakne spoj na zanki, pri čemer zanka sledi, korak za korakom (glejte [Preverite sestav glede kolizij in gibanja](topic:check-assembly)).

Ravni členkasti mehanizem, zložen iz ravnih palic, se mora ujemati v globini: dva dela, spojena ploskev ob ploskvi na obeh straneh obroča, potrebujeta enako višino sklada v obeh smereh. Z **Odmikom** spoja dvignite del tam, kjer sklad ne sešteje, sicer se zanka ne more zapreti.

## Delo z deli

Kliknite del v pogledu ali v seznamu, da ga izberete. Desno podokno prikaže ime dela, koliko kopij je, njegovo prostornino, njegove spoje in ali je pritrjen, nastavljen s svojimi spoji ali „Ni povezano: ostane tam, kamor je bil postavljen“. Gumbi:

- {{ui:Uredi ta del}} (ali {{ui:Uredi del}} v orodni vrstici ali dvoklik na del v seznamu): odpre del za urejanje;
- {{ui:Vstavi kopijo}};
- {{ui:Naredi ga za pritrjeni del}};
- {{ui:Odstrani}}: odstrani tudi njegove spoje, potem ko vpraša.

Sestav ohrani vsaj en del: „Sestav mora ohraniti vsaj en del. Namesto tega ga zaprite.“

### Urejanje dela na mestu

1. Izberite del in izberite {{ui:Uredi del}}. Del se odpre z zgodovino; naslov pove „Bracket (in Bracket assembly)“.
2. Spremenite ga kot vsak drug del.
3. V orodni vrstici izberite {{ui:Nazaj}}. Sestav se posodobi: vsaka kopija tega dela se spremeni, spoji na ploskvah, ki jih tvorijo robovi skice, pa sledijo.

Vrnitev spremembe je en korak v seznamu razveljavitev sestava.

## Razveljavitev, shranjevanje in zapiranje

- Sestav ima svoj seznam razveljavitev: {{key:Mod+Z}} in {{key:Mod+Y}} delujeta na spojih, vstavitvah in nastavitvah.
- {{ui:Shrani}} ali {{key:Mod+S}} prenese `<assembly name>.partcraft-asm.json` z vsemi deli v njej. Odprete ga pozneje z {{ui:Odpri}}.
- {{ui:Zapri}} zapre sestav in vas vrne na del, s katerim ste začeli. Če sestav ni shranjen, vpraša: {{ui:Prekliči}}, {{ui:Zavrzi sestav}} ali {{ui:Najprej shrani}}.
- Če želite preimenovati sestav, kliknite prazen prostor, da nič ni izbrano, in spremenite **Ime** v desnem podoknu.

## Veliki sestavi

Sestav lahko vsebuje na tisoče kopij nekaj delov. Kopije enega dela se rišejo skupaj, spoj, ki ga zavrtite, postavi samo dele za seboj, seznam delov pa prikaže prve vrstice z gumbom „Pokaži več“ pod njimi (izbrani del je vedno naveden).

- Medtem ko vrtite ali povečujete pogled, se sestav z več kot približno 300.000 trikotniki nariše kot en kvader na del, nato pa po kratkem trenutku, ko ustavite, v celoti.
- {{ui:Pogledi}} › {{ui:Lahki prikaz}} ohrani kvadre ves čas. Izbira dela in spojev še vedno uporablja prave dele.
- Hitrost vrtenja je odvisna tudi od vaše grafične kartice. Številke, ki jih je PartCraft izmeril, so v opombah ob izdaji skupaj s strojem, na katerem so bile izmerjene.

## Težave s spoji

- Del, do katerega ne seže noben spoj, je naveden kot **prost**, podokno pa pove: „Bracket2 ni povezan s pritrjenim delom, zato ostane tam, kamor je bil postavljen.“
- Zanka, ki se ne more skleniti (dolžine ne segajo, omejitev zaustavi spoj, ploskve se ne ujemajo v globini): „Revolute3 zapira zanko, ki se ne more skleniti: odmaknjena je za 2.000 mm. Preverite ploskve, odmike in omejitve spojev zanke.“ Njeni spoji postanejo rdeči.
- Če po urejanju dela izgine ploskev ali os, ki jo spoj uporablja: „Ploskev, ki jo uporablja ta spoj, je iz Bracket izginila.“ Odstranite spoj in ga naredite znova.

Naslednje: [Preverite sestav glede kolizij in gibanja](topic:check-assembly).
