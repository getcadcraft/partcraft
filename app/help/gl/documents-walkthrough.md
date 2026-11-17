---
title: Documentos e revisións (o arquivo)
summary: Un percorrido paso a paso por un traballo real: poñer baixo control unha carpeta de pezas e conxuntos do proxecto, rexistrar unha peza en saída, cambiala, rexistrala en entrada cunha nota, liberala, ver o que a usa e a lista de materiais, o que ve unha segunda persoa mentres está bloqueada, e como funciona con carpetas na nube.
keywords: arquivo, documentos, percorrido, tutorial, rexistrar en saída, rexistrar en entrada, revisión, liberación, aprobar, bloqueo, historial, onde se usa, lista de materiais, bom, conxunto, carpeta na nube, carpeta do proxecto, dúas persoas, carpeta compartida
from: 0a5e6983
---

## O que vai facer

Vostede é Ana, que traballa na Clínica Riverside cun compañeiro, Ben. As pezas e os conxuntos do proxecto están nunha carpeta á que ambos accededes (unha unidade compartida, unha carpeta sincronizada ou unha carpeta na nube). Ao final, un ficheiro pasou da súa primeira copia a unha revisión liberada **A**, cambiouse de novo como **B.1**, vostede viu quen fixo cada cousa e viu o que Ben ve cando vostede ten o ficheiro.

Todo se garda nun cartafol oculto `.ccvault` xunto aos ficheiros: sen servidor, sen subida de nada (unha carpeta na nube é a excepción; véxase o último paso). Para ver cada botón e cada regra nun só lugar, consulte o tema *Documentos: rexistrar en saída, revisións e liberación* onde a súa aplicación o teña.

## 1. Configurar a carpeta do proxecto

1. Prema {{ui:Documentos…}} no grupo **Ficheiro** da barra de ferramentas.
2. Prema {{ui:Escolla a carpeta do proxecto}} e seleccione a carpeta que contén as pezas e os conxuntos do proxecto. (As carpetas de proxecto funcionan en Studio e en navegadores que poden abrir unha carpeta, como Chrome e Edge. Noutros navegadores o panel di iso.)
3. Prema {{ui:Cambiar}} xunto a **Usuario:** e escriba o seu nome, `Ana` (se o pide, tamén o nome deste computador). O panel mostra agora *Usuario: Ana en* e o seu computador. O seu nome aparece en todo o que fai.
4. Prema {{ui:Crear un arquivo nesta carpeta}} e escriba o nome do proxecto, `Riverside clinic`. O panel di *Arquivo iniciado para Riverside clinic.*

## 2. Poñer un ficheiro baixo control

1. Abra **Ficheiros que non están no arquivo** e prema {{ui:Engadir}} xunto a `plates/Bracket.partcraft.json`.
2. Aparece en **Ficheiros no arquivo** na revisión **A.1**, co estado **Traballo en curso**. A.1 é a súa primeira copia; o arquivo garda unha copia de cada revisión.

## 3. Rexistrar en saída, cambiar e rexistrar en entrada

1. Prema {{ui:Abrir}} xunto a `plates/Bracket.partcraft.json`. A peza ábrese en PartCraft e o panel péchase para que poida velA. Abra de novo o panel desde {{ui:Documentos…}}.
2. Abra de novo o panel e prema {{ui:Rexistrar en saída}}. A fila di agora **Rexistrado en saída a vostede**. Créase un ficheiro de bloqueo en `.ccvault/locks`; ninguén máis pode rexistrar en saída este ficheiro ata que vostede o rexistre en entrada.
3. Cambie a peza: edite unha cota, engada un burato. Gardar recházase salvo que o ficheiro estea rexistrado en saída a vostede, e o panel di por que; Gardar como funciona sempre para unha copia propia.
4. Abra o panel, prema {{ui:Rexistrar en entrada}} e escriba o que cambiou (`Moved the door`). O panel di *rexistrado en entrada como A.2*. O ficheiro do cartafol do proxecto é agora a peza que tiña aberta, e o bloqueo desaparece. Rexistrar en entrada sen cambios mantén a revisión.

Se cambia de opinión, {{ui:Desfacer rexistro en saída}} devolve o ficheiro sen unha nova revisión.

## 4. Revisión e liberación

1. Prema {{ui:Enviar para revisión}}. O estado pasa a **Para revisión** e o ficheiro pasa a ser de só lectura.
2. Antes de aprobar, prema {{ui:Configuración do proxecto}} e enumere quen pode aprobar (un nome por liña), por exemplo `Ben` e `Carla`, e marque a regra de que a persoa aprobadora sexa distinta do autor. Prema {{ui:Gardar configuración}}. Agora o propio arquivo rexeita a calquera outra persoa.
3. Ben (ou Carla) preme {{ui:Aprobar}} e escribe o nome da persoa aprobadora. O estado pasa a **Liberado** e a revisión pasa a ser **A**, con *aprobado por* e o nome. Un ficheiro liberado é de só lectura. {{ui:Devolver}} tería devolto o ficheiro a Traballo en curso, cun motivo.

