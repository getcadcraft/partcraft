---
title: Ilabhulari yezobunjiniyela
summary: Izibalo zencwadi njengezikripthi ezifundekayo, ngamayunithi e-SI, nomthombo wawo wonke umphumela: ukugeleza kwepayipi nomsele, ukudluliswa kokushisa nezishintshi zokushisa, izingxenye zengcindezi, ukunyakaza kwegesi, izakhiwo zamanzi nomoya, izimpahla, namayunithi ahlolwayo. Yini eyisebenzisayo nokuthi ime kuphi.
keywords: ilabhulari, ubunjiniyela, amayunithi, Darcy-Weisbach, Colebrook, Reynolds, isici sokuphikisa, Dittus-Boelter, Gnielinski, NTU, ukusebenza, LMTD, ifini, Barlow, Lamé, inozulu, isentropic, Mach, ukugeleza okuvinjiwe, amanzi, umoya, izakhiwo, impahla, imithombo
from: 786ef967
---

Ilabhulari yezobunjiniyela iyisethi yezikripthi kuMtapo weSikripthi (`craftlib/eng`). Ngayinye iyinkomba yokusebenza ongayifunda kusuka phezulu kuya ezansi, nekhanda elinika **indlela** yayo, **amayunithi** ayo, **imikhawulo** yayo, **izinkomba** zayo kanye nokuhlolwa **check** nenombolo esebenziwe. Zisebenzisa amayunithi e-SI kuyo yonke, futhi zibuyisa amanani aqukethe **iyunithi** ne-**source**, ukuze ishidi ledatha likwazi ukuphrinta ukuthi yonke inombolo yavela kuphi.

## Amayunithi ahlolwayo

`to_si(10, 'bar', 'Pa')` iguqula inani futhi yenqaba iyunithi elinika okuhlukile (ubude lapho kulindeleke ingcindezi). `from_si`, `unit_convert(1, 'bar', 'psi')` no `unit_kind('W/(m K)')` ("thermal conductivity") zisebenza ngendlela efanayo. `temp_k(25, 'C')` no `temp_from_k` ziguqula izinga lokushisa, elinokuguqulwa kwalo.

## Izakhiwo

- `fluid('water', T)` no `fluid('air', T, p)`: ukuminyana, ukunamathela, ukuqhuba, ukushisa okuthile, nenombolo ye-Prandtl. Amanzi 0 kuya ku-100 °C, umoya 250 kuya ku-600 K; ngaphandle kwalokho iyayeka esikhundleni sokweqisa.
- `material('ss304')`: i-Young's modulus, i-Poisson's ratio, ukuminyana, ukuvuma, ukuqhuba, ukushisa okuthile, nokunwebeka: amanani ezinga lokushisa legumbi avela kumashidi edatha afanayo ne-Simulation. Umklamo wangempela usebenzisa izibalo ezisemthethweni zomhlinzeki. Amajika ezinga lokushisa awakakhiwa.

## Ukugeleza emapayipini nasemisele

`reynolds`, `hydraulic_diameter`, `friction_factor` (ukugeleza okulinganayo, bese i-equation ye-Colebrook yokugeleza okunamabhubhane; uhla lwe-2300 kuya ku-4000 alunayo ifomula ethembekile futhi luyakutshela lokho), `darcy_weisbach`, `minor_loss`, `pipe_flow` (ipayipi elijikelezayo, konke ngesikhathi esisodwa) no `rect_channel` (imisele enxande ngokwe-Shah ne-London fit).

## Ukudluliswa kokushisa

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (ikhetha ukugeleza okulinganayo noma okunamabhubhane futhi itshele ukuthi yiyiphi i-correlation), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` no `ntu_for` (izinhlobo ze-effectiveness-NTU zokugeleza okuphambene, okufanayo, i-shell-and-tube, ukugeleza okuphambene kwamabili, nomfudlana oyodwa oshintshayo) no `hx_size` (usayizi we-UA idatha edinga; ikhombisa ukuthi kungenzeka kangakanani uma idatha ingafinyelelwa).

## Izingxenye zengcindezi

`allowable_stress` (ukuvuma ngaphezu kwesibalo sokuphepha), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, ngokwe-hoop noma i-shear criterion) no `wall_sphere`. Lezi ziyizinkomba zezibalo zencwadi, **akuwona ukubalwa kwekhodi yesitsha sokucindezela**: azikho izindleko zokugqwala, ukusebenza kwezixhumanisi noma izinto zekhodi.

## Ukunyakaza kwegesi

`isentropic` (izilinganiso ku-Mach number), `mach_from_area`, `choked_flow`, `throat_area` no `exit_mach`, ngegesi elifanele ngaphandle kokungqubuzana, ukushisa noma ama-shock.

## Hlola umphumela

`check_stress`, `check_thermal` no `check_flow` zisebenzisa izixazululi zePartCraft zengcindezi, zokuqhuba nokugeleza engxenyeni eyakhiwe kusuka ekripthini, zifunde ingcindezi nokuguquka okukhulu kakhulu, izinga lokushisa nokugeleza kokushisa, nokuvuleka kwenethiwekhi yemisele. Azishintshi lutho ezixazululini. Izinhlolo zengcindezi nezokushisa zisebenzisa ama-voxel, ngakho ubuso obugobile bungamasitebisi, nengcindezi ekhoneni elibukhali elingaphakathi noma ngaphansi komthwalo wephoyinti incike ngosayizi we-voxel.
