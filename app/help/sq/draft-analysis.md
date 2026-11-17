---
title: Kontrollo draft për kallëpim dhe derdhje
summary: Ngjyros pjesën sipas këndit të draft-it në raport me drejtimin e tërheqjes së një kallëpi, shiko cilat sipërfaqe lirohen, cilat kanë nevojë për më shumë draft dhe cilat lirohen nga gjysma tjetër, me pjesën e secilës nga sipërfaqja.
keywords: analiza e draft-it, draft, konicitet, kallëp, derdhje nën presion, kallëpim me injektim, drejtimi i tërheqjes, vija e ndarjes, undercut, lirim, kontrollo draft
from: 6a106f83
---

Pjesët e bëra në kallëp, në matricë ose në derdhje me rërë kanë nevojë për **draft**: mure të prirur pak, që pjesa të rrëshqasë jashtë. **Analiza e draft-it** ngjyros çdo sipërfaqe sipas sa prirjet nga drejtimi ku hapet kallëpi (**tërheqja**).

## Aktivizoje

1. Në hapësirën e punës Design, hap {{ui:Pamjet}} dhe zgjidh {{ui:Analiza Draft}}.
2. Cakto **Tërheqja**: drejtimi ku hapet kallëpi, përgjatë X, Y ose Z në të dy drejtimet, ose **Normale me një sipërfaqe të zgjedhur**: shtyp {{ui:Zgjidh një sipërfaqe}} dhe kliko një sipërfaqe të sheshtë të pjesës.
3. Cakto **Draft minimal**, në gradë: prirja më e vogël që kërkon procesi yt (shpesh 1° deri 3°).

Pjesa ngjyroset:

| Ngjyra | Do të thotë |
|---|---|
| E gjelbër: **Draft pozitiv** | E prirur nga tërheqja të paktën sa minimumi: lirohet nga kjo gjysmë e kallëpit |
| Okër: **Ka nevojë për draft** | Brenda minimumit në të dy drejtimet, si një mur vertikal: shto draft këtu |
| E kuqe: **Draft negativ** | E prirur larg tërheqjes të paktën sa minimumi: lirohet nga gjysma tjetër, ose është një undercut nëse pjesa duhet të dalë nga një gjysmë |

Pjesa e sipërfaqes totale të pjesës për secilën klasë shfaqet pranë saj. **Ktheje tërheqjen** shikon nga gjysma tjetër e kallëpit: jeshilja dhe e kuqja ndërrojnë vend.

Sipërfaqet e lakuara vlerësohen pikë për pikë, kështu që një cilindër i shtrirë përtej tërheqjes shfaq një brez që ka nevojë për draft përgjatë anëve.

Ngjyrat ndjekin pjesën ndërsa e ndryshon. {{key:Esc}} ose {{ui:Mbyll}} e fik analizën; asgjë nuk ruhet në pjesë.

:::tip
Për të shtuar draft, përdor veçorinë {{ui:Draft}} mbi sipërfaqet okër (shih [Sweep, loft dhe draft](topic:sweep-loft-draft)), pastaj kontrollo përsëri.
:::
