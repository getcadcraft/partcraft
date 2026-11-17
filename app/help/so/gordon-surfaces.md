---
title: Dushyo ka dhex mara shabakad curve ah (Gordon surface)
summary: Samee hal dusha siman oo ka dhex mara shabakad curve-yo profile ah iyo guide ah oo lagu sameeyay sketch-yada ama laga qaatay geesaha moodelka; ku xidh jidh adag marka profile-yadu xidhan yihiin, iyo waxa saxda ah, waxa lagu qiyaasay, iyo fariimaha marka shabakadu ku habboon tahay.
keywords: taabasho, tangent, g1, taabasho joogto ah, diyaarada muraayadda, gordon surface, shabakadda curve-yada, dusha xadka, dusha shabakadda, profiles, guides, curve-yada guide, loft oo leh guide, guide rails, skin, transfinite, coons, b-spline dusha, dusha qaab xor ah
from: ada3cb8b
---

:::note
**Wali lama dhisin nooca hadda.** Gordon surface wuxuu u baahan yahay kernel joogto saxan, oo nooca PartCraft-ka hadda ma leh: wuxuu qayb kasta ku dhisaa mesh kernel. [Waxa aan wali la dhisin](topic:not-built-yet) wuxuu sheegayaa waxa lagu sameeyo halkaas. Qaybta kale waxay ku tusaysaa sida uu u shaqeeyo kernel-ka saxda ah.
:::

**Gordon surface** waa hal dusha oo mari kara curve kasta oo shabakad ah: set ah **profiles** oo u socda hal jihada iyo set ah **guides** oo u socda jihada kale, isku gudba sida xariijimaha shabakad. Waxaa lagu qaabeeyaa hal haas, hal gacan ama hal qabad curve-yo qaybeed oo kowdood aad si toos ah u xakamaynayso. Wuxuu u baahan yahay **kernel saxda ah** (eeg [Kernel-ka mesh-ka](topic:solid-kernels)).

## Sawirka shabakadda

1. Samee **profiles**: laba curve ama in ka badan oo isku dhinac socda, tusaale ahaan qaybo diyaaradaha isku siman. Xariiqyo, qalooc, goobo iyo splines oo dhan way shaqeeyaan, silsilad curve-yo kuwa isku xidhan jeex-jeex waxay tiraysaa hal curve.
2. Samee **guides**: laba curve ama in ka badan oo isku gudba profiles. Guide kasta waa inuu gudbaa profile kasta mar keliya, profile kastana guide kasta mar keliya.
3. Hubi in curve-yadu si dhab ah isu kulmaan. Sketch-ka guide-ka u samee si curve-kiisu u gudbo barooyinka profiles (ku dhejiso barooyinka la mala-awaado, ama qor isku-xidhka). Shabakaddu waxay aqbaleysaa farqiyo ilaa **Tolerance** (0.01 mm marka hore).

Hal sketch wuxuu ku hayn karaa curve-yo badan: silsilad kasta oo kala go'an waa curve gaar ah. Sidaas darteed waad sawiri kartaa guide-yada oo dhan hal sketch oo ku yaal diyaarada korka, tusaale ahaan.

## Samee dusha

1. Dooro {{ui:More}} kooxda Features, kadibna {{ui:Gordon surface}}.
2. PartCraft wuxuu qaadaa sketch-yada aan wax loo isticmaalin: kuwa diyaarado isu-siman kii hore ayay noqdaan **profiles**, kuwa kale **guides**. Hubi liiska midig oo deji sketch kasta **Profiles**, **Guides** ama **Not used**.
3. Si aad u isticmaasho geesaha qaybta, riix **Pick edges as profiles** (ama **as guides**), dhagsii geesaha muuqaalka, kadibna riix Esc.

Natiijadu waa **surface body**. {{ui:Thicken}} wuxuu u beddelaa jidh adag, {{ui:Stitch}} wuxuu isku xidhaa dusho kale, {{ui:Trim surface}} wuxuu gooyaa.

### Xir oo noqo jidh adag

Marka profiles-ku yihiin curve-yo xidhan (goobo, splines xidhan, silsilado xidhan) oo profile-ka koowaad iyo kii ugu dambeeya kasta mid ayuu ku jiraa diyaarad fidsan, calaamadi **Close to a solid**. Dhamaadyadu waxay ku xirmaan wejiyo siman, qaabka xidhanna wuu ku biiraa, gooyaa, isgoyaa ama noqdaa jidh cusub sida feature kasta. Tani waa habka loft ah ee raacaya curve-yada guide-ka. Waxay sidoo kale shaqeysaa guide-yada xidhan.

## Taabasho diyaarad ku dhex jirta geesta

Gordon surface wuxuu mararka qaar mara curve-yadiisa, laakiin isagu keligiis ma waafaqo jiifka wixii uu taabto. Si uu ka tago geeso **tangent** diyaarad (G1), tusaale ahaan diyaarada muraayadda, si nuqulka muraayadda uu ugu biiro si aan qallooc lahayn, ama wejiga siman uu ka koro:

