---
title: 4 ir 5 ašių apdirbimas
summary: Pasakykite PartCraft, kokias sukamąsias ašis turi staklės, pasukite įrankį bet kuriai įprastai operacijai, apdailinkite paviršių rutuliniu galiniu frezu, kuris lenkiasi pjaudamas, arba sukite detalę po įrankiu 4 ašimi. Kas įrašoma į G-kodą ir kas nėra įrodyta.
keywords: 5 ašys, penkios ašys, 4 ašys, ketvirtoji ašis, daugiaašis, 3+2, fiksuota padėtis, pasvirimas, pasvirusis įrankis, sukamasis, stalas, galvutė, A ašis, B ašis, C ašis, TCP, RTCP, įrankio centro taškas, G43.4, atvirkštinis laikas, G93, kinematika, sukimosi centras, šoninis pjovimas, kampas
from: c4f1c491
---

Gamyba gali laikyti įrankį kampu ir gali perkelti sukamąsias ašis pjaudama. Tai daro trys dalykai, nuo paprasčiausio iki sudėtingiausio.

**Niekas čia nebuvo paleista staklėse.** Takai patikrinti pagal geometriją testais, o G-kodas perskaitytas atgal, tačiau įmontuoti postprocesoriai seka valdiklių dokumentuotus kodus, o ne jokias staklės priešais mus. Prieš tai, kai programa prieina prie metalo, įrodykite ją savo valdiklio imitatoriuje ir ore.

## Staklių sukamosios ašys

Skirtuke **Paruoša** {{ui:Sukamosios ašys}} nurodo, ką turi staklės:

| Pasirinkimas | Staklės |
|---|---|
| Nėra (3 ašys) | Paprastas frezas. Bet kuri operacija, kuriai reikia pasvirusio įrankio, įspėja, o postprocesorius jos neįrašo. |
| A (sukasi apie X) | Viena sukamoji ašis išilgai X: 4 ašies stalas arba indeksatorius. Įrankis gali pasvirti tik Y–Z plokštumoje. |
| B (sukasi apie Y) | Viena sukamoji ašis išilgai Y. Įrankis gali pasvirti tik X–Z plokštumoje. |
| A ir C | Pasvirimo ašis apie X, nešama arba nešanti posūkį apie Z: stalas su pasvirimu arba galvutė. |
| B ir C | Tas pats, su pasvirimu apie Y. |

Tada:

- **Nešama**: {{ui:Stalas (sukasi detalė)}} arba {{ui:Galvutė (sukasi įrankis)}}. Stalas sukasi priešinga kryptimi, kad tą patį paviršių atvestų po įrankiu, todėl kiekvieno kampo ženklas priklauso nuo to.
- **Valdiklis išlaiko įrankio galiuką takelyje (TCP)**: įjungus, programos X Y Z yra įrankio galiukas detalės savo koordinatėse, o valdiklis atlieka likusį darbą (įmontuoti Fanuc tipo ir LinuxCNC postprocesoriai įrašo `G43.4` įrankio ilgiui). Išjungus, stalinėse staklėse PartCraft įrašo X Y Z kaip sukamasis stalas neša detalę, apie **sukimosi centrą**, kurį nurodote (darbinėse koordinatėse; 0, 0, 0, kai darbinis nulis yra centre). Galvutės staklėms reikia įjungto TCP: be jo programai reikėtų staklių sukimosi ilgio, kurio PartCraft nežino.
- **Pasvirimo riba**: kiek toli nueina pasvirimo ašis.

Staklės skiriasi tuo, kuria kryptimi jos laiko teigiamą. Jei ašis sukasi ne ta kryptimi, pakeiskite ženklą postprocesoriaus kopijoje ([Redaguojami postprocesoriai](topic:post-processors)).

## Pasvirusis įrankis įprastai operacijai

Kiekviena frezavimo operacija (paviršius, kišenė, adaptyvus, kontūras, gręžimas, nuožulninimas, lygiagretumas, banguotumas, 3D šiurkštinimas, likutis) turi **Įrankio pasvirimas** ir **Pasvirimas link**: įrankio kryptis tik tai operacijai, matuojama nuo sąrankos įrankio ašies. Tai yra 3+2 apdirbimas: sukamosios ašys nuvažiuoja į padėtį ir lieka ten, kol trys ašys pjauna.

- Įveskite du kampus arba spauskite {{ui:Įrankis statmenai paviršiui}} ir spustelėkite plokščią paviršių: įrankis bus nukreiptas tiesiai į jį.
- Pasirinkite operacijos paviršius ir briaunas įprastai. Tai, kas laikoma dugnu arba skyle, sprendžiama išilgai pasvirusio įrankio.
- Ruošinio dėžė tai krypčiai yra ta, kuri laiko pasuktą ruošinį, todėl aukščiai ir tarpai yra saugūs nuo tos pusės.

