---
title: Debuxe o primeiro esbozo
summary: Abra un esbozo sobre un plano ou unha cara plana, debuxe liñas, rectángulos, círculos, arcos, puntos e liñas de centro, redondee unha esquina, seleccione, arrastre e elimine.
keywords: esbozo, debuxar, liña, rectángulo, círculo, arco, punto, liña de centro, construción, redondeo, redondeo de esbozo, redondear esquina, enganche, seleccionar, xanela, arrastrar, perfil
from: 28be7436
---

Cada sólido comeza como un esbozo: un debuxo plano sobre un plano. Este percorrido cobre as ferramentas de debuxo. Para fixar o esbozo con relacións e cotas, consulte [Definir completamente un esbozo](topic:relations-dimensions).

## Iniciar un esbozo

Pode esbozar sobre un plano base ou sobre calquera cara plana da peza.

1. Escolla onde esbozar:
   - un plano base: faga clic en **Plano de alzado**, **Plano de planta** ou **Plano de perfil** no historial, ou faga clic no plano na vista;
   - unha cara plana: faga clic na cara na vista. Toda a cara se resalta.
2. Escolla {{ui:Sketch}} na barra de ferramentas ou prema {{key:S}}. (Con unha cara escollida tamén pode escoller {{ui:Sketch on this face}} no panel dereito; cun plano, {{ui:Sketch on it}}.)

A vista se xira para quedar de fronte ao plano, aparecen as ferramentas de esbozo na barra e a ferramenta {{ui:Line}} queda lista. Se prema {{ui:Sketch}} sen escoller nada, mostranse os planos base e a barra de estado di "Faga clic nun plano ou nunha cara plana para esbozar. Esc detén."

:::note
Unha cara curva non admite un esbozo: "Esa cara é curva. Escolla unha cara plana ou un plano onde esbozar."
:::

**Un esbozo sobre unha cara segue esa cara.** Se a cara se creou cunha aresta de esbozo ou co extremo dunha extrusión, o novo esbozo móvese cando cambia o elemento (unha cavidade máis profunda leva consigo o esbozo do seu fondo). Se o panel indica que a cara está "Fixa onde se escolleu", o esbozo queda onde está agora a cara.

## As ferramentas de debuxo

Cada ferramenta ten un botón na barra e unha tecla. Escolla de novo o mesmo botón, prema {{key:S}} ou prema {{key:Esc}} para volver a Seleccionar.

