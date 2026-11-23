---
title: 4- in 5-osna obdelava
summary: Povejte PartCraft, katere rotacijske osi ima stroj, nagnite orodje pri vsaki običajni operaciji, dokončajte površino s krogličnim rezkalom, ki se med rezanjem nagiba, ali obrnite del pod orodjem na 4. osi. Kaj se zapiše v G-kodo in kaj ni bilo dokazano.
keywords: 5 osi, pet osi, 4 osi, četrta os, večosno, večosna, 3+2, indeksirano, pozicijsko, nagib, nagnjeno orodje, rotacijski, nagibna miza, glava, os A, os B, os C, TCP, RTCP, središče konice orodja, G43.4, inverzni čas, G93, kinematika, vrtišče, rezanje s stranico, kot vodenja
from: c4f1c491
---

Izdelava lahko drži orodje pod kotom in lahko med rezanjem premika rotacijske osi. To omogočajo tri stvari, od najpreprostejše navzgor.

**Nič tukaj ni bilo izvedeno na stroju.** Poti preizkusi preverijo glede na geometrijo in G-koda se prebere nazaj, vendar vgrajeni postprocesorji sledijo dokumentiranim kodam krmilnikov, ne kateremu koli stroju pred nami. Program dokažite v simulatorju svojega krmilnika in v zraku, preden se sreča s kovino.

## Rotacijske osi stroja

Na zavihku **Nastavitev** {{ui:Rotacijske osi}} pove, kaj ima stroj:

| Izbira | Stroj |
|---|---|
| Brez (3 osi) | Navaden rezkalnik. Vsaka operacija, ki zahteva nagnjeno orodje, opozori, postprocesor pa je ne zapiše. |
| A (vrti okoli X) | Ena rotacijska os vzdolž X: 4. osna miza ali indeksator. Orodje se lahko nagiba samo v ravnini Y–Z. |
| B (vrti okoli Y) | Ena rotacijska os vzdolž Y. Orodje se lahko nagiba samo v ravnini X–Z. |
| A in C | Nagibna os okoli X, ki jo nosi ali ki nosi zasuk okoli Z: nagibna miza ali glava. |
| B in C | Enako z nagibom okoli Y. |

Nato:

- **Nosi**: {{ui:Miza (del se vrti)}} ali {{ui:Glava (orodje se vrti)}}. Miza se vrti v nasprotno smer, da pride ista ploskev pod orodje, zato predznak vsakega kota izhaja iz tega.
- **Krmilnik drži konico orodja na poti (TCP)**: ob vklopu so X Y Z v programu konica orodja v lastnih koordinatah dela, krmilnik pa opravi ostalo (vgrajeni postprocesorji Fanuc-style in LinuxCNC zapišejo `G43.4` za dolžino orodja). Ob izklopu na mizni napravi PartCraft zapiše X Y Z, ko obrnjena miza nosi del, okoli **središča vrtenja**, ki ga podate (v delovnih koordinatah; 0, 0, 0, kadar je ničelna točka obdelovanca na središču). Stroj z glavo potrebuje vklopljen TCP: brez njega bi program potreboval dolžino vrtišča stroja, ki je PartCraft ne pozna.
- **Omejitev nagiba**: kako daleč gre nagibna os.

Stroji se razlikujejo v tem, katera smer šteje kot pozitivna. Če se os na vašem vrti v napačno smer, spremenite predznak v kopiji postprocesorja ([Postprocesorji, ki jih lahko urejate](topic:post-processors)).

## Nagnjeno orodje za običajno operacijo

Vsaka operacija rezkanja (ploskev, žep, prilagodljivo, kontura, vrtanje, posnetje, vzporedno, grebenasto, 3D grobo, ostanki) ima **Nagib orodja** in **Nagni proti**: smer orodja samo za to operacijo, merjeno od osi orodja nastavitve. To je 3+2 obdelava: rotacijske osi gredo v položaj in ostanejo tam, medtem ko tri osi režejo.

