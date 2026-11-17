---
title: Meet afstande, hoeke en massa
summary: Klik op twee dinge in die aansig vir die kleinste afstand, hoek en ΔX ΔY ΔZ; lees 'n rand se lengte, 'n gat se deursnee, 'n vlak se oppervlakte of 'n punt se koördinate; kry volume, massa, massamiddelpunt en traagheid van 'n onderdeel of 'n samestelling.
keywords: meet, afstand, kleinste afstand, hoek, lengte, radius, deursnee, oppervlakte, koördinate, delta, inspekteer, massa-eienskappe, massa, gewig, massamiddelpunt, middelpunt, traagheid, massatraagheidsmoment, digtheid, materiaal
from: 20bda0b7
---

**Meet** werk op die model in elke werkruimte (Ontwerp, Vorm, Simulasie, Generatief, Vervaardiging) en in 'n samestelling. Dit is in die **Aansig**-groep se {{ui:Aansigte}}-kieslys, of druk {{key:M}}. 'n Kaartjie maak oop bo-links in die aansig.

## Meet een ding

Klik op 'n hoekpunt, 'n rand of 'n vlak. Die kaartjie wys:

- **'n Punt** ('n hoekpunt, 'n randmiddelpunt of 'n sirkelmiddelpunt): sy X, Y, Z.
- **'n Rand**: reguit, sirkel of kromme, en sy lengte; vir 'n sirkel ook die radius, die deursnee en die middelpunt.
- **'n Vlak**: plat, silinder, kegel ensovoorts, en sy oppervlakte; 'n plat vlak se normaal; 'n silinder se radius en deursnee ('n gat se grootte). Oppervlaktes is van die fassette wat die maaskern bou.
- **Die hele liggaam**: hou {{key:Shift}} vas en klik op die onderdeel. Jy kry sy volume, oppervlakte, massa en traagheid (sien hieronder).

Die wyser vaslê aan hoekpunte, randmiddelpunte en sirkelmiddelpunte binne 10 pixels; 'n klein blou kolletjie wys die vaslegging voordat jy klik. Om 'n gat se middelpunt te kies, wys na die middel van die gat; om sy rand (die sirkel) te kies, wys na die rand.

## Meet tussen twee dinge

Klik op 'n tweede item. Die kaartjie voeg by:

- **Kleinste afstand** en die twee naaste punte, in die aansig geteken met 'n lyn tussen hulle.
- **ΔX, ΔY, ΔZ** vanaf die eerste naaste punt na die tweede.
- **Hoek** tussen twee plat vlakke (tussen hul normale, 0–180°), tussen twee reguit rande of asse (0–90°), of tussen 'n rand en 'n vlak.
- **Afstand tussen die vlakke** vir twee parallelle plat vlakke, **Middelpunt tot middelpunt** vir twee sirkels of gate, **As tot as** vir twee parallelle gate of silinders.

'n Derde klik begin 'n nuwe paar. {{key:Esc}} maak die keuses skoon; {{key:Esc}} weer (of {{ui:Maak toe}}) maak Meet toe. {{ui:Kopieer}} plaas die resultate op die knipbord as tab-geskeide teks, gereed om in 'n sigblad te plak.

### Hoe akkuraat dit is

PartCraft bou die onderdeel met die maaskern, so afstande word op die fassette van die maas bereken, en die kaartjie sê **benaderd: van die fassette**: reg vir plat vlakke en tussen hoekpunte, effens af vir krom vlakke. 'n Fyner **Krommes**-instelling bring hulle nader. Presiese meting op die ware oppervlakke benodig 'n presiese kern: nog nie in hierdie weergawe gebou nie.

## Massa-eienskappe

Kies {{ui:Massa-eienskappe}} in die kaartjie of in die {{ui:Aansigte}}-kieslys. Op 'n onderdeel, kies 'n **Materiaal** in die kaartjie (staal, aluminium, plastiek en ander met hul gewone digthede). In 'n samestelling gebruik elke onderdeel die materiaal wat in sy eienskappe gestel is (kies die onderdeel, dan **Materiaal**), en die resultaat is vir al die onderdele saam.

Die kaartjie wys massa, volume, oppervlakte, massamiddelpunt, die traagheidstensor (Ixx, Iyy, Izz en die produkte Ixy, Iyz, Ixz, in kg·mm², om die massamiddelpunt langs die wêreldasse) en die hoofmomente. Sonder 'n materiaal wys dit dieselfde per eenheidsdigtheid (mm⁵) en geen massa nie.

Die getalle is presies vir die getesselleerde soliede wat die maaskern bou (geboë vlakke as fassette), so 'n ronde onderdeel kom 'n bietjie laag uit, en die kaartjie sê so. Materiaaldigthede is tipiese handboekwaardes; 'n werklike legering of graad kan met 'n paar persent verskil.

## Beperkings

- Vasleggings kan 'n punt vind wat agter ander meetkunde verskuil is; kontroleer dat die kaartjie wys wat jy bedoel het.
- Meet word gesluit wanneer jy 'n skets of die tekenblad oopmaak, of werkruimte wissel.
