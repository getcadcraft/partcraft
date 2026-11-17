---
title: Úprava súčiastky cez jej históriu
summary: Upravujte prvky a náčrty dodatočne, potláčajte ich, vracajte sa, vkladajte prvky skôr, meňte ich poradie, premenúvajte, mažte a vráťte ktorúkoľvek z týchto zmien späť.
keywords: história, strom prvkov, strom návrhu, upraviť prvok, upraviť náčrt, potlačiť, zrušiť potlačenie, návrat, vrátiť sa, znova vpred, poradie, presunúť prvok, zmazať, premenovať, späť, znova, prestavba, regenerácia, nadradený podradený, veľká súčiastka, veľa prvkov, pomalá prestavba, 750 prvkov
from: 6f75aef4
---

Súčiastka v PartCraft je jej história: zoznam rovín, náčrtov a prvkov vľavo. PartCraft pri každej zmene prestavuje teleso zhora tohto zoznamu. Zmena čísla vysoko v zozname mení všetko, čo je na ňom postavené.

## Úprava prvku

1. Kliknite na prvok v histórii (alebo na náčrt odsadený pod ním).
2. Zmeňte jeho nastavenia v pravom paneli. Každá zmena sa okamžite prestaví.

Nie je tu OK ani {{ui:Zrušiť}}: každá zmena sa uplatní. Ak sa vám nepáči, stlačte {{key:Mod+Z}}.

## Zmena hrán alebo plôch, ktoré použije zaoblenie, skosenie alebo vyhĺbenie

Dvakrát kliknite na prvok v histórii alebo ho vyberte a zvoľte {{ui:Vybrať hrany}} (alebo {{ui:Vybrať plochy}}). Kliknutím na hrany alebo plochy ich pridáte alebo odoberiete, potom {{ui:Hotovo}} alebo {{key:Esc}}. Pozri [Zaoblenie, skosenie a vyhĺbenie](topic:fillet-chamfer-shell).

## Úprava náčrtu

1. Dvakrát kliknite na náčrt v histórii alebo ho vyberte a zvoľte {{ui:Upraviť náčrt}} v pravom paneli (alebo {{ui:Náčrt}} na paneli nástrojov).
2. Súčiastka sa vráti do stavu, aký mala pri vytváraní náčrtu: prvky za ním sú počas úpravy skryté.
3. Zmeňte geometriu, väzby alebo kóty.
4. Zatvorte náčrt. Celá súčiastka sa prestaví so zmenou.

Ak chcete zmeniť len veľkosť, náčrt otvárať nemusíte. Vyberte prvok alebo náčrt a zmeňte číslo pod **Kóty náčrtu** (alebo **Riadiace kóty**) v pravom paneli. Pozri [Zmena rozmerov bez otvorenia náčrtu](topic:change-sizes).

## Keď prvok zlyhá

Ak zmena znemožní prvok, PartCraft zostaví všetko ostatné a označí problém:

- prvok v histórii zobrazuje **⚠ chyba** a jeho správa je hore v pravom paneli (môžete ju prečítať aj po prejdení kurzorom nad riadok);
- prvky, ktoré ho potrebujú, zobrazujú **⚠ nezostavené** s hlásením "Vyžaduje Extrude2, ktorý zlyháva.";
- čip v stavovom riadku hovorí "1 prvok zlyháva".

Opravte príčinu (alebo vráťte zmenu späť) a súčiastka sa znova zostaví. Bežné hlásenia a ich riešenie sú v [Riešenie problémov](topic:troubleshooting).

## Potlačenie prvku

Potlačenie vypne prvok bez jeho zmazania: hodí sa, keď chcete súčiastku vyskúšať bez otvoru alebo vzoru.

1. Vyberte prvok.
2. Zvoľte {{ui:Potlačiť}}. Jeho riadok zobrazuje **vypnuté**. Prvky, ktoré ho potrebujú, sa tiež nezostavia.
3. Zvoľte {{ui:Zrušiť potlačenie}} a prvok znova zapnete.

## Vrátenie

Vrátenie zostaví súčiastku len po určitý bod, takže ju vidíte v jej predchádzajúcom stave, alebo pridáte prvok skôr v histórii.

