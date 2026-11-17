---
title: Yenza ama-toolpath nama-G-code (Manufacture)
summary: Setha isitoko nemvelaphi yomsebenzi, khetha amathuluzi, engeza imisebenzi yobuso, isikhala, ikhonthuwa, ukubhoboza nechamfer ngokukhetha ubuso, qedela imodeli yonke ngo-3D (parallel, scallop), lingisa isitoko ngokumelene nemodeli ukuze uthole ukugoqa nesikhathi somjikelezo, bese ulanda i-G-code kwenye yama-post amathathu akhelwe kuqala noma eyodwa oyihlelayo wena.
keywords: exact step, step for the shop, work coordinates, cam handoff, parallel, scallop, 3d finishing, finishing, ball nose, tool library, edit post, custom post, post editor, adaptive, adaptive clearing, constant engagement, trochoidal, hsm, high speed machining, manufacture, CAM, toolpath, G-code, NC, CNC, mill, milling, pocket, contour, profile, facing, drill, peck, G83, G81, G73, chamfer, stock, work offset, G54, post processor, GRBL, LinuxCNC, feeds and speeds, simulation, gouge, cycle time
from: beeb29aa
---

Indawo yokusebenza ye-Manufacture iguqula ingxenye ibe ama-toolpath womshini wokugaya wama-eksisi ama-3 beseiwabhala njenge-G-code. Imisebenzi eminingi ingu-**2.5-eksisi**: ithuluzi lihlala lime ngokuqondile, izindonga zisikwa zishaya phansi, nezinsalela zibe zintsha. **Parallel** ne-**Scallop** zigciba izindawo ezigoqekile ngo-3D (bheka [3D finishing](topic:finish-3d)); ithuluzi liseqinile ngokuqondile (ama-eksisi amathathu, akukho ukuthambeka). Lisebenza kubuso obubizwe ngamagama kubhoshoxo elinikezwa ingxenye (bheka [Ukuqopha kwe-mesh](topic:solid-kernels)).

Ukwakha kwe-Lab: hlola zonke izinhlelo ngesimuleyitha salo mlawuli wakho, uzisebenzise emoyeni ngaphezulu kwesitoko kuqala.

## Setha

1. Khetha **Manufacture** kwi-workspace switcher, bese {{ui:Ukulungiselela okusha}}.
2. Ku-thebhu ye-**Setup** khetha:
   - **Tool axis (+Z)**: indlela ithuluzi elibheka ngayo ingxenye. World +Y (phezulu kwe-PartCraft) yisimo esizenzakalelayo; ngakho i-X yomshini iyi-world X futhi i-Y yomshini iyi-world −Z.
   - **Work origin (G54)**: ikhona yesitoko noma isikhungo, phezulu noma phansi, phezulu-maphakathi kwemodeli, noma imvelaphi yemodeli.
   - **Stock**: ibhokisi noma isigaxa, noma imodeli kanye nezinye ukwengeza (izinhlangothi, phezulu, phansi), noma usayizi osethiwe.
   - **Material** (isetha izinga lokuqala lamafidi nejubane), i-**post** (umlawuli), ijubane eliphezulu lespindle yomshini, izinga lokusheshisa, nesikhathi sokushintsha ithuluzi, i-coolant nenombolo yohlelo.

## Amathuluzi

Ithebhu ye-**Tools** iqukethe umtapo: ama-end mills athambile, abhalwayo nagqobhozayo, ama-drill, ama-chamfer mills nama-face mills, ngayinye nenombolo ye-T, ububanzi, ama-flute nobude bawo (kanye nenkomba yekhona, indawo ephoyintiwe noma i-chamfer lapho zisebenza khona).

Amathuluzi ami angagcinwa ebhrawuzeni futhi adluliselwe phakathi kwamakhompyutha njengefayela: bheka [Umtapo wamathuluzi](topic:tool-library).

