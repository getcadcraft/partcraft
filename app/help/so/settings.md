---
title: Dejinta PartCraft
summary: Dooro badhanka jiirka ee wareejiya muuqaalka, ka dhig jiidista trackpad-ka inay wareejiso oo ka dhaqaajiso qaybta, damee ama deji xidhiidhada otomaatiga ah marka aad sawirayso, iyo dooro tirada threads-ka ee xalinta simulation-ka.
keywords: dejinta, doorashooyin, options, jiirka, badhanka dhexe, badhanka wheel, wareejin, orbit, rotate, wareeji, trackpad, touchpad, scroll, swipe, pinch, xidhiidhada, constraints, xidhiidhada otomaatiga ah, snap, coincident, threads, solver threads, cores, processors, multi-threaded, xal dhakhso, parallel
from: 759edcaf
---

Furo {{ui:Dejinta}} gear-ka ku jira app bar-ka ama {{key:Mod+,}}. Tabka koowaad, {{ui:PartCraft}}, wuxuu hayaa dejinta barnaamijkan; {{ui:Guud}} wuxuu hayaa midka dhammaan barnaamijyada CadCraft wadaagaan (mawduuca, toolbar-ka, panelka). Dejinta PartCraft waxay ku jirtaa barnaamijka oo keliya: halkan ayaad ka beddeshaa, browser-kanna wuu xasuustaa. {{ui:Dib u deji dejinta PartCraft}} wuxuu wax walba dib u celinayaa bilowgii.

## Wareejinta muuqaalka

- **Badhanka bidix** (bilowga): jiid badhanka bidix si aad qaybta u wareejiso; jiid badhanka midig ama dhexe si aad u dhaqaajiso.
- **Badhanka dhexe**: riix wheel-ka oo jiid si aad qaybta u wareejiso; hay {{key:Shift}} (ama {{key:Ctrl}}, ama ⌘) oo badhanka dhexe, ama jiid badhanka midig, si aad u dhaqaajiso. Badhanka bidix wuxuu kaliya doortaa wejiyada, geesaha iyo dusha, sidaas darteed gujis yar oo dhaqaajiya qaybta ma wareejiyo. Barnaamijyo CAD badan sidan ayay u shaqeeyaan.

Wheel-ka wuxuu u weyneeyaa jiirka meeshiisa labadaba. Sawir-gacmeed, badhanka midig iyo dhexe ayaa dhaqaajiya sida hore.

## Scroll: mouse wheel ama trackpad

- **Ogow** (bilowga): PartCraft wuu ilaaliyaa scroll-ka. Scroll-ka dhinaca ama nuxur-yar, sida trackpad-ku diro, qaybta wuu wareejiyaa; gacmaha wheel-ka oo buuxa waxay weyneeyaan.
- **Mouse wheel**: scroll kasta wuxuu had iyo jeer ku weynaadaa jiirka.
- **Trackpad**: laba farood ku dhaqdhaqaaq si aad qaybta u wareejiso, hay {{key:Shift}} oo dhaqaaji si aad u dhaqaajiso, pinch si aad u weyneeyso. Sawir-gacmeed, laba faroodka ayaa dhaqaajinaya sawirka.

Pinch wuxuu weyneeyaa doorasho kasta. Haddii "Ogow" khaldo mouse-kaaga ama trackpad-kaaga, dooro midka aad haysato. Wax dheeraad ah ka akhri [Trackpad, taabasho iyo shaashado yar](topic:trackpad-and-touch).

## Sawir-gacmeed: ku dar xidhiidhada intaad sawirayso

**Ku dar xidhiidhada intaad sawirayso** (bilowgii waa on): gujis oo ku soo dhex dhufo barta wuxuu bartaas ka dhigaa mid isku-dhaca; gujis xariiq ama qalooc wuxuu barta ku dhigaa xariiqdaas ama qaloocaas; xariiq la sawiro oo u dhow sinaha ama toosinta wuxuu noqdaa mid sinaha ama toosan. Eeg [Xidhiidhada iyo cabbirrada](topic:relations-dimensions).

Demi markaad rabto inaad geesaha ku dhig goobo ku dhow goobo kale oo aanad isku xidhin. Jiirku weli wuu soo dhex dhufaa barta iyo qalooca, laakiin waxba ma isku xidhmo: xariiqyada la sawiro silsiladda isku xidh ma wadaagaan geesahooda, sidaas darteed jiidis ayaa kala tagi kara. Xidhiidhada aad rabto ku dar adigu panelka midig. Profile xiran wuu weli soo bixi karaa marka dhamaadkeeda ay isku taabtaan.

