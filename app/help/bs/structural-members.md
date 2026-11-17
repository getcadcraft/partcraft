---
title: Okviri od čeličnih profila
summary: Postavite čelične profile duž linija jedne ili više skica da napravite zavareni okvir: spojevi pod uglom ili na sučeljavanje, elementi isječeni da stanu gdje se sastaju, krajnji poklopci, rebra i lista rezanja s dužinama i uglovima krajeva.
keywords: zavareni sklop, konstruktivni element, okvir, čelični okvir, cijev, kvadratna cijev, hss, rhs, shs, cijev, chs, širokopojasni, i-profil, w greda, ipe, hea, heb, kanal, upn, ugaonik, zakošenje, sučeljavanje, podrezivanje, krajnji poklopac, rebro, lista rezanja
from: 59071e5a
---

**Konstruktivni element** postavlja čelični profil duž svake linije skica koje odaberete. Nacrtajte okvir kao linije (svaka linija je jedan element), zatim odaberite profil: elementi se grade, njihovi uglovi se odsijecaju i produžuju, a lista rezanja kaže koliko dugo da se reže svaki komad i pod kojim uglom.

## Napravite okvir

1. Nacrtajte okvir kao linije u skici, na primjer pravougaonik na gornjoj ravni. Linije označene kao konstrukcija se izostavljaju.
2. Sa odabranom skicom, odaberite {{ui:Više}} › {{ui:Konstruktivni element}}. Svaka linija skice dobija element.
3. U panelu odaberite **Porodicu** i {{ui:Format}} profila. Porodice su AISC tabele (W, S, C, L, HSS cijevi, {{ui:Cijev}}) i EN 10365 (IPE, HEA, HEB, UPN).

### Okvir u 3D

Linije iz nekoliko skica prave jedan okvir: gornji pravougaonik nacrtan na ravni iznad i noge nacrtane na uspravnim ravnima, sastaju se na svojim krajevima u 3D. Pod **Duž linija** u panelu, označite svaku skicu čije linije elementi prate. Krajevi koji se sastaju unutar jednog mikrometra se spajaju.

## Postavite profil na njegovu liniju

- **Okreni (°)** okreće profil oko njegove linije. Greda stoji s visinom uspravno (na vertikalnom elementu, visina pokazuje prema naprijed).
- **Na liniji** bira koja tačka profila leži na liniji: centar, ili ugao ili sredina strane obrisa profila. "Donja sredina" postavlja okvir na vrh ravni skice umjesto kroz nju.

## Uglovi i spojevi

| Gdje se elementi sastaju | Šta se dešava |
|---|---|
| Dva elementa kraj do kraja, **Uglovi: Zakošeno** | Oba se režu na ravni na pola puta između njih, kao kod okvira za sliku |
| Dva elementa kraj do kraja, **Uglovi: Sučeljeno** | Prvi element ide dalje do udaljene strane drugog; drugi se reže pod pravim uglom na bližoj strani prvog |
| Element završava na sredini drugog (T) | Reže se da stane uz vanjsku stranu drugog elementa |
| Tri ili više završava u jednoj tački | Prvi ide pravo pored ostalih; ostali se režu da stanu uz njega |

Prvi element je onaj čija linija dolazi prva: linije zadržavaju redoslijed kojim su nacrtane, skica po skica, redom kojim su skice označene.

## Krajnji poklopci i rebra

- **Krajnji poklopci** zatvaraju svaki slobodan kraj pločom oblika obrisa profila, debljine koju postavite, s vanjske strane kraja.
- **Rebra** postavljaju trougaonu ploču u svakom uglu gdje se dva elementa sastaju pod uglom: **Veličina rebra** duž svakog elementa od ugla, **Debljina rebra** poprijeko, centrirana na ravan ugla.

## Lista rezanja

Panel navodi svaki komad, s istim komadima grupisanim: profil, dužinu (duga tačka do duge tačke, kako biste je označili za pilu), kako je svaki kraj isječen (pod pravim uglom, ugao od pravog ili isječeno da stane), i kojim elementima pripadaju. Krajnji poklopci i rebra navedeni su sa svojim veličinama. {{ui:Spasi listu rezanja (CSV)}} je spašava za tabelarni proračun.

Element isječen da stane uz cijev sa zaobljenim uglovima malo zalazi u poluprečnik ugla te cijevi, pa je njegova dužina duge tačke za nekoliko milimetara veća od razmaka između strana.

## Ograničenja

- Elementi prate samo prave linije; lukovi i splajnovi u skici su izostavljeni.
- Spojevi su isječeni, ne zavareni: nijedan zavareni šav se ne crta, a okvir je jedno tijelo.
- Profili se crtaju prema dimenzijama iz tabele: W profili sa korijenskim zaobljenjem, S i kanali sa paralelnim prirubnicama, cijevi sa poluprečnicima uglova; rupe, pripreme krajeva i zazori za zavarivanje se ne prave automatski.
- Konstruktivni elementi se grade mrežnim jezgrom. Kad je tačno jezgro uključeno (samo za programere), to se kaže i oni se ne grade.
