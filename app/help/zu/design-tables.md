---
title: Ukucushwa namathebhula edizayini
summary: Gcina usayizi nezinguqulo eziningana zengxenye eyodwa njengokucushwa okuqanjiwe okugcinwe kufayela lengxenye, nezici ezivalwa noma ezivulwa kokunye ngakunye, shintshela phakathi kwazo ngokuchofoza kanye, zilethe noma uzikhiphe njengethebhula ledizayini le-CSV, noma uzakhe zonke ku-command line.
keywords: ithebhula ledizayini, ukucushwa, izinga, izinkulumo, umndeni wezingxenye, csv, ishidi lezibalo, izinguqulo, ithebhula elibusa, umndeni wengxenye, vimbela, suppressed, vala isici, izinketho, nganoma ngaphandle, configurator
from: 17249afb
---

I-**ukucushwa** ingusayizi owodwa wengxenye: isethi equmbile yamanani emingcele yayo. Ingxenye igcina ukucushwa kwayo kufayela layo, ngakho zihamba nayo. I-**ithebhula ledizayini** iyinto efanayo njengefayela le-CSV, umugqa ngamunye wokucushwa.

Ukucushwa kusetha **imingcele**, ngakho yengeza leyo kuqala (bheka [Qhuba ingxenye ngemingcele](topic:parameters)). Ukucushwa kugcina imingcele eyizinombolo evamile; imingcele eqagelwa kwezinye (njengo `area = w * d`) ilandela yodwa.

## Londoloza ukucushwa

1. Ethebhini le-{{ui:Imingcele}}, setha imingcele yosayizi owodwa wengxenye.
2. Ngaphansi kwe-**Ukucushwa**, thayipha igama (isibonelo `Enkulu`) bese ucindezela {{ui:Londoloza amanani wamanje}} noma {{key:Enter}}.

Ukucushwa okusha kumakwa **kuyasebenza**. Shintsha umngcele ngemva kwalokho futhi kuthi **kuyasebenza, kushintshiwe kusukela**, ukuze wazi ukuthi ingxenye ayisahambisani nakho.

## Shintsha, buyekeza, qamba kabusha, susa

- {{ui:Sebenzisa}} isetha imingcele ibe yiwo amanani alokho kucushwa futhi yakhe kabusha ingxenye.
- {{ui:Buyekeza}} igcina amanani wamanje kuleyo kucushwa.
- Ukuqamba kabusha okukodwa, thayipha igama elisha ebhokisini lawo bese ucindezela {{key:Enter}}.
- {{ui:Susa}} isusa ukucushwa. Imingcele igcina amanani ayo.

Okunye nakunye kulokhu yisinyathelo esisodwa: {{key:Mod+Z}} ibuyela emuva. Uma uqamba kabusha umngcele, konke ukucushwa kulandela igama elisha; uma ususa okukodwa, ikhishwa kukho.

## Vula noma uvale izici ekucushweni

Ukucushwa futhi kugcina ukuthi yiziphi izici ezivaliwe, ngakho ingxenye eyodwa ingaba nezinguqulo **ezinento** nezinguqulo **ezingenayo**: izimbobo zokufaka, i-chamfer, i-boss.

1. Vala isici: chofoza kumlando, bese {{ui:Vimbela}} ku-{{ui:Izakhiwo}}.
2. Gcina ukucushwa njengokujwayelekile, isibonelo `Akukho mgodi`. Umugqa waso uthi yiziphi ezivalwayo.
3. Vula kabusha isici ({{ui:Khipha ekuvinjelweni}}) bese ugcina olunye ukucushwa, isibonelo `Nemigodi`.

Uma noma yikuphi ukucushwa kuvala isici, ukusebenzisa ukucushwa kuvala izici zalo **nezici zonke ezinye zivulwe**, kanye namanani emingcele, esinyathelweni esisodwa. Ukucushwa okugcinwe ngaphambi kokuvalwa kwezici kubalwa njengokuthi "konke kuvuliwe". {{ui:Buyekeza}} igcina izici njengoba zinjalo manje, namanani.

Ingxenye okucushwa kwayo kuvala izici igcinwa njengenguqulo entsha yefayela: i-PartCraft endala ithi ifayela livela enguqulweni entsha kunokuvula lingenazo.

:::note
Ithebhula ledizayini le-CSV liphatha amanani emingcele kuphela. Ukungenisa ithebhula phezu kokucushwa kushintsha amanani alo futhi kugcina izici ezivalayo; i-`--table` yomugqa womyalo yakha amanani kuphela.
:::

Ifayela lengxenye ligcinwa nokucushwa nanoma yikuphi okwakusebenza. Ingxenye ivula ngamanani ayo agcinwe nawo.

## Ngenisa noma ukhiphe ithebhula ledizayini

Ithebhula ledizayini liyifayela le-CSV elinekholomu ngayinye yomngcele nomugqa ngamunye wokucushwa:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Ikholomu yokuqala ingabizwa `name`, `config` noma `configuration`; zonke ezinye kumele zibe igama lomngcele wengxenye. Amaseli angamanani, namayunithi uma uthanda (`8in`). Iseli elingenalutho lishiya lowo mngcele ngaphandle komugqa.

- {{ui:Ngenisa i-CSV}} yengeza umugqa ngamunye njengokucushwa. Umugqa onegama lokucushwa okukhona uyawushintsha. Ukungenisa kuyisinyathelo esisodwa.
- {{ui:Thumela i-CSV}} ibhala ukucushwa ngaphandle. Uma kungekho lutho okwamanje, ibhala umugqa owodwa wamanani wamanje, indawo yokuqala ye-ishidi lezibalo.

Igama lokucushwa ishidi lezibalo elingalifunda njengefomula (eliqala nge-`=`, `+`, `-` noma `@`) libhalwa linesiqalo `'`.

## Konke ngesikhathi esisodwa

{{ui:Iphekhi yamavarianti…}} ngaphansi kwe-**Ukucushwa** yakha wonke ukucushwa, noma okukhethiwe, njenge-STEP, IFC, DWG nokubukwa kwangaphambili kuzip eyodwa, nethebhula lemingcele yakho: bheka [Yenza iphekhi yamavarianti kokucushwa kwakho](topic:variant-pack).

Ithuluzi lomugqa womyalo yakha ifayela elilodwa ngomugqa ngamunye wethebhula ledizayini le-CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Thumela ukucushwa njenge-CSV kuqala, bese udlulisa leyo fayela nge-`--table`. Bheka [Ama-script nomugqa womyalo](topic:scripts-and-cli). Ingxenye egcinwe njenge-script igcina ukucushwa kwayo emgqeni we-`configs json …`.
