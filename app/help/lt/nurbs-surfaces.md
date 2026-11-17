---
title: Laisvos formos paviršiai (NURBS)
summary: Sklandžios kreivės ir paviršiai šalia detalės — perstūmimas, sujungimas, kreivių tinklai, keturkraščiai lopai, suliejimai, apkirpimai — su G0, G1 ir G2 tęstinumu, matuojamu tiksliuose paviršiuose; kietieji kūnai su sąjunga, atimtimi ir sankirta, įrašyti į detalę; zebros ir kreivumo vaizdai; paviršiai, pritaikyti prie skenavimo su išmatuota paklaida; STEP ar IGES failai. Saugoma detalės faile.
keywords: nurbs, skenavimas, atvirkštinis projektavimas, pritaikymas, tinklas į paviršių, taškų debesis, stl, apkirpimas, apkirptas, skylė, pjūvis, kietasis kūnas, kietieji kūnai, būlio, sąjunga, atimti, sankirta, skirtumas, siūti, uždarytas, įrašyti į detalę, laisva forma, paviršius, paviršiai, b-splainas, bsplainas, kreivė, splainas, perstūmimas, bėgis, tinklas, coons, lopas, suliejimas, tęstinumas, g0, g1, g2, liestinė, kreivumas, zebra, kontrolės taškai, mazgai, laipsnis, step, iges, klasė a, korpusas, išlyginimas
from: 64ed5196
---

Darbo sritis **Paviršiai** kuria sklandžias kreives ir paviršius, tokius kaip naudojami gaminių apvalkaluose, automobilių kėbuluose ir laivų korpusuose: NURBS, ta pati matematika, kurią naudoja kiti paviršių modeliavimo įrankiai. Viskas matuojama tiksliuose paviršiuose, o ne trikampiuose, kuriuos matote. Dydžiai pateikiami milimetrais, kaip ir kitur PartCraft.

Lauke **Darbo sritis** pasirinkite **Paviršiai**. Įrankių juostoje yra {{ui:Kreivė}}, {{ui:Sujungimas (loft)}}, {{ui:Perstūmimas išilgai kelio}}, {{ui:Sujungti}} ir {{ui:Zebra}}; kiekviena komanda yra dešiniajame skydelyje. Komanda parodo, ko jai dar reikia: spustelėkite kreives ar paviršius vaizde (arti krašto ar galo, kai to prašoma) arba pasirinkite juos sąraše; įveskite taškus arba spustelėkite juos ant detalės paviršių (už detalės jie patenka į pagrindo plokštumą), tada paspauskite Enter.

Kreivės ir paviršiai įrašomi detalės faile šalia kietojo kūno. Jie nekeičia detalės elementų: skydelis turi savo **Anuliuoti** ir **Perdaryti**, po vieną žingsnį kiekvienai komandai.

## Kreivės

- **Kreivė per taškus** eina per kiekvieną spustelėtą tašką. **Kreivė pagal valdymo taškus** vietoj to seka valdymo taškų narvą.
- **Įterpti mazgą**, **Didinti laipsnį** ir **Mažinti laipsnį** keičia kreivės aprašymą jos nejudindami (mažinimas atsisako, kai kreivė pajudėtų daugiau nei tolerancija). **Perkurti kreivę** suteikia jai naują valdymo taškų skaičių ir parodo, kiek ji pajudėjo.
- **Suderinti kreivę** sujungia vienos kreivės galą su kitos galu pagal G0 (liečiasi), G1 (ta pati kryptis) arba G2 (ir tas pats kreivumas). **Suliejti kreivę** prideda naują kreivę tarp dviejų galų, G1 arba G2.

## Paviršiai

- **Sujungimas (loft)** per dvi ar daugiau kreivių, **Tiesėtasis paviršius** tarp dviejų, **Ištraukti kreivę**, **Apsukti kreivę**.
- **Perstūmimas išilgai vieno bėgio** perveda profilį išilgai kelio nesukdamas; **Perstūmimas išilgai dviejų bėgių** laiko profilio galus ant abiejų bėgių. Perstūmimai yra pritaikomi: rezultate nurodoma, kiek jis liko artimas tikrajam perstūmimui.
- **Paviršius iš kreivių tinklo** eina per kreivių tinklelį (kiekviena kerta kiekvieną kitą po vieno karto). **Lopas iš keturių kraštų** užpildo keturias kreives, susitinkančias savo kampuose.
- **Suderinti paviršių** sujungia paviršiaus kraštą su kaimynu pagal G0, G1 arba G2; **Suliejti paviršių** prideda paviršių tarp dviejų kraštų.
- **Paviršiaus poslinkis**, **Pratęsti paviršių** (paviršius tęsiasi taip, kaip ėjo), **Perkurti paviršių**.

