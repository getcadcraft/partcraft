---
title: Alkatrészlista, robbantott nézetek és mozgatható alkatrészek
summary: Adjon az összeállítás alkatrészeinek számot, leírást és anyagot, olvassa és töltse le az anyagjegyzéket, készítsen robbantott nézeteket lépésekkel vagy automatikusan, mozgassa kézzel a nem csatlakoztatott alkatrészeket, állítsa be a kapcsolatok határait, és exportálja az egész összeállítást STL, 3MF vagy anyagjegyzék formában.
keywords: anyagjegyzék, bom, alkatrészlista, alkatrészszám, anyag, sűrűség, csv, robbantott nézet, robbantás, összecsukás, nyomvonal, alkatrész mozgatása, húzás, nyíl, eltolás, forgatás, kapcsolat határai, összeállítás exportálása, összeállítási lépés, összeállítási rajz, tételszámok
from: ebc9f6f3
---

Ezek az eszközök az összeállítás jobb oldali panelén találhatók (lásd: [Összeállítás készítése](topic:build-assembly)).

## Alkatrész tulajdonságai

Jelöljön ki egy alkatrészt a bal oldali listában. Az **Alkatrész tulajdonságai** alatt állítsa be:

- **Alkatrészszám** (legfeljebb 40 karakter) és **Leírás** (legfeljebb 200 karakter).
- **Anyag**: egy gyakori anyag a sűrűségével, vagy az **Egyéni sűrűség…** lehetőség, ahol g/cm³ egységben adhatja meg a sűrűséget. A panel ezután megjeleníti az alkatrész tömegét.

A tulajdonságok az alkatrészhez tartoznak, így minden másolata közösen használja őket. Az összeállítási fájlban mentésre kerülnek.

## Anyagjegyzék

Ha semmi nincs kijelölve ({{key:Esc}}), a panelen az **Anyagjegyzék** jelenik meg: alkatrészenként egy sor, benne a tételszám, a darabszám (hány másolat van), az alkatrészszám, a név, az anyag és a tömeg. A tételszámok abban a sorrendben követik egymást, ahogyan az alkatrészek először megjelennek a listában. A tömeg az egyes alkatrészek térfogatából és anyagából számítódik (a háló-kernel által készített, lapokból álló testből, amely kerek alkatrészeknél kissé kevesebbet ad). Anyag nélküli alkatrésznek nincs tömege, és ilyenkor összesítés sincs.

A {{ui:CSV letöltése}} a listát CSV-fájlként menti (ugyanez elérhető az **Exportálás › Anyagjegyzék (CSV)** menüpontból is). Bármely táblázatkezelőben megnyitható. Az = vagy + jellel kezdődő szöveg elé aposztróf kerül, hogy a táblázatkezelő ne futtassa képletként.

## Robbantott nézetek

A robbantott nézet képekhez szedi szét az alkatrészeket. Soha nem változtatja meg a kapcsolatokat vagy az alkatrészek valódi helyzetét: a mentés, az ütközésvizsgálat és az exportálás a valódi pozíciókat használja.

1. Ha nincs semmi kijelölve, a **Robbantott nézetek** alatt válassza a {{ui:Új nézet}} gombot.
2. Az **Lépés hozzáadása** részben jelölje be azokat az alkatrészeket, amelyeket a lépés mozgat, válasszon **Irányt** (+X … −Z, egy kattintott lap normálisa, vagy a **Nyíl húzása a nézetben**), adja meg a **Távolságot**, majd válassza a {{ui:Lépés hozzáadása}} gombot. **Húzás** esetén húzza a nyilat, majd engedje el: a lépés a húzással megadott irányt és távolságot veszi fel.
3. Adjon hozzá további lépéseket. Ezek egymás után játszódnak le.
4. Húzza a csúszkát az **Összeszerelt** és a **Robbantott** között a nézet animálásához. A szaggatott nyomvonal-vonalak minden alkatrész nyugalmi helyzetétől a jelenlegi helyzetéig húzódnak.

A {{ui:Auto (sugárirányú)}} minden alkatrészt eltol az összeállítás közepétől, kivéve a rögzített alkatrészt. Az {{ui:Auto (kapcsolatok)}} minden csatlakoztatott alkatrészt (az alatta csatlakozó elemekkel együtt) a kapcsolata lapjának normálisa mentén mozgat ki. Több nevesített nézetet is megtarthat: a **Nézet** mezőben válasszon egyet, vagy az **Összeszerelt** lehetőséget az alkatrészek visszahelyezéséhez. A nézetek az összeállítási fájlban mentésre kerülnek.

## Alkatrész mozgatása kézzel

Kézzel csak olyan alkatrész mozgatható, amelynek nincs kapcsolata a rögzített alkatrésszel (a rögzített alkatrész helyben marad; a kapcsolatok helyezik el a többit). Jelölje ki, majd a **Mozgatás kézzel** alatt:

- Adja meg a **ΔX, ΔY, ΔZ** értékeket, és válassza a {{ui:Mozgatás}} gombot, vagy válasszon tengelyt és **Szöget**, majd a {{ui:Forgatás}} gombot (az alkatrész közepe körül).
- A {{ui:Húzás a mozgatáshoz}} nyilakat jelenít meg az alkatrészen: húzzon egy nyilat a tengely menti mozgatáshoz, vagy egy négyzetet a síkbeli mozgatáshoz. A {{ui:Húzás a forgatáshoz}} gyűrűket mutat a forgatáshoz. Minden húzás egy visszavonási lépés. A {{key:Esc}} billentyű elrejti a nyilakat.

## Kapcsolatok határai

Jelöljön ki egy mozgó kapcsolatot, majd a **Határok** alatt pipálja be a **… tartása a határok között** lehetőséget bármelyik értékénél, és állítsa be a **Minimumot** és a **Maximumot**. Minden érték a saját határai között marad, a csúszkája csak ezt a tartományt fedi le, és az {{ui:A mozgás ütközésvizsgálata}} csak ezek között végez ellenőrzést. Hengeres kapcsolatnál a szög, az eltolás vagy mindkettő korlátozható. Ha a kapcsolat típusát megváltoztatja, azoknak az értékeknek a határai törlődnek, amelyek az új típusnál nincsenek meg.

## Az egész összeállítás exportálása

Összeállításban az **Exportálás** menü az egész összeállítást írja ki, minden alkatrészt a helyén:

- A **STEP AP242 / AP214** és a **Rajz (PDF)** ebben a verzióban még nincs elkészítve: pontos kernelt igényelnek, ezért szürkítve vannak. Helyette minden alkatrészt külön exportálhat STEP formátumban (pontos test) az alkatrészből.
- **STL**: az összes alkatrész egyetlen hálója. **3MF**: minden alkatrész egyszer szerepel, másolatonként egyszer elhelyezve.
- **Anyagjegyzék (CSV)**.

## Korlátok

- Az összeállítási rajz és az összeállítás STEP-fájlja ebben a verzióban még nincs elkészítve (pontos kernelt igényelnek). A robbantott nézetek a képernyőn megjelenő képekhez valók.
