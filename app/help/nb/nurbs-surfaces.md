---
title: Frie overflater (NURBS)
summary: Glatte kurver og overflater ved siden av delen — loft, sveip, kurvenettverk, firekantede lapper, overganger, trim — med G0-, G1- og G2-kontinuitet målt på de eksakte overflatene, volumlegemer med forening, subtraksjon og snitt bakt inn i delen, sebra- og krumningsvisninger, flater tilpasset en skanning med målt feil, og STEP- eller IGES-filer. Lagret i delfilen.
keywords: nurbs, skanning, omvendt konstruksjon, tilpass, nett til overflate, punktsky, stl, trim, trimmet, hull, kutt, volumlegeme, volumlegemer, boolsk, forening, subtraher, snitt, differanse, sy sammen, lukket, bak inn, fri form, freeform, overflate, overflater, b-spline, bspline, kurve, spline, loft, sveip, skinne, nettverk, coons, lapp, overgang, kontinuitet, g0, g1, g2, tangent, krumning, sebra, kontrollpunkter, knuter, grad, step, iges, klasse A, skrog, utjevning
from: 64ed5196
---

**Overflater**-arbeidsområdet lager glatte kurver og overflater av den typen som brukes til produktskall, bilkarosserier og båtskrog: NURBS, den samme matematikken andre overflatemodellerere bruker. Alt måles på de eksakte overflatene, aldri på trekantene du ser. Størrelser er i millimeter, som i resten av PartCraft.

Velg **Overflater** i boksen **Arbeidsområde**. Verktøylinjen har {{ui:Kurve}}, {{ui:Loft}}, {{ui:Sveip}}, {{ui:Tilpass}} og {{ui:Zebra}}; hver kommando står i panelet til høyre. En kommando sier hva den fortsatt trenger: klikk kurver eller overflater i visningen (nær en kant eller en ende når den ber om det) eller velg dem i listen; skriv inn punkter, eller klikk dem på delens flater (utenfor delen havner de på bakkeplanet), og trykk Enter.

Kurvene og overflatene lagres i delfilen ved siden av volumlegemet. De endrer ikke delens funksjoner: panelet har sin egen **Angre** og **Gjør om**, ett steg per kommando.

## Kurver

- **Kurve gjennom punkter** går gjennom hvert punkt du klikker. **Kurve med kontrollpunkter** følger et bur av punkter i stedet.
- **Sett inn knute**, **Øk grad** og **Senk grad** endrer hvordan en kurve beskrives uten å flytte den (senking nekter når kurven ville flyttet seg mer enn toleransen). **Bygg kurven på nytt** gir den et nytt antall kontrollpunkter og sier hvor langt den flyttet seg.
- **Tilpass kurve** får enden av én kurve til å møte en annen med G0 (berøring), G1 (samme retning) eller G2 (samme krumning også). **Overgangskurve** legger til en ny kurve mellom to ender, G1 eller G2.

## Overflater

- **Loft** gjennom to eller flere kurver, **Rutet overflate** mellom to, **Ekstruder kurve**, **Roter kurve**.
- **Sveip langs én skinne** fører en profil langs en bane uten å vri den; **Sveip langs to skinner** holder profilens ender på begge skinnene. Sveip tilpasses: resultatet sier hvor nær den holdt seg til det sanne sveipet.
- **Overflate fra et kurvenettverk** går gjennom et rutenett av kurver (hver krysser hver av de andre én gang). **Lapp fra fire kanter** fyller fire kurver som møtes i hjørnene.
- **Tilpass overflate** får en overflatekant til å møte en nabo med G0, G1 eller G2; **Overgangsoverflate** legger til en overflate mellom to kanter.
- **Forskyv overflate**, **Forleng overflate** (overflaten fortsetter som den var på vei), **Bygg overflaten på nytt**.

## Sjekke kvaliteten

Tabellen **Delte kanter** lister hver kant to overflater deler, med gapet (mm), vinkelen mellom dem (°) og krumningshoppet (1/mm), og om det gjør den til G0, G1 eller G2. En kant som er verre enn du ba om, vises i **Problemer** med en **Tilpass**-retting. **Zebra**-striper og **krumnings**farger kommer fra den eksakte overflaten: striper som går uavbrutt over en kant betyr G1; striper som også beholder sin bredde betyr G2.

