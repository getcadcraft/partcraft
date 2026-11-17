---
title: Preverite sestav glede kolizij in gibanja
summary: Poiščite prekrivajoče dele s Kolizijo, povlecite katero koli vrednost spoja, da si oglejete gibanje, in premaknite spoj skozi njegovo območje, da najdete, kje se deli zaletijo.
keywords: kolizija, zaznavanje kolizij, interferenca, trk, prekrivanje, ujemanje navojev, neskladje globine navoja, dotikajoče se ploskve, skrij, filter, gibanje, študija gibanja, premik, obseg gibanja, preverjanje
from: 9c98db46
---

Dva preverjanja se izvedeta na delih, kakor so postavljeni: **Kolizija** išče prekrivajoči material takoj, **preverjanje gibanja** pa premakne en spoj skozi njegov obseg in išče prekrivanja na poti.

## Preverjanje kolizij

1. Odprite ali zgradite sestav (glejte [Sestavite sestav s spoji](topic:build-assembly)).
2. Izberite {{ui:Kolizija}}.

Vrstica stanja pove rezultat:

- „Med 3 deli ni kolizije (… ms).“ Nič se ne prekriva.
- „Kolizija: Flange1 in Flange2: Prekrivanje, 2.5 mm³.“ Za vsak par, kakšna vrsta rezultata je in prostornina, ki si jo delita.

Polje **Sestav** levo prikazuje **Kolizije**: „Brez“, „2 rezultata“ (prikazana) ali „Ni preverjeno“. Če nič ni izbrano, desno podokno našteje vsak rezultat pod **Kolizije**.

Rezultat se počisti vsakič, ko se sestav spremeni. Po premiku spoja znova zaženite {{ui:Kolizija}}. Vsak par delov se preveri proti vsakemu drugemu, zato veliki sestavi trajajo dlje.

### Vrste rezultatov

| Vrsta | Pomeni |
|---|---|
| **Prekrivanje** | Deli si delijo prostornino: pravi trk. |
| **Neskladje globine navoja** | Skupna prostornina je znotraj navoja enega dela, vendar onkraj navoja drugega: vijak z navojem, ki sega globlje od svoje izvrtine, ali gladko steblo v izvrtini z navojem. |
| **Ujemanje navojev (kozmetični navoji)** | Skupna prostornina je znotraj navojev obeh delov: vijak v izvrtini z navojem. Kozmetični navoji so narisani v polni velikosti navoja, zato se vedno rahlo prekrivajo. |
| **Dotikajoče se ploskve** | Ni skupne prostornine, vendar so ploskve v stiku (znotraj 0.001 mm). |

Modelirani navoji (glejte [Navoji na gredeh in izvrtinah, narisani ali modelirani](topic:threads)) so prava geometrija: kar si delijo, je **Prekrivanje**.

### Skrijte, kar ne potrebujete videti

Pod **Kolizije** ima **Pokaži** polje za vsako vrsto: odznačite **Ujemanje navojev** in **Dotikajoče se ploskve**, da vidite samo trke, ki so pomembni. **Skrij ta par** poleg rezultata skrije ta par delov, ne glede na vrsto. Skriti rezultati se štejejo („2 rezultata skrita s temi filtri“), **Znova pokaži skrite pare** pa jih vrne. Vrstica stanja šteje tudi skrite rezultate.

Filtri se shranijo skupaj s sestavom, vsaka sprememba pa je en korak {{key:Mod+Z}}. **Preveri gibanje glede kolizij** (spodaj) jih prav tako uporablja. Sestav s filtri se shrani kot različica 4, ki je starejše različice PartCraft ne odprejo, namesto da bi filtre izgubile.

## Spremljajte gibanje

1. V seznamu na levi izberite spoj, ki se premika (katerikoli razen togega).
2. Povlecite drsnik pod eno od njegovih vrednosti, na primer **Kot (°)** ali **Odmik (mm)**. Del se premika, ko vlečete.
3. Spustite. Novi položaj ostane in ga je mogoče razveljaviti z {{key:Mod+Z}}.

Kot ali odmik lahko vnesete tudi v polje in pritisnete {{key:Enter}}.

