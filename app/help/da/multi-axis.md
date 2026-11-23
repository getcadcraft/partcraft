---
title: 4- og 5-akset bearbejdning
summary: Fortæl PartCraft, hvilke roterende akser maskinen har, hæld værktøjet for enhver almindelig operation, efterbearbejd en flade med en kugleformet endefræser, der hælder under skæringen, eller drej emnet under værktøjet på en 4. akse. Hvad der skrives til G-koden, og hvad der ikke er afprøvet.
keywords: 5-akset, 5 akser, 4-akset, fjerde akse, flerakset, multiakse, 3+2, indekseret, positionel, hældning, hældende værktøj, roterende, trunnion, bord, hoved, a-akse, b-akse, c-akse, tcp, rtcp, værktøjscentrumpunkt, g43.4, invers tid, g93, kinematik, pivot, swarf, føringsvinkel
from: c4f1c491
---

Fremstilling kan holde værktøjet i en vinkel, og den kan flytte de roterende akser under skæringen. Tre ting gør det, fra den enkleste og op.

**Intet her er kørt på en maskine.** Banerne er kontrolleret mod geometrien af testene, og G-koden læses tilbage, men de indbyggede poster følger styringernes dokumenterede koder, ikke en maskine foran os. Afprøv et program i din styrings egen simulator og i luften, før det møder metal.

## Maskinens roterende akser

På fanen **Opsætning** siger {{ui:Roterende akser}}, hvad maskinen har:

| Valg | Maskinen |
|---|---|
| Ingen (3 akser) | En almindelig fræser. Enhver operation, der kræver et hældet værktøj, advarer, og posten nægter at skrive den. |
| A (drejer om X) | Én roterende akse langs X: et 4.-akse-bord eller en indekser. Værktøjet kan kun hælde i Y–Z-planet. |
| B (drejer om Y) | Én roterende akse langs Y. Værktøjet kan kun hælde i X–Z-planet. |
| A og C | En hældningsakse om X, båret af eller bærende en drejning om Z: et trunnion-bord eller et hoved. |
| B og C | Det samme med hældningen om Y. |

Derefter:

- **Båret af**: {{ui:Bordet (emnet drejer)}} eller {{ui:Hovedet (værktøjet drejer)}}. Et bord drejer den modsatte vej for at bringe den samme flade under værktøjet, så fortegnet på hver vinkel følger af dette.
- **Styringen holder værktøjsspidsen på banen (TCP)**: når den er til, er X Y Z i programmet værktøjsspidsen i delens egne koordinater, og styringen klarer resten (de indbyggede Fanuc-lignende og LinuxCNC-poster skriver `G43.4` for værktøjslængden). Når den er fra, skriver PartCraft på et bordmaskine X Y Z, som det drejede bord bærer delen, om det **roterende centrum**, du angiver (i arbejdskoordinater; 0, 0, 0 når arbejdsoprindelsen er på centrum). En hovedmaskine kræver TCP til: uden den skulle programmet bruge maskinens pivotlængde, som PartCraft ikke kender.
- **Hældningsgrænse**: hvor langt hældningsaksen går.

Maskiner er forskellige i, hvilken vej de regner som positiv. Hvis en akse drejer den forkerte vej på din, så ændr fortegnet i en kopi af posten ([Postprocessorer du kan redigere](topic:post-processors)).

## Et hældet værktøj til en almindelig operation

Hver fræseoperation (plan, lomme, adaptiv, kontur, bor, affasning, parallel, kamme, 3D-grov, rest) har et **Værktøjshældning** og **Hæld mod**: værktøjets retning for den operation alene, målt fra opsætningens værktøjsakse. Dette er 3+2-bearbejdning: de roterende akser går til en position og bliver der, mens tre akser skærer.

- Skriv de to vinkler, eller tryk på {{ui:Værktøj vinkelret på en flade}} og klik på en plan flade: værktøjet peger lige på den.
- Vælg operationens flader og kanter som sædvanligt. Hvad der tæller som en bund eller et hul, bedømmes langs det hældede værktøj.
- Råemnet for den retning er boksen, der rummer det drejede råemne, så højder og frigang er sikre fra den side.

