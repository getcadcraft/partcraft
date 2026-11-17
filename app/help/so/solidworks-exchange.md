---
title: Qaybaha u wareejinta iyo ka soo qaadista moodelayaasha qaybta kale
summary: U dir qayb moodelayaasha kale macro ah oo dib u dhisa iyada oo leh geedka astaamaha nool. STEP magac leh iyo furidda liiska astaamaha ee moodelka kale qortay weli lama dhisin nooca hadda.
keywords: macro, weli lama dhisin, swb, vba, geedka astaamaha, dib-u-soo-celin, macro dhoofin, cadcraft-sw.json, STEP magac leh, ap214, doorsoomayaal caalami ah, isla-gelin, qayb asal ah
from: 97ca61da
---

PartCraft qaybaha la wada wareejiyaa SolidWorks labada jiho, iyada oo aan lahayn nooc fayl oo aan qof kale akhrin karin:

- **Dibedda:** macro (`.swb`, qoraal fudud) oo SolidWorks ku shaqeeyo si uu qaybta isagu u dhiso, astaamo astaamo, oo leh naqshadaheeda, xiriirradeeda, cabbirradeeda, doorsoomayaasha caalami ah iyo isla-gelinteeda. Waxaad heleysaa qayb asal ah oo leh geed astaamo nool, ma aha jir dhintay.
- **Dib-u-soo-celin:** macro aad ku shaqeyso gudaha SolidWorks wuxuu astaamaha iyo isla-gelinta qaybta ku qorayaa fayl `.cadcraft-sw.json`. Furidda faylkaas PartCraft-ka weli lama dhisin nooca hadda (wuxuu u baahan yahay kernel saxda ah).

:::warning
Waxba oo ka mid ah tan weli SolidWorks lagama tijaabin. SolidWorks wuxuu ku shaqeeyaa Windows oo kaliya oo leh shatiga, PartCraft-na macro-kan gudaha uma socon. Macro-yada waxaa loo qoray dukumentiga API-ga SolidWorks waxaana halkan loo hubiyay qaab-dhismeedka. Wax dhibaato ah ka war soo deji; logga uu macro-ku qorayo wuxuu sheegayaa tallaabada fashilantay.
:::

PartCraft ma qori karo fayl `.sldprt`: nooca waa xidhan. Macro-ku waa habka qayb asal ah loo helo.

## U dir qayb macro ahaan

1. Fur qaybta.
2. Dooro {{ui:Dhoofi}}, kadibna {{ui:Macro SolidWorks (.swb)}}. PartCraft wuxuu soo dejiyaa `<part>.swb`; status bar-ku wuxuu sheegayaa in la qoray "adigoon kernel saxda ah lahayn".
3. Sanduuq wuxuu sheegayaa macro-ku imisa astaamood, doorsoomayaal caalami ah iyo isla-gelin dhisayo, wuxuuna liistaa wax kasta oo ka reebay. STEP looma soo dhigo macro-ka dhinaciisa nooca hadda: isticmaal {{ui:Dhoofi}}, kadibna {{ui:STEP (fasedyo, kernel-ka mesh)}} haddii aad u baahan tahay.
4. SolidWorks, dooro **Tools > Macro > Run**, dooro faylka `.swb` oo sug. Wuxuu sameeyaa qayb cusub oo ka timid template-kaaga qaybta caadiga ah, wuxuu dejiyaa millimitir, wuxuuna dhisaa astaamo kasta.
5. Dhamaadka fariin ayaa sheegaysa intee tallaabo ah ee la sameeyay, intee fashilantay, iyo intee la mid ahayd jirka PartCraft. Logga oo buuxa, `<part> macro log.txt`, waxaa lagu qoraa macro-ka dhinaciisa.

Waxa macro-ku dhisaa:

| PartCraft | Qaybta cusub |
|---|---|
| Naqshad diyaarada hore, sare ama midig | Naqshad diyaaradaas ku taal, oo leh xariirradeeda, qaansooyinkeeda, goobooyinkeeda, barooyinkeeda, xiriirradeeda iyo cabbirradeeda (magacyo sida PartCraft, sida `k7`) |
| Naqshad wejig | Naqshad wejigii isku mid ah, la doortay bar ku taal |
| Naqshad diyaarad go'an | Diyaarad tixraac oo mara saddex barood, iyo naqshadda dushiisa |
| Soo saar, goyn (qarsoon, dhammaan, dhexda diyaarada, laba jihood, taper) | Boss-extrude ama cut-extrude |
| Wareeg, goyn wareeg | Wareeg isla khadka dhexe ee |
| God (fudud, counterbore, countersink, tapped) | Hal ama laba goyn oo naqshadahooda gaarka ah (god la tap garay waa tap drill; ma jiro dhuumo) |
| Qaab toosan iyo wareegsan, muraayad | Qaab toosan, qaab wareegsan, muraayad (astaamaha ama jirka) |
| Fillet, chamfer, shell | Fillet, chamfer iyo shell geesaha iyo wejiyada isku mid ah, oo la doortay barooyinka lagu doortay |
| Halbeegyada iyo isla-gelinta | Doorsoomayaal caalami ah iyo isla-gelin cabbirrada magacyada cusub la siiyey |
| Astaamaha la joojiyey, bar-ka rollback | La joojiyey si isku mid ah; bar-ka rollback meesha isku mid ah |

