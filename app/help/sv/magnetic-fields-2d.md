---
title: Magnetfält i 2D (handledning)
summary: Räkna ut magnetfältet för en elektromagnet eller en permanentmagnet med analysbiblioteket: kör exemplen, läs flödestätheten, gapfältet, induktansen och dragkraften, ändra konstruktionen och bygg din egen modell av spolar, magneter och järn.
keywords: magnetisk, magnetostatik, magnetfält, flödestäthet, tesla, elektromagnet, solenoid, spole, ampervarv, järnkärna, luftgap, permeabilitet, induktans, magnetisk kraft, reluktans, magnetisk krets, vektorpotential, elektromagnetism, finita element, fem, motor, ställdon, transformator, magnetostatic2d, permanentmagnet, neodym, ndfeb, ferrit, remanens, arbetspunkt, återgång, läckage, hållmagnet
from: 215f6601
---

PartCraft:s analysbibliotek kan räkna ut magnetfältet för spolar och järn i 2D: ett tvärsnitt av något som är långt och lika längs hela sin längd, som en elektromagnet, en transformatorkärna, en skenledare eller tvärsnittet av en motor. Den här handledningen kör bibliotekets elektromagnetexempel, läser vad det säger, ändrar det, visar hur du modellerar din egen form och lägger sedan till en permanentmagnet.

Den använder Skript-arbetsytan och [analysbiblioteket](topic:craftscript-library). Du behöver inte kunna språket CraftScript för att följa den; exemplet säger vad varje rad gör.

## Vad som modelleras

En C-formad järnkärna, 100 × 80 mm utvändigt och 20 mm tjock, med ett 2 mm luftgap i dess högra ben. En spole med 100 varv som bär 10 A (1000 ampervarv) är lindad runt dess vänstra ben. Allt är långt i riktningen ut från skärmen, så svaren är **per meter djup**: multiplicera med det verkliga djupet för en riktig magnet.

Biblioteket `magnetostatic2d` löser den magnetiska vektorpotentialen på ett rutnät av 1 mm-rutor i en låda av luft runt magneten, och räknar sedan ut flödestätheten **B** (i tesla) från den.

## Kör exemplet

1. Välj **Skript** i rutan **Arbetsyta** till vänster i verktygsfältet.
2. Öppna fliken **Bibliotek** i skriptpanelen, och sedan **Exempel** › **Elektromagnet: fält, gap, induktans**.
3. Klicka på {{ui:Öppna (skrivskyddad)}}, tryck sedan på {{key:F5}}.

På en eller två sekunder visar arbetsytan flödestätheten, och konsolen skriver:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Diagrammet under arbetsytan är den vertikala flödestätheten B_y längs kärnans mittlinje, från vänster till höger: ungefär −0,55 T i det vänstra benet (flödet går nedåt där), nästan ingenting i fönstret, och +0,55 T i det högra benet och över gapet (flödet går tillbaka uppåt). Samma flöde passerar järnet och gapet, så de två benen och gapet visar nästan samma värde.

## Läs resultaten

- **Fältet i gapet** är 0,543 T. En handräkning behandlar kärnan som en magnetisk krets, B = μ0 N I / (g + l / μr), där g är gapet, l längden på vägen genom järnet och μr järnets relativa permeabilitet; den ger 0,552 T. Fältet är något lägre än handräkningen eftersom flödet buktar ut runt gapet (fältspridning) och en del av flödet tar en genväg över fönstret (läckage). Med ett mindre gap eller ett finare rutnät kommer de två närmare varandra.
- **Induktansen** för spolen med 100 varv är 0,154 H per meter djup, från energin som lagras i fältet. Kretsformeln ger mindre (0,110 H/m) eftersom den bara räknar flödet genom gapet, inte flödet som läcker förbi det.
- **Dragkraften** som sluter gapet är B² w / (2 μ0) för en gapyta w bred: ungefär 2300 N per meter, eller 117 N för en magnet 50 mm djup.
- **Toppvärdet** 1,97 T sitter i fönstrets inre hörn, där flödet vänder skarpt. Modellen behandlar järnet som linjärt; verklig elektroplåt mättas vid ungefär 1,5 till 2 T, så behandla värden över det som en varning, inte ett svar.

:::note
Bibliotekets egna tester kör det här exemplet och kontrollerar gapfältet mot formeln för den magnetiska kretsen vid varje ändring i PartCraft. Metoden, dess referenser och dess andra kontroller (en lång solenoid, en järnkärnad solenoid) finns i huvudet av `magnetostatic2d`: klicka på den i biblioteket.
:::

## Ändra konstruktionen

1. Klicka på {{ui:Gör en kopia}} ovanför det skrivskyddade skriptet. Kopian sparas med din del.
2. Ändra ett värde nära början och tryck på {{key:F5}} igen. Prova:
   - `g = 0.001;` — halva gapet: gapfältet nästan fördubblas, och det gör dragkraften också (den följer B²).
   - `mur = 200;` — en sämre kärna: fler ampervarv går åt i järnet.
   - `N = 200;` — dubbelt så många varv: dubbelt fält, fyra gånger induktansen.
   - `h = 0.0005;` — ett finare rutnät: närmare svar, ungefär fyra gånger så lång tid.

