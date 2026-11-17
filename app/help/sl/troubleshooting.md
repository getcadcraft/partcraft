---
title: Odpravljanje težav
summary: Težave, ki jih lahko srečate v PartCraft, od zagona aplikacije do neuspešnih značilk, skic, ki se ne rešijo, datotek, ki se ne odprejo, in stikov, ki se čudno obnašajo, s sporočilom, ki ga vidite, in popravkom.
keywords: težava, napaka, pomoč, ne deluje, ne uspe, sesuv, prazno, webgl, webassembly, jedro, ni izdelano, prekomerno določeno, odprt profil, ni mogoče odpreti, nič se ne zgodi, napačna smer, počasno
from: 7728542c
---

Ko nekaj ne deluje, najprej preberite **vrstico stanja** na dnu: PartCraft tam pove, zakaj je zavrnil ali kaj pričakuje naslednje. Neuspešna značilka prikaže svoje sporočilo tudi na vrhu desnega podokna in ko se z miško premaknete čez njeno vrstico v zgodovini.

## Aplikacija se ne zažene

### „Ta brskalnik ne more prikazati 3D (WebGL je izklopljen ali manjka), zato PartCraft tukaj ne more delovati.“

**Vzrok:** v brskalniku je 3D grafika (WebGL) izklopljena, blokirana ali je ne podpira gonilnik grafike.

**Popravek:**

:::chromium
Odprite `chrome://settings/system` (ali `edge://settings/system` v Edge) in vklopite „Uporabi pospeševanje grafike, če je na voljo“, nato znova zaženite brskalnik. Če je že vklopljeno, preverite `chrome://gpu` za stanje WebGL in posodobite gonilnik grafike.
:::

:::firefox
Odprite `about:support` in poglejte Grafika, WebGL. Če je blokirano, posodobite gonilnik grafike. V `about:config` mora biti `webgl.disabled` nastavljeno na `false`.
:::

:::safari
WebGL je v trenutnem Safariju vedno vklopljen. Posodobite macOS (Safari se posodobi z njim). Če še vedno ne deluje, poskusite Chrome ali Firefox na istem Macu, da izključite strojno opremo grafike.
:::

Oddaljena namizja in nekateri virtualni stroji nimajo WebGL. Poskusite na samem računalniku.

### „Trdno jedro ni bilo naloženo: …“

**Vzrok:** geometrijsko jedro (program WebAssembly) ni bilo mogoče prenesti ali zagnati. Ponavadi se je povezava prekinila med nalaganjem aplikacije, WebAssembly je izklopljen zaradi pravilnika podjetja ali nastavitve za zaščito brskalnika, ali je brskalnik zelo star.

**Popravek:** ponovno naložite stran, ko ste na spletu. Če še vedno ne uspe, poskusite drug aktualen brskalnik. V Firefoxu mora biti `javascript.options.wasm` v `about:config` nastavljeno na `true`. Brez povezave se aplikacija in njeno jedro naložita samo, če je bilo v vrstici aplikacije prikazano **Pripravljeno za delo brez povezave**, preden ste izgubili povezavo ({{ui:Shrani za delo brez povezave}} med povezavo; glejte [Delo brez povezave](common:offline)).

### Gumb za delo brez povezave pravi „Ni bilo mogoče shraniti“ ali „Brez povezave ni na voljo“

**Ni bilo mogoče shraniti**: nekatere datoteke se niso prenesle. Kliknite za ponovni poskus na spletu; počasna ali omejena povezava morda potrebuje drugi poskus. **Brez povezave ni na voljo**: to okno brskalnika ne more hraniti kopije za delo brez povezave (zasebna okna in nekateri upravljani računalniki to blokirajo). Uporabite običajno okno ali pustite zavihek odprt.

### PartCraft je brez povezave, vendar zastarel

Kliknite **Pripravljeno za delo brez povezave**, ko ste na spletu, in izberite {{ui:Shrani znova (pridobi najnovejšo različico)}}.

