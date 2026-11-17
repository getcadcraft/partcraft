---
title: Suriin ang stress at deflection (Simulation)
summary: Pumili ng materyal, ayusin ang mga face, magdagdag ng force, pressure o sariling bigat ng piyesa, i-solve, at basahin ang von Mises stress, displacement, safety factor, reaction at natural frequency sa model, kasama ang kayang sabihin at hindi kayang sabihin ng paraan.
keywords: simulation, FEA, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, plasticity, yielding, plastic strain, bilinear, contact, contact pair, penalty, bonded, walang friction na contact, CalculiX, .inp, .frd, finite element, stress, strain, von Mises, displacement, deflection, safety factor, factor of safety, yield, reaction, load, force, pressure, gravity, grabidad, sariling bigat, fixed, frictionless, suporta, constraint, materyal, bakal, aluminyo, titanium, ABS, PLA, nylon, natural frequency, modal, vibration, mesh, element size, tetrahedral, tetrahedra, tet mesh, voxel, mesh quality, principal stress, equivalent strain, tantya ng error, curved na face, butas, fillets, adaptive, adaptive refinement, automatic refinement, h-adaptive, convergence, mesh convergence, eksaktong surface, sphere, cone, torus, spline, freeform
from: 6f2fdec1
---

Sinasagot ng Simulation workspace ang "babaluktot ba o masisira ito sa ilalim ng load na ito?" para sa piyesang minomodelo mo. Ito ay isang **linear static** study (maliliit na deflection, nananatiling elastic ang materyal) o isang study ng **natural frequency**, na nilulutas sa mesh ng quadratic tetrahedra na sumusunod sa mga face ng piyesa (o, kung pipiliin mo, sa maliliit at pantay na cube). Gumagana ito sa mga pangalang face na ibinibigay ng mesh kernel sa piyesa (tingnan ang [The mesh kernel](topic:solid-kernels)).

Piliin ang **Simulation** sa kahon na **Workspace** sa kaliwa ng toolbar. Hindi nababago ang piyesa mo; nakaimbak ang study sa loob ng part file at maaaring i-undo ang bawat pagbabago rito.

## Mag-set up ng study

1. Pindutin ang **New study** sa kanang panel.
2. Piliin ang **Material**. Ipinapakita ng panel ang stiffness nito (E), ratio ni Poisson, density at yield strength. Karaniwang handbook figure ang mga halaga; maaaring iba ang sertipikadong halaga ng iyong supplier.
3. Piliin ang **Mesh**:
   - **Tetrahedral (accurate)**, ang default: 10-node na tetrahedra na ang mga panlabas na face ay nasa mga face ng piyesa, na may curved na edge sa mga butas, fillet at iba pang bilog na face. Ang mga node sa flat, cylindrical, conical, spherical at toroidal na face, sa revolved at extruded na face, at sa freeform (B-spline) na face ay nasa eksaktong surface; anumang ibang uri ng face ay sumusunod sa display mesh nito, at sinasabi ng results table kung ilang face ang ganoon. Kusang nagiging mas pino ang mesh malapit sa curved na face, manipis na pader at matalas na edge.
   - **Voxel cubes (fast)**: ang piyesa na pinuno ng pantay na cube. Mabilis, pero nagiging hakbang ang mga curved na face. Pinapanatili ito ng mga study na na-save bago pa umiral ang tetrahedral mesh.
4. Iwanang walang laman ang **Element size** para sa awtomatikong laki (mga 12,000 tetrahedra, o 20,000 cube), o mag-type ng isa sa mm. Ipinapakita ng panel kung ilang element ang nagagawa nito bago idagdag ang mas pinong mga bahagi. Sa tetrahedra, pinipino ng **Smaller elements on curved faces** (naka-on bilang default) ang mga butas at fillet, kung saan kadalasang pinakamataas ang stress.

### Awtomatikong pinuhin

Sa tetrahedra, static o buckling study (nang walang thermal load), natural-frequency study at steady thermal study, nag-aalok ng **Awtomatikong pinuhin (adaptive)**. I-tick ito at itakda:

- **Target error (%)**: humihinto ang solve kapag mas mababa rito ang tinatantyang error (1 % sa simula).
- **Most passes**: ang pinakamaraming solve na maaari nitong patakbuhin (5 sa simula, pinakamataas na 10).

