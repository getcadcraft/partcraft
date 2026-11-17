---
title: Narišite prvo skico
summary: Odprite skico na ravnini ali ravni ploskvi, narišite črte, pravokotnike, krožnice, loke, točke in osne črte, zaokrožite vogal, izberite, povlecite in izbrišite.
keywords: skica, risanje, črta, pravokotnik, krožnica, lok, točka, osna črta, pomožno, zaobli, zaobljenje skice, zaokrožitev vogala, lovljenje, izberi, okno, povleci, profil
from: 28be7436
---

Vsako telo se začne kot skica: ravna risba na ravnini. Ta vodnik zajema orodja za risanje. Kako skico utrdite z odnosi in kotami, je opisano v [Popolna določitev skice](topic:relations-dimensions).

## Začetek skice

Skico lahko narišete na osnovni ravnini ali na kateri koli ravni ploskvi dela.

1. Izberite, kje boste skicirali:
   - osnovno ravnino: kliknite **Sprednja ravnina**, **Zgornja ravnina** ali **Desna ravnina** v zgodovini ali kliknite ravnino v pogledu;
   - ravno ploskev: kliknite ploskev v pogledu. Celotna ploskev se označi.
2. Izberite {{ui:Skica}} na orodni vrstici ali pritisnite {{key:S}}. (Če ste izbrali ploskev, lahko izberete tudi {{ui:Skica na tej ploskvi}} v desnem podoknu; pri ravnini {{ui:Skiciraj na njej}}.)

Pogled se zavrti pravokotno na ravnino, orodja za skico se pojavijo na orodni vrstici in orodje Črta je pripravljeno. Če pritisnete {{ui:Skica}}, ne da bi kaj izbrali, se prikažejo osnovne ravnine, vrstica stanja pa pove: „Kliknite ravnino ali ravno ploskev za skiciranje. Esc ustavi.“

:::note
Ukrivljena ploskev ne more imeti skice: „Ta ploskev je ukrivljena. Izberite ravno ploskev ali ravnino za skiciranje.“
:::

**Skica na ploskvi sledi tej ploskvi.** Če je ploskev nastala z robom skice ali s koncem iztisa, se nova skica premakne, ko se značilka spremeni (globlji žep s seboj vzame skico na svojem dnu). Če podokno pravi, da je ploskev „Fiksirana na mestu izbire“, skica ostane tam, kjer je ploskev zdaj.

## Orodja za risanje

Vsako orodje ima gumb na orodni vrstici in tipko. Ponovno izberite isti gumb, pritisnite {{key:S}} ali pritisnite {{key:Esc}}, da se vrnete na orodje Izberi.

| Orodje | Tipka | Kako risati |
|---|---|---|
| {{ui:Črta}} | {{key:L}} | Kliknite začetek, nato kliknite vsako naslednjo točko. Črte se vežejo druga na drugo. Verigo končate s {{key:Esc}}, {{key:Enter}}, desnim klikom ali dvojnim klikom. Klik na obstoječo točko tudi konča verigo |
| {{ui:Pravokotnik}} | {{key:R}} | Kliknite eno oglišče, nato nasprotno oglišče. Dobite štiri črte, povezane v ogliščih, dve vodoravni in dve navpični |
| {{ui:Krožnica}} | {{key:C}} | Kliknite središče, nato točko na krožnici |
| {{ui:Lok}} | {{key:A}} | Kliknite središče, nato začetek, nato konec. Lok poteka v smeri, v kateri premikate kazalec okoli središča |
| {{ui:Točka}} | {{key:P}} | Kliknite. Točka sama zase označuje središče izvrtine za {{ui:Izvrtina}} |
| {{ui:Osna črta}} | {{key:N}} | Kot črta, po en odsek naenkrat. Narisana je črtkano; je pomožna geometrija, uporabljena kot os zavrtitve ali referenca |
| {{ui:Zaobli}} | {{key:F}} | Kliknite oglišče, kjer se stikata dve črti, vnesite polmer, pritisnite {{key:Enter}} |
| {{ui:Zlepek}} | {{key:B}} | Kliknite točke, skozi katere krivulja poteka; {{key:Enter}} konča, klik na prvo točko jo zapre. Glejte [Zlepki, prirezi, odmiki in druga orodja skice](topic:sketch-tools) |
| {{ui:Prirezi}} | {{key:T}} | Kliknite del krivulje, ki ga želite odstraniti, do najbližjih presečišč |
| {{ui:Kota}} | {{key:D}} | Glejte [Popolna določitev skice](topic:relations-dimensions) |

