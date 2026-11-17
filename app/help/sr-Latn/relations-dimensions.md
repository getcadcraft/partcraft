---
title: Potpuno odredi skicu vezama i kotama
summary: Dodaj veze iz desnog panela i kote alatom Kota, pročitaj boje nedovoljno, potpuno i previše određene skice i popravi skicu koja je previše određena.
keywords: veze, ograničenja, kote, pametna kota, potpuno određeno, nedovoljno određeno, previše određeno, stepeni slobode, poklapanje, horizontalno, vertikalno, paralelno, normalno, tangentno, jednako, koncentrično, središte, fiksiraj, sukob, suvišno
from: e76d047a
---

Skica je **potpuno određena** kad su svaka tačka i svaka mera fiksirane vezama i kotama. Potpuno određena skica se menja samo kad promeniš broj, pa se deo predvidljivo ponaša kad ga kasnije menjaš. PartCraft te ne primorava da potpuno odrediš skicu, ali uvek pokazuje koliko si blizu.

## Pročitaj stanje skice

Stanje se prikazuje na tri mesta: oznaka u gornjem levom uglu prikaza, poruka na vrhu desnog panela i zastavica u istoriji.

| Stanje | Oznaka | Boja geometrije | Šta znači |
|---|---|---|---|
| Nedovoljno određena | „Nedovoljno određena · 3 stepena slobode“ | Plava | Neka geometrija još može da se pomera. Prevuci plavu geometriju da vidiš kuda |
| Potpuno određena | „Potpuno određena“ | Tamna (crna na Paper, svetla na Model) | Svaka tačka i mera je fiksirana |
| Previše određena | „Previše određena“ | Crvena na uključenim vezama | Neke veze se međusobno protive, ili je neka već podrazumevana drugima |

Konstrukciona geometrija je siva i isprekidana, bez obzira na stanje. Izabrane stavke su narandžaste. „Stepen slobode“ je jedan način na koji nešto još može da se pomeri: slobodna tačka ima dva (levo-desno i gore-dole), slobodan krug ima tri (centar i poluprečnik).

Legenda ispod poruke u desnom panelu ponavlja boje.

## Dodaj kotu

1. Pritisni {{key:D}} ili odaberi {{ui:Kota}}.
2. Klikni šta da izmeriš:
   - **jedna linija**: njena dužina;
   - **jedan krug**: njegov prečnik; **jedan luk**: njegov poluprečnik;
   - **dve tačke** (krajnja tačka, centar, slobodna tačka ili koordinatni početak): rastojanje između njih;
   - **tačka i linija**: rastojanje od tačke do linije;
   - **dve paralelne linije**: rastojanje između njih; **dve linije pod uglom**: ugao između njih.
3. Posle jedne stavke, statusna traka kaže „Klikni drugu stavku ili klikni mesto na koje ide kota.“ Klikni drugu stavku ili klikni u prazan prostor gde želiš broj.
4. Otvara se polje za broj sa trenutnom vrednošću. Upiši meru i pritisni {{key:Enter}}. {{key:Esc}} zadržava izmerenu vrednost.

**Mesto na koje postaviš broj određuje vrstu** za kosu liniju ili dve tačke: postavi ga iznad ili ispod za horizontalno rastojanje, levo ili desno za vertikalno rastojanje, a na drugom mestu za pravo (poravnato) rastojanje.

Polje prihvata obične brojeve u milimetrima ili stepenima, na primer `25`, `12.5` ili `1e3`. Početni `⌀`, `Ø` ili `R`, ili završni `mm` ili `°`, se zanemaruju. Uglovi su od 0 do 180 stepeni. Računske operacije poput `20+5` nisu prihvaćene; da bi povezao meru sa promenljivom ili formulom, počni je znakom `=`.

Da kasnije promeniš kotu, dvaput klikni njen broj u skici ili odaberi **Uredi** pored nje na spisku u desnom panelu.

:::tip
Možeš i prvo da izabereš geometriju (alat Izaberi) i odabereš dugme kote u desnom panelu: {{ui:Rastojanje}}, {{ui:Horizontalno rastojanje}}, {{ui:Vertikalno rastojanje}}, {{ui:Poluprečnik}}, {{ui:Prečnik}} ili {{ui:Ugao}}. Prikazuju se samo oni koji odgovaraju izboru. Ovo je način da krugu daš poluprečnik umesto prečnika.
:::

## Dodaj vezu

Veze se dodaju iz desnog panela, a ne alatom.

1. Pritisni {{key:S}} za Izaberi.
2. Klikni jednu stavku, pa {{key:Shift}}+klik na drugu ako veza traži dve. Koordinatni početak se takođe može izabrati.
3. Desni panel kaže „Izabrano: linija l3, tačka p1“ i prikazuje dugme za svaku vezu koja odgovara, na primer {{ui:∥ Paralelno}} ili {{ui:• Poklapanje}}.
4. Odaberi dugme. Skica se odmah rešava.

