---
title: Crear un paquete de variantes desde as súas configuracións
summary: Construír cada configuración dunha peza, ou algunhas escollidas, dunha vez como STEP, IFC, DWG e unha vista previa de cada unha, cunha táboa dos seus parámetros e a peza como un elemento da biblioteca coas súas variantes.
keywords: paquete de variantes, variantes, configuracións, familia de pezas, exportación por lotes, cada tamaño, step, ifc, dwg, vista previa, táboa, csv, json, biblioteca, configurador, configurador de produto, catálogo, item json
from: 9a6db99f
---

## O que vai facer

Entregar **todos os tamaños dunha peza de una vez**: un ficheiro STEP, IFC e DWG e unha imaxe para cada configuración, unha táboa que indica o que é cada unha, e un elemento da biblioteca que as pon todas nunha mesma páxina.

Primeiro precisa unha peza con **configuracións** (ver [Configuracións e táboas de deseño](topic:design-tables)). Unha configuración que desactive unha característica, como unha placa con e sen buratos, convértese na súa propia variante.

## Pasos

1. Abra a peza. Na lapela {{ui:Parámetros}}, busque **Configuracións**.
2. Prema en {{ui:Paquete de variantes…}}.
3. Marque as configuracións a construír (todas están marcadas) e os ficheiros a escribir: STEP, IFC, DWG, unha vista previa e o elemento da biblioteca.
4. Prema en {{ui:Crear o paquete}}. A liña de estado conta as variantes conforme se constrúen; a súa peza non cambia.
5. Descárgase un zip: `<part> variants.zip`.

## Que hai no zip

| Ficheiro | Que é |
|---|---|
| `<name>.step` | A configuración como sólido STEP. |
| `<name>.ifc` | IFC4, un elemento co corpo construído e os parámetros da peza como propiedades; o valor é o propio desa configuración. |
| `<name>.dwg` | As vistas fronte, planta, dereita e isométrica como folla de debuxo a tamaño completo. |
| `<name>.svg` | Unha imaxe isométrica de liñas da configuración. |
| `variants.csv`, `variants.json` | A táboa de parámetros: o id, o nome e o valor de cada parámetro de cada variante, as características que desactiva, os seus ficheiros, o seu volume e o seu tamaño. |
| `<part>.item.json` | A peza como un elemento da biblioteca con todas as súas variantes (ver abaixo). |
| `README.txt` | O que se fixo, as notas de abaixo e o que non se construíu. |

Os ficheiros nómeanse segundo a configuración. Unha configuración que non se pode construír (unha característica que non se pode facer con eses valores) queda fóra dos ficheiros e da táboa, aparece listada no README e nunha mensaxe despois de gardar o zip; as demais escríbense igualmente.

## Cousas que convén saber

- **STEP** é exacto cando o núcleo exacto está activo na súa versión. Sen el, o STEP é facetado (triángulos planos), e o README di iso.
- **DWG** é a folla de debuxo, non un modelo 3D. As súas liñas saen da malla, así que unha arista curva son moitas liñas curtas.
- **O elemento da biblioteca** leva un corpo e unha pegada por variante, nos eixes propios da biblioteca: Z cara arriba, a fronte cara a −Y, e o punto de inserción no centro da parte traseira, abaixo. O plano é o rectángulo envolvente de cada variante. Un elemento está limitado a 8 MB, así que unha variante moi pesada convértese nunha caixa do seu tamaño, e o README di cantas son.
- A configuración activa da peza é a variante predeterminada do elemento.
- Os portos (puntos de conexión para tubaxes e condutos) non se fixan desde PartCraft.

## Poñer as variantes nunha páxina da biblioteca

Suba `<part>.item.json` en **Biblioteca › Subir** no sitio. Escolla a súa categoría, licenza e a súa liña de crédito, e converterase nun elemento da biblioteca coas súas variantes. En BimCraft, ao colocalo pregunta cal variante, e Swap ofrece as outras. A páxina onde os visitantes escollen opcións, ven o 3D e descargan unha variante é por agora unha **vista previa de persoal**: aínda non está aberta ao público.

## Desde a liña de comandos

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` nomea as configuracións, `--formats` admite calquera de `step`, `ifc`, `dwg`, `preview`, e `--no-item` deixa fóra o elemento da biblioteca. Escribe unha carpeta, un zip ou ambos, e sae co código 1 cando non se pode construír unha variante. Ver [Scripts e liña de comandos](topic:scripts-and-cli).
