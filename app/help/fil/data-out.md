---
title: Data out: data sheet, field at mesh
summary: I-save ang data sheet ng isang generated body bilang JSON o PDF, ang field nito bilang VTK image (.vti) o OpenVDB level set (.vdb), at ang surface nito bilang VTK mesh (.vtu) para sa ParaView at iba pang analysis tool, at ang mesh bilang 3MF na may dalang data ng generator. Ang parehong part ay laging nagsusulat ng parehong mga file.
keywords: export, data sheet, json, pdf, vti, vtu, vtk, paraview, 3mf, field, signed distance, fea, cfd, metadata, openvdb
from: 817b4579
---

Sa {{ui:Engineer}} workspace, o sa properties ng isang Generated body, buksan ang **Data out**:

| Button | File | Para sa |
|---|---|---|
| Data sheet (JSON) | `.json` | Bawat input, bawat numero na may unit at source nito, ang mga check, ang mesh fingerprint. Naayos ang pagkakasunod-sunod, walang oras: ang parehong part ay nagbibigay ng parehong file. |
| Data sheet (PDF) | `.pdf` | Pareho sa papel, sa kasing dami ng pahinang kailangan. |
| Field (.vti) | `.vti` | Ang part bilang signed distance (negatibo sa loob) at isang inside mask sa isang grid ng mga point: isang VTK image file para sa ParaView at mga tool na gawa sa VTK. Ginagawa ito mula sa surface ng body sa voxel size ng mga input ng generator, kaya tumatagal ito nang kaunti, at ang body na may higit sa 400 000 triangle ay masyadong malaki para sa page: i-save ang field mula sa script (`field_bake`) sa halip. |
| Level set (.vdb) | `.vdb` | Ang parehong field bilang OpenVDB level set: isang sparse tree na nagtatago lamang ng manipis na banda ng voxel sa paligid ng surface, para sa mga tool na nagbabasa ng OpenVDB (renderer, simulation at 3D program). Ang voxel size at units ay sa generator (millimetres), ang narrow band ang active na bahagi, at ang loob ay negatibo. Ginagawa ito mula sa surface gaya ng `.vti`, na may parehong limit na 400 000 triangle; ang file na lalampas sa 1.5 GB ay tinatanggihan (gumamit ng mas malaking voxel size). Ang file ay OpenVDB format 224, hindi naka-compress maliban sa sariling active-value packing ng OpenVDB, kaya bubuksan ito ng anumang OpenVDB reader. |
| Surface (.vtu) | `.vtu` | Ang mga triangle, kasama ang area at normal ng bawat isa. |
| 3MF na may generator data | `.3mf` | Ang mesh sa millimetres para sa slicer, kasama ang generator, ang mga input nito at (para sa graded lattice) ang saklaw ng pader nito bilang metadata sa file. |

Walang bahagi ng mga file na ito na galing sa orasan o sa makina, kaya maaari mong ikumpara ang dalawang file byte by byte: ang nagbagong byte ay nangangahulugang nagbagong part.

## Hindi pa nagagawa

- Ang `.vti` o `.vdb` ng field sa voxel size na iba sa sariling voxel size ng generator.
- Pagbasa ng mga `.vdb` file (pagsulat lamang ang nagawa).
