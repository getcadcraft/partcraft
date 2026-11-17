---
title: Proste površine (NURBS)
summary: Gladke krivulje in površine ob delu – prehod, potegi, mreže krivulj, štirirobne zaplate, zlitja, prireze – z G0, G1 in G2 zveznostjo, merjeno na natančnih površinah, telesa z združitvijo, odrezovanjem in presekom, vpeta v del, pogledi zebra in ukrivljenosti, površine, prilagojene skeniranju z izmerjeno napako, ter datoteke STEP ali IGES. Shranjeno v datoteki dela.
keywords: nurbs, skeniranje, obratni inženiring, prilagodi, mreža v površino, oblak točk, stl, prirez, obrezan, izvrtina, rez, telo, telesa, booleova operacija, unija, odštej, presek, razlika, zašij, zaprt, zapeci, prosta oblika, ploskev, površina, površine, b-spline, bspline, krivulja, spline, prehod, potegni, tirnica, mreža, zaplata, zlitje, uskladi, zveznost, g0, g1, g2, tangenta, ukrivljenost, zebra, kontrolne točke, vozlišča, stopnja, step, iges, razred A, trup, zglajevanje
from: 64ed5196
---

Delovno okolje **Površine** naredi gladke krivulje in površine vrste, ki se uporablja za ohišja izdelkov, karoserije avtomobilov in trupe čolnov: NURBS, ista matematika, ki jo uporabljajo drugi modelirniki površin. Vse se meri na natančnih površinah, nikoli na trikotnikih, ki jih vidite. Mere so v milimetrih, kot v ostalem PartCraft.

Izberite **Površine** v polju **Delovno okolje**. Orodna vrstica ima {{ui:Krivulja}}, {{ui:Prehod}}, {{ui:Potegni po poti}}, {{ui:Uskladi}} in {{ui:Zebra}}; vsak ukaz je na desni plošči. Ukaz pove, kaj še potrebuje: kliknite krivulje ali površine v pogledu (blizu roba ali konca, če to zahteva) ali jih izberite na seznamu; vpišite točke ali jih kliknite na ploskvah dela (izven dela pristanejo na tleh), nato pritisnite Enter.

Krivulje in površine so shranjene v datoteki dela poleg telesa. Ne spreminjajo značilk dela: plošča ima lastna {{ui:Razveljavi}} in {{ui:Uveljavi}}, en korak na ukaz.

## Krivulje

- **Krivulja skozi točke** gre skozi vsako točko, ki jo kliknete. **Krivulja po kontrolnih točkah** namesto tega sledi mreži točk.
- **Vstavi vozlišče**, **Dvigni stopnjo** in **Zniži stopnjo** spremenijo opis krivulje brez premika (zniževanje zavrne, če bi se krivulja premaknila bolj kot toleranca). **Obnovi krivuljo** ji da novo število kontrolnih točk in pove, kako daleč se je premaknila.
- **Uskladi krivuljo** naredi, da se konec ene krivulje stika s koncem druge z G0 (dotik), G1 (ista smer) ali G2 (tudi enaka ukrivljenost). **Zlij krivuljo** doda novo krivuljo med dva konca, G1 ali G2.

## Površine

- **Prehod** skozi dve ali več krivulj, **Linearna površina** med dvema, **Izvleci krivuljo**, **Zavrti krivuljo**.
- **Potegni vzdolž ene tirnice** nosi profil vzdolž poti brez zvijanja; **Potegni vzdolž dveh tirnic** ohrani konca profila na obeh tirnicah. Potegi so prilagojeni: rezultat pove, kako blizu pravega poteza je ostal.
- **Površina iz mreže krivulj** gre skozi mrežo krivulj (vsaka prečka vsako drugo natanko enkrat). **Zaplata iz štirih robov** zapolni štiri krivulje, ki se stikajo v vogalih.
- **Uskladi površino** naredi, da se rob površine stika s sosedo z G0, G1 ali G2; **Zlij površino** doda površino med dva robova.
- **Odmik površine**, **Podaljšaj površino** (površina se nadaljuje, kot je šla), **Obnovi površino**.

## Preverjanje kakovosti

Tabela **Skupni robovi** našteje vsak rob, ki ga delita dve površini, z vrzeljo (mm), kotom med njima (°) in skokom ukrivljenosti (1/mm) ter pove, ali to naredi G0, G1 ali G2. Rob, ki je slabši, kot ste zahtevali, se pojavi v **Težave** s popravkom **Uskladi**. Črte **Zebra** in barve ukrivljenosti prihajajo iz natančne površine: črte, ki se nepretrgano nadaljujejo čez rob, pomenijo G1; črte, ki ohranijo tudi širino, pomenijo G2.

