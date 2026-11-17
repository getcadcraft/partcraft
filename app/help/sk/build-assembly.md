---
title: Vytvorenie zostavy s kĺbmi
summary: Začnite zostavu zo súčiastky, vkladajte kópie a ďalšie súbory súčiastok, spájajte ich tuhými, rotačnými, posuvnými, valcovými, rovinnými, guľovými a kolíkovými v drážke kĺbmi na rovných plochách, stredujte kĺby na osiach, upravujte súčiastku priamo v zostave a uložte zostavu.
keywords: zostava, väzba, väzby, kĺb, slučka, uzavretá slučka, mechanizmus, štvorkĺb, prevodový mechanizmus, tuhý, rotačný, posuvný, valcový, rovinný, guľový, guľový kĺb, sférický, kolík v drážke, vložiť komponent, pevná súčiastka, pevný, sústredný, splynutie, upraviť súčiastku, v kontexte, partcraft-asm
from: a53bbfef
---

Zostava spája súčiastky dokopy. V PartCraft **kĺby** umiestňujú súčiastky: každý kĺb sedí na rovnej ploche každej z dvoch súčiastok a prikladá ich plochami k sebe. Rotačný kĺb umožňuje jednej súčiastke otáčanie, posuvný kĺb jej umožňuje posúvanie a tuhý kĺb ju drží.

## Začatie zostavy

1. Vytvorte súčiastku s telesom (prázdna súčiastka sa nemôže vložiť do zostavy: "Najprv vytvorte teleso, potom ho vložte do zostavy.").
2. Na paneli nástrojov vyberte {{ui:Zostava}}.

Stavový riadok zobrazí "Zostava bola začatá s Part1 ako pevnou súčiastkou. Vložte ďalšie súčiastky (Pridať kópiu, Vložiť alebo Upraviť › Duplikovať) a potom ich spojte kĺbmi." Ľavý panel teraz zobrazuje **Súčiastky** a **Kĺby** a panel nástrojov zobrazuje nástroje zostavy. Nástroje náčrtu a prvkov sa skryjú.

Prvá súčiastka je **pevná**: nikdy sa nehýbe a všetko ostatné sa umiestňuje vzhľadom na ňu.

## Vkladanie súčiastok

- {{ui:Pridať kópiu}} vloží ďalšiu kópiu vybranej súčiastky (alebo poslednej). Kópie zdieľajú jednu súčiastku: upravte ju a zmení sa každá kópia.
- {{ui:Duplikovať}} ({{key:Mod+D}}) v skupine Upraviť robí to isté pre vybranú súčiastku. {{key:Mod+C}} a {{key:Mod+V}} skopírujú súčiastku a prilepia ju vedľa ostatných, v tejto zostave alebo v inej; {{key:Mod+Shift+V}} ju prilepí na rovnaké miesto. Pozri [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste).
- {{ui:Vložiť}} vloží súčiastku zo súboru `.partcraft.json` vo vašom počítači. Súčiastka sa skopíruje do zostavy.

Nové súčiastky sa objavia 20 mm napravo od všetkého, čo tam už je, a zostanú tam, kým ich kĺb neumiestni. Súčiastku bez kĺbu možno posúvať aj rukou: zadanými hodnotami alebo šípkami, ktoré potiahnete (pozri [Zoznam súčiastok, rozložené zobrazenia a pohyb súčiastok](topic:assembly-bom-explode)).

## Spojenie dvoch súčiastok

1. Vyberte {{ui:Kĺb}} alebo stlačte {{key:J}}. Pravý panel zobrazí **Nový kĺb**.
2. Kliknite na rovnú plochu prvej súčiastky. Zvýrazní sa.
3. Kliknite na rovnú plochu druhej súčiastky.

Druhá súčiastka preskočí tak, aby jej plocha ležala na ploche prvej súčiastky a smerovala k nej. Kĺb sa zobrazí v časti **Kĺby**, napríklad "Revolute1", a pravý panel zobrazí jeho nastavenia.

- Ak obe plochy vznikli rotáciou, kĺb sa začne ako **rotačný**; inak ako **tuhý**. Typ potom môžete zmeniť.
- Zakrivené plochy sa nedajú vybrať: "Táto plocha je zakrivená. Vyberte rovnú plochu (na otáčanie okolo otvoru alebo osi rotácie ju zvoľte neskôr v kĺbe)."
- {{key:Esc}} zruší kĺb, ktorý ste začali (alebo kliknite na súčiastku v zozname vľavo).

### Nastavenia kĺbu