:::note
Dejintu waxay beddeshaa kaliya waxa ku dara sawirka cusub. Xidhiidhada hore ee sawirka way ahaadaan, qalabka Fillet-ka wuxuu weli sameynayaa qaansadiisa taabta iyo radiyaskiisa.
:::

## Sawir-gacmeed: cabbir intaad sawirayso

**Cabbir intaad sawirayso** (bilowgii waa on): intaad xariiq, leydh, goobo ama qaanso sawirayso, qor lambar wuxuu buuxiyaa sanduuqa cabbirka ee jiirka ku xiga ({{key:Tab}} wuxuu gudbaa sanduuqa xiga) iyo {{key:Enter}} wuxuu sawirayaa qaabka cabbirkaas, oo cabbir wadane u dhigan cabbir kasta aad qortay. Dami: qorista lambar intaad sawirayso waa wax aan wax samayn, qaababka waxaa lagu sawiraa gujis kaliya. Eeg [Qor cabbirka intaad sawirayso](topic:sketch-basics#type-the-size-as-you-draw).

## Kaarka geeska

Waxa ku muuqda geeska muuqaalka 3D: **Kaarka muuqaalka** (bilowga; geeska sare ee midig — guji wejiga, geesaha ama geeska si aad uga eegto, jiid si aad u wareejiso, jiid giraangiraha compass-ka si aad moodeelka u wareejiso), **Astaanta tiirka** (calaamad yar oo X, Y, Z ah oo geeska hoose ee bidix, oo wareegta muuqaalka: X casaan, Y cagaar, Z buluug) ama **Midna**. Midna ma muuqdo marka aad sawirayso ama xaashiga naqshadda. Eeg [Kaarka muuqaalka](topic:view-cube).

## Xalinta threads-ka

Tirada threads-ka ee xalinta simulation-ka isticmaali karo. **Automatic** (bilowga) wuxuu isticmaalaa hal ka yar tirada processor-ka kombiyuutarka (ugu badnaan 16), si bogga u jawaabo intuu xalinayo simulation; ama dooro lambar. Xalinta weyn ee voxel, buckling, stress waqti kasta iyo flow waxay si dhakhso ah ugu xalliyaan threads badan (qiyaastii 2× ee 4 threads ee 80,000 kuub, sida cabbirkeenna ay muujinayaan; wax badan kombiyuutar firaaqo ah). Moodeelada ka yar 20,000 aan la garanayn waxay ku sii jiraan hal thread, sababtoo ah bilaabidda threads-ka waxay ka qaadataa wixii ay badbaadin lahaayeen.

Xalka thread-ka leh wuxuu siinayaa isla jawaabta sida hal thread (ilaa xisaabinta: wadarta waxaa lagu daraa siyaabo kala duwan). Natiijo kasta oo simulation ah wuxuu tusayaa **N threads** ama **1 thread** iyo sababta hoosta **Solver**.

Threads-ka waxay u baahan yihiin in bogga noqdo **cross-origin isolated** (browser-ku wuxuu oggolaanayaa workers inay xusuus wadaagaan markaas kaliya). Bogga lab-ka waa taas; meelaha aanu noqon, dejintu way sheegtaa ("Bogga ma ahan cross-origin isolated, sidaas darteed solver-yadu waxay ku shaqeeyaan hal thread, wax kasta oo halkan la doorto aan ahayn."), xalkana wuxuu isticmaalaa hal thread. Waxa kale oo shaqeeya siduu u shaqeeyo, jawaabahana isku mid bay yihiin.

Daraasadaha socodka laminar-ka ayaa sidoo kale isticmaala threads (qiyaastii 2.5× ee 4 threads ee 54,000 unug fluid), isla jawaab ilaa lambarka ugu dambeeya. Quadratic-tetrahedron solver iyo heat transfer waxay ku shaqeeyaan hal thread: threading-kooda waxaa la cabbiray inay ka daahan yihiin kombiyuutarka tijaabada (xalinteeda waxaa xaddidaya xawaaraha xusuusta iyo tallaabo aan la kala qaybin karin).

### Server-kaaga gaarka ah

Haddii aad PartCraft ka socodsiiso server-kaaga, wuxuu u shaqeeyaa sida la adeego. Solver threads-ka, u oggolow server-ka inuu bogga PartCraft-ka u diro laba header:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Apache-ka, folder-ka `.htaccess` (waxay u baahan tahay mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

nginx-ka, `location`-ka ee adeega PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Dib u rarso bogga: Dejinta › Solver threads wuxuu bixinayaa **Automatic** oo tirada kombiyuutarkaaga ah. Header-ka labaad wuxuu browser-ka ka dhigaa inuu diido wax kasta oo bogga ka soo dega goob kale oo aan ogolaan, taas oo wanaagsan PartCraft keligiis (wuxuu wax kasta ka soo dejiyaa folder-kiisa).
