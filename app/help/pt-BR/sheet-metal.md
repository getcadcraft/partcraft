---
title: "Chapa metálica: abas e a planificação"
summary: Comece uma peça de chapa metálica a partir de um esboço (uma placa plana ou um perfil dobrado), defina sua espessura, o raio de dobra e o fator K uma vez, dobre abas a partir de suas arestas com alívios de dobra e planifique-a como DXF para corte.
keywords: planificação, desdobrar, desenvolvimento, comprimento desenvolvido, tolerância de dobra, linha de dobra, dxf para laser, corte a laser, chapa metálica, aba base, aba de aresta, aba, dobra, raio de dobra, fator k, fator K, espessura, calibre, alívio, alívio de dobra, canal, suporte, gabinete, chapa dobrada
from: 144bd0f6
---

:::note
**Ainda não implementado nesta versão.** A chapa metálica precisa de um núcleo geométrico exato, que esta versão do PartCraft não tem: ele constrói todas as peças com o núcleo de malha. [O que ainda não está implementado](topic:not-built-yet) diz o que fazer no lugar. O restante desta página descreve como funciona com um núcleo exato.
:::

As peças de chapa metálica começam com uma **Aba base**. Ela define a chapa para a peça inteira: sua **espessura**, o **raio interno de dobra** e o **fator K**. Cada **Aba de aresta** depois dela dobra com esses mesmos números, então a peça continua sendo uma única chapa que pode ser desdobrada. Ambas precisam do **núcleo exato** (veja [O núcleo de malha](topic:solid-kernels)).

## Começar com uma aba base

1. Desenhe um esboço. Use um **perfil fechado** para uma placa plana (um retângulo, ou qualquer contorno fechado com furos). Use **uma cadeia aberta de linhas** para uma chapa dobrada, como um L, um U ou um Z desenhado como a vista de borda da chapa.
2. Selecione o esboço no histórico de recursos.
3. Abra {{ui:Mais}} no grupo Recursos e escolha {{ui:Aba base}}.

No painel à direita:

- **Espessura (mm)** é o calibre da chapa.
- **Raio de dobra (mm)** é o raio interno de cada dobra. 0 dá um canto interno vivo; o lado externo ainda faz a curva com um raio igual a uma espessura.
- **Fator K** indica onde fica a camada neutra dentro da chapa, de 0 (a face interna) a 0.5 (o meio). Ele define o comprimento da chapa quando ela está planificada. 0.44 é o padrão; sua oficina ou o fornecedor do material pode informar o seu.
- **Profundidade (mm)** é o quanto um perfil dobrado avança para fora do plano do esboço. Uma placa ignora isso.
- **Espessura fora das dobras**: um perfil aberto é uma face da chapa. Por padrão, a espessura fica do lado interno da primeira dobra, então as linhas que você desenhou são o lado externo do canal. Marque para colocar as linhas do lado interno. O resultado é o mesmo, não importa por qual extremidade você começou.

Cada canto de uma cadeia aberta vira uma dobra. Uma linha curta demais para suportar suas dobras avisa isso, com o comprimento que ela precisa.

## Dobrar uma aba de aresta

1. Clique em uma aresta reta da face superior ou inferior da chapa (as arestas longas, não as finas).
2. Escolha {{ui:Mais}} › {{ui:Aba de aresta}}. Sem aresta selecionada, o PartCraft espera você clicar em uma; Esc cancela.

A aba dobra para cima a partir da face dessa aresta, em torno do raio interno da chapa, e depois segue reta. No painel:

- **Ângulo (°)** é o quanto ela dobra, de 1 a 180. 90 é uma aba em ângulo reto.
- **Comprimento (mm)** é a perna reta depois da dobra.
- **Dobrar para o outro lado** dobra a partir da outra face (para baixo em vez de para cima).
- **Deslocamento no início** e **Deslocamento no fim** encurtam a aba a partir de cada extremidade da aresta.
- **Alívio de dobra**: quando uma extremidade é deslocada, um rasgo é feito na chapa ao lado dela, para que a dobra não rasgue o metal ali. **Largura do alívio** define a largura do rasgo; sua profundidade é o raio de dobra mais a espessura. Escolha **Nenhum** para deixar o canto sem corte.

Para mudar a aresta depois, pressione {{ui:Selecionar}} no painel e clique em outra.

:::tip
Use parâmetros para a espessura e o raio (veja [Parâmetros e equações](topic:parameters)), assim uma mudança de calibre atualiza todas as abas de uma vez.
:::

## Planificar

Os dois painéis terminam com **Planificação**. Pressione {{ui:Planificar}}:

- Uma prévia mostra a chapa desdobrada, com a linha central de cada dobra tracejada.
- **Tamanho** e **Área** são os da peça planificada.
- Cada dobra é listada com sua direção (**para cima** ou **para baixo**, vistas do lado do esboço da aba base), ângulo e raio interno.

Cada dobra ocupa o comprimento da camada neutra da chapa através dela, a **tolerância de dobra**: ângulo (em radianos) × (raio interno + fator K × espessura). Assim, uma dobra de 90° em uma chapa de 2 mm, com raio 2 mm e fator K 0.44, acrescenta 4.52 mm de chapa plana.

Em uma placa plana, furos, cortes e alívios de dobra aparecem na planificação exatamente onde estão, inclusive furos através de uma aba.

Para cortar muitas peças, pressione {{ui:Encaixar em chapas…}} abaixo da planificação: veja [Encaixar peças planificadas em chapas](topic:nest-flat-parts). Uma aba base dobrada se planifica como um retângulo: seu comprimento desenvolvido × sua profundidade, com uma linha de dobra por canto.

{{ui:Salvar DXF}} salva a planificação para laser, punção ou jato d'água, em milímetros:

- o contorno na camada **OUTLINE**, como linhas, arcos e círculos;
- as linhas de dobra na camada **BEND**, tracejadas;
- uma anotação em cada dobra na camada **BEND_NOTES**, como "UP 90° R2".

Altere qualquer coisa e a planificação desaparece; pressione {{ui:Planificar}} de novo para obter uma nova.

:::note
Confira o fator K com sua oficina antes de cortar: o comprimento da planificação depende dele, e ele varia com o material, a espessura e as ferramentas.
:::

## Mensagens

- **A chapa metálica precisa de uma aba base antes** — uma aba de aresta foi adicionada antes de qualquer aba base. Mova-a para depois de uma, ou adicione uma aba base primeiro.
- **Uma aba de aresta precisa de uma aresta reta** — as abas dobram apenas ao longo de linhas; arestas curvas ainda não aceitam uma.
- **Essa aresta não está em uma face da espessura da chapa** — a aresta pertence a uma face que não é a superior nem a inferior da chapa (por exemplo, a parede de um furo). Selecione uma aresta da face superior ou inferior.
- **Os deslocamentos não deixam nada da aresta** — os dois deslocamentos somam a aresta inteira ou mais.
- **Abas de aresta em uma aba base dobrada ainda não podem ser planificadas** — comece com uma placa plana e dobre tudo com abas de aresta, que se desdobram.
- **Cortes e furos feitos depois de uma aba base dobrada ainda não aparecem na planificação dela** — a planificação de um perfil dobrado é apenas o seu retângulo desenvolvido.
