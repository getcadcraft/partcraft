---
title: Bumuo ng assembly gamit ang joints
summary: Simulan ang assembly mula sa isang piyesa, magpasok ng mga kopya at iba pang part file, pagdugtungin ang mga ito gamit ang rigid, revolute, slider, cylindrical, planar, ball at pin-in-slot joints sa mga flat na face, i-center ang joints sa mga axis, i-edit ang piyesa sa lugar at i-save ang assembly.
keywords: assembly, mate, mates, joint, loop, closed loop, linkage, four-bar, mechanism, rigid, revolute, slider, cylindrical, planar, ball, ball joint, spherical, pin slot, pin in slot, magpasok ng component, naka-ground, fixed, concentric, coincident, i-edit ang piyesa, sa konteksto, partcraft-asm
from: a53bbfef
---

Pinagsasama ng assembly ang mga piyesa. Sa PartCraft, ang **joints** ang naglalagay sa mga piyesa: bawat joint ay nakalagay sa isang flat na face ng bawat isa sa dalawang piyesa at pinagdidikit ang mga ito nang face to face. Pinapaikot ng revolute joint ang isang piyesa, pinapadulas ito ng slider, at pinipirmi ito ng rigid joint.

## Simulan ang assembly

1. Bumuo ng piyesa na may solid (hindi maaaring pumasok sa assembly ang walang laman na piyesa: "Build a solid first, then put it into an assembly." -> "Bumuo muna ng solid, tapos ilagay ito sa assembly.")
2. Piliin ang {{ui:Assembly}} sa toolbar.

Sinasabi ng status bar: "Nagsimula ang assembly, ang Part1 ang naka-ground na piyesa. Magpasok ng mas maraming piyesa ({{ui:Magdagdag ng kopya}}, Insert, o Edit › Duplicate), tapos i-Joint ang mga ito." Ipinapakita na ng kaliwang panel ang **Mga piyesa** at **Mga joint**, at ipinapakita ng toolbar ang mga assembly tool. Nagtatago ang sketch at feature tools.

Ang unang piyesa ay **naka-ground**: hindi ito gumagalaw, at lahat ng iba ay nakalagay batay dito.

## Magpasok ng mga piyesa

- {{ui:Magdagdag ng kopya}} ay nagpapasok ng isa pang kopya ng napiling piyesa (o ng huli). Iisang piyesa ang pinagsasaluhan ng mga kopya: i-edit ito at magbabago ang bawat kopya.
- {{ui:Duplicate}} ({{key:Mod+D}}) sa Edit group ay gumagawa ng parehong bagay para sa napiling piyesa. {{key:Mod+C}} at {{key:Mod+V}} ay kumokopya ng piyesa at ipinapaste ito sa tabi ng iba, sa assembly na ito o sa iba pa; ipinapaste ito ng {{key:Mod+Shift+V}} sa mismong lugar. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste).
- {{ui:Insert}} ay nagpapasok ng piyesa mula sa `.partcraft.json` file sa computer mo. Kinokopya ang piyesa sa assembly.

Ang mga bagong piyesa ay lumalabas 20 mm sa kanan ng lahat ng nandoon na, at nananatili roon hanggang may joint na maglagay sa mga ito. Maaari ring ilipat nang manual ang piyesang walang joint: mga na-type na value o arrows na idinidrag mo (tingnan ang [Parts list, exploded views at paglipat ng mga piyesa](topic:assembly-bom-explode)).

## Pagdugtungin ang dalawang piyesa

1. Piliin ang {{ui:Joint}} o pindutin ang {{key:J}}. Sinasabi ng kanang panel ang **Bagong joint**.
2. I-click ang flat na face sa unang piyesa. Mai-highlight ito.
3. I-click ang flat na face sa ikalawang piyesa.

Tatalon ang ikalawang piyesa para ang face nito ay nakadikit sa face ng unang piyesa, nakaharap dito. Lalabas ang joint sa ilalim ng **Mga joint**, halimbawa "Revolute1", at ipapakita ng kanang panel ang mga setting nito.

- Kung parehong face ay gawa ng revolves, magsisimula ang joint bilang **revolute**; kung hindi, **rigid**. Palitan ito pagkatapos.
- Hindi maaaring piliin ang curved na face: "That face is curved. Pick a flat face (to turn about a hole or a revolve's axis, choose it in the joint afterwards)." -> "Curved ang face na iyon. Pumili ng flat na face (para umikot sa hole o sa axis ng revolve, piliin ito sa joint pagkatapos)."
- {{key:Esc}} ay kinakansela ang joint na nasimulan mo na (o i-click ang piyesa sa listahan sa kaliwa).

### Mga setting ng joint

