---
title: Ekzekutimi nga një disk USB
summary: Ç'shkruajnë mjetet inxhinierike dhe ku, që CadCraft Studio të mund të funksionojë nga një stick USB ose nga çdo dosje, pa instalues dhe pa të drejta administratori: cilësimet, gjeneratorët, memoria e përkohshme dhe skedarët e pjesëve, dhe ç'mbetet në stick.
keywords: usb, portabël, pa instalues, administrator, admin, cilësimet, dosja e të dhënave, gjeneratorët, ku shkruhen skedarët, jashtë linje, privatësia, qasja te pritësi
from: 263efc79
---

Mjetet inxhinierike (gjeneratorët, biblioteka inxhinierike, kontrollet dhe skedarët e të dhënave) nuk kërkojnë **të drejta administratori** dhe **as instalues**. Ato shkruajnë vetëm atë që listohet këtu, dhe asgjë tjetër.

| Çfarë | Ku ruhet |
|---|---|
| Pjesët tuaja, me trupat e tyre të gjeneruar, fletët e të dhënave dhe kontrollet | Skedari i pjesës që ruani (`.partcraft.json`), aty ku e ruani. |
| Gjeneratorët që keni hapur nga skedarët | Në depozitën e vetë aplikacionit: depozita lokale e shfletuesit në një faqe web, dhe dosja `data` pranë programit në Studio portabël. Më së shumti 20. |
| Cilësimet (madhësitë e vokseleve që vendosni, fijet e zgjidhësit, paraqitja) | Në të njëjtën depozitë të aplikacionit. |
| Fletët e të dhënave, fushat, rrjetat | Vetëm aty ku i ruani: shkarkimi shkon atje ku zgjidhni ju. |

Mjetet nuk bëjnë **asnjë thirrje rrjeti të tyre**: gjeneratorët që dërgohen janë skedarë në dosjen e vetë aplikacionit; biblioteka dhe kontrollet ekzekutohen në kompjuterin tuaj, në një punëtor që nuk mund të arrijë rrjetin; dhe të dhënat inxhinierike (vetitë e ujit dhe ajrit, materialet) janë brenda aplikacionit. Një gjenerator që hapni nga një skedar lexohet në kompjuterin tuaj dhe nuk shkon askund.

## Zip-i portabël për Windows dhe Linux

Studio portabël për Windows mban cilësimet, memorien e përkohshme dhe shtojcat e saj në një dosje `data` pranë programit. AppImage i Linux-it i mban ato pranë vetes kur pranë saj ndodhet një skedar me emrin `portable`; pa atë skedar përdor dosjen tuaj home. Nuk ka formë portabël për Mac: sistemi nuk lejon që një aplikacion i shkarkuar të shkruajë pranë vetes. Shënimet portabël të vetë shell-it (ndihma `Studio`) listojnë ç'shkruan programi.

## Qasja te pritësi

Asgjë këtu nuk kërkon qasje te pritësi. Printerat, makinat seriale dhe pajisjet USB janë të ndara: ato pyesin kur një punë i nevojiten, një herë për çdo pajisje, dhe asgjë në gjeneratorët ose kontrollet nuk i prek.
