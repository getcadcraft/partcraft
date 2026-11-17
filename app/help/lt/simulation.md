---
title: Įtempių ir įlinkio patikrinimas (Modeliavimas)
summary: Pasirinkite medžiagą, fiksuokite paviršius, pridėkite jėgas, slėgius ar paties detalės svorį, skaičiuokite ir skaitykite modelyje von Mises įtempius, poslinkį, saugos koeficientą, reakcijas ir natūraliuosius dažnius, su tuo, ką metodas gali ir ko negali pasakyti.
keywords: modeliavimas, FEA, tiesioginė analizė, atnaujinti redaguojant, sulaužyti, kas lūžta pirmiausia, apkrovos koeficientas, netiesinis, plastiškumas, takumas, plastinė deformacija, bilinearinis, kontaktas, kontakto pora, bauda, sujungtas, kontaktas be trinties, CalculiX, .inp, .frd, baigtiniai elementai, įtempis, deformacija, von Mises, poslinkis, įlinkis, saugos koeficientas, takumo riba, reakcija, apkrova, jėga, slėgis, gravitacija, savasvoris, fiksuotas, be trinties, atrama, apribojimas, medžiaga, plienas, aliuminis, titanas, ABS, PLA, nailonas, natūralusis dažnis, modalinis, vibracija, tinklelis, elemento dydis, tetraedrinis, tetraedrai, tetraedrų tinklelis, vokselis, tinklelio kokybė, pagrindinis įtempis, ekvivalentinė deformacija, paklaidos įvertis, lenktieji paviršiai, skylės, apvalinimai, adaptyvus, automatinis tikslinimas, h-adaptyvus, konvergencija, tinklelio konvergencija, tikslusis paviršius, sfera, kūgis, toras, splainas, laisvos formos
from: 6f2fdec1
---

Modeliavimo darbo sritis atsako į klausimą „ar ji lankstysis ar lūš nuo šios apkrovos?“ detalei, kurią modeliuojate. Tai **tiesinis statinis** tyrimas (maži poslinkiai, medžiaga išlieka elastinga) arba **natūraliojo dažnio** tyrimas, sprendžiamas tinklelyje iš kvadratinių tetraedrų, kurie seka detalės paviršius (arba, jei pasirenkate, iš mažų vienodų kubelių). Jis veikia pažymėtiems paviršiams, kuriuos tinklelio branduolys suteikia detalei (žr. [Tinklelio branduolys](topic:solid-kernels)).

Pasirinkite **Modeliavimas** lauke **Darbo sritis** įrankių juostos kairėje. Detalė nepakeičiama; tyrimas įrašomas detalės faile, o kiekvieną pakeitimą galima anuliuoti.

## Nustatykite tyrimą

1. Paspauskite **Naujas tyrimas** dešiniajame skydelyje.
2. Pasirinkite **Medžiaga**. Skydelyje rodomas jos standumas (E), Puasono koeficientas, tankis ir takumo riba. Reikšmės yra įprastos žinyno vertės; jūsų tiekėjo sertifikuotos vertės gali skirtis.
3. Pasirinkite **Tinklelis**:
   - **Tetraedrinis (tikslus)**, numatytasis: 10 mazgų tetraedrai, kurių išoriniai paviršiai guli ant detalės paviršių, su lenktomis briaunomis ties skylėmis, apvalinimais ir kitais apvaliais paviršiais. Mazgai plokščiuose, cilindriniuose, kūginiuose, sferiniuose ir toroidiniuose paviršiuose, apsisukimo ir ištraukimo paviršiuose bei laisvos formos (B-splainų) paviršiuose guli ant tikslaus paviršiaus; bet koks kitas paviršiaus tipas seka savo rodomąjį tinklelį, o rezultatų lentelė nurodo, kiek paviršių taip buvo. Tinklelis savaime susmulkinamas šalia lenktų paviršių, plonų sienelių ir aštrių briaunų.
   - **Vokselių kubai (greitas)**: detalė, užpildyta vienodais kubais. Greitas, bet lenkti paviršiai tampa laiptais. Tyrimai, išsaugoti prieš atsirandant tetraedriniam tinkleliui, lieka su šiuo tinkleliu.
