---
title: Goobaha magnetic-ka 2-D (casharka)
summary: Xisaabi goobta magnetic-ka ee electromagnet ama magnet joogto ah maktabada falanqaynta: socodsii tusaalooyinka, akhri flux density-ga, goobta farqiga, inductance-ka iyo jiidista, beddel naqshadda, oo dhis moodeelkaaga coil-ka, magnet-ka iyo birta.
keywords: magnetic, magnetostatics, goobta magnetic-ka, flux density, tesla, electromagnet, solenoid, coil, ampere-turns, core bir, farqiga hawada, permeability, inductance, xoogga magnetic-ka, reluctance, magnetic circuit, vector potential, electromagnetics, finite element, fem, motor, actuator, transformer, magnetostatic2d, permanent magnet, neodymium, ndfeb, ferrite, remanence, working point, recoil, leakage, holding magnet
from: 215f6601
---

Maktabada falanqaynta PartCraft waxay xisaabin kartaa goobta magnetic-ka ee coil-ka iyo birta 2-D: qaybta gudaheeda oo dheer oo isku mid ah dhererkeeda, sida electromagnet, core-ka transformer-ka, busbar-ka ama qaybta motor-ka. Casharkan wuxuu socodsiinayaa tusaalaha electromagnet-ka ee maktabada, wuxuu akhrinayaa waxa uu sheegayo, wuxuu beddelayaa, wuxuu tusayaa sida moodeel naftaada loo dhiso, kadibna wuxuu ku daraa magnet joogto ah.

Wuxuu isticmaalaa Script workspace iyo [maktabada falanqaynta](topic:craftscript-library). Ma u baahnid inaad garanayso luuqadda CraftScript si aad u raacdo; tusaalaha ayaa sheegaya waxa khad kasta sameeyo.

## Waxa la moodelayo

Core bir ah oo C-shaped ah, 100 × 80 mm dibadda, 20 mm qaro. Farqi hawo oo 2 mm ah lugta midig. Coil 100 turns ah oo qaada 10 A (1000 ampere-turns) oo lagu duubay lugta bidix. Wax kasta dherer ayay ku leeyihiin oo dhanka shaashadda ka baxaya, sidaas darteed jawaabaha waa **qoto dheer mitir kasta**: ku dhufo qoto dheerida dhabta ah si aad magnet dhab ah u hesho.

Maktabada `magnetostatic2d` waxay xallisaa vector potential-ka magnetic-ka grid-ka 1 mm oo labajibbaaran oo ku jira sanduuq hawo ah oo ku wareegsan magnet-ka, kadibna waxay xisaabisaa flux density **B** (tesla) laga bilaabo.

## Tusaalaha socodsii

1. Dooro **Script** sanduuqa **Workspace** ee bidix toolbar-ka.
2. Fur tab-ka **Library** ee panel-ka script-ka, kadibna **Examples** › **Electromagnet: field, gap, inductance**.
3. Guji {{ui:Open (read-only)}}, kadibna riix {{key:F5}}.

Ilbiriqsi ama laba gudahood, canvas-ku wuxuu muujinayaa flux density-ga, console-kuna wuxuu daabacaa:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Plot-ka hoose canvas-ka waa flux density-ga B_y oo ku jira khadka dhexe ee core-ka, bidix ilaa midig: qiyaastii −0.55 T lugta bidix (flux-ku wuxuu ku socdaa hoos), wax yar daaqadda, iyo +0.55 T lugta midig iyo farqiga (flux-ku wuu soo noqdaa). Flux-ka isku mid ah wuxuu maraa birta iyo farqiga, sidaas darteed labada lug iyo farqigu waxay muujiyaan qiime isku dhow.

## Akhri natiijooyinka

