---
title: Izmēru maiņa, neatverot skici
summary: Vadiet detaļu ar skaitļiem labajā panelī: skices izmēri, dziļumi, skaiti un leņķi, kā plānot detaļu, lai pareizie skaitļi to vadītu, un kur parametri un vienādojumi pārņem vadību.
keywords: parametri, vadoši izmēri, dizaina nolūks, izmēru maiņa, vienādojumi, globālie mainīgie, dizaina tabula, konfigurācijas, mainīt izmēru, modificēt izmēru
from: c2ae1a32
---

Katrs izmērs PartCraft detaļā ir skaitlis, ko vēlāk varat mainīt: izmēri tās skicēs un tās elementu iestatījumi. Lai mainītu skices izmērus, nav jāatver skice.

## Skices izmēra maiņa no paneļa

1. Noklikšķiniet uz elementa vēsturē, piemēram, "Extrude1".
2. Zem izvilkuma paša iestatījumiem **Skices izmēri (Sketch1)** uzskaitīts katrs skices izmērs: "Attālums", "Diametrs", "Leņķis (°)" un tā tālāk.
3. Ierakstiet jaunu vērtību vienā lodziņā un nospiediet {{key:Enter}} vai {{key:Tab}}.

Skice atrisinās ar jauno vērtību, un visa detaļa tiek pārbūvēta. Ja atlasāt pašu skici, rāda to pašu sarakstu kā **Vadoši izmēri**.

Rādiusam vai diametram jābūt lielākam par nulli, un leņķis ir no 0 līdz 180 grādiem; statusa joslā tas tiek norādīts, ja nav.

:::tip
Kurš lodziņš ir kurš? Lodziņi ir uzskaitīti tādā secībā, kādā izmēri tika izveidoti. Ja neesat pārliecināti, atveriet skici (veiciet dubultklikšķi uz tās), veiciet dubultklikšķi uz izmēra skatā un mainiet to tur.
:::

## Galveno skaitli ierakstiet uzreiz

Atlasiet elementu vēsturē (vai vienkārši pievienojiet to) un ierakstiet skaitli: tas nonāk elementa galvenajā lodziņā, kuru maināt visbiežāk (izvilkuma **Dziļums**, rotācijas **Leņķis**, cauruma **Diametrs**, masīva **Skaits**, noapaļojuma **Rādiuss**, čaulas sienas biezums). Nospiediet {{key:Enter}}, lai to iestatītu, vai {{key:Esc}}, lai paturētu veco. Pievienojot izvilkumu, statusa joslā tas tiek paziņots: "Extrude1 pievienots. Mainiet tā skaitļus labajā pusē vai tagad ierakstiet skaitli tā dziļumam."

## Skaitļa maiņa vēsturē

Katra elementa rindā vēsturē tā galvenais skaitlis ir blakus nosaukumam: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Veiciet dubultklikšķi uz skaitļa (vai atlasiet rindu un nospiediet {{key:F2}}), un tieši tur atveras lodziņš. Ierakstiet jauno vērtību un nospiediet {{key:Enter}}; {{key:Esc}} paturēs veco. Tas darbojas tieši kā elementa lodziņš labajā pusē: tie paši ierobežojumi, `=`, lai ierakstītu vienādojumu, piemēram, `=width/2`, un viens solis atsaukšanai.

Izvilkumā, caurumā vai masīvā dubultklikšķis jebkurā rindas vietā atver lodziņu. Noapaļojumā, nošķelšanā, čaulā, slīpumā vai vītnē dubultklikšķis uz nosaukuma joprojām ved uz šķautņu vai virsmu izvēli, tāpēc veiciet dubultklikšķi uz pašas skaitļa. Skicēm rindā nav skaitļa: dubultklikšķis atver skici.

## Vilkt skatā

