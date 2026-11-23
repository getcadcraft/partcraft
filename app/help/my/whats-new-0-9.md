---
title: 0.9 တွင် အသစ်ရှိသည်များ (ယခင်)
summary: PartCraft 0.9 တွင် မျက်နှာများကြား fillet နှင့် solids အဖြစ် ထူခြင်း၊ ပစ္စည်းထောင်ပေါင်းများစွာ၏ assemblies၊ revisions ပါသော Documents vault၊ Solid FEM stress add-on၊ arc နည်းလမ်း ဆယ်မျိုး၊ UK steel အရွယ်အစားများ၊ Print stage နှင့် resin printing add-ons ပါဝင်သည်။
keywords: whats new 0.9, earlier release, whats new, what's new, release notes, changelog, 0.9, fillet between faces, rolling ball, fillet several edges, thicken, solid from surfaces, step shell, iges solid, scan fillets, large assembly, lightweight display, 20000 parts, documents, vault, check out, revision, release, where used, rhino link, grasshopper, 3dm, cursors, factory floor, job queue, solid fem, finite element, von mises, natural frequency, arc methods, 3-point arc, uk steel sections, blue book, print stage, resin, goo, ctb, bed, lay flat, whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch from a photo, scale for printing, split for printing, shrinkage, nested sheets, g-code, drawing, dimension holes, assistant, mcp, languages, toolbar rows
from: 1dafd7c8
---

ဤသည်မှာ PartCraft 0.9 တွင် 0.8.1 နှင့် နှိုင်းယှဉ်လျှင် ပြောင်းလဲသွားသော အရာများ ဖြစ်သည်။ Freeform မျက်နှာများသည် ယခု solids အဖြစ် ပိတ်လာပြီး ပစ္စည်း ထောင်ပေါင်းများစွာပါသော assemblies သည် အသုံးဝင်ဆဲ ဖြစ်ပြီး Documents vault က revisions ကို ထိန်းသည်၊ Solid FEM add-on က part တစ်ခု၏ stress ကို စစ်ဆေးသည်။ အရာတစ်ခုစီက ၎င်းကို ဘယ်မှာ တွေ့ရမည်ကို ပြောသည်။

## 0.9.1 တွင် အသစ်

