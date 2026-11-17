---
title: Lag en variantpakke fra konfigurasjonene dine
summary: Bygg hver konfigurasjon av en del, eller noen utvalgte, samlet som STEP, IFC, DWG og et forhåndsvisningsbilde av hver, med en tabell over parametrene og delen som ett bibliotekselement med variantene sine.
keywords: variantpakke, varianter, konfigurasjoner, produktfamilie, batcheksport, alle størrelser, step, ifc, dwg, forhåndsvisning, tabell, csv, json, bibliotek, konfigurator, produktkonfigurator, katalog, elementfil json
from: 9a6db99f
---

## Hva du skal gjøre

Lever **alle størrelser av en del samtidig**: én STEP-, IFC- og DWG-fil og et bilde for hver konfigurasjon, en tabell som sier hva hver enkelt er, og et bibliotekselement som legger dem alle på én side.

Du trenger først en del med **konfigurasjoner** (se [Konfigurasjoner og designtabeller](topic:design-tables)). En konfigurasjon som slår av en funksjon, for eksempel en plate med og uten hull, blir sin egen variant.

## Steg

1. Åpne delen. Finn **Konfigurasjoner** på fanen {{ui:Parametere}}.
2. Klikk {{ui:Variantpakke…}}.
3. Kryss av konfigurasjonene som skal bygges (alle er avkrysset), og filene som skal skrives: STEP, IFC, DWG, et forhåndsvisningsbilde og bibliotekselementet.
4. Klikk {{ui:Lag pakken}}. Statuslinjen teller variantene etter hvert som de bygges; delen din endres ikke.
5. Én zip-fil lastes ned: `<part> variants.zip`.

## Hva som er i zip-filen

| Fil | Hva den er |
|---|---|
| `<name>.step` | Konfigurasjonen som et STEP-volumlegeme. |
| `<name>.ifc` | IFC4, ett element med det bygde legemet og delens parametere som egenskaper; verdien er konfigurasjonens egen. |
| `<name>.dwg` | Forfra-, ovenfra-, høyre- og isometrisk visning som et tegningsark i full størrelse. |
| `<name>.svg` | Et isometrisk strektegningsbilde av den. |
| `variants.csv`, `variants.json` | Parametertabellen: hver variants id, navn og verdi for hver parameter, funksjonene den slår av, filene, volumet og størrelsen. |
| `<part>.item.json` | Delen som ett bibliotekselement med variantene sine (se nedenfor). |
| `README.txt` | Hva som ble laget, notatene nedenfor, og det som ikke ble bygget. |

Filene får navn etter konfigurasjonen. En konfigurasjon som ikke kan bygges (en funksjon som ikke kan lages med disse verdiene), utelates fra filene og tabellen, står oppført i README-filen og i en melding etter at zip-filen er lagret. De andre skrives likevel.

## Godt å vite

- **STEP** er eksakt når den eksakte kjernen er på i din versjon. Uten den er STEP fasettert (flate trekanter), og README-filen sier det.
- **DWG** er tegningsarket, ikke en 3D-modell. Linjene kommer fra nettet, så en buet kant er mange korte linjer.
- **Bibliotekselementet** har ett legeme og ett fotavtrykk per variant, i bibliotekets egne akser: Z opp, forsiden mot −Y, og innsettingspunktet midt på baksiden nederst. Planen er hver variants omsluttende rektangel. Et element er begrenset til 8 MB, så en svært tung variant blir en boks av sin størrelse, og README-filen sier hvor mange det gjelder.
- Delens aktive konfigurasjon er elementets standardvariant.
- Porter (tilkoblingspunkter for rør og kanaler) settes ikke fra PartCraft.

## Legg variantene på en bibliotekside

Last opp `<part>.item.json` under **Bibliotek › Last opp** på nettstedet. Velg kategori, lisens og din kildehenvisning, så blir det et bibliotekselement med variantene sine. I BimCraft spør plassering hvilken variant det skal være, og Bytt tilbyr de andre. Siden der besøkende velger alternativer, ser 3D-modellen og laster ned en variant, er foreløpig en **forhåndsvisning for ansatte**: den er ikke åpen for alle ennå.

## Fra kommandolinjen

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` angir konfigurasjonene, `--formats` tar hvilke som helst av `step`, `ifc`, `dwg`, `preview`, og `--no-item` utelater bibliotekselementet. Den skriver en mappe, en zip-fil eller begge, og avslutter med 1 når en variant ikke kunne bygges. Se [Skript og kommandolinje](topic:scripts-and-cli).
