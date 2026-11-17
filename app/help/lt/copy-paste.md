---
title: Kopijavimas, įklijavimas ir dubliavimas
summary: Kopijuokite eskizo geometriją, elementus ir surinkimo detales; įklijuokite ten, kur spustelėjate, arba į tą pačią vietą; dubliuokite vienu žingsniu; ir sužinokite, kas kartu su kopija nukeliauja, o kas ne.
keywords: kopijuoti, įklijuoti, iškirpti, dubliuoti, iškarpinė, įklijuoti vietoje, pasirinkti viską, nieko nepasirinkti, naikinti, ctrl c, ctrl v, ctrl d, egzempliorius, komponentas, kopijuoti eskizą, kopijuoti elementą, kopijuoti detalę
from: 611307d7
---

Įrankių juostos grupėje {{ui:Redaguoti}} yra {{ui:Anuliuoti}}, {{ui:Perdaryti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}} ir meniu {{ui:Daugiau}} su {{ui:Iškirpti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Įklijuoti vietoje}}, {{ui:Dubliuoti}}, {{ui:Naikinti}}, {{ui:Pasirinkti viską}} ir {{ui:Nieko nepasirinkti}}, kiekvienas su savo klavišu. Tai, ką jie kopijuoja, priklauso nuo to, kur esate: geometrija atviame eskize, elementas istorijoje ar detalė surinkime.

Pilkai nuspalvintas elementas šiuo metu negali veikti. Užveskite ant jo pelę: patarimas parodo priežastį, pavyzdžiui „Pirmiausia pasirinkite eskizo geometriją“ arba „Iškarpinėje yra Sketch2 ir Extrude2: elementai įklijuojami į istoriją, todėl pirmiausia išeikite iš eskizo“.

| Veiksmas | Klavišas | Eskize | Istorijoje | Surinkime |
|---|---|---|---|---|
| Kopijuoti | {{key:Mod+C}} | Pasirinkti taškai ir kreivės | Pasirinktas eskizas, ištempimas, sukimas ar skylė (kartu su savo eskizu) | Pasirinkta detalė |
| Iškirpti | {{key:Mod+X}} | Nukopijuoti, tada ištrinti | Nukopijuoti, tada ištrinti elementą | Nukopijuoti, tada pašalinti detalę |
| Įklijuoti | {{key:Mod+V}} | Kopija seka žymeklį; spustelėkite, kur ji eis | Prideda kopiją istorijos pabaigoje | Nauja kopija šalia kitų detalių |
| Įklijuoti vietoje | {{key:Mod+Shift+V}} | Tose pačiose koordinatėse | Tas pats kaip Įklijuoti | Toje pačioje vietoje kaip nukopijuota detalė |
| Dubliuoti | {{key:Mod+D}} | Nukopijuoti ir perkelti iš karto; iškarpinė paliekama nepaliesta | Antra kopija iš karto po jūsų | Antra kopija šalia kitų detalių |
| Naikinti | {{key:Delete}} | Pasirinkimas | Elementas (klausia, jei jį naudoja kiti) | Detalė arba jungtis |
| Pasirinkti viską | {{key:Mod+A}} | Viskas eskize | Nepasiekiama | Nepasiekiama |
| Nieko nepasirinkti | {{key:Esc}} | Panaikina pasirinkimą | Panaikina pasirinkimą ir parinkimus | Panaikina pasirinkimą |

Kiekvienas įklijavimas, dubliavimas ir iškirpimas yra vienas žingsnis anuliavimo sąraše: {{key:Mod+Z}} jį atšaukia, {{key:Mod+Y}} grąžina.

## Eskize

1. Pasirinkite, ką kopijuoti: spustelėkite, {{key:Shift}}+spustelėkite daugiau, vilkite langą arba paspauskite {{key:Mod+A}}, kad pasirinktumėte viską.
2. Paspauskite {{key:Mod+C}} arba pasirinkite {{ui:Kopijuoti}}. Būsenos juostoje rodoma, kas nukopijuota.
3. Paspauskite {{key:Mod+V}} arba pasirinkite {{ui:Įklijuoti}}. Brūkšninė kopija seka žymeklį ir laikoma už savo vidurio. Ji prisitraukia prie taškų: nukopijuoto apskritimo centrą uždėkite ant taško spustelėdami tą tašką.
4. Spustelėkite, kur ji turi eiti. Įklijuota geometrija lieka pasirinkta, todėl ją galite iš karto tempti ar pridėti ryšių. {{key:Esc}} atšaukia įklijavimą.

Kas nukeliauja kartu:

- Nukopijuota linija, apskritimas ar lankas atsineša savo galo taškus ir centrą.
- Ryšiai ir matmenys **tarp nukopijuotų objektų** nukeliauja kartu: nukopijuotas stačiakampis lieka stačiakampiu su savo dydžiais.
- Ryšiai **su geometrija, kurios nekopijavote**, ir su pradžios tašku, panaikinami. Būsenos juostoje jie suskaičiuojami: „2 ryšiai su geometrija, esančia už kopijos, nenukeliaus“. Taigi įklijuota kopija gali laisvai judėti, kol ją su ryšiais ar matmenimis nesusiesite.
- Fiksuotas taškas lieka fiksuotas, naujoje savo padėtyje.

