---
title: Superficies libres (NURBS)
summary: Curvas y superficies suaves al lado de la pieza: loft, barrido, redes de curvas, parches de cuatro bordes, mezclas y recortes, con continuidad G0, G1 y G2 medida en superficies exactas; sólidos con unión, resta e intersección incorporados a la pieza; vistas cebra y curvatura; caras ajustadas a un escaneo con error medido; archivos STEP o IGES. Guardado en el archivo de la pieza.
keywords: nurbs, escaneo, ingeniería inversa, ajuste, malla a superficie, nube de puntos, stl, recorte, agujero, corte, sólido, booleano, unión, resta, intersección, coser, cerrado, hornear, libre, superficie, b-spline, curva, spline, loft, barrido, riel, red, coons, parche, mezcla, continuidad, tangente, curvatura, cebra, puntos de control, nudos, grado, step, iges, clase a, casco, suavizado
from: 64ed5196
---

**Superficies** ojapo curvas y superficies suaves, ojeporu productos, carrocerías y cascos de barco: NURBS, la misma matemática que usan otros modeladores de superficie. Todo se mide en las superficies exactas, nunca en los triángulos que se ven. Los tamaños están en milímetros, como en el resto de PartCraft.

Elegí **Superficies** en la casilla **Workspace**. La barra tiene {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} y {{ui:Zebra}}; cada comando está en el panel de la derecha. Cada comando dice lo que todavía necesita: hacé clic en curvas o superficies en la vista (cerca de un borde o un extremo cuando lo pida) o elegilas en la lista; escribí puntos, o hacé clic en ellos sobre las caras de la pieza (fuera de la pieza caen sobre el plano del suelo), y después emboguejy Enter.

Curvas y superficies se guardan en el archivo de pieza junto al sólido. No cambian los features de la pieza: el panel tiene su propio {{ui:Undo}} y {{ui:Redo}}, un paso por comando.

## Curvas

- **Curva por puntos** pasa por cada punto que hacés clic. **Curva por puntos de control** sigue una jaula de puntos.
- **Insertar nudo**, **Subir grado** y **Bajar grado** cambian cómo se describe una curva sin moverla (bajar se rechaza si la curva se movería más que la tolerancia). **Reconstruir curva** le da un nuevo número de puntos de control y dice cuánto se movió.
- **Empatar curva** hace que el extremo de una curva toque otra con G0 (tocando), G1 (misma dirección) o G2 (misma curvatura también). **Mezclar curva** agrega una curva nueva entre dos extremos, G1 o G2.

## Superficies

- **Loft** por dos o más curvas, **Superficie reglada** entre dos, **Extruir curva**, **Revolucionar curva**.
- **Barrido por un riel** lleva un perfil por un camino sin torcerlo; **barrido por dos rieles** mantiene los extremos del perfil sobre ambos rieles. Los barridos se ajustan: el resultado dice cuánto se mantuvo cerca del barrido verdadero.
- **Superficie desde una red de curvas** pasa por una grilla de curvas (cada una cruza a cada una de las otras una vez). **Parche desde cuatro bordes** llena cuatro curvas que se encuentran en sus esquinas.
- **Empatar superficie** hace que el borde de una superficie toque a una vecina con G0, G1 o G2; **Mezclar superficie** agrega una superficie entre dos bordes.
- **Superficie desplazada**, **Extender superficie** (la superficie sigue como iba), **Reconstruir superficie**.

## Revisar la calidad

La tabla **Bordes compartidos** lista cada borde que comparten dos superficies, con la separación (mm), el ángulo entre ellas (°) y el salto de curvatura (1/mm), y si eso da G0, G1 o G2. Un borde peor que lo pedido aparece en **Problemas** con una solución **Empatar**. Las franjas de **Cebra** y los colores de **curvatura** salen de la superficie exacta: franjas que siguen sin cortarse a través de un borde significan G1; franjas que además mantienen su ancho significan G2.

G0 a G2 se miden en 33 puntos por borde. **G3 y la calidad "clase A" no se miden** y no se afirman.

## Recortar una superficie

