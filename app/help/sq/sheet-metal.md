---
title: Lim metalik: flanxhat dhe modeli i sheshtë
summary: Nisni një pjesë me lim metalik nga një skicë (një pllakë e sheshtë ose një profil i përkulur), vendosni trashësinë, rrezen e përkuljes dhe K-faktorin një herë, përkulini flanxhat nga skajet e saj me çarje përkuljeje, dhe shtrijeni të sheshtë si DXF për prerje.
keywords: model i sheshtë, shtrirje, zhvillim, gjatësi e zhvilluar, sasi përkuljeje, vijë përkuljeje, dxf për lazer, prerje me lazer, lim metalik, flanxhë bazë, flanxhë skaji, flanxhë, përkulje, rreze përkuljeje, k-faktor, k faktor, trashësi, kalibër, çarje, çarje përkuljeje, kanal, mbajtëse, kuti, lim i përkulur
from: 144bd0f6
---

:::note
**Nuk është ndërtuar ende në këtë version.** Lim metalik kërkon një kernel gjeometrik të saktë, të cilin ky version i PartCraft nuk e ka: ai ndërton çdo pjesë me kernelin e rrjetës. [Çfarë nuk është ndërtuar ende](topic:not-built-yet) thotë çfarë të bëni në vend. Pjesa tjetër e kësaj faqeje e përshkruan siç punon me një kernel të saktë.
:::

Pjesët me lim metalik nisin me një **Flanxhë bazë**. Ajo e vendos limin për gjithë pjesën: **trashësinë** e tij, **rrezen e brendshme të përkuljes** dhe **K-faktorin**. Çdo **Flanxhë skaji** pas saj përkulet me këto numra të njëjtë, kështu që pjesa mbetet një lim i vetëm që mund të zhbëhet. Të dyja kërkojnë **kernelin e saktë** (shih [Kerneli i rrjetës](topic:solid-kernels)).

## Nis me një flanxhë bazë

1. Vizatoni një skicë. Përdorni një **profil të mbyllur** për një pllakë të sheshtë (një drejtkëndësh, ose çdo kontur i mbyllur me vrima). Përdorni **një zinxhir të hapur vijash** për një lim të përkulur, si një L, një U ose një Z të vizatuar si pamje anësore e limit.
2. Zgjidhni skicën te historiku i veçorive.
3. Hapni {{ui:More}} te grupi Veçoritë dhe zgjidhni {{ui:Base flange}}.

Në panelin e djathtë:

- **Trashësia (mm)** është kalibri i limit.
- **Rrezja e përkuljes (mm)** është rrezja e brendshme e çdo përkuljeje. 0 jep një cep të mprehtë brenda; jashtë, ai përkulet ende me një rreze sa një trashësi.
- **K-faktori** tregon ku ndodhet shtresa neutrale brenda limit, nga 0 (faqja e brendshme) deri në 0.5 (mesi). Ai vendos sa e gjatë është lamina kur shtrihet e sheshtë. 0.44 është parazgjedhja; punishtja juaj ose furnizuesi i materialit mund t'jua japë të tijin.
- **Thellësia (mm)** është sa larg del një profil i përkulur nga plani i skicës. Një pllakë e shpërfill.
- **Trashësia jashtë përkuljeve**: një profil i hapur është një faqe e limit. Si parazgjedhje trashësia shkon brenda përkuljes së parë, kështu që vijat që vizatuat janë jashtë kanalit. Shenjojeni për t'i vendosur vijat brenda. Përgjigja është e njëjtë nga cili skaj keni vizatuar.

Çdo cep i një zinxhiri të hapur bëhet përkulje. Një vijë shumë e shkurtër për t'i mbajtur përkuljet e saj e thotë këtë, me gjatësinë që i nevojitet.

## Përkul një flanxhë skaji

1. Klikoni një skaj të drejtë të faqes së sipërme ose të poshtme të limit (skajet e gjatë, jo ato të holla).
2. Zgjidhni {{ui:More}} › {{ui:Edge flange}}. Pa një skaj të zgjedhur, PartCraft pret që të klikoni një; Esc e anulon.

Flanxha përkulet lart nga faqja e atij skaji, rreth rrezes së brendshme të limit, pastaj vazhdon drejt. Në panel:

- **Këndi (°)** është sa përkulet, nga 1 deri në 180. 90 është një flanxhë katrore.
- **Gjatësia (mm)** është këmba e drejtë pas përkuljes.
- **Përkule në anën tjetër** e përkul nga faqja tjetër (poshtë në vend të lart).
- **Zhvendosja në fillim** dhe **Zhvendosja në fund** e shkurtojnë flanxhën nga çdo skaj i skajit.
- **Çarja e përkuljes**: kur një skaj ka zhvendosje, pritet një prerje në lim pranë tij, që përkulja të mos e shqyejë metalin atje. **Gjerësia e çarjes** cakton gjerësinë e prerjes; thellësia e saj është rrezja e përkuljes plus trashësia. Zgjidhni **None** për ta lënë cepin të pa prerë.

Për të ndryshuar skajin më vonë, shtypni {{ui:Pick}} në panel dhe klikoni një tjetër.

:::tip
Përdorni parametra për trashësinë dhe rrezen (shih [Parametrat dhe ekuacionet](topic:parameters)), që një ndryshim kalibri ta përditësojë çdo flanxhë njëherësh.
:::

## Shtrije të sheshtë

Të dy panelet përfundojnë me **Modeli i sheshtë**. Shtypni {{ui:Lay flat}}:

- Një pamje paraprake tregon limin e zhbërë, me vijën qendrore të çdo përkuljeje me pika.
- **Madhësia** dhe **Sipërfaqja** janë ato të boshtit të sheshtë.
- Çdo përkulje listohet me drejtimin e saj (**lart** ose **poshtë**, parë nga ana e skicës së flanxhës bazë), këndin dhe rrezen e brendshme.

Çdo përkulje merr gjatësinë e shtresës neutrale të limit përmes saj, **sasinë e përkuljes**: këndi (në radianë) × (rrezja e brendshme + K-faktori × trashësia). Pra një përkulje 90° e një limi 2 mm me rreze 2 mm dhe K-faktor 0.44 shton 4.52 mm lim të sheshtë.

Në një pllakë të sheshtë, vrimat, prerjet dhe çarjet e përkuljes shfaqen në model aty ku janë me të vërtetë, përfshirë vrimat përmes një flanxhe.

Për të prerë shumë, klikoni {{ui:Nest on sheets…}} nën modelin e sheshtë: shih [Vendos pjesët e sheshta në fleta](topic:nest-flat-parts). Një flanxhë bazë e përkulur shtrihet si një drejtkëndësh: gjatësia e zhvilluar × thellësia e saj, me një vijë përkuljeje për çdo cep.

{{ui:Save DXF}} e ruan modelin e sheshtë për një lazer, prese ose ujëprerës, në milimetra:

- kontura në shtresën **OUTLINE**, si vija, harqe dhe rrathë;
- vijat e përkuljes në shtresën **BEND**, me pika;
- një shënim për çdo përkulje në shtresën **BEND_NOTES**, si "UP 90° R2".

Ndryshoni çdo gjë dhe modeli i sheshtë zhduket; shtypni {{ui:Lay flat}} sërish për të riun.

:::note
Kontrolloni K-faktorin me punishten tuaj përpara prerjes: gjatësia e modelit varet nga ai, dhe ndryshon sipas materialit, trashësisë dhe veglave.
:::

## Mesazhe

- **Lim metalik kërkon një flanxhë bazë përpara tij** — një flanxhë skaji u shtua përpara çdo flanxhe baze. Zhvendoseni poshtë një të tillë, ose shtoni fillimisht një flanxhë bazë.
- **Një flanxhë skaji kërkon një skaj të drejtë** — flanxhat përkulen vetëm përgjatë vijave; skajet e lakuara nuk mund të marrin ende një.
- **Ai skaj nuk është në një faqe të trashësisë së limit** — skaji i përket një faqeje që nuk është sipër ose poshtë (për shembull muri i një vrime). Zgjidhni një skaj të faqes së sipërme ose të poshtme.
- **Zhvendosjet nuk lënë asgjë nga skaji** — dy zhvendosjet së bashku mbulojnë të gjithë skajin ose më shumë.
- **Flanxhat e skajit mbi një flanxhë baze të përkulur nuk mund të shtrihen ende** — nisni nga një pllakë e sheshtë dhe përkuli gjithçka lart me flanxha skaji, që zhbëhen.
- **Prerjet dhe vrimat e bëra pas një flanxhe baze të përkulur nuk shfaqen ende në modelin e saj** — modeli i një profili të përkulur është vetëm drejtkëndëshi i tij i zhvilluar.