G0–G2 måles i 33 punkter per kant. **G3 og «klasse A»-kvalitet måles ikke** og påstås ikke.

## Trim en overflate

Gruppen **Trim** kutter en overflate uten å endre formen: overflaten beholder alle sine kontrollpunkter, og bare den delen som er innenfor konturen vises, telles og skrives. **Trim til et rektangel** og **Trim med en sirkel** arbeider på en andel (0 til 1) av overflaten i hver retning, så de trenger ingen valg i visningen; **Trim med en kurve** tar en lukket kurve som ligger på overflaten (den projiseres inn i overflaten, og nektes med ord når den er åpen eller mer enn toleransen unna). Kryss av for **Kutt et hull** for å fjerne innsiden av konturen; la den stå av for å beholde bare innsiden. En overflate kan ha én beholdt kontur og et vilkårlig antall hull; en kontur som krysser en annen, nektes. **Fjern trimmen** viser hele overflaten igjen. Panelets Angre tar en trim tilbake som ethvert annet steg.

STEP bærer trimmen som flatens grenser, og IGES som en trimmet overflate (entitet 144); begge leser den tilbake.

## Volumlegemer og Boolske operasjoner

Gruppen **Volumlegemer** gjør overflater om til lukkede legemer og kombinerer dem. Et volumlegeme her er et sett av panelets egne overflater som sammen lukker et volum; flatene forblir eksakte NURBS-overflater med sine trimmer.

- **Boks-volumlegeme**, **Sylinder-volumlegeme** og **Kule-volumlegeme** lager ett fra skrevne størrelser (i mm): en boks med seks flate flater, en sylinder med en rund side og to flate ender trimmet til sirkelen, en kule av én rotert overflate.
- **Volumlegeme fra overflater** grupperer overflater du har laget selv. Velg dem, eller velg ingen for å bruke alle viste overflater som ikke er i et volumlegeme ennå. De sys sammen innenfor toleransen: hvis de ikke lukker seg, endres ingenting, og panelet sier hvor mange kanter som står åpne og hvor nær de må møtes.
- **Forening**, **Subtraher** (det andre volumlegemet tas bort fra det første) og **Snitt** (bare det begge deler) tar to volumlegemer: klikk en flate på hver i visningen, eller trykk **Velg** i listen **Volumlegemer**. Kryss av for **Behold de to volumlegemene** for å la dem ligge ved siden av resultatet.

En Boolsk operasjon beholder hver flate på sin egen eksakte overflate og kutter den med nye trimkonturer langs skjæringen. Resultatlinjen gir de målte tallene: hvor langt volumlegememotorens punkter måtte flyttes for å ligge på de eksakte overflatene (aldri mer enn toleransen), hvor nær skjæringspunktene er begge overflatene (vanligvis noen milliondeler av en millimeter), volumet, og om de nye flatene lukker seg igjen når de sys sammen på nytt fra sine eksakte overflater. Volum måles på trekanter innenfor toleransen (0.05 mm hvis du ikke setter en annen), så volumet til en kule eller sylinder blir litt under det eksakte: en mindre toleranse kommer nærmere. En Boolsk operasjon som ikke kan gjøres rent (volumlegemene deler ingenting, en kontur ville krysse seg selv) nektes med ord og endrer ingenting. En Boolsk operasjon er ett steg i panelets **Angre**.

I listen **Volumlegemer** fjerner **Opphev gruppering** flatene som vanlige overflater; søppelbøtta fjerner volumlegemet og flatene.

## Avrundinger og tykkelse

**Avrunding mellom flater** runder kanten der to flater av ett volumlegeme møtes: velg de to flatene (i visningen, eller med **Velg** i listen), skriv inn **radius** og, for en radius som endrer seg langs kanten, **radius ved enden** (0 beholder én radius). En kule med denne radiusen rulles langs kanten og berører begge flatene; avrundingen er den eksakte sirkelbuen den etterlater i hvert punkt, sammenføyd til én overflate, og de to flatene trimmes der kulen berører dem. En ytre kant mister materiale, et innvendig hjørne får materiale. Resultatlinjen gir det som ble målt: hvor langt avrundingsoverflaten er fra den rullende kulen mellom punktene den ble bygget fra (punkter legges til til den er innenfor en fjerdedel av toleransen), den største vinkelen mellom avrundingen og hver flate langs berøringslinjene, og de samme tallene som for en forening. En radius som ikke passer (kulen ville forlate en flate, eller en flate krummer strammere enn radiusen) nektes med navn på flaten, og ingenting endres.