Astaamo jir kasta ka dib macro-ku wuxuu isbarbar dhigaa mugga iyo cabbirka jirka oo PartCraft-ka la yiraahdo. Markay kala duwan yihiin, wuxuu hal mar rogaa jihada astaamahaas oo mar kale hubiyaa; haddii taasi aan wanaagsanayn, wuu soo celiyaa oo log-ga wuxuu qoraa "Check".

### Waxa laga reebay

Sanduuqa iyo madasha macro-ka waxay liistaan wax kasta aan la qaadin, iyo sababta. Maanta taasi waa: jidhyo la soo dhoofiyay (ku geli STEP halkaas), sweep-yo, loft-yo, draft-yo, dhidibada iyo barooyinka tixraaca, shuruudaha "ilaa" ee dhamaadka, soo saarka qaybo kaliya ee konturrada, iyo wax kasta oo ku tiirsan kuwaas. Splaynada waxay noqdaan qalooc ka tirsan barooyinkooda. Nooca hadda kernel saxda ah ma lahan, sidaas darteed naqshadaha wejiyada iyo astaamaha geesaha ama wejiyada doortaa ayaa sidoo kale laga reebay.

## U dir STEP magac leh

Weli lama dhisin nooca hadda: {{ui:STEP for SolidWorks (magac leh, AP214)}} wuxuu u baahan yahay kernel saxda ah, doorashadeedana waxay tiraysaa "STEP for SolidWorks: weli lama dhisin. …". Kernel saxda ah ayaa jirta, faylku wuxuu qaadayaa magaca qaybta, millimitir iyo midabka qaybta, wuxuuna taagayaa Y sida SolidWorks u muujiyo qaybaha (dhoofinta caadiga ah ee {{ui:STEP AP214 (jidh adag oo saxda ah)}} wuxuu taagayaa Z). Xarfaha leh calaamado waxay ka lumaan magaca, astaamaha kale ee ka baxsan ASCII fudud waxay noqdaan `_`.

## Qayb dib u soo celi

Furidda faylka PartCraft-ka (tallaabada 3) weli lama dhisin nooca hadda: wuxuu leeyahay "Furidda dhoofinta SolidWorks: weli lama dhisin. …". App-ka naqshadaha CadCraft wali wuu furaa faylka wuuna qaadaa naqshadahooda.

1. Dooro {{ui:Fayl}} > {{ui:Dhoofi}} > {{ui:Macro dhoofinta si loo soo celiyo qaybaha (.swb)}} si aad u soo dejiso `CadCraftExport.swb`, kadibna ku dhig qaybahaaga dhinaciisa.
2. SolidWorks, fur qaybta, dooro **Tools > Macro > Run** oo dooro `CadCraftExport.swb`. Wuxuu qoraa `<part>.cadcraft-sw.json` dhinaca qaybta wuuna ku beddelin waxba.
3. PartCraft, dooro {{ui:Fur}} oo dooro faylkaas, ama ku riix muuqaalka 3D.
4. Kernel saxda ah ayaa jira, PartCraft wuxuu qaybta dib u dhisaa astaamo astaamo, wuxuuna muujiyaa waxa sameeyay: tusaale "5 ka 5 astaamood ayaa laga soo qaatay SolidWorks (Flange.SLDPRT)", astaamo kasta oo aan qaadi karin ("Lama qaadin: Sweep1 (Sweep).") iyo in mugga uu la mid yahay kii SolidWorks qoray.
5. Ku kaydi qayb PartCraft ah {{ui:Kaydi}}.

Naqshadaha waxay ku dhacaan diyaarad aasaas marka ay ku taalo, wejiga fidsan ee u dhigma qaybta marka uu jiro (si ay ugu raacaan tafatirka dambe), iyo diyaarad go'an haddii kale. Geesaha iyo wejiyada fillet-yada, chamfer-yada iyo shell-yada waxaa laga helaa barooyin oo waxaa lagu hayaa tixraac magac leh. Doorsoomayaasha caalamiga ah waxay noqdaan halbeegyo (magacyada leh meelo banaan waxay helaan hoosaas: "Bolt count" wuxuu noqdaa `Bolt_count`) isla-gelinna waxay noqdaan isla-gelin cabbirrada isku mid ah. Waxba lama saadaaliyo: wax aan lahayn nidaamka tooda waa la liistaa.

App-ka naqshadaha CadCraft isla faylka ayuu furaa wuxuuna qaadaa naqshadahooda.

:::note
Nooca waa `cadcraft-sw-export` nooca 1, JSON qoraal fudud oo millimitir iyo darajo ah. Fayl ka timid macro cusub, ama oo aan sax ahayn, waa la diidaa sababta.
:::
