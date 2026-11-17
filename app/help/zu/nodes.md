---
title: Ama-node: akha imodeli ngokuxhuma
summary: Xhuma izinombolo zibe amaphoyinti, amaphoyinti zibe amajika, amajika zibe ubuso. Shintsha inombolo bese konke okulandelayo kuyakhiwa kabusha. Ngayinye i-node nayo ingumugqa we-CraftScript, futhi igrafu igcinwa efayelini.
keywords: ama-node, umhleli we-node, uhlelo olubonakalayo, parametric, igrafu, izintambo, amachweba, freeform, nurbs, loft, extrude, revolve, isongo, ijika, ubuso, uchungechunge, uhla, okungahleliwe, uhlu, script, craftscript, grasshopper
from: 3a4625de
---

**Umhleli we-Nodes** wakha ijometri ngokuxhuma amabhokisi ndawonye. Ibhokisi ngalinye (i-node) lenza umsebenzi omncane: lenza inombolo, iphoyinti, isongo, i-loft. Uxhumanisa umphumela womunye kokungenayo komunye, bese imodeli iyalandela uma ushintsha inombolo esiqalweni.

Vula kusuka ohlwini lwe-workspace: {{ui:Ama-node}}. Ivula iwindi lomhleli. Ingxenye esinegrafu isivele iyiboniswa uma uvula i-workspace. Kuyiwindi phezu kwe-3D view: hudula ibha yesihloko ukuze uyinyakazise, hudula ikhona ukuze uyilungise.

## Ukuxhuma

1. Khetha i-node ohlwini oluseceleni kwesobunxele (thayipha ebhokisini lokusesha ukuze uncishise, <kbd>Enter</kbd> yengeza okokuqala okufanayo). Iveza phakathi kwe-canvas.
2. Hudula kusuka kwiqhezu elijikelezayo **elikhiphayo** ngakwesokudla kwe-node eyodwa uye kwiqhezu elijikelezayo **elingenayo** ngakwesokunxele kwenye. Liba luhlaza uma lifanele, libe bomvu uma lingafaneli; beka isikhombi phezu kwalo ukuze ubone isizathu.
3. Ukungena okungaxhunyiwe kubonisa ibhokisi lenani elithayiphiwe. Thayipha inombolo bese ucindezela <kbd>Tab</kbd>: umphumela uyakhiwa kabusha.
4. Isiyingi esincane esisesihlokweni se-node yi-**eye** yayo. I-node enelihlo elivulekile idwetshwa ku-3D view: njengemigqa yamajika, ishadiwe ngobuso, namachashaza wamaphoyinti.

Hudula i-node ngebha yesihloko sayo. Hudula ingemuva ukuze uhambe, phendula ivili lemouse ukuze usondeze. <kbd>Delete</kbd> isusa i-node ekhethiwe. {{ui:Hlela}} ihlela ama-node ezikholomu, {{ui:Lingana}} iwalethe wonke ebonakalweni, {{ui:Hlehlisa}} kanye {{ui:Phinda wenze}} zihamba phakathi kokuhlelwa kwakho.

## Izinhlobo neziyunithi

Amachweba anohlobo: inombolo, yebo/cha, iphoyinti, ivekthafu, ijika, ubuso, imesh, isolid, noma "geometry" kunanoma yiliphi kulawa. Iphoyinti lingadlulisela kokungenayo kwevekthafu nakubuyela emuva. Izinombolo zinayunithi: **ubude** kumamilimitha, futhi **i-engeli** kumadigri. Ubude alungadlulisi kwi-engeli, futhi ubude ophindwe ubude (indawo) buyalaleka, ngakho intambo engalungile iyamiswa uma uyenza.

Iqhezu elisikwele liyi-**uhlu**. Uma uhlu lufika kokungenayo kwenani elilodwa, i-node isebenza kanye ngalinye lezinto zohlu, futhi umphumela wayo uba uhlu. Uhlu olufishane luphinda into yalo yokugcina. Isibonelo, i-**Uchungechunge** lobude be-**Hambisa** lenza isitaki samakhophi.

## Ama-solid njengama-node

Iqembu **Amasolid** lenza amavolumu avaliwe kusuka kuziphetho ezifanayo nephaneli ye-Ubuso: **Box solid**, **Cylinder solid** kanye **Sphere solid** (usayizi ku-mm), **Union**, **Subtract** kanye **Intersect** (isolid yesibili ithathwa kowokuqala; ukubekezelela kuyibanga isolid engine ongakwazi ukuphambuka ngalo kuziphetho eziqondile), **Fillet between faces** (izinhlangothi ngenombolo yazo ku-solid, u-1 kowokuqala; iradiyasi nalapho ingaphezu kuka-0, iradiyasi yokugcina), **Solid volume** (mm³) kanye **Solid to mesh** (ukuze ubone noma uyigcine). I-solid inohlobo lwayo lwechweba: iphoyinti noma inombolo akuxhunyiwa kokungenayo kwe-solid, futhi iqhezu lihlala libomvu. Ama-node we-Boolean ne-Fillet asebenzisa isolid engine yohlelo, elayishwa okokuqala lapho umhleli uvulwa.

## Amaphutha

I-node engakwazi ukwenza umsebenzi wayo ikhombisa ukuthi kungani ngaphansi kwegama layo, ngombala obomvu ("Iradiyasi kufanele ibe ngaphezu kwezero."), nama-node alandelayo ayalinda. Lo mlayezo ufana nenkinga ephaneli yeZinkinga, ngakho ungawuthola kulapho.

## Yonke i-node ingumugqa wescript

Cindezela {{ui:Isikripthi}} ukuze ubone igrafu njenge-CraftScript: umugqa owodwa ngayinye i-node, njengo `n3 = nd_circle(n2, n1, [0 0 1]);`. Hlela umbhalo bese ucindezela {{ui:Yenza igrafu kulesi sikripthi}} ukuze uwubuyisele ube yigrafu. Imisebenzi efanayo ye-`nd_` isebenza nakuscript ye-CraftScript ku-PartCraft, ngakho igrafu ingasebenza, iphindwe noma ihlolwe khona. Izinombolo ezingahleliwe zihlala zithatha i-**seed**, ukuze igrafu efanayo inikeze umphumela ofanayo kuwo wonke amakhompyutha.

## Igcinwe nefayela

Igrafu igcinwa efayelini lengxenye (hhayi emlandweni, ngakho i-Hlehlisa kumhleli ingeyayo). Ama-node akha amajika, ubuso namamesh eceleni kwe-solid: awashintshi izici zengxenye.
