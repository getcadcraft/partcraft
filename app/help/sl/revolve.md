---
title: Zavrtenje obrnjenega dela
summary: Skicirajte polovico profila ob osni črti, ga zavrtite v okrogel del, izberite os in kot ter za utore uporabite zavrteni izrez.
keywords: zavrtitev, zavrteni nadstavek, zavrteni izrez, obrnjen del, struganje, gred, os, osna črta, utor, kot, izrez z zavrtitvijo
from: 593b6929
---

{{ui:Zavrti}} zavrti profil okoli osi, kot del, izdelan na stroju za struženje: gredi, jermenice, prirobnice, gumbi. {{ui:Zavrteni izrez}} (v meniju {{ui:Več}} skupine Značilke) zavrti profil, da odstrani material, za utore in vdolbine.

## Zavrtite stopničasto gred

1. Skicirajte na **sprednji ravnini**.
2. Pritisnite {{key:N}} za {{ui:Osna črta}}. Začnite v izhodišču in kliknite točko naravnost desno, na primer 100 mm stran. To je os. Je črtkana: konstrukcijska geometrija ni del profila.
3. Pritisnite {{key:L}} za Črto. Narišite **polovični** profil nad osno črto kot en zaprt krog: začnite na osni črti, pojdite gor, naredite stopnico in se vrnite dol na osno črto, nato po njej nazaj na začetek. Krajišči se morata stakniti: zanka mora biti zaprta.
4. Določite polmere (višine nad osno črto) in dolžine. Višina 10 nad osno črto da premer 20.
5. Izberite {{ui:Izhod}}.
6. Izberite {{ui:Zavrti}}. Gred se pojavi, en poln obrat.

Profil mora ostati na eni strani osi. Če seka os: „Profil seka os. Ohranite ga na eni strani osne črte.“ Rob profila sme ležati na osi.

## Nastavitve

| Nastavitev | Kaj naredi | Privzeto |
|---|---|---|
| **Operacija** | Nadstavek (doda material), Izrez (odstrani material), Presek (ohrani prekrivanje) ali Novo telo | Nadstavek za {{ui:Zavrti}}, Izrez za {{ui:Več}} › {{ui:Zavrteni izrez}} |
| **Kot (°)** | Kako daleč zavrti, od tik nad 0 do 360 | 360 |
| **Os** | Prva osna črta ali katera koli črta ali osna črta v skici, navedena kot „Osna črta 1 (l1)“ ali „Črta 3 (l3)“ | Prva osna črta |

Delni kot naredi klin, zavrten iz ravnine skice v eno smer.

Če skica nima osne črte in pustite **Os** na Prvi osni črti: „Za zavrtitev narišite osno črto (konstrukcijsko črto) v skici.“ Lahko pa za os izberete polno črto profila.

## Izrežite utor

1. Ko je gred zgrajena, odprite novo skico na **sprednji ravnini** (ista ravnina kot skica gredi).
2. Narišite osno črto vzdolž iste osi: začnite jo v izhodišču in jo držite vodoravno, da dobi H, ali jo vnesite z **Dodaj s koordinatami** (na primer od `0, 0` do `100, 0`). Nova skica se ne more prilepiti na črte druge skice.
3. Narišite majhen zaprt pravokotnik, ki prekriva rob gredi, kjer gre utor.
4. Izberite {{ui:Izhod}}, nato {{ui:Več}} › {{ui:Zavrteni izrez}}.

## Zavrteni ploskve v sestavih

Zavrtitev ima os, ki jo lahko uporabijo druge značilke in sestavi:

- **krožni** vzorec privzeto uporabi os zadnje zavrtitve (glejte [Vzorci in zrcaljenje značilk](topic:patterns-mirror));
- v sestavu se zglob med ploskvami, narejenimi z zavrtitvami, privzeto začne kot **vrteči** zglob, **Središče na** pa ponudi „Os zavrtitve 1“ (glejte [Sestavljanje sestava](topic:build-assembly)).

## Resnične krivulje in fasete

PartCraft zavrtitev gradi z mrežnim jedrom (vrstica stanja prikazuje „Mrežno jedro“): okrogle oblike so ravne fasete, privzeto 64 na obrat, prostornine pa so nekoliko manjše od prave vrednosti (približno 0,16 % pri 64). Pogled ter izvoza STL, 3MF in STEP so sestavljeni iz teh faset: nastavite **Krivulje** (kliknite prazen prostor, nato desno podokno) na Fino (128) ali Zelo fino (256), da bodo gladkejše. Prave valje, stožce in tore potrebujejo natančno jedro: v tej različici še niso izdelani. Glejte [Mrežno jedro](topic:solid-kernels).