Ang bawat pass ay nag-so-solve, humahanap ng mga element na may pinakamalaking tinatantyang error, hinahati ang mga ito (at ang pinakakaunting kapitbahay na kailangan para manatiling buo ang mesh), at muling nagso-solve. Ang mga bagong node sa curved na face ay inilalagay sa eksaktong surface. Ipinapakita ng mga resulta ang isang table at chart na may, para sa bawat pass, ang mga element, ang mga unknown, ang tinatantyang error, ang peak stress (o temperatura) at displacement (o heat flux), at isang linyang nagsasabi kung bakit huminto: naabot ang target, naubos ang mga pass, masyadong malaki ang susunod na mesh, o nabigo ang isang pass (makikita mo kung gayon ang huling magandang pass).

Basahin ang tantya bilang tantya. Ito (Zienkiewicz–Zhu, kapag ikinumpara sa eksaktong sagot, binabasa nitong humigit-kumulang 0.6 hanggang 0.95 ng tunay na error) ay sumusukat ng error sa **buong piyesa**, kaya kadalasang bahagyang mali pa rin ang peak stress sa butas o fillet kapag mukhang maliit ang tantya: para sa stress concentration, itakda ang target sa ibaba ng 1 % at panoorin ang peak na tumatatag mula pass hanggang pass. Sa matalas na inside corner o sa gilid ng fixed face, walang hanggan ang tunay na stress, kaya hindi ito maaabot ng tantya: ang mangyayari ay mauubos ang mga pass.

**Natural frequencies at buckling.** Para sa natural-frequency study, sumasaklaw ang tantya sa bawat mode na hiniling mo, bawat isa ay binibilang nang pareho; sinusundan ng table at chart ang unang dalawang frequency. Sa piyesang may flat na face lamang, pababa lamang ang maaaring gawin ng frequency mula pass hanggang pass (hawak ng bawat mesh ang nauna rito); lumalapit din ang curved na face sa tunay nilang hugis, na maaaring maglipat nang bahagya ng frequency sa alinmang direksyon. Para sa buckling, sumasaklaw ang tantya sa pre-stress at sa mga buckling mode, at sinusundan ng table ang mga load factor. Nasuri sa 100 × 10 × 10 mm na steel bar: tumatatag ang unang frequency mula 812.4 hanggang 811.9 Hz sa apat na pass, 0.4 % sa ilalim ng Euler–Bernoulli (na hindi isinasama ang shear), at ang load factor ng column ay nasa loob ng 0.5 % ng Euler.

## Hawakan at lagyan ng load

Kailangan ng bawat study ng hindi bababa sa isang suporta at, para sa stress, isang load.

1. Pindutin ang {{ui:Fixed}} sa toolbar. Pinipili ang bagong suporta at naghihintay ng face: i-click ang mga face na nakahawak nang hindi gumagalaw (i-click ulit ang face para alisin ito). Pindutin ang **Done picking** o {{key:Esc}} kapag tapos na. Ang mga asul na kono ay nagmamarka ng mga face na hawak.
2. Pindutin ang {{ui:Force}} at i-click ang mga face na kinikilusan ng force. Sa panel, i-type ang **Total force** sa newton at piliin ang **Direction** nito: papasok sa face, o sa kahabaan ng axis. Hinahati ang force sa mga napiling face ayon sa area. Ipinapakita ito ng mga orange na arrow.
3. Pindutin ang {{ui:Pressure}} para sa pressure sa MPa (N/mm²) na tumutulak papasok sa mga napiling face; ang negatibong pressure ay humihila.

May mas maraming uri sa listahang **Add** ng panel: isang **Frictionless face** (maaaring dumulas ang face sa sarili nito pero hindi lumayo mula rito — gamitin ito para sa symmetry plane at makinis na suporta) at **Gravity** (sariling bigat ng piyesa, 9.81 m/s², sa direksyong pipiliin mo).

Tinatanggihan ang suportang nag-iiwan sa piyesa na malayang dumulas o umikot, at sinasabi kung aling galaw ang naiwang malaya.

## Mag-solve at basahin ang mga resulta

Pindutin ang {{ui:Solve}}. Tumatakbo sa background ang gawain; kinakansela ito ng **Stop**. Pagkatapos:

- Kinukulayan ang piyesa ayon sa **von Mises stress**; piliin ang **Displacement** o **Safety factor** sa **Show**. Ibinibigay ng legend ang sukat.
- Ituro ang piyesa para basahin ang mga halagang nasa ilalim ng pointer.
- I-tick ang **Deformed shape** para makita ang baluktot na piyesa (pinalalaki ang galaw ng **Scale**; ang totoo ay nasa table).
- Inililista ng table ang pinakamalaking stress at kung nasaan ito, ang pinakamalaking displacement, ang pinakamaliit na **safety factor** (yield strength ÷ von Mises stress; sa ibaba ng 1, nagyu-yield ang materyal), ang inilapat na load at ang **reactions** sa mga suporta (nagbabalanse ang mga ito sa load), at ang mesh na ginamit.