Atlasiet izvilkumu vēsturē (vai noklikšķiniet uz tā skatā, tad uz tā rindas), un tā galā stāv oranža bultiņa ar dziļumu lodziņā blakus. Velciet bultiņu: detaļa seko jums, velkot, un, atlaižot, jaunais dziļums tiek iestatīts kā viens solis ({{key:Mod+Z}} to atjauno). Nospiediet {{key:Esc}}, velkot, lai atgrieztos sākumā. Dziļums mainās ar soli, kas ir vienu desmitdaļu no tā lieluma: 1 mm 25 mm izvilkumam, 0.1 mm 3 mm izvilkumam.

Rotācijai savā pagrieziena galā ir līkna bultiņa: velciet to ap asi, lai mainītu leņķi, veselos grādos no 1° līdz 360°.

Vai noklikšķiniet lodziņā blakus bultiņai, ierakstiet vērtību (vai `=` un vienādojumu) un nospiediet {{key:Enter}}. Izvilkumam, kas iet **Caur visu** vai līdz virsmai, nav bultiņas, kā arī vērtībai, ko vada vienādojums: mainiet tos labajā pusē.

## Skaitļi, kas vada detaļu

| Kur | Ko var mainīt |
|---|---|
| Skice | Katrs izmērs: garumi, attālumi, rādiusi, diametri, leņķi |
| Izvilkums un griezums | Dziļums, beigu nosacījums, virziens, pievienot vai izgriezt |
| Rotācija un rotēts griezums | Leņķis, ass, pievienot vai izgriezt |
| Caurums | Diametrs, dziļums, caur visu, paliktņa diametrs un dziļums |
| Noapaļojums, nošķelšana, čaula | Rādiuss, attālums, sienas biezums un virziens, un kuras šķautnes vai virsmas |
| Lineārs un cirkulārs | Skaits, attālums vai leņķis, virziens vai ass |
| Detaļa | Līknes (cik smalki apaļas formas tiek šķautnotas) |
| Rasējums | Kur griezums šķeļ, detaļas izmērs un mērogs, GD&T vērtības |

## Plānojiet detaļu, lai pareizie skaitļi to vada

Skaitļi, ko dodat, ir tie, ko varat mainīt. Daži paradumi padara vēlākas izmaiņas drošas:

- **Dimensionējiet to, kas svarīgs darbam.** Ja caurumam jāpaliek 15 mm no malas, dimensionējiet to no šīs malas, nevis no izcelsmes.
- **Pilnībā definējiet skices.** Tad izmaiņa pārvieto tikai to, kas jāpārvieto (skatiet [Pilnībā definējiet skici](topic:relations-dimensions)).
- **Lietojiet sakarības nolūkam.** Vienāds uz diviem caurumiem nozīmē, ka viens diametrs vada abus. Simetriskām formām: novietojiet izcelsmi uz centrālās līnijas vai izmantojiet Viduspunktu.
- **Skicējiet uz elementu izveidotām virsmām.** Skice uz izvilkuma galējās virsmas pārvietojas, mainoties dziļumam.
- **Lietojiet masīvu, nevis kopēšanu.** Viens caurums, kas astoņas reizes veidots kā masīvs, ir viens diametrs, ko mainīt.

## Vairāk par vienu skaitli

- **Viens skaitlis, kas vada vairākus:** lietojiet parametrus un vienādojumus: [Vadiet detaļu ar parametriem](topic:parameters).
- **Vairāki vienas detaļas izmēri:** saglabājiet katru kā [konfigurāciju](topic:design-tables); tās tiek glabātas detaļas failā.
- **Aritmētika skaitļu lodziņā:** ierakstiet `=40/2` vai `=width / 2`. Tas kļūst par vienādojumu; skatiet [Vienādojumi abos virzienos](topic:equations-two-way).
- **Collu mērvienības:** detaļa rāda milimetrus. Skaitļu lodziņā ar `=` vai parametrā `2in` tiek pārvērsts par 50.8.

Skatiet [Kas vēl nav izveidots](topic:not-built-yet).
