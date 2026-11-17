---
title: Tipke in miška
summary: Vse bližnjice na tipkovnici in dejanja miške v PartCraftu, razvrščeni glede na to, kje delujejo: povsod, kopiranje in lepljenje, na delu, v 3D-pogledu, v skici, v zgodovini in v sestavu.
keywords: tipkovnica, bližnjice, bližnjične tipke, tipke, miška, orbita, vrtenje, pomik, povečava, kolesce, desni klik, razveljavi, uveljavi, shrani, odpri, escape, izbriši, alt puščica, kopiraj, prilepi, izreži, podvoji, izberi vse, srednji gumb
from: 3a59c3a3
---

Tipke ne delujejo, medtem ko vnašate v polje na podoknu, razen {{key:Mod+S}} in {{key:Mod+O}}, ki vedno delujeta. Tipke za črke delujejo brez modifikatorja.

Splošne opombe o tipkah v brskalniku in na tipkovnicah brez funkcijskih tipk: [Tipke, miške in sledilne ploščice](common:keys).

## Povsod

| Tipka | Dejanje |
|---|---|
| {{key:Mod+S}} | Shrani del (v sestavu: sestav). Najprej zapre odprto skico |
| {{key:Mod+O}} | Odpre datoteko dela ali sestava (če so neshranjene spremembe, najprej vpraša) |
| {{key:Mod+Z}} | Razveljavi |
| {{key:Mod+Y}} ali {{key:Mod+Shift+Z}} | Uveljavi |
| {{key:F1}} | Odpre ali zapre to pomoč (tudi {{ui:Pomoč}} v orodni vrstici programa). {{key:Esc}} jo tudi zapre. Na mnogih prenosnikih in Mac tipkovnicah držite Fn |
| {{key:Ctrl+Shift+F}} | Način zaslona: običajen, celozaslonski, celozaslonski s skritimi vrsticami. Na Macu je to Control, ne ⌘ |
| {{key:Esc}} | Izhod iz celozaslonskega načina (če ste v njem) |
| {{key:Mod+,}} | {{ui:Nastavitve}}, vključno z zavihkom {{ui:PartCraft}} (glejte [Nastavitve PartCraft](topic:settings)) |

V številskem polju na podoknu je {{key:Mod+Z}} razveljavitev besedila v brskalniku. V številskem polju nad koto skice razveljavi v PartCraftu.

## Kopiranje, lepljenje in podvajanje

Delujejo na tem, kar urejate: na izbrani geometriji v odprti skici, na izbrani značilki v zgodovini ali na izbranem delu v sestavu. Podrobnosti v [Kopiranje, lepljenje in podvajanje](topic:copy-paste).

| Tipka | Dejanje |
|---|---|
| {{key:Mod+C}} | Kopira izbor |
| {{key:Mod+X}} | Izreže: kopira, nato izbriše |
| {{key:Mod+V}} | Prilepi. V skici kopija sledi kazalcu: kliknite, kamor jo želite |
| {{key:Mod+Shift+V}} | Prilepi na isto mesto: enake koordinate (v sestavu na isto mesto) |
| {{key:Mod+D}} | Podvoji: kopira in prilepi v enem koraku, odložišče pusti pri miru |
| {{key:Mod+A}} | Izbere vse (v skici) |
| {{key:Esc}} | Prekliče izbor (in lepljenje, ki sledi kazalcu) |

V številskem polju te tipke kopirajo in prilepijo besedilo, kot običajno. Izbrano besedilo na podoknu kopira brskalnik.

## Na delu (skica ni odprta)

| Tipka | Dejanje |
|---|---|
| {{key:S}} | Skica na izbrani ravnini ali ravni ploskvi; če ni nič izbrano, izberite z vnosom s klikom |
| {{key:F}} | Prilagodi del pogledu |
| {{key:M}} | {{ui:Meri}} v vseh delovnih okoljih in v sestavu; {{key:Esc}} počisti izbor, še en {{key:Esc}} zapre meritev (glejte [Merjenje razdalj, kotov in mase](topic:measure)) |
| {{key:X}} | Prerezni pogled vklopi ali izklopi v vseh delovnih okoljih in v sestavu; {{key:Esc}} ga zapre (glejte [Prerezni pogled](topic:section-view)) |
| {{key:Delete}} | Izbriše izbrano značilko (vpraša, če jo uporabljajo drugi) |
| {{key:0}} … {{key:9}}, {{key:.}} | Ko je značilka izbrana: vtipkajte njeno glavno število (globino izvleka, premer izvrtine, število v vzorcu, polmer zaobljitve …), nato {{key:Enter}}. {{key:Esc}} ohrani staro vrednost |
| {{key:Backspace}} | Izbriše izbrano značilko, ko je izbrana |
| {{key:Esc}} | Preneha izbirati ravnino skice ali počisti izbor (tudi robove ali ploskve, izbrane s {{key:Shift}}) |

## V 3D-pogledu

Najprej kliknite v pogled, da dobi tipkovnični fokus.

