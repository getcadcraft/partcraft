---
title: Zaslon PartCraft
summary: Ogled vseh vrstic in podoknov: orodna vrstica in kako se spreminja, zgodovina, dejstva o delu, 3D pogled, podokno z lastnostmi in vrstica stanja.
keywords: zaslon, postavitev, orodna vrstica, zgodovina, drevo značilk, lastnosti, podokno, vrstica stanja, vmesnik, ui, ogled, celozaslonski način
from: 7394fc49
---

Zaslon ima pet delov: orodno vrstico čez vrh, zgodovino na levi, 3D pogled v sredini, podokno z lastnostmi na desni in vrstico stanja na dnu. Nad njimi vsemi je vrstica aplikacije CadCraft.

## Vrstica aplikacije

Tanka vrstica na samem vrhu pripada spletnemu mestu CadCraft, ne samemu PartCraft. Prikazuje ime aplikacije in kje teče, meni različic, **O PartCraft**, gumb za način zaslona in preklopnik teme Papir / Model.

- **Papir** so temne črte na svetli podlagi. **Model** so svetle črte na temni podlagi. Barve skice sledijo temi.
- {{ui:Nastavitve}} (zobnik ali {{key:Mod+,}}) ima zavihek {{ui:PartCraft}}: kateri gumb miške zavrti pogled, koleščke miške ali sledilno ploščico ter relacije med skiciranjem. Glejte [Nastavitve PartCraft](topic:settings).
- Gumb za način zaslona ali {{key:Ctrl+Shift+F}} preklaplja med običajnim, celozaslonskim načinom in celozaslonskim načinom s skritimi vrsticami. Ko so vrstice skrite, premaknite kazalec na zgornji rob (ali se tam dotaknite), da se vrnejo. {{key:Esc}} vrne v običajni način. Ta tipka je {{key:Ctrl+Shift+F}} tudi na Macu, ne ⌘.

## Orodna vrstica

Orodna vrstica je razdeljena v skupine. Spreminja se glede na to, kaj počnete, da se prilega eni vrstici:

| Skupina | Gumbi | Prikazano |
|---|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Odpri}}, {{ui:Shrani}}, {{ui:Izvoz}} (meni) | Vedno |
| Skica | {{ui:Skica}} | Ko ni odprte skice |
| Skica | {{ui:Izhod}}, {{ui:Črta}}, {{ui:Pravokotnik}}, {{ui:Krožnica}}, {{ui:Lok}}, {{ui:Točka}}, {{ui:Osna črta}}, {{ui:Zaobli}}, {{ui:Kota}}, {{ui:Pomožno}} | Samo ko je skica odprta |
| Značilke | {{ui:Iztisni}}, {{ui:Izreži}}, {{ui:Zavrti}}, {{ui:Izvrtina}}, {{ui:Linearno}}, {{ui:Krožno}}, {{ui:Zrcali}}, {{ui:Zaobli}}, {{ui:Posnemi}}, {{ui:Lupina}}, {{ui:Več}} (meni: Zavrtni izrez, Ravnina, Os, Točka, Potegni po poti, Prehod, Nagib izvleka) | Na delu, ne med odprto skico ali risbo. Zaobljenje in posnetje delujeta na ravnih robovih med dvema ravnima ploskvama; lupina in nagib na ravnih ploskvah. Potegni po poti in Prehod v tej različici še nista izdelana (potrebujeta točno jedro); klik na enega to pove |
| Značilke | {{ui:Končano}} | Samo med izbiranjem robov ali ploskev za zaobljenje, posnetje, lupino ali nagib |
| Risba | {{ui:Risba}} | Na delu (uporabno, ko ima del trdno telo) |
| Risba | {{ui:Baza}}, {{ui:Okvir}}, {{ui:Površinska obdelava}}, {{ui:Detajl}}, {{ui:PDF}}, {{ui:Nazaj}} | Samo na listu risbe |
| Sestav | {{ui:Sestav}} | Na delu (uporabno, ko ima del trdno telo) |
| Sestav | {{ui:Dodaj kopijo}}, {{ui:Vstavi}}, {{ui:Spoj}}, {{ui:Kolizija}}, {{ui:Uredi del}}, {{ui:Zapri}} | Samo v sestavu |
| Sestav | {{ui:Nazaj}} | Med urejanjem dela iz sestava |
| Uredi | {{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Več}} (meni: Izreži, Kopiraj, Prilepi, Prilepi na isto mesto, Podvoji, Izbriši, Izberi vse, Prekliči izbor) | Vedno; vsak element deluje na skici, zgodovini ali sestavu, v katerem ste |
| Pogled | {{ui:Prilagodi}}, {{ui:Pravokotno na}}, {{ui:Pogledi}} (meni: Meri, Masne lastnosti, Prerez, Nagib izvleka, Zebra, Ukrivljenost, {{ui:Osnovne ravnine}}, nato Izometrija, Spredaj, Zadaj, Zgoraj, Spodaj, Desno, Levo) | Vedno |