O nome da persoa aprobadora é o nome escrito no panel; é un rexistro de quen asinou, non unha proba de identidade.

## 5. Unha nova revisión

1. No ficheiro liberado, prema {{ui:Nova revisión}}. Queda reservada para a seguinte letra.
2. Cámbiea e despois prema {{ui:Rexistrar en entrada}}. A revisión é **B.1**, traballo en curso. Libérea do mesmo xeito e pasará a ser **B**. {{ui:Desfacer rexistro en saída}} antes do primeiro rexistro en entrada deixa o ficheiro en **A**.

As letras de revisión seguen a orde A, B … Z, AA, AB. Se o seu estándar omite algunhas letras, a configuración do proxecto *Usar a secuencia ASME Y14.35* omite I, O, Q, S, X e Z nas seguintes revisións.

## 6. Ver o que pasou

Prema o nome do ficheiro para abrir os seus detalles:

- **{{ui:Historial}}**: todos os eventos, do máis recente ao máis antigo, con quen, en que computador e cando: *Rexistrado en entrada A.2* por Ana, *Liberado* por Ben, e así sucesivamente.
- **{{ui:Revisións}}**: a táboa de revisións: todas as revisións gardadas, coa súa data, quen as rexistrou en entrada, a nota e quen as aprobou. O arquivo garda unha copia de cada unha en `.ccvault/revs`.
- **{{ui:Usa}}**: as pezas dun conxunto.
- **{{ui:Usado por}}**: Usado por lista cada conxunto do arquivo que contén esta peza: cambie un soporte e sabe que conxuntos hai que revisar.

## Conxuntos: o que usan e a lista de materiais

Engada un conxunto (`.partcraft.json`, gardado desde o modo Conxunto) ao cartafol e engádao ao arquivo. Prema o seu nome: **Usa** lista as pezas que contén, coa revisión e o estado de cada unha; **Usado por** nunha peza lista cada conxunto que a contén. {{ui:Lista de materiais (CSV)}} garda a lista completa de pezas, nivel por nivel, con cantidades, revisións e estados, para unha folla de cálculo. Cambie un soporte e **Usado por** indícalle que conxuntos revisar.

## 7. O que ve Ben mentres vostede ten o ficheiro

Agora rexistre o ficheiro en saída de novo e pídalle a Ben que abra a mesma carpeta do proxecto no seu computador e abra o panel. Na fila do ficheiro ve **Rexistrado en saída por Ana en** o seu computador **desde** a hora, e non hai botón {{ui:Rexistrar en saída}}. Se o intenta igualmente, o arquivo recházao: o bloqueo é un ficheiro que o sistema non creará dúas veces, así que dúas persoas non poden ter ambas o ficheiro, nin no mesmo instante, cando a carpeta está no disco en Studio. (Nun navegador a carpeta só permite un intento razoable, e o panel di iso baixo **Carpeta**.)

Se Ana está ausente e Ben necesita o ficheiro, {{ui:Romper retirada}} libérao. Ten que escribir un motivo; queda no rexistro xunto con de quen era o rexistro en saída. Cando o proxecto enumera administradores, só eles poden facelo. Un rexistro en saída máis antigo que o límite de caducidade (14 días por defecto) márcase como *moito tempo*. Despois da ruptura, o rexistro en entrada tardío de Ana recházase, para que os dous non se sobrescriban.

## 8. Carpetas na nube

Unha carpeta na nube é unha carpeta do proxecto gardada no almacenamento na nube do seu equipo, así que o equipo non precisa unha unidade compartida. En Studio, con sesión iniciada na súa conta de CadCraft, o panel mostra {{ui:Abrir unha carpeta na nube}} xunto a {{ui:Escolla a carpeta do proxecto}}. Prema e seleccione a carpeta, listada como espazo de traballo / carpeta. O propietario do espazo de traballo crea a carpeta primeiro, e o almacenamento na nube do equipo debe estar en vigor. Todo o anterior funciona igual; o servidor crea o bloqueo, que é estrito entre persoas. Se non ten sesión iniciada, o panel pídello. Nunha pestana ordinaria do navegador non se ofrece o botón da nube; use Studio.

## Probar

Faga os oito pasos anteriores cunha copia dun ficheiro real. Para os pasos de dúas persoas precisa outra persoa, ou dúas xanelas con dous nomes. Se o fai cunha carpeta compartida real, a páxina de probas da comunidade ten unha comprobación que pide exactamente isto e recolle resultados.
