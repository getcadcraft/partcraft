---
title: Khipha ukuze kuphrintwe, STEP ne-DXF
summary: Khipha ingxenye njenge-STL noma 3MF ukuze kuphrintwe nge-3D, njenge-STEP eqondile yezinye izinhlelo ze-CAD ne-CAM, nesikethi noma ubuso obuthe njenge-DXF ukuze kusikwe nge-laser nangommese wamanzi.
keywords: khipha, londoloza njenge, ifc, bim, amasethi wezakhiwo, stl, 3mf, ukuphrinta nge-3d, slicer, step, stp, step eqondile, b-rep, ap242, ap214, cam, incwadi yomshini, ukugaya, dxf, laser, ummese wamanzi, cnc, iphrofayili yobuso, iphrofayili, imesh, ngobuso
from: e1de71d5
---

Ukukhipha kuyizikopi ngamanye amafomethi. Gcina nefayela `.partcraft.json`: yilo kuphela ifayela i-PartCraft engayivula futhi iyihlele.

Konke ukukhipha kusebenza ngengxenye esesikrinini, ngamamilimitha. Kwinhlanganisela, i-STL, i-3MF, i-STEP nomdwebo (PDF) zikhipha yonke inhlanganisela: bheka [Uhlu lwezingxenye, izibonakaliso ezihlukaniswe nezingxenye ezinyakazayo](topic:assembly-bom-explode). Uma ingekho isolidi okwamanje: "Akukho isolidi okungakhishwa okwamanje."

## Ukuze kuphrintwe nge-3D: STL noma 3MF

1. Uma kufunwa: ukuze kube bushelelezi ezindaweni ezijikelezayo, chofoza isikhala esingenalutho ukuze kungakhethwa lutho bese usetha **Amajika** ibe **Kuhle (128 ngokujikeleza)** noma **Kuhle kakhulu (256 ngokujikeleza)** kwiphaneli yangakwesokudla. I-STL ne-3MF zihlala zenziwe ngamatriyangula.
2. Khetha {{ui:Thumela}}, bese {{ui:STL, ukuze kuphrintwe nge-3D}} noma {{ui:3MF, ukuze kuphrintwe nge-3D}}.
3. Ifayela liyalandwa. Ibha yesimo ithi, ngokwesibonelo, "Ikhishiwe Part1.stl (binary, mm, Z up, 1536 triangles)."

Zombili izifomethi zi-**Z up**, njengoba iziphrinta nama-slicer edinga. Umhlaba we-PartCraft uyi-Y up, ngakho ukukhipha kujikisa ingxenye: okuphakanyelwa phezulu ku-PartCraft (kuhlangana nepulani le-Top) kuphakanyelwa phezulu ku-slicer, nengxenye edwetshwe kupulani le-Top ilele phansi ebhedini. Setha ukuma kokugcina ku-slicer yakho uma kudingeka.

I-3MF iyifomethi entsha, encane, abafundi bama-slicer bayifunda ineziyunithi zayo ngaphakathi. Sebenzisa i-STL uma uhlelo lungayamukeli i-3MF.

Ukuze uqinisekise kuqala ukuthi ingxenye ivaliwe, ilingana ibhedi yesiphrinta sakho futhi imi phezu kobuso obuthe, sebenzisa {{ui:Thumela}} › {{ui:Hlola ukuprinta nge-3D (STL noma 3MF)…}}: bheka [Lungiselela ingxenye ukuze iphrintwe nge-3D](topic:print-3d).

## Ezinye izinhlelo ze-CAD: STEP

