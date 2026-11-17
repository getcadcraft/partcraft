---
title: Potpuno definišite skicu relacijama i kotama
summary: Dodajte relacije iz desnog panela i kote alatom Kota, čitajte boje nedovoljno, potpuno i preodređeno definisane skice, i popravite skicu koja je preodređena.
keywords: relacije, ograničenja, kote, pametna kota, potpuno definisano, nedovoljno definisano, preodređeno definisano, stepeni slobode, poklapanje, horizontalno, vertikalno, paralelno, okomito, tangenta, jednako, koncentrično, središnja tačka, fiksiraj, sukob, suvišno
from: e76d047a
---

Skica je **potpuno definisana** kada su svaka tačka i svaka veličina fiksirane relacijama i kotama. Potpuno definisana skica se mijenja samo kada promijenite broj, pa se dio ponaša predvidljivo kada ga kasnije uređujete. PartCraft vas ne tjera da potpuno definišete skicu, ali uvijek pokazuje koliko ste blizu.

## Čitajte stanje skice

Stanje se prikazuje na tri mjesta: oznaka u gornjem lijevom uglu prikaza, poruka na vrhu desnog panela i zastavica u historiji.

| Stanje | Oznaka | Boja geometrije | Šta znači |
|---|---|---|---|
| Nedovoljno definisano | „Nedovoljno definisano · 3 stepena slobode“ | Plava | Neka geometrija se još može pomjerati. Prevucite plavu geometriju da vidite u kojem smjeru |
| Potpuno definisano | „Potpuno definisano“ | Tinta (crna na Paper, svijetla na Model) | Svaka tačka i veličina su fiksirane |
| Preodređeno | „Preodređeno“ | Crvena na uključenim relacijama | Neke relacije se međusobno isključuju, ili je neka već podrazumijevana drugima |

Geometrija konstrukcije je uvijek siva i isprekidana, bez obzira na stanje. Odabrane stavke su narandžaste. „Stepen slobode“ je jedan način na koji nešto još može da se pomjeri: slobodna tačka ima dva (lijevo-desno i gore-dolje), slobodna kružnica ima tri (njen centar i poluprečnik).

Legenda ispod poruke u desnom panelu ponavlja boje.

## Dodajte kotu

1. Pritisnite {{key:D}} ili izaberite {{ui:Dimension}}.
2. Kliknite šta mjerite:
   - **jedna linija**: njena dužina;
   - **jedna kružnica**: njen prečnik; **jedan luk**: njegov poluprečnik;
   - **dvije tačke** (krajnja tačka, centar, slobodna tačka ili ishodište): rastojanje između njih;
   - **tačka i linija**: rastojanje od tačke do linije;
   - **dvije paralelne linije**: rastojanje između njih; **dvije linije pod uglom**: ugao između njih.
3. Nakon jedne stavke, statusna traka kaže „Kliknite drugu stavku ili kliknite gdje ide kota.“ Kliknite drugu stavku, ili kliknite na praznom mjestu gdje želite broj.
4. Otvara se polje za broj sa trenutnom vrijednošću. Upišite veličinu i pritisnite {{key:Enter}}. {{key:Esc}} zadržava izmjerenu vrijednost.

**Mjesto na kojem postavite broj određuje vrstu** za kosu liniju ili dvije tačke: postavite ga iznad ili ispod da dobijete horizontalno rastojanje, lijevo ili desno da dobijete vertikalno rastojanje, a drugdje za pravo (poravnato) rastojanje.

Polje prihvata obične brojeve u milimetrima ili stepenima, kao `25`, `12.5` ili `1e3`. Vodeće `⌀`, `Ø` ili `R`, ili završno `mm` ili `°`, se ignorišu. Uglovi su od 0 do 180 stepeni. Aritmetika kao `20+5` nije prihvaćena; da povežete veličinu sa varijablom ili formulom, počnite je znakom `=`.

Da promijenite kotu kasnije, dvaput kliknite njen broj u skici ili izaberite **Uredi** pored nje na spisku u desnom panelu.

:::tip
Možete i prvo odabrati geometriju (alat Odabir) i izabrati dugme kote u desnom panelu: {{ui:Distance}}, {{ui:Horizontal distance}}, {{ui:Vertical distance}}, {{ui:Radius}}, {{ui:Diameter}} ili {{ui:Angle}}. Prikazuju se samo oni koji odgovaraju odabiru. Ovo je način da kružnici date poluprečnik umjesto prečnika.
:::

## Dodajte relaciju

Relacije se dodaju iz desnog panela, ne alatom.

1. Pritisnite {{key:S}} za Odabir.
2. Kliknite jednu stavku, zatim {{key:Shift}}+klik na drugu ako relacija treba dvije. Ishodište se također može odabrati.
3. Desni panel kaže „Odabrano: linija l3, tačka p1“ i prikazuje dugme za svaku relaciju koja odgovara, kao što su {{ui:∥ Parallel}} ili {{ui:• Coincident}}.
4. Izaberite dugme. Skica se odmah rješava.

