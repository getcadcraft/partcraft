---
title: Postprocesorët që mund t'i redaktosh
summary: Një postprocesor është një skedar i shkurtër tekstual që e kthen shtegun e veglës në G-code për kontrollin tënd. Kopjo një nga postprocesorët e integruar, ndrysho rreshtat që të duhen (numrat e rreshtave, ndërrimin e veglës, lëvizjet e referimit, kodin e fundit), shiko G-code që shkruan ndërsa shkruan, dhe mbaje me pjesën.
keywords: postprocesor, postprocesor i personalizuar, cpost, G-code, NC, GRBL, LinuxCNC, redakto postprocesorin, ndërrim veglë, M6, G43, cikël i fiksuar, numra rreshtash, modal, ngjarje, variabël
from: c78d0cae
---

Shtegu i njëjtë i veglës duhet të shkruhet ndryshe për kontrolle të ndryshme: numra rreshtash apo asnjë, `M6` ose një pauzë, `G28` ose `G53`, `M30` ose `M2`. Një **postprocesor** është teksti i shkurtër që thotë si. Tre postprocesorët e integruar të PartCraft (stil Fanuc, GRBL dhe LinuxCNC) janë shkruar në këtë format, kështu që një postprocesor yt mund të fillojë si kopje e njërit prej tyre.

Kontrollo daljen në simulatorin e makinës tënde përpara prerjes, dhe ekzekuto fillimisht në ajër, mbi materialin. Postprocesorët e integruar shkruajnë saktësisht atë që shkruanin përpara se të ekzistonte ky format (testet krahasojnë daljen e tyre bajt për bajt në qindra programe), por asgjë këtu nuk është vërtetuar në makinën tënde, dhe një postprocesor që ndryshon është yti për ta vërtetuar.

## Bëje një

Në Prodhimi, nën **Postprocesori**:

- {{ui:Redakto postprocesorin…}} te një kontroll i integruar hap **kopjen tënde** të tij. Te një nga postprocesorët e tu hap atë postprocesor.
- {{ui:Postprocesor i ri…}} nis nga një postprocesor i vogël bosh me çdo ngjarje brenda.
- {{ui:Importo skedarin e postprocesorit…}} lexon një skedar tekst `.cpost` (skedari që merr nga **Ruaj si skedar…** te redaktuesi).

Redaktuesi shfaq tekstin, një rresht që thotë nëse lexohet (dhe cili rresht është i gabuar), dhe G-code që shkruan postprocesori, ndërsa shkruan. **Shfaqja me** zgjedh një program të vogël shembull që ekzekuton çdo ngjarje, ose programin e vetë kësaj pjese. {{ui:Ruaj}} e mban postprocesorin në skedarin e pjesës (deri në 20 postprocesorë) dhe e zgjedh si kontroll. Postprocesorët udhëtojnë me pjesën; për ta përdorur në një pjesë tjetër, ruaje si skedar dhe importoje atje.

## Si duket një postprocesor

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Rreshtat që fillojnë me `//` dhe rreshtat bosh injorohen. Në krye vijnë cilësimet; pastaj një bllok `on <event>` për çdo ngjarje, i mbyllur me `end`. Një ngjarje që lihet jashtë nuk shkruan asgjë.

| Cilësimi | Kuptimi |
|---|---|
| `post <id>` | ID-ja e postprocesorit: shkronja, shifra, `-` dhe `_` |
| `name <text>` | Çfarë shfaq lista Kontroll |
| `extension <ext>` | Shtesa e skedarit: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … në çdo rresht `emit`, ose asnjë |
| `decimal-point yes` / `no` | `10.` në vend të `10` (komentet nuk e mbajnë kurrë pikën) |
| `canned-cycles yes` / `no` | `no`: vrimat shkruhen si lëvizjet G0/G1 që përfaqësojnë |
| `modal <group> <words>` | Fjalët e një grupi (`modal motion G0 G1 G2 G3`) që shkruhen vetëm kur ndryshojnë |

## Ngjarjet

Ato ekzekutohen në këtë renditje për një program: `start`; pastaj për çdo operacion `operation`, `tool-change` (kur ndryshon vegla), `spindle` (kur ndryshon shpejtësia), `approach` (lëvizja lart deri në pikën e parë, para lëvizjes së parë të shpejtë), `coolant-on`, pastaj lëvizjet e tij si `rapid`, `feed` dhe `arc`, dhe çdo cikël i fiksuar si `cycle-start`, një `cycle-hole` për çdo vrimë dhe `cycle-end`; në fund `end`.

Më shumë ngjarje, për ato që shkojnë përtej tre boshteve (një postprocesor pa ngjarjen refuzon një program të tillë dhe emërton ngjarjen që i mungon):

