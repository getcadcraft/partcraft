---
title: Maktabadda injineernimada
summary: Qaacidooyinka buugaagta caadiga ah ee loo akhrin karo sida script-yo, unitiyada SI, natiija kasta leh isha ay ka timid: socodka biibaha iyo kanaalka, kulaylka iyo isdhaafsiga kulaylka, qaybaha cadaadiska, gaaska, sifooyinka biyaha iyo hawada, agabka, iyo unitiyo la hubiyo. Waa maxay ay wax u tahay iyo halka ay ku dhammaato.
keywords: injineernimada, maktabadda, unitiyada, Darcy-Weisbach, Colebrook, Reynolds, friction factor, Dittus-Boelter, Gnielinski, NTU, effectiveness, LMTD, fin, Barlow, Lame, nozzle, isentropic, Mach, choked flow, biyaha, hawada, sifooyinka, agabka, ilaha
from: 786ef967
---

Maktabadda injineernimada waa dhowr script oo ku jira maktabadda workspace-ka Script (`craftlib/eng`). Mid kasta waa function aad ka akhrin karto laga bilaabo sare ilaa hoose, oo leh madax ku bixiya **habkiisa**, **unitiyadiisa**, **xuduudahooda**, **tixraacyadooda** iyo **hubin** leh tiro shaqeysan. Dhammaan waxay isticmaalaan unitiyada SI, waxayna soo celiyaan tirooyin leh **unit** iyo **isha**, sidaas darteed xog-xaashi wuu daabici karaa meesha lambar kasta ka timid.

## Unitiyo la hubiyo

`to_si(10, 'bar', 'Pa')` wuxuu beddelaa qiimaha wuxuuna diidaa unit uu wax kale cabbiro (dherer halka cadaadis la filayo). `from_si`, `unit_convert(1, 'bar', 'psi')` iyo `unit_kind('W/(m K)')` ("thermal conductivity") waxay isku mid u shaqeeyaan. `temp_k(25, 'C')` iyo `temp_from_k` waxay beddelaan heerkulka, kaas oo leh kala-geddisi.

## Sifooyinka

- `fluid('water', T)` iyo `fluid('air', T, p)`: cufnaanta, viscosity, conductivity, specific heat, Prandtl number. Biyaha 0 ilaa 100 °C, hawada 250 ilaa 600 K; wixii ka baxsan way joogsataa halkii ay dheeri ka sameyn lahayd.
- `material('ss304')`: Young's modulus, Poisson's ratio, cufnaanta, yield, conductivity, specific heat, expansion: qiyamka heerka qolka oo ka yimid xog-xaashiyada isku mid ah ee Simulation. Naqshad dhab ah waxay isticmaashaa tirooyinka la xaqiijiyay ee bixiyaha. Heerkulka qalooca lama dhisin.

## Socodka biibaha iyo kanaalada

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, kadibna Colebrook equation ee socodka turbulent; kala-duwanaanta 2300 ilaa 4000 ma leh qaacido la isku halayn karo oo waa sheegtaa), `darcy_weisbach`, `minor_loss`, `pipe_flow` (biib wareegsan, wax kasta mar keliya) iyo `rect_channel` (duct-yada rectangular-ka laminar oo ku salaysan Shah iyo London fit).

## Kulaylka isgaadhsiinta

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (wuxuu doortaa laminar ama turbulent oo magacaabaa correlation-ka), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` iyo `ntu_for` (xidhiidhka effectiveness-NTU ee counterflow, parallel, shell-and-tube, crossflow iyo hal socod oo isbeddelaya) iyo `hx_size` (cabbirka UA ee uu u baahan yahay shaqada; wuxuu sheegaa inta suurtagal tahay marka shaqada aan la gaadhi karin).

## Qaybaha cadaadiska

`allowable_stress` (yield oo loo qaybiyay safety factor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, oo ku saabsan hoop ama shear criterion) iyo `wall_sphere`. Kuwani waa xadka buugaagta caadiga ah, **ma aha xisaab koodka savaa-cadaadiska**: ma jiro xad daxal oo lagu daro, joint efficiency, ama factors-ka koodka.

## Dynamics-ka gaaska

`isentropic` (saamiyada lambarka Mach), `mach_from_area`, `choked_flow`, `throat_area` iyo `exit_mach`, gaas kaamil ah oo aan lahayn cadaymo, kulayl ama shock.

## Hubi natiijada

`check_stress`, `check_thermal` iyo `check_flow` waxay socodsiiyaan xalliyayaasha PartCraft ee xoogga, kuleylka iyo socodka qaybta la dhisay script-ka, kadibna waxay soo akhrisaa xoogga ugu badan iyo barashada, heerkulada iyo socodka kulaylka, iyo waxtarka shabakad biibaha. Ma beddelaan xalliyayaasha. Hubinta xoogga iyo heerkulka waxay isticmaalaan voxels, sidaas darteed dusha wareegsan waa jajabyo, xoogga geeska gudaha ee fiiqan ama hoos u dhigga barta gaar ahi wuxuu ku xidhan yahay cabbirka voxel-ka.
