---
title: Sumulat at magpatakbo ng mga script (Script workspace)
summary: Ang Script workspace hakbang-hakbang: sumulat ng CraftScript o Lua script, patakbuhin sa F5, basahin ang console, itago ang resulta sa mga variable para sa susunod na script, ipakita ang mesh, field at plot, ihinto ang run, at i-save ang mga script kasama ng part.
keywords: script, scripting, script habang nagmo-model, pop out, pangalawang screen, pangalawang monitor, param, params, parameters in scripts, CraftScript, Lua, code, program, editor, console, REPL, command line, run, F5, patakbuhin ang pinili, ihinto, variables, workspace, plot, field, mesh, legend, sub-display, analysis, automation, matrix, numerical
from: d0003e89
---

**Preview.** Bago ang scripting sa PartCraft 0.3 at ito ay isang preview: maaaring magbago pa ang wika, ang library at ang paraan ng pag-save ng mga script, at ang mga script na isinulat ngayon ay maaaring mangailangan ng maliliit na pag-edit sa hinaharap. Sabihin sa amin kung ano ang masisira.

Ang Script workspace ay nagpapatakbo ng sarili mong kalkulasyon sa tabi ng part: maliliit na sum, buong analysis, o ang mga script sa [analysis library](topic:craftscript-library). Ang mga script ay isinusulat sa **CraftScript** (isang matrix language na halos kapareho ng MATLAB, tingnan ang [Ang wika ng CraftScript](topic:craftscript-language)) o sa **Lua** (tingnan ang [Mga script sa Lua](topic:craftscript-lua)) o sa **Python** (tingnan ang [Mga script sa Python](topic:craftscript-python)).

Pumili ng **Script** sa **Workspace** box sa kaliwa ng toolbar. Hindi nababago ang part. Ang kanang panel ay nagiging script panel (mas malapad kaysa karaniwan; i-drag ang gilid nito para baguhin ang laki, o ilipat ito sa pangalawang screen gamit ang {{ui:⋯}} menu nito, tingnan ang [Ayusin ang mga panel](common:arrange-panels)).

## Mag-script habang nagmo-model

Hindi mo kailangang umalis sa Design workspace para magsulat ng script. Sa Design, ang tab na {{ui:Script}} ng kanang panel ay naglalaman ng parehong editor, console, variables at library, na may parehong mga script. Patuloy na gumagana ang feature tree at ang view: i-click ang isang feature para piliin ito, i-double-click ang sketch para i-edit, paikutin ang view, saka bumalik sa tab na {{ui:Script}} at pindutin ang {{key:F5}}.

Ang ipinapakita ng script (mesh, field, plot, table) ay hindi iginuguhit sa ibabaw ng model mo sa Design: sinasabi ito ng console, at nasa Script workspace ang lahat kapag lumipat ka roon.

Ang {{ui:Pop out}}, katabi ng {{ui:Run}}, ay inililipat ang buong panel sa sarili nitong window, halimbawa sa pangalawang screen, para magkatabi ang editor at ang buong view. Dinodock ulit ito ng {{ui:Put back}}. Tingnan ang [Ayusin ang mga panel](common:arrange-panels).

## Patakbuhin ang unang script mo

1. I-type sa editor, halimbawa:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Pindutin ang {{key:F5}} (o ang {{ui:Run}}). Ipinapakita ng console sa ilalim ng editor ang nai-print ng script, at ang "Done in … s". Lumalabas ang plot sa **sub-display** sa ilalim ng 3D view.
3. Ang linyang walang semicolon ay nagpi-print ng value nito, gaya ng sa MATLAB: ang `a = 3` ay nagpi-print ng `a = 3`; ang `a = 3;` ay walang ipi-print.
4. Para patakbuhin lamang ang bahagi ng script, piliin ang mga linya at pindutin ang {{key:Mod+Enter}} ({{ui:Selection}}). Kapag walang napili, pinapatakbo nito ang linyang kinaroroonan ng cursor.
5. Ang linya sa ilalim ng console (pagkatapos ng `>>`) ay nagpapatakbo ng isang statement habang pinipindot mo ang {{key:Enter}}. Ibinabalik ng {{key:Up}} at {{key:Down}} ang mga naunang linya.

## Hanapin, itiklop at kumpletuhin

