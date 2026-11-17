---
title: 0.9 တွင် အသစ်
summary: PartCraft 0.9 တွင် မျက်နှာများကြား fillets နှင့် solids အဖြစ် ထူခြင်း၊ အစိတ်အပိုင်း ထောင်ပေါင်းများစွာ အစုအဝေးများ၊ revisions ပါသော Documents vault၊ Solid FEM stress add-on၊ arc နည်းလမ်း ဆယ်မျိုး၊ UK steel အရွယ်အစားများ၊ Print stage နှင့် resin printing add-ons တို့ ပါဝင်သည်။
keywords: whats new, what's new, release notes, changelog, 0.9, fillet between faces, rolling ball, fillet several edges, thicken, solid from surfaces, step shell, iges solid, scan fillets, large assembly, lightweight display, 20000 parts, documents, vault, check out, revision, release, where used, rhino link, grasshopper, 3dm, cursors, factory floor, job queue, solid fem, finite element, von mises, natural frequency, arc methods, 3-point arc, uk steel sections, blue book, print stage, resin, goo, ctb, bed, lay flat, whats new, what's new, release notes, changelog, ပြောင်းလဲမှုများ, 0.8, 0.8.1, version, အင်္ဂါရပ်သစ်များ, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch from a photo, scale for printing, split for printing, shrinkage, nested sheets, g-code, drawing, dimension holes, assistant, mcp, languages, toolbar rows
from: 96d9fbfa
---

ဤသည်မှာ 0.8.1 နှင့် နှိုင်းယှဉ်လျှင် PartCraft 0.9 တွင် ပြောင်းလဲခဲ့သည်များ ဖြစ်သည်။ မျက်နှာပြင် အသစ်များသည် ယခု solids အဖြစ် ပိတ်ပြီး၊ အစိတ်အပိုင်း ထောင်ပေါင်းများစွာ အစုအဝေးများ ဆက်အသုံးဝင်နေသည်၊ Documents vault က revisions ကို ထိန်းထားပြီး Solid FEM add-on က အစိတ်အပိုင်းတွင် stress ကို စစ်သည်။ အချက်တိုင်းတွင် ရှာရမည့်နေရာ ပြထားသည်။

## 0.9.1 တွင် အသစ်