Nad gumbom se zadržite s kazalcem, da vidite, kaj počne, in njegovo tipko. Zatemnjenega gumba trenutno ni mogoče uporabiti: na primer gumbi značilk, medtem ko je skica odprta, ali {{ui:Spoj}}, preden ima sestav dva dela.

Meni {{ui:Več}} v skupini Uredi našteje vsako urejevalno dejanje s tipko. Na kaj delujeta kopiranje in lepljenje, je odvisno od tega, kje ste; glejte [Kopiranje, lepljenje in podvajanje](topic:copy-paste). Nasvet zatemnjenega elementa pove, zakaj zdaj ne more delovati.

Meni {{ui:Izvoz}} vsebuje {{ui:STL, za 3D-tiskanje}}, {{ui:3MF, za 3D-tiskanje}}, {{ui:STEP AP242 (točno telo)}}, {{ui:STEP AP214 (točno telo)}}, {{ui:STEP (fasetiran, mrežno jedro)}}, {{ui:STEP AP214 (s faceti, jedro mreže)}}, {{ui:DXF skice ali ravne ploskve}} in {{ui:Risba (PDF): pogledi, prerez, detajl, GD&T}}. Obe točni možnosti STEP sta zatemnjeni: še nista izdelani v tej različici, zato uporabite {{ui:STEP (fasetiran, mrežno jedro)}}.

## Zgodovina (levo)

Podokno na levi je zgodovina značilk dela, seznam, ki ga PartCraft izdela od zgoraj navzdol.

- Naslov je ime dela („Part1“, dokler ga ne preimenujete).
- **Sprednja ravnina**, **Zgornja ravnina** in **Desna ravnina** so na vrhu. Kliknite eno, da jo izberete; v pogledu se označi.
- Pod njimi so vaše značilke v vrstnem redu, v katerem so bile narejene. Skica, ki jo značilka uporablja, je uvlečena pod to značilko.
- Zastavica na desnem koncu vrstice pove njeno stanje:

| Zastavica | Pomen |
|---|---|
| (nič) | Izdelano, skica je popolnoma določena |
| − | Skica, ki je premalo določena (še se lahko premakne) |
| + | Skica, ki je preveč določena |
| ⚠ | Izdelano, z opozorilom (nad njim se zadržite, da preberete) |
| ⚠ napaka | Značilka ni uspela. Nad njo se zadržite ali kliknite, da izveste, zakaj |
| ⚠ ni izdelano | Značilka potrebuje drugo, ki je odpovedala ali je izklopljena |
| izklopljeno | Zadušeno |

- Vsaka značilka za imenom prikaže svojo glavno število, na primer „25 mm“ za iztiskanje ali „Ø6.6 thru“ za izvrtino. Dvakrat kliknite število ali pritisnite {{key:F2}} v vrstici, da ga spremenite kar tam. Glejte [Spreminjanje velikosti](topic:change-sizes).
- Kliknite značilko, da jo uredite na desni. Dvakrat kliknite skico, da jo odprete.
- Ko se vrnete nazaj, se v seznamu pojavi vrstica **Vrstica povrnitve · naprej**. Značilke pod njo so zatemnjene in niso izdelane.
- Ko je vrstica osredotočena, {{key:Up}} in {{key:Down}} premikata med vrsticami, {{key:Alt+Up}} / {{key:Alt+Down}} pa premakneta samo značilko, kjer zgodovina to dovoljuje.

