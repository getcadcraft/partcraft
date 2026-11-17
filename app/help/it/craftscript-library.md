---
title: La libreria di analisi
summary: La libreria di script di analisi leggibili nell'area di lavoro Script: cosa contiene ogni gruppo, come aprire una funzione in sola lettura, la sua intestazione con metodo, riferimenti e verifica, come creare una copia propria e come la copia sostituisce la funzione della libreria.
keywords: libreria, craftlib, analisi, elettromagnete, statica, modale, termica, ottimizzazione topologica, top88, SIMP, elettromagnetismo, elettrostatica, magnetostatica, fluido, lattice Boltzmann, LBM, mesh, voxel, tetraedri, riferimenti, verifica, controllo, copia, ombra
from: bf993859
---

La libreria di analisi è un insieme di script, ciascuno una funzione che si può leggere dall'inizio alla fine: come viene assemblata la matrice di rigidezza, dove vanno le condizioni al contorno, quale solutore viene eseguito, come vengono calcolati i risultati. Niente al suo interno è nascosto in una scatola nera; sono integrate solo le parti interne veloci (matrici degli elementi, solutori sparsi, generazione della mesh).

## Iniziare da un esempio

Il gruppo **Esempi** contiene cinque script brevi che usano la libreria dall'inizio alla fine. Fare clic su uno, premere {{ui:Apri (sola lettura)}}, poi {{key:F5}}: ciascuno pulisce la vista, mostra un risultato sulla tela e un grafico nei sotto-schermi.

| Esempio | Cosa mostra |
|---|---|
| Sollecitazione di una mensola | Una barra d'acciaio 100 × 10 × 10 mm sotto un carico di punta di 100 N: tensione di von Mises sulla barra deformata, e lo spostamento della punta confrontato con la teoria delle travi a quattro dimensioni di elemento diverse (in grafico) |
| Ottimizzazione topologica di una trave MBB | La classica ottimizzazione topologica 60 × 20: la formazione del progetto, la cedevolezza che scende, il layout finale (94 iterazioni, cedevolezza 203.19) |
| Campo di un condensatore | Due piastre larghe 4 mm, distanti 1 mm: potenziale e campo, la capacità con l'effetto di bordo confrontata con il valore ideale e con la formula di Palmer |
| Flusso in un canale | Flusso lattice Boltzmann attorno a un pilastro in un canale: il campo di velocità e la storia della convergenza |
| Elettromagnete | Un nucleo di ferro a C con traferro e una bobina: la densità di flusso, il campo nel traferro confrontato con la formula del circuito magnetico, l'induttanza e l'attrazione attraverso il traferro. Illustrato in [Campi magnetici in 2D](topic:magnetic-fields-2d) |
| Magnete permanente | Lo stesso nucleo con un magnete permanente al posto della bobina: il punto di lavoro del magnete, il campo nel traferro confrontato con il circuito magnetico, quanto flusso si disperde, l'attrazione. In [Campi magnetici in 2D](topic:magnetic-fields-2d#permanent-magnets) |

## Gruppi

| Gruppo | Funzioni | Cosa fanno |
|---|---|---|
| Mesh | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Scatole e cilindri come esaedri, cubi o tetraedri; cubi o tetraedri di qualsiasi modello (la parte, un corpo, uno STL caricato); volumi e qualità degli elementi; selezione di nodi su un piano o su una faccia |
| Statica delle tensioni | `static_voxel`, `static_tet` | Tensione statica lineare su cubi o su tetraedri a 10 nodi: spostamenti, tensioni, von Mises, reazioni |
| Telai | `frame3d` | Telai 3D di travi, pilastri e controventi con il metodo diretto della rigidezza: svincoli d'estremità, vincoli e molle, carichi lungo le aste; spostamenti, reazioni, forze d'estremità delle aste. {{ui:Esporta come CraftScript}} di DetailCraft e BimCraft scrive per esso un intero modello. È un ausilio all'analisi, non una verifica normativa |
| Vibrazioni | `modal_tet` | Frequenze naturali e forme modali |
| Calore | `heat_steady`, `heat_transient`, `heat_system` | Conduzione stazionaria e transitoria con temperature fisse, apporto di calore, generazione, flusso e convezione |
| Ottimizzazione topologica | `top88`, `top99`, `topopt3d` | I codici 2D pubblicati da 88 e 99 righe, e lo stesso metodo in 3D su cubi |
| Elettromagnetismo | `poisson2d`, `magnetostatic2d` | Elettrostatica 2D (potenziale, campo, capacità, carica) e magnetostatica (potenziale vettore, densità di flusso, magneti permanenti) |
| Flusso di fluidi | `lbm2d`, `lbm3d` | Flusso lattice Boltzmann: il 2D scritto per esteso nello script, il 3D sul kernel di flusso proprio di PartCraft |

