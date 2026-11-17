---
title: Promijenite dio kroz njegovu povijest
summary: Uređujte značajke i skice naknadno, potiskujte, vraćajte unatrag, umećite značajke ranije, mijenjajte redoslijed, preimenujte i brišite te poništite bilo što od toga.
keywords: povijest, stablo značajki, stablo dizajna, uredi značajku, uredi skicu, potisni, ukloni potiskivanje, vrati unatrag, vrati naprijed, promijeni redoslijed, pomakni značajku, izbriši, preimenuj, poništi, ponovi, ponovna izgradnja, regeneriraj, nadređeni podređeni, veliki dio, mnogo značajki, spora izgradnja, 750 značajki
from: 6f75aef4
---

Dio u programu PartCraft jest njegova povijest: popis ravnina, skica i značajki s lijeve strane. Program PartCraft pri svakoj promjeni ponovno gradi puno tijelo od vrha tog popisa. Promjena broja na početku popisa mijenja sve što je na njemu izgrađeno.

## Uređivanje značajke

1. Kliknite značajku u povijesti (ili skicu uvučenu ispod nje).
2. Promijenite njezine postavke u desnoj ploči. Svaka promjena odmah ponovno gradi dio.

Nema gumba U redu ni Odustani: primjenjuje se svaka promjena. Ako vam se ne sviđa, pritisnite {{key:Mod+Z}}.

## Promjena bridova ili ploha koje koriste zaobljenje, skošenje ili ljuska

Dvaput kliknite značajku u povijesti ili je odaberite i odaberite {{ui:Odaberi bridove}} (ili {{ui:Odaberi plohe}}). Kliknite bridove ili plohe da ih dodate ili uklonite, zatim {{ui:Gotovo}} ili {{key:Esc}}. Vidi [Zaobljivanje, skošenje i ljuska](topic:fillet-chamfer-shell).

## Uređivanje skice

1. Dvaput kliknite skicu u povijesti ili je odaberite i odaberite {{ui:Uredi skicu}} u desnoj ploči (ili {{ui:Skica}} na alatnoj traci).
2. Dio se vraća u stanje u kojem je bio kad je skica nastala: značajke nakon nje skrivene su dok uređujete.
3. Promijenite geometriju, relacije ili kote.
4. Zatvorite skicu. Cijeli dio se ponovno gradi s promjenom.

Da biste promijenili samo veličinu, ne morate otvarati skicu. Odaberite značajku ili skicu i promijenite broj pod **Kote skice** (ili **Upravljajuće kote**) u desnoj ploči. Vidi [Promjena veličina bez otvaranja skice](topic:change-sizes).

## Kad značajka ne uspije

Ako promjena onemogući značajku, program PartCraft izgrađuje sve ostalo i označava problem:

- značajka u povijesti prikazuje **⚠ pogreška**, a njezina poruka je na vrhu desne ploče (zadržite pokazivač na retku da je pročitate i tamo);
- značajke koje je trebaju prikazuju **⚠ nije izgrađeno**, uz poruku „Treba Extrude2, koji ne uspijeva.“;
- čip u statusnoj traci kaže „1 značajka ne uspijeva“.

Otklonite uzrok (ili poništite promjenu) i dio će se ponovno izgraditi. Česte poruke i što učiniti opisane su u [Rješavanje problema](topic:troubleshooting).

## Potiskivanje značajke

Potiskivanjem se značajka isključuje bez brisanja: korisno je za isprobavanje dijela bez rupe ili uzorka.

1. Odaberite značajku.
2. Odaberite {{ui:Potisni}}. Njezin redak pokazuje **isključeno**. Značajke koje je trebaju također se ne izgrađuju.
3. Odaberite {{ui:Ukloni potiskivanje}} da je ponovno uključite.

## Vraćanje unatrag

Vraćanje unatrag gradi dio samo do određene točke, pa ga možete vidjeti kakav je bio ili dodati značajku ranije u povijesti.

