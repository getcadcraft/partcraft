---
title: Izmjena dijela kroz historiju
summary: Uređujte značajke i skice naknadno, isključujte ih, vraćajte unazad, ubacujte značajke ranije, mijenjajte redoslijed, preimenujte i brišite, te poništite bilo koju od tih izmjena.
keywords: historija, stablo značajki, stablo dizajna, uredi značajku, uredi skicu, isključi, uključi, vrati unazad, vraćanje unazad, vrati naprijed, promijeni redoslijed, pomjeri značajku, izbriši, preimenuj, poništi, ponovi, ponovno građenje, regeneracija, roditelj dijete, veliki dio, mnogo značajki, spora izgradnja, 750 značajki
from: 6f75aef4
---

Dio u PartCraftu je njegova historija: spisak ravnina, skica i značajki na lijevoj strani. PartCraft ponovo gradi čvrsto tijelo od vrha tog spiska svaki put kada se nešto promijeni. Promjena broja na početku spiska mijenja sve što je na njemu izgrađeno.

## Uredi značajku

1. Kliknite značajku u historiji (ili skicu uvučenu ispod nje).
2. Promijenite njene postavke u desnom panelu. Svaka promjena se odmah ponovo gradi.

Nema dugmadi U redu ili Otkaži: svaka promjena se primjenjuje. Ako vam se ne sviđa, pritisnite {{key:Mod+Z}}.

## Promijeni koje ivice ili površi koristi zaobljenje, skošenje ili ljuska

Dvaput kliknite značajku u historiji ili je odaberite i izaberite {{ui:Pick edges}} (ili {{ui:Pick faces}}). Kliknite ivice ili površi da ih dodate ili uklonite, zatim {{ui:Done}} ili {{key:Esc}}. Pogledajte [Zaobljavanje, skošenje i šupljina](topic:fillet-chamfer-shell).

## Uredi skicu

1. Dvaput kliknite skicu u historiji ili je odaberite i izaberite {{ui:Edit sketch}} u desnom panelu (ili {{ui:Sketch}} na alatnoj traci).
2. Dio se vraća u stanje kakvo je bilo kada je skica napravljena: značajke nakon nje su skrivene dok uređujete.
3. Promijenite geometriju, relacije ili kote.
4. Zatvorite skicu. Cijeli dio se ponovo gradi sa promjenom.

Da biste promijenili samo veličinu, ne morate otvarati skicu. Odaberite značajku ili skicu i promijenite broj pod **Dimenzije skice** (ili **Vodeće dimenzije**) u desnom panelu. Pogledajte [Promjena veličina bez otvaranja skice](topic:change-sizes).

## Kada značajka ne uspije

Ako promjena učini značajku nemogućom, PartCraft gradi sve ostalo i označava problem:

- značajka prikazuje **⚠ greška** u historiji, a njena poruka je na vrhu njenog desnog panela (zadržite miš na redu da je pročitate i tamo);
- značajke kojima je potrebna prikazuju **⚠ nije izgrađeno**, uz poruku „Treba mu Extrude2, a ona ne uspijeva.“;
- oznaka u statusnoj traci kaže „1 značajka ne uspijeva“.

Otklonite uzrok (ili poništite), i dio se ponovo gradi. Česte poruke i šta uraditi su u [Rješavanje problema](topic:troubleshooting).

## Isključi značajku

Isključivanje gasi značajku bez brisanja: korisno za isprobavanje dijela bez rupe ili uzorka.

1. Odaberite značajku.
2. Izaberite {{ui:Suppress}}. Njen red pokazuje **isključeno**. Značajke kojima ona treba također se ne grade.
3. Izaberite {{ui:Unsuppress}} da je ponovo uključite.

## Vrati unazad

Vraćanje unazad gradi dio samo do neke tačke, tako da ga vidite kakav je bio, ili dodajete značajku ranije u historiji.