Para sa **natural frequencies**, piliin ang **Type** na iyon, itakda kung ilan ang **Modes**, at mag-solve. Ipinapakita ng bawat mode ang frequency at hugis nito (ang mga hugis ay sinusukat sa 1 sa pinakamalaki nilang galaw).

Kung babaguhin mo ang piyesa, mamarkahan ang mga resulta bilang luma na: mag-solve ulit.

## Yielding at contact (nonlinear na study)

May dalawa pang uri ng study na lumalampas sa "nananatiling elastic ang materyal":

- **Nonlinear (material yields)** ay sumusunod sa tuwid na linya ng materyal hanggang sa yield stress nito, pagkatapos ay mas patag na slope (**Slope after yield**, 1 % ng E kapag blangko). Nagpapatuloy ang load sa **Load steps**; ang hakbang na hindi tumatatag ay kinakalahati nang kusa. Idinaragdag ng mga resulta ang **Plastic strain** sa mga plot at sinasabi kung gaano karami ng load ang dinadala. Kung hindi pa rin tumatatag ang isang hakbang, hihinto ang study sa huling magandang hakbang at sasabihin ng ⚠ Problems panel kung nasaan: naubos na ng piyesa ang lakas nito doon (collapse), o masyadong malaki ang mga hakbang.
- **Contact between pieces** ay nagpapahintulot sa magkakahiwalay na bahagi ng piyesa na magtulakan. Magdagdag ng **Contact pair**, piliin ang mga face ng side A (ang mga face na pumipindot) gamit ang {{ui:Pick faces}}, pagkatapos ang side B gamit ang {{ui:Pick side B faces}}. Ang **Frictionless** na bahagi ay nagtutulakan, nagdudulas at naghihiwalay; ang **bonded** na bahagi ay nananatiling nakadikit. Bawat bahagi ay minemesh nang mag-isa, kaya okay ang maliit na puwang sa pagitan nila. Penalty method ang contact: bahagyang lumulubog ang mga bahagi sa isa't isa (ang **penalty factor** × E ÷ element size ang nagtatakda kung gaano katigas ang contact). Ipinapakita ng table ang pinakamalalim na paglubog, at nagbababala ang Problems panel kapag mahigit 1 % ito ng element size: itaas ang factor o gumamit ng mas maliliit na element.

Parehong gumagamit ng tetrahedral mesh ang dalawa. Hindi nilulutas dito ang friction, malaking pagdulas at malalaking pag-ikot.

## Patakbuhin sa CalculiX

**Export › CalculiX deck (.inp)** (o ang {{ui:Save a CalculiX deck (.inp)}} sa panel) ay nagse-save ng study bilang input deck para sa CalculiX, isang hiwalay na program na ini-install at pinapatakbo mo mismo: ang parehong mesh, materyal, suporta, load at contact pair, sa mm, N at MPa. Patakbuhin ito, pagkatapos basahin pabalik ng **Export › CalculiX results (.frd)** ang result file nito sa parehong mesh at ipinapakita ang displacement (at ang von Mises stress kapag may stress ang file). Kung nabago mo ang piyesa o ang element size sa pagitan, hindi na pareho ang mesh at sasabihin ito ng PartCraft: mag-save ng bagong deck.

## Gaano ito kapagkakatiwalaan

Sinusuri ng PartCraft ang solver nito laban sa mga hand formula (ang tip deflection ng cantilever na PL³/3EI sa loob ng 1 %, ang pag-unat ng bar na PL/AE nang eksakto, ang unang frequency ng cantilever sa loob ng 3 %, ang stress sa paligid ng butas sa plato). Gayunpaman, tandaan ang mga limitasyong ito:

