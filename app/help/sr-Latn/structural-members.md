---
title: Okviri od čeličnih profila
summary: Postavi čelične profile duž linija jedne ili više skica da napraviš zavareni okvir: kosi ili sučeljeni ćoškovi, elementi isečeni da se uklope tamo gde se sastaju, završne kape, rebra i lista za sečenje sa dužinama i uglovima krajeva.
keywords: zavareni sklop, konstrukcijski element, okvir, čelični okvir, cev, kvadratna cev, hss, rhs, shs, chs, široki nosač, i-nosač, w nosač, ipe, hea, heb, kanal, upn, ugaonik, kosi spoj, sučeljeni spoj, ispust, završna kapa, rebro, lista za sečenje
from: 59071e5a
---

**Konstrukcijski element** postavlja čelični profil duž svake linije skica koje izabereš. Nacrtaj okvir kao linije (svaka linija je jedan element), zatim izaberi profil: elementi se prave, njihovi ćoškovi se skraćuju i produžuju, a lista za sečenje kaže koliko dugo treba seći svaki komad i pod kojim uglom.

## Napravi okvir

1. Nacrtaj okvir kao linije u skici, na primer pravougaonik na gornjoj ravni. Linije označene kao konstrukcija se izostavljaju.
2. Sa izabranom skicom izaberi {{ui:Više}} › {{ui:Konstrukcijski element}}. Svaka linija skice dobija element.
3. U panelu izaberi **Porodicu** i **Format** profila. Porodice su AISC tablice (W, S, C, L, HSS cevi, Cev) i EN 10365 (IPE, HEA, HEB, UPN).

### Okvir u 3D

Linije iz više skica prave jedan okvir: gornji pravougaonik skiciran na ravni iznad i noge skicirane na uspravnim ravnima sastaju se krajevima u 3D. Pod **Duž linija** u panelu označi svaku skicu čije linije elementi prate. Krajevi koji se sastaju unutar jednog mikrometra se spajaju.

## Postavi profil na njegovu liniju

- **Rotiraj (°)** okreće profil oko njegove linije. Greda stoji sa visinom uspravno (na vertikalnom elementu, njena dubina gleda prema napred).
- **Na liniji** bira koja tačka profila leži na liniji: centar, ili ćošak ili sredina strane obrisa profila. „Dole, sredina“ postavlja okvir iznad ravni skice, a ne kroz nju.

## Ćoškovi i spojevi

| Gde se elementi sastaju | Šta se dešava |
|---|---|
| Dva elementa kraj do kraja, **Ćoškovi: Kosi** | Oba se seku na ravni na pola između njih, kao kod okvira za sliku |
| Dva elementa kraj do kraja, **Ćoškovi: Sučeljeno** | Prvi element ide dalje do daleke strane drugog; drugi je isečen pravo na bliskoj strani prvog |
| Element se završava na sredini drugog (T) | Isečen je da se uklopi uz spoljašnju stranu drugog elementa |
| Tri ili više se završava u jednoj tački | Prvi ide pravo dalje od ostalih; ostali su isečeni da se uklope uz njega |

Prvi element je onaj čija linija dolazi prva: linije zadržavaju redosled kojim su nacrtane, skica po skica, redom kojim su skice označene.

## Završne kape i rebra

- **Završne kape** zatvaraju svaki slobodni kraj pločom sa obrisom profila, debljine koju podesiš, spolja s kraja.
- **Rebra** stavljaju trougaonu ploču u svaki ćošak gde se dva elementa sastaju pod uglom: **Dimenzija rebra** duž svakog elementa od ćoška, **Debljina rebra** poprečno, centrirano na ravni ćoška.

## Lista za sečenje

Panel navodi svaki komad, a isti komadi su grupisani: profil, dužina (od duge tačke do duge tačke, kako bi je obeležio za testeru), kako je svaki kraj isečen (pravo, ugao od prave, ili isečen da se uklopi) i kojim elementima pripadaju. Završne kape i rebra su navedeni sa svojim dimenzijama. {{ui:Sačuvaj listu za sečenje (CSV)}} je čuva za tabelarnu obradu.

Element isečen da se uklopi uz cev sa zaobljenim ćoškovima malo ulazi u poluprečnik ćoška te cevi, pa je njegova dužina od duge tačke za nekoliko milimetara veća od razmaka između površi.

## Ograničenja

- Elementi prate samo prave linije; lukovi i splajnovi u skici se izostavljaju.
- Spojevi su isečeni, a ne zavareni: nema crtanja zavarenih šavova, a okvir je jedno telo.
- Profili se crtaju prema dimenzijama iz tablice: W profili sa korenim zaobljenjem, S i kanali sa paralelnim prirubnicama, cevi sa zaobljenjima ćoškova; rupe, pripreme krajeva i zazori za zavarivanje se ne prave umesto tebe.
- Konstrukcijski elementi se grade mrežnim jezgrom. Kad je tačno jezgro uključeno (samo za programere), to kažu i nisu izgrađeni.
