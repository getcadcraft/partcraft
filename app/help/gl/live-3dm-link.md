---
title: Manter vivo un modelo .3dm
summary: Cambie un modelo no programa que o creou e vexa como o corpo de PartCraft o segue, desde Rhino 8 ou unha definición de Grasshopper, coas súas características refeitas sobre a nova forma.
keywords: rhino, grasshopper, ligazón en vivo, conexión en vivo, 3dm, nurbs, paramétrico, ligazón, sincronizar, script, enviar, corpo importado
from: cf4dc9b2
---

Siga dando forma ao modelo onde o modela, e mecanícao, revíseo e documéntao aquí. Cada cambio no outro programa substitúe un corpo importado en PartCraft, e as características posteriores refanse sobre a nova forma.

:::note
A ligazón necesita **CadCraft Studio** no mesmo ordenador. Unha lapela do navegador non pode establecer a conexión. Nada pasa pola internet: o script fala con Studio na propia dirección deste ordenador, cun token.
:::

:::warning
Esta ligazón probouse co escritor de ficheiros do script e cun substituto do outro programa, pero aínda non dentro de Rhino ou Grasshopper. Se algo falla alí, díganos que mensaxe deu.
:::

## Configurala

1. En Studio, abra PartCraft. En {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}}, marque **Permitir que os asistentes de IA e os scripts usen PartCraft**, e despois **Editar**.
2. En Studio, escolla {{ui:Connect an assistant}}. Mostra a dirección e o token que pegará máis abaixo.
3. Descargue o script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Desde Rhino

1. Execute `cadcraft_link.py` no editor de scripts de Rhino (Python 3 en Rhino 8).
2. A primeira vez, pegue a dirección e o token. Gárdanse en `.cadcraft-link.json` na súa carpeta persoal, nunca no modelo. Studio crea un token novo cada vez que arranca, así que o script volve preguntar entón.

Execute de novo o script para parar.

## Desde Grasshopper

Execute primeiro o script unha vez en Rhino, para que a dirección e o token queden gardados.

1. Engada un compoñente Script (Python 3) e pegue nel todo o contido de `cadcraft_link.py`.
2. Déalle estas entradas: `G` (a xeometría, con acceso de lista), `N` (un nome, opcional), `On` (un interruptor booleano) e `Target` (opcional: `model` ou `part`, se os dous programas están abertos).
3. Poña `On` en verdadeiro.

Cada cálculo envía `G` e substitúe o que o compoñente enviou a última vez.

## Como funciona aquí

- **Un só corpo.** Todo o que se ve no modelo convértese nunha única característica importada, como ao [abrir un ficheiro .3dm](topic:open-3dm-files).
- **Ten que pecharse.** PartCraft enche os buratos pequenos e as aberturas planas, e ao outro programa dille cantos son. Se o modelo aínda non se pecha, PartCraft conserva o corpo que tiña e a barra de estado diino. O seguinte cambio que se peche actualiza o corpo.
- **Acabe o que está facendo.** Nun esbozo ou nun debuxo, as actualizacións recházanse e tentanse de novo; chegan cando volve ao modelo.
- **Desfacer.** As actualizacións separadas por menos de dous segundos comparten un só paso de desfacer.
- **Gardar.** O ficheiro da peza conserva a ligazón. Execute de novo o script despois de reabrir o ficheiro, e a mesma característica actualízase.

**Só nun sentido.** Os cambios aquí non volven ao outro programa.

## Se algo sae mal

- **"Ningunha xanela de ModelCraft ou PartCraft o permite":** faga o paso 1 da configuración.
- **"Studio rexeitou o token":** Studio reiniciouse. Copie o token novo e execute de novo o script. Para Grasshopper, execútao antes en Rhino.
- **"Non se pode chegar a CadCraft Studio":** Studio non está en execución, ou cambiou a dirección.
