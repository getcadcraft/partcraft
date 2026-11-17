---
title: Jenga mkusanyiko kwa viungio
summary: Anza mkusanyiko kutoka sehemu, ingiza nakala na faili nyingine za sehemu, ziunganishe kwa viungio imara, kuzunguka, kitelezi, silinda, ndege, mpira na pini-kwenye-nafasi kwenye nyuso tambarare, weka viungio vya katikati kwenye mihimili, hariri sehemu mahali pake na uhifadhi mkusanyiko.
keywords: mkusanyiko, mate, viungio, kiungio, kitanzi, kitanzi kilichofungwa, kiunganishi, mkunjo wa baa nne, utaratibu, imara, kuzunguka, kitelezi, silinda, ndege, mpira, mpira wa kiungio, duara la pande zote, pini kwenye nafasi, ingiza kijenzi, kufungwa chini, imewekwa, kizingo kimoja, kugusana, hariri sehemu, katika muktadha, partcraft-asm
from: a53bbfef
---

Mkusanyiko unaweka sehemu pamoja. Katika PartCraft, **viungio** huweka sehemu mahali pake: kila kiungio kinakaa kwenye uso tambarare wa kila sehemu mbili na kuziweka uso kwa uso. Kiungio cha kuzunguka kinaruhusu sehemu moja izunguke, kitelezi kinaiteleza, na kiungio imara kinaishikilia.

## Anza mkusanyiko

1. Jenga sehemu yenye kigumu (sehemu tupu haiwezi kuingia kwenye mkusanyiko: "Jenga kigumu kwanza, kisha kiweke kwenye mkusanyiko.").
2. Chagua {{ui:Mkusanyiko}} kwenye upau wa zana.

Upau wa hali unasema "Mkusanyiko umeanza, Part1 ikiwa sehemu iliyofungwa chini. Ingiza sehemu zaidi (Ongeza nakala, Ingiza, au Hariri › Nakili), kisha ziunganishe kwa viungio." Upau wa kushoto sasa unaorodhesha **Sehemu** na **Viungio**, na upau wa zana unaonyesha zana za mkusanyiko. Zana za mchoro na za vipengele zinafichwa.

Sehemu ya kwanza ni **iliyofungwa chini**: haisogei kamwe, na kila kitu kingine kinawekwa kulingana nayo.

## Ingiza sehemu

- {{ui:Ongeza nakala}} inaingiza nakala nyingine ya sehemu iliyochaguliwa (au ya mwisho). Nakala zinashiriki sehemu moja: ukiihariri, kila nakala inabadilika.
- {{ui:Nakili}} ({{key:Mod+D}}) kwenye kikundi cha Hariri hufanya hivyo hivyo kwa sehemu iliyochaguliwa. {{key:Mod+C}} na {{key:Mod+V}} hunakili sehemu na kuibandika kando ya nyingine, kwenye mkusanyiko huu au mwingine; {{key:Mod+Shift+V}} inaibandika mahali pale pale. Ona [Nakili, bandika na tengeneza nakala](topic:copy-paste).
- {{ui:Ingiza}} inaingiza sehemu kutoka faili la `.partcraft.json` kwenye kompyuta yako. Sehemu inakiliwa ndani ya mkusanyiko.

Sehemu mpya zinaonekana 20 mm kulia kwa kila kitu kilichopo tayari, na zinabaki hapo hadi kiungio kiziweke. Sehemu isiyo na kiungio pia inaweza kuhamishwa kwa mkono: thamani zilizoandikwa au mishale unayoburuta (ona [Orodha ya sehemu, michoro iliyotenganishwa na kusogeza sehemu](topic:assembly-bom-explode)).

## Unganisha sehemu mbili

1. Chagua {{ui:Kiungio}} au bonyeza {{key:J}}. Paneli ya kulia inasema **Kiungio kipya**.
2. Bofya uso tambarare kwenye sehemu ya kwanza. Unaangaziwa.
3. Bofya uso tambarare kwenye sehemu ya pili.

Sehemu ya pili inaruka ili uso wake ulale dhidi ya uso wa sehemu ya kwanza, ukielekeana nao. Kiungio kinaonekana chini ya **Viungio**, kwa mfano "Revolute1", na paneli ya kulia inaonyesha mipangilio yake.

- Ikiwa nyuso zote mbili zimetengenezwa na revolve, kiungio kinaanza kama **kuzunguka**; vinginevyo ni **imara**. Badilisha baadaye.
- Nyuso zilizopinda haziwezi kuchaguliwa: "Uso huo umepinda. Chagua uso tambarare (ili kuzunguka tundu au mhimili wa revolve, uchague baadaye kwenye kiungio)."
- {{key:Esc}} inaghairi kiungio ulichoanza (au bofya sehemu kwenye orodha ya kushoto).

### Mipangilio ya kiungio

