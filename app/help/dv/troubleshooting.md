---
title: މައްސަލަ ހައްލުކުރުން
summary: PartCraft ގައި ކުރެވޭ މައްސަލަތައް، އެޕް ފެށޭ ނުފެށުމުން، ފީޗަރުތައް ފެއިލް ވުމާއި ސްކެޗް ހައްލު ނުވުމާއި ފައިލް ހުޅުވެ ނުވުމާއި ޖޮއިންޓް ޚިލާފު ވުމާއި، ފެންނަ މެސެޖާއި ހައްލާއެކު.
keywords: މައްސަލަ, އެރަރ, މަދަދު, ކުރެވޭނެ ނޫން, ފެއިލް, ފެއިލިންގ, ކްރޭޝް, ހުސް, webgl, webassembly, ކާނަލް, ހަދާފައި ނެތް, over defined, open profile, ހުޅުވޭ ނޫން, އެއްވެސް ކަމެއް ނުވޭ, ރަނގަޅު ނޫން ދިމާ, ސުޅު
from: 7728542c
---

މައްސަލައެއް ވާއިރު، ފުރަތަމަ **status bar** ކިޔަވާ ހިމަނާ: PartCraft އެތަނުގައި ކަމެއް ކުރުމުން ނުވަތަ ކޮންމެވެސް ކަމެއް އެދޭ ކަމެއް ޖަވާބު ދެއެވެ. ފެއިލް ވާ ފީޗަރެއް އޭގެ މެސެޖް ރައިޓް ޕެނަލްގެ މަތީގައި އަދި ހިސްޓަރީ ރޯ ރޮލް ކުރާއިރު ދައްކައެވެ.

## އެޕް ފެށެއް ނުވާ

### "This browser cannot show 3D (WebGL is off or missing), so PartCraft cannot run here."

**ސަބަބު:** ބްރައުޒަރުގައި 3D ގްރާފިކްސް (WebGL) އޮފް ކުރެވިފައި، ބްލޮކް ކުރެވިފައި، ނުވަތަ ގްރާފިކްސް ޑްރައިވަރު ކަމަށް ނުދެއެވެ.

**ހައްލު:**

:::chromium
`chrome://settings/system` (ނުވަތަ Edge ގައި `edge://settings/system`) ހުޅުވައި "Use graphics acceleration when available" އޮން ކޮށް، ބްރައުޒަރު އަލުން ފެށޭ. އޮންނަ ނަމަ `chrome://gpu` ގައި WebGL ސްޓޭޓަސް ބަލާ، އަދި ގްރާފިކްސް ޑްރައިވަރު އަޕްޑޭޓް ކުރޭ.
:::

:::firefox
`about:support` ހުޅުވައި Graphics, WebGL ބަލާ. ބްލޮކް ކުރެވިފައި ނަމަ ގްރާފިކްސް ޑްރައިވަރު އަޕްޑޭޓް ކުރޭ. `about:config` ގައި `webgl.disabled` `false` ވާންވާނެ.
:::

:::safari
މިހާރުގެ Safari ގައި WebGL ހުރިހާ ވަގުތަކުވެސް އޮން. macOS އަޕްޑޭޓް ކުރޭ (Safari އެކަން ގޮސްފައި ވެސް އަޕްޑޭޓް ވޭ). އެކަން ކުރެވިފައި ވެސް ފެއިލް ވެއްޖެ ނަމަ، އެ މެކުގައި Chrome ނުވަތަ Firefox ޓްރައި ކޮށް ގްރާފިކްސް ހާޑްވެއަރ ބަލާ.
:::

ރިމޯޓް ޑެސްކްޓޮޕް އަދި ސަމާތު ވާޗުއަލް މެޝީންތައް ގައި WebGL ނޫން. ކޮމްޕިއުޓަރގައި ބަލާ.

### "The solid kernel did not load: …"

**ސަބަބު:** ޖިއޮމެޓްރީ ކާނަލް (WebAssembly ޕްރޮގްރާމެއް) ނުލިބުން ނުވަތަ ފެށެން ނުކުރުން. ބޮޑަށް ވާ ކަމަކީ އެޕް ލޯޑުވާ ހިނދު ކަނެކްޝަން ކެނޑުން، ނުވަތަ WebAssembly ކުރިން ކުންފުނީގެ ޕޮލިސީ ނުވަތަ ބްރައުޒަރ ސެޓިންގެއް މެދުވެރިކޮށް އޮފް ކުރެވޭ، ނުވަތަ ބްރައުޒަރ ވަރަށް ދުރު.