## Kokybės tikrinimas

Lentelėje **Bendrieji kraštai** išvardyti visi kraštai, kuriuos dalijasi du paviršiai, su tarpu (mm), kampu tarp jų (°) ir kreivumo šuoliu (1/mm), ir nurodoma, ar tai G0, G1 ar G2. Kraštas, prastesnis nei prašėte, atsiranda **Problemose** su taisymu **Suderinti**. **Zebros** juostos ir **kreivumo** spalvos gaunamos iš tikslaus paviršiaus: juostos, einančios nepertraukiamai per kraštą, reiškia G1; juostos, kurios išlaiko ir plotį, reiškia G2.

G0–G2 matuojami 33 taškuose kiekviename krašte. **G3 ir „class A“ kokybė nematuojama** ir nėra teigiama.

## Apkirpti paviršių

Grupė **Apkirpimas** iškerpa paviršių nekeisdama jo formos: paviršius išlaiko visus savo valdymo taškus, o rodoma, skaičiuojama ir įrašoma tik dalis, esanti kontūro viduje. **Apkirpti į stačiakampį** ir **Apkirpti apskritimu** veikia su paviršiaus dalimi (0 iki 1) kiekviena kryptimi, todėl vaizde jiems nereikia nieko rinktis; **Apkirpti kreive** priima uždarą kreivę, kuri guli ant paviršiaus (ji projektuojama į paviršių ir atmetama, jei ji atvira arba yra toliau nei tolerancija, o tai nurodoma žodžiais). Pažymėkite **Iškirpti skylę**, kad pašalintumėte kontūro vidų; palikite nepažymėtą, kad liktų tik vidus. Paviršius gali turėti vieną išlaikomą kontūrą ir bet kokį skaičių skylių; kontūras, kertantis kitą, atmetamas. **Pašalinti apkirpimą** parodo visą paviršių. Skydelio {{ui:Anuliuoti}} atšaukia apkirpimą kaip ir bet kurį kitą žingsnį.

STEP išsaugo apkirpimą kaip veido ribas, o IGES — kaip apkirptą paviršių (elementas 144); abu jį nuskaito atgal.

## Kietieji kūnai ir Būlio operacijos

Grupė **Kietieji kūnai** paverčia paviršius uždarais kūnais ir juos jungia. Čia kietasis kūnas yra skydelio paviršių rinkinys, kuris kartu uždaro tūrį; jo veidai lieka tiksliais NURBS paviršiais su apkirpimais.

- **Dėžės kietasis kūnas**, **Cilindro kietasis kūnas** ir **Sferos kietasis kūnas** sukuria kūną iš įvestų dydžių (mm): dėžę su šešiais plokštiais veidais, cilindrą su apvaliu šonu ir dviem plokščiais galais, apkirptais iki apskritimo, sferą iš vieno apsukto paviršiaus.
- **Kietasis kūnas iš paviršių** sugrupuoja paviršius, kuriuos patys sukūrėte. Pasirinkite juos arba nieko nepasirinkite, kad būtų naudojami visi rodomi paviršiai, kurie dar nėra kietajame kūne. Jie siuvami kartu pagal toleranciją: jei jie neuždaromi, niekas nekeičiama, o skydelis nurodo, kiek kraštų lieka atviri ir kaip arti jie turi susieiti.
- **Sąjunga**, **Atimti** (antrasis kietasis kūnas atimamas iš pirmojo) ir **Sankirta** (lieka tik tai, ką abu turi bendro) ima du kietuosius kūnus: spustelėkite kiekvieno veidą vaizde arba paspauskite **Pasirinkti** kietųjų kūnų sąraše. Pažymėkite **Palikti abu kietuosius kūnus**, kad jie liktų šalia rezultato.

