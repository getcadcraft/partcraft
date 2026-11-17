---
title: Medir distancias, ángulos e masa
summary: Prema dous elementos na vista para a distancia mínima, o ángulo e ΔX ΔY ΔZ; lea a lonxitude dunha aresta, o diámetro dun burato, a superficie dunha cara ou as coordenadas dun punto; obteña volume, masa, centro de masa e inercia dunha peza ou dunha montaxe.
keywords: medir, distancia, distancia mínima, ángulo, lonxitude, raio, diámetro, superficie, coordenadas, delta, inspeccionar, propiedades másicas, masa, peso, centro de masa, inercia, momento de inercia, densidade, material
from: 20bda0b7
---

**Medir** funciona sobre o modelo en todos os espazos de traballo (Deseño, Forma, Simulación, Xerativo, Fabricación) e nunha montaxe. Está no menú {{ui:Views}} do grupo **Vista**, ou prema {{key:M}}. Abre unha tarxeta enriba á esquerda da vista.

## Medir unha cousa

Faga clic nun vértice, nunha aresta ou nunha cara. A tarxeta mostra:

- **Un punto** (un vértice, o punto medio dunha aresta ou o centro dun círculo): a súa X, Y, Z.
- **Unha aresta**: recta, circular ou curva, e a súa lonxitude; para un círculo tamén o raio, o diámetro e o centro.
- **Unha cara**: plana, cilíndrica, cónica e así por diante, e a súa superficie; o vector normal dunha cara plana; o raio e o diámetro dun cilindro (o tamaño dun burato). As superficies son das facetas que constrúe o núcleo de malla.
- **Todo o corpo**: manteña premido {{key:Shift}} e faga clic na peza. Obtén o seu volume, superficie, masa e inercia (ver abaixo).

O punteiro axústase aos vértices, aos puntos medios das arestas e aos centros dos círculos a menos de 10 píxeles; un pequeno punto azul mostra o axuste antes de facer clic. Para escoller o centro dun burato, sitúe o punteiro no medio do burato; para escoller o seu bordo (o círculo), sitúe o punteiro no bordo.

## Medir entre dúas cousas

Faga clic noutro elemento. A tarxeta engade:

- **Distancia mínima** e os dous puntos máis próximos, debuxados na vista cunha liña entre eles.
- **ΔX, ΔY, ΔZ** desde o primeiro punto máis próximo ata o segundo.
- **Ángulo** entre dúas caras planas (entre os seus normais, 0–180°), entre dúas aresta ou eixes rectos (0–90°), ou entre unha aresta e unha cara.
- **Espazo entre planos** para dúas caras planas paralelas, **Centro a centro** para dous círculos ou buratos, **Eixo a eixo** para dous buratos ou cilindros paralelos.

Un terceiro clic inicia un novo par. {{key:Esc}} limpa as seleccións; outro {{key:Esc}} (ou {{ui:Close}}) pecha Medir. {{ui:Copy}} pon os resultados no portapapeis como texto separado por tabuladores, listo para pegar nunha folla de cálculo.

### Como de exacto é

PartCraft constrúe a peza co núcleo de malla, así que as distancias calcúlanse sobre as facetas da malla, e a tarxeta indica **aproximado: sobre as facetas**: correcto para caras planas e entre vértices, lixeiramente desviado para as curvas. Un axuste **Curvas** máis fino achégaas. Medir exactamente sobre as superficies reais necesita un núcleo exacto: aínda non dispoñible nesta versión.

## Propiedades másicas

Escolla {{ui:Mass properties}} na tarxeta ou no menú {{ui:Views}}. Nunha peza, escolla un **Material** na tarxeta (aceiro, aluminio, plásticos e outros coas súas densidades habituais). Nunha montaxe, cada peza usa o material fixado nas súas propiedades (seleccione a peza, despois **Material**), e o resultado é para todas as pezas en conxunto.

A tarxeta mostra masa, volume, superficie, centro de masa, o tensor de inercia (Ixx, Iyy, Izz e os produtos Ixy, Iyz, Ixz, en kg·mm², arredor do centro de masa segundo os eixos do mundo) e os momentos principais. Sen material mostra o mesmo por unidade de densidade (mm⁵) e sen masa.

Os números son exactos para o sólido teselado que constrúe o núcleo de malla (as caras curvas como facetas), así que unha peza redonda sae un pouco baixa, e a tarxeta indícao. As densidades dos materiais son valores típicos de táboas de referencia; unha aliaxe ou calidade real pode diferir en algúns por cento.

## Límites

- Os axustes poden atopar un punto escondido detrás doutra xeometría; comprobe que a tarxeta mostra o que quería.
- Medir péchase cando abre un esbozo ou a folla de debuxo, ou cambia de espazo de traballo.