4. Palikite **Elemento dydis** tuščią automatiniam dydžiui (apie 12,000 tetraedrų arba 20,000 kubų) arba įveskite milimetrais. Skydelyje rodoma, apie kiek elementų tai sudaro prieš pridedant smulkesnes vietas. Su tetraedrais **Smulkesni elementai lenktuose paviršiuose** (pagal numatymą įjungta) susmulkina skyles ir apvalinimus, kur įtempis paprastai didžiausias.

### Tikslinkite automatiškai

Su tetraedrais statinis ar bukliavimo tyrimas (be šiluminės apkrovos), natūraliojo dažnio tyrimas ir stacionarus šiluminis tyrimas siūlo **Tikslinti automatiškai (adaptyviai)**. Pažymėkite ir nustatykite:

- **Tikslinė paklaida (%)**: sprendimas sustoja, kai įvertinta paklaida yra mažesnė už ją (pradžioje 1 %).
- **Daugiausia eigų**: daugiausia sprendimų, kuriuos ji gali atlikti (pradžioje 5, daugiausia 10).

Kiekviena eiga išsprendžia, randa elementus su didžiausia įvertinta paklaida, juos dalija (ir tiek gretimų, kiek reikia tinkleliui išlaikyti vientisą) ir sprendžia iš naujo. Nauji mazgai lenktuose paviršiuose eina ant tikslaus paviršiaus. Rezultatai tada rodo lentelę ir diagramą, kurioje kiekvienai eigai nurodyti elementai, nežinomieji, įvertinta paklaida, didžiausias įtempis (ar temperatūra) ir poslinkis (ar šilumos srautas), bei eilutę, kodėl sustota: tikslas pasiektas, eigos baigėsi, kitas tinklelis būtų per didelis, arba eiga nepavyko (tada matote paskutinę gerą eigą).

Vertinkite įvertį kaip įvertį. Jis (Zienkiewicz–Zhu; palyginus su tiksliais atsakymais, jis rodo maždaug 0.6–0.95 tikros paklaidos) matuoja paklaidą **visai detalei**, todėl didžiausias įtempis skylėje ar apvalinime paprastai dar šiek tiek netikslus, kai įvertis atrodo mažas: įtempio koncentracijai nustatykite tikslą mažesnį nei 1 % ir stebėkite, kaip smailė nusistovi iš eigos į eigą. Aštriame vidiniame kampe ar fiksuoto paviršiaus briaunoje tikras įtempis yra begalinis, todėl įvertis niekada to nepasiekia: eigos tiesiog baigiasi.

**Natūralieji dažniai ir bukliavimas.** Natūraliojo dažnio tyrimui įvertis apima kiekvieną jūsų paprašytą formą, kiekvieną skaičiuojamą vienodai; lentelė ir diagrama seka pirmuosius du dažnius. Detalėje su tik plokščiais paviršiais dažnis iš eigos į eigą gali tik mažėti (kiekvienas tinklelis išlaiko ankstesnįjį); lenktieji paviršiai taip pat priartėja prie tikros formos, todėl dažnis gali šiek tiek pakisti į bet kurią pusę. Bukliavimui įvertis apima pirminį įtempį ir bukliavimo formas, o lentelė seka apkrovos koeficientus. Patikrinta ant 100 × 10 × 10 mm plieninio strypo: pirmasis dažnis nusistovi nuo 812.4 iki 811.9 Hz per keturias eigas, 0.4 % žemiau Eulerio–Bernulio (kuris ignoruoja šlyties įtaką), o kolonos apkrovos koeficientas per 0.5 % nuo Eulerio.

