---
title: Extruír unha protuberancia e cortar a través dela
summary: Converta un esbozo nun sólido con Extruír, estableza profundidades cegas, de plano medio, ata unha cara ou de dúas direccións, unha conicidade ou un contorno do esbozo, e logo esbose sobre unha cara e use Cortar para facer unha cavidade ou unha ranura pasante.
keywords: extruír, protuberancia, protuberancia extruída, cortar, corte extruído, cavidade, atravesar todo, cego, plano medio, inverter, profundidade, cortar-extruír, protuberancia-extruír, almofada, ata unha cara, ata o seguinte, ata un vértice, desprazamento desde a superficie, dirección 2, dúas direccións, desmoldeo ao extruír, conicidade, contorno, rexión, contornos seleccionados
from: 3b13ff10
---

{{ui:Extruír}} empurra o perfil pechado dun esbozo recto para fóra do seu plano para crear material. {{ui:Cortar}} fai o mesmo pero elimina material. Ambos son o mesmo elemento por debaixo; máis tarde pode cambiar un ao outro.

## Extruír unha protuberancia

1. Debuxe un perfil pechado e peche o esbozo (consulte [Debuxar o primeiro esbozo](topic:sketch-basics)). Seguirá seleccionado.
2. Escolla {{ui:Extruír}}.

Aparece un sólido de 10 mm, "Extrude1" engádese ao historial co seu esbozo sangrado debaixo, e a barra de estado indica "Extrude1 engadido. Cambie os seus valores no panel dereito."

**Que esbozo se usa:** o esbozo que acaba de pechar, ou o esbozo seleccionado no historial. Se non hai nada seleccionado, PartCraft toma o esbozo máis recente que aínda non usa ningún elemento. Se non hai ningún: "Cree primeiro un esbozo: escolla un plano, Esbozo, debuxe un perfil pechado, Saír."

### Estableza a profundidade e a dirección

No panel dereito:

| Axuste | Opcións | Predeterminado |
|---|---|---|
| **Operación** | Protuberancia (engade material), Cortar (elimina material), Intersección (conserva a superposición), Corpo novo (aínda non se constrúe nesta versión: necesita un núcleo exacto) | Protuberancia |
| **Fin** | Cego (unha profundidade), Plano medio (en ambos sentidos), Atravesar todo, Ata unha cara ou plano, Ata a seguinte cara, Ata un vértice, Desprazamento desde a cara | Cego |
| **Profundidade (mm)** | Calquera tamaño maior que cero (mostrado para Cego e Plano medio) | 10 |
| **Inverter dirección** | Crece para o outro lado do plano do esbozo (non se mostra en Plano medio) | Desactivado |

Escriba un número e prema {{key:Enter}} ou {{key:Tab}}: a peza reconstrúese de inmediato. **Plano medio** pon a metade da profundidade a cada lado do esbozo.

### Ata unha cara, a seguinte cara ou un vértice

Aínda non se constrúe nesta versión: cada final "ata" necesita un núcleo exacto, e a función indica "Extruír ata unha cara, ata a seguinte cara ou ata un vértice: aínda non se constrúe (necesita un núcleo exacto)." Use unha profundidade Cego que mida vostede. Cun núcleo exacto, os finais funcionan así:

- **Ata unha cara ou plano**: **Ata** toma unha cara plana (Seleccionar e logo prema sobre ela) ou un plano de referencia. Unha cara paralela ao esbozo dá unha profundidade exacta; unha inclinada corta o final na pendente. Se a cara está detrás do esbozo: "… Probe Inverter dirección."
- **Ata a seguinte cara**: detense na primeira cara plana do corpo co que se cruza a extrusión (aquí non se admiten caras curvas: así o indica).
- **Ata un vértice**: detense á altura dun vértice (prema preto do final dunha aresta) ou dun elemento de punto.
- **Desprazamento desde a cara**: como Ata unha cara, pero detense **Desprazamento (mm)** antes dela (medido en perpendicular á cara).

### Dúas direccións, conicidade, un contorno

