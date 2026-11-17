---
title: Zaslon PartCraft
summary: Ogled vsake vrstice in podokna: orodna vrstica in njena sprememba, zgodovina, dejstva o delu, 3D pogled, podokno lastnosti in vrstica stanja.
keywords: zaslon, postavitev, orodna vrstica, zgodovina, drevo značilk, lastnosti, podokno, vrstica stanja, vmesnik, ui, ogled, celozaslonski način
from: 5b5bb843
---

Zaslon ima pet delov: orodna vrstica čez vrh, zgodovina levo, 3D pogled v sredini, podokno lastnosti desno in vrstica stanja spodaj. Nad vsemi je vrstica aplikacije CadCraft.

## Vrstica aplikacije

Tanka vrstica na samem vrhu pripada spletnemu mestu CadCraft, ne samemu PartCraft. Prikazuje ime aplikacije in kje teče, meni različice, **O PartCraft**, gumb načina zaslona in preklop teme Papir / Model.

- **Papir** je temna črta na svetli podlagi. **Model** je svetla črta na temnem ozadju. Barve skic sledijo temi.
- {{ui:Nastavitve}} (zobnik ali {{key:Mod+,}}) ima zavihek {{ui:PartCraft}}: kateri gumb miške zavrti pogled, ali koleščka miške ali sledilne ploščice, ter odnosi med skiciranjem. Glejte [Nastavitve PartCraft](topic:settings).
- Gumb načina zaslona ali {{key:Ctrl+Shift+F}} kroži med normalnim, celozaslonskim načinom in celozaslonskim načinom s skritimi vrsticami. Ko so vrstice skrite, premaknite kazalec na zgornji rob (ali se tapnite tam), da se vrnejo. {{key:Esc}} vrne v normalni način. Ta tipka je {{key:Ctrl+Shift+F}} tudi na Macu, ne ⌘.

## Orodna vrstica

Orodna vrstica je razdeljena v skupine. Spreminja se glede na to, kaj počnete, zato se prilega v eno vrstico:

| Skupina | Gumbi | Prikazano |
|---|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Odpri}}, {{ui:Shrani}}, {{ui:Izvoz}} (meni) | Vedno |
| Skica | {{ui:Skica}} | Ko skica ni odprta |
| Skica | {{ui:Izhod}}, {{ui:Črta}}, {{ui:Pravokotnik}}, {{ui:Krožnica}}, {{ui:Lok}}, {{ui:Točka}}, {{ui:Osna črta}}, {{ui:Zaobli}}, {{ui:Kota}}, {{ui:Pomožno}} | Samo ko je skica odprta |
| Značilke | {{ui:Iztisni}}, {{ui:Izreži}}, {{ui:Zavrti}}, {{ui:Izvrtina}}, {{ui:Linearno}}, {{ui:Krožno}}, {{ui:Zrcali}}, {{ui:Zaobli}}, {{ui:Posnemi}}, {{ui:Lupina}}, {{ui:Več}} (meni: Zavrtan rez, Ravnina, Os, Točka, {{ui:Potegni po poti}}, {{ui:Prehod}}, Nagib izvleka) | Na delu, ne med odprto skico ali risbo. Zaobljitev in posnetje delujeta na ravnih robovih med dvema ravnima ploskvama; lupina in nagib na ravnih ploskvah. Potegni po poti in Prehod še nista izdelana v tej različici (potrebujeta natančno jedro); klik nanju to pove |
| Značilke | {{ui:Končano}} | Samo ko izberete robove ali ploskve za zaobljitev, posnetje, lupino ali nagib |
| Risba | {{ui:Risba}} | Na delu (uporabno, ko ima del telo) |
| Risba | {{ui:Baza}}, {{ui:Okvir}}, {{ui:Površinska obdelava}}, {{ui:Detajl}}, {{ui:PDF}}, {{ui:Nazaj}} | Samo na listu risbe |
| Sestav | {{ui:Sestav}} | Na delu (uporabno, ko ima del telo) |
| Sestav | {{ui:Dodaj kopijo}}, {{ui:Vstavi}}, {{ui:Spoj}}, {{ui:Kolizija}}, {{ui:Uredi del}}, {{ui:Zapri}} | Samo v sestavu |
| Sestav | {{ui:Nazaj}} | Med urejanjem dela iz sestava |
| Urejanje | {{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Več}} (meni: Izreži, Kopiraj, Prilepi, Prilepi na isto mesto, Podvoji, Izbriši, Izberi vse, Prekliči izbor) | Vedno; vsak element deluje na skici, zgodovini ali sestavu, v katerem ste |
| Ogled | {{ui:Prilagodi}}, {{ui:Pravokotno na}}, {{ui:Pogledi}} (meni: Meri, Lastnosti mase, Prerez, Nagib izvleka, Zebra, Ukrivljenost, {{ui:Osnovne ravnine}}, nato Izometrično, Spredaj, Nazaj, Zgoraj, Spodaj, Desno, Levo) | Vedno |