Varje körning ersätter arbetsytan. Variablerna som skriptet skapade (som `Bgap`, `L`, `F`) finns kvar i listan Variabler för dina egna beräkningar.

## Modellera din egen form

Exemplet bygger allt från tre listor, ett värde per rutnätsruta, vilket du kan göra för vilken form som helst ritad med raka linjer längs rutnätet:

- **Var järnet finns:** `iron` är sann för rutorna inuti kärnan. Exemplet bygger den från rektanglar: `frame & ~window & ~gap` betyder "i ramen, inte i fönstret, inte i gapet".
- **Permeabiliteten:** `1 + (mur - 1) * iron` är 1 i luft och `mur` i järnet. Ge flera material egna värden på samma sätt.
- **Strömmen:** `J` är strömtätheten i ampere per kvadratmeter, positiv ut från skärmen, negativ in i den. En spole har två sidor med motsatta tecken; exemplet räknar ut `J0` så att en sida bär N I.

Sedan löser `r = magnetostatic2d(m, permeability, J)` den. `r.B` är flödestätheten i varje ruta (två kolumner, x och y), `r.Bmag` dess storlek, `r.energy` den lagrade energin per meter. `plot(x, y)` ritar en linje.

Biblioteket arbetar i meter och vyn i millimeter, så ett fält visat som det är skulle ritas tusen gånger för litet. Exemplet visar det på en kopia av rutnätet i millimeter (`mm = quadGrid(…)`, och sedan `show(field(mm, …))`): kopiera de två raderna.

Som standard håller kanten på lådan kvar fältet: inget flöde lämnar den. Gör lådan minst två eller tre gånger så stor som magneten, så att det inte trycker ihop fältet. För en symmetrisk magnet kan du modellera halva: huvudet av `magnetostatic2d` säger vilket kantvillkor som ska användas på en symmetrilinje.

## Permanentmagneter

Det andra exemplet, **Exempel** › **Permanentmagnet i järnkärna: arbetspunkt, läckage, dragkraft**, är samma kärna med spolen borttagen och en 10 mm skiva av det vänstra benet ersatt med en magnet, uppmagnetiserad uppåt. Kör det med {{key:F5}}. Det skriver:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Arbetspunkten.** En magnet beskrivs med sin **remanens** Br (fältet den behåller när den kortslutits av järn: ungefär 1,2 T för en sintrad NdFeB-magnet, 0,4 T för ferrit) och sin återgångspermeabilitet (ungefär 1,05 och 1,1). Att öppna ett gap trycker den nedåt på sin återgångslinje: här till 1,04 T, med H riktat mot B inuti den.
- **Läckage.** Handräkningen utan läckage ger 0,97 T i gapet; modellen ger 0,68 T. En magnet driver sitt flöde med en stark puff över en kort sträcka, så mycket av det går rakt tillbaka över fönstret i stället för genom gapet. Läckagefaktorn säger hur mycket: 1,53 här. Sätt `g = 0;` för en sluten järnhållare: magneten arbetar då inom en halv procent av handräkningen.
- **Magneter i din egen modell.** Ge `magnetostatic2d` magneterna som `struct('Br', Br)`, där `Br` har en rad per rutnätsruta med remanensen längs x och y i tesla (noll utanför magneterna), och ge magnetrutorna deras återgångspermeabilitet i permeabilitetslistan:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  För en magnet uppmagnetiserad i en vinkel, lägg `Br·cos(vinkel)` och `Br·sin(vinkel)` i de två kolumnerna; för en ringmagnet uppmagnetiserad utåt, räkna ut varje rutas riktning från dess position. `r.H` ger fältstyrkan H i varje ruta.

Modellen håller en magnet på sin raka återgångslinje oavsett hur hårt den drivs. En verklig magnet som drivs förbi sitt knä (av ett stort gap, en stark spole eller värme) förlorar en del av sin styrka för gott; kontrollera arbetspunkten mot tillverkarens kurva för kvaliteten och temperaturen.

Bibliotekets tester kontrollerar magneter mot två handresultat: en rund magnet i öppen luft (inuti den är B = Br / (1 + μr)) och en magnet sluten av en järnhållare (den magnetiska kretsen), båda inom 1 %.

## Vad den inte gör ännu

- **Mättnad.** Järnet är linjärt: dubbel ström, dubbelt fält, utan gräns.
- **Avmagnetisering.** Magneter stannar på sin raka återgångslinje (se ovan).
- **Virvelströmmar** och **förluster** (järnförlust, kopparförlust).
- **Rörliga delar och vridmoment.** Ingen rotor som snurrar i en stator, inget vridmoment mot vinkel.
- **Runda former.** Rutnätet består av lika stora rutor, så krökta konturer blir trappade.
- **3D.** Allt är ett tvärsnitt av något långt.

Motorkonstruktion (en roterande rotor, vridmoment och förluster i 2D) undersöks för en senare version. Se [Inte byggt ännu](topic:not-built-yet).