### „Potegni po poti: še ni izdelano. Potrebuje točno jedro, …“

Celotno sporočilo je „<Ime>: še ni izdelano. Potrebuje točno jedro, ki ga ta različica PartCraft nima. Pomoč › Kaj še ni izdelano pove, kaj storiti namesto tega.“ Prikaže se, ko izberete Potegni po poti, Prehod, Rebro, prirobnico pločevine, značilko ploskve, Združi, Premakni telo, Skaliraj telo ali Vzorec poti, in pri drugih stvareh, ki jih zmore samo točno jedro. Z brskalnikom ali delom ni nič narobe: ta različica PartCraft vsak del izdeluje z mrežnim jedrom. Glejte [Kaj še ni izdelano](topic:not-built-yet), kaj storiti namesto tega, in [Mrežno jedro](topic:solid-kernels).

### Nalaganje trdnega jedra… ne izgine

Počakajte malo pri počasni povezavi: trdno jedro in 3D knjižnica se prvič preneseta. Nato ponovno naložite stran. Če stran sama kaže napako, glejte zgoraj.

## Nič se ne zgodi, ko pritisnem tipko

- Tipke ne delujejo, medtem ko je kazalec v polju v podoknu. Kliknite v 3D pogled ali pritisnite {{key:Esc}} po vnosu (ali {{key:Tab}} za izhod).
- Puščične tipke in {{key:Plus}}/{{key:Minus}} zasukajo in povečajo pogled šele, ko kliknete v pogled.
- Odprt je pogovor: najprej odgovorite nanj.
- V skici je {{key:F}} orodje Zaobljevanje, ne Prilagodi. Uporabite gumb {{ui:Prilagodi}}.

## Gumb orodne vrstice je zatemnjen

- Gumbi značilk so zatemnjeni, medtem ko je skica odprta. Najprej zaprite skico.
- Orodja za skico delujejo samo znotraj skice.
- {{ui:Razveljavi}} in {{ui:Uveljavi}} sta zatemnjena, kadar ni česa razveljaviti ali uveljaviti.
- {{ui:Sestav}} potrebuje del s telesom. {{ui:Spoj}} potrebuje dva dela v sestavu. {{ui:Uredi del}} potrebuje izbran del.
- {{ui:STEP AP242 (točno telo)}} in {{ui:STEP AP214 (točno telo)}} sta zatemnjena v sestavu: izvozite vsak del posebej. Drug program zavrne točno datoteko: poskusite {{ui:STEP AP214 (točno telo)}}, nato {{ui:STEP (fasetiran, mrežno jedro)}}, in nam sporočite prek {{ui:Pomoč}} › {{ui:Prijavite težavo}}.
- {{ui:Potegni po poti}}, {{ui:Prehod}} in druge značilke, ki potrebujejo točno jedro, niso zatemnjene: ostanejo klikabilne, njihovi namigi se končajo z „še ni izdelano (potrebuje točno jedro)“, klik nanje pa to pove v vrstici stanja. Glejte [Kaj še ni izdelano](topic:not-built-yet).
- {{ui:Risba}} potrebuje del s telesom in je zatemnjena, medtem ko je skica odprta.
- Elementi menija {{ui:Izvoz}} so zatemnjeni v sestavu: sestavov še ni mogoče izvoziti. Zaprite ga ali uredite del, da izvozite.

## Težave s skico

### Skica ne dovoli dodati odnosa

„Noben odnos ne ustreza tej izbiri. Izberite en ali dva predmeta (Shift+klik doda).“ Odnos potrebuje drugačno izbiro. Glejte [Odnosi in kote skice](topic:sketch-relations) za to, kaj potrebuje vsak.

### „Prekomerno določeno: … ni mogoče izpolniti vseh. Razveljavite ali izbrišite enega od njih.“

**Vzrok:** novi odnos ali kota nasprotuje obstoječim. Skica se ni premaknila.

**Popravek:** {{key:Mod+Z}} ali izbrišite enega od rdečih predmetov na seznamu v desnem podoknu (izberite **Izbriši** poleg njega).