**ހައްލު:** އޮންލައިންއަކީ ފޭޖް އަލުން ލޯޑް ކުރޭ. ފަހު ފެއިލް ވެއްޖެ ނަމަ އެހެން ޙާޒިރު ބްރައުޒަރެއް ޓްރައި ކުރޭ. Firefox ގައި `about:config` ގައި `javascript.options.wasm` `true` ވާންވާނެ. އޮފްލައިންގައި އެޕް އަދި ކާނަލް ލޯޑްވާނީ ކަނެކްޝަން ކެނޑުމުގެ ކުރިން އެޕް ބާ **Offline ready** ކިޔައި ހުރި ނަމަ ({{ui:Save for offline}} އޮންލައިންގައި؛ [Working offline](common:offline) ބަލާ).

### އޮފްލައިން ބަޓަން "Could not save" ނުވަތަ "Offline not available" ކިޔޭ

**Could not save**: ކޮންމެހެން ފައިލްތައް ޑައުންލޯޑު ނުވެއްޖެ. އޮންލައިންގައި އަލުން ކްލިކް ކުރޭ؛ ސުސްތު ނުވަތަ މީޓަރުކޮށް ކަނެކްޝަންއެއް ދެވަނަ ފަހަރަށް ބޭނުންވޭ. **Offline not available**: މި ބްރައުޒަރ ވިންޑޯއަށް އޮފްލައިން ކޮޕީ ރައްކާ ނުކުރެވޭ (ޕްރައިވެޓް ވިންޑޯތަކާއި ކޮންޓްރޯލްޑް ކޮމްޕިއުޓަރ ކެޓަގަރީތައް މަނާ ކުރެވޭ). އާންމު ވިންޑޯ ބޭނުން ކުރޭ، ނުވަތަ ޓެބް ހުޅުވައި ބައްލަވާ.

### PartCraft އޮފްލައިން ނަމަވެސް މުއްދަތު ހަމަވެފައި

Online ވާއިރު **Offline ready** ކްލިކް ކޮށް {{ui:Save again (get the newest version)}} ޚިޔާރު ކުރޭ.

### "Sweep: not built yet. It needs an exact kernel, …"

ފުރިހަމަ މެސެޖަކީ "<Name>: not built yet. It needs an exact kernel, which this version of PartCraft does not have. Help › What is not built yet says what to do instead." Sweep، Loft، Rib، ޝީޓް މެޓަލް ފްލޭންޖް، ސަރފޭސް ފީޗަރ، Combine، Move body، Scale body ނުވަތަ Path pattern ޚިޔާރު ކުރާއިރު، އަދި އެހެން ހިސާބު ހަމަ އެކްސޭކްޓް ކާނަލް ބޭނުންވާ ކަންތައް ނަމަ ފެންނާނެ. ބްރައުޒަރ ނުވަތަ ޕާޓް ކުށެއް ނޫން: މި ވާޝަން ފުރިހަމަ ޕާޓްތައް މެޝް ކާނަލް އިން ހަދައެވެ. އެހެން ކަން ކުރާ ގޮތަށް [What is not built yet](topic:not-built-yet) ބަލާ، އަދި [The mesh kernel](topic:solid-kernels).

### "Loading the solid kernel…" ފަހުން ނުދާ

ސުސްތު ކަނެކްޝަނުގައި ކުޑަ ވަގުތެއް ރާ: ކާނަލް އަދި 3D ލައިބްރަރީ ފުރަތަމަ ފަހަރު ޑައުންލޯޑު ވޭ. ދެން އަލުން ލޯޑް ކުރޭ. ޕޭޖް ހުރީ އެރަރެއް ނަމަ، މަތީގައި ބަލާ.

## ކީއެއް ފިތާތަން ދަތި ބަޓަން ހުށަހެޅުނު ނަމަ ކަމެއް ނުވޭ

- ކާސަރ ބޮކްސެއް ފެންނާއިރު ކީތައް ދުވެސް ނޫން. ޕެނަލްގެ ބޮކްސަކުން ލިޔުމަށްފަހު 3D ވިއު ކްލިކް ކުރޭ ނުވަތަ {{key:Esc}} ނުވަތަ {{key:Tab}} ފަސްކުރޭ.
- އެރޯ ކީތައް ނުވަތަ {{key:Plus}}/{{key:Minus}} ވިއު ފުރާ/ޒޫމް ކުރާނީ ވިއުގައި ކްލިކް ކުރުމުންނެވެ.
- ޑައިލޮގެއް ހުޅުވާފައި: އެ ޖަވާބު ދޭ ފުރަތަމަ.
- ސްކެޗުގައި، {{key:F}} އަކީ Fillet ޓޫލް، Fit ނޫން. {{ui:Fit}} ބަޓަން ބޭނުން ކުރޭ.