Med risanjem majhno polje ob kazalcu prikazuje dolžino, velikost, premer ali polmer.

### Vnos velikosti med risanjem

Po prvem kliku pri črti, pravokotniku, krožnici ali loku lahko namesto klika vnesete velikost. Vnos številke odpre polje ob kazalcu s to številko:

| Orodje | Polja ({{key:Tab}} gre na naslednje) | Kaj se zgodi ob {{key:Enter}} |
|---|---|---|
| {{ui:Črta}}, {{ui:Osna črta}} | Dolžina, nato Kot (°) od osi X skice | Črta je narisana te dolžine, proti kazalcu ali pod vneseni kot; veriga se nadaljuje od njenega konca |
| {{ui:Pravokotnik}} | Širina, nato Višina | Pravokotnik je narisan od prvega oglišča proti kazalcu; velikost, ki je niste vnesli, prevzame kazalec |
| {{ui:Krožnica}} | Premer | Krožnica je narisana s tem premerom |
| {{ui:Lok}} | Polmer po središču, nato Kot loka (°) po začetku | Začetek je oddaljen od središča za ta polmer; nato lok poteka za ta kot, v smeri, v kateri ste premikali kazalec |

Vsaka velikost, ki jo vnesete, postane **gonilna kota** v istem koraku, zato skica pride določena z velikostmi: {{key:Mod+Z}} odstrani obliko in njene kote skupaj. Če namesto {{key:Enter}} kliknete, vneseno ohranite, preostalo pa vzamete iz klika. {{key:Esc}} zapre polje in se vrne h kazalcu.

To izklopite v {{ui:Nastavitve}} › {{ui:PartCraft}} › **Kotiranje med risanjem**, če želite risati samo s kliki. Glejte [Nastavitve PartCraft](topic:settings).

{{ui:Več}}, na koncu orodij za skico, vsebuje zlepek s kontrolnimi točkami, {{ui:Podaljšaj}}, {{ui:Odmik}}, {{ui:Zrcali}}, {{ui:Mnogokotnik}}, {{ui:Utor}}, vzorce skice in {{ui:Projiciraj rob}}: glejte [Zlepki, prirezi, odmiki in druga orodja skice](topic:sketch-tools).

### Lovljenje

Lovljenje samodejno doda odnose, zato skica ostane povezana, ko se premakne:

- Na **končni točki ali izhodišču** se prikaže majhen kvadrat. Nova točka se naredi sovpadajoča z njo.
- Na **črti, krožnici ali loku** se prikaže majhen križec. Nova točka je postavljena na to krivuljo.
- Črta, ki je do 3 stopinje od vodoravne ali navpične, se nanjo prilepi in dobi odnos vodoravno ali navpično. Oznaka pokaže „H“ ali „V“.

Da se izognete lovljenju, povečajte pogled, tako da kliknete dlje od točke ali krivulje.

## Zaokrožitev vogala

1. Pritisnite {{key:F}} ali izberite {{ui:Zaobli}}.
2. Kliknite oglišče točke, kjer se stikata dve črti.
3. Odpre se polje s predlaganim polmerom. Vnesite polmer in pritisnite {{key:Enter}}.

Obe črti sta prirezani in povezani s tangentnim lokom z koto polmera. Sporočila, ki jih lahko vidite: „Zaobljenje potrebuje oglišče, kjer se stikata natanko dve črti.“ in „Ta polmer je za te črte prevelik.“

