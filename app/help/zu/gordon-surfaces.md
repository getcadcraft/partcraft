---
title: Izindawo ngomnatha wamajika (ubuso be-Gordon)
summary: Yenza ubuso obubodwa obushelelezi obudlula kugridi yamajika eprofayili nemihlahlandlela edwetshwe kuma-sketch noma athathwe emiphetheni yemodeli; uwavale abe yisisekelo uma eprofayili evaliwe, nokuthi yini eqondile, yini elingana, nemilayezo lapho umnatha ungalingani.
keywords: ethintayo, ukuthinteka, g1, ukuthinta okuqhubekayo, indiza yokubonisa, ubuso be-gordon, umnatha wamajika, ubuso bomngcele, ubuso womnatha, eprofayili, imihlahlandlela, amajika ahamba nomhlahlandlela, imihlahlandlela yokuhamba, skin, transfinite, coons, ubuso be-B-spline, ubuso obungahlelekile
from: ada3cb8b
---

:::note
**Akukakwakhiwa okwamanje kulolu hlobo.** Ubuso be-Gordon budinga ikhestelo eliqondile lejiyometri, okungelona elaseleyo kulolu hlobo lwe-PartCraft: yakha zonke izingxenye ngekhestelo le-mesh. [Okungakakwakhiwa](topic:not-built-yet) kuchaza okufanele wenze esikhundleni salokho. Lo khasi usala uchaza kanjani lokhu kusebenza ngekhestelo eliqondile.
:::

I-**Gordon surface** iyiyo ubuso obubodwa obudlula kuwo wonke amajika womnatha: isethi ye-**profiles** ehamba ngendlela eyodwa nesethi ye-**guides** ehamba ngenye, edlula kwenye njengezintambo zenethi. Yindlela yokwakha uqweqwe lomkhumbi, ifenda noma isibambo ngamajika ambalwa osewalawula ngqo. Idinga **ikhestelo eliqondile** (bheka [Ikhestelo le-mesh](topic:solid-kernels)).

## Dweba umnatha

1. Dweba i-**profiles**: amajika amabili noma ngaphezulu ahamba eceleni kwenye, njengezigaba ezingabhekene ndiza ezilinganayo. Imigqa, amajika, izindilinga nama-splines konke kuyasebenza, futhi uchungechunge lwamajika ahlanganiswe ekugcineni ngakunye lubalwa njengejika elilodwa.
2. Dweba i-**guides**: amajika amabili noma ngaphezulu ahamba ahambise amaprofayili. Umhlahlandlela ngamunye kumele adlule kuyo yonke i-profile kanye, nayo yonke i-profile kanye ngayinye guide.
3. Yenza amajika ahlangane ngempela. Dweba i-sketch yomhlahlandlela ukuze ijika lawo ladlule emaphoyinteni e-profiles (ngokuhlanganisa namaphoyinti aprojektiwe, noma uthayipha izixhumanisi). Umnatha wamukela izikhala ezikuya ku-**Tolerance** (0.01 mm ukuqala).

Isketshi eyodwa ingabamba amajika amaningi: ichungechunge ngalinye elihlukile kuyo liyijika lalo. Ngakho ungadweba yonke imihlahlandlela kwisketshi eyodwa endizeni ephezulu, ngesibonelo.

## Yenza ubuso

1. Khetha {{ui:More}} eqenjini le-Features, bese {{ui:Gordon surface}}.
2. I-PartCraft ithatha ama-sketch ongekho owasebenzisayo: lawo asendizeni ezilingana nowokuqala aba **profiles**, amanye aba **guides**. Hlola uhlu oluseningizimu bese usetha ngalinye ibe **Profiles**, **Guides** noma **Not used**.
3. Ukuze usebenzise imiphetho yengxenye, chofoza **Pick edges as profiles** (noma **as guides**), chofoza imiphetho embonweni, bese ucindezela Esc.

Umphumela uyi-**surface body**. {{ui:Thicken}} iyiguqula ibe yisisekelo, {{ui:Stitch}} iyithungela ezinye izindawo, futhi {{ui:Trim surface}} iyasika.

### Yivale ibe yisisekelo

Uma amaprofayili eyimigqa evaliwe (amajika, ama-splines avaliwe, uchungechunge oluvaliwe) futhi i-profile yokuqala nokugcina ngalinye lilele phansi endizeni, hlola **Close to a solid**. Iziphetho ziyavalwa ngobuso obuqondile futhi ibhokisi evaliwe iyahlanganiswa, iyasikwa, ihlanganiswe noma iba umzimba omusha njengesinye isici. Yile ndlela yokwenza loft elandela imihlahlandlela yamajika. Iyasebenza nakwezimhlahlandlela ezivaliwe.

## Thintela endizeni ngomphetho

Ubuso be-Gordon budlula ezigodini zawo, kodwa ngokwalo abuhambisani nokwenyuka kwalokho okuhlangana nakho. Ukuze lushiye umphetho lu**thintile** endizeni (G1), njengendiza yokubonisa, ukuze ikhophi ebonisiwe ihlanganiswe ngaphandle kokugoba, noma ubuso obuqondile okukhula kuwo:

1. Khetha isici se-Gordon. Ngaphansi kwe-**Tangent to**, khetha indiza ku-{{ui:Add a plane…}} (Front, Top, Right noma indiza yesethulo), noma khetha ubuso obuqondile embonweni bese ucindezela {{ui:Add the picked flat face}}.
2. I-PartCraft ithola ijika lomngcele womnatha olilele kuleyo ndiza, bese ubuso buthinta lowo jika endizeni.

Uma indiza ibamba amajika omngcele amabili (uphansi phezu kwazo zombili izinhlangothi), yengeze kabili: ikhophi ngayinye ithatha elilandelayo. Kufika kwezine, indiza eyodwa ngomphetho ngamunye.

Umbiko ukhombisa ukuthi ithinte ijika liphi endizeni nokuthi ubuso budlule kanjani kuleyo ndiza ngaphambi kwalokho. Imihlahlandlela esivele ithinta lelo jika ngokuqondile iyalandelwa ngempela. Imihlahlandlela eyenyuka isuke kuleyo jika igoba emaphethelweni amancane eduze komphetho, futhi inani elithi "follows every curve within" embikweni lisho ukuthi kangakanani: dweba imihlahlandlela ishiya umphetho ubuqondile ukuze uthole ukulingana okuqondile.

## Okuqondile nokulinganiswayo

Ipaneli isho ukuthi yiyiphi kulezi ezisebenza, nokuthi ubuso buphambuka kangakanani ekujikeni kwakho.

- **Exact**: lapho wonke amajika eyi-polynomial (imigqa, ama-splines nochungechunge lwawo) nemihlahlandlela ihlanganisa zonke izinhlangothi ngamapharamitha afanayo, ubuso buqondile ngempela njengobuso be-Gordon walawo majika. Umnatha wamajika ama-isoline acwiliswe kubuso be-bicubic uyawubuyisela lowo buso, futhi imigqa emine eqondile inikeza i-patch eqondile noma egoqekile (bilinear).
- **Fitted**: amaseki, izindilinga nemiphetho yengxenye akuyona i-polynomial, nemajika ahlanganisa ngamapharamitha ahlukile kudingeka aphinde akalwe ukuze ukuhlangana kuhambisane. Lawo majika alingene ngama-cubic B-splines kungakapheli ngomkhawulo owu-ten-millionth wosayizi womnatha (cishe 0.00001 mm yengxenye engu-100 mm). I-patch yesilinda eyenziwe ngamaseki nemigqa ihlala ngaphakathi kwe-0.00001 mm kwesilinda sangempela.

Phakathi kwamajika ubuso yilokho indlela ekunikeza: amaprofayili ahlanganiswa phakathi, kanye nemihlahlandlela ehlanganiswa phakathi, ngaphandle kokuhlanganiswa kwamaphoyinti awo ahlanganayo. Ibushelelezi endaweni yonke ngaphandle kwalapho ijika linekhona ebukhali. Lapho ama-Gordon surfaces amabili ahlangana umngcele wejika linye ahlangana emaphethelweni (G0), kungekhona ngokuthintana.

## Lapho umnatha ungalingani

| Umlayezo | Yenzani |
|---|---|
| "… do not meet: they pass 0.4 mm apart" | Yenza leyo profile nomhlahlandlela ahlanganise, noma phakamisa i-Tolerance |
| "… meets … 2 times" | Umhlahlandlela ungadlula kuyo yonke i-profile kanye kuphela: hlukanisa ijika elijikelezayo, noma sebenzisa amaprofayili ambalwa |
| "… in a different order" noma "folds over itself" | Imihlahlandlela ihlangana omunye (noma amaprofayili amabili ahlangana). Imindeni kumele ihambe eceleni |
| "at least two profiles and two guides" | Engeza amajika, noma setha ama-sketch amaningi ukuze abe ngamaProfayili noma ngamaGuides |
| "mix open and closed curves" | Yenza wonke amaprofayili avulekile noma wonke avaliwe (kanjalo nemihlahlandlela) |
| "An end … is not flat, so it cannot be capped" | Dweba i-profile yokuqala nokugcina evaliwe endizeni eyodwa ngayinye, noma ushiye Close to a solid ingavulekile |

## Imikhawulo

- I-B-spline face eyodwa ngomnatha ngamunye: akukho G1 noma G2 ukuthinta kubuso obuseduze.
- Umphetho womnatha ovaliwe, endaweni yomhlahlandlela wokuqala, uhlanganiswa ngemiphetho kodwa awuthintanga.
- Isici se-Loft ngokwaso asinamahlahlandlela ahamba ngaphansi; sebenzisa ubuso be-Gordon olusetshenziswe lwavaliwa lube yisisekelo.
- Amajika agobile kakhulu, noma ukudlula okubekwe kabi kakhulu esijikeni esisodwa uma kuqhathaniswa nesinye, kungadinga amaphoyinti amaningi ukuze alingane; isici sizosho lokho.