Būlio operacija palieka kiekvieną veidą ant tikslaus paviršiaus ir apkerpa jį naujais kontūrais išilgai susikirtimo. Rezultato eilutėje pateikiami išmatuoti skaičiai: kiek kietojo kūno variklio taškams teko pasislinkti, kad atsidurtų ant tikslių paviršių (niekada daugiau nei tolerancija), koks arti susikirtimo taškai yra prie abiejų paviršių (paprastai keli milijoninės milimetro dalys), tūris ir ar nauji veidai vėl užsidaro, kai iš naujo susiuvami iš savo tikslių paviršių. Tūriai matuojami trikampiais pagal toleranciją (0.05 mm, jei nenustatėte kitos), todėl sferos ar cilindro tūris rodomas šiek tiek mažesnis už tikslųjį: mažesnė tolerancija priartina. Būlio operacija, kurios negalima atlikti švariai (kietieji kūnai neturi bendrų taškų, kontūras susikirstų pats su savimi), atmetama žodžiais ir nieko nekeičia. Viena Būlio operacija yra vienas skydelio {{ui:Anuliuoti}} žingsnis.

Kietųjų kūnų sąraše **Išskaidyti** palieka veidus kaip paprastus paviršius; šiukšliadėžė pašalina kietąjį kūną ir jo veidus.

## Suapvalinimai ir storinimas

**Suapvalinti tarp veidų** suapvalina kraštą, kuriame susitinka du vieno kietojo kūno veidai: pasirinkite du veidus (vaizde arba su **Pasirinkti** sąraše), įveskite **spindulį** ir, jei spindulys turi keistis palei kraštą, **spindulį gale** (0 palieka vieną spindulį). Rutulys tam spinduliui ritamas palei kraštą liesdamas abu veidus; suapvalinimas yra tikslus apskritiminis lankas, kurį jis palieka kiekviename taške, sujungtas į vieną paviršių, o abu veidai apkerpami ten, kur rutulys juos liečia. Išorinis kraštas praranda medžiagos, vidinis kampas ją įgyja. Rezultato eilutėje pateikiama, kas išmatuota: kiek suapvalinimo paviršius nukrypsta nuo ritančio rutulio tarp taškų, iš kurių jis sukurtas (taškai pridedami, kol nuokrypis tampa mažesnis nei ketvirtadalis tolerancijos), didžiausias kampas tarp suapvalinimo ir kiekvieno veido išilgai liečiamųjų linijų, ir tie patys skaičiai kaip sąjungos atveju. Spindulys, kuris netinka (rutulys išeitų iš veido arba veidas išlinksta siauriau nei spindulys), atmetamas nurodant veidą, ir nieko nekeičiama.

**Suapvalinti kelis kraštus** suapvalina daug kraštų vienu žingsniu: pasirinkite du pirmojo krašto veidus, tada kito krašto veidus ir taip toliau (veidas gali būti keliose poromis, pavyzdžiui, dėžės viršutinis veidas keturiose iš jų); visi kraštai gauna jūsų įvestą spindulį. Kiekvienas suapvalinimas apskaičiuojamas ant kietojo kūno tokio, koks jis buvo, o tada jie išpjaunami vienas po kito, todėl tvarka nesvarbi. Ten, kur du suapvalinti kraštai susitinka kampe, kurio kiti kraštai lieka aštrūs, du suapvalinimai susilieja išilgai savo susikirtimo kreivės (įlankos). Ten, kur trys suapvalinti išoriniai kraštai iš trijų plokščių veidų, statmenų vienas kitam, susitinka su vienu spinduliu, kampas tampa vienu **sferos lopu**, liečiančiu visus tris suapvalinimus (atžymėkite **Kampai**, kad gautumėte kampą su įlanka); kraštas turi būti bent du kartus ilgesnis už spindulį, kai abiejuose jo galuose yra tokie kampai. Rezultato eilutėje nurodoma, kiek kraštų suapvalinta ir kaip išėjo kampai. Vidiniai kraštai taip pat gali būti suapvalinami kartu, tačiau rezultatas, kuris neužsidaro, tik pranešamas (eilutė tai parodo), todėl patikrinkite.

**Storinti į kietąjį kūną** suteikia paviršiui storį: pasirinkite jį, įveskite **storį** ir pažymėkite **Kita pusė**, kad jis augtų kitu keliu. Poslinkio veidas pritaikomas prie paviršiaus ir matuojamas palyginus su juo (rezultato eilutėje pateikiamas didžiausias skirtumas nuo storio); sienos seka kiekvieną kraštą ir kiekvieną apkirpimo kontūrą. Jei paviršius toje pusėje išlinksta siauriau nei storis arba kita jo dalis guli arčiau nei storis, operacija atmetama nurodant paviršių ir vietą, ir niekas nekeičiama.

