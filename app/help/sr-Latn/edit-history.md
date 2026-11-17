---
title: Izmena dela kroz njegovu istoriju
summary: Naknadno menjaj elemente i skice, isključi ih, vrati istoriju unazad, ubaci elemente ranije, promeni redosled, preimenuj i briši, i opozovi bilo šta od toga.
keywords: istorija, spisak istorije, stablo dizajna, izmeni element, uredi skicu, isključi, vrati element, vraćanje unazad, vrati unazad, vrati napred, redosled, premesti element, izbriši, preimenuj, opozovi, ponovi, ponovno izgradi, regeneriši, roditelj dete, veliki deo, mnogo elemenata, spora izgradnja, 750 elemenata
from: 6f75aef4
---

Deo u PartCraft-u je njegova istorija: spisak ravni, skica i elemenata sa leve strane. PartCraft pri svakoj promeni ponovo gradi čvrsto telo od vrha tog spiska. Promena broja na početku spiska menja sve što je na njemu izgrađeno.

## Izmeni element

1. Klikni element u istoriji (ili skicu uvučenu ispod njega).
2. Promeni njegova podešavanja u desnom panelu. Svaka promena se odmah ponovo gradi.

Nema dugmadi U redu ni Otkaži: svaka promena se primenjuje. Ako ti se ne sviđa, pritisni {{key:Mod+Z}}.

## Promeni koje ivice ili površine koristi zaobljenje, obaranje ivice ili ljuska

Dvaput klikni element u istoriji ili ga izaberi i odaberi {{ui:Izaberi ivice}} (ili {{ui:Izaberi površine}}). Klikni ivice ili površine da ih dodaš ili izbaciš, zatim {{ui:Gotovo}} ili {{key:Esc}}. Vidi [Zaobljenje, skošenje i šupljina](topic:fillet-chamfer-shell).

## Uredi skicu

1. Dvaput klikni skicu u istoriji ili je izaberi i odaberi {{ui:Uredi skicu}} u desnom panelu (ili {{ui:Skica}} na traci sa alatkama).
2. Deo se vraća u stanje kakvo je bilo kad je skica napravljena: elementi posle nje su skriveni dok uređuješ.
3. Promeni geometriju, veze ili kote.
4. Zatvori skicu. Ceo deo se ponovo gradi sa promenom.

Da promeniš samo meru, ne moraš da otvaraš skicu. Izaberi element ili skicu i promeni broj ispod **Kote skice** (ili **Upravljajuće kote**) u desnom panelu. Vidi [Promena mera bez otvaranja skice](topic:change-sizes).

## Kad element ne uspe

Ako promena učini element nemogućim, PartCraft gradi sve ostalo i obeležava problem:

- element u istoriji prikazuje **⚠ greška**, a njegova poruka je na vrhu desnog panela (prelaz mišem preko reda takođe otkriva poruku);
- elementi kojima je on potreban prikazuju **⚠ nije izgrađeno**, uz „Treba mu Extrude2, koji ne uspeva.“;
- oznaka u statusnoj traci kaže „1 element ne uspeva“.

Ukloni uzrok (ili opozovi), i deo se ponovo gradi. Česte poruke i šta treba uraditi su u [Rešavanje problema](topic:troubleshooting).

## Isključi element

Isključivanje gasi element bez brisanja: korisno za probu dela bez rupe ili šablona.

1. Izaberi element.
2. Odaberi {{ui:Isključi}}. Njegov red pokazuje **isključeno**. Elementi kojima je on potreban takođe se ne grade.
3. Odaberi {{ui:Vrati element}} da ga ponovo uključiš.

## Vraćanje unazad

Vraćanje unazad gradi deo samo do neke tačke, pa možeš da ga vidiš kakav je bio ili da dodaš element ranije u istoriji.

