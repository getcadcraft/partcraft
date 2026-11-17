---
title: Premikanje delov k drugim modelirnikom delov in iz njih
summary: Pošljite del drugemu modelirniku delov kot makro, ki ga z živim drevesom značilk obnovi. Imenovani STEP in odpiranje seznama značilk, ki ga je zapisal drug modelirnik, v tej različici še nista izdelana.
keywords: makro, še ni izdelano, swb, vba, drevo značilk, krožni prenos, izvoz makra, cadcraft-sw.json, imenovani step, ap214, globalne spremenljivke, enačbe, izvorni del
from: 97ca61da
---

PartCraft izmenjuje dele s SolidWorks v obe smeri, brez datotečnega formata, ki ga nihče drug ne more brati:

- **Ven:** makro (`.swb`, navadno besedilo), ki ga SolidWorks zažene, da sam zgradi del, značilko za značilko, s skicami, odnosi, kotami, globalnimi spremenljivkami in enačbami. Dobite izvorni del z živim drevesom značilk, ne mrtve trdne snovi.
- **Nazaj:** makro, ki ga zaženete v SolidWorks, zapiše značilke in enačbe dela v datoteko `.cadcraft-sw.json`. Odpiranje te datoteke v PartCraft v tej različici še ni izdelano (potrebuje natančno jedro).

:::warning
Nič od tega še ni bilo preizkušeno v SolidWorks. SolidWorks teče samo v sistemu Windows z licenco, PartCraft pa teh makrov v njem še nikoli ni zagnal. Makri so bili napisani po dokumentaciji programskega vmesnika SolidWorks in tukaj preverjeni samo strukturno. Pričakujte, da boste prijavili težave; dnevnik, ki ga makro zapiše, pove, kateri korak ni uspel.
:::

PartCraft ne more zapisati datoteke `.sldprt`: ta format je zaprt. Makro je pot do izvornega dela.

## Pošljite del kot makro

1. Odprite del.
2. Izberite {{ui:Izvoz}}, nato {{ui:Makro za SolidWorks (.swb)}}. PartCraft prenese `<part>.swb`; vrstica stanja pove, da je bil zapisan „brez natančnega jedra“.
3. Pogovorno okno pove, koliko značilk, globalnih spremenljivk in enačb makro zgradi, in našteje vse, kar izpusti. V tej različici poleg njega ni nobenega STEP: če ga potrebujete, uporabite {{ui:Izvoz}}, nato {{ui:STEP (fasetiran, mrežno jedro)}}.
4. V SolidWorks izberite **Tools > Macro > Run**, izberite datoteko `.swb` in počakajte. Ustvari novo datoteko dela iz vaše privzete predloge dela, nastavi milimetre in zgradi vsako značilko.
5. Na koncu sporočilo pove, koliko korakov je bilo opravljenih, koliko jih je ni uspelo in koliko se jih ujema s telesom v PartCraft. Celoten dnevnik `<part> macro log.txt` je zapisan poleg makra.

Kaj makro zgradi:

| PartCraft | V novem delu |
|---|---|
| Skica na ravnini Sprednja, Zgornja ali Desna | Skica na tej ravnini z njenimi črtami, loki, krožnicami, točkami, odnosi in kotami (poimenovanimi kot v PartCraft, na primer `k7`) |
| Skica na ploskvi | Skica na isti ploskvi, izbrani s točko na njej |
| Skica na fiksni ravnini | Referenčna ravnina skozi tri točke in skica na njej |
| Iztisni, izreži (slepo, skozi vse, srednja ravnina, dve smeri, stožčasto) | Iztisni telo ali izreži z iztisom |
| Zavrti, zavrti izrez | Zavrti okoli iste osne črte |
| Izvrtina (preprosta, valjasto pogrezanje, stožčasto pogrezanje, z navojem) | Eden ali dva izreza z lastnimi skicami (izvrtina z navojem je njena vrtalna izvrtina; brez navoja) |
| Linearni in krožni vzorec, zrcaljenje | Linearni vzorec, krožni vzorec, zrcaljenje (značilke ali telo) |
| Zaobljenje, posnetje, lupina | Zaobljenje, posnetje in lupina na istih robovih in ploskvah, izbranih s točkami |
| Parametri in enačbe | Globalne spremenljivke in enačbe na preimenovanih kotah |
| Izključene značilke, vrstica vrnitve | Izključene na enak način; vrstica vrnitve na istem mestu |