### „Prekomerno določeno: … je že določeno. Izbrišite ga.“

**Vzrok:** odnos ne doda ničesar: drugi ga že zahtevajo (na primer Vzporedno na dveh straneh pravokotnika ali kota, ki je že fiksna). V tej različici ni vodenih kot.

**Popravek:** izbrišite ga. Značilka se vseeno izdela, z opozorilom.

### Teh predmetov ni mogoče skupaj kotirati.

Kliknili ste na primer točko in krog. Namesto tega kotirajte na središčno točko kroga.

### „Zaoblitev potrebuje vogal, kjer se stikata natanko dve črti.“ / „Ta polmer je prevelik za te črte.“

Kliknite natanko na vogalno točko dveh polnih črt. Uporabite manjši polmer, kot ga dopušča krajša črta.

### Geometrija skoči nazaj, ko jo povlečem

Povlek bi prekinil odnos ali koto, zato PartCraft jo vrne nazaj. Premikati se da samo modro (nedoločeno) geometrijo.

### „Ta skica se ne more odpreti: potrebuje Extrude2, ki ne uspe.“

Skica sedi na ploskvi značilke, ki ni izdelana. Najprej popravite to značilko, jo ponovno vključite ali se pomaknite naprej v zgodovini.

## Težave z značilkami

