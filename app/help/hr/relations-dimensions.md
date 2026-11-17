---
title: Potpuno definirajte skicu relacijama i kotama
summary: Dodajte relacije iz desne ploče i kote alatom Kota, pročitajte boje nedovoljno, potpuno i prekomjerno definirane skice i popravite skicu koja je prekomjerno definirana.
keywords: relacije, ograničenja, kote, pametna kota, potpuno definirano, nedovoljno definirano, prekomjerno definirano, stupnjevi slobode, podudarno, horizontalno, vertikalno, paralelno, okomito, tangentno, jednako, koncentrično, polovište, učvrsti, sukob, suvišno
from: e76d047a
---

Skica je **potpuno definirana** kad su svaka točka i svaka veličina određeni relacijama i kotama. Potpuno definirana skica mijenja se samo kad promijenite broj, pa se dio predvidljivo ponaša kad ga kasnije uređujete. PartCraft vas ne prisiljava da potpuno definirate skicu, ali uvijek pokazuje koliko ste blizu.

## Čitanje stanja skice

Stanje se prikazuje na tri mjesta: čip u gornjem lijevom kutu prikaza, poruka na vrhu desne ploče i oznaka u povijesti.

| Stanje | Čip | Boja geometrije | Što znači |
|---|---|---|---|
| Nedovoljno definirana | „Nedovoljno definirano · 3 stupnja slobode“ | Plava | Neka se geometrija još može pomaknuti. Povucite plavu geometriju da vidite u kojem smjeru |
| Potpuno definirana | „Potpuno definirano“ | Tinta (crna na Papiru, svijetla na Modelu) | Svaka točka i veličina su fiksirane |
| Prekomjerno definirana | „Prekomjerno definirano“ | Crvena na uključenim relacijama | Neke relacije se međusobno isključuju, ili je jednu već podrazumijevaju druge |

Konstrukcijska geometrija je siva i isprekidana, bez obzira na stanje. Odabrane stavke su narančaste. „Stupanj slobode“ je jedan način na koji se nešto još može pomaknuti: slobodna točka ima dva (lijevo-desno i gore-dolje), slobodna kružnica ima tri (njezino središte i radijus).

Legenda ispod poruke u desnoj ploči ponavlja boje.

## Dodavanje kote

1. Pritisnite {{key:D}} ili odaberite {{ui:Kota}}.
2. Kliknite ono što želite izmjeriti:
   - **jedna linija**: njezina duljina;
   - **jedna kružnica**: njezin promjer; **jedan luk**: njegov radijus;
   - **dvije točke** (krajnja točka, središte, slobodna točka ili ishodište): udaljenost među njima;
   - **točka i pravac**: udaljenost od točke do pravca;
   - **dva paralelna pravca**: udaljenost među njima; **dva pravca pod kutom**: kut među njima.
3. Nakon jedne stavke, statusna traka kaže „Kliknite drugu stavku ili kliknite mjesto na koje ide kota.“ Kliknite drugu stavku ili kliknite na prazno mjesto gdje želite broj.
4. Otvara se okvir za broj s trenutačnom vrijednošću. Upišite veličinu i pritisnite {{key:Enter}}. {{key:Esc}} zadržava izmjerenu vrijednost.

**Mjesto na koje postavite broj određuje vrstu** za kosu liniju ili dvije točke: postavite ga iznad ili ispod za horizontalnu udaljenost, lijevo ili desno za vertikalnu udaljenost, a bilo gdje drugdje za pravu (poravnatu) udaljenost.

Okvir prihvaća obične brojeve u milimetrima ili stupnjevima, na primjer `25`, `12.5` ili `1e3`. Početni `⌀`, `Ø` ili `R`, odnosno završni `mm` ili `°`, zanemaruju se. Kutovi su od 0 do 180 stupnjeva. Računske radnje poput `20+5` nisu prihvaćene; da biste veličinu povezali s varijablom ili formulom, počnite je znakom `=`.

Da kasnije promijenite kotu, dvaput kliknite njezin broj u skici ili odaberite **Uredi** pored nje na popisu u desnoj ploči.

:::tip
Možete i prvo odabrati geometriju (alat Odaberi) i odabrati gumb kote u desnoj ploči: {{ui:Udaljenost}}, {{ui:Horizontalna udaljenost}}, {{ui:Vertikalna udaljenost}}, {{ui:Radijus}}, {{ui:Promjer}} ili {{ui:Kut}}. Prikazuju se samo oni koji odgovaraju odabiru. Tako kružnici dajete radijus umjesto promjera.
:::

## Dodavanje relacije

Relacije se dodaju iz desne ploče, a ne alatom.

1. Pritisnite {{key:S}} za alat Odaberi.
2. Kliknite jednu stavku, zatim {{key:Shift}}+klik na drugu ako relacija treba dvije. Može se odabrati i ishodište.
3. Desna ploča kaže „Odabrano: linija l3, točka p1“ i prikazuje gumb za svaku relaciju koja odgovara, na primjer {{ui:∥ Paralelno}} ili {{ui:• Podudarno}}.
4. Odaberite gumb. Skica se odmah rješava.

