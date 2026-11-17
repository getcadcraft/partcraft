---
title: Superficies de forma libre (NURBS)
summary: Curvas e superficies suaves xunto á peza (unión de perfís, barrido, redes de curvas, parches de catro bordos, mesturas, recortes), con continuidade G0, G1 e G2 medida sobre as superficies exactas; sólidos con unión, resta e intersección incorporados á peza; vistas cebra e de curvatura; caras axustadas a un escaneo co erro medido; e ficheiros STEP ou IGES. Gardado no ficheiro da peza.
keywords: nurbs, escaneo, enxeñaría inversa, axustar, malla a superficie, nube de puntos, stl, recortar, recortada, furo, cortar, sólido, sólidos, booleana, unión, restar, intersección, diferenza, coser, pechado, fixar, forma libre, superficie, superficies, b-spline, bspline, curva, spline, unión de perfís, barrido, carril, rede, coons, parche, mestura, axustar, continuidade, g0, g1, g2, tanxente, curvatura, cebra, puntos de control, nós, grao, step, iges, clase A, casco, suavizado
from: 64ed5196
---

O espazo de traballo **Superficies** crea curvas e superficies suaves do tipo usado en carrocerías, cascos de barcos e carcasas de produtos: NURBS, as mesmas matemáticas que usan outros modeladores de superficies. Todo se mide sobre as superficies exactas, nunca sobre os triángulos que se ven. Os tamaños están en milímetros, como no resto de PartCraft.

Escolla **Superficies** na caixa **Espazo de traballo**. A barra de ferramentas ten {{ui:Curva}}, {{ui:Unión de perfís}}, {{ui:Barrido}}, {{ui:Axustar}} e {{ui:Cebra}}; cada comando está no panel da dereita. Un comando indica o que aínda necesita: prema curvas ou superficies na vista (perto dun bordo ou dun extremo cando o pida) ou escóllaas na lista; escriba puntos, ou prémaos nas caras da peza (fóra da peza caen no plano do chan), e despois prema Enter.

As curvas e superficies gárdanse no ficheiro da peza xunto ao sólido. Non cambian os elementos da peza: o panel ten o seu propio {{ui:Desfacer}} e {{ui:Refacer}}, un paso por comando.

## Curvas

- **Curva por puntos** pasa por cada punto que prema. **Curva por puntos de control** segue en cambio unha rede de puntos.
- **Inserir nó**, **Subir grao** e **Baixar grao** cambian a forma en que se describe unha curva sen movela (baixar rexéitase cando a curva se movería máis que a tolerancia). **Reconstruír curva** lle dá un novo número de puntos de control e indica canto se moveu.
- **Axustar curva** fai que o extremo dunha curva encontre o doutra con G0 (tocándose), G1 (mesma dirección) ou G2 (ademais mesma curvatura). **Mesturar curva** engade unha curva nova entre dous extremos, G1 ou G2.

## Superficies

- **Unión de perfís** por dúas ou máis curvas, **Superficie reglada** entre dúas, **Extruír curva**, **Revolucionar curva**.
- **Barrido por un carril** leva un perfil ao longo dun camiño sen torcelo; **Barrido por dous carrís** mantén os extremos do perfil en ambos carrís. Os barridos están axustados: o resultado indica canto se separou do barrido verdadeiro.
- **Superficie desde unha rede de curvas** pasa por unha cuadrícula de curvas (cada unha cruza cada unha das outras unha vez). **Parche desde catro bordos** cubre catro curvas que se atopan nas súas esquinas.
- **Axustar superficie** fai que un bordo de superficie encontre o dun veciño con G0, G1 ou G2; **Mesturar superficie** engade unha superficie entre dous bordos.
- **Superficie desprazada**, **Estender superficie** (a superficie continúa como ía), **Reconstruír superficie**.

## Comprobar a calidade

A táboa **Bordos compartidos** lista cada bordo que dúas superficies comparten, co oco (mm), o ángulo entre elas (°) e o salto de curvatura (1/mm), e se iso o fai G0, G1 ou G2. Un bordo peor do que pediu aparece en **Problemas** cunha corrección **Axustar**. As raias de **Cebra** e as cores de curvatura veñen da superficie exacta: raias que atravesan un bordo sen romperse significan G1; raias que ademais manteñen o seu ancho significan G2.

