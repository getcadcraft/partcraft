---
title: Provera nagiba za kalupljenje i livenje
summary: Obojite deo prema uglu nagiba u odnosu na pravac izvlačenja kalupa, pogledajte koje strane se oslobađaju, koje treba više nagiba, a koje se oslobađaju iz druge polovine kalupa, sa udelom svake u površini.
keywords: analiza nagiba, nagib, konus, kalup, livenje pod pritiskom, ubrizgavanje, pravac izvlačenja, linija razdvajanja, podsečenje, oslobađanje, proveri nagib
from: 6a106f83
---

Delovi napravljeni u kalupu, u ulitku ili u pesku za livenje treba da imaju **nagib**: zidovi blago nagnuti da bi deo mogao da izađe. **Analiza nagiba** boji svaku stranu prema tome koliko je nagnuta u odnosu na pravac u kom se kalup otvara (**izvlačenje**).

## Uključivanje

1. U radnom prostoru Konstrukcija otvorite {{ui:Pogledi}} i izaberite {{ui:Analiza nagiba}}.
2. Podesite **Izvlačenje**: pravac u kom se kalup otvara, duž X, Y ili Z u bilo kom smeru, ili **Normalno na izabranu stranu**: pritisnite {{ui:Izaberi stranu}} i kliknite ravnu stranu dela.
3. Podesite **Minimalni nagib**, u stepenima: najmanji nagib koji vaš proces zahteva (često 1° do 3°).

Deo je obojen:

| Boja | Znači |
|---|---|
| Zelena: **Pozitivan nagib** | Nagnuta prema izvlačenju za najmanje minimum: oslobađa se iz ove polovine kalupa |
| Oker: **Treba nagib** | U okviru minimuma u oba smera, na primer vertikalni zid: dodajte nagib ovde |
| Crvena: **Negativan nagib** | Nagnuta od izvlačenja za najmanje minimum: oslobađa se iz druge polovine kalupa, ili je podsečenje ako deo treba da izađe iz jedne polovine |

Udeo svake klase u površini dela prikazan je pored nje. **Obrni izvlačenje** gleda iz druge polovine kalupa: zelena i crvena se menjaju mestima.

Zakrivljene strane se procenjuju tačku po tačku, pa valjak koji leži poprečno na izvlačenje pokazuje traku koja duž bokova treba nagib.

Boje prate deo dok ga menjate. {{key:Esc}} ili {{ui:Zatvori}} isključuje analizu; ništa se ne čuva u delu.

:::tip
Da dodate nagib, koristite funkciju {{ui:Nagib}} na oker stranama (pogledajte [Prevlačenje, lofting i nagib](topic:sweep-loft-draft)), zatim ponovo proverite.
:::