| Ngjarja | Kur | Variablat e saj |
|---|---|---|
| `index` | Përpara një operacioni ku drejtimi i veglës ndryshon nga i fundit, dhe përpara operacionit të parë në një makinë me boshte rrotulluese | `rot.a`, `rot.b`, `rot.c` (pozicionet për t'u shkuar; bosh për një bosht që makina nuk e ka), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Lëvizjet e një operacioni ku boshtet e tij rrotulluese lëvizin gjatë prerjes | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (po kur avancimi duhet të jetë kohë e kundërt), `invf` (1/minuta) |
| `rotary-end` | Pas një operacioni të tillë | |
| `probe-move` | Një lëvizje që ndalon kur sonda prek | `x`, `y`, `z`, `f`, `probe.n` (1 deri 4), `probe.axis` (x, y ose z), `probe.k` (1, 2 ose 3) |
| `probe-set` | Pas prekjeve të një cikli sondimi | `probe.kind` (`"z"`, `"x"`, `"y"` ose `centre`), `probe.action` (`set` ose `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Një lëvizje filetimi në torno | `x`, `z`, `thread.lead` |

Gjithashtu për çdo ngjarje: `kin` (none, a, b, ac, bc), `rotary` dhe `tcp` (yes ose no, nga makina te Konfigurimi), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` dhe `op.turn` të operacionit, dhe në torno `spin.mode` (css ose rpm), `spin.css`, `spin.max` dhe `tool.nose`. Një fjalë me shkronjë, vlera e së cilës është bosh, si `A{rot.a}` në një makinë pa bosht A, lihet jashtë rreshtit. Krahaso x, y dhe z si tekst në thonjëza (`if probe.kind == "z"`): të zhveshura, janë koordinatat e lëvizjes.

Dy rreshta të tjerë në krye të një postprocesori e bëjnë atë postprocesor torno: `machine lathe` (atëherë shkruan vetëm X dhe Z, dhe refuzon shtigjet frezuese ashtu siç refuzon një postprocesor frezimi shtigjet e tornimit) dhe `lathe-x diameter` ose `lathe-x radius`.

Çdo ngjarje mund të përdorë variablat e llojit të vet të lëvizjes, të shkruara `{name}`: programi (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), blloku (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), vegla (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacioni (`op.name`, `op.type`), `rpm`, pika e një lëvizjeje (`x`, `y`, `z`, `f`, dhe `moved`: true kur një bosht ka ndryshuar), harqet (`arc.g` 2 ose 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) dhe vrimat (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Lista **Ngjarjet dhe variablat** e redaktuesit tregon cila ngjarje e sheh cilën. Gjendja që mund ta lexosh dhe ta vendosësh: `cool`, `offset`, dhe `at.x`, `at.y`, `at.z`, `at.f` (vlerat e fundit të shkruara).

## Deklaratat

| Deklarata | Çfarë bën |
|---|---|
| `raw TEXT` | Një rresht saktësisht siç shkruhet (pa numër rreshti) |
| `comment TEXT` | `(TEXT)` me karaktere jo-ASCII dhe kllapa të hequra |
| `emit WORD WORD …` | Një rresht fjalësh; fjalët që dalin bosh lihen jashtë; pa fjalë, pa rresht |
| `word WORD …` | Shto fjalë te rreshti që po ndërtohet; një `emit` i zhveshur e mbyll |
| `if EXPR` … `else` … `end` | Kushte: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, përndryshe b) |
| `for tool in tools` … `end` | Një herë për çdo vegël që përdor programi |
| `set NAME EXPR` | Kujto një vlerë (`set offset tool.number`) |
| `reset NAME …` | Harro fjalët modale (një grup, një shkronjë adrese si `Z`, ose `at.z`) |
| `do rapid X Y Z` | Ekzekuto ngjarjen `rapid` për një pikë |

Një fjalë është tekst i shkruar me vrima `{variable|filter}`. Filtrat janë `upper`, `lower`, `pad:N` (mbushje me zero), `cut:N` (N karakteret e para), `safe` (ASCII e sigurt për komente) dhe `int`. Një fjalë që mbaron me `~` është **modale**: shkruhet vetëm kur ndryshon nga ajo që u shkrua së fundi (`G1~`, `X{x}~`). Një fjalë që mbaron me `~!` shkruhet çdo herë dhe kujtohet akoma. Një emër që nuk është variabël është tekst i thjeshtë (`G81`, `mist`). Numrat rrumbullakosen në 0,001 mm dhe shkruhen pa zero në fund.

## Çfarë nuk mund të bëjë një postprocesor

Ai vendos vetëm si shkruhen lëvizjet, asgjë më shumë. Nuk mund të ndryshojë një shteg veglash, të renditë operacionet, të ndajë një hark, të shtojë një bosht, të njohë kufijtë e lëvizjes dhe kinematikën e makinës tënde, ose të bëjë aritmetikë me koordinatat (nuk ka `+`). Pozicionet rrotulluese vijnë nga makina e përshkruar te Konfigurimi, jo nga postprocesori: një postprocesor mund të ndryshojë shenjën ose shkronjat e tyre, jo kinematikën. Ciklet e jetëgjatësisë së veglës dhe të nënprogrameve nuk janë ndërtuar. Një skedar postprocesori në stilin `.cps` nga një program tjetër nuk mund të ngarkohet: ky është një format tjetër, më i thjeshtë.
