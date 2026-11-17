---
title: A biblioteca de análise
summary: A biblioteca de scripts de análise lexibles no espazo de traballo Script: que hai en cada grupo, abrir unha función en só lectura, a súa cabeceira con método, referencias e comprobación, facer unha copia propia, e como a copia substitúe á función da biblioteca.
keywords: biblioteca, craftlib, análise, electroimán, estática, modal, térmica, optimización topolóxica, top88, SIMP, electromagnetismo, electrostática, magnetostática, fluído, Boltzmann de retículo, LBM, malla, vóxel, tetraedros, referencias, comprobación, verificación, copia, sombra
from: bf993859
---

A biblioteca de análise é un conxunto de scripts, cada un unha función que se pode ler de arriba abaixo: como se ensambla a matriz de rixidez, onde van as condicións de contorno, que resolvedor se executa e como se calculan os resultados. Nada nela está oculto nunha caixa negra; só os bucles internos rápidos (matrices de elementos, resolvedores esparsos, mallado) están integrados.

## Comezar cun exemplo

O grupo **Exemplos** contén cinco scripts curtos que usan a biblioteca de principio a fin. Prema nun deles, prema {{ui:Abrir (só lectura)}}, e despois {{key:F5}}: cada un limpa a vista, amosa un resultado no lenzo e un trazado nas subpantallas.