G-kode prieš operaciją įrankis pakyla, sukamosios ašys pasisuka, o įrankis nusileidžia virš savo pirmojo taško. Stalinėse staklėse be TCP lankai lieka lankais, o gręžimo ciklai – ciklais (įrašomas rėmas pasisuka tik apie Z). Su TCP pasvirusioje plokštumoje lankai tampa trumpomis linijomis, o ciklai – judesiais, kuriuos jie reiškia.

Ruošinio imitavimas pasvirusią kryptį paleidžia **atskirai**: rodo, ką ta operacija pjauna iš viso ruošinio, matomo iš jos pusės, ir randa įpjovas ten, tačiau pjūviai, padaryti iš kitų krypčių, nėra perkeliami.

## 5 ašių apdaila

{{ui:Daugiau}} Gamybos įrankių juostoje išvardija šią ir kitą operaciją **Operacijos** skirtuko viršuje.

{{ui:5 ašys}} yra [lygiagretumo apdailos perėjimas](topic:finish-3d) su **rutuliniu galiniu frezu, kuris lenkiasi pjaudamas**. Rutulys pjauna sfera, o sfera yra ta pati, kad ir kaip įrankis lenktųsi apie savo centrą, todėl rutulys seka tiksliai tą patį taką, kurį duotų 3 ašių perėjimas, ir keičiasi tik įrankio kryptis:

- **Link paviršiaus**: 1 = statmenai paviršiui, 0 = vertikaliai, bet kas tarp jų.
- **Lenkti pirmyn**: laipsniai pjovimo krypties kryptimi, kad pjautų ne nejudantis rutulio centras.
- **Didžiausias pasvirimas**: įrankis niekada nesilenkia toliau nei tai nuo sąrankos ašies.

Kur kotas liestų modelį, pasvirimas atitraukiamas, kol išsilygina, ir operacija nurodo, kiek yra tokių taškų. Kiekvienas perėjimas įeinamas ir išeinamas tiesiu pakėlimu.

## Sukamoji apdaila (4 ašis)

{{ui:Sukamoji}} skirta detalei, laikomai išilgai **darbinės X** sukamoje ašyje. Detalė sukasi, o rutulinis galinis frezas, visada nukreiptas į ašį, seka jos paviršių:

- **Perėjimai**: {{ui:Išilgai ašies}} (linijos išilgai X, vienas žingsnis sukimosi tarpais) arba {{ui:Aplink detalę}} (žiedai, vienas žingsnis X tarpais).
- **Ašis Y / Z**: kur yra ašis. Tuščia reiškia ruošinio vidurį. Stalinėse staklėse be TCP tai turi būti sukimosi centras sąrankoje; operacija įspėja, kai taip nėra.
- **Nuo / Iki X** ir **Nuo / Iki kampo**: ilgio ir posūkio dalis, kurią pjauti.

Rutulio aukštis virš ašies kiekviename taške yra tikslus rutulio nusileidimas ant detalės tinklelio, nuo tos pusės.

## Apribojimai

- 5 ašių ir sukamoji apdaila priima tik **rutulinį galinį frezą**. Nėra šoninio pjovimo (įrankio šono ant tiesios sienos), nėra srautinių linijų išilgai paviršiaus krypčių, nėra daugiaašio šiurkštinimo ir nėra automatinio pasvirimo parinkimo, kad būtų išvengta susidūrimo.
- 5 ašių ir sukamieji takai **neleidžiami per ruošinio imitavimą**, kuris yra aukščio žemėlapis ir negali laikyti pasvirusio pjūvio.
- Kotas 5 ašių apdailoje tikrinamas palyginus su modeliu, matomu iš viršaus; laikiklis, velenas ir pati staklė nėra tikrinami niekur.
- Sukamoji apdaila pjauna tik tai, ką įrankis mato žiūrėdamas į ašį.
- 5 ašių apdailos skaičiavimas didelei detalei trunka minutę ar ilgiau: kotas tikrinamas kiekviename kiekvieno perėjimo taške.
- Kai sukamosios ašys juda kartu su tiesinėmis ir TCP išjungtas, įmontuoti postprocesoriai padavimą įrašo kaip atvirkštinį laiką (`G93`), o paskui grįžta prie `G94`.
- Pasvirusios darbo plokštumos kodas (`G68.2` ir panašūs) neįrašomas, o staklių specifinių ribų, atsukimo ar susidūrimo zonų nežinoma.