| Mpangilio | Unachofanya |
|---|---|
| **Aina** | Mojawapo ya viungio kwenye jedwali hapa chini |
| **Pembe (°)** | Inazungusha sehemu ya pili kuzunguka mhimili wa kiungio (mraba kwa nyuso) |
| **Kuhama (mm)** | Inasogeza sehemu ya pili kando ya mhimili, mbali na uso (thamani hasi zinasukuma ndani yake) |
| **Kando ya X**, **Kando ya Y**, **Kuinamisha kuzunguka X**, **Kuinamisha kuzunguka Y**, **Kando ya nafasi**, **Mwelekeo wa nafasi** | Thamani nyingine, zinazoonyeshwa kwa viungio vinavyozitumia |
| **Katikati kwenye** (kwa kila upande) | Mahali mhimili wa kiungio unapovuka uso: "Asili ya uso wenyewe", mhimili wa revolve ("Mhimili wa Revolve1") au mhimili wa tundu moja ("Hole1, tundu 2") |

Kila thamani ambayo kiungio kinaruhusu isogee ina kitelezi cha kuburuta chini ya kisanduku chake; nyingine huwekwa mara moja.

| Kiungio | Kinachosogea | Huwekwa mara moja |
|---|---|---|
| **Imara** | hakuna | Pembe, Kuhama |
| **Kuzunguka** | Pembe (bawaba) | Kuhama |
| **Kitelezi** | Kuhama (droo) | Pembe |
| **Silinda** | Pembe na Kuhama (shafti kwenye fani rahisi) | |
| **Ndege** | Kando ya X, Kando ya Y kuvuka uso, na Pembe (sehemu inayoteleza juu ya meza) | |
| **Mpira** | Pembe (mzunguko) na Kuinamisha kuzunguka X na Y, kuzunguka katikati ya kiungio (kiungio cha mpira) | |
| **Pini kwenye nafasi** | Kando ya nafasi na Pembe (pini kwenye nafasi iliyonyooka) | Mwelekeo wa nafasi: pembe ya nafasi kutoka X ya uso |

X na Y za uso ni zile za uso wa sehemu ya kwanza; katikati ya kiungio huwekwa na **Katikati kwenye**.

"Asili ya uso wenyewe" ni asili ya sehemu iliyoonyeshwa kwenye uso, ambayo mara nyingi si pale unapotaka sehemu zipangwe. Kwa sehemu za duara na pini, weka **Katikati kwenye** kuwa mhimili wa revolve au wa tundu pande zote mbili: mihimili hupangika, kama kiungio cha kizingo kimoja.

### Mfano: flenji mbili zilizofungwa kwa boliti uso kwa uso

1. Fungua sehemu ya flenji (revolve yenye mfululizo wa duara wa matundu) kisha chagua {{ui:Mkusanyiko}}.
2. Chagua {{ui:Ongeza nakala}}.
3. Bonyeza {{key:J}}, bofya uso tambarare wa diski ya flenji ya kwanza (uso ambao matundu ya boliti yanaanzia), kisha uso uleule kwenye flenji ya pili. Nyuso zilitengenezwa na revolve, kwa hiyo kiungio ni cha kuzunguka.
4. Weka **Katikati kwenye** kuwa "Mhimili wa Revolve1" pande zote mbili. Flenji sasa zinashiriki mhimili mmoja.
5. Andika `22.5` kwenye **Pembe (°)** ili kupanga matundu ya boliti, au buruta kitelezi.

## Viunganishi vilivyofungwa: vitanzi

Sehemu zilizounganishwa kwenye pete (kiunganishi cha baa nne, kreni na kitelezi, fremu iliyoimarishwa pande zote mbili) zinaunda **kitanzi**. PartCraft inatatua kila kitanzi ili kifungwe: viungio vilivyomo vinachukua thamani zinazounganisha pete, vikisogea kidogo iwezekanavyo kutoka pale vilipokuwa.

- **Weka au buruta** thamani ya kiungio kilicho kwenye kitanzi, na sehemu nyingine ya kitanzi inafuata. Kwa kiunganishi cha baa nne, buruta **Pembe** ya kreni, na kiungo cha kuunganisha na kiungo cha kuyumba vinasogea nayo. Thamani uliyoweka inabaki; nyingine zinahesabiwa kutoka kwake.
- Kwenye orodha, kiungio kilicho kwenye kitanzi ambacho bado kinaweza kusogea kinaonekana **bluu**: thamani nyingine bado inaweza kuwekwa. Kitanzi kisichoweza kusogea (fremu iliyoimarishwa) kinabaki cheusi. Kitanzi kisichoweza kufungwa ni **nyekundu**.
- Kisanduku cha **Sehemu** kinaonyesha **Vitanzi**: vingapi vimefungwa na thamani ngapi bado zinaweza kusogea, kwa mfano "vimefungwa 1; thamani 1 bado inaweza kusogea".
- {{ui:Kagua mwendo kwa migongano}} inapitisha kiungio kilicho kwenye kitanzi huku kitanzi kikikifuata, hatua kwa hatua (ona [Kagua mkusanyiko kwa migongano na mwendo](topic:check-assembly)).