G0–G2 mídense en 33 puntos por bordo. **G3 e a calidade «clase A» non se miden** e non se afirma nada sobre elas.

## Recortar unha superficie

O grupo **Recorte** corta unha superficie sen cambiar a súa forma: a superficie conserva todos os seus puntos de control, e só se mostra, conta e escribe a parte dentro do contorno. **Recortar a un rectángulo** e **Recortar cun círculo** traballan sobre unha fracción (0 a 1) da superficie en cada dirección, así que non precisan escoller na vista; **Recortar por unha curva** toma unha curva pechada que está sobre a superficie (proxéctase sobre ela, e rexéitase con palabras cando está aberta ou a máis de tolerancia de distancia). Marque **Cortar un furo** para quitar o interior do contorno; déixeo desmarcado para manter só o interior. Unha superficie pode ter un contorno conservado e cantos furos queira; un contorno que cruza outro rexéitase. **Quitar o recorte** mostra de novo a superficie completa. O Desfacer do panel desfai un recorte como calquera outro paso.

STEP leva o recorte como os límites da cara, e IGES como unha superficie recortada (entidade 144); ambos o len de volta.

## Sólidos e operacións booleanas

O grupo **Sólidos** convirte superficies en corpos pechados e combínaos. Aquí un sólido é un conxunto das superficies do panel que xuntas pechan un volume; as súas caras seguen sendo superficies NURBS exactas, cos seus recortes.

- **Sólido caixa**, **Sólido cilindro** e **Sólido esfera** créano a partir de tamaños escritos (en mm): unha caixa de seis caras planas, un cilindro dunha cara lateral redonda e dous extremos planos recortados ao círculo, unha esfera dunha superficie de revolución.
- **Sólido desde superficies** agrupa as superficies que vostede fixo. Escóllaas, ou non escolla ningunha para usar todas as superficies visibles que aínda non están nun sólido. Cósense dentro da tolerancia: se non pechan, nada cambia e o panel indica cantos bordos quedan abertos e a que distancia deben encontrarse.
- **Unión**, **Restar** (o segundo sólido quítase do primeiro) e **Interseccion** (só o que comparten ambos) toman dous sólidos: prema unha cara de cada un na vista, ou prema **Escoller** na lista **Sólidos**. Marque **Manter os dous sólidos** para deixalos xunto ao resultado.

Cunha operación booleana, cada cara conserva a súa superficie exacta e recórtase con novos contornos ao longo da intersección. A liña de resultado dá os números medidos: canto tiveron que moverse os puntos do motor de sólidos para quedar sobre as superficies exactas (nunca máis que a tolerancia), que tan próximos están os puntos de intersección a ambas superficies (case sempre unhas millonésimas de milímetro), o volume, e se as novas caras pechan de novo cando se cosen outra vez desde as súas superficies exactas. Os volumes mídense sobre triángulos dentro da tolerancia (0,05 mm salvo que fixe outra), así que o volume dunha esfera ou dun cilindro sae un pouco menor que o exacto: unha tolerancia máis pequena achégao. Unha operación que non se pode facer limpa (os sólidos non comparten nada, un contorno se cortaría a si mesmo) rexéitase con palabras e non cambia nada. Unha operación booleana é un paso do Desfacer do panel.

Na lista **Sólidos**, **Desagrupar** conserva as caras como superficies simples; o botón da papeleira elimina o sólido e as súas caras.

## Redondeos e engrosamento

**Redondeo entre caras** redondea o bordo onde se atopan dúas caras dun mesmo sólido: escolla as dúas caras (na vista, ou con **Escoller** na lista), escriba o **raio** e, para un raio que cambia ao longo do bordo, o **raio no extremo** (0 mantén un só raio). Un balón dese raio rólase polo bordo tocando ambas as caras; o redondeo é o arco circular exacto que deixa en cada punto, unido nunha superficie, e as dúas caras recórtanse onde o balón as toca. Un bordo exterior perde material, unha esquina interior gaña material. A liña de resultado indica o medido: canto se separa a superficie do redondeo do balón que rola entre os puntos desde os que se construíu (engádense puntos ata que estea dentro dun cuarto da tolerancia), o maior ángulo entre o redondeo e cada cara ao longo das liñas de contacto, e os mesmos números que unha unión. Un raio que non cabe (o balón saíría dunha cara, ou unha cara se curvaría máis que o raio) rexéitase, indicando a cara, e non cambia nada.

