---
title: Data nje: karatasi ya data, nyanja na mesh
summary: Hifadhi karatasi ya data ya mwili uliozalishwa kama JSON au PDF, nyanja yake kama picha ya VTK (.vti) au seti ya kiwango ya OpenVDB (.vdb), na uso wake kama mesh ya VTK (.vtu) kwa ParaView na zana nyingine za uchambuzi, na mesh kama 3MF yenye data ya kizalishaji. Sehemu ile ile daima huandika faili zile zile.
keywords: hamisha, karatasi ya data, json, pdf, vti, vtu, vtk, paraview, 3mf, nyanja, umbali uliotiwa saini, fea, cfd, metadata, openvdb
from: 817b4579
---

Katika eneo la kazi la {{ui:Mhandisi}}, au katika sifa za mwili uliozalishwa, fungua **Data nje**:

| Kitufe | Faili | Kwa ajili ya |
|---|---|---|
| Karatasi ya data (JSON) | `.json` | Kila ingizo, kila namba pamoja na kitengo na chanzo chake, ukaguzi, alama ya kidijitali ya mesh. Imepangwa, bila muda: sehemu ile ile hutoa faili lile lile. |
| Karatasi ya data (PDF) | `.pdf` | Kitu kile kile karatasini, katika kurasa nyingi kadiri inavyohitaji. |
| Nyanja (.vti) | `.vti` | Sehemu kama umbali uliotiwa saini (hasi ndani) na kinyago cha ndani kwenye gridi ya nukta: faili la picha la VTK kwa ParaView na zana zilizojengwa juu ya VTK. Hujengwa kutoka uso wa mwili kwa ukubwa wa voxel wa ingizo za kizalishaji, kwa hiyo huchukua muda, na mwili wenye pembetatu zaidi ya 400 000 ni mkubwa mno kwa ukurasa: hifadhi nyanja kutoka script badala yake (`field_bake`). |
| Seti ya kiwango (.vdb) | `.vdb` | Nyanja ile ile kama seti ya kiwango ya OpenVDB: mti mwepesi unaoweka tu ukanda mwembamba wa voxel kuzunguka uso, kwa zana zinazosoma OpenVDB (vionyeshi, uigaji na programu za 3D). Ukubwa wa voxel na vitengo ni vya kizalishaji (milimita), ukanda mwembamba ndio sehemu hai, ndani ni hasi. Hujengwa kutoka uso kama `.vti`, kwa kikomo kile kile cha pembetatu 400 000; faili litakalozidi GB 1.5 hukataliwa (tumia ukubwa mkubwa wa voxel). Faili ni OpenVDB muundo 224, bila kubanwa isipokuwa upakiaji wa thamani hai wa OpenVDB wenyewe, kwa hiyo msomaji yeyote wa OpenVDB anaufungua. |
| Uso (.vtu) | `.vtu` | Pembetatu, pamoja na eneo na kawaida ya kila moja. |
| 3MF yenye data ya kizalishaji | `.3mf` | Mesh kwa milimita kwa kikata-tabaka, pamoja na kizalishaji, ingizo zake na (kwa kimiani chenye daraja) upeo wa ukuta wake kama metadata kwenye faili. |

Hakuna kitu kwenye faili hizi kinachotoka kwenye saa au kompyuta, kwa hiyo unaweza kulinganisha faili mbili baiti kwa baiti: baiti iliyobadilika maana yake ni sehemu iliyobadilika.

## Bado hakijajengwa

- `.vti` au `.vdb` ya nyanja kwa ukubwa wa voxel usio wa kizalishaji chenyewe.
- Kusoma faili za `.vdb` ndani (kuandika pekee ndicho kilichojengwa).
