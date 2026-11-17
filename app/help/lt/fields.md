---
title: Laukai: formos kaip atstumai
summary: Kas yra laukas (forma, saugoma kaip atstumas iki jos paviršiaus), kaip jį sukurti iš primityvų, loginių operacijų, grotelių ir minimalių paviršių scenarijuje, kaip jis tampa kūnu ir kodėl tas pats scenarijus visada duoda tuos pačius baitus.
keywords: laukas, ženklinis atstumas, sdf, vokselis, giroidas, tpms, grotelės, loginė operacija, nuokrypis, sienelė, sumaišymas, dviguba kontūravimas, deterministinis, sandarus, uždaras tinklas, plytelė
from: faab7480
---

**Laukas** (field) aprašo formą atstumu nuo bet kurio taško iki jos paviršiaus: viduje neigiamas, paviršiuje nulis, išorėje teigiamas. Sfera, kurios spindulys 5, yra „atstumas iki centro minus 5“. Formų jungimas yra aritmetika su atstumais: sąjunga yra mažesnis iš dviejų, sankirta – didesnis, o viena formos atėmimas iš kitos yra didesnis iš pirmosios ir antrosios reikšmės, pakeistos ženklu. Formos padidinimas 1 mm atima 1 iš atstumo; tuščiavidurė sienelė yra atstumo absoliutinė reikšmė.

Todėl laukai tinka grotelėms, kanalams ir kintamo storio sienelėms: giroido paviršius yra „sinusų suma lygi nuliui“, o sienelė, kuri per detalę storėja nuo 1 iki 3 mm, yra skaičius, kuris keičiasi per visą detalę.

## Nuo lauko iki kūno

`to_body(field, h)` ima lauką tinklelyje, kurio taškai yra per `h` milimetrų vienas nuo kito, ir palieka tik taškus arti paviršiaus (retas 8 × 8 × 8 plytelių tinklelis). Paviršių sukuria **dviguba kontūravimu** (dual contouring): viena viršūnė kiekvienoje paviršiaus ląstelėje, pastatyta ten, kur susikerta paviršiaus plokštumos, todėl aštri briauna lieka aštri iki vieno vokselio. Paviršius uždaras, ir kiekviena briauna priklauso lygiai dviem trikampiams; ataskaita tai nurodo. Elementas, plonesnis nei maždaug trys vokseliai, gali susispausti, ir tada ataskaita praneša, kad kūnas nėra uždaras kietasis kūnas, o ne slepia tai.

Vokselio dydis yra tikslumas: 25 vokselių skersmens sferos tūris nukrypsta keliomis šimtosiomis procento dalimis, o sienelė yra tiek tiksli, kiek jos vokseliai. Kuo grubesnis tinklelis, tuo greičiau veikia.

## Visada tie patys baitai

Laukas neturi laikrodžio ir atsitiktinio skaičiaus. Giroido sinusas ir kosinusas bei visos eksponentės, logaritmai ir laipsniai bibliotekoje skaičiuojami iš paprastos aritmetikos, todėl Node, Chrome, Firefox ir Safari duoda tuos pačius bitus. Tinklelis apeinamas fiksuota tvarka, todėl tas pats scenarijus su tais pačiais įvesties duomenimis duoda baitais identiškus tinklus ir duomenų lapus bet kuriame kompiuteryje ir bet kokiam darbo gijų skaičiui. Tai patikrinta, įskaitant naršyklę, palyginti su Node.

## Kur toliau

[Parašykite generatorių](topic:write-a-generator) sukuria detalę su laukais; [Inžinerinė biblioteka](topic:engineering-library) ją dimensionuoja.
