---
title: የምህንድስና ቤተ-መጻሕፍት
summary: የመማሪያ መጽሐፍ ቀመሮች በሚነበቡ ስክሪፕቶች፣ በSI አሃዶች፣ እያንዳንዱ ውጤት ከምንጩ ጋር፦ የቧንቧና የቦይ ፍሰት፣ የሙቀት ማስተላለፍና ሙቀት ለዋጮች፣ የግፊት ክፍሎች፣ የጋዝ ዳይናሚክስ፣ የውሃና የአየር ባህሪያት፣ ቁሳቁሶች፣ እና የሚፈተሹ አሃዶች። ለምን እንደሚጠቅም እና የት እንደሚቆም።
keywords: ምህንድስና, ቤተ-መጻሕፍት, አሃዶች, Darcy-Weisbach, Colebrook, Reynolds, የግጭት ኮፊሸንት, Dittus-Boelter, Gnielinski, NTU, effectiveness, LMTD, ፊን, Barlow, Lame, ኖዝል, isentropic, Mach, የታነቀ ፍሰት, ውሃ, አየር, ባህሪዎች, ቁሳቁስ, ምንጮች
from: 786ef967
---

የምህንድስና ቤተ-መጻሕፍት በስክሪፕት ስራ ቦታው ቤተ-መጻሕፍት (`craftlib/eng`) ውስጥ የስክሪፕቶች ስብስብ ነው። እያንዳንዱ ከላይ እስከ ታች የሚነበብ ተግባር ነው፣ በራስጌው **ዘዴው**፣ **አሃዶቹ**፣ **ገደቦቹ**፣ **ማጣቀሻዎቹ** እና በሰራ ቁጥር ያለው **ፍተሻ** አለው። በሁሉም ቦታ የSI አሃዶችን ይጠቀማሉ፣ እና **አሃድና ምንጭ** ያላቸው ብዛቶችን ይመልሳሉ፣ ስለዚህ የመረጃ ሉህ እያንዳንዱ ቁጥር ከየት እንደመጣ ማተም ይችላል።

## የተፈተሹ አሃዶች

`to_si(10, 'bar', 'Pa')` እሴትን ይለውጣል፣ ግፊት በሚጠበቅበት ቦታ ርዝመት ያሉ የሌላ ነገር አሃድ ይከለክላል። `from_si`፣ `unit_convert(1, 'bar', 'psi')` እና `unit_kind('W/(m K)')` ("thermal conductivity") በተመሳሳይ መንገድ ይሠራሉ። `temp_k(25, 'C')` እና `temp_from_k` ሙቀቶችን ይለውጣሉ፣ ምክንያቱም ሙቀቶች ማካካሻ አላቸው።

## ባህሪዎች

- `fluid('water', T)` እና `fluid('air', T, p)`፦ ጥግግት፣ ዝልግልግነት፣ ኮንዳክቲቪቲ፣ ልዩ ሙቀት፣ የPrandtl ቁጥር። ውሃ ከ0 እስከ 100 °C፣ አየር ከ250 እስከ 600 K፤ ከዚያ ውጭ ከመገመት ይልቅ ይቆማል።
- `material('ss304')`፦ የYoung ሞዱለስ፣ የPoisson ሬሾ፣ ጥግግት፣ ምርት፣ ኮንዳክቲቪቲ፣ ልዩ ሙቀት፣ መስፋፋት፦ ከSimulation ጋር በተመሳሳዩ መረጃ ሉሆች የክፍል ሙቀት እሴቶች። እውነተኛ ዲዛይን የአቅራቢውን የተረጋገጡ አሃዞች ይጠቀማል። የሙቀት ጥምዞች ገና አልተሠሩም።

## በቧንቧዎችና ቦዮች ውስጥ ፍሰት

`reynolds`፣ `hydraulic_diameter`፣ `friction_factor` (ላሚናር፣ ከዚያም ለተዘበራረቀ ፍሰት የColebrook እኩልታ፤ የ2300 እስከ 4000 ክልል አስተማማኝ ቀመር የለውም፣ ይህንም ይናገራል)፣ `darcy_weisbach`፣ `minor_loss`፣ `pipe_flow` (ክብ ቧንቧ፣ ሁሉም በአንድ ጊዜ) እና `rect_channel` (ላሚናር ኦርቶግራፊክ ቦዮች በShah እና London ማስማሚያ)።

## የሙቀት ማስተላለፍ

`nusselt_dittus_boelter`፣ `nusselt_gnielinski`፣ `nusselt_tube` (ላሚናር ወይም ተዘበራራቂ ይመርጣል እና ዝምድናውን ይሰይማል)፣ `htc`፣ `fin_efficiency`፣ `lmtd`፣ `effectiveness` እና `ntu_for` (ለcounterflow፣ parallel፣ shell-and-tube፣ crossflow እና ለአንድ የሚለዋወጥ ፍሰት የeffectiveness-NTU ግንኙነቶች)፣ እና `hx_size` (ግዴታው የሚፈልገውን የUA መጠን፤ ግዴታው ካልተሟላ ምን ያህል እንደሚቻል ይናገራል)።

## የግፊት ክፍሎች

`allowable_stress` (ምርት ÷ የደህንነት ፋክተር)፣ `wall_thin_cylinder`፣ `barlow`፣ `wall_thick_cylinder` (Lamé፣ በhoop ወይም በshear መመዘኛ) እና `wall_sphere`። እነዚህ የመማሪያ መጽሐፍ ህዳጎች ናቸው፣ **የግፊት-ዕቃ ኮድ ስሌት አይደሉም**፦ የዝገት አበል፣ የመገጣጠሚያ ብቃት ወይም የኮድ ፋክተሮች የሉም።

## የጋዝ ዳይናሚክስ

`isentropic` (በMach ቁጥር ያሉ ሬሾዎች)፣ `mach_from_area`፣ `choked_flow`፣ `throat_area` እና `exit_mach`፣ ለፍጹም ጋዝ ያለ ግጭት፣ ሙቀት ወይም ድንጋጤ።

## ውጤቱን ፈትሽ

`check_stress`፣ `check_thermal` እና `check_flow` የPartCraft የራሱን የጭንቀት፣ የኮንዳክሽን እና የፍሰት ሶልቨሮች በስክሪፕቱ የተሠራ ክፍል ላይ ያሄዳሉ፣ ከፍተኛውን ጭንቀትና መፈናቀል፣ ሙቀቶችንና የሙቀት ፍሰትን፣ እንዲሁም የቦይ አውታረ መረብ ፐርሜያቢሊቲን ያነባሉ። በሶልቨሮቹ ላይ ምንም ለውጥ አያደርጉም። የጭንቀትና የሙቀት ፍተሻዎች ቮክሰሎችን ይጠቀማሉ፣ ስለዚህ ጥምዝ ፊት ደረጃ ነው፣ እና በሹል ውስጠኛ ጥግ ወይም በነጥብ ጭነት ላይ ያለው ጭንቀት በቮክሰሉ መጠን ይወሰናል።