**Avrund flere kanter** runder mange kanter i ett steg: velg de to flatene til den første kanten, deretter de to flatene til den neste, og så videre (en flate kan være i flere par, for eksempel toppflaten på en boks i fire av dem); alle kanter får radiusen du skriver inn. Hver avrunding beregnes på volumlegemet slik det var, og så kuttes de etter hverandre, så rekkefølgen spiller ingen rolle. Der to avrundede kanter møtes i et hjørne der de andre kantene forblir skarpe, løper de to avrundingene inn i hverandre langs skjæringskurven (en fold). Der tre avrundede ytre kanter fra tre flate flater som står vinkelrett på hverandre møtes med én radius, blir hjørnet én **kulelapp** tangent til alle tre avrundingene (fjern merket for **Hjørner** for å få det foldede hjørnet i stedet); en kant må være minst dobbelt så lang som radiusen der begge endene er slike hjørner. Resultatlinjen sier hvor mange kanter som ble avrundet og hvordan hjørnene ble. Indre kanter kan også avrundes sammen, men et resultat som ikke lukker seg igjen, blir bare rapportert (linjen sier det), så kontroller det.

**Gi tykkelse til et volumlegeme** gir en overflate en tykkelse: velg den, skriv inn **tykkelsen**, og kryss av for **Andre side** for å vokse den den andre veien. Den forskjøvne flaten tilpasses overflaten og måles mot den (resultatlinjen gir den største avviket fra tykkelsen); vegger følger hver kant og hver trimkontur. Hvis overflaten krummer strammere enn tykkelsen på den siden, eller en annen del av den ligger nærmere enn tykkelsen, nektes det med navn på overflaten og stedet, og ingenting endres.

## Bak et volumlegeme inn i delen

**Bak inn** (i Overflater-verktøylinjen), eller **Bak inn i delen** i listen **Volumlegemer**, gjør volumlegemet til et legeme i delen, slik en åpnet STL blir ett: velg volumlegemet, om det skal **legges til** delen, **kuttes** fra den eller **skjæres** med den, og toleransen (hvor langt trekantene kan være fra de eksakte overflatene). Det er ett steg i delens Angre og vises i funksjonslisten som en importert funksjon oppkalt etter volumlegemet. Delen beholder trekantene, så den åpnes og bygges på nytt uten overflatene; det eksakte volumlegemet blir i Overflater, så du kan bake det inn igjen etter en endring.

## Filer

Eksporter **STEP** (AP242) eller **IGES** med kurvene og overflatene nøyaktig slik de er (B-spline-kurver og -overflater, ingenting gjort om til trekanter). Hver overflate er sin egen flate, med sin trim; et volumlegeme skrives som ett lukket skall, der hver kant deles av sine to flater, slik andre CAD-programmer forventer (statuslinjen sier hvor mange volumlegemer som gikk ut på den måten). I IGES skrives det samme volumlegemet som ett manifold-volumlegeme B-rep (entitet 186 over lukket skall 514, flater 510, løkker 508, én kantliste 504 og én hjørnepunktliste 502); et volumlegeme der flatene ikke parer seg kant for kant, skrives som separate flater, og linjen sier det. **Importer…** leser et slikt volumlegeme tilbake som et volumlegeme, fra STEP og fra IGES.

## Glatte skrogkurver

**Glatt ut** (i Overflater-verktøylinjen) måler hver kurve på sin eksakte form — vendepunkter (der den skifter fra å bøye den ene veien til den andre), største krumning, krumningshopp ved knutene og ruheten — og bygger om de som har et vendepunkt eller et hopp, med færrest kontrollpunkter som holder seg innenfor toleransen du oppgir og ikke gir noe vendepunkt. Tegn stasjonene, vannlinjene og buttocks som kurver, glatt dem ut, og så **Loft** skroget gjennom stasjonene og kontroller med **Zebra**. Uglatte kurver vises også i **Problemer** med en **Glatt ut denne kurven**-retting. En linje som skal skifte retning (et S-formet snitt) beholder det ene vendepunktet. Skrogets forskyvning, tyngdepunkter og oppretterarmer kommer fra volumdelen: se hydrostatikkverktøyet.