- **Segunda dirección** (Cego): extruí tamén a **Segunda profundidade (mm)** para o outro lado do esbozo.
- **Conicidade (°)**: os lados inclínanse ao avanzar (negativa: para fóra), como un desmoldeo; só nunha dirección. Aínda non se constrúe nesta versión (necesita un núcleo exacto): déixeo en 0.
- **Rexións**: **Seleccionar rexións**, despois prema dentro dos bucles para extruír; só se usan esas rexións (un círculo dentro dun cadrado: prema dentro do círculo para un cilindro, entre eles para unha placa cun orificio). **Todas** volve a todos os bucles.

Debaixo destes, **Cotas do esbozo** lista as cotas de control do esbozo, para que poida cambiar os tamaños do perfil sen abrir o esbozo.

:::note
**Atravesar todo só serve para cortes.** Unha protuberancia con Atravesar todo falla e mostra "Atravesar todo é para cortes. Use unha profundidade para unha protuberancia." Ao pasar un elemento de Cortar de volta a Protuberancia, Atravesar todo cambia a Cego por vostede.
:::

## Cortar unha cavidade

1. Prema a cara plana na que quere cortar. Ilumínase e o panel dereito indica **Cara**.
2. Escolla {{ui:Esbozo sobre esta cara}} (ou {{ui:Esbozo}} na barra de ferramentas).
3. Debuxe o contorno da cavidade, por exemplo un rectángulo, e acótello.
4. Escolla {{ui:Saír}}.
5. Escolla {{ui:Cortar}}. Comeza como **Atravesar todo**: elimina material ao longo de toda a peza.
6. Para unha cavidade, estableza **Fin** en **Cego (unha profundidade)** e escriba a **Profundidade (mm)**.

Un corte entra no material, afastándose da cara onde esbozou. Se a barra de estado indica "Non hai nada que cortar deste lado do esbozo. Probe a outra dirección.", marque **Inverter dirección**.

Un esbozo no fondo da cavidade segue ese fondo: se cambia a profundidade da cavidade, o esbozo móvese con ela.

## Tirar ou empurrar unha cara completa

Para que unha cara sobresaia máis ou se afunda, non precisa debuxar o seu contorno. Prema a cara plana e logo, no panel dereito:

- {{ui:Extruír desde ela}} tira da cara para fóra: PartCraft engade un esbozo sobre a cara co seu contorno (os orificios da cara seguen sendo orificios) e unha extrusión de 10 mm.
- {{ui:Cortar cara a dentro}} empurra a cara para dentro: o mesmo esbozo e un corte ata a metade da peza.

Ambas son un só paso: {{key:Mod+Z}} quita o esbozo e o elemento xuntos. O novo elemento queda seleccionado, así que escriba un número de seguida e prema {{key:Enter}} para a súa profundidade. O contorno cópiase como liñas e arcos fixos: non segue os cambios posteriores da cara. Se unha parte do contorno non se pode copiar (unha curva libre), o esbozo ábrese co que si se puido copiar; remátao, despois escolla {{ui:Saír}} e {{ui:Extruír}} ou {{ui:Cortar}}.

## Perfís con illas

Un esbozo pode conter varios bucles pechados. Os bucles uns ao lado doutros convértense en protuberancias (ou cortes) separadas; un bucle dentro doutro convértese nun orificio que atravesa a protuberancia. Por exemplo, un rectángulo con dous círculos dentro extrúese como unha placa con dous orificios.

Para usar só algúns bucles, selecciónos con **Rexións** (enriba); outro elemento pode usar os outros bucles do mesmo esbozo.

## Editar despois

- Prema "Extrude1" no historial para recuperar os seus axustes.
- Faga dobre clic no seu esbozo (sangrado debaixo) para abrir o esbozo; péchao para reconstruír.
- Consulte [Cambiar unha peza mediante o seu historial](topic:edit-history) para suprimir, retroceder, reordenar e eliminar.

## Mensaxes habituais

| Mensaxe | Que facer |
|---|---|
| "O esbozo non ten un perfil pechado para extruír." | O esbozo non ten un bucle pechado de liñas sólidas. Peche os espazos, ou volva activar as liñas de construción con {{key:Q}} |
| "O perfil está aberto: un extremo en (x, y) non está unido a nada." | Abra o esbozo e una ese extremo á liña seguinte |
| "Aínda non hai nada que cortar." | Un corte necesita un sólido que cortar. Cree primeiro unha protuberancia |
| "Despois disto non queda nada da peza." | O corte eliminou todo. Revise o seu tamaño e dirección |

Máis en [Solución de problemas](topic:troubleshooting).
