---
title: Postprocesorët që mund t'i redaktosh
summary: Një post është një skedar i shkurtër tekst që e kthen rrugën e veglës në G-code për kontrollin tënd. Kopjo një nga postet e integruara, ndrysho rreshtat që të duhen (numrat e rreshtave, ndërrimi i veglës, lëvizjet në origjinë, kodi i fundit), shiko G-code që shkruan ndërsa shkruan, dhe mbaje me pjesën.
keywords: post, postprocesor, G-code, NC, GRBL, LinuxCNC, redakto postin, post me porosi, cpost, ndërrim veglë, M6, G43, cikël i përsëritur, numra rreshtash, modal, ngjarje, ndryshore
from: 36ab8a38
---

E njëjta rrugë veglash duhet shkruar ndryshe për kontrolle të ndryshme: numra rreshtash ose asnjë, `M6` ose një pauzë, `G28` ose `G53`, `M30` ose `M2`. Një **post** është teksti i shkurtër që thotë si. Postet e integruara të PartCraft (stili Fanuc, GRBL dhe LinuxCNC) janë shkruar në këtë format, prandaj një post yt mund të fillojë si kopje e një prej tyre.

Kontrollo daljen në simulatorin e vetë makinës përpara prerjes, dhe ekzekuto fillimisht në ajër mbi materialin. Postet e integruara shkruajnë saktësisht atë që shkruanin përpara ekzistencës së këtij formati (testet krahasojnë daljen e tyre bit për bit në qindra programe), por asgjë këtu nuk është provuar në makinën tënde, dhe një post që ndryshon është përgjegjësia jote për ta provuar.

## Krijo një

Në Prodhim, nën **Post**:

- {{ui:Edit post…}} mbi një kontroll të integruar hap **kopjen tënde** të tij. Mbi një nga postet e tua, hap atë post.
- {{ui:New post…}} fillon nga një post i vogël bosh me çdo ngjarje brenda.
- {{ui:Import post file…}} lexon një skedar tekst `.cpost` (skedarin që merr nga **Ruaj si skedar…** në redaktues).

Redaktuesi shfaq tekstin, një rresht që thotë nëse lexohet (dhe cili rresht është i gabuar), dhe G-code që shkruan posti, ndërsa shkruan. **Shiko paraprakisht me** zgjedh një program të vogël shembull që ekzekuton çdo ngjarje, ose programin e kësaj pjese. {{ui:Save}} e ruan postin në skedarin e pjesës (deri në 20 poste) dhe e zgjedh si kontroll. Postet udhëtojnë me pjesën; për ta përdorur në një pjesë tjetër, ruaje si skedar dhe importoje atje.

## Si duket një post

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

Rreshtat që fillojnë me `//` dhe rreshtat bosh injorohen. Në krye vijnë cilësimet; pastaj një bllok `on <event>` për çdo ngjarje, i mbyllur me `end`. Një ngjarje që lë jashtë nuk shkruan asgjë.

| Cilësimi | Kuptimi |
|---|---|
| `post <id>` | ID-ja e postit: shkronja, shifra, `-` dhe `_` |
| `name <text>` | Çfarë shfaq lista e Kontrollit |
| `extension <ext>` | Zgjatimi i skedarit: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … në çdo rresht `emit`, ose asnjë |
| `decimal-point yes` / `no` | `10.` në vend të `10` (komentet nuk e mbajnë kurrë pikën) |
| `canned-cycles yes` / `no` | `no`: vrimat shkruhen si lëvizjet G0/G1 që përfaqësojnë |
| `modal <group> <words>` | Fjalët e një grupi (`modal motion G0 G1 G2 G3`) që shkruhen vetëm kur ndryshojnë |

## Ngjarjet

Ato ekzekutohen sipas kësaj radhe për një program: `start`; pastaj për çdo operacion `operation`, `tool-change` (kur ndryshon vegla), `spindle` (kur ndryshon shpejtësia), `approach` (lëvizja deri te pika e parë, para lëvizjes së parë të shpejtë), `coolant-on`, pastaj lëvizjet e tij si `rapid`, `feed` dhe `arc`, dhe çdo cikël i përsëritur si `cycle-start`, një `cycle-hole` për çdo vrimë dhe `cycle-end`; në fund `end`.

Çdo ngjarje mund të përdorë ndryshoret e llojit të vet të lëvizjes, shkruar `{name}`: programi (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), materiali (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), vegla (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacioni (`op.name`, `op.type`), `rpm`, pika e një lëvizjeje (`x`, `y`, `z`, `f`, dhe `moved`: true kur ka ndryshuar një bosht), harqet (`arc.g` 2 ose 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) dhe vrimat (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Lista **Ngjarjet dhe ndryshoret** e redaktuesit tregon cila ngjarje e sheh cilën. Gjendja që mund ta lexosh dhe vendosësh: `cool`, `offset`, dhe `at.x`, `at.y`, `at.z`, `at.f` (vlerat e fundit të shkruara).

## Deklaratat

| Deklarata | Çfarë bën |
|---|---|
| `raw TEXT` | Një rresht saktësisht ashtu siç shkruhet (pa numër rreshti) |
| `comment TEXT` | `(TEXT)` me karaktere jo-ASCII dhe kllapa të hequra |
| `emit WORD WORD …` | Një rresht fjalësh; fjalët që dalin bosh lihen jashtë; pa fjalë, pa rresht |
| `word WORD …` | Shton fjalë në rreshtin që po ndërtohet; një `emit` i thjeshtë e mbyll |
| `if EXPR` … `else` … `end` | Kushte: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, përndryshe b) |
| `for tool in tools` … `end` | Një herë për çdo veglë që përdor programi |
| `set NAME EXPR` | Kujton një vlerë (`set offset tool.number`) |
| `reset NAME …` | Harron fjalët modale (një grup, një shkronjë adrese si `Z`, ose `at.z`) |
| `do rapid X Y Z` | Ekzekuton ngjarjen `rapid` për një pikë |

Një fjalë është tekst i shkruar me vrima `{variable|filter}`. Filtrat janë `upper`, `lower`, `pad:N` (mbushje me zero), `cut:N` (N karakteret e para), `safe` (ASCII e sigurt për komente) dhe `int`. Një fjalë që mbaron me `~` është **modale**: shkruhet vetëm kur ndryshon nga ajo që u shkrua së fundi (`G1~`, `X{x}~`). Një fjalë që mbaron me `~!` shkruhet çdo herë dhe kujtohet gjithashtu. Një emër që nuk është ndryshore është tekst i thjeshtë (`G81`, `mist`). Numrat rrumbullakosen në 0.001 mm dhe shkruhen pa zero të tepërta.

## Çfarë nuk mund të bëjë një post

Ai vendos vetëm si shkruhen lëvizjet, asgjë më shumë. Nuk mund të ndryshojë rrugën e veglës, të rendisë operacionet, të ndajë një hark, të shtojë një bosht, të dijë udhëtimin ose kinematikën e makinës tënde, ose të bëjë aritmetikë mbi koordinatat (nuk ka `+`). Ciklet e sondimit, jetëgjatësia e veglës dhe ciklet e nënprogrameve, daljet e boshtit të 4-t dhe 5-t, dhe kodet e torit nuk janë ndërtuar. Një skedar post në stilin `.cps` nga një program tjetër nuk mund të ngarkohet: ky është një format tjetër, më i thjeshtë.
