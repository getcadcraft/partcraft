---
title: Dhoofinta daabacaadda, STEP iyo DXF
summary: Qaybta u dhoofi STL ama 3MF daabacaadda 3D, u dhoofi jidh STEP oo saxda ah barnaamijyada CAD iyo CAM kale, iyo naqshad ama wejiga fidsan sida DXF goynta laser iyo waterjet.
keywords: dhoofi, kaydi sida, ifc, bim, property sets, stl, 3mf, daabacaadda 3d, slicer, step, stp, step saxda ah, b-rep, ap242, ap214, cam, dukaanka birta, milling, dxf, laser, waterjet, cnc, flat pattern, profile, mesh, faceted
from: e1de71d5
---

Dhoofintu waa nuqul qaab kale ah. Faylka `.partcraft.json` ha ku hayso sidoo kale: waa kaliya faylka PartCraft mar kale furi karto oo tafatiri karto.

Dhammaan dhoofinta waxay ku shaqeeyaan qaybta shaashadda ku jirta, millimitir ahaan. Isku-dhisnaha, STL, 3MF, STEP iyo Naqshad (PDF) waxay dhoofiyaan isku-dhisnaha oo dhan: eeg [Liiska qaybaha, muuqaallada kala go' iyo qaybaha dhaqdhaqaaqa](topic:assembly-bom-explode). Haddii weli aanu jirin jidh: "Weli ma jiro jidh la dhoofin karo."

## Daabacaadda 3D: STL ama 3MF

1. Ikhtiyaari: wejiyada wareegsan ee siman, guji meel bannaan si waxba aan loo dooran, kadibna deji **Qalloocyada** ilaa **Fiican (128 wareeg kasta)** ama **Aad u fiican (256 wareeg kasta)** panelka midig. STL iyo 3MF had iyo jeer waxay ka samaysan yihiin saddex-geesood.
2. Dooro {{ui:Dhoofi}}, kadibna {{ui:STL, daabacaadda 3D}} ama {{ui:3MF, daabacaadda 3D}}.
3. Faylku wuu soo degsadaa. Xaaladda xagga hoose waxay tusaysaa, tusaale ahaan, "Exported Part1.stl (binary, mm, Z up, 1536 triangles)."

Labada qaab waa **Z sare**, sida daabiyayaasha iyo slicer-yada u filan. Jihada PartCraft ee Y sare (wejiga sare ee Top ee ku jaaqsan) waxay ku sarreysaa slicer-ka, qaybta lagu naqshadeeyay wejiga Top ayaa ku fidsan safaxa. Jihada ugu dambeysa ee loo baahan yahay ka deji slicer-ka haddii loo baahdo.

3MF waa qaab cusub, yar, oo slicer-yada akhriyaan iyada oo cabbirka ku jira. Isticmaal STL haddii barnaamij aan aqbalin 3MF.

Si aad marka hore u hubiso in qaybtu xidhan tahay, ku habboon tahay safaxa daabiyahaaga, oo ku taagan tahay wejiga fidsan, isticmaal {{ui:Dhoofi}} › {{ui:Hubi daabacaadda 3D (STL ama 3MF)…}}: eeg [Diyaari qaybta daabacaadda 3D](topic:print-3d).

## Barnaamijyada CAD kale: STEP

Dooro {{ui:Dhoofi}}, kadibna {{ui:STEP AP242 (jidh adag oo saxda ah)}}. Waxay qaybta u qorTaa jidh adag oo saxda ah, millimitir ahaan, oo loo jiheeyey Z sare. Wejiyada wareegsan waxay u qoran yihiin silinder, koonn, kubbad iyo torus oo run ah, iyo goobo run ah oo geesahooda ah, si barnaamijka kale u aqoonsado godka sida god. Jidh laga furay faylka STEP wuxuu hayaa wejiyadiisa fidsan, silinderyada, koonnada, kubbadaha iyo torusyada faylkaas, sidaas darteed iyagu sidoo kale si saxda ah ayay u baxaan. Wejiyada aan lahayn sidaas oo kale (dhinaca spline, xarka la moodeelay, jidh ka yimid faylka mesh-ka STL, OBJ ama 3MF, spline-ka faylka STEP, wejiyada la jiidey ama la wareejiyey) waxay ku sii jiraan facet fidsan oo isla jidhka ku jira, habka xaaladda xagga hoose ayaa tirada u sheegta. Xaaladda xagga hoose waxay tusaysaa, tusaale ahaan, "Exported Flange.step (AP242, exact solid, mm, Z up): 14 faces on their true surfaces (10 cylindrical, 1 conical, 0 spherical, 0 toroidal), 0 fitted edge curves." Waxay hayaa jidhka kaliya: ma jiro taariikh, sawir-gacmeed, ama naqshad. Haddii barnaamijka kale akhriyo AP214 oo kaliya, dooro {{ui:STEP AP214 (jidh adag oo saxda ah)}}: isla jidhka qaab schema-ga hore.

Waxa saxda ah iyo waxa aan saxda ahayn:

- Wejiyada fidsan, silinderyada (godadka, bossesyada, fillet-yada geesaha toosan), koonnada (countersink-yada, taper-yada), kubbadaha iyo torusyadu waa kuwo saxda ah, sidoo kale geesahooda toosan, wareegsan iyo ellipse-ka. Dejinta **Qalloocyada** ma beddelayso.
- Meeshii laba wejood oo wareegsan isku jaraan (god la qodey shaft dhexdiisa), geesta waa qallooc siman oo lagu habeeyey labada dusha si ka yar 0.00001 mm; "fitted edge curves" ayaa tirinaya.
- Qaab-god gudaha qaybta ah waxaa loo qoraa sida god ku jira jidhka. Jidho kala go' oo dhowr ah waxaa loo qoraa sida dhowr jidh.
- Isku-dhisnaha lama qorin STEP saxda ah weli: dhoofi qayb kasta mid mid.

Waa la hubiyay adigoo akhrinaya faylalka dib OpenCascade-ka, kaas oo sheegay jidho sax ah oo mugga la xisaabiyey gacanta. Weli laguma furin dhammaan barnaamijyada CAD ama CAM; haddii mid diido fayl, {{ui:STEP (fasedyo, kernel-ka mesh)}} wuxuu qoraa isla qaabka sida wejiyo fidsan (asal ahaan PartCraft, Y sare), oo fadlan noo sheeg adigoo isticmaalaya {{ui:Caawimaad}} › {{ui:Warbixin ka soo deji dhibaato}}.

Shaqada machining-ka, workspace-ka Manufacture wuxuu sidoo kale qoraa jidhka saxda ah ee nidaamka shaqada ee dejinta: eeg [Samee jidadka qalabka iyo G-code](topic:manufacture#exact-step-for-the-shop).

## Barnaamijyada BIM: IFC oo leh dhammaan sifooyinka

Dooro {{ui:Dhoofi}}, kadibna {{ui:IFC 4 (oo leh dhammaan sifooyinka)}}. Waxay qaybta u qorTaa unug IFC 4 oo loogu talo galay moodelada dhismaha iyo warshadaha, qaabkeeda oo ah saddex-geesood (Z sare, millimitir), iyo waxa PartCraft ka ogyahay isagoo ah property sets:

| Property set | Wuxuu hayaa |
|---|---|
| **PartCraft_Part** | Magaca, agabka iyo kaadhigga, habayn-ka firfircoon, tirada jidhadka; isku-dhisnaha dhexdiisa sidoo kale lambarka qaybta iyo sharaxaadda |
| **PartCraft_Parameters** | Cabbir kasta oo qaybta ah iyo qiimihiisa; muujinta qaacidada iyo qoraalka waxay ku jiraan sharaxaada sifada |
| **PartCraft_TitleBlock** | Goobaha blokka cinwaanka naqshadda ee aad buuxisay (cinwaanka, lambarka naqshadda, nooca dib u eegista, shirkadda, kuwa sawiray, hubiyay iyo ansixiyay, taariikhda, dhamaystirka, dulqaadka guud) iyo cabbirka xaashida |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Mugga, dusha, miisaanka (agab la xidhiidha) iyo cabbirka guud |

Agabka waxaa lagu xidhaa sida agab IFC ah, lambarka naqshadduna waa tag-ka unugga. Isku-dhisnaha, qayb kasta waxaa lagu qoraa mar sida nooc ah oo ku hayn sifooyinkiisa, nuqul kasta waxaa lagu dhigaa meesha isku-dhisnuhu dhigayo oo qiimihiisa gaarka ah wuxuu ku jiraa **PartCraft_Instance**: magaciisa, lambarka walxaha ee bill of materials-ka, iyo haddii uu yahay qaybta aasaasiga ah.

## Profiles-ka laser, waterjet ama CNC: DXF

Laba nooc oo DXF, labadaba nooca R12, oo dhammaan barnaamijyada CAD iyo CAM furi karaan:

### Sawir-gacmeed

1. Dooro sawir-gacmeedka taariikhda (ama ha furmo).
2. Dooro {{ui:Dhoofi}}, kadibna {{ui:DXF oo sawir-gacmeedka ama dhinac sinaan ah}}. (Panelka midig ee sawir-gacmeedka sidoo kale wuxuu leeyahay {{ui:U dhoofi DXF}}.)

Waxaad heleysaa `<part> - <sketch>.dxf` oo ku jira isku-xirnaanta sawir-gacmeedka: xariiqyo, qaansooyin iyo goobo run ah ku jira layer-ka **PROFILE**, joomatriga dhismaha ku jira **CONSTRUCTION**, iyo barar kala go' ah ku jira **POINTS**.

### Wejiga toosan ee jidhka

1. Guji wejiga toosan ee muuqaalka (tusaale ahaan sare ee saxan leh godad).
2. Dooro {{ui:U dhoofi wejigga DXF}} panelka midig, ama {{ui:Dhoofi}}, kadibna {{ui:DXF oo sawir-gacmeedka ama dhinac sinaan ah}}.

Waxaad heleysaa `<part> - face.dxf`: qaabka wejiga iyo godad kasta oo ku jira. God wareegsan (wareeg oo buuxa halka silinder ku kulmo wejiga: god la qodey, ama god ka mid ah fayl STEP la furay) waxaa loo qoraa sida goob run ah oo leh xarunta iyo radius-ka godka. Qaab kasta oo kale waa polyline xidhan, geesaha wareegsan ee ku jira (corners-ka fillet-ka, slots, qaansooyinka) waa facets-kooda, sidaas darteed dejri **Qalloocyada** ilaa **Fiican** marka hore haddii goyaha si dhow ugu raacayo. Xaaladda xagga hoose waxay tusaysaa inta qaab ah, inta ka mid ah ee goobo run ah, iyo balaadhinta wejiga.

Haddii sawir-gacmeed ama wejig toosan aan la dooran: "Fur ama dooro sawir-gacmeed, ama dooro wejig toosan, si aad DXF u dhoofiso."

## Naqshad

Naqshadda PDF waxa ay leedahay tilmaan u gaar ah: [Samee xaashi naqshad](topic:drawing-pdf).

## Qaabab aan la heli karin

glTF, OBJ, IGES iyo Parasolid lama dhoofin dhismahan. DWG waxaa qoraa kaliya variant pack-ka, sida xaashi naqshad: eeg [Samee variant pack ka habaynta](topic:variant-pack). Eeg sidoo kale [Qaababka faylalka](topic:file-formats).