## Kietojo kūno įrašymas į detalę

**Įrašyti** (Paviršių įrankių juostoje) arba **Įrašyti į detalę** kietųjų kūnų sąraše paverčia kietąjį kūną detalės kūnu, kaip atidarytas STL tampa kūnu: pasirinkite kietąjį kūną, nurodykite, ar jis **pridedamas** prie detalės, **išpjaunamas** iš jos ar **sankertamas** su ja, ir toleranciją (kiek trikampiai gali nukrypti nuo tikslių paviršių). Tai vienas detalės Anuliuoti žingsnis, o elementų sąraše jis atsiranda kaip importas pavadinimu pagal kietąjį kūną. Detalė išsaugo trikampius, todėl atsidaro ir perkuriama be paviršių; tikslusis kietasis kūnas lieka Paviršiuose, todėl po pakeitimo jį galima įrašyti dar kartą.

## Failai

Eksportuokite **STEP** (AP242) arba **IGES** su kreivėmis ir paviršiais tiksliai tokius, kokie jie yra (B-splainų kreivės ir paviršiai, nieko nepaversta trikampiais). Kiekvienas paviršius yra atskiras veidas su savo apkirpimu; kietasis kūnas įrašomas kaip vienas uždaras apvalkalas, kurio kiekvienas kraštas bendras dviem jo veidams, kaip tikisi kitos CAD programos (būsenos eilutėje nurodoma, kiek kietųjų kūnų išeina taip). IGES formate tas pats kietasis kūnas yra vienas vientisas kietasis B-rep (elementas 186 su uždaru apvalkalu 514, veidai 510, kontūrai 508, vienas kraštų sąrašas 504 ir viršūnių sąrašas 502); kietasis kūnas, kurio veidai nesutampa kraštas po krašto, įrašomas kaip atskiri veidai, ir eilutė tai nurodo. **Importuoti…** nuskaito tokį kietąjį kūną atgal kaip kietąjį kūną, tiek iš STEP, tiek iš IGES.

## Laivo korpuso linijų išlyginimas

**Išlyginti** (Paviršių įrankių juostoje) išmatuoja kiekvieną kreivę pagal jos tikslią formą — perlinkimus (kur ji keičia lenkimo kryptį), didžiausią kreivumą, kreivumo šuolius mazguose ir jos šiurkštumą — ir perkuria tas, kurios turi perlinkimą ar šuolį, naudodama mažiausiai valdymo taškų, kurie lieka tolerancijos ribose, kurią nurodote, ir neįneša perlinkimo. Nubrėžkite skersinius pjūvius, vandens linijas ir sienas kaip kreives, išlyginkite jas, tada **Sujungimu (loft)** sukurkite korpusą per skersinius pjūvius ir patikrinkite jį su **Zebra**. Nelygios kreivės taip pat atsiranda **Problemose** su taisymu **Išlyginti šią kreivę**. Linija, kuri turi keisti kryptį (S formos skerspjūvis), išlaiko tą vieną perlinkimą. Korpuso išstūmimą, centrus ir stabilumo svirtis paima iš kietosios detalės: žr. hidrostatikos įrankį.

## Paviršiai iš skenavimo (atvirkštinis projektavimas)

Atidarykite detalę, kurioje yra skenuotas tinklas (atidarytas STL arba įrašytas kūnas), pasirinkite **Paviršiai** lauke **Darbo sritis**, o grupėje **Skenavimas** pasirinkite **Pritaikyti paviršius prie skenavimo**; detalės sukurtas tinklas ir yra skenavimas. Įrankis ieško **plokštumų**, **cilindrų**, **sferų** ir **kūgių** (tikslių paviršių, iš kurių sudaryta apdirbta detalė; kiekvienoje eilutėje nurodomas rastas spindulys ar pusės kampas), randa **suapvalinimus** (suapvalintus kraštus ir kampus: mažą cilindrą ar sferą, liečiančią dažnai du ar daugiau kitų veidų, rodomą su jo spinduliu ir veidais, kuriuos jis jungia), **krašto suapvalinimus** (toras: suapvalintas kraštas, kur plokščias veidas susitinka su cilindru ar kūgiu, rodomas su spinduliu ir žiedo spinduliu) ir **kintamus suapvalinimus** (suapvalintas kraštas, kurio spindulys keičiasi palei jį, rodomas su spinduliu kiekviename gale), pritaiko **vieną laisvos formos lopą** sklandžiam, švelniai išlenktam gabalui ir iškerpa kiekvieną veidą pagal skenavimo dalies, iš kurios jis atsirado, kontūrą, todėl skylės ir kampai išlieka. Parinktys: **tolerancija** (kiek, mm, skenavimo taškas gali būti nuo plokštumos ar cilindro ir vis dar jam priklausyti, bei tikslas laisvos formos lopui), **mažiausias gabalas** (paviršiaus ploto dalis) ir **daugiausia veidų**. Tas pats skenavimas ir tos pačios parinktys visada duoda tuos pačius veidus.

