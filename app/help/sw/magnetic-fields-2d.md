---
title: Sehemu za sumaku katika 2-D (somo)
summary: Kokotoa uwanja wa sumaku wa sumaku-umeme au sumaku ya kudumu kwa maktaba ya uchambuzi: endesha mifano, soma msongamano wa mtiririko, uwanja wa pengo, induktansi na nguvu ya kuvuta, badilisha muundo, na jenga modeli yako ya koili, sumaku na chuma.
keywords: sumaku, magnetostatics, uwanja wa sumaku, msongamano wa mtiririko, tesla, sumaku-umeme, solenoid, koili, ampere turns, kiini cha chuma, pengo la hewa, permeability, induktansi, nguvu ya sumaku, reluctance, mzunguko wa sumaku, vector potential, electromagnetics, finite element, fem, motor, actuator, transformer, magnetostatic2d, sumaku ya kudumu, neodymium, ndfeb, ferrite, remanence, sehemu ya kazi, recoil, leakage, sumaku ya kushikilia
from: 215f6601
---

Maktaba ya uchambuzi ya PartCraft inaweza kukokotoa uwanja wa sumaku wa koili na chuma kwa 2-D: sehemu-mtambuka ya kitu kirefu kinachofanana kwa urefu wake wote, kama sumaku-umeme, kiini cha transfoma, busbar au sehemu-mtambuka ya motor. Somo hili linaendesha mfano wa sumaku-umeme wa maktaba, linasoma inachosema, linaibadilisha, linaonyesha jinsi ya kuiga umbo lako mwenyewe, kisha linaongeza sumaku ya kudumu.

Linatumia eneo la Script na [maktaba ya uchambuzi](topic:craftscript-library). Huhitaji kujua lugha ya CraftScript ili kufuata; mfano unaeleza kila mstari unachofanya.

## Kinachoigwa

Kiini cha chuma chenye umbo la C, 100 × 80 mm nje na 20 mm nene, chenye pengo la hewa la 2 mm kwenye mguu wake wa kulia. Koili ya zamu 100 inayobeba 10 A (ampere-turns 1000) imezungushwa kwenye mguu wake wa kushoto. Kila kitu ni kirefu kuelekea nje ya skrini, kwa hivyo majibu ni **kwa kila mita ya kina**: zidisha kwa kina halisi kwa sumaku halisi.

Maktaba ya `magnetostatic2d` hutatua uwezo wa vekta wa sumaku kwenye gridi ya mraba za 1 mm kwenye kisanduku cha hewa kinachozunguka sumaku, kisha hukokotoa msongamano wa mtiririko **B** (kwa tesla) kutoka hapo.

## Endesha mfano

1. Chagua **Script** kwenye kisanduku cha **Workspace** upande wa kushoto wa upau wa zana.
2. Fungua kichupo cha **Library** cha paneli ya script, kisha **Examples** › **Electromagnet: field, gap, inductance**.
3. Bofya {{ui:Open (read-only)}}, kisha bonyeza {{key:F5}}.

Baada ya sekunde moja au mbili kturubai inaonyesha msongamano wa mtiririko, na console inachapisha:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Grafu iliyo chini ya turubai ni msongamano wa mtiririko wima B_y kando ya mstari wa kati wa kiini, kutoka kushoto kwenda kulia: takriban −0.55 T kwenye mguu wa kushoto (mtiririko unashuka chini yake), karibu hakuna kitu kwenye dirisha, na +0.55 T kwenye mguu wa kulia na kuvuka pengo (mtiririko unarudi juu). Mtiririko huo huo unapita kwenye chuma na pengo, kwa hivyo miguu miwili na pengo vinaonyesha thamani karibu sawa.

## Soma matokeo

