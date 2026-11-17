---
title: Construir uma montagem com juntas
summary: Iniciar uma montagem a partir de uma peça, inserir cópias e outros ficheiros de peças, uni-las com juntas rígidas, de revolução, deslizantes, cilíndricas, planas, esféricas e de pino em ranhura em faces planas, centrar juntas em eixos, editar uma peça no contexto e guardar a montagem.
keywords: montagem, acoplamento, juntas, circuito fechado, ligação, quadrilátero articulado, mecanismo, rígida, de revolução, deslizante, cilíndrica, plana, esférica, junta esférica, pino em ranhura, inserir componente, fixa, concêntrica, coincidente, editar peça, no contexto, partcraft-asm
from: a53bbfef
---

Uma montagem reúne peças. No PartCraft, as **juntas** posicionam as peças: cada junta assenta numa face plana de cada uma de duas peças e põe-nas face a face. Uma junta de revolução permite que uma peça rode, uma junta deslizante permite que deslize, e uma junta rígida a mantém fixa.

## Iniciar uma montagem

1. Construa uma peça com um sólido (uma peça vazia não pode entrar numa montagem: "Construa primeiro um sólido e depois coloque-o numa montagem.").
2. Escolha {{ui:Assembly}} na barra de ferramentas.

A barra de estado indica "Montagem iniciada com Part1 como peça fixa. Insira mais peças (Acrescentar cópia, Inserir ou Editar › Duplicar) e, depois, ligue-as com juntas." O painel da esquerda passa a listar **Peças** e **Juntas**, e a barra de ferramentas mostra as ferramentas de montagem. As ferramentas de esboço e de operações ocultam-se.

A primeira peça é **fixa**: nunca se move, e tudo o resto é posicionado em relação a ela.

## Inserir peças

- {{ui:Add copy}} insere outra cópia da peça selecionada (ou da última). As cópias partilham uma só peça: se a editar, todas as cópias mudam.
- {{ui:Duplicate}} ({{key:Mod+D}}) no grupo Editar faz o mesmo para a peça selecionada. {{key:Mod+C}} e {{key:Mod+V}} copiam uma peça e colam-na ao lado das outras, nesta montagem ou noutra; {{key:Mod+Shift+V}} cola-a no mesmo sítio. Ver [Copiar, colar e duplicar](topic:copy-paste).
- {{ui:Insert}} insere uma peça de um ficheiro `.partcraft.json` existente no seu computador. A peça é copiada para a montagem.

As peças novas aparecem a 20 mm à direita de tudo o que já existe, e aí permanecem até que uma junta as posicione. Uma peça sem junta também pode ser movida à mão: com valores escritos ou com setas que arrasta (ver [Lista de peças, vistas explodidas e peças em movimento](topic:assembly-bom-explode)).

## Unir duas peças

1. Escolha {{ui:Joint}} ou prima {{key:J}}. O painel da direita indica **Nova junta**.
2. Clique numa face plana da primeira peça. Fica destacada.
3. Clique numa face plana da segunda peça.

A segunda peça salta para que a sua face fique encostada à face da primeira, virada para ela. A junta aparece em **Juntas**, por exemplo "Revolute1", e o painel da direita mostra as suas definições.

- Se ambas as faces tiverem sido criadas por revoluções, a junta começa como **de revolução**; caso contrário, como **rígida**. Altere-a depois.
- Não é possível selecionar faces curvas: "Esta face é curva. Selecione uma face plana (para rodar em torno de um furo ou do eixo de uma revolução, escolha-o na junta depois)."
- {{key:Esc}} cancela uma junta que tenha começado (ou clique numa peça na lista à esquerda).

### Definições da junta

