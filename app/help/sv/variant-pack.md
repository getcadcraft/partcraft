---
title: Gör ett variantpaket av dina konfigurationer
summary: Bygg varje konfiguration av en del, eller ett utvalt fåtal, på en gång som STEP, IFC och DWG med en förhandsvisning av var och en, en tabell över deras parametrar och delen som ett biblioteksobjekt med sina varianter.
keywords: variantpaket, varianter, konfigurationer, familj av delar, batchexport, alla storlekar, step, ifc, dwg, förhandsvisning, tabell, csv, json, bibliotek, konfigurator, produktkonfigurator, katalog, item json
from: 9a6db99f
---

## Vad du ska göra

Lämna över **alla storlekar av en del på en gång**: en STEP-, IFC- och DWG-fil och en bild för varje konfiguration, en tabell som säger vad var och en är, och ett biblioteksobjekt som lägger dem alla på en sida.

Du behöver först en del med **konfigurationer** (se [Konfigurationer och konstruktionstabeller](topic:design-tables)). En konfiguration som stänger av en funktion, till exempel en platta med och utan hål, blir en egen variant.

## Steg

1. Öppna delen. På fliken {{ui:Parametrar}} hittar du **Konfigurationer**.
2. Klicka på {{ui:Variantpaket…}}.
3. Bocka i de konfigurationer som ska byggas (alla är ibockade) och filerna som ska skrivas: STEP, IFC, DWG, en förhandsvisning och biblioteksobjektet.
4. Klicka på {{ui:Skapa paketet}}. Statusraden räknar varianterna när de byggs; din del ändras inte.
5. En zip-fil laddas ner: `<part> variants.zip`.

## Vad som finns i zip-filen

| Fil | Vad det är |
|---|---|
| `<name>.step` | Konfigurationen som en STEP-solid. |
| `<name>.ifc` | IFC4, ett element med den byggda kroppen och delens parametrar som egenskaper; värdet är den konfigurationens egna. |
| `<name>.dwg` | Fram-, ovan-, höger- och isometrisk vy som ett ritningsblad i full storlek. |
| `<name>.svg` | En isometrisk linjebild av den. |
| `variants.csv`, `variants.json` | Parametertabellen: varje variants id, namn och värde för varje parameter, de funktioner den stänger av, dess filer, dess volym och storlek. |
| `<part>.item.json` | Delen som ett biblioteksobjekt med sina varianter (se nedan). |
| `README.txt` | Vad som gjordes, anteckningarna nedan och allt som inte byggdes. |

Filerna namnges efter konfigurationen. En konfiguration som inte kan byggas (en funktion som inte går att göra med de värdena) utelämnas från filerna och tabellen, listas i README-filen och i ett meddelande efter att zip-filen sparats; de övriga skrivs ändå.

## Bra att veta

- **STEP** är exakt när den exakta kärnan är på i din version. Utan den är STEP facetterad (platta trianglar), och README-filen säger det.
- **DWG** är ritningsbladet, inte en 3D-modell. Dess linjer kommer från nätet, så en böjd kant blir många korta linjer.
- **Biblioteksobjektet** innehåller en kropp och ett fotavtryck per variant, i bibliotekets egna axlar: Z uppåt, framsidan mot −Y, och infogningspunkten mitt på baksidan längst ned. Planen är varje variants omslutande rektangel. Ett objekt är begränsat till 8 MB, så en mycket tung variant blir en låda i sin storlek, och README-filen säger hur många.
- Delens aktiva konfiguration är objektets standardvariant.
- Portar (anslutningspunkter för rör och kanaler) sätts inte från PartCraft.

## Lägg varianterna på en bibliotekssida

Ladda upp `<part>.item.json` under **Bibliotek › Ladda upp** på webbplatsen. Välj dess kategori, licens och din källangivelse, så blir den ett biblioteksobjekt med sina varianter. I BimCraft frågar placeringen vilken variant, och Byt erbjuder de andra. Sidan där besökare väljer alternativ, ser 3D och laddar ner en variant är för närvarande en **personalförhandsvisning**: den är inte öppen för allmänheten än.

## Från kommandoraden

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` anger konfigurationerna, `--formats` någon av `step`, `ifc`, `dwg`, `preview`, och `--no-item` utelämnar biblioteksobjektet. Den skriver en mapp, en zip-fil eller båda och avslutar med 1 när en variant inte kunde byggas. Se [Skript och kommandoraden](topic:scripts-and-cli).