## Overflater fra en skanning (omvendt konstruksjon)

Åpne delen som holder den skannede nettet (en åpnet STL eller et bakt legeme), velg **Overflater** i boksen **Arbeidsområde**, og velg **Tilpass overflater til skanningen** i gruppen **Skanning**; delens bygde nett er skanningen. Verktøyet ser etter **plan**, **sylindre**, **kuler** og **kjegler** (de eksakte overflatene en bearbeidet del består av; hver rad viser radiusen eller halvvinkelen det fant), finner **avrundinger** (avrundede kanter og hjørner: en liten sylinder eller kule som går tangent inn i to eller flere andre flater, vist med sin radius og flatene den forbinder), **kantavrundinger** (en torus: den avrundede kanten der en flat flate møter en sylinder eller kjegle, vist med sin radius og ringradius) og **variable avrundinger** (en avrundet kant der radiusen endrer seg langs den, vist med radiusen i hver ende), tilpasser **én fri-form-lapp** til et glatt, svakt buet stykke, og kutter hver flate til konturen av den delen av skanningen den kom fra, slik at hull og hjørner beholdes. Alternativer: **toleransen** (hvor langt, i mm, et skannepunkt kan være fra et plan eller en sylinder og fortsatt høre til der, og målet for en fri-form-lapp), **minste bit** (en andel av overflatearealet) og **flest flater**. Samme skanning og alternativer gir alltid de samme flatene.

Resultatet er en tabell, én rad per flate: dens type, hvor mange trekanter den kom fra, og feilen **målt fra skanningen til flaten** (rms, den største, og andelen punkter innenfor toleransen). De målte punktene er skannens hjørnepunkter og midten av hver trekant. Feilen måles ikke den andre veien (flate til skanning), så en flate som strekker seg utover skanningen, ville ikke vise det. Notatet under tabellen sier også hvor mye av arealet som var for lite til å tilpasses. I visningen farges skannepunktene etter deres **avviksskart**: blått på flaten, grønt halvveis til toleransen, rødt ved toleransen eller over (fjern merket for **Vis avviksskartet** for å skjule det). Biter som brettes tilbake på seg selv (et lukket rør tilpasset med fri-form-lapper, for eksempel) listes som ikke tilpasset, og tvinges aldri inn i én overflate.

**Sy overflatene til et volumlegeme** syr hver viste overflate som ikke er i et volumlegeme, sammen til ett lukket volumlegeme. Skannflater møtes bare innenfor skannens egen feil, så den prøver den minste sammenføyningsavstanden som lukker seg (aldri mer enn **sammenføyningsavstanden** du satte) og nekter med ord når flatene ikke lukker seg. Den lapper aldri over et gap. En boks med avrundede kanter syr seg når avrundingene ble funnet som egne flater; sammenføyningsavstanden som lukket seg, står i resultatet. Volumlegemet fungerer så med Forening, Subtraher, Snitt og **Bak inn i delen**.

Det den ikke gjør: en **kantavrunding** (en torus) letes etter bare rundt aksen til en sylinder eller kjegle som allerede er funnet, og en **variabel avrunding** bare langs en ganske rett kant (snittene er kuttet vinkelrett på én retning); ellers blir de fri-form-lapper når de er glatte nok, og utelates ellers; kuler, kjegler og avrundinger finnes ved tilfeldig sampling, så en veldig liten (noen få trekanter) kan gå glipp av; avviksskartet viser avstanden fra skanningen til flatene, ikke den andre veien; svært store skanninger (over 300 000 trekanter) nektes her. Flater av en sylinder med full omdreining kuttes rundt hull, med skjøten lagt der det ikke er hull. Kontroller hver flate mot skanningen før du stoler på den.

## Ikke bygget ennå

Avrunding av kanter som møtes i et hjørne av buede flater eller med ulike radier (en hjørneoverganger), en avrunding mellom flater som ikke møtes, en innvendig avrunding som ender på en skrå eller buet flate, Boolske operasjoner og avrundinger beregnet på overflatene uten trekanter (her arbeider volumlegememotoren på trekanter innenfor toleransen, og hvert punkt settes så tilbake på de eksakte overflatene), et bakt legeme som følger overflatene når de endrer seg, trimming av en overflate med en annen overflate utenfor en Boolsk operasjon, fylling av hull med mer enn fire sider, projisering av kurver på overflater.
