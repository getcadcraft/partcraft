---
title: Zlepki, prirezi, odmik in druga orodja skice
summary: Narišite zlepke s točkami prileganja in s kontrolnimi točkami, prirezujte in podaljšujte krivulje, odmaknite verigo, zrcalite čez osno črto, dodajte mnogokotnike in utore, vzorčite geometrijo skice in projicirajte robove modela.
keywords: zlepek, točka prileganja, kontrolna točka, b-zlepek, nurbs, krivulja, prirezi, podaljšaj, odmik, zrcali, simetrično, mnogokotnik, šestkotnik, utor, vzorec, linearni vzorec, krožni vzorec, projiciraj, projiciraj rob, vključi, pretvori entitete
from: 3ecb166a
---

Ta orodja delujejo v odprti skici. {{ui:Zlepek}} in {{ui:Prirezi}} sta na orodni vrstici. Ostala so pod {{ui:Več}} na koncu orodij za skico. Vsako orodje je en korak razveljavitve, {{key:Esc}} ga ustavi. Za osnovna orodja za risanje glejte [Narišite prvo skico](topic:sketch-basics).

## Zlepki

Zlepek je gladka krivulja. Obstajata dve vrsti.

| Orodje | Tipka | Kako risati |
|---|---|---|
| {{ui:Zlepek}} | {{key:B}} | Kliknite točke, skozi katere krivulja poteka. Končajte s {{key:Enter}}, {{key:Esc}}, desnim klikom ali dvojnim klikom. Ponovno kliknite prvo točko, da zlepek zaprete |
| {{ui:Zlepek s kontrolnimi točkami}} (pod {{ui:Več}}) | | Kliknite kontrolne točke. Krivulja je privlečena proti njim, a se dotakne samo prve in zadnje. Črtkani kontrolni poligon se prikaže med risanjem in po njem |

- **Točke so točke skice.** Povlecite jih ali jim dodajte odnose in kote kot katerikoli drugi točki. Prva točka zlepka se lahko prilepi na končno točko črte, s čimer ju poveže sovpadajoč odnos.
- **Tangenta na koncu.** Izberite črto, lok ali zlepek, ki se stika z enim koncem zlepka, nato še zlepek, in izberite {{ui:T Tangenta}}. Smer konca zlepka nato sledi črti. Tangenta stran od koncev zlepka je zavrnjena: „Tangenta na zlepek zahteva, da se črta, lok ali zlepek stika z enim njegovim koncem.“
- **Konci.** Brez odnosa tangente so konci zlepka s točkami prileganja naravni (brez ukrivljenosti na samem koncu). Krivulja je kubična in poteka skozi vsako točko, njen razmik pa določajo razdalje med točkami.
- **Zaprti zlepki** tvorijo profil sami. Odprti zlepki povežejo črte in loke v zaprto zanko kot katerakoli druga krivulja.
- Brisanje točke znotraj zlepka odstrani to točko in ohrani zlepek, dokler ima vsaj dve točki (tri, če je zaprt).

Iztisni in zavrti zgradita zlepek z mrežnim jedrom iz kratkih ravnih kosov (prave krivulje potrebujejo natančno jedro: v tej različici še ni izdelano). Izvoz DXF zapiše zlepek kot polilinijo, ki ostane znotraj 0.01 mm od krivulje, ker DXF R12 nima entitete zlepek.

## Prirezovanje in podaljševanje

| Orodje | Tipka | Kako |
|---|---|---|
| {{ui:Prirezi}} | {{key:T}} | Kazalec na krivulji: del, ki bi šel, je rdeč do najbližjih presečišč. Kliknite, da ga odstranite. Krivulja, ki ne seka ničesar, je odstranjena cela |
| {{ui:Podaljšaj}} (pod {{ui:Več}}) | {{key:E}} | Kliknite črto ali lok blizu konca, da ga podaljšate. Raste do naslednje krivulje, ki jo sreča. „Temu koncu ni kaj doseči.“ se prikaže, ko na poti ni ničesar |

Prirezovanje in podaljševanje delujeta na črtah, lokih, krožnicah in zlepkih (Podaljšaj: črte in loki).