## ޓޫލްބާރު ބަޓަންއެއް ފެންނަނީ ގްރޭ

- ސްކެޗެއް ހުޅުވާ ވަގުތު ފީޗަރު ބަޓަންތައް ގްރޭ. ކުރިން ސްކެޗް ބަންދު ކުރޭ.
- ސްކެޗް ޓޫލްތައް ސްކެޗް ތެރޭގައި ބަހައްޓަނީ.
- ކުރެވިފައި ނެތް ކަމެއް ނަމަ {{ui:Undo}} އަދި {{ui:Redo}} ގްރޭ.
- {{ui:Assembly}} ހޯދަނީ ސޮލިޑް ވާ ޕާޓެއް. {{ui:Joint}} އެސެމްބްލީގައި ޕާޓް ދެއެއް ހޯދަނީ. {{ui:Edit part}} ޕާޓް ޚިޔާރުވާ ދަތި ކަމެއް.
- {{ui:STEP AP242 (exact solid)}} އަދި {{ui:STEP AP214 (exact solid)}} އެސެމްބްލީގައި ގްރޭ: ކޮންމެ ޕާޓެއް އެކްސްޕޯޓް ކުރޭ. އެހެން ޕްރޮގްރާމަކު ރަނގަޅު ފައިލް ނުދެއެވެ: {{ui:STEP AP214 (exact solid)}} ޓްރައި ކޮށް، ދެން {{ui:STEP (faceted, mesh kernel)}}، އަދި {{ui:Help}} › {{ui:Report a problem}} އިން އަހަންނަށް ދައްކާ.
- {{ui:Sweep}}، {{ui:Loft}} އަދި ޖިއޮމެޓްރީ ކާނަލް ބޭނުން ކުރާ އެހެން ފީޗަރުތައް ގްރޭ ނޫން: އެމީހުން ކްލިކް ކުރެވޭ، ޓޫލްޓިޕްތައް "not built yet (needs an exact kernel)" ކިޔާ، އަދި ކްލިކް ކުރުމުން status bar ގައި ދައްކާ. [What is not built yet](topic:not-built-yet) ބަލާ.
- {{ui:Drawing}} ސޮލިޑް ވާ ޕާޓެއް ބޭނުންވެ، ސްކެޗް ހުޅުވައިފައި ވާއިރު ގްރޭ.
- {{ui:Export}} އެއްޗެއް އެސެމްބްލީގައި ގްރޭ: އެސެމްބްލީ އެކްސްޕޯޓް ނުކުރެވޭ. ބަންދުކޮށް، ނުވަތަ ޕާޓް އެޑިޓް ކޮށް އެކްސްޕޯޓް ކުރޭ.

## ސްކެޗް މައްސަލަތައް

### ސްކެޗް ގައި ރިލޭޝަނެއް އިތުރު ކުރެވެއް ނުވޭ

"No relation fits this selection. Select one or two items (Shift+click adds)." ރިލޭޝަންއަށް އެހެން ސިލެކްޝަނެއް ބޭނުންވޭ. [Sketch relations and dimensions](topic:sketch-relations) ބަލާ ކޮންމެ އެއްގެ ބޭނުން ކުރާ ކަން.

### "Over defined: … cannot all be met. Undo, or delete one of them."

**ސަބަބު:** އާ ރިލޭޝަން ނުވަތަ ޑައިމެންޝަން އެކަނި ހުރި ތަކާ ދެކޮޅު ވޭ. ސްކެޗް ނުހަރަކާތް ކުރެއެވެ.

**ހައްލު:** {{key:Mod+Z}}، ނުވަތަ ރައިޓް ޕެނަލްގެ ލިސްޓުން ރަތް އައިޓަމެއް ފޮހެލާ (އޭގެ ކައިރި **Delete** ޚިޔާރު ކުރޭ).

### "Over defined: … is already implied. Delete it."

**ސަބަބު:** ރިލޭޝަން އެއްވެސް ފައިދާއެއް ނުދެއެވެ: އެހެނިހެން ކަންތައް އެކަން އަމުރުކުރުމުން (މިސާލަކަށް ރެކްޓެންގަލްގެ ދެ ސައިޑުގައި Parallel، ނުވަތަ ހަމަ ދެމިގެން ހުރި ޑައިމެންޝަން). މި ބިލްޑުގައި ޑްރިވަން ޑައިމެންޝަން ނެތެވެ.

