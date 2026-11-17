---
title: Jedro mreže
summary: Ta različica PartCraft zgradi vsak del z mrežnim jedrom, ki teče v vašem brskalniku. Kaj to pomeni za okrogle ploskve, prostornine in datoteke, kako ugotoviti, da deluje, in katere značilke čakajo na natančno jedro.
keywords: jedro, mreža, manifold, natančno, b-rep, fasetirano, krivulje, opencascade, occt, zaobljenje potrebuje natančno, še ni izdelano, brez povezave, webassembly
from: f931645c
---

Geometrijsko jedro je motor, ki zgodovino pretvori v trdno snov. Ta različica PartCraft ima enega: **mrežno jedro** (manifold-3d). Teče na vašem računalniku kot majhen program WebAssembly in je pripravljeno trenutek po odprtju aplikacije. Nič o vašem delu ni poslano nikamor.

| | Mrežno jedro |
|---|---|
| Okrogle oblike | Ravne fasete. **Krivulje** v podoknu dela določijo, kako fine so |
| Prostornine in površine | Fasetirane trdne snovi, nekoliko nižje pri okroglih delih |
| Skice, iztisni, izreži, zavrti, izvrtine, vzorci, zrcali, referenčne ravnine | Da |
| Zaobljenje in posnetje | Na ravnih robovih med ravnimi ploskvami; stiki zaobljenj so pokošeni |
| Lupina in nagib | Lupina odpre ravne ploskve (natančna debelina stene); nagib nagne ravne ploskve |
| Izvozi | STL, 3MF, STEP (natančen: okrogle ploskve zapisane na pravih površinah; ali fasetiran), risba PDF in DXF |
| Pogledi risbe | Narisani iz faset, vključno s prereznimi pogledi |
| Ploskve in robovi | Poimenovani in prepoznani po vrsti (ravna, valj, stožec, krogla, torus; ravna, krožnica), vzeti iz skic; uporabljajo jih delovna okolja Simulacija, Generativno in Izdelava, Meri, izbira in tabela izvrtin |

Čip blizu desnega konca vrstice stanja pove **Mrežno jedro**, medtem ko gradi vaš del.

## Kaj čaka na natančno jedro

Natančno (B-rep) jedro ohrani prave krožnice, valje in stožce ter gladka zaobljenja na katerem koli robu; na njem so zgrajeni potegni po poti, prehodi, površine, pločevina, rebra, več teles in uvoz STEP s krivimi ploskvami, ohranjenimi natančno. (Natančen izvoz STEP ne čaka nanj: mrežno jedro pozna pravo površino vsake ploskve iz skice, izvoz pa jo zapiše.) Prejšnje laboratorijske različice PartCraft so za to uporabljale OpenCascade. Njena licenca (LGPL) ne ustreza tej izdaji, kjer je vsaka aplikacija Apache-2.0 in uporablja samo knjižnice z dovoljenimi licencami, zato ni vključena. Nič tu nima datuma.

Do takrat te značilke ob izbiri pišejo **Še ni izdelano**: vrstica stanja navede razlog, namigi gumbov pa se končajo z „še ni izdelano (potrebuje natančno jedro)“. [Kaj še ni izdelano](topic:not-built-yet) navaja vsako posebej in kaj storiti namesto tega.

Del, narejen z njimi v prejšnji različici, se še vedno odpre. Te značilke ostanejo v zgodovini označene kot neizdelane (za razlog se postavite nad eno od njih), preostanek dela se zgradi, shranjevanje pa jih ohrani nespremenjene.

## Okrogle ploskve in krivulje

Mrežno jedro krožnico nariše kot mnogokotnik. **Krivulje** v podoknu dela določijo, koliko stranic ima polni krog; več stranic izgleda gladkeje in se bolj približa pravi vrednosti, gradnja pa traja dlje. Prostornine, površine in razdalje iz {{ui:Meri}} so te fasetirane trdne snovi: pri izvrtini ali izboklini so nekoliko manjše od okrogle oblike.

## Brez povezave in na spletu

Mrežno jedro je del lastnega prenosa aplikacije. Za delo brez povezave shranite PartCraft za uporabo brez povezave, medtem ko ste na spletu: v vrstici aplikacije izberite {{ui:Shrani za delo brez povezave}} in počakajte, da piše **Pripravljeno za delo brez povezave**. Podrobnosti: [Delo brez povezave](common:offline).
