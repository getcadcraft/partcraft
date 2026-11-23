---
title: 4- a 5osé obrábění
summary: Řekněte PartCraftu, které rotační osy stroj má, nakloňte nástroj pro libovolnou běžnou operaci, dokončete plochu kulovou frézou, která se během řezu naklání, nebo otáčejte díl pod nástrojem na čtvrté ose. Co se zapisuje do G-kódu a co nebylo ověřeno.
keywords: 5osé, pětiosé, 4osé, čtvrtá osa, víceosé, 3+2, indexované, polohové, náklon, nakloněný nástroj, rotační, kyvný stůl, stůl, hlava, osa A, osa B, osa C, TCP, RTCP, střed hrotu nástroje, G43.4, inverzní čas, G93, kinematika, střed otáčení, swarf, úhel předklonu
from: c4f1c491
---

Výroba umí držet nástroj pod úhlem a umí během řezu pohybovat rotačními osami. Tři věci to dělají, od nejjednodušší po nejsložitější.

**Nic zde nebylo spuštěno na stroji.** Dráhy jsou ověřeny geometrií testy a G-kód je čten zpět, ale vestavěné postprocesory sledují zdokumentované kódy řídicích systémů, ne žádný konkrétní stroj. Ověřte program v simulátoru vašeho řídicího systému a ve vzduchu, než se dostane ke kovu.

## Rotační osy stroje

Na kartě **Upnutí** říká {{ui:Rotační osy}}, co stroj má:

| Volba | Stroj |
|---|---|
| Žádná (3 osy) | Obyčejná frézka. Každá operace, která potřebuje nakloněný nástroj, varuje a postprocesor ji nezapíše. |
| A (otáčí se kolem X) | Jedna rotační osa podél X: stůl čtvrté osy nebo indexer. Nástroj se může naklonit jen v rovině Y–Z. |
| B (otáčí se kolem Y) | Jedna rotační osa podél Y. Nástroj se může naklonit jen v rovině X–Z. |
| A a C | Naklápěcí osa kolem X nesená, nebo nesoucí, otočením kolem Z: kyvný stůl nebo hlava. |
| B a C | Totéž s náklonem kolem Y. |

Pak:

- **Nese**: {{ui:Stůl (díl se otáčí)}} nebo {{ui:Hlava (nástroj se otáčí)}}. Stůl se otáčí opačným směrem, aby přivedl stejnou plochu pod nástroj, takže znaménko každého úhlu z toho vyplyne.
- **Řídicí systém drží hrot nástroje na dráze (TCP)**: je-li zapnuto, X Y Z v programu je hrot nástroje v souřadnicích dílu a řídicí systém zbytek udělá (vestavěné postprocesory ve stylu Fanuc a LinuxCNC zapisují `G43.4` pro délku nástroje). Je-li vypnuto, na stroji se stolem PartCraft zapisuje X Y Z tak, jak otočný stůl nese díl, kolem **středu otáčení**, který zadáte (v souřadnicích obrobku; 0, 0, 0, je-li počátek obrobku ve středu). Stroj s hlavou potřebuje TCP zapnuté: bez něj by program potřeboval délku výkyvu stroje, kterou PartCraft nezná.
- **Mez náklonu**: jak daleko naklápěcí osa jede.

Stroje se liší v tom, který směr pokládají za kladný. Pokud se osa na vašem stroji otáčí špatným směrem, změňte znaménko v kopii postprocesoru ([Upravitelné postprocesory](topic:post-processors)).

## Nakloněný nástroj pro běžnou operaci

Každá frézovací operace (plocha, kapsa, adaptivní, obrys, vrtání, sražení hrany, rovnoběžné, konstantní převýšení, 3D hrubování, zbytky) má **Náklon nástroje** a **Naklonit směrem**: směr nástroje pro tuto operaci samotnou, měřený od osy nástroje z upnutí. Je to 3+2 obrábění: rotační osy přejdou do polohy a zůstanou tam, zatímco tři osy řežou.