| Setting | Ano ang ginagawa nito |
|---|---|
| **Type** | Isa sa mga joint sa talahanayan sa ibaba |
| **Angle (°)** | Pinapaikot ang ikalawang piyesa sa paligid ng axis ng joint (patayo sa mga face) |
| **Offset (mm)** | Inililipat ang ikalawang piyesa sa kahabaan ng axis, palayo sa face (ang negative na value ay pumipilit papasok dito) |
| **Along X**, **Along Y**, **Tilt about X**, **Tilt about Y**, **Along the slot**, **Slot direction** | Ang iba pang value, ipinapakita para sa mga joint na gumagamit nito |
| **Sentro sa** (para sa bawat panig) | Kung saan tumatawid ang axis ng joint sa face: "The face's own origin" (sariling origin ng face), ang axis ng revolve ("Axis of Revolve1") o axis ng isang hole ("Hole1, hole 2") |

Ang bawat value na puwedeng galawin ng joint ay may drag slider sa ilalim ng kahon nito; ang iba ay itinatakda nang isang beses.

| Joint | Ano ang gumagalaw | Itinatakda nang isang beses |
|---|---|---|
| **Rigid** | Walang | Angle, Offset |
| **Revolute** | Angle (hinge) | Offset |
| **Slider** | Offset (drawer) | Angle |
| **Cylindrical** | Angle at Offset (shaft sa plain bearing) | |
| **Planar** | Along X, Along Y sa ibabaw ng face, at Angle (piyesang dumudulas sa mesa) | |
| **Ball** | Angle (spin) at Tilt about X at Y, sa paligid ng sentro ng joint (ball joint) | |
| **Pin in slot** | Along the slot at Angle (pin sa tuwid na slot) | Slot direction: anggulo ng slot mula sa X ng face |

Ang X at Y ng isang face ay ang sa unang piyesa; ang sentro ng joint ay itinatakda ng **Sentro sa**.

Ang "The face's own origin" ay ang origin ng piyesa na naka-project sa face, na madalas ay hindi kung saan mo gustong magkahanay ang mga piyesa. Para sa mga bilog na piyesa at pin, itakda ang **Sentro sa** sa axis ng revolve o hole sa magkabilang panig: magkakahanay ang mga axis, gaya ng concentric mate.

### Halimbawa: dalawang flange na nakakabit nang face to face

1. Buksan ang flange part (isang revolve na may circular pattern ng mga hole) at piliin ang {{ui:Assembly}}.
2. Piliin ang {{ui:Magdagdag ng kopya}}.
3. Pindutin ang {{key:J}}, i-click ang flat na face ng disc ng unang flange (ang face kung saan nagsisimula ang mga bolt hole), tapos ang parehong face sa ikalawang flange. Gawa ng revolve ang mga face, kaya revolute ang joint.
4. Itakda ang **Sentro sa** sa "Axis of Revolve1" para sa parehong panig. Magkakaroon na ng iisang axis ang mga flange.
5. I-type ang `22.5` sa **Angle (°)** para ihanay ang mga bolt hole, o i-drag ang slider.

## Mga saradong loop: linkages

Ang mga piyesang pinagdugtong sa isang singsing (four-bar linkage, crank at slider, frame na may brace sa magkabilang panig) ay bumubuo ng **loop**. Nilulutas ng PartCraft ang bawat loop para magsara ito: ang mga joint dito ay kumukuha ng mga value na nagdurugtong sa singsing, at gumagalaw nang pinakakaunti mula sa dating posisyon nila.

- **Itakda o i-drag** ang value ng isang joint sa loop at susunod ang natitirang loop. Sa four-bar linkage, i-drag ang **Angle** ng crank at gagalaw kasama nito ang coupler at rocker. Nananatili ang value na itinakda mo; ang iba ay kinakalkula mula rito.
- Sa listahan, ang joint sa loop na puwede pang gumalaw ay **asul**: may puwedeng itakdang value pa. Ang loop na hindi na makagalaw (frame na may brace) ay nananatiling itim. Ang loop na hindi makapagsara ay **pula**.
- Ipinapakita ng **Part** box ang **Loops**: ilan ang nakasara at ilang value ang puwede pang gumalaw, halimbawa "1 closed; 1 value can still move" (1 nakasara; 1 value ang puwede pang gumalaw).
- {{ui:Suriin ang galaw kung may banggaan}} ay sumusuyod sa joint sa loop habang sinusundan ito ng loop, hakbang-hakbang (tingnan ang [Suriin ang assembly para sa clashes at galaw](topic:check-assembly)).

Ang linkage na patag na binuo mula sa flat bars ay dapat magkatugma sa lalim: ang dalawang piyesang nakakabit nang face to face sa magkabilang panig ng singsing ay nangangailangan ng parehong stack height sa magkabilang direksyon. Gamitin ang **Offset** ng joint para iangat ang isang piyesa kapag hindi nagtutugma ang stack, o hindi magsasara ang loop.