Kiunganishi tambarare kilichojengwa kwa baa tambarare lazima kikubaliane kwa kina: sehemu mbili zilizounganishwa uso kwa uso pande zote za pete zinahitaji urefu sawa wa rafu pande zote mbili. Tumia **Kuhama** ya kiungio kuinua sehemu pale rafu isipojumlika, la sivyo kitanzi hakiwezi kufungwa.

## Fanya kazi na sehemu

Bofya sehemu kwenye mwonekano au kwenye orodha ili kuichagua. Paneli ya kulia inaonyesha jina lake, idadi ya nakala, ujazo wake, viungio vyake, na kama imefungwa chini, imewekwa na viungio vyake, au "Haijaunganishwa: inabaki pale ilipowekwa." Vitufe:

- {{ui:Hariri sehemu hii}} (au {{ui:Hariri sehemu}} kwenye upau wa zana, au bofya mara mbili sehemu kwenye orodha): inafungua sehemu kwa ajili ya kuhariri;
- {{ui:Ongeza nakala}};
- {{ui:Ifanye sehemu iliyofungwa chini}};
- {{ui:Ondoa}}: pia inaondoa viungio vyake, baada ya kuuliza.

Mkusanyiko unabaki na sehemu moja angalau: "Mkusanyiko unabaki na sehemu moja angalau. Funga badala yake."

### Hariri sehemu mahali pake

1. Chagua sehemu kisha chagua {{ui:Hariri sehemu}}. Sehemu inafunguka na historia yake; kichwa kinasema "Bracket (katika mkusanyiko wa Bracket)".
2. Ibadilishe kama sehemu nyingine yoyote.
3. Chagua {{ui:Rudi}} kwenye upau wa zana. Mkusanyiko unasasishwa: kila nakala ya sehemu hiyo inabadilika, na viungio vilivyo kwenye nyuso zilizotengenezwa na kingo za mchoro vinafuata.

Kurudisha badiliko ni hatua moja kwenye orodha ya kutendua ya mkusanyiko.

## Tendua, hifadhi na funga

- Mkusanyiko una orodha yake ya kutendua: {{key:Mod+Z}} na {{key:Mod+Y}} zinafanya kazi kwenye viungio, uingizaji na mipangilio.
- {{ui:Hifadhi}} au {{key:Mod+S}} inapakua `<assembly name>.partcraft-asm.json`, pamoja na kila sehemu ndani yake. Ifungue baadaye kwa {{ui:Fungua}}.
- {{ui:Funga}} inafunga mkusanyiko na kurudi kwenye sehemu uliyoanzia. Ikiwa mkusanyiko haujahifadhiwa, unauliza: {{ui:Ghairi}}, {{ui:Tupa mkusanyiko}} au {{ui:Hifadhi kwanza}}.
- Ili kubadilisha jina la mkusanyiko, bofya nafasi tupu ili kisichaguliwe chochote kisha ubadilishe **Jina** kwenye paneli ya kulia.

## Mikusanyiko mikubwa

Mkusanyiko unaweza kushikilia maelfu ya nakala za sehemu chache. Nakala za sehemu moja zinachorwa pamoja, kiungio unachozungusha kinaweka sehemu zilizo nyuma yake tu, na orodha ya sehemu inaonyesha safu zake za kwanza na kitufe cha "Onyesha zaidi" chini yake (sehemu iliyochaguliwa inaorodheshwa kila wakati).

- Unapozungusha au kukuza mwonekano, mkusanyiko wenye pembetatu zaidi ya takriban 300,000 unachorwa kama boksi moja kwa kila sehemu, kisha kikamilifu muda mfupi baada ya kusimama.
- {{ui:Mionekano}} › {{ui:Onyesho jepesi}} inaweka boksi muda wote. Kuchagua sehemu na viungio bado kunatumia sehemu halisi.
- Kasi ya kuzunguka pia inategemea kadi yako ya michoro. Namba ambazo PartCraft imepima ziko kwenye maelezo ya toleo, pamoja na mashine zilizozitoa.

## Matatizo ya viungio

- Sehemu ambayo hakuna kiungio kinachoifikia inaorodheshwa kama **huru** na paneli inasema "Bracket2 haijaunganishwa na sehemu iliyofungwa chini, kwa hiyo inabaki pale ilipowekwa."
- Kitanzi kisichoweza kufungwa (urefu hautoshi, kikomo kinazuia kiungio, nyuso hazikubaliani kwa kina): "Revolute3 inafunga kitanzi ambacho hakiwezi kufungwa: kimezidi kwa 2.000 mm. Angalia nyuso, makuhama na mipaka ya viungio vya kitanzi." Viungio vyake vinageuka nyekundu.
- Ikiwa uso au mhimili ambao kiungio kinautumia umetoweka baada ya kuhariri sehemu: "Uso ambao kiungio hiki kinautumia umetoweka kutoka Bracket." Ondoa kiungio kisha ukitengeneze upya.

Ifuatayo: [Kagua mkusanyiko kwa migongano na mwendo](topic:check-assembly).
