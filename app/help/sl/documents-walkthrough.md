---
title: Dokumenti in revizije (trezor)
summary: Korak za korakom skozi eno pravo delo: mapo projekta z deli in sestavi postavite pod nadzor, del prevzamete, spremenite, oddate z opombo in objavite, si ogledate, kaj ga uporablja, in kosovnico, ter kaj vidi drugi, medtem ko je datoteka zaklenjena, in kako to deluje z oblačnimi mapami.
keywords: trezor, dokumenti, vodnik, učni primer, prevzem, oddaja, revizija, objava, odobritev, zaklep, zgodovina, kje se uporablja, kosovnica, bom, sestav, oblačna mapa, projektna mapa, dva uporabnika, skupna mapa
from: 0a5e6983
---

## Kaj boste naredili

Ste Ana in delate na projektu Riverside Clinic s sodelavcem Benom. Deli in sestavi projekta so v eni mapi, do katere dostopata oba (skupni pogon, sinhronizirana mapa ali oblačna mapa). Na koncu bo ena datoteka prešla od prve kopije do objavljene revizije **A**, nato bo spremenjena kot **B.1**. Videli boste, kdo je kaj naredil, in kaj vidi Ben, medtem ko vi držite datoteko.

Vse je shranjeno v skriti mapi `.ccvault` poleg vaših datotek: brez strežnika in brez nalaganja (oblačna mapa je izjema, glejte zadnji korak). Za vse gumbe in pravila na enem mestu glejte temo *Dokumenti: prevzem, revizije in objava*, če jo vaša aplikacija ima.

## 1. Nastavite projektno mapo

1. V skupini **Datoteka** orodne vrstice izberite {{ui:Dokumenti …}}.
2. Izberite {{ui:Izberite projektno mapo}} in mapo, ki vsebuje dele in sestave projekta. (Projektne mape delujejo v programu Studio in v brskalnikih, ki lahko odprejo mapo, na primer Chrome in Edge. V drugih brskalnikih podokno to pove.)
3. Izberite {{ui:Spremeni}} poleg **Vi:** in vnesite svoje ime, `Ana` (če vas vpraša, še ime tega računalnika). Podokno zdaj kaže *Vi: Ana na* in vaš računalnik. Vaše ime gre na vse, kar naredite.
4. Izberite {{ui:Začni trezor v tej mapi}} in vnesite ime projekta, `Riverside clinic`. Podokno kaže *Trezor za Riverside clinic je začet.*

## 2. Datoteko postavite pod nadzor

1. Odprite **Datoteke, ki niso v trezorju**, in izberite {{ui:Dodaj}} poleg `plates/Bracket.partcraft.json`.
2. Pojavi se pod **Datoteke v trezorju** pri reviziji **A.1**, stanje **V delu**. A.1 je njena prva kopija; trezor hrani kopijo vsake revizije.

## 3. Prevzemite, spremenite, oddajte

1. Izberite {{ui:Odpri}} poleg `plates/Bracket.partcraft.json`. Del se odpre v PartCraft-u, podokno pa se zapre, da ga lahko vidite. Podokno znova odprite prek {{ui:Dokumenti …}}.
2. Znova odprite podokno in izberite {{ui:Prevzemi}}. Vrstica zdaj kaže **Prevzeto vam**. V `.ccvault/locks` je ustvarjena zaklepna datoteka; nihče drug te datoteke ne more prevzeti, dokler je ne oddate.
3. Spremenite del: uredite mero, dodajte luknjo. Shranjevanje je zavrnjeno, razen če je datoteka prevzeta vam, in pove zakaj. Shrani kot vedno deluje za kopijo vašega dela.
4. Odprite podokno, izberite {{ui:Oddaj}} in vnesite, kaj se je spremenilo (`Premik vrat`). Oddaja je uspela, revizija je A.2. Datoteka v projektni mapi je zdaj del, ki ste ga imeli odprtega, zaklep pa je izginil. Oddaja brez sprememb ohrani revizijo.

Če si premislite, {{ui:Razveljavi prevzem}} vrne datoteko brez nove revizije.

## 4. Pregled in objava

1. Izberite {{ui:Pošlji v pregled}}. Stanje postane **V pregledu**, datoteka pa je samo za branje.
2. Preden odobrite, izberite {{ui:Nastavitve projekta}} in navedite, kdo lahko odobri (eno ime v vrstici), na primer `Ben` in `Carla`, ter označite pravilo, da mora odobritelj biti nekdo drug kot avtor. Izberite {{ui:Shrani nastavitve}}. Zdaj trezor sam zavrne vsakogar drugega.
3. Ben (ali Carla) izbere {{ui:Odobri}} in vnese ime odobritelja. Stanje postane **Objavljeno**, revizija pa **A**, z zapisom *odobril* in imenom. Objavljena datoteka je samo za branje. {{ui:Vrni}} bi jo vrnil v stanje V delu, z razlogom.