El grupo **Recorte** corta una superficie sin cambiar su forma: la superficie conserva todos sus puntos de control, y solo se muestra, cuenta y escribe la parte dentro del contorno. **Recortar a un rectángulo** y **Recortar con un círculo** trabajan sobre una fracción (0 a 1) de la superficie en cada dirección, así que no necesitan elegir nada en la vista; **Recortar por una curva** toma una curva cerrada que está sobre la superficie (se proyecta sobre ella, y se rechaza con mensaje si está abierta o a más de la tolerancia). Marcá **Cortar un agujero** para quitar el interior del contorno; dejalo sin marcar para conservar solo el interior. Una superficie puede tener un contorno conservado y cualquier número de agujeros; un contorno que cruza otro se rechaza. **Quitar el recorte** muestra otra vez la superficie entera. El Deshacer del panel revierte un recorte como cualquier otro paso.

STEP guarda el recorte como los límites de la cara, e IGES como una superficie recortada (entidad 144); ambos lo vuelven a leer.

## Sólidos y booleanos

El grupo **Sólidos** convierte superficies en cuerpos cerrados y los combina. Un sólido aquí es un conjunto de superficies del panel que juntas cierran un volumen; sus caras siguen siendo superficies NURBS exactas con sus recortes.

- **Sólido caja**, **Sólido cilindro** y **Sólido esfera** crean uno a partir de tamaños escritos (en mm): una caja de seis caras planas, un cilindro con un lado redondo y dos extremos planos recortados al círculo, una esfera de una superficie revolucionada.
- **Sólido desde superficies** agrupa superficies que hiciste vos. Elegí algunas, o ninguna para usar todas las superficies mostradas que todavía no están en un sólido. Se cosen dentro de la tolerancia: si no cierran, no cambia nada y el panel dice cuántos bordes quedan abiertos y qué tan cerca deben encontrarse.
- **Unión**, **Restar** (el segundo sólido se quita del primero) e **Intersectar** (solo lo que comparten ambos) toman dos sólidos: hacé clic en una cara de cada uno en la vista, o emboguejy **Elegir** en la lista **Sólidos**. Marcá **Conservar los dos sólidos** para dejarlos al lado del resultado.

Un booleano conserva cada cara en su superficie exacta y la corta con nuevos contornos de recorte a lo largo de la intersección. La línea de resultado da los números medidos: cuánto tuvieron que moverse los puntos del motor de sólidos para quedar sobre las superficies exactas (nunca más que la tolerancia), qué tan cerca están los puntos de intersección de ambas superficies (normalmente unas pocas millonésimas de milímetro), el volumen, y si las caras nuevas vuelven a cerrar cuando se cosen de nuevo desde sus superficies exactas. Los volúmenes se miden sobre triángulos dentro de la tolerancia (0,05 mm salvo que pongas otra), así que el volumen de una esfera o un cilindro sale un poco menor que el exacto: una tolerancia más chica se acerca más. Un booleano que no se puede hacer limpio (los sólidos no comparten nada, un contorno se cruzaría a sí mismo) se rechaza con mensaje y no cambia nada. Un booleano es un paso del **Deshacer** del panel.

En la lista **Sólidos**, **Desagrupar** conserva las caras como superficies simples; el cesto quita el sólido y sus caras.

## Redondeos y engrosamiento

**Redondeo entre caras** redondea el borde donde se encuentran dos caras de un mismo sólido: elegí las dos caras (en la vista, o con **Elegir** en la lista), escribí el **radio** y, para un radio que cambia a lo largo del borde, el **radio en el extremo** (0 mantiene un solo radio). Una bola de ese radio rueda por el borde tocando ambas caras; el redondeo es el arco circular exacto que queda en cada punto, unido en una sola superficie, y las dos caras se recortan donde la bola las toca. Un borde exterior pierde material; una esquina interior gana. La línea de resultado dice lo medido: qué tan lejos está la superficie de redondeo de la bola rodante entre los puntos con que se construyó (se agregan puntos hasta que esté dentro de un cuarto de la tolerancia), el mayor ángulo entre el redondeo y cada cara a lo largo de las líneas de contacto, y los mismos números que una Unión. Un radio que no entra (la bola se saldría de una cara, o una cara se curva más cerrada que el radio) se rechaza nombrando la cara, y no cambia nada.