| Ferramenta | Tecla | Como debuxar |
|---|---|---|
| {{ui:Line}} | {{key:L}} | Faga clic no inicio e despois en cada punto seguinte. As liñas encadéanse extremo con extremo. Remate a cadea con {{key:Esc}}, {{key:Enter}}, un clic co botón dereito ou un dobre clic. Facer clic nun punto existente tamén a remata |
| {{ui:Rectangle}} | {{key:R}} | Faga clic nunha esquina e despois na esquina oposta. Obtén catro liñas unidas nas esquinas, dúas horizontais e dúas verticais |
| {{ui:Circle}} | {{key:C}} | Faga clic no centro e despois nun punto do círculo |
| {{ui:Arc}} | {{key:A}} | Faga clic no centro, despois no inicio e logo no final. O arco percorre o sentido en que move o punteiro arredor do centro |
| {{ui:Point}} | {{key:P}} | Faga clic. Un punto por si só marca o centro dun burato para a ferramenta {{ui:Hole}} |
| {{ui:Centerline}} | {{key:N}} | Igual que unha liña, un segmento de cada vez. Debúxase en trazos; é xeometría de construción, usada como eixe de revolución ou como referencia |
| {{ui:Fillet}} | {{key:F}} | Faga clic nunha esquina onde se encontran dúas liñas, escriba o raio e prema {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Faga clic nos puntos polos que pasa a curva; {{key:Enter}} remata, e un clic no primeiro punto a pecha. Consulte [Splines, recortar, desprazar e outras ferramentas de esbozo](topic:sketch-tools) |
| {{ui:Trim}} | {{key:T}} | Faga clic no tramo dunha curva que quere quitar, ata os cruzamentos máis próximos |
| {{ui:Dimension}} | {{key:D}} | Consulte [Definir completamente un esbozo](topic:relations-dimensions) |

Mentres debuxa, unha caixa pequena xunto ao punteiro mostra a lonxitude, o tamaño, o diámetro ou o raio.

### Escriba o tamaño mentres debuxa

Despois do primeiro clic dunha liña, rectángulo, círculo ou arco, pode escribir o tamaño en vez de facer clic. Ao escribir un número, abre a caixa xunto ao punteiro con ese número dentro:

| Ferramenta | Caixas ({{key:Tab}} pasa á seguinte) | Que pasa con {{key:Enter}} |
|---|---|---|
| {{ui:Line}}, {{ui:Centerline}} | Lonxitude, despois Ángulo (°) desde o eixo X do esbozo | A liña debúxase con esa lonxitude, cara ao punteiro ou ao ángulo escrito; a cadea continúa desde o seu extremo |
| {{ui:Rectangle}} | Largura, despois Altura | O rectángulo debúxase desde a primeira esquina cara ao punteiro; un tamaño que non escribiu sae do punteiro |
| {{ui:Circle}} | Diámetro | O círculo debúxase con ese diámetro |
| {{ui:Arc}} | Raio tras o centro, despois Ángulo do arco (°) tras o inicio | O inicio queda a esa distancia do centro; logo o arco percorre ese ángulo, no sentido en que moveu o punteiro |

Cada tamaño que escribe convértese nunha **cota de control** no mesmo paso, de modo que o esbozo sae dimensionado: {{key:Mod+Z}} quita a forma e as súas cotas á vez. Facer clic en lugar de premer {{key:Enter}} conserva o que escribiu e toma o resto do clic. {{key:Esc}} pecha a caixa e volve ao punteiro.

Desactive isto en {{ui:Settings}} › {{ui:PartCraft}} › **Cota ao debuxar** se só quere debuxar con clics. Consulte [Configuración de PartCraft](topic:settings).

{{ui:More}}, ao final das ferramentas de esbozo, contén a spline de puntos de control, Estender, Desprazar, Espellar, Polígono, Ranura, os patróns de esbozo e Proxectar aresta. Consulte [Splines, recortar, desprazar e outras ferramentas de esbozo](topic:sketch-tools).

### Enganche

O enganche engade relacións por si mesmo, de xeito que o esbozo queda unido ao moverse:

- Nun **extremo ou na orixe**, aparece un cadrado pequeno. O novo punto faise coincidente con el.
- Nunha **liña, círculo ou arco**, aparece unha cruz pequena. O novo punto colócase sobre esa curva.
- Unha liña a menos de 3 graos da horizontal ou da vertical énchase a ela e recibe unha relación horizontal ou vertical. A etiqueta mostra "H" ou "V".

Para evitar un enganche, achegue o zoom para facer clic máis lonxe do punto ou da curva.

## Redondear unha esquina

1. Prema {{key:F}} ou escolla {{ui:Fillet}}.
2. Faga clic no punto da esquina onde se encontran dúas liñas.
3. Abrirase unha caixa cun raio suxerido. Escriba o raio e prema {{key:Enter}}.

As dúas liñas recórtanse e únense cun arco tanxente con cota de raio. Mensaxes que pode ver: "Un redondeo necesita unha esquina onde se encontren exactamente dúas liñas." e "Ese raio é demasiado grande para estas liñas."

:::tip
Un redondeo de esbozo redondea unha esquina do perfil, de modo que a extrusión obtén arestas verticais redondeadas. Para redondear as arestas do propio sólido (por exemplo, as arestas superiores dunha placa), use o elemento {{ui:Fillet}} na peza: consulte [Redondear, biselar e vaciar](topic:fillet-chamfer-shell). Nun esbozo, o Redondeo da barra é a ferramenta de esbozo; na peza, é o elemento.
:::

## Xeometría de construción

As liñas, círculos e arcos de construción debúxanse en trazos e en gris. Guían o esbozo, pero non forman parte do perfil que se extrúe ou revoluciona.

1. Seleccione as liñas, círculos ou arcos.
2. Prema {{key:Q}} ou escolla {{ui:Construction}}. Prema de novo para devolvelos ao estado anterior.

## Seleccionar, arrastrar e eliminar

Prema {{key:S}} (ou {{key:Esc}} ata que non haxa ferramenta activa) para Seleccionar.

- Faga clic nun punto, liña, círculo, arco, símbolo de relación ou cota para seleccionalo. {{key:Shift}}+clic engade á selección ou quita da selección. En Windows e Linux, {{key:Ctrl}}+clic fai o mesmo; nun Mac, ⌘+clic.
- Arrastre sobre un espazo baleiro para debuxar unha xanela: selecciónase todo o que queda totalmente dentro dela.
- Arrastre un punto ou unha liña para movela. O solucionador mantén todas as relacións e cotas ao mover, de xeito que só se move a xeometría libre. Arrastre o bordo dun círculo para cambiar o seu raio.
- Arrastre o número dunha cota para mover a etiqueta.
- Prema {{key:Delete}} ou {{key:Backspace}}, ou escolla {{ui:Delete}} no panel dereito, para eliminar a selección. Ao eliminar xeometría, elimínanse as relacións que teña.

## Zoom e desprazamento no esbozo

- Xire a roda para ampliar ou reducir na posición do punteiro.
- Arrastre co botón central ou dereito para desprazar a vista.
- {{ui:Fit}} na barra de ferramentas ou no panel dereito axusta o esbozo á vista. Nun esbozo, a tecla {{key:F}} é a ferramenta de Redondeo, non Axustar.

## Pechar o esbozo

Escolla {{ui:Exit}} na barra de ferramentas ou {{ui:Exit sketch}} no panel dereito, ou prema {{key:Esc}} ata que o esbozo se peche. Cada {{key:Esc}} cancela primeiro o que está en curso, despois volve a Seleccionar, despois borra a selección, e o seguinte pecha o esbozo.

O esbozo queda seleccionado, así que a seguinte {{ui:Extrude}} ou {{ui:Revolve}} o usa.

## Que fai un bo perfil

{{ui:Extrude}} e {{ui:Revolve}} usan **cada bucle pechado** das liñas, círculos, arcos e splines de trazo continuo do esbozo (non de construción). Os bucles dentro doutros bucles convértense en buratos.

- Cada extremo debe encontrarse exactamente con outro extremo. "O perfil está aberto: un extremo en (12.5, 40) non está unido a nada." indica o lugar.
- Non poden encontrarse tres extremos nun mesmo punto: "O perfil bifurcase en (0, 20): aí encóntranse máis de dous extremos."
- O perfil ignora os puntos e a xeometría de construción.

Seguinte: [Definir completamente un esbozo con relacións e cotas](topic:relations-dimensions).

## Un esbozo a partir dunha foto

**Elementos › Máis › Esbozo a partir dunha foto…** (ou o grupo Esbozo na cinta da árbore de elementos) traza unha imaxe dunha peza plana sobre un fondo liso (o seu contorno e os seus buratos) ou un debuxo a bolígrafo nun esbozo de liñas, arcos e círculos. Indique unha lonxitude (a largura, a altura ou o lado máis longo) para que o esbozo teña o tamaño correcto, comprobe o que atopou na vista previa e escolla **Crear o esbozo**; tamén pode extruílo, no mesmo paso de desfacer. Trázase neste ordenador. Os raios das esquinas volven dentro de máis ou menos un 5 %, perdense os detalles dun ou dous píxeles, e unha foto tirada en diagonal ou con sombras sobre a peza non se endereita: fotografe a peza de fronte, con luz uniforme.
