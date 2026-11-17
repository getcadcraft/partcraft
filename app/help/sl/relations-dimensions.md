---
title: Popolna določitev skice z relacijami in kotami
summary: Dodajte relacije z desnega podokna in kote z orodjem Kota, preberite barve premalo, popolnoma in preveč določene skice ter popravite preveč določeno skico.
keywords: relacije, omejitve, kote, pametna kota, popolnoma določena, premalo določena, preveč določena, prostostne stopnje, sovpadanje, vodoravna, navpična, vzporedna, pravokotna, tangenta, enaka, koncentrična, sredina, fiksiraj, konflikt, odvečna
from: e76d047a
---

Skica je **popolnoma določena**, ko so vsaka točka in vsaka velikost določene z relacijami in kotami. Popolnoma določena skica se spremeni samo, ko spremenite število, zato se del pozneje, ko ga urejate, obnaša predvidljivo. PartCraft vas ne prisili, da skico popolnoma določite, vendar vedno kaže, kako blizu ste.

## Branje stanja skice

Stanje je prikazano na treh mestih: značka v zgornjem levem kotu pogleda, sporočilo na vrhu desnega podokna in zastavica v zgodovini.

| Stanje | Značka | Barva geometrije | Kaj pomeni |
|---|---|---|---|
| Premalo določena | „Premalo določena · 3 prostostne stopnje“ | Modra | Nekatera geometrija se še lahko premakne. Povlecite modro geometrijo in poglejte, v katero smer se premakne |
| Popolnoma določena | „Popolnoma določena“ | Črna (na zavihku Papir), svetla (na zavihku Model) | Vsaka točka in velikost je določena |
| Preveč določena | „Preveč določena“ | Rdeča na vključenih relacijah | Nekatere relacije si nasprotujejo ali pa jo že določajo druge |

Konstrukcijska geometrija je ne glede na stanje siva in črtkana. Izbrani elementi so oranžni. „Prostostna stopnja“ je ena smer, v katero se nekaj še lahko premakne: prosta točka ima dve (levo–desno in gor–dol), prost krog ima tri (središče in njegov polmer).

Legenda pod sporočilom v desnem podoknu ponovi barve.

## Dodajanje kote

1. Pritisnite {{key:D}} ali izberite {{ui:Kota}}.
2. Kliknite, kaj želite izmeriti:
   - **ena črta**: njena dolžina;
   - **en krog**: njegov premer; **en lok**: njegov polmer;
   - **dve točki** (krajna točka, središče, prosta točka ali izhodišče): razdalja med njima;
   - **točka in črta**: razdalja od točke do črte;
   - **dve vzporedni črti**: razdalja med njima; **dve črti pod kotom**: kot med njima.
3. Po enem elementu vrstica stanja pravi „Kliknite drug element ali mesto, kjer naj bo kota.“ Kliknite drug element ali kliknite v prazen prostor, kjer želite število.
4. Odpre se polje za število s trenutno vrednostjo. Vpišite velikost in pritisnite {{key:Enter}}. {{key:Esc}} ohrani izmerjeno vrednost.

**Mesto, kamor postavite število, določi vrsto** pri poševni črti ali dveh točkah: postavite ga nad ali pod, da dobite vodoravno razdaljo, levo ali desno, da dobite navpično razdaljo, in drugje za pravo (poravnano) razdaljo.

Polje sprejme navadna števila v milimetrih ali stopinjah, na primer `25`, `12.5` ali `1e3`. Vodilni `⌀`, `Ø` ali `R` ali končni `mm` ali `°` se prezrejo. Koti so od 0 do 180 stopinj. Računanje, kot je `20+5`, ni sprejeto; če želite velikost povezati s spremenljivko ali formulo, začnite z `=`.

Koto pozneje spremenite tako, da dvokliknete njeno število v skici ali izberete **Uredi** poleg nje v seznamu v desnem podoknu.

:::tip
Najprej lahko izberete geometrijo (orodje Izberi) in v desnem podoknu izberete gumb za koto: {{ui:Razdalja}}, {{ui:Vodoravna razdalja}}, {{ui:Navpična razdalja}}, {{ui:Polmer}}, {{ui:Premer}} ali {{ui:Kot}}. Prikazani so samo tisti, ki ustrezajo izboru. Tako krogu določite polmer namesto premera.
:::

## Dodajanje relacije

Relacije se dodajajo z desnega podokna, ne z orodjem.

1. Pritisnite {{key:S}} za Izberi.
2. Kliknite en element, nato {{key:Shift}}+klik na drug, če relacija potrebuje dva. Izbrati je mogoče tudi izhodišče.
3. V podoknu piše „Izbrano: črta l3, točka p1“ in prikaže gumb za vsako ustrezno relacijo, na primer {{ui:∥ Vzporednost}} ali {{ui:• Sovpadanje}}.
4. Izberite gumb. Skica se takoj reši.

