---
title: Deschiderea unei piese standard
summary: Porniți o piesă dintr-un șurub, bolț, piuliță, șaibă, știft, rulment sau pană, dimensionată după standardul său, cu fiecare dimensiune din tabelul standardului ca o configurație.
keywords: piesă standard, piese standard, bolț, șurub, hexagonal, piuliță, șaibă, știft, știft cilindric, rulment, rulment radial cu bile, pană, pană paralelă, element de asamblare, șablon, bibliotecă, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme
from: b9e2811f
---

PartCraft deschide piese mecanice comune gata făcute: dimensiunile vin din tabelele standardelor, iar fiecare dimensiune din tabel este o configurație la care puteți trece.

## Deschiderea uneia

1. Faceți clic pe {{ui:Piesă standard}} din grupul {{ui:Fișier}}.
2. În {{ui:Piesă}}, alegeți tipul, de exemplu {{ui:Șurub cu cap hexagonal (ISO 4017)}}.
3. În {{ui:Format}}, alegeți dimensiunea, de exemplu `M10 × 40`.
4. Faceți clic pe {{ui:Deschidere}}.

Piesa se deschide ca o piesă nouă, nesalvată. Salvați-o pentru a o păstra ({{key:Mod+S}}).

| Piesă | Standard | Parametri |
|---|---|---|
| Șurub cu cap hexagonal, bolț hexagonal | ISO 4017, ISO 4014, ASME B18.2.1 (inch) | `d` dimensiunea filetului, `s` distanța între laturi, `k` înălțimea capului, `l` lungimea |
| Piuliță hexagonală | ISO 4032, ASME B18.2.2 (inch) | `d`, `s`, `height` |
| Șaibă plată | ISO 7089 | `d1` interior, `d2` exterior, `h` grosime |
| Știft paralel | ISO 2338 | `d`, `l` |
| Rulment radial cu bile | ISO 15 | `d` alezaj, `D` exterior, `B` lățime |
| Pană paralelă | DIN 6885-1, forma A | `b` lățime, `h` înălțime, `l` lungime |

## Schimbarea dimensiunii

Fiecare dimensiune este o configurație (vezi [Configurații și tabele de proiectare](topic:design-tables)): deschideți {{ui:Parametri}} și alegeți alta sau modificați un parametru, de exemplu `l` pentru un șurub mai lung, și salvați-o ca o configurație proprie.

## Ce este modelat

- Șuruburi și bolțuri: capul hexagonal și tija netedă. Piulițe: hexagonul cu o gaură de dimensiunea nominală a filetului. Filetele nu sunt modelate; adăugați unul cu {{ui:Filet}} dacă aveți nevoie (vezi [Filete](topic:threads)).
- Știfturi: un cilindru simplu; teșiturile de capăt sunt lăsate în afară.
- Rulmenți: doar învelișul exterior (un inel al alezajului, diametrul exterior și lățimea), ceea ce trebuie pentru a-l poziționa.
- Pene: pana cu capete rotunjite.

Materialul piesei este oțel, deci panoul de masă arată greutatea acesteia. Roțile dințate nu sunt încă aici: PartCraft nu are operație de dinți, iar un disc nu este o roată dințată. CadCraft desenează roțile dințate după convenția de desen, iar biblioteca le are ca desene.