**Redondear varios bordos** redondea moitos bordos nun só paso: escolla as dúas caras do primeiro bordo, despois as dúas caras do seguinte, e así por diante (unha cara pode estar en varios pares, por exemplo a cara superior dunha caixa en catro deles); todos os bordos reciben o raio que escriba. Cada redondeo calcúlase sobre o sólido tal como estaba, e despois córtanse un tras outro, así que a orde non importa. Onde dous bordos redondeados se atopan nunha esquina cuxas outras arestas quedan vivas, os dous redondeos encóntranse ao longo da súa curva de intersección (unha dobra). Onde tres bordos exteriores redondeados de tres caras planas que forman ángulo recto se atopan cun mesmo raio, a esquina é un **parche esférico** tanxente aos tres redondeos (desmarque **Esquinas** para obter a esquina con dobra); un bordo debe medir polo menos o dobre do raio nos dous extremos cando ambos son esquinas deste tipo. A liña de resultado indica cantos bordos se redondearon e como saíron as esquinas. Os bordos interiores tamén se poden redondear xuntos, pero un resultado que non volve pechar só se informa (a liña di iso), así que comprébeo.

**Engrosar nun sólido** dálle grosor a unha superficie: escóllaa, escriba o **grosor**, e marque **Outro lado** para crecela no outro sentido. A cara desprazada axústase á superficie e mídese contra ela (a liña de resultado dá a maior diferenza respecto ao grosor); as paredes seguen cada bordo e cada contorno de recorte. Se a superficie se curva máis axustada que o grosor por ese lado, ou outra parte dela queda máis preto que o grosor, rexéitase, indicando a superficie e o lugar, e non cambia nada.

## Fixar un sólido na peza

**Fixar** (na barra de Superficies), ou **Fixar na peza** na lista **Sólidos**, convirte o sólido nun corpo da peza, como se converte unha malla STL aberta: escolla o sólido, se se **engade** á peza, se se **corta** dela ou se se **intersecta** con ela, e a tolerancia (a distancia máxima entre os triángulos e as superficies exactas). É un paso do Desfacer da peza e aparece na lista de elementos como unha importación co nome do sólido. A peza conserva os triángulos, así que se abre e reconstrúese sen as superficies; o sólido exacto segue en Superficies, polo que pode fixalo de novo despois dun cambio.

## Ficheiros

Exporte **STEP** (AP242) ou **IGES** coas curvas e superficies exactamente como están (curvas e superficies B-spline, nada convertido en triángulos). Cada superficie é a súa propia cara, co seu recorte; un sólido escríbese como unha casca pechada, cada bordo compartido polas súas dúas caras como esperan outros programas CAD (a liña de estado indica cantos sólidos saíron así). En IGES o mesmo sólido é un B-rep sólido variedade (entidade 186 sobre a casca pechada 514, caras 510, lazos 508, unha lista de bordos 504 e unha lista de vértices 502); un sólido cuxas caras non se emparellan aresta a aresta escríbese como caras separadas, e a liña dino. **Importar…** lee de volta ese sólido como sólido, tanto desde STEP como desde IGES.

## Cascos suaves

**Suavizar** (na barra de Superficies) mide cada curva na súa forma exacta — puntos de inflexión (onde cambia de dobrar nun sentido ao outro), a maior curvatura, os saltos de curvatura nos seus nós e a súa aspereza — e reconstrúe as que teñen unha inflexión ou un salto cos menos puntos de control que se manteñan dentro da tolerancia que indique e non engadan ningunha inflexión. Debuxe as cadernas, liñas de flotación e buttocks como curvas, suavícelas, despois {{ui:Unión de perfís}} do casco sobre as cadernas e comprobe con {{ui:Cebra}}. As curvas non suaves tamén aparecen en **Problemas** cunha corrección **Suavizar esta curva**. Unha liña que debe cambiar de dirección (unha sección en S) conserva esa inflexión. O desprazamento, centros e brazos adrizantes do casco veñen do sólido da peza: ver a ferramenta de hidrostática.

## Superficies dun escaneo (enxeñaría inversa)

