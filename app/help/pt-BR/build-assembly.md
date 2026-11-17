---
title: Monte uma montagem com juntas
summary: Inicie uma montagem a partir de uma peça, insira cópias e outros arquivos de peça, una-os com juntas rígidas, de revolução, deslizantes, cilíndricas, planares, esféricas e de pino em ranhura em faces planas, centralize juntas em eixos, edite uma peça no lugar e salve a montagem.
keywords: montagem, acoplamento, acoplamentos, junta, juntas, laço, laço fechado, articulação, quadribarra, mecanismo, rígida, revolução, deslizante, cilíndrica, planar, esférica, junta esférica, pino em ranhura, inserir componente, fixa, concêntrica, coincidente, editar peça, em contexto, partcraft-asm
from: a53bbfef
---

Uma montagem reúne peças. No PartCraft, as **juntas** posicionam as peças: cada junta fica em uma face plana de cada uma de duas peças e as coloca face a face. Uma junta de revolução permite que uma peça gire, uma deslizante permite que ela deslize, e uma junta rígida a imobiliza.

## Iniciar uma montagem

1. Construa uma peça com um sólido (uma peça vazia não pode entrar em uma montagem: "Crie um sólido primeiro e depois coloque-o em uma montagem.").
2. Escolha {{ui:Montagem}} na barra de ferramentas.

A barra de status diz "Montagem iniciada com Part1 como peça fixa. Insira mais peças ({{ui:Adicionar cópia}}, {{ui:Inserir}} ou Editar › {{ui:Duplicar}}) e depois una-as com juntas." O painel esquerdo agora lista **Peças** e **Juntas**, e a barra de ferramentas mostra as ferramentas de montagem. As ferramentas de esboço e de recursos somem.

A primeira peça é **fixa**: ela nunca se move, e todas as demais são posicionadas em relação a ela.

## Inserir peças

- {{ui:Adicionar cópia}} insere outra cópia da peça selecionada (ou da última). As cópias compartilham uma só peça: edite uma e todas mudam.
- {{ui:Duplicar}} ({{key:Mod+D}}) no grupo Editar faz o mesmo para a peça selecionada. {{key:Mod+C}} e {{key:Mod+V}} copiam uma peça e a colam ao lado das outras, nesta montagem ou em outra; {{key:Mod+Shift+V}} a cola no mesmo lugar. Veja [Copiar, colar e duplicar](topic:copy-paste).
- {{ui:Inserir}} insere uma peça de um arquivo `.partcraft.json` no seu computador. A peça é copiada para dentro da montagem.

Novas peças aparecem 20 mm à direita de tudo o que já está ali e permanecem lá até que uma junta as posicione. Uma peça sem junta também pode ser movida manualmente: com valores digitados ou setas que você arrasta (veja [Lista de peças, vistas explodidas e peças móveis](topic:assembly-bom-explode)).

## Unir duas peças

1. Escolha {{ui:Junta}} ou pressione {{key:J}}. O painel da direita diz **Nova junta**.
2. Clique em uma face plana da primeira peça. Ela fica destacada.
3. Clique em uma face plana da segunda peça.

A segunda peça se desloca para que a face dela encoste na face da primeira, voltada para ela. A junta aparece em **Juntas**, por exemplo "Revolute1", e o painel da direita mostra as configurações dela.

- Se as duas faces foram feitas por revoluções, a junta começa como **de revolução**; caso contrário, **rígida**. Altere-a depois, se quiser.
- Faces curvas não podem ser escolhidas: "Essa face é curva. Escolha uma face plana (para girar em torno de um furo ou do eixo de uma revolução, escolha-o depois na junta)."
- {{key:Esc}} cancela uma junta que você começou (ou clique em uma peça na lista à esquerda).

### Configurações da junta