| Tipka | Dejanje |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Zavrti pogled za 15 stopinj |
| {{key:Shift+Left}} in druge puščice | Pomik |
| {{key:Plus}} ali {{key:=}} | Povečava |
| {{key:Minus}} | Pomanjšava |

| Miška | Dejanje |
|---|---|
| Povlek z levim gumbom | Zavrti (orbita) pogled |
| Povlek z desnim ali srednjim gumbom | Pomik |
| {{key:Shift}}, {{key:Ctrl}} ali ⌘ med povlekom z levim gumbom | Pomik |
| Vrtenje kolesca | Povečava pri kazalcu (stran od vas povečuje) |
| Dvoprstni potez na sledilni ploščici | Zavrti pogled; s {{key:Shift}} pomik. Stiskanje povečuje. Nastavi se z **Drsenje** v [Nastavitve PartCraft](topic:settings) |

Z **Obračanje pogleda: srednji gumb** v [Nastavitve PartCraft](topic:settings) srednji gumb zavrti pogled, {{key:Shift}} s srednjim ali desnim gumbom pomika, levi gumb pa samo izbira.
| Klik | Izberite ploskev (označi se v celoti), rob ali ravnino |
| {{key:Shift}}+klik na rob ali ploskev | Zberite več robov ali ploskev |
| Klik na prazen prostor | Počisti izbor |

## Pri izbiranju robov ali ploskev za zaobljitev, posnetje ali lupino

| Tipka ali miška | Dejanje |
|---|---|
| Klik na rob ali ploskev | Doda ga ali ga odstrani, če je že izbran |
| {{key:Esc}} ali {{key:Enter}} | Konča izbiranje (enako kot {{ui:Končano}}) |
| {{key:F}} | Prilagodi |
| Puščične tipke, ko je pogled v fokusu | Zavrti; s {{key:Shift}} pomik |

## Na risalnem listu

| Tipka | Dejanje |
|---|---|
| {{key:F}} | Prilagodi list |
| {{key:Plus}} / {{key:Minus}} | Povečava in pomanjšava (ko je list v fokusu) |
| {{key:Shift+Left}} in druge puščice | Pomik (ko je list v fokusu) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Premakne izbrani simbol GD&T za 1 mm |
| {{key:Delete}} ali {{key:Backspace}} | Izbriše izbrani simbol |
| {{key:Esc}} | Preneha postavljati simbol; sicer počisti izbor; sicer nazaj na model |

| Miška | Dejanje |
|---|---|
| Klik na pogled, ko je izbrano Referenca, Okvir, Obdelava ali Podrobnost | Postavi jo tja (poravna na najbližjo črto) |
| Klik na simbol | Izbere ga |
| Povlek simbola | Premakne ga (vodilka ostane na svoji točki) |
| Vrtenje kolesca | Povečava pri kazalcu |
| Povlek z desnim ali srednjim gumbom | Pomik |

## V skici

| Tipka | Dejanje |
|---|---|
| {{key:L}} | Črta |
| {{key:R}} | Pravokotnik |
| {{key:C}} | Krožnica |
| {{key:A}} | Lok (središče, začetek, konec) |
| {{key:P}} | Točka |
| {{key:N}} | Središčnica |
| {{key:F}} | Zaobli kot |
| {{key:D}} | Kota |
| {{key:B}} | Zlepek (točke prileganja) |
| {{key:T}} | Prirezi |
| {{key:E}} | Podaljšaj |
| {{key:O}} | Odmik ({{key:B}} med odmikanjem: obe strani) |
| {{key:M}} | Zrcali |
| {{key:S}} | Izberi |
| {{key:Q}} | Izbrane krivulje preklopi v konstrukcijske in nazaj |
| {{key:Enter}} | Konča verigo črt ali zlepek |
| {{key:Delete}} ali {{key:Backspace}} | Izbriše izbor |
| {{key:Mod+A}} | Izbere vse v skici |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Kopira, izreže, prilepi geometrijo (lepljenje sledi kazalcu) |
| {{key:Mod+Shift+V}} | Prilepi na iste koordinate |
| {{key:Mod+D}} | Podvoji izbor in ga postavi s klikom |
| {{key:Esc}} | Korak nazaj: prekliče številsko polje ali lepljenje, konča verigo črt, nazaj na Izberi, počisti izbor, nato zapre skico |

| Miška | Dejanje |
|---|---|
| Klik | Postavi točke z orodjem za risanje; izbira z Izberi |
| {{key:Shift}}+klik | Doda v izbor ali odvzame iz njega ({{key:Ctrl}}+klik na Windows in Linux, ⌘+klik na Macu, enako) |
| Povlek po praznem prostoru (Izberi) | Okno: izbere vse, kar je povsem znotraj |
| Povlek točke, črte ali roba kroga (Izberi) | Premakne jo; povezave ostanejo |
| Povlek številke kote (Izberi) | Premakne oznako |
| Dvoklik na koto | Spremeni vrednost |
| Dvoklik ali desni klik med risanjem črt | Konča verigo |
| Povlek z desnim ali srednjim gumbom | Pomik |
| Vrtenje kolesca | Povečava pri kazalcu |

