---
title: Ekstrudér en ophøjning og skær igennem den
summary: Lav en skitse om til et massivt legeme med Ekstruder, sæt blind-, midterplan-, op til- eller to-retnings-dybder, en udtræksvinkel eller én kontur af skitsen, og skitsér derefter på en flade og Klip en lomme eller et gennemgående spor.
keywords: ekstrudér, ophøjning, ekstruderet ophøjning, klip, ekstruderet udskæring, lomme, igennem alt, blind, midterplan, omvendt, dybde, klip-ekstrudér, ophøjning-ekstrudér, pad, op til flade, op til næste, op til hjørnepunkt, forskydning fra flade, retning 2, to retninger, udtræksvinkel under ekstrudering, udtræksvinkel, kontur, region, valgte konturer
from: 3b13ff10
---

{{ui:Ekstruder}} skubber en skitses lukkede profil lige ud af sit plan og laver materiale. {{ui:Klip}} gør det samme, men fjerner materiale. Begge er den samme feature under overfladen; du kan skifte den ene til den anden senere.

## Ekstrudér en ophøjning

1. Tegn en lukket profil og luk skitsen (se [Tegn din første skitse](topic:sketch-basics)). Den forbliver valgt.
2. Vælg {{ui:Ekstruder}}.

Et 10 mm massivt legeme vises, "Extrude1" kommer med i historikken med sin skitse indrykket under den, og statuslinjen siger »Extrude1 tilføjet. Ændr dens tal i højre panel.«

**Hvilken skitse der bruges:** den skitse du lige lukkede, eller skitsen valgt i historikken. Hvis intet er valgt, tager PartCraft den seneste skitse, som ingen feature bruger endnu. Hvis der ingen er: »Lav først en skitse: vælg et plan, {{ui:Skitse}}, tegn en lukket profil, {{ui:Afslut}}.«

### Sæt dybde og retning

I højre panel:

| Indstilling | Valg | Standard |
|---|---|---|
| **Operation** | Ophøjning (tilføj materiale), Klip (fjern materiale), Skæring (behold overlappet), Nyt legeme (endnu ikke lavet i denne version: det kræver en eksakt kerne) | Ophøjning |
| **Slut** | Blind (en dybde), Midterplan (begge veje), Igennem alt, Op til flade eller plan, Op til næste flade, Op til hjørnepunkt, Forskydning fra flade | Blind |
| **Dybde (mm)** | Ethvert mål over nul (vises for Blind og Midterplan) | 10 |
| **Omvendt retning** | Vokser til den anden side af skitsens plan (vises ikke for Midterplan) | Fra |

Skriv et tal og tryk {{key:Enter}} eller {{key:Tab}}: delen bygges straks om. **Midterplan** lægger halvdelen af dybden på hver side af skitsen.

### Op til en flade, den næste flade eller et hjørnepunkt

Endnu ikke lavet i denne version: alle "op til"-ender kræver en eksakt kerne, og featuren siger »Ekstrudering op til en flade, den næste flade eller et hjørnepunkt: endnu ikke lavet (den kræver en eksakt kerne).« Brug en blind dybde, du måler. Med en eksakt kerne virker enderne sådan her:

- **Op til flade eller plan**: **Op til** tager en plan flade (Vælg, og klik så på den) eller et referenceplan. En flade parallel med skitsen giver en eksakt dybde; en skrå flade skærer enden i skråningen. Hvis fladen ligger bag skitsen: »… Prøv Omvendt retning.«
- **Op til næste flade**: stopper ved den første plane flade på legemet, som ekstruderingen møder (buede flader understøttes ikke her, og det siger programmet).
- **Op til hjørnepunkt**: stopper i niveau med et hjørnepunkt (klik nær enden af en kant) eller et punkt-feature.
- **Forskydning fra flade**: som Op til flade, men stopper **Forskydning (mm)** før den (målt vinkelret på fladen).

### To retninger, udtræksvinkel, én kontur

- **Anden retning** (Blind): ekstruderer også **Anden dybde (mm)** til den anden side af skitsen.
- **Udtræksvinkel (°)**: sidefladerne hælder, efterhånden som de går (negativ: udad), ligesom en udtræksvinkel; kun én retning. Endnu ikke lavet i denne version (den kræver en eksakt kerne): lad den stå på 0.
- **Regioner**: {{ui:Vælg regioner}}, og klik derefter inde i sløjferne for at ekstrudere; kun disse regioner bruges (en cirkel inde i et kvadrat: klik inde i cirklen for en cylinder, mellem dem for en plade med hul). **Alle** går tilbage til alle sløjfer.

