---
title: Sebenzisa i-PartCraft nomsizi we-AI
summary: Vumela umsizi wakho we-AI noma isikripthi sakho sisebenze nengxenye evulekile: sifunde izakhiwo, izimingcele kanye nobunzima bayo, siguqule imingcele bese siyakha kabusha, siqhube isikripthi, sithumele futhi sigcine. Icimile kuze kube yilapho uyivula.
keywords: ai, umsizi, ummeleli, mcp, model context protocol, isikripthi, ukuzenzekela, imingcele, izakhiwo zobunzima, stl, step, 3mf, izimvume, ukunqamula, umsebenzi, amafolda
from: e66d3470
---

## Okuzofunda

Indlela yokuvumela umsizi we-AI (noma isikripthi osibhalile) ukuthi abheke ingxenye oyivulile, ashintshe imingcele yayo, aqhube isikripthi bese eyithumela, nokuthi unquma kanjani okungathintwa yiye.

I-PartCraft **ayinayo i-AI yayo** futhi ayithumeli lutho noma kanjani. Wena uletha umsizi: noma yiluphi uhlelo oluxhasa i-Model Context Protocol (MCP). I-PartCraft inikeza kuphela amathuluzi, futhi wena ukhetha ayiphi.

## Yivule

1. Vula {{ui:Izilungiselelo}} (igiya ku-app bar, noma {{key:Mod+,}}) bese uya kuthebhu ye-{{ui:PartCraft}}.
2. Ngaphansi kwe-{{ui:Abasizi}}, thika **Vumela abasizi be-AI nezikripthi basebenzise i-PartCraft**. Icimile kuze kube yilapho uyithikile.
3. Khetha okungenziwa yiyo. **Funda** ithikiwe ekuqaleni; thika ezinye kuphela uma uzidinga.
4. Ukuze uvumele ukuthi ithumele futhi igcine ku-folda, khetha {{ui:Engeza ifolda…}} ngaphansi kwe-**Amafolda angasetshenziswa** bese ukhetha ifolda kwidayalogi ye-Studio.

Abasizi baxhuma nge-**CadCraft Studio** kukhompyutha yakho: i-Studio ibonisa ikheli nethokheni okufanele uyinamathisele kumsizi. Ithebhu yesiphequluli ayikwazi ukuvula uxhumo kumsizi.

## Okungacelwa umsizi

| Ithuluzi | Imvume | Okwenzayo |
|---|---|---|
| `part_describe`, `features_list` | Funda | Izakhiwo ngokulandelana, nokuthi yiziphi ezakhiwe nezehlulekile, impahla, ivolumu nosayizi wesolidi |
| `params_list` | Funda | Imingcele kanye nazo zonke izinombolo isibalo esingazilawula, nezinani zazo |
| `mass_properties` | Funda | Ivolumu, indawo, isikhungo sobunzima, i-inertia ezungeze lona; ubunzima uma ingxenye inempahla |
| `param_set` | Hlela | Isetha ipharamitha noma inombolo yesakhiwo bese yakha kabusha. Isinyathelo esisodwa osingahlehlisa |
| `script_run` | Hlela | Iqhuba isikripthi se-CraftScript, Lua noma Python njengendlela indawo yokusebenza ye-{{ui:Isikripthi}} eyenza ngayo: ivaliwe, ayinamafayela noma inethiwekhi. Ingxenye ayishintshi |
| `part_export` | Thumela | STL, 3MF, STEP noma OpenUSD (.usdz, .usda, .usdc), njengoba zibhalwa ku-{{ui:Ifayela}} › {{ui:Thumela}} |
| `link_push` | Hlela | Ibuyekeza imodeli exhunywe kwenye uhlelo (bona [Gcina imodeli ye-.3dm iphila](topic:live-3dm-link)) |
| `link_status` | Funda | Itshela ukuthi imodeli exhunyiwe isekhona yini nokuthi yabuyekezwa ngokugcina nini |
| `part_save` | Londoloza | {{ui:Londoloza}} yePartCraft |
| `illustrate_export` | Thumela | Umhlahlandlela ovela endaweni yokusebenza ye-{{ui:Illustrate}} njenge-PDF noma SVG yemigqa yemibono yawo, njengefayela le-3D elisebenzisanayo, noma imiyalelo yawo njenge-PDF noma ikhasi lewebhu, njengoba zibhalwa yizimenyu {{ui:Thumela}} neMiyalelo zendawo yokusebenza ([Imihlahlandlela](topic:illustrate)) |

:::note
Lolu hlobo lusebenzisa i-mesh kernel: ivolumu ivela ezinxantathwini (incane kancane kunesolidi yangempela enamajika), futhi i-STEP ibhalwa ibhikiwe, ngezinxantathu esikhundleni sezindawo ezinembile.
:::

## Usahlala ulawula

- **Yonke inguquko isinyathelo esisodwa sokuhlehlisa**, esimakwe ngomsizi, isibonelo "Umsizi: setha l = 45". Cindezela {{key:Mod+Z}} ukuyihlehlisa.
- **Uyazi lapho kuxhunyiwe umsizi.** Inkinobho ku-app bar imbiza umsizi lapho exhunyiwe. Yicindezele ukuze ubone okungenziwa yiyo, noma ukuze **uyinqamule**.
- **Umsebenzi.** {{ui:Izilungiselelo}} › {{ui:PartCraft}} › {{ui:Abasizi}} › {{ui:Umsebenzi}} ibala konke ukubizwa; {{ui:Gcina irekhodi}} igcina ikhophi yakho.
- **Amafolda.** Ifunda futhi ibhala amafayela kuphela emafolda oyengezile; {{ui:Susa}} ikhipha ifolda ngokushesha.

## Ngaphandle kokuvula i-PartCraft

Iseva lefayela le-CadCraft yabasizi (`npx @getcadcraft/mcp`) kanye nomugqa womyalo we-`cadcraft` avula izingxenye ze-`.partcraft.json` ngekhodi ye-PartCraft yayo nge-mesh kernel, ngaphandle kwewindi: amathuluzi afanayo okufunda, ukusetha imingcele, izikripthi ze-CraftScript, ukuthumela (i-OpenUSD nayo) nokugcina. `cadcraft convert bracket.partcraft.json bracket.stl` yakha ingxenye bese iyibhala emugqeni womyalo. Nemihlahlandlela (`.partcraft-manual.json`) ithunyelwa nayo lapho: `illustrate_export`, noma `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (engeza `--instructions` imiyalelo).

## Uma okuthile kungasebenzi

- **"idinga imvume yokuhlela":** thika **Hlela** ngaphansi kwe-{{ui:Abasizi}}, bese ucela futhi.
- **"ilawulwa yisibalo":** le nombolo ilandela ipharamitha; cela umsizi usethe ipharamitha esikhundleni salokho.
- **Inguquko yaso ibingalungile:** cindezela {{key:Mod+Z}}.

## Bona futhi

- [Iresiphi zabasizi be-AI](common:assistants-recipes): izibonelo ezisebenzayo, ngayinye nethuluzi layo elibizwayo.
