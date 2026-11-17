---
title: Mga frame mula sa steel section
summary: Maglagay ng steel section sa kahabaan ng mga linya ng isa o higit pang sketch para makabuo ng welded na frame: naka-miter o butt na sulok, mga member na pinutol para magkasya kung saan sila nagtatagpo, end cap, gusset, at cut list na may haba at anggulo ng dulo.
keywords: weldment, structural member, frame, steel frame, tubo, square tube, hss, rhs, shs, pipe, chs, wide flange, i-beam, w beam, ipe, hea, heb, channel, upn, anggulo, miter, mitre, butt joint, cope, end cap, gusset, cut list
from: 59071e5a
---

Naglalagay ang **Structural member** ng steel section sa bawat linya ng mga sketch na pipiliin mo. Iguhit ang frame bilang mga linya (bawat linya ay isang member), tapos piliin ang section: binubuo ang mga member, pinuputol at inii-extend ang kanilang mga sulok, at sinasabi ng cut list kung gaano kahaba ang puputulin sa bawat piraso at sa anong anggulo.

## Gumawa ng frame

1. Iguhit ang frame bilang mga linya sa isang sketch, halimbawa isang rectangle sa top plane. Hindi isinasama ang mga linyang minarkahang construction.
2. Habang napili ang sketch, piliin ang {{ui:Higit pa}} › {{ui:Structural member}}. Bawat linya ng sketch ay nakakakuha ng member.
3. Sa panel, piliin ang **Family** at **Size** ng section. Ang mga family ay ang mga table ng AISC (W, S, C, L, HSS tubes, Pipe) at EN 10365 (IPE, HEA, HEB, UPN).

### Frame sa 3D

Ang mga linya mula sa ilang sketch ay bumubuo ng iisang frame: ang top rectangle na nasa sketch sa plane sa itaas, at ang mga paa na nasa sketch sa mga nakatayong plane, ay nagtatagpo sa dulo nila sa 3D. Sa ilalim ng **Along the lines of** sa panel, lagyan ng tsek ang bawat sketch na sinusundan ng mga member. Ang mga dulong nagtatagpo sa loob ng isang micrometer ay pinagdurugtong.

## Itakda ang section sa linya nito

- Ang **Rotate (°)** ay umiikot sa section sa paligid ng linya nito. Nakatayo nang patayo ang lalim ng beam (sa patayong member, ang lalim nito ay nakaharap sa harap).
- Pinipili ng **On the line** kung aling punto ng section ang nasa linya: ang centre, o isang sulok o gitna ng isang side ng outline ng section. Inilalagay ng "Bottom middle" ang frame sa ibabaw ng sketch plane sa halip na dumaan dito.

## Mga sulok at joint

| Saan nagtatagpo ang mga member | Ano ang mangyayari |
|---|---|
| Dalawang member na dulo-sa-dulo, **Corners: Mitred** | Parehong pinuputol sa plane na nasa kalagitnaan nila, gaya ng picture frame |
| Dalawang member na dulo-sa-dulo, **Corners: Butt** | Tumatakbo ang unang member hanggang sa malayong face ng pangalawa; pinuputol nang tuwid ang pangalawa sa malapit na face ng una |
| Ang member ay nagtatapos sa gitna ng isa pa (isang T) | Pinuputol ito para magkasya sa labas ng kabilang member |
| Tatlo o higit pa ang nagtatapos sa iisang punto | Tumatakbo nang tuwid ang una lampas sa iba; pinuputol ang iba para magkasya dito |

Ang unang member ay ang may unang linya: pinapanatili ng mga linya ang pagkakasunod ng pagkaguhit, sketch kada sketch ayon sa pagkakasunod ng pag-tsek ng mga sketch.

## End cap at gusset

- Tinatakpan ng **End caps** ang bawat malayang dulo ng plate na may outline ng section, ang kapal na itinakda mo, sa labas ng dulo.
- Naglalagay ang **Gussets** ng triangular na plate sa bawat sulok kung saan nagtatagpo ang dalawang member sa anggulo: ang **Gusset size** sa kahabaan ng bawat member mula sa sulok, ang **Gusset thickness** sa kabila, nakasentro sa plane ng sulok.

## Ang cut list

Inililista ng panel ang bawat piraso, may pagpapangkat sa magkakaparehong piraso: ang section, ang haba (long point hanggang long point, gaya ng pagmamarka para sa lagari), kung paano pinuputol ang bawat dulo (tuwid, anggulo mula sa tuwid, o puputulin para magkasya), at kung aling member ang mga ito. Nakalista ang end cap at gusset kasama ang kanilang laki. Ang {{ui:I-save ang cut list (CSV)}} ay sine-save ito para sa spreadsheet.

Ang member na pinutol para magkasya sa tubong may bilog na sulok ay bahagyang pumapasok sa corner radius ng tubong iyon, kaya ang haba nito sa long point ay ilang millimeter na mas malaki kaysa sa agwat ng mga face.

## Mga limitasyon

- Tuwid na linya lang ang sinusundan ng mga member; hindi isinasama ang mga arko at spline sa sketch.
- Pinuputol ang mga joint, hindi hinang: walang weld bead na iginuguhit, at iisang solid ang frame.
- Iginuguhit ang mga section mula sa mga dimension ng table: mga W shape na may root fillet, S at channel na may parallel na flange, tubo na may corner radius; hindi ginagawa para sa iyo ang mga hole, paghahanda ng dulo, at weld gap.
- Binubuo ng mesh kernel ang structural member. Kapag naka-on ang exact kernel (para lang sa developer), sinasabi nila ito at hindi sila nabubuo.
