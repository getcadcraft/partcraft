---
title: Desbaste 3D e mecanizado de restos
summary: Retire o material arredor de todo o modelo nivel a nivel cunha fresa plana, de punta redonda ou esférica, deixando material para o acabado, e logo deixe que unha ferramenta máis pequena corte só onde a primeira deixou material. O que garanten as traxectorias e o que non.
keywords: desbaste 3D, desbaste, restos, mecanizado de restos, desbaste de restos, material restante, material a deixar, paso de profundidade, niveis, nivel z, nivel de auga, rampa, mergullo, rascadura, ferramenta máis pequena
from: 29ddc266
---

Dúas operacións de Fabricación, baixo {{ui:Máis}} na súa barra, retiran material de **todo o modelo** en 3D, coa ferramenta mantida vertical (ou ao longo da [dirección de ferramenta](topic:multi-axis#ferramenta-inclinada-nunha-operacion-ordinaria) propia da operación). Non precisan seleccións.

## Desbaste 3D

{{ui:Desbaste 3D}} baixa desde o alto do material dun **paso de profundidade** de cada vez. En cada nivel retira todo o que a ferramenta pode alcanzar sen tocar o modelo: filas rectas separadas un **paso lateral** (unha fracción do diámetro da ferramenta), e logo unha volta ao bordo do que pode alcanzar, para seguir as paredes e non deixalas como unha fila de escalóns en planta.

- **Material a deixar**: canto se mantén a ferramenta lonxe do modelo en todas partes, para a pasada de acabado (predeterminado 0,5 mm).
- **Un nivel en cada cara plana**: un nivel extra á altura de cada cara plana do modelo (máis o material a deixar), para que un fondo non quede case un paso de profundidade enteiro arriba.
- **Ignorar material máis fino có**: o material máis fino que isto, cara arriba ou de lado, non paga a pena unha pasada (0,05 mm para desbaste, 0,5 mm para mecanizado de restos, para que un fío de material ao longo dunha parede non mande a ferramenta máis pequena por todas as paredes).
- **Fondo**: non se corta nada por debaixo desta altura. Baleiro significa o fondo do modelo.

Comeza co material **tal como o deixaron as operacións anteriores**: despois dunha pasada de cara non corta o aire onde pasou a fresa de planear.

Para baixar: onde a ferramenta atoparía material no seu descenso, faino en rampa ao longo da súa propia pasada, co **ángulo de rampa**, de ida e volta sobre como moito dous diámetros da ferramenta. Unha pasada demasiado curta para iso mergúllase en vertical á avance de mergullo; a operación conta esas pasadas e avisa, porque unha ferramenta que non corta no seu centro non debería facelo.

## Mecanizado de restos

{{ui:Restos}} segue a mesma estratexia para **unha ferramenta máis pequena despois dunha máis grande**. Lee a simulación do material e corta só onde aínda queda material en pé: nos recunchos interiores onde a ferramenta grande non podía entrar, nas ranuras onde non cabía, e nos escalóns que deixou nas pendentes. En todo o demais non fai nada, así que a súa traxectoria é unha pequena parte do que tomaría a mesma ferramenta sobre material novo.

Póñao despois da operación de desbaste e escolla a ferramenta máis pequena. Precisa a simulación do material das operacións anteriores, que o espazo de traballo sempre executa.

## Como de boas son as traxectorias

- **Sen rascadura.** As posicións da ferramenta calcúlanse nunha rede, co cortador tomado un pouco máis grande do que é (en 1,4 celas da rede de lado, e polo material a deixar), así que en calquera punto onde está queda libre do modelo. As probas comprobaron cada punto de corte contra a ferramenta exacta sobre a malla exacta, e a simulación do material despois de cada execución: sen rascadura, sen movemento rápido a través do material.
- **O prezo diso**: as paredes quedan con algo máis do material a deixar, ata a cantidade amosada como «Material extra nas paredes» na operación (uns 0,5 mm para unha ferramenta Ø6, menos para unha máis pequena). A pasada de acabado retírao.

Estas traxectorias non son:

- As filas son liñas rectas, non desprazamentos da forma da peza nin curvas de compromiso constante. Fan máis levantamentos e máis movementos en baleiro que unha estratexia de desprazamento ou adaptativa, e a primeira fila en cada nivel corta o ancho completo da ferramenta. Para cavidades de fondo plano, [Adaptativo](topic:manufacture) é o mellor desbaste.
- Non se comproban o vástago nin o portaferramentas da ferramenta. Un aviso indica cando o corte é máis profundo que a lonxitude de canle.
- Os socavados non se ven: o modelo é o que a ferramenta atopa baixando polo seu eixo. Para desbastar un lateral, dé a unha segunda operación unha [dirección de ferramenta inclinada](topic:multi-axis#ferramenta-inclinada-nunha-operacion-ordinaria).
- O mecanizado de restos só coñece o material tan ben como a rede da simulación (celas de 0,1 a 2 mm, segundo o tamaño da peza).
- Nunha peza grande o programa é longo (máis de 100.000 movementos para unha brida de 200 mm cunha ferramenta Ø6) e tarda uns dous minutos en calcularse, e cada cambio no espazo de traballo volve calcular o programa completo. Use a ferramenta máis grande que caiba para o desbaste.
- Comprobe a saída no simulador da súa máquina antes de cortar.