## Pagtrabaho sa mga piyesa

I-click ang piyesa sa view o sa listahan para piliin ito. Ipinapakita ng kanang panel ang pangalan ng piyesa, ilang kopya ang meron, volume nito, mga joint nito, at kung naka-ground ito, itinakda ng mga joint nito, o "Not joined: stays where it was put" (Hindi naka-joint: nananatili kung saan inilagay). Mga button:

- {{ui:I-edit ang piyesang ito}} (o {{ui:I-edit ang part}} sa toolbar, o i-double-click ang piyesa sa listahan): binubuksan ang piyesa para i-edit;
- {{ui:Magpasok ng kopya}};
- {{ui:Gawing naka-ground na piyesa ito}};
- {{ui:Alisin}}: inaalis din nito ang mga joint nito, pagkatapos magtanong.

"An assembly keeps at least one part. Close it instead." -> "Kailangang may kahit isang piyesa ang assembly. Isara na lang ito."

### I-edit ang piyesa sa lugar

1. Pumili ng piyesa at piliin ang {{ui:I-edit ang part}}. Bubukas ang piyesa kasama ang history nito; ang heading ay nagsasabing "Bracket (sa Bracket assembly)".
2. Baguhin ito gaya ng anumang piyesa.
3. Piliin ang {{ui:Bumalik}} sa toolbar. Ina-update ng assembly: magbabago ang bawat kopya ng piyesang iyon, at susunod ang mga joint sa mga face na gawa ng sketch edges.

Ang pagbabalik ng pagbabago ay isang hakbang sa undo list ng assembly.

## Undo, save at close

- May sariling undo list ang assembly: {{key:Mod+Z}} at {{key:Mod+Y}} ay gumagana sa mga joint, insert at setting.
- {{ui:I-save}} o {{key:Mod+S}} ay nagda-download ng `<assembly name>.partcraft-asm.json`, kasama ang bawat piyesa sa loob nito. Buksan ito sa susunod gamit ang {{ui:Buksan}}.
- {{ui:Isara}} ay isinasara ang assembly at bumabalik sa piyesang sinimulan mo. Kung hindi pa naka-save ang assembly, magtatanong ito: {{ui:Kanselahin}}, {{ui:Itapon ang assembly}} o {{ui:I-save muna}}.
- Para palitan ang pangalan ng assembly, i-click ang bakanteng espasyo para walang napili at baguhin ang **Pangalan** sa kanang panel.

## Malalaking assembly

Puwedeng maglaman ang assembly ng libu-libong kopya ng ilang piyesa. Iginuguhit nang magkakasama ang mga kopya ng isang piyesa, ang joint na iniikot mo ay naglalagay lang ng mga piyesang nasa likod nito, at ipinapakita ng part list ang unang mga row nito na may "Ipakita pa" button sa ilalim (laging nakalista ang napiling piyesa).

- Habang iniikot o zina-zoom mo ang view, ang assembly na may higit sa humigit-kumulang 300,000 triangles ay iginuguhit bilang isang box bawat piyesa, tapos buo makalipas ang sandali pagkatapos mong huminto.
- {{ui:Views}} › {{ui:Lightweight display}} ay pinananatiling naka-box ang lahat ng oras. Ang pagpili ng piyesa at joints ay gumagamit pa rin ng totoong piyesa.
- Nakadepende rin ang bilis ng pag-ikot sa graphics card mo. Nasa release notes ang mga numerong sinukat ng PartCraft, kasama ang makinang pinagmulan nila.

## Mga problema sa joint

- Ang piyesang hindi naaabot ng anumang joint ay nakalista bilang **free** at sinasabi ng panel na "Bracket2 is not joined to the grounded part, so it stays where it was put." -> "Hindi naka-joint sa naka-ground na piyesa ang Bracket2, kaya nananatili ito kung saan inilagay."
- Ang loop na hindi makapagsara (hindi umaabot ang haba, may limit na humihinto sa joint, hindi nagtutugma ang mga face sa lalim): "Revolute3 closes a loop that cannot close: it is off by 2.000 mm. Check the faces, offsets and limits of the loop's joints." -> "Ang Revolute3 ay nagsasara ng loop na hindi makapagsara: 2.000 mm ang layo nito. Suriin ang mga face, offset at limit ng mga joint ng loop." Nagiging pula ang mga joint nito.
- Kapag nawala ang face o axis na ginagamit ng joint pagkatapos i-edit ang piyesa: "The face this joint uses is gone from Bracket." -> "Wala na sa Bracket ang face na ginagamit ng joint na ito." Alisin ang joint at gumawa ulit nito.

Susunod: [Suriin ang assembly para sa clashes at galaw](topic:check-assembly).
