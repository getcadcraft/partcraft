---
title: Peces a partir de la física: generadors
summary: L'espai de treball Engineer i l'operació Cos generat: trieu un generador, definiu-ne les entrades (cabal, pressió, temperatures, material, impressora), i obteniu una peça dimensionada amb fórmules de llibre de text, amb el seu full de dades, les seves comprovacions de fabricació i fitxers per a eines d'anàlisi. Les mateixes entrades sempre donen la mateixa peça.
keywords: engineer, generador, cos generat, física, regles, intercanviador de calor, col·lector, broquet, reticle, giroide, full de dades, entrades, determinista, mateixes entrades, mateixa peça, comprovacions de fabricació, impressió 3D, llit de pols
from: 5a387dc0
---

Un **generador** és un script que dimensiona una peça a partir dels vostres requisits i la construeix. Un generador d'intercanviador de calor pren la calor a transferir, els dos cabals i les seves temperatures, la pressió i el material; calcula quina mida ha de tenir el nucli i quin gruix ha de tenir la paret, el construeix, i us diu els números que ha usat i d'on surt cadascun. Canvieu una entrada i la peça la segueix.

El resultat és un cos normal de la peça: és a la llista d'operacions, s'imprimeix i s'exporta. El generador mateix també es guarda a la peça, de manera que un fitxer s'obre en qualsevol ordinador sense que el generador estigui instal·lat, i **obrir una peça mai no executa un script**.

## Feu un cos

1. Trieu l'espai de treball {{ui:Engineer}} al commutador.
2. Trieu un generador a la llista (els que venen amb PartCraft, i després els que hàgiu obert des d'un fitxer) i feu clic a {{ui:Nou}}.
3. L'script s'executa. Quan acaba, el cos és a la vista i el panell mostra les seves entrades, el seu **full de dades** i les seves **comprovacions**.

També en podeu afegir un des de Disseny: {{ui:Operacions}} › {{ui:Més}} › {{ui:Cos generat}}.

## Canvieu-lo

Canvieu qualsevol entrada i el cos es torna a fer poc després de deixar d'escriure. El panell diu quina de tres coses és certa:

- **Al dia**: el cos coincideix amb l'script i les seves entrades.
- **Les entrades han canviat**: el cos de la peça és de les entrades anteriors; es torna a fer ara, o premeu {{ui:Executa}}.
- **Encara no executat** o **L'última execució ha fallat**: es mostra un error de script amb la seva línia.

{{ui:Atura}} acaba una execució que triga massa. {{ui:Desfés}} torna enrere un pas cada vegada: una execució és un pas, una entrada és un pas.

## El full de dades

Cada número que el generador ha calculat es llista amb la seva **unitat** i **d'on surt** (una equació de llibre de text, una norma, un full de dades). Res no és una constant amagada. El full forma part del fitxer, de manera que és el mateix al següent ordinador. [Dades de sortida](topic:data-out) explica com desar-lo com a JSON o PDF.

## Les comprovacions

Un generador pot comprovar la seva pròpia peça contra un procés d'impressió: parets i buits més prims del que el procés admet, peces soltes, cavitats que atrapen pols o resina, forats massa estrets per netejar-los, i voladissos que necessiten suport. Les troballes són al panell i a la llista de {{ui:Problemes}} (el botó ⚠), i es desen amb la peça.

Les xifres del procés són els números rodons que les guies públiques de disseny donen per al procés en general (FDM, SLA, SLS, llit de pols metàl·lic). **No són l'especificació de la vostra màquina**: substituïu-les per les xifres del vostre taller abans de fiar-vos d'una comprovació. La comprovació treballa sobre una graella de vòxels, de manera que és exacta a un vòxel aproximadament: només es reporta una paret quan és més prima que el límit en més d'un vòxel.

## Què es lliura

| Generador | Què fa |
|---|---|
| Bloc giroide | Un bloc omplert amb una làmina giroide, Schwarz P o diamant: el reticle més senzill |
| Intercanviador de calor giroide | El nucli d'un intercanviador de dos fluids, dimensionat per la càrrega amb el mètode d'efectivitat-NTU, i la paret per la pressió; pot comprovar la caiguda de pressió amb un estudi de flux en una cel·la |
| Col·lector de distribució | Una capçalera i derivacions, cada tub dimensionat pel cabal que transporta |
| Biga reticular graduada | Un reticle la paret del qual s'engreixeix on una optimització topològica diu que cal material |

Totes són estimacions inicials basades en fórmules de llibre de text. [La biblioteca d'enginyeria](topic:engineering-library) en llista les fórmules i els seus límits. Executeu Simulació, Tèrmica o Flux sobre el resultat abans de fiar-vos-en.

## Controls d'exportació

Els generadors i els fulls de dades d'Engineer porten un avís sobre controls d'exportació i sancions. Llegiu-lo a [Controls d'exportació d'Engineer](topic:engineer-export-notice); també és al peu de cada full de dades.

## Encara no implementat

- Capçaleres, ports i connexions al nucli de l'intercanviador: només n'hi ha el nucli.
- Corbes de temperatura per a la resistència dels materials: els materials són a temperatura ambient.
- Pèrdues en te i la repartició del cabal entre sortides del col·lector.
- Afegir generadors des del directori de complements amb un sol clic; obrir un fitxer n'afegeix un a aquest navegador.
- Generadors per a les altres aplicacions.
