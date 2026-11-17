---
title: Soo saar bosska oo ku jar dhexdiisa
summary: Ka dhig naqshadda jidh adag oo leh Soo saar, deji qoto heer ah, dhexda naqshadda, ilaa-wejigga ama laba-jihood, taper, ama hal kontuur oo naqshadda, kadibna naqshad wejig oo Goo qodob ama god jaran.
keywords: soo saar, boss, bossyada la soo saaray, goo, godka la goray, qodob, dhammaan oo dhan, heer ah, dhexda naqshadda, rogi, qoto, cut-extrude, boss-extrude, pad, ilaa wejiga, xiga, ilaa geeska, kala fogaansho wejiga, jihada 2, laba jihood, taper, kontuur, gobol, kontuurada la doortay
from: 3b13ff10
---

{{ui:Soo saar}} wuxuu naqshadda profile xidhan ee sawir-gacmeedka si toosan uga soo riixa qorshihiisa si uu u sameeyo agab. {{ui:Goo}} wuxuu sidaas oo kale sameeyaa laakiin agabka ayuu ka saaraa. Labaduba waa isla feature gudaha; mar dambe midkood ayaad u beddeli kartaa kan kale.

## Soo saar boss

1. Naqshad profile xidhan oo xir sawir-gacmeedka (eeg [Naqshadda kowaad ee sawir-gacmeedka](topic:sketch-basics)). Wuxuu weli dooran yahay.
2. Dooro {{ui:Soo saar}}.

Jidh 10 mm ah ayaa soo muuqda, "Extrude1" wuxuu ku biiraa taariikhda sawir-gacmeedkiisa oo hoos ku jira, xaaladda xagga hoose waxay tidhi "Extrude1 added. Change its numbers on the right."

**Sawir-gacmeedka la isticmaalo:** sawir-gacmeedka aad markii dambe xirtay, ama kan taariikhda laga doortay. Haddii waxba la dooran, PartCraft wuxuu qaadanayaa sawir-gacmeedka ugu dambeeya ee aan feature uu isticmaalin. Haddii midna jirin: "Make a sketch first: pick a plane, Sketch, draw a closed profile, Exit."

### Deji qotada iyo jihada

Panelka midig:

| Dejinta | Doorashooyinka | Caadi |
|---|---|---|
| **Hawlgal** | Boss (ku dar agab), Cut (ka saar agab), Intersect (hay'ad isku dhafan), New body (weli lama dhisin nooca hadda: wuxuu u baahan yahay kernel saxda ah) | Boss |
| **Dhamaad** | Heer ah (qoto), Dhexda naqshadda (labada dhinac), Dhammaan oo dhan, Ilaa wejiga ama qorshaha, Ilaa wejiga xiga, Ilaa geeska, Kala fogaansho wejiga | Heer ah |
| **Qoto (mm)** | Cabbir kasta oo ka weyn eber (waxaa muuqda Heer ah iyo Dhexda naqshadda) | 10 |
| **Rogi jihada** | Wuxuu ku koraa dhinaca kale ee qorshaha sawir-gacmeedka (lama muujiyo Dhexda naqshadda) | Off |

Lambar qor oo taabo {{key:Enter}} ama {{key:Tab}}: qaybtu dib ayay u dhismaysaa isla markiiba. **Dhexda naqshadda** wuxuu qoto badhkiisa dhinac kasta u dhigaa sawir-gacmeedka.

### Ilaa wejig, wejigga xiga ama geesta

Lama dhisin nooca hadda: kala fogaansho kasta oo "ilaa" ah waxay u baahan tahay kernel saxda ah, feature-ku wuxuu leeyahay "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." Isticmaal Heer ah oo aad cabbirtay. Kernel saxda ah leh dhamaadyadu sidan ayay u shaqeeyaan:

- **Ilaa wejiga ama qorshaha**: **Ilaa** wuxuu qaataa wejig toosan (Dooro, kadibna guji) ama qorshe tixraac ah. Wejig la siman sawir-gacmeedka wuxuu siinayaa qoto saxda ah; wejig janjeersan dhamaadka ayuu ka jaraa dhulka. Haddii wejiga uu ka danbeeyo sawir-gacmeedka: "… Try Reverse direction."
- **Ilaa wejigga xiga**: wuxuu joogsadaa wejigga toosan ee ugu horreeya ee jidhka uu soo saaridu la kulanto (wejiyada wareegsan lama taageero halkan, waa lagu sheegaa).
- **Ilaa geeska**: wuxuu joogsadaa heerka geesta (guji meel u dhow dhamaadka geesta) ama feature-ka barta.
- **Kala fogaansho wejiga**: sida Ilaa wejiga, laakiin wuxuu joogsadaa **Kala fogaansho (mm)** ka hor wejiga (lagu cabbiray xagga toosan ee wejiga).

### Laba jihood, taper, hal kontuur

- **Jihada labaad** (Heer ah): wuxuu sidoo kale soo saaraa **Qotada labaad (mm)** dhinaca kale ee sawir-gacmeedka.
- **Taper (°)**: dhinacyadu way janjeeraan marka ay socdaan, sida draft-ka (xuduudda ka baxsan: dibadda); hal jihood oo keliya. Lama dhisin nooca hadda (wuxuu u baahan yahay kernel saxda ah): ka tag 0.
- **Gobollada**: **Dooro gobollada**, kadibna guji gudaha loop-yada si loo soo saaro; kaliya gobollada la doortay ayaa la isticmaalaa (goob ku jirta laba-jibbaarka: guji gudaha goobta si aad u hesho silinder, ama inta u dhexaysa si aad u hesho saxan leh god). **Dhammaan** wuxuu ku celiyaa dhammaan loop-yada.

Hoostooda, **Cabbirrada naqshadda** waxay liistaa cabbirrada wadaha sawir-gacmeedka, si aad u beddeli karto cabbirrada profile-ka adigoo aan sawir-gacmeedka furin.

:::note
**Through all waa kaliya goynta.** Boss oo loo dejiyay Through all wuxuu u fashilmaa fariinta "Through all is for cuts. Use a depth for a boss." Feature-ka oo laga beddelo Cut oo loo celiyo Boss, Through all wuxuu isbedelaa Heer ah adigoo aan la socon.
:::

## Qodob godka

1. Guji wejiga toosan ee aad ku jaraysid. Wuu iftiimaa, panelka midig wuxuu leeyahay **Wejig**.
2. Dooro {{ui:Sawir-gacmeed wejiggan ku yaal}} (ama {{ui:Naqshad}} qalabka sare).
3. Ku samee qaabka qodobka, tusaale ahaan laaf, oo cabbir.
4. Dooro {{ui:Ka bax}}.
5. Dooro {{ui:Goo}}. Wuxuu ku bilaabmaa **Through all**: wuxuu ka saaraa agabka qaybta oo dhan.
6. Qodob ahaan, deji **Dhamaad** **Heer ah (qoto)** oo qor **Qoto (mm)**.

Goynta waxay gashaa agabka, u jeeda meel ka fog wejigii aad ku sawirtay. Haddii statusbar-ku yidhi "There is nothing to cut on that side of the sketch. Try the other direction.", calaamadee **Rogi jihada**.

Sawir-gacmeed ku yaal sagxadda qodobka wuxuu raacaa sagxadda: beddel qotada qodobka sawir-gacmeeduna wuu u dhaqaaqaa.

## Riix ama jiid wejig oo dhan

Si wejig uu uga soo baxo ama uu u dhex galo, ma u baahnid inaad qaabkiisa sawirto. Guji wejiga toosan, kadibna panelka midig:

- {{ui:Ka soo saar}} wuxuu wejiga soo jiidaa: PartCraft wuxuu ku daraa sawir-gacmeed wejiga saaran oo qaabkiisa leh (godadka wejiga ku jira ayaa godad ah) iyo Extrude 10 mm.
- {{ui:Ku jar}} wuxuu wejiga dhex riixaa: isla sawir-gacmeedka iyo Cut ilaa badhka jidhka.

Labadaba hal tallaab ayay yihiin: {{key:Mod+Z}} wuxuu ka saaraa sawir-gacmeedka iyo feature-ka labadaba. Feature-ka cusub waa la doortay, sidaas darteed qor lambar isla markiiba oo taabo {{key:Enter}} qotadiisa. Qaabka waa la koobiyeeyay sida xariiq iyo qaansoo go'an: uma raacayo isbeddelada dambe ee wejiga. Haddii qayb qaabka ah aan la koobiyeyn karin (qallooc bilaa xadeed), sawir-gacmeedka ayaa furmaya oo wuxuu leeyahay waxa la koobiyeyay; dhammeee, kadibna dooro {{ui:Ka bax}} iyo {{ui:Soo saar}} ama {{ui:Goo}}.

## Profiles leh jasiiro

Sawir-gacmeed wuxuu leeyahay loop xidhan oo badan. Loop-yada isku taageera waxay noqdaan boss-yo kala go' (ama goyn); loop gudaha kale waxay noqotaa god dhex mara boss-ka. Tusaale ahaan, laaf leh laba goob gudaha ah wuxuu soo saaraa saxan leh laba god.

Si aad u isticmaasho qaar ka mid ah loop-yada oo keliya, dooro iyaga **Gobollada** (sare); feature kale wuxuu isticmaali karaa loop-yada kale ee sawir-gacmeedka isku mid ah.

## Dib u tafatir

- Guji "Extrude1" taariikhda si aad dejinta dib ugu soo celiso.
- Laba-jeer guji sawir-gacmeedkiisa (kaas oo hoos ku jira) si aad u furto; xirto si aad dib u dhisto.
- Eeg [Beddel qaybta taariikhdeeda](topic:edit-history) xagga jooji, dib u celin, dib u habayn iyo tirtirid.

## Fariimaha caadiga ah

| Fariinta | Waxa la sameeyo |
|---|---|
| "The sketch has no closed profile to extrude." | Sawir-gacmeedku ma leeyahay loop xidhan oo xariiqyo adag. Xidh godadka, ama dib u beddel xariiqyada dhismaha adigoo isticmaalaya {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | Furo sawir-gacmeedka oo ku xir dhamaadkaas xariiqda xigta |
| "There is nothing to cut yet." | Goynta waxay u baahan tahay jidh la gooyo. Marka hore sameey boss |
| "Nothing is left of the part after this." | Goynta wax walba ayay ka saartay. Hubi cabbirkeeda iyo jihadeeda |

Wax dheeraad ah: [Dhibaatooyinka](topic:troubleshooting).