Ako nijedna relacija ne odgovara, ploča kaže „Nijedna relacija ne odgovara ovom odabiru. Odaberite jednu ili dvije stavke (Shift+klik dodaje).“

Potpuni popis relacija, što svaka treba i što radi, nalazi se u [Relacije i kote skice](topic:sketch-relations).

Relacije se u skici prikazuju kao mali simboli uz geometriju (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Točke podudarnosti su skrivene osim ako geometrija nije odabrana ili je relacija u problemu. Kliknite simbol da odaberete relaciju.

## Primjer: profil L-nosača

1. Skicirajte na **Prednjoj ravnini**. Alatom Linija počnite na ishodištu i kliknite šest kutova slova L, završivši ponovo na ishodištu. Lanac završava sam kad kliknete prvu točku.
2. Linije nacrtane blizu vodoravnih ili okomitih već imaju relacije H i V, osim zadnje: linija koja završava na postojećoj točki ne dobiva automatsku relaciju. Pritisnite {{key:S}}, kliknite tu zadnju liniju i odaberite {{ui:V Vertikalno}} u desnoj ploči. Čip kaže „Nedovoljno definirano · 4 stupnja slobode“.
3. Pritisnite {{key:D}}. Kliknite donju liniju, kliknite ispod nje, upišite `80`, {{key:Enter}}.
4. Kliknite lijevu liniju, kliknite lijevo od nje, upišite `60`, {{key:Enter}}.
5. Kotirajte kratku gornju liniju s `20` i unutarnju vertikalnu liniju s `45` na isti način.
6. Čip sada kaže **Potpuno definirano** i cijeli L poprima boju tinte.

## Popravak prekomjerno definirane skice

Kad nova relacija ili kota proturječi ostalima, PartCraft ništa ne pomiče. Geometrija ostaje točno kakva je bila, uključene relacije postaju crvene, a statusna traka ih imenuje:

- „Prekomjerno definirano: Horizontalno, Udaljenost 40 ne mogu se sve ostvariti. Poništite ili izbrišite jednu od njih.“ Relacije su u sukobu.
- „Prekomjerno definirano: Paralelno je već podrazumijevano. Izbrišite ga.“ Relacija ne dodaje ništa: druge je već nameću. (Stranice pravokutnika su već paralelne, na primjer.)

Za popravak:

1. Pritisnite {{key:Mod+Z}} za poništavanje posljednje promjene, ili
2. Pronađite crveni redak u popisu **Relacije i kote** u desnoj ploči (grupa koja ga sadrži otvorena je i crvena) i odaberite **Izbriši** pored njega. Također možete kliknuti njegov simbol ili broj u skici i pritisnuti {{key:Delete}}.

:::note
U ovoj verziji nema „vođenih“ (referentnih) kota. Kota koja bi samo prikazivala veličinu koju već određuju druge relacije smatra se prekomjerno definiranom. Umjesto toga čitajte veličine u ploči: odaberite liniju i pogledajte gumbe Kota ili provjerite podatke o dijelu nakon izvlačenja.
:::

Prekomjerno definirana skica sa stvarnim sukobom čini da značajka koja je koristi ne uspije („Prekomjerno definirano: 1 relacija ne može se ispuniti.“), a povijest je označava s **⚠ pogreška**. Skica koja je samo suvišna i dalje se gradi, uz ⚠ upozorenje.

## Povlačenjem pronađite što je slobodno

U alatu Odaberi povucite bilo koju plavu točku ili liniju. Rješavač ga pomiče što je manje moguće, zadržavajući svaku relaciju. Ako bi povlačenje prekinulo relaciju, geometrija se vraća natrag. To je najbrži način da vidite koja kota još nedostaje.

## Popis relacija

Kad ništa nije odabrano, desna ploča prikazuje popis **Relacije i kote**. Svaki redak ima:

- **Uredi** (samo kote): otvara okvir za broj;
- **Odaberi**: odabire ju u skici;
- **Izbriši**: uklanja je.

Relacije iste vrste koje se pojavljuju više puta dijele jedan redak, kao „Podudarno × 5“ za pravokutnik vezan uz ishodište. Kliknite redak da ga otvorite: svaka relacija navedena je prema onome što veže („točka p2, točka p4“) sa svojim **Odaberi** i **Izbriši**. Sam redak ima:

- **Odaberi**: odabire sve njih u skici;
- **Izbriši sve**: uklanja sve njih u jednom koraku ({{key:Mod+Z}} ih vraća).

Grupa koja sadrži prekomjerno definiranu relaciju otvara se sama, s nazivom u crvenoj boji. Kote su uvijek navedene jedna po retku, sa svojim vrijednostima.

Kad je geometrija odabrana, popis prikazuje samo **Relacije na odabiru**.
