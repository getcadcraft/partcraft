---
title: Analizės biblioteka
summary: Skaitomų analizės scenarijų biblioteka Scenarijų darbo srityje: kas yra kiekvienoje grupėje, funkcijos atidarymas tik skaitymui, jos antraštė su metodu, nuorodomis ir patikra, savos kopijos kūrimas ir tai, kaip kopija perima bibliotekos funkciją.
keywords: biblioteka, craftlib, analizė, elektromagnetas, statinė, modalinė, šiluminė, topologijos optimizavimas, top88, SIMP, elektromagnetika, elektrostatika, magnetostatika, skystis, gardelių Bolcmano metodas, LBM, tinklelis, vokselis, tetraedrai, nuorodos, patikra, tikrinimas, kopija, šešėlis
from: bf993859
---

Analizės biblioteka – tai scenarijų rinkinys; kiekvienas jų yra funkcija, kurią galima perskaityti iš viršaus iki apačios: kaip surenkama standumo matrica, kur dedamos ribinės sąlygos, koks sprendiklis paleidžiamas, kaip skaičiuojami rezultatai. Joje nieko nepaslėpta juodoje dėžėje; įmontuotos tik greitos vidinės kilpos (elementų matricos, retųjų matricų sprendikliai, tinklelio kūrimas).

## Pradėkite nuo pavyzdžio

**Pavyzdžiai** grupėje yra penki trumpi scenarijai, kurie naudoja biblioteką nuo pradžios iki galo. Spustelėkite vieną, paspauskite {{ui:Atidaryti (tik skaitymui)}}, tada {{key:F5}}: kiekvienas išvalo rodinį, parodo rezultatą drobėje ir grafiką papildomuose rodiniuose.

