---
title: Vytvorenie dráh nástroja a G-kódu (Výroba)
summary: Nastavte polotovar a nulu práce, vyberte nástroje, pridajte operácie plochy, kapsy, kontúry, vŕtania a skosenia výberom plôch, dokončite celý model v 3D (rovnobežné, hrebienkové), simulujte polotovar voči modelu kvôli zárezom a času cyklu a stiahnite G-kód z jedného z troch vstavaných postprocesorov alebo z vlastného.
keywords: presný STEP, STEP pre dielňu, pracovné súradnice, odovzdanie CAM, rovnobežné, hrebienkové, 3D dokončovanie, dokončovanie, guľová fréza, knižnica nástrojov, upraviť postprocesor, vlastný postprocesor, editor postprocesora, adaptívne, adaptívne odoberanie, konštantný záber, trochoidálne, HSM, vysokorýchlostné obrábanie, výroba, CAM, dráha nástroja, G-kód, NC, CNC, frézovanie, kapsa, kontúra, profil, čelné frézovanie, vŕtanie, peck, G83, G81, G73, skosenie, polotovar, posun nulovania, G54, postprocesor, GRBL, LinuxCNC, posuvy a otáčky, simulácia, zárez, čas cyklu
from: beeb29aa
---

Pracovný priestor Výroba mení súčiastku na dráhy nástroja pre 3-osovú frézku a zapisuje ich ako G-kód. Väčšina operácií je **2.5-osová**: nástroj zostáva zvislý, steny sa režú rovno nadol a dná sú rovné. **Rovnobežné** a **Hrebienkové** dokončujú zakrivené plochy v 3D (pozri [3D dokončovanie](topic:finish-3d)); nástroj stále zostáva zvislý (tri osi, bez naklápania). Pracuje s pomenovanými plochami, ktoré jadro sietí dáva súčiastke (pozri [Jadro sietí](topic:solid-kernels)).

Laboratórna verzia: každý program overte v simulátore vášho riadiaceho systému a najprv ho spustite vo vzduchu nad polotovarom.

## Nastavenie

1. Zvoľte **Výroba** v prepínači pracovných priestorov, potom {{ui:Nové nastavenie}}.
2. Na karte **Nastavenie** zvoľte:
   - **Os nástroja (+Z)**: ktorým smerom nástroj smeruje do súčiastky. Predvolene je to svetové +Y (hore v PartCraft); strojové X je potom svetové X a strojové Y je svetové −Z.
   - **Nula práce (G54)**: roh alebo stred polotovaru, vrch alebo spodok, horný stred modelu, alebo počiatok modelu.
   - **Polotovar**: škatuľa alebo valec, buď model plus odsadenia (strany, vrch, spodok), alebo pevný rozmer.
   - **Materiál** (nastaví začiatočné posuvy a otáčky), **postprocesor** (riadiaca jednotka), maximálne otáčky vretena stroja, rýchloposuv a čas výmeny nástroja, chladenie a číslo programu.

## Nástroje

Karta **Nástroje** obsahuje knižnicu: stopkové frézy plochej, guľovej a s polomerom rohu, vrtáky, skosovacie frézy a čelné frézy, každá s číslom T, priemerom, počtom zubov a dĺžkou zubov (plus polomer rohu, uhol hrotu alebo skosenia, kde sa uplatňujú).

Moje nástroje sa dajú uložiť v prehliadači a presunúť medzi počítačmi ako súbor: pozri [Knižnica nástrojov](topic:tool-library).

Otáčky vretena a posuv sa berú z materiálu: n = 1000 × rezná rýchlosť / (π × priemer), posuv = n × počet zubov × posuv na zub (vrtáky: n × posuv na otáčku). Čísla sú konzervatívne začiatočné hodnoty z publikovaných rozsahov, nie vyladené pre váš stroj; ak máte reznú rýchlosť, posuv na zub, otáčky alebo posuv od výrobcu nástroja, zadajte ich a prepíšu ich. Keď otáčky prekročia maximum stroja, drží sa na ňom a posuv ju nasleduje, aby zostal posuv na zub.

## Pridanie operácií

Každé tlačidlo na paneli nástrojov pridá operáciu a tam, kde potrebuje geometriu, začne výber: kliknite na plochy alebo hrany v zobrazení (kliknutím znova jednu odoberiete), potom {{ui:Výber hotový}} alebo {{key:Esc}}.

