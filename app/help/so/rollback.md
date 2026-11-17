---
title: Rollback iyo forward taariikhda
summary: Kor iyo hoos u dhaqaaqo xariiqda rollback hal sifo mar si aad u daawato qaybta oo la dhisayo, geli sifooyin dhexda, oo ku noqo dhammaadka.
keywords: rollback, roll back, roll forward, xariiqda rollback, u dhaqaaq taariikhda, geli feature, freeze, taariikh
from: 9a366cae
---

Xariiqda rollback waxay go'aamisaa inta taariikhda la dhisayo. Sifooyinka ka hooseeya waa la dhex-dhaaftaa oo lama dhisin; sifooyin cusub waxay gelayaan xariiqda.

## Hal sifo mar

Adigoo qaybta shaashadda ku jirta (aan sawir ama warbixin furnayn):

| Samee | Natiijo |
|---|---|
| {{key:[}} ama badhanka fallaadha sare ee ku xiga magaca qaybta | Xariiqdu hal sifo bay kor u dhaqaaqdaa |
| {{key:]}} ama badhanka fallaadha hoose | Xariiqdu hal sifo bay hoos u dhaqaaqdaa |
| {{key:End}} ama badhanka xariiqda ilaa dhammaadka | Sifo kasta mar kale waa la dhisayaa |

Status bar-ku wuxuu sheegaa meesha xariiqdu joogto, tusaale ahaan "Rollback bar after Sketch1: 1 of 2 features built" (Xariiqda rollback-ka ka dib Sketch1: 1 ka 2 sifo ayaa la dhisay). Badhamada way damaan haddii xariiqdu wax ka dhaqaaqi karin jihadaas.

Waxaad sidoo kale dooran kartaa {{ui:Roll back to here}} sifo kasta, ama guji **Rollback bar · roll forward** taariikhda.

## Geli sifo dhexda

1. Xariiqda dib u celi ilaa ay ku taagan tahay meesha sifada cusub ku habboon tahay.
2. Ku dar sifada: waxay gashaa xariiqda.
3. Riix {{key:End}} si aad u dhiso taariikhda kale oo dusheeda ah.

Dhaqdhaqaaq kasta oo xariiqda ah waa tallaabo aad ku noqon kartaa {{key:Mod+Z}}. Meesha xariiqdu joogto waa la kaydiyaa faylka, sidaas darteed qaybta waa la diri karaa iyada oo rollback-tay. Qalabka amarka ayaa sidoo kale dhaqdhaqaaqa: `partcraft rollback part.json` iyo `partcraft forward part.json --end`.
