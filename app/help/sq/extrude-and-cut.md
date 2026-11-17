---
title: Ekstrudo një boss dhe prit përmes tij
summary: Ktheje një skicë në trup të ngurtë me Ekstrudo, cakto thellësi të verbra, në mes të planit, deri-te ose me dy drejtime, një konicitet, ose një kontur të vetëm të skicës, pastaj skico mbi një faqe dhe Prit një xhep ose një prerje të hapur.
keywords: ekstrudo, boss, boss i ekstruduar, prit, prerje e ekstruduar, xhep, përgjatë gjithë, i verbër, në mes të planit, kthe, thellësi, prit-ekstrudo, boss-ekstrudo, mbushje, deri te faqja, deri te faqja e radhës, deri te kulmi, zhvendosje nga sipërfaqja, drejtimi 2, dy drejtime, konicitet gjatë ekstrudimit, konicitet, kontur, zonë, konturet e zgjedhura
from: 3b13ff10
---

{{ui:Ekstrudo}} shtyn konturin e mbyllur të një skice drejt jashtë, nga plani i saj, për të krijuar material. {{ui:Prit}} bën të njëjtën gjë, por heq material. Të dyja janë e njëjta veçori nën sipërfaqe; mund ta kalosh njërën në tjetrën më vonë.

## Ekstrudo një boss

1. Vizato një kontur të mbyllur dhe mbyll skicën (shih [Vizato skicën e parë](topic:sketch-basics)). Ajo mbetet e zgjedhur.
2. Zgjidh {{ui:Ekstrudo}}.

Shfaqet një trup 10 mm, "Extrude1" bashkohet me historikun me skicën e vet të zhvendosur nën të, dhe shiriti i statusit thotë "Extrude1 u shtua. Ndrysho numrat e tij në të djathtë."

**Cila skicë përdoret:** skica që sapo mbylle, ose skica e zgjedhur në historik. Kur nuk është zgjedhur asgjë, PartCraft merr skicën më të fundit që asnjë veçori nuk e përdor ende. Nëse nuk ka asnjë: "Bëj fillimisht një skicë: zgjidh një plan, {{ui:Skica}}, vizato një kontur të mbyllur, {{ui:Dil}}."

### Cakto thellësinë dhe drejtimin

Në panelin e djathtë:

| Cilësimi | Zgjedhjet | Parazgjedhja |
|---|---|---|
| **Veprimi** | Boss (shton material), Cut (heq material), Intersect (ruan mbivendosjen), New body (nuk është ndërtuar ende në këtë version: kërkon kernel të saktë) | Boss |
| **Fundi** | Verbër (një thellësi), Mes-plani (në të dy anët), Përgjatë gjithë, Deri te faqja ose plani, Deri te faqja e radhës, Deri te kulmi, Zhvendosje nga faqja | Verbër |
| **Thellësia (mm)** | Çdo madhësi mbi zero (shfaqet për Verbër dhe Mes-plani) | 10 |
| **Kthe drejtimin** | Ndalet në anën tjetër të planit të skicës (nuk shfaqet për Mes-plani) | Off |

Shkruaj një numër dhe shtyp {{key:Enter}} ose {{key:Tab}}: pjesa rindërtohet menjëherë. **Mes-plani** vendos gjysmën e thellësisë në çdo anë të skicës.

### Deri te një faqe, faqja e radhës ose një kulm

Nuk është ndërtuar ende në këtë version: çdo fund "deri te" kërkon kernel të saktë, dhe veçoria shfaq "Ekstrudimi deri te një faqe, faqja e radhës ose një kulm: nuk është ndërtuar ende (kërkon kernel të saktë)." Përdor një thellësi Verbër që e matë vetë. Me kernel të saktë, fundet funksionojnë kështu:

- **Deri te faqja ose plani**: **Deri te** merr një faqe të sheshtë ({{ui:Përzgjidh faqet}}, pastaj kliko) ose një plan referimi. Një faqe paralele me skicën jep një thellësi të saktë; një faqe e pjerrët e pret fundin sipas pjerrësisë. Nëse faqja është pas skicës: "… Provo Kthe drejtimin."
- **Deri te faqja e radhës**: ndalon te faqja e parë e sheshtë e trupit që takon ekstrudimi (faqet e lakuara nuk mbështeten këtu: këtë e thotë vetë programi).
- **Deri te kulmi**: ndalon në nivelin e një kulmi (kliko pranë fundit të një brinje) ose të një veçorie pike.
- **Zhvendosje nga faqja**: si Deri te faqja ose plani, por ndalon **Zhvendosja (mm)** para saj (matur pingul me faqen).

### Dy drejtime, konicitet, një kontur

- **Drejtimi i dytë** (Verbër): ekstrudon edhe **Thellësia e dytë (mm)** në anën tjetër të skicës.
- **Konicitet (°)**: anët priren brenda ndërsa shkojnë, si një pjerrësi (negative: jashtë); vetëm një drejtim. Nuk është ndërtuar ende në këtë version (kërkon kernel të saktë): lëre në 0.
- **Zonat**: **Zgjidh zonat**, pastaj kliko brenda lakëve për t'u ekstrudim; vetëm ato zona përdoren (një rreth brenda një katrori: kliko brenda rrethit për një cilindër, mes tyre për një pllakë me vrimë). **Të gjitha** kthen në çdo lak.