| Operácia | Výber | Čo robí |
|---|---|---|
| {{ui:Plocha}} | nič | Zig-zag priechody cez celý polotovar, za jeho hranami, dole k hornej časti modelu |
| {{ui:Kapsa}} | rovná plocha dna, okrúhla diera alebo uzavretá reťaz hrán | Vyčistí oblasť odsadenými priechodmi zvnútra von, pri každom kroku nadol; ostrovy (plochy vystupujúce vnútri dna) zostanú; dno otvorené dookola (nič vyššie vonku) sa vyčistí až k hrane polotovaru |
| {{ui:Adaptívne}} | to isté ako Kapsa | Vyčistí rovnakú oblasť priechodmi, z ktorých každý reže nastavenú šírku (**Záber**, zlomok priemeru), takže rez nikdy nerobí plnú šírku drážky, ani v rohoch; vstupuje po špirále a dokončí steny na každej úrovni. Úzke rezy dovoľujú hlbší krok a vyšší posuv |
| {{ui:Kontúra}} | rovná plocha (jej obrys), okrúhla plocha alebo hrany | Sleduje obrys odsadený o polomer nástroja, vonku alebo vnútri, s oblúkmi nábehu a výjazdu a voliteľnými priduškami |
| {{ui:Vŕtanie}} | diery (kliknite na stenu diery alebo na jej okraj) | Vyvŕta každú dieru pevným cyklom: peck (G83), vŕtanie (G81) alebo lámanie triesky (G73); alebo zadajte priemer, aby sa vyvŕtali všetky diery tej veľkosti |
| {{ui:Skosenie}} | obrys plochy alebo hrany | Vedie skosovaciu frézu po hrane tak, aby rezala šírku, ktorú nastavíte |
| {{ui:Rovnobežnosť}} | nič (celý model) | 3D dokončovanie v rovnobežných čiarach pod ľubovoľným uhlom, sleduje povrch guľovou, s polomerom rohu alebo plochou frézou. Pozri [3D dokončovanie](topic:finish-3d) |
| {{ui:Hrebienkové}} | nič (celý model) | 3D dokončovanie v priechodoch vzdialených nastavenú vzdialenosť nad povrchom, takže hrebeň medzi nimi má výšku, ktorú žiadate |

Vyberte operáciu v zozname a zmeňte jej nástroj, výšky (bezpečná, odvod, výška posuvu, vrch, spodok), krok nadol, krok bočného rezu, prídavok na obrobenie, dokončovací priechod, vstup (špirála, rampa alebo zapichnutie), súhlasné frézovanie, priduchy alebo cyklus. {{ui:Hore}} a {{ui:Dole}} zmenia poradie, {{ui:Potlačiť}} ju vynechá, {{ui:Zmazať}} ju odstráni. Všetko je v histórii späť a uložené v súbore súčiastky.

Krok bočného rezu kapsy je najviac polovica priemeru nástroja, takže každý bod jej dna leží do jedného polomeru nástroja od priechodu. Vnútorné rohy si zachovávajú polomer nástroja.

**Adaptívne odoberanie** udržiava záber nástroja blízko jednej hodnoty. Záber 0.15 priemeru je uhol záberu asi 46°: oblúk hrany nástroja v materiáli. Odsadená kapsa naopak reže na prvom priechode plnú šírku a v každom vnútornom rohu sa obtáča ďalej. Medzi priechodmi nástroj zostáva dole tam, kde sa pohybuje cez vyrezaný vzduch, a inde sa zdvihne a spustí vo vyrezanom vzduchu. Priechody sa počítajú na jemnej mriežke cez oblasť (bunky asi jedna dvanástina polomeru nástroja), takže záber môže byť o bunku širší než nastavený; steny sa dokončujú presne. Veľká otvorená oblasť dá dlhý program s mnohými krátkymi pohybmi.

## Simulácia

Dráhy sa znovu vytvárajú po každej zmene (aj súčiastky). {{ui:Simulovať}} tiež ukáže polotovar, ktorý zostane po celom programe. Panel zobrazuje:

- **Čas cyklu**: pohyby posuvu pri svojom posuve, rýchloposuvy ako priame čiary pri rýchloposuve z nastavenia a čas výmeny nástroja. Skutočné stroje zrýchľujú, takže trvajú dlhšie.
- **Zárezy**: miesta, kde sa nástroj dostal viac ako 0.02 mm pod povrch súčiastky. Červené značky ich ukazujú v zobrazení.
- **Zostávajúci polotovar na súčiastke**.

Polotovar je výšková mapa vrchu (Z-mapa), takže nemôže ukázať podrezania. Ťahajte **Prehrávanie**, aby sa nástroj pohyboval pozdĺž programu. V zobrazení sú pohyby posuvu plné a rýchloposuvy čiarkované, jedna farba na operáciu.

