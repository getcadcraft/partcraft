---
title: Samee qaab ka soo baxa culeysyada (Generative)
summary: Dooro wejiyada la haysto oo culeysan, gobollada la ilaalinayo iyo kuwa la nadiifiyo, mugga bartilmaameedka iyo agabka, kadibna soo saar natiijooyinka: qaababka ugu adag ee mugga kasta, dib loo hubiyay sida jidh adag, lagu barbardhigay miis, lagana soo dejiyay sida STL, STEP ama qayb cusub.
keywords: naqshadeynta soo saarka, topology optimisation, SIMP, fudud, lattice, qaab dabiici ah, natiijooyin, barbardhig, miisaan, qaybta mugga, ilaali, keep-in, caqabad, keep-out, goobta naqshadeynta, dherer ugu yar ee xubinta, STL, daabacaadda 3D
from: 5b91fa8e
---

Workspace-ka **Generative** wuxuu ka saaraa agabka culeysyada u baahnayn. Waxaad sheegtaa halka qaybtu la hayo oo culeysan tahay, iyo waxa inuu ahaado iyo waxa uu ka madhnaado; PartCraft wuxuu helaa qaabka ugu adag mugga bartilmaameedka kasta (**topology optimisation**), mar kale mid kasta wuu hubiyaa sida jidh adag oo leh agabka dhabta ah, wuxuuna natiijooyinka side by side u soo bandhigaa. Waxay ka shaqeysaa dusha magacaysan ee mesh kernel-ku siiyay qaybta (eeg [Kernel-ka mesh-ka](topic:solid-kernels)).

Dooro **Generative** sanduuqa **Workspace**. Qaybtaadu ma beddelmayso; daraasadda waxaa lagu kaydiyaa gudaha faylka qaybta.

## Deji daraasad

1. Riix **New study** panelka midig.
2. **Space**: *The part as it is* wuxuu agab ka saaraa qaybtaada; *A box around the part* wuxuu qaab ku koraa sanduuq ka weyn qaybta, **Box margin** masaafada dhinac kasta.
3. **Element size**: ka tag madhan cabbir toos ah (qiyaastii 8,000 kaabyo), ama qor mid. Cabbirro yar waxay siiyaan qaabab fiican laakiin wakhti dheer ayay qaadan doonaan.
4. **Minimum member**: xubnaha ka yar qiyaastii laba jeer tan ma samaysmaan. Madhan waxay ahaatay hal iyo badh kaabyo.
5. Calaamadi mid ilaa lix **Target volumes** (qaybta goobta naqshadeynta ee qaabku buuxin karo) iyo mid ilaa afar **Materials**. Mugga kasta mar ayaa la abuuraa; agab kasta qaabkaas ayaa lagu hubiyaa (qaabka ugu adag ma ku xidhna agabka, laakiin miisaankiisa, cadaadiskiisa iyo factor-ka badbaadada way ku xidhan yihiin).

## Ujeedooyin

- {{ui:Fixed}}: riix wejiyada la haysto. **Frictionless face** oo ka mid ah liiska **Add** ee panelka wuxuu haystaa wejiga oo keliya dhinac dhinaca (u isticmaal diyaarada simmetriga).
- {{ui:Force}}: riix wejiyada culeysan, kadibna qor xoogga guud oo dooro jihadiisa panelka. **Pressure** wuxuu ku jiraa liiska **Add**.
- {{ui:Preserve}}: riix wejiyada u baahan inay ahaadaan adag ku wareegsan, oo deji sida qoto dheer (**Keep solid within**), tusaale ahaan meelaha ku wareegsan godadka boolalka. Wejiyada aad haysato ama culeysato had iyo jeer waa la ilaalinayaa.
- {{ui:Obstacle}}: riix wejiyada u baahan inay ahaadaan madhan ku wareegsan, oo deji inta fog (**Keep empty within**), tusaale ahaan meel loogu talagalay shaft ama qalab.

Riix **Done picking** ama {{key:Esc}} kadib riixidda wejiyada. Midabka cagaaran iyo casaanka ayaa muujinaya gobollada.

## Soo saar oo barbardhig

Riix {{ui:Generate}}. Panelku wuxuu muujinayaa horumarka iyo wakhtiga ka hadhay; **Stop** ayaa joojinaya. Natiijo kasta waxay ka muuqataa miiska **Outcomes**: mugga bartilmaameedka, agabka, **mass**, **largest stress**, **largest displacement** iyo **safety factor** (yield ÷ stress), dhammaantood waxaa laga helay markii qaabka dhammaystiran dib loo xalliyay sida unugyo adag oo leh agabka dhabta ah.

Dooro natiijo si aad muuqaalka ugu aragto (qaybta waa la qariyaa; calaamadi **Show the part through it** si aad labadaba u aragto). Miiska hoose: inta iteration ay qaadatay iyo haddii ay degsatay, adkaantiisa sida jidh adag marka loo barbardhigo tirada optimiser-ka, iyo dusheeda.

## Isticmaal natiijo

- **STL**: mesh saddex-geesood xidhan, oo diyaar u ah daabacaadda 3D.
- **STEP (faceted)**: isla dusha sida jidh STEP ah oo dhinacyo siman ka kooban.
- **New part file**: fayl qayb PartCraft ah oo feature-kiisa keliya uu yahay natiijada sida jidh la soo dhoofiyay. Fur si aad ugu sketch-gareyso, godad ugu gooyso ama Simulation-ka uga hubiso. Waa faceted (kun dhinac siman), ma aha qaab la tafatiri karo.
- **Add to this part** wuxuu natiijada ku daraa qaybta; wuxuu shaqeeyaa kaliya naqshadeynta sanduuqa (qaybta laftiisu goob ahaan, natiijadu qaybta gudaheeda way ku jirtaa).

**New part file** iyo **Add to this part** wali lama dhisin nooca hadda: natiijadu waxay noqotaa jidh la soo dhoofiyay, taasoo u baahan kernel saxda ah. Soo dejinta STL iyo STEP (faceted) way shaqeeyaan.

## Sida loogu kalsoonaan karo

- Wuxuu wanaajiyaa **stiffness** mugga la siiyay. Ma jiraan xadka cadaadiska iyo xeerarka soo saarka (dhanka hoose, jihooyinka jaranjarada, cabbirrada godka ugu yar) wali: hubi natiijada la doortay ee [Simulation](topic:simulation) oo hagaaji.
- Xubnaha khafiifka ah ee hal ama laba kaabyo ballac ah waa qiyaas: u isticmaal cabbir yar qaybaha dheer.
- Habku waa SIMP oo leh density filter, threshold projection iyo cusboonaysiin optimality-criteria; cadaadiska la sheegay iyo go'naanta waa natiijada qaabka sida kaabyo, taas oo run ah laakiin qallafsan geesaha adag.

## La xiriira

- [Hubi cadaadiska iyo go'naanta (Simulation)](topic:simulation)
- [Dhoofinta daabacaadda, STEP iyo DXF](topic:export-files)
- [Waxa aan wali la dhisin](topic:not-built-yet)