- **Uwanja kwenye pengo** ni 0.543 T. Hesabu ya mkono inachukulia kiini kama mzunguko mmoja wa sumaku, B = μ0 N I / (g + l / μr), ambapo g ni pengo, l ni urefu wa njia kupitia chuma na μr ni upenyezaji wa chuma unaolinganishwa; inatoa 0.552 T. Uwanja ni chini kidogo kuliko hesabu ya mkono kwa sababu mtiririko unavimba kuzunguka pengo (fringing) na mtiririko mwingine unapita njia fupi kuvuka dirisha (leakage). Pengo likiwa dogo au gridi ikiwa nzuri zaidi, hizo mbili zinakaribiana.
- **Induktansi** ya koili ya zamu 100 ni 0.154 H kwa kila mita ya kina, kutokana na nishati iliyohifadhiwa kwenye uwanja. Fomula ya mzunguko inatoa chini (0.110 H/m) kwa sababu inahesabu tu mtiririko unaopita pengoni, si mtiririko unaovuja kupita pengo.
- **Nguvu ya kuvuta** inayofunga pengo ni B² w / (2 μ0) kwa uso wa pengo wenye upana w: takriban 2300 N kwa kila mita, au 117 N kwa sumaku yenye kina cha 50 mm.
- **Kilele** cha 1.97 T kiko kwenye pembe za ndani za dirisha, ambako mtiririko unageuka ghafla. Modeli inachukulia chuma kuwa cha mstari; chuma halisi cha umeme kinajaa karibu 1.5 hadi 2 T, kwa hivyo chukulia thamani zilizo juu ya hapo kama onyo, si jibu.

:::note
Majaribio ya maktaba yenyewe huendesha mfano huu na kukagua uwanja wa pengo dhidi ya fomula ya mzunguko wa sumaku kila wakati PartCraft inabadilika. Mbinu, marejeo yake na ukaguzi wake mwingine (solenoid ndefu, solenoid yenye kiini cha chuma) viko kwenye kichwa cha `magnetostatic2d`: bofya kwenye maktaba.
:::

## Badilisha muundo

1. Bofya {{ui:Tengeneza nakala}} juu ya script ya kusoma tu. Nakala huhifadhiwa pamoja na sehemu yako.
2. Badilisha thamani karibu na juu kisha bonyeza {{key:F5}} tena. Jaribu:
   - `g = 0.001;` — nusu ya pengo: uwanja wa pengo karibu unaongezeka mara mbili, na nguvu ya kuvuta nayo (inafuata B²).
   - `mur = 200;` — kiini dhaifu zaidi: ampere-turns nyingi zaidi zinatumika kwenye chuma.
   - `N = 200;` — zamu mara mbili: uwanja mara mbili, induktansi mara nne.
   - `h = 0.0005;` — gridi nzuri zaidi: majibu yaliyo karibu zaidi, muda takriban mara nne.

Kila endesho hubadilisha turubai. Vigeu ambavyo script imeunda (kama `Bgap`, `L`, `F`) vinabaki kwenye orodha ya **Variables** kwa hesabu zako mwenyewe.

## Iga umbo lako mwenyewe

Mfano unajenga kila kitu kutoka orodha tatu, thamani moja kwa kila mraba wa gridi, ambazo unaweza kuzitengeneza kwa umbo lolote lililochorwa kwa mistari iliyonyooka kando ya gridi:

- **Chuma kiko wapi:** `iron` ni kweli kwa mraba zilizo ndani ya kiini. Mfano unaijenga kutoka mistatili: `frame & ~window & ~gap` maana yake "kwenye fremu, si kwenye dirisha, si kwenye pengo".
- **Upenyezaji:** `1 + (mur - 1) * iron` ni 1 hewani na `mur` kwenye chuma. Weka nyenzo kadhaa thamani zao kwa njia hiyo hiyo.
- **Mkondo:** `J` ni msongamano wa mkondo kwa ampere kwa kila mita ya mraba, chanya nje ya skrini, hasi ndani yake. Koili ina pande mbili zenye ishara tofauti; mfano unakokotoa `J0` ili upande mmoja ubebe N I.

Kisha `r = magnetostatic2d(m, permeability, J)` hutatua. `r.B` ni msongamano wa mtiririko kwenye kila mraba (safu mbili, x na y), `r.Bmag` ukubwa wake, `r.energy` nishati iliyohifadhiwa kwa kila mita. `plot(x, y)` huchora mstari.

Maktaba inafanya kazi kwa mita, na mwonekano kwa milimita, kwa hivyo uwanja ukionyeshwa kama ulivyo ungechorwa mara elfu chini. Mfano unaonyesha kwenye nakala ya gridi kwa milimita (`mm = quadGrid(…)`, kisha `show(field(mm, …))`): nakili mistari hiyo miwili.

