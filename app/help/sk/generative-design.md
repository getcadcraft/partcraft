---
title: Vytvorenie tvaru zo zaťaženia (Generatívny návrh)
summary: Vyberte plochy, ktoré sú podopreté a zaťažené, oblasti, ktoré sa majú zachovať a držať voľné, cieľové objemy a materiály, a generujte výsledky: najtuhšie tvary nájdené pre každý objem, znovu skontrolované ako telesá, porovnané v tabuľke a stiahnuteľné ako STL, STEP alebo nová súčiastka.
keywords: generatívny návrh, topologická optimalizácia, SIMP, ľahká konštrukcia, mriežka, organický tvar, výsledky, porovnanie, hmotnosť, objemový podiel, zachovať, prekážka, priestor návrhu, minimálna veľkosť prvku, STL, 3D tlač
from: 5b91fa8e
---

Pracovný priestor Generatívny odstraňuje materiál, ktorý zaťaženia nepotrebujú. Určíte, kde je súčiastka upevnená a zaťažená, čo musí zostať a čo musí zostať voľné; PartCraft nájde najtuhší tvar pre každý cieľový objem (**topologická optimalizácia**), každý tvar znovu skontroluje ako teleso so skutočným materiálom a zobrazí výsledky vedľa seba. Pracuje na pomenovaných plochách, ktoré súčiastke dáva jadro siete (pozri [Jadro siete](topic:solid-kernels)).

Vyberte **Generatívny** v poli **Pracovný priestor**. Vaša súčiastka sa nemení; štúdia sa uloží vnútri súboru súčiastky.

## Nastavenie štúdie

1. Na pravom paneli stlačte **Nová štúdia**.
2. **Priestor**: *Súčiastka tak, ako je* odoberá materiál zo súčiastky; *Kváder okolo súčiastky* vytvorí tvar vnútri kvádra, ktorý je väčší než súčiastka o **Okraj kvádra**.
3. **Veľkosť prvku**: nechajte prázdne pre automatickú veľkosť (približne 8,000 kociek), alebo zadajte vlastnú. Jemnejšie veľkosti dajú jemnejšie tvary a trvajú dlhšie.
4. **Minimálny prvok**: prvky tenšie než približne dvojnásobok tejto hodnoty sa nevytvoria. Prázdne znamená jeden a pol kocky.
5. Označte jeden až šesť **Cieľových objemov** (podiel priestoru návrhu, ktorý tvar môže vyplniť) a jeden až štyri **Materiály**. Každý objem sa vygeneruje raz; každý materiál sa overí na tomto tvare (najtuhší tvar nezávisí od materiálu, ale jeho hmotnosť, napätie a bezpečnostný faktor áno).

## Ciele

- {{ui:Pevné}}: kliknite na plochy, ktoré sú upevnené. **Plocha bez trenia** zo zoznamu **Pridať** na paneli drží plochu iba v jej vlastnej rovine (použite ju pre roviny symetrie).
- {{ui:Sila}}: kliknite na zaťažené plochy, potom zadajte celkovú silu a na paneli zvoľte jej smer. **Tlak** je v zozname **Pridať**.
- {{ui:Zachovať}}: kliknite na plochy, okolie ktorých musí zostať pevné, a nastavte hĺbku (**Udržať pevné do**) — napríklad okolo otvorov pre skrutky. Plochy, ktoré upevníte alebo zaťažíte, sa vždy zachovajú.
- {{ui:Prekážka}}: kliknite na plochy, okolie ktorých musí zostať prázdne, a nastavte, ako ďaleko (**Udržať prázdne do**) — miesto pre hriadeľ alebo nástroj.

Po kliknutí na plochy stlačte **Výber dokončený** alebo {{key:Esc}}. Zelené a červené odtiene zobrazujú oblasti.

## Generovanie a porovnanie

Stlačte {{ui:Generovať}}. Panel zobrazuje priebeh a zostávajúci čas; **Zastaviť** zruší. Každý výsledok sa zobrazí v tabuľke **Výsledky**: cieľový objem, materiál, **hmotnosť**, **najväčšie napätie**, **najväčší posun** a **bezpečnostný faktor** (medza klzu ÷ napätie), všetko z opätovného riešenia hotového tvaru ako pevných kociek so skutočným materiálom.

Vyberte výsledok, aby ste ho videli v pohľade (súčiastka je skrytá; označte **Zobraziť súčiastku cez ňu**, aby ste videli obe). Pod tabuľkou: koľko iterácií trvalo a či sa ustálili, jeho tuhosť ako telesa oproti vlastnému údaju optimalizátora a jeho plocha.

## Použitie výsledku

- **STL**: uzavretá sieť trojuholníkov, pripravená na 3D tlač.
- **STEP (fasetovaný)**: rovnaký povrch ako teleso STEP zložené z rovných plôch.
- **Nový súbor súčiastky**: súčiastka PartCraft, ktorej jediným prvkom je výsledok ako importované teleso. Otvorte ju, aby ste na nej mohli kresliť náčrt, vyrezať otvory alebo ju skontrolovať v Simulácii. Je fasetovaná (tisíce rovných plôch), nie upraviteľný tvar.
- **Pridať k tejto súčiastke** pripojí výsledok k súčiastke; je zapnuté len pre kvádrový priestor návrhu (ak je priestorom sama súčiastka, výsledok leží vnútri súčiastky).

**Nový súbor súčiastky** a **Pridať k tejto súčiastke** ešte nie sú hotové v tejto verzii: výsledok sa stane importovaným telesom, ktoré potrebuje presné jadro. Sťahovanie STL a STEP (fasetovaný) funguje.

## Ako veľmi mu dôverovať

- Optimalizuje **tuhosť** pre zadaný objem. Zatiaľ nemá limity napätia ani výrobné pravidlá (previsy, smery frézovania, minimálne veľkosti otvorov): vybraný výsledok skontrolujte v [Simulácii](topic:simulation) a upravte.
- Tenké prvky široké jednu alebo dve kocky sú aproximácie: pre štíhle súčiastky použite menšiu veľkosť prvku.
- Metóda je SIMP s filtrom hustoty, prahovou projekciou a aktualizáciou podľa kritérií optimality; uvádzané napätie a priehyb sú výsledku ako kociek, čo je poctivé, ale hrubé na ostrých rohoch.

## Súvisiace

- [Skontrolujte napätie a priehyb (Simulácia)](topic:simulation)
- [Export na tlač, STEP a DXF](topic:export-files)
- [Čo ešte nie je hotové](topic:not-built-yet)