Khetha {{ui:Thumela}}, bese {{ui:STEP AP242 (isolidi eqondile)}}. Ibhala ingxenye njengesolidi eyodwa eqondile, ngamamilimitha, ijikiswe ibe yi-Z up. Izindawo ezijikelezayo zibhalwa njengamasilinda, amakhoni, amasfere namathoyi eqondile, nemiphetho yawo eyimijikelezo eqondile, ukuze olunye uhlelo lukwazi ukukhetha umgodi njengomgodi. Indiki evulwe kufayela le-STEP igcina ubuso bayo obuthe, amasilinda, amakhoni, amasfere namathoyi ayo, ngakho nawo aphuma eqondile. Ubuso ongenalezo zindawo (uhlangothi lwe-spline, unembe owenziwe, indiki evela kumeshi we-STL, OBJ noma 3MF, i-spline yefayela le-STEP, ubuso oluhanjisiwe nolujikelezayo) luhlala lungamafasethi amancane abuthe kulesisolidi efanayo, futhi ibha yesimo ithi kangaki. Ibha yesimo ithi, ngokwesibonelo, "Ikhishiwe Flange.step (AP242, isolidi eqondile, mm, Z up): izinhlangothi ezingu-14 ezisezindaweni zazo zangempela (10 zesilinda, 1 eyikhoni, 0 zesfere, 0 zetoyi), amajika emiphetho afanele angu-0." Iqukethe isolidi kuphela: akukho mlando, akukho zikethi, akukho mdwebo. Uma olunye uhlelo lufunda i-AP214 kuphela, khetha {{ui:STEP AP214 (isolidi eqondile)}}: isolidi efanayo kuleso sakhiwo sakudala.

Okuqondile nokungaqondile:

- Ubuso obuthe, amasilinda (imigodi, amabhosi, amafilethi emiphetho eqondile), amakhoni (imigodi ekhonkayo, ama-taper), amasfere namathoyi kuqondile, kanjalo nemiphetho yawo eqondile, eyisiyingi nemiphetho ye-elliptical. Isilungiselelo **Amajika** asiwashintshi.
- Lapho izinhlangothi ezimbili ezijikelezayo zihlangana (umgodi obhodlwe ngaphezu kwesampu), umphetho uba ijika elibushelelezi elilingene kuzo zombili izindawo ngaphakathi kwe-0.00001 mm; "amajika emiphetho afanele" ayawubala lowo mahlule.
- Umgodi ovaliwe ngaphakathi kwengxenye ubhalwa njengendawo engenalutho esolidini. Izingxenye ezihlukene eziningi zibhalwa njengezolidi eziningi.
- Inhlanganisela aikabhalwa njenge-STEP eqondile okwamanje: khipha ingxenye ngayinye.

Ihlolwe ngokufunda amafayela ngokuphindela emuva ku-OpenCascade, ebika izolidi ezisebenzayo nevolumu ezibalwe ngesandla. Ayikavulwa kuzo zonke izinhlelo ze-CAD noma ze-CAM; uma enye yenqaba ifayela, {{ui:STEP (ngobuso, kernel yemeshi)}} ibhala ukwakheka okufanayo njengobuso obuthe (ku-eksisi zePartCraft, Y up), futhi sicela usitshele nge-{{ui:Usizo}} › {{ui:Bika inkinga}}.