- **Goobta farqiga** waa 0.543 T. Xisaabta gacanta waxay u qaadaa core-ka sidii hal magnetic circuit, B = μ0 N I / (g + l / μr), halkaas oo g yahay farqiga, l dhererka jidka birta, μr permeability-ga birta; waxay siinaysaa 0.552 T. Goobtu way ka hooseysaa xisaabta gacanta sababtoo ah flux-ku wuu fidsan yahay ku wareegsan farqiga (fringing) iyo qaarkood wuxuu kicinayaa jid gaaban oo daaqadda ku maraya (leakage). Farqi yar ama grid fiican, labadaba way isu dhowaadaan.
- **Inductance-ka** coil-ka 100-turn waa 0.154 H mitir kasta oo qoto dheer, tamarta lagu kaydiyay goobta ka soo qaadaneysa. Qaabka circuit-ku wuu ka yar yahay (0.110 H/m) sababtoo ah wuxuu tiriyaa oo kaliya flux-ka farqiga maraya, ma aha kan ka leakaya.
- **Jiidista** ee xidhaysa farqiga waa B² w / (2 μ0) oo w yahay ballaca wajiga farqiga: qiyaastii 2300 N mitir kasta, ama 117 N magnet 50 mm qoto dheer.
- **Qiimaha sare** 1.97 T wuxuu ku yaal geeska gudaha ee daaqadda, meesha flux-ku si xagal ah u leexdo. Moodeelku wuxuu u qaadaa birta inay tahay toos; biraha dhabta ah ee koronka ah waxay buuxaan qiyaastii 1.5 ilaa 2 T, sidaas darteed qiimaha ka weyn ahaan digniin, ma aha jawaab.

:::note
Tijaabooyinka maktabada laftoodu waxay socodsiiyaan tusaalahan oo waxay hubiyaan goobta farqiga marka loo barbardhigo qaacidada magnetic-circuit mar kasta oo PartCraft la beddelo. Habka, tixraacyadiisa iyo hubinta kale (solenoid dheer, solenoid bir-core ah) waxay ku jiraan madasha `magnetostatic2d`: guji oo maktabada ku jira.
:::

## Beddel naqshadda

1. Guji {{ui:Make a copy}} kor script-ka akhrinta-keliya. Nuqulka wuxuu la kaydinayaa qaybtaada.
2. Beddel qiime u dhow sare oo mar kale riix {{key:F5}}. Isku day:
   - `g = 0.001;` — nus farqi: goobta farqiga way labanlaabmaysaa, jiidista sidaas oo kale (wuxuu raacaa B²).
   - `mur = 200;` — core liita: ampere-turns badan ayaa birta lagu baabi'iyaa.
   - `N = 200;` — labo turns: labo jeer goobta, afar jeer inductance.
   - `h = 0.0005;` — grid fiican: jawaabo dhow, qiyaastii afar jeer waqti.

Mid kasta oo socodsiin ah wuxuu bedelaa canvas-ka. Doorsoomayaasha script-ka sameeyay (sida `Bgap`, `L`, `F`) waxay ku sii jiraan liiska **Variables** xisaabtaada.

## Qaabkaaga moodeel

Tusaalaha wuxuu dhisayaa wax kasta laga bilaabo saddex liis, mid qiimo ah grid square kasta, oo laga samayn karo qaab kasta oo khadad toos ah ku dhisan grid-ka:

- **Meesha birta ku taal:** `iron` waa run squares-ka ku jira core-ka. Tusaalaha wuxuu ka dhisay sanduuqyo: `frame & ~window & ~gap` macnaheedu waa "frame-ka ku jira, daaqadda kuma jirto, farqiga kuma jirto".
- **Permeability:** `1 + (mur - 1) * iron` waa 1 hawada iyo `mur` birta. Sidaas oo kale u sii qiimo gaar ah dhowr alaab.
- **Shidaalka:** `J` waa current density oo ah amperes mitir labajibbaaran kasta, togan marka ka baxayo shaashadda, taban marka ku soo gasha. Coil-ku wuxuu leeyahay laba dhinac oo calaamado ka soo horjeeda; tusaalaha wuxuu xisaabiyaa `J0` si dhinac kasta u qaado N I.

Kadibna `r = magnetostatic2d(m, permeability, J)` ayaa xallisa. `r.B` waa flux density square kasta (laba tiir: x iyo y), `r.Bmag` cabbirkiisa, `r.energy` tamarta la kaydiyay mitir kasta. `plot(x, y)` wuxuu sawiraa khad.

Maktabada waxay ka shaqeysaa mitirada, muuqaalkana millimitirada, sidaas darteed goob la muujiyay sida ay tahay waxay ahaan lahayd kun jeer oo yar. Tusaalaha wuxuu ku muujiyaa nuqul grid-ka millimitirada ah (`mm = quadGrid(…)`, kadibna `show(field(mm, …))`): koobi laba saftarkaas.

