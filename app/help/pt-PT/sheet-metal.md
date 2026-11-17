---
title: Chapa metálica: abas e planificação
summary: Comece uma peça de chapa metálica a partir de um esboço (uma placa plana ou um perfil dobrado), defina uma vez a espessura, o raio de dobra e o fator K, dobre abas a partir das arestas com alívios de dobra e planifique-a como DXF para corte.
keywords: planificação, desdobrar, desenvolvimento, comprimento desenvolvido, compensação de dobra, linha de dobra, dxf para laser, corte a laser, chapa metálica, aba base, aba de aresta, aba, dobra, raio de dobra, fator K, k-factor, espessura, calibre, alívio, alívio de dobra, canal, suporte, caixa, chapa dobrada
from: 144bd0f6
---

:::note
**Ainda não implementado nesta versão.** A chapa metálica precisa de um núcleo geométrico exato, que esta versão do PartCraft não tem: constrói todas as peças com o núcleo de malha. [O que ainda não está implementado](topic:not-built-yet) diz o que fazer em vez disso. O resto desta página descreve a chapa metálica como funciona com um núcleo exato.
:::

As peças de chapa metálica começam com uma **Aba base**. Esta define a chapa para a peça inteira: a sua **espessura**, o **raio de dobra interior** e o **fator K**. Cada **Aba de aresta** seguinte dobra com esses mesmos valores, para que a peça continue a ser uma só chapa que pode ser desdobrada. Ambas precisam do **núcleo exato** (veja [O núcleo de malha](topic:solid-kernels)).

## Começar com uma aba base

1. Desenhe um esboço. Use um **perfil fechado** para uma placa plana (um retângulo, ou qualquer contorno fechado com furos). Use **uma cadeia aberta de linhas** para uma chapa dobrada, como um L, um U ou um Z desenhado como vista lateral da chapa.
2. Selecione o esboço no histórico de operações.
3. Abra {{ui:Mais}} no grupo Operações e escolha {{ui:Aba base}}.

No painel da direita:

- **Espessura (mm)** é o calibre da chapa.
- **Raio de dobra (mm)** é o raio interior de cada dobra. 0 dá um canto interior vivo; o exterior continua a dobrar com um raio igual a uma espessura.
- **Fator K** indica onde fica a camada neutra dentro da chapa, de 0 (face interior) a 0.5 (meio). Determina o comprimento da chapa quando estendida. 0.44 é o predefinido; a sua oficina ou o fornecedor do material pode indicar o seu.
- **Profundidade (mm)** é a distância que um perfil dobrado percorre para fora do plano do esboço. Uma placa ignora-a.
- **Espessura fora das dobras**: um perfil aberto é uma face da chapa. Por predefinição, a espessura fica do lado interior da primeira dobra, por isso as linhas que desenhou são o exterior do canal. Marque a opção para pôr as linhas do lado interior. O resultado é o mesmo, seja qual for a extremidade a partir da qual desenhou.

Cada canto de uma cadeia aberta torna-se uma dobra. Uma linha curta demais para conter as suas dobras indica-o, com o comprimento de que precisa.

## Dobrar uma aba de aresta

1. Clique numa aresta reta da face superior ou inferior da chapa (as arestas longas, não as finas).
2. Escolha {{ui:Mais}} › {{ui:Aba de aresta}}. Sem aresta escolhida, o PartCraft espera que clique numa; {{key:Esc}} cancela.

A aba dobra-se para cima a partir da face dessa aresta, em torno do raio interior da chapa, e depois segue em linha reta. No painel:

- **Ângulo (°)** é o quanto dobra, de 1 a 180. 90 é uma aba quadrada.
- **Comprimento (mm)** é a perna reta depois da dobra.
- **Dobrar para o outro lado** dobra a partir da outra face (para baixo em vez de para cima).
- **Desvio no início** e **Desvio no fim** encurtam a aba a partir de cada extremidade da aresta.
- **Alívio de dobra**: quando uma extremidade tem desvio, é cortada uma ranhura na chapa ao lado dela, para que a dobra não rasgue o metal ali. **Largura do alívio** define a largura da ranhura; a sua profundidade é o raio de dobra mais a espessura. Escolha **Nenhum** para deixar o canto sem corte.

Para mudar a aresta mais tarde, prima {{ui:Escolher}} no painel e clique noutra.

:::tip
Use parâmetros para a espessura e o raio (veja [Parâmetros e equações](topic:parameters)), para que uma alteração de calibre atualize todas as abas de uma só vez.
:::

## Planificar

Ambos os painéis terminam com **Planificação**. Prima {{ui:Planificar}}:

- Uma pré-visualização mostra a chapa desdobrada, com a linha central de cada dobra tracejada.
- **Tamanho** e **Área** são os do recorte plano.
- Cada dobra aparece listada com a sua direção (**para cima** ou **para baixo**, vista do lado do esboço da aba base), ângulo e raio interior.

Cada dobra ocupa o comprimento da camada neutra da chapa através dela, a **compensação de dobra**: ângulo (em radianos) × (raio interior + fator K × espessura). Assim, uma dobra de 90° numa chapa de 2 mm, com raio de 2 mm e fator K 0.44, acrescenta 4.52 mm de chapa plana.

Numa placa plana, os furos, cortes e alívios de dobra aparecem na planificação exatamente onde estão, incluindo furos que atravessam uma aba.

Para cortar muitas peças, prima {{ui:Nesting em chapas…}} por baixo da planificação: veja [Fazer nesting de peças planas em chapas](topic:nest-flat-parts). Uma aba base dobrada planifica-se como um retângulo: o seu comprimento desenvolvido × a sua profundidade, com uma linha de dobra por canto.

{{ui:Guardar DXF}} guarda a planificação para um laser, uma punção ou um jato de água, em milímetros:

- o contorno na camada **OUTLINE**, como linhas, arcos e círculos;
- as linhas de dobra na camada **BEND**, tracejadas;
- uma nota em cada dobra na camada **BEND_NOTES**, como « UP 90° R2 ».

Se alterar qualquer coisa, a planificação desaparece; prima {{ui:Planificar}} de novo para obter a nova.

:::note
Verifique o fator K com a sua oficina antes de cortar: o comprimento da planificação depende dele, e varia com o material, a espessura e as ferramentas.
:::

## Mensagens

- **A chapa metálica precisa de uma aba base antes dela** — foi acrescentada uma aba de aresta antes de qualquer aba base. Mova-a para baixo de uma aba base, ou acrescente primeiro uma aba base.
- **Uma aba de aresta precisa de uma aresta reta** — as abas só dobram ao longo de linhas; as arestas curvas ainda não as podem receber.
- **Essa aresta não está numa face da espessura da chapa** — a aresta pertence a uma face que não é a superfície superior ou inferior da chapa (por exemplo, a parede de um furo). Escolha uma aresta da face superior ou inferior.
- **Os desvios não deixam nada da aresta** — os dois desvios somam a aresta inteira ou mais.
- **As abas de aresta numa aba base dobrada ainda não podem ser planificadas** — comece com uma placa plana e dobre tudo com abas de aresta, que se desdobram.
- **Os cortes e furos feitos depois de uma aba base dobrada ainda não aparecem na sua planificação** — a planificação de um perfil dobrado é apenas o seu retângulo desenvolvido.
