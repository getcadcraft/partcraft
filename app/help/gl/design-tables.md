---
title: Configuracións e táboas de deseño
summary: Garde varios tamaños e versións dunha peza como configuracións con nome gardadas no ficheiro da peza, con características activadas ou desactivadas en cada unha, cambie entre elas dun clic, impórteas ou expórtaas como táboa de deseño en CSV, ou constrúaas todas desde a liña de comandos.
keywords: táboa de deseño, configuracións, configuración, tamaños, familia de pezas, csv, folla de cálculo, variantes, guiado por táboa, suprimir, suprimido, desactivar unha característica, opcións, con ou sen, configurador
from: 17249afb
---

Unha **configuración** é un tamaño da peza: un conxunto con nome de valores para os seus parámetros. A peza garda as súas configuracións no seu propio ficheiro, así que viaxan con ela. Unha **táboa de deseño** é o mesmo que un ficheiro CSV, unha fila por configuración.

As configuracións fixan **parámetros**, así que engada primeiro estes (ver [Controlar unha peza con parámetros](topic:parameters)). Unha configuración garda os parámetros que son números simples; os parámetros calculados a partir de outros (como `area = w * d`) seguen por si sós.

## Gardar unha configuración

1. Na lapela {{ui:Parámetros}}, fixe os parámetros para un tamaño da peza.
2. Debaixo de **Configuracións**, escriba un nome (por exemplo `Grande`) e prema {{ui:Gardar valores actuais}} ou {{key:Enter}}.

A nova configuración márcase como **activa**. Se despois cambia un parámetro, dirá **activa, cambiada desde**, para que saiba que a peza xa non coincide con ela.

## Cambiar, actualizar, renomear, eliminar

- {{ui:Aplicar}} fixa os parámetros cos valores desa configuración e reconstrúe a peza.
- {{ui:Actualizar}} garda os valores actuais nesa configuración.
- Para renomear unha, escriba o novo nome na súa caixa e prema {{key:Enter}}.
- {{ui:Eliminar}} quita a configuración. Os parámetros conservan os seus valores.

Cada unha destas accións é un paso: {{key:Mod+Z}} volve atrás. Se renomea un parámetro, todas as configuracións seguen o novo nome; se elimina unha, deixa de figurar nelas.

## Activar e desactivar características nunha configuración

Unha configuración tamén garda que características están desactivadas, así que unha peza pode ter versións **con** e **sen** algo: buratos de fixación, un chaflán, un resalte.

1. Desactive a característica: prema nela no historial e despois {{ui:Suprimir}} en {{ui:Propiedades}}.
2. Garde a configuración como de costume, por exemplo `Sen buratos`. A súa fila enumera o que desactiva.
3. Active de novo a característica ({{ui:Reactivar}}) e garde outra configuración, por exemplo `Con buratos`.

Desde que unha configuración desactiva unha característica, aplicar unha configuración desactiva as súas características e **activa todas as demais**, xunto cos seus valores de parámetros, nun só paso. Unha configuración gardada antes de desactivar características en ningunha conta como «todo activado». {{ui:Actualizar}} garda as características tal como están agora, cos valores.

Unha peza cuxas configuracións desactivan características gárdase como unha versión máis nova do ficheiro: un PartCraft máis antigo indica que o ficheiro é dunha versión máis nova en lugar de abrilo sen elas.

:::note
A táboa de deseño CSV leva só valores de parámetros. Importar unha táboa sobre unha configuración cambia os seus valores e conserva as características que desactiva; o `--table` da liña de comandos constrúe só os valores.
:::

O ficheiro da peza gárdase coas configuracións e coa que estivese activa. A peza ábrese cos valores con que se gardou.

## Traer ou sacar unha táboa de deseño

Unha táboa de deseño é un ficheiro CSV cunha columna por parámetro e unha fila por configuración:

```
name,width,thick,bolt
pequeno,100,6,6.6
medio,140,8,8.5
grande,200,12,13
```

A primeira columna pode chamarse `name`, `config` ou `configuration`; todas as demais columnas teñen que ser o nome dun parámetro da peza. As celas son números, con unidades se quere (`8in`). Unha cela baleira deixa ese parámetro fóra da fila.

- {{ui:Importar CSV}} engade cada fila como configuración. Unha fila co nome dunha configuración existente substitúea. Importar é un só paso.
- {{ui:Exportar CSV}} escribe as configuracións. Se aínda non hai ningunha, escribe unha fila cos valores actuais, un punto de partida para unha folla de cálculo.

Un nome de configuración que unha folla de cálculo lería como fórmula (que comeza por `=`, `+`, `-` ou `@`) escríbese con un `'` diante.

## Todos os tamaños de golpe

{{ui:Paquete de variantes…}} debaixo de **Configuracións** constrúe todas as configuracións, ou unhas poucas escollidas, como STEP, IFC, DWG e unha vista previa nun só zip, con unha táboa dos seus parámetros: ver [Facer un paquete de variantes coas súas configuracións](topic:variant-pack).

A ferramenta de liña de comandos constrúe un ficheiro por fila dunha táboa de deseño CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exporte primeiro as configuracións como CSV e despois pase ese ficheiro con `--table`. Ver [Scripts e liña de comandos](topic:scripts-and-cli). Unha peza gardada como script garda as súas configuracións nunha liña `configs json …`.
