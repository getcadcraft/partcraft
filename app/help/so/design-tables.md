---
title: Qaababka iyo miisaska naqshadeynta
summary: Hay dhowr cabbir iyo nooc oo qayb mid ah oo magac loo bixiyay qaababka lagu kaydiyay faylka qaybta, oo feature-yada ku daminaya ama ku furaya qaab kastaa, ku beddel hal guji, soo geli ama dhoof sida miis naqshadeyn CSV ah, ama dhis dhammaan command line-ka.
keywords: miis naqshadeyn, design table, qaababka, configurations, qaab, cabbirro, sizes, qoys qaybaha, family of parts, csv, spreadsheet, kala duwanaansho, variants, table driven, qoys qayb, suppress, suppressed, damii feature, turn off a feature, ikhtiyaarro, options, leh ama aan lahayn, with or without, configurator
from: 17249afb
---

**Qaabku** waa hal cabbir oo qaybta ah: set magac leh oo qiyam u gaar ah halbeegyadeeda. Qaybta waxay ku kaydisaa qaababkeeda faylkeeda, sidaas darteed way la socdaan. **Miiska naqshadeynta** waa isla shay oo fayl CSV ah, hal sadar halkii qaab.

Qaababku waxay dejiyaan **halbeegyada**, sidaas darteed marka hore ku dar kuwaas (eeg [Qayb ku maamul halbeegyo](topic:parameters)). Qaab wuxuu kaydiyaa halbeegyada tirooyinka caadiga ah; halbeegyada laga xisaabiyo kuwa kale (sida `area = w * d`) ayay raacaan iyagoon kaliya.

## Kaydi qaab

1. Tab-ka {{ui:Halbeegyada}}, deji halbeegyada hal cabbir oo qaybta ah.
2. Hoosta **Qaababka**, ku qor magac (tusaale ahaan `Large`) oo riix {{ui:Kaydi qiimayaasha hadda}} ama {{key:Enter}}.

Qaabka cusub wuxuu noqdaa **firfircoon**. Markaad mar dambe beddesho halbeeg, wuxuu dhahayaa **firfircoon, waa la beddelay tan iyo**, si aad u ogaato in qaybtu aanay mar dambe la mid ahayn.

## Beddel, cusboonaysii, magacee, tirtir

- {{ui:Codso}} wuxuu dejiyaa halbeegyada qiimayaasha qaabkaas, oo dib u dhisaa qaybta.
- {{ui:Cusboonaysii}} wuxuu kaydiyaa qiimayaasha hadda qaabkaas.
- Si aad u magacowdo, ku qor magaca cusub sanduuqiisa oo riix {{key:Enter}}.
- {{ui:Tirtir}} wuu ka saaraa qaabka. Halbeegyadu waxay ilaaliyaan qiimayaashooda.

Mid kasta oo ka mid ah waa hal tallaabo: {{key:Mod+Z}} ayaa dib u celiya. Haddii aad halbeeg magac u beddesho, qaab kasta wuxuu raacaa magaca cusub; haddii aad mid tirtirto, wuxuu ka baxaa qaababka kale.

## Damii ama fur feature-yada qaab kasta

Qaab wuxuu sidoo kale hayaa feature-yada la damiyay, sidaas darteed qayb mid ayaa noqon karta nooca **leh** iyo **aan lahayn** wax: godadka rakibidda, chamfer, boss.

1. Damii feature-ka: guji history-ga, kadibna {{ui:Joojiso}} ee {{ui:Sifooyinka}}.
2. Kaydi qaabka sida caadiga ah, tusaale ahaan `No holes`. Sadarkiisa wuxuu liistaa waxa uu damiyo.
3. Dib u soo deji feature-ka ({{ui:Dib u dhis}}) oo kaydi qaab kale, tusaale ahaan `With holes`.

Marka qaab kasta uu feature damiyo, codsashada qaab kasta wuxuu damiyaa feature-yadiisa, oo **wixii kale oo dhan wuu furaa**, oo ay weheliyaan qiyamaha halbeegyadiisa, hal tallaabo. Qaab la kaydiyay ka hor intaan feature-yada la damin waxaa loo tixgeliyaa "wax walba waa furan". {{ui:Cusboonaysii}} wuxuu kaydiyaa feature-yada sida ay hadda yihiin, qiimayaashana.

Qayb ay qaababkeedu feature damiyaan waxa loo kaydiyaa nooc fayl cusub: PartCraft hore wuxuu sheegayaa in faylku ka yimid nooc cusub halkii uu furi lahaa iyaga la'aan.

:::note
Miiska naqshadeynta ee CSV wuxuu qaadaa qiyamaha halbeegyada oo keliya. Soo dhoofinta miis qaab hore wuxuu beddelaa qiyamaha wuxuuna ilaalinayaa feature-yada uu damiyo; `--table` ee command line-ka qiyamaha oo keliya ayuu dhisaa.
:::

Qaybta faylkeeda waxaa lagu kaydiyaa qaababka iyo kan firfircoon. Qaybtu waxay furmaa iyadoo la kaydiyay qiyamaha.

## Soo geli ama dhoof miis naqshadeyn

Miiska naqshadeynta waa fayl CSV oo leh tiir kasta halbeeg iyo sadar kasta qaab:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Tiirka hore wuxuu noqon karaa `name`, `config` ama `configuration`; tiirarka kale oo dhan waa inay ahaadaan magacyo halbeegyada qaybta. Unugyadu waa tirooyin, unit-yadana waad ku dari kartaa haddii aad jeclaato (`8in`). Unug madhan wuxuu ka tagaa halbeegga sadarkaas.

- {{ui:Soo dhoofi CSV}} wuxuu sadar kasta ku daraa qaab. Sadar leh magaca qaab jira ayaa beddela; soo dhoofintu waa hal tallaabo.
- {{ui:Dhoofi CSV}} wuxuu qaababka u dhoofiyaa. Haddii aanu weli jirin, wuxuu qoraa hal sadar oo qiyamaha hadda ah, oo ah bilow xaashida xisaabinta.

Magaca qaab kasta oo spreadsheet-ku akhriyi karo sidii formula (ka bilaabma `=`, `+`, `-` ama `@`) waxaa lagu qoraa `'` hore.

## Dhammaan cabbirrada hal mar

{{ui:Xirmada kala duwanaanshaha…}} hoosta **Qaababka** wuxuu dhisaa dhammaan qaababka, ama kuwa la doortay, sida STEP, IFC, DWG iyo preview hal zip gudihiisa, oo leh miis halbeegyadooda: eeg [Samee xirmada kala duwanaanshaha qaababkaaga](topic:variant-pack).

Qalabka command line-ka wuxuu dhisaa hal fayl sadar kasta oo CSV design table ah:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Marka hore dhoofi qaababka sida CSV, kadibna fayladaas u gudbi `--table`. Eeg [Scripts-ka iyo command line-ka](topic:scripts-and-cli). Qayb loo kaydiyay sida script waxay qaababkeeda ku kaydisaa sadar `configs json …`.
