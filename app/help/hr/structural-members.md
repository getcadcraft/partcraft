---
title: Okviri od čeličnih profila
summary: Postavite čelične profile duž linija jedne ili više skica za izradu zavarenog okvira: zakošeni ili čeoni kutovi, elementi rezani da pristaju tamo gdje se sastaju, završni poklopci, spregovi i popis za rezanje s duljinama i kutovima krajeva.
keywords: konstrukcijski element, okvir, čelični okvir, cijev, kvadratna cijev, hss, rhs, shs, chs, široki nosač, i-profil, w greda, ipe, hea, heb, kanal, upn, kutnik, zakošenje, čeoni spoj, izrez, završni poklopac, spreg, popis za rezanje
from: 59071e5a
---

**Konstrukcijski element** postavlja čelični profil duž svake linije skica koje odaberete. Nacrtajte okvir kao linije (svaka linija je jedan element), zatim odaberite profil: elementi se izrađuju, kutovi im se skraćuju i produžuju, a popis za rezanje kaže koliko je dugo svaki komad i pod kojim kutom ga rezati.

## Izradite okvir

1. Nacrtajte okvir kao linije u skici, na primjer pravokutnik na gornjoj ravnini. Linije označene kao konstrukcija se izostavljaju.
2. Uz odabranu skicu odaberite {{ui:Više}} › {{ui:Konstrukcijski element}}. Svaka linija skice dobiva element.
3. U ploči odaberite **Obitelj** i **Format** profila. Obitelji su tablice AISC (W, S, C, L, HSS cijevi, Pipe) i EN 10365 (IPE, HEA, HEB, UPN).

### Okvir u 3D

Linije iz više skica čine jedan okvir: gornji pravokutnik skiciran na ravnini iznad i noge skicirane na ravninama koje stoje uspravno spajaju se na svojim krajevima u 3D. Pod **Duž linija** u ploči označite svaku skicu čije linije elementi slijede. Krajevi koji se podudaraju unutar mikrometra spajaju se.

## Postavite profil na njegovu liniju

- **Rotacija (°)** zakreće profil oko njegove linije. Greda stoji tako da je visina okomita (na okomitom elementu visina pokazuje prema naprijed).
- **Na liniji** određuje koja točka profila leži na liniji: središte, ili kut, ili sredina strane obrisa profila. „Donja sredina“ postavlja okvir iznad ravnine skice, a ne kroz nju.

## Kutovi i spojevi

| Gdje se elementi sastaju | Što se događa |
|---|---|
| Dva elementa kraj do kraja, **Kutovi: Zakošeno** | Oba se režu na ravnini na pola puta između njih, kao okvir slike |
| Dva elementa kraj do kraja, **Kutovi: Čeono** | Prvi element ide dalje do daleke plohe drugog; drugi se reže okomito na bližu plohu prvog |
| Element završava na sredini drugog (T) | Reže se da pristaje uz vanjsku stranu drugog elementa |
| Tri ili više završava u jednoj točki | Prvi ide dalje preko ostalih; ostali se režu da pristaju uz njega |

Prvi element je onaj čija linija prva dolazi: linije zadržavaju redoslijed kojim su nacrtane, skica po skica, redom kojim su skice označene.

## Završni poklopci i spregovi

- **Završni poklopci** zatvaraju svaki slobodni kraj pločom s obrisom profila, debljine koju postavite, izvan kraja.
- **Spregovi** stavljaju trokutnu ploču u svaki kut gdje se dva elementa sastaju pod kutom: **Veličina sprega** duž svakog elementa od kuta, **Debljina sprega** poprijeko, centrirano na ravnini kuta.

## Popis za rezanje

Ploča navodi svaki komad, a jednaki komadi su grupirani: profil, duljina (od dugačke točke do dugačke točke, kako biste je označili za pilu), kako je svaki kraj rezan (okomito, pod kutom od okomitog ili prilagođeno) i koji su elementi. Završni poklopci i spregovi navode se s veličinama. {{ui:Spremi popis za rezanje (CSV)}} sprema ga za proračunsku tablicu.

Element rezan da pristaje uz cijev sa zaobljenim kutovima malo ulazi u radijus kuta te cijevi, pa je njegova duljina od dugačke točke nekoliko milimetara veća od razmaka između ploha.

## Ograničenja

- Elementi slijede samo ravne linije; lukovi i splineovi u skici se izostavljaju.
- Spojevi se režu, ne zavaruju: ne crtaju se zavarne kapljice, a okvir je jedno tijelo.
- Profili se crtaju prema dimenzijama iz tablice: W profili s korijenskim zaobljenjem, S profili i kanali s paralelnim prirubnicama, cijevi s radijusima kutova; rupe, pripreme krajeva i zazori zavara ne izrađuju se za vas.
- Konstrukcijski elementi izrađuju se mrežnom jezgrom. S uključenom egzaktnom jezgrom (samo za razvojne programere) to se kaže i ne izrađuju se.