- Napište dva úhly, nebo stiskněte {{ui:Nástroj kolmo k ploše}} a klikněte na rovnou plochu: nástroj na ni bude mířit přímo.
- Vyberte plochy a hrany operace jako obvykle. To, co je počítáno jako dno nebo díra, se posuzuje podél nakloněného nástroje.
- Polotovar pro ten směr je krabice, která drží otočený polotovar, takže výšky a odstupy jsou z té strany bezpečné.

V G-kódu se před operací nástroj zvedne, rotační osy se otočí a nástroj sjede nad svůj první bod. Na stroji se stolem bez TCP zůstávají oblouky oblouky a pevné vrtací cykly zůstávají cykly (zapsaný rámec se otáčí jen kolem Z). S TCP v nakloněné rovině se oblouky změní na krátké čáry a cykly na pohyby, které představují.

Simulace polotovaru běží nakloněný směr **samostatně**: ukazuje, co tato operace řeže z celého polotovaru viděného z její strany, a najde tam vrypy, ale řezy z jiných směrů se nepřenášejí.

## 5osé dokončování

{{ui:Více}} na panelu nástrojů Výroby vypisuje tuto operaci a další nahoře na kartě **Operace**.

{{ui:5osé}} je [rovnoběžný dokončovací průchod](topic:finish-3d) s **kulovou frézou, která se během pohybu naklání**. Kulová fréza řeže koulí a koule je stejná, ať se nástroj naklání kolem svého středu jakkoli, takže kulička přesně sleduje dráhu, kterou by dal třídráhový průchod, a mění se jen směr nástroje:

- **Směrem k ploše**: 1 = kolmo k ploše, 0 = svisle, cokoli mezi tím.
- **Předklon**: stupně podél směru řezu, aby se řezalo jiným bodem kuličky než jejím klidným středem.
- **Největší náklon**: nástroj se nikdy neskloní dál od osy upnutí než tohle.

Kde by stopka narazila do modelu, náklon se vrátí, dokud nebude volný, a operace řekne, v kolika bodech k tomu došlo. Každý průchod se zavede a opustí přímým zdvihem.

## Dokončování čtvrtou osou

{{ui:Rotační}} je pro díl upnutý podél **osy X obrobku** na rotační ose. Díl se otáčí a kulová fréza, vždy mířící na osu, sleduje jeho plochu:

- **Průchody**: {{ui:Podél osy}} (čáry podél X, jeden posun mezi drahami otočení od sebe) nebo {{ui:Kolem dílu}} (kruhy, jeden posun mezi drahami X od sebe).
- **Osa v Y / Z**: kde osa je. Prázdné znamená střed polotovaru. Na stroji se stolem bez TCP to musí být střed otáčení v Upnutí; operace varuje, když tomu tak není.
- **Od / Do X** a **Od / Do úhlu**: část délky a otočení, která se řeže.

Výška kuličky nad osou v každém bodě je přesný pokles koule na síti dílu z té strany.

## Omezení

- 5osé a rotační dokončování berou jen **kulovou frézu**. Nedělá se řezání bočním nástrojem (strana nástroje na přímé stěně), žádné proudové čáry podél vlastních směrů plochy, žádné vícenápravové hrubování a žádná automatická volba náklonu, aby se předešlo kolizi.
- 5osé a rotační dráhy **nejsou spuštěny simulací polotovaru**, která je výšková mapa a nemůže držet naklápěný řez.
- Stopka se v 5osém dokončování kontroluje proti modelu viděnému shora; držák, vřeteno a samotný stroj se nekontrolují nikde.
- Rotační dokončování řeže jen to, co nástroj vidí při pohledu na osu.
- 5osé dokončování trvá u velkého dílu minutu nebo déle, než se spočítá: stopka se kontroluje v každém bodě každého průchodu.
- Když se rotační osy pohybují společně s lineárními a TCP je vypnuto, vestavěné postprocesory zapisují posuv jako inverzní čas (`G93`) a pak se vracejí na `G94`.
- Nezapisuje se kód nakloněné pracovní roviny (`G68.2` a podobné) a nejsou známy žádné limity specifické pro stroj, odvíjení ani kolizní zóny.