| Definição | O que faz |
|---|---|
| **Tipo** | Uma das juntas da tabela abaixo |
| **Ângulo (°)** | Roda a segunda peça em torno do eixo da junta (perpendicular às faces) |
| **Deslocamento (mm)** | Desloca a segunda peça ao longo do eixo, afastando-a da face (valores negativos empurram-na para dentro) |
| **Ao longo de X**, **Ao longo de Y**, **Inclinação em torno de X**, **Inclinação em torno de Y**, **Ao longo da ranhura**, **Direção da ranhura** | Os outros valores, mostrados nas juntas que os usam |
| **Centrar em** (para cada lado) | Onde o eixo da junta atravessa a face: "A própria origem da face", o eixo de uma revolução ("Eixo de Revolve1") ou o eixo de um furo ("Hole1, furo 2") |

Cada valor que uma junta deixa mover tem um cursor de arrasto por baixo da sua caixa; os restantes definem-se uma só vez.

| Junta | O que se move | Define-se uma vez |
|---|---|---|
| **Rígida** | nada | Ângulo, Deslocamento |
| **De revolução** | Ângulo (uma dobradiça) | Deslocamento |
| **Deslizante** | Deslocamento (uma gaveta) | Ângulo |
| **Cilíndrica** | Ângulo e Deslocamento (um veio num casquilho liso) | |
| **Plana** | Ao longo de X, Ao longo de Y sobre a face, e Ângulo (uma peça a deslizar sobre uma mesa) | |
| **Esférica** | Ângulo (rotação) e Inclinação em torno de X e Y, em torno do centro da junta (uma junta esférica) | |
| **Pino em ranhura** | Ao longo da ranhura e Ângulo (um pino numa ranhura reta) | Direção da ranhura: o ângulo da ranhura em relação ao X da face |

Os X e Y de uma face são os da face da primeira peça; o centro da junta é definido por **Centrar em**.

"A própria origem da face" é a origem da peça projetada na face, que muitas vezes não é onde pretende alinhar as peças. Em peças redondas e pinos, defina **Centrar em** como o eixo da revolução ou do furo, dos dois lados: os eixos ficam alinhados, como um acoplamento concêntrico.

### Exemplo: duas flanges aparafusadas face a face

1. Abra a peça da flange (uma revolução com uma matriz circular de furos) e escolha {{ui:Assembly}}.
2. Escolha {{ui:Add copy}}.
3. Prima {{key:J}}, clique na face plana do disco da primeira flange (a face de onde partem os furos dos parafusos) e depois na mesma face da segunda flange. As faces foram criadas pela revolução, pelo que a junta é de revolução.
4. Defina **Centrar em** como "Eixo de Revolve1" dos dois lados. As flanges passam a partilhar um eixo.
5. Escreva `22.5` em **Ângulo (°)** para alinhar os furos dos parafusos, ou arraste o cursor.

## Circuitos fechados: ligações

Peças unidas em anel (um quadrilátero articulado, uma manivela e um deslizador, uma estrutura contraventada dos dois lados) formam um **circuito**. O PartCraft resolve cada circuito para que feche: as juntas nele assumem os valores que fecham o anel, movendo-se o menos possível em relação à posição inicial.

- **Defina ou arraste** um valor de uma junta num circuito e o resto do circuito acompanha-o. Num quadrilátero articulado, arraste o **Ângulo** da manivela e a biela e o balancim movem-se com ela. O valor que definiu mantém-se; os restantes são calculados a partir dele.
- Na lista, uma junta num circuito que ainda se possa mover fica **azul**: ainda se pode definir outro valor. Um circuito que não se pode mover (uma estrutura contraventada) mantém-se a preto. Um circuito que não pode fechar fica **vermelho**.
- A caixa **Peça** mostra **Circuitos**: quantos estão fechados e quantos valores ainda se podem mover, por exemplo "1 fechado; 1 valor ainda se pode mover".
- {{ui:Check the motion for clashes}} varre uma junta de um circuito com o circuito a acompanhá-la, passo a passo (ver [Verificar uma montagem quanto a colisões e movimento](topic:check-assembly)).

