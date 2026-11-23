---
title: Virpošana uz virpas
summary: Apdariet, rupji apstrādājiet, apdariniet, izgrieziet rievas, nogriežiet, vītnējiet un urbiet virpotu detaļu no kontūras, ko detaļa veido, griežoties. Virpas instrumenti, padeves uz apgriezienu, virpas postprocesori un kas nav pārbaudīts.
keywords: virpošana, virpa, virpot, apstrāde, rupjā apstrāde, apdare, rieva, rievošana, nogriešana, nogriešana, vītne, vītnēšana, g32, g33, g96, nemainīgs virsmas ātrums, css, uzgaļa rādiuss, uzgalis, ieliktnis, stienis, patrona, diametrs, padeve uz apgriezienu, g71, g76
from: d8cc53b0
---

Ražošanai ir septiņas operācijas virpai. Tās strādā ar jebkuru detaļu: griež **kontūru, ko detaļa veido, griežoties** ap zagataves vidu, tāpēc detaļa, kas nav apaļa, tiek virpota līdz apaļai formai, kas to tur.

**Nekas šeit nav izmēģināts uz virpas.** Trajektorijas ir pārbaudītas pret ģeometriju ar testiem; abi virpas postprocesori seko vadības dokumentētajiem kodiem. Vispirms pārbaudiet programmu sava vadības simulatorā un gaisā.

## Iestatīšana

Cilnē **Iestatīšana**:

- **Instrumenta ass** ir vārpstas ass, virpas Z. Detaļas priekšpuse ir pie +Z; patrona tur otru galu.
- **Zagatave**: izvēlieties {{ui:Cilindrs}}, stieni. Tās augšējais nobīdījums ir tas, ko noņem sejas griezums.
- **Darba sākumpunkts**: zagatavītes augšas vai modeļa augšas centrs liek Z0 uz priekšējās sejas, parastā vieta.
- **Vadība**: {{ui:Fanuc tipa virpa (.nc)}} vai {{ui:LinuxCNC virpa (.ngc)}}. Frēzes postprocesors noraida virpošanas programmu un par to paziņo.
- **Maksimālie vārpstas apgriezieni**: robeža, ko virsmas ātrums nedrīkst pārsniegt.

{{ui:Vairāk}} Ražošanas rīkjoslā uzskaita septiņas virpošanas operācijas **Operācijas** cilnes augšā. Pirmā, ko pievienojat, atnes savu instrumentu: **virpas ieliktni** (uzgaļa rādiuss, ieliktņa leņķis, griezējmalas leņķis) vai **rievošanas asmeni** (platums, stūra rādiuss, cik dziļi tas sniedzas). Mainiet tos cilnē **Instrumenti**. Padeves ir uz apgriezienu, un ātrums ir virsmas ātrums m/min, ko vadība notur, mainoties diametram; dodiet instrumentam savus apgriezienus, lai fiksētu ātrumu.

## Operācijas

| Operācija | Ko tā dara |
|---|---|
| {{ui:Virsma}} | Nogludina bāzes priekšpusi līdz detaļai, pa vienam soļa dziļumam, no ārpuses līdz tikai aiz centra. |
| {{ui:Rupji}} | Gājieni pa Z ar **griešanas dziļumu** attālumā, līdz kontūrai plus **atstājamais materiāls**; tad vienu reizi gar kontūru, lai noņemtu pakāpienus. Ieleja starp divām pakāpēm tiek ieiet ar iegrimšanu par vienu griešanas dziļumu. |
| {{ui:Apdare}} | Viens gājiens gar kontūru ar daļu no instrumenta padeves. |
| {{ui:Rievot}} | Iegrimst asmeni blakus, kur vien tas var uzņemt vairāk nekā atlikušā materiāla robežu: rievas, ko virpas ieliktnis nevarēja sasniegt. **No / Līdz Z** to sašaurina. |
| {{ui:Nogriezt}} | Nogriež detaļu tieši aiz tās aizmugurējās sejas, līdz nedaudz aiz centra, ar iegrimšanām, ja iestatāt vienu. |
| {{ui:Vītne}} | Ārējā vītne: lielais diametrs, solis, garums, gājienu skaits. Dziļums 0 nozīmē 0,6134 × solis (60° vītne). Katrs gājiens noņem vienādu skaidu laukumu; atsperes gājieni atkārto pēdējo. |
| {{ui:Urbums}} | Urbis uz centra līnijas līdz dziļumam, ar iegrimšanām. |

## Kā instruments tiek turēts nost no detaļas

Ieliktnis tiek uztverts kā tas, kas tas ir: tā uzgaļa aplis, un aiz tā aizmugurējā mala, taisna līnija, kuras leņķis ir 180° mīnus griezējmalas leņķis un ieliktņa leņķis. Šī forma tiek nolaista uz kontūras katrā punktā gar Z, un trajektorija ir vieta, kur tā apstājas. Tātad:

- **Uzgaļa rādiuss jau ir trajektorijā.** Postprocesori neraksta `G41` vai `G42`; koordinātes ir instrumenta programmētais punkts (kvadrāta stūris ap uzgali).
- Ieliktnis **nevar sekot sienai, kas stāvāka par tā aizmugurējo malu**. Rieva aiz pakāpes tiek atstāta, un apdares operācija norāda, cik daudz no kontūras tā nevarēja sasniegt. To paņem {{ui:Rievot}} operācija.
- Materiāls tiek izsekots gar Z pēc katra griezuma, tāpēc rupjā apstrāde negriež gaisu, rievošana atrod, kas paliek, un katra operācija parāda noņemto tilpumu un to, vai tā iegriezās detaļā.

## Ierobežojumi

- **Tikai ārējā virpošana**: nav urbšanas stieņa, nav iekšējo rievu vai vītņu, nav sejas rievu.
- Viena vārpsta, detaļa turēta pie −Z. Nav apakšvārpstas, nav dzīvo instrumentu, nav C vai Y ass, nav stabila balsta vai astes balsta kustību.
- Trajektorijas ir taisnas kustības: līknes ir īsas līnijas tolerances robežās (nav `G2`/`G3`), un rupjā apstrāde un vītnēšana rakstīta gājienu pēc gājiena (nav `G71` vai `G76` ciklu).
- Vītnēšana ir taisni gājieni ar taisnu izvilkšanu beigās; dodiet vītnei atvieglojuma rievu. Vītne nav rādīta zagatavē.
- Urbšana uz centra nemaina zagataves modeli.
- Turētājs, revolvera galva un patrona netiek pārbaudīti. Iestatiet **Apturēt pie Z**, lai instruments paliktu nost no spīlēm.
- Padeves un ātrumi ir sākuma vērtības, tāpat kā frēzēšanā.