Under disse vises **Skitsemål**, som lister skitsens styrende mål, så du kan ændre profilens størrelser uden at åbne skitsen.

:::note
**Igennem alt er kun til udskæringer.** En ophøjning sat til Igennem alt fejler med »Igennem alt er til udskæringer. Brug en dybde til en ophøjning.« Hvis du skifter en feature fra Klip tilbage til Ophøjning, ændres Igennem alt til Blind for dig.
:::

## Skær en lomme

1. Klik på den plane flade, du vil skære ind i. Den fremhæves, og højre panel siger **Flade**.
2. Vælg {{ui:Skitsér på denne flade}} (eller {{ui:Skitse}} i værktøjslinjen).
3. Tegn lommens kontur, for eksempel et rektangel, og sæt mål på det.
4. Vælg {{ui:Afslut}}.
5. Vælg {{ui:Klip}}. Den starter som **Igennem alt**: den fjerner materiale helt igennem delen.
6. For en lomme sæt **Slut** til **Blind (en dybde)** og skriv **Dybde (mm)**.

En udskæring går ind i materialet, væk fra fladen du skitserede på. Hvis statuslinjen siger »Der er intet at skære på den side af skitsen. Prøv den anden retning.«, sæt flueben i **Omvendt retning**.

En skitse på lommens bund følger bunden: ændrer du lommens dybde, flytter skitsen sig med.

## Træk eller skub en hel flade

For at få en flade til at stå længere ud eller synke ind, behøver du ikke tegne dens kontur. Klik på den plane flade, og brug derefter i højre panel:

- {{ui:Ekstruder fra den}} trækker fladen ud: PartCraft tilføjer en skitse på fladen med dens kontur (huller i fladen forbliver huller) og en Ekstrudering på 10 mm.
- {{ui:Skær ind i den}} skubber fladen ind: samme skitse og en Udskæring halvvejs ind i delen.

Begge er ét trin: {{key:Mod+Z}} fjerner skitsen og featuren sammen. Den nye feature er valgt, så skriv et tal med det samme og tryk {{key:Enter}} for dens dybde. Konturen kopieres som faste linjer og buer: den følger ikke senere ændringer af fladen. Hvis en del af konturen ikke kan kopieres (en fri kurve), åbnes skitsen i stedet med det, der kunne kopieres; afslut den, og vælg derefter {{ui:Afslut}} og {{ui:Ekstruder}} eller {{ui:Klip}}.

## Profiler med øer

En skitse kan indeholde flere lukkede sløjfer. Sløjfer side om side bliver adskilte ophøjninger (eller udskæringer); en sløjfe inde i en anden bliver et hul igennem ophøjningen. For eksempel ekstruderes et rektangel med to cirkler inde i som en plade med to huller.

For kun at bruge nogle sløjfer, vælg dem med **Regioner** (ovenfor); en anden feature kan bruge de andre sløjfer i samme skitse.

## Redigér senere

- Klik på "Extrude1" i historikken for at få dens indstillinger frem igen.
- Dobbeltklik på dens skitse (indrykket under den) for at åbne skitsen; luk den for at genopbygge.
- Se [Ændr en del via dens historik](topic:edit-history) for undertrykning, rul tilbage, omrokering og sletning.

## Almindelige meddelelser

| Meddelelse | Hvad du gør |
|---|---|
| »Skitsen har ingen lukket profil at ekstrudere.« | Skitsen har ingen lukket sløjfe af fuldt optrukne linjer. Luk hullerne, eller skift konstruktionslinjer tilbage med {{key:Q}} |
| »Profilen er åben: en ende ved (x, y) er ikke forbundet til noget.« | Åbn skitsen, og forbind den ende til den næste linje |
| »Der er intet at skære i endnu.« | En udskæring kræver et massivt legeme at skære i. Lav først en ophøjning |
| »Der er intet tilbage af delen efter dette.« | Udskæringen fjernede alt. Kontrollér dens størrelse og retning |

Mere i [Fejlfinding](topic:troubleshooting).