Abra a peza que contén a malla escaneada (un STL aberto ou un corpo fixado), escolla **Superficies** na caixa **Espazo de traballo**, e no grupo **Escaneo** escolla **Axustar superficies ao escaneo**; a malla construída da peza é o escaneo. A ferramenta busca **planos**, **cilindros**, **esferas** e **conos** (as superficies exactas das que se compón unha peza mecanizada; cada fila mostra o raio ou semiángulo que atopou), atopa **redondeos** (bordos e esquinas redondeadas: un pequeno cilindro ou esfera que vai tanxente a dúas ou máis caras, mostrado co seu raio e as caras que une), **redondeos de aro** (un toro: o bordo redondeado onde unha cara plana atopa un cilindro ou cono, mostrado co seu raio e o raio do aro) e **redondeos variables** (un bordo redondeado cuxo raio cambia ao longo del, mostrado co raio en cada extremo), axusta **un parche de forma libre** a unha peza suave e lixeiramente curva, e recorta cada cara ata o contorno da parte do escaneo de onde procede, así que os furos e as esquinas quedan. Opcións: a **tolerancia** (en mm, a distancia máxima que un punto do escaneo pode estar dun plano ou cilindro e aínda pertencerlle, e o obxectivo para un parche de forma libre), a **peza máis pequena** (unha fracción da área da superficie) e as **máis caras**. O mesmo escaneo e as mesmas opcións dan sempre as mesmas caras.

O resultado é unha táboa, unha fila por cara: o seu tipo, cantos triángulos procede, e o erro **medido desde o escaneo ata a cara** (rms, o maior, e a fracción de puntos dentro da tolerancia). Os puntos medidos son os vértices do escaneo e o centro de cada triángulo. O erro non se mide ao revés (cara ata escaneo), así que unha cara que se estende máis alá do escaneo non se vería. A nota baixo a táboa indica tamén canta área era pequena de máis para axustarse. Na vista, os puntos do escaneo córanse segundo o seu **mapa de desviación**: azul sobre a cara, verde a medio camiño da tolerancia, vermello na tolerancia ou máis (desmarque **Mostrar o mapa de desviación** para ocultalo). As pezas que se dobran sobre si mesmas (un tubo pechado axustado con parches de forma libre, por exemplo) indícanse como non axustadas, e nunca se obrigan a unha superficie.

**Coser as superficies nun sólido** cose nun só sólido pechado todas as superficies visibles que non están nun sólido. As caras do escaneo só se tocan dentro do propio erro do escaneo, así que proba a menor distancia de unión que pecha (nunca máis que a **distancia de costura** que fixe) e rexeita con palabras cando as caras non pechan. Nunca tapa unha fenda. Unha caixa con bordos redondeados cóseseas cando os seus redondeos se atoparon como caras propias; a distancia de unión que pechou figura no resultado. O sólido funciona entón con Unión, Restar, Interseccion e **Fixar na peza**.

O que non fai: un **redondeo de aro** (un toro) búscase só ao redor do eixe dun cilindro ou cono xa atopado, e un **redondeo variable** só ao longo dun bordo bastante recto (as súas seccións córtanse a escuadra nunha dirección); noutro lugar saen como parches de forma libre cando son suaves o suficiente e déixanse fóra no resto; as esferas, conos e redondeos atópanse por mostraxe aleatoria, así que un moi pequeno (uns poucos triángulos) pode pasarse por alto; o mapa de desviación mostra a distancia desde o escaneo ata as caras, non ao revés; os escaneos moi grandes (máis de 300.000 triángulos) rexéitanse aquí. As caras dun cilindro de volta completa recórtanse ao redor dos furos, e a costura colócase onde non hai furo. Comprobe cada cara contra o seu escaneo antes de confiar nela.

## Aínda non dispoñible

Redondear bordos que se atopan nunha esquina de caras curvas ou con raios distintos (unha mestura de vértice), un redondeo entre caras que non se tocan, un redondeo interior que termina nunha cara inclinada ou curva, operacións booleanas e redondeos calculados sobre as superficies sen triángulos (aquí o motor de sólidos traballa con triángulos dentro da tolerancia, e logo cada punto volve sobre as superficies exactas), un corpo fixado que segue as superficies cando cambian, recortar unha superficie con outra superficie fóra dunha operación booleana, encher furos de máis de catro lados, proxectar curvas sobre superficies.