| Sporočilo | Vzrok | Popravek |
|---|---|---|
| „Najprej naredite skico: izberite ravnino, Skica, narišite zaprt profil, Izhod.“ | Ni nobene skice z nepovezanimi krivuljami, izbrane tudi ni nobene | Narišite skico ali izberite skico, ki jo uporabite v zgodovini |
| „Skica nima zaprtega profila za iztis.“ (ali „za zavrtenje“) | Ni zaprte zanke polnih črt | Zaprite vrzeli; konstrukcijske črte vrnite s {{key:Q}} |
| „Profil je odprt: konec pri (x, y) ni ničesar povezanega.“ | Vrzel na tej točki | Odprite skico, povlecite konec na sosednjega, da se prilepi |
| „Profil se veji pri (x, y): tam se srečajo več kot dva konca.“ | Na eni točki se srečajo tri ali več črt | Izbrišite odvečno črto ali jo preklopite na konstrukcijo |
| „Zaprta zanka potrebuje vsaj tri stranice ali krivuljo.“ | Dve črti naprej in nazaj | Ponovno narišite zanko |
| „Skozi vse je za izreze. Za čep uporabite globino.“ | Čep nastavljen na Skozi vse | Nastavite Konec na Slepo ali Srednja ravnina |
| „Na tej strani skice ni ničesar za izrezati. Poskusite drugo smer.“ | Izrez kaže stran od materiala | Označite Obrni smer |
| „Še ni ničesar za izrezati.“ / „Še ni ničesar za vrtanje.“ | Pred to značilko ni telesa | Najprej naredite čep ali premaknite značilko navzdol |
| „Narišite središčnico (konstrukcijsko črto) v skici, okoli katere zavrtite.“ | Zavrtenje brez osi | Dodajte središčnico ali izberite črto pri Osi |
| „Profil seka os. Ohranite ga na eni strani središčnice.“ | Profil na obeh straneh osi | Ponovno narišite polovico profila |
| „Postavite točke skice, kjer naj bodo luknje (orodje Točka), nato naredite luknjo.“ | V skici ni prostih točk | Dodajte točke s {{key:P}} |
| „Razširitev mora biti širša od luknje.“ | Razširitev ⌀ ni večja od Premera | Naredite razširitev širšo |
| „Razširitev mora biti plitvejša od luknje.“ | Razširitev globlja od slepe luknje | Naredite jo plitvejšo ali luknjo globljo |
| „Izberite značilke za kopiranje.“ | Vzorec ali zrcalo brez označenih značilk | Označite značilko pod Značilke za kopiranje |
| „Extrude2 nima telesa za kopiranje.“ | Kopirana značilka ni uspela ali je izključena | Popravite jo ali jo vključite |
| „Potrebuje Sketch3, ki ne uspe.“ | Značilka, od katere je odvisna, ni izdelana | Popravite značilko, ki jo navaja |
| „Ploskev, na kateri sedi, je izginila (Extrude1 ni izdelana).“ | Ploskev skice ne obstaja več | Popravite to značilko ali izbrišite skico in jo ponovno narišite |
| „Po tem ni ostalo ničesar od dela.“ | Izrez je odstranil ves material | Preverite velikost in smer izreza |
| „Trdno jedro tega ni moglo izdelati (…).“ ali „Trdno jedro tega ni moglo združiti s telesom.“ | Jedro je zavrnilo geometrijo | Razveljavite ali malo spremenite velikosti; ploskve, ki se natanko dotikajo, lahko to povzročijo |
| „Potegni po poti: še ni izdelano. Potrebuje točno jedro, ki ga ta različica PartCraft nima.“ (tudi Prehod, Rebro in drugi) | Značilka, narejena v prejšnji različici, ki jo lahko izdela samo točno jedro. Ostane v zgodovini in se shrani nespremenjena | Onemogočite ali izbrišite jo; glejte [Kaj še ni izdelano](topic:not-built-yet), kaj storiti namesto tega |
| „Zaobljenka 5 mm tukaj ne sodi (…).“ / „Skos 2 mm …“ | Velikost je prevelika za ploskev ob robu ali vogala ni mogoče zliti | Manjša velikost ali manj robov na značilko |
| „Zaobljevanje: v tej različici samo ravni robovi med dvema ravnima ploskvama (izdela jih mrežno jedro). Ukrivljene robove zaobljite ali skosite v skici.“ (tudi Skos) | Izbrani rob je zaobljen, na primer rob luknje, ali leži na ukrivljeni ploskvi | {{ui:Izberi robove}} in ga odstranite; ta rob zaobljite ali skosite v skici |
| „Zaobljevanje s polmerom, ki se spreminja vzdolž roba: še ni izdelano (potrebuje točno jedro). Dajte mu en polmer.“ | Označeno je **Spremenljiv polmer** | Odznačite in vnesite en polmer |
| „Zaobljevanje mrežnega jedra: kjer se zaobljeni robovi stikajo, so pokošeni, ne zlit.“ (⚠, opozorilo) | Izbrani robovi se stikajo v vogalu; zaokrožitve se tam stikajo v ostrem robu | Ni kaj popraviti: del je izdelan. Zaobljite manj robov, če je rob pomemben |
| „Rob, ki ga zaobljuje, je izginil: rob med Extrude1 in Cut2.“ | Prejšnja sprememba je odstranila rob | {{ui:Izberi robove}}, odstranite rdeč rob, izberite novega |
| „Izberite robove v pogledu, nato jih dodajte.“ | Zaobljevanje ali skos nima robov | {{ui:Izberi robove}} |
| „Izberite ploskve za odstranitev (odprto), nato lupina.“ | Lupina nima odprtih ploskev | {{ui:Izberi ploskve}} |
| „Lupine ni mogoče izdelati s to debelino (…).“ | Stena je debelejša od tanjšega dela modela ali polmera zaobljenja | Tanjša stena ali večji zaobljeni robovi |
| „Lupina: v tej različici odpre samo ravne ploskve (izdela jo mrežno jedro).“ | Odprta ploskev je ukrivljena | {{ui:Izberi ploskve}} in jo odstranite; odprite samo ravne ploskve |
| „Nagib: v tej različici samo ravne ploskve (izdela ga mrežno jedro).“ | Nagnjena ploskev je valj, stožec ali prosto oblikovana ploskev | Odstranite jo; nagibajte samo ravne ploskve |
| „Ploskev, ki jo odpira, je izginila (…).“ | Prejšnja sprememba je odstranila ploskev | Znova {{ui:Izberi ploskve}} |
| „Fillet1 spreminja robove ali stene telesa; ne more se kopirati. …“ | Vzorec ali zrcalo kopira zaobljevanje, skos ali lupino | Odznačite jo; najprej vzorčite izreze, nato zaobljujte |
| „Sedi na ploskvi, ki jo lahko najde samo točno jedro: še ni izdelano v tej različici.“ | Skica na ploskvi, ki je mrežno jedro ne najde, na primer narejena v prejšnji različici | Skicirajte na osnovni ravnini ali ravni ploskvi raztegnjenega telesa in jo postavite s koti |
| „Uporablja ploskev ali rob telesa, ki ga lahko najde samo točno jedro: še ni izdelano v tej različici.“ | Referenčna ravnina, os ali točka na ploskvi ali robu telesa | Naredite jo iz osnovnih ravnin, točk skice ali koordinat |
| „Iztiskanje do ploskve, naslednje ploskve ali oglišča: še ni izdelano (potrebuje točno jedro).“ / „Zožitev: še ni izdelano (potrebuje točno jedro).“ | Pogoj konca ali zožitev, ki jo izdela samo točno jedro | Uporabite globino Slepo ali Srednja ravnina, ki jo izmerite; pustite Zožitev na 0 |