Po vsaki trdni značilki makro primerja prostornino in velikost telesa s PartCraft. Ko se razlikujeta, enkrat obrne smer te značilke in preveri ponovno; če ni boljše, jo obrne nazaj in v dnevnik zapiše „Check“.

### Kaj se izpusti

Pogovorno okno in začetek makra navedeta vse, kar ni preneseno, z razlogom. Danes to so: uvoženi trdni deli (raje vstavite STEP), potegni po poti, prehodi, osnutki, referenčne osi in točke, pogoji konca „do“, iztisi samo nekaterih kontur in vse, kar je od njih odvisno. Zlepki postanejo krivulje skozi svoje točke. Ta različica nima natančnega jedra, zato so izpuščene tudi skice na ploskvah in značilke, ki izbirajo robove ali ploskve.

## Pošljite imenovani STEP

Še ni izdelano v tej različici: {{ui:STEP za SolidWorks (poimenovan, AP214)}} potrebuje natančno jedro, izbira pa pove „STEP za SolidWorks: še ni izdelano. …“. Z natančnim jedrom datoteka nosi ime dela, milimetre in barvo dela ter postavi Y navpično, kot SolidWorks prikazuje dele (navadni izvoz {{ui:STEP AP214 (točno telo)}} postavi Z navpično). Črke z diakritiko izgubijo znamenja v imenu, drugi znaki zunaj navadnega ASCII pa postanejo `_`.

## Vrnite del nazaj

Odpiranje datoteke v PartCraft (3. korak) še ni izdelano v tej različici: pove „Odpiranje izvoza SolidWorks: še ni izdelano. …“. Risalna aplikacija CadCraft datoteko še vedno odpre in prevzame njene skice.

1. Izberite {{ui:Datoteka}} > {{ui:Izvoz}} > {{ui:Izvozi makro za prenos delov nazaj (.swb)}}, da prenesete `CadCraftExport.swb`, in ga shranite poleg svojih delov.
2. V SolidWorks odprite del, izberite **Tools > Macro > Run** in izberite `CadCraftExport.swb`. Makro zapiše `<part>.cadcraft-sw.json` poleg dela in v njem ne spremeni ničesar.
3. V PartCraft izberite {{ui:Odpri}} in izberite to datoteko ali jo spustite na 3D pogled.
4. Z natančnim jedrom PartCraft obnovi del značilko za značilko in pokaže, kaj je naredil: na primer „5 od 5 značilk prenesenih iz SolidWorks (Flange.SLDPRT)“, vsako značilko, ki je ni mogel prenesti („Ni prenesena: Sweep1 (Sweep).“), in ali se prostornina ujema s prostornino, ki jo je zapisal SolidWorks.
5. Shranite ga kot del PartCraft z {{ui:Shrani}}.

Skice pristanejo na osnovni ravnini, če ležijo na njej; na ustrezni ravni ploskvi dela, če ta obstaja (zato sledijo poznejšim urejanjem); sicer na fiksni ravnini. Robovi in ploskve zaobljenj, posnetij in lupin so najdeni iz točk in ohranjeni kot poimenovane reference. Globalne spremenljivke postanejo parametri (imena s presledki dobijo podčrtaje: „Bolt count“ postane `Bolt_count`), enačbe pa postanejo enačbe na istih kotah. Nič ni ugibano: kar nima ustreznika, je navedeno.

Risalna aplikacija CadCraft odpre isto datoteko in prevzame njene skice.

:::note
Format je `cadcraft-sw-export` različica 1, navaden JSON v milimetrih in stopinjah. Datoteka iz novejšega makra ali neveljavna datoteka je zavrnjena z razlogom.
:::