Spoj na zaprti zanki (členkasti mehanizem) premakne celotno zanko: vrednost, ki jo povlečete, ostane, drugi spoji zanke pa sledijo (glejte [Zaprte zanke](topic:build-assembly#closed-loops-linkages)).

## Preveri gibanje spoja glede kolizij

1. Izberite spoj, ki se premika.
2. Za spoj z več vrednostmi (valjasti, ravninski, kroglični, zatič v utoru) izberite, katero premakniti, v **Preveri premike**.
3. Izberite {{ui:Preveri gibanje glede kolizij}}.

PartCraft premakne to vrednost skozi 25 položajev v 24 enakih korakih, ostale pa ostanejo, kot so: kot od −180° do 180° (nagib od −90° do 90°), dolžina od minus do plus velikosti največjega dela. Poroča:

- „Nikjer ni kolizije za Kot (°) od -180 do 180 (preverjenih 25 položajev).“
- „6 od 25 položajev ima kolizijo, prvič pri Kot (°) 45 (12.4 mm³).“ Prvi položaj, ki ima kolizijo, in prekrivanje tam.

Gumb je za togi spoj, ki se ne premika, siv. Premik preverja samo položaje, ne poti med njimi: tanek del lahko med dvema korakoma prodre skozi drugega.

:::note
Stik in gravitacija nista izdelana. Brez omejitev premik zajame celotno območje. Če določite vrednosti **Omejitve** (glejte [Seznam delov, razstavljeni pogledi in premikanje delov](topic:assembly-bom-explode)), premik zajame samo te, tako da se tečaj, ki se odpre za 90°, preveri na 90°.
:::

## Študija gibanja

**Sestav › Gibanje** poganja vrednost enega spoja od začetka do konca v času, ki ga določite (konstantna hitrost, pospešeno, sinusno ali naprej in nazaj). Na vsakem koraku postavi sestav s spoji in zaprtimi zankami ter poroča, katere kolizije nastanejo in kako blizu se deli približajo. **Dodaj točko** sledi sredini dela ali točki, ki jo kliknete na njem, kartica pa riše njen položaj, hitrost in pospešek, vrednost spoja ter zračnost v odvisnosti od časa. **Shrani CSV** in **Shrani graf** ju zapišeta. Hitrost in pospešek se izračunata iz zabeleženih položajev, zato ostri vrh med koraki izpade nizek: uporabite več korakov.

Po **Zaženi** vrstica **Korak skozi zagon** premakne sestav na poljuben korak (čas, vrednost in ali se deli tam trkajo, so prikazani poleg). Spoj ohrani svojo vrednost, **Nazaj na model** pa vrne sestav. Nastavitve študije se shranijo v datoteki sestava; njene rezultate na novo ustvari **Zaženi**.

## Študija stika

**Sestav › Stik** pokaže, kako sestav prenaša obremenitve tam, kjer se deli pritiskajo drug na drugega. Vsak del prinese svoje podpore, obremenitve in material iz svoje študije **Simulacija** (fiksna ploskev na enem delu, sila na drugem). Tu izberete pare. **Dodaj par**, nato **Izberi stran A** in kliknite ploskve enega dela, **Izberi stran B** in kliknite ploskve drugega dela (klik na izbrano ploskev jo odstrani; {{key:Esc}} ali **Končano** konča izbiranje). Par je **Brez trenja** (deli pritiskajo, vendar drsijo) ali **Lepljen** (ostanejo skupaj). Faktor togosti določa, kako močno se stik upira vdiranju (20 je dober začetek, 1000 za togi jekleni sklad).

**Reši** izvede obremenitev v korakih in prikaže kontaktno silo, največje vdiranje, največji premik in največjo napetost. Del brez para je izpuščen, kartica to pove. Kontakt brez trenja ne drži dela vstranski smeri: vsakemu delu dajte podporo v njegovi študiji Simulacija ali ga lepite, sicer se koraki morda ne ustalijo. Pari in nastavitve se shranijo v datoteki sestava.

**Izvozi CalculiX deck** zapiše isti model kot vhodno datoteko CalculiX (.inp). CalculiX je ločen program, ki ga namestite in zaženete sami. **Preberi rezultate CalculiX (.frd)** nato prebere premike nazaj na mrežo tega sestava in zavrne datoteko, narejeno za drugo mrežo. Reševalec tukaj zmore plastične deformacije, vendar ni eksplicitna dinamika, nič tukaj pa ni certificirana analiza: naj vse, kar je pomembno, preveri inženir.
