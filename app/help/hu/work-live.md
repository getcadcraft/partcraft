---
title: Egy alkatrész modellezése a Live TeamWork-kel
summary: Mi változik a PartCraftban, amíg a CadCraft Studio Live TeamWork munkamenetében van: mindenki jellemzői egy fában, minden ablak ugyanazt a testet építi, a saját visszavonás, és csatlakozás böngészőből ugyanazon a hálózaton.
keywords: live, live teamwork, studio live, együtt, együttműködés, munkamenet, megosztás, csatlakozás, jellemzőfa, előzmények, újraépítés, kurzor, mutató, egymás látása, nevek, szín, kijelölés, visszavonás, házigazda
from: 1809b96c
---

## Mit fog megtudni

Mi történik egy alkatrésszel, amíg többen egyszerre modellezik. A CadCraft Studio indítja és csatlakoztatja a Live TeamWork munkamenetet (Megosztás, Csatlakozás); ez az oldal magáról az alkatrészről szól.

## Mindenki egyszerre modellez

Mindenki ugyanazon a jellemzőfán dolgozik: vázlatok, kihúzások, furatok, mintázatok, lekerekítések, paraméterek. Az Ön saját szerkesztései azonnal megjelennek; mások módosításai pár pillanattal később. Csak a fa utazik: minden ablak maga építi fel a testet, és a PartCraft kernele ugyanebből a fából minden ablakban ugyanazt a testet építi.

- **Ketten módosítanak egy jellemzőt:** a különböző beállítások (az egyik a mélység, a másik a végfeltétel) mindkettő megmarad; ugyanazon beállítás a későbbi módosításé lesz.
- **Egy vázlat** egészben utazik: ha ketten egyszerre szerkesztik ugyanazt a vázlatot, a későbbi szerkesztés nyer. Egyezzenek meg, ki melyik vázlatot rajzolja.
- **Egy törölt elemre épülő jellemző** (egy eltávolított vázlat kihúzása, egy eltávolított lapon lévő furat) visszavonásra kerül, az állapotsor pedig megmondja az okát.
- **A fa átrendezését** ellenőrzik: ha ketten egyszerre húznak jellemzőket, a második mozdítás visszavonásra kerül.

## Egymás látása

A munkamenetben mindenkinek saját színe van. Mindenki mutatóját nyílként látja a saját színében, mellette a nevével, azon a lapon, amelyre mutat. Ha kijelöltek egy jellemzőt a fában, annak neve a nevük után jelenik meg.

A mutatók, nevek és kijelölések csak a munkamenetre vonatkoznak: soha nem mentődnek a fájlba, és soha nem kerülnek senki visszavonásába. Úgy siklanak el ahhoz a helyhez, ahol az illető tart, hogy lassú kapcsolaton is simák maradjanak.

## A visszavonás a saját munkáját vonja vissza

A {{key:Mod+Z}} a saját utolsó szerkesztését vonja vissza, mások munkáját érintetlenül hagyja. Ha azóta valaki ugyanazt módosította, semmi sem vonódik vissza, az állapotsor pedig megmondja, ki.

## Csatlakozás böngészőből

A Studio nélküli munkatárs egy telefonnal, táblagéppel vagy számítógéppel ugyanazon a hálózaton beolvashatja a házigazda kódja alatti képet. A PartCraft megnyílik a böngészőben, és miután a házigazda beengedi, betöltődik a házigazda alkatrésze, és felépül. Egy meghívó hivatkozással valaki másik hálózatról is csatlakozhat: a házigazdának egy Team Cloud Plan-licencelt hely kell az alkalmazáshoz, mindenki más ingyen csatlakozik, a hivatkozás pedig csak addig működik, amíg a házigazda munkamenete nyitva van.

## Amikor a munkamenet véget ér

Csak a házigazda menti el az alkatrészt. Mindenki más egy nem mentett másolatot tart meg: mentse el, ha meg akarja őrizni.

:::note
Az összeállításokat a munkamenetben még nem lehet megosztani: a közös munkához nyissa meg magát az alkatrészt.
:::