## Laikykite ir apkraukite

Kiekvienam tyrimui reikia bent vienos atramos, o įtempiams – bent vienos apkrovos.

1. Paspauskite {{ui:Fiksuoti}} įrankių juostoje. Nauja atrama pažymima ir laukia paviršių: spustelėkite paviršius, kurie laikomi nejudrūs (dar kartą spustelėję paviršių, jį atšaukiate). Baigę paspauskite **Baigti pasirinkimą** arba {{key:Esc}}. Mėlyni kūgiai žymi laikomus paviršius.
2. Paspauskite {{ui:Jėga}} ir spustelėkite paviršius, į kuriuos veikia jėga. Skydelyje įveskite **Bendrą jėgą** niutonais ir pasirinkite jos **kryptį**: į paviršių arba išilgai ašies. Jėga pasiskirsto per pasirinktus paviršius pagal plotą. Oranžinės rodyklės ją rodo.
3. Paspauskite {{ui:Slėgis}} slėgiui MPa (N/mm²), stumiančiam į pasirinktus paviršius; neigiamas slėgis traukia.

Daugiau rūšių yra skydelio sąraše **Pridėti**: **Paviršius be trinties** (paviršius gali slysti pats per save, bet nenutolti nuo jo – naudokite simetrijos plokštumoms ir lygioms atramoms) ir **Gravitacija** (paties detalės svoris, 9.81 m/s², pasirinkta kryptimi).

Atrama, paliekanti detalę laisvai slinkti ar suktis, atmetama su nurodymu, kuris judesys lieka laisvas.

## Išsprendžiame ir skaitome rezultatus

Paspauskite {{ui:Skaičiuoti}}. Darbas vyksta fone; **Stabdyti** jį atšaukia. Tada:

- Detalė nuspalvinama pagal **von Mises įtempį**; pasirinkite **Poslinkis** arba **Saugos koeficientas** lauke **Rodyti**. Legenda nurodo mastelį.
- Užveskite ant detalės, kad perskaitytumėte reikšmes po žymekliu.
- Pažymėkite **Deformuota forma**, kad pamatytumėte, kaip detalė išlinko (judesys padidinamas **Mastelio**; tikrasis judesys yra lentelėje).
- Lentelėje išvardijamas didžiausias įtempis ir kur jis yra, didžiausias poslinkis, mažiausias **saugos koeficientas** (takumo riba ÷ von Mises įtempis; žemiau 1 medžiaga pradeda tekėti), taikoma apkrova ir **reakcijos** atramose (jos subalansuoja apkrovą), bei naudojamas tinklelis.

Natūraliesiems dažniams pasirinkite tą **Tipą**, nustatykite, kiek **Formų**, ir skaičiuokite. Kiekviena forma rodo savo dažnį ir formą (formos normuojamos į 1 pagal didžiausią judesį).

Pakeitus detalę, rezultatai pažymimi kaip pasenę: skaičiuokite dar kartą.

## Takumas ir kontaktas (netiesiniai tyrimai)

Dar du tyrimų tipai peržengia „medžiaga lieka elastinga“:

- **Netiesinis (medžiaga teka)** seka medžiagos tiesę iki takumo ribos, tada lėtesnį nuolydį (**Nuolydis po takumo**, 1 % nuo E, jei tuščia). Apkrova didinama **Apkrovos žingsniais**; žingsnis, kuris nenusistovi, pats padalijamas per pusę. Rezultatuose grafikams pridedama **Plastinė deformacija** ir nurodoma, kiek apkrovos perėmė. Jei žingsnis vis tiek nenusistovi, tyrimas sustoja ties paskutiniu geru žingsniu, o ⚠ Problemų skydelis nurodo vietą: ten detalė išseko stiprumo (griūtis) arba žingsniai per dideli.
- **Kontaktas tarp dalių** leidžia atskiroms detalės dalims spausti viena kitą. Pridėkite **Kontakto porą**, pasirinkite A pusės paviršius (spaudžiančius) su {{ui:Pasirinkti paviršius}}, tada B pusės paviršius su {{ui:Pasirinkti B pusės paviršius}}. **Be trinties** dalys spaudžia, slysta ir atsiskiria; **sujungtos** dalys lieka prilipusios. Kiekviena dalis tinkleliuojama atskirai, todėl nedidelis tarpas tarp jų yra normalu. Kontaktas yra baudos metodas: dalys šiek tiek įsmunka viena į kitą (**baudos koeficientas** × E ÷ elemento dydis nustato kontakto standumą). Lentelė rodo giliausią įsmukimą, o Problemų skydelis įspėja, kai jis didesnis nei 1 % elemento dydžio: padidinkite koeficientą arba naudokite smulkesnius elementus.

Abu naudoja tetraedrinį tinklelį. Trintis, dideli slydimai ir dideli sukimai čia nesprendžiami.

## Paleiskite CalculiX

**Eksportuoti › CalculiX failą (.inp)** (arba {{ui:Įrašyti CalculiX failą (.inp)}} skydelyje) įrašo tyrimą kaip įvesties failą CalculiX programai, kurią įdiegiate ir paleidžiate patys: tas pats tinklelis, medžiaga, atramos, apkrovos ir kontakto poros, mm, N ir MPa. Paleiskite ją, tada **Eksportuoti › CalculiX rezultatus (.frd)** nuskaito jos rezultatų failą atgal į tą patį tinklelį ir rodo poslinkį (ir von Mises įtempį, kai faile yra įtempiai). Jei tarp to pakeitėte detalę ar elemento dydį, tinklelis nebėra tas pats, ir PartCraft apie tai praneša: įrašykite naują failą.

## Kiek juo pasitikėti

PartCraft patikrina savo sprendiklį prieš rankinės skaičiavimo formules (konsolės galo įlinkis PL³/3EI per 1 %, strypo ištempimas PL/AE tiksliai, konsolės pirmasis dažnis per 3 %, įtempis aplink skylę plokštėje). Vis dėlto turėkite omenyje šias ribas:

- **Tinklelis.** Su tetraedrais PartCraft patikrina konsolės įlinkį ir lenkimo įtempį (per 0.3 %), įtempį skylėje plokštėje (Kt, maždaug per 1 %), storą vamzdį, veikiamą slėgio (Lamé, per 0.3 %) ir pirmąjį dažnį (per 0.4 %). Lentelėje rodoma **tinklelio kokybė** (mažiausi ir didžiausi kampai tarp elementų paviršių; žemiau maždaug 10° elementas blogas) ir **įvertinta įtempių paklaida**: jei ji didesnė nei keli procentai, skaičiuokite dar kartą su mažesniu elemento dydžiu arba leiskite **Tikslinti automatiškai** tai padaryti. Plokštėje su skyle ir strype su dviem kraštinėmis išpjovomis automatinis tikslinimas pasiekė 1 % nuo vadovėlinio Kt su maždaug šeštadaliu nežinomųjų, kurių prireikė, kad visas tinklelis taptų smulkesnis. Su vokseliais kubais skylė ar apvalinimas yra laiptai kubo dydžio ribose, todėl įtempis ten apytikris.
- **Aštrūs vidiniai kampai ir fiksuotų paviršių briaunos neturi tikros įtempio smailės.** Ten vertė auga, kai elementai mažėja. Skaitykite įtempius šiek tiek toliau nuo tokių vietų arba suapvalinkite kampą modelyje.
- **Rezultatai, kuriuos reikia skaityti.** Be von Mises įtempio, poslinkio ir saugos koeficiento, tetraedrinis tyrimas rodo **didžiausią ir mažiausią pagrindinį įtempį** (tempimas ir gniuždymas) ir **ekvivalentinę deformaciją**. Pažymėkite **Rodyti tinklelį**, kad pamatytumėte elementus.
- **Statiniai tyrimai yra tiesiniai ir elastingi.** Takumui ir kontaktui naudokite aukščiau nurodytus netiesinius tyrimų tipus; dideli įlinkiai ir nuovargis nesprendžiami. Šiluma, šiluminis įtempis ir tiesinis bukliavimas yra atskiri tyrimų tipai: žr. [Šiluma, šiluminis įtempis ir bukliavimas](topic:thermal-and-buckling).
- **Visos medžiagos vienodos visomis kryptimis.** Spausdintos 3D plastikinės detalės yra silpnesnės tarp savo sluoksnių, dažnai trečdaliu ar daugiau.
- Tai laboratorinė versija: svarbias detales patikrinkite kitu būdu.