### V številskem polju

| Tipka | Dejanje |
|---|---|
| {{key:Enter}} | Uporabi vrednost |
| {{key:Esc}} | Zapre brez spremembe |

Klik zunaj polja prav tako uporabi vrednost.

## V zgodovini

| Tipka | Dejanje |
|---|---|
| {{key:Tab}} | Doseže seznam |
| {{key:Up}} / {{key:Down}} | Premika med vrsticami |
| {{key:Enter}} ali {{key:Space}} | Izbere vrstico |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Premakne izbrano značilko gor ali dol, kjer to dovoljuje zgodovina |
| {{key:F2}} | Spremeni glavno število značilke v njeni vrstici; {{key:Enter}} ga nastavi, {{key:Esc}} ohrani staro |

| Miška | Dejanje |
|---|---|
| Klik | Izbere ravnino ali značilko |
| Dvoklik na skico | Odpre jo |
| Dvoklik na številko značilke | Spremeni jo v vrstici |

## V sestavu

| Tipka | Dejanje |
|---|---|
| {{key:J}} | Začne sklep: nato kliknite ravno ploskev na vsakem od dveh delov |
| {{key:F}} | Prilagodi |
| {{key:Esc}} | Prekliče začeti sklep ali počisti izbor |
| {{key:Delete}} | Odstrani izbrani del ali sklep |
| {{key:Backspace}} | Odstrani izbrani del ali sklep |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Razveljavi in uveljavi v seznamu sestava |
| {{key:Mod+D}} | Podvoji izbrani del (isti del, ob drugih) |
| {{key:Mod+C}}, nato {{key:Mod+V}} ali {{key:Mod+Shift+V}} | Kopira del, prilepi ga ob druge ali na isto mesto |

Miška v pogledu: kot v 3D-pogledu zgoraj. Klik na del ga izbere. Dvoklik na del v seznamu ga uredi.

## V delovnem okolju Skripta

| Tipka | Dejanje |
|---|---|
| {{key:F5}} | Zažene skripto (v urejevalniku, podoknu ali pogledu) |
| {{key:Mod+Enter}} | Zažene izbrane vrstice ali vrstico, na kateri je kazalec |
| {{key:Tab}} / {{key:Shift+Tab}} | Zamakne / odmakne izbrane vrstice. Za izhod iz urejevalnika s tipkovnico pritisnite {{key:Esc}}, nato {{key:Tab}} |
| {{key:Mod+/}} | Izbrane vrstice zakomentira ali spet odkomentira |
| {{key:Mod+F}} / {{key:Mod+H}} | Išče / išče in zamenja v skripti; {{key:Enter}} ali {{key:F3}} naslednji zadetek, {{key:Shift+Enter}} ali {{key:Shift+F3}} prejšnji, {{key:Esc}} zapre |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Zloži / razloži blok, na katerem je kazalec (funkcija, if, for, while … end) |
| {{key:Mod+Space}} | Prikaže dopolnitve za ime, ki ga vtipkate (odpre se tudi po dveh črkah); {{key:Up}} / {{key:Down}} izbirata, {{key:Enter}} ali {{key:Tab}} vzameta eno, {{key:Esc}} zapre |
| {{key:Enter}} v vrstici pod konzolo | Zažene ta en stavek; {{key:Up}} in {{key:Down}} prineseta prejšnje |
| {{key:F}} | Prilagodi pogled temu, kar skripte prikazujejo |

Glejte [Pisanje in zagon skript](topic:craftscript).

## Bližnjice, ki jih lahko prevzame brskalnik

- {{key:Mod+Y}} v Safariju morda odpre zgodovino: za uveljavitev uporabite {{key:Mod+Shift+Z}}.
- {{key:Mod+D}} je tipka brskalnika za zaznamke: PartCraft jo prevzame, ko je program v fokusu, in jo pusti pri miru, ko vnašate v polje.
- {{key:F11}} ter {{key:Mod+Plus}} / {{key:Mod+Minus}} sta celozaslonski način in povečava strani brskalnika, ne PartCraftova. Za celozaslonski način uporabite {{key:Ctrl+Shift+F}}, za model pa kolesce.
- Funkcijske tipke na mnogih prenosnikih in Macih potrebujejo tipko Fn: pritisnite Fn+{{key:F1}} za pomoč ali uporabite gumb {{ui:Pomoč}}.

Dotik in potezi na sledilni ploščici: [Sledilna ploščica, dotik in majhni zasloni](topic:trackpad-and-touch).

## Kje je Premik

{{ui:Premik}} je v skupini Značilke, v meniju {{ui:Več}}, kot {{ui:Premakni telo}}; v polju {{ui:Premik}}, kjer vtipkate ΔX, ΔY in ΔZ; ter kot puščice {{ui:Povlecite za premik}} na delu.
