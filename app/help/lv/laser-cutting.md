---
title: Nosūtīt rasējumu uz lāzeru
summary: Izvēlieties, ko dara katrs slānis (griezt, rievot, gravēt, aizpildīt, attēls), priekšskatiet galvas kustības, saglabājiet GRBL lāzera režīma G-kodu vai nosūtiet to no pārlūkprogrammas pēc darba apvilkšanas.
keywords: lāzers, lāzera griezējs, lāzera gravētājs, GRBL, G-kods, gravēt, aizpildīt, punktēšana, attēla gravēšana, rievot, griezt, Web Serial, Linux, apvilkt darbu, jauda, ātrums, gājieni
from: 327b3c46
---

{{ui:Laser}} panelis pārvērš rasējuma slāņus programmā lāzeram, kas darbojas ar GRBL (vairumam hobiju un mazo darbnīcu diodu un CO2 vadību). PartCraft izvēlieties {{ui:Export}} › {{ui:Laser program…}}, tad {{ui:Add outlines from a DXF…}}: kontūras un caurumi tiek ievietoti slānī CUT. Lokšņu metāla detaļu plakanajiem rakstiem (ar liekuma līnijām slānī BEND) vajag precīzo kodolu, kas šajā versijā nav. Iestatījumi tiek saglabāti detaļas vai mezgla failā.

:::warning
Pārbaudiet katru iestatījumu uz lauzta materiāla, nēsājiet acu aizsargus, kas der jūsu lāzeram, turiet vāku aizvērtu, ja tāds ir, un nekad neatstājiet darbojošos lāzeru bez uzraudzības. Skaitļi, ar kuriem slānis sākas, ir vietturi, nevis ieteikumi kādam materiālam.
:::

## Izvēlieties, ko dara katrs slānis

Katrs rasējuma slānis ir rinda. {{ui:Does}} iestata to uz **Griezt**, **Rievot**, **Gravēt līnijas**, **Aizpildīt formas**, **Gravēt attēlu** vai **Nenosūtīt**, ar {{ui:Power %}}, {{ui:Speed mm/min}} un gājienu skaitu {{ui:Passes}}.

- **Aizpildīt** iededzina slēgtu formu iekšpusi līnijās, ar {{ui:Line spacing}} atstarpi, leņķī {{ui:Angle}}, abos virzienos vai vienā, ar pārklājumu, lai galva jau ir ātrumā, kad lāzers ieslēdzas; krusteniskā aizpildīšana pievieno otru gājienu 90°. Forma ar caurumu paliek atvērta pie cauruma.
- **Gravēt attēlu** pārvērš attēlu punktos (Floyd–Steinberg, Atkinson, sakārtoti vai vienkārši melnbalti ar slieksni) vai, ar *Pelēkie toņi*, mainīgā jaudā.
- Secība: vispirms attēli un aizpildījumi, tad līniju gravēšana, tad rievas un tad griezumi, lai izgriezta detaļa nepārvietotos, kamēr to gravē. Vienā slānī ceļi iet **no iekšpuses uz āru** (caurums pirms plāksnes, kurā tas atrodas), tuvākais nākamais.

## Priekšskatījums un saglabāšana

Priekšskatījumā redzams, ko dara galva: degošas līnijas krāsā, ātrās kustības pelēkā, un zaļš rāmis ap visu, kas dedzina. Zem tā ir izmērs, degšanas garums un laika aplēse (bez paātrinājuma; reāla mašīna prasa ilgāk). {{ui:Save G-code…}} ieraksta GRBL lāzera režīma G-kodu: `$32=1`, `M4` (vai `M3`) ar S vērtībām, `G0` un `G1` kustības, `M5` beigās. X0 Y0 ir darba apakšējais kreisais stūris, ja vien neizvēlaties rasējuma sākumpunktu: tur iestatiet savas mašīnas darba nulli. G-kods seko GRBL dokumentētajam lāzera režīmam; uz reāla lāzera to vēl nav izmēģināts.

## Nosūtīšana no pārlūkprogrammas

Chrome un Edge pārlūkos {{ui:Connect…}} pieprasa izvēlēties lāzera USB portu. Nekas nepievienojas un nenosūta, kamēr nenospiežat pogu. Vispirms nospiediet {{ui:Frame the job}}: galva apvelk darba kasti ar izslēgtu lāzeri (vai ar zemu jaudu, ko iestatījāt rādītājam), lai redzētu, kur tas degs. Tikai tad ieslēdzas {{ui:Send job}}, un tas atkal izslēdzas, ja kaut ko maināt. {{ui:Pause}} tur galvu, {{ui:Stop}} arī tur to, atiestata vadību (lāzers izslēdzas) un nosūta `M5`. Tur, kur Web Serial nav (Firefox, Safari un CadCraft Studio, kuras tīmekļa skatā tā vēl nav), saglabājiet G-kodu un nosūtiet to ar sava lāzera pašu programmu.

## Vēl nav izveidots

Citu vadību formāti (Ruida, Marlin lāzeri, ražotāju faili), cilnes un ievades līnijas, griezuma nobīde, materiālu bibliotēkas, rotācijas un Z asis, kameras izlīdzināšana.
