---
title: Provjera nagiba za oblikovanje i livenje
summary: Oboji dio prema uglu nagiba u odnosu na smjer vuče kalupa, vidi koje površine se izvlače, koje trebaju više nagiba, a koje se izvlače iz druge polovine, sa udjelom površine svake.
keywords: analiza nagiba, nagib, konus, kalup, livenje pod pritiskom, injekciono oblikovanje, smjer vuče, linija razdvajanja, podrez, izvlačenje, provjera nagiba
from: 6a106f83
---

Dijelovi napravljeni u kalupu, u kalupu za livenje pod pritiskom ili u livenju u pijesku trebaju **nagib**: zidovi blago nagnuti da dio lako izađe. **Analiza nagiba** boji svaku površinu prema tome koliko je nagnuta u odnosu na smjer u kojem se kalup otvara (**vuča**).

## Uključi

1. U radnom prostoru Dizajn otvorite {{ui:Prikazi}} i odaberite {{ui:Analiza nagiba}}.
2. Podesite **Vuča**: smjer u kojem se kalup otvara, duž X, Y ili Z u bilo kojem smjeru, ili **Okomito na odabranu površinu**: pritisnite {{ui:Odaberi površinu}} i kliknite ravnu površinu dijela.
3. Podesite **Minimalni nagib**, u stepenima: najmanji nagib koji vaš proces treba (često 1° do 3°).

Dio je obojen:

| Boja | Znači |
|---|---|
| Zelena: **Pozitivan nagib** | Nagnuta prema vuči najmanje za minimum: izlazi iz ove polovine kalupa |
| Oker: **Treba nagib** | U okviru minimuma u bilo kojem smjeru, kao vertikalni zid: dodajte nagib ovdje |
| Crvena: **Negativan nagib** | Nagnuta od vuče najmanje za minimum: izlazi iz druge polovine kalupa, ili je podrez ako dio treba izaći iz jedne polovine |

Udio površine dijela za svaku klasu prikazan je pored nje. **Obrni vuču** gleda sa druge polovine kalupa: zelena i crvena se zamijene.

Krive površine se procjenjuju tačku po tačku, pa cilindar koji leži poprijeko na vuču pokazuje pojas koji treba nagib duž svojih strana.

Boje prate dio kako ga mijenjate. {{key:Esc}} ili {{ui:Zatvori}} gasi analizu; ništa se ne čuva u dijelu.

:::tip
Da dodate nagib, koristite svojstvo {{ui:Nagib}} na površinama oker boje (vidi [Sweep, loft i nagib](topic:sweep-loft-draft)), zatim provjerite ponovo.
:::