## Težave pri izbiri

- „Ta ploskev je ukrivljena. Izberite ravno ploskev ali ravnino za skiciranje.“ Skice potrebujejo ravno ploskev. Skicirajte na osnovni ravnini in skico postavite s koti.
- Ploskev piše „Fiksno, kjer je izbrana“: ni bila ustvarjena z robom skice (na primer ploskev kopije vzorca), zato skica na njej ostane na mestu, ko se del spremeni.
- Robove je težko zadeti: povečajte. Rob ima prednost pred ploskvijo ob njem, kadar je kazalec točno nanj.

## Težave z datotekami

| Sporočilo | Popravek |
|---|---|
| 'PartCraft odpira svoje datoteke .partcraft.json, izvoze iz makra CadCraft za SolidWorks (.cadcraft-sw.json) in datoteke STEP. „bracket.igs“ ni nobena od teh.' | Prepoznane so samo te datoteke (ter mrežne datoteke STL, OBJ in 3MF ter datoteke `.3dm`) |
| '„part.stp“ ni datoteka STEP (ne začne se z ISO-10303-21).' | Datoteka ni besedilo STEP |
| „Ta datoteka STEP je prevelika (več kot 60 MB), da bi jo tukaj uvozili.“ | Poenostavite jo v viru |
| „Ta datoteka je prevelika, da bi bila del PartCraft.“ pri vašem shranjenem delu | Velik trden STEP, uvožen v prejšnji različici, je naredil datoteko dela večjo od 50 MB. Uporabite prejšnjo kopijo brez njega |
| „Ta datoteka je prevelika, da bi bila del PartCraft.“ | Datoteka je večja od 50 MB; ni datoteka PartCraft |
| „To ni datoteka PartCraft (ni JSON).“ / „To ni datoteka PartCraft.“ | Datoteka je poškodovana ali pripada drugemu programu |
| „To datoteko je shranil novejši PartCraft (različica datoteke …); ta jo bere kot različico …“ | Odprite jo v novejšem PartCraft |
| „Extrude2: globina je napačna.“ (ali druga vrednost) | Datoteko je nekdo ročno urejal ali je poškodovana. Uporabite prejšnjo kopijo |
| Vstavljanje v sestav pravi „Part1.partcraft.json nima telesa za vstavljanje.“ | Datoteka dela nima telesa. Odprite jo, naredite telo, shranite in znova vstavite |

**Moja shranjena datoteka ni tam, kjer sem pričakoval.** Shranjevanje je prenos: poglejte v mapo prenosov v brskalniku ali odprite seznam prenosov z orodne vrstice brskalnika. Glejte [Kam gredo vaše datoteke](common:your-files).

