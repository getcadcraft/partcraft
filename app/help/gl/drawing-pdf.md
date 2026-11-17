---
title: Facer un debuxo con vistas, unha sección e GD&T
summary: Abrir a folla de debuxo, engadir unha sección e unha vista de detalle, colocar referencias, marcos de control de forma e símbolos de acabado superficial, escoller o tamaño da folla, encher o cadro do título e as revisións, e exportar a folla como PDF.
keywords: táboa de furados, gráfico de furados, posicións dos furos, etiquetas, debuxo, debuxo 2D, folla, tamaño da folla, a4, a3, a2, a1, a0, ansi, cadro do título, revisión, bloque de revisións, número do debuxo, material, pdf, vistas, ortográfica, terceiro diedro, isométrica, vista en sección, vista de detalle, gd&t, referencia, marco de control de forma, tolerancia, posición, planitude, acabado superficial, rugosidade, cadro do título, imprimir
from: 39e944c0
---

PartCraft fai unha folla de debuxo a partir da peza: vistas frontal, superior e dereita en proxección de terceiro diedro, unha vista isométrica, dimensións xerais e un cadro do título nunha folla de A4 a A0 ou ANSI A a E. Por riba, pode engadir unha sección, unha vista de detalle e símbolos GD&T. A folla actualízase cando cambia a peza, e os seus axustes gárdanse no ficheiro da peza.

## Abrir a folla de debuxo

1. Constrúa a peza. (Sen nada construído: «Constrúa primeiro un sólido e despois faga o seu debuxo.»)
2. Escolla {{ui:Debuxo}} na barra de ferramentas.

A vista 3D substitúese pola folla. A barra de ferramentas mostra {{ui:Referencia}}, {{ui:Marco}}, {{ui:Acabado}}, {{ui:Detalle}}, {{ui:PDF}} e {{ui:Volver}}, e o panel dereito titúlase **Debuxo**. A barra de estado indica como se fixeron as vistas: «Debuxo (as curvas debúxanse como facetas). Referencia, Marco e Acabado colocan GD&T nunha vista; o panel fixa unha sección e unha vista de detalle.» As vistas debúxanse a partir das facetas do núcleo de malla, así que os bordos redondos son pezas rectas curtas; os arcos verdadeiros necesitan un núcleo exacto, que esta versión non ten.

Para moverse pola folla: xire a roda para facer zoom, arrastre co botón dereito ou co central para desprazar, e prema {{key:F}} para axustar a folla á vista. Coa folla enfocada, {{key:Plus}} e {{key:Minus}} fan zoom, e {{key:Shift}} cas teclas de frecha despraza.

Escolla {{ui:Volver}}, {{ui:Volver ao modelo}} ou prema {{key:Esc}} (sen nada seleccionado e sen ferramenta activa) para volver ao modelo 3D.

## Que hai na folla

- **A folla que escolla**, en horizontal (A3 salvo que escolla outra), cunha beira e un **cadro do título**: título, empresa, número do debuxo, revisión, material, debuxado / comprobado / aprobado por, data, escala, tamaño da folla, «Unidades: milímetros · Proxección de terceiro diedro», e se as vistas son exactas ou facetadas.
- Un **bloque de revisións** na esquina superior dereita, cando engada unha revisión.
- **Vistas frontal, superior e dereita**: a vista superior enriba da frontal, e a vista dereita á súa dereita. Os bordos ocultos en trazos.
- Unha **vista isométrica** onde haxa espazo.
- **Dimensións xerais**: ancho e alto na vista frontal, fondo na vista superior.
- Unha **escala** para as vistas principais da serie ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), escollida para que caian.

## Escoller o tamaño da folla

Sobre a folla de debuxo, sen nada seleccionado, escolla {{ui:Folla}} no panel dereito: **A4, A3, A2, A1, A0** (ISO 216) ou **ANSI A, B, C, D, E** (11 × 8.5 a 44 × 34 polgadas). As vistas recóllocanse á maior escala ISO que caiba, así que unha folla máis grande pode mostrar a peza máis grande.

## Encher o cadro do título

