---
title: Ama-spline, ukusika, ukuhambisa namanye amathuluzi esikethi
summary: Dweba ama-spline ngamaphoyinti okufaka nokulawula, sika futhi welule amagculo, hambisa uchungechunge, bonisa ngesibuko ngokuzungeza umugqa wesisekelo, engeza upholigoni nezilotshi, phinda ijometri yesikethi futhi uphrojekthe amaphethelo emodeli.
keywords: spline, iphoyinti lokufaka, iphoyinti lokulawula, b-spline, nurbs, igculo, sika, welula, hambisa, isibuko, ngokufana, upholigoni, hexagon, ilotshi, phinda, linear pattern, circular pattern, phrojekthi, phrojekthi komphetho, faka, guqula izinto
from: 3ecb166a
---

Lawa mathuluzi asebenza esikethini esivulekile. {{ui:I-spline}} no-{{ui:Sika}} zikhona ebhawini lamathuluzi. Ezinye zikhona ngaphansi kwethuluzi {{ui:Okwengeziwe}} ekugcineni kwamathuluzi esikethi. Ithuluzi ngalinye liyisinyathelo esisodwa sokuhlehlisa, futhi {{key:Esc}} iyayimisa. Ngamathuluzi aseqala okudweba bona [Dweba isikethi sakho sokuqala](topic:sketch-basics).

## Ama-spline

I-spline igculo elibushelelezi. Kukhona izinhlobo ezimbili.

| Ithuluzi | Ukhiye | Indlela yokudweba |
|---|---|---|
| {{ui:I-spline}} | {{key:B}} | Chofoza amaphoyinti igculo edlula kuwo. Qeda nge-{{key:Enter}}, {{key:Esc}}, ukuchofoza ngeqhosha lesokudla noma ukuchofoza kabili. Chofoza iphoyinti lokuqala futhi ukuze uvale i-spline |
| I-spline yamaphoyinti okulawula (ngaphansi kwethuluzi {{ui:Okwengeziwe}}) | | Chofoza amaphoyinti okulawula. Igculo liyadonswa ngasemaphointini kodwa lithinta okokuqala nokokugcina kuphela. Ipholigoni yokulawula edwetshwe ngamadashi ivela ngesikhathi udweba nasemva kwalokho |

- **Amaphoyinti yisikethi amaphoyinti.** Hudula wona, noma wanikeze izixhumanisi nezilinganiso njengamanye amaphoyinti. Iphoyinti lokuqala le-spline lingamathela ekugcineni komugqa, lihlanganiswe nalo ngoxhumanisi ohlangene.
- **Ukuthinta ekugcineni.** Khetha umugqa, umnsalo noma i-spline ehlangana nomunye wamaphethelo e-spline, bese ukhetha i-spline, bese ukhetha {{ui:T I-tangent}}. Ukugcina kwe-spline kuzolandela umugqa. Ukuthinta okuphuma kumaphethelo e-spline kuyenqatshelwa: "I-tangent ku-spline idinga umugqa, umnsalo noma i-spline ehlangana nomunye wamaphethelo ayo."
- **Amaphethelo.** Ngaphandle kwexhumanisi lokuthinta, amaphethelo e-spline yamaphoyinti okufaka awanakile (akukho ukugoba ekugcineni kakhulu). Igculo liyi-cubic futhi lidlula kuwo wonke amaphoyinti, ukuhlukaniswa kwalo kusethwa yizibanga phakathi kwamaphoyinti.
- **Ama-spline avaliwe** yenza iphrofayili ngokuzimela. Ama-spline avulekile ahlanganisa imigqa namasumo ibe ilupu elivaliwe njengamanye amagculo.
- Ukususa iphoyinti ngaphakathi kwe-spline kususa lelo phoyinti futhi kugcine i-spline, uma isenamaphoyinti okungenani amabili (amathathu uma ivaliwe).

I-Extrude nokujikeleza zakha i-spline nge-mesh kernel ngezingxenye ezimfushane ezigoqe (amagculo langempela adinga i-exact kernel: akakakhiwa kule nguqulo). Ukuthunyelwa kwe-DXF kubhala i-spline njenge-polyline ehlala ngaphakathi kwe-0.01 mm kusuka egculweni, ngoba i-DXF R12 ayinayo i-spline entity.

## Sika nelula

| Ithuluzi | Ukhiye | Indlela |
|---|---|---|
| {{ui:Sika}} | {{key:T}} | Chofoza igculo: ingxenye ezosuswa ibonakala ibomvu, kuze kufike ezinqamulweni ezisedlule. Chofoza ukuze uyisuse. Igculo elingadluli lutho lisuswa lonke |
| {{ui:Elula}} (ngaphansi kwethuluzi {{ui:Okwengeziwe}}) | {{key:E}} | Chofoza umugqa noma umnsalo eduze nomphetho ukuze welule. Ukhula kuze kufike egculweni elilandelayo oluhlangana nalo. "Akukho lutho lolu phetho olunga lufinyelela." uma kungekho lutho olulimazayo |

Sika nelula kusebenza emigqeni, emasumeni, ezindilingeni nakuma-spline (Elula: imigqa namasumo kuphela).

- **Indilinga** esikiwe iba umnsalo. Isilinganiso sayo somsakazo noma sobububanzi siya emnsalweni.
- Ukusika maphakathi komugqa kushiya imigqa emibili ehlala emugqeni ofanayo oqondile. Ukusika maphakathi komnsalo kushiya amasumo amabili anesikhungo esifanayo nexhumanisi elilinganayo.
- **I-spline** esikiwe iba i-control-point spline elandela igculo elidala ngokuqinile. Ixhumanisi lokuthinta ekugcineni eligciniwe liyahlala.
- Umphetho omusha ubekwa egculweni elisikile (emugqeni, emnsalweni noma endilingeni, noma uhlangane nomphetho wayo). Ama-spline awakwazi ukubamba iphoyinti, ngakho i-spline esikayo ayengezi xhumanisi.

