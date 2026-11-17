---
title: Mga dokumento at revision (ang vault)
summary: Hakbang-hakbang na paglalakad sa isang totoong trabaho: ilagay sa kontrol ang isang project folder ng mga piyesa at assembly, mag-check out ng isang piyesa, baguhin ito, mag-check in na may tala, i-release ito, tingnan kung ano ang gumagamit nito at ang bill of materials, kung ano ang nakikita ng pangalawang tao habang naka-lock ang file, at kung paano ito gumagana kasama ang mga cloud folder.
keywords: vault, dokumento, walkthrough, tutorial, check out, check in, revision, release, approve, lock, history, saan ginagamit, bill of materials, bom, assembly, cloud folder, project folder, dalawang tao, shared folder
from: 0a5e6983
---

## Ano ang gagawin mo

Ikaw si Ana, nagtatrabaho sa Riverside Clinic kasama ang katrabaho mong si Ben. Nasa iisang folder ang mga piyesa at assembly ng project na parehong ninyo naaabot (isang shared drive, isang synced folder, o isang cloud folder). Sa pagtatapos, ang isang file ay dumaan mula sa unang kopya nito hanggang sa na-release na revision **A**, binago muli bilang **B.1**, nakita mo kung sino ang gumawa ng ano, at nakita mo kung ano ang nakikita ni Ben kapag hawak mo ang file.

Nakalagay ang lahat sa isang nakatagong folder na `.ccvault` sa tabi ng mga file mo: walang server, walangina-upload (ang cloud folder ang eksepsiyon, tingnan ang huling hakbang). Para sa bawat button at panuntunan sa iisang lugar, tingnan ang topic na *Documents: check out, revisions and release* kung saan ito nasa app mo.

## 1. I-set up ang project folder

1. Piliin ang {{ui:Documents…}} sa grupong **File** ng toolbar.
2. Piliin ang {{ui:Pumili ng project folder}} at piliin ang folder na naglalaman ng mga piyesa at assembly ng project. (Gumagana ang mga project folder sa Studio at sa mga browser na kayang magbukas ng folder, gaya ng Chrome at Edge. Sa ibang browser, sinasabi ito ng panel.)
3. Piliin ang {{ui:Palitan}} sa tabi ng **Ikaw:** at i-type ang iyong pangalan, `Ana` (kung magtanong, i-type din ang pangalan ng computer na ito). Ipinapakita na ng panel ang *Ikaw: Ana sa* at ang iyong computer. Kasama ng pangalan mo ang lahat ng ginagawa mo.
4. Piliin ang {{ui:Magsimula ng vault sa folder na ito}} at i-type ang pangalan ng project, `Riverside clinic`. Sinasabi ng panel ang *Nagsimula ang vault para sa Riverside clinic.*

## 2. Ilagay ang file sa kontrol

1. Buksan ang **Mga file na wala sa vault** at piliin ang {{ui:Idagdag}} sa tabi ng `plates/Bracket.partcraft.json`.
2. Lalabas ito sa ilalim ng **Mga file sa vault** sa revision **A.1**, state na **Ginagawa pa**. Ang A.1 ang unang kopya nito; nagtatago ang vault ng kopya ng bawat revision.

## 3. I-check out, baguhin, i-check in

1. Piliin ang {{ui:Buksan}} sa tabi ng `plates/Bracket.partcraft.json`. Bubukas ang piyesa sa PartCraft at magsasara ang panel para makita mo ito. Buksan muli ang panel mula sa {{ui:Documents…}}.
2. Buksan muli ang panel at piliin ang {{ui:I-check out}}. Ang row ay magsasabing **Na-check out sa iyo**. May nagawang lock file sa `.ccvault/locks`; walang ibang makakapag-check out ng file na ito hanggang i-check in mo ito.
3. Baguhin ang piyesa: i-edit ang isang dimension, magdagdag ng butas. Hindi tinatanggap ang I-save maliban kung naka-check out sa iyo ang file, at sinasabi kung bakit; palaging gumagana ang I-save bilang para sa kopya ng sarili mo.
4. Buksan ang panel, piliin ang {{ui:I-check in}} at i-type kung ano ang nagbago (`Moved the door`). Sinasabi ng panel na *na-check in bilang A.2*. Ang file sa project folder ay ang piyesang binuksan mo, at wala na ang lock. Ang pag-check in nang walang pagbabago ay nagpapanatili ng revision.

Kung magbago ang isip mo, ibinabalik ng {{ui:I-undo ang check-out}} ang file nang walang bagong revision.

## 4. Suriin at i-release

1. Piliin ang {{ui:Ipadala para sa review}}. Magiging **Para sa review** ang state at read-only ang file.
2. Bago i-approve, piliin ang {{ui:Mga setting ng project}} at ilista kung sino ang maaaring mag-approve (isang pangalan bawat linya), halimbawa `Ben` at `Carla`, at lagyan ng tsek ang panuntunang dapat ibang tao sa may-akda ang approver. Piliin ang {{ui:I-save ang mga setting}}. Ngayon, ang vault mismo ang tatanggi sa sinumang iba.
3. Piliin ni Ben (o ni Carla) ang {{ui:I-approve}} at i-type ang pangalan ng approver. Magiging **Na-release** ang state at magiging **A** ang revision, kasama ang *inaprubahan ni* at ang pangalan. Read-only ang na-release na file. Ibabalik sana ito ng {{ui:Ibalik}} sa Ginagawa pa, kasama ang dahilan.