Ogni intestazione di funzione riporta i suoi argomenti esatti. Le unità sono quelle degli studi di PartCraft, salvo diversa indicazione nell'intestazione: millimetri, newton, megapascal, tonnellate per millimetro cubo per la densità, watt e kelvin per il calore. Le funzioni elettromagnetiche e lattice Boltzmann lavorano in qualsiasi unità coerente; le loro intestazioni dicono quali.

## Come viene verificata la libreria

L'intestazione di ogni funzione termina con una **verifica**: un piccolo caso con una risposta nota. I test di PartCraft le eseguono tutte e, dove PartCraft ha uno studio proprio per lo stesso lavoro, il risultato dello script viene confrontato con quello studio sulla stessa mesh:

- la freccia della punta della mensola rispetto alla teoria delle travi (entro lo 0.2 % con cubi, 0.05 % con tetraedri), e rispetto ai solutori dello spazio di lavoro **Simulazione** sulla stessa mesh (uguali a molte cifre);
- la prima frequenza della mensola rispetto alla teoria delle travi (0.24 % più bassa, come previsto per una trave corta) e rispetto al solutore modale di **Simulazione**;
- calore: una parete piana riscaldata in modo esatto, un piccolo corpo che si raffredda come dice la formula a capacità concentrata, la temperatura di una lastra che si spegne come dice la teoria;
- ottimizzazione topologica: `top88` riproduce le 94 iterazioni e la cedevolezza 203.1925 dell'articolo (e 218.8032 con il filtro di densità); `topopt3d` termina alla stessa cedevolezza dello spazio di lavoro **Generativa** con le stesse impostazioni;
- la capacità di un condensatore e il campo di un solenoide lungo rispetto ai loro valori da manuale, il campo nel traferro dell'elettromagnete rispetto alla formula del circuito magnetico, e i magneti permanenti rispetto a un magnete tondo in aria e a un magnete chiuso da un'ancora di ferro;
- flusso nel canale rispetto al profilo parabolico esatto.

## Leggere una funzione

1. Aprire la scheda **Libreria** del pannello degli script.
2. Fare clic su una funzione. La sua intestazione mostra: cosa calcola, il metodo, le unità, le ipotesi e i limiti, i **riferimenti** (libro o articolo, con i numeri di equazione) e una **verifica**: un piccolo caso con una risposta nota che i test di PartCraft eseguono.
3. {{ui:Apri (sola lettura)}} apre l'intero script in una scheda con bordo tratteggiato. Si può eseguire, selezionare ed eseguire parti di esso, ma non modificarlo.

## Modificarne una

Premere {{ui:Crea una copia}} (oppure **Crea una copia da modificare** sopra una scheda in sola lettura). La copia è uno script nella propria parte con lo stesso nome, quindi viene salvata con la parte, e **ogni chiamata a quella funzione ora usa la copia**: l'editor lo segnala sopra lo script. Rinominare la copia per tenerle entrambe.

## Usarne una

Chiamare una funzione della libreria da qualsiasi script con il suo nome, come una funzione integrata:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

I risultati tornano come valori nell'area di lavoro; i grafici e i campi che mostra compaiono nella vista e nei sotto-schermi.

Un'analisi statica della parte aperta, per esempio, richiede poche righe:

```
v = voxel_mesh(part(), 2);                   % cubi da 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % vincola il fondo
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N verso il basso sulla sommità
r = static_voxel(v, 210000, 0.3, bc);       % acciaio
```

`r` contiene gli spostamenti, le tensioni e le reazioni; la tensione di von Mises viene disegnata sulla parte deformata. Per le parti curve usare `tet_mesh` e `static_tet`, che possono anche caricare e vincolare intere facce (`face_nodes`).

:::note
Le funzioni della libreria sono scritte in CraftScript, e uno script Lua le chiama tramite `cs` come le funzioni integrate: `cs.static_tet(t, 200000, 0.3, bc)` (vedi [Script in Lua](topic:craftscript-lua)). Ogni funzione risolve un materiale e un caso di carico; le intestazioni elencano ciò che non è coperto.
:::
