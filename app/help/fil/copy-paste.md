---
title: Kopyahin, i-paste at i-duplicate
summary: Kopyahin ang sketch geometry, features at assembly parts; i-paste kung saan ka mag-click o sa mismong lugar; mag-duplicate sa isang hakbang; at alamin kung ano ang kasama at hindi kasama sa kopya.
keywords: copy, kopyahin, paste, cut, duplicate, clipboard, paste sa mismong lugar, piliin lahat, huwag piliin, delete, ctrl c, ctrl v, ctrl d, instance, component, kopyahin ang sketch, kopyahin ang feature, kopyahin ang part
from: 611307d7
---

Ang grupong {{ui:Edit}} sa toolbar ay may {{ui:I-undo}}, {{ui:I-redo}}, {{ui:Kopyahin}}, {{ui:I-paste}} at isang {{ui:Higit pa}} menu na may {{ui:Cut}}, {{ui:Kopyahin}}, {{ui:I-paste}}, {{ui:I-paste sa mismong lugar}}, {{ui:Duplicate}}, {{ui:Burahin}}, {{ui:Piliin lahat}} at {{ui:Huwag piliin ang alinman}}, bawat isa kasama ang key nito. Ang kinokopya ay nakadepende kung nasaan ka: geometry sa bukas na sketch, isang feature sa history, o isang piyesa sa assembly.

Ang item na grayed out ay hindi maaaring gumana sa ngayon. I-hover ito: sinasabi ng tooltip nito kung bakit, halimbawa "Piliin muna ang sketch geometry" o "Ang clipboard ay may Sketch2 at Extrude2: ang features ay ipinapaste sa history, kaya lumabas muna sa sketch".

| Aksyon | Key | Sa sketch | Sa history | Sa assembly |
|---|---|---|---|---|
| Kopyahin | {{key:Mod+C}} | Ang napiling points at curves | Ang napiling sketch, extrude, revolve o hole (kasama ang sketch nito) | Ang napiling piyesa |
| Cut | {{key:Mod+X}} | Kopyahin, tapos burahin | Kopyahin, tapos burahin ang feature | Kopyahin, tapos alisin ang piyesa |
| I-paste | {{key:Mod+V}} | Sumusunod ang kopya sa pointer; i-click kung saan ito pupunta | Idinadagdag ang kopya sa dulo ng history | Bagong kopya sa tabi ng ibang piyesa |
| I-paste sa mismong lugar | {{key:Mod+Shift+V}} | Sa parehong coordinates | Kapareho ng I-paste | Sa mismong lugar ng kinopyang piyesa |
| Duplicate | {{key:Mod+D}} | Kopyahin at ilipat sa isang galaw; hindi ginagalaw ang clipboard | Pangalawang kopya kaagad pagkatapos mo | Pangalawang kopya sa tabi ng ibang piyesa |
| Burahin | {{key:Delete}} | Ang napili | Ang feature (nagtatanong kung may gumagamit pa nito) | Ang piyesa o joint |
| Piliin lahat | {{key:Mod+A}} | Lahat sa sketch | Hindi available | Hindi available |
| Huwag piliin ang alinman | {{key:Esc}} | Inaalis ang pagpili | Inaalis ang pagpili at mga pick | Inaalis ang pagpili |

Bawat paste, duplicate at cut ay isang hakbang sa undo list: binabawi ito ng {{key:Mod+Z}}, ibinabalik ito ng {{key:Mod+Y}}.

## Sa sketch

1. Piliin ang kokopyahin: i-click ito, {{key:Shift}}+click para sa higit pa, mag-drag ng window, o pindutin ang {{key:Mod+A}} para sa lahat.
2. Pindutin ang {{key:Mod+C}} o piliin ang {{ui:Kopyahin}}. Sinasabi ng status bar kung ano ang nakopya.
3. Pindutin ang {{key:Mod+V}} o piliin ang {{ui:I-paste}}. Sumusunod ang dashed na kopya sa pointer, hawak sa gitna nito. Nagsa-snap ito sa mga point: ilagay ang center ng nakopyang bilog sa isang point sa pamamagitan ng pag-click sa point na iyon.
4. I-click kung saan ito pupunta. Nananatiling napili ang na-paste na geometry, kaya puwede mo itong i-drag o lagyan agad ng relations. Kinakansela ng {{key:Esc}} ang paste.

Ang kasama sa kopya:

- Ang nakopyang line, circle o arc ay dala ang sarili nitong end points at center.
- Ang relations at dimensions **sa pagitan ng mga nakopyang item** ay kasama: ang nakopyang rectangle ay nananatiling rectangle, kasama ang sukat nito.
- Ang relations **sa geometry na hindi mo kinopya**, at sa origin, ay natatanggal. Binibilang ito ng status bar: "2 relations to geometry outside the copy will not come along" (2 relations sa geometry sa labas ng kopya ang hindi isasama). Kaya malayang gumalaw ang na-paste na kopya hangga't hindi mo ito itinatali gamit ang relations o dimensions.
- Ang fixed point ay nananatiling fixed, sa bago nitong posisyon.