**Redondear varios bordes** redondea muchos bordes en un solo paso: elegí las dos caras del primer borde, después las dos caras del siguiente, y así (una cara puede estar en varios pares, por ejemplo la cara superior de una caja en cuatro de ellos); todos los bordes reciben el radio que escribas. Cada redondeo se calcula sobre el sólido tal como estaba, y después se aplican uno tras otro, así que el orden no importa. Donde dos bordes redondeados se encuentran en una esquina cuyos otros bordes siguen agudos, los dos redondeos se juntan a lo largo de su curva de intersección (un pliegue). Donde tres bordes exteriores redondeados de tres caras planas que forman escuadra se encuentran con un radio, la esquina es un **parche de esfera** tangente a los tres redondeos (desmarcá **Esquinas** para obtener la esquina con pliegue); un borde debe medir al menos el doble del radio en los extremos que son esas esquinas. La línea de resultado dice cuántos bordes se redondearon y cómo salieron las esquinas. Los bordes interiores también se pueden redondear juntos, pero un resultado que no vuelve a cerrar solo se informa (la línea lo dice), así que revisalo.

**Engrosar en un sólido** le da espesor a una superficie: elegila, escribí el **espesor** y marcá **Otro lado** para crecer hacia el otro lado. La cara desplazada se ajusta a la superficie y se mide contra ella (la línea de resultado da la mayor diferencia con el espesor); las paredes siguen cada borde y cada contorno de recorte. Si la superficie se curva más cerrada que el espesor de ese lado, o si otra parte de ella queda más cerca que el espesor, se rechaza nombrando la superficie y el lugar, y no cambia nada.

## Hornear un sólido en la pieza

**Hornear** (en la barra de Superficies), o **Hornear en la pieza** en la lista **Sólidos**, convierte el sólido en un cuerpo de la pieza, igual que un STL abierto se vuelve uno: elegí el sólido, si se **agrega** a la pieza, se **resta** de ella o se **intersecta** con ella, y la tolerancia (qué tan lejos pueden estar los triángulos de las superficies exactas). Es un paso del Deshacer de la pieza y aparece en la lista de features como una importación con el nombre del sólido. La pieza conserva los triángulos, así que se abre y se reconstruye sin las superficies; el sólido exacto queda en Superficies, así que podés hornearlo de nuevo después de un cambio.

## Archivos

Exportá **STEP** (AP242) o **IGES** con las curvas y superficies exactamente como están (curvas y superficies B-spline, nada convertido en triángulos). Cada superficie es su propia cara, con su recorte; un sólido se escribe como una cáscara cerrada, con cada borde compartido por sus dos caras, como esperan otros programas CAD (la línea de estado dice cuántos sólidos salieron así). En IGES el mismo sólido es un B-rep de sólido manifold (entidad 186 sobre cáscara cerrada 514, caras 510, lazos 508, una lista de bordes 504 y una lista de vértices 502); un sólido cuyas caras no se emparejan borde por borde se escribe como caras separadas, y la línea lo dice. **Importar…** lee un sólido así de vuelta como sólido, desde STEP y desde IGES.

## Líneas de casco suaves

**Suavizar** (en la barra de Superficies) mide cada curva en su forma exacta (puntos de inflexión, donde cambia de doblarse a un lado al otro; la mayor curvatura; saltos de curvatura en sus nudos; y su aspereza), y reconstruye las que tienen una inflexión o un salto con la menor cantidad de puntos de control que se mantenga dentro de la tolerancia que des y no agregue inflexiones. Dibujá las cuadernas, líneas de flotación y butoques como curvas, suavizalas, y después **Loft** el casco a través de las cuadernas y revisalo con **Cebra**. Las curvas no suaves también aparecen en **Problemas** con una solución **Suavizar esta curva**. Una línea que debe cambiar de dirección (una sección en S) conserva esa inflexión. El desplazamiento, los centros y los brazos de adrizamiento del casco salen de la pieza sólida: ver la herramienta de hidrostática.

## Superficies desde un escaneo (ingeniería inversa)