- **Ang mesh.** Sa tetrahedra, sinusuri ng PartCraft ang deflection at bending stress ng cantilever (sa loob ng 0.3 %), ang stress sa butas ng plato (Kt, sa loob ng humigit-kumulang 1 %), isang makapal na tubo sa ilalim ng pressure (Lamé, sa loob ng 0.3 %) at ang unang frequency (sa loob ng 0.4 %). Ipinapakita ng table ang **mesh quality** (ang pinakamaliit at pinakamalaking anggulo sa pagitan ng mga face ng element; sa ibaba ng humigit-kumulang 10° ay mahina ang element) at isang **estimated stress error**: kung higit ito sa ilang porsyento, mag-solve ulit gamit ang mas maliit na element size, o hayaang gawin ito ng **Awtomatikong pinuhin**. Sa plato na may butas at bar na may dalawang notch sa gilid, nakalapit ang awtomatikong pagpipino sa loob ng 1 % ng textbook Kt gamit ang humigit-kumulang isang-ikaanim ng mga unknown na kailangan ng mas pinong buong mesh. Sa voxel cube, ang butas o fillet ay hagdanan sa laki ng cube, kaya magaspang ang stress doon.
- **Ang matatalas na inside corner at gilid ng fixed face ay walang tunay na peak stress.** Patuloy na tumataas ang halagang doon habang lumiliit ang mga element. Basahin ang mga stress nang bahagyang malayo sa ganoong lugar, o pabilugin ang sulok sa model.
- **Mga resultang babasahin.** Bukod sa von Mises stress, displacement at safety factor, ipinapakita ng tetrahedral study ang **maximum at minimum principal stress** (tension at compression) at ang **equivalent strain**. I-tick ang **Show mesh** para makita ang mga element.
- **Ang static na study ay linear at elastic.** Para sa yielding at contact, gamitin ang mga nonlinear na uri ng study sa itaas; hindi nilulutas ang malalaking deflection at fatigue. Ang heat, thermal stress at linear buckling ay sarili nilang uri ng study: tingnan ang [Heat, thermal stress at buckling](topic:thermal-and-buckling).
- **Pareho ang lahat ng materyal sa lahat ng direksyon.** Ang mga plastik na 3D-print ay mas mahina sa kabila ng kanilang mga layer, kadalasan ng isang-katlo o higit pa.
- Ito ay lab build: suriin sa ibang paraan ang mga piyesang mahalaga.

## I-update habang nag-e-edit (Live)

I-tick ang **Update while I edit** sa Solve block at susunod sa mga pagbabago mo ang mga sagot ng Simulation. Baguhin ang dimension, load, materyal o environment at agad lilitaw ang isang **quick answer**, na ginawa gamit ang mga element na apat na beses na mas malaki kaysa sa study; kapag huminto ka sandali (mga isang segundo), papalitan ito ng **refined answer** ng study mismo. Sinasabi ng mga resulta kung alin ang tinitingnan mo ("Quick answer" o "Refined answer") at ang element size. Mainam ang quick answer para sa direksyon at laki: sa steel cantilever, nasa loob ito ng 1 % sa deflection at humigit-kumulang 4 % sa stress ng refined. Pagkatiwalaan ang refined para sa mga numerong gagamitin mo. Gumagana nang ganito ang static, natural-frequency, thermal at buckling na study; ang Live ay setting ng view at hindi naka-save sa piyesa. Ang Solve na pinindot mo mismo ay nananatili hanggang sa susunod na pagbabago.

## Alamin kung ano ang unang masisira (Break it)

Para sa static o buckling study, pindutin ang **What breaks first?** sa **Break it** block. Ini-scale ng PartCraft ang mga load ng study (force, pressure at bigat nang sabay) hanggang sa sumuko ang piyesa, at inililista, mula sa pinakamasama, ang **load factor to first yield** (ang factor sa kasalukuyang load kung saan naaabot ng pinakamataas na von Mises stress ang yield ng materyal, na may pulang marker kung saan ito nangyayari) at ang **load factor to buckling** para sa parehong suporta at load. Ang factor na 4.3 ay nangangahulugang kaya ng piyesa ang 4.3 beses ng load nito bago mag-yield; **ang factor na mas mababa sa 1 ay nangangahulugang sumusuko na ito sa kinalalagyan ng load**, at lumalabas iyon sa listahan ng Problems bilang error (ang pinakamahinang natuklasan ay ipinapakitang note kahit kapag maayos ang lahat). Galing sa linear study sa tetrahedra sa iyong element size ang mga factor, kaya kasing-tibay lamang ng study na iyon ang mga ito: walang tunay na peak ang stress sa fixed face o matalas na sulok (tingnan sa itaas), at nasa maingat na panig ang yield factor doon. Maaaring patakbuhin ng iyong assistant ang parehong check gamit ang `break_run` tool.

## Kaugnay

- [Heat, thermal stress at buckling](topic:thermal-and-buckling)
- [Gumawa ng hugis mula sa load (Generative)](topic:generative-design)
- [Sukatin ang distansya, anggulo at masa](topic:measure)
- [Ano ang hindi pa nabubuo](topic:not-built-yet)
