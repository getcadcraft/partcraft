---
title: 4- en 5-asbewerking
summary: Vertel PartCraft watter roterende asse die masjien het, kantel die gereedskap vir enige gewone bewerking, werk 'n oppervlak af met 'n kogel-eindfrees wat leun terwyl dit sny, of draai die onderdeel onder die gereedskap op 'n 4de as. Wat in die G-kode geskryf word, en wat nie bewys is nie.
keywords: 5-as, vyf-as, 4-as, vierde as, multi-as, meervoudige as, 3+2, geïndekseer, posisioneel, kantel, geskuinsde gereedskap, roterend, draaitafel, kop, A-as, B-as, C-as, TCP, RTCP, gereedskapsentrumpunt, G43.4, omgekeerde tyd, G93, kinematika, draaipunt, swarf, leihoek
from: c4f1c491
---

Vervaardiging kan die gereedskap onder 'n hoek hou, en dit kan die roterende asse beweeg terwyl dit sny. Drie dinge doen dit, van die eenvoudigste na die hoogste.

**Niks hier is op 'n masjien uitgevoer nie.** Die bane word deur die toetse teen die meetkunde nagegaan en die G-kode word teruggelees, maar die ingeboude posts volg die beheerders se gedokumenteerde kodes, nie enige masjien voor ons nie. Bewys 'n program in jou beheerder se eie simulator en in die lug voordat dit metaal raak.

## Die masjien se roterende asse

Op die **Opstelling**-oortjie sê {{ui:Roterende asse}} wat die masjien het:

| Keuse | Die masjien |
|---|---|
| Geen (3 asse) | 'n Gewone frees. Enige bewerking wat die gereedskap geskuins nodig het, waarsku, en die post weier om dit te skryf. |
| A (draai om X) | Een roterende as langs X: 'n 4de-as-tafel of indekseerder. Die gereedskap kan slegs in die Y–Z-vlak leun. |
| B (draai om Y) | Een roterende as langs Y. Die gereedskap kan slegs in die X–Z-vlak leun. |
| A en C | 'n Kantelende as om X wat gedra word deur, of dra, 'n draai om Z: 'n draaitafel-tafel, of 'n kop. |
| B en C | Dieselfde met die kanteling om Y. |

Daarna:

- **Gedra deur**: {{ui:Die tafel (die onderdeel draai)}} of {{ui:Die kop (die gereedskap draai)}}. 'n Tafel draai die teenoorgestelde rigting om dieselfde vlak onder die gereedskap te bring, so die teken van elke hoek volg hieruit.
- **Die beheerder hou die gereedskapspits op die pad (TCP)**: aan, dan is X Y Z in die program die gereedskapspits in die onderdeel se eie koördinate, en die beheerder doen die res (die ingeboude Fanuc-styl- en LinuxCNC-posts skryf `G43.4` vir die gereedskaplengte). Af, op 'n tafelmasjien, skryf PartCraft X Y Z soos die gedraaide tafel die onderdeel dra, om die **roterende middelpunt** wat jy gee (in werkskoördinate; 0, 0, 0 wanneer die werkoorsprong op die middelpunt is). 'n Kopmasjien benodig TCP aan: sonder dit sou die program die masjien se draaipuntlengte benodig, wat PartCraft nie ken nie.
- **Kanteling-limiet**: hoe ver die kantelende as gaan.

Masjiene verskil in watter rigting hulle as positief tel. As 'n as op jou s'n die verkeerde rigting draai, verander die teken in 'n kopie van die post ([Postprosessors wat jy kan wysig](topic:post-processors)).

## 'n Geskuinsde gereedskap vir 'n gewone bewerking

Elke freesbewerking (vlak, holte, aanpassend, kontoer, boor, skuins, parallel, scallop, 3D-growwe, rus) het 'n **Gereedskaphelling** en **Help na**: die gereedskap se rigting vir daardie bewerking alleen, gemeet vanaf die opstelling se gereedskapas. Dit is 3+2-bewerking: die roterende asse gaan na 'n posisie en bly daar terwyl drie asse sny.

