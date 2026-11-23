---
title: 3D rupjā apstrāde un atlikuma apstrāde
summary: Notīriet materiālu ap visu modeli līmeņiem ar plakanu, ar noapaļotu stūri vai lodveida pirksta frēzi, atstājot materiālu apdarei, tad ļaujiet mazākam instrumentam griezt tikai tur, kur pirmais atstāja materiālu. Ko garantē trajektorijas un ko ne.
keywords: 3D rupjā apstrāde, rupjā apstrāde, rupji, atlikuma apstrāde, atlikušais materiāls, atstājamais materiāls, soļa dziļums, līmeņi, z līmenis, ūdenslīnija, slīpums, iegrimšana, iegriešanās, mazāks instruments
from: 29ddc266
---

Divas operācijas Ražošanā, zem {{ui:Vairāk}} rīkjoslā, notīra materiālu no **visa modeļa** 3D, turot instrumentu vertikāli (vai gar operācijas pašas [instrumenta virzienu](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). Tām nav atlases.

## 3D rupjā apstrāde

{{ui:3D rupjā}} strādā no zagataves augšas uz leju pa vienu **soļa dziļumu** vienlaikus. Katrā līmenī tā notīra visu, ko instruments var sasniegt, nepieskaroties modelim: taisnas rindas ar **soļa soli** starp tām (daļa no instrumenta diametra), tad vienu reizi apkārt tā apgabala malai, ko drīkst sasniegt, tā ka sienas tiek sekotas un neatstāj rindu pakāpienu plānā.

- **Atstājamais materiāls**: cik tālu instruments visur paliek no modeļa apdarei (noklusējums 0,5 mm).
- **Līmenis katrai plakanai virsmai**: papildu līmenis katras modeļa plakanas virsmas augstumā (plus atstājamais materiāls), lai grīda nepaliktu gandrīz pilna soļa dziļuma augstumā.
- **Ignorēt materiālu, kas plānāks par**: materiāls, kas plānāks par šo, uz augšu vai sāniski, nav vērts gājiena (0,05 mm rupjajai apstrādei, 0,5 mm atlikuma apstrādei, lai matu pavediens gar sienu neaizsūtītu mazāku instrumentu apkārt katrai sienai).
- **Apakša**: zemāk par šo augstumu nekas netiek griezts. Tukšs nozīmē modeļa apakšu.

Tā sākas no zagataves **kādā to atstājušas iepriekšējās operācijas**: pēc sejas gājiena tā negriež gaisu, kur sejas frēze jau bijusi.

Nolaižoties: kur instruments sastaptu materiālu ceļā lejup, tas ieiet pa savu gājienu ar **ieejas leņķi**, uz priekšu un atpakaļ līdz diviem instrumenta diametriem. Gājiens, kas par īsu tam, tiek iegrimts taisni lejup ar **iegrimšanas padevi**; operācija tos skaita un brīdina, jo instruments, kas negriež savā centrā, to nedrīkst darīt.

## Atlikuma apstrāde

{{ui:Atlikums}} ir tā pati stratēģija **mazākam instrumentam pēc lielāka**. Tā nolasa zagataves simulāciju un griež tikai tur, kur materiāls vēl stāv: iekšējos stūros, kuros lielākais instruments nevarēja pagriezties, griezumos, kuros tas neiederējās, pakāpienos, ko tas atstāja uz slīpumiem. Visur citur tā nedara neko, tāpēc tās ceļš ir maza daļa no tā, ko tas pats instruments paņemtu uz svaigas zagataves.

Novietojiet to pēc rupjās apstrādes operācijas un izvēlieties mazāko instrumentu. Tai vajag iepriekšējo operāciju zagataves simulāciju, ko darba vide vienmēr palaiž.

## Cik labas ir trajektorijas

- **Nav iegriešanās.** Instrumenta pozīcijas aprēķinātas režģī, ar griezēju nedaudz lielāku nekā patiesībā (par 1,4 režģa šūnām sāniski un par atstājamo materiālu), tāpēc, kur tas stāv, tas ir tīrs no modeļa. Testi pārbauda katru griešanas punktu pret precīzu instrumentu uz precīzā tīkla, un zagataves simulācija pēc katras palaišanas: nav iegriešanās, nav ātras kustības caur materiālu.
- **Cena par to**: sienas paliek nedaudz vairāk nekā atstājamais materiāls, līdz summai, kas rādīta kā "Papildu materiāls uz sienām" operācijā (ap 0,5 mm Ø6 instrumentam, mazāk mazākam). Apdares gājiens to noņem.

Ko šīs trajektorijas nav:

- Rindas ir taisnas līnijas, nevis detaļas formas nobīdes vai nemainīgas iesaistīšanās līknes. Tās veic vairāk pacelšanos un gaisa kustību nekā nobīdes vai adaptīvā stratēģija, un pirmā rinda katrā līmenī nogriež instrumenta pilno platumu. Kabatām ar plakanu grīdu labāka rupjā apstrāde ir [Adaptīvs](topic:manufacture).
- Instrumenta kāts un turētājs netiek pārbaudīti. Brīdinājums parādās, kad griezums ir dziļāks par rievas garumu.
- Paslēpti izgriezumi nav redzami: modelis ir tas, ko instruments sastop, krītot pa savu asi. Lai rupji apstrādātu sānu, dodiet otrai operācijai [slīpu instrumenta virzienu](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Atlikuma apstrāde zina zagatavi tikai tik labi, cik labi to zina simulācijas režģis (0,1 līdz 2 mm šūnas, atkarībā no detaļas izmēra).
- Lielā detaļā programma ir gara (virs 100 000 kustību 200 mm atloka ar Ø6 instrumentu) un aprēķināšana aizņem apmēram minūti, un katra izmaiņa darba vidē aprēķina visu programmu no jauna. Rupjajai apstrādei izmantojiet lielāko instrumentu, kas ietilpst.
- Pārbaudiet rezultātu sava iekārtas simulatorā pirms griešanas.
