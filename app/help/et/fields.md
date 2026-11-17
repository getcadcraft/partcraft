---
title: Väljad: kujud kaugustena
summary: Mis on väli (kuju, mis on salvestatud kaugusena tema pinnani), kuidas seda skriptis ehitada põhikujunditest, Boole-tehetest, võredest ja minimaalpindadest, kuidas sellest saab keha ja miks sama skript annab alati samad baidid.
keywords: väli, märgiline kaugus, sdf, voksel, güroid, tpms, võre, Boole-tehe, nihe, koor, ühendamine, topeltkontuurimine, determineeritud, veekindel, manifold, plokk
from: faab7480
---

**Väli** kirjeldab kuju kauguse kaudu mis tahes punktist tema pinnani: sisemuses negatiivne, pinnal null, väljas positiivne. Raadiusega 5 kera on "kaugus keskpunktini miinus 5". Kujude kombineerimine on tehted kaugustega: liit on kahest väiksem, lõikumine suurem, ühe kuju lahutamine teisest on suurem väärtus esimese ja teise kuju negatiivse kauguse vahel. Kuju kasvatamine 1 mm võrra lahutab kaugusest 1; õõnes sein on kaugus, mis on kokku volditud.

Seepärast sobivad väljad hästi võredele, kanalitele ja gradueeritud seintele: güroidi pind on "siinuste summa on null" ning sein, mis paksub detailis 1 mm-st 3 mm-ni, on arv, mis muutub üle detaili.

## Väljast kehani

`to_body(field, h)` proovib välja punkte ruudustikul, mis on `h` millimeetri kaugusel, säilitades ainult pinna lähedal olevad punktid (hõre ruudustik 8 × 8 × 8 plokki), ja ehitab pinna **topeltkontuurimisega**: üks tipp pinnaelemendi kohta, asetatud sinna, kus pinnatasandid kohtuvad, nii et terav serv jääb teravaks ühe vokseli täpsusega. Pind on suletud ja iga serv on jagatud täpselt kahe kolmnurga vahel; aruanne ütleb seda. Element, mis on õhem kui umbes kolm vokslit, võib kokku tõmbuda, ja siis aruanne ütleb, et keha pole suletud tahke, mitte ei peida seda.

Vokseli suurus on täpsus: 25 vokslit läbimõõduga kera ruumala on mõne sajandiku protsendi piires; sein on sama tõene kui tema vokslid. Mida jämedam ruudustik, seda kiirem.

## Alati samad baidid

Väljal pole kella ega juhuslikke arve. Güroidi siinus ja koosinus ning iga eksponentsiaal-, logaritm- ja astmefunktsioon teegis arvutatakse lihtsast aritmeetikast, nii et Node, Chrome, Firefox ja Safari annavad samad bitid. Ruudustik läbitakse fikseeritud järjekorras, seega sama skript sama sisendiga annab baidiliselt identsed võrgud ja andmelehed igas arvutis ja mis tahes arvu töölõimedega. See on testitud, sealhulgas brauser võrreldes Node'iga.

## Kuhu edasi

[Kirjuta generaator](topic:write-a-generator) ehitab detaili väljadega; [Inseneriteek](topic:engineering-library) mõõdab selle.