Ang pangalan ng approver ay ang pangalang na-type sa panel; ito ay talaan kung sino ang pumirma, hindi patunay ng pagkakakilanlan.

## 5. Bagong revision

1. Sa na-release na file, piliin ang {{ui:Bagong revision}}. Hawak mo ito para sa susunod na letra.
2. Baguhin ito, saka {{ui:I-check in}}. Ang revision ay **B.1**, ginagawa pa. I-release ito sa parehong paraan at magiging **B** ito. Ang {{ui:I-undo ang check-out}} bago ang unang check-in ay mag-iiwan dito sa **A**.

Tumatakbo ang mga letra ng revision: A, B … Z, AA, AB. Kung nilalaktawan ng standard mo ang ilang letra, nilalaktawan ng project setting na *Gamitin ang ASME Y14.35 sequence* ang I, O, Q, S, X at Z para sa mga susunod na revision.

## 6. Tingnan kung ano ang nangyari

Piliin ang pangalan ng file para buksan ang mga detalye nito:

- **{{ui:Kasaysayan}}**: bawat pangyayari, pinakabago muna, kasama kung sino, aling computer, at kailan: *Na-check in ang A.2* ni Ana, *Na-release* ni Ben, at iba pa.
- **{{ui:Mga revision}}**: ang talaan ng revision: bawat revision na itinatago, kasama ang petsa, sino ang nag-check in nito, ang tala, at sino ang nag-approve. Kinokopya ng vault ang bawat isa sa `.ccvault/revs`.
- **{{ui:Mga ginamit}}**: ang mga piyesa ng isang assembly.
- **{{ui:Ginamit ng}}**: Inililista ng Ginamit ng ang bawat assembly sa vault na naglalaman ng piyesang ito: baguhin ang isang bracket at alam mo kung aling assembly ang titingnan.

## Assemblies: ano ang ginagamit nila at ang bill of materials

Ilagay ang isang assembly (`.partcraft.json`, na-save mula sa Assembly mode) sa folder at idagdag ito. Piliin ang pangalan nito: inililista ng **Mga ginamit** ang mga piyesang taglay nito, kasama ang revision at state ng bawat piyesa; ang **Ginamit ng** sa isang piyesa ay naglilista ng bawat assembly na naglalaman nito. Sine-save ng {{ui:Bill of materials (CSV)}} ang buong listahan ng mga piyesa, bawat level, kasama ang dami, revision, at state, para sa spreadsheet. Baguhin ang isang bracket, at sasabihin sa iyo ng **Ginamit ng** kung aling assembly ang titingnan.

## 7. Ano ang nakikita ni Ben habang hawak mo ang file

Ngayon, i-check out muli ang file, at hilingin kay Ben na buksan ang parehong project folder sa computer niya at buksan ang panel. Sa row ng file, makikita niya ang **Na-check out ni Ana sa** computer mo **mula noong** oras, at walang button na {{ui:I-check out}}. Kung susubukan pa rin niya, tatanggi ang vault: ang lock ay file na hindi gagawin ng sistema nang dalawang beses, kaya hindi maaaring hawakan ng dalawang tao ang file, kahit sa iisang segundo, kapag nasa disk ang folder sa Studio. (Sa browser, best effort lang ang ibinibigay ng folder, at sinasabi ito ng panel sa ilalim ng **Folder**.)

Kung wala si Ana at kailangan ni Ben ang file, inilalabas ito ng {{ui:Sirain ang check-out}}. Kailangan niyang mag-type ng dahilan; mapupunta ito sa log kasama kung kanino ang check-out. Kapag may nakalistang admin ang project, sila lang ang makakagawa nito. Ang check-out na mas luma sa stale limit (14 araw bilang default) ay mamarkahang *matagal na*. Pagkatapos ng break, tatanggihan ang late check-in ni Ana, para hindi ninyo ma-overwrite ang isa't isa.

## 8. Cloud folders

Ang cloud folder ay project folder na nakatago sa cloud storage ng team mo, kaya hindi na kailangan ng team ng shared drive. Sa Studio, naka-sign in sa CadCraft account mo, ipinapakita ng panel ang {{ui:Magbukas ng cloud folder}} sa tabi ng {{ui:Pumili ng project folder}}. Piliin ito at piliin ang folder, nakalista bilang workspace / folder. Ang may-ari ng workspace ang unang gagawa ng folder, at dapat aktibo ang cloud storage ng team. Gumagana nang pareho ang lahat ng nasa itaas; ang server ang gumagawa ng lock, na mahigpit sa pagitan ng mga tao. Kung hindi ka naka-sign in, sinasabi ng panel na mag-sign in ka. Sa karaniwang browser tab, hindi inaalok ang cloud button; gamitin ang Studio.

## Subukan

Gawin ang walong hakbang sa itaas gamit ang kopya ng totoong file. Para sa mga hakbang na para sa dalawang tao, kailangan mo ng ibang tao, o dalawang window na may dalawang pangalan. Kung susubukan mo ito sa totoong shared folder, may nakalistang check ang pahina ng Community testing na nagtatanong nang eksakto nito, at tumatanggap ng resulta.