**ހައްލު:** ފޮހެލާ. ފީޗަރު ކޮންމެހެން ބިލްޑު ވާނެ، އަދި އިންޒާރެއް ކަމަށް.

### "Those items cannot be dimensioned together."

ތިބާ ކްލިކް ކުރީ، މިސާލަކަށް ޕޮއިންޓަކާއި ސަރކަލް. ސަރކަލްގެ މެދު ޕޮއިންޓަށް ޑައިމެންޝަން ކުރޭ.

### "A fillet needs a corner where exactly two lines meet." / "That radius is too big for these lines."

ދެ ސޮލިޑް ލައިންތައް ކުރިމަތިލާ ކޯނަރ ޕޮއިންޓަށް ރަނގަޅަށް ކްލިކް ކުރޭ. ކުޑަ ލައިން ހުއްދަ ކުރާ ވުރެ ކުޑަ ރޭޑިއަސް ބޭނުން ކުރޭ.

### ތިބާ ދަތިކުރާއިރު ޖޮއިމެޓްރީ ފަހަރަށް ފަހަރު ފަހަތަށް ދެއެވެ

ދަތިކުރުން ރިލޭޝަނެއް ނުވަތަ ޑައިމެންޝަނެއް ފަޅާލާނެ، އެހެން PartCraft އެ ޖިއޮމެޓްރީ ފަހަރު ފަހަތަށް ދަނީ. ނީލް (ދެ އަދި އަލުން ނިޒާމް) ޖިއޮމެޓްރީ ކަމަކަށް ހަރަކާތް ކުރެވޭ.

### "This sketch cannot open: Needs Extrude2, which is failing."

ސްކެޗް ކަމެއް ނުބިލްޑު ފީޗަރެއްގެ ފަރާތެއް މަތީގައި. ފުރަތަމަ އެ ފީޗަރު ރަނގަޅު ކުރޭ، ނުވަތަ ހަލުވާފައި ނަމަ ފަސްކުރޭ، ނުވަތަ roll forward ކުރޭ.

## ފީޗަރު މައްސަލަތައް