G0–G2 se merijo na 33 točkah na rob. **G3 in kakovost »razreda A« se ne merita** in se ne trdita.

## Obrezovanje površine

Skupina **Prirez** obreže površino brez spremembe oblike: površina ohrani vse kontrolne točke, prikazan, štet in zapisan je samo del znotraj obrisa. **Prirez na pravokotnik** in **Prirez s krogom** delujeta na deležu (0 do 1) površine v vsaki smeri, zato ne potrebujeta izbire v pogledu; **Prirez s krivuljo** vzame zaprto krivuljo, ki leži na površini (projicira se na površino in je zavrnjen z besedami, če je odprta ali več kot toleranca oddaljena). Obkljukajte **Izreži luknjo**, da odstranite notranjost obrisa; pustite izklopljeno, da ohranite samo notranjost. Površina lahko ima en ohranjen obris in poljubno število lukenj; obris, ki seka drugega, je zavrnjen. **Odstrani prirez** prikaže celotno površino spet. Razveljavi plošče povrne prirez kot vsak drug korak.

STEP nosi prirez kot meje ploskve, IGES kot obrezano površino (entiteta 144); oba ga prebereta nazaj.

## Telesa in Booleove operacije

Skupina **Telesa** spremeni površine v zaprta telesa in jih združi. Telo je tu niz površin plošče, ki skupaj zaprejo prostornino; njegove ploskve ostanejo natančne NURBS površine z obrisi.

- **Telo kvadra**, **Telo valja** in **Telo krogle** naredijo telo iz vpisanih velikosti (v mm): kvader iz šestih ravnih ploskev, valj iz zaokroženega boka in dveh ravnih koncev, obrezanih na krog, krogla iz ene zasukane površine.
- **Telo iz površin** združi površine, ki ste jih naredili sami. Izberite jih ali ne izberite nobene, da uporabite vsako prikazano površino, ki še ni v telesu. Sešijejo se znotraj tolerance: če se ne zaprejo, se nič ne spremeni in plošča pove, koliko robov ostane odprtih in kako blizu morajo biti.
- **Unija**, **Odštej** (drugo telo se odvzame prvemu) in **Presek** (samo to, kar imata skupnega) vzamejo dve telesi: kliknite ploskev vsakega v pogledu ali pritisnite **Izberi** v seznamu **Telesa**. Obkljukajte **Ohrani obe telesi**, da ju pustite poleg rezultata.

Booleova operacija ohrani vsako ploskev na njeni natančni površini in jo zareže z novimi obrisi prireza vzdolž presečišča. Vrstica rezultata navaja izmerjene številke: kako daleč so se morale točke motorja teles premakniti, da sedijo na natančnih površinah (nikoli več kot toleranca), kako blizu so presečne točke obema površinama (običajno nekaj milijonink milimetra), prostornino in ali se nove ploskve spet zaprejo, če jih sešijete znova iz njihovih natančnih površin. Prostornine se merijo na trikotnikih znotraj tolerance (0.05 mm, če ne nastavite drugače), zato je prostornina krogle ali valja malo pod natančno: manjša toleranca se približa. Booleova operacija, ki ni mogoča čisto (telesi nimata skupnega, obris bi se sekal sam), je zavrnjena z besedami in ničesar ne spremeni. Ena Booleova operacija je en korak {{ui:Razveljavi}} plošče.

V seznamu **Telesa** **Razgradi** ohrani ploskve kot navadne površine; koš odstrani telo in njegove ploskve.

## Zaobljenja in odebelitev

**Zaobli med ploskvama** zaokroži rob, kjer se stikata dve ploskvi enega telesa: izberite dve ploskvi (v pogledu ali s **Izberi** v seznamu), vpišite **polmer** in za polmer, ki se spreminja vzdolž roba, **polmer na koncu** (0 ohrani en polmer). Krogla tega polmera se kotali vzdolž roba in se dotika obeh ploskev; zaobljenje je natančni krožni lok, ki ga pusti na vsaki točki, sklenjen v eno površino, obe ploskvi pa sta obrezani tam, kjer se ju krogla dotika. Zunanji rob izgubi material, notranji kot ga pridobi. Vrstica rezultata navaja izmerjeno: kako daleč je površina zaobljenja od kotaleče krogle med točkami, iz katerih je bila zgrajena (točke se dodajajo, dokler ni znotraj četrtine tolerance), največji kot med zaobljenjem in vsako ploskvijo vzdolž dotikalnih črt ter enake številke kot pri Uniji. Polmer, ki ne ustreza (krogla bi zapustila ploskev ali se ploskev ukrivi ostreje od polmera), je zavrnjen z imenom ploskve, in nič se ne spremeni.

