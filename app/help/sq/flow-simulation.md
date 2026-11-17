---
title: Simuloni rrjedhën e fluidit (studim rrjedhjeje)
summary: Rrjedha përmes kanaleve brenda një pjese ose rreth saj në një kuti: hyrje, dalje, ajër, ujë ose fluidi juaj, pastaj shpejtësia dhe presioni në një plan prerës të lëvizshëm, vijat e rrjedhës, presioni sipërfaqësor, rënia e presionit, bilanci i masës, tërheqja dhe ngritja, me atë që metoda laminare mund dhe nuk mund të tregojë.
keywords: rrjedhë, CFD, fluid, dinamikë numerike e fluideve, simulim rrjedhjeje, ajër, ujë, viskozitet, dendësi, numri Reynolds, laminar, turbulent, rënie presioni, humbje ngarkese, hyrje, dalje, kapak, mbulesë, shpejtësi, debit, debit volumi, litra në minutë, presion statik, vijat e rrjedhës, plan prerës, plan seksioni, tërheqje, ngritje, koeficienti i tërheqjes, koeficienti i ngritjes, sipërfaqe ballore, rrjedhë e jashtme, rrjedhë e brendshme, tub, kanal, kolektor, nozël, lattice Boltzmann, mbetje, konvergjencë
from: 7dc75f29
---

Një studim **Rrjedhje** llogarit se si lëviz një fluid përmes kanaleve brenda pjesës suaj (**të brendshme**) ose rreth saj (**të jashtme**). Si parazgjedhje është **laminar, i pangjeshshëm, izotermik dhe Njutonian**: rrjedhë e qetë e një fluidi, dendësia dhe viskoziteti i të cilit mbeten fiks, pa nxehtësi, pa turbulencë dhe pa gravitet. Ka gjithashtu një model turbulent **eksperimental**, vetëm për modele cilësore (shih më poshtë). Ai punon mbi sipërfaqet e emërtuara që i jep kerneli i rrjetit pjesës (shih [Kerneli i rrjetit](topic:solid-kernels)).

Zgjidhni **Simulim** te kutia **Hapësira e punës**, shtypni **Studim i ri** nëse nuk ka asnjë, dhe vendosni **Lloji** në **Rrjedhje (CFD)**. **Modeli i rrjedhjes** është **Laminar** (parazgjedhja) ose **Turbulent (Spalart–Allmaras, eksperimental)**: shih **Rrjedha turbulente (eksperimentale)** më poshtë. Cilësimet strukturore të studimit ruhen, kështu që mund të ktheheni mbrapsht. Cilësimet e rrjedhës ruhen në skedarin e pjesës dhe çdo ndryshim mund të zhbëhet.

## Zgjidhni fluidin dhe qelizat

- **Fluidi**: ajër ose ujë në 20 °C, ose **I personalizuar** me dendësinë tuaj (kg/m³) dhe viskozitetin dinamik (Pa·s). Ajri përdor ligjin e gazit ideal dhe ligjin e Sutherland-it (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); uji përdor vlerat IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Madhësia e qelizës**: hapësira e fluidit mbushet me kube të barabartë. Lëreni bosh për madhësi automatike; paneli shfaq rrjetën. Çdo hapje dhe kanal duhet të jetë **të paktën 8 deri 10 qeliza gjerësi** për numra të dobishëm; qelizat më të vogla janë më të sakta dhe më të ngadalta (dyfishi i hollësisë kushton rreth 16 herë punë).
- **Muret**: **Interpoluar** ndjek muret e lakuara midis qelizave (parazgjedhja); **Kthim prapa** i trajton muret si shkallë kubike.

## Rrjedha brenda pjesës

Hapësira e fluidit duhet të jetë e mbyllur. Shtoni një **Hyrje** dhe një **Dalje** në panel, pastaj klikoni faqet e tyre në pamje:

