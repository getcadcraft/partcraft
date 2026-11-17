---
title: Insimu: izimo njengamabanga
summary: Yini insimu (umumo ogcinwe njengebanga kusuka endaweni yawo), indlela yokuwakha kusuka ezakhiweni ezisisekelo, ama-boolean, ama-lattice nobuso obuncane kuskripthi, ukuthi ashintshwa kanjani abe yisidumbu, nokuthi kungani iskripthi esifanayo sihlala sinika amabhithi afanayo.
keywords: insimu, ibanga elisayiniwe, sdf, voxel, gyroid, tpms, lattice, boolean, offset, shell, blend, dual contouring, okunqunyiwe, ukuvalwa ngokuphelele, manifold, brick
from: faab7480
---

I-**insimu** ichaza isimo ngobude besuka kunoma yiliphi iphoyinti liye endaweni yaso: linegethivu ngaphakathi, lingu-zero endaweni, linhle ngaphandle. Isiyingi sobubanzi be-5 "ibanga kusuka emaphakathini ngaphandle kwe-5". Ukuhlanganisa izimo kuyizibalo zamabanga: inhlangano iwukuncane kwamabili, ukuhlangana kuwukukhulu, ukukhipha esinye kwesinye kuwukukhulu kokuqala kuwukukhipha kwesesibili. Ukukhulisa isimo ngo-1 mm kukhipha u-1 ebangeni; udonga oluyisikhwama liwubanga, eligoqwe phansi.

Yingakho izinsimu zinhle kuma-lattice, imisele nezindonga ezinobukhulu obuhlukahlukene: ubuso be-gyroid bungu "isamba se-sine singu-zero", nodonga olukhula kusuka ku-1 kuya ku-3 mm kuso sonke isigaba yinani elishintsha kuso sonke isigaba.

## Kusukela enSimini kuya esidumbini

`to_body(field, h)` ithatha isampula yensimu ngegridi yamaphoyinti ayi-`h` millimitha ngakunye, igcina kuphela amaphoyinti aseduze nobuso (igridi elincane le-8 × 8 × 8 bricks), futhi yakha ubuso nge-**dual contouring**: i-vertex eyodwa ngeseli ngayinye yobuso, ebekwe lapho izindiza zobuso zihlangana, ngakho umphetho obukhali uhlala ubukhali ngaphakathi kwe-voxel eyodwa. Ubuso buvaliwe futhi wonke amaphethelo ahlanganyelwa yizinxantathu ezimbili kuphela; ibhalo liyasho lokho. Isici esincane kakhulu kuno-voxel ezintathu singancipha, bese ibhalo lisho ukuthi isidumbu asisona isolidi evaliwe kunokuba siyifihle.

Usayizi we-voxel ungunembeza: ivolumu yesiyingi esinama-voxel angu-25 ngobubanzi iphakathi kwamakhulu ambalwa ephesenti, udonga luqinisekile njengama-voxel alo. Igridi elikhulu kakhulu lisheshisa kakhulu.

## Njalo kuba amabhithi afanayo

Insimu alinayo iwashi noma inombolo engaphazanyiswa. I-sine ne-cosine ye-gyroid, nakho konke okuphawulekayo, okulogarithimu nokuphakama okusemtapweni, kubalwa ngokuhlanganiswa okulula kwezibalo ukuze i-Node, i-Chrome, i-Firefox ne-Safari zinikeze amabhithi afanayo; igridi lihanjwa ngokulandelana okulungisiwe, ngakho iskripthi esifanayo nemvelo efanayo sinikeza ama-mesh namashidi wedatha afana ngebhithi, kunoma yikuphi ikhompyutha naseziphathini zezintambo zomsebenzi ezinganani. Lokhu kuyahlolwa, kubandakanya isiphequluli kanye ne-Node.

## Okulandelayo

[Bhala isikhiqizi](topic:write-a-generator) sakha ingxenye ngezinsimu; [Umtapo wobunjiniyela](topic:engineering-library) uyilinganisa.