| މެސެޖް | ސަބަބު | ހައްލު |
|---|---|---|
| "Make a sketch first: pick a plane, Sketch, draw a closed profile, Exit." | ކާރުތަކުން ނުބޭނުންކުރާ ސްކެޗެއް ނެތް، އަދި އެއްވެސް ހޮވައިފައެއް ނެތް | ސްކެޗެއް ޑްރޯ ކުރޭ، ނުވަތަ ހިސްޓަރީން ބޭނުން ކުރާ ސްކެޗް ހޮވާ |
| "The sketch has no closed profile to extrude." (ނުވަތަ "to revolve") | ސޮލިޑް ލައިންތަކުގެ ބަންދު ލޫޕެއް ނެތް | ގެއްލުންތައް ބަންދު ކުރޭ؛ Q ސެޓް ކޮށް ކޮންސްޓްރަކްޝަން ލައިންތައް ދައްކާ |
| "The profile is open: an end at (x, y) is not joined to anything." | އެ ޕޮއިންޓުގައި ގެއްލުން | ސްކެޗް ހުޅުވާ، އެންޑް އޮތް ކައިރީ ދިޔަ ޕޮއިންޓަށް ދިމާ ކޮށް ސްނެޕް ކުރޭ |
| "The profile branches at (x, y): more than two ends meet there." | ތިން ނުވަތަ ގިނަ ލައިން އެއް ޕޮއިންޓުގައި ކުރިމަތިލާ | އިތުރު ލައިން ފޮހެލާ، ނުވަތަ ކޮންސްޓްރަކްޝަން ލައިން ކަމަށް ބަދަލު ކުރޭ |
| "A closed loop needs at least three sides or a curve." | ދެ ލައިން އަނބުރާ އަނބުރާ | ލޫޕް އަލުން ޑްރޯ ކުރޭ |
| "Through all is for cuts. Use a depth for a boss." | Boss ކަމަށް Through all | End ގައި Blind ނުވަތަ Mid-plane ސެޓް ކުރޭ |
| "There is nothing to cut on that side of the sketch. Try the other direction." | ކަނޑާލުން މަނީ ފަރާތް ފަހަތަށް | Reverse direction ޓިކް ކުރޭ |
| "There is nothing to cut yet." / "There is nothing to drill yet." | މި ފީޗަރުގެ ކުރިން ސޮލިޑެއް ނެތް | ފުރަތަމަ Boss ހަދާ، ނުވަތަ ފީޗަރު ތިރީ ޖައްސާ |
| "Draw a centerline (a construction line) in the sketch to revolve about." | އެކްސިސް ނެތި Revolve ކުރުން | Centerline އިތުރު ކުރޭ، ނުވަތަ Axis ގައި ލައިން ޚިޔާރު ކުރޭ |
| "The profile crosses the axis. Keep it on one side of the centerline." | ޕްރޮފައިލް އެކްސިސްގެ ދެފަރާތުގައި | ޕްރޮފައިލްގެ ނިސްފު އަލުން ޑްރޯ ކުރޭ |
| "Put sketch points where the holes go (Point tool), then make the hole." | ސްކެޗްގައި ފަސް ޕޮއިންޓް ނެތް | {{key:P}} އިން ޕޮއިންޓް އިތުރު ކުރޭ |
| "The counterbore must be wider than the hole." | Counterbore ⌀ ޑައަމީޓަރަށް ވުރެ ބޮޑު ނޫން | Counterbore ފުޅާ ކުރޭ |
| "The counterbore must be shallower than the hole." | Blind hole ވުރެ Counterbore ފަސް ޖަހާފައި | Shallower ކޮށް، ނުވަތަ ހޯލް ގަދަކޮށް |
| "Choose the features to copy." | Pattern ނުވަތަ mirror ނުގާ ޓިކް ކުރެވިފައި ނެތް | Features to copy ގެ ދަށުން ފީޗަރެއް ޓިކް ކުރޭ |
| "Extrude2 has no solid to copy." | ކޮޕީ ކުރާ ފީޗަރު ފެއިލް ނުވަތަ ކުރިފައި ނެތް | އެ ފީޗަރު ރަނގަޅު ކުރޭ ނުވަތަ ފަސްކުރޭ |
| "Needs Sketch3, which is failing." | ބަރު ފީޗަރެއް ނުބިލްޑު | ނަން ކުރާ ފީޗަރު ރަނގަޅު ކުރޭ |
| "The face it sits on is gone (Extrude1 is not built)." | ސްކެޗްގެ ފަރާތް ނެތް | އެ ފީޗަރު ރަނގަޅު ކުރޭ، ނުވަތަ ސްކެޗް ޑިލީޓް ކޮށް އަލުން ސްކެޗް ކުރޭ |
| "Nothing is left of the part after this." | ކަނޑާލުމުން ހުރިހާ މުސާރާ ނެތް | ކަނޑާލުމުގެ ސައިޒް އަދި ދިމާ ބަލާ |
| "The solid kernel could not build this (…)." ނުވަތަ "The solid kernel could not combine this with the body." | ކާނަލް ޖިއޮމެޓްރީ ރިފިއުޒް | Undo ކުރޭ، ނުވަތަ ސައިޒް ކުޑަކޮށް ބަދަލު ކުރޭ؛ ރުއިނުވެ ޓަޗްކުރާ ފަރާތް މެހައްޔަށް ފެންނާނެ |
| "Sweep: not built yet. It needs an exact kernel, which this version of PartCraft does not have." (Loft، Rib އާއި އެހެން) | ކުރިން ބިލްޑް ކުރެވުނު ފީޗަރު، ކާނަލް ހަދާ ގޮތަށް ނުވާ. ހިސްޓަރީގައި ހުރި، ބޭނުންކުރެވެ | Suppress ނުވަތަ ފޮހެލާ؛ [What is not built yet](topic:not-built-yet) ބަލާ |
| "A 5 mm round does not fit here (…)." / "A 2 mm chamfer …" | ސައިޒް ފޭހު ކައިރީ ވަރަށް ބޮޑު، ނުވަތަ ކޯނަރ ބްލެންޑް ނުކުރެވޭ | ކުޑަ ސައިޒް، ނުވަތަ ފީޗަރަކަށް ކަނޑު ކުޑަ |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (Chamfer ވެސް) | ޚިޔާރުކުރި ކަނޑު ރައުންޑް، ބުރަ ހޯލްގެ ކަނޑު ފަދަ، ނުވަތަ ކާވު ފޭހެއް މަތީގައި | {{ui:Pick edges}} ގައި އޭ ފޮހެލާ؛ ނުވަތަ ސްކެޗްގައި އެ ކޯނަރ ރައުންޑް ނުވަތަ ބެވެލް ކުރޭ |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | **Variable radius** ޓިކް ކޮށްފައި | ޓިކް ނުކުރޭ، އެއް ރޭޑިއަސް ދޭ |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠، އިންޒާރެއް) | ޚިޔާރުކުރި ކަނޑުތައް ކޯނަރެއްގައި ކުރިމަތިލާ؛ ރައުންޑްތައް އެތަނުގައި ކްރީސްވެ ދުވާލާ | ކުރެވޭ ކަމެއް ނޫން: ޕާޓް ބިލްޑް ވެއްޖެ. ކްރީސް އަގުހުރި ނަމަ ޙަތަރު ކަނޑުތައް ފިލެޓް ކުރޭ |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | ކުރީ ބަދަލެއް ކަނޑު ނައްތާލި | {{ui:Pick edges}}، ރަތް ކަނޑު ފޮހެލާ، އާ ކަނޑު ހޮވާ |
| "Pick the edges in the view, then add them." | Fillet ނުވަތަ chamfer އަށް ކަނޑު ނެތް | {{ui:Pick edges}} |
| "Pick the faces to remove (open), then shell." | Shell ގައި ހުޅުވާ ފޭހު ނެތް | {{ui:Pick faces}} |
| "The shell could not be made with this thickness (…)." | ފާރު ޕާޓުގެ ކުޑަ ބައެއް ނުވަތަ ފިލެޓް ރޭޑިއަސް ވުރެ ބޮޑު | ފާރު ކުޑަކުރޭ، ނުވަތަ ފިލެޓް ބޮޑުކުރޭ |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | ހުޅުވާ ފޭހު ކާވު | {{ui:Pick faces}} ގައި އޭ ފޮހެލާ؛ ފްލެޓު ފޭހުތައް ހުޅުވާ |
| "Draft: in this version flat faces only (the mesh kernel builds it)." | ޑްރާފްޓް ކުރާ ފޭހު ސިލިންޑަރ، ކޯން، ނުވަތަ ފްރީފޯމް | ފޮހެލާ؛ ފްލެޓު ފޭހުތައް ޑްރާފްޓް ކުރޭ |
| "A face it opens is gone (…)." | ކުރީ ބަދަލެއް ފޭހު ނައްތާލި | {{ui:Pick faces}} އަލުން |
| "Fillet1 changes the body's edges or walls; it cannot be copied. …" | Pattern ނުވަތަ mirror ފިލެޓް، ޗޭމްފަރ، ނުވަތަ ޝެލް ކޮޕީ ކުރޭ | ޓިކް ނުކުރޭ؛ ކަނޑުތަކުން pattern ކުރޭ، ފަހުން ފިލެޓް ކުރޭ |
| "It sits on a face only an exact kernel can find: not built yet in this version." | ނުނުގައިފާ ފޭހެއް މެޝް ކާނަލްން ހޯދިދާނެ ނެތް، ކުރީ ބިލްޑުން | ބޭސް ޕްލޭނެއް ނުވަތަ އެކްސްޓްރޫޑު ފްލެޓް ފޭހެއް މަތީގައި ސްކެޗް ކުރޭ، ޑައިމެންޝަންސްންދެން ފެތުރާ |
| "It uses a face or edge of the solid, which only an exact kernel can find: not built yet in this version." | ރެފަރެންސް ޕްލޭން، އެކްސިސް ނުވަތަ ޕޮއިންޓް ސޮލިޑުގެ ފޭހު ނުވަތަ ކަނޑެއް މަތީގައި | ބޭސް ޕްލޭންތަކުން، ސްކެޗް ޕޮއިންޓްތަކުން ނުވަތަ ކޯޑިނޭޓުންތަކުން ހަދާ |
| "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." / "A taper: not built yet (it needs an exact kernel)." | އެންޑް ކޮންޑިޝަން ނުވަތަ ޓޭޕަރ އެކްސެކްޓް ކާނަލް ބިލްޑް ކުރޭ | Blind ނުވަތަ Mid-plane ދިގުމިން ބޭނުން ކުރޭ؛ Taper 0 ގައި ހުރި |