| Nastavenie | Čo robí |
|---|---|
| **Typ** | Jeden z kĺbov v tabuľke nižšie |
| **Uhol (°)** | Otočí druhú súčiastku okolo osi kĺbu (kolmo na plochy) |
| **Posunutie (mm)** | Posunie druhú súčiastku pozdĺž osi, preč od plochy (záporné hodnoty ju tlačia dovnútra) |
| **Pozdĺž X**, **Pozdĺž Y**, **Náklon okolo X**, **Náklon okolo Y**, **Pozdĺž drážky**, **Smer drážky** | Ostatné hodnoty, zobrazené pri kĺboch, ktoré ich používajú |
| **Stred na** (pre každú stranu) | Kde os kĺbu prechádza plochou: "Vlastný začiatok plochy", os rotácie ("Axis of Revolve1") alebo os jedného otvoru ("Hole1, hole 2") |

Každá hodnota, ktorú kĺb umožňuje meniť, má pod svojím poľom posuvník na ťahanie; ostatné sa nastavia raz.

| Kĺb | Čo sa hýbe | Nastaví sa raz |
|---|---|---|
| **Tuhý** | nič | Uhol, Posunutie |
| **Rotačný** | Uhol (pánt) | Posunutie |
| **Posuvný** | Posunutie (zásuvka) | Uhol |
| **Valcový** | Uhol a Posunutie (hriadeľ v klznom ložisku) | |
| **Rovinný** | Pozdĺž X, Pozdĺž Y naprieč plochou a Uhol (súčiastka kĺzajúca po stole) | |
| **Guľový** | Uhol (otáčanie) a Náklon okolo X a Y, okolo stredu kĺbu (guľový kĺb) | |
| **Kolík v drážke** | Pozdĺž drážky a Uhol (kolík v priamej drážke) | Smer drážky: uhol drážky od X plochy |

X a Y plochy sú X a Y plochy prvej súčiastky; stred kĺbu sa nastavuje pomocou **Stred na**.

"Vlastný začiatok plochy" je začiatok súčiastky premietnutý na plochu, čo často nie je tam, kde chcete súčiastky zarovnať. Pri guľatých súčiastkach a kolíkoch nastavte **Stred na** na os rotácie alebo otvoru na oboch stranách: osi sa potom zarovnajú ako sústredná väzba.

### Príklad: dve príruby skrutkované plochami k sebe

1. Otvorte súčiastku príruby (rotácia s kruhovým poľom otvorov) a vyberte {{ui:Zostava}}.
2. Vyberte {{ui:Pridať kópiu}}.
3. Stlačte {{key:J}}, kliknite na rovnú plochu disku prvej príruby (plochu, z ktorej začínajú skrutkové otvory), potom na rovnakú plochu na druhej prírube. Plochy vznikli rotáciou, takže kĺb je rotačný.
4. Nastavte **Stred na** na "Axis of Revolve1" pre obe strany. Príruby teraz zdieľajú jednu os.
5. Zadajte `22.5` do **Uhol (°)**, aby sa skrutkové otvory zarovnali, alebo potiahnite posuvník.

## Uzavreté slučky: mechanizmy

Súčiastky spojené do kruhu (štvorkĺbový mechanizmus, kľuka a posúvač, rám vystužený z oboch strán) tvoria **slučku**. PartCraft vyrieši každú slučku tak, aby sa uzavrela: kĺby na nej dostanú hodnoty, ktoré kruh spoja, a pohybujú sa čo najmenej od svojej pôvodnej polohy.

- **Nastavte alebo potiahnite** hodnotu kĺbu na slučke a zvyšok slučky ju nasleduje. Pri štvorkĺbovom mechanizme potiahnite **Uhol** kľuky a spojovacia tyč a kývačka sa pohnú spolu s ňou. Nastavená hodnota sa zachová; ostatné sa z nej vypočítajú.
- V zozname je kĺb na slučke, ktorá sa ešte môže pohnúť, **modrý**: ešte by sa dala nastaviť iná hodnota. Slučka, ktorá sa nemôže pohnúť (vystužený rám), zostane čierna. Slučka, ktorú nemožno uzavrieť, je **červená**.
- Políčko **Súčiastka** zobrazuje **Slučky**: koľko je uzavretých a koľko hodnôt sa ešte môže pohnúť, napríklad "1 uzavretá; 1 hodnota sa ešte môže pohnúť".
- {{ui:Skontrolovať pohyb na kolízie}} prechádza kĺbom na slučke so slučkou, ktorá ho nasleduje, krok po kroku (pozri [Kontrola zostavy na kolízie a pohyb](topic:check-assembly)).

