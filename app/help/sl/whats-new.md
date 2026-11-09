---
title: Kaj je novega v 0.8 in 0.8.1
summary: PartCraft 0.8 prinaša sprotno analizo med urejanjem, preverjanje „Kaj se zlomi prvo?“, študije popuščanja in stika z vhodnimi datotekami za zunanji reševalnik, študije gibanja za sestave, delovno okolje Površine za prostoročne ploskve, dele, dimenzionirane po fiziki v delovnem okolju Inženir, skico iz fotografije, izvoze za tiskanje, razporejene liste v G-kodo in risbe, ki kotirajo svoje izvrtine. 0.8.1 odpravi zamrznitev kazalca v celozaslonskem načinu.
keywords: kaj je novega, novosti, opombe ob izdaji, dnevnik sprememb, spremembe, 0.8, 0.8.1, različica, nove značilke, sprotna analiza, posodabljanje med urejanjem, zlomi ga, kaj se zlomi prvo, faktor obremenitve, nelinearno, popuščanje, plastična deformacija, stik, calculix, študija gibanja, zračnost, površine, nurbs, zgladi, trup, zebra, inženir, generator, ustvarjeno telo, skica iz fotografije, merilo za tiskanje, razdelitev za tiskanje, krčenje, razporejeni listi, g-koda, risba, kotiraj izvrtine, pomočnik, mcp, jeziki, vrstice orodne vrstice
from: 62e4dce2
---

To je, kar se je spremenilo v PartCraft 0.8 in 0.8.1 v primerjavi z 0.7. Simulacija odgovarja med urejanjem in pove, kaj se zlomi prvo, sestavi dobijo študije gibanja, nova delovna okolja pa izdelajo prostoročne ploskve in dele, dimenzionirane po fiziki. 0.8.1 je majhna popravljena izdaja.

## Novo

### Simulacija