Os campos do **cadro do título** do panel dereito vanse directamente á folla: {{ui:Título}}, {{ui:Nº do debuxo}}, {{ui:Revisión}}, {{ui:Empresa}}, {{ui:Debuxado por}}, {{ui:Comprobado por}}, {{ui:Aprobado por}}, {{ui:Data}} (ano-mes-día), {{ui:Tolerancia xeral}} e {{ui:Acabado}} (os dous últimos imprímense xusto enriba do cadro do título). Escriba nunha caixa e prema {{key:Enter}} ou faga clic fóra. Unha caixa baleira deixa a súa celda en branco, salvo:

- **Título** mostra o nome da peza ata que escriba un.
- **Data** mostra a data de hoxe ata que escriba unha.
- **Revisión** mostra a revisión máis recente da lista ata que escriba unha.

**Material** vén da peza: faga clic en espazo baleiro do modelo e despois escolla {{ui:Material}} no panel Peza. O mesmo material dá ás propiedades de masa de Medir a súa densidade.

## Engadir revisións

Baixo **Revisións**, faga clic en {{ui:Engadir revisión}}. Cada nova fila toma a seguinte letra (A, B, C …; despois de Z vén AA) e a data de hoxe. Escriba o que cambiou e quen fixo o cambio. {{ui:Eliminar}} elimina unha fila. O bloque de revisións da esquina superior dereita da folla enumera as revisións, da máis antiga á máis recente, ata 20.

O tamaño da folla, o cadro do título, as revisións e o material gárdanse no ficheiro da peza, e cada cambio é un paso de {{ui:Desfacer}}.

## Engadir unha vista de sección

A peza córtase por un plano e o corte raiase. Como as outras vistas, a sección debúxase a partir de facetas, así que os bordos redondos son pezas rectas curtas.

1. No panel dereito, estableza **Sección A-A** a **Da vista frontal**, **Da vista superior** ou **Da vista dereita**.
2. A sección aparece na folla, raiada onde o corte atravesa material, coa liña de corte e as frechas «A» na vista da que se toma.
3. Estableza **Corte en (mm)** para mover o plano de corte. Comeza polo medio da peza.

Estableza **Sección A-A** de novo a **Ningunha** para eliminala.

## Engadir unha vista de detalle

1. Estableza **Detalle B** á vista que se ha ampliar (ou escolla {{ui:Detalle}} na barra de ferramentas).
2. Faga clic no centro da zona a ampliar, nesa vista. Un círculo etiquetado «B» márcaa, e o «Detalle B» ampliado aparece na folla coa súa propia escala, por exemplo «Detalle B (2:1)».
3. Estableza **Radio do detalle (mm)** para o tamaño do círculo e **Escala do detalle** para a ampliación: 2, 4, 5 ou 10 × a folla.

Un detalle pode tomarse da vista frontal, superior, dereita ou de sección, non da isométrica. Se non hai espazo para todas as vistas, o panel di «Non hai espazo na folla para: detalle. Faga o detalle máis pequeno ou quite unha vista.»

## Engadir unha táboa de furados

A táboa de furados enumera os furos da peza coas súas posicións, para perforar ou CNC: no panel, escolla **Táboa de furados** › **Da vista superior** (ou frontal, ou dereita).

- Cada furo visto de fronte nesa vista recibe unha etiqueta ao lado: **A1**, **A2** … para o primeiro tamaño, **B1** … para o seguinte.
- A táboa enumera cada etiqueta, a súa **X** e **Y** en milímetros, e o seu tamaño: «Ø14 PASANTE», «Ø6.6 × 10 PROFUNDO», un avellanado ou un rebaixado, ou a referencia de rosca dun furo roscado.
- X e Y mídense desde a esquina inferior esquerda do contorno da vista, marcada **X0 Y0** na folla.
- Os furos feitos con patróns inclúense. Os furos que non son perpendiculares á vista cóntanse no panel e quédanse fóra da táboa.

A táboa vai nunha zona libre da folla e no PDF.

## Colocar símbolos GD&T e de acabado superficial

1. Escolla {{ui:Referencia}}, {{ui:Marco}} (un marco de control de forma) ou {{ui:Acabado}} (un símbolo de acabado superficial).
2. Faga clic no punto dunha vista onde se fixa. Encaixa na liña debuxada máis próxima, a menos de 2.5 mm.
3. O símbolo aparece cunha guía, seleccionado, e o panel dereito mostra os seus axustes.