1. Odaberite značajku i odaberite {{ui:Vrati unatrag do ovdje}}. Ta značajka i sve ispod nje su zasivljene i nisu izgrađene. Redak **Traka vraćanja · vrati naprijed** označava mjesto.
2. Svaka značajka koju sada dodate ide **na traku**, prije zasivljenih.
3. Kliknite **Traka vraćanja · vrati naprijed** da ponovno izgradite sve.

Položaj vraćanja unatrag sprema se u datoteku.

## Promjena redoslijeda značajki

1. Odaberite značajku.
2. Odaberite {{ui:Pomakni gore}} ili {{ui:Pomakni dolje}} ili, s fokusom na njezinom retku u povijesti, pritisnite {{key:Alt+Up}} ili {{key:Alt+Down}}.

Značajka nikad ne može preći iznad onoga što koristi. Gumb je zasivljen, a kad zadržite pokazivač na njemu (ili pokušate tipku), dobit ćete razlog, na primjer: „Extrude2 koristi Sketch2, pa Sketch2 mora doći prije.“

Što značajka koristi: svoju skicu; plohu na kojoj skica leži; značajke koje uzorak ili zrcaljenje kopira; liniju skice ili značajku rotiranja koja se koristi kao smjer ili os.

## Brisanje značajke

1. Odaberite značajku i odaberite {{ui:Izbriši}} u desnoj ploči ili na alatnoj traci, ili pritisnite {{key:Delete}}.
2. Ako druge značajke koriste nju, PartCraft pita: „Extrude3, Hole1 koriste Extrude1 i također će biti izbrisane.“ Odaberite {{ui:Izbriši sve}} ili {{ui:Odustani}}.

Brisanje značajke ne briše i njezinu skicu: skica se ponovno pojavljuje u prikazu kao nekorištena skica, spremna za drugu značajku. Ako vam skica nije potrebna, izbrišite je zasebno.

## Preimenovanje

Odaberite značajku i upišite novi **Naziv** na dnu desne ploče (do 60 znakova). Naziv samog dijela nalazi se u desnoj ploči kad ništa nije odabrano.

## Dijelovi sa stotinama značajki

Dio sa stotinama značajki ispitan je s 750 značajki. Program PartCraft zadržava puno tijelo koje je imao usred povijesti, pa se promjena pri kraju povijesti ponovno gradi samo za značajke nakon nje; promjena pri vrhu ponovno gradi sve što je na njoj izgrađeno, što traje najdulje. Poništavanje i ponavljanje ponovno grade samo od mjesta na kojem se dva stanja razlikuju. Za brži rad na velikom dijelu vratite unatrag do mjesta na kojem radite (vidi Vraćanje unatrag iznad) ili potisnite ono što vam za sada nije potrebno. Više izreza i izbočina koje se ne dodiruju primjenjuju se zajedno, pa se dio napravljen od mnogo zasebnih rupa i izbočina gradi brže nego što broj značajki sugerira.

Veliki dio se ponovno gradi u pozadini: čip za izgradnju pri dnu pokazuje **Ponovna izgradnja…** i koliko je odmakao, a prikaz, ploče i izbornici i dalje rade dok to traje. Dio na zaslonu je posljednji izgrađeni dok novi nije spreman. Ako nešto ponovno promijenite dok se gradi, PartCraft gradi najnoviju verziju i odbacuje onu u tijeku. Mali dio se i dalje odmah ponovno gradi.

## Poništavanje i ponavljanje

- {{key:Mod+Z}} ili {{ui:Poništi}} poništava posljednju promjenu: značajku, postavku, uređivanje skice, povlačenje. Statusna traka kaže što, na primjer „Poništeno: promjena kote.“
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ili {{ui:Ponovi}} ponavlja je.
- PartCraft zadržava posljednjih 200 koraka (dio toliko velik da bi 200 kopija trošilo mnogo memorije zadržava manje, nikad manje od najnovijih 20). Promjene na listu crteža (presjek, pomaknut simbol GD&T) su na istom popisu. Otvaranje datoteke ili početak novog dijela briše ga.

:::mac
Na Macu za ponavljanje koristite ⇧⌘Z. U Safariju ⌘Y može otvoriti povijest preglednika umjesto toga.
:::