Če nobena relacija ne ustreza, podokno pravi „Nobena relacija ne ustreza temu izboru. Izberite en ali dva elementa (Shift+klik doda).“

Celoten seznam relacij, kaj vsaka potrebuje in kaj naredi, je v [Relacije in kote skice](topic:sketch-relations).

Relacije so v skici prikazane kot majhni simboli ob geometriji (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Pike sovpadanja so skrite, razen če je geometrija izbrana ali je relacija v težavah. Kliknite simbol, da izberete relacijo.

## Primer: profil L-kotnika

1. Skicirajte na **Sprednjo ravnino**. Z orodjem Črta začnite v izhodišču, kliknite šest vogalov črke L in končajte spet v izhodišču. Veriga se konča sama, ko kliknete prvo točko.
2. Črte, narisane blizu vodoravne ali navpične, že imajo relaciji H in V, razen zadnje: črta, ki se konča v obstoječi točki, samodejne relacije ne dobi. Pritisnite {{key:S}}, kliknite to zadnjo črto in v desnem podoknu izberite {{ui:V Navpična}}. Značka pravi „Premalo določena · 4 prostostne stopnje“.
3. Pritisnite {{key:D}}. Kliknite spodnjo črto, kliknite pod njo, vpišite `80` in pritisnite {{key:Enter}}.
4. Kliknite levo črto, kliknite levo od nje, vpišite `60` in pritisnite {{key:Enter}}.
5. Zgornjo kratko črto enako kotirajte z `20`, notranjo navpično črto pa z `45`.
6. Značka zdaj pravi **Popolnoma določena**, in celoten L postane črn.

## Popravljanje preveč določene skice

Ko nova relacija ali kota nasprotuje drugim, PartCraft ničesar ne premakne. Geometrija ostane točno taka, kot je bila, vključene relacije postanejo rdeče, vrstica stanja pa jih poimenuje:

- „Preveč določeno: Vodoravno, Razdalja 40 ni mogoče izpolniti hkrati. Razveljavite ali izbrišite eno od njiju.“ Relacije si nasprotujejo.
- „Preveč določeno: Vzporednost že izhaja iz drugih. Izbrišite jo.“ Relacija ne doda ničesar: druge jo že določajo. (Na primer, stranice pravokotnika so že vzporedne.)

Popravite tako:

1. Pritisnite {{key:Mod+Z}}, da razveljavite zadnjo spremembo, ali
2. v desnem podoknu poiščite rdeč element v seznamu **Relacije in kote** (skupina, ki jo vsebuje, je odprta in rdeča) in zraven njega izberite **Izbriši**. Lahko tudi kliknete njen simbol ali število v skici in pritisnete {{key:Delete}}.

:::note
V tej različici ni „vodenih“ (referenčnih) kot. Kota, ki bi samo poročala velikost, ki jo že določajo druge relacije, je obravnavana kot preveč določena. Velikosti raje preberite v podoknu: izberite črto in poglejte gumbe za kote ali preverite podatke o delu po iztisnitvi.
:::

Preveč določena skica z resničnim nasprotjem povzroči, da značilka, ki jo uporablja, odpove („Preveč določeno: 1 relacija ni mogoče izpolniti hkrati.“), zgodovina pa jo označi kot **⚠ napaka**. Skica, ki je samo odvečna, se še vedno izdela, z opozorilom ⚠.

## Vlečenje za iskanje prostih elementov

V orodju Izberi povlecite katerokoli modro točko ali črto. Reševalnik jo premakne čim manj, ob ohranjanju vseh relacij. Če bi vlečenje prekinilo relacijo, se geometrija vrne nazaj. To je najhitrejši način, da vidite, katera kota še manjka.

## Seznam relacij

Kadar nič ni izbrano, desno podokno izpiše **Relacije in kote**. Vsaka vrstica ima:

- **Uredi** (samo kote): odpre polje za število;
- **Izberi**: izbere jo v skici;
- **Izbriši**: jo odstrani.

Relacije ene vrste, ki se pojavijo večkrat, delijo eno vrstico, na primer „Sovpadanje × 5“ za pravokotnik, vezan na izhodišče. Kliknite vrstico, da jo odprete: vsaka relacija je navedena po tem, kar veže („točka p2, točka p4“), s svojima gumboma **Izberi** in **Izbriši**. Sama vrstica ima:

- **Izberi**: izbere vse v skici;
- **Izbriši vse**: odstrani vse naenkrat ({{key:Mod+Z}} jih vrne).

Skupina, ki vsebuje preveč določeno relacijo, se odpre sama, z imenom v rdeči barvi. Kote so vedno navedene po eno v vrstici, z vrednostmi.

Ko je geometrija izbrana, seznam prikaže samo **Relacije na izboru**.