Abrí la pieza que tiene la malla escaneada (un STL abierto o un cuerpo horneado), elegí **Superficies** en la casilla **Workspace**, y en el grupo **Escaneo** elegí **Ajustar superficies al escaneo**; la malla construida de la pieza es el escaneo. La herramienta busca **planos**, **cilindros**, **esferas** y **conos** (las superficies exactas de las que se hace una pieza mecanizada; cada fila muestra el radio o semiángulo que encontró), encuentra **redondeos** (bordes y esquinas redondeadas: un cilindro o esfera pequeño que entra tangente en dos o más caras, mostrado con su radio y las caras que une), **redondeos de borde** (un toro: el borde redondeado donde una cara plana se encuentra con un cilindro o cono, mostrado con su radio y el radio de su anillo) y **redondeos variables** (un borde redondeado cuyo radio cambia a lo largo, mostrado con el radio en cada extremo), ajusta **un parche libre** a una pieza suave y poco curvada, y corta cada cara al contorno de la parte del escaneo de donde salió, así los agujeros y las esquinas se conservan. Opciones: la **tolerancia** (qué tan lejos, en mm, puede estar un punto del escaneo de un plano o cilindro y seguir perteneciendo a él, y el objetivo para un parche libre), la **pieza más chica** (una fracción del área de superficie) y las **más caras**. El mismo escaneo y las mismas opciones dan siempre las mismas caras.

El resultado es una tabla, una fila por cara: su tipo, de cuántos triángulos salió, y el error **medido desde el escaneo hasta la cara** (rms, el mayor, y la proporción de puntos dentro de la tolerancia). Los puntos medidos son los vértices del escaneo y el centro de cada triángulo. El error no se mide en sentido inverso (de la cara al escaneo), así que una cara que se extiende más allá del escaneo no se vería. La nota bajo la tabla dice también cuánta área era demasiado chica para ajustarse. En la vista, los puntos del escaneo se colorean según su **mapa de desviación**: azul sobre la cara, verde a mitad de la tolerancia, rojo en la tolerancia o más (desmarcá **Mostrar el mapa de desviación** para ocultarlo). Los trozos que se doblan sobre sí mismos (un tubo cerrado ajustado con parches libres, por ejemplo) se listan como no ajustados, y nunca se fuerzan a una sola superficie.

**Coser las superficies a un sólido** cose en un solo sólido cerrado cada superficie mostrada que no esté en un sólido. Las caras de un escaneo se encuentran solo dentro del propio error del escaneo, así que prueba la menor distancia de unión que cierre (nunca más que la **distancia de costura** que pongas) y se rechaza con mensaje cuando las caras no cierran. Nunca tapa un hueco. Una caja con bordes redondeados se cose si sus redondeos se encontraron como caras propias; la distancia de unión que cerró aparece en el resultado. El sólido luego funciona con Unión, Restar, Intersectar y **Hornear en la pieza**.

Lo que no hace: un **redondeo de borde** (un toro) solo se busca alrededor del eje de un cilindro o cono ya encontrado, y un **redondeo variable** solo a lo largo de un borde bastante recto (sus secciones se cortan a escuadra en una dirección); en otros lugares salen como parches libres si son suaves, y si no quedan fuera; esferas, conos y redondeos se encuentran por muestreo aleatorio, así que uno muy chico (unos pocos triángulos) puede pasar desapercibido; el mapa de desviación muestra la distancia del escaneo a las caras, no al revés; los escaneos muy grandes (más de 300.000 triángulos) se rechazan aquí. Las caras de un cilindro de vuelta completa se cortan alrededor de los agujeros, con la costura puesta donde no hay agujero. Verificá cada cara contra tu escaneo antes de confiar en ella.

## Todavía no construido

Redondear bordes que se encuentran en una esquina de caras curvas o con radios distintos (mezcla de vértice); un redondeo entre caras que no se tocan; un redondeo interior que termina en una cara inclinada o curva; booleanos y redondeos calculados sobre las superficies sin triángulos (acá el motor de sólidos trabaja sobre triángulos dentro de la tolerancia, y cada punto se vuelve a poner sobre las superficies exactas); un cuerpo horneado que sigue a las superficies cuando cambian; recortar una superficie con otra superficie fuera de un booleano; rellenar agujeros con más de cuatro lados; proyectar curvas sobre superficies.
