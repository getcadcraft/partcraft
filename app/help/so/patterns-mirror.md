---
title: Sifooyinka nuqulka iyo muraayadda
summary: Ku celi sifooyinka safka ah adigoo isticmaalaya Toosan, ku wareeg dhidib adigoo isticmaalaya Wareegsan, iyo ku koobiyee sifooyinka ama jidhka oo dhan dhinac dusha adigoo isticmaalaya Muraayad.
keywords: nuqul, nuqulka toosan, nuqulka wareegsan, qaabka wareegga, array, muraayad, simmetrik, koobiyee sifooyinka, goobta boolta, bilow, muraayadda jidhka
from: 702e9edb
---

Nuqullada iyo muraayadaha waxay koobiyeeyaan sifooyinka aad hore u dhisay. Nuqullada waxay qayb ka yihiin taariikhda: haddii aad asalka beddesho, nuqullada ayaa raacaya.

Waxa la koobiyeeyo waa waxa sifadu sameyso: nuqulka boss wuxuu ku daraa alaab, nuqulka jar ama god wuxuu ka saaraa. Nuqullada waa la nuquli karaa mar kale, waana la muraayadeyn karaa mar kale. Jidh STEP ah oo la soo dejiyey ayaa sidoo kale la koobiyeyn karaa; fillets, chamfers iyo shells ma la koobiyeyn karo.

## Nuqulka toosan

1. Dooro sifada la koobiyeynayo taariikhda (tusaale ahaan Hole ama Cut). Haddii wax aan la doorán, sifada adag ee ugu dambaysay ayaa la isticmaalaa.
2. Dooro {{ui:Linear}}. Saddex nuqul ayaa soo muuqda, oo 20 mm kala fog oo ku yaal dhidibka X.
3. Panelka midig, deji:

| Dejin | Waxa ay sameyso | Qiimaha caadiga |
|---|---|---|
| **Features to copy** | Calaamadee sifo kasta oo la koobiyeynayo. Kaliya sifooyinka ka sarreeya nuqulka ayaa la liisanayaa | Sifada la doortay |
| **Direction** | Dhidibka X, dhidibka Y, dhidibka Z, khad ama khad dhexe naqshad hore ka timid, dhidibka wareegga, ama geesta la qaadday | Dhidibka X |
| **Spacing (mm)** | Fogaanta u dhaxaysa deriska | 20 |
| **Count** | Tirada guud, **oo ku jirta asalka** (1 ilaa 1000) | 3 |
| **Reverse direction** | Nuqulada waxay u socdaan jihada kale | Damiyay |

### Geeska u isticmaal jihada

1. Riix geesta toosan ee qaybta ku jirta muuqaalka. Panelka midig wuxuu leeyahay **Edge** wuxuuna muujinayaa dhererka.
2. Dooro {{ui:Linear}}: nuqulku wuxuu ku socdaa geeskaas.

Ama dooro nuqulka, qaad geesta, oo dooro "Picked edge (use the one picked now)" ku jira **Direction**. Geesta la qaaday waa go'an tahay meel bannaan: ma raacdo isbeddelada dambe. Khadka naqshadda wuxuu raacaa naqshaddiisa.

## Nuqulka wareegsan

1. Dooro sifada la koobiyeynayo (tusaale ahaan hal god oo ku dhow geesta gaar).
2. Dooro {{ui:Circular}}. Lix nuqul ayaa soo muuqda, oo si siman looga wareegayo.
3. Deji:

| Dejin | Waxa ay sameyso | Qiimaha caadiga |
|---|---|---|
| **Features to copy** | Sida Linear | Sifada la doortay |
| **Axis** | Dhidibka X, Y ama Z, khad naqshad, dhidibka wareegga, ama geesta la qaaday | Dhidibka wareegga ee ugu dambeeya haddii uu jiro, haddii kale dhidibka Y |
| **Angle (°)** | 360 wuxuu nuqullada si siman ugu kala fogeeyaa wareeg oo dhan. Ka yar wuxuu ku kala firdhiyaa xagalkaas, midka koowaad iyo midka ugu dambeeya dhamaadka | 360 |
| **Count** | Tirada guud, oo ku jirta asalka | 6 |
| **Reverse direction** | Wuxuu u wareegaa jihada kale | Damiyay |

Dhidibyada adduunka waxay ka gudbaan bilowga (origin). Haddii disk-ku aan ku dhex jirin bilowga, isticmaal khad dhexe oo naqshad ah ama dhidibka wareegga.

### Tusaale: sideed godka boolta ee flange

1. Wareeji flange-ka (eeg [Wareeji qayb wareegsan](topic:revolve)) dhidibka Y.
2. Naqshadee dusha sare ee falaaska flange-ka, dhig hal bar oo ku yaal goobta boolta, oo samee Hole.
3. Adigoo Hole la doortay, dooro {{ui:Circular}}. Dhidibka horey ayuu u yahay "Dhidibka Revolve1".
4. Deji **Count** ilaa `8`.

## Muraayad

1. Dooro sifada la muraayadeynayo taariikhda, ama ha dooran wax si aad u muraayadeyso **jidhka oo dhan sida ay ilaa hadda u dhisan tahay**.
2. Dooro {{ui:Mirror}}. Waxay muraayadeysaa **Dusha midig**.

Si aad jidhka oo dhan dhinac wajiga qaybta ugu muraayadeyso, marka hore riix wajigaas go'an, ka dib dooro {{ui:Mirror}}. (Riixida wajiga waxay tirtirtaa doorashada taariikhda, sidaas darteed tani had iyo jeer waxay muraayadeysaa jidhka oo dhan.)

Dejinta panelka midig:

- **Mirror**: calaamadee **The whole body (as built so far)**, ama ka saar oo calaamadee sifooyinka la koobiyeynayo.
- **Mirror plane**: Dusha hore, Dusha sare, Dusha midig, wajiga uu hadda isticmaalayo ("Wajiga Extrude1" ama "Dusha go'an"), ama "Wajiga la qaaday hadda". Si aad sifooyinka la doortay ugu muraayadeyso wajig: dooro Mirror taariikhda, riix wajiga muuqaalka, oo dooro "Wajiga la qaaday hadda".

Muraayadeynta jidhka oo dhan dhinac wajig ayaa qaybta laba jibbaarinaysa, tusaale ahaan bracket nus ah oo loo beddelo mid buuxa.

## Fariimaha

- "Marka hore dhis sifo si aad u nuqusho." ama "Marka hore dhis jidh adag." Weli ma jiro wax adag oo la koobiyeyn karo.
- "Dooro sifooyinka la koobiyeynayo." Sanduuqa kasta **Features to copy** waa la faragelisay.
- "Extrude2 ma lahan jidh adag oo la koobiyeyn karo." Sifadaasi way fashilantay ama waa la joojiyay.
- "Fillet1 wuxuu beddelaa geesaha ama darbiyada jidhka; ma la koobiyeyn karo. Koobiyee sifooyinka samaya jidhadka adag (extrudes, revolves, holes, imports)." Fillets, chamfers iyo shells ma la nuqli karo ama ma la muraayadeyn karo; marka hore nuqul, ka dib fillet.
- "Weli ma jiro jidh la muraayadeyn karo."

:::note
Nuqulada lama dhex-gudbin karo mid mid. Nuqulku ma raaci karo curve naqshad. Nuqullada naqshadaha iyo muraayadaha weli lama dhisin: naqshadee joomitari soo noqnoqda gacanta, ama adigoo isticmaalaya **Ku dar koorarka**.
:::
