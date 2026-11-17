---
title: Stykliste, sprængte visninger og flytning af dele
summary: Giv samlingsdele et nummer, en beskrivelse og et materiale, læs og download stykliste, lav sprængte visninger med trin eller automatisk, flyt dele uden led med hånden, angiv ledgrænser, og eksportér hele samlingen som STL, 3MF eller stykliste.
keywords: stykliste, delliste, varenummer, materiale, massefylde, csv, sprængt visning, sprængning, sammenfold, sporlinjer, flyt del, træk, gizmo, flyt, drej, ledgrænser, eksport af samling, samlingstrin, samlingstegning, positionsnumre
from: ebc9f6f3
---

Disse værktøjer findes i højre panel i en samling (se [Byg en samling med led](topic:build-assembly)).

## Egenskaber for del

Vælg en del i listen til venstre. Under **Egenskaber for del** angiver du:

- **Varenummer** (op til 40 tegn) og **Beskrivelse** (op til 200).
- **Materiale**: et almindeligt materiale med dets massefylde, eller **Brugerdefineret massefylde…** for at skrive en i g/cm³. Panelet viser derefter delens masse.

Egenskaberne hører til delen, så alle kopier af den deler dem. De gemmes i samlingsfilen.

## Stykliste

Når intet er valgt ({{key:Esc}}), viser panelet **Stykliste**: én række pr. del med dens positionsnummer, antal (hvor mange kopier), varenummer, navn, materiale og masse. Positionsnumrene følger den rækkefølge, delene første gang optræder i listen. Masser beregnes ud fra delens volumen (for det facetterede legeme som mesh-kernen bygger, lidt for lavt på runde dele) og dens materiale. En del uden materiale har ingen masse, og så er der ingen sum.

{{ui:Download CSV}} gemmer listen som en CSV-fil (også **Eksportér › Stykliste (CSV)**). Den kan åbnes i ethvert regneark. Tekst, der starter med = eller +, får en foranstillet apostrof, så et regneark ikke kører den som en formel.

## Sprængte visninger

En sprængt visning trækker delene fra hinanden til billeder. Den ændrer aldrig leddene eller de faktiske positioner: gemning, kollisionskontrol og eksport bruger de rigtige positioner.

1. Vælg, når intet er valgt, {{ui:Ny visning}} under **Sprængte visninger**.
2. Under **Tilføj et trin** markerer du de dele, trinnet flytter, vælger en **Retning** (+X … −Z, normalen på en flade du klikker på, eller **Træk en pil i visningen**) og en **Afstand**, og vælger derefter {{ui:Tilføj trin}}. Med **Træk** trækker du pilen og slipper: trinnet får den retning og afstand, du trak.
3. Tilføj flere trin. De afspilles efter hinanden.
4. Træk skyderen mellem **Samlet** og **Sprængt** for at animere visningen. Stiplede sporlinjer går fra hver dels hvileposition til, hvor den er nu.

{{ui:Auto (radial)}} flytter alle dele undtagen den forankrede væk fra samlingens midte. {{ui:Auto (led)}} flytter hver samlet del (med alt, der er samlet under den) ud langs ledets fladenormal. Du kan gemme flere navngivne visninger; vælg en under **Visning**, eller **Samlet** for at sætte delene tilbage. Visninger gemmes i samlingsfilen.

## Flyt en del med hånden

Kun en del uden led til den forankrede del flyttes med hånden (den forankrede del er fast; led placerer resten). Vælg den, og under **Flyt med hånden**:

- Skriv **ΔX, ΔY, ΔZ** og vælg {{ui:Flyt}}, eller vælg en akse og en **Vinkel** og {{ui:Drej}} (om delens midte).
- {{ui:Træk for at flytte}} viser pile på delen: træk en pil for at flytte langs den akse, eller en firkant for at flytte i et plan. {{ui:Træk for at dreje}} viser ringe til at dreje den. Hvert træk er ét trin i fortryd. {{key:Esc}} skjuler pilene.

## Ledgrænser

Vælg et led, der kan bevæge sig, og under **Grænser** sæt flueben i **Hold … mellem grænser** for en af dets værdier, og angiv derefter dens **Minimum** og **Maksimum**. Hver værdi holdes inden for sine egne grænser, dens skyder dækker kun det område, og {{ui:Kontrollér bevægelsen for kollisioner}} gennemløber kun mellem dem. Et cylindrisk led kan begrænse sin vinkel, sin forskydning eller begge. Hvis du ændrer ledets type, fjernes grænser for værdier, som den nye type ikke har.

## Eksportér hele samlingen

I en samling skriver menuen **Eksportér** hele samlingen med hver del, hvor den er placeret:

- **STEP AP242 / AP214** og **Tegning (PDF)** er ikke lavet endnu i denne version: de kræver en præcis kerne, så de er gråtonet. Eksportér i stedet hver dels STEP (præcist massivt legeme) fra delen.
- **STL**: ét net af alle delene. **3MF**: hver del én gang, placeret én gang pr. kopi.
- **Stykliste (CSV)**.

## Begrænsninger

- Samlingstegningen og samlings-STEP er ikke lavet endnu i denne version (de kræver en præcis kerne). Sprængte visninger er til billeder på skærmen.