**Zaobli več robov** zaokroži veliko robov v enem koraku: izberite dve ploskvi prvega roba, nato dve ploskvi naslednjega in tako naprej (ploskev je lahko v več parih, na primer zgornja ploskev kocke v štirih). Vsi robovi dobijo polmer, ki ga vpišete. Vsako zaobljenje se izračuna na telesu, kakršno je bilo, nato se zarežejo eno za drugim, zato vrstni red ni pomemben. Kjer se dva zaobljena roba stakneta v kotu, katerega drugi robovi ostanejo ostri, se zaobljenji zlijeta vzdolž presečne krivulje (greben). Kjer se trije zaobljeni zunanji robovi treh ravnih ploskev, ki so med sabo pravokotne, stikajo z enim polmerom, je vogal ena **krogelna zaplata**, tangentna na vsa tri zaobljenja (odkljukajte **Vogali**, da dobite vogal z grebenom); rob mora biti vsaj dvakrat daljši od polmera, kjer sta oba konca takšna vogala. Vrstica rezultata pove, koliko robov je bilo zaobljenih in kako so vogali izšli. Notranji robovi se lahko zaokrožijo skupaj, toda rezultat, ki se ne zapre znova, je samo prijavljen (vrstica to pove), zato ga preverite.

**Odebeli v telo** da površini debelino: izberite jo, vpišite **debelino** in obkljukajte **Druga stran**, da jo odebelite v drugo smer. Odmaknjena ploskev se prilega površini in se primerja z njo (vrstica rezultata navaja največjo razliko od debeline); stene sledijo vsakemu robu in vsakemu obrisu prireza. Če se površina na tisti strani ukrivi ožje od debeline ali se drug njen del nahaja bližje od debeline, je zavrnjeno z imenom površine in mestom, in nič se ne spremeni.

## Zapeci telo v del

**Zapeci** (v orodni vrstici Površine) ali **Zapeci v del** v seznamu **Telesa** naredi telo del dela, kot se odprti STL spremeni v enega: izberite telo, ali je **dodano** delu, **odrezano** od njega ali **preseženo** z njim, in toleranco (kako daleč so lahko trikotniki od natančnih površin). Je en korak razveljavitve dela in se v seznamu značilk pojavi kot uvoz, poimenovan po telesu. Del ohrani trikotnike, zato se odpre in obnovi brez površin; natančno telo ostane v Površinah, zato ga lahko po spremembi znova zapečete.

## Datoteke

Izvozite **STEP** (AP242) ali **IGES** s krivuljami in površinami natanko takšnimi, kot so (B-spline krivulje in površine, nič ne pretvorjeno v trikotnike). Vsaka površina je svoja ploskev s prirezom; telo je zapisano kot ena zaprta lupina, vsak rob pa deli njegovi dve ploskvi, kot to pričakujejo drugi CAD programi (vrstica stanja pove, koliko teles je tako odšlo). V IGES je isto telo ena mnogoplastna trdna B-rep (entiteta 186 nad zaprto lupino 514, ploskve 510, zanke 508, en seznam robov 504 in en seznam oglišč 502); telo, katerega ploskve se ne parijo rob za robom, je zapisano kot ločene ploskve in vrstica to pove. **Uvozi…** prebere takšno telo nazaj kot telo, iz STEP in iz IGES.

## Gladke linije trupa

**Zgladi** (v orodni vrstici Površine) izmeri vsako krivuljo na njeni natančni obliki – prevoje (kjer preide iz upogibanja v eno smer v drugo), največjo ukrivljenost, skoke ukrivljenosti na vozliščih in hrapavost – ter na novo zgradi tiste s prevojem ali skokom z najmanj kontrolnimi točkami, ki ostanejo znotraj tolerance, ki jo vnesete, in ne dodajo prevoja. Narišite preseke, vodne črte in zadnje linije kot krivulje, jih zgladite, nato {{ui:Prehod}} trupa skozi preseke in ga preverite z {{ui:Zebra}}. Negladke krivulje se pojavijo tudi v Težave s popravkom **Zgladi to krivuljo**. Črta, ki naj spremeni smer (S-presek), obdrži ta en prevoj. Izpodrivnina trupa, središča in vzvodi za prevračanje pridejo iz trdnega dela: glejte orodje za hidrostatiko.

## Površine iz skeniranja (obratni inženiring)