Uma ligação plana feita de barras planas tem de ser coerente em profundidade: duas peças unidas face a face dos dois lados de um anel precisam da mesma altura de empilhamento nos dois sentidos. Use o **Deslocamento** de uma junta para elevar uma peça quando o empilhamento não bate certo, caso contrário o circuito não pode fechar.

## Trabalhar com as peças

Clique numa peça na vista ou na lista para a selecionar. O painel da direita mostra o nome da peça, quantas cópias existem, o seu volume, as suas juntas, e se está fixa, definida pelas suas juntas, ou "Não unida: mantém-se onde foi colocada". Botões:

- {{ui:Edit this part}} (ou {{ui:Edit part}} na barra de ferramentas, ou faça duplo clique na peça na lista): abre a peça para edição;
- {{ui:Insert a copy}};
- {{ui:Make it the grounded part}};
- {{ui:Remove}}: remove também as suas juntas, depois de pedir confirmação.

Uma montagem mantém pelo menos uma peça: "Uma montagem mantém pelo menos uma peça. Feche-a em vez disso."

### Editar uma peça no contexto

1. Selecione uma peça e escolha {{ui:Edit part}}. A peça abre com o seu histórico; o título indica "Bracket (in Bracket assembly)".
2. Altere-a como qualquer outra peça.
3. Escolha {{ui:Back}} na barra de ferramentas. A montagem atualiza-se: todas as cópias dessa peça mudam, e as juntas em faces criadas por arestas de esboço acompanham a alteração.

Trazer a alteração de volta é um passo na lista de anulação da montagem.

## Anular, guardar e fechar

- A montagem tem a sua própria lista de anulação: {{key:Mod+Z}} e {{key:Mod+Y}} atuam sobre juntas, inserções e definições.
- {{ui:Save}} ou {{key:Mod+S}} transfere `<assembly name>.partcraft-asm.json`, com todas as peças dentro. Abra-o mais tarde com {{ui:Open}}.
- {{ui:Close}} fecha a montagem e regressa à peça com que começou. Se a montagem não estiver guardada, pergunta: {{ui:Cancel}}, {{ui:Discard the assembly}} ou {{ui:Save first}}.
- Para mudar o nome da montagem, clique num espaço vazio, para que nada fique selecionado, e altere o **Nome** no painel da direita.

## Montagens grandes

Uma montagem pode ter milhares de cópias de algumas peças. As cópias de uma peça são desenhadas em conjunto, uma junta que rode só posiciona as peças que lhe ficam por trás, e a lista de peças mostra as primeiras linhas com um botão "Mostrar mais" por baixo (a peça selecionada está sempre listada).

- Enquanto roda ou aplica zoom à vista, uma montagem com mais de cerca de 300,000 triângulos é desenhada como uma caixa por peça, e depois por completo um instante após parar.
- {{ui:Views}} › {{ui:Lightweight display}} mantém as caixas o tempo todo. A seleção de peças e de juntas continua a usar as peças reais.
- A velocidade de rotação depende também da sua placa gráfica. Os valores medidos pelo PartCraft constam das notas de lançamento, com a máquina de onde provêm.

## Problemas com as juntas

- Uma peça que nenhuma junta alcança aparece como **livre**, e o painel indica "Bracket2 não está unida à peça fixa, pelo que se mantém onde foi colocada."
- Um circuito que não pode fechar (os comprimentos não chegam, um limite trava uma junta, as faces não são coerentes em profundidade): "Revolute3 fecha um circuito que não pode fechar: está desfasado em 2.000 mm. Verifique as faces, os deslocamentos e os limites das juntas do circuito." As suas juntas ficam vermelhas.
- Se uma face ou um eixo usado por uma junta desaparecer após editar uma peça: "A face usada por esta junta já não existe em Bracket." Remova a junta e crie-a de novo.

Seguinte: [Verificar uma montagem quanto a colisões e movimento](topic:check-assembly).