Ako nijedna relacija ne odgovara, panel kaže: „Nijedna relacija ne odgovara ovom odabiru. Odaberite jednu ili dvije stavke (Shift+klik dodaje).“

Potpuni spisak relacija, šta svaka traži i šta radi, nalazi se u [Relacije i kote skice](topic:sketch-relations).

Relacije se u skici prikazuju kao mali simboli pored geometrije (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Tačke poklapanja su skrivene osim ako geometrija nije odabrana ili relacija nije u problemu. Kliknite simbol da odaberete relaciju.

## Radni primjer: profil nosača u obliku slova L

1. Skicirajte na **Prednjoj ravnini**. Alatom Linija počnite na ishodištu i kliknite šest uglova slova L, završavajući ponovo na ishodištu. Lanac se sam završava kada kliknete prvu tačku.
2. Linije nacrtane blizu horizontale ili vertikale već imaju relacije H i V, osim posljednje: linija koja završava na postojećoj tački ne dobija automatsku relaciju. Pritisnite {{key:S}}, kliknite tu posljednju liniju i izaberite {{ui:V Vertical}} u desnom panelu. Oznaka kaže „Nedovoljno definisano · 4 stepena slobode“.
3. Pritisnite {{key:D}}. Kliknite donju liniju, kliknite ispod nje, upišite `80`, {{key:Enter}}.
4. Kliknite lijevu liniju, kliknite lijevo od nje, upišite `60`, {{key:Enter}}.
5. Postavite kote na kraću gornju liniju (`20`) i unutrašnju vertikalnu liniju (`45`) na isti način.
6. Oznaka sada kaže **Potpuno definisano**, a cijeli L postaje tinta.

## Popravite preodređenu skicu

Kada nova relacija ili kota protivreči ostalima, PartCraft ništa ne pomjera. Geometrija ostaje tačno kakva je bila, uključene relacije postaju crvene, a statusna traka ih imenuje:

- „Preodređeno: Horizontalno, Udaljenost 40 ne mogu se sve ispuniti. Poništite ili izbrišite jednu od njih.“ Relacije su u sukobu.
- „Preodređeno: Paralelno je već podrazumijevano. Izbrišite je.“ Relacija ne dodaje ništa: ostale je već nameću. (Stranice pravougaonika su, na primjer, već paralelne.)

Da popravite:

1. Pritisnite {{key:Mod+Z}} da poništite posljednju promjenu, ili
2. Pronađite crvenu stavku u **Relacije i kote** na spisku u desnom panelu (grupa koja je sadrži je otvorena i crvena) i izaberite **Izbriši** pored nje. Također možete kliknuti njen simbol ili broj u skici i pritisnuti {{key:Delete}}.

:::note
U ovoj verziji nema „vođenih“ (referentnih) kota. Kota koja bi samo prijavila veličinu koju već fiksiraju druge relacije tretira se kao preodređena. Umjesto toga čitajte veličine na panelu: odaberite liniju i pogledajte dugmad Kota, ili provjerite podatke o dijelu nakon izvlačenja.
:::

Preodređena skica sa stvarnim sukobom čini da značajka koja je koristi ne uspijeva („Preodređeno: 1 relacija se ne može ispuniti.“), a historija označava **⚠ greška**. Skica koja je samo suvišna se i dalje gradi, uz ⚠ upozorenje.

## Prevucite da nađete šta je slobodno

U Odabiru prevucite bilo koju plavu tačku ili liniju. Rješavač je pomjera najmanje moguće dok zadržava svaku relaciju. Ako bi prevlačenje prekinulo relaciju, geometrija se vraća nazad. Ovo je najbrži način da vidite koja kota još nedostaje.

## Spisak relacija

Kada ništa nije odabrano, desni panel prikazuje **Relacije i kote**. Svaki red ima:

- **Uredi** (samo kote): otvara polje za broj;
- **Odaberi**: odabire ga u skici;
- **Izbriši**: uklanja ga.

Relacije iste vrste koje se pojavljuju više puta dijele jedan red, npr. „Poklapanje × 5“ za pravougaonik vezan za ishodište. Kliknite red da ga otvorite: svaka relacija je navedena prema onome što povezuje („tačka p2, tačka p4“) sa sopstvenim **Odaberi** i **Izbriši**. Sam red ima:

- **Odaberi**: odabire sve njih u skici;
- **Izbriši sve**: uklanja sve njih u jednom koraku ({{key:Mod+Z}} ih vraća).

Grupa koja sadrži preodređenu relaciju se otvara sama, a njen naziv je crven. Kote su uvijek navedene jedna po redu, sa svojim vrijednostima.

Kada je geometrija odabrana, spisak prikazuje samo **Relacije na odabiru**.