1. Izaberi element i odaberi {{ui:Vrati istoriju do ovde}}. Taj element i svaki ispod njega su posivljeni i ne grade se. Red **Traka vraćanja · napred** označava mesto.
2. Svaki element koji sada dodaš ide **na traku**, ispred posivljenih.
3. Klikni **Traka vraćanja · napred** da ponovo izgradiš sve.

Položaj vraćanja se čuva u datoteci.

## Promena redosleda elemenata

1. Izaberi element.
2. Odaberi {{ui:Pomeri gore}} ili {{ui:Pomeri dole}}, ili, kad je red u istoriji aktivan, pritisni {{key:Alt+Up}} ili {{key:Alt+Down}}.

Element nikad ne može da se pomeri iznad onoga što koristi. Dugme je posivljeno, a prelaz mišem preko njega (ili pokušaj tastera) daje razlog, na primer „Extrude2 koristi Sketch2, pa Sketch2 mora biti prvi.“

Šta element koristi: svoju skicu; površinu na kojoj leži njegova skica; elemente koje šablon ili ogledalo kopira; liniju skice ili rotaciju korišćenu kao pravac ili osu.

## Izbriši element

1. Izaberi element i odaberi {{ui:Izbriši}} u desnom panelu ili na traci sa alatkama, ili pritisni {{key:Delete}}.
2. Ako ga koriste drugi elementi, PartCraft pita: „Extrude3, Hole1 koriste Extrude1 i biće takođe obrisani.“ Odaberi {{ui:Izbriši sve}} ili {{ui:Otkaži}}.

Brisanje elementa ne briše njegovu skicu: skica se ponovo pojavljuje u prikazu kao neiskorišćena skica, spremna za drugi element. Ako ti nije potrebna, obriši skicu posebno.

## Preimenuj

Izaberi element i upiši novo **Ime** na dnu desnog panela (do 60 znakova). Ime samog dela je u desnom panelu kad ništa nije izabrano.

## Delovi sa stotinama elemenata

Deo sa stotinama elemenata ispitan je na 750. PartCraft čuva čvrsto telo koje je imao usred istorije, pa promena pri kraju istorije ponovo gradi samo elemente posle nje; promena pri vrhu ponovo gradi sve što je na njoj izgrađeno, što traje najduže. Opozivanje i ponavljanje ponovo grade samo od mesta gde se dva stanja razlikuju. Da radiš brže na velikom delu, vrati unazad do mesta na kom radiš (vidi Vraćanje unazad iznad) ili isključi ono što ti za sada nije potrebno. Više rezova i ispupčenja koji se ne dodiruju primenjuju se zajedno, pa se deo sastavljen od mnogo odvojenih rupa i ispupčenja gradi brže nego što broj elemenata sugeriše.

Veliki deo se ponovo gradi u pozadini: oznaka izgradnje dole kaže **Ponovo se gradi…** uz to koliko je stigla, a prikaz, paneli i meniji rade dok traje. Deo na ekranu je poslednji izgrađeni dok novi nije spreman. Ako ponovo nešto promeniš dok se gradi, PartCraft gradi najnoviju verziju i odbacuje onu koja je u toku. Mali deo se i dalje odmah ponovo gradi.

## Opozivanje i ponavljanje

- {{key:Mod+Z}} ili {{ui:Opozovi}} opoziva poslednju promenu: element, podešavanje, izmenu skice, prevlačenje. Statusna traka kaže šta, na primer „Opozvana je promena kote.“
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ili {{ui:Ponovi}} ponavlja je.
- PartCraft čuva poslednjih 200 koraka (deo toliko velik da bi 200 kopija trošilo mnogo memorije čuva manje, nikad manje od poslednjih 20). Promene na listu crteža (presek, pomeren GD&T simbol) su na istom spisku. Otvaranje datoteke ili početak novog dela ga briše.

:::mac
Na Mac-u koristi ⇧⌘Z za ponavljanje. U Safari-ju ⌘Y može umesto toga otvoriti istoriju pregledača.
:::