| Configuração | O que faz |
|---|---|
| **Tipo** | Uma das juntas da tabela abaixo |
| **Ângulo (°)** | Gira a segunda peça em torno do eixo da junta (perpendicular às faces) |
| **Deslocamento (mm)** | Move a segunda peça ao longo do eixo, para longe da face (valores negativos a empurram para dentro dela) |
| **Ao longo de X**, **Ao longo de Y**, **Inclinar em torno de X**, **Inclinar em torno de Y**, **Ao longo da ranhura**, **Direção da ranhura** | Os outros valores, mostrados para as juntas que os usam |
| **Centralizar em** (para cada lado) | Onde o eixo da junta cruza a face: "A própria origem da face", o eixo de uma revolução ("Eixo de Revolve1") ou o eixo de um furo ("Hole1, furo 2") |

Cada valor que uma junta permite mover tem um controle deslizante de arraste abaixo da sua caixa; os demais são definidos uma vez.

| Junta | O que se move | Definido uma vez |
|---|---|---|
| **Rígida** | nada | Ângulo, Deslocamento |
| **De revolução** | Ângulo (uma dobradiça) | Deslocamento |
| **Deslizante** | Deslocamento (uma gaveta) | Ângulo |
| **Cilíndrica** | Ângulo e Deslocamento (um eixo em um mancal liso) | |
| **Planar** | Ao longo de X, Ao longo de Y sobre a face, e Ângulo (uma peça deslizando sobre uma mesa) | |
| **Esférica** | Ângulo (rotação) e Inclinar em torno de X e Y, em torno do centro da junta (uma junta esférica) | |
| **Pino em ranhura** | Ao longo da ranhura e Ângulo (um pino em uma ranhura reta) | Direção da ranhura: o ângulo da ranhura em relação ao X da face |

Os X e Y de uma face são os da face da primeira peça; o centro da junta é definido por **Centralizar em**.

"A própria origem da face" é a origem da peça projetada sobre a face, que muitas vezes não é o ponto onde você quer alinhar as peças. Para peças redondas e pinos, defina **Centralizar em** como o eixo da revolução ou do furo nos dois lados: os eixos então se alinham, como em um acoplamento concêntrico.

### Exemplo: duas flanges parafusadas face a face

1. Abra a peça da flange (uma revolução com uma matriz circular de furos) e escolha {{ui:Montagem}}.
2. Escolha {{ui:Adicionar cópia}}.
3. Pressione {{key:J}}, clique na face plana do disco da primeira flange (a face de onde partem os furos dos parafusos), depois na mesma face da segunda flange. As faces foram feitas pela revolução, então a junta é de revolução.
4. Defina **Centralizar em** como "Eixo de Revolve1" nos dois lados. As flanges agora compartilham um eixo.
5. Digite `22.5` em **Ângulo (°)** para alinhar os furos dos parafusos, ou arraste o controle deslizante.

## Laços fechados: mecanismos

Peças unidas em anel (um mecanismo quadribarra, uma manivela e corrediça, um quadro travado nos dois lados) formam um **laço**. O PartCraft resolve cada laço para que ele feche: as juntas nele assumem os valores que fecham o anel, movendo-se o mínimo possível em relação à posição anterior.

- **Defina ou arraste** um valor de uma junta em um laço e o restante do laço acompanha. Em um mecanismo quadribarra, arraste o **Ângulo** da manivela e a biela e o balancim se movem com ele. O valor que você definiu é mantido; os outros são calculados a partir dele.
- Na lista, uma junta em um laço que ainda pode se mover fica **azul**: outro valor ainda pode ser definido. Um laço que não pode se mover (um quadro contraventado) permanece preto. Um laço que não pode fechar fica **vermelho**.
- A caixa **Peça** mostra **Laços**: quantos estão fechados e quantos valores ainda podem se mover, por exemplo "1 fechado; 1 valor ainda pode se mover".
- {{ui:Verificar o movimento quanto a colisões}} varre uma junta em um laço com o laço acompanhando-a, passo a passo (veja [Verifique uma montagem quanto a colisões e movimento](topic:check-assembly)).