Ime odobritelja je ime, vneseno v podoknu; je zapis, kdo je potrdil, ne dokaz identitete.

## 5. Nova revizija

1. Pri objavljeni datoteki izberite {{ui:Nova revizija}}. Zadržite jo za naslednjo črko.
2. Spremenite jo in nato izberite {{ui:Oddaj}}. Revizija je **B.1**, v delu. Objavite jo enako, in postane **B**. {{ui:Razveljavi prevzem}} pred prvo oddajo jo pusti pri **A**.

Črke revizij tečejo A, B … Z, AA, AB. Če vaš standard nekatere črke izpušča, projektna nastavitev *Uporabi zaporedje ASME Y14.35* za naslednje revizije preskoči I, O, Q, S, X in Z.

## 6. Oglejte si, kaj se je zgodilo

Izberite ime datoteke, da odprete njene podrobnosti:

- **{{ui:Zgodovina}}**: vsak dogodek, najnovejši najprej, s tem, kdo je bil, kateri računalnik in kdaj: *Oddano A.2*, Ana; *Objavljeno*, Ben; in tako naprej.
- **{{ui:Revizije}}**: tabela revizij: vsaka ohranjena revizija z datumom, tistim, ki je oddal, opombo in odobritvijo. Trezor hrani kopijo vsake v `.ccvault/revs`.
- **{{ui:Uporablja}}**: deli sestava.
- **{{ui:Uporablja jo}}**: našteje vsak sestav v trezorju, ki vsebuje ta del. Spremenite nosilec in veste, katere sestave preveriti.

## Sestavi: kaj uporabljajo in kosovnica

Sestav (`.partcraft.json`, shranjen iz načina Sestav) dajte v mapo in ga dodajte. Izberite njegovo ime: **Uporablja** našteje dele, ki jih vsebuje, z revizijo in stanjem vsakega; **Uporablja jo** pri delu našteje vsak sestav, ki ga vsebuje. {{ui:Kosovnica (CSV)}} shrani celoten seznam delov, stopnjo za stopnjo, s količinami, revizijami in stanji, za preglednico. Spremenite nosilec, **Uporablja jo** pa vam pove, katere sestave pogledati.

## 7. Kaj vidi Ben, medtem ko držite datoteko

Zdaj datoteko znova prevzemite in prosite Bena, naj na svojem računalniku odpre isto projektno mapo in odpre podokno. Pri vrstici datoteke vidi **Prevzeto: Ana, na računalniku** od časa, gumba {{ui:Prevzemi}} pa ni. Če kljub temu poskusi, trezor zavrne: zaklep je datoteka, ki je sistem ne bo ustvaril dvakrat, zato dve osebi ne moreta imeti datoteke hkrati, tudi v isti delčku sekunde, kadar je mapa na disku v programu Studio. (V brskalniku mapa omogoča le najboljši poskus, podokno to pove pod **Mapa**.)

Če je Ana odsotna in Ben potrebuje datoteko, {{ui:Prekini prevzem}} jo sprosti. Vpisati mora razlog; ta gre v dnevnik z navedbo, čigav je bil prevzem. Kadar projekt navaja skrbnike, lahko to storijo samo oni. Prevzem, starejši od omejitve zastarelosti (privzeto 14 dni), je označen kot *dolgo časa*. Po prekinitvi je Anina poznejša oddaja zavrnjena, tako da si drug drugega ne moreta prepisati.

## 8. Oblačne mape

Oblačna mapa je projektna mapa, shranjena v oblačni shrambi vaše ekipe, zato ekipa ne potrebuje skupnega pogona. V programu Studio, prijavljeni v svoj račun CadCraft, podokno kaže {{ui:Odpri oblačno mapo}} poleg {{ui:Izberite projektno mapo}}. Izberite jo in izberite mapo, navedeno kot delovni prostor / mapa. Lastnik delovnega prostora mapo najprej ustvari, oblačna shramba ekipe pa mora biti v veljavi. Vse zgoraj navedeno deluje enako; strežnik ustvari zaklep, ki je med osebami strog. Če niste prijavljeni, podokno to pove in vas pozove k prijavi. V običajnem zavihku brskalnika gumb za oblak ni ponujen; uporabite Studio.

## Preizkusite

Naredite osem korakov zgoraj s kopijo prave datoteke. Za korake z dvema osebama potrebujete drugo osebo ali dve okni z dvema imenoma. Če poskusite s pravo skupno mapo, stran »Preizkušanje skupnosti« navaja preverjanje, ki sprašuje prav to, in sprejema rezultate.