I G-koden går værktøjet op før operationen, de roterende akser drejer, og værktøjet sænkes ned over sit første punkt. På en bordmaskine uden TCP forbliver buer buer, og faste borecyklusser forbliver cyklusser (den skrevne ramme drejes kun om Z). Med TCP i et hældet plan bliver buer til korte linjer og cyklusser til de bevægelser, de står for.

Råemne-simuleringen kører en hældet retning **alene**: den viser, hvad den operation skærer fra hele råemnet set fra sin side, og finder gennemskæringer der, men snit lavet fra andre retninger føres ikke med.

## 5-akset efterbearbejdning

{{ui:Mere}} i Fremstillings-værktøjslinjen lister denne operation og den næste øverst på fanen **Operationer**.

{{ui:5-akset}} er den [parallelle efterbearbejdningsgang](topic:finish-3d) med en **kugleformet endefræser, der hælder, mens den går**. En kugle skærer med en kugle, og kuglen er den samme, uanset hvilken vej værktøjet hælder om sit centrum, så kuglen følger præcis den bane, den 3-akse gang ville give, og kun værktøjets retning ændres:

- **Mod overfladen**: 1 = vinkelret på overfladen, 0 = lodret, alt derimellem.
- **Hæld fremad**: grader langs skærets retning, så det stille centrum af kuglen ikke er det, der skærer.
- **Mest hældning**: værktøjet hælder aldrig længere væk fra opsætningens akse end dette.

Hvor skaftet ville røre modellen, skæres hældningen tilbage, indtil det er fri, og operationen siger, på hvor mange punkter. Hver gang indgås og forlades med et lige løft.

## Roterende efterbearbejdning (4. akse)

{{ui:Roterende}} er til en del, der holdes langs **arbejds-X** på en roterende akse. Delen drejer, og en kugleformet endefræser, der altid peger mod aksen, følger dens overflade:

- **Gange**: {{ui:Langs aksen}} (linjer langs X, én skridafstand af drejning fra hinanden) eller {{ui:Rundt om emnet}} (ringe, én skridafstand af X fra hinanden).
- **Akse ved Y / Z**: hvor aksen er. Tomt betyder midten af råemnet. På en bordmaskine uden TCP skal dette være det roterende centrum i Opsætning; operationen advarer, når det ikke er.
- **Fra / Til X** og **Fra / Til vinkel**: den del af længden og af drejningen, der skal skæres.

Højden af kuglen over aksen i hvert punkt er det nøjagtige fald af en kugle på delens net, set fra den side.

## Begrænsninger

- 5-akset og roterende efterbearbejdning tager kun en **kugleformet endefræser**. Der er ingen sidefræsning (siden af værktøjet på en retlinet væg), ingen flowlinjer langs en flades egne retninger, ingen flerakset grovbearbejdning og intet automatisk valg af hældning for at undgå kollision.
- 5-akset og roterende baner føres **ikke gennem råemne-simuleringen**, som er et højdekort og ikke kan rumme et hældende snit.
- Skaftet kontrolleres i 5-akset efterbearbejdning mod modellen set oppefra; holderen, spindlen og selve maskinen kontrolleres ikke nogen steder.
- Roterende efterbearbejdning skærer kun det, værktøjet kan se, når det kigger på aksen.
- 5-akset efterbearbejdning tager et minut eller mere at beregne på en stor del: skaftet kontrolleres i hvert punkt af hver gang.
- Når de roterende akser bevæger sig sammen med de lineære, og TCP er fra, skriver de indbyggede poster fremføringen som invers tid (`G93`) og går derefter tilbage til `G94`.
- Ingen kode for et hældet arbejdsplan (`G68.2` og lignende) skrives, og ingen maskinspecifikke grænser, afvikling eller kollisionszoner kendes.
