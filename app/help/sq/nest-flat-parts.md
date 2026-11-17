---
title: Vendos pjesët e sheshta në fleta
summary: Shtri pjesët e sheshta mbi pllaka ose rul me sa më pak mbetje që PartCraft mund të gjejë, kurrë më afër se hapësira që jep ti, dhe ruaje planimetrinë si DXF për lazerin, plazmën, jetin e ujit ose frezën.
keywords: vendosje, vendos, fletë, pllakë, rul, lazer, plazmë, jet uji, frezë, prerje, përdorimi i materialit, rendiment, mbetje, hedhurina, hapësirë, gjerësi prerjeje, kokrrë, drejtimi i valsimit, dxf, model i sheshtë, konturet
from: 8dcce1a6
---

**Vendosja** vendos shumë pjesë të sheshta mbi një fletë, në mënyrë që të mbetet sa më pak material. PartCraft i vendos pjesët një nga një, secilën aty ku e mban sa më të shkurtër gjatësinë e përdorur të fletës, provon disa renditje dhe kthesa brenda pak sekondash dhe e mban më të mirën. Pjesët mund të qëndrojnë në vrimat e njëra-tjetrës dhe në zgavrën e një L ose U.

## Hape

- {{ui:Eksporto}} › {{ui:Vendos pjesët e sheshta në fleta…}} e hap me modelin e sheshtë të pjesës ose — në një montim — me modelin e sheshtë të çdo pjese llamarine, aq sa janë kopjet.
- Në një pjesë llamarine, {{ui:Shtrije}} dhe pastaj {{ui:Vendos në fleta…}} nën modelin e sheshtë.
- {{ui:Shto kontura nga një DXF…}} shton çdo kontur të mbyllur në një skedar DXF si pjesë: një vizatim nga CadCraft i ruajtur si DXF, ose një skedar nga programi i vetë prerësit tënd. Një kontur brenda një tjetri është vrimë në të. Vijat dhe harqet që lidhen skaj më skaj numërohen si një kontur. Skedarët në inç, centimetra ose metra kthehen në milimetra.

:::note
Shtrirja e llamarinës kërkon një kernel gjeometrie të saktë (shih [Llamarina](topic:sheet-metal)). Konturet nga një skedar DXF funksionojnë gjithmonë.
:::

## Përgatit

Për çdo pjesë jep **sa** të duhen dhe **drejtimin e kokrrës**: {{ui:Çdo drejtim}}, {{ui:Përgjatë fletës (siç është vizatuar)}} për llamarinë e lëmuar ose të valsuar që duhet të shkojë në një drejtim, ose {{ui:Tërthor fletës}}.

Te **Fletët**:

- **Stoku**: {{ui:Pllaka}} me gjatësi dhe gjerësi të caktuar (dhe sa ke; 0 = sa duhen), ose {{ui:Një rul}} me gjerësi të caktuar, sa të duhet e gjatë.
- **Kufiri i skajit** mbahet i lirë në çdo skaj të fletës (për pinca, ose për një skaj të çrregullt).
- **Hapësira midis pjesëve** është distanca më e vogël midis dy vijave të prerjes: të paktën gjerësia e prerjes së prerësit tënd, plus atë që kërkon materiali.
- **Kthesat**: këndet në të cilat mund të rrotullohet një pjesë, çdo 90° si parazgjedhje. Më pak kthesa punojnë më shpejt; më shumë mund ta shfrytëzojnë më mirë fletën.
- **Pjesët mund të kthehen** lejon që një pjesë të vendoset përmbys. Lëreni të çaktivizuar për llamarinën: një model i sheshtë i kthyer përmbys përkulet në drejtim tjetër.

Shtyp {{ui:Vendos}}. Pamja paraprake tregon çdo fletë; faktet thonë sa pllaka (ose sa nga rulli) u përdor dhe sa material zënë pjesët. Çdo pjesë që nuk u vendos emërtohet.

## Ruaje

{{ui:Ruaj DXF}} shkruan vendosjen si DXF (R12, milimetra), një fletë nën tjetrën: konturet e fletëve në shtresën SHEET, pjesët në PARTS (harqet mbeten harqe), emri i çdo pjese në LABELS.

:::tip
Përzierja e disa pjesësh zakonisht vendoset më mirë sesa shumë kopje të një pjese: pjesët e vogla mbushin hapësirat midis të mëdhenjve.
:::

## Prerja e fletëve (G-code)

**Eksporto › Fletët e vendosura në G-code** lexon një DXF të vendosur (këtë, ose fletët e shtojcës Cabinets në CadCraft) dhe bën një program për çdo fletë përmes post-procesorit që zgjedh: vrimat dhe prerjet e brendshme së pari, pastaj konturet, çdo prerje e rrezes së veglës jashtë pjesës, përmes fletës dhe 1 mm më shumë, me skaje lidhëse nëse i kërkon. Lista e post-procesorëve është ajo e integruar plus ajo e studimit tënd Manufacture. Kontrollo çdo program në një simulator para se ta nisësh: shpimi dhe xhepat nuk bëhen.

## Çfarë të kontrollosh

PartCraft kontrollon përsëri çdo vendosje mbi format e vërteta (jo mbi rrjetën me të cilën kërkoi): asnjë dy pjesë më afër se hapësira, asgjë në kufij. Nuk e planifikon prerjen: hyrjet e prerjes, rendi i prerjes, prerja e skajeve të përbashkëta një herë dhe mbajtja e fletës së mbetur janë punë e softuerit të prerësit tënd. Kontrollo DXF atje përpara se të presh.
