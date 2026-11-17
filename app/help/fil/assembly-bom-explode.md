---
title: Parts list, exploded views at paglipat ng mga piyesa
summary: Bigyan ng numero, paglalarawan at materyal ang mga piyesa ng assembly, basahin at i-download ang bill of materials, gumawa ng exploded views na may mga hakbang o awtomatiko, ilipat nang manual ang mga piyesang hindi konektado, itakda ang joint limits, at i-export ang buong assembly bilang STL, 3MF o bill of materials.
keywords: bom, bill of materials, parts list, part number, materyal, density, csv, exploded view, explode, collapse, trail lines, ilipat ang piyesa, drag, gizmo, translate, rotate, joint limits, assembly export, hakbang ng assembly, drawing ng assembly, balloons
from: ebc9f6f3
---

Nasa kanang panel ng assembly ang mga tool na ito (tingnan ang [Bumuo ng assembly](topic:build-assembly)).

## Properties ng piyesa

Piliin ang piyesa sa listahan sa kaliwa. Sa ilalim ng **Properties ng piyesa**, itakda ang:

- **Numero ng piyesa** (hanggang 40 character) at **Paglalarawan** (hanggang 200).
- **Materyal**: karaniwang materyal na may density nito, o **Custom density…** para mag-type sa g/cm³. Ipinapakita ng panel ang mass ng piyesa.

Pag-aari ng piyesa ang mga properties, kaya pareho ang mga ito sa bawat kopya nito. Naka-save ang mga ito sa assembly file.

## Bill of materials

Kapag walang napili (pindutin ang {{key:Esc}}), ipinapakita ng panel ang **Bill of materials**: isang row bawat piyesa, kasama ang item number nito, quantity (ilang kopya), part number, pangalan, materyal at mass. Sumusunod ang item number sa pagkakasunod ng unang paglitaw ng mga piyesa sa listahan. Gumagamit ang mass ng volume ng bawat piyesa (ng faceted solid na binubuo ng mesh kernel, bahagyang mababa sa mga bilog na piyesa) at ng materyal nito; kapag walang materyal ang piyesa, walang mass, at walang total.

{{ui:I-download ang CSV}} ay sine-save ang listahan bilang CSV file (o **Export › Bill of materials (CSV)**). Nabubukas ito sa anumang spreadsheet; ang text na nagsisimula sa = o + ay nilalagyan ng leading apostrophe para hindi ito patakbuhin ng spreadsheet bilang formula.

## Exploded views

Hinihila ng exploded view ang mga piyesa palayo sa isa't isa para sa mga larawan. Hindi nito binabago ang mga joint o ang totoong posisyon ng mga piyesa: ang pag-save, clash checks at exports ay gumagamit ng totoong posisyon.

1. Kapag walang napili, piliin ang {{ui:Bagong view}} sa ilalim ng **Exploded views**.
2. Sa ilalim ng **Magdagdag ng hakbang**, lagyan ng tsek ang mga piyesang ililipat ng hakbang, pumili ng **Direction** (+X … −Z, ang normal ng face na iki-click mo, o **I-drag ang arrow sa view**) at **Distansya**, tapos piliin ang {{ui:Idagdag ang hakbang}}. Gamit ang **Drag**, i-drag ang arrow at bitawan: kukunin ng hakbang ang direksyon at distansyang idinrag mo.
3. Magdagdag pa ng mga hakbang. Sunod-sunod silang tumatakbo.
4. I-drag ang slider sa pagitan ng **Naka-assemble** at **Naka-explode** para i-animate ang view. Ang mga dashed trail line ay tumatakbo mula sa resting position ng bawat piyesa papunta sa kasalukuyan nitong posisyon.

{{ui:Auto (radial)}} ay inilalayo ang bawat piyesa maliban sa naka-ground mula sa gitna ng assembly. {{ui:Auto (joints)}} ay inilalabas ang bawat konektadong piyesa (kasama ang lahat ng nakakabit sa ibaba nito) sa kahabaan ng normal ng face ng joint nito. Puwede kang magtago ng ilang named views; pumili ng isa sa **View**, o **Naka-assemble** para ibalik ang mga piyesa. Naka-save ang views sa assembly file.

## Ilipat ang piyesa gamit ang kamay

Ang piyesang walang joint papunta sa naka-ground na piyesa lang ang puwedeng ilipat nang manual (naka-fixed ang naka-ground na piyesa; ang mga joint ang naglalagay sa iba). Piliin ito at, sa ilalim ng **Ilipat gamit ang kamay**:

- I-type ang **ΔX, ΔY, ΔZ** at piliin ang {{ui:Ilipat}}, o pumili ng axis at **Angle** at {{ui:Paikutin}} (sa paligid ng gitna ng piyesa).
- {{ui:I-drag para ilipat}} ay nagpapakita ng arrows sa piyesa: i-drag ang arrow para gumalaw sa axis na iyon, o ang square para gumalaw sa isang plane. {{ui:I-drag para paikutin}} ay nagpapakita ng rings para paikutin ito. Bawat drag ay isang undo step. {{key:Esc}} ang nagtatago ng arrows.

## Mga limit ng joint

Pumili ng joint na gumagalaw at, sa ilalim ng **Mga limit**, lagyan ng tsek ang **Hawakan … sa pagitan ng limits** para sa alinman sa mga value nito, tapos itakda ang **Minimum** at **Maximum**. Nananatili ang bawat value sa loob ng sarili nitong limits, sakop lang ng slider nito ang saklaw na iyon, at ang **Suriin ang galaw kung may banggaan** ay sumusuyod lang sa pagitan nila. Puwedeng limitahan ng cylindrical joint ang anggulo nito, ang offset nito, o pareho. Kapag binago ang type ng joint, mawawala ang limits sa mga value na wala sa bagong type.

## I-export ang buong assembly

Sa assembly, isinusulat ng **Export** menu ang buong assembly na kasama ang bawat piyesa sa lugar kung saan ito nakalagay:

- **STEP AP242 / AP214** at **Drawing (PDF)** ay hindi pa nagagawa sa bersyong ito: kailangan nila ng exact kernel, kaya naka-gray ang mga ito. I-export ang STEP ng bawat piyesa (exact solid) mula sa piyesa.
- **STL**: isang mesh ng lahat ng piyesa. **3MF**: bawat piyesa nang isang beses, nakalagay nang isang beses sa bawat kopya.
- **Bill of materials (CSV)**.

## Mga limit

- Hindi pa nagagawa sa bersyong ito ang assembly drawing at assembly STEP (kailangan nila ng exact kernel). Ang exploded views ay para sa mga larawan sa screen.