Ako nijedna veza ne odgovara, panel kaže „Nijedna veza ne odgovara ovom izboru. Izaberi jednu ili dve stavke (Shift+klik dodaje).“

Potpun spisak veza, šta svaka traži i šta radi, nalazi se u [Veze i kote skice](topic:sketch-relations).

Veze se u skici prikazuju kao mali simboli uz geometriju (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Tačke poklapanja su skrivene osim ako geometrija nije izabrana ili je veza u problemu. Klikni simbol da izabereš vezu.

## Primer: profil L-nosača

1. Skiciraj na **Prednja ravan**. Alatom Linija počni u koordinatnom početku i klikni šest uglova slova L, završivši ponovo u koordinatnom početku. Lanac se sam završava kad klikneš prvu tačku.
2. Linije nacrtane blizu horizontalne ili vertikalne već imaju veze H i V, osim poslednje: linija koja se završava na postojećoj tački ne dobija automatsku vezu. Pritisni {{key:S}}, klikni tu poslednju liniju i odaberi {{ui:V Vertikalno}} u desnom panelu. Oznaka kaže „Nedovoljno određena · 4 stepena slobode“.
3. Pritisni {{key:D}}. Klikni donju liniju, klikni ispod nje, upiši `80`, {{key:Enter}}.
4. Klikni levu liniju, klikni levo od nje, upiši `60`, {{key:Enter}}.
5. Kotiraj gornju kratku liniju `20` i unutrašnju vertikalnu liniju `45` na isti način.
6. Oznaka sada kaže **Potpuno određena**, a ceo L postaje tamno obojen.

## Popravi previše određenu skicu

Kad nova veza ili kota protivreči drugima, PartCraft ništa ne pomera. Geometrija ostaje tačno kakva je bila, uključene veze postaju crvene, a statusna traka ih imenuje:

- „Previše određeno: Horizontalno, Rastojanje 40 ne mogu svi biti ispunjeni. Opozovi ili obriši jednu od njih.“ Veze su u sukobu.
- „Previše određeno: Paralelno je već podrazumevano. Obriši je.“ Veza ne dodaje ništa: ostale je već nameću. (Na primer, stranice pravougaonika su već paralelne.)

Da popraviš:

1. Pritisni {{key:Mod+Z}} da opozoveš poslednju promenu, ili
2. Nađi crvenu stavku na spisku **Veze i kote** u desnom panelu (grupa koja je sadrži je otvorena i crvena) i odaberi **Obriši** pored nje. Možeš i da klikneš njen simbol ili broj u skici i pritisneš {{key:Delete}}.

:::note
U ovoj verziji nema „upravljajućih“ (referentnih) kota. Kota koja bi samo prijavljivala meru koju već fiksiraju ostale veze tretira se kao previše određena. Umesto toga čitaj mere u panelu: izaberi liniju i pogledaj dugmad Kota, ili proveri podatke o delu posle izvlačenja.
:::

Previše određena skica sa stvarnim sukobom čini da element koji je koristi ne uspe („Previše određeno: 1 veza ne može biti ispunjena.“), a istorija je obeležava **⚠ greška**. Skica koja je samo suvišna se i dalje gradi, uz upozorenje ⚠.

## Prevlačenjem nađi šta je slobodno

U alatu Izaberi prevuci bilo koju plavu tačku ili liniju. Rešavač je pomera što je manje moguće, zadržavajući svaku vezu. Ako bi prevlačenje prekinulo vezu, geometrija se vraća na mesto. Ovo je najbrži način da vidiš koja kota još nedostaje.

## Spisak veza

Kad ništa nije izabrano, desni panel prikazuje **Veze i kote**. Svaki red ima:

- **Uredi** (samo kote): otvara polje za broj;
- **Izaberi**: bira je u skici;
- **Obriši**: uklanja je.

Veze iste vrste koje se pojavljuju više puta dele jedan red, na primer „Poklapanje × 5“ za pravougaonik vezan za koordinatni početak. Klikni red da ga otvoriš: svaka veza je navedena po tome šta povezuje („tačka p2, tačka p4“) sa sopstvenim **Izaberi** i **Obriši**. Sam red ima:

- **Izaberi**: bira sve njih u skici;
- **Izbriši sve**: uklanja sve njih u jednom koraku ({{key:Mod+Z}} ih vraća).

Grupa koja sadrži previše određenu vezu otvara se sama, a njen naziv je crven. Kote su uvek navedene po jedna u redu, sa svojim vrednostima.

Kad je geometrija izabrana, spisak prikazuje samo **Veze na izboru**.