Um mecanismo plano feito de barras planas empilhadas precisa coincidir em profundidade: duas peças unidas face a face nos dois lados de um anel precisam da mesma altura de empilhamento nos dois sentidos. Use o **Deslocamento** de uma junta para elevar uma peça quando o empilhamento não fechar, ou o laço não fecha.

## Trabalhar com as peças

Clique em uma peça na vista ou na lista para selecioná-la. O painel da direita mostra o nome da peça, quantas cópias existem, seu volume, suas juntas, e se ela é fixa, definida por suas juntas ou "Não unida: permanece onde foi colocada". Botões:

- {{ui:Editar esta peça}} (ou {{ui:Editar peça}} na barra de ferramentas, ou dê duplo clique na peça na lista): abre a peça para edição;
- {{ui:Inserir uma cópia}};
- {{ui:Tornar esta a peça fixa}};
- {{ui:Remover}}: também remove suas juntas, após confirmação.

Uma montagem mantém pelo menos uma peça. Feche-a em vez disso.

### Editar uma peça no lugar

1. Selecione uma peça e escolha {{ui:Editar peça}}. A peça abre com seu histórico; o título diz "Bracket (na montagem Bracket)".
2. Altere-a como qualquer outra peça.
3. Escolha {{ui:Voltar}} na barra de ferramentas. A montagem é atualizada: cada cópia dessa peça muda, e as juntas em faces formadas por arestas de esboço acompanham.

Trazer a alteração de volta é uma etapa na lista de desfazer da montagem.

## Desfazer, salvar e fechar

- A montagem tem sua própria lista de desfazer: {{key:Mod+Z}} e {{key:Mod+Y}} funcionam em juntas, inserções e configurações.
- {{ui:Salvar}} ou {{key:Mod+S}} baixa `<nome da montagem>.partcraft-asm.json`, com todas as peças dentro dele. Abra-o depois com {{ui:Abrir}}.
- {{ui:Fechar}} fecha a montagem e retorna à peça de onde você partiu. Se a montagem não estiver salva, ela pergunta: {{ui:Cancelar}}, {{ui:Descartar a montagem}} ou {{ui:Salvar primeiro}}.
- Para renomear a montagem, clique em um espaço vazio para que nada fique selecionado e altere **Nome** no painel da direita.

## Montagens grandes

Uma montagem pode ter milhares de cópias de algumas peças. Cópias de uma mesma peça são desenhadas juntas, uma junta que você gira posiciona apenas as peças atrás dela, e a lista de peças mostra suas primeiras linhas com um botão "Mostrar mais" abaixo delas (a peça selecionada sempre aparece na lista).

- Enquanto você gira ou dá zoom na vista, uma montagem com mais de cerca de 300.000 triângulos é desenhada como uma caixa por peça, e depois por completo um instante após você parar.
- {{ui:Vistas}} › {{ui:Exibição leve}} mantém as caixas o tempo todo. Escolher peças e juntas ainda usa as peças reais.
- A velocidade de rotação também depende da sua placa de vídeo. Os números medidos pelo PartCraft estão nas notas de versão, com a máquina de origem.

## Problemas com juntas

- Uma peça que nenhuma junta alcança aparece como **livre**, e o painel diz "Bracket2 não está unido à peça fixa, então permanece onde foi colocada."
- Um laço que não pode fechar (os comprimentos não alcançam, um limite impede uma junta, as faces não coincidem em profundidade): "Revolute3 fecha um laço que não pode fechar: está 2.000 mm fora. Verifique as faces, os deslocamentos e os limites das juntas do laço." Suas juntas ficam vermelhas.
- Se uma face ou eixo usado por uma junta sumir após editar uma peça: "A face usada por esta junta não existe mais em Bracket." Remova a junta e crie-a novamente.

Próximo: [Verifique uma montagem quanto a colisões e movimento](topic:check-assembly).