- **Exact STEP export။** {{ui:ထုတ်ရန်}} › {{ui:STEP AP242 (တိကျသော solid)}} နှင့် {{ui:STEP AP214 (တိကျသော solid)}} ယခု အလုပ်လုပ်သည်။ အပေါက်များ၊ bosses၊ fillets၊ ကွန်းများ၊ ကုလားထိုင်ပုံ... (spheres) နှင့် torus များကို ၎င်းတို့၏ အစစ်အမှန် မျက်နှာများပေါ်တွင် ရေးပြီး စက်ဝိုင်း အစစ်အမှန်များကို အစွန်းများအဖြစ် ရေးသည်၊ ထို့ကြောင့် အခြား CAD သို့မဟုတ် CAM program က အပေါက်ကို အပေါက်အဖြစ် ရွေးနိုင်သည်။ ဘေးနား spline၊ ပုံဖော်ထားသော threads နှင့် တင်သွင်းထားသော mesh များသည် တူညီသော solid အတွင်း ပြားသော facets အဖြစ် ဆက်နေသည်။ [ပုံနှိပ်ရန်၊ STEP နှင့် DXF အတွက် ထုတ်ခြင်း](topic:export-files#for-other-cad-programs-step) ကို ကြည့်ပါ။
- **STEP ဝင်၊ exact STEP ထွက်။** သင်ဖွင့်သော STEP ဖိုင်သည် ၎င်း၏ ကိုယ်ပိုင် ပြားသော မျက်နှာများ၊ ဆလင်ဒါများ၊ ကွန်းများ၊ spheres နှင့် tori ကို ထိန်းထားသည်၊ ထို့ကြောင့် {{ui:ထုတ်ရန်}} › {{ui:STEP AP242 (တိကျသော solid)}} က ၎င်းတို့ကို facets အစား အစစ်အမှန် မျက်နှာများအဖြစ် ပြန်ရေးသည်: bolt အပေါက်ပါသော ပေးသွင်းသူ၏ beam သည် ဝင်လာသည့် မျက်နှာများနှင့်အတူ ထွက်သွားပြီး သင်ဖြတ်ထည့်ထားသော အရာများ ပါလာသည်။ ဖိုင်၏ spline၊ swept နှင့် revolved မျက်နှာများသည် facets အဖြစ် ဆက်နေပြီး STL၊ OBJ နှင့် 3MF bodies လည်း ထိုနည်းပင်။ အစောပိုင်း သိမ်းထားသော ပစ္စည်းအတွက် STEP ဖိုင်ကို ထပ်ဖွင့်ပါ။ [STEP ဖိုင် ဖွင့်ပြီး အခြေခံ ဆောက်ခြင်း](topic:import-step) ကို ကြည့်ပါ။
- **Drawing DXF တွင် အစစ်အမှန် စက်ဝိုင်းများ။** {{ui:ထုတ်ရန်}} › {{ui:DXF of the sketch or flat face}} ကို ပြားသော မျက်နှာနှင့် ရွေးထားသည့်အခါ ယခု အပေါက်ဝိုင်းများကို စက်ဝိုင်းများအဖြစ် ရေးသည်၊ အပေါက်၏ ကိုယ်ပိုင် အလယ်နှင့် ရေဒီယပ်ဖြင့်၊ laser၊ plasma သို့မဟုတ် waterjet စားပွဲအတွက်။ အခြား ဝိုင်းအစွန်းများသည် ဆက်လက် facets ဖြစ်သည်။
- **ဆိုင်အတွက် Exact STEP။** {{ui:Manufacture}} တွင် {{ui:တိကျသော STEP (အလုပ်သြဒိနိတ်)}} က ပစ္စည်းကို setup ၏ work origin တွင် origin ရှိပြီး Z သည် tool axis အတိုင်းဖြင့် ရေးသည်၊ G-code က သုံးသော သြဒိနိတ်များ။ [G-code နှင့် လမ်းကြောင်းများ ပြုလုပ်ခြင်း](topic:manufacture#exact-step-for-the-shop) ကို ကြည့်ပါ။

## အသစ်

### မျက်နှာပြင်များနှင့် solids

- **မျက်နှာများကြား Fillet။** {{ui:Workspace}} ဘောက်စ်တွင် {{ui:Surfaces}} ကို ရွေးပြီး {{ui:မျက်နှာများကြား Fillet}} ကို ရွေးပါ။ Solid တစ်ခု၏ မျက်နှာနှစ်ခုကို ရွေးပါ၊ ရေဒီယပ်ကို ရိုက်ပါ (နှင့် အစွန်းတွင် ပြောင်းလဲသော ရေဒီယပ်အတွက် {{ui:အဆုံးရှိ radius (mm၊ 0 = အတူတူ)}})။ ရလဒ်လိုင်းက fillet သည် စံပြ rolling ball မှ ဘယ်လောက်ဝေးသလဲ ပြောပြပြီး မသင့်သော ရေဒီယပ်ကို မျက်နှာအမည်ဖြင့် ငြင်းသည်။ {{ui:Fillet several edges}} က အစွန်းများစွာကို အဆင့်တစ်ခုတည်းဖြင့် ဝိုင်းသည်; သုံးခုတွေ့သော ပြားမျက်နှာများ၏ ဝိုင်းထားသော အစွန်းသုံးခု တွေ့ရာတွင် sphere ထောင့်အတွက် {{ui:Corners (sphere patch where three meet)}} ကို ရွေးပါ။ [Freeform မျက်နှာပြင်များ (NURBS)](topic:nurbs-surfaces) ကို ကြည့်ပါ။
- **Solid အဖြစ် ထူခြင်း။** {{ui:Solid အဖြစ် ထူပေးရန်}} က တူညီသော workspace တွင် မျက်နှာတစ်ခုကို အထူ ပေးသည်; {{ui:တခြားဘက်}} က ၎င်းကို အခြားဘက်သို့ ကြီးစေသည်။ ခေါက်ခြင်း သို့မဟုတ် ကိုယ်တိုင်ဖြတ်ခြင်းကို မျက်နှာနှင့် နေရာကို အမည်ပေးပြီး ငြင်းသည်။
- **မျက်နှာများမှ Solids။** ဖြတ်ထားသော မျက်နှာများကို union၊ subtract နှင့် intersect ဖြင့် ပေါင်းပြီး ပစ္စည်းထဲ undo အဆင့်တစ်ခုအဖြစ် ထည့်နိုင်သည်။ STEP က solid ကို shell ပိတ်တစ်ခုအဖြစ် ရေးပြီး IGES က solid တစ်ခုအဖြစ် ရေးသည်; နှစ်ခုလုံး solid အဖြစ် ပြန်ဖတ်သည်။ မျက်နှာများက အစွန်းတစ်ခုချင်းစီ တွဲမရလျှင် ဖိုင်က သီးခြား မျက်နှာများ ရရှိပြီး status လိုင်းက ထိုအတိုင်း ပြောသည်။ Solids ကို node editor တွင်လည်း ဖန်တီးနိုင်သည်; [Node editor](topic:nodes) ကို ကြည့်ပါ။
- **Scans ရှိ rim နှင့် variable fillets။** မျက်နှာများကို scan သို့ သင့်လျော်အောင်လုပ်သောအခါ rim fillets (tori) နှင့် ရေဒီယပ် ပြောင်းသော variable fillets ကို နည်းနည်း ဖြောင့်သော အစွန်းတစ်လျှောက် ရှာပြီး ရေဒီယပ်ဖြင့် စာရင်းပြုသည်။ ၎င်းကို လုပ်ဆောင်ထားသော scans ပေါ်တွင်သာ စမ်းသပ်ထားသည်။

### Assemblies၊ documents နှင့် links

- **ကြီးမားသော assemblies။** မိတ္တူဖြစ်သော ပစ္စည်းများက mesh တစ်ခုကို မျှဝေပြီး {{ui:Views}} › {{ui:Lightweight display}} က ဘောက်စ်များ ဆွဲသဖြင့် view က ရွေ့နေသည် (အလွန်ကြီးသော assemblies အတွက် အလိုအလျောက် ဖွင့်သည်; ရွေးချယ်ခြင်းနှင့် joints များက ဆက်လက် မူရင်း ပစ္စည်းများကို သုံးသည်)။ Part tree က ပထမ အတန်းများနှင့် ကျန်သည်များအတွက် {{ui:အခြား 700 ပြရန်}} ခလုတ်ကို ပြသည်။ Assembly ဖိုင်များတွင် instances 50,000 နှင့် joints 100,000 အထိ ထားနိုင်သည်။ [Assembly တည်ဆောက်ခြင်း](topic:build-assembly) ကို ကြည့်ပါ။
- **Documents။** **ဖိုင်** အုပ်စုရှိ {{ui:စာရွက်စာတမ်းများ…}} က project folder အပေါ် dialog ဖွင့်သည်: check out နှင့် check in၊ revision အက္ခရာများ၊ states (work in progress၊ for review၊ released၊ obsolete)၊ history၊ where-used နှင့် bill of materials။ [Documents နှင့် revisions (vault)](topic:documents-walkthrough) ကို ကြည့်ပါ။
- **Live Rhino link။** Script တစ်ခု `cadcraft_link.py` က Rhino သို့မဟုတ် Grasshopper document ကို ကြည့်ပြီး ပြောင်းသည့်အရာကိုသာ PartCraft သို့ တွန်းပို့သည်၊ တင်သွင်းထားသော feature က shape အသစ်ပေါ်တွင် ပြန်တည်ဆောက်သည်။ တစ်ဘက်လမ်းသာ ဖြစ်ပြီး Studio လိုအပ်သည်။ [Live .3dm link](topic:live-3dm-link) ကို ကြည့်ပါ။
- **တစ်ဦးနှင့်တစ်ဦး cursors ကို မြင်ခြင်း။** မျှဝေသော session တွင် လူတစ်ဦးစီ၏ cursor သည် ၎င်းတို့၏ အမည်နှင့် ရွေးထားသော feature ဖြင့် ပြသည်။ [အခြားသူများနှင့် တိုက်ရိုက် အလုပ်လုပ်ခြင်း](topic:work-live) ကို ကြည့်ပါ။
- **Factory floor။** {{ui:Settings}} › {{ui:Add-ons}} တွင် Factory floor add-on ကို ဖွင့်ပါ။ {{ui:Manufacture}} တွင် ပရိုဂရမ် post လုပ်ပြီးနောက် ၎င်း၏ tab က {{ui:Add to the factory job queue}} သို့ ထည့်နိုင် သို့မဟုတ် {{ui:Save as a job file}} သိမ်းနိုင်သည်။ ၎င်းသည် စက်ကို ဘယ်တော့မျှ မပို့ သို့မဟုတ် မစတင်ပါ။

### Analysis နှင့် ပစ္စည်းများ

- **Solid FEM add-on။** {{ui:Settings}} › {{ui:Add-ons}} တွင် {{ui:Solid FEM}} ကို ဖွင့်ပါ (မဖွင့်မချင်း ပိတ်ထားသည်) ထို့နောက် right panel တွင် {{ui:Solid FEM}} tab ပေါ်လာသည်။ {{ui:ပစ္စည်းကို mesh ပြုလုပ်ရန်}}၊ 3D view တွင် ပိတ်ထားသော မျက်နှာများနှင့် loads ကို ရွေးပါ၊ {{ui:ဖြေရှင်းရန်}}၊ ပြီးလျှင် {{ui:မော်ဒယ်ပေါ်တွင် ပြရန်}} ဖြင့် displacement၊ von Mises stress သို့မဟုတ် mode shape ကို ဆွဲပါ။ [Solid FEM: stress စစ်ဆေးခြင်း](topic:solid-fem-check) ကို ကြည့်ပါ။
- **Sketch တွင် arc နည်းလမ်း ဆယ်မျိုး။** Sketch toolbar တွင် {{ui:Arc}} ဘေးရှိ မြှားက 3-Point၊ Start Center End၊ Start Center Angle၊ Start Center Length၊ Start End Angle၊ Start End Direction၊ Start End Radius၊ Center Start End၊ Center Start Angle၊ Center Start Length နှင့် Continue ကို စာရင်းပြုသည်။ [နည်းလမ်း ဆယ်မျိုးဖြင့် arc ဆွဲခြင်း](topic:sketch-arc-methods) ကို ကြည့်ပါ။
- **UK steel အရွယ်အစားများ။** Weldments က UK sections 976 ခု (UB၊ UC၊ PFC၊ EA၊ UEA၊ CHS၊ SHS၊ RHS) ကို သုံးနိုင်သည်; `305x165x40 UB` ကဲ့သို့ အရွယ်အစားကို ရိုက်ပါ။ [ဖွဲ့စည်းပုံ အစိတ်အပိုင်းများ](topic:structural-members) ကို ကြည့်ပါ။

### ပုံနှိပ်ခြင်း

- **Print stage။** Toolbar ရှိ {{ui:Print stage}} ခလုတ် (3D Print add-on၊ မူလအားဖြင့် ဖွင့်ထား) က သင့်ပစ္စည်း၏ bodies များကို dashed ခုတင်ပေါ် တင်သည်: {{ui:ပြားခင်းရန်}}၊ {{ui:90° လှည့်ရန်}}၊ {{ui:ခုတင်ပေါ် စီရန်}}၊ {{ui:အားလုံး ခုတင်ပေါ် ကိုက်ညီအောင်}}၊ {{ui:အလွှာ အကြိုကြည့်ရန်}}၊ ထို့နောက် USB၊ Klipper (Moonraker)၊ OctoPrint သို့မဟုတ် PrusaLink ဖြင့် {{ui:3D ပရင်တာသို့ ပို့ရန်}}။ သင်အတည်မပြုမချင်း ဘာမျှ မပို့ပြီး သင့်ပစ္စည်းကို ဘယ်တော့မျှ မပြောင်းပါ။ STL သို့မဟုတ် 3MF ဖိုင်အတွက်ကို [3D ပုံနှိပ်ရန် ပစ္စည်း ပြင်ဆင်ခြင်း](topic:print-3d) ကို ကြည့်ပါ။
- **Resin printing။** {{ui:Settings}} › {{ui:Add-ons}} တွင် add-ons များ၊ ဖွင့်မချင်း အားလုံး ပိတ်ထား: resin slicer၊ exposure test နှင့် Elegoo GOO၊ SL1၊ Chitubox CBDDLP/CTB နှင့် Anycubic ဖိုင်ပုံစံများ။ Slicing က worker thread တွင် run ပြီး စာမျက်နှာက တုံ့ပြန်နေသည်။

## Apps အားလုံးတွင်

- Hover အကြံပြုချက် တိုင်းသည် Bootstrap tooltip ဖြစ်သည်။
- Start tip တွင် ပိတ်ရန် ခလုတ် ရှိပြီး ပိတ်ထားသည်။
- Panel ၏ tabs အတန်းသည် မကိုက်ညီလျှင် ဖြတ်တောက်ခံရမည့်အစား ဘေးသို့ scroll ဖြစ်သည်။
- Browser tab က PartCraft | CadCraft မတိုင်မီ ဖွင့်ထားသော document ၏ အမည်ကို ပြသည်။
- {{ui:Settings}} က workspace {{ui:Layout}} ကို ရွေးချယ်စရာများ drop-down အဖြစ် ပြပြီး language ဘောက်စ်က build တွင် ရှိသော ဘာသာစကား အားလုံးကို စာရင်းပြုသည်။
- Weight နှင့် Temperature တို့သည် Units settings ရှိ unit အမျိုးအစားများ ဖြစ်သည်။

## ပြင်ဆင်ပြီး

- Sketch Arc menu က နည်းလမ်းအားလုံးကို ယခု စာရင်းပြုသည်။
- Add-on toolbar နှင့် browser tab title ကို 2026-11-09 တွင် ပြင်ဆင်ခဲ့သည်။

## ရိုးရာ ကန့်သတ်ချက်များ

- Exact STEP ကို OpenCascade တွင် ပြန်ဖတ်ခဲ့သည် (မှန်ကန်သော solids၊ လက်ဖြင့် တွက်ထားသော ထုထည်များနှင့် ညီ)။ CAD သို့မဟုတ် CAM program အားလုံးတွင် ယခုထိ မဖွင့်ရသေးပါ၊ assembly ကို exact STEP အဖြစ် မရေးပါ။
- စက်ပေါ်တွင် မည်သည့်အရာမျှ မပုံနှိပ်ရသေးပါ။ Slicing၊ G-code နှင့် resin ဖိုင်များကို ကိုယ်ပိုင် program များ သို့မဟုတ် stand-in printer က ပြန်ဖတ်ခဲ့သည်; resin ဖော်မတ်တစ်ခုမျှ printer ပေါ်တွင် မတင်ခဲ့ပါ၊ printer အရွယ်အစားများနှင့် exposure များသည် စတင်တန်ဖိုးများ ဖြစ်သည်။
- Solid FEM သည် linear၊ isotropic နှင့် elastic ဖြစ်ပြီး ပစ္စည်းတစ်ခု တစ် part၊ contact၊ yielding သို့မဟုတ် buckling မရှိပါ။ ပိတ်ထားသော မျက်နှာများနှင့် ထက်မြက်သော ထောင့်များတွင် stress သည် mesh ပေါ်မူတည်သည်။ ၎င်းသည် စစ်ဆေးရေး အကူအညီ ဖြစ်ပြီး အင်ဂျင်နီယာက မပြန်လည်သုံးသပ်ထားပါ။
- ကြီးမားသော assembly အချိန်များသည် GPU မပါသော ဆာဗာမှ ဖြစ်သည်; ပစ္စည်း ၂၀,၀၀၀ ၏ အပြည့်အစုံ frame သည် ထိုနေရာတွင် ဆဲဆဲ စက္ကန့်များ ကြာသည်။
- Fillets များသည် မျက်နှာတွဲများပေါ်တွင် အလုပ်လုပ်သည်; ယေဘုယျ vertex blend မရှိပြီး မတွေ့ဆုံသော မျက်နှာများကြား fillet မရှိပါ။
- Rhino link ကို Rhino သို့မဟုတ် Grasshopper အစစ်အတွင်း မဖြစ်ဖူးပါ။ Documents ကို programs နှစ်ခုက folder တစ်ခုပေါ်တွင် စမ်းသပ်ခဲ့ပြီး လူနှစ်ယောက်က network share ပေါ်တွင် မစမ်းသပ်ခဲ့ပါ။
- စစ်မှန်သော scan သို့ မျက်နှာများ သင့်လျော်အောင်လုပ်ခြင်းကို လက်ဖြင့် စစ်ဆေးမှု မပြုရသေးပါ။ အင်္ဂလိပ်မဟုတ်သော ဘာသာစကားများသည် စက်ဖြင့် ရေးသော မူကြမ်းများ ဖြစ်သည်။
- Windows installers များကို code-signed မလုပ်ထားပြီး macOS disk image ကို notarize မလုပ်ထားပါ။ [ပြဿနာရှာဖွေခြင်း](topic:troubleshooting) ကို ကြည့်ပါ။

အရင်ပြောင်းလဲမှုများကို [0.7 တွင် အသစ်ရှိသည်များ](topic:whats-new-0-7) တွင် တွေ့နိုင်သည်။

## ယခင်: 0.8 နှင့် 0.8.1

ဤသည်မှာ PartCraft 0.8 နှင့် 0.8.1 တွင် 0.7 နှင့် နှိုင်းယှဉ်လျှင် ပြောင်းလဲသွားသော အရာများ ဖြစ်သည်။ Simulation က သင်ပြင်နေစဉ် ဖြေနေပြီး ပြောင်းသွားသည့်အရာ ပြသသည်၊ assemblies များက motion studies ရရှိပြီး workspace အသစ်များက freeform မျက်နှာများနှင့် ရုပ်ပိုင်းဆိုင်ရာ အရွယ်အစားရှိသော ပစ္စည်းများကို ဖန်တီးသည်။ 0.8.1 သည် အသေးစား fix ဖြစ်သည်။

### အသစ်

**Simulation**

- **ပြင်နေစဉ် အပ်ဒိတ်လုပ်ခြင်း။** Solve block ရှိ {{ui:တည်းဖြတ်နေစဉ် အပ်ဒိတ်လုပ်ရန်}} ကို ရွေးပါ၊ အဖြေများက သင်ပြင်သည်ကို လိုက်သည်။ အတိုင်းအတာ၊ load သို့မဟုတ် ပစ္စည်းကို ပြောင်းလျှင် element လေးဆ ပိုကြီးသော အမြန် အဖြေ ချက်ချင်း ပေါ်လာသည်; စက္ကန့် ~တစ်ခုခန့် ရပ်လျှင် study ၏ ကိုယ်ပိုင် refined အဖြေက ၎င်းကို အစားထိုးသည်။ ရလဒ်များက သင်ကြည့်နေသည့်ရလဒ်ကို ပြောသည်။ သံမဏိ cantilever ပေါ်တွင် အမြန်အဖြေက deflection တွင် refined အဖြေ၏ 1 % အတွင်းနှင့် stress တွင် ~4 % အတွင်း ရှိသည်။ [Stress နှင့် deflection စစ်ဆေးခြင်း](topic:simulation#update-while-you-edit-live) ကို ကြည့်ပါ။
- **အရင်ပျက်မည်မှာ။** Static သို့မဟုတ် buckling study အတွက် **Break it** block ရှိ {{ui:ဘာ အရင်ပျက်မလဲ?}} က loads များကို ပစ္စည်း ပျက်သည်အထိ scale လုပ်သည်။ အဆိုးဆုံးမှ စ၍ ပထမ yield အထိ load factor (stress အမြင့်ဆုံးနေရာတွင် အနီရောင် အမှတ်ဖြင့်) နှင့် buckling အထိ load factor ကို စာရင်းပြုသည်။ Factor 1 အောက်ဆိုလျှင် ပစ္စည်းသည် ဝန်ထားစဉ် ပျက်နေပြီဖြစ်ပြီး Problems က error ပြသည်။ Factors များသည် linear study မှ ဖြစ်သောကြောင့် ၎င်းကဲ့သို့သာ ကောင်းသည်။ [Stress နှင့် deflection စစ်ဆေးခြင်း](topic:simulation#find-out-what-breaks-first-break-it) ကို ကြည့်ပါ။
- **Yielding နှင့် contact။** Study အမျိုးအစား နှစ်ခုထပ်: ပစ္စည်းက ၎င်း၏ မျဉ်းဖောင်း သည် yield stress အထိ လိုက်ပြီး ထို့နောက် ပိုပြားသော စောင်းသို့ ပြောင်းသော nonlinear တစ်ခု၊ plastic strain ကို ဆွဲထားပြီး၊ ခွဲထားသော အပိုင်းများက တစ်ခုကို တစ်ခု တွန်းသည် (ပွတ်တိုက်မှု မရှိ) သို့မဟုတ် ကပ်နေသည် (bonded) contact တစ်ခု။ Load step မပြေလည်နိုင်ခြင်း သို့မဟုတ် အပိုင်းများ တစ်ခုနှင့်တစ်ခု အလွန်နက်နက် နစ်ဝင်ခြင်းကို Problems panel တွင် ပြသည်။ ပွတ်တိုက်မှု၊ ကြီးမားသော ချော်ရွေ့မှု၊ ကြီးမားသော လှည့်ခြင်း၊ ကြီးမားသော deflection နှင့် fatigue ကို မဖြေရှင်းပါ။ [Stress နှင့် deflection စစ်ဆေးခြင်း](topic:simulation#yielding-and-contact-nonlinear-studies) ကို ကြည့်ပါ။
- **CalculiX အတွက် decks။** {{ui:ထုတ်ရန်}} › {{ui:CalculiX deck (.inp)}} က study ကို CalculiX အတွက် သိမ်းသည်၊ သင်ကိုယ်တိုင် install နှင့် run လုပ်ရသော သီးခြား program ဖြစ်သည်; {{ui:ထုတ်ရန်}} › {{ui:CalculiX results (.frd)}} က ၎င်း၏ result ဖိုင်ကို တူညီသော mesh ပေါ်သို့ ပြန်ဖတ်သည်။ PartCraft သည် ထို program ကို ဘယ်တော့မျှ မစတင်ပါ၊ deck သိမ်းပြီးနောက် ပစ္စည်း ပြောင်းသွားလျှင် ထိုအကြောင်း ပြောသည်။

**Assemblies**

- **Motion studies။** {{ui:Assembly}} › {{ui:Motion}} က joint တစ်ခု၏ တန်ဖိုးကို သင်ပေးသော အချိန်အတွင်း မောင်းသည် (အမြန်နှုန်းကိန်း၊ ချိုသာ၊ sine သို့မဟုတ် ထွက်ပြီး ပြန်ဝင်)၊ assembly ကို joints နှင့် closed loops ဖြင့် step တစ်ခုစီတွင် နေရာချပြီး ဘာတိုက်နေသလဲ၊ အနီးဆုံး ဘယ်လောက်ရောက်သလဲ အစီရင်ခံသည်။ {{ui:Point ထည့်ရန်}} က အမှတ်တစ်ခု၏ နေရာ၊ အမြန်နှုန်းနှင့် အရှိန်ကို၊ joint ၏ တန်ဖိုးနှင့် clearance ကို အချိန်နှင့်အတူ ဆွဲသည်; {{ui:CSV သိမ်းရန်}} နှင့် {{ui:ဂရပ် သိမ်းရန်}} က ၎င်းတို့ကို ရေးထုတ်သည်။ {{ui:Run}} ပြီးနောက် run bar ရှိ Step through က assembly ကို မည်သည့် step သို့မဆို ရွှေ့သည်။ Study ၏ ဆက်တင်များကို assembly ဖိုင်တွင် သိမ်းသည်။ အမြန်နှုန်းနှင့် အရှိန်ကို မှတ်တမ်းတင်ထားသော နေရာများမှ တွက်သည်၊ ထို့ကြောင့် ထက်မြက်သော အထွတ်အထိပ် နည်းနည်းနိမ့်ပြသလျှင် step ပိုသုံးပါ။ [Assembly တွင် clashes နှင့် motion စစ်ဆေးခြင်း](topic:check-assembly#a-motion-study) ကို ကြည့်ပါ။

**မျက်နှာပြင်များနှင့် ရုပ်ပိုင်းဆိုင်ရာ ပစ္စည်းများ**

- **မျက်နှာပြင် workspace။** Workspace အကွက်တွင် {{ui:Surfaces}} ကို ရွေးပြီး ပစ္စည်းဘေးတွင် NURBS curves နှင့် surfaces များ: {{ui:Curve}}၊ {{ui:Loft}}၊ {{ui:Sweep}}၊ {{ui:Match}} နှင့် {{ui:Zebra}}၊ continuity (G0၊ G1 သို့မဟုတ် G2) ကို exact မျက်နှာများပေါ်တွင် တိုင်းသည်၊ သင်တောင်းဆိုထားသည်ထက် ဆိုးသော အစွန်းကို Match fix ဖြင့် Problems တွင် စာရင်းပြုသည်။ {{ui:Fair}} က hull လိုင်းများ၏ inflections နှင့် curvature ခုန်ခြင်းကို တိုင်းပြီး မညီညာသည်များကို သင်၏ သည်းခံမှုအတွင်း ပြန်တည်ဆောက်သည်။ မျက်နှာများကို part ဖိုင်တွင် သိမ်းပြီး ပစ္စည်း၏ features ကို မပြောင်းပါ။ [Freeform မျက်နှာပြင်များ (NURBS)](topic:nurbs-surfaces) ကို ကြည့်ပါ။
- **Engineer workspace။** Workspace switcher မှ {{ui:Engineer}} ကို ရွေး၊ generator တစ်ခုရွေးပြီး {{ui:New}} ကို နှိပ်ပါ: script က ပစ္စည်းကို ၎င်းလုပ်ရမည့်အရာ (ပူးအောင် အပူ၊ စီးဆင်းမှု၊ ဖိအား၊ ပစ္စည်း၊ ပုံနှိပ်နည်း) မှ အရွယ်အစားဖြတ်ပြီး စာအုပ်ပါ ပုံသေနည်းများဖြင့် တည်ဆောက်ပြီး သုံးသော နံပါတ်များကို ၎င်းတို့၏ ရင်းမြစ်များနှင့် ထုတ်လုပ်မှု စစ်ဆေးချက်များ၊ ခွဲခြမ်းစိတ်ဖြာရေး ကိရိယာများအတွက် ဖိုင်များနှင့်အတူ ပြန်ပေးသည်။ တူညီသော input များက ကွန်ပျူတာ မည်သည့်အရာပေါ်တွင်မဆို တူညီသော ပစ္စည်းကို ပေးသည်။ Generator ကို ပစ္စည်းထဲ သိမ်းထားပြီး ပစ္စည်းဖွင့်ခြင်းက script ကို ဘယ်တော့မျှ မ run ပါ။ [ရုပ်ပိုင်းဆိုင်ရာ ပစ္စည်းများ: generators](topic:engineer-generators) နှင့် [Generator ရေးခြင်း](topic:write-a-generator) ကို ကြည့်ပါ။

**Sketching၊ drawings နှင့် ပြုလုပ်ခြင်း**

- **ဓာတ်ပုံမှ sketch။** {{ui:Features}} › {{ui:More}} › {{ui:ဓာတ်ပုံမှ ပုံကြမ်း…}} က ရိုးရှင်းသော မြေပြင်ပေါ်ရှိ ပြားသော ပစ္စည်း (အစွန်းနှင့် အပေါက်များ) သို့မဟုတ် ဘောပင်ဆွဲချက်ကို မျဉ်းများ၊ arcs နှင့် စက်ဝိုင်းများအဖြစ် ခြေရာခံသည်။ အရှည် တစ်ခုပေးပြီး preview ကို စစ်ဆေး၊ sketch ကို ပြုလုပ်ပါ။ [Sketch အခြေခံများ](topic:sketch-basics#a-sketch-from-a-photo) ကို ကြည့်ပါ။
- **ပုံနှိပ်ရန် Scale နှင့် Split။** {{ui:ထုတ်ရန်}} › {{ui:ပုံနှိပ်ရန် စကေး (STL သို့မဟုတ် 3MF)…}} က ပစ္စည်းကို မပြောင်းဘဲ axis အလိုက် scale လုပ်သည်၊ ဥပမာ shrinkage ခွင့်ပြုချက်အတွက်။ {{ui:ထုတ်ရန်}} › {{ui:ပုံနှိပ်ရန် ခွဲခြင်း (အပိုင်းများ၏ zip)…}} က ခုတင်အတွက် ကြီးလွန်းသော ပစ္စည်းကို pegs၊ keys၊ dovetails၊ dowel အပေါက်များ သို့မဟုတ် magnet pockets ဖြင့် ချိတ်ထားသော နံပါတ်ရှိသော အပိုင်းများအဖြစ် ဖြတ်သည်။ [3D ပုံနှိပ်ခြင်း](topic:print-3d) ကို ကြည့်ပါ။
- **Nested sheets မှ G-code။** {{ui:ထုတ်ရန်}} › {{ui:Nested sheets to G-code}} က nested DXF ကို ဖတ်ပြီး သင်ရွေးသော post မှတစ်ဆင့် စာရွက်တစ်ခုလျှင် ပရိုဂရမ်တစ်ခုကို ဖန်တီးသည်: အပေါက်များနှင့် ဖြတ်ထွက်ပိုင်းများ အရင်၊ ထို့နောက် အပြင်ဘောင်များ။ Lead-ins၊ ဖြတ်ခြင်းအစဉ် သို့မဟုတ် ဝေမျှထားသော အစွန်းများကို စီစဉ်ခြင်းမရှိပါ။ [အပြား အစိတ်အပိုင်းများကို စာရွက်ပေါ် စီခြင်း](topic:nest-flat-parts#cut-the-sheets-g-code) ကို ကြည့်ပါ။
- **ကိုယ်တိုင် ပိုလုပ်ပေးသော ပုံဆွဲများ။** {{ui:Sheet}} › {{ui:Automatic}} က views များကို 1:1 အထိ အကြီးဆုံး စံအတိုင်းအတာဖြင့် ထားနိုင်သော အသေးဆုံး A-size စာရွက်ကို ရွေးသည်။ {{ui:အပေါက်များကို အတိုင်းအတာချရန်}} က အပေါက်တစ်ခုစီပေါ် ဗဟို အမှတ်အသား၊ အရွယ်အစားတစ်ခုလျှင် callout တစ်ခုနှင့် view ၏ ဘယ်အောက်ထောင့်မှ တည်နေရာများ ထည့်သည်။ [ပုံဆွဲ ပြုလုပ်ခြင်း](topic:drawing-pdf) ကို ကြည့်ပါ။

**Apps အားလုံးတွင်**

- **ဘာသာစကားများ။** Apps များသည် ဘာသာစကား 54 မျိုးဖြင့် ရရှိနိုင်သည်။ အင်္ဂလိပ်ထက် အခြားသည်များသည် မိခင်ဘာသာစကား ပြန်လည်စစ်ဆေးသည်အထိ စက်ဖြင့် ရေးသော မူကြမ်းများ ဖြစ်သည်။
- **Toolbar အတန်းများ။** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} က Wrap (ယခင်အတိုင်း)၊ 2 တန်း သို့မဟုတ် 1 တန်းကို ရွေးသည်; ကိုက်ညီခြင်းမရှိသော ဘားက ဘေးသို့ scroll ဖြစ်သည်။ PartCraft ၏ Feature ribbon က အသုံးအများဆုံး ကိရိယာကို ကြီးကြီးပြပြီး ကွဲပြားချက်များကို split ခလုတ်နောက်တွင် ဖုံးထားသည်။
- **သင်၏ AI ကို ချိတ်ဆက်ခြင်း။** Studio သည် သင်ကိုယ်ပိုင် assistant ကို apps ၈ ခုလုံးသို့ ချိတ်ဆက်သော hub ဖြစ်ပြီး app တစ်ခုစီအတွက် ဖတ်ရုံ၊ အကြံပြု သို့မဟုတ် တည်းဖြတ်ခွင့်ရှိသည်။ ချိတ်ဆက်ထားသော assistant က "load အတွက် ကြိုး" ကဲ့သို့ စာကြောင်းမှ ပစ္စည်းကို အရွယ်အစားဖြတ်ပြီး ၎င်း၏ အလုပ်နှင့် စစ်ဆေးချက်အားလုံးကို ပြကာ တည်ဆောက်နိုင်သည်; ၎င်းမစစ်ဆေးသော အရာများ (stress concentration၊ fatigue၊ plastics တွင် creep) ကို အစီရင်ခံသည်။ [AI assistant နှင့် PartCraft သုံးခြင်း](topic:use-with-ai-assistants) ကို ကြည့်ပါ။

### 0.8.1 တွင် ပြင်ဆင်ပြီး

- **မျက်နှာပြင် အပြည့် cursor ရပ်ခြင်း။** Hover pick ကို ယခု throttle လုပ်ထားသည်။ အကြောင်းရင်းမှာ ကျွန်ုပ်တို့၏ အကောင်းဆုံး ဖတ်ချက်ဖြစ်ပြီး ပြဿနာတင်ခဲ့သူနှင့် အတည်မပြုရသေးပါ။
- **Run ချိန် ဘာသာစကား။** Studio နှင့် ထုပ်ပိုးထားသော editions များသည် run ချိန်တွင် ဘာသာစကား ပြောင်းနိုင်သည်; ယခင်က အင်္ဂလိပ်သာ ဖြစ်ခဲ့သည်။ Platform အားလုံးတွင် မစမ်းသပ်ရသေးပါ: ဘာသာစကား မပြောင်းလျှင် ကျွန်ုပ်တို့ကို အသိပေးပါ။

### ဤဗားရှင်းတွင် မရှိသေးသော အရာများ

- Connect your AI ကို မပြီးသေးပါ: Studio အတွင်း one-click ချိတ်ဆက်ခြင်း၊ browser AI အတွက် hosted connector၊ Studio အတွင်း သင့်ကိုယ်ပိုင် API key နှင့် ထုတ်ပြန်ထားသော MCP package တို့ကို ကတိမပေးပါ။ Studio တွင် ကိုယ်ပိုင် AI မရှိပါ။
- Studio ကို code-signed မလုပ်ထားပါ: Windows က သတိပေးနိုင်ပြီး macOS က right-click ပြီး Open ကို တောင်းသည်။ [ပြဿနာရှာဖွေခြင်း](topic:troubleshooting) ကို ကြည့်ပါ။
- Stack-ups များသည် တစ်ဘက်လမ်းသာ ဖြစ်ဆဲ ဖြစ်သည်: [Tolerance stack-ups](topic:tolerance-stackup) ကို ကြည့်ပါ။
- ကျန်သည်များကို [ယခုအထိ မတည်ဆောက်ရသေးသော အရာများ](topic:not-built-yet) တွင် စာရင်းပြုထားသည်။

အရင်ပြောင်းလဲမှုများကို [0.7 တွင် အသစ်ရှိသည်များ](topic:whats-new-0-7) တွင် တွေ့နိုင်သည်။
