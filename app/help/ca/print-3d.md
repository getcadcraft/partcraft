---
title: Prepara una peça per a la impressió 3D
summary: Comprova que una peça o un conjunt està tancat, cap a la teva impressora i recolzat sobre una base, i després baixa'l com a STL o 3MF per al teu laminador.
keywords: impressió 3d, impressora, imprimir, laminador, stl, 3mf, estanc, tancat, varietat, llit, mida del llit, placa d'impressió, voladís, suports, base, mil·límetres, exporta, rosques, folga
from: 90d81dff
---

Un laminador necessita una forma tancada: sense forats, amb totes les cares apuntant cap a fora, i sense travessar-se a si mateixa. Les peces que construeix PartCraft són tancades per construcció, així que la comprovació sobretot et diu la mida, si la peça cap al llit de la teva impressora, si es recolza sobre una cara plana, i quant sobresurt.

## Comprova i baixa

1. Opcional, una sola vegada: configura el llit de la teva impressora a {{ui:Configuració}} › PartCraft › **Impressora 3D**: amplada, profunditat i alçada en mil·límetres. Deixa'ls buits per saltar aquesta comprovació.
2. Trieu {{ui:Exporta}}, i després {{ui:Comprova per a impressió 3D (STL o 3MF)…}}.

   El diàleg diu "Llest per imprimir" o "No llest per imprimir", enumera tot el que falla i dóna la mida sobre el llit (X × Y × Z, en mil·límetres), el volum i el nombre de triangles.

3. Feu clic a {{ui:Baixa 3MF}} o a {{ui:Baixa STL}}. El fitxer és el mateix que {{ui:Exporta}} › {{ui:3MF, per a impressió 3D}} o {{ui:STL, per a impressió 3D}}.

En un conjunt, la comprovació i els fitxers prenen tot el conjunt, cada còpia on és col·locada.

La peça es comprova tal com l'escriu l'exportació: el que apunta cap amunt a PartCraft (perpendicular al pla Superior) apunta cap amunt al llit. Una peça feta en croquis sobre el pla Superior queda plana.

## Què pot dir el diàleg

**No llest per imprimir** (un laminador pot rebutjar-lo o imprimir-lo malament): forats (arestes amb una cara només a un costat), arestes compartides per tres o més cares, cares que miren en sentits oposats, un cos del revés, o un cos que es travessa a si mateix. Una peça construïda a PartCraft no hauria de mostrar mai això; si ho fa, consulta [Resolució de problemes](topic:troubleshooting).

**Avisos** (s'imprimeix, però revisa-ho abans):

- **Més gran que el llit de la teva impressora**, fins i tot girada 90° sobre el llit.
- **Cap cara no es recolza plana a baix**: gira la peça al laminador perquè una cara descansi sobre el llit, o necessitarà suports o una balsa.
- **S'inclina més de 45° de la vertical**: aquestes cares necessiten suport, tal com està. Una altra posició potser en necessita menys.
- **Els cossos separats se superposen** o **es toquen cara a cara**: els laminadors solen fusionar-los. {{ui:Combina}} a Operacions › Més els uneix en un sol cos. Vegeu [Cossos](topic:bodies).
- **Menys d'1 mm en algun punt**: revisa les mides de la peça.

## Rosques que s'imprimeixen

Una rosca modelada s'imprimeix com una rosca real. Dona-li una mica de **Folga** perquè un perno imprès entri en una femella impresa: vegeu [Rosques](topic:threads).

## Cares rodones més llises

L'STL i el 3MF estan fets de triangles. Per a cares rodones més llises, fes clic a l'espai buit perquè no hi hagi res seleccionat i posa **Corbes** a **Fina (128 per volta)** o **Molt fina (256 per volta)** al panell de la dreta abans d'exportar. Més triangles fan fitxers més grans.

## Més gran, més petit o en peces

- **Exporta › Escala per a impressió (STL o 3MF)…** desa la peça escalada per eix sense canviar-la: una **tolerància de contracció** en per cent (mida × (1 + s), o la mida exacta ÷ (1 − s)) per a un model de fosa, o factors simples, respecte al centre, al cantó més baix, al centre de la part inferior o a l'origen.
- **Exporta › Divideix per a impressió (un zip de peces)…** talla una peça massa gran per a la teva impressora en peces que càpiguen cadascuna al llit que indiquis, unides amb clavilles, claus, cua d'oronella, forats per a tacs o allotjaments per a imants (amb la folga que hagis definit). Cada peça i cada unió es numeren, i les peces es desen com a STL o 3MF en un zip amb una full de muntatge. La peça en si no canvia.

## No comprovat

El gruix de les parets, els detalls més petits que el teu broquet pot dibuixar, i com el laminador col·locarà els suports. El teu laminador ho mostra.