**Odprl sem del, vendar je sestav še vedno na zaslonu.** Del se je naložil za sestavom. Izberite {{ui:Zapri}}, da zaprete sestav in vidite del. Pred odpiranjem datotek delov zaprite sestave.

## Težave z risbo

| Sporočilo | Popravek |
|---|---|
| „Najprej zgradite telo, nato naredite njegovo risbo.“ | Najprej zgradite del |
| „Ni prostora na listu za: detajl. Naredite detajl manjši ali opustite pogled.“ | Manjši **Polmer detajla** ali **Merilo detajla** ali odstranite prerez |
| „Detajl je vzet iz pogleda spredaj, zgoraj, desno ali prereza.“ | Kliknite na enega od teh pogledov |
| „Kliknite na enega od pogledov.“ | Klik je bil na prazen papir |
| „Položaj potrebuje vsaj eno referenčno osnovo.“ in druga sporočila okvirjev | Nastavite referenčne osnove, ki jih zahteva podokno, ali izberite drugo lastnost |
| „Pogledov risbe ni bilo mogoče narediti: …“ | Razveljavite zadnjo spremembo. Če se to ponavlja, shranite, znova naložite stran in odprite del |

## Težave s sestavom

| Sporočilo | Popravek |
|---|---|
| „Najprej zgradite telo, nato ga dajte v sestav.“ | Del še nima telesa |
| „Najprej vstavite drugi del (Dodaj kopijo, Vstavi ali Uredi › Podvoji).“ | Spoj potrebuje dva dela |
| „Izberite ploskev na drugem delu.“ | Obe ploskvi spoja morata biti na različnih delih |
| „Ta ploskev je ukrivljena. Izberite ravno ploskev …“ | Spoji se začnejo na ravnih ploskvah. Nato za luknjo ali os vrtenja uporabite **Središče na** |
| „Bracket2 ni povezan z zemljenim delom, zato ostane tam, kjer je bil postavljen.“ | Dodajte spoj od njega do dela, ki je postavljen |
| „Revolute3 zapre zanko, ki se ne more zapreti: odmaknjena je za 2.000 mm. Preverite ploskve, odmike in omejitve spojev zanke.“ | Deli se ne morejo vsi stakniti: preverite dolžine, ploskve, ki jih uporablja vsak spoj, odmike (deli, zloženi ploskev na ploskev, se morajo ujemati v globini) in omejitve; ali odstranite en spoj zanke |
| „Ploskev, ki jo ta spoj uporablja, je izginila iz Bracket.“ / „Os, ki jo ta spoj uporablja, je izginila iz Bracket.“ | Del je bil urejen. Odstranite spoj in ga naredite znova |
| „Os teče vzdolž ploskve, zato ne more določiti središča spoja.“ | Izberite os, ki seka ploskev, ali „Izhodišče ploskve“ |
| „Sestav ohrani vsaj en del. Namesto tega ga zaprite.“ | Uporabite {{ui:Zapri}} |

**Del je spojen, vendar na napačnem mestu.** Nastavite **Središče na** za obe strani spoja na luknje ali osi vrtenja, ki naj se poravnajo, nato prilagodite **Kot (°)** in **Odmik (mm)**.

## Počasno je

- Nastavite **Krivulje** na Normalno ali Grobo med modeliranjem; pred izvozom preklopite na Fino.
- Veliko število vzorcev (stotine kopij) traja, da se ob vsaki spremembi ponovno izdela. Med delom na drugih značilkah vzorec onemogočite.
- Zaznavanje trkov in preverjanje gibanja primerjata vsak par delov; veliki sestavi trajajo dlje.
- Zaprite druge zahtevne zavihke. PartCraft teče na procesorju in grafiki vašega računalnika.

## Še vedno ne deluje

Najprej shranite datoteko ({{key:Mod+S}}), nato ponovno naložite stran in jo znova odprite. Če značilka še vedno ne uspe, jo izberite, preberite sporočilo in poskusite {{key:Mod+Z}} nazaj do zadnjega dobrega stanja.
