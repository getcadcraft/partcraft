---
title: Bhala ijenretha
summary: Ijenretha iyisikripthi se-CraftScript, Lua noma Python esinemigqa yokuphawula echaza okokufaka kwayo. Indlela okokufaka okuba ngayo ifomu, okufanele isikripthi sisishiye (umzimba, ishidi, izinkinga), isibonelo esincane esiphelele, nendlela yokuvula isikripthi sakho njengejenretha.
keywords: ijenretha, bhala, isikripthi, ikhanda, igalelo, @input, @generator, umzimba, ishidi, izinkinga, to_body, mfg_check, ishidi ledatha, isibonelo, ilethisi, inkambu
from: ed8a5ed8
---

Ijenretha iyisikripthi esivamile ([CraftScript](topic:craftscript), Lua noma Python) esinemigqa embalwa yokuphawula phezulu. PartCraft ifunda imigqa yokuphawula yenze ifomu; isikripthi sakho sifunda okokufaka njengezinguquki ezisethiwe ngaphambili.

## Ikhanda

Faka lokhu emigqeni yokuphawula (`%` ku-CraftScript, `--` ku-Lua, `#` ku-Python):

```
% @generator Umshini wokushintshana kokushisa
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Ukugeleza kwesisindo"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Ubuso"
% @input solid: = true
% @input note: = "text"
```

Igalelo liba yi `name: unit = default`, bese kungenzeka libe uhla `[min .. max]` (izinombolo zigcinwa phakathi kwalo), uhlu lwezinketho `{a, b, c}` negama elibhalwe phakathi kwamagatsha. Iyunithi iyilebula nje yefomu: **inani lifika kuleyo yunithi**, ngakho isikripthi esifuna i-SI siyiguqule, futhi `to_si(value, 'kg/s', 'kg/s')` ihlola nokuthi iyunithi isho lokho ocabanga ukuthi isho. Igama liba izinhlamvu, izinombolo kanye no-underscore; `body`, `sheet` kanye ne-`problems` sele zisetshenziswe.

## Okushiywa yisikripthi

| Inguquki | Yini |
|---|---|
| `body` | **Kuyadingeka.** Imeshi yobuso, ngokuvamile evela ku-`[body, info] = to_body(field, h)`. Ilungiswa iphinde ihlolwe lapho ukusebenza kuphela. |
| `sheet` | Akuphoqelekile. Isakhiwo: inkambu ngayinye ibe yinombolo noma umbhalo, noma isakhiwo esinezinkambu `value`, `unit`, `ref` kanye ne-`note`. Siba yishidi ledatha. |
| `problems` | Akuphoqelekile. Iseli `problems` elivela ku-`mfg_check(field, 'sls', struct(), h)`, noma izingenisо zakho. Ziya ezihlolweni nohlwini lwezinkinga. |

## Isibonelo esincane esiphelele

```
% Ikhyubhu elingenalutho elinodonga.
% @generator Ikhyubhu elingenalutho
% @input side: mm = 12 [4 .. 40] "Uhlangothi"
% @input wall: mm = 1.5 [0.5 .. 5] "Udonga"
% @input h: mm = 0.5 [0.25 .. 2] "Usayizi we-voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

Lokhu kwenza ibhokisi evaliwe, futhi ukuhlola kubika ukuvalwa kwangaphakathi kwalo njengephutha lenqubo yempushana. Yenza usayizi we-voxel `h` ube ngaphansi kwesithathu sodonga oluncane kakhulu ofuna: ngaphansi kwamavoxel amathathu cishe udonga aluthembeki.

## Izinkambu

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (isisekelo sokujikeleza esivela kuphrofayili), `tpms` (izindawo ze-gyroid, Schwarz P kanye ne-diamond, nosayizi wesisele kanye nodonga okungashintsha kuso lonke isiqephu), `lattice` kanye `lattice_beams`, `along` (umgudu ojikelezile ohamba endleleni), izinhlanganisela ze-boolean `field_union`, `field_intersect`, `field_subtract`, `field_blend` obushelelezile, kanye `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` inikeza ibanga elisayinelwe emaphoyinti (elinegethivu ngaphakathi), `field_voxel` inikeza ama-voxel wabaxazi. [Izinkambu](topic:fields)ichaza ukuthi yini.

Imikhawulo okufanele uyazi: udonga olucekeceke oluthe xaxa kunengxenye yesine yeseli luvala imigudu; isici esincane kunama-voxel amathathu cishe singaxinezeleka; `along` ihlanganisa amakhoni ajikelezile, ngakho ububanzi obushintsha ngokushesha buhlala busanda (sebenzisa `field_revolve` ephrofayileni).

## Vula isikripthi sakho njengejenretha

Esikhaleni sokusebenza se-{{ui:Umqambi}} chofoza {{ui:Vula}} bese ukhetha ifayela. Isikripthi esingenalo umugqa we-`@generator` noma we-`@input` siyanqatshwa: bekungeke kube nento yokusetha. Ijenretha igcinwa kulesi siphequluli (kuze kube ngu-20) futhi {{ui:Susa}} iyisusa. Umzimba oqalwe kuyo uthwala ikhophi yesikripthi, ngakho ingxenye ayincikile kuso.

Ifayela lingabamba nezijenretha eziningi: ihlanganisiwe ye-JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
