---
title: Manter um modelo .3dm em tempo real
summary: Altere um modelo no programa onde foi criado e veja o corpo do PartCraft acompanhar, a partir do Rhino 8 ou de uma definição do Grasshopper, com as operações reconstruídas sobre a nova forma.
keywords: rhino, grasshopper, ligação em tempo real, ligação ativa, 3dm, nurbs, paramétrico, ligação, sincronização, script, envio, corpo importado
from: cf4dc9b2
---

Continue a moldar o modelo onde é modelado, e maquine, verifique e documente-o aqui. Cada alteração no outro programa substitui um corpo importado no PartCraft, e as operações seguintes são reconstruídas sobre a nova forma.

:::note
A ligação precisa do **CadCraft Studio** no mesmo computador. Um separador do navegador não consegue estabelecer a ligação. Nada passa pela internet: o script comunica com o Studio no endereço deste próprio computador, com um token.
:::

:::warning
Esta ligação foi testada com o escritor de ficheiros do script e com um substituto do outro programa, ainda não dentro do próprio Rhino ou Grasshopper. Se algo falhar aí, indique-nos o que foi mostrado.
:::

## Configurar

1. No Studio, abra o PartCraft. Em {{ui:Definições}} › {{ui:PartCraft}} › {{ui:Assistentes}}, marque **Permitir que assistentes de IA e scripts usem o PartCraft** e depois **Editar**.
2. No Studio, escolha {{ui:Ligar um assistente}}. Mostra o endereço e o token que vai colar abaixo.
3. Transfira o script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## No Rhino

1. Execute `cadcraft_link.py` no editor de scripts do Rhino (Python 3 no Rhino 8).
2. Na primeira vez, cole o endereço e o token. Ficam guardados em `.cadcraft-link.json` na pasta pessoal, nunca no modelo. O Studio cria um novo token sempre que arranca, pelo que o script volta a pedi-los nessa altura.

Execute o script de novo para parar.

## No Grasshopper

Execute primeiro o script no Rhino uma vez, para que o endereço e o token fiquem guardados.

1. Adicione um componente Script (Python 3) e cole nele todo o `cadcraft_link.py`.
2. Defina estas entradas: `G` (a geometria, com acesso a listas), `N` (um nome, opcional), `On` (um interruptor booleano) e `Target` (opcional: `model` ou `part`, se as duas aplicações estiverem abertas).
3. Defina `On` como verdadeiro.

Cada cálculo envia `G` e substitui o que o componente enviou da última vez.

## Como funciona aqui

- **Um corpo.** Tudo o que está visível no modelo passa a ser uma só operação importada, tal como ao [abrir um ficheiro .3dm](topic:open-3dm-files).
- **Tem de fechar.** O PartCraft preenche pequenos furos e aberturas planas, e o outro programa é informado de quantos. Se o modelo continuar aberto, o PartCraft mantém o corpo que tinha e a barra de estado indica-o. A alteração seguinte que fechar atualiza-o.
- **Conclua o que está a fazer.** Num esboço ou num desenho, as atualizações são recusadas e tentadas de novo; chegam quando voltar ao modelo.
- **Anular.** Atualizações feitas com menos de dois segundos de intervalo partilham um só passo de anulação.
- **Guardar.** O ficheiro da peça guarda a ligação. Execute o script de novo depois de o reabrir, e a mesma operação é atualizada.

**Só num sentido.** As alterações feitas aqui não voltam ao outro programa.

## Se algo correr mal

- **«Nenhuma janela do ModelCraft ou do PartCraft o permite»:** faça o passo 1 da configuração.
- **«O Studio recusou o token»:** o Studio foi reiniciado. Copie o novo token e execute o script de novo. Para o Grasshopper, execute-o primeiro no Rhino.
- **«Não é possível contactar o CadCraft Studio»:** o Studio não está em execução, ou o endereço mudou.
