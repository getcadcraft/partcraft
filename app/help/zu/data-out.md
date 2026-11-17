---
title: Ukuphuma kwedatha: ishidi ledatha, izinsimu namameshi
summary: Gcina ishidi ledatha lomzimba owenziwe njenge-JSON noma i-PDF, insimu yawo njengesithombe se-VTK (.vti) noma isethi lezinga le-OpenVDB (.vdb), nobuso bawo njengemesh ye-VTK (.vtu) ye-ParaView namanye amathuluzi okuhlaziya, nemesh njenge-3MF equkethe idatha yomenzi. Ingxenye efanayo ihlala ibhala amafayela afanayo.
keywords: ukuthumela, ishidi ledatha, json, pdf, vti, vtu, vtk, paraview, 3mf, insimu, ukuphambuka okusayiniwe, fea, cfd, metadata, openvdb
from: 817b4579
---

Ku-workspace ye-{{ui:Unjiniyela}}, noma ezakhiweni zomzimba oyenziwe, vula **Ukuphuma kwedatha**:

| Inkinobho | Ifayela | Ukwenzela |
|---|---|---|
| Ishidi ledatha (JSON) | `.json` | Yonke okufakwayo, yonke inombolo nesayithi nomthombo wayo, ukuhlolwa, nesigxivizo se-mesh. Ihlelwe, azikho izikhathi: ingxenye efanayo inikeza ifayela elifanayo. |
| Ishidi ledatha (PDF) | `.pdf` | Okufanayo ephepheni, kumakhasi anamaningi njengoba kudingeka. |
| Insimu (.vti) | `.vti` | Ingxenye njengokuphambuka okusayiniwe (inegethivu ngaphakathi) nemaski yangaphakathi ngegridi lamaphoyinti: ifayela lesithombe se-VTK ye-ParaView namathuluzi akhelwe ku-VTK. Yakhiwa kusuka ebusweni bomzimba ngosayizi we-voxel wokufakwa komenzi, ngakho ithatha isikhathi, nomzimba ongaphezu kuka-400 000 wama-triangle mkhulu kakhulu ekhasini: gcina insimu kusuka ku-script (`field_bake`) esikhundleni salokho. |
| Isethi lezinga (.vdb) | `.vdb` | Insimu efanayo njengesethi lezinga le-OpenVDB: isihlahla esingasongiwe esigcina kuphela ibhendi elincane lama-voxel angqongqoze ubuso, yamathuluzi afunda i-OpenVDB (abenzi bezithombe, ukulingisa nezinhlelo ze-3D). Usayizi we-voxel namayunithi ngabomenzi (amamilimitha), ibhendi elincane liyingxenye esebenzayo, ngaphakathi kunegethivu. Yakhiwa ebusweni njenge-`.vti`, nomkhawulo ofanayo wama-400 000 triangle; ifayela elingaphezu kuka-1.5 GB liyenqatshelwa (sebenzisa usayizi omkhulu we-voxel). Ifayela liyifomethi ye-OpenVDB 224, alicindezelwe ngaphandle kokupakishwa kwamanani asebenzayo ye-OpenVDB ngokwayo, ngakho noma yisiphi isifundi se-OpenVDB siyavula. |
| Ubuso (.vtu) | `.vtu` | Ama-triangle, nendawo nokujwayela kwawo ngayinye. |
| 3MF enedatha yomenzi | `.3mf` | I-mesh ngamamilimitha ye-slicer, nomenzi, okufakwayo kwawo nobubanzi bodonga lwawo (ngelathisi enezinga) njenge-metadata kufayela. |

Akukho okuvela ewashini noma kumshini kulezi zifayela, ngakho ungaqhathanisa amafayela amabili ngebhayithi ngebhayithi: ibhayithi eshintshiwe isho ingxenye eshintshiwe.

## Akukakhiwa

- I-`.vti` noma i-`.vdb` yensimu ngosayizi we-voxel ohlukile kolomenzi.
- Ukufunda amafayela `.vdb` ngaphakathi (kwakhiwa ukubhala kuphela).