Isivinini sespindle nefidi kuvela kuzinto: n = 1000 × isivinini sokusika / (π × ububanzi), i-feed = n × ama-flute × i-chip load (ama-drill: n × feed ngokuphindiswa). Lezi yizinombolo ezilondolozayo zokuqala ezivela kuzinhlu ezishicilelwe, ezingalungiswanga kumshini wakho; bhala isivinini sokusika, i-chip load, i-rpm noma i-feed somenzi wethuluzi lakho ukuze uzishintshe. Uma isivinini sedlula ubuningi bomshini kubanjwa lapho futhi i-feed iyalandela, igcina i-chip load.

## Engeza imisebenzi

Inkinobho ngayinye yethuluzi yengeza umsebenzi futhi, lapho idinga ijiyometri, iqala ukukhetha: chofoza ubuso noma imiphetho ku-view (chofoza futhi ukuze ukhiphe okukhethiwe), bese {{ui:Kuqediwe ukukhetha}} noma {{key:Esc}}.

| Umsebenzi | Khetha | Yenzani |
|---|---|---|
| {{ui:Ubuso}} | lutho | Ukudlula kwe-zig-zag kuso sonke isitoko, kudlule imiphetho yaso, kuye phezulu kwemodeli |
| {{ui:Isikhala}} | ubuso obuthe batshe obuthe, umgodi ojikelezile, noma ishegu evaliwe lemiphetho | Ihlanza indawo ngokudlula kwe-offset kusuka ngaphakathi-ngaphandle, ekunyuseni ngakunye; izihlaleli (ubuso obuphakama ngaphakathi kwesisekelo) ziyashiywa; isisekelo esivulekile kuwo wonke umzuzu (akukho okuphakeme ngaphandle kwaso) siyahlanzwa kuze kufike emphethweni wesitoko |
| {{ui:Okuguquguqukayo}} | okufanayo nesikhala | Ihlanza indawo efanayo ngokudlula okusika ububanzi obusethiwe (**Engagement**, ingxenye yobubanzi), ukuze umsiki angathathi isiqephu sobubanzi bonke, nasezikhonweni; ingena ngehelix futhi iqede izindonga ngezinga ngalinye. Ukusika okuncane kuvumela ukwehla okujulile nefidi ephezulu |
| {{ui:Ikhonthuwa}} | ubuso obutshe bomkhawulo wabo, ubuso obujikelezile, noma imiphetho | Ilandela umkhawulo oshintshwe ngeradiyasi yethuluzi, ngaphandle noma ngaphakathi, nama-arc okungena nokuphuma, nama-tabs anengeziwe |
| {{ui:Ukubhoboza}} | izimbobo (chofoza udonga lwesimbobo noma umphetho wawo) | Ibhoboza isimbobo ngasinye ngomjikelezo okhona: peck (G83), drill (G81) noma chip break (G73); noma nika ububanzi ukuze ubhoboze zonke izimbobo zalobo bubanzi |
| {{ui:Chamfer}} | umkhawulo wobuso noma imiphetho | Isebenzisa i-chamfer mill ngomphetho ukuze isike ububanzi obusethiwe |
| {{ui:Parallel}} | lutho (imodeli yonke) | Ukuqedela okungu-3D ngemigqa ehambisanayo nanoma yiliphi ikhona, ilandela ubuso ngebhola, i-bull-nose noma i-flat end mill. Bheka [3D finishing](topic:finish-3d) |
| {{ui:Scallop}} | lutho (imodeli yonke) | Ukuqedela okungu-3D ngokudlula okubekwe ibanga elithile phezu kobuso, ukuze umphetho phakathi kwawo ube nobude ocelile |

Khetha umsebenzi ohlwini ukuze ushintshe ithuluzi lawo, ukuphakama (clearance, retract, feed height, top, bottom), ukwehla, i-stepover, isitoko okufanele siyishiye, ukudlula kokuqeda, ukungena (helix, ramp noma plunge), i-climb milling, ama-tabs noma umjikelezo. {{ui:Phezulu}} no-{{ui:Phansi}} zihlela kabusha, {{ui:Vimbela}} kuyisusa, {{ui:Susa}} kuyisusa ngokuphelele. Konke kusemlandweni wokuhlehlisa futhi kugcinwa kwifayela lengxenye.