Odprite del, ki ima skenirano mrežo (odprt STL ali zapečeno telo), izberite **Površine** v polju **Delovno okolje** in v skupini **Skeniranje** izberite **{{ui:Prilagodi}} površine skeniranju**; zgrajena mreža dela je skeniranje. Orodje išče **ravnine**, **valje**, **krogle** in **stožce** (natančne površine, iz katerih je sestavljen obdelan del; vsaka vrstica pokaže polmer ali polkot, ki ga najde), najde **zaobljenja** (zaobljeni robovi in vogali: majhen valj ali krogla, ki se tangentno zlije v dve ali več drugih ploskev, prikazan s svojim polmerom in ploskvami, ki jih povezuje), **zaobljenja na robu** (torus: zaobljeni rob, kjer ravna ploskev sreča valj ali stožec, prikazan s svojim polmerom in polmerom obroča) in **spremenljiva zaobljenja** (zaobljen rob, katerega polmer se spreminja vzdolž njega, prikazan s polmerom na vsakem koncu), prilagodi **eno prosto zaplato** gladkemu, rahlo ukrivljenemu delu in obreže vsako ploskev na obris dela skeniranja, iz katerega izhaja, tako da luknje in vogali ostanejo. Možnosti: **toleranca** (kako daleč v mm sme biti točka skeniranja od ravnine ali valja in še spada zraven, ter cilj za prosto zaplato), **najmanjši kos** (delež površine) in **največ ploskev**. Isto skeniranje in iste možnosti vedno dajo iste ploskve.

Rezultat je tabela, ena vrstica na ploskev: njena vrsta, koliko trikotnikov je prispevala in napaka, **izmerjena od skeniranja do ploskve** (rms, največja in delež točk znotraj tolerance). Izmerjene so vozlišča skeniranja in sredina vsakega trikotnika. Napaka se ne meri v obratni smeri (od ploskve do skeniranja), zato se ploskev, ki sega čez skeniranje, ne bi pokazala. Opomba pod tabelo pove tudi, koliko površine je bilo premajhne za prileganje. V pogledu so točke skeniranja obarvane po svoji **karti odstopanja**: modro na ploskvi, zeleno na pol poti do tolerance, rdeče na toleranci ali več (odkljukajte **Pokaži karto odstopanja**, da jo skrijete). Kosi, ki se zavijejo nazaj same vase (na primer zaprta cev, prilagojena s prostimi zaplatami), so navedeni kot neprilagojeni in nikoli niso vsiljeni v eno površino.

**{{ui:Zašij}} površine v telo** sešije vsako prikazano površino, ki ni v telesu, v eno zaprto telo. Ploskve skeniranja se srečajo le znotraj lastne napake skeniranja, zato poskusi najmanjše razdalje spoja, ki zapre (nikoli več kot **razdalja šivanja**, ki jo nastavite), in zavrne z besedami, kadar se ploskve ne zaprejo. Nikoli ne prekriva vrzeli. Škatla z zaobljenimi robovi se zašije, kadar so bila njena zaobljenja najdena kot lastne ploskve; razdalja spoja, ki se je zaprla, je v rezultatu. Telo nato deluje z Unijo, Odštejem, Presekom in **Zapeci v del**.

Česa ne počne: **zaobljenje na robu** (torus) se išče samo okoli osi valja ali stožca, ki je že najden, in **spremenljivo zaobljenje** samo vzdolž dokaj ravnega roba (njegovi preseki so odrezani pravokotno na eno smer); drugje pridejo kot proste zaplate, kadar so dovolj gladke, sicer se izpustijo; krogle, stožci in zaobljenja se iščejo z naključnim vzorčenjem, zato se zelo majhen (nekaj trikotnikov) lahko zamudi; karta odstopanja prikazuje razdaljo od skeniranja do ploskev, ne obratno; zelo veliki posnetki (več kot 300,000 trikotnikov) so tukaj zavrnjeni. Ploskve valja s polnim obratom so obrezane okoli lukenj, šiv pa je postavljen tja, kjer ni luknje. Preverite vsako ploskev glede na vaše skeniranje, preden se nanjo zanesete.

## Še ni izdelano

Zaokrožitev robov, ki se stikajo v vogalu ukrivljenih ploskev ali z različnimi polmeri (mešanje oglišč), zaobljenje med ploskvami, ki se ne stikajo, notranje zaobljenje, ki se konča na nagnjeni ali ukrivljeni ploskvi, Booleove operacije in zaobljenja, izračunana na površinah brez trikotnikov (tu motor teles deluje na trikotnikih znotraj tolerance, vsaka točka pa se nato vrne na natančne površine), zapečeno telo, ki sledi površinam, ko se spremenijo, prirez površine z drugo površino zunaj Booleove operacije, zapolnjevanje lukenj s več kot štirimi stranicami, projiciranje krivulj na površine.