Premaknite kazalec nad gumb, da vidite, kaj naredi, in njegovo tipko. Zatemnjen gumb trenutno ni mogoče uporabiti: na primer gumbi značilk, ko je skica odprta, ali {{ui:Spoj}}, preden ima sestav dva dela.

Meni {{ui:Več}} v skupini Urejanje našteje vsako urejevalno dejanje s tipko. Na kaj delujeta kopiraj in prilepi, je odvisno od tega, kje ste; glejte [Kopiraj, prilepi in podvoji](topic:copy-paste). Namig zatemnjenega elementa pove, zakaj zdaj ne more delovati.

Meni {{ui:Izvoz}} vsebuje {{ui:STL, za 3D-tiskanje}}, {{ui:3MF, za 3D-tiskanje}}, {{ui:STEP AP242 (točno telo)}}, {{ui:STEP AP214 (točno telo)}}, {{ui:STEP (fasetiran, mrežno jedro)}}, {{ui:STEP AP214 (fasetiran, mrežno jedro)}}, {{ui:DXF skice ali ravne ploskve}} in {{ui:Risba (PDF): pogledi, prerez, detajl, GD&T}}. Točni elementi STEP zapišejo okrogle ploskve na njihovih pravih površinah; fasetirani jih zapišejo kot ravne fasete.

## Zgodovina (levo)

Podokno levo je zgodovina značilk dela, seznam, ki ga PartCraft ponovno izdela od zgoraj navzdol.

- Naslov je ime dela (»Part1«, dokler ga ne preimenujete).
- **Ravnina Spredaj**, **Ravnina Zgoraj** in **Ravnina Desno** so na začetku. Kliknite eno, da jo izberete; v pogledu zasveti.
- Spodaj so vaše značilke v vrstnem redu, v katerem ste jih naredili. Skica, ki jo uporablja značilka, je zamaknjena pod to značilko.
- Zastavica na desnem koncu vrstice pove njeno stanje:

| Zastavica | Pomen |
|---|---|
| (brez) | Izdelano, skica je popolnoma določena |
| − | Skica, ki je premalo določena (še se lahko premika) |
| + | Skica, ki je preveč določena |
| ⚠ | Izdelano z opozorilom (zadržite za branje) |
| ⚠ napaka | Značilka ni uspela. Zadržite za razlog ali kliknite |
| ⚠ ni izdelano | Značilka potrebuje drugo, ki ni uspela ali je izklopljena |
| izklopljeno | Zaduščeno |

- Vsaka značilka pokaže svojo glavno številko za imenom, na primer »25 mm« za Iztisni ali »Ø6.6 thru« za luknjo. Dvoklik na številko ali pritisnite {{key:F2}} v vrstici, da jo spremenite tam. Glejte [Spreminjanje velikosti](topic:change-sizes).
- Kliknite značilko, da jo uredite desno. Dvoklik na skico jo odpre.
- Ko se vrnete nazaj, se v seznamu pojavi vrstica **Vrstica vrnitve · naprej**. Značilke pod njo so zatemnjene in niso izdelane.
- Ko je vrstica izbrana, {{key:Up}} in {{key:Down}} premikata med vrsticami, {{key:Alt+Up}} / {{key:Alt+Down}} pa premakneta samo značilko, kjer zgodovina to dopušča.