Caadiyan geesta sanduuqa ayaa goobta ku hayn: flux-ku ma baxo. Sanduuqa ka dhig ugu yaraan laba ama saddex jeer cabbirka magnet-ka si aan goobta loo riixin. Magnet isku mid ah waxaad moodeeli kartaa half; madasha `magnetostatic2d` waxay sheegaysaa geesta loo isticmaalo khadka symmetry-ga.

## Magnets joogto ah

Tusaalaha labaad, **Examples** › **Permanent magnet in an iron core: working point, leakage, pull**, waa isla core-ka oo coil-ka laga qaaday, 10 mm ka mid ah lugta bidix waxaa lagu beddelay magnet, oo sare loo magnetized. Ku socodsii {{key:F5}}. Wuxuu daabacayaa:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Working point.** Magnet-ka waxaa lagu tilmaamaa **remanence** Br (goobta uu hayo markii birta lagu gaabiyo: qiyaastii 1.2 T magnet NdFeB ah oo sintered, 0.4 T ferrite) iyo recoil permeability (qiyaastii 1.05 iyo 1.1). Furidda farqi wuxuu ku riixaa khadka recoil-keeda hoos: halkan ilaa 1.04 T, H wuxuu ku tilmaamaa gudaha magnet-ka ka soo horjeeda B.
- **Leakage.** Xisaabta gacanta oo aan leakage lahayn waxay siineysaa 0.97 T farqiga; moodeelku wuxuu siinayaa 0.68 T. Magnet-ku flux-keeda wuxuu u riixaa xoog xoog leh masaafo gaaban, sidaas darteed qaybta badan waxay si toos ah dib ugu noqotaa daaqadda halkii ay farqiga mari lahayd. Leakage factor-ku wuxuu sheegaa inta ay tahay: 1.53 halkan. Dhig `g = 0;` keeper xidhan: magnet-ku wuxuu markaas ku shaqeeyaa wax ka yar nus boqolkiiba oo xisaabta gacanta.
- **Magnets moodeelkaaga.** Siiyo `magnetostatic2d` magnet-yada sida `struct('Br', Br)`, halkaas oo `Br` uu leeyahay hal safaf grid square kasta oo remanence-ka x iyo y ku jira tesla (eber dibadda magnet-yada), oo siiyo magnet squares-ka recoil permeability-kooda liiska permeability-ka:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T sare meelaha mag ay run tahay
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Magnet loo magnetized xagal, dhig `Br·cos(angle)` iyo `Br·sin(angle)` labada tiir; magnet ring ah oo dibadda loo magnetized, xisaabi jihada square kasta meeshiisa. `r.H` wuxuu siinayaa xoogga goobta H square kasta.

Moodeelku wuxuu magnet-ka ku hayaa khadkiisa recoil toosan xataa hadii si adag loo riixo. Magnet dhab ah oo laga riixo ka dhaafa jilibkiisa (farqi weyn, coil xoogle ah ama kulayl) qayb ka mid ah xooggiisa si joogto ah ayuu lumiyaa; hubi working point-ka marka loo barbardhigo curve-ka soo saaraha darajada iyo heerkulka.

Tijaabooyinka maktabada waxay hubiyaan magnets laba natiijo gacmeed: magnet goobo ah hawada furan (gudaheeda B = Br / (1 + μr)) iyo magnet lagu xidhay keeper bir ah (magnetic circuit), labadaba 1% gudahood.

## Waxa aanu weli sameynin

- **Saturation.** Birtu waa toosan tahay: laba jeer shidaal, laba jeer goobta, aan xad lahayn.
- **Demagnetisation.** Magnets waxay ku sii jiraan khadkooda recoil toosan (eeg kor).
- **Eddy currents** iyo **losses** (iron loss, copper loss).
- **Qaybaha dhaqdhaqaaqa iyo torque.** Ma jiro rotor wareegaya stator gudihiisa, ma jiro torque xagal ka soo horjeeda.
- **Qaababka wareegsan.** Grid-ku wuxuu ka kooban yahay labajibbaaran isku mid ah, sidaas darteed geesaha goobaha waxay u muuqdaan kuwo tallaabo leh.
- **3-D.** Wax kasta waa qayb-jarka wax dheer.

Naqshadda motor-ka (rotor wareegaya, torque iyo losses 2-D) waxaa loo fiirinayaa nooca soo socda. Eeg [Weli lama dhisin](topic:not-built-yet).