V sestavu isto podokno namesto tega našteje **Dele** (prvi je označen kot „pritrjen“) in **Spoje**.

### Dejstva o delu

Pod zgodovino polje **Del** našteje **Prostornino**, **Površino**, **Velikost (X × Y × Z)**, **Skozi izvrtine**, **Telesa**, **Trikotnike**, število **Značilk** in koliko jih je **Z napako**. Prostornine in površine so fasetiranega telesa, ki ga izdela jedro mreže, za okrogle oblike nekoliko pod pravo vrednostjo (glejte [Značilke in njihove možnosti](topic:features#curves-resolution)).

V sestavu je polje naslovljeno **Sestav**: Deli, Primerki, Spoji, Nepovezano in Prekrivanje.

## 3D pogled (sredina)

Pogled prikazuje trdno telo, osnovne ravnine in vsako skico, ki je še ne uporablja značilka.

Osnovne ravnine so narisane v celoti, dokler je del prazen. Ko ima trdno telo, se umaknejo: narisane so bledo, da ne prekrivajo dela, klikanje pa gre skozi nje do dela. Spet se pokažejo v celoti, ko izbirate, kje skicirati ({{ui:Skica}} brez izbire) in ko izberete eno v zgodovini. {{ui:Pogledi}} › {{ui:Osnovne ravnine}} jih skrije povsem; še vedno se prikažejo, ko izbirate, kje skicirati. PartCraft si zapomni to izbiro.

- Povlecite za vrtenje dela, desni ali srednji gumb za premik, kolešček za povečavo na kazalcu. Podrobnosti v [Tipke in miška](topic:keyboard).
- Zadržite kazalec nad ploskvijo, robom ali ravnino, da se osvetli. Kliknite, da jo izberete. Ploskve se označijo v celoti, robovi pa se narišejo in izberejo v celoti. {{key:Shift}}+klik zbere več robov ali ploskev; ostanejo označene.
- Kocka pogleda na desnem vrhu se vrti z delom: kliknite ploskev, rob ali vogal, da pogledate od tam, povlecite, da se zavrti; gumb s hiško vrne na začetek. Glejte [Kocka pogleda](topic:view-cube).
- Izbrani Iztisni prikaže oranžno puščico na svoji končni ploskvi, Zavrtitev pa ukrivljeno puščico na koncu svojega obrata: povlecite jo, da spremenite globino ali kot, ali vpišite v polje ob njej. Glejte [Spreminjanje velikosti](topic:change-sizes#drag-it-in-the-view).
- Ko je del prazen, polje z naslovom **Začnite del** našteje prve korake.
- Spustite datoteko `.partcraft.json` ali `.partcraft-asm.json` kjer koli na pogled, da jo odprete. Datoteka `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ali `.3dm`, spuščena tam, se odpre kot trdno telo.

### Med izbiranjem robov ali ploskev

Po {{ui:Zaobli}}, {{ui:Posnemi}} ali {{ui:Lupina}} brez izbire (ali {{ui:Izberi robove}} na taki značilki) del prikaže takšnega, kakršen je bil pred to značilko. Kliknite robove ali ploskve, da jih dodate ali odvzamete; njihove oznake pokažejo, kaj je notri. {{ui:Končano}} ali {{key:Esc}} konča. Glejte [Zaobljenje, posnetje in lupina](topic:fillet-chamfer-shell).

### Na listu risbe

{{ui:Risba}} zamenja 3D pogled z listom risbe formata A3. Kolešček povečuje, desni ali srednji gumb premika, {{key:F}} prilagodi. Glejte [Izdelava risbe](topic:drawing-pdf).

### Med odprto skico

Pogled se obrne naravnost proti ravnini skice, na vrhu pa se pokaže sloj skice. Del prikazuje samo značilke, narejene pred to skico. Trak na zgornjem levem kotu prikazuje oznako stanja skice („Popolnoma določeno“, „Premalo določeno · 3 stopnje prostosti“ itd.) in njeno ime, na primer „Sketch2 na ploskvi Extrude1“.

## Podokno z lastnostmi (desno)

Podokno na desni prikaže, kar je izbrano, in njegov naslov to imenuje:

- **Del** (nič izbrano): **Ime** dela in nastavitev **Krivulje**.
- Ravnina: gumb {{ui:Skiciraj na njej}}.
- **Ploskev**: kakšna je vrsta (Ravna ploskev, Valj s polmerom in osjo, Stožec, Krogla ali Torus), njena površina, katera značilka jo je naredila, za ravno ploskev pa {{ui:Skica na tej ploskvi}}, {{ui:Pravokotno na}}, {{ui:Izvozi ploskev kot DXF}}, {{ui:Iztisni iz nje}}, {{ui:Izreži vanjo}} in {{ui:Izvrtina tu}} (glejte [Potegnite ali potisnite celotno ploskev](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Rob**: njegova vrsta (ravna, krožnica s središčem in polmerom ali krivulja), njegova dolžina in dve ploskvi, med katerima leži (na primer „Čelna ploskev Extrude1 in stranska ploskev Extrude1“), z gumboma {{ui:Zaobli}} in {{ui:Posnemi}}.
- Več robov ali ploskev, izbranih s {{key:Shift}}: koliko jih je, z gumboma {{ui:Zaobli}} in {{ui:Posnemi}} za robove ter {{ui:Počisti}}.
- **Značilka**: njena števila in možnosti, mere njene skice, nato {{ui:Zaduši}}, {{ui:Povrni nazaj do sem}}, {{ui:Premakni više}}, {{ui:Premakni niže}}, {{ui:Izbriši}} in njeno **Ime**.
- Odprta skica: njeno stanje, relacije, ki jih lahko dodate izbiri, seznam relacij in mer, **Dodaj po koordinatah**, ter {{ui:Zapusti skico}}, {{ui:Prilagodi}} in {{ui:Izvozi kot DXF}}.
- Na listu risbe: nastavitve prereza in detajla ali izbrani simbol GD&T.
- V sestavu: sestav, izbrani del ali izbrani spoj.

Vsako polje s številom začne veljati, ko pritisnete {{key:Enter}} ali {{key:Tab}} ali kliknete drugam. Del se takoj ponovno izdela; gumba V redu ni. Za vrnitev uporabite {{key:Mod+Z}}.

## Vrstica stanja (spodaj)

- Na levi koordinate kazalca v skici (samo med odprto skico).
- V sredini sporočila: kaj storiti naslednje in zakaj je nekaj zavrnjeno. Preberite jo, kadar se zdi, da se nič ne zgodi.
- Blizu desnega dela oznaka jedra: vedno „Jedro mreže“ v tej različici. Nad njo se zadržite za pojasnilo. Glejte [Jedro mreže](topic:solid-kernels).
- Na desni čip: „Ponovno izdelovanje…“, medtem ko se del ponovno izdeluje, nato „Ponovno izdelano v … ms“, ko je vse v redu, ali „1 značilka odpoveduje“. V sestavu piše „Postavljeno v … ms“ ali šteje težave s spoji.

Glejte tudi [Začnite priročnik v Illustrate](topic:illustrate): delovno okolje, ki iz vaših delov in sestavov izdela priročnike za sestavljanje.

## Na ozkem zaslonu

Do 760 slikovnih pik širine, na primer na telefonu, pogled ohrani zaslon: orodna vrstica je ena vrstica, ki se pomika vstran, podokna pa se odprejo kot listi iz vrstice na dnu. {{ui:Orodja}} skrije orodno vrstico, {{ui:Premik}} pa jo postavi na dno. Glejte [Sledilna ploščica, dotik in majhni zasloni](topic:trackpad-and-touch).
