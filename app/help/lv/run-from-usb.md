---
title: Darbība no USB diska
summary: Ko inženierijas rīki raksta un kur, lai CadCraft Studio varētu darboties no USB zibatmiņas vai jebkuras mapes bez instalētāja un bez administratora tiesībām: iestatījumi, ģeneratori, kešatmiņa un detaļu faili, un kas paliek uz zibatmiņas.
keywords: usb, portatīvs, bez instalētāja, administrators, admin, iestatījumi, datu mape, ģeneratori, kur tiek rakstīti faili, bezsaistē, privātums, piekļuve datoram
from: 263efc79
---

Inženierijas rīkiem (ģeneratoriem, inženierijas bibliotēkai, pārbaudēm un datu failiem) **nav vajadzīgas administratora tiesības** un **nav vajadzīgs instalētājs**. Tie raksta tikai to, kas uzskaitīts šeit, un neko citu.

| Kas | Kur tas glabājas |
|---|---|
| Jūsu detaļas ar to ģenerētajiem korpusiem, datu lapām un pārbaudēm | Detaļu fails, ko saglabājat (`.partcraft.json`), tajā vietā, kur to saglabājat. |
| Ģeneratori, ko atvērāt no failiem | Lietotnes pašas krātuvē: tīmekļa lapā – pārlūkprogrammas lokālajā krātuvē, portatīvajā Studio – mapē `data` blakus programmai. Ne vairāk kā 20. |
| Iestatījumi (voksela izmēri, ko iestatījāt, risinātāju pavedieni, izkārtojums) | Tā pati lietotnes krātuve. |
| Datu lapas, lauki, tīkli | Tikai tur, kur tos saglabājat: lejupielāde nonāk tajā vietā, kuru izvēlaties. |

Pašiem rīkiem **nav nekādu savu tīkla izsaukumu**: piegādātie ģeneratori ir faili lietotnes pašas mapē, bibliotēka un pārbaudes darbojas jūsu datorā fona procesā, kas nevar piekļūt tīklam, un inženierijas dati (ūdens un gaisa īpašības, materiāli) ir pašā lietotnē. Ģenerators, ko atverat no faila, tiek nolasīts jūsu datorā un nekur nepārsūtīts.

## Portatīvais Windows zip un Linux

Portatīvā Studio Windows versija glabā savus iestatījumus, kešatmiņu un papildinājumus mapē `data` blakus programmai. Linux AppImage glabā tos blakus sev, ja blakus atrodas fails ar nosaukumu `portable`; bez šā faila tas izmanto jūsu mājas mapi. Portatīvās macOS versijas nav: sistēma neļauj no lejupielādēta lietotnes rakstīt blakus sev. Apvalka paša portatīvās piezīmes (`Studio` palīdzība) uzskaita, ko programma raksta.

## Piekļuve datoram

Šeit nekas nepieprasa piekļuvi datoram. Printeri, seriālās iekārtas un USB ierīces ir atsevišķas: tās pieprasa piekļuvi, kad darbam tā ir vajadzīga, vienu reizi katrai ierīcei, un neviens ģenerators vai pārbaude tām nepieskaras.
