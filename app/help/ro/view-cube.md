---
title: Cubul de vizualizare
summary: Faceți clic pe o față, muchie sau colț al cubului din colțul vederii ca să priviți de acolo, trageți-l ca să orbitați, rotiți inelul busolei, treceți în jurul unei vederi perpendiculare pe o față și reveniți acasă.
keywords: cub de vizualizare, viewcube, cub, busolă, nord, vedere de start, vederi standard, sus, față, dreapta, iso, colț, muchie, orbitare, rotire vedere, pictogramă de axe, indicator de colț, navigare
from: afc33dc7
---

Cubul de vizualizare stă în dreapta sus a vederii 3D (nu în timpul schițării sau pe foaia de desen). Se rotește odată cu vederea, așa că arată mereu în ce direcție priviți: {{ui:Sus}} este partea +Y a piesei (planul Sus), {{ui:Față}} partea +Z (planul Față vă privește când îl priviți), {{ui:Dreapta}} partea +X. Rămâne transparent până când îl indicați.

## Privire dintr-o latură, muchie sau colț

1. Indicați cubul. Partea de sub cursor se luminează: mijlocul unei fețe, o muchie (se luminează pe ambele fețe pe care le împarte) sau un colț (pe toate cele trei fețe).
2. Faceți clic pe ea. Vederea se întoarce ca să privească de acolo, păstrând același mijloc și același zoom.

Există 26 de locuri pe care se poate face clic: 6 fețe ({{ui:Sus}}, {{ui:Jos}}, {{ui:Față}}, {{ui:Înapoi}}, {{ui:Stânga}}, {{ui:Dreapta}}), 12 muchii și 8 colțuri. Un colț dă vederea clasică în trei sferturi; o muchie privește la jumătatea distanței dintre două fețe.

Un clic pe {{ui:Față}}, {{ui:Sus}} sau {{ui:Dreapta}} dă aceleași vederi ca {{ui:Vederi}} din bara de instrumente, fără potrivirea zoomului.

## Orbitare trăgând cubul

Trageți cubul ca să rotiți vederea, la fel ca la orbitarea în chiar vederea 3D. O tragere nu este niciodată luată drept clic, așa că puteți prinde cubul oriunde.

## Inelul busolei

Inelul de sub cub are N, E, S și V.

- **Trageți inelul** ca să rotiți modelul în jurul axei verticale, ca și cum ar sta pe o platformă rotativă. Inelul urmează cursorul.
- **Faceți clic pe o literă** ca să priviți din acea parte, păstrând cât de abrupt priviți în jos. Într-o vedere de sus, litera pe care o apăsați ajunge jos pe ecran.

## Vederi perpendiculare pe față: săgeți

Când priviți drept spre o față, în jurul cubului apar săgeți mici:

- Cele patru **triunghiuri** aduc fața de pe acea parte în față: triunghiul de deasupra cubului arată fața care era sus, și așa mai departe.
- Cele două **săgeți curbe** din dreapta sus rotesc imaginea cu un sfert de tură în sensul acelor de ceas sau invers, fără să schimbe fața spre care priviți. Folosiți-le ca să rotiți un plan, astfel încât un perete lung să treacă pe ecran.

## Acasă

Butonul casă din stânga sus a cubului revine la vederea în trei sferturi și încadrează piesa. {{key:Home}} face același lucru cât timp cubul are focusul de la tastatură.

## Cu tastatura

Apăsați {{key:Tab}} până la cub, apoi:

| Tastă | Face |
|---|---|
| {{key:left}} / {{key:right}} | alege o latură, muchie sau colț în jurul cubului, în pași de o optime de tură (cititoarele de ecran spun care) |
| {{key:up}} / {{key:down}} | alege unul mai sus sau mai jos, până la {{ui:Sus}} sau până la {{ui:Jos}} |
| {{key:Enter}} sau {{key:Space}} | privire din cel ales |
| {{key:Shift+left}} / {{key:Shift+right}} | rotește vederea cu un sfert de tură în jurul axei verticale |
| {{key:Home}} | vederea de acasă |
| {{key:Esc}} | părăsește cubul |

Tastele apăsate pe cub rămân cu cubul: nu pornesc uneltele PartCraft.

## Pictograma de axe sau nimic

Deschideți {{ui:Setări}} ({{key:Mod+,}}), fila {{ui:PartCraft}}, și setați **Indicator de colț** la {{ui:ViewCube}} (setarea de pornire), {{ui:Pictogramă de axe}} (un mic marcaj X, Y, Z în stânga jos: X roșu, Y verde, Z albastru) sau {{ui:Niciunul}}. Acest browser reține alegerea. Vezi [Setările PartCraft](topic:settings#corner-indicator).

:::note
Cubul arată piesa așa cum o construiește PartCraft: Y în sus, deci {{ui:Sus}} al cubului este planul Sus. Literele busolei servesc doar la rotire; o piesă nu are nord.
:::
