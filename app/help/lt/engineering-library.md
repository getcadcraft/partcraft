---
title: Inžinerijos biblioteka
summary: Vadovėlinės formulės kaip skaitomi scenarijai SI vienetais, kiekvienas rezultatas su šaltiniu: vamzdžių ir kanalų tekėjimas, šilumos perdavimas ir šilumokaičiai, slėgio dalys, dujų dinamika, vandens ir oro savybės, medžiagos ir patikrinami vienetai. Ką kiekvienas tinka daryti ir kur baigiasi.
keywords: inžinerija, biblioteka, vienetai, Darcy-Weisbach, Colebrook, Reynolds, trinties koeficientas, Dittus-Boelter, Gnielinski, NTU, efektyvumas, LMTD, fin, Barlow, Lamé, antgalis, izentropinis, Mach, užsprūdęs tekėjimas, vanduo, oras, savybės, medžiaga, šaltiniai
from: 786ef967
---

Inžinerijos biblioteka – tai scenarijų rinkinys Script darbo srities bibliotekoje (`craftlib/eng`). Kiekvienas yra funkcija, kurią galima skaityti iš viršaus į apačią, su antrašte, kurioje nurodomas **metodas**, jos **vienetai**, **ribos**, **nuorodos** ir **patikrinimas** su apskaičiuotu pavyzdžiu. Visur naudojami SI vienetai, o rezultatai grąžina kiekį su **vienetu** ir **šaltiniu**, todėl duomenų lape galima nurodyti, iš kur paimtas kiekvienas skaičius.

## Patikrinami vienetai

`to_si(10, 'bar', 'Pa')` konvertuoja reikšmę ir atmeta vienetą, kuris matuoja ką nors kita (ilgį, kai tikimasi slėgio). `from_si`, `unit_convert(1, 'bar', 'psi')` ir `unit_kind('W/(m K)')` („šilumos laidumas“) veikia taip pat. `temp_k(25, 'C')` ir `temp_from_k` konvertuoja temperatūras, kurios turi poslinkį.

## Savybės

- `fluid('water', T)` ir `fluid('air', T, p)`: tankis, klampa, laidumas, savitoji šiluma, Prandtl skaičius. Vanduo 0–100 °C, oras 250–600 K; už tų ribų jis sustoja, o ne ekstrapoliuoja.
- `material('ss304')`: Jungo modulis, Puasono koeficientas, tankis, takumo riba, laidumas, savitoji šiluma, plėtimasis: kambario temperatūros reikšmės iš tų pačių duomenų lapų kaip Simulation. Tikras projektas naudoja tiekėjo sertifikuotas reikšmes. Temperatūrų kreivės dar neįgyvendintos.

## Tekėjimas vamzdžiuose ir kanaluose

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminariniam tekėjimui, o turbulentiniam – Colebrook lygtis; 2300–4000 diapazonui patikimos formulės nėra, ir apie tai pranešama), `darcy_weisbach`, `minor_loss`, `pipe_flow` (apvalus vamzdis, viskas iš karto) ir `rect_channel` (laminariniai stačiakampiai kanalai pagal Shah ir London aproksimaciją).

## Šilumos perdavimas

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (parenka laminarinį ar turbulentinį ir įvardija koreliaciją), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` ir `ntu_for` (efektyvumo-NTU sąryšiai priešpriešiniam, lygiagrečiam, kiauklinio-vamzdinio, kryžminiam ir vienam kintančiam srautui) ir `hx_size` (UA dydis, kurio reikia apkrovai; jis nurodo, kiek įmanoma, kai apkrovos įvykdyti negalima).

## Slėginės dalys

`allowable_stress` (takumo riba, dalinta iš saugos koeficiento), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, pagal kilpinį ar šlyties kriterijų) ir `wall_sphere`. Tai vadovėlinės maržos, **ne slėginio indo kodo skaičiavimas**: nėra korozijos atsargos, sujungimo koeficiento ar kodo koeficientų.

## Dujų dinamika

`isentropic` (santykiai esant Mach skaičiui), `mach_from_area`, `choked_flow`, `throat_area` ir `exit_mach` – idealioms dujoms be trinties, šilumos ar smūgių.

## Rezultato patikrinimas

`check_stress`, `check_thermal` ir `check_flow` paleidžia PartCraft savo įtempių, laidumo ir srauto sprendiklius sugeneruotai detalei iš scenarijaus ir nuskaito didžiausią įtempį ir poslinkį, temperatūras ir šilumos srautą bei kanalų tinklo pralaidumą. Jie nieko nekeičia sprendikliuose. Įtempių ir temperatūros patikrinimai naudoja vokselius, todėl kreivas paviršius yra laiptelis, o įtempis aštriame vidiniame kampe ar po taškine apkrova priklauso nuo vokselio dydžio.