Arrastre un símbolo para movelo; a súa guía queda no punto. Con un símbolo seleccionado, as teclas de frecha desprazano 1 mm. {{key:Delete}} ou {{key:Backspace}} (ou {{ui:Eliminar}} no panel) elimínao; {{ui:Feito}} ou {{key:Esc}} deselecciónao. Cada cambio está na lista de desfacer.

### Referencia

**Letra**: de A a Z, sen I, O e Q (lense como 1, 0 e O). Cada nova referencia toma a seguinte letra libre.

### Marco de control de forma

| Axuste | Opcións |
|---|---|
| **Tolerancia** | Rectitude, Planitude, Circularidade, Cilindricidade, Perfil dunha liña, Perfil dunha superficie, Perpendicularidade, Angularidade, Paralelismo, Posición, Concentricidade e Simetría (ambas eliminadas en Y14.5-2018, e marcadas como tales), Batido circular, Batido total |
| **Zona (mm)** | O valor da tolerancia, por defecto 0.1 |
| **Zona de diámetro (⌀)** | Para características cunha zona cilíndrica; activada por defecto para Posición |
| **Material** | RFS (ningún), MMC (Ⓜ), LMC (Ⓛ), onde a característica o permita |
| **Referencia primaria / secundaria / terciaria** | Ata tres letras de referencia, cada unha cun **modificador …** (MMB, LMB) onde se permita |

PartCraft comproba o marco coas regras de ASME Y14.5 e di no alto do panel o que está mal, por exemplo «A planitude é unha tolerancia de forma: non leva referencias.» ou «A posición necesita polo menos unha referencia.» A liña **Lectura** explica o marco en palabras.

### Acabado superficial

| Axuste | Opcións | Por defecto |
|---|---|---|
| **Ra (µm)** | Media de rugosidade | 1.6 |
| **Proceso** | calquera proceso, mecanizado, sen eliminación de material | mecanizado |
| **Nota** | Ata 40 caracteres, como unha orientación das marcas ou un proceso | |

Sen nada seleccionado, o panel enumera as **Notas na folla**, cada unha con **Seleccionar**.

## Exportar o PDF

Escolla {{ui:PDF}} na barra de ferramentas, {{ui:Exportar PDF}} no panel, ou {{ui:Exportar}}, e despois {{ui:Debuxo (PDF): vistas, sección, detalle, GD&T}} desde o modelo. O PDF descárgase como `<nome da peza> - drawing.pdf`, e a barra de estado enumera o que hai nel.

Imprímao en «Tamaño real» e en papel do tamaño da folla para manter a escala exacta.

## Límites

| Aínda non creado | Faga isto hoxe |
|---|---|
| Dimensións distintas das tres dimensións xerais | Engádaas no PDF cun programa de anotacións, ou exporte un esbozo ou unha cara como DXF e acótea nun programa CAD 2D |
| Máis dunha sección ou detalle; vistas rotas, auxiliares e proxectadas | Non dispoñible |
| Proxección de primeiro diedro, vistas móbiles, folas en vertical | Terceiro diedro, disposición automática, horizontal |
| Notas e táboas de texto libre na folla (distintas dos cadros do título e de revisións) | Use a nota de acabado, ou engada texto no PDF |
| Debuxos de conxuntos | Non dispoñible |

Os caracteres fóra do conxunto da Europa occidental imprímense como «?» (o PDF usa a Helvetica integrada do lector). Os símbolos GD&T debúxanse como liñas, así que se imprimen en calquera lector.

## Deixe que a folla o faga

- **Folla › Automática** escolle o papel por vostede: a maior escala normalizada ata 1:1, na folla de tamaño A máis pequena que contén as vistas a esa escala (a lista mostra cal tomou).
- **Acotar os furos** acota os furos na vista que os ve máis de fronte: unha marca de centro en cada un, unha chamada por tamaño («2× Ø6 PASANTE» cunha guía), e as súas posicións medidas desde a esquina inferior esquerda da vista. Sempre están o ancho, o alto e o fondo xerais.