**Izixhumanisi ezingasafanele ziyasuswa**, nebha yesimo ithi zingaki. Isibonelo, isilinganiso sobude emugqeni osikiwe siyasuswa, kodwa izixhumanisi ezithe xaxa noma ezihambisanayo ziyahlala.

## Ukuhambisa

1. Khetha {{ui:Ukuhambisa}} ngaphansi kwethuluzi {{ui:Okwengeziwe}} noma cindezela {{key:O}}.
2. Chofoza umugqa, umnsalo, indilinga noma i-spline. Uchungechunge lwawo lonke luyakhanya: yonke igculo elixhunywe ngokuphelele, kuze kufike endaweni lapho kuhlangana okungenani okuthathu. Ukuhambisa ingxenye yochungechunge kuphela, khetha lawo magculo kuqala, bese ukhetha {{ui:Ukuhambisa}} bese uchofoza omunye wawo.
3. Hambisa isikhombi ohlangothini lapho ikhophi iya khona. Ukubonakala okuyisidashi kuyalandela. Cindezela {{key:B}} ukuze uthole amahlangothi omabili.
4. Chofoza, thayipha ibanga, bese ucindezela {{key:Enter}}.

Imigqa namasumo kuhanjiswa ngokunembile. Amakhoneni ayelulwa noma asikwe aze ahlangane. Ikhophi linesilinganiso se-**Ukuhambisa** esisodwa, futhi nezinye izingxenye ziyalandela: chofoza kabili isilinganiso ukuze ushintshe ikhophi yonke. Ibanga elikhulu kakhulu kochungechunge liyenqatshelwa, isibonelo "Lelo banga likhulu kakhulu kulolu chungechunge: uhlangothi lulodwa lungaguqulwa lungene ngaphakathi."

I-**spline** ihanjiswa yi-spline entsha yamaphoyinti okufaka ngaphakathi kwe-0.001 mm kusuka ekuhanjisweni kwangempela. Le khophi limisiwe: alilandeli okushintshwayo kamuva, futhi alinasilinganiso se-Ukuhambisa. I-spline ekuchungechungeni idinga ukuhlangana okubushelelezi (ukuthinta) emaphethelweni ayo.

## Isibuko

1. Nge-Khetha, khetha okuzobonisa ngesibuko.
2. Khetha {{ui:Isibuko}} ngaphansi kwethuluzi {{ui:Okwengeziwe}} noma cindezela {{key:M}}.
3. Chofoza umugqa noma umugqa wesisekelo oyobonisa ngawo ngesibuko.

Iphoyinti ngalinye elibonisiwe lithola **Ngokufana** exhumanisa nalo nokuqala, ngakho ikhophi iyalandela uma okokuqala kushintshwa. Amaphoyinti asemgqeni wesibuko ayabelwana, futhi amasumo abonisiwe athola ixhumanisi elifanayo. Uma kungekho lutho okukhethiwe, chofoza izinto ozofuna ukuzibonisa, cindezela {{key:Enter}}, bese uchofoza umugqa wesibuko.

## Upholigoni nezilotshi

| Ithuluzi | Indlela |
|---|---|
| {{ui:Upholigoni}} | Chofoza isikhungo, bese ikhona, bese uthayipha inani lezinhlangothi (3 kuya ku-64). Izinhlangothi zilingana futhi amakhona ahlala endilingeni yokwakha. Linganisa indilinga ukuze unikeze upholigoni usayizi |
| {{ui:Isilotshi}} | Chofoza isikhungo sesiphetho esisodwa, bese isikhungo sesinye, bese uchofoza ukusetha ububanzi. Imigqa emibili, ethinta amahafu endilinga amabili alinganayo |

## Amaphethini wesikethi

Khetha ijometri kuqala, bese:

- {{ui:Linear pattern}}: chofoza iphoyinti lokuqala, bese lapho ikhophi lokuqala liya khona, bese uthayipha inani lamakhophi (kubandakanya lowokuqala).
- {{ui:Circular pattern}}: chofoza isikhungo, bese uthayipha inani lamakhophi, ahlakazeke ngokulinganayo esiphethweni esigcwele.

Amakhophi aletha nezixhumanisi phakathi kwejometri ekhethiwe (iphethini yokujikeleza ishiya ezithe xaxa nezithi ngqo). Amakhophi awaxhunyiwe kumqondo wokuqala: shintsha eyodwa, abanye bahlala njengabo.

## Phrojekthi amaphethelo engxenye

1. Khetha {{ui:Phrojekthi komphetho}} ngaphansi kwethuluzi {{ui:Okwengeziwe}}.
2. Chofoza umphetho ogobile noma ojikelezayo wengxenye ngemuva kwesikethi.

Umphetho ukopishwa endizeni yesikethi ngokunembile futhi uyabanjwa (ixhumanisi le-Bopha). Awulandeli izinguquko ezizayo engxenyeni. Cindezela {{key:Q}} ukuze wenze ijometri yokwakha. Indilinga ethambekele endizeni yesikethi izophrojektwa ibe i-ellipse, ngakho iyenqatshwa. Kanjalo namaphethelo akhululekile nalawo aqonde ngqo ngaphandle kwesikethi. Ukuphrojekthwa kudinga i-exact kernel: akakakhiwa kule nguqulo.
