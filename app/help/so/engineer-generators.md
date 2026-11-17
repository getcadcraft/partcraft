---
title: Qaybaha fiisigiska: generators
summary: Workspace-ka Engineer iyo astaanta Generated body: dooro generator, deji gelinta (socod, cadaad, heer kulayl, agab, printer), oo hel qayb cabbirkeeda laga qaaday qaacidooyinka buugaagta, oo leh xog-xaashideeda, hubinteeda habka soo saarka iyo faylasha loo baahan yahay qalabka falanqaynta. Gelin isku mid had iyo jeer wuxuu bixiyaa qayb isku mid ah.
keywords: engineer, generator, jidh la sameeyay, fiisigiska, xeerar, isbeddelka kulaylka, manifold, nozzle, lattice, gyroid, xog-xaashi, gelinta, go'aan-qaadasho, gelin isku mid natiijo isku mid, hubinta soo saarka, daabacaadda 3D, powder bed
from: 5a387dc0
---

**Generator** waa script wuxuu qaybta ka cabbiraa shuruudahaaga oo dhisaa. Generator-ka isbeddelka kulaylka wuxuu qaadaa kulaylka la wareegayo, labada socod iyo heerkulkooda, cadaadiska iyo agabka; wuxuu xisaabiyaa inta ay weynaan karto cores-ku iyo inta ay dhumuc u leedahay derbigiisa, wuxuu dhisaa, wuxuuna kuu sheegaa tirooyinka uu isticmaalay iyo meesha ay ka yimaadeen. Beddel gelin, qaybtuna way raacaysaa.

Natiijadu waa jidh caadi ah oo qaybta ku jira: waxay ku jirtaa liiska astaannada, waa daabacmaa, waa dhoofaa. Generator-ka laftiisa qaybta ayaa lagu hayaa, sidaas darteed faylku wuxuu ku furmaa kombiyuutar kasta oo aan generator-ka lagu rakibin, **furidda qayb ma socodsiiso script**.

## Samee jidh

1. Dooro workspace-ka {{ui:Engineer}} beddelaha.
2. Dooro generator liiska ka mid ah (kuwa PartCraft la socda, kadibna kuwa aad ka furtay fayl), kadibna guji {{ui:Cusub}}.
3. Script-ka waa socodsiiyaa. Marka uu dhammeeyo, jidhku wuxuu ku jiraa aragtida, panelkuna wuxuu muujinayaa gelintiisa, **xog-xaashideeda** iyo **hubinteeda**.

Waxaad ka dhigi kartaa Design: {{ui:Astaanno}} › {{ui:Wax dheeraad ah}} › {{ui:Jidh la sameeyay}}.

## Beddel

Beddel gelin kasta, jidhka mar kale ayaa la sameeyaa wakhti yar kadib markaad joojiso qorista. Panelku wuxuu sheegayaa mid ka mid ah saddex xaalood oo run ah:

- **Cusboonaysiinta**: jidhku wuxuu la mid yahay script-ka iyo gelintiisa.
- **Gelintu way beddeshay**: jidhka qaybta ka yimid gelinta hore; hadda ayaa mar kale la sameeynayaa, ama riix {{ui:Socodsii}}.
- **Wali lama socodsiin** ama **Socodkii ugu dambeeyay wuu fashilmay**: khaladka script-ka ayaa lagu muujiyaa iyada oo ay ku jirto safka.

{{ui:Jooji}} wuxuu dhammeeyaa socod aad u qaado waqti dheer. Ka noqo wuxuu kuu noqdaa tallaabo mar mar ah: socodku waa hal tallaabo, gelintuna waa hal tallaabo.

## Xog-xaashida

Tiro kasta oo generator-ku xisaabiyey waxa lagu liistaa **unit** ka dhigan iyo **meesha ay ka timid** (qaacido buugga caadiga ah, heer, xog-xaashi). Waxba ma jiro oo qarsoon. Xog-xaashidu waa qayb faylka ah, sidaas darteed ayay ku isku mid tahay kombiyuutarka xiga. [Data out](topic:data-out) wuxuu sharraxayaa sida loo kaydiyo JSON ama PDF.

## Hubinta

Generator-ku wuxuu hubin karaa qaybtiisa iyada oo loo eegayo habka daabacaadda: darbiyada iyo furaha ka yar waxa habku hayn karo, xabbadaha xoogaa, godad ay qabsan karaan budada ama resin-ka, godad aad u yar oo aan la gelin karin, iyo dul-socod u baahan taageero. Natiijooyinka waxay ku jiraan panelka iyo liiska {{ui:Dhibaatooyin}} (badhanka ⚠), waxaana lagu kaydiyaa qaybta.

Tirooyinka habka waa tirooyin xiga oo ay bixiyaan hage naqshadeed oo guud oo dadweyne ah habka guud (FDM, SLA, SLS, metal powder bed). **Ma aha** specification-ka mishiinkaaga: ka beddel tirooyinka dukaankaaga ka hor intaadan ku tiirsanaan hubinta. Hubintu waxay ku shaqeysaa shabakad voxels ah, sidaas darteed waa saxan tahay ilaa hal voxel dhexdiisa: derab waxaa la sheegaa oo keliya marka ay ka yartahay xadka in ka badan hal voxel.

## Waxa la shubay

| Generator | Waxa uu sameeyaa |
|---|---|
| Gyroid block | Block gyroid, Schwarz P ama diamond sheet ku buuxsan: shabakadda ugu fudud |
| Gyroid heat exchanger | Cores-ka isdhaafsiga labada dareere, cabbirka laga qaaday waxqabadka iyo habka effectiveness-NTU, derabkiisa cadaadiska; wuxuu hubin karaa hoos u dhaca cadaadiska iyada oo la sameynayo daraasad socodka hal unug |
| Distribution manifold | Madhan iyo laamo, tuubo kasta oo cabbirkeeda laga qaaday socodka uu qaado |
| Graded lattice beam | Shabakad derabkeedu kor u kacaa meesha topology optimisation sheegayo in agab loo baahan yahay |

Dhammaantood waa qiyaasaad koowaad oo ku salaysan qaacidooyinka buugaagta caadiga ah. [The engineering library](topic:engineering-library) wuxuu liistaa qaacidooyinka iyo xuduudahooda. Run Simulation, Thermal ama Flow natiijada ka hor intaadan ku tiirsanaan.

## Xakameynta dhoofinta

Generator-yada Engineer iyo xog-xaashidoodu waxay leeyihiin ogeysiis ku saabsan xakameynta dhoofinta iyo cunaqabateynta. Akhri [Engineer and export controls](topic:engineer-export-notice); waxaa sidoo kale hoosta xog-xaashi kasta.

## Weli lama dhisin

- Madhan, afaf iyo fittings ee core-ka isdhaafsiga kulaylka: waa core keliya.
- Qalooca heerkulka ee xoogga agabka: agabyadu waxay ku jiraan heerkulka qolka.
- Khasaaraha tee iyo qaybinta socodka ee bixiyeyaasha manifold-ka.
- Ku dar generator-yo directory-ga add-on-ka hal riix; furidda fayl waxay ku dartaa mid browser-kan.
- Generator-yo app kale.
