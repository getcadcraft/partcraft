---
title: Toleranseopphopninger
summary: Velg en kjede av flater gjennom delene i en sammenstilling og se hvor mye gapet på enden kan variere, med verste tilfelle og RSS, med dimensjonene som betyr mest rangert først.
keywords: toleranseopphopning, opphopning, toleranseanalyse, toleransekjede, dimensjonskjede, sløyfe, gap, klaring, verste tilfelle, rss, kvadratrot av summen, statistisk toleranse, bidragsytere, følsomhet, gd&t, generell toleranse, iso 2768
from: cbdb3159
---

En **opphopning** legger sammen dimensjonene langs en kjede gjennom flere deler for å se hvor mye et resultat — vanligvis et gap — kan variere når hver del lages et sted innenfor sine toleranser.

## Velg kjeden

1. Åpne en sammenstilling og velg {{ui:Opphopning}} i Sammenstilling-gruppen. Et kort åpnes over visningen.
2. Velg hva kjeden måles **langs**: X, Y eller Z for sammenstillingen, eller {{ui:Normalen til den første flaten}}.
3. Trykk {{ui:Velg kjeden}} og klikk på flatene kjeden går gjennom, **i rekkefølge**: start på den ene siden av gapet, gå gjennom delene, og avslutt på den andre siden av gapet.
4. Trykk {{ui:Ferdig}} eller Enter. Backspace tar det siste klikket tilbake; Esc avbryter.

To klikk på samme del gir den delens dimensjon (avstanden langs kjeden). Et klikk på en annen del lager et **grensesnitt** mellom dem, der delene møtes; det har ingen toleranse før du skriver inn en. Leddene legger til eller trekker fra etter hvordan kjeden går, og de lukker sløyfen: det nominelle gapet er det modellen viser.

Du kan også {{ui:Legg til et ledd}} for hånd og skrive inn dets nominelle verdi, toleranse, og om det legger til (+) eller trekker fra (−).

## Gi hvert ledd sin toleranse

Hvert ledd har en **øvre** og en **nedre** avvik (for eksempel +0.1 og −0.05). **Toleranse fra** fyller dem inn fra delen:

- **Generell toleranse**: feltet for Toleranse i tegningshodet til delen (se [Tegning til PDF](topic:drawing-pdf)), når det leser ±0.1, +0.2/-0.1 eller ISO 2768-f, -m, -c eller -v (ISO 2768-1 lineære toleranser, etter leddets størrelse). En del sin generelle toleranse brukes med en gang kjeden velges.
- **GD&T**: enhver rammekontroll for form og posisjon på delens tegning. Posisjons-, profil- og rundløpssoner gir ± halvparten av toleransen. En retnings- eller formtoleranse ligger vanligvis allerede innenfor størrelsestoleransen: legg den bare til der kjeden møter den kontrollerte flaten. Med Ⓜ eller Ⓛ tas sonen med sin angitte størrelse; bonustoleransen telles ikke.
- **Skrevet inn**: alle tall du skriver inn.

## Les resultatene

- **Gap, nominelt** og, når toleransene er ulike, **Gap, middelverdi** — +0.2/−0 og +0/−0.1 flytter midten av området.
- **Verste tilfelle**: hver toleranse på sin grense samtidig. Gapet kan aldri være utenfor dette.
- **RSS** (kvadratroten av summen av kvadrater): hver toleranse tas som tre standardavvik i en normalfordeling, og legges sammen som kvadratroten av summen av kvadratene. De fleste sammenstillinger ligger godt innenfor verste tilfelle; dette er det vanlige estimatet for deler som lages i serie.
- Angi **Gap minst** og **Gap høyst** for å se om verste tilfelle alltid holder seg innenfor, og hvor mange sammenstillinger per million RSS forventer utenfor.
- **#**-kolonnen rangerer leddene etter deres **andel** av RSS: stram de første for å få størst effekt.

{{ui:Lagre CSV}} skriver leddene, deres andeler og resultatene. Opphopningene lagres i sammenstillingsfilen, og hver endring er ett steg for {{key:Mod+Z}}.

:::note
En opphopning går i én retning. Den følger ikke vinkler eller svinger langs kjeden, og den leser ikke størrelsestoleranser fra skissene: oppgi dem som skrevne toleranser, eller via tegningshodet.
:::