- Vpišite oba kota ali pritisnite {{ui:Orodje pravokotno na ploskev}} in kliknite ravno ploskev: orodje bo kazalo naravnost vanjo.
- Izberite ploskve in robove operacije kot ponavadi. Kaj šteje za dno ali luknjo, se presodi vzdolž nagnjenega orodja.
- Surovec za to smer je kvader, ki drži obrnjeni surovec, zato so višine in odmiki s te strani varni.

V G-kodi se pred operacijo orodje dvigne, rotacijske osi se obrnejo in orodje se spusti nad svojo prvo točko. Na mizni napravi brez TCP ostanejo loki loki in fiksni cikli vrtanja ostanejo cikli (zapisani okvir se obrne samo okoli Z). Z vklopljenim TCP v nagnjeni ravnini se loki spremenijo v kratke črte, cikli pa v premike, ki jih predstavljajo.

Simulacija surovca izvede nagnjeno smer **samostojno**: prikaže, kaj ta operacija reže iz celotnega surovca, gledanega s svoje strani, in tam najde vdore, vendar rezi, narejeni iz drugih smeri, niso preneseni.

## 5-osno dokončevanje

{{ui:Več}} v orodni vrstici Izdelave na vrhu zavihka **Operacije** našteje to operacijo in naslednjo.

{{ui:5 osi}} je [vzporedni dokončevalni prehod](topic:finish-3d) s **krogličnim rezkalom, ki se med premikanjem nagiba**. Kroglica reže s kroglo, ta pa je enaka, v katero koli smer se orodje nagiba okoli svojega središča, zato kroglica natanko sledi poti, ki bi jo dal 3-osni prehod, spremeni se samo smer orodja:

- **Proti površini**: 1 = pravokotno na površino, 0 = navpično, vmes poljubno.
- **Nagib naprej**: stopinje vzdolž smeri reza, tako da mirno središče kroglice ni tisto, ki reže.
- **Največji nagib**: orodje se nikoli ne nagne bolj od tega glede na os nastavitve.

Kjer bi se steblo dotaknilo modela, se nagib zmanjša, dokler ni prost, operacija pa pove, na koliko točkah. Vsak prehod se vstopi in zapusti z ravnim dvigom.

## Rotacijsko dokončevanje (4. os)

{{ui:Rotacija}} je za del, vpet vzdolž **delovnega X** na rotacijski osi. Del se vrti, kroglično rezkalo, vedno usmerjeno proti osi, pa sledi njegovi površini:

- **Prehodi**: {{ui:Vzdolž osi}} (črte vzdolž X, na razdalji enega koraka obrata) ali {{ui:Okoli dela}} (obroči, na razdalji enega koraka X).
- **Os pri Y / Z**: kje je os. Prazno pomeni sredino surovca. Na mizni napravi brez TCP mora biti to središče vrtenja v Nastavitvi; operacija opozori, kadar ni.
- **Od / Do X** in **Od / Do kota**: del dolžine in obrata, ki ga režemo.

Višina kroglice nad osjo v vsaki točki je natančen spust krogle na mrežo dela, s te strani.

## Omejitve

- 5-osno in rotacijsko dokončevanje sprejemata samo **kroglično rezkalo**. Ni rezanja s stranico (swarf; stran orodja ob ravni steni), ni tokovnic vzdolž lastnih smeri površine, ni večosnega grobega rezkanja in ni samodejne izbire nagiba za izogib trku.
- Poti 5-osne in rotacijske obdelave **niso speljane skozi simulacijo surovca**, ki je višinska karta in ne more obdržati nagnjenega reza.
- Steblo se pri 5-osnem dokončevanju preveri glede na model, gledan od zgoraj; držalo, vreteno in sam stroj se nikjer ne preverjajo.
- Rotacijsko dokončevanje reže samo to, kar orodje vidi, ko gleda v os.
- 5-osno dokončevanje na velikem delu traja več kot minuto za izračun: steblo se preveri v vsaki točki vsakega prehoda.
- Kadar se rotacijske osi premikajo skupaj z linearnimi in je TCP izklopljen, vgrajeni postprocesorji zapišejo posmik kot inverzni čas (`G93`), nato pa se vrnejo na `G94`.
- Kode nagnjene delovne ravnine (`G68.2` in podobne) se ne zapisujejo, omejitve, odvijanje ali območja trkov, specifična za stroj, pa niso znana.