I-stepover yesikhala ingaphezu kwengxenye yobubanzi bethuluzi, ukuze yonke indawo yesisekelo ibe ngaphakathi kwesiqephu sethuluzi ngodlula ngamunye. Izikhala ezingaphakathi zigcina iradiyasi yethuluzi.

**Ukuhlanza okuguquguqukayo** kugcina ukubamba komsiki kuseduze nenani elilodwa. Ukubamba kwe-0.15 yobubanzi kuyi-engagement angle yomayelana ne-46°: indilinga yomphetho womsiki endaweni yempahla. Isikhala se-offset, ngokuphambene, sisika ububanzi bonke ekudlulweni kokuqala futhi sihambe kude ezikhonweni ngakunye ngaphakathi. Phakathi kokudlula ithuluzi lihlala lehlile lapho lihamba emoyeni osikiwe, bese liphakama futhi lehle emoyeni osikiwe kwezinye izindawo. Ukudlula kuthathwa ngegridi enhle phezu kwendawo (amasele cishe ingxenye eyishumi nambili yeradiyasi yethuluzi), ngakho ukubamba kungaphezu kwesele elilodwa lobubanzi obusethiwe; izindonga ziqedwa ngokunembile. Indawo evulekile enkulu yenza uhlelo olude olunezinyathelo ezimfishane eziningi.

## Lingisa

Ama-toolpath ayenziwa futhi ngemva kwanoma yiluphi ushintsho (nengxenye nayo). {{ui:Lingisa}} futhi ibonisa isitoko esisele ngemva kohlelo lonke. Ipaneli ibonisa:

- **Cycle time**: ukunyakaza kwe-feed ngesivinini sayo, ukusheshisa njengemigqa eqondile ngezinga lokusheshisa lokusethwa, kanye nesikhathi sokushintsha ithuluzi. Imishini yangempela iyashesha, ngakho ithatha isikhathi eside.
- **Gouges**: izindawo lapho ithuluzi lehla ngaphansi kwengxenye engu-0.02 mm ngaphansi kobuso bengxenye. Izimpawu ezibomvu zibakhombisa ku-view.
- **Stock left on the part**: isitoko esisele engxenyeni.

Isitoko siyimephu yobude yophezulu (Z-map), ngakho asikwazi ukukhombisa ama-undercut. Donsa **Playback** ukuze uhambise ithuluzi ohlelweni. Ku-view, ukunyakaza kwe-feed kuqinile kanti okusheshayo kuyizitebhisi, umbala owodwa ngomsebenzi ngamunye.

Lapho **Show the simulated stock** ivuliwe, isitoko siyanakwa ngokumelene nemodeli, seluleka ngeseli: **luhlaza** lapho sisemodelini (ngaphakathi kwe-0.02 mm), **kubomvu** lapho ithuluzi lingene emodelini, nalapho kusele isitoko emodelini **kwesikhwama** esincane, **kwe-orange** okungaphezulu, kuze kufike **kwe-grey** yesitoko esingasikiwe ku-1 mm noma ngaphezulu. Imibala yenziwa kabusha ngalo lonke ushintsho, ngemephu efanayo yobude nezinombolo epaneli, ngakho i-luhlaza nobomvu kuvumelana nomugqa we-Gouges. I-chamfer ingena emodelini ngenhloso futhi ibonisa obomvu ngomphetho wayo.

## Yiposta i-G-code

Khetha umlawuli ngaphansi kwe-**Post** beseucindezela {{ui:Landa i-G-code}} (noma {{ui:Isiphothulukisi}} kwi-toolbar):

| Umlawuli | Ifayela | Amanothi |
|---|---|---|
| Fanuc-style ISO | .nc | %, inombolo ye-O, izinombolo zemigqa, T M6 ne-G43 H, imijikelezo ehlanganisiwe |
| GRBL | .nc | Akukho umshintshi wethuluzi noma imijikelezo ehlanganisiwe: ukushintsha kwethuluzi kumisa nge-M0, ukubhoboza kubhalwa njengezinyathelo ezilula |
| LinuxCNC | .ngc | T M6 ne-G43 H, imijikelezo ehlanganisiwe, M2 |
| Okwakho | noma yiliphi | I-post owayibhala noma owayishintsha: {{ui:Hlela iposi…}}, {{ui:Iposi elisha…}}, {{ui:Ngenisa ifayela le-post…}} |