V sestavu isto podokno namesto tega našteje **Dele** (prvi je označen kot »pritrjen«) in **Spoje**.

### Dejstva o delu

Pod zgodovino polje **Del** našteje **Prostornino**, **Površino**, **Velikost (X × Y × Z)**, **Prehodne luknje**, **Telesa**, **Trikotnike**, število **Značilk** in koliko jih ne uspe. Prostornine in površine so fasetiranega telesa, ki ga izdela mrežno jedro, nekoliko pod pravo vrednostjo pri okroglih oblikah (glejte [Značilke in njihove možnosti](topic:features#curves-resolution)).

V sestavu je polje naslovljeno **Sestav**: Deli, Primerki, Spoji, Nepovezano in Prekrivanje.

## 3D pogled (sredina)

Pogled prikazuje telo, osnovne ravnine in vsako skico, ki je še ne uporablja značilka.

Osnovne ravnine so narisane v celoti, dokler je del prazen. Ko ima telo, se umaknejo: narisane so šibko, da ne pokrijejo dela, kliki pa gredo skozi njih do dela. Vrnejo se v celoti, ko izbirate, kje skicirati ({{ui:Skica}}, ko nič ni izbrano), in ko izberete eno v zgodovini. {{ui:Pogledi}} › {{ui:Osnovne ravnine}} jih skrije povsem; še vedno se prikažejo, ko izbirate, kje skicirati. PartCraft si zapomni to izbiro.

- Povlecite za vrtenje dela, desni ali srednji gumb za premik, kolešček za povečavo na kazalcu. Podrobnosti v [Tipke in miška](topic:keyboard).
- Pokažite na ploskev, rob ali ravnino, da zasveti. Kliknite za izbor. Ploskve se osvetlijo v celoti, robovi so narisani in izbrani celi. {{key:Shift}}+klik zbere več robov ali ploskev. Ostanejo označeni.
- Kocka pogleda v zgornjem desnem kotu se vrti z delom: kliknite ploskev, rob ali vogal, da pogledate od tam, jo povlecite, da zavrtite, gumb hiše pa vrne na začetek. Glejte [Kocka pogleda](topic:view-cube).
- Izbrana iztisna značilka pokaže oranžno puščico na svoji končni ploskvi, zasuk pa ukrivljeno puščico na koncu: povlecite jo, da spremenite globino ali kot, ali vpišite v polje poleg nje. Glejte [Spreminjanje velikosti](topic:change-sizes#drag-it-in-the-view).
- Ko je del prazen, škatla z naslovom **Začnite del** našteje prve korake.
- Spustite datoteko `.partcraft.json` ali `.partcraft-asm.json` kamor koli na pogled, da jo odprete. Datoteka `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ali `.3dm`, spuščena tja, se odpre kot trdno telo.

### Med izbiranjem robov ali ploskev

Po {{ui:Zaobli}}, {{ui:Posnemi}} ali {{ui:Lupina}}, ko nič ni izbrano (ali {{ui:Izberi robove}} na takšni značilki), se del prikaže, kot je bil pred to značilko. Kliknite robove ali ploskve, da jih dodate ali odstranite; njihove oznake pokažejo, kaj je notri. {{ui:Končano}} ali {{key:Esc}} konča. Glejte [Zaobljanje, posnemanje in votlenje](topic:fillet-chamfer-shell).

### Na listu risbe

{{ui:Risba}} zamenja 3D pogled z listom risbe A3. Kolešček povečuje, desni ali srednji vlek premika, {{key:F}} prilagodi. Glejte [Izdelava risbe](topic:drawing-pdf).

### Ko je skica odprta

Pogled se obrne, da gleda naravnost v ravnino skice, in na vrhu se pokaže 2D plast skice. Del kaže samo značilke, izdelane pred to skico. Trak zgoraj levo pokaže oznako stanja skice (»Popolnoma določena«, »Premalo določena · 3 prostostne stopnje« in podobno) in njeno ime, na primer »Skica2 na ploskvi Iztisni1«.

## Podokno lastnosti (desno)

Podokno desno prikaže, kar je izbrano, in njegov naslov to poimenuje:

- **Del** (nič izbrano): ime dela **Ime** in nastavitev **Krivulje**.
- Ravnina: gumb {{ui:Skiciraj na njej}}.
- **Ploskev**: kakšna je (Ravna ploskev, Valj s polmerom in osjo, Stožec, Krogla ali Torus), njena površina, katera značilka jo je ustvarila, in za ravno ploskev {{ui:Skica na tej ploskvi}}, {{ui:Pravokotno na}}, {{ui:Izvozi ploskev kot DXF}}, {{ui:Iztisni iz nje}}, {{ui:Izreži vanjo}} in {{ui:Izvrtina tu}} (glejte [Potegnite ali potisnite celo ploskev](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Rob**: njegova vrsta (ravni, krožnica s središčem in polmerom ali krivulja), njegova dolžina in dve ploskvi, med katerima leži (na primer »Iztisni1 končna ploskev in Iztisni1 stranska«), z gumboma {{ui:Zaobli}} in {{ui:Posnemi}}.
- Več robov ali ploskev, izbranih s {{key:Shift}}: koliko jih je, z {{ui:Zaobli}} in {{ui:Posnemi}} za robove ter {{ui:Počisti}}.
- **Značilka**: njene številke in možnosti, mere njene skice, nato {{ui:Zaduši}}, {{ui:Povrni nazaj do sem}}, {{ui:Premakni više}}, {{ui:Premakni niže}}, {{ui:Izbriši}} in njeno **Ime**.
- Odprta skica: njeno stanje, odnosi, ki jih lahko dodate izboru, seznam odnosov in mer, **Dodaj po koordinatah**, ter {{ui:Zapusti skico}}, {{ui:Prilagodi}} in {{ui:Izvozi kot DXF}}.
- Na listu risbe: nastavitve prereza in detajla ali izbrani simbol GD&T.
- V sestavu: sestav, izbrani del ali izbrani spoj.

Vsako polje za številko začne veljati, ko pritisnete {{key:Enter}} ali {{key:Tab}}, ali kliknete drugam. Del se takoj ponovno izdela; gumba V redu ni. Za vrnitev uporabite {{key:Mod+Z}}.

## Vrstica stanja (spodaj)

- Levo koordinate kazalca v skici (samo, ko je skica odprta).
- V sredini sporočila: kaj storiti naslednje in zakaj je nekaj zavrnjeno. Preberite jo, ko se zdi, da se nič ne dogaja.
- Blizu desne strani čip jedra: v tej različici vedno »Mrežno jedro«. Zadržite za pojasnilo. Glejte [Mrežno jedro](topic:solid-kernels).
- Na desni čip: »Ponovno izdelovanje …«, medtem ko se del ponovno izdeluje, nato »Izdelano v … ms«, ko je vse v redu, ali »1 značilka ne uspe«. V sestavu piše »Postavljeno v … ms« ali šteje težave s spoji.

Glejte tudi [Začetek priročnika v Illustrate](topic:illustrate): delovno okolje, ki iz vaših delov in sestavov izdela priročnike sestavov.

## Na ozkem zaslonu

Do 760 slikovnih pik široko, na primer na telefonu, pogled ohrani zaslon: orodna vrstica je ena vrstica, ki se pomika vstran, podokna pa se odprejo kot listi iz vrstice spodaj. {{ui:Orodja}} skrije orodno vrstico, {{ui:Premik}} pa jo postavi spodaj. Glejte [Sledilna ploščica, dotik in majhni zasloni](topic:trackpad-and-touch).
