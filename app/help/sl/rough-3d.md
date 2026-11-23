---
title: 3D grobo rezkanje in obdelava ostankov
summary: Odstranite surovec okoli celotnega modela po nivojih z ravnim, z zaobljenim robom ali krogličnim rezkalom, pri čemer pustite surovec za dokončanje, nato pa naj manjše orodje reže samo tam, kjer je prvo pustilo material. Kaj poti zagotavljajo in česa ne.
keywords: 3d grobo rezkanje, grobo, obdelava ostankov, ostanki, preostali surovec, surovec za pustiti, korak v globino, nivoji, z nivo, vodna linija, rampa, potopitev, vdor, manjše orodje
from: 29ddc266
---

Dve operaciji v Izdelavi, pod {{ui:Več}} v njeni orodni vrstici, odstranita surovec iz **celotnega modela** v 3D, pri čemer orodje ostane navpično (ali vzdolž lastne [smeri orodja](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) operacije). Ne zahtevata izbire.

## 3D grobo rezkanje

{{ui:3D grobo}} dela od vrha surovca navzdol, po en **korak v globino** naenkrat. Na vsakem nivoju počisti vse, do česar orodje lahko pride, ne da bi se dotaknilo modela: ravne vrste na razdalji **koraka prehoda** (delež premera orodja), nato enkrat okoli roba tega, kar sme doseči, tako da so stene sledene in ne pustijo vrste stopničk v tlorisu.

- **Surovec za pustiti**: kako daleč je orodje od modela povsod za dokončevalni prehod (privzeto 0.5 mm).
- **Nivo pri vsaki ravni ploskvi**: dodatni nivo na višini vsake ravne ploskve modela (plus surovec za pustiti), tako da dno ni pustljeno skoraj za cel korak v globino visoko.
- **Prezri surovec, tanjši od**: material, tanjši od tega, navzgor ali vstran, ni vreden prehoda (0.05 mm za grobo rezkanje, 0.5 mm za obdelavo ostankov, da laska, pustljena ob steni, ne pošlje manjšega orodja okoli vsake stene).
- **Dno**: pod to višino se ne reže ničesar. Prazno pomeni dno modela.

Začne se pri surovcu **kakršen so ga pustile operacije pred njim**: po prehodu planiranja ne reže zraka tam, kjer je bilo čelno rezkalo.

Spuščanje: kjer bi orodje na poti navzdol naletelo na surovec, se spušča po lastnem prehodu pod **kotom rampe**, naprej in nazaj na največ dveh premerih orodja. Prehod, prekratek za to, se navpično potopi s posmikom potopitve; operacija te primere šteje in opozori, ker orodje, ki ne reže na svojem središču, tega ne bi smelo početi.

## Obdelava ostankov

{{ui:Ostanki}} je ista strategija za **manjše orodje za večjim**. Prebere simulacijo surovca in reže samo tam, kjer material še stoji: v notranjih vogalih, v katere večje orodje ni moglo zaviti, v utorih, v katere ni pristajalo, in v stopnicah, ki jih je pustilo na naklonih. Drugod ne naredi ničesar, zato je njegova pot majhen del tistega, kar bi vzelo isto orodje na svežem surovcu.

Postavite jo za operacijo grobega rezkanja in izberite manjše orodje. Potrebuje simulacijo surovca operacij pred njo, ki jo delovno okolje vedno zažene.

## Kako dobre so poti

- **Brez vdora.** Položaji orodja se izračunajo na mreži, pri čemer je rezkalo vzeto malo večje, kot je (za 1.4 celice mreže vstran in za surovec za pustiti), tako da je povsod, kjer stoji, prosto modela. Preizkusi preverijo vsako rezalno točko glede na natančno orodje na natančni mreži in simulacijo surovca po vsakem zagonu: ni vdora, ni hitrega premika skozi surovec.
- **Cena tega**: stene ohranijo malo več kot surovec za pustiti, do zneska, prikazanega kot „Dodatni surovec na stenah“ pri operaciji (približno 0.5 mm za orodje Ø6, manj za manjše). Dokončevalni prehod ga odstrani.

Te poti niso:

- Vrste so ravne črte, ne zamiki oblike dela ali krivulje konstantnega zaseganja. Naredijo več dvigov in premikov v zraku kot zamaknjena ali prilagodljiva strategija, prva vrsta na vsakem nivoju pa reže polno širino orodja. Za žepe z ravnim dnom je boljše grobo rezkanje [Prilagodljivo](topic:manufacture).
- Steblo in držalo orodja se ne preverjata. Opozorilo pove, kadar je rez globlji od dolžine žlebov.
- Podrezi niso zaznani: model je tisto, kar orodje sreča, ko se spušča po svoji osi. Za grobo rezkanje strani dajte drugi operaciji [nagnjeno smer orodja](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Obdelava ostankov pozna surovec samo toliko, kolikor pozna mreža simulacije (celice 0.1 do 2 mm, glede na velikost dela).
- Pri velikem delu je program dolg (več kot 100.000 premikov za 200 mm prirobnico z orodjem Ø6) in izračun traja približno minuto, vsaka sprememba v delovnem okolju pa ponovno izračuna celoten program. Za grobo rezkanje uporabite največje orodje, ki se prilega.
- Pred rezanjem preverite izhod v simulatorju svojega stroja.