| Exemplo | Que amosa |
|---|---|
| Tensión en voladizo | Unha barra de aceiro de 100 × 10 × 10 mm baixo unha carga de 100 N na punta: tensión de von Mises na barra deformada, e a frecha da punta fronte á teoría de vigas en catro tamaños de elemento (trazado) |
| Topoloxía de viga MBB | A optimización topolóxica clásica de 60 × 20: a formación do deseño, a caída da flexibilidade, o deseño final (94 iteracións, flexibilidade 203,19) |
| Campo dun condensador | Dúas placas de 4 mm de ancho, separadas 1 mm: potencial e campo, a capacidade con efecto de bordo fronte ao valor ideal e á fórmula de Palmer |
| Fluxo en canle | Fluxo de Boltzmann de retículo ao redor dun piar nunha canle: o campo de velocidades e o historial de converxencia |
| Electroimán | Un núcleo de ferro en forma de C cunha fenda de aire e unha bobina: a densidade de fluxo, o campo na fenda fronte á fórmula do circuíto magnético, a indutancia e a atracción a través da fenda. Explicado paso a paso en [Campos magnéticos en 2-D](topic:magnetic-fields-2d) |
| Imán permanente | O mesmo núcleo cun imán permanente en lugar da bobina: o punto de traballo do imán, o campo na fenda fronte ao circuíto magnético, canto fluxo se perde, a atracción. En [Campos magnéticos en 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupos

| Grupo | Funcións | Que fan |
|---|---|---|
| Mallado | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Caixas e cilindros como hexaedros, cubos ou tetraedros; cubos ou tetraedros de calquera modelo (a peza, un corpo, un STL cargado); volumes e calidade dos elementos; selección de nós nun plano ou nunha cara |
| Tensión estática | `static_voxel`, `static_tet` | Tensión estática lineal en cubos ou en tetraedros de 10 nós: desprazamentos, tensións, von Mises, reaccións |
| Pórticos | `frame3d` | Pórticos 3D de vigas, piares e riostras polo método directo da rixidez: liberacións nos extremos, apoios e molas, cargas ao longo das barras; desprazamentos, reaccións, esforzos nos extremos das barras. O {{ui:Exportar como CraftScript}} de DetailCraft e BimCraft escribe un modelo completo para isto. É unha axuda para a análise, non unha comprobación normativa |
| Vibración | `modal_tet` | Frecuencias naturais e formas modais |
| Calor | `heat_steady`, `heat_transient`, `heat_system` | Condución en réxime permanente e transitorio con temperaturas fixas, entrada de calor, xeración, fluxo e convección |
| Optimización topolóxica | `top88`, `top99`, `topopt3d` | Os códigos 2-D publicados de 88 e 99 liñas, e o mesmo método en 3-D sobre cubos |
| Electromagnetismo | `poisson2d`, `magnetostatic2d` | Electrostática 2-D (potencial, campo, capacidade, carga) e magnetostática (potencial vectorial, densidade de fluxo, imáns permanentes) |
| Fluxo de fluídos | `lbm2d`, `lbm3d` | Fluxo de Boltzmann de retículo: 2-D escrito no script, 3-D sobre o núcleo de fluxo propio de PartCraft |

A cabeceira de cada función indica os seus argumentos exactos. As unidades son as dos estudos de PartCraft salvo que a cabeceira diga outra cousa: milímetros, newtons, megapascais, toneladas por milímetro cúbico para a densidade, watts e kelvin para o calor. As funcións electromagnéticas e de Boltzmann de retículo traballan en calquera sistema de unidades coherente; as súas cabeceiras indican cal.

## Como se comproba a biblioteca

A cabeceira de cada función remata cunha **comprobación**: un caso pequeno con resposta coñecida. As probas de PartCraft executan todas, e cando PartCraft ten un estudo propio para o mesmo traballo, a resposta do script compárase con ese estudo sobre a mesma malla:

- a frecha da punta da viga en voladizo fronte á teoría de vigas (dentro do 0,2 % con cubos, do 0,05 % con tetraedros), e fronte aos resolvedores do espazo de traballo **Simulación** na mesma malla (coincidindo ata moitas cifras decimais);
- a primeira frecuencia da viga en voladizo fronte á teoría de vigas (0,24 % inferior, como cabe esperar nunha viga curta) e fronte ao resolvedor modal de **Simulación**;
- calor: unha parede plana quentada exactamente, un corpo pequeno que se arrefría como indica a fórmula de capacidade concentrada, a temperatura dunha lousa que se extingue como di a teoría;
- optimización topolóxica: `top88` reproduce as 94 iteracións e a flexibilidade 203,1925 do artigo (e 218,8032 co filtro de densidade); `topopt3d` remata coa mesma flexibilidade que o espazo de traballo **Xeración** cos mesmos axustes;
- a capacidade dun condensador e o campo dun solenoide longo fronte aos seus valores de libro de texto, o campo na fenda do electroimán fronte á fórmula do circuíto magnético, e os imáns permanentes fronte a un imán redondo no aire e a un imán pechado por unha armadura de ferro;
- o fluxo en canle fronte ao perfil parabólico exacto.

## Ler unha función

1. Abra a lapela **Biblioteca** do panel de scripts.
2. Prema nunha función. A súa cabeceira mostra: o que calcula, o método, as unidades, as hipóteses e límites, as **referencias** (libro ou artigo, con números de ecuación) e unha **comprobación**: un caso pequeno con resposta coñecida que executan as probas propias de PartCraft.
3. {{ui:Abrir (só lectura)}} abre o script completo nunha lapela con borde discontinuo. Pódese executar, seleccionar e executar partes del, pero non modificar.

## Cambiar unha

Prema {{ui:Facer unha copia}} (ou **Facer unha copia para editar** enriba dunha lapela de só lectura). A copia é un script da súa peza co mesmo nome, así que se garda coa peza, e **cada chamada a esa función usa agora a súa copia**: o editor indícao enriba do script. Cambie o nome da copia para conservar as dúas.

## Usar unha

Chame unha función da biblioteca desde calquera script polo seu nome, como unha función integrada:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Os resultados volven como valores no espazo de traballo; os trazados e campos que amosa aparecen na vista e nas subpantallas.

Unha análise estática da peza aberta, por exemplo, ocupa poucas liñas:

```
v = voxel_mesh(part(), 2);                   % cubos de 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % suxeitar a parte inferior
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N cara abaixo na parte superior
r = static_voxel(v, 210000, 0.3, bc);       % aceiro
```

`r` contén os desprazamentos, as tensións e as reaccións; a tensión de von Mises debúxase sobre a peza deformada. Para pezas curvas use `tet_mesh` e `static_tet`, que tamén poden cargar e suxeitar caras enteiras (`face_nodes`).

:::note
As funcións da biblioteca escríbense en CraftScript, e un script de Lua chámaas a través de `cs` como ás funcións integradas: `cs.static_tet(t, 200000, 0.3, bc)` (ver [Scripts en Lua](topic:craftscript-lua)). Cada función resolve un material e un caso de carga; as cabeceiras indican o que non se cubre.
:::