Kwa chaguo-msingi ukingo wa kisanduku unashikilia uwanja ndani: hakuna mtiririko unaotoka. Fanya kisanduku kiwe angalau mara mbili au tatu ya saizi ya sumaku ili hili lisibane uwanja. Kwa sumaku yenye ulinganifu unaweza kuiga nusu yake: kichwa cha `magnetostatic2d` kinasema ni sharti gani la ukingo litumike kwenye mstari wa ulinganifu.

## Sumaku za kudumu

Mfano wa pili, **Examples** › **Permanent magnet in an iron core: working point, leakage, pull**, ni kiini kile kile bila koili, na kipande cha 10 mm cha mguu wa kushoto kimebadilishwa na sumaku, iliyosumbuliwa kuelekea juu. Iendeshe kwa {{key:F5}}. Inachapisha:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Sehemu ya kazi.** Sumaku inaelezewa kwa **remanence** yake Br (uwanja inaoushikilia inapofupishwa na chuma: takriban 1.2 T kwa sumaku ya NdFeB iliyochomwa, 0.4 T kwa ferrite) na upenyezaji wake wa recoil (takriban 1.05 na 1.1). Kufungua pengo kunaisukuma chini kwenye mstari wake wa recoil: hapa hadi 1.04 T, huku H ikielekeza kinyume na B ndani yake.
- **Uvujaji.** Hesabu ya mkono bila uvujaji inatoa 0.97 T kwenye pengo; modeli inatoa 0.68 T. Sumaku inasukuma mtiririko wake kwa nguvu juu ya urefu mfupi, kwa hivyo mwingi unarudi moja kwa moja kuvuka dirisha badala ya kupita pengoni. Kipengele cha uvujaji kinasema kiasi: 1.53 hapa. Weka `g = 0;` kwa keeper iliyofungwa: sumaku basi inafanya kazi ndani ya nusu asilimia ya hesabu ya mkono.
- **Sumaku katika modeli yako mwenyewe.** Mpe `magnetostatic2d` sumaku kama `struct('Br', Br)`, ambapo `Br` ina safu moja kwa kila mraba wa gridi yenye remanence kando ya x na y kwa tesla (sifuri nje ya sumaku), kisha mpe mraba wa sumaku upenyezaji wao wa recoil kwenye orodha ya permeability:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Kwa sumaku iliyosumbuliwa kwa pembe, weka `Br·cos(angle)` na `Br·sin(angle)` kwenye safu mbili; kwa pete iliyosumbuliwa nje, kokotoa mwelekeo wa kila mraba kutoka nafasi yake. `r.H` inatoa nguvu ya uwanja H kwenye kila mraba.

Modeli huweka sumaku kwenye mstari wake wa recoil ulionyooka, bila kujali inasukumwa kwa nguvu kiasi gani. Sumaku halisi ikisukumwa zaidi ya goti lake (kwa pengo kubwa, koili yenye nguvu au joto) hupoteza sehemu ya nguvu yake kabisa; linganisha sehemu ya kazi na curve ya mtengenezaji kwa daraja na joto hilo.

Majaribio ya maktaba yanakagua sumaku dhidi ya matokeo mawili ya mkono: sumaku ya duara hewani wazi (ndani yake, B = Br / (1 + μr)) na sumaku iliyofungwa na keeper ya chuma (mzunguko wa sumaku), zote ndani ya 1 %.

## Kisichofanywa bado

- **Kujaa.** Chuma ni cha mstari: mara mbili ya mkondo, mara mbili ya uwanja, bila ukomo.
- **Kupoteza sumaku.** Sumaku zinabaki kwenye mstari wao wa recoil ulionyooka (tazama hapo juu).
- **Mikondo ya eddy** na **hasara** (hasara ya chuma, hasara ya shaba).
- **Sehemu zinazosogea na torki.** Hakuna rotor inayozunguka ndani ya stator, wala torki dhidi ya pembe.
- **Maumbo ya duara.** Gridi imetengenezwa kwa mraba sawa, kwa hivyo mistari iliyopinda hutoka kama ngazi.
- **3-D.** Kila kitu ni sehemu-mtambuka ya kitu kirefu.

Muundo wa motor (rotor inayozunguka, torki na hasara kwa 2-D) unaangaliwa kwa toleo la baadaye. Tazama [Bado hazijajengwa](topic:not-built-yet).
