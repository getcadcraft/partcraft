---
title: Svarvning
summary: Plana, grovbearbeta, finbearbeta, spåra, avstick, gänga och borra en svarvad del, utifrån konturen som delen bildar när den snurrar. Svarvverktyg, matning per varv, svarvpostprocessorer och vad som inte är bevisat.
keywords: svarvning, svarv, svarva, plana, grovning, finbearbetning, spår, spårning, avstick, avkapning, gänga, gängning, G32, G33, G96, konstant ytfart, css, nosradie, skär, stång, chuck, diameter, matning per varv, G71, G76
from: d8cc53b0
---

Tillverkning har sju operationer för en svarv. De fungerar på vilken del som helst: det som skärs är **konturen som delen bildar när den snurrar** kring råmaterialets mitt, så en del som inte är rund svarvas ner till den runda form som håller den.

**Inget här har körts på en svarv.** Banorna kontrolleras mot geometrin av testerna; de två svarvpostprocessorerna följer styrningarnas dokumenterade koder. Bevisa ett program i din styrnings egen simulator och i luften först.

## Ställ in

På fliken **Uppställning**:

- **Verktygsaxel** är spindelns axel, svarvens Z. Delens framsida är vid +Z; chucken håller den andra änden.
- **Råmaterial**: välj {{ui:Cylinder}}, stången. Dess överkantsförskjutning är vad planningen tar bort.
- **Arbetsnollpunkt**: ett centrum på råmaterialets eller modellens överkant sätter Z0 på framsidan, den vanliga platsen.
- **Styrning**: {{ui:Fanuc-style lathe (.nc)}} eller {{ui:LinuxCNC lathe (.ngc)}}. En fräspostprocessor vägrar ett svarvprogram och säger det.
- **Max spindelvarvtal**: gränsen som ytfarten hålls under.

{{ui:More}} i verktygsfältet i Tillverkning listar de sju svarvoperationerna överst på fliken **Operationer**. Den första du lägger till tar med sig sitt eget verktyg: ett **svarvskär** (nosradie, skärvinkel, eggvinkel) eller ett **spårblad** (bredd, hörnradie, hur djupt det når). Ändra dem på fliken **Verktyg**. Matningarna är per varv, och hastigheten är en ytfart i m/min som styrningen håller när diametern ändras; ge ett verktyg ett eget varv/min för att i stället låsa hastigheten.

## Operationerna

| Operation | Vad den gör |
|---|---|
| {{ui:Face}} | Planar stångens framsida ner till delen, ett nedsteg i taget, från utsidan till strax förbi centrum. |
| {{ui:Rough}} | Gångar längs Z ett **skärdjup** isär, ner till konturen plus **material att lämna**; sedan ett varv längs konturen för att ta bort stegen. En dal mellan två axelavsatser nås med ett stick på ett skärdjup. |
| {{ui:Finish}} | Ett varv längs konturen med en bråkdel av verktygets matning. |
| {{ui:Groove}} | Stickar in bladet sida vid sida var det kan ta mer än gränsen för material som ännu finns kvar: spåren som svarvskäret inte nådde. **Från / Till Z** smalnar av den. |
| {{ui:Part off}} | Kapar av delen strax bakom dess baksida, till strax förbi centrum, med pecks om du anger en. |
| {{ui:Thread}} | En utvändig gänga: ytterdiameter, stigning, längd, antal gångar. Djup 0 betyder 0.6134 × stigning (en 60°-gänga). Varje gång tar samma spånarea; fjädergångar upprepar den sista. |
| {{ui:Drill}} | En borr på mittlinjen till ett djup, med pecks. |

## Hur verktyget hålls borta från delen

Skäret behandlas som vad det är: dess nosring, och bakom den den bakre eggen, en rak linje vars vinkel är 180° minus eggvinkeln och skärvinkeln. Den formen sänks ner mot konturen i varje punkt längs Z, och banan är där den kommer till vila. Alltså:

- **Nosradien finns redan i banan.** Postprocessorerna skriver ingen `G41` eller `G42`; koordinaterna är verktygets programmerade punkt (hörnet på kvadraten runt nosen).
- Skäret **kan inte följa en vägg som är brantare än dess bakre egg**. Ett spår bakom en axelavsats lämnas ifred, och finbearbetningsoperationen säger hur mycket av konturen den inte kunde nå. En {{ui:Groove}}-operation tar det.
- Råmaterialet spåras längs Z efter varje skärning, så grovning inte skär luft, spårning hittar vad som blivit kvar, och varje operation visar volymen den tog bort och om den skar in i delen.

## Begränsningar

- **Endast utvändig svarvning**: inget urborrningsjärn, inga inre spår eller gängor, inga planspår.
- En spindel, delen hålls vid −Z. Ingen underspindel, inga levande verktyg, ingen C- eller Y-axel, inga lunett- eller pinolrörelser.
- Banor är raka rörelser: kurvor är korta linjer inom toleransen (inga `G2`/`G3`), och grovning och gängning skrivs gång för gång (inga `G71`- eller `G76`-cykler).
- Gängning är raka gångar med en rak utdragning i slutet; ge gängan ett avlastningsspår. Gängan visas inte i råmaterialet.
- Borrning på centrum ändrar inte råmaterialets modell.
- Hållaren, revolvern och chucken kontrolleras inte. Ställ in **Stanna vid Z** för att hålla verktyget borta från backarna.
- Matningar och varvtal är startvärden, precis som för fräsning.