## ޕިކިން މައްސަލަތައް

- "That face is curved. Pick a flat face or a plane to sketch on." ސްކެޗް ފްލެޓް ފޭހެއް ބޭނުންވޭ. ބޭސް ޕްލޭނަކަށް ސްކެޗް ކޮށް، ސްކެޗް ޑައިމެންޝަންތަކުން ހަދާ.
- ފޭހެއް "Fixed where picked" ކިޔާ: އެ ސްކެޗް ކަނޑަކުން ހަދާފައި ނޫން (މިސާލަކަށް pattern ކޮޕީގެ ފޭހެއް)، އެހެންކަމުން އޭގައި ސްކެޗް ޕާޓް ބަދަލުވާއިރު ހިނގާ ކަމުގައި.
- ކަނޑުތައް ހޮވަން ގިނަ ވަރުން ކަތިވޭ: ޒޫމް ކުރޭ. ކަނޑު ފޭހަށްވުރެ ކޮންމެ ފަހަރު ގެންދޭ.

## ފައިލް މައްސަލަތައް

| މެސެޖް | ހައްލު |
|---|---|
| 'PartCraft opens its own .partcraft.json files, exports from the CadCraft macro for SolidWorks (.cadcraft-sw.json) and STEP files. "bracket.igs" is none of these.' | ރުއިނުވޭ ފައިލްތަކަށް ބަލާ (އަދި STL، OBJ އަދި 3MF މެޝްތަކާއި `.3dm` ފައިލްތައް) |
| '"part.stp" is not a STEP file (it does not start with ISO-10303-21).' | ފައިލް STEP ޓެކްސްޓް ނޫން |
| "That STEP file is too big (over 60 MB) to import here." | މީހަކުން ސޯސްގައި ސިމްޕްލިފައި ކުރޭ |
| "That file is too big to be a PartCraft part." ތިބާގެ ރައްކާކުރެވުނު ޕާޓަކަށް | ކުރީ ބިލްޑަކުން ބޮޑު STEP ސޮލިޑް ޕާޓް ފައިލް 50 MB އަށް ވުރެ ބޮޑުކުރެއް. އެ ކޮޕީ ނެތި ކުރީ ކޮޕީ ބޭނުން ކުރޭ |
| "That file is too big to be a PartCraft part." | ފައިލް 50 MB އަށް ވުރެ ބޮޑު؛ އެއީ PartCraft ފައިލެއް ނޫން |
| "This is not a PartCraft file (it is not JSON)." / "This is not a PartCraft file." | ފައިލް ފަސްކޮށް ނުވަތަ އެހެން ޕްރޮގްރާމެއްގެ |
| "This file was saved by a newer PartCraft (file version …); this one reads version …" | އާ PartCraft ގައި ހުޅުވާ |
| "Extrude2: the depth is bad." (ނުވަތަ އެހެން އަގެއް) | ފައިލް އަތުން އެޑިޓް ކުރެވުނު ނުވަތަ ފަސްކޮށް. ކުރީ ކޮޕީ ބޭނުން ކުރޭ |
| އެސެމްބްލީގައި އިންޑް "Part1.partcraft.json has no solid to insert." | ޕާޓް ފައިލް ސޮލިޑެއް ނެތް. ހުޅުވާ، ސޮލިޑް ހަދާ، ރައްކާ ކޮށް، އަލުން އިންސާރޓް ކުރޭ |