{{ui:Įklijuoti vietoje}} kopiją padeda tiksliai originalo koordinatėse, tame pačiame ar kitame eskize: patogu perkelti profilį iš vieno eskizo į kitą. Tame pačiame eskize kopija guli ant originalo; nutempkite ją.

{{ui:Dubliuoti}} ({{key:Mod+D}}) nukopijuoja pasirinkimą ir iš karto pradeda jį dėti, nepaliesdamas to, kas yra iškarpinėje.

:::tip
Kad skylės centrą ar tarpą pakartotumėte kelis kartus, nukopijuokite jį vieną kartą ir įklijuokite kelis kartus: kiekvienas {{key:Mod+V}} pradeda naują kopiją, kuri seka žymeklį.
:::

## Istorijoje

1. Istorijoje spustelėkite eskizą, ištempimą, sukimą ar skylę.
2. {{key:Mod+C}} nukopijuoja jį. Elementas, pagrįstas eskizu, nukopijuojamas kartu su savo eskizu.
3. {{key:Mod+V}} prideda kopiją istorijos pabaigoje (prie atsukimo juostos, kai esate atsukę), su naujais pavadinimais, pavyzdžiui Sketch3 ir Extrude2.

Kopija yra toje pačioje plokštumoje ar paviršiuje kaip originalas, todėl ji kuriama ant jo, o detalė atrodo tokia pati. Kad perkeltumėte kopiją, pasirinkite naują eskizą ir pakeiskite jo plokštumą dešiniajame skydelyje arba jį atidarykite ir nutempkite ar iš naujo nustatykite profilio matmenis.

- Įklijuokite į **kitą detalę**: atidarykite tą detalę ir paspauskite {{key:Mod+V}}. Kai kopijos eskizas buvo ant paviršiaus, kurio ta detalė neturi, jis atsiduria ant priekinės plokštumos, ir apie tai pranešama būsenos juostoje.
- {{ui:Dubliuoti}} atlieka kopijavimą ir įklijavimą vienu žingsniu, toje pačioje detalėje.
- {{ui:Iškirpti}} nukopijuoja elementą, tada jį ištrina (pirmiausia klausiant, jei jį naudoja kiti elementai).

Masyvų, veidrodžių, suapvalinimų, nuožulninimų, išdrožimų ir importuotų kietųjų kūnų nukopijuoti negalima: jie kabo ant šioje detalėje pasirinktų briaunų, paviršių ar elementų. Vietoj to nukopijuokite eskizą ar elementą, ant kurio jie sukurti, arba padarykite jų masyvą su {{ui:Tiesinis}} ar {{ui:Apskritiminis}}.

## Surinkime

1. Spustelėkite detalę vaizde arba kairiajame sąraše.
2. Pasirinkite {{ui:Dubliuoti}} ({{key:Mod+D}}) arba {{key:Mod+C}}, tada {{key:Mod+V}}.

Nauja kopija yra **ta pati detalė**: pakeiskite vieną, ir pasikeičia kiekviena kopija. Ji atsiranda 20 mm į dešinę nuo visko, kas jau yra surinkime, pasukta taip pat kaip kopija, ir lieka ten, kol jungtis ją padeda. {{ui:Įklijuoti vietoje}} ({{key:Mod+Shift+V}}) padeda ją tiksliai ten, kur yra nukopijuota detalė; sujunkite ją, kad perkeltumėte (slankiosios jungties poslinkis ją stumia išilgai).

Įklijuojant detalę, nukopijuotą iš kito surinkimo, detalė atsineša ir pati, kaip ir {{ui:Įterpti}} iš jos failo. {{ui:Pridėti kopiją}} Surinkimo grupėje daro tą patį kaip {{ui:Dubliuoti}} ir veikia, kai nieko nepasirinkta (nukopijuoja paskutinę detalę).

## Iškarpinė

- Tai PartCraft iškarpinė, o ne kompiuterio: PartCraft geometrijos į kitą programą įklijuoti negalite, kaip ir teksto į PartCraft vaizdus.
- Ji saugoma šioje naršyklėje, todėl kitas PartCraft skirtukas gali įklijuoti tai, ką nukopijavote. Ji nuskaitoma ir tikrinama kaip atidarytas failas; bet kas sugadinta ar iš kitos versijos atmetama.
- Detalė su dideliu importuotu STEP failu gali būti per didelė, kad naršyklė ją išlaikytų: tada ji įklijuojama tik šiame skirtuke.
- Skaičių laukelyje ar pagalbos paieškoje {{key:Mod+C}} ir {{key:Mod+V}} kopijuoja ir įklijuoja tekstą įprastai.

Brėžinio lape kopijavimas ir įklijavimas kol kas nepasiekiami; {{ui:Naikinti}} ir {{ui:Nieko nepasirinkti}} veikia su pasirinktu simboliu. Žr. [Kas dar nesukurta](topic:not-built-yet).
