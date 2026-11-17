---
title: Simuler væskestrøm (Strømningsstudie)
summary: Strømning gjennom kanalene inne i en del eller rundt den i en boks: innløp, utløp, luft, vann eller egen væske, deretter hastighet og trykk på et flyttbart snittplan, strømlinjer, overflatetrykk, trykkfall, massebalanse, luftmotstand og løft, med hva den laminære metoden kan og ikke kan si.
keywords: strømning, CFD, væske, fluid, beregningsmessig strømningsdynamikk, strømningssimulering, luft, vann, viskositet, tetthet, Reynolds-tall, laminær, turbulent, trykkfall, trykktap, innløp, utløp, lokk, hette, hastighet, volumstrøm, liter per minutt, statisk trykk, strømlinjer, snittplan, seksjonsplan, luftmotstand, løft, luftmotstandskoeffisient, løftekoeffisient, frontareal, ytre strømning, indre strømning, rør, kanal, samlerør, dyse, lattice Boltzmann, residual, konvergens
from: 7dc75f29
---

En **Strømning**-studie beregner hvordan en væske beveger seg gjennom kanalene inne i delen (**intern**) eller rundt den (**ekstern**). Som standard er den **laminær, inkompressibel, isoterm og Newtonsk**: jevn strømning av en væske der tetthet og viskositet er faste, uten varme, turbulens og tyngdekraft. En **eksperimentell** turbulent modell finnes også, kun for kvalitative mønstre (se under). Den arbeider på de navngitte flatene som nettkjernen gir delen (se [Nettkjernen](topic:solid-kernels)).

Velg **Simulering** i **Arbeidsområde**-boksen, trykk **Ny studie** hvis det ikke finnes noen, og sett **Type** til **Strømning (CFD)**. **Strømningsmodell** er **Laminær** (standard) eller **Turbulent (Spalart–Allmaras, eksperimentell)**: se **Turbulent strømning (eksperimentell)** under. Studiets strukturelle innstillinger beholdes, så du kan bytte tilbake. Strømningsinnstillingene lagres i delfilen, og hver endring kan angres.

## Velg væsken og cellene

- **Fluid**: luft eller vann ved 20 °C, eller **Egendefinert** med egen tetthet (kg/m³) og dynamisk viskositet (Pa·s). Luft bruker den ideelle gassloven og Sutherlands lov (1,204 kg/m³, 1,813 × 10⁻⁵ Pa·s); vann bruker IAPWS-verdiene (998,21 kg/m³, 1,0016 mPa·s).
- **Cellestørrelse**: væskerommet fylles med like kuber. La feltet stå tomt for automatisk størrelse; panelet viser rutenettet. Hver åpning og kanal bør være **minst 8 til 10 celler på tvers** for brukbare tall; mindre celler gir mer nøyaktige, men tregere beregninger (dobbelt så fin er omtrent 16 ganger så mye arbeid).
- **Vegger**: **Interpolert** følger buede vegger mellom cellene (standard); **Tilbakesprett** behandler veggene som kubenes trappetrinn.

## Strømning inne i delen

Væskerommet må være lukket. Legg til et **Innløp** og et **Utløp** i panelet, og klikk deretter på flatene deres i visningen:

1. **Den flate flaten rundt en åpning** — kanten ved en rørende, en tilkoblingsflate. PartCraft lukker åpningens hull der med et lokk. Alle hull i flaten tilhører den åpningen, så når et innløp og et utløp åpner seg på samme flate, modeller heller en tynn hette over den ene.
2. **Den indre flaten på en hette** — som i andre CAD-verktøy: modeller en tynn plate (en ekstrudering) over åpningen og velg flaten som berører væsken.

For et innløp settes en **hastighet** (m/s, jevn over åpningen, inn i delen) eller en **volumstrøm** (L/min). For et utløp settes det **statiske trykket** (Pa, relativt). Hvis en åpning står åpen, eller en vegg er tynnere enn en celle, går innsiden sammen med utsiden, og løsningen stopper med «Ingen lukket væskerom».

## Strømning rundt delen

Sett **Strømning** til **Ekstern**, **Hastighet**, retningen den strømmer mot, og hvor langt boksen strekker seg oppstrøms, nedstrøms og til sidene (tomt: 1, 3 og 1 ganger delens største størrelse). Boksflaten strømmen kommer inn gjennom er en innstrømning, flaten den forlater gjennom er en utstrømning ved 0 Pa, og flatene langs strømmen er glatte. En boks som er for liten presser strømmen forbi delen og øker luftmotstanden. **Referanseareal** er arealet luftmotstands- og løftkoeffisientene bruker (tomt: delens frontareal sett langs strømmen); løft måles langs +Y med mindre du velger en annen retning.

## Løs og les resultatene

Trykk **Løs**. Løsningen går i bakgrunnen med antall steg, residualet og en residualgraf; **Stopp** avslutter den. Den stopper når residualet (hvor mye hastighetsfeltet fortsatt endrer seg per steg) er under målet, og trykkfallet eller luftmotstanden har stabilisert seg. Hvis den når grensen for antall steg først, skriver panelet **Ikke konvergert** i rødt: tallene er siste tilstand, ikke et stabilt svar.

