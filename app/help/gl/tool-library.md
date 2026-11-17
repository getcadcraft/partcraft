---
title: A biblioteca de ferramentas
summary: Garde no navegador as ferramentas que usa para que todas as pezas poidan telas, e mova as bibliotecas de ferramentas entre ordenadores como ficheiro JSON.
keywords: biblioteca de ferramentas, ferramentas, exportar, importar, JSON, gardar ferramentas, número T, fresa de topo, ferramentas do taller
from: 8b9f2483
---

A lapela **Ferramentas** de Fabricación lista as ferramentas da peza. Baixo **Biblioteca de ferramentas** pode gardar as súas propias ferramentas máis aló dunha soa peza:

- {{ui:Gardar esta ferramenta}} engade a ferramenta seleccionada a **As miñas ferramentas gardadas**; {{ui:Gardar todas as ferramentas desta peza}} engade todas. As miñas ferramentas gardadas consérvanse neste navegador e están dispoñibles para todas as pezas. Unha ferramenta que xa gardou (mesmo tipo, tamaño, canles e valores anulados) non se garda dúas veces.
- {{ui:Engadir a esta peza}} leva a ferramenta gardada escollida á peza. Se o seu número T xa o usa outra ferramenta da peza, recibe o seguinte número libre e o panel indícao. {{ui:Quitar da súa biblioteca}} elimínaa da lista de gardadas (non das pezas que xa a teñen).
- {{ui:Exportar ferramentas…}} escribe as ferramentas da peza como ficheiro `.json`; {{ui:Importar ferramentas…}} engade á peza as ferramentas dun ficheiro así, coas mesmas regras (unha ferramenta que xa está alí sáltase, e un número T ocupado móvese). O ficheiro contén tamaños, canles, materiais e os valores de avance e velocidade anulados que escribiu; non ten identificadores. Úseo para levar as ferramentas dun taller a outro ordenador ou para dárllelas a un compañeiro.

Se o navegador non pode conservar a biblioteca (o almacenamento está desactivado ou cheo), ao gardar indícao e **Exportar ferramentas** é a forma de conservar un ficheiro. Un ficheiro ten que ser unha biblioteca de ferramentas de PartCraft desta versión ou anterior, con como máximo 500 ferramentas de tamaños válidos; calquera outra cousa recházase co motivo.

As velocidades de corte e as cargas de viruta que trae unha ferramenta son valores de partida; vexa [Crear traxectorias e G-code](topic:manufacture).
