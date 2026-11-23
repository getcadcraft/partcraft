---
title: Drejning på en drejebænk
summary: Planfræs, grovdrej, efterdrej, lav spor, afskær, skær gevind og bor et drejet emne ud fra den kontur, emnet danner, når det roterer. Drejeværktøjer, fremføring pr. omdrejning, drejeposter og hvad der ikke er afprøvet.
keywords: drejning, drejebænk, dreje, planfræsning, grovdrejning, efterdrejning, spor, sporing, afskæring, gevind, gevindskæring, g32, g33, g96, konstant overfladehastighed, css, næseradius, skær, stang, patron, diameter, fremføring pr. omdrejning, g71, g76
from: d8cc53b0
---

Fremstilling har syv operationer til en drejebænk. De virker på enhver del: det, der skæres, er **konturen, delen danner, når den roterer** om midten af råemnet, så en del, der ikke er rund, drejes ned til den runde form, der holder den.

**Intet her er kørt på en drejebænk.** Banerne er kontrolleret mod geometrien af testene; de to drejeposter følger styringernes dokumenterede koder. Afprøv et program i din styrings egen simulator og i luften først.

## Opsætning

På fanen **Opsætning**:

- **Værktøjsakse** er spindelens akse, drejebænkens Z. Delens forside er ved +Z; patronen holder den anden ende.
- **Råemne**: vælg {{ui:Cylinder}}, stangen. Dens top-forskydning er det, planfræsningen fjerner.
- **Arbejdsoprindelse**: et centrum på råemnets top eller modellens top sætter Z0 på forsiden, det sædvanlige sted.
- **Styring**: {{ui:Fanuc-lignende drejebænk (.nc)}} eller {{ui:LinuxCNC-drejebænk (.ngc)}}. En fræsepost afviser et drejeprogram og siger det.
- **Maks. spindelhastighed**: den grænse, overfladehastigheden holdes under.

{{ui:Mere}} i Fremstillings-værktøjslinjen lister de syv drejeoperationer øverst på fanen **Operationer**. Den første, du tilføjer, medbringer sit eget værktøj: et **drejeskær** (næseradius, skærvinkel, skæreggens vinkel) eller et **stikstål** (bredde, hjørneradius, hvor dybt det når). Ændr dem på fanen **Værktøjer**. Fremføringer er pr. omdrejning, og hastigheden er en overfladehastighed i m/min, som styringen holder, mens diameteren ændrer sig; giv et værktøj en egen omdr./min. for i stedet at fastlægge hastigheden.

## Operationerne

| Operation | Hvad den gør |
|---|---|
| {{ui:Flade}} | Planfræser stangens forside ned til emnet, ét dybdeskridt ad gangen, fra ydersiden til lige forbi centrum. |
| {{ui:Grov}} | Gange langs Z med en **skæredybde** imellem, ned til konturen plus det **efterladte materiale**; derefter én gang langs konturen for at fjerne trinene. En dal mellem to skuldre går ind med en stødboring på én skæredybde. |
| {{ui:Overfladebehandling}} | Én gang langs konturen med en brøkdel af værktøjets fremføring. |
| {{ui:Spor}} | Stikker stålet side om side, hvor det kan tage mere end grænsen for materiale, der stadig er der: de spor drejeskæret ikke kunne nå. **Fra / Til Z** indsnævrer det. |
| {{ui:Afskær}} | Afskærer delen lige bag dens bagside, til lidt forbi centrum, med pekboring, hvis du angiver den. |
| {{ui:Gevind}} | Et udvendigt gevind: storediameter, stigning, længde, antal gange. Dybde 0 betyder 0.6134 × stigning (et 60°-gevind). Hver gang tager det samme areal af spåner; fjedergange gentager den sidste. |
| {{ui:Bor}} | Et bor på centerlinjen til en dybde, med pekboring. |

## Hvordan værktøjet holdes fri af delen

Skæret behandles som det, det er: dets næsecirkel, og bag den den bagudrettede kant, en lige linje, hvis vinkel er 180° minus skæreggens vinkel og skærvinklen. Den form sænkes ned på konturen i hvert punkt langs Z, og banen er det sted, hvor den kommer til hvile. Så:

- **Næseradius er allerede i banen.** Posterne skriver ingen `G41` eller `G42`; koordinaterne er værktøjets programmerede punkt (hjørnet af kvadratet rundt om næsen).
- Skæret **kan ikke følge en væg, der er stejlere end dens bagudrettede kant**. Et spor bag en skulder lades være, og efterdrejningsoperationen siger, hvor meget af konturen den ikke kunne nå. En {{ui:Spor}}-operation tager det.
- Råemnet følges langs Z efter hvert snit, så grovdrejning ikke skærer i luften, spor-operationen finder, hvad der er tilbage, og hver operation viser det rumfang, den fjernede, og om den skar ind i delen.

## Begrænsninger

- **Kun udvendig drejning**: ingen udboringsstang, ingen indvendige spor eller gevind, ingen spor på planen.
- Én spindel, delen holdt ved −Z. Ingen underspindel, ingen drevne værktøjer, ingen C- eller Y-akse, ingen støtteleje eller baglædebevægelser.
- Baner er lige bevægelser: kurver er korte linjer inden for tolerancen (ingen `G2`/`G3`), og grovdrejning og gevindskæring skrives gang for gang (ingen `G71`- eller `G76`-cyklusser).
- Gevindskæring er lige gange med et lige udtræk til enden; giv gevindet et aflastningsspor. Gevindet vises ikke i råemnet.
- Boring på centrum ændrer ikke råemne-modellen.
- Holderen, revolverhovedet og patronen kontrolleres ikke. Sæt **Stop ved Z** for at holde værktøjet væk fra kæberne.
- Fremføringer og hastigheder er udgangsværdier, som for fræsning.
