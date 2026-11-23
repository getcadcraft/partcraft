---
title: Vytvoriť dráhy nástroja a G-kód (Výroba)
summary: Nastavte polotovar a pracovný začiatok, zvoľte nástroje, pridajte operácie čela, kapsy, kontúry, vŕtania a skosenia výberom plôch, dokončite celý model v 3D (rovnobežne, hrebienkovanie), simulujte polotovar voči modelu na zarezania a čas cyklu a stiahnite G-kód z jedného z troch vstavaných postprocesorov alebo z vlastného, ktorý upravíte.
keywords: presný STEP, STEP pre dielňu, pracovné súradnice, odovzdanie CAM, rovnobežné, hrebienkovanie, 3D dokončovanie, dokončovanie, guľová fréza, knižnica nástrojov, upraviť postprocesor, vlastný postprocesor, editor postprocesora, adaptívne, adaptívne vyčistenie, konštantný záber, trochoidné, HSM, vysokorýchlostné obrábanie, výroba, CAM, dráha nástroja, G-kód, NC, CNC, frézka, frézovanie, kapsa, kontúra, profil, čelné frézovanie, vŕtanie, vŕtanie s odsúvaním, G83, G81, G73, skosenie, polotovar, posun nulového bodu, G54, postprocesor, GRBL, LinuxCNC, posuvy a otáčky, simulácia, zarezanie, čas cyklu
from: f8a03be8
---

Pracovný priestor Výroba mení súčiastku na dráhy nástroja a zapisuje ich ako G-kód. Väčšina operácií je **2.5-osové** frézovanie: nástroj stojí zvisle, steny sa režú rovno dolu a dná sú rovné. **3D hrubovanie** a **Zvyšky** vyčisťujú zakrivené súčiastky v 3D ([3D hrubovanie a obrábanie zvyškov](topic:rough-3d)); **Rovnobežnosť** a **Hrebienkové** ich dokončujú ([3D dokončovanie](topic:finish-3d)). Na stroji s otočnými osami môže mať ľubovoľná operácia naklonený nástroj a dve operácie pohybujú otočnými osami počas rezania ([4- a 5-osové obrábanie](topic:multi-axis)). Existujú operácie pre sústruh ([Sústruženie na sústruhu](topic:turning)) a pre dotykovú sondu ([Snímanie sondou](topic:probing)). Pracuje s pomenovanými plochami, ktoré jadro siete dáva súčiastke (pozri [Sieťové jadro](topic:solid-kernels)).

Laboratórne zostavenie: skontrolujte každý program v simulátore vášho riadiaceho systému a najprv ho spustite vo vzduchu nad polotovarom.

## Nastavenie

1. V prepínači pracovného priestoru vyberte **Výroba**, potom {{ui:Nové nastavenie}}.
2. Na karte **Nastavenie** vyberte:
   - **Os nástroja (+Z)**: ktorým smerom nástroj smeruje do súčiastky. Predvolene je svetový +Y (hore v PartCraft); strojová X je potom svetová X a strojová Y je svetové −Z.
   - **Pracovný začiatok (G54)**: roh alebo stred polotovaru, vrch alebo spodok, horný stred modelu alebo počiatok modelu.
   - **Polotovar**: kváder alebo valec, buď model plus prídavky (strany, vrch, spodok), alebo pevná veľkosť.
   - **Materiál** (nastaví začiatočné posuvy a otáčky), **postprocesor** (riadenie), maximálne otáčky vretena stroja, rýchlosť rýchleho posuvu a čas výmeny nástroja, chladiacu kvapalinu a číslo programu.

## Nástroje

Karta **Nástroje** obsahuje knižnicu: ploché, guľové a zaoblené stopkové frézy, vrtáky, skosovacie frézy a čelné frézy, každá s číslom T, priemerom, počtom zubov a dĺžkou zubov (plus polomer rohu, hrot alebo uhol skosenia, kde sa uplatňujú).

Moje nástroje sa dajú uložiť v prehliadači a presunúť medzi počítačmi ako súbor: pozri [Knižnica nástrojov](topic:tool-library).

Otáčky vretena a posuv vychádzajú z materiálu: n = 1000 × rezná rýchlosť / (π × priemer), posuv = n × počet zubov × hrúbka triesky (vrtáky: n × posuv na otáčku). Čísla sú konzervatívne východiskové hodnoty z publikovaných rozsahov, nie sú doladené pre váš stroj; na ich prepísanie zadajte reznú rýchlosť, hrúbku triesky, otáčky alebo posuv od výrobcu nástroja. Keď otáčky prekročia maximum stroja, zostanú na ňom a posuv sa prispôsobí, aby sa udržala hrúbka triesky.

## Pridanie operácií

Každé tlačidlo na paneli nástrojov pridá operáciu a tam, kde potrebuje geometriu, spustí výber: kliknite na plochy alebo hrany v pohľade (kliknutím znova jednu odstránite), potom {{ui:Výber hotový}} alebo {{key:Esc}}.

