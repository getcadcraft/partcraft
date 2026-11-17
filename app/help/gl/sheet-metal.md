---
title: Chapa metálica: abas e patrón plano
summary: Comeza unha peza de chapa metálica desde un esbozo (unha placa plana ou un perfil dobrado), define o seu grosor, o raio de dobra e o factor K unha vez, dobra abas desde as súas arestas con alivios de dobra, e estende a peza plana como DXF para cortar.
keywords: patrón plano, desdobrar, desenvolvemento, lonxitude desenvolvida, dobra permitida, liña de dobra, dxf para láser, corte láser, chapa metálica, aba base, aba de aresta, aba, dobra, raio de dobra, factor k, grosor, calibre, alivio, alivio de dobra, canal, soporte, carcasa, chapa dobrada
from: 144bd0f6
---

:::note
**Non construído aínda nesta versión.** A chapa metálica necesita un núcleo xeométrico exacto, que esta versión de PartCraft non ten: constrúe todas as pezas co núcleo de malla. [O que aínda non está construído](topic:not-built-yet) explica que facer no seu lugar. O resto desta páxina descríbeo tal como funciona cun núcleo exacto.
:::

As pezas de chapa metálica comezan cunha **Aba base**. Esta define a chapa para toda a peza: o seu **grosor**, o **raio de dobra interior** e o **factor K**. Cada **Aba de aresta** posterior dobrase cos mesmos valores, así que a peza segue sendo unha soa chapa que se pode desdobrar. Ambas necesitan o **núcleo exacto** (ver [O núcleo de malla](topic:solid-kernels)).

## Comezar cunha aba base

1. Debuxa un esbozo. Usa un **perfil pechado** para unha placa plana (un rectángulo, ou calquera contorno pechado con furados). Usa **unha cadea aberta de liñas** para unha chapa dobrada, como unha L, unha U ou unha Z debuxadas na vista de canto da chapa.
2. Selecciona o esbozo no historial de elementos.
3. Abre {{ui:Máis}} no grupo Elementos e escolle {{ui:Aba base}}.

No panel da dereita:

- **Grosor (mm)** é o calibre da chapa.
- **Raio de dobra (mm)** é o raio interior de cada dobra. 0 dá unha esquina interior viva; o exterior segue dando voltas cun raio igual a un grosor.
- **Factor K** indica onde se sitúa a capa neutra dentro da chapa, de 0 (a cara interior) a 0,5 (o medio). Decide canto mide a chapa cando se estende. 0,44 é o predeterminado; o teu taller ou o provedor de material pode darche o seu.
- **Profundidade (mm)** é a distancia que percorre un perfil dobrado fóra do plano do esbozo. Unha placa ignórao.
- **Grosor fóra das dobras**: un perfil aberto é unha cara da chapa. Por defecto o grosor vai no interior da primeira dobra, así que as liñas que debuxaches son o exterior do canal. Márcao para poñer as liñas no interior. O resultado é o mesmo desde o extremo polo que debuxaches.

Cada esquina dunha cadea aberta convértese nunha dobra. Unha liña demasiado curta para soportar as súas dobras di iso, co lonxitude que necesita.

## Dobrar unha aba de aresta

1. Fai clic nunha aresta recta da cara superior ou inferior da chapa (as arestas longas, non as finas).
2. Escolle {{ui:Máis}} › {{ui:Aba de aresta}}. Sen aresta seleccionada, PartCraft espera a que fagas clic nunha; Esc cancela.

A aba dobra cara a arriba desde a cara desa aresta ao redor do raio interior da chapa, e despois continúa recta. No panel:

- **Ángulo (°)** é canto se dobra, de 1 a 180. 90 é unha aba cadrada.
- **Lonxitude (mm)** é a perna recta despois da dobra.
- **Dobrar ao outro lado** dobra desde a outra cara (abaixo en vez de arriba).
- **Desfase no inicio** e **Desfase no fin** acurtan a aba desde cada extremo da aresta.
- **Alivio de dobra**: cando un extremo ten desfase, córtase unha ranura na chapa xunto a el para que a dobra non rompa o metal alí. **Ancho do alivio** define o ancho da ranura; a súa profundidade é o raio de dobra máis o grosor. Escolle **Ningún** para deixar a esquina sen cortar.

Para cambiar a aresta despois, preme {{ui:Seleccionar}} no panel e fai clic noutra.

:::tip
Usa parámetros para o grosor e o raio (ver [Parámetros e ecuacións](topic:parameters)), así un cambio de calibre actualiza todas as abas de golpe.
:::

## Estender

Os dous paneis rematan con **Patrón plano**. Preme {{ui:Estender}}:

- Unha vista previa mostra a chapa desdobrada, coa liña central de cada dobra en trazos.
- **Tamaño** e **Área** son os do bruto plano.
- Cada dobra aparece listada coa súa dirección (**arriba** ou **abaixo**, vista desde o lado do esbozo da aba base), o ángulo e o raio interior.

Cada dobra toma a lonxitude da capa neutra da chapa a través dela, a **dobra permitida**: ángulo (en radiáns) × (raio interior + factor K × grosor). Así, unha dobra de 90° nunha chapa de 2 mm cun raio de 2 mm e factor K 0,44 engade 4,52 mm de chapa plana.

Nunha placa plana, os furados, cortes e alivios de dobra móstranse no plano exactamente onde están, incluídos os furados que atravesan unha aba.

Para cortar moitas, preme {{ui:Encaixar en follas…}} baixo o patrón plano: ver [Encaixar pezas planas en follas](topic:nest-flat-parts). Unha aba base dobrada estende como un rectángulo: a súa lonxitude desenvolvida × a súa profundidade, cunha liña de dobra por esquina.

{{ui:Gardar DXF}} garda o patrón plano para un láser, punzón ou chorro de auga, en milímetros:

- o contorno na capa **OUTLINE**, como liñas, arcos e círculos;
- as liñas de dobra na capa **BEND**, en trazos;
- unha nota en cada dobra na capa **BEND_NOTES**, como "UP 90° R2".

Cambia calquera cousa e o plano desaparece; preme {{ui:Estender}} de novo para obter o novo.

:::note
Comproba o factor K co teu taller antes de cortar: a lonxitude do plano depende del, e varía segundo o material, o grosor e as ferramentas.
:::

## Mensaxes

- **Chapa metálica necesita unha aba base antes** — engadiuse unha aba de aresta antes de calquera aba base. Móvea por debaixo dunha, ou engade primeiro unha aba base.
- **Unha aba de aresta necesita unha aresta recta** — as abas dóbranse só ao longo de liñas; as arestas curvas aínda non admiten unha.
- **Esa aresta non está nunha cara do grosor da chapa** — a aresta pertence a unha cara que non é a superior nin a inferior da chapa (por exemplo a parede dun furado). Selecciona unha aresta da cara superior ou inferior.
- **Os desfases non deixan nada da aresta** — os dous desfases suman a aresta enteira ou máis.
- **As abas de aresta nunha aba base dobrada aínda non se poden estender** — comeza cunha placa plana e dobra todo cara a arriba con abas de aresta, que se desdobran.
- **Os cortes e furados feitos despois dunha aba base dobrada aínda non se mostran no seu plano** — o plano dun perfil dobrado é só o seu rectángulo desenvolvido.
