---
title: Manter um modelo .3dm ativo
summary: Altere um modelo no programa que o criou e veja o corpo do PartCraft acompanhar, a partir do Rhino 8 ou de uma definição do Grasshopper, com os recursos refeitos sobre a nova forma.
keywords: rhino, grasshopper, link ao vivo, conexão ao vivo, 3dm, nurbs, paramétrico, link, sincronizar, script, enviar, corpo importado
from: cf4dc9b2
---

Continue modelando a peça onde você a modela, e usine, verifique e documente aqui. Cada alteração no outro programa substitui um corpo importado no PartCraft, e os recursos depois dele são refeitos sobre a nova forma.

:::note
A conexão precisa do **CadCraft Studio** no mesmo computador. Uma aba do navegador não consegue fazer a conexão. Nada passa pela internet: o script fala com o Studio no endereço deste computador, com um token.
:::

:::warning
Esta conexão foi testada com o gravador de arquivos do script e com um substituto do outro programa, ainda não dentro do próprio Rhino ou do Grasshopper. Se algo falhar lá, diga o que foi exibido.
:::

## Configurar

1. No Studio, abra o PartCraft. Em {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}}, marque **Permitir que assistentes de IA e scripts usem o PartCraft**, depois **Editar**.
2. No Studio, escolha {{ui:Connect an assistant}}. Ele mostra o endereço e o token que você vai colar abaixo.
3. Baixe o script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Do Rhino

1. Execute `cadcraft_link.py` no editor de script do Rhino (Python 3 no Rhino 8).
2. Na primeira vez, cole o endereço e o token. Eles são salvos em `.cadcraft-link.json` na sua pasta pessoal, nunca no modelo. O Studio cria um novo token toda vez que inicia, então o script pede de novo nesse caso.

Execute o script de novo para parar.

## Do Grasshopper

Execute o script uma vez no Rhino primeiro, para que o endereço e o token sejam salvos.

1. Adicione um componente Script (Python 3) e cole nele todo o `cadcraft_link.py`.
2. Dê a ele estas entradas: `G` (a geometria, com acesso a lista), `N` (um nome, opcional), `On` (um interruptor booleano) e `Target` (opcional: `model` ou `part`, se os dois aplicativos estiverem abertos).
3. Defina `On` como verdadeiro.

Cada solução envia `G` e substitui o que o componente enviou da última vez.

## Como funciona aqui

- **Um corpo só.** Tudo o que está visível no modelo vira um único recurso importado, como ao [abrir um arquivo .3dm](topic:open-3dm-files).
- **Precisa fechar.** O PartCraft preenche pequenos furos e aberturas planas, e o outro programa é informado de quantos. Se o modelo ainda não fechar, o PartCraft mantém o corpo que tinha e a barra de status avisa. A próxima alteração que fechar atualiza o corpo.
- **Termine o que está fazendo.** Em um esboço ou um desenho, as atualizações são recusadas e tentadas de novo; elas chegam quando você voltar ao modelo.
- **Desfazer.** Atualizações com menos de dois segundos de diferença compartilham um passo de desfazer.
- **Salvar.** O arquivo da peça guarda a conexão. Execute o script de novo depois de reabrir o arquivo, e o mesmo recurso será atualizado.

**Só em um sentido.** As alterações aqui não voltam para o outro programa.

## Se algo der errado

- **"Nenhuma janela do ModelCraft ou do PartCraft permite isso":** faça o passo 1 da configuração.
- **"O Studio recusou o token":** o Studio reiniciou. Copie o novo token e execute o script de novo. Para o Grasshopper, execute primeiro no Rhino.
- **"Não foi possível alcançar o CadCraft Studio":** o Studio não está em execução, ou o endereço mudou.