Ukuze kugaywe, i-Manufacture nayo ibhala isolidi eqondile ngokuhlelwa komsebenzi wokusetha: bheka [Yenza ama-toolpath ne-G-code](topic:manufacture#exact-step-for-the-shop).

## Zezinhlelo ze-BIM: IFC nazo zonke izici

Khetha {{ui:Thumela}}, bese {{ui:IFC 4 (ngazo zonke izici)}}. Ibhala ingxenye njengento ye-IFC 4 yamamodeli wezakhiwo nezitshalo, ukwakheka kwayo njengamatriyangula (Z up, amamilimitha), nolwazi lwe-PartCraft olunalo ngayo njengamasethi wezakhiwo:

| Isethi yezakhiwo | Iqukethe |
|---|---|
| **PartCraft_Part** | Igama, impahla nokuminyana kwayo, ukucushwa okusebenzayo, inani lezidumbu; kwinhlanganisela futhi inombolo yengxenye nencazelo |
| **PartCraft_Parameters** | Yonke iparamitha yengxenye nenani layo; ifomula nenothi kuncazelo yezakhiwo |
| **PartCraft_TitleBlock** | Izinkambu zebhulokhi yesihloko somdwebo ozigcwalisile (isihloko, inombolo yomdwebo, ukubuyekezwa, inkampani, odwetshiwe, ohlolwe futhi ovunyelwe ngu-, usuku, ukuqeda, ukubekezelela okujwayelekile) nosayizi weshidi |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Ivolumu, indawo yobuso, ubunzima (nempahla) nosayizi jikelele |

Impahla inamathiselwa njengempahla ye-IFC, futhi inombolo yomdwebo iyithegi yento. Kwinhlanganisela, ingxenye ngayinye ibhalwa kanye njengohlobo oluphethe izakhiwo zayo, nekhophi ngayinye ibekwa lapho inhlanganisela iyibeka khona, nenani layo siqu ku-**PartCraft_Instance**: igama layo, inombolo yayo ohlwini lwempahla, nokuthi iyingxenye eyisisekelo noma cha.

## Amaphrofayili we-laser, wamanzi noma we-CNC: DXF

Izinhlobo ezimbili ze-DXF, zombili inguqulo ye-R12, ezivulwa yonke izinhlelo ze-CAD ne-CAM:

### Isikethi

1. Khetha isikethi komlando (noma sivulekile).
2. Khetha {{ui:Thumela}}, bese {{ui:DXF yesikethi noma yobuso obuthe}}. (Iphaneli yangakwesokudla yesikethi nayo inayo {{ui:Khipha njenge-DXF}}.)

Uthola `<part> - <sketch>.dxf` ngokuhlelwa kwesikethi sayo: imigqa, amasongo aqondile nezindilinga ku-ungqimba **PROFILE**, ijiyometri yokwakha ku-**CONSTRUCTION**, namaphoyinti angalungiswanga ku-**POINTS**.

### Ubuso obuthe besolidi

1. Chofoza ubuso obuthe embonweni (isibonelo, phezulu kwephuleti elinemigodi).
2. Khetha {{ui:Khipha ubuso njenge-DXF}} kwiphaneli yangakwesokudla, noma {{ui:Thumela}}, bese {{ui:DXF yesikethi noma yobuso obuthe}}.

Uthola `<part> - face.dxf`: imbobo yobuso nayo yonke imigodi kuyo. Umgodi ojikelezayo (isiyingi esiphelele lapho isilinda sihlangana nobuso: umgodi obhodliwe, noma umgodi wefayela le-STEP elivuliwe) ubhalwa njengendilinga eqondile ngesikhungo nobubanzi bomgodi uqobo. Yonke enye imbobo iyiphoyilayini evaliwe, namaphethelo ayo ajikelezayo (amakhona amafilethi, izikhala, amasongo) ayizinhlangothi zayo, ngakho setha **Amajika** ibe **Kuhle** kuqala uma umbheki elandela kuwo ngokuseduze. Ibha yesimo ithi kangaki imbobo, kangaki kuzo eziyizindilinga eziqondile, nendawo yobuso.

Uma kungakhethiwe isikethi noma ubuso obuthe: "Vula noma khetha isikethi, noma khetha ubuso obuthe, ukuze ukhiphe i-DXF."

## Umdwebo

Umdwebo we-PDF unesiqondiso sawo: [Yenza ishidi lomdwebo](topic:drawing-pdf).

## Amafomethi angatholakali

Ayikhishwa kulesi sakhiwo: glTF, OBJ, IGES ne-Parasolid. I-DWG ibhalwa kuphela yiphakheji yezinguqulo, njengeshidi lomdwebo: bheka [Yenza iphakheji yezinguqulo kokucushwa kwakho](topic:variant-pack). Bheka [Amafomethi amafayela](topic:file-formats).