Rezultatas yra lentelė, po vieną eilutę kiekvienam veidui: jo rūšis, kiek trikampių jis atsirado ir paklaida, **išmatuota nuo skenavimo iki veido** (rms, didžiausia ir taškų, patenkančių į toleranciją, dalis). Matuojami skenavimo viršūnės ir kiekvieno trikampio vidurys. Paklaida nematuojama kita kryptimi (nuo veido iki skenavimo), todėl veidas, išsiplečiantis už skenavimo, nepasirodytų. Po lentele esanti pastaba taip pat nurodo, kiek ploto buvo per mažo, kad būtų pritaikytas. Vaizde skenavimo taškai nuspalvinami pagal jų **nuokrypių žemėlapį**: mėlyna ant veido, žalia pusiaukelėje iki tolerancijos, raudona ties tolerancija ar daugiau (išjunkite **Rodyti nuokrypių žemėlapį**, kad jį paslėptumėte). Gabalai, kurie susilanksto ant savęs (pavyzdžiui, uždarytas vamzdis, pritaikytas laisvos formos lopais), išvardijami kaip nepritaikyti, ir niekada nepriverčiami tapti vienu paviršiumi.

**Sujungti paviršius į kietąjį kūną** susiuva kiekvieną rodomą paviršių, kuris dar nėra kietajame kūne, į vieną uždarą kietąjį kūną. Skenavimo veidai susitinka tik su paties skenavimo paklaida, todėl jis bando mažiausią sujungimo atstumą, kuris užsidaro (ne daugiau nei nustatytas **sujungimo atstumas**), ir žodžiais atsisako, kai veidai neužsidaro. Jis niekada neužkemša spragos. Dėžė su suapvalintais kraštais sujungiama, kai jos suapvalinimai buvo rasti kaip atskiri veidai; rezultate nurodomas atstumas, kuriuo užsidarė. Tada kietasis kūnas veikia su Sąjunga, Atimti, Sankirta ir **Įrašyti į detalę**.

Ko ji nedaro: **krašto suapvalinimas** (toras) ieškomas tik aplink jau rasto cilindro ar kūgio ašį, o **kintamas suapvalinimas** — tik palei gana tiesų kraštą (jo pjūviai pjaunami statmenai vienai krypčiai); kitur jie tampa laisvos formos lopais, kai yra pakankamai sklandūs, ir praleidžiami kitu atveju; sferos, kūgiai ir suapvalinimai ieškomi atsitiktine atranka, todėl labai mažas (keli trikampiai) gali būti praleistas; nuokrypių žemėlapis rodo atstumą nuo skenavimo iki veidų, o ne atvirkščiai; labai dideli skenavimai (daugiau nei 300 000 trikampių) čia atmetami. Pilno apsisukimo cilindro veidai iškerpami aplink skyles, o siūlė įdedama ten, kur skylės nėra. Prieš pasikliaudami, patikrinkite kiekvieną veidą su savo skenavimu.

## Dar neįgyvendinta

Kraštų suapvalinimas, kur jie susitinka kampe su išlenktais veidais arba su skirtingais spinduliais (viršūnės suliejimas); suapvalinimas tarp veidų, kurie nesusitinka; vidinis suapvalinimas, kuris baigiasi ant pasvirusio ar išlenkto veido; Būlio operacijos ir suapvalinimai, skaičiuojami ant paviršių be trikampių (čia kietojo kūno variklis dirba su trikampiais pagal toleranciją, o kiekvienas taškas tada grąžinamas į tikslius paviršius); įrašytas kūnas, kuris seka paviršius, kai jie pasikeičia; paviršiaus apkirpimas kitu paviršiumi už Būlio operacijos; skylių, turinčių daugiau nei keturias puses, užpildymas; kreivių projektavimas į paviršius.
