---
title: Jedro mreže
summary: Ta različica PartCraft vsak del gradi z jedrom mreže, ki teče v vašem brskalniku. Kaj to pomeni za okrogle ploskve, prostornine in datoteke, kako prepoznati, da deluje, in katere značilke čakajo na točno jedro.
keywords: jedro, mreža, manifold, točno, b-rep, fasetirano, krivulje, opencascade, occt, zaobljenje potrebuje točno jedro, ni izdelano, brez povezave, webassembly
from: 68d32d16
---

Geometrijsko jedro je motor, ki vašo zgodovino spremeni v trdno telo. Ta različica PartCraft ga ima: **jedro mreže** (manifold-3d). Teče na vašem računalniku kot majhen program WebAssembly in je pripravljeno trenutek po odprtju aplikacije. Nič o vašem delu ne gre nikamor.

| | Jedro mreže |
|---|---|
| Okrogle oblike | Ravne fasete. **Krivulje** v podoknu dela določa, kako fine so |
| Prostornine in površine | Fasetiranega trdnega telesa, nekoliko nižje pri okroglih delih |
| Skice, iztiskanje, izrez, zavrtitev, izvrtine, vzorci, zrcaljenje, referenčne ravnine | Da |
| Zaobljenje in posnetje | Na ravnih robovih med ravnimi ploskvami; zaobljeni robovi, ki se srečajo, so poševno zrezani |
| Lupina in nagib | Lupina odpre ravne ploskve (točna debelina stene); nagib nagne ravne ploskve |
| Izvozi | STL, 3MF, STEP (fasetiran), PDF risba in DXF |
| Pogledi na risbi | Narisani iz faset, vključno s prerezi |
| Ploskve in robovi | Imenovani in prepoznani po vrsti (ravna, valj, stožec, krogla, torus; ravna, krožnica), vzeti iz skic: delovna okolja Simulacija, Generativno in Izdelava, Meri, izbor in tabela izvrtin jih uporabljajo |

Oznaka ob desnem koncu vrstice stanja pravi **Jedro mreže**, medtem ko gradi vaš del.

## Kaj čaka na točno jedro

Točno (B-rep) jedro ohranja prave krožnice, valje in stožce ter gladka zaobljenja na poljubnem robu; nanj so zgrajeni potegovanje po poti, prehodi, površine, pločevina, rebra, več teles, uvoz STEP in točen izvoz STEP. Predhodne laboratorijske izdaje PartCraft so za to uporabljale OpenCascade. Njegova licenca (LGPL) se ne ujema s to izdajo, kjer je vsaka aplikacija Apache-2.0 in uporablja samo knjižnice s permisivno licenco, zato ni vključena. Za to še ni datuma.

Do takrat te značilke ob izbiri pokažejo **Še ni izdelano**: vrstica stanja navede razlog, njihovi opisi gumbov pa se končajo z „še ni izdelano (potrebuje točno jedro)“. [Kaj še ni izdelano](topic:not-built-yet) našteje vsako posebej z opisom, kaj storiti namesto tega.

Del, narejen z njimi v predhodni izdaji, se še vedno odpre. Te značilke ostanejo v zgodovini označene kot še ni izdelano (za razlog se zadržite s kazalcem nad njo), preostali del se izdela, shranjevanje pa jih ohrani nespremenjene.

## Okrogle ploskve in Krivulje

Jedro mreže nariše krožnico kot mnogokotnik. **Krivulje** v podoknu dela določa, koliko stranic dobi polni krog; več stranic je gladkejših in bolj približanih pravi vrednosti, vendar traja dlje, da se izdela. Prostornine, površine in razdalje iz {{ui:Meri}} so tega fasetiranega telesa: pri izvrtini ali izboklini so nekoliko manjše kot pri okrogli obliki.

## Na spletu in brez povezave

Jedro mreže je del lastnega prenosa aplikacije. Za delo brez kakršne koli povezave shranite PartCraft za uporabo brez povezave, medtem ko ste na spletu: v vrstici aplikacije izberite {{ui:Shrani za delo brez povezave}} in počakajte, dokler ne piše **Pripravljeno za delo brez povezave**. Podrobnosti: [Delo brez povezave](common:offline).