1. **Faqja e sheshtë rreth një hapjeje** — buza në fund të një tubi, faqja e një porte. PartCraft mbyll vrimën e hapjes me një kapak. Çdo vrimë në atë faqe i përket asaj hapjeje, kështu që kur një hyrje dhe një dalje hapen në të njëjtën faqe, modelojeni në vend të kësaj një mbulesë të hollë mbi njërën prej tyre.
2. **Faqja e brendshme e një mbulese** — si në mjetet e tjera CAD: modelo një pllakë të hollë (një ekstrudim) mbi hapjen dhe zgjidhni faqen e saj që prek fluidin.

Për një hyrje vendosni një **shpejtësi** (m/s, uniforme përgjatë hapjes, drejt pjesës) ose një **debit volumi** (L/min). Për një dalje vendosni **presionin statik** (Pa, relativ). Nëse një hapje mbetet e hapur, ose një mur është më i hollë se një qelizë, brendësia bashkohet me jashtësinë dhe zgjidhja ndalon me mesazhin "Nuk ka hapësirë fluidi të mbyllur".

## Rrjedha rreth pjesës

Vendosni **Rrjedha** në **E jashtme**, **Shpejtësinë**, drejtimin drejt të cilit rrjedh, dhe sa larg shtrihet kutia përpara rrjedhës, pas saj dhe anash (bosh: 1, 3 dhe 1 herë madhësia më e madhe e pjesës). Faqja e kutisë nga e cila hyn rrjedha është një rrjedhje hyrëse, faqja nga e cila del është një rrjedhje daljeje me 0 Pa, dhe faqet përgjatë rrjedhës rrëshqasin. Një kuti shumë e vogël e shtrydh rrjedhën rreth pjesës dhe rrit tërheqjen. **Sipërfaqja referuese** është sipërfaqja që përdorin koeficientët e tërheqjes dhe ngritjes (bosh: sipërfaqja ballore e pjesës, e parë përgjatë rrjedhës); ngritja matet përgjatë +Y, përveç nëse zgjidhni një drejtim tjetër.

## Zgjidhni dhe lexoni rezultatet

Shtypni **Zgjidh**. Zgjidhja punon në sfond me numrin e hapave, mbetjen dhe një grafik të mbetjes; **Ndalo** e përfundon. Ajo ndalon kur mbetja (sa ndryshon ende fusha e shpejtësisë për hap) është nën objektivin dhe rënia e presionit ose tërheqja është stabilizuar. Nëse arrin më parë kufirin e hapave, paneli shfaq me ngjyrë të kuqe **Nuk konvergoi**: numrat janë gjendja e fundit, jo një përgjigje e qëndrueshme.

- **Plan prerës**: shpejtësia ose presioni statik në një plan përmes modelit; zgjidhni normalen e tij (X, Y ose Z) dhe tërhiqni rrëshqitësin për ta zhvendosur. Kaloni mbi të për të lexuar vlerat.
- **Vijat e rrjedhës**: nga hyrjet (të brendshme) ose nga një grup përgjatë skajit hyrës të kutisë, në planin prerës (të jashtme).
- **Pjesa**: e ngurtë, transparente (për të parë planin brenda), presion sipërfaqësor, ose e fshehur.
- **Tabela**: numri Reynolds, rënia e presionit (presioni mesatar statik në hyrje minus atë në dalje), rrjedha dhe presioni mesatar i çdo hapjeje, forca mbi pjesën, tërheqja dhe ngritja me koeficientët e tyre dhe sipërfaqen referuese (të jashtme), bilanci i masës (rrjedha hyrëse kundrejt asaj dalëse), rrjeta dhe zgjidhësi.

## Rrjedha turbulente (eksperimentale)

**Modeli i rrjedhjes › Turbulent (Spalart–Allmaras, eksperimental)** zgjidh rrjedhën turbulente mesatare në kohë (RANS i qëndrueshëm): modeli Spalart–Allmaras jep një viskozitet vorbullor në çdo qelizë, dhe qelizat pranë mureve përdorin ligjin e murit të Spalding-ut në vend që të zgjidhin shtresën e hollë atje. Është plotësisht turbulent kudo (pa zona laminare, pa kalim).

**Nuk i kaloi testet e saktësisë.** Paneli, rezultatet dhe tabela e thonë këtë në çdo studim turbulent, dhe paralajmërimi nuk mund të mbyllet. Përdoreni për **modele cilësore të rrjedhës** — ku rrjedha ndahet, qarkullon ose përshpejtohet — **jo për shifra projektimi**.