- **Hanapin at palitan.** Pindutin ang {{key:Mod+F}} (o {{key:Mod+H}} para palitan din). Bumubukas ang isang bar sa ibabaw ng code: i-type ang hahanapin; nag-iilaw ang mga match at sinasabi ng bilang kung nasaan ka. Ang mga button sa tabi ng box ay tumutugma sa case (**Aa**), naghahanap lamang ng buong salita (**W**) at gumagamit ng regular expression (**.\***; sa replacement, ibinabalik ng `$1` ang nahanap ng unang group). Pinapalitan ng {{ui:Replace}} ang kasalukuyang match, at pinapalitan ng {{ui:All}} ang bawat match bilang isang hakbang ng {{key:Mod+Z}}.
- **Folding.** I-click ang ▾ sa tabi ng numero ng linya, o pindutin ang {{key:Mod+Shift+[}} habang nasa linyang `function`, `if`, `for`, `while`, `switch` o `try` ang cursor (Lua: `function`, `do`, `if`, `repeat`), para itago ang mga panloob na linya nito; sinasabi ng linya kung ilan ang mga ito. Ang ▸ o {{key:Mod+Shift+]}} ay bubuksan ulit ito. Itinatago lamang ng folding ang mga linya: binibilang pa rin ng Run, Save, pagkokopya at mga numero ng linya ang bawat linya, at ang pag-type sa nakatiklop na linya ay unang bubuksan ito.
- **Completions.** I-type ang dalawang letra ng pangalan, o pindutin ang {{key:Mod+Space}}: may listahang nagpapakita ng mga variable mo, mga function ng wika (kasama ang kanilang argumento), mga keyword, at mga pangalang nasa script na. Pumili gamit ang mga arrow at pindutin ang {{key:Enter}} o {{key:Tab}}.

## Kapag may mali

- Ang error ay nagsasabi ng problema at ng linya nito: minamarkahan ng pula ang linya sa editor, at dinadala ka ng **Line n** sa console doon.
- Loop na walang katapusan: pindutin ang {{ui:Stop}} (toolbar o panel). Agad na humihinto ang script; pinapanatili ng mga variable ang mga value na mayroon sila bago ang run na iyon.
- Bawat run ay mayroon ding step budget (2 billion steps bilang default; baguhin ito sa ilalim ng **Mga opsyon ng Run** sa panel). Ang run na lumampas dito ay hihinto na may mensahe.

## Nagdadala ang mga variable mula sa script patungo sa script

Bawat top-level variable na gagawin ng script ay napupunta sa **Variables** tab (pangalan, uri, laki, pinakamaliit at pinakamalaking value) at nananatili roon para sa susunod na script, sa alinmang wika. Ganito nagme-mesh ang isang script, nagsosolve ang susunod, at nagpa-plot ang pangatlo.

- I-click ang isang variable para ipakita ito: mga mesh, field at model sa 3D view, mga array bilang table (kasama ang line plot para sa vector o colour map para sa matrix) sa mga sub-display.
- Ang {{ui:Save as JSON}}, {{ui:Save as CSV}} (table ng mga numero) at {{ui:Save as HDF5}} ay nagda-download nito; inaalis ito ng {{ui:Delete}}; walang laman ang workspace pagkatapos ng {{ui:Clear all}}.
- Lagyan ng check ang **Save the variables with the part** para itago ang mga ito sa part file (hanggang 32 MB; ang mas malalaki ay mananatili para sa bisitang ito lamang). Kapag binuksan mo ang ganoong part, nag-aalok ang panel na i-load ang mga ito.

## Mga mesh, field at plot

