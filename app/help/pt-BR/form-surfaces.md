---
title: Formas livres com Forma e recursos de superfície
summary: Empurre e puxe uma gaiola de controle suave na área de trabalho Forma, vincule arestas, use simetria, verifique e finalize em um sólido ou superfície exata, depois aplique retalho, loft, costura, espessamento, deslocamento, extensão e aparagem de superfícies em Design. O que é exato e o que é aproximado.
keywords: forma, forma livre, T-spline, subdivisão, Catmull-Clark, gaiola, quadball, vinco, simetria, zebra, curvatura, superfície, retalho, preencher, superfície loft, costurar, coser, espessar, deslocar superfície, estender, aparar
from: 0d326ef4
---

:::note
**Ainda não implementado nesta versão.** Finalizar uma forma na peça, e os recursos de superfície, precisam de um kernel geométrico exato, que esta versão do PartCraft não tem: ele constrói cada peça com o kernel de malha. [O que ainda não está implementado](topic:not-built-yet) explica o que fazer no lugar. O restante desta página descreve esses recursos como funcionam com um kernel exato.
:::

A área de trabalho **Forma** cria formas orgânicas. Você edita uma **gaiola**, uma malha grosseira de vértices, arestas e faces. A forma é a superfície suave que a gaiola controla (sua superfície-limite de Catmull–Clark), então mover um vértice curva a superfície suavemente ao redor dele. Quando estiver como deseja, **Finalizar** adiciona a forma ao histórico da peça como um recurso *Forma*, e o kernel exato a converte em superfícies B-spline verdadeiras. Depois você pode arredondá-la, cortá-la, uni-la a outros recursos e exportá-la como STEP.

Escolha **Forma** na lista **Área de trabalho**, à esquerda da barra de ferramentas.

## Comece uma gaiola

1. Defina **Tamanho** e **Divisões** no painel direito. Divisões é quantas faces cada lado terá.
2. Clique em {{ui:Caixa}}, {{ui:Quadball}} ou {{ui:Plano}} na barra de ferramentas. O painel também tem **Cilindro**, **Toro** e **Faces por cliques**.

- Um **quadball** é uma gaiola de caixa ajustada de modo que seus vértices de canto fiquem sobre uma esfera. Entre esses vértices, a superfície fica um pouco dentro da esfera: cerca de 0.4 % menos volume com 2 divisões.
- Um **plano** é aberto, então se torna um corpo de superfície (veja "Recursos de superfície em Design" abaixo).
- **Faces por cliques**: clique em 4 pontos no plano superior (do chão) ou nos cantos da gaiola para criar uma face. Faces que compartilham vértices se unem. Pressione {{key:Enter}} após 3 pontos para um triângulo, ou {{key:Esc}} para parar.

Sua gaiola inacabada é salva junto com o arquivo da peça, então você pode fechar o arquivo e continuar depois.

## Selecione e mova

- Clique em um vértice, uma aresta ou uma face da gaiola. {{key:Shift}}+clique adiciona ou remove itens. {{key:Esc}} limpa a seleção.
- Um gizmo aparece no meio da seleção. Arraste uma seta para mover ao longo dela, ou um quadrado para mover naquele plano. Pressione {{key:W}} para mover, {{key:E}} para girar e {{key:R}} para escalar, ou use os botões do painel. {{ui:Gizmo}} na barra de ferramentas percorre esses modos.
- **Queda suave** (mm) também puxa os vértices dentro dessa distância, desvanecendo suavemente até zero na borda dessa distância.
- Cada arrasto é um passo de desfazer: {{key:Ctrl+Z}} e {{key:Ctrl+Y}} funcionam como de costume.

## Altere a gaiola

Os botões **Modificar** do painel atuam sobre a seleção:

| Botão | O que faz |
|---|---|
| {{ui:Extrudar}} | As faces selecionadas se afastam pela **Distância de extrusão**, ao longo de suas normais, com novas faces laterais. Arestas abertas selecionadas crescem novas faces para fora. |
| {{ui:Laço de arestas}} / Inserir laço de arestas | Divide o anel de faces de quatro lados que cruza a aresta selecionada, no meio do caminho. Mais laços dão curvas mais justas. |
| Inserir vértice | Adiciona um vértice no meio da aresta selecionada. |
| Subdividir | Divide cada face selecionada em faces de quatro lados em torno de seu centro. |
| Ponte | Une duas faces selecionadas, ou duas aberturas (selecione uma aresta aberta em cada), com um tubo de faces. Ambas precisam ter o mesmo número de arestas. |
| Preencher furo | Fecha a abertura pela aresta aberta selecionada com uma face. |
| Soldar | Funde os vértices selecionados em um, no meio deles. |
| Achatar | Move os vértices selecionados para o plano que melhor se ajusta a eles. |
| Excluir | Remove as faces, arestas (duas faces se fundem) ou vértices selecionados. |

## Arestas vincadas, simetria e exibição