- Tik die twee hoeke, of druk {{ui:Gereedskap vierkant na 'n vlak}} en klik op 'n plat vlak: die gereedskap sal reguit daarna wys.
- Kies die bewerking se vlakke en rande soos gewoonlik. Wat as 'n vloer of 'n gat tel, word langs die geskuinsde gereedskap beoordeel.
- Die voorraad vir daardie rigting is die boks wat die gedraaide voorraad hou, so hoogtes en spelings is veilig van daardie kant.

In die G-kode, voor die bewerking, gaan die gereedskap op, draai die roterende asse, en daal die gereedskap oor sy eerste punt. Op 'n tafelmasjien sonder TCP bly boë boë en vaste boorsiklusse siklusse (die geskrewe raamwerk is net om Z gedraai). Met TCP in 'n geskuinsde vlak word boë kort lyne en siklusse die bewegings wat hulle voorstel.

Die voorraadsimulasie loop 'n geskuinsde rigting **op sy eie**: dit wys wat daardie bewerking uit die hele voorraad, gesien van sy kant, sny, en vind daar grawe, maar snitte wat van ander rigtings gemaak is, word nie oorgedra nie.

## 5-as-afwerking

{{ui:Meer}} in die Vervaardiging-werkbalk lys hierdie bewerking en die volgende bo-aan die **Bewerkings**-oortjie.

{{ui:5-as}} is die [parallelle afwerkingspas](topic:finish-3d) met 'n **kogel-eindfrees wat leun terwyl dit gaan**. 'n Kogel sny met 'n sfeer, en die sfeer is dieselfde hoe die gereedskap ook om sy middelpunt leun, so die kogel volg presies die pad wat die 3-as-pas sou gee en net die rigting van die gereedskap verander:

- **Na die oppervlak toe**: 1 = reg op die oppervlak, 0 = regop, enigiets daartussen.
- **Leun vorentoe**: grade langs die rigting van die snit, sodat die stilstaande middelpunt van die kogel nie is wat sny nie.
- **Meeste kanteling**: die gereedskap leun nooit verder as dit van die opstelling se as af nie.

Waar die skag die model sou raak, word die leun teruggesny tot dit vry is, en die bewerking sê by hoeveel punte. Elke pas word met 'n reguit optel binnegegaan en verlaat.

## Roterende afwerking (4de as)

{{ui:Roterend}} is vir 'n onderdeel wat langs **werk-X** op 'n roterende as vasgehou word. Die onderdeel draai en 'n kogel-eindfrees, altyd na die as wys, volg sy oppervlak:

- **Passe**: {{ui:Langs die as}} (lyne langs X, een staponderbreking van draai uitmekaar) of {{ui:Rondom die onderdeel}} (ringe, een staponderbreking van X uitmekaar).
- **As by Y / Z**: waar die as is. Leeg beteken die middel van die voorraad. Op 'n tafelmasjien sonder TCP moet dit die roterende middelpunt in Opstelling wees; die bewerking waarsku wanneer dit nie is nie.
- **Van / Tot X** en **Van / Tot hoek**: die deel van die lengte en van die draai wat gesny word.

Die hoogte van die kogel bo die as op elke punt is die presiese daling van 'n sfeer op die onderdeel se mesh, vanaf daardie kant.

## Limiete

- 5-as- en roterende afwerking neem slegs 'n **kogel-eindfrees**. Daar is geen swarf-snyding nie (die kant van die gereedskap op 'n reëlmatige muur), geen vloeilyne langs 'n oppervlak se eie rigtings, geen meervoudige-as-growwe bewerking nie en geen outomatiese keuse van die kanteling om 'n botsing te vermy.
- 5-as- en roterende bane word **nie deur die voorraadsimulasie gedraai nie**, wat 'n hoogtekaart is en 'n leunende snit nie kan hou nie.
- Die skag word in 5-as-afwerking teen die model gesien van bo af nagegaan; die houer, die spil en die masjien self word nêrens nagegaan nie.
- Roterende afwerking sny net wat die gereedskap kan sien wanneer dit na die as kyk.
- 5-as-afwerking neem 'n minuut of meer om op 'n groot onderdeel uit te werk: die skag word by elke punt van elke pas nagegaan.
- Wanneer die roterende asse met die lineêres beweeg en TCP af is, skryf die ingeboude posts die voer as omgekeerde tyd (`G93`), en gaan dan terug na `G94`.
- Geen geskuinsde werkvlakkode (`G68.2` en soortgelyk) word geskryf nie, en geen masjienspesifieke limiete, ontdraaiing of botsingsones is bekend nie.
