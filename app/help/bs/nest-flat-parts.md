---
title: Raspoređivanje ravnih dijelova na listovima
summary: Poredaj ravne dijelove na limovima ili roli uz što manje otpada koji PartCraft može naći, nikad bliže od razmaka koji zadaš, i spasi raspored kao DXF za laser, plazmu, vodeni mlaz ili glodalicu.
keywords: raspoređivanje, raspored, list, lim, rola, laser, plazma, vodeni mlaz, glodalica, rezanje, iskorištenje, upotreba materijala, otpad, razmak, širina reza, smjer vlakana, smjer valjanja, dxf, ravni uzorak, konture
from: 8dcce1a6
---

**Raspoređivanje** stavlja mnogo ravnih dijelova na list tako da ostane što manje materijala. PartCraft slaže dijelove jedan po jedan, svaki tamo gdje najviše skraćuje iskorištenu dužinu lista, isprobava nekoliko redoslijeda i završi za nekoliko sekundi, pa zadržava najbolji. Dijelovi mogu stajati u rupama jedni drugih i u šupljini slova L ili U.

## Otvori

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} otvara ga s ravnim uzorkom dijela ili — u sklopu — s ravnim uzorkom svakog dijela od lima, onoliko koliko ima kopija.
- Na dijelu od lima, {{ui:Lay flat}}, pa zatim {{ui:Nest on sheets…}} pod ravnim uzorkom.
- {{ui:Add outlines from a DXF…}} dodaje svaku zatvorenu konturu u DXF datoteci kao dio: crtež iz CadCraft-a sačuvan kao DXF, ili datoteku iz vlastitog softvera tvog rezača. Kontura unutar druge je rupa u njoj. Linije i lukovi koji se spajaju kraj na kraj broje se kao jedna kontura. Datoteke u inčima, centimetrima ili metrima pretvaraju se u milimetre.

:::note
Razvijanje lima u ravan zahtijeva tačno geometrijsko jezgro (vidi [Lim](topic:sheet-metal)). Konture iz DXF datoteke uvijek rade.
:::

## Podešavanje

Za svaki dio zadaj **koliko** treba i njegov **smjer vlakana**: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} za brušeni ili valjani lim koji mora ići jednim smjerom, ili {{ui:Across the sheet}}.

Pod **Listovi**:

- **Zaliha**: {{ui:Plates}} zadane dužine i širine (i koliko imaš; 0 = koliko treba), ili {{ui:A roll}} zadane širine, dugačka koliko treba.
- **Margina ivice** ostaje slobodna na svakoj ivici lista (za stezaljke, ili za neravnu ivicu).
- **Razmak između dijelova** je najmanja udaljenost između dviju linija reza: najmanje širina reza (kerf) tvog rezača, plus ono što materijal zahtijeva.
- **Okretanja**: uglovi za koje se dio može okrenuti, po zadanom svakih 90°. Manje okretanja radi brže; više može bolje iskoristiti list.
- **Dijelovi se mogu okrenuti** dopušta da se dio položi naopako. Ostavi isključeno za lim: ravni uzorak položen naopako savija se na drugu stranu.

Pritisni {{ui:Nest}}. Pregled prikazuje svaki list; podaci kažu koliko je limova (ili koliko role) iskorišteno i koliki dio materijala zauzimaju dijelovi. Svi dijelovi koji nisu stali su navedeni.

## Spašavanje

{{ui:Save DXF}} zapisuje raspored kao DXF (R12, milimetri), jedan list ispod drugog: konture listova na sloju SHEET, dijelovi na PARTS (lukovi ostaju lukovi), naziv svakog dijela na LABELS.

:::tip
Miješanje više dijelova obično se bolje raspoređuje nego mnogo kopija jednog: mali dijelovi popunjavaju praznine između velikih.
:::

## Rezanje listova (G-kod)

**Izvoz › Raspoređeni listovi u G-kod** čita raspoređeni DXF (ovaj, ili listove dodatka Cabinets u CadCraft-u) i pravi jedan program po listu kroz postprocesor koji izabereš: prvo rupe i izrezi, zatim konture; svaki rez ide za radijus alata izvan dijela, kroz list i još 1 mm, sa jezičcima ako ih zatražiš. Lista postprocesora sadrži ugrađene i one iz tvoje studije Proizvodnja. Provjeri svaki program u simulatoru prije nego ga pokreneš: bušenje i džepovi se ne prave.

## Šta provjeriti

PartCraft ponovo provjerava svaki raspored na stvarnim oblicima (ne na mreži po kojoj je tražio): nijedna dva dijela nisu bliže od razmaka, ništa nije u marginama. Ne planira rez: uvodne linije, redoslijed rezanja, rezanje zajedničkih ivica jednom i čuvanje ostatka lista su posao softvera tvog rezača. Provjeri DXF tamo prije rezanja.