- Gumuguhit ng mesh ang `show(m)`; kinukulayan ng `show(f)` ang field sa mesh nito, may legend. Ang listahang **Shown** sa kaliwang itaas ng view ay nagtatago ({{ui:eye}}) o nag-aalis sa bawat item, at nagtatago o nagpapakita sa mismong part. Sa ilalim ng legend, mag-type ng range (**From**, **to**) o pindutin ang {{ui:Auto}}; nag-aalok din ang vector o stress field kung aling component ang ipapakita.
- Gumuguhit ang `show(f, 'deform', u, 'scale', 50)` ng mesh na inilipat ng displacement field na `u`, pinalaki nang 50 beses (kung walang `scale`, mga 8 % ng laki ng model).
- I-click ang ipinakitang mesh: ang pinakamalapit na node, ang element at ang mga field value doon ay lumalabas sa mga sub-display (**Picked**).
- Naglalagay ang `plot`, `imagesc` at `table` ng line plot, colour map ng 2-D array, o table sa mga sub-display. Ang plot na may parehong `'id'` (o title) gaya ng naunang plot ay pumapalit dito, kaya maa-update ng loop ang isang convergence plot; nagdadagdag ng curve ang `'append', true`. Walang laman ang mga sub-display pagkatapos ng {{ui:Clear}}; itinitiklop ng arrow ang mga ito.
- Kapag dalawa o higit pang plot, ipinapakita ng {{ui:Side by side}} silang lahat nang sabay (ang pinakabagong anim); ang pag-click sa tab ng table o larawan ay nagpapakita ulit ng isang iyon lamang.
- Bawat plot ay may {{ui:PNG}}, {{ui:SVG}} at {{ui:CSV}} sa ilalim. Nagpi-print ang PNG at SVG nito sa puti na may kulay ng papel, anuman ang theme (PNG 1600 × 1000 pixel; nagsa-scale nang walang blur ang SVG); naglalaman ang CSV ng mga numero nito nang may bawat digit: isang column ng x at isang column bawat curve kapag nagbabahagi ng x ang mga curve, kung hindi, isang row bawat point na may pangalan ng curve.
- Ang {{key:F}} o {{ui:Fit}} ay ina-fit ang view sa kung ano ang ipinapakita.

## Mga file

- {{ui:Open}} sa Script group (o i-drop ang mga file sa view o panel): ang mga file na `.craft`, `.lua` at `.py` ay nagbubukas bilang bagong script (hindi tumatakbo); ang mga data file (STL, OBJ, CSV, JSON, NPY, HDF5) ay nilo-load sa mga variable sa ilalim ng pangalan ng file.
- Ang {{ui:Save}} sa Script group ay nagda-download ng kasalukuyang script bilang file.
- Ang {{ui:New}} sa Script group (o {{ui:+}} sa tabi ng mga tab) ay nagsisimula ng isa pang script. I-double-click ang tab para palitan ang pangalan nito; inaalis ito ng {{ui:×}} nito (maaari mo itong i-undo).

## Basahin ang mga parameter ng part

Binabasa ng script ang mga parameter ng part (tingnan ang [Drive a part with parameters](topic:parameters)) sa pangalan:

```
w = param('width');     % halaga ng isang parameter, sa mm (o degrees, o plain number)
p = params();           % lahat, bilang struct: p.width, p.height
```

Sa Lua at Python, `cs.param('width')` at `cs.params()` ang mga ito. Nagbabasa lamang ng mga parameter ang mga script: baguhin ang mga ito sa {{ui:Parameters}} tab. Sa ilalim ng tab ng script, may linyang naglilista ng mga parameter na binabasa nito gamit ang `param('…')`, at minamarkahan ang alinmang wala sa part; nakalista ang script sa ilalim ng bawat isa sa {{ui:Parameters}} tab. Ang pangalang binuo habang tumatakbo ang script, gaya ng `param(name)`, ay hindi nakalista.

## Naka-save ang mga script sa part

Bawat script sa mga tab ay naka-save sa part, kaya sine-save ito ng {{ui:Save}} sa File group kasama nito, at maaaring i-undo ang mga pagbabago rito. Ang pagbukas ng part ay **hindi kailanman nagpapatakbo ng mga script nito**: sinasabi ng console kung ilan ang dala nito, at tumatakbo lamang ang mga ito kapag pinindot mo ang Run. Ang part mula sa iba ay maaaring maglaman ng anumang script: basahin ito bago patakbuhin. Tumatakbo ang mga script sa background sa computer na ito nang walang network access at hindi nila magagalaw ang page.

## Kaugnay

- [Ang wika ng CraftScript](topic:craftscript-language)
- [Mga script sa Lua](topic:craftscript-lua)
- [Mga script sa Python](topic:craftscript-python)
- [Ang analysis library](topic:craftscript-library)
- [Gumawa ng sarili mong analysis](topic:craftscript-own-analysis)
