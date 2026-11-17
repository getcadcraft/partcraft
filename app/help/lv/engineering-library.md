---
title: Inženierzinātņu bibliotēka
summary: Mācību grāmatu formulas kā lasāmi skripti SI vienībās, katram rezultātam ar avotu: cauruļu un kanālu plūsma, siltuma pārnese un siltummaiņi, spiediena detaļas, gāzu dinamika, ūdens un gaisa īpašības, materiāli un vienību pārbaude. Kam katrs ir noderīgs un kur tas beidzas.
keywords: inženierzinātnes, bibliotēka, vienības, Darcy-Weisbach, Colebrook, Reynolds, berzes koeficients, Dittus-Boelter, Gnielinski, NTU, efektivitāte, LMTD, spurga, Barlow, Lamé, sprausla, izentropisks, Mach, aizsprostota plūsma, ūdens, gaiss, īpašības, materiāls, avoti
from: 786ef967
---

Inženierzinātņu bibliotēka ir skriptu kopa Skriptu darbvietas bibliotēkā (`craftlib/eng`). Katrs no tiem ir funkcija, ko var izlasīt no augšas līdz apakšai, ar galveni, kas dod tās **metodi**, **vienības**, **ierobežojumus**, **atsauces** un **pārbaudi** ar izstrādātu skaitli. Visur tiek izmantotas SI vienības, un tās atgriež lielumus ar **vienību** un **avotu**, tāpēc datu lapa var izdrukāt, no kurienes nāk katrs skaitlis.

## Pārbaudītās vienības

`to_si(10, 'bar', 'Pa')` pārveido vērtību un noraida vienību, kas mēra ko citu (garumu tur, kur gaidīts spiediens). `from_si`, `unit_convert(1, 'bar', 'psi')` un `unit_kind('W/(m K)')` ("siltumvadītspēja") darbojas tāpat. `temp_k(25, 'C')` un `temp_from_k` pārveido temperatūras, kurām ir nobīde.

## Īpašības

- `fluid('water', T)` un `fluid('air', T, p)`: blīvums, viskozitāte, vadītspēja, īpatnējais siltums, Prandtla skaitlis. Ūdens 0 līdz 100 °C, gaiss 250 līdz 600 K; ārpus šī diapazona tas apstājas, nevis ekstrapolē.
- `material('ss304')`: Junga modulis, Puasona koeficients, blīvums, tecēšanas robeža, vadītspēja, īpatnējais siltums, izplešanās: istabas temperatūras vērtības no tām pašām datu lapām kā Simulation. Reālā projektā izmanto piegādātāja sertificētos skaitļus. Temperatūras līknes vēl nav izveidotas.

## Plūsma caurulēs un kanālos

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminārā plūsma, tad Colebrook vienādojums turbulentai plūsmai; diapazonam no 2300 līdz 4000 nav uzticamas formulas, un par to tiek ziņots), `darcy_weisbach`, `minor_loss`, `pipe_flow` (apaļa caurule, viss uzreiz) un `rect_channel` (laminārie taisnstūra kanāli pēc Shah un London aproksimācijas).

## Siltuma pārnese

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (izvēlas lamināro vai turbulento un nosauc korelāciju), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` un `ntu_for` (efektivitātes-NTU sakarības pretplūsmai, paralēlai plūsmai, čaulas un cauruļu, šķērsplūsmai un vienai mainīgai straumei) un `hx_size` (UA izmērs, ko prasa jauda; tas norāda, cik daudz ir iespējams, ja jaudu nevar sasniegt).

## Spiediena detaļas

`allowable_stress` (tecēšanas robeža dalīta ar drošības koeficientu), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, pēc gredzenvirziena vai bīdes kritērija) un `wall_sphere`. Tās ir mācību grāmatu rezerves, **nevis spiedtvertņu kodeksa aprēķins**: nav korozijas pielaides, savienojuma efektivitātes vai kodeksa koeficientu.

## Gāzu dinamika

`isentropic` (attiecības pie Mach skaitļa), `mach_from_area`, `choked_flow`, `throat_area` un `exit_mach` ideālai gāzei bez berzes, siltuma un triecienviļņiem.

## Pārbaudiet rezultātu

`check_stress`, `check_thermal` un `check_flow` palaiž PartCraft pašu spriegumu, siltumvadīšanas un plūsmas risinātājus uz ģenerētas detaļas no skripta un nolasa maksimālo spriegumu un pārvietojumu, temperatūras un siltuma plūsmu, kā arī kanālu tīkla caurlaidību. Tie nemaina risinātājus. Sprieguma un temperatūras pārbaudes izmanto vokseļus, tāpēc izliekta virsma ir kāpņveida, un spriegums asā iekšējā stūrī vai zem punktveida slodzes ir atkarīgs no vokseļa izmēra.