| Operácia | Výber | Čo robí |
|---|---|---|
| {{ui:Plocha}} | nič | Zig-zag prechody cez celý polotovar, za jeho hranami, až k vrchu modelu |
| {{ui:Kapsa}} | rovnú plochu dna, okrúhly otvor alebo uzavretú reťaz hrán | Vyčistí oblasť ofsetovými prechodmi zvnútra von, pri každom kroku hĺbky; ostrovy (plochy stojace vo vnútri dna) sa nechajú; dno otvorené na všetky strany (nič vyššie vonku) sa vyčistí až k hrane polotovaru |
| {{ui:Adaptívne}} | to isté ako pri {{ui:Kapsa}} | Vyčistí rovnakú oblasť prechodmi, z ktorých každý reže nastavenú šírku (**Záber**, zlomok priemeru), takže fréza nikdy neberie plnú šírku drážky, ani v rohoch; zavŕta sa po špirále a na každej úrovni dokončí steny. Úzke rezy umožňujú hlbší krok a vyšší posuv |
| {{ui:Kontúra}} | rovnú plochu (jej obrys), okrúhlu plochu alebo hrany | Ide po obryse ofsetovanom o polomer nástroja, von alebo dovnútra, s nábehovými a výbehovými oblúkmi a voliteľnými mostíkmi |
| {{ui:Vŕtanie}} | otvory (kliknite na stenu otvoru alebo na jeho okraj) | Vyvŕta každý otvor pevným cyklom: vŕtanie s odsúvaním (G83), vŕtanie (G81) alebo lámanie triesky (G73); alebo zadajte priemer a vyvŕtajte každý otvor tejto veľkosti |
| {{ui:Skosenie}} | obrys alebo hrany plochy | Prejde skosovacou frézou pozdĺž hrany tak, aby odrezala šírku, ktorú nastavíte |
| {{ui:Rovnobežnosť}} | nič (celý model) | 3D dokončovanie v rovnobežných čiarach pod ľubovoľným uhlom, po povrchu guľovou, zaoblenou alebo plochou stopkovou frézou. Pozri [3D dokončovanie](topic:finish-3d) |
| {{ui:Hrebienkové}} | nič (celý model) | 3D dokončovanie v prechodoch nastavenej vzdialenosti od seba po povrchu, takže hrebeň medzi nimi má výšku, ktorú zadáte |

Vyberte operáciu v zozname a zmeňte jej nástroj, výšky (bezpečná výška, odsun, výška posuvu, vrch, spodok), hĺbku kroku, priečny krok, prídavok na dokončenie, dokončovací prechod, vstup (špirála, rampa alebo zavŕtanie), súhlasné frézovanie, mostíky alebo cyklus. {{ui:Hore}} a {{ui:Dole}} zmenia poradie, {{ui:Potlačiť}} ju vynechá, {{ui:Zmazať}} ju odstráni. Všetko je v histórii späť a uložené v súbore súčiastky.

Priečny krok kapsy je najviac polovica priemeru nástroja, takže každý bod jej dna leží v okruhu jedného polomeru nástroja od prechodu. Vnútorné rohy si zachovávajú polomer nástroja.

**Adaptívne vyčistenie** udržiava záber frézy blízko jednej hodnoty. Záber 0.15 priemeru zodpovedá uhlu záberu približne 46°: oblúk hrany frézy v materiáli. Ofsetová kapsa naopak reže plnú šírku pri prvom prechode a v každom vnútornom rohu sa obtáča ďalej. Medzi prechodmi nástroj zostáva v materiáli tam, kde sa pohybuje vo vyrezanom priestore, a inde sa zdvihne a spustí do vyrezaného priestoru. Prechody sa vypočítajú na jemnej mriežke nad oblasťou (bunky asi jednu dvanástinu polomeru nástroja), takže záber môže byť až asi o jednu bunku širší, než je nastavený; steny sú dokončené presne. Veľká otvorená oblasť vytvorí dlhý program s mnohými krátkymi pohybmi.

## Simulácia

Dráhy nástroja sa znovu vygenerujú po každej zmene (aj súčiastky). {{ui:Simulovať}} zobrazí aj polotovar, ktorý zostane po celom programe. Panel zobrazuje:

- **Čas cyklu**: pracovné pohyby s ich posuvom, rýchle pohyby ako priame čiary pri rýchlosti rýchleho posuvu z nastavenia, plus čas výmeny nástroja. Skutočné stroje zrýchľujú, takže trvajú dlhšie.
- **Zarezania**: miesta, kde nástroj išiel viac než 0.02 mm pod povrch súčiastky. Červené značky ich ukazujú v pohľade.
- **Polotovar zostávajúci na súčiastke**.

Polotovar je výškova mapa vrchu (Z-mapa), preto nemôže zobraziť podrezy. Potiahnutím **Prehrávanie** posuniete nástroj pozdĺž programu. V pohľade sú pracovné pohyby plné a rýchle pohyby prerušované, jedna farba na operáciu.