- **Snittplan**: hastighet eller statisk trykk på et plan gjennom modellen; velg normalen (X, Y eller Z) og dra glideren for å flytte planet. Hold musen over det for å lese verdiene.
- **Strømlinjer**: fra innløpene (intern) eller fra en rake over innstrømningsenden av boksen i snittplanet (ekstern).
- **Del**: massiv, gjennomsiktig (for å se planet inni), overflatetrykk, eller skjult.
- **Tabell**: Reynolds-tall, trykkfall (gjennomsnittlig statisk trykk ved innløpene minus ved utløpene), strømmen og gjennomsnittstrykket for hver åpning, kraften på delen, luftmotstand og løft med koeffisientene og referanseareal (ekstern), massebalansen (innstrømning mot utstrømning), nettet og løseren.

## Turbulent strømning (eksperimentell)

**Strømningsmodell › Turbulent (Spalart–Allmaras, eksperimentell)** løser den tidsmidlede turbulente strømningen (stasjonær RANS): Spalart–Allmaras-modellen gir en virvelviskositet i hver celle, og cellene nær veggene bruker Spaldings veglov i stedet for å løse det tynne laget der. Den er fullt turbulent overalt (ingen laminære områder, ingen overgang).

**Den har ikke bestått sine nøyaktighetskontroller.** Panelet, resultatene og tabellen sier det på hver turbulente studie, og advarselen kan ikke lukkes. Bruk den til **kvalitative strømningsmønstre** — hvor strømmen løsner, sirkulerer eller akselererer — **ikke til konstruksjonstall**.

| Kontroll | Referanse | Resultat |
|---|---|---|
| Flat kanals friksjon, første celle ved y⁺ 49 / 98 | Deans korrelasjon | +3,3 % / +4,7 % |
| Kanal med oppløst vegg (y⁺ ≈ 3), Re_τ 180: bulkhastighet | Moser, Kim & Mansour DNS | −1 % |
| Flat kanal, y⁺ 7–15 eller 190–380 | Deans korrelasjon | +9 til +22 % |
| Rørfriksjon gjennom kubecellene, fullt utviklet, 10–30 celler på tvers | Colebrook | 30 til 34 % for høy |
| Gjenfeste bak et bakovervendt trinn, 6–14 celler per trinnhøyde | Driver & Seegmiller, 6,26 trinnhøyder | 21 til 39 % for kort |

Resultatene blir bare litt bedre med finere celler. Etter løsningen viser tabellen **y⁺ for første celle** (min, gjennomsnitt og maks over veggcellene) og advarer utenfor det kontrollerte området 1 til 400; sikt mot omtrent 30 til 300. **Kjøretid:** de automatiske cellene er dimensjonert for få minutter på én kjerne i en bærbar maskin på det meste (panelet viser verste tilfelle for rutenett og grense for antall steg; et lite rør stabiliserer seg på under 20 sekunder). Å halvere cellestørrelsen koster omtrent 16 ganger så lang tid. Krefter på delen kommer fra en impulsbalanse over åpningene eller boksen.

**Arbeidet så langt:** veggcellene samsvarer nå med sin egen skjærspenning i henhold til veglovet, noe som reduserte feilene for rør og trinn til tallene over uten å endre resultatene for den flate kanalen. Det var ikke nok for konstruksjonstall. Neste steg er finere celler nær veggene.

## Hva den kan og ikke kan si

- **Den laminære modellen** er bare laminær. I rør blir strømmen turbulent over et Reynolds-tall på omtrent 2 000 til 4 000; bak stumpe legemer begynner virvlene å løsne over omtrent 50. Panelet advarer på disse punktene. Et laminært resultat for turbulent strømning undervurderer trykkfallet og gir feil luftmotstand. Den eksperimentelle turbulente modellen (over) dekker turbulent strømning kvalitativt; tallene er ennå ikke pålitelige.
- **Metode:** lattice Boltzmann-metoden (D3Q19, kollisjon med to relakseringstider) kjørt til en stasjonær tilstand. Den er svakt kompressibel inne; PartCraft holder tetthetsendringene på noen få prosent. Hvis strømmen er for rask for cellene, nekter den å starte og sier hvor mye mindre cellene må være.
- **Kontrollert mot:** Hagen–Poiseuille-strømning i et rør gjennom en del (trykkgradient innen 1 % ved 20 celler på tvers), Ghia et al.s lokk-drevne hulrom (innen 0,75 % av lokkets hastighet), og Schäfer–Turek-sylinderreferansen (luftmotstand innen 1 % ved 10 celler per diameter).
- Ikke modellert: varmeoverføring, turbulens med konstruksjonsnøyaktighet (den turbulente modellen er eksperimentell), frie overflater, kavitasjon, tyngdekraft, bevegelige deler, ikke-Newtonske væsker, ru vegger. Lab-bygg: kontroller viktige resultater på en annen måte.
