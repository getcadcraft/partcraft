---
title: Skices magnēta pētījums
summary: Pārvērtiet skiču slēgtos kontūrus plakanā magnētiskā modelī (dzelzs, magnēti, spoles), redziet lauku un nolasiet spēku un griezes momentu uz korpusa.
keywords: magnēts, magnētisks, magnetostatisks, lauks, plūsmas blīvums, spēks, griezes moments, spole, jūgs, dzelzs, B-H līkne, pastāvīgais magnēts, aktuators, motors, solenoīds, Maksvels
from: 604efc3b
---

Izmantojiet {{ui:More}} elementu rīkjoslā › {{ui:Magnet study of sketches…}} detaļai, kurai ir skices. Katra slēgta forma atzīmētajās skicēs ir viens plakana modeļa apgabals; pētījums aprēķina magnētisko lauku B, spēku un griezes momentu izvēlētam korpusam.

## Soļi

1. Zīmējiet korpusus kā slēgtas formas skicēs: dzelzs jūgu, magnētu, spoli. Korpusi, kas saskaras, dala malu, tāpēc ievietojiet tos dažādās skicēs; korpusi, kas stāv atsevišķi vai ir viens otram iekšā (logs jūgā), var būt vienā skicē. Turiet skices uz vienas plaknes.
2. Atveriet pētījumu un atzīmējiet skices, ko izmantot. Katrs slēgtais profils saņem numurētu rindu. Norādiet, kas tas ir: Gaiss, Dzelzs (caurlaidība vai B–H līkne, ievadīta kā pāri: B teslās un H A/m), Pastāvīgais magnēts (Br teslās, tā virziens kā leņķis no skices x ass un tā atgriezeniskā caurlaidība) vai Spole (kopējā strāva caur tās profilu, apgriezieni reiz ampēri; zīme parāda, kurā virzienā tā iet).
3. Atzīmējiet {{ui:Force and torque on this body}} korpusiem, kuriem tos vēlaties. Norādiet detaļas dziļumu ārpus skices.
4. Izvēlieties tīklu un gaisu ap modeli, tad {{ui:Run}}.

## Ko jūs redzēsiet

- Plūsmas blīvumu |B| pāri modelim: tumši zils zemās vērtībās, sarkans augstās, ar numurētiem profiliem.
- Vislielāko lauku un to, kur tas atrodas, trīsstūru skaitu un katram atzīmētajam korpusam spēku pa x un y un griezes momentu ap tā vidu, par jūsu norādīto dziļumu.
- {{ui:Save results (CSV)}} ieraksta skaitļus.

## Noderīgi zināt

- Tas ir plakans, stacionārs modelis: viss ir uz metru dziļuma, bez virpuļstrāvām un histerēzes, un magnēts ir taisna atgriešanās līnija (to nevar demagnetizēt).
- Modelis atrodas gaisa kastē, kuras mala ir siena. Salīdziniet divus gaisa kastes izmērus un Normal un Fine tīklus: spēks, kas ņemts no lauka ap korpusu, ir tikai tik labs, cik ir tīkls tajā vietā.
- Dzelzs ar tikai caurlaidību nekad nepiesātinās. Kad lauks pārsniedz 2 T, pētījums uzliek ⚠ problēmu sarakstā: dodiet dzelzij B–H līkni. Skaitļi jaunā rindā ir piemēri (dzelzs μr 2000, 1.2 T magnēts), nevis materiāla datu lapas dati.
- Korpusam ap sevi vajag vietu, lai uzņemtu spēku: ja cits korpuss ir pārāk tuvu, pētījums to pateiks.
- Projektēšanas palīglīdzeklis, nevis inženieru apstiprinājums.

## Nākamais

- [Magnētiskie lauki 2D (apmācība)](topic:magnetic-fields-2d)