Keď je zapnuté **Zobraziť simulovaný polotovar**, polotovar sa sfarbí voči modelu bunku po bunke: **zelená** tam, kde je na modeli (v rámci 0.02 mm), **červená** tam, kde nástroj zarezal do modelu, a tam, kde na modeli zostáva polotovar, **žltá** pre tenkú vrstvu, **oranžová** pre viac, plynule prechádzajúc do **sivej** nevyrezaného polotovaru pri 1 mm alebo viac. Farby sa znovu vygenerujú pri každej zmene z tej istej výškovej mapy ako čísla v paneli, takže zelená a červená súhlasia s riadkom Zarezania. Skosenie zámerne zareže do modelu a pozdĺž svojej hrany zobrazí červenú.

## Postprocesor G-kódu

Vyberte riadenie pod **Postprocesor** a stlačte {{ui:Stiahnuť G-kód}} (alebo {{ui:Postprocesor}} na paneli nástrojov):

| Riadenie | Súbor | Poznámky |
|---|---|---|
| ISO v štýle Fanuc | .nc | %, číslo O, čísla riadkov, T M6 s G43 H, pevné cykly |
| GRBL | .nc | Bez výmenníka nástrojov a pevných cyklov: výmena nástroja sa zastaví s M0, vŕtanie sa zapisuje ako obyčajné pohyby |
| LinuxCNC | .ngc | T M6 s G43 H, pevné cykly, M2 |
| Sústruh v štýle Fanuc | .nc | Pre programy sústruženia: X ako priemer, posuv na otáčku, G96 pod limitom G50, závitovanie G32 |
| Sústruh LinuxCNC | .ngc | Pre programy sústruženia: priemery G7, G95, G96, závitovanie G33; nezapisuje pohyb na referenciu |
| Vlastný | ľubovoľný | Postprocesor, ktorý ste napísali alebo zmenili: {{ui:Upraviť postprocesor…}}, {{ui:Nový postprocesor…}}, {{ui:Importovať súbor postprocesora…}} |

Každý súbor začína komentármi k programu, polotovaru, posunu nulového bodu a nástrojom. Súradnice sú v milimetroch s 3 desatinnými miestami. {{ui:CSV dráhy nástroja}} a {{ui:JSON dráhy nástroja}} exportujú samotné pohyby.

**Pred rezaním skontrolujte výstup v simulátore vášho stroja a najprv ho spustite vo vzduchu nad polotovarom.** Tri vstavané postprocesory sú východiskové body, ktoré sledujú zdokumentované správanie riadiacich systémov; neboli overené na žiadnom konkrétnom stroji. Postprocesor, ktorý zmeníte, musíte overiť vy. Ako ho napísať: [Postprocesory](topic:post-processors).

## Presný STEP pre dielňu

Pod tlačidlami G-kódu na karte **Operácie** {{ui:Presný STEP (pracovné súradnice)}} stiahne `<part>-work.step`: súčiastku ako presné teleso (skutočné valce pre otvory a výstupky, skutočné kružnice pre ich hrany) s počiatkom v pracovnom začiatku tohto nastavenia a Z pozdĺž osi nástroja. Sú to súradnice, ktoré G-kód používa, takže vlastný CAM program alebo kontrola dielne zarovná model s programom bez jeho presúvania. Súbor obsahuje len súčiastku, nie polotovar ani dráhy nástroja.

{{ui:Export}} › {{ui:STEP AP242 (presné teleso)}} zapíše to isté teleso v pôvodnej polohe súčiastky (Z nahor): pozri [Export na tlač, STEP a DXF](topic:export-files#for-other-cad-programs-step).

## Obmedzenia

- Kapsy, kontúry, vŕtanie a skosenia sú 2.5-osové. Zakrivené súčiastky sa hrubujú a dokončujú v 3D vlastnými operáciami ([3D hrubovanie a obrábanie zvyškov](topic:rough-3d), [3D dokončovanie](topic:finish-3d)). Adaptívne vyčistenie je 2D (ploché dná).
- Naklonené nástroje, 5-osové a 4-osové dokončovanie, sústruženie a snímanie sondou sú k dispozícii, každé s vlastnými obmedzeniami, a **žiadne z nich nebolo spustené na stroji**: pozri [4- a 5-osové obrábanie](topic:multi-axis), [Sústruženie na sústruhu](topic:turning) a [Snímanie sondou](topic:probing).
- Držiaky a stopky sa nekontrolujú na kolízie; upozornenie sa zobrazí, keď je rez hlbší ako dĺžka zubov.
- Posuvy a otáčky sú východiskové hodnoty. Postprocesor je text, ktorý môžete upraviť, ale určuje len, ako sa pohyby zapisujú; nemôže zmeniť dráhu nástroja, pridať osi ani poznať váš stroj ([Postprocesory](topic:post-processors) uvádza, čo nedokáže).

## Odoslanie programu na stroj

V CadCraft Studio na počítači, s strojom nastaveným v Studiu, sa **Odoslať na stroj…** zobrazí vedľa **Stiahnuť G-kód** a nahrá rovnaký program na stroj vo vašej sieti. Nikdy sa nespúšťa z PartCraft: spustite ho na stroji, keď je jasné, že je to bezpečné. V prehliadači sa tlačidlo nezobrazí (webová stránka nedosiahne stroj vo vašej sieti): namiesto toho program stiahnite.
