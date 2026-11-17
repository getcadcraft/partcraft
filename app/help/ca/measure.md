---
title: Mesura distàncies, angles i massa
summary: Feu clic a dues coses a la vista per obtenir la distància mínima, l'angle i ΔX ΔY ΔZ; llegiu la longitud d'una aresta, el diàmetre d'un forat, l'àrea d'una cara o les coordenades d'un punt; obteniu el volum, la massa, el centre de massa i la inèrcia d'una peça o d'un conjunt.
keywords: mesura, distància, distància mínima, angle, longitud, radi, diàmetre, àrea, coordenades, delta, inspecciona, propietats de massa, massa, pes, centre de massa, inèrcia, moment d'inèrcia, densitat, material
from: 20bda0b7
---

**Mesura** funciona sobre el model en tots els espais de treball (Disseny, Forma, Simulació, Generatiu, Fabricació) i en un conjunt. És al menú {{ui:Vistes}} del grup **Vista**, o premeu {{key:M}}. Es desplega una targeta a la cantonada superior esquerra de la vista.

## Mesura una cosa

Feu clic en un vèrtex, una aresta o una cara. La targeta mostra:

- **Un punt** (un vèrtex, el punt mig d'una aresta o el centre d'un cercle): les seves X, Y, Z.
- **Una aresta**: recta, cercle o corba, i la seva longitud; per a un cercle també el radi, el diàmetre i el centre.
- **Una cara**: plana, cilindre, con i altres, i la seva àrea; la normal d'una cara plana; el radi i el diàmetre d'un cilindre (la mida d'un forat). Les àrees són de les facetes que construeix el nucli de malla.
- **El cos complet**: manteniu {{key:Shift}} i feu clic a la peça. Obteniu-ne el volum, l'àrea, la massa i la inèrcia (vegeu més avall).

El punter s'ajusta als vèrtexs, als punts mitjos de les arestes i als centres dels cercles a menys de 10 píxels; un petit punt blau mostra l'ajust abans de fer clic. Per triar el centre d'un forat, apunteu al mig del forat; per triar-ne la vora (el cercle), apunteu a la vora.

## Mesura entre dues coses

Feu clic en un segon element. La targeta afegeix:

- **Distància mínima** i els dos punts més propers, dibuixats a la vista amb una línia entre ells.
- **ΔX, ΔY, ΔZ** des del primer punt més proper fins al segon.
- **Angle** entre dues cares planes (entre les seves normals, 0–180°), entre dues arestes rectes o eixos (0–90°), o entre una aresta i una cara.
- **Separació entre plans** per a dues cares planes paral·leles, **Centre a centre** per a dos cercles o forats, **Eix a eix** per a dos forats o cilindres paral·lels.

Un tercer clic comença una parella nova. {{key:Esc}} neteja les tries; {{key:Esc}} de nou (o {{ui:Tanca}}) tanca Mesura. {{ui:Copia}} posa els resultats al porta-retalls com a text separat per tabulacions, a punt per enganxar en un full de càlcul.

### Quina precisió té

PartCraft construeix la peça amb el nucli de malla, així que les distàncies es calculen sobre les facetes de la malla i la targeta diu **aproximat: de les facetes**: correcte per a cares planes i entre vèrtexs, lleugerament inexacte per a les corbes. Un ajust **Corbes** més fi les apropa. Mesurar amb exactitud sobre les superfícies reals necessita un nucli exacte: encara no implementat en aquesta versió.

## Propietats de massa

Trieu {{ui:Propietats de massa}} a la targeta o al menú {{ui:Vistes}}. En una peça, trieu un **Material** a la targeta (acer, alumini, plàstics i altres amb les seves densitats habituals). En un conjunt, cada peça utilitza el material fixat a les seves propietats (seleccioneu la peça i després **Material**), i el resultat és per a totes les peces juntes.

La targeta mostra la massa, el volum, l'àrea, el centre de massa, el tensor d'inèrcia (Ixx, Iyy, Izz i els productes Ixy, Iyz, Ixz, en kg·mm², respecte al centre de massa segons els eixos del món) i els moments principals. Sense material mostra el mateix per unitat de densitat (mm⁵) i sense massa.

Els valors són exactes per al sòlid teselat que construeix el nucli de malla (les cares corbes com a facetes), així que una peça rodona surt una mica baixa, i la targeta ho indica. Les densitats dels materials són valors típics de manual; un aliatge o un grau real pot diferir uns quants per cent.

## Límits

- Els ajusts poden trobar un punt amagat darrere d'una altra geometria; comproveu que la targeta indica el que volíeu.
- Mesura es tanca quan obriu un croquis o el full de dibuix, o quan canvieu d'espai de treball.
