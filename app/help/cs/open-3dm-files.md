---
title: Otevření modelu .3dm jako plného tělesa
summary: Přeneste sítě, polyplochy a bloky souboru .3dm do PartCraft jako jedno plné těleso, které lze řezat, přidávat a kreslit na něj náčrt; odkud pocházejí trojúhelníky a co se vynechá.
keywords: 3dm, nurbs, polyplocha, brep, plochy, vykreslovací síť, vytažení, bloky, import, síť na těleso, jednotky, importované těleso
from: 8ae9571b
---

PartCraft otevírá soubory `.3dm` jako **plná tělesa**, stejně jako [síť STL, OBJ nebo 3MF](topic:open-meshes). Těleso se chová jako každé jiné: řežte ho, přidávejte k němu, vrtejte, vzorujte a kreslete na jeho rovné plochy náčrt. Vlastní historii nemá.

## Otevření souboru

1. Zvolte {{ui:Otevřít}} nebo stiskněte {{key:Mod+O}} a vyberte soubor `.3dm`. Nebo jej přetáhněte do 3D pohledu.
2. PartCraft soubor načte a ukáže, co našel: kolik objektů s plochami přichází, kolik ploch pochází ze sítí uložených v souboru a kolik jich PartCraft převedl na trojúhelníky, každou opravu a zda výsledek **uzavírá**.
3. Zkontrolujte **Jednotky v souboru** (soubor je uvádí sám; jednotka, kterou PartCraft nezná, například yardy, se převede na milimetry) a **Nahoru v souboru**.
4. Zvolte {{ui:Otevřít jako těleso}}, nebo **Použít to pro** a {{ui:Přidat k tomuto dílu}}, pokud díl už prvky má.

## Odkud pocházejí trojúhelníky

PartCraft staví tělesa v této verzi z trojúhelníků, takže každá plocha v souboru se stane malými rovnými plochami. U každé plochy polyplochy (a každého vytažení) vezme **vykreslovací síť uloženou v souboru**, pokud tam je, jinak ji **převede na trojúhelníky sám** (roviny, NURBS plochy, rotační plochy, vytažené křivky a vytažení, ořezané svými hranami). Plochy jedné polyplochy sdílejí své body hran, takže uzavřená polyplocha přichází uzavřená. Plocha na druhu povrchu, který PartCraft zatím nečte, se vynechá a dialog uvede, kolik jich bylo a jakého druhu; výsledek pak obvykle neuzavře.

## Vše v souboru se stane jedním tělesem

Každá viditelná síť, polyplocha a vytažení a každé umístění bloku se dostanou do **jednoho** tělesa, kam je soubor umístí. Objekty skryté nebo na vypnuté vrstvě se vynechají. Obsahuje-li soubor několik oddělených těles, má těleso několik kusů: chcete-li je mít jako samostatná tělesa, otevřete každé z vlastního souboru.

## Co se vynechá (a řekne se)

Křivky, body, mračna bodů, text, kóty, šrafy a světla se vynechají: těleso bere jen plochy. Vynechají se také objekty SubD (převeďte je nejprve na sítě nebo polyplochy v programu, který soubor vytvořil), bloky propojené z jiných souborů, a barvy, vrstvy a názvy (tělesa PartCraft zde žádné vlastní nemají).

## Když se nezavře

Otevřené polyplochy a plochy (jediná ořezaná plocha, tvar s chybějící stěnou) nemají vnitřek, takže nemohou být tělesem. Dialog uvede, kolik otvorů zbylo, a nic nepřidá. Spojte nebo uzavřete tvar v programu, který jej vytvořil, uložte a otevřete znovu. Viz [Když síť neuzavírá](topic:open-meshes#when-a-mesh-does-not-close).
