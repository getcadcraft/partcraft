---
title: A nézetkocka
summary: Kattintson a kocka egyik lapjára, élére vagy sarkára, hogy onnan nézzen rá; húzza a forgatáshoz, forgassa az iránytű gyűrűjét, lépjen körbe egy szembenéző nézeten, és térjen vissza a kezdőnézetbe.
keywords: nézetkocka, viewcube, kocka, iránytű, észak, kezdőnézet, szabványos nézetek, felül, elöl, jobbra, izometrikus, sarok, él, körbeforgatás, nézet forgatása, tengelyikon, sarokjelző, navigáció
from: afc33dc7
---

A nézetkocka a 3D-nézet jobb felső sarkában van (vázlatkészítés vagy a rajzlap közben nincs). Együtt forog a nézettel, így mindig mutatja, merre néz: a kocka {{ui:Top}} lapja az alkatrész +Y oldala (a felső sík), a {{ui:Front}} lapja a +Z oldal (az elülső sík Önre néz, amikor ránéz), a {{ui:Right}} lapja a +X oldal. Addig átlátszó marad, amíg rá nem mutat.

## Nézet oldalról, élről vagy sarokból

1. Mutasson a kockára. A mutató alatti rész kigyullad: egy lap közepe, egy él (mindkét lap, amely osztozik rajta, kigyullad) vagy egy sarok (mind a három lapon).
2. Kattintson rá. A nézet odafordul, megtartva ugyanazt a középpontot és nagyítást.

26 hely van, amire kattinthat: 6 lap ({{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}), 12 él és 8 sarok. A sarok a klasszikus háromnegyedes nézetet adja; egy él két lap között félúton néz.

Az {{ui:Front}}, {{ui:Top}} vagy {{ui:Right}} kattintása ugyanazokat a nézeteket adja, mint az eszköztár {{ui:Views}} menüje, a nagyítás illesztése nélkül.

## Forgatás a kocka húzásával

Húzza a kockát a nézet forgatásához, ugyanúgy, mint a nézeten belüli körbeforgatáskor. Húzást soha nem kezelnek kattintásként, így a kockát bárhol megfoghatja.

## Az iránytű gyűrűje

A kocka alatti gyűrűn É, K, D és Ny betűk vannak.

- **Húzza a gyűrűt**, hogy a modellt a függőleges tengely körül forgassa, mintha egy forgóasztalon állna. A gyűrű követi a mutatót.
- **Kattintson egy betűre**, hogy arról az oldalról nézzen, megtartva, milyen meredeken néz lefelé. Felülről nézve a rákattintott betű a képernyő alja felé kerül.

## Szembenéző nézetek: nyilak

Amikor egyenesen egy lapra néz, kis nyilak jelennek meg a kocka körül:

- A négy **háromszög** az adott oldali lapot hozza elé: a kocka feletti háromszög azt a lapot mutatja, amely felül volt, és így tovább.
- A két **íves nyíl** a jobb felső sarokban negyedfordulattal elforgatja a képet az óramutató járásával megegyező vagy ellentétes irányban, anélkül hogy megváltoztatná, melyik lapra néz. Alaprajz elforgatására használja, hogy egy hosszú fal keresztben fusson a képernyőn.

## Kezdőnézet

A kocka bal felső sarkában lévő házgomb visszatér a háromnegyedes nézetre, és az alkatrészt a képbe illeszti. A {{key:Home}} billentyű ugyanezt teszi, amíg a kocka kapja a billentyűzeti fókuszt.

## Billentyűzettel

A {{key:Tab}} billentyűvel lépjen a kockára, majd:

| Billentyű | Mit tesz |
|---|---|
| {{key:left}} / {{key:right}} | válasszon egy oldalt, élt vagy sarkot a kocka körül, nyolcadfordulatos lépésekben (a képernyőolvasók mondják, melyik az) |
| {{key:up}} / {{key:down}} | válasszon magasabb vagy alacsonyabb elemet, egészen a {{ui:Top}} lapig felfelé vagy a {{ui:Bottom}} lapig lefelé |
| {{key:Enter}} vagy {{key:Space}} | nézzen a kiválasztottról |
| {{key:Shift+left}} / {{key:Shift+right}} | fordítsa el a nézetet negyedfordulattal a függőleges tengely körül |
| {{key:Home}} | a kezdőnézet |
| {{key:Esc}} | lépjen ki a kockából |

A kockán megnyomott billentyűk a kockánál maradnak: nem indítanak PartCraft-eszközöket.

## Tengelyikon vagy semmi

Nyissa meg a(z) {{ui:Settings}} elemet ({{key:Mod+,}}), a(z) {{ui:PartCraft}} lapot, és állítsa a **Sarokjelző** értékét {{ui:View cube}} (az indulás), {{ui:Axis icon}} (egy kis X, Y, Z jel bal alul: X piros, Y zöld, Z kék) vagy {{ui:None}} értékre. Ez a böngésző megjegyzi a választást. Lásd: [A PartCraft beállításai](topic:settings#corner-indicator).

:::note
A kocka úgy mutatja az alkatrészt, ahogyan a PartCraft építi: az Y felfelé mutat, így a kocka {{ui:Top}} lapja a felső sík. Az iránytű betűi csak a forgatáshoz valók; egy alkatrésznek nincs északja.
:::
