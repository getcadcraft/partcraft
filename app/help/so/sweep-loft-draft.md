---
title: Sweep, loft iyo draft
summary: Sweep profile xirran oo ku dhaqaaqa waddo ah xariijimaha sawir-gacmeedka ama geesaha moodeelka, loft oo ku dhex mara qaybo ku yaal diyaaradaha kala duwan, iyo draft oo lagu daro wejiyada; iyo ikhtiyaarada, natiijooyinka saxda ah iyo fariimaha.
keywords: sweep, boss sweep, goyn sweep, tuubo, waddo, loft, boss loft, qaybo isku xidhan, toosan, draft, xagal draft, wejiyada taper, diyaarada dhexe, jihada jiidista, foom
from: 9d637981
---

:::note
**Nooca hadda** sweep iyo loft lama dhisin: waxay u baahan yihiin kernel joomatari saxda ah, taas oo nooca PartCraft-kan aan lahayn. [Waxa aan weli la dhisin](topic:not-built-yet) wuxuu sheegayaa waxa lagu sameeyo halkeeda; qaybaha Sweep iyo Loft waxay sharxayaan sida ay u shaqeeyaan kernel saxda ah. **Draft wuu shaqeeyaa** wejiyada siman: kernel-ka mesh ayaa dhisa, natiijadana waa tan uu bixin lahaa kernel saxda ah.
:::

Saddexdaba waxay ku jiraan kooxda Features ee menu-ga {{ui:More}} (eeg [Kernel-ka mesh](topic:solid-kernels)). Mid kasta wuxuu ku biiri karaa walxaha, wuu ka goyn karaa, ama kaliya wuxuu hayaa isku-dhafka (**Isku-dhafka**) ama wuxuu sameeyaa **Jidh cusub** (sweep iyo loft: **Hawlgalka** ee panelka).

## Sweep

Sweep wuxuu dhaqaajiyaa profile xirran waddo: tuubooyin, gacmo-qabasho, buundooyin silig, rails.

1. Sawir **waddada** sawir-gacmeed keli ah: xariiqyo iyo qalooc isku xidhan dhamaadka ilaa dhamaadka (ama isticmaal geesaha moodeelka, hoose).
2. Sawir **profile-ka** sawir-gacmeed kale oo diyaaradeeda ku gudubta mid ka mid ah dhamaadka waddada, tusaale ahaan goobo ku taal diyaarada sare bilowga waddo lagu sawiray diyaarada hore.
3. Dooro sawir-gacmeedka profile-ka oo dooro {{ui:More}}, kadibna {{ui:Sweep}}. Sawir-gacmeedka kale ee ugu dambeeya wuxuu noqonayaa waddada.

Panelka:

| Dejinta | Waxa ay sameyso |
|---|---|
| **Path** | Calaamadi sawir-gacmeedyada samaynaya waddada (dhowr sawir-gacmeed ayaa isku xidha hal waddo 3D ah); **Dooro geesaha moodeelka** wuxuu ku daraa geesaha qaybta |
| **Orientation** | Raac waddada (caadi), Frenet, Go'an (qaybtu waxay ahaadaan barablan profile-ka), Ilaali jihada, Iyadoo la raacayo khadka hagaha |
| **End scale** | Profile-ku wuxuu kordhaa ama yaraadaa si toos ah ilaa cabbirkan dhamaadka (1 = joogto) |

Geesaha adag ee waddada waa la jaray (mitred). Goobo radius 5 ah oo lagu dhaqaajiyey xariiq 100 mm ah waa silinda oo saxan 2500π mm³; qaybta qalooca ah ee radius 50 wuxuu noqdaa rubuc torus ah oo 625π² mm³.

## Loft

Loft wuxuu isku dhafaa laba ama ka badan goyn ku yaal diyaaradaha kala duwan.

1. Sawir goyn kasta sawir-gacmeed keli ah (hal loop xirran mid kasta), ku yaal diyaaradaha asaasiga ah, diyaaradaha tixraaca (eeg [Diyaaradaha tixraaca, dhuruyada iyo barbaarta](topic:reference-geometry)) ama wejiyada.
2. Dooro {{ui:More}}, kadibna {{ui:Loft}}. Sawir-gacmeed kasta oo hal loop ah oo aan la isticmaalin wuxuu noqonayaa goyn, taxanaha taariikhda.

Panelku wuxuu liisteeyaa goysyada by order (**Sare** wuu dib u habeeyaa, **Ka saar** wuu mid tirtiraa); **Ku dar sawir-gacmeed** wuxuu ku daraa mid kale, **Dooro dusha** wuxuu ku daraa wejig siman oo qaybta ah. **Ruled** wuxuu sameeyaa wejiyo toosan oo u dhexeeya goysyada halkii isku-dhafka siman. Laba labajibbaaran ee dhexdooda, labaduba waa frustum isku mid ah (labajibbaaran 40 mm ah ilaa labajibbaaran 20 mm ah, 30 mm kor: saxan 28000 mm³).