## Atnaujinti redaguojant (Live)

Pažymėkite **Atnaujinti, kol redaguoju** bloke Skaičiuoti, ir modeliavimo atsakymai seka jūsų redagavimus. Pakeiskite matmenį, apkrovą, medžiagą ar aplinką, ir iš karto pasirodo **greitas atsakymas**, padarytas elementais, keturis kartus didesniais nei tyrimo; kai sustojate akimirkai (maždaug sekundei), tyrimo **patikslintas atsakymas** jį pakeičia. Rezultatai nurodo, kurį matote („Greitas atsakymas“ arba „Patikslintas atsakymas“) ir elemento dydį. Greitas atsakymas tinka kryptimi ir dydžiui: ant plieninės konsolės jis buvo per 1 % nuo patikslinto poslinkio ir apie 4 % įtempio. Skaičiams, kuriuos naudosite, pasitikėkite patikslintu. Statiniai, natūraliųjų dažnių, šiluminiai ir bukliavimo tyrimai veikia taip; Live yra rodinio nustatymas ir detalėje neįrašomas. Skaičiavimas, kurį paspaudžiate patys, lieka toks, koks yra, iki kito redagavimo.

## Sužinokite, kas lūš pirmiausia (Break it)

Statiniam ar bukliavimo tyrimui paspauskite **Kas lūžta pirmiausia?** bloke **Break it**. PartCraft didina tyrimo apkrovas (jėgas, slėgius ir svorį kartu), kol detalė pasiduoda, ir išvardija, pradedant blogiausiu, **apkrovos koeficientą iki pirmojo takumo** (koeficientas dabartinėms apkrovoms, kuriuo didžiausias von Mises įtempis pasiekia medžiagos takumą, su raudonu žymekliu, kur tai įvyksta) ir **apkrovos koeficientą iki bukliavimo** tiems patiems atramoms ir apkrovoms. 4.3 koeficientas reiškia, kad detalė atlaiko 4.3 karto didesnę apkrovą nei savo, prieš tekant; **koeficientas mažesnis nei 1 reiškia, kad ji jau pasiduoda taip, kaip apkrauta**, ir tai pasirodo Problemų sąraše kaip klaida (silpniausias radinys rodomas kaip pastaba, net kai viskas gerai). Koeficientai ateina iš tiesinio tyrimo su tetraedrais jūsų elemento dydžiu, todėl jie tiek pat geri, kiek geras tas tyrimas: įtempis fiksuoto paviršiaus ar aštraus kampo viršūnėje neturi tikros smailės (žr. žemiau), o takumo koeficientas ten bus atsargesnis. Jūsų asistentas tą patį patikrinimą gali atlikti su `break_run` įrankiu.

## Susiję

- [Šiluma, šiluminis įtempis ir bukliavimas](topic:thermal-and-buckling)
- [Auginti formą iš apkrovų (Generatyvinis)](topic:generative-design)
- [Matuoti atstumus, kampus ir masę](topic:measure)
- [Kas dar nepastatyta](topic:not-built-yet)