- Prirezana **krožnica** postane lok. Njena kota polmera ali premera se premakne na lok.
- Prirezovanje sredine črte pusti dve črti, ki ostaneta na isti ravni črti. Prirezovanje sredine loka pusti dva loka z istim središčem in enakim odnosom.
- Prirezan **zlepek** postane zlepek s kontrolnimi točkami, ki natančno sledi stari krivulji. Odnos tangente na ohranjenem koncu ostane.
- Novi konec je postavljen na krivuljo, ki ga je prerezala (na črto, lok ali krožnico, oziroma sovpadajoč z njenim koncem). Zlepki ne morejo držati točke, zato zlepek, ki reže, ne doda odnosa.

**Odnosi, ki ne ustrezajo več, so odstranjeni**, vrstica stanja pa pove, koliko. Na primer kota dolžine na prirezani črti je odstranjena, vodoravni ali vzporedni odnosi pa ostanejo.

## Odmik

1. Izberite {{ui:Odmik}} pod {{ui:Več}} ali pritisnite {{key:O}}.
2. Kliknite črto, lok, krožnico ali zlepek. Cela veriga se označi: vse krivulje, povezane konec na konec, do točke, kjer se stikajo tri ali več. Če želite odmakniti samo del verige, najprej izberite te krivulje, nato izberite Odmik in kliknite eno od njih.
3. Premaknite kazalec na stran, kamor gre kopija. Sledi črtkan predogled. Pritisnite {{key:B}} za obe strani.
4. Kliknite, vnesite razdaljo in pritisnite {{key:Enter}}.

Črte in loki so odmaknjeni natančno. Oglišča so podaljšana ali prirezana, dokler se ne srečajo. Kopija ima eno koto **Odmik**, drugi deli ji sledijo: dvokliknite koto, da spremenite celotno kopijo. Razdalja, ki je za verigo prevelika, je zavrnjena, na primer: „Ta razdalja je za to verigo prevelika: ena stran bi se obrnila navznoter.“

Zlepek se odmakne z novim zlepkom s točkami prileganja znotraj 0.001 mm od pravega odmika. Ta kopija je fiksna: ne sledi poznejšim spremembam in nima kote Odmik. Zlepek v verigi potrebuje gladke (tangentne) stike na svojih koncih.

## Zrcaljenje

1. Z orodjem Izberi izberite, kaj zrcaliti.
2. Izberite {{ui:Zrcali}} pod {{ui:Več}} ali pritisnite {{key:M}}.
3. Kliknite črto ali osno črto, čez katero zrcalite.

Vsaka zrcaljena točka dobi odnos **Simetrično** s svojo izvirno, tako da kopija sledi, ko se izvirnik spremeni. Točke, ki ležijo na zrcalni črti, so skupne, zrcaljeni krožnici pa dobita odnos Enako. Če nič ni bilo izbrano, kliknite predmete za zrcaljenje, pritisnite {{key:Enter}} in nato kliknite zrcalno črto.

## Mnogokotniki in utori

| Orodje | Kako |
|---|---|
| {{ui:Mnogokotnik}} | Kliknite središče, nato oglišče, nato vnesite število stranic (od 3 do 64). Stranice so enake, oglišča ležijo na pomožni krožnici. Določite velikost mnogokotnika s koto krožnice |
| {{ui:Utor}} | Kliknite središče enega konca, nato središče drugega konca, nato kliknite za nastavitev širine. Dve črti, tangentni na dva enaka polkroga |

## Vzorci skice

Najprej izberite geometrijo, nato:

- {{ui:Linearni vzorec}}: kliknite začetno točko, nato kam gre prva kopija, nato vnesite število kopij (vključno z izvirnikom).
- {{ui:Krožni vzorec}}: kliknite središče, nato vnesite število kopij, enakomerno razporejenih po polnem obratu.

Kopije prinesejo s seboj odnose med izbrano geometrijo (krožni vzorec izpusti vodoravne in navpične). Kopije niso povezane z izvirnikom: spremenite eno, ostale ostanejo take, kot so.

## Projiciranje robov dela

1. Izberite {{ui:Projiciraj rob}} pod {{ui:Več}}.
2. Kliknite ravni ali krožni rob dela za skico.

Rob je natančno kopiran na ravnino skice in fiksiran (odnos Fiksiraj). Ne sledi poznejšim spremembam dela. Pritisnite {{key:Q}}, da postane pomožna geometrija. Krožnica, nagnjena na ravnino skice, bi se projicirala v elipso, zato je zavrnjena. Enako velja za proste robove in robove, ki kažejo naravnost ven iz skice. Projiciranje potrebuje natančno jedro: v tej različici še ni izdelano.