- {{ui:Vincar}} torna as arestas selecionadas vivas. **Peso do vinco** 10 é totalmente vivo. Um peso menor permanece vivo por aquele número de passos de refinamento e depois suaviza, o que dá uma curva apertada em vez de uma dobra dura. **Desvincar** as torna suaves de novo. **Vértice vivo** fixa um vértice para que a superfície passe por ele em um ponto.
- **Simetria** espelha a gaiola em X, Y ou Z = 0. Ela mantém o lado positivo, espelha esse lado e une as duas metades. Depois disso, uma edição em qualquer lado acontece em ambos. Os vértices sobre o plano de espelhamento permanecem nele.
- {{ui:Exibição}} alterna entre **Suave** (a superfície que o recurso será) e **Caixa** (as próprias faces da gaiola).
- **Análise**: **Listras zebra** refletem uma luz listrada a partir da vista atual. Elas se curvam suavemente sobre uma superfície suave e se quebram em um vinco. **Curvatura média** sombreia áreas convexas de vermelho, côncavas de azul e áreas planas de branco. Ela é medida na malha exibida com a fórmula cotangente, então é um guia, não uma medição.

## Verifique e finalize

- **Verificar exato** converte a gaiola no kernel exato sem alterar sua peça. Ele informa quantos retalhos B-spline a gaiola forma, quantos são exatos, e se o resultado é um sólido fechado e válido, e seu volume.
- {{ui:Acabamento}} adiciona um recurso *Forma* ao histórico, ou atualiza a forma que você estava editando, e leva você de volta a Design. Uma gaiola fechada se torna um sólido. Sua **Operação** no painel Design pode ser Novo corpo, Unir, Cortar ou Interseção. Uma gaiola aberta se torna um corpo de superfície.
- Para alterar uma forma depois, selecione-a no histórico e clique em **Editar em Forma**. O corpo construído fica oculto enquanto você edita a gaiola.
- **Descartar** joga a gaiola fora sem tocar no histórico.

## O que é exato e o que é aproximado

Cada face de quatro lados da gaiola, refinada quando necessário, se torna um retalho bicúbico B-spline.

- Onde cada vértice de uma face é *regular* (quatro arestas se encontram dentro da superfície, ou três em uma aresta aberta ou ao longo de um vinco), o retalho é **exatamente** a superfície de subdivisão. Os testes verificam isso com 1e-9 mm.
- Em torno de um **ponto extraordinário** (três, cinco ou mais arestas se encontrando, um vértice de uma face de três ou cinco lados, ou a extremidade de um vinco) não existe um retalho polinomial exato. Ali o retalho assume o ponto exato e o plano tangente nesse vértice e as curvas de aresta dos vizinhos, de modo que os retalhos ainda se encontram sem falha. A continuidade tangente através das arestas que se encontram no ponto é aproximada. O painel Forma e o painel do recurso informam o maior ângulo, tipicamente abaixo de 2°. Um **Nível** mais alto no painel do recurso torna esses retalhos menores e mais próximos.
- Vincos vivos são arestas reais do sólido, então você pode arredondá-los.
- Cada retalho é sua própria face, então uma forma tem muitas faces, e linhas são desenhadas entre elas.

## Recursos de superfície em Design

Os comandos de superfície estão no menu {{ui:Mais}} do Design, entre os recursos. Eles precisam do kernel exato. Corpos de superfície são desenhados transparentes em azul. Eles não fazem parte do sólido até que você os espessse ou costure.

| Comando | O que faz |
|---|---|
| Retalho | Preenche um laço fechado de arestas. {{key:Shift}}+clique nas arestas do sólido primeiro, ou selecione um corpo de superfície para preencher sua abertura. **Tangente (G1)** faz o retalho se unir a essa superfície suavemente. |
| Superfície loft | Uma superfície através de uma cadeia de curvas por esboço (aberta ou fechada), na ordem do histórico. |
| Costurar | Costura corpos de superfície ao longo de suas arestas compartilhadas. Se eles se fecharem, o resultado é um sólido, com uma Operação como outros recursos. |
| Espessar | Dá a um corpo de superfície uma espessura: ao longo de sua normal, contra ela, ou metade para cada lado. O resultado é um sólido. |
| Deslocar superfície | Uma cópia de um corpo de superfície movida ao longo de suas normais. O original permanece. |
| Estender superfície | Faz crescer uma superfície de uma face além das arestas que você escolher. |
| Aparar superfície | Corta um corpo de superfície onde outro corpo de superfície, ou o sólido, o cruza. Clique em **Escolher um ponto na parte** para escolher qual parte manter, ou manter todo o resto. |

Costurar, Espessar, Estender e Aparar consomem o corpo de superfície de onde partem. Recursos posteriores usam o novo.

Limites atuais: formas com várias peças fechadas separadas não se convertem em um sólido; áreas regulares não são unidas em superfícies maiores; e veja [O que ainda não está implementado](topic:not-built-yet).