Rovný mechanizmus zložený z plochých tyčí musí súhlasiť v hĺbke: dve súčiastky spojené plochami k sebe na oboch stranách kruhu potrebujú rovnakú výšku zloženia v oboch smeroch. Použite **Posunutie** kĺbu na zdvihnutie súčiastky tam, kde sa zloženie nesčíta, inak sa slučka nemôže uzavrieť.

## Práca so súčiastkami

Kliknutím na súčiastku v pohľade alebo v zozname ju vyberiete. Pravý panel zobrazí jej názov, počet kópií, objem, kĺby a to, či je pevná, nastavená kĺbmi, alebo "Nie je spojená: zostáva tam, kde bola umiestnená". Tlačidlá:

- {{ui:Upraviť túto súčiastku}} (alebo {{ui:Upraviť súčiastku}} na paneli nástrojov, alebo dvojklik na súčiastku v zozname): otvorí súčiastku na úpravu;
- {{ui:Vložiť kópiu}};
- {{ui:Urobiť z nej pevnú súčiastku}};
- {{ui:Odstrániť}}: odstráni aj jej kĺby po potvrdení.

Zostava musí mať aspoň jednu súčiastku: "Zostava musí mať aspoň jednu súčiastku. Namiesto toho ju zatvorte."

### Úprava súčiastky priamo v zostave

1. Vyberte súčiastku a zvoľte {{ui:Upraviť súčiastku}}. Súčiastka sa otvorí s históriou; nadpis hovorí "Bracket (v zostave Bracket)".
2. Upravte ju ako ktorúkoľvek inú súčiastku.
3. Na paneli nástrojov vyberte {{ui:Späť}}. Zostava sa aktualizuje: každá kópia tejto súčiastky sa zmení a kĺby na plochách vytvorených hranami náčrtu sa prispôsobia.

Vrátenie zmeny je jeden krok v zozname späť zostavy.

## Späť, uloženie a zatvorenie

- Zostava má vlastný zoznam krokov späť: {{key:Mod+Z}} a {{key:Mod+Y}} fungujú na kĺboch, vloženiach a nastaveniach.
- {{ui:Uložiť}} alebo {{key:Mod+S}} stiahne `<assembly name>.partcraft-asm.json` so všetkými súčiastkami vo vnútri. Neskôr ho otvorte pomocou {{ui:Otvoriť}}.
- {{ui:Zavrieť}} zavrie zostavu a vráti vás k súčiastke, z ktorej ste začali. Ak zostava nie je uložená, opýta sa: {{ui:Zrušiť}}, {{ui:Zahodiť zostavu}} alebo {{ui:Najprv uložiť}}.
- Ak chcete zostavu premenovať, kliknite na prázdne miesto, aby nič nebolo vybrané, a zmeňte **Názov** na pravom paneli.

## Veľké zostavy

Zostava môže obsahovať tisíce kópií niekoľkých súčiastok. Kópie jednej súčiastky sa kreslia spolu, kĺb, ktorý otáčate, umiestňuje iba súčiastky za ním, a zoznam súčiastok zobrazuje prvé riadky s tlačidlom "Zobraziť viac" pod nimi (vybraná súčiastka je vždy v zozname).

- Kým otáčate alebo priblížujete pohľad, zostava s viac ako približne 300 000 trojuholníkmi sa kreslí ako jeden kváder na súčiastku a po chvíli, keď prestanete, sa vykreslí celá.
- {{ui:Pohľady}} › {{ui:Odľahčené zobrazenie}} ponecháva kvádre zapnuté stále. Výber súčiastok a kĺbov stále používa skutočné súčiastky.
- Rýchlosť otáčania závisí aj od grafickej karty. Namerané hodnoty PartCraft sú v poznámkach k vydaniu spolu s počítačom, na ktorom boli namerané.

## Problémy s kĺbmi

- Súčiastka, ku ktorej sa žiaden kĺb nedostane, sa uvádza ako **voľná** a panel hovorí: "Bracket2 nie je spojená s pevnou súčiastkou, takže zostáva tam, kde bola umiestnená."
- Slučka, ktorú nemožno uzavrieť (dĺžky nedosiahnu, limit zastaví kĺb, plochy nesúhlasia v hĺbke): "Revolute3 uzatvára slučku, ktorú nemožno uzavrieť: je mimo o 2.000 mm. Skontrolujte plochy, posunutia a limity kĺbov slučky." Jej kĺby sa zafarbia na červeno.
- Ak po úprave súčiastky zmizne plocha alebo os, ktorú kĺb používa: "Plocha, ktorú tento kĺb používa, v Bracket už nie je." Odstráňte kĺb a vytvorte ho znova.

Ďalej: [Kontrola zostavy na kolízie a pohyb](topic:check-assembly).