Goysyo leh tiro kala duwan oo geesood ah (labajibbaaran ilaa saddex-geesood) waxaa isu dhigay OpenCascade, taas oo laga yaabo inay leexiso wejiyada dhinacyada; feature-ku wuu digayaa. Goysyada tiro geesood isku mid ah ku sawir, ka bilow geesaha isku mid ah, si natiijada ugu nadiifsan.

### Waddooyinka hagaha

Waddooyinka hagaha waa khadadka dhinacyada loft-ka ay raacayaan goyskii ugu horreeyay ilaa kii ugu dambeeyay, bulaac, waaisto ama fidi aad naftaadu sawirto.

1. Sawir laba ama ka badan oo waddooyin ah: khadadka furan (xariiqyo, qalooc, spline) oo ka bilaabma goyska ugu horreeya ilaa kan ugu dambeeya oo mar kasta goys kasta jaraya mar keliya. Sawir-gacmeed keli ah wuxuu hayn karaa dhowr waddo: silsilad kasta oo kala go'an waa waddo keli ah. Sawir waddada si ay si dhab ah goys kasta ula kulanto: ku qabo geesaha ay sawirkeedu ku kulmaan dhibcaha goysyada.
2. Panelka Loft, hoosta **Waddooyinka hagaha**, calaamadi sawir-gacmeedyada haysta, ama guji {{ui:Pick model edges as rails}} oo guji geesaha qaybta (Esc wuu dhammeeyaa).

Loft-ka leh waddooyin waa dusha Gordon oo ka gudba goysyada iyo waddooyinka (eeg [Dusha ka gudba shabakad khad](topic:gordon-surfaces)), oo lagu xidhay toosan labada dhamaadka oo solid ah. Panelku wuxuu sheegayaa sida ay si dhow ugu raacayso. Goys kasta markaas waa inuu noqdaa sawir-gacmeed (dhibic ama wejig ma qaadan karo waddo), **Ruled** ma khuseeyo. Waddo ka maqan goys in ka badan 0.01 mm waa la diidaa, iyada oo farqigu la sheegayo.

Waa la hubiyay: laba goobo (20 mm iyo 10 mm oo 40 mm ka dhexeeya) oo leh afar waddo toosan waxay siiyaan mugga frustum-ka koonka ilaa 0.000002 % oo kale; qaansooyin 5 mm ka bararan waxay siiyaan barrel oo raacaya waddo kasta gudaha 0.00001 mm.

## Draft

Draft wuxuu jiifsadaa wejiyada si qaybtu uga soo baxdo foomka.

1. Dooro {{ui:More}}, kadibna {{ui:Draft}} (ama marka hore {{key:Shift}}+guji wejiyada). Haddii aan wax la dooran, waxaad ku jirtaa habka dooridda: guji wejig kasta oo aad jiifsanayso, kadibna {{ui:Done}}.
2. Deji **Angle (°)**, **Neutral plane** (meesha wejiyada ay cabbirkooda ku hayaan) iyo **Pull direction** (caadi ahaan xariiqa diyaaradda dhexe).

Angle positive wuxuu wejiga ku foorarinayaa gudaha jiidista wuxuuna ka saaraa walxo; negative wuu ku daraa. Diyaaradda dhexe waxay ka bilaabataa diyaarada sare. Nooca hadda kaliya wejiyada siman ayaa la qabyeyn karaa: silinda, koon ama wejig qaab xor ah wuxuu leeyahay fariinta "Draft: nooca hadda wejiyada siman oo keliya (kernel-ka mesh ayaa dhisa)." Afarta dhinac ee blokh 100 × 100 × 50 ah oo la qabyeeyey 5° hoostiisa ayaa noqonaya frustum oo saxan h/3·(a² + b² + ab), iyadoo b = a − 2h·tan 5°.

## Fariimaha

| Fariinta | Waxa la sameeyo |
|---|---|
| "Diyaarada profile-ka waa inay mari dhamaadka waddada …" | Dhaqaaji sawir-gacmeedka profile-ka bilowga (ama dhamaadka) waddada |
| "Waddada waxay leedahay god: curves-keedu ma isku xidhna dhamaadka ilaa dhamaadka …" | Isku xidh curves-ka waddada; sawir-gacmeedyada kala duwan dhamaadkoodu waa inay si sax ah isu kulmaan |
| "Goysa loft-ka wuxuu u baahan yahay hal loop xirran oo keliya" | Kala qaybi sawir-gacmeedka, ama ka saar loop dheeraad ah |
| "… ma qabyeyn karo diyaaradda dhexe …" | Wejigu waa siman yahay diyaaradda dhexe ama ma gaadho |
| "Draft: nooca hadda wejiyada siman oo keliya (kernel-ka mesh ayaa dhisa)." | Wejiga la doortay waa qalooc. Ka saar; qabyee wejiyada siman oo keliya |

:::note
Weli lama dhisin: sweep-yada leexda leh, sweep-yada darbiga khafiifka ah iyo kuwa dusha, waddooyinka hagaha ee loft-ka iyo tangency-ka dhamaadka, draft-ka silinda, koonka iyo wejiyada qaabka xor ah.
:::