Poshtë këtyre, **Përmasat e skicës** liston përmasat drejtuese të skicës, kështu që mund t'i ndryshosh përmasat e profilit pa hapur skicën.

:::note
**Përgjatë gjithë është vetëm për prerje.** Një boss i vendosur në Përgjatë gjithë dështon me "Përgjatë gjithë është për prerje. Për një boss përdor një thellësi." Kur kalon një veçori nga Prit përsëri në Boss, Përgjatë gjithë kthehet automatikisht në Verbër.
:::

## Prit një xhep

1. Kliko faqen e sheshtë ku do të pritesh. Ajo nxjerr dritën, dhe paneli i djathtë thotë **Faqe**.
2. Zgjidh {{ui:Skicë mbi këtë faqe}} (ose {{ui:Skica}} në shiritin e veglave).
3. Vizato konturin e xhepit, për shembull një drejtkëndësh, dhe vendos përmasat.
4. Zgjidh {{ui:Dil}}.
5. Zgjidh {{ui:Prit}}. Fillon si **Përgjatë gjithë**: heq material tërësisht nga pjesa.
6. Për një xhep, cakto **Fundi** në **Verbër (një thellësi)** dhe shkruaj **Thellësia (mm)**.

Një prerje shkon brenda materialit, larg faqes ku skicove. Nëse shiriti i statusit thotë "Nuk ka asgjë për prerje në atë anë të skicës. Provo drejtimin tjetër.", vendos hakun te **Kthe drejtimin**.

Një skicë mbi dyshemenë e xhepit e ndjek dyshemenë: ndrysho thellësinë e xhepit dhe skica lëviz me të.

## Nxirr ose shtyp një faqe të tërë

Për ta bërë një faqe të dalë më shumë ose të fundoset, nuk ke nevojë të vizatosh konturin e saj. Kliko faqen e sheshtë, pastaj në panelin e djathtë:

- {{ui:Nxirr prej saj}} e nxjerr faqen jashtë: PartCraft shton një skicë mbi faqe që mban konturin e saj (vrimat në faqe mbeten vrima) dhe një Ekstrudo 10 mm.
- {{ui:Pritu brenda saj}} e shtyn faqen brenda: e njëjta skicë dhe një Prit gjysmën e rrugës në pjesë.

Të dyja janë një hap i vetëm: {{key:Mod+Z}} heq skicën dhe veçorinë bashkë. Veçoria e re është e zgjedhur, prandaj shkruaj një numër menjëherë dhe shtyp {{key:Enter}} për thellësinë e saj. Konturi kopjohet si vija dhe harqe të fiksuara: nuk ndjek ndryshimet e mëvonshme të faqes. Nëse një pjesë e konturit nuk mund të kopjohet (një kurbë e lirë), skica hapet me atë që mund të kopjohej; përfundo, pastaj zgjidh {{ui:Dil}} dhe {{ui:Ekstrudo}} ose {{ui:Prit}}.

## Profile me ishuj

Një skicë mund të mbajë disa lakë të mbyllura. Lakët pranë njëri-tjetrit bëhen boss të veçantë (ose prerje); një lak brenda një tjetri bëhet vrimë përmes bossit. Për shembull, një drejtkëndësh me dy rrathë brenda ekstrudohet si pllakë me dy vrima.

Për të përdorur vetëm disa lakë, zgjidhi me **Zonat** (më lart); një veçori tjetër mund të përdorë lakët e tjera të së njëjtës skicë.

## Modifikoje më vonë

- Kliko "Extrude1" në historik për të sjellë përsëri cilësimet e saj.
- Kliko dy herë mbi skicën e saj (të zhvendosur nën të) për ta hapur; mbylle për ta rindërtuar.
- Shih [Ndrysho një pjesë përmes historikut të saj](topic:edit-history) për pezullimin, kthimin, rirenditjen dhe fshirjen.

## Mesazhe të zakonshme

| Mesazhi | Çfarë të bësh |
|---|---|
| "Skica nuk ka kontur të mbyllur për ekstrudim." | Skica nuk ka lak të mbyllur me vija të ngurta. Mbyll hapësirat, ose kthe vijat e ndërtimit me {{key:Q}} |
| "Profili është i hapur: një skaj te (x, y) nuk është i lidhur me asgjë." | Hap skicën dhe lidh atë skaj me vijën e radhës |
| "Nuk ka asgjë për të prerë ende." | Një prerje ka nevojë për një trup për ta prerë. Bëj fillimisht një boss |
| "Pas kësaj nuk mbetet asgjë nga pjesa." | Prerja hoqi gjithçka. Kontrollo madhësinë dhe drejtimin e saj |

Më shumë te [Zgjidhja e problemeve](topic:troubleshooting).
