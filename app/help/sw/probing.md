---
title: Kuchunguza: tafuta sehemu na weka kukabiliana kwa kazi
summary: Gusa uso wa juu, upande, tundu au kiinuko kwa kichunguzi na uache kidhibiti kihamishe kukabiliana kwa kazi hadi mahali sehemu ilipo kweli, au pima tu. Kila kidhibiti kinaweza nini, na kisichothibitishwa.
keywords: kichunguzi, kuchunguza, kichunguzi cha kugusa, kugusa kuweka sifuri, kukabiliana kwa kazi, g54, g31, g38.2, ruka, datum, tafuta katikati, tundu, kiinuko, ukingo, weka sifuri, pima, ukaguzi, g10
from: 1f718b82
---

{{ui:Kichunguzi}} kwenye Utengenezaji kinaandika mzunguko wa kuchunguza kwenye programu: kichunguzi kinagusa sehemu, na kidhibiti kinahamisha kukabiliana kwa kazi (G54) kwa tofauti kati ya mahali uso ulipopatikana na mahali modeli inasema ulipo. Operesheni za baadaye kisha zinakata mahali sehemu ilipo kweli.

**Hakuna kilichopo hapa kilichoendeshwa kwenye mashine.** Mienendo kabla ya mguso ni mienendo ya kawaida: kichunguzi hakiangaliwi hadi mwendo wa kuchunguza wenyewe. Iendeshe polepole, hewani kwanza, huku mkono wako uko kwenye kusimamisha malisho.

## Itumie

1. Kwenye kichupo cha **Zana**, operesheni ya kwanza ya kichunguzi inaongeza **kichunguzi cha kugusa**: kipenyo chake cha mpira, na malisho ya kuchunguza (100 mm/min isipokuwa uweke yako).
2. Bonyeza {{ui:Zaidi}} kwenye upau wa zana wa Utengenezaji, kisha {{ui:Kichunguzi}}, kisha ubofye kitu cha kugusa. Kila uchaguzi ni mzunguko mmoja, kwa mpangilio wa mibofyo yako:

| Uchaguzi | Mzunguko | Kinachowekwa |
|---|---|---|
| Uso tambarare unaoangalia juu kwenye mhimili wa zana | Mguso mmoja unaoshuka | Z |
| Uso wa upande tambarare sawa na X au Y | Mguso mmoja unaoelekea uso, kidogo chini ya juu yake | X au Y |
| Tundu au kiinuko kando ya mhimili wa zana | Miguso minne (+X, −X, +Y, −Y) | X na Y ya katikati yake |

3. **Kwa matokeo**: {{ui:Weka kukabiliana kwa kazi}} au {{ui:Pima tu}}.
4. **Anza umbali huu** na **Tafuta zaidi ya huu** ni umbali kutoka uso unaotarajiwa ambapo mwendo wa kuchunguza unaanza na jinsi kichunguzi kinavyoweza kwenda zaidi yake kabla kidhibiti hakijakata tamaa. **Kina** ni umbali ambao mpira unaenda chini ya juu ya tundu, kiinuko au uso wa upande.

Weka operesheni ya kichunguzi kwanza, kabla ya kitu chochote kukata.

## Kinachoandikwa na kila kidhibiti

| Kidhibiti | Mguso | Matokeo |
|---|---|---|
| Mtindo wa Fanuc | `G31`, nafasi inayohifadhiwa kwenye `#101` hadi `#104` | Vigezo vya kukabiliana (`#5221` hadi `#5223`) vinahamishwa kwa kilichopatikana − kilichotarajiwa. Pima tu: tofauti inabaki kwenye `#110` (na `#111`). |
| LinuxCNC | `G38.2`, nafasi inayohifadhiwa kwenye vigezo vyenye majina | `G10 L2 P1` pamoja na kukabiliana jipya. Pima tu: ujumbe wa `(DEBUG, …)`. |
| GRBL | `G38.2` | Mguso mmoja unaweka mhimili kwa `G10 L20 P1`. GRBL haina vigezo, kwa hiyo **haiwezi kuhesabu katikati**: faili inasema hivyo kwenye maoni na haiweki chochote. |

Hesabu ni ya post, kwa hiyo unaweza kuibadilisha: matukio ni `probe-move` na `probe-set` ([Vichakataji vya post unavyoweza kuhariri](topic:post-processors)).

## Mipaka

- Kukabiliana kwa kazi kimoja (G54). Nyuso sawa na mihimili pekee: hakuna pembe, hakuna mzunguko wa kona, hakuna mzunguko wa kazi.
- Hakuna kipimo cha zana, hakuna ukaguzi wa zana iliyovunjika, hakuna kupima ukubwa dhidi ya uvumilivu, hakuna ripoti.
- Spindle haianzishwi kwa kichunguzi na kipozeo kinabaki kimezimwa; hakuna kinachokagua kama zana iliyo kwenye spindle ni kichunguzi.
- Uigaji wa malighafi hauendeshi njia ya kuchunguza.
- Urekebishaji wa kichunguzi chenyewe (kukabiliana kwa mpira, mkengeuko wa kalamu, mwelekeo wa kuchochea) ni wa kidhibiti.