- **Exact STEP export။** {{ui:ထုတ်ရန်}} › {{ui:STEP AP242 (exact solid)}} နှင့် {{ui:STEP AP214 (exact solid)}} ယခု အလုပ်လုပ်သည်။ အပေါက်များ၊ bosses၊ fillets၊ cones၊ spheres နှင့် tori များကို မှန်ကန်သော မျက်နှာများပေါ်တွင် အမှန်စက်ဝိုင်းများကို edges အဖြစ် ရေးသည်၊ ထို့ကြောင့် အခြား CAD သို့မဟုတ် CAM ပရိုဂရမ်က အပေါက်ကို အပေါက်အဖြစ် ရွေးနိုင်သည်။ Spline ဘက်များ၊ modelled threads နှင့် တင်သွင်းထားသော meshes များသည် တူညီသော solid တွင် ပြား facets အဖြစ် ဆက်ရှိသည်။ [ပရင့်ထုတ်ရန်၊ STEP နှင့် DXF အတွက် export](topic:export-files#for-other-cad-programs-step) ကို ကြည့်ပါ။
- **STEP ဝင်၊ exact STEP ထွက်။** သင်ဖွင့်သော STEP ဖိုင်သည် ၎င်း၏ ကိုယ်ပိုင် ပြား မျက်နှာများ၊ ဘီလုံများ၊ cones၊ spheres နှင့် tori များကို ထိန်းထားသည်၊ ထို့ကြောင့် {{ui:ထုတ်ရန်}} › {{ui:STEP AP242 (exact solid)}} သည် facets အစား အမှန်မျက်နှာများအဖြစ် ပြန်ရေးသည်: ဘောင်ခွါ အပေါက်များပါသော ပေးသွင်းသူ၏ အလျား-ဘောင်သည် ဝင်လာသည့် မျက်နှာများနှင့်အတူ ထွက်သည်၊ ထို့အပြင် သင် ဖြတ်ထည့်ထားသမျှ။ ဖိုင်၏ spline၊ swept နှင့် revolved မျက်နှာများသည် facets အဖြစ် ကျန်ရှိပြီး STL, OBJ နှင့် 3MF မှ ကိုယ်ထည်များလည်း ထိုနည်းအတူ။ အစောပိုင်း သိမ်းထားသော အစိတ်အပိုင်းအတွက် STEP ဖိုင်ကို ထပ်ဖွင့်ပါ။ [STEP ဖိုင်ကို ဖွင့်ပြီး တည်ဆောက်ခြင်း](topic:import-step) ကို ကြည့်ပါ။
- **Face DXF တွင် အမှန်စက်ဝိုင်းများ။** {{ui:ထုတ်ရန်}} › {{ui:DXF of the sketch or flat face}} ကို ပြား မျက်နှာတစ်ခုရွေးပြီး အသုံးပြုသည့်အခါ အပေါက်ပုံစံ စက်ဝိုင်းများကို ထိုအပေါက်၏ ကိုယ်ပိုင် အလယ်နှင့် radius ဖြင့် စက်ဝိုင်းအဖြစ် ရေးသည်၊ လေဆာ၊ plasma သို့မဟုတ် waterjet စားပွဲအတွက်။ အခြား စက်ဝိုင်းအစွန်းများသည် facets ဖြစ်ဆဲ ဖြစ်သည်။
- **ဆိုင်အတွက် Exact STEP။** {{ui:Manufacture}} တွင် {{ui:Exact STEP (work coordinates)}} သည် အစိတ်အပိုင်းကို setup ၏ work origin တွင် မူရင်းနေရာနှင့် Z ကို tool ဝင်ရိုးအတိုင်း ရေးသည်၊ G-code က သုံးသော သြဒိနိတ်များ။ [Toolpaths နှင့် G-code ပြုလုပ်ခြင်း](topic:manufacture#exact-step-for-the-shop) ကို ကြည့်ပါ။

## အသစ်

### မျက်နှာပြင်များနှင့် solids

- **မျက်နှာများကြား Fillet။** {{ui:လုပ်ငန်းခွင်}} အကွက်ရှိ {{ui:မျက်နှာပြင်များ}} ကို ရွေးပြီး {{ui:မျက်နှာများကြား Fillet}} ကို ရွေးပါ။ solid တစ်ခု၏ မျက်နှာနှစ်ခုကို ရွေးပါ၊ radius ကို ရိုက်ထည့်ပါ (နှင့် အစွန်းတလျှောက် ပြောင်းသော radius အတွက် {{ui:Radius at the end (mm, 0 = the same)}})။ ရလဒ်စာကြောင်းက fillet သည် စံပြ rolling ball ထက် ဘယ်လောက်ကွာသည်ကို ပြောပြပြီး မသင့်သော radius ကို မျက်နှာ အမည်ဖြင့် ငြင်းသည်။ {{ui:Fillet several edges}} သည် အစွန်းများစွာကို တစ်ဆင့်တည်းဖြင့် ခွေသည်; ပြား မျက်နှာ ခုံ သုံးခု ဆုံသည့်နေရာတွင် sphere ထောင့် အတွက် {{ui:Corners (sphere patch where three meet)}} ကို အမှန်ခြစ်ပါ။ [Freeform surfaces (NURBS)](topic:nurbs-surfaces) ကို ကြည့်ပါ။
- **Solid အဖြစ် ထူခြင်း။** {{ui:Thicken into a solid}} သည် တူညီသော workspace တွင် မျက်နှာတစ်ခုကို အထူပေးသည်; {{ui:Other side}} က တခြားဘက်သို့ ကြီးစေသည်။ ခေါက်ခြင်း သို့မဟုတ် ကိုယ်ပိုင် ဖြတ်ကျော်ခြင်းကို မျက်နှာနှင့် နေရာအမည်ဖြင့် ငြင်းသည်။
- **မျက်နှာများမှ solids။** trimmed surfaces များကို union, subtract နှင့် intersect ဖြင့် ပေါင်းပြီး တစ်ခု ခြေလှမ်းတစ်ခု undo ဖြင့် အစိတ်အပိုင်းအတွင်း ထည့်နိုင်သည်။ STEP သည် solid တစ်ခုကို shell ပိတ်တစ်ခုအဖြစ် ရေးပြီး IGES သည် solid တစ်ခုအဖြစ် ရေးသည်; နှစ်ခုစလုံး solid အဖြစ် ပြန်ဖတ်သည်။ မျက်နှာများက အစွန်းတစ်ခုစီအလိုက် မတိုက်ဆိုင်ပါက ဖိုင်သည် သီးခြား မျက်နှာများကို ရရှိပြီး အခြေအနေစာကြောင်းက ထိုသို့ ပြောသည်။ Solids များကို node editor တွင်လည်း ဖန်တီးနိုင်သည်; [Node editor](topic:nodes) ကို ကြည့်ပါ။
- **Scans ထဲရှိ Rim နှင့် variable fillets။** scan တစ်ခုကို မျက်နှာများနှင့် ကိုက်ညီအောင် လုပ်သည့်အခါ rim fillets (tori) နှင့် ပြား-ဆွဲထားသော အစွန်းတလျှောက် variable-radius fillets များကိုလည်း ရှာပြီး ၎င်းတို့၏ radius ဖြင့် စာရင်းပြုသည်။ စမ်းသပ်ထားခြင်းမှာ ပြုလုပ်ထားသော scans များပေါ်တွင်သာ ဖြစ်သည်။

### အစုအဝေး၊ documents နှင့် links

- **အစုအဝေးကြီးများ။** ပုံတူ အစိတ်အပိုင်းများသည် mesh တစ်ခုကို မျှဝေပြီး {{ui:Views}} › {{ui:Lightweight display}} သည် မြင်ကွင်းကို ရွေ့လျားနေစေရန် ဘောက်စ်များကို ဆွဲသည် (အလွန်ကြီးမားသော အစုအဝေးများအတွက် အလိုအလျောက် ဖွင့်သည်; ရွေးချယ်ခြင်းနှင့် joints များက တကယ့်အစိတ်အပိုင်းများကို ဆက်သုံးသည်)။ အစိတ်အပိုင်းသစ်ပင်သည် ပထမ အတန်းများကို ပြပြီး ကျန်သည်အတွက် {{ui:Show 700 more}} ခလုတ်ကို ပြသည်။ အစုအဝေးဖိုင်များတွင် instances 50,000 နှင့် joints 100,000 အထိ ပါနိုင်သည်။ [အစုအဝေး တည်ဆောက်ခြင်း](topic:build-assembly) ကို ကြည့်ပါ။
- **Documents။** **File** အုပ်စုရှိ {{ui:Documents…}} သည် ပရောဂျက်ဖိုဒါတစ်ခုပေါ်တွင် ဒိုင်ယာလော့ခ်ကို ဖွင့်သည်: check out နှင့် check in၊ revision အက္ခရာများ၊ states (work in progress, for review, released, obsolete)၊ သမိုင်း၊ where-used နှင့် bill of materials။ [Documents နှင့် revisions (vault)](topic:documents-walkthrough) ကို ကြည့်ပါ။
- **Rhino link တိုက်ရိုက်။** script တစ်ခု `cadcraft_link.py` သည် Rhino သို့မဟုတ် Grasshopper document ကို ကြည့်ပြီး ပြောင်းလဲသည့်အရာကိုသာ PartCraft သို့ တွန်းသည်၊ ထို့နောက် တင်သွင်းထားသော feature သည် shape အသစ်ပေါ်တွင် ပြန်တည်ဆောက်သည်။ တစ်လမ်းသွားဖြစ်ပြီး Studio လိုအပ်သည်။ [Live .3dm link](topic:live-3dm-link) ကို ကြည့်ပါ။
- **တခြားသူတို့ရဲ့ cursors ကို မြင်ရခြင်း။** မျှဝေသော session တွင် လူတိုင်း၏ cursor သည် ၎င်းတို့၏ အမည်နှင့် ရွေးထားသော feature ဖြင့် ပြသည်။ [အတူတကွ လက်တွေ့ အလုပ်လုပ်ခြင်း](topic:work-live) ကို ကြည့်ပါ။
- **Factory floor။** {{ui:ဆက်တင်များ}} › {{ui:Add-ons}} တွင် Factory floor add-on ကို ဖွင့်ပါ။ {{ui:Manufacture}} တွင် ပရိုဂရမ်ကို post လုပ်ပြီးနောက် ၎င်း၏ tab သည် {{ui:Add to the factory job queue}} သို့မဟုတ် {{ui:Save as a job file}} လုပ်နိုင်သည်။ ၎င်းသည် စက်ကို ဘယ်တော့မှ မပို့ သို့မဟုတ် မစတင်ပါ။

### ခွဲခြမ်းစိတ်ဖြာမှုနှင့် အစိတ်အပိုင်းများ

- **Solid FEM add-on။** {{ui:ဆက်တင်များ}} › {{ui:Add-ons}} တွင် {{ui:Solid FEM}} ကို ဖွင့်ပါ (သင်မဖွင့်မချင်း ပိတ်ထားသည်) ထို့နောက် ညာဘက် panel တွင် {{ui:Solid FEM}} tab ပေါ်လာသည်။ {{ui:Mesh the part}}၊ 3D မြင်ကွင်းတွင် ပြင်ထားသော မျက်နှာများနှင့် loads များကို ရွေးပါ၊ {{ui:Solve}}၊ ထို့နောက် displacement, von Mises stress သို့မဟုတ် mode shape ကို {{ui:Show on the model}} ဖြင့် ဆွဲပါ။ [Solid FEM: stress စစ်ဆေးမှု](topic:solid-fem-check) ကို ကြည့်ပါ။
- **Sketches ထဲရှိ Arc၊ နည်းလမ်း ဆယ်မျိုး။** sketch toolbar ရှိ {{ui:Arc}} ဘေးရှိ မြားသည် 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length နှင့် Continue ကို စာရင်းပြုသည်။ [Arc ကို နည်းလမ်း ဆယ်မျိုးဖြင့် ဆွဲခြင်း](topic:sketch-arc-methods) ကို ကြည့်ပါ။
- **UK သံမဏိ အရွယ်အစားများ။** Weldments သည် UK sections 976 ခု (UB, UC, PFC, EA, UEA, CHS, SHS, RHS) ကို သုံးနိုင်သည်; `305x165x40 UB` ကဲ့သို့ အရွယ်အစားကို ရိုက်ထည့်ပါ။ [Structural members](topic:structural-members) ကို ကြည့်ပါ။

### ပရင့်ထုတ်ခြင်း

- **Print stage။** toolbar ရှိ {{ui:Print stage}} ခလုတ် (add-on 3D Print၊ မူလ ဖွင့်ထား) သည် သင့်အစိတ်အပိုင်း၏ ကိုယ်ထည်များကို dashed bed ပေါ်တွင် ထားသည်: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, ထို့နောက် USB, Klipper (Moonraker), OctoPrint သို့မဟုတ် PrusaLink မှတစ်ဆင့် {{ui:Send to 3D printer}}။ သင် အတည်မပြုမချင် ဘာမျှ မပို့ပါ၊ အစိတ်အပိုင်းကို ဘယ်တော့မှ မပြောင်းပါ။ STL သို့မဟုတ် 3MF ဖိုင်အတွက် [3D ပရင့်ထုတ်ရန် အစိတ်အပိုင်းကို ပြင်ဆင်ခြင်း](topic:print-3d) ကို ကြည့်ပါ။
- **Resin printing။** {{ui:ဆက်တင်များ}} › {{ui:Add-ons}} တွင် add-ons များ၊ သင်ဖွင့်မချင်း အားလုံး ပိတ်ထား: resin slicer၊ exposure test နှင့် ဖိုင်ဖော်မတ် Elegoo GOO, SL1, Chitubox CBDDLP/CTB နှင့် Anycubic။ Slicing သည် worker thread ပေါ်တွင် လုပ်သဖြင့် စာမျက်နှာ တုံ့ပြန်မှု ရှိနေသည်။

## အက်ပ်အားလုံးတွင်

- hover အကြောင်းကြားချက်တိုင်းသည် Bootstrap tooltip ဖြစ်သည်။
- စတင်အကြံပြုချက်တွင် ပိတ်ရန် ခလုတ် ရှိသည်; ပိတ်ထားလျှင် ပိတ်ထားဆဲ။
- ဘားထဲတွင် မကိုက်ညီသော tabs အတန်းသည် ဖြတ်တောက်မခံဘဲ ဘေးသို့ scroll လုပ်သည်။
- browser tab သည် PartCraft | CadCraft မတိုင်မီ ဖွင့်ထားသော စာရွက်စာတမ်း၏ အမည်ကို ပြသည်။
- {{ui:ဆက်တင်များ}} သည် workspace {{ui:Layout}} ကို ရွေးချယ်မှု drop-down အဖြစ် ပြပြီး ဘာသာစကားအကွက်သည် build တွင် ရှိသည့် ဘာသာစကားအားလုံးကို စာရင်းပြုသည်။
- Weight နှင့် Temperature သည် Units ဆက်တင်များတွင် ယူနစ်အမျိုးအစားများ ဖြစ်သည်။

## ပြင်ဆင်ပြီး

- sketch Arc menu သည် နည်းလမ်းအားလုံးကို ယခု စာရင်းပြုသည်။
- add-on toolbar နှင့် browser tab ခေါင်းစဉ်ကို 2026-11-09 တွင် ပြင်ဆင်ခဲ့သည်။

## ရိုးရိုးသား ကန့်သတ်ချက်များ

- Exact STEP ကို OpenCascade တွင် ပြန်ဖတ်ခဲ့သည် (မှန်ကန်သော solids၊ လက်ဖြင့် တွက်ထားသော ထုထည်များနှင့် ညီသည်)။ CAD သို့မဟုတ် CAM ပရိုဂရမ်တိုင်းတွင် မဖွင့်ရသေးပြီး အစုအဝေးကို exact STEP အဖြစ် မရေးပါ။
- စက်ပေါ်တွင် အစစ်အမှန် မပရင့်ရသေးပါ။ Slicing, G-code နှင့် resin ဖိုင်များကို ကိုယ်ပိုင် ပရိုဂရမ်များ သို့မဟုတ် stand-in printer က ပြန်ဖတ်ခဲ့သည်; resin ဖော်မတ်တစ်ခုမျှ printer တွင် မရောက်ခဲ့ပါ၊ printer အရွယ်အစားနှင့် exposure များသည် စတင်အချက်များ ဖြစ်သည်။
- Solid FEM သည် linear၊ isotropic နှင့် elastic ဖြစ်ပြီး အစိတ်အပိုင်းတစ်ခုလျှင် ပစ္စည်းတစ်မျိုး၊ contact, yield သို့မဟုတ် buckling မပါ။ ပြင်ထားသော မျက်နှာများနှင့် ထောင့်ထက်မြက်သည့်နေရာများ၏ stress သည် mesh အပေါ် မူတည်သည်။ ၎င်းသည် စစ်ဆေးရေးကိရိယာတစ်ခုဖြစ်ပြီး အင်ဂျင်နီယာက သုံးသပ်ထားခြင်း မရှိပါ။
- အစုအဝေးကြီး၏ အချိန်တိုင်းတာချက်များသည် GPU မပါသော ဆာဗာမှ ဖြစ်သည်; အစိတ်အပိုင် 20,000 ၏ အပြည့်အဝ frame ကိုတောင် ထိုနေရာတွင် စက္ကန့်များ ကြာသည်။
- Fillets များသည် မျက်နှာ တစ်စုံပေါ်တွင် အလုပ်လုပ်သည်; ယေဘုယျ vertex blend မရှိပါ၊ မထိသော မျက်နှာများကြား fillet မရှိပါ။
- Rhino link ကို အစစ်အမှန် Rhino သို့မဟုတ် Grasshopper အတွင်း မလည်ပတ်ရသေးပါ။ Documents ကို ပရိုဂရမ် နှစ်ခုက ဖိုင်တွဲတစ်ခုတည်းတွင် စမ်းသပ်ပြီး လူနှစ်ယောက်က network share ပေါ်တွင် မစမ်းရသေးပါ။
- အစစ်အမှန် scan တစ်ခုကို မျက်နှာများနှင့် ကိုက်ညီအောင် လုပ်ခြင်းကို လက်ဖြင့် မစစ်ရသေးပါ။ အင်္ဂလိပ်မဟုတ်သော ဘာသာစကားများသည် စက်ဖြင့် ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်သည်။
- Windows installers များကို code-signed မလုပ်ထားပါ၊ macOS disk image ကို notarize မလုပ်ထားပါ။ [ပြဿနာရှာဖွေခြင်း](topic:troubleshooting) ကို ကြည့်ပါ။

ယခင် ပြောင်းလဲမှုများသည် [0.7 တွင် အသစ်](topic:whats-new-0-7) တွင် ရှိသည်။

## ယခင်: 0.8 နှင့် 0.8.1

ဤသည်မှာ 0.7 နှင့် နှိုင်းယှဉ်လျှင် PartCraft 0.8 နှင့် 0.8.1 တွင် ပြောင်းလဲခဲ့သည်များ ဖြစ်သည်။ simulation သည် သင်ပြင်နေစဉ် ဖြေပေးပြီး ဘာ အရင်ပျက်မလဲဆိုသည်ကို ပြောသည်၊ အစုအဝေးများသည် motion studies ရသည်၊ workspace အသစ်များက မျက်နှာပြင်အလွတ်များနှင့် ရုပ်ပိုင်းဆိုင်ရာ ပမာဏဖြင့် အစိတ်အပိုင်းများ ဖန်တီးသည်။ 0.8.1 သည် အသေးစား ပြင်ဆင်ချက် ထုတ်ပြန်မှု ဖြစ်သည်။

### အသစ်

**Simulation**

- **Update while I edit။** Solve block ရှိ {{ui:Update while I edit}} ကို အမှန်ခြစ်ပါ၊ ထို့ကြောင့် အဖြေများက သင့်ပြင်ဆင်မှုများကို လိုက်သည်။ အတိုင်းအတာ၊ load သို့မဟုတ် ပစ္စည်းကို ပြောင်းလျှင် element လေးဆ ကြီးသော အမြန်အဖြေတစ်ခု ချက်ချင်း ပေါ်လာသည်; တစ်စက္ကန့်ခန့် ရပ်လိုက်လျှင် လေ့လာမှု၏ ကိုယ်ပိုင် ပိုတိကျသော အဖြေက အမြန်အဖြေကို အစားထိုးသည်။ ရလဒ်များက သင်ကြည့်နေသော အဖြေကို ပြောသည်။ သံမဏိ cantilever တွင် အမြန်အဖြေသည် ပိုတိကျသော အဖြေနှင့် deflection တွင် 1% အတွင်း၊ stress တွင် 4% ခန့်အတွင်း ဖြစ်သည်။ [stress နှင့် deflection စစ်ဆေးခြင်း](topic:simulation#update-while-you-edit-live) ကို ကြည့်ပါ။
- **ဘာ အရင်ပျက်မလဲ။** static သို့မဟုတ် buckling လေ့လာမှုအတွက် **Break it** block ရှိ {{ui:What breaks first?}} သည် ပျက်သည်အထိ loads များကို စကေးလုပ်သည်။ အဆိုးဆုံးကို ရှေ့ဆုံးထားပြီး yield အထိ load factor (stress အမြင့်ဆုံးနေရာတွင် အနီရောင် အမှတ်ဖြင့်) နှင့် buckling အထိ load factor ကို စာရင်းပြုသည်။ factor 1 အောက်ဆိုလျှင် အစိတ်အပိုင်းသည် ဝန်တင်ထားစဉ်ပင် ပျက်နေပြီဖြစ်ပြီး Problems က error ပြသည်။ factors များသည် linear လေ့လာမှုမှ ထွက်လာသဖြင့် ၎င်းသည် ၎င်းလောက်သာ ကောင်းသည်။ [stress နှင့် deflection စစ်ဆေးခြင်း](topic:simulation#find-out-what-breaks-first-break-it) ကို ကြည့်ပါ။
- **Yielding နှင့် contact။** လေ့လာမှုအမျိုးအစား နှစ်ခု ထပ်တိုး: ပစ္စည်းက yield stress အထိ ၎င်း၏ ဖြောင့်သောမျဉ်းကို လိုက်ပြီး ထို့နောက် ပိုပြားသော စောက်ထောင်ပမာဏသို့ ပြောင်းသော nonlinear တစ်ခု၊ plastic strain ကို ပုံဖော်ထားသည်; နှင့် ခွဲထားသော အစိတ်အပိုင်းများ တစ်ခုကို တစ်ခု တွန်းသော (ပွတ်တိုက်မှုမရှိ) သို့မဟုတ် တင်းကြပ်စွာ ကပ်နေသော (bonded) contact တစ်ခု။ ပြီးဆုံးရန် မဖြစ်နိုင်သော load step သို့မဟုတ် တစ်ခုကို တစ်ခု အလွန်နက်နက် ဝင်သွားသော အစိတ်အပိုင်းများကို Problems panel တွင် ပြသည်။ ပွတ်တိုက်မှု၊ ကြီးမားသော ပွတ်ဆွဲမှု၊ ကြီးမားသော လည်ပတ်မှု၊ ကြီးမားသော deflection နှင့် fatigue များကို မဖြေရှင်းပါ။ [stress နှင့် deflection စစ်ဆေးခြင်း](topic:simulation#yielding-and-contact-nonlinear-studies) ကို ကြည့်ပါ။
- **CalculiX အတွက် decks။** {{ui:ထုတ်ရန်}} › {{ui:CalculiX deck (.inp)}} သည် လေ့လာမှုကို CalculiX အတွက် သိမ်းသည်၊ သင် ထည့်သွင်းပြီး ကိုယ်တိုင် လုပ်ဆောင်သော သီးခြား ပရိုဂရမ်; {{ui:ထုတ်ရန်}} › {{ui:CalculiX results (.frd)}} သည် ၎င်း၏ ရလဒ်ဖိုင်ကို တူညီသော mesh ပေါ်သို့ ပြန်ဖတ်သည်။ PartCraft က ထိုပရိုဂရမ်ကို ဘယ်တော့မှ မစတင်ပါ၊ deck သိမ်းပြီးနောက် အစိတ်အပိုင်း ပြောင်းလဲခဲ့လျှင် ထိုသို့ ပြောသည်။

**အစုအဝေးများ**

- **Motion studies။** {{ui:Assembly}} › {{ui:Motion}} သည် joint တစ်ခု၏ တန်ဖိုးကို သင်ပေးသော အချိန်အတွင်း မောင်းသည် (အမြဲတမ်းအမြန်နှုန်း၊ ပြေလျော့သော၊ sine၊ သို့မဟုတ် ထွက်ပြီး ပြန်ဝင်သည်), အစုအဝေးကို အဆင့်တိုင်းတွင် joints နှင့် ပိတ်ထားသော loops ဖြင့် နေရာချထားပြီး ဘာ ထိုးဝင်သည်နှင့် အစိတ်အပိုင်းများ ဘယ်လောက်နီးသည်ကို ပြသည်။ {{ui:Add a point}} သည် အမှတ်တစ်ခု၏ နေရာ၊ အမြန်နှုန်းနှင့် အရှိန်ကို၊ joint ၏ တန်ဖိုးကို နှင့် clearance ကို အချိန်နှင့်အတူ ပုံဖော်သည်; {{ui:Save CSV}} နှင့် {{ui:Save plot}} က ၎င်းတို့ကို ရေးထုတ်သည်။ {{ui:Run}} ပြီးနောက် run bar ရှိ Step through သည် အစုအဝေးကို အဆင့်မည်သည့်နေရာသို့မဆို ရွှေ့သည်။ လေ့လာမှု၏ ဆက်တင်များကို အစုအဝေးဖိုင်တွင် သိမ်းသည်။ အမြန်နှုန်းနှင့် အရှိန်ကို မှတ်တမ်းတင်ထားသော နေရာများမှ တွက်သဖြင့် အထွတ်အထိပ်ချွန်သည့်အရာကို နိမ့်ပြလျှင် အဆင့်များ ပိုထည့်ပါ။ [အစုအဝေး ထိုးဝင်မှုနှင့် လှုပ်ရှားမှု စစ်ဆေးခြင်း](topic:check-assembly#a-motion-study) ကို ကြည့်ပါ။

**မျက်နှာပြင်များနှင့် ရုပ်ပိုင်းဆိုင်ရာ ပေါ်မူတည်သော အစိတ်အပိုင်းများ**

- **Surfaces workspace။** NURBS မျဉ်းကွေးများနှင့် မျက်နှာပြင်များအတွက် {{ui:လုပ်ငန်းခွင်}} အကွက်တွင် {{ui:Surfaces}} ကို ရွေးပါ အစိတ်အပိုင်းဘေးတွင်: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} နှင့် {{ui:Zebra}}၊ ဆက်စပ်မှု (G0, G1 သို့မဟုတ် G2) ကို တိကျသော မျက်နှာများပေါ်တွင် တိုင်းတာပြီး သင်တောင်းသည်ထက် ပိုဆိုးသော အစွန်းကို Match fix ဖြင့် Problems တွင် စာရင်းပြုသည်။ {{ui:Fair}} သည် hull lines များကို inflections နှင့် curvature ခုန်တက်မှုများအတွက် တိုင်းတာပြီး မညီသောများကို သင့် tolerance အတွင်း ပြန်တည်ဆောက်သည်။ Surfaces များကို အစိတ်အပိုင်းဖိုင်တွင် သိမ်းပြီး အစိတ်အပိုင်း၏ features များကို မပြောင်းပါ။ [Freeform surfaces (NURBS)](topic:nurbs-surfaces) ကို ကြည့်ပါ။
- **Engineer workspace။** workspace switcher တွင် {{ui:Engineer}} ကို ရွေးပါ၊ generator တစ်ခုကို ရွေးပြီး {{ui:New}} ကို နှိပ်ပါ: script တစ်ခုက အစိတ်အပိုင်းကို ၎င်းလုပ်ရမည့်အရာ (အပူပို့ရန်၊ စီးဆင်းမှု၊ ဖိအား၊ ပစ္စည်း၊ ပရင့်ထုတ်သည့်နည်းလမ်း) မှ သတ်မှတ်ပြီး စာအုပ်ပုံစံ ဖော်မူလာများဖြင့် တည်ဆောက်သည်၊ ထို့နောက် သုံးထားသော ဂဏန်းများကို ၎င်းတို့၏ ရင်းမြစ်များနှင့်အတူ၊ ၎င်း၏ ထုတ်လုပ်မှု စစ်ဆေးချက်များနှင့် ခွဲခြမ်းစိတ်ဖြာရေး ကိရိယာများအတွက် ဖိုင်များ ပြန်ပေးသည်။ input တူသည်ဆိုလျှင် ကွန်ပျူတာမည်သည့်နေရာမဆို အစိတ်အပိုင်း တူသည်။ generator ကို အစိတ်အပိုင်းတွင် ထားသည်၊ အစိတ်အပိုင်းကို ဖွင့်ခြင်းသည် script ကို ဘယ်တော့မှ မလုပ်ဆောင်ပါ။ [ရုပ်ပိုင်းဆိုင်ရာ အစိတ်အပိုင်းများ: generators](topic:engineer-generators) နှင့် [Generator ရေးခြင်း](topic:write-a-generator) ကို ကြည့်ပါ။

**Sketching, drawings နှင့် ပြုလုပ်ခြင်း**

- **ဓာတ်ပုံမှ sketch။** {{ui:Features}} › {{ui:နောက်ထပ်}} › {{ui:Sketch from a photo…}} သည် ရိုးရှင်းသော မြေပြင်ပေါ်ရှိ ပြား အစိတ်အပိုင်း (အပြင်ပန်းနှင့် အပေါက်များ) သို့မဟုတ် ပင်ဆွဲပုံကို မျဉ်း၊ arc နှင့် စက်ဝိုင်းများအဖြစ် ခြေရာခံသည်။ အရှည်တစ်ခုကို ပေးပြီး ကြိုကြည့်မှုကို စစ်ဆေးကာ sketch ကို ပြုလုပ်ပါ။ [Sketching အခြေခံများ](topic:sketch-basics#a-sketch-from-a-photo) ကို ကြည့်ပါ။
- **Printing အတွက် Scale နှင့် split။** {{ui:ထုတ်ရန်}} › {{ui:Scale for printing (STL or 3MF)…}} သည် ပြောင်းလဲမှု မရှိစေဘဲ ဝင်ရိုးတစ်ခုချင်း စကေးလုပ်သည်၊ ဥပမာ shrinkage ခွင့်ပြုချက်ဖြင့်။ {{ui:ထုတ်ရန်}} › {{ui:Split for printing (a zip of pieces)…}} သည် သင့် bed အတွက် ကြီးလွန်းသော အစိတ်အပိုင်းကို အမှတ်ရှိ အပိုင်းများအဖြစ် ဖြတ်ပြီး pegs, keys, dovetails, dowel holes သို့မဟုတ် magnet pockets ဖြင့် ချိတ်သည်။ [3D ပရင့်ထုတ်ခြင်း](topic:print-3d) ကို ကြည့်ပါ။
- **Sheets များကို G-code သို့ nest လုပ်ခြင်း။** {{ui:ထုတ်ရန်}} › {{ui:Nested sheets to G-code}} သည် nest လုပ်ထားသော DXF ကို ဖတ်ပြီး သင်ရွေးသော post မှတစ်ဆင့် sheet တစ်ခုစီအတွက် program တစ်ခု ပြုလုပ်သည်: အပေါက်များနှင့် ဖြတ်ထွက်မှုများ အရင်၊ ထို့နောက် အပြင်ပန်းများ။ lead-ins၊ ဖြတ်သည့် အစီအစဉ်သို့မဟုတ် မျှဝေသော အစွန်းများကို စီစဉ်ခြင်း မရှိပါ။ [Sheets ပေါ်တွင် ပြား အစိတ်အပိုင်းများ nest လုပ်ခြင်း](topic:nest-flat-parts#cut-the-sheets-g-code) ကို ကြည့်ပါ။
- **ကိုယ်တိုင် ပိုလုပ်ပေးသော ပုံဆွဲများ။** {{ui:Sheet}} › {{ui:Automatic}} သည် မြင်ကွင်းများကို 1:1 အထိ အကြီးဆုံး စံစကေးဖြင့် ကိုင်ထားနိုင်သော အသေးဆုံး A-size sheet ကို ရွေးသည်။ {{ui:Dimension the holes}} သည် အပေါက်တစ်ခုစီတွင် ဗဟိုအမှတ်အသား၊ အရွယ်အစားတစ်ခုလျှင် callout တစ်ခု နှင့် မြင်ကွင်း၏ ဘယ်အောက်ထောင့်မှ နေရာများကို ထည့်သည်။ [ပုံဆွဲတစ်ခု ပြုလုပ်ခြင်း](topic:drawing-pdf) ကို ကြည့်ပါ။

**အက်ပ်အားလုံးတွင်**

- **ဘာသာစကားများ။** အက်ပ်များသည် ဘာသာစကား 54 မျိုးဖြင့် လာသည်။ အင်္ဂလိပ်ထက် တခြားဖြစ်သည်များသည် ဒေသခံ ဖတ်သူ မဖတ်မချင်း စက်ဖြင့် ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်သည်။
- **Toolbar အတန်းများ။** {{ui:ဆက်တင်များ}} › {{ui:အထွေထွေ}} › {{ui:Toolbar rows}} သည် Wrap (ယခင်အတိုင်း), 2 အတန်း သို့မဟုတ် 1 အတန်းကို ရွေးပေးသည်; မကိုက်သော ဘားသည် ဘေးသို့ scroll လုပ်သည်။ PartCraft ၏ Feature ribbon သည် အသုံးအများဆုံး ကိရိယာကို ကြီးကြီးပြပြီး variants များကို split ခလုတ်နောက်တွင် ဖုံးသည်။
- **သင့် AI ကို ချိတ်ဆက်ခြင်း။** Studio သည် ကိုယ်ပိုင် assistant ကို အက်ပ်ရှစ်ခုလုံးသို့ ချိတ်ဆက်သော hub ဖြစ်ပြီး အက်ပ်တစ်ခုစီအတွက် ဖတ်ရုံ၊ အကြံပြု သို့မဟုတ် တည်းဖြတ်ခွင့် ရှိသည်။ ချိတ်ဆက်ထားသော assistant သည် ဝန်အတွက် ဘရက်ကက်ကဲ့သို့ ဝါကျတစ်ခုမှ အစိတ်အပိုင်းကို အရွယ်အစားချနိုင်၊ ၎င်း၏ လုပ်ဆောင်ပုံနှင့် စစ်ဆေးချက်အားလုံးကို ပြပြီး တည်ဆောက်နိုင်သည်; ၎င်း မစစ်ဆေးသည်များ (stress concentration, fatigue, plastics တွင် creep) ကို ပြောသည်။ [PartCraft ကို AI assistant နှင့် အသုံးပြုရန်](topic:use-with-ai-assistants) ကို ကြည့်ပါ။

### 0.8.1 တွင် ပြင်ဆင်ခဲ့သည်

- **မျက်နှာပြင်အပြည့် cursor အေးခဲခြင်း။** hover pick ကို ယခု throttle လုပ်ထားသည်။ အကြောင်းရင်းသည် ကျွန်ုပ်တို့၏ အကောင်းဆုံး ဖတ်ရှုချက်ဖြစ်ပြီး အသိပေးသူနှင့် အတည်မပြုရသေးပါ။
- **Run time တွင် ဘာသာစကား။** Studio နှင့် packed editions များသည် run ချိန်တွင် ဘာသာစကား ပြောင်းနိုင်သည်; ယခင်က အင်္ဂလိပ်တစ်ခုတည်း ရှိသည်။ ဤသည်မှာ ပလက်ဖောင်းတိုင်းတွင် မစမ်းသပ်ရသေးပါ: ဘာသာစကား မပြောင်းလျှင် ကျွန်ုပ်တို့ကို ပြောပါ။

### ဤဗားရှင်းတွင် ရှိမနေသေးသည်များ

- Connect your AI သည် မပြီးသေးပါ: Studio အတွင်း တစ်ချက်နှိပ်ချိတ်ဆက်ခြင်း၊ browser AI အတွက် hosted connector၊ Studio အတွင်း သင့် API key နှင့် ထုတ်ပြန်ထားသော MCP package တို့ကို မကတိပေးပါ။ Studio တွင် ကိုယ်ပိုင် AI မရှိပါ။
- Studio ကို code-signed မလုပ်ထားပါ: Windows က သတိပေးနိုင်ပြီး macOS က right-click ပြီး Open ကို တောင်းသည်။ [ပြဿနာရှာဖွေခြင်း](topic:troubleshooting) ကို ကြည့်ပါ။
- Stack-ups သည် တစ်ဘက်လမ်းတည်းဖြစ်ဆဲ: [Tolerance stack-ups](topic:tolerance-stackup) ကို ကြည့်ပါ။
- ကျန်သည်များကို [မတည်ဆောက်ရသေးသောအရာ](topic:not-built-yet) တွင် စာရင်းပြုထားသည်။

ယခင်ပြောင်းလဲမှုများသည် [0.7 တွင် အသစ်](topic:whats-new-0-7) တွင် ရှိသည်။