1. Odaberite značajku i izaberite {{ui:Roll back to here}}. Ta značajka i sve ispod nje su zasivljene i nisu izgrađene. Red **Traka povratka · naprijed** označava mjesto.
2. Svaka značajka koju sada dodate ide **na traku**, prije zasivljenih.
3. Kliknite **Traka povratka · naprijed** da se sve ponovo izgradi.

Položaj vraćanja se čuva u datoteci.

## Promijeni redoslijed značajki

1. Odaberite značajku.
2. Izaberite {{ui:Move up}} ili {{ui:Move down}}, ili, kada je njen red u historiji fokusiran, pritisnite {{key:Alt+Up}} ili {{key:Alt+Down}}.

Značajka nikada ne može da se pomjeri iznad onoga što koristi. Dugme je zasivljeno, a zadržavanje miša na njemu (ili pokušaj tipke) daje razlog, na primjer: „Extrude2 koristi Sketch2, pa Sketch2 mora biti ranije.“

Šta značajka koristi: njenu skicu; površ na kojoj njena skica leži; značajke koje uzorak ili ogledalo kopira; liniju skice ili rotaciju korištenu kao pravac ili osu.

## Izbriši značajku

1. Odaberite značajku i izaberite {{ui:Delete}} u desnom panelu ili na alatnoj traci, ili pritisnite {{key:Delete}}.
2. Ako je druge značajke koriste, PartCraft pita: „Extrude3, Hole1 koriste Extrude1 i također će biti izbrisane.“ Izaberite {{ui:Delete all}} ili {{ui:Cancel}}.

Brisanje značajke ne briše njenu skicu: skica se pojavljuje u prikazu kao nekorištena skica, spremna za drugu značajku. Izbrišite skicu odvojeno ako vam ne treba.

## Preimenuj

Odaberite značajku i upišite novi **Naziv** na dnu desnog panela (do 60 znakova). Naziv samog dijela je u desnom panelu kada ništa nije odabrano.

## Dijelovi sa stotinama značajki

Dio sa stotinama značajki testira se na 750. PartCraft čuva tijelo koje je imao usred historije, pa se promjena kasno u historiji ponovo gradi samo za značajke nakon nje; promjena pri vrhu ponovo gradi sve što je na njoj izgrađeno, što traje najduže. Poništavanje i ponavljanje ponovo grade samo od mjesta gdje se dva stanja razlikuju. Da radite brže na velikom dijelu, vratite unazad do mjesta na kojem radite (pogledajte odjeljak Vrati unazad iznad) ili isključite ono što vam trenutno ne treba. Nekoliko rezova i izbočina koji se ne dodiruju primjenjuju se zajedno, pa se dio sastavljen od mnogo odvojenih rupa i izbočina gradi brže nego što broj značajki sugeriše.

Veliki dio se gradi u pozadini: oznaka za izgradnju na dnu kaže **Ponovo se gradi…** uz to koliko je stigla, a prikaz, paneli i meniji rade dok to traje. Dio na ekranu je posljednji izgrađen dok novi nije spreman. Ako ponovo nešto promijenite dok se gradi, PartCraft gradi najnoviju verziju i odbacuje onu u toku. Mali dio se i dalje gradi odmah.

## Poništi i ponovi

- {{key:Mod+Z}} ili {{ui:Undo}} poništava posljednju promjenu: značajku, postavku, izmjenu skice, prevlačenje. Statusna traka kaže šta je, na primjer: „Poništeno: promijenjena dimenzija.“
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ili {{ui:Redo}} ponavljaju je.
- PartCraft čuva posljednjih 200 koraka (dio tako velik da bi 200 kopija trošilo mnogo memorije čuva manje, nikada manje od najnovijih 20). Promjene na listu crteža (presjek, pomjereni GD&T simbol) su u istom spisku. Otvaranje datoteke ili početak novog dijela ga briše.

:::mac
Na Macu koristite ⇧⌘Z za ponavljanje. U Safariju ⌘Y može otvoriti historiju pregledača.
:::