**ތިބާ ރައްކާކުރި ފައިލް ކޮތަން ނުފެނޭ.** ރައްކާކުރުން ޑައުންލޯޑެއް: ބްރައުޒަރުގެ ޑައުންލޯޑްސް ފޯލްޑަރ ނުވަތަ ބްރައުޒަރ ޓޫލްބާރުން ޑައުންލޯޑްސް ލިސްޓު ހުޅުވާ. [Where your files go](common:your-files) ބަލާ.

**ޕާޓް ހުޅުވީ އެސެމްބްލީ އަދި ސްކްރީނުގައި ހުރި.** ޕާޓް އެސެމްބްލީގެ ފަހަތުން ލޯޑް ވެއެވެ. {{ui:Close}} ހޮވާ އެސެމްބްލީ ބަންދު ކޮށް ޕާޓް ފެނޭ. ޕާޓް ފައިލް ހުޅުވުމުގެ ކުރިން އެސެމްބްލީ ބަންދު ކުރޭ.

## ޑްރޯއިން މައްސަލަތައް

| މެސެޖް | ހައްލު |
|---|---|
| "Build a solid first, then make its drawing." | ފުރަތަމަ ޕާޓް ބިލްޑް ކުރޭ |
| "No room on the sheet for: detail. Make the detail smaller or drop a view." | **Detail radius** ނުވަތަ **Detail scale** ކުޑަކުރޭ، ނުވަތަ ސެކްޝަން ފޮހެލާ |
| "A detail is taken from the front, top, right or section view." | އެ ވިއުތަކުން އެއް ކްލިކް ކުރޭ |
| "Click on one of the views." | ކްލިކް ހުސް ކާޑުގައި |
| "Position needs at least one datum reference." އަދި އެހެން ފްރޭމް މެސެޖް | ޕެނަލް ގޮއްސާ ޑަޓަމް ސެޓް ކުރޭ، ނުވަތަ އެހެން ކެރެކްޓަރިސްޓިކް ޗޫސް ކުރޭ |
| "The drawing views could not be made: …" | އަގު ބަދަލު އަނބުރާ ކުރޭ. ދެމިއެވަނީ ނަމަ، ރައްކާ، ރީލޯޑް ކޮށް، ޕާޓް އަލުން ހުޅުވާ |

