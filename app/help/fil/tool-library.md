---
title: Ang tool library
summary: I-save ang mga tool na ginagamit mo sa browser para magamit ng bawat piyesa ang mga ito, at ilipat ang mga tool library sa pagitan ng mga computer bilang JSON file.
keywords: tool library, tools, export, import, JSON, i-save ang tools, T number, end mill, shop tools
from: 8b9f2483
---

Ang tab na **Tools** ng Manufacture ay naglilista ng mga tool ng piyesa. Sa ilalim ng **Tool library** maaari mong itago ang sarili mong mga tool nang higit pa sa isang piyesa:

- {{ui:Save this tool}} ay idinaragdag ang napiling tool sa **My saved tools**; {{ui:Save all of this part's tools}} ay idinaragdag silang lahat. Nananatili ang My saved tools sa browser na ito at nandoon para sa bawat piyesa. Hindi na muling sine-save ang tool na na-save mo na (parehong uri, laki, flute at overrides).
- {{ui:Add to this part}} ay inilalagay ang napiling naka-save na tool sa piyesa. Kung ginagamit na ng ibang tool sa piyesa ang T number nito, makakakuha ito ng susunod na bakanteng numero at sinasabi ito ng panel. {{ui:Remove from my library}} ay inaalis ito sa listahan ng naka-save (hindi sa mga piyesang mayroon na nito).
- {{ui:Export tools…}} ay nagsusulat ng mga tool ng piyesa bilang `.json` file; {{ui:Import tools…}} ay nagdaragdag ng mga tool ng ganoong file sa piyesa, na may parehong mga patakaran (nilalaktawan ang tool na nandoon na, at inililipat ang T number na nakuha na). Kasama sa file ang mga laki, flute, material at ang feed at speed overrides na itinype mo; wala itong id. Gamitin ito para ilipat ang mga tool ng isang shop sa ibang computer o ibigay sa kasamahan.

Kapag hindi kayang panatilihin ng browser ang library (naka-off o puno ang storage), sinasabi ito ng pag-save, at ang **Export tools** ang paraan para itago ang file. Dapat na PartCraft tool library ang file ng bersyong ito o mas luma, na may hanggang 500 tool ng wastong laki; anumang iba ay tinatanggihan kasama ang dahilan.

Ang bilis ng pagputol at chip loads na kasama ng tool ay mga panimulang halaga; tingnan ang [Make toolpaths and G-code](topic:manufacture).