| Kontrolli | Referenca | Rezultati |
|---|---|---|
| Fërkimi i kanalit të sheshtë, qeliza e parë në y⁺ 49 / 98 | Korrelacioni i Dean-it | +3.3 % / +4.7 % |
| Kanal me mur të zgjidhur (y⁺ ≈ 3), Re_τ 180: shpejtësia e masës | DNS i Moser, Kim & Mansour | −1 % |
| Kanal i sheshtë, y⁺ 7–15 ose 190–380 | Korrelacioni i Dean-it | +9 deri +22 % |
| Fërkimi i tubit përmes qelizave kubike, i zhvilluar plotësisht, 10–30 qeliza gjerësi | Colebrook | 30 deri 34 % më i lartë |
| Rikyçja pas një shkalloreje me faqe kthyer prapa, 6–14 qeliza për lartësi shkallorje | Driver & Seegmiller, 6.26 lartësi shkallorjeje | 21 deri 39 % më e shkurtër |

Rezultatet përmirësohen vetëm ngadalë me qeliza më të holla. Pas zgjidhjes, tabela shfaq **y⁺ të qelizës së parë** (min, mesatare dhe max mbi qelizat e murit) dhe paralajmëron jashtë intervalit të kontrolluar prej 1 deri 400; synoni rreth 30 deri 300. **Koha e ekzekutimit:** qelizat automatike janë madhësuar për disa minuta në një bërthamë laptopi të mesmen (paneli shfaq rastin më të keq për rrjetën dhe kufirin e hapave; një tub i vogël qetësohet në më pak se 20 sekonda). Përgjysmimi i madhësisë së qelizës kushton rreth 16 herë më shumë kohë. Forcat mbi pjesën vijnë nga një bilanc momenti mbi hapjet ose kutinë.

Puna deri tani: qelizat e murit tani përputhin shfaqjen e tyre të prerjes me ligjin e murit, gjë që i solli gabimet e tubit dhe të shkallës poshtë shifrave të mësipërme pa ndryshuar rezultatet e kanalit të sheshtë. Kjo nuk mjaftoi për shifra projektimi. Hapi tjetër janë qeliza më të holla pranë mureve.

## Çfarë mund dhe çfarë nuk mund t'ju tregojë

- **Modeli laminar** është vetëm laminar. Në tuba rrjedha bëhet turbulente mbi një numër Reynolds prej rreth 2,000 deri 4,000; pas trupave të trashë, shkëputja e vorbullave fillon mbi rreth 50. Paneli paralajmëron në këto pika. Një rezultat laminar për rrjedhë turbulente nënvlerëson rënien e presionit dhe e llogarit gabim tërheqjen. Modeli turbulent eksperimental (më sipër) mbulon cilësisht rrjedhën turbulente; shifrat e tij nuk janë ende të besueshme.
- **Metoda:** metoda lattice Boltzmann (D3Q19, përplasje dy-kohë-relaksimi) e ekzekutuar deri në gjendje të qëndrueshme. Brenda është pak e ngjeshshme; PartCraft i mban ndryshimet e dendësisë në disa përqindje. Nëse rrjedha është shumë e shpejtë për qelizat, ai refuzon të nisë dhe thotë sa më të vogla duhet të jenë qelizat.
- **Krahasuar me:** rrjedhën Hagen–Poiseuille në një tub përmes një pjese (gradienti i presionit brenda 1 % me 20 qeliza gjerësi), kavitetin e drejtuar nga kapaku të Ghia et al. (brenda 0.75 % të shpejtësisë së kapakut), dhe standardin e cilindrit Schäfer–Turek (tërheqja brenda 1 % me 10 qeliza për diametër).
- Nuk modelohen: transferimi i nxehtësisë, turbulenca me saktësi projektimi (modeli turbulent është eksperimental), sipërfaqet e lira, kavitacioni, graviteti, pjesët në lëvizje, fluidet jo-Njutoniane, muret e ashpra. Ndërtim laboratorik: kontrolloni rezultatet e rëndësishme në një mënyrë tjetër.
