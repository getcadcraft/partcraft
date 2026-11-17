---
title: Mat distancat, këndet dhe masën
summary: Kliko dy gjëra në pamje për distancën minimale, këndin dhe ΔX ΔY ΔZ; lexo gjatësinë e një skaji, diametrin e një vrime, sipërfaqen e një faqeje ose koordinatat e një pike; merr vëllimin, masën, qendrën e masës dhe inercinë e një pjese ose montimi.
keywords: mat, distancë, distancë minimale, kënd, gjatësi, rreze, diametër, sipërfaqe, koordinata, delta, inspekto, veti masore, masë, peshë, qendër masës, moment inercie, inerci, dendësi, material
from: 20bda0b7
---

**Mat** funksionon mbi modelin në çdo hapësirë pune (Dizajn, Formë, Simulim, Gjenerativ, Prodhim) dhe në montim. Gjendet në menynë {{ui:Pamjet}} të grupit **Pamje**, ose shtyp {{key:M}}. Një kartelë hapet mbi këndin e sipërm majtas të pamjes.

## Mat një gjë

Kliko një kulm, një skaj ose një faqe. Kartela tregon:

- **Një pikë** (një kulm, mesi i një skaji ose qendra e një rrethi): X, Y, Z të saj.
- **Një skaj**: i drejtë, rreth ose kurbë, dhe gjatësia e tij; për një rreth edhe rrezja, diametri dhe qendra.
- **Një faqe**: e sheshtë, cilindër, konus e kështu me radhë, dhe sipërfaqja e saj; normalja e një faqeje të sheshtë; rrezja dhe diametri i një cilindri (madhësia e një vrime). Sipërfaqet janë të faqeve që ndërton bërthama e rrjetës.
- **Tërë trupi**: mbaj {{key:Shift}} dhe kliko pjesën. Merr vëllimin, sipërfaqen, masën dhe inercinë e tij (shih më poshtë).

Treguesi ngjitet te kulmet, mesi i skajeve dhe qendrat e rrathëve brenda 10 pikselësh; një pikë e vogël blu tregon ngjitjen para se të klikosh. Për të zgjedhur qendrën e një vrime, shiko mesin e vrimës; për të zgjedhur buzën e saj (rrethin), shiko buzën.

## Mat midis dy gjërash

Kliko një artikull të dytë. Kartela shton:

- **Distanca minimale** dhe dy pikat më të afërta, të vizatuara në pamje me një vijë midis tyre.
- **ΔX, ΔY, ΔZ** nga pika e parë më e afërt te e dyta.
- **Këndi** midis dy faqeve të sheshta (midis normaleve të tyre, 0–180°), midis dy skajeve ose boshteve të drejta (0–90°), ose midis një skaji dhe një faqeje.
- **Hapësira midis planeve** për dy faqe të sheshta paralele, **Qendër në qendër** për dy rrathë ose vrima, **Bosht në bosht** për dy vrima ose cilindra paralelë.

Një klikim i tretë nis një çift të ri. {{key:Esc}} pastron zgjedhjet; {{key:Esc}} përsëri (ose {{ui:Mbyll}}) e mbyll Matjen. {{ui:Kopjo}} vendos rezultatet në kujtesën e ndërmjetme si tekst me tab, gati për t'u ngjitur në një fletë llogaritëse.

### Sa e saktë është

PartCraft e ndërton pjesën me bërthamën e rrjetës, kështu që distancat llogariten mbi faqet e rrjetës dhe kartela thotë **përafërsisht: sipas faqeve**: e saktë për faqet e sheshta dhe midis kulmeve, pak e shtrembër për ato të lakuara. Një cilësim më i imët **Kurbat** i afron ato më shumë. Matja e saktë mbi sipërfaqet e vërteta kërkon një bërthamë të saktë: nuk është ndërtuar ende në këtë version.

## Veti masore

Zgjidh {{ui:Veti masore}} në kartelë ose në menynë {{ui:Pamjet}}. Te një pjesë, zgjidh një **Material** në kartelë (çelik, alumin, plastika dhe të tjerë me dendësitë e tyre të zakonshme). Në një montim çdo pjesë përdor materialin e vendosur në vetitë e saj (zgjidh pjesën, pastaj **Material**), dhe rezultati është për të gjitha pjesët së bashku.

Kartela tregon masën, vëllimin, sipërfaqen, qendrën e masës, tensorin e inercisë (Ixx, Iyy, Izz dhe prodhimet Ixy, Iyz, Ixz, në kg·mm², rreth qendrës së masës sipas boshteve të botës) dhe momentet kryesore. Pa material tregon të njëjtën gjë për njësi dendësie (mm⁵) dhe pa masë.

Numrat janë të saktë për trupin e mozaikuar që ndërton bërthama e rrjetës (faqet e lakuara si faqe të sheshta), kështu që një pjesë e rrumbullakët del pak më e ulët, dhe kartela e thotë këtë. Dendësitë e materialeve janë vlera tipike nga manualet; një aliazh ose klasë reale mund të ndryshojë me disa për qind.

## Kufijtë

- Ngjitjet mund të gjejnë një pikë të fshehur pas gjeometrisë tjetër; kontrollo që kartela të thotë atë që do.
- Matja mbyllet kur hap një skicë ose fletën e vizatimit, ose ndërron hapësirën e punës.
