---
title: Provjera nagiba za lijevanje i kalupljenje
summary: Obojite dio prema kutu nagiba u odnosu na smjer vađenja kalupa, pa vidite koje plohe se vade bez problema, koje trebaju više nagiba, a koje se vade iz druge polovice, s udjelom svake u površini.
keywords: analiza nagiba, nagib, konus, kalup, mold, tlačno lijevanje, injekcijsko prešanje, smjer vađenja, linija rastavljanja, podrez, vađenje, provjera nagiba
from: 6a106f83
---

Dijelovi izrađeni u kalupu, tlačnom lijevanju ili lijevanju u pijesak trebaju **nagib**: stijenke lagano nagnute da dio lako izađe. **Analiza nagiba** boji svaku plohu prema tome koliko se odmiče od smjera u kojem se kalup otvara (**smjer vađenja**).

## Uključite je

1. U radnom prostoru Design otvorite {{ui:Pogledi}} i odaberite {{ui:Analiza nagiba}}.
2. Postavite **Smjer vađenja**: smjer u kojem se kalup otvara, duž X, Y ili Z u bilo kojem smjeru, ili **Okomito na odabranu plohu**: pritisnite {{ui:Odaberite plohu}} i kliknite ravnu plohu dijela.
3. Postavite **Najmanji nagib**, u stupnjevima: najmanji nagib koji vaš postupak treba (često 1° do 3°).

Dio je obojen:

| Boja | Znači |
|---|---|
| Zelena: **Pozitivan nagib** | Nagnuto prema smjeru vađenja za najmanje najmanji nagib: vadi se iz ove polovice kalupa |
| Oker: **Potreban nagib** | Unutar najmanjeg nagiba u oba smjera, poput okomite stijenke: dodajte nagib ovdje |
| Crvena: **Negativan nagib** | Nagnuto od smjera vađenja za najmanje najmanji nagib: vadi se iz druge polovice kalupa ili je podrez ako dio treba izaći iz jedne polovice |

Udio površine dijela za svaku klasu prikazan je pored nje. **Obrnite smjer vađenja** gleda s druge polovice kalupa: zelena i crvena zamjenjuju mjesta.

Zakrivljene plohe procjenjuju se točku po točku, pa valjak položen poprijeko smjera vađenja pokazuje pojas koji treba nagib uz svoje bokove.

Boje prate dio dok ga mijenjate. {{key:Esc}} ili {{ui:Zatvori}} isključuje analizu; ništa se ne sprema u dio.

:::tip
Da dodate nagib, upotrijebite značajku {{ui:Nagib}} na okerastim plohama (pogledajte [Provlačenje, loft i nagib](topic:sweep-loft-draft)), zatim ponovno provjerite.
:::
