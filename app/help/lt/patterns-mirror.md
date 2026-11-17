---
title: Kartojimai ir veidrodiniai elementai
summary: Kartokite elementus eilute su Tiesinis, sukite aplink ašį su Apskritiminis, o elementus ar visą kūną nukopijuokite per plokštumą su Veidrodis.
keywords: kartojimas, tiesinis kartojimas, apskritiminis kartojimas, poliarinis masyvas, masyvas, veidrodis, simetriškas, kopijuoti elementus, varžtų apskritimas, pradinis elementas, veidrodinis kūnas
from: 702e9edb
---

Kartojimai ir veidrodiniai atspindžiai kopijuoja jau sukurtus elementus. Kopijos yra istorijos dalis: pakeitus originalą, kopijos seka paskui jį.

Kas nukopijuojama, priklauso nuo to, ką elementas daro: iškyšos kartojimas prideda medžiagos, o išpjovos ar skylės kartojimas ją pašalina. Kartojimus galima kartoti ir veidrodinti dar kartą. Importuotą STEP kietąjį kūną galima kopijuoti; apvalinimų, nuožulnų ir apvalkalų — negalima.

## Tiesinis kartojimas

1. Istorijoje pažymėkite kopijuojamą elementą (pavyzdžiui, Skylę arba Išpjovą). Jei nieko nepažymėta, naudojamas paskutinis kietasis elementas.
2. Pasirinkite {{ui:Tiesinis}}. Išilgai X atsiranda trys kopijos, nutolusios 20 mm.
3. Dešiniajame skydelyje nustatykite:

| Nustatymas | Ką daro | Numatytoji reikšmė |
|---|---|---|
| **Kopijuojami elementai** | Pažymėkite visus kopijuojamus elementus. Sąraše rodomi tik elementai virš kartojimo | Pažymėtas elementas |
| **Kryptis** | X ašis, Y ašis, Z ašis, tiesė arba ašinė linija iš bet kurio ankstesnio eskizo, sukimo ašis arba pasirinktas kraštas | X ašis |
| **Tarpas (mm)** | Atstumas tarp kaimynų | 20 |
| **Skaičius** | Bendras kiekis, **įskaitant originalą** (nuo 1 iki 1000) | 3 |
| **Atvirkštinė kryptis** | Kopijos eina priešinga kryptimi | Išjungta |

### Krašto naudojimas kaip kryptis

1. Rodinyje spustelėkite tiesų detalės kraštą. Dešiniajame skydelyje rodoma **Kraštas** ir jo ilgis.
2. Pasirinkite {{ui:Tiesinis}}: kartojimas eina palei tą kraštą.

Arba pažymėkite kartojimą, pasirinkite kraštą ir **Kryptyje** pasirinkite „Pasirinktas kraštas (naudoti dabar pasirinktą)“. Pasirinktas kraštas yra fiksuotas erdvėje: jis nesekvia vėlesnių pakeitimų. Eskizo tiesė seka savo eskizą.

## Apskritiminis kartojimas

1. Pažymėkite kopijuojamą elementą (pavyzdžiui, vieną skylę arti disko krašto).
2. Pasirinkite {{ui:Apskritiminis}}. Aplink visą apskritimą lygiais tarpais atsiranda šešios kopijos.
3. Nustatykite:

| Nustatymas | Ką daro | Numatytoji reikšmė |
|---|---|---|
| **Kopijuojami elementai** | Kaip ir Tiesiniame | Pažymėtas elementas |
| **Ašis** | X, Y arba Z ašis, eskizo tiesė, sukimo ašis arba pasirinktas kraštas | Paskutinio sukimo ašis, jei yra, kitaip Y ašis |
| **Kampas (°)** | 360 lygiai paskirsto kopijas aplink visą apskritimą. Mažesnė reikšmė paskirsto jas per tą kampą, pirma ir paskutinė — galuose | 360 |
| **Skaičius** | Bendras kiekis, įskaitant originalą | 6 |
| **Atvirkštinė kryptis** | Sukasi priešinga kryptimi | Išjungta |

Pasaulio ašys eina per pradžios tašką. Diskui, kuris necentruotas pradžios taške, naudokite eskizo ašinę liniją arba sukimo ašį.

### Pavyzdys: aštuonios flanšo varžto skylės

1. Apsukite flanšą (žr. [Sukite tekinę detalę](topic:revolve)) apie Y ašį.
2. Nubraižykite eskizą ant plokščio flanšo viršutinio paviršiaus, uždėkite vieną tašką ant varžtų apskritimo ir sukurkite Skylę.
3. Pažymėję Skylę, pasirinkite {{ui:Apskritiminis}}. Ašis jau yra „Axis of Revolve1“.
4. Nustatykite **Skaičius** reikšmę `8`.

## Veidrodis

1. Istorijoje pažymėkite veidrodinamą elementą arba nieko nepažymėkite, kad veidrodintumėte **visą iki šiol sukurtą kūną**.
2. Pasirinkite {{ui:Veidrodis}}. Atspindima per **Dešinės plokštumą**.

Norėdami veidrodinti visą kūną per detalės paviršių, pirmiausia spustelėkite tą plokščią paviršių, tada pasirinkite {{ui:Veidrodis}}. (Spustelėjus paviršių, istorijos pažymėjimas panaikinamas, todėl visada veidrodinamas visas kūnas.)

Nustatymai dešiniajame skydelyje:

- **Veidrodis**: pažymėkite **Visas kūnas (kaip sukurta iki šiol)** arba nuimkite žymę ir pažymėkite kopijuojamus elementus.
- **Veidrodinė plokštuma**: Priekio plokštuma, Viršaus plokštuma, Dešinės plokštuma, dabar naudojamas paviršius („A face of Extrude1“ arba „A fixed plane“) arba „The face picked now“. Norėdami veidrodinti pasirinktus elementus per paviršių: istorijoje pasirinkite Veidrodį, rodinyje spustelėkite paviršių ir pasirinkite „The face picked now“.

Veidrodinant visą kūną per paviršių, detalė padvigubėja, pavyzdžiui, pusinis laikiklis tampa pilnu.

## Pranešimai

- „Pirmiausia sukurkite elementą kopijavimui.“ arba „Pirmiausia sukurkite kietąjį kūną.“ Dar nėra ko kopijuoti.
- „Pasirinkite elementus kopijavimui.“ Visi **Kopijuojami elementai** langeliai išvalyti.
- „Extrude2 neturi kietojo kūno kopijavimui.“ Tas elementas nepavyko arba yra išjungtas.
- „Fillet1 keičia kūno briaunas ar sieneles; jo negalima nukopijuoti. Kopijuokite elementus, kurie sukuria kietuosius kūnus (ištraukas, sukimus, skyles, importus).“ Apvalinimų, nuožulnų ir apvalkalų negalima kartoti ar veidrodinti: pirmiausia kartokite, tada apvalinkite.
- „Veidrodinti dar nėra kūno.“

:::note
Kartojimo kopijų negalima praleisti po vieną, o kartojimas negali sekti eskizo kreivės. Eskizų kartojimai ir veidrodiniai atspindžiai dar nesukurti: pakartotinę eskizo geometriją braižykite rankiniu būdu arba su **Pridėti pagal koordinates**.
:::