1. Dooro feature-ka Gordon. Hoos **Tangent to**, dooro diyaarad ka mid ah {{ui:Add a plane…}} (Front, Top, Right ama diyaarad tixraac), ama dooro dusha siman muuqaalka oo riix {{ui:Add the picked flat face}}.
2. PartCraft wuxuu helaa curve-ka xadka shabakadda ee ku jira diyaaradaas, dusha wuxuu ka tegaa si tangent ah diyaaradda.

Haddii diyaarad ku hayso laba curve oo xadka ah (dhul hoose labada dhamaad), ku dar laba jeer: nuqul kasta wuxuu qaadaa mid xiga. Ilaa afar diyaarad, mid geesta kasta.

Warbixinta waxay sheegaysaa curve-ka uu diyaarad kasta ku sameeyay tangent, iyo xagalka ugu weyn ee dusha uu diyaaraddaas ku kulmay ka hor. Guide-yada hore u ka tegaya curve-kaas si tangent ah diyaaraddu waa la raacaa si sax ah. Guide-yada ka kaca curve-ka waa la foorarsadaa qaybta khafiifka ah ee geesta, iyo lambarka "follows every curve within" ee warbixinta wuxuu sheegayaa inta ay tahay: guide-yada ka tegaya geesta siman ku sawir si aad u hesho habboon sax ah.

## Waxa saxda ah iyo waxa lagu qiyaasay

Panelku wuxuu sheegayaa kan khuseeya, iyo sida dusha uu uga fogaadayo curve-yadaada.

- **Exact**: marka curve kasta yahay polynomial (xariiqyo, splines iyo silsiladahoodu) guide-yadu marka ay gudbaan dhammaan profiles-ka ay ku jiraan isla parameters-ka, dusha waa Gordon surface saxda ah ee curve-yadaas. Shabakad iso-curves ah oo laga gooyay dusha bicubic ayaa soo celisa dushaas, afar xariiq toosan waxay siiyaan dusha siman ama patch bilinear ah oo qallooc leh.
- **Fitted**: arcs, goobo iyo geesaha qaybta ma aha polynomial, curve-yada gudbaya parameters kala duwan waa in dib loo waqtiyo si ay isgudbiyaan. Curve-yadaas waxaa lagu habeeyaa B-spline-yo sax ah oo ku jira hal tobnaad ee milyan ee cabbirka shabakadda (qiyaastii 0.00001 mm qaybta 100 mm). Patch-ka silinda oo laga sameeyay arcs iyo xariiqyo wuxuu ku sii jiraa 0.00001 mm silinda dhabta ah.

Curve-yada dhexdooda dusha waa waxa habku siiyo: profiles-ka oo ay isku qasaan dhinac-dhinac, iyo guides-ka oo isla sidaas, ka dibna ka jar qasasha barooyinka isgudbinta. Waa siman tahay meel kasta marka laga reebo meesha curve-ku leeyahay geeso xiran. Marka laba Gordon surfaces ay wadaagaan curve xadka, waxay isku xidhmaan geeso ilaa geeso (G0), ma aha tangent.

## Marka shabakaddu ku habboon tahay

| Fariinta | Waxa aad sameyso |
|---|---|
| "… do not meet: they pass 0.4 mm apart" | Samee profile-kaas iyo guide-kaas inay gudbaan, ama kor u qaado Tolerance |
| "… meets … 2 times" | Guide-ku wuxuu gudbi karaa profile kasta mar keliya: kala qaybi curve-ka wareegaya, ama isticmaal profiles yar |
| "in a different order" ama "folds over itself" | Laba guide ayaa isgudbaya (ama laba profiles). Qoysaska waa inay u socdaan dhinac-dhinac |
| "at least two profiles and two guides" | Ku dar curve-yo, ama deji sketch-yo badan Profiles ama Guides |
| "mix open and closed curves" | Dhammaan profiles-ka ka dhig furan ama xidhan (isla sidaas guide-yada) |
| "An end … is not flat, so it cannot be capped" | Profile-ka koowaad iyo kii ugu dambeeyay xidhan samee hal diyaarad mid kastaa, ama ka tag Close to a solid |

## Xadadka

- Hal B-spline face oo shabakad kasta: ma jiro G1 ama G2 tangency dusaha deriska ah.
- Xidhmada shabakadda xidhan, guide-ka koowaad, waa la isku xidhay geeso ilaa geeso laakiin ma tangent.
- Feature-ka Loft laftiisu ma leeyahay guide rails; isticmaal Gordon surface oo xir jidh adag.
- Curve-yo aad u wareegsan, ama isgudbin aan isku mid ahayn oo ku kala fog curve hal mid kale, waxay u baahan karaan barooyin badan si ay u habboonaadaan; feature-ku markaas ayuu sheegaa.
