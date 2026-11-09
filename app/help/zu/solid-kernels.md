---
title: I-mesh kernel
summary: Lolu nguqulo lwe-PartCraft lwakha yonke ingxenye nge-mesh kernel esebenza esiphequluleni sakho. Lokho kusho ukuthini ngezindawo ezijikelezayo, ngamavolumu namafayela, ukuthi ungayazi kanjani ukuthi isebenza, nokuthi yiziphi izici ezilinda i-kernel eqondile.
keywords: kernel, mesh, manifold, exact, b-rep, faceted, amajika, opencascade, occt, fillet kudinga okuqondile, akukakhiwa, ngaphandle kwe-inthanethi, webassembly
from: 68d32d16
---

I-kernel yejiyomethri iyinjini eguqula umlando wakho ibe isolidi. Lolu nguqulo lwe-PartCraft lunayo: i-**mesh kernel** (manifold-3d). Isebenza kukhompyutha yakho njengohlelo oluncane lwe-WebAssembly futhi ilungele ngemuva nje kokuvulwa kwe-app. Akukho lutho mayelana nengxenye yakho olucashunwa noma yiluphi uhlangothi.

| | Mesh kernel |
|---|---|
| Izimo ezijikelezayo | Izinxantathu ezithe tshe. **Amajika** ephaneli yengxenye ibeka ukuthi kuhle kangakanani |
| Amavolumu namabanga | Esolidi elinobuso obuthe, lincane kancane ezingxenyeni ezijikelezayo |
| Amasketshi, ukukhipha, ukusika, ukujikeleza, imigodi, amaphethini, isibuko, izindiza zesisekelo | Yebo |
| Fillet ne-Chamfer | Emaphethelweni aqondile phakathi kwezindawo ezithe tshe; izindilinga ezihlangana zigqunyiwe |
| Shell ne-Draft | I-Shell ivula izindawo ezithe tshe (ubukhulu bodonga obunembile); i-Draft ithambisa izindawo ezithe tshe |
| Ukuthumela | I-STL, i-3MF, i-STEP (ngobuso), umdwebo we-PDF ne-DXF |
| Imibono yomdwebo | Idwetshwe kusuka ezinxantathwini, kubandakanya nemibono yesigaba |
| Ubuso nemiphetho | Ziqanjwe futhi ziyaziwa ngohlobo (ubuso obuthe, isilinda, ukhoni, ibhola, ithoyisi; oqondile, isongo), zithathwa emasketshini: izinhlobo ze-Simulation, zokuKhiqiza, Ukukhipha, Linganisa, ukukhetha nethebula lemigodi kuyazisebenzisa |

Ichip eseduze nesokudla sebha yesimo ithi **Kernel yemeshi** ngenkathi yakha ingxenye yakho.

## Okulindele i-kernel eqondile

I-kernel eqondile (B-rep) igcina izindilinga zangempela, izinsongo nezinkomba, namafillet abushelelezi kunoma yimaphi emaphethelweni, nama-sweep, ama-loft, izindawo, insimbi yeshidi, izimbambo, izidumbu eziningi, ukungenisa i-STEP nokuthumela i-STEP eqondile kwakhiwa kuyo. Izinguqulo zelabhoratri zangaphambili ze-PartCraft zisebenzise i-OpenCascade ngalokho. Ilayisense yayo (i-LGPL) ayihambisani nalokhu kukhishwa, lapho zonke izinhlelo zokusebenza ziyi-Apache-2.0 futhi zisebenzisa amalabhulali avunyelwe ngokulula kuphela, ngakho ayifakiwe. Akukho usuku lalokhu.

Kuze kube yilapho, lezo zici zithi **Akukakhiwa** uma uzikhethile: ibha yesimo inikeza isizathu, nama-tooltip ezinkinobho zazo aphela ngokuthi "akukakhiwa (kudinga i-kernel eqondile)". [Okungakakhiwa](topic:not-built-yet) kuhlu ngalinye lazo nokufanele wenze kunalokho.

Ingxenye eyenziwe ngazo kwi-build yangaphambili isavuleka. Lezo zici zihlala emlandweni zimakwe njengezingakakhiwa (hlola ukuze ubone isizathu), enye ingxenye iyakhiwa, nokulondoloza kuyazigcina zingashintshiwe.

## Ubuso obujikelezayo nesilungiselelo se-Amajika

I-mesh kernel idweba isongo njengepholigoni. **Amajika** ephaneli yengxenye ibeka ukuthi isongo eligcwele linezinhlangothi ezingakanani; izinhlangothi eziningi zibonakala zibushelelezi futhi zilinganiswa zisondele enanini langempela, kodwa zithatha isikhathi eside ukwakha. Ivolumu, izindawo nezinkomba ezivela ku-{{ui:Linganisa}} zesolidi enobuso: ngomgodi noma i-boss zincane kancane kunalezo zesimo esijikelezayo.

## Ku-inthanethi nangaphandle kwayo

I-mesh kernel iyingxenye yokulanda kwe-app ngokwayo. Ukusebenza ngaphandle koxhumo, londoloza i-PartCraft ukuze isetshenziswe ngaphandle kwe-inthanethi lapho usuku ku-inthanethi: khetha {{ui:Londoloza ngaphandle kwe-inthanethi}} ku-ibha ye-app bese ulinda kuze kuthi **Ilungele ukusebenza ngaphandle kwe-inthanethi**. Imininingwane: [Ukusebenza ngaphandle kwe-inthanethi](common:offline).