Lonke ifayela liqala ngezimpawu zokuphawula zohlelo, isitoko, ukuthathwa kwemvelaphi namathuluzi. Izixhumanisi zisemamilimitha ngamadesimali amathathu. {{ui:I-CSV yendlela yethuluzi}} ne-{{ui:I-JSON yendlela yethuluzi}} zithumela izinyathelo ngokwazo.

**Hlola okuphumayo ngesimuleyitha yomshini wakho ngaphambi kokusika, bese uyisebenzisa emoyeni ngaphezulu kwesitoko kuqala.** Ama-post amathathu akhelwe kuqala amaphuzu okuqala alandela ukuziphatha okubhalwe kwezilawuli; awazange afakazelwe kunoma yimuphi umshini othile. I-post oyishintshile iyeyakho ukuyifakazela. Ukuthi uyibhala kanjani: [Post processors](topic:post-processors).

## I-STEP eqondile yesitolo

Ngaphansi kwezinkinobho ze-G-code kuthebhu ye-**Operations**, {{ui:STEP eqondile (izixhumanisi zomsebenzi)}} ilanda `<part>-work.step`: ingxenye njengesolidi eqondile (amasilinda eqondile ezimbobo nezigaxa, nemijikelezo eqondile emaphethelweni awo) nemvelaphi yayo ku-work origin yalolu lusetho nethuluzi le-Z eliqondene nalo. Lezi zixhumanisi ezisetshenziswa yi-G-code, ngakho uhlelo lwe-CAM noma umhloli wesitolo ubeka imodeli ngokufanayo nohlelo ngaphandle kokuyinyakazisa. Ifayela liqukethe ingxenye kuphela, hhayi isitoko noma ama-toolpath.

{{ui:Thumela}} › {{ui:STEP AP242 (exact solid)}} ibhala isolidi efanayo endaweni yayo yangempela engxenyeni (Z phezulu): bheka [Thumela ukuze kuphrintwe, i-STEP ne-DXF](topic:export-files#for-other-cad-programs-step).

## Imikhawulo

- Ama-pocket, amakhonthuwa, ukubhoboza nama-chamfer angu-2.5-eksisi. Ubuso obugoqekile bungaqedelwa nge-3D ([parallel ne-scallop](topic:finish-3d)) kodwa abuhlanzwa nge-3D (i-cone ishiywa iyizinyathelo kuze kube uyiqedela), futhi akukho rest machining. Ukuhlanza okuguquguqukayo kungu-2D (izindawo ezintsha).
- Ama-eksisi amathathu kuphela: akukho ukuthambeka, akukho ukugoba, akukho ukuhlola.
- Izibambi namashangi akuhloliwe ukuthinta; isexwayiso sivela uma ukusika kujulile kunobude beflute.
- Ama-feed nezivinini ziyizinhlamvu zokuqala. I-post ingumbhalo ongawuhlela, kodwa iphethe kuphela indlela okubhalwa ngayo izinyathelo; ayikwazi ukushintsha ama-toolpath, ukungeza ama-eksisi noma ukwazi umshini wakho ([Post processors](topic:post-processors) ikhombisa okungenzeka kuwo).

## Thumela uhlelo emshinini

Ku-CadCraft Studio ekhompyutheni, nomshini osethwe ku-Studio, i-**Send to a machine…** ivela ngasemva kwe-**Download G-code** ilayishe uhlelo olufanayo emshinini osoxhumeni lwakho. Ayikaze iqalwe kusuka ku-PartCraft: iqale emshinini lapho kusobala ukuthi kulungile. Kusiphequluli inkinobho ayibonakali (ikhasi lewebhu alikwazi ukufinyelela umshini kunethiwekhi yakho): landa uhlelo kunalokho.
