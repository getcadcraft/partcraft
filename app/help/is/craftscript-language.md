---
title: CraftScript-tungumálið
summary: CraftScript á einni síðu: fylki, bil og vísun, aðgerðir, stýriflæði, föll, strúktúrar og hólf, athugasemdir, bergmál, villur og skrefamörk, og hvernig það er frábrugðið MATLAB.
keywords: CraftScript, tungumál, setningafræði, fylki, vigur, tensor, vísir, end, tvípunktur, bil, aðgerð, stakvís, umspenna, if, for, while, switch, try, catch, function, nafnlaus aðgerð, strúktúr, hólf, athugasemd, bergmál, semíkomma, MATLAB, Octave, tengi
from: d072b7d5
---

CraftScript er fylkismál skrifað þannig að það lítur út eins og MATLAB, svo flestir klassískir talnareiknikóðar (88 línu kóðinn fyrir bestun uppbyggingar, til dæmis) keyra með aðeins litlum breytingum. Það keyrir í [Skriftvinnusvæðinu](topic:craftscript) og af skipanalínunni.

## Gildi

| Gerð | Dæmi | Athugasemdir |
|---|---|---|
| Tala, fylki | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Sérhver tala er fylki (1×1). Fylki eru geymd dálk fyrir dálk, allt að 8 víddir |
| Rökgildi | `A > 2`, `true` | Fylki með sönnu og ósönnu; nota má sem vísa |
| Texti | `'beam'`, `"beam"` | |
| Strjált fylki | `sparse(i, j, v, n, n)` | Fyrir stífleikafylki |
| Net, reitur, líkan | `hexGrid(…)`, `part()`, `load('part.stl')` | Það sem `show` teiknar |
| Strúktúr | `s.E = 210e3` | Nefndir reitir |
| Hólf | `c = {1, 'two', [3 4]}` | Listi af hvaða gildum sem er |
| Fallsbendir | `f = @(x) x.^2` | |

## Fylki og vísun

- Bil: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Vísun byrjar á 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (heill dálkur), `A(:)` (allt sem einn dálkur), `v(v > 0)` (rökvísi-vísun).
- Úthlutun fyrir aftan endann stækkar fylkið, eins og í MATLAB: `v(10) = 1`.

## Aðgerðir

- `+ - * / \ ^` eru fylkisaðgerðir (`A \ b` leysir); `.* ./ .^` vinna stak fyrir stak. `'` umsnýr.
- Samanburður `== ~= < <= > >=`; rökaðgerðir `& | ~` (stak fyrir stak) og `&& ||` (stuttrásun).

## Stýriflæði og föll

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Föll fara í skriftu á eftir skipunum, eða í sinn eigin skriftuflipa sem heitir eftir fallinu:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Nafn er leitað í þessari röð: breyta, skrift í þessum hluta með því nafni, fall úr safni, innbyggt fall.

## Bergmál, athugasemdir, úttak

- Setning án `;` prentar gildi sitt; `;` heldur henni hljóðlátri.
- `%` byrjar athugasemd; `%{` og `%}` á eigin línum gera línurnar á milli þeirra að athugasemd.
- `disp(x)`, `fprintf('%g\n', x)` og `display(x)` prenta í stjórnborðið.

## Villur og takmörk

- Villur segja í einföldum orðum hvað fór úrskeiðis og gefa línuna (og keðju fallakalla).
- Hver keyrsla hefur skrefamörk (Keyrsluvalkostir í spjaldinu); endalaus lykkja stöðvast með skilaboðum, eða ýttu á stöðvunarhnappinn {{ui:Stöðva}}.
- Fylki geyma allt að 134 milljónir gilda hvert.

## Ekki eins og MATLAB

- Teiknifyrirmæli setja valkosti sína í kallið: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` og þess háttar eru samþykkt en gera ekkert.
- `input` og `keyboard` eru ekki studd: skrift getur ekki stöðvast til að spyrja spurningar.
- Engin verkfærakassa eru til; [greiningarsafnið](topic:craftscript-library) og innbyggðu föllin eru það sem er til.
