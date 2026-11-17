---
title: Suriin ang draft para sa molding at casting
summary: Kulayan ang piyesa ayon sa draft angle nito laban sa pull direction ng mould, tingnan kung aling face ang nakakalas, alin ang nangangailangan ng mas maraming draft, at alin ang nakakalas mula sa kabilang kalahati, kasama ang bahagi ng area ng bawat isa.
keywords: draft analysis, draft, taper, mould, mold, die casting, injection moulding, pull direction, parting line, undercut, release, suriin ang draft
from: 6a106f83
---

Ang mga piyesang ginawa sa mould, die, o sand casting ay nangangailangan ng **draft**: mga dingding na bahagyang nakahilig para madulas palabas ang piyesa. Kinukulayan ng **Draft analysis** ang bawat face ayon sa kung gaano ito nakahilig palayo sa direksyon ng pagbubukas ng mould (ang **pull**).

## I-on ito

1. Sa Design workspace, buksan ang {{ui:Views}} at piliin ang {{ui:Draft analysis}}.
2. Itakda ang **Pull**: ang direksyon ng pagbubukas ng mould, sa X, Y, o Z sa alinmang direksyon, o **Patayo sa napiling face**: pindutin ang {{ui:Pumili ng face}} at i-click ang isang flat na face ng piyesa.
3. Itakda ang **Minimum draft**, sa degrees: ang pinakamaliit na tilt na kailangan ng proseso mo (kadalasan 1° hanggang 3°).

Kinukulayan ang piyesa:

| Kulay | Ibig sabihin |
|---|---|
| Berde: **Positive draft** | Nakahilig patungo sa pull nang hindi bababa sa minimum: nakakalas mula sa kalahating ito ng mould |
| Ochre: **Needs draft** | Nasa loob ng minimum sa alinmang direksyon, gaya ng patayong dingding: magdagdag ng draft dito |
| Pula: **Negative draft** | Nakahilig palayo sa pull nang hindi bababa sa minimum: nakakalas mula sa kabilang kalahati, o undercut kung dapat lumabas ang piyesa sa iisang kalahati |

Ipinapakita sa tabi ng bawat klase ang bahagi nito ng surface area ng piyesa. Ang **Baligtarin ang pull** ay tumitingin mula sa kabilang kalahati ng mould: nagpapalitan ang berde at pula.

Ang mga curved face ay sinusuri point by point, kaya ang silindrong nakahiga sa kabila ng pull ay nagpapakita ng banda na nangangailangan ng draft sa mga gilid nito.

Sumusunod ang mga kulay sa piyesa habang binabago mo ito. Ang {{key:Esc}} o {{ui:Isara}} ay nag-o-off ng analysis; walang nase-save sa piyesa.

:::tip
Para magdagdag ng draft, gamitin ang {{ui:Draft}} feature sa mga ochre na face (tingnan ang [Sweep, loft and draft](topic:sweep-loft-draft)), saka suriin ulit.
:::
