---
title: Imbrica les peces planes en fulls
summary: Col·loca les peces planes sobre plaques o un rotlle amb el mínim de sobrant que pot trobar PartCraft, mai més a prop de l'espaiat que indiqueu, i desa la disposició com a DXF per al làser, el plasma, el jet d'aigua o la fresadora.
keywords: imbricació, imbrica, full, placa, rotlle, làser, plasma, jet d'aigua, fresadora, tall, rendiment, ús del material, retall, rebuig, espaiat, amplada del tall, fil, direcció de laminat, dxf, patró pla, contorns
from: 8dcce1a6
---

**La imbricació** col·loca moltes peces planes sobre un full perquè en quedi el mínim de material possible. PartCraft col·loca les peces una per una, cadascuna on fa més curta la longitud usada del full, prova diverses ordres i gira en pocs segons, i en queda la millor. Les peces poden encaixar dins dels forats de les altres i dins del buit d'una L o d'una U.

## Obertura

- {{ui:Exporta}} › {{ui:Imbrica les peces planes en fulls…}} l'obre amb el patró pla de la peça o, en un conjunt, amb el patró pla de cada peça de xapa, tantes com còpies hi hagi.
- En una peça de xapa, {{ui:Estén pla}} i després {{ui:Imbrica en fulls…}} sota el patró pla.
- {{ui:Afegeix contorns d'un DXF…}} afegeix com a peça cada contorn tancat d'un fitxer DXF: un dibuix de CadCraft desat com a DXF, o un fitxer del programari propi de la vostra màquina de tall. Un contorn dins d'un altre és un forat seu. Les línies i els arcs que s'uneixen extrem a extrem compten com un sol contorn. Els fitxers en polzades, centímetres o metres es passen a mil·límetres.

:::note
Estendre la xapa en pla necessita un nucli de geometria exacta (vegeu [Xapa](topic:sheet-metal)). Els contorns d'un fitxer DXF sempre funcionen.
:::

## Configuració

Per a cada peça indiqueu **quantes** en necessiteu i la seva **direcció del fil**: {{ui:Qualsevol direcció}}, {{ui:Al llarg del full (tal com està dibuixat)}} per a xapa raspallada o laminada que ha d'anar en un sol sentit, o {{ui:Travessat al full}}.

A sota de **Fulls**:

- **Estoc**: {{ui:Plaques}} d'una longitud i una amplada donades (i quantes en teniu; 0 = tantes com calgui), o {{ui:Un rotlle}} d'una amplada donada, de la llargada que calgui.
- **Marge de vora** es deixa lliure a totes les vores del full (per a les subjeccions, o per a una vora irregular).
- **Espai entre peces** és la distància mínima entre dues línies de tall: com a mínim l'amplada del tall de la vostra màquina (kerf), més el que necessiti el material.
- **Girs**: els angles en què es pot girar una peça, cada 90° per defecte. Menys girs van més ràpids; més girs poden aprofitar millor el full.
- **Es poden girar les peces** permet col·locar una peça cap per avall. Deixeu-ho desactivat per a la xapa: un patró pla col·locat del revés es doblega en sentit contrari.

Premeu {{ui:Imbrica}}. La vista prèvia mostra cada full; les dades indiquen quantes plaques ha usat (o quina part del rotlle) i quina part del material ocupen les peces. Qualsevol peça que no hi hagi cabut s'indica pel nom.

## Desament

{{ui:Desa DXF}} escriu la disposició com a DXF (R12, en mil·límetres), un full sota l'altre: els contorns dels fulls a la capa SHEET, les peces a PARTS (els arcs es conserven com a arcs) i el nom de cada peça a LABELS.

:::tip
Barrejar diverses peces sol imbricar-se millor que moltes còpies d'una sola: les peces petites omplen els buits entre les grans.
:::

## Tall dels fulls (G-code)

**Exporta › Fulls imbricats a G-code** llegeix un DXF imbricat (aquest, o els fulls del complement Cabinets a CadCraft) i fa un programa per full amb el postprocessador que trieu: primer els forats i les perforacions, després els contorns, cada tall fora de la peça pel radi de l'eina, a través del full i 1 mm més, amb pestanyes de subjecció si les demanau. La llista de postprocessadors són els integrats més els propis de l'estudi de Fabricació. Comproveu cada programa en un simulador abans d'executar-lo: no es fan les perforacions ni les butxaques.

## Què cal comprovar

PartCraft torna a comprovar cada disposició sobre les formes reals (no sobre la quadrícula on ha fet la cerca): cap parell de peces no és més a prop que l'espaiat, i res no entra a les marges. No planifica el tall: les entrades de tall, l'ordre de tall, tallar les vores compartides una sola vegada i conservar el full sobrant són feina del programari de la vostra màquina. Comproveu el DXF allà abans de tallar.
