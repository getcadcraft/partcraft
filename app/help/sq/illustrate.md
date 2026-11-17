---
title: Nis një manual në Ilustro
summary: Hapësira e punës Ilustro bën manuale nga projekti yt: pamje, vizatime të çmontuara me balona dhe listë pjesësh, udhëzime hap pas hapi, animacione dhe një skedar 3D që një klient mund ta hapë pa CAD. Një manual është skedar i vetë.
keywords: ilustro, manual, ilustrim teknik, dokumentim, pamje e çmontuar, listë pjesësh, udhëzime, partcraft-manual
from: e447e0ab
---

**Ilustro** është hapësira e punës për dokumentet që njerëzit kanë nevojë rreth një projekti: pamje të çmontuara me balona dhe listë pjesësh, ilustrime me vija për manuale, udhëzime hap pas hapi, animacione dhe një skedar 3D që një klient mund ta hapë pa CAD. Zgjidh {{ui:Ilustro}} te ndërruesi {{ui:Hapësira e punës}} në fillim të shiritit të veglave.

Një **manual** është skedar i vetë (`<name>.partcraft-manual.json`). Ai mban një kopje të formës së çdo pjese, pemën e produktit dhe vetitë e pjesëve, dhe një lidhje me vendin ku u morën, kështu që mund të punosh në manual ndërkohë që projekti vazhdon. Kur projekti ndryshon, [Përditëso nga projekti](topic:illustrate-update) sjell ndryshimet.

## Nis një

Kliko {{ui:E re}} te grupi {{ui:Manuali}}, pastaj:

- {{ui:Nga pjesa e hapur}}: pjesa e hapur në Projektim.
- {{ui:Nga montimi i hapur}}: shfaqet në vend të kësaj kur është hapur një montim; pjesët e tij, vendet e tyre, numrat e pjesëve, materialet dhe pamjet e çmontuara vijnë me to.
- {{ui:Nga një skedar montimi…}}: një `.partcraft-asm.json` i ruajtur; PartCraft ndërton së pari pjesët e tij.
- {{ui:Nga një skedar tjetër…}}: glTF (.glb, .gltf), OBJ, STL ose 3MF. Pema dhe emrat e skedarit mbahen, dhe kopjet e një pjese (e njëjta formë e vendosur dy herë) bëhen një pjesë me sasi. Skedarët STL dhe OBJ nuk e thonë njësinë e tyre, kështu që të pyet. Skedarët STL lexohen me Z lart; glTF dhe 3MF e thonë vetë.

Ndërsa një manual është i hapur, Ilustro shfaq kopjen e vetë manualit të pjesëve; pjesa ose montimi i hapur në Projektim fshihet deri sa të kthehesh në Projektim.

## Ruaj dhe hap

{{ui:Ruaj}} te grupi {{ui:Manuali}} (ose {{key:Mod+S}}) ruan manualin; {{ui:Hap}} hap një të tillë. Çdo ndryshim në Ilustro është një hap në historinë e vetë manualit: {{ui:Zhbëj}} dhe {{ui:Ribëj}} veprojnë mbi manualin ndërkohë që Ilustro është e hapur.

## Nuk është ndërtuar ende

- Skedarët STEP nuk hapen ende te {{ui:Nga një skedar tjetër…}}. Hape STEP-in në Projektim (hyn si trup i ngurtë: shih [Hap një skedar STEP](topic:import-step)) dhe nis manualin {{ui:Nga pjesa e hapur}}, ose ruaje si glTF, 3MF, OBJ ose STL.
- ModelCraft dhe BimCraft nuk mund ta japin ende një model direkt në Ilustro: ruaje si glTF (.glb) dhe përdor {{ui:Nga një skedar tjetër…}}.

Tjetra: [Pamjet dhe dukjet](topic:illustrate-views).