## އެސެމްބްލީ މައްސަލަތައް

| މެސެޖް | ހައްލު |
|---|---|
| "Build a solid first, then put it into an assembly." | ޕާޓަށް ސޮލިޑެއް ނެތް |
| "Insert a second part first (Add copy, Insert, or Edit › Duplicate)." | ޖޮއިންޓަށް ދެ ޕާޓް ބޭނުން |
| "Pick a face on a different part." | ޖޮއިންޓުގެ ދެ ފޭހު ދެ ޕާޓުގައި ވާންވާނެ |
| "That face is curved. Pick a flat face …" | ޖޮއިންޓްތައް ފްލެޓް ފޭހުން ފެށޭ. ދެން ހޯލް ނުވަތަ ރިވޯލްވް އެކްސިސް އަށް **Centre on** ބޭނުން ކުރޭ |
| "Bracket2 is not joined to the grounded part, so it stays where it was put." | ޕާޓަކަށް ޖޮއިންޓް އިތުރު ކުރޭ، ކަސް ވާ ޕާޓަކަށް |
| "Revolute3 closes a loop that cannot close: it is off by 2.000 mm. Check the faces, offsets and limits of the loop's joints." | ޕާޓްތައް އެކަނި ނުވާ: ދިގުމިން، ޖޮއިންޓް ބޭނުން ކުރާ ފޭހުތައް، އޮފްސެޓްތައް (ފޭހުން ފޭހު ސްޓޭކް ޕާޓްތައް ފަހަތަށް އެއްވަރު ވާންވާނެ) އަދި ލިމިޓްސް ބަލާ؛ ނުވަތަ ލޫޕުގެ އެއް ޖޮއިންޓް ފޮހެލާ |
| "The face this joint uses is gone from Bracket." / "The axis this joint uses is gone from Bracket." | ޕާޓް އެޑިޓް ކުރެވުނު. ޖޮއިންޓް ފޮހެލާ އަދި އަލުން ހަދާ |
| "The axis runs along the face, so it cannot set the joint's centre." | ފޭހު ކުރިމަތީ ހަދާ އެކްސިސް ހޮވާ، ނުވަތަ "The face's own origin" |
| "An assembly keeps at least one part. Close it instead." | {{ui:Close}} ބޭނުން ކުރޭ |

**ޕާޓްތައް ޖޮއިން ވެފައި ނަމަވެސް ރަނގަޅު ނޫން ތަނެއްގައި.** ޖޮއިންޓުގެ ދެފަރާތަށް **Centre on** ހިންގުން ހޯލް ނުވަތަ ރިވޯލްވް އެކްސިސް ހިއްސާ ކުރޭ، ދެން **Angle (°)** އަދި **Offset (mm)** ހިނގައި ސެޓް ކުރޭ.

## ސުސްތު ވޭ

- މޯޑެލްކުރާ ވަގުތު **Curves** ނޯމަލް ނުވަތަ ކޯޒް ސެޓް ކުރޭ؛ އެކްސްޕޯޓް ކުރުމުގެ ކުރިން ފައިން ސެޓް ކުރޭ.
- ބޮޑު pattern ގިނަތައް (ސަތޭކަ ކޮޕީތައް) ހުރި ނަމަ، ބަދަލެއް ކުރިމަތީ ގައި ހަދާ. އެހެން ފީޗަރުތަކަށް ކަންތައް ކުރާއިރު pattern ސަޕްރެސް ކުރޭ.
- Clash އަދި motion ބަލާ ކަމުން ހުރިހާ ޕާޓް ޖޯޑު ބެލޭ؛ ބޮޑު އެސެމްބްލީތައް ގިނަ ވަގުތު ނަގާ.
- އެހެން ބޮޑު ޓެބްތައް ބަންދު ކުރޭ. PartCraft ކޮމްޕިއުޓަރގެ ޕްރޮސެސަރ އަދި ގްރާފިކްސް މަތީގައި ހިނގަނީ.

## އަދި ނޫސް ހިތާމަ

ފުރަތަމަ ފައިލް ރައްކާކުރޭ ({{key:Mod+S}}), ދެން ޕޭޖް ރީލޯޑް ކޮށް އަލުން ހުޅުވާ. ފީޗަރެއް އަދިވެސް ފެއިލް ވެއްޖެ ނަމަ، އޭ ޚިޔާރު ކޮށް، މެސެޖް ކިޔަވާ، އަދި {{key:Mod+Z}} ތިރީގައި ތަކުރާ ފަހު ރަނގަޅު ހާލަތަށް ދާ.