1. Vyberte prvok a zvoľte {{ui:Vrátiť sa sem}}. Tento prvok a všetky pod ním sú zašedené a nezostavené. Riadok **Lišta vrátenia · znova vpred** označuje miesto.
2. Každý prvok, ktorý teraz pridáte, sa vloží **pri lište**, pred zašedené prvky.
3. Kliknite na **Lišta vrátenia · znova vpred** a všetko sa znova zostaví.

Pozícia vrátenia sa uloží do súboru.

## Zmena poradia prvkov

1. Vyberte prvok.
2. Zvoľte {{ui:Posunúť hore}} alebo {{ui:Posunúť dole}}, alebo ak je riadok histórie zvýraznený, stlačte {{key:Alt+Up}} alebo {{key:Alt+Down}}.

Prvok nikdy nemôže ísť nad to, čo používa. Tlačidlo je zašedené a prejdenie kurzorom nad ním (alebo pokus o klávesovú skratku) uvedie dôvod, napríklad "Extrude2 používa Sketch2, takže Sketch2 musí byť prvý."

Prvok používa: svoj náčrt; plochu, na ktorej náčrt leží; prvky, ktoré vzor alebo zrkadlenie kopíruje; čiaru náčrtu alebo rotačné teleso použité ako smer alebo os.

## Zmazanie prvku

1. Vyberte prvok a zvoľte {{ui:Zmazať}} v pravom paneli alebo na paneli nástrojov, prípadne stlačte {{key:Delete}}.
2. Ak ho používajú iné prvky, PartCraft sa opýta: "Extrude3, Hole1 používajú Extrude1 a budú zmazané tiež." Zvoľte {{ui:Zmazať všetko}} alebo {{ui:Zrušiť}}.

Zmazanie prvku nezmaže jeho náčrt: náčrt sa znova objaví v zobrazení ako nepoužitý náčrt pripravený na ďalší prvok. Ak ho nepotrebujete, zmažte ho samostatne.

## Premenovanie

Vyberte prvok a do poľa **Názov** na spodku pravého panela zadajte nový názov (najviac 60 znakov). Názov súčiastky je v pravom paneli, keď nič nie je vybrané.

## Súčiastky so stovkami prvkov

Súčiastka so stovkami prvkov sa testuje pri 750. PartCraft si ponechá teleso, ktoré malo v priebehu histórie, takže zmena neskôr v histórii prestaví len prvky za ňou; zmena blízko hornej časti prestaví všetko na nej postavené, čo trvá najdlhšie. Späť a znova prestavujú len od miesta, kde sa tieto dva stavy líšia. Ak chcete na veľkej súčiastke pracovať rýchlejšie, vráťte sa na miesto, kde pracujete (pozri Vrátenie vyššie), alebo potlačte to, čo teraz nepotrebujete. Viacero rezov a výstupkov, ktoré sa navzájom nedotýkajú, sa aplikuje naraz, takže súčiastka zložená z mnohých samostatných dier a výstupkov sa zostaví rýchlejšie, ako naznačuje počet prvkov.

Veľká súčiastka sa prestavuje na pozadí: spodný čip zobrazuje **Prebudovávanie…** s údajom, ako ďaleko je, a zobrazenie, panely a ponuky fungujú počas celého behu. Súčiastka na obrazovke je posledná zostavená, kým nebude pripravená nová. Ak niečo znova zmeníte počas prestavovania, PartCraft zostaví najnovšiu verziu a rozpracovanú zahodí. Malá súčiastka sa prestaví hneď.

## Späť a znova

- {{key:Mod+Z}} alebo {{ui:Späť}} vráti späť poslednú zmenu: prvok, nastavenie, úpravu náčrtu, potiahnutie. Stavový riadok uvedie, čo to bolo, napríklad "Vrátené: zmena kóty."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} alebo {{ui:Znova}} ju zopakujú.
- PartCraft si ponechá posledných 200 krokov (súčiastka taká veľká, že 200 kópií by zabralo veľa pamäte, si ponechá menej, nikdy však menej ako posledných 20). Zmeny na výkrese (rez, presunutý symbol GD&T) sú v rovnakom zozname. Otvorenie súboru alebo nová súčiastka ho vymaže.

:::mac
Na Macu na znovu použite ⇧⌘Z. V Safari môže ⌘Y otvoriť históriu prehliadača.
:::