{{ui:I-paste sa mismong lugar}} ay inilalagay ang kopya nang eksakto sa coordinates ng original, sa sketch na ito o sa iba: madaling gamitin para dalhin ang isang profile mula sa isang sketch papunta sa isa pa. Sa parehong sketch, nasa ibabaw ng original ang kopya; i-drag ito palayo.

{{ui:Duplicate}} ({{key:Mod+D}}) ay kumokopya ng napili at agad nagsisimulang ilagay ito, nang hindi ginagalaw ang nasa clipboard.

:::tip
Para ulitin ang hole center o slot nang ilang beses, kopyahin ito nang isang beses at i-paste nang ilang beses: bawat {{key:Mod+V}} ay nagsisimula ng bagong kopya na sumusunod sa pointer.
:::

## Sa history

1. I-click ang sketch, extrude, revolve o hole sa history.
2. Kinokopya ito ng {{key:Mod+C}}. Ang feature na nakabase sa sketch ay kinokopya kasama ang sketch nito.
3. Idinadagdag ng {{key:Mod+V}} ang kopya sa dulo ng history (sa rollback bar kapag nag-roll back ka), na may mga bagong pangalan gaya ng Sketch3 at Extrude2.

Nasa parehong plane o face ng original ang kopya, kaya nakapatong ito rito at magkamukha ang piyesa. Piliin ang bagong sketch at palitan ang plane nito sa kanang panel, o buksan ito at i-drag o i-re-dimension ang profile, para ilipat ang kopya.

- I-paste sa **ibang piyesa**: buksan ang piyesang iyon at pindutin ang {{key:Mod+V}}. Kapag ang sketch ng kopya ay nasa face na wala sa piyesang iyon, mapupunta ito sa front plane, at sasabihin ito ng status bar.
- Kinokopya at ipinapaste ng {{ui:Duplicate}} sa isang hakbang, sa loob ng parehong piyesa.
- Kinokopya ng {{ui:Cut}} ang feature, tapos binubura ito (nagtatanong muna kung may ibang feature na gumagamit nito).

Hindi maaaring kopyahin ang patterns, mirrors, fillets, chamfers, shells at imported solids: nakakabit sila sa edges, faces o features na pinili sa piyesang ito. Kopyahin na lang ang sketch o feature na pinagbasehan nila, o i-pattern ito gamit ang {{ui:Linear}} o {{ui:Circular}}.

## Sa assembly

1. I-click ang piyesa sa view o sa listahan sa kaliwa.
2. Piliin ang {{ui:Duplicate}} ({{key:Mod+D}}), o {{key:Mod+C}} tapos {{key:Mod+V}}.

Ang bagong kopya ay ang **parehong piyesa**: i-edit ang isa at magbabago ang bawat kopya. Lumalabas ito 20 mm sa kanan ng lahat ng nasa assembly, nakaharap sa parehong direksyon ng kopya, at nananatili roon hanggang may joint na maglagay dito. Ang {{ui:I-paste sa mismong lugar}} ({{key:Mod+Shift+V}}) ay inilalagay ito nang eksakto kung nasaan ang kinopyang piyesa; idugtong ito para ilipat (ang offset ng slider joint ang magtutulak nito sa kahabaan).

Ang pag-paste ng piyesang kinopya mula sa ibang assembly ay dinadala rin ang piyesa, katulad ng {{ui:Insert}} mula sa file nito. Ang {{ui:Magdagdag ng kopya}} sa Assembly group ay gumagawa ng kaparehong bagay ng {{ui:Duplicate}}, at gumagana kahit walang napili (kinokopya nito ang huling piyesa).

## Ang clipboard

- Sariling clipboard ito ng PartCraft, hindi ng computer: hindi mo maipapaste ang geometry ng PartCraft sa ibang programa, o text sa views ng PartCraft.
- Nakatago ito sa browser na ito, kaya maaaring mag-paste ng nakopya mo ang ibang PartCraft tab. Binabasa ito muli at sinusuri na parang binuksang file; tinatanggihan ang anumang sira o galing sa ibang bersyon.
- Maaaring masyadong malaki para itago ng browser ang piyesang may malaking imported na STEP file: sa tab na ito lang ito ipapaste.
- Sa number box o sa help search, ang {{key:Mod+C}} at {{key:Mod+V}} ay kumokopya at nagpapaste ng text gaya ng dati.

Sa drawing sheet, hindi pa available ang kopya at paste; gumagana ang {{ui:Burahin}} at {{ui:Huwag piliin ang alinman}} sa napiling symbol. Tingnan ang [Hindi pa nagagawa](topic:not-built-yet).