- **Posodabljaj med urejanjem.** Označite {{ui:Posodabljaj med urejanjem}} v bloku Reši, pa bodo odgovori sledili vašim urejanjem. Spremenite kot, obremenitev ali material in hitra rešitev, izdelana z elementi, ki so štirikrat večji, se takoj pokaže; ko se ustavite za približno sekundo, jo nadomesti lastna natančnejša rešitev študije. Rezultati povedo, katero od obeh gledate. Pri jeklenem konzolnem nosilcu je bila hitra rešitev znotraj 1 % pri upogibu in približno 4 % pri napetosti natančne rešitve. Glejte [Preverite napetost in upogib](topic:simulation#update-while-you-edit-live).
- **Kaj se zlomi prvo.** Za statično ali uklonsko študijo {{ui:Kaj se zlomi prvo?}} v bloku **Zlomi ga** poveča obremenitve, dokler del ne popusti. Našteje, najslabše najprej, faktor obremenitve do prvega popuščanja (z rdečo oznako, kjer napetost vrhuni) in faktor obremenitve do uklona. Faktor pod 1 pomeni, da del že pod obremenitvijo popušča, podokno Težave pa prikaže napako. Faktorji izhajajo iz linearne študije, zato so le toliko dobri, kot je ta. Glejte [Preverite napetost in upogib](topic:simulation#find-out-what-breaks-first-break-it).
- **Popuščanje in stik.** Dve vrsti študij več: nelinearna, kjer material sledi svoji premici do meje tečenja, nato pa položnejši naklon, s prikazano plastično deformacijo; in študija stika, kjer se ločeni kosi potiskajo (brez trenja) ali ostanejo pritrjeni (zlepljeni). Korak obremenitve, ki se ne ustali, ali kosi, ki se preveč vdrejo drug v drugega, se prikažejo v podoknu Težave. Trenje, veliki drsi, velike rotacije, veliki upogibi in utrujanje niso rešeni. Glejte [Preverite napetost in upogib](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Zbirke za CalculiX.** {{ui:Izvoz}} › {{ui:CalculiX zbirka (.inp)}} shrani študijo za CalculiX, ločen program, ki ga namestite in zaženete sami; {{ui:Izvoz}} › {{ui:CalculiX rezultati (.frd)}} prebere njegovo datoteko z rezultati nazaj na isto mrežo. PartCraft tega programa nikoli ne zažene in pove, če se je del spremenil od shranitve zbirke.

### Sestavi

- **Študije gibanja.** {{ui:Sestav}} › {{ui:Gibanje}} poganja vrednost enega spoja skozi čas, ki ga določite (stalna hitrost, pospešeno, sinusno ali naprej in nazaj), postavi sestav v vsakem koraku s spoji in zaprtimi zankami ter poroča, kateri deli trčijo in kako blizu si pridejo. {{ui:Dodaj točko}} nariše položaj točke, hitrost in pospešek, vrednost spoja in zračnost v odvisnosti od časa; {{ui:Shrani CSV}} in {{ui:Shrani graf}} jih zapišeta. Po {{ui:Zaženi}} se s korakom skozi vrstico zagona premaknete sestav na kateri koli korak. Nastavitve študije se shranijo v datoteko sestava. Hitrost in pospešek izhajata iz zabeleženih položajev, zato uporabite več korakov, če ostra konica izgleda prenizko. Glejte [Preverite sestav za kolizije in gibanje](topic:check-assembly#a-motion-study).

### Površine in deli iz fizike

- **Delovno okolje Površine.** Izberite {{ui:Površine}} v polju {{ui:Delovno okolje}} za krivulje in ploskve NURBS poleg dela: {{ui:Krivulja}}, {{ui:Prehod}}, {{ui:Potegni po poti}}, {{ui:Uskladi}} in {{ui:Zebra}}, z zveznostjo (G0, G1 ali G2), izmerjeno na točnih ploskvah. Rob, ki je slabši, kot ste zahtevali, je naveden v podoknu Težave s popravkom Uskladi. {{ui:Zgladi}} izmeri črte trupa za prevoje in skoke ukrivljenosti ter obnovi neenakomerne znotraj vaše tolerance. Ploskve se shranijo v datoteko dela in ne spremenijo značilk dela. Glejte [Prostoročne ploskve (NURBS)](topic:nurbs-surfaces).
- **Delovno okolje Inženir.** Izberite {{ui:Inženir}} v preklopniku delovnih okolij, izberite generator in kliknite {{ui:Novo}}: skripta dimenzionira del glede na to, kaj mora početi (toplota za premik, pretoki, tlak, material, postopek tiskanja), z učbeniškimi formulami, in ga izdela. Nato vrne uporabljena števila z njihovimi viri, preverjanja izdelave in datoteke za orodja analize. Enaki vhodi dajo enak del na vsakem računalniku. Generator se shrani v del, odpiranje dela pa nikoli ne zažene skripte. Glejte [Deli iz fizike: generatorji](topic:engineer-generators) in [Napišite generator](topic:write-a-generator).

### Skiciranje, risbe in izdelava

- **Skica iz fotografije.** {{ui:Značilke}} › {{ui:Več}} › {{ui:Skica iz fotografije …}} prenese sliko ravnega dela na gladki podlagi (obris in izvrtine) ali risbo s peresom v črte, loke in krožnice. Vnesete eno dolžino, preverite predogled in ustvarite skico. Glejte [Osnove skiciranja](topic:sketch-basics#a-sketch-from-a-photo).
- **Merilo in razdelitev za tiskanje.** {{ui:Izvoz}} › {{ui:Merilo za tiskanje (STL ali 3MF) …}} spremeni merilo po osi, ne da bi spremenil del, na primer za dodatek za krčenje. {{ui:Izvoz}} › {{ui:Razdeli za tiskanje (zip kosov) …}} razreže del, prevelik za vašo tiskalno podlago, na oštevilčene kose, povezane s klini, zatiči, lastovičjimi repi, luknjami za zatiče ali žepi za magnete. Glejte [Tiskanje v 3D](topic:print-3d).
- **Razporejeni listi v G-kodo.** {{ui:Izvoz}} › {{ui:Razporejeni listi v G-kodo}} prebere razporejeni DXF in za vsak list naredi en program prek postprocesorja, ki ga izberete: najprej izvrtine in izrezi, nato obrisi. Ne načrtuje uvodnih poti, vrstnega reda rezanja ali skupnih robov. Glejte [Razporedite ravne dele na listih](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Risbe, ki naredijo več same.** {{ui:List}} › {{ui:Samodejno}} izbere najmanjši list formata A, ki drži ppoglede pri največjem standardnem merilu do 1:1. {{ui:Kotiraj izvrtine}} postavi središčno oznako na vsako izvrtino, en oblaček za vsako velikost in položaje od spodnjega levega kota pogleda. Glejte [Izdelava risbe](topic:drawing-pdf).

### V vseh aplikacijah

- **Jeziki.** Aplikacije so na voljo v 54 jezikih. Tisti razen angleščine so strojni osnutki, dokler jih ne prebere izvorni govorec.
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Vrstice orodne vrstice}} izbere Prelomi (kot prej), 2 vrstici ali 1 vrstico; vrstica, ki se ne prilega, se pomika vstran. Trak značilk PartCraft prikazuje najbolj uporabljeno orodje veliko, variante pa spravi za razdeljeni gumb.
- **Povežite svojo umetno inteligenco.** Studio je središče za povezavo lastnega pomočnika z vsemi osmimi aplikacijami, z dovoljenjem samo za branje, predlaganje ali urejanje za vsako aplikacijo. Povezan pomočnik lahko dimenzionira del iz stavka, na primer nosilca za obremenitev, pokaže svoje delo in vsa preverjanja ter ga izdela; poroča, kaj ni preveril (koncentracija napetosti, utrujanje, lezenje plastike). Glejte [Uporaba PartCraft s pomočnikom z umetno inteligenco](topic:use-with-ai-assistants).

## Popravljeno v 0.8.1

- **Zamrznitev kazalca v celozaslonskem načinu.** Izbor ob premikanju kazalca je zdaj omejen. Vzrok je naša najboljša ocena in ga nismo potrdili z osebo, ki je to prijavila.
- **Jezik med izvajanjem.** Studio in pakirane izdaje lahko med izvajanjem preklopijo jezik; prej so bile samo v angleščini. To še ni preizkušeno na vseh platformah: sporočite, če se jezik ne spremeni.

## Še ni v tej različici

- Povezava vaše umetne inteligence ni dokončana: enoklikovna povezava znotraj Studia, gostiteljski priključek za umetno inteligenco v brskalniku, vaš lasten API ključ znotraj Studia in objavljen paket MCP niso obljubljeni. Studio nima lastne umetne inteligence.
- Studio ni podpisan s kodo: Windows lahko opozori, macOS pa zahteva desni klik in Odpri. Glejte [Odpravljanje težav](topic:troubleshooting).
- Skladi toleranc so še vedno v eni smeri: glejte [Skladi toleranc](topic:tolerance-stackup).
- Ostalo je navedeno v [Kaj še ni izdelano](topic:not-built-yet).

Starejše spremembe so v [Kaj je novega v 0.7](topic:whats-new-0-7).