:::tip
Zaobljenje skice zaokroži oglišče profila, tako da iztisnjeni del dobi zaokrožene navpične robove. Za zaokrožitev robov samega telesa (na primer zgornjih robov plošče) uporabite značilko {{ui:Zaobli}} na delu: glejte [Zaokrožitev, posnemanje in lupina](topic:fillet-chamfer-shell). V skici je Zaobli orodje za skico, na delu pa značilka.
:::

## Konstrukcijska geometrija

Konstrukcijske črte, krožnice in loki so črtkane in sive. Vodijo skico, vendar niso del profila, ki se iztisne ali zavrti.

1. Izberite črte, krožnice ali loke.
2. Pritisnite {{key:Q}} ali izberite {{ui:Pomožno}}. Ponovno pritisnite, da jih vrnete.

## Izbira, premikanje in brisanje

Pritisnite {{key:S}} (ali {{key:Esc}}, dokler nobeno orodje ni aktivno) za Izberi.

- Kliknite točko, črto, krožnico, lok, simbol odnosa ali koto, da jo izberete. {{key:Shift}}+klik doda k izboru ali ga zmanjša. V sistemih Windows in Linux enako naredi {{key:Ctrl}}+klik; na Macu ⌘+klik.
- Povlecite po prazni površini, da narišete okno: izbrano je vse, kar je v celoti znotraj.
- Povlecite točko ali črto, da jo premaknete. Reševalnik med premikanjem ohrani vsak odnos in koto, zato se premaknejo samo proste geometrije. Povlecite rob krožnice, da spremenite njen polmer.
- Povlecite številko kote, da premaknete oznako.
- Pritisnite {{key:Delete}} ali {{key:Backspace}} ali izberite {{ui:Izbriši}} v desnem podoknu, da izbrišete izbor. Brisanje geometrije izbriše odnose nanjo.

## Povečava in pomik v skici

- Z kolescem povečate pri kazalcu.
- Povlecite s srednjim ali desnim gumbom za pomik.
- {{ui:Prilagodi}} na orodni vrstici ali v desnem podoknu prilagodi skico pogledu. V skici je tipka {{key:F}} orodje Zaobli, ne Prilagodi.

## Zapiranje skice

Izberite {{ui:Izhod}} na orodni vrstici ali {{ui:Zapusti skico}} v desnem podoknu ali pritisnite {{key:Esc}}, dokler se skica ne zapre. Vsak {{key:Esc}} najprej prekliče, kar je v teku, nato se vrne na Izberi, nato počisti izbor, naslednji pa zapre skico.

Skica ostane izbrana, zato naslednji {{ui:Iztisni}} ali {{ui:Zavrti}} uporabi njo.

## Kaj naredi dober profil

{{ui:Iztisni}} in {{ui:Zavrti}} uporabita **vsako zaprto zanko** polnih (ne pomožnih) črt, krožnic, lokov in zlepkov skice. Zanke znotraj zank postanejo luknje.

- Vsak konec se mora dotikati natanko enega drugega konca. „Profil je odprt: konec pri (12.5, 40) ni povezan z ničimer.“ navede mesto.
- Na eni točki se ne smejo stikati trije konci: „Profil se razveji pri (0, 20): tam se stikata več kot dva konca.“
- Točke in pomožna geometrija so profilu prezrte.

Naslednje: [Popolnoma določite skico z odnosi in kotami](topic:relations-dimensions).

## Skica iz fotografije

**Značilke › Več › Skica iz fotografije…** (ali skupina Skica na traku drevesa značilk) sledi sliki ravnega dela na enostavnem ozadju (njegovemu obrisu in luknjam) ali risbi s peresom v skico črt, lokov in krožnic. Navedite eno dolžino (širino, višino ali najdaljšo stranico), da ima skica pravilno velikost, preverite, kaj je našel v predogledu, in izberite **Ustvari skico**; lahko jo tudi iztisnete v istem koraku razveljavitve. Sledenje poteka na tem računalniku. Polmeri vogalov so znotraj približno 5 %, podrobnosti velikosti piksla ali dveh se izgubijo, fotografija, posneta poševno ali s senco čez del, pa se ne poravna: fotografirajte del pravokotno, z enakomerno svetlobo.