| Pavyzdys | Ką rodo |
|---|---|
| Konsolės įtempis | Plieninis strypas 100 × 10 × 10 mm, veikiamas 100 N galo apkrovos: von Mises įtempis deformuotame strype ir konsolės galo įlinkis, palyginti su sijų teorija, keturiems elementų dydžiams (grafike) |
| MBB sijos topologija | Klasikinis 60 × 20 topologijos optimizavimas: formuojasi projektas, mažėja lankstumas (compliance), galutinis išdėstymas (94 iteracijos, lankstumas 203.19) |
| Kondensatoriaus laukas | Dvi 4 mm pločio plokštės, 1 mm atstumu: potencialas ir laukas, talpa su kraštiniais efektais, palyginta su idealia verte ir Palmerio formule |
| Kanalo srautas | Gardelių Bolcmano srautas aplink stulpelį kanale: greičių laukas ir konvergavimo istorija |
| Elektromagnetas | C formos geležies šerdis su oro tarpu ir ritė: magnetinio srauto tankis, laukas tarpe, palyginti su magnetinės grandinės formule, induktyvumas ir traukos jėga per tarpą. Aprašyta žingsnis po žingsnio [Magnetiniai laukai 2-D](topic:magnetic-fields-2d) |
| Nuolatinis magnetas | Ta pati šerdis su nuolatiniu magnetu vietoj ritės: magneto darbinis taškas, laukas tarpe, palyginti su magnetine grandine, kiek srauto nuteka, trauka. Aprašyta [Magnetiniai laukai 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupės

| Grupė | Funkcijos | Ką daro |
|---|---|---|
| Tinklelio kūrimas | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Dėžės ir cilindrai kaip šešiasieniai, kubai ar tetraedrai; kubai ar tetraedrai bet kuriam modeliui (detalei, kūnui, įkeltam STL); elementų tūriai ir kokybė; mazgų parinkimas plokštumoje ar paviršiuje |
| Statinis įtempis | `static_voxel`, `static_tet` | Tiesinis statinis įtempis kubuose arba 10 mazgų tetraedruose: poslinkiai, įtempiai, von Mises, reakcijos |
| Rėmai | `frame3d` | 3D rėmai iš sijų, stulpų ir įstrižainių tiesioginio standumo metodu: galų atlaisvinimai, atramos ir spyruoklės, apkrovos išilgai elementų; poslinkiai, reakcijos, elementų galų jėgos. DetailCraft ir BimCraft {{ui:Eksportuoti kaip CraftScript}} joms įrašo visą modelį. Analizės pagalbinė priemonė, ne normų tikrinimas |
| Vibracija | `modal_tet` | Natūralieji dažniai ir virpesių formos |
| Šiluma | `heat_steady`, `heat_transient`, `heat_system` | Nusistovėjęs ir kintamas šilumos laidumas su fiksuotomis temperatūromis, šilumos įvedimu, šilumos generavimu, srautu ir konvekcija |
| Topologijos optimizavimas | `top88`, `top99`, `topopt3d` | Paskelbti 88 ir 99 eilučių 2-D kodai ir tas pats metodas 3-D kubuose |
| Elektromagnetika | `poisson2d`, `magnetostatic2d` | 2-D elektrostatika (potencialas, laukas, talpa, krūvis) ir magnetostatika (vektoriaus potencialas, magnetinio srauto tankis, nuolatiniai magnetai) |
| Skysčių tekėjimas | `lbm2d`, `lbm3d` | Gardelių Bolcmano srautas: 2-D užrašytas scenarijuje, 3-D – ant PartCraft savo srauto branduolio |

Kiekvienos funkcijos antraštė nurodo tikslius argumentus. Vienetai – tie, kuriuos naudoja PartCraft tyrimai, nebent antraštėje nurodyta kitaip: milimetrai, niutonai, megapaskaliai, tonos vienam kubiniam milimetrui tankiui, vatai ir kelvinai šilumai. Elektromagnetinės ir gardelių Bolcmano funkcijos veikia bet kuriais nuosekliais vienetais; jų antraštėse nurodyta, kokiais.

## Kaip tikrinama biblioteka

Kiekvienos funkcijos antraštė baigiasi **patikra**: mažu atveju su žinomu atsakymu. PartCraft testai paleidžia kiekvieną iš jų, o kur PartCraft turi savo tyrimą tam pačiam darbui, scenarijaus atsakymas lyginamas su tuo tyrimu tame pačiame tinklelyje:

- konsolės galo įlinkis su sijų teorija (0,2 % su kubais, 0,05 % su tetraedrais) ir su **Simuliacijos** darbo srities sprendikliais tame pačiame tinklelyje (sutampa iki daugelio skaitmenų);
- konsolės pirmasis dažnis su sijų teorija (0,24 % žemesnis, kaip ir tikėtina trumpai sijai) ir su **Simuliacijos** modaliniu sprendikliu;
- šiluma: įkaitinta plokščia siena – tiksliai; mažas kūnas aušta taip, kaip sako sutelktosios talpos formulė; plokštės temperatūra nyksta taip, kaip sako teorija;
- topologijos optimizavimas: `top88` atkuria straipsnio 94 iteracijas ir lankstumą 203.1925 (ir 218.8032 su tankio filtru); `topopt3d` baigiasi tuo pačiu lankstumu kaip **Generavimo** darbo sritis su tais pačiais nustatymais;
- kondensatoriaus talpa ir ilgo solenoido laukas – pagal vadovėlių vertes; elektromagneto tarpo laukas – pagal magnetinės grandinės formulę; nuolatiniai magnetai – pagal apvalų magnetą ore ir magnetą, uždarytą geležine jungtimi;
- kanalo srautas – pagal tikslų parabolinį profilį.

## Perskaitykite funkciją

1. Atidarykite scenarijų skydelio skirtuką **Biblioteka**.
2. Spustelėkite funkciją. Jos antraštėje matote: ką ji skaičiuoja, metodą, vienetus, prielaidas ir ribas, **nuorodas** (knygą ar straipsnį su lygčių numeriais) ir **patikrą** – mažą atvejį su žinomu atsakymu, kurį paleidžia PartCraft testai.
3. {{ui:Atidaryti (tik skaitymui)}} atidaro visą scenarijų skirtuke su brūkšniuota linija. Galite jį paleisti, pažymėti ir paleisti jo dalis, bet negalite jo keisti.

## Pakeiskite vieną

Paspauskite {{ui:Sukurti kopiją}} (arba **Sukurti kopiją redagavimui** virš skirtuko, atidaryto tik skaitymui). Kopija yra scenarijus jūsų detalėje tuo pačiu vardu, todėl jis įrašomas kartu su detale, o **kiekvienas tos funkcijos iškvietimas dabar naudoja jūsų kopiją** – redaktorius apie tai praneša virš scenarijaus. Pervardinkite kopiją, kad išliktų abi.

## Naudokite funkciją

Bibliotekos funkciją iš bet kurio scenarijaus kvieskite pagal jos vardą, kaip įmontuotą funkciją:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Rezultatai grąžinami kaip reikšmės darbo srityje; rodomi grafikai ir laukai atsiranda rodinyje ir papildomuose rodiniuose.

Pavyzdžiui, atvirosios detalės statinė analizė užima kelias eilutes:

```
v = voxel_mesh(part(), 2);                   % 2 mm kubai
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % įtvirtinti apačią
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N žemyn viršuje
r = static_voxel(v, 210000, 0.3, bc);       % plienas
```

`r` saugo poslinkius, įtempius ir reakcijas; von Mises įtempis nubrėžiamas deformuotoje detalėje. Kreivoms detalėms naudokite `tet_mesh` ir `static_tet`, kurios taip pat gali apkrauti ir įtvirtinti visus paviršius (`face_nodes`).

:::note
Bibliotekos funkcijos parašytos CraftScript, o Lua scenarijus jas kviečia per `cs` kaip ir įmontuotas funkcijas: `cs.static_tet(t, 200000, 0.3, bc)` (žr. [Scenarijai Lua kalba](topic:craftscript-lua)). Kiekviena funkcija sprendžia vieną medžiagą ir vieną apkrovos atvejį; antraštėse nurodyta, kas dar nepadengta.
:::