Keď je zapnuté **Zobraziť simulovaný polotovar**, polotovar sa farbí podľa modelu, bunka po bunke: **zelená** tam, kde je na modeli (do 0.02 mm), **červená** tam, kde nástroj zarezal do modelu, a tam, kde na modeli zostáva polotovar, **žltá** pre tenkú vrstvu, **oranžová** pre viac, a prechádza do **sivej** nezrezaného polotovaru pri 1 mm alebo viac. Farby sa počítajú znova pri každej zmene z tej istej výškovej mapy ako čísla v paneli, takže zelená a červená súhlasia s riadkom Zárezy. Skosenie reže do modelu úmyselne a pozdĺž svojej hrany ukazuje červenú.

## Postprocesor G-kódu

Vyberte riadiacu jednotku pod **Postprocesor** a stlačte {{ui:Stiahnuť G-kód}} (alebo {{ui:Postprocesor}} na paneli nástrojov):

| Riadiaca jednotka | Súbor | Poznámky |
|---|---|---|
| Fanuc-style ISO | .nc | %, číslo O, čísla riadkov, T M6 s G43 H, pevné cykly |
| GRBL | .nc | Žiadna výmena nástrojov ani pevné cykly: výmena nástroja pozastaví s M0, vŕtanie sa zapíše ako obyčajné pohyby |
| LinuxCNC | .ngc | T M6 s G43 H, pevné cykly, M2 |
| Váš vlastný | ľubovoľný | Postprocesor, ktorý ste napísali alebo zmenili: {{ui:Upraviť postprocesor…}}, {{ui:Nový postprocesor…}}, {{ui:Importovať súbor postprocesora…}} |

Každý súbor začína komentármi o programe, polotovare, posune nuly a nástrojoch. Súradnice sú v milimetroch s 3 desatinnými miestami. {{ui:CSV dráhy nástroja}} a {{ui:JSON dráhy nástroja}} exportujú samotné pohyby.

**Výstup skontrolujte v simulátore vášho stroja pred obrábaním a najprv ho spustite vo vzduchu nad polotovarom.** Tri vstavané postprocesory sú východiská, ktoré sledujú zdokumentované správanie riadiacich jednotiek; neboli overené na žiadnom konkrétnom stroji. Postprocesor, ktorý zmeníte, musíte overiť sami. Ako ho napísať: [Postprocesory](topic:post-processors).

## Presný STEP pre dielňu

Pod tlačidlami G-kódu na karte **Operácie** {{ui:Presný STEP (pracovné súradnice)}} stiahne `<part>-work.step`: súčiastku ako presné teleso (skutočné valce pre diery a výstupky, skutočné kružnice pre ich hrany) s počiatkom v nulovom bode práce tohto nastavenia a osou Z pozdĺž osi nástroja. Sú to súradnice, ktoré G-kód používa, takže vlastný CAM program dielne alebo kontrola zarovná model s programom bez jeho posúvania. Súbor obsahuje len súčiastku, nie polotovar ani dráhy nástroja.

{{ui:Export}} › {{ui:STEP AP242 (presné teleso)}} zapíše to isté teleso na jeho vlastnej pozícii (Z hore): pozri [Export na tlač, STEP a DXF](topic:export-files#for-other-cad-programs-step).

## Limity

- Kapsy, kontúry, vŕtania a skosenia sú 2.5-osové. Zakrivené plochy sa dajú dokončiť v 3D ([rovnobežné a hrebienkové](topic:finish-3d)), ale nie hrubo obrábať v 3D (kužeľ zostane ako schody, kým ho nedokončíte), a nie je tu obrábanie zvyškov. Adaptívne odoberanie je 2D (rovné dná).
- Len tri osi: žiadne naklápanie, žiadne sústruženie, žiadna kontrola.
- Držiaky a stopky sa nekontrolujú na kolízie; varovanie sa objaví, keď je rez hlbší než dĺžka zubov.
- Posuvy a otáčky sú začiatočné hodnoty. Postprocesor je text, ktorý môžete upraviť, ale rozhoduje len o tom, ako sa pohyby zapíšu; nemôže zmeniť dráhu nástroja, pridať osi ani poznať váš stroj ([Postprocesory](topic:post-processors) uvádza, čo nedokáže).

## Odoslanie programu na stroj

V CadCraft Studio na počítači, s strojom nastaveným v Studiu, sa vedľa {{ui:Stiahnuť G-kód}} objaví **Odoslať na stroj…** a nahrá ten istý program na stroj vo vašej sieti. Nikdy sa nespúšťa z PartCraft: spustite ho na stroji, keď je jasné, že je to v poriadku. V prehliadači sa tlačidlo nezobrazuje (webová stránka nedosiahne stroj vo vašej sieti): namiesto toho stiahnite program.
